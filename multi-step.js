/**
 * @updateType Bug fix and features update
 * @description Fixes issue with double clicking on radio button
 * @description Updated all new features from feature dev script
 * @date 2024-07-12
 */

const _0x1864d6 = _0x33ab;
(function(_0x2af7c0, _0x3bb510) {
    const _0x5dd406 = _0x33ab,
        _0x53dbbb = _0x2af7c0();
    while (!![]) {
        try {
            const _0x5d870b = -parseInt(_0x5dd406(0x32f)) / 0x1 + parseInt(_0x5dd406(0x27f)) / 0x2 * (parseInt(_0x5dd406(0x275)) / 0x3) + -parseInt(_0x5dd406(0x330)) / 0x4 + -parseInt(_0x5dd406(0x22e)) / 0x5 * (parseInt(_0x5dd406(0x1e2)) / 0x6) + -parseInt(_0x5dd406(0x1dd)) / 0x7 + -parseInt(_0x5dd406(0x200)) / 0x8 * (-parseInt(_0x5dd406(0x2aa)) / 0x9) + parseInt(_0x5dd406(0x258)) / 0xa * (parseInt(_0x5dd406(0x1fd)) / 0xb);
            if (_0x5d870b === _0x3bb510) break;
            else _0x53dbbb['push'](_0x53dbbb['shift']());
        } catch (_0x396e20) { _0x53dbbb['push'](_0x53dbbb['shift']()); }
    }
}(_0x1d40, 0x4a9a5));
const _0x3f73aa = _0x4954;
(function(_0x29311f, _0x2a6805) {
    const _0x2126eb = _0x4954,
        _0x458c97 = _0x29311f();
    while (!![]) {
        try {
            const _0x4ddcb9 = -parseInt(_0x2126eb(0x1e8)) / 0x1 + parseInt(_0x2126eb(0x221)) / 0x2 + -parseInt(_0x2126eb(0x142)) / 0x3 + parseInt(_0x2126eb(0x1c8)) / 0x4 + parseInt(_0x2126eb(0x1f6)) / 0x5 * (parseInt(_0x2126eb(0x180)) / 0x6) + parseInt(_0x2126eb(0xf8)) / 0x7 * (parseInt(_0x2126eb(0x145)) / 0x8) + -parseInt(_0x2126eb(0xff)) / 0x9;
            if (_0x4ddcb9 === _0x2a6805) break;
            else _0x458c97['push'](_0x458c97['shift']());
        } catch (_0x579a08) { _0x458c97['push'](_0x458c97['shift']()); }
    }
}(_0x2849, 0x6c66f));
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
let form = $(_0x3f73aa(0x1de)),
    steps = $(_0x3f73aa(0x163)),
    progressbarClone = $(_0x3f73aa(0x1a3))[_0x3f73aa(0x1b8)](),
    progressbar, weightedSelection = $(_0x3f73aa(0x135))['data'](_0x3f73aa(0x167)),
    weightedSelectionRange = $(_0x3f73aa(0x277))[_0x3f73aa(0xed)](_0x3f73aa(0x1a6)),
    selectMultiple = $(_0x3f73aa(0x227))[_0x3f73aa(0xed)](_0x3f73aa(0x279)),
    customError = $(_0x3f73aa(0x12f))['data']('custom-error-message'),
    reinitIX = $('[data-reinit]')[_0x3f73aa(0xed)]('reinit'),
    memory = $('[data-memory]')[_0x3f73aa(0xed)](_0x3f73aa(0x20e)),
    quiz = $(_0x3f73aa(0x18b))[_0x3f73aa(0xed)]('quiz');
const urlFormly = new URL(window[_0x3f73aa(0x21d)][_0x3f73aa(0x1d0)]);
let _params = $(_0x3f73aa(0x1d3))['data'](_0x3f73aa(0x245)),
    logicExtra = $(_0x3f73aa(0x1de))[_0x3f73aa(0xed)](_0x3f73aa(0x1c2)),
    oldSubmitText = $(_0x3f73aa(0x168))[_0x3f73aa(0x271)](),
    oldResetText = $(_0x3f73aa(0x159))['text'](),
    formReset = $(_0x3f73aa(0x1de))[_0x3f73aa(0xed)](_0x3f73aa(0x111)),
    resetDelay = $(_0x3f73aa(0x1a0))[_0x3f73aa(0xed)](_0x3f73aa(0x179)) ? $(_0x3f73aa(0x1a0))[_0x3f73aa(0xed)](_0x3f73aa(0x179)) : 0x7d0,
    redirectDelay = $(_0x3f73aa(0x1d6))[_0x3f73aa(0xed)](_0x3f73aa(0x236)) ? $(_0x3f73aa(0x1d6))[_0x3f73aa(0xed)](_0x3f73aa(0x236)) : 0x64,
    phoneFormat = $(_0x3f73aa(0x1de))['data']('phone-validation'),
    scrollToTop = $(_0x3f73aa(0x1de))['data'](_0x3f73aa(0x10c)),
    trackLastStep = $('[data-last-step]')[_0x3f73aa(0xed)](_0x3f73aa(0x107)),
    conditionalResult = $('[data-conditional-result]')['data'](_0x3f73aa(0x219)) === _0x3f73aa(0x195),
    scrollTopOffset = parseInt($('[data-form=\x22multistep\x22]')['data'](_0x3f73aa(0x11d)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON['parse'](localStorage['getItem'](_0x3f73aa(0x1ec))), formlyLastStep = JSON[_0x3f73aa(0x10e)](localStorage[_0x3f73aa(0x137)](_0x3f73aa(0x19e))), formlyLastStepAnswer = JSON[_0x3f73aa(0x10e)](localStorage[_0x3f73aa(0x137)](_0x3f73aa(0x154)));
let paramUrl = $(_0x3f73aa(0x1de))['data'](_0x3f73aa(0x164));
const progressiveTarget = $(_0x3f73aa(0x1de))[_0x3f73aa(0x10d)]('[data-input-target]'),
    progressiveInput = $(_0x3f73aa(0x1de))['find'](_0x3f73aa(0x27b)),
    multiSelections = $(_0x3f73aa(0x1de))[_0x3f73aa(0xed)](_0x3f73aa(0x1e3));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x3f73aa(0x237))[_0x3f73aa(0x100)](function() {
    const _0x560a2e = _0x3f73aa;
    ogCloneArr[_0x560a2e(0x23c)]({ 'name': $(this)[_0x560a2e(0xed)](_0x560a2e(0x1b8)), 'element': $(this)['clone'](!![]), 'display': $(_0x560a2e(0x26b) + $(this)['data']('clone') + '\x22]')['eq'](0x0)[_0x560a2e(0x1b8)](!![]) });
});
const setPageLoadTime = () => {
    const _0x55a3f1 = _0x3f73aa;
    localStorage['setItem'](_0x55a3f1(0x144), Date[_0x55a3f1(0x14f)]()['toString']());
};
setPageLoadTime();
$(_0x3f73aa(0x1b0))[_0x3f73aa(0x1fc)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x35b405) { notRobot = !![]; }($(steps[x])[_0x3f73aa(0xed)](_0x3f73aa(0x194)) || $(steps[x])[_0x3f73aa(0x10d)](_0x3f73aa(0x1cd))[_0x3f73aa(0xed)](_0x3f73aa(0x194))) && (next = !![]);
$(_0x3f73aa(0x283))[_0x3f73aa(0x1fc)] > 0x0 && (countCard = $(_0x3f73aa(0x283))[_0x3f73aa(0xed)]('count-card'));
$('[data-text=\x22error-message\x22]')['hide'](), $(progressbarClone)[_0x3f73aa(0x1b4)]('current'), $(_0x3f73aa(0x24b))[_0x3f73aa(0x250)]()[_0x3f73aa(0x141)](), $(_0x3f73aa(0x168))[_0x3f73aa(0x1bc)](), $(_0x3f73aa(0x1b9))[_0x3f73aa(0x1bc)](), steps[_0x3f73aa(0x100)](function() {
    const _0x28092f = _0x3f73aa;
    $(_0x28092f(0x24b))[_0x28092f(0x1f5)](progressbarClone[_0x28092f(0x1b8)](!![], !![]));
}), $(_0x3f73aa(0x149))['hide']();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x3f73aa(0x1fc)], $(_0x3f73aa(0xfc))[_0x3f73aa(0x1ab)](totalSteps)) : ($(steps[x])[_0x3f73aa(0xed)]('card') ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $('[data-form=\x22step\x22]:not([data-card=\x22true\x22])')['length'], $('[data-text=\x22total-steps\x22]')[_0x3f73aa(0x1ab)](totalSteps), $('[data-form=\x22step\x22][data-card]')['each'](function() {
    const _0x2b383d = _0x3f73aa;
    $($('[data-form=\x22progress-indicator\x22]')[$(this)[_0x2b383d(0x1da)]()])[_0x2b383d(0x1bc)]();
}));
progressbar = $(_0x3f73aa(0x24b))[_0x3f73aa(0x250)](), $(_0x3f73aa(0x1a3))['on'](_0x3f73aa(0x21c), clickableIndicator), $(_0x3f73aa(0x184))['text'](curStep), steps['hide'](), $('[data-success-card]')[_0x3f73aa(0x1bc)](), $(_0x3f73aa(0x231))[_0x3f73aa(0x100)](function() {
    const _0x3b5e54 = _0x3f73aa;
    $(this)['attr'](_0x3b5e54(0x118), _0x3b5e54(0x26a));
});

function getParams() {
    const _0xe24f59 = _0x3f73aa;
    urlFormly[_0xe24f59(0x1af)][_0xe24f59(0x24a)](function(_0x343927, _0x57dcb4) {
        const _0x4989b4 = _0xe24f59;
        searchQ[_0x4989b4(0x23c)]({ 'val': _0x343927, 'key': _0x57dcb4 });
    });
}

function getSafe(_0xe6dbbe, _0x280dcf) { try { return _0xe6dbbe(); } catch (_0x4a6022) { return _0x280dcf; } }

function phoneAutoFormat(_0x2404de) {
    var _0x21a4f2 = '';
    return function(_0x115067) {
        const _0x3d901 = _0x4954;
        var _0x20fe9f = '',
            _0x71f49e = _0x115067[_0x3d901(0x1c0)](/\D/g, ''),
            _0x301e02 = 0x0,
            _0x4ec06c = 0x0;
        while (_0x301e02 < _0x71f49e['length'] && _0x4ec06c < _0x2404de[_0x3d901(0x1fc)]) { _0x2404de[_0x4ec06c] === 'x' ? (_0x20fe9f += _0x71f49e[_0x301e02], _0x301e02++) : _0x20fe9f += _0x2404de[_0x4ec06c], _0x4ec06c++; }
        if (_0x115067[_0x3d901(0x1fc)] < _0x21a4f2[_0x3d901(0x1fc)]) {
            var _0x272af1 = _0x2404de[_0x3d901(0x1d1)](_0x4ec06c);
            _0x20fe9f += _0x272af1[_0x3d901(0x1c0)](/x/g, '');
        }
        return _0x21a4f2 = _0x20fe9f, _0x20fe9f;
    };
}

function validateURL(_0x35b09d) { const _0x214ca7 = _0x3f73aa; return urlPattern[_0x214ca7(0x263)](_0x35b09d) ? !![] : ![]; }
quiz && steps['each'](function() {
    const _0x4140b0 = _0x3f73aa;
    $(this)['children']()[_0x4140b0(0x14d)](_0x4140b0(0x10f), !![]), $(this)[_0x4140b0(0x250)]()[_0x4140b0(0x14d)](_0x4140b0(0x26f), 0xfa);
});

function disableBtn(_0x288c33) {
    const _0x3ce1a2 = _0x3f73aa;
    fill = ![], !customError && ($(_0x3ce1a2(0x20d))[_0x3ce1a2(0x1ad)]({ 'opacity': _0x3ce1a2(0x117), 'pointer-events': _0x3ce1a2(0xfe) }), $(_0x3ce1a2(0x20d))[_0x3ce1a2(0x192)](_0x3ce1a2(0x1f0)), $(_0x3ce1a2(0x168))[_0x3ce1a2(0x1ad)]({ 'opacity': _0x3ce1a2(0x117), 'pointer-events': 'none' }), $(_0x3ce1a2(0x168))[_0x3ce1a2(0x192)](_0x3ce1a2(0x1f0)), $('[data-form-ms=\x22submit-btn\x22]')[_0x3ce1a2(0x1ad)]({ 'opacity': _0x3ce1a2(0x117), 'pointer-events': 'none' }), $(_0x3ce1a2(0x1b9))[_0x3ce1a2(0x192)](_0x3ce1a2(0x1f0)));
}

function _0x4954(_0x4edb48, _0x3b2660) { const _0x2849b9 = _0x2849(); return _0x4954 = function(_0x495487, _0xb43796) { _0x495487 = _0x495487 - 0xe9; let _0x24004e = _0x2849b9[_0x495487]; return _0x24004e; }, _0x4954(_0x4edb48, _0x3b2660); }

function enableBtn() {
    const _0xf66d1b = _0x3f73aa;
    fill = !![], $(_0xf66d1b(0x20d))[_0xf66d1b(0x1ad)]({ 'pointer-events': 'auto', 'opacity': '1' }), $(_0xf66d1b(0x20d))[_0xf66d1b(0x1b4)](_0xf66d1b(0x1f0)), $(_0xf66d1b(0x168))[_0xf66d1b(0x1ad)]({ 'pointer-events': _0xf66d1b(0x23e), 'opacity': '1' }), $(_0xf66d1b(0x168))[_0xf66d1b(0x1b4)](_0xf66d1b(0x1f0)), $(_0xf66d1b(0x1b9))['css']({ 'pointer-events': _0xf66d1b(0x23e), 'opacity': '1' }), $(_0xf66d1b(0x1b9))['removeClass'](_0xf66d1b(0x1f0));
}

function saveLastAnswer(_0xba6313) {
    const _0x9606b4 = _0x3f73aa;
    localStorage['removeItem'](_0x9606b4(0x154)), localStorage[_0x9606b4(0x272)](_0x9606b4(0x154), JSON[_0x9606b4(0x265)](_0xba6313));
}

function saveFilledInput() {
    const _0x30bbd6 = _0x3f73aa;
    $(_0x30bbd6(0x152))[_0x30bbd6(0x14e)](_0x30bbd6(0x278))['each'](function() {
        const _0x4f45a0 = _0x30bbd6;
        $(this)[_0x4f45a0(0x14d)](_0x4f45a0(0x118)) === _0x4f45a0(0x27a) || $(this)[_0x4f45a0(0x14d)]('type') === _0x4f45a0(0x269) ? $(this)[_0x4f45a0(0x25c)](_0x4f45a0(0x1d7)) && (filledInput[_0x4f45a0(0x21e)](_0x5939ae => _0x5939ae[_0x4f45a0(0x138)] === $(this)[_0x4f45a0(0x14d)](_0x4f45a0(0x22e))) ? (filledInput = filledInput[_0x4f45a0(0x1aa)](_0x3f6dec => _0x3f6dec[_0x4f45a0(0x138)] !== $(this)[_0x4f45a0(0x14d)](_0x4f45a0(0x22e))), $(this)[_0x4f45a0(0x271)]() !== '' && filledInput[_0x4f45a0(0x23c)]({ 'inputName': $(this)[_0x4f45a0(0x14d)]('name'), 'value': $(this)[_0x4f45a0(0x271)]() })) : $(this)[_0x4f45a0(0x271)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x4f45a0(0x14d)](_0x4f45a0(0x22e)), 'value': $(this)['val']() })) : filledInput[_0x4f45a0(0x21e)](_0x1c11b2 => _0x1c11b2['inputName'] === $(this)[_0x4f45a0(0x14d)]('name')) ? (filledInput = filledInput['filter'](_0x75f744 => _0x75f744[_0x4f45a0(0x138)] !== $(this)[_0x4f45a0(0x14d)](_0x4f45a0(0x22e))), $(this)[_0x4f45a0(0x271)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x4f45a0(0x14d)]('name'), 'value': $(this)[_0x4f45a0(0x271)]() })) : $(this)[_0x4f45a0(0x271)]() !== '' && filledInput[_0x4f45a0(0x23c)]({ 'inputName': $(this)['attr'](_0x4f45a0(0x22e)), 'value': $(this)[_0x4f45a0(0x271)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x30bbd6(0x1cf)](_0x30bbd6(0x19e)), localStorage['setItem'](_0x30bbd6(0x19e), lastStep)), localStorage[_0x30bbd6(0x1cf)](_0x30bbd6(0x1ec)), localStorage[_0x30bbd6(0x272)](_0x30bbd6(0x1ec), JSON[_0x30bbd6(0x265)](filledInput));
}

