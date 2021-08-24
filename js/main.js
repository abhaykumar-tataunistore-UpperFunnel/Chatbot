let mic = document.getElementById("mic");
let chatareamain = document.querySelector('.chatarea-main');
let chatareaouter = document.querySelector('.chatarea-outer');

let intro = ["Hello, I am Chatbot", "I was build by Abhay and Abhishek"];
let help = ["How may i assist you?","How can i help you?","What i can do for you?"];
let greetings = ["i am good you little piece of love", "i am fine, what about you", "don't want to talk", "i am good"];
let hobbies = ["i love to talk with humans", "i like to make friends like you", "i like cooking"];
let pizzas = ["which type of pizza do you like?", "i can make a pizza for you", "i would love to make a pizza for you", "would you like cheese pizza?"];
let thank = ["Most welcome","Not an issue","Its my pleasure","Mention not"];
let closing = ['Ok bye-bye','As you wish, bye take-care','Bye-bye, see you soon..']
let pizzamaker = ["Sorry! I don't know how to cook pizza."]
let covidTracker = ["Total Coronavirus Cases: 212,763,176","  Total Deaths:4,447,919", " Total Recovered Cases:190,394,086"]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

function showusermsg(usermsg){
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function showchatbotmsg(chatbotmsg){
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}

function chatbotvoice(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "This is a test message";
    if(message.includes('Hello' || 'hello' || 'Hello.' || 'hello.')){
        let finalresult = intro[Math.floor(Math.random() * intro.length)];
         speech.text = intro;
     }
    if(message.includes('Who are you?')){
       let finalresult = intro[Math.floor(Math.random() * intro.length)];
        speech.text = intro;
    }
    if(message.includes('Fine.')){
        let finalresult = help[Math.floor(Math.random() * help.length)];
        speech.text = help;
    }
    if(message.includes('How are you?' || 'how are you' || 'how are you doing today' )){
       let finalresult = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalresult;
    }
    if(message.includes('Tell me something about your hobbies.' || 'tell me something about your hobbies')){
       let finalresult = hobbies[Math.floor(Math.random() * hobbies.length)];
        speech.text = hobbies;
    }
    if(message.includes('Pizza.')){
       let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
        speech.text = pizzas;
    }
    if(message.includes('Do you know how to cook pizza?')){
        let finalresult = pizzas[Math.floor(Math.random() * pizzas.length)];
         speech.text = pizzamaker;
     }
    if(message.includes('Thank you.' || 'thank you so much')){
        let finalresult = thank[Math.floor(Math.random() * thank.length)];
        speech.text = thank;
    }
    if(message.includes('talk to you' || 'talk')){
        let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = finalresult;
    }
    if(message.includes('COVID-19 status.')){
       let finalresult = closing[Math.floor(Math.random() * closing.length)];
        speech.text = covidTracker;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

recognition.onresult=function(e){
    let resultIndex = e.resultIndex;
    let transcript = e.results[resultIndex][0].transcript;
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
    console.log(transcript);
}
recognition.onend=function(){
    mic.style.background="#ff3b3b";
}
mic.addEventListener("click", function(){
    mic.style.background='#39c81b';
    recognition.start();
    console.log("Activated");
})
