import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer';

const Page = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
