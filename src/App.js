import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./Components/ChatFeed";
import LoginForm from "./Components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="aeb3e459-642e-4723-aaad-cadb23f5ac91"
        userName="redgear204"
        userSecret="Qwerty@123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        inNewMessege={() => new Audio("./assets/chat.mp3").play}
      ></ChatEngine>
    </div>
  );
}

export default App;
