import { Injectable, Injector, NgZone } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
import { HubConnection } from '@microsoft/signalr';

@Injectable()
export class CustomHeaderNotificationSignalrService extends AppComponentBase {

    constructor(
        injector: Injector,
        public _zone: NgZone
    ) {
        super(injector);
    }

    notificationHub: HubConnection;
    isnotificationHubConnected = false;

    configureConnection(connection): void {
        // Set the common hub
        this.notificationHub = connection;

        // Reconnect loop
        let reconnectTime = 5000;
        let tries = 1;
        let maxTries = 8;
        function start() {
            return new Promise(function (resolve, reject) {
                if (tries > maxTries) {
                    reject();
                } else {
                    connection.start()
                        .then(resolve)
                        .then(() => {
                            reconnectTime = 5000;
                            tries = 1;
                        })
                        .catch(() => {
                            setTimeout(() => {
                                start().then(resolve);
                            }, reconnectTime);
                            reconnectTime *= 2;
                            tries += 1;
                        });
                }
            });
        }

        // Reconnect if hub disconnects
        connection.onclose(e => {
            this.isnotificationHubConnected = false;

            if (e) {
                abp.log.debug('asset Hub connection closed with error: ' + e);
            } else {
                abp.log.debug('asset Hub disconnected');
            }

            start().then(() => {
                this.isnotificationHubConnected = true;
            });
        });

        // Register to get notifications
        this.registerUsernotifcations(connection);
    }

    registerUsernotifcations(connection): void {
        connection.on('SentApprovalRequest', message => {
        });
    }

    init(): void {
        this._zone.runOutsideAngular(() => {
            abp.signalr.connect();
            abp.signalr.startConnection(abp.appPath + 'signalr-item-position-status', connection => {
                this.configureConnection(connection);
            }).then(() => {
                this.isnotificationHubConnected = true;
            });
        });
    }
}