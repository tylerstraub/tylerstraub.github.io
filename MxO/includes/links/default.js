var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// get the udk from the address bar to use in the include
var idArray = location.search.substring(1).split("id=");
var id = idArray[0];
function get_cookie(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

var today = new Date();
var expiry = new Date(today.getTime() + 28 * 24 * 60 * 60 * 1000);

function set_cookie(name, value) {
    document.cookie=name + "=" + escape(value) + "; expires=" + expiry.toGMTString();
}

//newsletter signup validation
function isGoodMailAddr (addr) {
	var atsign = addr.indexOf("@");
	if (atsign > 0){
		var domainname = addr.substring(atsign+1);
		if (domainname.indexOf(".") > 0) return true;
	}
	return false;
}

function validate(f) {
	var addr = f.email.value;
	if (isGoodMailAddr(addr)){
		window.open("https://web.archive.org/web/20110722004829/http://thematrixonline.warnerbros.com/web/newsletter_thanks.jsp?email=" + escape(addr), "_blank", "width=300,height=395,scrollbars=no");
	} else {
		alert("The email address you entered:\n" + addr + "\nDoesn't seem to be valid");
	}
	return false;
}

function show_menu(id, status) {
    var menulist = document.getElementById("mm" + id);
    var menuhead = document.getElementById("mh" + id);
    var menuarrow = document.getElementById("ma" + id);
    var top = (id == 1) ? "_top" : "";
    
    // this bit controls the green ON state
    var active_menu = get_cookie("active_menu");
    if (status == "on") {
        set_cookie("active_menu", id);
    } else {
        if (active_menu == id) {
            status = "on";
        }
    }

    if (menulist.style.display == "none") {
        menulist.style.display = "block";
        menuhead.style.background = "url('../images/menu" + top + "_" + status + "_open.gif')";
        menuarrow.style.background = "url('../images/arrow_on.gif') no-repeat";
        set_cookie("menu_" + id + "_open", 1);
    } else {
        menulist.style.display = "none";
        menuhead.style.background = "url('../images/menu" + top + "_" + status + "_closed.gif')";
        menuarrow.style.background = "url('../images/arrow_off.gif') no-repeat";
        set_cookie("menu_" + id + "_open", 0);
    }

}

// menu initialization
function set_menu_status(id, status) {
    show_menu(id, status);
    
// TO REMOVE THE "REMEMBER STATE", COMMENT OUT EVERYTHING BELOW EXCEPT FOR LAST CLOSING TAG

/*
    for(count = 1; count <= 6; count++) {
        var top = (count == 1) ? "_top" : "";
        if (count != id) {
            var this_state = get_cookie("menu_" + count + "_open");
            if (this_state == 1) {
                var menulist = document.getElementById("mm" + count);
                var menuhead = document.getElementById("mh" + count);
                var menuarrow = document.getElementById("ma" + count);
                menulist.style.display = "block";
                menuhead.style.background = "url('/live/images/menu" + top + "_off_open.gif')";
                menuarrow.style.background = "url('/live/images/arrow_on.gif') no-repeat";
            }
        }
    }
*/

}

//sniff for mac ie
function checkBrowser() {
	var computer = navigator.platform.substring(0,3);
	var browser = navigator.appName;
	if (computer == "Mac" && browser == "Microsoft Internet Explorer") {
		location.replace("https://web.archive.org/web/20110722004829/http://thematrixonline.warnerbros.com/live/browser.html");
	}
}


//rotating headers
var headerArray = new Array();
headerArray[0] = "/exiles_female1.jpg";
headerArray[1] = "/exiles_male1.jpg";
headerArray[2] = "/exiles_nightmare.jpg";
headerArray[3] = "/machines.jpg";
headerArray[4] = "/zion_female1.jpg";
headerArray[5] = "/zion_female2.jpg";
headerArray[6] = "/zion_female3.jpg";
headerArray[7] = "/zion_male1.jpg";
headerArray[8] = "/zion_male2.jpg";


var randomNumber = Math.floor(Math.random() * headerArray.length);

function rotateHeader() {

}

//IMG SWAP
function changeImages() {
	//if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	//}
}

}
/*
     FILE ARCHIVED ON 00:48:29 Jul 22, 2011 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:07:47 Jun 06, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  RedisCDXSource: 12.774
  esindex: 0.012
  PetaboxLoader3.datanode: 136.717 (4)
  LoadShardBlock: 230.617 (3)
  CDXLines.iter: 21.649 (3)
  load_resource: 1110.88
  captures_list: 275.378
  exclusion.robots.policy: 0.341
  PetaboxLoader3.resolve: 1071.814
  exclusion.robots: 0.356
*/// JavaScript Document