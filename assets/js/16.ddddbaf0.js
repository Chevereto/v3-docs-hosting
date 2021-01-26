(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{423:function(e,t,r){"use strict";r.r(t);var o=r(46),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cloudflare"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare"}},[e._v("#")]),e._v(" CloudFlare")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://en.wikipedia.org/wiki/CloudFlare",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudFlare"),r("OutboundLink")],1),e._v(" is a reverse proxy that is widely used to speed up and add security to websites.")]),e._v(" "),r("h2",{attrs:{id:"setup-cloudflare"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setup-cloudflare"}},[e._v("#")]),e._v(" Setup CloudFlare")]),e._v(" "),r("p",[e._v("Go to "),r("a",{attrs:{href:"https://www.cloudflare.com/sign-up",target:"_blank",rel:"noopener noreferrer"}},[e._v("create an account"),r("OutboundLink")],1),e._v(" and follow the steps. You will need to do some changes to your website DNS so be aware of that. Some hosting companies have partnerships with CloudFlare so in those cases you can enable CloudFlare directly from your hosting account.")]),e._v(" "),r("h2",{attrs:{id:"real-connecting-ip"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#real-connecting-ip"}},[e._v("#")]),e._v(" Real connecting IP")]),e._v(" "),r("p",[e._v("CloudFlare is a proxy, so it is required to pass the real peer IP to your webserver, otherwise the registered IPs will match CloudFlare and not the end-user. For Nginx, you must use "),r("code",[e._v("ngx_http_realip_module")]),e._v(". For Apache, "),r("code",[e._v("mod_remoteip")]),e._v(".")]),e._v(" "),r("p",[e._v("Kindly read the "),r("a",{attrs:{href:"https://support.cloudflare.com/hc/en-us/articles/200170786",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudFlare documentation"),r("OutboundLink")],1),e._v(" regarding this. If you run Nginx, we recommend to check this repository: "),r("a",{attrs:{href:"https://github.com/ergin/nginx-cloudflare-real-ip",target:"_blank",rel:"noopener noreferrer"}},[e._v("ergin/nginx-cloudflare-real-ip"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"cloudflare-https"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cloudflare-https"}},[e._v("#")]),e._v(" CloudFlare HTTPS")]),e._v(" "),r("p",[e._v('CloudFlare offers a wide range of HTTPS solutions that allows you to easily turn on/off SSL on your website. Depending on what kind of certificate you want to handle they offer "Flexible" and "Full" SSL variations. To enable HTTPS follow these steps:')]),e._v(" "),r("ul",[r("li",[e._v("Go to your "),r("a",{attrs:{href:"https://www.cloudflare.com/my-websites",target:"_blank",rel:"noopener noreferrer"}},[e._v("websites"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v('Click on the gear icon and select "CloudFlare settings"')]),e._v(" "),r("li",[e._v("Scroll down to the SSL section and select your configuration")])]),e._v(" "),r("h3",{attrs:{id:"how-do-i-force-my-site-to-only-use-https-ssl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-force-my-site-to-only-use-https-ssl"}},[e._v("#")]),e._v(" How do I force my site to only use HTTPS/SSL?")]),e._v(" "),r("p",[e._v("By default CloudFlare HTTPS doesn't force all the traffic to HTTPS.")]),e._v(" "),r("p",[e._v('To force all traffic to HTTPS, enable the "Always Use HTTPS" feature within the Edge Certificates tab of the Cloudflare "SSL/TLS" page.')]),e._v(" "),r("p",[e._v("If you only want to redirect for a subset of requests, consider creating an “Always use HTTPS” page rule as detailed below:")]),e._v(" "),r("ul",[r("li",[e._v("Go to your "),r("a",{attrs:{href:"https://www.cloudflare.com/my-websites",target:"_blank",rel:"noopener noreferrer"}},[e._v("websites"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v('Click on the gear icon and select "Page Rules"')]),e._v(" "),r("li",[e._v("Enter your website in the URL pattern input")]),e._v(" "),r("li",[e._v('Toggle the "Always use HTTPS" switch')]),e._v(" "),r("li",[e._v('Click on "Add rule" at the bottom')])]),e._v(" "),r("p",[e._v("By doing this all the traffic of your website will use HTTPS. When someone access your website using HTTP, CloudFlare will redirect those request to HTTPS.")]),e._v(" "),r("h2",{attrs:{id:"more-help"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-help"}},[e._v("#")]),e._v(" More help")]),e._v(" "),r("p",[e._v("Visit "),r("a",{attrs:{href:"https://support.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudFlare Support"),r("OutboundLink")],1),e._v(" if you need more help. You can also contact "),r("a",{attrs:{href:"https://chevereto.com/support",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chevereto support"),r("OutboundLink")],1),e._v(" if you need anything.")])])}),[],!1,null,null,null);t.default=a.exports}}]);