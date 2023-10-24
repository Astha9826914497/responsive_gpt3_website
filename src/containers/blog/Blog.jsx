import React from 'react';

import {Article} from '../../components';
//importing css file
import './blog.css'
import {blog1,
  blog2,
  blog3,
  blog4,
  blog5} from '../blog/index';
const Blog = () => {
  return (
    <div className='gpt3_blog section__padding'>
      <div className="gpt3_blog-heading">
        <h1 className='gradient_text'>Much is going on, and we are blogging about it</h1>
      </div>
      <div className='gpt3_blog-container'>
        <div className="gpt3_blog-container_groupA">
          <Article imgUrl={blog1} date="Oct 20, 2023" title="The future belongs to GPT-3 and openAI. How about we investigate?" />
        </div>
        <div className="gpt3_blog-container_groupB">
        <Article imgUrl={blog2} date="Oct 20, 2023" title="The future belongs to GPT-3 and openAI. How about we investigate?" />
        <Article imgUrl={blog3} date="Oct 20, 2023" title="The future belongs to GPT-3 and openAI. How about we investigate?"/>
        <Article imgUrl={blog4} date="Oct 20, 2023" title="The future belongs to GPT-3 and openAI. How about we investigate?"/>
        <Article imgUrl={blog5} date="Oct 20, 2023" title="The future belongs to GPT-3 and openAI. How about we investigate?"/>

        </div>
        


      </div>
    </div>
  )
}

export default Blog