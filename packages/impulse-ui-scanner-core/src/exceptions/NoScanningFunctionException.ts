export class NoScanningFunctionException extends Error {
  private readonly _name: string;

  constructor() {
    super('No scanning function provided!');
    this._name = 'NoScanningFunctionException';
  }

  get name(): string {
    return this._name;
  }
}
