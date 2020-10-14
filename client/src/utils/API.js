import axios from "axios";

export default {
//get all researcher articles
getAll: function(){
    return axios.get("/api/articles");
},

//will be used by the educator when they select an article to preview
getArticleByID: function(id) {
    return axios.get("/api/articles/" + id)
},

//researcher posting an item
saveArticle: function(articleData){
    return axios.post("api/articles", articleData)
},

//allows for search by grade level
getArticleByGrade: function(grade){
    return axios.get("/api/articles", { params: { gradeLevel: grade } })
},

//allows for editor to add information to the article object
editArticle: function(link, name, grade, subj, author, abstract){
    return axios.put("/api/articles", {
        editorDocLink: link,
        articleName: name,
        gradeLevel: grade,
        subject: subj,
        authorName: author,
        articleAbstract: abstract
    })
}


}