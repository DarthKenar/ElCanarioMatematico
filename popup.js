let value1 = document.getElementById("value1")
let value2 = document.getElementById("value2")
let result1 = document.getElementById("result1")
let result2 = document.getElementById("result2")
let clear = document.getElementById("clear")
function calcular(){
    if(value1.value == "" || value2.value == "" || result1.value == ""){
        result2.value = ""
        return
    }else{
        let v1 = parseFloat(value1.value)
        let v2 = parseFloat(value2.value)
        let r1 = parseFloat(result1.value)
        result2.value = (v2 * r1)/v1
    }
}
value1.addEventListener("input", function(){
    calcular()
})
value2.addEventListener("input", function(){
    calcular()
})
result1.addEventListener("input", function(){
    calcular()
})
clear.addEventListener("click", function(){
    value1.value = ""
    value2.value = ""
    result1.value = ""
    result2.value = ""
})