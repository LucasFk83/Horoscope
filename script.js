var signs = [
    "Aquarius",
    "Capricorn",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Pisces",
    "Congratulations!!"
];
var messages = [
    "Sorry",
    "You are great",
    "You are beatutifull",
    "You are sexy..",
    "You are a disgrace",
    "You are  a kutie",
    "The worlds gonna know your name",
    "You are ok",
    "You are and always be average.. Sorry! I dont make these things up. Its just the way it is.",
    "You are special.",
    "You are an athlete",
    "UH.",
    "You were born on a day that isnt even a real day!.. Wow.You are one of a kind. Amazing!What a talent....... Pss. please enter a real date..",
    "You are one in a million. Your talent is one in a century. Genius is the only word that describes you, but even that doesnt do you justice."
];
var images;
images = [
    "images/aquarius.jpg",
    "images/capricorn.jpg",
    "images/aries.jpg",
    "images/taurus.jpg",
    "images/gemini.jpg",
    "imgaes/cancer.jpg",
    "images/leo.jpg",
    "images/virgo.jpg",
    "images/libra.jpg",
    "images/scorpio.jpg",
    "images/sagittarius.jpg",
    "images/pisces.jpg",
    "images/neymar.jpg",
    "images/messi.jpg"

];


function go(){

    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    var name = document.getElementById("username").value;
    console.log(month);
    console.log(day);
    console.log(name);

    var signNum = determineSign(day,month);
    var birthday =determineBirthday(day,month);
    var userSign = signs[signNum];
    var userMessages = messages[signNum];
    var userImages = images[signNum];


    document.getElementById("sign").innerHTML = userSign;
    document.getElementById("image").src = userImages;
    document.getElementById("message").innerHTML= birthday + name + ", " + userMessages;


}
function determineSign(day,month){
    if ((month==1 && day>=29) || (month==3 && day>=30) || (month==5 && day>=30) || (month==8 && day>=30) || (month==10 && day>=30)){
        return 12;
    }
    if (month==9&& day==31){
        return 13;
    }
    if((month==0 && day >= 20) ||(month==1 && day <= 18)){
        return 0;
    }
    if((month==11 && day >=22) || (month==0 && day<=19)){
        return 1;
    }
    if((month==2 && day >=21) || (month==3 && day<=19)){
        return 2;
    }
    if((month==3 && day>=20) || (month==4 && day<=20)){
        return 3;
    }
    if((month==4 && day>=21)|| (month==5 && day<=20)){
        return 4;
    }
    if((month==5 && day >=21)|| (month==6 && day<=22)){
        return 5;
    }
    if((month==6&& day >= 23)|| (month ==7 && day <=22)){
        return 6;
    }
    if((month==7&& day >=23)|| (month==8 && day <=22)){
        return 7;
    }
    if((month==8&& day >=23)|| (month==9 && day <=22)){
        return 8;
    }
    if((month==9&& day>=23) || (month==10 && day <=21)){
        return 9;
    }
    if((month==10&& day>=22)|| (month==11 && day <=21)){
        return 10;
    }
    if((month==1&&day>=19) || (month==2 && day<=20)){
        return 11;
    }

}
function determineBirthday(userDay, userMonth){
    var birthday = "";
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();
    var currentDay = currentDate.getDate();
    console.log(currentMonth);
    console.log(currentDay);
    if(userDay == currentDay && userMonth == currentMonth){
        birthday = "Happy Day of Birth! ";
    }
    return birthday;
}
