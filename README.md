# Devpay Node-js SDK
A Node JS SDK for Devpay Payment Gateway Get your API Keys at https://devpay.io

<!-- LOGO -->
<a href="https://devpay.io/" target="_blank"><img align="left" width=200px src="https://devpay.io/wp-content/uploads/2021/07/Logo.png"></a>

<br>
<br>

<!-- BADGES -->
![GitHub followers](https://img.shields.io/github/followers/dev-pay?style=social)
![GitHub all releases](https://img.shields.io/github/downloads/dev-pay/node-js-sdk/total?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/dev-pay/node-js-sdk?style=plastic)
![GitHub](https://img.shields.io/github/license/dev-pay/node-js-sdk?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/dev-pay/node-js-sdk?style=plastic)
![node-current](https://img.shields.io/node/v/npm?style=plastic)
![Maintenance](https://img.shields.io/maintenance/yes/2021?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/dev-pay/node-js-sdk?style=plastic)

## Integration
```
npm install git+https://github.com/dev-pay/node-js-sdk.git

```

## Usage
```javascript
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
<!-- ROADMAP -->
## Please report any Issues

See the [open issues](https://github.com/dev-pay/node-js-sdk/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

<img align="right" width=200px src="https://bit.ly/2W1p9kD" alt="gif">

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- CONTACT -->
## Connect with Devpay Inc <img src="https://bit.ly/2W1p9kD" width="60px" alt="handshake"/>
<a href="https://twitter.com/DevpayInc" target="_blank">
    <img src="https://bit.ly/3hQgnOJ" alt="twitter">
</a>
<a href="https://www.linkedin.com/showcase/devpay" target="_blank">
    <img src="https://bit.ly/3kBedoc" alt="linkedIN">
</a>
<a href="https://www.instagram.com/devpay/" target="_blank">
    <img src="https://bit.ly/2TrIXgc" alt="instagram">
</a>
<a href="https://devpay.io/" target="_blank">
    <img src="https://bit.ly/3rn81Bt" alt="website">
</a>

<!-- ACKNOWLEDGEMENTS -->
## Click Below for our API Documentation


<a href="https://docs.devpay.io/" target="_blank"><img align="left" width=300px src="https://bit.ly/2VUDkYB"></a>
