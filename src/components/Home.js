import React from 'react'
import Blog from './Blog'
import BData from './BData';
import './Home.css'

const Home = () => {
    return (
      <>
      <div className='blogContainer'>
          {BData.map((val,index) =>{
              return(<Blog title = {val.title}
                          content = {val.content}
                        //   author = {val.author}
                          about = {val.about}
              />)
          })}
      </div>
  
      </>
    )
  }
  
  export default Home