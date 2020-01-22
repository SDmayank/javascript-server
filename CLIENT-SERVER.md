# Client-Server
![](https://media.prod.mdn.mozit.cloud/attachments/2016/09/04/13841/3320b8e8984e7ab1fa72124df678693c/Basic%20Static%20App%20Server.png)
# [How a request served](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)
 ### Objective
 To understand client-server interactions in a dynamic website, and in particular what operations need to be performed by server-side code
  # The Request include:
  **1. A URL identifying the target server and resource e.g. an HTML file, a particular data point on the server, or a tool to run**
  **2. A method that defines the required action The different methods/verbs and their associated actions are listed below**
 (i)**GET**: Get a specific resource (e.g. an HTML file containing information about a product, or a list of products). 
(ii)**POST**: Create a new resource (e.g. add a new article to a wiki, add a new contact to a database). 
(iii)**HEAD**: Get the metadata information about a specific resource without getting the body like GET would.GET request to download the resource if it has changed. 
(iv)**PUT**: Update an existing resource (or create a new one if it doesn't exist).
(v)**DELETE**: Delete the specified resource.
 (vi) **TRACE**, **OPTIONS**, **CONNECT** **PATCH** and many more
 
## The Response
 1.The first line includes the response code 200 OK, which tells us that the request succeeded.


