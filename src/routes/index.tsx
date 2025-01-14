import { Routes, Route } from 'react-router-dom';

import { AppRoutesComponent } from './types';

import MainLayout from '@/components/layout/MainLayout/MainLayout';
import Home from '@/pages/Home/Home';

const AppRoutes: AppRoutesComponent = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
