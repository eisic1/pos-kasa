var x = document.getElementById('specijalna');
var y = document.getElementById('ogranicena');
var a = document.getElementById('vegatables');
var b = document.getElementById('juice');
var c = document.getElementById('meat');
var d = document.getElementById('fruits');

x.style.display = 'none';
y.style.display = 'none';
a.style.display = 'none';
b.style.display = 'none';
c.style.display = 'none';
d.style.display = 'none';

function prikaziSpecijalnu(){
    if(x.style.display === 'none'){ 
        x.style.display = 'block';
        y.style.display = 'none';
    }
    else x.style.display = 'none';
}

function prikaziOgranicenu(){
    if(y.style.display === 'none') { 
        y.style.display = 'block';
        x.style.display = 'none';
    }
    else y.style.display = 'none';
}

function prikaziPovrce(){
    if(a.style.display === 'none'){ 
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
    }
    else a.style.display = 'none';
}

function prikaziSok(){
    if(b.style.display === 'none'){ 
        b.style.display = 'block';
        a.style.display = 'none';
        c.style.display = 'none';
        d.style.display = 'none';
    }
    else b.style.display = 'none';
}

function prikaziMeso(){
    if(c.style.display === 'none'){ 
        c.style.display = 'block';
        a.style.display = 'none';
        b.style.display = 'none';
        d.style.display = 'none';
    }
    else c.style.display = 'none';
}

function prikaziVoce(){
    if(d.style.display === 'none'){ 
        d.style.display = 'block';
        a.style.display = 'none';
        c.style.display = 'none';
        b.style.display = 'none';
    }
    else d.style.display = 'none';
}
