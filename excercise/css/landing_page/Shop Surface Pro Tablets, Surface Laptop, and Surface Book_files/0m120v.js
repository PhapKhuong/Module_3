if (typeof (OIQLogging) === 'undefined') {
    window.OIQLogging = {
        _firedLog: false,
        _timeout: null,
        _logs: [],
        _events: [],
        _logs_pushed: [],
        _eventMap: {},
        _endEvents: []
    };
    OIQLogging._logging_enabled = (Math.random() > ('.01' || 0) ? false : true);
    OIQLogging.logEvent = function (msg, key) {
        if (this._timeout != null) {
            clearTimeout(this._timeout);
        }
        if (this._logging_enabled == false) {
            return;
        }
        try {
            var oiq_index = this._events.indexOf(key);
            if (oiq_index != -1) {
                var event = this._events[oiq_index];
                if (typeof (this._eventMap[key].startTime) !== "undefined") {
                    msg.loadTime = new Date().getTime() - this._eventMap[key].startTime;
                }
                this._events.splice(oiq_index, 1);
            }
            if (typeof (msg) !== "undefined") {
                this.log(msg);
            }
            if (this._events.length === 0 && this._firedLog == false) {
                var self = this;
                this._timeout = setTimeout(function () {
                    self._firedLog = true;
                    try {
                        for (var i = 0; i < self._endEvents.length; i++) {
                            var e = self._endEvents[i];
                            var l = {loadTime: (new Date().getTime() - e.startTime) - 200, action: e.desc};
                            self._logs.push(l);
                        }
                    } catch (oiq_error_message) {
                        oiq_error_message = oiq_error_message || {"message": "couldn't find error"};
                        var l = {action: "tag_time_logging", error: oiq_error_message.message};
                        self._logs.push(l);
                    }
                    var oiq_log_message = JSON.stringify(self._logs);
                    oiq_log_message = encodeURIComponent(oiq_log_message);
                    var oiq_event_image = new Image();
                    oiq_event_image.src = 'https://px.owneriq.net/elog?l=' + oiq_log_message + '&uid=' + oiq_uid;
                }, 200);
            }
        } catch (oiq_error_message) {
            oiq_error_message = oiq_error_message || {"message": "couldn't find error"};
            this._logging_enabled = false;
            oiq_send_logging_error(oiq_error_message.message);
        }
    };
    OIQLogging.eventFire = function (eventDesc) {
        if (this._logging_enabled == false) {
            return;
        }
        if (this._timeout != null) {
            clearTimeout(this._timeout);
        }
        var oiq_key = Math.floor(Math.random() * (1000 - 0 + 1)) + 1000;
        try {
            this._eventMap[oiq_key] = {"desc": eventDesc, startTime: new Date().getTime()};
            this._events.push(oiq_key);
        } catch (oiq_error_message) {
            oiq_error_message = oiq_error_message || {"message": "couldn't find error"};
            this._logging_enabled = false;
            oiq_send_logging_error(oiq_error_message.message);
        }
        return oiq_key;
    };
    OIQLogging.eventTrackFinish = function (eventDesc) {
        if (this._logging_enabled == false) {
            return;
        }
        try {
            this._endEvents.push({"desc": eventDesc, startTime: new Date().getTime()});
        } catch (oiq_error_message) {
            oiq_error_message = oiq_error_message || {"message": "couldn't find error"};
            this._logging_enabled = false;
            oiq_send_logging_error(oiq_error_message.message);
        }
    };
    OIQLogging.log = function (msg) {
        if (this._logging_enabled == false) {
            return;
        }
        try {
            this._logs.push(msg);
        } catch (oiq_error_message) {
            oiq_error_message = oiq_error_message || {"message": "couldn't find error"};
            this._logging_enabled = false;
            oiq_send_logging_error(oiq_error_message);
        }
    };
}

