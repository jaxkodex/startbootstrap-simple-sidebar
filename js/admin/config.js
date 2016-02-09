require.config({
	shim : {
		underscore : {
			exports : '_'
		},
		metis : {
			deps : [ 'jquery' ]
		},
		backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		bootstrap : {
			deps : [ 'jquery' ],
			exports : '$.fn.popover'
		},
		marionette : {
			deps : [ 'jquery', 'underscore', 'backbone' ],
			exports : 'Marionette'
		}
	},
	paths : {
		jquery : '../libs/jquery-1.12.0.min',
		underscore : '../libs/underscore-min',
		backbone : '../libs/backbone-min',
		bootstrap : '../libs/bootstrap.min',
		marionette : '../libs/backbone.marionette.min',
		tpl : '../libs/tpl',
		metis: '../libs/metisMenu.min'
	},
	urlArgs : "bust=" + (new Date()).getTime()
});

require([ 'app', 'views/AppLayout', 'views/MenuView',
'init', 'backbone', 'underscore', 'bootstrap', 'metis' ],
function(app, AppLayout, MenuView, init, Backbone, _) {
	app.on('start', function() {
		app.rootView = new AppLayout;

		init.initialize();

		app.rootView.showChildView('menu', new MenuView);
		Backbone.history.start();
	});
	app.start();
});
