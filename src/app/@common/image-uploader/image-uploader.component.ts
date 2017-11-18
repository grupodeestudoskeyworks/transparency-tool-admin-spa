import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: [ './image-uploader.component.scss' ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => ImageUploaderComponent), multi: true },
  ],
})
export class ImageUploaderComponent implements ControlValueAccessor {
  dragging = false;
  loaded = false;
  imageLoaded = false;
  imageSrc = '';

  registerOnChangeCallback: (_) => { };
  registerOnTouchedCallback: (_) => { };

  writeValue(val: string) {
    if (val) {
      this.imageLoaded = this.loaded = true;
      this.imageSrc = val;
    } else {
      this.imageLoaded = this.loaded = false;
      this.imageSrc = '';
    }
  }

  registerOnChange(fn: (_) => { }) {
    this.registerOnChangeCallback = fn;
  }

  registerOnTouched(fn: (_) => { }) {
    this.registerOnTouchedCallback = fn;
  }

  handleDragEnter() {
    this.dragging = true;
  }

  handleDragLeave() {
    this.dragging = false;
  }

  handleDrop(e) {
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad() {
    this.imageLoaded = true;
  }

  removeImage() {
    this.imageLoaded = this.loaded = false;
    this.registerOnChangeCallback(
      this.imageSrc = '',
    );
  }

  handleInputChange(e) {
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    const pattern = /image-*/;
    const reader = new FileReader();

    if (!file.type.match(pattern)) {
        alert('invalid format');
        return;
    }

    this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    const reader = e.target;
    this.loaded = true;
    this.registerOnChangeCallback(
      this.imageSrc = reader.result,
    );
  }
}
