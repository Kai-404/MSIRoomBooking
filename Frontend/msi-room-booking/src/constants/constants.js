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
    GET_FACILITIES:'GET_FACILITIES',
    ADD_RESERVATION: 'ADD_RESERVATION',
    GET_USER_RESERVATIONS: "GET_USER_RESERVATIONS",
    GET_ALL_OTHER_USERS:'GET_ALL_OTHER_USERS',
    SET_SELECTED_ROOM:'SET_SELECTED_ROOM',
    GET_INVITATIONS:"GET_INVITATIONS",
    UPDATE_INVITATIONS:"UPDATE_INVITATIONS",
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
