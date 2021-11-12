import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


const AllPets = (props) => {
    
    const [petList, setPetList] = useState([]);

    useEffect(() => {
    
        axios.get("http://localhost:8000/api/petshelter")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setPetList(res.data);
            })
            .catch((err) => console.log(err));
    }, [])


    return (
        <div>
            <div class="d-flex p-2 justify-content-around align-items-center">
                <h1>Pet Shelter</h1>
                <Link class="m-4" to={"/new"}>Add a Pet to the Shelter! </Link>
            </div>

            <h3 class="m-4">These Pets are looking for a good home.</h3>
               
                
            {petList.map((pet, index) => (
                <div class="d-flex p-2 justify-content-center align-items-center" key={index}>

                    <h4 class="m-4">{pet.name}</h4>

                    <div class="d-flex p-2 justify-content-end">
                        <p class="m-2" onClick={(e) => navigate(`/pet/${pet._id}`, { state: { p1: petList[0], p2: petList[1] } })}>Details</p>

                        <Link class="m-2" to={`/pet/edit/${pet._id}`}>Edit</Link>
                    </div>

                    
                </div>
            ))}
        </div>
    );
}
export default AllPets;