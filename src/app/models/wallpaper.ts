import { AspectRatio } from './aspect-ratio';

export class Wallpaper {
  private _containerSize: AspectRatio;
  private _imageSize: AspectRatio;

  src: string;
  file: File;
  name: string;
  backdropFilter: string = '';
  filter: string = '';
  alignment: string = 'center center';
  padding: number = 0;

  constructor(
    src: string,
    file: File,
    imageWidth: number,
    imageHeight: number,
    name: string = '',
    containerWidth: number | undefined = undefined,
    containerHeight: number | undefined = undefined,
  ) {
    containerWidth = containerWidth ? containerWidth : imageWidth + 20;
    containerHeight = containerHeight ? containerHeight : imageHeight + 20;

    this.src = src;
    this.file = file;
    this.name = name;

    this._imageSize = new AspectRatio(imageWidth, imageHeight, true);
    this._containerSize = new AspectRatio(containerWidth, containerHeight, false);
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
