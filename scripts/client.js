var stripe = Stripe(
  "pk_test_51J3aqYCroHKRNssY92p9LNBrx6eGtkaKBHuIIlOFPgshrRwMrvYXlvTthhXBea7JvGFKh1gLhPIu5c1KM6KAdk4500cfAjeXSS",
  {
    apiVersion: "2020-08-27",
  }
);
var paymentRequest = stripe.paymentRequest({
  country: "US",
  currency: "usd",
  total: {
    label: "Demo total",
    amount: 1099,
  },
  requestPayerName: true,
  requestPayerEmail: true,
});
var elements = stripe.elements();
var prButton = elements.create("paymentRequestButton", {
  paymentRequest: paymentRequest,
});

// Check the availability of the Payment Request API first.
paymentRequest.canMakePayment().then(function (result) {
  if (result) {
    prButton.mount("#payment-request-button");
  } else {
    document.getElementById("payment-request-button").style.display = "none";
  }
});
