export class NoCameraCapabilitiesAvailableException extends Error {
  private readonly _name: string;

  constructor() {
    super('There are no camera capabilities available!');
    this._name = 'NoCameraCapabilitiesAvailableException';
  }

  get name(): string {
    return this._name;
  }
}
