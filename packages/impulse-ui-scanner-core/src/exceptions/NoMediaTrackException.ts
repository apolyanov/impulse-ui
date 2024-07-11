export class NoMediaTrackException extends Error {
  private readonly _name: string;

  constructor() {
    super('No media track is attached!');
    this._name = 'NoMediaTrackException';
  }

  get name(): string {
    return this._name;
  }
}
