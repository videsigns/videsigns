// 13/Aug/2024
// Feature update:
// Percentage bar
// Percentage text

const _0x1668e8 = _0x163e;
(function(_0x44706d, _0x4429dc) {
    const _0x4da74a = _0x163e,
        _0x4dfb46 = _0x44706d();
    while (!![]) {
        try {
            const _0xa1ff6b =
                parseInt(_0x4da74a(0x1b6)) / 0x1 +
                -parseInt(_0x4da74a(0x14a)) / 0x2 +
                (-parseInt(_0x4da74a(0x233)) / 0x3) *
                (-parseInt(_0x4da74a(0x151)) / 0x4) +
                (-parseInt(_0x4da74a(0x1d1)) / 0x5) *
                (parseInt(_0x4da74a(0x183)) / 0x6) +
                parseInt(_0x4da74a(0x164)) / 0x7 +
                parseInt(_0x4da74a(0x1b1)) / 0x8 +
                -parseInt(_0x4da74a(0xea)) / 0x9;
            if (_0xa1ff6b === _0x4429dc) break;
            else _0x4dfb46["push"](_0x4dfb46["shift"]());
        } catch (_0x13ee97) {
            _0x4dfb46["push"](_0x4dfb46["shift"]());
        }
    }
})(_0x57e6, 0x4edf9);
let x = 0x0,
    lastStep = 0x0,
    curStep = 0x0,
    countCard = !![],
    fill = ![],
    inputFilled = !![],
    skip,
    urlFilled = !![],
    selectFilled = !![],
    radioFilled = !![],
    dateFilled = !![],
    timeFilled = !![],
    checkboxFilled = !![],
    emailFilled = !![],
    textareaFilled = !![],
    telFilled = !![],
    passwordFilled = !![],
    fileFilled = !![],
    numFilled = !![],
    answer = "",
    selections = [],
    selection = [],
    empReqInput = [],
    empReqUrl = [],
    empReqDate = [],
    empReqTime = [],
    empReqRadio = [],
    empReqSelect = [],
    empReqTextarea = [],
    empReqFile = [],
    empReqPassword = [],
    empReqNum = [],
    empReqTel = [],
    textareaLength = 0x0,
    textInputLength = 0x0,
    emailInputLength = 0x0,
    selectInputLength = 0x0,
    checkboxInputLength = 0x0,
    filledInput = [],
    savedFilledInput = [],
    progress = 0x0,
    skipTo = 0x0,
    next = ![],
    back = ![],
    selArr = [],
    selString = [],
    emptyInput = 0x0,
    selTotal = 0x0,
    searchQ = [],
    domainAllowed = !![],
    dom = [],
    successCard = "",
    redirectTo = "",
    totalSteps = 0x0,
    checkCount = 0x0,
    maxCheckCount = 0x0,
    newTab = !![],
    unfilledArr = [],
    notRobot = !![],
    all_data = [];
var ogCloneArr = [];
let form = $("[data-form=\x22multistep\x22]"),
    steps = $("[data-form=\x22step\x22]"),
    progressbarClone = $("[data-form=\x22progress-indicator\x22]")["clone"](),
    progressbar,
    weightedSelection = $(_0x1668e8(0x1d9))[_0x1668e8(0x108)](_0x1668e8(0x128)),
    weightedSelectionRange = $("[data-weighted-selection-range]")[
        _0x1668e8(0x108)
    ]("weighted-selection-range");
const percentageBar = $(_0x1668e8(0x214)),
    percentageIndicator = $(_0x1668e8(0x170));
let selectMultiple = $(_0x1668e8(0x10e))[_0x1668e8(0x108)]("select-multiple"),
    customError = $(_0x1668e8(0x11b))[_0x1668e8(0x108)](_0x1668e8(0xc5)),
    reinitIX = $(_0x1668e8(0x210))[_0x1668e8(0x108)]("reinit"),
    memory = $("[data-memory]")["data"](_0x1668e8(0x1ae)),
    quiz = $(_0x1668e8(0x1ad))["data"](_0x1668e8(0xba));
const urlFormly = new URL(window[_0x1668e8(0x20d)][_0x1668e8(0xb8)]);
let _params = $(_0x1668e8(0x1fc))["data"](_0x1668e8(0x1b9)),
    logicExtra = $("[data-form=\x22multistep\x22]")[_0x1668e8(0x108)](
        "logic-extra"
    ),
    oldSubmitText = $(_0x1668e8(0x1d6))[_0x1668e8(0x218)](),
    oldResetText = $(_0x1668e8(0x19c))["text"](),
    formReset = $(_0x1668e8(0x19d))[_0x1668e8(0x108)](_0x1668e8(0x1cd)),
    resetDelay = $(_0x1668e8(0x23d))[_0x1668e8(0x108)](_0x1668e8(0xb6)) ?
    $(_0x1668e8(0x23d))[_0x1668e8(0x108)](_0x1668e8(0xb6)) :
    0x7d0,
    redirectDelay = $(_0x1668e8(0x1a8))[_0x1668e8(0x108)](_0x1668e8(0x1c3)) ?
    $("[data-redirect-delay]")[_0x1668e8(0x108)](_0x1668e8(0x1c3)) :
    0x64,
    phoneFormat = $("[data-form=\x22multistep\x22]")[_0x1668e8(0x108)](
        _0x1668e8(0x18c)
    ),
    scrollToTop = $(_0x1668e8(0x19d))[_0x1668e8(0x108)](_0x1668e8(0x173)),
    trackLastStep = $("[data-last-step]")[_0x1668e8(0x108)](_0x1668e8(0x1b5)),
    conditionalResult = $(_0x1668e8(0x1b8))["data"](_0x1668e8(0xb9)) === "AND",
    scrollTopOffset = parseInt(
        $("[data-form=\x22multistep\x22]")["data"](_0x1668e8(0xd5))
    );
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON[_0x1668e8(0x1fb)](
    localStorage[_0x1668e8(0x1d8)](_0x1668e8(0x13a))
)),
(formlyLastStep = JSON[_0x1668e8(0x1fb)](
    localStorage["getItem"](_0x1668e8(0x1c7))
)),
(formlyLastStepAnswer = JSON[_0x1668e8(0x1fb)](
    localStorage["getItem"](_0x1668e8(0x11d))
));
let paramUrl = $(_0x1668e8(0x19d))[_0x1668e8(0x108)](_0x1668e8(0x1a2));
const progressiveTarget = $("[data-form=\x22multistep\x22]")[_0x1668e8(0x1fd)](
        "[data-input-target]"
    ),
    progressiveInput = $("[data-form=\x22multistep\x22]")[_0x1668e8(0x1fd)](
        _0x1668e8(0x116)
    ),
    multiSelections = $("[data-form=\x22multistep\x22]")[_0x1668e8(0x108)](
        _0x1668e8(0x9c)
    );
trackLastStep &&
    (formlyLastStep > x && (x = formlyLastStep),
        formlyLastStepAnswer && (selections = formlyLastStepAnswer));
percentageBar[_0x1668e8(0x1ec)]("width", "0%"),
    $(_0x1668e8(0x105))[_0x1668e8(0x13e)](function() {
        const _0x553197 = _0x1668e8;
        ogCloneArr[_0x553197(0xa2)]({
            name: $(this)["data"](_0x553197(0x171)),
            element: $(this)[_0x553197(0x171)](!![]),
            display: $(_0x553197(0x143) + $(this)["data"](_0x553197(0x171)) + "\x22]")["eq"](0x0)["clone"](!![]),
        });
    });
const setPageLoadTime = () => {
    const _0x464324 = _0x1668e8;
    localStorage[_0x464324(0x1b7)](
        "pageLoadTime",
        Date["now"]()[_0x464324(0xb5)]()
    );
};
setPageLoadTime();
$(_0x1668e8(0x10f))[_0x1668e8(0x12a)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x2d6845) {
    notRobot = !![];
}
($(steps[x])[_0x1668e8(0x108)](_0x1668e8(0x148)) ||
    $(steps[x])[_0x1668e8(0x1fd)](_0x1668e8(0x21f))[_0x1668e8(0x108)](_0x1668e8(0x148))) &&
(next = !![]);
$(_0x1668e8(0x1e4))["length"] > 0x0 &&
    (countCard = $(_0x1668e8(0x1e4))[_0x1668e8(0x108)]("count-card"));
$(_0x1668e8(0x180))[_0x1668e8(0x228)](),
    $(progressbarClone)[_0x1668e8(0x160)](_0x1668e8(0x1ca)),
    $(_0x1668e8(0x130))[_0x1668e8(0x12e)]()[_0x1668e8(0x1f8)](),
    $(_0x1668e8(0x1d6))[_0x1668e8(0x228)](),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x1668e8(0x228)](),
    steps[_0x1668e8(0x13e)](function() {
        const _0x18b999 = _0x1668e8;
        $("[data-form=\x22progress\x22]")[_0x18b999(0x1ce)](
            progressbarClone[_0x18b999(0x171)](!![], !![])
        );
    }),
    $(_0x1668e8(0x145))[_0x1668e8(0x228)]();
countCard
    ?
    ((curStep = x + 0x1),
        (totalSteps = steps[_0x1668e8(0x12a)]),
        $(_0x1668e8(0xa6))["text"](totalSteps)) :
    ($(steps[x])["data"](_0x1668e8(0x148)) ?
        (curStep = curStep + 0x0) :
        (curStep = curStep + 0x1),
        (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
            _0x1668e8(0x12a)
        ]),
        $("[data-text=\x22total-steps\x22]")[_0x1668e8(0x1c0)](totalSteps),
        $(_0x1668e8(0xec))[_0x1668e8(0x13e)](function() {
            const _0x5045e5 = _0x1668e8;
            $($(_0x5045e5(0x175))[$(this)[_0x5045e5(0x11a)]()])[_0x5045e5(0x228)]();
        }));
(progressbar = $(_0x1668e8(0x130))[_0x1668e8(0x12e)]()),
$(_0x1668e8(0x175))["on"](_0x1668e8(0xdf), clickableIndicator),
    $("[data-text=\x22current-step\x22]")[_0x1668e8(0x1c0)](curStep),
    steps["hide"](),
    $(_0x1668e8(0x97))[_0x1668e8(0x228)](),
    $(_0x1668e8(0x23c))[_0x1668e8(0x13e)](function() {
        const _0x4f4a3d = _0x1668e8;
        $(this)[_0x4f4a3d(0xb3)](_0x4f4a3d(0x18d), _0x4f4a3d(0x1b2));
    });

function getParams() {
    const _0x184079 = _0x1668e8;
    urlFormly[_0x184079(0x1f0)][_0x184079(0x1d0)](function(
        _0x4005b6,
        _0x1cdbf8
    ) {
        const _0x5e83b4 = _0x184079;
        searchQ[_0x5e83b4(0xa2)]({ val: _0x4005b6, key: _0x1cdbf8 });
    });
}

function getSafe(_0x22ccc1, _0x525ef6) {
    try {
        return _0x22ccc1();
    } catch (_0xf5c59d) {
        return _0x525ef6;
    }
}

function phoneAutoFormat(_0x27dd86) {
    var _0x1ccf17 = "";
    return function(_0x2d22f0) {
        const _0x3dcd00 = _0x163e;
        var _0x3c17b6 = "",
            _0x2a45d6 = _0x2d22f0[_0x3dcd00(0x144)](/\D/g, ""),
            _0x2e0ce3 = 0x0,
            _0xfc9e75 = 0x0;
        while (
            _0x2e0ce3 < _0x2a45d6[_0x3dcd00(0x12a)] &&
            _0xfc9e75 < _0x27dd86["length"]
        ) {
            _0x27dd86[_0xfc9e75] === "x" ?
                ((_0x3c17b6 += _0x2a45d6[_0x2e0ce3]), _0x2e0ce3++) :
                (_0x3c17b6 += _0x27dd86[_0xfc9e75]),
                _0xfc9e75++;
        }
        if (_0x2d22f0["length"] < _0x1ccf17["length"]) {
            var _0x3ddde3 = _0x27dd86[_0x3dcd00(0x17e)](_0xfc9e75);
            _0x3c17b6 += _0x3ddde3[_0x3dcd00(0x144)](/x/g, "");
        }
        return (_0x1ccf17 = _0x3c17b6), _0x3c17b6;
    };
}

function validateURL(_0x33d9cc) {
    const _0x2cbb0b = _0x1668e8;
    return urlPattern[_0x2cbb0b(0x22b)](_0x33d9cc) ? !![] : ![];
}
quiz &&
    steps["each"](function() {
        const _0x12579f = _0x1668e8;
        $(this)[_0x12579f(0x12e)]()[_0x12579f(0xb3)]("data-radio-skip", !![]),
            $(this)[_0x12579f(0x12e)]()[_0x12579f(0xb3)](_0x12579f(0x21d), 0xfa);
    });

function disableBtn(_0x5be67a) {
    const _0x13528f = _0x1668e8;
    (fill = ![]), !customError &&
        ($("[data-form=\x22next-btn\x22]")[_0x13528f(0x1ec)]({
                opacity: _0x13528f(0x16a),
                "pointer-events": "none",
            }),
            $(_0x13528f(0xe7))[_0x13528f(0x102)](_0x13528f(0x207)),
            $("[data-form=\x22submit-btn\x22]")[_0x13528f(0x1ec)]({
                opacity: _0x13528f(0x16a),
                "pointer-events": _0x13528f(0x161),
            }),
            $("[data-form=\x22submit-btn\x22]")[_0x13528f(0x102)](_0x13528f(0x207)),
            $(_0x13528f(0x177))[_0x13528f(0x1ec)]({
                opacity: _0x13528f(0x16a),
                "pointer-events": _0x13528f(0x161),
            }),
            $(_0x13528f(0x177))["addClass"]("disabled"));
}

function enableBtn() {
    const _0x462b85 = _0x1668e8;
    (fill = !![]),
    $(_0x462b85(0xe7))[_0x462b85(0x1ec)]({
            "pointer-events": "auto",
            opacity: "1",
        }),
        $("[data-form=\x22next-btn\x22]")[_0x462b85(0x160)]("disabled"),
        $(_0x462b85(0x1d6))[_0x462b85(0x1ec)]({
            "pointer-events": "auto",
            opacity: "1",
        }),
        $(_0x462b85(0x1d6))[_0x462b85(0x160)](_0x462b85(0x207)),
        $(_0x462b85(0x177))[_0x462b85(0x1ec)]({
            "pointer-events": _0x462b85(0xad),
            opacity: "1",
        }),
        $("[data-form-ms=\x22submit-btn\x22]")["removeClass"](_0x462b85(0x207));
}

function saveLastAnswer(_0x411c54) {
    const _0x572e27 = _0x1668e8;
    localStorage["removeItem"](_0x572e27(0x11d)),
        localStorage[_0x572e27(0x1b7)](
            _0x572e27(0x11d),
            JSON[_0x572e27(0x115)](_0x411c54)
        );
}

function saveFilledInput() {
    const _0x4b0e27 = _0x1668e8;
    $(_0x4b0e27(0x187))[_0x4b0e27(0x199)](_0x4b0e27(0x103))[_0x4b0e27(0x13e)](function() {
            const _0x509342 = _0x4b0e27;
            $(this)["attr"](_0x509342(0x18d)) === _0x509342(0xd7) ||
                $(this)[_0x509342(0xb3)](_0x509342(0x18d)) === "radio" ?
                $(this)["prop"](_0x509342(0x1b3)) &&
                (filledInput[_0x509342(0x20c)](
                        (_0x4686ce) =>
                        _0x4686ce["inputName"] === $(this)["attr"](_0x509342(0x101))
                    ) ?
                    ((filledInput = filledInput[_0x509342(0xd6)](
                            (_0x2234ba) =>
                            _0x2234ba[_0x509342(0xfa)] !==
                            $(this)[_0x509342(0xb3)](_0x509342(0x101))
                        )),
                        $(this)[_0x509342(0x218)]() !== "" &&
                        filledInput[_0x509342(0xa2)]({
                            inputName: $(this)[_0x509342(0xb3)]("name"),
                            value: $(this)[_0x509342(0x218)](),
                        })) :
                    $(this)["val"]() !== "" &&
                    filledInput[_0x509342(0xa2)]({
                        inputName: $(this)["attr"](_0x509342(0x101)),
                        value: $(this)[_0x509342(0x218)](),
                    })) :
                filledInput[_0x509342(0x20c)](
                    (_0x3ab983) =>
                    _0x3ab983["inputName"] ===
                    $(this)[_0x509342(0xb3)](_0x509342(0x101))
                ) ?
                ((filledInput = filledInput[_0x509342(0xd6)](
                        (_0x41b8ae) =>
                        _0x41b8ae["inputName"] !==
                        $(this)[_0x509342(0xb3)](_0x509342(0x101))
                    )),
                    $(this)["val"]() !== "" &&
                    filledInput[_0x509342(0xa2)]({
                        inputName: $(this)[_0x509342(0xb3)](_0x509342(0x101)),
                        value: $(this)[_0x509342(0x218)](),
                    })) :
                $(this)[_0x509342(0x218)]() !== "" &&
                filledInput[_0x509342(0xa2)]({
                    inputName: $(this)[_0x509342(0xb3)](_0x509342(0x101)),
                    value: $(this)[_0x509342(0x218)](),
                });
        }),
        trackLastStep &&
        (formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
            localStorage[_0x4b0e27(0x113)](_0x4b0e27(0x1c7)),
            localStorage[_0x4b0e27(0x1b7)](_0x4b0e27(0x1c7), lastStep)),
        localStorage["removeItem"](_0x4b0e27(0x13a)),
        localStorage["setItem"](_0x4b0e27(0x13a), JSON["stringify"](filledInput));
}

function scrollTop() {
    const _0x502eb5 = _0x1668e8;
    scrollToTop &&
        $("html,\x20body")["animate"]({
                scrollTop: $(_0x502eb5(0x19d))[_0x502eb5(0x1ba)]()[_0x502eb5(0x1b0)] -
                    scrollTopOffset,
            },
            0x3e8
        );
}

function updateURL(_0x542004) {
    const _0x44902c = _0x1668e8;
    var _0x1c4c61 = window[_0x44902c(0x20d)][_0x44902c(0xb8)],
        _0x51aa72 = new URLSearchParams(window[_0x44902c(0x20d)][_0x44902c(0x202)]);
    _0x51aa72["set"](_0x44902c(0x1a5), _0x542004);
    var _0x2028ed =
        _0x1c4c61[_0x44902c(0x1db)]("?")[0x0] + "?" + _0x51aa72[_0x44902c(0xb5)]();
    window[_0x44902c(0x146)][_0x44902c(0xef)]({}, "", _0x2028ed);
}

function updateStep() {
    const _0x10c977 = _0x1668e8;
    scrollTop(),
        (skip = ![]),
        $(_0x10c977(0x1af))["removeClass"](_0x10c977(0x207));
    $(_0x10c977(0xc3))[_0x10c977(0x108)](_0x10c977(0xf5)) &&
        (steps[_0x10c977(0x1fd)](_0x10c977(0x22a))[_0x10c977(0x13e)](function() {
                const _0x5d3c95 = _0x10c977;
                $(
                        $(_0x5d3c95(0x1af))[
                            $(this)["parents"](_0x5d3c95(0x1ac))[_0x5d3c95(0x11a)]()
                        ]
                    ),
                    $(this)[_0x5d3c95(0x218)]() === "" && emptyInput++;
            }),
            emptyInput > 0x0 ?
            $("input[type=\x22submit\x22]")[_0x10c977(0x102)](_0x10c977(0x207)) :
            $(_0x10c977(0x20a))["removeClass"](_0x10c977(0x207)));
    $(_0x10c977(0x1af))[_0x10c977(0x160)](_0x10c977(0x1ca)),
        $(_0x10c977(0x1af))[_0x10c977(0x102)](_0x10c977(0x207)),
        $($(_0x10c977(0x1af))[x])[_0x10c977(0x102)](_0x10c977(0x1ca)),
        (selection = selections["filter"](
            (_0x27d745) => _0x27d745[_0x10c977(0x1a5)] === x - 0x1
        ));
    next &&
        (x = getSafe(() => selection[0x0][_0x10c977(0x1d3)]) ?
            parseInt(getSafe(() => selection[0x0][_0x10c977(0x1d3)])) :
            x);
    $("[data-answer]")[_0x10c977(0x228)](), steps[_0x10c977(0x228)]();
    reinitIX === !![] && window["Webflow"][_0x10c977(0x190)]();
    $(progressbar)[_0x10c977(0x160)](_0x10c977(0x1ca));
    for (i = 0x0; i <= x; i++) {
        countCard
            ?
            $(progressbar[i])["addClass"](_0x10c977(0x1ca)) :
            !$(steps[i])["data"](_0x10c977(0x148)) &&
            $(progressbar[i])[_0x10c977(0x102)](_0x10c977(0x1ca));
    }
    reinitIX === !![] ?
        (window[_0x10c977(0xf0)] &&
            window[_0x10c977(0xf0)]
            ["require"](_0x10c977(0x1dd))[_0x10c977(0x18b)](),
            document[_0x10c977(0x1e3)](new Event(_0x10c977(0x1c1))),
            $(steps[x])[_0x10c977(0x1ed)]()) :
        $(steps[x])[_0x10c977(0x16d)]("slow");
    $(_0x10c977(0x21f))[_0x10c977(0x160)](_0x10c977(0xdc));
    x === 0x0 &&
        !$(steps[x])[_0x10c977(0x108)](_0x10c977(0x148)) &&
        ($(steps[x])[_0x10c977(0x1fd)]("[data-answer]")["show"](),
            $(steps[x])[_0x10c977(0x1fd)](_0x10c977(0x1a4))[_0x10c977(0x102)]("active-answer-card"));
    selection["length"] > 0x0 ?
        ($(steps[x])[_0x10c977(0x1fd)](
                _0x10c977(0xa5) + selection[0x0][_0x10c977(0x119)] + "\x22]"
            )["show"](),
            $(steps[x])[_0x10c977(0x1fd)](
                _0x10c977(0xa5) + selection[0x0][_0x10c977(0x119)] + "\x22]"
            )[_0x10c977(0x102)](_0x10c977(0xdc))) :
        ($(steps[x])[_0x10c977(0x1fd)](_0x10c977(0xa5) + answer + "\x22]")[_0x10c977(0x1ed)](),
            $(steps[x])["find"](_0x10c977(0xa5) + answer + "\x22]")[_0x10c977(0x102)](_0x10c977(0xdc)));
    if (x === 0x0)
        $(_0x10c977(0x100))[_0x10c977(0x228)](),
        $("[data-form=\x22next-btn\x22]")[_0x10c977(0x1ed)](),
        $(_0x10c977(0x1d6))[_0x10c977(0x228)]();
    else {
        if (
            x === steps[_0x10c977(0x12a)] - 0x1 ||
            $(steps[x])[_0x10c977(0x1fd)](_0x10c977(0x12d))[_0x10c977(0x12a)] > 0x0
        ) {
            $(_0x10c977(0xe7))[_0x10c977(0x228)]();
            if (
                $(steps[x])[_0x10c977(0x1fd)]("[data-form=\x22next-btn\x22][data-submit-show]")[_0x10c977(0x108)](_0x10c977(0x191))
            )
                $(steps[x])[_0x10c977(0x1fd)](_0x10c977(0xa7))["show"]();
            else
                $(_0x10c977(0xe7))["data"]("submit-show") &&
                $(_0x10c977(0xe7))[_0x10c977(0x1ed)]();
            $(_0x10c977(0x1d6))[_0x10c977(0x1ed)](),
                $(_0x10c977(0x177))["show"](),
                $(_0x10c977(0x100))[_0x10c977(0x1ed)]();
        } else
            $(_0x10c977(0xe7))[_0x10c977(0x1ed)](),
            $(_0x10c977(0x100))["show"](),
            $(_0x10c977(0x1d6))[_0x10c977(0x228)](),
            $("[data-form-ms=\x22submit-btn\x22]")[_0x10c977(0x228)]();
    }
    $($(steps[x])["find"](_0x10c977(0xa1))[0x0])[_0x10c977(0x19e)](),
        $($(steps[x])[_0x10c977(0x1fd)](_0x10c977(0x200))[0x0])["focus"](),
        validation();
    for (idx = 0x0; idx <= x; idx++) {
        $($(_0x10c977(0x1af))[idx])[_0x10c977(0x160)](_0x10c977(0x207));
    }
    paramUrl && updateURL(curStep),
        console[_0x10c977(0x234)](progressPercentage()),
        percentageIndicator[_0x10c977(0x1c0)](progressPercentage()),
        percentageBar[_0x10c977(0x1ec)](
            _0x10c977(0x21a),
            progressPercentage() + "%"
        );
}

