import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const useTheme = () => useContext(ThemeContext);
console.log('useTheme :', useTheme);

export default useTheme;
