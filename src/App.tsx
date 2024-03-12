import './App.css'
import { Banner, NavBar } from './components';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';   
import "primereact/resources/themes/lara-light-blue/theme.css";
import { Outlet } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {

  return (
    <>
      <Provider store={store}>
        <NavBar/>
        <Banner/>
        <Outlet/>
      </Provider>
    </>
  )
}

export default App
