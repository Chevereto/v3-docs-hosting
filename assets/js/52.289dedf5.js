(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{384:function(e,t,r){"use strict";r.r(t);var o=r(46),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"install"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),r("p",[e._v("This refers to the provisioning alternatives for getting Chevereto installed in your server. It takes from granted that your server meets all the "),r("RouterLink",{attrs:{to:"/setup/requirements.html"}},[e._v("system requirements")]),e._v(".")],1),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Using VPS?")]),e._v(" "),r("p",[e._v("If you are installing on a VPS check our "),r("RouterLink",{attrs:{to:"/setup/root-install.html"}},[e._v("Root install (LEMP)")]),e._v(" and "),r("RouterLink",{attrs:{to:"/setup/root-openlitespeed.html"}},[e._v("Root install (OpenLiteSpeed)")]),e._v(" guides.")],1)]),e._v(" "),r("p",[e._v("New into self-hosting? Check the user powered "),r("RouterLink",{attrs:{to:"/contributed.html#guides"}},[e._v("guides")]),e._v(" and our recommendation on "),r("RouterLink",{attrs:{to:"/setup/hosting.html"}},[e._v("hosting")]),e._v(" providers.")],1),e._v(" "),r("h2",{attrs:{id:"procedures"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#procedures"}},[e._v("#")]),e._v(" Procedures")]),e._v(" "),r("h3",{attrs:{id:"a-install-using-our-installer-recommended"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-install-using-our-installer-recommended"}},[e._v("#")]),e._v(" A. Install using our Installer (recommended)")]),e._v(" "),r("p",[e._v("The "),r("a",{attrs:{href:"https://github.com/chevereto/installer",target:"_blank",rel:"noopener noreferrer"}},[e._v("chevereto/installer"),r("OutboundLink")],1),e._v(" is a single "),r("code",[e._v(".php")]),e._v(" file which will download and extract the latest release in the target destination.")]),e._v(" "),r("ul",[r("li",[e._v("Upload the "),r("a",{attrs:{href:"https://chevereto.com/download/file/installer",target:"_blank",rel:"noopener noreferrer"}},[e._v("installer"),r("OutboundLink")],1),e._v(" to your server target destination (usually the "),r("code",[e._v("public_html")]),e._v(" folder).")]),e._v(" "),r("li",[e._v("Open your website at "),r("code",[e._v("/installer.php")]),e._v(" and follow the process.")])]),e._v(" "),r("p",[r("img",{attrs:{src:"https://camo.githubusercontent.com/1c1a868703419338eb6b01802270171b4bbb134d/68747470733a2f2f63686576657265746f2e636f6d2f7372632f696d672f696e7374616c6c65722f73637265656e2d76322e706e673f3230313930363233",alt:"Chevereto Installer"}})]),e._v(" "),r("p",[e._v("The installer will prompt with steps to install the software, after that it will download the software, extract it and it will post to "),r("code",[e._v("/install")]),e._v(" the data previously provided.")]),e._v(" "),r("h4",{attrs:{id:"troubleshoot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#troubleshoot"}},[e._v("#")]),e._v(" Troubleshoot")]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("Don't panic")]),e._v(" "),r("p",[e._v("The installer works on top of HTTP so it relies in many sub-systems that could fail. If doesn't work for you the recommendation is to follow another install procedure.")])]),e._v(" "),r("ul",[r("li",[e._v("If you get an "),r("strong",[e._v("Unable to perform HTTP request")]),e._v(" it means that URL rewriting and/or other systems are preventing the installer to issue HTTP requests to "),r("code",[e._v("/install")]),e._v(".")]),e._v(" "),r("li",[e._v("It fails "),r("strong",[e._v("before")]),e._v(" extracting the software: Switch to manual installation")]),e._v(" "),r("li",[e._v("It fails "),r("strong",[e._v("after")]),e._v(" extracting the software: Go to "),r("code",[e._v("/install")]),e._v(" to continue the process")])]),e._v(" "),r("p",[e._v("⚠ In both cases REMOVE the "),r("code",[e._v("installer.php")]),e._v(" file")]),e._v(" "),r("h3",{attrs:{id:"b-install-using-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#b-install-using-docker"}},[e._v("#")]),e._v(" B. Install using Docker")]),e._v(" "),r("p",[e._v("Docker allows you to easily install a container version of the software.")]),e._v(" "),r("blockquote",[r("p",[e._v("👏🏾 All the Docker images are "),r("a",{attrs:{href:"https://hub.docker.com/search?q=chevereto&type=image",target:"_blank",rel:"noopener noreferrer"}},[e._v("user provided"),r("OutboundLink")],1),e._v(". If you know about more Docker images let's us know to list it here. Thanks for contributing!")])]),e._v(" "),r("p",[e._v("Note: when using Docker with the paid edition check that the image support our "),r("code",[e._v("installer")]),e._v(".")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/linuxserver/docker-chevereto",target:"_blank",rel:"noopener noreferrer"}},[e._v("linuxserver/chevereto"),r("OutboundLink")],1),e._v(" ("),r("a",{attrs:{href:"https://fleet.linuxserver.io/image?name=linuxserver/chevereto",target:"_blank",rel:"noopener noreferrer"}},[e._v("fleet"),r("OutboundLink")],1),e._v(") thanks to "),r("a",{attrs:{href:"https://www.linuxserver.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("linuxserver.io"),r("OutboundLink")],1),e._v(" - "),r("a",{attrs:{href:"https://forums.unraid.net/topic/97235-support-linuxserverio-chevereto/",target:"_blank",rel:"noopener noreferrer"}},[e._v("support"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/nmtan/chevereto/",target:"_blank",rel:"noopener noreferrer"}},[e._v("nmtan/chevereto"),r("OutboundLink")],1),e._v(" thanks to "),r("a",{attrs:{href:"https://github.com/tanmng",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tan Nguyen"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/zaywalker/chevereto",target:"_blank",rel:"noopener noreferrer"}},[e._v("zaywalker/chevereto"),r("OutboundLink")],1),e._v(" thanks to "),r("a",{attrs:{href:"https://github.com/zaywalker",target:"_blank",rel:"noopener noreferrer"}},[e._v("Jae Yoon KIM"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hub.docker.com/r/einverne/chevereto",target:"_blank",rel:"noopener noreferrer"}},[e._v("einverne/chevereto"),r("OutboundLink")],1),e._v(" thanks to "),r("a",{attrs:{href:"https://github.com/einverne",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ein Verne"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("Check our "),r("RouterLink",{attrs:{to:"/contributed.html#guides"}},[e._v("guides")]),e._v(" section for user provided guides on setting up a Docker environment.")],1),e._v(" "),r("h3",{attrs:{id:"c-install-via-zip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#c-install-via-zip"}},[e._v("#")]),e._v(" C. Install via zip")]),e._v(" "),r("ul",[r("li",[e._v("Download the "),r("a",{attrs:{href:"https://chevereto.com/panel/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("latest release"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Upload all the contents of the "),r("code",[e._v("chevereto")]),e._v(" folder to your server (usually in the "),r("code",[e._v("public_html")]),e._v(" folder)")]),e._v(" "),r("li",[e._v("Go to your target website URL and follow the instructions")])]),e._v(" "),r("h3",{attrs:{id:"d-install-using-softaculous-fantastico"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#d-install-using-softaculous-fantastico"}},[e._v("#")]),e._v(" D. Install using Softaculous/Fantastico")]),e._v(" "),r("p",[e._v("If your web hosting includes "),r("a",{attrs:{href:"https://softaculous.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Softaculous"),r("OutboundLink")],1),e._v("/"),r("a",{attrs:{href:"https://netenberg.com/fantastico.php",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fantastico"),r("OutboundLink")],1),e._v(', you can install Chevereto-Free with just one click, it should be available for one-click install under the "Image Galleries" category.')]),e._v(" "),r("div",{staticClass:"custom-block warning"},[r("p",{staticClass:"custom-block-title"},[e._v("Paid edition")]),e._v(" "),r("p",[r("strong",[e._v("Note:")]),e._v(" Our paid edition isn't available in these script libraries. However, you can install Chevereto Free and then "),r("strong",[e._v("one-click upgrade")]),e._v(" it to the paid edition directly from the "),r("code",[e._v("/dashboard")]),e._v(" panel.")])]),e._v(" "),r("h2",{attrs:{id:"cron"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[e._v("#")]),e._v(" Cron")]),e._v(" "),r("p",[e._v("At "),r("code",[e._v("/dashboard")]),e._v(" you will find the "),r("RouterLink",{attrs:{to:"/setup/requirements.html#cron"}},[e._v("required cron")]),e._v(" entry for your installation. You must provide this to fullfil the application background jobs.")],1),e._v(" "),r("h2",{attrs:{id:"install-issues"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-issues"}},[e._v("#")]),e._v(" Install issues")]),e._v(" "),r("p",[e._v("Most common install issue is missing "),r("RouterLink",{attrs:{to:"/setup/requirements.html"}},[e._v("system requirements")]),e._v(" so make sure that you are running a compatible system and that all the data is correct like working MySQL credentials and privileges.")],1),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("Get help")]),e._v(" "),r("p",[e._v("Check our "),r("a",{attrs:{href:"https://chevereto.com/community/categories/support.43/",target:"_blank",rel:"noopener noreferrer"}},[e._v("community support"),r("OutboundLink")],1),e._v(" in case you need help with the server provisioning")])])])}),[],!1,null,null,null);t.default=a.exports}}]);