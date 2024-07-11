export class NotFoundException extends Error {
  private readonly _name: string;

  constructor() {
    super("Couldn't find an QR code!");
    this._name = 'NotFoundException';
  }

  get name(): string {
    return this._name;
  }
}
