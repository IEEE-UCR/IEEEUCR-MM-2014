// page init
jQuery(function(){
	$(document).ready(function(){
		var url  = window.location.pathname;
		
		var indexOfApps = url.indexOf("apps");
		var indexOfCatalog = url.indexOf("catalog");
		
		var indexOfCatalogPlusOne = indexOfCatalog + 1;
		//if url contains catalog
		if(indexOfCatalog != -1){
			//url is catalog/apps
			if(indexOfApps != -1 && (indexOfApps > indexOfCatalogPlusOne)){
				$("li.nav-products").removeClass("active");
				$(".navigation-bar li.nav-applications").addClass("active");
			}else{							
				//url is catalog/anythingButApps
        	    $("li.nav-applications").removeClass("active");
			    $(".navigation-bar li.nav-products").addClass("active");
			}
		
		} //if url contains catalog
	}); //end of document.ready
	$('input, textarea').placeholder();
	initTabs();
	initAccordion();
	initSlideShow();
	initNav({
		menuId: "nav",
		sideClasses: true,
		cleverMode: true,
		flexibility: true,
		menuPaddings: 0
	});
	jQuery('#nav').animDropdown({
		hoverClass: 'hover',
		dropClass: 'drop-active',
		items: '> li',
		drop: '> .drop',
		delay: 100,
		animSpeed: 300,
		effect: 'fade'
	});
});


/*! http://mths.be/placeholder v2.0.6 by @mathias */
;(function(window, document, $) {

	var isInputSupported = 'placeholder' in document.createElement('input'),
	    isTextareaSupported = 'placeholder' in document.createElement('textarea'),
	    prototype = $.fn,
	    valHooks = $.valHooks,
	    hooks,
	    placeholder;
	if(navigator.userAgent.indexOf('Opera/') != -1) {
		isInputSupported = isTextareaSupported = false;
	}
	if (isInputSupported && isTextareaSupported) {

		placeholder = prototype.placeholder = function() {
			return this;
		};

		placeholder.input = placeholder.textarea = true;

	} else {

		placeholder = prototype.placeholder = function() {
			var $this = this;
			$this
				.filter((isInputSupported ? 'textarea' : ':input') + '[placeholder]')
				.not('.placeholder')
				.bind({
					'focus.placeholder': clearPlaceholder,
					'blur.placeholder': setPlaceholder
				})
				.data('placeholder-enabled', true)
				.trigger('blur.placeholder');
			return $this;
		};

		placeholder.input = isInputSupported;
		placeholder.textarea = isTextareaSupported;

		hooks = {
			'get': function(element) {
				var $element = $(element);
				return $element.data('placeholder-enabled') && $element.hasClass('placeholder') ? '' : element.value;
			},
			'set': function(element, value) {
				var $element = $(element);
				if (!$element.data('placeholder-enabled')) {
					return element.value = value;
				}
				if (value == '') {
					element.value = value;
					// Issue #56: Setting the placeholder causes problems if the element continues to have focus.
					if (element != document.activeElement) {
						// We can’t use `triggerHandler` here because of dummy text/password inputs :(
						setPlaceholder.call(element);
					}
				} else if ($element.hasClass('placeholder')) {
					clearPlaceholder.call(element, true, value) || (element.value = value);
				} else {
					element.value = value;
				}
				// `set` can not return `undefined`; see http://jsapi.info/jquery/1.7.1/val#L2363
				return $element;
			}
		};

		isInputSupported || (valHooks.input = hooks);
		isTextareaSupported || (valHooks.textarea = hooks);

		$(function() {
			// Look for forms
			$(document).delegate('form', 'submit.placeholder', function() {
				// Clear the placeholder values so they don’t get submitted
				var $inputs = $('.placeholder', this).each(clearPlaceholder);
				setTimeout(function() {
					$inputs.each(setPlaceholder);
				}, 10);
			});
		});

		// Clear placeholder values upon page reload
		$(window).bind('beforeunload.placeholder', function() {
			$('.placeholder').each(function() {
				this.value = '';
			});
		});

	}

	function args(elem) {
		// Return an object of element attributes
		var newAttrs = {},
		    rinlinejQuery = /^jQuery\d+$/;
		$.each(elem.attributes, function(i, attr) {
			if (attr.specified && !rinlinejQuery.test(attr.name)) {
				newAttrs[attr.name] = attr.value;
			}
		});
		return newAttrs;
	}

	function clearPlaceholder(event, value) {
		var input = this,
		    $input = $(input),
		    hadFocus;
		if (input.value == $input.attr('placeholder') && $input.hasClass('placeholder')) {
			hadFocus = input == document.activeElement;
			if ($input.data('placeholder-password')) {
				$input = $input.hide().next().show().attr('id', $input.removeAttr('id').data('placeholder-id'));
				// If `clearPlaceholder` was called from `$.valHooks.input.set`
				if (event === true) {
					return $input[0].value = value;
				}
				$input.focus();
			} else {
				input.value = '';
				$input.removeClass('placeholder');
			}
			hadFocus && input.select();
		}
	}

	function setPlaceholder() {
		var $replacement,
		    input = this,
		    $input = $(input),
		    $origInput = $input,
		    id = this.id;
		if (input.value == '') {
			if (input.type == 'password') {
				if (!$input.data('placeholder-textinput')) {
					try {
						$replacement = $input.clone().attr({ 'type': 'text' });
					} catch(e) {
						$replacement = $('<input>').attr($.extend(args(this), { 'type': 'text' }));
					}
					$replacement
						.removeAttr('name')
						.data({
							'placeholder-password': true,
							'placeholder-id': id
						})
						.bind('focus.placeholder', clearPlaceholder);
					$input
						.data({
							'placeholder-textinput': $replacement,
							'placeholder-id': id
						})
						.before($replacement);
				}
				$input = $input.removeAttr('id').hide().prev().attr('id', id).show();
				// Note: `$input[0] != input` now!
			}
			$input.addClass('placeholder');
			$input[0].value = $input.attr('placeholder');
		} else {
			$input.removeClass('placeholder');
		}
	}

}(this, document, jQuery));



