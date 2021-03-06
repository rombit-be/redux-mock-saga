import { Store } from "redux";
import { SagaMiddleware } from "redux-saga";

import { ReduxSagaMock } from "../src";

declare module ReduxSagaMock {
    export function MockFactoryResponse(): { mockStore: any, sagaMiddleware: any };
    export function mockStoreFactory(rootReducer: any, store: Store): ReduxSagaMock;
    export function runSaga(sagaMiddleWare: SagaMiddleware, ...sagas: any[]): Promise<any>;
}

export default ReduxSagaMock;