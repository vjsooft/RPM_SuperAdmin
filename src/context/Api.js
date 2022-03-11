import environment from "../environment/environment"

export default {
    login:()=> environment.url + '/api/vi/user/login',
    forgotpassword:()=> environment.url + '/api/vi/user/forgotpassword',
    profileImage:()=> environment.url + '/api/v1/event/uploads'
}