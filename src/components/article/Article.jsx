import React from 'react'

//importing css file
import './article.css'
const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt3_blog-container_article' >
      <div className="gpt3_blog-container_article-image">
        <img src={imgUrl} alt="blog" />
      </div>
      <div className="gpt3_blog-container_article-content">
        <div>
          <p>{date} </p>
          <h3>{title}</h3>
        </div>
        <p>See the entire article</p>
      </div>
    </div>
  )
}

export default Article