/*
 * china_area.zepto
 * https://github.com/sang/china_area.zepto
 *
 * Copyright (c) 2015 alfred sang
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.china_area_zepto = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.china_area_zepto = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.china_area_zepto.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.china_area_zepto.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].china_area_zepto = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
