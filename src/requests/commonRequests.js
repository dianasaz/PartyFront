import asyncAPI from '../api'


const getAction = () => {
    return asyncAPI('getJSON', {
        url: `/users/all`,
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
    postAction
}
