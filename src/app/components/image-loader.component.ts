import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'image-loader',
  templateUrl: 'image-loader.component.html',
  styleUrls: ['image-loader.component.css']
})
export class ImageLoaderComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;

  @Input() buttonStyle: string = 'm4 color-primary';
  @Input() buttonLabel: string = 'Select Image';

  @Input() dropWidth: number = 458;
  @Input() dropHeight: number = 458;
  @Input() dropStyle = 'm4 rounded background-card card-outline-accent border-x-dashed border-width-2';

  @Input() dropIconScale: number = 5;
  @Input() dropIcon = 'file_upload';
  @Input() dropIconClass = 'material-icons-outlined';

  @Output() select = new EventEmitter<File>();

  hovered: boolean = false;

  fileChange = (event: any) => {
    if (event.target?.files?.length > 0) {
      this.select.emit(event.target.files[0]);
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

    console.log(event);

    if (event.dataTransfer?.files?.length && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];

      if (file.type.match(/image.*/))
        this.select.emit(file);
    }
  }
}
