var WeixinApi = (function() {
	function k(n, m) {
		m = m || {};
		var l = function(o) {
			WeixinJSBridge.invoke("shareTimeline", {
				appid : o.appId ? o.appId : "",
				img_url : o.imgUrl,
				link : o.link,
				desc : o.title,
				title : o.desc,
				img_width : "120",
				img_height : "120"
			}, function(p) {
				switch (p.err_msg) {
				case "share_timeline:cancel":
					m.cancel && m.cancel(p);
					break;
				case "share_timeline:fail":
					m.fail && m.fail(p);
					break;
				case "share_timeline:confirm":
				case "share_timeline:ok":
					m.confirm && m.confirm(p);
					break
				}
				m.all && m.all(p)
			})
		};
		WeixinJSBridge.on("menu:share:timeline",
				function(o) {
					if (m.async && m.ready) {
						window._wx_loadedCb_ = m.dataLoaded || new Function();
						if (window._wx_loadedCb_.toString().indexOf(
								"_wx_loadedCb_") > 0) {
							window._wx_loadedCb_ = new Function()
						}
						m.dataLoaded = function(p) {
							window._wx_loadedCb_(p);
							l(p)
						};
						m.ready && m.ready(o)
					} else {
						m.ready && m.ready(o);
						l(n)
					}
				})
	}
	function j(n, m) {
		m = m || {};
		var l = function(o) {
			WeixinJSBridge.invoke("sendAppMessage", {
				appid : o.appId ? o.appId : "",
				img_url : o.imgUrl,
				link : o.link,
				desc : o.desc,
				title : o.title,
				img_width : "120",
				img_height : "120"
			}, function(p) {
				switch (p.err_msg) {
				case "send_app_msg:cancel":
					m.cancel && m.cancel(p);
					break;
				case "send_app_msg:fail":
					m.fail && m.fail(p);
					break;
				case "send_app_msg:confirm":
				case "send_app_msg:ok":
					m.confirm && m.confirm(p);
					break
				}
				m.all && m.all(p)
			})
		};
		WeixinJSBridge.on("menu:share:appmessage",
				function(o) {
					if (m.async && m.ready) {
						window._wx_loadedCb_ = m.dataLoaded || new Function();
						if (window._wx_loadedCb_.toString().indexOf(
								"_wx_loadedCb_") > 0) {
							window._wx_loadedCb_ = new Function()
						}
						m.dataLoaded = function(p) {
							window._wx_loadedCb_(p);
							l(p)
						};
						m.ready && m.ready(o)
					} else {
						m.ready && m.ready(o);
						l(n)
					}
				})
	}
	function g(n, m) {
		m = m || {};
		var l = function(o) {
			WeixinJSBridge.invoke("shareWeibo", {
				content : o.desc,
				link : o.link,
				img_url : o.imgUrl,
				title : o.title,
				img_width : "120",
				img_height : "120"
			}, function(p) {
				switch (p.err_msg) {
				case "share_weibo:cancel":
					m.cancel && m.cancel(p);
					break;
				case "share_weibo:fail":
					m.fail && m.fail(p);
					break;
				case "share_weibo:confirm":
				case "share_weibo:ok":
					m.confirm && m.confirm(p);
					break
				}
				m.all && m.all(p)
			})
		};
		WeixinJSBridge.on("menu:share:weibo",
				function(o) {
					if (m.async && m.ready) {
						window._wx_loadedCb_ = m.dataLoaded || new Function();
						if (window._wx_loadedCb_.toString().indexOf(
								"_wx_loadedCb_") > 0) {
							window._wx_loadedCb_ = new Function()
						}
						m.dataLoaded = function(p) {
							window._wx_loadedCb_(p);
							l(p)
						};
						m.ready && m.ready(o)
					} else {
						m.ready && m.ready(o);
						l(n)
					}
				})
	}
	function b(l, m) {
		if (!l || !m || m.length == 0) {
			return
		}
		WeixinJSBridge.invoke("imagePreview", {
			current : l,
			urls : m
		})
	}
	function c() {
		WeixinJSBridge.call("showOptionMenu")
	}
	function i() {
		WeixinJSBridge.call("hideOptionMenu")
	}
	function h() {
		WeixinJSBridge.call("showToolbar")
	}
	function e() {
		WeixinJSBridge.call("hideToolbar")
	}
	function d(l) {
		if (l && typeof l == "function") {
			WeixinJSBridge.invoke("getNetworkType", {}, function(m) {
				l(m.err_msg)
			})
		}
	}
	function f() {
		WeixinJSBridge.call("closeWindow")
	}
	function a(n) {
		if (n && typeof n == "function") {
			var l = this;
			var m = function() {
				n(l)
			};
			if (typeof window.WeixinJSBridge == "undefined") {
				if (document.addEventListener) {
					document.addEventListener("WeixinJSBridgeReady", m, false)
				} else {
					if (document.attachEvent) {
						document.attachEvent("WeixinJSBridgeReady", m);
						document.attachEvent("onWeixinJSBridgeReady", m)
					}
				}
			} else {
				m()
			}
		}
	}
	return {
		version : "1.6",
		ready : a,
		shareToTimeline : k,
		shareToWeibo : g,
		shareToFriend : j,
		showOptionMenu : c,
		hideOptionMenu : i,
		showToolbar : h,
		hideToolbar : e,
		getNetworkType : d,
		imagePreview : b,
		closeWindow : f
	}
})();
