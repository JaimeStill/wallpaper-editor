import { AspectRatio } from './aspect-ratio';

export class Wallpaper {
  private _containerSize: AspectRatio;
  private _imageSize: AspectRatio;

  padding: number = 0;
  backdropFilter: string = '';
  filter: string = '';
  alignment: string = 'center center';

  constructor(
    containerWidth: number,
    containerHeight: number,
    imageWidth: number,
    imageHeight: number
  ) {
    this._containerSize = new AspectRatio(containerWidth, containerHeight, false);
    this._imageSize = new AspectRatio(imageWidth, imageHeight, true);
  }

  public get containerSize() { return this._containerSize; }
  public get imageSize() { return this._imageSize; }

  setContainerHeight = (height: number, locked: boolean = false) =>
    this.containerSize.setHeight(height, locked);

  setContainerWidth = (width: number, locked: boolean = false) =>
    this.containerSize.setWidth(width, locked);

  setImageHeight = (height: number) => this.imageSize.setHeight(height);
  setImageWidth = (width: number) => this.imageSize.setWidth(width);

  render = () => `Container: ${this.containerSize.render()}, Image: ${this.imageSize.render()}`;

  reset = () => {
    this.containerSize.reset();
    this.imageSize.reset();
  }
}
