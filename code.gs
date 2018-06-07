var token = "";
var telegramUrl = "https://api.telegram.org/bot" + token;
var webAppUrl = "";

function getMe() {
  var url = telegramUrl + "/getMe";
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText());
}

function setWebhook() {
  var url = telegramUrl + "/setWebhook?url=" + webAppUrl;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText()); 
}

function sendMessage(id,answer) {
  var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" + answer;
  var response = UrlFetchApp.fetch(url);
  Logger.log(response.getContentText()); 
}

function doGet(e) {
  return HtmlService.createHtmlOutput("Hi there");
  
}

function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var text = data.message.text;
  var id = data.message.chat.id;
  var name = data.message.chat.first_name;
   
  var answer = name + "," + "Hello world!!";
  sendMessage(id,answer);
  
}
