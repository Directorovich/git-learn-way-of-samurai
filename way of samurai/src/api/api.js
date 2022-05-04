import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0fa56063-5ea3-45a7-98a8-cdd0f4e6720c'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=>response.data)
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response=>response.data)
    },
    postFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response=>response.data)
    }

}

export const headerAPI = {
    getAuth() {
        return instance.get(`auth/me`)
            .then(response=>response.data)
    },
    postLogin() {
        return instance.post('auth/login', )
    }
}

export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/`+userId)
            .then(response=>response.data)
    },
    getStatus(userId) {
        return instance.get('profile/status/'+userId)
    },
    updateStatus(status){
        return instance.put('profile/status/', {status: status})
    }
}



export const getUsers = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response=>response.data)
}

export const deleteFollow = (id) => {
    return instance.delete(`follow/${id}`)
        .then(response=>response.data)
}

export const postFollow = (id) => {
    return instance.post(`follow/${id}`)
        .then(response=>response.data)
}

export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(response=>response.data)
}