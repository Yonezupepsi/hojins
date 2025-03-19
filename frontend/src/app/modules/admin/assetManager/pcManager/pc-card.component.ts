import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pc } from 'app/mock-api/apps/pc-manager/pc.model';
import { PcRentalHistory, PcBreakHistory } from 'app/mock-api/apps/pc-manager/pc-history.model';

@Component({
    selector: 'pc-card',
    standalone: true,
    templateUrl: './pc-card.component.html',
    styleUrls: ['./pc-manager.component.css'],
    imports: [CommonModule],
})
export class PcCardComponent {
    @Input() pc: Pc;
    @Input() rentalHist: PcRentalHistory[] = [];
    @Input() breakHist: PcBreakHistory[] = [];
    @Input() filteredBreakHist: PcBreakHistory;
    @Output() viewDetails = new EventEmitter<{ pcNumber: string, status: string, rentalStatus: string }>();
    @Output() addEmployee = new EventEmitter<{ status: string, rentalStatus: string }>();
    @Output() viewRentalHist = new EventEmitter<{ pcNumber: string }>();
    @Output() viewBreakHist = new EventEmitter<{ pcNumber: string }>();

    onViewDetails() {
        this.viewDetails.emit({ pcNumber: this.pc.pcNumber, status: this.pc.status, rentalStatus: this.pc.rentalStatus });
    }

    onAddEmployee() {
        this.addEmployee.emit({ status: this.pc.status, rentalStatus: this.pc.rentalStatus });
    }

    onViewRentalHist() {
        const rentalHistory = this.rentalHist.filter((hist) => hist.pcNumber === this.pc.pcNumber);
        if (rentalHistory.length > 0) {
            rentalHistory.forEach((history) => {
                this.viewRentalHist.emit({ pcNumber: history.pcNumber });
            });
        } else {
            console.log('貸出履歴が存在しません。');
        }
    }

    onViewBreakHist() {
        const breakHistory = this.breakHist.filter((hist) => hist.pcNumber === this.pc.pcNumber);
        if (breakHistory.length > 0) {
            breakHistory.forEach((history) => {
                this.viewBreakHist.emit({ pcNumber: history.pcNumber });
            });
        } else {
            console.log('故障履歴が存在しません。');
        }

    }

    onButtonClick() {
        if (this.pc.rentalStatus === '使用中') {
            this.onViewDetails();
        } else {
            this.onAddEmployee();
        }

        if (this.rentalHist.some((hist) => hist.pcNumber === this.pc.pcNumber)) {
            this.onViewRentalHist();
        }

        if (this.breakHist.some((hist) => hist.pcNumber === this.pc.pcNumber)) {
            this.onViewBreakHist();
        }
    }
}
