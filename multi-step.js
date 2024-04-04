// 4 April 2024
// Bug fix
// 1. Updated counter tracking url endpoint
// 2. Updated progressive target

const _0x29f161 = _0x4852;
(function(_0x4ac766, _0x240b81) {
    const _0x13f1c6 = _0x4852,
        _0x4acd4f = _0x4ac766();
    while (!![]) {
        try {
            const _0x5ca69c = parseInt(_0x13f1c6(0xac)) /
                0x1 * (-parseInt(_0x13f1c6(0x163)) / 0x2) + -parseInt(_0x13f1c6(0x85)) / 0x3 * (-parseInt(
                    _0x13f1c6(0xe9)) / 0x4) + parseInt(_0x13f1c6(0x11a)) / 0x5 * (parseInt(_0x13f1c6(
                    0xe8)) / 0x6) + parseInt(_0x13f1c6(0x200)) / 0x7 + parseInt(_0x13f1c6(0x1de)) / 0x8 * (-
                    parseInt(_0x13f1c6(0x147)) / 0x9) + parseInt(_0x13f1c6(0x7a)) / 0xa + -parseInt(
                    _0x13f1c6(0xd0)) / 0xb;
            if (_0x5ca69c === _0x240b81) break;
            else _0x4acd4f['push'](_0x4acd4f['shift']());
        } catch (_0x2a0adf) {
            _0x4acd4f['push'](
                _0x4acd4f['shift']());
        }
    }
}(_0x1d56, 0x99c99));
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
let steps = $('[data-form=\x22step\x22]'),
    progressbarClone = $('[data-form=\x22progress-indicator\x22]')['clone'](),
    progressbar, weightedSelection = $(_0x29f161(0x133))[_0x29f161(0x1cb)](_0x29f161(0x6a)),
    weightedSelectionRange = $(_0x29f161(0x1d3))[_0x29f161(0x1cb)]('weighted-selection-range'),
    selectMultiple = $(_0x29f161(0x124))[_0x29f161(0x1cb)](_0x29f161(0x121)),
    customError = $(_0x29f161(0x1d8))[_0x29f161(0x1cb)]('custom-error-message'),
    reinitIX = $(_0x29f161(0xda))[_0x29f161(0x1cb)]('reinit'),
    memory = $(_0x29f161(0x116))[_0x29f161(0x1cb)]('memory'),
    quiz = $('[data-quiz]')[_0x29f161(0x1cb)](_0x29f161(0xc5));
const urlFormly = new URL(window[_0x29f161(0x84)]['href']);
let _params = $(_0x29f161(0x8e))['data'](_0x29f161(0x10b)),
    logicExtra = $('[data-form=\x22multistep\x22]')[_0x29f161(0x1cb)]('logic-extra'),
    oldSubmitText = $(_0x29f161(0x129))[_0x29f161(0x137)](),
    oldResetText = $(_0x29f161(0x164))[_0x29f161(0x1b7)](),
    formReset = $(_0x29f161(0x173))[_0x29f161(0x1cb)](_0x29f161(0x17f)),
    resetDelay = $(_0x29f161(0x87))[_0x29f161(0x1cb)](_0x29f161(0x13c)) ? $('[data-reset-delay]')[
        _0x29f161(0x1cb)](_0x29f161(0x13c)) : 0x7d0,
    redirectDelay = $(_0x29f161(0x16e))[_0x29f161(0x1cb)](_0x29f161(0x8c)) ? $(_0x29f161(0x16e))[
        _0x29f161(0x1cb)](_0x29f161(0x8c)) : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')['data'](_0x29f161(0x8a)),
    scrollToTop = $(_0x29f161(0x173))[_0x29f161(0x1cb)](_0x29f161(0xa9)),
    trackLastStep = $(_0x29f161(0xf8))['data'](_0x29f161(0x1eb)),
    conditionalResult = $('[data-conditional-result]')[_0x29f161(0x1cb)](_0x29f161(0x166)) ===
    _0x29f161(0x12f),
    scrollTopOffset = parseInt($(_0x29f161(0x173))[_0x29f161(0x1cb)](_0x29f161(0x1f8)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x29f161(0x139)](localStorage[_0x29f161(0x6b)]('filledInput')),
    formlyLastStep = JSON[_0x29f161(0x139)](localStorage[_0x29f161(0x6b)]('formlyLastStep')),
    formlyLastStepAnswer = JSON[_0x29f161(0x139)](localStorage[_0x29f161(0x6b)](
        'formlyLastStepAnswer'));
let paramUrl = $('[data-form=\x22multistep\x22]')[_0x29f161(0x1cb)](_0x29f161(0x10c));
const progressiveTarget = $(_0x29f161(0x173))[_0x29f161(0x95)](_0x29f161(0x1b0)),
    progressiveInput = $(_0x29f161(0x173))[_0x29f161(0x95)](_0x29f161(0x76));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections =
    formlyLastStepAnswer));
$('[data-clone]')[_0x29f161(0x1c3)](function() {
    const _0x5a710d = _0x29f161;
    ogCloneArr[_0x5a710d(0xb5)]({
        'name': $(this)['data'](_0x5a710d(0xc9)),
        'element': $(this)[
            _0x5a710d(0xc9)](!![]),
        'display': $(_0x5a710d(0xd2) + $(this)[_0x5a710d(0x1cb)](
            _0x5a710d(0xc9)) + '\x22]')['eq'](0x0)[_0x5a710d(0xc9)](!![])
    });
});
const setPageLoadTime = () => {
    const _0x55c6c6 = _0x29f161;
    localStorage['setItem'](_0x55c6c6(0x153), Date[_0x55c6c6(0x136)]()['toString']());
};
setPageLoadTime();
$('div.g-recaptcha')[_0x29f161(0x1bf)] > 0x0 && (notRobot = ![]);

function _0x4852(_0x161ffc, _0xbd0f73) {
    const _0x1d5622 = _0x1d56();
    return _0x4852 = function(
        _0x485297, _0x6b6123) {
        _0x485297 = _0x485297 - 0x65;
        let _0x55466a = _0x1d5622[
            _0x485297];
        return _0x55466a;
    }, _0x4852(_0x161ffc, _0xbd0f73);
}

function recaptcha(_0x3b1c4d) { notRobot = !![]; }($(steps[x])[_0x29f161(0x1cb)](_0x29f161(0xdb)) ||
    $(steps[x])['find'](_0x29f161(0xee))['data']('card')) && (next = !![]);
$(_0x29f161(0xd8))[_0x29f161(0x1bf)] > 0x0 && (countCard = $('[data-count-card]')[_0x29f161(0x1cb)](
    'count-card'));
$(_0x29f161(0x151))['hide'](), $(progressbarClone)['removeClass'](_0x29f161(0x18e)), $(_0x29f161(
    0x182))[_0x29f161(0x1b4)]()[_0x29f161(0x167)](), $(_0x29f161(0x129))[_0x29f161(0x104)](), $(
    '[data-form-ms=\x22submit-btn\x22]')['hide'](), steps[_0x29f161(0x1c3)](function() {
    const
        _0x11d05a = _0x29f161;
    $(_0x11d05a(0x182))['append'](progressbarClone[_0x11d05a(0xc9)](!![], !![]));
}), $(_0x29f161(
    0x19c))[_0x29f161(0x104)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps['length'], $(_0x29f161(0x1c2))[_0x29f161(
    0x1b7)](totalSteps)) : ($(steps[x])[_0x29f161(0x1cb)]('card') ? curStep = curStep + 0x0 :
    curStep = curStep + 0x1, totalSteps = $(_0x29f161(0x19f))[_0x29f161(0x1bf)], $(_0x29f161(
        0x1c2))[_0x29f161(0x1b7)](totalSteps), $(_0x29f161(0x1c1))[_0x29f161(0x1c3)](function() {
        const
            _0x16b404 = _0x29f161;
        $($(_0x16b404(0xe6))[$(this)['index']()])[_0x16b404(0x104)]();
    }));
progressbar = $('[data-form=\x22progress\x22]')[_0x29f161(0x1b4)](), $(
    '[data-form=\x22progress-indicator\x22]')['on'](_0x29f161(0x145), clickableIndicator), $(
    _0x29f161(0xe3))[_0x29f161(0x1b7)](curStep), steps[_0x29f161(0x104)](), $(_0x29f161(0x140))[
    _0x29f161(0x104)](), $('[data-form=\x22next-btn\x22][type=\x22submit\x22]')[_0x29f161(0x1c3)](
    function() {
        const _0x52e77d = _0x29f161;
        $(this)[_0x52e77d(0xb6)]('type', 'button');
    });

function getParams() {
    const _0x23abe6 = _0x29f161;
    urlFormly[_0x23abe6(0x1e4)]['forEach'](function(_0x50f446, _0x5b261d) {
        const _0x256aa6 =
            _0x23abe6;
        searchQ[_0x256aa6(0xb5)]({ 'val': _0x50f446, 'key': _0x5b261d });
    });
}

function getSafe(_0x56f638, _0x213367) {
    try { return _0x56f638(); } catch (
        _0x4b5d41) { return _0x213367; }
}

function phoneAutoFormat(_0x3cf86) {
    var _0x3bd8d5 = '';
    return function(_0x5612e3) {
        const
            _0x454c1c = _0x4852;
        var _0xe6fb19 = '',
            _0x4a64d7 = _0x5612e3['replace'](/\D/g, ''),
            _0x895ca6 = 0x0,
            _0x5d86d1 = 0x0;
        while (_0x895ca6 < _0x4a64d7[_0x454c1c(0x1bf)] && _0x5d86d1 < _0x3cf86[
                _0x454c1c(0x1bf)]) {
            _0x3cf86[_0x5d86d1] === 'x' ? (_0xe6fb19 += _0x4a64d7[_0x895ca6],
                _0x895ca6++) : _0xe6fb19 += _0x3cf86[_0x5d86d1], _0x5d86d1++;
        }
        if (_0x5612e3[_0x454c1c(
                0x1bf)] < _0x3bd8d5[_0x454c1c(0x1bf)]) {
            var _0x194354 = _0x3cf86[_0x454c1c(0x194)](
                _0x5d86d1);
            _0xe6fb19 += _0x194354[_0x454c1c(0x12b)](/x/g, '');
        }
        return _0x3bd8d5 = _0xe6fb19,
            _0xe6fb19;
    };
}

function validateURL(_0x50d560) {
    const _0x468995 = _0x29f161;
    return urlPattern[_0x468995(0x144)](
        _0x50d560) ? !![] : ![];
}
quiz && steps[_0x29f161(0x1c3)](function() {
    const _0x345241 =
        _0x29f161;
    $(this)[_0x345241(0x1b4)]()['attr']('data-radio-skip', !![]), $(this)[_0x345241(0x1b4)]()[
        _0x345241(0xb6)](_0x345241(0xeb), 0xfa);
});

function disableBtn(_0x15e305) {
    const _0x446321 = _0x29f161;
    fill = ![], !customError && ($(_0x446321(0x1da))['css']({
        'opacity': _0x446321(
            0x120),
        'pointer-events': _0x446321(0x7f)
    }), $('[data-form=\x22next-btn\x22]')['addClass'](
        'disabled'), $(_0x446321(0x129))[_0x446321(0x1dd)]({
        'opacity': _0x446321(
            0x120),
        'pointer-events': _0x446321(0x7f)
    }), $('[data-form=\x22submit-btn\x22]')[_0x446321(
        0x142)](_0x446321(0x1ea)), $(_0x446321(0x199))[_0x446321(0x1dd)]({
        'opacity': _0x446321(
            0x120),
        'pointer-events': _0x446321(0x7f)
    }), $('[data-form-ms=\x22submit-btn\x22]')[
        _0x446321(0x142)]('disabled'));
}

function enableBtn() {
    const _0x1feb7c = _0x29f161;
    fill = !![], $(_0x1feb7c(0x1da))[_0x1feb7c(0x1dd)]({
        'pointer-events': _0x1feb7c(
            0x98),
        'opacity': '1'
    }), $(_0x1feb7c(0x1da))[_0x1feb7c(0x181)](_0x1feb7c(0x1ea)), $(
        _0x1feb7c(0x129))[_0x1feb7c(0x1dd)]({ 'pointer-events': 'auto', 'opacity': '1' }), $(
        '[data-form=\x22submit-btn\x22]')[_0x1feb7c(0x181)](_0x1feb7c(0x1ea)), $(_0x1feb7c(0x199))[
        _0x1feb7c(0x1dd)]({ 'pointer-events': _0x1feb7c(0x98), 'opacity': '1' }), $(_0x1feb7c(0x199))[
        _0x1feb7c(0x181)](_0x1feb7c(0x1ea));
}

function saveLastAnswer(_0x5bb1bf) {
    const _0x42a915 = _0x29f161;
    localStorage[_0x42a915(0x110)](_0x42a915(0x71)), localStorage[_0x42a915(0x123)](_0x42a915(0x71),
        JSON[_0x42a915(0x17b)](_0x5bb1bf));
}

function saveFilledInput() {
    const _0x49baaf = _0x29f161;
    $(_0x49baaf(0x77))[_0x49baaf(0xc8)]('[type=\x22submit\x22]')['each'](function() {
        const
            _0x395e0c = _0x49baaf;
        $(this)[_0x395e0c(0xb6)](_0x395e0c(0x1d4)) === 'checkbox' || $(this)['attr'](_0x395e0c(
                0x1d4)) === _0x395e0c(0xec) ? $(this)[_0x395e0c(0xb0)](_0x395e0c(0x15b)) && (
                filledInput[_0x395e0c(0x201)](_0x36f177 => _0x36f177[_0x395e0c(0x165)] === $(this)[
                    _0x395e0c(0xb6)](_0x395e0c(0x122))) ? (filledInput = filledInput['filter'](
                        _0x2f5e5c => _0x2f5e5c['inputName'] !== $(this)[_0x395e0c(0xb6)](_0x395e0c(0x122))),
                    $(this)['val']() !== '' && filledInput[_0x395e0c(0xb5)]({
                        'inputName': $(this)['attr']
                            ('name'),
                        'value': $(this)['val']()
                    })) : $(this)[_0x395e0c(0x137)]() !== '' &&
                filledInput['push']({
                    'inputName': $(this)[_0x395e0c(0xb6)]('name'),
                    'value': $(this)[
                        _0x395e0c(0x137)]()
                })) : filledInput[_0x395e0c(0x201)](_0x5be238 => _0x5be238[
                'inputName'] === $(this)[_0x395e0c(0xb6)](_0x395e0c(0x122))) ? (filledInput =
                filledInput[_0x395e0c(0x11c)](_0x3312ac => _0x3312ac[_0x395e0c(0x165)] !== $(this)[
                    _0x395e0c(0xb6)](_0x395e0c(0x122))), $(this)[_0x395e0c(0x137)]() !== '' &&
                filledInput['push']({
                    'inputName': $(this)[_0x395e0c(0xb6)](_0x395e0c(
                        0x122)),
                    'value': $(this)[_0x395e0c(0x137)]()
                })) : $(this)[_0x395e0c(0x137)]() !==
            '' && filledInput['push']({
                'inputName': $(this)['attr'](_0x395e0c(0x122)),
                'value': $(
                    this)[_0x395e0c(0x137)]()
            });
    }), trackLastStep && (formlyLastStep > x ? lastStep =
        formlyLastStep : lastStep = x, localStorage['removeItem'](_0x49baaf(0x69)), localStorage[
            _0x49baaf(0x123)](_0x49baaf(0x69), lastStep)), localStorage[_0x49baaf(0x110)](_0x49baaf(
        0x1f9)), localStorage[_0x49baaf(0x123)](_0x49baaf(0x1f9), JSON[_0x49baaf(0x17b)](
        filledInput));
}

function scrollTop() {
    const _0x13e7a6 = _0x29f161;
    scrollToTop && $(_0x13e7a6(0x161))[_0x13e7a6(0x174)]({
        'scrollTop': $(_0x13e7a6(0x173))[_0x13e7a6(
            0x16b)]()['top'] - scrollTopOffset
    }, 0x3e8);
}

function updateURL(_0x54f742) {
    const _0x17af2c = _0x29f161;
    var _0x17316c = window[_0x17af2c(0x84)]
        [_0x17af2c(0x146)],
        _0x17abd2 = new URLSearchParams(window[_0x17af2c(0x84)]['search']);
    _0x17abd2[_0x17af2c(0x170)](_0x17af2c(0x132), _0x54f742);
    var _0x3a6a3 = _0x17316c[_0x17af2c(
        0x90)]('?')[0x0] + '?' + _0x17abd2[_0x17af2c(0x1c6)]();
    window[_0x17af2c(0x179)]['pushState']({}, '', _0x3a6a3);
}

