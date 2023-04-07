
// import { Component, EventEmitter, Injector, OnInit, Output, ViewChild } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { DailogComponent } from '@app/shared/custom/dailog/dailog.component';
//  import { AppComponentBase } from '@shared/common/app-component-base';
//  import { HttpClient } from '@angular/common/http';
// import { CreateIssueProvisionInput, IntentFormDetail, IntentRequestFormDto, IntentRequestFormServiceProxy, IssueProvisionDto, IssueProvisionItemDto, IssueProvisionItemServiceProxy, IssueProvisionServiceProxy, IssueRequestServiceProxy, ItemCategoriesDto, ItemCategoriesServiceProxy, ItemCategoryDto, ItemCategoryServiceProxy, ItemDto, RequestedItemDto, RequestedItemServiceProxy, WareHouseServiceProxy } from '@shared/service-proxies/service-proxies';
// import { Product, ProductService } from '../testService';
// import { IssueProvisionForm } from '@app/model/IssueRequest';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import { parse } from 'path';
// import { forkJoin, Observable, observable, of } from 'rxjs';
// declare var $: any;
// @Component({
//   selector: 'app-IssueProvisios',
//   templateUrl: './IssueProvisios.component.html',
//   styleUrls: ['./IssueProvisios.component.css']
// })
// export class IssueProvisiosComponent extends AppComponentBase implements OnInit {
//     IssuePRovision: FormGroup;
//     intentRequestForm: any;
//     IssueRequestForm: any = [];
//     products: Product[];
//     intentNo: number;
//     responsiveOptions: any;
//     RemainingVal:any;
//     RequestFormIdForEdit:number=0;
//     IssueDepotNumberForEdit:number=0;
//     wherehouseNumber: any = [];
//     displayResponsive: boolean;
//     GridData: IntentFormDetail;
//     IssueProvision = new CreateIssueProvisionInput();
//     cities: dropdown[];
//     selectedIntentNumber: dropdown;
//     selectedIssueRequest: dropdown;
//     selectedWarehouseNumber: dropdown;
//     categories: Array<ItemCategoriesDto>;
//     requestedItemCategories: Array<ItemCategoryDto>;
//     selectedValue: string;
//     selectedItems: Array<any>;
//     isSubmit: boolean;
//     @ViewChild('modalCreate', { static: true }) modalCreate: DailogComponent;
//     @Output("gridload") gridload: EventEmitter<any> = new EventEmitter();
//   constructor(  injector: Injector,
//     private intentRequestFormProxy: IntentRequestFormServiceProxy,
//     private requestedItemServiceProxy: RequestedItemServiceProxy,
//     private _encryptionDecryptionService: EncryptionDecryptionService,
//     private issueRequestServiceProxy: IssueRequestServiceProxy,
//     private issueProvisionServiceProxy: IssueProvisionServiceProxy,
//     private wareHouseServiceProxy: WareHouseServiceProxy, private productService: ProductService,
//     private itemCategoriesServiceProxy: ItemCategoriesServiceProxy,
//     private itemCategoryServiceProxy: ItemCategoryServiceProxy) {
//     super(injector);
//     this.cities = [
//         {name: 'New York', code: 'NY'},
//         {name: 'Rome', code: 'RM'},
//         {name: 'London', code: 'LDN'},
//         {name: 'Istanbul', code: 'IST'},
//         {name: 'Paris', code: 'PRS'},
//         {name: 'Istanbul', code: 'IST'},
//         {name: 'Paris', code: 'PRS'},
//         {name: 'Istanbul', code: 'IST'},
//         {name: 'Paris', code: 'PRS'},
//         {name: 'Istanbul', code: 'IST'},
//         {name: 'Paris', code: 'PRS'},
//         {name: 'Istanbul', code: 'IST'},
//         {name: 'Paris', code: 'PRS'},
//         {name: 'Istanbul', code: 'IST'},
//         {name: 'Paris', code: 'PRS'}
//     ];
//     this.responsiveOptions = [
//         {
//             breakpoint: '1024px',
//             numVisible: 3,

//             numScroll: 3
//         },
//         {
//             breakpoint: '768px',
//             numVisible: 2,

//             numScroll: 2
//         },
//         {
//             breakpoint: '560px',
//             numVisible: 1,

