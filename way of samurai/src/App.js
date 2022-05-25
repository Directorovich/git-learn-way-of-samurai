import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Settings/Setting";
import {Route, Routes} from "react-router-dom";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/Common/Preloader/Preloader";
import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {

        if (!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Routes>

                        <Route path={'/profile/'} element={<React.Suspense fallback={<Preloader />}><ProfileContainer/></React.Suspense>}>
                            <Route path={':userId'} element={<React.Suspense fallback={<Preloader />}><ProfileContainer/></React.Suspense>}/>
                        </Route>

                        <Route path={'/dialogs/*'} element={withSuspense(DialogsContainer)()}/>
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
}

const mapStateToProps = (state) =>({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);