let input = document.getElementById('inputbox')
let lengthh = 12

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lower =  upperCase.toLowerCase()
let lowerCase = lower
let symbol = '!@#$%^&*'
let number = '1234567890'
let all = upperCase + lowerCase + symbol + number;


function generatePass(){
    let password = ""
  
   password += upperCase[Math.floor(Math.random()* upperCase.length)]
    password +=lowerCase[Math.floor(Math.random()* lowerCase.length)]
    password += symbol[Math.floor(Math.random()* symbol.length)]
    password += number[Math.floor(Math.random()* number.length)]
    while(lengthh > password.length){
        password += all[Math.floor(Math.random()* all.length)]

    }

    input.value = password


}


function copyPass(){
    if(input.value == ""){
        alert('Please Generate Password To copy')
    }
    else{
    input.select();
    document.execCommand("copy")
    alert("copied")
    }
}