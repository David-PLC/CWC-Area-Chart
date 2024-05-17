const _extensions = ['HMI'];
const _timeout = 1000;
const _contract = {
    methods: {
        Render: _render
    },
    events: [],
    properties: {
        'X_axis': [],
        'Y_axis': [],
        'DataName': [],
        'SeriesColor': [],
        'X_axisname': '',
        'Y_axisname': '',
        'SeriesLabels': true,
        'ShowLine': true,
        'X_ToolTipFormat': '',
        'Y_AxisMIN' : 0,
        'Y_AxisMAX' : 0,
        'LineType': 'Smooth',
        'XAxisType': 'Category',
        'ChartType': 'Line'
    }
};

function _render() {
    console.log('CWC_AreaChart: Render request!');
    chartInit(WebCC.Properties);
};

var UnifiedInterface = function () {
    var _initialize = function () {
        console.log('CWC_AreaChart: UnifiedInterface initialized');
    };


    var _setProps = function (data) {
        if (data.key) {
            console.log('CWC_AreaChart: Key <' + data.key + '> = ' + WebCC.Properties[data.key]);
        }
    };

    return {
        Local: {
            initialize: _initialize,
            setProps: _setProps,
        },
        HostListener: _contract,
    };
}();

var unifiedInterfaceInit = function () {
    // Initialize 
    UnifiedInterface.Local.initialize();

    // Subscribe for value changes
    if (WebCC && WebCC.onPropertyChanged && WebCC.on) {
        WebCC.onPropertyChanged.subscribe(UnifiedInterface.Local.setProps);
    }
};