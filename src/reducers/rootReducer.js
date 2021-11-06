import {combineReducers} from 'redux';
import { calendarReducer } from './CalendarReducer';
import { uiReducer } from './uiReducer';
export const rootReducer = combineReducers({
  ui: uiReducer,
  calendar: calendarReducer,
})