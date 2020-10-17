export const initialState = {
    category: 'all',
    cart: [],
    searchGlobal: ''
}

export const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_FILTER':
            return {
                ...state,
                category: action.payload
            }
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload
                ]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: action.payload
            }
        case 'SET_SEARCH':
            return {
                ...state,
                searchGlobal: action.payload
            }
        default:
            return state;
    }
}

// cart: [
//     {
//         id: _id,
//         title: _title,
//         price: _price,
//         image: _image
//     }
// ]