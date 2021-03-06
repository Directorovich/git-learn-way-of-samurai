import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Element} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from './../Common/FormsControls/FormsControls.module.css'

let maxLength30 = maxLengthCreator(30);
const Input = Element('input');

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', Input, [requiredField, maxLength30])}
            {createField('Password', 'password', Input, [requiredField, maxLength30], {type : 'password'})}
            {createField(null, 'rememberMe', Input, null, {type : 'checkbox'}, 'Remember me')}

            { captchaUrl && <img src={captchaUrl} alt=""/>}
            { captchaUrl && createField("Symbols from image", 'captcha', Input, [requiredField])}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'}/>
    }
    return <div>
        <h1>
            LOGIN
        </h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps , {login})(Login);