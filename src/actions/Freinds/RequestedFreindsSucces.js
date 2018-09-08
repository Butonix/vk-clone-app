import { REQUESTED_FREINDS_SUCCEEDED } from './../../constants/ActionTypes';



export default function requestedFreindsSuccess(data) {
   return {
        type: REQUESTED_FREINDS_SUCCEEDED,
        data: data.results
   }
}
