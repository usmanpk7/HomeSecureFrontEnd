import { DeviceType, DeviceTypes } from './../../../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import {
    DeviceLocationTrackingActivityServiceProxy,
    DeviceServiceProxy,
    ProfileServiceProxy,
    UserServiceProxy,
} from '@shared/service-proxies/service-proxies';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'app-election-agents',
    templateUrl: './election-agents.component.html',
    styleUrls: ['./election-agents.component.css'],
})
export class ElectionAgentsComponent implements OnInit {
    electionDeviceLocationActivityData: any[] = [];
    electionUsresData: any[] = [];
    electionDevicesData: any[] = [];
    constructor(
        private _deviceLocationServiceProxy: DeviceLocationTrackingActivityServiceProxy,
        private spinnerService: NgxSpinnerService,
        private _deviceServiceProxy: DeviceServiceProxy,
        private _userServiceProxy: UserServiceProxy,
        private _profileServiceProxy: ProfileServiceProxy
    ) {}

    ngOnInit(): void {
        this.GetAllDeviceLocations();
    }

    GetAllDeviceLocations() {
        this.spinnerService.show();
        this._deviceServiceProxy
            .getAll(
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined,
                undefined
            )
            .subscribe((data) => {
                data.items.forEach((value, i) => {
                    value.deviceLocationTrackingActivity.forEach((value2, index) => {
                        let obj: any = {};
                        obj.deviceId = value.id;
                        obj.deviceType = DeviceTypes[value.deviceType];
                        obj.image = value.image;
                        obj.deviceName = value.deviceName;
                        obj.osVersion = value.osVersion;
                        obj.rfidImei = value.rfidImei;
                        obj.simNumber = value.simNumber;
                        obj.sendDeviceInfo = value.sendDeviceInfo;
                        obj.dailyActivitySummary = value.dailyActivitySummary;
                        obj.deviceNotification = value.deviceNotification;
                        obj.setDate = value.setDate;
                        obj.sendPushNotification = value.sendPushNotification;
                        obj.batteryLevel = value.batteryLevel;
                        obj.lowLevelThreshold = value.lowLevelThreshold;
                        obj.fullLevelThresold = value.fullLevelThresold;
                        obj.signalAlert = value.signalAlert;
                        obj.signalLost = value.signalLost;
                        obj.signalActive = value.signalActive;
                        obj.deviceOwnerUserId = value.deviceOwnerUserId;
                        obj.deviceLocationActivityId = value2.id;
                        obj.locationAddress = value2.locationAddress;
                        obj.speed = value2.speed;
                        obj.isGeofenceViolation = value2.isGeofenceViolation;
                        obj.geofenceViolationDistance = value2.geofenceViolationDistance;
                        obj.isGpsOn = value2.isGpsOn;
                        obj.gpsSignalStrength = value2.gpsSignalStrength;
                        obj.isChargerPluged = value2.isChargerPluged;
                        obj.batteryLevel2 = value2.batteryLevel;
                        obj.networkSignalNetwork = value2.networkSignalNetwork;
                        obj.isActive = value2.isActive;
                        obj.creationTime = value2.creationTime;
                        if (value2.userId != null) {
                            this._userServiceProxy.getUserForEdit(value2?.userId).subscribe((item) => {
                                obj.userName = item?.user.firstName + ' ' + item?.user.lastName;
                                this._profileServiceProxy.getProfilePictureByUser(value2?.userId).subscribe((result) => {
                                    if (result && result.profilePicture) {
                                        obj.userImage = 'data:image/jpeg;base64,' + result.profilePicture;
                                    }
                                });
                            });
                        }
                        this.electionDeviceLocationActivityData.push(obj);
                        if (index === this.electionDeviceLocationActivityData.length - 1) {
                            this.spinnerService.hide();
                        }
                    });
                });
            });
    }
}
