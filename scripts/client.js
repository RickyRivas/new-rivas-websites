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
