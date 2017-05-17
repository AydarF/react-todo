var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with entered text input', () => {
	  var searchText = 'Dog';	
      var spy = expect.createSpy();
      var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

      todoSearch.refs.searchText.value = searchText;
	});

	it('should call onSearch with proper checked value', () => {

	});
});