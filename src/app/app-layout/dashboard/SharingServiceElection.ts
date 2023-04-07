import { Injectable } from '@angular/core';

@Injectable()
export class SharingServiceElection {
    private data: any = undefined;
    private postData: any = undefined;
    private dataElectionResult: any;
    private electionPostGalleryData: any = undefined;
    private dataElectionUnitResult: any = undefined;
    private topfivewinner: any = undefined;

    setElectonPostData(data: any) {
        this.postData = data;
    }
    getElectonPostData() {
        return this.postData;
    }

    setData(data: any, topfivewinner) {
        this.data = data;
        this.topfivewinner = topfivewinner;
    }
    setElectionResultData(data: any) {
        this.dataElectionResult = data;
    }
    setElectionResultDataByLocalStorage(data: any) {
        localStorage.setItem('dataElectionResult', JSON.stringify(data));
    }
    getElectionResultDataByLocalStorage() {
        return JSON.parse(localStorage.getItem('dataElectionResult'));
    }
        setElectionPostGalleryData(data: any) {
        this.electionPostGalleryData = data;
    }
    setElectionPostUnit(data: any) {
        this.dataElectionUnitResult = data;
    }
    getElectionPostUnit(): any {
        return this.dataElectionUnitResult;
    }

    getData(): any {
        return this.data;
    }
    gettopFiveData(): any {
        return this.topfivewinner;
    }
    getElectionResultData(): any {
        return this.dataElectionResult;
    }
    getElectionPostGalleryData(): any {
        return this.electionPostGalleryData;
    }



}
