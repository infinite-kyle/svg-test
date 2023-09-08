$(document).ready(function(){
// set timeout
var tid = setTimeout(mycode, 250);
function mycode() {
  //Hide Report a Problem Link from everyone regardless of role
  $('#help-dialog-options a[href=#create_ticket]').parent() .hide();
   tid = setTimeout(mycode, 250); // repeat myself
}
});
 
/* login password change */
$(document).ready(function(){
 
$('label[for="pseudonym_session_password"]').text("PIN Code");
 
 
});
 
$(document).ready(function(){
  if(window.location.pathname.search('login')){
    $('#login_forgot_password').text('Update your PIN in the Portal to reset your Canvas PIN');
  }
 
/* H5P Script */
var h5pScript = document.createElement('script');
h5pScript.setAttribute('charset', 'UTF-8');
h5pScript.setAttribute('src', 'https://de-assets.santarosa.edu/sites/all/modules/h5p/library/js/h5p-resizer.js');
document.body.appendChild(h5pScript);
});
 
/* Pope Tech Accessibility Guide */
function loadScript(a,b){var c=document.createElement("script");c.type="text/javascript",c.readyState?c.onreadystatechange=function(){("loaded"===c.readyState||"complete"===c.readyState)&&(c.onreadystatechange=null,b())}:c.onload=function(){b()},c.src=a,document.getElementsByTagName("head")[0].appendChild(c)}loadScript("https://canvas-cdn.pope.tech/canvas-loader.min.js",function(){});
 
/* ReadSpeaker */
(function() {
    jQuery.ajax({
        url: "//cdn-na.readspeaker.com/script/12526/webReaderForEducation/canvas/current/ReadSpeaker.Canvas.js",
        dataType: 'script',
        async: true
    });
 
/* Ally LTI 1.3 */
window.ALLY_CFG = {
    'baseUrl': 'https://prod.ally.ac',
    'clientId': 8851,
    'lti13Id': '55910000000000155'
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');
 
})();



window.addEventListener("load", function () {
  // const PROD_TOOL_ID = 127;
  // const DEMO_TOOL_ID = 127;
  // const TEST_TOOL_ID = 125;
  const BETA_TOOL_ID = 33316;

  const DDL_TOOL_ID = BETA_TOOL_ID;

  const DDL_EXTERNAL_TOOL_PATH = `/external_tools/${DDL_TOOL_ID}?display=borderless`;
  const location = window.location.origin;
  const isTest = location.includes(".test.");
  const isBeta = location.includes(".beta.");

  if (isTest || isBeta) {
    console.log("This is...", isTest ? "test" : "beta");
    if (document.getElementsByClassName("management-header")[0]) {
      let importButton = document
        .getElementsByClassName("management-header")[0]
        .getElementsByTagName("span")[0]
        .getElementsByTagName("div")[1]
        .getElementsByTagName("button")[0];
      importButton.remove();
    }
    if (document.getElementsByClassName("find_outcome")[0]) {
      let findButton = document.getElementsByClassName("find_outcome")[0];
      findButton.remove();
    }
    if (document.getElementsByClassName("management-header")[0]) {
      const ddl_url = window.ENV.CONTEXT_URL_ROOT + DDL_EXTERNAL_TOOL_PATH;
      let outcomeToolbar = document
        .getElementsByClassName("management-header")[0]
        .getElementsByTagName("span")[0]
        .getElementsByTagName("div")[1];
      let a = document.createElement("a");
      let link = document.createTextNode("Manage Outcomes");
      a.appendChild(link);
      a.title = "Link to Manage Outcomes";
      a.target = "_blank";
      a.href = ddl_url;
      a.style =
        "background: #f5f5f5;color: #2d3b45; width: auto; border: 1px solid; border-color: #c7cdd1;  border-radius: 3px;   transition: background-color .2s ease-in-out;     display: inline-block;      position: relative;      padding: 8px 14px;      margin-bottom: 0;      font-size: 16px;      font-size: 1rem;      line-height: 20px;      text-align: center;      vertical-align: middle;      cursor: pointer;      text-decoration: none;      overflow: hidden;      text-shadow: none;      -webkit-user-select: none;      user-select: none;";
      outcomeToolbar.appendChild(a);
    }

    if (document.getElementsByClassName("operation-view")[0]) {
      const ddl_url =
        window.ENV.GRADEBOOK_OPTIONS.context_url + DDL_EXTERNAL_TOOL_PATH;
      let exportButton = document.getElementsByClassName("operation-view")[0];
      exportButton.outerHTML = `<li class='operation-view'><a href=${ddl_url} target='_blank'><span class='operation-label'>Utilize Insights</span></a></li>`;
    }
  } else {
    console.log("This is Prod");
    if (
      document.getElementsByClassName(`context_external_tool_${DDL_TOOL_ID}`)[0]
    ) {
      let navItem = document.getElementsByClassName(
        `context_external_tool_${DDL_TOOL_ID}`
      )[0];
      navItem.remove();
    }
  }
});

/* Pronto */
(function() {
    window.prontoInit = {"ixn":"canvas","cid":234,"version":"1.0"};
    var script = document.createElement('script');
    script.src = `https://chat.trypronto.com/js/embedded.js?cb=${Math.round(new Date().getTime() / 1000)}`;
    document.body.appendChild(script);
})();

/**
// @name        Global Nav - Custom Links
// @namespace   https://github.com/robert-carroll/ccsd-canvas
//
**/
(function () {
  'use strict';
  // configure links
  const links = [
    {
      title: 'Cub Hub',
      icon_svg: 'https://github.com/infinite-kyle/svg-test/blob/main/CubHubLogo2R.svg',
      href: 'https://de.santarosa.edu',
      target: ''
    }, // ready for another
  ];
  // leave this alone
  const globalNavCustomLinks=e=>{let t=(e,t)=>{e.setAttribute("id",`global_nav_${t}_svg`),e.setAttribute("class","ic-icon-svg menu-item__icon ic-icon-svg--apps svg-icon-help ic-icon-svg-custom-tray"),e.getAttribute("height")>"26px"&&e.removeAttribute("height"),e.getAttribute("width")>"26px"&&e.removeAttribute("width")};e.forEach(e=>{const i=e.title.replace(/\W/g,"_").toLowerCase();var n=$("<li>",{id:`global_nav_${i}_link`,class:"ic-app-header__menu-list-item",html:`<a id="global_nav_${i}_link" role="button" href="${e.href}" target="${e.target}" class="ic-app-header__menu-list-link">\n            <div class="menu-item-icon-container" role="presentation"><span class="svg-${i}-holder"></span></div>\n            <div class="menu-item__text">${e.title}</div></a>`});if(1==/^icon-[a-z]/.test(e.icon_svg))n.find(`.svg-${i}-holder`).append($("<div>",{id:`global_nav_${i}_svg`,class:"menu-item-icon-container",html:`<i class="icon-line ${e.icon_svg} gnct_inst_menu_icon"></i></div>`,role:"presentation"}));else if(/^http/.test(e.icon_svg))n.find(`.svg-${i}-holder`).load(e.icon_svg,(function(){let e=$(this).find("svg")[0];t(e,i)}));else if(/^<svg/.test(e.icon_svg)){n.find(`.svg-${i}-holder`).append($(e.icon_svg));let s=n.find(`.svg-${i}-holder`).find("svg")[0];t(s,i)}$("#menu").append(n)})};

  // add links to menu
  globalNavCustomLinks(links);
})();