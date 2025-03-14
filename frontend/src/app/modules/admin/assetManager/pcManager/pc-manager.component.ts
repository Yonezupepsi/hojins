import { Component, ViewEncapsulation } from '@angular/core';
import { PcCardComponent } from './pc-card.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'pc-manager',
    standalone: true,
    templateUrl: './pc-manager.component.html',
    styleUrls: ['./pc-manager.component.css'],
    imports: [PcCardComponent, CommonModule],
    encapsulation: ViewEncapsulation.None,
})
export class PcManagerComponent {
    pcs = [
        { id: '1', number: 'Tomato512', cpu: 'i7', memory: 16, usage: '2024-01', status: '正常' },
        { id: '2', number: 'Tomato513', cpu: 'i5', memory: 8, usage: null, status: '故障' },
        { id: '3', number: 'Tomato514', cpu: 'i7', memory: 16, usage: '2024-02', status: '正常' },
        { id: '4', number: 'Tomato515', cpu: 'i9', memory: 128, usage: '2025-01', status: '正常' }
    ];

    showDetails(data: { id: string, status: string }) {
        console.log(this.pcs);
        console.log('詳細履歴ページ移動: ', data.id, '\n状態: ', data.status);
    }

    addEmployee(status: string) {
        console.log('割り当てページ移動\n状態: ', status);
    }

}
