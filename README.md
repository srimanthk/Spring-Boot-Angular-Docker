# unit-conversion
unit conversion application

![alt text](https://github.com/srimanthk/unit-conversion.v1/blob/master/Capture.PNG)

spring-boot-rest-angular-docker

Metric/Imperial vice versa unit conversion application. Application developed using Spring Boot, Rest API, Angular 2

Required:

1. Java 1.8
2. Maven 3.5.2
3. Node.js (npm and node)
4. Angular client (npm install -g @angular/cli)
5. Docker

Add this to maven settings.xml </br>
```<pluginGroup>com.spotify</pluginGroup>```

#This is a simple Rest service application(HTTP GET Request) using Spring Boot and Docker. This application can be run with/without creating a docker container.

##Steps to build and run this application

Download and Unzip the file

With out docker : - Execute the below command from the command line by changing to the project directory 
1. mvn spring-boot:run
2. Open another terminal and cd to project directory
3. cd frontend
4. npm install
5. ng build
6. npm start
7. http://localhost:4200/

With Docker (Maven Plugin) : - 
1. mvn package dockerfile:build 
2. docker run -p 8080:8080 -t unit-conversion/sample:latest
3. Open another terminal and cd to project directory
4. cd frontend
5. npm install
6. ng build
7. npm start
8. http://localhost:4200/
