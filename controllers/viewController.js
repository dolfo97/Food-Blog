const RESOURCE_PATH = '/recipes'

const viewController = {
  index (req, res, next) {
    res.render('recipes/Index', res.locals.data)
  },
  newView (req, res, next) {
    res.render('recipes/New')
  },
  edit (req, res, next) {
    res.render('recipes/Edit', res.locals.data)
  },
  show (req, res, next) {
    res.render('recipes/Show', res.locals.data)
  },
  redirectHome (req, res, next) {
    res.redirect(RESOURCE_PATH)
  },
  redirectShow (req, res, next) {
    const recipeId = req.params.id || res.locals.data.recipe._id
    res.redirect(`${RESOURCE_PATH}/${recipeId}`)
  }

}

module.exports = viewController 
