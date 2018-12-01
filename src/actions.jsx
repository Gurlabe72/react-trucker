import axios from 'axios';
const token={
    //api token key goes here
        "Authorization" : ''
}
export const updateName = (name) => {
    return {
        type: 'UPDATE_NAME',
        payload: name 
    }
}
export const getUserFromGithub = (username) =>