document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    const resetBtn = document.getElementById("resetBtn");
    
    // Simulated list of sample ratings
    const sampleRatings = [4, 5, 3, 4, 2];

    // Function to calculate average rating
    function calculateAverageRating(ratings) {
        const total = ratings.reduce((acc, rating) => acc + rating, 0);
        return (total / ratings.length).toFixed(2);
    }

    // Validate form on submit
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const rating = form.rating.value;
        const age = parseInt(form.age.value, 10);

        if (!name || !email || !rating) {
            alert("Please fill in all required fields (Name, Email, Rating).");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (confirm("Are you sure you want to submit?")) {
            // Dynamic Feedback
            if (rating >= 4) {
                alert("Thank you");
            } else if (rating <= 2) {
                alert("We're sorry to hear that. Please let us know how we can improve.");
            }


            // Age-Based Feedback
            if (age < 18) {
                alert("Thanks for your feedback, young user!");
            } else if (age <= 50) {
                alert("Thanks for your valuable feedback!");
            } else {
                alert("Thank you for your seasoned insights!");
            }

            // Gather selected features
            const selectedFeatures = Array.from(
                document.querySelectorAll("input[name='features']:checked")
            ).map((checkbox) => checkbox.value);
            alert("Selected Features: " + (selectedFeatures.length ? selectedFeatures.join(", ") : "None"));
            form.reset();

            // Add submitted rating to sample ratings array
            sampleRatings.push(Number(rating));
            // Display average rating
            const averageRating = calculateAverageRating(sampleRatings);
            alert(`The average rating from all submissions is now ${averageRating}.`);
        }
    });

    // Reset button functionality
    resetBtn.addEventListener("click", () => {
        form.reset();
        alert("Form has been reset.");
    });
});
