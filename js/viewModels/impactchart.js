define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojChart'],
function(oj, ko, $)
{   
    function impactchartViewModel() {
    var self = this;
        /* chart data */
        var bubbleSeries = [{name : "Identity Fraud", items : [{x:15, y:25, z:5}, {x:25, y:30, z:12}, {x:25, y:45, z:12}]},
                            {name : "Credential Fraud", items : [{x:15, y:15, z:8}, {x:20, y:35, z:14}, {x:40, y:55, z:35}]},
                            {name : "Data Fraud", items : [{x:10, y:10, z:8}, {x:18, y:55, z:10}, {x:40, y:50, z:18}]},
                            {name : "Hack attempt", items : [{x: 8, y:20, z:6}, {x:11, y:30, z: 8}, {x:30, y:40, z:15}]}];
    
        var bubbleGroups = ["Group A", "Group B", "Group C"];
      
        this.bubbleSeriesValue = ko.observableArray(bubbleSeries);
        this.bubbleGroupsValue = ko.observableArray(bubbleGroups);
    }
    
    var impactchartViewModel = new impactchartViewModel();
    
    return impactchartViewModel;
});	