import { put, takeLatest, all } from 'redux-saga/effects'


function* fetchNews() {

    const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
        .then(response => response.json())

    yield put({
        type: 'NEWS_RECEIVED',
        payload: json.articles
    })
}

function* actionWatcher(){
    yield takeLatest('GET_NEWS', fetchNews)
}


export default function* rootSaga(){
    yield all(
        [ actionWatcher() ]
    )
}


// To put it simple it’s like I’m telling SAGA to
//  wait for action ‘GET_NEWS’ to get dispatched.
//   And ones ‘GET_NEWS’ was dispathced to call
//    fetchNews function. Inside of fetchNews 
//    function happens asynchronous call to API 
//    and when request arrived next action 
//    { type: “NEWS_RECEIVED”, json: json.articles, } 
//    is dispatched. As you can see we don’t even
//     need to write action “NEWS_RECEIVED” in
//      actions/index.js file because it’s fully
//       described here.