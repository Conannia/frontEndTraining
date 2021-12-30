let INITIAL_STATE = {
    activities: [],
    namaUser: 'Ken'
}

const todo = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET_DATA':
            return {
                ...state,
                activities: action.payload
            }
        case 'NEW_DATA' :
            return {
                ...state,
                newData: action.payload
            }
        default:
            return state
    }
}

export default todo