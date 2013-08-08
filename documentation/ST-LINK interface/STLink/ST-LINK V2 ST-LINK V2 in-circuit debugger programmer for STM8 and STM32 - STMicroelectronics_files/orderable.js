jQuery(document).ready(function () {
    jQuery(".orderable-table").tablesorter({
        sortList: [
            [0, 0]
        ],
        widgets: ['stickyHeaders'] 
    });
    
    /* Tooltip */
    tooltip();
    
    
});


/*jQuery(document).ready(function () {
    jQuery(".orderable-table").tablesorter({
        sortList: [
            [0, 0]
        ],
        headers: { 
            9: { 
                sorter: false 
            }, 
            12: { 
                sorter: false 
            }
        },
        widgets: ['stickyHeaders'] 
    });

    tooltip();
    
    
});*/


// Sticky header widget
// based on this awesome article:
// http://css-tricks.com/13465-persistent-headers/
// **************************
jQuery.tablesorter.addWidget({
  id: "stickyHeaders",
  format: function(table) {
    if (jQuery(table).find('.stickyHeader').length) { return; }
    var win = jQuery(window),
      header = jQuery(table).children('thead'),
      hdrCells = header.find('tr').children(),
      firstCell = hdrCells.eq(0),
      sticky = header.find('tr').clone()
        .addClass('stickyHeader')
        .css({

            position   : 'fixed',
            left       : jQuery(table).offset().left -2,
            visibility : 'hidden',
			display	   : 'none',
            zIndex     : 10,
            top        : 0

        }),
      stkyCells = sticky.children();
    // update sticky header class names to match real header
    jQuery(table).bind('sortEnd', function(e,t){
      var th = jQuery(t).find('thead tr'),
        sh = th.filter('.stickyHeader').children();
      th.filter(':not(.stickyHeader)').children().each(function(i){
        sh.eq(i).attr('class', jQuery(this).attr('class'));
      });
    });
    // set sticky header cell width and link clicks to real header
    hdrCells.each(function(i){
      var t = jQuery(this),
      s = stkyCells.eq(i)
      // set cell widths
      .width( t.width())
      .css({
        margin: 'none',
        padding: 'none'
      })
      // clicking on sticky will trigger sort
      .bind('click', function(e){
        t.trigger(e);
      })
      // prevent sticky header text selection
      .bind('mousedown', function(){
        this.onselectstart = function(){ return false; };
        return false;
      })
      .find(".or-description").removeClass("or-description").addClass("or-descriptionsticky");
      
    });
    header.prepend( sticky );
    // make it sticky!
    win.scroll(function(){
      var t = jQuery(table),
        offset = jQuery(t).offset(),
        sTop = win.scrollTop(),
		sLeft = win.scrollLeft(),
        sticky = jQuery(t).find('.stickyHeader'),
        vis = ((sTop > offset.top) && (sTop < offset.top + jQuery(t).height())) ? 'visible' : 'hidden';
		display = ((sTop > offset.top) && (sTop < offset.top + jQuery(t).height())) ? 'block' : 'none';
		
      sticky.css({'visibility': vis,left:offset.left-sLeft,'display':display});
    });
  }
});



this.tooltip = function(){		
    xOffset = 0;
    yOffset = 40;		
	jQuery(".or-description, .or-descriptionsticky").hover(function(e){  
		this.t = this.title;
		this.title = "";
        var tooltip = jQuery('<div id="or-tooltip"></div>');
        jQuery(tooltip).html(this.t);
        var currentPosition = jQuery(this).parent().offset();
        
        jQuery(tooltip).css(
        {
            position: "fixed",
            top: currentPosition.top + yOffset + "px",
            left: currentPosition.left + xOffset + "px",
            zIndex: 20,
            display: "none"
        });
		
        if(jQuery(this).hasClass('or-descriptionsticky'))
        {
            jQuery(tooltip).css(
            {
                top: 0 + yOffset + "px",
                left: currentPosition.left + xOffset + 6 + "px"
            });
        }

            
        jQuery("body").append(jQuery(tooltip));   
        jQuery("#or-tooltip").fadeIn('fast');        
    },
	function(){
		this.title = this.t;		
		jQuery("#or-tooltip").remove();
    });			
};
