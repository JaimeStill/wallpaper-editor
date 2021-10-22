export class AspectRatio {
  private _originalWidth: number;
  private _originalHeight: number;
  private _width: number;
  private _height: number;
  private _locked: boolean;

  constructor(
    width: number,
    height: number,
    locked: boolean
  ) {
    this._originalWidth = this._width = width;
    this._originalHeight = this._height = height;
    this._locked = locked;
  }

  public get locked() { return this._locked; }
  public get originalWidth() { return this._originalWidth; }
  public get originalHeight() { return this._originalHeight; }
  public get width() { return this._width; }
  public get height() { return this._height; }

  getAspectHeight = (newWidth: number) => newWidth * (this.originalHeight / this.originalWidth);
  getAspectWidth = (newHeight: number) => newHeight * (this.originalWidth / this.originalHeight);

  setHeight = (height: number, lock: boolean = this.locked) => {
    this._height = height;
    if (lock || this.locked)
      this._width = this.getAspectWidth(height);
  }

  setWidth = (width: number, lock: boolean = this.locked) => {
    this._width = width;

    if (lock || this.locked)
      this._height = this.getAspectHeight(width);
  }

  reset = () => {
    this._width = this.originalWidth;
    this._height = this.originalHeight;
  }

  render = () => `${this.width} x ${this.height}`;
}
