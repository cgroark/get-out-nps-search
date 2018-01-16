#Get Out There
##National Park Wishlist App w/ Weather

###Project Objective
The objective is to build a Node web application using the Express web app server framework. The functionality of this application involves pulling information from three APIs, allowing users to create login information, and saving user data to a database

![Project Image](/images/front_page.png)
![Project Image](/images/park_page.png)


##Get Out There: project goals
* Display informaiton about US National Parks based on a search query and using their API
* Display weather forecast information about individual parks using lat/long data from the National Parks API and passing it to the weather underground API
* Display a marker for the park on a map using the Google Maps API and the lat/long data from the National Parks API
* Allow users to save their favorite parks to a user profile if they are logged in

##Technology
* Bootstrap
* Node.js
* PostgresQL
* APIs for the US National Parks, Google Maps and Weather Underground
* HTML, CSS, JavaScript

##Overall Approach
* Set up basic functions to test and understand API data structures
* Set up initial views pages in ejs to display data on front-end
* Set up database and models using PostgresQL
* Build Post route to show a list of parks based on State selected in a form (pulling form National Parks API)
* Set up authorization views in ejs and build out routes to create users, add new users to database, and allow for login and logout
* Build Post route for logged-in users to allow users to save "favorited" parks to a profile wishlist
* Create delete route to remove parks from wishlist
* Create Post route to get weather forecast information from the Weather Underground API based on the lat/long data for a specfic park
* Use the lat/long data to place  marker on a map for each park using the Google Maps API
* Use Bootstrap to make the sight responsive and mobile friendly
* Deploy project remotely via Heroku

##Challenges
* Building out logic to ensure only certain data is grabbed from the API (don't include Parks w/o Lat/Long data, for example)
* Linking models so unique users are linked to their favorited parks
* Converting data with JavaScript so the same parameter (longitude and lattitude) could be accessed even though the data format in APIs was different
* Figuring out how to use the Google Maps API and how to pass lat/long data from databse or API to the Google Maps API
* Building fully responsive styling 
* Database syncing with Heroku

##Next Steps
* Assess usability of search function on mobile device
* Obtain full Heroku functionality  




