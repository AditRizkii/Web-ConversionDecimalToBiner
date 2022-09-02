var d = document.querySelector('#d');//variable untuk bilangan desimal
var b = document.querySelector('#b');// variabel untuk bilangan biner

b.onclick = function() {
    var v1 = document.querySelector('#bi').value;
    document.querySelector('.b').innerHTML = parseInt(v1, 2).toString(10) //desimal basis 10
}

d.onclick = function() {
    var v1 = document.querySelector('#di').value;
    document.querySelector('.d').innerHTML = (v1>>>0).toString(2) //biner basis 2
}