function updateStep() {
    const _0x17f141 = _0x29f161;
    scrollTop(), skip = ![], $('[data-form=\x22custom-progress-indicator\x22]')[_0x17f141(0x181)](
        'disabled');
    $(_0x17f141(0x78))[_0x17f141(0x1cb)](_0x17f141(0x171)) && (steps[_0x17f141(0x95)](_0x17f141(
        0x135))['each'](function() {
        const _0x5690b0 = _0x17f141;
        $($(_0x5690b0(0x1bc))[$(this)[_0x5690b0(0x180)](_0x5690b0(0x119))['index']()]), $(this)[
            _0x5690b0(0x137)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x17f141(0x6c))[
        _0x17f141(0x142)](_0x17f141(0x1ea)) : $(_0x17f141(0x6c))[_0x17f141(0x181)](_0x17f141(
        0x1ea)));
    $(_0x17f141(0x1bc))[_0x17f141(0x181)](_0x17f141(0x18e)), $(
        '[data-form=\x22custom-progress-indicator\x22]')[_0x17f141(0x142)](_0x17f141(0x1ea)), $($(
        _0x17f141(0x1bc))[x])[_0x17f141(0x142)](_0x17f141(0x18e)), selection = selections['filter'](
        _0x213749 => _0x213749[_0x17f141(0x132)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0]['skipTo']) ? parseInt(getSafe(() => selection[0x0][
        _0x17f141(0x1d5)
    ])) : x);
    $(_0x17f141(0x102))[_0x17f141(0x104)](), steps['hide']();
    reinitIX === !![] && window[_0x17f141(0x1fd)][_0x17f141(0x127)]();
    $(progressbar)[_0x17f141(0x181)]('current');
    for (i = 0x0; i <= x; i++) {
        countCard ? $(
            progressbar[i])[_0x17f141(0x142)](_0x17f141(0x18e)) : !$(steps[i])[_0x17f141(0x1cb)](
            _0x17f141(0xdb)) && $(progressbar[i])[_0x17f141(0x142)](_0x17f141(0x18e));
    }
    reinitIX === !
        ![] ? (window[_0x17f141(0x1fd)] && window[_0x17f141(0x1fd)][_0x17f141(0x7c)](_0x17f141(0xc2))[
            _0x17f141(0xfa)](), document[_0x17f141(0xbe)](new Event(_0x17f141(0x1ad))), $(steps[x])[
            'show']()) : $(steps[x])[_0x17f141(0x184)](_0x17f141(0x8d));
    $('.active-answer-card')['removeClass'](_0x17f141(0xb7));
    x === 0x0 && !$(steps[x])[_0x17f141(0x1cb)](_0x17f141(0xdb)) && ($(steps[x])[_0x17f141(0x95)](
        _0x17f141(0x102))[_0x17f141(0x1ef)](), $(steps[x])[_0x17f141(0x95)](_0x17f141(0x102))[
        'addClass']('active-answer-card'));
    selection['length'] > 0x0 ? ($(steps[x])[_0x17f141(0x95)]('[data-answer=\x22' + selection[0x0][
        'selected'
    ] + '\x22]')[_0x17f141(0x1ef)](), $(steps[x])[_0x17f141(0x95)](_0x17f141(0x193) + selection[
        0x0][_0x17f141(0x1e6)] + '\x22]')['addClass'](_0x17f141(0xb7))) : ($(steps[x])[_0x17f141(
        0x95)]('[data-answer=\x22' + answer + '\x22]')[_0x17f141(0x1ef)](), $(steps[x])[_0x17f141(
        0x95)](_0x17f141(0x193) + answer + '\x22]')[_0x17f141(0x142)](_0x17f141(0xb7)));
    if (x === 0x0)
        $('[data-form=\x22back-btn\x22]')[_0x17f141(0x104)](), $('[data-form=\x22next-btn\x22]')[
            _0x17f141(0x1ef)](), $(_0x17f141(0x129))['hide']();
    else {
        if (x === steps['length'] - 0x1 || $(steps[x])['find'](_0x17f141(0x18a))[_0x17f141(
                0x1bf)] > 0x0) {
            $(_0x17f141(0x1da))['hide']();
            if ($(steps[x])['find'](
                    '[data-form=\x22next-btn\x22][data-submit-show]')['data']('submit-show')) $(steps[x])[
                _0x17f141(0x95)](_0x17f141(0x1be))[_0x17f141(0x1ef)]();
            else $(_0x17f141(0x1da))[_0x17f141(0x1cb)](_0x17f141(0x141)) && $(
                '[data-form=\x22next-btn\x22]')['show']();
            $(_0x17f141(0x129))[_0x17f141(0x1ef)](), $(_0x17f141(0x199))[_0x17f141(0x1ef)](), $(_0x17f141(
                0x93))[_0x17f141(0x1ef)]();
        } else $('[data-form=\x22next-btn\x22]')[_0x17f141(0x1ef)](), $(
                '[data-form=\x22back-btn\x22]')[_0x17f141(0x1ef)](), $(_0x17f141(0x129))[_0x17f141(0x104)]
            (), $(_0x17f141(0x199))[_0x17f141(0x104)]();
    }
    $($(steps[x])[_0x17f141(0x95)](_0x17f141(0xaa))[
            0x0])['focus'](), $($(steps[x])[_0x17f141(0x95)](_0x17f141(0x6e))[0x0])['focus'](),
        validation();
    for (idx = 0x0; idx <= x; idx++) {
        $($(_0x17f141(0x1bc))[idx])['removeClass'](
            _0x17f141(0x1ea));
    }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x2b843f, _0x1a7ebd, _0x4a77b4) {
    const _0x5668e9 = _0x29f161;
    let
        _0x562522 = _0x2b843f['includes']('@') ? _0x2b843f['split']('@')[0x1][_0x5668e9(0x90)]('.')[
            0x0] : [];
    dom = [];
    _0x1a7ebd !== undefined && _0x1a7ebd[_0x5668e9(0x90)](',')[_0x5668e9(0x1e8)](function(
        _0x6d975c) {
        const _0x1497f5 = _0x5668e9;
        _0x6d975c[_0x1497f5(0xbf)](_0x562522) && dom[_0x1497f5(0xb5)](_0x562522);
    });
    dom[_0x5668e9(0x1bf)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0xd7b6c2 =
        /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0xd7b6c2[_0x5668e9(0x144)](_0x2b843f) || !
        domainAllowed ? (emailFilled = ![], unfilledArr['push']({ 'input': _0x4a77b4 })) :
        emailFilled = !![];
}

function phoneValidation(_0x29b0ca, _0x5a9ae9, _0x30a834) {
    if (phoneFormat) return _0x5a9ae9 >=
        _0x30a834 ? !![] : ![];
    else { if (_0x5a9ae9 >= _0x30a834) return !![]; }
}

function validation() {
    const _0x2ad9ea = _0x29f161;
    $(steps[x])[_0x2ad9ea(0x1cb)](_0x2ad9ea(0xdb)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![],
        fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !
        ![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0,
        empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [],
        empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(
            steps[x])['find']('textarea[required]:visible')[_0x2ad9ea(0x1bf)], textInputLength = $(steps[
            x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xd6))[_0x2ad9ea(0x1bf)], selectInputLength = $(steps[x])[
            _0x2ad9ea(0x95)](_0x2ad9ea(0x138))['length'], emailInputLength = $(steps[x])['find'](
            _0x2ad9ea(0x1b2))[_0x2ad9ea(0x1bf)], checkboxInputLength = $(steps[x])['find'](_0x2ad9ea(
            0x131))[_0x2ad9ea(0x1bf)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() :
        enableBtn();
    checkCount = $(steps[x])[_0x2ad9ea(0x1cb)]('checkbox') ? $(steps[x])[_0x2ad9ea(0x1cb)](_0x2ad9ea(
        0x9b)) : $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0x14f))[_0x2ad9ea(0x1bf)] > 0x0 ? $(steps[x])[
        _0x2ad9ea(0x95)](_0x2ad9ea(0x14f))['data']('checkbox') : 0x0, maxCheckCount = $(steps[x])[
        _0x2ad9ea(0x1cb)](_0x2ad9ea(0x149)) ? $(steps[x])[_0x2ad9ea(0x1cb)](_0x2ad9ea(0x149)) : $(
        steps[x])[_0x2ad9ea(0x95)]('[data-max-checkbox]')[_0x2ad9ea(0x1bf)] > 0x0 ? $(steps[x])[
        _0x2ad9ea(0x95)](_0x2ad9ea(0xcf))[_0x2ad9ea(0x1cb)](_0x2ad9ea(0x149)) : 0x0;
    if (!
        logicExtra) {
        let _0x2a5ec0 = $(steps[x])['find'](_0x2ad9ea(0xf0)),
            _0x14f55b = _0x2a5ec0[_0x2ad9ea(0x11c)](_0x2ad9ea(0x11d)),
            _0x2c0776 = _0x2a5ec0['filter'](_0x2ad9ea(0x1d6));
        _0x2a5ec0[_0x2ad9ea(0x1bf)] > 0x0 && (checkCount === '*' || checkCount > _0x2a5ec0[_0x2ad9ea(
                0x1bf)] ? _0x2a5ec0[_0x2ad9ea(0x1c3)](function() {
                const _0x49d84e = _0x2ad9ea;
                $(this)['is'](_0x49d84e(0x1d6)) ? (checkboxFilled = !![], resetInputErrorMessage($(
                    this)[_0x49d84e(0xb6)](_0x49d84e(0x122)))) : (checkboxFilled = ![], unfilledArr[
                    _0x49d84e(0xb5)]({ 'input': $(this)[_0x49d84e(0xb6)]('name') }));
            }) : _0x2c0776[
                _0x2ad9ea(0x1bf)] >= checkCount ? _0x14f55b['length'] > 0x0 ? _0x14f55b[_0x2ad9ea(
                0x1bf)] === _0x2c0776[_0x2ad9ea(0x1bf)] ? (checkboxFilled = !![], resetInputErrorMessage(
                _0x14f55b['first']()[_0x2ad9ea(0xb6)]('name'))) : (checkboxFilled = ![], _0x14f55b[
                _0x2ad9ea(0xc8)](':checked')[_0x2ad9ea(0x1c3)](function() {
                const _0x2f33f7 =
                    _0x2ad9ea;
                unfilledArr['push']({ 'input': $(this)[_0x2f33f7(0xb6)]('name') });
            })) : _0x2c0776[
                'length'] < maxCheckCount ? ($(steps[x])['find']('input[type=\x22checkbox\x22]')['prop'](
                _0x2ad9ea(0x1ea), ![]), $(steps[x])['find'](_0x2ad9ea(0x18c))['parent'](_0x2ad9ea(
                0x160))['removeClass'](_0x2ad9ea(0x1ea))) : ($(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(
                0x74))[_0x2ad9ea(0x16a)](_0x2ad9ea(0x160))[_0x2ad9ea(0x142)](_0x2ad9ea(0x1ea)), $(steps[
                x])[_0x2ad9ea(0x95)](_0x2ad9ea(0x74))['prop'](_0x2ad9ea(0x1ea), !![])) : (
                checkboxFilled = ![], _0x14f55b[_0x2ad9ea(0xc8)](_0x2ad9ea(0x1d6))[_0x2ad9ea(0x1c3)](
                    function() {
                        const _0x4939c9 = _0x2ad9ea;
                        unfilledArr[_0x4939c9(0xb5)]({
                            'input': $(this)[_0x4939c9(0xb6)](_0x4939c9(
                                0x122))
                        });
                    }), unfilledArr[_0x2ad9ea(0xb5)]({
                    'input': _0x2a5ec0[_0x2ad9ea(0x1df)]
                        ()[_0x2ad9ea(0xb6)]('name')
                }))), $(steps[x])[_0x2ad9ea(0x95)]('input:radio[required]')[
                'each'](function(_0x3f49b4) {
                const _0x275483 = _0x2ad9ea;
                var _0x56cb5e = $(this)[
                    _0x275483(0xb6)](_0x275483(0x122));
                $(_0x275483(0xb4) + _0x56cb5e + _0x275483(0x1f7))[_0x275483(0x1bf)] == 0x0 ? (!
                    empReqRadio[_0x275483(0x95)](_0x208307 => _0x208307['input'] === _0x3f49b4) &&
                    empReqRadio[_0x275483(0xb5)]({ 'input': _0x3f49b4 }), unfilledArr[_0x275483(0xb5)]
                    ({ 'input': $(this)['attr'](_0x275483(0x122)) })) : empReqRadio = empReqRadio[
                    _0x275483(
                        0x11c)](_0x54699c => _0x54699c[_0x275483(0x16d)] !== _0x3f49b4), empReqRadio[
                    _0x275483(0x1bf)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
            }), $(steps[x])[
                _0x2ad9ea(0x95)](':input[type=\x22text\x22][required]')[_0x2ad9ea(0x1c3)](function(
                _0x5d76be) {
                const _0x2b65fc = _0x2ad9ea;
                let _0x5a2657 = $(this)[_0x2b65fc(0x137)]()[
                        _0x2b65fc(0x1bf)],
                    _0x2a50e8 = $(this)[_0x2b65fc(0x1cb)](_0x2b65fc(0x152)) ? $(this)[_0x2b65fc(0x1cb)](
                        'min-character') : 0x0;
                $(this)[_0x2b65fc(0x137)]() !== '' && _0x5a2657 >= _0x2a50e8 ? empReqInput = empReqInput[
                    _0x2b65fc(0x11c)](_0x53e7d6 => _0x53e7d6['input'] !== _0x5d76be) : (!empReqInput[
                        _0x2b65fc(0x95)](_0x23f98f => _0x23f98f[_0x2b65fc(0x16d)] === _0x5d76be) &&
                    empReqInput[_0x2b65fc(0xb5)]({ 'input': _0x5d76be }), unfilledArr[_0x2b65fc(0xb5)]
                    ({ 'input': $(this)[_0x2b65fc(0xb6)](_0x2b65fc(0x122)) })), empReqInput[_0x2b65fc(
                    0x1bf)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)]
            (_0x2ad9ea(0xc1))[_0x2ad9ea(0x1c3)](function(_0x26874e) {
                const _0x157af0 = _0x2ad9ea;
                let
                    _0x55c114 = $(this)[_0x157af0(0x137)]()[_0x157af0(0x1bf)],
                    _0x2b01a0 = $(this)[_0x157af0(0x1cb)](_0x157af0(0x152)) ? $(this)[_0x157af0(0x1cb)](
                        'min-character') : 0x0;
                $(this)[_0x157af0(0x137)]() !== '' && _0x55c114 >= _0x2b01a0 ? empReqPassword =
                    empReqPassword[_0x157af0(0x11c)](_0x458e5a => _0x458e5a[_0x157af0(0x16d)] !==
                        _0x26874e) : (!empReqPassword[_0x157af0(0x95)](_0x29e8f6 => _0x29e8f6[_0x157af0(
                            0x16d)] === _0x26874e) && empReqPassword[_0x157af0(0xb5)]({ 'input': _0x26874e }),
                        unfilledArr['push']({ 'input': $(this)['attr'](_0x157af0(0x122)) })), empReqPassword[
                        _0x157af0(0x1bf)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
            }), $(steps[
                x])[_0x2ad9ea(0x95)](_0x2ad9ea(0x1b8))[_0x2ad9ea(0x1c3)](function(_0x1b7c79) {
                const
                    _0x5b8391 = _0x2ad9ea;
                let _0x42afb0 = $(this)[_0x5b8391(0x137)]()[_0x5b8391(0x1bf)],
                    _0x5ec89e = $(this)[_0x5b8391(0x1cb)](_0x5b8391(0x152)) ? $(this)[_0x5b8391(0x1cb)](
                        _0x5b8391(0x152)) : 0x0;
                $(this)[_0x5b8391(0x137)]() !== '' && _0x42afb0 >= _0x5ec89e ? empReqUrl = empReqUrl[
                        'filter'](_0x58e0aa => _0x58e0aa['input'] !== _0x1b7c79) : (!empReqTime[_0x5b8391(
                        0x95)](_0x1ed381 => _0x1ed381[_0x5b8391(0x16d)] === _0x1b7c79) && empReqUrl[
                        _0x5b8391(0xb5)]({ 'input': _0x1b7c79 }), unfilledArr[_0x5b8391(0xb5)]({
                        'input': $(
                            this)[_0x5b8391(0xb6)](_0x5b8391(0x122))
                    })), empReqUrl[_0x5b8391(0x1bf)] === 0x0 &&
                    validateURL($(this)[_0x5b8391(0x137)]()) ? urlFilled = !![] : urlFilled = ![];
            }), $(
                steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0x1d1))[_0x2ad9ea(0x1c3)](function(_0x4955e8) {
                const
                    _0x59ee3e = _0x2ad9ea;
                let _0x5a6fe3 = $(this)[_0x59ee3e(0x137)]()[_0x59ee3e(0x1bf)],
                    _0x2e57a8 = $(this)[_0x59ee3e(0x1cb)](_0x59ee3e(0x152)) ? $(this)[_0x59ee3e(0x1cb)](
                        _0x59ee3e(0x152)) : 0x0;
                $(this)[_0x59ee3e(0x137)]() !== '' && _0x5a6fe3 >= _0x2e57a8 ? empReqTime = empReqTime[
                    _0x59ee3e(0x11c)](_0x522b4d => _0x522b4d[_0x59ee3e(0x16d)] !== _0x4955e8) : (!
                    empReqTime[_0x59ee3e(0x95)](_0x5bf9f8 => _0x5bf9f8[_0x59ee3e(0x16d)] === _0x4955e8) &&
                    empReqTime[_0x59ee3e(0xb5)]({ 'input': _0x4955e8 }), unfilledArr[_0x59ee3e(0xb5)]
                    ({ 'input': $(this)[_0x59ee3e(0xb6)](_0x59ee3e(0x122)) })), empReqTime[_0x59ee3e(
                    0x1bf)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](
                _0x2ad9ea(0x118))['each'](function(_0x3134eb) {
                const _0x39366f = _0x2ad9ea;
                $(this)[_0x39366f(0x137)]() !== '' ? empReqDate = empReqDate[_0x39366f(0x11c)](
                        _0x16e038 => _0x16e038[_0x39366f(0x16d)] !== _0x3134eb) : (!empReqDate['find'](
                            _0x443e55 => _0x443e55['input'] === _0x3134eb) && empReqDate[_0x39366f(0xb5)]
                        ({ 'input': _0x3134eb }), unfilledArr[_0x39366f(0xb5)]({
                            'input': $(this)[_0x39366f(
                                0xb6)](_0x39366f(0x122))
                        })), empReqDate[_0x39366f(0x1bf)] === 0x0 ? dateFilled = !
                    ![] : dateFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0x114))['each'](
                function(_0x31def3) {
                    const _0x564f92 = _0x2ad9ea;
                    if ($(this)[_0x564f92(0x137)]() !==
                        '') {
                        let _0x894ada = $(this)[_0x564f92(0x137)]()['length'],
                            _0x551d59 = $(this)[_0x564f92(0x1cb)]('min-character') ? $(this)[_0x564f92(0x1cb)](
                                _0x564f92(0x152)) : 0x0;
                        if ($(this)[_0x564f92(0x1cb)](_0x564f92(0x1fa))) {
                            var
                                _0x88816b = phoneAutoFormat($(this)['data'](_0x564f92(0x1fa)));
                            $(this)[_0x564f92(0x137)](_0x88816b($(this)[_0x564f92(0x137)]()));
                        }
                        phoneValidation(
                                $(this)['val'](), _0x894ada, _0x551d59) ? empReqTel = empReqTel[_0x564f92(0x11c)](
                                _0x2b2732 => _0x2b2732[_0x564f92(0x16d)] !== _0x31def3) : empReqTel[_0x564f92(0xb5)]
                            ({ 'input': _0x31def3 });
                    } else !empReqTel['find'](_0x15e1cf => _0x15e1cf[_0x564f92(
                            0x16d)] === _0x31def3) && empReqTel[_0x564f92(0xb5)]({ 'input': _0x31def3 }),
                        unfilledArr['push']({ 'input': $(this)[_0x564f92(0xb6)](_0x564f92(0x122)) });
                    empReqTel['length'] === 0x0 ? telFilled = !![] : telFilled = ![];
                }), $(steps[x])[
                _0x2ad9ea(0x95)](':input[type=\x22file\x22][required]')[_0x2ad9ea(0x1c3)](function(
                _0x4e3c87) {
                const _0x2c5879 = _0x2ad9ea;
                $(this)[_0x2c5879(0x137)]() !== '' ? empReqFile = empReqFile[_0x2c5879(0x11c)](
                        _0x22aa70 => _0x22aa70[_0x2c5879(0x16d)] !== _0x4e3c87) : (!empReqFile[_0x2c5879(
                        0x95)](_0x52380f => _0x52380f[_0x2c5879(0x16d)] === _0x4e3c87) && empReqFile[
                        _0x2c5879(0xb5)]({ 'input': _0x4e3c87 }), unfilledArr['push']({
                        'input': $(this)[
                            _0x2c5879(0xb6)](_0x2c5879(0x122))
                    })), empReqFile[_0x2c5879(0x1bf)] === 0x0 ?
                    fileFilled = !![] : fileFilled = ![];
            }), $(steps[x])['find'](_0x2ad9ea(0x1ee))[_0x2ad9ea(
                0x1c3)](function(_0x486396) {
                const _0x579c97 = _0x2ad9ea;
                let _0x53fd24 = $(this)[
                        _0x579c97(0x137)]()[_0x579c97(0x1bf)],
                    _0x6e637c = $(this)['data'](_0x579c97(0x152)) ? $(this)['data'](_0x579c97(0x152)) : 0x0;
                $(this)['val']() !== '' && _0x53fd24 >= _0x6e637c ? empReqNum = empReqNum['filter'](
                        _0x565ee7 => _0x565ee7[_0x579c97(0x16d)] !== _0x486396) : (!empReqNum[_0x579c97(0x95)]
                        (_0x1f6ea7 => _0x1f6ea7[_0x579c97(0x16d)] === _0x486396) && empReqNum[_0x579c97(0xb5)]
                        ({ 'input': _0x486396 }), unfilledArr['push']({
                            'input': $(this)[_0x579c97(0xb6)](
                                'name')
                        })), empReqNum[_0x579c97(0x1bf)] === 0x0 ? numFilled = !![] :
                    numFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xb9))['each'](function(
                _0x2cb318) {
                const _0x7d89d6 = _0x2ad9ea;
                let _0x59af46 = $(this)[_0x7d89d6(0x137)]();
                _0x59af46 === '' && (_0x59af46 = null), _0x59af46 != null ? empReqSelect = empReqSelect[
                        _0x7d89d6(0x11c)](_0x389eda => _0x389eda['input'] !== _0x2cb318) : (!empReqSelect[
                            _0x7d89d6(0x95)](_0x4db03f => _0x4db03f[_0x7d89d6(0x16d)] === _0x2cb318) &&
                        empReqSelect['push']({ 'input': _0x2cb318 }), unfilledArr[_0x7d89d6(0xb5)]
                        ({ 'input': $(this)['attr'](_0x7d89d6(0x122)) })), empReqSelect[_0x7d89d6(0x1bf)] ===
                    0x0 ? selectFilled = !![] : selectFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](
                'textarea[required]')[_0x2ad9ea(0x1c3)](function(_0x2b464d) {
                const _0x313ea3 =
                    _0x2ad9ea;
                let _0x8d2cd = $(this)[_0x313ea3(0x137)]()[_0x313ea3(0x1bf)],
                    _0x372eca = $(this)['data'](_0x313ea3(0x152)) ? $(this)['data'](_0x313ea3(0x152)) : 0x0;
                $(this)[_0x313ea3(0x137)]() !== '' && _0x8d2cd >= _0x372eca ? empReqTextarea =
                    empReqTextarea[_0x313ea3(0x11c)](_0x87053e => _0x87053e[_0x313ea3(0x16d)] !==
                        _0x2b464d) : (!empReqTextarea['find'](_0x503039 => _0x503039['input'] ===
                            _0x2b464d) &&
                        empReqTextarea[_0x313ea3(0xb5)]({ 'input': _0x2b464d }), unfilledArr[_0x313ea3(0xb5)]
                        ({ 'input': $(this)['attr'](_0x313ea3(0x122)) })), empReqTextarea[_0x313ea3(
                        0x1bf)] ===
                    0x0 ? textareaFilled = !![] : textareaFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](
                ':input[type=\x22email\x22][required]')[_0x2ad9ea(0x1c3)](function() {
                const _0x3fb063 =
                    _0x2ad9ea;
                $(this)['val']() !== '' ? validateEmail($(this)['val'](), $(this)[_0x3fb063(0x1cb)](
                    _0x3fb063(0x11b)), $(this)[_0x3fb063(0xb6)](_0x3fb063(0x122))) : (emailFilled = ![],
                    unfilledArr[_0x3fb063(0xb5)]({ 'input': $(this)[_0x3fb063(0xb6)](_0x3fb063(0x122)) })
                );
            });
    } else {
        if ($(steps[x])[_0x2ad9ea(0x1cb)](_0x2ad9ea(0xdb))) answer = $(steps[x])[
                _0x2ad9ea(0x95)](_0x2ad9ea(0x7d))[_0x2ad9ea(0x1cb)](_0x2ad9ea(0x14a)), selections =
            selections[_0x2ad9ea(0x11c)](_0x27cce9 => _0x27cce9['step'] !== x), selections[_0x2ad9ea(
                0xb5)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])['find'](_0x2ad9ea(0xee))[_0x2ad9ea(0x1cb)](_0x2ad9ea(0xdb)) && (answer = $(
                steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x1cb)](_0x2ad9ea(0x14a)),
            selections = selections[_0x2ad9ea(0x11c)](_0x35c798 => _0x35c798[_0x2ad9ea(0x132)] !== x),
            selections['push']({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[
                x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0x126))['is'](
                '[type=\x22checkbox\x22]')) {
            if (checkCount === '*' || checkCount > $(steps[x])['find'](
                    _0x2ad9ea(0xf0))[_0x2ad9ea(0x1bf)]) $(steps[x])['find'](_0x2ad9ea(0xf0))[_0x2ad9ea(0x1c3)]
                (function() {
                    const _0x43544e = _0x2ad9ea;
                    if ($(this)['is'](_0x43544e(0x1d6))) {
                        if ($(
                                steps[x])[_0x43544e(0x95)](':input[required]')[_0x43544e(0x1bf)] < 0x1) {
                            let
                                _0x3635a6 = undefined;
                            $(this)[_0x43544e(0x180)]('[data-skip-to]')['data'](_0x43544e(0x1b9)) && (
                                _0x3635a6 = $(this)['parents'](_0x43544e(0x82))['data'](_0x43544e(0x1b9)));
                            if ($(
                                    this)[_0x43544e(0x180)](_0x43544e(0x7d))[_0x43544e(0xb6)](_0x43544e(
                                    0xd9))) {
                                let _0x241a07 = $(this)['parents'](_0x43544e(0x7d))[_0x43544e(0xb6)](
                                    _0x43544e(0xd9));
                                selections = selections[_0x43544e(0x11c)](_0xed1037 => _0xed1037['step'] !== x),
                                    selections[_0x43544e(0xb5)]({ 'step': x, 'selected': _0x241a07 });
                                if (
                                    _0x3635a6) {
                                    selections = selections['filter'](_0x12c4e3 => _0x12c4e3[_0x43544e(
                                        0x132)] !== _0x3635a6 - 0x2), selections['push']({
                                        'step': _0x3635a6 -
                                            0x2,
                                        'selected': _0x241a07
                                    });
                                    let _0x225fee = selections[_0x43544e(0xc7)](
                                        _0x17d524 => _0x17d524['step'] === x);
                                    selections[_0x225fee][_0x43544e(0x1d5)] = parseInt(_0x3635a6) - 0x1, selections[
                                        _0x225fee][_0x43544e(0x187)] = x;
                                }
                            }
                            checkboxFilled = !![], $(steps[x])[
                                    'find'](_0x43544e(0x75))[_0x43544e(0x1bf)] >= $(steps[x])['find'](
                                    ':input[type=\x22checkbox\x22][required]')[_0x43544e(0x1bf)] &&
                                resetInputErrorMessage($(steps[x])['find'](_0x43544e(0xf0))['attr'](
                                    'name'));
                        }
                    } else checkboxFilled = ![], unfilledArr['push']({
                        'input': $(this)[
                            _0x43544e(0xb6)]('name')
                    });
                });
            else {
                if ($(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0x13f))[
                        _0x2ad9ea(0x1bf)] >= checkCount) {
                    if ($(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[
                            _0x2ad9ea(0x95)](_0x2ad9ea(0xf0))[_0x2ad9ea(0x180)](_0x2ad9ea(0x7d))[_0x2ad9ea(0xb6)](
                            _0x2ad9ea(0xd9))) {
                        let _0x202307 = undefined;
                        $(steps[x])[_0x2ad9ea(0x95)]('.active-answer-card')[_0x2ad9ea(0x95)](_0x2ad9ea(0xf0))[
                            _0x2ad9ea(0x180)](_0x2ad9ea(0x82))[_0x2ad9ea(0xb6)](_0x2ad9ea(0x111)) && (
                            _0x202307 = $(steps[x])[_0x2ad9ea(0x95)]('.active-answer-card')[_0x2ad9ea(0x95)](
                                _0x2ad9ea(0x13f))[_0x2ad9ea(0x180)]('[data-skip-to]')[_0x2ad9ea(0xb6)](
                                'data-skip-to'));
                        let _0xdaff47 = $(steps[x])['find'](_0x2ad9ea(0xee))['find'](
                            ':input[type=\x22checkbox\x22]')[_0x2ad9ea(0x180)](_0x2ad9ea(0x7d))['attr'](
                            _0x2ad9ea(0xd9));
                        selections = selections[_0x2ad9ea(0x11c)](_0x44ca2b => _0x44ca2b[_0x2ad9ea(0x132)] !==
                            x), selections['push']({ 'step': x, 'selected': _0xdaff47 });
                        if (
                            _0x202307) {
                            selections = selections[_0x2ad9ea(0x11c)](_0x46f1c9 => _0x46f1c9[
                                'step'] !== _0x202307 - 0x2), selections[_0x2ad9ea(0xb5)]({
                                'step': _0x202307 -
                                    0x2,
                                'selected': _0xdaff47
                            });
                            let _0x1b41b3 = selections[_0x2ad9ea(0xc7)](
                                _0x1b925d => _0x1b925d[_0x2ad9ea(0x132)] === x);
                            selections[_0x1b41b3][_0x2ad9ea(0x1d5)] = parseInt(_0x202307) - 0x1, selections[
                                _0x1b41b3][_0x2ad9ea(0x187)] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])[_0x2ad9ea(
                            0x95)](_0x2ad9ea(0x75))[_0x2ad9ea(0x1bf)] >= $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(
                            0x19b))[_0x2ad9ea(0x1bf)] && resetInputErrorMessage($(steps[x])[_0x2ad9ea(0x95)](
                            ':input[type=\x22checkbox\x22]')[_0x2ad9ea(0xb6)](_0x2ad9ea(0x122))), $(steps[x])[
                            'find'](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0x13f))[_0x2ad9ea(0x1bf)] <
                        maxCheckCount ? ($(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](
                            _0x2ad9ea(0x18c))['prop'](_0x2ad9ea(0x1ea), ![]), $(steps[x])['find'](
                            '.active-answer-card')[_0x2ad9ea(0x95)](_0x2ad9ea(0x18c))['parent']('label')[
                            _0x2ad9ea(0x181)](_0x2ad9ea(0x1ea))) : ($(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[
                            _0x2ad9ea(0x95)](_0x2ad9ea(0x74))[_0x2ad9ea(0x16a)](_0x2ad9ea(0x160))['addClass'](
                            'disabled'), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](
                            _0x2ad9ea(0x74))[_0x2ad9ea(0xb0)](_0x2ad9ea(0x1ea), !![]));
                } else
                    checkboxFilled = ![], $(steps[x])['find'](':input[type=\x22checkbox\x22][required]')[
                        _0x2ad9ea(0x1c3)](function() {
                        const _0x213c23 = _0x2ad9ea;
                        $(this)[_0x213c23(0xc8)](_0x213c23(0x1d6)) && unfilledArr['push']({
                            'input': $(this)[
                                _0x213c23(0xb6)]('name')
                        });
                    });
            }
        }
        $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[
                _0x2ad9ea(0x95)](_0x2ad9ea(0x143))[_0x2ad9ea(0x1c3)](function(_0x550cdb) {
                const
                    _0x5086e8 = _0x2ad9ea;
                var _0x436984 = $(this)[_0x5086e8(0xb6)](_0x5086e8(0x122));
                $(_0x5086e8(0xb4) + _0x436984 + _0x5086e8(0x1f7))['length'] == 0x0 ? (!empReqRadio[
                        _0x5086e8(0x95)](_0x258b04 => _0x258b04['input'] === _0x550cdb) && empReqRadio[
                        _0x5086e8(0xb5)]({ 'input': _0x550cdb }), unfilledArr[_0x5086e8(0xb5)]({
                        'input': $(
                            this)[_0x5086e8(0xb6)]('name')
                    })) : empReqRadio = empReqRadio[_0x5086e8(0x11c)](
                        _0x1eb94b => _0x1eb94b[_0x5086e8(0x16d)] !== _0x550cdb), empReqRadio['length'] ===
                    0x0 ? radioFilled = !![] : radioFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](
                '.active-answer-card')[_0x2ad9ea(0x95)](_0x2ad9ea(0x177))[_0x2ad9ea(0x1c3)](function(
                _0x4771d9) {
                const _0x2128e8 = _0x2ad9ea;
                let _0x142540 = $(this)[_0x2128e8(0x137)]()[
                        _0x2128e8(0x1bf)],
                    _0x238471 = $(this)[_0x2128e8(0x1cb)](_0x2128e8(0x152)) ? $(this)['data'](_0x2128e8(
                        0x152)) : 0x0;
                $(this)[_0x2128e8(0x137)]() !== '' && _0x142540 >= _0x238471 ? empReqInput = empReqInput[
                        'filter'](_0x1bad2f => _0x1bad2f[_0x2128e8(0x16d)] !== _0x4771d9) : (!empReqInput[
                            _0x2128e8(0x95)](_0x52e863 => _0x52e863[_0x2128e8(0x16d)] === _0x4771d9) &&
                        empReqInput[_0x2128e8(0xb5)]({ 'input': _0x4771d9 }), unfilledArr[_0x2128e8(0xb5)]
                        ({ 'input': $(this)['attr'](_0x2128e8(0x122)) })), empReqInput['length'] === 0x0 ?
                    inputFilled = !![] : inputFilled = ![];
            }), $(steps[x])['find'](_0x2ad9ea(0xee))['find'](
                _0x2ad9ea(0x88))[_0x2ad9ea(0x1c3)](function(_0x3c92bc) {
                const _0x429583 = _0x2ad9ea;
                skipTo = undefined, $(this)['parents'](_0x429583(0x82))['data'](_0x429583(0x1b9)) !==
                    '' && (skipTo = $(this)[_0x429583(0x180)](_0x429583(0x82))['data'](_0x429583(0x1b9))),
                    $(this)[_0x429583(0x180)]('[data-go-to]')[_0x429583(0xb6)](_0x429583(0xd9)) && (answer =
                        $(this)[_0x429583(0x180)](_0x429583(0x7d))['attr']('data-go-to'), selections =
                        selections[_0x429583(0x11c)](_0x33df5f => _0x33df5f[_0x429583(0x132)] !== x),
                        selections[_0x429583(0xb5)]({ 'step': x, 'selected': answer }), skipTo && (
                            selections = selections[_0x429583(0x11c)](_0xc142e6 => _0xc142e6['step'] !==
                                skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections[_0x429583(0xc7)](_0x4799cf => _0x4799cf[_0x429583(0x132)] ===
                                x), selections[objIndex][_0x429583(0x1d5)] = parseInt(skipTo) - 0x1, selections[
                                objIndex]['backTo'] = x));
            }), $(steps[x])[_0x2ad9ea(0x95)]('.active-answer-card')[
                _0x2ad9ea(0x95)](_0x2ad9ea(0xc1))[_0x2ad9ea(0x1c3)](function(_0x117f19) {
                const _0x51b647 =
                    _0x2ad9ea;
                let _0x4dcf50 = $(this)[_0x51b647(0x137)]()[_0x51b647(0x1bf)],
                    _0x48433d = $(this)[_0x51b647(0x1cb)](_0x51b647(0x152)) ? $(this)[_0x51b647(0x1cb)](
                        _0x51b647(0x152)) : 0x0;
                $(this)['val']() !== '' && _0x4dcf50 >= _0x48433d ? empReqPassword = empReqPassword[
                        _0x51b647(0x11c)](_0x969e3e => _0x969e3e['input'] !== _0x117f19) : (!empReqPassword[
                        'find'](_0xd94191 => _0xd94191[_0x51b647(0x16d)] === _0x117f19) && empReqPassword[
                        _0x51b647(0xb5)]({ 'input': _0x117f19 }), unfilledArr[_0x51b647(0xb5)]({
                        'input': $(
                            this)[_0x51b647(0xb6)](_0x51b647(0x122))
                    })), empReqPassword[_0x51b647(0x1bf)] ===
                    0x0 ? passwordFilled = !![] : passwordFilled = ![];
            }), $(steps[x])['find'](
                '.active-answer-card')[_0x2ad9ea(0x95)](':input[type=\x22password\x22]')[_0x2ad9ea(0x1c3)](
                function(_0x1d96af) {
                    const _0x495a0f = _0x2ad9ea;
                    skipTo = undefined, $(this)[_0x495a0f(0x180)](_0x495a0f(0x82))[_0x495a0f(0x1cb)](
                        _0x495a0f(0x1b9)) !== '' && (skipTo = $(this)[_0x495a0f(0x180)](_0x495a0f(0x82))[
                        _0x495a0f(0x1cb)](_0x495a0f(0x1b9))), $(this)[_0x495a0f(0x180)](_0x495a0f(0x7d))[
                        _0x495a0f(0xb6)](_0x495a0f(0xd9)) && (answer = $(this)[_0x495a0f(0x180)](_0x495a0f(
                            0x7d))[_0x495a0f(0xb6)](_0x495a0f(0xd9)), selections = selections[_0x495a0f(0x11c)](
                            _0x587904 => _0x587904['step'] !== x), selections[_0x495a0f(0xb5)]
                        ({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x495a0f(
                            0x11c)](
                            _0x33f208 => _0x33f208[_0x495a0f(0x132)] !== skipTo - 0x2), selections[_0x495a0f(
                            0xb5)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                            _0x495a0f(0xc7)](_0x15f4c7 => _0x15f4c7[_0x495a0f(0x132)] === x), selections[
                            objIndex][_0x495a0f(0x1d5)] = parseInt(skipTo) - 0x1, selections[objIndex][
                            _0x495a0f(0x187)
                        ] = x));
                }), $(steps[x])[_0x2ad9ea(0x95)]('.active-answer-card')['find'](_0x2ad9ea(
                0x1b8))[_0x2ad9ea(0x1c3)](function(_0x3ab5b3) {
                const _0x542c83 = _0x2ad9ea;
                let _0xdfbf37 =
                    $(this)[_0x542c83(0x137)]()['length'],
                    _0x2942f4 = $(this)[_0x542c83(0x1cb)]('min-character') ? $(this)[_0x542c83(0x1cb)](
                        _0x542c83(0x152)) : 0x0;
                $(this)[_0x542c83(0x137)]() !== '' && _0xdfbf37 >= _0x2942f4 ? empReqUrl = empReqUrl[
                    'filter'](_0x133288 => _0x133288[_0x542c83(0x16d)] !== _0x3ab5b3) : (!empReqUrl[
                        _0x542c83(0x95)](_0xd06090 => _0xd06090['input'] === _0x3ab5b3) && empReqUrl['push']
                    ({ 'input': _0x3ab5b3 }), unfilledArr['push']({
                        'input': $(this)[_0x542c83(0xb6)](
                            'name')
                    })), empReqUrl[_0x542c83(0x1bf)] === 0x0 && validateURL($(this)['val']
                    ()) ? urlFilled = !![] : urlFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[
                _0x2ad9ea(0x95)](_0x2ad9ea(0x1e2))[_0x2ad9ea(0x1c3)](function(_0x14ce7a) {
                const
                    _0x3a6207 = _0x2ad9ea;
                skipTo = undefined, $(this)['parents'](_0x3a6207(0x82))['data'](_0x3a6207(0x1b9)) !==
                    '' && (skipTo = $(this)[_0x3a6207(0x180)](_0x3a6207(0x82))[_0x3a6207(0x1cb)](_0x3a6207(
                        0x1b9))), $(this)['parents'](_0x3a6207(0x7d))[_0x3a6207(0xb6)](_0x3a6207(0xd9)) && (
                        answer = $(this)['parents']('[data-go-to]')['attr'](_0x3a6207(0xd9)), selections =
                        selections['filter'](_0x30b2c1 => _0x30b2c1[_0x3a6207(0x132)] !== x), selections[
                            'push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[
                                _0x3a6207(0x11c)](_0x3474d5 => _0x3474d5[_0x3a6207(0x132)] !== skipTo - 0x2),
                            selections[_0x3a6207(0xb5)]({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections[_0x3a6207(0xc7)](_0x21433f => _0x21433f[_0x3a6207(0x132)] ===
                                x), selections[objIndex][_0x3a6207(0x1d5)] = parseInt(skipTo) - 0x1, selections[
                                objIndex][_0x3a6207(0x187)] = x));
            }), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(
                0xee))[_0x2ad9ea(0x95)](':input[type=\x22date\x22][required]')[_0x2ad9ea(0x1c3)](function(
                _0x4e343c) {
                const _0x1df6d7 = _0x2ad9ea;
                $(this)[_0x1df6d7(0x137)]() !== '' ? empReqDate = empReqDate[_0x1df6d7(0x11c)](
                        _0x2f1b43 => _0x2f1b43[_0x1df6d7(0x16d)] !== _0x4e343c) : (!empReqDate[_0x1df6d7(
                            0x95)](_0x108bc7 => _0x108bc7['input'] === _0x4e343c) && empReqDate[_0x1df6d7(0xb5)]
                        ({ 'input': _0x4e343c }), unfilledArr['push']({
                            'input': $(this)[_0x1df6d7(0xb6)](
                                _0x1df6d7(0x122))
                        })), empReqDate['length'] === 0x0 ? dateFilled = !![] :
                    dateFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)]('.active-answer-card')[_0x2ad9ea(0x95)]
            (_0x2ad9ea(0x100))[_0x2ad9ea(0x1c3)](function(_0x123cd5) {
                const _0x4f91c6 = _0x2ad9ea;
                skipTo = undefined, $(this)['parents'](_0x4f91c6(0x82))['data'](_0x4f91c6(0x1b9)) !==
                    '' && (skipTo = $(this)[_0x4f91c6(0x180)](_0x4f91c6(0x82))['data']('skip-to')), $(this)[
                        _0x4f91c6(0x180)]('[data-go-to]')[_0x4f91c6(0xb6)](_0x4f91c6(0xd9)) && (answer = $(
                            this)[_0x4f91c6(0x180)]('[data-go-to]')[_0x4f91c6(0xb6)]('data-go-to'), selections =
                        selections[_0x4f91c6(0x11c)](_0x816dfd => _0x816dfd[_0x4f91c6(0x132)] !== x),
                        selections[_0x4f91c6(0xb5)]({ 'step': x, 'selected': answer }), skipTo && (
                            selections = selections['filter'](_0x33194c => _0x33194c[_0x4f91c6(0x132)] !==
                                skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }),
                            objIndex = selections[_0x4f91c6(0xc7)](_0x54cca3 => _0x54cca3['step'] === x),
                            selections[objIndex][_0x4f91c6(0x1d5)] = parseInt(skipTo) - 0x1, selections[
                                objIndex][_0x4f91c6(0x187)] = x));
            }), $(steps[x])[_0x2ad9ea(0x95)](
                '.active-answer-card')[_0x2ad9ea(0x95)](_0x2ad9ea(0x1d1))[_0x2ad9ea(0x1c3)](function(
                _0x2c2e85) {
                const _0x1cf609 = _0x2ad9ea;
                $(this)['val']() !== '' ? empReqTime = empReqTime['filter'](_0x401383 => _0x401383[
                        _0x1cf609(0x16d)] !== _0x2c2e85) : (!empReqTime[_0x1cf609(0x95)](_0x1372fa =>
                            _0x1372fa[_0x1cf609(0x16d)] === _0x2c2e85) && empReqTime[_0x1cf609(0xb5)]
                        ({ 'input': _0x2c2e85 }), unfilledArr[_0x1cf609(0xb5)]({
                            'input': $(this)['attr'](
                                _0x1cf609(0x122))
                        })), empReqTime[_0x1cf609(0x1bf)] === 0x0 ? timeFilled = !![] :
                    timeFilled = ![];
            }), $(steps[x])['find']('.active-answer-card')[_0x2ad9ea(0x95)](
                _0x2ad9ea(0x128))[_0x2ad9ea(0x1c3)](function(_0x4d6867) {
                const _0x88d28 = _0x2ad9ea;
                skipTo = undefined, $(this)[_0x88d28(0x180)](_0x88d28(0x82))[_0x88d28(0x1cb)](_0x88d28(
                    0x1b9)) !== '' && (skipTo = $(this)[_0x88d28(0x180)](_0x88d28(0x82))[_0x88d28(0x1cb)](
                    'skip-to')), $(this)[_0x88d28(0x180)](_0x88d28(0x7d))['attr'](_0x88d28(0xd9)) && (
                    answer = $(this)[_0x88d28(0x180)](_0x88d28(0x7d))[_0x88d28(0xb6)]('data-go-to'),
                    selections = selections[_0x88d28(0x11c)](_0x1c36de => _0x1c36de[_0x88d28(0x132)] !==
                        x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections =
                        selections[_0x88d28(0x11c)](_0x234d37 => _0x234d37[_0x88d28(0x132)] !== skipTo -
                            0x2), selections[_0x88d28(0xb5)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x88d28(0xc7)](_0x465ec2 => _0x465ec2[_0x88d28(0x132)] ===
                            x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][
                            _0x88d28(0x187)
                        ] = x));
            }), $(steps[x])['find']('.active-answer-card')[_0x2ad9ea(0x95)](_0x2ad9ea(
                0x1ee))['each'](function(_0x548847) {
                const _0x3c9ba1 = _0x2ad9ea;
                let _0x3cf4d4 = $(this)[
                        _0x3c9ba1(0x137)]()[_0x3c9ba1(0x1bf)],
                    _0x45d702 = $(this)[_0x3c9ba1(0x1cb)](_0x3c9ba1(0x152)) ? $(this)[_0x3c9ba1(0x1cb)](
                        _0x3c9ba1(0x152)) : 0x0;
                $(this)[_0x3c9ba1(0x137)]() !== '' && _0x3cf4d4 >= _0x45d702 ? empReqNum = empReqNum[
                        _0x3c9ba1(0x11c)](_0x2deea3 => _0x2deea3[_0x3c9ba1(0x16d)] !== _0x548847) : (!
                        empReqNum[_0x3c9ba1(0x95)](_0x3e9209 => _0x3e9209[_0x3c9ba1(0x16d)] === _0x548847) &&
                        empReqNum['push']({ 'input': _0x548847 }), unfilledArr[_0x3c9ba1(0xb5)]({
                            'input': $(
                                this)[_0x3c9ba1(0xb6)]('name')
                        })), empReqNum[_0x3c9ba1(0x1bf)] === 0x0 ?
                    numFilled = !![] : numFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[
                'find'](_0x2ad9ea(0x1a2))[_0x2ad9ea(0x1c3)](function(_0x4a8d8d) {
                const _0x15b796 =
                    _0x2ad9ea;
                skipTo = undefined, $(this)[_0x15b796(0x180)](_0x15b796(0x82))[_0x15b796(0x1cb)](
                    _0x15b796(0x1b9)) !== '' && (skipTo = $(this)[_0x15b796(0x180)](_0x15b796(0x82))[
                    _0x15b796(0x1cb)](_0x15b796(0x1b9))), $(this)['parents']('[data-go-to]')['attr'](
                    'data-go-to') && (answer = $(this)[_0x15b796(0x180)]('[data-go-to]')[_0x15b796(0xb6)](
                        _0x15b796(0xd9)), selections = selections[_0x15b796(0x11c)](_0x41b3fc => _0x41b3fc[
                        _0x15b796(0x132)] !== x), selections[_0x15b796(0xb5)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](
                            _0x45e9b2 => _0x45e9b2['step'] !== skipTo - 0x2), selections['push']
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x15b796(
                            0xc7)]
                        (_0x15a6ec => _0x15a6ec[_0x15b796(0x132)] === x), selections[objIndex][_0x15b796(
                            0x1d5)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x15b796(0x187)] = x));
            }), $(
                steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0x114))[_0x2ad9ea(
                0x1c3)](function(_0x46043b) {
                const _0x13d627 = _0x2ad9ea;
                if ($(this)[_0x13d627(0x137)]
                    () !== '') {
                    let _0x35e814 = $(this)[_0x13d627(0x137)]()[_0x13d627(0x1bf)],
                        _0x21a24a = $(this)[_0x13d627(0x1cb)](_0x13d627(0x152)) ? $(this)[_0x13d627(0x1cb)](
                            _0x13d627(0x152)) : 0x0;
                    if ($(this)[_0x13d627(0x1cb)](_0x13d627(0x1fa))) {
                        var
                            _0x2181d2 = phoneAutoFormat($(this)['data']('phone-autoformat'));
                        $(this)[_0x13d627(0x137)](_0x2181d2($(this)[_0x13d627(0x137)]()));
                    }
                    phoneValidation(
                            $(this)['val'](), _0x35e814, _0x21a24a) ? empReqTel = empReqTel[_0x13d627(0x11c)](
                            _0x12f4c9 => _0x12f4c9[_0x13d627(0x16d)] !== _0x46043b) : empReqTel['push']
                        ({ 'input': _0x46043b });
                } else !empReqTel[_0x13d627(0x95)](_0xddce17 => _0xddce17[
                        'input'] === _0x46043b) && empReqTel[_0x13d627(0xb5)]({ 'input': _0x46043b }),
                    unfilledArr[_0x13d627(0xb5)]({ 'input': $(this)[_0x13d627(0xb6)]('name') });
                empReqTel[_0x13d627(0x1bf)] === 0x0 ? telFilled = !![] : telFilled = ![];
            }), $(steps[x])[
                'find']('.active-answer-card')[_0x2ad9ea(0x95)](':input[type=\x22tel\x22]')[_0x2ad9ea(
                0x1c3)](function(_0x5cb82d) {
                const _0x2a57f0 = _0x2ad9ea;
                skipTo = undefined, $(this)[_0x2a57f0(0x180)](_0x2a57f0(0x82))[_0x2a57f0(0x1cb)](
                    _0x2a57f0(0x1b9)) !== '' && (skipTo = $(this)[_0x2a57f0(0x180)](_0x2a57f0(0x82))[
                    'data'](_0x2a57f0(0x1b9))), $(this)[_0x2a57f0(0x180)](_0x2a57f0(0x7d))[_0x2a57f0(
                    0xb6)](_0x2a57f0(0xd9)) && (answer = $(this)['parents']('[data-go-to]')[_0x2a57f0(
                        0xb6)](_0x2a57f0(0xd9)), selections = selections[_0x2a57f0(0x11c)](_0x378d88 =>
                        _0x378d88['step'] !== x), selections[_0x2a57f0(0xb5)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](
                            _0x25c7f5 => _0x25c7f5['step'] !== skipTo - 0x2), selections['push']
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2a57f0(
                            0xc7)]
                        (_0x39dac8 => _0x39dac8['step'] === x), selections[objIndex][_0x2a57f0(0x1d5)] =
                        parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0x2ad9ea(
                0x95)]('.active-answer-card')[_0x2ad9ea(0x95)](_0x2ad9ea(0x97))['each'](function(
                _0x5cc66a) {
                const _0x5423fb = _0x2ad9ea;
                $(this)[_0x5423fb(0x137)]() !== '' ? empReqFile = empReqFile['filter'](_0xb719b =>
                        _0xb719b[_0x5423fb(0x16d)] !== _0x5cc66a) : (!empReqFile[_0x5423fb(0x95)](_0x58650c =>
                            _0x58650c[_0x5423fb(0x16d)] === _0x5cc66a) && empReqFile[_0x5423fb(0xb5)]
                        ({ 'input': _0x5cc66a }), unfilledArr['push']({
                            'input': $(this)['attr'](_0x5423fb(
                                0x122))
                        })), empReqFile[_0x5423fb(0x1bf)] === 0x0 ? fileFilled = !![] :
                    fileFilled = ![];
            }), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](
                _0x2ad9ea(0xba))[_0x2ad9ea(0x1c3)](function(_0x38e570) {
                const _0x51118f = _0x2ad9ea;
                skipTo = undefined, $(this)[_0x51118f(0x180)](_0x51118f(0x82))[_0x51118f(0x1cb)](
                    'skip-to') !== '' && (skipTo = $(this)[_0x51118f(0x180)](_0x51118f(0x82))[_0x51118f(
                    0x1cb)](_0x51118f(0x1b9))), $(this)['parents'](_0x51118f(0x7d))['attr'](
                    'data-go-to') && (answer = $(this)[_0x51118f(0x180)](_0x51118f(0x7d))[_0x51118f(0xb6)]
                    (
                        _0x51118f(0xd9)), selections = selections[_0x51118f(0x11c)](_0x1e3476 => _0x1e3476[
                        _0x51118f(0x132)] !== x), selections[_0x51118f(0xb5)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x51118f(
                        0x11c)](
                        _0x10b06e => _0x10b06e[_0x51118f(0x132)] !== skipTo - 0x2), selections[_0x51118f(
                        0xb5)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                        'findIndex'](_0x31b8d1 => _0x31b8d1['step'] === x), selections[objIndex][
                        _0x51118f(0x1d5)
                    ] = parseInt(skipTo) - 0x1, selections[objIndex][_0x51118f(0x187)] = x));
            }), $(steps[x])[
                _0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0xb9))['each'](function(
                _0x41c08e) {
                const _0x23cc98 = _0x2ad9ea;
                $(this)[_0x23cc98(0x137)]() !== null && $(this)[_0x23cc98(0x137)]() !== '' ?
                    empReqSelect = empReqSelect[_0x23cc98(0x11c)](_0x4037ad => _0x4037ad['input'] !==
                        _0x41c08e) : (!empReqSelect[_0x23cc98(0x95)](_0x1a00e9 => _0x1a00e9[_0x23cc98(
                        0x16d)] === _0x41c08e) && empReqSelect['push']({ 'input': _0x41c08e }), unfilledArr[
                        _0x23cc98(0xb5)]({ 'input': $(this)[_0x23cc98(0xb6)](_0x23cc98(0x122)) })),
                    empReqSelect[_0x23cc98(0x1bf)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
            }), $(
                steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0xf4))[_0x2ad9ea(
                0x1c3)](function(_0xa02f1c) {
                const _0x584f13 = _0x2ad9ea;
                skipTo = undefined, $(this)[_0x584f13(0x180)]('[data-skip-to]')[_0x584f13(0x1cb)](
                    _0x584f13(0x1b9)) !== '' && (skipTo = $(this)[_0x584f13(0x180)](_0x584f13(0x82))[
                    _0x584f13(0x1cb)](_0x584f13(0x1b9))), $(this)['parents'](_0x584f13(0x7d))['attr'](
                    'data-go-to') && (answer = $(this)[_0x584f13(0x180)](_0x584f13(0x7d))['attr'](
                        'data-go-to'), selections = selections[_0x584f13(0x11c)](_0x3fddd0 => _0x3fddd0[
                        _0x584f13(0x132)] !== x), selections[_0x584f13(0xb5)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x584f13(
                            0x11c)](
                            _0x42116b => _0x42116b['step'] !== skipTo - 0x2), selections[_0x584f13(0xb5)]
                        ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x584f13(
                            0xc7)]
                        (_0x4ee44f => _0x4ee44f[_0x584f13(0x132)] === x), selections[objIndex][_0x584f13(
                            0x1d5)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[
                _0x2ad9ea(0x95)](_0x2ad9ea(0xee))['find'](_0x2ad9ea(0xfe))[_0x2ad9ea(0x1c3)](function(
                _0x2c7211) {
                const _0x1ea33a = _0x2ad9ea;
                let _0x314e29 = $(this)[_0x1ea33a(0x137)]()[
                        'length'],
                    _0x5ceae7 = $(this)[_0x1ea33a(0x1cb)](_0x1ea33a(0x152)) ? $(this)[_0x1ea33a(0x1cb)](
                        _0x1ea33a(0x152)) : 0x0;
                $(this)[_0x1ea33a(0x137)]() !== '' && _0x314e29 >= _0x5ceae7 ? empReqTextarea =
                    empReqTextarea[_0x1ea33a(0x11c)](_0x4d1087 => _0x4d1087[_0x1ea33a(0x16d)] !==
                        _0x2c7211) : (!empReqTextarea[_0x1ea33a(0x95)](_0x1dfd8d => _0x1dfd8d[_0x1ea33a(
                            0x16d)] === _0x2c7211) && empReqTextarea[_0x1ea33a(0xb5)]({ 'input': _0x2c7211 }),
                        unfilledArr['push']({ 'input': $(this)[_0x1ea33a(0xb6)]('name') })), empReqTextarea[
                        _0x1ea33a(0x1bf)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
            }), $(steps[
                x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0x130))[_0x2ad9ea(0x1c3)](
                function(_0x38709f) {
                    const _0x3a873a = _0x2ad9ea;
                    skipTo = undefined, $(this)['parents'](_0x3a873a(0x82))['data'](_0x3a873a(0x1b9)) !==
                        '' && (skipTo = $(this)[_0x3a873a(0x180)](_0x3a873a(0x82))[_0x3a873a(0x1cb)](_0x3a873a(
                            0x1b9))), $(this)[_0x3a873a(0x180)](_0x3a873a(0x7d))[_0x3a873a(0xb6)](_0x3a873a(
                            0xd9)) && (answer = $(this)[_0x3a873a(0x180)](_0x3a873a(0x7d))['attr']('data-go-to'),
                            selections = selections['filter'](_0x5aacfb => _0x5aacfb[_0x3a873a(0x132)] !== x),
                            selections[_0x3a873a(0xb5)]({ 'step': x, 'selected': answer }), skipTo && (
                                selections = selections[_0x3a873a(0x11c)](_0x326284 => _0x326284[_0x3a873a(
                                    0x132)] !== skipTo - 0x2), selections['push']({
                                    'step': skipTo -
                                        0x2,
                                    'selected': answer
                                }), objIndex = selections[_0x3a873a(0xc7)](_0x42f8e7 =>
                                    _0x42f8e7[_0x3a873a(0x132)] === x), selections[objIndex]['skipTo'] = parseInt(
                                    skipTo) - 0x1, selections[objIndex][_0x3a873a(0x187)] = x));
                }), $(steps[x])[
                'find'](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0x195))[_0x2ad9ea(0x1c3)](function(
                _0x52612f) {
                const _0x3aa815 = _0x2ad9ea;
                $(this)['val']() !== '' ? validateEmail($(this)[_0x3aa815(0x137)](), $(this)[_0x3aa815(
                    0x1cb)](_0x3aa815(0x11b)), $(this)[_0x3aa815(0xb6)]('name')) : (emailFilled = ![],
                    unfilledArr[_0x3aa815(0xb5)]({ 'input': $(this)[_0x3aa815(0xb6)]('name') }));
            }), $(steps[
                x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0xc4))[_0x2ad9ea(0x1c3)](
                function(_0x4b7fb1) {
                    const _0x5b4646 = _0x2ad9ea;
                    skipTo = undefined, $(this)[_0x5b4646(0x180)](_0x5b4646(0x82))[_0x5b4646(0x1cb)](
                        _0x5b4646(0x1b9)) !== '' && (skipTo = $(this)[_0x5b4646(0x180)](_0x5b4646(0x82))[
                        _0x5b4646(0x1cb)](_0x5b4646(0x1b9))), $(this)[_0x5b4646(0x180)](_0x5b4646(0x7d))[
                        _0x5b4646(0xb6)](_0x5b4646(0xd9)) && (answer = $(this)['parents']('[data-go-to]')[
                            _0x5b4646(0xb6)](_0x5b4646(0xd9)), selections = selections['filter'](_0x41af2a =>
                            _0x41af2a[_0x5b4646(0x132)] !== x), console[_0x5b4646(0xcc)]('selections\x20email',
                            selections, x), selections[_0x5b4646(0xb5)]({ 'step': x, 'selected': answer }),
                        skipTo && (selections = selections[_0x5b4646(0x11c)](_0x3eaa08 => _0x3eaa08[_0x5b4646(
                            0x132)] !== skipTo - 0x2), selections[_0x5b4646(0xb5)]({
                            'step': skipTo -
                                0x2,
                            'selected': answer
                        }), objIndex = selections[_0x5b4646(0xc7)](_0x249e0d =>
                            _0x249e0d['step'] === x), selections[objIndex][_0x5b4646(0x1d5)] = parseInt(
                            skipTo) - 0x1, selections[objIndex][_0x5b4646(0x187)] = x));
                });
    }
    $(steps[x])['find']
        (_0x2ad9ea(0x1fb))['is'](_0x2ad9ea(0x1d6)) && (selArr = [], $(steps)[_0x2ad9ea(0x95)](_0x2ad9ea(
                0xb2))[_0x2ad9ea(0x1c3)](function(_0x48e4db, _0xfc0f21) {
                const _0x2febbb = _0x2ad9ea;
                selArr[_0x2febbb(0xb5)]({ 'selected': $(this)[_0x2febbb(0x1cb)](_0x2febbb(0x1e6)) });
            }),
            selString = [], selArr[_0x2ad9ea(0x1e8)](_0x3761b9 => selString['push'](_0x3761b9[
                'selected'])), $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(
                0xad))[_0x2ad9ea(0x1c3)](function() {
                const _0x2e6928 = _0x2ad9ea;
                skipTo = undefined;
                if ($(this)['parents'](_0x2e6928(0x82))[_0x2e6928(0x1cb)](_0x2e6928(
                        0x1b9))) skipTo = $(this)['parents'](_0x2e6928(0x82))['data']('skip-to');
                else $(this)[_0x2e6928(0x1cb)](_0x2e6928(0x1b9)) && (skipTo = $(this)[_0x2e6928(0x1cb)](
                    _0x2e6928(0x1b9)));
                selections = selections[_0x2e6928(0x11c)](_0x406539 => _0x406539[_0x2e6928(0x132)] !==
                    x);
                if ($(this)['data'](_0x2e6928(0x14a))) answer = $(this)[_0x2e6928(0xb6)](_0x2e6928(
                    0xd9)), selections[_0x2e6928(0xb5)]({ 'step': x, 'selected': answer }), skipTo && (
                    selections = selections['filter'](_0x2ecfe8 => _0x2ecfe8['step'] !== skipTo - 0x2),
                    selections[_0x2e6928(0xb5)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex =
                    selections[_0x2e6928(0xc7)](_0x480e85 => _0x480e85[_0x2e6928(0x132)] === x),
                    selections[objIndex][_0x2e6928(0x1d5)] = parseInt(skipTo) - 0x1, selections[objIndex][
                        _0x2e6928(0x187)
                    ] = x);
                else $(this)[_0x2e6928(0x180)](_0x2e6928(0x7d))[_0x2e6928(0x1cb)](_0x2e6928(0x14a)) && (
                    answer = $(this)[_0x2e6928(0x180)]('[data-go-to]')['data'](_0x2e6928(0x14a)),
                    selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections =
                        selections['filter'](_0x421365 => _0x421365[_0x2e6928(0x132)] !== skipTo - 0x2),
                        selections[_0x2e6928(0xb5)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x2e6928(0xc7)](_0x1cb349 => _0x1cb349['step'] === x),
                        selections[objIndex][_0x2e6928(0x1d5)] = parseInt(skipTo) - 0x1, selections[
                            objIndex]['backTo'] = x));
            }), logicExtra ? ($(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(
                0xee))[_0x2ad9ea(0x95)](_0x2ad9ea(0x1d9))[_0x2ad9ea(0x1cb)]('radio-skip') === !![] || $(
                steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0x1b3))[_0x2ad9ea(0x1cb)](_0x2ad9ea(0xa1)) === !![]) &&
            (skip && selections[_0x2ad9ea(0x11c)](_0x1a218e => _0x1a218e[_0x2ad9ea(0x132)] === x)[
                'length'] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 &&
                emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() {
                    next
                        = !![], back = ![], nextStep(), selectionQuiz();
                }, $(steps[x])['find'](_0x2ad9ea(
                    0x15e))['data']('radio-delay')))) : $(steps[x])[_0x2ad9ea(0x95)](_0x2ad9ea(0x1d9))[
                _0x2ad9ea(0x1cb)](_0x2ad9ea(0xa1)) === !![] && (skip && (textareaLength === 0x0 &&
                textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 &&
                setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[
                    x])['find'](_0x2ad9ea(0x15e))['data'](_0x2ad9ea(0x1c4)))))), inputFilled && fileFilled &&
        numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed &&
        selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() : disableBtn(),
        andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x3b0972 = _0x29f161;
    $('[data-text=\x22error-message\x22]')[_0x3b0972(0x104)](), unfilledArr['length'] > 0x0 &&
        unfilledArr[_0x3b0972(0x1e8)](function(_0x4a7401) {
            const _0x225167 = _0x3b0972;
            $(_0x225167(0x1a0) + _0x4a7401[_0x225167(0x16d)] + '\x22]')[_0x225167(0xcb)](_0x225167(
                    0x151))['fadeIn'](), $(_0x225167(0x1a0) + _0x4a7401['input'] + '\x22]')[_0x225167(
                    0x180)]()['children'](_0x225167(0x151))[_0x225167(0x184)](), $('textarea[name=\x22' +
                    _0x4a7401[_0x225167(0x16d)] + '\x22]')['siblings'](_0x225167(0x151))[_0x225167(0x184)]
                (), $(_0x225167(0xa3) + _0x4a7401[_0x225167(0x16d)] + '\x22]')[_0x225167(0xcb)](_0x225167(
                    0x151))[_0x225167(0x184)]();
        });
}

function resetInputErrorMessage(_0x53c8c7) {
    const _0x3e82ee = _0x29f161;
    $(_0x3e82ee(0x1a0) + _0x53c8c7 + '\x22]')[_0x3e82ee(0xcb)]('[data-text=\x22error-message\x22]')[
        'hide'](), $(_0x3e82ee(0x1a0) + _0x53c8c7 + '\x22]')[_0x3e82ee(0x180)]()['children'](
        _0x3e82ee(0x151))[_0x3e82ee(0x104)](), $(_0x3e82ee(0x101) + _0x53c8c7 + '\x22]')[_0x3e82ee(
        0xcb)](_0x3e82ee(0x151))[_0x3e82ee(0x104)](), $('select[name=\x22' + _0x53c8c7 + '\x22]')[
        _0x3e82ee(0xcb)](_0x3e82ee(0x151))[_0x3e82ee(0x104)]();
}

function increaseCurstep() {
    const _0x406d12 = _0x29f161;
    countCard ? (curStep = curStep + 0x1, $(_0x406d12(0x1c2))[_0x406d12(0x1b7)](steps['length'])) : $(
            steps[x])[_0x406d12(0x1cb)](_0x406d12(0xdb)) ? curStep = curStep + 0x0 : curStep = curStep +
        0x1, $('[data-text=\x22current-step\x22]')[_0x406d12(0x1b7)](curStep);
}

function decreaseCurstep() {
    const _0x4cec9f = _0x29f161;
    countCard ? (curStep = curStep - 0x1, $(_0x4cec9f(0x1c2))[_0x4cec9f(0x1b7)](steps[_0x4cec9f(
            0x1bf)])) : $(steps[x])[_0x4cec9f(0x1cb)](_0x4cec9f(0xdb)) ? curStep = curStep - 0x0 :
        curStep = curStep - 0x1, $(_0x4cec9f(0xe3))[_0x4cec9f(0x1b7)](curStep);
}
$(_0x29f161(0x129))[
    'on'](_0x29f161(0x145), function(_0x5accb4) {
    const _0x50860b = _0x29f161;
    $(this)[_0x50860b(0x1cb)](_0x50860b(0xdd)) && (redirectTo = $(this)['data'](_0x50860b(
        0xdd)));
    !$(this)[_0x50860b(0x1cb)]('new-tab') && (newTab = $(this)[_0x50860b(0x1cb)](
        _0x50860b(0x10d)));
    successCard = $(this)[_0x50860b(0x1cb)](_0x50860b(0xc6)), _0x5accb4[_0x50860b(0xed)](),
        _0x5accb4['stopPropagation']();
    const _0x469e89 = new URLSearchParams(window[_0x50860b(
            0x84)]['search']),
        _0x5c85ca = (_0x35dfce, _0x2f9059) => {
            const _0x1f336e = _0x50860b,
                _0x2ce67e = document['querySelector'](_0x1f336e(0x94) + _0x35dfce + '\x22]');
            _0x2ce67e && (_0x2ce67e['value'] = _0x2f9059);
        };
    _0x5c85ca('referrer', _0x469e89[_0x50860b(0xe2)](_0x50860b(0x1b6)) || document['referrer'] ||
        'Direct'), _0x5c85ca('user-agent', navigator[_0x50860b(0x11e)]), _0x5c85ca(_0x50860b(
        0x15c), new Date()['toISOString']()), _0x5c85ca(_0x50860b(0x17c), Intl['DateTimeFormat']
        ()[_0x50860b(0xb3)]()[_0x50860b(0x79)]), _0x5c85ca(_0x50860b(0x67), window[_0x50860b(
            0x1f4)]
        ['width'] + 'x' + window[_0x50860b(0x1f4)]['height']), _0x5c85ca(_0x50860b(0xc3),
        _0x50860b(0x1db));
    const _0x1e8a1b = () => {
        const _0x89e5fd = _0x50860b,
            _0x318251 = document['querySelector'](
                '[data-hidden-input=\x22page-visit-duration\x22]');
        if (_0x318251) {
            const _0x52ab6e =
                localStorage[_0x89e5fd(0x6b)](_0x89e5fd(0x153));
            console[_0x89e5fd(0xcc)](_0x52ab6e);
            if (_0x52ab6e) {
                const _0x1d9e06 = Math['round']((
                    Date['now']() - parseInt(_0x52ab6e)) / 0x3e8);
                _0x318251[_0x89e5fd(0x150)] = _0x1d9e06 + '\x20seconds';
            } else _0x318251[_0x89e5fd(
                0x150)] = _0x89e5fd(0x1db);
        }
    };
    _0x1e8a1b(), logicExtra && ($(this)[_0x50860b(0xb0)](_0x50860b(0xdc), !![]), $(steps)[
            _0x50860b(0x95)](_0x50860b(0x126))[_0x50860b(0xb0)](_0x50860b(0x1cd), ![])), localStorage[
            _0x50860b(0x110)](_0x50860b(0x1f9)), localStorage[_0x50860b(0x110)](_0x50860b(0x153)),
        fill ? ($(this)[_0x50860b(0x1cb)]('wait') ? (console['log']($(this)[_0x50860b(0x1cb)](
            _0x50860b(0x1dc))), $(this)[_0x50860b(0x1b7)]($(this)[_0x50860b(0x1cb)]('wait'))) : $(
            this)[_0x50860b(0x137)](_0x50860b(0x18d))['text'](_0x50860b(0x18d)), $(_0x50860b(
            0x173))[_0x50860b(0x86)](), $('div.g-recaptcha')['length'] > 0x0 && (grecaptcha[
            _0x50860b(
                0xbc)]()[_0x50860b(0x1bf)] === 0x0 && (form[_0x50860b(0x95)](
            '[data-form=\x22submit-btn\x22]')[_0x50860b(0x1b7)](oldSubmitText), form[_0x50860b(
            0x95)](_0x50860b(0x129))[_0x50860b(0x137)](oldSubmitText))), customError && $(
            '[data-text=\x22error-message\x22]')['hide']()) : customError &&
        displayErrorMessage();
});

function nextStep() {
    const _0x251a5b = _0x29f161;
    customError ? ($(_0x251a5b(0x151))['hide'](), fill ? (x++, increaseCurstep(), progress = x, x <=
            steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput())) :
        displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[
        _0x251a5b(0x1bf)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x44a36b = _0x29f161;
    customError && $(_0x44a36b(0x151))['hide'](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[
            _0x44a36b(0x181)](_0x44a36b(0x18e)), selections[_0x44a36b(0x11c)](_0x2ddcce => _0x2ddcce[
            _0x44a36b(0x1d5)] === x)[_0x44a36b(0x1bf)] > 0x0 ? x = parseInt(getSafe(() => selections[
            _0x44a36b(0x11c)](_0x51cc0f => _0x51cc0f['skipTo'] === x)[0x0][_0x44a36b(0x187)])) : x--,
        updateStep()), ($(steps[x])[_0x44a36b(0x95)](_0x44a36b(0x1d9))[_0x44a36b(0x1cb)](
        'radio-skip') === !![] || $(steps[x])[_0x44a36b(0x95)](_0x44a36b(0xee))['find'](_0x44a36b(
        0x1d9))['data'](_0x44a36b(0xa1)) === !![] || $(steps[x])[_0x44a36b(0x95)](_0x44a36b(0x1b3))[
        _0x44a36b(0x1cb)](_0x44a36b(0xa1)) === !![]) && (all_data = all_data[_0x44a36b(0x11c)](
        _0x1f84cd => _0x1f84cd[_0x44a36b(0xea)] !== $(steps[x])['find'](_0x44a36b(0xe4))[_0x44a36b(
            0xb6)]('name')), $(_0x44a36b(0x83) + $(steps[x])[_0x44a36b(0x95)](_0x44a36b(0xe4))['attr']
        (_0x44a36b(0x122)) + '\x22]')[_0x44a36b(0x104)](), $(steps[x])[_0x44a36b(0x95)](
        'input[type=\x22radio\x22]')[_0x44a36b(0xb0)](_0x44a36b(0x15b), ![]), $(steps[x])['find'](
        _0x44a36b(0xfc))[_0x44a36b(0x181)](_0x44a36b(0x1ed)), validation());
}
weightedSelectionRange &&
    $(_0x29f161(0x13a))[_0x29f161(0x1c3)](function() {
        const _0x2ff6c9 = _0x29f161;
        $(this)[_0x2ff6c9(0x10a)](_0x2ff6c9(0x1ac) + $(this)[_0x2ff6c9(0x1cb)](_0x2ff6c9(0x91)) +
            '</div>');
    });

function selectionQuiz() {
    const _0x53f318 = _0x29f161;
    if ($(this)[_0x53f318(0x95)](
            '[data-btn=\x22check\x22]')) {
        $('[data-selection]')[_0x53f318(0x104)](), $(_0x53f318(0x1aa))[
            _0x53f318(0x104)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr['forEach'](function(
                _0x4c146c) { selTotal = selTotal + _0x4c146c['selected']; }), $(
                '[data-text=\x22total-weight\x22]')[_0x53f318(0x1b7)](selTotal);
            if ($(_0x53f318(0x10e) +
                    selTotal + '\x22]')[_0x53f318(0x1bf)] > 0x0) $(_0x53f318(0x10e) + selTotal + '\x22]')[
                _0x53f318(0x184)]();
            else $(_0x53f318(0x9a) + selTotal + ')') ? $(_0x53f318(0x9a) + selTotal + ')')[_0x53f318(
                0x16a)](_0x53f318(0x13a))['eq'](0x0)[_0x53f318(0x1ef)]() : $(_0x53f318(0x17e))[_0x53f318(
                0x184)]();
        } else {
            let _0x5c8d86 = -0x1;
            $(_0x53f318(0x13a))['each'](function(_0x1e84ab) {
                const _0x1de039 = _0x53f318;
                $($(_0x1de039(0x13a))[_0x1e84ab])[_0x1de039(0x1cb)](_0x1de039(0x91))[_0x1de039(0xbf)](
                    selString[_0x1de039(0x9f)]()) && (_0x5c8d86 = _0x1e84ab);
            }), _0x5c8d86 > -0x1 ? $($(
                _0x53f318(0x13a))[_0x5c8d86])['fadeIn']() : $(_0x53f318(0x17e))['fadeIn']();
        }
    }
}

function triggerInputAllData() {
    const _0x36bd47 = _0x29f161;
    if (savedFilledInput && memory)
        savedFilledInput[_0x36bd47(0x1e8)](_0x20386f => {
            const _0x4f0f1c = _0x36bd47;
            var _0x463cec =
                $(_0x4f0f1c(0x1a0) + _0x20386f['inputName'] + '\x22][value=\x22' + _0x20386f[_0x4f0f1c(
                    0x150)] + _0x4f0f1c(0x1a6)),
                _0x26a4b1 = $(_0x4f0f1c(0x1a0) + _0x20386f[_0x4f0f1c(0x165)] + _0x4f0f1c(0x1a6)),
                _0x36af41 = $(_0x4f0f1c(0x101) + _0x20386f[_0x4f0f1c(0x165)] + _0x4f0f1c(0x1a6)),
                _0xf9d19a = $(_0x4f0f1c(0x1fe) + _0x20386f['inputName'] + '\x22]'),
                _0x3c88e4 = $(_0x4f0f1c(0x162) + _0x20386f[_0x4f0f1c(0x165)] + _0x4f0f1c(0xa4) +
                    _0x20386f[_0x4f0f1c(0x150)] + '\x22]:not([data-prefill=\x22false\x22])');
            if (_0x463cec[
                    'attr']('type') !== _0x4f0f1c(0x1a9)) {
                if (_0x463cec['attr'](_0x4f0f1c(0x1d4)) ===
                    _0x4f0f1c(0xec) && !_0x463cec['parents'](_0x4f0f1c(0x108))['data'](_0x4f0f1c(0xa1)))
                    _0x463cec[_0x4f0f1c(0x145)](), _0x463cec[_0x4f0f1c(0xcb)](_0x4f0f1c(0xd7))[_0x4f0f1c(
                        0x142)](_0x4f0f1c(0x1ed)), _0x463cec['trigger'](_0x4f0f1c(0x16d));
                else _0x20386f[_0x4f0f1c(0x150)] === 'on' ? (_0x26a4b1[_0x4f0f1c(0x145)](), _0x26a4b1[
                    _0x4f0f1c(0xcb)](_0x4f0f1c(0x1bd))[_0x4f0f1c(0x142)](_0x4f0f1c(0x1ed)), _0x26a4b1[
                    'trigger'](_0x4f0f1c(0x16d))) : (_0x26a4b1[_0x4f0f1c(0x137)](_0x20386f[_0x4f0f1c(
                    0x150)]), _0x36af41[_0x4f0f1c(0x137)](_0x20386f[_0x4f0f1c(0x150)]), $(_0x4f0f1c(
                    0x10f))['find'](_0x4f0f1c(0x13b) + _0x20386f['value'] + '\x22]')[_0x4f0f1c(0xb0)](
                    _0x4f0f1c(0x1e6), !![]), _0x26a4b1[_0x4f0f1c(0x1af)](_0x4f0f1c(0x16d)), _0x26a4b1[
                    _0x4f0f1c(0x1af)](_0x4f0f1c(0x169)));
                const _0x3d485a = _0x3c88e4[_0x4f0f1c(0x1cb)](
                        _0x4f0f1c(0xd3)),
                    _0x2fa850 = _0xf9d19a[_0x4f0f1c(0x1cb)](_0x4f0f1c(0xd3));
                _0x3c88e4[_0x4f0f1c(0x16a)]()['addClass'](_0x3d485a), _0xf9d19a[_0x4f0f1c(0x16a)]()[
                    _0x4f0f1c(0x142)](_0x2fa850);
            }
        });
    else _params && (getParams(), searchQ[_0x36bd47(0x1e8)](_0x5e35cc => {
        const _0xfdc4b7 =
            _0x36bd47;
        if ($(_0xfdc4b7(0x1a0) + _0x5e35cc[_0xfdc4b7(0x165)] + _0xfdc4b7(0xa4) +
                _0x5e35cc['value'] + '\x22]:not([data-prefill=\x22false\x22])')[_0xfdc4b7(0xb6)](
                _0xfdc4b7(0x1d4)) !== _0xfdc4b7(0x1a9)) {
            if ($(_0xfdc4b7(0x1a0) + _0x5e35cc['key'] +
                    _0xfdc4b7(0xa4) + _0x5e35cc['val'] + _0xfdc4b7(0x1a6))[_0xfdc4b7(0xb6)](_0xfdc4b7(
                    0x1d4)) === 'radio') $('input[name=\x22' + _0x5e35cc[_0xfdc4b7(0xbd)] + _0xfdc4b7(
                0xa4) + _0x5e35cc[_0xfdc4b7(0x137)] + '\x22]:not([data-prefill=\x22false\x22])')[
                _0xfdc4b7(0x145)](), $(_0xfdc4b7(0x1a0) + _0x5e35cc[_0xfdc4b7(0xbd)] + _0xfdc4b7(
                0xa4) + _0x5e35cc['val'] + _0xfdc4b7(0x1a6))[_0xfdc4b7(0xcb)](_0xfdc4b7(0xd7))[
                _0xfdc4b7(0x142)](_0xfdc4b7(0x1ed)), $(_0xfdc4b7(0x1a0) + _0x5e35cc[_0xfdc4b7(
                    0xbd)] + _0xfdc4b7(0xa4) + _0x5e35cc[_0xfdc4b7(0x137)] +
                '\x22]:not([data-prefill=\x22false\x22])')['trigger']('input');
            else _0x5e35cc[_0xfdc4b7(0x137)] === 'on' ? ($('input[name=\x22' + _0x5e35cc[_0xfdc4b7(
                0xbd)] + '\x22]:not([data-prefill=\x22false\x22])')[_0xfdc4b7(0x145)](), $(
                _0xfdc4b7(0x1a0) + _0x5e35cc['key'] + _0xfdc4b7(0x1a6))['siblings'](_0xfdc4b7(
                0x1bd))['addClass'](_0xfdc4b7(0x1ed)), $(_0xfdc4b7(0x1a0) + _0x5e35cc['key'] +
                '\x22]')[_0xfdc4b7(0x1af)](_0xfdc4b7(0x16d))) : ($(_0xfdc4b7(0x1a0) + _0x5e35cc[
                _0xfdc4b7(0xbd)] + _0xfdc4b7(0x1a6))[_0xfdc4b7(0x137)](_0x5e35cc[_0xfdc4b7(
                0x137)]), $('textarea[name=\x22' + _0x5e35cc['key'] + _0xfdc4b7(0x1a6))[_0xfdc4b7(
                0x137)](_0x5e35cc[_0xfdc4b7(0x137)]), $('select[name=\x22' + _0x5e35cc[_0xfdc4b7(
                0xbd)] + '\x22]:not([data-prefill=\x22false\x22])')['find'](_0xfdc4b7(0x13b) +
                _0x5e35cc[_0xfdc4b7(0x137)] + '\x22]')[_0xfdc4b7(0xb0)]('selected', !![]), $(
                'input[name=\x22' + _0x5e35cc[_0xfdc4b7(0xbd)] + _0xfdc4b7(0x1a6))['trigger'](
                _0xfdc4b7(0x16d)), $(_0xfdc4b7(0x1a0) + _0x5e35cc[_0xfdc4b7(0xbd)] +
                '\x22]:not([data-prefill=\x22false\x22])')[_0xfdc4b7(0x1af)](_0xfdc4b7(0x169)));
        }
    }));
}
$(
    _0x29f161(0x1da))['on'](_0x29f161(0x145), function() {
    next = !![], back = ![], nextStep(),
        selectionQuiz();
}), $('[data-form=\x22back-btn\x22]')['on'](_0x29f161(0x145),
    function() { next = ![], back = !![], backStep(); }), $(steps)[_0x29f161(0x95)](_0x29f161(
    0x126))[
    _0x29f161(0xc8)]('[type=\x22radio\x22]')['on'](_0x29f161(0x16d), function(
    _0x3f58f0) { validation(), andLogic(), addClickClass(); }), $(steps)['find'](_0x29f161(0x1a1))[
    'on'](_0x29f161(0x145), function() { skip = !![], validation(), addClickClass(); });
$(_0x29f161(0x1cf))['data'](_0x29f161(0x9c)) ? $('[data-form=\x22custom-progress-indicator\x22]')[
    _0x29f161(0x181)](_0x29f161(0x1ea)) : $(_0x29f161(0x1bc))['addClass'](_0x29f161(0x1ea));

function clickableIndicator() {
    const _0x485862 = _0x29f161;
    $(_0x485862(0x78))[_0x485862(0x1cb)](_0x485862(0x171)) && ($(_0x485862(0xe6))[_0x485862(0x181)](
        'current'), $(_0x485862(0x78))[_0x485862(0x1cb)](_0x485862(0x9c)) ? (x = $(this)[_0x485862(
        0x103)](), updateStep()) : $(this)[_0x485862(0x103)]() <= progress && (x = $(this)['index']
        (), updateStep())), $(_0x485862(0xe3))['text'](x + 0x1);
}
$(_0x29f161(0x1bc))['on'](_0x29f161(
    0x145), clickableIndicator), excludeCount = !$('[data-form=\x22multistep\x22]')[_0x29f161(
    0x1cb)](_0x29f161(0x1b5)), steps[_0x29f161(0x1c3)](function(_0x42160d) {
    const _0x2f2e27 =
        _0x29f161,
        _0xf3e813 = $(this)[_0x2f2e27(0x1cb)](_0x2f2e27(0xdb));
    console['log'](excludeCount), _0xf3e813 && excludeCount && $(
        '[data-form=\x22custom-progress-indicator\x22]')['eq'](_0x42160d)[_0x2f2e27(0x104)]();
});
$(_0x29f161(0x173))[_0x29f161(0x1cb)](_0x29f161(0x1f5)) && ($(_0x29f161(0x7d))['each'](
        function() {
            const _0xbdc119 = _0x29f161;
            $(this)[_0xbdc119(0x10a)](_0xbdc119(0x9d), $(this)[_0xbdc119(0x1cb)](_0xbdc119(0x14a)));
        }),
    $(_0x29f161(0x102))['each'](function() {
        const _0x52ffd1 = _0x29f161;
        $(this)[_0x52ffd1(0x10a)](_0x52ffd1(0xa7), $(this)[_0x52ffd1(0x1cb)](_0x52ffd1(0x158)));
    }));

function resetFormly() {
    const _0x575377 = _0x29f161;
    $('[data-form=\x22multistep\x22]')[_0x575377(0x1af)](_0x575377(0x17f)), $(
        '[data-form=\x22multistep\x22]')[_0x575377(0x180)]()[_0x575377(0x95)](_0x575377(0x1ca))[
        _0x575377(0x104)](), x = 0x0, updateStep(), $(_0x575377(0x173))[_0x575377(0x1ef)](), $(
        _0x575377(0x129))[_0x575377(0x1b7)](oldSubmitText), $(_0x575377(0x129))[_0x575377(0x137)](
        oldSubmitText), $(_0x575377(0xe3))[_0x575377(0x1b7)](0x1), $(_0x575377(0x173))[_0x575377(
        0x95)](_0x575377(0x1c0))['siblings'](_0x575377(0x1bd))['removeClass'](_0x575377(0x1ed));
}
$(
        document)[_0x29f161(0xff)](function(_0x2fa544, _0x5cff03, _0x52ad64) {
        const _0x5154fe =
            _0x29f161;
        if (_0x52ad64[_0x5154fe(0x196)][_0x5154fe(0xbf)](
                'https://webflow.com/api/v1/form/')) {
            const _0x10a30d = _0x5cff03[_0x5154fe(0x191)] ===
                0xc8,
                _0x7cd181 = _0x5154fe(0x15f);
            redirectTo && _0x10a30d && (newTab ? window[_0x5154fe(0xca)](redirectTo, _0x5154fe(0x12e)) :
                    setTimeout(() => {
                        const _0x24f200 = _0x5154fe;
                        location[_0x24f200(0x146)] = redirectTo;
                    }, redirectDelay)), _0x10a30d &&
                successCard !== '' && $('[data-success-card=\x22' + successCard + '\x22]')['fadeIn'](),
                _0x10a30d && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x10a30d &&
                ($(_0x5154fe(0x129))[_0x5154fe(0x137)]('Please\x20wait...'), $(_0x5154fe(0x129))[
                    _0x5154fe(0x1b7)](_0x5154fe(0x18d)));
        }
    }), $(_0x29f161(0x1cc))['on'](_0x29f161(0x145),
        function() {
            const _0x3acb2b = _0x29f161;
            var _0x2d6617 = $(this)[_0x3acb2b(0x16a)]()[
                _0x3acb2b(0x95)](_0x3acb2b(0x19c))[_0x3acb2b(0x1cb)]('input-field');
            setTimeout(function() {
                    const _0x1d3d08 = _0x3acb2b;
                    $(_0x1d3d08(0x1a0) + _0x2d6617 + '\x22]')[_0x1d3d08(0x1f0)]();
                }, 0x64), back = !![], x =
                $(this)['data']('edit-step') - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(
                    _0x3acb2b(0x1c2))[_0x3acb2b(0x1b7)](steps[_0x3acb2b(0x1bf)])) : $(steps[x])[_0x3acb2b(
                    0x1cb)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x3acb2b(0xe3))[_0x3acb2b(
                    0x1b7)](curStep), back = ![];
        }), $(_0x29f161(0x164))['on'](_0x29f161(0x145),
        function() {
            const _0x68a666 = _0x29f161;
            $('[data-form=\x22multistep\x22]')[_0x68a666(0x1af)]('reset');
            let _0x198d17 = $(this);
            $(this)[_0x68a666(0x1b7)](_0x68a666(0x18d)), setTimeout(function() {
                const _0x4bc96a =
                    _0x68a666;
                $(_0x198d17)[_0x4bc96a(0x1b7)](oldResetText), $(_0x198d17)[_0x4bc96a(0x180)](_0x4bc96a(
                    0x1ca))['hide'](), x = 0x0, updateStep(), $('[data-form=\x22multistep\x22]')[
                    _0x4bc96a(0x1ef)](), $('[data-form=\x22submit-btn\x22]')['text'](oldSubmitText), $(
                    '[data-form=\x22submit-btn\x22]')[_0x4bc96a(0x137)](oldSubmitText), $(_0x198d17)[
                    _0x4bc96a(0x137)](oldSubmitText), $('[data-text=\x22current-step\x22]')['text'](
                    0x1), $(_0x4bc96a(0x173))[_0x4bc96a(0x95)](_0x4bc96a(0x1c0))['siblings'](_0x4bc96a(
                    0x1bd))[_0x4bc96a(0x181)]('w--redirected-checked');
            }, resetDelay);
        }), $(_0x29f161(
        0x73))['on'](_0x29f161(0xa5), function(_0x51387e) {
        const _0x160f67 = _0x29f161;
        if (_0x51387e[
                _0x160f67(0x12c)] === 0xd) {
            _0x51387e[_0x160f67(0xed)](), _0x51387e[_0x160f67(0x178)]
                ();
            if ($(steps[x])[_0x160f67(0x95)]('textarea')['is'](_0x160f67(0x70))) $(steps[x])['find'](
                'textarea:focus')[_0x160f67(0x137)]($(steps[x])['find']('textarea:focus')['val']() +
                '\x0a');
            else $(_0x160f67(0x1f3))[_0x160f67(0x1cb)](_0x160f67(0x1a5)) && fill && (totalSteps >
                curStep && $(_0x160f67(0x1da))[0x0][_0x160f67(0x145)]());
        }
    }), $(_0x29f161(0x73))[
        'keydown'](function(_0x1534ba) {
        const _0x38c2e9 = _0x29f161;
        (_0x1534ba[_0x38c2e9(0xaf)] || _0x1534ba[_0x38c2e9(0x1d7)]) && _0x1534ba[_0x38c2e9(0x12c)] ==
            0xd && (x >= steps[_0x38c2e9(0x1bf)] - 0x1 && fill ? $(steps[x])[_0x38c2e9(0x95)](_0x38c2e9(
                0x157))['click']() : (_0x1534ba[_0x38c2e9(0xed)](), _0x1534ba[_0x38c2e9(0x178)]()));
    }), $(
        '[data-form=\x22multistep\x22]')[_0x29f161(0x95)](_0x29f161(0x126))['on'](_0x29f161(0x169),
        function() {
            const _0x5347af = _0x29f161;
            all_data = all_data['filter'](_0x519891 => _0x519891['field'] !== $(this)[_0x5347af(0xb6)](
                _0x5347af(0x122))), $(this)['attr'](_0x5347af(0x1d4)) === _0x5347af(0x9b) ? $(this)['is'](
                _0x5347af(0x1d6)) ? all_data[_0x5347af(0xb5)]({
                'field': $(this)[_0x5347af(0xb6)](
                    _0x5347af(0x122)),
                'value': $(this)[_0x5347af(0xcb)](_0x5347af(0x1d0))[_0x5347af(
                    0x1b7)]()
            }) : $(_0x5347af(0x83) + $(this)[_0x5347af(0xb6)](_0x5347af(0x122)) +
                '\x22]')[_0x5347af(0x104)]() : (all_data[_0x5347af(0xb5)]({
                'field': $(this)[_0x5347af(
                    0xb6)](_0x5347af(0x122)),
                'value': $(this)[_0x5347af(0x137)]()
            }), $(this)[_0x5347af(
                0x137)]() !== '' && resetInputErrorMessage($(this)[_0x5347af(0xb6)]('name'))), all_data[
                _0x5347af(0x1e8)](function(_0x5ba18a) {
                const _0x5a8980 = _0x5347af;
                $(_0x5a8980(0x83) + _0x5ba18a[_0x5a8980(0xea)] + '\x22]')[_0x5a8980(0x1ef)](), $(
                    _0x5a8980(0x83) + _0x5ba18a[_0x5a8980(0xea)] + '\x22]')[_0x5a8980(0x1b7)](_0x5ba18a[
                    _0x5a8980(0x150)]);
            });
        }), $(_0x29f161(0x173))[_0x29f161(0x95)](_0x29f161(0x130))['on']
    ('change', function() {
        const _0x404da0 = _0x29f161;
        $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x404da0(0xb6)]('name')),
            all_data = all_data[_0x404da0(0x11c)](_0x24f331 => _0x24f331['field'] !== $(this)['attr'](
                _0x404da0(0x122))), all_data[_0x404da0(0xb5)]({
                'field': $(this)[_0x404da0(0xb6)](
                    _0x404da0(0x122)),
                'value': $(this)[_0x404da0(0x137)]()
            }), all_data[_0x404da0(0x1e8)](
                function(_0x26a992) {
                    const _0x41e87c = _0x404da0;
                    $('[data-input-field=\x22' + _0x26a992['field'] + '\x22]')[_0x41e87c(0x1ef)](), $(
                        _0x41e87c(0x83) + _0x26a992[_0x41e87c(0xea)] + '\x22]')['text'](_0x26a992['value']);
                }
            );
    }), $(_0x29f161(0x173))[_0x29f161(0x95)](_0x29f161(0xf4))['on'](_0x29f161(0x169),
        function() {
            const _0x27bb55 = _0x29f161;
            $(this)[_0x27bb55(0x137)]() !== '' && resetInputErrorMessage($(this)[_0x27bb55(0xb6)](
                _0x27bb55(0x122)));
            var _0x475790 = $(this)['data'](_0x27bb55(0xfb));
            all_data = all_data['filter'](_0x2163b2 => _0x2163b2[_0x27bb55(0xea)] !== $(this)[_0x27bb55(
                0xb6)](_0x27bb55(0x122))), all_data[_0x27bb55(0xb5)]({
                'field': $(this)['attr'](_0x27bb55(
                    0x122)),
                'value': _0x475790 ? $(this)[_0x27bb55(0x95)](_0x27bb55(0xf3))[_0x27bb55(
                    0x1b7)]() : $(this)['val']()
            }), all_data[_0x27bb55(0x1e8)](function(_0x5b8951) {
                const
                    _0x121e2e = _0x27bb55;
                $(_0x121e2e(0x83) + _0x5b8951[_0x121e2e(0xea)] + '\x22]')[_0x121e2e(0x1ef)](), $(
                    _0x121e2e(0x83) + _0x5b8951[_0x121e2e(0xea)] + '\x22]')[_0x121e2e(0x1b7)](_0x5b8951[
                    _0x121e2e(0x150)]);
            });
        }), updateStep(), triggerInputAllData(), $(_0x29f161(0x1f2))[
        _0x29f161(0x1c3)](function() {
        const _0x3f122c = _0x29f161,
            _0x42d8e5 = $(this)[_0x3f122c(0x95)](_0x3f122c(0x168)),
            _0x4f15fb = [];
        _0x42d8e5['each'](function() {
            const _0x2c9d0b = _0x3f122c;
            _0x4f15fb[_0x2c9d0b(0xb5)]($(this)[_0x2c9d0b(0x1b7)]()['trim']());
        });
        const _0x4d5330 = $(
            this)[_0x3f122c(0xcb)](_0x3f122c(0x1ae));
        $['each'](_0x4f15fb, function(_0x3979e7, _0x5f3c2d) {
            const _0x162fca = _0x3f122c,
                _0x2fb561 = $('<option>')[_0x162fca(0x137)](_0x5f3c2d)[_0x162fca(0x1b7)](_0x5f3c2d);
            _0x4d5330[_0x162fca(0x10a)](_0x2fb561);
        });
    });

function cloneRemove() {
    const _0x49593e = _0x29f161;
    $(_0x49593e(0x1e5))['each'](function() {
        const _0x43177c = _0x49593e;
        $(this)[_0x43177c(0x95)](_0x43177c(0x1ce))[_0x43177c(0x1bf)] < 0x2 ? $(this)['find'](
            _0x43177c(0xce))[_0x43177c(0x104)]() : $(this)[_0x43177c(0x95)](
            '[data-form=\x22remove-clone\x22]')['show']();
    });
}

function cloneRemoveInput() {
    const _0x3f2b6d = _0x29f161;
    $(_0x3f2b6d(0x8b))[_0x3f2b6d(0x1c3)](function() {
        const _0x40daff = _0x3f2b6d;
        console[_0x40daff(0xcc)]($(this)[_0x40daff(0x95)](_0x40daff(0x13e))['length']), $(this)[
            'find'](_0x40daff(0x13e))['length'] < 0x2 ? $(this)['find'](_0x40daff(0xb1))[_0x40daff(
            0x104)]() : $(this)[_0x40daff(0x95)]('[data-form=\x22remove-input-clone\x22]')[
            _0x40daff(0x1ef)]();
    });
}
$('[data-form=\x22remove-clone\x22]')['on'](_0x29f161(0x145),
    function() {
        const _0x5b9abe = _0x29f161,
            _0x235890 = $(this)[_0x5b9abe(0x180)](_0x5b9abe(0x1ce))['length'] > 0x0 ? $(this)['parents']
            ('[data-clone]')[_0x5b9abe(0x103)]() : $(this)[_0x5b9abe(0x180)](_0x5b9abe(0x1a3))[
                _0x5b9abe(0x103)](),
            _0xfd6523 = $(this)[_0x5b9abe(0x180)]('[data-clone]')['length'] > 0x0 ? $(this)[_0x5b9abe(
                0x180)]('[data-clone]')[_0x5b9abe(0x1cb)]('clone') : $(this)[_0x5b9abe(0x180)](
                '[data-display]')[_0x5b9abe(0x1cb)](_0x5b9abe(0xa0));
        $(_0x5b9abe(0x1e9) + _0xfd6523 + '\x22]')['eq'](_0x235890)[_0x5b9abe(0x167)](), $(_0x5b9abe(
            0xd2) + _0xfd6523 + '\x22]')['eq'](_0x235890)['remove'](), cloneRemove();
        let _0x11b136 = $(
                '[data-add-new=\x22' + _0xfd6523 + '\x22]')[_0x5b9abe(0x1cb)]('add-new-limit'),
            _0x3d47c7 = $(_0x5b9abe(0x1e9) + _0xfd6523 + '\x22]')[_0x5b9abe(0x1bf)];
        console[_0x5b9abe(0xcc)](_0x3d47c7, _0x11b136), _0x3d47c7 < _0x11b136 && (console[_0x5b9abe(
                0xcc)](_0x5b9abe(0x1ef)), $(_0x5b9abe(0x15d) + _0xfd6523 + '\x22]')[_0x5b9abe(0x1ef)]()),
            validation();
    }), $('[data-form=\x22remove-input-clone\x22]')['on'](_0x29f161(0x145),
    function() {
        const _0x50c023 = _0x29f161;
        let _0x91dab6 = $(this)['siblings']()['attr'](
                _0x50c023(0x122)),
            _0x48ba88 = $(this)['parents'](_0x50c023(0x13e))[_0x50c023(0x1cb)](_0x50c023(0x16c));
        $(this)[_0x50c023(0x16a)](_0x50c023(0x13e))[_0x50c023(0x167)](), $('[data-input-field=\x22' +
            _0x91dab6 + '\x22]')[_0x50c023(0x16a)](_0x50c023(0x1fc))['remove']();
        let _0x5b494b = $(
                _0x50c023(0x1a8) + _0x48ba88 + '\x22]')[_0x50c023(0x1cb)](_0x50c023(0x189)),
            _0x34c9f7 = $(_0x50c023(0x192) + _0x48ba88 + '\x22]')[_0x50c023(0x1bf)];
        _0x34c9f7 < _0x5b494b && $(_0x50c023(0x1a8) + _0x48ba88 + '\x22]')[_0x50c023(0x1ef)](),
            validation();
    }), $(_0x29f161(0x81))['on']('click', function() {
    const _0x3049bf =
        _0x29f161;
    let _0x446d8e = $(this)[_0x3049bf(0x1cb)](_0x3049bf(0x188)),
        _0x45ae71 = $(this)['data'](_0x3049bf(0x1c7));
    var _0x2c286f = $(_0x3049bf(0x1e9) +
            _0x446d8e + '\x22]')['eq'](0x0)[_0x3049bf(0xc9)](!![]),
        _0x224389 = $(_0x3049bf(0xd2) + _0x446d8e + '\x22]')['eq'](0x0)[_0x3049bf(0xc9)](!![]);
    let
        _0x4869f0 = '';
    $(this)[_0x3049bf(0x95)](_0x3049bf(0xce))[_0x3049bf(0x1ef)](), cloneRemove(), _0x2c286f[
            _0x3049bf(0x95)](_0x3049bf(0x13e))['find'](_0x3049bf(0x16d))['val'](''), _0x2c286f[
            _0x3049bf(0x95)](_0x3049bf(0x13e))[_0x3049bf(0x95)](_0x3049bf(0xf4))['val'](''),
        _0x2c286f['find']('[data-clone-input]')[_0x3049bf(0x95)](_0x3049bf(0x130))['val'](''),
        _0x2c286f['find'](_0x3049bf(0x13e))['not'](':first')['remove'](), _0x2c286f[_0x3049bf(0x95)]
        ('[data-clone-input]')[_0x3049bf(0x95)](_0x3049bf(0xe1))[_0x3049bf(0x145)](), _0x224389[
            _0x3049bf(0x95)]('[data-display-input]')[_0x3049bf(0xc8)](':first')[_0x3049bf(0x167)](),
        _0x2c286f[_0x3049bf(0x95)]('input')[_0x3049bf(0x1c3)](function() {
            const _0x45995d =
                _0x3049bf;
            if ($(this)['closest'](_0x45995d(0x13e))[_0x45995d(0x1bf)] > 0x0) {
                let
                    _0x487ba1 = 0x0;
                const _0x16aa65 = $(this)[_0x45995d(0xa8)](_0x45995d(0x13e))[
                    _0x45995d(0x1cb)]('clone-input');
                $('[data-clone-input=\x22' + _0x16aa65 + _0x45995d(0x7e))[_0x45995d(0x1c3)](
                    function() {
                        const _0x135e12 = _0x45995d,
                            _0x3bdbb2 = $(this)[_0x135e12(0xb6)]('name');
                        if (_0x3bdbb2 && _0x3bdbb2[
                                _0x135e12(0xab)](_0x135e12(0x117))) {
                            const _0x139194 = parseInt(_0x3bdbb2[
                                _0x135e12(0x90)]('-')[0x1]);
                            !isNaN(_0x139194) && _0x139194 > _0x487ba1 && (
                                _0x487ba1 = _0x139194);
                        }
                    }), _0x487ba1++, _0x4869f0 = this[_0x45995d(
                    0x122)] + '-' + _0x487ba1;
            } else _0x4869f0 = this['name'] + '-' + (parseInt($(
                _0x45995d(0x1e9) + _0x446d8e + '\x22]')[_0x45995d(0x106)]()['index']()) + 0x1);
            $(this)[_0x45995d(0x137)](''), $(this)[_0x45995d(0xb6)](_0x45995d(0x122), _0x4869f0), $(
                this)[_0x45995d(0xb6)](_0x45995d(0x11f), _0x4869f0);
        }), _0x2c286f['find'](_0x3049bf(
            0x130))[_0x3049bf(0x1c3)](function() {
            const _0x2d7a70 = _0x3049bf;
            if ($(this)[
                    _0x2d7a70(0xa8)]('[data-clone-input]')['length'] > 0x0) {
                let _0x3f64f2 = 0x0;
                const
                    _0x5e9241 = $(this)[_0x2d7a70(0xa8)](_0x2d7a70(0x13e))[_0x2d7a70(0x1cb)](_0x2d7a70(
                        0x16c));
                $('[data-clone-input=\x22' + _0x5e9241 + _0x2d7a70(0x115))['each'](function() {
                    const
                        _0x40a8cf = _0x2d7a70,
                        _0x139de7 = $(this)[_0x40a8cf(0xb6)]('name');
                    if (_0x139de7 && _0x139de7[
                            _0x40a8cf(0xab)](_0x40a8cf(0x117))) {
                        const _0x2fadfc = parseInt(_0x139de7[
                            _0x40a8cf(0x90)]('-')[0x1]);
                        !isNaN(_0x2fadfc) && _0x2fadfc > _0x3f64f2 && (
                            _0x3f64f2 = _0x2fadfc);
                    }
                }), _0x3f64f2++, _0x4869f0 = this[_0x2d7a70(
                    0x122)] + '-' + _0x3f64f2;
            } else _0x4869f0 = this[_0x2d7a70(0x122)] + '-' + (
                parseInt($(_0x2d7a70(0x1e9) + _0x446d8e + '\x22]')[_0x2d7a70(0x106)]()[_0x2d7a70(
                    0x103)]()) + 0x1);
            $(this)[_0x2d7a70(0x137)](''), $(this)[_0x2d7a70(0xb6)](_0x2d7a70(0x122), _0x4869f0), $(
                this)[_0x2d7a70(0xb6)](_0x2d7a70(0x11f), _0x4869f0);
        }), _0x2c286f[_0x3049bf(0x95)](
            _0x3049bf(0xf4))['each'](function() {
            const _0x3061ff = _0x3049bf;
            if ($(this)['closest']
                (_0x3061ff(0x13e))[_0x3061ff(0x1bf)] > 0x0) {
                let _0x717b14 = 0x0;
                const _0x1b2261 =
                    $(this)[_0x3061ff(0xa8)](_0x3061ff(0x13e))[_0x3061ff(0x1cb)]('clone-input');
                $(_0x3061ff(0x192) + _0x1b2261 + _0x3061ff(0x7b))[_0x3061ff(0x1c3)](
                    function() {
                        const _0x208d7c = _0x3061ff,
                            _0x195b76 = $(this)[_0x208d7c(0xb6)](_0x208d7c(0x122));
                        if (_0x195b76 &&
                            _0x195b76[_0x208d7c(0xab)](_0x208d7c(0x117))) {
                            const _0x269f3b = parseInt(
                                _0x195b76[_0x208d7c(0x90)]('-')[0x1]);
                            !isNaN(_0x269f3b) && _0x269f3b >
                                _0x717b14 && (_0x717b14 = _0x269f3b);
                        }
                    }), _0x717b14++, _0x4869f0 = this[
                    _0x3061ff(0x122)] + '-' + _0x717b14;
            } else _0x4869f0 = this[_0x3061ff(0x122)] +
                '-' + (parseInt($(_0x3061ff(0x1e9) + _0x446d8e + '\x22]')[_0x3061ff(0x106)]()['index']
                    ()) + 0x1);
            $(this)[_0x3061ff(0x137)](''), $(this)[_0x3061ff(0xb6)]('name', _0x4869f0), $(this)[
                _0x3061ff(0xb6)](_0x3061ff(0x11f), _0x4869f0);
        }), _0x224389['find'](_0x3049bf(0x19c))[
            _0x3049bf(0x1c3)](function() {
            const _0x6ccce7 = _0x3049bf;
            if ($(this)['data'](
                    _0x6ccce7(0x1bb))) {
                let _0x1b1b2a = 0x0;
                const _0x4c264e = $(this)[_0x6ccce7(
                    0x1cb)](_0x6ccce7(0x1bb))[_0x6ccce7(0x90)]('-')[0x0];
                $(_0x6ccce7(0xd2) + _0x446d8e + _0x6ccce7(0x1d2) + _0x4c264e + '\x22]')[_0x6ccce7(
                        0x1c3)](function() {
                        const _0x5efe87 = _0x6ccce7,
                            _0x115d83 = $(this)['attr']('data-input-field'),
                            _0x3088d0 = parseInt(_0x115d83[_0x5efe87(0x90)]('-')[0x1]);
                        !isNaN(
                            _0x3088d0) && _0x3088d0 > _0x1b1b2a && (_0x1b1b2a = _0x3088d0);
                    }),
                    _0x1b1b2a++;
                const _0x49a5a4 = _0x4c264e + '-' + _0x1b1b2a;
                $(this)['attr'](_0x6ccce7(0x1e3), _0x49a5a4);
            }
        }), $('[data-clone-wrapper=\x22' +
            _0x446d8e + '\x22]')['append'](_0x2c286f), $(_0x3049bf(0x112) + _0x446d8e + '\x22]')[
            _0x3049bf(0x10a)](_0x224389), $('[data-index=\x22' + _0x446d8e + '\x22]')[_0x3049bf(
            0x1c3)](function() {
            const _0x53940c = _0x3049bf;
            $(this)['text']($(this)[_0x53940c(0x180)](_0x53940c(0x1e9) + _0x446d8e + '\x22]')[
                _0x53940c(0x103)]() + 0x1);
        }), $(_0x3049bf(0x134) + _0x446d8e + '\x22]')['each'](
            function() {
                const _0x38880a = _0x3049bf;
                $(this)[_0x38880a(0x1b7)]($(this)[_0x38880a(0x180)]('[data-display=\x22' + _0x446d8e +
                    '\x22]')[_0x38880a(0x103)]() + 0x1);
            });
    let _0x3a2a7a = $(
        '[data-clone-wrapper=\x22' + _0x446d8e + _0x3049bf(0x17a) + _0x446d8e + '\x22]')[
        _0x3049bf(0x1bf)];
    if (_0x3a2a7a >= _0x45ae71) { $(this)[_0x3049bf(0x104)](); return; }
    $(
        this)['show'](), validation();
}), $('[data-add-new-input]')['on'](_0x29f161(0x145),
    function() {
        const _0x3c6850 = _0x29f161,
            _0x562ade = $(this)[_0x3c6850(0x180)](_0x3c6850(0x1ce))[_0x3c6850(0x103)]();
        let _0x1411b6 =
            $(this)[_0x3c6850(0x1cb)](_0x3c6850(0x1ff));
        var _0x5a8bb6 = $(_0x3c6850(0x192) +
                _0x1411b6 + '\x22]')['eq'](0x0)[_0x3c6850(0xc9)](!![]),
            _0x9fa158 = $('[data-display-input=\x22' + _0x1411b6 + '\x22]')['eq'](0x0)['clone'](!
                ![]);
        let _0x49864a = $(this)[_0x3c6850(0x1cb)](_0x3c6850(0x189)),
            _0x43d5e4 = 0x0;
        $(_0x3c6850(0x192) + _0x1411b6 + '\x22]\x20input')['each'](function() {
            const _0x29ab9a =
                _0x3c6850,
                _0x3e472d = $(this)[_0x29ab9a(0xb6)]('name');
            if (_0x3e472d) {
                const _0x47c750 =
                    parseInt(_0x3e472d[_0x29ab9a(0x90)]('-')[0x1]);
                !isNaN(_0x47c750) && _0x47c750 >
                    _0x43d5e4 && (_0x43d5e4 = _0x47c750);
            }
        }), $(_0x3c6850(0x192) + _0x1411b6 +
            '\x22]\x20select')[_0x3c6850(0x1c3)](function() {
            const _0x387091 = _0x3c6850,
                _0x470ced = $(this)['attr'](_0x387091(0x122));
            if (_0x470ced) {
                const _0x1cdcac =
                    parseInt(_0x470ced[_0x387091(0x90)]('-')[0x1]);
                !isNaN(_0x1cdcac) && _0x1cdcac >
                    _0x43d5e4 && (_0x43d5e4 = _0x1cdcac);
            }
        }), $('[data-clone-input=\x22' + _0x1411b6 +
            _0x3c6850(0x115))['each'](function() {
            const _0x3aff28 = _0x3c6850,
                _0x3748d8 = $(this)[_0x3aff28(0xb6)](_0x3aff28(0x122));
            if (_0x3748d8) {
                const
                    _0x51513f = parseInt(_0x3748d8[_0x3aff28(0x90)]('-')[0x1]);
                !isNaN(_0x51513f) &&
                    _0x51513f > _0x43d5e4 && (_0x43d5e4 = _0x51513f);
            }
        }), _0x43d5e4++, _0x5a8bb6[
            _0x3c6850(0x95)]('input')['each'](function() {
            const _0x21412e = _0x3c6850,
                _0xa3cda8 = $(this)[_0x21412e(0xb6)](_0x21412e(0x122));
            let _0x1211b7 = _0xa3cda8 +
                '-' + _0x43d5e4;
            $(this)[_0x21412e(0x137)](''), $(this)[_0x21412e(0xb6)]('name', _0x1211b7), $(this)[
                _0x21412e(0xb6)](_0x21412e(0x11f), _0x1211b7);
        }), _0x5a8bb6[_0x3c6850(0x95)]('select')[
            'each'](function() {
            const _0xfbff80 = _0x3c6850,
                _0x54c894 = $(this)[_0xfbff80(0xb6)](_0xfbff80(0x122));
            let _0x5355cd = _0x54c894 +
                '-' + _0x43d5e4;
            $(this)[_0xfbff80(0x137)](''), $(this)[_0xfbff80(0xb6)]('name', _0x5355cd), $(this)[
                _0xfbff80(0xb6)](_0xfbff80(0x11f), _0x5355cd);
        }), _0x5a8bb6[_0x3c6850(0x95)](
            'textarea')[_0x3c6850(0x1c3)](function() {
            const _0x32dbaf = _0x3c6850,
                _0x1b853e = $(this)[_0x32dbaf(0xb6)](_0x32dbaf(0x122));
            let _0x534db4 = _0x1b853e +
                '-' + _0x43d5e4;
            $(this)[_0x32dbaf(0x137)](''), $(this)[_0x32dbaf(0xb6)](_0x32dbaf(0x122), _0x534db4), $(
                this)[_0x32dbaf(0xb6)](_0x32dbaf(0x11f), _0x534db4);
        }), _0x9fa158['find'](_0x3c6850(
            0x19c))['each'](function() {
            const _0x999c91 = _0x3c6850;
            $(this)[_0x999c91(0xb6)]('data-input-field', _0x999c91(0x117) + _0x43d5e4);
        }), $(this)[
            _0x3c6850(0xcb)](_0x3c6850(0x113) + _0x1411b6 + '\x22]')['append'](_0x5a8bb6), $(
            _0x3c6850(0x1a3))['eq'](_0x562ade)['find']('[data-display-input-wrapper=\x22' +
            _0x1411b6 + '\x22]')[_0x3c6850(0x10a)](_0x9fa158), $('[data-input-index=\x22' +
            _0x1411b6 + '\x22]')['each'](function() {
            const _0x44eb4f = _0x3c6850;
            $(this)[_0x44eb4f(0x1b7)]($(this)[_0x44eb4f(0x180)]('[data-clone-input=\x22' +
                _0x1411b6 + '\x22]')[_0x44eb4f(0x103)]() + 0x1);
        }), $(_0x3c6850(0xa6) + _0x1411b6 +
            '\x22]')[_0x3c6850(0x1c3)](function() {
            const _0x42a1cb = _0x3c6850;
            $(this)[_0x42a1cb(0x1b7)]($(this)[_0x42a1cb(0x180)](_0x42a1cb(0x1ba) + _0x1411b6 +
                '\x22]')[_0x42a1cb(0x103)]() + 0x1);
        });
        let _0x5ac726 = $(
            '[data-clone-input-wrapper=\x22' + _0x1411b6 + _0x3c6850(0x99) + _0x1411b6 + '\x22]')[
            _0x3c6850(0x1bf)];
        if (_0x5ac726 >= _0x49864a) { $(this)[_0x3c6850(0x104)](); return; }
        $(
            this)[_0x3c6850(0x1ef)](), cloneRemoveInput(), validation();
    }), $(_0x29f161(0x9e))['on'](
    _0x29f161(0x145),
    function() {
        const _0x2792bb = _0x29f161,
            _0x79e715 = $(this)[_0x2792bb(0x1cb)](_0x2792bb(0x1a7));
        $(_0x2792bb(0x1a0) + _0x79e715 + '\x22]')[_0x2792bb(0x137)](''), validation();
    });

function andLogic() {
    const _0x5393d5 = _0x29f161;
    conditionalResult && (steps['eq'](x)[_0x5393d5(0x95)](_0x5393d5(0x13d))[_0x5393d5(0x104)](),
        steps['eq'](x)[_0x5393d5(0x95)](_0x5393d5(0x13d))[_0x5393d5(0x1c3)](function() {
            function _0x3bbd04(_0x4a3349) {
                const _0x133afc = _0x4852,
                    _0x4da089 = _0x4a3349[_0x133afc(0x90)]('&'),
                    _0x1a5a3e = [];
                return _0x4da089[_0x133afc(0x1e8)](_0x1b13eb => {
                    const _0x2cb1e7 =
                        _0x133afc,
                        [_0x3cbfff, _0x4fbb9d] = _0x1b13eb[_0x2cb1e7(0x90)]('=');
                    _0x1a5a3e['push']({ 'field': _0x3cbfff, 'value': _0x4fbb9d });
                }), _0x1a5a3e;
            }
            const
                _0xc36de0 = $(this)['attr']('data-show-if'),
                _0x7bcb89 = _0x3bbd04(_0xc36de0);

            function _0x39488b(_0x2ae49a, _0x370ac0) {
                const _0x4af17b = _0x4852;
                return _0x370ac0[
                    _0x4af17b(0x201)]((_0x1c1c78, _0x33a724) => {
                    const _0x3a7c52 = _0x4af17b;
                    if (
                        _0x2ae49a[0x0] && _0x1c1c78[_0x3a7c52(0xea)] === _0x2ae49a[0x0][_0x3a7c52(0xea)]
                    ) return _0x2ae49a[_0x3a7c52(0xe7)]((_0x2e58d0, _0x28c38a) => _0x370ac0[
                        _0x33a724 + _0x28c38a] && _0x370ac0[_0x33a724 + _0x28c38a][_0x3a7c52(
                        0xea)] === _0x2e58d0[_0x3a7c52(0xea)] && _0x370ac0[_0x33a724 + _0x28c38a][
                        _0x3a7c52(0x150)
                    ] === _0x2e58d0[_0x3a7c52(0x150)]);
                    return ![];
                });
            }
            const _0x380821 = _0x39488b(
                _0x7bcb89, all_data);
            _0x380821 ? $(this)['show']() : $(this)['hide']();
        }));
}
progressiveTarget[_0x29f161(0x142)](
    _0x29f161(0x104)), progressiveInput['on'](_0x29f161(0x16d), function() {
    const _0xb534f4 =
        _0x29f161,
        _0x1b17bb = $(this)[_0xb534f4(0x1cb)](_0xb534f4(0x18b)),
        _0x1fa616 = $(this)[_0xb534f4(0x137)](),
        _0x1ca69e = $(_0xb534f4(0x173))[_0xb534f4(0x95)](_0xb534f4(0x18f) + _0x1b17bb + '\x22]')[
            _0xb534f4(0x1cb)](_0xb534f4(0xc0));
    let _0xf02ac0 = $(_0xb534f4(0x173))[_0xb534f4(0x95)](
            _0xb534f4(0x18f) + _0x1b17bb + _0xb534f4(0xdf) + _0x1fa616 + '\x22]'),
        _0x24b9eb = $(_0xb534f4(0x173))[_0xb534f4(0x95)](_0xb534f4(0x18f) + _0x1b17bb + _0xb534f4(
            0x107));
    $(_0xb534f4(0x173))[_0xb534f4(0x95)]('[data-progressive-target=\x22' + _0x1b17bb + '\x22]')[
        _0xb534f4(0x142)](_0xb534f4(0x104)), $(_0xb534f4(0x173))[_0xb534f4(0x95)](_0xb534f4(
        0x18f) + _0x1b17bb + '\x22]')['removeClass']('show');
    _0x1fa616 !== '' && (_0x1ca69e === '*' && _0x1fa616 !== '' ? (_0x24b9eb[_0xb534f4(0x181)](
        'hide'), _0x24b9eb['addClass']('show')) : (_0xf02ac0['removeClass']('hide'), _0xf02ac0[
        _0xb534f4(0x142)]('show')));

    function _0x4a706e(_0x3be2ca) {
        const _0x38624a = _0xb534f4;
        _0x3be2ca && ($(_0x38624a(0x173))[_0x38624a(0x95)](_0x38624a(0xe0) + _0x3be2ca + '\x22]')[
            'val']() !== '' && $('[data-form=\x22multistep\x22]')[_0x38624a(0x95)](
            '[data-progressive-input=\x22' + _0x3be2ca + '\x22]')[_0x38624a(0x1af)]('input'));
    }
    let
        _0x1c882a = $('[data-form=\x22multistep\x22]')[_0xb534f4(0x95)](
            '[data-progressive-target=\x22' + _0x1b17bb + '\x22]')['find'](
            '[data-progressive-input]')[_0xb534f4(0x1cb)](_0xb534f4(0x18b));
    _0x4a706e(_0x1c882a), $(_0xb534f4(0x173))[_0xb534f4(0x95)](_0xb534f4(0x1c8))[_0xb534f4(0x1c3)]
        (function() {
            const _0x1ec873 = _0xb534f4,
                _0x5008e8 = $(_0x1ec873(0x173))[_0x1ec873(0x95)](this)[_0x1ec873(0x1cb)](
                    'progressive-input');
            $('[data-form=\x22multistep\x22]')[_0x1ec873(0x95)](_0x1ec873(0x18f) + _0x5008e8 +
                '\x22]')[_0x1ec873(0x181)]('show'), $(_0x1ec873(0x173))[_0x1ec873(0x95)](_0x1ec873(
                0x18f) + _0x5008e8 + '\x22]')[_0x1ec873(0x142)](_0x1ec873(0x104));
        });
});

function addClickClass() {
    const _0x1ca7f3 = _0x29f161,
        _0x41ef50 = $(this)[_0x1ca7f3(0x1cb)](_0x1ca7f3(0xd3)),
        _0x4245cb = $(this)[_0x1ca7f3(0xb6)]('name');
    $('input[name=\x22' + _0x4245cb + '\x22]')[_0x1ca7f3(0x16a)]()['removeClass'](_0x41ef50), $(this)[
        'is'](':checked') && $(this)[_0x1ca7f3(0x16a)]()[_0x1ca7f3(0x142)](_0x41ef50);
}
$(_0x29f161(
    0xd5))['on'](_0x29f161(0x169), addClickClass);

function updateCounter(_0x484329) {
    const _0x3e52d2 = _0x29f161;
    var _0x201b28 = new Date(),
        _0x2a8f48 = _0x201b28[_0x3e52d2(0x109)](),
        _0x205298 = btoa(_0x3e52d2(0x14e)),
        _0x3e5941 = btoa(_0x2a8f48[_0x3e52d2(0x1c6)]()),
        _0x3159b5 = getCookie(_0x205298);
    !_0x3159b5 || _0x3159b5 !== _0x3e5941 ? $[_0x3e52d2(0x89)](
        'https://videsigns-staging.co.uk/formly-counter',
        function() {
            const _0x253863 = _0x3e52d2;
            console['log'](_0x253863(0x1f1)), document[_0x253863(0xf2)] = _0x205298 + '=' + _0x3e5941;
        }
    )[_0x3e52d2(0x172)](function(_0x221bd8, _0x1493ec, _0x39ee4) {
        const _0x310081 = _0x3e52d2;
        console[_0x310081(0x1e7)]('Failed\x20to\x20update\x20counter:', _0x39ee4);
    }) : console[
        _0x3e52d2(0xcc)]('Counter\x20already\x20updated\x20for\x20this\x20month.');
}

function getCookie(_0x117fe4) {
    const _0x1d82d3 = _0x29f161;
    var _0x2d1fd8 = null;
    if (document[
            _0x1d82d3(0xf2)] && document[_0x1d82d3(0xf2)] !== '') {
        var _0x355f63 = document[_0x1d82d3(
            0xf2)]['split'](';');
        for (var _0x59623b = 0x0; _0x59623b < _0x355f63[
                'length']; _0x59623b++) {
            var _0x10b0f3 = _0x355f63[_0x59623b][_0x1d82d3(0x1ec)]();
            if (
                _0x10b0f3[_0x1d82d3(0x159)](0x0, _0x117fe4[_0x1d82d3(0x1bf)] + 0x1) === _0x117fe4 + '='
            ) {
                _0x2d1fd8 = decodeURIComponent(_0x10b0f3['substring'](_0x117fe4['length'] +
                    0x1));
                break;
            }
        }
    }
    return _0x2d1fd8;
}
updateCounter(), scrollTop(), cloneRemove(),
    cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x29f161(0x84)][_0x29f161(0x19a)]),
    formlySupportParam = formlyUrlParams[_0x29f161(0xe2)](_0x29f161(0x197)),
    showButton = formlySupportParam === _0x29f161(0x65),
    passIcon = _0x29f161(0x186),
    failIcon = _0x29f161(0xf5);
