import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { context } from './context/theme';
import Loading from './components/Shared/Loading';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Popular = React.lazy(() => import('./components/Popular'));
const Battle = React.lazy(() => import('./components/Battle/Battle'));
const Results = React.lazy(() => import('./components/Battle/Result'));

const App = () => {
  const [darkMode, setDarkMode] = useState(getSaveMode());

  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggle = () => setDarkMode((prevTheme) => !prevTheme);

  function getSaveMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPreferdDark = getPreferdColorSchema();

    console.log(userPreferdDark);
    if (isReturningUser) {
      return savedMode;
    } else if (userPreferdDark) {
      return true;
    } else {
      return false;
    }
  }
  function getPreferdColorSchema() {
    if (!window.matchMedia) return;
    // console.log(window.matchMedia('(prefers-color-scheme: dark)'));

    return window.matchMedia('(prefers-color-scheme: dark)').media;
  }
  return (
    <Router>
      <context.Provider value={{ darkMode, toggle }}>
        <div className={darkMode ? 'dark' : 'light'}>
          <div className='container'>
            <Nav />
            {/* https://reactjs.org/docs/code-splitting.html */}
            <React.Suspense fallback={<Loading />}>
              <Switch>
                <Route path='/' exact component={Popular} />
                <Route path='/battle' exact component={Battle} />
                <Route path='/battle/results' component={Results} />
                <Route
                  render={() => (
                    <button
                      onClick={() => setDarkMode((prevTheme) => !prevTheme)}>
                      HC
                    </button>
                  )}
                />
              </Switch>
            </React.Suspense>
          </div>
        </div>
      </context.Provider>
    </Router>
  );
};

export default App;
