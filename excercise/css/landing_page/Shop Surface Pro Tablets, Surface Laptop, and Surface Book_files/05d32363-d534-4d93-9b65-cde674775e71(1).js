// Copyright 2006-2017 ClickTale Ltd., US Patent Pending

window.ClickTaleGlobal = window.ClickTaleGlobal || {};
window.ClickTaleSettings = window.ClickTaleSettings || {};

ClickTaleGlobal.init = ClickTaleGlobal.init || {};
ClickTaleGlobal.scripts = ClickTaleGlobal.scripts || {};


ClickTaleGlobal.scripts.filter = ClickTaleGlobal.scripts.filter || (function () {
    var recordingThreshold = Math.random() * 100;

    return {
        isRecordingApproved: function (percentage) {
            return recordingThreshold <= percentage;
        }
    }
})();


// Copyright 2006-2017 ClickTale Ltd., US Patent Pending
// PID: 1009

var ctRules_PrePCC = {
    "rules": "id|9C9DDC02-25E0-4568-8BE6-003E3225DA35|name|VE+Action+%7C+Surface+Pro+%7C+Clicked+on+<tab+name>|type|ClickEvent|title|Click+Event|isActive|action|MultipleAction|children|CTEventAction|eventName|dynamicEventName|parts|TextValue|VE+Action+%7C+Surface+Pro+%7C+Clicked+on|TriggeredElementValue|subType|InnerText|ElementValue|Attribute|ctSelector|querySelector|#exp-optly-stickyBar|className|delimiter|+|DynamicEventNameAction|VE+Action+%7C+Surface+Pro+%7C+Clicked+on|+|eventId|triggers|OrCondition|childConditions|ClickCondition|div[role=\"tablist\"]+a[role=\"tab\"]|alias|query-selector|states|LocationCondition|url|https://www.microsoft.com/en-us/store/d/surface/8NKT9WTTRBJK/|mode|StartsWith|ignoreQueryString|B42AB00C-A86D-48E4-A5A3-01CFD499688E|VE+events+%7C+Surface+Pro+PDP+%7C+Used+carousel|Click+Event|VE+events+%7C+Surface+Pro+PDP+%7C+Used+carousel|StaticEventNameAction|VE+events+%7C+Surface+Pro+PDP+%7C+Used+carousel|.m-product-detail-hero-carousel+[data-sku-id=\"H3CS\"]+button|https://www.microsoft.com/en-us/store/d/surface/8NKT9WTTRBJK/H3CS?icid=Cat_Surface-NavLink1-SurfacePro-Pro-052317-en-us|Equals|CB64641E-F2C2-48CB-A297-03F008CB08DF|VE+event+%7C+Surface+landing+%7C+Clicked+stop/play+hero+carousel|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+stop/play+hero+carousel|VE+event+%7C+Surface+landing+%7C+Clicked+stop/play+hero+carousel|.glyph-play|https://www.microsoft.com/en-us/store/b/surface?icid=CNavDevicesSurface|BC72076B-EFBF-43D4-80CD-0588B6FD34B5|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Surface+plus+learn+more|Click+Event|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Surface+plus+learn+more|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Surface+plus+learn+more|.c-hyperlink.x-hidden-focus|D76E5D1F-3FB3-4302-BC9A-07C463D49334|VE+event+%7C+Surface+landing+%7C+Clicked+any+CTA+in+hero|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+any+CTA+in+hero|VE+event+%7C+Surface+landing+%7C+Clicked+any+CTA+in+hero|[aria-label=\"shop+now+just+for+students\"]|[aria-label=\"shop+now+certified+refurbished+surface\"]|[aria-label=\"surface+pro+students+save+10\\%25\"]|[aria-label=\"surface+laptop+students+save+10\\%25\"]|C1B437E8-B657-40B8-8FDD-0B95AD0A6236|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+Surface+plus+Learn+more|Click+Event|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+Surface+plus+Learn+more|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+Surface+plus+Learn+more|https://www.microsoft.com/en-us/store/d/surface-laptop/90fc23dv6snz?icid=Cat_Surface-ContentPlacement2-Laptop-Office-080117-en-us|DFC30F16-817C-44C8-8390-0E3AC60575A8|VE+event+%7C+Surface+landing+%7C+Clicked+search|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+search|VE+event+%7C+Surface+landing+%7C+Clicked+search|#cli_shellHeaderSearchInput|F8C49A2C-7E9B-4ADE-867C-17B9FD9000C6|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+next+or+previous+image+hero+carousel+(Including+dots)|Click+Event|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+next+or+previous+image+hero+carousel+(Including+dots)|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+next+or+previous+image+hero+carousel+(Including+dots)|.m-product-detail-hero-carousel+.c-carousel+button|https://www.microsoft.com/en-us/store/d/surface/90FC23DV6SNZ?icid=Cat_Surface-NavLink2-SurfacePro-Laptop-052317-en-us|4EE77696-16A6-4D89-BE00-1991CB993CC3|VE+event+%7C+Surface+landing+%7C+Clicked+'Surface+laptop'+in+hero+(students)|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+'Surface+laptop'+in+hero+(students)|VE+event+%7C+Surface+landing+%7C+Clicked+'Surface+laptop'+in+hero+(students)|[aria-label=\"surface+laptop+students+save+10\\%25\"]|9147B97A-58D5-4ABA-9E11-1DBC5867F63E|VE+Action+%7C+Office+Cat+%7C+'Shop+Now'+Save+up+to+$30+hero|Click+Event|VE+Action+%7C+Office+Cat+%7C+'Shop+Now'+Save+up+to+$30+hero|VE+Action+%7C+Office+Cat+%7C+'Shop+Now'+Save+up+to+$30+hero|.c-glyph.x-hidden-focus|https://www.microsoft.com/en-ca/store/b/office|414E5984-3B03-4E33-B221-200F51F0289F|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+check+now+student+eligibility|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+check+now+student+eligibility|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+check+now+student+eligibility|.x-hidden-focus[aria-label]|https://www.microsoft.com/en-us/store/d/surface/8VV4N8VBQG7C/C7Q1?icid=Cat_Surface-NavLink5-SurfacePro-Pro4-052317-en-us|B777BF63-A5B4-4200-B065-21F4A37AF54E|VE+event+%7C+Surface+landing+%7C+Clicked+on+any+offer+tile+below+the+hero+(including+CTA)|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+on+any+offer+tile+below+the+hero+(including+CTA)|VE+event+%7C+Surface+landing+%7C+Clicked+on+any+offer+tile+below+the+hero+(including+CTA)|[alt=\"Surface+\"],.m-hyperlink-group-content-placement+[data-grid=\"col-6+pad-6x\"]:nth-of-type(1)+[data-grid=\"col-6\"]:nth-of-type(2)+.c-heading,.m-hyperlink-group-content-placement+[data-grid=\"col-6+pad-6x\"]:nth-of-type(1)+.c-paragraph,.c-glyph[aria-label=\"learn+more+surface+plus\"],.m-hyperlink-group-content-placement+[data-grid=\"col-6\"]:nth-of-type(1)+.lazyloaded,.m-hyperlink-group-content-placement+[data-grid=\"col-6+pad-6x\"]:nth-of-type(2)+[data-grid=\"col-6\"]:nth-of-type(1)+.c-heading,.m-hyperlink-group-content-placement+[data-grid=\"col-6\"]:nth-of-type(1)+.c-paragraph,.c-glyph[aria-label=\"shop+now+surface+laptop\"],[alt=\"Surface+Pro+4+with+grey+type+cover+and+surface+pen\"],.m-hyperlink-group-content-placement+[data-grid=\"col-6+pad-6x\"]:nth-of-type(2)+[data-grid=\"col-6\"]:nth-of-type(2)+.c-heading,.m-hyperlink-group-content-placement+[data-grid=\"col-6+pad-6x\"]:nth-of-type(2)+[data-grid=\"col-6\"]:nth-of-type(2)+.c-paragraph,.c-glyph[aria-label=\"shop+now+surface+deals\"]|4AE856E0-6BCB-45E9-9305-223591D8F59D|VE+Action+%7C+Hompage+%7C+Visitor+interacted+with+left+nav|Click+Event|VE+Action+%7C+Hompage+%7C+Visitor+interacted+with+left+nav|VE+Action+%7C+Hompage+%7C+Visitor+interacted+with+left+nav|.x-hidden-focus|https://www.microsoft.com/en-us/store/b/home|D5191654-871D-4B47-9917-232645065E1D|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+configure+now|Click+Event|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+configure+now|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+configure+now|A8E505D1-156D-4FA2-BA75-2654107B574D|VE+event+%7C+Surface+landing+%7C+Clicked+in+Shop+now+nav+box|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+in+Shop+now+nav+box|VE+event+%7C+Surface+landing+%7C+Clicked+in+Shop+now+nav+box|.f-background-accent+.c-heading,.f-background-accent+li:nth-of-type(2)+.c-hyperlink,.f-background-accent+li:nth-of-type(1)+.c-hyperlink,.f-background-accent+li:nth-of-type(4)+.c-hyperlink,.f-background-accent+li:nth-of-type(5)+.c-hyperlink,.f-background-accent+li:nth-of-type(6)+.c-hyperlink,.f-background-accent+li:nth-of-type(3)+.c-hyperlink,.f-background-accent+li:nth-of-type(7)+.c-hyperlink|F5745D02-3C1B-4FC7-9A00-27A673824EF0|VE+Action+%7C+All+Pages+%7C+Visitor+interacted+with+search|Click+Event|VE+Action+%7C+All+Pages+%7C+Visitor+interacted+with+search|VE+Action+%7C+All+Pages+%7C+Visitor+interacted+with+search|AllPages|BDC392A4-44B1-4F5C-B44D-2BE7FFC3B72F|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+configure+now|Click+Event|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+configure+now|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+configure+now|266428A0-F23D-46D6-BFED-2C44EA7E59BF|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+next+or+previous+image+hero+carousel|Click+Event|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+next+or+previous+image+hero+carousel|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+next+or+previous+image+hero+carousel|.m-product-detail-hero-carousel+.c-carousel+.c-flipper|FA0BB38C-7F02-4571-92A7-4A6E8E85BE93|VE+event+%7C+Surface+landing+%7C+Clicked+'Shop+now'+refurbished+in+hero|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+'Shop+now'+refurbished+in+hero|VE+event+%7C+Surface+landing+%7C+Clicked+'Shop+now'+refurbished+in+hero|[aria-label=\"shop+now+certified+refurbished+surface\"]|1D518A00-BCF6-4F2C-B5D4-50BF3791D904|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+find+in+store|Click+Event|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+find+in+store|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+find+in+store|.x-m-t-0x|50789881-1F6D-490D-B990-54FD097B1DCB|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+an+option+in+Choose+your+product|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+an+option+in+Choose+your+product|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+an+option+in+Choose+your+product|[data-rt-price=\"799\"]|[data-rt-price=\"1199\"]|[data-rt-price=\"1599\"]|[data-rt-price=\"999\"]|[data-rt-price=\"1399\"]|[aria-pressed=\"true\"]|[data-rt-price=\"1799\"]|8F956732-8EE5-49FB-94BA-55E819776452|VE+event+%7C+Surface+landing+%7C+Clicked+'Shop+now'+in+hero+(students)|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+'Shop+now'+in+hero+(students)|VE+event+%7C+Surface+landing+%7C+Clicked+'Shop+now'+in+hero+(students)|[aria-label=\"shop+now+just+for+students\"]|DAFBF288-51E5-472B-ABA6-56B7E75AA04A|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+Strorgae|Click+Event|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+Strorgae|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+Strorgae|[data-key=\"Storage\"]+.c-select-button|https://www.microsoft.com/en-us/store/config/surface-laptop/90FC23DV6SNZ?cid=surfacelaptopinterstitial630|4954B42F-09B0-452D-92C5-5B6FD1B7589E|VE+event+%7C+Surface+landing+%7C+Clicked+any+shop+now+on+the+page|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+any+shop+now+on+the+page|VE+event+%7C+Surface+landing+%7C+Clicked+any+shop+now+on+the+page|[aria-label=\"surface+pro+students+save+10\\%25\"]|[aria-label=\"surface+laptop+students+save+10\\%25\"]|[aria-label=\"shop+now+just+for+students\"]|[aria-label=\"shop+now+certified+refurbished+surface\"]|.c-glyph[aria-label=\"shop+now+surface+laptop\"]|.m-compare-chart+>+section:nth-of-type(1)+.c-button|.m-compare-chart+.f-column:nth-of-type(4)+.c-button|E0C51307-023E-43CA-B117-5E19AA479037|VE+event+%7C+Surface+landing+%7C+Clicked+any+shop+now+in+the+Compare+chart+(including+img)|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+any+shop+now+in+the+Compare+chart+(including+img)|VE+event+%7C+Surface+landing+%7C+Clicked+any+shop+now+in+the+Compare+chart+(including+img)|.m-compare-chart+.f-column:nth-of-type(1)+.c-button|.m-compare-chart+.f-column:nth-of-type(2)+.c-button|.m-compare-chart+.f-column:nth-of-type(3)+.c-button|.m-compare-chart+.f-column:nth-of-type(4)+.c-button|.lazyloaded.x-hidden-focus|.x-hidden-focus[alt=\"Surface+Laptop\"]|.lazyloaded[alt=\"Surface+Book\"]|.lazyloaded[alt=\"Surface+Studio+front+facing+with+keyboard+and+mouse\"]|11FF2D54-C155-4252-B6F7-616ED9DF43BD|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+color|Click+Event|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+color|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+color|[data-rh=\"Color\"]+.c-select-button|6C823AE7-6A00-41AC-8524-67A7A7F06313|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+Configure+now|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+Configure+now|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+Configure+now|.cli_pdp-device-config-button|25BBC4C1-36A3-43C8-B5D9-681E91C5E16E|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Check+now+-+student+eligibility|Click+Event|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Check+now+-+student+eligibility|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Check+now+-+student+eligibility|02F03D86-0783-416C-ADEC-68C3C34B7589|VE+Action+%7C+Surface+Book+%7C+Clicked+on+<tab+name>+<experiment#>|Click+Event|VE+Action+%7C+Surface+Book+%7C+Clicked+on|+|VE+Action+%7C+Surface+Book+%7C+Clicked+on|+|div[role=\"tablist\"]+a[role=\"tab\"]|https://www.microsoft.com/en-us/store/d/surface/8TXJ08Q9LXDT/|24098C0F-D190-47AF-AAEF-6946477E6913|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+next+or+previous+in+hero+carousel+(including+dots)|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+next+or+previous+in+hero+carousel+(including+dots)|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+next+or+previous+in+hero+carousel+(including+dots)|.m-product-detail-hero-carousel+[data-sku-id=\"C7Q1\"]+button|54B1F7D1-C48E-4A02-BFCE-6F0D2E7F2E65|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+reviews|Click+Event|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+reviews|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+reviews|[href=\"\\#ratings-reviews\"].x-hidden-focus|158CD371-803C-467E-8885-7512EB5C76BA|VE+event+%7C+Configure+surface+laptop++%7C+Clicked+Add+to+cart|Click+Event|VE+event+%7C+Configure+surface+laptop++%7C+Clicked+Add+to+cart|VE+event+%7C+Configure+surface+laptop++%7C+Clicked+Add+to+cart|.c-button.x-hidden-focus|1F5F9CC1-759C-4A95-8FDF-773A4A2F64C6|VE+Action+%7C+Surface+Pro+%7C+Clicked+on+Add+to+cart+-+sticky+<experiment#>|Click+Event|VE+Action+%7C+Surface+Pro+%7C+Clicked+on+Add+to+cart+-+sticky|QueryStringParamName|optimizely_x|+|VE+Action+%7C+Surface+Pro+%7C+Clicked+on+Add+to+cart+-+sticky|+|div.exp-addtocart+button.c-button.cli_pdp-buy-button.pdp-action-buttons.x-hidden-focus|0F038654-BDA0-49E4-A1ED-7901C09AA3D1|VE+Action+%7C+Office+cat+%7C+visitor+clicked+'shop+now'+on+compare+chart|Click+Event|VE+Action+%7C+Office+cat+%7C+visitor+clicked+'shop+now'+on+compare+chart|VE+Action+%7C+Office+cat+%7C+visitor+clicked+'shop+now'+on+compare+chart|37C25BB7-936F-43F6-BA96-848BA40E3AB4|VE+Action+%7C+Visitor+interacted+with+store+nav|Click+Event|VE+Action+%7C+Visitor+interacted+with+store+nav|VE+Action+%7C+Visitor+interacted+with+store+nav|#uhf-c-nav|47FCFE60-FD02-49A6-BE34-85F0EADE1E59|VE+Action+%7C+Surface+Book+%7C+Clicked+on+Add+to+cart+-+sticky+<experiment#>|Click+Event|VE+Action+%7C+Surface+Book+%7C+Clicked+on+Add+to+cart+-+sticky|+|VE+Action+%7C+Surface+Book+%7C+Clicked+on+Add+to+cart+-+sticky|+|div.exp-addtocart+button.pdp-action-buttons.x-hidden-focus|68F122F6-F7A2-42C5-91D4-8FAE631FEBE9|VE+event+%7C+Surface+landing+%7C+Clicked+next/previous+carousel|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+next/previous+carousel|VE+event+%7C+Surface+landing+%7C+Clicked+next/previous+carousel|.f-next.x-hidden-focus|.f-previous.x-hidden-focus|D2E0081E-C35C-417D-ABBC-A0A9FFCD5C3A|VE+event+%7C+Surface+landing+%7C+Clicked+students+save+banner|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+students+save+banner|VE+event+%7C+Surface+landing+%7C+Clicked+students+save+banner|.color-brand-blue+.x-hidden-focus|96A0C2E4-7B30-4E09-B4B6-A1D7A5280227|VE+Action+%7C+All+pages+%7C+visitor+interacted+L0+nav|Click+Event|VE+Action+%7C+All+pages+%7C+visitor+interacted+L0+nav|VE+Action+%7C+All+pages+%7C+visitor+interacted+L0+nav|#uhf-g-nav|8C4F0E1C-CF34-4F04-B501-A917440E31B7|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+Surface+plus+Learn+more|Click+Event|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+Surface+plus+Learn+more|VE+event+%7C+Surface+Laptop+PDP+%7C+Clicked+Surface+plus+Learn+more|54BA3CAD-B71A-4768-A370-A99F0B865FA4|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+any+tool+tip|Click+Event|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+any+tool+tip|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+any+tool+tip|.m-configdata+.c-glyph|1D6A1EA7-0C3E-4233-980A-AA0570CF631B|VE+Action+%7C+Clicked+on+Search|Click+Event|VE+Action+%7C+Clicked+on+Search|VE+Action+%7C+Clicked+on+Search|E631A2D7-4E06-456E-80DC-AFF7E46DDD8A|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+Add+to+cart|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+Add+to+cart|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+Add+to+cart|#PhysicalGoodIdentityBuyButton|BF130FB0-83DC-4B1C-82D1-B2D95B9B4D22|VE+event+%7C+Surface+landing+%7C+Clicked+'Surface+pro'+in+hero+(students)|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+'Surface+pro'+in+hero+(students)|VE+event+%7C+Surface+landing+%7C+Clicked+'Surface+pro'+in+hero+(students)|[aria-label=\"surface+pro+students+save+10\\%25\"]|A62B6822-01A7-4176-A7EB-B510275355A9|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+processor|Click+Event|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+processor|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+processor|[data-key=\"Processor\"]+.c-select-button|626624FF-8DD6-4D2A-B1B6-B63EB039774D|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+reviews|Click+Event|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+reviews|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+reviews|762271B3-861D-4AFA-885E-BB13D13CF505|VE+events+%7C+Surface+Pro+PDP+%7C+Selected+an+option+from+dropdown|Click+Event|VE+events+%7C+Surface+Pro+PDP+%7C+Selected+an+option+from+dropdown|VE+events+%7C+Surface+Pro+PDP+%7C+Selected+an+option+from+dropdown|.f-scroll[tabindex]+span|F5E4D99B-3329-4F32-A480-BB24C91E1C20|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Add+to+cart|Click+Event|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Add+to+cart|VE+events+%7C+Surface+Pro+PDP+%7C+Clicked+Add+to+cart|EBFE27A4-80A4-4B34-9998-BDE2F2F72A67|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+shop+now+in+promotion|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+shop+now+in+promotion|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+shop+now+in+promotion|A651497B-11B4-494E-8908-BF1F48587135|VE+event+%7C+Surface+landing+%7C+Clicked+any+CTA+in+the+offers+below+the+hero|Click+Event|VE+event+%7C+Surface+landing+%7C+Clicked+any+CTA+in+the+offers+below+the+hero|VE+event+%7C+Surface+landing+%7C+Clicked+any+CTA+in+the+offers+below+the+hero|.m-hyperlink-group-content-placement+.c-glyph|7CBEC854-F27F-4A6E-BBD8-C9211460B930|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+dots+to+switch+images|Click+Event|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+dots+to+switch+images|VE+event+%7C+Surface+laptop+PDP+%7C+Clicked+dots+to+switch+images|.m-product-detail-hero-carousel+.c-sequence-indicator+button|2E7649E6-52EF-4779-B457-E05FB7DCD545|VE+events+%7C+Surface+Pro+PDP+%7C+Opened+product+dropdown|Click+Event|VE+events+%7C+Surface+Pro+PDP+%7C+Opened+product+dropdown|VE+events+%7C+Surface+Pro+PDP+%7C+Opened+product+dropdown|.exp-c-select-button|3F910754-E202-4571-83E8-E0F81A97B5AD|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+find+in+store|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+find+in+store|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+find+in+store|94AFB365-A69F-4571-A7D2-E228393DA9E0|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+memory|Click+Event|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+memory|VE+events+%7C+Configure+surface+laptop++%7C+Clicked+memory|[data-key=\"Memory\"]+.c-select-button|CB9C66F2-DFCE-4826-B197-E83EE3D86BF1|VE+Action+%7C+Surface+Pro+%7C+Clicked+on+Add+to+Cart+in+buy+box|Click+Event|VE+Action+%7C+Surface+Pro+%7C+Clicked+on+Add+to+Cart+in+buy+box|+|VE+Action+%7C+Surface+Pro+%7C+Clicked+on+Add+to+Cart+in+buy+box|+|https://www.microsoft.com/en-us/store/d/surface/8NKT9WTTRBJK|35159F17-0ADE-4E44-BBB6-EF368EA868E0|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+an+out+of+stock+option|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+an+out+of+stock+option|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+an+out+of+stock+option|3CD47A89-0B88-418F-B345-F74D21A961CC|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+promotion+banner|Click+Event|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+promotion+banner|VE+event+%7C+Surface+Pro+4+PDP+%7C+Clicked+promotion+banner|.color-brand-blue|B361A5D3-3D46-4A93-AB10-F7BB217EC847|VE+Action+%7C+All+Pages+%7C+Visitor+interacted+with+L1+Nav|Click+Event|VE+Action+%7C+All+Pages+%7C+Visitor+interacted+with+L1+Nav|VE+Action+%7C+All+Pages+%7C+Visitor+interacted+with+L1+Nav|FC3BA1FF-C5CE-4A3E-A9A7-FA16015CCA36|VE+Action+%7C+Surface+Book+%7C+Clicked+on+Add+to+Cart+in+buy+box|Click+Event|VE+Action+%7C+Surface+Book+%7C+Clicked+on+Add+to+Cart+in+buy+box|VE+Action+%7C+Surface+Book+%7C+Clicked+on+Add+to+Cart+in+buy+box|div.context-purchase-information+button.c-button.cli_pdp-buy-button.pdp-action-buttons.x-hidden-focus^3NI|3NJ|3NK|3NL|3NM|3NN|3NO|3NP|3NQ|3NR|3NS|3NT|3NU|3NV|3NW|3NX|3NV|3NY|3O2|3O4|3O5|3O6|3O7|3O9|3OA|3OB|3OC|3OE|3OF|3OG|3OH|3OK|3OL|3OM|3ON|3OO|3OR|3OS|3OT|3OW|3OX|3OY|3OZ|3P0|3P1|3P2|3P3|3P4|3P6|3P7|3P8|3PD|3PE|3PF|3PG|3PH|3PJ|3PK|3PL^^@$0|1|2|3|4|5|6|7|8|-1|9|$4|A|B|@$4|C|D|-4|E|$F|@$4|G|2|H]|$4|I|J|K]|$4|L|J|M|N|$O|P]|2|Q]]|R|S]]|$4|T|D|-4|E|$F|@$4|G|2|U]|$4|I|J|K]|$4|L|J|M|N|$O|P]|2|Q]]|R|V]|W|BU]]]|X|$4|Y|Z|@$4|10|N|$O|11]|12|13]]]|14|$4|Y|Z|@$4|15|16|17|18|19|1A|-1]]]]|$0|1B|2|1C|4|5|6|1D|8|-1|9|$4|A|B|@$4|C|D|1E]|$4|1F|D|1G|W|BV]]]|X|$4|Y|Z|@$4|10|N|$O|1H]|12|13]]]|14|$4|Y|Z|@$4|15|16|1I|18|1J|1A|-1]]]]|$0|1K|2|1L|4|5|6|1M|8|-1|9|$4|A|B|@$4|C|D|1N]|$4|1F|D|1O|W|BW]]]|X|$4|Y|Z|@$4|10|N|$O|1P]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|1R|2|1S|4|5|6|1T|8|-1|9|$4|A|B|@$4|C|D|1U]|$4|1F|D|1V|W|BX]]]|X|$4|Y|Z|@$4|10|N|$O|1W]|12|13]]]|14|$4|Y|Z|@$4|15|16|1I|18|1J|1A|-1]]]]|$0|1X|2|1Y|4|5|6|1Z|8|-1|9|$4|A|B|@$4|C|D|20]|$4|1F|D|21|W|BY]]]|X|$4|Y|Z|@$4|10|N|$O|22]|12|13]|$4|10|N|$O|23]|12|13]|$4|10|N|$O|24]|12|13]|$4|10|N|$O|25]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|26|2|27|4|5|6|28|8|-1|9|$4|A|B|@$4|C|D|29]|$4|1F|D|2A|W|BZ]]]|X|$4|Y|Z|@$4|10|N|$O|1W]|12|13]]]|14|$4|Y|Z|@$4|15|16|2B|18|1J|1A|-1]]]]|$0|2C|2|2D|4|5|6|2E|8|-1|9|$4|A|B|@$4|C|D|2F]|$4|1F|D|2G|W|C0]]]|X|$4|Y|Z|@$4|10|N|$O|2H]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|2I|2|2J|4|5|6|2K|8|-1|9|$4|A|B|@$4|C|D|2L]|$4|1F|D|2M|W|C1]]]|X|$4|Y|Z|@$4|10|N|$O|2N]|12|13]]]|14|$4|Y|Z|@$4|15|16|2O|18|1J|1A|-1]]]]|$0|2P|2|2Q|4|5|6|2R|8|-1|9|$4|A|B|@$4|C|D|2S]|$4|1F|D|2T|W|C2]]]|X|$4|Y|Z|@$4|10|N|$O|2U]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|2V|2|2W|4|5|6|2X|8|-1|9|$4|A|B|@$4|C|D|2Y]|$4|1F|D|2Z|W|C3]]]|X|$4|Y|Z|@$4|10|N|$O|30]|12|13]]]|14|$4|Y|Z|@$4|15|16|31|18|19|1A|-1]]]]|$0|32|2|33|4|5|6|34|8|-1|9|$4|A|B|@$4|C|D|35]|$4|1F|D|36|W|C4]]]|X|$4|Y|Z|@$4|10|N|$O|37]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|39|2|3A|4|5|6|3B|8|-1|9|$4|A|B|@$4|C|D|3C]|$4|1F|D|3D|W|C5]]]|X|$4|Y|Z|@$4|10|N|$O|3E]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|3F|2|3G|4|5|6|3H|8|-1|9|$4|A|B|@$4|C|D|3I]|$4|1F|D|3J|W|C6]]]|X|$4|Y|Z|@$4|10|N|$O|3K]|12|13]]]|14|$4|15|16|3L|18|1J|1A|-1]]|$0|3M|2|3N|4|5|6|3O|8|-1|9|$4|A|B|@$4|C|D|3P]|$4|1F|D|3Q|W|C7]]]|X|$4|Y|Z|@$4|10|N|$O|3K]|12|13]]]|14|$4|Y|Z|@$4|15|16|2B|18|1J|1A|-1]]]]|$0|3R|2|3S|4|5|6|3T|8|-1|9|$4|A|B|@$4|C|D|3U]|$4|1F|D|3V|W|C8]]]|X|$4|Y|Z|@$4|10|N|$O|3W]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|3X|2|3Y|4|5|6|3Z|8|-1|9|$4|A|B|@$4|C|D|40]|$4|1F|D|41|W|C9]]]|X|$4|Y|Z|@$4|10|N|$O|2H]|12|13]]]|14|$4|15|16|3L|18|42|1A|-1]]|$0|43|2|44|4|5|6|45|8|-1|9|$4|A|B|@$4|C|D|46]|$4|1F|D|47|W|CA]]]|X|$4|Y|Z|@$4|10|N|$O|3K]|12|13]]]|14|$4|Y|Z|@$4|15|16|2O|18|1J|1A|-1]]]]|$0|48|2|49|4|5|6|4A|8|-1|9|$4|A|B|@$4|C|D|4B]|$4|1F|D|4C|W|CB]]]|X|$4|Y|Z|@$4|10|N|$O|4D]|12|13]]]|14|$4|Y|Z|@$4|15|16|2B|18|1J|1A|-1]]]]|$0|4E|2|4F|4|5|6|4G|8|-1|9|$4|A|B|@$4|C|D|4H]|$4|1F|D|4I|W|CC]]]|X|$4|Y|Z|@$4|10|N|$O|4J]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|4K|2|4L|4|5|6|4M|8|-1|9|$4|A|B|@$4|C|D|4N]|$4|1F|D|4O|W|CD]]]|X|$4|Y|Z|@$4|10|N|$O|4P]|12|13]]]|14|$4|Y|Z|@$4|15|16|1I|18|1J|1A|-1]]]]|$0|4Q|2|4R|4|5|6|4S|8|-1|9|$4|A|B|@$4|C|D|4T]|$4|1F|D|4U|W|CE]]]|X|$4|Y|Z|@$4|10|N|$O|4V]|12|13]|$4|10|N|$O|4W]|12|13]|$4|10|N|$O|4X]|12|13]|$4|10|N|$O|4Y]|12|13]|$4|10|N|$O|4Z]|12|13]|$4|10|N|$O|50]|12|13]|$4|10|N|$O|51]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|52|2|53|4|5|6|54|8|-1|9|$4|A|B|@$4|C|D|55]|$4|1F|D|56|W|CF]]]|X|$4|Y|Z|@$4|10|N|$O|57]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|58|2|59|4|5|6|5A|8|-1|9|$4|A|B|@$4|C|D|5B]|$4|1F|D|5C|W|CG]]]|X|$4|Y|Z|@$4|10|N|$O|5D]|12|13]]]|14|$4|Y|Z|@$4|15|16|5E|18|1J|1A|-1]]]]|$0|5F|2|5G|4|5|6|5H|8|-1|9|$4|A|B|@$4|C|D|5I]|$4|1F|D|5J|W|CH]]]|X|$4|Y|Z|@$4|10|N|$O|5K]|12|13]|$4|10|N|$O|5L]|12|13]|$4|10|N|$O|5M]|12|13]|$4|10|N|$O|5N]|12|13]|$4|10|N|$O|3K]|12|13]|$4|10|N|$O|5O]|12|13]|$4|10|N|$O|5P]|12|13]|$4|10|N|$O|3K]|12|13]|$4|10|N|$O|5Q]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|5R|2|5S|4|5|6|5T|8|-1|9|$4|A|B|@$4|C|D|5U]|$4|1F|D|5V|W|CI]]]|X|$4|Y|Z|@$4|10|N|$O|5W]|12|13]|$4|10|N|$O|5X]|12|13]|$4|10|N|$O|5Y]|12|13]|$4|10|N|$O|5Z]|12|13]|$4|10|N|$O|60]|12|13]|$4|10|N|$O|61]|12|13]|$4|10|N|$O|62]|12|13]|$4|10|N|$O|63]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|64|2|65|4|5|6|66|8|-1|9|$4|A|B|@$4|C|D|67]|$4|1F|D|68|W|CJ]]]|X|$4|Y|Z|@$4|10|N|$O|69]|12|13]]]|14|$4|Y|Z|@$4|15|16|5E|18|1J|1A|-1]]]]|$0|6A|2|6B|4|5|6|6C|8|-1|9|$4|A|B|@$4|C|D|6D]|$4|1F|D|6E|W|CK]]]|X|$4|Y|Z|@$4|10|N|$O|6F]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|6G|2|6H|4|5|6|6I|8|-1|9|$4|A|B|@$4|C|D|6J]|$4|1F|D|6K|W|CL]]]|X|$4|Y|Z|@$4|10|N|$O|37]|12|13]]]|14|$4|Y|Z|@$4|15|16|1I|18|1J|1A|-1]]]]|$0|6L|2|6M|4|5|6|6N|8|-1|9|$4|A|B|@$4|C|D|-4|E|$F|@$4|G|2|6O]|$4|I|J|K]|$4|L|J|M|N|$O|P]|2|Q]]|R|6P]]|$4|T|D|-4|E|$F|@$4|G|2|6Q]|$4|I|J|K]|$4|L|J|M|N|$O|P]|2|Q]]|R|6R]|W|CM]]]|X|$4|Y|Z|@$4|10|N|$O|6S]|12|13]]]|14|$4|Y|Z|@$4|15|16|6T|18|19|1A|-1]]]]|$0|6U|2|6V|4|5|6|6W|8|-1|9|$4|A|B|@$4|C|D|6X]|$4|1F|D|6Y|W|CN]]]|X|$4|Y|Z|@$4|10|N|$O|6Z]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|70|2|71|4|5|6|72|8|-1|9|$4|A|B|@$4|C|D|73]|$4|1F|D|74|W|CO]]]|X|$4|Y|Z|@$4|10|N|$O|75]|12|13]]]|14|$4|Y|Z|@$4|15|16|2O|18|1J|1A|-1]]]]|$0|76|2|77|4|5|6|78|8|-1|9|$4|A|B|@$4|C|D|79]|$4|1F|D|7A|W|CP]]]|X|$4|Y|Z|@$4|10|N|$O|7B]|12|13]]]|14|$4|Y|Z|@$4|15|16|5E|18|1J|1A|-1]]]]|$0|7C|2|7D|4|5|6|7E|8|-1|9|$4|A|B|@$4|C|D|-4|E|$F|@$4|G|2|7F]|$4|7G|2|7H]]|R|7I]]|$4|T|D|-4|E|$F|@$4|G|2|7J]|$4|7G|2|7H]]|R|7K]|W|CQ]]]|X|$4|Y|Z|@$4|10|N|$O|7L]|12|13]]]|14|$4|Y|Z|@$4|15|16|17|18|19|1A|-1]]]]|$0|7M|2|7N|4|5|6|7O|8|-1|9|$4|A|B|@$4|C|D|7P]|$4|1F|D|7Q|W|CR]]]|X|$4|Y|Z|@$4|10|N|$O|3K]|12|13]]]|14|$4|Y|Z|@$4|15|16|31|18|19|1A|-1]]]]|$0|7R|2|7S|4|5|6|7T|8|-1|9|$4|A|B|@$4|C|D|7U]|$4|1F|D|7V|W|CS]]]|X|$4|Y|Z|@$4|10|N|$O|7W]|12|13]]]|14|$4|15|16|3L|18|42|1A|-1]]|$0|7X|2|7Y|4|5|6|7Z|8|-1|9|$4|A|B|@$4|C|D|-4|E|$F|@$4|G|2|80]|$4|7G|2|7H]]|R|81]]|$4|T|D|-4|E|$F|@$4|G|2|82]|$4|7G|2|7H]]|R|83]|W|CT]]]|X|$4|Y|Z|@$4|10|N|$O|84]|12|13]]]|14|$4|Y|Z|@$4|15|16|6T|18|19|1A|-1]]]]|$0|85|2|86|4|5|6|87|8|-1|9|$4|A|B|@$4|C|D|88]|$4|1F|D|89|W|CU]]]|X|$4|Y|Z|@$4|10|N|$O|8A]|12|13]|$4|10|N|$O|8B]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|8C|2|8D|4|5|6|8E|8|-1|9|$4|A|B|@$4|C|D|8F]|$4|1F|D|8G|W|CV]]]|X|$4|Y|Z|@$4|10|N|$O|8H]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|8I|2|8J|4|5|6|8K|8|-1|9|$4|A|B|@$4|C|D|8L]|$4|1F|D|8M|W|CW]]]|X|$4|Y|Z|@$4|10|N|$O|8N]|12|13]]]|14|$4|15|16|3L|18|1J|1A|-1]]|$0|8O|2|8P|4|5|6|8Q|8|-1|9|$4|A|B|@$4|C|D|8R]|$4|1F|D|8S|W|CX]]]|X|$4|Y|Z|@$4|10|N|$O|1W]|12|13]]]|14|$4|Y|Z|@$4|15|16|2O|18|1J|1A|-1]]]]|$0|8T|2|8U|4|5|6|8V|8|-1|9|$4|A|B|@$4|C|D|8W]|$4|1F|D|8X|W|CY]]]|X|$4|Y|Z|@$4|10|N|$O|8Y]|12|13]]]|14|$4|Y|Z|@$4|15|16|5E|18|1J|1A|-1]]]]|$0|8Z|2|90|4|5|6|91|8|-1|9|$4|A|B|@$4|C|D|92]|$4|1F|D|93|W|CZ]]]|X|$4|Y|Z|@$4|10|N|$O|2H]|12|13]]]|14|$4|15|16|3L|18|42|1A|-1]]|$0|94|2|95|4|5|6|96|8|-1|9|$4|A|B|@$4|C|D|97]|$4|1F|D|98|W|D0]]]|X|$4|Y|Z|@$4|10|N|$O|99]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|9A|2|9B|4|5|6|9C|8|-1|9|$4|A|B|@$4|C|D|9D]|$4|1F|D|9E|W|D1]]]|X|$4|Y|Z|@$4|10|N|$O|9F]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|9G|2|9H|4|5|6|9I|8|-1|9|$4|A|B|@$4|C|D|9J]|$4|1F|D|9K|W|D2]]]|X|$4|Y|Z|@$4|10|N|$O|9L]|12|13]]]|14|$4|Y|Z|@$4|15|16|5E|18|1J|1A|-1]]]]|$0|9M|2|9N|4|5|6|9O|8|-1|9|$4|A|B|@$4|C|D|9P]|$4|1F|D|9Q|W|D3]]]|X|$4|Y|Z|@$4|10|N|$O|75]|12|13]]]|14|$4|Y|Z|@$4|15|16|2B|18|1J|1A|-1]]]]|$0|9R|2|9S|4|5|6|9T|8|-1|9|$4|A|B|@$4|C|D|9U]|$4|1F|D|9V|W|D4]]]|X|$4|Y|Z|@$4|10|N|$O|9W]|12|13]]]|14|$4|Y|Z|@$4|15|16|1I|18|1J|1A|-1]]]]|$0|9X|2|9Y|4|5|6|9Z|8|-1|9|$4|A|B|@$4|C|D|A0]|$4|1F|D|A1|W|D5]]]|X|$4|Y|Z|@$4|10|N|$O|99]|12|13]]]|14|$4|Y|Z|@$4|15|16|1I|18|1J|1A|-1]]]]|$0|A2|2|A3|4|5|6|A4|8|-1|9|$4|A|B|@$4|C|D|A5]|$4|1F|D|A6|W|D6]]]|X|$4|Y|Z|@$4|10|N|$O|3K]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|A7|2|A8|4|5|6|A9|8|-1|9|$4|A|B|@$4|C|D|AA]|$4|1F|D|AB|W|D7]]]|X|$4|Y|Z|@$4|10|N|$O|AC]|12|13]]]|14|$4|Y|Z|@$4|15|16|1Q|18|1J|1A|-1]]]]|$0|AD|2|AE|4|5|6|AF|8|-1|9|$4|A|B|@$4|C|D|AG]|$4|1F|D|AH|W|D8]]]|X|$4|Y|Z|@$4|10|N|$O|AI]|12|13]]]|14|$4|Y|Z|@$4|15|16|2B|18|1J|1A|-1]]]]|$0|AJ|2|AK|4|5|6|AL|8|-1|9|$4|A|B|@$4|C|D|AM]|$4|1F|D|AN|W|D9]]]|X|$4|Y|Z|@$4|10|N|$O|AO]|12|13]]]|14|$4|Y|Z|@$4|15|16|1I|18|1J|1A|-1]]]]|$0|AP|2|AQ|4|5|6|AR|8|-1|9|$4|A|B|@$4|C|D|AS]|$4|1F|D|AT|W|DA]]]|X|$4|Y|Z|@$4|10|N|$O|4P]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|AU|2|AV|4|5|6|AW|8|-1|9|$4|A|B|@$4|C|D|AX]|$4|1F|D|AY|W|DB]]]|X|$4|Y|Z|@$4|10|N|$O|AZ]|12|13]]]|14|$4|Y|Z|@$4|15|16|5E|18|1J|1A|-1]]]]|$0|B0|2|B1|4|5|6|B2|8|-1|9|$4|A|B|@$4|C|D|-4|E|$F|@$4|G|2|B3]|$4|7G|2|7H]]|R|B4]]|$4|T|D|-4|E|$F|@$4|G|2|B5]|$4|7G|2|7H]]|R|B6]|W|DC]]]|X|$4|Y|Z|@$4|10|N|$O|99]|12|13]]]|14|$4|Y|Z|@$4|15|16|B7|18|19|1A|-1]]]]|$0|B8|2|B9|4|5|6|BA|8|-1|9|$4|A|B|@$4|C|D|BB]|$4|1F|D|BC|W|DD]]]|X|$4|Y|Z|@$4|10|N|$O|50]|12|13]|$4|10|N|$O|4Z]|12|13]|$4|10|N|$O|51]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|BD|2|BE|4|5|6|BF|8|-1|9|$4|A|B|@$4|C|D|BG]|$4|1F|D|BH|W|DE]]]|X|$4|Y|Z|@$4|10|N|$O|BI]|12|13]]]|14|$4|Y|Z|@$4|15|16|38|18|1J|1A|-1]]]]|$0|BJ|2|BK|4|5|6|BL|8|-1|9|$4|A|B|@$4|C|D|BM]|$4|1F|D|BN|W|DF]]]|X|$4|Y|Z|@$4|10|N|$O|7W]|12|13]]]|14|$4|15|16|3L|18|42|1A|-1]]|$0|BO|2|BP|4|5|6|BQ|8|-1|9|$4|A|B|@$4|C|D|-4|E|$F|@$4|G|2|BR]|$4|7G|2|7H]]]]|$4|T|D|-4|E|$F|@$4|G|2|BS]|$4|7G|2|7H]]]|W|DG]]]|X|$4|Y|Z|@$4|10|N|$O|BT]|12|13]]]|14|$4|Y|Z|@$4|15|16|6T|18|19|1A|-1]]]]]",
    "isTransformed": true
};
(function () {
    function CTSimplePromise() {
        var t = [], e = !1, n = void 0;
        this.resolve = function (o) {
            if (!e) {
                n = o, e = !0;
                for (var r = 0; r < t.length; r++) t[r](o);
                t = []
            }
        }, this.then = function (o) {
            e ? o(n) : t.push(o)
        }
    }

    function CTAnyPromise(t) {
        for (var e = new CTSimplePromise, n = 0; n < t.length; n++) t[n].then(function (t) {
            e.resolve(t)
        });
        return e
    }

    function Rule(t) {
        logger.log("Rule name: ", t.name), this.name = t.name;
        var e = actionsFactory.construct(t.action, t), n = observablesFactory.construct(t.triggers),
            o = statesFactory.construct(t.states);
        n && n.subscribe(function (t) {
            if (o.evaluate()) return e.execute(t)
        })
    }

    function Observable() {
        this.subscribers = []
    }

    function State(t) {
    }

    function Action(t) {
    }

    function ClickObservable(t) {
        Observable.call(this);
        var e = this;
        ctSelectorUtils.bindEventHandler(clickHandlers, t, function (t) {
            var n = {domElement: t};
            e.notify(n)
        })
    }

    function onMouseDown(t) {
        currentMouseDownElement = t.target || t.srcElement
    }

    function onMouseUp(t) {
        var e, n = t.target || t.srcElement;
        if (n === currentMouseDownElement) for (e in clickHandlers) clickHandlers.hasOwnProperty(e) && ctSelectorUtils.isAncestor(clickHandlers[e][0].ctSelector, n) && clickHandlers[e].forEach(function (t) {
            var o = ctSelectorUtils.getAncestorDomElement(clickHandlers[e][0].ctSelector, n);
            t.callback.call(null, o)
        });
        currentMouseDownElement = null
    }

    function DelayObservable(t) {
        function e() {
            setTimeout(function () {
                n.notify()
            }, t)
        }

        Observable.call(this);
        var n = this;
        onRulesBoundHandlers.push(e), CTLogicalPageEvent.subscribe(e)
    }

    function ElementDeclarationObservable(t) {
        Observable.call(this);
        var e = this;
        ctSelectorUtils.bindEventHandler(elementDeclarationHandlers, t, function (n) {
            return logger.log("Element declaration event associated with selector: ", t), e.notify()
        })
    }

    function OrObservable(t) {
        Observable.call(this);
        var e = this;
        t.forEach(function (t) {
            t.subscribe(function (t) {
                return e.notify(t)
            })
        })
    }

    function PageLoadObservable() {
        function t() {
            logger.log("PageLoad event"), e.notify()
        }

        Observable.call(this);
        var e = this;
        onRulesBoundHandlers.push(t), CTLogicalPageEvent.subscribe(t)
    }

    function CTEventAction(t) {
        this.actionData = t, "undefined" != typeof this.actionData.dynamicEventName ? logger.log("CTEventAction Dynamic event: ", this.actionData.dynamicEventName) : logger.log("CTEventAction Simple event: ", this.actionData.eventName)
    }

    function ElementCategoryAction(t) {
        this.categoryId = t
    }

    function MultipleAction(t) {
        this.children = t || [], logger.log("Multiple Action")
    }

    function TestRuleEventAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function DynamicEventNameAction(t, e) {
        this.actionData = t, this.ruleData = e
    }

    function StaticEventNameAction(t, e) {
        this.actionData = t, this.ruleData = e, logger.log("StaticEventNameAction - eventId: ", this.actionData.eventId)
    }

    function AndCondition(t) {
        this.children = t
    }

    function CookieExistsState(t, e) {
        this.cookieName = t, this.cookieValue = e
    }

    function ExistsState(t) {
        this.ctSelector = t
    }

    function JSVariableExistsState(t, e) {
        this.jsVariableName = t, this.jsVariableValue = e
    }

    function LocationState(t) {
        logger.log("stateData: ", t), this.url = t.url.toLowerCase(), this.mode = t.mode, this.ignoreQueryString = t.ignoreQueryString
    }

    function NotCondition(t) {
        this.childState = t
    }

    function OrCondition(t) {
        this.children = t
    }

    function QSParamExistsState(t, e) {
        this.queryStringParamName = t, this.queryStringParamValue = e
    }

    function UrlHashExistsState(t) {
        this.urlHashValue = t
    }

    function init() {
        onDomReady(function () {
            if (startRulesEngine(), whenRecording(function () {
                ctRecordingPromise.resolve()
            }), window.ClickTaleMonitor && ClickTaleMonitor.Settings) {
                var t = window.ClickTaleMonitor.Settings.get();
                t.onReady(function () {
                    ctMonitorReadyPromise.resolve()
                })
            }
        })
    }

    function whenRecording(t) {
        if ("undefined" != typeof window.ClickTaleIsRecording && window.ClickTaleIsRecording() === !0) t(); else {
            var e = window.ClickTaleOnRecording;
            window.ClickTaleOnRecording = function () {
                t(), "undefined" != typeof e && "function" == typeof e && e.apply(this, arguments)
            }
        }
    }

    function startRulesEngine() {
        try {
            if (!isSupportedBrowser()) return;
            logger.log("startRulesEngine"), ct.ElementAddressing.bootstrap(window, !0), setTimeout(function () {
                buildRules()
            }, 300)
        } catch (t) {
            logger.error("startRulesEngine error: ", t)
        }
    }

    function onDomReady(t) {
        function e() {
            o || (o = !0, t())
        }

        function n() {
            if (!o) try {
                document.documentElement.doScroll("left"), e()
            } catch (t) {
                setTimeout(n, 10)
            }
        }

        var o = !1;
        if ("complete" === document.readyState || "interactive" === document.readyState) return void e();
        if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, !1); else if (document.attachEvent) {
            try {
                var r = null != window.frameElement
            } catch (i) {
            }
            document.documentElement.doScroll && !r && n(), document.attachEvent("onreadystatechange", function () {
                "complete" === document.readyState && e()
            })
        }
        if (window.addEventListener) window.addEventListener("load", e, !1); else if (window.attachEvent) window.attachEvent("onload", e); else {
            var a = window.onload;
            window.onload = function () {
                a && a(), e()
            }
        }
    }

    function isIE() {
        var t = navigator.userAgent.toLowerCase();
        return t.indexOf("msie") != -1 && parseInt(t.split("msie")[1])
    }

    function isSupportedBrowser() {
        try {
            return !isIE() || isIE() > 9
        } catch (t) {
            return logger.error("isSupportedBrowser: ", t), !1
        }
    }

    function buildRules() {
        if ("undefined" != typeof ctRules_PrePCC && sessionStorage.getItem("CT_testRules") && (ctRules_PrePCC = JSON.parse(sessionStorage.getItem("CT_testRules"))), "undefined" != typeof ctRules_PrePCC && logger.log("buildRules, rules:", ctRules_PrePCC), "undefined" != typeof ctRules_PrePCC && null != ctRules_PrePCC) {
            var t = null;
            t = ctRules_PrePCC.isTransformed ? rulesEngine.jsonUnpacker.unpack(ctRules_PrePCC.rules) : ctRules_PrePCC.rules, rules = t.map(function (t) {
                return new Rule(t)
            })
        }
        onRulesBoundHandlers.forEach(function (t) {
            t()
        })
    }

    Function.prototype.bind || (Function.prototype.bind = function (t) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var e = Array.prototype.slice.call(arguments, 1), n = this, o = function () {
        }, r = function () {
            return n.apply(this instanceof o ? this : t, e.concat(Array.prototype.slice.call(arguments)))
        };
        return this.prototype && (o.prototype = this.prototype), r.prototype = new o, r
    }), "function" != typeof Object.create && (Object.create = function () {
        function t() {
        }

        var e = Object.prototype.hasOwnProperty;
        return function (n) {
            if ("object" != typeof n) throw TypeError("Object prototype may only be an Object or null");
            t.prototype = n;
            var o = new t;
            if (t.prototype = null, arguments.length > 1) {
                var r = Object(arguments[1]);
                for (var i in r) e.call(r, i) && (o[i] = r[i])
            }
            return o
        }
    }());
    var logger = function () {
        function t() {
            var t = Array.prototype.slice.call(arguments);
            n && (window.console && window.console.log ? (t.unshift((new Date).toJSON() + " - RuleEngine :"), window.console.log.apply(window.console, t)) : window.alert && window.alert(t.join(" ")))
        }

        for (var e = {}, n = !(!window.localStorage || "true" !== localStorage.getItem("ctRuleEngineDebug")), o = window.location.search.split("&"), r = [], i = 0; i < o.length; i++) /^\??ctRuleEngine=/.test(o[i]) && r.push(o[i]);
        return r.length && (n = "true" === r[0].split("=").splice(1)[0], window.localStorage && localStorage.setItem("ctRuleEngineDebug", n)), e.log = function () {
            t.apply(this, arguments)
        }, e.error = function (e) {
            t.apply(this, arguments)
        }, e
    }();
    !function () {
        function t(t, e) {
            var n = t.split("."), o = k;
            !(n[0] in o) && o.execScript && o.execScript("var " + n[0]);
            for (var r; n.length && (r = n.shift());) n.length || e === w ? o = o[r] ? o[r] : o[r] = {} : o[r] = e
        }

        function e(t, e) {
            var n;
            if (t.map) n = t.map(e, w); else {
                n = [];
                for (var o = t.length, r = window, i = 0; i < o; i++) n.push(e.call(r, t[i], i))
            }
            return n
        }

        function n(t, e) {
            var n;
            if (t.filter) n = t.filter(e, w); else {
                n = [];
                for (var o = t.length, r = window, i = 0; i < o; i++) {
                    var a = t[i];
                    e.call(r, a, i) && n.push(a)
                }
            }
            return n
        }

        function o(t, e) {
            P || (t.ClickTaleSetCustomElementID = c(t.ClickTaleSetCustomElementID), P = C), e && i(R, t.document.documentElement), N = C
        }

        function r(t) {
        }

        function i(t, e) {
            var n = e.firstChild, o = l(e).CustomID;
            o && (o in t ? (x[o] = C, r("duplicate registration of custom id " + o + "were found on multiple elements")) : t[o] = e);
            for (; n; n = n.nextSibling) 1 === n.nodeType && i(t, n)
        }

        function a(t, e) {
            l(t).CustomID = e
        }

        function c(t) {
            return function (e, n) {
                n in R ? (x[n] = C, r("duplicate registration of custom id " + n + " were found on multiple elements")) : (t(e, n), N && (R[n] = e))
            }
        }

        function l(t) {
            var e = t.ClickTale;
            return e || (e = {}, t.ClickTale = e), e
        }

        function s(t) {
            return b.getComputedStyle ? b.getComputedStyle(t, S) : t.currentStyle
        }

        function u(t) {
            return I[t] || (I[t] = (t.charCodeAt(0) - 64 & 31) + ((t.charCodeAt(1) - 64 & 28) << 3) + ((t.charCodeAt(2) - 64 & 30) << 7)), I[t]
        }

        function d(t) {
            return (t.charCodeAt(0) - 64 & 7) + ((t.charCodeAt(0) - 64 & 16) >> 1) + ((t.charCodeAt(1) - 64 & 4) << 2) + ((t.charCodeAt(3) - 64 & 4) << 3)
        }

        function f(t, e, n) {
            var o, r, i, a, c, f, v = 0, y = S;
            o = A;
            for (var g, h = S, E = S, b = e.length, w = 0; t && w < b; w++) for (o = A, E = e[w], y = t.firstChild, v = 0; !o && y; y = y.nextSibling) if (1 === y.nodeType && u(y.tagName) === E.tagCode) {
                if (v === E.index) {
                    if (h = y, t = E.name, o = E.typeCode, r = E.customID, f = E.elementID, i = p(h, "id"), a = p(h, "type"), c = p(h, "name"), g = l(h).CustomID, !m([r, g]) && r != g || !m([f, i]) && f != i || !m([t, c]) && t != c || !m([o, a]) && a && o != d(a)) return S;
                    o = C, t = h
                }
                v++
            }
            return n ? t : (o = o && "none" !== s(t).display.toLowerCase()) ? t : S
        }

        function p(t, e) {
            var n = t.getAttributeNode(e);
            return n ? n.value : S
        }

        function m(t) {
            return O(t, function (t) {
                return !t
            })
        }

        function v(t, e) {
            var n, o = e.customID;
            if (o) {
                var i;
                o in x && x[o] ? r("duplicate custom id " + o + " were found on multiple elements") : i = R[o], n = i
            } else t:{
                if (o = e.elementID) {
                    try {
                        n = t.querySelectorAll("#" + o), n.length || (n = t.querySelectorAll("[id='" + o.replace(/'/g, "\\'") + "']"))
                    } catch (a) {
                        n = t.querySelectorAll("[id='" + o.replace(/'/g, "\\'") + "']")
                    }
                    if (n && 0 !== n.length) {
                        if (1 === n.length) {
                            n = n[0];
                            break t
                        }
                        r("duplicate id " + o + " were found on multiple elements.")
                    } else r("no element with id " + o + " was found.")
                }
                n = w
            }
            return n
        }

        function y(t, e) {
            for (var n, o, i = e.length, a = i, c = {}, l = t.ownerDocument; 0 < a; a--) {
                if (n = e[a - 1], o = v(l, n), !o && (n = n.name) && a === i) {
                    o = l;
                    var s, u = e, d = w, f = S, p = u.slice(0, a - 1);
                    t:{
                        s = o;
                        for (var m = p.length, y = w, y = w; 0 < m; m--) if (y = p[m - 1], (y = v(s, y)) && 1 === y.nodeType && "form" === y.tagName.toLowerCase()) {
                            s = y;
                            break t
                        }
                        s = S
                    }
                    (d = s) ? f = g(o, n, d, u) : r("could not resolve form. form doesn't have an anchor."), o = f
                }
                if (o) return i = e.slice(a, i), c.b = i, c.a = o, c
            }
            return c.b = e, c.a = t, c
        }

        function g(t, e, o, i) {
            var a, t = t.getElementsByName(e);
            if (1 < t.length) {
                if (t = n(t, function (t) {
                    return D(o, t)
                }), E(t)) return e = i[i.length - 1].index, h(t, e);
                r("duplicate name " + e + " found on multiple non radio elements.")
            } else 1 === t.length && (i = t[0], D(o, i) ? a = i : r("could not resolve nested element with name " + e + " in form."));
            return a
        }

        function h(t, e) {
            for (var n, o, r, i = [], a = A, c = 0; c < t.length; c++) if (r = t[c], o = r.parentNode, -1 === T(i, o) && (i.push(o), o = o.getElementsByTagName(r.tagName), o.length - 1 >= e)) {
                if (a) return S;
                n = o[e], a = C
            }
            return n
        }

        function E(t) {
            for (var e = 0; e < t.length; e++) {
                var n = p(t[e], "type");
                if (!n || "radio" !== n.toLowerCase()) return A
            }
            return C
        }

        if (!window.ct || !ct.ElementAddressing) {
            var b, w = void 0, C = !0, S = null, A = !1, k = this, D = function () {
                var t = document.documentElement;
                return t.compareDocumentPosition || t.contains ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t;
                    return t === e || n.contains && n.contains(e) || t.compareDocumentPosition && 16 & t.compareDocumentPosition(e)
                } : function (t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return C;
                    return A
                }
            }(), T = Array.prototype.indexOf ? function (t, e) {
                return t.indexOf(e)
            } : function (t, e) {
                for (var n = t.length, o = 0; o < n; o++) if (t[o] === e) return o;
                return -1
            }, O = Array.prototype.every ? function (t, e) {
                return t.every(e)
            } : function (t, e) {
                for (var n = t.length, o = 0; o < n; o++) if (!e(t[o])) return A;
                return C
            }, N = A, P = A, x = {}, R = {}, M = c(a), I = {};
            t("ct.ElementAddressing.bootstrap", function (t, e) {
                e = !!e, b = t, t.ClickTaleSetCustomElementID = a, /complete|interactive/.test(document.readyState) ? o(t, e) : t.document.addEventListener ? t.document.addEventListener("DOMContentLoaded", function () {
                    o(t, e)
                }, A) : document.attachEvent("onreadystatechange", function () {
                    "complete" === document.readyState && o(t, e)
                })
            }), t("ct.ElementAddressing.elementFromPath", function (t, n, o) {
                var r = !(t[0] instanceof Array);
                return r && (t = [t]), t = e(t, function (t) {
                    return t = y(n, t), t.a && 0 < t.b.length && (t.a = f(t.a, t.b, o)), !o && t.a && "hidden" === s(t.a).visibility.toLowerCase() ? S : t.a
                }), r ? t[0] : t
            }), t("ct.ElementAddressing.pathFromElement", function (t, e) {
                var n, o = 0, r = 0, i = S, a = [], c = t;
                if (!e) return a;
                for (; c && c !== e;) if (1 !== c.nodeType) c = c.parentNode; else {
                    for (r = 0, i = {}, t = c, o = u(c.nodeName), i.tagCode = o, (n = l(t).CustomID) && (i.customID = n), (n = p(t, "id")) && (i.elementID = n), (n = p(t, "name")) && (i.name = n), (n = p(t, "type")) && (i.typeCode = d(n)), n = c; n = n.previousSibling;) u(n.nodeName) === o && r++;
                    i.index = r, c = c.parentNode, a.push(i)
                }
                return a.reverse(), a
            }), t("ct.ElementAddressing.elementAndVisibilityFromPath", function (t, n) {
                var o = !(t[0] instanceof Array);
                o && (t = [t]);
                var r = e(t, function (t) {
                    if (t = y(n, t), t.a && 0 < t.b.length && (t.a = f(t.a, t.b, C)), t.a) {
                        var e = {};
                        e.dom = t.a, e.isHidden = "hidden" === s(t.a).visibility.toLowerCase(), t = e
                    } else t = S;
                    return t
                });
                return o ? r[0] : r
            }), t("ct.ElementAddressing.setCustomElementID", M), t("ct.ElementAddressing.calcTagCode", u), t("ct.ElementAddressing.calcTypeCode", d)
        }
    }();
    var ctRecordingPromise = new CTSimplePromise, ctMonitorReadyPromise = new CTSimplePromise,
        ctAnyRecorderReadyPromise = new CTAnyPromise([ctRecordingPromise, ctMonitorReadyPromise]),
        CTLogicalPageEvent = function () {
            function t() {
                setTimeout(function () {
                    for (var t = 0; t < e.length; t++) e[t]()
                }, 250)
            }

            var e = [];
            return ctAnyRecorderReadyPromise.then(function () {
                if (window.ClickTaleMonitor) {
                    var e = window.ClickTaleMonitor.restart;
                    ClickTaleMonitor.restart = function () {
                        "function" == typeof e && e.apply(this, arguments), t()
                    }
                } else {
                    var e = window.ClickTaleLogical;
                    window.ClickTaleLogical = function () {
                        "function" == typeof e && e.apply(this, arguments), t()
                    }
                }
            }), {
                subscribe: function (t) {
                    e.push(t)
                }
            }
        }(), exports = {}, rulesEngine = exports;
    Observable.prototype.subscribe = function (t) {
        this.subscribers.push(t)
    }, Observable.prototype.notify = function (t) {
        var e, n = this;
        return n.subscribers.forEach(function (n) {
            var o = n(t);
            null != o && (e = o)
        }), e
    };
    var observablesFactory = {
        construct: function (t) {
            return null == t ? null : this["construct" + t.type.replace("Condition", "")](t)
        }
    };
    State.prototype.evaluate = function (t) {
    };
    var statesFactory = {
        construct: function (t) {
            return this["construct" + t.type.replace("Condition", "")](t)
        }
    }, actionsFactory = {
        construct: function (t, e) {
            return this["construct" + t.type.replace("Action", "")](t, e)
        }
    };
    Action.prototype.execute = function (t) {
    };
    var ctSelectorUtils = function () {
        function t(t) {
            var e = [];
            if (t.elementAddressing) {
                var n = ct.ElementAddressing.elementFromPath(t.elementAddressing, document.body, !0);
                n && e.push(n)
            } else if (t.querySelector) try {
                e = Array.prototype.slice.call(document.querySelectorAll(t.querySelector))
            } catch (o) {
            }
            return e
        }

        function e(t) {
            switch (Object.keys(t)[0]) {
                case"elementAddressing":
                    return JSON.stringify(t.elementAddressing);
                case"querySelector":
                    return t.querySelector
            }
        }

        function n(t, e) {
            var n, o = t.length;
            for (n = 0; n < o; n += 1) if (t[n] === e) return !0;
            return !1
        }

        var o = {};
        return o.bindEventHandler = function (t, n, o) {
            var r = e(n);
            t[r] = t[r] || [], t[r].push({callback: o, ctSelector: n})
        }, o.isAncestor = function (t, e) {
            var n = o.getAncestorDomElement(t, e);
            return null != n
        }, o.getAncestorDomElement = function (t, e) {
            for (var r = !1, i = e, a = o.getDOMelements(t); !r && "HTML" !== i.tagName && i.parentElement;) r = n(a, i), r || (i = i.parentElement);
            return r ? i : null
        }, o.getDOMelements = function (e) {
            if (Array.isArray(e)) {
                var n = [];
                return e.forEach(function (e) {
                    n = n.concat(t(e))
                }), n
            }
            return t(e)
        }, o.getFirstDOMelement = function (e) {
            if (e && null != e) {
                var n = t(e);
                if (null != n && n.length > 0) return n[0]
            }
            return null
        }, o
    }();
    ClickObservable.prototype = Object.create(Observable.prototype), ClickObservable.prototype.constructor = ClickObservable, observablesFactory.constructClick = function (t) {
        return new ClickObservable(t.ctSelector)
    }, document.addEventListener && (document.addEventListener("mousedown", onMouseDown, !1), document.addEventListener("mouseup", onMouseUp, !1));
    var clickHandlers = {}, currentMouseDownElement = null;
    DelayObservable.prototype = Object.create(Observable.prototype), DelayObservable.prototype.constructor = DelayObservable, observablesFactory.constructDelay = function (t) {
        return new DelayObservable(t.delay)
    };
    var elementDeclarationHandlers = {};
    ElementDeclarationObservable.prototype = Object.create(Observable.prototype), ElementDeclarationObservable.prototype.constructor = ElementDeclarationObservable, observablesFactory.constructElementDeclaration = function (t) {
        return new ElementDeclarationObservable(t.ctSelector)
    }, window.ClickTaleSettings = window.ClickTaleSettings || {}, window.ClickTaleSettings.AugmentElementPath = function (t) {
        var e, n;
        for (e in elementDeclarationHandlers) elementDeclarationHandlers.hasOwnProperty(e) && ctSelectorUtils.isAncestor(elementDeclarationHandlers[e][0].ctSelector, t) && elementDeclarationHandlers[e].forEach(function (e) {
            n = e.callback.call(null, t) || n
        });
        return null != n ? {type: "pathdata", data: {categoryid: n}} : null
    }, OrObservable.prototype = Object.create(Observable.prototype), OrObservable.prototype.constructor = OrObservable, observablesFactory.constructOr = function (t) {
        var e = t.childConditions.map(function (t) {
            return observablesFactory.construct(t)
        });
        return new OrObservable(e)
    }, PageLoadObservable.prototype = Object.create(Observable.prototype), PageLoadObservable.prototype.constructor = PageLoadObservable, observablesFactory.constructPageLoad = function () {
        return new PageLoadObservable
    };
    var dynamicEventNameUtils = function () {
        var t = {};
        t.getDynamicEventName = function (t, r) {
            var s = "";
            if (t && t.parts && t.parts.length > 0) {
                for (var u = "undefined" != typeof t.delimiter ? t.delimiter : " ", d = 0; d < t.parts.length; d++) {
                    var f = t.parts[d], p = "";
                    try {
                        switch (f.type) {
                            case"TextValue":
                                p = f.name;
                                break;
                            case"ElementValue":
                                p = e(f);
                                break;
                            case"TriggeredElementValue":
                                "undefined" != typeof r && null != r && (p = n(f, r));
                                break;
                            case"CookieValue":
                                p = c(f.name);
                                break;
                            case"JSVariableValue":
                                p = o(f.name);
                                break;
                            case"QueryStringParamName":
                                p = l(f.name);
                                break;
                            case"BookmarkName":
                                p = a();
                                break;
                            case"URLValue":
                                p = i()
                        }
                        null == p && (p = "")
                    } catch (m) {
                        "undefined" != typeof logger && logger.error("getDynamicEventName: ", m)
                    }
                    s += u + p
                }
                s.length > 0 && (s = s.substring(u.length))
            }
            return s
        };
        var e = function (t) {
            var e = ctSelectorUtils.getFirstDOMelement(t.ctSelector);
            return null != e ? n(t, e) : ""
        }, n = function (t, e) {
            var n = t.subType;
            switch (n) {
                case"Attribute":
                    var o = t.name, r = e.getAttribute(o);
                    return null != r ? r : e[o];
                case"AllInnerText":
                    return u(e).join(" ");
                case"InnerText":
                default:
                    return "undefined" != typeof e.firstChild && null != e.firstChild ? "function" == typeof e.firstChild.nodeValue.trim ? e.firstChild.nodeValue.trim() : e.firstChild.nodeValue : "undefined" != typeof e.value && null != e.value ? "function" == typeof e.value.trim ? e.value.trim() : e.value : ""
            }
        }, o = function (t) {
            for (var e = t.split("."), n = window[e[0]], o = 1; o < e.length; o++) n = n[e[o]];
            return r(n)
        };
        t.getJSVariable = function (t) {
            return o(t)
        };
        var r = function (t) {
            return t = "undefined" == typeof t || "object" == typeof t ? null : t.toString()
        }, i = function (t) {
            return t || (t = "-"), window.location.pathname.split("/").join(t).substring(1)
        }, a = function () {
            return window.location.hash ? window.location.hash.split("#")[1] : null
        }, c = function (t) {
            for (var e = t + "=", n = document.cookie.split(";"), o = 0; o < n.length; o++) {
                for (var r = n[o]; " " == r.charAt(0);) r = r.substring(1);
                if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
            }
            return ""
        };
        t.getCookieValue = function (t) {
            return c(t)
        };
        var l = function (t, e) {
            e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");
            var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)"), o = n.exec(e);
            return o ? o[2] ? decodeURIComponent(o[2].replace(/\+/g, " ")) : "" : null
        };
        t.getQueryStringParameterValue = function (t) {
            return l(t)
        };
        var s = function (t, e) {
            for (e(t), t = t.firstChild; t;) s(t, e), t = t.nextSibling
        }, u = function (t) {
            function e(t) {
                switch (t.nodeType) {
                    case 1:
                        "undefined" != typeof t.value && null != t.value && n.push("function" == typeof t.value.trim ? t.value.trim() : t.value);
                        break;
                    case 3:
                        "undefined" != typeof t.nodeValue && null != t.nodeValue && n.push("function" == typeof t.nodeValue.trim ? t.nodeValue.trim() : t.nodeValue)
                }
            }

            "string" == typeof t && (t = document.getElementById(t));
            var n = [];
            return s(t, e), n
        };
        return t
    }();
    CTEventAction.prototype = Object.create(Action.prototype), CTEventAction.prototype.constructor = Action, CTEventAction.prototype.execute = function (t) {
        var e = this;
        ctRecordingPromise.then(function () {
            if ("function" == typeof window.ClickTaleIsRecording && window.ClickTaleIsRecording()) if ("function" == typeof window.ClickTaleEvent) {
                var n;
                t && (n = t.domElement);
                var o = e.geEventName(n);
                "" != o && (window.ClickTaleEvent(o), logger.log("CT-Core ClickTaleEvent: " + o))
            } else logger.log("window.ClickTaleEvent not exists"); else logger.log("window.ClickTaleIsRecording not exists or recording is not active")
        })
    }, CTEventAction.prototype.geEventName = function (t) {
        return this.actionData.dynamicEventName ? dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, t) : this.actionData.eventName
    }, actionsFactory.constructCTEvent = function (t) {
        return new CTEventAction(t)
    }, ElementCategoryAction.prototype = Object.create(Action.prototype), ElementCategoryAction.prototype.constructor = Action, ElementCategoryAction.prototype.execute = function () {
        return this.categoryId
    }, actionsFactory.constructElementCategory = function (t) {
        return new ElementCategoryAction(t.categoryId)
    }, MultipleAction.prototype = Object.create(Action.prototype), MultipleAction.prototype.constructor = Action, MultipleAction.prototype.execute = function (t) {
        this.children.forEach(function (e) {
            e.execute(t)
        }), logger.log("Executing Multiple Action")
    }, actionsFactory.constructMultiple = function (t, e) {
        var n = this;
        n.ruleData = e;
        var o = t.children.map(function (t) {
            return actionsFactory.construct(t, n.ruleData)
        });
        return new MultipleAction(o)
    }, TestRuleEventAction.prototype = Object.create(Action.prototype), TestRuleEventAction.prototype.constructor = Action, TestRuleEventAction.prototype.execute = function (t) {
        var e = this;
        e.triggeredDomElement = "undefined" != typeof t ? t.domElement : null;
        var n = e.geParams();
        window.ct_ve_parent_window && window.ct_ve_parent_window.postMessage({name: "testRuleEvent", params: n}, "*")
    }, TestRuleEventAction.prototype.geParams = function () {
        var t = {
            testTime: (new Date).getTime(),
            clickletId: this.ruleData.id,
            clickletName: this.ruleData.name,
            clickletType: this.ruleData.title,
            isActive: this.ruleData.isActive,
            platform: this.gePlatform(),
            data: this.geData(),
            eventNameMode: this.getEventNameMode()
        };
        return t
    }, TestRuleEventAction.prototype.gePlatform = function () {
        var t = this.actionData.actualType;
        return "StaticEventNameAction" == t || "DynamicEventNameAction" == t ? "Plus" : "Core"
    }, TestRuleEventAction.prototype.getEventNameMode = function () {
        var t = this.actionData.dynamicEventName;
        return "undefined" != typeof t && null != t ? "Dynamic" : "Static"
    }, TestRuleEventAction.prototype.geData = function () {
        var t = null;
        switch (this.actionData.actualType) {
            case"CTEventAction":
                t = this.geEventName();
                break;
            case"StaticEventNameAction":
                t = this.geEventName() + " [eventId:" + this.actionData.eventId + "]";
                break;
            case"DynamicEventNameAction":
                var e = 3;
                "ClickEvent" == this.ruleData.type && (e = 4), t = this.geEventName() + " [eventId: " + this.actionData.eventId + ", type: " + e + "]";
                break;
            case"ElementCategoryAction":
                t = this.actionData.categoryName + " [" + this.actionData.categoryId + "]"
        }
        return t
    }, TestRuleEventAction.prototype.geEventName = function () {
        return this.actionData.dynamicEventName ? dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, this.triggeredDomElement) : this.actionData.eventName
    }, actionsFactory.constructTestRuleEvent = function (t, e) {
        return new TestRuleEventAction(t, e)
    }, DynamicEventNameAction.prototype = Object.create(Action.prototype), DynamicEventNameAction.prototype.constructor = Action, DynamicEventNameAction.prototype.execute = function (t) {
        var e = this;
        try {
            if (window.ClickTaleMonitor && "function" == typeof window.ClickTaleMonitor.isMonitoring && window.ClickTaleMonitor.isMonitoring()) {
                e.triggeredDomElement = "undefined" != typeof t ? t.domElement : null;
                var n = e.geEventName();
                if ("" != n) switch (this.ruleData.type) {
                    case"ClickEvent":
                        if ("function" == typeof window.ClickTaleMonitor.addDynamicAction) try {
                            window.ClickTaleMonitor.addDynamicAction(this.actionData.eventId, n), logger.log("CEC ClickTaleEvent - ", "eventName: ", n, ", eventId: ", this.actionData.eventId)
                        } catch (o) {
                            logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addDynamicAction throws exception")
                        } else logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addDynamicAction not exists");
                        break;
                    case"PageEventByElement":
                    case"PageLoadEvent":
                        if ("function" == typeof window.ClickTaleMonitor.addPageTag) try {
                            window.ClickTaleMonitor.addPageTag(this.actionData.eventId, n), logger.log("CEC ClickTaleEvent - ", "eventName: ", n, ", eventId: ", this.actionData.eventId)
                        } catch (o) {
                            logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addPageTag throws exception")
                        } else logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.addPageTag not exists")
                } else logger.log("CEC ClickTaleEvent - event name is empty for eventId: ", this.actionData.eventId)
            } else logger.log("CEC ClickTaleEvent - window.ClickTaleMonitor.isMonitoring not exists or monitoring is not active")
        } catch (o) {
        }
    }, DynamicEventNameAction.prototype.geEventName = function () {
        return this.actionData.dynamicEventName ? dynamicEventNameUtils.getDynamicEventName(this.actionData.dynamicEventName, this.triggeredDomElement) : this.actionData.eventName
    }, actionsFactory.constructDynamicEventName = function (t, e) {
        return new DynamicEventNameAction(t, e)
    }, StaticEventNameAction.prototype = Object.create(Action.prototype), StaticEventNameAction.prototype.constructor = Action, StaticEventNameAction.prototype.execute = function () {
        try {
            window.ClickTaleMonitor && "function" == typeof window.ClickTaleMonitor.isMonitoring && window.ClickTaleMonitor.isMonitoring() ? "function" == typeof window.ClickTaleMonitor.addEvent ? (window.ClickTaleMonitor.addEvent(this.actionData.eventId), logger.log("CEC Event - eventId: ", this.actionData.eventId)) : logger.log("window.ClickTaleMonitor.addEvent not exists") : logger.log("window.ClickTaleMonitor.isMonitoring not exists or monitoring is not active")
        } catch (t) {
        }
    }, actionsFactory.constructStaticEventName = function (t, e) {
        return new StaticEventNameAction(t, e)
    }, AndCondition.prototype = Object.create(State.prototype), AndCondition.prototype.constructor = AndCondition, AndCondition.prototype.evaluate = function () {
        for (var t = 0; t < this.children.length; t++) {
            var e = this.children[t].evaluate();
            if (0 == e) return !1
        }
        return !0
    }, statesFactory.constructAnd = function (t) {
        var e = t.childConditions.map(function (t) {
            return statesFactory.construct(t)
        });
        return new AndCondition(e)
    }, CookieExistsState.prototype = Object.create(State.prototype), CookieExistsState.prototype.constructor = CookieExistsState, CookieExistsState.prototype.evaluate = function () {
        for (var t = !1, e = document.cookie.split(";"), n = 0; n < e.length; n++) if (e[n].split("=")[0].trim() == this.cookieName) {
            t = !0;
            break
        }
        return !!t && (void 0 == this.cookieValue || this.cookieValue == dynamicEventNameUtils.getCookieValue(this.cookieName))
    }, statesFactory.constructCookieExists = function (t) {
        return new CookieExistsState(t.name, t.value)
    }, ExistsState.prototype = Object.create(State.prototype), ExistsState.prototype.constructor = ExistsState, ExistsState.prototype.evaluate = function () {
        var t = ctSelectorUtils.getDOMelements(this.ctSelector);
        return t.length > 0
    }, statesFactory.constructExists = function (t) {
        return new ExistsState(t.ctSelector)
    }, JSVariableExistsState.prototype = Object.create(State.prototype), JSVariableExistsState.prototype.constructor = JSVariableExistsState, JSVariableExistsState.prototype.evaluate = function () {
        try {
            for (var t = this.jsVariableName.split("."), e = window[t[0]], n = 1; n < t.length; n++) e = e[t[n]]
        } catch (o) {
        }
        return "undefined" != typeof e && ("undefined" == typeof this.jsVariableValue || (null === e && (e = "null"), e == this.jsVariableValue || e.toString() == this.jsVariableValue))
    }, statesFactory.constructJSVariableExists = function (t) {
        return new JSVariableExistsState(t.name, t.value)
    }, LocationState.prototype = Object.create(State.prototype), LocationState.prototype.constructor = State, LocationState.prototype.evaluate = function (t) {
        var e = t || window.location.href;
        switch (e = e.toLowerCase(), this.ignoreQueryString === !0 && (e = e.split(/[?#]/)[0], this.url = this.url.split(/[?#]/)[0]), this.mode) {
            case"AllPages":
                return !0;
            case"StartsWith":
                return 0 == e.indexOf(this.url);
            case"EndsWith":
                return e.lastIndexOf(this.url) >= 0;
            case"Equals":
                return e === this.url;
            case"Contains":
                return e.indexOf(this.url) > -1
        }
    }, statesFactory.constructLocation = function (t) {
        return new LocationState(t)
    }, NotCondition.prototype = Object.create(State.prototype), NotCondition.prototype.constructor = NotCondition, NotCondition.prototype.evaluate = function () {
        return !this.childState.evaluate()
    }, statesFactory.constructNot = function (t) {
        var e = statesFactory.construct(t.condition);
        return new NotCondition(e)
    }, OrCondition.prototype = Object.create(State.prototype), OrCondition.prototype.constructor = OrCondition, OrCondition.prototype.evaluate = function () {
        for (var t = 0; t < this.children.length; t++) {
            var e = this.children[t].evaluate();
            if (1 == e) return !0
        }
        return !1
    }, statesFactory.constructOr = function (t) {
        var e = t.childConditions.map(function (t) {
            return statesFactory.construct(t)
        });
        return new OrCondition(e)
    }, QSParamExistsState.prototype = Object.create(State.prototype), QSParamExistsState.prototype.constructor = QSParamExistsState, QSParamExistsState.prototype.evaluate = function () {
        for (var t = !1, e = window.location.search.substring(1).split("&"), n = 0; n < e.length; n++) if (e[n].split("=")[0] == this.queryStringParamName) {
            t = !0;
            break
        }
        return !!t && (void 0 == this.queryStringParamValue || this.queryStringParamValue == dynamicEventNameUtils.getQueryStringParameterValue(this.queryStringParamName))
    }, statesFactory.constructQSParamExists = function (t) {
        return new QSParamExistsState(t.name, t.value)
    }, UrlHashExistsState.prototype = Object.create(State.prototype), UrlHashExistsState.prototype.constructor = UrlHashExistsState, UrlHashExistsState.prototype.evaluate = function () {
        return window.location.hash.split("#")[1] == this.urlHashValue
    }, statesFactory.constructUrlHashExists = function (t) {
        return new UrlHashExistsState(t.name)
    }, function (t) {
        var e = -1, n = -2, o = -3, r = -4, i = -5, a = function (t) {
            var a = t.split("^"), s = [], u = a[0];
            if ("" !== u) {
                u = u.split("|");
                for (var d = 0, f = u.length; d < f; d++) s.push(c(u[d]))
            }
            if (u = a[1], "" !== u) {
                u = u.split("|");
                for (var d = 0, f = u.length; d < f; d++) s.push(l(u[d]))
            }
            if (u = a[2], "" !== u) {
                u = u.split("|");
                for (var d = 0, f = u.length; d < f; d++) s.push(parseFloat(u[d]))
            }
            delete u;
            for (var p = "", m = [], v = a[3].length, d = 0; d < v; d++) {
                var y = a[3].charAt(d);
                "|" === y || "$" === y || "@" === y || "]" === y ? (p && (m.push(l(p)), p = ""), "|" !== y && m.push(y)) : p += y
            }
            var g = m.length, h = 0;
            return function E() {
                var t = m[h++];
                if ("@" === t) {
                    for (var a = []; h < g; h++) {
                        var c = m[h];
                        if ("]" === c) return a;
                        if ("@" === c || "$" === c) a.push(E()); else switch (c) {
                            case e:
                                a.push(!0);
                                break;
                            case n:
                                a.push(!1);
                                break;
                            case o:
                                a.push(null);
                                break;
                            case i:
                                a.push(void 0);
                                break;
                            case r:
                                a.push("");
                                break;
                            default:
                                a.push(s[c])
                        }
                    }
                    return a
                }
                if ("$" === t) {
                    for (var a = {}; h < g; h++) {
                        var l = m[h];
                        if ("]" === l) return a;
                        l = l === r ? "" : s[l];
                        var c = m[++h];
                        if ("@" === c || "$" === c) a[l] = E(); else switch (c) {
                            case e:
                                a[l] = !0;
                                break;
                            case n:
                                a[l] = !1;
                                break;
                            case o:
                                a[l] = null;
                                break;
                            case i:
                                a[l] = void 0;
                                break;
                            case r:
                                a[l] = "";
                                break;
                            default:
                                a[l] = s[c]
                        }
                    }
                    return a
                }
                throw new TypeError("Bad token " + t + " isn't a type")
            }()
        }, c = function (t) {
            return "string" != typeof t ? t : t.replace(/\+|%2B|%7C|%5E|%25/g, function (t) {
                return {"+": " ", "%2B": "+", "%7C": "|", "%5E": "^", "%25": "%"}[t]
            })
        }, l = function (t) {
            return parseInt(t, 36)
        };
        t.jsonUnpacker = {
            unpack: function (t) {
                return a(t)
            }
        }
    }(exports);
    var rules, onRulesBoundHandlers = [];
    init();
}());

/*browsers exclusion start*/
function doOnlyWhen(toDoHandler, toCheckHandler, interval, times, failHandler) {
    if ((!toDoHandler) || (!toCheckHandler)) return;
    if (typeof interval == "undefined") interval = 1000;
    if (typeof times == "undefined") times = 20;

    if (--times < 0 && typeof failHandler === 'function') {
        failHandler();
        return;
    }
    if (toCheckHandler()) {
        toDoHandler();
        return;
    }

    setTimeout(function () {
        doOnlyWhen(toDoHandler, toCheckHandler, interval, times);
    }, interval);
}

doOnlyWhen(function () {
    var ct_UA = ClickTaleDetectAgent();
    if (!(((ct_UA.t == ct_UA.IE && ct_UA.v <= 8)))) {
        (function () {
            window.ClickTaleSettings = window.ClickTaleSettings || {};
            window.ClickTaleSettings.PTC = window.ClickTaleSettings.PTC || {};
            window.ClickTaleSettings.PTC.originalPCCLocation = "P32_PID1009";
            var c = !0, d = null, f = !1, g = this;
            var j, k, n, o;

            function aa() {
                return g.navigator ? g.navigator.userAgent : d
            }

            o = n = k = j = f;
            var p;
            if (p = aa()) {
                var ba = g.navigator;
                j = 0 == p.indexOf("Opera");
                k = !j && -1 != p.indexOf("MSIE");
                n = !j && -1 != p.indexOf("WebKit");
                o = !j && !n && "Gecko" == ba.product
            }
            var ca = j, q = k, r = o, u = n, v;
            a:{
                var w = "", x;
                if (ca && g.opera) var y = g.opera.version,
                    w = "function" == typeof y ? y() : y; else if (r ? x = /rv\:([^\);]+)(\)|;)/ : q ? x = /MSIE\s+([^\);]+)(\)|;)/ : u && (x = /WebKit\/(\S+)/), x) var da = x.exec(aa()),
                    w = da ? da[1] : "";
                if (q) {
                    var z, ea = g.document;
                    z = ea ? ea.documentMode : void 0;
                    if (z > parseFloat(w)) {
                        v = "" + z;
                        break a
                    }
                }
                v = w
            }
            var fa = {};

            function A(a) {
                var b;
                if (!(b = fa[a])) {
                    b = 0;
                    for (var e = ("" + v).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), h = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), i = Math.max(e.length, h.length), t = 0; 0 == b && t < i; t++) {
                        var T = e[t] || "", wa = h[t] || "", xa = RegExp("(\\d*)(\\D*)", "g"),
                            ya = RegExp("(\\d*)(\\D*)", "g");
                        do {
                            var m = xa.exec(T) || ["", "", ""], l = ya.exec(wa) || ["", "", ""];
                            if (0 == m[0].length && 0 == l[0].length) break;
                            b = ((0 == m[1].length ? 0 : parseInt(m[1], 10)) < (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? -1 : (0 == m[1].length ? 0 : parseInt(m[1],
                                10)) > (0 == l[1].length ? 0 : parseInt(l[1], 10)) ? 1 : 0) || ((0 == m[2].length) < (0 == l[2].length) ? -1 : (0 == m[2].length) > (0 == l[2].length) ? 1 : 0) || (m[2] < l[2] ? -1 : m[2] > l[2] ? 1 : 0)
                        } while (0 == b)
                    }
                    b = fa[a] = 0 <= b
                }
                return b
            }

            var ga = {};

            function ha() {
                ga[9] || (ga[9] = q && !!document.documentMode && 9 <= document.documentMode)
            };!q || ha();
            !q || ha();
            q && A("8");
            !u || A("528");
            r && A("1.9b") || q && A("8") || ca && A("9.5") || u && A("528");
            !r || A("8");
            var ia;

            function B(a, b, e, h, i) {
                a && b && ("undefined" == typeof e && (e = 1E3), "undefined" == typeof h && (h = 20), 0 > --h ? "function" === typeof i && i() : b() ? a() : setTimeout(function () {
                    B(a, b, e, h, i)
                }, e))
            }

            function C(a) {
                var b = "someText".trim, e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                ia = b && !b.call(new String("\ufeff\u00a0")) ? function (a) {
                    return a == d ? "" : b.call(a)
                } : function (a) {
                    return a == d ? "" : (a + "").replace(e, "")
                };
                return ia(a)
            };

            function D(a, b) {
                if (a && a.nodeType && 9 === a.nodeType) return f;
                var e = Element.prototype;
                D = function (a, b) {
                    return !a || !document.documentElement.contains(a) ? f : D.e.call(a, b)
                };
                D.e = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                return D(a, b)
            }

            function E(a, b) {
                E = Element.prototype.closest ? function (a, b) {
                    return !(a && a instanceof Element) ? d : Element.prototype.closest.call(a, b)
                } : function (a, b) {
                    for (; a && !D(a, b);) a = a.parentElement;
                    return a
                };
                return E(a, b)
            };var F = f, ja = Object.defineProperty && Object.defineProperty({}, "passive", {
                get: function () {
                    F = c
                }
            });
            document.addEventListener("test", function () {
            }, ja);
            var G = F ? {passive: c, capture: c} : c, H = F ? {passive: c, capture: f} : f;

            function I(a) {
                function b() {
                    2 == ++I.f && a()
                }

                ka(b);
                if ("function" == typeof ClickTaleIsRecording && ClickTaleIsRecording() === c) b(); else {
                    var e = window.ClickTaleOnRecording || function () {
                    };
                    window.ClickTaleOnRecording = function () {
                        b();
                        return e.apply(this, arguments)
                    }
                }
            }

            I.f = 0;

            function ka(a) {
                function b() {
                    e || (e = c, a())
                }

                var e = f;
                "loading" != document.readyState ? b() : document.addEventListener && document.addEventListener("DOMContentLoaded", b, f)
            }

            function J(a, b, e, h, i) {
                "string" === typeof a ? (a = document.querySelectorAll(a), Array.prototype.forEach.call(a, function (a) {
                    J(a, b, e, h, i)
                })) : a instanceof Array || a instanceof NodeList ? Array.prototype.forEach.call(a, function (a) {
                    J(a, b, e, h, i)
                }) : a.addEventListener(b, function (a, b, e, h, i) {
                        return function (m) {
                            if ("function" === typeof e) e.apply(this, arguments), i && a.removeEventListener(b, arguments.callee, G); else {
                                var l = E(m.target, e);
                                l && (h.apply(l, arguments), i && a.removeEventListener(b, arguments.callee, G))
                            }
                        }
                    }(a, b, e, h, i),
                    G)
            }

            function la(a, b) {
                document.addEventListener("mouseup", function (e) {
                    a === e.target && b();
                    document.removeEventListener("mouseup", arguments.callee, H)
                }, H)
            }

            function ma(a, b) {
                document.addEventListener("mouseup", function (e) {
                    a === e.target && b();
                    document.removeEventListener("mouseup", arguments.callee, G)
                }, c)
            }

            function na(a, b) {
                function e(e) {
                    document.removeEventListener("touchend", arguments.callee, H);
                    a === e.target && b()
                }

                document.addEventListener("touchend", e, H);
                document.addEventListener("touchmove", function (a) {
                    document.removeEventListener("touchmove", arguments.callee, H);
                    document.removeEventListener("touchend", e, H)
                }, f)
            }

            function oa(a, b) {
                function e(e) {
                    document.removeEventListener("touchend", arguments.callee, G);
                    a === e.target && b()
                }

                document.addEventListener("touchend", e, G);
                document.addEventListener("touchmove", function (a) {
                    document.removeEventListener("touchmove", arguments.callee, G);
                    document.removeEventListener("touchend", e, G)
                }, G)
            }

            function pa(a, b) {
                var e = K();
                e && (pa = e.m ? na : la, pa(a, b))
            }

            function qa(a, b) {
                var e = K();
                e && (qa = e.m ? oa : ma, qa(a, b))
            }

            function ra(a) {
                for (var b = 0; b < a.length; b++) {
                    var e = a[b];
                    e && ("string" === typeof e ? (e = C(e)) && L(e) : Array.isArray(e) && ra(e))
                }
            };

            function L(a, b) {
                "function" === typeof ClickTaleEvent && (b ? L.b[a] !== c && (L.b[a] = c, ClickTaleEvent(a)) : ClickTaleEvent(a))
            }

            L.b = {};

            function sa(a) {
                "function" === typeof ClickTaleRegisterFormSubmit && ClickTaleRegisterFormSubmit(a)
            }

            function ta(a) {
                "function" === typeof ClickTaleRegisterFormSubmitSent && ClickTaleRegisterFormSubmitSent(a)
            }

            function ua(a) {
                "function" === typeof ClickTaleRegisterFormSubmitFailure && (a ? ClickTaleRegisterFormSubmitFailure(a) : ClickTaleRegisterFormSubmitFailure())
            }

            function va() {
                "function" === typeof ClickTaleFormDisableAll && ClickTaleFormDisableAll()
            }

            function za(a, b, e) {
                return "function" === typeof window.ClickTaleLogicalForm ? window.ClickTaleLogicalForm(a, b, e) : 0
            }

            function M(a, b) {
                "function" === typeof window.ClickTaleRegisterElementAction && ClickTaleRegisterElementAction(a, b)
            }

            function N(a) {
                "function" === typeof window.ClickTaleRegisterElementAction && ClickTaleRegisterElementAction("click", a)
            }

            function Aa(a, b) {
                var e = {}, h;
                for (h in a) e[h] = a[h];
                e.target = b;
                e.srcElement = b;
                N(e)
            }

            window.ClickTaleDetectAgent && window.ClickTaleDetectAgent() && window.ClickTaleDetectAgent();

            function O(a, b) {
                "object" == typeof a && "string" == typeof b && (window.ClickTaleContext && -1 != document.referrer.indexOf(location.hostname) && window.parent.ct && window.parent.ct.ElementAddressing && "function" === typeof window.parent.ct.ElementAddressing.setCustomElementID ? window.parent.ct.ElementAddressing.setCustomElementID(a, b) : (!window.ClickTaleContext && "function" === typeof ClickTaleSetCustomElementID && -1 != ClickTaleSetCustomElementID.toString().indexOf("duplicate registration of custom id") ? O = function (a, b) {
                    a.ClickTale =
                        a.ClickTale || {};
                    a.ClickTale.CustomID = b
                } : window.ClickTaleSetCustomElementID = window.ClickTaleSetCustomElementID || function (a, b) {
                    a.ClickTale = a.ClickTale || {};
                    a.ClickTale.CustomID = b
                }, window.ClickTaleSetCustomElementID(a, b)))
            }

            function Ba(a, b) {
                "function" === typeof ClickTaleLogical && (L.b = {}, b ? ClickTaleLogical(a, b) : ClickTaleLogical(a))
            }

            function K() {
                if ("function" === typeof ClickTaleDetectAgent) {
                    var a = ClickTaleDetectAgent();
                    if (a) return K = function () {
                        return a
                    }, K()
                }
                return d
            }

            function Ca() {
                "function" === typeof ClickTaleRebindEvents && Da && (Da = f, ClickTaleRebindEvents(), setTimeout(function () {
                    Da = c
                }, 400))
            }

            var Da = c;

            function Ea() {
                var a;
                if (!a) {
                    a = "mousedown";
                    if ("boolean" != typeof P) {
                        var b = K();
                        b && (P = b.m)
                    }
                    P && (a = "touchstart")
                }
                J(document, a, "img, a, button, textarea, input, select", function (a) {
                    var b = a.target, i = this;
                    qa(b, function (a, b) {
                        return function () {
                            if (!P) if (D(this, "button,a,textarea") && this != a) Aa(b, this); else {
                                var e = function () {
                                };
                                document.addEventListener("click", function (a) {
                                    return e = function (b) {
                                        b.target === a && (Fa = c);
                                        document.removeEventListener("click", arguments.callee, f)
                                    }
                                }(a), f);
                                setTimeout(function () {
                                    Fa || N(b);
                                    document.removeEventListener("click",
                                        e, f);
                                    Fa = void 0
                                }, 200)
                            }
                        }.bind(i)
                    }(b, a))
                })
            }

            var P, Fa;

            function Q(a, b, e, h) {
                Q.d && (Q.d = f, h = h || 400, "number" == typeof e && (h = e, e = ""), b = b || document.location.href, "function" === typeof ClickTaleStop && ClickTaleStop(), window.ClickTaleIncludedOnDOMReady = c, window.ClickTaleIncludedOnWindowLoad = c, "function" === typeof ClickTaleUploadPage && ClickTaleUploadPage(void 0, void 0), Ba(b, e), a(), setTimeout(function () {
                    Q.d = c
                }, h))
            }

            Q.d = c;

            function R(a) {
                "function" === typeof ClickTaleExec && ClickTaleExec(a)
            }

            var S = L;
            var U = "", V = document.location.pathname.toLowerCase(), W = document.location.href.toLowerCase(),
                Ga = document.location.hostname.toLowerCase(), X, Y, Ha = c;

            function Ia() {
                var a = document.body;
                if (document.createEventObject) {
                    var b = document.createEventObject();
                    a.fireEvent("onkeydown", b)
                } else b = document.createEvent("HTMLEvents"), b.initEvent("keydown", c, c), a.dispatchEvent(b)
            }

            function Z(a) {
                return 0 < a.length ? c : f
            }

            function Ja() {
                if (0 < Ga.indexOf("microsoftstore.com")) var a = 0, b = setInterval(function () {
                    a++;
                    if (20 < a) clearInterval(b); else if ("object" === typeof window.lpMTag && "object" === typeof window.lpMTag.events && "function" === typeof window.lpMTag.events.register && "function" === typeof window.lpMTag.events.hasFired) {
                        clearInterval(b);
                        window.lpMTag.events.register("LP_DYNBUTTON_CLICKED", function () {
                            S("lp button clicked")
                        });
                        window.lpMTag.events.register("LP_DYNBUTTON_STATE", function () {
                            2 <= arguments.length && "object" === typeof arguments[1] &&
                            "string" === typeof arguments[1].buttonState && S("lp button state: " + arguments[1].buttonState)
                        });
                        var e = window.lpMTag.events.hasFired("LP_DYNBUTTON_STATE");
                        "object" === typeof e && 0 < e.length && "object" === typeof e[e.length - 1].evData && "string" === typeof e[e.length - 1].evData.buttonState && S("lp button state: " + e[e.length - 1].evData.buttonState);
                        window.ot_Authenticated && "true" === window.ot_Authenticated && S("Onload|logged in", c)
                    }
                }, 500)
            }

            function Ka() {
                jQuery(".tabs-container a[class*='tab']").length && S("Onload | Tabs Exist");
                -1 < V.toLowerCase().indexOf("/store/msusa/en_us/pdp/") && 0 < jQuery(".buySpan_AddtoCart a").length && jQuery(".buySpan_AddtoCart a").each(function (a, b) {
                    O(b, "buyButtonCtId" + a)
                });
                if ("/en-us/store/apps" === V) U = "Apps Page"; else if ("/en-us/store/apps/windows" === V) U = "Apps Windows Page"; else if (Z(jQuery(".srv_addCartContainer>.cli_noPurchase>A.btn"))) U = "Apps Selection"; else if (-1 < V.indexOf("/en-us/store/")) {
                    if (U = V.substring(13),
                    -1 < V.indexOf("/config/surface-pro-4/") || -1 < V.indexOf("/config/surface-laptop/")) for (var a = document.querySelectorAll(".configparent"), b = 0; b < a.length; b++) {
                        var e = a[b].querySelectorAll("button"), h = e[0].getAttribute("name");
                        if (h) {
                            O(a[b], h);
                            for (var i = 0; i < e.length; i++) O(e[i], h + "_" + i)
                        }
                    }
                } else -1 < V.indexOf("/surface/") ? U = "Surface Landing (GCB)" : -1 < V.indexOf("/store") && -1 < W.indexOf("threepgcheckoutshoppingcartpage") ? (Ha = f, a = "", jQuery(".description").filter(":visible").length && (a = jQuery(".description").text()) &&
                -1 < a.indexOf("currently empty") && S("Onload | Cart | Empty Cart Page", c), jQuery(".cart-header:visible").length && (S("Onload | Cart", c), a = jQuery(".product-details").length ? jQuery(".product-details").length : 0, jQuery(".dr_error:visible").length && (b = jQuery(".dr_error:visible").text() || "", "" !== b && (b = b.trim(), -1 < b.indexOf("complete your purchase of Office 365") ? S("Onload | Office 365 Error Message", c) : -1 < b.indexOf("Session has timed out") ? S("Onload | Session has timed out", c) : S("Onload | General Error on submit",
                    c))), a && (4 < a ? S("Onload | Cart | More than 4 Items in Cart", c) : S("Onload | Cart | " + a + " in Cart", c)), window.sessionStorage && "function" === typeof window.sessionStorage.getItem && "function" === typeof Number && (a = Number(window.sessionStorage.getItem("ctCountCartPage")), "number" === typeof a && 0 <= a && (a += 1, S("Onload | Cart | " + a + " page counter"), window.sessionStorage.setItem("ctCountCartPage", a))), jQuery(".product-details .title:visible").length && (a = "", a = jQuery(".product-details .title:visible").text(), "" !== a &&
                (-1 < a.toLowerCase().indexOf("surface pro 4") && S("Onload | Cart with Surface Pro4 product", c), -1 < a.toLowerCase().indexOf("surface book") && S("Onload | Cart with Surface Book product", c), -1 < a.toLowerCase().indexOf("office 365") && S("Onload | Cart with Office365 product", c))), jQuery(".continue-shopping").filter(":visible").length && O(jQuery(".continue-shopping")[0], "CustomIDContinueShopping"), U = "Cart")) : -1 < V.indexOf("/store") && jQuery(".heading--small:contains('Customer info'):visible").length ? (jQuery(".step.first.active").length ?
                    (S("Onload | Customer Info", c), jQuery(".new-shopper:visible").length && (a = jQuery('.rwd-main input:not([type="hidden"]):not([type="radio"]),.rwd-main select:not([type="hidden"])').toArray(), b = "Customer Info form", e = jQuery(".checkout-extended").filter(":visible"), Z(a) && b && Z(e) && (va(), X = za(b, a, [e[0]])))) : jQuery(".step.second.active").length ? S("Onload | Payment", c) : jQuery(".step.third.active").length && S("Onload | Place order", c), U = "Checkout") : -1 < V.indexOf("displaythreepgcheckoutaddresspaymentinfopage") ||
                -1 < V.indexOf("/checkout") && (jQuery(".ship-to-page").length || jQuery(".pay-with-page").length) ? jQuery(".ship-to-page").length ? (jQuery(".cart-header.ship-to-heading").filter(':contains("Ship to"):visible').length ? (S("Onload | Ship To"), jQuery(".ship").each(function (a, b) {
                    O(b, "ShipTo" + a)
                })) : jQuery(".shipping-information").filter(":visible").length && (jQuery(".add-address-heading").filter(':contains("Add new address"):visible').length ? S("Onload | Add new address") : jQuery(".edit-address-heading").filter(':contains("Edit shipping address"):visible').length &&
                    (S("Onload | Edit shipping address"), jQuery(".checkout").length && O(jQuery(".checkout")[0], "CustomIDShipTo"), jQuery(".back-button").length && O(jQuery(".back-button")[0], "CustomIDBack")), va(), a = jQuery('.rwd-main input:not([type="hidden"]),.rwd-main select:not([type="hidden"])').toArray(), b = "Ship To Address", e = jQuery(".checkout").filter(":visible"), Z(a) && b && Z(e) && (Y = za(b, a, [e[0]]))), U = "ShipTo") : jQuery(".pay-with-page").length && (S("Onload | Pay With", c), U = "PayWith") : -1 < W.indexOf("threepgcheckoutconfirmorderpage") ||
                -1 < V.indexOf("/checkout") && jQuery(".review-page").length ? jQuery(".review-page").length && (S("Onload| Review and Place Order", c), jQuery(".edit").each(function (a, b) {
                    O(b, "ChangeAddr" + a)
                }), U = "ReviewAndPlaceOrder") : -1 < W.indexOf("thankyoupage") || -1 < V.indexOf("/checkout") ? jQuery(".thank-you-page").length && (S("Onload | Thank you page", c), U = "ThankYouPage") : -1 < V.indexOf("/store") && -1 < V.indexOf("handleinterstitialoffer") && (U = "Upsell Interstitial Page", S("Onload| Upsell Interstitial Page", c));
                setTimeout(function () {
                    Z(jQuery("#meControl>.msame_Header")) &&
                    (jQuery("#meControl>.msame_Header").hasClass("msame_unauth") ? S("Onload | Not Signed In", c) : S("Onload | Signed In", c))
                }, 1E3);
                Ha && window.sessionStorage && "function" === typeof window.sessionStorage.getItem && window.sessionStorage.getItem("ctCountCartPage") && window.sessionStorage.getItem("ctCountCartPage") && "function" === typeof window.sessionStorage.removeItem && window.sessionStorage.removeItem("ctCountCartPage");
                "" !== U && S("Onload | " + U, c)
            }

            function La(a) {
                for (var a = a.attributes, b = 0, e = a.length; b < e; b++) jQuery(a[b].node).is(".addresses-list") && setTimeout(function () {
                    Q(Ka, document.location.href)
                }, 1E3);
                return c
            }

            function Ma() {
                if (!window.ClickTaleFirstPCCGo) {
                    window.ClickTaleFirstPCCGo = c;
                    B(function () {
                        window.ClickTaleSettings.PTC.CMBeforeFilter = La
                    }, function () {
                        return !(!window.ClickTaleSettings || !window.ClickTaleSettings.PTC)
                    }, 1E3, 10);
                    Ka();
                    var a = f;
                    jQuery(".arrows>a").mouseup(function () {
                        a || (a = c, S("Interacted with ribbon"));
                        setTimeout(function () {
                            R('jQuery(".links").css("margin-left","' + jQuery(".links").css("margin-left") + '");')
                        }, 750)
                    });
                    "function" === typeof Ja && Ja();
                    -1 < document.location.href.indexOf("microsoftstore.com/store") &&
                    (jQuery(".links>li").one("mousedown", function () {
                        S("Category page: Clicked on category nav")
                    }), jQuery(".cta-primary").bind("mousedown", function () {
                        var a = jQuery(this).text();
                        a && S("Category page: Clicked on CTA: " + a)
                    }), jQuery(".product.col-sm-6").one("mousedown", function () {
                        S("Category page: clicked on Product")
                    }), jQuery(".product-banner.col-sm-6").one("mousedown", function () {
                        S("clicked on Featrued box")
                    }));
                    jQuery("ul.top-level-menubar a[href*=300190600]").mousedown(function () {
                        S("Action | SurfacePro3: Navigated Directly from Top Nav")
                    });
                    0 < jQuery("div.add-to-cart>div[id]").length && jQuery("div.add-to-cart>div[id]").map(function (a, b) {
                        O(b, "AddToCartOnPage")
                    });
                    0 < jQuery("div.action-container>div[id]").length && jQuery("div.action-container>div[id]").map(function (a, b) {
                        O(b, "AddToCartStickyBar")
                    });
                    "object" === typeof window.s && "string" === typeof window.s.pageName && 0 < window.s.pageName.length && "Product: Surface Pro 3" == window.s.pageName && (jQuery(".exp-specialoffers").length ? S("Onload | SurfacePro3: With special offers") : jQuery(".exp-specialoffers").length ||
                        S("Onload | SurfacePro3: Without special Offers"), jQuery('a#desktop-sign-in-menu>span.top-level-link-text:contains("Hi")').length && S("Onload | SurfacePro3: Logged in Customer"), jQuery("a.buyBtn_AddtoCart").mousedown(function () {
                        S("Action | SurfacePro3: Clicked Add to Cart");
                        jQuery(this).is(":visible") && jQuery(this).parents("form").length ? S("Action | SurfacePro3: Clicked Add to Cart On Page") : jQuery(this).is(":visible") && jQuery(this).parents("div.action-container").length && S("Action | SurfacePro3: Clicked Add to Cart On Sticky Bar")
                    }),
                        jQuery("a.buyBtn_AddtoCart").mouseup(function (a) {
                            "function" === typeof ClickTaleRegisterElementAction && ClickTaleRegisterElementAction("mouseover", a)
                        }), jQuery("ul.option-list a").mousedown(function () {
                        S("Action | SurfacePro3: Changed Device Selection")
                    }), jQuery("div.product-additional-info-main div.promo-text a").mousedown(function () {
                        S("Action | SurfacePro3: Interacted with Offer Below CTA")
                    }), jQuery("div.contact-panel-tab a.contact-tab").mousedown(function () {
                        S("Action | SurfacePro3: Clicked Talk to Expert")
                    }));
                    "object" === typeof window.s && "string" === typeof window.s.pageName && 0 < window.s.pageName.length && S("OnLoad | Page name: " + window.s.pageName);
                    jQuery(".top-level-menuitem > a").click(function (a) {
                        if ((a = jQuery(a.target).closest(".top-level-menuitem > a").text() || "") && "" !== a) var b = C(a);
                        b && "Store" == b && S("Action | top-level-link-text\\Store clicked", c)
                    });
                    if ("Cart" === U) jQuery(document).on("input", "#promoCode", function (a) {
                        jQuery(a.target);
                        S("Action | Cart | Promo Code Field Interaction", c)
                    }), jQuery(document).on("change",
                        ".quantity-container select", function (a) {
                            jQuery(a.target);
                            S("Action | Changed the product quantity", c)
                        }); else if ("Upsell Interstitial Page" === U) jQuery(document).on("mousedown", function (a) {
                        var a = a.target, b = jQuery(a);
                        pa(a, function () {
                            0 < b.closest(".btn-extended").length ? (S("Action | " + U + " | Review and Checkout", c), jQuery(".addtocart-check").filter(":checked").length && S('Action | Cart | one or more check boxes added on submit of "Review and checkout"', c)) : 0 < b.closest(".product-addtocart").length && S("Action | " +
                                U + " | Add Product to Cart", c)
                        })
                    });
                    jQuery(document).on("mousedown", function (a) {
                        var b = jQuery(a.target);
                        if ("Cart" === U) Z(b.closest(".continue-shopping")) ? (M("mouseover", a), S("Action | Cart | Clicked on Continue Shopping", c)) : Z(b.closest(".product-wrapper a:visible")) ? S("Action | Cart | Clicked on a PDP", c) : Z(b.closest(".top-stripe-banner-content:visible")) ? S("Action | Cart | Clicked on Top ribbon banner", c) : Z(b.closest(".checkout:visible")) ? (S("Action | Cart | Clicked on Any Checkout", c), setTimeout(function () {
                            1 <
                            jQuery(".pcf-main .dr_error:visible").length && S("Action | Cart | submit validation error", c)
                        }, 1500)) : Z(b.closest(".dynamic.live_chat:visible")) ? S("Action | Cart | Clicked on Live Chat", c) : Z(b.closest(".contact-tab")) ? (M("mouseover", a), S("Action | Cart | Clicked on Sticky Talk to an expert", c)) : Z(b.closest(".rwd-aside-main a:contains('Add to cart'):visible")) ? S("Action | Cart | Clicked on Add To Cart from Suggestions", c) : Z(b.closest(".rwd-aside-main a:contains('Shop now'):visible")) ? S("Action | Cart | Clicked on Shop Now from Suggestions",
                            c) : Z(b.closest(".shippingMethodRadio:visible")) ? S("Action | Cart | Interacted with shipping options", c) : Z(b.closest("#rewardsSignup:visible,[for='rewardsSignup']:visible")) ? S("Action | Cart | Interacted with  sign me up for Bing Rewards", c) : Z(b.closest(".remove-prod")) ? S("Action | Cart | remove item", c) : Z(b.closest("#promo-desktop a")) ? setTimeout(function () {
                            jQuery("#promo-desktop .dr_error").filter(":visible").length && S("Action | Cart | Promo Code Error", c)
                        }, 1E3) : Z(b.closest(".btn-msa-checkout").filter(":visible")) ?
                            S("Action | Cart | Proceed to Checkout | Sign In", c) : Z(b.closest(".msa-signup-link").filter(":visible")) ? S("Action | Cart | Proceed to Checkout | Sign Up", c) : Z(b.closest(".btn-guest-checkout").filter(":visible")) && S("Action | Cart | Proceed to Checkout | Guest", c); else if ("Checkout" === U) Z(b.closest(".checkout-extended")) ? (N(a), S("Action | Customer Info | Clicked on Next", c), X && (sa(X), ta(X), setTimeout(function () {
                            jQuery(".dr_error.validation-message:visible").length && (S("Action | Customer Info | Submit error validation",
                                c), ua(X))
                        }, 1E3))) : Z(b.closest(".heading-section a")) && S("Action | All Checkout Pages | Clicked on Edit Cart", c); else if ("ShipTo" === U) Z(b.closest(".ship")) ? (M("mouseover", a), S("Action | Ship To | Clicked on Ship to this address", c)) : Z(b.closest(".edit")) ? (M("mouseover", a), S("Action | Ship To | Clicked on Edit", c)) : Z(b.closest(".new-address")) ? (M("mouseover", a), S("Action | Ship To | Clicked on Add a new address", c)) : Z(b.closest(".checkout")) ? (M("mouseover", a), S("Action | Add\\Edit Address | Clicked on Ship to this address",
                            c), Ia(), Y && (sa(Y), ta(Y), setTimeout(function () {
                            jQuery(".dr_error.validation-message:visible").length && (S("Action | Add\\Edit Address | Validation Error", c), ua(Y))
                        }, 1E3))) : Z(b.closest(".back-button")) && (N(a), S("Action | Add\\Edit Address | Clicked on Back", c)); else if ("PayWith" === U) Z(b.closest(".pay")) ? (M("mouseover", a), S("Action | Pay With | Clicked on Pay with this card", c)) : Z(b.closest(".edit")) ? (M("mouseover", a), S("Action | Pay With | Clicked on Edit", c)) : Z(b.closest(".new-payment-method")) ? S("Action | Pay With | Clicked on Add New Payment",
                            c) : Z(b.closest(".delete-payment-method")) && S("Action | Pay With | Clicked on Delete Payment method", c); else if ("ReviewAndPlaceOrder" === U) Z(b.closest("#submitBottom")) ? S("Action | Review and Place Order | Clicked on Place Order", c) : Z(b.closest(".edit")) && (M("mouseover", a), S("Action | Review and Place Order | Clicked on Changed", c)); else if ("ThankYouPage" === U) Z(b.closest(".checkout")) && S("Action | Thank you Page | Clicked on Continue shopping", c); else if (-1 < U.indexOf("Surface")) {
                            if (Z(b.closest("#select_version_grid .select_right_column a"))) {
                                S("Action | Surface | Choose your Surface Book - select clicked",
                                    c);
                                return
                            }
                            if (Z(b.closest(".banner-cta.title a"))) {
                                S("Action | Surface | Buy Now black bar", c);
                                return
                            }
                            if (Z(b.closest(".block-content a.rtm-button-text-color-white")) || Z(b.closest("#select_version_button"))) {
                                if (a = b.closest(".block-content a.rtm-button-text-color-white").text() || jQuery("#select_version_button").text()) "Buy now" == a && (S("Action | Surface | Buy Now (Top)", c), S("Action| Surface | clicked on ANY 'Buy Now' Button", c)), "See available models" == a && S("Action | Surface | See Available Models",
                                    c), "Select models" == a && S("Action | Surface | Select models", c);
                                return
                            }
                            if (Z(b.closest("a#surface-book-see-rating-reviews"))) {
                                S("Action| Surface | clicked on 'See user ratings and reviews'", c);
                                return
                            }
                            if (Z(b.closest(".block-media-wrapper")) || Z(b.closest("#scroll-1 video"))) {
                                S("Action | Surface |  Examine Surface", c);
                                return
                            }
                            if (Z(b.closest(".ms-row.fixed .fixed-small button"))) {
                                S("Action | Surface |  Select This Option", c);
                                return
                            }
                            if (Z(b.closest(".pop-up-video-icon"))) {
                                S("Action | Surface | Watch the Video",
                                    c);
                                return
                            }
                            if (Z(b.closest(".sub-nav-item .title"))) {
                                S("Action | Surface | Use Menu tabs", c);
                                return
                            }
                            if (Z(b.closest(".sidebyside a"))) {
                                S("Action | Surface | Alternative Offer Buy Now", c);
                                return
                            }
                            if (Z(b.closest("ul.shell-header-nav>li"))) {
                                S("Action | Surface |  L0 Top White Nav Interaction", c);
                                return
                            }
                            if (Z(b.closest(".shell-category-nav>ul>li"))) {
                                S("Action | Surface |  L1 Top Blue Nav Interaction", c);
                                return
                            }
                            if (Z(b.closest(".editorialcontent .block-plugins a.rtm-button-text-color-white"))) {
                                S("Action | Surface |  Buy Now (Bottom)",
                                    c);
                                S("Action| Surface | clicked on ANY 'Buy Now' Button", c);
                                return
                            }
                        }
                        b.closest(".shell-header-brand").length ? S("Action|L0 Nav| MS Logo clicked", c) : b.closest(".shell-header-dropdown-tab-list").length || b.closest(".shell-header-dropdown-tab-list").length || b.closest(".shell-header-dropdown-content").length || b.closest("#l1_support").length ? S("Action|L0 Nav| Interacted", c) : Z(b.closest(".buyBtn_AddtoCart.box.green")) ? "" != b.closest(".buyBtn_AddtoCart.box.green").text() ? -1 < b.closest(".buyBtn_AddtoCart.box.green").text().indexOf("Buy now") &&
                            S("Buy now", c) : S("Action | Product Details Page: Clicked on Buy and download now", c) : (0 < jQuery(".drop-down-menu:visible").length && (R("jQuery('.drop-down-menu').hide();"), R("jQuery('.top-level-menuitem').removeClass('active');")), -1 < W.indexOf("productid") && b.closest(".action-container a.buyBtn_AddtoCart:visible").length ? S("Action | Product page: Clicked on add to cart from sticky top") : Z(b.closest('a:contains("Shop now")')) ? S("Action | Category List Page: Clicked on Shop now", c) : Z(b.closest('FORM[name="CrossSellForm"] .actions>A.atc-yes')) ?
                            (S("Action | Product page: Accepted Upsell", c), M("click", a)) : Z(b.closest('FORM[name="CrossSellForm"] .actions>A.atc-no')) ? S("Action | Product page: Opted out of Upsell", c) : U.length && Z(b.closest("figure.media a")) ? (S("Action | " + U + " | App Clicked", c), "Apps Selection" === U && S("Action | " + U + " | People also Liked", c)) : U.length && Z(b.closest("HEADER.section-header.row A.section-header-more")) ? S("Action | " + U + " | Show all Clicked", c) : Z(b.closest(".srv_refiner A")) ? S("Action | " + U + " | Interact with Left Filter",
                                c) : Z(b.closest("UL.srv_refineListSelectedFilters>LI>A")) ? S("Action | " + U + " | Clicked on Top Horizontal Item", c) : Z(b.closest(".slick-slider")) || Z(b.closest(".spotlight-dots>UL>LI")) ? S("Action | " + U + " | Interact with Carousel", c) : Z(b.closest("UL.body-tight.list-inline>LI")) ? S("Action | " + U + " | Top Menu Categories", c) : Z(b.closest('SECTION.channel.section[data-bi-area="CategoryChannel"]>.section-carousel A')) ? S("Action | " + U + " | Categories", c) : Z(b.closest("#reviewsPagingSection UL.nav-pills>LI")) ? S("Action | " +
                                U + " | Filter or Sort", c) : Z(b.closest('.hideIfSignedIn A[data-bi-name="SignInToRateAndReview"]')) ? S("Action | " + U + " | Sign In", c) : Z(b.closest(".srv_addCartContainer A.btn")) ? S("Action | " + U + " | Get the App", c) : Z(b.closest(".srv_writeReviewButton")) && S("Action | " + U + " | Rate and Review", c))
                    });
                    setTimeout(function () {
                        1 < jQuery(".signInOutLink a").length && S("Logged in visitor")
                    }, 2E3);
                    "0" == jQuery(".lineItemQuantity").eq(1).text() && S("Empty cart");
                    jQuery(".list-of-links.menu-groups a").mouseup(function () {
                        var a =
                            jQuery(this).text();
                        a && S("Top navigation: " + a + " internal clicked")
                    });
                    jQuery(".lineItemQuantity:visible").text();
                    jQuery(".our-categories-list > li > a").click(function () {
                        S("Homepage: side navigation clicked")
                    });
                    -1 < window.location.href.indexOf("productID") && jQuery(".buyBtn_AddtoCart:visible").click(function () {
                        var a = jQuery(this).text();
                        S("Action | " + a + " clicked");
                        S("Action | add to cart clicked");
                        var b = 0, e = setInterval(function () {
                            Z(jQuery('FORM[name="CrossSellForm"]')) && 25 > b ? (clearInterval(e), Ca()) : 35 ==
                                b && clearInterval(e);
                            b++
                        }, 500)
                    });
                    0 < jQuery(".buyBtn_outOfStock.box").length && "btnSubmitSpinContainer hide-option enabled" != jQuery(".btnSubmitSpinContainer").eq(1).attr("class") && S("Product Page: Out of stock");
                    if (0 < jQuery(".breadcrumbs").length && -1 < window.location.href.toLowerCase().indexOf("categoryid")) {
                        var b = jQuery(".breadcrumbs").text(), e = b.split(">");
                        e[1] && (-1 < b.toLowerCase().indexOf("surface") ? S("Category Page: Surface") : S("Category Page: " + e[1]));
                        if (-1 < jQuery(".breadcrumbs").text().toLowerCase().indexOf("surface")) jQuery(".sticky-nav-icons a").click(function () {
                            var a =
                                jQuery(this).text();
                            S("Surface: " + a)
                        }), jQuery("p.box.blue").click(function () {
                            S("Surface: Buy now")
                        }); else if (-1 < jQuery(".breadcrumbs").text().toLowerCase().indexOf("xbox")) jQuery(document).on("click", ".xbox .overlay .grid-unit a", function () {
                            var a = jQuery(this).text();
                            S("Xbox Banner: " + a)
                        }), setTimeout(function () {
                                R("jQuery('#dr_CategoryList .description').hide(); jQuery('#dr_CategoryList .shopnow').css({ 'background-color' : '#BAD80A', 'color' : '#1a1a1a', 'width' : '91px', 'height': '28px', 'line-height' : '28px', 'text-align': 'center', 'position': 'absolute', 'font-weight': 'normal', 'bottom': '2px'}); jQuery('#dr_CategoryList .byline, #dr_CategoryList .actual-price').css({'margin-left': '105px'});")
                            },
                            2500), jQuery(document).on("mousedown", ".grid-container .grid-unit a", function () {
                            S("Xbox: Shop Now")
                        }); else if (-1 < jQuery(".breadcrumbs").text().toLowerCase().indexOf("windows phone")) jQuery(document).on("click", ".overlay .grid-unit a", function () {
                            var a = jQuery(this).text();
                            S("Windows Phone Banner: " + a)
                        }); else if (-1 < jQuery(".breadcrumbs").text().toLowerCase().indexOf("windows")) jQuery(document).on("click", ".overlay .grid-unit a", function () {
                            var a = jQuery(this).text();
                            S("Windows Banner: " + a)
                        }); else if (-1 <
                            jQuery(".breadcrumbs").text().toLowerCase().indexOf("accessories")) jQuery(document).on("click", ".overlay .grid-unit a", function () {
                            var a = jQuery(this).text();
                            S("Accessories Banner: " + a)
                        }); else if (-1 < jQuery(".breadcrumbs").text().toLowerCase().indexOf("additional software")) jQuery(document).on("click", ".overlay .grid-unit a", function () {
                            var a = jQuery(this).text();
                            S("Additional Software Banner: " + a)
                        });
                        -1 < window.location.href.indexOf("categoryID") && setTimeout(function () {
                            if (jQuery("#dr_CategoryList").html()) {
                                var a =
                                    jQuery("#dr_CategoryList").html().toString();
                                R("jQuery('#dr_CategoryList').html(unescape('" + escape(a) + "'));")
                            }
                        }, 2E3);
                        if (-1 < jQuery(".cart-header h1").text().toLowerCase().indexOf("cart")) {
                            b = jQuery(".cart-item").length;
                            0 < parseInt(b, 10) && S("Shopping Cart: " + b + " items");
                            jQuery(".candy-rack a").click(function () {
                                S("Shopping Cart: You may also like clicked")
                            });
                            jQuery(".box.green").click(function () {
                                S("Shopping Cart: Checkout clicked")
                            });
                            var h = f;
                            jQuery(".promo-code-panel a").click(function () {
                                h || (h = c, S("Shopping Cart: Promo code apply clicked"))
                            })
                        }
                    }
                    var i =
                        f;
                    -1 < window.location.href.indexOf("productID") && jQuery(".product-thumbnails .hero-thumbnail:visible").click(function () {
                        i || (i = c, S("Product: Gallery clicked"))
                    });
                    jQuery(document).on("click", ".exp-ul-list li > a", function () {
                        S("Computers: side navigation clicked")
                    });
                    -1 < window.location.href.indexOf("productID") && -1 < window.location.href.indexOf("pdp") && (S("Product Page"), jQuery(".variation-container li a").click(function () {
                        jQuery(".variation-container li a").index(this)
                    }));
                    -1 < window.location.href.indexOf("productID") &&
                    "function" === typeof jQuery.fn.on && (jQuery(document).on("click", ".definingLevelTwo li", function () {
                        jQuery(".definingLevelTwo li").index(this)
                    }), jQuery(document).on("mousedown", ".buyBtn_AddtoCart:visible", function () {
                        var a = jQuery(this).text();
                        a && "string" === typeof a && (a = C(a), S("Action | " + a + " clicked"))
                    }))
                }
            }

            I(function () {
                Ea();
                B(Ma, function () {
                    return window.jQuery && "function" === typeof jQuery.fn.on && "function" === typeof jQuery.fn.bind ? c : f
                }, 250, 40)
            });
            window.ClicktaleIntegrationExperienceHandler = function (a, b, e) {
                var h;
                return function () {
                    var i = this, t = arguments, T = e && !h;
                    clearTimeout(h);
                    h = setTimeout(function () {
                        h = d;
                        e || a.apply(i, t)
                    }, b);
                    T && a.apply(i, t)
                }
            }(function () {
                Q(Ka, document.location.href);
                arguments.length && ra(arguments)
            }, 400, f);
        })();
    }
}, function () {
    return (typeof ClickTaleDetectAgent === 'function');
}, 500, 20);

