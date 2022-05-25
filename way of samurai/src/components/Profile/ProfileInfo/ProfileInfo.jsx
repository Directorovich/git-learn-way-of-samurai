import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";
import ProfileInfoDataForm from "./ProfileInfoDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    let onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    let onSubmit = (formData) => {
        //props.login(formData.email, formData.password, formData.rememberMe)
        props.saveProfile(formData);
        //setEditMode(false)
    }

    return (
        <div>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                {editMode
                    ? <ProfileInfoDataForm initialValues={props.profile}
                                           profile={props.profile}
                                           goToEditMode={() => setEditMode(false)}
                                           onSubmit={onSubmit}/>
                    : <ProfileInfoData profile={props.profile}
                                       isOwner={props.isOwner}
                                       goToEditMode={() => setEditMode(true)} onSubmit={onSubmit}/>}

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                ava + description
            </div>
        </div>
    )
}

const ProfileInfoData = (props) => {
    return <div>
        {props.isOwner && <div>
            <button onClick={props.goToEditMode}>Edit</button>
        </div>}
        <div>
            <b>Full name</b>: {props.profile.fullName}
        </div>
        <div>
            <b>About me</b>: {props.profile.aboutMe}
        </div>
        <div>
            <b>Looking for a job</b>: {props.profile.lookingForAJob ? "yes" : "no"}
        </div>
        {props.profile.lookingForAJob &&
            <div>
                <b>My professional skills </b>: {props.profile.lookingForAJobDescription}
            </div>
        }
        <div>
            <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>
        })}
        </div>
    </div>
}

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileInfo;