let isScriptLoaded = !![],
    scriptLocation = _0x29f161(0xb8),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x29f161(0x155) : _0x29f161(0xde),
    resultStatus = _0x29f161(0x1e1),
    scriptSrcAdded = '';

function isElementPresent(_0x26c916, _0x137946) {
    const _0x3b3f17 = _0x29f161;
    return document[
            _0x3b3f17(0x16f)]('[' + _0x137946 + '=\x22' + _0x26c916 + '\x22]') !==
        null;
}
isMultistepAttributePresent = isElementPresent('multistep', 'data-form');
const multistepForm = document[_0x29f161(0x16f)](_0x29f161(0x1ab)),
    formStepLength = multistepForm[_0x29f161(0x198)](_0x29f161(0x119))[_0x29f161(0x1bf)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document['querySelector'](_0x29f161(0x173)),
    nextBtnExist = multistepContainer[_0x29f161(0x16f)](_0x29f161(0x1da)),
    backBtnExist = multistepContainer[_0x29f161(0x16f)](_0x29f161(0x93)),
    submitBtnExist = multistepContainer[_0x29f161(0x16f)](_0x29f161(0x129));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null,
    isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x29f161(0x105)][_0x29f161(0x19d)]() ===
    _0x29f161(0x16d), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x29f161(0x105)][
        _0x29f161(0x19d)
    ]() === _0x29f161(0x16d) && submitBtnExist['type']['toLowerCase']() === 'submit',
    isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x29f161(0x105)][_0x29f161(0x19d)]() ===
    'input';
