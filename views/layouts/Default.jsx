const React = require('react')

class Default extends React.Component {
  render () {
    const { recipe, title } = this.props
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel='stylesheet' href='/css/app.css' />
          <link rel='images' href='/images' />
        </head>
        <body>

          <nav>
          <div className='container'>
            <ul>
              <li><a href='/recipes'>HomePage</a></li>
              <li><a href='/recipes/new'>Upload New Recipe</a></li>
              <li>{recipe ? <a href={`/recipes/${recipe._id}/edit`}> Edit Recipe </a> : ''}</li>
            </ul>
          </div>

            {/* {recipe ? <a href={`/recipes/${recipe._id}`}>{recipe.name} Show Page</a> : ''} */}
          </nav>
          <h1>
            {title}
          </h1>

          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
