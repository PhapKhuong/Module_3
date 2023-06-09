(function ensightenInit() {
    var ensightenOptions = {
        client: "msonestore",
        clientId: 2117,
        publishPath: "prod",
        isPublic: 1,
        serverComponentLocation: "nexus.ensighten.com/msonestore/prod/serverComponent.php",
        staticJavascriptPath: "nexus.ensighten.com/msonestore/prod/code/",
        ns: 'Bootstrapper',
        nexus: "nexus.ensighten.com",
        scUseCacheBuster: "true",
        enableTagAuditBeacon: "false",
        enablePagePerfBeacon: "false",
        registryNs: "ensBootstraps",
        generatedOn: "Mon Sep 18 17:51:21 GMT 2017",
        beaconSamplingSeedValue: 11
    };
    if (!window[ensightenOptions.ns]) {
        window[ensightenOptions.registryNs] || (window[ensightenOptions.registryNs] = {});
        window[ensightenOptions.registryNs][ensightenOptions.ns] = window[ensightenOptions.ns] = function (f) {
            function l(a) {
                this.name = "DependencyNotAvailableException";
                this.message = "Dependency with id " + a + "is missing"
            }

            function m(a) {
                this.name = "BeaconException";
                this.message = "There was an error durring beacon initialization";
                a = a || {};
                this.lineNumber = a.lineNumber || a.line;
                this.fileName = a.fileName
            }

            function n() {
                for (var a = b.dataDefinitionIds.length, d = !0, e = 0; e < a; e++) {
                    var c = b.dataDefinitions[b.dataDefinitionIds[e]];
                    if (!c ||
                        null == c.endRegistration) {
                        d = !1;
                        break
                    }
                }
                d && b.callOnDataDefintionComplete()
            }

            var c = {}, b = {};
            b.ensightenOptions = ensightenOptions;
            b.scDataObj = {};
            c.version = "1.26.0";
            c.nexus = f.nexus || "nexus.ensighten.com";
            c.rand = -1;
            c.currSec = (new Date).getSeconds();
            c.options = {
                interval: f.interval || 100,
                erLoc: f.errorLocation || c.nexus + "/error/e.gif",
                scLoc: f.serverComponentLocation || c.nexus + "/" + f.client + "/serverComponent.php",
                sjPath: f.staticJavascriptPath || c.nexus + "/" + f.client + "/code/",
                alLoc: f.alertLocation || c.nexus + "/alerts/a.gif",
                publishPath: f.publishPath,
                isPublic: f.isPublic,
                client: f.client,
                clientId: f.clientId,
                enableTagAuditBeacon: f.enableTagAuditBeacon,
                scUseCacheBuster: f.scUseCacheBuster,
                beaconSamplingSeedValue: f.beaconSamplingSeedValue || -1
            };
            c.ruleList = [];
            c.allDeploymentIds = [];
            c.runDeploymentIds = [];
            c.runRuleIds = [];
            c.exceptionList = [];
            c.ensightenVariables = {};
            c.test = function (a) {
                if (!(a.executionData.hasRun || a.executionData.runTime && 0 < a.executionData.runTime.length)) {
                    for (var d = 0; d < a.dependencies.length; d++) if (!1 === a.dependencies[d]()) return;
                    a.execute()
                }
            };
            l.prototype = Error();
            l.prototype || (l.prototype = {});
            l.prototype.constructor = l;
            c.DependencyNotAvailableException = l;
            m.prototype = Error();
            m.prototype || (m.prototype = {});
            m.prototype.constructor = m;
            c.BeaconException = m;
            c.checkForInvalidDependencies = function (a, d, e, h) {
                for (a = 0; a < e.length; a++) if ("DEPENDENCYNEVERAVAILABLE" === e[a]) return b.currentRuleId = this.id, b.currentDeploymentId = this.deploymentId, b.reportException(new c.DependencyNotAvailableException(h[a])), d && -1 !== d && c.allDeploymentIds.push(d),
                    !0;
                return !1
            };
            b.currentRuleId = -1;
            b.currentDeploymentId = -1;
            b.reportedErrors = [];
            b.reportedAlerts = [];
            b.AF = [];
            b._serverTime = "";
            b._clientIP = "";
            b.sampleBeacon = function () {
                var a = !1;
                try {
                    var d = (c.currSec || 0) % 20, b = c.options.beaconSamplingSeedValue;
                    -1 === b ? a = !0 : 0 !== d && 0 === b % d && (a = !0)
                } catch (h) {
                }
                return a
            };
            b.getServerComponent = function (a) {
                b.callOnGetServerComponent();
                b.insertScript(window.location.protocol + "//" + c.options.scLoc, !1, a || !0, c.options.scUseCacheBuster)
            };
            b.setVariable = function (a, b) {
                c.ensightenVariables[a] =
                    b
            };
            b.getVariable = function (a) {
                return a in c.ensightenVariables ? c.ensightenVariables[a] : null
            };
            b.testAll = function () {
                for (var a = 0; a < c.ruleList.length; a++) c.test(c.ruleList[a])
            };
            b.executionState = {
                DOMParsed: !1,
                DOMLoaded: !1,
                dataDefinitionComplete: !1,
                conditionalRules: !1,
                readyForServerComponent: !1
            };
            b.reportException = function (a) {
                a.timestamp = (new Date).getTime();
                c.exceptionList.push(a);
                a = window.location.protocol + "//" + c.options.erLoc + "?msg=" + encodeURIComponent(a.message || "") + "&lnn=" + encodeURIComponent(a.lineNumber ||
                    a.line || -1) + "&fn=" + encodeURIComponent(a.fileName || "") + "&cid=" + encodeURIComponent(c.options.clientId || -1) + "&client=" + encodeURIComponent(c.options.client || "") + "&publishPath=" + encodeURIComponent(c.options.publishPath || "") + "&rid=" + encodeURIComponent(b.currentRuleId || -1) + "&did=" + encodeURIComponent(b.currentDeploymentId || -1) + "&errorName=" + encodeURIComponent(a.name || "");
                a = b.imageRequest(a);
                a.timestamp = (new Date).getTime();
                this.reportedErrors.push(a)
            };
            b.Rule = function (a) {
                this.execute = function () {
                    this.executionData.runTime.push(new Date);
                    b.currentRuleId = this.id;
                    b.currentDeploymentId = this.deploymentId;
                    try {
                        this.code()
                    } catch (d) {
                        window[ensightenOptions.ns].reportException(d)
                    } finally {
                        this.executionData.hasRun = !0, -1 !== this.deploymentId && (c.runDeploymentIds.push(this.deploymentId), c.runRuleIds.push(this.id)), b.testAll()
                    }
                };
                this.id = a.id;
                this.deploymentId = a.deploymentId;
                this.dependencies = a.dependencies || [];
                this.code = a.code;
                this.executionData = {hasRun: !1, runTime: []}
            };
            b.registerRule = function (a) {
                if (b.getRule(a.id) && -1 !== a.id) return !1;
                c.ruleList.push(a);
                -1 !== a.deploymentId && c.allDeploymentIds.push(a.deploymentId);
                b.testAll();
                return !0
            };
            b.getRule = function (a) {
                for (var b = 0; b < c.ruleList.length; b++) if (c.ruleList[b].id === a) return c.ruleList[b];
                return !1
            };
            b.getRuleList = function () {
                return c.ruleList
            };
            b.clearRuleList = function () {
                c.ruleList = []
            };
            b.getAllDeploymentIds = function () {
                return c.allDeploymentIds
            };
            b.getRunRuleIds = function () {
                return c.runRuleIds
            };
            b.getRunDeploymentIds = function () {
                return c.runDeploymentIds
            };
            b.hasRuleRun = function (a) {
                return (a = b.getRule(a)) ? a.executionData.hasRun :
                    !1
            };
            c.toTwoChar = function (a) {
                return (2 === a.toString().length ? "" : "0") + a
            };
            b.Alert = function (a) {
                var b = new Date,
                    b = b.getFullYear() + "-" + c.toTwoChar(b.getMonth()) + "-" + c.toTwoChar(b.getDate()) + " " + c.toTwoChar(b.getHours()) + ":" + c.toTwoChar(b.getMinutes()) + ":" + c.toTwoChar(b.getSeconds());
                this.severity = a.severity || 1;
                this.subject = a.subject || "";
                this.type = a.type || 1;
                this.ruleId = a.ruleId || -1;
                this.severity = encodeURIComponent(this.severity);
                this.date = encodeURIComponent(b);
                this.subject = encodeURIComponent(this.subject);
                this.type = encodeURIComponent(this.type)
            };
            b.generateAlert = function (a) {
                a = b.imageRequest(window.location.protocol + "//" + c.options.alLoc + "?d=" + a.date + "&su=" + a.subject + "&se=" + a.severity + "&t=" + a.type + "&cid=" + c.options.clientId + "&client=" + c.options.client + "&publishPath=" + c.options.publishPath + "&rid=" + b.currentRuleId + "&did=" + b.currentDeploymentId);
                a.timestamp = (new Date).getTime();
                this.reportedAlerts.push(a)
            };
            b.imageRequest = function (a) {
                var b = new Image(0, 0);
                b.src = a;
                return b
            };
            b.insertScript = function (a, d, e, h) {
                var p =
                    document.getElementsByTagName("script"), g;
                h = void 0 !== h ? h : !0;
                if (void 0 !== d ? d : 1) for (g = 0; g < p.length; g++) if (p[g].src === a && p[g].readyState && /loaded|complete/.test(p[g].readyState)) return;
                if (e) {
                    e = 1 == e && "object" == typeof b.scDataObj ? b.scDataObj : e;
                    c.rand = Math.random() * ("1E" + (10 * Math.random()).toFixed(0));
                    d = window.location.href;
                    "object" === typeof e && e.PageID && (d = e.PageID, delete e.PageID);
                    if ("object" === typeof e) for (g in e) {
                        g = ~d.indexOf("#") ? d.slice(d.indexOf("#"), d.length) : "";
                        d = d.slice(0, g.length ? d.length - g.length :
                            d.length);
                        d += ~d.indexOf("?") ? "&" : "?";
                        for (k in e) d += k + "=" + e[k] + "&";
                        d = d.slice(0, -1) + g;
                        break
                    }
                    a += "?";
                    h && (a += "r=" + c.rand + "&");
                    a += "ClientID=" + encodeURIComponent(c.options.clientId) + "&PageID=" + encodeURIComponent(d)
                }
                (function (a, b, d) {
                    var e = b.head || b.getElementsByTagName("head");
                    setTimeout(function () {
                        if ("item" in e) {
                            if (!e[0]) {
                                setTimeout(arguments.callee, 25);
                                return
                            }
                            e = e[0]
                        }
                        var a = b.createElement("script");
                        a.src = d;
                        a.onload = a.onerror = function () {
                            this.addEventListener && (this.readyState = "loaded")
                        };
                        e.insertBefore(a,
                            e.firstChild)
                    }, 0)
                })(window, document, a)
            };
            b.loadScriptCallback = function (a, b, e) {
                var d = document.getElementsByTagName("script"), c;
                e = d[0];
                for (c = 0; c < d.length; c++) if (d[c].src === a && d[c].readyState && /loaded|complete/.test(d[c].readyState)) try {
                    b()
                } catch (g) {
                    window[ensightenOptions.ns].reportException(g)
                } finally {
                    return
                }
                d = document.createElement("script");
                d.type = "text/javascript";
                d.async = !0;
                d.src = a;
                d.onerror = function () {
                    this.addEventListener && (this.readyState = "loaded")
                };
                d.onload = d.onreadystatechange = function () {
                    if (!this.readyState ||
                        "complete" === this.readyState || "loaded" === this.readyState) {
                        this.onload = this.onreadystatechange = null;
                        this.addEventListener && (this.readyState = "loaded");
                        try {
                            b.call(this)
                        } catch (g) {
                            window[ensightenOptions.ns].reportException(g)
                        }
                    }
                };
                e.parentNode.insertBefore(d, e)
            };
            b.unobtrusiveAddEvent = function (a, b, e) {
                try {
                    var d = a[b] ? a[b] : function () {
                    };
                    a[b] = function () {
                        e.apply(this, arguments);
                        return d.apply(this, arguments)
                    }
                } catch (p) {
                    window[ensightenOptions.ns].reportException(p)
                }
            };
            b.anonymous = function (a, d) {
                return function () {
                    try {
                        b.currentRuleId =
                            d ? d : "anonymous", a()
                    } catch (e) {
                        window[ensightenOptions.ns].reportException(e)
                    }
                }
            };
            b.setCurrentRuleId = function (a) {
                b.currentRuleId = a
            };
            b.setCurrentDeploymentId = function (a) {
                b.currentDeploymentId = a
            };
            b.bindImmediate = function (a, d, e) {
                if ("function" === typeof a) a = new b.Rule({
                    id: d || -1,
                    deploymentId: e || -1,
                    dependencies: [],
                    code: a
                }); else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindDOMParsed = function (a, d, e) {
                if ("function" === typeof a) a = new b.Rule({
                    id: d || -1, deploymentId: e || -1, dependencies: [function () {
                        return window[ensightenOptions.ns].executionState.DOMParsed
                    }],
                    code: a
                }); else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindDOMLoaded = function (a, d, e) {
                if ("function" === typeof a) a = new b.Rule({
                    id: d || -1,
                    deploymentId: e || -1,
                    dependencies: [function () {
                        return window[ensightenOptions.ns].executionState.DOMLoaded
                    }],
                    code: a
                }); else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindPageSpecificCompletion = function (a, d, e) {
                if ("function" === typeof a) a = new b.Rule({
                    id: d || -1, deploymentId: e || -1, dependencies: [function () {
                        return window[ensightenOptions.ns].executionState.conditionalRules
                    }],
                    code: a
                }); else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindOnGetServerComponent = function (a, d, e) {
                if ("function" === typeof a) a = new b.Rule({
                    id: d || -1,
                    deploymentId: e || -1,
                    dependencies: [function () {
                        return window[ensightenOptions.ns].executionState.readyForServerComponent
                    }],
                    code: a
                }); else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.bindDataDefinitionComplete = function (a, d, e) {
                if ("function" === typeof a) a = new b.Rule({
                    id: d || -1, deploymentId: e || -1, dependencies: [function () {
                        return window[ensightenOptions.ns].executionState.dataDefinitionComplete
                    }],
                    code: a
                }); else if ("object" !== typeof a) return !1;
                b.registerRule(a)
            };
            b.checkHasRun = function (a) {
                if (0 === a.length) return !0;
                for (var d, e = 0; e < a.length; ++e) if (d = b.getRule(parseInt(a[e], 10)), !d || !d.executionData.hasRun) return !1;
                return !0
            };
            b.bindDependencyImmediate = function (a, d, e, h, f) {
                var g = [];
                if (!c.checkForInvalidDependencies(d, h, e, f)) {
                    g.push(function () {
                        return window[ensightenOptions.ns].checkHasRun(e)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: d || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    }); else if ("object" !==
                        typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyDOMLoaded = function (a, d, e, h, f) {
                var g = [];
                if (!c.checkForInvalidDependencies(d, h, e, f)) {
                    g.push(function () {
                        return window[ensightenOptions.ns].executionState.DOMLoaded
                    });
                    g.push(function () {
                        return window[ensightenOptions.ns].checkHasRun(e)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: d || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    }); else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyDOMParsed = function (a, d, e, h, f) {
                var g = [];
                if (!c.checkForInvalidDependencies(d,
                    h, e, f)) {
                    g.push(function () {
                        return window[ensightenOptions.ns].executionState.DOMParsed
                    });
                    g.push(function () {
                        return window[ensightenOptions.ns].checkHasRun(e)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: d || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    }); else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyPageSpecificCompletion = function (a, d, e, h, f) {
                var g = [];
                if (!c.checkForInvalidDependencies(d, h, e, f)) {
                    g.push(function () {
                        return window[ensightenOptions.ns].executionState.conditionalRules
                    });
                    g.push(function () {
                        return window[ensightenOptions.ns].checkHasRun(e)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: d || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    }); else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyOnGetServerComponent = function (a, d, e, h, f) {
                var g = [];
                if (!c.checkForInvalidDependencies(d, h, e, f)) {
                    g.push(function () {
                        return window[ensightenOptions.ns].executionState.readyForServerComponent
                    });
                    g.push(function () {
                        return window[ensightenOptions.ns].checkHasRun(e)
                    });
                    if ("function" ===
                        typeof a) a = new b.Rule({
                        id: d || -1,
                        deploymentId: h || -1,
                        dependencies: g,
                        code: a
                    }); else if ("object" !== typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.bindDependencyPageSpecificCompletion = function (a, d, e, f, p) {
                var g = [];
                if (!c.checkForInvalidDependencies(d, f, e, p)) {
                    g.push(function () {
                        return window[ensightenOptions.ns].executionState.dataDefinitionComplete
                    });
                    g.push(function () {
                        return window[ensightenOptions.ns].checkHasRun(e)
                    });
                    if ("function" === typeof a) a = new b.Rule({
                        id: d || -1,
                        deploymentId: f || -1,
                        dependencies: g,
                        code: a
                    }); else if ("object" !==
                        typeof a) return !1;
                    b.registerRule(a)
                }
            };
            b.dataDefintionIds = [];
            b.dataDefinitions = [];
            b.pageSpecificDataDefinitionsSet = !1;
            b.setPageSpecificDataDefinitionIds = function (a) {
                for (var d = a.length, e = 0; e < d; e++) {
                    var c = a[e];
                    if (Array.prototype.indexOf) -1 == b.dataDefinitionIds.indexOf(c) && b.dataDefinitionIds.push(c); else {
                        for (var f = !1, g = b.dataDefinitionIds.length, l = 0; l < g; l++) if (b.dataDefinitionIds[l] === c) {
                            f = !0;
                            break
                        }
                        f || b.dataDefinitionIds.push(c)
                    }
                }
                b.pageSpecificDataDefinitionsSet = !0;
                n()
            };
            b.DataDefinition = function (a, b) {
                this.id =
                    a;
                this.registrationFn = b;
                this.endRegistrationTime = this.startRegistrationTime = null;
                this.startRegistration = function () {
                    this.startRegistrationTime = new Date
                };
                this.endRegistration = function () {
                    this.endRegistrationTime = new Date
                }
            };
            b.registerDataDefinition = function (a, d) {
                var e = b.dataDefinitions[d];
                e || (e = new b.DataDefinition(d, a), b.dataDefinitions[d] = e);
                e.startRegistrationTime || (e.startRegistration(), e.registrationFn(), e.endRegistration());
                b.pageSpecificDataDefinitionsSet && n()
            };
            b.callOnDataDefintionComplete = function () {
                b.executionState.dataDefinitionComplete =
                    !0;
                b.testAll()
            };
            b.callOnDOMParsed = function () {
                window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].testAll()
            };
            b.callOnDOMLoaded = function () {
                window[ensightenOptions.ns].executionState.DOMParsed = !0;
                window[ensightenOptions.ns].executionState.DOMLoaded = !0;
                window[ensightenOptions.ns].testAll()
            };
            b.callOnPageSpecificCompletion = function () {
                for (var a = document.getElementsByTagName("script"), b = 0, e = a.length; b < e; b++) if (a[b].src && a[b].src.match(/\.ensighten\.com\/(.+?)\/code\/.*/i) &&
                    "loaded" != a[b].readyState && "complete" != a[b].readyState) {
                    setTimeout(window[ensightenOptions.ns].callOnPageSpecificCompletion, 50);
                    return
                }
                setTimeout(function () {
                    window[ensightenOptions.ns].executionState.conditionalRules = !0;
                    window[ensightenOptions.ns].testAll()
                }, 1)
            };
            b.callOnGetServerComponent = function () {
                window[ensightenOptions.ns].executionState.readyForServerComponent = !0;
                window[ensightenOptions.ns].testAll()
            };
            b.hasDOMParsed = function () {
                return window[ensightenOptions.ns].executionState.DOMParsed
            };
            b.hasDOMLoaded =
                function () {
                    return window[ensightenOptions.ns].executionState.DOMLoaded
                };
            b.hasPageSpecificCompletion = function () {
                return window[ensightenOptions.ns].executionState.conditionalRules
            };
            var r = function () {
                var a = [], b = !1, e = !1;
                return {
                    add: function (d) {
                        b && !e ? d() : "function" == typeof d && (a[a.length] = d)
                    }, exec: function () {
                        e = !0;
                        do {
                            var d = a;
                            a = [];
                            b = !0;
                            for (var c = 0; c < d.length; c++) try {
                                d[c].call(window)
                            } catch (g) {
                                window[ensightenOptions.ns].reportException(g)
                            }
                        } while (0 < a.length);
                        e = !1
                    }, haveRun: function () {
                        return b
                    }
                }
            };
            b.new_fArray =
                function () {
                    return r()
                };
            c.timer = null;
            (function () {
                function a(a, b) {
                    return function () {
                        a.apply(b, arguments)
                    }
                }

                window.console || (window.console = {});
                var b = window.console;
                if (!b.log) if (window.log4javascript) {
                    var c = log4javascript.getDefaultLogger();
                    b.log = a(c.info, c);
                    b.debug = a(c.debug, c);
                    b.info = a(c.info, c);
                    b.warn = a(c.warn, c);
                    b.error = a(c.error, c)
                } else b.log = function () {
                };
                b.debug || (b.debug = b.log);
                b.info || (b.info = b.log);
                b.warn || (b.warn = b.log);
                b.error || (b.error = b.log)
            })();
            document.addEventListener ? (-1 < navigator.userAgent.indexOf("AppleWebKit/") ?
                c.timer = window.setInterval(function () {
                    /loaded|interactive|complete/.test(document.readyState) && (clearInterval(c.timer), b.callOnDOMParsed())
                }, 50) : document.addEventListener("DOMContentLoaded", b.callOnDOMParsed, !1), window.addEventListener("load", b.callOnDOMLoaded, !1)) : (setTimeout(function () {
                var a = window.document;
                (function () {
                    try {
                        if (!document.body) throw"continue";
                        a.documentElement.doScroll("left")
                    } catch (d) {
                        setTimeout(arguments.callee, 15);
                        return
                    }
                    window[ensightenOptions.ns].callOnDOMParsed()
                })()
            }, 1), window.attachEvent("onload",
                function () {
                    window[ensightenOptions.ns].callOnDOMLoaded()
                }));
            document.readyState && "complete" === document.readyState && (b.executionState.DOMParsed = !0, b.executionState.DOMLoaded = !0);
            "true" === c.options.enableTagAuditBeacon && b.sampleBeacon() && window.setTimeout(function () {
                if (window[ensightenOptions.ns] && !window[ensightenOptions.ns].mobilePlatform) try {
                    for (var a = [], d, e, h, l, g = 0; g < c.ruleList.length; ++g) e = c.ruleList[g], h = e.executionData.hasRun ? "1" : "0", l = e.deploymentId.toString() + "|" + e.id.toString() + "|" + h, a.push(l);
                    d = "[" + a.join(";") + "]";
                    var m = window.location.protocol + "//" + c.nexus + "/" + encodeURIComponent(f.client) + "/" + encodeURIComponent(f.publishPath) + "/TagAuditBeacon.rnc?cid=" + encodeURIComponent(f.clientId) + "&data=" + d + "&idx=0&r=" + c.rand;
                    b.imageRequest(m)
                } catch (q) {
                    b.currentRuleId = -1, b.currentDeploymentId = -1, a = new c.BeaconException(q), window[ensightenOptions.ns].reportException(a)
                }
            }, 3E3);
            window.setInterval(b.testAll, c.options.interval);
            return b
        }(ensightenOptions);
        "true" === ensightenOptions.enablePagePerfBeacon && window[ensightenOptions.ns] && window[ensightenOptions.ns].sampleBeacon() && window[ensightenOptions.ns].bindDOMParsed(function () {
            if (!window[ensightenOptions.ns].mobilePlatform) {
                var f = window.performance;
                if (f) {
                    var f = f.timing || {}, l = f.navigationStart || 0, m = {
                        connectEnd: "ce",
                        connectStart: "cs",
                        domComplete: "dc",
                        domContentLoadedEventEnd: "dclee",
                        domContentLoadedEventStart: "dcles",
                        domInteractive: "di",
                        domLoading: "dl",
                        domainLookupEnd: "dle",
                        domainLookupStart: "dls",
                        fetchStart: "fs",
                        loadEventEnd: "lee",
                        loadEventStart: "les",
                        redirectEnd: "rede",
                        redirectStart: "reds",
                        requestStart: "reqs",
                        responseStart: "resps",
                        responseEnd: "respe",
                        secureConnectionStart: "scs",
                        unloadEventStart: "ues",
                        unloadEventEnd: "uee"
                    };
                    var n = "&ns=" + encodeURIComponent(f.navigationStart);
                    for (var c in m) if (void 0 !== f[c]) {
                        var b = f[c] - l;
                        n += "&" + m[c] + "=" + (0 < b ? encodeURIComponent(b) : 0)
                    } else n += "&" + m[c] + "=-1";
                    window[ensightenOptions.ns].timing = n;
                    c = ensightenOptions.nexus || "nexus.ensighten.com";
                    f = ensightenOptions.staticJavascriptPath ||
                        "";
                    n = f.indexOf(".com/");
                    l = f.indexOf("/code/");
                    f = f.substring(n + 4, l) + "/perf.rnc";
                    f += "?cid=" + encodeURIComponent(ensightenOptions.clientId) + window[ensightenOptions.ns].timing;
                    window[ensightenOptions.ns].imageRequest("//" + c + f)
                }
            }
        });

        window[ensightenOptions.ns].ensEvent || (window[ensightenOptions.ns].ensEvent = function (n, u) {
            var k = {
                queue: {}, pollQueue: {}, pushTrigger: function (b, c) {
                    if ("[object Array]" === Object.prototype.toString.call(b)) {
                        for (var g = 0; g < b.length; g++) k.pushTrigger(b[g], c);
                        return !0
                    }
                    if ("string" != typeof b) return !1;
                    this.queue[b] = this.queue[b] || {fn: []};
                    "function" == typeof c && this.queue[b].fn.push(c);
                    return !0
                }, callTrigger: function (b, c, g) {
                    if ("string" != typeof b) return !1;
                    b = k.queue[b];
                    if ("object" == typeof b && b.fn && b.fn.length && (0 !=
                        b.fireOnFirstSet && c == u || c != u && 0 != b.fireOnUpdate)) for (c = 0; c < b.fn.length; c++) b.fn[c].call(this)
                }, setPollOptions: function (b, c, g) {
                    this.queue[b] = this.queue[b] || {fn: []};
                    this.queue[b].fireOnFirstSet = c;
                    this.queue[b].fireOnUpdate = g
                }, callPoll: function (b, c, g, n, r) {
                    if ("string" == typeof b && c && c.length && !(1 > c.length)) {
                        for (var p = 0; p < c.length; p++) k.setPollOptions(c[p], n, r);
                        k.pushWatch(b, c, g)
                    }
                }, pushWatch: function (b, c, g) {
                    this.pollQueue[b] || (this.pollQueue[b] = {previousVal: u, eventArr: [], valueFn: g});
                    this.pollQueue[b].eventArr =
                        this.pollQueue[b].eventArr.concat(c);
                    this.pollQueue[b].valueFn = g
                }, globalWatch: function () {
                    setInterval(function () {
                        for (var b in k.pollQueue) {
                            var c = k.pollQueue[b], g = c.valueFn(b);
                            if (c.previousVal !== g && null !== g && "" !== g) {
                                for (var p = 0; p < c.eventArr.length; p++) k.callTrigger.call(n, c.eventArr[p], c.previousVal, g);
                                k.pollQueue[b].previousVal = g
                            }
                        }
                    }, 500)
                }
            };
            k.globalWatch();
            return {
                add: function (b, c) {
                    return k.pushTrigger(b, c)
                }, get: function (b) {
                    return k.queue[b]
                }, trigger: function (b, c) {
                    return k.callTrigger.call(c || n, b)
                },
                poll: function (b, c, g, p, r) {
                    r = r || n[ensightenOptions.ns].data.resolve;
                    return k.callPoll(b, c, r, g, p)
                }
            }
        }(window), function (n, u, k) {
            u[n] = k()
        }("qwery", window[ensightenOptions.ns], function () {
            function n() {
                this.c = {}
            }

            function u(a) {
                return H.g(a) || H.s(a, "(^|\\s+)" + a + "(\\s+|$)", 1)
            }

            function k(a, d) {
                for (var e = 0, f = a.length; e < f; e++) d(a[e])
            }

            function b(a) {
                for (var d = [], e = 0, f = a.length; e < f; ++e) l(a[e]) ? d = d.concat(a[e]) : d[d.length] = a[e];
                return d
            }

            function c(a) {
                for (var d = 0, e = a.length, f = []; d < e; d++) f[d] = a[d];
                return f
            }

            function g(a) {
                for (; (a =
                    a.previousSibling) && 1 != a.nodeType;) ;
                return a
            }

            function p(a, d, e, f, b, h, l, c, g, k, y) {
                var I, B, m;
                if (1 !== this.nodeType || d && "*" !== d && this.tagName && this.tagName.toLowerCase() !== d || e && (I = e.match(Q)) && I[1] !== this.id) return !1;
                if (e && (m = e.match(R))) for (a = m.length; a--;) if (!u(m[a].slice(1)).test(this.className)) return !1;
                if (g && v.pseudos[g] && !v.pseudos[g](this, y)) return !1;
                if (f && !l) for (B in g = this.attributes, g) if (Object.prototype.hasOwnProperty.call(g, B) && (g[B].name || B) == b) return this;
                return f && !x(h, S(this, b) || "", l) ?
                    !1 : this
            }

            function r(a) {
                return J.g(a) || J.s(a, a.replace(T, "\\$1"))
            }

            function x(a, d, e) {
                switch (a) {
                    case "=":
                        return d == e;
                    case "^=":
                        return d.match(w.g("^=" + e) || w.s("^=" + e, "^" + r(e), 1));
                    case "$=":
                        return d.match(w.g("$=" + e) || w.s("$=" + e, r(e) + "$", 1));
                    case "*=":
                        return d.match(w.g(e) || w.s(e, r(e), 1));
                    case "~=":
                        return d.match(w.g("~=" + e) || w.s("~=" + e, "(?:^|\\s+)" + r(e) + "(?:\\s+|$)", 1));
                    case "|=":
                        return d.match(w.g("|=" + e) || w.s("|=" + e, "^" + r(e) + "(-|$)", 1))
                }
                return 0
            }

            function q(a, d) {
                var e = [], f = [], b, h, l = d, c = C.g(a) || C.s(a,
                    a.split(K)), g = a.match(L);
                if (!c.length) return e;
                var m = (c = c.slice(0)).pop();
                c.length && (b = c[c.length - 1].match(M)) && (l = N(d, b[1]));
                if (!l) return e;
                var y = m.match(E);
                var v = l !== d && 9 !== l.nodeType && g && /^[+~]$/.test(g[g.length - 1]) ? function (a) {
                    for (; l = l.nextSibling;) 1 == l.nodeType && (y[1] ? y[1] == l.tagName.toLowerCase() : 1) && (a[a.length] = l);
                    return a
                }([]) : l.getElementsByTagName(y[1] || "*");
                b = 0;
                for (m = v.length; b < m; b++) if (h = p.apply(v[b], y)) e[e.length] = h;
                if (!c.length) return e;
                k(e, function (a) {
                    t(a, c, g) && (f[f.length] = a)
                });
                return f
            }

            function t(a, d, e, b) {
                function l(a, b, c) {
                    for (; c = U[e[b]](c, a);) if (f(c) && p.apply(c, d[b].match(E))) if (b) {
                        if (h = l(c, b - 1, c)) return h
                    } else return c
                }

                var h;
                return (h = l(a, d.length - 1, a)) && (!b || z(h, b))
            }

            function f(a, d) {
                return a && "object" === typeof a && (d = a.nodeType) && (1 == d || 9 == d)
            }

            function h(a) {
                var d = [], e;
                var f = 0;
                a:for (; f < a.length; ++f) {
                    for (e = 0; e < d.length; ++e) if (d[e] == a[f]) continue a;
                    d[d.length] = a[f]
                }
                return d
            }

            function l(a) {
                return "object" === typeof a && isFinite(a.length)
            }

            function N(a, d, e) {
                return 9 === a.nodeType ? a.getElementById(d) :
                    a.ownerDocument && ((e = a.ownerDocument.getElementById(d)) && z(e, a) && e || !z(a, a.ownerDocument) && F('[id="' + d + '"]', a)[0])
            }

            function v(a, d) {
                var e, h;
                var g = d ? "string" == typeof d ? v(d)[0] : !d.nodeType && l(d) ? d[0] : d : m;
                if (!g || !a) return [];
                if (a === window || f(a)) return !d || a !== window && f(g) && z(a, g) ? [a] : [];
                if (a && l(a)) return b(a);
                if (e = a.match(V)) {
                    if (e[1]) return (h = N(g, e[1])) ? [h] : [];
                    if (e[2]) return c(g.getElementsByTagName(e[2]));
                    if (W && e[3]) return c(g.getElementsByClassName(e[3]))
                }
                return F(a, g)
            }

            function y(a, d) {
                return function (e) {
                    var f,
                        b;
                    O.test(e) ? 9 !== a.nodeType && ((b = f = a.getAttribute("id")) || a.setAttribute("id", b = "__qwerymeupscotty"), d(a.parentNode || a, '[id="' + b + '"]' + e, !0), f || a.removeAttribute("id")) : e.length && d(a, e, !1)
                }
            }

            var m = document, D = m.documentElement, F, Q = /#([\w\-]+)/, R = /\.[\w\-]+/g, M = /^#([\w\-]+)$/,
                X = /^([\w]+)?\.([\w\-]+)$/, O = /(^|,)\s*[>~+]/, Y = /^\s+|\s*([,\s\+\~>]|$)\s*/g, A = /[\s\>\+\~]/,
                P = /(?![\s\w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^'"]*\]|[\s\w\+\-]*\))/,
                T = /([.*+?\^=!:${}()|\[\]\/\\])/g, V = new RegExp(M.source + "|" + /^([\w\-]+)$/.source +
                    "|" + /^\.([\w\-]+)$/.source), L = new RegExp("(" + A.source + ")" + P.source, "g"),
                K = new RegExp(A.source + P.source),
                E = new RegExp(/^(\*|[a-z0-9]+)?(?:([\.\#]+[\w\-\.#]+)?)/.source + "(" + /\[([\w\-]+)(?:([\|\^\$\*\~]?\=)['"]?([ \w\-\/\?\&\=\:\.\(\)\!,@#%<>\{\}\$\*\^]+)["']?)?\]/.source + ")?(" + /:([\w\-]+)(\(['"]?([^()]+)['"]?\))?/.source + ")?"),
                U = {
                    " ": function (a) {
                        return a && a !== D && a.parentNode
                    }, ">": function (a, d) {
                        return a && a.parentNode == d.parentNode && a.parentNode
                    }, "~": function (a) {
                        return a && a.previousSibling
                    }, "+": function (a,
                                      d, e, f) {
                        return a ? (e = g(a)) && (f = g(d)) && e == f && e : !1
                    }
                };
            n.prototype = {
                g: function (a) {
                    return this.c[a] || void 0
                }, s: function (a, d, e) {
                    d = e ? new RegExp(d) : d;
                    return this.c[a] = d
                }
            };
            var H = new n, J = new n, w = new n, C = new n, z = "compareDocumentPosition" in D ? function (a, d) {
                return 16 == (d.compareDocumentPosition(a) & 16)
            } : "contains" in D ? function (a, d) {
                d = 9 === d.nodeType || d == window ? D : d;
                return d !== a && d.contains(a)
            } : function (a, d) {
                for (; a = a.parentNode;) if (a === d) return 1;
                return 0
            }, S = function () {
                var a = m.createElement("p");
                return (a.innerHTML =
                    '<a href="#x">x</a>', "#x" != a.firstChild.getAttribute("href")) ? function (a, e) {
                    return "class" === e ? a.className : "href" === e || "src" === e ? a.getAttribute(e, 2) : a.getAttribute(e)
                } : function (a, e) {
                    return a.getAttribute(e)
                }
            }(), W = !!m.getElementsByClassName, Z = m.querySelector && m.querySelectorAll, aa = function (a, d) {
                var e = [], f, b;
                try {
                    if (9 === d.nodeType || !O.test(a)) return c(d.querySelectorAll(a));
                    k(f = a.split(","), y(d, function (a, d) {
                        b = a.querySelectorAll(d);
                        1 == b.length ? e[e.length] = b.item(0) : b.length && (e = e.concat(c(b)))
                    }));
                    return 1 <
                    f.length && 1 < e.length ? h(e) : e
                } catch (ba) {
                }
                return G(a, d)
            }, G = function (a, d) {
                var e = [], f, b;
                a = a.replace(Y, "$1");
                if (f = a.match(X)) {
                    var l = u(f[2]);
                    f = d.getElementsByTagName(f[1] || "*");
                    var c = 0;
                    for (b = f.length; c < b; c++) l.test(f[c].className) && (e[e.length] = f[c]);
                    return e
                }
                k(f = a.split(","), y(d, function (a, f, h) {
                    l = q(f, a);
                    c = 0;
                    for (b = l.length; c < b; c++) if (9 === a.nodeType || h || z(l[c], d)) e[e.length] = l[c]
                }));
                return 1 < f.length && 1 < e.length ? h(e) : e
            }, A = function (a) {
                "undefined" !== typeof a.useNativeQSA && (F = a.useNativeQSA ? Z ? aa : G : G)
            };
            A({useNativeQSA: !0});
            v.configure = A;
            v.uniq = h;
            v.is = function (a, d, e) {
                if (f(d)) return a == d;
                if (l(d)) return !!~b(d).indexOf(a);
                for (var c = d.split(","), h; d = c.pop();) if (h = C.g(d) || C.s(d, d.split(K)), d = d.match(L), h = h.slice(0), p.apply(a, h.pop().match(E)) && (!h.length || t(a, h, d, e))) return !0;
                return !1
            };
            v.pseudos = {};
            return v
        }), function () {
            function n(f, b, c) {
                p || (p = window[ensightenOptions.ns].qwery);
                var h = p;
                if ((h = h.call(c, b, c)) && 0 < h.length) {
                    if ("_root" == b) f = c; else if (f === c) f = void 0; else {
                        b:{
                            for (var l = h.length, g = 0; g < l; g++) if (f === h[g]) {
                                h = !0;
                                break b
                            }
                            h =
                                !1
                        }
                        h || (f.parentNode ? (r++, f = n(f.parentNode, b, c)) : f = void 0)
                    }
                    return f
                }
                return !1
            }

            function u(f, b, c, g) {
                q[f.id] || (q[f.id] = {});
                q[f.id][b] || (q[f.id][b] = {});
                q[f.id][b][c] || (q[f.id][b][c] = []);
                q[f.id][b][c].push(g)
            }

            function k(f, b, c, g) {
                if (g || c) if (g) for (var h = 0; h < q[f.id][b][c].length; h++) {
                    if (q[f.id][b][c][h] === g) {
                        q[f.id][b][c].pop(h, 1);
                        break
                    }
                } else delete q[f.id][b][c]; else q[f.id][b] = {}
            }

            function b(b, c, l) {
                if (q[b][l]) {
                    var f = c.target || c.srcElement, h, k, m = {}, p = k = 0;
                    r = 0;
                    for (h in q[b][l]) q[b][l].hasOwnProperty(h) && (k = n(f,
                        h, t[b].element)) && g.matchesEvent(l, t[b].element, k, "_root" == h, c) && (r++, q[b][l][h].match = k, m[r] = q[b][l][h]);
                    c.stopPropagation = function () {
                        c.cancelBubble = !0
                    };
                    for (k = 0; k <= r; k++) if (m[k]) for (p = 0; p < m[k].length; p++) {
                        if (!1 === m[k][p].call(m[k].match, c)) {
                            g.cancel(c);
                            return
                        }
                        if (c.cancelBubble) return
                    }
                }
            }

            function c(c, h, l, p) {
                function f(c) {
                    return function (f) {
                        b(n, f, c)
                    }
                }

                c instanceof Array || (c = [c]);
                l || "function" != typeof h || (l = h, h = "_root");
                var n = this.id, m;
                for (m = 0; m < c.length; m++) q[n] && q[n][c[m]] || g.addEvent(this, c[m], f(c[m])),
                    p ? k(this, c[m], h, l) : u(this, c[m], h, l);
                return this
            }

            function g(b, c, l, k) {
                if ("string" == typeof b && "function" == typeof c || "string" == typeof c) g(document).on(b, c, l, k || !1);
                if (!(this instanceof g)) {
                    for (var f in t) if (t[f].element === b) return t[f];
                    x++;
                    t[x] = new g(b, x);
                    t[x]._on = t[x].on;
                    t[x].on = function (b, c, f, g) {
                        var h = "function" == typeof c ? c : f;
                        if ("function" == typeof c ? f : g) b = [b], "string" == typeof c && b.push(c), b.push(function (b) {
                            return function (c) {
                                c.defaultPrevented || window[ensightenOptions.ns].Delegate.load(this);
                                if (this.nodeName &&
                                    "a" != this.nodeName.toLowerCase()) return b.call(this);
                                "undefined" != typeof c.preventDefault ? c.preventDefault() : c.returnValue = !1;
                                b.call(this)
                            }
                        }(h)), this._on.apply(this, b); else return this._on.call(this, b, c, f)
                    };
                    return t[x]
                }
                this.element = b;
                this.id = c
            }

            var p, r = 0, x = 0, q = {}, t = {};
            g.prototype.on = function (b, g, l) {
                return c.call(this, b, g, l)
            };
            g.prototype.off = function (b, g, l) {
                return c.call(this, b, g, l, !0)
            };
            g.cancel = function (b) {
                b.preventDefault();
                b.stopPropagation()
            };
            g.addEvent = function (b, c, g) {
                b.element.addEventListener(c,
                    g, "blur" == c || "focus" == c)
            };
            g.matchesEvent = function () {
                return !0
            };
            g.load = function (b) {
                setTimeout(function (b, c) {
                    return function () {
                        if (b.nodeName && "a" == b.nodeName.toLowerCase()) {
                            if (c && /^javascript\s*\:/.test(c)) return (new Function(unescape(c))).call(window);
                            c && (window.location.href = c)
                        }
                    }
                }(b, b.href || ""), 750)
            };
            window[ensightenOptions.ns].Delegate = g
        }(), function (n) {
            var u = n.addEvent;
            n.addEvent = function (k, b, c) {
                if (k.element.addEventListener) return u(k, b, c);
                "focus" == b && (b = "focusin");
                "blur" == b && (b = "focusout");
                k.element.attachEvent("on" +
                    b, c)
            };
            n.cancel = function (k) {
                k.preventDefault && k.preventDefault();
                k.stopPropagation && k.stopPropagation();
                k.returnValue = !1;
                k.cancelBubble = !0
            }
        }(window[ensightenOptions.ns].Delegate), window[ensightenOptions.ns].on = window[ensightenOptions.ns].Delegate);
        Bootstrapper.dataDefinitionIds = [];
        Bootstrapper.getServerComponent(Bootstrapper.getExtraParams ? Bootstrapper.getExtraParams() : undefined);
    }
})();