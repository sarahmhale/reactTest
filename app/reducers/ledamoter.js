import createReducer from '../lib/createReducers';
import * as types from '../actions/types';

export const searchedLedamoter = createReducer({}, {
    [types.SET_SERCHED_LEDAMOTER](state, action) {
        let newState = {}
        action.ledamoter.personlista.person.forEach((person) => {
            newState[person.hangar_id] = person
        });

        return newState;
    }
});
