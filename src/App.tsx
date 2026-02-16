import {
  useState,
  // createContext, 
  // useContext, 
  // useLayoutEffect 
} from 'react';
import './App.css';

function App() {
  // const ThemeContext = createContext<{ theme: string; toggleTheme: () => void } | undefined>(undefined);

  // const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  //   const initialTheme = () => localStorage.getItem('THEME') || 'dark-mode';
  //   const [theme, setTheme] = useState(initialTheme());
  //   const toggleTheme = () =>
  //     setTheme((theme) => (theme === 'light-mode' ? 'dark-mode' : 'light-mode'));

  //   useLayoutEffect(() => {
  //     localStorage.setItem('THEME', theme);
  //     if (theme === 'light-mode') {
  //       document.documentElement.classList.remove('dark-mode');
  //       document.documentElement.classList.add('light-mode');
  //     } else {
  //       document.documentElement.classList.remove('light-mode');
  //       document.documentElement.classList.add('dark-mode');
  //     }
  //   }, [theme]);

  //   return (
  //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
  //       {children}
  //     </ThemeContext.Provider>
  //   );
  // };

  // const useTheme = () => {
  //   const context = useContext(ThemeContext);
  //   if (context === undefined) {
  //     throw new Error("useTheme must be used within a ThemeProvider");
  //   }
  //   return context;
  // };

  // const { toggleTheme } = useTheme();

  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className='w-100 flex justify-center'>
        <div className='flex flex-col w-40 gap-4 content-center justify-center'>
          <button onClick={() => setCounter(counter + 1)}>
            Click Here!
          </button>
          <button onClick={() => setCounter(0)}>
            Reset Counter
          </button>
          <div>Total clicks: {counter}</div>
        </div>
      </div>
      <h1>Select Your Theme</h1>
      <div className="card">
        <button>
          What's your vibe today?
        </button>
      </div>
    </div>
  );
}

export default App
