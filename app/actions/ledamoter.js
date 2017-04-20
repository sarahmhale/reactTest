import * as types from './types';
import Api from '../lib/api'

export function fetchedLedamoter() {
  console.log("in here")
    return (dispatch, getState) => {
        return Api.get(`/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&termlista=`).then(resp => {
            dispatch(setSearchedLedamoter({
                ledamoter: resp
            }));
        }).catch((ex) => {
            console.log(ex);
        })
    }

}
export function setSearchedLedamoter({ledamoter}) {
    console.log("action", ledamoter)
    return {

        type: types.SET_SERCHED_LEDAMOTER,
        ledamoter
    }
}
export function addLedamot() {
    return {
        type: types.ADD_LEDAMOT,
    }
}
