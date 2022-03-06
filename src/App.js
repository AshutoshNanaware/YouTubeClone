import './App.css';
import Header from './component/Header/Header';
import SideBar from './component/sideBar/SideBar';
import VideoSection from './component/VideoSection/VideoSection';

function App() {
  return (
    <div className="app">
       { /* <Header/> */}
       <Header/>
       <div className='main__page'>
        <SideBar/>
        <VideoSection/>
       </div>
 </div>
  );
}

export default App;
