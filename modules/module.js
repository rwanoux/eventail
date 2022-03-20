import { preloadTemplates } from "./loadTemplates.js";
import { registerHelpers } from "./handlebarHelpers.js";
import EventailCardsHand from './eventailCardsHand.js';


Hooks.once('init', async function() {
    preloadTemplates();
    registerHelpers();
    console.log(`
_______________________________
registering eventail cards hand
_______________________________`)
    DocumentSheetConfig.registerSheet(Cards, "eventail", EventailCardsHand, {
        label: "éventail",
        types: ["hand"],
        makeDefault: true
    });
});