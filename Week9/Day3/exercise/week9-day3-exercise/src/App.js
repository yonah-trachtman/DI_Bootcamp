import logo from './logo.svg';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import BuggyCounter from './BuggyCounter';
import Color from './Color';
import Child from './Child';
import { useState } from "react";
function App() {
  const [show, setShow] = useState(true);
  return (
    <>
<ErrorBoundary fallback={<p>Counter 1 is down</p>}>
<BuggyCounter />
<BuggyCounter />
</ErrorBoundary >

<ErrorBoundary fallback={<p>Counter 1 is down</p>}>
<BuggyCounter />
</ErrorBoundary >
<ErrorBoundary fallback={<p>Counter 1 is down</p>}>
<BuggyCounter />
</ErrorBoundary >

<BuggyCounter />

<Color/>


<div>
            {show && <Child />}
            <button onClick={() => setShow(false)}>
                Delete Header
            </button>
        </div>
</>
  );
}

export default App;
