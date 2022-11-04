
const Recipe = require('../models/recipe')

const dataController = {
  // Index,
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
  // Destroy
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
  // Update
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
  // Create
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
  // Edit
  // Show
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
}

module.exports = dataController
