// import { Component, ElementRef, Injector, OnInit, Renderer2, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { SharedGridColumnModel } from '@app/shared/custom/shared-grid/shared-grid.model';
// import { AppComponentBase } from '@shared/common/app-component-base';
// import { EncryptionDecryptionService } from '@shared/encryption-decryption.service';
// import {
//     CommentType,
//     CreateEpicRemarkInput,
//     CreateEqisCommentInput,
//     EqisCommentDto,
//     EqisCommentServiceProxy,
//     EqisRemarkDto,
//     EqisRemarkServiceProxy,
//     GetUserForEditOutput,
//     IntentRequestFormDto,
//     IntentRequestFormServiceProxy,
//     IRequestedItemDto,
//     ItemDto,
//     ProfileServiceProxy,
//     RemarkType,
//     RequestedItemDto,
//     RequestedItemServiceProxy,
//     ThemeSettingsDto,
//     UserServiceProxy,
//     EqisNoteServiceProxy,
//     FileUploadServiceProxy,
//     EqisNoteDto,
//     FileUploadDto,
// } from '@shared/service-proxies/service-proxies';
// import { DateTime } from 'luxon';
// import { saveAs } from 'file-saver';
// import { threadId } from 'worker_threads';
// import { AddPopupModelComponent } from '../Add-popup-Model/Add-popup-Model.component';
// import { AppConsts } from '@shared/AppConsts';
// @Component({
//     selector: 'app-intent-view',
//     templateUrl: './intent-view.component.html',
//     styleUrls: ['./intent-view.component.css'],
// })
// export class IntentViewComponent extends AppComponentBase implements OnInit {
//     @ViewChild('SaveModel', { static: true }) SaveModel: AddPopupModelComponent;
//     profilePicture = AppConsts.appBaseUrl + '/assets/common/images/default-profile-picture.png';
//     columns: Array<SharedGridColumnModel>;
//     intentId: any;
//     FilesDto: FileUploadDto[] = [];
//     IntentFormId: any;
//     GetFilesCount: number = 0;
//     IsParentDiv: boolean;
//     comments: Array<EqisCommentDto>;
//     remarks: Array<EqisRemarkDto>;
//     RequestedItemDto: Array<RequestedItemDto>;
//     intentDto: IntentRequestFormDto;
//     commentsType: CommentType;
//     profilePictureforNotesAndComment: string;
//     selectedOptionsText: any;
//     eqisNotesList: EqisNoteDto[] = [];
//     commentText: any;
//     commentlength: any;
//     IsAttachment: boolean = false;
//     HeaderText: string = '';
//     IsRemarkShow: boolean;
//     IsRemarkBtnHide: boolean;
//     RemarksText: any;
//     value1: number;
//     value2: number;
//     value3: number;
//     getFile: boolean = false;
//     Notes: boolean = false;
//     getComments: boolean = true;
//     value4: number;
//     value5: number;
//     user: GetUserForEditOutput;
//     constructor(
//         private route: ActivatedRoute,
//         private indtentProxy: IntentRequestFormServiceProxy,
//         private EqisCommentsProxy: EqisCommentServiceProxy,
//         private intentRequestItemService: RequestedItemServiceProxy,
//         private EqisRemarksProxy: EqisRemarkServiceProxy,
//         private elRef: ElementRef,
//         private renderer: Renderer2,
//         private userServiceProxy: UserServiceProxy,
//         private profileServiceProxy: ProfileServiceProxy,
//         private encryptionDecryptionService: EncryptionDecryptionService,
//         private getfiles: FileUploadServiceProxy,
//         private EqisNoteProxy: EqisNoteServiceProxy,
//         private _profileServiceProxy: ProfileServiceProxy,
//         injector: Injector
//     ) {
//         super(injector);
//         this.columns = [
//             new SharedGridColumnModel('Store Name'),
//             new SharedGridColumnModel('Category'),
//             new SharedGridColumnModel('Qty/Wieght'),
//         ];
//         this.intentDto = null;
//         this.RequestedItemDto = [];
//         this.comments = [];
//         this.remarks = [];
//         this.IsParentDiv = false;
//         this.IsRemarkShow = false;
//         this.RemarksText = '';
//         this.commentText = '';
//         this.value1 = 100;
//         this.value2 = 89;
//         this.value3 = 70;
//         this.value4 = 50;
//         this.value5 = 30;
//     }

//     ngOnInit(): void {
//         this.getIntentReuqest();
//     }

