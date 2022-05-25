import React from "react";
import {Contact} from "./ProfileInfo";
import s from './ProfileInfo.module.css';
import style from './../../Common/FormsControls/FormsControls.module.css'
import {createField, Element} from "../../Common/FormsControls/FormsControls";
import {Form, reduxForm} from "redux-form";

const Input = Element('input');
const Textarea = Element('textarea');
const ProfileInfoDataForm = ({handleSubmit, profile, error}) => {
    return <Form onSubmit={handleSubmit}>
        <div>
            <button>Save</button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <b>Full name</b>: {createField("Full name", "fullName", Input)}
        </div>
        <div>
            <b>About me</b>: {createField("About me", "aboutMe", Textarea)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField(null, "lookingForAJob", Input, null, {type : 'checkbox'})}
        </div>
            <div>
                <b>My professional skills </b>: {createField("My professional skills", "lookingForAJobDescription", Textarea)}
            </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField( key, "contact." + key, Input)}</b>
            </div>
        })}
        </div>
    </Form>
}

const ProfileInfoDataFormReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileInfoDataForm)

export default ProfileInfoDataFormReduxForm;