const date = new Date();

let year = date.getFullYear(),
  month = date.getMonth(),
  day = date.getDay(),
  hours = date.getHours(),
  minutes = date.getMinutes(),
  second = date.getSeconds();

let months = [
  "ocak",
  "Şubat",
  "mart",
  "nisan",
  "mayıs",
  "haziran",
  "temmuz",
  "agustos",
  "eylül",
  "ekim",
  "kasım",
  "aralık",
];

let days = [
  "pazar",
  "pazartesi",
  "salı",
  "çarşamba",
  "perşembe",
  "cuma",
  "cumartesi",
];

let humanReadable = `${day} ${months[month]} ${year}, ${days[day]}, ${hours}:${minutes}:${second}`;

console.log(humanReadable);