// tabs init
function initTabs() {
	jQuery('ul.tabset').contentTabs({
		animSpeed:'fast',
		effect: 'none'
	});
}

/*
 * jQuery Tabs plugin
 */
;(function($){
	$.fn.contentTabs = function(o){
		// default options
		var options = $.extend({
			activeClass:'active',
			addToParent:false,
			autoHeight:false,
			autoRotate:false,
			animSpeed:'fast',
			switchTime:0,
			effect: 'none', // "fade", "slide"
			tabLinks:'a',
			event:'click'
		},o);

		return this.each(function(){
			var tabset = $(this);
			var tabLinks = tabset.find(options.tabLinks);
			var tabLinksParents = tabLinks.parent();
			var prevActiveLink = tabLinks.eq(0), currentTab, animating;
			var tabHolder;
			
			// init tabLinks
			tabLinks.each(function(){
				var link = $(this);
				var href = link.attr('href');
				var parent = link.parent();
				href = href.substr(href.lastIndexOf('#'));
				
				// get elements
				var tab = $(href);
				link.data('cparent', parent);
				link.data('ctab', tab);
				
				// find tab holder
				if(!tabHolder && tab.length) {
					tabHolder = tab.parent();
				}
				
				// show only active tab
				if((options.addToParent ? parent : link).hasClass(options.activeClass)) {
					prevActiveLink = link; currentTab = tab;
					tab.removeClass(tabHiddenClass).width('');
					contentTabsEffect[options.effect].show({tab:tab, fast:true});
				} else {
					contentTabsEffect[options.effect].hide({tab:tab, fast:true});
					tab.width(tab.width()).addClass(tabHiddenClass);
				}
				
				// event handler
				link.bind(options.event, function(e){
					if(link != prevActiveLink && !animating) {
						switchTab(prevActiveLink, link);
						prevActiveLink = link;
					}
					e.preventDefault();
				});
				if(options.event !== 'click') {
					link.bind('click', function(e){
						e.preventDefault();
					});
				}
			});
			
			// tab switch function
			function switchTab(oldLink, newLink) {
				animating = true;
				var oldTab = oldLink.data('ctab');
				var newTab = newLink.data('ctab');
				currentTab = newTab;
				
				// refresh pagination links
				(options.addToParent ? tabLinksParents : tabLinks).removeClass(options.activeClass);
				(options.addToParent ? newLink.data('cparent') : newLink).addClass(options.activeClass);
				
				// hide old tab
				resizeHolder(oldTab, true);
				contentTabsEffect[options.effect].hide({
					speed: options.animSpeed,
					tab:oldTab,
					complete: function() {
						// show current tab
						resizeHolder(newTab.removeClass(tabHiddenClass).width(''));
						contentTabsEffect[options.effect].show({
							speed: options.animSpeed,
							tab:newTab,
							complete: function() {
								oldTab.width(oldTab.width()).addClass(tabHiddenClass);
								animating = false;
								resizeHolder(newTab, false);
								autoRotate();
							}
						});
					}
				});
			}
			
			// holder auto height
			function resizeHolder(block, state) {
				var curBlock = block && block.length ? block : currentTab;
				if(options.autoHeight && curBlock) {
					tabHolder.stop();
					if(state === false) {
						tabHolder.css({height:''});
					} else {
						var origStyles = curBlock.attr('style');
						curBlock.show().css({width:curBlock.width()});
						var tabHeight = curBlock.outerHeight(true);
						if(!origStyles) curBlock.removeAttr('style'); else curBlock.attr('style', origStyles);
						if(state === true) {
							tabHolder.css({height: tabHeight});
						} else {
							tabHolder.animate({height: tabHeight}, {duration: options.animSpeed});
						}
					}
				}
			}
			if(options.autoHeight) {
				$(window).bind('resize orientationchange', function(){
					resizeHolder(currentTab, false);
				});
			}
			
			// autorotation handling
			var rotationTimer;
			function nextTab() {
				var activeItem = (options.addToParent ? tabLinksParents : tabLinks).filter('.' + options.activeClass);
				var activeIndex = (options.addToParent ? tabLinksParents : tabLinks).index(activeItem);
				var newLink = tabLinks.eq(activeIndex < tabLinks.length - 1 ? activeIndex + 1 : 0);
				prevActiveLink = tabLinks.eq(activeIndex);
				switchTab(prevActiveLink, newLink);
			}
			function autoRotate() {
				if(options.autoRotate && tabLinks.length > 1) {
					clearTimeout(rotationTimer);
					rotationTimer = setTimeout(nextTab, options.switchTime);
				}
			}
			autoRotate();
		});
	}
	
	// add stylesheet for tabs on DOMReady
	var tabHiddenClass = 'js-tab-hidden';
	$(function() {
		var tabStyleSheet = $('<style type="text/css">')[0];
		var tabStyleRule = '.'+tabHiddenClass;
		tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important}';
		if (tabStyleSheet.styleSheet) {
			tabStyleSheet.styleSheet.cssText = tabStyleRule;
		} else {
			tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
		}
		$('head').append(tabStyleSheet);
	});
	
	// tab switch effects
	var contentTabsEffect = {
		none: {
			show: function(o) {
				o.tab.css({display:'block'});
				if(o.complete) o.complete();
			},
			hide: function(o) {
				o.tab.css({display:'none'});
				if(o.complete) o.complete();
			}
		},
		fade: {
			show: function(o) {
				if(o.fast) o.speed = 1;
				o.tab.fadeIn(o.speed);
				if(o.complete) setTimeout(o.complete, o.speed);
			},
			hide: function(o) {
				if(o.fast) o.speed = 1;
				o.tab.fadeOut(o.speed);
				if(o.complete) setTimeout(o.complete, o.speed);
			}
		},
		slide: {
			show: function(o) {
				var tabHeight = o.tab.show().css({width:o.tab.width()}).outerHeight(true);
				var tmpWrap = $('<div class="effect-div">').insertBefore(o.tab).append(o.tab);
				tmpWrap.css({width:'100%', overflow:'hidden', position:'relative'}); o.tab.css({marginTop:-tabHeight,display:'block'});
				if(o.fast) o.speed = 1;
				o.tab.animate({marginTop: 0}, {duration: o.speed, complete: function(){
					o.tab.css({marginTop: '', width: ''}).insertBefore(tmpWrap);
					tmpWrap.remove();
					if(o.complete) o.complete();
				}});
			},
			hide: function(o) {
				var tabHeight = o.tab.show().css({width:o.tab.width()}).outerHeight(true);
				var tmpWrap = $('<div class="effect-div">').insertBefore(o.tab).append(o.tab);
				tmpWrap.css({width:'100%', overflow:'hidden', position:'relative'});
				
				if(o.fast) o.speed = 1;
				o.tab.animate({marginTop: -tabHeight}, {duration: o.speed, complete: function(){
					o.tab.css({display:'none', marginTop:'', width:''}).insertBefore(tmpWrap);
					tmpWrap.remove();
					if(o.complete) o.complete();
				}});
			}
		}
	}
}(jQuery));

