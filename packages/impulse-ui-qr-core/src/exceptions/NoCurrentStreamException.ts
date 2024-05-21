export class NoCurrentStreamException extends Error {
  private readonly _name: string;

  constructor() {
    super('No current stream.');
    this._name = 'NoCurrentStreamException';
  }

  get name(): string {
    return this._name;
  }
}
