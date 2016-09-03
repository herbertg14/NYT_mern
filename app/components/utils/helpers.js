var axios = require('axios');
// var rp = require('request-promise');
// var request = require('request'); 

var key = "910f87367bad43da8984cee4e521240a";

var helpers = {
	runQuery: function(searchTerm, startYear, endYear){
		console.log("in run query");

		var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+ searchTerm +"&page=0&sort=newest&begin_date="+startYear+"0101&end_date="+endYear+"0101&api-key=" + key;
		var options = {
			url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
			qs: {
				'api-key': "910f87367bad43da8984cee4e521240a",
				'q': searchTerm,
				'begin_date': "20120906",
				'end_date': "20160203",
				'sort': "newest"
  			}
		};

		return axios.get(queryURL)
			.then(function(response){
				console.log("here is the response");
				console.log(response);
			})

		// request.get({
		//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
		//   qs: {
		//     'api-key': "910f87367bad43da8984cee4e521240a",
		//     'q': searchTerm,
		//     'begin_date': "20120906",
		//     'end_date': "20160203",
		//     'sort': "newest"
		//   },
		// }, function(err, response, body) {
		//   body = JSON.parse(body);
		//   console.log(body);
		// })
	}
}
module.exports = helpers;