//     showfile() {
//         this.getComments = false;
//         this.getFile = true;
//         this.Notes = false;
//         this.commentlength = 0;
//         this.selectedOptionsText = 'Files';
//         this.getfiles
//             .getAll(
//                 this.appSession.tenantId,
//                 '',
//                 undefined,
//                 1,
//                 1,
//                 this.intentId,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 undefined,
//                 '',
//                 0,
//                 100
//             )
//             .subscribe((data: any) => {
//                 this.FilesDto = data.items;
//                 this.GetFilesCount = data.items.length;
//             });
//     }
//     getIntentReuqest() {
//         this.route.queryParams.subscribe((params) => {
//             this.intentId = params.id;
//             this.getIntentComments(this.intentId);
//             this.getallIntentRemark(this.intentId);
//             this.indtentProxy.get(this.intentId).subscribe((data) => {
//                 this.intentDto = data;
//                 this.getUserDetail(this.intentDto.creatorUserId);
//                 this.intentRequestItemService
//                     .getAll(this.appSession.tenantId, undefined, this.intentDto.id, undefined, 0, 1000)
//                     .subscribe((data) => {
//                         this.RequestedItemDto = [];
//                         this.RequestedItemDto = data.items;
//                     });
//             });
//         });
//     }
//     getIntentReason(id) {
//         switch (id) {
//             case 1:
//                 return 'A';
//             case 2:
//                 return 'B';
//             default:
//                 return 'C';
//         }
//     }
//     getIntentClass(id) {
//         switch (id) {
//             case 1:
//                 return 'Special';
//             default:
//                 return 'Priority';
//         }
//     }
//     GetfileName(name: string) {
//         return name.split('http://161.97.137.187:1006//UploadFiles//');
//     }
//     AddAttachmentPopup() {
//         this.IsAttachment = true;
//         this.HeaderText = 'Select image';
//         this.IntentFormId = this.intentId;
//         this.SaveModel.displayResponsive = true;
//     }
//     AddNotes() {
//         this.IsAttachment = false;
//         this.HeaderText = 'Enter Your Note';
//         this.IntentFormId = this.intentId;
//         this.SaveModel.displayResponsive = true;
//     }
//     getIntentComments(intentId) {
//         this.EqisCommentsProxy.getAll(
//             this.appSession.tenantId,
//             undefined,
//             intentId,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             0,
//             1000
//         ).subscribe((data) => {
//             this.comments = data.items;
//             this.commentlength = data.items.length;
//             this.selectedOptionsText = 'Comments';
//         });
//     }
//     appendCommentArea(event, commentId, intentId) {
//         let prevelement = this.elRef.nativeElement.querySelector('.comment-textarea');
//         this.IsParentDiv = false;
//         if (prevelement) {
//             prevelement.remove();
//         }
//         let parentDiv = event.target.closest('div').parentNode;
//         let textarea: HTMLTextAreaElement = this.renderer.createElement('textarea');
//         textarea.style.width = '100%';
//         textarea.rows = 3;
//         let div2: HTMLDivElement = this.renderer.createElement('div');
//         div2.className = 'col-md-12 pt-3';
//         div2.style.textAlign = 'end';

//         let a: HTMLAnchorElement = this.renderer.createElement('a');
//         a.innerHTML = 'Save';
//         a.className = 'btn btn-sm f-w';
//         this.renderer.listen(a, 'click', (event) => this.ReplyComment(commentId, intentId));

//         let a2: HTMLAnchorElement = this.renderer.createElement('a');
//         a2.innerHTML = 'Cancel';
//         a2.className = 'btn btn-sm f-w';
//         this.renderer.listen(a2, 'click', (event) => this.cancelComment());

//         this.renderer.appendChild(div2, a);
//         this.renderer.appendChild(div2, a2);

//         let div: HTMLDivElement = this.renderer.createElement('div');
//         div.className = 'col-md-12 comment-textarea pt-2 pb-2';
//         this.renderer.appendChild(div, textarea);
//         this.renderer.appendChild(div, div2);
//         parentDiv.append(div);
//     }
//     filterParentComments() {
//         return this.comments.filter((x) => x.isParent === true);
//     }

//     getProfilePicture(userId: number): void {
//         if (!userId) {
//             this.profilePicture = this.appRootUrl() + 'assets/common/images/default-profile-picture.png';
//             return;
//         }

//         this.profileServiceProxy.getProfilePictureByUser(userId).subscribe((result) => {
//             if (result && result.profilePicture) {
//                 this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//             } else {
//                 this.profilePicture = this.appRootUrl() + 'assets/common/images/default-profile-picture.png';
//             }
//         });
//     }

