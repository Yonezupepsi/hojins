import { Injectable } from '@angular/core';
import { FuseMockApiService } from '@fuse/lib/mock-api/mock-api.service';
import { pcs as pcsData } from 'app/mock-api/apps/pc-manager/data';
import { cloneDeep } from 'lodash-es';
import { Pc } from './pc.model';

@Injectable({ providedIn: 'root' })
export class PcMockApi {
    private _pcs: Pc[] = pcsData;

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
    }

    getPcs(): Pc[] {
        return this._pcs;
    }
}
