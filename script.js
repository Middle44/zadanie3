//Premenné
var a = 1;
var b = 2;
var d = [1, 2, 3, 4];
var d0 = [1, 2, 3, 4];
var d1 = [2, 4, 6, 8];
var d2 = [4, 3, 2, 1];
var e = new Date();
var n = e.getHours();
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
    const m = d.map(x => x * 2); 
    alert(m);  
}
function wtf9(item, index, arr)
{   
    //array.forEach
    const m1 = d.forEach(arr[index] = item * 10);
    alert(m1);  
}
function wtf10() 
{
    //array.find
    var m2 = d.find(function(element) { 
        return element > 3; 
    }); 
    alert(m2);
}
function wtf11() 
{
    //array.findindex
    var m3 = d.findindex(3) 
    alert(m3);
}
//array.push
var m4 = d0.push(5) 
function wtf12() 
{
    alert(m4);
}
function wtf12a() 
{
    alert(d0);
}
function wtf13() 
{
    //array.join
    var m5 = d.join("+a, ") 
    alert(m5);
}
//console.log("Funguje mi to")