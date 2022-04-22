import React from "react";
import styles from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/user.jpg';

let UsersOLD = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response=> {
                    props.setUsers (response.data.items
                        /*[
                            {
                                id: 1,
                                followed:false,
                                fullName: 'Dima',
                                status: 'I am a boss',
                                location: {
                                    country: 'Ukraine',
                                    city: 'Kharkov'
                                },
                                photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
                            },

                        ],*/
                    );
                })
        }
    }


    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button>
                                    : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}

                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                        <div/>
                    </div>
                )
            }
        </div>
    )
}
export default UsersOLD;