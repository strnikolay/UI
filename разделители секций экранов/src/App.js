import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

//import Page2 from "./pages/page2/page2";
import Main  from './pages/main/main';
//import ErrorPage from "./pages/404/404";


function App() {
  const html = document.documentElement;
  const resizeHanlder = () => {
      const winwidth = window.innerWidth;
      html.style.fontSize = (winwidth/100)+'px';
  };

  React.useEffect(() => {
    resizeHanlder();
    window.addEventListener('resize', resizeHanlder);
      return () => 
    window.removeEventListener('resize', resizeHanlder);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      //errorElement: <ErrorPage />,
    },
    /*{
      path: "/page2",
      element: <Page2 />,
    },*/
  ]);



  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App; 
