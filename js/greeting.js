// Get the hour
var today = new Date();
var hour = today.getHours();

// Here you can change your name
var name = 'emilio';

// Here you can change your greetings
var gree1 = 'Geh schlafen :) ';
var gree2 = 'Guten Morgen ';
var gree3 = 'Guten Mittag ';
var gree4 = 'Guten Abend ';
var gree5 = 'Guten Abend ';
var gree6 = 'Guten Abend ';

// Define the hours of the greetings
if (hour >= 23 && hour < 1) {
    document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
    document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
    document.getElementById('greetings').innerText = gree3 + name;
} else  {
    document.getElementById('greetings').innerText = gree4 + name;
}
