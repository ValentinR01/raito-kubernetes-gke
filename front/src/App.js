import './App.css';
import ThemeProvider from './providers/ThemeProvider';
import Text from './components/atoms/grouping/Text/Text';
import Button from './components/atoms/forms/Button/Button';

function App() {

  return (
    <ThemeProvider chosenTheme='dark'>
      <div className="App">
        <Text size="large" color="secondary">RAITŌ</Text>
        <Button type='submit' disbled>El famoso button</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
