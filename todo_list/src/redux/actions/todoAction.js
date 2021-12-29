export const getData = (data) => {
    return {
        type: 'GET_DATA',
        payload: data
    }
}

export const newData = (data) => {
    return {
        type: 'NEW_DATA',
        payload: data
    }
}