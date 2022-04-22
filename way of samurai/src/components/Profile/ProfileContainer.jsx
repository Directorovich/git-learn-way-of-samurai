import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        //console.log(this.props);
        this.props.getProfile(this.props.router.params.userId);
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

    render() {
        /*if (!this.props.isAuth) return <Navigate to={'/login'}/>*/
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
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
    profile: state.profilePage.profile
})

export default compose(
    connect(mapStateToProps, {getProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);