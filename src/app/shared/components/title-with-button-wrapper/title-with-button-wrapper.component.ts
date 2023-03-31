import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'st-title-with-button-wrapper',
  templateUrl: './title-with-button-wrapper.component.html',
  styleUrls: ['./title-with-button-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleWithButtonWrapperComponent {
  @Input() title: string;
  @Input() buttonText: string;

  @Output() clickOnButton = new EventEmitter<void>();
}
