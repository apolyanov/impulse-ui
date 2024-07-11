export class NoCanvasContextException extends Error {
  private readonly _name: string;

  constructor() {
    super('No canvas context!');
    this._name = 'NoCanvasContextException';
  }

  get name(): string {
    return this._name;
  }
}
