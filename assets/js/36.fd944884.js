(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{421:function(t,e,a){"use strict";a.r(e);var s=a(49),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"email"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email"}},[t._v("#")]),t._v(" Email")]),t._v(" "),a("p",[a("code",[t._v("/dashboard/settings/email")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Test email delivery results at "),a("RouterLink",{attrs:{to:"/settings/tools.html#send-test-email"}},[t._v("tools")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"from-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-name"}},[t._v("#")]),t._v(" From name")]),t._v(" "),a("p",[t._v("Determines the "),a("code",[t._v("from")]),t._v(" name used when sending transactional emails.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[a("code",[t._v("Chevereto")])])])])]),t._v(" "),a("h2",{attrs:{id:"from-email-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-email-address"}},[t._v("#")]),t._v(" From email address")]),t._v(" "),a("p",[t._v("Determines the "),a("code",[t._v("email")]),t._v(" used when sending transactional emails.")]),t._v(" "),a("p",[t._v('It is recommended to use a "no-reply" address.')]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[a("code",[t._v("no-reply@chevereto.com")])])])])]),t._v(" "),a("h2",{attrs:{id:"incoming-email-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#incoming-email-address"}},[t._v("#")]),t._v(" Incoming email address")]),t._v(" "),a("p",[t._v("Determines the "),a("code",[t._v("email")]),t._v(" inbox.")]),t._v(" "),a("p",[t._v("Contact form and system notifications will send emails to this address.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Example")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[a("code",[t._v("inbox@chevereto.com")])])])])]),t._v(" "),a("h2",{attrs:{id:"email-mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#email-mode"}},[t._v("#")]),t._v(" Email mode")]),t._v(" "),a("p",[t._v("Determines the email mode to use.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("The setting "),a("code",[t._v("PHP mail() func.")]),t._v(" should only be used at development environment and for reliability you should always use SMTP.")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Effect")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("SMTP")]),t._v(" "),a("td",[t._v("Send email using "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Simple Mail Transfer Protocol"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("PHP mail() func.")]),t._v(" "),a("td",[t._v("Send email using PHP "),a("a",{attrs:{href:"https://www.php.net/manual/en/function.mail.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("mail function"),a("OutboundLink")],1)])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Below SMTP settings applies only when "),a("code",[t._v("Email mode")]),t._v(" is set to "),a("code",[t._v("SMTP")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"smtp-server-and-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp-server-and-port"}},[t._v("#")]),t._v(" SMTP server and port")]),t._v(" "),a("p",[t._v("Determines SMTP server and its port.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Values")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[t._v("SMTP hostname")])]),t._v(" "),a("tr",[a("td",[t._v("Integer")]),t._v(" "),a("td",[t._v("Ports: 25, 80, 465, 587")])])])]),t._v(" "),a("h2",{attrs:{id:"smtp-username"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp-username"}},[t._v("#")]),t._v(" SMTP username")]),t._v(" "),a("p",[t._v("Determines SMTP username.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Values")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[t._v("SMTP username")])])])]),t._v(" "),a("h2",{attrs:{id:"smtp-password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp-password"}},[t._v("#")]),t._v(" SMTP password")]),t._v(" "),a("p",[t._v("Determines SMTP password.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Values")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("String")]),t._v(" "),a("td",[t._v("SMTP password")])])])]),t._v(" "),a("h2",{attrs:{id:"smtp-security"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smtp-security"}},[t._v("#")]),t._v(" SMTP security")]),t._v(" "),a("p",[t._v("Determines SMTP security.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("Effect")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("TLS")]),t._v(" "),a("td",[t._v("Use "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Transport_Layer_Security",target:"_blank",rel:"noopener noreferrer"}},[t._v("Transport Layer Security"),a("OutboundLink")],1)])]),t._v(" "),a("tr",[a("td",[t._v("SSL")]),t._v(" "),a("td",[t._v("Use Secure Sockets Layer")])]),t._v(" "),a("tr",[a("td",[t._v("Unsecured")]),t._v(" "),a("td",[t._v("Don't secure emails")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);