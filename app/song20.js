/*
 * JS for song20 generated by Appery.io
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
    "name": "song18",
    "location": "song18.html"
}, {
    "name": "song19",
    "location": "song19.html"
}, {
    "name": "song3",
    "location": "song3.html"
}, {
    "name": "song20",
    "location": "song20.html"
}, {
    "name": "song4",
    "location": "song4.html"
}, {
    "name": "song5",
    "location": "song5.html"
}, {
    "name": "song6",
    "location": "song6.html"
}, {
    "name": "song36",
    "location": "song36.html"
}, {
    "name": "song2",
    "location": "song2.html"
}, {
    "name": "song16",
    "location": "song16.html"
}, {
    "name": "song38",
    "location": "song38.html"
}, {
    "name": "song39",
    "location": "song39.html"
}, {
    "name": "song17",
    "location": "song17.html"
}, {
    "name": "song40",
    "location": "song40.html"
}, {
    "name": "songList",
    "location": "songList.html"
}, {
    "name": "song15",
    "location": "song15.html"
}, {
    "name": "song32",
    "location": "song32.html"
}, {
    "name": "song33",
    "location": "song33.html"
}, {
    "name": "song34",
    "location": "song34.html"
}, {
    "name": "song35",
    "location": "song35.html"
}, {
    "name": "song49",
    "location": "song49.html"
}, {
    "name": "song14",
    "location": "song14.html"
}, {
    "name": "song12",
    "location": "song12.html"
}, {
    "name": "song27",
    "location": "song27.html"
}, {
    "name": "song28",
    "location": "song28.html"
}, {
    "name": "song29",
    "location": "song29.html"
}, {
    "name": "song30",
    "location": "song30.html"
}, {
    "name": "song13",
    "location": "song13.html"
}, {
    "name": "song47",
    "location": "song47.html"
}, {
    "name": "song48",
    "location": "song48.html"
}, {
    "name": "song31",
    "location": "song31.html"
}, {
    "name": "song45",
    "location": "song45.html"
}, {
    "name": "song22",
    "location": "song22.html"
}, {
    "name": "song23",
    "location": "song23.html"
}, {
    "name": "song9",
    "location": "song9.html"
}, {
    "name": "song10",
    "location": "song10.html"
}, {
    "name": "song11",
    "location": "song11.html"
}, {
    "name": "song24",
    "location": "song24.html"
}, {
    "name": "song25",
    "location": "song25.html"
}, {
    "name": "song46",
    "location": "song46.html"
}, {
    "name": "song26",
    "location": "song26.html"
}, {
    "name": "song21",
    "location": "song21.html"
}, {
    "name": "song37",
    "location": "song37.html"
}, {
    "name": "song1",
    "location": "song1.html"
}, {
    "name": "song43",
    "location": "song43.html"
}, {
    "name": "song44",
    "location": "song44.html"
}, {
    "name": "song8",
    "location": "song8.html"
}, {
    "name": "song7",
    "location": "song7.html"
}, {
    "name": "song41",
    "location": "song41.html"
}, {
    "name": "song42",
    "location": "song42.html"
}];

function song20_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'html_5': 'song20_html_5'
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
    Apperyio.CurrentScreen = 'song20';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var song20_onLoad = function() {
        song20_elementsExtraJS();
        song20_deviceEvents();
        song20_windowEvents();
        song20_elementsEvents();
    };
    // screen window events
    function song20_windowEvents() {
        $('#song20').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function song20_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function song20_elementsExtraJS() {
        // screen (song20) extra code
    };
    // screen elements handler
    function song20_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#song20").on("pagebeforeshow", "#song20", function(event, ui) {
        Apperyio.CurrentScreen = "song20";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    song20_onLoad();
};
$(document).off("pagecreate", "#song20").on("pagecreate", "#song20", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    song20_js();
});