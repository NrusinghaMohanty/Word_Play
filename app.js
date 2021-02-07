const msg=document.querySelector(".msg")
const input=document.querySelector("input")
const btn=document.querySelector(".btn")
let play = false;
let newWords = "";
let randomWords= "";
let words = ["java" , "javascript" , "c++" , "php" , "html" , "css" , "reactjs" , "python" , "angular" , "swift" ]

const creatnewWord = () => {
  let randomNumnber =Math.floor(  Math.random() * words.length)
  let newTempword = words[randomNumnber];
  return newTempword ;
  
}

const scrmbleWords = (arr) =>{
    let arr2 = arr.split("")
    for (let i= arr2.length-1; i>=0;i--){
        let temp = arr2[i];
        let temp2= Math.floor(Math.random()* (i+1))
        arr2[i]= arr2[temp2];
        arr2[temp2]=temp;
    }

    return arr2;
}

btn.addEventListener("click",()=>{
    if(!play){
        play=true;
        btn.innerHTML="Guess";
        input.classList.toggle("hidden");
        newWords = creatnewWord();
        randomWords = scrmbleWords(newWords);
        randomWords= randomWords.join("")
        msg.innerHTML = `guess the word ${randomWords}`;
    }else{
        let userInput = input.value;
         if(userInput === newWords){
             play = false;
             msg.innerHTML= "correct";
             btn.innerHTML = "start again";
             input.classList.toggle("hidden");
             input.value =""
        }else{
             msg.innerHTML= `Incorrect !!! please try again ${randomWords}`;  
             input.value =""
         }
        }
    }
)