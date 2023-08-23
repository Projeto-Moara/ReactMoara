import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ToastContainer } from 'react-toastify';
import Manager from './components/Manager/Manager';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {

  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Manager />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;