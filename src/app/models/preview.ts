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

  private buildRatio = (source: AspectRatio, container: AspectRatio, padding: number = 0): AspectRatio => {
    const adjust = (source.width > container.width - padding) || (source.height > container.height - padding);

    if (adjust) {
      let w: number;
      let h: number;

      if (source.width > container.width - padding && source.height > container.height - padding) {
        if (source.width >= source.height) {
          w = container.width - padding;
          h = source.getAspectHeight(w);
        } else {
          h = container.height - padding;
          w = source.getAspectWidth(h);
        }

        return this.buildRatio(new AspectRatio(w, h), container, padding);
      } else if (source.width > container.width - padding) {
        w = container.width - padding;
        h = source.getAspectHeight(w);

        return new AspectRatio(w, h);
      } else {
        h = container.height - padding;
        w = source.getAspectWidth(h);

        return new AspectRatio(w, h);
      }
    } else
      return new AspectRatio(source.width, source.height);
  }

  private calculateRatio = (original: number, result: number) => {
    const difference = original - result;
    return difference / original;
  }

  private updateContainer = (wp: Wallpaper): { widthRatio: number, heightRatio: number } => {
    this.containerSize = this.buildRatio(wp.containerSize, this.previewSize, 24);
    const widthRatio = this.calculateRatio(wp.containerSize.width, this.containerSize.width);
    const heightRatio = this.calculateRatio(wp.containerSize.height, this.containerSize.height);

    return { widthRatio, heightRatio };
  }

  private updateImage = (wp: Wallpaper, scale: { widthRatio: number, heightRatio: number }) => {
    const scaledImage = new AspectRatio(
      wp.imageSize.scaleWidth(scale.widthRatio),
      wp.imageSize.scaleHeight(scale.heightRatio)
    );

    this.imageSize = this.buildRatio(scaledImage, this.containerSize);
  }

  update = (width: number, height: number, wallpaper: Wallpaper | null) => {
    this.previewSize = new AspectRatio(width, height);

    if (wallpaper?.containerSize && wallpaper?.imageSize) {
      const scale = this.updateContainer(wallpaper);
      this.updateImage(wallpaper, scale);
    }
  }

  render = () => this.containerSize && this.imageSize
    ? `Preview: ${this.previewSize.render()}, Container: ${this.containerSize.render()}, Image: ${this.imageSize.render()}`
    : `Preview: ${this.previewSize.render()}, Pending Wallpaper`;
}
