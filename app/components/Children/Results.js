var React = require('react');

var helpers = require('./../utils/helpers.js');

var saveArticle =  function(search, i){
		var article = search;

		// console.log("article: ", article);

		helpers.saveArticle(article, i);

		// this.updateSaved();
			// .then(function(data){
			// 	console.log("saved the article got data back");
			// })
	}

var Results = React.createClass({

	render: function(){
		return(
			<div className="panel panel-info">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Results</h3>
				</div>

				<div className="panel-body text-center">
					{this.props.results.map(function(search,i){
						var boundClick = saveArticle.bind(this, search, i);
						// this.props.updateSaved();
						return <div key={i}>
							<p>{search.headline.main}</p>
							<br/>
							<p>{search.web}</p>
							<button type="button" className="btn btn-primary" onClick={boundClick}>Save</button>
						</div>
						// return <p key={i}>{search.lead_paragraph}</p>
					})}

						
				</div>
			</div>
			
		)
	}
});
module.exports = Results;