function oiq_send_logging_error(msg) {
    try {
        var oiq_log_message = JSON.stringify([{"action": "logging", "error": msg}]);
        oiq_log_message = encodeURIComponent(oiq_log_message);
        var oiq_event_image = new Image();
        oiq_event_image.src = 'https://px.owneriq.net/elog?l=' + oiq_log_message + '&uid=' + oiq_uid;
    } catch (oiq_error_message) {/* TODO: we failed on our final catch no recording */
    }
}

function oiq_addPageMfg(s) {
    window.oiq_pMfg = oiq_ddPush(window.oiq_pMfg, s);
}

function oiq_addPageBrand(s) {
    window.oiq_pMfg = oiq_ddPush(window.oiq_pMfg, s);
}

function oiq_addPageDT(s) {
    window.oiq_pDT = oiq_ddPush(window.oiq_pDT, s);
}

function oiq_addPageCat(s) {
    window.oiq_pDT = oiq_ddPush(window.oiq_pDT, s);
}

function oiq_addPageProduct(s) {
    window.oiq_pProduct = oiq_ddPush(window.oiq_pProduct, s);
}

function oiq_addPageSource(s) {
    window.oiq_pSource = oiq_ddPush(window.oiq_pSource, s);
}

function oiq_addPageLifecycle(s) {
    window.oiq_pSource = oiq_ddPush(window.oiq_pSource, s);
}

function oiq_addUserId(s) {
    window.oiq_pUser = s;
}

function oiq_addCustomKVP(s) {
    window.oiq_pCust = oiq_ddPush(window.oiq_pCust, s);
}

oiq_ii = function (key, src) {
    var oiq_event_key = OIQLogging.eventFire(src);
    var oiq_startTime = new Date().getTime();
    var oiq_img = new Image();
    oiq_img.src = src;
    if (OIQLogging._logging_enabled) {
        var oiq_timeout = false;
        var oiq_loadTimeout = setTimeout(function () {
            oiq_img.src = "";
            oiq_timeout = true;
        }, '1500' || 2000);
        oiq_img.onload = function () {
            clearTimeout(oiq_loadTimeout);
            var oiq_loadtime = new Date().getTime() - oiq_startTime;
            OIQLogging.logEvent({'loadTime': oiq_loadtime, "action": key}, oiq_event_key);
        };
        oiq_img.onerror = function () {
            clearTimeout(oiq_loadTimeout);
            var oiq_loadtime = new Date().getTime() - oiq_startTime;
            var oiq_mes = {'loadTime': oiq_loadtime, "action": key};
            if (oiq_timeout == true) {
                oiq_mes.error = "timeout";
            }
            OIQLogging.logEvent(oiq_mes, oiq_event_key);
        };
    }
    oiq_img.src = src;
};
oiq_log_event = function (msg) {
    OIQLogging.logEvent(msg);
};

function oiq_ddPush(arr, val) {
    if (Object.prototype.toString.call(arr) === "[object Array]") {
        var f = false;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] == val) {
                f = true;
                break;
            }
        }
        if (!f) {
            arr.push(val);
        }
        return arr;
    } else {
        return new Array(val);
    }
}

function oiq_is(req, key) {
    var stags = document.getElementsByTagName("script");
    var ltag = stags[stags.length - 1];
    if (ltag == null) {
        return;
    }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    if (OIQLogging._logging_enabled) {
        var oiq_action = key || "unknown";
        var oiq_timeout = false;
        var oiq_key = null;
        oiq_key = OIQLogging.eventFire(req);
        var oiq_loadTimeout = setTimeout(function () {
            s.src = "";
            oiq_timeout = true;
        }, 1500);
        s.onload = function () {
            clearTimeout(oiq_loadTimeout);
            OIQLogging.logEvent({"action": oiq_action}, oiq_key);
        };
        s.onerror = function () {
            clearTimeout(oiq_loadTimeout);
            var oiq_mes = {"action": oiq_action, "error": "Couldn't return 200"};
            if (oiq_timeout) {
                oiq_mes.error = "timeout";
            }
            OIQLogging.logEvent(oiq_mes, oiq_key);
        };
    }
    ltag.parentNode.insertBefore(s, ltag);
    s.src = req;
}