function validateEmail(_0x12c1cf, _0x32ebb0, _0xfd207a) {
    const _0x2f47d8 = _0x1668e8;
    let _0x236c02 = _0x12c1cf[_0x2f47d8(0xac)]("@") ?
        _0x12c1cf[_0x2f47d8(0x1db)]("@")[0x1][_0x2f47d8(0x1db)](".")[0x0] : [];
    dom = [];
    _0x32ebb0 !== undefined &&
        _0x32ebb0[_0x2f47d8(0x1db)](",")[_0x2f47d8(0x1d0)](function(_0x5d7c2c) {
            const _0x4f165f = _0x2f47d8;
            _0x5d7c2c[_0x4f165f(0xac)](_0x236c02) && dom[_0x4f165f(0xa2)](_0x236c02);
        });
    dom[_0x2f47d8(0x12a)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
    var _0x26b7d0 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x26b7d0["test"](_0x12c1cf) || !domainAllowed ?
        ((emailFilled = ![]), unfilledArr["push"]({ input: _0xfd207a })) :
        (emailFilled = !![]);
}

function phoneValidation(_0x3eaa2c, _0x3e41b3, _0x4db821) {
    if (phoneFormat) return _0x3e41b3 >= _0x4db821 ? !![] : ![];
    else {
        if (_0x3e41b3 >= _0x4db821) return !![];
    }
}

function validation() {
    const _0x5d3240 = _0x1668e8;
    $(steps[x])[_0x5d3240(0x108)]("card") && enableBtn();
    (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (dateFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (urlFilled = !![]),
    (timeFilled = !![]),
    (emailFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqTime = []),
    (empReqTel = []),
    (empReqUrl = []),
    (empReqDate = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x1f1))[
        _0x5d3240(0x12a)
    ]),
    (textInputLength = $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x231))[
        "length"
    ]),
    (selectInputLength = $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0xc8))[
        _0x5d3240(0x12a)
    ]),
    (emailInputLength = $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0xa0))[
        _0x5d3240(0x12a)
    ]),
    (checkboxInputLength = $(steps[x])[_0x5d3240(0x1fd)](
        "input[type=\x22checkbox\x22]:visible"
    )[_0x5d3240(0x12a)]);
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ?
        disableBtn() :
        enableBtn();
    (checkCount = $(steps[x])[_0x5d3240(0x108)](_0x5d3240(0xd7)) ?
        $(steps[x])[_0x5d3240(0x108)](_0x5d3240(0xd7)) :
        $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x1f6))[_0x5d3240(0x12a)] > 0x0 ?
        $(steps[x])[_0x5d3240(0x1fd)]("[data-checkbox]")[_0x5d3240(0x108)](_0x5d3240(0xd7)) :
        0x0),
    (maxCheckCount = $(steps[x])[_0x5d3240(0x108)](_0x5d3240(0x1ab)) ?
        $(steps[x])[_0x5d3240(0x108)](_0x5d3240(0x1ab)) :
        $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x163))[_0x5d3240(0x12a)] > 0x0 ?
        $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x163))[_0x5d3240(0x108)](_0x5d3240(0x1ab)) :
        0x0);
    if (!logicExtra) {
        let _0x456709 = $(steps[x])["find"](_0x5d3240(0x9b)),
            _0x2bf9b2 = _0x456709["filter"](_0x5d3240(0xe6)),
            _0x159f4f = _0x456709[_0x5d3240(0xd6)](_0x5d3240(0x1c6)),
            _0x5c52e5 = _0x2bf9b2[_0x5d3240(0xd6)](_0x5d3240(0x1c6));
        if (_0x456709[_0x5d3240(0x12a)] > 0x0) {
            if (checkCount === "*" || checkCount > _0x456709[_0x5d3240(0x12a)])
                _0x456709[_0x5d3240(0x13e)](function() {
                    const _0x2c67de = _0x5d3240;
                    $(this)["is"](_0x2c67de(0x1c6)) ?
                        ((checkboxFilled = !![]),
                            resetInputErrorMessage(
                                $(this)[_0x2c67de(0xb3)](_0x2c67de(0x101))
                            )) :
                        ((checkboxFilled = ![]),
                            unfilledArr[_0x2c67de(0xa2)]({
                                input: $(this)[_0x2c67de(0xb3)]("name"),
                            }));
                });
            else {
                if (_0x159f4f[_0x5d3240(0x12a)] >= checkCount) {
                    if (_0x2bf9b2["length"] > 0x0)
                        _0x2bf9b2[_0x5d3240(0x12a)] === _0x5c52e5["length"] ?
                        ((checkboxFilled = !![]),
                            resetInputErrorMessage(
                                _0x2bf9b2["first"]()[_0x5d3240(0xb3)]("name")
                            )) :
                        ((checkboxFilled = ![]),
                            _0x2bf9b2[_0x5d3240(0x199)](":checked")["each"](function() {
                                const _0x5d0128 = _0x5d3240;
                                console[_0x5d0128(0x234)](
                                        $(this)[_0x5d0128(0xb3)](_0x5d0128(0x101))
                                    ),
                                    unfilledArr[_0x5d0128(0xa2)]({
                                        input: $(this)[_0x5d0128(0xb3)](_0x5d0128(0x101)),
                                    });
                            }));
                    else {
                        if (maxCheckCount > _0x159f4f[_0x5d3240(0x12a)])
                            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x134))[_0x5d3240(0x129)]("disabled", ![]),
                            $(steps[x])["find"](_0x5d3240(0x134))["parent"]("label")[_0x5d3240(0x160)](_0x5d3240(0x207));
                        else
                            maxCheckCount > 0x0 &&
                            ($(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0xed))[_0x5d3240(0x1e6)]("label")[_0x5d3240(0x102)](_0x5d3240(0x207)),
                                $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0xed))[_0x5d3240(0x129)](_0x5d3240(0x207), !![]),
                                _0x2bf9b2[_0x5d3240(0x199)](_0x5d3240(0x1c6))[_0x5d3240(0x13e)](
                                    function() {
                                        const _0x730000 = _0x5d3240;
                                        unfilledArr["push"]({
                                            input: $(this)[_0x730000(0xb3)](_0x730000(0x101)),
                                        });
                                    }
                                ));
                    }
                } else
                    checkCount > 0x0 &&
                    ((checkboxFilled = ![]),
                        _0x2bf9b2[_0x5d3240(0x199)](_0x5d3240(0x1c6))["each"](function() {
                            const _0x33511f = _0x5d3240;
                            unfilledArr[_0x33511f(0xa2)]({
                                input: $(this)["attr"](_0x33511f(0x101)),
                            });
                        }),
                        unfilledArr["push"]({
                            input: _0x456709[_0x5d3240(0x15a)]()["attr"](_0x5d3240(0x101)),
                        }));
            }
        }
        $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x15d))[_0x5d3240(0x13e)](function(_0x3aa338) {
                const _0x51a90e = _0x5d3240;
                var _0x48bfbe = $(this)[_0x51a90e(0xb3)](_0x51a90e(0x101));
                $(_0x51a90e(0x106) + _0x48bfbe + _0x51a90e(0x114))[_0x51a90e(0x12a)] ==
                    0x0 ?
                    (!empReqRadio["find"](
                            (_0x62981f) => _0x62981f[_0x51a90e(0x236)] === _0x3aa338
                        ) && empReqRadio[_0x51a90e(0xa2)]({ input: _0x3aa338 }),
                        unfilledArr[_0x51a90e(0xa2)]({
                            input: $(this)[_0x51a90e(0xb3)]("name"),
                        })) :
                    (empReqRadio = empReqRadio[_0x51a90e(0xd6)](
                        (_0x2334d7) => _0x2334d7[_0x51a90e(0x236)] !== _0x3aa338
                    )),
                    empReqRadio[_0x51a90e(0x12a)] === 0x0 ?
                    (radioFilled = !![]) :
                    (radioFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](":input[type=\x22text\x22][required]")["each"](function(_0x4a985d) {
                const _0x59cb86 = _0x5d3240;
                let _0x236d8d = $(this)[_0x59cb86(0x218)]()[_0x59cb86(0x12a)],
                    _0x21fadf = $(this)["data"](_0x59cb86(0xcc)) ?
                    $(this)[_0x59cb86(0x108)](_0x59cb86(0xcc)) :
                    0x0;
                $(this)[_0x59cb86(0x218)]() !== "" && _0x236d8d >= _0x21fadf ?
                    (empReqInput = empReqInput[_0x59cb86(0xd6)](
                        (_0x23eb60) => _0x23eb60[_0x59cb86(0x236)] !== _0x4a985d
                    )) :
                    (!empReqInput["find"](
                            (_0x2697e1) => _0x2697e1[_0x59cb86(0x236)] === _0x4a985d
                        ) && empReqInput[_0x59cb86(0xa2)]({ input: _0x4a985d }),
                        unfilledArr[_0x59cb86(0xa2)]({
                            input: $(this)[_0x59cb86(0xb3)](_0x59cb86(0x101)),
                        })),
                    empReqInput[_0x59cb86(0x12a)] === 0x0 ?
                    (inputFilled = !![]) :
                    (inputFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x174))[_0x5d3240(0x13e)](function(_0x8a7cf9) {
                const _0x506aad = _0x5d3240;
                let _0x2bb63d = $(this)[_0x506aad(0x218)]()[_0x506aad(0x12a)],
                    _0x1fe5a9 = $(this)[_0x506aad(0x108)](_0x506aad(0xcc)) ?
                    $(this)[_0x506aad(0x108)](_0x506aad(0xcc)) :
                    0x0;
                $(this)[_0x506aad(0x218)]() !== "" && _0x2bb63d >= _0x1fe5a9 ?
                    (empReqPassword = empReqPassword["filter"](
                        (_0x49caac) => _0x49caac[_0x506aad(0x236)] !== _0x8a7cf9
                    )) :
                    (!empReqPassword[_0x506aad(0x1fd)](
                            (_0x5f500d) => _0x5f500d["input"] === _0x8a7cf9
                        ) && empReqPassword[_0x506aad(0xa2)]({ input: _0x8a7cf9 }),
                        unfilledArr[_0x506aad(0xa2)]({
                            input: $(this)[_0x506aad(0xb3)]("name"),
                        })),
                    empReqPassword[_0x506aad(0x12a)] === 0x0 ?
                    (passwordFilled = !![]) :
                    (passwordFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x1f5))["each"](function(_0xcd1ac2) {
                const _0x22c126 = _0x5d3240;
                let _0x25b62f = $(this)[_0x22c126(0x218)]()[_0x22c126(0x12a)],
                    _0x360346 = $(this)[_0x22c126(0x108)]("min-character") ?
                    $(this)[_0x22c126(0x108)]("min-character") :
                    0x0;
                $(this)[_0x22c126(0x218)]() !== "" && _0x25b62f >= _0x360346 ?
                    (empReqUrl = empReqUrl[_0x22c126(0xd6)](
                        (_0x197ebc) => _0x197ebc["input"] !== _0xcd1ac2
                    )) :
                    (!empReqTime[_0x22c126(0x1fd)](
                            (_0x66afdc) => _0x66afdc[_0x22c126(0x236)] === _0xcd1ac2
                        ) && empReqUrl[_0x22c126(0xa2)]({ input: _0xcd1ac2 }),
                        unfilledArr[_0x22c126(0xa2)]({
                            input: $(this)[_0x22c126(0xb3)](_0x22c126(0x101)),
                        })),
                    empReqUrl[_0x22c126(0x12a)] === 0x0 && validateURL($(this)["val"]()) ?
                    (urlFilled = !![]) :
                    (urlFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0xcd))[_0x5d3240(0x13e)](function(_0x48c004) {
                const _0x23c902 = _0x5d3240;
                let _0x600aac = $(this)["val"]()["length"],
                    _0x15ce37 = $(this)["data"](_0x23c902(0xcc)) ?
                    $(this)[_0x23c902(0x108)](_0x23c902(0xcc)) :
                    0x0;
                $(this)[_0x23c902(0x218)]() !== "" && _0x600aac >= _0x15ce37 ?
                    (empReqTime = empReqTime[_0x23c902(0xd6)](
                        (_0x1223c5) => _0x1223c5[_0x23c902(0x236)] !== _0x48c004
                    )) :
                    (!empReqTime[_0x23c902(0x1fd)](
                            (_0x4673a9) => _0x4673a9[_0x23c902(0x236)] === _0x48c004
                        ) && empReqTime[_0x23c902(0xa2)]({ input: _0x48c004 }),
                        unfilledArr["push"]({
                            input: $(this)[_0x23c902(0xb3)](_0x23c902(0x101)),
                        })),
                    empReqTime[_0x23c902(0x12a)] === 0x0 ?
                    (timeFilled = !![]) :
                    (timeFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0xd2))["each"](function(_0xb8fde1) {
                const _0x445bd3 = _0x5d3240;
                $(this)[_0x445bd3(0x218)]() !== "" ?
                    (empReqDate = empReqDate[_0x445bd3(0xd6)](
                        (_0x5e9b8f) => _0x5e9b8f[_0x445bd3(0x236)] !== _0xb8fde1
                    )) :
                    (!empReqDate["find"](
                            (_0x570d0a) => _0x570d0a[_0x445bd3(0x236)] === _0xb8fde1
                        ) && empReqDate[_0x445bd3(0xa2)]({ input: _0xb8fde1 }),
                        unfilledArr[_0x445bd3(0xa2)]({ input: $(this)["attr"]("name") })),
                    empReqDate[_0x445bd3(0x12a)] === 0x0 ?
                    (dateFilled = !![]) :
                    (dateFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x1c2))[_0x5d3240(0x13e)](function(_0x518ce3) {
                const _0x2a1f0d = _0x5d3240;
                if ($(this)[_0x2a1f0d(0x218)]() !== "") {
                    let _0x3bafed = $(this)[_0x2a1f0d(0x218)]()[_0x2a1f0d(0x12a)],
                        _0x4d71d1 = $(this)["data"]("min-character") ?
                        $(this)[_0x2a1f0d(0x108)](_0x2a1f0d(0xcc)) :
                        0x0;
                    if ($(this)[_0x2a1f0d(0x108)](_0x2a1f0d(0xc7))) {
                        var _0x434c68 = phoneAutoFormat(
                            $(this)[_0x2a1f0d(0x108)](_0x2a1f0d(0xc7))
                        );
                        $(this)[_0x2a1f0d(0x218)](_0x434c68($(this)[_0x2a1f0d(0x218)]()));
                    }
                    phoneValidation($(this)["val"](), _0x3bafed, _0x4d71d1) ?
                        (empReqTel = empReqTel[_0x2a1f0d(0xd6)](
                            (_0xf388d2) => _0xf388d2["input"] !== _0x518ce3
                        )) :
                        empReqTel[_0x2a1f0d(0xa2)]({ input: _0x518ce3 });
                } else !empReqTel[_0x2a1f0d(0x1fd)]((_0x46ad7b) => _0x46ad7b[_0x2a1f0d(0x236)] === _0x518ce3) && empReqTel[_0x2a1f0d(0xa2)]({ input: _0x518ce3 }), unfilledArr[_0x2a1f0d(0xa2)]({ input: $(this)["attr"](_0x2a1f0d(0x101)) });
                empReqTel[_0x2a1f0d(0x12a)] === 0x0 ?
                    (telFilled = !![]) :
                    (telFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x1bb))["each"](function(_0x337e2b) {
                const _0x356fab = _0x5d3240;
                $(this)["val"]() !== "" ?
                    (empReqFile = empReqFile["filter"](
                        (_0x5c5ff9) => _0x5c5ff9[_0x356fab(0x236)] !== _0x337e2b
                    )) :
                    (!empReqFile["find"](
                            (_0x4ddc70) => _0x4ddc70[_0x356fab(0x236)] === _0x337e2b
                        ) && empReqFile[_0x356fab(0xa2)]({ input: _0x337e2b }),
                        unfilledArr[_0x356fab(0xa2)]({
                            input: $(this)[_0x356fab(0xb3)](_0x356fab(0x101)),
                        })),
                    empReqFile[_0x356fab(0x12a)] === 0x0 ?
                    (fileFilled = !![]) :
                    (fileFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x16c))[_0x5d3240(0x13e)](function(_0xb2e997) {
                const _0x454a96 = _0x5d3240;
                let _0x4d8ddb = $(this)[_0x454a96(0x218)]()[_0x454a96(0x12a)],
                    _0x288e27 = $(this)["data"](_0x454a96(0xcc)) ?
                    $(this)[_0x454a96(0x108)](_0x454a96(0xcc)) :
                    0x0;
                $(this)[_0x454a96(0x218)]() !== "" && _0x4d8ddb >= _0x288e27 ?
                    (empReqNum = empReqNum[_0x454a96(0xd6)](
                        (_0x3176d2) => _0x3176d2[_0x454a96(0x236)] !== _0xb2e997
                    )) :
                    (!empReqNum[_0x454a96(0x1fd)](
                            (_0x42ebd5) => _0x42ebd5[_0x454a96(0x236)] === _0xb2e997
                        ) && empReqNum[_0x454a96(0xa2)]({ input: _0xb2e997 }),
                        unfilledArr[_0x454a96(0xa2)]({
                            input: $(this)[_0x454a96(0xb3)](_0x454a96(0x101)),
                        })),
                    empReqNum[_0x454a96(0x12a)] === 0x0 ?
                    (numFilled = !![]) :
                    (numFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x16f))[_0x5d3240(0x13e)](function(_0x47a74c) {
                const _0x5e6e1d = _0x5d3240;
                let _0x4d84ec = $(this)[_0x5e6e1d(0x218)]();
                _0x4d84ec === "" && (_0x4d84ec = null),
                    _0x4d84ec != null ?
                    (empReqSelect = empReqSelect[_0x5e6e1d(0xd6)](
                        (_0x250d6c) => _0x250d6c["input"] !== _0x47a74c
                    )) :
                    (!empReqSelect[_0x5e6e1d(0x1fd)](
                            (_0x5ac268) => _0x5ac268[_0x5e6e1d(0x236)] === _0x47a74c
                        ) && empReqSelect["push"]({ input: _0x47a74c }),
                        unfilledArr[_0x5e6e1d(0xa2)]({
                            input: $(this)[_0x5e6e1d(0xb3)]("name"),
                        })),
                    empReqSelect[_0x5e6e1d(0x12a)] === 0x0 ?
                    (selectFilled = !![]) :
                    (selectFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x142))[_0x5d3240(0x13e)](function(_0x4e6c6b) {
                const _0x47c784 = _0x5d3240;
                let _0x22d25f = $(this)["val"]()[_0x47c784(0x12a)],
                    _0x100a05 = $(this)[_0x47c784(0x108)](_0x47c784(0xcc)) ?
                    $(this)[_0x47c784(0x108)](_0x47c784(0xcc)) :
                    0x0;
                $(this)["val"]() !== "" && _0x22d25f >= _0x100a05 ?
                    (empReqTextarea = empReqTextarea[_0x47c784(0xd6)](
                        (_0x4b658a) => _0x4b658a[_0x47c784(0x236)] !== _0x4e6c6b
                    )) :
                    (!empReqTextarea["find"](
                            (_0x552c9b) => _0x552c9b[_0x47c784(0x236)] === _0x4e6c6b
                        ) && empReqTextarea["push"]({ input: _0x4e6c6b }),
                        unfilledArr[_0x47c784(0xa2)]({ input: $(this)["attr"]("name") })),
                    empReqTextarea[_0x47c784(0x12a)] === 0x0 ?
                    (textareaFilled = !![]) :
                    (textareaFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](":input[type=\x22email\x22][required]")[_0x5d3240(0x13e)](function() {
                const _0x1999e8 = _0x5d3240;
                $(this)["val"]() !== "" ?
                    validateEmail(
                        $(this)["val"](),
                        $(this)[_0x1999e8(0x108)](_0x1999e8(0x1e7)),
                        $(this)[_0x1999e8(0xb3)](_0x1999e8(0x101))
                    ) :
                    ((emailFilled = ![]),
                        unfilledArr[_0x1999e8(0xa2)]({
                            input: $(this)[_0x1999e8(0xb3)](_0x1999e8(0x101)),
                        }));
            });
    } else {
        if ($(steps[x])[_0x5d3240(0x108)](_0x5d3240(0x148)))
            (answer = $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x14e))[_0x5d3240(0x108)](_0x5d3240(0x109))),
            (selections = selections[_0x5d3240(0xd6)](
                (_0xb4fcdd) => _0xb4fcdd["step"] !== x
            )),
            selections["push"]({ step: x, selected: answer }),
            (next = !![]),
            (back = ![]);
        else
            $(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x108)](_0x5d3240(0x148)) &&
            ((answer = $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x108)](_0x5d3240(0x109))),
                (selections = selections[_0x5d3240(0xd6)](
                    (_0x5c75d8) => _0x5c75d8[_0x5d3240(0x1a5)] !== x
                )),
                selections[_0x5d3240(0xa2)]({ step: x, selected: answer }),
                (next = !![]),
                (back = ![]));
        let _0x299a9b = $(steps[x])[_0x5d3240(0x1fd)](
                ".active-answer-card\x20:input[type=\x27checkbox\x27]"
            ),
            _0xc00b30 = _0x299a9b[_0x5d3240(0xd6)]("[required]"),
            _0x5b5462 = _0x299a9b["filter"](_0x5d3240(0x1c6)),
            _0x3a7e81 = _0xc00b30["filter"](_0x5d3240(0x1c6)),
            _0x3f4ab0 = _0xc00b30[_0x5d3240(0x12a)] === 0x0,
            _0x3fec4a = _0x5b5462[_0x5d3240(0x12a)],
            _0x2ba0c9 = _0x3a7e81[_0x5d3240(0x12a)];
        console[_0x5d3240(0x234)](_0x3fec4a);
        if (_0x299a9b[_0x5d3240(0x12a)] > 0x0) {
            if (checkCount === "*" || checkCount > _0x299a9b[_0x5d3240(0x12a)])
                _0x299a9b[_0x5d3240(0x13e)](function() {
                    const _0x5405c8 = _0x5d3240;
                    let _0x2022c4 = $(this),
                        _0x1413b9 = _0x2022c4["is"](":checked");
                    if (_0x1413b9) {
                        (checkboxFilled = !![]),
                        resetInputErrorMessage(_0x2022c4["attr"](_0x5405c8(0x101)));
                        if (_0x3f4ab0) {
                            let _0x4711ce = _0x2022c4[_0x5405c8(0x13d)](_0x5405c8(0x1fa))[
                                    _0x5405c8(0x108)
                                ]("skip-to"),
                                _0x17d163 = _0x2022c4[_0x5405c8(0x13d)](_0x5405c8(0x14e))[
                                    _0x5405c8(0xb3)
                                ]("data-go-to");
                            if (_0x17d163) {
                                (selections = selections[_0x5405c8(0xd6)](
                                    (_0x239983) => _0x239983["step"] !== x
                                )),
                                selections["push"]({ step: x, selected: _0x17d163 });
                                if (_0x4711ce) {
                                    (selections = selections[_0x5405c8(0xd6)](
                                        (_0x89b4c1) =>
                                        _0x89b4c1[_0x5405c8(0x1a5)] !== _0x4711ce - 0x2
                                    )),
                                    selections[_0x5405c8(0xa2)]({
                                        step: _0x4711ce - 0x2,
                                        selected: _0x17d163,
                                    });
                                    let _0x24d32b = selections[_0x5405c8(0x205)](
                                        (_0x1528cc) => _0x1528cc[_0x5405c8(0x1a5)] === x
                                    );
                                    (selections[_0x24d32b][_0x5405c8(0x1d3)] =
                                        parseInt(_0x4711ce) - 0x1),
                                    (selections[_0x24d32b][_0x5405c8(0x220)] = x);
                                }
                            }
                        }
                    } else(checkboxFilled = ![]), unfilledArr[_0x5405c8(0xa2)]({ input: _0x2022c4["attr"]("name") });
                });
            else {
                if (_0x3fec4a >= checkCount) {
                    console["log"](_0x5d3240(0x22b));
                    if (_0xc00b30[_0x5d3240(0x12a)] > 0x0) {
                        if (_0xc00b30[_0x5d3240(0x12a)] === _0x2ba0c9) {
                            let _0x102999 = _0x5b5462[_0x5d3240(0x15a)](),
                                _0x163313 = _0x102999[_0x5d3240(0x13d)]("[data-skip-to]")[
                                    _0x5d3240(0x108)
                                ](_0x5d3240(0x206)),
                                _0x3a57cf =
                                _0x102999["closest"]("[data-go-to]")[_0x5d3240(0xb3)](
                                    "data-go-to"
                                );
                            if (_0x3a57cf) {
                                (selections = selections[_0x5d3240(0xd6)](
                                    (_0x323d02) => _0x323d02[_0x5d3240(0x1a5)] !== x
                                )),
                                selections["push"]({ step: x, selected: _0x3a57cf });
                                if (_0x163313) {
                                    (selections = selections[_0x5d3240(0xd6)](
                                        (_0x54bcc5) =>
                                        _0x54bcc5[_0x5d3240(0x1a5)] !== _0x163313 - 0x2
                                    )),
                                    selections[_0x5d3240(0xa2)]({
                                        step: _0x163313 - 0x2,
                                        selected: _0x3a57cf,
                                    });
                                    let _0x559e61 = selections[_0x5d3240(0x205)](
                                        (_0x16e336) => _0x16e336[_0x5d3240(0x1a5)] === x
                                    );
                                    (selections[_0x559e61][_0x5d3240(0x1d3)] =
                                        parseInt(_0x163313) - 0x1),
                                    (selections[_0x559e61][_0x5d3240(0x220)] = x);
                                }
                            }
                            (checkboxFilled = !![]),
                            resetInputErrorMessage(
                                _0xc00b30[_0x5d3240(0x15a)]()["attr"](_0x5d3240(0x101))
                            );
                        } else
                            (checkboxFilled = ![]),
                            _0xc00b30["not"](_0x5d3240(0x1c6))[_0x5d3240(0x13e)](
                                function() {
                                    const _0x301ae8 = _0x5d3240;
                                    unfilledArr[_0x301ae8(0xa2)]({
                                        input: $(this)[_0x301ae8(0xb3)]("name"),
                                    });
                                }
                            );
                    } else {
                        if (maxCheckCount > _0x3fec4a || maxCheckCount < 0x1) {
                            console["log"]("not\x20maxed");
                            let _0xecfa79 = _0x5b5462[_0x5d3240(0x15a)](),
                                _0x535d44 = _0xecfa79[_0x5d3240(0x13d)]("[data-skip-to]")[
                                    _0x5d3240(0x108)
                                ](_0x5d3240(0x206)),
                                _0x257b42 = _0xecfa79["closest"](_0x5d3240(0x14e))[
                                    _0x5d3240(0xb3)
                                ](_0x5d3240(0x152));
                            if (_0x257b42) {
                                (selections = selections[_0x5d3240(0xd6)](
                                    (_0x56179e) => _0x56179e["step"] !== x
                                )),
                                selections["push"]({ step: x, selected: _0x257b42 });
                                if (_0x535d44) {
                                    (selections = selections["filter"](
                                        (_0x5340e8) =>
                                        _0x5340e8[_0x5d3240(0x1a5)] !== _0x535d44 - 0x2
                                    )),
                                    selections[_0x5d3240(0xa2)]({
                                        step: _0x535d44 - 0x2,
                                        selected: _0x257b42,
                                    });
                                    let _0x3b2188 = selections[_0x5d3240(0x205)](
                                        (_0x11bbdb) => _0x11bbdb[_0x5d3240(0x1a5)] === x
                                    );
                                    (selections[_0x3b2188][_0x5d3240(0x1d3)] =
                                        parseInt(_0x535d44) - 0x1),
                                    (selections[_0x3b2188]["backTo"] = x);
                                }
                            }
                            (checkboxFilled = !![]),
                            $(steps[x])["find"](_0x5d3240(0xed))["parent"](_0x5d3240(0x14b))[_0x5d3240(0x160)](_0x5d3240(0x207)),
                                $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0xed))["prop"](_0x5d3240(0x207), ![]);
                        } else
                            maxCheckCount > 0x0 &&
                            ($(steps[x])[_0x5d3240(0x1fd)](
                                    "input[type=\x22checkbox\x22]:not(:checked)"
                                )[_0x5d3240(0x1e6)](_0x5d3240(0x14b))["addClass"](_0x5d3240(0x207)),
                                $(steps[x])[_0x5d3240(0x1fd)](
                                    "input[type=\x22checkbox\x22]:not(:checked)"
                                )[_0x5d3240(0x129)]("disabled", !![]));
                    }
                } else
                    checkCount >= 0x0 &&
                    ((checkboxFilled = ![]),
                        _0xc00b30[_0x5d3240(0x199)](_0x5d3240(0x1c6))[_0x5d3240(0x13e)](
                            function() {
                                const _0x132145 = _0x5d3240;
                                unfilledArr[_0x132145(0xa2)]({
                                    input: $(this)[_0x132145(0xb3)](_0x132145(0x101)),
                                });
                            }
                        ),
                        unfilledArr["push"]({
                            input: _0x299a9b[_0x5d3240(0x15a)]()[_0x5d3240(0xb3)]("name"),
                        }));
            }
        }
        $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x15d))["each"](function(_0x48e18f) {
                const _0x35325d = _0x5d3240;
                var _0x44e94e = $(this)[_0x35325d(0xb3)]("name");
                $(_0x35325d(0x106) + _0x44e94e + "\x22]:checked")[_0x35325d(0x12a)] ==
                    0x0 ?
                    (!empReqRadio[_0x35325d(0x1fd)](
                            (_0x389a62) => _0x389a62[_0x35325d(0x236)] === _0x48e18f
                        ) && empReqRadio["push"]({ input: _0x48e18f }),
                        unfilledArr["push"]({
                            input: $(this)[_0x35325d(0xb3)](_0x35325d(0x101)),
                        })) :
                    (empReqRadio = empReqRadio[_0x35325d(0xd6)](
                        (_0x5cf022) => _0x5cf022["input"] !== _0x48e18f
                    )),
                    empReqRadio[_0x35325d(0x12a)] === 0x0 ?
                    (radioFilled = !![]) :
                    (radioFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](":input[type=\x22text\x22][required]")[_0x5d3240(0x13e)](function(_0x17eceb) {
                const _0x395241 = _0x5d3240;
                let _0x3e9d2b = $(this)[_0x395241(0x218)]()["length"],
                    _0x3d4035 = $(this)[_0x395241(0x108)](_0x395241(0xcc)) ?
                    $(this)[_0x395241(0x108)](_0x395241(0xcc)) :
                    0x0;
                $(this)[_0x395241(0x218)]() !== "" && _0x3e9d2b >= _0x3d4035 ?
                    (empReqInput = empReqInput[_0x395241(0xd6)](
                        (_0x241743) => _0x241743["input"] !== _0x17eceb
                    )) :
                    (!empReqInput[_0x395241(0x1fd)](
                            (_0x31bfc1) => _0x31bfc1[_0x395241(0x236)] === _0x17eceb
                        ) && empReqInput[_0x395241(0xa2)]({ input: _0x17eceb }),
                        unfilledArr[_0x395241(0xa2)]({
                            input: $(this)[_0x395241(0xb3)](_0x395241(0x101)),
                        })),
                    empReqInput["length"] === 0x0 ?
                    (inputFilled = !![]) :
                    (inputFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0xf1))[_0x5d3240(0x13e)](function(_0x318c01) {
                const _0x2cbb3b = _0x5d3240;
                (skipTo = undefined),
                $(this)["parents"]("[data-skip-to]")[_0x2cbb3b(0x108)](_0x2cbb3b(0x206)) !== "" &&
                    (skipTo = $(this)[_0x2cbb3b(0x112)](_0x2cbb3b(0x1fa))["data"]("skip-to")),
                    $(this)[_0x2cbb3b(0x112)](_0x2cbb3b(0x14e))[_0x2cbb3b(0xb3)](_0x2cbb3b(0x152)) &&
                    ((answer = $(this)["parents"](_0x2cbb3b(0x14e))[_0x2cbb3b(0xb3)](_0x2cbb3b(0x152))),
                        (selections = selections[_0x2cbb3b(0xd6)](
                            (_0x5d89f2) => _0x5d89f2[_0x2cbb3b(0x1a5)] !== x
                        )),
                        selections[_0x2cbb3b(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x2cbb3b(0xd6)](
                                (_0x16e0cc) => _0x16e0cc["step"] !== skipTo - 0x2
                            )),
                            selections["push"]({ step: skipTo - 0x2, selected: answer }),
                            (objIndex = selections[_0x2cbb3b(0x205)](
                                (_0x4668f4) => _0x4668f4["step"] === x
                            )),
                            (selections[objIndex][_0x2cbb3b(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x2cbb3b(0x220)] = x)));
            }),
            $(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x174))[_0x5d3240(0x13e)](function(_0x170053) {
                const _0x58e2a5 = _0x5d3240;
                let _0x56821e = $(this)[_0x58e2a5(0x218)]()["length"],
                    _0x1da6f9 = $(this)[_0x58e2a5(0x108)]("min-character") ?
                    $(this)[_0x58e2a5(0x108)](_0x58e2a5(0xcc)) :
                    0x0;
                $(this)[_0x58e2a5(0x218)]() !== "" && _0x56821e >= _0x1da6f9 ?
                    (empReqPassword = empReqPassword["filter"](
                        (_0x86cbf) => _0x86cbf[_0x58e2a5(0x236)] !== _0x170053
                    )) :
                    (!empReqPassword["find"](
                            (_0x234c3c) => _0x234c3c[_0x58e2a5(0x236)] === _0x170053
                        ) && empReqPassword["push"]({ input: _0x170053 }),
                        unfilledArr[_0x58e2a5(0xa2)]({ input: $(this)["attr"]("name") })),
                    empReqPassword[_0x58e2a5(0x12a)] === 0x0 ?
                    (passwordFilled = !![]) :
                    (passwordFilled = ![]);
            }),
            $(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0xaa))[_0x5d3240(0x13e)](function(_0x1e06b5) {
                const _0x3729b1 = _0x5d3240;
                (skipTo = undefined),
                $(this)[_0x3729b1(0x112)](_0x3729b1(0x1fa))[_0x3729b1(0x108)](_0x3729b1(0x206)) !== "" &&
                    (skipTo = $(this)[_0x3729b1(0x112)]("[data-skip-to]")[_0x3729b1(0x108)]("skip-to")),
                    $(this)[_0x3729b1(0x112)](_0x3729b1(0x14e))["attr"](_0x3729b1(0x152)) &&
                    ((answer = $(this)[_0x3729b1(0x112)](_0x3729b1(0x14e))["attr"](_0x3729b1(0x152))),
                        (selections = selections[_0x3729b1(0xd6)](
                            (_0x1855ff) => _0x1855ff[_0x3729b1(0x1a5)] !== x
                        )),
                        selections[_0x3729b1(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x3729b1(0xd6)](
                                (_0xa3ec64) => _0xa3ec64["step"] !== skipTo - 0x2
                            )),
                            selections[_0x3729b1(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x3729b1(0x205)](
                                (_0x336915) => _0x336915["step"] === x
                            )),
                            (selections[objIndex][_0x3729b1(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x3729b1(0x220)] = x)));
            }),
            $(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x1f5))["each"](function(_0x3f7117) {
                const _0x1177f3 = _0x5d3240;
                let _0x1b434d = $(this)[_0x1177f3(0x218)]()[_0x1177f3(0x12a)],
                    _0x5b2c71 = $(this)[_0x1177f3(0x108)](_0x1177f3(0xcc)) ?
                    $(this)[_0x1177f3(0x108)](_0x1177f3(0xcc)) :
                    0x0;
                $(this)[_0x1177f3(0x218)]() !== "" && _0x1b434d >= _0x5b2c71 ?
                    (empReqUrl = empReqUrl["filter"](
                        (_0x50fdfd) => _0x50fdfd["input"] !== _0x3f7117
                    )) :
                    (!empReqUrl["find"](
                            (_0x175bf2) => _0x175bf2["input"] === _0x3f7117
                        ) && empReqUrl[_0x1177f3(0xa2)]({ input: _0x3f7117 }),
                        unfilledArr[_0x1177f3(0xa2)]({
                            input: $(this)["attr"](_0x1177f3(0x101)),
                        })),
                    empReqUrl[_0x1177f3(0x12a)] === 0x0 &&
                    validateURL($(this)[_0x1177f3(0x218)]()) ?
                    (urlFilled = !![]) :
                    (urlFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](".active-answer-card")[_0x5d3240(0x1fd)](_0x5d3240(0x1c4))[_0x5d3240(0x13e)](function(_0x1c849) {
                const _0x4fd3f0 = _0x5d3240;
                (skipTo = undefined),
                $(this)["parents"](_0x4fd3f0(0x1fa))[_0x4fd3f0(0x108)](_0x4fd3f0(0x206)) !== "" &&
                    (skipTo = $(this)[_0x4fd3f0(0x112)](_0x4fd3f0(0x1fa))["data"](_0x4fd3f0(0x206))),
                    $(this)[_0x4fd3f0(0x112)](_0x4fd3f0(0x14e))[_0x4fd3f0(0xb3)](_0x4fd3f0(0x152)) &&
                    ((answer = $(this)["parents"](_0x4fd3f0(0x14e))[_0x4fd3f0(0xb3)](_0x4fd3f0(0x152))),
                        (selections = selections[_0x4fd3f0(0xd6)](
                            (_0x40bb84) => _0x40bb84[_0x4fd3f0(0x1a5)] !== x
                        )),
                        selections["push"]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x4fd3f0(0xd6)](
                                (_0x3dc2e7) => _0x3dc2e7[_0x4fd3f0(0x1a5)] !== skipTo - 0x2
                            )),
                            selections[_0x4fd3f0(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x4fd3f0(0x205)](
                                (_0x32ebd3) => _0x32ebd3[_0x4fd3f0(0x1a5)] === x
                            )),
                            (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0xd2))[_0x5d3240(0x13e)](function(_0x2508f8) {
                const _0x114de7 = _0x5d3240;
                $(this)["val"]() !== "" ?
                    (empReqDate = empReqDate["filter"](
                        (_0x8a9003) => _0x8a9003[_0x114de7(0x236)] !== _0x2508f8
                    )) :
                    (!empReqDate[_0x114de7(0x1fd)](
                            (_0x575c94) => _0x575c94[_0x114de7(0x236)] === _0x2508f8
                        ) && empReqDate["push"]({ input: _0x2508f8 }),
                        unfilledArr[_0x114de7(0xa2)]({
                            input: $(this)[_0x114de7(0xb3)](_0x114de7(0x101)),
                        })),
                    empReqDate[_0x114de7(0x12a)] === 0x0 ?
                    (dateFilled = !![]) :
                    (dateFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](".active-answer-card")[_0x5d3240(0x1fd)](_0x5d3240(0xd8))[_0x5d3240(0x13e)](function(_0x253413) {
                const _0x26a0e6 = _0x5d3240;
                (skipTo = undefined),
                $(this)["parents"](_0x26a0e6(0x1fa))[_0x26a0e6(0x108)](_0x26a0e6(0x206)) !== "" &&
                    (skipTo = $(this)[_0x26a0e6(0x112)](_0x26a0e6(0x1fa))[_0x26a0e6(0x108)](_0x26a0e6(0x206))),
                    $(this)[_0x26a0e6(0x112)]("[data-go-to]")[_0x26a0e6(0xb3)](_0x26a0e6(0x152)) &&
                    ((answer = $(this)["parents"](_0x26a0e6(0x14e))[_0x26a0e6(0xb3)](_0x26a0e6(0x152))),
                        (selections = selections[_0x26a0e6(0xd6)](
                            (_0x542194) => _0x542194[_0x26a0e6(0x1a5)] !== x
                        )),
                        selections["push"]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x26a0e6(0xd6)](
                                (_0x2888aa) => _0x2888aa[_0x26a0e6(0x1a5)] !== skipTo - 0x2
                            )),
                            selections["push"]({ step: skipTo - 0x2, selected: answer }),
                            (objIndex = selections[_0x26a0e6(0x205)](
                                (_0x4356e7) => _0x4356e7["step"] === x
                            )),
                            (selections[objIndex][_0x26a0e6(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x26a0e6(0x220)] = x)));
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0xcd))[_0x5d3240(0x13e)](function(_0x416db6) {
                const _0x51b68f = _0x5d3240;
                $(this)[_0x51b68f(0x218)]() !== "" ?
                    (empReqTime = empReqTime[_0x51b68f(0xd6)](
                        (_0x5675b6) => _0x5675b6["input"] !== _0x416db6
                    )) :
                    (!empReqTime[_0x51b68f(0x1fd)](
                            (_0x2feffc) => _0x2feffc[_0x51b68f(0x236)] === _0x416db6
                        ) && empReqTime[_0x51b68f(0xa2)]({ input: _0x416db6 }),
                        unfilledArr[_0x51b68f(0xa2)]({
                            input: $(this)[_0x51b68f(0xb3)](_0x51b68f(0x101)),
                        })),
                    empReqTime[_0x51b68f(0x12a)] === 0x0 ?
                    (timeFilled = !![]) :
                    (timeFilled = ![]);
            }),
            $(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x94))[_0x5d3240(0x13e)](function(_0x15b08d) {
                const _0x4ca48f = _0x5d3240;
                (skipTo = undefined),
                $(this)[_0x4ca48f(0x112)](_0x4ca48f(0x1fa))["data"](_0x4ca48f(0x206)) !== "" &&
                    (skipTo = $(this)[_0x4ca48f(0x112)](_0x4ca48f(0x1fa))["data"](_0x4ca48f(0x206))),
                    $(this)[_0x4ca48f(0x112)](_0x4ca48f(0x14e))["attr"](_0x4ca48f(0x152)) &&
                    ((answer = $(this)["parents"](_0x4ca48f(0x14e))[_0x4ca48f(0xb3)](_0x4ca48f(0x152))),
                        (selections = selections[_0x4ca48f(0xd6)](
                            (_0x5458a2) => _0x5458a2["step"] !== x
                        )),
                        selections[_0x4ca48f(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections["filter"](
                                (_0x14f3ea) => _0x14f3ea[_0x4ca48f(0x1a5)] !== skipTo - 0x2
                            )),
                            selections[_0x4ca48f(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections["findIndex"](
                                (_0x4cad18) => _0x4cad18[_0x4ca48f(0x1a5)] === x
                            )),
                            (selections[objIndex][_0x4ca48f(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x4ca48f(0x220)] = x)));
            }),
            $(steps[x])["find"](_0x5d3240(0x21f))["find"](_0x5d3240(0x16c))[_0x5d3240(0x13e)](function(_0x3ea107) {
                const _0x35d71d = _0x5d3240;
                let _0x204368 = $(this)[_0x35d71d(0x218)]()[_0x35d71d(0x12a)],
                    _0xc64310 = $(this)[_0x35d71d(0x108)]("min-character") ?
                    $(this)["data"](_0x35d71d(0xcc)) :
                    0x0;
                $(this)[_0x35d71d(0x218)]() !== "" && _0x204368 >= _0xc64310 ?
                    (empReqNum = empReqNum["filter"](
                        (_0x3c5803) => _0x3c5803[_0x35d71d(0x236)] !== _0x3ea107
                    )) :
                    (!empReqNum[_0x35d71d(0x1fd)](
                            (_0x392a66) => _0x392a66[_0x35d71d(0x236)] === _0x3ea107
                        ) && empReqNum["push"]({ input: _0x3ea107 }),
                        unfilledArr["push"]({
                            input: $(this)[_0x35d71d(0xb3)](_0x35d71d(0x101)),
                        })),
                    empReqNum["length"] === 0x0 ?
                    (numFilled = !![]) :
                    (numFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](":input[type=\x22number\x22]")[_0x5d3240(0x13e)](function(_0x1b696a) {
                const _0xc4164a = _0x5d3240;
                (skipTo = undefined),
                $(this)[_0xc4164a(0x112)](_0xc4164a(0x1fa))["data"]("skip-to") !==
                    "" &&
                    (skipTo = $(this)[_0xc4164a(0x112)]("[data-skip-to]")[_0xc4164a(0x108)](_0xc4164a(0x206))),
                    $(this)["parents"](_0xc4164a(0x14e))[_0xc4164a(0xb3)](_0xc4164a(0x152)) &&
                    ((answer = $(this)[_0xc4164a(0x112)](_0xc4164a(0x14e))["attr"](_0xc4164a(0x152))),
                        (selections = selections[_0xc4164a(0xd6)](
                            (_0x4e61e0) => _0x4e61e0[_0xc4164a(0x1a5)] !== x
                        )),
                        selections[_0xc4164a(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0xc4164a(0xd6)](
                                (_0x524a7b) => _0x524a7b[_0xc4164a(0x1a5)] !== skipTo - 0x2
                            )),
                            selections[_0xc4164a(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections["findIndex"](
                                (_0x3519a1) => _0x3519a1[_0xc4164a(0x1a5)] === x
                            )),
                            (selections[objIndex][_0xc4164a(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0xc4164a(0x220)] = x)));
            }),
            $(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x1c2))[_0x5d3240(0x13e)](function(_0x5c527c) {
                const _0x59e70e = _0x5d3240;
                if ($(this)["val"]() !== "") {
                    let _0x4221b0 = $(this)["val"]()[_0x59e70e(0x12a)],
                        _0x5bb67b = $(this)[_0x59e70e(0x108)]("min-character") ?
                        $(this)[_0x59e70e(0x108)](_0x59e70e(0xcc)) :
                        0x0;
                    if ($(this)[_0x59e70e(0x108)](_0x59e70e(0xc7))) {
                        var _0x408dd9 = phoneAutoFormat(
                            $(this)[_0x59e70e(0x108)](_0x59e70e(0xc7))
                        );
                        $(this)[_0x59e70e(0x218)](_0x408dd9($(this)[_0x59e70e(0x218)]()));
                    }
                    phoneValidation($(this)["val"](), _0x4221b0, _0x5bb67b) ?
                        (empReqTel = empReqTel["filter"](
                            (_0x35680e) => _0x35680e[_0x59e70e(0x236)] !== _0x5c527c
                        )) :
                        empReqTel[_0x59e70e(0xa2)]({ input: _0x5c527c });
                } else !empReqTel[_0x59e70e(0x1fd)]((_0x559495) => _0x559495[_0x59e70e(0x236)] === _0x5c527c) && empReqTel[_0x59e70e(0xa2)]({ input: _0x5c527c }), unfilledArr[_0x59e70e(0xa2)]({ input: $(this)[_0x59e70e(0xb3)](_0x59e70e(0x101)) });
                empReqTel[_0x59e70e(0x12a)] === 0x0 ?
                    (telFilled = !![]) :
                    (telFilled = ![]);
            }),
            $(steps[x])["find"](".active-answer-card")[_0x5d3240(0x1fd)](_0x5d3240(0x19a))[_0x5d3240(0x13e)](function(_0x991f29) {
                const _0x427ed9 = _0x5d3240;
                (skipTo = undefined),
                $(this)["parents"](_0x427ed9(0x1fa))[_0x427ed9(0x108)](_0x427ed9(0x206)) !== "" &&
                    (skipTo = $(this)[_0x427ed9(0x112)]("[data-skip-to]")["data"]("skip-to")),
                    $(this)[_0x427ed9(0x112)](_0x427ed9(0x14e))[_0x427ed9(0xb3)](_0x427ed9(0x152)) &&
                    ((answer = $(this)["parents"](_0x427ed9(0x14e))["attr"]("data-go-to")),
                        (selections = selections[_0x427ed9(0xd6)](
                            (_0x1a6912) => _0x1a6912[_0x427ed9(0x1a5)] !== x
                        )),
                        selections[_0x427ed9(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x427ed9(0xd6)](
                                (_0x1fcdbc) => _0x1fcdbc["step"] !== skipTo - 0x2
                            )),
                            selections[_0x427ed9(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections["findIndex"](
                                (_0xcb13eb) => _0xcb13eb[_0x427ed9(0x1a5)] === x
                            )),
                            (selections[objIndex][_0x427ed9(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            $(steps[x])["find"](".active-answer-card")["find"](_0x5d3240(0x1bb))[_0x5d3240(0x13e)](function(_0x29e36a) {
                const _0xdc35cb = _0x5d3240;
                $(this)[_0xdc35cb(0x218)]() !== "" ?
                    (empReqFile = empReqFile[_0xdc35cb(0xd6)](
                        (_0x23a178) => _0x23a178["input"] !== _0x29e36a
                    )) :
                    (!empReqFile[_0xdc35cb(0x1fd)](
                            (_0x449411) => _0x449411[_0xdc35cb(0x236)] === _0x29e36a
                        ) && empReqFile["push"]({ input: _0x29e36a }),
                        unfilledArr[_0xdc35cb(0xa2)]({
                            input: $(this)["attr"](_0xdc35cb(0x101)),
                        })),
                    empReqFile[_0xdc35cb(0x12a)] === 0x0 ?
                    (fileFilled = !![]) :
                    (fileFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x135))[_0x5d3240(0x13e)](function(_0x71ab59) {
                const _0x1e60fa = _0x5d3240;
                (skipTo = undefined),
                $(this)["parents"](_0x1e60fa(0x1fa))[_0x1e60fa(0x108)](_0x1e60fa(0x206)) !== "" &&
                    (skipTo = $(this)[_0x1e60fa(0x112)](_0x1e60fa(0x1fa))[_0x1e60fa(0x108)](_0x1e60fa(0x206))),
                    $(this)[_0x1e60fa(0x112)](_0x1e60fa(0x14e))[_0x1e60fa(0xb3)](_0x1e60fa(0x152)) &&
                    ((answer = $(this)[_0x1e60fa(0x112)]("[data-go-to]")["attr"](_0x1e60fa(0x152))),
                        (selections = selections[_0x1e60fa(0xd6)](
                            (_0x169e21) => _0x169e21["step"] !== x
                        )),
                        selections[_0x1e60fa(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x1e60fa(0xd6)](
                                (_0x36e411) => _0x36e411[_0x1e60fa(0x1a5)] !== skipTo - 0x2
                            )),
                            selections[_0x1e60fa(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections["findIndex"](
                                (_0x4a94d3) => _0x4a94d3["step"] === x
                            )),
                            (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            $(steps[x])[_0x5d3240(0x1fd)](".active-answer-card")[_0x5d3240(0x1fd)](_0x5d3240(0x16f))["each"](function(_0x916521) {
                const _0x382b2e = _0x5d3240;
                $(this)[_0x382b2e(0x218)]() !== null &&
                    $(this)[_0x382b2e(0x218)]() !== "" ?
                    (empReqSelect = empReqSelect["filter"](
                        (_0x170f5b) => _0x170f5b[_0x382b2e(0x236)] !== _0x916521
                    )) :
                    (!empReqSelect["find"](
                            (_0x1526d2) => _0x1526d2[_0x382b2e(0x236)] === _0x916521
                        ) && empReqSelect["push"]({ input: _0x916521 }),
                        unfilledArr[_0x382b2e(0xa2)]({
                            input: $(this)["attr"](_0x382b2e(0x101)),
                        })),
                    empReqSelect[_0x382b2e(0x12a)] === 0x0 ?
                    (selectFilled = !![]) :
                    (selectFilled = ![]);
            }),
            $(steps[x])[_0x5d3240(0x1fd)](".active-answer-card")[_0x5d3240(0x1fd)]("select")[_0x5d3240(0x13e)](function(_0x132835) {
                const _0x41552b = _0x5d3240;
                (skipTo = undefined),
                $(this)[_0x41552b(0x112)](_0x41552b(0x1fa))[_0x41552b(0x108)](_0x41552b(0x206)) !== "" &&
                    (skipTo = $(this)[_0x41552b(0x112)](_0x41552b(0x1fa))[_0x41552b(0x108)](_0x41552b(0x206))),
                    $(this)[_0x41552b(0x112)](_0x41552b(0x14e))["attr"](_0x41552b(0x152)) &&
                    ((answer = $(this)[_0x41552b(0x112)](_0x41552b(0x14e))["attr"](_0x41552b(0x152))),
                        (selections = selections[_0x41552b(0xd6)](
                            (_0x1a74e7) => _0x1a74e7[_0x41552b(0x1a5)] !== x
                        )),
                        selections[_0x41552b(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x41552b(0xd6)](
                                (_0x459f10) => _0x459f10[_0x41552b(0x1a5)] !== skipTo - 0x2
                            )),
                            selections[_0x41552b(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections["findIndex"](
                                (_0x3c149b) => _0x3c149b[_0x41552b(0x1a5)] === x
                            )),
                            (selections[objIndex][_0x41552b(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            $(steps[x])[_0x5d3240(0x1fd)](".active-answer-card")[_0x5d3240(0x1fd)](_0x5d3240(0x142))[_0x5d3240(0x13e)](function(_0x36b050) {
                const _0x3e6605 = _0x5d3240;
                let _0x23acd7 = $(this)[_0x3e6605(0x218)]()[_0x3e6605(0x12a)],
                    _0x7dee90 = $(this)[_0x3e6605(0x108)](_0x3e6605(0xcc)) ?
                    $(this)[_0x3e6605(0x108)]("min-character") :
                    0x0;
                $(this)[_0x3e6605(0x218)]() !== "" && _0x23acd7 >= _0x7dee90 ?
                    (empReqTextarea = empReqTextarea[_0x3e6605(0xd6)](
                        (_0x4fb09d) => _0x4fb09d[_0x3e6605(0x236)] !== _0x36b050
                    )) :
                    (!empReqTextarea[_0x3e6605(0x1fd)](
                            (_0x792079) => _0x792079[_0x3e6605(0x236)] === _0x36b050
                        ) && empReqTextarea["push"]({ input: _0x36b050 }),
                        unfilledArr["push"]({
                            input: $(this)["attr"](_0x3e6605(0x101)),
                        })),
                    empReqTextarea[_0x3e6605(0x12a)] === 0x0 ?
                    (textareaFilled = !![]) :
                    (textareaFilled = ![]);
            }),
            $(steps[x])["find"](".active-answer-card")[_0x5d3240(0x1fd)]("textarea")["each"](function(_0x62c544) {
                const _0x40a7c6 = _0x5d3240;
                (skipTo = undefined),
                $(this)[_0x40a7c6(0x112)](_0x40a7c6(0x1fa))[_0x40a7c6(0x108)](_0x40a7c6(0x206)) !== "" &&
                    (skipTo = $(this)[_0x40a7c6(0x112)](_0x40a7c6(0x1fa))[_0x40a7c6(0x108)](_0x40a7c6(0x206))),
                    $(this)[_0x40a7c6(0x112)]("[data-go-to]")[_0x40a7c6(0xb3)](_0x40a7c6(0x152)) &&
                    ((answer = $(this)[_0x40a7c6(0x112)](_0x40a7c6(0x14e))[_0x40a7c6(0xb3)](_0x40a7c6(0x152))),
                        (selections = selections[_0x40a7c6(0xd6)](
                            (_0x2afbaa) => _0x2afbaa["step"] !== x
                        )),
                        selections["push"]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x40a7c6(0xd6)](
                                (_0x560306) => _0x560306["step"] !== skipTo - 0x2
                            )),
                            selections["push"]({ step: skipTo - 0x2, selected: answer }),
                            (objIndex = selections[_0x40a7c6(0x205)](
                                (_0x2a8090) => _0x2a8090["step"] === x
                            )),
                            (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x40a7c6(0x220)] = x)));
            }),
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x1bd))[_0x5d3240(0x13e)](function(_0x486a3d) {
                const _0x19143d = _0x5d3240;
                $(this)[_0x19143d(0x218)]() !== "" ?
                    validateEmail(
                        $(this)[_0x19143d(0x218)](),
                        $(this)[_0x19143d(0x108)](_0x19143d(0x1e7)),
                        $(this)[_0x19143d(0xb3)]("name")
                    ) :
                    ((emailFilled = ![]),
                        unfilledArr["push"]({
                            input: $(this)[_0x19143d(0xb3)](_0x19143d(0x101)),
                        }));
            }),
            $(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x1fd)](_0x5d3240(0x14c))[_0x5d3240(0x13e)](function(_0x391ec5) {
                const _0x2629c7 = _0x5d3240;
                (skipTo = undefined),
                $(this)[_0x2629c7(0x112)](_0x2629c7(0x1fa))["data"]("skip-to") !==
                    "" &&
                    (skipTo = $(this)[_0x2629c7(0x112)]("[data-skip-to]")["data"]("skip-to")),
                    $(this)[_0x2629c7(0x112)](_0x2629c7(0x14e))[_0x2629c7(0xb3)](_0x2629c7(0x152)) &&
                    ((answer = $(this)[_0x2629c7(0x112)](_0x2629c7(0x14e))[_0x2629c7(0xb3)](_0x2629c7(0x152))),
                        (selections = selections["filter"](
                            (_0x7c990d) => _0x7c990d[_0x2629c7(0x1a5)] !== x
                        )),
                        console[_0x2629c7(0x234)](_0x2629c7(0xde), selections, x),
                        selections[_0x2629c7(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x2629c7(0xd6)](
                                (_0x13fe0b) => _0x13fe0b[_0x2629c7(0x1a5)] !== skipTo - 0x2
                            )),
                            selections[_0x2629c7(0xa2)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x2629c7(0x205)](
                                (_0x23e84e) => _0x23e84e[_0x2629c7(0x1a5)] === x
                            )),
                            (selections[objIndex][_0x2629c7(0x1d3)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            });
    }
    $(steps[x])[_0x5d3240(0x1fd)](":input[type=\x22radio\x22]")["is"](_0x5d3240(0x1c6)) &&
        ((selArr = []),
            $(steps)["find"](_0x5d3240(0xe8))[_0x5d3240(0x13e)](function(_0x40cc64, _0x8575e6) {
                const _0xd1489d = _0x5d3240;
                selArr[_0xd1489d(0xa2)]({
                    selected: $(this)[_0xd1489d(0x108)](_0xd1489d(0x119)),
                });
            }),
            (selString = []),
            selArr[_0x5d3240(0x1d0)]((_0x2f170d) =>
                selString[_0x5d3240(0xa2)](_0x2f170d[_0x5d3240(0x119)])
            ),
            $(steps[x])[_0x5d3240(0x1fd)](".active-answer-card")[_0x5d3240(0x1fd)](_0x5d3240(0x18e))[_0x5d3240(0x13e)](function() {
                const _0x11c84c = _0x5d3240;
                skipTo = undefined;
                if (
                    $(this)[_0x11c84c(0x112)](_0x11c84c(0x1fa))[_0x11c84c(0x108)](_0x11c84c(0x206))
                )
                    skipTo = $(this)[_0x11c84c(0x112)](_0x11c84c(0x1fa))[_0x11c84c(0x108)](_0x11c84c(0x206));
                else
                    $(this)[_0x11c84c(0x108)](_0x11c84c(0x206)) &&
                    (skipTo = $(this)[_0x11c84c(0x108)](_0x11c84c(0x206)));
                selections = selections["filter"](
                    (_0x52c926) => _0x52c926[_0x11c84c(0x1a5)] !== x
                );
                if ($(this)[_0x11c84c(0x108)](_0x11c84c(0x109)))
                    (answer = $(this)["attr"]("data-go-to")),
                    selections[_0x11c84c(0xa2)]({ step: x, selected: answer }),
                    skipTo &&
                    ((selections = selections[_0x11c84c(0xd6)](
                            (_0x5dfe54) => _0x5dfe54["step"] !== skipTo - 0x2
                        )),
                        selections[_0x11c84c(0xa2)]({
                            step: skipTo - 0x2,
                            selected: answer,
                        }),
                        (objIndex = selections[_0x11c84c(0x205)](
                            (_0x302508) => _0x302508[_0x11c84c(0x1a5)] === x
                        )),
                        (selections[objIndex][_0x11c84c(0x1d3)] = parseInt(skipTo) - 0x1),
                        (selections[objIndex][_0x11c84c(0x220)] = x));
                else
                    $(this)[_0x11c84c(0x112)](_0x11c84c(0x14e))[_0x11c84c(0x108)](_0x11c84c(0x109)) &&
                    ((answer = $(this)[_0x11c84c(0x112)](_0x11c84c(0x14e))[_0x11c84c(0x108)](_0x11c84c(0x109))),
                        selections[_0x11c84c(0xa2)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections["filter"](
                                (_0x19c210) => _0x19c210[_0x11c84c(0x1a5)] !== skipTo - 0x2
                            )),
                            selections["push"]({ step: skipTo - 0x2, selected: answer }),
                            (objIndex = selections[_0x11c84c(0x205)](
                                (_0x4396d2) => _0x4396d2[_0x11c84c(0x1a5)] === x
                            )),
                            (selections[objIndex][_0x11c84c(0x1d3)] = parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x11c84c(0x220)] = x)));
            }),
            logicExtra ?
            ($(steps[x])["find"](_0x5d3240(0x21f))[_0x5d3240(0x1fd)]("[data-radio-skip]:visible")[_0x5d3240(0x108)](_0x5d3240(0x1e9)) === !![] ||
                $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x22e))[_0x5d3240(0x108)]("radio-skip") === !![]) &&
            skip &&
            selections[_0x5d3240(0xd6)](
                (_0x9b1cac) => _0x9b1cac[_0x5d3240(0x1a5)] === x
            )[_0x5d3240(0x12a)] > 0x0 &&
            textareaLength === 0x0 &&
            textInputLength === 0x0 &&
            emailInputLength === 0x0 &&
            checkboxInputLength === 0x0 &&
            setTimeout(function() {
                (next = !![]), (back = ![]), nextStep(), selectionQuiz();
            }, $(steps[x])[_0x5d3240(0x1fd)]("[data-radio-delay]")[_0x5d3240(0x108)](_0x5d3240(0xdd))) :
            $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x1f3))["data"](_0x5d3240(0x1e9)) === !![] &&
            skip &&
            textareaLength === 0x0 &&
            textInputLength === 0x0 &&
            emailInputLength === 0x0 &&
            checkboxInputLength === 0x0 &&
            setTimeout(function() {
                (next = !![]), (back = ![]), nextStep(), selectionQuiz();
            }, $(steps[x])[_0x5d3240(0x1fd)](_0x5d3240(0x12f))[_0x5d3240(0x108)](_0x5d3240(0xdd)))),
        inputFilled &&
        fileFilled &&
        numFilled &&
        checkboxFilled &&
        telFilled &&
        radioFilled &&
        emailFilled &&
        domainAllowed &&
        selectFilled &&
        textareaFilled &&
        passwordFilled &&
        urlFilled &&
        dateFilled ?
        enableBtn() :
        disableBtn(),
        andLogic(),
        cloneRemove(),
        cloneRemoveInput();
}

function disableRadioQuickTap() {
    const _0x495bb5 = _0x1668e8,
        _0x4cbbbe = 0x1f4;
    $(_0x495bb5(0x1c5))["on"](_0x495bb5(0xdf), function(_0x957976) {
        const _0x4bf478 = _0x495bb5,
            _0x5dd1b3 = $(this);
        if (
            steps["eq"](x)[_0x4bf478(0x1fd)](".active-answer-card")[_0x4bf478(0x1fd)]("[data-radio-skip]:visible")[_0x4bf478(0x108)](_0x4bf478(0x1e9)) === !![] ||
            steps["eq"](x)[_0x4bf478(0x1fd)](_0x4bf478(0x22e))["data"](_0x4bf478(0x1e9)) === !![] ||
            steps["eq"](x)[_0x4bf478(0x1fd)](_0x4bf478(0x1f3))[_0x4bf478(0x108)]("radio-skip") === !![] ||
            steps["eq"](x)["find"](_0x4bf478(0x1f3))[_0x4bf478(0x108)](_0x4bf478(0x1e9)) === !![]
        ) {
            if (_0x5dd1b3[_0x4bf478(0x129)](_0x4bf478(0x207))) {
                _0x957976[_0x4bf478(0x1a9)]();
                return;
            }
            _0x5dd1b3[_0x4bf478(0x129)](_0x4bf478(0x207), !![]),
                setTimeout(() => {
                    _0x5dd1b3["prop"]("disabled", ![]);
                }, _0x4cbbbe);
        }
    });
}

function displayErrorMessage() {
    const _0x4f006a = _0x1668e8;
    $(_0x4f006a(0x180))["hide"](),
        unfilledArr[_0x4f006a(0x12a)] > 0x0 &&
        unfilledArr["forEach"](function(_0x37f31a) {
            const _0x4a375a = _0x4f006a;
            $(_0x4a375a(0x11e) + _0x37f31a[_0x4a375a(0x236)] + "\x22]")[_0x4a375a(0x19b)](_0x4a375a(0x180))[_0x4a375a(0x16d)](),
                $("input[name=\x22" + _0x37f31a[_0x4a375a(0x236)] + "\x22]")[_0x4a375a(0x112)]()["children"]("[data-text=\x22error-message\x22]")["fadeIn"](),
                $("textarea[name=\x22" + _0x37f31a["input"] + "\x22]")[_0x4a375a(0x19b)]("[data-text=\x22error-message\x22]")["fadeIn"](),
                $("select[name=\x22" + _0x37f31a[_0x4a375a(0x236)] + "\x22]")[_0x4a375a(0x19b)]("[data-text=\x22error-message\x22]")["fadeIn"]();
        });
}

function resetInputErrorMessage(_0x211cf7) {
    const _0x303392 = _0x1668e8;
    $(_0x303392(0x11e) + _0x211cf7 + "\x22]")["siblings"](_0x303392(0x180))[_0x303392(0x228)](),
        $("input[name=\x22" + _0x211cf7 + "\x22]")[_0x303392(0x112)]()[_0x303392(0x12e)](_0x303392(0x180))[_0x303392(0x228)](),
        $("textarea[name=\x22" + _0x211cf7 + "\x22]")[_0x303392(0x19b)]("[data-text=\x22error-message\x22]")[_0x303392(0x228)](),
        $(_0x303392(0x1a6) + _0x211cf7 + "\x22]")[_0x303392(0x19b)](_0x303392(0x180))["hide"]();
}

function increaseCurstep() {
    const _0x35aa0c = _0x1668e8;
    countCard
        ?
        ((curStep = x + 0x1),
            $("[data-text=\x22total-steps\x22]")[_0x35aa0c(0x1c0)](
                steps[_0x35aa0c(0x12a)]
            )) :
        $(steps[x])[_0x35aa0c(0x108)]("card") ?
        (curStep = x + 0x0) :
        (curStep = x + 0x1),
        $(_0x35aa0c(0xf6))[_0x35aa0c(0x1c0)](curStep);
}

function decreaseCurstep() {
    const _0x3dd32d = _0x1668e8;
    countCard
        ?
        ((curStep = curStep - 0x1),
            console[_0x3dd32d(0x234)](x),
            $(_0x3dd32d(0xa6))[_0x3dd32d(0x1c0)](steps[_0x3dd32d(0x12a)])) :
        $(steps[x])[_0x3dd32d(0x108)]("card") ?
        (curStep = x - 0x0) :
        (curStep = x - 0x1),
        $(_0x3dd32d(0xf6))[_0x3dd32d(0x1c0)](curStep);
}
$(_0x1668e8(0x1d6))["on"]("click", function(_0x311fcf) {
    const _0x1261fd = _0x1668e8;
    _0x311fcf[_0x1261fd(0x1a9)](), _0x311fcf["stopPropagation"]();
    $(this)[_0x1261fd(0x108)](_0x1261fd(0xbc)) &&
        (redirectTo = $(this)[_0x1261fd(0x108)](_0x1261fd(0xbc)));
    !$(this)["data"]("new-tab") &&
        (newTab = $(this)[_0x1261fd(0x108)](_0x1261fd(0x193)));
    successCard = $(this)[_0x1261fd(0x108)](_0x1261fd(0x154));
    const _0x41cddb = new URLSearchParams(window[_0x1261fd(0x20d)]["search"]),
        _0x55967d = (_0x5e91de, _0x482da) => {
            const _0x244aaf = _0x1261fd,
                _0xb4d896 = document[_0x244aaf(0x186)](
                    _0x244aaf(0x197) + _0x5e91de + "\x22]"
                );
            _0xb4d896 && (_0xb4d896[_0x244aaf(0xd1)] = _0x482da);
        };
    _0x55967d(
            _0x1261fd(0x140),
            _0x41cddb[_0x1261fd(0x212)](_0x1261fd(0x140)) ||
            document[_0x1261fd(0x140)] ||
            _0x1261fd(0x99)
        ),
        _0x55967d("user-agent", navigator[_0x1261fd(0x232)]),
        _0x55967d("timestamp", new Date()["toISOString"]()),
        _0x55967d(
            "time-zone",
            Intl[_0x1261fd(0x14f)]()[_0x1261fd(0x168)]()[_0x1261fd(0x123)]
        ),
        _0x55967d(
            _0x1261fd(0x149),
            window[_0x1261fd(0x1c8)][_0x1261fd(0x21a)] +
            "x" +
            window[_0x1261fd(0x1c8)][_0x1261fd(0x166)]
        ),
        _0x55967d(_0x1261fd(0x1a0), _0x1261fd(0x121));
    const _0x1ee28a = () => {
        const _0x426357 = _0x1261fd,
            _0x428c41 = document[_0x426357(0x186)](_0x426357(0x227));
        if (_0x428c41) {
            const _0x417c99 = localStorage[_0x426357(0x1d8)](_0x426357(0x9e));
            console["log"](_0x417c99);
            if (_0x417c99) {
                const _0x4a2c9d = Math[_0x426357(0x98)](
                    (Date[_0x426357(0x20b)]() - parseInt(_0x417c99)) / 0x3e8
                );
                _0x428c41[_0x426357(0xd1)] = _0x4a2c9d + _0x426357(0x1ef);
            } else _0x428c41["value"] = _0x426357(0x121);
        }
    };
    _0x1ee28a();
    logicExtra &&
        fill &&
        ($(this)[_0x1261fd(0x129)]("novalidate", !![]),
            $(steps)[_0x1261fd(0x1fd)](_0x1261fd(0x211))[_0x1261fd(0x129)]("required", ![]),
            console["log"](_0x1261fd(0x137)));
    localStorage["removeItem"](_0x1261fd(0x13a)),
        localStorage["removeItem"](_0x1261fd(0x9e)),
        localStorage[_0x1261fd(0x113)]("formlyLastStep");
    typeof formlyCustomFunction === _0x1261fd(0x104) && formlyCustomFunction();
    if (fill) {
        if ($(_0x1261fd(0x19d))[_0x1261fd(0x108)]("remove-unfilled")) {
            for (
                let _0x4d97a5 = 0x0; _0x4d97a5 < steps[_0x1261fd(0x12a)]; _0x4d97a5++
            ) {
                let _0x3ceadd = selections[_0x1261fd(0xd6)](
                    (_0x196693) => _0x196693[_0x1261fd(0x1a5)] === _0x4d97a5
                );
                _0x3ceadd[_0x1261fd(0x12a)] > 0x0 ?
                    $(steps[_0x4d97a5 + 0x1])[_0x1261fd(0x1fd)](
                        _0x1261fd(0x17c) +
                        _0x3ceadd[0x0][_0x1261fd(0x119)] +
                        _0x1261fd(0xfd)
                    )[_0x1261fd(0x1f8)]() :
                    console[_0x1261fd(0x234)](_0x3ceadd, _0x4d97a5 + 0x1);
            }
            console[_0x1261fd(0x234)](_0x1261fd(0x15f));
        }
        $(this)[_0x1261fd(0x108)](_0x1261fd(0x1aa)) ?
            (console["log"]($(this)[_0x1261fd(0x108)](_0x1261fd(0x1aa))),
                $(this)[_0x1261fd(0x1c0)]($(this)[_0x1261fd(0x108)]("wait"))) :
            $(this)["val"](_0x1261fd(0xb7))["text"](_0x1261fd(0xb7)),
            $("[data-form=\x22multistep\x22]")[_0x1261fd(0xc9)](),
            $(_0x1261fd(0x10f))["length"] > 0x0 &&
            grecaptcha[_0x1261fd(0xe5)]()[_0x1261fd(0x12a)] === 0x0 &&
            ($(this)[_0x1261fd(0x1c0)](oldSubmitText),
                $(this)["val"](oldSubmitText)),
            customError && $(_0x1261fd(0x180))[_0x1261fd(0x228)]();
    } else customError && displayErrorMessage();
});

function progressPercentage() {
    const _0x4c8d4e = x + 0x1;
    return (percentage = (_0x4c8d4e / totalSteps) * 0x64);
}

function nextStep() {
    const _0x29d95a = _0x1668e8;
    customError
        ?
        ($(_0x29d95a(0x180))[_0x29d95a(0x228)](),
            fill ?
            (x++,
                (progress = x),
                x <= steps[_0x29d95a(0x12a)] - 0x1 &&
                (updateStep(), memory && saveFilledInput()),
                increaseCurstep()) :
            displayErrorMessage()) :
        (x++,
            increaseCurstep(),
            x > progress && (progress = x),
            x <= steps[_0x29d95a(0x12a)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()),
            increaseCurstep()),
        andLogic();
}

function backStep() {
    const _0x10c336 = _0x1668e8;
    customError && $("[data-text=\x22error-message\x22]")[_0x10c336(0x228)](),
        decreaseCurstep(),
        x > 0x0 &&
        ($(progressbar[x])[_0x10c336(0x160)](_0x10c336(0x1ca)),
            selections[_0x10c336(0xd6)](
                (_0x3b89ce) => _0x3b89ce[_0x10c336(0x1d3)] === x
            )[_0x10c336(0x12a)] > 0x0 ?
            (x = parseInt(
                getSafe(
                    () =>
                    selections[_0x10c336(0xd6)](
                        (_0x11e330) => _0x11e330[_0x10c336(0x1d3)] === x
                    )[0x0]["backTo"]
                )
            )) :
            x--,
            updateStep()),
        ($(steps[x])[_0x10c336(0x1fd)](_0x10c336(0x1f3))[_0x10c336(0x108)]("radio-skip") === !![] ||
            $(steps[x])["find"](".active-answer-card")[_0x10c336(0x1fd)](_0x10c336(0x1f3))[_0x10c336(0x108)](_0x10c336(0x1e9)) === !![] ||
            $(steps[x])[_0x10c336(0x1fd)](_0x10c336(0x22e))[_0x10c336(0x108)](_0x10c336(0x1e9)) === !![]) &&
        ((all_data = all_data[_0x10c336(0xd6)](
                (_0x5a10df) =>
                _0x5a10df[_0x10c336(0x1e1)] !==
                $(steps[x])["find"](_0x10c336(0xf8))["attr"](_0x10c336(0x101))
            )),
            $(
                "[data-input-field=\x22" +
                $(steps[x])[_0x10c336(0x1fd)]("input[type=\x22radio\x22]:checked")[_0x10c336(0xb3)]("name") +
                "\x22]"
            )["hide"](),
            $(steps[x])["find"](_0x10c336(0x1c5))["prop"](_0x10c336(0x1b3), ![]),
            $(steps[x])[_0x10c336(0x1fd)](_0x10c336(0x1ea))[_0x10c336(0x160)](_0x10c336(0x1b4)),
            validation());
}
weightedSelectionRange &&
    $(_0x1668e8(0x107))["each"](function() {
        const _0x12281b = _0x1668e8;
        $(this)[_0x12281b(0x1ce)](
            _0x12281b(0xf3) + $(this)[_0x12281b(0x108)]("selection") + _0x12281b(0xf2)
        );
    });

function selectionQuiz() {
    const _0x58f313 = _0x1668e8;
    if ($(this)[_0x58f313(0x1fd)](_0x58f313(0x239))) {
        $(_0x58f313(0x107))["hide"](), $(_0x58f313(0x165))["hide"]();
        if (weightedSelection) {
            (selTotal = 0x0),
            selArr[_0x58f313(0x1d0)](function(_0x5e1d28) {
                    const _0x13e8ed = _0x58f313;
                    selTotal = selTotal + _0x5e1d28[_0x13e8ed(0x119)];
                }),
                $(_0x58f313(0x15b))[_0x58f313(0x1c0)](selTotal);
            if ($(_0x58f313(0x1d4) + selTotal + "\x22]")[_0x58f313(0x12a)] > 0x0)
                $("[data-selection=\x22" + selTotal + "\x22]")["fadeIn"]();
            else
                $(_0x58f313(0x215) + selTotal + ")") ?
                $(_0x58f313(0x215) + selTotal + ")")[_0x58f313(0x1e6)](_0x58f313(0x107))["eq"](0x0)[_0x58f313(0x1ed)]() :
                $(_0x58f313(0xae))[_0x58f313(0x16d)]();
        } else {
            let _0x4d5291 = -0x1,
                _0x43fde0 = [];
            $(_0x58f313(0x107))[_0x58f313(0x13e)](function(_0x197359) {
                    const _0xb5b70a = _0x58f313;
                    $($(_0xb5b70a(0x107))[_0x197359])[_0xb5b70a(0x108)](_0xb5b70a(0x176))[_0xb5b70a(0xac)](selString[_0xb5b70a(0x138)]()) &&
                        ((_0x4d5291 = _0x197359), _0x43fde0[_0xb5b70a(0xa2)](_0x197359));
                }),
                multiSelections ?
                _0x43fde0[_0x58f313(0x12a)] > 0x0 ?
                _0x43fde0["forEach"]((_0x39d750) => {
                    const _0x13d683 = _0x58f313;
                    $($(_0x13d683(0x107))[_0x39d750])["fadeIn"]();
                }) :
                $(_0x58f313(0xae))["fadeIn"]() :
                _0x4d5291 > -0x1 ?
                $($(_0x58f313(0x107))[_0x4d5291])[_0x58f313(0x16d)]() :
                $(_0x58f313(0xae))[_0x58f313(0x16d)]();
        }
    }
}

function triggerInputAllData() {
    const _0x5c5e1f = _0x1668e8;
    if (savedFilledInput && memory)
        savedFilledInput[_0x5c5e1f(0x1d0)]((_0x47b60) => {
            const _0x34ab73 = _0x5c5e1f;
            var _0x172933 = $(
                    _0x34ab73(0x11e) +
                    _0x47b60[_0x34ab73(0xfa)] +
                    _0x34ab73(0xcb) +
                    _0x47b60["value"] +
                    _0x34ab73(0x178)
                ),
                _0x2237eb = $(
                    _0x34ab73(0x11e) +
                    _0x47b60[_0x34ab73(0xfa)] +
                    "\x22]:not([data-prefill=\x22false\x22])"
                ),
                _0xc5bed9 = $(
                    "textarea[name=\x22" +
                    _0x47b60[_0x34ab73(0xfa)] +
                    "\x22]:not([data-prefill=\x22false\x22])"
                ),
                _0x5ea04d = $(
                    "input[type=\x22checkbox\x22][name=\x22" +
                    _0x47b60[_0x34ab73(0xfa)] +
                    "\x22]"
                ),
                _0x53fe68 = $(
                    _0x34ab73(0x1f9) +
                    _0x47b60[_0x34ab73(0xfa)] +
                    _0x34ab73(0xcb) +
                    _0x47b60[_0x34ab73(0xd1)] +
                    _0x34ab73(0x178)
                );
            if (_0x172933[_0x34ab73(0xb3)](_0x34ab73(0x18d)) !== _0x34ab73(0x9a)) {
                if (
                    _0x172933[_0x34ab73(0xb3)](_0x34ab73(0x18d)) === _0x34ab73(0x132) &&
                    !_0x172933[_0x34ab73(0x112)](_0x34ab73(0x1cb))[_0x34ab73(0x108)](
                        _0x34ab73(0x1e9)
                    )
                )
                    _0x172933[_0x34ab73(0xdf)](),
                    _0x172933[_0x34ab73(0x19b)](_0x34ab73(0x21c))[_0x34ab73(0x102)](
                        _0x34ab73(0x1b4)
                    ),
                    _0x172933[_0x34ab73(0x22f)](_0x34ab73(0x236));
                else
                    _0x47b60[_0x34ab73(0xd1)] === "on" ?
                    (_0x2237eb[_0x34ab73(0xdf)](),
                        _0x2237eb[_0x34ab73(0x19b)](_0x34ab73(0x93))[_0x34ab73(0x102)](
                            "w--redirected-checked"
                        ),
                        _0x2237eb[_0x34ab73(0x22f)](_0x34ab73(0x236))) :
                    (_0x2237eb[_0x34ab73(0x218)](_0x47b60[_0x34ab73(0xd1)]),
                        _0xc5bed9["val"](_0x47b60[_0x34ab73(0xd1)]),
                        $(_0x34ab73(0x96))["find"](_0x34ab73(0x156) + _0x47b60[_0x34ab73(0xd1)] + "\x22]")[_0x34ab73(0x129)](_0x34ab73(0x119), !![]),
                        _0x2237eb[_0x34ab73(0x22f)](_0x34ab73(0x236)),
                        _0x2237eb[_0x34ab73(0x22f)](_0x34ab73(0x1f7)));
                const _0x416793 = _0x53fe68[_0x34ab73(0x108)](_0x34ab73(0x10b)),
                    _0x5489c3 = _0x5ea04d[_0x34ab73(0x108)](_0x34ab73(0x10b));
                _0x53fe68[_0x34ab73(0x1e6)]()[_0x34ab73(0x102)](_0x416793),
                    _0x5ea04d[_0x34ab73(0x1e6)]()[_0x34ab73(0x102)](_0x5489c3);
            }
        });
    else
        _params &&
        (getParams(),
            searchQ[_0x5c5e1f(0x1d0)]((_0xf83928) => {
                const _0x4d0800 = _0x5c5e1f;
                if (
                    $(
                        "input[name=\x22" +
                        _0xf83928[_0x4d0800(0xfa)] +
                        _0x4d0800(0xcb) +
                        _0xf83928["value"] +
                        "\x22]:not([data-prefill=\x22false\x22])"
                    )["attr"]("type") !== _0x4d0800(0x9a)
                ) {
                    if (
                        $(
                            "input[name=\x22" +
                            _0xf83928["key"] +
                            _0x4d0800(0xcb) +
                            _0xf83928[_0x4d0800(0x218)] +
                            "\x22]:not([data-prefill=\x22false\x22])"
                        )[_0x4d0800(0xb3)]("type") === _0x4d0800(0x132)
                    )
                        $(
                            _0x4d0800(0x11e) +
                            _0xf83928[_0x4d0800(0x13c)] +
                            _0x4d0800(0xcb) +
                            _0xf83928[_0x4d0800(0x218)] +
                            _0x4d0800(0x178)
                        )["click"](),
                        $(
                            _0x4d0800(0x11e) +
                            _0xf83928[_0x4d0800(0x13c)] +
                            _0x4d0800(0xcb) +
                            _0xf83928[_0x4d0800(0x218)] +
                            _0x4d0800(0x178)
                        )[_0x4d0800(0x19b)](".w-radio-input")[_0x4d0800(0x102)](_0x4d0800(0x1b4)),
                        $(
                            _0x4d0800(0x11e) +
                            _0xf83928[_0x4d0800(0x13c)] +
                            _0x4d0800(0xcb) +
                            _0xf83928[_0x4d0800(0x218)] +
                            _0x4d0800(0x178)
                        )[_0x4d0800(0x22f)](_0x4d0800(0x236));
                    else
                        _0xf83928[_0x4d0800(0x218)] === "on" ?
                        ($(
                                _0x4d0800(0x11e) +
                                _0xf83928[_0x4d0800(0x13c)] +
                                "\x22]:not([data-prefill=\x22false\x22])"
                            )["click"](),
                            $(_0x4d0800(0x11e) + _0xf83928["key"] + _0x4d0800(0x178))[_0x4d0800(0x19b)](_0x4d0800(0x93))[_0x4d0800(0x102)](_0x4d0800(0x1b4)),
                            $("input[name=\x22" + _0xf83928[_0x4d0800(0x13c)] + "\x22]")[
                                "trigger"
                            ](_0x4d0800(0x236))) :
                        ($(
                                _0x4d0800(0x11e) +
                                _0xf83928[_0x4d0800(0x13c)] +
                                _0x4d0800(0x178)
                            )[_0x4d0800(0x218)](_0xf83928[_0x4d0800(0x218)]),
                            $(
                                _0x4d0800(0x133) +
                                _0xf83928[_0x4d0800(0x13c)] +
                                _0x4d0800(0x178)
                            )["val"](_0xf83928[_0x4d0800(0x218)]),
                            $(
                                _0x4d0800(0x1a6) +
                                _0xf83928[_0x4d0800(0x13c)] +
                                _0x4d0800(0x178)
                            )["find"](
                                _0x4d0800(0x156) + _0xf83928[_0x4d0800(0x218)] + "\x22]"
                            )[_0x4d0800(0x129)](_0x4d0800(0x119), !![]),
                            $(
                                _0x4d0800(0x11e) +
                                _0xf83928[_0x4d0800(0x13c)] +
                                _0x4d0800(0x178)
                            )["trigger"]("input"),
                            $("input[name=\x22" + _0xf83928["key"] + _0x4d0800(0x178))[
                                _0x4d0800(0x22f)
                            ](_0x4d0800(0x1f7)));
                }
            }));
}
$(_0x1668e8(0xe7))["on"](_0x1668e8(0xdf), function() {
        (next = !![]), (back = ![]), nextStep(), selectionQuiz();
    }),
    $(_0x1668e8(0x100))["on"](_0x1668e8(0xdf), function() {
        (next = ![]), (back = !![]), backStep();
    }),
    $(steps)["find"](":input")[_0x1668e8(0x199)](_0x1668e8(0x1e8))["on"](_0x1668e8(0x236), function(_0x4c2f48) {
        validation(), andLogic(), addClickClass();
    }),
    $(steps)[_0x1668e8(0x1fd)](_0x1668e8(0x1c5))["on"](_0x1668e8(0xdf), function() {
        (skip = !![]), validation(), addClickClass();
    });
$(_0x1668e8(0x18a))["data"](_0x1668e8(0x226)) ?
    $("[data-form=\x22custom-progress-indicator\x22]")[_0x1668e8(0x160)](
        _0x1668e8(0x207)
    ) :
    $(_0x1668e8(0x1af))[_0x1668e8(0x102)]("disabled");

function clickableIndicator() {
    const _0x4fb48f = _0x1668e8;
    $(_0x4fb48f(0xc3))["data"](_0x4fb48f(0xf5)) &&
        ($(_0x4fb48f(0x175))[_0x4fb48f(0x160)](_0x4fb48f(0x1ca)),
            $(_0x4fb48f(0xc3))[_0x4fb48f(0x108)](_0x4fb48f(0x226)) ?
            ((x = $(this)["index"]()), updateStep()) :
            $(this)[_0x4fb48f(0x11a)]() <= progress &&
            ((x = $(this)[_0x4fb48f(0x11a)]()), updateStep())),
        $(_0x4fb48f(0xf6))[_0x4fb48f(0x1c0)](x + 0x1);
}
$(_0x1668e8(0x1af))["on"](_0x1668e8(0xdf), clickableIndicator),
    (excludeCount = !$("[data-form=\x22multistep\x22]")[_0x1668e8(0x108)](
        _0x1668e8(0x10d)
    )),
    steps[_0x1668e8(0x13e)](function(_0x164733) {
        const _0x36b9f4 = _0x1668e8,
            _0x41eb63 = $(this)["data"]("card");
        console[_0x36b9f4(0x234)](excludeCount),
            _0x41eb63 &&
            excludeCount &&
            $(_0x36b9f4(0x1af))["eq"](_0x164733)[_0x36b9f4(0x228)]();
    });
$(_0x1668e8(0x19d))["data"]("debug-mode") &&
    ($("[data-go-to]")["each"](function() {
            const _0xc6272d = _0x1668e8;
            $(this)[_0xc6272d(0x1ce)](
                _0xc6272d(0x22c),
                $(this)["data"](_0xc6272d(0x109))
            );
        }),
        $(_0x1668e8(0x1a4))["each"](function() {
            const _0x3b2427 = _0x1668e8;
            $(this)[_0x3b2427(0x1ce)](
                _0x3b2427(0xf4),
                $(this)["data"](_0x3b2427(0x1e0))
            );
        }));

function resetFormly() {
    const _0x145561 = _0x1668e8;
    $(_0x145561(0x19d))[_0x145561(0x22f)]("reset"),
        $(_0x145561(0x19d))[_0x145561(0x112)]()[_0x145561(0x1fd)](_0x145561(0xe1))[_0x145561(0x228)](),
        (x = 0x0),
        updateStep(),
        $(_0x145561(0x19d))[_0x145561(0x1ed)](),
        $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
        $(_0x145561(0x1d6))[_0x145561(0x218)](oldSubmitText),
        $("[data-text=\x22current-step\x22]")["text"](0x1),
        $(_0x145561(0x19d))[_0x145561(0x1fd)](_0x145561(0x155))[_0x145561(0x19b)](_0x145561(0x93))[_0x145561(0x160)](_0x145561(0x1b4));
}
$(document)["ajaxComplete"](function(_0x45d731, _0x573649, _0x492875) {
        const _0x2fd0d8 = _0x1668e8;
        if (
            _0x492875[_0x2fd0d8(0xfc)][_0x2fd0d8(0xac)](
                "https://webflow.com/api/v1/form/"
            )
        ) {
            const _0x15a057 = _0x573649[_0x2fd0d8(0x120)] === 0xc8,
                _0x30924d = _0x2fd0d8(0x1df);
            redirectTo &&
                _0x15a057 &&
                (newTab ?
                    window[_0x2fd0d8(0x1e5)](redirectTo, _0x2fd0d8(0x19f)) :
                    setTimeout(() => {
                        location["href"] = redirectTo;
                    }, redirectDelay)),
                _0x15a057 &&
                successCard !== "" &&
                $(_0x2fd0d8(0x1a7) + successCard + "\x22]")[_0x2fd0d8(0x16d)](),
                _0x15a057 &&
                formReset &&
                setTimeout(() => {
                    resetFormly();
                }, resetDelay), !_0x15a057 &&
                ($(_0x2fd0d8(0x1d6))[_0x2fd0d8(0x218)](_0x2fd0d8(0xb7)),
                    $(_0x2fd0d8(0x1d6))["text"]("Please\x20wait..."));
        }
    }),
    $("[data-btn=\x22edit\x22]")["on"](_0x1668e8(0xdf), function() {
        const _0xa12969 = _0x1668e8;
        var _0x3bd1d5 = $(this)[_0xa12969(0x1e6)]()[_0xa12969(0x1fd)](_0xa12969(0x145))["data"]("input-field");
        setTimeout(function() {
                $("input[name=\x22" + _0x3bd1d5 + "\x22]")["focus"]();
            }, 0x64),
            (back = !![]),
            (x = $(this)["data"](_0xa12969(0xd9)) - 0x1),
            updateStep(),
            countCard ?
            ((curStep = x + 0x1),
                $(_0xa12969(0xa6))[_0xa12969(0x1c0)](steps[_0xa12969(0x12a)])) :
            $(steps[x])[_0xa12969(0x108)]("card") ?
            (curStep = x + 0x0) :
            (curStep = x + 0x1),
            $(_0xa12969(0xf6))[_0xa12969(0x1c0)](curStep),
            (back = ![]);
    }),
    $(_0x1668e8(0x19c))["on"](_0x1668e8(0xdf), function() {
        const _0x156520 = _0x1668e8;
        $(_0x156520(0x19d))["trigger"](_0x156520(0x1cd));
        let _0x5ea637 = $(this);
        $(this)[_0x156520(0x1c0)]("Please\x20wait..."),
            setTimeout(function() {
                const _0x3d5049 = _0x156520;
                $(_0x5ea637)[_0x3d5049(0x1c0)](oldResetText),
                    $(_0x5ea637)[_0x3d5049(0x112)](_0x3d5049(0xe1))[_0x3d5049(0x228)](),
                    (x = 0x0),
                    updateStep(),
                    $(_0x3d5049(0x19d))[_0x3d5049(0x1ed)](),
                    $(_0x3d5049(0x1d6))[_0x3d5049(0x1c0)](oldSubmitText),
                    $("[data-form=\x22submit-btn\x22]")[_0x3d5049(0x218)](oldSubmitText),
                    $(_0x5ea637)[_0x3d5049(0x218)](oldSubmitText),
                    $(_0x3d5049(0xf6))[_0x3d5049(0x1c0)](0x1),
                    $("[data-form=\x22multistep\x22]")[_0x3d5049(0x1fd)](_0x3d5049(0x155))["siblings"](_0x3d5049(0x93))["removeClass"](_0x3d5049(0x1b4));
            }, resetDelay);
    }),
    $(_0x1668e8(0x11f))["on"](_0x1668e8(0x221), function(_0x32748a) {
        const _0x2cbfc6 = _0x1668e8;
        if (_0x32748a[_0x2cbfc6(0xeb)] === 0xd) {
            _0x32748a[_0x2cbfc6(0x1a9)](), _0x32748a[_0x2cbfc6(0x23e)]();
            if (
                $(steps[x])[_0x2cbfc6(0x1fd)](_0x2cbfc6(0x172))["is"](_0x2cbfc6(0x209))
            )
                $(steps[x])[_0x2cbfc6(0x1fd)](_0x2cbfc6(0x201))["val"](
                    $(steps[x])[_0x2cbfc6(0x1fd)](_0x2cbfc6(0x201))["val"]() + "\x0a"
                );
            else
                $("[data-enter]")["data"](_0x2cbfc6(0x237)) &&
                fill &&
                totalSteps > curStep &&
                $(_0x2cbfc6(0xe7))[0x0][_0x2cbfc6(0xdf)]();
        }
    }),
    $(_0x1668e8(0x11f))[_0x1668e8(0x219)](function(_0x2202f1) {
        const _0x13908f = _0x1668e8;
        (_0x2202f1[_0x13908f(0x158)] || _0x2202f1[_0x13908f(0x22d)]) &&
        _0x2202f1[_0x13908f(0xeb)] == 0xd &&
            (x >= steps[_0x13908f(0x12a)] - 0x1 && fill ?
                $(steps[x])["find"](_0x13908f(0xe0))["click"]() :
                (_0x2202f1[_0x13908f(0x1a9)](), _0x2202f1[_0x13908f(0x23e)]()));
    }),
    $("[data-form=\x22multistep\x22]")[_0x1668e8(0x1fd)](_0x1668e8(0x211))["on"](_0x1668e8(0x1f7), function() {
        const _0x44346b = _0x1668e8;
        (all_data = all_data[_0x44346b(0xd6)](
            (_0x27af1a) =>
            _0x27af1a[_0x44346b(0x1e1)] !==
            $(this)[_0x44346b(0xb3)](_0x44346b(0x101))
        )),
        $(this)[_0x44346b(0xb3)](_0x44346b(0x18d)) === _0x44346b(0xd7) ?
            $(this)["is"](_0x44346b(0x1c6)) ?
            all_data[_0x44346b(0xa2)]({
                field: $(this)[_0x44346b(0xb3)]("name"),
                value: $(this)[_0x44346b(0x19b)](_0x44346b(0xca))[_0x44346b(0x1c0)](),
            }) :
            $(
                _0x44346b(0x17d) +
                $(this)[_0x44346b(0xb3)](_0x44346b(0x101)) +
                "\x22]"
            )[_0x44346b(0x228)]() :
            (all_data[_0x44346b(0xa2)]({
                    field: $(this)["attr"](_0x44346b(0x101)),
                    value: $(this)["val"](),
                }),
                $(this)[_0x44346b(0x218)]() !== "" &&
                resetInputErrorMessage($(this)[_0x44346b(0xb3)]("name"))),
            all_data[_0x44346b(0x1d0)](function(_0x1a7e5a) {
                const _0x2ed2e4 = _0x44346b;
                $(_0x2ed2e4(0x17d) + _0x1a7e5a[_0x2ed2e4(0x1e1)] + "\x22]")[
                        _0x2ed2e4(0x1ed)
                    ](),
                    $(_0x2ed2e4(0x17d) + _0x1a7e5a[_0x2ed2e4(0x1e1)] + "\x22]")[
                        _0x2ed2e4(0x1c0)
                    ](_0x1a7e5a[_0x2ed2e4(0xd1)]);
            });
    }),
    $("[data-form=\x22multistep\x22]")["find"](_0x1668e8(0x172))["on"]("change", function() {
        const _0x1459b4 = _0x1668e8;
        $(this)["val"]() !== "" &&
            resetInputErrorMessage($(this)[_0x1459b4(0xb3)](_0x1459b4(0x101))),
            (all_data = all_data[_0x1459b4(0xd6)](
                (_0x1e413b) => _0x1e413b["field"] !== $(this)[_0x1459b4(0xb3)]("name")
            )),
            all_data[_0x1459b4(0xa2)]({
                field: $(this)[_0x1459b4(0xb3)](_0x1459b4(0x101)),
                value: $(this)[_0x1459b4(0x218)](),
            }),
            all_data[_0x1459b4(0x1d0)](function(_0x296fd5) {
                const _0x3ae472 = _0x1459b4;
                $(_0x3ae472(0x17d) + _0x296fd5[_0x3ae472(0x1e1)] + "\x22]")[
                        _0x3ae472(0x1ed)
                    ](),
                    $("[data-input-field=\x22" + _0x296fd5["field"] + "\x22]")["text"](
                        _0x296fd5[_0x3ae472(0xd1)]
                    );
            });
    }),
    $("[data-form=\x22multistep\x22]")[_0x1668e8(0x1fd)](_0x1668e8(0x21b))["on"]("change", function() {
        const _0x357f7a = _0x1668e8;
        $(this)[_0x357f7a(0x218)]() !== "" &&
            resetInputErrorMessage($(this)[_0x357f7a(0xb3)](_0x357f7a(0x101)));
        var _0x142497 = $(this)[_0x357f7a(0x108)](_0x357f7a(0xf9));
        (all_data = all_data[_0x357f7a(0xd6)](
            (_0xc6f9b0) => _0xc6f9b0["field"] !== $(this)["attr"](_0x357f7a(0x101))
        )),
        all_data[_0x357f7a(0xa2)]({
                field: $(this)[_0x357f7a(0xb3)](_0x357f7a(0x101)),
                value: _0x142497 ?
                    $(this)[_0x357f7a(0x1fd)](_0x357f7a(0x131))[_0x357f7a(0x1c0)]() : $(this)[_0x357f7a(0x218)](),
            }),
            all_data[_0x357f7a(0x1d0)](function(_0x351832) {
                const _0x3cd672 = _0x357f7a;
                $(_0x3cd672(0x17d) + _0x351832[_0x3cd672(0x1e1)] + "\x22]")[
                        _0x3cd672(0x1ed)
                    ](),
                    $(_0x3cd672(0x17d) + _0x351832[_0x3cd672(0x1e1)] + "\x22]")[
                        _0x3cd672(0x1c0)
                    ](_0x351832[_0x3cd672(0xd1)]);
            });
    }),
    updateStep(),
    triggerInputAllData(),
    $(_0x1668e8(0xc0))["each"](function() {
        const _0xe5ac9 = _0x1668e8,
            _0x126112 = $(this)[_0xe5ac9(0x1fd)](_0xe5ac9(0x118)),
            _0x35a8c4 = [];
        _0x126112[_0xe5ac9(0x13e)](function() {
            const _0x23bc94 = _0xe5ac9;
            _0x35a8c4["push"]($(this)[_0x23bc94(0x1c0)]()[_0x23bc94(0x162)]());
        });
        const _0x256dee = $(this)[_0xe5ac9(0x19b)]("[data-cms-select=input]");
        $["each"](_0x35a8c4, function(_0x19f9f7, _0x15cdac) {
            const _0x553ea3 = _0xe5ac9,
                _0x5083f2 = $(_0x553ea3(0x1dc))[_0x553ea3(0x218)](_0x15cdac)[_0x553ea3(0x1c0)](_0x15cdac);
            _0x256dee["append"](_0x5083f2);
        });
    });

function cloneRemove() {
    const _0x58bad1 = _0x1668e8;
    $(_0x58bad1(0xd0))[_0x58bad1(0x13e)](function() {
        const _0x11d442 = _0x58bad1;
        $(this)[_0x11d442(0x1fd)](_0x11d442(0x105))["length"] < 0x2 ?
            $(this)[_0x11d442(0x1fd)](_0x11d442(0xe4))["hide"]() :
            $(this)[_0x11d442(0x1fd)](_0x11d442(0xe4))[_0x11d442(0x1ed)]();
    });
}

function cloneRemoveInput() {
    const _0x5e3064 = _0x1668e8;
    $(_0x5e3064(0xb4))[_0x5e3064(0x13e)](function() {
        const _0x804364 = _0x5e3064;
        console["log"](
                $(this)[_0x804364(0x1fd)]("[data-clone-input]")[_0x804364(0x12a)]
            ),
            $(this)[_0x804364(0x1fd)](_0x804364(0x141))[_0x804364(0x12a)] < 0x2 ?
            $(this)[_0x804364(0x1fd)]("[data-form=\x22remove-input-clone\x22]")[_0x804364(0x228)]() :
            $(this)[_0x804364(0x1fd)]("[data-form=\x22remove-input-clone\x22]")["show"]();
    });
}
$(_0x1668e8(0xe4))["on"](_0x1668e8(0xdf), function() {
        const _0x48e73b = _0x1668e8,
            _0x3b72d7 =
            $(this)[_0x48e73b(0x112)]("[data-clone]")[_0x48e73b(0x12a)] > 0x0 ?
            $(this)[_0x48e73b(0x112)](_0x48e73b(0x105))[_0x48e73b(0x11a)]() :
            $(this)["parents"](_0x48e73b(0x182))[_0x48e73b(0x11a)](),
            _0x1f0182 =
            $(this)[_0x48e73b(0x112)]("[data-clone]")["length"] > 0x0 ?
            $(this)[_0x48e73b(0x112)](_0x48e73b(0x105))[_0x48e73b(0x108)](_0x48e73b(0x171)) :
            $(this)[_0x48e73b(0x112)](_0x48e73b(0x182))["data"]("display");
        $(_0x48e73b(0x15c) + _0x1f0182 + "\x22]")["eq"](_0x3b72d7)[_0x48e73b(0x1f8)](),
            $(_0x48e73b(0x143) + _0x1f0182 + "\x22]")["eq"](_0x3b72d7)[_0x48e73b(0x1f8)](),
            cloneRemove();
        let _0x2ebeac = $("[data-add-new=\x22" + _0x1f0182 + "\x22]")[
                _0x48e73b(0x108)
            ](_0x48e73b(0x9d)),
            _0x457cc5 = $(_0x48e73b(0x15c) + _0x1f0182 + "\x22]")[_0x48e73b(0x12a)];
        console[_0x48e73b(0x234)](_0x457cc5, _0x2ebeac),
            _0x457cc5 < _0x2ebeac &&
            (console[_0x48e73b(0x234)](_0x48e73b(0x1ed)),
                $(_0x48e73b(0x111) + _0x1f0182 + "\x22]")[_0x48e73b(0x1ed)]()),
            validation();
    }),
    $(_0x1668e8(0x9f))["on"](_0x1668e8(0xdf), function() {
        const _0x4bb22b = _0x1668e8;
        let _0x1ac212 = $(this)[_0x4bb22b(0x19b)]()[_0x4bb22b(0xb3)]("name"),
            _0x34974a = $(this)[_0x4bb22b(0x112)](_0x4bb22b(0x141))[_0x4bb22b(0x108)](_0x4bb22b(0x167));
        $(this)[_0x4bb22b(0x1e6)](_0x4bb22b(0x141))[_0x4bb22b(0x1f8)](),
            $(_0x4bb22b(0x17d) + _0x1ac212 + "\x22]")[_0x4bb22b(0x1e6)](_0x4bb22b(0x159))[_0x4bb22b(0x1f8)]();
        let _0x2981bc = $(_0x4bb22b(0x1d2) + _0x34974a + "\x22]")[_0x4bb22b(0x108)](
                _0x4bb22b(0xe2)
            ),
            _0x456fea = $(_0x4bb22b(0x13f) + _0x34974a + "\x22]")[_0x4bb22b(0x12a)];
        _0x456fea < _0x2981bc &&
            $(_0x4bb22b(0x1d2) + _0x34974a + "\x22]")[_0x4bb22b(0x1ed)](),
            validation();
    }),
    $(_0x1668e8(0x127))["on"]("click", function() {
        const _0x49ff63 = _0x1668e8;
        let _0x321e49 = $(this)[_0x49ff63(0x108)]("add-new"),
            _0x2c5755 = $(this)[_0x49ff63(0x108)](_0x49ff63(0x9d));
        var _0x3e1b14 = $(_0x49ff63(0x15c) + _0x321e49 + "\x22]")["eq"](0x0)[_0x49ff63(0x171)](!![]),
            _0x283d72 = $(_0x49ff63(0x143) + _0x321e49 + "\x22]")["eq"](0x0)[_0x49ff63(0x171)](!![]);
        let _0x44da24 = "";
        $(this)[_0x49ff63(0x1fd)](_0x49ff63(0xe4))[_0x49ff63(0x1ed)](),
            cloneRemove(),
            _0x3e1b14[_0x49ff63(0x1fd)]("[data-clone-input]")["find"](_0x49ff63(0x236))[_0x49ff63(0x218)](""),
            _0x3e1b14[_0x49ff63(0x1fd)](_0x49ff63(0x141))[_0x49ff63(0x1fd)](_0x49ff63(0x21b))[_0x49ff63(0x218)](""),
            _0x3e1b14[_0x49ff63(0x1fd)]("[data-clone-input]")[_0x49ff63(0x1fd)](_0x49ff63(0x172))[_0x49ff63(0x218)](""),
            _0x3e1b14[_0x49ff63(0x1fd)]("[data-clone-input]")[_0x49ff63(0x199)](":first")[_0x49ff63(0x1f8)](),
            _0x3e1b14[_0x49ff63(0x1fd)]("[data-clone-input]")[_0x49ff63(0x1fd)](_0x49ff63(0x110))[_0x49ff63(0xdf)](),
            _0x283d72[_0x49ff63(0x1fd)](_0x49ff63(0x159))["not"](_0x49ff63(0x1bc))[_0x49ff63(0x1f8)](),
            _0x3e1b14["find"]("input")["each"](function() {
                const _0x16aaf = _0x49ff63;
                if ($(this)[_0x16aaf(0x13d)](_0x16aaf(0x141))[_0x16aaf(0x12a)] > 0x0) {
                    let _0x329688 = 0x0;
                    const _0x244ff6 = $(this)["closest"](_0x16aaf(0x141))["data"](_0x16aaf(0x167));
                    $(_0x16aaf(0x13f) + _0x244ff6 + _0x16aaf(0x1a3))[_0x16aaf(0x13e)](
                            function() {
                                const _0x4455f2 = _0x16aaf,
                                    _0x5e7957 = $(this)["attr"](_0x4455f2(0x101));
                                if (_0x5e7957 && _0x5e7957[_0x4455f2(0x1be)](_0x4455f2(0x188))) {
                                    const _0x4fdeaf = parseInt(
                                        _0x5e7957[_0x4455f2(0x1db)]("-")[0x1]
                                    );
                                    !isNaN(_0x4fdeaf) &&
                                        _0x4fdeaf > _0x329688 &&
                                        (_0x329688 = _0x4fdeaf);
                                }
                            }
                        ),
                        _0x329688++,
                        (_0x44da24 = this[_0x16aaf(0x101)] + "-" + _0x329688);
                } else
                    _0x44da24 =
                    this[_0x16aaf(0x101)] +
                    "-" +
                    (parseInt(
                            $(_0x16aaf(0x15c) + _0x321e49 + "\x22]")[_0x16aaf(0x136)]()[_0x16aaf(0x11a)]()
                        ) +
                        0x1);
                $(this)[_0x16aaf(0x218)](""),
                    $(this)[_0x16aaf(0xb3)](_0x16aaf(0x101), _0x44da24),
                    $(this)["attr"](_0x16aaf(0xb2), _0x44da24);
            }),
            _0x3e1b14["find"]("textarea")[_0x49ff63(0x13e)](function() {
                const _0x4a5df1 = _0x49ff63;
                if (
                    $(this)[_0x4a5df1(0x13d)](_0x4a5df1(0x141))[_0x4a5df1(0x12a)] > 0x0
                ) {
                    let _0xf3e12c = 0x0;
                    const _0x39eed2 = $(this)[_0x4a5df1(0x13d)]("[data-clone-input]")[_0x4a5df1(0x108)](_0x4a5df1(0x167));
                    $("[data-clone-input=\x22" + _0x39eed2 + _0x4a5df1(0x95))["each"](
                            function() {
                                const _0x24d9be = _0x4a5df1,
                                    _0x766321 = $(this)[_0x24d9be(0xb3)](_0x24d9be(0x101));
                                if (_0x766321 && _0x766321["startsWith"](_0x24d9be(0x188))) {
                                    const _0x4d415e = parseInt(
                                        _0x766321[_0x24d9be(0x1db)]("-")[0x1]
                                    );
                                    !isNaN(_0x4d415e) &&
                                        _0x4d415e > _0xf3e12c &&
                                        (_0xf3e12c = _0x4d415e);
                                }
                            }
                        ),
                        _0xf3e12c++,
                        (_0x44da24 = this[_0x4a5df1(0x101)] + "-" + _0xf3e12c);
                } else
                    _0x44da24 =
                    this["name"] +
                    "-" +
                    (parseInt(
                            $(_0x4a5df1(0x15c) + _0x321e49 + "\x22]")[_0x4a5df1(0x136)]()[_0x4a5df1(0x11a)]()
                        ) +
                        0x1);
                $(this)["val"](""),
                    $(this)["attr"]("name", _0x44da24),
                    $(this)[_0x4a5df1(0xb3)](_0x4a5df1(0xb2), _0x44da24);
            }),
            _0x3e1b14[_0x49ff63(0x1fd)](_0x49ff63(0x21b))[_0x49ff63(0x13e)](
                function() {
                    const _0x337d80 = _0x49ff63;
                    if (
                        $(this)[_0x337d80(0x13d)](_0x337d80(0x141))[_0x337d80(0x12a)] > 0x0
                    ) {
                        let _0x38abeb = 0x0;
                        const _0x4a9c44 = $(this)[_0x337d80(0x13d)](_0x337d80(0x141))[_0x337d80(0x108)]("clone-input");
                        $(_0x337d80(0x13f) + _0x4a9c44 + "\x22]\x20select")[
                                _0x337d80(0x13e)
                            ](function() {
                                const _0x399182 = _0x337d80,
                                    _0x49b152 = $(this)[_0x399182(0xb3)](_0x399182(0x101));
                                if (_0x49b152 && _0x49b152[_0x399182(0x1be)](_0x399182(0x188))) {
                                    const _0xfdf191 = parseInt(
                                        _0x49b152[_0x399182(0x1db)]("-")[0x1]
                                    );
                                    !isNaN(_0xfdf191) &&
                                        _0xfdf191 > _0x38abeb &&
                                        (_0x38abeb = _0xfdf191);
                                }
                            }),
                            _0x38abeb++,
                            (_0x44da24 = this[_0x337d80(0x101)] + "-" + _0x38abeb);
                    } else
                        _0x44da24 =
                        this[_0x337d80(0x101)] +
                        "-" +
                        (parseInt(
                                $(_0x337d80(0x15c) + _0x321e49 + "\x22]")[_0x337d80(0x136)]()["index"]()
                            ) +
                            0x1);
                    $(this)["val"](""),
                        $(this)["attr"](_0x337d80(0x101), _0x44da24),
                        $(this)[_0x337d80(0xb3)](_0x337d80(0xb2), _0x44da24);
                }
            ),
            _0x283d72[_0x49ff63(0x1fd)](_0x49ff63(0x145))["each"](function() {
                const _0x299a10 = _0x49ff63;
                if ($(this)[_0x299a10(0x108)](_0x299a10(0xcf))) {
                    let _0x160c5d = 0x0;
                    const _0x3915e6 = $(this)[_0x299a10(0x108)](_0x299a10(0xcf))[_0x299a10(0x1db)]("-")[0x0];
                    $(
                            _0x299a10(0x143) + _0x321e49 + _0x299a10(0xb1) + _0x3915e6 + "\x22]"
                        )["each"](function() {
                            const _0x25b609 = _0x299a10,
                                _0x4d730f = $(this)[_0x25b609(0xb3)](_0x25b609(0x229)),
                                _0x4e2181 = parseInt(_0x4d730f[_0x25b609(0x1db)]("-")[0x1]);
                            !isNaN(_0x4e2181) &&
                                _0x4e2181 > _0x160c5d &&
                                (_0x160c5d = _0x4e2181);
                        }),
                        _0x160c5d++;
                    const _0x4e3a51 = _0x3915e6 + "-" + _0x160c5d;
                    $(this)["attr"](_0x299a10(0x229), _0x4e3a51);
                }
            }),
            $(_0x49ff63(0xc2) + _0x321e49 + "\x22]")["append"](_0x3e1b14),
            $(_0x49ff63(0xa3) + _0x321e49 + "\x22]")[_0x49ff63(0x1ce)](_0x283d72),
            $(_0x49ff63(0x230) + _0x321e49 + "\x22]")["each"](function() {
                const _0x2fd7c5 = _0x49ff63;
                $(this)[_0x2fd7c5(0x1c0)](
                    $(this)[_0x2fd7c5(0x112)](_0x2fd7c5(0x15c) + _0x321e49 + "\x22]")[_0x2fd7c5(0x11a)]() + 0x1
                );
            }),
            $(_0x49ff63(0x181) + _0x321e49 + "\x22]")["each"](function() {
                const _0xda5412 = _0x49ff63;
                $(this)["text"](
                    $(this)[_0xda5412(0x112)](_0xda5412(0x143) + _0x321e49 + "\x22]")["index"]() + 0x1
                );
            });
        let _0x2d00b7 = $(
            "[data-clone-wrapper=\x22" +
            _0x321e49 +
            _0x49ff63(0x16b) +
            _0x321e49 +
            "\x22]"
        )["length"];
        if (_0x2d00b7 >= _0x2c5755) {
            $(this)[_0x49ff63(0x228)]();
            return;
        }
        $(this)[_0x49ff63(0x1ed)](), validation();
    }),
    $("[data-add-new-input]")["on"](_0x1668e8(0xdf), function() {
        const _0x8c7f15 = _0x1668e8,
            _0x198148 = $(this)[_0x8c7f15(0x112)](_0x8c7f15(0x105))["index"]();
        let _0x23e2cc = $(this)[_0x8c7f15(0x108)](_0x8c7f15(0xd4));
        var _0x10ec26 = $(_0x8c7f15(0x13f) + _0x23e2cc + "\x22]")["eq"](0x0)[_0x8c7f15(0x171)](!![]),
            _0xed3d5a = $(_0x8c7f15(0x153) + _0x23e2cc + "\x22]")["eq"](0x0)[_0x8c7f15(0x171)](!![]);
        let _0x567d1a = $(this)["data"](_0x8c7f15(0xe2)),
            _0x369617 = 0x0;
        $(_0x8c7f15(0x13f) + _0x23e2cc + "\x22]\x20input")[_0x8c7f15(0x13e)](
                function() {
                    const _0x252d18 = _0x8c7f15,
                        _0x29ff58 = $(this)[_0x252d18(0xb3)](_0x252d18(0x101));
                    if (_0x29ff58) {
                        const _0x3b053d = parseInt(_0x29ff58[_0x252d18(0x1db)]("-")[0x1]);
                        !isNaN(_0x3b053d) && _0x3b053d > _0x369617 && (_0x369617 = _0x3b053d);
                    }
                }
            ),
            $(_0x8c7f15(0x13f) + _0x23e2cc + _0x8c7f15(0x195))[_0x8c7f15(0x13e)](
                function() {
                    const _0x7492db = _0x8c7f15,
                        _0x2fa667 = $(this)[_0x7492db(0xb3)](_0x7492db(0x101));
                    if (_0x2fa667) {
                        const _0x4bcef1 = parseInt(_0x2fa667[_0x7492db(0x1db)]("-")[0x1]);
                        !isNaN(_0x4bcef1) &&
                            _0x4bcef1 > _0x369617 &&
                            (_0x369617 = _0x4bcef1);
                    }
                }
            ),
            $(_0x8c7f15(0x13f) + _0x23e2cc + _0x8c7f15(0x95))[_0x8c7f15(0x13e)](
                function() {
                    const _0x5aa723 = _0x8c7f15,
                        _0x186238 = $(this)[_0x5aa723(0xb3)](_0x5aa723(0x101));
                    if (_0x186238) {
                        const _0x84dfb = parseInt(_0x186238["split"]("-")[0x1]);
                        !isNaN(_0x84dfb) && _0x84dfb > _0x369617 && (_0x369617 = _0x84dfb);
                    }
                }
            ),
            _0x369617++,
            _0x10ec26["find"](_0x8c7f15(0x236))[_0x8c7f15(0x13e)](function() {
                const _0x5a6a16 = _0x8c7f15,
                    _0x4002bf = $(this)[_0x5a6a16(0xb3)](_0x5a6a16(0x101));
                let _0x18fc06 = _0x4002bf + "-" + _0x369617;
                $(this)[_0x5a6a16(0x218)](""),
                    $(this)["attr"](_0x5a6a16(0x101), _0x18fc06),
                    $(this)[_0x5a6a16(0xb3)]("data-name", _0x18fc06);
            }),
            _0x10ec26[_0x8c7f15(0x1fd)](_0x8c7f15(0x21b))[_0x8c7f15(0x13e)](
                function() {
                    const _0x41be7f = _0x8c7f15,
                        _0x8bfd11 = $(this)[_0x41be7f(0xb3)](_0x41be7f(0x101));
                    let _0x3ca4cb = _0x8bfd11 + "-" + _0x369617;
                    $(this)["val"](""),
                        $(this)[_0x41be7f(0xb3)]("name", _0x3ca4cb),
                        $(this)["attr"](_0x41be7f(0xb2), _0x3ca4cb);
                }
            ),
            _0x10ec26[_0x8c7f15(0x1fd)](_0x8c7f15(0x172))[_0x8c7f15(0x13e)](
                function() {
                    const _0x5b9043 = _0x8c7f15,
                        _0x4eaa66 = $(this)["attr"]("name");
                    let _0x533d0f = _0x4eaa66 + "-" + _0x369617;
                    $(this)[_0x5b9043(0x218)](""),
                        $(this)["attr"](_0x5b9043(0x101), _0x533d0f),
                        $(this)[_0x5b9043(0xb3)](_0x5b9043(0xb2), _0x533d0f);
                }
            ),
            _0xed3d5a["find"](_0x8c7f15(0x145))[_0x8c7f15(0x13e)](function() {
                const _0x104cf5 = _0x8c7f15;
                $(this)[_0x104cf5(0xb3)](_0x104cf5(0x229), "relationship-" + _0x369617);
            }),
            $(this)["siblings"]("[data-clone-input-wrapper=\x22" + _0x23e2cc + "\x22]")[_0x8c7f15(0x1ce)](_0x10ec26),
            $(_0x8c7f15(0x182))["eq"](_0x198148)[_0x8c7f15(0x1fd)](_0x8c7f15(0xa9) + _0x23e2cc + "\x22]")[_0x8c7f15(0x1ce)](_0xed3d5a),
            $(_0x8c7f15(0x238) + _0x23e2cc + "\x22]")[_0x8c7f15(0x13e)](function() {
                const _0x14f0c0 = _0x8c7f15;
                $(this)["text"](
                    $(this)[_0x14f0c0(0x112)](_0x14f0c0(0x13f) + _0x23e2cc + "\x22]")[_0x14f0c0(0x11a)]() + 0x1
                );
            }),
            $(_0x8c7f15(0xfe) + _0x23e2cc + "\x22]")[_0x8c7f15(0x13e)](function() {
                const _0x2ab9fb = _0x8c7f15;
                $(this)[_0x2ab9fb(0x1c0)](
                    $(this)[_0x2ab9fb(0x112)](_0x2ab9fb(0x153) + _0x23e2cc + "\x22]")[_0x2ab9fb(0x11a)]() + 0x1
                );
            });
        let _0x7bae47 = $(
            _0x8c7f15(0xe3) + _0x23e2cc + _0x8c7f15(0x223) + _0x23e2cc + "\x22]"
        )[_0x8c7f15(0x12a)];
        if (_0x7bae47 >= _0x567d1a) {
            $(this)["hide"]();
            return;
        }
        $(this)["show"](), cloneRemoveInput(), validation();
    }),
    $(_0x1668e8(0x1cf))["on"]("click", function() {
        const _0x2da99c = _0x1668e8,
            _0x5b225d = $(this)[_0x2da99c(0x108)](_0x2da99c(0x189));
        $("input[name=\x22" + _0x5b225d + "\x22]")[_0x2da99c(0x218)](""),
            validation();
    });

function andLogic() {
    const _0x50ecb4 = _0x1668e8;
    conditionalResult &&
        (steps["eq"](x)[_0x50ecb4(0x1fd)](_0x50ecb4(0x185))[_0x50ecb4(0x228)](),
            steps["eq"](x)[_0x50ecb4(0x1fd)](_0x50ecb4(0x185))["each"](function() {
                const _0x613890 = _0x50ecb4;

                function _0x3c5c60(_0x4a3054) {
                    const _0x6890cb = _0x163e,
                        _0x5f56a7 = _0x4a3054[_0x6890cb(0x1db)]("&"),
                        _0x46d261 = [];
                    return (
                        _0x5f56a7[_0x6890cb(0x1d0)]((_0x5dede1) => {
                            const _0x4d2fac = _0x6890cb,
                                [_0x203ca9, _0x5f3eb9] = _0x5dede1[_0x4d2fac(0x1db)]("=");
                            _0x46d261["push"]({ field: _0x203ca9, value: _0x5f3eb9 });
                        }),
                        _0x46d261
                    );
                }
                const _0xf0c01c = $(this)[_0x613890(0xb3)]("data-show-if"),
                    _0x3ac12d = _0x3c5c60(_0xf0c01c);

                function _0x20868f(_0x20bea0, _0x235d07) {
                    const _0x5ea1d1 = _0x613890;
                    return _0x235d07[_0x5ea1d1(0x20c)]((_0x31c2ac, _0x331ecb) => {
                        const _0x1094d2 = _0x5ea1d1;
                        if (
                            _0x20bea0[0x0] &&
                            _0x31c2ac[_0x1094d2(0x1e1)] === _0x20bea0[0x0][_0x1094d2(0x1e1)]
                        )
                            return _0x20bea0[_0x1094d2(0x17f)](
                                (_0x30dda5, _0x2f39bb) =>
                                _0x235d07[_0x331ecb + _0x2f39bb] &&
                                _0x235d07[_0x331ecb + _0x2f39bb][_0x1094d2(0x1e1)] ===
                                _0x30dda5[_0x1094d2(0x1e1)] &&
                                _0x235d07[_0x331ecb + _0x2f39bb][_0x1094d2(0xd1)] ===
                                _0x30dda5["value"]
                            );
                        return ![];
                    });
                }
                const _0x28d3f2 = _0x20868f(_0x3ac12d, all_data);
                _0x28d3f2 ? $(this)[_0x613890(0x1ed)]() : $(this)[_0x613890(0x228)]();
            }));
}
progressiveTarget["addClass"](_0x1668e8(0x228)),
    progressiveInput["on"]("input", function() {
        const _0x23073e = _0x1668e8,
            _0xc0086f = $(this)[_0x23073e(0x108)]("input-reveal"),
            _0x11edf7 = $(this)["val"](),
            _0x339cb0 = form[_0x23073e(0x1fd)](_0x23073e(0xc4) + _0xc0086f + "\x22]")[
                "data"
            ]("input-reveal-value");
        let _0x4974c5 = form[_0x23073e(0x1fd)](
                _0x23073e(0xc4) + _0xc0086f + "\x22][data-input-reveal-value]"
            )[_0x23073e(0xd6)](function() {
                const _0x39831f = _0x23073e;
                return (
                    $(this)[_0x39831f(0x108)](_0x39831f(0xda))[_0x39831f(0xbb)]() ===
                    _0x11edf7[_0x39831f(0xbb)]()
                );
            }),
            _0x3a9b11 = form[_0x23073e(0x1fd)](
                _0x23073e(0xc4) + _0xc0086f + _0x23073e(0x150)
            );
        form[_0x23073e(0x1fd)](_0x23073e(0xc4) + _0xc0086f + "\x22]")["addClass"](
                _0x23073e(0x125)
            ),
            form[_0x23073e(0x1fd)](_0x23073e(0xc4) + _0xc0086f + "\x22]")[
                _0x23073e(0x160)
            ](_0x23073e(0x213));
        _0x11edf7 !== "" &&
            (_0x339cb0[_0x23073e(0xbb)]() === "*" && _0x11edf7 !== "" ?
                (_0x3a9b11[_0x23073e(0x160)](_0x23073e(0x125)),
                    _0x3a9b11["addClass"](_0x23073e(0x213))) :
                (_0x4974c5["removeClass"](_0x23073e(0x125)),
                    _0x4974c5[_0x23073e(0x102)]("f-show")));

        function _0x358943(_0x8706c) {
            const _0x1a4708 = _0x23073e;
            _0x8706c &&
                form[_0x1a4708(0x1fd)](_0x1a4708(0x222) + _0x8706c + "\x22]")[
                    "val"
                ]() !== "" &&
                form["find"]("[data-input-reveal=\x22" + _0x8706c + "\x22]")[
                    _0x1a4708(0x22f)
                ](_0x1a4708(0x236));
        }
        let _0x1f8f62 = form[_0x23073e(0x1fd)](
            _0x23073e(0xc4) + _0xc0086f + "\x22]"
        )[_0x23073e(0x1fd)]("[data-input-reveal]")["data"](_0x23073e(0x12b));
        _0x358943(_0x1f8f62),
            form["find"](_0x23073e(0x17b))[_0x23073e(0x13e)](function() {
                const _0x2bee7f = _0x23073e,
                    _0x9fe78 = $(this)[_0x2bee7f(0x108)](_0x2bee7f(0x12b));
                form["find"](_0x2bee7f(0xc4) + _0x9fe78 + "\x22]")[_0x2bee7f(0x160)](
                        _0x2bee7f(0x213)
                    ),
                    form["find"](_0x2bee7f(0xc4) + _0x9fe78 + "\x22]")[_0x2bee7f(0x102)](
                        "f-hide"
                    );
            });
    });

function _0x163e(_0x997423, _0x409d0f) {
    const _0x57e68e = _0x57e6();
    return (
        (_0x163e = function(_0x163ef9, _0x484667) {
            _0x163ef9 = _0x163ef9 - 0x92;
            let _0x809b3 = _0x57e68e[_0x163ef9];
            return _0x809b3;
        }),
        _0x163e(_0x997423, _0x409d0f)
    );
}

function addClickClass() {
    const _0x3ab5b4 = _0x1668e8,
        _0x37a9a0 = $(this)[_0x3ab5b4(0x108)](_0x3ab5b4(0x10b)),
        _0x5e6f8a = $(this)[_0x3ab5b4(0xb3)](_0x3ab5b4(0x101));
    $("input[name=\x22" + _0x5e6f8a + "\x22]")[_0x3ab5b4(0x1e6)]()[_0x3ab5b4(0x160)](_0x37a9a0),
        $(this)["is"](_0x3ab5b4(0x1c6)) &&
        $(this)[_0x3ab5b4(0x1e6)]()[_0x3ab5b4(0x102)](_0x37a9a0);
}
$(_0x1668e8(0x15e))["on"]("change", addClickClass);

function updateCounter(_0x52cea9) {
    const _0x164c32 = _0x1668e8;
    var _0x3ec1e4 = new Date(),
        _0x415cd7 = _0x3ec1e4[_0x164c32(0x1ee)](),
        _0x26b4d8 = btoa(_0x164c32(0xc6)),
        _0x56d6fa = btoa(_0x415cd7[_0x164c32(0xb5)]()),
        _0x3c5941 = getCookie(_0x26b4d8);
    !_0x3c5941 || _0x3c5941 !== _0x56d6fa ?
        $["post"](_0x164c32(0x13b), function() {
            const _0x5a2390 = _0x164c32;
            console[_0x5a2390(0x234)](_0x5a2390(0xf7)),
                (document[_0x5a2390(0x179)] = _0x26b4d8 + "=" + _0x56d6fa);
        })[_0x164c32(0x217)](function(_0x250b66, _0x5a5702, _0x3c0fa8) {
            const _0x8b40e1 = _0x164c32;
            console["error"](_0x8b40e1(0x169), _0x3c0fa8);
        }) :
        console[_0x164c32(0x234)](_0x164c32(0x198));
}

function getCookie(_0x172a41) {
    const _0xcb00fc = _0x1668e8;
    var _0x1115c5 = null;
    if (document[_0xcb00fc(0x179)] && document[_0xcb00fc(0x179)] !== "") {
        var _0x263d09 = document[_0xcb00fc(0x179)][_0xcb00fc(0x1db)](";");
        for (
            var _0x1167e7 = 0x0; _0x1167e7 < _0x263d09[_0xcb00fc(0x12a)]; _0x1167e7++
        ) {
            var _0x3b0895 = _0x263d09[_0x1167e7]["trim"]();
            if (
                _0x3b0895[_0xcb00fc(0x16e)](0x0, _0x172a41[_0xcb00fc(0x12a)] + 0x1) ===
                _0x172a41 + "="
            ) {
                _0x1115c5 = decodeURIComponent(
                    _0x3b0895[_0xcb00fc(0x16e)](_0x172a41[_0xcb00fc(0x12a)] + 0x1)
                );
                break;
            }
        }
    }
    return _0x1115c5;
}
updateCounter(),
    scrollTop(),
    cloneRemove(),
    cloneRemoveInput(),
    disableRadioQuickTap();
const formlyUrlParams = new URLSearchParams(
        window["location"][_0x1668e8(0x202)]
    ),
    formlySupportParam = formlyUrlParams[_0x1668e8(0x212)](_0x1668e8(0x1de)),
    showButton = formlySupportParam === _0x1668e8(0x216),
    passIcon =
    "<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a</svg>\x0a</div>",
    failIcon = _0x1668e8(0x21e);
let isScriptLoaded = !![],
    scriptLocation = _0x1668e8(0x126),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x1668e8(0x157) : _0x1668e8(0xfb),
    resultStatus = "PASS",
    scriptSrcAdded = "";

function isElementPresent(_0x281630, _0x135ac3) {
    const _0x381df2 = _0x1668e8;
    return (
        document[_0x381df2(0x186)](
            "[" + _0x135ac3 + "=\x22" + _0x281630 + "\x22]"
        ) !== null
    );
}
isMultistepAttributePresent = isElementPresent(
    _0x1668e8(0x11c),
    _0x1668e8(0x1eb)
);
const multistepForm = document["querySelector"](_0x1668e8(0x20e)),
    formStepLength = multistepForm[_0x1668e8(0x14d)](_0x1668e8(0x1ac))[
        _0x1668e8(0x12a)
    ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x1668e8(0x186)](_0x1668e8(0x19d)),
    nextBtnExist = multistepContainer[_0x1668e8(0x186)](_0x1668e8(0xe7)),
    backBtnExist = multistepContainer[_0x1668e8(0x186)](_0x1668e8(0x100)),
    submitBtnExist = multistepContainer[_0x1668e8(0x186)](_0x1668e8(0x1d6));
(areButtonsPresent =
    nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null),
(isNextBtnOnSubmit =
    nextBtnExist &&
    nextBtnExist[_0x1668e8(0x23a)][_0x1668e8(0xbb)]() === _0x1668e8(0x236)),
(isSubmitBtnOnSubmit =
    submitBtnExist &&
    submitBtnExist[_0x1668e8(0x23a)][_0x1668e8(0xbb)]() === _0x1668e8(0x236) &&
    submitBtnExist["type"][_0x1668e8(0xbb)]() === _0x1668e8(0xc9)),
(isBackBtnOnSubmit =
    backBtnExist && backBtnExist["tagName"][_0x1668e8(0xbb)]() === "input");
const checkPowerup = (_0x1d475b) =>
    document[_0x1668e8(0x186)](_0x1d475b) !== null,
    progressBarAttr = checkPowerup("[data-form=\x22progress\x22]"),
    progressIndicatorAttr = checkPowerup(_0x1668e8(0x175)),
    customProgressAttr = checkPowerup(_0x1668e8(0x175)),
    cardDivAttr = checkPowerup("[data-card=\x22true\x22]"),
    currentStepAttr = checkPowerup(_0x1668e8(0xf6)),
    totalStepAttr = checkPowerup(_0x1668e8(0xa6)),
    enterAttr = checkPowerup(_0x1668e8(0xdb)),
    submitAttr = checkPowerup(_0x1668e8(0xa4)),
    radioSkipAttr = checkPowerup("[data-radio-skip=\x22true\x22]"),
    customCheckboxAttr = checkPowerup(_0x1668e8(0x1f6)),
    recapatchaAttr = checkPowerup("[data-callback=\x22recaptcha\x22]"),
    dataAnswerOnFirstStep =
    steps["eq"](0x0)[_0x1668e8(0x1fd)](_0x1668e8(0x1a4))[_0x1668e8(0x108)](_0x1668e8(0x1e0)) === "" ||
    !steps["eq"](0x0)[_0x1668e8(0x1fd)](_0x1668e8(0x1a4))[_0x1668e8(0x108)](_0x1668e8(0x1e0));
let dataGoToDataAnswerOnFormStep = "",
    dataAnswerAndDataGoToPairs = "",
    dataAnswerIsOnDataCard = "";
steps["each"]((_0x24d858) => {
    const _0x3290e8 = _0x1668e8,
        _0xbb9a92 = steps["eq"](_0x24d858);
    _0xbb9a92[_0x3290e8(0x108)]("answer") &&
        _0xbb9a92[_0x3290e8(0x108)](_0x3290e8(0x109)) &&
        (dataGoToDataAnswerOnFormStep +=
            _0x3290e8(0xc1) + (_0x24d858 + 0x1) + _0x3290e8(0xf2));
    const _0x37b9b2 = _0xbb9a92[_0x3290e8(0x1fd)](_0x3290e8(0x1a4));
    _0x37b9b2["length"] &&
        ((dataAnswerAndDataGoToPairs +=
                "<div\x20class=\x22f-text_attribute-title\x22>Step\x20" +
                (_0x24d858 + 0x1) +
                _0x3290e8(0xf2)),
            _0x37b9b2[_0x3290e8(0x13e)]((_0x28c144, _0x221282) => {
                const _0x10a079 = _0x3290e8,
                    _0x27ccfe = $(_0x221282);
                (dataAnswerAndDataGoToPairs +=
                    _0x10a079(0x10a) + _0x27ccfe["data"](_0x10a079(0x1e0)) + "\x22"),
                _0x27ccfe[_0x10a079(0x108)](_0x10a079(0x109)) &&
                    (dataAnswerAndDataGoToPairs +=
                        _0x10a079(0x1ff) + _0x27ccfe["data"](_0x10a079(0x109)) + "\x22"),
                    (dataAnswerAndDataGoToPairs += "</div>");
            })),
        steps["eq"](_0x24d858)[_0x3290e8(0x108)](_0x3290e8(0x148)) &&
        (steps["eq"](_0x24d858)[_0x3290e8(0x108)](_0x3290e8(0x1e0)) ||
            steps["eq"](_0x24d858)[_0x3290e8(0x1fd)](_0x3290e8(0x1a4))["data"](_0x3290e8(0x1e0))) &&
        (dataAnswerIsOnDataCard +=
            _0x3290e8(0xc1) + (_0x24d858 + 0x1) + "</div>");
});
(!isScriptLoaded ||
    scriptLocation !== _0x1668e8(0x126) ||
    !isMultistepAttributePresent ||
    !isMultistepOnFormElement ||
    !areButtonsPresent ||
    isNextBtnOnSubmit ||
    !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) &&
(resultStatus = _0x1668e8(0x1f4));

function _0x57e6() {
    const _0x59f6cc = [
        "f-mySidenav",
        "reset",
        "append",
        "[data-remove-upload]",
        "forEach",
        "8825MixQWF",
        "[data-add-new-input=\x22",
        "skipTo",
        "[data-selection=\x22",
        "script",
        "[data-form=\x22submit-btn\x22]",
        "translateX(-40rem)",
        "getItem",
        "[data-weighted-selection]",
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "split",
        "<option>",
        "ix2",
        "formly-support",
        "redirect-form-hehexd",
        "answer",
        "field",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>ReCAPTCHA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "dispatchEvent",
        "[data-count-card]",
        "open",
        "parent",
        "block-domain",
        "[type=\x22radio\x22]",
        "radio-skip",
        ".w-form-formradioinput",
        "data-form",
        "css",
        "show",
        "getMonth",
        "\x20seconds",
        "searchParams",
        "textarea[required]:visible",
        "formly",
        "[data-radio-skip]:visible",
        "FAIL",
        ":input[type=\x22url\x22][required]",
        "[data-checkbox]",
        "change",
        "remove",
        "input[type=\x22radio\x22][name=\x22",
        "[data-skip-to]",
        "parse",
        "[data-query-param]",
        "find",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x20|\x20<strong>data-go-to\x20</strong>\x20=\x22",
        "textarea[autofocus]",
        "textarea:focus",
        "search",
        "getElementsByTagName",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "findIndex",
        "skip-to",
        "disabled",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        ":focus",
        "input[type=\x22submit\x22]",
        "now",
        "some",
        "location",
        "form[data-form=\x22multistep\x22]",
        "script[src=\x22",
        "[data-reinit]",
        ":input",
        "get",
        "f-show",
        "[data-form=\x22percentage-bar\x22]",
        "[data-range]:contains(",
        "true",
        "fail",
        "val",
        "keydown",
        "width",
        "select",
        ".w-radio-input",
        "data-radio-delay",
        "<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a</svg>\x0a</div>",
        ".active-answer-card",
        "backTo",
        "keypress",
        "[data-input-reveal=\x22",
        "\x22]\x20[data-clone-input=\x22",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a",
        "style",
        "clickable-all",
        "[data-hidden-input=\x22page-visit-duration\x22]",
        "hide",
        "data-input-field",
        ":input[required]",
        "test",
        "<br>Data\x20Go\x20To\x20=\x20",
        "ctrlKey",
        "[data-answer][data-radio-skip]:visible",
        "trigger",
        "[data-index=\x22",
        "input[type=\x22text\x22][required]:visible",
        "userAgent",
        "782748RzDtXW",
        "log",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Radio\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "input",
        "enter",
        "[data-input-index=\x22",
        "[data-btn=\x22check\x22]",
        "tagName",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
        "[data-reset-delay]",
        "stopPropagation",
        "createElement",
        ".w-checkbox-input",
        ":input[type=\x22time\x22]",
        "\x22]\x20textarea",
        "select:not([data-prefill=\x22false\x22])",
        "[data-success-card]",
        "round",
        "Direct",
        "file",
        ":input[type=\x22checkbox\x22]",
        "multiple-results",
        "add-new-limit",
        "pageLoadTime",
        "[data-form=\x22remove-input-clone\x22]",
        "input[type=\x22email\x22]:visible",
        "input[autofocus]",
        "push",
        "[data-display-wrapper=\x22",
        "[data-submit=\x22true\x22]",
        "[data-answer=\x22",
        "[data-text=\x22total-steps\x22]",
        "[data-form=\x22next-btn\x22][data-submit-show]",
        "translateX(0rem)",
        "[data-display-input-wrapper=\x22",
        ":input[type=\x22password\x22]",
        "div",
        "includes",
        "auto",
        "[data-selection=\x22other\x22]",
        "Before\x20&lt;/body&gt;\x20tag",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
        "\x22]\x20[data-input-field^=\x22",
        "data-name",
        "attr",
        "[data-clone-input-wrapper]",
        "toString",
        "reset-delay",
        "Please\x20wait...",
        "href",
        "conditional-result",
        "quiz",
        "toLowerCase",
        "redirect",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Custom\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-cms-select=cms]",
        "<div>Step\x20",
        "[data-clone-wrapper=\x22",
        "[data-clickable]",
        "[data-input-target=\x22",
        "custom-error-message",
        "counter",
        "phone-autoformat",
        "select[required]:visible",
        "submit",
        "span",
        "\x22][value=\x22",
        "min-character",
        ":input[type=\x22time\x22][required]",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "input-field",
        "[data-clone-wrapper]",
        "value",
        ":input[type=\x22date\x22][required]",
        "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x2035%;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20max-height:\x20100vh;\x0a\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a\x20\x20\x20\x20line-height:1.4\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_attribute-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20margin-bottom:\x2014px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20color:\x20#1eee32;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_title\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-header\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.paragraph\x20{\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.hide\x20{\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type._1\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_script\x20{\x0a\x20\x20\x20\x20color:\x20#fffc57;\x0a\x20\x20\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-wrapper\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-link\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-support-title{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-closebtn{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200.3rem;\x0a\x20\x20\x20\x20right:\x200.7rem;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20}\x0a\x20\x20.f-hide{\x0a\x20\x20\x20\x20display\x20:none\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-logic-text{\x0a\x20\x20\x20\x20padding-left:1rem;\x0a\x20\x20}\x0a\x20\x20.f-logic-text\x20strong{\x0a\x20\x20\x20\x20color\x20:\x20white\x20!Important;\x0a\x20\x20}\x0a",
        "add-new-input",
        "scroll-top-offset",
        "filter",
        "checkbox",
        ":input[type=\x22date\x22]",
        "edit-step",
        "input-reveal-value",
        "[data-enter=\x22true\x22]",
        "active-answer-card",
        "radio-delay",
        "selections\x20email",
        "click",
        "[data-form=\x22submit-btn\x22]:visible",
        ".w-form-done",
        "add-new-input-limit",
        "[data-clone-input-wrapper=\x22",
        "[data-form=\x22remove-clone\x22]",
        "getResponse",
        "[required]",
        "[data-form=\x22next-btn\x22]",
        "[data-selected]:checked",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
        "7475670xAMVvS",
        "keyCode",
        "[data-form=\x22step\x22][data-card]",
        "input[type=\x22checkbox\x22]:not(:checked)",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "pushState",
        "Webflow",
        ":input[type=\x22text\x22]",
        "</div>",
        "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
        "<br>Data\x20Answer\x20=\x20",
        "clickable",
        "[data-text=\x22current-step\x22]",
        "Counter\x20updated\x20successfully.",
        "input[type=\x22radio\x22]:checked",
        "ms-field",
        "inputName",
        "Basic\x20(No\x20Formly\x20Logic)",
        "url",
        "\x22])",
        "[data-display-input-index=\x22",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-form=\x22back-btn\x22]",
        "name",
        "addClass",
        "[type=\x22submit\x22]",
        "function",
        "[data-clone]",
        "input:radio[name=\x22",
        "[data-selection]",
        "data",
        "go-to",
        "<div\x20class=\x22f-logic-text\x22><strong>data-answer</strong>=\x22",
        "click-addclass",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "count-card",
        "[data-select-multiple]",
        "div.g-recaptcha",
        "[aria-label=\x22Remove\x20file\x22]",
        "[data-add-new=\x22",
        "parents",
        "removeItem",
        "\x22]:checked",
        "stringify",
        "[data-input-reveal]",
        "innerHTML",
        "[data-cms-select=text]",
        "selected",
        "index",
        "[data-custom-error-message]",
        "multistep",
        "formlyLastStepAnswer",
        "input[name=\x22",
        "body",
        "status",
        "N/A",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
        "timeZone",
        "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "f-hide",
        "head",
        "[data-add-new]",
        "weighted-selection",
        "prop",
        "length",
        "input-reveal",
        "BODY",
        "[data-form=\x22submit\x22]:visible",
        "children",
        "[data-radio-delay]",
        "[data-form=\x22progress\x22]",
        "option[value=\x22$(this).val()\x22]",
        "radio",
        "textarea[name=\x22",
        "input[type=\x22checkbox\x22]",
        ":input[type=\x22file\x22]",
        "last",
        "nonvalidated",
        "join",
        "<div\x20class=\x22f-text_script\x22>Before\x20&lt;/body&gt;\x20tag<br/></div>",
        "filledInput",
        "https://videsigns-staging.co.uk/formly-counter",
        "key",
        "closest",
        "each",
        "[data-clone-input=\x22",
        "referrer",
        "[data-clone-input]",
        "textarea[required]",
        "[data-display=\x22",
        "replace",
        "[data-input-field]",
        "history",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;\x20on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "card",
        "screen-resolution",
        "627002gFnLKq",
        "label",
        ":input[type=\x22email\x22]",
        "querySelectorAll",
        "[data-go-to]",
        "DateTimeFormat",
        "\x22][data-input-reveal-value=\x22*\x22]",
        "8sDPiSw",
        "data-go-to",
        "[data-display-input=\x22",
        "success",
        "input:checkbox",
        "option[value=\x22",
        "FormlyLogic\x20enabled",
        "metaKey",
        "[data-display-input]",
        "first",
        "[data-text=\x22total-weight\x22]",
        "[data-clone=\x22",
        "input:radio[required]",
        "[data-click-addclass]",
        "Removed\x20unfilled\x20divs",
        "removeClass",
        "none",
        "trim",
        "[data-max-checkbox]",
        "3905860HjDICy",
        "[data-selection-weight]",
        "height",
        "clone-input",
        "resolvedOptions",
        "Failed\x20to\x20update\x20counter:",
        "0.4",
        "\x22]\x20[data-clone=\x22",
        ":input[type=\x22number\x22][required]",
        "fadeIn",
        "substring",
        "select[required]",
        "[data-form=\x22percentage-text\x22]",
        "clone",
        "textarea",
        "scroll-top",
        ":input[type=\x22password\x22][required]",
        "[data-form=\x22progress-indicator\x22]",
        "selection",
        "[data-form-ms=\x22submit-btn\x22]",
        "\x22]:not([data-prefill=\x22false\x22])",
        "cookie",
        "appendChild",
        "[data-input-reveal]:not(:visible)",
        "[data-answer]:not([data-answer=\x22",
        "[data-input-field=\x22",
        "slice",
        "every",
        "[data-text=\x22error-message\x22]",
        "[data-display-index=\x22",
        "[data-display]",
        "1230ZsUyJH",
        "parentNode",
        "[data-show-if]",
        "querySelector",
        "form[data-form=\x22multistep\x22]\x20:input",
        "relationship-",
        "remove-upload",
        "[data-clickable-all]",
        "init",
        "phone-validation",
        "type",
        ":input[type=\x27radio\x27]:checked",
        "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
        "destroy",
        "submit-show",
        "<div\x20class=\x22f-text_script\x22>Inside\x20&lt;head&gt;\x20tag<br/></div>",
        "new-tab",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x22]\x20select",
        "clicked",
        "[data-hidden-input=\x22",
        "Counter\x20already\x20updated\x20for\x20this\x20month.",
        "not",
        ":input[type=\x22tel\x22]",
        "siblings",
        "[data-btn=\x22reset\x22]",
        "[data-form=\x22multistep\x22]",
        "focus",
        "_blank",
        "click-path",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "param-analytics",
        "\x22]\x20input",
        "[data-answer]",
        "step",
        "select[name=\x22",
        "[data-success-card=\x22",
        "[data-redirect-delay]",
        "preventDefault",
        "wait",
        "max-checkbox",
        "[data-form=\x22step\x22]",
        "[data-quiz]",
        "memory",
        "[data-form=\x22custom-progress-indicator\x22]",
        "top",
        "1994568ojiVBz",
        "button",
        "checked",
        "w--redirected-checked",
        "last-step",
        "499888biHUxa",
        "setItem",
        "[data-conditional-result]",
        "query-param",
        "offset",
        ":input[type=\x22file\x22][required]",
        ":first",
        ":input[type=\x22email\x22][required]",
        "startsWith",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Total\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "text",
        "readystatechange",
        ":input[type=\x22tel\x22][required]",
        "redirect-delay",
        ":input[type=\x22url\x22]",
        "input[type=\x22radio\x22]",
        ":checked",
        "formlyLastStep",
        "screen",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "current",
        "[data-radio-skip]",
    ];
    _0x57e6 = function() {
        return _0x59f6cc;
    };
    return _0x57e6();
}

function isScriptUrlMatch(_0x132599, _0x43d78e) {
    const _0x3976c5 = _0x1668e8;
    for (
        var _0xd48423 = 0x0; _0xd48423 < _0x43d78e[_0x3976c5(0x12a)]; _0xd48423++
    ) {
        if (_0x132599[_0x3976c5(0xac)](_0x43d78e[_0xd48423])) return !![];
    }
    return ![];
}
var keywordsToCheck = [
        "videsigns",
        _0x1668e8(0x1f2),
        "https://slater.app/4908/8862.js",
    ],
    scripts = document[_0x1668e8(0x203)](_0x1668e8(0x1d5)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x1668e8(0x12a)]; i++) {
    var scriptSrcs = scripts[i]["src"];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
        matchedScripts[_0x1668e8(0xa2)](scriptSrcs);
}
if (matchedScripts[_0x1668e8(0x12a)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x1668e8(0x186)](
        _0x1668e8(0x20f) + scriptSrcAdded + "\x22]"
    );
    script &&
        (scriptLocation =
            script[_0x1668e8(0x184)]["tagName"] === _0x1668e8(0x12c) ?
            _0x1668e8(0xaf) :
            "Inside\x20<head>\x20tag");
} else scriptSrcAdded = _0x1668e8(0x18f) + failIcon;
const newElement = document[_0x1668e8(0x92)](_0x1668e8(0xab)),
    newStyle = document[_0x1668e8(0x92)]("style");
(newStyle[_0x1668e8(0x117)] = _0x1668e8(0xd3)),
document[_0x1668e8(0x126)][_0x1668e8(0x17a)](newStyle);
showButton && document["body"][_0x1668e8(0x17a)](newElement);
newElement[_0x1668e8(0x117)] =
    "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (!logicExtra ? passIcon : failIcon) +
    _0x1668e8(0xbd) +
    (quiz ? passIcon : failIcon) +
    _0x1668e8(0x1fe) +
    (weightedSelection ? passIcon : failIcon) +
    _0x1668e8(0xee) +
    scriptSrcAdded +
    "<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (scriptLocation === _0x1668e8(0x126) ? _0x1668e8(0x192) : _0x1668e8(0x139)) +
    _0x1668e8(0x1a1) +
    (formStepLength ? passIcon : failIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (formStepLength > 0x0 ? passIcon : failIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x20" +
    formStepLength +
    _0x1668e8(0x1da) +
    (nextBtnExist ? passIcon : failIcon) +
    _0x1668e8(0x10c) +
    (isNextBtnOnSubmit ? failIcon : passIcon) +
    _0x1668e8(0xce) +
    (backBtnExist ? passIcon : failIcon) +
    _0x1668e8(0x194) +
    (isBackBtnOnSubmit ? failIcon : passIcon) +
    _0x1668e8(0xbf) +
    (submitBtnExist ? passIcon : failIcon) +
    _0x1668e8(0xff) +
    (isSubmitBtnOnSubmit ? failIcon : passIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (progressBarAttr && progressIndicatorAttr ?
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Automatic\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        passIcon +
        _0x1668e8(0x122) :
        "") +
    _0x1668e8(0x1c9) +
    (customProgressAttr ? _0x1668e8(0xbe) + passIcon + _0x1668e8(0x122) : "") +
    _0x1668e8(0x1c9) +
    (cardDivAttr ?
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        passIcon +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>" :
        "") +
    _0x1668e8(0x1c9) +
    (currentStepAttr ?
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Current\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        passIcon +
        _0x1668e8(0x122) :
        "") +
    _0x1668e8(0x1c9) +
    (totalStepAttr ? _0x1668e8(0x1bf) + passIcon + _0x1668e8(0x122) : "") +
    _0x1668e8(0x1c9) +
    (enterAttr ? _0x1668e8(0x23b) + passIcon + _0x1668e8(0x122) : "") +
    _0x1668e8(0x1c9) +
    (submitAttr ?
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        passIcon +
        _0x1668e8(0x122) :
        "") +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (radioSkipAttr ? _0x1668e8(0x235) + passIcon + _0x1668e8(0x122) : "") +
    _0x1668e8(0x1c9) +
    (customCheckboxAttr ?
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Checkboxes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        passIcon +
        _0x1668e8(0x122) :
        "") +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (recapatchaAttr ? _0x1668e8(0x1e2) + passIcon + _0x1668e8(0x122) : "") +
    _0x1668e8(0xe9) +
    (logicExtra ?
        _0x1668e8(0x147) +
        (dataAnswerOnFirstStep ? passIcon : failIcon) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (dataGoToDataAnswerOnFormStep !== "" ?
            _0x1668e8(0x124) + dataGoToDataAnswerOnFormStep + _0x1668e8(0xb0) :
            "") +
        _0x1668e8(0x208) +
        dataAnswerAndDataGoToPairs +
        _0x1668e8(0x204) +
        (dataAnswerIsOnDataCard !== "" ?
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20is\x20on\x20data-card\x20=\x20true</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
            dataAnswerIsOnDataCard +
            _0x1668e8(0xb0) :
            "") +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>" :
        "") +
    _0x1668e8(0x224);

function openNav() {
    const _0x42910c = _0x1668e8;
    console[_0x42910c(0x234)](_0x42910c(0x196)),
        (document["getElementById"](_0x42910c(0x1cc))["style"]["transform"] =
            _0x42910c(0xa8));
}

function closeNav() {
    const _0x14ffe5 = _0x1668e8;
    document["getElementById"](_0x14ffe5(0x1cc))[_0x14ffe5(0x225)]["transform"] =
        _0x14ffe5(0x1d7);
}