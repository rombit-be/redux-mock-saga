/**
 * Flowtype definitions for index
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.2.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export type ReduxSagaMock = {
    mockStore: Store<any>,
    mockSagaMiddleWare: SagaMiddleware<{}>,
    actionHistory: Action[]
};
/**
 * This factory creates a mocked store object object and an instance
 * of the saga middleware.
 * @param  
 * @param  
 */
declare export function mockStoreFactory(rootReducer: any, store: Store<any>, state?: any): ReduxSagaMock
/**
 * Sagas always start with a root saga where all the other sagas are forked.
 * @param  
 */
declare export function createMockRootSaga(...sagas: any[]): any
/**
 * Run the sagas against the configured mock saga middleware. Return the done promise to await
 * in your tests.
 * @param mock 
 * @param sagas 
 */
declare export function runSagaMock(mock: ReduxSagaMock, ...sagas: any[]): Promise<any >
    /**
     * Stop a saga mock by dispatching the END signal. Don't forget to await the promise returned
     * in runSagaMock.
     * @param mock 
     */
    declare export function stopSagaMock(mock: ReduxSagaMock): void