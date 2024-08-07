import logo from './logo.svg';
import './App.css';
import UserProfile from './users/Users';

function App() {

  const userId = '1';

  return (
    <div className="App">
      <UserProfile userId={userId}/>
    </div>
  );
}

export default App;
