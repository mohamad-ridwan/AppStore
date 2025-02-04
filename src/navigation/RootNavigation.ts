import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef() as any

export function navigate(name?: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params)
  }
}