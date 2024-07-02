// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const dayOfWeekElement = document.getElementById('day-of-week');
const dayElement = document.getElementById('day');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');

const days = ['Sunday', 'Monday', 'Tusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const rootStyles = document.documentElement.style;

const fixTime = number => (number < 10 ? '0' + number : number);

const getDayOfWeek = today => days[today];
const getMonth = currentMonth => months[currentMonth];

const setClocks = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const today = now.getDay();
  const date = now.getDate();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  hoursElement.textContent = fixTime(hours);
  minutesElement.textContent = fixTime(minutes);

  dayOfWeekElement.textContent = getDayOfWeek(today);
  dayElement.textContent = date;
  monthElement.textContent = getMonth(currentMonth);
  yearElement.textContent = currentYear;

  const secondsDegrees = seconds * 6;
  rootStyles.setProperty('--seconds-rotate', secondsDegrees + 'deg');

  const minutesDegrees = minutes * 6 + seconds / 10;
  rootStyles.setProperty('--minutes-rotate', minutesDegrees + 'deg');

  const hourDegrees = hours * 30 + minutes / 2;
  rootStyles.setProperty('--hours-rotate', hourDegrees + 'deg');
};

setInterval(setClocks, 1000);

setClocks();
