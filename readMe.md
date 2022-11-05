 # Food Recipe Blog
A CRUD web app that lets you see different dish recipes and lets you add your own. 

-------
# Technologies Used: 
Express, Node.js, Mongoose, JavaScript, CSS, MongoDb, HTML

------------------------------------------------------------
# Screenshots

---------

# RestFul Routes: 

| Action | URL | HTTP Verb | JSX View | mongoose method |
|--------|-----|-----------|----------|-----------------|
| Index | /recipes/ | GET | Index.jsx | Recipes.find() |
| Show | /recipes/:id/ | READ | Show.jsx | Recipes.findByid |
| New | /recipes/new | GET | New.jsx | none |
| Create | /recipes/ | POST | None | Recipes.create(req.body) |
| Edit | /recipes/:id/edit | GET | Edit.jsx | Recipes.findByid |
| Delete | /recipes/:id/ | DELETE | none | Recipes.findByidAndDelete |

------------------------------------

# Resources
- [Trello](https://trello.com/invite/b/bk82SdfQ/ATTI08791f8638c92ffaec45891ef33081a8A47C0300/food-blog)
- [ERD](TBD)
----------------------------
# Future Improvements
- Login Functionality
- Better Styling

