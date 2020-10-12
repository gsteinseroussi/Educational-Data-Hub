let mongoose = require("mongoose");
let db = require("../database/models");

mongoose.connect("mongodb://localhost/tempDB", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let articleSeed =[

    {
        docLink: "wwww.googledocs.com",
        articleName: "Kids these days!",
        gradeLevel: ["1", "2", "3", "4", "5"],
        subject: "Social Studies",
        authorName: "James Baldwin",
        articleAbstract: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    }
]

db.Article.deleteMany({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });