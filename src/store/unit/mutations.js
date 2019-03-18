import {
  ALL_UNITS,
  ALL_UNITS_SUCCESS,
  CHANGE_STATUS_UNIT,
  SELECT_UNIT,
  REMOVE_UNIT,
  ADD_UNIT_SUCCESS,
  UPDATE_UNIT_SUCCESS,
  DELETE_UNIT_SUCCESS
} from './mutation-types'

export default {
  [ALL_UNITS](state) {
    state.showLoader = true;
  },
  [ALL_UNITS_SUCCESS](state, payload) {
    state.showLoader = false
    state.units = payload
  },
  [CHANGE_STATUS_UNIT](state, payload) {
    const unit = state.units.find(unit => unit._id === payload)
    unit.status = !unit.status
  },
  [SELECT_UNIT](state, payload) {
    state.unit = payload
    state.isCreate = false
  },
  [REMOVE_UNIT](state, payload) {
    state.unit = {};
    state.isCreate = true
  },
  [ADD_UNIT_SUCCESS](state, payload) {
    state.units.push(payload)
  },
  [UPDATE_UNIT_SUCCESS](state, payload) {
    const unit = state.units.find(unit => unit._id === payload._id)
    unit.name = payload.name
    unit.status = payload.status
    state.isCreate = true
  },
  [DELETE_UNIT_SUCCESS](state, payload) {
    state.units.find((unit, index) => {
      if (unit._id === payload) {
        state.units.splice(index, 1)
      }
    })
  }
}
