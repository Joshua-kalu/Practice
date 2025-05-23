// Getting references to form elements
const ageForm = document.getElementById('ageForm');
const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');
const dayError = document.getElementById('dayError');
const monthError = document.getElementById('monthError');
const yearError = document.getElementById('yearError');

// Function to validate date
function isValidDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && 
         date.getMonth() === month - 1 && 
         date.getDate() === day;
}

// Function to calculate age
function calculateAge(birthDate) {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    days += lastMonth.getDate();
  }

  return { years, months, days };
}

// Function to animate numbers
function animateValue(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

ageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Reset errors
  dayError.textContent = '';
  monthError.textContent = '';
  yearError.textContent = '';

  const day = parseInt(dayInput.value);
  const month = parseInt(monthInput.value);
  const year = parseInt(yearInput.value);
  const today = new Date();
  let hasError = false;

  // Validation
  if (!day) {
    dayError.textContent = 'This field is required';
    hasError = true;
  } else if (day < 1 || day > 31) {
    dayError.textContent = 'Must be a valid day';
    hasError = true;
  }

  if (!month) {
    monthError.textContent = 'This field is required';
    hasError = true;
  } else if (month < 1 || month > 12) {
    monthError.textContent = 'Must be a valid month';
    hasError = true;
  }

  if (!year) {
    yearError.textContent = 'This field is required';
    hasError = true;
  } else if (year > today.getFullYear()) {
    yearError.textContent = 'Must be in the past';
    hasError = true;
  }

  if (!hasError && !isValidDate(day, month, year)) {
    dayError.textContent = 'Must be a valid date';
    hasError = true;
  }

  if (!hasError) {
    const birthDate = new Date(year, month - 1, day);
    const age = calculateAge(birthDate);

    // Animate the numbers
    animateValue(document.getElementById('years'), 0, age.years, 1000);
    animateValue(document.getElementById('months'), 0, age.months, 1000);
    animateValue(document.getElementById('days'), 0, age.days, 1000);
  }
});