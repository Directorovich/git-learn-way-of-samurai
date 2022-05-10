import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
        /*headerAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0){
                    let {id, email,login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }

            })*/
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) =>{
    return{
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getAuth, logout})(HeaderContainer);