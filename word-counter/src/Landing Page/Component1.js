import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy,faTrashCan,faFont,faGamepad} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import './Component1.css'

function Component1() {
    let [Character, setCharacter] = useState(0);
    let [WordLenght, setWordLength] = useState(0);
    let [Lines, setLines] = useState(0);
    let [Sentence, setSentence] = useState(0);
    let [userInput, setUserInput] = useState('');


  // the on Change function 
  function handleChange(event) {
    setUserInput(event.target.value);

  // function to count character
    setCharacter(() => {
      let count = event.target.value;
      let countChars = count.length;
      return countChars
    });
  // function to count words 
    setWordLength(()=>{
      let words = event.target.value;
      let wordSplit = words.split(' ');
      let filteredWords = wordSplit.filter(word => word !== '').length;
      return filteredWords

    });

    //function for new line 

      setLines(()=>{
      let lin = event.target.value;
      let newline = lin.split('\n');
      let newlineLength = newline.filter(line => line !== '').length;
      return newlineLength 
      //  console.log(newline)
    });


  //function to count sentences
    setSentence(()=>{
      let sentences = event.target.value;
      let countSet = sentences.split('.');
      let countsent = countSet.filter(sentence => sentence.length > 0).length;
      return countsent;
    });
  };


  //function to copy user input
  const copyText = () => {
    const userData = document.getElementById('userData');
    userData.select();
    document.execCommand('copy');
   };

  //  function for the uppercase
  const convertToUpperCase = () => {
    setUserInput(userInput.toUpperCase());
  };

  // function for the lower case
  const convertToLowerCase = () => {
     setUserInput(userInput.toLowerCase());
  };


   const getSelectedtext = () => {
    
   let text = document.getSelection().toString();
   // let newText = text.toUpperCase();
   setUserInput(text.toUpperCase().substring(-1));
   // return newText;
   
   }

   const getSelected = () => {
    let text = userInput.textContent || userInput;
    let newText = document.getSelection().toString(),
        part = text.slice(text.indexOf(newText) +1, text.length);
    ;
    let userText = newText.toUpperCase();
    setUserInput(userText + part);
  };

  function toUpperCase() {
    const highlightedText = window.getSelection().toString();
    const capitalizedText = highlightedText.toUpperCase();
    const range = window.getSelection().getRangeAt(0);
    range.deleteContents();
    const newNode = document.createTextNode(capitalizedText);
    range.insertNode(newNode);
  }


  function toupperCase(){
    const highlightedText = window.getSelection().toString();
    const newText = highlightedText.toUpperCase();
    let uppercase = highlightedText.replace(highlightedText, newText);
    return uppercase
}

  


//   function for the delete button
  const deteleAll = () => {
    setUserInput(' ');
    setCharacter(0)
    setSentence(0)
    setLines(0)
    setWordLength(0)
  };

  function text() {
  const hoveredText = document.getElementsByClassName('text');
  const textSize = document.getElementsByClassName('text-size');
  
  hoveredText.addEventListener('mouseover', () => {
    textSize.style.display = 'flex';
  });
}



  return (
    <div className='container'>
        <div className='wrapper'>
          <div className='counters'>
              <h2 className='chars'>Character<p>{Character}</p></h2>
              <h2>Words<p>{WordLenght}</p></h2>
              <h2 id='lines'>Lines<p>{Lines}</p></h2>
              <h2 id='sent'>Sentence<p>{Sentence}</p></h2>
          </div>

          <textarea placeholder='Type or Paste your text here ....' value={userInput} id='userData' onChange={handleChange} cols="30" rows="10"></textarea>
       </div>

        <div className='tools'>
          <button onClick={copyText}><FontAwesomeIcon icon={faCopy} /></button>
          <button onClick={deteleAll}><FontAwesomeIcon icon={faTrashCan} /></button>
          <button onClick={convertToUpperCase}><FontAwesomeIcon icon={faFont} /></button>
          <button onClick={convertToLowerCase}>a</button>
        <div/>

          <div class="dropdown">
              <button><p>T</p> <p id='tee'>T</p></button>

              <div class="dropdown-content">
                <div className='text'>
                <button id='size1'>T</button>
                <button id='size2'>T</button>
                <button id='size3'>T</button>
                </div>
              </div>
          </div>
        </div>

    </div>
  )
}

export default Component1