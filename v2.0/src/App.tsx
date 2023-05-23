import { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About';
import Skills from './components/Skills';


interface AppContextType {
  value: string;
  handleChange: (newValue: string) => void
}

const initialContextValue: AppContextType = {
  value: '',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  handleChange: () => {},
};

export const AppContext = createContext<AppContextType>(initialContextValue);

function App() {
  const [value, setValue] = useState("swe");

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  const contextValue = {
    value,
    handleChange,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div 
        className='bg-white bg-no-repeat bg-opacity-50 app'
      >
        <Header />
        <main className='w-[90%] mx-auto max-w-[100rem]'>
          <About />
          <Skills />
        </main>
      </div>
  </AppContext.Provider>
  )
}

export default App
