import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/FormLogin';
import Err from './pages/Err';
import SignUp from './pages/SignUp';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import RequiredAuth from './utils/RequiredAuth';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Err />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<HomePage />} />
      <Route element={<RequiredAuth />}>
        <Route path="/" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
