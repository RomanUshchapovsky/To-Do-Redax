import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { actionTypes } from '../constants';
import { actions } from '../store/actions';

function* addNewTodo({ payload, callback }) {
    try {
        // Call to BE ->
        yield put(actions.CREATE_TODO.SUCCESS(payload));
    } catch (err) {
        yield put(actionTypes.FETCH_TODOS_FAILURE, err)
    } finally {
        callback && typeof callback === 'function' && callback()
    }
}
function* removeTodo({ payload, callback }) {
    try {
        // console.log(payload)
        yield put(actions.REMOVE_TODO.SUCCESS(payload));
    } catch (err) {
        yield put(actionTypes.FETCH_TODOS_FAILURE, err)
    } finally {
        callback && typeof callback === 'function' && callback()
    }
}
function* updateTodo({ payload, callback }) {
    try {
        yield put(actions.UPDATE_TODO.SUCCESS(payload));
    } catch (err) {
        yield put(actionTypes.FETCH_TODOS_FAILURE, err)
    } finally {
        callback && typeof callback === 'function' && callback()
    }
}
// --------------------
// function* downloadTodo({ payload, callback }) {
//     try {
        // console.log(payload)
        // yield call(fetchToDoFromApi)
        // yield call(() => new Promise(res => res(data.json())))
        // yield put(setToDos(json))
        
//         yield put(actions.DOWNLOAD_TODO.SUCCESS(payload));
//     } catch (err) {
//         yield put(actionTypes.DOWNLOAD_TODO.FAILURE, err)
//     } finally {
//         callback && typeof callback === 'function' && callback()
//     }
// }

export default function* todosWatcher() {
    yield takeLatest (actionTypes.CREATE_TODO.REQUEST, addNewTodo)
    yield takeLatest (actionTypes.REMOVE_TODO.REQUEST, removeTodo)
    yield takeLatest (actionTypes.UPDATE_TODO.REQUEST, updateTodo)
    // yield takeEvery (actionTypes.DOWNLOAD_TODO, downloadTodo)
}