import xhr from 'xhr';
import {
	LOAD_COUNTS,
	COUNTS_LOADING_SUCCESS,
	COUNTS_LOADING_ERROR,
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
				body = JSON.parse(body);
				// if (body.counts) {
					dispatch(setStatistic(body));
				// }
			} catch (e) {
				console.log('Error parsing results json:', e, body);
//				dispatch(countsLoadingError(e));
				return;
			}
		});
	};
}