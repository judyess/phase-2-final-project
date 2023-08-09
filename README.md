
installed react-router by running; >> npx create-react-app . 
moved the App.js file to a new folder "components" and updated the paths in index.js, App.js, and app.test.js
made this a github repository.
ran: npm i --save-dev @types/react-router-dom, a suggested solution from vscode to correct issues with not being able to find some file for react-router... idk.


project requirements:
1 index.js file
5 components
3 client-side routes using react-router (use a navbar component for navigation links)
use json-server to create a RESTful api. 
use a controlled form to make fetch post requests.
make a fetch get request


with data in db.json
run server with >> json-server --watch db.json

keep data simple, no nested data


-------------------
how-to use:
start the server:
    run >> json-server --watch db.json