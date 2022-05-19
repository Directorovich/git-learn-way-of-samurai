import React from "react";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
    return <div>
    <Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        {
            props.users.map(u => <User key={u.id}
                                       user={u}
                                       followingInProgress={props.followingInProgress}
                                       unfollow={props.unfollow}
                                       follow={props.follow}/>
            )
        }
    </div>
}

export default Users;