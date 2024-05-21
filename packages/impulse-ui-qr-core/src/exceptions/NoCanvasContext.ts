export class NoCanvasContext extends Error {
  private readonly _name: string;

  constructor() {
    super('No canvas context.');
    this._name = 'NoCanvasContext';
  }

  get name(): string {
    return this._name;
  }
}
