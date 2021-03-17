import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {PopupService} from './shared/services/popup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('popupRender', { read: ViewContainerRef }) popupRender: ViewContainerRef;

  constructor(private popupService: PopupService) {
  }

  ngOnInit() {
    this.popupService.showPopup.subscribe((template: TemplateRef<any>) => {
      this.popupRender.clear();
      this.popupRender.createEmbeddedView(template);
    });

    this.popupService.hidePopup.subscribe(() => {
      this.popupRender.clear();
    });
  }
}
