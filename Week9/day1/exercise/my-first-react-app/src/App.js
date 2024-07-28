import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from "./UserFavoriteAnimals.js";
import Exercise from './Exercise3.js';




const myelement = <h1>I Love JSX!</h1>
const sum = 5 + 5

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};
function App() {
  return (<>
        <div>
        <p>Hello World!</p>
        {myelement}
        <p>React is {sum} times better with JSX</p>

        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <ul>
        {user.favAnimals.map((item, index) => {
        return <UserFavoriteAnimals key={index} animal = {item} />;
      })}
         </ul>
         <Exercise />
        </div>
        </>
        )
}
// function App() {
//   return (
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

//     <>
//     <div>

//       {
//         users.map((item) => {
//           return <User key= {item.id} {...item}/>
//         })
//       }
//     </div>
//     </>
//   );
// }

export default App;
