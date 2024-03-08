import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import '../node_modules/remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Header from './components/Header';
import SideBar from './components/SideBar';
import Main from './components/Main';


function App() {
return (<>
    <Header/>
    <SideBar/>
    <Main/>
    </>);
  }

export default App
