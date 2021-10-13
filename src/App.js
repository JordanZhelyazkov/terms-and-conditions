import  Document  from "./Document.js";
import "./App.css";

function App() {
     const getData = async function getData() {
      const response = await fetch("https://jaspervdj.be/lorem-markdownum/markdown.txt");
      const data = await response.text();
      return data
    }
  
  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <div className="content">
          <Document render={getData}/>
           <button>I Agree</button>
          </div>
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
