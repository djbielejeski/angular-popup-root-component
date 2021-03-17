import {Injectable, TemplateRef, EventEmitter} from '@angular/core';

@Injectable()
export class PopupService {
  showPopup = new EventEmitter<TemplateRef<any>>();
  hidePopup = new EventEmitter();
  togglePopup(visible: boolean, template: TemplateRef<any>) {
    if (visible) {
      this.showPopup.emit(template);
    } else {
      this.hidePopup.emit();
    }
  }
}
