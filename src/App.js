import { useState } from 'react';
import './App.css';
import DisplayEmployee from './components/DisplayEmployee';
import axios from 'axios';


function App() {
  const [employee, setEmployee] = useState();
  const getEmployee = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setEmployee(data[0]);
      })
    };

  return (
    <div className="App">
      {employee && <DisplayEmployee employee={employee} />}
      <button type="button" onClick={getEmployee}>Get Quote</button>

    </div>
  );
}

export default App;
