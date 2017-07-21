var linkHandler = Plaid.create({
  env: 'tartan',
  clientName: 'Stripe / Plaid Test',
  key: 'd1e93929b538792df368bd04504078',
  product: 'auth',
  selectAccount: true,
  onSuccess: function(public_token, metadata) {

    var options = {
        publicToken: public_token,
        accountId: metadata.account_id
    };

    $.ajax({
        method: 'POST',
        url: '/plaidAuthenticate',
        contentType: 'application/json; charset=utf-8',
        xhrFields: {
            withCredentials: true
        },
        data: JSON.stringify(options)
    });
  },
});

// Trigger the Link UI
document.getElementById('linkButton').onclick = function() {
  linkHandler.open();
};