//             numScroll: 1
//         }
//     ];
//     this.intentRequestForm = [];
//     this.IssuePRovision = new FormGroup({
//         requestedItemId: new FormControl(0, Validators.required),
//         issueRequestId: new FormControl(0, Validators.required),
//         issuingDepot: new FormControl(2,Validators.required),
//         wareHouseId: new FormControl(0, Validators.required),
//         qtyIssued: new FormControl(0,Validators.required),
//         qtyFollowed: new FormControl(0, Validators.required),
//         itemId:new FormControl(0)
//     });
//   this.categories = [];
//   this.requestedItemCategories = [];
//   this.selectedItems = [];
// this.isSubmit = false;
//   }

//   ngOnInit() {
//         this.IssueProvision.issueDepotId = 1;
//         this.productService.getProductsSmall().then(products => {
//         this.products = products;
//     });

//     this.getAllIssueRequest();

//     this.getAllIndent();
//     this.GetWarehouse();
//     this.getAllCategories();
//     this.isLoading = false;
//   }
// openIssueProvisiosmodel(requestItemId:number,issuingDepot:number,issueOrderId:number,wherehouseNumber:number) {
//     this.displayResponsive = true;
//     if(requestItemId > 0)
//     {
//         this.RequestFormIdForEdit=requestItemId;
//         this.IssueDepotNumberForEdit=issuingDepot;
//         this.IssuePRovision.patchValue({requestedItemId:requestItemId})
//         this.IssuePRovision.patchValue({issueRequestId:issueOrderId});
//         this.IssuePRovision.patchValue({issuingDepot:issuingDepot});
//         this.IssuePRovision.patchValue({wareHouseId:wherehouseNumber});
//         this.IssuePRovision.get('requestedItemId').disable();
//         this.IssuePRovision.get('requestedItemId').disable();
//         this.IssuePRovision.get('issueRequestId').disable();
//         this.IssuePRovision.get('wareHouseId').disable();

//     }
//     this.reset();
//     // this.modalCreate.show();
// }
// close(): void {
//     this.displayResponsive = false;
//   }
// fetchData() {
//     let intentNumber = this.IssuePRovision.get('requestedItemId').value;
//     if (intentNumber !== undefined) {
//         this.GetDataForGridBasedOnIntentId(intentNumber);
//     }

// }
// //Value are comping dycript form
// decriptName(name:string)
// {
//   return  this._encryptionDecryptionService.decrypt(name);
// }

// calculatevalue(val: any, value: any, index, requestedItemId) {
//      if ( val.target.value !== '0' &&  val.target.value !== '') {
//        if (this.selectedItems.some(x => x.id === requestedItemId)) {
//         this.removeRequestedItem(requestedItemId);
//     }
//        let item = {
//         id: requestedItemId,
//         qtyFollowed: Number(val.target.value),
//         qtyIssued: value
//     };
//         this.selectedItems.push(item);
//      } else {
//         this.removeRequestedItem(requestedItemId);
//      }
//      (<HTMLInputElement>document.getElementById('Remaining' + index)).value =
//      (value - (Number(val.target.value))).toString();
// }
// removeRequestedItem (Id) {
//     let item = this.selectedItems.findIndex(x => x.id === Id);
//     this.selectedItems.splice(item, 1);
// }
// getAllIndent() {

//     this.intentRequestFormProxy.getAll(undefined,this.appSession.tenantId, undefined, undefined, undefined,0, 1000)
//         .subscribe(data => {
//             // this.IssuePRovision.value('requestedItemId').value=data.items[0].id;

//                data.items.map(m => {
//                 this.intentRequestForm.push({name: m.intentNo, code: m.id});
//             });
//             this.IssuePRovision.patchValue({
//                 requestedItemId: data.items[0].id,
//               });
//         });
// }

// GetWarehouse() {
//     this.wareHouseServiceProxy.getAll(this.appSession.tenantId, undefined, undefined, undefined, undefined, 0, 100).subscribe((data: any) => {
//         data.items.map(m => {
//             this.wherehouseNumber.push({name: m.name, code: m.id});
//         });
//         // this.IssuePRovision.patchValue({
//         //     wareHouseId: data.items[0].id,
//         //   });
//     });
// }
// getAllIssueRequest() {
//    this.issueRequestServiceProxy.getAll(undefined, this.appSession.tenantId, undefined, undefined, undefined, undefined, undefined, undefined, undefined).subscribe(res => {
//     res.items.map(m => {
//             this.IssueRequestForm.push({name: m.id, code: m.id});
//         });

