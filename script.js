// Get all FAQ details elements
const faqItems = document.querySelectorAll("details");

// Close every FAQ item except the one that was just opened
function closeOtherAnswers(openItem) {
    for (const item of faqItems) {
        if (item !== openItem) {
            item.open = false;
        }
    }
}

// Listen for the toggle event on every FAQ item
for (const item of faqItems) {
    item.addEventListener("toggle", function () {
        if (this.open) {
            closeOtherAnswers(this);
        }
    });
}