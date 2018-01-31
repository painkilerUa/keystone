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
		dateFrom: moment(),
		dateTo: moment()
	}
   
	componentDidMount () {
		this.props.dispatch(loadStatistic({
			dateFrom: this.state.dateFrom,
			dateTo: this.state.dateTo
		}));
	}

	handleDateChange = (dateType) => (date) => {
	  this.setState({
		[dateType]: date
	  });
	  console.log(date)
	}
   
	render() {
		return (
			<Group block>
				<Section grow>
					<Container style={{ paddingTop: '2em' }}>
						<h1>Number of Bobbleheads</h1>
						<div className="select-date-panel">
							<div className="left-part">
								<DatePicker
									selected={this.state.dateFrom}
									onChange={this.handleDateChange('dateFrom')}
								/>
							</div>
							<div className="right-part">
								<DatePicker
										selected={this.state.dateTo}
										onChange={this.handleDateChange('dateTo')}
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
									<tr>
										<td className="ItemList__col">29.01.18</td>
										<td>155</td>
									</tr>
									<tr>
										<td className="ItemList__col">30.01.18</td>
										<td>25</td>
									</tr>
									<tr>
										<td className="ItemList__col">31.01.18</td>
										<td>45</td>
									</tr>
									<tr>
										<td className="ItemList__col">TOTAL</td>
										<td>205</td>
									</tr>
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
	return {
		loadStatistic: 'state.lists',
	};
})(Statistic);
