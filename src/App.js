import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount/CreateAccount';
import CreateAdPage from './Pages/CreateAdPage/CreateAdPage';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import FooterNav from './components/FooterNav/FooterNav';
import LikedPage from './Pages/LikedPage/LikedPage';
import MyAdsPage from './Pages/MyAds/MyAdsPage';
import Navbar from './components/Navbar/Navbar';
import Product from './Pages/SingleProductPage/product';
import Products from './Pages/ProductsPage/Products';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import SignInPage from './Pages/SignInPage/SignInPage';
import WelcomePage from './Pages/WelcomePage/WelcomePage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<><ErrorPage /><FooterNav /></>} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/createAd" element={<><CreateAdPage /><FooterNav /></>} />
        <Route path="/Liked" element={<><LikedPage /><FooterNav /></>} />
        <Route path="/MyAds" element={<><MyAdsPage /><FooterNav /></>} />
        <Route path="/Product/:id" element={<><Product /><FooterNav /></>} />
        <Route path="/Products" element={<><Products /><FooterNav /></>} />
        <Route path="/ProfilePage" element={<><ProfilePage /><FooterNav /></>} />
        <Route path="/signIn" element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;