import axios from 'axios';
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:8080/api/user/';

class UserService {


    getUserInfo(userId) {
        return axios.get(API_URL + `${userId}`, { headers: authHeader() });
    }

    addNewFriend(userId, newFriend) {
        return axios.put(API_URL + `${userId}/addnewfriend`, { headers: authHeader()}, newFriend);
    }

    removeFriend(selectedFriendId){
        return axios.delete(API_URL + `removefriend/${selectedFriendId}`, { headers: authHeader(), selectedFriendId});
    }
}

export default new UserService();
