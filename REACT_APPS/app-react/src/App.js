import './assets/css/main.css';
import './assets/css/media-queries.css';
import icon1 from './assets/img/icons/hackatons.svg';
import icon2 from './assets/img/icons/profile.svg';
import icon3 from './assets/img/icons/notifications.svg';
import logo from './assets/img/logotype.svg';
import data from './events-data.js';
import Header from './Header.js';
import ToolsPanel from './ToolsPanel.js';
import Posts from './Posts.js';
function App() {
  return (
     <div class="app">
      <Header logo={logo}></Header>
      <ToolsPanel icon1={icon1} icon2={icon2} icon3={icon3}></ToolsPanel>
      <Posts list={data}></Posts>
     </div>
  );
}

export default App;
