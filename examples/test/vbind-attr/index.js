require(['../../../dist/sugar'], function(sugar) {
	var $ = sugar.jquery;

	var MainPage = sugar.Container.extend({
		init: function(config) {
			config = sugar.cover(config, {
				'html': [
					// single attribute
					// '<h3 v-bind:id="bid"></h3>'
					// '<ul>',
					// 	'<li v-for="item in items">',
					// 		'<h3 v-bind:id="item.bid"></h3>',
					// 	'</li>',
					// '</ul>'

					// single attribute with '-'
					// '<h3 v-bind:data-id="did"></h3>'
					// '<ul>',
					// 	'<li v-for="item in items">',
					// 		'<h3 v-bind:data-id="item.did"></h3>',
					// 	'</li>',
					// '</ul>'

					// multi attribute
					// '<h3 v-bind="{id: bid, name: bname, data-id: did}"></h3>'
					'<ul>',
						'<li v-for="item in items">',
							'<h3 v-bind="{id: $index_a, name: item.bname, data-id: item.did}"></h3>',
						'</li>',
					'</ul>'
				].join(''),
				'model': {
					// single attribute
					// 'bid': 'xxdk'
					// 'items': [
					// 	{'bid': 'curry'},
					// 	{'bid': 'kelay'},
					// 	{'bid': 'green'}
					// ]

					// single attribute with '-'
					// 'did': 'xxdk'
					// 'items': [
					// 	{'did': 'curry'},
					// 	{'did': 'kelay'},
					// 	{'did': 'green'}
					// ]

					// multi attribute
					// 'bid': 'xxx',
					// 'bname': 'yyy',
					// 'did': 'zzz'
					'items': [
						{'bid': 'a1', 'bname': 'a2', 'did': 'a3'},
						{'bid': 'b1', 'bname': 'b2', 'did': 'b3'},
						{'bid': 'c1', 'bname': 'c2', 'did': 'c3'}
					]
				}
			});
			this.Super('init', arguments);
		},
		viewReady: function() {
			window.vm = this.vm.$data;
		}
	});

	sugar.core.create('mainPage', MainPage, {
		'target': $('body')
	});
});