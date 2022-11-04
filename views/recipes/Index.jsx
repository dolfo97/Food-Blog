import { useEffect, useState } from 'react'
const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { recipes } = this.props
    return (
      <Default title='Trending Recipes'>   
        <ul>
          {
                        recipes.map((recipe) => {
                          const { name, image } = recipe
                          return (
                            <li key={recipe._id}>
                              <a href={`/recipes/${recipe._id}`}>
                                {name}
                              </a> 
                              <div>
                              
                                {/* <img src='/images/pepper.png'></img> */}
                              </div>
                              
                      
                              <form method='POST' action={`/recipes/${recipe._id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${name} `} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>

      </Default>
    )
  }
}



// function Popular() {
//   const [popular, setPopular] = useState([])

//   useEffect(() => {
//     getPopular();

//   },[])

//   const getPopular = async () => {
//     const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
//     const data = await api.json();
//     setPopular(data.recipes)
//   }

//   return ( 
//   <div>
//     {popular.map((recipe) => {
//       return(
//         <div key={recipe.id}>
//           <p>{recipe.title}</p>
//           </div>
//       );
//     })}
//     </div>
//   )
// }


module.exports = Index