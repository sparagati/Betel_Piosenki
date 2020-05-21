/*
 * JS for song10 generated by Appery.io
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
    "name": "song12",
    "location": "song12.html"
}, {
    "name": "song18",
    "location": "song18.html"
}, {
    "name": "song1",
    "location": "song1.html"
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
    "name": "songList",
    "location": "songList.html"
}, {
    "name": "song8",
    "location": "song8.html"
}, {
    "name": "song15",
    "location": "song15.html"
}, {
    "name": "song5",
    "location": "song5.html"
}, {
    "name": "song13",
    "location": "song13.html"
}, {
    "name": "song6",
    "location": "song6.html"
}, {
    "name": "song2",
    "location": "song2.html"
}, {
    "name": "song7",
    "location": "song7.html"
}, {
    "name": "song16",
    "location": "song16.html"
}, {
    "name": "song9",
    "location": "song9.html"
}, {
    "name": "song10",
    "location": "song10.html"
}, {
    "name": "song14",
    "location": "song14.html"
}, {
    "name": "song11",
    "location": "song11.html"
}, {
    "name": "song17",
    "location": "song17.html"
}];

function song10_js() {
    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'html_5': 'song10_html_5'
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
    Apperyio.CurrentScreen = 'song10';
    _.chain(Apperyio.mappings)
        .filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        })
        .each(Apperyio.UIHandler.hideTemplateComponents);
    /*
     * Events and handlers
     */
    // On Load
    var song10_onLoad = function() {
        song10_elementsExtraJS();
        song10_deviceEvents();
        song10_windowEvents();
        song10_elementsEvents();
    };
    // screen window events
    function song10_windowEvents() {
        $('#song10').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });
    };
    // device events
    function song10_deviceEvents() {
        document.addEventListener("deviceready", function() {
        });
    };
    // screen elements extra js
    function song10_elementsExtraJS() {
        // screen (song10) extra code
    };
    // screen elements handler
    function song10_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });
    };
    $(document).off("pagebeforeshow", "#song10").on("pagebeforeshow", "#song10", function(event, ui) {
        Apperyio.CurrentScreen = "song10";
        _.chain(Apperyio.mappings)
            .filter(function(m) {
                return m.homeScreen === Apperyio.CurrentScreen;
            })
            .each(Apperyio.UIHandler.hideTemplateComponents);
    });
    song10_onLoad();
};
$(document).off("pagecreate", "#song10").on("pagecreate", "#song10", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    song10_js();
});