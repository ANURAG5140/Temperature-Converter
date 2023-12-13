let output=null;
document.querySelector('#output-display').value=output;
function convertIntoFahrenheit(){
    let input=document.querySelector('#input-display').value;
    let ans= (input*(9/5)+32);
    console.log(ans);
    
    document.querySelector('#output-display').value=ans;
}

function resetValue(){
    document.querySelector('#output-display').value=null;
    document.querySelector('#input-display').value=null;
}
