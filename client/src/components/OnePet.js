import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const OnePet = (props) => {
    const { id } = props;
    const { likes } = props;

    const [pet, setPet] = useState({});
    const [currentLikes, setCurrentLikes] = useState(likes);
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/petshelter/${id}`)
            .then((res) => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const likeHandler = (e) => {
        debugger;

        if (hasLiked === false) {
            console.log("like")
            e.target.innerHTML = "Unlike";
            setCurrentLikes(currentLikes + 1);
            setHasLiked(true);
            console.log(e.target);
        }

        else {
            console.log("unlike");
            e.target.innerHTML = "Like";
            setCurrentLikes(currentLikes - 1);
            setHasLiked(false);
            console.log(e.target);

        }
    }

    const deletePet = (idFromBelow) => {
        axios
            .delete(`http://localhost:8000/api/petshelter/${idFromBelow}`)
            .then((res) => {
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

            <h3 class="m-4">Details About: {pet.name}</h3>

            <p>Name: {pet.name}</p>
            <p>Type: {pet.type}</p>
            <p>Description: {pet.description}</p>
            <p>Skills: {pet.skills}</p>

            <button class="m-2" onClick={(e) => likeHandler(e)}>Like</button>
            <button onClick={(e) => deletePet(pet._id)}>

                Adopt {pet.name}
            </button>
        </div>
    );
};

export default OnePet;