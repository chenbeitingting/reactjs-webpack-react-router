define(function(){
	var constFunc={
       constWeb: {
		    config: {
		        debug: true
		    },
		    creditPoint: {
		        queryCreditPoint: "/CreditPoint/queryCreditPoint",
		        commitContent: "/CreditPoint/commitContent"
		    },
	    },
	    parse_purl:function () {
	        var purl = location.href;
	        var i = purl.lastIndexOf('?');
	        if (i == -1)return;
	        var querystr = purl.substr(i + 1);
	        var arr1 = querystr.split('&');
	        var arr2 = new Object();
	        for (var j = 0; j < arr1.length; j++) {
	            var ta = arr1[j].split('=');
	            arr2[ta[0]] = ta[1];
	        }
	        return arr2;
	    }
	};
	return constFunc;
});