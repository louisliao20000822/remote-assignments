var xhr = new XMLHttpRequest();
var value;
const btn = document.querySelector("#Button");

xhr.onreadystatechange  = function(){
    if(xhr.readyState === 4){
        if(xhr.status!= 200){
            alert(xhr.statusText);
        }
        else
        document.getElementById('ajax').innerHTML = xhr.responseText;
    }
};
btn.addEventListener('click' , () => {
    value = document.querySelector("#mytext").value;
    xhr.open("GET",`http://localhost:3000/data?number=${value}`);
    document.querySelector("#mytext").value = '';
    xhr.send();
});