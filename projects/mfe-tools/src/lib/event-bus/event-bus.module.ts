import { ModuleWithProviders, NgModule } from '@angular/core';
import {EVENT_BUS} from "./event-bus.token";
import {EventBusService} from "./event-bus.service";

@NgModule()
export class EventBusModule {
	public static forRoot(): ModuleWithProviders<EventBusModule> {
		return {
			ngModule: EventBusModule,
			providers: [
				{
					provide: EVENT_BUS,
					useClass: EventBusService
				}
			]
		};
	}
}
