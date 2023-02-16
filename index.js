const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveAway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const headingFour = document.querySelectorAll(".deadline-format div h4");
let futureDate = new Date(2023, 1, 25, 11, 30, 0);
let getYear = futureDate.getFullYear();
let getDate = futureDate.getDate();
let getHours = futureDate.getHours();
let getMinutes = futureDate.getMinutes();
let getMonth = futureDate.getMonth();
let getDay = futureDate.getDay();
getDay = weekdays[getDay];
getMonth = months[getMonth];
giveAway.innerHTML = ` Giveaway Ends On  ${getDay} ${getDate} ${getMonth} ${getYear} ${getHours} ${getMinutes}am`;
let getTime = futureDate.getTime();
function getRemaing() {
  let todayTime = new Date().getTime();
  let t = futureDate - todayTime;
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  // calculate all the values

  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  // set the values
  function formatValues(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }
  const values = [days, hours, minutes, seconds];
  headingFour.forEach((items, index) => {
    items.innerHTML = formatValues(values[index]);
  });
  if(t < 0){
    clearInterval(countDown)
    deadline.innerHTML = `<h3>Sorry This has expired</h3>`
  }
}
let countDown = setInterval(getRemaing, 1000);
getRemaing()