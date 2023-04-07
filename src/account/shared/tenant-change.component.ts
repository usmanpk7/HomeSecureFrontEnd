import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AccountServiceProxy } from '@shared/service-proxies/service-proxies';
import { threadId } from 'worker_threads';
import { TenantChangeModalComponent } from './tenant-change-modal.component';

@Component({
    selector: 'tenant-change',
    template:
    `<span *ngIf="isMultiTenancyEnabled">
        <span style="font-size:16px;font-weight:bolder">{{"CURRENT TENANT" | localize}}</span>   <a href="javascript:;" (click)="showChangeModal()" class="btn btn-sm" style="color:white;background: #6966FF;margin-left:95px">Change Organization <img src="../../assets/Vector.png"></a><span *ngIf="tenancyName" title="{{name}}">{{tenancyName}}</span>
        <tenantChangeModal #tenantChangeModal></tenantChangeModal>
    </span>`
})
export class TenantChangeComponent extends AppComponentBase implements OnInit {

    @ViewChild('tenantChangeModal') tenantChangeModal: TenantChangeModalComponent;

    tenancyName: string;
    name: string;

    constructor(
        injector: Injector,
        private _accountService: AccountServiceProxy
        ) {
        super(injector);
    }

    ngOnInit() {
        if (this.appSession.tenant) {
            this.tenancyName = this.appSession.tenant.tenancyName;
            this.name = this.appSession.tenant.name;
            // alert(this.appSession.tenant.id);
        }
    }

    get isMultiTenancyEnabled(): boolean {
        return abp.multiTenancy.isEnabled;
    }

    showChangeModal(): void {

        this.tenantChangeModal.show(this.tenancyName);
    }
}
