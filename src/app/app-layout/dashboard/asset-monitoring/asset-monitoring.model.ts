// import { ActivityStatusType } from '@shared/service-proxies/service-proxies';
import { DateTime } from 'luxon';

export class AssetMonitoringModel {
    sku: string;
    varityItemName: string;
    deviceName: string;
    // activityStatusType: ActivityStatusType;
    warehouseName: string;
    verification: string;
    hardware: string;
    activityDateTime: DateTime;
}
// {"deviceName":"HH380","activityStatusType":1,"activityDateTime":"2022-02-22T03:53:28.2833333",
//  "varityItemName":"666555444-2","warehouseName":"CODY-SH0001"}
