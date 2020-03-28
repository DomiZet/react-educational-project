import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';




const App = () => {
  
  return (

    <div className="ui container comments">

    <CommentDetail 
        author="Samanta" 
        timeAgo="Today at 8:03" 
        content="Nice blog posts!"
        avatar={faker.image.avatar()}
    />
    <CommentDetail 
        author="Alex" 
        timeAgo="Today at 11:35" 
        content="Amazing :)"
        avatar={faker.image.avatar()}
    />  
    <CommentDetail 
        author="Darek" 
        timeAgo="Today at 18:01" 
        content="Good job Dude!"
        avatar={faker.image.avatar()}
    />  

    </div>

  )

};

ReactDOM.render(<App/>, document.querySelector ('#root'));
