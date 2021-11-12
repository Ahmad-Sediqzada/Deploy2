import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const NewPet = (props) => {

    const [errors, setErrors] = useState({});
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/petshelter',

            {
                name,
                type,
                description,
                skills
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);

                navigate("/");
            })
            .catch((err) => {
                console.log("err: ", err);
                console.log("err.response:", err.response);
                console.log("err.response.data:", err.response.data);
                setErrors(err.response.data.errors);
            })
    }

    return (
        <div>
            <div class="d-flex p-2 justify-content-around">
                <h1>Pet Shelter</h1>
                <Link to={"/"}>Return Home</Link>
            </div>

            <h3 class="m-4">Know a Pet needing a home?</h3>
            <div class="d-flex p-2 justify-content-around align-items-center">

            <form class="flex-column p-2" onSubmit={submitHandler}>
                <div class="col-sm-12">
                    <label For="name">Name</label>
                    <input
                        class="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        type="text"
                    />
                    {errors.name ? <span>{errors.name.message}</span> : null}
                </div>

                <div class="col-sm-12">
                    <label For="type">Type</label>
                    <input
                        class="form-control"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        name="type"
                        type="text"
                    />
                </div>

                <div class="col-sm-12">
                    <label For="description">Description</label>
                    <input
                        class="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        name="description"
                        type="text"
                    />
                </div>

                <div class="col-sm-12">
                    <label For="skills">Skills</label>
                    <select
                        class="form-control"
                        value={skills}
                        onChange={(e) => setSkills(e.target.value)}
                        name="skills"
                    >
                        <option value="none" defaultValue hidden>
                            Select skills 
                        </option>
                        <option value="Run">Run</option>
                        <option value="Jump">Jump</option>
                        <option value="Brown">Brown</option>
                        <option value="Run and Jump">Run and Jump</option>
                        <option value="Run and Brown">Run and Brown</option>
                        <option value="Jump and Brown">Jump and Brown</option>
                        <option value="Run, Jump and Brown">Run, Jump and Brown</option>
                    </select>
                    <br />
                    {errors.skills ? <span>{errors.skills.message}</span> : null}
                </div>


                <button>Add New Pet</button>
                </form>
            </div>
        </div>
    );
}

export default NewPet;