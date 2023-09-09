import { useState } from 'react';
import { marked } from 'marked';
import './App.css';
import image from './logo192.png'
function App() {
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smoth",
    "age": 25
  }
  \`\`\`
  - First item
  - Second item
  - Third item

  > blockquote

  ![alt text](${image})

  **bold text**
  `);

  marked.setOptions({
    breaks:true
  })
  return (
    <div className="App">
      
      <textarea id="editor"
      onChange={(event) =>{
        setText(event.target.value)
        }} value={text}>
          
        </textarea>

      <div 
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}></div>
    </div>
  );
}

export default App;