const checkPowerup = _0x47e02c => document[_0x29f161(0x16f)](_0x47e02c) !== null,
    progressBarAttr = checkPowerup(_0x29f161(0x182)),
    progressIndicatorAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    customProgressAttr = checkPowerup(_0x29f161(0xe6)),
    cardDivAttr = checkPowerup('[data-card=\x22true\x22]'),
    currentStepAttr = checkPowerup(_0x29f161(0xe3)),
    totalStepAttr = checkPowerup(_0x29f161(0x1c2)),
    enterAttr = checkPowerup(_0x29f161(0x92)),
    submitAttr = checkPowerup(_0x29f161(0x183)),
    radioSkipAttr = checkPowerup('[data-radio-skip=\x22true\x22]'),
    customCheckboxAttr = checkPowerup(_0x29f161(0x14f)),
    recapatchaAttr = checkPowerup(_0x29f161(0x14b));
(!isScriptLoaded || scriptLocation !== _0x29f161(0xb8) || !isMultistepAttributePresent || !
    isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) && (resultStatus = _0x29f161(0x1f6));

function isScriptUrlMatch(_0x31fe3e, _0x1fc133) {
    const _0x30ba04 = _0x29f161;
    for (var _0x3cb77d =
            0x0; _0x3cb77d < _0x1fc133[_0x30ba04(0x1bf)]; _0x3cb77d++) {
        if (_0x31fe3e[_0x30ba04(0xbf)](
                _0x1fc133[_0x3cb77d])) return !![];
    }
    return ![];
}
var keywordsToCheck = [_0x29f161(0xf6), _0x29f161(0xf1)],
    scripts = document[_0x29f161(0xf7)](_0x29f161(0x1c9)),
    matchedScripts = [];

