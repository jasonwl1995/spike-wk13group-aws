# REACT AUTH SHELF

Our client, Prime Digital Academy: Room 2, has asked for an app to simulate the behavior of their shelf. That is, a list of items placed on the classroom shelf. More details about each of the features are listed below in the README.md.

## Use the Download ZIP Option (Don't Fork & Don't Clone)

**Step 1 - Download ZIP of Project:**
- click on the **Code** button
    - select the **Download ZIP** option from the menu
- file download should appear at the bottom of your web browser
    - click on the downloaded file icon
- a finder window should open with the assignment folder unzipped in the Downloads directory
- move the folder to where you are keeping your projects

**Step 2 - Initialize as a Repo:**
- open the project in VSCode
- open up the terminal in VSCode for the project
    - *in terminal:* run `git init`
    - *in terminal:* run `git add .`
    - *in terminal:* run `git commit -m "initial commit"`

**Step 3 - Attach GitHub Repo:**
- goto GitHub in the browser (make sure you are logged in)
- click on the `+` icon in the top right of the window
    - select **New repository** from the menu
- name your repo **secure-submarine**
- make sure your repo has **Public** selected
- click the **Create repository** button at the bottom
- copy the terminal commands listed in the **…or push an existing repository from the command line** section
- goto your project terminal in VSCode and paste the commands you just copied from GitHub and press **return**


---

## Assignment Instructions

### BASE MODE

#### FEATURES

We recommend working in groups of 4 or 6 and pair programming for this project. Each pair should take on one of the following features. You will want to identify any tasks that need to be finished in a particular order as a group to avoid merge conflicts. Each of the following features should be on a separate route.

##### Display all Items

The Shelf page (`ShelfPage.js`at `/shelf`) should show all of the items stored in the database in a list or table.

##### Add Items to the Shelf

The Shelf page (`ShelfPage.js` at `/shelf`) should allow a user to add a new item to the database (which should immediately appear in the list).

> NOTE: Image url should be a full path to an existing image on the web. You should not attempt to implement image upload for this.

##### Delete Items from the Shelf

An authenticated user should be able to delete items from the shelf if they were the one who added the item to the shelf.

> NOTE: This should require client and server changes. An unauthenticated attacker from Postman should not be able to delete anything.

### Stretch Goals

- Ability to edit an existing item on the shelf from the info page.
- Have anyone, not just logged in users, be able to see what is on the shelf, but not edit, remove, nor add.
- Add a new route to display all items for a specific user called "My Shelf". The client-side url should be `/shelf/2` where `/2` should be the id of the logged in user. Only the items associated with the specific logged in user should be displayed on this new page.
- Use "Filestack" for image upload on the add page.
- Style the application with Material-UI.

---


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## CREATE DATABASE AND TABLE

Create a new database called `auth_shelf` and create a `user` table:
 user-update

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (80) NOT NULL,
    "image_url" VARCHAR (2083),
    "user_id" INT REFERENCES "user"
);
```





