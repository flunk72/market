import { FavoritIcon, BasketIcon } from '../icons';
import { NavigationProps } from '../../types/navigation';

export const favoritAndOrder: NavigationProps[] = [
  {
    path: '/favorit',
    icon: FavoritIcon,
    id: 1,
  },
  {
    path: '/basket',
    icon: BasketIcon,
    id: 2,
  },
];
