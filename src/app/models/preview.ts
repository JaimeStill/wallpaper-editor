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
    } else return source;
  }

  private calculateRatio = (original: number, result: number, scaleDown: boolean = true) => {
    if (scaleDown) {
      return original > result
        ? result / original
        : original / result;
    } else {
      return original > result
        ? original / result
        : result / original;
    }
  }

  private updateContainer = (wp: Wallpaper): { wFactor: number, hFactor: number } => {
    this.containerSize = this.buildRatio(wp.containerSize, this.previewSize, 12);
    const wFactor = this.calculateRatio(wp.containerSize.width, this.containerSize.width);
    const hFactor = this.calculateRatio(wp.containerSize.height, this.containerSize.height);

    return { wFactor, hFactor };
  }

  private updateImage = (wp: Wallpaper, scale: { wFactor: number, hFactor: number }) =>
    this.imageSize = wp.imageSize.scale(scale.wFactor, scale.hFactor);

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
