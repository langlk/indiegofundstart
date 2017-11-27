# IndieGoFundStart

### _Epicodus Two Day Project in Angular, November 1, 2017_

### By Kelsey Langlois & L. Devin MacKrell

## Description

_This is a community fund site based on the following popular apps: Kickstarter, IndieGoGo, and GoFundMe._

## Setup/Installation Requirements

* Clone this repository from: [github.com/MacKLess/indiegofundstart](https://github.com/MacKLess/indiegofundstart.git).
* In order to run this app, you will need to set up a Firebase Database:
  * First, make a free Firebase account [here](https://firebase.google.com/).
  * Then, create a project from the [Firebase console](https://console.firebase.google.com/).
  * Create a file in the project directory at ```src/app/api-keys.ts```.
  * Once the Firebase project is created, select "Add Firebase to your web app."
    * Copy the information from the pop-up window into ```api-keys.ts``` as follows:
    ```typescript
    export var masterFirebaseConfig = {
      apiKey: "xxxx",
      authDomain: "xxxx.firebaseapp.com",
      databaseURL: "https://xxxx.firebaseio.com",
      storageBucket: "xxxx.appspot.com",
      messagingSenderId: "xxxx"
    };
    ```
  * Add ```/src/app/api-keys.ts``` to your ```.gitignore``` file.
  * Return to the [Firebase console](https://console.firebase.google.com/) and select your database, then select "Database" from the left-hand navbar.
  * Select the "Rules" option from the blue navbar near the top of the page.
  * Change both the ```".read"``` and ```".write"``` properties to ```"true"```.
  * To upload a starter set of projects:
    * Find your project in the [Firebase console](https://console.firebase.google.com/).
    * Select the "Database" option from the left navbar.
    * Select the 3 dots on the right of the grey bar with the database url.
    * From that menu, select "Import JSON".
    * Upload ```projects.json``` from the project root directory.
* Make sure you have Node.js installed. Instructions for doing so can be found [here](https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js).
* From the project root directory, run the following commands in the terminal:
  ```
  npm install
  bower install
  ng serve
  ```
* You can now open the site in your web browser at ```localhost:4200```.


## Support and contact details

_Please contact [kels.langlois@gmail.com](mailto:kels.langlois@gmail.com) or [ldmackrell@gmail.com](mailto:ldmackrell@gmail.com) with questions, comments, or issues._

## Technologies Used

* Angular
* Firebase
* JavaScript
* TypeScript
* Node.js
* Bootstrap

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### License

Copyright (c) 2017 **Kelsey Langlois & L. Devin MacKrell**

*This software is licensed under the MIT license.*# Indiegofundstart
