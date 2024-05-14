// 14/May/2024
// Feature update:
// Added custom function on submit

const _0x3e671a = _0x53c3;
(function(_0x32640a, _0xe5d9bb) {
    const _0x5064e7 = _0x53c3,
        _0x294767 = _0x32640a();
    while (!![]) {
        try {
            const _0x20d9d2 = parseInt(_0x5064e7(0x1f1)) / 0x1 * (parseInt(_0x5064e7(0x166)) / 0x2) + -parseInt(_0x5064e7(0x1bf)) / 0x3 + parseInt(_0x5064e7(0x171)) / 0x4 + parseInt(_0x5064e7(0x162)) / 0x5 + -parseInt(_0x5064e7(0x142)) / 0x6 + -parseInt(_0x5064e7(0x215)) / 0x7 * (parseInt(_0x5064e7(0x9c)) / 0x8) + parseInt(_0x5064e7(0x95)) / 0x9;
            if (_0x20d9d2 === _0xe5d9bb) break;
            else _0x294767['push'](_0x294767['shift']());
        } catch (_0x3862db) { _0x294767['push'](_0x294767['shift']()); }
    }
}(_0x4ae1, 0xd424e));
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
let form = $(_0x3e671a(0x1c0)),
    steps = $(_0x3e671a(0x217)),
    progressbarClone = $(_0x3e671a(0x1b5))[_0x3e671a(0x10b)](),
    progressbar, weightedSelection = $(_0x3e671a(0x1e8))[_0x3e671a(0xcb)]('weighted-selection'),
    weightedSelectionRange = $('[data-weighted-selection-range]')[_0x3e671a(0xcb)]('weighted-selection-range'),
    selectMultiple = $(_0x3e671a(0x14c))[_0x3e671a(0xcb)](_0x3e671a(0x145)),
    customError = $(_0x3e671a(0xa9))[_0x3e671a(0xcb)](_0x3e671a(0x1a4)),
    reinitIX = $(_0x3e671a(0xbf))[_0x3e671a(0xcb)]('reinit'),
    memory = $('[data-memory]')[_0x3e671a(0xcb)]('memory'),
    quiz = $('[data-quiz]')[_0x3e671a(0xcb)](_0x3e671a(0x228));
const urlFormly = new URL(window['location'][_0x3e671a(0x1a5)]);
let _params = $('[data-query-param]')[_0x3e671a(0xcb)](_0x3e671a(0x193)),
    logicExtra = $('[data-form=\x22multistep\x22]')[_0x3e671a(0xcb)](_0x3e671a(0x21a)),
    oldSubmitText = $(_0x3e671a(0x21e))[_0x3e671a(0x103)](),
    oldResetText = $(_0x3e671a(0xee))['text'](),
    formReset = $(_0x3e671a(0x1c0))[_0x3e671a(0xcb)](_0x3e671a(0x138)),
    resetDelay = $('[data-reset-delay]')[_0x3e671a(0xcb)](_0x3e671a(0x175)) ? $(_0x3e671a(0x16e))[_0x3e671a(0xcb)](_0x3e671a(0x175)) : 0x7d0,
    redirectDelay = $(_0x3e671a(0x94))[_0x3e671a(0xcb)]('redirect-delay') ? $(_0x3e671a(0x94))['data'](_0x3e671a(0x18b)) : 0x64,
    phoneFormat = $(_0x3e671a(0x1c0))[_0x3e671a(0xcb)]('phone-validation'),
    scrollToTop = $(_0x3e671a(0x1c0))[_0x3e671a(0xcb)](_0x3e671a(0x216)),
    trackLastStep = $(_0x3e671a(0x130))[_0x3e671a(0xcb)](_0x3e671a(0x141)),
    conditionalResult = $(_0x3e671a(0x1d8))[_0x3e671a(0xcb)](_0x3e671a(0x1d4)) === 'AND',
    scrollTopOffset = parseInt($(_0x3e671a(0x1c0))[_0x3e671a(0xcb)]('scroll-top-offset'));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x3e671a(0xd6)](localStorage[_0x3e671a(0x1aa)](_0x3e671a(0xb7))), formlyLastStep = JSON[_0x3e671a(0xd6)](localStorage[_0x3e671a(0x1aa)](_0x3e671a(0x224))), formlyLastStepAnswer = JSON[_0x3e671a(0xd6)](localStorage[_0x3e671a(0x1aa)](_0x3e671a(0x148)));
let paramUrl = $(_0x3e671a(0x1c0))[_0x3e671a(0xcb)](_0x3e671a(0x15f));
const progressiveTarget = $(_0x3e671a(0x1c0))[_0x3e671a(0x8c)](_0x3e671a(0x107)),
    progressiveInput = $(_0x3e671a(0x1c0))[_0x3e671a(0x8c)]('[data-input-reveal]'),
    multiSelections = $('[data-form=\x22multistep\x22]')[_0x3e671a(0xcb)](_0x3e671a(0xaa));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x3e671a(0xbd))[_0x3e671a(0xf5)](function() {
    const _0x199083 = _0x3e671a;
    ogCloneArr[_0x199083(0x149)]({ 'name': $(this)['data'](_0x199083(0x10b)), 'element': $(this)['clone'](!![]), 'display': $(_0x199083(0x1cb) + $(this)[_0x199083(0xcb)](_0x199083(0x10b)) + '\x22]')['eq'](0x0)[_0x199083(0x10b)](!![]) });
});
const setPageLoadTime = () => {
    const _0x24765d = _0x3e671a;
    localStorage['setItem']('pageLoadTime', Date[_0x24765d(0xb4)]()[_0x24765d(0xff)]());
};
setPageLoadTime();
$(_0x3e671a(0x183))[_0x3e671a(0x8d)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x54024d) { notRobot = !![]; }($(steps[x])['data'](_0x3e671a(0x1cc)) || $(steps[x])[_0x3e671a(0x8c)](_0x3e671a(0xb8))[_0x3e671a(0xcb)](_0x3e671a(0x1cc))) && (next = !![]);
$('[data-count-card]')[_0x3e671a(0x8d)] > 0x0 && (countCard = $('[data-count-card]')[_0x3e671a(0xcb)](_0x3e671a(0xd7)));
$('[data-text=\x22error-message\x22]')[_0x3e671a(0x1f2)](), $(progressbarClone)['removeClass']('current'), $(_0x3e671a(0x98))['children']()[_0x3e671a(0x11d)](), $(_0x3e671a(0x21e))[_0x3e671a(0x1f2)](), $(_0x3e671a(0x165))[_0x3e671a(0x1f2)](), steps[_0x3e671a(0xf5)](function() {
    const _0x2759d7 = _0x3e671a;
    $(_0x2759d7(0x98))['append'](progressbarClone[_0x2759d7(0x10b)](!![], !![]));
}), $(_0x3e671a(0xe3))[_0x3e671a(0x1f2)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x3e671a(0x8d)], $(_0x3e671a(0xfc))[_0x3e671a(0x180)](totalSteps)) : ($(steps[x])['data'](_0x3e671a(0x1cc)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x3e671a(0xe6))[_0x3e671a(0x8d)], $(_0x3e671a(0xfc))[_0x3e671a(0x180)](totalSteps), $(_0x3e671a(0x163))[_0x3e671a(0xf5)](function() {
    const _0x18f32d = _0x3e671a;
    $($('[data-form=\x22progress-indicator\x22]')[$(this)[_0x18f32d(0x118)]()])[_0x18f32d(0x1f2)]();
}));
progressbar = $(_0x3e671a(0x98))[_0x3e671a(0x169)](), $(_0x3e671a(0x1b5))['on'](_0x3e671a(0x11e), clickableIndicator), $(_0x3e671a(0x19c))['text'](curStep), steps[_0x3e671a(0x1f2)](), $(_0x3e671a(0x178))[_0x3e671a(0x1f2)](), $(_0x3e671a(0x13c))['each'](function() {
    const _0x425eff = _0x3e671a;
    $(this)['attr'](_0x425eff(0x167), _0x425eff(0xc0));
});

function getParams() {
    const _0x145022 = _0x3e671a;
    urlFormly['searchParams'][_0x145022(0x9a)](function(_0x4af440, _0x4396ed) {
        const _0x533682 = _0x145022;
        searchQ[_0x533682(0x149)]({ 'val': _0x4af440, 'key': _0x4396ed });
    });
}

function getSafe(_0x5199fe, _0x4d03b5) { try { return _0x5199fe(); } catch (_0x8fe34a) { return _0x4d03b5; } }

function phoneAutoFormat(_0x458726) {
    var _0x26d010 = '';
    return function(_0x59ecdf) {
        const _0x425034 = _0x53c3;
        var _0x4cb707 = '',
            _0x1f8393 = _0x59ecdf[_0x425034(0xa2)](/\D/g, ''),
            _0x26b9cc = 0x0,
            _0x320e6c = 0x0;
        while (_0x26b9cc < _0x1f8393[_0x425034(0x8d)] && _0x320e6c < _0x458726[_0x425034(0x8d)]) { _0x458726[_0x320e6c] === 'x' ? (_0x4cb707 += _0x1f8393[_0x26b9cc], _0x26b9cc++) : _0x4cb707 += _0x458726[_0x320e6c], _0x320e6c++; }
        if (_0x59ecdf['length'] < _0x26d010['length']) {
            var _0x36929f = _0x458726[_0x425034(0x84)](_0x320e6c);
            _0x4cb707 += _0x36929f['replace'](/x/g, '');
        }
        return _0x26d010 = _0x4cb707, _0x4cb707;
    };
}

function validateURL(_0x37ac72) { const _0x588b9b = _0x3e671a; return urlPattern[_0x588b9b(0x114)](_0x37ac72) ? !![] : ![]; }
quiz && steps[_0x3e671a(0xf5)](function() {
    const _0x5d60e0 = _0x3e671a;
    $(this)[_0x5d60e0(0x169)]()['attr']('data-radio-skip', !![]), $(this)[_0x5d60e0(0x169)]()[_0x5d60e0(0xb5)](_0x5d60e0(0x127), 0xfa);
});

function disableBtn(_0x52ec85) {
    const _0x583b7a = _0x3e671a;
    fill = ![], !customError && ($(_0x583b7a(0x19e))[_0x583b7a(0x21b)]({ 'opacity': _0x583b7a(0xb2), 'pointer-events': _0x583b7a(0x15c) }), $(_0x583b7a(0x19e))[_0x583b7a(0xa1)](_0x583b7a(0x128)), $(_0x583b7a(0x21e))['css']({ 'opacity': '0.4', 'pointer-events': _0x583b7a(0x15c) }), $(_0x583b7a(0x21e))[_0x583b7a(0xa1)](_0x583b7a(0x128)), $('[data-form-ms=\x22submit-btn\x22]')['css']({ 'opacity': '0.4', 'pointer-events': _0x583b7a(0x15c) }), $(_0x583b7a(0x165))[_0x583b7a(0xa1)]('disabled'));
}

function enableBtn() {
    const _0x59c368 = _0x3e671a;
    fill = !![], $(_0x59c368(0x19e))[_0x59c368(0x21b)]({ 'pointer-events': _0x59c368(0x1ae), 'opacity': '1' }), $(_0x59c368(0x19e))['removeClass'](_0x59c368(0x128)), $(_0x59c368(0x21e))[_0x59c368(0x21b)]({ 'pointer-events': _0x59c368(0x1ae), 'opacity': '1' }), $('[data-form=\x22submit-btn\x22]')['removeClass'](_0x59c368(0x128)), $(_0x59c368(0x165))[_0x59c368(0x21b)]({ 'pointer-events': _0x59c368(0x1ae), 'opacity': '1' }), $(_0x59c368(0x165))[_0x59c368(0x1f7)](_0x59c368(0x128));
}

function saveLastAnswer(_0x391548) {
    const _0xd5327f = _0x3e671a;
    localStorage[_0xd5327f(0x176)](_0xd5327f(0x148)), localStorage[_0xd5327f(0x9b)](_0xd5327f(0x148), JSON[_0xd5327f(0xa5)](_0x391548));
}

