//Premenné
var a = 1;
var b = 2;
var d = new Date();
var d = [1, 2, 3, 4];
var n = d.getHours();
//Funkcie 
function wtf1()
{ 
    alert(a);  
}
function wtf2()
{   
    //Operátory
    var c=a+b; 
    alert(c);  
}
function wtf3()
{    
    alert("Som funkcia :D");  
}
function wtf4()
{
    //Objekty
    var autor = {meno:"Erik", priezvisko:"Blaško", predmet:"WTvGIS", rok:2019};    
    alert(autor.meno, autor.priezvisko, autor.predmet, autor.rok);  
}
function wtf5()
{   
    //Arraye
    var autor1 = ["Erik", "Blaško", "WTvGIS", 2019]; 
    alert(autor1);  
}
function wtf6()
{
    //if, else
    if (n < 12) 
    {
        alert("Je pred obedom."); 
    }       
    else 
    {
        alert("Je po obede."); 
    } 
}
function wtf7()
{
    //Cykly
    var i = 0;
    var meno = "Erik";
    var text = "";
    var len = meno.length;
    for (; i < len; i++) 
    { 
      text = meno[i];
      alert(text);
    }   
}
function wtf8()
{   
    //array.map
    const mapa = d.map(x => x * 2); 
    alert(mapa);  
}
function wtf9(item, index, arr)
{   
    //array.forEach
    const mapa1 = d.forEach(arr[index] = item * 10);
    alert(mapa1);  
}

//console.log("Funguje mi to")