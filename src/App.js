import React from 'react';
import Child from './components/child'
import './components/style.css'
import Object from './components/object'
import Edu from './components/edu'
//function App(){

//}

//const App = () => {
  
//}
class App extends React.Component{
  render ()
  {
    return (
      <div>
       
         <Object />
      <Child />
      <Edu />
      
     
      </div>
    )
  
  }
}
export default App