import { useState, useEffect } from "react";
import "./form.css"

function FormComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [destination, setDestination] = useState("");
    const [nuts, setNuts] = useState("No");
    const [milk, setMilk] = useState("No");
    const [vegan, setVegan] = useState("No");
    return (
        <>
        <div className="header">
            <h1>Sample form</h1>
        </div>
        <div className="form">
            <form>
            <input
          placeholder='First Name'
          name='firstName'
          onChange={(e) => {
            setFirstName(e.target.value)
          }}
        />
        <br />
        <input
          placeholder='Last Name'
          name='lastName'
          onChange={(e) => {
            setLastName(e.target.value)
          }}
        />
        <br />
        <input
          placeholder='Age'
          name='age'
          onChange={(e) => {
            setAge(e.target.value)
          }}
        />
        <br />
        <br />
        <input class="radiobutton" type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)}/>Male
        <br/>
        <input class="radiobutton" type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)}/>Female
        <br/>
        <p>Select your destination</p>
        <br/>
        <select name='num' onChange={(e) => setDestination(e.target.value)}>
          <option value={''}>--Please select a destination--</option>
          <option value={"Thailand"}>Thailand</option>
          <option value={"Japan"}>Japan</option>
          <option value={"Brazil"}>Brazil</option>
        </select>
        <br />
        <br />
        <p>Dietary restrictions:</p>
        <input
          type='checkbox'
          name='Nuts free'
          onChange={(e) => setNuts(e.target.checked ? 'Yes' : 'No')}
        />Nuts free
        <br />
        <input
          type='checkbox'
          name='Lactose free'
          onChange={(e) => setMilk(e.target.checked ? 'Yes' : 'No')}
        />Lactose free
        <br />
        <input
          type='checkbox'
          name='Vegan'
          onChange={(e) => setVegan(e.target.checked ? 'Yes' : 'No')}
        />Vegan
        <br />
        <br />
        <input type="submit" value={"Submit"}/>
            </form>
            <hr/>
        </div>
        <div className="info">
        <h2>Entered information:</h2>
        <p>Your name: {firstName} {lastName}</p>
        <p>Your age: {age}</p>
        <p>Your gender: {gender}</p>
        <p>Your destination: {destination}</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free : {nuts}</p>
        <p>**Lactose free : {milk}</p>
        <p>**Vegan meal : {vegan}</p>
        </div>
        </>
    )
}

export default FormComponent