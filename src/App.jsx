import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import MainComponent from './components/mainContent';

function App() {
  return (
    <div className="Wrapper">
        <Header/>
        <div className="main-container">
          <Sidebar/>
          <MainComponent/>
        </div>
    </div>
  );
}

export default App;
