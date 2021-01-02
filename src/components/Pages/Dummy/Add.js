import React, { Component } from 'react';
import { Form, Modal, Button } from 'semantic-ui-react';

class Add extends Component {
  initialState = {
    form: {
      name: '',
      username: '',
    },
  }

  state = this.initialState

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      form: { ...this.state.form, [name]: value },
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    let recommendation = JSON.parse(localStorage.getItem('recommendation') || '[]');

    const { name, username } = this.state.form
    const { addRow } = this.props

    const newUser = {
      name,
      username,
    }

    recommendation.push(newUser);

    addRow(newUser)
    this.setState(this.initialState);

    localStorage.setItem('recommendation', JSON.stringify(recommendation));
  }


  render() {
    const { name, username } = this.state.form

    return (
      <Modal trigger={<Button content="Write" />} closeIcon>
        <Modal.Header>Write Your Recommendation</Modal.Header>
        <Modal.Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Field>
              <Form.Input
                label="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
                autoFocus={true}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                label="Comment"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button type="submit" content="Submit" disabled={!name || !username} />
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

export default Add;
