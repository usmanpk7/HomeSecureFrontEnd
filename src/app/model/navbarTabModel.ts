export class NavBarTabModel {
    isActiveValue: number;
    title: string;
    icon: string;
    name: string;
    route: string;
    constructor(_isActiveValue: number, _title: string, _icon: string, _name: string, _route: string) {
        this.isActiveValue = _isActiveValue;
        this.title = _title;
        this.icon = _icon;
        this.name = _name;
        this.route = _route;
    }
}
