'use strict';

module.exports = {
    API_ENDPOINTS: {
        SANDBOX: {
            PAYSAFE: 'https://hosted.test.paysafe.com',
        },
        PAYSAFE: 'https://hosted.paysafe.com',
        DEVPAY: 'https://api.devpay.io',
    },

    providerAPIKeyOptions: function(config){
        var uri = this.API_ENDPOINTS.DEVPAY;
        var options = {
            method: 'POST',
            uri: uri+'/v1/general.svc/paysafe/api-key',
            headers:{"Content-Type":"application/json"},
            json: true
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
        var options = {
            method: 'POST',
            uri: uri+'/v1/paymentmethods/create',
            headers:{"Content-Type":"application/json"},
            json: true
        };
        return options;
    },

    paymentIntentAPIOptions: function(config){
        var uri = this.API_ENDPOINTS.DEVPAY;
        var options = {
            method: 'POST',
            uri: uri+'/v1/general/paymentintent',
            headers:{"Content-Type":"application/json"},
            json: true
        };
        return options;
    },
};