//     });
//   }

// GetDataForGridBasedOnIntentId(id: number) {
//     this.reset();
//     // this.intentRequestFormProxy.getIndentTotalRequestedItem(this.appSession.tenantId, id).subscribe((res: any) => {
//     //    this.GridData = res.intentFormDetails[0];
//     // });
//     this.isLoading = true;
//     this.requestedItemServiceProxy.getAll(this.appSession.tenantId,undefined,id,'',undefined,undefined).subscribe((res: any) => {
//         this.GridData = res.items;
//         this.getRequestItemCategories(res.items);
//         });
//     }
//     getRequestItemCategories(items: Array<RequestedItemDto>) {
//         let ids = [];
//         forkJoin(
//              items.map(item2 => {
//                 this.categories.filter(item => item.itemID === item2.item.id
//                 ).map(x => {
//                   ids.push(x.categoryId);
//                 });
//                 return ids;
//                   })
//         ).subscribe((id: Array<number>) => {
//             if (id.length > 0) {
//                 let filters = ids.filter((value, index, self) => self.indexOf(value) === index);
//                 forkJoin(
//                     filters.map(item => {
//                         return this.itemCategoryServiceProxy.get(item);
//                     })
//                 ).subscribe( (res: Array<ItemCategoryDto>) => {
//                     this.isLoading = false;
//                     if (res.length > 0) {
//                         this.requestedItemCategories = res;
//                     }
//                 });
//     }
//         },
//         err => {
//             this.isLoading = false;
//             console.log('err');
//         },
//         () => {
//             this.isLoading = false;
//         }
//         );

//     }
//     getAllCategories() {
//         this.itemCategoriesServiceProxy.getAll(this.appSession.tenantId , undefined, undefined, 0, 1000)
//         .subscribe(data => {
//          if (data) {
//          this.categories = data.items;
//          }
//         });
//     }
// Save(data: any) {
//     if (this.selectedItems.length >  0) {
//         this.isSubmit = true;
//  forkJoin(
//     this.selectedItems.map(item => {

//     this.IssueProvision.tenantId = Number(this.appSession.tenantId);
//     this.IssueProvision.requestedItemId = item.id;
//     this.IssueProvision.issueRequestId = this.IssuePRovision.get('issueRequestId').value;
//     if (data.issuingDepot === undefined) {
//         this.IssueProvision.issueDepotId = this.IssueDepotNumberForEdit;
//     } else {
//         this.IssueProvision.issueDepotId = Number(data.issuingDepot);
//     }
//     this.IssueProvision.warehouseId = Number(this.IssuePRovision.get('wareHouseId').value);
//      this.IssueProvision.qtyFollowed = item.qtyFollowed;
//      this.IssueProvision.qtyIssued = item.qtyIssued;

//     return this.issueProvisionServiceProxy.create(this.IssueProvision);
// })
//  ).subscribe((res: Array<IssueProvisionDto>) => {
//     this.isSubmit = false;
//     if (res != null) {
//         this.notify.success('Save Successfully');
//         this.gridload.emit();
//         this.reset();
//     } else {
//         this.notify.success('Some things went wrong');
//     }
// },
// err => {
//     this.isSubmit = false;
// }
// );
// } else {
//     this.notify.warn('Please enter some quantity!');
// }
// }

// Base64ToImage(base64img, callback) {
//     var img = new Image();
//     img.onload = function() {
//         callback(img);
//     };
//     img.src = base64img;
// }
// getCategoryName(id) {
//     let name = '';
//     let cat = this.categories.filter(x => x.itemID === id);
//     if (cat.length > 0) {
//         let item = this.requestedItemCategories.filter( x => x.id === cat.shift()?.categoryId).shift();
//         if (item) {
//             name = item.categoryName;
//         }
//     }
//     return name;
// }
// reset() {
//     this.IssueProvision.qtyFollowed = 0;
//     this.selectedItems = [];
//     this.requestedItemCategories = [];
//     this.GridData = null;
// }
// }
// interface dropdown {
//     name: string;
//     code: string;
// }




