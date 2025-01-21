// Function to check the user's answer
function checkAnswer() {
    // Step 1: Define the correct answer
    const correctAnswer = "4";

    // Step 2: Get the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Step 3: Validate if an option is selected
    if (selectedOption) {
        const userAnswer = selectedOption.value; // Get the value of the selected option

        // Step 4: Get the feedback element
        const feedbackElement = document.getElementById("feedback");

        // Step 5: Compare user's answer with the correct answer and provide feedback
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green"; // Optional: Change feedback color
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red"; // Optional: Change feedback color
        }
    } else {
        // If no option is selected
        const feedbackElement = document.getElementById("feedback");
        feedbackElement.textContent = "Please select an answer!";
        feedbackElement.style.color = "orange"; // Optional: Change feedback color
    }
}

// Step 6: Attach the event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
