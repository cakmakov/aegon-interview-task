# Aegon Interview Task

Aegon Emeklilik ve Hayat Junior Software Developer Interview Project.

## Project Architecture

The project consist of 3 parts:

1) Database (RDBMS)
    * MySQL DB
2) Services (RESTful Web Services)
    * Java 8
    * Spring Boot
    * Java Persistence API (JPA)
3) Client (Single-Page Application)
    * ReactJS
    * Reactstrap (React Bootstrap 4 Components)
    
## Back-End

1) The following items should be installed in your system:
* Java 8 or newer.
* git command line tool (https://help.github.com/articles/set-up-git)
* Your preferred IDE 
  * Eclipse with the m2e plugin. Note: when m2e is available, there is an m2 icon in `Help -> About` dialog. If m2e is
  not there, just follow the install process here: https://www.eclipse.org/m2e/
  * [Spring Tools Suite](https://spring.io/tools) (STS)
  * IntelliJ IDEA
  * [VS Code](https://code.visualstudio.com)

2) Download and install MySQL Community Server 8.0.20 with following link: https://dev.mysql.com/downloads/mysql/

3) Download and install MySQL Workbench 8.0.20 with following link: https://dev.mysql.com/downloads/workbench/

4) Clone the project to run locally.

5) Create the user and schema by doing the followings:
	1)	Open MySQL Workbench and login as root.
	2)	Click File —> Open SQL Scripts
	3)	Choose “src/main/resources/db/create-user.sql" from the project directory.
	4)	Run the script via “bold icon” at top-left.
	5)	Repeat the same process for followings:
	      * “src/main/resources/db/create-schema.sql"
	      * “src/main/resources/db/create-data.sql"
	6)	Click Schemas tab from left menu.
	7)	And right click —> Refresh All to check your tables whether correct or not.

6) Open your ide (Intellij IDE)
	1)	Open/Import the project
	2)	Click View -> Tool Windows -> Database -> click (+) sign -> Data Source -> MySQL
	3)	Type the “aegoninterviewcase” into both user and password field.
	4)	Type the “customer-satisfaction-survey” into database field.
	5)	Click Test Connection and Apply
	6)	Click View -> Tool Windows -> Persistence
	7)	Right click on the project -> Assign Data Sources...
	8)	In the opened window, there should be 2 columns: “Persistence Unit” and "Data Source". Just add defined datasource above in the second column.
	9)	Click OK


7) Run the application.

> You can find the collection under the path “src/main/resources/util/Aegon.postman_collection.json” to test the APIs from Postman.

## Front-End

1) The following items should be installed in your system:
* Node.js >=8.10  and npm >= 5.6 (https://nodejs.org/en/)
* git command line tool (https://help.github.com/articles/set-up-git)
* Your preferred IDE 
  * [VS Code](https://code.visualstudio.com)
  * WebStorm (https://www.jetbrains.com/webstorm/)

2) Clone the project.

3) Open your ide (VS Code)
	1)	Click View —> Terminal
	2)	Click “file icon” at the left menu and click the Open Folder and choose the project.
	3)	Click View —> Terminal
	4)	Type below and wait the loading packages.
      ```
      npm install
      ```
	5)	Type below and the application will be run.
      ```
      npm start
      ```

