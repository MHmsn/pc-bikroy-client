
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/routes';
function App() {
  return (
    <div className="App mx-4">
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
