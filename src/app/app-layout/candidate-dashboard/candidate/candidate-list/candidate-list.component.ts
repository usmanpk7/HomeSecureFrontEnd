// import { Component, Injector, OnInit, Renderer2, ViewChild } from '@angular/core';
// import { FooterActionButton } from '@app/app-layout/indent-dashboard/model/footer-action-button';
// import { DataSharedService } from '@app/shared/services/data-shared-service';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { Table } from 'primeng/table';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import {
//     CandidateCategoryDto,
//     CandidateCategoryServiceProxy,
//     CandidateDto,
//     CandidateInerviewLocationDto,
//     CandidateInerviewLocationServiceProxy,
//     CandidatePrintServiceProxy,
//     CandidateServiceProxy,
//     EncryptionkeyDto,
//     EncryptionkeyServiceProxy,
//     Gender,
//     ItemServiceProxy,
//     MedicalStatus,
// } from '@shared/service-proxies/service-proxies';
// import { FileDownloadService } from '@shared/utils/file-download.service';
// import { FileDto } from '@shared/service-proxies/service-proxies';
// import { DateTime } from 'luxon';
// import { ChartOptions } from 'chart.js';

// @Component({
//     selector: 'app-candidate-list',
//     templateUrl: './candidate-list.component.html',
//     styleUrls: ['./candidate-list.component.css'],
// })
// export class CandidateListComponent extends AppComponentBase implements OnInit {
//     @ViewChild('dataTable') table: Table;
//     footerActionButton: Array<FooterActionButton>;
//     tab: any;
//     first = 0;
//     row = 10;
//     skipCount = 0;
//     maxResultCount = 1;
//     storeVariations: Array<any>;
//     storeCheck: boolean;
//     value: boolean;
//     candidateDTO: Array<CandidateDto>;
//     candidateRes: Array<CandidateDto>;
//     viewType: number;
//     candidateInterviewLocation: Array<CandidateInerviewLocationDto>;
//     candidateCategory: Array<CandidateCategoryDto>;
//     encryptionKeys: Array<EncryptionkeyDto>;
//     updatedBy: string;
//     updatedDate: string;
//     candidateDTO1: any;
//     Type: Array<number>;
//     dataset: any[]=[];
//     data:any;
//     Loading:boolean=false;
//    chartOptions: ChartOptions;
//    ChartPlugins = [];
//    itemName: any;
//    candidateItems: any;
//    tab1 : any
//   tab2 : any
//   tab3 : any
//   newArray: any;
//     constructor(
//         injector: Injector,
//         private cadidateService: CandidateServiceProxy,
//         private _ItemServiceProxy:ItemServiceProxy,
//         private candidateCategoryService: CandidateCategoryServiceProxy,
//         private candidateinterviewLocationService: CandidateInerviewLocationServiceProxy,
//         private decryptService: EncryptionDecryptionService,
//         private encryptionKeyService: EncryptionkeyServiceProxy,
//         private candidatePrintServiceProxy: CandidatePrintServiceProxy,
//         private dataSharedService: DataSharedService,
//         private fileDownloadService: FileDownloadService,
//         private renderer: Renderer2
//     ) {
//         super(injector);
//         this.isLoading = false;
//         this.storeVariations = [];
//         this.storeCheck = false;
//         this.value = true;
//         this.candidateDTO = [];
//         this.candidateRes = [];
//         this.itemName = []
//         this.candidateDTO1 = [];
//         this.viewType = 1;
//         this.candidateInterviewLocation = [];
//         this.candidateCategory = [];
//         this.encryptionKeys = [];
//         this.Type = [];
//         this.candidateItems = [];
//         this.tab = 1;
//         this.dataSharedService.viewTypedataChanged.subscribe((changed: any) => this.changedSubscriber(changed));
//     }

//     ngOnInit(): void {
//         this.getAllCandidateCategory();
//         this.getAllEncryptionKeys();
//         this.getAllCandidateInterviewLocation();
//         this.getAll();
//         this.GetDunutData();
//     }

