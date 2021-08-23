
var qs = new URLSearchParams(window.location.search);
var q_s = qs.toString();

var pages;

var url = 'https://peviitor.ro/search/?'+q_s;
var item_html = "";

function search () {

fetch(url)
   .then(function(response) {
             response.text().then(function(text) {
                
				var ser_message = JSON.parse(text);
				var results_nr = ser_message.response.numFound;
				    
					pages = Math.floor(results_nr / 10)+1;
				if (typeof pages !== 'undefined') {
						showPages(pages);}
	
					
				var docs = ser_message.response.docs;
				var rezno ="";
				if (  results_nr === 0 ) {rezno = "nici un rezultat";} else {  rezno = results_nr + " rezultate, " +pages+" pagini" ; }
				document.getElementById("resultsno").innerHTML = rezno ;
				
				
				docs.forEach(showResults);
				
  });
})
.catch(err => console.log(err));
}



function showResults(item, index) {
  //console.log(index);

 item_html = item_html + "<li><p>";
 item_html = item_html + "<label class='job_title'>"+"<a href='"+ item.job_link +"' target=_blank>"+ item.job_title +"</a>"+"</label>";
 item_html = item_html + "<label class='company'>"  + item.company +"</label>";
 item_html = item_html + "<label class='location'>"  + item.city +", "+item.country +"</label>";
 item_html = item_html + "</p></li>";
 
 document.getElementById("results").innerHTML = item_html;
}



