var inputTextElement=document.querySelector('#input');
var translateButton=document.querySelector('#translate-button');
var outputElement=document.querySelector('#output');

var serverURL = "https://cors-anywhere.herokuapp.com/https://api.funtranslations.com/translate/minion.json?text=";

function getTranslationUrl(input){
    return serverURL + input;
}

function clickHandler(){
    var inText = inputTextElement.value;
    fetch(getTranslationUrl(inText))
    .then(response=>response.json())
    .then(response=>{
        outputElement.innerHTML=response.contents.translated
    }
    ).catch(error=>console.log(error))
}

translateButton.addEventListener("click",clickHandler);