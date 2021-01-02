import React from 'react';
import './Comment.css';

class Comment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: ''
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