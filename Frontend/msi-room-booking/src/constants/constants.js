export const appConstants = {
    // routes
    homeRoute: '/home',
    loginRoute:'/login',
    roomsRoute:'/rooms',
    // actions
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    GET_ROOMS: 'GET_ROOMS',
    LOGIN_SUCCESS_MSG: 'Welcome Back! ',
    LOGIN_FAILED_MSG: 'Logged in failed, please try again!',
    RESERVATION_FIELD: [
        {
            name: 'tile',
            type: 'text',
            displayName: 'Title'
        },
        {
            name: 'brand',
            type: 'text',
            displayName: 'Brand'
        },
        {
            name: 'price',
            type: 'number',
            displayName: 'Price'
        },
        {
            name: 'stock',
            type: 'number',
            displayName: 'Stock'
        },
        {
            name: 'image',
            type: 'text',
            displayName: 'Image'
        }
    ]
}
