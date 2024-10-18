import { makeAutoObservable, action, toJS } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import { storageAdapter } from './storage';
import { generateRandomString } from './random';

export type SyncItem = {
  unsynced: boolean;
  id: string;
  created: Date;
  updated: Date;
};

let BASE_URL = 'http://192.168.0.4:8090/api/collections';

export class SyncableStore<T extends SyncItem> {
  items: T[] = [];
  collectionName: string = '';

  constructor(collectionName: string) {
    this.collectionName = collectionName;

    makeAutoObservable(this);

    makePersistable(this, {
      name: collectionName, // Use the collection name
      properties: ['items'],
      storage: storageAdapter, // Define your storage adapter
    }).then(() => {
      this.syncItems().then(() => {
        this.fetchItems();
      });
    });
  }

  // Action to add a new item
  addItem(newItem: T) {
    this.items.push({
      ...newItem,
      id: generateRandomString(),
      created: new Date(),
      updated: new Date(),
      unsynced: true,
    });
  }

  // Sync all local items with the server
  syncItems = action(async () => {
    let fetchedItems = await this.fetchItems();

    for (let index = 0; index < this.items.length; index++) {
      let item = this.items[index];
      let updatedItemIndex = fetchedItems.findIndex(
        (remoteItem: T & { id: string }) => remoteItem.id === item.id
      );

      let localDate = new Date(item.updated as any);

      if (updatedItemIndex > -1) {
        let updatedItem = fetchedItems[updatedItemIndex];
        let remoteDate = new Date(updatedItem.updated as any);

        if (remoteDate > localDate) {
          this.items[index] = updatedItem;
        }
      } else {
        this.syncItem(item);
      }
    }
  });

  // Sync a single item with the server
  syncItem = action(async (item: T) => {
    let result = await fetch(`${BASE_URL}/${this.collectionName}/records`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    }).then((res) => res.json());

    if (result) {
      // You can add more logic if needed for the synced item
    }
  });

  // Fetch items from the server
  fetchItems = async (): Promise<T[]> => {
    let result = await fetch(`${BASE_URL}/${this.collectionName}/records`).then((res) =>
      res.json()
    );
    return result.items;
  };

  // Action to remove an item
  removeItem = action((id: string) => {
    this.items = this.items.filter((item) => item.id !== id);
  });

  // Getter for all items
  get allItems() {
    return toJS(this.items);
  }
}
