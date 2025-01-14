import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { Fragment } from 'react';

import { Text } from '../Text/Text';

import { DropdownComponent } from './types';

export const Dropdown: DropdownComponent = ({ trigger, items }) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <MenuButton as={Fragment}>{trigger}</MenuButton>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <MenuItems className='absolute right-0 mt-2'>
          {items.map((item, index) => (
            <ul className='px-1 py-1' key={index}>
              <MenuItem>
                <option onClick={item.onClick}>
                  <Text>{item.label}</Text>
                </option>
              </MenuItem>
            </ul>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
};
