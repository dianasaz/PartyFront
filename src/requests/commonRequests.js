import asyncAPI from '../api'


const getAction = () => {
    return asyncAPI('getJSON', {
        url: `/users/all`,
    })
}

const getProductsForParty = (inputId) => {
    return asyncAPI('getJSON', {
        url: '/parties/' + inputId + '/products'
    } );
}

const userLogin = (inputLogin, inputPassword) => {
    const action = {
        login: inputLogin,
        password: inputPassword,
    }
    return asyncAPI('postJSON', {
        url: `/users/login`,
        data: action,
    })
}

const deleteParty = (inputIid) => {
    const action = {
        id: inputIid,
    }
    return asyncAPI('deleteJSON', {
        url: `/parties/{id}/delete`,
        data: action,
    })
}

const addParty = (inputName, inputAddress, inputDate) => {
    const action = {
        name: inputName,
        date: inputDate,
        address: inputAddress, 
        status: 2,
    }
    return asyncAPI('postJSON', {
        url: `/parties/add`,
        data: action,
    })
}

const getProducts = () => {
    return asyncAPI('getJSON', {
        url: `/products/all`,
    })
}

const getParties = () => {
    return asyncAPI('getJSON', {
        url: `/parties/all`,
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
    getProducts, 
    userLogin,
    addParty,
    getParties,
    getProductsForParty
}
