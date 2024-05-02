const _extensions = ['HMI'];
const _timeout = 1000;
const _contract = {
    methods: {},
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
        'Render': false,
        'LineType': 'Smooth',
        'XAxisType': 'Category',
        'ChartType': 'Line'
    }
};

var UnifiedInterface = function () {
    var _initialize = function () {
        console.log('CWC_AreaChart: UnifiedInterface initialized');
    };

    var _setProps = function (data) {
        console.log('CWC_AreaChart: Key <' + data.key + '> = ' + WebCC.Properties[data.key]);
        if (data.key === 'Render') {
            if (WebCC.Properties['Render']) {
                chartInit(WebCC.Properties);
                console.log('CWC_AreaChart: Render <', WebCC.Properties['Render'], '>');
            }
        }
    };

    return {
        Local: {
            initialize: _initialize,
            setProps: _setProps
        },
        HostListener: _contract
    };
}();

var unifiedInterfaceInit = function () {
    // Initialize 
    UnifiedInterface.Local.initialize();

    // Subscribe for value changes
    if (WebCC && WebCC.onPropertyChanged) {
        WebCC.onPropertyChanged.subscribe(UnifiedInterface.Local.setProps);
    }
};