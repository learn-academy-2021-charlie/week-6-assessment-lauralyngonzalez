# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: We can fix this with a migration. We'll generate a migration file, name the foreign key animal_id, which would be part of the Sightings model.

  Researched answer: We generate a migration file like so,
  $ rails g migration add_animal_id_to_sightings
  In the migration file, add_column :sightings, :animal_id, :integer
  This adds an animal_id with the integer type to the Sightings model.
  Then we can run the cmd, rails db:migrate



2. Which RESTful API routes must always be passed params? Why?

  Your answer: The API routes create and update have the private method for requiring and permitting the attributes. show and destroy use the params for getting the id.

  Researched answer: The RESTful API routes create and update take the private params method that require and permit the attributes. This private method ensures that we only expose those attributes from the db. show, edit, and destroy routes only take params[:id] because to get the active record object, it only needs the id. 



3. Name three rails generator commands. What is created by each?

  Your answer: g model creates a table in the db with the given column names and types, g migration generates a migration file with a name, g something else generates the model and routes so we don't have to make that file ourselves.

  Researched answer: There are generator commands for model, migration, controller and resource. Generating the model creates a table with the names of the columns and their data types. The shape of the database can be changed over time with a migration by editing a column's name, data type, or adding a removing a column. Lastly, generating a resource sets up the migration, model, controller, and views folder. The controller can also be generated separately which coordinates the interactions between the user, views, and model. Resourced routes are also added.



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students
- index: gets a collection of all student objects

method="POST"   /students       
- create: creates a new student in the db

method="GET"    /students/new
- new: instantiates a new student object

method="GET"    /students/2  
- show: queries the db for the student with the id 2

method="GET"    /students/edit/2    
- edit: queries the db for the student with the id 2 to edit

method="PATCH"  /students/2      
- update: updates attributes for the student with id 2 

method="DELETE" /students/2      
- delete: destroys the student with id 2 from the db


5. As a developer, you want to make an application that will help you manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see all the task titles on my to do list.

2. As a user, I can click on the title of a task and be routed to a  page where I can see the title and description of the task.

3. As a user, I can edit the title and description of the task.

4. As a user, I can navigate to the home page of the to do list from other pages.

5. As a user, I see a form where I can create a new task for my to do list.

6. As a user, I can mark a task as done and is removed from the page.

7. As a user, I can click a button and go to a page with all the tasks that I've marked as done.

8. As a user, I can delete a task from the to do list.

9. As a user, I can set a date due for the task.

10. As a user, I can set a reminder to do the task.