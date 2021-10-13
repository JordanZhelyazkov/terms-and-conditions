import { useState } from "react"
import { render } from "react-dom";

export default function Document(props){
    const [title, setTitle] = useState("Terms and Conditions");
    const [context, setContext] = useState(props.context);
    
    return (
    <div>
      <h1 className="title" value={(e) => e.target.value = setTitle(title)} >{title}</h1>
      <p className="content" value={(e) => e.target.value = setContext(context)}>{context}</p>
      </div>
    )
    

    
}