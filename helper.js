var helperModule = (function() {

    /**
     * Passing through input elements in given form and
     * create object with data values from inputs and url/action of given form
     * @param form
     * @returns {{url, requestData: {}}}
     */
    var extractFormData = function (form) {
        var url = form.attr("action");
        var formData = {};
        $(form).find(":input").each(function (index, node) {
            if (node.name !== '') {
                formData[node.name] = node.value;
            }
        });

        return {
            url: url,
            requestData: formData
        }

    };


    // Public API
    return {
        request: {
            extractFormData: extractFormData
        }

    };
})();