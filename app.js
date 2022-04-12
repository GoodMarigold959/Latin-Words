let latinbutt;
let latin;
let enlgishbutt;
let enlgish;

window.onload = init;

function init()
{
    console.log("starting");
    latinbutt = document.getElementById("latinbutt");
    latin = document.getElementById("latin");

    latinbutt.addEventListener("click", searchLatin);

    englishbutt = document.getElementById("englishbutt");
    english = document.getElementById("english");

    englishbutt.addEventListener("click", searchEnglish);
}

function searchLatin()
{
    console.log("clicked");
    window.location.href = "http://archives.nd.edu/cgi-bin/wordz.pl?keyword=" + latin.value;
}

function searchEnglish()
{
    console.log("clicked");
    window.location.href = "http://archives.nd.edu/cgi-bin/wordz.pl?english=" + english.value;
}