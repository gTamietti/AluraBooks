import './App.css';
import Logo from './components/Logo/logo.jsx';
import OpcoesHeader from './components/OpcoesHeader/opcoes.jsx'
import IconesHeader from './components/IconesHeader/icones.jsx';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Logo />
        
        <OpcoesHeader />
        
        <IconesHeader />

      </header>
    </div>
  );
}

export default App;
