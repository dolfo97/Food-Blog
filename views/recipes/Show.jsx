const React = require('react')
const Default = require('../layouts/Default.jsx')

class Show extends React.Component {
  render () {
    const { name, description, ingredients, category, image } = this.props.recipe
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <Default title={`${capName}`} recipe={this.props.recipe}>
        <div>
          {image}
          <h3> Step by Step Intructions:</h3>  <br />
          <p>{description}</p>
          <h3> Ingredients:</h3> <br />
          <p>{ingredients}</p> <br />
          <h3>Cuisine:</h3> 
          <p>{category}</p> <br />
        </div>
        
      </Default>
      
    )
  }
}

module.exports = Show
