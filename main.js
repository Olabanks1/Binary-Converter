const input = document.getElementById("input");
const button  = document.getElementById("button");
const result = document.getElementById("result");
function validInput(input){
    const regex = /[e.]/;
    if (!input || regex.test(input) || input == "0"){
        alert("Please Input A Valid Whole Number");
        result.classList.add("hidden");
        input = "";
    }else{
        result.classList.remove("hidden");
        binaryConverter(Number(input));
        result.innerText = binaryConverter(Number(input));
}}
function binaryConverter(input){
    if(input == 0 || input == 1){
        return String(input)
    }else{
        return binaryConverter(Math.floor(input / 2)) + (input % 2)
    }
}
button.addEventListener("click" , () => {
    validInput(input.value)
});
input.addEventListener("keydown" , (e) => {
 if(e.key == "Enter"){
    validInput(input.value)
 }
})