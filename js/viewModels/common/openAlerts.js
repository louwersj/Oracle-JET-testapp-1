define(['ojs/ojcore', 'knockout'], function (oj, ko) {

    function OpenAlertsViewModule() {
        var self = this;
        var urlOpenAlerts = "https://raw.githubusercontent.com/louwersj/Oracle-JET-testapp-1/master/openalerts.json";

        self.createOpenAlertsModel = function () {
            var OpenAlerts = oj.Model.extend({
                urlRoot: urlOpenAlerts,
                idAttribute: "Id"
            });

            return new OpenAlerts();
        };

        self.createOpenAlertsCollection = function () {
            var OpenAlertsCollection = oj.Collection.extend({
                url: urlOpenAlerts,
                fetchSize: -1,
                model: this.createOpenAlertsModel()
            });

            return new OpenAlertsCollection();
        };
    }

    return new OpenAlertsViewModule();
});
