import { AspectRatio } from './aspect-ratio';
import { Wallpaper } from './wallpaper';

export class Preview {
  previewSize!: AspectRatio;
  containerSize!: AspectRatio;
  imageSize!: AspectRatio;

  constructor(
    width: number,
    height: number,
    wallpaper: Wallpaper | null
  ) {
    this.update(width, height, wallpaper);
  }

  private buildRatio = (source: AspectRatio, container: AspectRatio, padding: number = 0) => {
    const sideA: { size: number, isWidth: boolean } = source.width > source.height
      ? source.width > (container.width - padding)
        ? { size: container.width - padding, isWidth: true }
        : { size: source.width, isWidth: true }
      : source.height > (container.height - padding)
        ? { size: container.height - padding, isWidth: false }
        : { size: source.height, isWidth: false }

    const sideB: { size: number, isWidth: boolean } = sideA.isWidth
      ? { size: source.getAspectHeight(sideA.size), isWidth: false }
      : { size: source.getAspectWidth(sideA.size), isWidth: true };

    return sideA.isWidth
      ? new AspectRatio(sideA.size, sideB.size)
      : new AspectRatio(sideB.size, sideA.size);
  }

  private updateContainer = (wp: Wallpaper) => this.containerSize = this.buildRatio(wp.containerSize, this.previewSize, 24);

  private updateImage = (wp: Wallpaper) => this.imageSize = this.buildRatio(wp.imageSize, this.containerSize);

  update = (width: number, height: number, wallpaper: Wallpaper | null) => {
    this.previewSize = new AspectRatio(width, height);

    if (wallpaper?.containerSize && wallpaper?.imageSize) {
      this.updateContainer(wallpaper);
      this.updateImage(wallpaper);
    }
  }

  render = () => this.containerSize && this.imageSize
    ? `Preview: ${this.previewSize.render()}, Container: ${this.containerSize.render()}, Image: ${this.imageSize.render()}`
    : `Preview: ${this.previewSize.render()}, Pending Wallpaper`;
}
