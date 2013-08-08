if (ST == null || typeof( ST ) != 'object' ) {
    var ST = new Object();
}
if (ST.ExtranetJS == null || typeof( ST.ExtranetJS ) != 'object' ) {
    ST.ExtranetJS = new Object();
}
ST.ExtranetJS = {
	callFromCas : function (){
	var mySettings={divStyle:"width:211px; height:195px; position:absolute; left:5px; top:125px; display:block; z-index:50; border:0px none;" };
		ST.ExtranetJS.doAction(mySettings);
		},
		
    init : function (){
            //document.domain = 'st.com';
            var extCallBackQuery = ST.ExtranetJS.parseQueryString(window.location);
		    if(extCallBackQuery!=undefined)
		    {
		 	    if(extCallBackQuery=='extCallBackQuery=hideFrame')
				    parent.ST.ExtranetJS.hideMyPreference();
		    }
		 },
	    
	    parseQueryString : function(callBackURL){
		var queryStr= callBackURL.search;
    		queryStr = queryStr.substring(queryStr.indexOf('extCallBackQuery'),queryStr.lastIndexOf('$$'));
    		return queryStr;
	    },  
	    
        hideMyPreference : function(){
		    var d = document.getElementById('notifyconf');
		    if (d!= null)
		    {
		        d.innerHTML ='';
		        d.visibility ='hidden';
		        d.style.display = 'none';
        		document.body.removeChild(d);
        	}
        },
        
        replaceAll : function(Source,stringToFind,stringToReplace){
            var temp = Source;
            var index = temp.indexOf(stringToFind);
            while(index != -1){
                temp = temp.replace(stringToFind,stringToReplace);
                index = temp.indexOf(stringToFind);
            }
            return temp;
        },
	    
	    doAction : function (args,redirectURL){
	 	
		if(redirectURL != undefined && redirectURL != null && redirectURL != '' && redirectURL.match(txt) == null)
		{
			redirectURL = ST.ExtranetJS.hostName + redirectURL;
		}
		else if(redirectURL == undefined || redirectURL == null || redirectURL == '')
		{
			redirectURL = '';
		}
		
		var obj = args;
		if(obj == undefined || typeof obj != 'object' || obj == null)
		{
			obj={};
		}
		if(obj.callback == undefined || obj.callback == null) obj.callback = '';
		if(obj.rememberUserName == undefined || obj.rememberUserName == null) obj.rememberUserName = false;
		if(obj.redirectURL == undefined || obj.redirectURL == null) obj.redirectURL = '';
		
		var bar =  document.getElementsByTagName('meta');
		var objectId = null;
		var objectLevel = null;
		var source = null;
		
		
		var sourceURL =  window.location.href;
		sourceURL = sourceURL.toUpperCase();
		
		 
		for (i=0;i<bar.length;i++)
		{
			if (bar[i].getAttribute("Name")=="object_id")
			{
				objectId =bar[i].getAttribute("Content");
			}
			if (bar[i].getAttribute("Name")=="level")
			{
				objectLevel =bar[i].getAttribute("Content");
			}
   		}
   		
		var ua =window.navigator.userAgent;
        var msie =ua.indexOf("MSIE");
        if(msie >0)
        {
            //Internet Explorer
            var version = parseInt(ua.substring(msie+5,ua.indexOf(".",msie)));
            if (version<=6)
            {
                alert("This functionality do not support on your current browser, please install latest version browser or use another browser, We are Sorry for inconvinence caused!");
                return;
           }
        }    
		var orgURL =  window.location.href;
		var temp =orgURL.substring(orgURL.lastIndexOf("?")+1,orgURL.lastIndexOf("?")+8).toUpperCase();
		if (temp == 'TICKET=')
		{
		    orgURL = orgURL.substring(0,orgURL.lastIndexOf("?"));
		}
		orgURL = ST.ExtranetJS.replaceAll(orgURL,"/","0A1B");
		orgURL = ST.ExtranetJS.replaceAll(orgURL,":","SIMICOLONS");
		orgURL = ST.ExtranetJS.replaceAll(orgURL,"&","AMPERSANDS");
		var url = ST.ExtranetJS.hostName + ST.ExtranetJS.extranetServer+"?ID="+objectId+"&Level="+objectLevel+"&OrgURL="+orgURL;
		
		var md = document.getElementById('notifyconf');
		if(md == undefined || md == null)
		{
			md = document.createElement('div');
	   	    md.setAttribute('id', 'notifyconf');
			var browser = navigator.appName;
			if(obj.divStyle == undefined || obj.divStyle == null || obj.divStyle == '' )
			{
				if(browser=='Microsoft Internet Explorer') 
					md.style.setAttribute('cssText','width:211px; height:200px; position:fixed; left:40%; top:35%; display:block; z-index:350; border:0px none; filter:alpha(opacity=100)');
				else
					md.setAttribute('style','width:211px; height:200px; position:fixed; left:40%; top:35%; display:block; z-index:350; border:0px none; opacity:1.0');
			}
			else
			{
				if(browser=='Microsoft Internet Explorer') 
					md.style.setAttribute('cssText',obj.divStyle);
				else
					md.setAttribute('style', obj.divStyle);					
			}
   			document.body.appendChild(md);
		}
		md.style.display = 'block';
		md.innerHTML="<iframe name='FrmNotify' id='miniFrmNotify' allowtransparency=true frameborder='no' src='' style='background-color:none transparent;' scrolling='no'></iframe>";
		document.getElementById('miniFrmNotify').height=md.style.height;
		document.getElementById('miniFrmNotify').width=md.style.width;
		document.getElementById('miniFrmNotify').src=encodeURI(url);
	}	
}

ST.ExtranetJS.init();
ST.ExtranetJS.hostName  = 'https://my.st.com/shared/common';
ST.ExtranetJS.extranetServer = '/Pages/SaveToMyST.aspx';
