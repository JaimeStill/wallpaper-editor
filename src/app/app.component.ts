import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import {
  DomSanitizer,
  SafeUrl
} from '@angular/platform-browser';

import {
  Preview,
  Wallpaper
} from './models';

import { ThemeService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {
  loading: boolean = false;
  wallpaper!: Wallpaper;
  preview!: Preview;

  @ViewChild('previewElement') previewElement!: ElementRef<HTMLElement>;

  private updatePreview = (el: HTMLElement) =>
    this.preview = new Preview(el.offsetWidth, el.offsetHeight, this.wallpaper)

  constructor(
    private sanitizer: DomSanitizer,
    public themer: ThemeService
  ) { }

  ngAfterViewInit() {
    if (this.previewElement?.nativeElement)
      this.updatePreview(this.previewElement.nativeElement);
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
}
