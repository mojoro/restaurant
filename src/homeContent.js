export function homeContent() {
  const content = document.createElement('div');
  content.classList.add('content');

  const review = reviewComponent();
  const hours = hoursComponent();
  const location = locationComponent();

  content.appendChild(review);
  content.appendChild(hours);
  content.appendChild(location);

  return content;
}
function reviewComponent() {
  const review = document.createElement('div');
  review.classList.add('card', 'review', 'home');

  const header = document.createElement('h2');
  header.textContent = 'Review';

  const quote = document.createElement('p');
  quote.textContent = '"Chloe is the nicest restaurant owner I have ever met, and her husband is so handsome! Awesome matcha, delicious noodles - this is my favorite cafe in Berlin!"';

  const credit = document.createElement('h4');
  credit.textContent = 'Matthias Rossini';

  review.appendChild(header);
  review.appendChild(quote);
  review.appendChild(credit);

  return review;
}
function hoursComponent() {
  const hours = document.createElement('div');
  hours.classList.add('card', 'hours', 'home');

  const header = document.createElement('h2');
  header.textContent = 'Hours';

  const monday = document.createElement('p');
  monday.textContent = 'Monday: 10am - 8pm';

  const tuesday = document.createElement('p');
  tuesday.textContent = 'Tuesday: 10am - 8pm';

  const wednesday = document.createElement('p');
  wednesday.textContent = 'Wednesday: 10am - 8pm';

  const thursday = document.createElement('p');
  thursday.textContent = 'Thursday: 10am - 8pm';

  const friday = document.createElement('p');
  friday.textContent = 'Friday: 10am - 8pm';

  const saturday = document.createElement('p');
  saturday.textContent = 'Saturday: 10am - 8pm';

  const sunday = document.createElement('p');
  sunday.textContent = 'Sunday: 10am - 8pm';

  hours.appendChild(header);
  hours.appendChild(monday);
  hours.appendChild(tuesday);
  hours.appendChild(wednesday);
  hours.appendChild(thursday);
  hours.appendChild(friday);
  hours.appendChild(saturday);
  hours.appendChild(sunday);

  return hours;
}
function locationComponent() {
  const location = document.createElement('div');
  location.classList.add('card', 'location', 'home');

  const header = document.createElement('h2');
  header.textContent = 'Location';

  const address = document.createElement('p');
  address.textContent = 'Hauptstrasse 50, Berlin, Germany';

  location.appendChild(header);
  location.appendChild(address);

  return location;
}
