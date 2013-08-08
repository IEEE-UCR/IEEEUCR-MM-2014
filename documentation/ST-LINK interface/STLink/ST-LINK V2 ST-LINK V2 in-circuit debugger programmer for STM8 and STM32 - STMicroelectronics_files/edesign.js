/* Usage
Show/hide tabs
add parameter tabs to url
&tabs=photovoltaic,led_acdc
*/
var develop = false;

if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        "use strict";
        if (this === void 0 || this === null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== Infinity && n !== -Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    }
}



jQuery(document).ready(function ($) {
    var slideWidth = jQuery(".edesign-formbox").innerWidth();
    var slideSum = jQuery(".edesign-form .edesign-formbox").size();
    var sliderWidth = slideWidth * slideSum;
    var transition = 420; //millisecond
    var duration = 350;
    var easing = 'linear';
    var resultAddress = 'http://ims.st.com/edesign/content/results.html';
    //var rpnAddress = 'http://ims.st.com/edesign/content/results-rpn.html';
    if (develop == false) {
        //var resultAddress		= 'https://cadweb01.ctn.st.com:8553/edesign_widget/content/results.html';
        //var rpnAddress          = 'https://cadweb01.ctn.st.com:8553/edesign_widget/content/results-rpn.html';
        //var serverAddress		= 'https://cadweb01.ctn.st.com:8553/edsSelection/';
        var resultAddress = '../../com/edesign/results.jsp';
        //var rpnAddress = '../../com/edesign/results-rpn.jsp';
        var serverAddress = 'http://www.st.com/stonline/stappl/edsSelection/rest/';
    }

    var contexts = ['dcdc', 'acdc', 'led_dcdc', 'led_acdc', 'photovoltaic', 'charger'];
    var applications = ['DC/DC Converter', 'AC/DC Converter', 'DC/DC LED Driver', 'AC/DC LED Driver', 'Photovoltaic Battery Charger', 'Battery Charger'];
    var currentButton = jQuery(".edesign-topmenu").children('li > input:first');
    var currentSlide = '#' + jQuery(".edesign-form").children('div:first').attr("id");
    var containerPosition = jQuery('.edesign-form').position();
    var containerWidth = jQuery('.edesign-form').innerWidth();
    var slideIndex = 0;
    var context = contexts[slideIndex];
    var currentForm = '#edesign-form-' + contexts[slideIndex];
    var tempcounter = 1;
    var previousForm;
    var newButton;
    var newSlide;
    var urlstring = "";
    //var rpn = "";
    var border = "";



    // Check if tabs or RPN parameters exist
    var tabs = jQuery.getUrlVar('tabs'); 
    // test
    try
    {
        var tabsfromurl = tabs.replace(/\|/g,',');
        setTabs(tabsfromurl);
        if (jQuery.browser.msie) {

            try {

                var parIframe = parent.document.getElementById(window.name);
                intervalId = setInterval(function () {
                    if (jQuery(parIframe).is(':visible')) {
                        clearInterval(intervalId);
                        setTabs(tabsfromurl);
                    }
                }, 100);
            } catch (err) {

        }
    }
        
    }catch(err){}

        

    function setTabs(string) {
        tabs = string;
        //Hide parent iframe if no results from rpn check
        if (tabs == "") {
            jQuery("#edesign-rpn-box", top.document).hide();
        }
		else
        {
            jQuery("#edesign-rpn-box", top.document).show();
        }
        showTabs(tabs)
    }

    //rpn = jQuery.getUrlVar('rpn');
    var cont = jQuery.getUrlVar('context');
    border = jQuery.getUrlVar('border')
    
    if(rpn && cont)
    {
        jQuery(".edesign-container").prepend('<div class="edesign-widgettitle"></div>');
    }
    else if(cont)
    {
        jQuery(".edesign-container").prepend('<div class="edesign-widgettitle"></div>');
    }
    else if(rpn)
    {
        jQuery(".edesign-container").prepend('<div class="edesign-widgettitle">eDesignSuite</div>');
		jQuery(".edesign-container").addClass("edesign-border");
    }    
    else if(border)
    {
        jQuery(".edesign-container").prepend('<div class="edesign-widgettitle">eDesignSuite</div>');
        jQuery(".edesign-container").addClass("edesign-border");
    }

    
    
    
    if (rpn) {
        if (develop == true) {
            var rpnQuery = "http://ims.st.com/edesign/content/solutions.xml";
        } else {
            var rpnQuery = serverAddress + "solutions?rpn=" + rpn;
        }
        /*jQuery.ajax({
			url: rpnQuery,
			dataType: 'xml',
			async: false,
			success: function(data) {
				xmlResults = jQuery(data);
				tabsarray = []
				jQuery(xmlResults).find('solution').each(function() {
					var applic = jQuery.inArray(jQuery(this).attr('application'), applications);
					var tempTab = contexts[applic];
					if(jQuery.inArray(tempTab, tabsarray) == -1)
					{
						if(tempTab != "")
                        {
                            tabsarray[applic] = tempTab;
					    }
                    }
				});
				setTabs(tabsarray.join(','));
                
			},
			error: function(x, textStatus, errorThrown){
				if(x.status==0){
				alert('You are offline!!\n Please Check Your Network.');
				}else if(x.status==404){
				alert('Requested URL not found.');
				}else if(x.status==500){
				alert('Internel Server Error.');
				}else if(e=='parsererror'){
				alert('Error.\nParsing JSON Request failed.');
				}else if(e=='timeout'){
				alert('Request Time out.');
				}else {
				alert('Unknow Error.\n'+x.responseText);
			}
        }  
		});*/
        function processXml(dati) {
            var xmlData = parseXml(dati);
            tabsarray = [];

            jQuery(xmlData).find('solution').each(function () {
                var applic = jQuery.inArray(jQuery(this).attr('application'), applications);
                var tempTab = contexts[applic];
                if (jQuery.inArray(tempTab, tabsarray) == -1) {
                    if (tempTab != "") {
                        tabsarray[applic] = tempTab;
                    }
                }
            });
            setTabs(tabsarray.join(','));
        }

        // Accepts a url and a callback function to run.
        function requestCrossDomain(site, callback) {

            jQuery.ajax({
                url: site,
                dataType: 'jsonp',
                data: {},
                crossDomain: true,
                jsonp: "jsonp",
                async: false,
                success: function (data) {
                    callback(data);
                }
            });
        }

        function parseXml(xml) {
             if (jQuery.browser.msie) {
                var xmlDoc = new ActiveXObject("Microsoft.XMLDOM"); 
                xmlDoc.loadXML(xml);
                xml = xmlDoc;
            }   
            return xml;
        }

        function getUrlJsonp(url) {
            requestCrossDomain(url, processXml);
        }


        getUrlJsonp(rpnQuery);

    }

    function showTabs(tabs) {
        if (tabs) {
            var tabsarray = tabs.split(",");

            // clean empty values
            var cleantabs = new Array();

            jQuery(tabsarray).each(function (index, value) {
                if (value != "") {
                    cleantabs.push(value);
                }
            });

            var localButton = jQuery.inArray(cleantabs[0], contexts) + 1;

            currentButton = jQuery(".edesign-topmenu").find("#edesign-button" + (localButton));
            currentSlide = '#' + jQuery(currentButton).attr('id').replace("edesign-button", "edesign-form");

            //jQuery(this).appear(function() {
            changeSlide(currentButton, currentSlide);
            //});



            jQuery(currentButton).attr("checked", true).trigger("change");
            jQuery.showHideButtons(cleantabs.join(','), contexts);
        }
    }



    if (jQuery.browser.mozilla) {

        try {

            var parIframe = parent.document.getElementById(window.name);
            intervalId = setInterval(function () {
                if (jQuery(parIframe).is(':visible')) {
                    clearInterval(intervalId);
                    changeSlide(currentButton, currentSlide);
                }
            }, 100);
        } catch (err) {

        }
    }


    // INIT	
    jQuery('.edesign-button').button();
    jQuery('.edesign-submitbutton').button();
    jQuery('.edesign-radio').buttonset();
    jQuery(currentButton).attr("checked", true).trigger("change");
    jQuery('input').attr("autocomplete", "off");
    jQuery(".edesign-presetsselector option:eq(0)").attr("selected", "selected");

    jQuery('input[name="input.v.min"]').forceNumeric();
    jQuery('input[name="input.v.max"]').forceNumeric();
    jQuery('.edesign-vout').forceNumeric();
    jQuery('.edesign-cout').forceNumeric();
    jQuery('.edesign-led').forceNumeric();
    jQuery('.edesign-pv').forceNumeric();


    jQuery(".edesign-wattage").fadeIn('fast');
    // jQuery(currentSlide).show();
    edesign_validate();
    edesign_addline();





    // VIEWS SLIDER
    jQuery('.edesign-button').click(function (event) {
        event.preventDefault();

        jQuery(".edesign-button").each(function () {
            jQuery(this).removeAttr("checked").trigger("change");
        });

        jQuery(".edesign-form .edesign-formbox").each(function () {
            jQuery(this).hide();
        });

        jQuery(this).attr("checked", true).trigger("change");

        newButton = jQuery(this).attr("id");
        newSlide = '#' + newButton.replace("edesign-button", "edesign-form");
        changeSlide(newButton, newSlide);
    });

    function changeSlide(newButton, newSlide) {
        jQuery(newSlide).fadeIn('slow');
        slideIndex = jQuery('.edesign-form').children().index(jQuery(newSlide));
        slidingMargin = -slideWidth * slideIndex + 'px';
        //jQuery('.edesign-form').animate({marginLeft: slidingMargin}, duration, easing);
        context = contexts[slideIndex];
        previousForm = currentForm;
        currentForm = '#edesign-form-' + contexts[slideIndex];

        currentSlide = newSlide;
        edesign_validate();

        if (context == "led_dcdc") {
            jQuery('#edesign-dcdcledspinner').spinner({
                min: 1,
                max: 20
            });
        } else if (context == "led_acdc") {
            jQuery('#edesign-acdcledspinner').spinner({
                min: 1,
                max: 20
            });
        }
    }




    jQuery('.edesign-item_1').find('[name="output.0.v"]').val('');
    jQuery('.edesign-item_1').find('[name="output.0.i"]').val('');
    jQuery('.edesign-item_1').find('[name="output.0.v"]').attr('autocomplete', 'off');
    jQuery('.edesign-item_1').find('[name="output.0.i"]').attr('autocomplete', 'off');
    // DEFAULT LISTENER
    addListener(jQuery('.edesign-item_1').find('[name="output.0.v"]'));
    addListener(jQuery('.edesign-item_1').find('[name="output.0.i"]'));
    addListenerLed(jQuery('.edesign-items').find('[name="led.VF"]'));
    addListenerLed(jQuery('.edesign-items').find('[name="led.IF"]'));
    addListenerLed(jQuery('.edesign-serie').find('[name="led.numSerie"]'));

    // VALIDATION
    function edesign_validate() {
        jQuery('.edesign-submitbutton').click(function (event) {
            var clickedButton = jQuery(this);
            var v = jQuery(currentForm).validate({
                event: "submit",
                onfocusout: function (element) {
                    if (element.name != "someElementNameToExclude") this.element(element);
                },
                rules: {
                    "input.v.min": "smallerThan",
                    "input.v.max": "greaterThan",
                    "input.vmp": "smallerThanPV",
                    "input.voc": "greaterThanPV",
                    "input.imp": "smallerThanPV2",
                    "input.isc": "greaterThanPV2"


                },
                submitHandler: function (form) {

                    var formcounter = 0;
                    var urlarray = [];


                    // ['dcdc', 'acdc', 'led_dcdc', 'led_acdc', 'sbc', 'acdc_iqrfb'];
                    if (context == 'dcdc' || context == 'acdc' || context == 'led_dcdc' || context == 'led_acdc' || context == 'charger') {
                        urlarray.push("input.v.min=" + jQuery(currentForm).find('[name="input.v.min"]').val());
                        urlarray.push("input.v.max=" + jQuery(currentForm).find('[name="input.v.max"]').val());
                    }


                    if (context == 'dcdc' || context == 'acdc' || context == 'charger') {
                        jQuery(currentForm + " .edesign-output .edesign-formline").each(function () {
                            urlarray.push("output." + formcounter + ".v=" + jQuery(this).find('.edesign-vout').val());
                            urlarray.push("output." + formcounter + ".i=" + jQuery(this).find('.edesign-cout').val());
                            formcounter++;
                        });
                    }

                    if (context == 'acdc' || context == 'led_acdc' || context == 'charger') {
                        urlarray.push("input.f=" + jQuery(currentForm).find('[name="input.f"]:checked').val());
                    }

                    if (context == 'led_dcdc' || context == 'led_acdc') {
                        urlarray.push("led.VF=" + jQuery(currentForm).find('[name="led.VF"]').val());
                        urlarray.push("led.IF=" + jQuery(currentForm).find('[name="led.IF"]').val());
                        urlarray.push("led.Rd=" + jQuery(currentForm).find('[name="led.Rd"]').val());
                        urlarray.push("led.numSerie=" + jQuery(currentForm).find('[name="led.numSerie"]').val());
                    }

                    if (context == 'photovoltaic') {
                        urlarray.push("input.vmp=" + jQuery(currentForm).find('[name="input.vmp"]').val());
                        urlarray.push("input.voc=" + jQuery(currentForm).find('[name="input.voc"]').val());
                        urlarray.push("input.imp=" + jQuery(currentForm).find('[name="input.imp"]').val());
                        urlarray.push("input.isc=" + jQuery(currentForm).find('[name="input.isc"]').val());
                        urlarray.push("output.vout=" + jQuery(currentForm).find('[name="output.vout"]').val());
                        urlarray.push("output.iout=" + jQuery(currentForm).find('[name="output.iout"]').val());
                    }

                    if (rpn) {
                        urlarray.push("rpn=" + rpn);
                        resultAddress = rpnAddress;
                    }

                    urlstring = resultAddress + '?context=' + context + '&' + urlarray.join("&");

                    //alert(urlstring);
                    if (jQuery(clickedButton).parent().parent().parent().parent().parent().parent().attr('id') != "edesign-refine") {
                        var resultsWindow = window.open(urlstring, '_blank');
                    } else {
                        location.href = urlstring;
                    }
                    //	$.fn.colorbox({href:urlstring, innerWidth: '80%', innerHeight: '75%', iframe: 'true', overlayClose: 'true'});
                },
                showErrors: function (errori) {
                    var showRequired = false;
                    this.defaultShowErrors();


                    jQuery(currentForm).find('.edesign-vout, .edesign-cout, .edesign-led, .edesign-pvout').each(function () {
                        if (jQuery(this).hasClass('error')) {
                            showRequired = true;
                        }
                    });

                    if (showRequired == true) {
                        jQuery(currentForm).find('.errorbox').fadeIn();
                    } else {
                        jQuery(currentForm).find('.errorbox').fadeOut();
                    }


                }



            });
        });

        jQuery.validator.addMethod("smallerThan", function (value, element) {
            var returnvalue = true;
            if (jQuery(currentForm).find('[name="input.v.max"]').val() != "" && parseFloat(value) > jQuery(currentForm).find('[name="input.v.max"]').val()) {
                returnvalue = false;
                if (jQuery(currentForm).find('[name="input.v.max"]').valid()) {
                    jQuery(currentForm).validate().element(jQuery(currentForm).find('[name="input.v.max"]'));
                }
            } else {
                if (jQuery(currentForm).find('[name="input.v.max"]').parent().find("label.error").html() != "Required") {
                    jQuery(currentForm).find('[name="input.v.max"]').removeClass('error');
                    jQuery(currentForm).find('[name="input.v.max"]').parent().find("label.error").hide();
                }
                return true;
            }
            return returnvalue;
        }, "Must be <= VinMax");

        jQuery.validator.addMethod("greaterThan", function (value, element) {
            var returnvalue = true;
            if (parseFloat(value) < jQuery(currentForm).find('[name="input.v.min"]').val() && jQuery(currentForm).find('[name="input.v.min"]').val() != "") {
                returnvalue = false;
                jQuery(currentForm).find('[name="input.v.min"]').addClass('error');
                jQuery(currentForm).find('[name="input.v.min"]').parent().find("label.error").show().html('Must be <= VinMax');
            } else {
                if (jQuery(currentForm).find('[name="input.v.min"]').parent().find("label.error").html() != "Required") {
                    jQuery(currentForm).find('[name="input.v.min"]').removeClass('error');
                    jQuery(currentForm).find('[name="input.v.min"]').parent().find("label.error").hide();
                }
                return true;
            }
            return returnvalue;
        }, "Must be >= VinMin");


        // PV
        jQuery.validator.addMethod("smallerThanPV", function (value, element) {
            var returnvalue = true;
            if (jQuery(currentForm).find('[name="input.voc"]').val() != "" && parseFloat(value) > jQuery(currentForm).find('[name="input.voc"]').val()) {
                returnvalue = false;
                if (jQuery(currentForm).find('[name="input.voc"]').valid()) {
                    jQuery(currentForm).validate().element(jQuery(currentForm).find('[name="input.voc"]'));
                }
            } else {
                if (jQuery(currentForm).find('[name="input.voc"]').parent().find("label.error").html() != "Required") {
                    jQuery(currentForm).find('[name="input.voc"]').removeClass('error');
                    jQuery(currentForm).find('[name="input.voc"]').parent().find("label.error").hide();
                }
                return true;
            }
            return returnvalue;
        }, "Must be <= Voc");

        jQuery.validator.addMethod("greaterThanPV", function (value, element) {
            var returnvalue = true;
            if (parseFloat(value) < jQuery(currentForm).find('[name="input.vmp"]').val() && jQuery(currentForm).find('[name="input.vmp"]').val() != "") {
                returnvalue = false;
                jQuery(currentForm).find('[name="input.vmp"]').addClass('error');
                jQuery(currentForm).find('[name="input.vmp"]').parent().find("label.error").show().html('Must be <= Voc');
            } else {
                if (jQuery(currentForm).find('[name="input.vmp"]').parent().find("label.error").html() != "Required") {
                    jQuery(currentForm).find('[name="input.vmp"]').removeClass('error');
                    jQuery(currentForm).find('[name="input.vmp"]').parent().find("label.error").hide();
                }
                return true;
            }
            return returnvalue;
        }, "Must be >= Vmp");


        // PV2
        jQuery.validator.addMethod("smallerThanPV2", function (value, element) {
            var returnvalue = true;
            if (jQuery(currentForm).find('[name="input.isc"]').val() != "" && parseFloat(value) > jQuery(currentForm).find('[name="input.isc"]').val()) {
                returnvalue = false;
                if (jQuery(currentForm).find('[name="input.isc"]').valid()) {
                    jQuery(currentForm).validate().element(jQuery(currentForm).find('[name="input.isc"]'));
                }
            } else {
                if (jQuery(currentForm).find('[name="input.isc"]').parent().find("label.error").html() != "Required") {
                    jQuery(currentForm).find('[name="input.isc"]').removeClass('error');
                    jQuery(currentForm).find('[name="input.isc"]').parent().find("label.error").hide();
                }
                return true;
            }
            return returnvalue;
        }, "Must be <= Isc");

        jQuery.validator.addMethod("greaterThanPV2", function (value, element) {
            var returnvalue = true;

            if (parseFloat(value) < jQuery(currentForm).find('[name="input.imp"]').val() && jQuery(currentForm).find('[name="input.imp"]').val() != "") {
                returnvalue = false;
                jQuery(currentForm).find('[name="input.imp"]').addClass('error');
                jQuery(currentForm).find('[name="input.imp"]').parent().find("label.error").show().html('Must be <= Isc');
            } else {
                jQuery(currentForm).find('[name="input.imp"]').removeClass('error');
                jQuery(currentForm).find('[name="input.imp"]').parent().find("label.error").hide();
                return true;
            }
            return returnvalue;
        }, "Must be >= Imp");



        jQuery.validator.addMethod("cRequired", jQuery.validator.methods.required, "Required");
        jQuery.validator.addMethod("cNumber", jQuery.validator.methods.number, jQuery.format("Must be a number"));
        jQuery.validator.addClassRules("edesign-vout", {
            cRequired: true,
            cNumber: true
        });
        jQuery.validator.addClassRules("edesign-cout", {
            cRequired: true,
            cNumber: true
        });
        jQuery.validator.addClassRules("edesign-vin", {
            cRequired: true,
            cNumber: true
        });
        jQuery.validator.addClassRules("edesign-led", {
            cRequired: true,
            cNumber: true
        });
        jQuery.validator.addClassRules("edesign-pv", {
            cRequired: true,
            cNumber: true
        });


    }

    // ADD AND REMOVE EDESIGN FORM ITEM
    function edesign_addline() {
        jQuery('.edesign-addformitem').bind('click', function () {
            var tempitem = jQuery(currentForm).find('.edesign-item_1').clone();
            //var tempcounter = jQuery(jQuery(this).parent().parent().children()).size();
            var linecounter = jQuery(jQuery(this).parent().parent().children()).size();
            if (linecounter < 5) //Limit number of outputs
            {
                jQuery(tempitem).removeClass("edesign-item_1").addClass("edesign-item_" + (tempcounter + 1));

                // Close item functions
                var newitemcontent = jQuery(tempitem).find('.edesign-addformitem');
                jQuery(newitemcontent).removeClass('edesign-addformitem').addClass('edesing-removeformitem');
                jQuery(newitemcontent).click(function () {
                    jQuery.updateTotal(jQuery(this).parent().parent(), jQuery(this).parent(), currentForm);
                    jQuery(jQuery(this).parent()).remove();

                });
                jQuery(newitemcontent).find('.ui-icon-plusthick').removeClass('ui-icon-plusthick').addClass('ui-icon-circle-close').attr("title", "Remove this line");
                // Change id of internal input fields
                var newfield_v = jQuery(tempitem).find('[name="output.0.v"]');
                jQuery(newfield_i).attr('name', 'output.' + tempcounter + '.i');
                jQuery(newfield_v).attr('name', 'output.' + tempcounter + '.v');
                jQuery(newfield_v).forceNumeric();

                jQuery(newfield_v).val('');
                jQuery(newfield_v).attr('autocomplete', 'off');
                addListener(jQuery(newfield_v));

                var newfield_i = jQuery(tempitem).find('[name="output.0.i"]');
                jQuery(newfield_i).attr('name', 'output.' + tempcounter + '.i');

                jQuery(newfield_i).val('');
                jQuery(newfield_i).attr('autocomplete', 'off');
                addListener(jQuery(newfield_i));
                jQuery(newfield_i).forceNumeric();


                jQuery(tempitem).find("label").remove();
                jQuery(tempitem).find("input").removeClass('error');
                jQuery(tempitem).appendTo(jQuery(this).parent().parent());
                tempcounter++;
            }
        });
    }

    function addListener(object) {
        jQuery(object).keypress(function () {
            jQuery.updateTotal(jQuery(this).parent().parent().parent(), '', currentForm);
        });
        jQuery(object).keydown(function () {
            jQuery.updateTotal(jQuery(this).parent().parent().parent(), '', currentForm);
        });
        jQuery(object).keyup(function () {
            jQuery.updateTotal(jQuery(this).parent().parent().parent(), '', currentForm);
        });

    }

    function addListenerLed(object) {

        jQuery(object).keypress(function () {
            jQuery.updateLedTotal(jQuery(this).parent().parent().parent().parent().parent(), currentForm);
        });
        jQuery(object).keydown(function () {
            jQuery.updateLedTotal(jQuery(this).parent().parent().parent().parent().parent(), currentForm);
        });
        jQuery(object).keyup(function () {
            jQuery.updateLedTotal(jQuery(this).parent().parent().parent().parent().parent(), currentForm);
        });
        jQuery(object).change(function () {
            jQuery.updateLedTotal(jQuery(this).parent().parent().parent().parent().parent(), currentForm);
        });
    }

    // Preset selector
    jQuery('.edesign-presetsselector').change(function () {

        jQuery(currentForm).find('[name="input.v.min"]').unbind();
        jQuery(currentForm).find('[name="input.v.max"]').unbind();
        jQuery(currentForm).find('.edesign-radio').find('[name="input.f"]').unbind();

        if (jQuery(this).val() == 2) {
            jQuery(currentForm).find('[name="input.v.min"]').val('185');
            jQuery(currentForm).find('[name="input.v.max"]').val('265');
            jQuery(currentForm).find('.edesign-radio').find('input[value="50"]').click();
        } else if (jQuery(this).val() == 3) {
            jQuery(currentForm).find('[name="input.v.min"]').val('85');
            jQuery(currentForm).find('[name="input.v.max"]').val('140');
            jQuery(currentForm).find('.edesign-radio').find('input[value="60"]').click();
        } else if (jQuery(this).val() == 4) {
            jQuery(currentForm).find('[name="input.v.min"]').val('90');
            jQuery(currentForm).find('[name="input.v.max"]').val('265');
            jQuery(currentForm).find('.edesign-radio').find('input[value="50"]').click();
        }

        jQuery(currentForm).find('.edesign-radio').buttonset("refresh");

        // Preset listeners
        addPresetListener(jQuery(currentForm).find('[name="input.v.min"]'), currentForm);
        addPresetListener(jQuery(currentForm).find('[name="input.v.max"]'), currentForm);
        addPresetListener(jQuery(currentForm).find('.edesign-radio').find('[name="input.f"]'), currentForm);

    });



    function addPresetListener(object, currentForm) {
        jQuery(object).keypress(function () {
            jQuery.updatePresets(object, currentForm);
        });
        jQuery(object).keydown(function () {
            jQuery.updatePresets(object, currentForm);
        });
        jQuery(object).keyup(function () {
            jQuery.updatePresets(object, currentForm);
        });
        jQuery(object).change(function () {
            jQuery.updatePresets(object, currentForm);
        });
        if (jQuery(object).attr('name') == "input.f") {
            jQuery(object).click(function () {
                jQuery.updatePresets(object, currentForm);
            });
        }


    }

});


