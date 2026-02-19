import { useState } from 'react';
import './App.css';
import { DropdownMenu } from './components/DropdownMenu/DropdownMenu';

function App() {
  const [counter, setCounter] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-auto flex flex-col gap-5'>

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
      <div className="relative inline-block">
        <button onClick={toggleMenu}>
          What's your vibe today?
        </button>
        {isOpen && (
        <DropdownMenu isOpen={isOpen} onClose={toggleMenu}/>
      )}
      </div>

    </div>
  );
}

export default App
