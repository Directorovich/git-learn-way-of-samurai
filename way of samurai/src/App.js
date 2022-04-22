import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Routes>
                    <Route path={'/profile/'} element={<ProfileContainer/>}>
                        <Route path={':userId'} element={<ProfileContainer/>}/>
                    </Route>
                    <Route path={'/dialogs/*'} element={<DialogsContainer />}/>
                    <Route path={'/users/*'} element={<UsersContainer/>}/>
                    <Route path={'/news/*'} element={<News/>}/>
                    <Route path={'/music/*'} element={<Music/>}/>
                    <Route path={'/setting/*'} element={<Setting/>}/>
                    <Route path={'/login/*'} element={<LoginPage/>}/>

                </Routes>
            </div>
        </div>
    );
}

export default App;

/*4010
3820

28 грн позавчера

562 грн 20*/