import { Routes, Route } from 'react-router-dom';
import Page from './components/page';
import Home from './pages/Home';
import PAGE2 from './pages/page2';
import PAGE_2_1 from './pages/page2_1';
import PAGE_2_2 from './pages/page2_2';
import PAGE_2_3 from './pages/page2_3';
import PAGE_2_3_1 from './pages/page2_3_1';
import PAGE_2_3_2 from './pages/Page2_3_2';
import PAGE_2_3_2_1 from './pages/page2_3_2_1';
import PAGE_2_3_2_2 from './pages/page2_3_2_2';
import PAGE_3 from './pages/Page3';

import PAGE_3_1 from './pages/page3_1';
import PAGE_3_2 from './pages/page3_2';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="page2" element={<PAGE2 />} />
            <Route path="page2_1" element={<PAGE_2_1 />} />
            <Route path="page2_2" element={<PAGE_2_2 />} />
            <Route path="page2_3" element={<PAGE_2_3 />} />
              <Route path="page2_3_1" element={<PAGE_2_3_1 />} />
              <Route path="page2_3_2" element={<PAGE_2_3_2 />} />
                <Route path="page2_3_2_1" element={<PAGE_2_3_2_1 />} />
                <Route path="page2_3_2_2" element={<PAGE_2_3_2_2 />} />
          <Route path="page3" element={<PAGE_3 />} />
            <Route path="page3_1" element={<PAGE_3_1 />} />
            <Route path="page3_2" element={<PAGE_3_2 />} />
          <Route path="*" element={<p>Страница не найдена</p>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
