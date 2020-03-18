import {appConstants} from "../constants/constants";

export const userReservationsReducer = (state=[], action) => {
    switch (action.type) {
        case appConstants.GET_USER_RESERVATIONS:
            const data=[];
            action.payload.data.forEach(reservation =>{
                data.push({
                    startDate: new Date(reservation.startTime),
                    endDate: new Date(reservation.endTime),
                    title: reservation.title,
                    location: reservation.room.name,
                    organizer: reservation.user.firstName
                })
            })
            console.log(data)
            return data
        default:
            return state;
    }
};
