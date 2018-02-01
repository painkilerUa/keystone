import xhr from 'xhr';
import {
	LOAD_COUNTS,
	COUNTS_LOADING_SUCCESS,
	COUNTS_LOADING_ERROR,
	STATISTIC_SUCCESSFULLY_LOADED,
} from './constants';
import { NETWORK_ERROR_RETRY_DELAY } from '../../../constants';

export function loadStatistic (date) {
	return (dispatch) => {
		// dispatch({
		// 	type: LOAD_COUNTS,
		// });
		xhr({
			method: 'post',
			body: JSON.stringify(date),
			url: `/api/statistic`,
			headers: {
				"Content-Type": "application/json"
			},
		}, (err, resp, body) => {
			if (err) {
				// dispatch(countsLoadingError(err));
				return;
			}
			try {
				const payload = JSON.parse(body);
				if (payload.rows) {
					console.log(payload)
					dispatch(setStatistic(payload));
				}
			} catch (e) {
				console.log('Error parsing results json:', e, body);
//				dispatch(countsLoadingError(e));
				return;
			}
		});
	};
}

export function setStatistic (payload) {
	return {
		type: STATISTIC_SUCCESSFULLY_LOADED,
		payload,
	};
}