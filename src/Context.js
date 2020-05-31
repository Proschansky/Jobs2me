import React, { Component } from 'react'

const Context = React.createContext();

export const Consumer = Context.Consumer;

class Provider extends Component {
  // Context state
  state = {
    showMessages: false,
    logoutDisplayed: false,
    conversations: [
      {
        name: "John",
        messages: [{message: "Hi there! I am wondering if you can help me with a problem I've been having.", date: new Date(2020, 5, 26, 16)}]
      },
      {
        name: "Garrett",
        messages: [{message: "I have the photos that you ordered last month, how would you like them sent to you?", date: new Date(2020, 5, 25, 15, 36)}]
      },
      {
        name: "Steven",
        messages: [{message: "Last month's report looks great, I am very happy with the progress so far, keep up the good work!", date: new Date(2020, 5, 24, 12)}]
      },
      {
        name: "Bill",
        messages: [{message: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...", date: new Date(2020, 5, 12, 14)}] 
      }

    ]
  }

  toggleMessages = () => {
    if(!this.state.showMessages){
        this.setState({showMessages: true})
    } else {
        this.setState({
            showMessages: false
        })
    }

  }

  toggleLogout = () => {
    if(!this.state.logoutDisplayed){
        this.setState({logoutDisplayed: true});
    } else {
        this.setState({
            logoutDisplayed: false
        })
    }

  }

  render() {
    const { children } = this.props
    const { showMessages, logoutDisplayed, conversations } = this.state
    const { toggleMessages, toggleLogout } = this

    return (
      <Context.Provider
        value={{
          showMessages,
          logoutDisplayed,
          toggleMessages,
          toggleLogout,
          conversations
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context

export { Provider }