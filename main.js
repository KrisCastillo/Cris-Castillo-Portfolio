	$('#crisProject').hide();
	$('#crisInfo').hide(); 
	$('#crisBio').hide();
	$('body').on('click','#myBtn', (event) => {
		myPortfolio();
	})

function myPortfolio() {
	$("#crisIntro").hide();
	$("#crisProject").hide();
	$("#crisBio").show();
	$("#crisInfo").show();
	$('body').on('click','#projects', (event) => {
		myWork();
	})
}

function myWork() {
	$("#crisIntro").hide();
	$("#crisBio").hide();
	$("#crisProject").show();	
	$("#crisInfo").show();
}

$('body').on('click','.resume', (event) => {
	myPortfolio();
})

$('body').on('click','.portfolio', (event) => {
	myWork();
})

