import {appConstants} from "../constants/constants";
import axios from "axios";
// import qs from 'qs';

export const login = (user, succeed, fail) => {

    const userFormData = new FormData();
    userFormData.append('email',user.username);
    userFormData.append('password',user.password);

   // const userFormData = qs.stringify(user);
    // fetch, async, await
    async function singIn(){
        return fetch(
            `${process.env.REACT_APP_API_URL}/login`,
            {
                method: 'POST',
                body: userFormData,
                credentials: 'include'
            }

        );
    }

    const loginPromise = singIn()
        .then(res=>res.json())
        .then(res=>{
            // res.success
            //     ? typeof succeed === 'function' && succeed()
            //     : typeof  fail === 'function' && fail();
            // return res;
            if (res.success) {
                typeof succeed === 'function' && succeed();
                return axios.get(
                    `${process.env.REACT_APP_API_URL}/checklogin`,
                    {withCredentials: true});
            }else {
                typeof fail === 'function' && fail();
            }

            return res;
        })
        .catch(err => typeof fail === 'function' && fail(err));

    return{
        type: appConstants.LOGIN ,
        payload: loginPromise
    };
}
