import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import {
  Preview,
  Wallpaper
} from './models';

import {
  ResizeService,
  ThemeService
} from './services';

import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { toPng } from 'html-to-image';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  private sub!: Subscription;

  loading: boolean = false;
  wallpaper!: Wallpaper;
  preview!: Preview;

  @ViewChild('previewElement') previewElement!: ElementRef<HTMLElement>;
  @ViewChild('target') target!: ElementRef<HTMLElement>;

  private updatePreview = (el: HTMLElement) =>
    this.preview = new Preview(el.offsetWidth, el.offsetHeight, this.wallpaper)

  constructor(
    private resizeSvc: ResizeService,
    private sanitizer: DomSanitizer,
    public themer: ThemeService
  ) { }

  ngAfterViewInit() {
    this.sub = this.resizeSvc.init();

    if (this.previewElement?.nativeElement)
      this.updatePreview(this.previewElement.nativeElement);
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  getLoaderSize = () => {
    const width = window.innerWidth > 300
      ? window.innerWidth - 200
      : 200;

    const height = window.innerHeight > 300
      ? window.innerHeight - 200
      : 200;

    return Math.min(width, height);
  }
  resize = () => {
    if (this.previewElement?.nativeElement)
      this.updatePreview(this.previewElement.nativeElement);
  }

  load = (file: File) => {
    if (file) {
      this.loading = true;
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);

      img.onload = () => {
        this.wallpaper = new Wallpaper(
          img.src,
          this.sanitizer.bypassSecurityTrustUrl(img.src),
          file,
          img.width,
          img.height,
          file.name?.split('.')[0],
          2560,
          1440
        );

        this.updatePreview(this.previewElement.nativeElement);
        this.loading = false;
      }
    }
  }

  refresh = () => {
    this.updatePreview(this.previewElement.nativeElement);
  }

  download = async () => {
    const target = document.getElementById('target') as HTMLElement;
    const targetSize = { width: target.style.width, height: target.style.height }
    const effects = target?.children[0] as HTMLElement;
    const img = target?.children[0]?.children[0] as HTMLImageElement;
    const imgSize = { width: img.style.width, height: img.style.height }

    if (target && effects && img) {
      target.style.width = effects.style.width = `${this.wallpaper.containerSize.width}px`;
      target.style.height = effects.style.height = `${this.wallpaper.containerSize.height}px`;
      img.src = this.wallpaper.src;
      img.style.width = `${this.wallpaper.imageSize.width}px`;
      img.style.height = `${this.wallpaper.imageSize.height}px`;

      const result = await toPng(target);

      target.style.width = effects.style.width = targetSize.width;
      target.style.height = effects.style.height = targetSize.height;
      img.style.width = imgSize.width;
      img.style.height = imgSize.height;

      const link = document.createElement('a');
      link.download = `${this.wallpaper.name}.png`;
      link.href = result;
      link.click();
    }
  }
}
