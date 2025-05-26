# Harry Potter API Explorer

Este projeto é uma aplicação web interativa que permite aos usuários explorar o universo de Harry Potter. Ele exibe informações sobre as Casas de Hogwarts, todos os Personagens e os Feitiços conhecidos, consumindo dados de APIs públicas. A interface é estilizada com uma temática que remete ao universo mágico, incluindo a fonte "MedievalSharp".

## Funcionalidades Principais

* **Navegação por Abas:** Permite alternar entre três seções principais:
    * **Casas de Hogwarts:** Exibe personagens pertencentes a uma casa específica (Grifinória, Corvinal, Lufa-Lufa, Sonserina), que pode ser selecionada através de um menu dropdown.
    * **Todos os Personagens:** Lista todos os personagens disponíveis na API.
    * **Todos os Feitiços Conhecidos:** Apresenta uma lista de feitiços com seus respectivos detalhes.
* **Busca de Personagens:** Um campo de pesquisa permite filtrar dinamicamente os personagens pelo nome nas seções "Casas de Hogwarts" e "Todos os Personagens".
* **Visualização Detalhada em Cartões:**
    * **Personagens:** Cada personagem é apresentado em um cartão que exibe:
        * Imagem (se disponível)
        * Nome
        * Nomes alternativos
        * Ator/Atriz
        * Casa
        * Data de Nascimento (formatada)
        * Patrono
        * Status de Bruxo (Sim/Não)
        * Características Físicas (cor dos olhos, cor do cabelo, espécie)
        * Detalhes da Varinha (madeira, núcleo, tamanho)
    * **Feitiços:** Cada feitiço é exibido em um cartão com:
        * Imagem (se disponível)
        * Nome do feitiço
        * Categoria
        * Efeito
        * Encantamento (incantation)
* **Design Responsivo:** A interface se ajusta para proporcionar uma boa experiência de visualização em diferentes tamanhos de tela, especialmente em dispositivos móveis (testado para larguras de até 425px e 375px).
* **Feedback Visual:**
    * A aba de navegação ativa é destacada visualmente.
    * Mensagens de erro são exibidas caso ocorra falha ao buscar dados das APIs.

## Tecnologias Utilizadas

* **HTML5:** (`html.html`) Estrutura semântica da página web.
* **CSS3:** (`stylesheet.css`) Estilização completa da aplicação, incluindo:
    * Uso da fonte "MedievalSharp" do Google Fonts.
    * Layout com Flexbox para organização dos cartões.
    * Barra de navegação fixa no topo.
    * Estilos para os cartões de personagens e feitiços, com um fundo temático e overlay semitransparente.
    * Media queries para responsividade.
* **JavaScript (Vanilla JS):** (`script.js`) Responsável por toda a lógica e interatividade:
    * Manipulação dinâmica do DOM.
    * Gerenciamento da navegação entre as seções.
    * Consumo de dados de APIs externas utilizando `Workspace` e `async/await`.
    * Filtragem de personagens em tempo real.
    * Renderização dinâmica dos cartões de personagens e feitiços.
    * Funções auxiliares para formatação de datas e valores booleanos.
    * Tratamento básico de erros na comunicação com a API.

## APIs Utilizadas

* **HP-API (Personagens):**
    * Todos os personagens: `https://hp-api.onrender.com/api/characters`
    * Personagens por casa: `https://hp-api.onrender.com/api/characters/house/{nome_da_casa}`
* **PotterDB API (Feitiços):** `https://api.potterdb.com/v1/spells`

## Como Usar

1.  Clone este repositório ou faça o download dos arquivos: `html.html`, `stylesheet.css`, e `script.js`.
2.  Certifique-se de que o arquivo `stylesheet.css` referencia corretamente a imagem de fundo (ex: `Midia/logo.webp`) ou ajuste o caminho no CSS se necessário.
3.  Abra o arquivo `html.html` em seu navegador de internet preferido.
4.  Navegue pelas abas para explorar as diferentes seções:
    * **Casas de Hogwarts:** Selecione uma casa no menu para listar seus personagens. Utilize o campo de busca para filtrar por nome.
    * **Todos os personagens:** Visualize a lista completa de personagens. Utilize o campo de busca para filtrar.
    * **Todos os feitiços conhecidos:** Explore a lista de feitiços e seus detalhes.

## Estrutura dos Arquivos

* `html.html`: Arquivo principal com a estrutura HTML da página.
* `stylesheet.css`: Arquivo contendo todas as regras de estilo CSS.
* `script.js`: Arquivo com o código JavaScript para interatividade e consumo de API.
* `Midia/logo.webp` (presumido): Imagem de fundo utilizada no CSS (não fornecida, mas referenciada).

## Capturas de Tela



## Possíveis Melhorias Futuras

* Adicionar indicadores de carregamento (loading spinners) durante as requisições às APIs.
* Implementar paginação para listas extensas, melhorando a performance e usabilidade.
* Criar uma seção para "Criaturas Mágicas" ou "Lugares Notáveis".
* Permitir ordenação dos resultados (ex: personagens por nome alfabético, feitiços por categoria).
* Refinar o tratamento de erros e o feedback ao usuário.
* Adicionar a funcionalidade de ver detalhes mais aprofundados ao clicar em um personagem ou feitiço (ex: modal ou nova página).
* Escrever testes unitários para as funções JavaScript.

---