// accordion init
function initAccordion() {
	/*var config = {    
		over: expandAccordion, // function = onMouseOver callback (REQUIRED)    
		timeout: 500, // number = milliseconds delay before onMouseOut
		interval: 300, // number = millseconds delay between comparing mouse coordinates  
		out: collapseAccordion // function = onMouseOut callback (REQUIRED)    
	};
	jQuery('ul.jsAccordion li').hoverIntent( config );*/
	jQuery('ul.jsAccordion').slideAccordion({
		opener:'>a.opener',
		slider:'>div.slide',
		collapsible:true,
		animSpeed: 800,
		event:'click'
	});
}
/*
 * jQuery Accordion plugin
 */
;(function($){
	$.fn.slideAccordion = function(o){
		// default options
		var options = $.extend({
			addClassBeforeAnimation: false,
			activeClass:'active',
			opener:'.opener',
			slider:'.slide',
			animSpeed: 300,
			collapsible:true,
			event:'click'
		},o);

		return this.each(function(){
			// options
			var accordion = $(this);
			var items = accordion.find(':has('+options.slider+')');

			items.each(function(){
				var item = $(this);
				var opener = item.find(options.opener);
				var slider = item.find(options.slider);
				opener.bind(options.event, function(){
					if(!slider.is(':animated')) {
						if(item.hasClass(options.activeClass)) {
							if(options.collapsible) {
								slider.slideUp(options.animSpeed, function(){
									item.removeClass(options.activeClass);
								});
							}
						} else {
							var _levelItems = item.siblings('.'+options.activeClass);
							item.addClass(options.activeClass);
							slider.slideDown(options.animSpeed);
						
							// collapse others
							_levelItems.find(options.slider).slideUp(options.animSpeed, function(){
								_levelItems.removeClass(options.activeClass);
							})
						}
					}
					return false;
				});
				if(item.hasClass(options.activeClass)) slider.show(); else slider.hide();
			});
		});
	}
}(jQuery));

