// Custom JS for SERIOUSBEARS.NET

/*
if(twitchPlayer.getEnded()){
document.getElementById("responsiveContainerTwitch").style.display = "block";  
}else{
document.getElementById("responsiveContainerGiphy").style.display = "block";
}
*/

function toggleChat(){
  
if(document.getElementById("responsiveContainerChat").style.display == "none" || document.getElementById("responsiveContainerChat").style.display === ""){
  
  document.getElementById("SXSB2017").style.display = "none";
  document.getElementById("responsiveContainerChat").style.display = "block";
  
  }else{
  
  document.getElementById("SXSB2017").style.display = "block";
  document.getElementById("responsiveContainerChat").style.display = "none";
  
  }
  
}