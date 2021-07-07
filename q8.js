var year = 2020
var counter = 20;

function leapyear(years, num) {
    years = parseInt(years);    
    var origNum = num;
    years++;
    var leapYears = '';
    while (num > 0) {
        if (years % 4 === 0 && (years % 100 !== 0 || ( years % 100 === 0 && years % 400 === 0))) {
            if (num === 1) {
                leapYears += years + ".";
            }
            else {
                leapYears += years + ", ";
            }
            years++;
            num--;
        }
        else {
            years++;
        }
    }
    return ("<h3>The next " + origNum + " leap years are " + leapYears+"</h3>");
}
document.write(leapyear(year, counter));
