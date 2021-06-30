
const request = require('request-promise');
const utils = require('./utils');

class DevpayClient {
    
    constructor(config) {
        this.config = config;
    }

    confirmPayment(paymentDetails) {
     return this.paysafekey().then((providerApiKey) => {
        return this.paymentToken(providerApiKey, paymentDetails)
     }).then((paymentToken) => {
        return this.paymentMethod(paymentToken,paymentDetails);
     }).then((method) => {
        return this.paymentIntent(method,paymentDetails);
     });
    }

    paysafekey() {
        var options = utils.providerAPIKeyOptions(this.config);

        if(this.config.debug) {
            console.log("Request -"+JSON.stringify(options));
        }

        return request(options)
        .then(function (response) {
            if(this.config.debug) {
                console.log("Response -"+response);
            }
            return JSON.parse(response)["provider_api_key"];
        });
    }

    paymentToken(apiKey,paymentDetail) {
        var options = utils.paymentTokenAPIOptions(apiKey, this.config);
        options.body = paymentDetail;

        if(this.config.debug) {
            console.log("Request -"+JSON.stringify(options));
        }
        return request(options)
        .then(function (response) {

            if(this.config.debug) {
                console.log("Response -"+JSON.stringify(response));
            }
            return JSON.parse(JSON.stringify(response))["paymentToken"];
        });
    }

    paymentMethod(paymentToken,paymentDetail) {
        
        var payload = {
            "payment_token":paymentToken,
            "type":"card",
            "billing_details":{
                "amount":paymentDetail.amount,
                "currency":paymentDetail.currency,
                "address":paymentDetail.billingAddress
            }
        };
    
        var options = utils.paymentMethodAPIOptions(this.config);
        options.body = payload;

        if(this.config.debug) {
            console.log("Request -"+JSON.stringify(options));
        }
        return request(options)
        .then(function (response) {
            if(this.config.debug) {
                console.log("Response -"+JSON.stringify(response));
            }
            return JSON.parse(JSON.stringify(response));
        });
    }

    paymentIntent(paymentMethod, paymentDetail) {
        var payload = {
            "amount":paymentDetail.amount,
            "type":"card",
            "currency":paymentDetail.currency,
            "capture_method":"automatic",
            "payment_method_types":["card"],
            "payment_method_id":paymentMethod.id,
            "confirm":true,
            "metaData":paymentDetail.metaData 
        };

        var options = utils.paymentIntentAPIOptions(this.config);
        options.body = payload;

        if(this.config.debug) {
            console.log("Request -"+JSON.stringify(options));
        }

        return request(options)
        .then(function (response) {
            if(this.config.debug) {
                console.log("Response -"+JSON.stringify(response));
            }
            return JSON.parse(JSON.stringify(response));
        });
    }
}

module.exports = {
    DevpayClient: DevpayClient
};

