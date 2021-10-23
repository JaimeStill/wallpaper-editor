import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'image-loader',
  templateUrl: 'image-loader.component.html',
  styleUrls: ['image-loader.component.css']
})
export class ImageLoaderComponent implements OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;

  @Input() mini: boolean = false;
  @Input() dropWidth: number | string = 'auto';
  @Input() dropHeight: number = 440;
  @Input() dropStyle = 'm4 rounded background-default card-outline-accent border-x-dashed border-width-2';

  @Input() dropIconScale: number = 5;
  @Input() dropIcon = 'file_upload';
  @Input() dropIconClass = 'material-icons-outlined';

  @Output() loaded = new EventEmitter<File>();

  hovered: boolean = false;

  ngOnInit() {
    this.dropHeight = this.mini
      ? 120
      : this.dropHeight;
  }

  fileChange = (event: any) => {
    if (event.target?.files?.length > 0) {
      this.emitFile(event.target.files[0]);
      this.fileInput.nativeElement.value = null;
    }
  }

  dragOver = (event: Event) => {
    event.stopPropagation();
    event.preventDefault();

    this.hovered = true;
  }

  dragLeave = () => {
    this.hovered = false;
  }

  drop = (event: DragEvent) => {
    event.stopPropagation();
    event.preventDefault();
    this.hovered = false;

    if (event.dataTransfer?.files?.length && event.dataTransfer.files.length > 0)
      this.emitFile(event.dataTransfer.files[0]);
  }

  emitFile = (file: File) => file?.type?.match(/image.*/) && this.loaded.emit(file);
}
