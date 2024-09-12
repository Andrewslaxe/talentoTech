export type NavBarProps = {
  items: NavItem[];
  toggleNavBar: () => void;
}

type NavItem = {
  label: string;
  url: string;
}