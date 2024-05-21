export class NoMediaTrack extends Error {
  private readonly _name: string;

  constructor() {
    super('No media track is attached!');
    this._name = 'NoMediaTrack';
  }

  get name(): string {
    return this._name;
  }
}
