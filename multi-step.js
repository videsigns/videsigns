// 30 April 2024
// Feature update
// 1. multiple results for quiz

const _0x31db7e = _0x29b7;
(function(_0x23590c, _0x1a1607) {
    const _0xfb38a = _0x29b7,
        _0x1fe837 = _0x23590c();
    while (!![]) {
        try {
            const _0x916ba5 = parseInt(_0xfb38a(0x70)) / 0x1 + -parseInt(_0xfb38a(0xa0)) / 0x2 * (-parseInt(_0xfb38a(0x1c4)) / 0x3) + -parseInt(_0xfb38a(0xd1)) / 0x4 + parseInt(_0xfb38a(0x135)) / 0x5 + parseInt(_0xfb38a(0xb7)) / 0x6 + -parseInt(_0xfb38a(0xa2)) / 0x7 + -parseInt(_0xfb38a(0x112)) / 0x8;
            if (_0x916ba5 === _0x1a1607) break;
            else _0x1fe837['push'](_0x1fe837['shift']());
        } catch (_0x4c6264) { _0x1fe837['push'](_0x1fe837['shift']()); }
    }
}(_0x1fdd, 0xc8299));
let x = 0x0,
    lastStep = 0x0,
    curStep = 0x0,
    countCard = !![],
    fill = ![],
    inputFilled = !![],
    skip, urlFilled = !![],
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
    answer = '',
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
    successCard = '',
    redirectTo = '',
    totalSteps = 0x0,
    checkCount = 0x0,
    maxCheckCount = 0x0,
    newTab = !![],
    unfilledArr = [],
    notRobot = !![],
    all_data = [];
var ogCloneArr = [];
let form = $(_0x31db7e(0x19f)),
    steps = $(_0x31db7e(0x1a1)),
    progressbarClone = $(_0x31db7e(0x186))[_0x31db7e(0x19a)](),
    progressbar, weightedSelection = $('[data-weighted-selection]')[_0x31db7e(0x1ce)](_0x31db7e(0x1f4)),
    weightedSelectionRange = $(_0x31db7e(0x13e))[_0x31db7e(0x1ce)](_0x31db7e(0x17f)),
    selectMultiple = $('[data-select-multiple]')[_0x31db7e(0x1ce)]('select-multiple'),
    customError = $(_0x31db7e(0xeb))['data']('custom-error-message'),
    reinitIX = $('[data-reinit]')[_0x31db7e(0x1ce)](_0x31db7e(0x1a2)),
    memory = $(_0x31db7e(0xd7))[_0x31db7e(0x1ce)](_0x31db7e(0x166)),
    quiz = $('[data-quiz]')[_0x31db7e(0x1ce)](_0x31db7e(0x1a3));
const urlFormly = new URL(window[_0x31db7e(0x148)][_0x31db7e(0xe4)]);
let _params = $(_0x31db7e(0x8a))[_0x31db7e(0x1ce)](_0x31db7e(0x110)),
    logicExtra = $('[data-form=\x22multistep\x22]')[_0x31db7e(0x1ce)](_0x31db7e(0x12a)),
    oldSubmitText = $(_0x31db7e(0xb3))[_0x31db7e(0x85)](),
    oldResetText = $(_0x31db7e(0x1b3))[_0x31db7e(0x1f1)](),
    formReset = $(_0x31db7e(0x19f))[_0x31db7e(0x1ce)](_0x31db7e(0x178)),
    resetDelay = $('[data-reset-delay]')[_0x31db7e(0x1ce)](_0x31db7e(0xc5)) ? $(_0x31db7e(0x1e0))[_0x31db7e(0x1ce)]('reset-delay') : 0x7d0,
    redirectDelay = $('[data-redirect-delay]')[_0x31db7e(0x1ce)](_0x31db7e(0x15e)) ? $('[data-redirect-delay]')[_0x31db7e(0x1ce)]('redirect-delay') : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')[_0x31db7e(0x1ce)](_0x31db7e(0x116)),
    scrollToTop = $(_0x31db7e(0x19f))[_0x31db7e(0x1ce)](_0x31db7e(0x190)),
    trackLastStep = $('[data-last-step]')['data']('last-step'),
    conditionalResult = $(_0x31db7e(0x83))[_0x31db7e(0x1ce)](_0x31db7e(0x8f)) === _0x31db7e(0x142),
    scrollTopOffset = parseInt($('[data-form=\x22multistep\x22]')[_0x31db7e(0x1ce)](_0x31db7e(0x80)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x31db7e(0xcd)](localStorage[_0x31db7e(0x1d6)](_0x31db7e(0x71))), formlyLastStep = JSON[_0x31db7e(0xcd)](localStorage['getItem'](_0x31db7e(0x19e))), formlyLastStepAnswer = JSON[_0x31db7e(0xcd)](localStorage[_0x31db7e(0x1d6)](_0x31db7e(0xcc)));
let paramUrl = $('[data-form=\x22multistep\x22]')[_0x31db7e(0x1ce)](_0x31db7e(0x1f5));
const progressiveTarget = $(_0x31db7e(0x19f))[_0x31db7e(0x159)](_0x31db7e(0x1e6)),
    progressiveInput = $(_0x31db7e(0x19f))[_0x31db7e(0x159)](_0x31db7e(0x18e)),
    multiSelections = $(_0x31db7e(0x19f))[_0x31db7e(0x1ce)](_0x31db7e(0x18a));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x31db7e(0x119))[_0x31db7e(0x170)](function() {
    const _0xc55572 = _0x31db7e;
    ogCloneArr[_0xc55572(0x99)]({ 'name': $(this)['data'](_0xc55572(0x19a)), 'element': $(this)[_0xc55572(0x19a)](!![]), 'display': $(_0xc55572(0x1ea) + $(this)['data'](_0xc55572(0x19a)) + '\x22]')['eq'](0x0)[_0xc55572(0x19a)](!![]) });
});
const setPageLoadTime = () => {
    const _0x56e60d = _0x31db7e;
    localStorage[_0x56e60d(0x9d)](_0x56e60d(0xf6), Date['now']()[_0x56e60d(0x1a4)]());
};
setPageLoadTime();
$(_0x31db7e(0x8d))[_0x31db7e(0x1ad)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x416583) { notRobot = !![]; }($(steps[x])[_0x31db7e(0x1ce)](_0x31db7e(0x111)) || $(steps[x])[_0x31db7e(0x159)]('.active-answer-card')[_0x31db7e(0x1ce)](_0x31db7e(0x111))) && (next = !![]);
$('[data-count-card]')[_0x31db7e(0x1ad)] > 0x0 && (countCard = $(_0x31db7e(0xa8))[_0x31db7e(0x1ce)](_0x31db7e(0x1bf)));
$('[data-text=\x22error-message\x22]')['hide'](), $(progressbarClone)[_0x31db7e(0x14b)](_0x31db7e(0x1ba)), $(_0x31db7e(0x145))[_0x31db7e(0xa4)]()[_0x31db7e(0x1d9)](), $(_0x31db7e(0xb3))['hide'](), $('[data-form-ms=\x22submit-btn\x22]')[_0x31db7e(0x1b7)](), steps['each'](function() {
    const _0x2c16d7 = _0x31db7e;
    $('[data-form=\x22progress\x22]')[_0x2c16d7(0x14a)](progressbarClone[_0x2c16d7(0x19a)](!![], !![]));
}), $(_0x31db7e(0x192))[_0x31db7e(0x1b7)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps['length'], $(_0x31db7e(0x1ca))['text'](totalSteps)) : ($(steps[x])[_0x31db7e(0x1ce)](_0x31db7e(0x111)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x31db7e(0x121))[_0x31db7e(0x1ad)], $('[data-text=\x22total-steps\x22]')['text'](totalSteps), $(_0x31db7e(0x114))[_0x31db7e(0x170)](function() {
    const _0x1f9572 = _0x31db7e;
    $($(_0x1f9572(0x186))[$(this)[_0x1f9572(0xca)]()])[_0x1f9572(0x1b7)]();
}));
progressbar = $(_0x31db7e(0x145))[_0x31db7e(0xa4)](), $(_0x31db7e(0x186))['on'](_0x31db7e(0x138), clickableIndicator), $('[data-text=\x22current-step\x22]')[_0x31db7e(0x1f1)](curStep), steps['hide'](), $(_0x31db7e(0x104))[_0x31db7e(0x1b7)](), $(_0x31db7e(0x150))[_0x31db7e(0x170)](function() {
    const _0x22023e = _0x31db7e;
    $(this)[_0x22023e(0x1c7)](_0x22023e(0xd3), _0x22023e(0xb1));
});

function getParams() {
    const _0x2dac35 = _0x31db7e;
    urlFormly['searchParams'][_0x2dac35(0xfb)](function(_0x11c9ca, _0x23be4d) {
        const _0x2aedd0 = _0x2dac35;
        searchQ[_0x2aedd0(0x99)]({ 'val': _0x11c9ca, 'key': _0x23be4d });
    });
}

function getSafe(_0x48de48, _0x32f4bc) { try { return _0x48de48(); } catch (_0x2c6f29) { return _0x32f4bc; } }

function phoneAutoFormat(_0xd7797f) {
    var _0x32a411 = '';
    return function(_0x5a209a) {
        const _0x54be00 = _0x29b7;
        var _0x39a787 = '',
            _0x2c3805 = _0x5a209a[_0x54be00(0x17d)](/\D/g, ''),
            _0x21c8b9 = 0x0,
            _0x475edc = 0x0;
        while (_0x21c8b9 < _0x2c3805['length'] && _0x475edc < _0xd7797f[_0x54be00(0x1ad)]) { _0xd7797f[_0x475edc] === 'x' ? (_0x39a787 += _0x2c3805[_0x21c8b9], _0x21c8b9++) : _0x39a787 += _0xd7797f[_0x475edc], _0x475edc++; }
        if (_0x5a209a[_0x54be00(0x1ad)] < _0x32a411[_0x54be00(0x1ad)]) {
            var _0x166f6b = _0xd7797f[_0x54be00(0xad)](_0x475edc);
            _0x39a787 += _0x166f6b[_0x54be00(0x17d)](/x/g, '');
        }
        return _0x32a411 = _0x39a787, _0x39a787;
    };
}

function validateURL(_0x3f5586) { const _0x171c51 = _0x31db7e; return urlPattern[_0x171c51(0x107)](_0x3f5586) ? !![] : ![]; }
quiz && steps[_0x31db7e(0x170)](function() {
    const _0x35374a = _0x31db7e;
    $(this)[_0x35374a(0xa4)]()[_0x35374a(0x1c7)](_0x35374a(0x7e), !![]), $(this)[_0x35374a(0xa4)]()[_0x35374a(0x1c7)](_0x35374a(0x1d2), 0xfa);
});

function disableBtn(_0x2f1e9b) {
    const _0x4bb5de = _0x31db7e;
    fill = ![], !customError && ($(_0x4bb5de(0x95))['css']({ 'opacity': _0x4bb5de(0x180), 'pointer-events': _0x4bb5de(0x1a6) }), $(_0x4bb5de(0x95))['addClass'](_0x4bb5de(0xa7)), $(_0x4bb5de(0xb3))['css']({ 'opacity': '0.4', 'pointer-events': _0x4bb5de(0x1a6) }), $('[data-form=\x22submit-btn\x22]')['addClass'](_0x4bb5de(0xa7)), $(_0x4bb5de(0x165))[_0x4bb5de(0x16f)]({ 'opacity': '0.4', 'pointer-events': _0x4bb5de(0x1a6) }), $(_0x4bb5de(0x165))[_0x4bb5de(0x13d)]('disabled'));
}

function enableBtn() {
    const _0x290722 = _0x31db7e;
    fill = !![], $(_0x290722(0x95))[_0x290722(0x16f)]({ 'pointer-events': 'auto', 'opacity': '1' }), $('[data-form=\x22next-btn\x22]')[_0x290722(0x14b)](_0x290722(0xa7)), $(_0x290722(0xb3))['css']({ 'pointer-events': _0x290722(0x12c), 'opacity': '1' }), $('[data-form=\x22submit-btn\x22]')[_0x290722(0x14b)](_0x290722(0xa7)), $(_0x290722(0x165))['css']({ 'pointer-events': _0x290722(0x12c), 'opacity': '1' }), $('[data-form-ms=\x22submit-btn\x22]')[_0x290722(0x14b)](_0x290722(0xa7));
}

function saveLastAnswer(_0x17f511) {
    const _0x55499a = _0x31db7e;
    localStorage[_0x55499a(0x1d1)](_0x55499a(0xcc)), localStorage[_0x55499a(0x9d)](_0x55499a(0xcc), JSON[_0x55499a(0x7d)](_0x17f511));
}

