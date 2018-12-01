const initialState = {
    user: {}
}
    export default (state=initialState, action) => {
    switch(action.type) {
        case 'GITHUB_GET':
            return {
                ...state,
                user: action.payload
            }
        case 'GITHUB_ERROR':
            return {
                ...state,
                error: action.payload
        }
    default:
        return state;
    }} 