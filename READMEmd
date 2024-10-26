## William Bassett - 10/26/2024 - SLM Coding Assessment

### Overview
Hello, thank you for taking the time to review the project I've put together to solve the coding challenge. 
<br><br> In this project I've created a simple user interface using the React.js front-end framework to interact with an API built with the Django REST Framework. When starting the project, you'll find yourself on a landing page which has four columns, each for one of the entity types. You can add different types of entities on this page. Note that some entities are dependent on others. For example, a state is dependent on country as that field is required for state creation. Thus, a country entity must be created before creating a state entity, or the UI will not allow you to create a state entity. Same goes for cities and counties - a valid state entity must be created before attempting to create one of these two entity types. 
<br>When you click on any of the entities, you'll be brought to a 'details' page. For entities with child entities, you'll be able to see a list of the child entity names displayed. There is also an 'edit' and 'delete' button. The edit button will change the display to allow you to edit the entity, but not its children. If it is a child entity, you'll be able to change the parent to which it is assigned. The display is reactive and these changes will be immediately reflected on the UI. 
<br>If you click the 'delete' button, the entity will be deleted, and you will be navigated back to the main page. <br>**note: for the purpose of simplicity, the delete behavior of child entities is to cascade, deleting a parent entity (i.e. deleting a state) will delete all subsequent child entities (all counties and cities associated with that state).**
<br><br>This project requires certain steps to run. I'll highlight a step by step process below, including all dependencies.


### Dependencies
- Node.js - https://nodejs.org/en/download/prebuilt-installer in order to run react applications, you need the latest version of Node installed. In this case, that is nodev20.18.0.
- Ensure that all dependencies are installed in the client project. Running the following commands should install all project dependencies.
```
# from root directory 'react-django-slm-project'
cd .\client\app\
npm ci
```
- I'm going to safely assume, all Django requirements are already installed on your computer since it is a common framework used internally. Be sure to have a recent version of Python3 for this application.

### Run Instructions
- Two terminals should be utilized to run this project.
- For the purpose of simplicity, I've used a SqlLite db since it comes prepackaged with Python. Ensure that your local copy is up to date with required models.
```
# In first terminal: from root directory 'react-django-slm-project'
cd .\server\backend\
python manage.py makemigrations
python manage.py migrate
```
- Running these commands should ensure that the models are properly compiled and applied to your db's local copy. This step may not be necessary, but running these commands will not hurt the application, if there are no migrations to be applieed, they simply won't be applied.
- Next to run the server, type the following command.
```
# In first terminal: from react-django-slm-project\server\backend\
python manage.py runserver
```
- You should get some logs indicating that the server is running and ready for use on port _8000_.
- Next is running the frontend project.
```
# In your second terminal: from root directory 'react-django-slm-project'
cd .\client\app\
npm run dev
```
- This command will compile the frontend project, and open it on port _5173_.
- Navigate to `http://localhost:5173` in order to begin interacting with the application.

### Enjoy
I hope you find this application easy to use and understand. I've built it with simplicity in mind, and to show off the functionality highlighted in the initial document.
<br><br>
If you have any trouble running the projeect, please reach out to me at williampbassett@gmail.com with any questions.

Thank you!

Will Bassett