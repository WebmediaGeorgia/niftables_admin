import { ILinks } from '../common/models/configuration';

export const needHideNavItem = (
  navigationConfig?: ILinks,
  restrictId?: string
): boolean => {
  if (!restrictId) return false;
  if (!navigationConfig) return true;
  if (navigationConfig[restrictId]) return false;
  return true;
};
