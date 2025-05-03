// JavaScript functionality will go here

console.log('JavaScript file loaded successfully');

// Get modal elements
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');

// Get buttons to open modals
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');

// Get close buttons
const closeBtns = document.querySelectorAll('.close');

console.log('Login Modal:', loginModal);
console.log('Signup Modal:', signupModal);
console.log('Login Button:', loginBtn);
console.log('Signup Button:', signupBtn);
console.log('Close Buttons:', closeBtns);

// Open login modal
loginBtn.addEventListener('click', () => {
  console.log('Login button clicked');
  loginModal.style.display = 'block';
});

// Open signup modal
signupBtn.addEventListener('click', () => {
  console.log('Signup button clicked');
  signupModal.style.display = 'block';
});

// Close modals
closeBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Close button clicked');
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  });
});

// Close modals when clicking outside
window.addEventListener('click', (event) => {
  if (event.target === loginModal || event.target === signupModal) {
    console.log('Outside modal clicked');
    loginModal.style.display = 'none';
    signupModal.style.display = 'none';
  }
});
