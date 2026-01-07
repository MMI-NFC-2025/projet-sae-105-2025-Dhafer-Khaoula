const toggle = document.querySelector(".menu-btn"); 
const nav = document.querySelector(".menu");
const logo = document.querySelector(".header__logo");
const page = document.body;

// Vérifie si les éléments existent avant d'ajouter l'événement
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.ariaExpanded === "true";
    const isClosed = !isOpen;

    // Mise à jour des attributs ARIA pour accessibilité
    toggle.ariaExpanded = isClosed;
    nav.hidden = isOpen;
    logo.classList.toggle("header__logo--extend", isClosed); 
    page.classList.toggle("u-noscroll", isClosed);
  });
}

// Filtres du glossaire
const filterButtons = document.querySelectorAll(".glossary__filter-btn");
const categories = document.querySelectorAll(".glossary__category");

if (filterButtons.length > 0 && categories.length > 0) {
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const selectedCategory = button.dataset.category;

      // Retirer la classe active de tous les boutons
      filterButtons.forEach(btn => btn.classList.remove("glossary__filter-btn--active"));
      
      // Ajouter la classe active au bouton cliqué
      button.classList.add("glossary__filter-btn--active");

      // Afficher/masquer les catégories
      categories.forEach(category => {
        if (selectedCategory === "all") {
          category.style.display = "block";
        } else if (category.dataset.category === selectedCategory) {
          category.style.display = "block";
        } else {
          category.style.display = "none";
        }
      });
    });
  });
}
