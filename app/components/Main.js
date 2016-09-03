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
            endYear:""
        }
    },
    

    setSearch: function(search, startYear, endYear){
    	this.setState({
    		searchTerm: search,
    		startYear: startYear,
    		endYear: endYear
    	})
    },

    render: function(){
        return(
            <div className = 'container'>

                <div className='col-md-12'>
                    <Form setSearch={this.setSearch}/>
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