//     filterChileComments(ParentId) {
//         return this.comments.filter((x) => x.noteParentId === ParentId);
//     }
//     ReplyComment(id, intentId): void {
//         this.SaveComment(id, intentId, false);
//     }
//     cancelComment() {
//         let div = this.elRef.nativeElement.querySelector('.comment-textarea');
//         if (div) {
//             div.remove();
//         }
//         this.IsParentDiv = false;
//     }
//     getallIntentRemark(intentId) {
//         this.EqisRemarksProxy.getAll(
//             this.appSession.tenantId,
//             undefined,
//             intentId,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             RemarkType.Indent,
//             undefined,
//             0,
//             1000
//         ).subscribe((data) => {
//             this.remarks = data.items;
//         });
//     }
//     SaveComment(id, intentId, IsParent) {
//         let model = new CreateEqisCommentInput();
//         let text = this.commentText;
//         if (!IsParent) {
//             text = this.elRef.nativeElement.querySelector('.comment-textarea textarea').value;
//             model.isParent = false;
//             model.noteParentId = id;
//         } else {
//             model.isParent = true;
//             model.noteParentId = null;
//         }
//         model.noteDescription = text;
//         model.tenantId = this.appSession.tenantId;
//         model.commentType = CommentType.Indent;
//         model.userAssignedId = this.appSession.userId;
//         model.createdBy = this.appSession.user.name;
//         model.intentAssignId = intentId;

//         if (model.noteDescription !== '') {
//             this.EqisCommentsProxy.create(model).subscribe((data) => {
//                 if (data) {
//                     this.notify.success('succesfull');
//                     this.getIntentComments(intentId);
//                     this.IsParentDiv = false;
//                     this.commentText = '';
//                 }
//             });
//         }
//     }
//     ShowComment() {
//         this.getComments = true;
//         this.getFile = false;
//         this.Notes = false;
//         this.cancelComment();
//         this.IsParentDiv = true;
//         this.getIntentComments(this.intentId);
//     }
//     downloadeFile(url: string) {
//         var filename = url.split('http://161.97.137.187:1006//UploadFiles//');
//         saveAs(url, filename);
//     }
//     loadNotes() {
//         this.Notes = true;
//         this.getComments = false;
//         this.getFile = false;
//         this.commentlength = 0;
//         this.selectedOptionsText = 'Notes';
//         this.LoadNotes();
//     }
//     AddRemark(intentId) {
//         let text = this.RemarksText;
//         if (text !== '') {
//             let model = new CreateEpicRemarkInput();
//             model.intentAssignId = this.intentId;
//             model.tenantId = this.appSession.tenantId;
//             model.remarkType = RemarkType.Indent;
//             model.createdBy = this.appSession.user.name;
//             model.remarkDescription = text;

//             this.EqisRemarksProxy.create(model).subscribe((data) => {
//                 if (data) {
//                     this.getallIntentRemark(this.intentId);
//                     this.notify.success('success');
//                     this.IsRemarkShow = false;
//                     this.RemarksText = '';
//                     this.IsRemarkBtnHide = false;
//                 }
//             });
//         }
//     }
//     ShowRemark() {
//         this.IsRemarkShow = true;
//         this.IsRemarkBtnHide = true;
//     }
//     CancelRemark() {
//         this.IsRemarkBtnHide = false;
//         this.IsRemarkShow = false;
//     }
//     getUserDetail(Id) {
//         this.userServiceProxy.getUserForEdit(Id).subscribe((data) => {
//             if (data) {
//                 this.user = data;
//             }
//             this.getProfilePicture(Id);
//         });
//     }
//     getuserName() {
//         return this.user.user.name + ' ' + this.user.user.surname;
//     }
//     getUserRole() {
//         let roles = this.user.roles;
//         if (roles) {
//             return roles
//                 .filter((x) => x.isAssigned === true)
//                 .map((x) => x.roleDisplayName)
//                 .join('| ');
//         }
//     }
//     decryptItemName(item) {
//         try {
//             const data = this.encryptionDecryptionService.decrypt(item.itemName);
//             return data;
//         } catch (err) {}
//     }
//     LoadNotes() {
//         this.EqisNoteProxy.getAll(
//             this.appSession.tenantId,
//             '',
//             this.intentId,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             undefined,
//             '',
//             0,
//             100
//         ).subscribe((data: any) => {
//             this.eqisNotesList = data.items;
//             this.getProfilePictureforNotesAndComment();
//         });
//     }
//     getProfilePictureforNotesAndComment(): void {
//         this._profileServiceProxy.getProfilePicture().subscribe((result) => {
//             if (result && result.profilePicture) {
//                 this.profilePicture = 'data:image/jpeg;base64,' + result.profilePicture;
//             }
//         });
//     }
// }
