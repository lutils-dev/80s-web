import { Outlet } from 'react-router-dom';

import LeftSidebar from './LeftSidebar/LeftSidebar';
import { MainLayoutComponent } from './types';

import { Card } from '@/components/ui/Card/Card';

const MainLayout: MainLayoutComponent = () => {
  return (
    <Card
      className='flex h-screen w-full flex-col md:flex-row'
      rounded='none'
      size='none'
    >
      <LeftSidebar />
      <main className='w-full flex-1 gap-3 overflow-y-auto'>
        <Outlet />
      </main>
    </Card>
  );
};

export default MainLayout;
