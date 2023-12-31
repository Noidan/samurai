import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return <BrowserRouter>

    <div className="app-wrapper">
      <Header />
      <Navbar />
      {/* <Navbar dicesData={props.state.sidebar.dicesData}/> */}
      <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile'
            element={<Profile
              postsData={props.state.profilePage.postsData} 
              addPost={props.addPost}/>}/> 
          <Route path='/dialogs/*'
            element={<Dialogs
              dialogsData={props.state.messagesPage.dialogsData}
              messagesData={props.state.messagesPage.messagesData} />} />
          <Route path='/news'
            element={<News />} />
          <Route path='/music'
            element={<Music />} />
          <Route path='/settings'
            element={<Settings />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
}

export default App;