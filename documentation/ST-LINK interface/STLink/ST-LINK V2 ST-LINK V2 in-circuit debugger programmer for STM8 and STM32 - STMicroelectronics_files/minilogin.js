if (ST == null || typeof( ST ) != 'object' ) {
    var ST = new Object();
}
if (ST.Extranet == null || typeof( ST.Extranet ) != 'object' ) {
    ST.Extranet = new Object();
}
ST.Extranet = {
	doAction : function (obj,redirectURL){
		var txt=/http[s]?(:\/\/)/gi;
		if(redirectURL != undefined && redirectURL != null && redirectURL != '' && redirectURL.match(txt) == null)
		{
			redirectURL = ST.Extranet.hostName + redirectURL;
		}
		else if(redirectURL == undefined || redirectURL == null || redirectURL == '')
		{
			redirectURL = '';
		}
		
		if(obj == undefined || typeof obj != 'object' || obj == null)
		{
			obj={};
		}
		if(obj.callback == undefined || obj.callback == null) obj.callback = '';
		if(obj.winTitle == undefined || obj.winTitle == null) obj.winTitle = 'Login';
		
		var url = ST.Extranet.hostName + ST.Extranet.casServer + ST.Extranet.loginWindow +'?callback='+obj.callback+'&winTitle='+obj.winTitle+'&redirectURL='+redirectURL+'&parentURL='+window.location;
		var md = document.getElementById('miniLoginDiv');
		if(md == undefined || md == null)
		{
			md = document.createElement('div');
   	    		md.setAttribute('id', 'miniLoginDiv');
			var browser = navigator.appName;
			if(obj.divStyle == undefined || obj.divStyle == null || obj.divStyle == '' )
			{
				if(browser=='Microsoft Internet Explorer') 
					md.style.setAttribute('cssText','width:211px; height:220px; position:fixed; left:40%; top:35%; display:block; z-index:50; border:0px none; filter:alpha(opacity=100)');
				else
					md.setAttribute('style','width:211px; height:220px; position:fixed; left:40%; top:35%; display:block; z-index:50; border:0px none; opacity:1.0');
			}
			else
			{
				if(browser=='Microsoft Internet Explorer') 
					md.style.setAttribute('cssText',obj.divStyle);
				else
					md.setAttribute('style', obj.divStyle);					
			}
			md.style.zIndex=1000; 
   			document.body.appendChild(md);
		}
                md.style.display = 'block';
		md.innerHTML="<iframe id='miniFrm' name='miniFrm' allowtransparency=true frameborder='no' src='' style='background-color:none transparent;' scrolling='no'></iframe>";
		document.getElementById('miniFrm').height=md.style.height;
		document.getElementById('miniFrm').width=md.style.width;
		document.getElementById('miniFrm').src=encodeURI(url);
	},
	init : function (){
		//document.domain = 'st.com';
		var casCallBackQuery = ST.Extranet.parseQueryString(window.location);
		if(casCallBackQuery!=undefined)
		{
			if(casCallBackQuery[1]!=undefined && casCallBackQuery[1]!='') 
				parent[casCallBackQuery[1]]();
			if(casCallBackQuery[0]!=undefined && casCallBackQuery[0]!='' && casCallBackQuery[0]=='hideFrame')
				parent.ST.Extranet.hideLogin();
		}
	},
	parseQueryString : function(callBackURL){
		var queryStr= callBackURL.search;
    		queryStr = queryStr.substring(queryStr.indexOf('casCallBackQuery'),queryStr.lastIndexOf('$$'));
		var val=queryStr.split('=');
		if(val[1]!=undefined)
			return val[1].split('_');
    		return;
	},
	hideLogin : function(){
		var d = document.getElementById('miniLoginDiv');
		if(d!=null)
		{
                	d.innerHTML = '';
                	d.visibility = 'hidden';
                        d.style.display = 'none';
                	document.body.removeChild(d);
		}
	}
}

ST.Extranet.init();
ST.Extranet.hostName='https://my.st.com/';
ST.Extranet.casServer='cas';
ST.Extranet.loginWindow='/minilogin/jsp/casMini.jsp';
