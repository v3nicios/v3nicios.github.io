document.addEventListener("DOMContentLoaded", () => {
    const navOptions = document.querySelectorAll(".nav-option");
    const houseSelect = document.getElementById("houseSelect");
    const searchInput = document.getElementById("characterSearch");
  
    // Event Listeners
    navOptions.forEach((option) => {
      option.addEventListener("click", handlePageChange);
    });
    houseSelect.addEventListener("change", fetchCharacters);
    searchInput.addEventListener("input", filterCharacters);
  
    // Definir página inicial como ativa
    document.querySelector('[data-page="houses"]').classList.add("active");
    fetchCharacters();
  });
  
  async function handlePageChange(e) {
    const page = e.target.dataset.page;
    document.querySelectorAll(".section").forEach((section) => {
      section.style.display = "none";
    });
  
    // Atualizar estado ativo dos botões
    document.querySelectorAll(".nav-option").forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
  
    if (page === "houses" || page === "characters") {
      document.getElementById("housesSection").style.display = "block";
      houseSelect.style.display = "";
      if (page === "characters") {
        houseSelect.value = "Slytherin";
  
        houseSelect.style.display = "none";
      }
      fetchCharacters();
    } else if (page === "spells") {
      document.getElementById("spellsSection").style.display = "block";
      fetchSpells();
    }
  }
  
  async function fetchCharacters() {
    const house = document.getElementById("houseSelect").value;
    const activePage = document.querySelector(".nav-option.active").dataset.page;
    const url =
      activePage === "characters"
        ? "https://hp-api.onrender.com/api/characters"
        : `https://hp-api.onrender.com/api/characters/house/${house}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      displayCharacters(data);
    } catch (error) {
      showError("Erro ao buscar dados da API");
    }
  }
  
  function displayCharacters(characters) {
    const container = document.getElementById("charactersContainer");
    container.innerHTML = "";
  
    characters.forEach((character) => {
      const characterCard = document.createElement("div");
      characterCard.className = "character-card";
  
      characterCard.innerHTML = `
          <div class="character-image">
          ${
            character.image
              ? `<img src="${character.image}" alt="${character.name}">`
              : "🖼️ Sem imagem disponível"
          }
          </div>
          <div class="character-info">
          <h3>${character.name}</h3>
          <h4>informações:</h4>
          <p><strong>Nomes alternativos:</strong> ${
            character.alternate_names?.join(", ") || "N/A"
          }</p>
          <p><strong>Ator:</strong> ${character.actor || "N/A"}</p>
          <p><strong>Casa:</strong> ${character.house || "N/A"}</p>
          <p><strong>Nascimento:</strong> ${formatDate(character.dateOfBirth)}</p>
          <p><strong>Patrono:</strong> ${character.patronus || "N/A"}</p>
          <p><strong>Bruxo:</strong> ${booleanToText(character.wizard)}</p>
          </div>
          <div class="character-details">
          <h4>Características Físicas</h4>
          <p><strong>Olhos:</strong> ${character.eyeColour || "N/A"}</p>
          <p><strong>Cabelo:</strong> ${character.hairColour || "N/A"}</p>
          <p><strong>Espécie:</strong> ${character.species || "N/A"}</p>
          <h4>Varinha</h4>
          <p><strong>Madeira:</strong> ${character.wand?.wood || "N/A"}</p>
          <p><strong>Núcleo:</strong> ${character.wand?.core || "N/A"}</p>
          <p><strong>Tamanho:</strong> ${character.wand?.length || "N/A"}</p>
          </div>
      `;
      container.appendChild(characterCard);
    });
  }
  
  async function fetchSpells() {
    try {
      const response = await fetch("https://api.potterdb.com/v1/spells");
      const data = await response.json();
      displaySpells(data.data);
    } catch (error) {
      showError("Erro ao buscar feitiços");
    }
  }
  
  function displaySpells(spells) {
    const container = document.getElementById("spellsContainer");
    container.innerHTML = "";
  
    spells.forEach((spell) => {
      const spellCard = document.createElement("div");
      spellCard.className = "spell-card";
  
      spellCard.innerHTML = `
          
          <div class="spell-content">
          ${
            spell.attributes.image
              ? `<img src="${spell.attributes.image}" style="width:170px;height:150px;border-radius:10%;">`
              : ""
          }

          <div>
              <h3>${spell.attributes.name}</h3>
              <p><strong>Categoria:</strong> ${
                spell.attributes.category || "Desconhecida"
              }</p>
              <p><strong>Efeito:</strong> ${
                spell.attributes.effect || "Sem descrição"
              }</p>
              <p><strong>Encantamento:</strong> ${
                spell.attributes.incantation || "Sem descrição"
              }</p>
          </div>
          </div>
      `;
      container.appendChild(spellCard);
    });
  }
  
  // Funções auxiliares
  function filterCharacters() {
    const searchTerm = document
      .getElementById("characterSearch")
      .value.toLowerCase();
    const cards = document.querySelectorAll(".character-card");
    let hasMatches = false;
  
    cards.forEach((card) => {
      const name = card.querySelector("h3").textContent.toLowerCase();
      const isVisible = name.includes(searchTerm);
      card.style.display = isVisible ? "flex" : "none";
      if (isVisible) hasMatches = true;
    });
  
    const noResultsMessage = document.getElementById("noResultsMessage");
    const searchTermDisplay = document.querySelector(".search-term");
  
    if (hasMatches) {
      noResultsMessage.style.display = "none";
    } else {
      searchTermDisplay.textContent = searchTerm;
      noResultsMessage.style.display = "block";
    }
  }
  
  function formatDate(dateString) {
    return dateString ? dateString.replace(/-/g, "/") : "N/A";
  }
  
  function booleanToText(value) {
    return value ? "Sim" : "Não";
  }
  
  function showError(message) {
    const container = document.getElementById("charactersContainer");
    container.innerHTML = `<div class="error">${message}</div>`;
  }
  