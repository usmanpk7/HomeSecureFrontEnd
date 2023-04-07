import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri; // Esri TypeScript Types

@Component({
    selector: 'app-esri-map',
    templateUrl: './esri-map.component.html',
    styleUrls: ['./esri-map.component.css'],
})
export class EsriMapComponent implements OnInit {
    constructor(private http: HttpClient) {}
    ngOnInit() {
    //   this.filterByLocalBoundries();
    }
    // @Output() mapLoadedEvent = new EventEmitter<boolean>();

    // @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

    
    // private _zoom = 10;
    // private _center: Array<number> = [0.1278, 51.5074];
    // private _basemap = 'streets';
    // private _loaded = false;
    // private _view: esri.MapView = null;
    // boundryLayer: any;
    // gisPopUp: any;

    // get mapLoaded(): boolean {
    //     return this._loaded;
    // }

    // @Input()
    // set zoom(zoom: number) {
    //     this._zoom = zoom;
    // }

    // get zoom(): number {
    //     return this._zoom;
    // }

    // @Input()
    // set center(center: Array<number>) {
    //     this._center = center;
    // }

    // get center(): Array<number> {
    //     return this._center;
    // }

    // @Input()
    // set basemap(basemap: string) {
    //     this._basemap = basemap;
    // }

    // get basemap(): string {
    //     return this._basemap;
    // }

    // constructor(private http: HttpClient) {}

    // async initializeMap(gisPopUp:any, geoJsonPath:string,) {
    //     try {
    //         // Load the modules for the ArcGIS API for JavaScript
    //         const [EsriMap, EsriMapView, FeatureLayer, GeoJSONLayer, Graphic] = await loadModules([
    //             'esri/Map',
    //             'esri/views/MapView',
    //             'esri/layers/FeatureLayer',
    //             'esri/layers/GeoJSONLayer',
    //             'esri/Graphic',
    //         ]);

    //         const mapProperties = {
    //             basemap: this._basemap,
    //         };

    //         const map = new EsriMap(mapProperties);
    //         var url: string = '';
    //         this.http
    //             .get(geoJsonPath, { responseType: 'blob' })
    //             .subscribe((res) => {
    //                 url = URL.createObjectURL(res);
    //                 const layer = new GeoJSONLayer({
    //                     url: url,
    //                     popupTemplate: gisPopUp,
    //                 });

    //                 map.add(layer);
    //                 // Initialize the MapView
    //                 const mapViewProperties: esri.MapViewProperties = {
    //                     container: this.mapViewEl.nativeElement,
    //                     center: this._center,
    //                     zoom: this._zoom,
    //                     map: map,
    //                 };

    //                 this._view = new EsriMapView(mapViewProperties);
    //                 this._view.whenLayerView(layer).then((layerView) => {
    //                     this.boundryLayer = layerView;
    //                 });
    //                 // await this._view.when();
    //                 return this._view;
    //             });
    //     } catch (error) {
    //         console.log('EsriLoader: ', error);
    //     }
    // }

    // ngOnInit() {
    //   this.filterByLocalBoundries();
    // }

    // ngOnDestroy() {
    //     if (this._view) {
    //         // destroy the map view
    //         this._view.container = null;
    //     }
    // }

    // async filterByLocalBoundries(){
    //   const popuplocalBoundries = {
    //     title: 'GRID3_Nigeria_-_Local_Government_Area_Boundaries',
    //     content:
    //         '<table class="table table-striped">' +
    //         '<tbody>' +
    //         '<tr><td>OBJECTID</td><td>{OBJECTID}</td></tr>' +
    //         '<tr><td>lga_code</td><td>{lga_code}</td></tr>' +
    //         '<tr><td>state_code</td><td>{state_code}</td></tr>' +
    //         '<tr><td>lga_name_x</td><td>{lga_name_x}</td></tr>' +
    //         '<tr><td>mean</td><td>{mean}</td></tr>' +
    //         '<tr><td>Shape__Area</td><td>{Shape__Area}</td></tr>' +
    //         '<tr><td>Shape__Length</td><td>{Shape__Length}</td></tr>' +
    //         '</tbody></table>',
    // };
    //   await this.initializeMap(popuplocalBoundries,'/assets/geojson/GRID3_Nigeria_-_Local_Government_Area_Boundaries.geojson').then((mapView) => {
    //     // The map has been initialized
    //     console.log('mapView ready: ', this._view.ready);
    //     this._loaded = this._view.ready;
    //     this.mapLoadedEvent.emit(true);
    // });
    // }
    // async filterByStateBoundries(){
    //   const popuplocalBoundries = {
    //     title: 'GRID3_Nigeria_-_State_Boundaries',
    //     content:
    //         '<table class="table table-striped">' +
    //         '<tbody>' +
    //         '<tr><td>FID</td><td>{FID}</td></tr>' +
    //         '<tr><td>globalid</td><td>{globalid}</td></tr>' +
    //         '<tr><td>uniq_id</td><td>{uniq_id}</td></tr>' +
    //         '<tr><td>statename</td><td>{statename}</td></tr>' +
    //         '<tr><td>statecode</td><td>{statecode}</td></tr>' +
    //         '<tr><td>capcity</td><td>{capcity}</td></tr>' +
    //         '<tr><td>geozone</td><td>{geozone}</td></tr>' +
    //         '</tbody></table>',
    // };
    //   await this.initializeMap(popuplocalBoundries,'/assets/geojson/GRID3_Nigeria_-_State_Boundaries.geojson').then((mapView) => {
    //     // The map has been initialized
    //     console.log('mapView ready: ', this._view.ready);
    //     this._loaded = this._view.ready;
    //     this.mapLoadedEvent.emit(true);
    // });
    // }
    // async filterByWardBoundries(){
    //   const popuplocalBoundries = {
    //     title: 'GRID3_Nigeria_-_Ward_Boundaries',
    //     content:
    //         '<table class="table table-striped">' +
    //         '<tbody>' +
    //         '<tr><td>OBJECTID</td><td>{OBJECTID}</td></tr>' +
    //         '<tr><td>ward_cd</td><td>{ward_cd}</td></tr>' +
    //         '<tr><td>stat_cd</td><td>{stat_cd}</td></tr>' +
    //         '<tr><td>lga_cod</td><td>{lga_cod}</td></tr>' +
    //         '<tr><td>wrd_nm_x</td><td>{wrd_nm_x}</td></tr>' +
    //         '<tr><td>mean</td><td>{mean}</td></tr>' +
    //         '<tr><td>Shape__Area</td><td>{Shape__Area}</td></tr>' +
    //         '<tr><td>Shape__Length</td><td>{Shape__Length}</td></tr>' +
    //         '</tbody></table>',
    // };
    //   await this.initializeMap(popuplocalBoundries,'/assets/geojson/GRID3_Nigeria_-_Ward_Boundaries.geojson').then((mapView) => {
    //     // The map has been initialized
    //     console.log('mapView ready: ', this._view.ready);
    //     this._loaded = this._view.ready;
    //     this.mapLoadedEvent.emit(true);
    // });
    // }

    // filterByLgaCode() {
    //     
    //     this.boundryLayer.filter = {
    //       where: `lga_code > ${10001}`
    //     };
    // }
}
