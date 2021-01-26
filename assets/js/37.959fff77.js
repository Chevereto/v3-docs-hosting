(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{398:function(e,a,t){"use strict";t.r(a);var r=t(46),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"image-upload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-upload"}},[e._v("#")]),e._v(" Image upload")]),e._v(" "),t("p",[t("code",[e._v("/dashboard/settings/image-upload")])]),e._v(" "),t("h2",{attrs:{id:"enabled-image-formats"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enabled-image-formats"}},[e._v("#")]),e._v(" Enabled image formats")]),e._v(" "),t("p",[e._v("Determines which image formats can be uploaded.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Formats supported")]),e._v(" "),t("p",[e._v("JPG PNG BMP GIF WEBP")])]),e._v(" "),t("h2",{attrs:{id:"enable-uploads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-uploads"}},[e._v("#")]),e._v(" Enable uploads")]),e._v(" "),t("p",[e._v("Toggles the image upload functionality.")]),e._v(" "),t("h2",{attrs:{id:"upload-user-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-user-interface"}},[e._v("#")]),e._v(" Upload user interface")]),e._v(" "),t("p",[e._v("Determines how the upload will be displayed.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Value")]),e._v(" "),t("th",[e._v("Effect")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("On-page container")]),e._v(" "),t("td",[e._v("Uses a JS uploader that stays in page")])]),e._v(" "),t("tr",[t("td",[e._v("/upload route")]),e._v(" "),t("td",[e._v("Drives users towards the upload page")])])])]),e._v(" "),t("h2",{attrs:{id:"guest-uploads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guest-uploads"}},[e._v("#")]),e._v(" Guest uploads")]),e._v(" "),t("p",[e._v("Same as "),t("a",{attrs:{href:"#enable-uploads"}},[e._v("enable uploads")]),e._v(", but for guest users.")]),e._v(" "),t("h2",{attrs:{id:"moderate-uploads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moderate-uploads"}},[e._v("#")]),e._v(" Moderate uploads")]),e._v(" "),t("p",[e._v("Determines if incoming uploads must be moderated or not.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Value")]),e._v(" "),t("th",[e._v("Effect")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Disabled")]),e._v(" "),t("td",[e._v("No moderation required")])]),e._v(" "),t("tr",[t("td",[e._v("Guest")]),e._v(" "),t("td",[e._v("Moderate guest uploads")])]),e._v(" "),t("tr",[t("td",[e._v("All")]),e._v(" "),t("td",[e._v("Moderate all uploads")])])])]),e._v(" "),t("h2",{attrs:{id:"enable-embed-codes-uploader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-embed-codes-uploader"}},[e._v("#")]),e._v(" Enable embed codes (uploader)")]),e._v(" "),t("p",[e._v("Toggles the display of embed codes after upload process.")]),e._v(" "),t("h2",{attrs:{id:"upload-threads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#upload-threads"}},[e._v("#")]),e._v(" Upload threads")]),e._v(" "),t("p",[e._v("Determines the number of parallel threads used by the uploader. This setting should be configured according to the installed hardware and the usage of your website.")]),e._v(" "),t("h2",{attrs:{id:"redirect-on-single-upload"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redirect-on-single-upload"}},[e._v("#")]),e._v(" Redirect on single upload")]),e._v(" "),t("p",[e._v("Toggles the HTTP redirection on single image upload. When enabled, users will be redirected to the image viewer.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("This should be disabled if upload moderation is enabled. This is because the viewer URL will return "),t("code",[e._v("HTTP 403")]),e._v(" until the image gets approved.")])]),e._v(" "),t("h2",{attrs:{id:"enable-duplicate-uploads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-duplicate-uploads"}},[e._v("#")]),e._v(" Enable duplicate uploads")]),e._v(" "),t("p",[e._v("Toggles the acceptance of duplicate uploads.")]),e._v(" "),t("h2",{attrs:{id:"enable-expirable-uploads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-expirable-uploads"}},[e._v("#")]),e._v(" Enable expirable uploads")]),e._v(" "),t("p",[e._v("Toggles the availability of expirable uploads, which will get automatically removed after a certain date.")]),e._v(" "),t("h2",{attrs:{id:"auto-delete-guest-uploads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#auto-delete-guest-uploads"}},[e._v("#")]),e._v(" Auto delete guest uploads")]),e._v(" "),t("p",[e._v("Determines the automatic deletion of guest uploads.")]),e._v(" "),t("h2",{attrs:{id:"maximum-image-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maximum-image-size"}},[e._v("#")]),e._v(" Maximum image size")]),e._v(" "),t("p",[e._v("Determines the maximum size (in pixels) allowed for image uploads. Larger images will get automatically downscale.")]),e._v(" "),t("h2",{attrs:{id:"image-exif-data"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-exif-data"}},[e._v("#")]),e._v(" Image Exif data")]),e._v(" "),t("p",[e._v("Toggles the handling of image "),t("a",{attrs:{href:"https://en.wikipedia.org/wiki/Exif",target:"_blank",rel:"noopener noreferrer"}},[e._v("Exif"),t("OutboundLink")],1),e._v(" data.")]),e._v(" "),t("h2",{attrs:{id:"image-exif-data-user-setting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-exif-data-user-setting"}},[e._v("#")]),e._v(" Image Exif data (user setting)")]),e._v(" "),t("p",[e._v("Toggles if users can determine how to handle Exif data.")]),e._v(" "),t("h2",{attrs:{id:"maximum-upload-file-size-mb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maximum-upload-file-size-mb"}},[e._v("#")]),e._v(" Maximum upload file size [MB]")]),e._v(" "),t("p",[e._v("Determines the maximum image size allowed.")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("This setting is capped by local "),t("code",[e._v("php.ini")]),e._v(" "),t("RouterLink",{attrs:{to:"/setup/server-issues.html#recommended-php.ini"}},[e._v("configuration")]),e._v(".")],1)]),e._v(" "),t("h2",{attrs:{id:"maximum-upload-file-size-guests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maximum-upload-file-size-guests"}},[e._v("#")]),e._v(" Maximum upload file size (guests)")]),e._v(" "),t("p",[e._v("Same as above, but for guests.")]),e._v(" "),t("h2",{attrs:{id:"image-path"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#image-path"}},[e._v("#")]),e._v(" Image path")]),e._v(" "),t("p",[e._v("The file system path for storing uploads.")]),e._v(" "),t("h2",{attrs:{id:"storage-mode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-mode"}},[e._v("#")]),e._v(" Storage mode")]),e._v(" "),t("p",[e._v("How uploads will get organized in the file system.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Value")]),e._v(" "),t("th",[e._v("Effect")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Datefolders")]),e._v(" "),t("td",[e._v("Uses a nested folder structure "),t("code",[e._v("YYYY/MM/DD")])])]),e._v(" "),t("tr",[t("td",[e._v("Direct")]),e._v(" "),t("td",[e._v("No folder structure")])])])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("This setting only affects future uploads. Previous uploads won't be affected.")])]),e._v(" "),t("h2",{attrs:{id:"file-naming-method"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-naming-method"}},[e._v("#")]),e._v(" File naming method")]),e._v(" "),t("p",[e._v("How uploads will be named on upload.")]),e._v(" "),t("ul",[t("li",[e._v("Source file: "),t("code",[e._v("./DSC-1313.jpg")])])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Value")]),e._v(" "),t("th",[e._v("Effect")]),e._v(" "),t("th",[e._v("Example")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Original")]),e._v(" "),t("td",[e._v("Keep the original file name (will randomize on collisions)")]),e._v(" "),t("td",[t("code",[e._v("DSC-1313.jpg")])])]),e._v(" "),t("tr",[t("td",[e._v("Random")]),e._v(" "),t("td",[e._v("A randomized alphanumeric name")]),e._v(" "),t("td",[t("code",[e._v("bJdrpmdfi.jpg")])])]),e._v(" "),t("tr",[t("td",[e._v("Mix original + random")]),e._v(" "),t("td",[e._v("Keep part of the original filename")]),e._v(" "),t("td",[t("code",[e._v("DSC-13pLfm.jpg")])])]),e._v(" "),t("tr",[t("td",[e._v("ID")]),e._v(" "),t("td",[e._v("Name the uploads as their public (encoded) ID")]),e._v(" "),t("td",[t("code",[e._v("kIf.jpg")])])])])]),e._v(" "),t("h2",{attrs:{id:"thumb-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#thumb-size"}},[e._v("#")]),e._v(" Thumb size")]),e._v(" "),t("p",[e._v("The with and height for the image thumbs.")]),e._v(" "),t("h2",{attrs:{id:"medium-image-fixed-dimension"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#medium-image-fixed-dimension"}},[e._v("#")]),e._v(" Medium image fixed dimension")]),e._v(" "),t("p",[e._v("Determines how medium images will be generated by specifying the resizing criteria.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Value")]),e._v(" "),t("th",[e._v("Effect")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Width")]),e._v(" "),t("td",[e._v("Resizing fixing width to the target value")])]),e._v(" "),t("tr",[t("td",[e._v("Height")]),e._v(" "),t("td",[e._v("Resizing fixing height to the target value")])])])]),e._v(" "),t("h2",{attrs:{id:"medium-image-fixed-size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#medium-image-fixed-size"}},[e._v("#")]),e._v(" Medium image fixed size")]),e._v(" "),t("p",[e._v("The medium image size. Images will be resized based on the "),t("a",{attrs:{href:"#medium-image-fixed-dimension"}},[e._v("medium image fixed dimension")]),e._v(" criteria.")]),e._v(" "),t("h2",{attrs:{id:"watermarks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermarks"}},[e._v("#")]),e._v(" Watermarks")]),e._v(" "),t("p",[e._v("Toggles image watermarking, which are images that are merged in front of the images. Useful for any branding need.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("Watermark settings below applies only if "),t("code",[e._v("Watermarks")]),e._v(" is "),t("code",[e._v("Enabled")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"watermark-user-toggles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-user-toggles"}},[e._v("#")]),e._v(" Watermark user toggles")]),e._v(" "),t("p",[e._v("Which user uploads will be watermarked.")]),e._v(" "),t("h2",{attrs:{id:"watermark-file-toggles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-file-toggles"}},[e._v("#")]),e._v(" Watermark file toggles")]),e._v(" "),t("p",[e._v("Which image formats will be watermarked.")]),e._v(" "),t("h2",{attrs:{id:"minimum-image-size-needed-to-apply-watermark"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#minimum-image-size-needed-to-apply-watermark"}},[e._v("#")]),e._v(" Minimum image size needed to apply watermark")]),e._v(" "),t("p",[e._v("Determines the minimum image size criteria needed to watermark an image.")]),e._v(" "),t("h2",{attrs:{id:"watermark-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-image"}},[e._v("#")]),e._v(" Watermark image")]),e._v(" "),t("p",[e._v("The image used to watermark image uploads.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Recommended")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Image")]),e._v(" "),t("td",[e._v("PNG with alpha transparency")])])])]),e._v(" "),t("h2",{attrs:{id:"watermark-position"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-position"}},[e._v("#")]),e._v(" Watermark position")]),e._v(" "),t("p",[e._v("The area where the watermark will be applied to the image.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th"),e._v(" "),t("th"),e._v(" "),t("th")])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Left top")]),e._v(" "),t("td",[e._v("Center top")]),e._v(" "),t("td",[e._v("Right top")])]),e._v(" "),t("tr",[t("td",[e._v("Left center")]),e._v(" "),t("td",[e._v("Center center")]),e._v(" "),t("td",[e._v("Right center")])]),e._v(" "),t("tr",[t("td",[e._v("Left bottom")]),e._v(" "),t("td",[e._v("Center bottom")]),e._v(" "),t("td",[e._v("Right bottom")])])])]),e._v(" "),t("h2",{attrs:{id:"watermark-percentage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-percentage"}},[e._v("#")]),e._v(" Watermark percentage")]),e._v(" "),t("p",[e._v("The watermark size expressed in percentage of the target area.")]),e._v(" "),t("h2",{attrs:{id:"watermark-margin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-margin"}},[e._v("#")]),e._v(" Watermark margin")]),e._v(" "),t("p",[e._v("A margin to implement around the watermark. Useful if the watermark is not implemented at center/center.")]),e._v(" "),t("h2",{attrs:{id:"watermark-opacity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#watermark-opacity"}},[e._v("#")]),e._v(" Watermark opacity")]),e._v(" "),t("p",[e._v("The opacity of the watermark image.")])])}),[],!1,null,null,null);a.default=s.exports}}]);