import { useEffect } from 'react';
import {
  getTrackingPermissionsAsync,
  requestTrackingPermissionsAsync,
} from 'expo-tracking-transparency';

export enum PermissionStatus {
  /**
   * User has granted the permission.
   */
  GRANTED = 'granted',
  /**
   * User hasn't granted or denied the permission yet.
   */
  UNDETERMINED = 'undetermined',
  /**
   * User has denied the permission.
   */
  DENIED = 'denied',
}

export const useTrackingTransparency = () => {
  useEffect(() => {
    const loadTrackingPermissionsAsync = async () => {
      const { status } = await getTrackingPermissionsAsync();
      console.log(`Loaded expo-tracking-transparency status as ${status}`);

      if (status === PermissionStatus.UNDETERMINED) {
        await requestTrackingPermissionsAsync();
      }
    };

    loadTrackingPermissionsAsync();
  }, []);
};
