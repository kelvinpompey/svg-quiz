// useTrackingTransparency.web.ts

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
  return {
    status: { granted: false },
    requestTrackingPermissionsAsync: () => {
      return new Promise((resolve) => resolve({ granted: false }));
    },
  };
};
