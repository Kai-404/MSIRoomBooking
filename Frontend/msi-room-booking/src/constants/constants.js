export const appConstants = {
    // routes
    homeRoute: '/home',
    loginRoute:'/login',
    roomsRoute:'/rooms',
    addReservationRoute:"/addReservation",
    // actions
    LOGIN: 'LOGIN',
    LOGOUT: 'LOGOUT',
    GET_ROOMS: 'GET_ROOMS',
    ADD_RESERVATION: 'ADD_RESERVATION',
    GET_USER_RESERVATIONS: "GET_USER_RESERVATIONS",
    GET_ALL_OTHER_USERS:'GET_ALL_OTHER_USERS',
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
