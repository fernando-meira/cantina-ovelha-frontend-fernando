# Cantina do Ovelha

Inicialmente o projeto tem o intuito de exibir uma lista de restaurantes anteriormente cadastrado no banco de dados, exibir os cardápios específicos de cada restaurante e seu horário de funcionamento. Esses dados devem ser consumidos de uma API Rest.

A aplicação foi desenvolvida em ReactJS.

## Starting locally

Execute o seguinte comando no terminal para clonar o projeto:

     $ git clone https://github.com/fernando-meira/cantina-ovelha-frontend-fernando.git

Para a instalação das dependências digite:

    yarn

Inicie o projeto com o comando:

    yarn start

## Built With

- [ReactJS](https://github.com/facebook/react) - Biblioteca utilizada para criar a interface da aplicação.

- [Axios](https://github.com/axios/axios) - Utilizado para requisições Ajax e por algumas vantagens em relação a biblioteca padrão do navegador(fetch). Exemplo a definição de uma baseURL para repetir em todas as requisições.

- [PropTypes](https://github.com/facebook/prop-types) - Biblioteca declarativa, utilizada para auxiliar na criação da interface.
- [React Icons](https://github.com/react-icons/react-icons) - Um dos pacotes de ícones mais populares para React.
- [React Modal](https://www.npmjs.com/package/react-modal) - Componente de modal, apresentei certa dificuldade no inicio para entender o funcionamento, mas em minha ótica é a biblioteca mais completa de modal para React.
- [React Loading Io](https://www.npmjs.com/package/react-loading-io) - Componente de loading, utilizado pela facilidade que tive para entende-lo.
- [Styled Components](https://styled-components.com/) - Toda estilização da aplicação foi feita com Styled Components devido a grande gama de opções que a biblioteca disponibiliza.
- [Styled Media Query](https://www.npmjs.com/package/styled-media-query) - Utilizado para a responsividade da aplicação, como possui breakpoints definidos facilitou o desenvolvimento, quando necessário a lib ainda me permitiu criar meus próprios breakpoints.
- [React Accessible Accordion](https://react-accessible-accordion.springload.co.nz/) - Componente accordion da onde são listados os produtos de um determinado restaurante. Biblioteca utilizada devido a sua praticidade e facilidade de manutenção.

## Workspace

- [Yarn](https://yarnpkg.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Commitizen](https://github.com/commitizen/cz-cli)

## Dificuldades

### Interface

- Em relação a interface da aplicação, tive problemas com o modal, procurei algumas libs e fiz alguns testes até que decidi utilizar o [React Modal](https://www.npmjs.com/package/react-modal) que facilitou bastante o trabalho.

### Integração

- Na integração tive dificuldade para entender o envio de informações por parâmetro na URL, então demorei algum tempo para conseguir enviar os dados de um restaurante selecionado para a página onde seriam exibidas as informações relativas a ele;

- Outro ponto que notei algumas dificuldades foram em relação ao consumo de diferentes rotas da API. Ainda estou estudando sobre para um melhor entendimento;
- Problemas para tratar os horários e datas conforme solicitado no escopo do projeto. (Ainda não consegui, e atualmente os dados são estáticos).

## Melhorias

- Padronizar os commits;
- Atualizar o sistema de horário;
- Concluir a integração com a API;
- Melhorar a lógica da quantidade de produtos no modal;
- Funcionalidade de busca dos produtos na pagina do restaurante;

## Observação

O projeto não foi concluído dentro do prazo estipulado, no entanto consegui entender e aplicar vários conceitos de frontend que antes dele não o fazia. Pude também conhecer novas tecnologias e aprender um pouco sobre o funcionamento de banco de dados e backend que até então não tinha tido contato.
