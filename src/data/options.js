export class Option {
  constructor(icon, color) {
    this.icon = icon;
    this.color = color;
  }
}

export default [
  new Option('none'),
  new Option('fa-check', '#73F459'),
  new Option('fa-question', '#000000'),
  new Option('fa-times', '#DF2C2C'),
];
