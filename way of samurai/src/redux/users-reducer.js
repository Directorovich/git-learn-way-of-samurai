import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLOW = 'UNFOLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [/*
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
        {
            id: 2,
            followed:false,
            fullName: 'Dima',
            status: 'I am a boss',
            location: {
                country: 'Ukraine',
                city: 'Kharkov'
            },
            photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
        },
        {
            id: 3,
            followed:false,
            fullName: 'Dima',
            status: 'I am a boss',
            location: {
                country: 'Ukraine',
                city: 'Kharkov'
            },
            photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
        },
        {
            id: 4,
            followed:false,
            fullName: 'Dima',
            status: 'I am a boss',
            location: {
                country: 'Ukraine',
                city: 'Kharkov'
            },
            photoUrl: 'https://lumpics.ru/wp-content/uploads/2017/11/Programmyi-dlya-sozdaniya-avatarok.png'
        },*/
    ],
    pageSize: 20,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: true,
    followingInProgress:[]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id=== action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),

            }
        case UNFOLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id=> id !=action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowSuccess = (userId) => {
    return {
        type: UNFOLOW,
        userId
    }
}
export const setUsers = (users) => {
        return {
            type: SET_USERS,
            users
        }
}
export const setCurrentPage = (currentPage) => {
        return {
            type: SET_CURRENT_PAGE,
            currentPage
        }
}
export const setTotalUsersCount = (totalUsersCount) => {
        return {
            type: SET_TOTAL_USERS_COUNT,
            totalUsersCount
        }
}
export const toggleIsFetching = (isFetching) => {
        return {
            type: TOGGLE_IS_FETCHING,
            isFetching
        }
}
export const toggleFollowingProgress = (followingInProgress, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        followingInProgress,
        userId
    }
}



export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.postFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.deleteFollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}

export default usersReducer;