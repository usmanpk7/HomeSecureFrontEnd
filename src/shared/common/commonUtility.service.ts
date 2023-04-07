import { Injectable } from '@angular/core';
import { OrganizationUnitServiceProxy, UserServiceProxy, OrganizationUnitDto } from '@shared/service-proxies/service-proxies';

@Injectable()
export class CommonUtilityService {
    private _organization: OrganizationUnitDto;

    constructor(
        private _organizationUnitsServiceProxy: OrganizationUnitServiceProxy,
        private _userServiceProxy: UserServiceProxy) {
    }
    get organizationId(): number {
        return this._organization ? this._organization.id : null;
    }
    get organizationName(): string {
        return this._organization ? this._organization.displayName : '';
    }

    init(userId: number): Promise<OrganizationUnitDto> {
        return new Promise<OrganizationUnitDto>((resolve, reject) => {
            this._organizationUnitsServiceProxy.getOrganizationUnits().toPromise().then(async res => {
                if (res) {
                    let orgList = res.items;
                    if (userId !== 0) {
                     await this._userServiceProxy.getUserForEdit(userId).toPromise().then(data => {
                        let units = [];
                        orgList.forEach(function (value) {
                          let  temp = data.memberedOrganizationUnits.find(x => x === value.code);
                          if (temp != null) {
                            units.push(value);
                          }
                        });
                        this._organization = units.shift();
                   });
                }
                }
                resolve(this._organization);
            }, (err) => {
                reject(err);
            });
            });
    }
}