//     onClick(check){
//         //    console.log(check);
//             if(check==1){
//               this.tab1 = 'tab1';
//             }else if(check==2){
//               this.tab1 = 'tab2';
//             }else if(check==3){
//               this.tab1 = 'tab3';
//             }else if(check==4){
//               this.tab1 = 'tab4';
//             } else if(check==5){
//               this.tab1 = 'tab5';
//             }
          
//         }

//         onClick1(check){
//             //    console.log(check);
//                 if(check==1){
//                   this.tab2 = 'tab1';
//                 }else if(check==2){
//                   this.tab2 = 'tab2';
//                 }else if(check==3){
//                   this.tab2 = 'tab3';
//                 }else if(check==4){
//                   this.tab2 = 'tab4';
//                 } else if(check==5){
//                   this.tab2 = 'tab5';
//                 }
              
//             }

//         onSwitch(check){
 
//             switch (check) {
//              case 1:
//                return 'tab1';
//              case 2:
//                return 'tab2';
//              case 3:
//                return 'tab3';
//                case 4:
//                 return 'tab4';
//                 case 5:
//                     return 'tab5';
//            }
//         }
//     paginate(event: { first: number }) {
//         this.first = event.first;
//         this.maxResultCount = (this.first + 1) * this.row; //10
//         this.skipCount = this.first * this.row;
//     }
//     onExpandRow(item: any) {
//         this.getAllfordetail(item.id);
//     }
//     handleChange(event: any) {}
//     getAllEncryptionKeys() {
//         this.encryptionKeyService
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe((data) => {
//                 if (data) {
//                     this.encryptionKeys = data.items;
//                 }
//             });
//     }
//     getAll() {
//         this.isLoading = true;
//         this.cadidateService
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 0,
//                 1000
//             )
//             .subscribe((data) => {
//                 if (data) {
//                     this.candidateDTO = data.items;
                
//                     this.candidateDTO.map(res => {
//                         this.candidateItems = {
//                             id: res.id,
//                             candidateCategoryId: res.candidateCategoryId,
//                             organizationUnitId: res.organizationUnitId,
//                             encryptionKeyId: res.encryptionKeyId,
//                             interviewDate: res.interviewDate,
//                             authenticateCandidate: res.authenticateCandidate,
//                             candidateArrived: res.candidateArrived,
//                             arrivalLocationViolation: res.arrivalLocationViolation,
//                             interviewed: res.interviewed,
//                             candidateExit: res.candidateExit,
//                             printStatus: res.printStatus,
//                             writeStatus: res.writeStatus,
//                             candidateWeight: res.candidateWeight,
//                             candidateGenotype: res.candidateGenotype,
//                             candidateBloodGroup: res.candidateBloodGroup,
//                             uniqueIdCode: res.uniqueIdCode,
//                             medicalConfirmationById: res.medicalConfirmationById,
//                             medicalStatus: res.medicalStatus,
//                             interviewbyId: res.interviewbyId,
//                             RFCode: res.refCode,
//                             photo: res.photo,
//                             CandidateName: this.decryptItem(res.candidateFirstName, res.encryptionKeyId) + ' ' + this.decryptItem(res.candidateLastName, res.encryptionKeyId),
//                             Category: this.getCandidateCategory(res.candidateCategoryId),
//                             InterviewLocation: this.getInterviewLocation(res.interviewLocation),
//                             status: res.candidateArrived,
//                             gender: this.getGender(res.gender),
//                             createdByName: this.getUserName(res.creatorUserId),
//                             role: this.getUserRole(res.creatorUserId),
//                             creationTime: res.creationTime.toString()
//                         } 
                        
//                         this.candidateRes.push(this.candidateItems)

//                     });
//                 }
//                 this.isLoading = false;
//             });
//     }

//     getAllfordetail(Id: number) {
//         this.isLoading = true;
//         this.cadidateService
//             .getAll(
//                 this.appSession.tenantId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 0,
//                 100
//             )
//             .subscribe((data) => {
//                 if (data) {
//                     this.candidateDTO1 = data.items.filter((x) => x.id === Id);
//                     console.log(this.candidateDTO1);
//                 }
//                 this.isLoading = false;
//             });
//     }

//     getDownloadFile(
//         Id: number,
//         categoryId: number,
//         organizationId: number,
//         EncryptionId: number,
//         InterViewDate: DateTime,
//         AuthenticateCandidate: boolean,
//         CandidateArrived: boolean,
//         ArrivalLocationViolation: boolean,
//         InterViewed: boolean,
//         CandidateExit: boolean,
//         PrintStatus: boolean,
//         WriteStatus: boolean,
//         CandidateWeight: string,
//         CandidateenoType: string,
//         CandidateBloodGroup: string,
//         UniqueIdCode: string,
//         MedicalonfirmationById: number,
//         MedicalStatus: MedicalStatus,
//         RefCode: string,
//         InterViewById: number,
//         Gender: Gender
//     ) {
//         this.cadidateService
//             .getCandidatesToExcel(
//                 this.appSession.tenantId,
//                 Id,
//                 undefined,
//                 categoryId,
//                 organizationId,
//                 EncryptionId,
//                 InterViewDate,
//                 AuthenticateCandidate,
//                 CandidateArrived,
//                 ArrivalLocationViolation,
//                 InterViewed,
//                 CandidateExit,
//                 PrintStatus,
//                 WriteStatus,
//                 CandidateWeight,
//                 CandidateenoType,
//                 CandidateBloodGroup,
//                 UniqueIdCode,
//                 MedicalonfirmationById,
//                 MedicalStatus,
//                 RefCode,
//                 undefined,
//                 undefined,
//                 InterViewById,
//                 Gender,
//                 undefined,
//                 0,
//                 1
//             )
//             .subscribe((res) => {
//                 let input = new FileDto();
//                 input.fileType = res.fileType;
//                 input.fileName = res.fileName;
//                 input.fileToken = res.fileToken;
//                 this.fileDownloadService.downloadTempFile(input);
//             });
//     }

//     getUserName(Id: number) {
//         let users = JSON.parse(localStorage.getItem('users'));
//         let name = '';
//         if (users) {
//             name = users
//                 .filter((x: { Id: any }) => x.Id === Id)
//                 .map((x: { name: any }) => x.name)
//                 .shift();
//         }
//         return name;
//     }

//     onTabChange(event: any) {
//         let currentTab = event.target.parentNode.id;
//         if (currentTab === 'tab1') {
//             this.tab = 1;

//         } else if (currentTab === 'tab2') {
//             this.tab = 2;
           
//         } else if (currentTab === 'tab3') {
//             this.tab = 3;
           
//         } else if (currentTab === 'tab4') {
//             this.tab = 4;
          
//         } else if (currentTab === 'tab5') {
//             this.tab = 5;
//         } else {
//             this.tab = 1;
//         }
//     }

//     getUserRole(Id) {
//         let users = JSON.parse(localStorage.getItem('users'));
//         let name = '';
//         if (users) {
//            let Role = users.filter(x => x.Id === Id).map(x => x.Roles).shift();
//            if (Role) {
//                 name = Role.map(x => x.roleName);
//            }
//          }
//          return name;
//       }
//     decryptItem(data: string, keyId: number) {
//         try {
//             let keyvalue = this.encryptionKeys.filter((x) => x.id === keyId).shift();
//             return this.decryptService.decrypt(data, keyvalue?.keyValue);
//         } catch (err) {}
//     }
//     ViewChange(event: { target: { id: any } }) {
//         let id = event.target.id;
//         if (id === 'card') {
//             this.viewType = 2;
//         } else {
//             this.viewType = 1;
//         }
//     }
//     getAllCandidateCategory() {
//         this.candidateCategoryService
//             .getAll(this.appSession.tenantId, undefined, undefined, 0, 1000)
//             .subscribe((data) => {
//                 if (data) {
//                     this.candidateCategory = data.items;
//                 }
//             });
//     }
//     getAllCandidateInterviewLocation() {
//         this.candidateinterviewLocationService
//             .getAll(this.appSession.tenantId, undefined, undefined, undefined, 0, 1000)
//             .subscribe((data) => {
//                 if (data) {
//                     this.candidateInterviewLocation = data.items;
//                 }
//             });
//     }
//     getCandidateCategory(id: number) {
//         return this.candidateCategory.filter((x) => x.id === id).map((x) => x.candidateCategoryName);
//     }
//     getInterviewLocation(id: number) {
//         return this.candidateInterviewLocation.filter((x) => x.id === id).map((x) => x.locationName);
//     }
//     getGender(id: any) {
//         switch (id) {
//             case Gender.Male:
//                 return 'M';
//             case Gender.Female:
//                 return 'F';
//             default:
//                 return '';
//         }
//     }
//     changedSubscriber(data: any) {
//         if (data === '') {
//             this.viewType = 1;
//         }
//         if (data) {
//             this.viewType = data.viewType;
//         }
//     }
//     updateGenericStatus(Type: number, canidate: CandidateDto) {
//         if (Type === 1) {
//             this.updatedDate = canidate.candidateArrivedDateTime?.toString();
//             this.updatedBy = this.getUserName(canidate.candidateArrivedSubmittedById);
//         } else if (Type === 2) {
//             this.updatedDate = canidate.candidateArrivedDateTime?.toString();
//             this.updatedBy = this.getUserName(canidate.candidateArrivedSubmittedById);
//         }
//     }
//     activateTab(event: { target: { parentNode: { parentNode: { parentElement: any } }; id: string } }) {
//         let target = event.target;
//         let parentElement = event.target.parentNode.parentNode.parentElement;
//         let parent = parentElement.querySelector('#pills-tabContent');
//         let alreadyExist = parent.querySelectorAll('.active');

//         [].forEach.call(alreadyExist, function (el: { className: string }) {
//             el.className = el.className.replace(/\bactive\b/, '');
//             el.className = el.className.replace(/\bshow\b/, '');
//         });
//         let el = parent.querySelector('#' + event.target.id);
//         this.renderer.addClass(el, 'active');
//         this.renderer.addClass(el, 'show');
//     }

//     GetDunutData()
//     {
//         this.Loading = true;
//         this._ItemServiceProxy.getItemPositionAnalytics(this.appSession.tenantId,undefined)
//         .subscribe((data:any)=>{

//            var result=data;
//          this.dataset.push(result.totalMissingItem,result.totalItemsInStock, result.totalItemsIssued,result.totalItemsDisplace,result.totalItemStatusUpdate);
//        this.data = {
//             labels:['Missing', 'Dispacked', 'Return',],
//             datasets: [
//                 {

//                     data:this.dataset,
//                     backgroundColor: [
//                         "#A3A3A3",
//                         "#FBBD00",
//                         "#5A99D3",
                       
//                     ],
//                     hoverBackgroundColor: [
//                         "#8E8E8E",
//                         "#EDB202",
//                         "#5389BC",
                      
//                     ],
//                     barPercentage:2

//                 }
//             ]
//         };
//         this.chartOptions= {
//             responsive: false,
//             maintainAspectRatio: false,
//             plugins: {
//                 labels: {
//                     render: 'percentage',
//                     precision: 2,
//                     fontColor: ['green', 'white', 'red']
//                 }
//             },
//             legend: {
//                 position: 'bottom',
//                 labels: {
//                     fontColor: 'white',

//                     filter:function(chart,data){
//                         let index=data.labels.indexOf(chart.text);
//                         if(index!=-1){
//                             let value=data.datasets[0].data[index];
//                             chart.text=chart.text+"                     "+value +"%";
//                         }

//                         return chart;
//                     } ,
//                     boxWidth:10
//                   },
//                   align:"center"

//             }
//           }
//         //    result.totalMissingItem=40;
//         //    result.totalItemsInStock=30;
//         //    result.totalItemsIssued=50;
//         //    result.totalItemsDisplace=60;
//         //    result.totalItemStatusUpdate=15;

//         //   this.dataset.push(result.totalMissingItem,result.totalItemsInStock, result.totalItemsIssued,result.totalItemsDisplace,result.totalItemsDisplace)
//         //    this.doughnutChartData;
//         //    this.doughnutChartData.push(result.totalMissingItem,result.totalItemsInStock, result.totalItemsIssued,result.totalItemsDisplace,result.totalItemStatusUpdate);
//         this.Loading  = false;
//         })
//     }
// }
