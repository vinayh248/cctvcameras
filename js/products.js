	 
$(document).ready(function(){
	getData();
});

function getData(){
	var path = 'json/products.json';
	$.ajax({
		url:path,
		dataType : 'json',
		cache : false,
		success : renderData,
		error : errorAlert
	});
}

function renderData(jsonData){
	var template; 
	var path = 'template/products.tmpl';
	
	$.ajax({
		url : path, 
		cache: false,
		success : function(source){
			template = Handlebars.compile(source);
			$("body").html(template(jsonData));
			$('#example').dataTable( {
			  "sPaginationType": "full_numbers",
			  "aaSorting": [ [2,'asc'], [3,'desc'], [1,'asc'] ]
			  } );
		}, 
		error : errorAlert
	});
}

function errorAlert(ehr,reason,ex){
	alert("Request was not succeessful :"+reason + ex);
}