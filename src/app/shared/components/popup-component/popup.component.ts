import {Component, Input, Output, EventEmitter, TemplateRef, ViewChild} from '@angular/core';
import {PopupService} from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @ViewChild('popupTemplate') popupTemplate: TemplateRef<any>;

  private _visible: boolean = false;
  @Input() get visible(): boolean {
    return this._visible;
  }
  set visible(value: boolean) {
    this._visible = value;
    this.visibleChange.emit(value);

    this.popupService.togglePopup(this._visible, this.popupTemplate);
  }
  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() width: string = 'default-popup-width';
  @Input() height: string = 'default-popup-height';
  @Input() title: string = '';
  @Input() closeOnOutsideClick: boolean = true;
  @Input() showCloseButton: boolean = true;

  constructor(private popupService: PopupService) {}

  outsideClick($event: MouseEvent) {
    if (this.closeOnOutsideClick) {
      this.hidePopup($event);
    }
  }

  hidePopup($event: MouseEvent) {
    this.visible = false;
    $event.cancelBubble = true;
  }
}
