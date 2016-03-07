//这三个函数其实可以写成一个函数，前提是this关键字可以用。还有待改进！！
function clicked1(id1,id2){
    document.getElementById(id1).style.backgroundColor='#ddd';
    document.getElementById('sty').style.backgroundColor='#adadad';
    document.getElementById('data').style.backgroundColor='#adadad';
    document.getElementById(id2).style.visibility='visible';
    document.getElementById('edit2').style.visibility='hidden';
    document.getElementById('edit3').style.visibility='hidden';
}
function clicked2(id1,id2){
    document.getElementById(id1).style.backgroundColor='#ddd';
    document.getElementById('append').style.backgroundColor='#adadad';
    document.getElementById('data').style.backgroundColor='#adadad';
    document.getElementById(id2).style.visibility='visible';
    document.getElementById('edit1').style.visibility='hidden';
    document.getElementById('edit3').style.visibility='hidden';
}
function clicked3(id1,id2){
    document.getElementById(id1).style.backgroundColor='#ddd';
    document.getElementById('sty').style.backgroundColor='#adadad';
    document.getElementById('append').style.backgroundColor='#adadad';
    document.getElementById(id2).style.visibility='visible';
    document.getElementById('edit2').style.visibility='hidden';
    document.getElementById('edit1').style.visibility='hidden';
}