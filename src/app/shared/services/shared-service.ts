import { Injectable } from '@angular/core';
import { AppSessionService } from '@shared/common/session/app-session.service';
import { GetUsersInput, OrganizationUnitServiceProxy, UserServiceProxy } from '@shared/service-proxies/service-proxies';

@Injectable()
export class SharedService {

    organizationUnitId: any;
    organizationUnits: any;
    appSession: AppSessionService;
    constructor(
        private organizationUnitsServiceProxy: OrganizationUnitServiceProxy,
        private userServiceProxy: UserServiceProxy,
        ) {


    }

    getAllOrginationUnits() {
        this.organizationUnitsServiceProxy.getOrganizationUnits().subscribe(res => {
            if(res)
            {
              this.organizationUnits =res.items;
            }
        });
        this.userServiceProxy.getUserForEdit(this.appSession.userId).subscribe(data=> {
            let units =[];
            this.organizationUnits.forEach(function (value) {
              var  temp = data.memberedOrganizationUnits.find(x=>x == value.code)
              if(temp != null)
              {
                units.push(value);
              }
            });
            this.organizationUnits = [...units];
       });
    }
    getAllUsers() {
      let object = new GetUsersInput();
      object.skipCount = 0;
      object.sorting = undefined;
      object.filter = undefined;
      object.maxResultCount = 1000;
      object.role = undefined;
      object.permissions = undefined;
      this.userServiceProxy.getUsers(object).subscribe(data => {
          let list = [];
          if (data) {
              list = data.items.map(res => ({
                  name: res.name,
                  Id: res.id,
                  username: res.userName,
                  surname: res.surname,
                  Roles: res.roles,
                  profile: res.profilePictureId
              }));
          }
          localStorage.setItem('users', JSON.stringify(list));
      });
  }
}

