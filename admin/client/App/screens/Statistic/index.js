import React from 'react';
import { connect } from 'react-redux';

const Statistic = React.createClass({
	render () {
		return <h1>Statistic</h1>
	},
});

module.exports = connect((state) => {
	return {
		lists: 'state.lists',
	};
})(Statistic);
