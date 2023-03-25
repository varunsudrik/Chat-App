import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="aeb3e459-642e-4723-aaad-cadb23f5ac91"
        userName="redgear204"
        userSecret="Qwerty@123"
      ></ChatEngine>
    </div>
  );
}

export default App;
