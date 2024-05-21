export class NoCameraCapabilitiesAvailable extends Error {
  private readonly _name: string;

  constructor() {
    super('There are no camera capabilities available!');
    this._name = 'NoCameraCapabilitiesAvailable';
  }

  get name(): string {
    return this._name;
  }
}