function expandAccordion(){
	var item = jQuery(this);
	if(item.find('> a.opener').text().length > 0 ) {
		item.addClass("active");
		var slider = item.find('> .slide');
		slider.show('fast');
	}
}

function collapseAccordion(){
	var item = jQuery(this);
	item.removeClass("active");
	var slider = item.find('.slide');
	slider.hide('fast');
}

function initPage() {
	initAutoScalingNav({
		menuId: "tools-nav",
		spacing: 8,
		constant: -8,
		tag: "strong"
	});
}

function initAutoScalingNav(o) {
	if (!o.menuId) o.menuId = "nav";
	if (!o.tag) o.tag = "a";
	if (!o.spacing) o.spacing = 0;
	if (!o.constant) o.constant = 0;
	if (!o.minPaddings) o.minPaddings = 0;
	if (!o.liHovering) o.liHovering = false;
	if (!o.sideClasses) o.sideClasses = false;
	if (!o.equalLinks) o.equalLinks = false;
	if (!o.flexible) o.flexible = false;
	var nav = document.getElementById(o.menuId);
	if(nav) {
		nav.className += " scaling-active";
		var lis = nav.getElementsByTagName("li");
		var asFl = [];
		var lisFl = [];
		var width = 0;
		for (var i=0, j=0; i<lis.length; i++) {
			if(lis[i].parentNode == nav) {
				var t = lis[i].getElementsByTagName(o.tag).item(0);
				asFl.push(t);
				asFl[j++].width = t.offsetWidth;
				lisFl.push(lis[i]);
				if(width < t.offsetWidth) width = t.offsetWidth;
			}
			if(o.liHovering) {
				lis[i].onmouseover = function() {
					this.className += " hover";
				}
				lis[i].onmouseout = function() {
					this.className = this.className.replace("hover", "");
				}
			}
		}
		var menuWidth = nav.clientWidth - asFl.length*o.spacing - o.constant;
		if(o.equalLinks && width * asFl.length < menuWidth) {
			for (var i=0; i<asFl.length; i++) {
				asFl[i].width = width;
			}
		}
		width = getItemsWidth(asFl);
		if(width < menuWidth) {
			var version = navigator.userAgent.toLowerCase();
			for (var i=0; getItemsWidth(asFl) < menuWidth; i++) {
				asFl[i].width++;
				if(!o.flexible) {
					asFl[i].style.width = asFl[i].width + "px";
				}
				if(i >= asFl.length-1) i=-1;
			}
			if(o.flexible) {
				for (var i=0; i<asFl.length; i++) {
					width = (asFl[i].width - o.spacing - o.constant/asFl.length)/menuWidth*100;
					if(i != asFl.length-1) {
						lisFl[i].style.width = width + "%";
					}
					else {
						if(navigator.appName.indexOf("Microsoft Internet Explorer") == -1 || version.indexOf("msie 8") != -1 || version.indexOf("msie 9") != -1)
							lisFl[i].style.width = width + "%";
					}
				}
			}
		}
		else if(o.minPaddings > 0) {
			for (var i=0; i<asFl.length; i++) {
				asFl[i].style.paddingLeft = o.minPaddings + "px";
				asFl[i].style.paddingRight = o.minPaddings + "px";
			}
		}
		if(o.sideClasses) {
			lisFl[0].className += " first-child";
			lisFl[0].getElementsByTagName(o.tag).item(0).className += " first-child-a";
			lisFl[lisFl.length-1].className += " last-child";
			lisFl[lisFl.length-1].getElementsByTagName(o.tag).item(0).className += " last-child-a";
		}
		nav.className += " scaling-ready";
	}
	function getItemsWidth(a) {
		var w = 0;
		for(var q=0; q<a.length; q++) {
			w += a[q].width;
		}
		return w;
	}
}
if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
	
	
	
	
// slideshow init
function initSlideShow() {
	var activeClass = 'active';
	jQuery('div.gallery').fadeGallery({
		slides: '.gallery-holder li.gallery-item',
		currentNumber: 'span.cur-num',
		totalNumber: 'span.all-num',
		switchSimultaneously: true,
		disableWhileAnimating: false,
		autoRotation: false,
		autoHeight: false,
		switchTime: 2000,
		animSpeed: 600
	});
	jQuery('div.content-gallery').each(function(){
		var holder = $(this),
			altSwitcher = holder.find('.switcher li');
		
		holder.fadeGallery({
			slides: '.gallery-holder li',
			currentNumber: 'span.cur-num',
			totalNumber: 'span.all-num',
			switchSimultaneously: true,
			disableWhileAnimating: false,
			autoRotation: false,
			autoHeight: false,
			switchTime: 2000,
			animSpeed: 600,
			onBeforeChange: function(){
				altSwitcher.removeClass(activeClass);
				altSwitcher.eq(this.currentIndex).addClass(activeClass);
			}
		});
		
		altSwitcher.each(function(ind){
			var cur = $(this);
			cur.bind('click',function(){
				altSwitcher.removeClass(activeClass);
				cur.addClass(activeClass);
				holder.data('FadeGallery').numSlide(ind);
				return false;
			});
		});
	});
	
}
	
