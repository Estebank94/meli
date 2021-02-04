import React from 'react'
import './styles.scss'

const CategoriesBreadcrumb = ({ categories }) => {
  return(
        <ul className="categories">
          {
            categories.map((category, index) => index + 1 === categories.length ? <li key={category}><strong>{category}</strong></li> : <li key={index}>{category} > </li>)
          }
        </ul>
  )
}

export default CategoriesBreadcrumb
