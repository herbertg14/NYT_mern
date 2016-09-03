var React = require('react');

var Form = require('./Children/Form');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');

var Main = React.createClass({
	render: function(){
		return(
			<div className = 'container'>
				<div className='col-md-12'>
					<Form/>
				</div>

				<div className='col-md-12'>
					<Results/>
				</div>

				<div className='col-md-12'>
					<Saved/>
				</div>
			</div>
		)
	}
})

module.exports = Main;