/*
 * jQuery SlideShow plugin
 */
;(function($){
	function FadeGallery(options) {
		this.options = $.extend({
			slides: 'ul.slideset > li',
			activeClass:'active',
			disabledClass:'disabled',
			btnPrev: 'a.btn-prev',
			btnNext: 'a.btn-next',
			generatePagination: false,
			pagerList: '<ul>',
			pagerListItem: '<li><a href="#"></a></li>',
			pagerListItemText: 'a',
			pagerLinks: '.gallery-panel li',
			currentNumber: 'span.current-num',
			totalNumber: 'span.total-num',
			btnPlay: '.btn-play',
			btnPause: '.btn-pause',
			btnPlayPause: '.btn-play-pause',
			autorotationActiveClass: 'autorotation-active',
			autorotationDisabledClass: 'autorotation-disabled',
			autorotationStopAfterClick: false,
			circularRotation: true,
			switchSimultaneously: true,
			disableWhileAnimating: false,
			disableFadeIE: false,
			autoRotation: false,
			pauseOnHover: true,
			autoHeight: false,
			switchTime: 4000,
			animSpeed: 600,
			event:'click'
		}, options);
		this.init();
	}
	FadeGallery.prototype = {
		init: function() {
			if(this.options.holder) {
				this.findElements();
				this.initStructure();
				this.attachEvents();
				this.refreshState(true);
				this.autoRotate();
				this.makeCallback('onInit', this);
			}
		},
		findElements: function() {
			// control elements
			this.gallery = $(this.options.holder);
			this.slides = this.gallery.find(this.options.slides);
			this.slidesHolder = this.slides.eq(0).parent();
			this.stepsCount = this.slides.length;
			this.btnPrev = this.gallery.find(this.options.btnPrev);
			this.btnNext = this.gallery.find(this.options.btnNext);
			this.currentIndex = 0;
			
			// disable fade effect in old IE
			if(this.options.disableFadeIE && $.browser.msie && $.browser.version < 9) {
				this.options.animSpeed = 0;
			}
			
			// create gallery pagination
			if(typeof this.options.generatePagination === 'string') {
				this.pagerHolder = this.gallery.find(this.options.generatePagination).empty();
				this.pagerList = $(this.options.pagerList).appendTo(this.pagerHolder);
				for(var i = 0; i < this.stepsCount; i++) {
					$(this.options.pagerListItem).appendTo(this.pagerList).find(this.options.pagerListItemText).text(i+1);
				}
				this.pagerLinks = this.pagerList.children();
			} else {
				this.pagerLinks = this.gallery.find(this.options.pagerLinks);
			}
			
			// get start index
			var activeSlide = this.slides.filter('.'+this.options.activeClass);
			if(activeSlide.length) {
				this.currentIndex = this.slides.index(activeSlide);
			}
			this.prevIndex = this.currentIndex;
			
			// autorotation control buttons
			this.btnPlay = this.gallery.find(this.options.btnPlay);
			this.btnPause = this.gallery.find(this.options.btnPause);
			this.btnPlayPause = this.gallery.find(this.options.btnPlayPause);
			
			// misc elements
			this.curNum = this.gallery.find(this.options.currentNumber);
			this.allNum = this.gallery.find(this.options.totalNumber);
		},
		initStructure: function() {
			this.slides.css({display:'block',opacity:0}).eq(this.currentIndex).css({
				opacity:''
			});
		},
		attachEvents: function() {
			var self = this;
			this.btnPrev.bind(this.options.event, function(e){
				self.prevSlide();
				if(self.options.autorotationStopAfterClick) {
					self.stopRotation();
				}
				e.preventDefault();
			});
			this.btnNext.bind(this.options.event, function(e){
				self.nextSlide();
				if(self.options.autorotationStopAfterClick) {
					self.stopRotation();
				}
				e.preventDefault();
			});
			this.pagerLinks.each(function(ind, obj){
				$(obj).bind(self.options.event, function(e){
					self.numSlide(ind);
					if(self.options.autorotationStopAfterClick) {
						self.stopRotation();
					}
					e.preventDefault();
				});
			});
			
			// autorotation buttons handler
			this.btnPlay.bind(this.options.event, function(e){
				self.startRotation();
				e.preventDefault();
			});
			this.btnPause.bind(this.options.event, function(e){
				self.stopRotation();
				e.preventDefault();
			});
			this.btnPlayPause.bind(this.options.event, function(e){
				if(!self.gallery.hasClass(self.options.autorotationActiveClass)) {
					self.startRotation();
				} else {
					self.stopRotation();
				}
				e.preventDefault();
			});
			
			// pause on hover handling
			if(this.options.pauseOnHover) {
				this.gallery.hover(function(){
					if(self.options.autoRotation) {
						self.galleryHover = true;
						self.pauseRotation();
					}
				}, function(){
					if(self.options.autoRotation) {
						self.galleryHover = false;
						self.resumeRotation();
					}
				});
			}
		},
		prevSlide: function() {
			if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
				this.prevIndex = this.currentIndex;
				if(this.currentIndex > 0) {
					this.currentIndex--;
					this.switchSlide();
				} else if(this.options.circularRotation) {
					this.currentIndex = this.stepsCount - 1;
					this.switchSlide();
				}
			}
		},
		nextSlide: function(fromAutoRotation) {
			if(!(this.options.disableWhileAnimating && this.galleryAnimating)) {
				this.prevIndex = this.currentIndex;
				if(this.currentIndex < this.stepsCount - 1) {
					this.currentIndex++;
					this.switchSlide();
				} else if(this.options.circularRotation || fromAutoRotation === true) {
					this.currentIndex = 0;
					this.switchSlide();
				}
			}
		},
		numSlide: function(c) {
			if(this.currentIndex != c) {
				this.prevIndex = this.currentIndex;
				this.currentIndex = c;
				this.switchSlide();
			}
		},
		switchSlide: function() {
			var self = this;
			if(this.slides.length > 1) {
				this.galleryAnimating = true;
				this.slides.eq(this.prevIndex).stop().animate({opacity:0},{duration: this.options.animSpeed, complete: function(){
					self.slides.eq(self.prevIndex).css({opacity:0});
				}});
				clearTimeout(this.switchTimer);
				this.switchTimer = setTimeout(function(){
					self.slides.eq(self.currentIndex).stop().animate({opacity:1},{duration: self.options.animSpeed, complete: function(){
						self.slides.eq(self.currentIndex).css({opacity:''});
						self.galleryAnimating = false;
						self.autoRotate();
						
						// onchange callback
						self.makeCallback('onChange', self);
					}});
					
				}, this.options.switchSimultaneously ? 1 : this.options.animSpeed);
				this.refreshState();
				
				// onchange callback
				this.makeCallback('onBeforeChange', this);
			}
		},
		refreshState: function(initial) {
			this.slides.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
			this.pagerLinks.removeClass(this.options.activeClass).eq(this.currentIndex).addClass(this.options.activeClass);
			this.curNum.html(this.currentIndex+1);
			this.allNum.html(this.stepsCount);
			
			// initial refresh
			if(this.options.autoHeight) {
				if(initial) {
					this.slidesHolder.css({height: this.slides.eq(this.currentIndex).outerHeight(true) });
				} else {
					this.slidesHolder.stop().animate({height: this.slides.eq(this.currentIndex).outerHeight(true)}, {duration: this.options.animSpeed});
				}
			}
			
			// disabled state
			if(!this.options.circularRotation) {
				this.btnPrev.add(this.btnNext).removeClass(this.options.disabledClass);
				if(this.currentIndex === 0) this.btnPrev.addClass(this.options.disabledClass);
				if(this.currentIndex === this.stepsCount - 1) this.btnNext.addClass(this.options.disabledClass);
			}
		},
		startRotation: function() {
			this.options.autoRotation = true;
			this.galleryHover = false;
			this.autoRotationStopped = false;
			this.resumeRotation();
		},
		stopRotation: function() {
			this.galleryHover = true;
			this.autoRotationStopped = true;
			this.pauseRotation();
		},
		pauseRotation: function() {
			this.gallery.addClass(this.options.autorotationDisabledClass);
			this.gallery.removeClass(this.options.autorotationActiveClass);
			clearTimeout(this.timer);
		},
		resumeRotation: function() {
			if(!this.autoRotationStopped) {
				this.gallery.addClass(this.options.autorotationActiveClass);
				this.gallery.removeClass(this.options.autorotationDisabledClass);
				this.autoRotate();
			}
		},
		autoRotate: function() {
			var self = this;
			clearTimeout(this.timer);
			if(this.options.autoRotation && !this.galleryHover && !this.autoRotationStopped) {
				this.gallery.addClass(this.options.autorotationActiveClass);
				this.timer = setTimeout(function(){
					self.nextSlide(true);
				}, this.options.switchTime);
			} else {
				this.pauseRotation();
			}
		},
		makeCallback: function(name) {
			if(typeof this.options[name] === 'function') {
				var args = Array.prototype.slice.call(arguments);
				args.shift();
				this.options[name].apply(this, args);
			}
		}
	}

	// jquery plugin
	$.fn.fadeGallery = function(opt){
		return this.each(function(){
			$(this).data('FadeGallery', new FadeGallery($.extend(opt,{holder:this})));
		});
	}
}(jQuery));

