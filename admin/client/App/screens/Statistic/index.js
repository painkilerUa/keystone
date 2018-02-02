import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
	InlineGroup as Group,
	InlineGroupSection as Section,
	Container
} from '../../elemental';
import {
	loadStatistic,
} from './actions';

class Statistic extends Component {
	state = {
		dateFrom: moment().startOf('day'),
		dateTo: moment().endOf('day')
	}
   
	componentDidMount () {
		this.props.dispatch(loadStatistic({
			dateFrom: this.state.dateFrom,
			dateTo: this.state.dateTo
		}));
	}

	handleDateChange = (dateType) => (date) => {
		const correctedDate = dateType === 'dateTo' ? moment(date).endOf('day') : moment(date).startOf('day');
		this.setState({
			[dateType]: correctedDate
		});
		const newDate = {...this.state};
		newDate[dateType] = correctedDate;
		this.props.dispatch(loadStatistic(newDate));
	}
   
	render() {
		const tbody = [];
		Object.keys(this.props.rows).forEach(key => {
			tbody.push(
				<tr>
					<td className="ItemList__col">{key}</td>
					<td>{this.props.rows[key]}</td>
				</tr>
			)				
		});
		tbody.push(
			<tr>
				<td className="ItemList__col total-bold">TOTAL</td>
				<td className="total-bold">{this.props.total}</td>
			</tr>
		)
		return (
			<Group block>
				<Section grow>
					<Container style={{ paddingTop: '2em' }}>
						<h1>Number of Bobbleheads</h1>
						<div className="select-date-panel">
							<div className="left-part">
								<span>From</span>
								<DatePicker
									selected={this.state.dateFrom}
									onChange={this.handleDateChange('dateFrom')}
									dateFormat="DD/MM/YYYY"
								/>
							</div>
							<div className="right-part">
								<span>To</span>
								<DatePicker
										selected={this.state.dateTo}
										onChange={this.handleDateChange('dateTo')}
										dateFormat="DD/MM/YYYY"
									/>
							</div>
						</div>
						<div className="ItemList-wrapper">
							<table cellpadding="0" cellspacing="0" className="Table ItemList">
								<thead>
									<tr>
										<th>Data</th>
										<th>Numbers</th>
									</tr>
								</thead>
								<tbody>
									{tbody}
								</tbody>
							</table>
						</div>
					</Container>
				</Section>
			</Group>			
		)
	}
}

module.exports = connect((state) => {
	const { rows, total } = state.statistic;
	return {
		rows,
		total
	};
})(Statistic);
