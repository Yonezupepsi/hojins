import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { pcs as pcsData } from 'app/mock-api/apps/pc-manager/data';
import { cloneDeep } from 'lodash-es';
import { Pc } from './pc.model';
import { PcRentalHistory, PcBreakHistory } from './pc-history.model';
import { pcBreakHistorys as pcBreakData, pcRentalHistorys as pcRentalData } from 'app/mock-api/apps/pc-manager/data';

@Injectable({ providedIn: 'root' })
export class PcMockApi {
    private _pcs: Pc[] = pcsData;
    private _breakHistory: PcBreakHistory[] = pcBreakData;
    private _rentalHistory: PcRentalHistory[] = pcRentalData;

    constructor(private _fuseMockApiService: FuseMockApiService) {

        this.registerHandlers();
    }


    registerHandlers(): void {

        this._fuseMockApiService
            .onGet('api/apps/pcs')
            .reply(() => {

                const pcs = cloneDeep(this._pcs);

                return [200, pcs];
            });

        this._fuseMockApiService
            .onGet('api/apps/pcs/pc')
            .reply(({ request }) => {

                const pcNumber = request.params.get('pcNumber');

                const pcs = cloneDeep(this._pcs);

                const pc = pcs.find(item => item.pcNumber === pcNumber);

                return [200, pc];
            });

        this._fuseMockApiService
            .onGet('api/apps/pc-rental-hist')
            .reply(() => {

                const rentalHist = cloneDeep(this._rentalHistory);

                return [200, rentalHist];
            });

        this._fuseMockApiService
            .onGet('api/apps/pc-break-hist')
            .reply(({ request }) => {

                const breakHist = cloneDeep(this._breakHistory);

                return [200, breakHist];
            });
    }

    getPcs(): Pc[] {
        return this._pcs;
    }

    getRentalHist(): PcRentalHistory[] {
        return this._rentalHistory;
    }

    getBreakHist(): PcBreakHistory[] {
        return this._breakHistory;
    }
}
