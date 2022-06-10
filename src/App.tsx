import './App.css';

import AboutMe from './components/AboutMe';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <AboutMe />
      <Projects />
      <AppFooter />
    </div>
  );
};

export default App;
