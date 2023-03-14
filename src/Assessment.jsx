import React, { useState } from 'react';
import './App.css';

function App() {
    const [answer1, setAnswer1] = useState("");
    const [answer2, setAnswer2] = useState("");
    const [answer3, setAnswer3] = useState("");
    const [answer4, setAnswer4] = useState("");
    const [answer5, setAnswer5] = useState("");
    const [character, setCharacter] = useState("");

    function calculateResult() {
        let totalA = 0;
        let totalB = 0;

        // Calculate total for Question 1
        if (answer1 === "A") {
            totalA += 1;
        } else {
            totalB += 1;
        }

        // Calculate total for Question 2
        if (answer2 === "A") {
            totalA += 1;
        } else {
            totalB += 1;
        }

        // Calculate total for Question 3
        if (answer3 === "A") {
            totalA += 1;
        } else {
            totalB += 1;
        }

        // Calculate total for Question 4
        if (answer4 === "A") {
            totalA += 1;
        } else {
            totalB += 1;
        }

        // Calculate total for Question 5
        if (answer5 === "A") {
            totalA += 1;
        } else {
            totalB += 1;
        }

        // Determine result
        if (totalA > totalB) {
            setCharacter("Lily Labcoat");
        } else {
            setCharacter("Galaxy Glitter");
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        calculateResult();
    }

    return (
        <div className="App">
            <h1>Which ArtLab character are you?</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Question 1: What is your favorite color?
                    <br />
                    <input type="radio" name="q1" value="A" onChange={(e) => setAnswer1(e.target.value)} />A) Blue
                    <br />
                    <input type="radio" name="q1" value="B" onChange={(e) => setAnswer1(e.target.value)} />B) Pink
                </label>
                <br />
                <br />
                <label>
                    Question 2: What is your favorite hobby?
                    <br />
                    <input type="radio" name="q2" value="A" onChange={(e) => setAnswer2(e.target.value)} />A) Painting
                    <br />
                    <input type="radio" name="q2" value="B" onChange={(e) => setAnswer2(e.target.value)} />B) Crafting
                </label>
                <br />
                <br />
                <label>
                    Question 3: What is your favorite animal?
                    <br />
                    <input type="radio" name="q3" value="A" onChange={(e) => setAnswer3(e.target.value)} />A) Dog
                    <br />
                    <input type="radio" name="q3" value="B" onChange={(e) => setAnswer3(e.target.value)} />B) Cat
                </label>
                <br />
                <br />
                <label>
                    Question 4: What is your favorite food?
                    <br />
                    <input type="radio" name="q4" value="A" onChange={(e) => setAnswer4(e.target.value)} />A) Pizza
                    <br />
                    <input type="radio" name="q4" value="B" onChange={(e) => setAnswer4(e.target.value)} />B) Sushi
                </label>
                <br />
                <br />
                <label>
                    Question 5: What is your favorite season?
                    <br />
                    <input type="radio" name="q5" value="A" onChange={(e) => setAnswer5(e.target.value)} />A) Summer
                    <br />
                    <input type="radio" name="q5" value="B" onChange={(e) => setAnswer5(e.target.value)} />B) Winter
                </label>
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
            {character && (
                <div>
                    <h2>You are {character}!</h2>
                </div>
            )}
        </div>
    );
}

export default App;