



export default function Document(props){

    return (
      <>
      <h1 className="title" value={"Terms and Conditions"}>Terms and Conditions</h1>
      <div className="content" >{props.txt}</div>
      <button disabled="true">I Agree</button>
      </>
    )
    
      
}