function oiq_iifr(req, key) {
    var btags = document.getElementsByTagName("body");
    var btag = btags[btags.length - 1];
    if (btag == null) {
        return;
    }
    var ifr = document.createElement("iframe");
    ifr.style.display = "none";
    if (OIQLogging._logging_enabled) {
        var oiq_action = key || "unknown";
        var oiq_timeout = false;
        var oiq_key = null;
        oiq_key = OIQLogging.eventFire(req);
        var oiq_loadTimeout = setTimeout(function () {
            ifr.src = "";
            oiq_timeout = true;
        }, 1500);
        s.onload = function () {
            clearTimeout(oiq_loadTimeout);
            OIQLogging.logEvent({"action": oiq_action}, oiq_key);
        };
        s.onerror = function () {
            clearTimeout(oiq_loadTimeout);
            var oiq_mes = {"action": oiq_action, "error": "Couldn't return 200"};
            if (oiq_timeout) {
                oiq_mes.error = "timeout";
            }
            OIQLogging.logEvent(oiq_mes, oiq_key);
        };
    }
    btag.appendChild(ifr);
    ifr.src = req;
}

function oiq_doTag() {
    var t = new Array();
    if (!window.oiq_pMfg && !window.oiq_pDT && !window.oiq_pProduct) {
        t.push('f|"' + encodeURIComponent(document.title) + '"');
    } else {
        var i;
        if (window.oiq_pMfg) {
            for (i = 0; i < window.oiq_pMfg.length; i++) {
                t.push('m|"' + encodeURIComponent(window.oiq_pMfg[i]) + '"')
            }
        }
        if (window.oiq_pDT) {
            for (i = 0; i < window.oiq_pDT.length; i++) {
                t.push('d|"' + encodeURIComponent(window.oiq_pDT[i]) + '"')
            }
        }
        if (window.oiq_pProduct) {
            for (i = 0; i < window.oiq_pProduct.length; i++) {
                t.push('p|"' + encodeURIComponent(window.oiq_pProduct[i]) + '"')
            }
        }
    }
    if (window.oiq_pCust) {
        for (i = 0; i < window.window.oiq_pCust.length; i++) {
            t.push(encodeURIComponent(window.oiq_pCust[i][0]) + '|' + encodeURIComponent(window.oiq_pCust[i][1]))
        }
        window.oiq_as = 'true';
    }
    var req = 'https://px.owneriq.net/j/' + '?pt=' + window.oiq_pt.join() + '&t=' + encodeURI(t.join());
    if (window.oiq_pSource) req += '&s=' + window.oiq_pSource.join();
    if (window.oiq_as) {
        req += '&as=' + window.oiq_as;
    }
    oiq_is(req, 'segmentJS');
    if (window.oiq_pUser) {
        var oiq_user_img = new Image();
        oiq_user_img.src = "https://px.owneriq.net/euid?pt=0m120v&uid=" + encodeURIComponent(window.oiq_pUser);
    }
    var imgURL = oiq_getRefererImgURL();
    if (imgURL != null) {
        var referer_img = new Image();
        referer_img.src = imgURL;
    }
}

