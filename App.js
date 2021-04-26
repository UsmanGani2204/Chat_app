import {ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed'
const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm /> 
    return(
        <ChatEngine
            height="100vh"
            projectID="309666c9-54a4-4410-a76b-6b4a33967433"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}   
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />  
    );
}

export default App
