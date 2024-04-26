// 26 April 2024
// Bug fix
// 1. Fixed issue with date input validation

const _0x538941 = _0x5a06;
(function(_0x181235, _0x27aa1f) {
    const _0x6a068d = _0x5a06,
        _0x242a1e = _0x181235();
    while (!![]) {
        try {
            const _0x55628f = parseInt(_0x6a068d(0x101)) / 0x1 * (-parseInt(_0x6a068d(0x200)) / 0x2) + -parseInt(_0x6a068d(0xf6)) / 0x3 + parseInt(_0x6a068d(0xbb)) / 0x4 * (parseInt(_0x6a068d(0x11e)) / 0x5) + parseInt(_0x6a068d(0xb6)) / 0x6 + -parseInt(_0x6a068d(0x202)) / 0x7 + -parseInt(_0x6a068d(0x146)) / 0x8 * (-parseInt(_0x6a068d(0x22e)) / 0x9) + -parseInt(_0x6a068d(0xe1)) / 0xa * (-parseInt(_0x6a068d(0x15b)) / 0xb);
            if (_0x55628f === _0x27aa1f) break;
            else _0x242a1e['push'](_0x242a1e['shift']());
        } catch (_0x214166) { _0x242a1e['push'](_0x242a1e['shift']()); }
    }
}(_0x3cb1, 0xd9279));
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
let form = $(_0x538941(0x205)),
    steps = $(_0x538941(0xa6)),
    progressbarClone = $(_0x538941(0xfb))[_0x538941(0xeb)](),
    progressbar, weightedSelection = $(_0x538941(0xbf))[_0x538941(0x1e2)](_0x538941(0x1b9)),
    weightedSelectionRange = $(_0x538941(0xd2))[_0x538941(0x1e2)](_0x538941(0x1fb)),
    selectMultiple = $(_0x538941(0x1be))[_0x538941(0x1e2)](_0x538941(0x16f)),
    customError = $(_0x538941(0x21a))[_0x538941(0x1e2)](_0x538941(0xdd)),
    reinitIX = $(_0x538941(0x226))[_0x538941(0x1e2)](_0x538941(0x11f)),
    memory = $(_0x538941(0x13e))['data'](_0x538941(0x153)),
    quiz = $('[data-quiz]')['data'](_0x538941(0x1b7));
const urlFormly = new URL(window[_0x538941(0x22c)]['href']);
let _params = $(_0x538941(0x22d))[_0x538941(0x1e2)](_0x538941(0x109)),
    logicExtra = $('[data-form=\x22multistep\x22]')[_0x538941(0x1e2)](_0x538941(0x13f)),
    oldSubmitText = $(_0x538941(0xc4))[_0x538941(0x1de)](),
    oldResetText = $('[data-btn=\x22reset\x22]')['text'](),
    formReset = $(_0x538941(0x205))[_0x538941(0x1e2)](_0x538941(0x10c)),
    resetDelay = $(_0x538941(0x177))[_0x538941(0x1e2)](_0x538941(0x1da)) ? $(_0x538941(0x177))['data'](_0x538941(0x1da)) : 0x7d0,
    redirectDelay = $(_0x538941(0x19f))['data']('redirect-delay') ? $(_0x538941(0x19f))[_0x538941(0x1e2)](_0x538941(0x11b)) : 0x64,
    phoneFormat = $(_0x538941(0x205))[_0x538941(0x1e2)](_0x538941(0x14d)),
    scrollToTop = $(_0x538941(0x205))[_0x538941(0x1e2)](_0x538941(0x15f)),
    trackLastStep = $(_0x538941(0xb0))['data'](_0x538941(0x180)),
    conditionalResult = $(_0x538941(0x191))['data'](_0x538941(0x10f)) === 'AND',
    scrollTopOffset = parseInt($('[data-form=\x22multistep\x22]')[_0x538941(0x1e2)](_0x538941(0x1ad)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON['parse'](localStorage[_0x538941(0xa1)](_0x538941(0x17c))), formlyLastStep = JSON[_0x538941(0xc8)](localStorage[_0x538941(0xa1)]('formlyLastStep')), formlyLastStepAnswer = JSON[_0x538941(0xc8)](localStorage['getItem'](_0x538941(0x1f1)));
let paramUrl = $(_0x538941(0x205))[_0x538941(0x1e2)](_0x538941(0xdc));
const progressiveTarget = $(_0x538941(0x205))[_0x538941(0x199)]('[data-input-target]'),
    progressiveInput = $(_0x538941(0x205))['find'](_0x538941(0x149));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x538941(0x222))[_0x538941(0x104)](function() {
    const _0x4ba48f = _0x538941;
    ogCloneArr[_0x4ba48f(0x165)]({ 'name': $(this)['data'](_0x4ba48f(0xeb)), 'element': $(this)[_0x4ba48f(0xeb)](!![]), 'display': $(_0x4ba48f(0x9c) + $(this)['data'](_0x4ba48f(0xeb)) + '\x22]')['eq'](0x0)[_0x4ba48f(0xeb)](!![]) });
});
const setPageLoadTime = () => {
    const _0x59d98d = _0x538941;
    localStorage[_0x59d98d(0x21d)](_0x59d98d(0x105), Date[_0x59d98d(0x20c)]()[_0x59d98d(0x11c)]());
};
setPageLoadTime();
$(_0x538941(0x148))[_0x538941(0xa4)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x77a0a3) { notRobot = !![]; }($(steps[x])[_0x538941(0x1e2)](_0x538941(0x213)) || $(steps[x])[_0x538941(0x199)]('.active-answer-card')[_0x538941(0x1e2)](_0x538941(0x213))) && (next = !![]);
$(_0x538941(0xd6))[_0x538941(0xa4)] > 0x0 && (countCard = $(_0x538941(0xd6))[_0x538941(0x1e2)]('count-card'));
$('[data-text=\x22error-message\x22]')['hide'](), $(progressbarClone)[_0x538941(0x8f)](_0x538941(0x1d1)), $(_0x538941(0x163))[_0x538941(0x114)]()['remove'](), $('[data-form=\x22submit-btn\x22]')[_0x538941(0x158)](), $(_0x538941(0x91))['hide'](), steps[_0x538941(0x104)](function() {
    const _0x8981e4 = _0x538941;
    $(_0x8981e4(0x163))[_0x8981e4(0xdf)](progressbarClone['clone'](!![], !![]));
}), $(_0x538941(0x20d))['hide']();
countCard ? (curStep = curStep + 0x1, totalSteps = steps['length'], $(_0x538941(0xa5))[_0x538941(0xff)](totalSteps)) : ($(steps[x])['data'](_0x538941(0x213)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x538941(0x1fa))[_0x538941(0xa4)], $(_0x538941(0xa5))[_0x538941(0xff)](totalSteps), $(_0x538941(0xa3))['each'](function() {
    const _0x596ac7 = _0x538941;
    $($(_0x596ac7(0xfb))[$(this)[_0x596ac7(0x194)]()])['hide']();
}));
progressbar = $('[data-form=\x22progress\x22]')[_0x538941(0x114)](), $('[data-form=\x22progress-indicator\x22]')['on'](_0x538941(0x1bf), clickableIndicator), $(_0x538941(0xb3))[_0x538941(0xff)](curStep), steps[_0x538941(0x158)](), $('[data-success-card]')['hide'](), $(_0x538941(0x1b0))['each'](function() {
    const _0x4f07be = _0x538941;
    $(this)[_0x4f07be(0xd5)](_0x4f07be(0x1eb), _0x4f07be(0x113));
});

function getParams() {
    const _0xf96c9c = _0x538941;
    urlFormly['searchParams'][_0xf96c9c(0x1fd)](function(_0x3ffdb3, _0x14ff37) {
        const _0xaebc6c = _0xf96c9c;
        searchQ[_0xaebc6c(0x165)]({ 'val': _0x3ffdb3, 'key': _0x14ff37 });
    });
}

function getSafe(_0x431edf, _0x343c9a) { try { return _0x431edf(); } catch (_0x53a0ca) { return _0x343c9a; } }

function phoneAutoFormat(_0x17f8a9) {
    var _0xbe8591 = '';
    return function(_0x101e83) {
        const _0x382e7c = _0x5a06;
        var _0x8da41a = '',
            _0x45b4a9 = _0x101e83['replace'](/\D/g, ''),
            _0x1285d6 = 0x0,
            _0x387916 = 0x0;
        while (_0x1285d6 < _0x45b4a9[_0x382e7c(0xa4)] && _0x387916 < _0x17f8a9[_0x382e7c(0xa4)]) { _0x17f8a9[_0x387916] === 'x' ? (_0x8da41a += _0x45b4a9[_0x1285d6], _0x1285d6++) : _0x8da41a += _0x17f8a9[_0x387916], _0x387916++; }
        if (_0x101e83['length'] < _0xbe8591['length']) {
            var _0x138fcf = _0x17f8a9[_0x382e7c(0x137)](_0x387916);
            _0x8da41a += _0x138fcf[_0x382e7c(0x13d)](/x/g, '');
        }
        return _0xbe8591 = _0x8da41a, _0x8da41a;
    };
}

function validateURL(_0x463ca8) { const _0x2115a2 = _0x538941; return urlPattern[_0x2115a2(0x12d)](_0x463ca8) ? !![] : ![]; }
quiz && steps[_0x538941(0x104)](function() {
    const _0x132874 = _0x538941;
    $(this)[_0x132874(0x114)]()[_0x132874(0xd5)](_0x132874(0x12b), !![]), $(this)[_0x132874(0x114)]()['attr'](_0x132874(0x207), 0xfa);
});

function disableBtn(_0x52e435) {
    const _0x3874d9 = _0x538941;
    fill = ![], !customError && ($('[data-form=\x22next-btn\x22]')['css']({ 'opacity': _0x3874d9(0x22b), 'pointer-events': _0x3874d9(0xe7) }), $('[data-form=\x22next-btn\x22]')[_0x3874d9(0x230)]('disabled'), $(_0x3874d9(0xc4))['css']({ 'opacity': _0x3874d9(0x22b), 'pointer-events': 'none' }), $(_0x3874d9(0xc4))[_0x3874d9(0x230)](_0x3874d9(0x196)), $(_0x3874d9(0x91))[_0x3874d9(0x1f3)]({ 'opacity': _0x3874d9(0x22b), 'pointer-events': _0x3874d9(0xe7) }), $(_0x3874d9(0x91))[_0x3874d9(0x230)](_0x3874d9(0x196)));
}

function enableBtn() {
    const _0x273a9c = _0x538941;
    fill = !![], $(_0x273a9c(0x17b))[_0x273a9c(0x1f3)]({ 'pointer-events': _0x273a9c(0x1e6), 'opacity': '1' }), $(_0x273a9c(0x17b))['removeClass']('disabled'), $('[data-form=\x22submit-btn\x22]')['css']({ 'pointer-events': _0x273a9c(0x1e6), 'opacity': '1' }), $(_0x273a9c(0xc4))[_0x273a9c(0x8f)](_0x273a9c(0x196)), $('[data-form-ms=\x22submit-btn\x22]')['css']({ 'pointer-events': _0x273a9c(0x1e6), 'opacity': '1' }), $(_0x273a9c(0x91))[_0x273a9c(0x8f)]('disabled');
}

function saveLastAnswer(_0x324b64) {
    const _0x388b43 = _0x538941;
    localStorage[_0x388b43(0x154)](_0x388b43(0x1f1)), localStorage[_0x388b43(0x21d)]('formlyLastStepAnswer', JSON[_0x388b43(0x14c)](_0x324b64));
}

function saveFilledInput() {
    const _0x269c61 = _0x538941;
    $('form[data-form=\x22multistep\x22]\x20:input')[_0x269c61(0xd3)](_0x269c61(0x183))[_0x269c61(0x104)](function() {
        const _0x48eac2 = _0x269c61;
        $(this)['attr']('type') === 'checkbox' || $(this)['attr'](_0x48eac2(0x1eb)) === _0x48eac2(0x124) ? $(this)['prop']('checked') && (filledInput[_0x48eac2(0x1a9)](_0x1dcc12 => _0x1dcc12['inputName'] === $(this)[_0x48eac2(0xd5)](_0x48eac2(0x228))) ? (filledInput = filledInput[_0x48eac2(0x19c)](_0x2af68a => _0x2af68a[_0x48eac2(0x189)] !== $(this)['attr'](_0x48eac2(0x228))), $(this)[_0x48eac2(0x1de)]() !== '' && filledInput[_0x48eac2(0x165)]({ 'inputName': $(this)['attr'](_0x48eac2(0x228)), 'value': $(this)[_0x48eac2(0x1de)]() })) : $(this)[_0x48eac2(0x1de)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x48eac2(0xd5)](_0x48eac2(0x228)), 'value': $(this)[_0x48eac2(0x1de)]() })) : filledInput[_0x48eac2(0x1a9)](_0x169ebf => _0x169ebf[_0x48eac2(0x189)] === $(this)['attr'](_0x48eac2(0x228))) ? (filledInput = filledInput[_0x48eac2(0x19c)](_0x3faa81 => _0x3faa81[_0x48eac2(0x189)] !== $(this)[_0x48eac2(0xd5)](_0x48eac2(0x228))), $(this)[_0x48eac2(0x1de)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x48eac2(0xd5)](_0x48eac2(0x228)), 'value': $(this)[_0x48eac2(0x1de)]() })) : $(this)[_0x48eac2(0x1de)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x48eac2(0xd5)]('name'), 'value': $(this)['val']() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x269c61(0x154)]('formlyLastStep'), localStorage['setItem'](_0x269c61(0xcd), lastStep)), localStorage[_0x269c61(0x154)]('filledInput'), localStorage[_0x269c61(0x21d)](_0x269c61(0x17c), JSON[_0x269c61(0x14c)](filledInput));
}

function scrollTop() {
    const _0x40664e = _0x538941;
    scrollToTop && $(_0x40664e(0x1b2))[_0x40664e(0x110)]({ 'scrollTop': $(_0x40664e(0x205))[_0x40664e(0x157)]()['top'] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x393caa) {
    const _0x4f0a88 = _0x538941;
    var _0x1a0cb5 = window[_0x4f0a88(0x22c)][_0x4f0a88(0xf7)],
        _0xe8ba = new URLSearchParams(window[_0x4f0a88(0x22c)][_0x4f0a88(0xc7)]);
    _0xe8ba['set'](_0x4f0a88(0x1a5), _0x393caa);
    var _0x48af78 = _0x1a0cb5[_0x4f0a88(0x225)]('?')[0x0] + '?' + _0xe8ba['toString']();
    window[_0x4f0a88(0x22f)][_0x4f0a88(0x120)]({}, '', _0x48af78);
}

function updateStep() {
    const _0x5341c8 = _0x538941;
    scrollTop(), skip = ![], $(_0x5341c8(0x1ed))[_0x5341c8(0x8f)](_0x5341c8(0x196));
    $(_0x5341c8(0xef))[_0x5341c8(0x1e2)]('clickable') && (steps[_0x5341c8(0x199)](_0x5341c8(0x1ff))['each'](function() {
        const _0x24abbe = _0x5341c8;
        $($(_0x24abbe(0x1ed))[$(this)['parents']('[data-form=\x22step\x22]')[_0x24abbe(0x194)]()]), $(this)[_0x24abbe(0x1de)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $('input[type=\x22submit\x22]')['addClass'](_0x5341c8(0x196)) : $(_0x5341c8(0x90))['removeClass']('disabled'));
    $('[data-form=\x22custom-progress-indicator\x22]')[_0x5341c8(0x8f)](_0x5341c8(0x1d1)), $(_0x5341c8(0x1ed))[_0x5341c8(0x230)]('disabled'), $($('[data-form=\x22custom-progress-indicator\x22]')[x])[_0x5341c8(0x230)](_0x5341c8(0x1d1)), selection = selections[_0x5341c8(0x19c)](_0x4a2fbc => _0x4a2fbc[_0x5341c8(0x1a5)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x5341c8(0x1b3)]) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x5341c8(0x188))[_0x5341c8(0x158)](), steps[_0x5341c8(0x158)]();
    reinitIX === !![] && window[_0x5341c8(0x14e)][_0x5341c8(0x1cf)]();
    $(progressbar)[_0x5341c8(0x8f)]('current');
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])[_0x5341c8(0x230)](_0x5341c8(0x1d1)) : !$(steps[i])[_0x5341c8(0x1e2)]('card') && $(progressbar[i])['addClass'](_0x5341c8(0x1d1)); }
    reinitIX === !![] ? (window[_0x5341c8(0x14e)] && window[_0x5341c8(0x14e)][_0x5341c8(0x1a0)](_0x5341c8(0x164))[_0x5341c8(0x99)](), document[_0x5341c8(0x155)](new Event(_0x5341c8(0x181))), $(steps[x])['show']()) : $(steps[x])[_0x5341c8(0x1f7)](_0x5341c8(0xbe));
    $('.active-answer-card')[_0x5341c8(0x8f)](_0x5341c8(0xed));
    x === 0x0 && !$(steps[x])[_0x5341c8(0x1e2)]('card') && ($(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x188))[_0x5341c8(0xe9)](), $(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x188))['addClass'](_0x5341c8(0xed)));
    selection[_0x5341c8(0xa4)] > 0x0 ? ($(steps[x])['find'](_0x5341c8(0x16c) + selection[0x0][_0x5341c8(0x12e)] + '\x22]')[_0x5341c8(0xe9)](), $(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x16c) + selection[0x0][_0x5341c8(0x12e)] + '\x22]')[_0x5341c8(0x230)](_0x5341c8(0xed))) : ($(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x16c) + answer + '\x22]')[_0x5341c8(0xe9)](), $(steps[x])[_0x5341c8(0x199)]('[data-answer=\x22' + answer + '\x22]')[_0x5341c8(0x230)](_0x5341c8(0xed)));
    if (x === 0x0) $('[data-form=\x22back-btn\x22]')[_0x5341c8(0x158)](), $(_0x5341c8(0x17b))[_0x5341c8(0xe9)](), $('[data-form=\x22submit-btn\x22]')['hide']();
    else {
        if (x === steps[_0x5341c8(0xa4)] - 0x1 || $(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x145))['length'] > 0x0) {
            $('[data-form=\x22next-btn\x22]')['hide']();
            if ($(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x121))[_0x5341c8(0x1e2)](_0x5341c8(0x1f2))) $(steps[x])['find'](_0x5341c8(0x121))['show']();
            else $(_0x5341c8(0x17b))[_0x5341c8(0x1e2)]('submit-show') && $(_0x5341c8(0x17b))[_0x5341c8(0xe9)]();
            $(_0x5341c8(0xc4))[_0x5341c8(0xe9)](), $(_0x5341c8(0x91))[_0x5341c8(0xe9)](), $('[data-form=\x22back-btn\x22]')[_0x5341c8(0xe9)]();
        } else $(_0x5341c8(0x17b))[_0x5341c8(0xe9)](), $(_0x5341c8(0x170))[_0x5341c8(0xe9)](), $(_0x5341c8(0xc4))['hide'](), $(_0x5341c8(0x91))[_0x5341c8(0x158)]();
    }
    $($(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x1b4))[0x0])[_0x5341c8(0x1ef)](), $($(steps[x])[_0x5341c8(0x199)](_0x5341c8(0x152))[0x0])[_0x5341c8(0x1ef)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x5341c8(0x1ed))[idx])[_0x5341c8(0x8f)](_0x5341c8(0x196)); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x23ad04, _0x5a2fe3, _0x275cd3) {
    const _0xc9dc10 = _0x538941;
    let _0x22379a = _0x23ad04[_0xc9dc10(0xf4)]('@') ? _0x23ad04['split']('@')[0x1][_0xc9dc10(0x225)]('.')[0x0] : [];
    dom = [];
    _0x5a2fe3 !== undefined && _0x5a2fe3[_0xc9dc10(0x225)](',')[_0xc9dc10(0x1fd)](function(_0x294c37) {
        const _0x36ee51 = _0xc9dc10;
        _0x294c37[_0x36ee51(0xf4)](_0x22379a) && dom['push'](_0x22379a);
    });
    dom[_0xc9dc10(0xa4)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0xb8e6dd = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0xb8e6dd['test'](_0x23ad04) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0xc9dc10(0x165)]({ 'input': _0x275cd3 })) : emailFilled = !![];
}

