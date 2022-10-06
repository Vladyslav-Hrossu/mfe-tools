import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

export interface MfeEvent {
    eventType: string;
    payload: unknown;
}

export interface MfeEventBus {
    eventBus$: Observable<MfeEvent>;
    dispatchEvent(event: MfeEvent): void;
}

@Injectable()
export class EventBusService implements MfeEventBus {
    private readonly eventBusStream = new Subject<MfeEvent>()

    public get eventBus$(): Observable<MfeEvent> {
        return this.eventBusStream.asObservable();
    }

    public dispatchEvent(event: MfeEvent): void {
        this.eventBusStream.next(event);
    }
}
