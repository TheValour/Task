import './App.css'
import {Article, Hero, Navbar} from './components';
import { UserContextProvider } from './components/context/UserContext'

function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <Navbar/>
      </UserContextProvider>

      <Hero/>
      <Article/>
    </div>
  );
}

export default App;
