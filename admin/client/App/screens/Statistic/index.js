import React, { Component } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
	InlineGroup as Group,
	InlineGroupSection as Section,
	Container
} from '../../elemental';

class Statistic extends Component {
	state = {
		dateFrom: moment(),
		dateTo: moment()
	}
   
	handleChange = (date) => {
	  this.setState({
		startDate: date
	  });
	  console.log(date)
	}
   
	render() {
		return (
			<Group block>
				<Section grow>
					<Container style={{ paddingTop: '2em' }}>
						<div className="select-date-panel">
							<div className="left-part">
								<DatePicker
									selected={this.state.dateFrom}
									onChange={this.handleChange}
								/>
							</div>
							<div className="right-part">
								<DatePicker
										selected={this.state.dateTo}
										onChange={this.handleChange}
									/>
							</div>
						</div>
					</Container>
				</Section>
			</Group>			
		)
	}
}


module.exports = connect((state) => {
	return {
		lists: 'state.lists',
	};
})(Statistic);