function saveFilledInput() {
    const _0x424951 = _0x31db7e;
    $('form[data-form=\x22multistep\x22]\x20:input')['not'](_0x424951(0xc6))[_0x424951(0x170)](function() {
        const _0xa1eb7f = _0x424951;
        $(this)[_0xa1eb7f(0x1c7)](_0xa1eb7f(0xd3)) === _0xa1eb7f(0x131) || $(this)['attr']('type') === _0xa1eb7f(0x7a) ? $(this)[_0xa1eb7f(0x1e4)](_0xa1eb7f(0xf0)) && (filledInput['some'](_0x1d88df => _0x1d88df[_0xa1eb7f(0x174)] === $(this)['attr']('name')) ? (filledInput = filledInput[_0xa1eb7f(0x18b)](_0x4594a2 => _0x4594a2['inputName'] !== $(this)[_0xa1eb7f(0x1c7)]('name')), $(this)[_0xa1eb7f(0x85)]() !== '' && filledInput[_0xa1eb7f(0x99)]({ 'inputName': $(this)['attr'](_0xa1eb7f(0xc4)), 'value': $(this)[_0xa1eb7f(0x85)]() })) : $(this)[_0xa1eb7f(0x85)]() !== '' && filledInput[_0xa1eb7f(0x99)]({ 'inputName': $(this)[_0xa1eb7f(0x1c7)](_0xa1eb7f(0xc4)), 'value': $(this)[_0xa1eb7f(0x85)]() })) : filledInput[_0xa1eb7f(0x179)](_0x542e3c => _0x542e3c['inputName'] === $(this)[_0xa1eb7f(0x1c7)](_0xa1eb7f(0xc4))) ? (filledInput = filledInput[_0xa1eb7f(0x18b)](_0xa84d2 => _0xa84d2[_0xa1eb7f(0x174)] !== $(this)[_0xa1eb7f(0x1c7)](_0xa1eb7f(0xc4))), $(this)[_0xa1eb7f(0x85)]() !== '' && filledInput[_0xa1eb7f(0x99)]({ 'inputName': $(this)['attr'](_0xa1eb7f(0xc4)), 'value': $(this)[_0xa1eb7f(0x85)]() })) : $(this)[_0xa1eb7f(0x85)]() !== '' && filledInput[_0xa1eb7f(0x99)]({ 'inputName': $(this)[_0xa1eb7f(0x1c7)]('name'), 'value': $(this)[_0xa1eb7f(0x85)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage['removeItem'](_0x424951(0x19e)), localStorage[_0x424951(0x9d)](_0x424951(0x19e), lastStep)), localStorage[_0x424951(0x1d1)](_0x424951(0x71)), localStorage['setItem'](_0x424951(0x71), JSON[_0x424951(0x7d)](filledInput));
}

function scrollTop() {
    const _0x1023ef = _0x31db7e;
    scrollToTop && $('html,\x20body')[_0x1023ef(0x122)]({ 'scrollTop': $('[data-form=\x22multistep\x22]')[_0x1023ef(0x98)]()['top'] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x2c2c39) {
    const _0x1501e2 = _0x31db7e;
    var _0x57c31b = window[_0x1501e2(0x148)][_0x1501e2(0xe4)],
        _0x321940 = new URLSearchParams(window[_0x1501e2(0x148)]['search']);
    _0x321940[_0x1501e2(0xf4)](_0x1501e2(0x146), _0x2c2c39);
    var _0x2c43ba = _0x57c31b[_0x1501e2(0x6c)]('?')[0x0] + '?' + _0x321940[_0x1501e2(0x1a4)]();
    window['history'][_0x1501e2(0x1af)]({}, '', _0x2c43ba);
}

function updateStep() {
    const _0x5ed440 = _0x31db7e;
    scrollTop(), skip = ![], $('[data-form=\x22custom-progress-indicator\x22]')[_0x5ed440(0x14b)](_0x5ed440(0xa7));
    $(_0x5ed440(0x1f7))['data'](_0x5ed440(0x1f3)) && (steps[_0x5ed440(0x159)](_0x5ed440(0xbf))[_0x5ed440(0x170)](function() {
        const _0x193072 = _0x5ed440;
        $($(_0x193072(0x82))[$(this)[_0x193072(0x158)](_0x193072(0x1a1))[_0x193072(0xca)]()]), $(this)[_0x193072(0x85)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x5ed440(0x103))[_0x5ed440(0x13d)](_0x5ed440(0xa7)) : $(_0x5ed440(0x103))[_0x5ed440(0x14b)]('disabled'));
    $(_0x5ed440(0x82))[_0x5ed440(0x14b)]('current'), $(_0x5ed440(0x82))[_0x5ed440(0x13d)](_0x5ed440(0xa7)), $($('[data-form=\x22custom-progress-indicator\x22]')[x])[_0x5ed440(0x13d)](_0x5ed440(0x1ba)), selection = selections[_0x5ed440(0x18b)](_0x290b41 => _0x290b41[_0x5ed440(0x146)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0]['skipTo']) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x5ed440(0x1d0))[_0x5ed440(0x1b7)](), steps[_0x5ed440(0x1b7)]();
    reinitIX === !![] && window[_0x5ed440(0x9f)][_0x5ed440(0x125)]();
    $(progressbar)['removeClass']('current');
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])['addClass'](_0x5ed440(0x1ba)) : !$(steps[i])[_0x5ed440(0x1ce)]('card') && $(progressbar[i])[_0x5ed440(0x13d)]('current'); }
    reinitIX === !![] ? (window['Webflow'] && window[_0x5ed440(0x9f)][_0x5ed440(0x102)](_0x5ed440(0x1be))[_0x5ed440(0x96)](), document[_0x5ed440(0x1ee)](new Event(_0x5ed440(0x11f))), $(steps[x])['show']()) : $(steps[x])[_0x5ed440(0x161)](_0x5ed440(0x137));
    $(_0x5ed440(0x134))[_0x5ed440(0x14b)](_0x5ed440(0x13b));
    x === 0x0 && !$(steps[x])[_0x5ed440(0x1ce)](_0x5ed440(0x111)) && ($(steps[x])[_0x5ed440(0x159)](_0x5ed440(0x1d0))['show'](), $(steps[x])[_0x5ed440(0x159)](_0x5ed440(0x1d0))[_0x5ed440(0x13d)]('active-answer-card'));
    selection['length'] > 0x0 ? ($(steps[x])[_0x5ed440(0x159)](_0x5ed440(0x77) + selection[0x0][_0x5ed440(0x1ae)] + '\x22]')[_0x5ed440(0x1c2)](), $(steps[x])['find']('[data-answer=\x22' + selection[0x0][_0x5ed440(0x1ae)] + '\x22]')[_0x5ed440(0x13d)]('active-answer-card')) : ($(steps[x])[_0x5ed440(0x159)]('[data-answer=\x22' + answer + '\x22]')[_0x5ed440(0x1c2)](), $(steps[x])[_0x5ed440(0x159)]('[data-answer=\x22' + answer + '\x22]')[_0x5ed440(0x13d)](_0x5ed440(0x13b)));
    if (x === 0x0) $('[data-form=\x22back-btn\x22]')[_0x5ed440(0x1b7)](), $('[data-form=\x22next-btn\x22]')[_0x5ed440(0x1c2)](), $(_0x5ed440(0xb3))[_0x5ed440(0x1b7)]();
    else {
        if (x === steps[_0x5ed440(0x1ad)] - 0x1 || $(steps[x])[_0x5ed440(0x159)](_0x5ed440(0x1fb))[_0x5ed440(0x1ad)] > 0x0) {
            $('[data-form=\x22next-btn\x22]')[_0x5ed440(0x1b7)]();
            if ($(steps[x])[_0x5ed440(0x159)](_0x5ed440(0xdf))['data'](_0x5ed440(0x1a7))) $(steps[x])[_0x5ed440(0x159)](_0x5ed440(0xdf))[_0x5ed440(0x1c2)]();
            else $(_0x5ed440(0x95))['data'](_0x5ed440(0x1a7)) && $(_0x5ed440(0x95))[_0x5ed440(0x1c2)]();
            $('[data-form=\x22submit-btn\x22]')[_0x5ed440(0x1c2)](), $(_0x5ed440(0x165))[_0x5ed440(0x1c2)](), $(_0x5ed440(0x140))[_0x5ed440(0x1c2)]();
        } else $(_0x5ed440(0x95))['show'](), $(_0x5ed440(0x140))[_0x5ed440(0x1c2)](), $('[data-form=\x22submit-btn\x22]')[_0x5ed440(0x1b7)](), $(_0x5ed440(0x165))[_0x5ed440(0x1b7)]();
    }
    $($(steps[x])[_0x5ed440(0x159)](_0x5ed440(0x1c6))[0x0])[_0x5ed440(0x163)](), $($(steps[x])['find']('textarea[autofocus]')[0x0])[_0x5ed440(0x163)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x5ed440(0x82))[idx])[_0x5ed440(0x14b)]('disabled'); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x352481, _0x1d5eee, _0x4e1375) {
    const _0x492ee9 = _0x31db7e;
    let _0xd1af50 = _0x352481[_0x492ee9(0x1d7)]('@') ? _0x352481['split']('@')[0x1]['split']('.')[0x0] : [];
    dom = [];
    _0x1d5eee !== undefined && _0x1d5eee[_0x492ee9(0x6c)](',')[_0x492ee9(0xfb)](function(_0x4264d0) {
        const _0x11a5e1 = _0x492ee9;
        _0x4264d0[_0x11a5e1(0x1d7)](_0xd1af50) && dom[_0x11a5e1(0x99)](_0xd1af50);
    });
    dom[_0x492ee9(0x1ad)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x16ddfe = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x16ddfe[_0x492ee9(0x107)](_0x352481) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x492ee9(0x99)]({ 'input': _0x4e1375 })) : emailFilled = !![];
}

function phoneValidation(_0x3c2caa, _0x4bdc65, _0x1dda67) {
    if (phoneFormat) return _0x4bdc65 >= _0x1dda67 ? !![] : ![];
    else { if (_0x4bdc65 >= _0x1dda67) return !![]; }
}

function validation() {
    const _0x1b18b4 = _0x31db7e;
    $(steps[x])['data']('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])['find']('textarea[required]:visible')[_0x1b18b4(0x1ad)], textInputLength = $(steps[x])['find']('input[type=\x22text\x22][required]:visible')[_0x1b18b4(0x1ad)], selectInputLength = $(steps[x])['find'](_0x1b18b4(0x123))['length'], emailInputLength = $(steps[x])['find'](_0x1b18b4(0x1d5))[_0x1b18b4(0x1ad)], checkboxInputLength = $(steps[x])['find'](_0x1b18b4(0x1cd))[_0x1b18b4(0x1ad)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x1b18b4(0x1ce)](_0x1b18b4(0x131)) ? $(steps[x])['data'](_0x1b18b4(0x131)) : $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x1da))[_0x1b18b4(0x1ad)] > 0x0 ? $(steps[x])[_0x1b18b4(0x159)]('[data-checkbox]')[_0x1b18b4(0x1ce)](_0x1b18b4(0x131)) : 0x0, maxCheckCount = $(steps[x])[_0x1b18b4(0x1ce)](_0x1b18b4(0x7f)) ? $(steps[x])[_0x1b18b4(0x1ce)](_0x1b18b4(0x7f)) : $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x1b9))['length'] > 0x0 ? $(steps[x])['find']('[data-max-checkbox]')['data'](_0x1b18b4(0x7f)) : 0x0;
    if (!logicExtra) {
        let _0x20f51f = $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0xb2)),
            _0x2d1e53 = _0x20f51f[_0x1b18b4(0x18b)]('[required]'),
            _0x17f867 = _0x20f51f[_0x1b18b4(0x18b)](_0x1b18b4(0xf7));
        if (_0x20f51f[_0x1b18b4(0x1ad)] > 0x0) {
            if (checkCount === '*' || checkCount > _0x20f51f[_0x1b18b4(0x1ad)]) _0x20f51f[_0x1b18b4(0x170)](function() {
                const _0x1b35ba = _0x1b18b4;
                $(this)['is'](':checked') ? (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x1b35ba(0x1c7)](_0x1b35ba(0xc4)))) : (checkboxFilled = ![], unfilledArr[_0x1b35ba(0x99)]({ 'input': $(this)['attr'](_0x1b35ba(0xc4)) }));
            });
            else {
                if (_0x17f867[_0x1b18b4(0x1ad)] >= checkCount) {
                    if (_0x2d1e53[_0x1b18b4(0x1ad)] > 0x0) _0x2d1e53['length'] === _0x17f867['length'] ? (checkboxFilled = !![], resetInputErrorMessage(_0x2d1e53[_0x1b18b4(0x1ef)]()[_0x1b18b4(0x1c7)](_0x1b18b4(0xc4)))) : (checkboxFilled = ![], _0x2d1e53[_0x1b18b4(0x1e3)](_0x1b18b4(0xf7))[_0x1b18b4(0x170)](function() {
                        const _0x44f347 = _0x1b18b4;
                        unfilledArr[_0x44f347(0x99)]({ 'input': $(this)['attr'](_0x44f347(0xc4)) });
                    }));
                    else {}
                } else checkboxFilled = ![], _0x2d1e53[_0x1b18b4(0x1e3)](_0x1b18b4(0xf7))[_0x1b18b4(0x170)](function() {
                    const _0x37e334 = _0x1b18b4;
                    unfilledArr[_0x37e334(0x99)]({ 'input': $(this)[_0x37e334(0x1c7)](_0x37e334(0xc4)) });
                }), unfilledArr[_0x1b18b4(0x99)]({ 'input': _0x20f51f[_0x1b18b4(0x1ef)]()[_0x1b18b4(0x1c7)](_0x1b18b4(0xc4)) });
            }
        }
        $(steps[x])['find']('input:radio[required]')[_0x1b18b4(0x170)](function(_0x44c41e) {
            const _0x4118fa = _0x1b18b4;
            var _0x5b8037 = $(this)[_0x4118fa(0x1c7)](_0x4118fa(0xc4));
            $('input:radio[name=\x22' + _0x5b8037 + '\x22]:checked')[_0x4118fa(0x1ad)] == 0x0 ? (!empReqRadio[_0x4118fa(0x159)](_0x3c8cae => _0x3c8cae[_0x4118fa(0x152)] === _0x44c41e) && empReqRadio[_0x4118fa(0x99)]({ 'input': _0x44c41e }), unfilledArr[_0x4118fa(0x99)]({ 'input': $(this)[_0x4118fa(0x1c7)](_0x4118fa(0xc4)) })) : empReqRadio = empReqRadio['filter'](_0x2713a7 => _0x2713a7[_0x4118fa(0x152)] !== _0x44c41e), empReqRadio[_0x4118fa(0x1ad)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x109))[_0x1b18b4(0x170)](function(_0x1fdccc) {
            const _0x247694 = _0x1b18b4;
            let _0x5db7e8 = $(this)[_0x247694(0x85)]()[_0x247694(0x1ad)],
                _0x5d64f5 = $(this)[_0x247694(0x1ce)](_0x247694(0x177)) ? $(this)[_0x247694(0x1ce)]('min-character') : 0x0;
            $(this)[_0x247694(0x85)]() !== '' && _0x5db7e8 >= _0x5d64f5 ? empReqInput = empReqInput[_0x247694(0x18b)](_0x2ed1a3 => _0x2ed1a3[_0x247694(0x152)] !== _0x1fdccc) : (!empReqInput[_0x247694(0x159)](_0x38ec28 => _0x38ec28['input'] === _0x1fdccc) && empReqInput[_0x247694(0x99)]({ 'input': _0x1fdccc }), unfilledArr['push']({ 'input': $(this)[_0x247694(0x1c7)](_0x247694(0xc4)) })), empReqInput['length'] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](':input[type=\x22password\x22][required]')['each'](function(_0xc632d6) {
            const _0x24dc43 = _0x1b18b4;
            let _0x1f0a18 = $(this)[_0x24dc43(0x85)]()[_0x24dc43(0x1ad)],
                _0x366f05 = $(this)[_0x24dc43(0x1ce)](_0x24dc43(0x177)) ? $(this)[_0x24dc43(0x1ce)]('min-character') : 0x0;
            $(this)[_0x24dc43(0x85)]() !== '' && _0x1f0a18 >= _0x366f05 ? empReqPassword = empReqPassword[_0x24dc43(0x18b)](_0x449c95 => _0x449c95['input'] !== _0xc632d6) : (!empReqPassword[_0x24dc43(0x159)](_0x535449 => _0x535449['input'] === _0xc632d6) && empReqPassword[_0x24dc43(0x99)]({ 'input': _0xc632d6 }), unfilledArr['push']({ 'input': $(this)[_0x24dc43(0x1c7)](_0x24dc43(0xc4)) })), empReqPassword[_0x24dc43(0x1ad)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x1e8))[_0x1b18b4(0x170)](function(_0x191110) {
            const _0x12f4aa = _0x1b18b4;
            let _0x4d9799 = $(this)[_0x12f4aa(0x85)]()[_0x12f4aa(0x1ad)],
                _0x17d4ab = $(this)[_0x12f4aa(0x1ce)](_0x12f4aa(0x177)) ? $(this)['data']('min-character') : 0x0;
            $(this)[_0x12f4aa(0x85)]() !== '' && _0x4d9799 >= _0x17d4ab ? empReqUrl = empReqUrl[_0x12f4aa(0x18b)](_0x541447 => _0x541447['input'] !== _0x191110) : (!empReqTime[_0x12f4aa(0x159)](_0x5492ec => _0x5492ec[_0x12f4aa(0x152)] === _0x191110) && empReqUrl[_0x12f4aa(0x99)]({ 'input': _0x191110 }), unfilledArr['push']({ 'input': $(this)[_0x12f4aa(0x1c7)](_0x12f4aa(0xc4)) })), empReqUrl['length'] === 0x0 && validateURL($(this)[_0x12f4aa(0x85)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x11c))['each'](function(_0x517e76) {
            const _0x20cd38 = _0x1b18b4;
            let _0x2e529a = $(this)['val']()['length'],
                _0x188f3b = $(this)[_0x20cd38(0x1ce)](_0x20cd38(0x177)) ? $(this)[_0x20cd38(0x1ce)](_0x20cd38(0x177)) : 0x0;
            $(this)[_0x20cd38(0x85)]() !== '' && _0x2e529a >= _0x188f3b ? empReqTime = empReqTime[_0x20cd38(0x18b)](_0x480085 => _0x480085[_0x20cd38(0x152)] !== _0x517e76) : (!empReqTime[_0x20cd38(0x159)](_0x4640b1 => _0x4640b1['input'] === _0x517e76) && empReqTime[_0x20cd38(0x99)]({ 'input': _0x517e76 }), unfilledArr['push']({ 'input': $(this)[_0x20cd38(0x1c7)]('name') })), empReqTime[_0x20cd38(0x1ad)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find'](_0x1b18b4(0x113))['each'](function(_0x340db) {
            const _0x1e1cfe = _0x1b18b4;
            $(this)[_0x1e1cfe(0x85)]() !== '' ? empReqDate = empReqDate['filter'](_0x53abce => _0x53abce['input'] !== _0x340db) : (!empReqDate[_0x1e1cfe(0x159)](_0x2ff04b => _0x2ff04b[_0x1e1cfe(0x152)] === _0x340db) && empReqDate[_0x1e1cfe(0x99)]({ 'input': _0x340db }), unfilledArr[_0x1e1cfe(0x99)]({ 'input': $(this)[_0x1e1cfe(0x1c7)](_0x1e1cfe(0xc4)) })), empReqDate[_0x1e1cfe(0x1ad)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x6d))[_0x1b18b4(0x170)](function(_0x3afde4) {
            const _0x6bb1a5 = _0x1b18b4;
            if ($(this)[_0x6bb1a5(0x85)]() !== '') {
                let _0xfe00e9 = $(this)['val']()['length'],
                    _0x3fbac3 = $(this)[_0x6bb1a5(0x1ce)](_0x6bb1a5(0x177)) ? $(this)[_0x6bb1a5(0x1ce)](_0x6bb1a5(0x177)) : 0x0;
                if ($(this)[_0x6bb1a5(0x1ce)]('phone-autoformat')) {
                    var _0x53e9c5 = phoneAutoFormat($(this)['data'](_0x6bb1a5(0xc0)));
                    $(this)['val'](_0x53e9c5($(this)['val']()));
                }
                phoneValidation($(this)['val'](), _0xfe00e9, _0x3fbac3) ? empReqTel = empReqTel[_0x6bb1a5(0x18b)](_0x534073 => _0x534073['input'] !== _0x3afde4) : empReqTel[_0x6bb1a5(0x99)]({ 'input': _0x3afde4 });
            } else !empReqTel[_0x6bb1a5(0x159)](_0x4694c4 => _0x4694c4[_0x6bb1a5(0x152)] === _0x3afde4) && empReqTel[_0x6bb1a5(0x99)]({ 'input': _0x3afde4 }), unfilledArr[_0x6bb1a5(0x99)]({ 'input': $(this)[_0x6bb1a5(0x1c7)](_0x6bb1a5(0xc4)) });
            empReqTel[_0x6bb1a5(0x1ad)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x1ed))['each'](function(_0x47e646) {
            const _0x372b9e = _0x1b18b4;
            $(this)[_0x372b9e(0x85)]() !== '' ? empReqFile = empReqFile[_0x372b9e(0x18b)](_0x2aaaa2 => _0x2aaaa2[_0x372b9e(0x152)] !== _0x47e646) : (!empReqFile['find'](_0x1451ef => _0x1451ef['input'] === _0x47e646) && empReqFile['push']({ 'input': _0x47e646 }), unfilledArr[_0x372b9e(0x99)]({ 'input': $(this)[_0x372b9e(0x1c7)](_0x372b9e(0xc4)) })), empReqFile[_0x372b9e(0x1ad)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x12f))[_0x1b18b4(0x170)](function(_0x6f0353) {
            const _0x2099fb = _0x1b18b4;
            let _0x4a2f03 = $(this)[_0x2099fb(0x85)]()[_0x2099fb(0x1ad)],
                _0xaa9be6 = $(this)[_0x2099fb(0x1ce)]('min-character') ? $(this)[_0x2099fb(0x1ce)](_0x2099fb(0x177)) : 0x0;
            $(this)[_0x2099fb(0x85)]() !== '' && _0x4a2f03 >= _0xaa9be6 ? empReqNum = empReqNum[_0x2099fb(0x18b)](_0x119102 => _0x119102[_0x2099fb(0x152)] !== _0x6f0353) : (!empReqNum[_0x2099fb(0x159)](_0x836308 => _0x836308['input'] === _0x6f0353) && empReqNum[_0x2099fb(0x99)]({ 'input': _0x6f0353 }), unfilledArr['push']({ 'input': $(this)[_0x2099fb(0x1c7)](_0x2099fb(0xc4)) })), empReqNum[_0x2099fb(0x1ad)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x1d4))[_0x1b18b4(0x170)](function(_0xd97e71) {
            const _0x93719a = _0x1b18b4;
            let _0x805a90 = $(this)['val']();
            _0x805a90 === '' && (_0x805a90 = null), _0x805a90 != null ? empReqSelect = empReqSelect['filter'](_0x173e7e => _0x173e7e[_0x93719a(0x152)] !== _0xd97e71) : (!empReqSelect[_0x93719a(0x159)](_0x3fcbf4 => _0x3fcbf4[_0x93719a(0x152)] === _0xd97e71) && empReqSelect[_0x93719a(0x99)]({ 'input': _0xd97e71 }), unfilledArr[_0x93719a(0x99)]({ 'input': $(this)[_0x93719a(0x1c7)](_0x93719a(0xc4)) })), empReqSelect['length'] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)]('textarea[required]')[_0x1b18b4(0x170)](function(_0x274275) {
            const _0xb6708 = _0x1b18b4;
            let _0x1eab0d = $(this)[_0xb6708(0x85)]()[_0xb6708(0x1ad)],
                _0x3bba7e = $(this)[_0xb6708(0x1ce)](_0xb6708(0x177)) ? $(this)[_0xb6708(0x1ce)](_0xb6708(0x177)) : 0x0;
            $(this)['val']() !== '' && _0x1eab0d >= _0x3bba7e ? empReqTextarea = empReqTextarea['filter'](_0x617f2c => _0x617f2c[_0xb6708(0x152)] !== _0x274275) : (!empReqTextarea[_0xb6708(0x159)](_0x195c72 => _0x195c72['input'] === _0x274275) && empReqTextarea[_0xb6708(0x99)]({ 'input': _0x274275 }), unfilledArr[_0xb6708(0x99)]({ 'input': $(this)[_0xb6708(0x1c7)](_0xb6708(0xc4)) })), empReqTextarea[_0xb6708(0x1ad)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x18d))[_0x1b18b4(0x170)](function() {
            const _0x4aa3fc = _0x1b18b4;
            $(this)[_0x4aa3fc(0x85)]() !== '' ? validateEmail($(this)[_0x4aa3fc(0x85)](), $(this)['data'](_0x4aa3fc(0xee)), $(this)[_0x4aa3fc(0x1c7)](_0x4aa3fc(0xc4))) : (emailFilled = ![], unfilledArr[_0x4aa3fc(0x99)]({ 'input': $(this)[_0x4aa3fc(0x1c7)](_0x4aa3fc(0xc4)) }));
        });
    } else {
        if ($(steps[x])['data'](_0x1b18b4(0x111))) answer = $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x92))[_0x1b18b4(0x1ce)](_0x1b18b4(0xfc)), selections = selections[_0x1b18b4(0x18b)](_0x1c2de8 => _0x1c2de8[_0x1b18b4(0x146)] !== x), selections['push']({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])['find']('.active-answer-card')[_0x1b18b4(0x1ce)]('card') && (answer = $(steps[x])['find']('.active-answer-card')[_0x1b18b4(0x1ce)](_0x1b18b4(0xfc)), selections = selections[_0x1b18b4(0x18b)](_0x44172c => _0x44172c[_0x1b18b4(0x146)] !== x), selections[_0x1b18b4(0x99)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0xdc))['is'](_0x1b18b4(0x115))) {
            if (checkCount === '*' || checkCount > $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0xb2))['length']) $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0xb2))['each'](function() {
                const _0x1ec35e = _0x1b18b4;
                if ($(this)['is'](':checked')) {
                    if ($(steps[x])[_0x1ec35e(0x159)](_0x1ec35e(0xbf))[_0x1ec35e(0x1ad)] < 0x1) {
                        let _0x271717 = undefined;
                        $(this)[_0x1ec35e(0x158)]('[data-skip-to]')[_0x1ec35e(0x1ce)]('skip-to') && (_0x271717 = $(this)['parents'](_0x1ec35e(0xe9))['data'](_0x1ec35e(0xa5)));
                        if ($(this)[_0x1ec35e(0x158)]('[data-go-to]')[_0x1ec35e(0x1c7)](_0x1ec35e(0x16c))) {
                            let _0x35c14d = $(this)[_0x1ec35e(0x158)](_0x1ec35e(0x92))[_0x1ec35e(0x1c7)]('data-go-to');
                            selections = selections[_0x1ec35e(0x18b)](_0xccf05b => _0xccf05b[_0x1ec35e(0x146)] !== x), selections[_0x1ec35e(0x99)]({ 'step': x, 'selected': _0x35c14d });
                            if (_0x271717) {
                                selections = selections['filter'](_0x47bd02 => _0x47bd02['step'] !== _0x271717 - 0x2), selections['push']({ 'step': _0x271717 - 0x2, 'selected': _0x35c14d });
                                let _0x46cda0 = selections[_0x1ec35e(0xe6)](_0x1716bb => _0x1716bb[_0x1ec35e(0x146)] === x);
                                selections[_0x46cda0]['skipTo'] = parseInt(_0x271717) - 0x1, selections[_0x46cda0][_0x1ec35e(0x1cb)] = x;
                            }
                        }
                        checkboxFilled = !![], $(steps[x])[_0x1ec35e(0x159)](_0x1ec35e(0xd0))[_0x1ec35e(0x1ad)] >= $(steps[x])[_0x1ec35e(0x159)](_0x1ec35e(0x100))[_0x1ec35e(0x1ad)] && resetInputErrorMessage($(steps[x])['find'](':input[type=\x22checkbox\x22]')[_0x1ec35e(0x1c7)]('name'));
                    }
                } else checkboxFilled = ![], unfilledArr[_0x1ec35e(0x99)]({ 'input': $(this)[_0x1ec35e(0x1c7)]('name') });
            });
            else {
                if ($(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x128))['length'] >= checkCount) {
                    if ($(steps[x])['find']('.active-answer-card')['find'](':input[type=\x22checkbox\x22]')[_0x1b18b4(0x158)](_0x1b18b4(0x92))['attr'](_0x1b18b4(0x16c))) {
                        let _0x2de68e = undefined;
                        $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))['find'](':input[type=\x22checkbox\x22]')[_0x1b18b4(0x158)](_0x1b18b4(0xe9))[_0x1b18b4(0x1c7)]('data-skip-to') && (_0x2de68e = $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](':input[type=\x22checkbox\x22]:checked')[_0x1b18b4(0x158)](_0x1b18b4(0xe9))['attr'](_0x1b18b4(0xaf)));
                        let _0x4ccf9e = $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))['find'](_0x1b18b4(0xb2))[_0x1b18b4(0x158)]('[data-go-to]')['attr']('data-go-to');
                        selections = selections['filter'](_0x542290 => _0x542290['step'] !== x), selections[_0x1b18b4(0x99)]({ 'step': x, 'selected': _0x4ccf9e });
                        if (_0x2de68e) {
                            selections = selections[_0x1b18b4(0x18b)](_0x4917df => _0x4917df[_0x1b18b4(0x146)] !== _0x2de68e - 0x2), selections['push']({ 'step': _0x2de68e - 0x2, 'selected': _0x4ccf9e });
                            let _0x57cabc = selections['findIndex'](_0xe08ad5 => _0xe08ad5[_0x1b18b4(0x146)] === x);
                            selections[_0x57cabc][_0x1b18b4(0x19c)] = parseInt(_0x2de68e) - 0x1, selections[_0x57cabc][_0x1b18b4(0x1cb)] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])['find'](_0x1b18b4(0xd0))[_0x1b18b4(0x1ad)] >= $(steps[x])[_0x1b18b4(0x159)](':input[type=\x22checkbox\x22][required]')[_0x1b18b4(0x1ad)] && resetInputErrorMessage($(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0xb2))['attr'](_0x1b18b4(0xc4)));
                } else checkboxFilled = ![], $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x100))[_0x1b18b4(0x170)](function() {
                    const _0x463977 = _0x1b18b4;
                    $(this)['not'](_0x463977(0xf7)) && unfilledArr['push']({ 'input': $(this)[_0x463977(0x1c7)](_0x463977(0xc4)) });
                });
            }
        }
        $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))['find']('input:radio[required]')['each'](function(_0x1a2564) {
            const _0x428860 = _0x1b18b4;
            var _0x54cd8d = $(this)[_0x428860(0x1c7)](_0x428860(0xc4));
            $(_0x428860(0x1a8) + _0x54cd8d + '\x22]:checked')[_0x428860(0x1ad)] == 0x0 ? (!empReqRadio['find'](_0x3a3e9c => _0x3a3e9c[_0x428860(0x152)] === _0x1a2564) && empReqRadio[_0x428860(0x99)]({ 'input': _0x1a2564 }), unfilledArr[_0x428860(0x99)]({ 'input': $(this)['attr'](_0x428860(0xc4)) })) : empReqRadio = empReqRadio['filter'](_0x132343 => _0x132343['input'] !== _0x1a2564), empReqRadio['length'] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](':input[type=\x22text\x22][required]')['each'](function(_0x2b6343) {
            const _0x4f7fa6 = _0x1b18b4;
            let _0x7f7238 = $(this)['val']()[_0x4f7fa6(0x1ad)],
                _0x1468e8 = $(this)[_0x4f7fa6(0x1ce)](_0x4f7fa6(0x177)) ? $(this)[_0x4f7fa6(0x1ce)](_0x4f7fa6(0x177)) : 0x0;
            $(this)['val']() !== '' && _0x7f7238 >= _0x1468e8 ? empReqInput = empReqInput[_0x4f7fa6(0x18b)](_0x321022 => _0x321022[_0x4f7fa6(0x152)] !== _0x2b6343) : (!empReqInput[_0x4f7fa6(0x159)](_0x5834af => _0x5834af[_0x4f7fa6(0x152)] === _0x2b6343) && empReqInput[_0x4f7fa6(0x99)]({ 'input': _0x2b6343 }), unfilledArr[_0x4f7fa6(0x99)]({ 'input': $(this)['attr'](_0x4f7fa6(0xc4)) })), empReqInput[_0x4f7fa6(0x1ad)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)]('.active-answer-card')[_0x1b18b4(0x159)](_0x1b18b4(0x1b4))[_0x1b18b4(0x170)](function(_0x484a26) {
            const _0x571d51 = _0x1b18b4;
            skipTo = undefined, $(this)[_0x571d51(0x158)](_0x571d51(0xe9))[_0x571d51(0x1ce)]('skip-to') !== '' && (skipTo = $(this)[_0x571d51(0x158)]('[data-skip-to]')[_0x571d51(0x1ce)](_0x571d51(0xa5))), $(this)[_0x571d51(0x158)]('[data-go-to]')[_0x571d51(0x1c7)](_0x571d51(0x16c)) && (answer = $(this)[_0x571d51(0x158)](_0x571d51(0x92))[_0x571d51(0x1c7)]('data-go-to'), selections = selections[_0x571d51(0x18b)](_0x5c2d21 => _0x5c2d21[_0x571d51(0x146)] !== x), selections[_0x571d51(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x571d51(0x18b)](_0x87d9ee => _0x87d9ee[_0x571d51(0x146)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x571d51(0xe6)](_0x47d541 => _0x47d541[_0x571d51(0x146)] === x), selections[objIndex][_0x571d51(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x571d51(0x1cb)] = x));
        }), $(steps[x])['find']('.active-answer-card')[_0x1b18b4(0x159)](_0x1b18b4(0xae))[_0x1b18b4(0x170)](function(_0x3a9f3b) {
            const _0x3bcf48 = _0x1b18b4;
            let _0x947baf = $(this)['val']()[_0x3bcf48(0x1ad)],
                _0x28ffd5 = $(this)['data'](_0x3bcf48(0x177)) ? $(this)[_0x3bcf48(0x1ce)](_0x3bcf48(0x177)) : 0x0;
            $(this)['val']() !== '' && _0x947baf >= _0x28ffd5 ? empReqPassword = empReqPassword['filter'](_0x847a04 => _0x847a04[_0x3bcf48(0x152)] !== _0x3a9f3b) : (!empReqPassword[_0x3bcf48(0x159)](_0x22216a => _0x22216a[_0x3bcf48(0x152)] === _0x3a9f3b) && empReqPassword[_0x3bcf48(0x99)]({ 'input': _0x3a9f3b }), unfilledArr[_0x3bcf48(0x99)]({ 'input': $(this)[_0x3bcf48(0x1c7)]('name') })), empReqPassword[_0x3bcf48(0x1ad)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x11b))[_0x1b18b4(0x170)](function(_0x24c7c0) {
            const _0x3f465a = _0x1b18b4;
            skipTo = undefined, $(this)['parents'](_0x3f465a(0xe9))['data'](_0x3f465a(0xa5)) !== '' && (skipTo = $(this)[_0x3f465a(0x158)]('[data-skip-to]')[_0x3f465a(0x1ce)](_0x3f465a(0xa5))), $(this)[_0x3f465a(0x158)]('[data-go-to]')[_0x3f465a(0x1c7)](_0x3f465a(0x16c)) && (answer = $(this)[_0x3f465a(0x158)]('[data-go-to]')[_0x3f465a(0x1c7)]('data-go-to'), selections = selections[_0x3f465a(0x18b)](_0x7af09f => _0x7af09f[_0x3f465a(0x146)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3f465a(0x18b)](_0x2fc06a => _0x2fc06a['step'] !== skipTo - 0x2), selections[_0x3f465a(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3f465a(0xe6)](_0x21bc9b => _0x21bc9b[_0x3f465a(0x146)] === x), selections[objIndex][_0x3f465a(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3f465a(0x1cb)] = x));
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x1e8))[_0x1b18b4(0x170)](function(_0x2d0e83) {
            const _0x1bbd32 = _0x1b18b4;
            let _0x34646b = $(this)[_0x1bbd32(0x85)]()[_0x1bbd32(0x1ad)],
                _0x4568cd = $(this)[_0x1bbd32(0x1ce)](_0x1bbd32(0x177)) ? $(this)[_0x1bbd32(0x1ce)](_0x1bbd32(0x177)) : 0x0;
            $(this)['val']() !== '' && _0x34646b >= _0x4568cd ? empReqUrl = empReqUrl['filter'](_0x22fc84 => _0x22fc84['input'] !== _0x2d0e83) : (!empReqUrl[_0x1bbd32(0x159)](_0x3f1924 => _0x3f1924['input'] === _0x2d0e83) && empReqUrl[_0x1bbd32(0x99)]({ 'input': _0x2d0e83 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x1bbd32(0xc4)) })), empReqUrl[_0x1bbd32(0x1ad)] === 0x0 && validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)]('.active-answer-card')['find'](':input[type=\x22url\x22]')[_0x1b18b4(0x170)](function(_0x1e5ba6) {
            const _0x5520f8 = _0x1b18b4;
            skipTo = undefined, $(this)[_0x5520f8(0x158)](_0x5520f8(0xe9))[_0x5520f8(0x1ce)](_0x5520f8(0xa5)) !== '' && (skipTo = $(this)[_0x5520f8(0x158)](_0x5520f8(0xe9))['data']('skip-to')), $(this)[_0x5520f8(0x158)](_0x5520f8(0x92))[_0x5520f8(0x1c7)](_0x5520f8(0x16c)) && (answer = $(this)[_0x5520f8(0x158)](_0x5520f8(0x92))['attr'](_0x5520f8(0x16c)), selections = selections[_0x5520f8(0x18b)](_0x54462d => _0x54462d[_0x5520f8(0x146)] !== x), selections[_0x5520f8(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5520f8(0x18b)](_0x35562d => _0x35562d[_0x5520f8(0x146)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5520f8(0xe6)](_0x482a79 => _0x482a79[_0x5520f8(0x146)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x113))[_0x1b18b4(0x170)](function(_0x3e71c1) {
            const _0x51009c = _0x1b18b4;
            $(this)[_0x51009c(0x85)]() !== '' ? empReqDate = empReqDate[_0x51009c(0x18b)](_0x58a0ab => _0x58a0ab[_0x51009c(0x152)] !== _0x3e71c1) : (!empReqDate[_0x51009c(0x159)](_0x198b67 => _0x198b67[_0x51009c(0x152)] === _0x3e71c1) && empReqDate[_0x51009c(0x99)]({ 'input': _0x3e71c1 }), unfilledArr['push']({ 'input': $(this)['attr']('name') })), empReqDate[_0x51009c(0x1ad)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](':input[type=\x22date\x22]')['each'](function(_0x371201) {
            const _0x3070ed = _0x1b18b4;
            skipTo = undefined, $(this)[_0x3070ed(0x158)](_0x3070ed(0xe9))['data']('skip-to') !== '' && (skipTo = $(this)[_0x3070ed(0x158)](_0x3070ed(0xe9))[_0x3070ed(0x1ce)](_0x3070ed(0xa5))), $(this)['parents'](_0x3070ed(0x92))[_0x3070ed(0x1c7)]('data-go-to') && (answer = $(this)[_0x3070ed(0x158)](_0x3070ed(0x92))['attr'](_0x3070ed(0x16c)), selections = selections[_0x3070ed(0x18b)](_0x9f0c0b => _0x9f0c0b['step'] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3070ed(0x18b)](_0x397dcd => _0x397dcd[_0x3070ed(0x146)] !== skipTo - 0x2), selections[_0x3070ed(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3070ed(0xe6)](_0x354200 => _0x354200[_0x3070ed(0x146)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3070ed(0x1cb)] = x));
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x11c))[_0x1b18b4(0x170)](function(_0x29422b) {
            const _0x23f530 = _0x1b18b4;
            $(this)[_0x23f530(0x85)]() !== '' ? empReqTime = empReqTime[_0x23f530(0x18b)](_0x4bb44d => _0x4bb44d[_0x23f530(0x152)] !== _0x29422b) : (!empReqTime[_0x23f530(0x159)](_0x1bede6 => _0x1bede6[_0x23f530(0x152)] === _0x29422b) && empReqTime[_0x23f530(0x99)]({ 'input': _0x29422b }), unfilledArr['push']({ 'input': $(this)[_0x23f530(0x1c7)](_0x23f530(0xc4)) })), empReqTime['length'] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))['find'](':input[type=\x22time\x22]')[_0x1b18b4(0x170)](function(_0x5b4f53) {
            const _0x12edd7 = _0x1b18b4;
            skipTo = undefined, $(this)['parents'](_0x12edd7(0xe9))[_0x12edd7(0x1ce)](_0x12edd7(0xa5)) !== '' && (skipTo = $(this)[_0x12edd7(0x158)](_0x12edd7(0xe9))['data'](_0x12edd7(0xa5))), $(this)['parents'](_0x12edd7(0x92))['attr']('data-go-to') && (answer = $(this)['parents'](_0x12edd7(0x92))[_0x12edd7(0x1c7)]('data-go-to'), selections = selections[_0x12edd7(0x18b)](_0x53bfca => _0x53bfca[_0x12edd7(0x146)] !== x), selections[_0x12edd7(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x12edd7(0x18b)](_0xa99c7e => _0xa99c7e[_0x12edd7(0x146)] !== skipTo - 0x2), selections[_0x12edd7(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x12edd7(0xe6)](_0x30d773 => _0x30d773[_0x12edd7(0x146)] === x), selections[objIndex][_0x12edd7(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x12edd7(0x1cb)] = x));
        }), $(steps[x])[_0x1b18b4(0x159)]('.active-answer-card')['find'](':input[type=\x22number\x22][required]')['each'](function(_0x2fbfc9) {
            const _0x3b13ae = _0x1b18b4;
            let _0x1f25ec = $(this)[_0x3b13ae(0x85)]()[_0x3b13ae(0x1ad)],
                _0x5dba37 = $(this)[_0x3b13ae(0x1ce)]('min-character') ? $(this)[_0x3b13ae(0x1ce)](_0x3b13ae(0x177)) : 0x0;
            $(this)[_0x3b13ae(0x85)]() !== '' && _0x1f25ec >= _0x5dba37 ? empReqNum = empReqNum[_0x3b13ae(0x18b)](_0x402e56 => _0x402e56[_0x3b13ae(0x152)] !== _0x2fbfc9) : (!empReqNum[_0x3b13ae(0x159)](_0x12e548 => _0x12e548[_0x3b13ae(0x152)] === _0x2fbfc9) && empReqNum[_0x3b13ae(0x99)]({ 'input': _0x2fbfc9 }), unfilledArr[_0x3b13ae(0x99)]({ 'input': $(this)[_0x3b13ae(0x1c7)](_0x3b13ae(0xc4)) })), empReqNum[_0x3b13ae(0x1ad)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x124))[_0x1b18b4(0x170)](function(_0xcf7021) {
            const _0x3d9bb2 = _0x1b18b4;
            skipTo = undefined, $(this)[_0x3d9bb2(0x158)](_0x3d9bb2(0xe9))[_0x3d9bb2(0x1ce)](_0x3d9bb2(0xa5)) !== '' && (skipTo = $(this)[_0x3d9bb2(0x158)](_0x3d9bb2(0xe9))[_0x3d9bb2(0x1ce)](_0x3d9bb2(0xa5))), $(this)[_0x3d9bb2(0x158)](_0x3d9bb2(0x92))[_0x3d9bb2(0x1c7)](_0x3d9bb2(0x16c)) && (answer = $(this)[_0x3d9bb2(0x158)]('[data-go-to]')[_0x3d9bb2(0x1c7)](_0x3d9bb2(0x16c)), selections = selections['filter'](_0x3e7285 => _0x3e7285[_0x3d9bb2(0x146)] !== x), selections[_0x3d9bb2(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x55d943 => _0x55d943[_0x3d9bb2(0x146)] !== skipTo - 0x2), selections[_0x3d9bb2(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3d9bb2(0xe6)](_0x4d947c => _0x4d947c['step'] === x), selections[objIndex][_0x3d9bb2(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3d9bb2(0x1cb)] = x));
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x6d))[_0x1b18b4(0x170)](function(_0xdfac50) {
            const _0x5a1fcd = _0x1b18b4;
            if ($(this)[_0x5a1fcd(0x85)]() !== '') {
                let _0xcc018e = $(this)[_0x5a1fcd(0x85)]()[_0x5a1fcd(0x1ad)],
                    _0x1f47db = $(this)[_0x5a1fcd(0x1ce)](_0x5a1fcd(0x177)) ? $(this)[_0x5a1fcd(0x1ce)](_0x5a1fcd(0x177)) : 0x0;
                if ($(this)[_0x5a1fcd(0x1ce)](_0x5a1fcd(0xc0))) {
                    var _0x4a857a = phoneAutoFormat($(this)[_0x5a1fcd(0x1ce)](_0x5a1fcd(0xc0)));
                    $(this)[_0x5a1fcd(0x85)](_0x4a857a($(this)[_0x5a1fcd(0x85)]()));
                }
                phoneValidation($(this)[_0x5a1fcd(0x85)](), _0xcc018e, _0x1f47db) ? empReqTel = empReqTel['filter'](_0x513099 => _0x513099['input'] !== _0xdfac50) : empReqTel[_0x5a1fcd(0x99)]({ 'input': _0xdfac50 });
            } else !empReqTel[_0x5a1fcd(0x159)](_0xd44a18 => _0xd44a18['input'] === _0xdfac50) && empReqTel['push']({ 'input': _0xdfac50 }), unfilledArr['push']({ 'input': $(this)[_0x5a1fcd(0x1c7)](_0x5a1fcd(0xc4)) });
            empReqTel[_0x5a1fcd(0x1ad)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x162))[_0x1b18b4(0x170)](function(_0x3d8b4e) {
            const _0x1aa54d = _0x1b18b4;
            skipTo = undefined, $(this)[_0x1aa54d(0x158)](_0x1aa54d(0xe9))[_0x1aa54d(0x1ce)](_0x1aa54d(0xa5)) !== '' && (skipTo = $(this)[_0x1aa54d(0x158)]('[data-skip-to]')[_0x1aa54d(0x1ce)](_0x1aa54d(0xa5))), $(this)['parents'](_0x1aa54d(0x92))[_0x1aa54d(0x1c7)](_0x1aa54d(0x16c)) && (answer = $(this)[_0x1aa54d(0x158)](_0x1aa54d(0x92))[_0x1aa54d(0x1c7)](_0x1aa54d(0x16c)), selections = selections[_0x1aa54d(0x18b)](_0x1df42b => _0x1df42b[_0x1aa54d(0x146)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1aa54d(0x18b)](_0x51fc4f => _0x51fc4f[_0x1aa54d(0x146)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1aa54d(0xe6)](_0x409ec6 => _0x409ec6[_0x1aa54d(0x146)] === x), selections[objIndex][_0x1aa54d(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x1b18b4(0x159)]('.active-answer-card')[_0x1b18b4(0x159)](_0x1b18b4(0x1ed))['each'](function(_0xcc995d) {
            const _0x34ff2b = _0x1b18b4;
            $(this)['val']() !== '' ? empReqFile = empReqFile[_0x34ff2b(0x18b)](_0x2c6d5a => _0x2c6d5a[_0x34ff2b(0x152)] !== _0xcc995d) : (!empReqFile['find'](_0x16d026 => _0x16d026[_0x34ff2b(0x152)] === _0xcc995d) && empReqFile[_0x34ff2b(0x99)]({ 'input': _0xcc995d }), unfilledArr[_0x34ff2b(0x99)]({ 'input': $(this)['attr'](_0x34ff2b(0xc4)) })), empReqFile[_0x34ff2b(0x1ad)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))['find'](_0x1b18b4(0x89))['each'](function(_0x189065) {
            const _0x7111f2 = _0x1b18b4;
            skipTo = undefined, $(this)[_0x7111f2(0x158)]('[data-skip-to]')[_0x7111f2(0x1ce)](_0x7111f2(0xa5)) !== '' && (skipTo = $(this)['parents'](_0x7111f2(0xe9))[_0x7111f2(0x1ce)](_0x7111f2(0xa5))), $(this)[_0x7111f2(0x158)]('[data-go-to]')[_0x7111f2(0x1c7)](_0x7111f2(0x16c)) && (answer = $(this)['parents'](_0x7111f2(0x92))[_0x7111f2(0x1c7)]('data-go-to'), selections = selections[_0x7111f2(0x18b)](_0x5584b6 => _0x5584b6[_0x7111f2(0x146)] !== x), selections[_0x7111f2(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x7111f2(0x18b)](_0x4e94c0 => _0x4e94c0['step'] !== skipTo - 0x2), selections[_0x7111f2(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x7111f2(0xe6)](_0x1abac0 => _0x1abac0[_0x7111f2(0x146)] === x), selections[objIndex][_0x7111f2(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x7111f2(0x1cb)] = x));
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x1d4))[_0x1b18b4(0x170)](function(_0x5b609f) {
            const _0x410eb1 = _0x1b18b4;
            $(this)['val']() !== null && $(this)[_0x410eb1(0x85)]() !== '' ? empReqSelect = empReqSelect['filter'](_0x1c9f76 => _0x1c9f76['input'] !== _0x5b609f) : (!empReqSelect[_0x410eb1(0x159)](_0x43e323 => _0x43e323['input'] === _0x5b609f) && empReqSelect[_0x410eb1(0x99)]({ 'input': _0x5b609f }), unfilledArr['push']({ 'input': $(this)[_0x410eb1(0x1c7)](_0x410eb1(0xc4)) })), empReqSelect[_0x410eb1(0x1ad)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)]('.active-answer-card')[_0x1b18b4(0x159)](_0x1b18b4(0x17b))[_0x1b18b4(0x170)](function(_0x44bd58) {
            const _0x456256 = _0x1b18b4;
            skipTo = undefined, $(this)['parents'](_0x456256(0xe9))[_0x456256(0x1ce)](_0x456256(0xa5)) !== '' && (skipTo = $(this)[_0x456256(0x158)](_0x456256(0xe9))['data']('skip-to')), $(this)[_0x456256(0x158)](_0x456256(0x92))[_0x456256(0x1c7)](_0x456256(0x16c)) && (answer = $(this)[_0x456256(0x158)](_0x456256(0x92))[_0x456256(0x1c7)](_0x456256(0x16c)), selections = selections[_0x456256(0x18b)](_0x54431c => _0x54431c[_0x456256(0x146)] !== x), selections[_0x456256(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x176836 => _0x176836['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x456256(0xe6)](_0x343873 => _0x343873[_0x456256(0x146)] === x), selections[objIndex][_0x456256(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x456256(0x1cb)] = x));
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x173))[_0x1b18b4(0x170)](function(_0xab8f2e) {
            const _0x251102 = _0x1b18b4;
            let _0x36f637 = $(this)[_0x251102(0x85)]()[_0x251102(0x1ad)],
                _0x401e07 = $(this)[_0x251102(0x1ce)]('min-character') ? $(this)[_0x251102(0x1ce)](_0x251102(0x177)) : 0x0;
            $(this)[_0x251102(0x85)]() !== '' && _0x36f637 >= _0x401e07 ? empReqTextarea = empReqTextarea[_0x251102(0x18b)](_0x934460 => _0x934460[_0x251102(0x152)] !== _0xab8f2e) : (!empReqTextarea[_0x251102(0x159)](_0x3274c8 => _0x3274c8[_0x251102(0x152)] === _0xab8f2e) && empReqTextarea[_0x251102(0x99)]({ 'input': _0xab8f2e }), unfilledArr['push']({ 'input': $(this)[_0x251102(0x1c7)](_0x251102(0xc4)) })), empReqTextarea[_0x251102(0x1ad)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))['find']('textarea')[_0x1b18b4(0x170)](function(_0xce3cbc) {
            const _0x583bc1 = _0x1b18b4;
            skipTo = undefined, $(this)['parents'](_0x583bc1(0xe9))[_0x583bc1(0x1ce)](_0x583bc1(0xa5)) !== '' && (skipTo = $(this)[_0x583bc1(0x158)](_0x583bc1(0xe9))[_0x583bc1(0x1ce)](_0x583bc1(0xa5))), $(this)['parents']('[data-go-to]')['attr'](_0x583bc1(0x16c)) && (answer = $(this)['parents'](_0x583bc1(0x92))['attr'](_0x583bc1(0x16c)), selections = selections['filter'](_0x74dfe7 => _0x74dfe7[_0x583bc1(0x146)] !== x), selections[_0x583bc1(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x583bc1(0x18b)](_0x1a8924 => _0x1a8924[_0x583bc1(0x146)] !== skipTo - 0x2), selections[_0x583bc1(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x583bc1(0xe6)](_0xeac74d => _0xeac74d[_0x583bc1(0x146)] === x), selections[objIndex][_0x583bc1(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x583bc1(0x1cb)] = x));
        }), $(steps[x])['find'](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x18d))[_0x1b18b4(0x170)](function(_0x4daab2) {
            const _0x364509 = _0x1b18b4;
            $(this)[_0x364509(0x85)]() !== '' ? validateEmail($(this)[_0x364509(0x85)](), $(this)[_0x364509(0x1ce)](_0x364509(0xee)), $(this)[_0x364509(0x1c7)](_0x364509(0xc4))) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x364509(0x1c7)](_0x364509(0xc4)) }));
        }), $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x15a))[_0x1b18b4(0x170)](function(_0x5b0c6f) {
            const _0x500e73 = _0x1b18b4;
            skipTo = undefined, $(this)[_0x500e73(0x158)](_0x500e73(0xe9))[_0x500e73(0x1ce)]('skip-to') !== '' && (skipTo = $(this)['parents'](_0x500e73(0xe9))['data'](_0x500e73(0xa5))), $(this)[_0x500e73(0x158)]('[data-go-to]')[_0x500e73(0x1c7)](_0x500e73(0x16c)) && (answer = $(this)['parents'](_0x500e73(0x92))[_0x500e73(0x1c7)](_0x500e73(0x16c)), selections = selections['filter'](_0x384578 => _0x384578[_0x500e73(0x146)] !== x), console[_0x500e73(0x184)](_0x500e73(0x11d), selections, x), selections[_0x500e73(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x1ecf35 => _0x1ecf35[_0x500e73(0x146)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x500e73(0xe6)](_0x124485 => _0x124485[_0x500e73(0x146)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x500e73(0x1cb)] = x));
        });
    }
    $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x1a9))['is'](_0x1b18b4(0xf7)) && (selArr = [], $(steps)['find'](_0x1b18b4(0x182))[_0x1b18b4(0x170)](function(_0x1aef0e, _0x1fb05f) {
        const _0x6d916c = _0x1b18b4;
        selArr[_0x6d916c(0x99)]({ 'selected': $(this)['data'](_0x6d916c(0x1ae)) });
    }), selString = [], selArr[_0x1b18b4(0xfb)](_0x51cac4 => selString[_0x1b18b4(0x99)](_0x51cac4['selected'])), $(steps[x])['find'](_0x1b18b4(0x134))[_0x1b18b4(0x159)](':input[type=\x27radio\x27]:checked')[_0x1b18b4(0x170)](function() {
        const _0x8cb418 = _0x1b18b4;
        skipTo = undefined;
        if ($(this)[_0x8cb418(0x158)]('[data-skip-to]')[_0x8cb418(0x1ce)](_0x8cb418(0xa5))) skipTo = $(this)['parents']('[data-skip-to]')[_0x8cb418(0x1ce)](_0x8cb418(0xa5));
        else $(this)[_0x8cb418(0x1ce)](_0x8cb418(0xa5)) && (skipTo = $(this)[_0x8cb418(0x1ce)](_0x8cb418(0xa5)));
        selections = selections['filter'](_0x271e8e => _0x271e8e[_0x8cb418(0x146)] !== x);
        if ($(this)[_0x8cb418(0x1ce)]('go-to')) answer = $(this)['attr'](_0x8cb418(0x16c)), selections[_0x8cb418(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x8cb418(0x18b)](_0xed1e72 => _0xed1e72[_0x8cb418(0x146)] !== skipTo - 0x2), selections[_0x8cb418(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x8cb418(0xe6)](_0x1d302a => _0x1d302a[_0x8cb418(0x146)] === x), selections[objIndex][_0x8cb418(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x8cb418(0x1cb)] = x);
        else $(this)[_0x8cb418(0x158)](_0x8cb418(0x92))[_0x8cb418(0x1ce)](_0x8cb418(0xfc)) && (answer = $(this)[_0x8cb418(0x158)](_0x8cb418(0x92))[_0x8cb418(0x1ce)](_0x8cb418(0xfc)), selections[_0x8cb418(0x99)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x10c861 => _0x10c861['step'] !== skipTo - 0x2), selections[_0x8cb418(0x99)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x22a49b => _0x22a49b[_0x8cb418(0x146)] === x), selections[objIndex][_0x8cb418(0x19c)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x8cb418(0x1cb)] = x));
    }), logicExtra ? ($(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x134))[_0x1b18b4(0x159)](_0x1b18b4(0x1ac))[_0x1b18b4(0x1ce)]('radio-skip') === !![] || $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0xb8))['data']('radio-skip') === !![]) && (skip && selections['filter'](_0x49c2a0 => _0x49c2a0[_0x1b18b4(0x146)] === x)[_0x1b18b4(0x1ad)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x187))[_0x1b18b4(0x1ce)]('radio-delay')))) : $(steps[x])[_0x1b18b4(0x159)](_0x1b18b4(0x1ac))[_0x1b18b4(0x1ce)]('radio-skip') === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find'](_0x1b18b4(0x187))[_0x1b18b4(0x1ce)]('radio-delay'))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x22e4d1 = _0x31db7e;
    $(_0x22e4d1(0xea))[_0x22e4d1(0x1b7)](), unfilledArr[_0x22e4d1(0x1ad)] > 0x0 && unfilledArr[_0x22e4d1(0xfb)](function(_0x49e786) {
        const _0x1085c9 = _0x22e4d1;
        $(_0x1085c9(0x1e9) + _0x49e786[_0x1085c9(0x152)] + '\x22]')['siblings'](_0x1085c9(0xea))['fadeIn'](), $('input[name=\x22' + _0x49e786['input'] + '\x22]')[_0x1085c9(0x158)]()[_0x1085c9(0xa4)](_0x1085c9(0xea))[_0x1085c9(0x161)](), $(_0x1085c9(0x171) + _0x49e786[_0x1085c9(0x152)] + '\x22]')[_0x1085c9(0x101)]('[data-text=\x22error-message\x22]')[_0x1085c9(0x161)](), $(_0x1085c9(0x194) + _0x49e786[_0x1085c9(0x152)] + '\x22]')[_0x1085c9(0x101)](_0x1085c9(0xea))[_0x1085c9(0x161)]();
    });
}

function _0x29b7(_0xd6f6fe, _0x27d974) { const _0x1fdd55 = _0x1fdd(); return _0x29b7 = function(_0x29b7f1, _0x242ffa) { _0x29b7f1 = _0x29b7f1 - 0x6a; let _0x44d03f = _0x1fdd55[_0x29b7f1]; return _0x44d03f; }, _0x29b7(_0xd6f6fe, _0x27d974); }

function resetInputErrorMessage(_0x444df9) {
    const _0x481cc5 = _0x31db7e;
    $(_0x481cc5(0x1e9) + _0x444df9 + '\x22]')[_0x481cc5(0x101)](_0x481cc5(0xea))['hide'](), $(_0x481cc5(0x1e9) + _0x444df9 + '\x22]')[_0x481cc5(0x158)]()[_0x481cc5(0xa4)](_0x481cc5(0xea))[_0x481cc5(0x1b7)](), $('textarea[name=\x22' + _0x444df9 + '\x22]')[_0x481cc5(0x101)](_0x481cc5(0xea))[_0x481cc5(0x1b7)](), $('select[name=\x22' + _0x444df9 + '\x22]')[_0x481cc5(0x101)](_0x481cc5(0xea))['hide']();
}

function increaseCurstep() {
    const _0x255f73 = _0x31db7e;
    countCard ? (curStep = curStep + 0x1, $('[data-text=\x22total-steps\x22]')[_0x255f73(0x1f1)](steps[_0x255f73(0x1ad)])) : $(steps[x])[_0x255f73(0x1ce)](_0x255f73(0x111)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0x255f73(0x167))['text'](curStep);
}

function decreaseCurstep() {
    const _0x56f21f = _0x31db7e;
    countCard ? (curStep = curStep - 0x1, $('[data-text=\x22total-steps\x22]')['text'](steps[_0x56f21f(0x1ad)])) : $(steps[x])[_0x56f21f(0x1ce)]('card') ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $(_0x56f21f(0x167))['text'](curStep);
}
$('[data-form=\x22submit-btn\x22]')['on'](_0x31db7e(0x138), function(_0x56e55d) {
    const _0x16a3e3 = _0x31db7e;
    $(this)[_0x16a3e3(0x1ce)](_0x16a3e3(0xba)) && (redirectTo = $(this)[_0x16a3e3(0x1ce)](_0x16a3e3(0xba)));
    !$(this)[_0x16a3e3(0x1ce)]('new-tab') && (newTab = $(this)[_0x16a3e3(0x1ce)]('new-tab'));
    successCard = $(this)['data'](_0x16a3e3(0xac)), _0x56e55d[_0x16a3e3(0x9e)](), _0x56e55d[_0x16a3e3(0x18c)]();
    const _0x588e6b = new URLSearchParams(window[_0x16a3e3(0x148)][_0x16a3e3(0x13a)]),
        _0x200c03 = (_0x1de84a, _0x30990a) => {
            const _0x1eec43 = _0x16a3e3,
                _0x5089ba = document[_0x1eec43(0x9c)](_0x1eec43(0xdb) + _0x1de84a + '\x22]');
            _0x5089ba && (_0x5089ba[_0x1eec43(0xec)] = _0x30990a);
        };
    _0x200c03('referrer', _0x588e6b[_0x16a3e3(0x1c0)]('referrer') || document[_0x16a3e3(0xdd)] || _0x16a3e3(0xef)), _0x200c03(_0x16a3e3(0x1d3), navigator[_0x16a3e3(0x16d)]), _0x200c03(_0x16a3e3(0x75), new Date()[_0x16a3e3(0x8e)]()), _0x200c03(_0x16a3e3(0xa3), Intl['DateTimeFormat']()['resolvedOptions']()[_0x16a3e3(0x94)]), _0x200c03('screen-resolution', window[_0x16a3e3(0x15c)][_0x16a3e3(0x18f)] + 'x' + window[_0x16a3e3(0x15c)][_0x16a3e3(0x14c)]), _0x200c03(_0x16a3e3(0x1ec), _0x16a3e3(0x1b5));
    const _0xecfcd1 = () => {
        const _0x18497c = _0x16a3e3,
            _0x241ba0 = document[_0x18497c(0x9c)]('[data-hidden-input=\x22page-visit-duration\x22]');
        if (_0x241ba0) {
            const _0x20fc8e = localStorage[_0x18497c(0x1d6)](_0x18497c(0xf6));
            console[_0x18497c(0x184)](_0x20fc8e);
            if (_0x20fc8e) {
                const _0xd8f3f = Math[_0x18497c(0xe1)]((Date['now']() - parseInt(_0x20fc8e)) / 0x3e8);
                _0x241ba0[_0x18497c(0xec)] = _0xd8f3f + '\x20seconds';
            } else _0x241ba0[_0x18497c(0xec)] = _0x18497c(0x1b5);
        }
    };
    _0xecfcd1(), logicExtra && ($(this)[_0x16a3e3(0x1e4)](_0x16a3e3(0x108), !![]), $(steps)[_0x16a3e3(0x159)](':input')[_0x16a3e3(0x1e4)](_0x16a3e3(0x1df), ![])), localStorage[_0x16a3e3(0x1d1)](_0x16a3e3(0x71)), localStorage[_0x16a3e3(0x1d1)](_0x16a3e3(0xf6)), fill ? ($(this)[_0x16a3e3(0x1ce)](_0x16a3e3(0x73)) ? (console[_0x16a3e3(0x184)]($(this)['data'](_0x16a3e3(0x73))), $(this)[_0x16a3e3(0x1f1)]($(this)[_0x16a3e3(0x1ce)](_0x16a3e3(0x73)))) : $(this)[_0x16a3e3(0x85)](_0x16a3e3(0x74))[_0x16a3e3(0x1f1)](_0x16a3e3(0x74)), $(_0x16a3e3(0x19f))[_0x16a3e3(0x1bd)](), $(_0x16a3e3(0x8d))[_0x16a3e3(0x1ad)] > 0x0 && (grecaptcha[_0x16a3e3(0x86)]()[_0x16a3e3(0x1ad)] === 0x0 && (form[_0x16a3e3(0x159)](_0x16a3e3(0xb3))['text'](oldSubmitText), form[_0x16a3e3(0x159)](_0x16a3e3(0xb3))[_0x16a3e3(0x85)](oldSubmitText))), customError && $(_0x16a3e3(0xea))['hide']()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x39c87a = _0x31db7e;
    customError ? ($('[data-text=\x22error-message\x22]')[_0x39c87a(0x1b7)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps[_0x39c87a(0x1ad)] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0x39c87a(0x1ad)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x59ae8c = _0x31db7e;
    customError && $(_0x59ae8c(0xea))['hide'](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])['removeClass'](_0x59ae8c(0x1ba)), selections[_0x59ae8c(0x18b)](_0x4fc4a1 => _0x4fc4a1['skipTo'] === x)[_0x59ae8c(0x1ad)] > 0x0 ? x = parseInt(getSafe(() => selections[_0x59ae8c(0x18b)](_0x206f3b => _0x206f3b[_0x59ae8c(0x19c)] === x)[0x0]['backTo'])) : x--, updateStep()), ($(steps[x])[_0x59ae8c(0x159)](_0x59ae8c(0x1ac))[_0x59ae8c(0x1ce)](_0x59ae8c(0x1b8)) === !![] || $(steps[x])[_0x59ae8c(0x159)]('.active-answer-card')[_0x59ae8c(0x159)]('[data-radio-skip]:visible')['data'](_0x59ae8c(0x1b8)) === !![] || $(steps[x])['find'](_0x59ae8c(0xb8))[_0x59ae8c(0x1ce)](_0x59ae8c(0x1b8)) === !![]) && (all_data = all_data[_0x59ae8c(0x18b)](_0x4fc25f => _0x4fc25f[_0x59ae8c(0x1f2)] !== $(steps[x])[_0x59ae8c(0x159)]('input[type=\x22radio\x22]:checked')['attr'](_0x59ae8c(0xc4))), $('[data-input-field=\x22' + $(steps[x])[_0x59ae8c(0x159)](_0x59ae8c(0xed))[_0x59ae8c(0x1c7)](_0x59ae8c(0xc4)) + '\x22]')[_0x59ae8c(0x1b7)](), $(steps[x])[_0x59ae8c(0x159)](_0x59ae8c(0xd6))[_0x59ae8c(0x1e4)]('checked', ![]), $(steps[x])[_0x59ae8c(0x159)]('.w-form-formradioinput')['removeClass'](_0x59ae8c(0x1c3)), validation());
}
weightedSelectionRange && $(_0x31db7e(0x11e))[_0x31db7e(0x170)](function() {
    const _0x2c732c = _0x31db7e;
    $(this)[_0x2c732c(0x14a)]('<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(this)[_0x2c732c(0x1ce)](_0x2c732c(0x14f)) + _0x2c732c(0x120));
});

function selectionQuiz() {
    const _0x117afc = _0x31db7e;
    if ($(this)['find'](_0x117afc(0x10c))) {
        $('[data-selection]')[_0x117afc(0x1b7)](), $(_0x117afc(0xb9))['hide']();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x117afc(0xfb)](function(_0x3564bb) {
                const _0x57aaf8 = _0x117afc;
                selTotal = selTotal + _0x3564bb[_0x57aaf8(0x1ae)];
            }), $(_0x117afc(0x188))[_0x117afc(0x1f1)](selTotal);
            if ($(_0x117afc(0x1b1) + selTotal + '\x22]')[_0x117afc(0x1ad)] > 0x0) $('[data-selection=\x22' + selTotal + '\x22]')['fadeIn']();
            else $(_0x117afc(0x1b0) + selTotal + ')') ? $('[data-range]:contains(' + selTotal + ')')[_0x117afc(0x181)]('[data-selection]')['eq'](0x0)['show']() : $('[data-selection=\x22other\x22]')[_0x117afc(0x161)]();
        } else {
            let _0x536adf = -0x1,
                _0x50d88a = [];
            $(_0x117afc(0x11e))[_0x117afc(0x170)](function(_0x390080) {
                const _0x34fbfd = _0x117afc;
                $($(_0x34fbfd(0x11e))[_0x390080])[_0x34fbfd(0x1ce)](_0x34fbfd(0x14f))[_0x34fbfd(0x1d7)](selString[_0x34fbfd(0x7b)]()) && (_0x536adf = _0x390080, _0x50d88a[_0x34fbfd(0x99)](_0x390080));
            }), multiSelections ? _0x50d88a[_0x117afc(0x1ad)] > 0x0 ? _0x50d88a[_0x117afc(0xfb)](_0x3311b2 => {
                const _0x30c190 = _0x117afc;
                $($(_0x30c190(0x11e))[_0x3311b2])['fadeIn']();
            }) : $(_0x117afc(0xc1))['fadeIn']() : _0x536adf > -0x1 ? $($(_0x117afc(0x11e))[_0x536adf])[_0x117afc(0x161)]() : $('[data-selection=\x22other\x22]')[_0x117afc(0x161)]();
        }
    }
}

function triggerInputAllData() {
    if (savedFilledInput && memory) savedFilledInput['forEach'](_0xc0def => {
        const _0x20e4d1 = _0x29b7;
        var _0x4db01d = $('input[name=\x22' + _0xc0def[_0x20e4d1(0x174)] + _0x20e4d1(0x6f) + _0xc0def['value'] + _0x20e4d1(0x1b2)),
            _0x3659f4 = $('input[name=\x22' + _0xc0def[_0x20e4d1(0x174)] + '\x22]:not([data-prefill=\x22false\x22])'),
            _0xd5c964 = $('textarea[name=\x22' + _0xc0def[_0x20e4d1(0x174)] + _0x20e4d1(0x1b2)),
            _0x1e1cc8 = $('input[type=\x22checkbox\x22][name=\x22' + _0xc0def['inputName'] + '\x22]'),
            _0x40b66e = $(_0x20e4d1(0xbb) + _0xc0def[_0x20e4d1(0x174)] + '\x22][value=\x22' + _0xc0def['value'] + _0x20e4d1(0x1b2));
        if (_0x4db01d[_0x20e4d1(0x1c7)]('type') !== 'file') {
            if (_0x4db01d[_0x20e4d1(0x1c7)]('type') === _0x20e4d1(0x7a) && !_0x4db01d['parents'](_0x20e4d1(0x15f))[_0x20e4d1(0x1ce)]('radio-skip')) _0x4db01d['click'](), _0x4db01d[_0x20e4d1(0x101)](_0x20e4d1(0xb6))[_0x20e4d1(0x13d)](_0x20e4d1(0x1c3)), _0x4db01d[_0x20e4d1(0x153)](_0x20e4d1(0x152));
            else _0xc0def['value'] === 'on' ? (_0x3659f4[_0x20e4d1(0x138)](), _0x3659f4['siblings'](_0x20e4d1(0x16b))[_0x20e4d1(0x13d)](_0x20e4d1(0x1c3)), _0x3659f4[_0x20e4d1(0x153)](_0x20e4d1(0x152))) : (_0x3659f4[_0x20e4d1(0x85)](_0xc0def[_0x20e4d1(0xec)]), _0xd5c964[_0x20e4d1(0x85)](_0xc0def['value']), $(_0x20e4d1(0x175))[_0x20e4d1(0x159)]('option[value=\x22' + _0xc0def[_0x20e4d1(0xec)] + '\x22]')['prop']('selected', !![]), _0x3659f4[_0x20e4d1(0x153)](_0x20e4d1(0x152)), _0x3659f4[_0x20e4d1(0x153)](_0x20e4d1(0x1d8)));
            const _0x57fb10 = _0x40b66e['data'](_0x20e4d1(0x105)),
                _0x5ad1d3 = _0x1e1cc8[_0x20e4d1(0x1ce)](_0x20e4d1(0x105));
            _0x40b66e['parent']()['addClass'](_0x57fb10), _0x1e1cc8[_0x20e4d1(0x181)]()['addClass'](_0x5ad1d3);
        }
    });
    else _params && (getParams(), searchQ['forEach'](_0x338eea => {
        const _0x478778 = _0x29b7;
        if ($(_0x478778(0x1e9) + _0x338eea[_0x478778(0x174)] + _0x478778(0x6f) + _0x338eea['value'] + _0x478778(0x1b2))[_0x478778(0x1c7)](_0x478778(0xd3)) !== _0x478778(0x6b)) {
            if ($(_0x478778(0x1e9) + _0x338eea[_0x478778(0x1c9)] + _0x478778(0x6f) + _0x338eea[_0x478778(0x85)] + _0x478778(0x1b2))['attr'](_0x478778(0xd3)) === _0x478778(0x7a)) $(_0x478778(0x1e9) + _0x338eea[_0x478778(0x1c9)] + _0x478778(0x6f) + _0x338eea[_0x478778(0x85)] + _0x478778(0x1b2))[_0x478778(0x138)](), $('input[name=\x22' + _0x338eea[_0x478778(0x1c9)] + _0x478778(0x6f) + _0x338eea[_0x478778(0x85)] + _0x478778(0x1b2))[_0x478778(0x101)](_0x478778(0xb6))[_0x478778(0x13d)](_0x478778(0x1c3)), $(_0x478778(0x1e9) + _0x338eea[_0x478778(0x1c9)] + '\x22][value=\x22' + _0x338eea[_0x478778(0x85)] + _0x478778(0x1b2))[_0x478778(0x153)](_0x478778(0x152));
            else _0x338eea[_0x478778(0x85)] === 'on' ? ($('input[name=\x22' + _0x338eea[_0x478778(0x1c9)] + '\x22]:not([data-prefill=\x22false\x22])')['click'](), $(_0x478778(0x1e9) + _0x338eea[_0x478778(0x1c9)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x478778(0x101)](_0x478778(0x16b))[_0x478778(0x13d)](_0x478778(0x1c3)), $(_0x478778(0x1e9) + _0x338eea[_0x478778(0x1c9)] + '\x22]')['trigger'](_0x478778(0x152))) : ($(_0x478778(0x1e9) + _0x338eea[_0x478778(0x1c9)] + _0x478778(0x1b2))[_0x478778(0x85)](_0x338eea[_0x478778(0x85)]), $('textarea[name=\x22' + _0x338eea[_0x478778(0x1c9)] + _0x478778(0x1b2))[_0x478778(0x85)](_0x338eea['val']), $(_0x478778(0x194) + _0x338eea[_0x478778(0x1c9)] + '\x22]:not([data-prefill=\x22false\x22])')['find']('option[value=\x22' + _0x338eea[_0x478778(0x85)] + '\x22]')[_0x478778(0x1e4)](_0x478778(0x1ae), !![]), $(_0x478778(0x1e9) + _0x338eea[_0x478778(0x1c9)] + _0x478778(0x1b2))[_0x478778(0x153)]('input'), $('input[name=\x22' + _0x338eea[_0x478778(0x1c9)] + _0x478778(0x1b2))[_0x478778(0x153)]('change'));
        }
    }));
}
$(_0x31db7e(0x95))['on'](_0x31db7e(0x138), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $('[data-form=\x22back-btn\x22]')['on'](_0x31db7e(0x138), function() { next = ![], back = !![], backStep(); }), $(steps)['find'](_0x31db7e(0xdc))[_0x31db7e(0x1e3)](_0x31db7e(0x72))['on'](_0x31db7e(0x152), function(_0x417419) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x31db7e(0x159)](_0x31db7e(0xd6))['on'](_0x31db7e(0x138), function() { skip = !![], validation(), addClickClass(); });
$(_0x31db7e(0x1f9))['data']('clickable-all') ? $(_0x31db7e(0x82))[_0x31db7e(0x14b)](_0x31db7e(0xa7)) : $(_0x31db7e(0x82))['addClass'](_0x31db7e(0xa7));

function clickableIndicator() {
    const _0x1f6613 = _0x31db7e;
    $(_0x1f6613(0x1f7))[_0x1f6613(0x1ce)](_0x1f6613(0x1f3)) && ($(_0x1f6613(0x186))[_0x1f6613(0x14b)](_0x1f6613(0x1ba)), $(_0x1f6613(0x1f7))[_0x1f6613(0x1ce)](_0x1f6613(0x90)) ? (x = $(this)[_0x1f6613(0xca)](), updateStep()) : $(this)['index']() <= progress && (x = $(this)[_0x1f6613(0xca)](), updateStep())), $(_0x1f6613(0x167))[_0x1f6613(0x1f1)](x + 0x1);
}
$(_0x31db7e(0x82))['on'](_0x31db7e(0x138), clickableIndicator), excludeCount = !$(_0x31db7e(0x19f))['data'](_0x31db7e(0x1bf)), steps[_0x31db7e(0x170)](function(_0x2b94a7) {
    const _0x495e2e = _0x31db7e,
        _0x3ef86a = $(this)[_0x495e2e(0x1ce)](_0x495e2e(0x111));
    console[_0x495e2e(0x184)](excludeCount), _0x3ef86a && excludeCount && $(_0x495e2e(0x82))['eq'](_0x2b94a7)[_0x495e2e(0x1b7)]();
});
$('[data-form=\x22multistep\x22]')['data'](_0x31db7e(0x76)) && ($(_0x31db7e(0x92))[_0x31db7e(0x170)](function() {
    const _0x2a277a = _0x31db7e;
    $(this)['append'](_0x2a277a(0x185), $(this)[_0x2a277a(0x1ce)](_0x2a277a(0xfc)));
}), $(_0x31db7e(0x1d0))[_0x31db7e(0x170)](function() {
    const _0x3daef4 = _0x31db7e;
    $(this)[_0x3daef4(0x14a)]('<br>Data\x20Answer\x20=\x20', $(this)['data'](_0x3daef4(0x10b)));
}));

function resetFormly() {
    const _0x33a74f = _0x31db7e;
    $(_0x33a74f(0x19f))[_0x33a74f(0x153)](_0x33a74f(0x178)), $(_0x33a74f(0x19f))[_0x33a74f(0x158)]()['find'](_0x33a74f(0x191))[_0x33a74f(0x1b7)](), x = 0x0, updateStep(), $(_0x33a74f(0x19f))[_0x33a74f(0x1c2)](), $(_0x33a74f(0xb3))['text'](oldSubmitText), $(_0x33a74f(0xb3))[_0x33a74f(0x85)](oldSubmitText), $(_0x33a74f(0x167))[_0x33a74f(0x1f1)](0x1), $(_0x33a74f(0x19f))[_0x33a74f(0x159)]('input:checkbox')[_0x33a74f(0x101)]('.w-checkbox-input')[_0x33a74f(0x14b)]('w--redirected-checked');
}
$(document)[_0x31db7e(0x8b)](function(_0x28314a, _0x1a2557, _0x1a4168) {
    const _0x474a37 = _0x31db7e;
    if (_0x1a4168[_0x474a37(0x1f6)][_0x474a37(0x1d7)](_0x474a37(0x1e7))) {
        const _0x2f838d = _0x1a2557[_0x474a37(0x1c5)] === 0xc8,
            _0x40c7aa = 'redirect-form-hehexd';
        redirectTo && _0x2f838d && (newTab ? window[_0x474a37(0xff)](redirectTo, _0x474a37(0xc7)) : setTimeout(() => {
            const _0xabd720 = _0x474a37;
            location[_0xabd720(0xe4)] = redirectTo;
        }, redirectDelay)), _0x2f838d && successCard !== '' && $(_0x474a37(0x7c) + successCard + '\x22]')[_0x474a37(0x161)](), _0x2f838d && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x2f838d && ($('[data-form=\x22submit-btn\x22]')[_0x474a37(0x85)](_0x474a37(0x74)), $(_0x474a37(0xb3))[_0x474a37(0x1f1)](_0x474a37(0x74)));
    }
}), $('[data-btn=\x22edit\x22]')['on'](_0x31db7e(0x138), function() {
    const _0x2559d4 = _0x31db7e;
    var _0x26350c = $(this)['parent']()['find'](_0x2559d4(0x192))['data'](_0x2559d4(0x132));
    setTimeout(function() {
        const _0x562d2e = _0x2559d4;
        $(_0x562d2e(0x1e9) + _0x26350c + '\x22]')[_0x562d2e(0x163)]();
    }, 0x64), back = !![], x = $(this)[_0x2559d4(0x1ce)](_0x2559d4(0x164)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $('[data-text=\x22total-steps\x22]')['text'](steps[_0x2559d4(0x1ad)])) : $(steps[x])[_0x2559d4(0x1ce)](_0x2559d4(0x111)) ? curStep = x + 0x0 : curStep = x + 0x1, $('[data-text=\x22current-step\x22]')[_0x2559d4(0x1f1)](curStep), back = ![];
}), $(_0x31db7e(0x1b3))['on'](_0x31db7e(0x138), function() {
    const _0x3c410b = _0x31db7e;
    $(_0x3c410b(0x19f))[_0x3c410b(0x153)](_0x3c410b(0x178));
    let _0x482aaf = $(this);
    $(this)[_0x3c410b(0x1f1)](_0x3c410b(0x74)), setTimeout(function() {
        const _0x3dd4bb = _0x3c410b;
        $(_0x482aaf)[_0x3dd4bb(0x1f1)](oldResetText), $(_0x482aaf)['parents'](_0x3dd4bb(0x191))[_0x3dd4bb(0x1b7)](), x = 0x0, updateStep(), $(_0x3dd4bb(0x19f))[_0x3dd4bb(0x1c2)](), $(_0x3dd4bb(0xb3))[_0x3dd4bb(0x1f1)](oldSubmitText), $('[data-form=\x22submit-btn\x22]')[_0x3dd4bb(0x85)](oldSubmitText), $(_0x482aaf)['val'](oldSubmitText), $(_0x3dd4bb(0x167))[_0x3dd4bb(0x1f1)](0x1), $(_0x3dd4bb(0x19f))['find'](_0x3dd4bb(0xf9))[_0x3dd4bb(0x101)](_0x3dd4bb(0x16b))[_0x3dd4bb(0x14b)](_0x3dd4bb(0x1c3));
    }, resetDelay);
}), $('body')['on']('keypress', function(_0x5e7a8b) {
    const _0x1cc705 = _0x31db7e;
    if (_0x5e7a8b[_0x1cc705(0x154)] === 0xd) {
        _0x5e7a8b[_0x1cc705(0x9e)](), _0x5e7a8b[_0x1cc705(0x18c)]();
        if ($(steps[x])[_0x1cc705(0x159)](_0x1cc705(0x193))['is'](_0x1cc705(0xf5))) $(steps[x])[_0x1cc705(0x159)](_0x1cc705(0xa6))[_0x1cc705(0x85)]($(steps[x])[_0x1cc705(0x159)](_0x1cc705(0xa6))['val']() + '\x0a');
        else $('[data-enter]')['data'](_0x1cc705(0xfe)) && fill && (totalSteps > curStep && $(_0x1cc705(0x95))[0x0][_0x1cc705(0x138)]());
    }
}), $(_0x31db7e(0xd4))['keydown'](function(_0x302aa0) {
    const _0xafbe3a = _0x31db7e;
    (_0x302aa0['metaKey'] || _0x302aa0[_0xafbe3a(0x1db)]) && _0x302aa0[_0xafbe3a(0x154)] == 0xd && (x >= steps[_0xafbe3a(0x1ad)] - 0x1 && fill ? $(steps[x])[_0xafbe3a(0x159)]('[data-form=\x22submit-btn\x22]:visible')[_0xafbe3a(0x138)]() : (_0x302aa0[_0xafbe3a(0x9e)](), _0x302aa0[_0xafbe3a(0x18c)]()));
}), $('[data-form=\x22multistep\x22]')['find'](':input')['on'](_0x31db7e(0x1d8), function() {
    const _0x103a29 = _0x31db7e;
    all_data = all_data[_0x103a29(0x18b)](_0x2e26ae => _0x2e26ae[_0x103a29(0x1f2)] !== $(this)['attr']('name')), $(this)[_0x103a29(0x1c7)](_0x103a29(0xd3)) === _0x103a29(0x131) ? $(this)['is'](_0x103a29(0xf7)) ? all_data['push']({ 'field': $(this)['attr'](_0x103a29(0xc4)), 'value': $(this)[_0x103a29(0x101)](_0x103a29(0x118))['text']() }) : $('[data-input-field=\x22' + $(this)['attr'](_0x103a29(0xc4)) + '\x22]')[_0x103a29(0x1b7)]() : (all_data['push']({ 'field': $(this)[_0x103a29(0x1c7)](_0x103a29(0xc4)), 'value': $(this)[_0x103a29(0x85)]() }), $(this)['val']() !== '' && resetInputErrorMessage($(this)['attr']('name'))), all_data[_0x103a29(0xfb)](function(_0x39dd0b) {
        const _0x3817d4 = _0x103a29;
        $('[data-input-field=\x22' + _0x39dd0b[_0x3817d4(0x1f2)] + '\x22]')['show'](), $(_0x3817d4(0x1de) + _0x39dd0b[_0x3817d4(0x1f2)] + '\x22]')[_0x3817d4(0x1f1)](_0x39dd0b[_0x3817d4(0xec)]);
    });
}), $(_0x31db7e(0x19f))[_0x31db7e(0x159)](_0x31db7e(0x193))['on']('change', function() {
    const _0x5e9346 = _0x31db7e;
    $(this)[_0x5e9346(0x85)]() !== '' && resetInputErrorMessage($(this)['attr']('name')), all_data = all_data[_0x5e9346(0x18b)](_0xa7a0e0 => _0xa7a0e0[_0x5e9346(0x1f2)] !== $(this)[_0x5e9346(0x1c7)](_0x5e9346(0xc4))), all_data[_0x5e9346(0x99)]({ 'field': $(this)['attr']('name'), 'value': $(this)['val']() }), all_data[_0x5e9346(0xfb)](function(_0x5dad7e) {
        const _0x129b3c = _0x5e9346;
        $(_0x129b3c(0x1de) + _0x5dad7e[_0x129b3c(0x1f2)] + '\x22]')[_0x129b3c(0x1c2)](), $(_0x129b3c(0x1de) + _0x5dad7e[_0x129b3c(0x1f2)] + '\x22]')[_0x129b3c(0x1f1)](_0x5dad7e[_0x129b3c(0xec)]);
    });
}), $(_0x31db7e(0x19f))[_0x31db7e(0x159)](_0x31db7e(0x17b))['on'](_0x31db7e(0x1d8), function() {
    const _0x495c83 = _0x31db7e;
    $(this)[_0x495c83(0x85)]() !== '' && resetInputErrorMessage($(this)[_0x495c83(0x1c7)](_0x495c83(0xc4)));
    var _0xe02af3 = $(this)[_0x495c83(0x1ce)](_0x495c83(0x149));
    all_data = all_data[_0x495c83(0x18b)](_0xce19cc => _0xce19cc[_0x495c83(0x1f2)] !== $(this)[_0x495c83(0x1c7)](_0x495c83(0xc4))), all_data[_0x495c83(0x99)]({ 'field': $(this)[_0x495c83(0x1c7)](_0x495c83(0xc4)), 'value': _0xe02af3 ? $(this)['find'](_0x495c83(0x81))[_0x495c83(0x1f1)]() : $(this)[_0x495c83(0x85)]() }), all_data[_0x495c83(0xfb)](function(_0x363680) {
        const _0x172bbc = _0x495c83;
        $('[data-input-field=\x22' + _0x363680[_0x172bbc(0x1f2)] + '\x22]')['show'](), $('[data-input-field=\x22' + _0x363680['field'] + '\x22]')[_0x172bbc(0x1f1)](_0x363680[_0x172bbc(0xec)]);
    });
}), updateStep(), triggerInputAllData(), $(_0x31db7e(0x197))[_0x31db7e(0x170)](function() {
    const _0x2b1f93 = _0x31db7e,
        _0x62b6e5 = $(this)[_0x2b1f93(0x159)](_0x2b1f93(0xd9)),
        _0x5d325e = [];
    _0x62b6e5[_0x2b1f93(0x170)](function() {
        const _0x43d220 = _0x2b1f93;
        _0x5d325e[_0x43d220(0x99)]($(this)[_0x43d220(0x1f1)]()[_0x43d220(0x15d)]());
    });
    const _0x1acdd7 = $(this)[_0x2b1f93(0x101)](_0x2b1f93(0xc3));
    $[_0x2b1f93(0x170)](_0x5d325e, function(_0x20e5db, _0x4d20cf) {
        const _0x4b8583 = _0x2b1f93,
            _0x588044 = $(_0x4b8583(0x151))[_0x4b8583(0x85)](_0x4d20cf)[_0x4b8583(0x1f1)](_0x4d20cf);
        _0x1acdd7[_0x4b8583(0x14a)](_0x588044);
    });
});

function cloneRemove() {
    const _0x43458a = _0x31db7e;
    $(_0x43458a(0xc8))[_0x43458a(0x170)](function() {
        const _0x45212a = _0x43458a;
        $(this)[_0x45212a(0x159)](_0x45212a(0x119))[_0x45212a(0x1ad)] < 0x2 ? $(this)[_0x45212a(0x159)](_0x45212a(0xd8))[_0x45212a(0x1b7)]() : $(this)[_0x45212a(0x159)](_0x45212a(0xd8))[_0x45212a(0x1c2)]();
    });
}

function cloneRemoveInput() {
    const _0x37cb90 = _0x31db7e;
    $(_0x37cb90(0x133))[_0x37cb90(0x170)](function() {
        const _0x43ac01 = _0x37cb90;
        console[_0x43ac01(0x184)]($(this)['find'](_0x43ac01(0x93))[_0x43ac01(0x1ad)]), $(this)[_0x43ac01(0x159)](_0x43ac01(0x93))[_0x43ac01(0x1ad)] < 0x2 ? $(this)['find'](_0x43ac01(0x141))['hide']() : $(this)['find']('[data-form=\x22remove-input-clone\x22]')[_0x43ac01(0x1c2)]();
    });
}
$(_0x31db7e(0xd8))['on'](_0x31db7e(0x138), function() {
    const _0x354232 = _0x31db7e,
        _0x547776 = $(this)[_0x354232(0x158)](_0x354232(0x119))[_0x354232(0x1ad)] > 0x0 ? $(this)[_0x354232(0x158)](_0x354232(0x119))[_0x354232(0xca)]() : $(this)['parents']('[data-display]')[_0x354232(0xca)](),
        _0x3c695b = $(this)[_0x354232(0x158)]('[data-clone]')[_0x354232(0x1ad)] > 0x0 ? $(this)[_0x354232(0x158)](_0x354232(0x119))[_0x354232(0x1ce)](_0x354232(0x19a)) : $(this)[_0x354232(0x158)](_0x354232(0x1dc))['data'](_0x354232(0x1e2));
    $(_0x354232(0x169) + _0x3c695b + '\x22]')['eq'](_0x547776)[_0x354232(0x1d9)](), $('[data-display=\x22' + _0x3c695b + '\x22]')['eq'](_0x547776)['remove'](), cloneRemove();
    let _0x7c1fc0 = $('[data-add-new=\x22' + _0x3c695b + '\x22]')['data'](_0x354232(0x198)),
        _0x1266ce = $(_0x354232(0x169) + _0x3c695b + '\x22]')[_0x354232(0x1ad)];
    console[_0x354232(0x184)](_0x1266ce, _0x7c1fc0), _0x1266ce < _0x7c1fc0 && (console[_0x354232(0x184)]('show'), $('[data-add-new=\x22' + _0x3c695b + '\x22]')[_0x354232(0x1c2)]()), validation();
}), $('[data-form=\x22remove-input-clone\x22]')['on'](_0x31db7e(0x138), function() {
    const _0x11f689 = _0x31db7e;
    let _0x15929b = $(this)[_0x11f689(0x101)]()[_0x11f689(0x1c7)](_0x11f689(0xc4)),
        _0x1a2f9f = $(this)[_0x11f689(0x158)](_0x11f689(0x93))[_0x11f689(0x1ce)](_0x11f689(0xe8));
    $(this)[_0x11f689(0x181)](_0x11f689(0x93))[_0x11f689(0x1d9)](), $(_0x11f689(0x1de) + _0x15929b + '\x22]')[_0x11f689(0x181)](_0x11f689(0x139))[_0x11f689(0x1d9)]();
    let _0x3c40e3 = $(_0x11f689(0x84) + _0x1a2f9f + '\x22]')[_0x11f689(0x1ce)](_0x11f689(0x1bc)),
        _0x13670f = $('[data-clone-input=\x22' + _0x1a2f9f + '\x22]')[_0x11f689(0x1ad)];
    _0x13670f < _0x3c40e3 && $(_0x11f689(0x84) + _0x1a2f9f + '\x22]')[_0x11f689(0x1c2)](), validation();
}), $(_0x31db7e(0x136))['on'](_0x31db7e(0x138), function() {
    const _0x518868 = _0x31db7e;
    let _0x11a4d2 = $(this)[_0x518868(0x1ce)]('add-new'),
        _0x315640 = $(this)[_0x518868(0x1ce)]('add-new-limit');
    var _0x146232 = $(_0x518868(0x169) + _0x11a4d2 + '\x22]')['eq'](0x0)[_0x518868(0x19a)](!![]),
        _0x1ed679 = $('[data-display=\x22' + _0x11a4d2 + '\x22]')['eq'](0x0)['clone'](!![]);
    let _0x33ed53 = '';
    $(this)['find'](_0x518868(0xd8))[_0x518868(0x1c2)](), cloneRemove(), _0x146232[_0x518868(0x159)](_0x518868(0x93))['find'](_0x518868(0x152))[_0x518868(0x85)](''), _0x146232[_0x518868(0x159)](_0x518868(0x93))[_0x518868(0x159)](_0x518868(0x17b))['val'](''), _0x146232['find'](_0x518868(0x93))['find'](_0x518868(0x193))['val'](''), _0x146232['find']('[data-clone-input]')[_0x518868(0x1e3)](_0x518868(0x16e))[_0x518868(0x1d9)](), _0x146232[_0x518868(0x159)](_0x518868(0x93))[_0x518868(0x159)](_0x518868(0xe2))[_0x518868(0x138)](), _0x1ed679[_0x518868(0x159)](_0x518868(0x139))[_0x518868(0x1e3)](_0x518868(0x16e))[_0x518868(0x1d9)](), _0x146232[_0x518868(0x159)](_0x518868(0x152))[_0x518868(0x170)](function() {
        const _0x16d684 = _0x518868;
        if ($(this)[_0x16d684(0x129)]('[data-clone-input]')[_0x16d684(0x1ad)] > 0x0) {
            let _0x2bdfc7 = 0x0;
            const _0x500a68 = $(this)['closest'](_0x16d684(0x93))[_0x16d684(0x1ce)](_0x16d684(0xe8));
            $(_0x16d684(0x16a) + _0x500a68 + _0x16d684(0x176))[_0x16d684(0x170)](function() {
                const _0x3b91e8 = _0x16d684,
                    _0x52f033 = $(this)[_0x3b91e8(0x1c7)](_0x3b91e8(0xc4));
                if (_0x52f033 && _0x52f033[_0x3b91e8(0x156)](_0x3b91e8(0x1c1))) { const _0x354946 = parseInt(_0x52f033['split']('-')[0x1]);!isNaN(_0x354946) && _0x354946 > _0x2bdfc7 && (_0x2bdfc7 = _0x354946); }
            }), _0x2bdfc7++, _0x33ed53 = this['name'] + '-' + _0x2bdfc7;
        } else _0x33ed53 = this[_0x16d684(0xc4)] + '-' + (parseInt($('[data-clone=\x22' + _0x11a4d2 + '\x22]')['last']()[_0x16d684(0xca)]()) + 0x1);
        $(this)[_0x16d684(0x85)](''), $(this)[_0x16d684(0x1c7)](_0x16d684(0xc4), _0x33ed53), $(this)[_0x16d684(0x1c7)]('data-name', _0x33ed53);
    }), _0x146232['find'](_0x518868(0x193))[_0x518868(0x170)](function() {
        const _0x371e0d = _0x518868;
        if ($(this)[_0x371e0d(0x129)]('[data-clone-input]')['length'] > 0x0) {
            let _0x17f746 = 0x0;
            const _0x4b7fa9 = $(this)[_0x371e0d(0x129)](_0x371e0d(0x93))[_0x371e0d(0x1ce)](_0x371e0d(0xe8));
            $(_0x371e0d(0x16a) + _0x4b7fa9 + _0x371e0d(0x1f8))[_0x371e0d(0x170)](function() {
                const _0x4c18d3 = _0x371e0d,
                    _0x203996 = $(this)[_0x4c18d3(0x1c7)]('name');
                if (_0x203996 && _0x203996[_0x4c18d3(0x156)](_0x4c18d3(0x1c1))) { const _0x4db5b3 = parseInt(_0x203996[_0x4c18d3(0x6c)]('-')[0x1]);!isNaN(_0x4db5b3) && _0x4db5b3 > _0x17f746 && (_0x17f746 = _0x4db5b3); }
            }), _0x17f746++, _0x33ed53 = this[_0x371e0d(0xc4)] + '-' + _0x17f746;
        } else _0x33ed53 = this[_0x371e0d(0xc4)] + '-' + (parseInt($(_0x371e0d(0x169) + _0x11a4d2 + '\x22]')['last']()['index']()) + 0x1);
        $(this)['val'](''), $(this)[_0x371e0d(0x1c7)](_0x371e0d(0xc4), _0x33ed53), $(this)[_0x371e0d(0x1c7)]('data-name', _0x33ed53);
    }), _0x146232[_0x518868(0x159)](_0x518868(0x17b))[_0x518868(0x170)](function() {
        const _0x31e77d = _0x518868;
        if ($(this)[_0x31e77d(0x129)](_0x31e77d(0x93))[_0x31e77d(0x1ad)] > 0x0) {
            let _0x32ac87 = 0x0;
            const _0x3327e3 = $(this)[_0x31e77d(0x129)](_0x31e77d(0x93))[_0x31e77d(0x1ce)](_0x31e77d(0xe8));
            $(_0x31e77d(0x16a) + _0x3327e3 + _0x31e77d(0x1aa))[_0x31e77d(0x170)](function() {
                const _0x3499d9 = _0x31e77d,
                    _0x12cbec = $(this)[_0x3499d9(0x1c7)](_0x3499d9(0xc4));
                if (_0x12cbec && _0x12cbec[_0x3499d9(0x156)]('relationship-')) { const _0x6aebf5 = parseInt(_0x12cbec[_0x3499d9(0x6c)]('-')[0x1]);!isNaN(_0x6aebf5) && _0x6aebf5 > _0x32ac87 && (_0x32ac87 = _0x6aebf5); }
            }), _0x32ac87++, _0x33ed53 = this['name'] + '-' + _0x32ac87;
        } else _0x33ed53 = this['name'] + '-' + (parseInt($(_0x31e77d(0x169) + _0x11a4d2 + '\x22]')['last']()[_0x31e77d(0xca)]()) + 0x1);
        $(this)[_0x31e77d(0x85)](''), $(this)['attr'](_0x31e77d(0xc4), _0x33ed53), $(this)[_0x31e77d(0x1c7)]('data-name', _0x33ed53);
    }), _0x1ed679[_0x518868(0x159)](_0x518868(0x192))[_0x518868(0x170)](function() {
        const _0x2975c6 = _0x518868;
        if ($(this)[_0x2975c6(0x1ce)](_0x2975c6(0x132))) {
            let _0x35fc74 = 0x0;
            const _0x26b592 = $(this)[_0x2975c6(0x1ce)](_0x2975c6(0x132))[_0x2975c6(0x6c)]('-')[0x0];
            $(_0x2975c6(0x1ea) + _0x11a4d2 + _0x2975c6(0x147) + _0x26b592 + '\x22]')[_0x2975c6(0x170)](function() {
                const _0x442fe7 = _0x2975c6,
                    _0x2ef34d = $(this)['attr']('data-input-field'),
                    _0x3a0c0b = parseInt(_0x2ef34d[_0x442fe7(0x6c)]('-')[0x1]);
                !isNaN(_0x3a0c0b) && _0x3a0c0b > _0x35fc74 && (_0x35fc74 = _0x3a0c0b);
            }), _0x35fc74++;
            const _0x526c00 = _0x26b592 + '-' + _0x35fc74;
            $(this)['attr']('data-input-field', _0x526c00);
        }
    }), $(_0x518868(0x183) + _0x11a4d2 + '\x22]')[_0x518868(0x14a)](_0x146232), $(_0x518868(0xbd) + _0x11a4d2 + '\x22]')[_0x518868(0x14a)](_0x1ed679), $(_0x518868(0xb5) + _0x11a4d2 + '\x22]')[_0x518868(0x170)](function() {
        const _0x226ca1 = _0x518868;
        $(this)[_0x226ca1(0x1f1)]($(this)[_0x226ca1(0x158)]('[data-clone=\x22' + _0x11a4d2 + '\x22]')[_0x226ca1(0xca)]() + 0x1);
    }), $(_0x518868(0x9a) + _0x11a4d2 + '\x22]')[_0x518868(0x170)](function() {
        const _0x3c917b = _0x518868;
        $(this)[_0x3c917b(0x1f1)]($(this)[_0x3c917b(0x158)](_0x3c917b(0x1ea) + _0x11a4d2 + '\x22]')[_0x3c917b(0xca)]() + 0x1);
    });
    let _0x145607 = $(_0x518868(0x183) + _0x11a4d2 + _0x518868(0x19b) + _0x11a4d2 + '\x22]')[_0x518868(0x1ad)];
    if (_0x145607 >= _0x315640) { $(this)[_0x518868(0x1b7)](); return; }
    $(this)[_0x518868(0x1c2)](), validation();
}), $(_0x31db7e(0xe0))['on'](_0x31db7e(0x138), function() {
    const _0x207278 = _0x31db7e,
        _0x513994 = $(this)[_0x207278(0x158)](_0x207278(0x119))[_0x207278(0xca)]();
    let _0x3bcd1d = $(this)[_0x207278(0x1ce)](_0x207278(0x127));
    var _0x435583 = $('[data-clone-input=\x22' + _0x3bcd1d + '\x22]')['eq'](0x0)['clone'](!![]),
        _0x99921c = $('[data-display-input=\x22' + _0x3bcd1d + '\x22]')['eq'](0x0)[_0x207278(0x19a)](!![]);
    let _0x1dec98 = $(this)[_0x207278(0x1ce)](_0x207278(0x1bc)),
        _0x2f2de0 = 0x0;
    $(_0x207278(0x16a) + _0x3bcd1d + _0x207278(0x176))['each'](function() {
        const _0x58c799 = _0x207278,
            _0x2afdcd = $(this)[_0x58c799(0x1c7)]('name');
        if (_0x2afdcd) { const _0x455a53 = parseInt(_0x2afdcd[_0x58c799(0x6c)]('-')[0x1]);!isNaN(_0x455a53) && _0x455a53 > _0x2f2de0 && (_0x2f2de0 = _0x455a53); }
    }), $('[data-clone-input=\x22' + _0x3bcd1d + '\x22]\x20select')['each'](function() {
        const _0x5ac368 = _0x207278,
            _0x223362 = $(this)['attr'](_0x5ac368(0xc4));
        if (_0x223362) { const _0x464fc9 = parseInt(_0x223362['split']('-')[0x1]);!isNaN(_0x464fc9) && _0x464fc9 > _0x2f2de0 && (_0x2f2de0 = _0x464fc9); }
    }), $(_0x207278(0x16a) + _0x3bcd1d + _0x207278(0x1f8))[_0x207278(0x170)](function() {
        const _0x10ca47 = _0x207278,
            _0x457577 = $(this)[_0x10ca47(0x1c7)](_0x10ca47(0xc4));
        if (_0x457577) { const _0x278201 = parseInt(_0x457577[_0x10ca47(0x6c)]('-')[0x1]);!isNaN(_0x278201) && _0x278201 > _0x2f2de0 && (_0x2f2de0 = _0x278201); }
    }), _0x2f2de0++, _0x435583['find'](_0x207278(0x152))[_0x207278(0x170)](function() {
        const _0x5893ae = _0x207278,
            _0x4c1f49 = $(this)['attr'](_0x5893ae(0xc4));
        let _0x4606fa = _0x4c1f49 + '-' + _0x2f2de0;
        $(this)[_0x5893ae(0x85)](''), $(this)['attr'](_0x5893ae(0xc4), _0x4606fa), $(this)[_0x5893ae(0x1c7)]('data-name', _0x4606fa);
    }), _0x435583['find']('select')[_0x207278(0x170)](function() {
        const _0x430bbc = _0x207278,
            _0x26910b = $(this)[_0x430bbc(0x1c7)](_0x430bbc(0xc4));
        let _0x2b89cd = _0x26910b + '-' + _0x2f2de0;
        $(this)[_0x430bbc(0x85)](''), $(this)[_0x430bbc(0x1c7)]('name', _0x2b89cd), $(this)[_0x430bbc(0x1c7)](_0x430bbc(0x17a), _0x2b89cd);
    }), _0x435583['find'](_0x207278(0x193))['each'](function() {
        const _0x4d1885 = _0x207278,
            _0x2d26b0 = $(this)[_0x4d1885(0x1c7)]('name');
        let _0x54d51b = _0x2d26b0 + '-' + _0x2f2de0;
        $(this)[_0x4d1885(0x85)](''), $(this)[_0x4d1885(0x1c7)](_0x4d1885(0xc4), _0x54d51b), $(this)[_0x4d1885(0x1c7)](_0x4d1885(0x17a), _0x54d51b);
    }), _0x99921c[_0x207278(0x159)](_0x207278(0x192))[_0x207278(0x170)](function() {
        const _0x432701 = _0x207278;
        $(this)[_0x432701(0x1c7)](_0x432701(0x117), _0x432701(0x1c1) + _0x2f2de0);
    }), $(this)[_0x207278(0x101)](_0x207278(0x157) + _0x3bcd1d + '\x22]')[_0x207278(0x14a)](_0x435583), $('[data-display]')['eq'](_0x513994)['find']('[data-display-input-wrapper=\x22' + _0x3bcd1d + '\x22]')['append'](_0x99921c), $(_0x207278(0x10d) + _0x3bcd1d + '\x22]')[_0x207278(0x170)](function() {
        const _0x1e14e0 = _0x207278;
        $(this)['text']($(this)[_0x1e14e0(0x158)](_0x1e14e0(0x16a) + _0x3bcd1d + '\x22]')[_0x1e14e0(0xca)]() + 0x1);
    }), $(_0x207278(0x1ab) + _0x3bcd1d + '\x22]')[_0x207278(0x170)](function() {
        const _0x2125f2 = _0x207278;
        $(this)[_0x2125f2(0x1f1)]($(this)[_0x2125f2(0x158)](_0x2125f2(0xfd) + _0x3bcd1d + '\x22]')['index']() + 0x1);
    });
    let _0x27a5e2 = $(_0x207278(0x157) + _0x3bcd1d + _0x207278(0xd2) + _0x3bcd1d + '\x22]')[_0x207278(0x1ad)];
    if (_0x27a5e2 >= _0x1dec98) { $(this)[_0x207278(0x1b7)](); return; }
    $(this)['show'](), cloneRemoveInput(), validation();
}), $(_0x31db7e(0x13f))['on']('click', function() {
    const _0x59fcab = _0x31db7e,
        _0x6444f = $(this)[_0x59fcab(0x1ce)](_0x59fcab(0xc2));
    $(_0x59fcab(0x1e9) + _0x6444f + '\x22]')[_0x59fcab(0x85)](''), validation();
});

function andLogic() {
    const _0x2796d4 = _0x31db7e;
    conditionalResult && (steps['eq'](x)[_0x2796d4(0x159)](_0x2796d4(0x91))[_0x2796d4(0x1b7)](), steps['eq'](x)[_0x2796d4(0x159)](_0x2796d4(0x91))[_0x2796d4(0x170)](function() {
        const _0x2fc309 = _0x2796d4;

        function _0x174424(_0xcbcc9d) {
            const _0x512035 = _0x29b7,
                _0x2aa10d = _0xcbcc9d[_0x512035(0x6c)]('&'),
                _0x53ab72 = [];
            return _0x2aa10d['forEach'](_0x3c7df0 => {
                const _0x21a069 = _0x512035,
                    [_0x4f4343, _0x5965be] = _0x3c7df0[_0x21a069(0x6c)]('=');
                _0x53ab72['push']({ 'field': _0x4f4343, 'value': _0x5965be });
            }), _0x53ab72;
        }
        const _0x25eade = $(this)[_0x2fc309(0x1c7)]('data-show-if'),
            _0x5314cf = _0x174424(_0x25eade);

        function _0x18f234(_0x12009d, _0x2d1c18) { return _0x2d1c18['some']((_0x39a4d0, _0x1c7938) => { const _0x485867 = _0x29b7; if (_0x12009d[0x0] && _0x39a4d0[_0x485867(0x1f2)] === _0x12009d[0x0]['field']) return _0x12009d[_0x485867(0x17e)]((_0x216578, _0x5c4a52) => _0x2d1c18[_0x1c7938 + _0x5c4a52] && _0x2d1c18[_0x1c7938 + _0x5c4a52]['field'] === _0x216578[_0x485867(0x1f2)] && _0x2d1c18[_0x1c7938 + _0x5c4a52]['value'] === _0x216578[_0x485867(0xec)]); return ![]; }); }
        const _0x58044e = _0x18f234(_0x5314cf, all_data);
        _0x58044e ? $(this)['show']() : $(this)[_0x2fc309(0x1b7)]();
    }));
}
progressiveTarget['addClass']('hide'), progressiveInput['on'](_0x31db7e(0x152), function() {
    const _0x404ffa = _0x31db7e,
        _0x125334 = $(this)[_0x404ffa(0x1ce)](_0x404ffa(0x195)),
        _0x17b888 = $(this)[_0x404ffa(0x85)](),
        _0x96063c = form[_0x404ffa(0x159)](_0x404ffa(0x8c) + _0x125334 + '\x22]')[_0x404ffa(0x1ce)](_0x404ffa(0x13c));
    let _0x5c89eb = form[_0x404ffa(0x159)](_0x404ffa(0x8c) + _0x125334 + _0x404ffa(0xce))[_0x404ffa(0x18b)](function() { const _0x2ba434 = _0x404ffa; return $(this)[_0x2ba434(0x1ce)](_0x2ba434(0x13c))[_0x2ba434(0x143)]() === _0x17b888[_0x2ba434(0x143)](); }),
        _0xb1f538 = form[_0x404ffa(0x159)](_0x404ffa(0x8c) + _0x125334 + _0x404ffa(0xab));
    form[_0x404ffa(0x159)]('[data-input-target=\x22' + _0x125334 + '\x22]')[_0x404ffa(0x13d)](_0x404ffa(0x79)), form[_0x404ffa(0x159)](_0x404ffa(0x8c) + _0x125334 + '\x22]')[_0x404ffa(0x14b)](_0x404ffa(0x10a));
    _0x17b888 !== '' && (_0x96063c['toLowerCase']() === '*' && _0x17b888 !== '' ? (_0xb1f538[_0x404ffa(0x14b)](_0x404ffa(0x79)), _0xb1f538['addClass'](_0x404ffa(0x10a))) : (_0x5c89eb[_0x404ffa(0x14b)](_0x404ffa(0x79)), _0x5c89eb[_0x404ffa(0x13d)](_0x404ffa(0x10a))));

    function _0x54ceec(_0x174cde) {
        const _0x30025f = _0x404ffa;
        _0x174cde && (form[_0x30025f(0x159)](_0x30025f(0x9b) + _0x174cde + '\x22]')[_0x30025f(0x85)]() !== '' && form[_0x30025f(0x159)](_0x30025f(0x9b) + _0x174cde + '\x22]')[_0x30025f(0x153)](_0x30025f(0x152)));
    }
    let _0x459563 = form[_0x404ffa(0x159)](_0x404ffa(0x8c) + _0x125334 + '\x22]')[_0x404ffa(0x159)](_0x404ffa(0x18e))[_0x404ffa(0x1ce)](_0x404ffa(0x195));
    _0x54ceec(_0x459563), form[_0x404ffa(0x159)](_0x404ffa(0x1fa))[_0x404ffa(0x170)](function() {
        const _0x4c531a = _0x404ffa,
            _0x51034f = $(this)[_0x4c531a(0x1ce)]('input-reveal');
        form[_0x4c531a(0x159)](_0x4c531a(0x8c) + _0x51034f + '\x22]')[_0x4c531a(0x14b)]('f-show'), form[_0x4c531a(0x159)](_0x4c531a(0x8c) + _0x51034f + '\x22]')[_0x4c531a(0x13d)]('f-hide');
    });
});

function addClickClass() {
    const _0x2d8854 = _0x31db7e,
        _0xa4fcdf = $(this)[_0x2d8854(0x1ce)](_0x2d8854(0x105)),
        _0x1fc531 = $(this)[_0x2d8854(0x1c7)](_0x2d8854(0xc4));
    $(_0x2d8854(0x1e9) + _0x1fc531 + '\x22]')[_0x2d8854(0x181)]()[_0x2d8854(0x14b)](_0xa4fcdf), $(this)['is'](_0x2d8854(0xf7)) && $(this)['parent']()[_0x2d8854(0x13d)](_0xa4fcdf);
}
$('[data-click-addclass]')['on'](_0x31db7e(0x1d8), addClickClass);

function updateCounter(_0x442084) {
    const _0x265e4e = _0x31db7e;
    var _0x12f5de = new Date(),
        _0x537957 = _0x12f5de[_0x265e4e(0xbe)](),
        _0x37c52a = btoa(_0x265e4e(0x1e1)),
        _0x1f59b9 = btoa(_0x537957[_0x265e4e(0x1a4)]()),
        _0x5f227d = getCookie(_0x37c52a);
    !_0x5f227d || _0x5f227d !== _0x1f59b9 ? $['post'](_0x265e4e(0x15b), function() {
        const _0x34ded5 = _0x265e4e;
        console[_0x34ded5(0x184)](_0x34ded5(0x87)), document[_0x34ded5(0x19d)] = _0x37c52a + '=' + _0x1f59b9;
    })['fail'](function(_0x5d98ce, _0x23356c, _0xa5d3bb) {
        const _0x5bff87 = _0x265e4e;
        console[_0x5bff87(0xe7)](_0x5bff87(0x160), _0xa5d3bb);
    }) : console[_0x265e4e(0x184)](_0x265e4e(0x155));
}

function getCookie(_0x46cc03) { const _0x40e7cf = _0x31db7e; var _0x29b9f1 = null; if (document[_0x40e7cf(0x19d)] && document[_0x40e7cf(0x19d)] !== '') { var _0x42db57 = document[_0x40e7cf(0x19d)][_0x40e7cf(0x6c)](';'); for (var _0x58b255 = 0x0; _0x58b255 < _0x42db57[_0x40e7cf(0x1ad)]; _0x58b255++) { var _0x23fc1a = _0x42db57[_0x58b255][_0x40e7cf(0x15d)](); if (_0x23fc1a[_0x40e7cf(0x6e)](0x0, _0x46cc03[_0x40e7cf(0x1ad)] + 0x1) === _0x46cc03 + '=') { _0x29b9f1 = decodeURIComponent(_0x23fc1a['substring'](_0x46cc03[_0x40e7cf(0x1ad)] + 0x1)); break; } } } return _0x29b9f1; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x31db7e(0x148)][_0x31db7e(0x13a)]),
    formlySupportParam = formlyUrlParams[_0x31db7e(0x1c0)](_0x31db7e(0x12d)),
    showButton = formlySupportParam === 'true',
    passIcon = '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>',
    failIcon = _0x31db7e(0x199);
let isScriptLoaded = !![],
    scriptLocation = _0x31db7e(0xf8),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x31db7e(0x10f) : _0x31db7e(0x10e),
    resultStatus = _0x31db7e(0x196),
    scriptSrcAdded = '';

function isElementPresent(_0x2a72d1, _0x3058c8) { const _0x3a5786 = _0x31db7e; return document[_0x3a5786(0x9c)]('[' + _0x3058c8 + '=\x22' + _0x2a72d1 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x31db7e(0xb0), _0x31db7e(0x130));
const multistepForm = document[_0x31db7e(0x9c)](_0x31db7e(0x88)),
    formStepLength = multistepForm['querySelectorAll'](_0x31db7e(0x1a1))['length'];
isMultistepOnFormElement = multistepForm !== null;

function _0x1fdd() {
    const _0x6311bd = ['script[src=\x22', 'selection', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', '<option>', 'input', 'trigger', 'keyCode', 'Counter\x20already\x20updated\x20for\x20this\x20month.', 'startsWith', '[data-clone-input-wrapper=\x22', 'parents', 'find', ':input[type=\x22email\x22]', 'https://videsigns-staging.co.uk/formly-counter', 'screen', 'trim', 'redirect-delay', '[data-radio-skip]', 'Failed\x20to\x20update\x20counter:', 'fadeIn', ':input[type=\x22tel\x22]', 'focus', 'edit-step', '[data-form-ms=\x22submit-btn\x22]', 'memory', '[data-text=\x22current-step\x22]', '[data-radio-skip=\x22true\x22]', '[data-clone=\x22', '[data-clone-input=\x22', '.w-checkbox-input', 'data-go-to', 'userAgent', ':first', 'css', 'each', 'textarea[name=\x22', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20', 'textarea[required]', 'inputName', 'select:not([data-prefill=\x22false\x22])', '\x22]\x20input', 'min-character', 'reset', 'some', 'data-name', 'select', 'script', 'replace', 'every', 'weighted-selection-range', '0.4', 'parent', '[data-selected]:checked', '[data-clone-wrapper=\x22', 'log', '<br>Data\x20Go\x20To\x20=\x20', '[data-form=\x22progress-indicator\x22]', '[data-radio-delay]', '[data-text=\x22total-weight\x22]', '35%', 'multiple-results', 'filter', 'stopPropagation', ':input[type=\x22email\x22][required]', '[data-input-reveal]', 'width', 'scroll-top', '.w-form-done', '[data-input-field]', 'textarea', 'select[name=\x22', 'input-reveal', 'PASS', '[data-cms-select=cms]', 'add-new-limit', '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>', 'clone', '\x22]\x20[data-clone=\x22', 'skipTo', 'cookie', 'formlyLastStep', '[data-form=\x22multistep\x22]', '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a', '[data-form=\x22step\x22]', 'reinit', 'quiz', 'toString', 'getElementById', 'none', 'submit-show', 'input:radio[name=\x22', ':input[type=\x22radio\x22]', '\x22]\x20select', '[data-display-input-index=\x22', '[data-radio-skip]:visible', 'length', 'selected', 'pushState', '[data-range]:contains(', '[data-selection=\x22', '\x22]:not([data-prefill=\x22false\x22])', '[data-btn=\x22reset\x22]', ':input[type=\x22text\x22]', 'N/A', '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', 'hide', 'radio-skip', '[data-max-checkbox]', 'current', '[data-card=\x22true\x22]', 'add-new-input-limit', 'submit', 'ix2', 'count-card', 'get', 'relationship-', 'show', 'w--redirected-checked', '24pQCbhF', 'status', 'input[autofocus]', 'attr', 'FAIL', 'key', '[data-text=\x22total-steps\x22]', 'backTo', 'padding', 'input[type=\x22checkbox\x22]:visible', 'data', 'innerHTML', '[data-answer]', 'removeItem', 'data-radio-delay', 'user-agent', 'select[required]', 'input[type=\x22email\x22]:visible', 'getItem', 'includes', 'change', 'remove', '[data-checkbox]', 'ctrlKey', '[data-display]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20', '[data-input-field=\x22', 'required', '[data-reset-delay]', 'counter', 'display', 'not', 'prop', 'div', '[data-input-target]', 'https://webflow.com/api/v1/form/', ':input[type=\x22url\x22][required]', 'input[name=\x22', '[data-display=\x22', '12px', 'click-path', ':input[type=\x22file\x22][required]', 'dispatchEvent', 'first', '0px', 'text', 'field', 'clickable', 'weighted-selection', 'param-analytics', 'url', '[data-clickable]', '\x22]\x20textarea', '[data-clickable-all]', '[data-input-reveal]:not(:visible)', '[data-form=\x22submit\x22]:visible', '[data-submit=\x22true\x22]', 'file', 'split', ':input[type=\x22tel\x22][required]', 'substring', '\x22][value=\x22', '1464471EvudRR', 'filledInput', '[type=\x22radio\x22]', 'wait', 'Please\x20wait...', 'timestamp', 'debug-mode', '[data-answer=\x22', 'videsigns', 'f-hide', 'radio', 'join', '[data-success-card=\x22', 'stringify', 'data-radio-skip', 'max-checkbox', 'scroll-top-offset', 'option[value=\x22$(this).val()\x22]', '[data-form=\x22custom-progress-indicator\x22]', '[data-conditional-result]', '[data-add-new-input=\x22', 'val', 'getResponse', 'Counter\x20updated\x20successfully.', 'form[data-form=\x22multistep\x22]', ':input[type=\x22file\x22]', '[data-query-param]', 'ajaxComplete', '[data-input-target=\x22', 'div.g-recaptcha', 'toISOString', 'conditional-result', 'clickable-all', '[data-show-if]', '[data-go-to]', '[data-clone-input]', 'timeZone', '[data-form=\x22next-btn\x22]', 'init', 'appendChild', 'offset', 'push', '[data-display-index=\x22', '[data-input-reveal=\x22', 'querySelector', 'setItem', 'preventDefault', 'Webflow', '286836HNzDAZ', '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', '2555805RiYsWj', 'time-zone', 'children', 'skip-to', 'textarea:focus', 'disabled', '[data-count-card]', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x22][data-input-reveal-value=\x22*\x22]', 'success', 'slice', ':input[type=\x22password\x22][required]', 'data-skip-to', 'multistep', 'button', ':input[type=\x22checkbox\x22]', '[data-form=\x22submit-btn\x22]', '</strong>', '[data-index=\x22', '.w-radio-input', '9003486fNKugq', '[data-answer][data-radio-skip]:visible', '[data-selection-weight]', 'redirect', 'input[type=\x22radio\x22][name=\x22', 'getElementsByTagName', '[data-display-wrapper=\x22', 'getMonth', ':input[required]', 'phone-autoformat', '[data-selection=\x22other\x22]', 'remove-upload', '[data-cms-select=input]', 'name', 'reset-delay', '[type=\x22submit\x22]', '_blank', '[data-clone-wrapper]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20', 'index', 'style', 'formlyLastStepAnswer', 'parse', '\x22][data-input-reveal-value]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button', ':input[type=\x22checkbox\x22][required]:checked', '2737568NcsKQH', '\x22]\x20[data-clone-input=\x22', 'type', 'body', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'input[type=\x22radio\x22]', '[data-memory]', '[data-form=\x22remove-clone\x22]', '[data-cms-select=text]', 'Before\x20&lt;/body&gt;\x20tag', '[data-hidden-input=\x22', ':input', 'referrer', '[data-enter=\x22true\x22]', '[data-form=\x22next-btn\x22][data-submit-show]', '[data-add-new-input]', 'round', '[aria-label=\x22Remove\x20file\x22]', 'createElement', 'href', 'tagName', 'findIndex', 'error', 'clone-input', '[data-skip-to]', '[data-text=\x22error-message\x22]', '[data-custom-error-message]', 'value', 'input[type=\x22radio\x22]:checked', 'block-domain', 'Direct', 'checked', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'set', ':focus', 'pageLoadTime', ':checked', 'head', 'input:checkbox', '[data-callback=\x22recaptcha\x22]', 'forEach', 'go-to', '[data-display-input=\x22', 'enter', 'open', ':input[type=\x22checkbox\x22][required]', 'siblings', 'require', 'input[type=\x22submit\x22]', '[data-success-card]', 'click-addclass', 'BODY', 'test', 'novalidate', ':input[type=\x22text\x22][required]', 'f-show', 'answer', '[data-btn=\x22check\x22]', '[data-input-index=\x22', 'Basic\x20(No\x20Formly\x20Logic)', 'FormlyLogic\x20enabled', 'query-param', 'card', '30040336JxIoCk', ':input[type=\x22date\x22][required]', '[data-form=\x22step\x22][data-card]', '[type=\x22checkbox\x22]', 'phone-validation', 'data-input-field', 'span', '[data-clone]', 'f-mySidenav', ':input[type=\x22password\x22]', ':input[type=\x22time\x22][required]', 'selections\x20email', '[data-selection]', 'readystatechange', '</div>', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'animate', 'select[required]:visible', ':input[type=\x22number\x22]', 'destroy', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a', 'add-new-input', ':input[type=\x22checkbox\x22]:checked', 'closest', 'logic-extra', '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', 'auto', 'formly-support', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20', ':input[type=\x22number\x22][required]', 'data-form', 'checkbox', 'input-field', '[data-clone-input-wrapper]', '.active-answer-card', '7560090NWfmEe', '[data-add-new]', 'slow', 'click', '[data-display-input]', 'search', 'active-answer-card', 'input-reveal-value', 'addClass', '[data-weighted-selection-range]', '[data-remove-upload]', '[data-form=\x22back-btn\x22]', '[data-form=\x22remove-input-clone\x22]', 'AND', 'toLowerCase', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20', '[data-form=\x22progress\x22]', 'step', '\x22]\x20[data-input-field^=\x22', 'location', 'ms-field', 'append', 'removeClass', 'height', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!'];
    _0x1fdd = function() { return _0x6311bd; };
    return _0x1fdd();
}
const multistepContainer = document['querySelector'](_0x31db7e(0x19f)),
    nextBtnExist = multistepContainer['querySelector'](_0x31db7e(0x95)),
    backBtnExist = multistepContainer[_0x31db7e(0x9c)](_0x31db7e(0x140)),
    submitBtnExist = multistepContainer[_0x31db7e(0x9c)](_0x31db7e(0xb3));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist['tagName'][_0x31db7e(0x143)]() === _0x31db7e(0x152), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x31db7e(0xe5)][_0x31db7e(0x143)]() === _0x31db7e(0x152) && submitBtnExist[_0x31db7e(0xd3)][_0x31db7e(0x143)]() === _0x31db7e(0x1bd), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x31db7e(0xe5)][_0x31db7e(0x143)]() === _0x31db7e(0x152);
const checkPowerup = _0x3bb509 => document['querySelector'](_0x3bb509) !== null,
    progressBarAttr = checkPowerup('[data-form=\x22progress\x22]'),
    progressIndicatorAttr = checkPowerup(_0x31db7e(0x186)),
    customProgressAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    cardDivAttr = checkPowerup(_0x31db7e(0x1bb)),
    currentStepAttr = checkPowerup('[data-text=\x22current-step\x22]'),
    totalStepAttr = checkPowerup('[data-text=\x22total-steps\x22]'),
    enterAttr = checkPowerup(_0x31db7e(0xde)),
    submitAttr = checkPowerup(_0x31db7e(0x6a)),
    radioSkipAttr = checkPowerup(_0x31db7e(0x168)),
    customCheckboxAttr = checkPowerup(_0x31db7e(0x1da)),
    recapatchaAttr = checkPowerup(_0x31db7e(0xfa));
(!isScriptLoaded || scriptLocation !== _0x31db7e(0xf8) || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x31db7e(0x1c8));

function isScriptUrlMatch(_0x2bc6c9, _0x293ae1) { const _0x2a3c21 = _0x31db7e; for (var _0x35f929 = 0x0; _0x35f929 < _0x293ae1[_0x2a3c21(0x1ad)]; _0x35f929++) { if (_0x2bc6c9[_0x2a3c21(0x1d7)](_0x293ae1[_0x35f929])) return !![]; } return ![]; }
var keywordsToCheck = [_0x31db7e(0x78), 'formly'],
    scripts = document[_0x31db7e(0xbc)](_0x31db7e(0x17c)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x31db7e(0x1ad)]; i++) {
    var scriptSrcs = scripts[i]['src'];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x31db7e(0x99)](scriptSrcs);
}
if (matchedScripts[_0x31db7e(0x1ad)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x31db7e(0x9c)](_0x31db7e(0x14e) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script['parentNode'][_0x31db7e(0xe5)] === _0x31db7e(0x106) ? _0x31db7e(0xda) : 'Inside\x20<head>\x20tag');
} else scriptSrcAdded = _0x31db7e(0x14d) + failIcon;
const newElement = document[_0x31db7e(0xe3)](_0x31db7e(0x1e5)),
    newStyle = document['createElement'](_0x31db7e(0xcb));
newStyle[_0x31db7e(0x1cf)] = _0x31db7e(0x126), document['head'][_0x31db7e(0x97)](newStyle);
showButton && document[_0x31db7e(0xd4)][_0x31db7e(0x97)](newElement);
newElement[_0x31db7e(0x1cf)] = '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' + formType + _0x31db7e(0xa9) + scriptSrcAdded + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' + scriptLocation + '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20' + (isMultistepOnFormElement ? passIcon : failIcon) + _0x31db7e(0xf3) + (formStepLength > 0x0 ? passIcon : failIcon) + '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20' + formStepLength + _0x31db7e(0x1dd) + (nextBtnExist ? passIcon : failIcon) + _0x31db7e(0x172) + (isNextBtnOnSubmit ? failIcon : passIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20' + (backBtnExist ? passIcon : failIcon) + _0x31db7e(0xcf) + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x31db7e(0xc9) + (backBtnExist ? passIcon : failIcon) + _0x31db7e(0xaa) + (isSubmitBtnOnSubmit ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (progressBarAttr && progressIndicatorAttr ? _0x31db7e(0xf2) + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0xd5) + (customProgressAttr ? '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20' + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0xd5) + (cardDivAttr ? '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20' + passIcon + '</strong>' : '') + _0x31db7e(0xd5) + (currentStepAttr ? _0x31db7e(0x1b6) + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0xd5) + (totalStepAttr ? _0x31db7e(0xa1) + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0xd5) + (enterAttr ? _0x31db7e(0x12e) + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0xd5) + (submitAttr ? '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20' + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0xd5) + (radioSkipAttr ? _0x31db7e(0x144) + passIcon + '</strong>' : '') + _0x31db7e(0xd5) + (customCheckboxAttr ? _0x31db7e(0x12b) + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0xd5) + (recapatchaAttr ? _0x31db7e(0xf1) + passIcon + _0x31db7e(0xb4) : '') + _0x31db7e(0x1a0);

function openNav() {
    const _0x246fb1 = _0x31db7e;
    document['getElementById'](_0x246fb1(0x11a))['style'][_0x246fb1(0x18f)] = _0x246fb1(0x189), document['getElementById']('f-mySidenav')[_0x246fb1(0xcb)][_0x246fb1(0x1cc)] = _0x246fb1(0x1eb);
}

function closeNav() {
    const _0x4d5fb4 = _0x31db7e;
    document[_0x4d5fb4(0x1a5)](_0x4d5fb4(0x11a))['style']['width'] = '0', document[_0x4d5fb4(0x1a5)](_0x4d5fb4(0x11a))[_0x4d5fb4(0xcb)][_0x4d5fb4(0x1cc)] = _0x4d5fb4(0x1f0);
}