function scrollTop() {
    const _0x5c327f = _0x3f73aa;
    scrollToTop && $(_0x5c327f(0x166))[_0x5c327f(0x1fb)]({ 'scrollTop': $(_0x5c327f(0x1de))['offset']()['top'] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x56977f) {
    const _0x44acb3 = _0x3f73aa;
    var _0x517210 = window[_0x44acb3(0x21d)]['href'],
        _0x760732 = new URLSearchParams(window['location'][_0x44acb3(0x1dd)]);
    _0x760732['set'](_0x44acb3(0xf0), _0x56977f);
    var _0x5182b4 = _0x517210['split']('?')[0x0] + '?' + _0x760732[_0x44acb3(0x20a)]();
    window[_0x44acb3(0x126)][_0x44acb3(0x1cc)]({}, '', _0x5182b4);
}

function updateStep() {
    const _0x2ed894 = _0x3f73aa;
    scrollTop(), skip = ![], $(_0x2ed894(0x172))[_0x2ed894(0x1b4)]('disabled');
    $(_0x2ed894(0x243))[_0x2ed894(0xed)]('clickable') && (steps['find'](_0x2ed894(0x241))[_0x2ed894(0x100)](function() {
        const _0x5769c6 = _0x2ed894;
        $($(_0x5769c6(0x172))[$(this)[_0x5769c6(0x13a)]('[data-form=\x22step\x22]')[_0x5769c6(0x1da)]()]), $(this)[_0x5769c6(0x271)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x2ed894(0x1ac))[_0x2ed894(0x192)](_0x2ed894(0x1f0)) : $(_0x2ed894(0x1ac))[_0x2ed894(0x1b4)](_0x2ed894(0x1f0)));
    $(_0x2ed894(0x172))[_0x2ed894(0x1b4)](_0x2ed894(0x1be)), $(_0x2ed894(0x172))[_0x2ed894(0x192)]('disabled'), $($('[data-form=\x22custom-progress-indicator\x22]')[x])[_0x2ed894(0x192)]('current'), selection = selections['filter'](_0x58f790 => _0x58f790[_0x2ed894(0xf0)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x2ed894(0x1e0)]) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x2ed894(0x17e))[_0x2ed894(0x1bc)](), steps[_0x2ed894(0x1bc)]();
    reinitIX === !![] && window[_0x2ed894(0x18e)]['destroy']();
    $(progressbar)[_0x2ed894(0x1b4)](_0x2ed894(0x1be));
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])[_0x2ed894(0x192)](_0x2ed894(0x1be)) : !$(steps[i])[_0x2ed894(0xed)](_0x2ed894(0x194)) && $(progressbar[i])[_0x2ed894(0x192)](_0x2ed894(0x1be)); }
    reinitIX === !![] ? (window[_0x2ed894(0x18e)] && window[_0x2ed894(0x18e)][_0x2ed894(0x15e)](_0x2ed894(0x13b))[_0x2ed894(0x1a8)](), document[_0x2ed894(0x1ed)](new Event(_0x2ed894(0x207))), $(steps[x])[_0x2ed894(0x204)]()) : $(steps[x])['fadeIn'](_0x2ed894(0x1a9));
    $('.active-answer-card')[_0x2ed894(0x1b4)](_0x2ed894(0x128));
    x === 0x0 && !$(steps[x])[_0x2ed894(0xed)](_0x2ed894(0x194)) && ($(steps[x])[_0x2ed894(0x10d)]('[data-answer]')[_0x2ed894(0x204)](), $(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x17e))['addClass'](_0x2ed894(0x128)));
    selection[_0x2ed894(0x1fc)] > 0x0 ? ($(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x1ba) + selection[0x0][_0x2ed894(0x1b3)] + '\x22]')[_0x2ed894(0x204)](), $(steps[x])[_0x2ed894(0x10d)]('[data-answer=\x22' + selection[0x0][_0x2ed894(0x1b3)] + '\x22]')['addClass'](_0x2ed894(0x128))) : ($(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x1ba) + answer + '\x22]')[_0x2ed894(0x204)](), $(steps[x])['find'](_0x2ed894(0x1ba) + answer + '\x22]')[_0x2ed894(0x192)]('active-answer-card'));
    if (x === 0x0) $(_0x2ed894(0x1eb))[_0x2ed894(0x1bc)](), $('[data-form=\x22next-btn\x22]')[_0x2ed894(0x204)](), $(_0x2ed894(0x168))[_0x2ed894(0x1bc)]();
    else {
        if (x === steps[_0x2ed894(0x1fc)] - 0x1 || $(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x270))[_0x2ed894(0x1fc)] > 0x0) {
            $(_0x2ed894(0x20d))[_0x2ed894(0x1bc)]();
            if ($(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x10a))['data'](_0x2ed894(0x1a1))) $(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x10a))['show']();
            else $(_0x2ed894(0x20d))[_0x2ed894(0xed)]('submit-show') && $(_0x2ed894(0x20d))[_0x2ed894(0x204)]();
            $(_0x2ed894(0x168))[_0x2ed894(0x204)](), $(_0x2ed894(0x1b9))[_0x2ed894(0x204)](), $(_0x2ed894(0x1eb))['show']();
        } else $('[data-form=\x22next-btn\x22]')[_0x2ed894(0x204)](), $(_0x2ed894(0x1eb))[_0x2ed894(0x204)](), $('[data-form=\x22submit-btn\x22]')['hide'](), $('[data-form-ms=\x22submit-btn\x22]')[_0x2ed894(0x1bc)]();
    }
    $($(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x242))[0x0])[_0x2ed894(0x1f3)](), $($(steps[x])[_0x2ed894(0x10d)](_0x2ed894(0x1ef))[0x0])[_0x2ed894(0x1f3)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x2ed894(0x172))[idx])[_0x2ed894(0x1b4)]('disabled'); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x2db883, _0x4bbbe2, _0xf453e0) {
    const _0x528572 = _0x3f73aa;
    let _0x5afcd3 = _0x2db883[_0x528572(0x182)]('@') ? _0x2db883[_0x528572(0x26c)]('@')[0x1]['split']('.')[0x0] : [];
    dom = [];
    _0x4bbbe2 !== undefined && _0x4bbbe2[_0x528572(0x26c)](',')[_0x528572(0x24a)](function(_0x17eedd) {
        const _0x40817d = _0x528572;
        _0x17eedd[_0x40817d(0x182)](_0x5afcd3) && dom['push'](_0x5afcd3);
    });
    dom[_0x528572(0x1fc)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x18f3e2 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x18f3e2[_0x528572(0x263)](_0x2db883) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x528572(0x23c)]({ 'input': _0xf453e0 })) : emailFilled = !![];
}

function phoneValidation(_0x213596, _0x152f3a, _0x249ef5) {
    if (phoneFormat) return _0x152f3a >= _0x249ef5 ? !![] : ![];
    else { if (_0x152f3a >= _0x249ef5) return !![]; }
}

