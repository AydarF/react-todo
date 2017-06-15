var React = require('react');

var AddTodo = React.createClass({
	handleSubmit: function (e) {
	  e.preventDefault();

	  var todoText = this.refs.todoText.value;

	  if(todoText.length > 0) {
	  	this.refs.todoText.value = '';
	  	  // onAddTodo is a made-up name
	  	this.props.onAddTodo(todoText);
	  }	else {
	  	  // focus() - puts cursor back in the input field automatically, 
	  	  // if it's empty & someone's trying to press 'Add Todo' button
          this.refs.todoText.focus();
	  }
	},
	render: function () {
      return (
        <div className="container__footer">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input type="text" ref="todoText" placeholder="What do you need to do?"/>
            </div>
            <div>  
              <button className="button expanded">Add Todo</button>
            </div>  
          </form>
        </div>  
      );
	}
});
module.exports = AddTodo;