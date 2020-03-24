import {appConstants} from "../constants/constants";

export const allFacilityRequireReducer = (state = [], action) =>{
    switch(action.type){
        case appConstants.GET_ALL_FACILITY_REQUIRE:
            return action.payload;
        default:
            return state;
    }
}
