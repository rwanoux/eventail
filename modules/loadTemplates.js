export const preloadTemplates = async function() {

    // Define template paths to load
    const templatePaths = [

        // Actor Sheet Partials
        "modules/eventail/templates/eventailHand.hbs",
    ];

    // Load the template parts
    return loadTemplates(templatePaths);
};