//initNav
function initNav(o) {
	if (!o.menuId) o.menuId = "main-nav";
	if (!o.cleverMode) o.cleverMode = false;
	if (!o.flexibility) o.flexibility = false;
	if (!o.dropExistenceClass) o.dropExistenceClass = false;
	if (!o.hoverClass) o.hoverClass = "hover";
	if (!o.menuHardCodeClass) o.menuHardCodeClass = "menu-hard-code";
	if (!o.sideClasses) o.sideClasses = false;
	if (!o.center) o.center = false;
	if (!o.menuPaddings) o.menuPaddings = 0;
	if (!o.minWidth) o.minWidth = 0;
	if (!o.coeff) o.coeff = 1.7;
	var n = document.getElementById(o.menuId);
	if(n)
	{
		n.className = n.className.replace(o.menuHardCodeClass, "");
		var lfl = [];
		var li = n.getElementsByTagName("li");
		for (var i=0; i<li.length; i++)
		{
			li[i].className += (" " + o.hoverClass);
			var d = li[i].getElementsByTagName("div").item(0);
			if(d)
			{
				if(o.flexibility)
				{
					var a = d.getElementsByTagName("a");
					for (var j=0; j<a.length; j++)
					{
						var w = a[j].parentNode.parentNode.offsetWidth;
						if(w > 0)
						{
							if(typeof(o.minWidth) == "number" && w < o.minWidth)
								w = o.minWidth;
							else if(typeof(o.minWidth) == "string" && li[i].parentNode == n && w < li[i].offsetWidth)
								w = li[i].offsetWidth - 5;
							a[j].style.width = w - o.menuPaddings + "px";
						}
					}
					d.style.width = li[i].getElementsByTagName("div").item(1).clientWidth + "px";
				}
				var t = document.documentElement.clientWidth/o.coeff;
				if(li[i].parentNode != n && (!o.cleverMode || fPX(li[i]) < t))
				{
					d.style.right = "auto";
					d.style.left = li[i].parentNode.offsetWidth + "px";
					d.parentNode.className += " left-side";
				}	
				else if(li[i].parentNode != n && (o.cleverMode || fPX(li[i]) >= t))
				{
					d.style.left = "auto";
					d.style.right = li[i].parentNode.offsetWidth + "px";
					d.parentNode.className += " right-side";
				}
				else if(li[i].parentNode == n && o.cleverMode && fPX(li[i]) >= t)
				{
					li[i].className += " right-side";
				}
				if(li[i].parentNode == n && o.center)
					d.style.left = -li[i].getElementsByTagName("div").item(1).clientWidth/2 + li[i].clientWidth/2 + "px";
			}
			if(o.dropExistenceClass && li[i].getElementsByTagName("ul").length > 0)
			{
				li[i].className += (" " + o.dropExistenceClass);
				li[i].getElementsByTagName("a").item(0).className += (" " + o.dropExistenceClass + "-link");
				li[i].innerHTML += "<em class='pointer'></em>";
			}
			if(li[i].parentNode == n) lfl.push(li[i]);
		}
		if(o.sideClasses)
		{
			lfl[0].className += " first-child";
			lfl[0].getElementsByTagName("a").item(0).className += " first-child-link";
			lfl[lfl.length-1].className += " last-child";
			lfl[lfl.length-1].getElementsByTagName("a").item(0).className += " last-child-link";
		}
		for (var i=0; i<li.length; i++)
		{
			li[i].className = li[i].className.replace(o.hoverClass, "");
			li[i].onmouseover = function()
			{
				this.className += (" " + o.hoverClass);
			}
			li[i].onmouseout = function()
			{
				this.className = this.className.replace(o.hoverClass, "");
			}
		}
	}
	function fPX(a)
	{
		var b = 0;
		while (a.offsetParent) {b += a.offsetLeft; a = a.offsetParent;}
		return b;
	}
}

