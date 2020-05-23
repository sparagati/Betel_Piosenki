/*
 * JS for song80 generated by Appery.io
 */
Apperyio.getProjectGUID = function() {
    return '0c2b18ad-30dc-4103-ae45-9fdf77d705b4';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}
Apperyio.AppPages = [{
    "name": "songList",
    "location": "songList.html"
}, {
    "name": "song50",
    "location": "song50.html"
}, {
    "name": "song51",
    "location": "song51.html"
}, {
    "name": "song68",
    "location": "song68.html"
}, {
    "name": "song62",
    "location": "song62.html"
}, {
    "name": "song63",
    "location": "song63.html"
}, {
    "name": "song64",
    "location": "song64.html"
}, {
    "name": "song65",
    "location": "song65.html"
}, {
    "name": "song66",
    "location": "song66.html"
}, {
    "name": "song67",
    "location": "song67.html"
}, {
    "name": "song79",
    "location": "song79.html"
}, {
    "name": "song80",
    "location": "song80.html"
}, {
    "name": "song82",
    "location": "song82.html"
}, {
    "name": "song83",
    "location": "song83.html"
}, {
    "name": "song84",
    "location": "song84.html"
}, {
    "name": "song85",
    "location": "song85.html"
}, {
    "name": "song86",
    "location": "song86.html"
}, {
    "name": "song60",
    "location": "song60.html"
}, {
    "name": "song87",
    "location": "song87.html"
}, {
    "name": "song88",
    "location": "song88.html"
}, {
    "name": "song61",
    "location": "song61.html"
}, {
    "name": "song89",
    "location": "song89.html"
}, {
    "name": "song90",
    "location": "song90.html"
}, {
    "name": "song91",
    "location": "song91.html"
}, {
    "name": "song92",
    "location": "song92.html"
}, {
    "name": "song93",
    "location": "song93.html"
}, {
    "name": "song94",
    "location": "song94.html"
}, {
    "name": "song95",
    "location": "song95.html"
}, {
    "name": "song96",
    "location": "song96.html"
}, {
    "name": "song97",
    "location": "song97.html"
}, {
    "name": "song98",
    "location": "song98.html"
}, {
    "name": "song71",
    "location": "song71.html"
}, {
    "name": "song72",
    "location": "song72.html"
}, {
    "name": "song73",
    "location": "song73.html"
}, {
    "name": "song74",
    "location": "song74.html"
}, {
    "name": "song58",
    "location": "song58.html"
}, {
    "name": "song75",
    "location": "song75.html"
}, {
    "name": "song59",
    "location": "song59.html"
}, {
    "name": "song76",
    "location": "song76.html"
}, {
    "name": "song77",
    "location": "song77.html"
}, {
    "name": "song78",
    "location": "song78.html"
}, {
    "name": "song56",
    "location": "song56.html"
}, {
    "name": "song57",
    "location": "song57.html"
}, {
    "name": "song70",
    "location": "song70.html"
}, {
    "name": "song81",
    "location": "song81.html"
}, {
    "name": "song69",
    "location": "song69.html"
}, {
    "name": "song52",
    "location": "song52.html"
}, {
    "name": "song53",
    "location": "song53.html"
}, {
    "name": "song54",
    "location": "song54.html"
}, {
    "name": "song55",
    "location": "song55.html"
}];

function song80_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'html_5': 'song80_html_5'
    };
    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }
    /*
     * Nonvisual components
     */
    Apperyio.mappings = Apperyio.mappings || {};
    Apperyio.datasources = Apperyio.datasources || {};
    Apperyio.CurrentScreen = 'song80';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var song80_onLoad = function() {
        song80_elementsExtraJS();
        song80_deviceEvents();
        song80_windowEvents();
        song80_elementsEvents();
    };
    // screen window events
    function song80_windowEvents() {
        $('#song80').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function song80_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function song80_elementsExtraJS() {
        // screen (song80) extra code
    };
    // screen elements handler
    function song80_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#song80").on("pagebeforeshow", "#song80", function(event, ui) {
        Apperyio.CurrentScreen = "song80";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    song80_onLoad();
};
$(document).off("pagecreate", "#song80").on("pagecreate", "#song80", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    song80_js();
});