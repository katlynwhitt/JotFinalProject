var SingleJournalView = Backbone.View.extend({

	className: 'singleJournal',

	events:{
		'click .editSingleJournalBtn' : 'editJournal',
		'click .submitJournalBtn' : 'submitJournal',
		'click .cancelJournalBtn' : 'cancelJournal'

	},

	initialize: function(attributes){
		$('.sticky-container').removeClass();
		this.singleJournal = this.collection.get(attributes.journalid);
		var myCollection = this.collection;	
		this.render();
	},

	render: function(attributes){
		var singleJournalView_template = Handlebars.compile($('#singleJournalView-template').html());
		var rendered = singleJournalView_template(this.singleJournal.toJSON());
		var renderingElement = this.$el.html(rendered);
		$('.renderedStickies').html(renderingElement);
		this.delegateEvents();
	},

	editJournal: function(e){
		e.preventDefault();
		e.stopPropagation();

		$('.overlay').toggleClass('shown');

	},

	cancelJournal: function(e){
		e.preventDefault();
		e.stopPropagation();

		$('.overlay').toggleClass('shown');

	}
	   
});