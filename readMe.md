 # Food Recipe Blog
A CRUD web app that lets you see different dish recipes and lets you add your own. 

-------
# Technologies Used: 
- Express
- React
- Node.js
- Mongoose
- JavaScript
- CSS
- MongoDb
- Google Images
- HTML

----------

# Trello Board
Link : https://trello.com/invite/b/bk82SdfQ/ATTI08791f8638c92ffaec45891ef33081a8A47C0300/food-blog

----------------------------

## CRUD:
#
Index: 
```javascript
index (req, res, next) {
    Recipe.find({}, (err, foundRecipes) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.recipes = foundRecipes
        next()
      }
    })
  },
  ```
Destory:
```javascript
destroy (req, res, next) {
    Recipe.findByIdAndDelete(req.params.id, (err, deletedRecipe) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.recipe = deletedRecipe
        next()
      }
    })
  },
  ```
  Update: 
  ```javascript
  update (req, res, next) {
    req.body.readyToEat = req.body.readyToEat === 'on'
    Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedRecipe) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.recipe = updatedRecipe
        next()
      }
    })
  },
  ```
  Create: 
  ```javascript
  create (req, res, next) {
    req.body.readyToEat = req.body.readyToEat === 'on'
    Recipe.create(req.body, (err, createdRecipe) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.recipe = createdRecipe
        next()
      }
    })
  },
  ```
  Show:
  ```javascript
  show (req, res, next) {
    Recipe.findById(req.params.id, (err, foundRecipe) => {
      if (err) {
        res.status(404).send({
          msg: err.message,
          output: 'Could not find a recipe with that ID'
        })
      } else {
        res.locals.data.recipe = foundRecipe
        next()
      }
    })
  }
```
-------------------------------------------------------------

Note: The 400 error messages are used to display errors on the browser within the HTTP Request.

------------------------------------------------------------
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
# Learnings
- Now have a better understanding of how each weboage works
- Learned Node, JSX, mongoose, react, express
-----
