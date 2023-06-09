BOOMR_configt = new Date().getTime();
BOOMR.session.ID = "71433b93-38aa-4570-a6f6-f399b74daf02";
BOOMR.addVar({
    "h.key": "9SLYA-PCQKP-CU56T-D2UD9-N4WJG",
    "h.d": "microsoft.com",
    "h.t": 1505986706855,
    "h.cr": "ef959a6fb3ab1b36d09b6296a31048957d9c446e"
}).init({
    "site_domain": "microsoft.com",
    "beacon_url": "//36fb607e.akstat.io/",
    "autorun": true,
    "beacon_interval": 60,
    "BW": {"enabled": false},
    "RT": {"session_exp": 1800},
    "ResourceTiming": {"enabled": true},
    "PageParams": {
        "pageGroups": [{"type": "Custom", "parameter1": "window._pageData"}],
        "abTests": [{"type": "Custom", "parameter1": "_soastaAB"}],
        "customMetrics": [],
        "customTimers": [{
            "name": "JS download",
            "index": 0,
            "type": "ResourceTiming",
            "label": "custom0",
            "start": "requestStart",
            "end": "responseEnd",
            "url": "https://statics-onestore-*-ms-com.akamaized.net/*/onerf/_sc/js/*"
        }, {
            "name": "Wait Time",
            "index": 2,
            "type": "NavigationTiming",
            "label": "custom2",
            "start": "requestStart",
            "end": "responseStart"
        }, {
            "name": "TTOL",
            "index": 4,
            "type": "NavigationTiming",
            "label": "custom4",
            "start": "navigationStart",
            "end": "loadEventStart"
        }, {
            "name": "MWF CSS",
            "index": 8,
            "type": "ResourceTiming",
            "label": "custom8",
            "start": "requestStart",
            "end": "responseEnd",
            "url": "https://assets.onestore.ms/cdnfiles/external/mwf/*.css"
        }, {
            "name": "TTOL - Redirect",
            "index": 3,
            "type": "NavigationTiming",
            "label": "custom3",
            "start": "fetchStart",
            "end": "loadEventStart"
        }, {
            "name": "Vendor JS",
            "index": 1,
            "type": "ResourceTiming",
            "label": "custom1",
            "start": "requestStart",
            "end": "responseEnd",
            "url": "https://www.microsoft.com/webblend/shopping/*/vendor.js"
        }, {
            "name": "Shopping JS",
            "index": 6,
            "type": "ResourceTiming",
            "label": "custom6",
            "start": "requestStart",
            "end": "responseEnd",
            "url": "https://www.microsoft.com/webblend/shopping/*/shopping.js"
        }, {
            "name": "DOM Interactive",
            "index": 7,
            "type": "NavigationTiming",
            "label": "custom7",
            "start": "navigationStart",
            "end": "domInteractive"
        }, {
            "name": "Post-DOM Time",
            "index": 9,
            "type": "NavigationTiming",
            "label": "custom9",
            "start": "domInteractive",
            "end": "loadEventStart"
        }, {
            "name": "Commerce JS",
            "index": 5,
            "type": "ResourceTiming",
            "label": "custom5",
            "start": "requestStart",
            "end": "responseEnd",
            "url": "https://pmservices.cp.microsoft.com/staticresourceservice/scripts/*/prod/commerce.js"
        }],
        "customDimensions": [],
        "urlPatterns": [],
        "params": true
    },
    "user_ip": "14.177.235.219"
});