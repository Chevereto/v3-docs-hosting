(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{400:function(e,t,a){"use strict";a.r(t);var o=a(49),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"external-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-storage"}},[e._v("#")]),e._v(" External storage")]),e._v(" "),a("p",[e._v("External storage allows to use external servers for storing user uploads, which helps to leverage your server load and deliver a more reliable website. If you use multiple external storage servers, it will help to distribute the traffic of these assets.")]),e._v(" "),a("h2",{attrs:{id:"supported-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-apis"}},[e._v("#")]),e._v(" Supported APIs")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#external-storage"}},[e._v("External storage")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#supported-apis"}},[e._v("Supported APIs")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#how-it-works"}},[e._v("How it works")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#storage-url"}},[e._v("Storage URL")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#storage-url-with-cdn"}},[e._v("Storage URL with CDN")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#external-storage-apis"}},[e._v("External storage APIs")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#alibaba-cloud-oss"}},[e._v("Alibaba Cloud OSS")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#amazon-s3"}},[e._v("Amazon S3")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#backblaze-b2"}},[e._v("Backblaze B2")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#ftp"}},[e._v("FTP")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#google-cloud"}},[e._v("Google Cloud")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#local"}},[e._v("Local")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#microsoft-azure"}},[e._v("Microsoft Azure")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#openstack"}},[e._v("OpenStack")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#s3-compatible"}},[e._v("S3 Compatible")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#sftp"}},[e._v("SFTP")])])])])])])]),e._v(" "),a("h2",{attrs:{id:"how-it-works"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-it-works"}},[e._v("#")]),e._v(" How it works")]),e._v(" "),a("p",[e._v("External storage works in two layers:")]),e._v(" "),a("ul",[a("li",[e._v("Backend: Uploads objects to the target server")]),e._v(" "),a("li",[e._v("Frontend: Access uploaded objects directly")])]),e._v(" "),a("h3",{attrs:{id:"storage-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-url"}},[e._v("#")]),e._v(" Storage URL")]),e._v(" "),a("p",[e._v("Chevereto maps each image to the corresponding storage server using the given Storage URL, which acts as a base URL to locate that file.")]),e._v(" "),a("p",[e._v("For example, using Amazon S3 with direct storage:")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Bucket")]),e._v(" "),a("td",[a("code",[e._v("my-bucket")])])]),e._v(" "),a("tr",[a("td",[e._v("Storage URL")]),e._v(" "),a("td",[a("code",[e._v("https://s3.amazonaws.com/my-bucket/")])])]),e._v(" "),a("tr",[a("td",[e._v("Stored image")]),e._v(" "),a("td",[a("code",[e._v("my-bucket/image.jpg")])])]),e._v(" "),a("tr",[a("td",[e._v("Mapped URL")]),e._v(" "),a("td",[a("code",[e._v("https://s3.amazonaws.com/my-bucket/image.jpg")])])])])]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("CNAME")]),e._v(" "),a("p",[e._v("Is recommended that you use URLs that match your domain so try to take advantage of using a "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/CNAME_record",target:"_blank",rel:"noopener noreferrer"}},[e._v("CNAME record"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("p",[e._v("Another example, Amazon S3 with folder-based storage and custom CNAME ("),a("code",[e._v("img.domain.com")]),e._v("):")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Property")]),e._v(" "),a("th",[e._v("Value")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Bucket")]),e._v(" "),a("td",[a("code",[e._v("my-bucket")])])]),e._v(" "),a("tr",[a("td",[e._v("Storage URL")]),e._v(" "),a("td",[a("code",[e._v("https://img.domain.com/my-bucket/")])])]),e._v(" "),a("tr",[a("td",[e._v("Stored image")]),e._v(" "),a("td",[a("code",[e._v("/my-bucket/2020/10/06/image.jpg")])])]),e._v(" "),a("tr",[a("td",[e._v("Mapped URL")]),e._v(" "),a("td",[a("code",[e._v("https://img.domain.com/my-bucket/2020/10/06/image.jpg")])])])])]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("URL resolver")]),e._v(" "),a("p",[e._v("The mapped URL MUST resolve to the given resource. Chevereto won't resolve this URL, it will only handle the mapping. Check the documentation of your external storage to retrieve this URL or how to customize it to use your own domain.")])]),e._v(" "),a("h3",{attrs:{id:"storage-url-with-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storage-url-with-cdn"}},[e._v("#")]),e._v(" Storage URL with CDN")]),e._v(" "),a("p",[e._v("Easily add a CDN for each storage you want to use. You only need to go to your CDN provider and create a pull zone for the origin storage URL.")]),e._v(" "),a("p",[e._v("If you are using Amazon S3, the source (origin) URL will be something like this:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("https://s3.amazonaws.com/my-bucket/\n")])])]),a("p",[e._v("The CDN URL provided by your CDN service will be something like this:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("https://pullzone-url.at.cdn-service.com/\n")])])]),a("p",[e._v("Adding a CNAME record for the above URL will allow you to end up with a Storage URL like this:")]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("https://s3-cdn.domain.com/\n")])])]),a("h2",{attrs:{id:"external-storage-apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#external-storage-apis"}},[e._v("#")]),e._v(" External storage APIs")]),e._v(" "),a("h3",{attrs:{id:"alibaba-cloud-oss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#alibaba-cloud-oss"}},[e._v("#")]),e._v(" Alibaba Cloud OSS")]),e._v(" "),a("p",[e._v("The Alibaba Cloud OSS API allows to upload images to "),a("a",{attrs:{href:"https://www.alibabacloud.com/product/oss/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Alibaba Cloud (Aliyun) Object Storage System (OSS)"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"amazon-s3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-s3"}},[e._v("#")]),e._v(" Amazon S3")]),e._v(" "),a("p",[e._v("The Amazon S3 API allows to upload images to an "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Amazon_S3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon S3"),a("OutboundLink")],1),e._v(" bucket. You will need an "),a("a",{attrs:{href:"https://aws.amazon.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Web Services"),a("OutboundLink")],1),e._v(" (AWS) account for this.")]),e._v(" "),a("ul",[a("li",[e._v("To setup Amazon S3:\n"),a("ul",[a("li",[e._v("Create access credentials from "),a("a",{attrs:{href:"https://console.aws.amazon.com/iam/home?#users",target:"_blank",rel:"noopener noreferrer"}},[e._v("Identity and Access Management"),a("OutboundLink")],1),e._v(" console")]),e._v(" "),a("li",[e._v('Click on "Create New Users", make sure to enable "Programmatic access"')]),e._v(" "),a("li",[e._v("On permissions, associate "),a("strong",[e._v("AmazonS3FullAccess")])]),e._v(" "),a("li",[e._v("Store the "),a("strong",[e._v("user name")]),e._v(", "),a("strong",[e._v("Access Key ID")]),e._v(" and "),a("strong",[e._v("Secret Access Key")]),e._v(" at the end of the process")]),e._v(" "),a("li",[e._v("Create a bucket from the "),a("a",{attrs:{href:"https://console.aws.amazon.com/s3",target:"_blank",rel:"noopener noreferrer"}},[e._v("S3 console"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v('Click on "Create a Bucket" and proceed to create a bucket')]),e._v(" "),a("li",[e._v('On permissions, make sure "Block new public ACLs" and "Remove public access" are unchecked (Public access settings)')]),e._v(" "),a("li",[e._v("Store the "),a("strong",[e._v("bucket name")]),e._v(" and the "),a("strong",[e._v("region")])]),e._v(" "),a("li",[e._v("You don't need to setup logging")])])])]),e._v(" "),a("p",[e._v("If you want to use a custom domain follow the "),a("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/dev/VirtualHosting.html#VirtualHostingCustomURLs",target:"_blank",rel:"noopener noreferrer"}},[e._v("CNAME"),a("OutboundLink")],1),e._v(" documentation. Otherwise just make sure that the "),a("a",{attrs:{href:"#storage-url"}},[e._v("Storage URL")]),e._v(" ends with "),a("code",[e._v("/<your_bucket_name>/")])]),e._v(" "),a("h3",{attrs:{id:"backblaze-b2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backblaze-b2"}},[e._v("#")]),e._v(" Backblaze B2")]),e._v(" "),a("p",[e._v("The Backblaze B2 API allows to upload images to "),a("a",{attrs:{href:"https://www.backblaze.com/b2/cloud-storage.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Backblaze's cloud storage system"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("Go to "),a("strong",[e._v("B2 Cloud Storage")]),e._v(" and click on "),a("strong",[e._v("Create a Bucket")])]),e._v(" "),a("li",[e._v("Files in Bucket are: "),a("strong",[e._v("Public")])]),e._v(" "),a("li",[e._v("Go to "),a("strong",[e._v("App Keys")]),e._v(" and click on "),a("strong",[e._v("Add a New Application Key")]),e._v(" "),a("ol",[a("li",[e._v("Type of Access: "),a("strong",[e._v("Read and Write")])])])]),e._v(" "),a("li",[e._v("When done, use the following reference:")])]),e._v(" "),a("p",[e._v("Select "),a("strong",[e._v("S3 Compatible")]),e._v(" storage API for "),a("strong",[e._v("B2 S3 Storage")]),e._v(" (current offering):")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("B2 Value")]),e._v(" "),a("th",[e._v("Chevereto Storage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Region")]),e._v(" "),a("td",[a("code",[e._v("us-west-002")]),e._v(" (take note from your Endpoint)")])]),e._v(" "),a("tr",[a("td",[e._v("keyID")]),e._v(" "),a("td",[e._v("Storage key")])]),e._v(" "),a("tr",[a("td",[e._v("applicationKey")]),e._v(" "),a("td",[e._v("Storage secret")])]),e._v(" "),a("tr",[a("td",[e._v("Endpoint*")]),e._v(" "),a("td",[a("code",[e._v("https://s3.us-west-002.backblazeb2.com")])])]),e._v(" "),a("tr",[a("td",[e._v("URL")]),e._v(" "),a("td",[a("code",[e._v("https://f002.backblazeb2.com/file/your_bucket/")])])])])]),e._v(" "),a("blockquote",[a("p",[e._v("(*) You will find the endpoint under the bucket details.")])]),e._v(" "),a("p",[e._v("Select "),a("strong",[e._v("Backblaze B2")]),e._v(" storage API for legacy "),a("strong",[e._v("B2 Storage")]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("B2 Value")]),e._v(" "),a("th",[e._v("Chevereto Storage")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("keyID")]),e._v(" "),a("td",[e._v("Storage key (Account ID)")])]),e._v(" "),a("tr",[a("td",[e._v("applicationKey")]),e._v(" "),a("td",[e._v("Storage secret (Master Application Key)")])])])]),e._v(" "),a("h3",{attrs:{id:"ftp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp"}},[e._v("#")]),e._v(" FTP")]),e._v(" "),a("p",[e._v("The FTP API allows to upload images to a server implementing the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/File_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("File Transfer Protocol"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"google-cloud"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud"}},[e._v("#")]),e._v(" Google Cloud")]),e._v(" "),a("p",[e._v("The Google Cloud API allows to upload images to a Google Cloud Storage bucket. You will need a "),a("a",{attrs:{href:"https://cloud.google.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Cloud"),a("OutboundLink")],1),e._v(" service account and "),a("a",{attrs:{href:"https://cloud.google.com/storage/docs/signup",target:"_blank",rel:"noopener noreferrer"}},[e._v("activate cloud storage"),a("OutboundLink")],1),e._v(" for this.")]),e._v(" "),a("p",[e._v("To setup Google Cloud Storage:")]),e._v(" "),a("ul",[a("li",[e._v("Create a project")]),e._v(" "),a("li",[e._v("Go to "),a("strong",[e._v("APIs & services")]),e._v(" dashboard and make sure that "),a("strong",[e._v("Google Cloud Storage JSON API")]),e._v(" is enabled.\n"),a("ul",[a("li",[e._v("If is not enabled click on "),a("strong",[e._v("Enable API and Services")]),e._v(" and enable Google Cloud Storage JSON API")])])]),e._v(" "),a("li",[e._v("Go to "),a("strong",[e._v("Cloud Storage")]),e._v(" then click on "),a("strong",[e._v("Browser")])]),e._v(" "),a("li",[e._v("Create a bucket by clicking "),a("strong",[e._v("Create bucket")]),e._v(" button. Make sure to:\n"),a("ul",[a("li",[e._v("Prevent public access: Unselect "),a("strong",[e._v("Enforce public access prevention on this bucket")]),e._v(" as you want public access for the bucket")]),e._v(" "),a("li",[e._v("Access control: Fine-grained")])])]),e._v(" "),a("li",[e._v("Go to "),a("strong",[e._v("Credentials")]),e._v(" under APIs & services, click on "),a("strong",[e._v("Create credentials")]),e._v(" then click on "),a("strong",[e._v("Service account")]),e._v(". Make sure to use the following settings:\n"),a("ul",[a("li",[e._v("Grant access: Role owner")]),e._v(" "),a("li",[e._v("Key type: JSON")])])]),e._v(" "),a("li",[e._v("When done, go to your newly created service account under "),a("strong",[e._v("Service Accounts")])]),e._v(" "),a("li",[e._v("Go yo "),a("strong",[e._v("keys")]),e._v(" and create a new "),a("strong",[e._v("JSON key")])]),e._v(" "),a("li",[e._v("Your browser will start to download the JSON key file, the contents of the file is what you need to paste on Chevereto's "),a("strong",[e._v("Secret Key")]),e._v(" textarea")])]),e._v(" "),a("h3",{attrs:{id:"local"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local"}},[e._v("#")]),e._v(" Local")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/features/settings/external-storage.html#local"}},[e._v("Local API")]),e._v(" allows to upload images to any filesystem path in the server.")],1),e._v(" "),a("h3",{attrs:{id:"microsoft-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#microsoft-azure"}},[e._v("#")]),e._v(" Microsoft Azure")]),e._v(" "),a("p",[e._v("The Microsoft Azure API allows to upload images to "),a("a",{attrs:{href:"https://azure.microsoft.com/en-us/services/storage/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Microsoft Azure Storage"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"openstack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#openstack"}},[e._v("#")]),e._v(" OpenStack")]),e._v(" "),a("p",[e._v("The "),a("RouterLink",{attrs:{to:"/features/settings/external-storage.html#openstack"}},[e._v("OpenStack API")]),e._v(" allows to upload images to an "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/OpenStack",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenStack"),a("OutboundLink")],1),e._v(" container.")],1),e._v(" "),a("ul",[a("li",[e._v("OpenStack configuration for RunAbove:\n"),a("ul",[a("li",[e._v("Identity URL: "),a("a",{attrs:{href:"https://auth.Runabove.io/v2.0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://auth.Runabove.io/v2.0"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Username: Your RunAbove username")]),e._v(" "),a("li",[e._v("Password: Your RunAbove password")]),e._v(" "),a("li",[e._v("Region: "),a("code",[e._v("SBG-1")]),e._v(" or "),a("code",[e._v("BHS-1")]),e._v(" This is the data center where your container was created")]),e._v(" "),a("li",[e._v("Container: Name of your created container")]),e._v(" "),a("li",[e._v("Tenant id: Leave it blank")]),e._v(" "),a("li",[e._v("Tenant name: Your "),a("code",[e._v("project id")]),e._v(", found on OpenStack Horizon on the left side (CURRENT PROJECT))")]),e._v(" "),a("li",[e._v("URL: Your URL to access the container (see "),a("a",{attrs:{href:"https://community.runabove.com/kb/en/object-storage/how-to-put-object-storage-behind-your-domain-name.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("RunAbove CNAME"),a("OutboundLink")],1),e._v(")")])])])]),e._v(" "),a("h3",{attrs:{id:"s3-compatible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#s3-compatible"}},[e._v("#")]),e._v(" S3 Compatible")]),e._v(" "),a("p",[e._v('The S3 Compatible API allows to upload images to any server implementing the Amazon S3 standard, also known as "AWS S3 API". The configuration is exactly the same as Amazon S3, but it requires to provide the provider endpoint.')]),e._v(" "),a("p",[e._v("Some providers supporting S3 API are:")]),e._v(" "),a("ul",[a("li",[e._v("Vultr Object Storage (use region "),a("code",[e._v("us-east-1")]),e._v(")")]),e._v(" "),a("li",[e._v("Ceph")]),e._v(" "),a("li",[e._v("DigitalOcean Spaces")]),e._v(" "),a("li",[e._v("Dreamhost Cloud Storage")]),e._v(" "),a("li",[e._v("IBM COS S3")]),e._v(" "),a("li",[e._v("Minio")]),e._v(" "),a("li",[e._v("Scaleway")]),e._v(" "),a("li",[e._v("StackPath")]),e._v(" "),a("li",[e._v("Tencent Cloud Object Storage (COS)")]),e._v(" "),a("li",[e._v("Wasabi")])]),e._v(" "),a("h3",{attrs:{id:"sftp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sftp"}},[e._v("#")]),e._v(" SFTP")]),e._v(" "),a("p",[e._v("The SFTP API allows to upload images to a server implementing the "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol",target:"_blank",rel:"noopener noreferrer"}},[e._v("SSH File Transfer Protocol"),a("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);