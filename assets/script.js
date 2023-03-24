// Select the loading text and background elements
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

// Initialize the load variable to 0
let load = 0;

// Define the blurring function using arrow notation
const blurring = () => {
    // Increment the load variable on each call
    load++;

    // Check if the load is greater than 99, and clear the interval if true, else do nothing
    load > 99 ? clearInterval(integer) : null;

    // Set the text content of the loading text to the current load percentage
    loadText.innerText = `${load}%`;

    // Calculate and set the opacity of the loading text
    loadText.style.opacity = ((load - 0) * (0 - 1) / (100 - 0) + 1);

    // Calculate and set the blur filter on the background image
    bg.style.filter = `blur(${((load - 0) * (0 - 30) / (100 - 0) + 30)}px)`;

    // Output the current load percentage to the console
    //console.log(`Load: ${load}`);
};

// Call the blurring function at 30ms intervals and store the ID of the interval in the integer variable
const integer = setInterval(blurring, 30);
