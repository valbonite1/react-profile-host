import React from 'react';
import './Comment.css';

class Comment extends React.Component {
  state = users = [{
    firstName: '',
    lastName: '',
    comments: ''
  }]

  componentDidMount(){
    try {
      const json = localStorage.getItem('users');
      const userData = JSON.parse(json);

      if(users){
          this.setState(() => ({userData}));
      }
    } catch (error) {}      
  }

  componentDidUpdate(prevProps, prevState){
      if(prevState.users.length !== this.initialState.length){
        const json = JSON.stringify(this.state.users); 
        localStorage.setItem('users', json);
    }
  }

  handlefirstName = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleLastName = e => {
    this.setState({
      lastName: e.taraget.value
    })
  }

  handleCommentsChange = e => {
    this.setState({
      comments: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
  }


  render() {
    return(
      <div className='comment-container'>
        <form className='comment-input' onSubmit={this.handleSubmit}>
          <div className='form-header'>
            <h1>Let Val know your thoughts!</h1>
          </div>
          <div className='form-container' autoComplete='off'>
            <div className='input-container'>
              <label>First Name</label>
              <input type='text' value={this.state.firstName} onChange={this.handlefirstName} />
            </div>
            <div className='input-container'>
              <label>Last Name</label>
              <input type='text' value={this.state.lastName} onChange={this.handleLastName} />
            </div>
            <div className='input-container'>
              <label>Recommendation</label>
              <textarea name='Comment' rows='10' cols='50' onChange={this.handleCommentsChange} />
            </div>
            <div className='btn-container'>
              <button className='comment-btn'>Comment</button>
          </div>
          </div>
        </form>
        <div className='comment-display'>
        </div>
      </div>
    )
  }
}

export default Comment;