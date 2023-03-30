import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StatusBadgeComponent} from '@shared/components/status-badge/status-badge.component';

@NgModule({
	declarations: [StatusBadgeComponent],
	exports: [StatusBadgeComponent],
	imports: [CommonModule]
})
export class StatusBadgeModule {}
