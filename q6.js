let i=60;j=65;
document.write("<h1>Range of "+i+" to "+j+" for celcius to fareheit</h1>")
for(i;i<=j;i++){
function CtoF(c){
    return (c*1.8)+32;
}
document.write("<h2>"+i+"∘ Celcius to Ferenheit🥵🥵="+CtoF(i)+" F</h2>");
}
let a=45;b=50;
document.write("<h1>Range of "+a+" to "+b+" for fareheit to celcius</h1>")
for(a;a<=b;a++){
function FtoC(f){
    return (f-32)/1.8;
}
document.write("<h2>"+a+" Ferienhit to ∘Celcius😠😠="+FtoC(a)+"∘C</h2>");
}
