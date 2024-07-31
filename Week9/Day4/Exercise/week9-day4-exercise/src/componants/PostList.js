import { useState, useEffect } from "react";
import data from "./info.json"


const PostList = (props) => {
    const [info, setInfo] = useState(data);
      console.log(info)
    
      return(
        <>
        <h1>Hi this is a title</h1>
        <h1>{info[0].title}</h1>
        <p>{info[0].content}</p>
        <h1>{info[1].title}</h1>
        <p>{info[1].content}</p>
        </>
      )
}

export default PostList;