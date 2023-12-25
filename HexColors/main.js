

function changeColor(){
    let hexNumbers = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

    let hex = '';

    for(var i = 0 ; i < 6 ; i++){
        let randIndex = Math.floor(Math.random() *hexNumbers.length );

        hex += hexNumbers[randIndex];
    }
    document.getElementById("hex-code").innerHTML = hex;
    document.getElementsByTagName("body")[0].style.backgroundColor = "#"+hex;
}