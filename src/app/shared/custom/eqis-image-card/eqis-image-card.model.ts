export class EqisImageCardModel {
    imageUrl: string;
    title: number;
    primaryValue: number;
    secondaryValue: number;
    constructor(_imageUrl: string, _title: number, _primaryValue: number, _secondaryValue: number,) {
        this.imageUrl = _imageUrl;
        this.title = _title;
        this.primaryValue = _primaryValue;
        this.secondaryValue = _secondaryValue;
    }
}
