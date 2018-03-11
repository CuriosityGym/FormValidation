function completePayment()
{
 var options = {
    "key": "rzp_test_WGzU46Mxz4bbRd",
    "amount": "1250000", // 2000 paise = INR 20
    "name": "Merchant Name",
    "description": "Purchase Description",
	
	
    
    "handler": function (response){
        alert(response.razorpay_payment_id);
    },
    "prefill": {
        "name": "Harshil Mathur",
        "email": "harshil@razorpay.com"
    },
    "notes": {
        "studentName": "Hello World",
		"studentName1": "Hello World1",
		"studentName2": "Hello World2",
		
    },
    "theme": {
        "color": "#F37254"
    }
};
  var rzp1 = new Razorpay(options);
 rzp1.open();
 e.preventDefault();

}