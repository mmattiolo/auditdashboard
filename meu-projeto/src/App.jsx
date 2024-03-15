import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import '../node_modules/remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { ActiveComponentProvider } from './components/Kanban/ActiveComponentContext';


function App() {
return (<>
    <Header/>
    <ActiveComponentProvider>
      <SideBar/>
      <Main/>
    </ActiveComponentProvider>
    </>);
  }

export default App
