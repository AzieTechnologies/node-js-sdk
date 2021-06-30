# node-js-sdk
A Node JS SDK for Devpay Payment Gateway Get your API Keys at https://devpay.io

## Usage
```
const config = {
    sandbox:true,
    accessKey:"ACCESS_KEU",
    shareableKey:"SHAREABLE_KEY",
    accountId:"ACC_ID"
};

const devpayClient = new client.DevpayClient(config);
var payload = { "amount":<amount>,
                "currency":"usd",
                "card":{"cardNum":"XXXX111111000000",
                        "cardExpiry":{"month":"10","year":"2024"},
                        "cvv":"321"},
                "billingAddress":{"country":"US",
                                    "zip":"38138",
                                    "state":"TN",
                                    "street":"123 ABC Lane",
                                    "city":"Memphis"}
               };
devpayClient.confirmPayment(payload).then((payment) => {
    console.log(payment.status);
}).catch((err) => {
    console.log("err);
});
```