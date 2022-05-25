import axios from 'axios';

const getUser = ({userName, fnCallbackSuccess, fnCallbackError }) => {        
    axios.get(`https://api.github.com/users/${userName}`)
    .then(res => { 
        if (fnCallbackSuccess) {
            fnCallbackSuccess(res);
        }
    })
    .catch(function (error) {
        //Log Error
        if (fnCallbackError) {
            fnCallbackError(error);
        }
    });
};


export {
    getUser
}