import logo from './logo.svg';
import './App.css';
import Home from "./componants/Home"
import About from "./componants/About"
import Shop from "./componants/Shop"
import PostList from './componants/PostList';
import { Route, Routes, Link } from 'react-router-dom';
import ErrorBoundary from './componants/ErrorBoundary';
import Example3 from './componants/Example3';
import Example2 from './componants/Example2';
import Example1 from './componants/Example1';
import data from "./componants/test.json";



function App() {
  const info = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  }

  const add = async () => {

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    };
    try {
      const res = await fetch("https://webhook.site/1a0db6b4-d164-48e2-b1b5-3c239e433f47", options);
      const data = await res.json();
      console.log(data)
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/postList">Post List</Link>
        <Link to="/example1">example1</Link>
        <Link to="/example2">example2</Link>
        <Link to="/example3">example3</Link>
      </nav>
      <Routes>
        <Route 
          path="/" 
          element={
            <ErrorBoundary fallback={<p>An error has occurred in Home</p>}>
              <Home />
            </ErrorBoundary>
          } 
        />
        <Route 
          path="/about" 
          element={
            <ErrorBoundary fallback={<p>An error has occurred in About</p>}>
              <About />
            </ErrorBoundary>
          } 
        />
        <Route 
          path="/shop" 
          element={
            <ErrorBoundary fallback={<p>An error has occurred in Shop</p>}>
              <Shop />
            </ErrorBoundary>
          } 
        />
        <Route 
          path="/postList" 
          element={
            <ErrorBoundary fallback={<p>An error has occurred in PostList</p>}>
              <PostList />
            </ErrorBoundary>
          } 
        /><Route 
        path="/example1" 
        element={
          <ErrorBoundary fallback={<p>An error has occurred in example1</p>}>
            <Example1 data={data.SocialMedias}/>
          </ErrorBoundary>
        } 
      />
      <Route 
          path="/example2" 
          element={
            <ErrorBoundary fallback={<p>An error has occurred in example2</p>}>
              <Example2 data={data.Skills}/>
            </ErrorBoundary>
          } 
        />
        <Route 
          path="/example3" 
          element={
            <ErrorBoundary fallback={<p>An error has occurred in example3</p>}>
              <Example3 data={data.Experiences}/>
            </ErrorBoundary>
          } 
        />
      </Routes>

      <div>
        <button onClick={()=> {
          add()
        }}>Post Data</button>
      </div>
    </>
  );
}

export default App;
