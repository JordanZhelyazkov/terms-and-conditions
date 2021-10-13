


export default function Document(title, content){
    
    return( 
    <div>
      <h1 className="title" value={"Terms and Conditions"}>{title.props}</h1>
      <p className="content" value={content}>{content.prop}</p>
      </div> 
      );
      
}