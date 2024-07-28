import "./Exercise.css"

const Exercise = () => {

    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return(<>
    <div>
    <h1 style={style_header}>create a h1 tag and set its color to red, and the background color to lightblue.</h1>
    <p className="para">This is a paragraph. It provides some information to the user.</p>
      
      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
        Go to Example.com
      </a>

      <form>
        <label>Enter something:</label>
        <input
          type="text"
        />
        <button>Submit</button>
      </form>

      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder"
        style={{ width: '150px', height: '150px' }}
      />

      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
    </>)
}

export default Exercise;