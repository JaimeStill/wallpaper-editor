import { AspectRatio } from './aspect-ratio';

export class Wallpaper {
  private _containerSize: AspectRatio;
  private _imageSize: AspectRatio;

  src: string;
  file: File;
  name: string;
  backdropFilter: string = '';
  filter: string = '';
  border: string = '';
  alignment: string = 'center center';

  public get containerSize() { return this._containerSize; }
  public get imageSize() { return this._imageSize; }

  constructor(
    src: string,
    file: File,
    imageWidth: number,
    imageHeight: number,
    name: string = '',
    containerWidth: number | undefined = undefined,
    containerHeight: number | undefined = undefined,
  ) {
    containerWidth = containerWidth && containerWidth > imageWidth ? containerWidth : imageWidth;
    containerHeight = containerHeight && containerHeight > imageHeight ? containerHeight : imageHeight;

    this.src = src;
    this.file = file;
    this.name = name;

    this._imageSize = new AspectRatio(imageWidth, imageHeight, true);
    this._containerSize = new AspectRatio(containerWidth, containerHeight, false);
  }

  setContainerHeight = (height: number) => this.containerSize.setHeight(height);
  setContainerWidth = (width: number) => this.containerSize.setWidth(width);
  setImageHeight = (height: number) => this.imageSize.setHeight(height);
  setImageWidth = (width: number) => this.imageSize.setWidth(width);

  render = () => `Container: ${this.containerSize.render()}, Image: ${this.imageSize.render()}`;

  reset = () => {
    this.containerSize.reset();
    this.imageSize.reset();
  }
}
