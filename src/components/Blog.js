import React from 'react'
import Card from 'react-bootstrap/Card';
import './Blog.css'

const Blog = (props) => {
    return (
      <>
      <Card className='card'>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body >
          <blockquote className="blockquote mb-0">
            <div className='about'>
            <p>
            <img src={props.content} alt = 'movieimage' height='200px'/>
              
            </p>
            <p>
            <div>{props.about}</div>
            </p>
            </div>
            
            
            <footer className="blockquote-footer">
              <cite title="Source Title">{props.author}</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
    );
  }
  
  export default Blog