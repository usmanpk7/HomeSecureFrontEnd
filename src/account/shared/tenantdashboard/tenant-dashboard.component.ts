import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { SharingServiceElection } from '@app/app-layout/dashboard/SharingServiceElection';
import { AppAuthService } from '@app/shared/common/auth/app-auth.service';
import { AppComponentBase } from '@shared/common/app-component-base';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { ElectionPollingUnitResultServiceProxy } from '@shared/service-proxies/service-proxies';
import { LocalStorageService } from '@shared/utils/local-storage.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
    selector: 'app-tenant-dashboard',
    templateUrl: './tenant-dashboard.component.html',
    styleUrls: ['./tenant-dashboard.component.css'],
})
export class TenantDashboardComponent extends AppComponentBase implements OnInit {
    shownLoginName = '';
    tenancyName = '';
    userName = '';
    appSession: AppSessionService;
    constructor(private _electionPollingUnitResult: ElectionPollingUnitResultServiceProxy, private sharingService: SharingServiceElection, private router: Router,private _authService: AppAuthService, private localstorageservice: LocalStorageService,injector: Injector) {
        super(injector);
        this.appSession = injector.get(AppSessionService);
    }

    ngOnInit(): void {
        this.setCurrentLoginInformations();
        this.GetAllElectionPositions();
    }

    GetAllElectionPositions() {
          this.spinnerService.show();
          this._electionPollingUnitResult
            .getMyElectionPost(undefined, true)
            .subscribe((data) => {
                this.spinnerService.hide();
                this.sharingService.setElectonPostData(data.electionPost);
            });
    }


    changeStyleIn(event) {
        event.target.style.borderColor = '#FF6C88';
    }
    changeStyleOut(event) {
        event.target.style.borderColor = '#ffffff';
        event.target.style.borderBottomColor = '#FF6C88';
    }

    GoToDashboard(moduleName: string) {
        this.localstorageservice.setItem('modulename', moduleName);
        if(moduleName == "Election"){
            this.router.navigate(['/home/dashboard']);
        }else if(moduleName == "Incident"){
            this.router.navigate(['/home/incident-dashboard']);
        }
        else if(moduleName=="Asset"){
            this.router.navigate(['/home/asset-tracker']);
        }

    }
    setCurrentLoginInformations(): void {
        this.shownLoginName = this.appSession.getShownLoginName();
        this.tenancyName = this.appSession.tenancyName;
        this.userName = this.appSession.user.userName;
    }

    logout(): void {
        this._authService.logout();
    }
}
