import CluedoModel from './CluedoModel';

export class Place extends CluedoModel { }

export class Weapon extends CluedoModel { }

export class Character extends CluedoModel {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

export { default as Section } from './Section';