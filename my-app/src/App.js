import './App.css';
import SharedFlies from './component/sharedfiles'
import Chat from './component/chat/Chat'
import Sidebar from './component/sidebar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import index from './component/groupchat';


function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Router>
        <Chat></Chat>
        <Switch>
          <Route exact path="/editUser/:id" component={index}></Route>
        </Switch>
      </Router>
      <SharedFlies></SharedFlies>
    </div>
  );
}

export default App;

