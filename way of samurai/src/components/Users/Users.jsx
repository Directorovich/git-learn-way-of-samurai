import React from "react";
import Pagination from "../Common/Pagination/Pagination";
import User from "./User";

const Users = (props) => {
    return <div>
    <Pagination currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                portionSize={20}/>
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