jQuery.extend({
    roundVal: function (val) {
        var dec = 2;
        var result = Math.round(val * Math.pow(10, dec)) / Math.pow(10, dec);
        return result;
    },
    updateTotal: function (object, excludeObject, currentForm) {
        //alert(jQuery(object).attr('name'));
        var wattageTotal = 0;
        var inputContainer = jQuery(currentForm).find('.edesign-items');
        jQuery.each(jQuery(inputContainer).children(), function () {
            if (jQuery(excludeObject).attr('class') != jQuery(this).attr('class')) {
                var tempvol = jQuery(this).find('.edesign-vout').val();
                var tempcur = jQuery(this).find('.edesign-cout').val()
                wattageTotal += tempvol * tempcur;
            }
        });

        if (isNaN(wattageTotal)) wattageTotal = 0;
        if (wattageTotal != 0) {
            if (wattageTotal > 1000) {
                jQuery(currentForm + " .edesign-wattage").text("Output Power: " + jQuery.roundVal((wattageTotal / 100)) + " kW");
            } else {
                jQuery(currentForm + " .edesign-wattage").text("Output Power: " + jQuery.roundVal(wattageTotal) + " W");
            }
        } else {
            jQuery(currentForm + " .edesign-wattage").text("Output Power:");
        }

    },

    updateLedTotal: function (object, currentForm) {
        var VF = jQuery(object).find('[name="led.VF"]').val();
        var IF = jQuery(object).find('[name="led.IF"]').val();

        var numSerie = jQuery(object).find('[name="led.numSerie"]').val();
        var localVoltage = VF * numSerie;
        var W = localVoltage * IF;
        if (localVoltage < 1000 && localVoltage != "") {
            jQuery(currentForm).find('.edesign-ledvoltage').text(jQuery.roundVal(localVoltage) + " V");
        } else if (localVoltage != "") {
            jQuery(currentForm).find('.edesign-ledvoltage').text(jQuery.roundVal(localVoltage / 1000) + " kV");
        }

        if (IF < 1000 && IF != "") {
            jQuery(currentForm).find('.edesign-ledcurrent').text(jQuery.roundVal(IF) + " A");
        } else if (IF != "") {
            jQuery(currentForm).find('.edesign-ledcurrent').text(jQuery.roundVal(IF / 1000) + " MA");
        }
        if (W < 1000 && W != "") {
            jQuery(currentForm).find('.edesign-ledpower').text(jQuery.roundVal(W) + " W");
        } else if (W != "") {
            jQuery(currentForm).find('.edesign-ledpower').text(jQuery.roundVal(W / 1000) + " TW");
        }
    },

    updatePresets: function (object, currentForm) {
        var inputmin = jQuery(currentForm).find('[name="input.v.min"]').val();
        var inputmax = jQuery(currentForm).find('[name="input.v.max"]').val();
        var inputf = jQuery(currentForm).find('[name="input.f"]:checked').val();
        var currentPreset = jQuery(currentForm).find('.edesign-presetsselector').val();


        var isPreset = false;
        var presets = []; // input.v.min, input.v.max, input.f
        presets[2] = [185, 265, 50];
        presets[3] = [85, 140, 60];
        presets[4] = [90, 265, 50];


        //
        for (i = 2; i < 5; i++) {
            if (inputmin == presets[i][0] && inputmax == presets[i][1] && inputf == presets[i][2]) {
                jQuery('.edesign-presetsselector').val(i);
                isPreset = true;
                currentPreset = i;
            }
        }

        if (!isPreset) {
            jQuery('.edesign-presetsselector').val('1');
        }
    },
    showHideButtons: function (showlist, contexts) {
        var buttonsArray = showlist.split(',');
        if (buttonsArray.length > 0) {
            var contextid = [];
            jQuery(buttonsArray).each(function (key, value) {
                contextid.push('edesign-button' + (contexts.indexOf(value) + 1));
            });

            jQuery('.edesign-topmenu li').each(function () {
                var currentId = jQuery(this).find('input').attr('id');
                if (jQuery.inArray(currentId, contextid) == -1) {
                    jQuery(this).hide();
                }
            });
        }
    },
    getUrlVars: function () {
        var vars = [],
            hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        return jQuery.getUrlVars()[name];
    }
});

