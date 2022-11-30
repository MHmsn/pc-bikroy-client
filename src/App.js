
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { AllContext } from './contexts/AllContextProvider';

function App() {
  const {dark} = useContext(AllContext);
  return (
    <div className="App" data-theme={dark?"dark":"light"}>
    <RouterProvider router={router}></RouterProvider>
    <div><Toaster/></div>
    </div>
  );
}

export default App;
