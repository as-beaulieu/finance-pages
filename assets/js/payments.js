$(function() {
	$('#payment-form-ach').click(achSubmit);
});

function achSubmit(e) {
	e.preventDefault();

	var linkHandler = Plaid.create({
	  env: 'tartan',
	  clientName: 'AdvicePay',
	  key: 'd1e93929b538792df368bd04504078',
	  product: 'auth',
	  selectAccount: true,
	  onSuccess: function(public_token, metadata) {

	    var options = {
	        publicToken: public_token,
	        accountId: metadata.account_id
	    };

	    console.log(options);

	    $.ajax({
	        method: 'POST',
	        url: '/plaidAuthenticate',
	        contentType: 'application/json; charset=utf-8',
	        xhrFields: {
	            withCredentials: true
	        },
	        data: JSON.stringify(options)
	    }).done(function() {
	    	location.reload();
	    }).fail(function() {
	    	console.log('error');
	    });
	  },
	});

	linkHandler.open();
}