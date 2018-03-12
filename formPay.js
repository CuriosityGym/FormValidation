<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
<script> 
function completePayment()
{
 var options = {
    "key": "rzp_test_oJXuyp0VIc25Pu",
    "amount": "1250000", // 2000 paise = INR 20
    "name": "CuriosityGym",
    "description": "Registration for Innovation Hub",	
    
    "handler": function (response){
        //alert();
		console.log(jQuery(".content").children().not(".success_payment_message").hide());
		jQuery("#transaction_id").html(response.razorpay_payment_id)
		jQuery(".success_payment_message").show();
		
    },
    
    "theme": {
        "color": "#08c"
    },
	"notes":{}
};
	fieldIDs=["field_cat_fname", "field_cat_lname","field_cat_std", "field_cat_div"];
	
	if(validateFields(fieldIDs))
	{
		jQuery(".error_message_payment_container").hide();
		updatedOptions=constructNotes(fieldIDs, options)
		console.log(updatedOptions);
		//constructNotes(fieldIDs)
		var rzp1 = new Razorpay(updatedOptions);
		rzp1.open();
	}
	else
	{
		jQuery(".error_message_payment_container").show();
	}
  //var rzp1 = new Razorpay(options);
  //rzp1.open();
  
 

}

function validateFields(fields)
{
	for(i=0;i<fields.length;i++)
	{
			fieldValue=jQuery("#"+fields[i]).val()+"";
			if(fieldValue=="")
			{
				return false;
			}
			
	}
	return true;
}

function constructNotes(fields, options)
{
	
	for(i=0;i<fields.length;i++)
	{
			
			fieldName=fields[i];
			fieldValue=jQuery("#"+fieldName).val()+"";	
			options.notes[fieldName]=fieldValue;   		
			//notesobj.notes[fieldName]=fieldValue  
			
			
	}
	return options;
}


</script>