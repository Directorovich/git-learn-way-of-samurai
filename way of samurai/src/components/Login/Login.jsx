import React from "react";
import {Field, reduxForm} from "redux-form";
import {Element} from "../Common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

let maxLength20 = maxLengthCreator(20);
const Input = Element('input');

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} name={'login'} component={Input}
                validate={[requiredField, maxLength20]}/>
            </div>
            <div>
                <Field placeholder={'Password'} name={'password'} component={Input}
                       validate={[requiredField, maxLength20]}/>
            </div>
            <div>
                <Field type="checkbox" name={'rememberMe'} component={Input}/> remember me
            </div>
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
        console.log(formData)
    }
    return <div>
        <h1>
            LOGIN
        </h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;