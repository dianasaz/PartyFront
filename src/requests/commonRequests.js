import asyncAPI from '../api'


const userLogin = (inputLogin, inputPassword) => {
    return asyncAPI('getJSON', {
        url: `/users/login/` + inputLogin + "/password/" + inputPassword,
    })
}

const addProductForParty = (inputPartyId, inputProductId) => {
    return asyncAPI('postJSON', {
        url: `/parties/` + inputPartyId + '/add/product/' + inputProductId,
    })
}
const deleteProductForParty = (inputPartyId, inputProductId) => {
    return asyncAPI('deleteJSON', {
        url: `/parties/` + inputPartyId + '/delete/product/' + inputProductId,
    })
}

const getCountOfProductsForParty = (inputPartyId, inputProductId) => {
    return asyncAPI('getJSON', {
        url: '/parties/' + inputPartyId + '/products/' + inputProductId
    } );
}

const addUserToParty = (inputParty, inputUser) => {
    return asyncAPI('postJSON', {
        url: `/parties/` + inputParty + `/add/user/` + inputUser,
    })
}

const checkUserToParty = (inputParty, inputUser) => {
    return asyncAPI('getJSON', {
        url: `/parties/` + inputParty + `/check/user/` + inputUser,
    })
}

const getTasksForUser = (inputUser) => {
    return asyncAPI('getJSON', {
        url: `/tasks/by-user/` + inputUser,
    })
}


// ---------------- CRUD PARTY --------------------

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

//-------------------------------------------------



//------------- GET ALL ---------------------------

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

const getAction = () => {
    return asyncAPI('getJSON', {
        url: `/users/all`,
    })
}

const getTypes = () => {
    return asyncAPI('getJSON', {
        url: `/product-types/all`,
    })
}

//---------------------------------------------------


//------------------ GET BY ID ----------------------

const getParty = (inputId) => {
    return asyncAPI('getJSON', {
        url: `/parties/` + inputId,
    })
}

const getProductsForParty = (inputId) => {
    return asyncAPI('getJSON', {
        url: '/parties/' + inputId + '/products'
    } );
}

const getUsersOfThisParty = (inputPartyId) => {
    return asyncAPI('getJSON', {
        url: '/parties/' + inputPartyId + '/users'
    } );
}

const getType = (inputId) => {
    return asyncAPI('getJSON', {
        url: `/product-types/` + inputId,
    })
}

const getUser = (inputId) => {
    return asyncAPI('getJSON', {
        url: `/users/` + inputId,
    })
}

const getProduct = (inputId) => {
    return asyncAPI('getJSON', {
        url: `/products/` + inputId,
    })
}

//------------------------------------------------------


//----------------- POST -------------------------------

const addProduct = (inputName, inputPrice, inputType, inputMeasure) => {
    const action = {
        name: inputName,
        price: inputPrice,
        type: inputType,
        measure: inputMeasure,
    };
    return asyncAPI('postJSON', {
        url: `/products/add`,
        data: action, 
    })
}

const postAction = (inputLogin, inputPassword) => {
    const action = {
        login: inputLogin,
        password: inputPassword,
    }
    return asyncAPI('postJSON', {
        url: `/users/add`,
        data: action,
    })
}

const takeTask = (inputParty, inputProduct, inputUser, inputKol) => {
    const action = {
        kol: inputKol,
        money: 0,
        party: inputParty,
        product: inputProduct,
        status: 1,        
        user: inputUser,
    }
    return asyncAPI('postJSON', {
        url: `/tasks/add`,
        data: action,
    })
}

//---------------------------------------------------

export default {
    getAction,
    postAction,
    getProducts, 
    userLogin,
    addParty,
    getParties,
    getProductsForParty,
    getParty,
    addProductForParty,
    deleteProductForParty,
    getCountOfProductsForParty,
    getTypes,
    addProduct,
    getType,
    addUserToParty,
    getUsersOfThisParty,
    getUser,
    takeTask,
    getProduct,
    checkUserToParty,
    getTasksForUser
}
