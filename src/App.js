
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <div className="App">
    <RouterProvider router={router}></RouterProvider>
    <div><Toaster/></div>
    </div>
  );
}

export default App;
