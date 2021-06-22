import { createSelector } from 'reselect';
import actionCreatorFactory from 'typescript-fsa';
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Event } from './event';
import {
  create as createAttendance,
  remove as removeAttendance,
  update as updateAttendance,
} from './attendances';
import { create as createEvent, remove as removeEvent, update as updateEvent } from './events';
import { RootState } from './reducers';
import { focusAttendance, initiateAttendance } from './attendance';
import { update as updatePractice } from './practice';
import { update as updateRoles } from './roles';
import { update as updateParts } from './parts';
import { update as updatePrograms } from './programs';
import { create as createCovids } from './covids';

type KeyName = 'eventForm' | 'covidForm' | 'attendanceForm' | 'setting';
export type Show = Record<KeyName, boolean>;

// action
const actionCreator = actionCreatorFactory();
export const toggleEventForm = actionCreator<void | Event>('TOGGLE_EVENT_FORM');
export const toggleCovidForm = actionCreator<boolean>('TOGGLE_COVID_FORM');
export const toggleAttendanceForm = actionCreator<boolean>('TOGGLE_ATTENDANCE_FORM');
export const toggleSetting = actionCreator<boolean>('TOGGLE_SETTING');
export const closeAll = actionCreator('CLOSE_ALL');

// initial state
const INITIAL_STATE: Show = {
  eventForm: false,
  covidForm: false,
  attendanceForm: false,
  setting: false,
};

// reducer
const reducer = reducerWithInitialState(INITIAL_STATE)
  .case(toggleEventForm, (state) => ({
    ...state,
    eventForm: !state.eventForm,
  }))
  .case(toggleCovidForm, (state, payload) => ({
    ...state,
    covidForm: payload,
  }))
  .case(toggleAttendanceForm, (state, payload) => ({
    ...state,
    attendanceForm: payload,
  }))
  .case(toggleSetting, (state, payload) => ({
    ...state,
    setting: payload,
  }))
  .case(closeAll, () => ({ ...INITIAL_STATE }))
  .cases([createEvent.async.done, updateEvent.async.done, removeEvent.async.done], (state) => ({
    ...state,
    eventForm: false,
  }))
  .cases(
    [createAttendance.async.done, updateAttendance.async.done, removeAttendance.async.done],
    (state) => ({
      ...state,
      attendanceForm: false,
    }),
  )
  .case(focusAttendance, (state) => ({
    ...state,
    attendanceForm: true,
  }))
  .case(initiateAttendance, (state) => ({
    ...state,
    attendanceForm: !state.attendanceForm,
  }))
  .cases(
    [
      updatePractice.async.done,
      updateRoles.async.done,
      updateParts.async.done,
      updatePrograms.async.done,
    ],
    (state) => ({
      ...state,
      setting: false,
    }),
  )
  .case(createCovids.async.done, (state) => ({
    ...state,
    covidForm: false,
  }));
export default reducer;

// selector
export const selectEventFormIsShown = createSelector(
  [(state: RootState) => state.ui.show.eventForm],
  (eventForm) => eventForm,
);
export const selectCovidFormIsShown = createSelector(
  [(state: RootState) => state.ui.show.covidForm],
  (covidForm) => covidForm,
);
export const selectAttendanceFormIsShown = createSelector(
  [(state: RootState) => state.ui.show.attendanceForm],
  (attendanceForm) => attendanceForm,
);
export const selectSettingIsShown = createSelector(
  [(state: RootState) => state.ui.show.setting],
  (setting) => setting,
);
