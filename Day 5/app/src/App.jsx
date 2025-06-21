import Login from './components/Login';
import Afterlogin from './components/Afterlogin';
function App() {
    let gin=true;
    return(
      gin?<Afterlogin/>:<Login/>
  )
};
export default App;