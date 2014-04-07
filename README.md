# I CODE NY Sample App

## Instructions
1. Clone this repo using the following command: 
 `git clone https://github.com/jsogarro/icodeny_sample_app ` 
2. cd into the **icodeny** folder and run the follwing command:  `npm install `
3. After your packages finish installing run the following commands:  
	`heroku create <your_name> `
	
 	`heroku addons:add mongolab `

 	`git add -u . ` 

 	`git commit -m "deploying app" `

 	`git push heroku master `

 	`heroku open `

6. If all goes well you should be able to view your site on the web.

**Note:** feel free to update **views/home.ejs** and **public/css/stylesheets/style.css** to your liking. If you wish to run the server locally to see your changes before you push to Heroku, run the command  `node server.js ` and visit  `http://localhost:300 ` in your browser. 

Also note that you will need to have created a Heroku account and have the Heroku Toolbelt, Node.js and Git installed on your machine for this to work. You can get them here:

- [Heroku](http://heroku.com)

- [Heroku Toolbelt](https://toolbelt.heroku.com/)

- [Node](http://nodejs.org/)

- [Git](http://git-scm.com/book/en/Getting-Started-Installing-Git)