import asyncAPI from '../api'


const getAction = () => {
    return asyncAPI('getJSON', {
        url: `/users/all`,
    })
}

const getProducts = () => {
    return asyncAPI('getJSON', {
        url: `/products/all`,
    })
}

const postAction = (processId, actionType, comment) => {
    const action = {
        processId: processId,
        actionType: actionType,
        comment: comment,
    }
    return asyncAPI('postJSON', {
        url: `/action`,
        data: action,
    })
}

export default {
    getAction,
    postAction,
    getProducts
}
