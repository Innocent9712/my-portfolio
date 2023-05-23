import { useState, createContext } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Footer from './components/Footer';


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
  const urlParams = new URLSearchParams(window.location.search);
  const role = urlParams.get("role")
  const [value, setValue] = useState((role ? role : "swe"));

  const handleChange = (newValue: string) => {
    setValue(newValue);
    urlParams.set("role", newValue)
    window.history.pushState({}, "", `?${urlParams}`);
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
        <main className='w-[90%] mx-auto max-w-[85rem]'>
          <About />
          <Skills />
          <Project />
          <Footer />
        </main>
      </div>
  </AppContext.Provider>
  )
}

export default App
