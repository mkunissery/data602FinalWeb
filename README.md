<<<<<<< HEAD
# CryptoCorr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1. 

# Architecture 

  The application uses Angular framework for the front end with Plotly.js for Charting and has a python based restful service which 
  provide the data to the model.  It also has a backend job written in python which collects historical data for 100 crypto currencies    for 2 years and stores it in Mongo database. Care has been taken to ensure that backend job runs within a few seconds and uses Thread pool for peformance. 
  
    Summary : Angular 4 / Plotly.js for Web application
              Python / Flask for Rest
              Python / Mongo for backend job and persistence.
  
#  Data Analysis

      Two distinct analysis was performed 
        1. Top 15 Cryptos with High Market Capitilzation to see correlation patterns among them in a nicely fashined Grid
        2. Computed 1M Historical Volatility for all 100 Cryptos and found the 15 most volatile to analyse correlation among them.

# Instructions for running

1.  git clone https://github.com/delagroove/finale_602
2.  docker pull mkunissery/web
3.  docker pull mkunissery/backendjob
4.  docker pull mkunissery/teampapp
5.  docker-compose up  [takes about 3-4 mins, loads 3 different services ]
6.  once container is loaded open http://0.0.0.0:4200 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# data602FinalWeb
It uses Angular and Plotly.
>>>>>>> b3635eb9b30242ed76201f3c5d79c1c4d465ed68
