import fetch from 'isomorphic-fetch';
import qs from 'qs';
import Config from './Config';
const Session = {

    postSession: (data) => 
        fetch(`${Config.baseUrl}/api/users/session/`, {
            method: 'post',
            body: data,
        }).then(Config.checkStatus),
};

export default Session; 
