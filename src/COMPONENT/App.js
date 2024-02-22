//COMPONENTS
import Me from './Me';
import './../STYLE/App.css';

import { useState } from 'react'
import Button from './Button';
import Project from './Project';
import PdfViewer from './PdfViewer';
function App() {
  const [focus, setFocus] = useState('ME');

  return (
    <div className="App">
      <div className="App-header">
        <div className='tabs'>
          <Button
            active={focus==="ME"}
            value="About Me"
            setValue={() => setFocus("ME")}
          />
          <Button
            active={focus==="PROJECTS"}
            value="Projects"
            setValue={() => setFocus("PROJECTS")}
          />
          <Button
            active={focus==="CV"}
            value="CV"
            setValue={() => setFocus("CV")}
          />
           <Button
            value={
              <a target='_blank' href='https://github.com/lucyyu540?tab=repositories'>
              Repositories 
              <img className='spaceLeft' src='./assets/ic_link.svg'/>
            </a>
            }
            setValue={() => { }}
          />


        </div>

        {(() => {
          switch (focus) {
            case "ME":
              return (
                <Me/>
              );
            case "PROJECTS":
              return (
                <Project />
              )
            case "CV": 
            return (
              <PdfViewer path={'./files/censored_resume.pdf'}/>
            )
          }
        })()}






      </div>
    </div>
  );
}

export default App;
