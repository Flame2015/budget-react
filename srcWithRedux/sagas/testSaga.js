import { delay, take } from "redux-saga/effects";

export function* testSaga(){
    while(true){
        // yield delay(1000);
        console.log("start saga")

        yield take('TEST_MESSAGE')
        console.log("finish saga function");
    } 
}

export function* count(){
    yield 1
    yield 2
    yield 3
    return 4
}