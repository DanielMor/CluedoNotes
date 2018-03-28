import { Character, Weapon, Place, Section } from './models';

const data = {
  characters: [
    new Character('Green', '#46BB00'),
    new Character('Mustard', '#D8C600'),
    new Character('Orchid', '#F76BF5'),
    new Character('Peacock', '#2582F4'),
    new Character('Plum', '#8C3FDB'),
    new Character('Scarlett', '#DA1313'),
  ],
  weapons: [
    new Weapon('Candelabro'),
    new Weapon('Faca'),
    new Weapon('Tubo de Ferro'),
    new Weapon('Pistola'),
    new Weapon('Corda'),
    new Weapon('Ferramenta'),
  ],
  places: [
    new Place('Sala de Festas'),
    new Place('Sala de Jogos'),
    new Place('Sala de Estar'),
    new Place('Sala de Jantar'),
    new Place('Hall'),
    new Place('Cozinha'),
    new Place('Biblioteca'),
    new Place('Lounge'),
    new Place('Escritório'),
  ]
}

export const sections = [
  new Section('Quem?', data.characters),
  new Section('Com o Quê?', data.weapons),
  new Section('Onde?', data.places),
]