const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component {
  render () {
    return (
      <Default title='New Recipe'>
        <form method='POST' action='/recipes'>
          <div className='newRecipe'>
            <label for='name' className='form-label'>Recipe Name:</label>
            <input type='text' name='name' id='name' className='form-control' required />
          </div>
          <div className='newRecipe'>
            <label for='description' className='form-label'>Description:</label>
            <textarea name='description' id='description' className='form-control' />
          </div>
          <div className='newRecipe'>
            <label for='name' class='form-label'>Ingredients:</label><br />
            <small>EXAMPLE: Flour, Eggs</small>
            <textarea name='ingredients' className='form-control' />
          </div>
          <div className='newRecipe'>
            <label for='category'>Select Cuisine</label>
            <select class='form-select form-control' name='category' aria-label='Category'>
              <option selected>Select Cuisine</option>
              <option value='Thai'>Thai</option>
              <option value='American'>American</option>
              <option value='Chinese'>Chinese</option>
              <option value='Mexican'>Mexican</option>
              <option value='Indian'>Indian</option>
            </select>
          </div>
          <div className='newRecipe'>
            <label for='image'>Product Image</label>
            <input type='file' class='form-control' name='image' accept='image' />
          </div>
          <div className='newRecipe'>
            <input type='submit' value='Submit Form' />
          </div>

        </form>
      </Default>
    )
  }
}

module.exports = New
