export class NavigatorSupportException extends Error {
  private readonly _name: string;

  constructor() {
    super('Navigator API is not supported on this device!');
    this._name = 'NavigatorSupportException';
  }

  get name(): string {
    return this._name;
  }
}
