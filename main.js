let result = document.getElementById("result");

function edit(elem) {
  result.value = result.value + elem.value;
}
function calc(btn) {
  result.value = new Function("return " + result.value)();
  let v=result.value +btn.value;;
  v=v.replace(/(^=)/,'');
}
function update(_V){
  document.querySelector('input').value=_V
}
function edit(elem) {
  let v=result.value +elem.value;;
  v=v.replace(/\D(\D)/,'$1');
  v=v.replace(/^[\*\-\+\/\.\/]/,'');
  v=v.replace(/(^|[\*\+\-\/])0(?=\d)/,'$1');
  v=v.replace(/(^00)/,'0');
  v=v.replace(/(\d\.\d*)\./,'$1');
  result.value =v;
}
