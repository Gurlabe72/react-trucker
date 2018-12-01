const initialState = {
    name:'',
    age: 0,
    color: ''
}
export default (state=initialState, action) => {
    switch(action.type) {
        case 'UPDATE_NAME':
        return {
            ...state,
            name: action.payload
        }
    default:
    return state; 
    }
}