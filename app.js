function reverseString(str){
    var splittedForm = str.split("");
    var reversedForm = splittedForm.reverse();
    var joinedForm = reversedForm.join("");
    return(joinedForm);
}
function checkPalindrome(str){
    var getReversedForm = reverseString(str);
    if(str === getReversedForm){
        return true;
    }
    return false;
}
function convertDateToString(date){
    var dateStr = {day: '', month: '', year: ''};
    if(date.day < 10){
        dateStr.day = '0' + date.day;
    }
    else{
        dateStr.day = date.day.toString();
    }
    if(date.month < 10){
        dateStr.month = '0' + date.month;
    }
    else{
        dateStr.month = date.month.toString();
    }
    dateStr.year = date.year.toString();
    return (dateStr);
}
function dateInAllFormats(date){
    var strDate = convertDateToString(date);

    var DDMMYYYY = strDate.day + strDate.month + strDate.year;
    var MMDDYYYY = strDate.month + strDate.day + strDate.year;
    var YYYYMMDD = strDate.year + strDate.month + strDate.day;
    var DDMMYY = strDate.day + strDate.month + strDate.year.slice(2);
    var MMDDYY = strDate.month + strDate.day + strDate.year.slice(2);
    var YYMMDD = strDate.year.slice(2) + strDate.month + strDate.day;
    var MDDYYYY = strDate.month.slice(1) + strDate.day + strDate.year;

    return [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD, MDDYYYY];
}
function checkPalindromeForAllDateFmt(date){
    var getdateinallFormat = dateInAllFormats(date);
    var newArr = [];

    for(var i = 0; i < getdateinallFormat.length; i++){
        if(checkPalindrome(getdateinallFormat[i])){
            newArr.push(true);
        }
        else{
            newArr.push(false);
        }
    }
    return newArr;
}
function checkFoLeapYear(year){
    if(year % 400 === 0){
        return true;
    }
    if(year % 100 === 0){
        return false;
    }
    if(year % 4 === 0){
        return true;
    }
    return false;
}
function getNextDate(date){
    var day = date.day + 1;
    var month = date.month;
    var year = date.year;

    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];

    if(month === 2){
        if(checkFoLeapYear(year)){
            if(day > 29){
                day = 1;
                month++;
            }
        }
        else{
            if(day > 28){
                day = 1;
                month++;
            }
        }
    }
    else{
        if(day > daysInMonth[month - 1]){
            day = 1;
            month++;
        }
        if(month > 12){
            month = 1;
            year++;
        }
    }
    return {day: day, month: month, year: year};
}
function getNextPalindromeDate(date){
    var nextDate = getNextDate(date);
    var cnt = 0;

    while(1){
        cnt++;
        var checkpalindrome = dateInAllFormats(nextDate);
        for(var i = 0; i < checkpalindrome.length; i++){
            if(checkPalindrome(checkpalindrome[i])){
                return [cnt, nextDate];
            }
        }
        nextDate = getNextDate(nextDate);
    }
}
