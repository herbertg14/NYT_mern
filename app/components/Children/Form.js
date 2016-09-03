var React = require('react');

var Form = React.createClass({
	render: function(){
		return(

			<div className='panel panel-primary'>

				<div className='panel-heading'>
					<h3 className='panel-title text-center'>Search</h3>
				</div>

				<div className='panel-body text-center'>
					<form>

						<div className='form-group'>
							<h4 className=''><strong>Topic</strong></h4>

							<h4><strong>Start Year</strong></h4>
							
							<h4><strong>End Year</strong></h4>						
						</div>

					</form>
				</div>

			</div>
		)
	}

});

module.exports = Form;