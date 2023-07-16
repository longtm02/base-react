// saga.js
import {put, call, takeEvery, takeLatest, take} from 'redux-saga/effects';
import {fetchDataSuccess, fetchDataFailure} from '../actions/action';
import {dataService} from '../../services/data';

function* fetchDataSaga(): Generator<any> {
  try {
    const data: any = yield call(dataService.get); // Gọi API bất đồng bộ và chờ kết quả

    console.log({data});

    yield put(fetchDataSuccess(data)); // Gửi action thành công với dữ liệu nhận được
  } catch (error) {
    yield put(fetchDataFailure(error)); // Gửi action thất bại với lỗi nhận được
  }
}

function* fetchDataSagaFast(): Generator<any> {
  try {
    const data: any = yield call(dataService.getFast); // Gọi API bất đồng bộ và chờ kết quả

    console.log({data});

    // yield put(fetchDataSuccess(data)); // Gửi action thành công với dữ liệu nhận được
  } catch (error) {
    // yield put(fetchDataFailure(error)); // Gửi action thất bại với lỗi nhận được
  }
}

export function* dataSaga() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataSaga);
  yield takeEvery('FETCH_DATA_REQUEST_FAST', fetchDataSagaFast);
}
