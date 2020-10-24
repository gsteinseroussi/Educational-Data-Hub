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

getAssignedArticle: function(){
return axios.get("/api/articles")
},

//allows for search by grade level
findByGradeLevel: function(gradeLevel){
    console.log(gradeLevel)
    return axios.get("/api/articles", { params: gradeLevel })
},

//allows for editor to add information to the article object
editArticle: function(link, name, grade, subj, author, abstract, claimed){
    return axios.put("/api/articles", {
        editorDocLink: link,
        articleName: name,
        gradeLevel: grade,
        subject: subj,
        authorName: author,
        articleAbstract: abstract,
        claimed: claimed
    })
},

claimArticle: function(id){
    return axios.put("/api/articles/" + id, { claimed: true })
},

addFileID: function(articleID, fileID){
    return axios.put("/api/articles/" + articleID, {
        fileID: fileID
    })

    }

}