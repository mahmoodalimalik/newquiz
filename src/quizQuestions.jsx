import bd from '/bd.svg';
import cn from '/cn.svg';
import ind from '/in.svg';
import pk from '/pk.svg';
import sl from '/sl.svg';



export const questions=
[

  {
    "id":1,
    "statement": "This Flag belongs to, which country?",
    "image": <img src={bd} width = '300px' height= '150px'/>,
    "Options": [
                  "Pakistan",
                  "Bangladesh",
                  "Nepal",
                  "USA"
                  
                ],
    "correctOptionIndex":1
   
  },

  {
    "id":2,
    "statement": "This Flag belongs to, which country?",
    "image": <img src={ind} width = '300px' height= '150px'/>,
    "Options": [
                  "Afganistan",
                  "india",
                  "indonasia",
                  "Canada"
                  
                ],
    "correctOptionIndex":1
 
  },
  {
    "id":3,
    "statement": "This Flag belongs to, which country?",
    "image": <img src={cn} width = '300px' height= '150px'/>,
    "Options": [
                  "Nepal",
                  "Bangladesh",
                  "China",
                  "Canada"
                  
                ],
    "correctOptionIndex":2
  
  },
  {
    "id":4,
    "statement": "This Flag belongs to, which country?",
    "image": <img src={sl} width = '300px' height= '150px'/>,
    "Options": [
                  "Pakistan",
                  "Bangladesh",
                  "Nepal",
                  "Sirilanka"
                ],
    "correctOptionIndex":3
  },
  {
    "id":5,
    "statement": "This Flag belongs to, which country?",
    "image": <img src={pk} width = '300px' height= '150px'/>,
    "Options": [
                  "India",
                  "Bangladesh",
                  "Pakitan",
                  "USA"
                  
                ],
    "correctOptionIndex":2

  }

]

