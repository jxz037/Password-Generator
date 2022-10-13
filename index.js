const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let pwdOneEl = document.getElementById("pwd-one")
let pwdTwoEl = document.getElementById("pwd-two")

let pwdDigitsEl = document.getElementById("digits")
/*
set the password dights here 
*/
function generatePwd(){
    let pwd = ""
    let pwdDigits = pwdDigitsEl.value

    for (let i = 0; i < pwdDigits; i++){
        pwd += characters[Math.floor(Math.random()*characters.length)]
    }
    return pwd
}


function setPwd(){
    pwdOneEl.textContent = generatePwd()
    pwdTwoEl.textContent = generatePwd()
}



function copyPwdOne(){
    navigator.clipboard.writeText("abbbbb")
    alert("Your password has been copied to the clipboard")
}

