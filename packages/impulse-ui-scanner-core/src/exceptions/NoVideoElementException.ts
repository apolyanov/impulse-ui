export class NoVideoElementException extends Error {
  private readonly _name: string;

  constructor() {
    super('No video element is attached!');
    this._name = 'NoVideoElementException';
  }

  get name(): string {
    return this._name;
  }
}