function saveFilledInput() {
    const _0x361c53 = _0x3e671a;
    $(_0x361c53(0x17a))[_0x361c53(0x115)](_0x361c53(0x153))['each'](function() {
        const _0x24e8f9 = _0x361c53;
        $(this)[_0x24e8f9(0xb5)](_0x24e8f9(0x167)) === 'checkbox' || $(this)[_0x24e8f9(0xb5)](_0x24e8f9(0x167)) === 'radio' ? $(this)[_0x24e8f9(0x86)]('checked') && (filledInput[_0x24e8f9(0xae)](_0x211a46 => _0x211a46[_0x24e8f9(0x99)] === $(this)[_0x24e8f9(0xb5)](_0x24e8f9(0x15b))) ? (filledInput = filledInput[_0x24e8f9(0xe4)](_0x26e8d3 => _0x26e8d3[_0x24e8f9(0x99)] !== $(this)[_0x24e8f9(0xb5)](_0x24e8f9(0x15b))), $(this)[_0x24e8f9(0x103)]() !== '' && filledInput[_0x24e8f9(0x149)]({ 'inputName': $(this)['attr'](_0x24e8f9(0x15b)), 'value': $(this)['val']() })) : $(this)['val']() !== '' && filledInput[_0x24e8f9(0x149)]({ 'inputName': $(this)[_0x24e8f9(0xb5)](_0x24e8f9(0x15b)), 'value': $(this)[_0x24e8f9(0x103)]() })) : filledInput[_0x24e8f9(0xae)](_0x50f45c => _0x50f45c['inputName'] === $(this)[_0x24e8f9(0xb5)]('name')) ? (filledInput = filledInput['filter'](_0x1bbed3 => _0x1bbed3[_0x24e8f9(0x99)] !== $(this)['attr']('name')), $(this)[_0x24e8f9(0x103)]() !== '' && filledInput[_0x24e8f9(0x149)]({ 'inputName': $(this)['attr']('name'), 'value': $(this)['val']() })) : $(this)[_0x24e8f9(0x103)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x24e8f9(0xb5)](_0x24e8f9(0x15b)), 'value': $(this)[_0x24e8f9(0x103)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x361c53(0x176)](_0x361c53(0x224)), localStorage['setItem'](_0x361c53(0x224), lastStep)), localStorage['removeItem'](_0x361c53(0xb7)), localStorage[_0x361c53(0x9b)]('filledInput', JSON[_0x361c53(0xa5)](filledInput));
}

function _0x4ae1() {
    const _0x517efb = ['\x22]:checked', '[data-answer]', 'go-to', '[data-answer=\x22', ':input', '.w-radio-input', 'history', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', ':input[type=\x22number\x22][required]', 'option[value=\x22', '21hIRCnt', 'scroll-top', '[data-form=\x22step\x22]', 'resolvedOptions', 'userAgent', 'logic-extra', 'css', '[data-checkbox]', 'toISOString', '[data-form=\x22submit-btn\x22]', 'toLowerCase', '[data-radio-skip]', ':input[type=\x22checkbox\x22]:checked', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20is\x20on\x20data-card\x20=\x20true</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ':input[type=\x22tel\x22][required]', 'formlyLastStep', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'BODY', 'select[required]', 'quiz', ':input[type=\x22tel\x22]', ':input[type=\x22email\x22][required]', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Radio\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'user-agent', 'slice', 'input[type=\x22submit\x22]', 'prop', '[data-input-target=\x22', 'keypress', '[data-selection=\x22', '\x22][data-input-reveal-value=\x22*\x22]', 'select[name=\x22', 'find', 'length', 'round', 'field', 'post', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Automatic\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ':input[type=\x22password\x22][required]', 'input:radio[name=\x22', '[data-redirect-delay]', '19747314hoNFBd', 'offset', 'log', '[data-form=\x22progress\x22]', 'inputName', 'forEach', 'setItem', '3945736HvaUWh', 'checkbox', 'textarea[required]', 'f-mySidenav', 'url', 'addClass', 'replace', 'data-skip-to', '[data-add-new-input=\x22', 'stringify', 'radio-delay', '[data-add-new]', 'transform', '[data-custom-error-message]', 'multiple-results', 'current', ':input[type=\x22email\x22]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'some', 'https://webflow.com/api/v1/form/', 'slow', 'clickable-all', '0.4', 'input', 'now', 'attr', 'translateX(-40rem)', 'filledInput', '.active-answer-card', '[data-btn=\x22check\x22]', 'input[name=\x22', 'trigger', 'phone-autoformat', '[data-clone]', 'pageLoadTime', '[data-reinit]', 'button', '[data-click-addclass]', 'Please\x20wait...', 'min-character', 'script[src=\x22', 'select:not([data-prefill=\x22false\x22])', ':input[type=\x22date\x22]', '[data-clone-wrapper=\x22', 'submit-show', 'span', ':input[type=\x22text\x22]', 'data', 'clickable', '\x22][value=\x22', 'preventDefault', ':input[type=\x22file\x22][required]', 'N/A', '.w-form-done', 'clicked', ':input[type=\x22file\x22]', 'closest', 'ms-field', 'parse', 'count-card', '[data-clone-input-wrapper=\x22', ':input[type=\x22url\x22]', '[data-input-reveal]:not(:visible)', ':input[type=\x22checkbox\x22][required]', '[data-input-field=\x22', '[data-display-input]', 'substring', 'querySelector', '[data-clone-input=\x22', '[data-hidden-input=\x22page-visit-duration\x22]', 'add-new-limit', '[data-input-field]', 'filter', '<br>Data\x20Go\x20To\x20=\x20', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'location', 'getElementById', '[data-enter=\x22true\x22]', '<option>', 'fail', '</div>', '<div\x20class=\x22f-text_script\x22>Before\x20&lt;/body&gt;\x20tag<br/></div>', '[data-btn=\x22reset\x22]', 'videsigns', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'input[type=\x22radio\x22]:checked', '[data-cms-select=cms]', '[data-display-index=\x22', 'last', 'each', 'join', 'submit', '[data-go-to]', '[data-remove-upload]', 'Webflow', 'input[autofocus]', '[data-text=\x22total-steps\x22]', 'tagName', 'f-hide', 'toString', 'style', '[data-input-reveal=\x22', 'input:radio[required]', 'val', '\x22]\x20select', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'readystatechange', '[data-input-target]', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Checkboxes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x2035%;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20max-height:\x20100vh;\x0a\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a\x20\x20\x20\x20line-height:1.4\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_attribute-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20margin-bottom:\x2014px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20color:\x20#1eee32;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_title\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-header\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.paragraph\x20{\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.hide\x20{\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type._1\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_script\x20{\x0a\x20\x20\x20\x20color:\x20#fffc57;\x0a\x20\x20\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-wrapper\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-link\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-support-title{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-closebtn{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200.3rem;\x0a\x20\x20\x20\x20right:\x200.7rem;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20}\x0a\x20\x20.f-hide{\x0a\x20\x20\x20\x20display\x20:none\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-logic-text{\x0a\x20\x20\x20\x20padding-left:1rem;\x0a\x20\x20}\x0a\x20\x20.f-logic-text\x20strong{\x0a\x20\x20\x20\x20color\x20:\x20white\x20!Important;\x0a\x20\x20}\x0a', '[data-form=\x22custom-progress-indicator\x22]', 'clone', '\x20|\x20<strong>data-go-to\x20</strong>\x20=\x22', 'appendChild', 'skipTo', '[data-max-checkbox]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '<div>Step\x20', 'textarea[name=\x22', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'test', 'not', 'change', 'init', 'index', '[data-display-input-wrapper=\x22', 'required', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'clone-input', 'remove', 'click', '[data-selection=\x22other\x22]', 'nonvalidated', '[data-add-new-input]', 'timestamp', 'success', '[data-text=\x22error-message\x22]', '[data-input-reveal]', 'radio-skip', 'data-radio-delay', 'disabled', 'split', 'data-go-to', 'select[required]:visible', ':input[type=\x22checkbox\x22]', 'referrer', 'edit-step', ':input[type=\x22password\x22]', '[data-last-step]', 'search', 'active-answer-card', '\x22]:not([data-prefill=\x22false\x22])', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'translateX(0rem)', '[data-skip-to]', 'reset', 'new-tab', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'relationship-', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', '.w-checkbox-input', 'trim', ':input[type=\x22radio\x22]', 'getResponse', 'last-step', '8259360KUhSGa', ':input[type=\x22time\x22][required]', 'textarea[required]:visible', 'select-multiple', '<div\x20class=\x22f-logic-text\x22><strong>data-answer</strong>=\x22', 'redirect', 'formlyLastStepAnswer', 'push', '<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'data-show-if', '[data-select-multiple]', 'parentNode', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'input-field', 'stopPropagation', 'parents', '[data-form=\x22next-btn\x22][data-submit-show]', '[type=\x22submit\x22]', 'textarea:focus', 'body', '\x22]\x20[data-clone=\x22', ':input[type=\x22url\x22][required]', 'f-show', '\x22]\x20[data-input-field^=\x22', 'value', 'name', 'none', 'max-checkbox', 'textarea', 'param-analytics', '[data-cms-select=input]', 'click-addclass', '4374015NOQGrn', '[data-form=\x22step\x22][data-card]', '[data-show-if]', '[data-form-ms=\x22submit-btn\x22]', '1903006YeHsmr', 'type', 'step', 'children', '[data-range]:contains(', '[data-display-input=\x22', ':input[type=\x27radio\x27]:checked', 'option[value=\x22$(this).val()\x22]', '[data-reset-delay]', '\x22]\x20[data-clone-input=\x22', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '4018924URDJys', '[data-radio-skip]:visible', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'novalidate', 'reset-delay', 'removeItem', 'error', '[data-success-card]', 'file', 'form[data-form=\x22multistep\x22]\x20:input', 'DateTimeFormat', 'startsWith', 'div', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'FormlyLogic\x20enabled', 'text', 'select', 'cookie', 'div.g-recaptcha', 'pushState', 'destroy', 'top', '[data-clone=\x22', 'block-domain', 'first', 'status', 'redirect-delay', 'remove-upload', '[data-form=\x22back-btn\x22]', 'every', '[data-form=\x22submit\x22]:visible', 'selected', ':checked', '[data-hidden-input=\x22', 'query-param', ':input[type=\x22number\x22]', '[aria-label=\x22Remove\x20file\x22]', '[data-btn=\x22edit\x22]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'counter', 'keyCode', '[data-answer][data-radio-skip]:visible', 'ix2', '[data-text=\x22current-step\x22]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-form=\x22next-btn\x22]', 'FAIL', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'Inside\x20<head>\x20tag', 'data-form', 'time-zone', 'custom-error-message', 'href', 'src', 'html,\x20body', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a', 'getElementsByTagName', 'getItem', '[data-cms-select=text]', 'data-name', 'open', 'auto', 'input[type=\x22radio\x22]', '[data-form=\x22remove-clone\x22]', 'ctrlKey', ':first', 'parent', '[data-display-input-index=\x22', '[data-form=\x22progress-indicator\x22]', '[data-text=\x22total-weight\x22]', '[data-submit=\x22true\x22]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'show', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[data-enter]', 'PASS', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-clickable-all]', '3900090KGRHJQ', '[data-form=\x22multistep\x22]', '\x22]\x20input', 'innerHTML', 'width', '<br>Data\x20Answer\x20=\x20', 'includes', 'formly', 'findIndex', 'input[type=\x22checkbox\x22]:visible', 'display', 'multistep', '[data-display=\x22', 'card', '[data-card=\x22true\x22]', 'selection', 'w--redirected-checked', 'radio', '[data-display]', 'data-input-field', 'Failed\x20to\x20update\x20counter:', 'conditional-result', 'height', 'require', '[data-radio-skip=\x22true\x22]', '[data-conditional-result]', 'key', '[data-clickable]', 'head', 'add-new-input-limit', '\x22]\x20textarea', 'answer', 'backTo', 'input[type=\x22email\x22]:visible', 'input[type=\x22text\x22][required]:visible', 'wait', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '[data-selection]', 'fadeIn', 'input-reveal', 'input:checkbox', '[data-weighted-selection]', '[data-radio-delay]', 'siblings', 'input-reveal-value', ':input[required]', 'https://videsigns-staging.co.uk/formly-counter', 'focus', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;\x20on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-clone-input]', '1HomEYj', 'hide', '[data-form=\x22remove-input-clone\x22]', 'get', '[required]', 'skip-to', 'removeClass', 'debug-mode', 'timeZone', 'add-new-input', ':input[type=\x22checkbox\x22][required]:checked', 'dispatchEvent', ':input[type=\x22text\x22][required]', '[data-callback=\x22recaptcha\x22]', 'click-path', '[data-display-wrapper=\x22', 'append', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Total\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-add-new=\x22', '[data-success-card=\x22', 'createElement', 'formly-support', '[data-form=\x22submit-btn\x22]:visible', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Current\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '_blank'];
    _0x4ae1 = function() { return _0x517efb; };
    return _0x4ae1();
}

function scrollTop() {
    const _0x1c3c01 = _0x3e671a;
    scrollToTop && $(_0x1c3c01(0x1a7))['animate']({ 'scrollTop': $(_0x1c3c01(0x1c0))[_0x1c3c01(0x96)]()[_0x1c3c01(0x186)] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x161897) {
    const _0x4f7930 = _0x3e671a;
    var _0x1cee97 = window['location'][_0x4f7930(0x1a5)],
        _0x47a362 = new URLSearchParams(window['location'][_0x4f7930(0x131)]);
    _0x47a362['set'](_0x4f7930(0x168), _0x161897);
    var _0x12ade9 = _0x1cee97['split']('?')[0x0] + '?' + _0x47a362[_0x4f7930(0xff)]();
    window[_0x4f7930(0x211)][_0x4f7930(0x184)]({}, '', _0x12ade9);
}

function updateStep() {
    const _0x3e0443 = _0x3e671a;
    scrollTop(), skip = ![], $(_0x3e0443(0x10a))[_0x3e0443(0x1f7)](_0x3e0443(0x128));
    $(_0x3e0443(0x1da))[_0x3e0443(0xcb)](_0x3e0443(0xcc)) && (steps['find'](':input[required]')[_0x3e0443(0xf5)](function() {
        const _0x16e094 = _0x3e0443;
        $($(_0x16e094(0x10a))[$(this)[_0x16e094(0x151)](_0x16e094(0x217))['index']()]), $(this)['val']() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x3e0443(0x85))[_0x3e0443(0xa1)](_0x3e0443(0x128)) : $('input[type=\x22submit\x22]')['removeClass'](_0x3e0443(0x128)));
    $(_0x3e0443(0x10a))[_0x3e0443(0x1f7)](_0x3e0443(0xab)), $(_0x3e0443(0x10a))['addClass'](_0x3e0443(0x128)), $($(_0x3e0443(0x10a))[x])[_0x3e0443(0xa1)]('current'), selection = selections['filter'](_0x337df6 => _0x337df6['step'] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x3e0443(0x10e)]) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x3e0443(0x20c))[_0x3e0443(0x1f2)](), steps[_0x3e0443(0x1f2)]();
    reinitIX === !![] && window[_0x3e0443(0xfa)][_0x3e0443(0x185)]();
    $(progressbar)[_0x3e0443(0x1f7)]('current');
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])[_0x3e0443(0xa1)](_0x3e0443(0xab)) : !$(steps[i])[_0x3e0443(0xcb)](_0x3e0443(0x1cc)) && $(progressbar[i])[_0x3e0443(0xa1)](_0x3e0443(0xab)); }
    reinitIX === !![] ? (window[_0x3e0443(0xfa)] && window[_0x3e0443(0xfa)][_0x3e0443(0x1d6)](_0x3e0443(0x19b))[_0x3e0443(0x117)](), document[_0x3e0443(0x1fc)](new Event(_0x3e0443(0x106))), $(steps[x])[_0x3e0443(0x1b9)]()) : $(steps[x])[_0x3e0443(0x1e5)](_0x3e0443(0xb0));
    $('.active-answer-card')[_0x3e0443(0x1f7)]('active-answer-card');
    x === 0x0 && !$(steps[x])['data'](_0x3e0443(0x1cc)) && ($(steps[x])['find'](_0x3e0443(0x20c))[_0x3e0443(0x1b9)](), $(steps[x])[_0x3e0443(0x8c)]('[data-answer]')[_0x3e0443(0xa1)](_0x3e0443(0x132)));
    selection[_0x3e0443(0x8d)] > 0x0 ? ($(steps[x])[_0x3e0443(0x8c)](_0x3e0443(0x20e) + selection[0x0]['selected'] + '\x22]')['show'](), $(steps[x])['find'](_0x3e0443(0x20e) + selection[0x0][_0x3e0443(0x190)] + '\x22]')[_0x3e0443(0xa1)](_0x3e0443(0x132))) : ($(steps[x])[_0x3e0443(0x8c)]('[data-answer=\x22' + answer + '\x22]')[_0x3e0443(0x1b9)](), $(steps[x])[_0x3e0443(0x8c)](_0x3e0443(0x20e) + answer + '\x22]')[_0x3e0443(0xa1)](_0x3e0443(0x132)));
    if (x === 0x0) $(_0x3e0443(0x18d))[_0x3e0443(0x1f2)](), $(_0x3e0443(0x19e))[_0x3e0443(0x1b9)](), $('[data-form=\x22submit-btn\x22]')[_0x3e0443(0x1f2)]();
    else {
        if (x === steps[_0x3e0443(0x8d)] - 0x1 || $(steps[x])['find'](_0x3e0443(0x18f))[_0x3e0443(0x8d)] > 0x0) {
            $(_0x3e0443(0x19e))['hide']();
            if ($(steps[x])[_0x3e0443(0x8c)](_0x3e0443(0x152))[_0x3e0443(0xcb)](_0x3e0443(0xc8))) $(steps[x])[_0x3e0443(0x8c)]('[data-form=\x22next-btn\x22][data-submit-show]')['show']();
            else $(_0x3e0443(0x19e))[_0x3e0443(0xcb)]('submit-show') && $(_0x3e0443(0x19e))[_0x3e0443(0x1b9)]();
            $(_0x3e0443(0x21e))[_0x3e0443(0x1b9)](), $(_0x3e0443(0x165))[_0x3e0443(0x1b9)](), $('[data-form=\x22back-btn\x22]')[_0x3e0443(0x1b9)]();
        } else $(_0x3e0443(0x19e))[_0x3e0443(0x1b9)](), $('[data-form=\x22back-btn\x22]')[_0x3e0443(0x1b9)](), $(_0x3e0443(0x21e))[_0x3e0443(0x1f2)](), $(_0x3e0443(0x165))[_0x3e0443(0x1f2)]();
    }
    $($(steps[x])[_0x3e0443(0x8c)](_0x3e0443(0xfb))[0x0])[_0x3e0443(0x1ee)](), $($(steps[x])['find']('textarea[autofocus]')[0x0])['focus'](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x3e0443(0x10a))[idx])[_0x3e0443(0x1f7)](_0x3e0443(0x128)); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x4af108, _0x268318, _0x29c765) {
    const _0x19da44 = _0x3e671a;
    let _0x15d101 = _0x4af108['includes']('@') ? _0x4af108[_0x19da44(0x129)]('@')[0x1][_0x19da44(0x129)]('.')[0x0] : [];
    dom = [];
    _0x268318 !== undefined && _0x268318[_0x19da44(0x129)](',')[_0x19da44(0x9a)](function(_0x45623d) {
        const _0x2c59b3 = _0x19da44;
        _0x45623d[_0x2c59b3(0x1c5)](_0x15d101) && dom['push'](_0x15d101);
    });
    dom['length'] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x54dd69 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x54dd69[_0x19da44(0x114)](_0x4af108) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x19da44(0x149)]({ 'input': _0x29c765 })) : emailFilled = !![];
}

function phoneValidation(_0x1c4794, _0x31fda3, _0x59e1fb) {
    if (phoneFormat) return _0x31fda3 >= _0x59e1fb ? !![] : ![];
    else { if (_0x31fda3 >= _0x59e1fb) return !![]; }
}

function _0x53c3(_0xa28a31, _0x510f5f) { const _0x4ae104 = _0x4ae1(); return _0x53c3 = function(_0x53c3c8, _0x448e7d) { _0x53c3c8 = _0x53c3c8 - 0x84; let _0x19777e = _0x4ae104[_0x53c3c8]; return _0x19777e; }, _0x53c3(_0xa28a31, _0x510f5f); }

function validation() {
    const _0x5ed3ec = _0x3e671a;
    $(steps[x])[_0x5ed3ec(0xcb)](_0x5ed3ec(0x1cc)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x144))[_0x5ed3ec(0x8d)], textInputLength = $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x1e1))[_0x5ed3ec(0x8d)], selectInputLength = $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x12b))[_0x5ed3ec(0x8d)], emailInputLength = $(steps[x])['find'](_0x5ed3ec(0x1e0))['length'], checkboxInputLength = $(steps[x])['find'](_0x5ed3ec(0x1c8))['length'];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])['data'](_0x5ed3ec(0x9d)) ? $(steps[x])[_0x5ed3ec(0xcb)](_0x5ed3ec(0x9d)) : $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x21c))[_0x5ed3ec(0x8d)] > 0x0 ? $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x21c))[_0x5ed3ec(0xcb)](_0x5ed3ec(0x9d)) : 0x0, maxCheckCount = $(steps[x])[_0x5ed3ec(0xcb)]('max-checkbox') ? $(steps[x])[_0x5ed3ec(0xcb)](_0x5ed3ec(0x15d)) : $(steps[x])['find'](_0x5ed3ec(0x10f))[_0x5ed3ec(0x8d)] > 0x0 ? $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x10f))['data'](_0x5ed3ec(0x15d)) : 0x0;
    if (!logicExtra) {
        let _0x16127b = $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x12c)),
            _0x1bebf7 = _0x16127b[_0x5ed3ec(0xe4)](_0x5ed3ec(0x1f5)),
            _0x1857ee = _0x16127b[_0x5ed3ec(0xe4)](_0x5ed3ec(0x191));
        if (_0x16127b[_0x5ed3ec(0x8d)] > 0x0) {
            if (checkCount === '*' || checkCount > _0x16127b['length']) _0x16127b['each'](function() {
                const _0x522fac = _0x5ed3ec;
                $(this)['is'](':checked') ? (checkboxFilled = !![], resetInputErrorMessage($(this)['attr'](_0x522fac(0x15b)))) : (checkboxFilled = ![], unfilledArr[_0x522fac(0x149)]({ 'input': $(this)[_0x522fac(0xb5)](_0x522fac(0x15b)) }));
            });
            else {
                if (_0x1857ee['length'] >= checkCount) {
                    if (_0x1bebf7[_0x5ed3ec(0x8d)] > 0x0) _0x1bebf7['length'] === _0x1857ee['length'] ? (checkboxFilled = !![], resetInputErrorMessage(_0x1bebf7[_0x5ed3ec(0x189)]()[_0x5ed3ec(0xb5)](_0x5ed3ec(0x15b)))) : (checkboxFilled = ![], _0x1bebf7[_0x5ed3ec(0x115)](_0x5ed3ec(0x191))[_0x5ed3ec(0xf5)](function() {
                        const _0x1b7b30 = _0x5ed3ec;
                        unfilledArr[_0x1b7b30(0x149)]({ 'input': $(this)[_0x1b7b30(0xb5)](_0x1b7b30(0x15b)) });
                    }));
                    else {}
                } else checkboxFilled = ![], _0x1bebf7[_0x5ed3ec(0x115)](_0x5ed3ec(0x191))[_0x5ed3ec(0xf5)](function() {
                    const _0x4909b7 = _0x5ed3ec;
                    unfilledArr[_0x4909b7(0x149)]({ 'input': $(this)['attr'](_0x4909b7(0x15b)) });
                }), unfilledArr[_0x5ed3ec(0x149)]({ 'input': _0x16127b[_0x5ed3ec(0x189)]()[_0x5ed3ec(0xb5)](_0x5ed3ec(0x15b)) });
            }
        }
        $(steps[x])[_0x5ed3ec(0x8c)]('input:radio[required]')[_0x5ed3ec(0xf5)](function(_0x569fa7) {
            const _0x221e79 = _0x5ed3ec;
            var _0x24b2a6 = $(this)[_0x221e79(0xb5)](_0x221e79(0x15b));
            $(_0x221e79(0x93) + _0x24b2a6 + _0x221e79(0x20b))[_0x221e79(0x8d)] == 0x0 ? (!empReqRadio['find'](_0xfd4887 => _0xfd4887[_0x221e79(0xb3)] === _0x569fa7) && empReqRadio[_0x221e79(0x149)]({ 'input': _0x569fa7 }), unfilledArr[_0x221e79(0x149)]({ 'input': $(this)[_0x221e79(0xb5)](_0x221e79(0x15b)) })) : empReqRadio = empReqRadio[_0x221e79(0xe4)](_0x916048 => _0x916048[_0x221e79(0xb3)] !== _0x569fa7), empReqRadio['length'] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](':input[type=\x22text\x22][required]')[_0x5ed3ec(0xf5)](function(_0x5f0662) {
            const _0x25634e = _0x5ed3ec;
            let _0x3bd39b = $(this)['val']()[_0x25634e(0x8d)],
                _0x31e4cc = $(this)[_0x25634e(0xcb)](_0x25634e(0xc3)) ? $(this)[_0x25634e(0xcb)](_0x25634e(0xc3)) : 0x0;
            $(this)[_0x25634e(0x103)]() !== '' && _0x3bd39b >= _0x31e4cc ? empReqInput = empReqInput[_0x25634e(0xe4)](_0x11a5dc => _0x11a5dc[_0x25634e(0xb3)] !== _0x5f0662) : (!empReqInput[_0x25634e(0x8c)](_0x142004 => _0x142004['input'] === _0x5f0662) && empReqInput[_0x25634e(0x149)]({ 'input': _0x5f0662 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x25634e(0x15b)) })), empReqInput['length'] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x92))[_0x5ed3ec(0xf5)](function(_0x14bf58) {
            const _0x253d77 = _0x5ed3ec;
            let _0x4fe0d0 = $(this)[_0x253d77(0x103)]()[_0x253d77(0x8d)],
                _0x2a7ccf = $(this)[_0x253d77(0xcb)](_0x253d77(0xc3)) ? $(this)[_0x253d77(0xcb)](_0x253d77(0xc3)) : 0x0;
            $(this)[_0x253d77(0x103)]() !== '' && _0x4fe0d0 >= _0x2a7ccf ? empReqPassword = empReqPassword[_0x253d77(0xe4)](_0x7d95e8 => _0x7d95e8[_0x253d77(0xb3)] !== _0x14bf58) : (!empReqPassword['find'](_0x4219e9 => _0x4219e9[_0x253d77(0xb3)] === _0x14bf58) && empReqPassword[_0x253d77(0x149)]({ 'input': _0x14bf58 }), unfilledArr[_0x253d77(0x149)]({ 'input': $(this)['attr'](_0x253d77(0x15b)) })), empReqPassword[_0x253d77(0x8d)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x157))[_0x5ed3ec(0xf5)](function(_0x3ca159) {
            const _0x2ee570 = _0x5ed3ec;
            let _0x300c11 = $(this)[_0x2ee570(0x103)]()[_0x2ee570(0x8d)],
                _0x48b18d = $(this)[_0x2ee570(0xcb)]('min-character') ? $(this)[_0x2ee570(0xcb)]('min-character') : 0x0;
            $(this)[_0x2ee570(0x103)]() !== '' && _0x300c11 >= _0x48b18d ? empReqUrl = empReqUrl[_0x2ee570(0xe4)](_0x1c50bd => _0x1c50bd[_0x2ee570(0xb3)] !== _0x3ca159) : (!empReqTime['find'](_0x4f081b => _0x4f081b[_0x2ee570(0xb3)] === _0x3ca159) && empReqUrl['push']({ 'input': _0x3ca159 }), unfilledArr[_0x2ee570(0x149)]({ 'input': $(this)[_0x2ee570(0xb5)](_0x2ee570(0x15b)) })), empReqUrl[_0x2ee570(0x8d)] === 0x0 && validateURL($(this)[_0x2ee570(0x103)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x143))[_0x5ed3ec(0xf5)](function(_0x10ef0b) {
            const _0x34d419 = _0x5ed3ec;
            let _0x2134f6 = $(this)['val']()[_0x34d419(0x8d)],
                _0xd8c135 = $(this)[_0x34d419(0xcb)]('min-character') ? $(this)[_0x34d419(0xcb)](_0x34d419(0xc3)) : 0x0;
            $(this)[_0x34d419(0x103)]() !== '' && _0x2134f6 >= _0xd8c135 ? empReqTime = empReqTime[_0x34d419(0xe4)](_0x2a38f2 => _0x2a38f2[_0x34d419(0xb3)] !== _0x10ef0b) : (!empReqTime[_0x34d419(0x8c)](_0x15929b => _0x15929b[_0x34d419(0xb3)] === _0x10ef0b) && empReqTime[_0x34d419(0x149)]({ 'input': _0x10ef0b }), unfilledArr[_0x34d419(0x149)]({ 'input': $(this)[_0x34d419(0xb5)]('name') })), empReqTime[_0x34d419(0x8d)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find'](':input[type=\x22date\x22][required]')[_0x5ed3ec(0xf5)](function(_0x2a622a) {
            const _0x27677f = _0x5ed3ec;
            $(this)[_0x27677f(0x103)]() !== '' ? empReqDate = empReqDate[_0x27677f(0xe4)](_0x1209b1 => _0x1209b1[_0x27677f(0xb3)] !== _0x2a622a) : (!empReqDate[_0x27677f(0x8c)](_0x30fa4f => _0x30fa4f[_0x27677f(0xb3)] === _0x2a622a) && empReqDate[_0x27677f(0x149)]({ 'input': _0x2a622a }), unfilledArr[_0x27677f(0x149)]({ 'input': $(this)[_0x27677f(0xb5)](_0x27677f(0x15b)) })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](':input[type=\x22tel\x22][required]')[_0x5ed3ec(0xf5)](function(_0x1c4036) {
            const _0x56ed3e = _0x5ed3ec;
            if ($(this)[_0x56ed3e(0x103)]() !== '') {
                let _0x4de59b = $(this)[_0x56ed3e(0x103)]()['length'],
                    _0x2ef7c5 = $(this)[_0x56ed3e(0xcb)](_0x56ed3e(0xc3)) ? $(this)[_0x56ed3e(0xcb)](_0x56ed3e(0xc3)) : 0x0;
                if ($(this)['data']('phone-autoformat')) {
                    var _0x1ae332 = phoneAutoFormat($(this)[_0x56ed3e(0xcb)](_0x56ed3e(0xbc)));
                    $(this)[_0x56ed3e(0x103)](_0x1ae332($(this)['val']()));
                }
                phoneValidation($(this)['val'](), _0x4de59b, _0x2ef7c5) ? empReqTel = empReqTel[_0x56ed3e(0xe4)](_0x107d16 => _0x107d16['input'] !== _0x1c4036) : empReqTel['push']({ 'input': _0x1c4036 });
            } else !empReqTel[_0x56ed3e(0x8c)](_0x12259e => _0x12259e[_0x56ed3e(0xb3)] === _0x1c4036) && empReqTel[_0x56ed3e(0x149)]({ 'input': _0x1c4036 }), unfilledArr['push']({ 'input': $(this)[_0x56ed3e(0xb5)](_0x56ed3e(0x15b)) });
            empReqTel['length'] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])['find'](_0x5ed3ec(0xcf))[_0x5ed3ec(0xf5)](function(_0x5c9e82) {
            const _0x1bf838 = _0x5ed3ec;
            $(this)[_0x1bf838(0x103)]() !== '' ? empReqFile = empReqFile['filter'](_0x240d9e => _0x240d9e[_0x1bf838(0xb3)] !== _0x5c9e82) : (!empReqFile[_0x1bf838(0x8c)](_0x199bad => _0x199bad[_0x1bf838(0xb3)] === _0x5c9e82) && empReqFile[_0x1bf838(0x149)]({ 'input': _0x5c9e82 }), unfilledArr[_0x1bf838(0x149)]({ 'input': $(this)['attr'](_0x1bf838(0x15b)) })), empReqFile[_0x1bf838(0x8d)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])['find'](_0x5ed3ec(0x213))['each'](function(_0x64b0b0) {
            const _0x4105f6 = _0x5ed3ec;
            let _0x118730 = $(this)[_0x4105f6(0x103)]()[_0x4105f6(0x8d)],
                _0x4243bc = $(this)[_0x4105f6(0xcb)](_0x4105f6(0xc3)) ? $(this)[_0x4105f6(0xcb)](_0x4105f6(0xc3)) : 0x0;
            $(this)[_0x4105f6(0x103)]() !== '' && _0x118730 >= _0x4243bc ? empReqNum = empReqNum[_0x4105f6(0xe4)](_0x5e6372 => _0x5e6372[_0x4105f6(0xb3)] !== _0x64b0b0) : (!empReqNum[_0x4105f6(0x8c)](_0x2090cc => _0x2090cc[_0x4105f6(0xb3)] === _0x64b0b0) && empReqNum[_0x4105f6(0x149)]({ 'input': _0x64b0b0 }), unfilledArr['push']({ 'input': $(this)[_0x4105f6(0xb5)]('name') })), empReqNum[_0x4105f6(0x8d)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x227))[_0x5ed3ec(0xf5)](function(_0x320497) {
            const _0x9cf114 = _0x5ed3ec;
            let _0x12bfed = $(this)['val']();
            _0x12bfed === '' && (_0x12bfed = null), _0x12bfed != null ? empReqSelect = empReqSelect[_0x9cf114(0xe4)](_0x27359c => _0x27359c[_0x9cf114(0xb3)] !== _0x320497) : (!empReqSelect[_0x9cf114(0x8c)](_0x2299c2 => _0x2299c2[_0x9cf114(0xb3)] === _0x320497) && empReqSelect[_0x9cf114(0x149)]({ 'input': _0x320497 }), unfilledArr[_0x9cf114(0x149)]({ 'input': $(this)[_0x9cf114(0xb5)](_0x9cf114(0x15b)) })), empReqSelect[_0x9cf114(0x8d)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x9e))[_0x5ed3ec(0xf5)](function(_0x4daf47) {
            const _0x511ed5 = _0x5ed3ec;
            let _0xe9a505 = $(this)[_0x511ed5(0x103)]()[_0x511ed5(0x8d)],
                _0x315a2e = $(this)[_0x511ed5(0xcb)]('min-character') ? $(this)[_0x511ed5(0xcb)](_0x511ed5(0xc3)) : 0x0;
            $(this)[_0x511ed5(0x103)]() !== '' && _0xe9a505 >= _0x315a2e ? empReqTextarea = empReqTextarea[_0x511ed5(0xe4)](_0xa0b5f5 => _0xa0b5f5[_0x511ed5(0xb3)] !== _0x4daf47) : (!empReqTextarea[_0x511ed5(0x8c)](_0x2e3633 => _0x2e3633[_0x511ed5(0xb3)] === _0x4daf47) && empReqTextarea[_0x511ed5(0x149)]({ 'input': _0x4daf47 }), unfilledArr[_0x511ed5(0x149)]({ 'input': $(this)[_0x511ed5(0xb5)](_0x511ed5(0x15b)) })), empReqTextarea['length'] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x22a))[_0x5ed3ec(0xf5)](function() {
            const _0x1f09e2 = _0x5ed3ec;
            $(this)[_0x1f09e2(0x103)]() !== '' ? validateEmail($(this)[_0x1f09e2(0x103)](), $(this)['data'](_0x1f09e2(0x188)), $(this)[_0x1f09e2(0xb5)](_0x1f09e2(0x15b))) : (emailFilled = ![], unfilledArr[_0x1f09e2(0x149)]({ 'input': $(this)['attr']('name') }));
        });
    } else {
        if ($(steps[x])[_0x5ed3ec(0xcb)](_0x5ed3ec(0x1cc))) answer = $(steps[x])['find']('[data-go-to]')['data'](_0x5ed3ec(0x20d)), selections = selections[_0x5ed3ec(0xe4)](_0x2e74ba => _0x2e74ba[_0x5ed3ec(0x168)] !== x), selections[_0x5ed3ec(0x149)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0xcb)]('card') && (answer = $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0xcb)]('go-to'), selections = selections[_0x5ed3ec(0xe4)](_0x19210e => _0x19210e['step'] !== x), selections[_0x5ed3ec(0x149)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[x])['find']('.active-answer-card')[_0x5ed3ec(0x8c)](':input')['is']('[type=\x22checkbox\x22]')) {
            if (checkCount === '*' || checkCount > $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x12c))[_0x5ed3ec(0x8d)]) $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x12c))[_0x5ed3ec(0xf5)](function() {
                const _0x4627af = _0x5ed3ec;
                if ($(this)['is'](_0x4627af(0x191))) {
                    if ($(steps[x])['find'](_0x4627af(0x1ec))[_0x4627af(0x8d)] < 0x1) {
                        let _0x2fb46b = undefined;
                        $(this)['parents'](_0x4627af(0x137))[_0x4627af(0xcb)](_0x4627af(0x1f6)) && (_0x2fb46b = $(this)[_0x4627af(0x151)]('[data-skip-to]')[_0x4627af(0xcb)]('skip-to'));
                        if ($(this)[_0x4627af(0x151)](_0x4627af(0xf8))[_0x4627af(0xb5)](_0x4627af(0x12a))) {
                            let _0x1bf1c7 = $(this)[_0x4627af(0x151)]('[data-go-to]')[_0x4627af(0xb5)](_0x4627af(0x12a));
                            selections = selections[_0x4627af(0xe4)](_0x4a8f5c => _0x4a8f5c[_0x4627af(0x168)] !== x), selections[_0x4627af(0x149)]({ 'step': x, 'selected': _0x1bf1c7 });
                            if (_0x2fb46b) {
                                selections = selections[_0x4627af(0xe4)](_0x5f5062 => _0x5f5062[_0x4627af(0x168)] !== _0x2fb46b - 0x2), selections[_0x4627af(0x149)]({ 'step': _0x2fb46b - 0x2, 'selected': _0x1bf1c7 });
                                let _0x2159f0 = selections[_0x4627af(0x1c7)](_0x26422d => _0x26422d['step'] === x);
                                selections[_0x2159f0]['skipTo'] = parseInt(_0x2fb46b) - 0x1, selections[_0x2159f0]['backTo'] = x;
                            }
                        }
                        checkboxFilled = !![], $(steps[x])[_0x4627af(0x8c)](_0x4627af(0x1fb))['length'] >= $(steps[x])['find'](':input[type=\x22checkbox\x22][required]')['length'] && resetInputErrorMessage($(steps[x])['find'](_0x4627af(0x12c))[_0x4627af(0xb5)]('name'));
                    }
                } else checkboxFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x4627af(0xb5)](_0x4627af(0x15b)) });
            });
            else {
                if ($(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))['find'](_0x5ed3ec(0x221))['length'] >= checkCount) {
                    if ($(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](':input[type=\x22checkbox\x22]')[_0x5ed3ec(0x151)](_0x5ed3ec(0xf8))[_0x5ed3ec(0xb5)]('data-go-to')) {
                        let _0x50e30c = undefined;
                        $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')[_0x5ed3ec(0x8c)](_0x5ed3ec(0x12c))[_0x5ed3ec(0x151)](_0x5ed3ec(0x137))[_0x5ed3ec(0xb5)](_0x5ed3ec(0xa3)) && (_0x50e30c = $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x221))[_0x5ed3ec(0x151)]('[data-skip-to]')['attr'](_0x5ed3ec(0xa3)));
                        let _0x456123 = $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x12c))[_0x5ed3ec(0x151)](_0x5ed3ec(0xf8))['attr'](_0x5ed3ec(0x12a));
                        selections = selections[_0x5ed3ec(0xe4)](_0x230520 => _0x230520['step'] !== x), selections[_0x5ed3ec(0x149)]({ 'step': x, 'selected': _0x456123 });
                        if (_0x50e30c) {
                            selections = selections[_0x5ed3ec(0xe4)](_0x3a4f8f => _0x3a4f8f[_0x5ed3ec(0x168)] !== _0x50e30c - 0x2), selections[_0x5ed3ec(0x149)]({ 'step': _0x50e30c - 0x2, 'selected': _0x456123 });
                            let _0x314dd5 = selections['findIndex'](_0x283333 => _0x283333['step'] === x);
                            selections[_0x314dd5]['skipTo'] = parseInt(_0x50e30c) - 0x1, selections[_0x314dd5]['backTo'] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x1fb))[_0x5ed3ec(0x8d)] >= $(steps[x])[_0x5ed3ec(0x8c)](':input[type=\x22checkbox\x22][required]')[_0x5ed3ec(0x8d)] && resetInputErrorMessage($(steps[x])['find'](':input[type=\x22checkbox\x22]')['attr'](_0x5ed3ec(0x15b)));
                } else checkboxFilled = ![], $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xdb))['each'](function() {
                    const _0x80f255 = _0x5ed3ec;
                    $(this)[_0x80f255(0x115)](_0x80f255(0x191)) && unfilledArr[_0x80f255(0x149)]({ 'input': $(this)[_0x80f255(0xb5)]('name') });
                });
            }
        }
        $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')[_0x5ed3ec(0x8c)](_0x5ed3ec(0x102))[_0x5ed3ec(0xf5)](function(_0x26296a) {
            const _0x501c0d = _0x5ed3ec;
            var _0x1590e7 = $(this)[_0x501c0d(0xb5)]('name');
            $(_0x501c0d(0x93) + _0x1590e7 + _0x501c0d(0x20b))[_0x501c0d(0x8d)] == 0x0 ? (!empReqRadio[_0x501c0d(0x8c)](_0x41f02a => _0x41f02a[_0x501c0d(0xb3)] === _0x26296a) && empReqRadio[_0x501c0d(0x149)]({ 'input': _0x26296a }), unfilledArr[_0x501c0d(0x149)]({ 'input': $(this)['attr'](_0x501c0d(0x15b)) })) : empReqRadio = empReqRadio[_0x501c0d(0xe4)](_0x567167 => _0x567167[_0x501c0d(0xb3)] !== _0x26296a), empReqRadio[_0x501c0d(0x8d)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x1fd))['each'](function(_0x38b027) {
            const _0x2c0baf = _0x5ed3ec;
            let _0x2a358b = $(this)[_0x2c0baf(0x103)]()['length'],
                _0x1f7e42 = $(this)[_0x2c0baf(0xcb)](_0x2c0baf(0xc3)) ? $(this)['data'](_0x2c0baf(0xc3)) : 0x0;
            $(this)[_0x2c0baf(0x103)]() !== '' && _0x2a358b >= _0x1f7e42 ? empReqInput = empReqInput[_0x2c0baf(0xe4)](_0x477058 => _0x477058[_0x2c0baf(0xb3)] !== _0x38b027) : (!empReqInput[_0x2c0baf(0x8c)](_0x1cb2e0 => _0x1cb2e0['input'] === _0x38b027) && empReqInput['push']({ 'input': _0x38b027 }), unfilledArr[_0x2c0baf(0x149)]({ 'input': $(this)[_0x2c0baf(0xb5)](_0x2c0baf(0x15b)) })), empReqInput['length'] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')[_0x5ed3ec(0x8c)](_0x5ed3ec(0xca))[_0x5ed3ec(0xf5)](function(_0x57bf0e) {
            const _0x5b1a44 = _0x5ed3ec;
            skipTo = undefined, $(this)[_0x5b1a44(0x151)](_0x5b1a44(0x137))['data'](_0x5b1a44(0x1f6)) !== '' && (skipTo = $(this)[_0x5b1a44(0x151)](_0x5b1a44(0x137))[_0x5b1a44(0xcb)](_0x5b1a44(0x1f6))), $(this)[_0x5b1a44(0x151)]('[data-go-to]')['attr'](_0x5b1a44(0x12a)) && (answer = $(this)[_0x5b1a44(0x151)](_0x5b1a44(0xf8))['attr'](_0x5b1a44(0x12a)), selections = selections['filter'](_0x21f1f2 => _0x21f1f2['step'] !== x), selections[_0x5b1a44(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5b1a44(0xe4)](_0x1edec7 => _0x1edec7[_0x5b1a44(0x168)] !== skipTo - 0x2), selections[_0x5b1a44(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5b1a44(0x1c7)](_0x5e983a => _0x5e983a[_0x5b1a44(0x168)] === x), selections[objIndex][_0x5b1a44(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5b1a44(0x1df)] = x));
        }), $(steps[x])['find'](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x92))[_0x5ed3ec(0xf5)](function(_0xac4b60) {
            const _0x52f5ce = _0x5ed3ec;
            let _0x56de9e = $(this)[_0x52f5ce(0x103)]()[_0x52f5ce(0x8d)],
                _0x3480eb = $(this)['data']('min-character') ? $(this)[_0x52f5ce(0xcb)](_0x52f5ce(0xc3)) : 0x0;
            $(this)[_0x52f5ce(0x103)]() !== '' && _0x56de9e >= _0x3480eb ? empReqPassword = empReqPassword[_0x52f5ce(0xe4)](_0x16cfdd => _0x16cfdd['input'] !== _0xac4b60) : (!empReqPassword['find'](_0x262e0f => _0x262e0f[_0x52f5ce(0xb3)] === _0xac4b60) && empReqPassword[_0x52f5ce(0x149)]({ 'input': _0xac4b60 }), unfilledArr[_0x52f5ce(0x149)]({ 'input': $(this)[_0x52f5ce(0xb5)]('name') })), empReqPassword[_0x52f5ce(0x8d)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))['find'](_0x5ed3ec(0x12f))[_0x5ed3ec(0xf5)](function(_0x223a04) {
            const _0x7d4ea3 = _0x5ed3ec;
            skipTo = undefined, $(this)['parents'](_0x7d4ea3(0x137))[_0x7d4ea3(0xcb)](_0x7d4ea3(0x1f6)) !== '' && (skipTo = $(this)[_0x7d4ea3(0x151)]('[data-skip-to]')['data'](_0x7d4ea3(0x1f6))), $(this)[_0x7d4ea3(0x151)](_0x7d4ea3(0xf8))['attr'](_0x7d4ea3(0x12a)) && (answer = $(this)[_0x7d4ea3(0x151)]('[data-go-to]')['attr'](_0x7d4ea3(0x12a)), selections = selections[_0x7d4ea3(0xe4)](_0x29d778 => _0x29d778['step'] !== x), selections[_0x7d4ea3(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x7d4ea3(0xe4)](_0x1c2fdf => _0x1c2fdf['step'] !== skipTo - 0x2), selections[_0x7d4ea3(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x7d4ea3(0x1c7)](_0x508485 => _0x508485[_0x7d4ea3(0x168)] === x), selections[objIndex][_0x7d4ea3(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x7d4ea3(0x1df)] = x));
        }), $(steps[x])['find'](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x157))['each'](function(_0x189edf) {
            const _0x384c81 = _0x5ed3ec;
            let _0x2e1c51 = $(this)[_0x384c81(0x103)]()['length'],
                _0x5dc34c = $(this)[_0x384c81(0xcb)](_0x384c81(0xc3)) ? $(this)[_0x384c81(0xcb)](_0x384c81(0xc3)) : 0x0;
            $(this)[_0x384c81(0x103)]() !== '' && _0x2e1c51 >= _0x5dc34c ? empReqUrl = empReqUrl['filter'](_0x25bf14 => _0x25bf14[_0x384c81(0xb3)] !== _0x189edf) : (!empReqUrl[_0x384c81(0x8c)](_0x3c1a63 => _0x3c1a63['input'] === _0x189edf) && empReqUrl[_0x384c81(0x149)]({ 'input': _0x189edf }), unfilledArr['push']({ 'input': $(this)['attr'](_0x384c81(0x15b)) })), empReqUrl[_0x384c81(0x8d)] === 0x0 && validateURL($(this)[_0x384c81(0x103)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])['find'](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0xd9))[_0x5ed3ec(0xf5)](function(_0xbfe0f5) {
            const _0x38f72e = _0x5ed3ec;
            skipTo = undefined, $(this)['parents'](_0x38f72e(0x137))[_0x38f72e(0xcb)](_0x38f72e(0x1f6)) !== '' && (skipTo = $(this)[_0x38f72e(0x151)](_0x38f72e(0x137))[_0x38f72e(0xcb)]('skip-to')), $(this)['parents'](_0x38f72e(0xf8))[_0x38f72e(0xb5)](_0x38f72e(0x12a)) && (answer = $(this)['parents'](_0x38f72e(0xf8))[_0x38f72e(0xb5)](_0x38f72e(0x12a)), selections = selections[_0x38f72e(0xe4)](_0x3af044 => _0x3af044[_0x38f72e(0x168)] !== x), selections[_0x38f72e(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x38f72e(0xe4)](_0x76d9c3 => _0x76d9c3[_0x38f72e(0x168)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x5e289c => _0x5e289c[_0x38f72e(0x168)] === x), selections[objIndex][_0x38f72e(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x38f72e(0x1df)] = x));
        }), $(steps[x])['find'](_0x5ed3ec(0xb8))['find'](':input[type=\x22date\x22][required]')[_0x5ed3ec(0xf5)](function(_0x306fe9) {
            const _0x468e32 = _0x5ed3ec;
            $(this)[_0x468e32(0x103)]() !== '' ? empReqDate = empReqDate[_0x468e32(0xe4)](_0x3d0052 => _0x3d0052[_0x468e32(0xb3)] !== _0x306fe9) : (!empReqDate[_0x468e32(0x8c)](_0x146ff2 => _0x146ff2[_0x468e32(0xb3)] === _0x306fe9) && empReqDate[_0x468e32(0x149)]({ 'input': _0x306fe9 }), unfilledArr[_0x468e32(0x149)]({ 'input': $(this)[_0x468e32(0xb5)](_0x468e32(0x15b)) })), empReqDate[_0x468e32(0x8d)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0xc6))[_0x5ed3ec(0xf5)](function(_0x30b39d) {
            const _0x40c6f5 = _0x5ed3ec;
            skipTo = undefined, $(this)[_0x40c6f5(0x151)](_0x40c6f5(0x137))[_0x40c6f5(0xcb)]('skip-to') !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x40c6f5(0xcb)](_0x40c6f5(0x1f6))), $(this)[_0x40c6f5(0x151)](_0x40c6f5(0xf8))[_0x40c6f5(0xb5)](_0x40c6f5(0x12a)) && (answer = $(this)['parents'](_0x40c6f5(0xf8))[_0x40c6f5(0xb5)](_0x40c6f5(0x12a)), selections = selections[_0x40c6f5(0xe4)](_0x31d78f => _0x31d78f[_0x40c6f5(0x168)] !== x), selections[_0x40c6f5(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x40c6f5(0xe4)](_0x25828f => _0x25828f[_0x40c6f5(0x168)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x40c6f5(0x1c7)](_0x6da9d9 => _0x6da9d9[_0x40c6f5(0x168)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x40c6f5(0x1df)] = x));
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))['find'](_0x5ed3ec(0x143))[_0x5ed3ec(0xf5)](function(_0x2f95a0) {
            const _0x2aec1a = _0x5ed3ec;
            $(this)['val']() !== '' ? empReqTime = empReqTime[_0x2aec1a(0xe4)](_0x5dea5a => _0x5dea5a[_0x2aec1a(0xb3)] !== _0x2f95a0) : (!empReqTime[_0x2aec1a(0x8c)](_0x13e769 => _0x13e769[_0x2aec1a(0xb3)] === _0x2f95a0) && empReqTime['push']({ 'input': _0x2f95a0 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x2aec1a(0x15b)) })), empReqTime['length'] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](':input[type=\x22time\x22]')[_0x5ed3ec(0xf5)](function(_0x55079f) {
            const _0x8960db = _0x5ed3ec;
            skipTo = undefined, $(this)[_0x8960db(0x151)](_0x8960db(0x137))[_0x8960db(0xcb)](_0x8960db(0x1f6)) !== '' && (skipTo = $(this)['parents'](_0x8960db(0x137))[_0x8960db(0xcb)](_0x8960db(0x1f6))), $(this)['parents']('[data-go-to]')[_0x8960db(0xb5)](_0x8960db(0x12a)) && (answer = $(this)[_0x8960db(0x151)](_0x8960db(0xf8))[_0x8960db(0xb5)]('data-go-to'), selections = selections[_0x8960db(0xe4)](_0x46f87c => _0x46f87c[_0x8960db(0x168)] !== x), selections[_0x8960db(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x4358c1 => _0x4358c1[_0x8960db(0x168)] !== skipTo - 0x2), selections[_0x8960db(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x8960db(0x1c7)](_0x18900b => _0x18900b[_0x8960db(0x168)] === x), selections[objIndex][_0x8960db(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')['find'](_0x5ed3ec(0x213))['each'](function(_0x17200b) {
            const _0x1d61af = _0x5ed3ec;
            let _0x19f354 = $(this)[_0x1d61af(0x103)]()[_0x1d61af(0x8d)],
                _0x422e18 = $(this)[_0x1d61af(0xcb)](_0x1d61af(0xc3)) ? $(this)[_0x1d61af(0xcb)](_0x1d61af(0xc3)) : 0x0;
            $(this)[_0x1d61af(0x103)]() !== '' && _0x19f354 >= _0x422e18 ? empReqNum = empReqNum[_0x1d61af(0xe4)](_0x377f75 => _0x377f75[_0x1d61af(0xb3)] !== _0x17200b) : (!empReqNum[_0x1d61af(0x8c)](_0x3de2e9 => _0x3de2e9[_0x1d61af(0xb3)] === _0x17200b) && empReqNum[_0x1d61af(0x149)]({ 'input': _0x17200b }), unfilledArr['push']({ 'input': $(this)[_0x1d61af(0xb5)]('name') })), empReqNum[_0x1d61af(0x8d)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])['find'](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x194))['each'](function(_0x51f07a) {
            const _0x3ff09c = _0x5ed3ec;
            skipTo = undefined, $(this)['parents'](_0x3ff09c(0x137))[_0x3ff09c(0xcb)](_0x3ff09c(0x1f6)) !== '' && (skipTo = $(this)[_0x3ff09c(0x151)](_0x3ff09c(0x137))['data'](_0x3ff09c(0x1f6))), $(this)[_0x3ff09c(0x151)](_0x3ff09c(0xf8))[_0x3ff09c(0xb5)](_0x3ff09c(0x12a)) && (answer = $(this)[_0x3ff09c(0x151)](_0x3ff09c(0xf8))[_0x3ff09c(0xb5)](_0x3ff09c(0x12a)), selections = selections[_0x3ff09c(0xe4)](_0x42ff18 => _0x42ff18[_0x3ff09c(0x168)] !== x), selections[_0x3ff09c(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3ff09c(0xe4)](_0x534721 => _0x534721['step'] !== skipTo - 0x2), selections[_0x3ff09c(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3ff09c(0x1c7)](_0x392c1c => _0x392c1c[_0x3ff09c(0x168)] === x), selections[objIndex][_0x3ff09c(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3ff09c(0x1df)] = x));
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x223))[_0x5ed3ec(0xf5)](function(_0x2a534b) {
            const _0x204e63 = _0x5ed3ec;
            if ($(this)[_0x204e63(0x103)]() !== '') {
                let _0x2ed617 = $(this)[_0x204e63(0x103)]()[_0x204e63(0x8d)],
                    _0x3a0886 = $(this)[_0x204e63(0xcb)](_0x204e63(0xc3)) ? $(this)[_0x204e63(0xcb)](_0x204e63(0xc3)) : 0x0;
                if ($(this)[_0x204e63(0xcb)](_0x204e63(0xbc))) {
                    var _0x3b6766 = phoneAutoFormat($(this)[_0x204e63(0xcb)](_0x204e63(0xbc)));
                    $(this)[_0x204e63(0x103)](_0x3b6766($(this)[_0x204e63(0x103)]()));
                }
                phoneValidation($(this)[_0x204e63(0x103)](), _0x2ed617, _0x3a0886) ? empReqTel = empReqTel[_0x204e63(0xe4)](_0x562a39 => _0x562a39[_0x204e63(0xb3)] !== _0x2a534b) : empReqTel[_0x204e63(0x149)]({ 'input': _0x2a534b });
            } else !empReqTel[_0x204e63(0x8c)](_0x400a84 => _0x400a84[_0x204e63(0xb3)] === _0x2a534b) && empReqTel[_0x204e63(0x149)]({ 'input': _0x2a534b }), unfilledArr[_0x204e63(0x149)]({ 'input': $(this)['attr'](_0x204e63(0x15b)) });
            empReqTel[_0x204e63(0x8d)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x229))['each'](function(_0x47769e) {
            const _0x355ae1 = _0x5ed3ec;
            skipTo = undefined, $(this)[_0x355ae1(0x151)](_0x355ae1(0x137))['data'](_0x355ae1(0x1f6)) !== '' && (skipTo = $(this)[_0x355ae1(0x151)]('[data-skip-to]')[_0x355ae1(0xcb)](_0x355ae1(0x1f6))), $(this)[_0x355ae1(0x151)]('[data-go-to]')[_0x355ae1(0xb5)](_0x355ae1(0x12a)) && (answer = $(this)[_0x355ae1(0x151)]('[data-go-to]')[_0x355ae1(0xb5)](_0x355ae1(0x12a)), selections = selections['filter'](_0x208044 => _0x208044[_0x355ae1(0x168)] !== x), selections[_0x355ae1(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x355ae1(0xe4)](_0x564db2 => _0x564db2[_0x355ae1(0x168)] !== skipTo - 0x2), selections[_0x355ae1(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x355ae1(0x1c7)](_0x5484c2 => _0x5484c2[_0x355ae1(0x168)] === x), selections[objIndex][_0x355ae1(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x355ae1(0x1df)] = x));
        }), $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')['find'](_0x5ed3ec(0xcf))[_0x5ed3ec(0xf5)](function(_0x41858c) {
            const _0x4bc256 = _0x5ed3ec;
            $(this)[_0x4bc256(0x103)]() !== '' ? empReqFile = empReqFile[_0x4bc256(0xe4)](_0x24cbf9 => _0x24cbf9[_0x4bc256(0xb3)] !== _0x41858c) : (!empReqFile['find'](_0x395ae8 => _0x395ae8['input'] === _0x41858c) && empReqFile['push']({ 'input': _0x41858c }), unfilledArr[_0x4bc256(0x149)]({ 'input': $(this)[_0x4bc256(0xb5)](_0x4bc256(0x15b)) })), empReqFile[_0x4bc256(0x8d)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0xd3))[_0x5ed3ec(0xf5)](function(_0x19da8b) {
            const _0x1cdb3c = _0x5ed3ec;
            skipTo = undefined, $(this)[_0x1cdb3c(0x151)](_0x1cdb3c(0x137))[_0x1cdb3c(0xcb)](_0x1cdb3c(0x1f6)) !== '' && (skipTo = $(this)['parents'](_0x1cdb3c(0x137))[_0x1cdb3c(0xcb)](_0x1cdb3c(0x1f6))), $(this)['parents']('[data-go-to]')[_0x1cdb3c(0xb5)]('data-go-to') && (answer = $(this)[_0x1cdb3c(0x151)](_0x1cdb3c(0xf8))[_0x1cdb3c(0xb5)](_0x1cdb3c(0x12a)), selections = selections[_0x1cdb3c(0xe4)](_0x1ab9e4 => _0x1ab9e4[_0x1cdb3c(0x168)] !== x), selections[_0x1cdb3c(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1cdb3c(0xe4)](_0x323514 => _0x323514['step'] !== skipTo - 0x2), selections[_0x1cdb3c(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1cdb3c(0x1c7)](_0x462cb9 => _0x462cb9[_0x1cdb3c(0x168)] === x), selections[objIndex][_0x1cdb3c(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1cdb3c(0x1df)] = x));
        }), $(steps[x])['find'](_0x5ed3ec(0xb8))['find'](_0x5ed3ec(0x227))[_0x5ed3ec(0xf5)](function(_0x2d886d) {
            const _0x1c8b0d = _0x5ed3ec;
            $(this)[_0x1c8b0d(0x103)]() !== null && $(this)[_0x1c8b0d(0x103)]() !== '' ? empReqSelect = empReqSelect[_0x1c8b0d(0xe4)](_0x445724 => _0x445724[_0x1c8b0d(0xb3)] !== _0x2d886d) : (!empReqSelect[_0x1c8b0d(0x8c)](_0x2c7c24 => _0x2c7c24[_0x1c8b0d(0xb3)] === _0x2d886d) && empReqSelect[_0x1c8b0d(0x149)]({ 'input': _0x2d886d }), unfilledArr[_0x1c8b0d(0x149)]({ 'input': $(this)[_0x1c8b0d(0xb5)](_0x1c8b0d(0x15b)) })), empReqSelect[_0x1c8b0d(0x8d)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)]('select')[_0x5ed3ec(0xf5)](function(_0x54c8f9) {
            const _0x6ba94c = _0x5ed3ec;
            skipTo = undefined, $(this)[_0x6ba94c(0x151)]('[data-skip-to]')[_0x6ba94c(0xcb)](_0x6ba94c(0x1f6)) !== '' && (skipTo = $(this)[_0x6ba94c(0x151)](_0x6ba94c(0x137))['data'](_0x6ba94c(0x1f6))), $(this)['parents'](_0x6ba94c(0xf8))[_0x6ba94c(0xb5)](_0x6ba94c(0x12a)) && (answer = $(this)[_0x6ba94c(0x151)](_0x6ba94c(0xf8))[_0x6ba94c(0xb5)]('data-go-to'), selections = selections['filter'](_0x3ca8c9 => _0x3ca8c9[_0x6ba94c(0x168)] !== x), selections[_0x6ba94c(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x6ba94c(0xe4)](_0x4935e1 => _0x4935e1[_0x6ba94c(0x168)] !== skipTo - 0x2), selections[_0x6ba94c(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x6ba94c(0x1c7)](_0x259fe4 => _0x259fe4[_0x6ba94c(0x168)] === x), selections[objIndex][_0x6ba94c(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x6ba94c(0x1df)] = x));
        }), $(steps[x])['find'](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0x9e))[_0x5ed3ec(0xf5)](function(_0x195736) {
            const _0x418ead = _0x5ed3ec;
            let _0x523bc8 = $(this)[_0x418ead(0x103)]()[_0x418ead(0x8d)],
                _0x30c216 = $(this)['data']('min-character') ? $(this)[_0x418ead(0xcb)](_0x418ead(0xc3)) : 0x0;
            $(this)[_0x418ead(0x103)]() !== '' && _0x523bc8 >= _0x30c216 ? empReqTextarea = empReqTextarea['filter'](_0x2741da => _0x2741da[_0x418ead(0xb3)] !== _0x195736) : (!empReqTextarea['find'](_0x5bd8e8 => _0x5bd8e8['input'] === _0x195736) && empReqTextarea[_0x418ead(0x149)]({ 'input': _0x195736 }), unfilledArr[_0x418ead(0x149)]({ 'input': $(this)['attr']('name') })), empReqTextarea[_0x418ead(0x8d)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')[_0x5ed3ec(0x8c)]('textarea')[_0x5ed3ec(0xf5)](function(_0x5e7d79) {
            const _0x1c194d = _0x5ed3ec;
            skipTo = undefined, $(this)['parents'](_0x1c194d(0x137))[_0x1c194d(0xcb)]('skip-to') !== '' && (skipTo = $(this)[_0x1c194d(0x151)]('[data-skip-to]')['data'](_0x1c194d(0x1f6))), $(this)[_0x1c194d(0x151)](_0x1c194d(0xf8))[_0x1c194d(0xb5)](_0x1c194d(0x12a)) && (answer = $(this)['parents'](_0x1c194d(0xf8))[_0x1c194d(0xb5)](_0x1c194d(0x12a)), selections = selections[_0x1c194d(0xe4)](_0x398f56 => _0x398f56['step'] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1c194d(0xe4)](_0x37de26 => _0x37de26['step'] !== skipTo - 0x2), selections[_0x1c194d(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x2ef664 => _0x2ef664[_0x1c194d(0x168)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')[_0x5ed3ec(0x8c)](':input[type=\x22email\x22][required]')['each'](function(_0x1dc83f) {
            const _0x318875 = _0x5ed3ec;
            $(this)[_0x318875(0x103)]() !== '' ? validateEmail($(this)['val'](), $(this)[_0x318875(0xcb)](_0x318875(0x188)), $(this)[_0x318875(0xb5)](_0x318875(0x15b))) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)['attr'](_0x318875(0x15b)) }));
        }), $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))[_0x5ed3ec(0x8c)](_0x5ed3ec(0xac))[_0x5ed3ec(0xf5)](function(_0x5ef783) {
            const _0x16b1e7 = _0x5ed3ec;
            skipTo = undefined, $(this)[_0x16b1e7(0x151)]('[data-skip-to]')[_0x16b1e7(0xcb)](_0x16b1e7(0x1f6)) !== '' && (skipTo = $(this)[_0x16b1e7(0x151)](_0x16b1e7(0x137))[_0x16b1e7(0xcb)](_0x16b1e7(0x1f6))), $(this)[_0x16b1e7(0x151)](_0x16b1e7(0xf8))[_0x16b1e7(0xb5)]('data-go-to') && (answer = $(this)['parents']('[data-go-to]')['attr']('data-go-to'), selections = selections['filter'](_0x4f7088 => _0x4f7088[_0x16b1e7(0x168)] !== x), console['log']('selections\x20email', selections, x), selections[_0x16b1e7(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x16b1e7(0xe4)](_0x511bf6 => _0x511bf6[_0x16b1e7(0x168)] !== skipTo - 0x2), selections[_0x16b1e7(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x16b1e7(0x1c7)](_0x3f6967 => _0x3f6967['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x16b1e7(0x1df)] = x));
        });
    }
    $(steps[x])['find'](_0x5ed3ec(0x13f))['is'](_0x5ed3ec(0x191)) && (selArr = [], $(steps)[_0x5ed3ec(0x8c)]('[data-selected]:checked')['each'](function(_0x4e6844, _0x30e914) {
        const _0xeea37 = _0x5ed3ec;
        selArr['push']({ 'selected': $(this)[_0xeea37(0xcb)](_0xeea37(0x190)) });
    }), selString = [], selArr[_0x5ed3ec(0x9a)](_0x5deba7 => selString[_0x5ed3ec(0x149)](_0x5deba7[_0x5ed3ec(0x190)])), $(steps[x])[_0x5ed3ec(0x8c)]('.active-answer-card')['find'](_0x5ed3ec(0x16c))[_0x5ed3ec(0xf5)](function() {
        const _0x4fcae0 = _0x5ed3ec;
        skipTo = undefined;
        if ($(this)['parents'](_0x4fcae0(0x137))[_0x4fcae0(0xcb)]('skip-to')) skipTo = $(this)['parents'](_0x4fcae0(0x137))['data'](_0x4fcae0(0x1f6));
        else $(this)[_0x4fcae0(0xcb)]('skip-to') && (skipTo = $(this)[_0x4fcae0(0xcb)](_0x4fcae0(0x1f6)));
        selections = selections[_0x4fcae0(0xe4)](_0xaa5ec6 => _0xaa5ec6['step'] !== x);
        if ($(this)[_0x4fcae0(0xcb)]('go-to')) answer = $(this)[_0x4fcae0(0xb5)](_0x4fcae0(0x12a)), selections[_0x4fcae0(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4fcae0(0xe4)](_0x4ae09d => _0x4ae09d[_0x4fcae0(0x168)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4fcae0(0x1c7)](_0x34c9b6 => _0x34c9b6[_0x4fcae0(0x168)] === x), selections[objIndex][_0x4fcae0(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4fcae0(0x1df)] = x);
        else $(this)[_0x4fcae0(0x151)](_0x4fcae0(0xf8))[_0x4fcae0(0xcb)](_0x4fcae0(0x20d)) && (answer = $(this)[_0x4fcae0(0x151)]('[data-go-to]')['data'](_0x4fcae0(0x20d)), selections[_0x4fcae0(0x149)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4fcae0(0xe4)](_0xa37c6b => _0xa37c6b['step'] !== skipTo - 0x2), selections[_0x4fcae0(0x149)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x571954 => _0x571954['step'] === x), selections[objIndex][_0x4fcae0(0x10e)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
    }), logicExtra ? ($(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0xb8))['find']('[data-radio-skip]:visible')['data'](_0x5ed3ec(0x126)) === !![] || $(steps[x])[_0x5ed3ec(0x8c)]('[data-answer][data-radio-skip]:visible')['data'](_0x5ed3ec(0x126)) === !![]) && (skip && selections[_0x5ed3ec(0xe4)](_0x20fbfe => _0x20fbfe['step'] === x)['length'] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x1e9))['data'](_0x5ed3ec(0xa6))))) : $(steps[x])[_0x5ed3ec(0x8c)](_0x5ed3ec(0x172))[_0x5ed3ec(0xcb)](_0x5ed3ec(0x126)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])['find'](_0x5ed3ec(0x1e9))[_0x5ed3ec(0xcb)]('radio-delay'))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0xbc9d9e = _0x3e671a;
    $(_0xbc9d9e(0x124))[_0xbc9d9e(0x1f2)](), unfilledArr[_0xbc9d9e(0x8d)] > 0x0 && unfilledArr[_0xbc9d9e(0x9a)](function(_0x2fe9ad) {
        const _0x2253b5 = _0xbc9d9e;
        $(_0x2253b5(0xba) + _0x2fe9ad[_0x2253b5(0xb3)] + '\x22]')[_0x2253b5(0x1ea)](_0x2253b5(0x124))['fadeIn'](), $(_0x2253b5(0xba) + _0x2fe9ad[_0x2253b5(0xb3)] + '\x22]')[_0x2253b5(0x151)]()[_0x2253b5(0x169)](_0x2253b5(0x124))['fadeIn'](), $(_0x2253b5(0x112) + _0x2fe9ad[_0x2253b5(0xb3)] + '\x22]')[_0x2253b5(0x1ea)](_0x2253b5(0x124))['fadeIn'](), $(_0x2253b5(0x8b) + _0x2fe9ad[_0x2253b5(0xb3)] + '\x22]')[_0x2253b5(0x1ea)](_0x2253b5(0x124))[_0x2253b5(0x1e5)]();
    });
}

function resetInputErrorMessage(_0x4bd877) {
    const _0x3c7c19 = _0x3e671a;
    $(_0x3c7c19(0xba) + _0x4bd877 + '\x22]')['siblings'](_0x3c7c19(0x124))['hide'](), $('input[name=\x22' + _0x4bd877 + '\x22]')['parents']()[_0x3c7c19(0x169)](_0x3c7c19(0x124))[_0x3c7c19(0x1f2)](), $(_0x3c7c19(0x112) + _0x4bd877 + '\x22]')[_0x3c7c19(0x1ea)](_0x3c7c19(0x124))[_0x3c7c19(0x1f2)](), $(_0x3c7c19(0x8b) + _0x4bd877 + '\x22]')[_0x3c7c19(0x1ea)](_0x3c7c19(0x124))['hide']();
}

function increaseCurstep() {
    const _0xc8c56 = _0x3e671a;
    countCard ? (curStep = curStep + 0x1, $(_0xc8c56(0xfc))[_0xc8c56(0x180)](steps[_0xc8c56(0x8d)])) : $(steps[x])[_0xc8c56(0xcb)](_0xc8c56(0x1cc)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0xc8c56(0x19c))[_0xc8c56(0x180)](curStep);
}

function decreaseCurstep() {
    const _0x9eb431 = _0x3e671a;
    countCard ? (curStep = curStep - 0x1, $(_0x9eb431(0xfc))[_0x9eb431(0x180)](steps[_0x9eb431(0x8d)])) : $(steps[x])[_0x9eb431(0xcb)](_0x9eb431(0x1cc)) ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $(_0x9eb431(0x19c))[_0x9eb431(0x180)](curStep);
}
$(_0x3e671a(0x21e))['on'](_0x3e671a(0x11e), function(_0x441a2e) {
    const _0x59adec = _0x3e671a;
    _0x441a2e[_0x59adec(0xce)](), _0x441a2e[_0x59adec(0x150)]();
    $(this)['data'](_0x59adec(0x147)) && (redirectTo = $(this)[_0x59adec(0xcb)](_0x59adec(0x147)));
    !$(this)['data']('new-tab') && (newTab = $(this)[_0x59adec(0xcb)](_0x59adec(0x139)));
    successCard = $(this)[_0x59adec(0xcb)](_0x59adec(0x123));
    const _0x2a48f2 = new URLSearchParams(window['location'][_0x59adec(0x131)]),
        _0x495076 = (_0x1606d2, _0x4bd057) => {
            const _0x113f3a = _0x59adec,
                _0x55bed2 = document[_0x113f3a(0xdf)](_0x113f3a(0x192) + _0x1606d2 + '\x22]');
            _0x55bed2 && (_0x55bed2[_0x113f3a(0x15a)] = _0x4bd057);
        };
    _0x495076(_0x59adec(0x12d), _0x2a48f2[_0x59adec(0x1f4)](_0x59adec(0x12d)) || document[_0x59adec(0x12d)] || 'Direct'), _0x495076(_0x59adec(0x22c), navigator[_0x59adec(0x219)]), _0x495076(_0x59adec(0x122), new Date()[_0x59adec(0x21d)]()), _0x495076(_0x59adec(0x1a3), Intl[_0x59adec(0x17b)]()[_0x59adec(0x218)]()[_0x59adec(0x1f9)]), _0x495076('screen-resolution', window['screen'][_0x59adec(0x1c3)] + 'x' + window['screen'][_0x59adec(0x1d5)]), _0x495076(_0x59adec(0x1ff), 'N/A');
    const _0x59d4a6 = () => {
        const _0x5e49d0 = _0x59adec,
            _0x590e25 = document[_0x5e49d0(0xdf)](_0x5e49d0(0xe1));
        if (_0x590e25) {
            const _0x454e42 = localStorage[_0x5e49d0(0x1aa)](_0x5e49d0(0xbe));
            console[_0x5e49d0(0x97)](_0x454e42);
            if (_0x454e42) {
                const _0x13206d = Math[_0x5e49d0(0x8e)]((Date[_0x5e49d0(0xb4)]() - parseInt(_0x454e42)) / 0x3e8);
                _0x590e25[_0x5e49d0(0x15a)] = _0x13206d + '\x20seconds';
            } else _0x590e25['value'] = _0x5e49d0(0xd0);
        }
    };
    _0x59d4a6(), logicExtra && fill && ($(this)[_0x59adec(0x86)](_0x59adec(0x174), !![]), $(steps)[_0x59adec(0x8c)](':input')[_0x59adec(0x86)](_0x59adec(0x11a), ![]), console[_0x59adec(0x97)](_0x59adec(0x120))), localStorage['removeItem']('filledInput'), localStorage[_0x59adec(0x176)](_0x59adec(0xbe)), formlyCustomFunction(), fill ? ($(this)[_0x59adec(0xcb)](_0x59adec(0x1e2)) ? (console[_0x59adec(0x97)]($(this)[_0x59adec(0xcb)]('wait')), $(this)[_0x59adec(0x180)]($(this)[_0x59adec(0xcb)]('wait'))) : $(this)[_0x59adec(0x103)](_0x59adec(0xc2))['text']('Please\x20wait...'), $('[data-form=\x22multistep\x22]')['submit'](), $('div.g-recaptcha')[_0x59adec(0x8d)] > 0x0 && (grecaptcha[_0x59adec(0x140)]()[_0x59adec(0x8d)] === 0x0 && (form[_0x59adec(0x8c)](_0x59adec(0x21e))[_0x59adec(0x180)](oldSubmitText), form[_0x59adec(0x8c)](_0x59adec(0x21e))[_0x59adec(0x103)](oldSubmitText))), customError && $(_0x59adec(0x124))[_0x59adec(0x1f2)]()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x141e97 = _0x3e671a;
    customError ? ($(_0x141e97(0x124))[_0x141e97(0x1f2)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x455dd8 = _0x3e671a;
    customError && $(_0x455dd8(0x124))[_0x455dd8(0x1f2)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])['removeClass'](_0x455dd8(0xab)), selections[_0x455dd8(0xe4)](_0xd75231 => _0xd75231[_0x455dd8(0x10e)] === x)[_0x455dd8(0x8d)] > 0x0 ? x = parseInt(getSafe(() => selections['filter'](_0x5236d1 => _0x5236d1[_0x455dd8(0x10e)] === x)[0x0][_0x455dd8(0x1df)])) : x--, updateStep()), ($(steps[x])['find'](_0x455dd8(0x172))[_0x455dd8(0xcb)](_0x455dd8(0x126)) === !![] || $(steps[x])[_0x455dd8(0x8c)](_0x455dd8(0xb8))[_0x455dd8(0x8c)](_0x455dd8(0x172))[_0x455dd8(0xcb)]('radio-skip') === !![] || $(steps[x])[_0x455dd8(0x8c)](_0x455dd8(0x19a))[_0x455dd8(0xcb)](_0x455dd8(0x126)) === !![]) && (all_data = all_data[_0x455dd8(0xe4)](_0xfabda9 => _0xfabda9[_0x455dd8(0x8f)] !== $(steps[x])[_0x455dd8(0x8c)](_0x455dd8(0xf1))[_0x455dd8(0xb5)]('name')), $(_0x455dd8(0xdc) + $(steps[x])['find']('input[type=\x22radio\x22]:checked')[_0x455dd8(0xb5)]('name') + '\x22]')[_0x455dd8(0x1f2)](), $(steps[x])[_0x455dd8(0x8c)](_0x455dd8(0x1af))[_0x455dd8(0x86)]('checked', ![]), $(steps[x])[_0x455dd8(0x8c)]('.w-form-formradioinput')[_0x455dd8(0x1f7)](_0x455dd8(0x1cf)), validation());
}
weightedSelectionRange && $(_0x3e671a(0x1e4))['each'](function() {
    const _0x153ba1 = _0x3e671a;
    $(this)[_0x153ba1(0x201)]('<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(this)[_0x153ba1(0xcb)](_0x153ba1(0x1ce)) + '</div>');
});

function selectionQuiz() {
    const _0x17ebd7 = _0x3e671a;
    if ($(this)[_0x17ebd7(0x8c)](_0x17ebd7(0xb9))) {
        $(_0x17ebd7(0x1e4))[_0x17ebd7(0x1f2)](), $('[data-selection-weight]')['hide']();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x17ebd7(0x9a)](function(_0x395c95) {
                const _0x85d361 = _0x17ebd7;
                selTotal = selTotal + _0x395c95[_0x85d361(0x190)];
            }), $(_0x17ebd7(0x1b6))['text'](selTotal);
            if ($(_0x17ebd7(0x89) + selTotal + '\x22]')[_0x17ebd7(0x8d)] > 0x0) $('[data-selection=\x22' + selTotal + '\x22]')[_0x17ebd7(0x1e5)]();
            else $('[data-range]:contains(' + selTotal + ')') ? $(_0x17ebd7(0x16a) + selTotal + ')')[_0x17ebd7(0x1b3)](_0x17ebd7(0x1e4))['eq'](0x0)[_0x17ebd7(0x1b9)]() : $(_0x17ebd7(0x11f))[_0x17ebd7(0x1e5)]();
        } else {
            let _0x31d3d9 = -0x1,
                _0x1b67b8 = [];
            $(_0x17ebd7(0x1e4))[_0x17ebd7(0xf5)](function(_0x10a742) {
                const _0x484ae7 = _0x17ebd7;
                $($(_0x484ae7(0x1e4))[_0x10a742])[_0x484ae7(0xcb)](_0x484ae7(0x1ce))[_0x484ae7(0x1c5)](selString[_0x484ae7(0xf6)]()) && (_0x31d3d9 = _0x10a742, _0x1b67b8[_0x484ae7(0x149)](_0x10a742));
            }), multiSelections ? _0x1b67b8[_0x17ebd7(0x8d)] > 0x0 ? _0x1b67b8[_0x17ebd7(0x9a)](_0x583127 => {
                const _0x554deb = _0x17ebd7;
                $($(_0x554deb(0x1e4))[_0x583127])[_0x554deb(0x1e5)]();
            }) : $(_0x17ebd7(0x11f))['fadeIn']() : _0x31d3d9 > -0x1 ? $($(_0x17ebd7(0x1e4))[_0x31d3d9])[_0x17ebd7(0x1e5)]() : $('[data-selection=\x22other\x22]')[_0x17ebd7(0x1e5)]();
        }
    }
}

function triggerInputAllData() {
    const _0x29ac5e = _0x3e671a;
    if (savedFilledInput && memory) savedFilledInput[_0x29ac5e(0x9a)](_0x38459f => {
        const _0xa9903f = _0x29ac5e;
        var _0x3cebd7 = $(_0xa9903f(0xba) + _0x38459f[_0xa9903f(0x99)] + _0xa9903f(0xcd) + _0x38459f[_0xa9903f(0x15a)] + _0xa9903f(0x133)),
            _0x4d4050 = $(_0xa9903f(0xba) + _0x38459f[_0xa9903f(0x99)] + _0xa9903f(0x133)),
            _0x35f6c2 = $('textarea[name=\x22' + _0x38459f[_0xa9903f(0x99)] + _0xa9903f(0x133)),
            _0xadc3b1 = $('input[type=\x22checkbox\x22][name=\x22' + _0x38459f[_0xa9903f(0x99)] + '\x22]'),
            _0x34fe06 = $('input[type=\x22radio\x22][name=\x22' + _0x38459f[_0xa9903f(0x99)] + _0xa9903f(0xcd) + _0x38459f[_0xa9903f(0x15a)] + '\x22]:not([data-prefill=\x22false\x22])');
        if (_0x3cebd7[_0xa9903f(0xb5)](_0xa9903f(0x167)) !== 'file') {
            if (_0x3cebd7['attr'](_0xa9903f(0x167)) === 'radio' && !_0x3cebd7[_0xa9903f(0x151)](_0xa9903f(0x220))[_0xa9903f(0xcb)](_0xa9903f(0x126))) _0x3cebd7[_0xa9903f(0x11e)](), _0x3cebd7[_0xa9903f(0x1ea)](_0xa9903f(0x210))[_0xa9903f(0xa1)]('w--redirected-checked'), _0x3cebd7[_0xa9903f(0xbb)]('input');
            else _0x38459f[_0xa9903f(0x15a)] === 'on' ? (_0x4d4050['click'](), _0x4d4050[_0xa9903f(0x1ea)](_0xa9903f(0x13d))[_0xa9903f(0xa1)](_0xa9903f(0x1cf)), _0x4d4050[_0xa9903f(0xbb)](_0xa9903f(0xb3))) : (_0x4d4050['val'](_0x38459f['value']), _0x35f6c2[_0xa9903f(0x103)](_0x38459f[_0xa9903f(0x15a)]), $(_0xa9903f(0xc5))[_0xa9903f(0x8c)](_0xa9903f(0x214) + _0x38459f['value'] + '\x22]')[_0xa9903f(0x86)]('selected', !![]), _0x4d4050[_0xa9903f(0xbb)]('input'), _0x4d4050[_0xa9903f(0xbb)](_0xa9903f(0x116)));
            const _0x10a13e = _0x34fe06[_0xa9903f(0xcb)](_0xa9903f(0x161)),
                _0x4e1683 = _0xadc3b1['data'](_0xa9903f(0x161));
            _0x34fe06['parent']()[_0xa9903f(0xa1)](_0x10a13e), _0xadc3b1['parent']()[_0xa9903f(0xa1)](_0x4e1683);
        }
    });
    else _params && (getParams(), searchQ[_0x29ac5e(0x9a)](_0x1647f0 => {
        const _0x5849f1 = _0x29ac5e;
        if ($(_0x5849f1(0xba) + _0x1647f0['inputName'] + _0x5849f1(0xcd) + _0x1647f0[_0x5849f1(0x15a)] + _0x5849f1(0x133))[_0x5849f1(0xb5)](_0x5849f1(0x167)) !== _0x5849f1(0x179)) {
            if ($(_0x5849f1(0xba) + _0x1647f0[_0x5849f1(0x1d9)] + _0x5849f1(0xcd) + _0x1647f0['val'] + _0x5849f1(0x133))[_0x5849f1(0xb5)]('type') === _0x5849f1(0x1d0)) $(_0x5849f1(0xba) + _0x1647f0['key'] + _0x5849f1(0xcd) + _0x1647f0[_0x5849f1(0x103)] + _0x5849f1(0x133))[_0x5849f1(0x11e)](), $(_0x5849f1(0xba) + _0x1647f0['key'] + _0x5849f1(0xcd) + _0x1647f0['val'] + '\x22]:not([data-prefill=\x22false\x22])')['siblings'](_0x5849f1(0x210))[_0x5849f1(0xa1)](_0x5849f1(0x1cf)), $(_0x5849f1(0xba) + _0x1647f0[_0x5849f1(0x1d9)] + _0x5849f1(0xcd) + _0x1647f0['val'] + _0x5849f1(0x133))[_0x5849f1(0xbb)](_0x5849f1(0xb3));
            else _0x1647f0[_0x5849f1(0x103)] === 'on' ? ($(_0x5849f1(0xba) + _0x1647f0[_0x5849f1(0x1d9)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5849f1(0x11e)](), $(_0x5849f1(0xba) + _0x1647f0['key'] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5849f1(0x1ea)]('.w-checkbox-input')[_0x5849f1(0xa1)]('w--redirected-checked'), $(_0x5849f1(0xba) + _0x1647f0['key'] + '\x22]')[_0x5849f1(0xbb)](_0x5849f1(0xb3))) : ($(_0x5849f1(0xba) + _0x1647f0[_0x5849f1(0x1d9)] + _0x5849f1(0x133))[_0x5849f1(0x103)](_0x1647f0[_0x5849f1(0x103)]), $(_0x5849f1(0x112) + _0x1647f0[_0x5849f1(0x1d9)] + _0x5849f1(0x133))['val'](_0x1647f0['val']), $(_0x5849f1(0x8b) + _0x1647f0[_0x5849f1(0x1d9)] + _0x5849f1(0x133))['find'](_0x5849f1(0x214) + _0x1647f0[_0x5849f1(0x103)] + '\x22]')['prop']('selected', !![]), $('input[name=\x22' + _0x1647f0[_0x5849f1(0x1d9)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5849f1(0xbb)](_0x5849f1(0xb3)), $(_0x5849f1(0xba) + _0x1647f0[_0x5849f1(0x1d9)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x5849f1(0xbb)]('change'));
        }
    }));
}
$(_0x3e671a(0x19e))['on'](_0x3e671a(0x11e), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x3e671a(0x18d))['on'](_0x3e671a(0x11e), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x3e671a(0x8c)](_0x3e671a(0x20f))[_0x3e671a(0x115)]('[type=\x22radio\x22]')['on'](_0x3e671a(0xb3), function(_0x1d2f5c) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x3e671a(0x8c)](_0x3e671a(0x1af))['on']('click', function() { skip = !![], validation(), addClickClass(); });
$(_0x3e671a(0x1be))[_0x3e671a(0xcb)]('clickable-all') ? $('[data-form=\x22custom-progress-indicator\x22]')['removeClass'](_0x3e671a(0x128)) : $(_0x3e671a(0x10a))[_0x3e671a(0xa1)](_0x3e671a(0x128));

function clickableIndicator() {
    const _0x105fc4 = _0x3e671a;
    $('[data-clickable]')[_0x105fc4(0xcb)](_0x105fc4(0xcc)) && ($('[data-form=\x22progress-indicator\x22]')[_0x105fc4(0x1f7)](_0x105fc4(0xab)), $(_0x105fc4(0x1da))[_0x105fc4(0xcb)](_0x105fc4(0xb1)) ? (x = $(this)[_0x105fc4(0x118)](), updateStep()) : $(this)[_0x105fc4(0x118)]() <= progress && (x = $(this)[_0x105fc4(0x118)](), updateStep())), $(_0x105fc4(0x19c))[_0x105fc4(0x180)](x + 0x1);
}
$('[data-form=\x22custom-progress-indicator\x22]')['on'](_0x3e671a(0x11e), clickableIndicator), excludeCount = !$('[data-form=\x22multistep\x22]')[_0x3e671a(0xcb)]('count-card'), steps[_0x3e671a(0xf5)](function(_0x1b0edf) {
    const _0x6b58fe = _0x3e671a,
        _0x209419 = $(this)['data'](_0x6b58fe(0x1cc));
    console[_0x6b58fe(0x97)](excludeCount), _0x209419 && excludeCount && $('[data-form=\x22custom-progress-indicator\x22]')['eq'](_0x1b0edf)[_0x6b58fe(0x1f2)]();
});
$(_0x3e671a(0x1c0))[_0x3e671a(0xcb)](_0x3e671a(0x1f8)) && ($(_0x3e671a(0xf8))[_0x3e671a(0xf5)](function() {
    const _0x279324 = _0x3e671a;
    $(this)[_0x279324(0x201)](_0x279324(0xe5), $(this)[_0x279324(0xcb)](_0x279324(0x20d)));
}), $(_0x3e671a(0x20c))[_0x3e671a(0xf5)](function() {
    const _0x349528 = _0x3e671a;
    $(this)[_0x349528(0x201)](_0x349528(0x1c4), $(this)['data'](_0x349528(0x1de)));
}));

function resetFormly() {
    const _0x54bbb0 = _0x3e671a;
    $(_0x54bbb0(0x1c0))[_0x54bbb0(0xbb)](_0x54bbb0(0x138)), $('[data-form=\x22multistep\x22]')[_0x54bbb0(0x151)]()[_0x54bbb0(0x8c)]('.w-form-done')['hide'](), x = 0x0, updateStep(), $('[data-form=\x22multistep\x22]')[_0x54bbb0(0x1b9)](), $(_0x54bbb0(0x21e))[_0x54bbb0(0x180)](oldSubmitText), $(_0x54bbb0(0x21e))['val'](oldSubmitText), $(_0x54bbb0(0x19c))['text'](0x1), $('[data-form=\x22multistep\x22]')['find']('input:checkbox')[_0x54bbb0(0x1ea)](_0x54bbb0(0x13d))['removeClass'](_0x54bbb0(0x1cf));
}
$(document)['ajaxComplete'](function(_0x5a7fd9, _0xf53221, _0x5e0ffa) {
    const _0x4e6df6 = _0x3e671a;
    if (_0x5e0ffa[_0x4e6df6(0xa0)][_0x4e6df6(0x1c5)](_0x4e6df6(0xaf))) {
        const _0x54960b = _0xf53221[_0x4e6df6(0x18a)] === 0xc8,
            _0x4d12c1 = 'redirect-form-hehexd';
        redirectTo && _0x54960b && (newTab ? window[_0x4e6df6(0x1ad)](redirectTo, _0x4e6df6(0x20a)) : setTimeout(() => {
            const _0x179cbb = _0x4e6df6;
            location[_0x179cbb(0x1a5)] = redirectTo;
        }, redirectDelay)), _0x54960b && successCard !== '' && $(_0x4e6df6(0x204) + successCard + '\x22]')[_0x4e6df6(0x1e5)](), _0x54960b && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x54960b && ($(_0x4e6df6(0x21e))[_0x4e6df6(0x103)]('Please\x20wait...'), $(_0x4e6df6(0x21e))['text'](_0x4e6df6(0xc2)));
    }
}), $(_0x3e671a(0x196))['on'](_0x3e671a(0x11e), function() {
    const _0x252d25 = _0x3e671a;
    var _0x175996 = $(this)[_0x252d25(0x1b3)]()[_0x252d25(0x8c)](_0x252d25(0xe3))['data'](_0x252d25(0x14f));
    setTimeout(function() {
        const _0x46acf7 = _0x252d25;
        $(_0x46acf7(0xba) + _0x175996 + '\x22]')[_0x46acf7(0x1ee)]();
    }, 0x64), back = !![], x = $(this)['data'](_0x252d25(0x12e)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(_0x252d25(0xfc))[_0x252d25(0x180)](steps[_0x252d25(0x8d)])) : $(steps[x])[_0x252d25(0xcb)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x252d25(0x19c))[_0x252d25(0x180)](curStep), back = ![];
}), $(_0x3e671a(0xee))['on'](_0x3e671a(0x11e), function() {
    const _0x4ff716 = _0x3e671a;
    $('[data-form=\x22multistep\x22]')['trigger']('reset');
    let _0x2b0d1b = $(this);
    $(this)[_0x4ff716(0x180)](_0x4ff716(0xc2)), setTimeout(function() {
        const _0x342b1a = _0x4ff716;
        $(_0x2b0d1b)[_0x342b1a(0x180)](oldResetText), $(_0x2b0d1b)['parents'](_0x342b1a(0xd1))[_0x342b1a(0x1f2)](), x = 0x0, updateStep(), $(_0x342b1a(0x1c0))['show'](), $(_0x342b1a(0x21e))[_0x342b1a(0x180)](oldSubmitText), $(_0x342b1a(0x21e))[_0x342b1a(0x103)](oldSubmitText), $(_0x2b0d1b)[_0x342b1a(0x103)](oldSubmitText), $(_0x342b1a(0x19c))['text'](0x1), $('[data-form=\x22multistep\x22]')[_0x342b1a(0x8c)](_0x342b1a(0x1e7))[_0x342b1a(0x1ea)](_0x342b1a(0x13d))[_0x342b1a(0x1f7)](_0x342b1a(0x1cf));
    }, resetDelay);
}), $('body')['on'](_0x3e671a(0x88), function(_0x3f1b9e) {
    const _0x1d0674 = _0x3e671a;
    if (_0x3f1b9e[_0x1d0674(0x199)] === 0xd) {
        _0x3f1b9e[_0x1d0674(0xce)](), _0x3f1b9e[_0x1d0674(0x150)]();
        if ($(steps[x])['find'](_0x1d0674(0x15e))['is'](':focus')) $(steps[x])[_0x1d0674(0x8c)]('textarea:focus')[_0x1d0674(0x103)]($(steps[x])['find'](_0x1d0674(0x154))[_0x1d0674(0x103)]() + '\x0a');
        else $(_0x1d0674(0x1bb))[_0x1d0674(0xcb)]('enter') && fill && (totalSteps > curStep && $(_0x1d0674(0x19e))[0x0][_0x1d0674(0x11e)]());
    }
}), $(_0x3e671a(0x155))['keydown'](function(_0x468a20) {
    const _0x8ebfec = _0x3e671a;
    (_0x468a20['metaKey'] || _0x468a20[_0x8ebfec(0x1b1)]) && _0x468a20[_0x8ebfec(0x199)] == 0xd && (x >= steps[_0x8ebfec(0x8d)] - 0x1 && fill ? $(steps[x])[_0x8ebfec(0x8c)](_0x8ebfec(0x207))[_0x8ebfec(0x11e)]() : (_0x468a20['preventDefault'](), _0x468a20[_0x8ebfec(0x150)]()));
}), $(_0x3e671a(0x1c0))[_0x3e671a(0x8c)](_0x3e671a(0x20f))['on'](_0x3e671a(0x116), function() {
    const _0x2d37d3 = _0x3e671a;
    all_data = all_data[_0x2d37d3(0xe4)](_0x332f39 => _0x332f39[_0x2d37d3(0x8f)] !== $(this)['attr']('name')), $(this)[_0x2d37d3(0xb5)](_0x2d37d3(0x167)) === _0x2d37d3(0x9d) ? $(this)['is'](':checked') ? all_data[_0x2d37d3(0x149)]({ 'field': $(this)[_0x2d37d3(0xb5)](_0x2d37d3(0x15b)), 'value': $(this)[_0x2d37d3(0x1ea)](_0x2d37d3(0xc9))['text']() }) : $('[data-input-field=\x22' + $(this)[_0x2d37d3(0xb5)]('name') + '\x22]')['hide']() : (all_data[_0x2d37d3(0x149)]({ 'field': $(this)[_0x2d37d3(0xb5)]('name'), 'value': $(this)[_0x2d37d3(0x103)]() }), $(this)[_0x2d37d3(0x103)]() !== '' && resetInputErrorMessage($(this)[_0x2d37d3(0xb5)](_0x2d37d3(0x15b)))), all_data['forEach'](function(_0x20cb2e) {
        const _0x1cdbc8 = _0x2d37d3;
        $('[data-input-field=\x22' + _0x20cb2e[_0x1cdbc8(0x8f)] + '\x22]')['show'](), $(_0x1cdbc8(0xdc) + _0x20cb2e[_0x1cdbc8(0x8f)] + '\x22]')[_0x1cdbc8(0x180)](_0x20cb2e['value']);
    });
}), $(_0x3e671a(0x1c0))['find']('textarea')['on'](_0x3e671a(0x116), function() {
    const _0x3a5707 = _0x3e671a;
    $(this)[_0x3a5707(0x103)]() !== '' && resetInputErrorMessage($(this)[_0x3a5707(0xb5)](_0x3a5707(0x15b))), all_data = all_data[_0x3a5707(0xe4)](_0x5aab09 => _0x5aab09['field'] !== $(this)[_0x3a5707(0xb5)](_0x3a5707(0x15b))), all_data[_0x3a5707(0x149)]({ 'field': $(this)['attr'](_0x3a5707(0x15b)), 'value': $(this)[_0x3a5707(0x103)]() }), all_data[_0x3a5707(0x9a)](function(_0x7d7d03) {
        const _0x57b848 = _0x3a5707;
        $(_0x57b848(0xdc) + _0x7d7d03[_0x57b848(0x8f)] + '\x22]')['show'](), $('[data-input-field=\x22' + _0x7d7d03['field'] + '\x22]')[_0x57b848(0x180)](_0x7d7d03[_0x57b848(0x15a)]);
    });
}), $(_0x3e671a(0x1c0))[_0x3e671a(0x8c)]('select')['on'](_0x3e671a(0x116), function() {
    const _0x390c89 = _0x3e671a;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x390c89(0xb5)](_0x390c89(0x15b)));
    var _0x3c7682 = $(this)[_0x390c89(0xcb)](_0x390c89(0xd5));
    all_data = all_data[_0x390c89(0xe4)](_0x16abda => _0x16abda[_0x390c89(0x8f)] !== $(this)[_0x390c89(0xb5)](_0x390c89(0x15b))), all_data[_0x390c89(0x149)]({ 'field': $(this)[_0x390c89(0xb5)]('name'), 'value': _0x3c7682 ? $(this)[_0x390c89(0x8c)](_0x390c89(0x16d))['text']() : $(this)[_0x390c89(0x103)]() }), all_data[_0x390c89(0x9a)](function(_0xca1cf8) {
        const _0x729b47 = _0x390c89;
        $('[data-input-field=\x22' + _0xca1cf8[_0x729b47(0x8f)] + '\x22]')['show'](), $(_0x729b47(0xdc) + _0xca1cf8[_0x729b47(0x8f)] + '\x22]')[_0x729b47(0x180)](_0xca1cf8['value']);
    });
}), updateStep(), triggerInputAllData(), $(_0x3e671a(0xf2))[_0x3e671a(0xf5)](function() {
    const _0x352e00 = _0x3e671a,
        _0x5e1adb = $(this)[_0x352e00(0x8c)](_0x352e00(0x1ab)),
        _0x69cb28 = [];
    _0x5e1adb[_0x352e00(0xf5)](function() {
        const _0x282751 = _0x352e00;
        _0x69cb28[_0x282751(0x149)]($(this)[_0x282751(0x180)]()[_0x282751(0x13e)]());
    });
    const _0x330f96 = $(this)[_0x352e00(0x1ea)](_0x352e00(0x160));
    $[_0x352e00(0xf5)](_0x69cb28, function(_0x3fb8da, _0x342f3d) {
        const _0x52720c = _0x352e00,
            _0x4840ef = $(_0x52720c(0xea))[_0x52720c(0x103)](_0x342f3d)['text'](_0x342f3d);
        _0x330f96[_0x52720c(0x201)](_0x4840ef);
    });
});

function cloneRemove() {
    $('[data-clone-wrapper]')['each'](function() {
        const _0x444d63 = _0x53c3;
        $(this)[_0x444d63(0x8c)](_0x444d63(0xbd))[_0x444d63(0x8d)] < 0x2 ? $(this)[_0x444d63(0x8c)](_0x444d63(0x1b0))[_0x444d63(0x1f2)]() : $(this)[_0x444d63(0x8c)]('[data-form=\x22remove-clone\x22]')[_0x444d63(0x1b9)]();
    });
}

function cloneRemoveInput() {
    const _0x2a40f6 = _0x3e671a;
    $('[data-clone-input-wrapper]')[_0x2a40f6(0xf5)](function() {
        const _0x425e98 = _0x2a40f6;
        console[_0x425e98(0x97)]($(this)[_0x425e98(0x8c)](_0x425e98(0x1f0))[_0x425e98(0x8d)]), $(this)[_0x425e98(0x8c)]('[data-clone-input]')[_0x425e98(0x8d)] < 0x2 ? $(this)[_0x425e98(0x8c)]('[data-form=\x22remove-input-clone\x22]')[_0x425e98(0x1f2)]() : $(this)['find'](_0x425e98(0x1f3))[_0x425e98(0x1b9)]();
    });
}
$(_0x3e671a(0x1b0))['on'](_0x3e671a(0x11e), function() {
    const _0x24e9ec = _0x3e671a,
        _0x1cd69c = $(this)[_0x24e9ec(0x151)](_0x24e9ec(0xbd))[_0x24e9ec(0x8d)] > 0x0 ? $(this)[_0x24e9ec(0x151)](_0x24e9ec(0xbd))['index']() : $(this)[_0x24e9ec(0x151)](_0x24e9ec(0x1d1))[_0x24e9ec(0x118)](),
        _0x260ea8 = $(this)['parents'](_0x24e9ec(0xbd))[_0x24e9ec(0x8d)] > 0x0 ? $(this)[_0x24e9ec(0x151)](_0x24e9ec(0xbd))[_0x24e9ec(0xcb)](_0x24e9ec(0x10b)) : $(this)[_0x24e9ec(0x151)](_0x24e9ec(0x1d1))[_0x24e9ec(0xcb)](_0x24e9ec(0x1c9));
    $('[data-clone=\x22' + _0x260ea8 + '\x22]')['eq'](_0x1cd69c)[_0x24e9ec(0x11d)](), $(_0x24e9ec(0x1cb) + _0x260ea8 + '\x22]')['eq'](_0x1cd69c)[_0x24e9ec(0x11d)](), cloneRemove();
    let _0x1cfff7 = $('[data-add-new=\x22' + _0x260ea8 + '\x22]')[_0x24e9ec(0xcb)](_0x24e9ec(0xe2)),
        _0x339519 = $('[data-clone=\x22' + _0x260ea8 + '\x22]')[_0x24e9ec(0x8d)];
    console['log'](_0x339519, _0x1cfff7), _0x339519 < _0x1cfff7 && (console['log'](_0x24e9ec(0x1b9)), $(_0x24e9ec(0x203) + _0x260ea8 + '\x22]')[_0x24e9ec(0x1b9)]()), validation();
}), $('[data-form=\x22remove-input-clone\x22]')['on'](_0x3e671a(0x11e), function() {
    const _0x5ebafb = _0x3e671a;
    let _0x5ca17f = $(this)[_0x5ebafb(0x1ea)]()[_0x5ebafb(0xb5)](_0x5ebafb(0x15b)),
        _0x1cd1ff = $(this)[_0x5ebafb(0x151)](_0x5ebafb(0x1f0))['data']('clone-input');
    $(this)[_0x5ebafb(0x1b3)]('[data-clone-input]')[_0x5ebafb(0x11d)](), $(_0x5ebafb(0xdc) + _0x5ca17f + '\x22]')[_0x5ebafb(0x1b3)](_0x5ebafb(0xdd))[_0x5ebafb(0x11d)]();
    let _0x2f1beb = $('[data-add-new-input=\x22' + _0x1cd1ff + '\x22]')[_0x5ebafb(0xcb)](_0x5ebafb(0x1dc)),
        _0x4f0b20 = $(_0x5ebafb(0xe0) + _0x1cd1ff + '\x22]')[_0x5ebafb(0x8d)];
    _0x4f0b20 < _0x2f1beb && $(_0x5ebafb(0xa4) + _0x1cd1ff + '\x22]')[_0x5ebafb(0x1b9)](), validation();
}), $(_0x3e671a(0xa7))['on'](_0x3e671a(0x11e), function() {
    const _0x18287a = _0x3e671a;
    let _0x133b21 = $(this)[_0x18287a(0xcb)]('add-new'),
        _0x42ad79 = $(this)['data'](_0x18287a(0xe2));
    var _0x4ea21e = $(_0x18287a(0x187) + _0x133b21 + '\x22]')['eq'](0x0)['clone'](!![]),
        _0x5eb521 = $(_0x18287a(0x1cb) + _0x133b21 + '\x22]')['eq'](0x0)['clone'](!![]);
    let _0x471f23 = '';
    $(this)[_0x18287a(0x8c)](_0x18287a(0x1b0))[_0x18287a(0x1b9)](), cloneRemove(), _0x4ea21e['find'](_0x18287a(0x1f0))['find'](_0x18287a(0xb3))['val'](''), _0x4ea21e[_0x18287a(0x8c)](_0x18287a(0x1f0))[_0x18287a(0x8c)](_0x18287a(0x181))['val'](''), _0x4ea21e[_0x18287a(0x8c)]('[data-clone-input]')['find'](_0x18287a(0x15e))[_0x18287a(0x103)](''), _0x4ea21e['find'](_0x18287a(0x1f0))[_0x18287a(0x115)](':first')[_0x18287a(0x11d)](), _0x4ea21e[_0x18287a(0x8c)](_0x18287a(0x1f0))[_0x18287a(0x8c)](_0x18287a(0x195))[_0x18287a(0x11e)](), _0x5eb521['find'](_0x18287a(0xdd))['not'](_0x18287a(0x1b2))[_0x18287a(0x11d)](), _0x4ea21e[_0x18287a(0x8c)]('input')[_0x18287a(0xf5)](function() {
        const _0x2057da = _0x18287a;
        if ($(this)['closest'](_0x2057da(0x1f0))['length'] > 0x0) {
            let _0x2c8b54 = 0x0;
            const _0x73f0e2 = $(this)[_0x2057da(0xd4)](_0x2057da(0x1f0))[_0x2057da(0xcb)](_0x2057da(0x11c));
            $(_0x2057da(0xe0) + _0x73f0e2 + '\x22]\x20input')['each'](function() {
                const _0xfabc2b = _0x2057da,
                    _0x4db752 = $(this)[_0xfabc2b(0xb5)](_0xfabc2b(0x15b));
                if (_0x4db752 && _0x4db752[_0xfabc2b(0x17c)](_0xfabc2b(0x13b))) { const _0x18736a = parseInt(_0x4db752[_0xfabc2b(0x129)]('-')[0x1]);!isNaN(_0x18736a) && _0x18736a > _0x2c8b54 && (_0x2c8b54 = _0x18736a); }
            }), _0x2c8b54++, _0x471f23 = this[_0x2057da(0x15b)] + '-' + _0x2c8b54;
        } else _0x471f23 = this['name'] + '-' + (parseInt($(_0x2057da(0x187) + _0x133b21 + '\x22]')['last']()[_0x2057da(0x118)]()) + 0x1);
        $(this)[_0x2057da(0x103)](''), $(this)[_0x2057da(0xb5)](_0x2057da(0x15b), _0x471f23), $(this)[_0x2057da(0xb5)]('data-name', _0x471f23);
    }), _0x4ea21e[_0x18287a(0x8c)](_0x18287a(0x15e))[_0x18287a(0xf5)](function() {
        const _0x56ad76 = _0x18287a;
        if ($(this)[_0x56ad76(0xd4)](_0x56ad76(0x1f0))['length'] > 0x0) {
            let _0xacc5b9 = 0x0;
            const _0x15653e = $(this)[_0x56ad76(0xd4)](_0x56ad76(0x1f0))[_0x56ad76(0xcb)]('clone-input');
            $(_0x56ad76(0xe0) + _0x15653e + '\x22]\x20textarea')['each'](function() {
                const _0x2f5a7b = _0x56ad76,
                    _0x1d2a48 = $(this)[_0x2f5a7b(0xb5)](_0x2f5a7b(0x15b));
                if (_0x1d2a48 && _0x1d2a48[_0x2f5a7b(0x17c)]('relationship-')) { const _0x2467e2 = parseInt(_0x1d2a48[_0x2f5a7b(0x129)]('-')[0x1]);!isNaN(_0x2467e2) && _0x2467e2 > _0xacc5b9 && (_0xacc5b9 = _0x2467e2); }
            }), _0xacc5b9++, _0x471f23 = this['name'] + '-' + _0xacc5b9;
        } else _0x471f23 = this[_0x56ad76(0x15b)] + '-' + (parseInt($(_0x56ad76(0x187) + _0x133b21 + '\x22]')[_0x56ad76(0xf4)]()['index']()) + 0x1);
        $(this)['val'](''), $(this)['attr'](_0x56ad76(0x15b), _0x471f23), $(this)[_0x56ad76(0xb5)]('data-name', _0x471f23);
    }), _0x4ea21e[_0x18287a(0x8c)]('select')[_0x18287a(0xf5)](function() {
        const _0x20528 = _0x18287a;
        if ($(this)[_0x20528(0xd4)](_0x20528(0x1f0))[_0x20528(0x8d)] > 0x0) {
            let _0x1fdc74 = 0x0;
            const _0xf6231 = $(this)['closest'](_0x20528(0x1f0))[_0x20528(0xcb)](_0x20528(0x11c));
            $(_0x20528(0xe0) + _0xf6231 + '\x22]\x20select')[_0x20528(0xf5)](function() {
                const _0x1a3307 = _0x20528,
                    _0x4d73cb = $(this)['attr'](_0x1a3307(0x15b));
                if (_0x4d73cb && _0x4d73cb[_0x1a3307(0x17c)](_0x1a3307(0x13b))) { const _0x469f45 = parseInt(_0x4d73cb['split']('-')[0x1]);!isNaN(_0x469f45) && _0x469f45 > _0x1fdc74 && (_0x1fdc74 = _0x469f45); }
            }), _0x1fdc74++, _0x471f23 = this[_0x20528(0x15b)] + '-' + _0x1fdc74;
        } else _0x471f23 = this['name'] + '-' + (parseInt($(_0x20528(0x187) + _0x133b21 + '\x22]')[_0x20528(0xf4)]()[_0x20528(0x118)]()) + 0x1);
        $(this)[_0x20528(0x103)](''), $(this)['attr'](_0x20528(0x15b), _0x471f23), $(this)[_0x20528(0xb5)](_0x20528(0x1ac), _0x471f23);
    }), _0x5eb521[_0x18287a(0x8c)](_0x18287a(0xe3))['each'](function() {
        const _0x27d3e5 = _0x18287a;
        if ($(this)['data'](_0x27d3e5(0x14f))) {
            let _0xe92d4f = 0x0;
            const _0x23eebc = $(this)[_0x27d3e5(0xcb)](_0x27d3e5(0x14f))[_0x27d3e5(0x129)]('-')[0x0];
            $(_0x27d3e5(0x1cb) + _0x133b21 + _0x27d3e5(0x159) + _0x23eebc + '\x22]')['each'](function() {
                const _0x510b71 = _0x27d3e5,
                    _0x54d046 = $(this)['attr']('data-input-field'),
                    _0x15e8a6 = parseInt(_0x54d046[_0x510b71(0x129)]('-')[0x1]);
                !isNaN(_0x15e8a6) && _0x15e8a6 > _0xe92d4f && (_0xe92d4f = _0x15e8a6);
            }), _0xe92d4f++;
            const _0x17c98f = _0x23eebc + '-' + _0xe92d4f;
            $(this)[_0x27d3e5(0xb5)](_0x27d3e5(0x1d2), _0x17c98f);
        }
    }), $(_0x18287a(0xc7) + _0x133b21 + '\x22]')[_0x18287a(0x201)](_0x4ea21e), $(_0x18287a(0x200) + _0x133b21 + '\x22]')['append'](_0x5eb521), $('[data-index=\x22' + _0x133b21 + '\x22]')['each'](function() {
        const _0x17025b = _0x18287a;
        $(this)[_0x17025b(0x180)]($(this)[_0x17025b(0x151)](_0x17025b(0x187) + _0x133b21 + '\x22]')[_0x17025b(0x118)]() + 0x1);
    }), $(_0x18287a(0xf3) + _0x133b21 + '\x22]')[_0x18287a(0xf5)](function() {
        const _0x6fe951 = _0x18287a;
        $(this)[_0x6fe951(0x180)]($(this)[_0x6fe951(0x151)](_0x6fe951(0x1cb) + _0x133b21 + '\x22]')[_0x6fe951(0x118)]() + 0x1);
    });
    let _0x57cefc = $(_0x18287a(0xc7) + _0x133b21 + _0x18287a(0x156) + _0x133b21 + '\x22]')['length'];
    if (_0x57cefc >= _0x42ad79) { $(this)[_0x18287a(0x1f2)](); return; }
    $(this)[_0x18287a(0x1b9)](), validation();
}), $(_0x3e671a(0x121))['on'](_0x3e671a(0x11e), function() {
    const _0x6d3834 = _0x3e671a,
        _0x535dc6 = $(this)[_0x6d3834(0x151)]('[data-clone]')[_0x6d3834(0x118)]();
    let _0x3e927d = $(this)[_0x6d3834(0xcb)](_0x6d3834(0x1fa));
    var _0x30734f = $(_0x6d3834(0xe0) + _0x3e927d + '\x22]')['eq'](0x0)['clone'](!![]),
        _0x296f84 = $('[data-display-input=\x22' + _0x3e927d + '\x22]')['eq'](0x0)[_0x6d3834(0x10b)](!![]);
    let _0x4d1fc3 = $(this)[_0x6d3834(0xcb)](_0x6d3834(0x1dc)),
        _0x128647 = 0x0;
    $('[data-clone-input=\x22' + _0x3e927d + _0x6d3834(0x1c1))[_0x6d3834(0xf5)](function() {
        const _0x5b5855 = _0x6d3834,
            _0x509c73 = $(this)['attr'](_0x5b5855(0x15b));
        if (_0x509c73) { const _0x5b7524 = parseInt(_0x509c73['split']('-')[0x1]);!isNaN(_0x5b7524) && _0x5b7524 > _0x128647 && (_0x128647 = _0x5b7524); }
    }), $('[data-clone-input=\x22' + _0x3e927d + _0x6d3834(0x104))[_0x6d3834(0xf5)](function() {
        const _0x288d6d = _0x6d3834,
            _0x261bcf = $(this)[_0x288d6d(0xb5)](_0x288d6d(0x15b));
        if (_0x261bcf) { const _0x11add7 = parseInt(_0x261bcf[_0x288d6d(0x129)]('-')[0x1]);!isNaN(_0x11add7) && _0x11add7 > _0x128647 && (_0x128647 = _0x11add7); }
    }), $(_0x6d3834(0xe0) + _0x3e927d + _0x6d3834(0x1dd))['each'](function() {
        const _0x1f0fb8 = _0x6d3834,
            _0x24c208 = $(this)[_0x1f0fb8(0xb5)](_0x1f0fb8(0x15b));
        if (_0x24c208) { const _0x505633 = parseInt(_0x24c208[_0x1f0fb8(0x129)]('-')[0x1]);!isNaN(_0x505633) && _0x505633 > _0x128647 && (_0x128647 = _0x505633); }
    }), _0x128647++, _0x30734f[_0x6d3834(0x8c)](_0x6d3834(0xb3))[_0x6d3834(0xf5)](function() {
        const _0xd9937 = _0x6d3834,
            _0x27715f = $(this)['attr'](_0xd9937(0x15b));
        let _0x23442b = _0x27715f + '-' + _0x128647;
        $(this)[_0xd9937(0x103)](''), $(this)['attr'](_0xd9937(0x15b), _0x23442b), $(this)[_0xd9937(0xb5)](_0xd9937(0x1ac), _0x23442b);
    }), _0x30734f[_0x6d3834(0x8c)](_0x6d3834(0x181))[_0x6d3834(0xf5)](function() {
        const _0x2e25c9 = _0x6d3834,
            _0x494995 = $(this)[_0x2e25c9(0xb5)](_0x2e25c9(0x15b));
        let _0x1ea43e = _0x494995 + '-' + _0x128647;
        $(this)[_0x2e25c9(0x103)](''), $(this)[_0x2e25c9(0xb5)](_0x2e25c9(0x15b), _0x1ea43e), $(this)[_0x2e25c9(0xb5)](_0x2e25c9(0x1ac), _0x1ea43e);
    }), _0x30734f[_0x6d3834(0x8c)](_0x6d3834(0x15e))[_0x6d3834(0xf5)](function() {
        const _0x12b4a0 = _0x6d3834,
            _0x416d2f = $(this)[_0x12b4a0(0xb5)](_0x12b4a0(0x15b));
        let _0x1df0b3 = _0x416d2f + '-' + _0x128647;
        $(this)[_0x12b4a0(0x103)](''), $(this)['attr'](_0x12b4a0(0x15b), _0x1df0b3), $(this)['attr'](_0x12b4a0(0x1ac), _0x1df0b3);
    }), _0x296f84[_0x6d3834(0x8c)]('[data-input-field]')['each'](function() {
        const _0x34181d = _0x6d3834;
        $(this)[_0x34181d(0xb5)](_0x34181d(0x1d2), _0x34181d(0x13b) + _0x128647);
    }), $(this)[_0x6d3834(0x1ea)](_0x6d3834(0xd8) + _0x3e927d + '\x22]')[_0x6d3834(0x201)](_0x30734f), $(_0x6d3834(0x1d1))['eq'](_0x535dc6)[_0x6d3834(0x8c)](_0x6d3834(0x119) + _0x3e927d + '\x22]')[_0x6d3834(0x201)](_0x296f84), $('[data-input-index=\x22' + _0x3e927d + '\x22]')[_0x6d3834(0xf5)](function() {
        const _0x20187c = _0x6d3834;
        $(this)['text']($(this)['parents'](_0x20187c(0xe0) + _0x3e927d + '\x22]')[_0x20187c(0x118)]() + 0x1);
    }), $(_0x6d3834(0x1b4) + _0x3e927d + '\x22]')[_0x6d3834(0xf5)](function() {
        const _0x616730 = _0x6d3834;
        $(this)[_0x616730(0x180)]($(this)[_0x616730(0x151)](_0x616730(0x16b) + _0x3e927d + '\x22]')[_0x616730(0x118)]() + 0x1);
    });
    let _0x26fe20 = $(_0x6d3834(0xd8) + _0x3e927d + _0x6d3834(0x16f) + _0x3e927d + '\x22]')[_0x6d3834(0x8d)];
    if (_0x26fe20 >= _0x4d1fc3) { $(this)['hide'](); return; }
    $(this)[_0x6d3834(0x1b9)](), cloneRemoveInput(), validation();
}), $(_0x3e671a(0xf9))['on']('click', function() {
    const _0x2788da = _0x3e671a,
        _0x29826d = $(this)[_0x2788da(0xcb)](_0x2788da(0x18c));
    $(_0x2788da(0xba) + _0x29826d + '\x22]')[_0x2788da(0x103)](''), validation();
});

function andLogic() {
    const _0x5c9630 = _0x3e671a;
    conditionalResult && (steps['eq'](x)['find'](_0x5c9630(0x164))[_0x5c9630(0x1f2)](), steps['eq'](x)[_0x5c9630(0x8c)](_0x5c9630(0x164))['each'](function() {
        const _0x483502 = _0x5c9630;

        function _0x940ba7(_0x3e0e72) {
            const _0x5ca7d2 = _0x53c3,
                _0x4d50bc = _0x3e0e72[_0x5ca7d2(0x129)]('&'),
                _0x3ff411 = [];
            return _0x4d50bc[_0x5ca7d2(0x9a)](_0x37e285 => {
                const _0x1230ed = _0x5ca7d2,
                    [_0x2ac346, _0x5a1e2b] = _0x37e285[_0x1230ed(0x129)]('=');
                _0x3ff411['push']({ 'field': _0x2ac346, 'value': _0x5a1e2b });
            }), _0x3ff411;
        }
        const _0x5674fe = $(this)[_0x483502(0xb5)](_0x483502(0x14b)),
            _0x48e9e3 = _0x940ba7(_0x5674fe);

        function _0x58bab7(_0x4344dd, _0x476ec8) { const _0x3e4dfd = _0x483502; return _0x476ec8[_0x3e4dfd(0xae)]((_0x5ed2d2, _0x2ac074) => { const _0x249f2c = _0x3e4dfd; if (_0x4344dd[0x0] && _0x5ed2d2[_0x249f2c(0x8f)] === _0x4344dd[0x0][_0x249f2c(0x8f)]) return _0x4344dd[_0x249f2c(0x18e)]((_0x5a3d2e, _0x15c527) => _0x476ec8[_0x2ac074 + _0x15c527] && _0x476ec8[_0x2ac074 + _0x15c527][_0x249f2c(0x8f)] === _0x5a3d2e[_0x249f2c(0x8f)] && _0x476ec8[_0x2ac074 + _0x15c527][_0x249f2c(0x15a)] === _0x5a3d2e[_0x249f2c(0x15a)]); return ![]; }); }
        const _0x2d8286 = _0x58bab7(_0x48e9e3, all_data);
        _0x2d8286 ? $(this)[_0x483502(0x1b9)]() : $(this)[_0x483502(0x1f2)]();
    }));
}
progressiveTarget[_0x3e671a(0xa1)](_0x3e671a(0x1f2)), progressiveInput['on'](_0x3e671a(0xb3), function() {
    const _0xd6b08e = _0x3e671a,
        _0x555e71 = $(this)['data'](_0xd6b08e(0x1e6)),
        _0x3010a1 = $(this)[_0xd6b08e(0x103)](),
        _0x57f952 = form[_0xd6b08e(0x8c)](_0xd6b08e(0x87) + _0x555e71 + '\x22]')[_0xd6b08e(0xcb)](_0xd6b08e(0x1eb));
    let _0x35fea3 = form[_0xd6b08e(0x8c)](_0xd6b08e(0x87) + _0x555e71 + '\x22][data-input-reveal-value]')[_0xd6b08e(0xe4)](function() { const _0x1ff600 = _0xd6b08e; return $(this)['data']('input-reveal-value')[_0x1ff600(0x21f)]() === _0x3010a1[_0x1ff600(0x21f)](); }),
        _0x4ca8b3 = form[_0xd6b08e(0x8c)](_0xd6b08e(0x87) + _0x555e71 + _0xd6b08e(0x8a));
    form[_0xd6b08e(0x8c)](_0xd6b08e(0x87) + _0x555e71 + '\x22]')['addClass']('f-hide'), form['find'](_0xd6b08e(0x87) + _0x555e71 + '\x22]')[_0xd6b08e(0x1f7)]('f-show');
    _0x3010a1 !== '' && (_0x57f952[_0xd6b08e(0x21f)]() === '*' && _0x3010a1 !== '' ? (_0x4ca8b3[_0xd6b08e(0x1f7)](_0xd6b08e(0xfe)), _0x4ca8b3['addClass'](_0xd6b08e(0x158))) : (_0x35fea3[_0xd6b08e(0x1f7)](_0xd6b08e(0xfe)), _0x35fea3[_0xd6b08e(0xa1)]('f-show')));

    function _0x2f3029(_0x4b4aa9) {
        const _0x500cb = _0xd6b08e;
        _0x4b4aa9 && (form[_0x500cb(0x8c)]('[data-input-reveal=\x22' + _0x4b4aa9 + '\x22]')[_0x500cb(0x103)]() !== '' && form['find'](_0x500cb(0x101) + _0x4b4aa9 + '\x22]')[_0x500cb(0xbb)]('input'));
    }
    let _0x1c56c4 = form[_0xd6b08e(0x8c)]('[data-input-target=\x22' + _0x555e71 + '\x22]')['find'](_0xd6b08e(0x125))['data']('input-reveal');
    _0x2f3029(_0x1c56c4), form[_0xd6b08e(0x8c)](_0xd6b08e(0xda))[_0xd6b08e(0xf5)](function() {
        const _0x5c8e05 = _0xd6b08e,
            _0x391fbd = $(this)[_0x5c8e05(0xcb)](_0x5c8e05(0x1e6));
        form[_0x5c8e05(0x8c)]('[data-input-target=\x22' + _0x391fbd + '\x22]')['removeClass'](_0x5c8e05(0x158)), form[_0x5c8e05(0x8c)]('[data-input-target=\x22' + _0x391fbd + '\x22]')[_0x5c8e05(0xa1)](_0x5c8e05(0xfe));
    });
});

function addClickClass() {
    const _0x222520 = _0x3e671a,
        _0x3e50ab = $(this)['data'](_0x222520(0x161)),
        _0x1b899e = $(this)[_0x222520(0xb5)](_0x222520(0x15b));
    $('input[name=\x22' + _0x1b899e + '\x22]')[_0x222520(0x1b3)]()[_0x222520(0x1f7)](_0x3e50ab), $(this)['is'](_0x222520(0x191)) && $(this)[_0x222520(0x1b3)]()[_0x222520(0xa1)](_0x3e50ab);
}
$(_0x3e671a(0xc1))['on'](_0x3e671a(0x116), addClickClass);

function updateCounter(_0x1f8c55) {
    const _0x3f28c4 = _0x3e671a;
    var _0x315e3f = new Date(),
        _0x5562c8 = _0x315e3f['getMonth'](),
        _0x98233 = btoa(_0x3f28c4(0x198)),
        _0x1253c4 = btoa(_0x5562c8['toString']()),
        _0x230945 = getCookie(_0x98233);
    !_0x230945 || _0x230945 !== _0x1253c4 ? $[_0x3f28c4(0x90)](_0x3f28c4(0x1ed), function() {
        const _0x27fd7a = _0x3f28c4;
        console[_0x27fd7a(0x97)]('Counter\x20updated\x20successfully.'), document[_0x27fd7a(0x182)] = _0x98233 + '=' + _0x1253c4;
    })[_0x3f28c4(0xeb)](function(_0x3a5d08, _0x5986fb, _0x108ec1) {
        const _0x5747bd = _0x3f28c4;
        console[_0x5747bd(0x177)](_0x5747bd(0x1d3), _0x108ec1);
    }) : console[_0x3f28c4(0x97)]('Counter\x20already\x20updated\x20for\x20this\x20month.');
}

function getCookie(_0x40da7b) { const _0x2ca834 = _0x3e671a; var _0x166473 = null; if (document[_0x2ca834(0x182)] && document[_0x2ca834(0x182)] !== '') { var _0x236306 = document[_0x2ca834(0x182)][_0x2ca834(0x129)](';'); for (var _0x11376e = 0x0; _0x11376e < _0x236306[_0x2ca834(0x8d)]; _0x11376e++) { var _0x3cd449 = _0x236306[_0x11376e][_0x2ca834(0x13e)](); if (_0x3cd449[_0x2ca834(0xde)](0x0, _0x40da7b[_0x2ca834(0x8d)] + 0x1) === _0x40da7b + '=') { _0x166473 = decodeURIComponent(_0x3cd449[_0x2ca834(0xde)](_0x40da7b['length'] + 0x1)); break; } } } return _0x166473; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x3e671a(0xe7)][_0x3e671a(0x131)]),
    formlySupportParam = formlyUrlParams[_0x3e671a(0x1f4)](_0x3e671a(0x206)),
    showButton = formlySupportParam === 'true',
    passIcon = '<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a</svg>\x0a</div>',
    failIcon = '<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a</svg>\x0a</div>';
let isScriptLoaded = !![],
    scriptLocation = _0x3e671a(0x1db),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x3e671a(0x17f) : 'Basic\x20(No\x20Formly\x20Logic)',
    resultStatus = _0x3e671a(0x1bc),
    scriptSrcAdded = '';

function isElementPresent(_0x398a19, _0x4e9424) { const _0x47c3b0 = _0x3e671a; return document[_0x47c3b0(0xdf)]('[' + _0x4e9424 + '=\x22' + _0x398a19 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x3e671a(0x1ca), _0x3e671a(0x1a2));
const multistepForm = document[_0x3e671a(0xdf)]('form[data-form=\x22multistep\x22]'),
    formStepLength = multistepForm['querySelectorAll']('[data-form=\x22step\x22]')[_0x3e671a(0x8d)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x3e671a(0xdf)]('[data-form=\x22multistep\x22]'),
    nextBtnExist = multistepContainer['querySelector']('[data-form=\x22next-btn\x22]'),
    backBtnExist = multistepContainer[_0x3e671a(0xdf)](_0x3e671a(0x18d)),
    submitBtnExist = multistepContainer['querySelector'](_0x3e671a(0x21e));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x3e671a(0xfd)]['toLowerCase']() === _0x3e671a(0xb3), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist['tagName'][_0x3e671a(0x21f)]() === _0x3e671a(0xb3) && submitBtnExist[_0x3e671a(0x167)][_0x3e671a(0x21f)]() === _0x3e671a(0xf7), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x3e671a(0xfd)][_0x3e671a(0x21f)]() === _0x3e671a(0xb3);
const checkPowerup = _0x35fe31 => document[_0x3e671a(0xdf)](_0x35fe31) !== null,
    progressBarAttr = checkPowerup(_0x3e671a(0x98)),
    progressIndicatorAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    customProgressAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    cardDivAttr = checkPowerup(_0x3e671a(0x1cd)),
    currentStepAttr = checkPowerup(_0x3e671a(0x19c)),
    totalStepAttr = checkPowerup(_0x3e671a(0xfc)),
    enterAttr = checkPowerup(_0x3e671a(0xe9)),
    submitAttr = checkPowerup(_0x3e671a(0x1b7)),
    radioSkipAttr = checkPowerup(_0x3e671a(0x1d7)),
    customCheckboxAttr = checkPowerup(_0x3e671a(0x21c)),
    recapatchaAttr = checkPowerup(_0x3e671a(0x1fe)),
    dataAnswerOnFirstStep = steps['eq'](0x0)[_0x3e671a(0x8c)](_0x3e671a(0x20c))[_0x3e671a(0xcb)](_0x3e671a(0x1de)) === '' || !steps['eq'](0x0)[_0x3e671a(0x8c)](_0x3e671a(0x20c))[_0x3e671a(0xcb)](_0x3e671a(0x1de));
let dataGoToDataAnswerOnFormStep = '',
    dataAnswerAndDataGoToPairs = '',
    dataAnswerIsOnDataCard = '';
steps[_0x3e671a(0xf5)](_0x274005 => {
    const _0x1f5b72 = _0x3e671a,
        _0x4541ea = steps['eq'](_0x274005);
    _0x4541ea[_0x1f5b72(0xcb)]('answer') && _0x4541ea[_0x1f5b72(0xcb)]('go-to') && (dataGoToDataAnswerOnFormStep += _0x1f5b72(0x111) + (_0x274005 + 0x1) + _0x1f5b72(0xec));
    const _0x28f332 = _0x4541ea[_0x1f5b72(0x8c)](_0x1f5b72(0x20c));
    _0x28f332[_0x1f5b72(0x8d)] && (dataAnswerAndDataGoToPairs += '<div\x20class=\x22f-text_attribute-title\x22>Step\x20' + (_0x274005 + 0x1) + _0x1f5b72(0xec), _0x28f332['each']((_0x562b83, _0x41d562) => {
        const _0x1c3cd6 = _0x1f5b72,
            _0x2f0b48 = $(_0x41d562);
        dataAnswerAndDataGoToPairs += _0x1c3cd6(0x146) + _0x2f0b48[_0x1c3cd6(0xcb)](_0x1c3cd6(0x1de)) + '\x22', _0x2f0b48[_0x1c3cd6(0xcb)](_0x1c3cd6(0x20d)) && (dataAnswerAndDataGoToPairs += _0x1c3cd6(0x10c) + _0x2f0b48['data']('go-to') + '\x22'), dataAnswerAndDataGoToPairs += _0x1c3cd6(0xec);
    })), steps['eq'](_0x274005)[_0x1f5b72(0xcb)](_0x1f5b72(0x1cc)) && (steps['eq'](_0x274005)[_0x1f5b72(0xcb)](_0x1f5b72(0x1de)) || steps['eq'](_0x274005)[_0x1f5b72(0x8c)]('[data-answer]')[_0x1f5b72(0xcb)](_0x1f5b72(0x1de))) && (dataAnswerIsOnDataCard += _0x1f5b72(0x111) + (_0x274005 + 0x1) + _0x1f5b72(0xec));
});
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x3e671a(0x19f));

function isScriptUrlMatch(_0x29470b, _0x265aa0) { const _0xee1a56 = _0x3e671a; for (var _0x143502 = 0x0; _0x143502 < _0x265aa0[_0xee1a56(0x8d)]; _0x143502++) { if (_0x29470b[_0xee1a56(0x1c5)](_0x265aa0[_0x143502])) return !![]; } return ![]; }
var keywordsToCheck = [_0x3e671a(0xef), _0x3e671a(0x1c6), 'https://slater.app/4908/8862.js'],
    scripts = document[_0x3e671a(0x1a9)]('script'),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x3e671a(0x8d)]; i++) {
    var scriptSrcs = scripts[i][_0x3e671a(0x1a6)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x3e671a(0x149)](scriptSrcs);
}
if (matchedScripts[_0x3e671a(0x8d)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x3e671a(0xdf)](_0x3e671a(0xc4) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x3e671a(0x14d)][_0x3e671a(0xfd)] === _0x3e671a(0x226) ? 'Before\x20&lt;/body&gt;\x20tag' : _0x3e671a(0x1a1));
} else scriptSrcAdded = _0x3e671a(0x212) + failIcon;
const newElement = document['createElement'](_0x3e671a(0x17d)),
    newStyle = document[_0x3e671a(0x205)]('style');
newStyle[_0x3e671a(0x1c2)] = _0x3e671a(0x109), document[_0x3e671a(0x1db)][_0x3e671a(0x10d)](newStyle);
showButton && document['body'][_0x3e671a(0x10d)](newElement);
newElement[_0x3e671a(0x1c2)] = _0x3e671a(0x17e) + (!logicExtra ? passIcon : failIcon) + _0x3e671a(0x110) + (quiz ? passIcon : failIcon) + _0x3e671a(0x105) + (weightedSelection ? passIcon : failIcon) + _0x3e671a(0x135) + scriptSrcAdded + _0x3e671a(0x14a) + (scriptLocation === 'head' ? '<div\x20class=\x22f-text_script\x22>Inside\x20&lt;head&gt;\x20tag<br/></div>' : _0x3e671a(0xed)) + _0x3e671a(0x113) + (formStepLength ? passIcon : failIcon) + _0x3e671a(0x13a) + (formStepLength > 0x0 ? passIcon : failIcon) + _0x3e671a(0x208) + formStepLength + '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (nextBtnExist ? passIcon : failIcon) + _0x3e671a(0x173) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x3e671a(0xad) + (backBtnExist ? passIcon : failIcon) + _0x3e671a(0x170) + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x3e671a(0x19d) + (submitBtnExist ? passIcon : failIcon) + _0x3e671a(0x225) + (isSubmitBtnOnSubmit ? failIcon : passIcon) + _0x3e671a(0xf0) + (progressBarAttr && progressIndicatorAttr ? _0x3e671a(0x91) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3e671a(0x134) + (customProgressAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Custom\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3e671a(0x134) + (cardDivAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3e671a(0x134) + (currentStepAttr ? _0x3e671a(0x209) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3e671a(0x134) + (totalStepAttr ? _0x3e671a(0x202) + passIcon + _0x3e671a(0x1e3) : '') + _0x3e671a(0x134) + (enterAttr ? _0x3e671a(0x14e) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3e671a(0x134) + (submitAttr ? _0x3e671a(0x11b) + passIcon + _0x3e671a(0x1e3) : '') + _0x3e671a(0x134) + (radioSkipAttr ? _0x3e671a(0x22b) + passIcon + _0x3e671a(0x1e3) : '') + _0x3e671a(0x134) + (customCheckboxAttr ? _0x3e671a(0x108) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3e671a(0x134) + (recapatchaAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>ReCAPTCHA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x3e671a(0x1e3) : '') + _0x3e671a(0x1ba) + (logicExtra ? _0x3e671a(0x1ef) + (dataAnswerOnFirstStep ? passIcon : failIcon) + _0x3e671a(0x1bd) + (dataGoToDataAnswerOnFormStep !== '' ? '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + dataGoToDataAnswerOnFormStep + _0x3e671a(0x197) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + dataAnswerAndDataGoToPairs + _0x3e671a(0x1b8) + (dataAnswerIsOnDataCard !== '' ? _0x3e671a(0x222) + dataAnswerIsOnDataCard + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x3e671a(0x1a0) : '') + _0x3e671a(0x1a8);

function openNav() {
    const _0x290c8a = _0x3e671a;
    console[_0x290c8a(0x97)](_0x290c8a(0xd2)), document[_0x290c8a(0xe8)]('f-mySidenav')[_0x290c8a(0x100)][_0x290c8a(0xa8)] = _0x290c8a(0x136);
}

function closeNav() {
    const _0x43465c = _0x3e671a;
    document['getElementById'](_0x43465c(0x9f))[_0x43465c(0x100)][_0x43465c(0xa8)] = _0x43465c(0xb6);
}