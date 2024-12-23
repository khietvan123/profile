const projects = window.project;
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('#project-container');

    if (projects.length > 0) {
        projects.forEach((project) => {
            const newCard = createProjectCard(project);
            container.appendChild(newCard);
        });
    }

    function createProjectCard(project) {
        const card = document.createElement("div");
        card.classList.add("card");

        const imgPrj = document.createElement("img");
        imgPrj.classList.add("card-img");
        imgPrj.src = project.img || "./img/project-img.jpg";
        imgPrj.alt = project.name || "Project image";

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const cardName = document.createElement("a");
        cardName.href = project.URL;
        cardName.target="_blank";
        cardName.textContent = project.name || "Unnamed Project";
        cardName.classList.add("card-name");

        const cardDescription = document.createElement("p");
        cardDescription.textContent = project.description || "No description available.";
        cardDescription.classList.add("card-description");

        cardContent.appendChild(cardName);
        cardContent.appendChild(cardDescription);

        card.appendChild(imgPrj);
        card.appendChild(cardContent);

        return card;
    }
});
