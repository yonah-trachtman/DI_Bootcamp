import { useState } from 'react'


const StateComponant: React.FC = () => {
    const [count, setCount] = useState(0)

    const adder = () => {
      let newcount = count + 1
      setCount(newcount)
    }

    return (
        <button onClick={adder}>{`Click to add to counter ${count}`}</button>
    )

}


export default StateComponant
