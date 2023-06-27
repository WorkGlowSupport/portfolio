
import './App.css';
import Header from '../src/component/header/header'
import TopContainer from './component/topContainer/topContainer';
import Skills from './component/skills/skills';
import ProjectContainer from "./component/projectContainer/projectContainer"
import Experience from './component/experience/experience';
import Contact from './component/contact';
import { StarsCanvas } from './component/canvas';

function App() {
  return (
    <div>
        <Header/>
        <TopContainer/>
        <Skills/>
        <ProjectContainer/>
        <Experience/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
      </div>
    </div>
  );
}

export default App;
