![Screen Shot 2020-10-25 at 8 53 06 PM](https://user-images.githubusercontent.com/64434411/97123855-1b48dc80-1704-11eb-85e7-de148015ef6b.png)

# Educational Data Stream (EDS)

Deployed app: https://educational-data-stream.herokuapp.com/ <br>
GitHub repo: https://github.com/gsteinseroussi/Educational-Data-Hub

## Description

![Screen Shot 2020-10-25 at 8 56 49 PM](https://user-images.githubusercontent.com/64434411/97123970-a0cc8c80-1704-11eb-8a38-9ed51c4a230f.png)

EDS is a web application, built with React, that has four distinct users.

1. The Administrator: this person works for the company that uses EDS to manage the database as needed. Tasks may include adjusting the settings of articles so they available to editors.
2. Editors: these people are learning specialists hired by the company to create lesson plans based on research.
3. Researchers: these people are not affiliated with the company, but they contribute their educational research to the company for implementation in classrooms.
4. Educators: these are the end users of the application. They can browse the available lesson plans for using in their classrooms.

See "Usage" for more details.

---

## Table of Contents

- [Usage](#usage)
- [Future Development](#future-development)
- [License](#license)
- [Developers](#developers)
- [Questions](#questions)

---

## Usage

The three user types interact differently with EDS. Each user has directions on the screen.

1. The educator first selects the grade range they teach.

   ![Screen Shot 2020-10-25 at 9 30 48 PM](https://user-images.githubusercontent.com/64434411/97125158-5e597e80-1709-11eb-8541-29d6b35fb196.png)

   Available lesson plans for that grade range then populate.

   ![Screen Shot 2020-10-25 at 9 33 30 PM](https://user-images.githubusercontent.com/64434411/97125257-bee8bb80-1709-11eb-974e-ca71d88f4113.png)

   When the educator selects "View Details", the lesson plan populates to the right with a link to the full plan. Reviews of the plan by other educators populate at the same time below the lesson plan.

   ![Screen Shot 2020-10-25 at 9 34 29 PM](https://user-images.githubusercontent.com/64434411/97125529-a4631200-170a-11eb-9466-d778eab24b93.png)

   The user is encouraged to add their own review to assist other educators decide whether the lesson plan will be a good choice for them.

2. The reseacher firsts submit the name of their article, their own name & an abstract of their research.
   ![Screen Shot 2020-10-25 at 9 18 58 PM](https://user-images.githubusercontent.com/64434411/97124756-b8594480-1707-11eb-8b73-60760aca766f.png)
   Once the article information is submitted, the "Article Information" box is replaced with a file upload box. The researcher then submits their article as a PDF (other file types are also accepted) using our drag-and-drop file uploader, or by clicking if they prefer to select their file from a file tree.
   ![Screen Shot 2020-10-25 at 9 20 58 PM](https://user-images.githubusercontent.com/64434411/97124811-ff473a00-1707-11eb-85b8-a1f8b2e093e6.png)
3. The editor is first presented with an article submitted by a researcher. After the editor completes the lesson plans based on the article, they will complete the upload form, including a link to the lesson plan as a Google Doc link which the educator will use to download the plan.  
   ![Screen Shot 2020-10-25 at 9 43 50 PM](https://user-images.githubusercontent.com/64434411/97125719-2eab7600-170b-11eb-8538-781c046043da.png)
   On the editors page, editors also have access to other articles.
   ![Screen Shot 2020-10-25 at 9 49 23 PM](https://user-images.githubusercontent.com/64434411/97125973-f3f60d80-170b-11eb-91cf-e2b9b418e72d.png)

## Future Development

- Create a drag-and-drop submission form for editors like the one for researchers.
- Improve lesson plan searchability for educators, allowing them to search for specific subjects, keywords, etc.

## License

No license: When you make a creative work (which includes code), the work is under exclusive copyright by default. Unless you include a license that specifies otherwise, nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation. Once the work has other contributors (each a copyright holder), “nobody” starts including you.

## Developers

EDS has a great team!

- <b>Lisa Ellison</b> designed the page & carried out layout & styling throughout, and helped identify the concept. <br> Github profile: <https://github.com/lisaellison> <br> Email: <lisaellison9@gmail.com>

- <b>Aaron Sims</b> provided the idea. Creating the comments box, front- & back-end, for the educators' reviews was his corner of the project. He contributed to other parts of the project as well. <br>Github profile: <https://github.com/Aecntrik17> <br>Email: <aaron@adsimsllc.com>

- <b>Paul Sloderbeck</b> created the drag-and-drop feature for the researcher file upload & worked mostly on back-end development, with front-end contributions. <br>Github profile: <https://github.com/paulsloderbeck> <br>Email: <paul.sloderbeck@gmail.com>

- <b>Garrett Stein-Serrousi</b> created the grade-range selector. He created much of the front-end work, with back-end contributions. <br>Github profile: <https://github.com/gsteinseroussi> <br>Email: <gsteinseroussi@gmail.com>

## Questions

Reach out to any of the team members with questions. See emails above.
