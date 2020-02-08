# weather-api

A simple open weather api and front end utilizing the [openweathermap.org](openweathermap.org) API. 

It's intended to serve as a learning tool for exploring the technologies listed below. Everything is open-source and free. 
    

    Repo: https://github.com/savesthedale/weather-api

#### NodeJS
The application runs on [NodeJS](https://nodejs.org/en/) so it has been written in [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

#### ExpressJS

Express is a minimalist web framework for NodeJs. Express is used for all of the application's routing. Learn more at: https://expressjs.com/

#### Testing and Dev Mode
    _$ npm test_ 

#### Production Start
    _$ npm start_ 

#### Custom package.json

Slight modifications made to allow for running the app in dev mode.

    "scripts": {
        "start": "node ./bin/www",
        "test": "nodemon ./bin/www"
    },

#### Nodemon
[Nodemon](https://www.npmjs.com/package/nodemon) is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.


#### Environment Variables
[Dotenv](https://www.npmjs.com/package/dotenv) is a module that loads environment variables from a .env file into process.env. This is used to store the [API Key](https://openweathermap.org/api)

    API=(yourAPIkey)

#### Cookies

A cookie is used to store the vistor's Geolocation in the form of Latitude and Longitude. This allows the forecast to be retrieved automatically (and much more quickly) next visit. 

#### Geolocation

A visitor's [geolocation is obtained with a javascript snippet](https://www.w3schools.com/html/html5_geolocation.asp) located on the index page. 

#### API

You can access API data with no front-end rendering by visiting 

    /api/currently
    /api/forecast 

#### Frontend 
Page rendering done with [HoganJS](https://twitter.github.io/hogan.js/)

#### Heroku

The App is running on [Heroku](http://heroku.com)

    https://dramdeen1-weather.herokuapp.com/

Heroku is a PAAS (Platform-As-A-Service). It can host, build, and scale apps online. Learn more at https://www.heroku.com/


#### Dockerized

You can also run a containerized Docker verion of the application by building from the inclluded [Dockerfile](https://docs.docker.com/engine/reference/builder/). 

Learn more about Docker and containerization at https://www.docker.com/

#### Icons

[Font Awesome](https://fontawesome.com/license)

[erikflowers/weather-icons](https://github.com/erikflowers/weather-icons)

Note: a few svg versions of these icons may have been modified. 
