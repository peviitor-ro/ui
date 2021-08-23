function getRandom() {
var url_r = 'https://api.peviitor.ro/v1/random/';
fetch(url_r)
   .then(function(response) {
             response.text().then(function(text) {
                
				var ser_message = JSON.parse(text);
				var docs = ser_message.response.docs;
				 
				document.getElementById("job_title_r").innerHTML = ser_message.response.docs[0].job_title ;
				document.getElementById("company_r").innerHTML  = ser_message.response.docs[0].company ;
				document.getElementById("location_r").innerHTML  = ser_message.response.docs[0].country ;
				document.getElementById("link_r").href  = ser_message.response.docs[0].job_link ;
				
				
				
				
  });
})
.catch(err => console.log(err));
}
