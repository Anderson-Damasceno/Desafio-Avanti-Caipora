# Desafio Bootcampi Avanti

## Descrição
Desafio proposto pelo Bootcampi Avanti onde se pede a modelagem de três entidades que serão mapeadas para
o banco de dados relacional e a criação de rotas para a manipulação desses dados.


Grupo: Caipora Code
Componentes: Anderson Damasceno
Demétrio Lins
Francisco Pedro
Laiz Cunha
Professor: Germano Gurgel do Amaral Teles / Monitora: Jheyele Raquel
Desenvolvimento Full Stack Básico

RESOLUÇÃO DO DESAFIO 02
Criando sistema de gerenciamento de informações:
Dados os requisitos de criação das entidades Jogador, Time e Campeonato, em que cada
Jogador pode pertencer a um Time, cada Time pode possui vários jogadores e participar de
vários campeonatos, e que cada Campeonato pode possuir vários times participantes, temos
que:
- Para a criação de um sistema de gerenciamento de informações e realização de CRUDs
de forma colaborativa entre os componentes da equipe, foram utilizadas as ferramentas
Node.js, PostrgreSQL, Docker e Git.
- A divisão da equipe ocorreu de forma equitativa, em que um membro da equipe ficou
responsável pela inicialização do servidor e modelagem da base de dados e os demais
membros ficaram com a criação dos CRUDs de cada entidade (models, controllers e
routes).
Trabalho e colaboração:
O repositório foi criado e posteriormente disponibilizado para a contribuição dos demais
componentes. O responsável pela modelagem e criação do servidor criou toda a estrutura no
main. A cada atualização, os demais componentes realizaram uma branch e posteriormente
realizaram um merge no main. O código, em todas as suas versões, pode ser consultado através
da URL: https://github.com/Anderson-Damasceno/Desafio-Avanti-Caipora/tree/main.
