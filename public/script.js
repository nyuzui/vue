document.addEventListener("DOMContentLoaded", function () {
    const card = document.querySelector(".card");
    const cardHeader = document.querySelector(".card-header");
    const toggleButton = document.querySelector(".toggle-button");
    const duplicateButton = document.querySelector(".duplicate-button");
    const deleteButton = document.querySelector(".delete-button");
    const detailsButton = document.querySelector(".details-button");
    const renameButton = document.querySelector(".rename-button");
    const hiddenTextbox = document.querySelector(".hidden-textbox");

    let cardCounter = 1;

    toggleButton.addEventListener("click", () => {
        card.style.backgroundColor = card.style.backgroundColor === "lightpink" ? "" : "lightpink";
        cardHeader.style.color = cardHeader.style.color === "hotpink" ? "" : "hotpink";
    });

    duplicateButton.addEventListener("click", () => {
        const clonedCard = card.cloneNode(true);
        card.parentNode.insertBefore(clonedCard, card.nextSibling);
        cardCounter++;
        cardHeader.textContent = `Card Header ${cardCounter}`;
    });

    deleteButton.addEventListener("click", () => {
        if (cardCounter > 1) {
            card.remove();
            cardCounter--;
        }
    });

    detailsButton.addEventListener("click", () => {
        hiddenTextbox.style.display = hiddenTextbox.style.display === "none" ? "block" : "none";
    });

    renameButton.addEventListener("click", () => {
        const newHeader = prompt("Enter a new header for the card:");
        if (newHeader !== null && newHeader !== "") {
            cardHeader.textContent = newHeader;
        }
    });
});