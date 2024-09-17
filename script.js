function buttonclicked(val){
 document.getElementById("screen").value=document.getElementById("screen").value + val
}
function buttonClear(){
  document.getElementById("screen").value=""
}
function equalButton(){
  var text=document.getElementById("screen").value
  var result=eval(text)
  document.getElementById("screen").value=result
}
function buttonDel() {
      var input = document.getElementById("screen");
      input.value = input.value.substring(0, input.value.length - 1);
    }