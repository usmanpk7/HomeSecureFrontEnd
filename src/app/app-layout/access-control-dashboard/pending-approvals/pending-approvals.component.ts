// import { Component, Injector, OnInit, ViewChild } from '@angular/core';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { ItemDto, RankServiceProxy, StoreHouseAccessRequestDto, StoreHouseAccessRequestServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Table } from 'primeng/table';

// @Component({
//   selector: 'app-pending-approvals',
//   templateUrl: './pending-approvals.component.html',
//   styleUrls: ['./pending-approvals.component.css']
// })
// export class PendingApprovalsComponent extends AppComponentBase implements OnInit {
//   itemsDto: Array<StoreHouseAccessRequestDto>;
//   @ViewChild('dataTable') table: Table;
//   rankList: any;
//   first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     viewType: number;
//     data: Array<StoreHouseAccessRequestDto>;
//     organizationUnitId: any;
//     itemsData: any;
//   constructor( injector: Injector, private storehouseRequestService: StoreHouseAccessRequestServiceProxy,
//     private rankServiceProxy: RankServiceProxy) {
//     super(injector);
//     this.viewType = 1;
//     this.rankList = [];
//     this.itemsData = [];
//    }

//   ngOnInit(): void {
//     let userorganizationlist = JSON.parse(localStorage.getItem('OrganizationUnit'));
//     let userOrganization = userorganizationlist.shift();
//     if (userOrganization) {
//          this.organizationUnitId = userOrganization.id;
//     }
//    this.getAllRequest();
//    this.getAllRankUser();
//   }
//   paginate(event) {
//     this.first = event.first ;
//     this.maxResultCount = (this.first + 1) * this.row; //10
//     this.skipCount = this.first * this.row;
// }
//   onExpandRow(item: any) {
// }
//   handleChange(event) {

//   }
//   getAllRequest() {
//     this.isLoading = true;
//     this.storehouseRequestService.getAll(this.appSession.tenantId, undefined, undefined, this.commonUtility.organizationId, undefined, 0, 1000).subscribe(data => {
//      if (data) {
//       this.itemsDto = data.items;

//       for(let i=0;i<this.itemsDto.length;i++)
//       {
//           this.itemsData=[];
//          console.log(this.itemsData);
//          this.itemsData.push({
//           id: this.itemsDto[i].id,
//           tenantId: this.itemsDto[i].tenantId,
//           creatorUserId: this.itemsDto[i].creatorUserId,
//           lockNumber: this.itemsDto[i].lockNumber,
//           organizationId: this.itemsDto[i].organizationUnitId,
//           purpose: this.itemsDto[i].purpose,
//           remark: this.itemsDto[i].remark,
//           name: this.itemsDto[i].gateKeySerialNumber,
//           Warehouse: this.getWarehouse(this.itemsDto[i].antennaWarehouseId),
//           ReqeustTime: this.itemsDto[i].requestedDateTime,
//           LockStatus: "../../../assets/images/widget/lockcheck.svg",
//           AccessRequestBy: this.getuser(this.itemsDto[i].creatorUserId),
//           NameGrantedBy: this.getuser(this.itemsDto[i].creatorUserId),
//           Status: "../../../assets/images/widget/check_star.svg",
//           creationDateTime: this.itemsDto[i].creationTime
//           });
//     }
//     }
//     this.isLoading = false;
//     });
//     }
//   ViewChange(event) {
//     let id = event.target.id;
//     if (id === 'card') {
//      this.viewType = 2;
//     } else {
//       this.viewType = 1;
//     }
//   }
//   getWarehouse(id) {
//     let antenawarehouses = JSON.parse(localStorage.getItem('antenaWarehouse'));
//     let warehouselist = JSON.parse(localStorage.getItem('warehouse'));
//      let warehousename = '-----';
//      if (antenawarehouses.length > 0) {
//        let warehouseId = antenawarehouses.filter(x => x.Id === id).map(x => x.warehouseId).shift();
//        warehousename =  warehouselist.filter(x => x.id === warehouseId).map(x => x.name).shift();
//       }
//       return warehousename;
//   }
//   getuser(id) {
//     let userlist = JSON.parse(localStorage.getItem('users'));
//      let username = '-----';
//      if (userlist.length > 0) {
//         username = userlist.filter(x => x.Id === id).map(x => x.name).shift();
//       }
//       return username;
//   }
//   getAllRankUser(){
//     this.rankServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, 0, 1000).subscribe(data =>{
//       if(data){
//         this.rankList = data.items;
//       }
//     });
//   }

//   getRankById(Id){
//     return this.rankList.filter(x => x.id === Id).map(x => x.rankName).shift();
//   }
// }
