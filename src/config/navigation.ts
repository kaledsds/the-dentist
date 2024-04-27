import type { IconType } from "react-icons";
import { IoHeart, IoHome } from "react-icons/io5";

export interface NavigationItem {
  id: string;
  label: string;
  description?: string;
  link?: string;
  icon?: IconType;
  subItems?: NavigationItem[];
}

export const navigationItems: NavigationItem[] = [
  {
    id: "home",
    label: "Home",
    link: "/",
    icon: IoHome,
  },
  {
    id: "favorites",
    label: "Favorites",
    link: "/favorites",
    icon: IoHeart,
  },
];
