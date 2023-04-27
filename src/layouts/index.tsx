import { Link, Outlet } from 'umi';
import Header from './components/Header';

export default function Layout() {
  return (
    <div className='bg-red-200 sm:bg-green-200 '>
     <Header/>
      <Outlet />
    </div>
  );
}
