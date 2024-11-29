import { useState } from 'react';
import MenuButton from './components/MenuButton';
import NavBar from './components/NavBar';
import Main from './pages/Main';
import './styles/reset.css';
import './styles/App.scss';

export default function App() {
  const [page, setPage] = useState('home');
  const [navIsOpen, setNavIsOpen] = useState(false);

  function changePage(e) {
    setPage(e.currentTarget.dataset.page);
    setNavIsOpen(false);
  }

  function toggleMenu() {
    setNavIsOpen(!navIsOpen);
  }

  return (
    <>
      <header className='header'>
        <button className='logo__button' data-page='home' onClick={changePage}>
          <img
            className='logo'
            src={require('./assets/logo.svg')}
            alt='Space Tourism Website Logo'
          />
        </button>

        <div className='header__line'></div>

        <MenuButton navIsOpen={navIsOpen} toggleMenu={toggleMenu} />
        <NavBar changePage={changePage} navIsOpen={navIsOpen} page={page} />
      </header>

      <Main page={page} changePage={changePage} />
    </>
  );
}
