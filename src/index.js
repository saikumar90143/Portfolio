import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from 'react-router-dom';
import Loader from './components/Loader';
const App=React.lazy(()=>import ('./App'))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Suspense fallback={<Loader/>}>   
    <App />
     </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)

