import React, { Component } from 'react'

const Context = React.createContext()

class Provider extends Component {
  // Context state
  state = {
    showMessages: false,
    logoutDisplayed: false
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
    const { showMessages, logoutDisplayed } = this.state
    const { toggleMessages, toggleLogout } = this

    return (
      <Context.Provider
        value={{
          showMessages,
          logoutDisplayed,
          toggleMessages,
          toggleLogout
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context

export { Provider }