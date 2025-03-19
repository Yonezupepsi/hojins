import { Component, ViewEncapsulation } from '@angular/core';
import { PcCardComponent } from './pc-card.component';
import { CommonModule } from '@angular/common';
import { PcMockApi } from 'app/mock-api/apps/pc-manager/api';
import { Pc } from 'app/mock-api/apps/pc-manager/pc.model';
import { PcRentalHistory, PcBreakHistory } from 'app/mock-api/apps/pc-manager/pc-history.model';

@Component({
    selector: 'pc-manager',
    standalone: true,
    templateUrl: './pc-manager.component.html',
    styleUrls: ['./pc-manager.component.css'],
    imports: [PcCardComponent, CommonModule],
    providers: [PcMockApi],
    encapsulation: ViewEncapsulation.None,
})
export class PcManagerComponent {

    pcs: Pc[] = [];
    rentalHist: PcRentalHistory[] = [];
    breakHist: PcBreakHistory[] = [];
    filteredBreakHist: PcBreakHistory;

    constructor(private pcMockApi: PcMockApi) { }

    ngOnInit(): void {
        this.pcs = this.pcMockApi.getPcs();
        this.rentalHist = this.pcMockApi.getRentalHist();
        this.breakHist = this.pcMockApi.getBreakHist();
    }


    showDetails(data: { pcNumber: string, status: string, rentalStatus: string }) {
        console.log(this.pcs.filter((pc) => pc.pcNumber === data.pcNumber).map((pc) => pc)[0]);
        console.log('詳細履歴ページ移動: ', data.pcNumber, '\n状態: ', data.status, '\n貸出状況: ', data.rentalStatus);
    }

    addEmployee(data: { status: string, rentalStatus: string }) {
        console.log('割り当てページ移動\n状態: ', data.status, '\n貸出状況: ', data.rentalStatus);
    }

    showRentalHist(data: { pcNumber: string }) {
        const rentalHistory = this.rentalHist.filter((hist) => hist.pcNumber === data.pcNumber);
        console.log('レンタル履歴: ', rentalHistory);
    }

    showBreakHist(data: { pcNumber: string }) {
        const breakHistory = this.breakHist.filter((hist) => hist.pcNumber === data.pcNumber);
        console.log('故障履歴: ', breakHistory);

    }

    getFilteredBreakHist(pcNumber: string) {
        const filtered = this.breakHist.find((hist) => hist.pcNumber === pcNumber && hist.repairEndDate === null);
        console.log(filtered);
        return filtered;
    }

}
