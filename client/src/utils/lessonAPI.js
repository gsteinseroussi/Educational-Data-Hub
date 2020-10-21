import axios from "axios";

export default {
//get all lessons
getAll: function(){
    return axios.get("/api/lessons");
},

//will be used by the educator when they select an article to preview
getLessonByID: function(id) {
    return axios.get("/api/lessons/" + id)
},

//researcher posting an item
saveLesson: function(lessonData){
    return axios.post("api/lessons", lessonData)
},

getAssignedLesson: function(){
return axios.get("/api/lessons", 
 { params: { editorDocLink: "" } }
)
},

//allows for search by grade level
getLessonByGrade: function(gradeLevel){
    return axios.get("/api/lessons", { params: gradeLevel })
},

//allows for editor to add information to the article object
editLesson: function(link, name, grade, subj, author, abstract){
    return axios.put("/api/lessons", {
        editorDocLink: link,
        lessonName: name,
        gradeLevel: grade,
        subject: subj,
        authorName: author,
        lessonAbstract: abstract
    })
}


}