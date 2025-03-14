import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'pc-card',
    standalone: true,
    templateUrl: './pc-card.component.html',
    styleUrls: ['./pc-manager.component.css'],
    imports: [CommonModule],
})
export class PcCardComponent {
    @Input() pc: any;
    @Output() viewDetails = new EventEmitter<{ id: string, status: string }>();
    @Output() addEmployee = new EventEmitter<String>();

    onViewDetails() {
        this.viewDetails.emit({ id: this.pc.id, status: this.pc.status });
    }

    onAddEmployee() {
        this.addEmployee.emit(this.pc.status);
    }
}