function validation() {
    const _0x35ac92 = _0x3f73aa;
    $(steps[x])[_0x35ac92(0xed)]('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], urlFilled = !![], timeFilled = !![], emailFilled = !![], emptyInput = 0x0, empReqInput = [], empReqTime = [], empReqTel = [], empReqUrl = [], empReqDate = [], empReqSelect = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x282))[_0x35ac92(0x1fc)], textInputLength = $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x211))[_0x35ac92(0x1fc)], selectInputLength = $(steps[x])['find'](_0x35ac92(0xf2))[_0x35ac92(0x1fc)], emailInputLength = $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x158))[_0x35ac92(0x1fc)], checkboxInputLength = $(steps[x])[_0x35ac92(0x10d)]('input[type=\x22checkbox\x22]:visible')[_0x35ac92(0x1fc)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x35ac92(0xed)](_0x35ac92(0x27a)) ? $(steps[x])[_0x35ac92(0xed)](_0x35ac92(0x27a)) : $(steps[x])['find'](_0x35ac92(0x264))[_0x35ac92(0x1fc)] > 0x0 ? $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x264))[_0x35ac92(0xed)]('checkbox') : 0x0, maxCheckCount = $(steps[x])[_0x35ac92(0xed)](_0x35ac92(0x170)) ? $(steps[x])[_0x35ac92(0xed)](_0x35ac92(0x170)) : $(steps[x])[_0x35ac92(0x10d)]('[data-max-checkbox]')[_0x35ac92(0x1fc)] > 0x0 ? $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x13d))[_0x35ac92(0xed)]('max-checkbox') : 0x0;
    if (!logicExtra) {
        let _0x170b02 = $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x244)),
            _0x19eaa9 = _0x170b02[_0x35ac92(0x1aa)](_0x35ac92(0x140)),
            _0x1544b6 = _0x170b02['filter'](':checked'),
            _0xd30964 = _0x19eaa9[_0x35ac92(0x1aa)](_0x35ac92(0x1d4));
        if (_0x170b02['length'] > 0x0) {
            if (checkCount === '*' || checkCount > _0x170b02['length']) _0x170b02['each'](function() {
                const _0x26aca1 = _0x35ac92;
                $(this)['is'](_0x26aca1(0x1d4)) ? (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x26aca1(0x14d)](_0x26aca1(0x22e)))) : (checkboxFilled = ![], unfilledArr[_0x26aca1(0x23c)]({ 'input': $(this)[_0x26aca1(0x14d)](_0x26aca1(0x22e)) }));
            });
            else {
                if (_0x1544b6[_0x35ac92(0x1fc)] >= checkCount) {
                    if (_0x19eaa9[_0x35ac92(0x1fc)] > 0x0) _0x19eaa9[_0x35ac92(0x1fc)] === _0xd30964[_0x35ac92(0x1fc)] ? (checkboxFilled = !![], resetInputErrorMessage(_0x19eaa9[_0x35ac92(0x1a2)]()[_0x35ac92(0x14d)](_0x35ac92(0x22e)))) : (checkboxFilled = ![], _0x19eaa9[_0x35ac92(0x14e)](_0x35ac92(0x1d4))[_0x35ac92(0x100)](function() {
                        const _0x11a58e = _0x35ac92;
                        console[_0x11a58e(0x1ca)]($(this)[_0x11a58e(0x14d)](_0x11a58e(0x22e))), unfilledArr[_0x11a58e(0x23c)]({ 'input': $(this)[_0x11a58e(0x14d)](_0x11a58e(0x22e)) });
                    }));
                    else {
                        if (maxCheckCount > _0x1544b6[_0x35ac92(0x1fc)]) $(steps[x])[_0x35ac92(0x10d)]('input[type=\x22checkbox\x22]')[_0x35ac92(0x25c)](_0x35ac92(0x1f0), ![]), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x22c))[_0x35ac92(0x213)]('label')[_0x35ac92(0x1b4)](_0x35ac92(0x1f0));
                        else maxCheckCount > 0x0 && ($(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x24c))['parent'](_0x35ac92(0x1bb))[_0x35ac92(0x192)](_0x35ac92(0x1f0)), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x24c))[_0x35ac92(0x25c)]('disabled', !![]), _0x19eaa9[_0x35ac92(0x14e)](':checked')[_0x35ac92(0x100)](function() {
                            const _0x14613e = _0x35ac92;
                            unfilledArr[_0x14613e(0x23c)]({ 'input': $(this)[_0x14613e(0x14d)]('name') });
                        }));
                    }
                } else checkCount > 0x0 && (checkboxFilled = ![], _0x19eaa9[_0x35ac92(0x14e)](':checked')[_0x35ac92(0x100)](function() {
                    const _0x3a80a0 = _0x35ac92;
                    unfilledArr['push']({ 'input': $(this)[_0x3a80a0(0x14d)](_0x3a80a0(0x22e)) });
                }), unfilledArr[_0x35ac92(0x23c)]({ 'input': _0x170b02[_0x35ac92(0x1a2)]()[_0x35ac92(0x14d)](_0x35ac92(0x22e)) }));
            }
        }
        $(steps[x])[_0x35ac92(0x10d)]('input:radio[required]')[_0x35ac92(0x100)](function(_0x556f95) {
            const _0x9a178e = _0x35ac92;
            var _0x5eef90 = $(this)[_0x9a178e(0x14d)](_0x9a178e(0x22e));
            $('input:radio[name=\x22' + _0x5eef90 + _0x9a178e(0x23a))['length'] == 0x0 ? (!empReqRadio[_0x9a178e(0x10d)](_0x4e8e22 => _0x4e8e22['input'] === _0x556f95) && empReqRadio[_0x9a178e(0x23c)]({ 'input': _0x556f95 }), unfilledArr[_0x9a178e(0x23c)]({ 'input': $(this)[_0x9a178e(0x14d)](_0x9a178e(0x22e)) })) : empReqRadio = empReqRadio['filter'](_0x1d81f4 => _0x1d81f4[_0x9a178e(0x12d)] !== _0x556f95), empReqRadio[_0x9a178e(0x1fc)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x120))['each'](function(_0xee5de1) {
            const _0x59c11d = _0x35ac92;
            let _0x36195b = $(this)[_0x59c11d(0x271)]()[_0x59c11d(0x1fc)],
                _0x293760 = $(this)[_0x59c11d(0xed)]('min-character') ? $(this)[_0x59c11d(0xed)]('min-character') : 0x0;
            $(this)[_0x59c11d(0x271)]() !== '' && _0x36195b >= _0x293760 ? empReqInput = empReqInput[_0x59c11d(0x1aa)](_0x3b502b => _0x3b502b[_0x59c11d(0x12d)] !== _0xee5de1) : (!empReqInput[_0x59c11d(0x10d)](_0x31b70a => _0x31b70a[_0x59c11d(0x12d)] === _0xee5de1) && empReqInput[_0x59c11d(0x23c)]({ 'input': _0xee5de1 }), unfilledArr[_0x59c11d(0x23c)]({ 'input': $(this)[_0x59c11d(0x14d)](_0x59c11d(0x22e)) })), empReqInput[_0x59c11d(0x1fc)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](':input[type=\x22password\x22][required]')[_0x35ac92(0x100)](function(_0x52f542) {
            const _0x39df4f = _0x35ac92;
            let _0x457fb1 = $(this)['val']()['length'],
                _0xb4fe8 = $(this)[_0x39df4f(0xed)](_0x39df4f(0x106)) ? $(this)[_0x39df4f(0xed)](_0x39df4f(0x106)) : 0x0;
            $(this)[_0x39df4f(0x271)]() !== '' && _0x457fb1 >= _0xb4fe8 ? empReqPassword = empReqPassword[_0x39df4f(0x1aa)](_0x504776 => _0x504776[_0x39df4f(0x12d)] !== _0x52f542) : (!empReqPassword['find'](_0x32b647 => _0x32b647['input'] === _0x52f542) && empReqPassword['push']({ 'input': _0x52f542 }), unfilledArr[_0x39df4f(0x23c)]({ 'input': $(this)[_0x39df4f(0x14d)](_0x39df4f(0x22e)) })), empReqPassword['length'] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x198))[_0x35ac92(0x100)](function(_0x5e9010) {
            const _0x5197ab = _0x35ac92;
            let _0x5dc1e6 = $(this)[_0x5197ab(0x271)]()[_0x5197ab(0x1fc)],
                _0x149091 = $(this)[_0x5197ab(0xed)](_0x5197ab(0x106)) ? $(this)[_0x5197ab(0xed)](_0x5197ab(0x106)) : 0x0;
            $(this)['val']() !== '' && _0x5dc1e6 >= _0x149091 ? empReqUrl = empReqUrl['filter'](_0x1b3428 => _0x1b3428[_0x5197ab(0x12d)] !== _0x5e9010) : (!empReqTime[_0x5197ab(0x10d)](_0xd51c16 => _0xd51c16['input'] === _0x5e9010) && empReqUrl[_0x5197ab(0x23c)]({ 'input': _0x5e9010 }), unfilledArr[_0x5197ab(0x23c)]({ 'input': $(this)[_0x5197ab(0x14d)](_0x5197ab(0x22e)) })), empReqUrl[_0x5197ab(0x1fc)] === 0x0 && validateURL($(this)[_0x5197ab(0x271)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x124))[_0x35ac92(0x100)](function(_0x3d77ed) {
            const _0x667f2f = _0x35ac92;
            let _0xbad43d = $(this)[_0x667f2f(0x271)]()[_0x667f2f(0x1fc)],
                _0x1f6e32 = $(this)[_0x667f2f(0xed)]('min-character') ? $(this)[_0x667f2f(0xed)](_0x667f2f(0x106)) : 0x0;
            $(this)[_0x667f2f(0x271)]() !== '' && _0xbad43d >= _0x1f6e32 ? empReqTime = empReqTime['filter'](_0x10c6c9 => _0x10c6c9['input'] !== _0x3d77ed) : (!empReqTime['find'](_0x10b698 => _0x10b698[_0x667f2f(0x12d)] === _0x3d77ed) && empReqTime[_0x667f2f(0x23c)]({ 'input': _0x3d77ed }), unfilledArr[_0x667f2f(0x23c)]({ 'input': $(this)[_0x667f2f(0x14d)](_0x667f2f(0x22e)) })), empReqTime[_0x667f2f(0x1fc)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find'](':input[type=\x22date\x22][required]')[_0x35ac92(0x100)](function(_0x57249c) {
            const _0x461484 = _0x35ac92;
            $(this)['val']() !== '' ? empReqDate = empReqDate[_0x461484(0x1aa)](_0x207334 => _0x207334[_0x461484(0x12d)] !== _0x57249c) : (!empReqDate[_0x461484(0x10d)](_0x312588 => _0x312588[_0x461484(0x12d)] === _0x57249c) && empReqDate[_0x461484(0x23c)]({ 'input': _0x57249c }), unfilledArr[_0x461484(0x23c)]({ 'input': $(this)[_0x461484(0x14d)]('name') })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x22f))[_0x35ac92(0x100)](function(_0x34124e) {
            const _0x3eb800 = _0x35ac92;
            if ($(this)['val']() !== '') {
                let _0x1937fd = $(this)[_0x3eb800(0x271)]()[_0x3eb800(0x1fc)],
                    _0x23562b = $(this)[_0x3eb800(0xed)](_0x3eb800(0x106)) ? $(this)[_0x3eb800(0xed)]('min-character') : 0x0;
                if ($(this)[_0x3eb800(0xed)](_0x3eb800(0x101))) {
                    var _0x3a63a0 = phoneAutoFormat($(this)['data'](_0x3eb800(0x101)));
                    $(this)[_0x3eb800(0x271)](_0x3a63a0($(this)['val']()));
                }
                phoneValidation($(this)[_0x3eb800(0x271)](), _0x1937fd, _0x23562b) ? empReqTel = empReqTel[_0x3eb800(0x1aa)](_0x18aca3 => _0x18aca3[_0x3eb800(0x12d)] !== _0x34124e) : empReqTel[_0x3eb800(0x23c)]({ 'input': _0x34124e });
            } else !empReqTel['find'](_0x127808 => _0x127808[_0x3eb800(0x12d)] === _0x34124e) && empReqTel[_0x3eb800(0x23c)]({ 'input': _0x34124e }), unfilledArr[_0x3eb800(0x23c)]({ 'input': $(this)[_0x3eb800(0x14d)](_0x3eb800(0x22e)) });
            empReqTel[_0x3eb800(0x1fc)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](':input[type=\x22file\x22][required]')[_0x35ac92(0x100)](function(_0x5de51c) {
            const _0x243d89 = _0x35ac92;
            $(this)[_0x243d89(0x271)]() !== '' ? empReqFile = empReqFile[_0x243d89(0x1aa)](_0x41964a => _0x41964a['input'] !== _0x5de51c) : (!empReqFile[_0x243d89(0x10d)](_0x32ff42 => _0x32ff42[_0x243d89(0x12d)] === _0x5de51c) && empReqFile[_0x243d89(0x23c)]({ 'input': _0x5de51c }), unfilledArr[_0x243d89(0x23c)]({ 'input': $(this)[_0x243d89(0x14d)]('name') })), empReqFile[_0x243d89(0x1fc)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](':input[type=\x22number\x22][required]')[_0x35ac92(0x100)](function(_0x30f973) {
            const _0x32fd6b = _0x35ac92;
            let _0x13cb3b = $(this)[_0x32fd6b(0x271)]()[_0x32fd6b(0x1fc)],
                _0x29b3f7 = $(this)[_0x32fd6b(0xed)](_0x32fd6b(0x106)) ? $(this)[_0x32fd6b(0xed)](_0x32fd6b(0x106)) : 0x0;
            $(this)[_0x32fd6b(0x271)]() !== '' && _0x13cb3b >= _0x29b3f7 ? empReqNum = empReqNum[_0x32fd6b(0x1aa)](_0x2f472d => _0x2f472d['input'] !== _0x30f973) : (!empReqNum[_0x32fd6b(0x10d)](_0x13619b => _0x13619b[_0x32fd6b(0x12d)] === _0x30f973) && empReqNum['push']({ 'input': _0x30f973 }), unfilledArr[_0x32fd6b(0x23c)]({ 'input': $(this)['attr'](_0x32fd6b(0x22e)) })), empReqNum[_0x32fd6b(0x1fc)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1c3))[_0x35ac92(0x100)](function(_0x1166e6) {
            const _0xb1554a = _0x35ac92;
            let _0x5ddd8b = $(this)[_0xb1554a(0x271)]();
            _0x5ddd8b === '' && (_0x5ddd8b = null), _0x5ddd8b != null ? empReqSelect = empReqSelect[_0xb1554a(0x1aa)](_0x2f04d8 => _0x2f04d8[_0xb1554a(0x12d)] !== _0x1166e6) : (!empReqSelect['find'](_0x10f6be => _0x10f6be['input'] === _0x1166e6) && empReqSelect['push']({ 'input': _0x1166e6 }), unfilledArr['push']({ 'input': $(this)[_0xb1554a(0x14d)](_0xb1554a(0x22e)) })), empReqSelect['length'] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x23d))['each'](function(_0xcd3509) {
            const _0x13882c = _0x35ac92;
            let _0x58a517 = $(this)[_0x13882c(0x271)]()['length'],
                _0x269a9a = $(this)[_0x13882c(0xed)](_0x13882c(0x106)) ? $(this)['data'](_0x13882c(0x106)) : 0x0;
            $(this)[_0x13882c(0x271)]() !== '' && _0x58a517 >= _0x269a9a ? empReqTextarea = empReqTextarea[_0x13882c(0x1aa)](_0x2d205e => _0x2d205e['input'] !== _0xcd3509) : (!empReqTextarea[_0x13882c(0x10d)](_0x257e99 => _0x257e99[_0x13882c(0x12d)] === _0xcd3509) && empReqTextarea[_0x13882c(0x23c)]({ 'input': _0xcd3509 }), unfilledArr[_0x13882c(0x23c)]({ 'input': $(this)['attr']('name') })), empReqTextarea[_0x13882c(0x1fc)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x130))['each'](function() {
            const _0x8bcc04 = _0x35ac92;
            $(this)[_0x8bcc04(0x271)]() !== '' ? validateEmail($(this)[_0x8bcc04(0x271)](), $(this)[_0x8bcc04(0xed)]('block-domain'), $(this)[_0x8bcc04(0x14d)](_0x8bcc04(0x22e))) : (emailFilled = ![], unfilledArr[_0x8bcc04(0x23c)]({ 'input': $(this)[_0x8bcc04(0x14d)](_0x8bcc04(0x22e)) }));
        });
    } else {
        if ($(steps[x])['data']('card')) answer = $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x238))[_0x35ac92(0xed)]('go-to'), selections = selections['filter'](_0x77a2f5 => _0x77a2f5['step'] !== x), selections[_0x35ac92(0x23c)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))['data'](_0x35ac92(0x194)) && (answer = $(steps[x])[_0x35ac92(0x10d)]('.active-answer-card')[_0x35ac92(0xed)](_0x35ac92(0x108)), selections = selections['filter'](_0x2b1189 => _0x2b1189['step'] !== x), selections[_0x35ac92(0x23c)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        let _0x21e642 = $(steps[x])['find'](_0x35ac92(0x25f)),
            _0x28ff82 = _0x21e642['filter'](_0x35ac92(0x140)),
            _0x205b76 = _0x21e642[_0x35ac92(0x1aa)](_0x35ac92(0x1d4)),
            _0x10b25d = _0x28ff82[_0x35ac92(0x1aa)](':checked'),
            _0xafd2e9 = _0x28ff82[_0x35ac92(0x1fc)] === 0x0,
            _0x2dc47b = _0x205b76['length'],
            _0x54292e = _0x10b25d['length'];
        if (_0x21e642[_0x35ac92(0x1fc)] > 0x0) {
            if (checkCount === '*' || checkCount > _0x21e642[_0x35ac92(0x1fc)]) _0x21e642['each'](function() {
                const _0x2dc31e = _0x35ac92;
                let _0x355b6b = $(this),
                    _0x4fcf36 = _0x355b6b['is'](':checked');
                if (_0x4fcf36) {
                    checkboxFilled = !![], resetInputErrorMessage(_0x355b6b[_0x2dc31e(0x14d)]('name'));
                    if (_0xafd2e9) {
                        let _0x10360e = _0x355b6b[_0x2dc31e(0x129)](_0x2dc31e(0x123))['data'](_0x2dc31e(0xee)),
                            _0x3e1401 = _0x355b6b[_0x2dc31e(0x129)](_0x2dc31e(0x238))[_0x2dc31e(0x14d)](_0x2dc31e(0x1b2));
                        if (_0x3e1401) {
                            selections = selections[_0x2dc31e(0x1aa)](_0x374e1d => _0x374e1d[_0x2dc31e(0xf0)] !== x), selections['push']({ 'step': x, 'selected': _0x3e1401 });
                            if (_0x10360e) {
                                selections = selections[_0x2dc31e(0x1aa)](_0x345825 => _0x345825[_0x2dc31e(0xf0)] !== _0x10360e - 0x2), selections[_0x2dc31e(0x23c)]({ 'step': _0x10360e - 0x2, 'selected': _0x3e1401 });
                                let _0x39ec14 = selections['findIndex'](_0x5a691c => _0x5a691c[_0x2dc31e(0xf0)] === x);
                                selections[_0x39ec14]['skipTo'] = parseInt(_0x10360e) - 0x1, selections[_0x39ec14][_0x2dc31e(0x23b)] = x;
                            }
                        }
                    }
                } else checkboxFilled = ![], unfilledArr['push']({ 'input': _0x355b6b[_0x2dc31e(0x14d)](_0x2dc31e(0x22e)) });
            });
            else {
                if (_0x2dc47b >= checkCount) {
                    if (_0x28ff82[_0x35ac92(0x1fc)] > 0x0) {
                        if (_0x28ff82[_0x35ac92(0x1fc)] === _0x54292e) {
                            let _0x4cdd65 = _0x205b76['first'](),
                                _0xd305b5 = _0x4cdd65[_0x35ac92(0x129)](_0x35ac92(0x123))['data']('skip-to'),
                                _0x2fc92a = _0x4cdd65['closest']('[data-go-to]')[_0x35ac92(0x14d)](_0x35ac92(0x1b2));
                            if (_0x2fc92a) {
                                selections = selections[_0x35ac92(0x1aa)](_0x57f74f => _0x57f74f['step'] !== x), selections['push']({ 'step': x, 'selected': _0x2fc92a });
                                if (_0xd305b5) {
                                    selections = selections['filter'](_0x4e2086 => _0x4e2086['step'] !== _0xd305b5 - 0x2), selections['push']({ 'step': _0xd305b5 - 0x2, 'selected': _0x2fc92a });
                                    let _0x39b884 = selections['findIndex'](_0x1eb056 => _0x1eb056[_0x35ac92(0xf0)] === x);
                                    selections[_0x39b884][_0x35ac92(0x1e0)] = parseInt(_0xd305b5) - 0x1, selections[_0x39b884]['backTo'] = x;
                                }
                            }
                            checkboxFilled = !![], resetInputErrorMessage(_0x28ff82[_0x35ac92(0x1a2)]()[_0x35ac92(0x14d)](_0x35ac92(0x22e)));
                        } else checkboxFilled = ![], _0x28ff82[_0x35ac92(0x14e)](':checked')[_0x35ac92(0x100)](function() {
                            const _0x1c0a22 = _0x35ac92;
                            unfilledArr['push']({ 'input': $(this)[_0x1c0a22(0x14d)](_0x1c0a22(0x22e)) });
                        });
                    } else {
                        if (maxCheckCount > _0x2dc47b) {
                            let _0x29b638 = _0x205b76[_0x35ac92(0x1a2)](),
                                _0x1e1957 = _0x29b638['closest'](_0x35ac92(0x123))[_0x35ac92(0xed)]('skip-to'),
                                _0x14622a = _0x29b638[_0x35ac92(0x129)](_0x35ac92(0x238))['attr'](_0x35ac92(0x1b2));
                            if (_0x14622a) {
                                selections = selections[_0x35ac92(0x1aa)](_0x1062b0 => _0x1062b0[_0x35ac92(0xf0)] !== x), selections[_0x35ac92(0x23c)]({ 'step': x, 'selected': _0x14622a });
                                if (_0x1e1957) {
                                    selections = selections[_0x35ac92(0x1aa)](_0x39f827 => _0x39f827[_0x35ac92(0xf0)] !== _0x1e1957 - 0x2), selections[_0x35ac92(0x23c)]({ 'step': _0x1e1957 - 0x2, 'selected': _0x14622a });
                                    let _0x2e8aa4 = selections['findIndex'](_0x5d20f3 => _0x5d20f3[_0x35ac92(0xf0)] === x);
                                    selections[_0x2e8aa4][_0x35ac92(0x1e0)] = parseInt(_0x1e1957) - 0x1, selections[_0x2e8aa4]['backTo'] = x;
                                }
                            }
                            checkboxFilled = !![], $(steps[x])['find'](_0x35ac92(0x24c))['parent']('label')[_0x35ac92(0x1b4)](_0x35ac92(0x1f0)), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x24c))['prop'](_0x35ac92(0x1f0), ![]);
                        } else maxCheckCount > 0x0 && ($(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x24c))[_0x35ac92(0x213)](_0x35ac92(0x1bb))[_0x35ac92(0x192)](_0x35ac92(0x1f0)), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x24c))[_0x35ac92(0x25c)](_0x35ac92(0x1f0), !![]));
                    }
                } else checkCount > 0x0 && (checkboxFilled = ![], _0x28ff82[_0x35ac92(0x14e)](_0x35ac92(0x1d4))[_0x35ac92(0x100)](function() {
                    const _0x1451ba = _0x35ac92;
                    unfilledArr[_0x1451ba(0x23c)]({ 'input': $(this)[_0x1451ba(0x14d)]('name') });
                }), unfilledArr['push']({ 'input': _0x21e642[_0x35ac92(0x1a2)]()['attr']('name') }));
            }
        }
        $(steps[x])['find']('.active-answer-card')[_0x35ac92(0x10d)]('input:radio[required]')[_0x35ac92(0x100)](function(_0x5ba65d) {
            const _0x7a7287 = _0x35ac92;
            var _0x1a278d = $(this)[_0x7a7287(0x14d)](_0x7a7287(0x22e));
            $(_0x7a7287(0x162) + _0x1a278d + _0x7a7287(0x23a))[_0x7a7287(0x1fc)] == 0x0 ? (!empReqRadio[_0x7a7287(0x10d)](_0x31f280 => _0x31f280[_0x7a7287(0x12d)] === _0x5ba65d) && empReqRadio['push']({ 'input': _0x5ba65d }), unfilledArr[_0x7a7287(0x23c)]({ 'input': $(this)[_0x7a7287(0x14d)](_0x7a7287(0x22e)) })) : empReqRadio = empReqRadio[_0x7a7287(0x1aa)](_0x33da24 => _0x33da24['input'] !== _0x5ba65d), empReqRadio['length'] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x120))['each'](function(_0x48eb3c) {
            const _0x2623e6 = _0x35ac92;
            let _0x271777 = $(this)[_0x2623e6(0x271)]()[_0x2623e6(0x1fc)],
                _0x1dac4c = $(this)[_0x2623e6(0xed)](_0x2623e6(0x106)) ? $(this)[_0x2623e6(0xed)](_0x2623e6(0x106)) : 0x0;
            $(this)[_0x2623e6(0x271)]() !== '' && _0x271777 >= _0x1dac4c ? empReqInput = empReqInput[_0x2623e6(0x1aa)](_0x1c06fd => _0x1c06fd[_0x2623e6(0x12d)] !== _0x48eb3c) : (!empReqInput[_0x2623e6(0x10d)](_0x59bdb9 => _0x59bdb9[_0x2623e6(0x12d)] === _0x48eb3c) && empReqInput['push']({ 'input': _0x48eb3c }), unfilledArr[_0x2623e6(0x23c)]({ 'input': $(this)[_0x2623e6(0x14d)](_0x2623e6(0x22e)) })), empReqInput[_0x2623e6(0x1fc)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x1f2))['each'](function(_0x4c7c38) {
            const _0x1bdfe8 = _0x35ac92;
            skipTo = undefined, $(this)[_0x1bdfe8(0x13a)](_0x1bdfe8(0x123))[_0x1bdfe8(0xed)](_0x1bdfe8(0xee)) !== '' && (skipTo = $(this)[_0x1bdfe8(0x13a)](_0x1bdfe8(0x123))[_0x1bdfe8(0xed)](_0x1bdfe8(0xee))), $(this)[_0x1bdfe8(0x13a)]('[data-go-to]')[_0x1bdfe8(0x14d)](_0x1bdfe8(0x1b2)) && (answer = $(this)[_0x1bdfe8(0x13a)](_0x1bdfe8(0x238))[_0x1bdfe8(0x14d)]('data-go-to'), selections = selections[_0x1bdfe8(0x1aa)](_0x35b816 => _0x35b816[_0x1bdfe8(0xf0)] !== x), selections[_0x1bdfe8(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1bdfe8(0x1aa)](_0x177be7 => _0x177be7[_0x1bdfe8(0xf0)] !== skipTo - 0x2), selections[_0x1bdfe8(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1bdfe8(0x27e)](_0x178792 => _0x178792[_0x1bdfe8(0xf0)] === x), selections[objIndex][_0x1bdfe8(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1bdfe8(0x23b)] = x));
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x1d9))['each'](function(_0x1b95e0) {
            const _0x5ce7a2 = _0x35ac92;
            let _0x4444a1 = $(this)['val']()['length'],
                _0x5ca126 = $(this)[_0x5ce7a2(0xed)](_0x5ce7a2(0x106)) ? $(this)[_0x5ce7a2(0xed)](_0x5ce7a2(0x106)) : 0x0;
            $(this)['val']() !== '' && _0x4444a1 >= _0x5ca126 ? empReqPassword = empReqPassword[_0x5ce7a2(0x1aa)](_0x4cc33e => _0x4cc33e[_0x5ce7a2(0x12d)] !== _0x1b95e0) : (!empReqPassword[_0x5ce7a2(0x10d)](_0x13226a => _0x13226a['input'] === _0x1b95e0) && empReqPassword[_0x5ce7a2(0x23c)]({ 'input': _0x1b95e0 }), unfilledArr['push']({ 'input': $(this)[_0x5ce7a2(0x14d)](_0x5ce7a2(0x22e)) })), empReqPassword[_0x5ce7a2(0x1fc)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x17b))[_0x35ac92(0x100)](function(_0x1bd26e) {
            const _0x3a3270 = _0x35ac92;
            skipTo = undefined, $(this)[_0x3a3270(0x13a)](_0x3a3270(0x123))[_0x3a3270(0xed)]('skip-to') !== '' && (skipTo = $(this)[_0x3a3270(0x13a)](_0x3a3270(0x123))[_0x3a3270(0xed)](_0x3a3270(0xee))), $(this)[_0x3a3270(0x13a)](_0x3a3270(0x238))[_0x3a3270(0x14d)](_0x3a3270(0x1b2)) && (answer = $(this)[_0x3a3270(0x13a)](_0x3a3270(0x238))[_0x3a3270(0x14d)](_0x3a3270(0x1b2)), selections = selections[_0x3a3270(0x1aa)](_0x33ad4c => _0x33ad4c[_0x3a3270(0xf0)] !== x), selections[_0x3a3270(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3a3270(0x1aa)](_0x37124c => _0x37124c['step'] !== skipTo - 0x2), selections[_0x3a3270(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x3b05c4 => _0x3b05c4['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3a3270(0x23b)] = x));
        }), $(steps[x])['find'](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x198))['each'](function(_0xf00435) {
            const _0x4189c1 = _0x35ac92;
            let _0x423b0e = $(this)[_0x4189c1(0x271)]()[_0x4189c1(0x1fc)],
                _0x37c4de = $(this)[_0x4189c1(0xed)](_0x4189c1(0x106)) ? $(this)[_0x4189c1(0xed)](_0x4189c1(0x106)) : 0x0;
            $(this)['val']() !== '' && _0x423b0e >= _0x37c4de ? empReqUrl = empReqUrl[_0x4189c1(0x1aa)](_0x160b57 => _0x160b57[_0x4189c1(0x12d)] !== _0xf00435) : (!empReqUrl[_0x4189c1(0x10d)](_0x60a5d2 => _0x60a5d2[_0x4189c1(0x12d)] === _0xf00435) && empReqUrl[_0x4189c1(0x23c)]({ 'input': _0xf00435 }), unfilledArr['push']({ 'input': $(this)[_0x4189c1(0x14d)]('name') })), empReqUrl[_0x4189c1(0x1fc)] === 0x0 && validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x157))[_0x35ac92(0x100)](function(_0xcccc5a) {
            const _0x3d899b = _0x35ac92;
            skipTo = undefined, $(this)[_0x3d899b(0x13a)](_0x3d899b(0x123))[_0x3d899b(0xed)](_0x3d899b(0xee)) !== '' && (skipTo = $(this)['parents'](_0x3d899b(0x123))[_0x3d899b(0xed)](_0x3d899b(0xee))), $(this)[_0x3d899b(0x13a)](_0x3d899b(0x238))[_0x3d899b(0x14d)]('data-go-to') && (answer = $(this)[_0x3d899b(0x13a)](_0x3d899b(0x238))[_0x3d899b(0x14d)](_0x3d899b(0x1b2)), selections = selections['filter'](_0xf71902 => _0xf71902[_0x3d899b(0xf0)] !== x), selections[_0x3d899b(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3d899b(0x1aa)](_0x4f2cca => _0x4f2cca[_0x3d899b(0xf0)] !== skipTo - 0x2), selections[_0x3d899b(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3d899b(0x27e)](_0x235358 => _0x235358[_0x3d899b(0xf0)] === x), selections[objIndex][_0x3d899b(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3d899b(0x23b)] = x));
        }), $(steps[x])['find'](_0x35ac92(0x1cd))['find'](_0x35ac92(0x251))['each'](function(_0x46c7fd) {
            const _0x30a1cd = _0x35ac92;
            $(this)['val']() !== '' ? empReqDate = empReqDate[_0x30a1cd(0x1aa)](_0x4373dc => _0x4373dc[_0x30a1cd(0x12d)] !== _0x46c7fd) : (!empReqDate['find'](_0x2be7c8 => _0x2be7c8[_0x30a1cd(0x12d)] === _0x46c7fd) && empReqDate['push']({ 'input': _0x46c7fd }), unfilledArr[_0x30a1cd(0x23c)]({ 'input': $(this)['attr'](_0x30a1cd(0x22e)) })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x208))[_0x35ac92(0x100)](function(_0x295ffa) {
            const _0x46e391 = _0x35ac92;
            skipTo = undefined, $(this)[_0x46e391(0x13a)](_0x46e391(0x123))[_0x46e391(0xed)](_0x46e391(0xee)) !== '' && (skipTo = $(this)['parents'](_0x46e391(0x123))[_0x46e391(0xed)](_0x46e391(0xee))), $(this)[_0x46e391(0x13a)](_0x46e391(0x238))[_0x46e391(0x14d)](_0x46e391(0x1b2)) && (answer = $(this)[_0x46e391(0x13a)](_0x46e391(0x238))['attr'](_0x46e391(0x1b2)), selections = selections[_0x46e391(0x1aa)](_0x3c2f6e => _0x3c2f6e[_0x46e391(0xf0)] !== x), selections[_0x46e391(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x46e391(0x1aa)](_0x2f72e0 => _0x2f72e0[_0x46e391(0xf0)] !== skipTo - 0x2), selections[_0x46e391(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x46e391(0x27e)](_0x4da21c => _0x4da21c['step'] === x), selections[objIndex][_0x46e391(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x46e391(0x23b)] = x));
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x124))[_0x35ac92(0x100)](function(_0x42e099) {
            const _0x1f2e8f = _0x35ac92;
            $(this)[_0x1f2e8f(0x271)]() !== '' ? empReqTime = empReqTime['filter'](_0xcfed9e => _0xcfed9e['input'] !== _0x42e099) : (!empReqTime[_0x1f2e8f(0x10d)](_0xcc03b0 => _0xcc03b0[_0x1f2e8f(0x12d)] === _0x42e099) && empReqTime[_0x1f2e8f(0x23c)]({ 'input': _0x42e099 }), unfilledArr[_0x1f2e8f(0x23c)]({ 'input': $(this)['attr']('name') })), empReqTime[_0x1f2e8f(0x1fc)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')[_0x35ac92(0x10d)](':input[type=\x22time\x22]')[_0x35ac92(0x100)](function(_0x39eeb9) {
            const _0x3800b5 = _0x35ac92;
            skipTo = undefined, $(this)['parents'](_0x3800b5(0x123))['data'](_0x3800b5(0xee)) !== '' && (skipTo = $(this)['parents'](_0x3800b5(0x123))[_0x3800b5(0xed)](_0x3800b5(0xee))), $(this)[_0x3800b5(0x13a)](_0x3800b5(0x238))['attr'](_0x3800b5(0x1b2)) && (answer = $(this)[_0x3800b5(0x13a)](_0x3800b5(0x238))[_0x3800b5(0x14d)](_0x3800b5(0x1b2)), selections = selections['filter'](_0x31de5d => _0x31de5d['step'] !== x), selections[_0x3800b5(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3800b5(0x1aa)](_0x3039bd => _0x3039bd[_0x3800b5(0xf0)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3800b5(0x27e)](_0x13df9d => _0x13df9d[_0x3800b5(0xf0)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3800b5(0x23b)] = x));
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x252))['each'](function(_0x540d2c) {
            const _0x5d8b5f = _0x35ac92;
            let _0x4c8aea = $(this)['val']()[_0x5d8b5f(0x1fc)],
                _0x2e7d72 = $(this)[_0x5d8b5f(0xed)](_0x5d8b5f(0x106)) ? $(this)['data'](_0x5d8b5f(0x106)) : 0x0;
            $(this)[_0x5d8b5f(0x271)]() !== '' && _0x4c8aea >= _0x2e7d72 ? empReqNum = empReqNum[_0x5d8b5f(0x1aa)](_0x2574c8 => _0x2574c8[_0x5d8b5f(0x12d)] !== _0x540d2c) : (!empReqNum[_0x5d8b5f(0x10d)](_0x3fb303 => _0x3fb303[_0x5d8b5f(0x12d)] === _0x540d2c) && empReqNum[_0x5d8b5f(0x23c)]({ 'input': _0x540d2c }), unfilledArr[_0x5d8b5f(0x23c)]({ 'input': $(this)['attr']('name') })), empReqNum[_0x5d8b5f(0x1fc)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])['find'](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x115))[_0x35ac92(0x100)](function(_0xecb244) {
            const _0x4deeaa = _0x35ac92;
            skipTo = undefined, $(this)[_0x4deeaa(0x13a)](_0x4deeaa(0x123))['data'](_0x4deeaa(0xee)) !== '' && (skipTo = $(this)[_0x4deeaa(0x13a)](_0x4deeaa(0x123))[_0x4deeaa(0xed)](_0x4deeaa(0xee))), $(this)[_0x4deeaa(0x13a)](_0x4deeaa(0x238))[_0x4deeaa(0x14d)]('data-go-to') && (answer = $(this)[_0x4deeaa(0x13a)](_0x4deeaa(0x238))[_0x4deeaa(0x14d)]('data-go-to'), selections = selections[_0x4deeaa(0x1aa)](_0x3ee5ed => _0x3ee5ed['step'] !== x), selections[_0x4deeaa(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x352c84 => _0x352c84[_0x4deeaa(0xf0)] !== skipTo - 0x2), selections[_0x4deeaa(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4deeaa(0x27e)](_0x469da0 => _0x469da0[_0x4deeaa(0xf0)] === x), selections[objIndex][_0x4deeaa(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4deeaa(0x23b)] = x));
        }), $(steps[x])[_0x35ac92(0x10d)]('.active-answer-card')[_0x35ac92(0x10d)](_0x35ac92(0x22f))[_0x35ac92(0x100)](function(_0x52a522) {
            const _0x4a9218 = _0x35ac92;
            if ($(this)[_0x4a9218(0x271)]() !== '') {
                let _0x1be87f = $(this)[_0x4a9218(0x271)]()[_0x4a9218(0x1fc)],
                    _0x1671ce = $(this)[_0x4a9218(0xed)](_0x4a9218(0x106)) ? $(this)['data']('min-character') : 0x0;
                if ($(this)[_0x4a9218(0xed)](_0x4a9218(0x101))) {
                    var _0x5cd655 = phoneAutoFormat($(this)[_0x4a9218(0xed)](_0x4a9218(0x101)));
                    $(this)['val'](_0x5cd655($(this)['val']()));
                }
                phoneValidation($(this)[_0x4a9218(0x271)](), _0x1be87f, _0x1671ce) ? empReqTel = empReqTel[_0x4a9218(0x1aa)](_0x579a12 => _0x579a12[_0x4a9218(0x12d)] !== _0x52a522) : empReqTel['push']({ 'input': _0x52a522 });
            } else !empReqTel['find'](_0x39266e => _0x39266e[_0x4a9218(0x12d)] === _0x52a522) && empReqTel[_0x4a9218(0x23c)]({ 'input': _0x52a522 }), unfilledArr['push']({ 'input': $(this)[_0x4a9218(0x14d)](_0x4a9218(0x22e)) });
            empReqTel[_0x4a9218(0x1fc)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x1dc))[_0x35ac92(0x100)](function(_0x5b9b7c) {
            const _0x446c0b = _0x35ac92;
            skipTo = undefined, $(this)['parents'](_0x446c0b(0x123))['data'](_0x446c0b(0xee)) !== '' && (skipTo = $(this)[_0x446c0b(0x13a)](_0x446c0b(0x123))[_0x446c0b(0xed)](_0x446c0b(0xee))), $(this)[_0x446c0b(0x13a)](_0x446c0b(0x238))[_0x446c0b(0x14d)](_0x446c0b(0x1b2)) && (answer = $(this)[_0x446c0b(0x13a)](_0x446c0b(0x238))[_0x446c0b(0x14d)](_0x446c0b(0x1b2)), selections = selections[_0x446c0b(0x1aa)](_0x5d3c00 => _0x5d3c00[_0x446c0b(0xf0)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x446c0b(0x1aa)](_0x40a159 => _0x40a159['step'] !== skipTo - 0x2), selections[_0x446c0b(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x37cf3b => _0x37cf3b['step'] === x), selections[objIndex][_0x446c0b(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])['find'](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](':input[type=\x22file\x22][required]')[_0x35ac92(0x100)](function(_0x352a21) {
            const _0x369c98 = _0x35ac92;
            $(this)[_0x369c98(0x271)]() !== '' ? empReqFile = empReqFile[_0x369c98(0x1aa)](_0xb3710f => _0xb3710f['input'] !== _0x352a21) : (!empReqFile[_0x369c98(0x10d)](_0xc1556a => _0xc1556a[_0x369c98(0x12d)] === _0x352a21) && empReqFile['push']({ 'input': _0x352a21 }), unfilledArr['push']({ 'input': $(this)[_0x369c98(0x14d)]('name') })), empReqFile[_0x369c98(0x1fc)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])['find'](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](':input[type=\x22file\x22]')[_0x35ac92(0x100)](function(_0x559506) {
            const _0x19e59f = _0x35ac92;
            skipTo = undefined, $(this)[_0x19e59f(0x13a)](_0x19e59f(0x123))[_0x19e59f(0xed)](_0x19e59f(0xee)) !== '' && (skipTo = $(this)['parents'](_0x19e59f(0x123))['data'](_0x19e59f(0xee))), $(this)[_0x19e59f(0x13a)](_0x19e59f(0x238))['attr'](_0x19e59f(0x1b2)) && (answer = $(this)[_0x19e59f(0x13a)]('[data-go-to]')['attr'](_0x19e59f(0x1b2)), selections = selections[_0x19e59f(0x1aa)](_0x135d55 => _0x135d55[_0x19e59f(0xf0)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x19e59f(0x1aa)](_0x55f6e0 => _0x55f6e0[_0x19e59f(0xf0)] !== skipTo - 0x2), selections[_0x19e59f(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x19e59f(0x27e)](_0x549a86 => _0x549a86['step'] === x), selections[objIndex][_0x19e59f(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))['find'](_0x35ac92(0x1c3))[_0x35ac92(0x100)](function(_0x152e9c) {
            const _0x118458 = _0x35ac92;
            $(this)[_0x118458(0x271)]() !== null && $(this)[_0x118458(0x271)]() !== '' ? empReqSelect = empReqSelect[_0x118458(0x1aa)](_0x29423e => _0x29423e[_0x118458(0x12d)] !== _0x152e9c) : (!empReqSelect[_0x118458(0x10d)](_0x3d7a57 => _0x3d7a57['input'] === _0x152e9c) && empReqSelect[_0x118458(0x23c)]({ 'input': _0x152e9c }), unfilledArr[_0x118458(0x23c)]({ 'input': $(this)[_0x118458(0x14d)](_0x118458(0x22e)) })), empReqSelect[_0x118458(0x1fc)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)]('select')['each'](function(_0x9346d6) {
            const _0x38c5ee = _0x35ac92;
            skipTo = undefined, $(this)[_0x38c5ee(0x13a)]('[data-skip-to]')[_0x38c5ee(0xed)](_0x38c5ee(0xee)) !== '' && (skipTo = $(this)['parents'](_0x38c5ee(0x123))[_0x38c5ee(0xed)](_0x38c5ee(0xee))), $(this)[_0x38c5ee(0x13a)](_0x38c5ee(0x238))[_0x38c5ee(0x14d)](_0x38c5ee(0x1b2)) && (answer = $(this)['parents'](_0x38c5ee(0x238))['attr']('data-go-to'), selections = selections[_0x38c5ee(0x1aa)](_0x5e0a99 => _0x5e0a99[_0x38c5ee(0xf0)] !== x), selections[_0x38c5ee(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x38c5ee(0x1aa)](_0x20eed2 => _0x20eed2[_0x38c5ee(0xf0)] !== skipTo - 0x2), selections[_0x38c5ee(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x24c462 => _0x24c462[_0x38c5ee(0xf0)] === x), selections[objIndex][_0x38c5ee(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x38c5ee(0x23b)] = x));
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))['find'](_0x35ac92(0x23d))['each'](function(_0x29c126) {
            const _0x1c52e0 = _0x35ac92;
            let _0x5c00ed = $(this)[_0x1c52e0(0x271)]()[_0x1c52e0(0x1fc)],
                _0x652854 = $(this)['data']('min-character') ? $(this)['data'](_0x1c52e0(0x106)) : 0x0;
            $(this)[_0x1c52e0(0x271)]() !== '' && _0x5c00ed >= _0x652854 ? empReqTextarea = empReqTextarea[_0x1c52e0(0x1aa)](_0x120991 => _0x120991['input'] !== _0x29c126) : (!empReqTextarea['find'](_0x48d7c6 => _0x48d7c6[_0x1c52e0(0x12d)] === _0x29c126) && empReqTextarea['push']({ 'input': _0x29c126 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x1c52e0(0x22e)) })), empReqTextarea[_0x1c52e0(0x1fc)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])['find'](_0x35ac92(0x1cd))['find'](_0x35ac92(0x1fe))['each'](function(_0x6a7128) {
            const _0xc3b589 = _0x35ac92;
            skipTo = undefined, $(this)[_0xc3b589(0x13a)](_0xc3b589(0x123))['data'](_0xc3b589(0xee)) !== '' && (skipTo = $(this)[_0xc3b589(0x13a)](_0xc3b589(0x123))[_0xc3b589(0xed)](_0xc3b589(0xee))), $(this)[_0xc3b589(0x13a)](_0xc3b589(0x238))['attr']('data-go-to') && (answer = $(this)['parents']('[data-go-to]')[_0xc3b589(0x14d)](_0xc3b589(0x1b2)), selections = selections['filter'](_0x3dd346 => _0x3dd346[_0xc3b589(0xf0)] !== x), selections[_0xc3b589(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0xc3b589(0x1aa)](_0x1f15fe => _0x1f15fe['step'] !== skipTo - 0x2), selections[_0xc3b589(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x30743e => _0x30743e[_0xc3b589(0xf0)] === x), selections[objIndex][_0xc3b589(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))['find'](_0x35ac92(0x130))[_0x35ac92(0x100)](function(_0x3ad406) {
            const _0x15434e = _0x35ac92;
            $(this)[_0x15434e(0x271)]() !== '' ? validateEmail($(this)[_0x15434e(0x271)](), $(this)[_0x15434e(0xed)](_0x15434e(0x16e)), $(this)[_0x15434e(0x14d)](_0x15434e(0x22e))) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x15434e(0x14d)](_0x15434e(0x22e)) }));
        }), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](':input[type=\x22email\x22]')[_0x35ac92(0x100)](function(_0x3871e5) {
            const _0x4c61d5 = _0x35ac92;
            skipTo = undefined, $(this)[_0x4c61d5(0x13a)](_0x4c61d5(0x123))[_0x4c61d5(0xed)]('skip-to') !== '' && (skipTo = $(this)[_0x4c61d5(0x13a)]('[data-skip-to]')['data'](_0x4c61d5(0xee))), $(this)[_0x4c61d5(0x13a)](_0x4c61d5(0x238))[_0x4c61d5(0x14d)](_0x4c61d5(0x1b2)) && (answer = $(this)['parents']('[data-go-to]')['attr']('data-go-to'), selections = selections[_0x4c61d5(0x1aa)](_0x1a0e31 => _0x1a0e31['step'] !== x), console['log'](_0x4c61d5(0x15c), selections, x), selections[_0x4c61d5(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4c61d5(0x1aa)](_0x3b1dfe => _0x3b1dfe[_0x4c61d5(0xf0)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4c61d5(0x27e)](_0x104197 => _0x104197[_0x4c61d5(0xf0)] === x), selections[objIndex][_0x4c61d5(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        });
    }
    $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x147))['is'](_0x35ac92(0x1d4)) && (selArr = [], $(steps)[_0x35ac92(0x10d)](_0x35ac92(0xf5))[_0x35ac92(0x100)](function(_0x52b02c, _0x17a961) {
        const _0x3da777 = _0x35ac92;
        selArr[_0x3da777(0x23c)]({ 'selected': $(this)[_0x3da777(0xed)](_0x3da777(0x1b3)) });
    }), selString = [], selArr[_0x35ac92(0x24a)](_0x3ab7b8 => selString[_0x35ac92(0x23c)](_0x3ab7b8['selected'])), $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x1cd))[_0x35ac92(0x10d)](_0x35ac92(0x1e6))['each'](function() {
        const _0x5ab826 = _0x35ac92;
        skipTo = undefined;
        if ($(this)[_0x5ab826(0x13a)](_0x5ab826(0x123))[_0x5ab826(0xed)]('skip-to')) skipTo = $(this)[_0x5ab826(0x13a)]('[data-skip-to]')['data'](_0x5ab826(0xee));
        else $(this)[_0x5ab826(0xed)](_0x5ab826(0xee)) && (skipTo = $(this)['data']('skip-to'));
        selections = selections['filter'](_0x2fcd16 => _0x2fcd16[_0x5ab826(0xf0)] !== x);
        if ($(this)[_0x5ab826(0xed)](_0x5ab826(0x108))) answer = $(this)[_0x5ab826(0x14d)]('data-go-to'), selections[_0x5ab826(0x23c)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5ab826(0x1aa)](_0x23fa86 => _0x23fa86[_0x5ab826(0xf0)] !== skipTo - 0x2), selections[_0x5ab826(0x23c)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5ab826(0x27e)](_0x295eb3 => _0x295eb3[_0x5ab826(0xf0)] === x), selections[objIndex][_0x5ab826(0x1e0)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5ab826(0x23b)] = x);
        else $(this)[_0x5ab826(0x13a)](_0x5ab826(0x238))[_0x5ab826(0xed)](_0x5ab826(0x108)) && (answer = $(this)[_0x5ab826(0x13a)]('[data-go-to]')[_0x5ab826(0xed)](_0x5ab826(0x108)), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5ab826(0x1aa)](_0x4af568 => _0x4af568[_0x5ab826(0xf0)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5ab826(0x27e)](_0xcb55d9 => _0xcb55d9[_0x5ab826(0xf0)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5ab826(0x23b)] = x));
    }), logicExtra ? ($(steps[x])[_0x35ac92(0x10d)]('.active-answer-card')['find']('[data-radio-skip]:visible')[_0x35ac92(0xed)](_0x35ac92(0x200)) === !![] || $(steps[x])[_0x35ac92(0x10d)](_0x35ac92(0x125))[_0x35ac92(0xed)](_0x35ac92(0x200)) === !![]) && (skip && selections['filter'](_0x5b584c => _0x5b584c[_0x35ac92(0xf0)] === x)[_0x35ac92(0x1fc)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find'](_0x35ac92(0x232))[_0x35ac92(0xed)](_0x35ac92(0x18a))))) : $(steps[x])[_0x35ac92(0x10d)]('[data-radio-skip]:visible')[_0x35ac92(0xed)](_0x35ac92(0x200)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find']('[data-radio-delay]')[_0x35ac92(0xed)](_0x35ac92(0x18a)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function disableRadioQuickTap() {
    const _0x4c5f88 = _0x3f73aa,
        _0x471f85 = 0x1f4;
    $(_0x4c5f88(0x19b))['on'](_0x4c5f88(0x21c), function(_0x404c64) {
        const _0x4654ef = _0x4c5f88,
            _0x5e2255 = $(this);
        if (_0x5e2255[_0x4654ef(0x25c)]('disabled')) { _0x404c64['preventDefault'](); return; }
        _0x5e2255['prop']('disabled', !![]), setTimeout(() => {
            const _0x158d5c = _0x4654ef;
            _0x5e2255[_0x158d5c(0x25c)](_0x158d5c(0x1f0), ![]);
        }, _0x471f85);
    });
}

function displayErrorMessage() {
    const _0x325de8 = _0x3f73aa;
    $(_0x325de8(0x156))['hide'](), unfilledArr[_0x325de8(0x1fc)] > 0x0 && unfilledArr['forEach'](function(_0x382b21) {
        const _0x15ff04 = _0x325de8;
        $('input[name=\x22' + _0x382b21[_0x15ff04(0x12d)] + '\x22]')['siblings'](_0x15ff04(0x156))['fadeIn'](), $(_0x15ff04(0x1f7) + _0x382b21[_0x15ff04(0x12d)] + '\x22]')[_0x15ff04(0x13a)]()[_0x15ff04(0x250)](_0x15ff04(0x156))[_0x15ff04(0x1ea)](), $('textarea[name=\x22' + _0x382b21[_0x15ff04(0x12d)] + '\x22]')[_0x15ff04(0x225)]('[data-text=\x22error-message\x22]')[_0x15ff04(0x1ea)](), $('select[name=\x22' + _0x382b21['input'] + '\x22]')['siblings'](_0x15ff04(0x156))[_0x15ff04(0x1ea)]();
    });
}

function resetInputErrorMessage(_0x5b83f3) {
    const _0x47b272 = _0x3f73aa;
    $('input[name=\x22' + _0x5b83f3 + '\x22]')[_0x47b272(0x225)](_0x47b272(0x156))[_0x47b272(0x1bc)](), $(_0x47b272(0x1f7) + _0x5b83f3 + '\x22]')[_0x47b272(0x13a)]()['children'](_0x47b272(0x156))['hide'](), $(_0x47b272(0x1f8) + _0x5b83f3 + '\x22]')[_0x47b272(0x225)](_0x47b272(0x156))[_0x47b272(0x1bc)](), $('select[name=\x22' + _0x5b83f3 + '\x22]')[_0x47b272(0x225)](_0x47b272(0x156))[_0x47b272(0x1bc)]();
}

function increaseCurstep() {
    const _0x348348 = _0x3f73aa;
    countCard ? (curStep = x + 0x1, $('[data-text=\x22total-steps\x22]')[_0x348348(0x1ab)](steps['length'])) : $(steps[x])[_0x348348(0xed)](_0x348348(0x194)) ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x348348(0x184))[_0x348348(0x1ab)](curStep);
}

function decreaseCurstep() {
    const _0x215896 = _0x3f73aa;
    countCard ? (curStep = x - 0x1, $('[data-text=\x22total-steps\x22]')[_0x215896(0x1ab)](steps[_0x215896(0x1fc)])) : $(steps[x])[_0x215896(0xed)]('card') ? curStep = x - 0x0 : curStep = x - 0x1, $(_0x215896(0x184))['text'](curStep);
}
$(_0x3f73aa(0x168))['on'](_0x3f73aa(0x21c), function(_0x54796f) {
    const _0xb577a8 = _0x3f73aa;
    _0x54796f[_0xb577a8(0x1b5)](), _0x54796f[_0xb577a8(0x276)]();
    $(this)[_0xb577a8(0xed)]('redirect') && (redirectTo = $(this)[_0xb577a8(0xed)]('redirect'));
    !$(this)['data'](_0xb577a8(0x19f)) && (newTab = $(this)[_0xb577a8(0xed)](_0xb577a8(0x19f)));
    successCard = $(this)[_0xb577a8(0xed)](_0xb577a8(0x1c1));
    const _0x1bf5c6 = new URLSearchParams(window[_0xb577a8(0x21d)][_0xb577a8(0x1dd)]),
        _0x47e327 = (_0x26b519, _0x31059d) => {
            const _0x141a76 = _0xb577a8,
                _0x5a4efe = document[_0x141a76(0x248)](_0x141a76(0x1c5) + _0x26b519 + '\x22]');
            _0x5a4efe && (_0x5a4efe['value'] = _0x31059d);
        };
    _0x47e327('referrer', _0x1bf5c6['get'](_0xb577a8(0x185)) || document[_0xb577a8(0x185)] || 'Direct'), _0x47e327(_0xb577a8(0x255), navigator['userAgent']), _0x47e327(_0xb577a8(0x136), new Date()[_0xb577a8(0x12b)]()), _0x47e327(_0xb577a8(0x218), Intl['DateTimeFormat']()[_0xb577a8(0x214)]()[_0xb577a8(0x11f)]), _0x47e327('screen-resolution', window['screen'][_0xb577a8(0x181)] + 'x' + window[_0xb577a8(0x11b)][_0xb577a8(0x18d)]), _0x47e327(_0xb577a8(0x26d), _0xb577a8(0x1a5));
    const _0x4de0a5 = () => {
        const _0x435607 = _0xb577a8,
            _0x260f7a = document[_0x435607(0x248)](_0x435607(0x206));
        if (_0x260f7a) {
            const _0x1d3312 = localStorage[_0x435607(0x137)](_0x435607(0x144));
            console['log'](_0x1d3312);
            if (_0x1d3312) {
                const _0x53c877 = Math['round']((Date[_0x435607(0x14f)]() - parseInt(_0x1d3312)) / 0x3e8);
                _0x260f7a[_0x435607(0x1ff)] = _0x53c877 + _0x435607(0x11a);
            } else _0x260f7a[_0x435607(0x1ff)] = _0x435607(0x1a5);
        }
    };
    _0x4de0a5(), logicExtra && fill && ($(this)[_0xb577a8(0x25c)]('novalidate', !![]), $(steps)[_0xb577a8(0x10d)](_0xb577a8(0x217))[_0xb577a8(0x25c)](_0xb577a8(0x1c9), ![]), console[_0xb577a8(0x1ca)]('nonvalidated')), localStorage[_0xb577a8(0x1cf)](_0xb577a8(0x1ec)), localStorage[_0xb577a8(0x1cf)](_0xb577a8(0x144)), localStorage[_0xb577a8(0x1cf)](_0xb577a8(0x19e)), typeof formlyCustomFunction === _0xb577a8(0x1c4) && formlyCustomFunction(), fill ? ($(this)[_0xb577a8(0xed)]('wait') ? (console[_0xb577a8(0x1ca)]($(this)['data'](_0xb577a8(0x1c6))), $(this)['text']($(this)[_0xb577a8(0xed)]('wait'))) : $(this)['val'](_0xb577a8(0x24e))[_0xb577a8(0x1ab)](_0xb577a8(0x24e)), $(_0xb577a8(0x1de))[_0xb577a8(0x212)](), $(_0xb577a8(0x1b0))[_0xb577a8(0x1fc)] > 0x0 && (grecaptcha['getResponse']()[_0xb577a8(0x1fc)] === 0x0 && (form[_0xb577a8(0x10d)](_0xb577a8(0x168))['text'](oldSubmitText), form[_0xb577a8(0x10d)](_0xb577a8(0x168))['val'](oldSubmitText))), customError && $(_0xb577a8(0x156))['hide']()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0xef4755 = _0x3f73aa;
    customError ? ($(_0xef4755(0x156))[_0xef4755(0x1bc)](), fill ? (x++, progress = x, x <= steps[_0xef4755(0x1fc)] - 0x1 && (updateStep(), memory && saveFilledInput()), increaseCurstep()) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0xef4755(0x1fc)] - 0x1 && (updateStep(), memory && saveFilledInput()), increaseCurstep()), andLogic();
}

function backStep() {
    const _0x1b42bd = _0x3f73aa;
    customError && $(_0x1b42bd(0x156))[_0x1b42bd(0x1bc)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x1b42bd(0x1b4)](_0x1b42bd(0x1be)), selections[_0x1b42bd(0x1aa)](_0x5f49b7 => _0x5f49b7['skipTo'] === x)[_0x1b42bd(0x1fc)] > 0x0 ? x = parseInt(getSafe(() => selections['filter'](_0x46de46 => _0x46de46[_0x1b42bd(0x1e0)] === x)[0x0][_0x1b42bd(0x23b)])) : x--, updateStep()), ($(steps[x])[_0x1b42bd(0x10d)]('[data-radio-skip]:visible')[_0x1b42bd(0xed)](_0x1b42bd(0x200)) === !![] || $(steps[x])[_0x1b42bd(0x10d)](_0x1b42bd(0x1cd))[_0x1b42bd(0x10d)](_0x1b42bd(0x18c))[_0x1b42bd(0xed)](_0x1b42bd(0x200)) === !![] || $(steps[x])['find']('[data-answer][data-radio-skip]:visible')['data'](_0x1b42bd(0x200)) === !![]) && (all_data = all_data[_0x1b42bd(0x1aa)](_0x917681 => _0x917681[_0x1b42bd(0x21f)] !== $(steps[x])[_0x1b42bd(0x10d)](_0x1b42bd(0x187))[_0x1b42bd(0x14d)](_0x1b42bd(0x22e))), $(_0x1b42bd(0x23f) + $(steps[x])[_0x1b42bd(0x10d)](_0x1b42bd(0x187))[_0x1b42bd(0x14d)](_0x1b42bd(0x22e)) + '\x22]')[_0x1b42bd(0x1bc)](), $(steps[x])[_0x1b42bd(0x10d)](_0x1b42bd(0x19b))['prop'](_0x1b42bd(0x1d7), ![]), $(steps[x])['find'](_0x1b42bd(0xfd))[_0x1b42bd(0x1b4)]('w--redirected-checked'), validation());
}
weightedSelectionRange && $(_0x3f73aa(0x267))[_0x3f73aa(0x100)](function() {
    const _0x47b5a7 = _0x3f73aa;
    $(this)['append'](_0x47b5a7(0x1a4) + $(this)['data']('selection') + _0x47b5a7(0x1db));
});

function selectionQuiz() {
    const _0x38909e = _0x3f73aa;
    if ($(this)['find'](_0x38909e(0x202))) {
        $(_0x38909e(0x267))['hide'](), $(_0x38909e(0x247))[_0x38909e(0x1bc)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x38909e(0x24a)](function(_0x289876) {
                const _0xd11d3e = _0x38909e;
                selTotal = selTotal + _0x289876[_0xd11d3e(0x1b3)];
            }), $(_0x38909e(0x17d))[_0x38909e(0x1ab)](selTotal);
            if ($(_0x38909e(0xfb) + selTotal + '\x22]')[_0x38909e(0x1fc)] > 0x0) $(_0x38909e(0xfb) + selTotal + '\x22]')['fadeIn']();
            else $(_0x38909e(0x25d) + selTotal + ')') ? $(_0x38909e(0x25d) + selTotal + ')')[_0x38909e(0x213)](_0x38909e(0x267))['eq'](0x0)['show']() : $(_0x38909e(0x230))['fadeIn']();
        } else {
            let _0x1b8de4 = -0x1,
                _0xcd19cd = [];
            $(_0x38909e(0x267))[_0x38909e(0x100)](function(_0x2c7845) {
                const _0x23577c = _0x38909e;
                $($('[data-selection]')[_0x2c7845])[_0x23577c(0xed)](_0x23577c(0x15d))[_0x23577c(0x182)](selString[_0x23577c(0x1d5)]()) && (_0x1b8de4 = _0x2c7845, _0xcd19cd['push'](_0x2c7845));
            }), multiSelections ? _0xcd19cd['length'] > 0x0 ? _0xcd19cd[_0x38909e(0x24a)](_0x56d490 => {
                const _0x36506e = _0x38909e;
                $($(_0x36506e(0x267))[_0x56d490])['fadeIn']();
            }) : $(_0x38909e(0x230))['fadeIn']() : _0x1b8de4 > -0x1 ? $($(_0x38909e(0x267))[_0x1b8de4])[_0x38909e(0x1ea)]() : $(_0x38909e(0x230))[_0x38909e(0x1ea)]();
        }
    }
}

function triggerInputAllData() {
    const _0x5cfe4e = _0x3f73aa;
    if (savedFilledInput && memory) savedFilledInput['forEach'](_0x130763 => {
        const _0x81198f = _0x4954;
        var _0x39d0ec = $('input[name=\x22' + _0x130763[_0x81198f(0x138)] + _0x81198f(0x257) + _0x130763[_0x81198f(0x1ff)] + _0x81198f(0xf9)),
            _0x24dd02 = $(_0x81198f(0x1f7) + _0x130763[_0x81198f(0x138)] + _0x81198f(0xf9)),
            _0x53c403 = $('textarea[name=\x22' + _0x130763[_0x81198f(0x138)] + _0x81198f(0xf9)),
            _0x1c7261 = $('input[type=\x22checkbox\x22][name=\x22' + _0x130763[_0x81198f(0x138)] + '\x22]'),
            _0x16fe4e = $(_0x81198f(0x209) + _0x130763['inputName'] + _0x81198f(0x257) + _0x130763[_0x81198f(0x1ff)] + _0x81198f(0xf9));
        if (_0x39d0ec['attr'](_0x81198f(0x118)) !== _0x81198f(0x1d2)) {
            if (_0x39d0ec[_0x81198f(0x14d)]('type') === _0x81198f(0x269) && !_0x39d0ec[_0x81198f(0x13a)]('[data-radio-skip]')[_0x81198f(0xed)](_0x81198f(0x200))) _0x39d0ec[_0x81198f(0x21c)](), _0x39d0ec[_0x81198f(0x225)]('.w-radio-input')[_0x81198f(0x192)]('w--redirected-checked'), _0x39d0ec[_0x81198f(0x196)](_0x81198f(0x12d));
            else _0x130763[_0x81198f(0x1ff)] === 'on' ? (_0x24dd02[_0x81198f(0x21c)](), _0x24dd02[_0x81198f(0x225)](_0x81198f(0x190))['addClass'](_0x81198f(0x13f)), _0x24dd02[_0x81198f(0x196)]('input')) : (_0x24dd02[_0x81198f(0x271)](_0x130763[_0x81198f(0x1ff)]), _0x53c403[_0x81198f(0x271)](_0x130763['value']), $(_0x81198f(0x1ae))[_0x81198f(0x10d)]('option[value=\x22' + _0x130763[_0x81198f(0x1ff)] + '\x22]')[_0x81198f(0x25c)](_0x81198f(0x1b3), !![]), _0x24dd02[_0x81198f(0x196)](_0x81198f(0x12d)), _0x24dd02[_0x81198f(0x196)]('change'));
            const _0x56f064 = _0x16fe4e[_0x81198f(0xed)](_0x81198f(0x253)),
                _0x11221c = _0x1c7261['data'](_0x81198f(0x253));
            _0x16fe4e[_0x81198f(0x213)]()[_0x81198f(0x192)](_0x56f064), _0x1c7261['parent']()[_0x81198f(0x192)](_0x11221c);
        }
    });
    else _params && (getParams(), searchQ[_0x5cfe4e(0x24a)](_0x133ae4 => {
        const _0x5556a5 = _0x5cfe4e;
        if ($('input[name=\x22' + _0x133ae4[_0x5556a5(0x138)] + _0x5556a5(0x257) + _0x133ae4['value'] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5556a5(0x14d)](_0x5556a5(0x118)) !== _0x5556a5(0x1d2)) {
            if ($(_0x5556a5(0x1f7) + _0x133ae4[_0x5556a5(0x216)] + _0x5556a5(0x257) + _0x133ae4[_0x5556a5(0x271)] + _0x5556a5(0xf9))[_0x5556a5(0x14d)]('type') === _0x5556a5(0x269)) $(_0x5556a5(0x1f7) + _0x133ae4[_0x5556a5(0x216)] + _0x5556a5(0x257) + _0x133ae4[_0x5556a5(0x271)] + _0x5556a5(0xf9))[_0x5556a5(0x21c)](), $(_0x5556a5(0x1f7) + _0x133ae4[_0x5556a5(0x216)] + '\x22][value=\x22' + _0x133ae4[_0x5556a5(0x271)] + _0x5556a5(0xf9))[_0x5556a5(0x225)]('.w-radio-input')['addClass'](_0x5556a5(0x13f)), $('input[name=\x22' + _0x133ae4[_0x5556a5(0x216)] + _0x5556a5(0x257) + _0x133ae4[_0x5556a5(0x271)] + _0x5556a5(0xf9))[_0x5556a5(0x196)]('input');
            else _0x133ae4[_0x5556a5(0x271)] === 'on' ? ($('input[name=\x22' + _0x133ae4['key'] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5556a5(0x21c)](), $(_0x5556a5(0x1f7) + _0x133ae4[_0x5556a5(0x216)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5556a5(0x225)](_0x5556a5(0x190))[_0x5556a5(0x192)]('w--redirected-checked'), $(_0x5556a5(0x1f7) + _0x133ae4[_0x5556a5(0x216)] + '\x22]')[_0x5556a5(0x196)](_0x5556a5(0x12d))) : ($(_0x5556a5(0x1f7) + _0x133ae4[_0x5556a5(0x216)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5556a5(0x271)](_0x133ae4[_0x5556a5(0x271)]), $(_0x5556a5(0x1f8) + _0x133ae4['key'] + '\x22]:not([data-prefill=\x22false\x22])')['val'](_0x133ae4[_0x5556a5(0x271)]), $('select[name=\x22' + _0x133ae4['key'] + _0x5556a5(0xf9))[_0x5556a5(0x10d)](_0x5556a5(0x259) + _0x133ae4['val'] + '\x22]')[_0x5556a5(0x25c)](_0x5556a5(0x1b3), !![]), $('input[name=\x22' + _0x133ae4[_0x5556a5(0x216)] + _0x5556a5(0xf9))['trigger'](_0x5556a5(0x12d)), $(_0x5556a5(0x1f7) + _0x133ae4['key'] + _0x5556a5(0xf9))[_0x5556a5(0x196)](_0x5556a5(0x160)));
        }
    }));
}
$(_0x3f73aa(0x20d))['on'](_0x3f73aa(0x21c), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $('[data-form=\x22back-btn\x22]')['on'](_0x3f73aa(0x21c), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x3f73aa(0x10d)](_0x3f73aa(0x217))[_0x3f73aa(0x14e)]('[type=\x22radio\x22]')['on']('input', function(_0x57a2c9) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x3f73aa(0x10d)]('input[type=\x22radio\x22]')['on']('click', function() { skip = !![], validation(), addClickClass(); });
$('[data-clickable-all]')[_0x3f73aa(0xed)]('clickable-all') ? $(_0x3f73aa(0x172))['removeClass'](_0x3f73aa(0x1f0)) : $('[data-form=\x22custom-progress-indicator\x22]')[_0x3f73aa(0x192)](_0x3f73aa(0x1f0));

function clickableIndicator() {
    const _0xa64a77 = _0x3f73aa;
    $(_0xa64a77(0x243))['data'](_0xa64a77(0x171)) && ($(_0xa64a77(0x1a3))[_0xa64a77(0x1b4)](_0xa64a77(0x1be)), $(_0xa64a77(0x243))[_0xa64a77(0xed)]('clickable-all') ? (x = $(this)['index'](), updateStep()) : $(this)[_0xa64a77(0x1da)]() <= progress && (x = $(this)[_0xa64a77(0x1da)](), updateStep())), $('[data-text=\x22current-step\x22]')[_0xa64a77(0x1ab)](x + 0x1);
}
$(_0x3f73aa(0x172))['on'](_0x3f73aa(0x21c), clickableIndicator), excludeCount = !$(_0x3f73aa(0x1de))[_0x3f73aa(0xed)](_0x3f73aa(0x21a)), steps[_0x3f73aa(0x100)](function(_0x5bae5d) {
    const _0x55dad6 = _0x3f73aa,
        _0x7faf5f = $(this)[_0x55dad6(0xed)]('card');
    console[_0x55dad6(0x1ca)](excludeCount), _0x7faf5f && excludeCount && $('[data-form=\x22custom-progress-indicator\x22]')['eq'](_0x5bae5d)[_0x55dad6(0x1bc)]();
});
$(_0x3f73aa(0x1de))[_0x3f73aa(0xed)](_0x3f73aa(0x1e5)) && ($(_0x3f73aa(0x238))[_0x3f73aa(0x100)](function() {
    const _0x373699 = _0x3f73aa;
    $(this)[_0x373699(0x1f5)](_0x373699(0x11c), $(this)[_0x373699(0xed)](_0x373699(0x108)));
}), $('[data-answer]')[_0x3f73aa(0x100)](function() {
    const _0x22ad94 = _0x3f73aa;
    $(this)[_0x22ad94(0x1f5)](_0x22ad94(0x258), $(this)[_0x22ad94(0xed)](_0x22ad94(0x121)));
}));

function resetFormly() {
    const _0x140045 = _0x3f73aa;
    $(_0x140045(0x1de))[_0x140045(0x196)](_0x140045(0x111)), $('[data-form=\x22multistep\x22]')['parents']()[_0x140045(0x10d)](_0x140045(0x27d))['hide'](), x = 0x0, updateStep(), $(_0x140045(0x1de))['show'](), $(_0x140045(0x168))['text'](oldSubmitText), $(_0x140045(0x168))[_0x140045(0x271)](oldSubmitText), $('[data-text=\x22current-step\x22]')[_0x140045(0x1ab)](0x1), $('[data-form=\x22multistep\x22]')[_0x140045(0x10d)](_0x140045(0x25e))['siblings'](_0x140045(0x190))[_0x140045(0x1b4)](_0x140045(0x13f));
}
$(document)[_0x3f73aa(0x24d)](function(_0xcec609, _0x1a292b, _0x417bde) {
    const _0x1fa45f = _0x3f73aa;
    if (_0x417bde[_0x1fa45f(0x102)]['includes']('https://webflow.com/api/v1/form/')) {
        const _0x3d6bd1 = _0x1a292b['status'] === 0xc8,
            _0x25aa1f = _0x1fa45f(0x12e);
        redirectTo && _0x3d6bd1 && (newTab ? window[_0x1fa45f(0x139)](redirectTo, _0x1fa45f(0x1e7)) : setTimeout(() => { location['href'] = redirectTo; }, redirectDelay)), _0x3d6bd1 && successCard !== '' && $(_0x1fa45f(0x246) + successCard + '\x22]')[_0x1fa45f(0x1ea)](), _0x3d6bd1 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x3d6bd1 && ($(_0x1fa45f(0x168))[_0x1fa45f(0x271)](_0x1fa45f(0x24e)), $(_0x1fa45f(0x168))[_0x1fa45f(0x1ab)](_0x1fa45f(0x24e)));
    }
}), $(_0x3f73aa(0x234))['on'](_0x3f73aa(0x21c), function() {
    const _0x1b918c = _0x3f73aa;
    var _0x1f775d = $(this)[_0x1b918c(0x213)]()[_0x1b918c(0x10d)]('[data-input-field]')[_0x1b918c(0xed)](_0x1b918c(0x27c));
    setTimeout(function() {
        const _0x389db1 = _0x1b918c;
        $('input[name=\x22' + _0x1f775d + '\x22]')[_0x389db1(0x1f3)]();
    }, 0x64), back = !![], x = $(this)[_0x1b918c(0xed)](_0x1b918c(0x131)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $('[data-text=\x22total-steps\x22]')[_0x1b918c(0x1ab)](steps[_0x1b918c(0x1fc)])) : $(steps[x])[_0x1b918c(0xed)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x1b918c(0x184))[_0x1b918c(0x1ab)](curStep), back = ![];
}), $(_0x3f73aa(0x159))['on']('click', function() {
    const _0x3257bf = _0x3f73aa;
    $(_0x3257bf(0x1de))[_0x3257bf(0x196)](_0x3257bf(0x111));
    let _0x3de5a2 = $(this);
    $(this)[_0x3257bf(0x1ab)](_0x3257bf(0x24e)), setTimeout(function() {
        const _0xabecf = _0x3257bf;
        $(_0x3de5a2)[_0xabecf(0x1ab)](oldResetText), $(_0x3de5a2)['parents'](_0xabecf(0x27d))['hide'](), x = 0x0, updateStep(), $(_0xabecf(0x1de))[_0xabecf(0x204)](), $(_0xabecf(0x168))[_0xabecf(0x1ab)](oldSubmitText), $(_0xabecf(0x168))[_0xabecf(0x271)](oldSubmitText), $(_0x3de5a2)[_0xabecf(0x271)](oldSubmitText), $(_0xabecf(0x184))['text'](0x1), $(_0xabecf(0x1de))[_0xabecf(0x10d)](_0xabecf(0x25e))[_0xabecf(0x225)]('.w-checkbox-input')[_0xabecf(0x1b4)]('w--redirected-checked');
    }, resetDelay);
}), $(_0x3f73aa(0x1c7))['on'](_0x3f73aa(0x197), function(_0x24afff) {
    const _0x347cce = _0x3f73aa;
    if (_0x24afff['keyCode'] === 0xd) {
        _0x24afff['preventDefault'](), _0x24afff[_0x347cce(0x276)]();
        if ($(steps[x])[_0x347cce(0x10d)](_0x347cce(0x1fe))['is'](_0x347cce(0x224))) $(steps[x])[_0x347cce(0x10d)](_0x347cce(0x132))[_0x347cce(0x271)]($(steps[x])[_0x347cce(0x10d)](_0x347cce(0x132))[_0x347cce(0x271)]() + '\x0a');
        else $('[data-enter]')[_0x347cce(0xed)](_0x347cce(0x268)) && fill && (totalSteps > curStep && $(_0x347cce(0x20d))[0x0]['click']());
    }
}), $(_0x3f73aa(0x1c7))[_0x3f73aa(0x1e2)](function(_0x5a5b55) {
    const _0x369bda = _0x3f73aa;
    (_0x5a5b55[_0x369bda(0x27f)] || _0x5a5b55[_0x369bda(0x1e9)]) && _0x5a5b55['keyCode'] == 0xd && (x >= steps['length'] - 0x1 && fill ? $(steps[x])['find'](_0x369bda(0x1d8))[_0x369bda(0x21c)]() : (_0x5a5b55['preventDefault'](), _0x5a5b55[_0x369bda(0x276)]()));
}), $(_0x3f73aa(0x1de))[_0x3f73aa(0x10d)](_0x3f73aa(0x217))['on']('change', function() {
    const _0x5689aa = _0x3f73aa;
    all_data = all_data[_0x5689aa(0x1aa)](_0x5bc540 => _0x5bc540[_0x5689aa(0x21f)] !== $(this)['attr'](_0x5689aa(0x22e))), $(this)[_0x5689aa(0x14d)]('type') === _0x5689aa(0x27a) ? $(this)['is'](_0x5689aa(0x1d4)) ? all_data[_0x5689aa(0x23c)]({ 'field': $(this)['attr'](_0x5689aa(0x22e)), 'value': $(this)['siblings']('span')[_0x5689aa(0x1ab)]() }) : $('[data-input-field=\x22' + $(this)['attr'](_0x5689aa(0x22e)) + '\x22]')['hide']() : (all_data[_0x5689aa(0x23c)]({ 'field': $(this)[_0x5689aa(0x14d)](_0x5689aa(0x22e)), 'value': $(this)[_0x5689aa(0x271)]() }), $(this)[_0x5689aa(0x271)]() !== '' && resetInputErrorMessage($(this)[_0x5689aa(0x14d)](_0x5689aa(0x22e)))), all_data[_0x5689aa(0x24a)](function(_0x1118aa) {
        const _0x7e5d01 = _0x5689aa;
        $(_0x7e5d01(0x23f) + _0x1118aa['field'] + '\x22]')[_0x7e5d01(0x204)](), $(_0x7e5d01(0x23f) + _0x1118aa['field'] + '\x22]')[_0x7e5d01(0x1ab)](_0x1118aa['value']);
    });
}), $(_0x3f73aa(0x1de))[_0x3f73aa(0x10d)](_0x3f73aa(0x1fe))['on'](_0x3f73aa(0x160), function() {
    const _0x355417 = _0x3f73aa;
    $(this)[_0x355417(0x271)]() !== '' && resetInputErrorMessage($(this)[_0x355417(0x14d)](_0x355417(0x22e))), all_data = all_data['filter'](_0x620255 => _0x620255[_0x355417(0x21f)] !== $(this)[_0x355417(0x14d)](_0x355417(0x22e))), all_data[_0x355417(0x23c)]({ 'field': $(this)[_0x355417(0x14d)]('name'), 'value': $(this)[_0x355417(0x271)]() }), all_data[_0x355417(0x24a)](function(_0x3942bc) {
        const _0x4e0c0d = _0x355417;
        $('[data-input-field=\x22' + _0x3942bc[_0x4e0c0d(0x21f)] + '\x22]')['show'](), $(_0x4e0c0d(0x23f) + _0x3942bc[_0x4e0c0d(0x21f)] + '\x22]')[_0x4e0c0d(0x1ab)](_0x3942bc[_0x4e0c0d(0x1ff)]);
    });
}), $(_0x3f73aa(0x1de))[_0x3f73aa(0x10d)](_0x3f73aa(0xf4))['on'](_0x3f73aa(0x160), function() {
    const _0x55e08e = _0x3f73aa;
    $(this)[_0x55e08e(0x271)]() !== '' && resetInputErrorMessage($(this)[_0x55e08e(0x14d)](_0x55e08e(0x22e)));
    var _0x568f12 = $(this)['data']('ms-field');
    all_data = all_data[_0x55e08e(0x1aa)](_0xa1dfdd => _0xa1dfdd[_0x55e08e(0x21f)] !== $(this)[_0x55e08e(0x14d)](_0x55e08e(0x22e))), all_data['push']({ 'field': $(this)['attr']('name'), 'value': _0x568f12 ? $(this)[_0x55e08e(0x10d)](_0x55e08e(0xf6))[_0x55e08e(0x1ab)]() : $(this)[_0x55e08e(0x271)]() }), all_data[_0x55e08e(0x24a)](function(_0x3e7f8d) {
        const _0x2b9e39 = _0x55e08e;
        $(_0x2b9e39(0x23f) + _0x3e7f8d['field'] + '\x22]')[_0x2b9e39(0x204)](), $(_0x2b9e39(0x23f) + _0x3e7f8d[_0x2b9e39(0x21f)] + '\x22]')['text'](_0x3e7f8d[_0x2b9e39(0x1ff)]);
    });
}), updateStep(), triggerInputAllData(), $(_0x3f73aa(0xec))['each'](function() {
    const _0x3367ee = _0x3f73aa,
        _0x20ca53 = $(this)['find'](_0x3367ee(0x189)),
        _0x3fe6da = [];
    _0x20ca53[_0x3367ee(0x100)](function() {
        const _0x305d35 = _0x3367ee;
        _0x3fe6da[_0x305d35(0x23c)]($(this)[_0x305d35(0x1ab)]()[_0x305d35(0x233)]());
    });
    const _0xfdf412 = $(this)[_0x3367ee(0x225)](_0x3367ee(0x275));
    $[_0x3367ee(0x100)](_0x3fe6da, function(_0x4ba6f0, _0x80d446) {
        const _0x14a791 = _0x3367ee,
            _0x18c526 = $(_0x14a791(0x112))[_0x14a791(0x271)](_0x80d446)[_0x14a791(0x1ab)](_0x80d446);
        _0xfdf412[_0x14a791(0x1f5)](_0x18c526);
    });
});

function cloneRemove() {
    $('[data-clone-wrapper]')['each'](function() {
        const _0x2308d4 = _0x4954;
        $(this)[_0x2308d4(0x10d)](_0x2308d4(0x237))['length'] < 0x2 ? $(this)[_0x2308d4(0x10d)](_0x2308d4(0x199))[_0x2308d4(0x1bc)]() : $(this)[_0x2308d4(0x10d)]('[data-form=\x22remove-clone\x22]')[_0x2308d4(0x204)]();
    });
}

function _0x2849() {
    const _0x3592d4 = ['children', ':input[type=\x22date\x22][required]', ':input[type=\x22number\x22][required]', 'click-addclass', '<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a</svg>\x0a</div>', 'user-agent', 'f-show', '\x22][value=\x22', '<br>Data\x20Answer\x20=\x20', 'option[value=\x22', 'every', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'prop', '[data-range]:contains(', 'input:checkbox', '.active-answer-card\x20:input[type=\x27checkbox\x27]', '[data-display-wrapper=\x22', 'transform', '<div\x20class=\x22f-logic-text\x22><strong>data-answer</strong>=\x22', 'test', '[data-checkbox]', 'stringify', 'head', '[data-selection]', 'enter', 'radio', 'button', '[data-display=\x22', 'split', 'click-path', '[data-display-input-wrapper=\x22', 'data-radio-delay', '[data-form=\x22submit\x22]:visible', 'val', 'setItem', 'getElementsByTagName', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-cms-select=input]', 'stopPropagation', '[data-weighted-selection-range]', '[type=\x22submit\x22]', 'select-multiple', 'checkbox', '[data-input-reveal]', 'input-field', '.w-form-done', 'findIndex', 'metaKey', 'appendChild', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'textarea[required]:visible', '[data-count-card]', 'tagName', '[data-clone-wrapper=\x22', 'videsigns', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-cms-select=cms]', 'data', 'skip-to', '[data-input-reveal=\x22', 'step', 'add-new-input-limit', 'select[required]:visible', 'f-mySidenav', 'select', '[data-selected]:checked', 'option[value=\x22$(this).val()\x22]', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Total\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '567JPrDnC', '\x22]:not([data-prefill=\x22false\x22])', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;\x20on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-selection=\x22', '[data-text=\x22total-steps\x22]', '.w-form-formradioinput', 'none', '6205509BXKUXG', 'each', 'phone-autoformat', 'url', '[data-clone-input=\x22', '[data-submit=\x22true\x22]', '<div\x20class=\x22f-text_script\x22>Before\x20&lt;/body&gt;\x20tag<br/></div>', 'min-character', 'last-step', 'go-to', 'data-form', '[data-form=\x22next-btn\x22][data-submit-show]', '[data-display]', 'scroll-top', 'find', 'parse', 'data-radio-skip', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a', 'reset', '<option>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-form=\x22remove-input-clone\x22]', ':input[type=\x22number\x22]', 'Counter\x20updated\x20successfully.', '0.4', 'type', 'FAIL', '\x20seconds', 'screen', '<br>Data\x20Go\x20To\x20=\x20', 'scroll-top-offset', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Checkboxes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'timeZone', ':input[type=\x22text\x22][required]', 'answer', 'formly', '[data-skip-to]', ':input[type=\x22time\x22][required]', '[data-answer][data-radio-skip]:visible', 'history', 'true', 'active-answer-card', 'closest', '[data-input-reveal]:not(:visible)', 'toISOString', 'f-hide', 'input', 'redirect-form-hehexd', '[data-custom-error-message]', ':input[type=\x22email\x22][required]', 'edit-step', 'textarea:focus', 'startsWith', 'add-new-input', '[data-weighted-selection]', 'timestamp', 'getItem', 'inputName', 'open', 'parents', 'ix2', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-max-checkbox]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'w--redirected-checked', '[required]', 'remove', '1270308GlMThi', 'Basic\x20(No\x20Formly\x20Logic)', 'pageLoadTime', '71024CbGSUf', '[data-enter=\x22true\x22]', ':input[type=\x22radio\x22]', 'script[src=\x22', '[data-input-field]', 'input-reveal-value', '[data-add-new-input]', '<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a</svg>\x0a</div>', 'attr', 'not', 'now', '[data-callback=\x22recaptcha\x22]', 'https://videsigns-staging.co.uk/formly-counter', 'form[data-form=\x22multistep\x22]\x20:input', 'src', 'formlyLastStepAnswer', '[data-click-addclass]', '[data-text=\x22error-message\x22]', ':input[type=\x22url\x22]', 'input[type=\x22email\x22]:visible', '[data-btn=\x22reset\x22]', 'multistep', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'selections\x20email', 'selection', 'require', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x20', 'change', 'input-reveal', 'input:radio[name=\x22', '[data-form=\x22step\x22]', 'param-analytics', '[data-index=\x22', 'html,\x20body', 'weighted-selection', '[data-form=\x22submit-btn\x22]', 'div', '[data-card=\x22true\x22]', 'data-name', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'formly-support', 'block-domain', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', 'max-checkbox', 'clickable', '[data-form=\x22custom-progress-indicator\x22]', 'get', 'substring', 'createElement', '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ':first', 'reset-delay', '[data-display-input-index=\x22', ':input[type=\x22password\x22]', '[data-clone-input]', '[data-text=\x22total-weight\x22]', '[data-answer]', 'last', '1446TIZFVn', 'width', 'includes', '[data-add-new-input=\x22', '[data-text=\x22current-step\x22]', 'referrer', '[data-clone-input-wrapper=\x22', 'input[type=\x22radio\x22]:checked', '[data-display-index=\x22', '[data-cms-select=text]', 'radio-delay', '[data-quiz]', '[data-radio-skip]:visible', 'height', 'Webflow', 'cookie', '.w-checkbox-input', 'error', 'addClass', 'translateX(0rem)', 'card', 'AND', 'trigger', 'keypress', ':input[type=\x22url\x22][required]', '[data-form=\x22remove-clone\x22]', 'fail', 'input[type=\x22radio\x22]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20is\x20on\x20data-card\x20=\x20true</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'style', 'formlyLastStep', 'new-tab', '[data-reset-delay]', 'submit-show', 'first', '[data-form=\x22progress-indicator\x22]', '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>', 'N/A', 'weighted-selection-range', '\x22]\x20select', 'init', 'slow', 'filter', 'text', 'input[type=\x22submit\x22]', 'css', 'select:not([data-prefill=\x22false\x22])', 'searchParams', 'div.g-recaptcha', 'clicked', 'data-go-to', 'selected', 'removeClass', 'preventDefault', '\x22][data-input-reveal-value]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'clone', '[data-form-ms=\x22submit-btn\x22]', '[data-answer=\x22', 'label', 'hide', '[data-add-new=\x22', 'current', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'replace', 'success', 'logic-extra', 'select[required]', 'function', '[data-hidden-input=\x22', 'wait', 'body', '1495400KTuEFo', 'required', 'log', 'https://slater.app/4908/8862.js', 'pushState', '.active-answer-card', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'removeItem', 'href', 'slice', 'file', '[data-query-param]', ':checked', 'join', '[data-redirect-delay]', 'checked', '[data-form=\x22submit-btn\x22]:visible', ':input[type=\x22password\x22][required]', 'index', '</div>', ':input[type=\x22tel\x22]', 'search', '[data-form=\x22multistep\x22]', '[data-input-index=\x22', 'skipTo', '[data-clone=\x22', 'keydown', 'multiple-results', 'script', 'debug-mode', ':input[type=\x27radio\x27]:checked', '_blank', '258184qVgCHu', 'ctrlKey', 'fadeIn', '[data-form=\x22back-btn\x22]', 'filledInput', 'dispatchEvent', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'textarea[autofocus]', 'disabled', '\x22]\x20input', ':input[type=\x22text\x22]', 'focus', '\x22]\x20[data-input-field^=\x22', 'append', '2060HeWzXM', 'input[name=\x22', 'textarea[name=\x22', 'translateX(-40rem)', 'add-new', 'animate', 'length', 'counter', 'textarea', 'value', 'radio-skip', '\x22]\x20textarea', '[data-btn=\x22check\x22]', '[data-add-new]', 'show', '[data-input-target=\x22', '[data-hidden-input=\x22page-visit-duration\x22]', 'readystatechange', ':input[type=\x22date\x22]', 'input[type=\x22radio\x22][name=\x22', 'toString', '<div\x20class=\x22f-text_attribute-title\x22>Step\x20', 'data-input-field', '[data-form=\x22next-btn\x22]', 'memory', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'clone-input', 'input[type=\x22text\x22][required]:visible', 'submit', 'parent', 'resolvedOptions', 'Before\x20&lt;/body&gt;\x20tag', 'key', ':input', 'time-zone', 'conditional-result', 'count-card', '[data-display-input]', 'click', 'location', 'some', 'field', 'PASS', '1245752QJCkct', 'Failed\x20to\x20update\x20counter:', 'relationship-', ':focus', 'siblings', 'toLowerCase', '[data-select-multiple]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'display', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-clone-input-wrapper]', 'input[type=\x22checkbox\x22]', '[data-display-input=\x22', 'name', ':input[type=\x22tel\x22][required]', '[data-selection=\x22other\x22]', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', '[data-radio-delay]', 'trim', '[data-btn=\x22edit\x22]', 'Inside\x20<head>\x20tag', 'redirect-delay', '[data-clone]', '[data-go-to]', 'FormlyLogic\x20enabled', '\x22]:checked', 'backTo', 'push', 'textarea[required]', 'auto', '[data-input-field=\x22', '[data-show-if]', ':input[required]', 'input[autofocus]', '[data-clickable]', ':input[type=\x22checkbox\x22]', 'query-param', '[data-success-card=\x22', '[data-selection-weight]', 'querySelector', 'parentNode', 'forEach', '[data-form=\x22progress\x22]', 'input[type=\x22checkbox\x22]:not(:checked)', 'ajaxComplete', 'Please\x20wait...', '[aria-label=\x22Remove\x20file\x22]'];
    _0x2849 = function() { return _0x3592d4; };
    return _0x2849();
}

function cloneRemoveInput() {
    const _0x57ca34 = _0x3f73aa;
    $(_0x57ca34(0x22b))[_0x57ca34(0x100)](function() {
        const _0x315ecf = _0x57ca34;
        console['log']($(this)[_0x315ecf(0x10d)](_0x315ecf(0x17c))[_0x315ecf(0x1fc)]), $(this)['find'](_0x315ecf(0x17c))[_0x315ecf(0x1fc)] < 0x2 ? $(this)['find'](_0x315ecf(0x114))['hide']() : $(this)[_0x315ecf(0x10d)](_0x315ecf(0x114))[_0x315ecf(0x204)]();
    });
}
$(_0x3f73aa(0x199))['on'](_0x3f73aa(0x21c), function() {
    const _0x2c8ff0 = _0x3f73aa,
        _0x36cde4 = $(this)[_0x2c8ff0(0x13a)]('[data-clone]')[_0x2c8ff0(0x1fc)] > 0x0 ? $(this)[_0x2c8ff0(0x13a)](_0x2c8ff0(0x237))[_0x2c8ff0(0x1da)]() : $(this)[_0x2c8ff0(0x13a)]('[data-display]')[_0x2c8ff0(0x1da)](),
        _0x39581c = $(this)[_0x2c8ff0(0x13a)](_0x2c8ff0(0x237))['length'] > 0x0 ? $(this)[_0x2c8ff0(0x13a)](_0x2c8ff0(0x237))[_0x2c8ff0(0xed)](_0x2c8ff0(0x1b8)) : $(this)['parents'](_0x2c8ff0(0x10b))['data'](_0x2c8ff0(0x229));
    $('[data-clone=\x22' + _0x39581c + '\x22]')['eq'](_0x36cde4)[_0x2c8ff0(0x141)](), $('[data-display=\x22' + _0x39581c + '\x22]')['eq'](_0x36cde4)[_0x2c8ff0(0x141)](), cloneRemove();
    let _0x3b3036 = $('[data-add-new=\x22' + _0x39581c + '\x22]')[_0x2c8ff0(0xed)]('add-new-limit'),
        _0x159bfc = $('[data-clone=\x22' + _0x39581c + '\x22]')[_0x2c8ff0(0x1fc)];
    console[_0x2c8ff0(0x1ca)](_0x159bfc, _0x3b3036), _0x159bfc < _0x3b3036 && (console[_0x2c8ff0(0x1ca)](_0x2c8ff0(0x204)), $(_0x2c8ff0(0x1bd) + _0x39581c + '\x22]')['show']()), validation();
}), $(_0x3f73aa(0x114))['on'](_0x3f73aa(0x21c), function() {
    const _0x561238 = _0x3f73aa;
    let _0x3dbcf2 = $(this)[_0x561238(0x225)]()[_0x561238(0x14d)]('name'),
        _0x40df7f = $(this)[_0x561238(0x13a)](_0x561238(0x17c))[_0x561238(0xed)]('clone-input');
    $(this)[_0x561238(0x213)](_0x561238(0x17c))['remove'](), $(_0x561238(0x23f) + _0x3dbcf2 + '\x22]')['parent'](_0x561238(0x21b))['remove']();
    let _0x2dd5cf = $(_0x561238(0x183) + _0x40df7f + '\x22]')[_0x561238(0xed)](_0x561238(0xf1)),
        _0xa327d4 = $('[data-clone-input=\x22' + _0x40df7f + '\x22]')[_0x561238(0x1fc)];
    _0xa327d4 < _0x2dd5cf && $('[data-add-new-input=\x22' + _0x40df7f + '\x22]')['show'](), validation();
}), $(_0x3f73aa(0x203))['on']('click', function() {
    const _0x3ef7b9 = _0x3f73aa;
    let _0x4a184a = $(this)['data'](_0x3ef7b9(0x1fa)),
        _0xe3c98e = $(this)[_0x3ef7b9(0xed)]('add-new-limit');
    var _0x1aa290 = $(_0x3ef7b9(0x1e1) + _0x4a184a + '\x22]')['eq'](0x0)[_0x3ef7b9(0x1b8)](!![]),
        _0x4d7127 = $(_0x3ef7b9(0x26b) + _0x4a184a + '\x22]')['eq'](0x0)[_0x3ef7b9(0x1b8)](!![]);
    let _0x4bf53b = '';
    $(this)[_0x3ef7b9(0x10d)](_0x3ef7b9(0x199))[_0x3ef7b9(0x204)](), cloneRemove(), _0x1aa290[_0x3ef7b9(0x10d)](_0x3ef7b9(0x17c))[_0x3ef7b9(0x10d)](_0x3ef7b9(0x12d))['val'](''), _0x1aa290[_0x3ef7b9(0x10d)](_0x3ef7b9(0x17c))['find'](_0x3ef7b9(0xf4))['val'](''), _0x1aa290['find']('[data-clone-input]')[_0x3ef7b9(0x10d)](_0x3ef7b9(0x1fe))[_0x3ef7b9(0x271)](''), _0x1aa290[_0x3ef7b9(0x10d)](_0x3ef7b9(0x17c))[_0x3ef7b9(0x14e)](_0x3ef7b9(0x178))['remove'](), _0x1aa290['find'](_0x3ef7b9(0x17c))[_0x3ef7b9(0x10d)](_0x3ef7b9(0x24f))['click'](), _0x4d7127[_0x3ef7b9(0x10d)](_0x3ef7b9(0x21b))[_0x3ef7b9(0x14e)](_0x3ef7b9(0x178))[_0x3ef7b9(0x141)](), _0x1aa290[_0x3ef7b9(0x10d)](_0x3ef7b9(0x12d))[_0x3ef7b9(0x100)](function() {
        const _0x251abc = _0x3ef7b9;
        if ($(this)[_0x251abc(0x129)](_0x251abc(0x17c))['length'] > 0x0) {
            let _0x45c860 = 0x0;
            const _0x4f3f77 = $(this)['closest']('[data-clone-input]')[_0x251abc(0xed)]('clone-input');
            $(_0x251abc(0x103) + _0x4f3f77 + _0x251abc(0x1f1))[_0x251abc(0x100)](function() {
                const _0x3c0a30 = _0x251abc,
                    _0x566f88 = $(this)['attr'](_0x3c0a30(0x22e));
                if (_0x566f88 && _0x566f88[_0x3c0a30(0x133)](_0x3c0a30(0x223))) { const _0x6bd471 = parseInt(_0x566f88[_0x3c0a30(0x26c)]('-')[0x1]);!isNaN(_0x6bd471) && _0x6bd471 > _0x45c860 && (_0x45c860 = _0x6bd471); }
            }), _0x45c860++, _0x4bf53b = this[_0x251abc(0x22e)] + '-' + _0x45c860;
        } else _0x4bf53b = this['name'] + '-' + (parseInt($(_0x251abc(0x1e1) + _0x4a184a + '\x22]')[_0x251abc(0x17f)]()[_0x251abc(0x1da)]()) + 0x1);
        $(this)[_0x251abc(0x271)](''), $(this)[_0x251abc(0x14d)](_0x251abc(0x22e), _0x4bf53b), $(this)[_0x251abc(0x14d)](_0x251abc(0x16b), _0x4bf53b);
    }), _0x1aa290[_0x3ef7b9(0x10d)](_0x3ef7b9(0x1fe))['each'](function() {
        const _0x51ef20 = _0x3ef7b9;
        if ($(this)[_0x51ef20(0x129)](_0x51ef20(0x17c))['length'] > 0x0) {
            let _0x381605 = 0x0;
            const _0x520d5f = $(this)[_0x51ef20(0x129)](_0x51ef20(0x17c))[_0x51ef20(0xed)](_0x51ef20(0x210));
            $(_0x51ef20(0x103) + _0x520d5f + _0x51ef20(0x201))[_0x51ef20(0x100)](function() {
                const _0x4d1573 = _0x51ef20,
                    _0x5d9a38 = $(this)[_0x4d1573(0x14d)](_0x4d1573(0x22e));
                if (_0x5d9a38 && _0x5d9a38['startsWith'](_0x4d1573(0x223))) { const _0x427720 = parseInt(_0x5d9a38[_0x4d1573(0x26c)]('-')[0x1]);!isNaN(_0x427720) && _0x427720 > _0x381605 && (_0x381605 = _0x427720); }
            }), _0x381605++, _0x4bf53b = this[_0x51ef20(0x22e)] + '-' + _0x381605;
        } else _0x4bf53b = this['name'] + '-' + (parseInt($(_0x51ef20(0x1e1) + _0x4a184a + '\x22]')[_0x51ef20(0x17f)]()[_0x51ef20(0x1da)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x51ef20(0x14d)]('name', _0x4bf53b), $(this)[_0x51ef20(0x14d)](_0x51ef20(0x16b), _0x4bf53b);
    }), _0x1aa290[_0x3ef7b9(0x10d)](_0x3ef7b9(0xf4))[_0x3ef7b9(0x100)](function() {
        const _0x407410 = _0x3ef7b9;
        if ($(this)[_0x407410(0x129)](_0x407410(0x17c))['length'] > 0x0) {
            let _0x495a43 = 0x0;
            const _0x49aa79 = $(this)[_0x407410(0x129)](_0x407410(0x17c))[_0x407410(0xed)](_0x407410(0x210));
            $(_0x407410(0x103) + _0x49aa79 + _0x407410(0x1a7))['each'](function() {
                const _0x121e79 = _0x407410,
                    _0x253136 = $(this)['attr'](_0x121e79(0x22e));
                if (_0x253136 && _0x253136[_0x121e79(0x133)]('relationship-')) { const _0xa6bdbf = parseInt(_0x253136[_0x121e79(0x26c)]('-')[0x1]);!isNaN(_0xa6bdbf) && _0xa6bdbf > _0x495a43 && (_0x495a43 = _0xa6bdbf); }
            }), _0x495a43++, _0x4bf53b = this[_0x407410(0x22e)] + '-' + _0x495a43;
        } else _0x4bf53b = this[_0x407410(0x22e)] + '-' + (parseInt($(_0x407410(0x1e1) + _0x4a184a + '\x22]')[_0x407410(0x17f)]()[_0x407410(0x1da)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x407410(0x14d)]('name', _0x4bf53b), $(this)[_0x407410(0x14d)](_0x407410(0x16b), _0x4bf53b);
    }), _0x4d7127['find'](_0x3ef7b9(0x149))['each'](function() {
        const _0x5d4f43 = _0x3ef7b9;
        if ($(this)[_0x5d4f43(0xed)](_0x5d4f43(0x27c))) {
            let _0x264352 = 0x0;
            const _0x5d3b01 = $(this)[_0x5d4f43(0xed)]('input-field')[_0x5d4f43(0x26c)]('-')[0x0];
            $(_0x5d4f43(0x26b) + _0x4a184a + _0x5d4f43(0x1f4) + _0x5d3b01 + '\x22]')[_0x5d4f43(0x100)](function() {
                const _0x5b0770 = _0x5d4f43,
                    _0x32209b = $(this)[_0x5b0770(0x14d)](_0x5b0770(0x20c)),
                    _0xe22d16 = parseInt(_0x32209b[_0x5b0770(0x26c)]('-')[0x1]);
                !isNaN(_0xe22d16) && _0xe22d16 > _0x264352 && (_0x264352 = _0xe22d16);
            }), _0x264352++;
            const _0x5a5f5c = _0x5d3b01 + '-' + _0x264352;
            $(this)[_0x5d4f43(0x14d)](_0x5d4f43(0x20c), _0x5a5f5c);
        }
    }), $(_0x3ef7b9(0xe9) + _0x4a184a + '\x22]')[_0x3ef7b9(0x1f5)](_0x1aa290), $(_0x3ef7b9(0x260) + _0x4a184a + '\x22]')[_0x3ef7b9(0x1f5)](_0x4d7127), $(_0x3ef7b9(0x165) + _0x4a184a + '\x22]')[_0x3ef7b9(0x100)](function() {
        const _0x29cd8c = _0x3ef7b9;
        $(this)['text']($(this)[_0x29cd8c(0x13a)](_0x29cd8c(0x1e1) + _0x4a184a + '\x22]')[_0x29cd8c(0x1da)]() + 0x1);
    }), $(_0x3ef7b9(0x188) + _0x4a184a + '\x22]')[_0x3ef7b9(0x100)](function() {
        const _0x10142d = _0x3ef7b9;
        $(this)[_0x10142d(0x1ab)]($(this)[_0x10142d(0x13a)](_0x10142d(0x26b) + _0x4a184a + '\x22]')[_0x10142d(0x1da)]() + 0x1);
    });
    let _0x4c81e7 = $('[data-clone-wrapper=\x22' + _0x4a184a + '\x22]\x20[data-clone=\x22' + _0x4a184a + '\x22]')[_0x3ef7b9(0x1fc)];
    if (_0x4c81e7 >= _0xe3c98e) { $(this)[_0x3ef7b9(0x1bc)](); return; }
    $(this)[_0x3ef7b9(0x204)](), validation();
}), $(_0x3f73aa(0x14b))['on'](_0x3f73aa(0x21c), function() {
    const _0x12b6de = _0x3f73aa,
        _0x24b174 = $(this)[_0x12b6de(0x13a)](_0x12b6de(0x237))[_0x12b6de(0x1da)]();
    let _0x5016f8 = $(this)[_0x12b6de(0xed)](_0x12b6de(0x134));
    var _0x599fb5 = $(_0x12b6de(0x103) + _0x5016f8 + '\x22]')['eq'](0x0)['clone'](!![]),
        _0xadb27d = $(_0x12b6de(0x22d) + _0x5016f8 + '\x22]')['eq'](0x0)[_0x12b6de(0x1b8)](!![]);
    let _0xfbb75f = $(this)[_0x12b6de(0xed)]('add-new-input-limit'),
        _0x15d5d0 = 0x0;
    $(_0x12b6de(0x103) + _0x5016f8 + '\x22]\x20input')[_0x12b6de(0x100)](function() {
        const _0x5473c9 = _0x12b6de,
            _0x5d824e = $(this)['attr'](_0x5473c9(0x22e));
        if (_0x5d824e) { const _0x1f151b = parseInt(_0x5d824e[_0x5473c9(0x26c)]('-')[0x1]);!isNaN(_0x1f151b) && _0x1f151b > _0x15d5d0 && (_0x15d5d0 = _0x1f151b); }
    }), $(_0x12b6de(0x103) + _0x5016f8 + _0x12b6de(0x1a7))[_0x12b6de(0x100)](function() {
        const _0x490728 = _0x12b6de,
            _0x406c1a = $(this)[_0x490728(0x14d)]('name');
        if (_0x406c1a) { const _0x5ce1d7 = parseInt(_0x406c1a['split']('-')[0x1]);!isNaN(_0x5ce1d7) && _0x5ce1d7 > _0x15d5d0 && (_0x15d5d0 = _0x5ce1d7); }
    }), $(_0x12b6de(0x103) + _0x5016f8 + _0x12b6de(0x201))[_0x12b6de(0x100)](function() {
        const _0x327fb9 = _0x12b6de,
            _0xff70f3 = $(this)[_0x327fb9(0x14d)]('name');
        if (_0xff70f3) { const _0x14218d = parseInt(_0xff70f3['split']('-')[0x1]);!isNaN(_0x14218d) && _0x14218d > _0x15d5d0 && (_0x15d5d0 = _0x14218d); }
    }), _0x15d5d0++, _0x599fb5[_0x12b6de(0x10d)](_0x12b6de(0x12d))[_0x12b6de(0x100)](function() {
        const _0x5f4018 = _0x12b6de,
            _0x3d2a72 = $(this)[_0x5f4018(0x14d)]('name');
        let _0x36882d = _0x3d2a72 + '-' + _0x15d5d0;
        $(this)['val'](''), $(this)[_0x5f4018(0x14d)](_0x5f4018(0x22e), _0x36882d), $(this)[_0x5f4018(0x14d)](_0x5f4018(0x16b), _0x36882d);
    }), _0x599fb5[_0x12b6de(0x10d)](_0x12b6de(0xf4))['each'](function() {
        const _0x81fe6d = _0x12b6de,
            _0x1307ca = $(this)[_0x81fe6d(0x14d)](_0x81fe6d(0x22e));
        let _0x5dd7bb = _0x1307ca + '-' + _0x15d5d0;
        $(this)[_0x81fe6d(0x271)](''), $(this)[_0x81fe6d(0x14d)](_0x81fe6d(0x22e), _0x5dd7bb), $(this)['attr'](_0x81fe6d(0x16b), _0x5dd7bb);
    }), _0x599fb5[_0x12b6de(0x10d)](_0x12b6de(0x1fe))[_0x12b6de(0x100)](function() {
        const _0x462f1a = _0x12b6de,
            _0x3fbc31 = $(this)['attr']('name');
        let _0x7ac17b = _0x3fbc31 + '-' + _0x15d5d0;
        $(this)[_0x462f1a(0x271)](''), $(this)['attr']('name', _0x7ac17b), $(this)[_0x462f1a(0x14d)](_0x462f1a(0x16b), _0x7ac17b);
    }), _0xadb27d[_0x12b6de(0x10d)](_0x12b6de(0x149))[_0x12b6de(0x100)](function() {
        const _0x2ea58a = _0x12b6de;
        $(this)[_0x2ea58a(0x14d)](_0x2ea58a(0x20c), _0x2ea58a(0x223) + _0x15d5d0);
    }), $(this)[_0x12b6de(0x225)](_0x12b6de(0x186) + _0x5016f8 + '\x22]')[_0x12b6de(0x1f5)](_0x599fb5), $('[data-display]')['eq'](_0x24b174)['find'](_0x12b6de(0x26e) + _0x5016f8 + '\x22]')['append'](_0xadb27d), $(_0x12b6de(0x1df) + _0x5016f8 + '\x22]')[_0x12b6de(0x100)](function() {
        const _0xfd21fe = _0x12b6de;
        $(this)['text']($(this)[_0xfd21fe(0x13a)](_0xfd21fe(0x103) + _0x5016f8 + '\x22]')[_0xfd21fe(0x1da)]() + 0x1);
    }), $(_0x12b6de(0x17a) + _0x5016f8 + '\x22]')['each'](function() {
        const _0x22fa86 = _0x12b6de;
        $(this)[_0x22fa86(0x1ab)]($(this)[_0x22fa86(0x13a)]('[data-display-input=\x22' + _0x5016f8 + '\x22]')['index']() + 0x1);
    });
    let _0xc01bbc = $(_0x12b6de(0x186) + _0x5016f8 + '\x22]\x20[data-clone-input=\x22' + _0x5016f8 + '\x22]')[_0x12b6de(0x1fc)];
    if (_0xc01bbc >= _0xfbb75f) { $(this)['hide'](); return; }
    $(this)[_0x12b6de(0x204)](), cloneRemoveInput(), validation();
}), $('[data-remove-upload]')['on'](_0x3f73aa(0x21c), function() {
    const _0x173925 = _0x3f73aa,
        _0x5a936e = $(this)[_0x173925(0xed)]('remove-upload');
    $('input[name=\x22' + _0x5a936e + '\x22]')[_0x173925(0x271)](''), validation();
});

function andLogic() {
    const _0x5ecb44 = _0x3f73aa;
    conditionalResult && (steps['eq'](x)[_0x5ecb44(0x10d)](_0x5ecb44(0x240))[_0x5ecb44(0x1bc)](), steps['eq'](x)[_0x5ecb44(0x10d)](_0x5ecb44(0x240))[_0x5ecb44(0x100)](function() {
        const _0x236dff = _0x5ecb44;

        function _0x1730ff(_0x6989fe) {
            const _0x393335 = _0x4954,
                _0x117dce = _0x6989fe[_0x393335(0x26c)]('&'),
                _0x4214fd = [];
            return _0x117dce[_0x393335(0x24a)](_0x2429f6 => {
                const [_0x2ba99b, _0xe5c891] = _0x2429f6['split']('=');
                _0x4214fd['push']({ 'field': _0x2ba99b, 'value': _0xe5c891 });
            }), _0x4214fd;
        }
        const _0x4b5d40 = $(this)[_0x236dff(0x14d)]('data-show-if'),
            _0x1f103a = _0x1730ff(_0x4b5d40);

        function _0x2fc08a(_0x57a7bc, _0x508439) { return _0x508439['some']((_0x2c1eb6, _0x23825a) => { const _0x4f69d5 = _0x4954; if (_0x57a7bc[0x0] && _0x2c1eb6['field'] === _0x57a7bc[0x0][_0x4f69d5(0x21f)]) return _0x57a7bc[_0x4f69d5(0x25a)]((_0x28af53, _0x3beef5) => _0x508439[_0x23825a + _0x3beef5] && _0x508439[_0x23825a + _0x3beef5][_0x4f69d5(0x21f)] === _0x28af53[_0x4f69d5(0x21f)] && _0x508439[_0x23825a + _0x3beef5][_0x4f69d5(0x1ff)] === _0x28af53[_0x4f69d5(0x1ff)]); return ![]; }); }
        const _0x887ecf = _0x2fc08a(_0x1f103a, all_data);
        _0x887ecf ? $(this)[_0x236dff(0x204)]() : $(this)['hide']();
    }));
}
progressiveTarget[_0x3f73aa(0x192)](_0x3f73aa(0x1bc)), progressiveInput['on'](_0x3f73aa(0x12d), function() {
    const _0xc0bacd = _0x3f73aa,
        _0x2f655c = $(this)[_0xc0bacd(0xed)]('input-reveal'),
        _0x35acfd = $(this)[_0xc0bacd(0x271)](),
        _0x194397 = form[_0xc0bacd(0x10d)](_0xc0bacd(0x205) + _0x2f655c + '\x22]')[_0xc0bacd(0xed)](_0xc0bacd(0x14a));
    let _0x16aa74 = form[_0xc0bacd(0x10d)](_0xc0bacd(0x205) + _0x2f655c + _0xc0bacd(0x1b6))[_0xc0bacd(0x1aa)](function() { const _0x3ba3b0 = _0xc0bacd; return $(this)[_0x3ba3b0(0xed)](_0x3ba3b0(0x14a))[_0x3ba3b0(0x226)]() === _0x35acfd[_0x3ba3b0(0x226)](); }),
        _0x309aed = form[_0xc0bacd(0x10d)](_0xc0bacd(0x205) + _0x2f655c + '\x22][data-input-reveal-value=\x22*\x22]');
    form[_0xc0bacd(0x10d)]('[data-input-target=\x22' + _0x2f655c + '\x22]')[_0xc0bacd(0x192)](_0xc0bacd(0x12c)), form[_0xc0bacd(0x10d)]('[data-input-target=\x22' + _0x2f655c + '\x22]')[_0xc0bacd(0x1b4)](_0xc0bacd(0x256));
    _0x35acfd !== '' && (_0x194397[_0xc0bacd(0x226)]() === '*' && _0x35acfd !== '' ? (_0x309aed[_0xc0bacd(0x1b4)]('f-hide'), _0x309aed[_0xc0bacd(0x192)](_0xc0bacd(0x256))) : (_0x16aa74[_0xc0bacd(0x1b4)](_0xc0bacd(0x12c)), _0x16aa74[_0xc0bacd(0x192)](_0xc0bacd(0x256))));

    function _0xccea49(_0x2d824e) {
        const _0x1ced74 = _0xc0bacd;
        _0x2d824e && (form[_0x1ced74(0x10d)](_0x1ced74(0xef) + _0x2d824e + '\x22]')[_0x1ced74(0x271)]() !== '' && form[_0x1ced74(0x10d)](_0x1ced74(0xef) + _0x2d824e + '\x22]')[_0x1ced74(0x196)](_0x1ced74(0x12d)));
    }
    let _0x22ab5c = form[_0xc0bacd(0x10d)](_0xc0bacd(0x205) + _0x2f655c + '\x22]')['find'](_0xc0bacd(0x27b))[_0xc0bacd(0xed)](_0xc0bacd(0x161));
    _0xccea49(_0x22ab5c), form[_0xc0bacd(0x10d)](_0xc0bacd(0x12a))[_0xc0bacd(0x100)](function() {
        const _0x21a0a4 = _0xc0bacd,
            _0x5b7506 = $(this)[_0x21a0a4(0xed)]('input-reveal');
        form[_0x21a0a4(0x10d)](_0x21a0a4(0x205) + _0x5b7506 + '\x22]')['removeClass'](_0x21a0a4(0x256)), form[_0x21a0a4(0x10d)](_0x21a0a4(0x205) + _0x5b7506 + '\x22]')[_0x21a0a4(0x192)](_0x21a0a4(0x12c));
    });
});

function addClickClass() {
    const _0x3b0bc5 = _0x3f73aa,
        _0x74823d = $(this)['data'](_0x3b0bc5(0x253)),
        _0x24eb1f = $(this)[_0x3b0bc5(0x14d)](_0x3b0bc5(0x22e));
    $(_0x3b0bc5(0x1f7) + _0x24eb1f + '\x22]')[_0x3b0bc5(0x213)]()['removeClass'](_0x74823d), $(this)['is'](':checked') && $(this)[_0x3b0bc5(0x213)]()['addClass'](_0x74823d);
}
$(_0x3f73aa(0x155))['on'](_0x3f73aa(0x160), addClickClass);

function updateCounter(_0x38577d) {
    const _0x13dece = _0x3f73aa;
    var _0x190148 = new Date(),
        _0x4602d0 = _0x190148['getMonth'](),
        _0x1d6fe1 = btoa(_0x13dece(0x1fd)),
        _0x542d64 = btoa(_0x4602d0['toString']()),
        _0x5656a9 = getCookie(_0x1d6fe1);
    !_0x5656a9 || _0x5656a9 !== _0x542d64 ? $['post'](_0x13dece(0x151), function() {
        const _0x317020 = _0x13dece;
        console[_0x317020(0x1ca)](_0x317020(0x116)), document[_0x317020(0x18f)] = _0x1d6fe1 + '=' + _0x542d64;
    })[_0x13dece(0x19a)](function(_0x1c6bc3, _0x429f3a, _0x4bec6f) {
        const _0xf7cd12 = _0x13dece;
        console[_0xf7cd12(0x191)](_0xf7cd12(0x222), _0x4bec6f);
    }) : console[_0x13dece(0x1ca)]('Counter\x20already\x20updated\x20for\x20this\x20month.');
}

function getCookie(_0x288064) { const _0x384c3c = _0x3f73aa; var _0x3fe7e7 = null; if (document[_0x384c3c(0x18f)] && document[_0x384c3c(0x18f)] !== '') { var _0x1b9420 = document['cookie'][_0x384c3c(0x26c)](';'); for (var _0x4eb860 = 0x0; _0x4eb860 < _0x1b9420[_0x384c3c(0x1fc)]; _0x4eb860++) { var _0x3d079c = _0x1b9420[_0x4eb860][_0x384c3c(0x233)](); if (_0x3d079c[_0x384c3c(0x174)](0x0, _0x288064[_0x384c3c(0x1fc)] + 0x1) === _0x288064 + '=') { _0x3fe7e7 = decodeURIComponent(_0x3d079c[_0x384c3c(0x174)](_0x288064['length'] + 0x1)); break; } } } return _0x3fe7e7; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput(), disableRadioQuickTap();
const formlyUrlParams = new URLSearchParams(window[_0x3f73aa(0x21d)][_0x3f73aa(0x1dd)]),
    formlySupportParam = formlyUrlParams[_0x3f73aa(0x173)](_0x3f73aa(0x16d)),
    showButton = formlySupportParam === _0x3f73aa(0x127),
    passIcon = _0x3f73aa(0x254),
    failIcon = _0x3f73aa(0x14c);
let isScriptLoaded = !![],
    scriptLocation = _0x3f73aa(0x266),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x3f73aa(0x239) : _0x3f73aa(0x143),
    resultStatus = _0x3f73aa(0x220),
    scriptSrcAdded = '';

function isElementPresent(_0x1aa2e3, _0x15eaca) { const _0x4cfa51 = _0x3f73aa; return document[_0x4cfa51(0x248)]('[' + _0x15eaca + '=\x22' + _0x1aa2e3 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x3f73aa(0x15a), _0x3f73aa(0x109));
const multistepForm = document[_0x3f73aa(0x248)]('form[data-form=\x22multistep\x22]'),
    formStepLength = multistepForm['querySelectorAll']('[data-form=\x22step\x22]')[_0x3f73aa(0x1fc)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document['querySelector'](_0x3f73aa(0x1de)),
    nextBtnExist = multistepContainer[_0x3f73aa(0x248)](_0x3f73aa(0x20d)),
    backBtnExist = multistepContainer[_0x3f73aa(0x248)](_0x3f73aa(0x1eb)),
    submitBtnExist = multistepContainer[_0x3f73aa(0x248)](_0x3f73aa(0x168));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x3f73aa(0x284)]['toLowerCase']() === 'input', isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x3f73aa(0x284)]['toLowerCase']() === _0x3f73aa(0x12d) && submitBtnExist[_0x3f73aa(0x118)][_0x3f73aa(0x226)]() === 'submit', isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x3f73aa(0x284)][_0x3f73aa(0x226)]() === _0x3f73aa(0x12d);
const checkPowerup = _0x134b7d => document[_0x3f73aa(0x248)](_0x134b7d) !== null,
    progressBarAttr = checkPowerup(_0x3f73aa(0x24b)),
    progressIndicatorAttr = checkPowerup(_0x3f73aa(0x1a3)),
    customProgressAttr = checkPowerup(_0x3f73aa(0x1a3)),
    cardDivAttr = checkPowerup(_0x3f73aa(0x16a)),
    currentStepAttr = checkPowerup('[data-text=\x22current-step\x22]'),
    totalStepAttr = checkPowerup(_0x3f73aa(0xfc)),
    enterAttr = checkPowerup(_0x3f73aa(0x146)),
    submitAttr = checkPowerup(_0x3f73aa(0x104)),
    radioSkipAttr = checkPowerup('[data-radio-skip=\x22true\x22]'),
    customCheckboxAttr = checkPowerup('[data-checkbox]'),
    recapatchaAttr = checkPowerup(_0x3f73aa(0x150)),
    dataAnswerOnFirstStep = steps['eq'](0x0)[_0x3f73aa(0x10d)](_0x3f73aa(0x17e))[_0x3f73aa(0xed)](_0x3f73aa(0x121)) === '' || !steps['eq'](0x0)['find'](_0x3f73aa(0x17e))[_0x3f73aa(0xed)]('answer');
let dataGoToDataAnswerOnFormStep = '',
    dataAnswerAndDataGoToPairs = '',
    dataAnswerIsOnDataCard = '';
steps['each'](_0x3194b6 => {
    const _0x4d08fa = _0x3f73aa,
        _0x3f6b9e = steps['eq'](_0x3194b6);
    _0x3f6b9e[_0x4d08fa(0xed)]('answer') && _0x3f6b9e['data'](_0x4d08fa(0x108)) && (dataGoToDataAnswerOnFormStep += '<div>Step\x20' + (_0x3194b6 + 0x1) + '</div>');
    const _0x9261dd = _0x3f6b9e[_0x4d08fa(0x10d)](_0x4d08fa(0x17e));
    _0x9261dd['length'] && (dataAnswerAndDataGoToPairs += _0x4d08fa(0x20b) + (_0x3194b6 + 0x1) + '</div>', _0x9261dd[_0x4d08fa(0x100)]((_0x3e3246, _0x54e698) => {
        const _0x5d72b7 = _0x4d08fa,
            _0x2ce065 = $(_0x54e698);
        dataAnswerAndDataGoToPairs += _0x5d72b7(0x262) + _0x2ce065['data']('answer') + '\x22', _0x2ce065[_0x5d72b7(0xed)](_0x5d72b7(0x108)) && (dataAnswerAndDataGoToPairs += '\x20|\x20<strong>data-go-to\x20</strong>\x20=\x22' + _0x2ce065['data'](_0x5d72b7(0x108)) + '\x22'), dataAnswerAndDataGoToPairs += '</div>';
    })), steps['eq'](_0x3194b6)[_0x4d08fa(0xed)](_0x4d08fa(0x194)) && (steps['eq'](_0x3194b6)['data'](_0x4d08fa(0x121)) || steps['eq'](_0x3194b6)[_0x4d08fa(0x10d)](_0x4d08fa(0x17e))[_0x4d08fa(0xed)](_0x4d08fa(0x121))) && (dataAnswerIsOnDataCard += '<div>Step\x20' + (_0x3194b6 + 0x1) + _0x4d08fa(0x1db));
});
(!isScriptLoaded || scriptLocation !== _0x3f73aa(0x266) || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x3f73aa(0x119));

function isScriptUrlMatch(_0x318bd1, _0x4e9b29) { const _0x5d7b64 = _0x3f73aa; for (var _0x32fade = 0x0; _0x32fade < _0x4e9b29['length']; _0x32fade++) { if (_0x318bd1[_0x5d7b64(0x182)](_0x4e9b29[_0x32fade])) return !![]; } return ![]; }
var keywordsToCheck = [_0x3f73aa(0xea), _0x3f73aa(0x122), _0x3f73aa(0x1cb)],
    scripts = document[_0x3f73aa(0x273)](_0x3f73aa(0x1e4)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x3f73aa(0x1fc)]; i++) {
    var scriptSrcs = scripts[i][_0x3f73aa(0x153)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x3f73aa(0x23c)](scriptSrcs);
}
if (matchedScripts['length'] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x3f73aa(0x248)](_0x3f73aa(0x148) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x3f73aa(0x249)][_0x3f73aa(0x284)] === 'BODY' ? _0x3f73aa(0x215) : _0x3f73aa(0x235));
} else scriptSrcAdded = _0x3f73aa(0x16f) + failIcon;
const newElement = document[_0x3f73aa(0x175)](_0x3f73aa(0x169)),
    newStyle = document[_0x3f73aa(0x175)](_0x3f73aa(0x19d));
newStyle['innerHTML'] = '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x2035%;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20max-height:\x20100vh;\x0a\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a\x20\x20\x20\x20line-height:1.4\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_attribute-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20margin-bottom:\x2014px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20color:\x20#1eee32;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_title\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-header\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.paragraph\x20{\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.hide\x20{\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type._1\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_script\x20{\x0a\x20\x20\x20\x20color:\x20#fffc57;\x0a\x20\x20\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-wrapper\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-link\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-support-title{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-closebtn{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200.3rem;\x0a\x20\x20\x20\x20right:\x200.7rem;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20}\x0a\x20\x20.f-hide{\x0a\x20\x20\x20\x20display\x20:none\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-logic-text{\x0a\x20\x20\x20\x20padding-left:1rem;\x0a\x20\x20}\x0a\x20\x20.f-logic-text\x20strong{\x0a\x20\x20\x20\x20color\x20:\x20white\x20!Important;\x0a\x20\x20}\x0a', document['head']['appendChild'](newStyle);
showButton && document[_0x3f73aa(0x1c7)][_0x3f73aa(0x280)](newElement);
newElement['innerHTML'] = '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (!logicExtra ? passIcon : failIcon) + _0x3f73aa(0x22a) + (quiz ? passIcon : failIcon) + _0x3f73aa(0x13e) + (weightedSelection ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + scriptSrcAdded + '<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (scriptLocation === _0x3f73aa(0x266) ? '<div\x20class=\x22f-text_script\x22>Inside\x20&lt;head&gt;\x20tag<br/></div>' : _0x3f73aa(0x105)) + _0x3f73aa(0x281) + (formStepLength ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (formStepLength > 0x0 ? passIcon : failIcon) + _0x3f73aa(0x15f) + formStepLength + _0x3f73aa(0x1ee) + (nextBtnExist ? passIcon : failIcon) + _0x3f73aa(0x1b7) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x3f73aa(0x274) + (backBtnExist ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x3f73aa(0x16c) + (submitBtnExist ? passIcon : failIcon) + _0x3f73aa(0xeb) + (isSubmitBtnOnSubmit ? failIcon : passIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (progressBarAttr && progressIndicatorAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Automatic\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x3f73aa(0x1bf) : '') + _0x3f73aa(0x113) + (customProgressAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Custom\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x3f73aa(0x1bf) : '') + _0x3f73aa(0x113) + (cardDivAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x3f73aa(0x1bf) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (currentStepAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Current\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3f73aa(0x113) + (totalStepAttr ? _0x3f73aa(0xf7) + passIcon + _0x3f73aa(0x1bf) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (enterAttr ? _0x3f73aa(0x177) + passIcon + _0x3f73aa(0x1bf) : '') + _0x3f73aa(0x113) + (submitAttr ? _0x3f73aa(0x1ce) + passIcon + _0x3f73aa(0x1bf) : '') + _0x3f73aa(0x113) + (radioSkipAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Radio\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x3f73aa(0x1bf) : '') + _0x3f73aa(0x113) + (customCheckboxAttr ? _0x3f73aa(0x11e) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (recapatchaAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>ReCAPTCHA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x3f73aa(0x1bf) : '') + _0x3f73aa(0x15b) + (logicExtra ? _0x3f73aa(0xfa) + (dataAnswerOnFirstStep ? passIcon : failIcon) + _0x3f73aa(0x228) + (dataGoToDataAnswerOnFormStep !== '' ? _0x3f73aa(0x176) + dataGoToDataAnswerOnFormStep + _0x3f73aa(0x25b) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + dataAnswerAndDataGoToPairs + _0x3f73aa(0x13c) + (dataAnswerIsOnDataCard !== '' ? _0x3f73aa(0x19c) + dataAnswerIsOnDataCard + _0x3f73aa(0x25b) : '') + _0x3f73aa(0x20f) : '') + _0x3f73aa(0x110);

function openNav() {
    const _0xb98a52 = _0x3f73aa;
    console[_0xb98a52(0x1ca)](_0xb98a52(0x1b1)), document['getElementById'](_0xb98a52(0xf3))[_0xb98a52(0x19d)][_0xb98a52(0x261)] = _0xb98a52(0x193);
}

function closeNav() {
    const _0x2352b2 = _0x3f73aa;
    document['getElementById'](_0x2352b2(0xf3))[_0x2352b2(0x19d)][_0x2352b2(0x261)] = _0x2352b2(0x1f9);
}