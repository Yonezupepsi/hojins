import { Component, ViewEncapsulation } from '@angular/core';
import { PcCardComponent } from './pc-card.component';
import { CommonModule } from '@angular/common';
import { PcMockApi } from 'app/mock-api/apps/pc-manager/api';
import { Pc } from 'app/mock-api/apps/pc-manager/pc.model';

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

    constructor(private pcMockApi: PcMockApi) { }

    ngOnInit(): void {
        this.pcs = this.pcMockApi.getPcs();
    }


    showDetails(data: { pcNumber: string, status: string }) {
        console.log(this.pcs.filter((pc) => pc.pcNumber === data.pcNumber).map((pc) => pc)[0]);
        console.log('詳細履歴ページ移動: ', data.pcNumber, '\n状態: ', data.status);
    }

    addEmployee(status: string) {
        console.log('割り当てページ移動\n状態: ', status);
    }

}
