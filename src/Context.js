import React, { Component } from 'react'

const Context = React.createContext();

export const Consumer = Context.Consumer;

class Provider extends Component {
  // Context state

  constructor(){
      super()
      this.state = {
        showMessages: false,
        logoutDisplayed: false,
        activeMessageIndex: undefined,
        currentMessage: '',
        conversations: [
          {
            name: "John",
            unseenMessage: false,
            messages: [{message: "Hi there! I am wondering if you can help me with a problem I've been having.", date: new Date(2020, 4, 26, 16), seen: false}]
          },
          {
            name: "Garrett",
            unseenMessage: false,
            messages: [{message: "I have the photos that you ordered last month, how would you like them sent to you?", date: new Date(2020, 4, 25, 15, 36), seen: false}]
          },
          {
            name: "Steven",
            unseenMessage: false,
            messages: [{message: "Last month's report looks great, I am very happy with the progress so far, keep up the good work!", date: new Date(2020, 4, 24, 12), seen: false}]
          },
          {
            name: "Bill",
            unseenMessage: false,
            messages: [{message: "Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...", date: new Date(2020, 4, 12, 14), seen: false}] 
          }

        ]
      }

      this.toggleMessages = this.toggleMessages.bind(this);
      this.toggleLogout = this.toggleLogout.bind(this);
      this.setActiveMessage = this.setActiveMessage.bind(this);
      this.handleInput = this.handleInput.bind(this);
      this.handleNewMessage = this.handleNewMessage.bind(this);
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

  setActiveMessage = (idx, e) =>{
    e.preventDefault();
    console.log(idx, "selected")
    if(idx === this.state.activeMessageIndex){
      this.setState({activeMessageIndex: undefined})
    } else {
      this.setState({activeMessageIndex: idx})
    }
  }

  setMessageSeen = idx =>{
    const newConversations = this.state.conversations;
    for(let i = 0; i < newConversations[idx].length; i++){
      newConversations[idx].seen = true;
    }
    this.setState({conversations: newConversations})
  }

  handleInput = (e) => {
    const newState= this.state;
    newState.currentMessage = e.target.value;
    this.setState({ newState })
  }

  handleNewMessage = (idx, e) => {
    e.preventDefault()
    const newConvo = this.state.conversations;
    newConvo[idx].messages.push({
      message: this.state.currentMessage,
      name: "me",
      seen: true,
      date: new Date()
    })

    this.setState({
      conversations: newConvo,
      currentMessage: ''
    })

    e.preventDefault()

  }

  render() {
    const { children } = this.props
    const { currentMessage, showMessages, logoutDisplayed, conversations, activeMessageIndex} = this.state
    const { toggleMessages, toggleLogout, setActiveMessage, setMessageSeen, handleInput, handleNewMessage } = this

    return (
      <Context.Provider
        value={{
          showMessages,
          logoutDisplayed,
          toggleMessages,
          setMessageSeen,
          toggleLogout,
          setActiveMessage,
          handleInput,
          handleNewMessage,
          activeMessageIndex,
          conversations,
          currentMessage
        }}
      >
        {children}
      </Context.Provider>
    )
  }
}

export default Context

export { Provider }