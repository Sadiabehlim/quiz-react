import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';

function App() {


const [questions, setQuestion] = useState([
  {
    numb: 1,
    question: "Which is the word processing software?",
    answer: "MS word 2007",
    options: [
      "Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"
    ],
},
{
    numb: 2,
    question: "MS Word is ____ software.?",
    answer:  "Word processing",
    options: [
      "Web browser",
      "Word processing",
      "Operating system",
      "Antivirus",
    ],
  },
       

{
    numb: 3,
    question: "What does PHP stand for?",
    answer: "Hypertext Preprocessor",
    options: [
        "Hypertext Preprocessor",
        "Hypertext Programming",
        "Hypertext Preprogramming",
        "Hometext Preprocessor",
    ],
},
{
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
        "Stylish Question Language",
        "Stylesheet Query Language",
        "Statement Question Language",
        "Structured Query Language",
    ],
},
{
    numb: 5,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
        "eXtensible Markup Language",
        "eXecutable Multiple Language",
        "eXTra Multi-Program Language",
        "eXamine Multiple Language",
    ],
},
{
  numb: 6,
    question: "A word gets selected by clicking it?",
    answer: "Twice",
    options: [
      " Once",
       "Twice",
        "Three times",
         "Four times",
    ],
},
{
  numb:7,
  question: "The center the selected text, the shortcut key is?",
    answer: "Ctrl + E",
    options: [
      "Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"
    ]
},
{
  numb:8,
  
  question: "Which option is not available in Microsoft office button?",
    answer: "old",
    options: [
      "Bold", "New", "Save", "Open"
    ]
},
{
  numb:9,
   
  question: " _____  is the change the way text warps around the selected object.?",
  
    answer:"Text wrapping" ,
    options: [
      "Text wrapping", "Indent", "Clipart", " Line spacing"
    ]
},
{
  numb:10,
  question:" _____  is the change the way text warps around the selected object.?",
  
  answer:"Both b and c",
  options: [
    "To save the document",
      "To set paper setting",
      "To see print preview of the document",
      "Both b and c",
  ],
  
 
},
]);
  const [indexNumber ,setIndexNumber]  = useState(0);
  const[marks, setMarks] = useState(0);

  const [result, setResult] = useState(false);
  const checkAns =(userSelected , correctAns) => {
    if (userSelected == correctAns){
      setMarks(marks +1)

    console.log(marks +1)
    
  
    }
  if (indexNumber + 1 == questions.length){
    setResult(true)
  }
    setIndexNumber(indexNumber+1);
  }

  return (

<div className='back'>
                    {result ? (<h1 className='result'>Your Marks are {marks}</h1>) : <div>
                        <div className='ques'><h1>{questions[indexNumber].question}</h1></div>
                        <div>{questions[indexNumber].options.map((x, i) => {
                            return <div key={i}><button className='bt' onClick={() => checkAns(x, questions[indexNumber].answer)}>{x}</button></div>
                        })}</div>
                    </div>}
                </div>

  )
  }
export default App;
