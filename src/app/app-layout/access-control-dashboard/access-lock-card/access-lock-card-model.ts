export class WarehousesDevicesModel {
    id: number;
    name: string;
    antennaId: number;
    deviceId: number;
    deviceName: string;
    warehouseId: number;
    antennaName: string;
    lockStatus: boolean;
    gpo1: string;
    gpo2: string;
    gpo3: string;
    gpo4: string;
    value: number;
    address: string;
    lat: string;
    lng: string;
}
export class StoreHouseActivityModel {
    id: number;
    accessRequestId: number;
    antennaId: number;
    lockOpenedStatus: boolean;
    lat: string;
    lng: string;
    address: string;
    battery: number;
    signal: number;
}
