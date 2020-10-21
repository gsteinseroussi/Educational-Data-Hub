import axios from "axios";

export default {
    getComments: function (lessonID){
        return axios.get('/api/comments/'+ lessonID);
    },

    saveComments: function (comment, lessonID){
        return axios.post("/api/comments/submit/"+ lessonID, {comment})
    }
}