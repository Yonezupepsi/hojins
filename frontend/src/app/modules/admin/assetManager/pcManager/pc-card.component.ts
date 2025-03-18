import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pc } from 'app/mock-api/apps/pc-manager/pc.model';

@Component({
    selector: 'pc-card',
    standalone: true,
    templateUrl: './pc-card.component.html',
    styleUrls: ['./pc-manager.component.css'],
    imports: [CommonModule],
})
export class PcCardComponent {
    @Input() pc: Pc;
    @Output() viewDetails = new EventEmitter<{ pcNumber: string, status: string }>();
    @Output() addEmployee = new EventEmitter<String>();

    onViewDetails() {
        this.viewDetails.emit({ pcNumber: this.pc.pcNumber, status: this.pc.status });
    }

    onAddEmployee() {
        this.addEmployee.emit(this.pc.status);
    }
}
