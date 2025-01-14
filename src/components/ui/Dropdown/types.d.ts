import { FC, ReactNode } from 'react';

export interface DropdownItem {
  label: string;
  onClick: () => void;
}

export interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
}

export type DropdownComponent = FC<DropdownProps>;
