// script.js
function submitRecommendation() {
    const input = document.getElementById("recommendationInput");
    const submittedContainer = document.getElementById("submittedRecommendations");

    if (input.value.trim() !== "") {
        const recommendation = document.createElement("div");//DOM
        recommendation.className = "recommendation-card";
        recommendation.innerHTML = `<p>"${input.value}"</p><h4>- Anonymous</h4>`;//sets inner HTML of recommendation

        submittedContainer.appendChild(recommendation);
        input.value = "";  // Clear the input field
        
        // Show the popup
        showPopup();
    } else {
        alert("Please write a recommendation before submitting.");
    }
}

function showPopup() {
    const popup = document.getElementById("popupMessage");
    popup.style.display = "block";
    setTimeout(() => {
        popup.style.display = "none";
    }, 6000); // Popup visible for 6 seconds
}
