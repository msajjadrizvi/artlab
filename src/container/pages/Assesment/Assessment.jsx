import React, { useState } from "react";
import "./assesment.css";
import { RadioInput } from "../../../components/common/RadioInput";
import { Button } from "../../../components/common/Button";
import { SocialShare } from "../../../components/common/SocialShare";

const Assesment = () => {
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [answer5, setAnswer5] = useState("");
  const [character, setCharacter] = useState("");
  const [q, setQ] = useState(1)
  const [totalAnswer , setTotalAnswer] = useState([])

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

  const handleChnage = (e,q) => {
    if(q === 1){
      totalAnswer.push(e.target.value)
      setAnswer1(e.target.value)
    }
    if(q === 2){
      totalAnswer.push(e.target.value)
      setAnswer2(e.target.value)
    }
    if(q === 3){
      totalAnswer.push(e.target.value)
      setAnswer3(e.target.value)
    }
    if(q === 4){
      totalAnswer.push(e.target.value)
      setAnswer4(e.target.value)
    }
    if(q === 5){
      totalAnswer.push(e.target.value)
      setAnswer5(e.target.value)
    }
  }
  //
  const handleQuestion = () => {
    if(q < 5){
      setQ(q + 1)
    }
    else {
      setQ(0)
      let res = totalAnswer.filter((x)=> x === "A")
      if(res.length > 2){
        setCharacter("Lily Labcoat");
      }
      else{
        setCharacter("Galaxy Glitter");
      }
    }
  }

  return (
    // <div className="App">
    //     <h1>Which ArtLab character are you?</h1>
    //     <form onSubmit={handleSubmit}>
    //         <label>
    //             Question 1: What is your favorite color?
    //             <br />
    //             <input type="radio" name="q1" value="A" onChange={(e) => setAnswer1(e.target.value)} />A) Blue
    //             <br />
    //             <input type="radio" name="q1" value="B" onChange={(e) => setAnswer1(e.target.value)} />B) Pink
    //         </label>
    //         <br />
    //         <br />
    //         <label>
    //             Question 2: What is your favorite hobby?
    //             <br />
    //             <input type="radio" name="q2" value="A" onChange={(e) => setAnswer2(e.target.value)} />A) Painting
    //             <br />
    //             <input type="radio" name="q2" value="B" onChange={(e) => setAnswer2(e.target.value)} />B) Crafting
    //         </label>
    //         <br />
    //         <br />
    //         <label>
    //             Question 3: What is your favorite animal?
    //             <br />
    //             <input type="radio" name="q3" value="A" onChange={(e) => setAnswer3(e.target.value)} />A) Dog
    //             <br />
    //             <input type="radio" name="q3" value="B" onChange={(e) => setAnswer3(e.target.value)} />B) Cat
    //         </label>
    //         <br />
    //         <br />
    //         <label>
    //             Question 4: What is your favorite food?
    //             <br />
    //             <input type="radio" name="q4" value="A" onChange={(e) => setAnswer4(e.target.value)} />A) Pizza
    //             <br />
    //             <input type="radio" name="q4" value="B" onChange={(e) => setAnswer4(e.target.value)} />B) Sushi
    //         </label>
    //         <br />
    //         <br />
    //         <label>
    //             Question 5: What is your favorite season?
    //             <br />
    //             <input type="radio" name="q5" value="A" onChange={(e) => setAnswer5(e.target.value)} />A) Summer
    //             <br />
    //             <input type="radio" name="q5" value="B" onChange={(e) => setAnswer5(e.target.value)} />B) Winter
    //         </label>
    //         <br />
    //         <br />
    //         <button type="submit">Submit</button>
    //     </form>
    //     {character && (
    //         <div>
    //             <h2>You are {character}!</h2>
    //         </div>
    //     )}
    // </div>
    <div className="container">
      <div className="card">
          <p className="question-heading">{!character ? `Question ${q}` : character }</p>
          {q === 1 && (
          <>
          <p className="question">What is your favorite color ?</p>
          <div className="input-container">
            <div className="input-main">
              <RadioInput value="A" onChange={(e) => handleChnage(e, 1)} name="q1"/>
              <p className="input-text">Blue</p>
            </div>
            <div className="input-main">
              <RadioInput value="B" onChange={(e) => handleChnage(e, 1)} name="q1"/>
              <p className="input-text">Red</p>
            </div>
          </div>
          <div className="btn">
            <Button value={`Next`} disable={!answer1} onClick={handleQuestion} type="next"/>
          </div>
          </>
          )}
           {q === 2 && (
          <>
          <p className="question">What is your favorite hobby ?</p>
          <div className="input-container">
            <div className="input-main">
              <RadioInput value="A" onChange={(e) => handleChnage(e, 2)} name="q2"/>
              <p className="input-text">Painting</p>
            </div>
            <div className="input-main">
              <RadioInput value="B" onChange={(e) => handleChnage(e, 2)} name="q2"/>
              <p className="input-text">Crafting</p>
            </div>
          </div>
          <div className="btn">
            <Button value={`Next`} disable={!answer2} onClick={handleQuestion} type="next"/>
          </div>
          </>
          )}
          {q === 3 && (
          <>
          <p className="question">What is your favorite animal ?</p>
          <div className="input-container">
            <div className="input-main">
              <RadioInput value="A" onChange={(e) => handleChnage(e, 3)} name="q3"/>
              <p className="input-text">Dog</p>
            </div>
            <div className="input-main">
              <RadioInput value="B" onChange={(e) => handleChnage(e, 3)} name="q3"/>
              <p className="input-text">Cat</p>
            </div>
          </div>
          <div className="btn">
            <Button value={`Next`} disable={!answer3} onClick={handleQuestion} type="next"/>
          </div>
          </>
          )}
          {q === 4 && (
          <>
          <p className="question">What is your favorite food ?</p>
          <div className="input-container">
            <div className="input-main">
              <RadioInput value="A" onChange={(e) => handleChnage(e, 4)} name="q4"/>
              <p className="input-text">Pizza</p>
            </div>
            <div className="input-main">
              <RadioInput value="B" onChange={(e) => handleChnage(e, 4)} name="q4"/>
              <p className="input-text">Sushi</p>
            </div>
          </div>
          <div className="btn">
            <Button value={`Next`} disable={!answer4} onClick={handleQuestion} type="next"/>
          </div>
          </>
          )}
          {q === 5 && (
          <>
          <p className="question">What is your favorite season ?</p>
          <div className="input-container">
            <div className="input-main">
              <RadioInput value="A" onChange={(e) => handleChnage(e, 5)} name="q5"/>
              <p className="input-text">Pizza</p>
            </div>
            <div className="input-main">
              <RadioInput value="B" onChange={(e) => handleChnage(e, 5)} name="q5"/>
              <p className="input-text">Sushi</p>
            </div>
          </div>
          <div className="btn">
            <Button value={`Submit`} disable={!answer5} onClick={handleQuestion} type="next"/>
          </div>
          </>
          )}
          {character && (
          <>
            <p className="question">Share your result</p>
              <SocialShare result={character}/>
          </>
           )}
      </div>
    </div>
  );
};

export default Assesment;
