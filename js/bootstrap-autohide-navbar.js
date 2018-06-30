declare const define: any;
declare const require: any;
declare const module: any;
declare const jQuery: any;

;(function (factory: any) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof module === 'object' && module.exports) {
		module.exports = function (root: any, jQuery: any) {
			if (jQuery === undefined) {
				if (typeof window !== 'undefined')
					jQuery = require('jquery');
				else
					jQuery = require('jquery')(root);
			}
			factory(jQuery);
			return jQuery;
		};
	} else {
		factory(jQuery);
	}
}(function ($: any) {
	'use strict';

	const plugin_name = 'bootstrapAutoHideNavbar';
	const $window = $(window);
	const $document = $(document);
	const defaults = {
		disableAutoHide: false,
		delta: 5,
		duration: 250,
		shadow: false
	};

	function show() {
		this.element.css({
			transform: 'translate3d(0, 0, 0)'
		});
	}

	function hide() {
		this.element.css({
			transform: 'translate3d(0, -110%, 0)'
		});
	}

	class BootstrapAutoHideNavbar {
		element: any;
		settings: any;
		_defaults: any;

		constructor(element: Element, options: any) {
			this.element = $(element);
			this.settings = $.extend({}, defaults, options);

			if (!this.element.hasClass('navbar-fixed-top'))
				this.element.addClass('navbar-fixed-top');

			if (this.settings.shadow)
				this.element.css({
					'box-shadow': '0 0 4px rgba(0,0,0,0.4)'
				});

			this.element.css({
				transition: 'transform ease-in-out ' + this.settings.duration + 'ms'
			});

			this.init();
		}

		init(): void {
			const _this = this;
			const $nav = _this.element;
			const settings = _this.settings;
			let last_position = 0;
			let is_scrolled = false;

			$window.scroll(() => {
				is_scrolled = true;
			});

			setInterval(() => {
				if (is_scrolled && !settings.disableAutoHide) {
					onHasScrolled();
					is_scrolled = false;
				}
			}, 250);

			function onHasScrolled() {
				var top = $window.scrollTop();

				if (Math.abs(last_position - top) <= settings.delta)
					return;

				if (top > last_position && top > $nav.outerHeight()) {
					_this.hide();
				} else {
					if (top + $window.height() < $document.height())
						_this.show();
				}

				last_position = top;
			}

			return $nav;
		}

		show(): void {
			show.call(this);
		}

		hide(): void {
			hide.call(this);
		}

		setDisableAutoHide(flag: boolean): void {
			this.settings.disableAutoHide = flag;
		}
	}

	$.fn[plugin_name] = function (options: any) {
		var instance;

		this.each(function () {
			instance = $.data(this, 'plugin_' + plugin_name);

			if (instance === undefined)
				instance = $.data(this, 'plugin_' + plugin_name, new BootstrapAutoHideNavbar(this, options));
		});

		return instance;
	};
}));