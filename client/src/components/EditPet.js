import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const EditPet = (props) => {


    const {id} = props;

    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skills, setSkills] = useState("");


    useEffect(() => {
        axios.get(`http://localhost:8000/api/petshelter/${id}`)
            .then((res) => {
                console.log(res.data);
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkills(res.data.skills);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        axios
            .put(

                `http://localhost:8000/api/petshelter/${id}`,
                {
                    name, 
                    type,
                    description,
                    skills,
                },
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);

                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div class="d-flex p-2 justify-content-around align-items-center">
                <h1>Pet Shelter</h1>
                <Link class="m-4" to={"/"}>Return Home</Link>
            </div>

            <h3>Edit {name}</h3>
            <div class="d-flex p-2 justify-content-around align-items-center">
                
            <form class="flex-column p-2" onSubmit={submitHandler}>
                <div class="col-sm-12">
                    <label for="name">Name</label>
                    <input
                        class="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        type="text"
                    />
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
                            Select Skill 0 - 3
                        </option>
                        <option value="Run">Run</option>
                        <option value="Jump">Jump</option>
                        <option value="Brown">Brown</option>
                        <option value="Run and Jump">Run and Jump</option>
                        <option value="Run and Brown">Run and Brown</option>
                        <option value="Jump and Brown">Jump and Brown</option>
                        <option value="Run, Jump and Brown">Run, Jump and Brown</option>
                    </select>
                </div>

                <button class="m-4">Edit Pet</button>
                </form>
            </div>
        </div>
    );
};

export default EditPet;