$(document).ready(function()  
{
	console.log("Script included!");
	$(".ing input[type=checkbox]").on( "click", function() 
	{
    	// console.log("<input> was clicked"); 
    	var li = $(this).parent();
    	console.log(li);

    	if(this.checked){
    		li.addClass("strike");
    	}
    	else
    	{
    		li.removeClass("strike");
    	}



	});

});


// $('input').on('click') do ||
	
// end
