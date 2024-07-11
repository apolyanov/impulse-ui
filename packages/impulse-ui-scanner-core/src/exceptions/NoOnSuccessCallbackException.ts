export class NoOnSuccessCallbackException extends Error {
  private readonly _name: string;

  constructor() {
    super('There is no onSuccessCallback!');
    this._name = 'NoOnSuccessCallbackException';
  }

  get name(): string {
    return this._name;
  }
}