// /// Base 64 Converter



// // function getBase64Img() {
// //     return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAMFBMVEX////7+/vr6+vNzc2qqqplywBWrQD/Y5T/JTf+AADmAABeeEQvNydqAAAGBAMAAAGoF14oAAAEBUlEQVR42u2WTUwUVxzA/2925LIojsyqCLtMqSQeFJeFROPHstjdNkZdkaiX9mRTovYgSYNFE43Rg5IeNG5SqyaVcGzXkvTm7hZWq9bKriAYYzSLBI3WAplp0jY2kV3fzPuYGcBxD/bmO0zevPeb//f7v0FQ5EDvwf8LFG89ixYDol9Wo+smKal2sHF6kM6q7qbE5tY03d7SHR6ygiuvwY1txkzIlPaD3NQ4Zryk/PCP1wKibBlI97dq+idXUxqgcEkVnruS/smRpuWaCbrHU5pc/wyTQsata0U77wVBTlRP9UNkT9oE61K9AHL9VERbeTVurMjNm54mqrFw8CwKmWBfpf6V2Dx/TdxN3YjMf2JwIEZ8JnjnEbEjvLAQZ1EKlxkciJ9UcdD1Z5ztDmgsgPIrMkWtMgfd41xOYXZOIjUcLB3tdchypHWIgb5k2gH0nE0zMHjRCRTLWxgY/VQrDuybcAQ/DDEwmwEn8COlSDBcTUE0GXcEjRzqoDDhDH7sfccg2szAt9hogjBFQFRmDyd9N1VTEFegXXKEVKQFJHEUd0DSKhLthIm0HSQpnNdCNizgq147GP0m7QTygNMye6NqM9ekwlG4kLI5I4cMZ+bVhMA8MwX1rw9oIjakAYX6jXlBRRJ4BF6PwmRSfQyLFhJwWy/IG8khKuirljODG0DfGAd3qCBNEol5vCqFAxqYLeUyB0H2A2Q0DspRD3BQfJEc5KBl6KprG6pNEPqqfkKzOQBsha2bQeVw6g3nSySaGYgb99ylhsLDLVYQ3E+oozOGHKzVbCBs+HkuUm6ivd4E0ZYeNTPTTrn51+0wA9TJgpZVLeaV1y+4yS8c64W0/AcFTBCHK/fFEMwFAmo4KRldE0ZxsF8cGbTuzYqHtOz8t6e8TMk5CcjNSC+kdcfgPyag9AoDhUQARmvAcIiAW3v0JzWJg64BJXdBQ21+/b4zwMqRW5dA2h3I7+onYJd+Y4i3FbyMxz4hxE7hS2MBdSq6Fgq6Bny/dxv6Sk76COj6Yz91ZG8dToQ7oYNCqu4QjX9FK5UoPt/PXO701mruhwcxGP2ecahzzxBtUtlzLHclsXtBA6wc+a2brlUc8TCvg5cPM7LiaOPT8Y4ub3bpAbqy+MQ18xRmvIe5nr83YXDt8Nca0/GveWniSHByybEVwx1dD1ccYB/6yF8DTaGcYLFA391o6DjjohaWfKXQ/xCWazmhPDhNbYf2WH4fse9zhRUkLwrXlUD+9iVD5HR77KWheclxkqsZ1bM+pqcWZ2xVe0zXjPb6pyO8IK1l5trcA7mLKuo48+VpQG0BuPmZeTbs9Vi+9oQyqv6Ieyou4FybU+HqRS4o+TH1VG7MvgFFjvfguwFfA4FobmCxcnTPAAAAAElFTkSuQmCC";
// // }
// // var base64img = getBase64Img();
// // function Base64ToImage(base64img, callback) {
// //     var img = new Image();
// //     img.onload = function() {
// //         callback(img);
// //     };
// //     img.src = base64img;
// // }
// // Base64ToImage(base64img, function(img) {
// //     document.getElementById('main').appendChild(img);
// //     var log = "w=" + img.width + " h=" + img.height;
// //     document.getElementById('log').value = log;
// // });
