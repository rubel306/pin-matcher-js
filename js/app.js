function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        getPin()
    }
}

function generatePin(){
    const pin = getPin();
    let pinInput = document.getElementById('pinInput');
    pinInput.value = pin;
}

function verifyInput(){
    let verifyInputField =  document.getElementById('verifyInput').value;
    let verifyInputFieldNumber =  parseInt(verifyInputField);
    return verifyInputFieldNumber;
}
//keypad value 
document.getElementById('key-pad').addEventListener('click', function(e){
    let inputNumber = e.target.innerText;
    const verifyInputField =  document.getElementById('verifyInput');
    let inputValueNumber = parseInt(inputNumber);
    if(isNaN(inputValueNumber) ==  true){
        if(inputNumber == 'C'){
            verifyInputField.value = ''
        }
        
    }else{
        // let inputValueNumber = parseInt(inputValue);
        const currentVerifyNumber = verifyInputField.value + '' + inputValueNumber;
        verifyInputField.value = currentVerifyNumber ;
    }
    
})

//click on submit 
document.getElementById('check').addEventListener('click', function(){
    let  pin  = document.getElementById('pinInput').value;
    let verifyInputField =  document.getElementById('verifyInput').value;
    const success = document.getElementById('notify-success');
    const error = document.getElementById('notify-error');
    if(pin == verifyInputField && verifyInputField != ''){
        success.style.display = 'block';
        error.style.display = 'none';
    }else{
        error.style.display = 'block';
        success.style.display = 'none';
    }
})
