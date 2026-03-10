(() => {
  'use strict'

  // Bootstrap form validation
  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();


// ---------------- SEARCH DROPDOWN FUNCTIONALITY ----------------

// Example countries (you can expand this list)
const countries = [
  "India",
  "United States",
  "France",
  "Italy",
  "Spain",
  "Germany",
  "Thailand",
  "Indonesia",
  "Japan",
  "Australia"
];

const searchBox = document.getElementById("searchBox");
const suggestions = document.getElementById("suggestions");

if (searchBox) {
  searchBox.addEventListener("keyup", () => {

    let input = searchBox.value.toLowerCase();
    suggestions.innerHTML = "";

    if (input.length === 0) return;

    let filtered = countries.filter(country =>
      country.toLowerCase().includes(input)
    );

    filtered.forEach(country => {

      let div = document.createElement("div");
      div.classList.add("suggestion-item");
      div.innerText = country;

      div.addEventListener("click", () => {
        searchBox.value = country;
        suggestions.innerHTML = "";
      });

      suggestions.appendChild(div);
    });

  });
}

