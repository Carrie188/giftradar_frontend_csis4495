import http from './Server';
import axios from "axios";
import authHeader from './AuthHeader';

const API_URL = 'http://localhost:8080/api/user/';

class UserService {
    

    getUserInfo(userId) {
       return axios.get(API_URL + `${userId}`);   
    }

    getUserFriendsList(userId) {
        http.get(API_URL + `${userId}`).then((response)=>{
            return response.data.friends;
        }).catch((err)=>{
            console.log(err)
        });
        
        
    }

    addNewFriend(userId, newFriend) {
        return axios.put(API_URL + `${userId}/addnewfriend`, newFriend);
    }

    removeFriend(selectedFriendId){
        return axios.delete(API_URL + `removefriend/${selectedFriendId}`, selectedFriendId);
    }
}

export default new UserService();
