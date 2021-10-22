import { AspectRatio } from './aspect-ratio';

export class Wallpaper {
  private _containerSize: AspectRatio;
  private _imageSize: AspectRatio;
  private _padding: number = 0;

  src: string;
  file: File;
  name: string;
  backdropFilter: string = '';
  filter: string = '';
  alignment: string = 'center center';

  public get containerSize() { return this._containerSize; }
  public get imageSize() { return this._imageSize; }
  public get padding() { return this._padding; }

  constructor(
    src: string,
    file: File,
    imageWidth: number,
    imageHeight: number,
    name: string = '',
    containerWidth: number | undefined = undefined,
    containerHeight: number | undefined = undefined,
  ) {
    containerWidth = containerWidth > imageWidth ? containerWidth : imageWidth;
    containerHeight = containerHeight > imageHeight ? containerHeight : imageHeight;

    this.src = src;
    this.file = file;
    this.name = name;

    this._imageSize = new AspectRatio(imageWidth - this.padding, imageHeight - this.padding, true);
    this._containerSize = new AspectRatio(containerWidth, containerHeight, false);
  }

  setContainerHeight = (height: number, locked: boolean = false) =>
    this.containerSize.setHeight(height, locked);

  setContainerWidth = (width: number, locked: boolean = false) =>
    this.containerSize.setWidth(width, locked);

  setImageHeight = (height: number) => this.imageSize.setHeight(height);
  setImageWidth = (width: number) => this.imageSize.setWidth(width);

  setPadding = (padding: number) => {
    this.padding = padding;
    
    this.imageSize.width > this.imageSize.height
      ? this.setImageWidth(this.imageSize.width - padding)
      : this.setImageHeight(this.imageSize.height - padding);
  }

  render = () => `Container: ${this.containerSize.render()}, Image: ${this.imageSize.render()}`;

  reset = () => {
    this.containerSize.reset();
    this.imageSize.reset();
  }
}
