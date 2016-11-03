'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = 'amzn1.ask.skill.844c7c57-8faa-4a60-9307-994dd3b1e6f1';
var recipes = require('./recipes');

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    //Use LaunchRequest, instead of NewSession if you want to use the one-shot model
    // Alexa, ask [my-skill-invocation-name] to (do something)...
    'NewSession': function () {
        this.attributes['speechOutput'] = this.t("WELCOME_MESSAGE", this.t("SKILL_NAME"));
        // If the user either does not reply to the welcome message or says something that is not
        // understood, they will be prompted again with this text.
        this.attributes['repromptSpeech'] = this.t("WELCOME_REPROMT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },

    'NearestTubeIntent': function () {
        var locationSlot = this.event.request.intent.slots.Location;
        var locationName;
        if (locationSlot && locationSlot.value) {
            locationName = locationSlot.value.toLowerCase();
        }

        var cardTitle = this.t("DISPLAY_CARD_TITLE", this.t("SKILL_NAME"), locationName);
        var recipes = this.t("TUBES");
        var recipe = recipes[locationName];

        if (recipe) {
            this.attributes['speechOutput'] = recipe;
            this.attributes['repromptSpeech'] = this.t("RECIPE_REPEAT_MESSAGE");
            this.emit(':askWithCard', recipe, this.attributes['repromptSpeech'], cardTitle, recipe);
        } else {
            var speechOutput = this.t("RECIPE_NOT_FOUND_MESSAGE");
            var repromptSpeech = this.t("RECIPE_NOT_FOUND_REPROMPT");
            if (itemName) {
                speechOutput += this.t("RECIPE_NOT_FOUND_WITH_ITEM_NAME", itemName);
            } else {
                speechOutput += this.t("RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME");
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },

    'NearestRailIntent': function () {
        var locationSlot = this.event.request.intent.slots.Location;
        var locationName;
        if (locationSlot && locationSlot.value) {
            locationName = locationSlot.value.toLowerCase();
        }

        var cardTitle = this.t("DISPLAY_CARD_TITLE", this.t("SKILL_NAME"), locationName);
        var recipes = this.t("RAIL");
        var recipe = recipes[locationName];

        if (recipe) {
            this.attributes['speechOutput'] = recipe;
            this.attributes['repromptSpeech'] = this.t("RECIPE_REPEAT_MESSAGE");
            this.emit(':askWithCard', recipe, this.attributes['repromptSpeech'], cardTitle, recipe);
        } else {
            var speechOutput = this.t("LOCATION_NOT_FOUND");
            var repromptSpeech = this.t("RECIPE_NOT_FOUND_REPROMPT");

            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'BurgerIntent': function () {
        var locationSlot = this.event.request.intent.slots.Location;
        var locationName;
        if (locationSlot && locationSlot.value) {
            locationName = locationSlot.value.toLowerCase();
        }

        var cardTitle = this.t("DISPLAY_CARD_TITLE", this.t("SKILL_NAME"), locationName);
        var recipes = this.t("BURGER");
        var recipe = recipes[locationName];

        if (recipe) {
            this.attributes['speechOutput'] = recipe;
            this.attributes['repromptSpeech'] = this.t("RECIPE_REPEAT_MESSAGE");
            this.emit(':askWithCard', recipe, this.attributes['repromptSpeech'], cardTitle, recipe);
        } else {
            var speechOutput = this.t("LOCATION_NOT_FOUND");
            var repromptSpeech = this.t("RECIPE_NOT_FOUND_REPROMPT");

            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'CoffeeIntent': function () {
        var locationSlot = this.event.request.intent.slots.Location;
        var locationName;
        if (locationSlot && locationSlot.value) {
            locationName = locationSlot.value.toLowerCase();
        }

        var cardTitle = this.t("DISPLAY_CARD_TITLE", this.t("SKILL_NAME"), locationName);
        var recipes = this.t("COFFEE");
        var recipe = recipes[locationName];

        if (recipe) {
            this.attributes['speechOutput'] = recipe;
            this.attributes['repromptSpeech'] = this.t("RECIPE_REPEAT_MESSAGE");
            this.emit(':askWithCard', recipe, this.attributes['repromptSpeech'], cardTitle, recipe);
        } else {
            var speechOutput = this.t("LOCATION_NOT_FOUND");
            var repromptSpeech = this.t("RECIPE_NOT_FOUND_REPROMPT");

            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'RecipeIntent': function () {
        var itemSlot = this.event.request.intent.slots.Item;
        var itemName;
        if (itemSlot && itemSlot.value) {
            itemName = itemSlot.value.toLowerCase();
        }

        var cardTitle = this.t("DISPLAY_CARD_TITLE", this.t("SKILL_NAME"), itemName);
        var recipes = this.t("RECIPES");
        var recipe = recipes[itemName];

        if (recipe) {
            this.attributes['speechOutput'] = recipe;
            this.attributes['repromptSpeech'] = this.t("RECIPE_REPEAT_MESSAGE");
            this.emit(':askWithCard', recipe, this.attributes['repromptSpeech'], cardTitle, recipe);
        } else {
            var speechOutput = this.t("RECIPE_NOT_FOUND_MESSAGE");
            var repromptSpeech = this.t("RECIPE_NOT_FOUND_REPROMPT");
            if (itemName) {
                speechOutput += this.t("RECIPE_NOT_FOUND_WITH_ITEM_NAME", itemName);
            } else {
                speechOutput += this.t("RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME");
            }
            speechOutput += repromptSpeech;

            this.attributes['speechOutput'] = speechOutput;
            this.attributes['repromptSpeech'] = repromptSpeech;

            this.emit(':ask', speechOutput, repromptSpeech);
        }
    },
    'TflStatusIntent': function () {
        this.attributes['speechOutput'] = "No service between Edmonton Green and Cheshunt, Good service on all other lines";
        this.attributes['repromptSpeech'] = this.t("HELP_REPROMT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    'SendToCarIntent': function () {
        this.attributes['speechOutput'] = "I've uploaded the directions to your vehicle";
        this.attributes['repromptSpeech'] = this.t("HELP_REPROMT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    'SendToPhoneIntent': function () {
        this.attributes['speechOutput'] = "I've uploaded the directions to your phone";
        this.attributes['repromptSpeech'] = this.t("HELP_REPROMT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    'AMAZON.HelpIntent': function () {
        this.attributes['speechOutput'] = this.t("HELP_MESSAGE");
        this.attributes['repromptSpeech'] = this.t("HELP_REPROMT");
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    'AMAZON.RepeatIntent': function () {
        this.emit(':ask', this.attributes['speechOutput'], this.attributes['repromptSpeech'])
    },
    'AMAZON.StopIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'AMAZON.CancelIntent': function () {
        this.emit('SessionEndedRequest');
    },
    'SessionEndedRequest':function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};

var languageStrings = {
    "en-GB": {
        "translation": {
            "RECIPES": recipes.RECIPE_EN_GB,
            "TUBES" : recipes.CLOSESTTUBE_EN_GB,
            "RAIL": recipes.CLOSESTRAIL_EN_GB,
            "BURGER": recipes.BURGER_EN_GB,
            "COFFEE": recipes.COFFEE_EN_GB,
            "TFL": recipes.TFLSTATUS,
            "SKILL_NAME": "Take Me Out",
            "WELCOME_MESSAGE": "Welcome to %s. You can ask a question like, what\'s my nearest tube stop",
            "WELCOME_REPROMT": "For instructions on what you can say, please say help me.",
            "DISPLAY_CARD_TITLE": "%s  - Recipe for %s.",
            "HELP_MESSAGE": "You can ask questions such as, what\'s the nearest rail station",
            "HELP_REPROMT": "You can say things like, what\'s your reccomendation, or you can say exit...Now, what can I help you with?",
            "STOP_MESSAGE": "Goodbye!",
            "GENERIC_ERROR": "Sorry I don\'t know what you asked, please try again",
            "LOCATION_NOT_FOUND": "Sorry I don\'t know where that is",
            "RECIPE_REPEAT_MESSAGE": "Try saying repeat.",
            "RECIPE_NOT_FOUND_MESSAGE": "I\'m sorry, I currently do not know ",
            "RECIPE_NOT_FOUND_WITH_ITEM_NAME": "the recipe for %s. ",
            "RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME": "that recipe. ",
            "RECIPE_NOT_FOUND_REPROMPT": "What else can I help with?"
        }
    },
    "en-US": {
        "translation": {
            "RECIPES" : recipes.RECIPE_EN_US,
            "SKILL_NAME" : "American Minecraft Helper",
            "WELCOME_MESSAGE": "Welcome to %s. You can ask a question like, what\'s the recipe for a chest? ... Now, what can I help you with.",
            "WELCOME_REPROMT": "For instructions on what you can say, please say help me.",
            "DISPLAY_CARD_TITLE": "%s  - Recipe for %s.",
            "HELP_MESSAGE": "You can ask questions such as, what\'s the recipe, or, you can say exit...Now, what can I help you with?",
            "HELP_REPROMT": "You can say things like, what\'s the recipe, or you can say exit...Now, what can I help you with?",
            "STOP_MESSAGE": "Goodbye!",
            "RECIPE_REPEAT_MESSAGE": "Try saying repeat.",
            "RECIPE_NOT_FOUND_MESSAGE": "I\'m sorry, I currently do not know ",
            "RECIPE_NOT_FOUND_WITH_ITEM_NAME": "the recipe for %s. ",
            "RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME": "that recipe. ",
            "RECIPE_NOT_FOUND_REPROMPT": "What else can I help with?"
        }
    },
    "de-DE": {
        "translation": {
            "RECIPES" : recipes.RECIPE_DE_DE,
            "SKILL_NAME" : "Assistent für Minecraft in Deutsch",
            "WELCOME_MESSAGE": "Willkommen bei %s. Du kannst beispielsweise die Frage stellen: Welche Rezepte gibt es für eine Truhe? ... Nun, womit kann ich dir helfen?",
            "WELCOME_REPROMT": "Wenn du wissen möchtest, was du sagen kannst, sag einfach „Hilf mir“.",
            "DISPLAY_CARD_TITLE": "%s - Rezept für %s.",
            "HELP_MESSAGE": "Du kannst beispielsweise Fragen stellen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?",
            "HELP_REPROMT": "Du kannst beispielsweise Sachen sagen wie „Wie geht das Rezept für“ oder du kannst „Beenden“ sagen ... Wie kann ich dir helfen?",
            "STOP_MESSAGE": "Auf Wiedersehen!",
            "RECIPE_REPEAT_MESSAGE": "Sage einfach „Wiederholen“.",
            "RECIPE_NOT_FOUND_MESSAGE": "Tut mir leid, ich kenne derzeit ",
            "RECIPE_NOT_FOUND_WITH_ITEM_NAME": "das Rezept für %s nicht. ",
            "RECIPE_NOT_FOUND_WITHOUT_ITEM_NAME": "dieses Rezept nicht. ",
            "RECIPE_NOT_FOUND_REPROMPT": "Womit kann ich dir sonst helfen?"
        }
    }
};
