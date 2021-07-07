var total_days_in_year=365.25;
var total_days_in_week=7;
var total_life_time=68.97;
var averageweek;
function avgweekfn(x,y,z){
    averageweek=(total_days_in_year*total_life_time)/total_days_in_week;
    //document.getElementById("demo").innerHTML = averageweek;
    //averageweek=x*y/z;
    return averageweek;
    
}
document.write("<h3>"+avgweekfn()+"</h3><br>");

s=String("Hello Dear!!😀😊--")
s1=String("GOOD MORNING⏰🚶‍♂️");
s2=String("GOOF AFTERNOON😊");
s3=String("GOOD EVENING😃");
s4=String("GOOD NIGHT🥱😴😴😴");
function time(){
    d=new Date().getHours();
    document.write(s+d+" "+"Clock time(In hrs format)<br>");
    if(d>=5&&d<12){
        document.write(s+s1+"<br>");
    }
    else if(d>=12&&d<18){
        document.write(s+s2+"<br>");
    }
    else if(d>=18&&d<22){
        document.write(s+s3+"<br>");
    }
    else if((d>=22)||d<5) {
        document.write(s+s4+"<br>");
    }
    
    else{document.write("error in time");}
}
//document.write(time());

