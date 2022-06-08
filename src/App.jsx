import './App.css'
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Home from './Home';
import Login from './components/Login'

function App() {
  const [user] = useAuthState(auth);
  return (
    user ? <Home/> : <Login/>
  );
}

export default App
