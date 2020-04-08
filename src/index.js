import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';




const App = () => {
  
  return (

    <div className="ui container comments">

    <ApprovalCard>
      <div>
        <h4>Warning!</h4>
        Are you sure you want to do this?
      </div>

    </ApprovalCard>
    
    <ApprovalCard>
      <CommentDetail 
          author="Samanta" 
          timeAgo="Today at 8:03" 
          content="Nice blog posts!"
          avatar={faker.image.avatar()}
      />
    </ApprovalCard>

    <ApprovalCard>
      <CommentDetail 
          author="Alex" 
          timeAgo="Today at 11:35" 
          content="Amazing :)"
          avatar={faker.image.avatar()}
      />
    </ApprovalCard>
    
    
    <ApprovalCard>
      <CommentDetail 
          author="Darek" 
          timeAgo="Today at 18:01" 
          content="Good job Dude!"
          avatar={faker.image.avatar()}
      />
    </ApprovalCard>


    </div>

  )

};

ReactDOM.render(<App/>, document.querySelector ('#root'));
