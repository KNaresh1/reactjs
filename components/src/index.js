// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

// Create a react component
const App = () => {
	return ( 
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
					author="Sam" 
					timeAgo="Today at 04:30 PM" 
					content="Awesome content" 
					avatar={faker.image.avatar()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Peter" 
					timeAgo="Today at 02:10 PM" 
					content="Nice blog post!" 
					avatar={faker.image.avatar()} 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
			<ApprovalCard>
				<h4>We can pass any content to parent component as it is implemented as reusable component</h4>
			</ApprovalCard>
		</div>
	);
};

// Take the react component and show it up on the screen
ReactDOM.render(<App />, document.querySelector('#root'));