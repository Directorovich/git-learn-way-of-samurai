import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile () {
        //console.log(this.props);
        let userId = this.props.router.params.userId
        if (!userId){
            userId=this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);

        /*let userId = this.props.router.params.userId
        if (!userId){
            userId=2;
        }

        profileAPI.getProfile(userId)
            .then(data => {
                this.props.setUserProfile(data);
            })*/
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            })*/
    }
    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       // if (this.props.router.params.userId !== prevProps.props.router.params.userId) {
            this.refreshProfile();
        // }
    }

    render() {
        /*if (!this.props.isAuth) return <Navigate to={'/login'}/>*/
        return (
            <div>
                <Profile {...this.props}
                         isOwner={!this.props.router.params.userId}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                         savePhoto={this.props.savePhoto}
                         saveProfile={this.props.saveProfile}/>
            </div>
        )
    }
}

function withRouter(Component) {

    function ComponentWithRouterProps(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{location, navigate, params}}/>
        )

    }
    return ComponentWithRouterProps;
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);