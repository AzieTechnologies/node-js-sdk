# Devpay Node-js SDK
A Node JS SDK for Devpay Payment Gateway Get your API Keys at https://devpay.io

<!-- LOGO -->
<a href="https://devpay.io/" target="_blank"><img align="left" width=200px src="https://devpay.io/wp-content/uploads/2021/07/Logo.png"></a>

<br>
<br>

<!-- BADGES -->
![GitHub contributors](https://img.shields.io/github/contributors/dev-pay/ios-sdk?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/dev-pay/ios-sdk?style=for-the-badge)
![GitHub Repo stars](https://img.shields.io/github/stars/dev-pay/ios-sdk?style=for-the-badge)
![GitHub issues](https://img.shields.io/github/issues-raw/dev-pay/ios-sdk?style=for-the-badge)
<a herf="#"><img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/></a>
<!-- [![MIT License][license-shield]](#) -->

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
## Roadmap

See the [open issues](https://github.com/github_username/repo_name/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

<img align="right" width=400px src="./Read me Assets/ni8-dev-gif.gif" alt="gif">

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




<!-- CONTACT -->
## Connect with Devpay Inc <img src="https://bit.ly/3dAyMNf" width="60px" alt="handshake"/>
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
## API Documentation

<a href="https://bit.ly/2VUDkYB/" target="_blank">
    <img src="https://bit.ly/2VUDkYB" alt="website">
