import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import TentangSaya from './pages/TentangSaya';
import RuangKolaborasi from './pages/RuangKolaborasi';
import Karya from './pages/Karya';
import Kontak from './pages/Kontak';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'tentang-saya',
        Component: TentangSaya,
      },
      {
        path: 'ruang-kolaborasi',
        Component: RuangKolaborasi,
      },
      {
        path: 'karya',
        Component: Karya,
      },
      {
        path: 'kontak',
        Component: Kontak,
      },
    ],
  },
]);
