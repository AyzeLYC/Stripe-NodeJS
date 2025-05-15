// old NodeJS

var stripe = require("stripe");




// modern NodeJS

// dependancies

import Stripe from "stripe";


// settings constant

const settings = {
    
    "api_secret_key": "", // the api private key of your account
    "api_public_key": "", // the api public key of your account
    "default_payment_methods": ["card"], // payment methods to use by default
    "njsv": 0 // Node JS Version
    
};


// classes

class ARGUMENTS {

    constructor() {


        
    };
    
};

// Stripe API functions

async function callPaymentIntentAPI(args) { // to use if you want to make peoples pay once
    
    try {
        
        
        
    } catch(err) {
        
        console.log(`An error has happened while sending the datas to the Stripe Payment Intent API !\nError : ${err} `);
        
    };
    
};

function generatePaymentIntentUrl(args) {
    
    await callPaymentIntentAPI(args).then(function(url) {
        
        return url;
        
    }).catch(function(err) {
        
        console.log(`An error has happened while calling the Stripe Payment Intent API function !\nError : ${err} `);
        
    });
    
};


async function callSetupIntentAPI(args) { // to use if you want to make peoples pay daily, weekly, monthly etc
    
    try {
        
        
        
    } catch(err) {
        
        console.log(`An error has happened while sending the datas to the Stripe Setup Intent API !\nError : ${err} `);
        
    };
    
};

function generateSetupIntentUrl(args) {
    
    await generatePaymentIntentUrl(args).then(function(url) {
        
        return url;
        
    }).catch(function(err) {
        
        console.log(`An error has happened while calling the Stripe Payment Intent API function !\nError : ${err} `);
        
    });
    
};


async function callCheckoutAPI(args) {
    
    try {
        
        var result;
        
        if (args.ftu === "create" || args.ftu === 0) { // if arguments . Function To Use is equal to create or 0 then
            
            const StripeAPISession = await Stripe(settings.api_secret_key).checkout.sessions.create(args.session.datas);
            
        };
        if (args.ftu === "update" || args.ftu === 1) { // if arguments . Function To Use is equal to update or 1 then
            
            const StripeAPISession = await Stripe(settings.api_secret_key).checkout.sessions.update(args.session.datas);
            
        };
        if (args.ftu === "cancel" || args.ftu === 2) { // if arguments . Function To Use is equal to cancel or 2 then
            
            const StripeAPISession = await Stripe(settings.api_secret_key).checkout.sessions.cancel(args.session.datas);
            
        };
        if (args.ftu === "retrieve" || args.ftu === 3) { // if arguments . Function To Use is equal to retrieve or 3 then
            
            const StripeAPISession = await Stripe(settings.api_secret_key).checkout.sessions.retrieve(args.session.datas);
            
        };
        
    } catch(err) {
        
        console.log(`An error has happened while sending the datas to the Stripe Checkout API !\nError : ${err}`);
        
    };
    
};


function generateCheckoutPaymentPageUrl(args) {
    
    await callCheckoutApi(args).then(function(url) {
        
        return url;
        
    }).catch(function(err) {
        
        console.log(`An error has happened while calling the Stripe Checkout API function !\nError : ${err}`);
        
    });
    
};