/*
 * jQuery Dropdown plugin
 */
;(function($){
	$.fn.animDropdown = function(o){
		// default options
		var options = $.extend({
			hoverClass:'hover',
			dropClass:'drop-active',
			items: 'li',
			drop: '>ul',
			delay: 100,
			animSpeed: 300,
			effect: 'fade'
		},o);

		return this.each(function(){
			// options
			var nav = $(this);
				items = nav.find(options.items);

			items.addClass(options.hoverClass).each(function(){
				var item = $(this), delayTimer;
				var drop = item.find(options.drop);
				item.data('drop', drop);
				if(drop.length) {
					dropdownEffects[options.effect].prepare({item:item,drop:drop});
				}
				
				item.bind('mouseenter', function(){
					hideAllDropdowns(item);
					item.addClass(options.hoverClass);
					clearTimeout(delayTimer);
					delayTimer = setTimeout(function(){
						if(drop.length && item.hasClass(options.hoverClass)) {
							item.addClass(options.dropClass);
							dropdownEffects[options.effect].animate({drop:drop, state:true, speed:options.animSpeed, complete:function(){
								// callback
							}});
						}
					}, options.delay);
					item.data('timer', delayTimer);
				}).bind('mouseleave', function(){
					if(!item.hasClass(options.dropClass)) {
						item.removeClass(options.hoverClass);
					}
					clearTimeout(delayTimer);
					delayTimer = setTimeout(function(){
						if(drop.length && item.hasClass(options.dropClass)) {
							dropdownEffects[options.effect].animate({drop:drop, state:false, speed:options.animSpeed, complete:function(){
								// callback
								item.removeClass(options.hoverClass);
								item.removeClass(options.dropClass);
							}});
						}
					}, options.delay);
					item.data('timer', delayTimer);
				});
			});
			
			// hide dropdowns
			items.removeClass(options.hoverClass);
			if(dropdownEffects[options.effect].postProcess) {
				items.each(function(){
					dropdownEffects[options.effect].postProcess({item: $(this)});
				});
			}
			
			// hide current level dropdowns
			function hideAllDropdowns(except) {
				var siblings = except.siblings();
				siblings.removeClass(options.hoverClass).each(function(){
					var item = $(this);
					clearTimeout(item.data('timer'));
				});
				siblings.filter('.' + options.dropClass).each(function(){
					var item = jQuery(this).removeClass(options.dropClass);
					if(item.data('drop').length) {
						dropdownEffects[options.effect].animate({drop:item.data('drop'), state:false, speed:options.animSpeed});
					}
				});
			}
		});
	}
	
	// dropdown effects
	var dropdownEffects = {
		fade: {
			prepare: function(o) {
				o.drop.css({opacity:0,display:'none'}); 
			},
			animate: function(o) {
				o.drop.stop().show().animate({opacity: o.state ? 1 : 0},{duration: o.speed || 0, complete: function(){
					if(o.state) {
						o.drop.css({opacity:''});
					} else {
						o.drop.css({opacity:0,display:'none'});
					}
					if(typeof o.complete === 'function') {
						o.complete.call(o.drop);
					}
				}});
			}
		},
		slide: {
			prepare: function(o) {
				var elementHeight = o.drop.show().outerHeight(true);
				var elementWidth = o.drop.show().outerWidth(true);
				var elementWrap = o.drop.wrap('<div class="drop-slide-wrapper">').parent();
				elementWrap.css({
					height:elementHeight,
					width: elementWidth,
					position:'absolute',
					overflow:'hidden',
					top: o.drop.css('top'),
					left: o.drop.css('left')
				});
				o.drop.css({
					position:'static',
					display:'block',
					top: 'auto',
					left: 'auto'
				});
				o.drop.data('height', elementHeight).data('wrap', elementWrap).css({marginTop: -elementHeight}); 
			},
			animate: function(o) {
				o.drop.data('wrap').show().css({overflow:'hidden'});
				o.drop.stop().animate({marginTop: o.state ? 0 : -o.drop.data('height')},{duration: o.speed || 0, complete: function(){
					if(o.state) {
						o.drop.css({marginTop:''});
						o.drop.data('wrap').css({overflow:''});
					} else {
						o.drop.data('wrap').css({display:'none'});
					}
					if(typeof o.complete === 'function') {
						o.complete.call(o.drop);
					}
				}});
			},
			postProcess: function(o) {
				if(o.item.data('drop').length) {
					o.item.data('drop').data('wrap').css({display:'none'});
				}
			}
		}
	}
}(jQuery));