jQuery.fn.forceNumeric = function () {

    return jQuery(this).each(function () {
        jQuery(this).keydown(function (e) {
            var key = e.which || e.keyCode;

            if (!e.shiftKey && !e.altKey && !e.ctrlKey &&
            // numbers   
            key >= 48 && key <= 57 ||
            // Numeric keypad
            key >= 96 && key <= 105 ||
            // comma, period and minus, . on keypad key == 190 || 
            key == 190 || key == 109 || key == 110 ||
            // Backspace and Tab and Enter
            key == 8 || key == 9 || key == 13 ||
            // Home and End
            key == 35 || key == 36 ||
            // left and right arrows
            key == 37 || key == 39 ||
            // Del and Ins
            key == 46 || key == 45) return true;

            return false;
        });
    });
}


/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */


jQuery.fn.appear = function (fn, options) {

    var settings = jQuery.extend({

        //arbitrary data to pass to fn
        data: undefined,

        //call fn only on the first appear?
        one: true

    }, options);

    return this.each(function () {

        var t = jQuery(this);

        //whether the element is currently visible
        t.appeared = false;

        if (!fn) {

            //trigger the custom event
            t.trigger('appear', settings.data);
            return;
        }

        var w = jQuery(window);

        //fires the appear event when appropriate
        var check = function () {

                //is the element hidden?
                if (!t.is(':visible')) {

                    //it became hidden
                    t.appeared = false;
                    return;
                }

                //is the element inside the visible window?
                var a = w.scrollLeft();
                var b = w.scrollTop();
                var o = t.offset();
                var x = o.left;
                var y = o.top;

                if (y + t.height() >= b && y <= b + w.height() && x + t.width() >= a && x <= a + w.width()) {

                    //trigger the custom event
                    if (!t.appeared) t.trigger('appear', settings.data);

                } else {

                    //it scrolled out of view
                    t.appeared = false;
                }
            };

        //create a modified fn with some additional logic
        var modifiedFn = function () {

                //mark the element as visible
                t.appeared = true;

                //is this supposed to happen only once?
                if (settings.one) {

                    //remove the check
                    w.unbind('scroll', check);
                    var i = jQuery.inArray(check, jQuery.fn.appear.checks);
                    if (i >= 0) jQuery.fn.appear.checks.splice(i, 1);
                }

                //trigger the original fn
                fn.apply(this, arguments);
            };

        //bind the modified fn to the element
        if (settings.one) t.one('appear', settings.data, modifiedFn);
        else t.bind('appear', settings.data, modifiedFn);

        //check whenever the window scrolls
        w.scroll(check);

        //check whenever the dom changes
        jQuery.fn.appear.checks.push(check);

        //check now
        (check)();
    });
};

//keep a queue of appearance checks
jQuery.extend(jQuery.fn.appear, {

    checks: [],
    timeout: null,

    //process the queue
    checkAll: function () {
        var length = jQuery.fn.appear.checks.length;
        if (length > 0) while (length--)(jQuery.fn.appear.checks[length])();
    },

    //check the queue asynchronously
    run: function () {
        if (jQuery.fn.appear.timeout) clearTimeout(jQuery.fn.appear.timeout);
        jQuery.fn.appear.timeout = setTimeout(jQuery.fn.appear.checkAll, 20);
    }
});

//run checks when these methods are called
jQuery.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function (i, n) {
    var old = jQuery.fn[n];
    if (old) {
        jQuery.fn[n] = function () {
            var r = old.apply(this, arguments);
            jQuery.fn.appear.run();
            return r;
        }
    }
});
