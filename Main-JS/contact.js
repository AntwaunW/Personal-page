//alert("Contact me!")

//creates funtion for character count

const textArea = document.getElementById('message');
const charCounter = document.getElementById('char-counter');
const maxLength = textArea.getAttribute('maxlength'); // Get the max length (300)

textArea.addEventListener('input', () => {
  const currentLength = textArea.value.length; // Current character count
  charCounter.textContent = `${currentLength} / ${maxLength}`; // Update the count display

  //code for when the character count is within 10

  if (currentLength >= maxLength - 10) {
    charCounter.style.color = 'red'; // Warn the user
  } else {
    charCounter.style.color = '#555'; // Default color
  }
})




//Code that accepts user input and save it

// Select the form and the message container
const form = document.getElementById('contact-info');
const message = document.getElementById('message');

// Add an event listener to handle form submission
form.addEventListener('submit', function(event) {

    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the input values
    const name = document.getElementById('entry-form').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validate the inputs
    if (name === '' || email === '') {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = 'Please enter a valid email address.';
        message.style.color = 'red';
        return;
    }

    // Display a success message
    message.textContent = `Thank you, ${name}! Your email (${email}) has been received.`;
    message.style.color = 'green';

    // Optionally, clear the form
    form.reset();
});



// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// allows button to recieve data and restarts the process when complete
const submitButton = document.getElementById("submit-btn");

submitButton.addEventListener("click", function () {

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Save data (for now, just log it)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // Display a success message
    alert(`Thank you, ${name}! Your data has been saved.`);

    form.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}




