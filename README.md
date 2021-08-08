# JobFinder

<p align="center"><img src="ReadmeAssets/logo.png" width="150" height="150"></p>

### JobFinder is the one stop solution for checking various internship and job opportunities posted by TPC, IIT Indore.

- Use various filters to check opportunities according to your preference!
- Use search box for searching jobs/internships by entering any keyword!
- Create an account to bookmark your preferred choices and view them anytime!

### Features

- Admin - can create, update, delete and save job posts.
- User - can save job posts.
- Guest - can only view.

Filters and Search bar can be used by all of the above.

- Filters - 4 types of filters can be applied: Job Type, Job Title, State and City. They can be applied one at a time or all at once. Filters have autocomplete functionality and have a list of options available for each of them. User can select multiple fields in Job Type for filtering.

- Search Bar - uses Full Text Search to search for a single or multiple words in the job posts.

## A sneak peek into what we have here!

Visit our website at: https://job-finder-123.netlify.app/jobs

### Home Page

<img src="ReadmeAssets/Screenshot (1144).png" width="480" height="270">

### Admin Page

<img src="ReadmeAssets/Screenshot (1146).png" width="480" height="270">

### Expanded Job Post

<img src="ReadmeAssets/Screenshot (1147).png" width="480" height="270">

### User Page

<img src="ReadmeAssets/Screenshot (1152).png" width="480" height="270">

### Sign In Page

<img src="ReadmeAssets/Screenshot (1153).png" width="480" height="270">

### Sign Up Page

<img src="ReadmeAssets/Screenshot (1154).png" width="480" height="270">

### Using Filters

<img src="ReadmeAssets/Screenshot (1148).png" width="480" height="270">

### Using Search Bar

<img src="ReadmeAssets/Screenshot (1149).png" width="480" height="270">

### Creating Job Post

<img src="ReadmeAssets/Screenshot (1155).png" width="480" height="270">

### Saved Job Posts

<img src="ReadmeAssets/Screenshot (1151).png" width="480" height="270">

## Technology Stack

- **Coding Languages**: <img alt="JavaScript" src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="HTML5" src="https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white"/> <img alt="CSS3" src="https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white"/>

- **Tools & Frameworks**: <img alt="NodeJS" src="https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white"/> <img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&style=for-the-badge"/> <img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?&style=for-the-badge&logo=mongodb&logoColor=white"/> <img alt="Mongoose" src ="https://img.shields.io/badge/Mongoose-%234ea94b.svg?&style=for-the-badge&logo=Mongoose&logoColor=white"/>

- **Project Management Tools**: <img alt="GitHub" src="https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white"/> <img alt="Git" src="https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white"/>

<hr>

## Environment Setup for local use-

- Drop a :star: on the GitHub repository.
  <br/>

- Download [Git](https://git-scm.com/downloads) (when you install Git, Git Bash also gets installed by default)
  <br/>

- Download and install a code/ text editor. - Recommended- - [Download VS Code](https://code.visualstudio.com/download) - [Download Atom](https://atom.io/)
  <br/>

- Download [Node Js and npm(Node package manager)](https://nodejs.org/en/) (when you install Node, npm also gets installed by default)
  <br/>

- Mongo DB community editition is free and a great software in order to work with MongoDB applications. [Download Mongo DB community editition](https://docs.mongodb.com/manual/administration/install-community/)
  <br/>

- Robo 3T is a desktop graphical user interface (GUI) for Mongo DB. It can help to skip running all the Mongo DB commands manually every time we want to access the data. [Download Robo 3T](https://robomongo.org/download) **(optional)**
  <br/>

- Clone the repository by running command

```
git clone https://github.com/<your user-name>/Off-campus-Job-Opportunities-Portal.git
```

in your git bash.
<br/>

- Run command `cd Off-campus-Job-Opportunities-Portal`.
  <br/>

- Again, run command `cd client`.
  <br/>

- Run this command to install all dependencies for the frontend of this project.

```
npm install
```

<br/>

- Adding secret key for Google Sign In.

  - Run this command when inside the root directory to make a `.env` file.

  ```
  touch .env
  ```

  - Now add this to the `.env` file. You need to create your own API key on google developers console for successfully running google sign in the website in your local system.

  ```
  REACT_APP_CLIENT_ID=your-google-api-key
  ```

  <br/>

- Now, run command `cd server`.
  <br/>

- Run this command to install all dependencies for the backend of this project.

```
npm install
```

<br/>

- Adding secret key for JWT auth.

  - Run this command when inside the root directory to make a `.env` file.

  ```
  touch .env
  ```

  - Now add this to the `.env` file

  ```
  SECRET_KEY = your-secret-key
  URL = mongodb://localhost:27017/jobFinderDB
  ```

  <br/>

- Testing : Run this command on your terminal/ bash to start the Mongo server on port 27017(default).

```
mongod
```

<br/>

- Run this command to start the project.

```
npm start
```

or

- Run this command to start the project as a developer.

```
npm run dev
```

<br/>

- Open link to view the website in your browser window if it doesn't open automatically.

```
http://localhost:3000/
```

<br/>

- Now you are all set to use this project.

## Developers

- Sakshi Verma and Pallavi Upadhyay
