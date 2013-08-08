var newNav;
var found = false;
var breadcrumbArray = new Object();

function displayLeftNav (locale, lc){
	var nav = $("#leftNav"),
	pagePath = window.location.pathname;
	if(pagePath.indexOf("/"+locale + "/") < 0){
		var lcIndex = pagePath.indexOf(lc)+lc.length;
		var beforeLC = pagePath.substring(0,lcIndex);
		var afterLC = pagePath.substring(lcIndex);
		pagePath = beforeLC +"/" + locale + afterLC;
	}
	findPage(nav,pagePath);
	setupNav(newNav);
	if(newNav != null) {
		$(nav).html(newNav.html());
	}else{
		setupNav(nav);
	}
	$(nav).attr("class","accordion");
	$(nav).css("display","block");
	
}

function findPage(nav, pagePath){
	var newNav = checkLevel(nav,pagePath);	
	if(!found){
		pagePath = pagePath.substring(0,pagePath.lastIndexOf("/"))+".html";
		newNav = checkLevel(nav,pagePath);	
	}
}

function checkLevel(level,pagePath){
	$("a",level).each(function(){
		if(!found && $(this).attr("href").indexOf(pagePath) >= 0){
			
			newNav = $(this).parent().parent();
			$("> .slide",$(this).parent()).css("display","block");
			found = true;
			breadcrumbArray[$(this).text()]= $(this).attr("href");
			buildBreadCrumb($(this).parent().parent());
			printBreadcrumb();
			return;
		}
	});
}

function setupNav(nav){
	$("> *",nav).each(function(){
		$("> a",this).each(function(){
			if($(this).get(0).tagName == "A"){
				$(this).attr("class","opener");
			}
		});
	});
}

function buildBreadCrumb(nav){
	if($(nav).attr("id") != "leftNav"){
		findParentLink($(nav).parent().parent())
	}
}

function findParentLink(parent){
	var child = $(" :first-child",parent);
	if($(child[0]).is("a")){
		breadcrumbArray[$(child[0]).text()]= $(child[0]).attr("href");
		if($(parent).parent().attr("id") != "leftNav"){
			findParentLink($(parent).parent().parent().parent())
		}
	}
}

function printBreadcrumb(){
	var finalHtml =$("<span/>");
	$.each(breadcrumbArray,function(key,value){
		var html = "<li><a href='"+value+"'>"+key+"</a></li>";
		$(finalHtml).prepend(html);
	});
	$(".breadcrumbs").append(finalHtml);
}