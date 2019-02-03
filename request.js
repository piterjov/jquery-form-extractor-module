var requestModule = (function() {
    var doPostRequest = function (payload) {
        return $.ajax({
            url: payload.url,
            method: "POST",
            data: payload.requestData
        });

    };
    // Public API
    return {
        doPost: doPostRequest
    };
})();