function _0x1d56() {
    const _0x3f22a3 = [
        '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'body', 'input[type=\x22checkbox\x22]:not(:checked)',
        ':input[type=\x22checkbox\x22][required]:checked', '[data-input-reveal]',
        'form[data-form=\x22multistep\x22]\x20:input', '[data-clickable]', 'timeZone',
        '8963310awetYg', '\x22]\x20select', 'require', '[data-go-to]', '\x22]\x20input', 'none',
        'Before\x20&lt;/body&gt;\x20tag', '[data-add-new]', '[data-skip-to]',
        '[data-input-field=\x22', 'location', '3WLQDOv', 'submit', '[data-reset-delay]',
        ':input[type=\x22text\x22]', 'post', 'phone-validation', '[data-clone-input-wrapper]',
        'redirect-delay', 'slow', '[data-query-param]', 'width', 'split', 'selection',
        '[data-enter=\x22true\x22]', '[data-form=\x22back-btn\x22]', '[data-hidden-input=\x22',
        'find', 'style', ':input[type=\x22file\x22][required]', 'auto',
        '\x22]\x20[data-clone-input=\x22', '[data-range]:contains(', 'checkbox', 'clickable-all',
        '<br>Data\x20Go\x20To\x20=\x20', '[data-remove-upload]', 'join', 'display', 'radio-skip',
        '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a',
        'select[name=\x22', '\x22][value=\x22', 'keypress', '[data-display-input-index=\x22',
        '<br>Data\x20Answer\x20=\x20', 'closest', 'scroll-top', 'input[autofocus]', 'startsWith',
        '3KRHvaw', ':input[type=\x27radio\x27]:checked', 'appendChild', 'metaKey', 'prop',
        '[data-form=\x22remove-input-clone\x22]', '[data-selected]:checked', 'resolvedOptions',
        'input:radio[name=\x22', 'push', 'attr', 'active-answer-card', 'head', 'select[required]',
        ':input[type=\x22file\x22]', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20',
        'getResponse', 'key', 'dispatchEvent', 'includes', 'progressive-input-value',
        ':input[type=\x22password\x22][required]', 'ix2', 'click-path', ':input[type=\x22email\x22]',
        'quiz', 'success', 'findIndex', 'not', 'clone', 'open', 'siblings', 'log', 'BODY',
        '[data-form=\x22remove-clone\x22]', '[data-max-checkbox]', '6373664PdIFOL',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20',
        '[data-display=\x22', 'click-addclass',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button',
        '[data-click-addclass]', 'input[type=\x22text\x22][required]:visible', '.w-radio-input',
        '[data-count-card]', 'data-go-to', '[data-reinit]', 'card', 'novalidate', 'redirect',
        'Basic\x20(No\x20Formly\x20Logic)', '\x22][data-progressive-input-value=\x22',
        '[data-progressive-input=\x22', '[aria-label=\x22Remove\x20file\x22]', 'get',
        '[data-text=\x22current-step\x22]', 'input[type=\x22radio\x22]:checked',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '[data-form=\x22progress-indicator\x22]', 'every', '18cWytmk', '3573632djvVyT', 'field',
        'data-radio-delay', 'radio', 'preventDefault', '.active-answer-card', '0px',
        ':input[type=\x22checkbox\x22]', 'formly', 'cookie', 'option[value=\x22$(this).val()\x22]',
        'select',
        '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>',
        'videsigns', 'getElementsByTagName', '[data-last-step]', '35%', 'init', 'ms-field',
        '.w-form-formradioinput', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20',
        'textarea[required]', 'ajaxComplete', ':input[type=\x22date\x22]', 'textarea[name=\x22',
        '[data-answer]', 'index', 'hide', 'tagName', 'last',
        '\x22][data-progressive-input-value=\x22*\x22]', '[data-radio-skip]', 'getMonth', 'append',
        'query-param', 'param-analytics', 'new-tab', '[data-selection=\x22',
        'select:not([data-prefill=\x22false\x22])', 'removeItem', 'data-skip-to',
        '[data-display-wrapper=\x22', '[data-clone-input-wrapper=\x22',
        ':input[type=\x22tel\x22][required]', '\x22]\x20textarea', '[data-memory]', 'relationship-',
        ':input[type=\x22date\x22][required]', '[data-form=\x22step\x22]', '1504195cuHSPs',
        'block-domain', 'filter', '[required]', 'userAgent', 'data-name', '0.4', 'select-multiple',
        'name', 'setItem', '[data-select-multiple]', 'f-mySidenav', ':input', 'destroy',
        ':input[type=\x22time\x22]', '[data-form=\x22submit-btn\x22]',
        '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', 'replace',
        'keyCode',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20',
        '_blank', 'AND', 'textarea', 'input[type=\x22checkbox\x22]:visible', 'step',
        '[data-weighted-selection]', '[data-display-index=\x22', ':input[required]', 'now', 'val',
        'select[required]:visible', 'parse', '[data-selection]', 'option[value=\x22', 'reset-delay',
        '[data-show-if]', '[data-clone-input]', ':input[type=\x22checkbox\x22]:checked',
        '[data-success-card]', 'submit-show', 'addClass', 'input:radio[required]', 'test', 'click',
        'href', '54BquDiu',
        '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'max-checkbox', 'go-to', '[data-callback=\x22recaptcha\x22]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20',
        'getElementById', 'counter', '[data-checkbox]', 'value', '[data-text=\x22error-message\x22]',
        'min-character', 'pageLoadTime',
        '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', 'FormlyLogic\x20enabled',
        'innerHTML', '[data-form=\x22submit-btn\x22]:visible', 'answer', 'substring', 'createElement',
        'checked', 'timestamp', '[data-add-new=\x22', '[data-radio-delay]', 'redirect-form-hehexd',
        'label', 'html,\x20body', 'input[type=\x22radio\x22][name=\x22', '671158vRwOqk',
        '[data-btn=\x22reset\x22]', 'inputName', 'conditional-result', 'remove',
        '[data-cms-select=text]', 'change', 'parent', 'offset', 'clone-input', 'input',
        '[data-redirect-delay]', 'querySelector', 'set', 'clickable', 'fail',
        '[data-form=\x22multistep\x22]', 'animate',
        '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20',
        ':input[type=\x22text\x22][required]', 'stopPropagation', 'history',
        '\x22]\x20[data-clone=\x22', 'stringify', 'time-zone', 'padding',
        '[data-selection=\x22other\x22]', 'reset', 'parents', 'removeClass',
        '[data-form=\x22progress\x22]', '[data-submit=\x22true\x22]', 'fadeIn',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20',
        '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>',
        'backTo', 'add-new', 'add-new-input-limit', '[data-form=\x22submit\x22]:visible',
        'progressive-input', 'input[type=\x22checkbox\x22]', 'Please\x20wait...', 'current',
        '[data-progressive-target=\x22', 'script[src=\x22', 'status', '[data-clone-input=\x22',
        '[data-answer=\x22', 'slice', ':input[type=\x22email\x22][required]', 'url', 'formly-support',
        'querySelectorAll', '[data-form-ms=\x22submit-btn\x22]', 'search',
        ':input[type=\x22checkbox\x22][required]', '[data-input-field]', 'toLowerCase',
        '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20',
        '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'input[name=\x22',
        'input[type=\x22radio\x22]', ':input[type=\x22number\x22]', '[data-display]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>',
        'enter', '\x22]:not([data-prefill=\x22false\x22])', 'remove-upload',
        '[data-add-new-input=\x22', 'file', '[data-selection-weight]',
        'form[data-form=\x22multistep\x22]',
        '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>',
        'readystatechange', '[data-cms-select=input]', 'trigger', '[data-input-target]',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'input[type=\x22email\x22]:visible',
        '[data-answer][data-radio-skip]:visible', 'children', 'count-card', 'referrer', 'text',
        ':input[type=\x22url\x22][required]', 'skip-to', '[data-display-input=\x22', 'input-field',
        '[data-form=\x22custom-progress-indicator\x22]', '.w-checkbox-input',
        '[data-form=\x22next-btn\x22][data-submit-show]', 'length', 'input:checkbox',
        '[data-form=\x22step\x22][data-card]', '[data-text=\x22total-steps\x22]', 'each',
        'radio-delay',
        '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20', 'toString',
        'add-new-limit', '[data-progressive-input]:not(:visible)', 'script', '.w-form-done', 'data',
        '[data-btn=\x22edit\x22]', 'required', '[data-clone]', '[data-clickable-all]', 'span',
        ':input[type=\x22time\x22][required]', '\x22]\x20[data-input-field^=\x22',
        '[data-weighted-selection-range]', 'type', 'skipTo', ':checked', 'ctrlKey',
        '[data-custom-error-message]', '[data-radio-skip]:visible', '[data-form=\x22next-btn\x22]',
        'N/A', 'wait', 'css', '1497712znGLMI', 'first', '</strong>', 'PASS',
        ':input[type=\x22url\x22]', 'data-input-field', 'searchParams', '[data-clone-wrapper]',
        'selected', 'error', 'forEach', '[data-clone=\x22', 'disabled', 'last-step', 'trim',
        'w--redirected-checked', ':input[type=\x22number\x22][required]', 'show', 'focus',
        'Counter\x20updated\x20successfully.', '[data-cms-select=cms]', '[data-enter]', 'screen',
        'debug-mode', 'FAIL', '\x22]:checked', 'scroll-top-offset', 'filledInput', 'phone-autoformat',
        ':input[type=\x22radio\x22]', '[data-display-input]', 'Webflow',
        'input[type=\x22checkbox\x22][name=\x22', 'add-new-input', '4529714aenAkN', 'some', 'true',
        '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a',
        'screen-resolution',
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20',
        'formlyLastStep', 'weighted-selection', 'getItem', 'input[type=\x22submit\x22]',
        'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', 'textarea[autofocus]',
        '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        ':focus', 'formlyLastStepAnswer'
    ];
    _0x1d56 = function() { return _0x3f22a3; };
    return _0x1d56();
}
for (var i = 0x0; i < scripts[_0x29f161(0x1bf)]; i++) {
    var scriptSrcs = scripts[i]['src'];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x29f161(0xb5)](scriptSrcs);
}
if (matchedScripts[_0x29f161(0x1bf)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script =
        document[_0x29f161(0x16f)](_0x29f161(0x190) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script['parentNode'][_0x29f161(0x105)] === _0x29f161(0xcd) ?
        _0x29f161(0x80) : 'Inside\x20<head>\x20tag');
} else scriptSrcAdded = _0x29f161(0x6d) +
    failIcon;
const newElement = document[_0x29f161(0x15a)]('div'),
    newStyle = document[_0x29f161(0x15a)](_0x29f161(0x96));
newStyle['innerHTML'] = _0x29f161(0x66), document[_0x29f161(0xb8)]['appendChild'](newStyle);
showButton && document[_0x29f161(0x73)][_0x29f161(0xae)](newElement);
newElement[_0x29f161(0x156)] = _0x29f161(0x148) + formType + _0x29f161(0x1a4) + scriptSrcAdded +
    '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' +
    scriptLocation + _0x29f161(0x14c) + (isMultistepOnFormElement ? passIcon : failIcon) + _0x29f161(
        0x72) + (formStepLength > 0x0 ? passIcon : failIcon) +
    '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20' +
    formStepLength + _0x29f161(0xd1) + (nextBtnExist ? passIcon : failIcon) + _0x29f161(0x176) + (
        isNextBtnOnSubmit ? failIcon : passIcon) + _0x29f161(0x12d) + (backBtnExist ? passIcon :
        failIcon) + _0x29f161(0xd4) + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x29f161(0x185) + (
        backBtnExist ? passIcon : failIcon) + _0x29f161(0x6f) + (isSubmitBtnOnSubmit ? passIcon :
        failIcon) + _0x29f161(0xe5) + (progressBarAttr && progressIndicatorAttr ? _0x29f161(0x1c5) +
        passIcon + '</strong>' : '') + _0x29f161(0x1b1) + (customProgressAttr ? _0x29f161(0x12a) +
        passIcon + _0x29f161(0x1e0) : '') + _0x29f161(0x1b1) + (cardDivAttr ?
        '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20' +
        passIcon + '</strong>' : '') + _0x29f161(0x1b1) + (currentStepAttr ? _0x29f161(0x154) +
        passIcon + _0x29f161(0x1e0) : '') + _0x29f161(0x1b1) + (totalStepAttr ? _0x29f161(0x19e) +
        passIcon + _0x29f161(0x1e0) : '') + _0x29f161(0x1b1) + (enterAttr ?
        '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20' +
        passIcon + '</strong>' : '') + _0x29f161(0x1b1) + (submitAttr ? _0x29f161(0x68) + passIcon +
        '</strong>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (radioSkipAttr ? _0x29f161(0xfd) +
        passIcon + _0x29f161(0x1e0) : '') + _0x29f161(0x1b1) + (customCheckboxAttr ? _0x29f161(0x175) +
        passIcon + '</strong>' : '') + _0x29f161(0x1b1) + (recapatchaAttr ? _0x29f161(0xbb) + passIcon +
        '</strong>' : '') + _0x29f161(0xa2);

function openNav() {
    const _0x5c1e35 = _0x29f161;
    document[_0x5c1e35(0x14d)](_0x5c1e35(0x125))[_0x5c1e35(0x96)]['width'] = _0x5c1e35(0xf9),
        document[_0x5c1e35(0x14d)](_0x5c1e35(0x125))[_0x5c1e35(0x96)][_0x5c1e35(0x17d)] = '12px';
}

function closeNav() {
    const _0x15a1b4 = _0x29f161;
    document['getElementById'](_0x15a1b4(0x125))[_0x15a1b4(0x96)][_0x15a1b4(0x8f)] = '0', document[
        _0x15a1b4(0x14d)]('f-mySidenav')['style'][_0x15a1b4(0x17d)] = _0x15a1b4(0xef);
}