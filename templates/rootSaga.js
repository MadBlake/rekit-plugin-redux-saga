// This file is auto maintained by rekit-plugin-redux-saga,
// you usually don't need to manually edit it.
import { all } from 'redux-saga/effects'
// NOTE: DO NOT chanage featureSagas declearation pattern, it's used by rekit-plugin-redux-saga.
const featureSagas = [
];

const sagas = featureSagas.reduce((prev, curr) => [
  ...prev,
  ...Object.keys(curr).map(k => curr[k]),
], [])
// a saga should be function, below filter avoids error if redux/sagas.js is empty;
.filter(s => typeof s === 'function');

function* rootSaga() {
  yield all(sagas.map(saga => saga()));
}

export default rootSaga;
