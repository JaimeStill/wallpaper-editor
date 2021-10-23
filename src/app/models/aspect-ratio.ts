export class AspectRatio {
  private _originalWidth: number;
  private _originalHeight: number;
  private _width: number;
  private _height: number;

  locked: boolean;

  constructor(
    width: number,
    height: number,
    locked: boolean = false
  ) {
    this._originalWidth = this._width = width;
    this._originalHeight = this._height = height;
    this.locked = locked;
  }

  public get originalWidth() { return this._originalWidth; }
  public get originalHeight() { return this._originalHeight; }
  public get width() { return this._width; }
  public get height() { return this._height; }

  getAspectHeight = (newWidth: number) => Math.floor(newWidth * (this.height / this.width));
  getAspectWidth = (newHeight: number) => Math.floor(newHeight * (this.height / this.width));

  setHeight = (height: number, lock: boolean = this.locked) => {
    const width = this.getAspectWidth(height);
    this._height = height;

    if (lock)
      this._width = width > 0 ? width : 0;
  }

  setWidth = (width: number, lock: boolean = this.locked) => {
    const height = this.getAspectHeight(width);
    this._width = width;

    if (lock)
      this._height = height > 0 ? height : 0;
  }

  reset = () => {
    this._width = this.originalWidth;
    this._height = this.originalHeight;
  }

  render = () => `${this.width} x ${this.height}`;
}
