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

const postAction = (inputLogin, inputPassword, inputRole) => {
    const action = {
        login: inputLogin,
        password: inputPassword,
        role: inputRole,
    }
    return asyncAPI('postJSON', {
        url: `/users/add`,
        data: action,
    })
}

export default {
    getAction,
    postAction,
    getProducts
}
