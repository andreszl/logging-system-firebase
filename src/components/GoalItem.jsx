import React , { Component }from 'react'
import { connect } from 'react-redux'
import { completeGoalRef , goalRef } from '../firebase'
class GoalItem extends Component {

	completeGoal(){
		const { email } = this.props.user
		const { title , serverKey} = this.props.goal
		// console.log('email', email, 'title', title)
		console.log('serverKey', serverKey)
		goalRef.child(serverKey).remove()
		completeGoalRef.push({email, title})
	}
	render(){
		// console.log('this.props.goal', this.props.goal)
		const { email, title } = this.props.goal

		return (
			<div style={{margin:"5px"}}>
				<strong> {title} </strong>
				<span> submitted by <em> {email} </em> </span>
				<span style={{margin:'5px'}}>
				  <span 
				  	style={{ color:"green", cursor:'pointer'}}
				  	onClick={() => this.completeGoal()}
				  	>
				  		&#10004;
				  	</span>  |
				  <span style={{color:'red'}}>&#10006;</span> 
				</span>
			</div>
		)
	}
}

function mapStateToProps(state){
	 const { user } = state 
	 return {
	 	user
	 }
}

export default connect(mapStateToProps, null)(GoalItem)