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

	var hidden = false;

	$("#hide_photo").on("click", function()
	{
		if (hidden)
		{
			$(".pictures img").show();
			hidden = false;
		}		
		else
		{
		
			$(".pictures img").hide();

			hidden = true;
		}

	});


});


// $('input').on('click') do ||
	
// end
