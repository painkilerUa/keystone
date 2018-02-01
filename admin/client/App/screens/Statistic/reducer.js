import {
	LOAD_COUNTS,
	COUNTS_LOADING_SUCCESS,
	COUNTS_LOADING_ERROR,
	STATISTIC_SUCCESSFULLY_LOADED
} from './constants';
import assign from 'object-assign';

const initialState = {
	rows: {},
	total: null,
	isLoading: false
};

function statistic (state = initialState, action) {
	switch (action.type) {
		case LOAD_COUNTS:
			return assign({}, state, {
				loading: true,
			});
		case STATISTIC_SUCCESSFULLY_LOADED:
			console.log('JUMP')
			return assign({}, state, {
				isLoading: false,
				rows: action.payload.rows,
				total: action.payload.total,
			});
		case COUNTS_LOADING_ERROR:
			return assign({}, state, {
				loading: false,
				error: action.error,
			});
		default:
			return state;
	}
}

export default statistic;
