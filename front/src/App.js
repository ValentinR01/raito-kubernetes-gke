import './App.css';
import ThemeProvider from './providers/ThemeProvider';
import Text from './components/atoms/grouping/Text/Text'

function App() {
  console.log('themeProvider : ', ThemeProvider);
  console.log('themeProvider.ThemeProvider : ', ThemeProvider.theme);
  return (
    <ThemeProvider>
      <div className="App">
        <Text className='coucou' ></Text>
      </div>
    </ThemeProvider>
  );
}

export default App;
