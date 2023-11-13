
import { Provider } from 'react-redux';

import Routs from './routs/Routs';
import { store } from './redux/store';
import './AppStyle.css'
//data structure 

  
function App() {

  return (
    <>
     <Provider store={store}>
    <Routs/>
    </Provider>
   
    </>
  )
}

export default App
