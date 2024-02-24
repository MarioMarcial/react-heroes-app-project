import { Navbar } from './../../ui';
import { Outlet } from 'react-router-dom';

export const HeroesRoutes = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Componentes hijo */}
      <div className="container-xl">
        <Outlet />
      </div>
    </>
  );
};
