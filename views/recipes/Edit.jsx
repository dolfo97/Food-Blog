const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
  render () {
    const { name, _id, description, ingredients, category, image } = this.props.recipe
    return (
      <Default title={`${name} Edit Page`} recipe={this.props.recipe}>
      
        <form method='POST' action={`/recipes/${_id}?_method=PUT`}>
          Name: <input type='text' name='name' defaultValue={name} /><br />
          Desciption: <textarea name='description' defaultValue={description}/><br />
          Ingredients: <textarea type='text' name='ingredients' defaultValue={ingredients} /><br />
          Category: <input type='enum' name='category' defaultValue={category} /> <br />
          Image: <input type='img' name='image' defaultValue={image}/>
          <input type='submit' value='Update Recipe' />
          
        </form>
         

  
      </Default>
      
    )
  }
}

module.exports = Edit
