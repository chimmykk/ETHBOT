# ETHBOT
This bot will help user to automatically transfer eth received to any given ERC20 address automatically.

# RUNNING THE BOT

FOR LOCAL DEPLOYMENT >> INSTALL NODE JS, RUN THE BOT.JS 
COMMAND -- NODE BOT.JS

FOR CLOUD DEPLOYMENT >> FOLLOW UP, USE AWS OR AZURE.

# SECURITY ISSUES
FOR INSTANCE THE PRIVATE KEY IS AVAILABLE UNDER THE BOT.JS FILE
HIGHLY ENCOURAGE YOU TO  MAP IT TO A JSON STRING.


#REFERENCE

ObjectMapper mapper = new ObjectMapper();
String jsonInString = "{'name' : 'xyz'}";

//JSON from file to Object
User user = mapper.readValue(new File("c:\\user.json"), User.class);

//JSON from String to Object
User user = mapper.readValue(jsonInString, User.class);

