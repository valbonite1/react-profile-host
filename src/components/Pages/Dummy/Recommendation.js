import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import { Input, Container } from 'semantic-ui-react'
import Add from './Add';
import View from './View';

class Recommendation extends Component {
  initialState = {
    users: [
      {
        name: '',
        username: ''
      }
    ],
    results: [],
    query: ''
    
  }
  
  
  state = this.initialState

  

    /* const data = JSON.parse(localStorage.getItem('recommendation') || '[]');
    this.setState({initialState: data}); */


  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.users) {
      this.resetSearch()
    }
  }

  search = event => {
    const { users } = this.state
    const { value } = event.target

    this.setState({ query: value })

    const results = users.filter(user => {
      const regex = new RegExp(value, 'gi')
      return user.name.match(regex)
    })

    this.setState({ results })
  }

 /*  resetSearch = () => {
    const { users, query } = this.state

    const results = users.filter(user => {
      const regex = new RegExp(query, 'gi')
      return user.name.match(regex)
    })

    this.setState({ results })
  } */

  getUserById = id => {
    const { users } = this.state

    const u = users.filter(user => user.name === id)

    return u[0]
  }

  addRow = user => {
    const { users } = this.state

    this.setState({ users: [...users, user] })
  }

  updateRow = (id, updatedUser) => {
    const { users } = this.state

    this.setState({
      users: users.map(user => (user.name === id ? updatedUser : user)),
    })
  }

  deleteRow = id => {
    const { users } = this.state

    this.setState({
      users: users.filter(user => user.name !== id),
    })
  }

  render() {
    const { users, results, query } = this.state
    const data = results.length === 0 && !query ? users : results
    /* const data = JSON.parse(localStorage.getItem('recommendation') || '[]'); */

    return (
      <Container>
        <Add addRow={this.addRow} />
        <View
          data={data}
          deleteRow={this.deleteRow}
          updateRow={this.updateRow}
          getUserById={this.getUserById}
        />
      </Container>
    )
  }
}

export default Recommendation;
