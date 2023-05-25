let hour = +prompt("Soatni kiriting!")
if( hour >= 6 && hour < 14 ){
    alert("Good morning!")
}
else if( hour >= 14 && hour < 19 ){
    alert("Good afternoon!")
}

else if( hour >= 19 && hour <= 23 ){
    alert("Good evening!")
}

else if( hour >= 0 && hour < 6 ){
    alert("Good night!")
}