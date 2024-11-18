import { Outlet } from 'react-router-dom';
import Header from '../components/header';
import Navigation from '../components/navigation';

const Mainlayout = () => {
  return (
    <>
      <Header/>
      <Outlet />
      <Navigation/>
    </>
  )
}

export default Mainlayout
