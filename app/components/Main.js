var React = require('react');

var Form = require('./Children/Form');
var Results = require('./Children/Results');
var Saved = require('./Children/Saved');
var helpers = require('./utils/helpers.js')

var Main = React.createClass({
    getInitialState: function(){
        return{
            searchTerm:"",
            startYear:"",
            endYear:"",
            results:[],
            saved: []
        }
    },

    setSearch: function(search, startYear, endYear){
    	this.setState({
    		searchTerm: search,
    		startYear: startYear,
    		endYear: endYear
    	})
    },

    updateSaved: function(saved){
        console.log("updated states of saved");
    },

    componentDidUpdate: function(prevProps, prevState){
    	if (prevState.searchTerm != this.state.searchTerm || prevState.startYear != this.state.startYear || prevState.endYear != this.state.endYear){

    		console.log("update to search made");

    		helpers.runQuery(this.state.searchTerm, this.state.startYear, this.state.endYear)
    			.then(function(data){
    				if (data != this.state.results){
    					console.log("Receiving new data");
                        // helpers.getSaved();
    					this.setState({
    						results: data
    					})


    					///////////////////////////

    					// KEEP WORKING HERE 
    					///////////////////////////
    				}
    				// console.log(data);
    			}.bind(this))
    	} else if (prevState.saved != this.state.saved){
            console.log("saved articles updated");
        }
        // .bind(this)
        // helpers.getSaved();
    },

    componentDidMount: function(){

        // Get the latest saved data.
        helpers.getSaved()
            .then(function(response){
                if (response != this.state.saved){
                    console.log("componentDidMount");
                    console.log ("History", response);

                    this.setState({
                        saved: response
                    })
                }
            }.bind(this))
    },

    render: function(){
        return(
            <div className = 'container'>

                <div className='col-md-12'>
                    <Form setSearch={this.setSearch}/>
                </div>

                <div className='col-md-12'>
                    <Results results={this.state.results} updateSaved={this.updateSaved}/>
                </div>

                <div className='col-md-12'>
                    <Saved saved={this.state.saved}/>
                </div>
            </div>
        )
    }
})

module.exports = Main;