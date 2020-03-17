* [ ] Building a web based Blog application 

An interactive blog application 

### TODO

* [*] Setup server
    * [*] *Install third-party packages/dependencies
    * [*] also Dev-dependencies
    * [*] Install middleware such as loggers, body parsers and so on
    * [*] Install and configure eslint 
    * [*] Install CORS to allow app decouplation 

* [ ] Setup Database
    * [ ] Setup a cluster on mongoDB Atlas 
    * [ ] Configure the cluster, network access and others
    * [ ] Connect the auth key to Mongo Compass and setup compass

* [ ] Create the model for Post 
    * [ ] create an api for performing CRUD on post
    * [ ] each post should have a unique category
    * [ ] users of the blog should be able to select category to choose

* [ ] Routing module
    * [ ] create an api for every CRUD 
    * [ ] Carry out validation on each route

* [ ] create controller module to interact with models and routing module 
    * [ ] create operation for each model entity
    * [ ] read operation for getting all post (might be general post)
    * [ ] updating already existing post by the admin
    * [ ] Deleting existing post by the admin/author

* [ ] Error Handling 
   * [ ] Include all error status code where need-be
   * [ ] errors should be know and visible in the terminal or browser console

* [ ] Validation
    * [ ] attain a decent user experience by validating user inputs

* [ ] Authentication
    * [ ] The admin should have an account that is safe for various admon operations
    * [ ] Validate admin data 
    * [ ] Secure admin route
    