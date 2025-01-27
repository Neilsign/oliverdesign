// Get references to the sidebar and toggle button
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggle-btn');

// Add event listener to toggle the sidebar
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});


document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting
  
    // Define correct answers for each question
    const correctAnswers = {
      q1: "college dropout",
    };
  
    // Get selected answers
    const q1Answer = document.querySelector('input[name="q1"]:checked')?.value;
  
    // Check if all answers are correct
    const isCorrect = (
      q1Answer === correctAnswers.q1 
    );
  
    // Apply background color based on correctness
    if (isCorrect) {
      document.body.classList.add("correct");
      document.body.classList.remove("incorrect");
    } else {
      document.body.classList.add("incorrect");
      document.body.classList.remove("correct");
    }
  });
  
  // Reset the form and screen color
  document.getElementById("resetButton").addEventListener("click", function() {
    // Reset all radio buttons
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);
  
    // Remove background color class (restore original background)
    document.body.classList.remove("correct", "incorrect");
  
    // Reset the form fields
    document.getElementById("quizForm").reset();
  });
