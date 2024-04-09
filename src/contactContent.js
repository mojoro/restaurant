export function contactContent() {
  const content = document.createElement('div');
  content.classList.add('content');

  const divider = document.createElement('div');
  divider.classList.add('card', 'divider');

  const dividerHeader = document.createElement('h1');
  dividerHeader.textContent = 'Contact Us'
  divider.appendChild(dividerHeader);

  const chloe = contactCard('Chloe', 'Visionary', '123-456-7890', 'badbitch@chloecafe.com');
  const john = contactCard('Johnny', 'Manager', '123-456-7891', 'facilitator@chloecafe.com');

  content.appendChild(divider);
  content.appendChild(chloe);
  content.appendChild(john);

  return content;
}
function contactCard(nameText, roleText, numText, emailText) {
  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card', 'contact');

  const name = document.createElement('h3');
  name.textContent = nameText;

  const role = document.createElement('p');
  role.textContent = roleText;

  const number = document.createElement('p');
  number.textContent = numText;

  const email = document.createElement('p');
  email.textContent = emailText;

  infoDiv.appendChild(name);
  infoDiv.appendChild(role);
  infoDiv.appendChild(number);
  infoDiv.appendChild(email);

  return infoDiv;
}