function phoneValidation(_0x2d7e4d, _0x136296, _0x3544f5) {
    if (phoneFormat) return _0x136296 >= _0x3544f5 ? !![] : ![];
    else { if (_0x136296 >= _0x3544f5) return !![]; }
}

function validation() {
    const _0x5df9d2 = _0x538941;
    $(steps[x])[_0x5df9d2(0x1e2)](_0x5df9d2(0x213)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x5df9d2(0x199)]('textarea[required]:visible')['length'], textInputLength = $(steps[x])['find']('input[type=\x22text\x22][required]:visible')[_0x5df9d2(0xa4)], selectInputLength = $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1c4))[_0x5df9d2(0xa4)], emailInputLength = $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1db))['length'], checkboxInputLength = $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x143))[_0x5df9d2(0xa4)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x5df9d2(0x1e2)](_0x5df9d2(0x1d3)) ? $(steps[x])[_0x5df9d2(0x1e2)]('checkbox') : $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1e9))[_0x5df9d2(0xa4)] > 0x0 ? $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1e9))['data'](_0x5df9d2(0x1d3)) : 0x0, maxCheckCount = $(steps[x])[_0x5df9d2(0x1e2)](_0x5df9d2(0xe5)) ? $(steps[x])[_0x5df9d2(0x1e2)]('max-checkbox') : $(steps[x])['find'](_0x5df9d2(0x10b))[_0x5df9d2(0xa4)] > 0x0 ? $(steps[x])[_0x5df9d2(0x199)]('[data-max-checkbox]')[_0x5df9d2(0x1e2)](_0x5df9d2(0xe5)) : 0x0;
    if (!logicExtra) {
        let _0x1e2f9f = $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x131)),
            _0x3e709e = _0x1e2f9f[_0x5df9d2(0x19c)](_0x5df9d2(0xad)),
            _0x47fcf6 = _0x1e2f9f[_0x5df9d2(0x19c)](_0x5df9d2(0x216));
        _0x1e2f9f[_0x5df9d2(0xa4)] > 0x0 && (checkCount === '*' || checkCount > _0x1e2f9f[_0x5df9d2(0xa4)] ? _0x1e2f9f['each'](function() {
            const _0x5da033 = _0x5df9d2;
            $(this)['is'](_0x5da033(0x216)) ? (checkboxFilled = !![], resetInputErrorMessage($(this)['attr'](_0x5da033(0x228)))) : (checkboxFilled = ![], unfilledArr['push']({ 'input': $(this)['attr']('name') }));
        }) : _0x47fcf6[_0x5df9d2(0xa4)] >= checkCount ? _0x3e709e[_0x5df9d2(0xa4)] > 0x0 ? _0x3e709e[_0x5df9d2(0xa4)] === _0x47fcf6[_0x5df9d2(0xa4)] ? (checkboxFilled = !![], resetInputErrorMessage(_0x3e709e[_0x5df9d2(0xca)]()[_0x5df9d2(0xd5)](_0x5df9d2(0x228)))) : (checkboxFilled = ![], _0x3e709e[_0x5df9d2(0xd3)](':checked')[_0x5df9d2(0x104)](function() {
            const _0x281c07 = _0x5df9d2;
            unfilledArr[_0x281c07(0x165)]({ 'input': $(this)[_0x281c07(0xd5)](_0x281c07(0x228)) });
        })) : _0x47fcf6['length'] < maxCheckCount ? ($(steps[x])[_0x5df9d2(0x199)]('input[type=\x22checkbox\x22]')[_0x5df9d2(0x9a)](_0x5df9d2(0x196), ![]), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x132))['parent']('label')[_0x5df9d2(0x8f)]('disabled')) : ($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1c1))[_0x5df9d2(0x14a)](_0x5df9d2(0xe4))[_0x5df9d2(0x230)](_0x5df9d2(0x196)), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1c1))['prop'](_0x5df9d2(0x196), !![])) : (checkboxFilled = ![], _0x3e709e[_0x5df9d2(0xd3)](_0x5df9d2(0x216))[_0x5df9d2(0x104)](function() {
            const _0x415c5c = _0x5df9d2;
            unfilledArr[_0x415c5c(0x165)]({ 'input': $(this)['attr']('name') });
        }), unfilledArr[_0x5df9d2(0x165)]({ 'input': _0x1e2f9f[_0x5df9d2(0xca)]()[_0x5df9d2(0xd5)](_0x5df9d2(0x228)) }))), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x9f))[_0x5df9d2(0x104)](function(_0x317415) {
            const _0x429662 = _0x5df9d2;
            var _0x318cec = $(this)[_0x429662(0xd5)]('name');
            $(_0x429662(0x9d) + _0x318cec + _0x429662(0x134))[_0x429662(0xa4)] == 0x0 ? (!empReqRadio[_0x429662(0x199)](_0x51e877 => _0x51e877[_0x429662(0x1ab)] === _0x317415) && empReqRadio['push']({ 'input': _0x317415 }), unfilledArr[_0x429662(0x165)]({ 'input': $(this)[_0x429662(0xd5)](_0x429662(0x228)) })) : empReqRadio = empReqRadio[_0x429662(0x19c)](_0x125072 => _0x125072[_0x429662(0x1ab)] !== _0x317415), empReqRadio['length'] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x21f))[_0x5df9d2(0x104)](function(_0x3a7579) {
            const _0x158678 = _0x5df9d2;
            let _0x8fd953 = $(this)['val']()[_0x158678(0xa4)],
                _0x58769f = $(this)['data']('min-character') ? $(this)[_0x158678(0x1e2)](_0x158678(0x1ac)) : 0x0;
            $(this)['val']() !== '' && _0x8fd953 >= _0x58769f ? empReqInput = empReqInput['filter'](_0x5931f1 => _0x5931f1[_0x158678(0x1ab)] !== _0x3a7579) : (!empReqInput[_0x158678(0x199)](_0x58d314 => _0x58d314['input'] === _0x3a7579) && empReqInput[_0x158678(0x165)]({ 'input': _0x3a7579 }), unfilledArr['push']({ 'input': $(this)['attr']('name') })), empReqInput[_0x158678(0xa4)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find'](_0x5df9d2(0xce))[_0x5df9d2(0x104)](function(_0x18ab9c) {
            const _0x518975 = _0x5df9d2;
            let _0x99b24c = $(this)[_0x518975(0x1de)]()[_0x518975(0xa4)],
                _0x25355d = $(this)[_0x518975(0x1e2)](_0x518975(0x1ac)) ? $(this)[_0x518975(0x1e2)](_0x518975(0x1ac)) : 0x0;
            $(this)[_0x518975(0x1de)]() !== '' && _0x99b24c >= _0x25355d ? empReqPassword = empReqPassword['filter'](_0x153a44 => _0x153a44['input'] !== _0x18ab9c) : (!empReqPassword[_0x518975(0x199)](_0xfa1f48 => _0xfa1f48[_0x518975(0x1ab)] === _0x18ab9c) && empReqPassword['push']({ 'input': _0x18ab9c }), unfilledArr[_0x518975(0x165)]({ 'input': $(this)[_0x518975(0xd5)]('name') })), empReqPassword[_0x518975(0xa4)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x139))[_0x5df9d2(0x104)](function(_0x41f69d) {
            const _0x251565 = _0x5df9d2;
            let _0x445020 = $(this)['val']()[_0x251565(0xa4)],
                _0x3b7621 = $(this)[_0x251565(0x1e2)](_0x251565(0x1ac)) ? $(this)[_0x251565(0x1e2)](_0x251565(0x1ac)) : 0x0;
            $(this)[_0x251565(0x1de)]() !== '' && _0x445020 >= _0x3b7621 ? empReqUrl = empReqUrl[_0x251565(0x19c)](_0x50788c => _0x50788c['input'] !== _0x41f69d) : (!empReqTime[_0x251565(0x199)](_0x3375aa => _0x3375aa['input'] === _0x41f69d) && empReqUrl['push']({ 'input': _0x41f69d }), unfilledArr[_0x251565(0x165)]({ 'input': $(this)[_0x251565(0xd5)](_0x251565(0x228)) })), empReqUrl[_0x251565(0xa4)] === 0x0 && validateURL($(this)[_0x251565(0x1de)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](':input[type=\x22time\x22][required]')[_0x5df9d2(0x104)](function(_0x385832) {
            const _0x2a137b = _0x5df9d2;
            let _0x12bff9 = $(this)['val']()['length'],
                _0x14da7e = $(this)[_0x2a137b(0x1e2)](_0x2a137b(0x1ac)) ? $(this)['data'](_0x2a137b(0x1ac)) : 0x0;
            $(this)['val']() !== '' && _0x12bff9 >= _0x14da7e ? empReqTime = empReqTime[_0x2a137b(0x19c)](_0x2556f7 => _0x2556f7[_0x2a137b(0x1ab)] !== _0x385832) : (!empReqTime[_0x2a137b(0x199)](_0x278477 => _0x278477['input'] === _0x385832) && empReqTime[_0x2a137b(0x165)]({ 'input': _0x385832 }), unfilledArr[_0x2a137b(0x165)]({ 'input': $(this)['attr']('name') })), empReqTime[_0x2a137b(0xa4)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0xda))[_0x5df9d2(0x104)](function(_0x57de26) {
            const _0xf0b373 = _0x5df9d2;
            $(this)['val']() !== '' ? empReqDate = empReqDate[_0xf0b373(0x19c)](_0x455b85 => _0x455b85[_0xf0b373(0x1ab)] !== _0x57de26) : (!empReqDate['find'](_0x3e7420 => _0x3e7420[_0xf0b373(0x1ab)] === _0x57de26) && empReqDate[_0xf0b373(0x165)]({ 'input': _0x57de26 }), unfilledArr[_0xf0b373(0x165)]({ 'input': $(this)[_0xf0b373(0xd5)]('name') })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1a2))[_0x5df9d2(0x104)](function(_0x4a9747) {
            const _0x3bf9ec = _0x5df9d2;
            if ($(this)[_0x3bf9ec(0x1de)]() !== '') {
                let _0xaa4944 = $(this)[_0x3bf9ec(0x1de)]()[_0x3bf9ec(0xa4)],
                    _0x4f5acb = $(this)[_0x3bf9ec(0x1e2)](_0x3bf9ec(0x1ac)) ? $(this)[_0x3bf9ec(0x1e2)]('min-character') : 0x0;
                if ($(this)[_0x3bf9ec(0x1e2)](_0x3bf9ec(0x1c8))) {
                    var _0x440c35 = phoneAutoFormat($(this)[_0x3bf9ec(0x1e2)]('phone-autoformat'));
                    $(this)[_0x3bf9ec(0x1de)](_0x440c35($(this)['val']()));
                }
                phoneValidation($(this)[_0x3bf9ec(0x1de)](), _0xaa4944, _0x4f5acb) ? empReqTel = empReqTel[_0x3bf9ec(0x19c)](_0x104159 => _0x104159[_0x3bf9ec(0x1ab)] !== _0x4a9747) : empReqTel[_0x3bf9ec(0x165)]({ 'input': _0x4a9747 });
            } else !empReqTel[_0x3bf9ec(0x199)](_0x466d2b => _0x466d2b['input'] === _0x4a9747) && empReqTel['push']({ 'input': _0x4a9747 }), unfilledArr[_0x3bf9ec(0x165)]({ 'input': $(this)[_0x3bf9ec(0xd5)](_0x3bf9ec(0x228)) });
            empReqTel[_0x3bf9ec(0xa4)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])['find'](_0x5df9d2(0x1df))[_0x5df9d2(0x104)](function(_0x1094c8) {
            const _0x5814af = _0x5df9d2;
            $(this)['val']() !== '' ? empReqFile = empReqFile['filter'](_0x1c6fb8 => _0x1c6fb8[_0x5814af(0x1ab)] !== _0x1094c8) : (!empReqFile[_0x5814af(0x199)](_0x4e55cd => _0x4e55cd[_0x5814af(0x1ab)] === _0x1094c8) && empReqFile[_0x5814af(0x165)]({ 'input': _0x1094c8 }), unfilledArr['push']({ 'input': $(this)[_0x5814af(0xd5)](_0x5814af(0x228)) })), empReqFile[_0x5814af(0xa4)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x19b))[_0x5df9d2(0x104)](function(_0x4412f0) {
            const _0x32e4e1 = _0x5df9d2;
            let _0x4bd504 = $(this)['val']()[_0x32e4e1(0xa4)],
                _0x4cc763 = $(this)[_0x32e4e1(0x1e2)](_0x32e4e1(0x1ac)) ? $(this)['data'](_0x32e4e1(0x1ac)) : 0x0;
            $(this)[_0x32e4e1(0x1de)]() !== '' && _0x4bd504 >= _0x4cc763 ? empReqNum = empReqNum[_0x32e4e1(0x19c)](_0x258fb6 => _0x258fb6[_0x32e4e1(0x1ab)] !== _0x4412f0) : (!empReqNum[_0x32e4e1(0x199)](_0x5d9609 => _0x5d9609['input'] === _0x4412f0) && empReqNum[_0x32e4e1(0x165)]({ 'input': _0x4412f0 }), unfilledArr['push']({ 'input': $(this)[_0x32e4e1(0xd5)](_0x32e4e1(0x228)) })), empReqNum[_0x32e4e1(0xa4)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x195))[_0x5df9d2(0x104)](function(_0x5066c9) {
            const _0x433ac9 = _0x5df9d2;
            let _0x3377d6 = $(this)[_0x433ac9(0x1de)]();
            _0x3377d6 === '' && (_0x3377d6 = null), _0x3377d6 != null ? empReqSelect = empReqSelect['filter'](_0x12ab9b => _0x12ab9b[_0x433ac9(0x1ab)] !== _0x5066c9) : (!empReqSelect['find'](_0x3f6fe6 => _0x3f6fe6[_0x433ac9(0x1ab)] === _0x5066c9) && empReqSelect[_0x433ac9(0x165)]({ 'input': _0x5066c9 }), unfilledArr[_0x433ac9(0x165)]({ 'input': $(this)[_0x433ac9(0xd5)](_0x433ac9(0x228)) })), empReqSelect[_0x433ac9(0xa4)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x95))[_0x5df9d2(0x104)](function(_0x27f8ac) {
            const _0x1f13a5 = _0x5df9d2;
            let _0x5081c4 = $(this)['val']()[_0x1f13a5(0xa4)],
                _0x300c08 = $(this)['data'](_0x1f13a5(0x1ac)) ? $(this)[_0x1f13a5(0x1e2)](_0x1f13a5(0x1ac)) : 0x0;
            $(this)['val']() !== '' && _0x5081c4 >= _0x300c08 ? empReqTextarea = empReqTextarea['filter'](_0x129f3b => _0x129f3b[_0x1f13a5(0x1ab)] !== _0x27f8ac) : (!empReqTextarea['find'](_0x2bc03f => _0x2bc03f[_0x1f13a5(0x1ab)] === _0x27f8ac) && empReqTextarea['push']({ 'input': _0x27f8ac }), unfilledArr[_0x1f13a5(0x165)]({ 'input': $(this)[_0x1f13a5(0xd5)]('name') })), empReqTextarea[_0x1f13a5(0xa4)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10a))[_0x5df9d2(0x104)](function() {
            const _0x582596 = _0x5df9d2;
            $(this)['val']() !== '' ? validateEmail($(this)[_0x582596(0x1de)](), $(this)[_0x582596(0x1e2)](_0x582596(0x119)), $(this)[_0x582596(0xd5)](_0x582596(0x228))) : (emailFilled = ![], unfilledArr[_0x582596(0x165)]({ 'input': $(this)[_0x582596(0xd5)](_0x582596(0x228)) }));
        });
    } else {
        if ($(steps[x])['data'](_0x5df9d2(0x213))) answer = $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x186))[_0x5df9d2(0x1e2)]('go-to'), selections = selections[_0x5df9d2(0x19c)](_0x1c99e3 => _0x1c99e3[_0x5df9d2(0x1a5)] !== x), selections[_0x5df9d2(0x165)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])['find'](_0x5df9d2(0x10d))[_0x5df9d2(0x1e2)]('card') && (answer = $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x1e2)](_0x5df9d2(0x1aa)), selections = selections['filter'](_0x57c39a => _0x57c39a['step'] !== x), selections[_0x5df9d2(0x165)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x1e4))['is'](_0x5df9d2(0x210))) {
            if (checkCount === '*' || checkCount > $(steps[x])['find'](_0x5df9d2(0x131))['length']) $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x131))[_0x5df9d2(0x104)](function() {
                const _0x2e9514 = _0x5df9d2;
                if ($(this)['is'](_0x2e9514(0x216))) {
                    if ($(steps[x])[_0x2e9514(0x199)](_0x2e9514(0x1ff))[_0x2e9514(0xa4)] < 0x1) {
                        let _0x1b3891 = undefined;
                        $(this)[_0x2e9514(0x18f)](_0x2e9514(0x1f4))[_0x2e9514(0x1e2)](_0x2e9514(0x168)) && (_0x1b3891 = $(this)[_0x2e9514(0x18f)](_0x2e9514(0x1f4))['data'](_0x2e9514(0x168)));
                        if ($(this)[_0x2e9514(0x18f)](_0x2e9514(0x186))[_0x2e9514(0xd5)](_0x2e9514(0xdb))) {
                            let _0x17d53c = $(this)['parents']('[data-go-to]')[_0x2e9514(0xd5)](_0x2e9514(0xdb));
                            selections = selections[_0x2e9514(0x19c)](_0x597277 => _0x597277[_0x2e9514(0x1a5)] !== x), selections[_0x2e9514(0x165)]({ 'step': x, 'selected': _0x17d53c });
                            if (_0x1b3891) {
                                selections = selections['filter'](_0x2fa65c => _0x2fa65c[_0x2e9514(0x1a5)] !== _0x1b3891 - 0x2), selections[_0x2e9514(0x165)]({ 'step': _0x1b3891 - 0x2, 'selected': _0x17d53c });
                                let _0x4e2691 = selections[_0x2e9514(0x206)](_0x54b417 => _0x54b417['step'] === x);
                                selections[_0x4e2691][_0x2e9514(0x1b3)] = parseInt(_0x1b3891) - 0x1, selections[_0x4e2691][_0x2e9514(0xc2)] = x;
                            }
                        }
                        checkboxFilled = !![], $(steps[x])[_0x2e9514(0x199)](_0x2e9514(0xbd))[_0x2e9514(0xa4)] >= $(steps[x])[_0x2e9514(0x199)](':input[type=\x22checkbox\x22][required]')[_0x2e9514(0xa4)] && resetInputErrorMessage($(steps[x])[_0x2e9514(0x199)](_0x2e9514(0x131))[_0x2e9514(0xd5)](_0x2e9514(0x228)));
                    }
                } else checkboxFilled = ![], unfilledArr[_0x2e9514(0x165)]({ 'input': $(this)[_0x2e9514(0xd5)](_0x2e9514(0x228)) });
            });
            else {
                if ($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](':input[type=\x22checkbox\x22]:checked')[_0x5df9d2(0xa4)] >= checkCount) {
                    if ($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x131))[_0x5df9d2(0x18f)](_0x5df9d2(0x186))['attr'](_0x5df9d2(0xdb))) {
                        let _0x4773ee = undefined;
                        $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](':input[type=\x22checkbox\x22]')[_0x5df9d2(0x18f)]('[data-skip-to]')[_0x5df9d2(0xd5)]('data-skip-to') && (_0x4773ee = $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](':input[type=\x22checkbox\x22]:checked')[_0x5df9d2(0x18f)]('[data-skip-to]')[_0x5df9d2(0xd5)]('data-skip-to'));
                        let _0x342489 = $(steps[x])[_0x5df9d2(0x199)]('.active-answer-card')[_0x5df9d2(0x199)](':input[type=\x22checkbox\x22]')[_0x5df9d2(0x18f)](_0x5df9d2(0x186))[_0x5df9d2(0xd5)](_0x5df9d2(0xdb));
                        selections = selections[_0x5df9d2(0x19c)](_0x11755d => _0x11755d[_0x5df9d2(0x1a5)] !== x), selections[_0x5df9d2(0x165)]({ 'step': x, 'selected': _0x342489 });
                        if (_0x4773ee) {
                            selections = selections[_0x5df9d2(0x19c)](_0x11e11a => _0x11e11a['step'] !== _0x4773ee - 0x2), selections['push']({ 'step': _0x4773ee - 0x2, 'selected': _0x342489 });
                            let _0x3eab4a = selections[_0x5df9d2(0x206)](_0x2ccd5c => _0x2ccd5c[_0x5df9d2(0x1a5)] === x);
                            selections[_0x3eab4a][_0x5df9d2(0x1b3)] = parseInt(_0x4773ee) - 0x1, selections[_0x3eab4a][_0x5df9d2(0xc2)] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])['find'](_0x5df9d2(0xbd))[_0x5df9d2(0xa4)] >= $(steps[x])[_0x5df9d2(0x199)](':input[type=\x22checkbox\x22][required]')[_0x5df9d2(0xa4)] && resetInputErrorMessage($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x131))['attr'](_0x5df9d2(0x228))), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x1ea))['length'] < maxCheckCount ? ($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)]('input[type=\x22checkbox\x22]')[_0x5df9d2(0x9a)]('disabled', ![]), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x132))[_0x5df9d2(0x14a)](_0x5df9d2(0xe4))[_0x5df9d2(0x8f)](_0x5df9d2(0x196))) : ($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x1c1))[_0x5df9d2(0x14a)](_0x5df9d2(0xe4))[_0x5df9d2(0x230)](_0x5df9d2(0x196)), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))['find'](_0x5df9d2(0x1c1))['prop'](_0x5df9d2(0x196), !![]));
                } else checkboxFilled = ![], $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x12c))[_0x5df9d2(0x104)](function() {
                    const _0xf6aafa = _0x5df9d2;
                    $(this)[_0xf6aafa(0xd3)](_0xf6aafa(0x216)) && unfilledArr[_0xf6aafa(0x165)]({ 'input': $(this)[_0xf6aafa(0xd5)](_0xf6aafa(0x228)) });
                });
            }
        }
        $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))['find']('input:radio[required]')[_0x5df9d2(0x104)](function(_0x27e499) {
            const _0xbd0a9b = _0x5df9d2;
            var _0x2e2c0f = $(this)[_0xbd0a9b(0xd5)]('name');
            $(_0xbd0a9b(0x9d) + _0x2e2c0f + _0xbd0a9b(0x134))[_0xbd0a9b(0xa4)] == 0x0 ? (!empReqRadio[_0xbd0a9b(0x199)](_0x17d122 => _0x17d122[_0xbd0a9b(0x1ab)] === _0x27e499) && empReqRadio[_0xbd0a9b(0x165)]({ 'input': _0x27e499 }), unfilledArr[_0xbd0a9b(0x165)]({ 'input': $(this)['attr'](_0xbd0a9b(0x228)) })) : empReqRadio = empReqRadio[_0xbd0a9b(0x19c)](_0x3b99a9 => _0x3b99a9[_0xbd0a9b(0x1ab)] !== _0x27e499), empReqRadio[_0xbd0a9b(0xa4)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x21f))['each'](function(_0x5f3aab) {
            const _0x4b96c5 = _0x5df9d2;
            let _0x2da960 = $(this)[_0x4b96c5(0x1de)]()['length'],
                _0x1a9d57 = $(this)[_0x4b96c5(0x1e2)](_0x4b96c5(0x1ac)) ? $(this)[_0x4b96c5(0x1e2)](_0x4b96c5(0x1ac)) : 0x0;
            $(this)[_0x4b96c5(0x1de)]() !== '' && _0x2da960 >= _0x1a9d57 ? empReqInput = empReqInput['filter'](_0x54b0ba => _0x54b0ba[_0x4b96c5(0x1ab)] !== _0x5f3aab) : (!empReqInput[_0x4b96c5(0x199)](_0x4d00d8 => _0x4d00d8['input'] === _0x5f3aab) && empReqInput[_0x4b96c5(0x165)]({ 'input': _0x5f3aab }), unfilledArr[_0x4b96c5(0x165)]({ 'input': $(this)[_0x4b96c5(0xd5)]('name') })), empReqInput[_0x4b96c5(0xa4)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find'](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](':input[type=\x22text\x22]')[_0x5df9d2(0x104)](function(_0x4273f9) {
            const _0x5c956f = _0x5df9d2;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')[_0x5c956f(0x1e2)](_0x5c956f(0x168)) !== '' && (skipTo = $(this)['parents'](_0x5c956f(0x1f4))[_0x5c956f(0x1e2)](_0x5c956f(0x168))), $(this)[_0x5c956f(0x18f)](_0x5c956f(0x186))[_0x5c956f(0xd5)]('data-go-to') && (answer = $(this)[_0x5c956f(0x18f)](_0x5c956f(0x186))[_0x5c956f(0xd5)](_0x5c956f(0xdb)), selections = selections[_0x5c956f(0x19c)](_0xf8a732 => _0xf8a732[_0x5c956f(0x1a5)] !== x), selections[_0x5c956f(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5c956f(0x19c)](_0x5f5454 => _0x5f5454[_0x5c956f(0x1a5)] !== skipTo - 0x2), selections[_0x5c956f(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5c956f(0x206)](_0x2d25f8 => _0x2d25f8[_0x5c956f(0x1a5)] === x), selections[objIndex][_0x5c956f(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])['find'](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](':input[type=\x22password\x22][required]')[_0x5df9d2(0x104)](function(_0x1a484f) {
            const _0x25925a = _0x5df9d2;
            let _0x5d392b = $(this)['val']()[_0x25925a(0xa4)],
                _0x455b65 = $(this)[_0x25925a(0x1e2)](_0x25925a(0x1ac)) ? $(this)[_0x25925a(0x1e2)]('min-character') : 0x0;
            $(this)[_0x25925a(0x1de)]() !== '' && _0x5d392b >= _0x455b65 ? empReqPassword = empReqPassword['filter'](_0x425054 => _0x425054[_0x25925a(0x1ab)] !== _0x1a484f) : (!empReqPassword['find'](_0x4705aa => _0x4705aa[_0x25925a(0x1ab)] === _0x1a484f) && empReqPassword[_0x25925a(0x165)]({ 'input': _0x1a484f }), unfilledArr['push']({ 'input': $(this)[_0x25925a(0xd5)]('name') })), empReqPassword[_0x25925a(0xa4)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x1ca))[_0x5df9d2(0x104)](function(_0x12ac61) {
            const _0x497a55 = _0x5df9d2;
            skipTo = undefined, $(this)[_0x497a55(0x18f)](_0x497a55(0x1f4))[_0x497a55(0x1e2)](_0x497a55(0x168)) !== '' && (skipTo = $(this)[_0x497a55(0x18f)](_0x497a55(0x1f4))[_0x497a55(0x1e2)](_0x497a55(0x168))), $(this)[_0x497a55(0x18f)](_0x497a55(0x186))[_0x497a55(0xd5)](_0x497a55(0xdb)) && (answer = $(this)['parents'](_0x497a55(0x186))[_0x497a55(0xd5)]('data-go-to'), selections = selections[_0x497a55(0x19c)](_0x5421a5 => _0x5421a5[_0x497a55(0x1a5)] !== x), selections[_0x497a55(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x109758 => _0x109758[_0x497a55(0x1a5)] !== skipTo - 0x2), selections[_0x497a55(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x497a55(0x206)](_0x425571 => _0x425571[_0x497a55(0x1a5)] === x), selections[objIndex][_0x497a55(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x497a55(0xc2)] = x));
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x139))['each'](function(_0x563b09) {
            const _0x42440c = _0x5df9d2;
            let _0x471966 = $(this)[_0x42440c(0x1de)]()[_0x42440c(0xa4)],
                _0x2ca7d3 = $(this)[_0x42440c(0x1e2)]('min-character') ? $(this)[_0x42440c(0x1e2)](_0x42440c(0x1ac)) : 0x0;
            $(this)[_0x42440c(0x1de)]() !== '' && _0x471966 >= _0x2ca7d3 ? empReqUrl = empReqUrl[_0x42440c(0x19c)](_0x42cab7 => _0x42cab7[_0x42440c(0x1ab)] !== _0x563b09) : (!empReqUrl[_0x42440c(0x199)](_0x3af88f => _0x3af88f[_0x42440c(0x1ab)] === _0x563b09) && empReqUrl[_0x42440c(0x165)]({ 'input': _0x563b09 }), unfilledArr[_0x42440c(0x165)]({ 'input': $(this)['attr'](_0x42440c(0x228)) })), empReqUrl['length'] === 0x0 && validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x16b))[_0x5df9d2(0x104)](function(_0x9adb75) {
            const _0x1046cf = _0x5df9d2;
            skipTo = undefined, $(this)[_0x1046cf(0x18f)](_0x1046cf(0x1f4))[_0x1046cf(0x1e2)](_0x1046cf(0x168)) !== '' && (skipTo = $(this)[_0x1046cf(0x18f)](_0x1046cf(0x1f4))['data'](_0x1046cf(0x168))), $(this)[_0x1046cf(0x18f)]('[data-go-to]')[_0x1046cf(0xd5)](_0x1046cf(0xdb)) && (answer = $(this)[_0x1046cf(0x18f)](_0x1046cf(0x186))[_0x1046cf(0xd5)]('data-go-to'), selections = selections[_0x1046cf(0x19c)](_0x5869db => _0x5869db[_0x1046cf(0x1a5)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1046cf(0x19c)](_0x43a229 => _0x43a229[_0x1046cf(0x1a5)] !== skipTo - 0x2), selections[_0x1046cf(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1046cf(0x206)](_0x26c057 => _0x26c057[_0x1046cf(0x1a5)] === x), selections[objIndex][_0x1046cf(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])['find'](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0xda))['each'](function(_0x4c4c1c) {
            const _0x4363dc = _0x5df9d2;
            $(this)['val']() !== '' ? empReqDate = empReqDate[_0x4363dc(0x19c)](_0x2276bf => _0x2276bf['input'] !== _0x4c4c1c) : (!empReqDate['find'](_0x345a21 => _0x345a21['input'] === _0x4c4c1c) && empReqDate[_0x4363dc(0x165)]({ 'input': _0x4c4c1c }), unfilledArr[_0x4363dc(0x165)]({ 'input': $(this)[_0x4363dc(0xd5)](_0x4363dc(0x228)) })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](':input[type=\x22date\x22]')[_0x5df9d2(0x104)](function(_0x55aa3c) {
            const _0x559799 = _0x5df9d2;
            skipTo = undefined, $(this)['parents'](_0x559799(0x1f4))[_0x559799(0x1e2)](_0x559799(0x168)) !== '' && (skipTo = $(this)[_0x559799(0x18f)](_0x559799(0x1f4))['data'](_0x559799(0x168))), $(this)['parents'](_0x559799(0x186))['attr'](_0x559799(0xdb)) && (answer = $(this)['parents'](_0x559799(0x186))[_0x559799(0xd5)]('data-go-to'), selections = selections[_0x559799(0x19c)](_0x31cadc => _0x31cadc[_0x559799(0x1a5)] !== x), selections[_0x559799(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x3972ce => _0x3972ce[_0x559799(0x1a5)] !== skipTo - 0x2), selections[_0x559799(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x559799(0x206)](_0x214b2d => _0x214b2d[_0x559799(0x1a5)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x559799(0xc2)] = x));
        }), $(steps[x])[_0x5df9d2(0x199)]('.active-answer-card')['find'](_0x5df9d2(0x1c5))[_0x5df9d2(0x104)](function(_0x126fc5) {
            const _0x320bfd = _0x5df9d2;
            $(this)[_0x320bfd(0x1de)]() !== '' ? empReqTime = empReqTime[_0x320bfd(0x19c)](_0x5f013c => _0x5f013c[_0x320bfd(0x1ab)] !== _0x126fc5) : (!empReqTime[_0x320bfd(0x199)](_0x8b4be1 => _0x8b4be1['input'] === _0x126fc5) && empReqTime[_0x320bfd(0x165)]({ 'input': _0x126fc5 }), unfilledArr[_0x320bfd(0x165)]({ 'input': $(this)[_0x320bfd(0xd5)](_0x320bfd(0x228)) })), empReqTime[_0x320bfd(0xa4)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0xd7))['each'](function(_0x8f922a) {
            const _0x29f7fb = _0x5df9d2;
            skipTo = undefined, $(this)[_0x29f7fb(0x18f)]('[data-skip-to]')['data']('skip-to') !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x29f7fb(0x1e2)](_0x29f7fb(0x168))), $(this)[_0x29f7fb(0x18f)](_0x29f7fb(0x186))['attr'](_0x29f7fb(0xdb)) && (answer = $(this)[_0x29f7fb(0x18f)](_0x29f7fb(0x186))[_0x29f7fb(0xd5)](_0x29f7fb(0xdb)), selections = selections[_0x29f7fb(0x19c)](_0x491c10 => _0x491c10[_0x29f7fb(0x1a5)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x9715ca => _0x9715ca[_0x29f7fb(0x1a5)] !== skipTo - 0x2), selections[_0x29f7fb(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x29f7fb(0x206)](_0x270ac2 => _0x270ac2['step'] === x), selections[objIndex][_0x29f7fb(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x29f7fb(0xc2)] = x));
        }), $(steps[x])[_0x5df9d2(0x199)]('.active-answer-card')['find'](_0x5df9d2(0x19b))['each'](function(_0x4a1882) {
            const _0x2b4a08 = _0x5df9d2;
            let _0x3fa262 = $(this)['val']()[_0x2b4a08(0xa4)],
                _0x51f0d5 = $(this)['data'](_0x2b4a08(0x1ac)) ? $(this)['data'](_0x2b4a08(0x1ac)) : 0x0;
            $(this)['val']() !== '' && _0x3fa262 >= _0x51f0d5 ? empReqNum = empReqNum[_0x2b4a08(0x19c)](_0x11bffa => _0x11bffa['input'] !== _0x4a1882) : (!empReqNum[_0x2b4a08(0x199)](_0x437c87 => _0x437c87[_0x2b4a08(0x1ab)] === _0x4a1882) && empReqNum[_0x2b4a08(0x165)]({ 'input': _0x4a1882 }), unfilledArr[_0x2b4a08(0x165)]({ 'input': $(this)[_0x2b4a08(0xd5)](_0x2b4a08(0x228)) })), empReqNum['length'] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x13c))[_0x5df9d2(0x104)](function(_0x285e05) {
            const _0x1ab409 = _0x5df9d2;
            skipTo = undefined, $(this)[_0x1ab409(0x18f)]('[data-skip-to]')[_0x1ab409(0x1e2)]('skip-to') !== '' && (skipTo = $(this)['parents'](_0x1ab409(0x1f4))[_0x1ab409(0x1e2)]('skip-to')), $(this)[_0x1ab409(0x18f)]('[data-go-to]')[_0x1ab409(0xd5)]('data-go-to') && (answer = $(this)[_0x1ab409(0x18f)](_0x1ab409(0x186))['attr']('data-go-to'), selections = selections[_0x1ab409(0x19c)](_0x1bb8ba => _0x1bb8ba[_0x1ab409(0x1a5)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1ab409(0x19c)](_0x1e49c7 => _0x1e49c7[_0x1ab409(0x1a5)] !== skipTo - 0x2), selections[_0x1ab409(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x55f463 => _0x55f463[_0x1ab409(0x1a5)] === x), selections[objIndex][_0x1ab409(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1ab409(0xc2)] = x));
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x1a2))[_0x5df9d2(0x104)](function(_0x1eac67) {
            const _0x261db7 = _0x5df9d2;
            if ($(this)[_0x261db7(0x1de)]() !== '') {
                let _0x6830ba = $(this)[_0x261db7(0x1de)]()[_0x261db7(0xa4)],
                    _0x21b4f0 = $(this)[_0x261db7(0x1e2)](_0x261db7(0x1ac)) ? $(this)[_0x261db7(0x1e2)]('min-character') : 0x0;
                if ($(this)['data']('phone-autoformat')) {
                    var _0x1a5608 = phoneAutoFormat($(this)[_0x261db7(0x1e2)](_0x261db7(0x1c8)));
                    $(this)[_0x261db7(0x1de)](_0x1a5608($(this)[_0x261db7(0x1de)]()));
                }
                phoneValidation($(this)['val'](), _0x6830ba, _0x21b4f0) ? empReqTel = empReqTel['filter'](_0x13fdf7 => _0x13fdf7[_0x261db7(0x1ab)] !== _0x1eac67) : empReqTel[_0x261db7(0x165)]({ 'input': _0x1eac67 });
            } else !empReqTel[_0x261db7(0x199)](_0x1cc9e1 => _0x1cc9e1[_0x261db7(0x1ab)] === _0x1eac67) && empReqTel[_0x261db7(0x165)]({ 'input': _0x1eac67 }), unfilledArr[_0x261db7(0x165)]({ 'input': $(this)[_0x261db7(0xd5)](_0x261db7(0x228)) });
            empReqTel[_0x261db7(0xa4)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')[_0x5df9d2(0x199)](_0x5df9d2(0x229))['each'](function(_0x402340) {
            const _0x346f9b = _0x5df9d2;
            skipTo = undefined, $(this)['parents'](_0x346f9b(0x1f4))['data'](_0x346f9b(0x168)) !== '' && (skipTo = $(this)[_0x346f9b(0x18f)](_0x346f9b(0x1f4))[_0x346f9b(0x1e2)](_0x346f9b(0x168))), $(this)['parents'](_0x346f9b(0x186))[_0x346f9b(0xd5)](_0x346f9b(0xdb)) && (answer = $(this)[_0x346f9b(0x18f)]('[data-go-to]')[_0x346f9b(0xd5)](_0x346f9b(0xdb)), selections = selections[_0x346f9b(0x19c)](_0xbc158e => _0xbc158e['step'] !== x), selections[_0x346f9b(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x346f9b(0x19c)](_0x529766 => _0x529766['step'] !== skipTo - 0x2), selections[_0x346f9b(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0xfdcb78 => _0xfdcb78[_0x346f9b(0x1a5)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x346f9b(0xc2)] = x));
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))['find'](_0x5df9d2(0x1df))['each'](function(_0x34ef15) {
            const _0x1a80a7 = _0x5df9d2;
            $(this)[_0x1a80a7(0x1de)]() !== '' ? empReqFile = empReqFile[_0x1a80a7(0x19c)](_0xcc53b1 => _0xcc53b1['input'] !== _0x34ef15) : (!empReqFile[_0x1a80a7(0x199)](_0x310593 => _0x310593[_0x1a80a7(0x1ab)] === _0x34ef15) && empReqFile[_0x1a80a7(0x165)]({ 'input': _0x34ef15 }), unfilledArr[_0x1a80a7(0x165)]({ 'input': $(this)[_0x1a80a7(0xd5)](_0x1a80a7(0x228)) })), empReqFile['length'] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)]('.active-answer-card')[_0x5df9d2(0x199)](':input[type=\x22file\x22]')[_0x5df9d2(0x104)](function(_0x12a570) {
            const _0x3aa22f = _0x5df9d2;
            skipTo = undefined, $(this)[_0x3aa22f(0x18f)]('[data-skip-to]')['data'](_0x3aa22f(0x168)) !== '' && (skipTo = $(this)[_0x3aa22f(0x18f)](_0x3aa22f(0x1f4))[_0x3aa22f(0x1e2)]('skip-to')), $(this)['parents'](_0x3aa22f(0x186))['attr']('data-go-to') && (answer = $(this)['parents'](_0x3aa22f(0x186))[_0x3aa22f(0xd5)]('data-go-to'), selections = selections[_0x3aa22f(0x19c)](_0x767f34 => _0x767f34[_0x3aa22f(0x1a5)] !== x), selections[_0x3aa22f(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3aa22f(0x19c)](_0x5a0ee9 => _0x5a0ee9['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3aa22f(0x206)](_0x4f7020 => _0x4f7020['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3aa22f(0xc2)] = x));
        }), $(steps[x])[_0x5df9d2(0x199)]('.active-answer-card')[_0x5df9d2(0x199)](_0x5df9d2(0x195))[_0x5df9d2(0x104)](function(_0x846ed6) {
            const _0x125207 = _0x5df9d2;
            $(this)['val']() !== null && $(this)[_0x125207(0x1de)]() !== '' ? empReqSelect = empReqSelect['filter'](_0xd1e766 => _0xd1e766[_0x125207(0x1ab)] !== _0x846ed6) : (!empReqSelect['find'](_0x253d8c => _0x253d8c[_0x125207(0x1ab)] === _0x846ed6) && empReqSelect['push']({ 'input': _0x846ed6 }), unfilledArr[_0x125207(0x165)]({ 'input': $(this)[_0x125207(0xd5)](_0x125207(0x228)) })), empReqSelect[_0x125207(0xa4)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)]('.active-answer-card')[_0x5df9d2(0x199)](_0x5df9d2(0x197))['each'](function(_0x54da0e) {
            const _0x3e046d = _0x5df9d2;
            skipTo = undefined, $(this)[_0x3e046d(0x18f)](_0x3e046d(0x1f4))['data']('skip-to') !== '' && (skipTo = $(this)[_0x3e046d(0x18f)](_0x3e046d(0x1f4))[_0x3e046d(0x1e2)]('skip-to')), $(this)['parents'](_0x3e046d(0x186))[_0x3e046d(0xd5)](_0x3e046d(0xdb)) && (answer = $(this)['parents'](_0x3e046d(0x186))['attr']('data-go-to'), selections = selections['filter'](_0x29c51e => _0x29c51e['step'] !== x), selections[_0x3e046d(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3e046d(0x19c)](_0x3242c8 => _0x3242c8['step'] !== skipTo - 0x2), selections[_0x3e046d(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3e046d(0x206)](_0x821f36 => _0x821f36[_0x3e046d(0x1a5)] === x), selections[objIndex][_0x3e046d(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3e046d(0xc2)] = x));
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0x95))[_0x5df9d2(0x104)](function(_0xee488e) {
            const _0x150530 = _0x5df9d2;
            let _0xce6be0 = $(this)[_0x150530(0x1de)]()[_0x150530(0xa4)],
                _0x533a68 = $(this)[_0x150530(0x1e2)](_0x150530(0x1ac)) ? $(this)[_0x150530(0x1e2)]('min-character') : 0x0;
            $(this)[_0x150530(0x1de)]() !== '' && _0xce6be0 >= _0x533a68 ? empReqTextarea = empReqTextarea[_0x150530(0x19c)](_0x5962b6 => _0x5962b6['input'] !== _0xee488e) : (!empReqTextarea[_0x150530(0x199)](_0x4dbb35 => _0x4dbb35['input'] === _0xee488e) && empReqTextarea[_0x150530(0x165)]({ 'input': _0xee488e }), unfilledArr[_0x150530(0x165)]({ 'input': $(this)[_0x150530(0xd5)](_0x150530(0x228)) })), empReqTextarea[_0x150530(0xa4)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)]('textarea')[_0x5df9d2(0x104)](function(_0x185d3f) {
            const _0x27b998 = _0x5df9d2;
            skipTo = undefined, $(this)['parents'](_0x27b998(0x1f4))['data'](_0x27b998(0x168)) !== '' && (skipTo = $(this)[_0x27b998(0x18f)](_0x27b998(0x1f4))[_0x27b998(0x1e2)](_0x27b998(0x168))), $(this)[_0x27b998(0x18f)](_0x27b998(0x186))[_0x27b998(0xd5)]('data-go-to') && (answer = $(this)['parents']('[data-go-to]')[_0x27b998(0xd5)](_0x27b998(0xdb)), selections = selections[_0x27b998(0x19c)](_0x405aea => _0x405aea['step'] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x27b998(0x19c)](_0x587873 => _0x587873[_0x27b998(0x1a5)] !== skipTo - 0x2), selections[_0x27b998(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x27b998(0x206)](_0x5c83e7 => _0x5c83e7['step'] === x), selections[objIndex][_0x27b998(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x27b998(0xc2)] = x));
        }), $(steps[x])['find']('.active-answer-card')[_0x5df9d2(0x199)](_0x5df9d2(0x10a))[_0x5df9d2(0x104)](function(_0x5ae6ea) {
            const _0x9d5f3c = _0x5df9d2;
            $(this)[_0x9d5f3c(0x1de)]() !== '' ? validateEmail($(this)[_0x9d5f3c(0x1de)](), $(this)[_0x9d5f3c(0x1e2)]('block-domain'), $(this)[_0x9d5f3c(0xd5)](_0x9d5f3c(0x228))) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)['attr']('name') }));
        }), $(steps[x])[_0x5df9d2(0x199)]('.active-answer-card')[_0x5df9d2(0x199)](_0x5df9d2(0x98))['each'](function(_0x2c379a) {
            const _0x27527c = _0x5df9d2;
            skipTo = undefined, $(this)['parents'](_0x27527c(0x1f4))[_0x27527c(0x1e2)]('skip-to') !== '' && (skipTo = $(this)[_0x27527c(0x18f)]('[data-skip-to]')[_0x27527c(0x1e2)]('skip-to')), $(this)[_0x27527c(0x18f)](_0x27527c(0x186))[_0x27527c(0xd5)]('data-go-to') && (answer = $(this)['parents']('[data-go-to]')[_0x27527c(0xd5)]('data-go-to'), selections = selections[_0x27527c(0x19c)](_0x925a80 => _0x925a80[_0x27527c(0x1a5)] !== x), console['log'](_0x27527c(0x1f5), selections, x), selections[_0x27527c(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x27527c(0x19c)](_0x480502 => _0x480502[_0x27527c(0x1a5)] !== skipTo - 0x2), selections[_0x27527c(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x271ba2 => _0x271ba2[_0x27527c(0x1a5)] === x), selections[objIndex][_0x27527c(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x27527c(0xc2)] = x));
        });
    }
    $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x1c9))['is'](':checked') && (selArr = [], $(steps)[_0x5df9d2(0x199)](_0x5df9d2(0xaf))[_0x5df9d2(0x104)](function(_0x33abfc, _0x51763c) {
        const _0xb285af = _0x5df9d2;
        selArr[_0xb285af(0x165)]({ 'selected': $(this)[_0xb285af(0x1e2)]('selected') });
    }), selString = [], selArr[_0x5df9d2(0x1fd)](_0x46b094 => selString[_0x5df9d2(0x165)](_0x46b094[_0x5df9d2(0x12e)])), $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))['find'](_0x5df9d2(0x212))['each'](function() {
        const _0x44dc59 = _0x5df9d2;
        skipTo = undefined;
        if ($(this)[_0x44dc59(0x18f)](_0x44dc59(0x1f4))['data']('skip-to')) skipTo = $(this)[_0x44dc59(0x18f)](_0x44dc59(0x1f4))['data'](_0x44dc59(0x168));
        else $(this)[_0x44dc59(0x1e2)](_0x44dc59(0x168)) && (skipTo = $(this)[_0x44dc59(0x1e2)]('skip-to'));
        selections = selections['filter'](_0x392961 => _0x392961['step'] !== x);
        if ($(this)[_0x44dc59(0x1e2)](_0x44dc59(0x1aa))) answer = $(this)[_0x44dc59(0xd5)]('data-go-to'), selections[_0x44dc59(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x44dc59(0x19c)](_0x2eb8dd => _0x2eb8dd['step'] !== skipTo - 0x2), selections[_0x44dc59(0x165)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x44dc59(0x206)](_0x23e244 => _0x23e244['step'] === x), selections[objIndex][_0x44dc59(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x44dc59(0xc2)] = x);
        else $(this)[_0x44dc59(0x18f)]('[data-go-to]')[_0x44dc59(0x1e2)]('go-to') && (answer = $(this)['parents'](_0x44dc59(0x186))[_0x44dc59(0x1e2)](_0x44dc59(0x1aa)), selections[_0x44dc59(0x165)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x44dc59(0x19c)](_0x2264d0 => _0x2264d0['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x4c64ed => _0x4c64ed['step'] === x), selections[objIndex][_0x44dc59(0x1b3)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x44dc59(0xc2)] = x));
    }), logicExtra ? ($(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x10d))[_0x5df9d2(0x199)](_0x5df9d2(0xc3))[_0x5df9d2(0x1e2)](_0x5df9d2(0x10e)) === !![] || $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0x219))['data'](_0x5df9d2(0x10e)) === !![]) && (skip && selections[_0x5df9d2(0x19c)](_0x2a3ba5 => _0x2a3ba5['step'] === x)[_0x5df9d2(0xa4)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x5df9d2(0x199)]('[data-radio-delay]')[_0x5df9d2(0x1e2)]('radio-delay')))) : $(steps[x])['find']('[data-radio-skip]:visible')[_0x5df9d2(0x1e2)]('radio-skip') === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x5df9d2(0x199)](_0x5df9d2(0xf0))[_0x5df9d2(0x1e2)](_0x5df9d2(0x167)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x47d1df = _0x538941;
    $('[data-text=\x22error-message\x22]')[_0x47d1df(0x158)](), unfilledArr[_0x47d1df(0xa4)] > 0x0 && unfilledArr[_0x47d1df(0x1fd)](function(_0x4d4f23) {
        const _0x2d475a = _0x47d1df;
        $(_0x2d475a(0xe8) + _0x4d4f23[_0x2d475a(0x1ab)] + '\x22]')['siblings'](_0x2d475a(0xa2))[_0x2d475a(0x1f7)](), $(_0x2d475a(0xe8) + _0x4d4f23[_0x2d475a(0x1ab)] + '\x22]')['parents']()[_0x2d475a(0x114)](_0x2d475a(0xa2))[_0x2d475a(0x1f7)](), $(_0x2d475a(0xa7) + _0x4d4f23[_0x2d475a(0x1ab)] + '\x22]')[_0x2d475a(0x1e7)](_0x2d475a(0xa2))[_0x2d475a(0x1f7)](), $(_0x2d475a(0x18b) + _0x4d4f23[_0x2d475a(0x1ab)] + '\x22]')[_0x2d475a(0x1e7)](_0x2d475a(0xa2))[_0x2d475a(0x1f7)]();
    });
}

function resetInputErrorMessage(_0x487e62) {
    const _0x133236 = _0x538941;
    $('input[name=\x22' + _0x487e62 + '\x22]')['siblings']('[data-text=\x22error-message\x22]')[_0x133236(0x158)](), $(_0x133236(0xe8) + _0x487e62 + '\x22]')[_0x133236(0x18f)]()[_0x133236(0x114)](_0x133236(0xa2))[_0x133236(0x158)](), $(_0x133236(0xa7) + _0x487e62 + '\x22]')[_0x133236(0x1e7)](_0x133236(0xa2))[_0x133236(0x158)](), $(_0x133236(0x18b) + _0x487e62 + '\x22]')['siblings'](_0x133236(0xa2))[_0x133236(0x158)]();
}

function increaseCurstep() {
    const _0x1e4fbd = _0x538941;
    countCard ? (curStep = curStep + 0x1, $(_0x1e4fbd(0xa5))[_0x1e4fbd(0xff)](steps[_0x1e4fbd(0xa4)])) : $(steps[x])[_0x1e4fbd(0x1e2)](_0x1e4fbd(0x213)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0x1e4fbd(0xb3))['text'](curStep);
}

function decreaseCurstep() {
    const _0x344f90 = _0x538941;
    countCard ? (curStep = curStep - 0x1, $(_0x344f90(0xa5))[_0x344f90(0xff)](steps[_0x344f90(0xa4)])) : $(steps[x])[_0x344f90(0x1e2)](_0x344f90(0x213)) ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $(_0x344f90(0xb3))['text'](curStep);
}
$(_0x538941(0xc4))['on']('click', function(_0x37fab9) {
    const _0xedd022 = _0x538941;
    $(this)[_0xedd022(0x1e2)](_0xedd022(0x1cd)) && (redirectTo = $(this)[_0xedd022(0x1e2)](_0xedd022(0x1cd)));
    !$(this)[_0xedd022(0x1e2)](_0xedd022(0x193)) && (newTab = $(this)[_0xedd022(0x1e2)](_0xedd022(0x193)));
    successCard = $(this)[_0xedd022(0x1e2)](_0xedd022(0x176)), _0x37fab9['preventDefault'](), _0x37fab9[_0xedd022(0xfa)]();
    const _0x3468dc = new URLSearchParams(window[_0xedd022(0x22c)][_0xedd022(0xc7)]),
        _0x29072b = (_0x498965, _0x44ae61) => {
            const _0x1f06f0 = _0xedd022,
                _0x5b0e58 = document[_0x1f06f0(0x18d)](_0x1f06f0(0x14f) + _0x498965 + '\x22]');
            _0x5b0e58 && (_0x5b0e58[_0x1f06f0(0xa9)] = _0x44ae61);
        };
    _0x29072b(_0xedd022(0xea), _0x3468dc[_0xedd022(0xcc)]('referrer') || document['referrer'] || _0xedd022(0x9e)), _0x29072b(_0xedd022(0xae), navigator[_0xedd022(0x136)]), _0x29072b(_0xedd022(0xc0), new Date()['toISOString']()), _0x29072b(_0xedd022(0x221), Intl[_0xedd022(0x1d5)]()[_0xedd022(0x1a3)]()[_0xedd022(0x203)]), _0x29072b(_0xedd022(0x1a6), window[_0xedd022(0x217)]['width'] + 'x' + window[_0xedd022(0x217)][_0xedd022(0x172)]), _0x29072b(_0xedd022(0xc6), _0xedd022(0x231));
    const _0x494818 = () => {
        const _0x5b470c = _0xedd022,
            _0x19c5f0 = document['querySelector'](_0x5b470c(0x1b5));
        if (_0x19c5f0) {
            const _0x4f1bc8 = localStorage[_0x5b470c(0xa1)]('pageLoadTime');
            console[_0x5b470c(0xfe)](_0x4f1bc8);
            if (_0x4f1bc8) {
                const _0x299677 = Math[_0x5b470c(0x13a)]((Date[_0x5b470c(0x20c)]() - parseInt(_0x4f1bc8)) / 0x3e8);
                _0x19c5f0[_0x5b470c(0xa9)] = _0x299677 + _0x5b470c(0x178);
            } else _0x19c5f0['value'] = _0x5b470c(0x231);
        }
    };
    _0x494818(), logicExtra && ($(this)[_0xedd022(0x9a)](_0xedd022(0xf8), !![]), $(steps)['find'](_0xedd022(0x1e4))[_0xedd022(0x9a)]('required', ![])), localStorage[_0xedd022(0x154)](_0xedd022(0x17c)), localStorage[_0xedd022(0x154)](_0xedd022(0x105)), fill ? ($(this)[_0xedd022(0x1e2)](_0xedd022(0x1ae)) ? (console[_0xedd022(0xfe)]($(this)[_0xedd022(0x1e2)](_0xedd022(0x1ae))), $(this)['text']($(this)['data'](_0xedd022(0x1ae)))) : $(this)['val'](_0xedd022(0x21c))['text'](_0xedd022(0x21c)), $(_0xedd022(0x205))[_0xedd022(0xee)](), $(_0xedd022(0x148))[_0xedd022(0xa4)] > 0x0 && (grecaptcha['getResponse']()['length'] === 0x0 && (form[_0xedd022(0x199)](_0xedd022(0xc4))[_0xedd022(0xff)](oldSubmitText), form['find'](_0xedd022(0xc4))[_0xedd022(0x1de)](oldSubmitText))), customError && $(_0xedd022(0xa2))['hide']()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x34ce99 = _0x538941;
    customError ? ($(_0x34ce99(0xa2))[_0x34ce99(0x158)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps[_0x34ce99(0xa4)] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0x34ce99(0xa4)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x3269d6 = _0x538941;
    customError && $(_0x3269d6(0xa2))['hide'](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x3269d6(0x8f)]('current'), selections[_0x3269d6(0x19c)](_0x25784b => _0x25784b[_0x3269d6(0x1b3)] === x)[_0x3269d6(0xa4)] > 0x0 ? x = parseInt(getSafe(() => selections['filter'](_0x2d16f0 => _0x2d16f0['skipTo'] === x)[0x0][_0x3269d6(0xc2)])) : x--, updateStep()), ($(steps[x])['find'](_0x3269d6(0xc3))[_0x3269d6(0x1e2)]('radio-skip') === !![] || $(steps[x])['find'](_0x3269d6(0x10d))[_0x3269d6(0x199)]('[data-radio-skip]:visible')[_0x3269d6(0x1e2)](_0x3269d6(0x10e)) === !![] || $(steps[x])[_0x3269d6(0x199)]('[data-answer][data-radio-skip]:visible')[_0x3269d6(0x1e2)](_0x3269d6(0x10e)) === !![]) && (all_data = all_data['filter'](_0x803a0a => _0x803a0a[_0x3269d6(0x1c3)] !== $(steps[x])[_0x3269d6(0x199)](_0x3269d6(0x185))[_0x3269d6(0xd5)](_0x3269d6(0x228))), $(_0x3269d6(0x1bb) + $(steps[x])[_0x3269d6(0x199)](_0x3269d6(0x185))['attr'](_0x3269d6(0x228)) + '\x22]')[_0x3269d6(0x158)](), $(steps[x])['find'](_0x3269d6(0x179))[_0x3269d6(0x9a)](_0x3269d6(0xf9), ![]), $(steps[x])[_0x3269d6(0x199)]('.w-form-formradioinput')[_0x3269d6(0x8f)]('w--redirected-checked'), validation());
}
weightedSelectionRange && $(_0x538941(0x1bd))[_0x538941(0x104)](function() {
    const _0x37394c = _0x538941;
    $(this)[_0x37394c(0xdf)](_0x37394c(0x1ec) + $(this)[_0x37394c(0x1e2)](_0x37394c(0x1d0)) + '</div>');
});

function _0x3cb1() {
    const _0x481f66 = ['go-to', 'input', 'min-character', 'scroll-top-offset', 'wait', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'redirect-form-hehexd', 'html,\x20body', 'skipTo', 'input[autofocus]', '[data-hidden-input=\x22page-visit-duration\x22]', 'input-field', 'quiz', '[data-clickable-all]', 'weighted-selection', '[data-input-reveal=\x22', '[data-input-field=\x22', '[data-radio-skip=\x22true\x22]', '[data-selection]', '[data-select-multiple]', 'click', 'head', 'input[type=\x22checkbox\x22]:not(:checked)', 'innerHTML', 'field', 'select[required]:visible', ':input[type=\x22time\x22][required]', 'FAIL', 'data-input-field', 'phone-autoformat', ':input[type=\x22radio\x22]', ':input[type=\x22password\x22]', 'enter', 'remove', 'redirect', 'f-show', 'destroy', 'selection', 'current', 'input-reveal', 'checkbox', '[data-btn=\x22edit\x22]', 'DateTimeFormat', 'startsWith', '[data-form=\x22remove-clone\x22]', '[data-form=\x22remove-input-clone\x22]', 'multistep', 'reset-delay', 'input[type=\x22email\x22]:visible', '[data-clone=\x22', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20', 'val', ':input[type=\x22file\x22][required]', 'Counter\x20already\x20updated\x20for\x20this\x20month.', '[data-enter=\x22true\x22]', 'data', 'https://webflow.com/api/v1/form/', ':input', 'script', 'auto', 'siblings', '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', '[data-checkbox]', ':input[type=\x22checkbox\x22]:checked', 'type', '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>', '[data-form=\x22custom-progress-indicator\x22]', '[data-display]', 'focus', 'Before\x20&lt;/body&gt;\x20tag', 'formlyLastStepAnswer', 'submit-show', 'css', '[data-skip-to]', 'selections\x20email', 'script[src=\x22', 'fadeIn', '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', 'key', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'weighted-selection-range', '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', 'forEach', '\x22]\x20[data-clone-input=\x22', ':input[required]', '2FxEWDo', '12px', '6845153ynpFbO', 'timeZone', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20', '[data-form=\x22multistep\x22]', 'findIndex', 'data-radio-delay', '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20', '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', 'parentNode', '[data-btn=\x22reset\x22]', 'now', '[data-input-field]', '</strong>', '\x22][value=\x22', '[type=\x22checkbox\x22]', 'true', ':input[type=\x27radio\x27]:checked', 'card', '[data-callback=\x22recaptcha\x22]', '[type=\x22radio\x22]', ':checked', 'screen', 'getElementById', '[data-answer][data-radio-skip]:visible', '[data-custom-error-message]', 'ajaxComplete', 'Please\x20wait...', 'setItem', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', ':input[type=\x22text\x22][required]', 'counter', 'time-zone', '[data-clone]', '[data-range]:contains(', '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>', 'split', '[data-reinit]', 'input:checkbox', 'name', ':input[type=\x22tel\x22]', '[data-display-input=\x22', '0.4', 'location', '[data-query-param]', '18BIYDpV', 'history', 'addClass', 'N/A', 'cookie', 'add-new-input', '[data-input-index=\x22', 'removeClass', 'input[type=\x22submit\x22]', '[data-form-ms=\x22submit-btn\x22]', 'PASS', '[data-input-target=\x22', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'textarea[required]', 'count-card', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20', ':input[type=\x22email\x22]', 'init', 'prop', 'https://videsigns-staging.co.uk/formly-counter', '[data-display=\x22', 'input:radio[name=\x22', 'Direct', 'input:radio[required]', 'debug-mode', 'getItem', '[data-text=\x22error-message\x22]', '[data-form=\x22step\x22][data-card]', 'length', '[data-text=\x22total-steps\x22]', '[data-form=\x22step\x22]', 'textarea[name=\x22', 'Basic\x20(No\x20Formly\x20Logic)', 'value', '.w-form-done', 'width', 'keydown', '[required]', 'user-agent', '[data-selected]:checked', '[data-last-step]', '.w-radio-input', '\x22]:not([data-prefill=\x22false\x22])', '[data-text=\x22current-step\x22]', 'f-hide', 'span', '6303054oyyOZw', 'appendChild', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>', '1486388KSBZjn', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20', ':input[type=\x22checkbox\x22][required]:checked', 'slow', '[data-weighted-selection]', 'timestamp', 'data-show-if', 'backTo', '[data-radio-skip]:visible', '[data-form=\x22submit-btn\x22]', 'textarea:focus', 'click-path', 'search', 'parse', 'preventDefault', 'first', 'select:not([data-prefill=\x22false\x22])', 'get', 'formlyLastStep', ':input[type=\x22password\x22][required]', 'trim', 'trigger', 'input[type=\x22checkbox\x22][name=\x22', '[data-weighted-selection-range]', 'not', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', 'attr', '[data-count-card]', ':input[type=\x22time\x22]', 'FormlyLogic\x20enabled', '[data-clone-input-wrapper=\x22', ':input[type=\x22date\x22][required]', 'data-go-to', 'param-analytics', 'custom-error-message', '[data-display-index=\x22', 'append', 'BODY', '10cngeGq', '[aria-label=\x22Remove\x20file\x22]', 'querySelectorAll', 'label', 'max-checkbox', 'textarea', 'none', 'input[name=\x22', 'show', 'referrer', 'clone', 'relationship-', 'active-answer-card', 'submit', '[data-clickable]', '[data-radio-delay]', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button', 'form[data-form=\x22multistep\x22]', 'includes', '[data-add-new]', '5059587LQLJAK', 'href', 'novalidate', 'checked', 'stopPropagation', '[data-form=\x22progress-indicator\x22]', '[data-form=\x22submit-btn\x22]:visible', '[data-btn=\x22check\x22]', 'log', 'text', '[data-selection=\x22other\x22]', '949419TWXoSs', '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20', '<br>Data\x20Go\x20To\x20=\x20', 'each', 'pageLoadTime', '[data-clone-input=\x22', 'join', 'keyCode', 'query-param', ':input[type=\x22email\x22][required]', '[data-max-checkbox]', 'reset', '.active-answer-card', 'radio-skip', 'conditional-result', 'animate', 'answer', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20', 'button', 'children', 'add-new-limit', '35%', '[data-display-input-wrapper=\x22', 'input-reveal-value', 'block-domain', '\x22]\x20select', 'redirect-delay', 'toString', 'videsigns', '20wHXFBL', 'reinit', 'pushState', '[data-form=\x22next-btn\x22][data-submit-show]', '[data-add-new=\x22', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'radio', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a', '[data-enter]', 'clone-input', 'substring', '_blank', '\x22]\x20[data-clone=\x22', 'data-radio-skip', ':input[type=\x22checkbox\x22][required]', 'test', 'selected', 'display', '<option>', ':input[type=\x22checkbox\x22]', 'input[type=\x22checkbox\x22]', 'Failed\x20to\x20update\x20counter:', '\x22]:checked', 'edit-step', 'userAgent', 'slice', 'padding', ':input[type=\x22url\x22][required]', 'round', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20', ':input[type=\x22number\x22]', 'replace', '[data-memory]', 'logic-extra', 'body', '[data-clone-input-wrapper]', 'f-mySidenav', 'input[type=\x22checkbox\x22]:visible', 'ctrlKey', '[data-form=\x22submit\x22]:visible', '3492552rspLWT', '[data-clone-input]', 'div.g-recaptcha', '[data-input-reveal]', 'parent', 'click-addclass', 'stringify', 'phone-validation', 'Webflow', '[data-hidden-input=\x22', '[data-remove-upload]', 'add-new-input-limit', 'textarea[autofocus]', 'memory', 'removeItem', 'dispatchEvent', '[data-selection=\x22', 'offset', 'hide', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20', '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20', '12025827YFLaMY', 'option[value=\x22$(this).val()\x22]', '\x22]\x20textarea', '[data-index=\x22', 'scroll-top', 'closest', 'Inside\x20<head>\x20tag', 'ms-field', '[data-form=\x22progress\x22]', 'ix2', 'push', 'option[value=\x22', 'radio-delay', 'skip-to', '\x22]\x20[data-input-field^=\x22', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', ':input[type=\x22url\x22]', '[data-answer=\x22', '\x22][data-input-reveal-value=\x22*\x22]', 'w--redirected-checked', 'select-multiple', '[data-form=\x22back-btn\x22]', '[data-show-if]', 'height', 'createElement', 'div', '[data-display-input-index=\x22', 'success', '[data-reset-delay]', '\x20seconds', 'input[type=\x22radio\x22]', 'getElementsByTagName', '[data-form=\x22next-btn\x22]', 'filledInput', '[data-add-new-input=\x22', 'clickable-all', 'url', 'last-step', 'readystatechange', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20', '[type=\x22submit\x22]', 'style', 'input[type=\x22radio\x22]:checked', '[data-go-to]', 'change', '[data-answer]', 'inputName', '<br>Data\x20Answer\x20=\x20', 'select[name=\x22', '[data-cms-select=input]', 'querySelector', 'toLowerCase', 'parents', 'data-name', '[data-conditional-result]', 'last', 'new-tab', 'index', 'select[required]', 'disabled', 'select', 'file', 'find', '[data-clone-wrapper=\x22', ':input[type=\x22number\x22][required]', 'filter', 'tagName', '[data-add-new-input]', '[data-redirect-delay]', 'require', 'remove-upload', ':input[type=\x22tel\x22][required]', 'resolvedOptions', '.w-checkbox-input', 'step', 'screen-resolution', 'every', 'clickable', 'some'];
    _0x3cb1 = function() { return _0x481f66; };
    return _0x3cb1();
}

function selectionQuiz() {
    const _0x4e107d = _0x538941;
    if ($(this)[_0x4e107d(0x199)](_0x4e107d(0xfd))) {
        $(_0x4e107d(0x1bd))[_0x4e107d(0x158)](), $('[data-selection-weight]')[_0x4e107d(0x158)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr['forEach'](function(_0x2538b9) { selTotal = selTotal + _0x2538b9['selected']; }), $('[data-text=\x22total-weight\x22]')[_0x4e107d(0xff)](selTotal);
            if ($(_0x4e107d(0x156) + selTotal + '\x22]')[_0x4e107d(0xa4)] > 0x0) $(_0x4e107d(0x156) + selTotal + '\x22]')[_0x4e107d(0x1f7)]();
            else $(_0x4e107d(0x223) + selTotal + ')') ? $('[data-range]:contains(' + selTotal + ')')['parent'](_0x4e107d(0x1bd))['eq'](0x0)[_0x4e107d(0xe9)]() : $('[data-selection=\x22other\x22]')[_0x4e107d(0x1f7)]();
        } else {
            let _0x24ea18 = -0x1;
            $('[data-selection]')[_0x4e107d(0x104)](function(_0x3aa83f) {
                const _0x25b279 = _0x4e107d;
                $($(_0x25b279(0x1bd))[_0x3aa83f])['data'](_0x25b279(0x1d0))[_0x25b279(0xf4)](selString[_0x25b279(0x107)]()) && (_0x24ea18 = _0x3aa83f);
            }), _0x24ea18 > -0x1 ? $($(_0x4e107d(0x1bd))[_0x24ea18])[_0x4e107d(0x1f7)]() : $(_0x4e107d(0x100))[_0x4e107d(0x1f7)]();
        }
    }
}

function triggerInputAllData() {
    const _0x1d0e1a = _0x538941;
    if (savedFilledInput && memory) savedFilledInput['forEach'](_0x45a607 => {
        const _0x508bf9 = _0x5a06;
        var _0x4f060e = $('input[name=\x22' + _0x45a607[_0x508bf9(0x189)] + _0x508bf9(0x20f) + _0x45a607['value'] + _0x508bf9(0xb2)),
            _0x22c097 = $(_0x508bf9(0xe8) + _0x45a607[_0x508bf9(0x189)] + _0x508bf9(0xb2)),
            _0x2dcd90 = $(_0x508bf9(0xa7) + _0x45a607[_0x508bf9(0x189)] + '\x22]:not([data-prefill=\x22false\x22])'),
            _0xe14019 = $(_0x508bf9(0xd1) + _0x45a607[_0x508bf9(0x189)] + '\x22]'),
            _0xb58155 = $('input[type=\x22radio\x22][name=\x22' + _0x45a607['inputName'] + '\x22][value=\x22' + _0x45a607[_0x508bf9(0xa9)] + _0x508bf9(0xb2));
        if (_0x4f060e['attr'](_0x508bf9(0x1eb)) !== _0x508bf9(0x198)) {
            if (_0x4f060e['attr']('type') === _0x508bf9(0x124) && !_0x4f060e[_0x508bf9(0x18f)]('[data-radio-skip]')[_0x508bf9(0x1e2)]('radio-skip')) _0x4f060e[_0x508bf9(0x1bf)](), _0x4f060e[_0x508bf9(0x1e7)]('.w-radio-input')[_0x508bf9(0x230)]('w--redirected-checked'), _0x4f060e[_0x508bf9(0xd0)]('input');
            else _0x45a607[_0x508bf9(0xa9)] === 'on' ? (_0x22c097['click'](), _0x22c097['siblings']('.w-checkbox-input')['addClass'](_0x508bf9(0x16e)), _0x22c097[_0x508bf9(0xd0)](_0x508bf9(0x1ab))) : (_0x22c097[_0x508bf9(0x1de)](_0x45a607[_0x508bf9(0xa9)]), _0x2dcd90[_0x508bf9(0x1de)](_0x45a607['value']), $(_0x508bf9(0xcb))[_0x508bf9(0x199)](_0x508bf9(0x166) + _0x45a607[_0x508bf9(0xa9)] + '\x22]')[_0x508bf9(0x9a)]('selected', !![]), _0x22c097[_0x508bf9(0xd0)](_0x508bf9(0x1ab)), _0x22c097[_0x508bf9(0xd0)](_0x508bf9(0x187)));
            const _0x32f850 = _0xb58155[_0x508bf9(0x1e2)](_0x508bf9(0x14b)),
                _0x4f09fd = _0xe14019[_0x508bf9(0x1e2)](_0x508bf9(0x14b));
            _0xb58155[_0x508bf9(0x14a)]()['addClass'](_0x32f850), _0xe14019[_0x508bf9(0x14a)]()[_0x508bf9(0x230)](_0x4f09fd);
        }
    });
    else _params && (getParams(), searchQ[_0x1d0e1a(0x1fd)](_0x440cd => {
        const _0x3a73a3 = _0x1d0e1a;
        if ($(_0x3a73a3(0xe8) + _0x440cd['inputName'] + _0x3a73a3(0x20f) + _0x440cd[_0x3a73a3(0xa9)] + _0x3a73a3(0xb2))[_0x3a73a3(0xd5)](_0x3a73a3(0x1eb)) !== 'file') {
            if ($(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + _0x3a73a3(0x20f) + _0x440cd['val'] + _0x3a73a3(0xb2))[_0x3a73a3(0xd5)](_0x3a73a3(0x1eb)) === 'radio') $(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + '\x22][value=\x22' + _0x440cd[_0x3a73a3(0x1de)] + '\x22]:not([data-prefill=\x22false\x22])')['click'](), $(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + _0x3a73a3(0x20f) + _0x440cd[_0x3a73a3(0x1de)] + _0x3a73a3(0xb2))[_0x3a73a3(0x1e7)](_0x3a73a3(0xb1))[_0x3a73a3(0x230)](_0x3a73a3(0x16e)), $(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + _0x3a73a3(0x20f) + _0x440cd['val'] + _0x3a73a3(0xb2))['trigger'](_0x3a73a3(0x1ab));
            else _0x440cd[_0x3a73a3(0x1de)] === 'on' ? ($('input[name=\x22' + _0x440cd[_0x3a73a3(0x1f9)] + _0x3a73a3(0xb2))[_0x3a73a3(0x1bf)](), $(_0x3a73a3(0xe8) + _0x440cd['key'] + _0x3a73a3(0xb2))[_0x3a73a3(0x1e7)](_0x3a73a3(0x1a4))[_0x3a73a3(0x230)](_0x3a73a3(0x16e)), $(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + '\x22]')['trigger'](_0x3a73a3(0x1ab))) : ($(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + _0x3a73a3(0xb2))[_0x3a73a3(0x1de)](_0x440cd['val']), $(_0x3a73a3(0xa7) + _0x440cd[_0x3a73a3(0x1f9)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x3a73a3(0x1de)](_0x440cd[_0x3a73a3(0x1de)]), $(_0x3a73a3(0x18b) + _0x440cd['key'] + _0x3a73a3(0xb2))[_0x3a73a3(0x199)](_0x3a73a3(0x166) + _0x440cd[_0x3a73a3(0x1de)] + '\x22]')[_0x3a73a3(0x9a)](_0x3a73a3(0x12e), !![]), $(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x3a73a3(0xd0)]('input'), $(_0x3a73a3(0xe8) + _0x440cd[_0x3a73a3(0x1f9)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x3a73a3(0xd0)](_0x3a73a3(0x187)));
        }
    }));
}
$(_0x538941(0x17b))['on'](_0x538941(0x1bf), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x538941(0x170))['on'](_0x538941(0x1bf), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x538941(0x199)](':input')[_0x538941(0xd3)](_0x538941(0x215))['on'](_0x538941(0x1ab), function(_0x52b6bd) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x538941(0x199)](_0x538941(0x179))['on'](_0x538941(0x1bf), function() { skip = !![], validation(), addClickClass(); });
$(_0x538941(0x1b8))['data'](_0x538941(0x17e)) ? $(_0x538941(0x1ed))[_0x538941(0x8f)]('disabled') : $(_0x538941(0x1ed))[_0x538941(0x230)]('disabled');

function clickableIndicator() {
    const _0x5f1874 = _0x538941;
    $(_0x5f1874(0xef))['data'](_0x5f1874(0x1a8)) && ($(_0x5f1874(0xfb))[_0x5f1874(0x8f)](_0x5f1874(0x1d1)), $(_0x5f1874(0xef))[_0x5f1874(0x1e2)](_0x5f1874(0x17e)) ? (x = $(this)[_0x5f1874(0x194)](), updateStep()) : $(this)[_0x5f1874(0x194)]() <= progress && (x = $(this)[_0x5f1874(0x194)](), updateStep())), $('[data-text=\x22current-step\x22]')[_0x5f1874(0xff)](x + 0x1);
}
$(_0x538941(0x1ed))['on'](_0x538941(0x1bf), clickableIndicator), excludeCount = !$(_0x538941(0x205))[_0x538941(0x1e2)](_0x538941(0x96)), steps[_0x538941(0x104)](function(_0x1c0e5b) {
    const _0x5c74ce = _0x538941,
        _0x383a6c = $(this)['data'](_0x5c74ce(0x213));
    console[_0x5c74ce(0xfe)](excludeCount), _0x383a6c && excludeCount && $(_0x5c74ce(0x1ed))['eq'](_0x1c0e5b)[_0x5c74ce(0x158)]();
});
$(_0x538941(0x205))[_0x538941(0x1e2)](_0x538941(0xa0)) && ($(_0x538941(0x186))[_0x538941(0x104)](function() {
    const _0x248da8 = _0x538941;
    $(this)[_0x248da8(0xdf)](_0x248da8(0x103), $(this)[_0x248da8(0x1e2)]('go-to'));
}), $(_0x538941(0x188))[_0x538941(0x104)](function() {
    const _0x23e9e8 = _0x538941;
    $(this)[_0x23e9e8(0xdf)](_0x23e9e8(0x18a), $(this)[_0x23e9e8(0x1e2)](_0x23e9e8(0x111)));
}));

function resetFormly() {
    const _0x2fd6e7 = _0x538941;
    $(_0x2fd6e7(0x205))['trigger'](_0x2fd6e7(0x10c)), $('[data-form=\x22multistep\x22]')[_0x2fd6e7(0x18f)]()[_0x2fd6e7(0x199)](_0x2fd6e7(0xaa))[_0x2fd6e7(0x158)](), x = 0x0, updateStep(), $('[data-form=\x22multistep\x22]')[_0x2fd6e7(0xe9)](), $('[data-form=\x22submit-btn\x22]')[_0x2fd6e7(0xff)](oldSubmitText), $('[data-form=\x22submit-btn\x22]')[_0x2fd6e7(0x1de)](oldSubmitText), $('[data-text=\x22current-step\x22]')[_0x2fd6e7(0xff)](0x1), $(_0x2fd6e7(0x205))[_0x2fd6e7(0x199)](_0x2fd6e7(0x227))[_0x2fd6e7(0x1e7)](_0x2fd6e7(0x1a4))[_0x2fd6e7(0x8f)](_0x2fd6e7(0x16e));
}
$(document)[_0x538941(0x21b)](function(_0xa46c0c, _0x41e85a, _0x44ad2a) {
    const _0x8dffe4 = _0x538941;
    if (_0x44ad2a[_0x8dffe4(0x17f)][_0x8dffe4(0xf4)](_0x8dffe4(0x1e3))) {
        const _0x35a327 = _0x41e85a['status'] === 0xc8,
            _0x1146c9 = _0x8dffe4(0x1b1);
        redirectTo && _0x35a327 && (newTab ? window['open'](redirectTo, _0x8dffe4(0x129)) : setTimeout(() => {
            const _0x37c5ea = _0x8dffe4;
            location[_0x37c5ea(0xf7)] = redirectTo;
        }, redirectDelay)), _0x35a327 && successCard !== '' && $('[data-success-card=\x22' + successCard + '\x22]')[_0x8dffe4(0x1f7)](), _0x35a327 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x35a327 && ($(_0x8dffe4(0xc4))[_0x8dffe4(0x1de)](_0x8dffe4(0x21c)), $(_0x8dffe4(0xc4))[_0x8dffe4(0xff)](_0x8dffe4(0x21c)));
    }
}), $(_0x538941(0x1d4))['on'](_0x538941(0x1bf), function() {
    const _0x217436 = _0x538941;
    var _0x83b09c = $(this)[_0x217436(0x14a)]()['find'](_0x217436(0x20d))[_0x217436(0x1e2)](_0x217436(0x1b6));
    setTimeout(function() {
        const _0x5e16e8 = _0x217436;
        $(_0x5e16e8(0xe8) + _0x83b09c + '\x22]')[_0x5e16e8(0x1ef)]();
    }, 0x64), back = !![], x = $(this)[_0x217436(0x1e2)](_0x217436(0x135)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(_0x217436(0xa5))[_0x217436(0xff)](steps[_0x217436(0xa4)])) : $(steps[x])[_0x217436(0x1e2)](_0x217436(0x213)) ? curStep = x + 0x0 : curStep = x + 0x1, $('[data-text=\x22current-step\x22]')[_0x217436(0xff)](curStep), back = ![];
}), $(_0x538941(0x20b))['on'](_0x538941(0x1bf), function() {
    const _0x2616c6 = _0x538941;
    $(_0x2616c6(0x205))[_0x2616c6(0xd0)](_0x2616c6(0x10c));
    let _0x3ec727 = $(this);
    $(this)[_0x2616c6(0xff)](_0x2616c6(0x21c)), setTimeout(function() {
        const _0x52a857 = _0x2616c6;
        $(_0x3ec727)[_0x52a857(0xff)](oldResetText), $(_0x3ec727)[_0x52a857(0x18f)](_0x52a857(0xaa))[_0x52a857(0x158)](), x = 0x0, updateStep(), $('[data-form=\x22multistep\x22]')[_0x52a857(0xe9)](), $(_0x52a857(0xc4))['text'](oldSubmitText), $(_0x52a857(0xc4))['val'](oldSubmitText), $(_0x3ec727)[_0x52a857(0x1de)](oldSubmitText), $(_0x52a857(0xb3))[_0x52a857(0xff)](0x1), $(_0x52a857(0x205))[_0x52a857(0x199)]('input:checkbox')[_0x52a857(0x1e7)]('.w-checkbox-input')[_0x52a857(0x8f)](_0x52a857(0x16e));
    }, resetDelay);
}), $('body')['on']('keypress', function(_0x18c8b8) {
    const _0xeef906 = _0x538941;
    if (_0x18c8b8[_0xeef906(0x108)] === 0xd) {
        _0x18c8b8['preventDefault'](), _0x18c8b8[_0xeef906(0xfa)]();
        if ($(steps[x])['find'](_0xeef906(0xe6))['is'](':focus')) $(steps[x])[_0xeef906(0x199)](_0xeef906(0xc5))[_0xeef906(0x1de)]($(steps[x])[_0xeef906(0x199)](_0xeef906(0xc5))[_0xeef906(0x1de)]() + '\x0a');
        else $(_0xeef906(0x126))[_0xeef906(0x1e2)](_0xeef906(0x1cb)) && fill && (totalSteps > curStep && $('[data-form=\x22next-btn\x22]')[0x0][_0xeef906(0x1bf)]());
    }
}), $(_0x538941(0x140))[_0x538941(0xac)](function(_0xef4d3c) {
    const _0x90db7d = _0x538941;
    (_0xef4d3c['metaKey'] || _0xef4d3c[_0x90db7d(0x144)]) && _0xef4d3c['keyCode'] == 0xd && (x >= steps['length'] - 0x1 && fill ? $(steps[x])[_0x90db7d(0x199)](_0x90db7d(0xfc))[_0x90db7d(0x1bf)]() : (_0xef4d3c[_0x90db7d(0xc9)](), _0xef4d3c['stopPropagation']()));
}), $(_0x538941(0x205))[_0x538941(0x199)](_0x538941(0x1e4))['on']('change', function() {
    const _0x14ad24 = _0x538941;
    all_data = all_data['filter'](_0x317a7f => _0x317a7f[_0x14ad24(0x1c3)] !== $(this)[_0x14ad24(0xd5)](_0x14ad24(0x228))), $(this)[_0x14ad24(0xd5)]('type') === _0x14ad24(0x1d3) ? $(this)['is'](_0x14ad24(0x216)) ? all_data['push']({ 'field': $(this)[_0x14ad24(0xd5)](_0x14ad24(0x228)), 'value': $(this)[_0x14ad24(0x1e7)](_0x14ad24(0xb5))[_0x14ad24(0xff)]() }) : $(_0x14ad24(0x1bb) + $(this)['attr']('name') + '\x22]')['hide']() : (all_data['push']({ 'field': $(this)[_0x14ad24(0xd5)](_0x14ad24(0x228)), 'value': $(this)['val']() }), $(this)[_0x14ad24(0x1de)]() !== '' && resetInputErrorMessage($(this)[_0x14ad24(0xd5)](_0x14ad24(0x228)))), all_data['forEach'](function(_0x201542) {
        const _0x1f5023 = _0x14ad24;
        $('[data-input-field=\x22' + _0x201542[_0x1f5023(0x1c3)] + '\x22]')['show'](), $(_0x1f5023(0x1bb) + _0x201542[_0x1f5023(0x1c3)] + '\x22]')[_0x1f5023(0xff)](_0x201542[_0x1f5023(0xa9)]);
    });
}), $(_0x538941(0x205))[_0x538941(0x199)](_0x538941(0xe6))['on'](_0x538941(0x187), function() {
    const _0x26600a = _0x538941;
    $(this)[_0x26600a(0x1de)]() !== '' && resetInputErrorMessage($(this)[_0x26600a(0xd5)](_0x26600a(0x228))), all_data = all_data[_0x26600a(0x19c)](_0x599c53 => _0x599c53[_0x26600a(0x1c3)] !== $(this)[_0x26600a(0xd5)](_0x26600a(0x228))), all_data[_0x26600a(0x165)]({ 'field': $(this)[_0x26600a(0xd5)](_0x26600a(0x228)), 'value': $(this)[_0x26600a(0x1de)]() }), all_data[_0x26600a(0x1fd)](function(_0x3d9410) {
        const _0x95a373 = _0x26600a;
        $('[data-input-field=\x22' + _0x3d9410[_0x95a373(0x1c3)] + '\x22]')[_0x95a373(0xe9)](), $(_0x95a373(0x1bb) + _0x3d9410[_0x95a373(0x1c3)] + '\x22]')[_0x95a373(0xff)](_0x3d9410[_0x95a373(0xa9)]);
    });
}), $(_0x538941(0x205))[_0x538941(0x199)]('select')['on']('change', function() {
    const _0x7c1644 = _0x538941;
    $(this)[_0x7c1644(0x1de)]() !== '' && resetInputErrorMessage($(this)[_0x7c1644(0xd5)]('name'));
    var _0x2ad785 = $(this)['data'](_0x7c1644(0x162));
    all_data = all_data[_0x7c1644(0x19c)](_0x50b348 => _0x50b348[_0x7c1644(0x1c3)] !== $(this)[_0x7c1644(0xd5)](_0x7c1644(0x228))), all_data[_0x7c1644(0x165)]({ 'field': $(this)[_0x7c1644(0xd5)]('name'), 'value': _0x2ad785 ? $(this)[_0x7c1644(0x199)](_0x7c1644(0x15c))[_0x7c1644(0xff)]() : $(this)[_0x7c1644(0x1de)]() }), all_data[_0x7c1644(0x1fd)](function(_0x23d73f) {
        const _0x2e67cb = _0x7c1644;
        $('[data-input-field=\x22' + _0x23d73f[_0x2e67cb(0x1c3)] + '\x22]')[_0x2e67cb(0xe9)](), $('[data-input-field=\x22' + _0x23d73f[_0x2e67cb(0x1c3)] + '\x22]')[_0x2e67cb(0xff)](_0x23d73f[_0x2e67cb(0xa9)]);
    });
}), updateStep(), triggerInputAllData(), $('[data-cms-select=cms]')[_0x538941(0x104)](function() {
    const _0x374c0f = _0x538941,
        _0x37e247 = $(this)[_0x374c0f(0x199)]('[data-cms-select=text]'),
        _0x1b64b7 = [];
    _0x37e247[_0x374c0f(0x104)](function() {
        const _0x1fae7b = _0x374c0f;
        _0x1b64b7[_0x1fae7b(0x165)]($(this)['text']()[_0x1fae7b(0xcf)]());
    });
    const _0x4242ab = $(this)[_0x374c0f(0x1e7)](_0x374c0f(0x18c));
    $['each'](_0x1b64b7, function(_0x2b58fc, _0x312200) {
        const _0x445dfc = _0x374c0f,
            _0x3eb30f = $(_0x445dfc(0x130))[_0x445dfc(0x1de)](_0x312200)['text'](_0x312200);
        _0x4242ab[_0x445dfc(0xdf)](_0x3eb30f);
    });
});

function cloneRemove() {
    const _0x26ba9a = _0x538941;
    $('[data-clone-wrapper]')[_0x26ba9a(0x104)](function() {
        const _0x2397e3 = _0x26ba9a;
        $(this)['find'](_0x2397e3(0x222))[_0x2397e3(0xa4)] < 0x2 ? $(this)[_0x2397e3(0x199)]('[data-form=\x22remove-clone\x22]')['hide']() : $(this)['find']('[data-form=\x22remove-clone\x22]')[_0x2397e3(0xe9)]();
    });
}

function cloneRemoveInput() {
    const _0x238c12 = _0x538941;
    $(_0x238c12(0x141))[_0x238c12(0x104)](function() {
        const _0x1e9955 = _0x238c12;
        console[_0x1e9955(0xfe)]($(this)[_0x1e9955(0x199)](_0x1e9955(0x147))['length']), $(this)[_0x1e9955(0x199)](_0x1e9955(0x147))[_0x1e9955(0xa4)] < 0x2 ? $(this)[_0x1e9955(0x199)](_0x1e9955(0x1d8))[_0x1e9955(0x158)]() : $(this)[_0x1e9955(0x199)](_0x1e9955(0x1d8))[_0x1e9955(0xe9)]();
    });
}
$(_0x538941(0x1d7))['on']('click', function() {
    const _0x4ebff1 = _0x538941,
        _0x445623 = $(this)[_0x4ebff1(0x18f)](_0x4ebff1(0x222))[_0x4ebff1(0xa4)] > 0x0 ? $(this)[_0x4ebff1(0x18f)](_0x4ebff1(0x222))[_0x4ebff1(0x194)]() : $(this)[_0x4ebff1(0x18f)]('[data-display]')[_0x4ebff1(0x194)](),
        _0x2abca6 = $(this)[_0x4ebff1(0x18f)](_0x4ebff1(0x222))['length'] > 0x0 ? $(this)['parents'](_0x4ebff1(0x222))[_0x4ebff1(0x1e2)](_0x4ebff1(0xeb)) : $(this)[_0x4ebff1(0x18f)](_0x4ebff1(0x1ee))['data'](_0x4ebff1(0x12f));
    $(_0x4ebff1(0x1dc) + _0x2abca6 + '\x22]')['eq'](_0x445623)['remove'](), $(_0x4ebff1(0x9c) + _0x2abca6 + '\x22]')['eq'](_0x445623)[_0x4ebff1(0x1cc)](), cloneRemove();
    let _0x468766 = $('[data-add-new=\x22' + _0x2abca6 + '\x22]')[_0x4ebff1(0x1e2)](_0x4ebff1(0x115)),
        _0x5b37d1 = $(_0x4ebff1(0x1dc) + _0x2abca6 + '\x22]')['length'];
    console[_0x4ebff1(0xfe)](_0x5b37d1, _0x468766), _0x5b37d1 < _0x468766 && (console[_0x4ebff1(0xfe)](_0x4ebff1(0xe9)), $(_0x4ebff1(0x122) + _0x2abca6 + '\x22]')['show']()), validation();
}), $(_0x538941(0x1d8))['on'](_0x538941(0x1bf), function() {
    const _0xf71d26 = _0x538941;
    let _0x3ccc85 = $(this)[_0xf71d26(0x1e7)]()[_0xf71d26(0xd5)](_0xf71d26(0x228)),
        _0x7d4133 = $(this)['parents']('[data-clone-input]')[_0xf71d26(0x1e2)](_0xf71d26(0x127));
    $(this)[_0xf71d26(0x14a)](_0xf71d26(0x147))['remove'](), $(_0xf71d26(0x1bb) + _0x3ccc85 + '\x22]')['parent']('[data-display-input]')[_0xf71d26(0x1cc)]();
    let _0x3a3537 = $(_0xf71d26(0x17d) + _0x7d4133 + '\x22]')[_0xf71d26(0x1e2)](_0xf71d26(0x151)),
        _0x291443 = $('[data-clone-input=\x22' + _0x7d4133 + '\x22]')[_0xf71d26(0xa4)];
    _0x291443 < _0x3a3537 && $(_0xf71d26(0x17d) + _0x7d4133 + '\x22]')[_0xf71d26(0xe9)](), validation();
}), $(_0x538941(0xf5))['on'](_0x538941(0x1bf), function() {
    const _0xd6184 = _0x538941;
    let _0x2a086d = $(this)[_0xd6184(0x1e2)]('add-new'),
        _0x4cce29 = $(this)[_0xd6184(0x1e2)](_0xd6184(0x115));
    var _0x5c1ae2 = $(_0xd6184(0x1dc) + _0x2a086d + '\x22]')['eq'](0x0)[_0xd6184(0xeb)](!![]),
        _0x1cee3f = $('[data-display=\x22' + _0x2a086d + '\x22]')['eq'](0x0)[_0xd6184(0xeb)](!![]);
    let _0x345bf3 = '';
    $(this)[_0xd6184(0x199)](_0xd6184(0x1d7))[_0xd6184(0xe9)](), cloneRemove(), _0x5c1ae2[_0xd6184(0x199)](_0xd6184(0x147))['find']('input')[_0xd6184(0x1de)](''), _0x5c1ae2[_0xd6184(0x199)]('[data-clone-input]')['find'](_0xd6184(0x197))[_0xd6184(0x1de)](''), _0x5c1ae2[_0xd6184(0x199)](_0xd6184(0x147))[_0xd6184(0x199)](_0xd6184(0xe6))[_0xd6184(0x1de)](''), _0x5c1ae2[_0xd6184(0x199)]('[data-clone-input]')[_0xd6184(0xd3)](':first')[_0xd6184(0x1cc)](), _0x5c1ae2[_0xd6184(0x199)](_0xd6184(0x147))[_0xd6184(0x199)](_0xd6184(0xe2))[_0xd6184(0x1bf)](), _0x1cee3f[_0xd6184(0x199)]('[data-display-input]')[_0xd6184(0xd3)](':first')['remove'](), _0x5c1ae2[_0xd6184(0x199)](_0xd6184(0x1ab))[_0xd6184(0x104)](function() {
        const _0x269852 = _0xd6184;
        if ($(this)[_0x269852(0x160)](_0x269852(0x147))[_0x269852(0xa4)] > 0x0) {
            let _0x2fc962 = 0x0;
            const _0xe1a11 = $(this)[_0x269852(0x160)](_0x269852(0x147))[_0x269852(0x1e2)](_0x269852(0x127));
            $(_0x269852(0x106) + _0xe1a11 + '\x22]\x20input')[_0x269852(0x104)](function() {
                const _0x3b38e6 = _0x269852,
                    _0x57948a = $(this)['attr'](_0x3b38e6(0x228));
                if (_0x57948a && _0x57948a[_0x3b38e6(0x1d6)](_0x3b38e6(0xec))) { const _0x2a8c2d = parseInt(_0x57948a[_0x3b38e6(0x225)]('-')[0x1]);!isNaN(_0x2a8c2d) && _0x2a8c2d > _0x2fc962 && (_0x2fc962 = _0x2a8c2d); }
            }), _0x2fc962++, _0x345bf3 = this[_0x269852(0x228)] + '-' + _0x2fc962;
        } else _0x345bf3 = this[_0x269852(0x228)] + '-' + (parseInt($(_0x269852(0x1dc) + _0x2a086d + '\x22]')[_0x269852(0x192)]()[_0x269852(0x194)]()) + 0x1);
        $(this)[_0x269852(0x1de)](''), $(this)[_0x269852(0xd5)](_0x269852(0x228), _0x345bf3), $(this)[_0x269852(0xd5)]('data-name', _0x345bf3);
    }), _0x5c1ae2[_0xd6184(0x199)](_0xd6184(0xe6))[_0xd6184(0x104)](function() {
        const _0x26a568 = _0xd6184;
        if ($(this)[_0x26a568(0x160)]('[data-clone-input]')[_0x26a568(0xa4)] > 0x0) {
            let _0x2e68d4 = 0x0;
            const _0x3911b7 = $(this)['closest'](_0x26a568(0x147))[_0x26a568(0x1e2)](_0x26a568(0x127));
            $(_0x26a568(0x106) + _0x3911b7 + _0x26a568(0x15d))[_0x26a568(0x104)](function() {
                const _0x52057f = _0x26a568,
                    _0x365e9e = $(this)['attr']('name');
                if (_0x365e9e && _0x365e9e[_0x52057f(0x1d6)]('relationship-')) { const _0x352282 = parseInt(_0x365e9e[_0x52057f(0x225)]('-')[0x1]);!isNaN(_0x352282) && _0x352282 > _0x2e68d4 && (_0x2e68d4 = _0x352282); }
            }), _0x2e68d4++, _0x345bf3 = this[_0x26a568(0x228)] + '-' + _0x2e68d4;
        } else _0x345bf3 = this[_0x26a568(0x228)] + '-' + (parseInt($(_0x26a568(0x1dc) + _0x2a086d + '\x22]')[_0x26a568(0x192)]()[_0x26a568(0x194)]()) + 0x1);
        $(this)[_0x26a568(0x1de)](''), $(this)['attr'](_0x26a568(0x228), _0x345bf3), $(this)[_0x26a568(0xd5)](_0x26a568(0x190), _0x345bf3);
    }), _0x5c1ae2[_0xd6184(0x199)](_0xd6184(0x197))[_0xd6184(0x104)](function() {
        const _0x496fa9 = _0xd6184;
        if ($(this)['closest'](_0x496fa9(0x147))[_0x496fa9(0xa4)] > 0x0) {
            let _0x69ffed = 0x0;
            const _0x2dbf51 = $(this)['closest']('[data-clone-input]')['data'](_0x496fa9(0x127));
            $(_0x496fa9(0x106) + _0x2dbf51 + _0x496fa9(0x11a))[_0x496fa9(0x104)](function() {
                const _0x4e1f7d = _0x496fa9,
                    _0x414f11 = $(this)[_0x4e1f7d(0xd5)](_0x4e1f7d(0x228));
                if (_0x414f11 && _0x414f11[_0x4e1f7d(0x1d6)](_0x4e1f7d(0xec))) { const _0x43aebe = parseInt(_0x414f11[_0x4e1f7d(0x225)]('-')[0x1]);!isNaN(_0x43aebe) && _0x43aebe > _0x69ffed && (_0x69ffed = _0x43aebe); }
            }), _0x69ffed++, _0x345bf3 = this[_0x496fa9(0x228)] + '-' + _0x69ffed;
        } else _0x345bf3 = this[_0x496fa9(0x228)] + '-' + (parseInt($(_0x496fa9(0x1dc) + _0x2a086d + '\x22]')[_0x496fa9(0x192)]()[_0x496fa9(0x194)]()) + 0x1);
        $(this)[_0x496fa9(0x1de)](''), $(this)['attr'](_0x496fa9(0x228), _0x345bf3), $(this)[_0x496fa9(0xd5)](_0x496fa9(0x190), _0x345bf3);
    }), _0x1cee3f[_0xd6184(0x199)](_0xd6184(0x20d))[_0xd6184(0x104)](function() {
        const _0x2da7f6 = _0xd6184;
        if ($(this)[_0x2da7f6(0x1e2)](_0x2da7f6(0x1b6))) {
            let _0x3d7f80 = 0x0;
            const _0x43b713 = $(this)[_0x2da7f6(0x1e2)](_0x2da7f6(0x1b6))[_0x2da7f6(0x225)]('-')[0x0];
            $(_0x2da7f6(0x9c) + _0x2a086d + _0x2da7f6(0x169) + _0x43b713 + '\x22]')['each'](function() {
                const _0x5a0a47 = _0x2da7f6,
                    _0x4d78bd = $(this)['attr']('data-input-field'),
                    _0x583d2e = parseInt(_0x4d78bd[_0x5a0a47(0x225)]('-')[0x1]);
                !isNaN(_0x583d2e) && _0x583d2e > _0x3d7f80 && (_0x3d7f80 = _0x583d2e);
            }), _0x3d7f80++;
            const _0xa9c50b = _0x43b713 + '-' + _0x3d7f80;
            $(this)['attr'](_0x2da7f6(0x1c7), _0xa9c50b);
        }
    }), $(_0xd6184(0x19a) + _0x2a086d + '\x22]')['append'](_0x5c1ae2), $('[data-display-wrapper=\x22' + _0x2a086d + '\x22]')[_0xd6184(0xdf)](_0x1cee3f), $(_0xd6184(0x15e) + _0x2a086d + '\x22]')[_0xd6184(0x104)](function() {
        const _0x8eb93b = _0xd6184;
        $(this)[_0x8eb93b(0xff)]($(this)[_0x8eb93b(0x18f)](_0x8eb93b(0x1dc) + _0x2a086d + '\x22]')['index']() + 0x1);
    }), $(_0xd6184(0xde) + _0x2a086d + '\x22]')[_0xd6184(0x104)](function() {
        const _0x364c2c = _0xd6184;
        $(this)['text']($(this)['parents'](_0x364c2c(0x9c) + _0x2a086d + '\x22]')[_0x364c2c(0x194)]() + 0x1);
    });
    let _0x3e6000 = $('[data-clone-wrapper=\x22' + _0x2a086d + _0xd6184(0x12a) + _0x2a086d + '\x22]')[_0xd6184(0xa4)];
    if (_0x3e6000 >= _0x4cce29) { $(this)['hide'](); return; }
    $(this)[_0xd6184(0xe9)](), validation();
}), $(_0x538941(0x19e))['on'](_0x538941(0x1bf), function() {
    const _0x1c99f3 = _0x538941,
        _0x436cc5 = $(this)[_0x1c99f3(0x18f)](_0x1c99f3(0x222))['index']();
    let _0x7783f2 = $(this)['data'](_0x1c99f3(0x8d));
    var _0x505fef = $(_0x1c99f3(0x106) + _0x7783f2 + '\x22]')['eq'](0x0)[_0x1c99f3(0xeb)](!![]),
        _0x41d1e8 = $(_0x1c99f3(0x22a) + _0x7783f2 + '\x22]')['eq'](0x0)[_0x1c99f3(0xeb)](!![]);
    let _0x2ae19e = $(this)[_0x1c99f3(0x1e2)](_0x1c99f3(0x151)),
        _0xad5729 = 0x0;
    $(_0x1c99f3(0x106) + _0x7783f2 + '\x22]\x20input')[_0x1c99f3(0x104)](function() {
        const _0x2e958e = _0x1c99f3,
            _0x56ffcf = $(this)[_0x2e958e(0xd5)](_0x2e958e(0x228));
        if (_0x56ffcf) { const _0x1c209a = parseInt(_0x56ffcf[_0x2e958e(0x225)]('-')[0x1]);!isNaN(_0x1c209a) && _0x1c209a > _0xad5729 && (_0xad5729 = _0x1c209a); }
    }), $(_0x1c99f3(0x106) + _0x7783f2 + _0x1c99f3(0x11a))[_0x1c99f3(0x104)](function() {
        const _0x4143a4 = _0x1c99f3,
            _0xf22560 = $(this)['attr']('name');
        if (_0xf22560) { const _0x44e366 = parseInt(_0xf22560[_0x4143a4(0x225)]('-')[0x1]);!isNaN(_0x44e366) && _0x44e366 > _0xad5729 && (_0xad5729 = _0x44e366); }
    }), $('[data-clone-input=\x22' + _0x7783f2 + _0x1c99f3(0x15d))[_0x1c99f3(0x104)](function() {
        const _0x15674f = _0x1c99f3,
            _0x2e9cfb = $(this)['attr'](_0x15674f(0x228));
        if (_0x2e9cfb) { const _0x4ff730 = parseInt(_0x2e9cfb[_0x15674f(0x225)]('-')[0x1]);!isNaN(_0x4ff730) && _0x4ff730 > _0xad5729 && (_0xad5729 = _0x4ff730); }
    }), _0xad5729++, _0x505fef[_0x1c99f3(0x199)](_0x1c99f3(0x1ab))[_0x1c99f3(0x104)](function() {
        const _0xd86f1e = _0x1c99f3,
            _0x251beb = $(this)[_0xd86f1e(0xd5)]('name');
        let _0x123cf7 = _0x251beb + '-' + _0xad5729;
        $(this)[_0xd86f1e(0x1de)](''), $(this)[_0xd86f1e(0xd5)](_0xd86f1e(0x228), _0x123cf7), $(this)[_0xd86f1e(0xd5)](_0xd86f1e(0x190), _0x123cf7);
    }), _0x505fef[_0x1c99f3(0x199)]('select')[_0x1c99f3(0x104)](function() {
        const _0x47b16a = _0x1c99f3,
            _0x340bc8 = $(this)[_0x47b16a(0xd5)](_0x47b16a(0x228));
        let _0x53e152 = _0x340bc8 + '-' + _0xad5729;
        $(this)[_0x47b16a(0x1de)](''), $(this)[_0x47b16a(0xd5)](_0x47b16a(0x228), _0x53e152), $(this)['attr']('data-name', _0x53e152);
    }), _0x505fef['find']('textarea')[_0x1c99f3(0x104)](function() {
        const _0xd26db3 = _0x1c99f3,
            _0x31aebc = $(this)[_0xd26db3(0xd5)](_0xd26db3(0x228));
        let _0x3be3e8 = _0x31aebc + '-' + _0xad5729;
        $(this)[_0xd26db3(0x1de)](''), $(this)[_0xd26db3(0xd5)](_0xd26db3(0x228), _0x3be3e8), $(this)['attr'](_0xd26db3(0x190), _0x3be3e8);
    }), _0x41d1e8[_0x1c99f3(0x199)](_0x1c99f3(0x20d))['each'](function() {
        const _0x5aaa24 = _0x1c99f3;
        $(this)['attr'](_0x5aaa24(0x1c7), _0x5aaa24(0xec) + _0xad5729);
    }), $(this)[_0x1c99f3(0x1e7)](_0x1c99f3(0xd9) + _0x7783f2 + '\x22]')[_0x1c99f3(0xdf)](_0x505fef), $(_0x1c99f3(0x1ee))['eq'](_0x436cc5)['find'](_0x1c99f3(0x117) + _0x7783f2 + '\x22]')[_0x1c99f3(0xdf)](_0x41d1e8), $(_0x1c99f3(0x8e) + _0x7783f2 + '\x22]')[_0x1c99f3(0x104)](function() {
        const _0x560b44 = _0x1c99f3;
        $(this)[_0x560b44(0xff)]($(this)[_0x560b44(0x18f)](_0x560b44(0x106) + _0x7783f2 + '\x22]')[_0x560b44(0x194)]() + 0x1);
    }), $(_0x1c99f3(0x175) + _0x7783f2 + '\x22]')[_0x1c99f3(0x104)](function() {
        const _0x294fd6 = _0x1c99f3;
        $(this)[_0x294fd6(0xff)]($(this)[_0x294fd6(0x18f)](_0x294fd6(0x22a) + _0x7783f2 + '\x22]')['index']() + 0x1);
    });
    let _0x1d03d9 = $('[data-clone-input-wrapper=\x22' + _0x7783f2 + _0x1c99f3(0x1fe) + _0x7783f2 + '\x22]')[_0x1c99f3(0xa4)];
    if (_0x1d03d9 >= _0x2ae19e) { $(this)['hide'](); return; }
    $(this)[_0x1c99f3(0xe9)](), cloneRemoveInput(), validation();
}), $(_0x538941(0x150))['on']('click', function() {
    const _0x366bec = _0x538941,
        _0xa8a2c2 = $(this)['data'](_0x366bec(0x1a1));
    $('input[name=\x22' + _0xa8a2c2 + '\x22]')[_0x366bec(0x1de)](''), validation();
});

function andLogic() {
    const _0xb33d61 = _0x538941;
    conditionalResult && (steps['eq'](x)['find'](_0xb33d61(0x171))['hide'](), steps['eq'](x)[_0xb33d61(0x199)](_0xb33d61(0x171))['each'](function() {
        const _0x47ecb0 = _0xb33d61;

        function _0x4ab268(_0x9e35b8) {
            const _0x53be2a = _0x5a06,
                _0x58bf5e = _0x9e35b8[_0x53be2a(0x225)]('&'),
                _0x5c13c1 = [];
            return _0x58bf5e[_0x53be2a(0x1fd)](_0x2b2c2c => {
                const _0x557a45 = _0x53be2a,
                    [_0x5442c7, _0x26ab29] = _0x2b2c2c[_0x557a45(0x225)]('=');
                _0x5c13c1[_0x557a45(0x165)]({ 'field': _0x5442c7, 'value': _0x26ab29 });
            }), _0x5c13c1;
        }
        const _0x391f55 = $(this)[_0x47ecb0(0xd5)](_0x47ecb0(0xc1)),
            _0x2c6780 = _0x4ab268(_0x391f55);

        function _0x767be9(_0x470d59, _0x240215) { const _0x30f5f0 = _0x47ecb0; return _0x240215[_0x30f5f0(0x1a9)]((_0x212cbe, _0x38023c) => { const _0xb4578a = _0x30f5f0; if (_0x470d59[0x0] && _0x212cbe['field'] === _0x470d59[0x0][_0xb4578a(0x1c3)]) return _0x470d59[_0xb4578a(0x1a7)]((_0x5f1af, _0xdb4dd3) => _0x240215[_0x38023c + _0xdb4dd3] && _0x240215[_0x38023c + _0xdb4dd3][_0xb4578a(0x1c3)] === _0x5f1af[_0xb4578a(0x1c3)] && _0x240215[_0x38023c + _0xdb4dd3][_0xb4578a(0xa9)] === _0x5f1af[_0xb4578a(0xa9)]); return ![]; }); }
        const _0x12f438 = _0x767be9(_0x2c6780, all_data);
        _0x12f438 ? $(this)['show']() : $(this)[_0x47ecb0(0x158)]();
    }));
}
progressiveTarget[_0x538941(0x230)](_0x538941(0x158)), progressiveInput['on'](_0x538941(0x1ab), function() {
    const _0x1534a5 = _0x538941,
        _0xdc87b8 = $(this)[_0x1534a5(0x1e2)](_0x1534a5(0x1d2)),
        _0x346b5f = $(this)['val'](),
        _0x55e09e = form[_0x1534a5(0x199)](_0x1534a5(0x93) + _0xdc87b8 + '\x22]')[_0x1534a5(0x1e2)](_0x1534a5(0x118));
    let _0x52bfd3 = form[_0x1534a5(0x199)](_0x1534a5(0x93) + _0xdc87b8 + '\x22][data-input-reveal-value]')[_0x1534a5(0x19c)](function() { const _0x16b67b = _0x1534a5; return $(this)[_0x16b67b(0x1e2)](_0x16b67b(0x118))[_0x16b67b(0x18e)]() === _0x346b5f['toLowerCase'](); }),
        _0x2cda63 = form[_0x1534a5(0x199)]('[data-input-target=\x22' + _0xdc87b8 + _0x1534a5(0x16d));
    form['find'](_0x1534a5(0x93) + _0xdc87b8 + '\x22]')[_0x1534a5(0x230)]('f-hide'), form[_0x1534a5(0x199)]('[data-input-target=\x22' + _0xdc87b8 + '\x22]')[_0x1534a5(0x8f)](_0x1534a5(0x1ce));
    _0x346b5f !== '' && (_0x55e09e[_0x1534a5(0x18e)]() === '*' && _0x346b5f !== '' ? (_0x2cda63[_0x1534a5(0x8f)]('f-hide'), _0x2cda63[_0x1534a5(0x230)](_0x1534a5(0x1ce))) : (_0x52bfd3[_0x1534a5(0x8f)]('f-hide'), _0x52bfd3['addClass'](_0x1534a5(0x1ce))));

    function _0x2c38f1(_0x33ec36) {
        const _0x27d6fd = _0x1534a5;
        _0x33ec36 && (form['find'](_0x27d6fd(0x1ba) + _0x33ec36 + '\x22]')[_0x27d6fd(0x1de)]() !== '' && form[_0x27d6fd(0x199)](_0x27d6fd(0x1ba) + _0x33ec36 + '\x22]')['trigger'](_0x27d6fd(0x1ab)));
    }
    let _0x39f56e = form['find'](_0x1534a5(0x93) + _0xdc87b8 + '\x22]')[_0x1534a5(0x199)](_0x1534a5(0x149))['data'](_0x1534a5(0x1d2));
    _0x2c38f1(_0x39f56e), form[_0x1534a5(0x199)]('[data-input-reveal]:not(:visible)')[_0x1534a5(0x104)](function() {
        const _0x37086d = _0x1534a5,
            _0x142c71 = $(this)[_0x37086d(0x1e2)](_0x37086d(0x1d2));
        form['find']('[data-input-target=\x22' + _0x142c71 + '\x22]')[_0x37086d(0x8f)](_0x37086d(0x1ce)), form[_0x37086d(0x199)]('[data-input-target=\x22' + _0x142c71 + '\x22]')[_0x37086d(0x230)](_0x37086d(0xb4));
    });
});

function addClickClass() {
    const _0x546c6f = _0x538941,
        _0x1b63c0 = $(this)[_0x546c6f(0x1e2)](_0x546c6f(0x14b)),
        _0x5b072e = $(this)['attr'](_0x546c6f(0x228));
    $(_0x546c6f(0xe8) + _0x5b072e + '\x22]')[_0x546c6f(0x14a)]()['removeClass'](_0x1b63c0), $(this)['is'](_0x546c6f(0x216)) && $(this)[_0x546c6f(0x14a)]()[_0x546c6f(0x230)](_0x1b63c0);
}

function _0x5a06(_0x23ee0e, _0x4819be) { const _0x3cb10c = _0x3cb1(); return _0x5a06 = function(_0x5a0691, _0x1359e6) { _0x5a0691 = _0x5a0691 - 0x8d; let _0x342158 = _0x3cb10c[_0x5a0691]; return _0x342158; }, _0x5a06(_0x23ee0e, _0x4819be); }
$('[data-click-addclass]')['on'](_0x538941(0x187), addClickClass);

function updateCounter(_0x5dc464) {
    const _0x2edd51 = _0x538941;
    var _0x2f46db = new Date(),
        _0x1b58de = _0x2f46db['getMonth'](),
        _0x2dc0cf = btoa(_0x2edd51(0x220)),
        _0x5e7f2d = btoa(_0x1b58de[_0x2edd51(0x11c)]()),
        _0x1d9561 = getCookie(_0x2dc0cf);
    !_0x1d9561 || _0x1d9561 !== _0x5e7f2d ? $['post'](_0x2edd51(0x9b), function() {
        const _0x4a09d5 = _0x2edd51;
        console[_0x4a09d5(0xfe)]('Counter\x20updated\x20successfully.'), document['cookie'] = _0x2dc0cf + '=' + _0x5e7f2d;
    })['fail'](function(_0x3a06c5, _0x12724a, _0x3545aa) {
        const _0x4f22ae = _0x2edd51;
        console['error'](_0x4f22ae(0x133), _0x3545aa);
    }) : console['log'](_0x2edd51(0x1e0));
}

function getCookie(_0x52773d) { const _0x3fa13b = _0x538941; var _0x5057e3 = null; if (document['cookie'] && document[_0x3fa13b(0x232)] !== '') { var _0xfa56e4 = document['cookie'][_0x3fa13b(0x225)](';'); for (var _0x415edf = 0x0; _0x415edf < _0xfa56e4['length']; _0x415edf++) { var _0x5184bf = _0xfa56e4[_0x415edf][_0x3fa13b(0xcf)](); if (_0x5184bf['substring'](0x0, _0x52773d[_0x3fa13b(0xa4)] + 0x1) === _0x52773d + '=') { _0x5057e3 = decodeURIComponent(_0x5184bf[_0x3fa13b(0x128)](_0x52773d[_0x3fa13b(0xa4)] + 0x1)); break; } } } return _0x5057e3; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window['location'][_0x538941(0xc7)]),
    formlySupportParam = formlyUrlParams[_0x538941(0xcc)]('formly-support'),
    showButton = formlySupportParam === _0x538941(0x211),
    passIcon = _0x538941(0xba),
    failIcon = _0x538941(0x224);
let isScriptLoaded = !![],
    scriptLocation = _0x538941(0x1c0),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x538941(0xd8) : _0x538941(0xa8),
    resultStatus = _0x538941(0x92),
    scriptSrcAdded = '';

function isElementPresent(_0x3b01da, _0x3ca745) { const _0x1d486e = _0x538941; return document[_0x1d486e(0x18d)]('[' + _0x3ca745 + '=\x22' + _0x3b01da + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x538941(0x1d9), 'data-form');
const multistepForm = document[_0x538941(0x18d)](_0x538941(0xf3)),
    formStepLength = multistepForm[_0x538941(0xe3)]('[data-form=\x22step\x22]')[_0x538941(0xa4)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x538941(0x18d)]('[data-form=\x22multistep\x22]'),
    nextBtnExist = multistepContainer[_0x538941(0x18d)]('[data-form=\x22next-btn\x22]'),
    backBtnExist = multistepContainer[_0x538941(0x18d)](_0x538941(0x170)),
    submitBtnExist = multistepContainer['querySelector'](_0x538941(0xc4));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x538941(0x19d)][_0x538941(0x18e)]() === 'input', isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist['tagName']['toLowerCase']() === _0x538941(0x1ab) && submitBtnExist['type']['toLowerCase']() === 'submit', isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x538941(0x19d)][_0x538941(0x18e)]() === _0x538941(0x1ab);
const checkPowerup = _0x4940cc => document[_0x538941(0x18d)](_0x4940cc) !== null,
    progressBarAttr = checkPowerup(_0x538941(0x163)),
    progressIndicatorAttr = checkPowerup(_0x538941(0xfb)),
    customProgressAttr = checkPowerup(_0x538941(0xfb)),
    cardDivAttr = checkPowerup('[data-card=\x22true\x22]'),
    currentStepAttr = checkPowerup(_0x538941(0xb3)),
    totalStepAttr = checkPowerup(_0x538941(0xa5)),
    enterAttr = checkPowerup(_0x538941(0x1e1)),
    submitAttr = checkPowerup('[data-submit=\x22true\x22]'),
    radioSkipAttr = checkPowerup(_0x538941(0x1bc)),
    customCheckboxAttr = checkPowerup('[data-checkbox]'),
    recapatchaAttr = checkPowerup(_0x538941(0x214));
(!isScriptLoaded || scriptLocation !== _0x538941(0x1c0) || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x538941(0x1c6));

function isScriptUrlMatch(_0x62a1e8, _0xc4f619) { const _0x5d4da5 = _0x538941; for (var _0x21df01 = 0x0; _0x21df01 < _0xc4f619['length']; _0x21df01++) { if (_0x62a1e8[_0x5d4da5(0xf4)](_0xc4f619[_0x21df01])) return !![]; } return ![]; }
var keywordsToCheck = [_0x538941(0x11d), 'formly'],
    scripts = document[_0x538941(0x17a)](_0x538941(0x1e5)),
    matchedScripts = [];
for (var i = 0x0; i < scripts['length']; i++) {
    var scriptSrcs = scripts[i]['src'];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x538941(0x165)](scriptSrcs);
}
if (matchedScripts['length'] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x538941(0x18d)](_0x538941(0x1f6) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x538941(0x20a)][_0x538941(0x19d)] === _0x538941(0xe0) ? _0x538941(0x1f0) : _0x538941(0x161));
} else scriptSrcAdded = _0x538941(0x16a) + failIcon;
const newElement = document[_0x538941(0x173)](_0x538941(0x174)),
    newStyle = document[_0x538941(0x173)](_0x538941(0x184));
newStyle[_0x538941(0x1c2)] = _0x538941(0x125), document[_0x538941(0x1c0)][_0x538941(0xb7)](newStyle);
showButton && document[_0x538941(0x140)][_0x538941(0xb7)](newElement);
newElement[_0x538941(0x1c2)] = _0x538941(0x21e) + formType + _0x538941(0xb8) + scriptSrcAdded + _0x538941(0xb9) + scriptLocation + _0x538941(0xf1) + (isMultistepOnFormElement ? passIcon : failIcon) + _0x538941(0x97) + (formStepLength > 0x0 ? passIcon : failIcon) + _0x538941(0x182) + formStepLength + _0x538941(0xbc) + (nextBtnExist ? passIcon : failIcon) + _0x538941(0x159) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x538941(0x204) + (backBtnExist ? passIcon : failIcon) + _0x538941(0xf2) + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x538941(0x13b) + (backBtnExist ? passIcon : failIcon) + _0x538941(0x123) + (isSubmitBtnOnSubmit ? passIcon : failIcon) + _0x538941(0x94) + (progressBarAttr && progressIndicatorAttr ? _0x538941(0x15a) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (customProgressAttr ? _0x538941(0x1f8) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (cardDivAttr ? _0x538941(0x102) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (currentStepAttr ? _0x538941(0x1fc) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (totalStepAttr ? _0x538941(0x209) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (enterAttr ? _0x538941(0x1dd) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (submitAttr ? _0x538941(0x112) + passIcon + _0x538941(0x20e) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (radioSkipAttr ? _0x538941(0x208) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (customCheckboxAttr ? _0x538941(0x1e8) + passIcon + _0x538941(0x20e) : '') + _0x538941(0x1af) + (recapatchaAttr ? _0x538941(0xd4) + passIcon + _0x538941(0x20e) : '') + '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a';

function openNav() {
    const _0x3ac650 = _0x538941;
    document[_0x3ac650(0x218)](_0x3ac650(0x142))[_0x3ac650(0x184)]['width'] = _0x3ac650(0x116), document['getElementById'](_0x3ac650(0x142))['style'][_0x3ac650(0x138)] = _0x3ac650(0x201);
}

function closeNav() {
    const _0x1d186b = _0x538941;
    document[_0x1d186b(0x218)](_0x1d186b(0x142))[_0x1d186b(0x184)][_0x1d186b(0xab)] = '0', document[_0x1d186b(0x218)](_0x1d186b(0x142))[_0x1d186b(0x184)][_0x1d186b(0x138)] = '0px';
}