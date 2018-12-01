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
export const getUserFromGithub = (username) => {
    return dispatch => {
        axios.get(`https://api.github.com/users/${username}`,
            {
                headers: {
                    ...token
                }
            })
        .then(results => {
            //Communicate with reducers
            dispatch({
                type: "GITHUB_GET",
                payload: results.data
            })
        })
        .catch(payload => {
        //communicate with reducers
            dispatch({
                type: "GITHUB_ERROR",
                payload
            })
        })
        }
    } 
