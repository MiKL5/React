import './App.css';
import BtnToggle from './Component/BtnToggle/BtnToggle';
import Content from './Component/Content/Content';
import ThemeContextProvider from './Context/ThemeContext';

export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </div>
  );
}
// dans ThemeContextProvider, j'aurais accés au 'state' de 'Content' qui contient 'BtnToggle'.