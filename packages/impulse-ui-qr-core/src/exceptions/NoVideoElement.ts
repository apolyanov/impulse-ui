export class NoVideoElement extends Error {
  private readonly _name: string;

  constructor() {
    super('No video element is attached.');
    this._name = 'NoVideoElement';
  }

  get name(): string {
    return this._name;
  }
}
