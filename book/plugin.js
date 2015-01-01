require(["gitbook"], function(gitbook) {
    gitbook.events.bind("start", function(e, config) {
        config.site_id = config.site_id || {};
    });

    gitbook.events.bind("exercise.submit", function(e, data) {

    });
});
