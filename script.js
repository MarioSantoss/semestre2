
    // Script removido - o HTML carrega os personagens manualmente
    // Se quiser carregar dinamicamente, use a função abaixo:
    /*
    const container = document.querySelector('.cards-list');

    async function carregarPersonagens() {
      try {
        const resposta = await fetch('https://rickandmortyapi.com/api/character');
        const dados = await resposta.json();

        container.innerHTML = '';

        dados.results.forEach(personagem => {
          const card = document.createElement('div');
          card.classList.add('card');
          card.innerHTML = `
            <img src="${personagem.image}" alt="${personagem.name}">
            <div class="card-info">
              <h3>${personagem.name}</h3>
              <p><strong>Status:</strong> ${personagem.status}</p>
              <p><strong>Espécie:</strong> ${personagem.species}</p>
            </div>
          `;
          container.appendChild(card);
        });
      } catch (erro) {
        console.error(erro);
      }
    }
    */

    // Para carregar apenas o Rick Sanchez:
    // carregarPersonagens().then(() => {
    //   const cards = document.querySelectorAll('.card');
    //   cards.forEach(card => {
    //     if (!card.querySelector('h3').textContent.includes('Rick')) {
    //       card.remove();
    //     }
    //   });
    // });
