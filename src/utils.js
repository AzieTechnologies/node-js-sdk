'use strict';

module.exports = {
    API_ENDPOINTS: {
        SANDBOX: {
            PAYSAFE: 'https://hosted.test.paysafe.com',
            DEVPAY: 'https://sandbox-api.tilled.com'
        },
        PAYSAFE: 'https://hosted.paysafe.com',
        DEVPAY: 'https://api.tilled.com',
    },

    providerAPIKeyOptions: function(config){
        var uri = this.API_ENDPOINTS.DEVPAY;
        if(config.sandbox){
            uri =this.API_ENDPOINTS.SANDBOX.DEVPAY;
        }
        var options = {
            method: 'GET',
            uri: uri+'/v1/payment-providers/paysafe/api-key',
            headers:{"Authorization":"Bearer "+config.shareableKey,
                    "Content-Type":"application/json",
                    "Tilled-Account":config.accountId}
        };
        return options;
    },

    paymentTokenAPIOptions: function(apiKey,config){
        var uri = this.API_ENDPOINTS.PAYSAFE;
        if(config.sandbox){
            uri = this.API_ENDPOINTS.SANDBOX.PAYSAFE;
        }
        var options = {
            method: 'POST',
            uri: uri+'/js/api/v1/tokenize',
            headers:{"X-Paysafe-Credentials":"Basic "+apiKey,
                    "Content-Type":"application/json"},
            json: true
        };
        return options;
    },
    
    paymentMethodAPIOptions: function(config){
        var uri = this.API_ENDPOINTS.DEVPAY;
        if(config.sandbox){
            uri = this.API_ENDPOINTS.SANDBOX.DEVPAY;
        }
        var options = {
            method: 'POST',
            uri: uri+'/v1/payment-methods',
            headers:{"Authorization":"Bearer "+config.shareableKey,
                    "Content-Type":"application/json",
                    "Tilled-Account":config.accountId},
            json: true

        };
        return options;
    },

    paymentIntentAPIOptions: function(config){
        var uri = this.API_ENDPOINTS.DEVPAY;
        if(config.sandbox){
            uri = this.API_ENDPOINTS.SANDBOX.DEVPAY;
        }
        var options = {
            method: 'POST',
            uri: uri+'/v1/payment-intents',
            headers:{"Authorization":"Bearer "+config.accessKey,
                    "Content-Type":"application/json",
                    "Tilled-Account":config.accountId},
            json: true
        };
        return options;
    }
};