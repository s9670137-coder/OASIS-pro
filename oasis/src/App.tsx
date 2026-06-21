import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LayerDetail from './pages/LayerDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* الصفحة الرئيسية */}
        <Route path="/" element={<Home />} />

        {/* صفحة ديناميكية — :id يتغير حسب الطبقة المضغوطة */}
        <Route path="/layer/:id" element={<LayerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
