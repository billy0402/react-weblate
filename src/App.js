import { useTranslation } from 'react-i18next';
import './App.css';
import i18n from './i18next';
import logo from './logo.svg';

function App() {
  const { t } = useTranslation();

  function changeLanguage(lang) {
    i18n.changeLanguage(lang, (err, t) => {
      if (err) return console.log('something went wring loading', err);
      t('greet');
    });
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => changeLanguage('en')}>en</button>
        <button onClick={() => changeLanguage('zh')}>zh</button>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
          {t('greet')}
        </a>
      </header>
    </div>
  );
}

export default App;
