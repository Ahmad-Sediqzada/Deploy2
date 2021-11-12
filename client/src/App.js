import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import axios from 'axios';
import './App.css';
import AllPets from './components/AllPets';
import NewPet from './components/NewPet';
import OnePet from './components/OnePet';
import EditPet from './components/EditPet';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  useEffect(() => {
    axios.get("http://localhost:8000/api/petshelter")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

  }, [])

  return (
    <div className="App">

      <Router>
        <AllPets path="/" />
        <NewPet path="/new" />
        <OnePet path="/pet/:id" />
        <EditPet path="/pet/edit/:id" />
      </Router>

    </div>
  );
}


export default App;
