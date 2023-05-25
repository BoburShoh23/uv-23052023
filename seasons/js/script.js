let monthNum = +prompt("Oy raqamini kiriting!")
if(monthNum === 12 || monthNum === 1 || monthNum === 2){
    alert("Ushbu oy qish fasliga tegishli!")
}
else if(monthNum >= 3 && monthNum < 6 ){
    alert("Ushbu oy bahor fasliga tegishli!")
}
else if(monthNum >= 6 && monthNum < 8 ){
    alert("Ushbu oy yoz fasliga tegishli!")
}
else if(monthNum >= 8 && monthNum < 12 ){
    alert("Ushbu oy kuz fasliga tegishli!")
}
else{
    alert("Siz raqam kiritmadingiz yoki noto'g'ri raqam kiritdingiz!")
}