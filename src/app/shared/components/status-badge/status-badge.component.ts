import {Component, ChangeDetectionStrategy, Input, HostBinding, OnInit} from '@angular/core';
import {StatusItem} from '@entities/status-badget/model';
import {STATUS_STYLE_CLASS} from '@entities/status-badget/constants';
import {StatusStyleClassNames} from '@entities/status-badget/enums';

@Component({
	selector: 'st-status-badge',
	templateUrl: './status-badge.component.html',
	styleUrls: ['./status-badge.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusBadgeComponent implements OnInit {
	@Input() statusData: StatusItem;

	@HostBinding('class') hostClass: StatusStyleClassNames;

	ngOnInit(): void {
		this.hostClass = STATUS_STYLE_CLASS[this.statusData.identifier];
	}
}
