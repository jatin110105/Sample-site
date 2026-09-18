const btn = document.getElementById('hello-btn');
const msg = document.getElementById('msg');

const greetings = [
  "Hey there! 👋",
  "Thanks for stopping by!",
  "Let's build something cool.",
  "Currently learning DevOps & full-stack dev."
];

let i = 0;

btn.addEventListener('click', () => {
  msg.textContent = greetings[i % greetings.length];
  msg.classList.remove('show');
  void msg.offsetWidth; // restart animation
  msg.classList.add('show');
  i++;
});