try {
    window.oiq_pt = oiq_ddPush(window.oiq_pt, "0m120v");
    window.oiq_uid = window.oiq_uid || 'Q' + ((Date.now() / 1000 | 0) - 946713600) + Math.floor(((Math.random() * 1147483647) + 1000000000)) + 'J';
    var _oiq_fps_js = true;
    if (_oiq_fps_js === true) {
        oiq_iifr('https://px.owneriq.net/eps?pt=0m120v&pid=6352&uid=' + window.oiq_uid + "&l=true", 'eps');
    }
} catch (oiq_error_message) {
    oiq_error_message = oiq_error_message || {"message": "couldn't find error"};
    var oiq_key = OIQLogging.eventFire("var_setup");
    OIQLogging.logEvent({'error': oiq_error_message.message, 'action': "var_setup"}, oiq_key);
}
try {
    if (_oiq_fps_js) {
        OIQLogging.eventTrackFinish("sgPixel");
    } else {
        OIQLogging.eventTrackFinish("wfPixel");
    }
    if (typeof (_oiqq) != "undefined") {
        if (typeof (window._oiqSC) == "undefined" || window._oiqSC == 0) {
            if (window._oiqSC == 0) {
                delete window.oiq_pSource;
                delete window.oiq_pMfg;
                delete window.oiq_pDT;
                delete window.oiq_pProduct;
            }
            window._oiqSC = 0;
            for (var i = 0; i < _oiqq.length; i++) {
                if (_oiqq[i] == "oiq_doTag") window._oiqSC++;
            }
        }
        window._oiqSC--;
        while (_oiqq.length != 0) {
            var t = _oiqq.shift();
            var f = window[t[0]];
            if (t != "oiq_doTag" && typeof (f) == "function") {
                if (typeof (t[1]) != "undefined") {
                    f(t[1]);
                } else {
                    f();
                }
            }
        }
        if (window._oiqSC == 0) {
            oiq_doTag();
        }
    }
} catch (oiq_error_message) {
    oiq_error_message = oiq_error_message || {"message": "couldn't find error"};
    var oiq_key = OIQLogging.eventFire("main");
    OIQLogging.logEvent({'error': oiq_error_message.message, 'action': "main"}, oiq_key);
}

function oiq_getRefererImgURL() {
    var oiq_refererURL = '';
    var oiq_title = '';
    if (typeof document != 'undefined' && document) {
        if (document.title && document.title != '') {
            oiq_title = document.title;
        }
        if (document.referrer && document.referrer != '') {
            oiq_refererURL = document.referrer;
        }
    }
    if (oiq_refererURL == '') return null;
    oiq_refererURL = oiq_refererURL.replace("#", "?");
    oiq_refererURL = decodeURIComponent(oiq_refererURL);
    var oiq_parsedReferer = oiq_parseURL(oiq_refererURL);
    if (oiq_parsedReferer) {
        if (oiq_parsedReferer.host && oiq_parsedReferer.protocol && oiq_parsedReferer.query) {
            if (oiq_parsedReferer.host.match(/google|bing|ask|aol/gi)) {
                var oiq_searchString = oiq_findQueryArgument(oiq_parsedReferer.query, 'q');
                if (oiq_searchString) {
                    var oiq_searchTagURL = 'https://px.owneriq.net/esq?pt=0m120v&URL=';
                    var oiq_URL = oiq_parsedReferer.protocol + '//' + oiq_parsedReferer.host + "/?q=" + oiq_searchString;
                    return oiq_searchTagURL + encodeURIComponent(oiq_URL) + "&title=" + oiq_title + "&sq=" + oiq_searchString;
                }
            }
        }
    }
    return null;
}

function oiq_parseURL(oiq_url) {
    if (oiq_url) {
        var oiq_loc = {'href': oiq_url};
        var oiq_protocolNHost = oiq_url.replace('//', '/').split('/');
        oiq_loc.protocol = typeof (oiq_protocolNHost[0]) != 'undefined' ? oiq_protocolNHost[0] : '';
        oiq_loc.host = typeof (oiq_protocolNHost[1]) != 'undefined' ? oiq_protocolNHost[1] : '';
        var oiq_params = oiq_url.split('?');
        oiq_loc.query = oiq_params[1] != null ? oiq_params[1] : '';
        return oiq_loc;
    }
    return null;
}

function oiq_findQueryArgument(oiq_strQuery, oiq_strArgumentName) {
    if (oiq_strQuery) {
        var oiq_arrParameters = oiq_strQuery.split("&");
        for (var i = 0; i < oiq_arrParameters.length; i++) {
            var oiq_arrPair = oiq_arrParameters[i].split("=");
            if (oiq_arrPair[0] == oiq_strArgumentName) {
                if (oiq_arrPair.length > 1) {
                    return oiq_arrPair[1];
                }
                break;
            }
        }
    }
    return null;
}