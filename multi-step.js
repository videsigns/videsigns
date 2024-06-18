/**
 * @updateType Bug fix
 * @description Fixes a current step issue on the logic form.
 * @date 2024-06-18
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
let form = $(_0x1864d6(0x33d)),
    steps = $(_0x1864d6(0x2d4)),
    progressbarClone = $(_0x1864d6(0x1ca))[_0x1864d6(0x303)](),
    progressbar, weightedSelection = $(_0x1864d6(0x2fd))['data'](_0x1864d6(0x20b)),
    weightedSelectionRange = $(_0x1864d6(0x1c9))['data'](_0x1864d6(0x257)),
    selectMultiple = $('[data-select-multiple]')[_0x1864d6(0x285)](_0x1864d6(0x241)),
    customError = $(_0x1864d6(0x34f))[_0x1864d6(0x285)](_0x1864d6(0x1c6)),
    reinitIX = $(_0x1864d6(0x21c))[_0x1864d6(0x285)](_0x1864d6(0x357)),
    memory = $(_0x1864d6(0x1d4))[_0x1864d6(0x285)]('memory'),
    quiz = $('[data-quiz]')[_0x1864d6(0x285)](_0x1864d6(0x30d));
const urlFormly = new URL(window[_0x1864d6(0x2f4)][_0x1864d6(0x24d)]);
let _params = $(_0x1864d6(0x34a))[_0x1864d6(0x285)]('query-param'),
    logicExtra = $(_0x1864d6(0x33d))[_0x1864d6(0x285)](_0x1864d6(0x228)),
    oldSubmitText = $('[data-form=\x22submit-btn\x22]')[_0x1864d6(0x367)](),
    oldResetText = $(_0x1864d6(0x266))[_0x1864d6(0x35f)](),
    formReset = $(_0x1864d6(0x33d))[_0x1864d6(0x285)]('reset'),
    resetDelay = $('[data-reset-delay]')[_0x1864d6(0x285)]('reset-delay') ? $(_0x1864d6(0x2f5))[_0x1864d6(0x285)]('reset-delay') : 0x7d0,
    redirectDelay = $('[data-redirect-delay]')[_0x1864d6(0x285)](_0x1864d6(0x216)) ? $(_0x1864d6(0x1cc))[_0x1864d6(0x285)](_0x1864d6(0x216)) : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')[_0x1864d6(0x285)](_0x1864d6(0x2b9)),
    scrollToTop = $(_0x1864d6(0x33d))[_0x1864d6(0x285)](_0x1864d6(0x310)),
    trackLastStep = $(_0x1864d6(0x246))[_0x1864d6(0x285)]('last-step'),
    conditionalResult = $(_0x1864d6(0x320))[_0x1864d6(0x285)](_0x1864d6(0x2de)) === _0x1864d6(0x2a0),
    scrollTopOffset = parseInt($(_0x1864d6(0x33d))[_0x1864d6(0x285)]('scroll-top-offset'));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x1864d6(0x2ce)](localStorage[_0x1864d6(0x1db)](_0x1864d6(0x2da))), formlyLastStep = JSON[_0x1864d6(0x2ce)](localStorage[_0x1864d6(0x1db)](_0x1864d6(0x27a))), formlyLastStepAnswer = JSON[_0x1864d6(0x2ce)](localStorage[_0x1864d6(0x1db)](_0x1864d6(0x294)));
let paramUrl = $('[data-form=\x22multistep\x22]')['data'](_0x1864d6(0x28f));
const progressiveTarget = $(_0x1864d6(0x33d))[_0x1864d6(0x29e)]('[data-input-target]'),
    progressiveInput = $(_0x1864d6(0x33d))[_0x1864d6(0x29e)](_0x1864d6(0x235)),
    multiSelections = $('[data-form=\x22multistep\x22]')[_0x1864d6(0x285)](_0x1864d6(0x1d1));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x1864d6(0x2a9))[_0x1864d6(0x333)](function() {
    const _0x215fa6 = _0x1864d6;
    ogCloneArr[_0x215fa6(0x2b6)]({ 'name': $(this)[_0x215fa6(0x285)](_0x215fa6(0x303)), 'element': $(this)[_0x215fa6(0x303)](!![]), 'display': $(_0x215fa6(0x287) + $(this)[_0x215fa6(0x285)]('clone') + '\x22]')['eq'](0x0)[_0x215fa6(0x303)](!![]) });
});
const setPageLoadTime = () => {
    const _0x1006a6 = _0x1864d6;
    localStorage[_0x1006a6(0x1ec)](_0x1006a6(0x22a), Date[_0x1006a6(0x256)]()[_0x1006a6(0x23b)]());
};
setPageLoadTime();
$(_0x1864d6(0x23d))['length'] > 0x0 && (notRobot = ![]);

function recaptcha(_0x2968ea) { notRobot = !![]; }($(steps[x])[_0x1864d6(0x285)]('card') || $(steps[x])[_0x1864d6(0x29e)](_0x1864d6(0x345))['data'](_0x1864d6(0x225))) && (next = !![]);
$(_0x1864d6(0x315))[_0x1864d6(0x22c)] > 0x0 && (countCard = $('[data-count-card]')[_0x1864d6(0x285)](_0x1864d6(0x26a)));
$(_0x1864d6(0x27c))[_0x1864d6(0x24c)](), $(progressbarClone)[_0x1864d6(0x26f)](_0x1864d6(0x214)), $(_0x1864d6(0x312))[_0x1864d6(0x223)]()[_0x1864d6(0x35e)](), $('[data-form=\x22submit-btn\x22]')['hide'](), $('[data-form-ms=\x22submit-btn\x22]')[_0x1864d6(0x24c)](), steps['each'](function() {
    const _0x53fe1d = _0x1864d6;
    $(_0x53fe1d(0x312))['append'](progressbarClone[_0x53fe1d(0x303)](!![], !![]));
}), $('[data-input-field]')[_0x1864d6(0x24c)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps['length'], $('[data-text=\x22total-steps\x22]')['text'](totalSteps)) : ($(steps[x])[_0x1864d6(0x285)](_0x1864d6(0x225)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x1864d6(0x207))[_0x1864d6(0x22c)], $(_0x1864d6(0x22d))[_0x1864d6(0x35f)](totalSteps), $(_0x1864d6(0x313))[_0x1864d6(0x333)](function() {
    const _0x29d39d = _0x1864d6;
    $($(_0x29d39d(0x1ca))[$(this)[_0x29d39d(0x1e5)]()])[_0x29d39d(0x24c)]();
}));
progressbar = $('[data-form=\x22progress\x22]')[_0x1864d6(0x223)](), $(_0x1864d6(0x1ca))['on']('click', clickableIndicator), $(_0x1864d6(0x311))[_0x1864d6(0x35f)](curStep), steps['hide'](), $('[data-success-card]')[_0x1864d6(0x24c)](), $(_0x1864d6(0x277))['each'](function() {
    const _0x12dbce = _0x1864d6;
    $(this)[_0x12dbce(0x28c)]('type', _0x12dbce(0x23c));
});

function getParams() {
    urlFormly['searchParams']['forEach'](function(_0x5ac621, _0x5d578e) {
        const _0x1a6123 = _0x33ab;
        searchQ[_0x1a6123(0x2b6)]({ 'val': _0x5ac621, 'key': _0x5d578e });
    });
}

function getSafe(_0x2919d8, _0x49b1a9) { try { return _0x2919d8(); } catch (_0x4b684a) { return _0x49b1a9; } }

function phoneAutoFormat(_0x3dfbb8) {
    var _0x397bf5 = '';
    return function(_0xc4b0c8) {
        const _0x2aae58 = _0x33ab;
        var _0x27fb1d = '',
            _0x17cdc4 = _0xc4b0c8[_0x2aae58(0x33f)](/\D/g, ''),
            _0x23e291 = 0x0,
            _0x4ebc18 = 0x0;
        while (_0x23e291 < _0x17cdc4[_0x2aae58(0x22c)] && _0x4ebc18 < _0x3dfbb8[_0x2aae58(0x22c)]) { _0x3dfbb8[_0x4ebc18] === 'x' ? (_0x27fb1d += _0x17cdc4[_0x23e291], _0x23e291++) : _0x27fb1d += _0x3dfbb8[_0x4ebc18], _0x4ebc18++; }
        if (_0xc4b0c8['length'] < _0x397bf5['length']) {
            var _0xa758e7 = _0x3dfbb8[_0x2aae58(0x317)](_0x4ebc18);
            _0x27fb1d += _0xa758e7[_0x2aae58(0x33f)](/x/g, '');
        }
        return _0x397bf5 = _0x27fb1d, _0x27fb1d;
    };
}

function validateURL(_0x3f647d) { const _0x144f5f = _0x1864d6; return urlPattern[_0x144f5f(0x34e)](_0x3f647d) ? !![] : ![]; }
quiz && steps[_0x1864d6(0x333)](function() {
    const _0x140b79 = _0x1864d6;
    $(this)[_0x140b79(0x223)]()[_0x140b79(0x28c)](_0x140b79(0x354), !![]), $(this)['children']()['attr'](_0x140b79(0x259), 0xfa);
});

function disableBtn(_0x3d1852) {
    const _0x49ed53 = _0x1864d6;
    fill = ![], !customError && ($('[data-form=\x22next-btn\x22]')['css']({ 'opacity': _0x49ed53(0x2fc), 'pointer-events': 'none' }), $(_0x49ed53(0x1e7))[_0x49ed53(0x2e3)](_0x49ed53(0x2d1)), $(_0x49ed53(0x206))[_0x49ed53(0x2d3)]({ 'opacity': _0x49ed53(0x2fc), 'pointer-events': _0x49ed53(0x242) }), $('[data-form=\x22submit-btn\x22]')[_0x49ed53(0x2e3)](_0x49ed53(0x2d1)), $(_0x49ed53(0x26e))[_0x49ed53(0x2d3)]({ 'opacity': _0x49ed53(0x2fc), 'pointer-events': _0x49ed53(0x242) }), $(_0x49ed53(0x26e))[_0x49ed53(0x2e3)]('disabled'));
}

function enableBtn() {
    const _0x16d891 = _0x1864d6;
    fill = !![], $(_0x16d891(0x1e7))['css']({ 'pointer-events': 'auto', 'opacity': '1' }), $('[data-form=\x22next-btn\x22]')[_0x16d891(0x26f)](_0x16d891(0x2d1)), $(_0x16d891(0x206))[_0x16d891(0x2d3)]({ 'pointer-events': _0x16d891(0x230), 'opacity': '1' }), $(_0x16d891(0x206))[_0x16d891(0x26f)](_0x16d891(0x2d1)), $(_0x16d891(0x26e))['css']({ 'pointer-events': _0x16d891(0x230), 'opacity': '1' }), $(_0x16d891(0x26e))[_0x16d891(0x26f)](_0x16d891(0x2d1));
}

function saveLastAnswer(_0xf3008b) {
    const _0x4fe878 = _0x1864d6;
    localStorage[_0x4fe878(0x340)](_0x4fe878(0x294)), localStorage[_0x4fe878(0x1ec)](_0x4fe878(0x294), JSON[_0x4fe878(0x28b)](_0xf3008b));
}

function saveFilledInput() {
    const _0x512fee = _0x1864d6;
    $(_0x512fee(0x21d))['not'](_0x512fee(0x25c))[_0x512fee(0x333)](function() {
        const _0x5ef9bb = _0x512fee;
        $(this)[_0x5ef9bb(0x28c)](_0x5ef9bb(0x302)) === _0x5ef9bb(0x244) || $(this)[_0x5ef9bb(0x28c)]('type') === _0x5ef9bb(0x29f) ? $(this)[_0x5ef9bb(0x368)](_0x5ef9bb(0x1ff)) && (filledInput['some'](_0x44d445 => _0x44d445[_0x5ef9bb(0x1fc)] === $(this)[_0x5ef9bb(0x28c)](_0x5ef9bb(0x24e))) ? (filledInput = filledInput[_0x5ef9bb(0x338)](_0x15a1bf => _0x15a1bf['inputName'] !== $(this)[_0x5ef9bb(0x28c)]('name')), $(this)[_0x5ef9bb(0x367)]() !== '' && filledInput['push']({ 'inputName': $(this)['attr'](_0x5ef9bb(0x24e)), 'value': $(this)[_0x5ef9bb(0x367)]() })) : $(this)['val']() !== '' && filledInput[_0x5ef9bb(0x2b6)]({ 'inputName': $(this)[_0x5ef9bb(0x28c)](_0x5ef9bb(0x24e)), 'value': $(this)['val']() })) : filledInput[_0x5ef9bb(0x271)](_0x32f9fa => _0x32f9fa[_0x5ef9bb(0x1fc)] === $(this)['attr'](_0x5ef9bb(0x24e))) ? (filledInput = filledInput[_0x5ef9bb(0x338)](_0x16b5c2 => _0x16b5c2[_0x5ef9bb(0x1fc)] !== $(this)['attr'](_0x5ef9bb(0x24e))), $(this)[_0x5ef9bb(0x367)]() !== '' && filledInput[_0x5ef9bb(0x2b6)]({ 'inputName': $(this)[_0x5ef9bb(0x28c)](_0x5ef9bb(0x24e)), 'value': $(this)[_0x5ef9bb(0x367)]() })) : $(this)[_0x5ef9bb(0x367)]() !== '' && filledInput[_0x5ef9bb(0x2b6)]({ 'inputName': $(this)[_0x5ef9bb(0x28c)](_0x5ef9bb(0x24e)), 'value': $(this)[_0x5ef9bb(0x367)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x512fee(0x340)](_0x512fee(0x27a)), localStorage[_0x512fee(0x1ec)](_0x512fee(0x27a), lastStep)), localStorage[_0x512fee(0x340)]('filledInput'), localStorage[_0x512fee(0x1ec)]('filledInput', JSON[_0x512fee(0x28b)](filledInput));
}

function scrollTop() {
    const _0x39a575 = _0x1864d6;
    scrollToTop && $(_0x39a575(0x1fe))[_0x39a575(0x288)]({ 'scrollTop': $(_0x39a575(0x33d))[_0x39a575(0x2a5)]()['top'] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x3508f9) {
    const _0x9fb614 = _0x1864d6;
    var _0x11fd2d = window[_0x9fb614(0x2f4)][_0x9fb614(0x24d)],
        _0x3b5fd6 = new URLSearchParams(window[_0x9fb614(0x2f4)][_0x9fb614(0x297)]);
    _0x3b5fd6[_0x9fb614(0x2d2)](_0x9fb614(0x205), _0x3508f9);
    var _0x346455 = _0x11fd2d[_0x9fb614(0x31e)]('?')[0x0] + '?' + _0x3b5fd6[_0x9fb614(0x23b)]();
    window['history'][_0x9fb614(0x2a6)]({}, '', _0x346455);
}

function updateStep() {
    const _0x226d1f = _0x1864d6;
    scrollTop(), skip = ![], $(_0x226d1f(0x2c1))[_0x226d1f(0x26f)](_0x226d1f(0x2d1));
    $(_0x226d1f(0x1e8))[_0x226d1f(0x285)]('clickable') && (steps[_0x226d1f(0x29e)](':input[required]')['each'](function() {
        const _0x30dbad = _0x226d1f;
        $($(_0x30dbad(0x2c1))[$(this)[_0x30dbad(0x220)](_0x30dbad(0x2d4))[_0x30dbad(0x1e5)]()]), $(this)['val']() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x226d1f(0x28e))[_0x226d1f(0x2e3)](_0x226d1f(0x2d1)) : $(_0x226d1f(0x28e))[_0x226d1f(0x26f)](_0x226d1f(0x2d1)));
    $(_0x226d1f(0x2c1))[_0x226d1f(0x26f)](_0x226d1f(0x214)), $(_0x226d1f(0x2c1))[_0x226d1f(0x2e3)](_0x226d1f(0x2d1)), $($(_0x226d1f(0x2c1))[x])[_0x226d1f(0x2e3)](_0x226d1f(0x214)), selection = selections[_0x226d1f(0x338)](_0x12fde8 => _0x12fde8['step'] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x226d1f(0x339)]) ? parseInt(getSafe(() => selection[0x0][_0x226d1f(0x339)])) : x);
    $(_0x226d1f(0x344))['hide'](), steps['hide']();
    reinitIX === !![] && window[_0x226d1f(0x1f4)][_0x226d1f(0x21f)]();
    $(progressbar)[_0x226d1f(0x26f)](_0x226d1f(0x214));
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])['addClass'](_0x226d1f(0x214)) : !$(steps[i])[_0x226d1f(0x285)](_0x226d1f(0x225)) && $(progressbar[i])[_0x226d1f(0x2e3)]('current'); }
    reinitIX === !![] ? (window[_0x226d1f(0x1f4)] && window['Webflow'][_0x226d1f(0x2d8)](_0x226d1f(0x1fa))[_0x226d1f(0x254)](), document['dispatchEvent'](new Event('readystatechange')), $(steps[x])[_0x226d1f(0x326)]()) : $(steps[x])['fadeIn'](_0x226d1f(0x22f));
    $(_0x226d1f(0x345))[_0x226d1f(0x26f)](_0x226d1f(0x1d5));
    x === 0x0 && !$(steps[x])[_0x226d1f(0x285)]('card') && ($(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x344))[_0x226d1f(0x326)](), $(steps[x])[_0x226d1f(0x29e)]('[data-answer]')['addClass'](_0x226d1f(0x1d5)));
    selection[_0x226d1f(0x22c)] > 0x0 ? ($(steps[x])['find'](_0x226d1f(0x343) + selection[0x0]['selected'] + '\x22]')['show'](), $(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x343) + selection[0x0][_0x226d1f(0x1de)] + '\x22]')[_0x226d1f(0x2e3)](_0x226d1f(0x1d5))) : ($(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x343) + answer + '\x22]')[_0x226d1f(0x326)](), $(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x343) + answer + '\x22]')[_0x226d1f(0x2e3)]('active-answer-card'));
    if (x === 0x0) $(_0x226d1f(0x1f9))[_0x226d1f(0x24c)](), $('[data-form=\x22next-btn\x22]')['show'](), $(_0x226d1f(0x206))[_0x226d1f(0x24c)]();
    else {
        if (x === steps[_0x226d1f(0x22c)] - 0x1 || $(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x346))[_0x226d1f(0x22c)] > 0x0) {
            $(_0x226d1f(0x1e7))['hide']();
            if ($(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x249))['data'](_0x226d1f(0x252))) $(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x249))[_0x226d1f(0x326)]();
            else $('[data-form=\x22next-btn\x22]')[_0x226d1f(0x285)](_0x226d1f(0x252)) && $(_0x226d1f(0x1e7))[_0x226d1f(0x326)]();
            $('[data-form=\x22submit-btn\x22]')[_0x226d1f(0x326)](), $('[data-form-ms=\x22submit-btn\x22]')[_0x226d1f(0x326)](), $(_0x226d1f(0x1f9))[_0x226d1f(0x326)]();
        } else $(_0x226d1f(0x1e7))[_0x226d1f(0x326)](), $(_0x226d1f(0x1f9))[_0x226d1f(0x326)](), $('[data-form=\x22submit-btn\x22]')['hide'](), $(_0x226d1f(0x26e))[_0x226d1f(0x24c)]();
    }
    $($(steps[x])[_0x226d1f(0x29e)](_0x226d1f(0x23e))[0x0])['focus'](), $($(steps[x])['find'](_0x226d1f(0x1e6))[0x0])[_0x226d1f(0x2dd)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x226d1f(0x2c1))[idx])[_0x226d1f(0x26f)](_0x226d1f(0x2d1)); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x536ff2, _0xc3c272, _0x486bb4) {
    const _0x192bf2 = _0x1864d6;
    let _0x52e7bc = _0x536ff2[_0x192bf2(0x2cb)]('@') ? _0x536ff2[_0x192bf2(0x31e)]('@')[0x1][_0x192bf2(0x31e)]('.')[0x0] : [];
    dom = [];
    _0xc3c272 !== undefined && _0xc3c272[_0x192bf2(0x31e)](',')['forEach'](function(_0x1e808b) {
        const _0x5ace95 = _0x192bf2;
        _0x1e808b[_0x5ace95(0x2cb)](_0x52e7bc) && dom[_0x5ace95(0x2b6)](_0x52e7bc);
    });
    dom[_0x192bf2(0x22c)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x2ae14b = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x2ae14b['test'](_0x536ff2) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x192bf2(0x2b6)]({ 'input': _0x486bb4 })) : emailFilled = !![];
}

function phoneValidation(_0x48d617, _0x2348ef, _0x2d0bdd) {
    if (phoneFormat) return _0x2348ef >= _0x2d0bdd ? !![] : ![];
    else { if (_0x2348ef >= _0x2d0bdd) return !![]; }
}

function _0x1d40() {
    const _0x314b9a = ['slow', 'auto', 'field', 'input-field', 'cookie', '</div>', '[data-input-reveal]', '[data-input-index=\x22', '<div\x20class=\x22f-text_script\x22>Inside\x20&lt;head&gt;\x20tag<br/></div>', 'appendChild', 'querySelector', '\x22]\x20input', 'toString', 'button', 'div.g-recaptcha', 'input[autofocus]', 'toISOString', '[data-cms-select=text]', 'select-multiple', 'none', '[data-display-input-wrapper=\x22', 'checkbox', 'w--redirected-checked', '[data-last-step]', '[data-selection=\x22', '[type=\x22checkbox\x22]', '[data-form=\x22next-btn\x22][data-submit-show]', '<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a</svg>\x0a</div>', 'FormlyLogic\x20enabled', 'hide', 'href', 'name', 'clickable', 'input[type=\x22text\x22][required]:visible', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'submit-show', 'data-skip-to', 'init', ':checked', 'now', 'weighted-selection-range', '10OSupzf', 'data-radio-delay', 'add-new-input', 'input:radio[required]', '[type=\x22submit\x22]', 'closest', ':input', '[data-cms-select=input]', 'selection', ':input[type=\x22date\x22][required]', '[data-input-field=\x22', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Checkboxes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'first', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;\x20on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-btn=\x22reset\x22]', 'redirect', 'url', ':input[type=\x22time\x22]', 'count-card', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', ':input[type=\x22tel\x22]', '<option>', '[data-form-ms=\x22submit-btn\x22]', 'removeClass', '[data-radio-skip=\x22true\x22]', 'some', '[data-display-input]', 'toLowerCase', 'N/A', '9hLHJJm', ':input[type=\x22file\x22]', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'input[type=\x22checkbox\x22]:visible', 'stopPropagation', 'formlyLastStep', 'select', '[data-text=\x22error-message\x22]', 'substring', 'counter', '34906tunOCJ', 'data-go-to', '\x20|\x20<strong>data-go-to\x20</strong>\x20=\x22', ':input[type=\x22email\x22]', 'textarea[name=\x22', '[data-add-new-input=\x22', 'data', 'min-character', '[data-display=\x22', 'animate', ':input[type=\x22password\x22]', 'Before\x20&lt;/body&gt;\x20tag', 'stringify', 'attr', 'createElement', 'input[type=\x22submit\x22]', 'param-analytics', 'phone-autoformat', '.w-radio-input', '<br>Data\x20Answer\x20=\x20', 'findIndex', 'formlyLastStepAnswer', 'resolvedOptions', 'keydown', 'search', 'startsWith', 'input[type=\x22radio\x22]', 'relationship-', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Total\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-clone-input=\x22', 'screen-resolution', 'find', 'radio', 'AND', '<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a</svg>\x0a</div>', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ':input[required]', 'Direct', 'offset', 'pushState', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-form=\x22submit-btn\x22]:visible', '[data-clone]', '226926yNEbNA', 'block-domain', 'script[src=\x22', ':input[type=\x22date\x22]', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>ReCAPTCHA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'input', 'input-reveal-value', '<div\x20class=\x22f-logic-text\x22><strong>data-answer</strong>=\x22', '[data-selection-weight]', 'file', ':input[type=\x22checkbox\x22]:checked', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x2035%;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20max-height:\x20100vh;\x0a\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a\x20\x20\x20\x20line-height:1.4\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_attribute-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20margin-bottom:\x2014px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20color:\x20#1eee32;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_title\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-header\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.paragraph\x20{\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.hide\x20{\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type._1\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_script\x20{\x0a\x20\x20\x20\x20color:\x20#fffc57;\x0a\x20\x20\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-wrapper\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-link\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-support-title{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-closebtn{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200.3rem;\x0a\x20\x20\x20\x20right:\x200.7rem;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20}\x0a\x20\x20.f-hide{\x0a\x20\x20\x20\x20display\x20:none\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-logic-text{\x0a\x20\x20\x20\x20padding-left:1rem;\x0a\x20\x20}\x0a\x20\x20.f-logic-text\x20strong{\x0a\x20\x20\x20\x20color\x20:\x20white\x20!Important;\x0a\x20\x20}\x0a', 'push', ':input[type=\x22text\x22][required]', 'user-agent', 'phone-validation', 'clicked', 'translateX(-40rem)', 'select[required]:visible', ':input[type=\x22email\x22][required]', 'fail', '\x22]:not([data-prefill=\x22false\x22])', 'data-name', '[data-form=\x22custom-progress-indicator\x22]', 'timestamp', '[data-cms-select=cms]', 'metaKey', 'click-addclass', 'join', '.w-checkbox-input', '[data-clone-input-wrapper=\x22', 'edit-step', 'nonvalidated', 'includes', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a', '[data-clone=\x22', 'parse', '[data-clone-wrapper=\x22', ':input[type=\x22url\x22][required]', 'disabled', 'set', 'css', '[data-form=\x22step\x22]', '[data-hidden-input=\x22', ':focus', 'new-tab', 'require', 'change', 'filledInput', 'reset', '[data-selection]', 'focus', 'conditional-result', '\x22]\x20textarea', 'log', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'textarea[required]:visible', 'addClass', '[data-display]', 'select[required]', '[data-go-to]', '\x20seconds', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'not', 'trigger', 'data-input-field', 'remove-upload', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x22]\x20[data-clone-input=\x22', 'value', '[data-range]:contains(', ':input[type=\x22url\x22]', '.w-form-done', 'skip-to', 'location', '[data-reset-delay]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-display-input=\x22', 'preventDefault', 'https://videsigns-staging.co.uk/formly-counter', ':input[type=\x22number\x22]', 'max-checkbox', '0.4', '[data-weighted-selection]', '[data-clone-wrapper]', 'transform', 'radio-delay', ':input[type=\x22radio\x22]', 'type', 'clone', 'fadeIn', '<div\x20class=\x22f-text_script\x22>Before\x20&lt;/body&gt;\x20tag<br/></div>', 'click', 'parent', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Custom\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ':input[type=\x22password\x22][required]', '[data-add-new=\x22', '.w-form-formradioinput', 'input[name=\x22', 'quiz', 'f-hide', 'error', 'scroll-top', '[data-text=\x22current-step\x22]', '[data-form=\x22progress\x22]', '[data-form=\x22step\x22][data-card]', '[data-selected]:checked', '[data-count-card]', 'getMonth', 'slice', 'radio-skip', 'body', 'https://webflow.com/api/v1/form/', 'f-show', 'innerHTML', 'add-new-input-limit', 'split', 'form[data-form=\x22multistep\x22]', '[data-conditional-result]', '\x22][data-input-reveal-value]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-input-field]', '[data-answer][data-radio-skip]:visible', 'referrer', 'show', 'src', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-input-target=\x22', 'head', 'click-path', '[data-input-reveal=\x22', 'open', 'script', '351869iwSfDr', '1609968HSWpYu', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20is\x20on\x20data-card\x20=\x20true</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'each', '[data-radio-skip]:visible', 'display', ':input[type=\x22text\x22]', '\x22]\x20[data-clone=\x22', 'filter', 'skipTo', '[data-show-if]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-remove-upload]', '[data-form=\x22multistep\x22]', 'input[type=\x22checkbox\x22][name=\x22', 'replace', 'removeItem', '[data-hidden-input=\x22page-visit-duration\x22]', 'tagName', '[data-answer=\x22', '[data-answer]', '.active-answer-card', '[data-form=\x22submit\x22]:visible', 'keyCode', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'multistep', '[data-query-param]', 'go-to', 'translateX(0rem)', 'key', 'test', '[data-custom-error-message]', 'get', 'select[name=\x22', '\x22][data-input-reveal-value=\x22*\x22]', 'data-form', 'data-radio-skip', 'option[value=\x22$(this).val()\x22]', 'enter', 'reinit', '\x22]\x20[data-input-field^=\x22', 'ctrlKey', '[data-submit=\x22true\x22]', 'every', '[data-radio-skip]', '[aria-label=\x22Remove\x20file\x22]', 'remove', 'text', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-text=\x22total-weight\x22]', 'clickable-all', ':input[type=\x22checkbox\x22]', '[data-max-checkbox]', 'f-mySidenav', 'submit', 'val', 'prop', 'width', 'required', 'input-reveal', '[data-selection=\x22other\x22]', ':input[type=\x22tel\x22][required]', 'forEach', 'custom-error-message', 'FAIL', '[data-clone-input]', '[data-weighted-selection-range]', '[data-form=\x22progress-indicator\x22]', '<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-redirect-delay]', 'append', ':input[type=\x22time\x22][required]', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'debug-mode', 'multiple-results', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'textarea', '[data-memory]', 'active-answer-card', '\x22][value=\x22', ':input[type=\x22checkbox\x22][required]', 'input:checkbox', '[data-add-new]', 'PASS', 'getItem', '[data-checkbox]', '336042adZRDM', 'selected', '[data-form=\x22remove-input-clone\x22]', 'redirect-form-hehexd', '[data-skip-to]', '228tVVbhY', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x22]:checked', 'index', 'textarea[autofocus]', '[data-form=\x22next-btn\x22]', '[data-clickable]', 'ajaxComplete', '\x22]\x20select', '<div>Step\x20', 'setItem', '[data-display-wrapper=\x22', 'videsigns', 'span', 'screen', 'option[value=\x22', '[data-add-new-input]', 'getElementById', 'Webflow', 'input[type=\x22radio\x22]:checked', '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'Failed\x20to\x20update\x20counter:', 'answer', '[data-form=\x22back-btn\x22]', 'ix2', 'Please\x20wait...', 'inputName', '12921557exWVMm', 'html,\x20body', 'checked', '40iQbPxg', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Current\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'trim', 'Inside\x20<head>\x20tag', 'step', '[data-form=\x22submit-btn\x22]', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'style', '[data-clone-input-wrapper]', '[data-index=\x22', 'weighted-selection', 'backTo', '[data-form=\x22remove-clone\x22]', '[data-enter=\x22true\x22]', 'textarea[required]', 'last', 'input[type=\x22radio\x22][name=\x22', 'siblings', ':input[type=\x22file\x22][required]', 'current', 'input:radio[name=\x22', 'redirect-delay', ':input[type=\x22number\x22][required]', ':first', 'add-new-limit', '<div\x20class=\x22f-text_attribute-title\x22>Step\x20', 'Counter\x20already\x20updated\x20for\x20this\x20month.', '[data-reinit]', 'form[data-form=\x22multistep\x22]\x20:input', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'destroy', 'parents', ':input[type=\x27radio\x27]:checked', 'clone-input', 'children', 'success', 'card', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'wait', 'logic-extra', 'time-zone', 'pageLoadTime', 'formly', 'length', '[data-text=\x22total-steps\x22]', '32260XYFbfs'];
    _0x1d40 = function() { return _0x314b9a; };
    return _0x1d40();
}

function validation() {
    const _0x4786d4 = _0x1864d6;
    $(steps[x])[_0x4786d4(0x285)](_0x4786d4(0x225)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x2e2))['length'], textInputLength = $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x250))[_0x4786d4(0x22c)], selectInputLength = $(steps[x])['find'](_0x4786d4(0x2bc))['length'], emailInputLength = $(steps[x])['find']('input[type=\x22email\x22]:visible')['length'], checkboxInputLength = $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x278))[_0x4786d4(0x22c)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x4786d4(0x285)]('checkbox') ? $(steps[x])[_0x4786d4(0x285)]('checkbox') : $(steps[x])['find'](_0x4786d4(0x1dc))[_0x4786d4(0x22c)] > 0x0 ? $(steps[x])['find'](_0x4786d4(0x1dc))['data'](_0x4786d4(0x244)) : 0x0, maxCheckCount = $(steps[x])[_0x4786d4(0x285)]('max-checkbox') ? $(steps[x])[_0x4786d4(0x285)]('max-checkbox') : $(steps[x])['find'](_0x4786d4(0x364))[_0x4786d4(0x22c)] > 0x0 ? $(steps[x])['find']('[data-max-checkbox]')['data'](_0x4786d4(0x2fb)) : 0x0;
    if (!logicExtra) {
        let _0x3c7c7a = $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x363)),
            _0x43335c = _0x3c7c7a[_0x4786d4(0x338)]('[required]'),
            _0x32575d = _0x3c7c7a['filter'](_0x4786d4(0x255));
        if (_0x3c7c7a[_0x4786d4(0x22c)] > 0x0) {
            if (checkCount === '*' || checkCount > _0x3c7c7a['length']) _0x3c7c7a[_0x4786d4(0x333)](function() {
                const _0x145043 = _0x4786d4;
                $(this)['is'](_0x145043(0x255)) ? (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x145043(0x28c)]('name'))) : (checkboxFilled = ![], unfilledArr[_0x145043(0x2b6)]({ 'input': $(this)[_0x145043(0x28c)](_0x145043(0x24e)) }));
            });
            else {
                if (_0x32575d[_0x4786d4(0x22c)] >= checkCount) {
                    if (_0x43335c['length'] > 0x0) _0x43335c[_0x4786d4(0x22c)] === _0x32575d['length'] ? (checkboxFilled = !![], resetInputErrorMessage(_0x43335c[_0x4786d4(0x264)]()['attr'](_0x4786d4(0x24e)))) : (checkboxFilled = ![], _0x43335c[_0x4786d4(0x2e9)](':checked')[_0x4786d4(0x333)](function() {
                        const _0x52eb58 = _0x4786d4;
                        unfilledArr['push']({ 'input': $(this)[_0x52eb58(0x28c)]('name') });
                    }));
                    else {}
                } else checkboxFilled = ![], _0x43335c['not'](_0x4786d4(0x255))[_0x4786d4(0x333)](function() {
                    const _0x4fb2b3 = _0x4786d4;
                    unfilledArr[_0x4fb2b3(0x2b6)]({ 'input': $(this)[_0x4fb2b3(0x28c)](_0x4fb2b3(0x24e)) });
                }), unfilledArr[_0x4786d4(0x2b6)]({ 'input': _0x3c7c7a[_0x4786d4(0x264)]()[_0x4786d4(0x28c)](_0x4786d4(0x24e)) });
            }
        }
        $(steps[x])['find'](_0x4786d4(0x25b))[_0x4786d4(0x333)](function(_0x2c3fdc) {
            const _0x1011e4 = _0x4786d4;
            var _0x4920b9 = $(this)[_0x1011e4(0x28c)](_0x1011e4(0x24e));
            $(_0x1011e4(0x215) + _0x4920b9 + _0x1011e4(0x1e4))['length'] == 0x0 ? (!empReqRadio[_0x1011e4(0x29e)](_0x201371 => _0x201371['input'] === _0x2c3fdc) && empReqRadio[_0x1011e4(0x2b6)]({ 'input': _0x2c3fdc }), unfilledArr[_0x1011e4(0x2b6)]({ 'input': $(this)[_0x1011e4(0x28c)]('name') })) : empReqRadio = empReqRadio[_0x1011e4(0x338)](_0x18663e => _0x18663e[_0x1011e4(0x2af)] !== _0x2c3fdc), empReqRadio[_0x1011e4(0x22c)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x2b7))[_0x4786d4(0x333)](function(_0xee8df3) {
            const _0x2e2034 = _0x4786d4;
            let _0x3cdabc = $(this)[_0x2e2034(0x367)]()[_0x2e2034(0x22c)],
                _0x4cc441 = $(this)[_0x2e2034(0x285)]('min-character') ? $(this)[_0x2e2034(0x285)](_0x2e2034(0x286)) : 0x0;
            $(this)['val']() !== '' && _0x3cdabc >= _0x4cc441 ? empReqInput = empReqInput[_0x2e2034(0x338)](_0x2edd61 => _0x2edd61['input'] !== _0xee8df3) : (!empReqInput[_0x2e2034(0x29e)](_0x308d73 => _0x308d73[_0x2e2034(0x2af)] === _0xee8df3) && empReqInput['push']({ 'input': _0xee8df3 }), unfilledArr[_0x2e2034(0x2b6)]({ 'input': $(this)['attr'](_0x2e2034(0x24e)) })), empReqInput[_0x2e2034(0x22c)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find'](_0x4786d4(0x309))['each'](function(_0x51a9fc) {
            const _0x5f42c3 = _0x4786d4;
            let _0x4c1a14 = $(this)[_0x5f42c3(0x367)]()[_0x5f42c3(0x22c)],
                _0x439987 = $(this)[_0x5f42c3(0x285)](_0x5f42c3(0x286)) ? $(this)[_0x5f42c3(0x285)]('min-character') : 0x0;
            $(this)['val']() !== '' && _0x4c1a14 >= _0x439987 ? empReqPassword = empReqPassword[_0x5f42c3(0x338)](_0x53afc3 => _0x53afc3[_0x5f42c3(0x2af)] !== _0x51a9fc) : (!empReqPassword[_0x5f42c3(0x29e)](_0x237611 => _0x237611[_0x5f42c3(0x2af)] === _0x51a9fc) && empReqPassword[_0x5f42c3(0x2b6)]({ 'input': _0x51a9fc }), unfilledArr[_0x5f42c3(0x2b6)]({ 'input': $(this)[_0x5f42c3(0x28c)](_0x5f42c3(0x24e)) })), empReqPassword['length'] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x2d0))[_0x4786d4(0x333)](function(_0x46abff) {
            const _0x4034e9 = _0x4786d4;
            let _0x56b2fd = $(this)[_0x4034e9(0x367)]()[_0x4034e9(0x22c)],
                _0x56e1f2 = $(this)[_0x4034e9(0x285)](_0x4034e9(0x286)) ? $(this)[_0x4034e9(0x285)](_0x4034e9(0x286)) : 0x0;
            $(this)['val']() !== '' && _0x56b2fd >= _0x56e1f2 ? empReqUrl = empReqUrl[_0x4034e9(0x338)](_0x3b27e6 => _0x3b27e6[_0x4034e9(0x2af)] !== _0x46abff) : (!empReqTime['find'](_0x49799f => _0x49799f['input'] === _0x46abff) && empReqUrl[_0x4034e9(0x2b6)]({ 'input': _0x46abff }), unfilledArr[_0x4034e9(0x2b6)]({ 'input': $(this)[_0x4034e9(0x28c)]('name') })), empReqUrl[_0x4034e9(0x22c)] === 0x0 && validateURL($(this)[_0x4034e9(0x367)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x1ce))[_0x4786d4(0x333)](function(_0x430761) {
            const _0x1e7f55 = _0x4786d4;
            let _0x282013 = $(this)[_0x1e7f55(0x367)]()[_0x1e7f55(0x22c)],
                _0x248cfe = $(this)[_0x1e7f55(0x285)](_0x1e7f55(0x286)) ? $(this)[_0x1e7f55(0x285)](_0x1e7f55(0x286)) : 0x0;
            $(this)[_0x1e7f55(0x367)]() !== '' && _0x282013 >= _0x248cfe ? empReqTime = empReqTime[_0x1e7f55(0x338)](_0x19cdcb => _0x19cdcb['input'] !== _0x430761) : (!empReqTime['find'](_0x355d1c => _0x355d1c['input'] === _0x430761) && empReqTime[_0x1e7f55(0x2b6)]({ 'input': _0x430761 }), unfilledArr[_0x1e7f55(0x2b6)]({ 'input': $(this)['attr'](_0x1e7f55(0x24e)) })), empReqTime[_0x1e7f55(0x22c)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x261))[_0x4786d4(0x333)](function(_0x116054) {
            const _0x2241a5 = _0x4786d4;
            $(this)[_0x2241a5(0x367)]() !== '' ? empReqDate = empReqDate['filter'](_0x4080b5 => _0x4080b5['input'] !== _0x116054) : (!empReqDate['find'](_0x103c58 => _0x103c58[_0x2241a5(0x2af)] === _0x116054) && empReqDate[_0x2241a5(0x2b6)]({ 'input': _0x116054 }), unfilledArr[_0x2241a5(0x2b6)]({ 'input': $(this)['attr']('name') })), empReqDate[_0x2241a5(0x22c)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x1c4))['each'](function(_0x35f4cf) {
            const _0x5a9227 = _0x4786d4;
            if ($(this)[_0x5a9227(0x367)]() !== '') {
                let _0x4e3aea = $(this)['val']()[_0x5a9227(0x22c)],
                    _0x2f78e1 = $(this)[_0x5a9227(0x285)]('min-character') ? $(this)[_0x5a9227(0x285)]('min-character') : 0x0;
                if ($(this)['data']('phone-autoformat')) {
                    var _0x121dec = phoneAutoFormat($(this)[_0x5a9227(0x285)]('phone-autoformat'));
                    $(this)['val'](_0x121dec($(this)['val']()));
                }
                phoneValidation($(this)['val'](), _0x4e3aea, _0x2f78e1) ? empReqTel = empReqTel[_0x5a9227(0x338)](_0x5edca3 => _0x5edca3[_0x5a9227(0x2af)] !== _0x35f4cf) : empReqTel[_0x5a9227(0x2b6)]({ 'input': _0x35f4cf });
            } else !empReqTel[_0x5a9227(0x29e)](_0x500adf => _0x500adf[_0x5a9227(0x2af)] === _0x35f4cf) && empReqTel[_0x5a9227(0x2b6)]({ 'input': _0x35f4cf }), unfilledArr[_0x5a9227(0x2b6)]({ 'input': $(this)['attr'](_0x5a9227(0x24e)) });
            empReqTel[_0x5a9227(0x22c)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x213))[_0x4786d4(0x333)](function(_0x3b68d3) {
            const _0x1ca911 = _0x4786d4;
            $(this)[_0x1ca911(0x367)]() !== '' ? empReqFile = empReqFile[_0x1ca911(0x338)](_0x4c7421 => _0x4c7421[_0x1ca911(0x2af)] !== _0x3b68d3) : (!empReqFile[_0x1ca911(0x29e)](_0x43705d => _0x43705d[_0x1ca911(0x2af)] === _0x3b68d3) && empReqFile['push']({ 'input': _0x3b68d3 }), unfilledArr[_0x1ca911(0x2b6)]({ 'input': $(this)[_0x1ca911(0x28c)](_0x1ca911(0x24e)) })), empReqFile['length'] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](':input[type=\x22number\x22][required]')[_0x4786d4(0x333)](function(_0x46d9df) {
            const _0x113f62 = _0x4786d4;
            let _0x26a50f = $(this)['val']()[_0x113f62(0x22c)],
                _0x3cddbc = $(this)['data'](_0x113f62(0x286)) ? $(this)[_0x113f62(0x285)](_0x113f62(0x286)) : 0x0;
            $(this)[_0x113f62(0x367)]() !== '' && _0x26a50f >= _0x3cddbc ? empReqNum = empReqNum[_0x113f62(0x338)](_0x3fdbcd => _0x3fdbcd[_0x113f62(0x2af)] !== _0x46d9df) : (!empReqNum['find'](_0x2650bb => _0x2650bb[_0x113f62(0x2af)] === _0x46d9df) && empReqNum['push']({ 'input': _0x46d9df }), unfilledArr['push']({ 'input': $(this)['attr'](_0x113f62(0x24e)) })), empReqNum[_0x113f62(0x22c)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x2e5))[_0x4786d4(0x333)](function(_0x256715) {
            const _0x2a7e49 = _0x4786d4;
            let _0x2b105f = $(this)[_0x2a7e49(0x367)]();
            _0x2b105f === '' && (_0x2b105f = null), _0x2b105f != null ? empReqSelect = empReqSelect[_0x2a7e49(0x338)](_0x1b2825 => _0x1b2825[_0x2a7e49(0x2af)] !== _0x256715) : (!empReqSelect[_0x2a7e49(0x29e)](_0x3533e9 => _0x3533e9[_0x2a7e49(0x2af)] === _0x256715) && empReqSelect[_0x2a7e49(0x2b6)]({ 'input': _0x256715 }), unfilledArr[_0x2a7e49(0x2b6)]({ 'input': $(this)[_0x2a7e49(0x28c)](_0x2a7e49(0x24e)) })), empReqSelect[_0x2a7e49(0x22c)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])['find']('textarea[required]')[_0x4786d4(0x333)](function(_0x3e78d7) {
            const _0x4479d8 = _0x4786d4;
            let _0x2c698e = $(this)[_0x4479d8(0x367)]()[_0x4479d8(0x22c)],
                _0x1fe719 = $(this)[_0x4479d8(0x285)](_0x4479d8(0x286)) ? $(this)[_0x4479d8(0x285)](_0x4479d8(0x286)) : 0x0;
            $(this)[_0x4479d8(0x367)]() !== '' && _0x2c698e >= _0x1fe719 ? empReqTextarea = empReqTextarea[_0x4479d8(0x338)](_0x599d7f => _0x599d7f[_0x4479d8(0x2af)] !== _0x3e78d7) : (!empReqTextarea[_0x4479d8(0x29e)](_0x42ee7f => _0x42ee7f[_0x4479d8(0x2af)] === _0x3e78d7) && empReqTextarea[_0x4479d8(0x2b6)]({ 'input': _0x3e78d7 }), unfilledArr['push']({ 'input': $(this)[_0x4479d8(0x28c)](_0x4479d8(0x24e)) })), empReqTextarea[_0x4479d8(0x22c)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](':input[type=\x22email\x22][required]')[_0x4786d4(0x333)](function() {
            const _0x3beeb5 = _0x4786d4;
            $(this)['val']() !== '' ? validateEmail($(this)[_0x3beeb5(0x367)](), $(this)['data'](_0x3beeb5(0x2ab)), $(this)['attr'](_0x3beeb5(0x24e))) : (emailFilled = ![], unfilledArr[_0x3beeb5(0x2b6)]({ 'input': $(this)['attr'](_0x3beeb5(0x24e)) }));
        });
    } else {
        if ($(steps[x])['data'](_0x4786d4(0x225))) answer = $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x2e6))['data']('go-to'), selections = selections['filter'](_0x4194af => _0x4194af[_0x4786d4(0x205)] !== x), selections['push']({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x285)]('card') && (answer = $(steps[x])['find'](_0x4786d4(0x345))['data'](_0x4786d4(0x34b)), selections = selections[_0x4786d4(0x338)](_0x1a7625 => _0x1a7625['step'] !== x), selections[_0x4786d4(0x2b6)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x25e))['is'](_0x4786d4(0x248))) {
            if (checkCount === '*' || checkCount > $(steps[x])[_0x4786d4(0x29e)](':input[type=\x22checkbox\x22]')[_0x4786d4(0x22c)]) $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x363))[_0x4786d4(0x333)](function() {
                const _0xa0f262 = _0x4786d4;
                if ($(this)['is'](_0xa0f262(0x255))) {
                    if ($(steps[x])[_0xa0f262(0x29e)](_0xa0f262(0x2a3))[_0xa0f262(0x22c)] < 0x1) {
                        let _0x109533 = undefined;
                        $(this)['parents'](_0xa0f262(0x1e1))[_0xa0f262(0x285)](_0xa0f262(0x2f3)) && (_0x109533 = $(this)[_0xa0f262(0x220)]('[data-skip-to]')[_0xa0f262(0x285)]('skip-to'));
                        if ($(this)['parents'](_0xa0f262(0x2e6))['attr'](_0xa0f262(0x280))) {
                            let _0x3706ac = $(this)['parents'](_0xa0f262(0x2e6))[_0xa0f262(0x28c)](_0xa0f262(0x280));
                            selections = selections[_0xa0f262(0x338)](_0x18f5ea => _0x18f5ea[_0xa0f262(0x205)] !== x), selections[_0xa0f262(0x2b6)]({ 'step': x, 'selected': _0x3706ac });
                            if (_0x109533) {
                                selections = selections[_0xa0f262(0x338)](_0x1f1ad4 => _0x1f1ad4['step'] !== _0x109533 - 0x2), selections['push']({ 'step': _0x109533 - 0x2, 'selected': _0x3706ac });
                                let _0x877c18 = selections[_0xa0f262(0x293)](_0x154f28 => _0x154f28[_0xa0f262(0x205)] === x);
                                selections[_0x877c18][_0xa0f262(0x339)] = parseInt(_0x109533) - 0x1, selections[_0x877c18][_0xa0f262(0x20c)] = x;
                            }
                        }
                        checkboxFilled = !![], $(steps[x])['find'](':input[type=\x22checkbox\x22][required]:checked')['length'] >= $(steps[x])[_0xa0f262(0x29e)](':input[type=\x22checkbox\x22][required]')[_0xa0f262(0x22c)] && resetInputErrorMessage($(steps[x])[_0xa0f262(0x29e)](':input[type=\x22checkbox\x22]')[_0xa0f262(0x28c)](_0xa0f262(0x24e)));
                    }
                } else checkboxFilled = ![], unfilledArr['push']({ 'input': $(this)[_0xa0f262(0x28c)](_0xa0f262(0x24e)) });
            });
            else {
                if ($(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](':input[type=\x22checkbox\x22]:checked')['length'] >= checkCount) {
                    if ($(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x363))[_0x4786d4(0x220)](_0x4786d4(0x2e6))[_0x4786d4(0x28c)](_0x4786d4(0x280))) {
                        let _0x539402 = undefined;
                        $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](':input[type=\x22checkbox\x22]')['parents'](_0x4786d4(0x1e1))[_0x4786d4(0x28c)](_0x4786d4(0x253)) && (_0x539402 = $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))['find'](_0x4786d4(0x2b4))[_0x4786d4(0x220)](_0x4786d4(0x1e1))[_0x4786d4(0x28c)]('data-skip-to'));
                        let _0x2ee154 = $(steps[x])[_0x4786d4(0x29e)]('.active-answer-card')['find'](_0x4786d4(0x363))[_0x4786d4(0x220)](_0x4786d4(0x2e6))[_0x4786d4(0x28c)](_0x4786d4(0x280));
                        selections = selections[_0x4786d4(0x338)](_0x541ca4 => _0x541ca4[_0x4786d4(0x205)] !== x), selections['push']({ 'step': x, 'selected': _0x2ee154 });
                        if (_0x539402) {
                            selections = selections[_0x4786d4(0x338)](_0x4dc610 => _0x4dc610['step'] !== _0x539402 - 0x2), selections[_0x4786d4(0x2b6)]({ 'step': _0x539402 - 0x2, 'selected': _0x2ee154 });
                            let _0x2d68a9 = selections[_0x4786d4(0x293)](_0x15e6bf => _0x15e6bf[_0x4786d4(0x205)] === x);
                            selections[_0x2d68a9][_0x4786d4(0x339)] = parseInt(_0x539402) - 0x1, selections[_0x2d68a9][_0x4786d4(0x20c)] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])['find'](':input[type=\x22checkbox\x22][required]:checked')[_0x4786d4(0x22c)] >= $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x1d7))[_0x4786d4(0x22c)] && resetInputErrorMessage($(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x363))[_0x4786d4(0x28c)](_0x4786d4(0x24e)));
                } else checkboxFilled = ![], $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x1d7))[_0x4786d4(0x333)](function() {
                    const _0x29a410 = _0x4786d4;
                    $(this)[_0x29a410(0x2e9)](':checked') && unfilledArr[_0x29a410(0x2b6)]({ 'input': $(this)[_0x29a410(0x28c)](_0x29a410(0x24e)) });
                });
            }
        }
        $(steps[x])['find'](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x25b))['each'](function(_0x447044) {
            const _0x38820f = _0x4786d4;
            var _0x4b4b9b = $(this)[_0x38820f(0x28c)]('name');
            $(_0x38820f(0x215) + _0x4b4b9b + _0x38820f(0x1e4))[_0x38820f(0x22c)] == 0x0 ? (!empReqRadio['find'](_0x23095e => _0x23095e['input'] === _0x447044) && empReqRadio['push']({ 'input': _0x447044 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x38820f(0x24e)) })) : empReqRadio = empReqRadio[_0x38820f(0x338)](_0x5801a4 => _0x5801a4[_0x38820f(0x2af)] !== _0x447044), empReqRadio[_0x38820f(0x22c)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)]('.active-answer-card')[_0x4786d4(0x29e)](':input[type=\x22text\x22][required]')[_0x4786d4(0x333)](function(_0x47e7fb) {
            const _0x27ee9c = _0x4786d4;
            let _0x374cce = $(this)[_0x27ee9c(0x367)]()[_0x27ee9c(0x22c)],
                _0x357ff3 = $(this)['data']('min-character') ? $(this)[_0x27ee9c(0x285)]('min-character') : 0x0;
            $(this)[_0x27ee9c(0x367)]() !== '' && _0x374cce >= _0x357ff3 ? empReqInput = empReqInput['filter'](_0x325dc4 => _0x325dc4['input'] !== _0x47e7fb) : (!empReqInput[_0x27ee9c(0x29e)](_0x5c6923 => _0x5c6923['input'] === _0x47e7fb) && empReqInput[_0x27ee9c(0x2b6)]({ 'input': _0x47e7fb }), unfilledArr['push']({ 'input': $(this)[_0x27ee9c(0x28c)](_0x27ee9c(0x24e)) })), empReqInput[_0x27ee9c(0x22c)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x336))[_0x4786d4(0x333)](function(_0x3d59d4) {
            const _0x4c026d = _0x4786d4;
            skipTo = undefined, $(this)['parents'](_0x4c026d(0x1e1))[_0x4c026d(0x285)](_0x4c026d(0x2f3)) !== '' && (skipTo = $(this)[_0x4c026d(0x220)](_0x4c026d(0x1e1))['data'](_0x4c026d(0x2f3))), $(this)[_0x4c026d(0x220)]('[data-go-to]')[_0x4c026d(0x28c)]('data-go-to') && (answer = $(this)[_0x4c026d(0x220)](_0x4c026d(0x2e6))['attr'](_0x4c026d(0x280)), selections = selections['filter'](_0x475238 => _0x475238['step'] !== x), selections[_0x4c026d(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4c026d(0x338)](_0x30b98a => _0x30b98a['step'] !== skipTo - 0x2), selections[_0x4c026d(0x2b6)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x55e1ba => _0x55e1ba['step'] === x), selections[objIndex][_0x4c026d(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x309))[_0x4786d4(0x333)](function(_0x1384d6) {
            const _0x52b9df = _0x4786d4;
            let _0xe7fe07 = $(this)[_0x52b9df(0x367)]()[_0x52b9df(0x22c)],
                _0x5d8b6f = $(this)[_0x52b9df(0x285)]('min-character') ? $(this)[_0x52b9df(0x285)]('min-character') : 0x0;
            $(this)[_0x52b9df(0x367)]() !== '' && _0xe7fe07 >= _0x5d8b6f ? empReqPassword = empReqPassword['filter'](_0x53b70f => _0x53b70f['input'] !== _0x1384d6) : (!empReqPassword['find'](_0x38cf1e => _0x38cf1e['input'] === _0x1384d6) && empReqPassword[_0x52b9df(0x2b6)]({ 'input': _0x1384d6 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x52b9df(0x24e)) })), empReqPassword[_0x52b9df(0x22c)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x289))[_0x4786d4(0x333)](function(_0x4ed3fe) {
            const _0x654caa = _0x4786d4;
            skipTo = undefined, $(this)[_0x654caa(0x220)](_0x654caa(0x1e1))[_0x654caa(0x285)](_0x654caa(0x2f3)) !== '' && (skipTo = $(this)[_0x654caa(0x220)]('[data-skip-to]')['data'](_0x654caa(0x2f3))), $(this)[_0x654caa(0x220)](_0x654caa(0x2e6))['attr'](_0x654caa(0x280)) && (answer = $(this)[_0x654caa(0x220)](_0x654caa(0x2e6))[_0x654caa(0x28c)](_0x654caa(0x280)), selections = selections[_0x654caa(0x338)](_0x290b19 => _0x290b19[_0x654caa(0x205)] !== x), selections[_0x654caa(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x654caa(0x338)](_0x40b296 => _0x40b296[_0x654caa(0x205)] !== skipTo - 0x2), selections[_0x654caa(0x2b6)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x654caa(0x293)](_0x57735f => _0x57735f['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x654caa(0x20c)] = x));
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x2d0))[_0x4786d4(0x333)](function(_0x1152b7) {
            const _0x242a4f = _0x4786d4;
            let _0x314323 = $(this)[_0x242a4f(0x367)]()[_0x242a4f(0x22c)],
                _0x23bbbb = $(this)[_0x242a4f(0x285)](_0x242a4f(0x286)) ? $(this)['data'](_0x242a4f(0x286)) : 0x0;
            $(this)['val']() !== '' && _0x314323 >= _0x23bbbb ? empReqUrl = empReqUrl[_0x242a4f(0x338)](_0x1d5b23 => _0x1d5b23[_0x242a4f(0x2af)] !== _0x1152b7) : (!empReqUrl[_0x242a4f(0x29e)](_0x2e934c => _0x2e934c[_0x242a4f(0x2af)] === _0x1152b7) && empReqUrl['push']({ 'input': _0x1152b7 }), unfilledArr[_0x242a4f(0x2b6)]({ 'input': $(this)[_0x242a4f(0x28c)](_0x242a4f(0x24e)) })), empReqUrl['length'] === 0x0 && validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')[_0x4786d4(0x29e)](_0x4786d4(0x2f1))[_0x4786d4(0x333)](function(_0x3e41ca) {
            const _0xd81e1f = _0x4786d4;
            skipTo = undefined, $(this)[_0xd81e1f(0x220)](_0xd81e1f(0x1e1))['data'](_0xd81e1f(0x2f3)) !== '' && (skipTo = $(this)[_0xd81e1f(0x220)]('[data-skip-to]')[_0xd81e1f(0x285)](_0xd81e1f(0x2f3))), $(this)['parents']('[data-go-to]')[_0xd81e1f(0x28c)](_0xd81e1f(0x280)) && (answer = $(this)[_0xd81e1f(0x220)](_0xd81e1f(0x2e6))[_0xd81e1f(0x28c)]('data-go-to'), selections = selections[_0xd81e1f(0x338)](_0x9c04fc => _0x9c04fc['step'] !== x), selections[_0xd81e1f(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0xd81e1f(0x338)](_0x33a3b8 => _0x33a3b8['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0xd81e1f(0x293)](_0x3ebcef => _0x3ebcef[_0xd81e1f(0x205)] === x), selections[objIndex][_0xd81e1f(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex][_0xd81e1f(0x20c)] = x));
        }), $(steps[x])['find'](_0x4786d4(0x345))[_0x4786d4(0x29e)](':input[type=\x22date\x22][required]')[_0x4786d4(0x333)](function(_0xa0194f) {
            const _0x4f181a = _0x4786d4;
            $(this)[_0x4f181a(0x367)]() !== '' ? empReqDate = empReqDate[_0x4f181a(0x338)](_0x2732bf => _0x2732bf['input'] !== _0xa0194f) : (!empReqDate['find'](_0x4b7ac6 => _0x4b7ac6[_0x4f181a(0x2af)] === _0xa0194f) && empReqDate[_0x4f181a(0x2b6)]({ 'input': _0xa0194f }), unfilledArr[_0x4f181a(0x2b6)]({ 'input': $(this)['attr'](_0x4f181a(0x24e)) })), empReqDate[_0x4f181a(0x22c)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)]('.active-answer-card')[_0x4786d4(0x29e)](_0x4786d4(0x2ad))[_0x4786d4(0x333)](function(_0x5e76d0) {
            const _0x109c12 = _0x4786d4;
            skipTo = undefined, $(this)[_0x109c12(0x220)](_0x109c12(0x1e1))[_0x109c12(0x285)](_0x109c12(0x2f3)) !== '' && (skipTo = $(this)['parents'](_0x109c12(0x1e1))['data'](_0x109c12(0x2f3))), $(this)[_0x109c12(0x220)](_0x109c12(0x2e6))[_0x109c12(0x28c)]('data-go-to') && (answer = $(this)[_0x109c12(0x220)](_0x109c12(0x2e6))['attr'](_0x109c12(0x280)), selections = selections[_0x109c12(0x338)](_0x1c4e2f => _0x1c4e2f[_0x109c12(0x205)] !== x), selections[_0x109c12(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x109c12(0x338)](_0x2eb179 => _0x2eb179[_0x109c12(0x205)] !== skipTo - 0x2), selections[_0x109c12(0x2b6)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x109c12(0x293)](_0x1e7d9c => _0x1e7d9c[_0x109c12(0x205)] === x), selections[objIndex][_0x109c12(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x109c12(0x20c)] = x));
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](':input[type=\x22time\x22][required]')[_0x4786d4(0x333)](function(_0x56a872) {
            const _0x585233 = _0x4786d4;
            $(this)[_0x585233(0x367)]() !== '' ? empReqTime = empReqTime[_0x585233(0x338)](_0x34bc8a => _0x34bc8a['input'] !== _0x56a872) : (!empReqTime[_0x585233(0x29e)](_0x202286 => _0x202286[_0x585233(0x2af)] === _0x56a872) && empReqTime['push']({ 'input': _0x56a872 }), unfilledArr['push']({ 'input': $(this)[_0x585233(0x28c)]('name') })), empReqTime[_0x585233(0x22c)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x269))[_0x4786d4(0x333)](function(_0x383cbd) {
            const _0x5d5526 = _0x4786d4;
            skipTo = undefined, $(this)[_0x5d5526(0x220)](_0x5d5526(0x1e1))[_0x5d5526(0x285)](_0x5d5526(0x2f3)) !== '' && (skipTo = $(this)[_0x5d5526(0x220)](_0x5d5526(0x1e1))[_0x5d5526(0x285)](_0x5d5526(0x2f3))), $(this)['parents'](_0x5d5526(0x2e6))[_0x5d5526(0x28c)]('data-go-to') && (answer = $(this)[_0x5d5526(0x220)](_0x5d5526(0x2e6))['attr'](_0x5d5526(0x280)), selections = selections[_0x5d5526(0x338)](_0xa20b92 => _0xa20b92[_0x5d5526(0x205)] !== x), selections[_0x5d5526(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5d5526(0x338)](_0x132608 => _0x132608[_0x5d5526(0x205)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5d5526(0x293)](_0x567cf9 => _0x567cf9[_0x5d5526(0x205)] === x), selections[objIndex][_0x5d5526(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x217))[_0x4786d4(0x333)](function(_0x3a4fbf) {
            const _0x54f344 = _0x4786d4;
            let _0x20d17c = $(this)[_0x54f344(0x367)]()[_0x54f344(0x22c)],
                _0x4f2970 = $(this)['data'](_0x54f344(0x286)) ? $(this)[_0x54f344(0x285)](_0x54f344(0x286)) : 0x0;
            $(this)['val']() !== '' && _0x20d17c >= _0x4f2970 ? empReqNum = empReqNum['filter'](_0x2b9686 => _0x2b9686[_0x54f344(0x2af)] !== _0x3a4fbf) : (!empReqNum['find'](_0x2fb448 => _0x2fb448[_0x54f344(0x2af)] === _0x3a4fbf) && empReqNum['push']({ 'input': _0x3a4fbf }), unfilledArr[_0x54f344(0x2b6)]({ 'input': $(this)['attr'](_0x54f344(0x24e)) })), empReqNum['length'] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x2fa))['each'](function(_0x58e816) {
            const _0x40c6b1 = _0x4786d4;
            skipTo = undefined, $(this)[_0x40c6b1(0x220)](_0x40c6b1(0x1e1))['data'](_0x40c6b1(0x2f3)) !== '' && (skipTo = $(this)[_0x40c6b1(0x220)]('[data-skip-to]')[_0x40c6b1(0x285)](_0x40c6b1(0x2f3))), $(this)[_0x40c6b1(0x220)](_0x40c6b1(0x2e6))[_0x40c6b1(0x28c)](_0x40c6b1(0x280)) && (answer = $(this)['parents']('[data-go-to]')['attr']('data-go-to'), selections = selections[_0x40c6b1(0x338)](_0xa27686 => _0xa27686[_0x40c6b1(0x205)] !== x), selections[_0x40c6b1(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x40c6b1(0x338)](_0x104347 => _0x104347[_0x40c6b1(0x205)] !== skipTo - 0x2), selections[_0x40c6b1(0x2b6)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x40c6b1(0x293)](_0x51f30f => _0x51f30f[_0x40c6b1(0x205)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x40c6b1(0x20c)] = x));
        }), $(steps[x])['find']('.active-answer-card')[_0x4786d4(0x29e)](_0x4786d4(0x1c4))['each'](function(_0x151004) {
            const _0x39d3c9 = _0x4786d4;
            if ($(this)['val']() !== '') {
                let _0x3a541a = $(this)['val']()[_0x39d3c9(0x22c)],
                    _0x22f1dd = $(this)[_0x39d3c9(0x285)](_0x39d3c9(0x286)) ? $(this)['data'](_0x39d3c9(0x286)) : 0x0;
                if ($(this)[_0x39d3c9(0x285)](_0x39d3c9(0x290))) {
                    var _0x4804fb = phoneAutoFormat($(this)[_0x39d3c9(0x285)](_0x39d3c9(0x290)));
                    $(this)['val'](_0x4804fb($(this)[_0x39d3c9(0x367)]()));
                }
                phoneValidation($(this)[_0x39d3c9(0x367)](), _0x3a541a, _0x22f1dd) ? empReqTel = empReqTel['filter'](_0x5cdf4a => _0x5cdf4a['input'] !== _0x151004) : empReqTel[_0x39d3c9(0x2b6)]({ 'input': _0x151004 });
            } else !empReqTel[_0x39d3c9(0x29e)](_0x22c166 => _0x22c166[_0x39d3c9(0x2af)] === _0x151004) && empReqTel['push']({ 'input': _0x151004 }), unfilledArr[_0x39d3c9(0x2b6)]({ 'input': $(this)[_0x39d3c9(0x28c)](_0x39d3c9(0x24e)) });
            empReqTel['length'] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x26c))['each'](function(_0x438d5d) {
            const _0x508581 = _0x4786d4;
            skipTo = undefined, $(this)[_0x508581(0x220)](_0x508581(0x1e1))[_0x508581(0x285)](_0x508581(0x2f3)) !== '' && (skipTo = $(this)[_0x508581(0x220)](_0x508581(0x1e1))['data'](_0x508581(0x2f3))), $(this)[_0x508581(0x220)](_0x508581(0x2e6))['attr'](_0x508581(0x280)) && (answer = $(this)['parents']('[data-go-to]')[_0x508581(0x28c)](_0x508581(0x280)), selections = selections[_0x508581(0x338)](_0x3c15e5 => _0x3c15e5[_0x508581(0x205)] !== x), selections[_0x508581(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x508581(0x338)](_0x532549 => _0x532549[_0x508581(0x205)] !== skipTo - 0x2), selections[_0x508581(0x2b6)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x508581(0x293)](_0x19fd03 => _0x19fd03['step'] === x), selections[objIndex][_0x508581(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x508581(0x20c)] = x));
        }), $(steps[x])['find'](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x213))[_0x4786d4(0x333)](function(_0x59084f) {
            const _0x44e9f7 = _0x4786d4;
            $(this)[_0x44e9f7(0x367)]() !== '' ? empReqFile = empReqFile[_0x44e9f7(0x338)](_0x2ba19a => _0x2ba19a[_0x44e9f7(0x2af)] !== _0x59084f) : (!empReqFile['find'](_0x253d74 => _0x253d74[_0x44e9f7(0x2af)] === _0x59084f) && empReqFile[_0x44e9f7(0x2b6)]({ 'input': _0x59084f }), unfilledArr['push']({ 'input': $(this)[_0x44e9f7(0x28c)]('name') })), empReqFile[_0x44e9f7(0x22c)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)]('.active-answer-card')['find'](_0x4786d4(0x276))['each'](function(_0x1e6729) {
            const _0x4b42bb = _0x4786d4;
            skipTo = undefined, $(this)['parents'](_0x4b42bb(0x1e1))[_0x4b42bb(0x285)](_0x4b42bb(0x2f3)) !== '' && (skipTo = $(this)[_0x4b42bb(0x220)]('[data-skip-to]')[_0x4b42bb(0x285)](_0x4b42bb(0x2f3))), $(this)[_0x4b42bb(0x220)](_0x4b42bb(0x2e6))[_0x4b42bb(0x28c)](_0x4b42bb(0x280)) && (answer = $(this)[_0x4b42bb(0x220)](_0x4b42bb(0x2e6))[_0x4b42bb(0x28c)](_0x4b42bb(0x280)), selections = selections['filter'](_0xac704d => _0xac704d[_0x4b42bb(0x205)] !== x), selections[_0x4b42bb(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4b42bb(0x338)](_0xd16cbe => _0xd16cbe[_0x4b42bb(0x205)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4b42bb(0x293)](_0x3c9b01 => _0x3c9b01[_0x4b42bb(0x205)] === x), selections[objIndex][_0x4b42bb(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4b42bb(0x20c)] = x));
        }), $(steps[x])[_0x4786d4(0x29e)]('.active-answer-card')[_0x4786d4(0x29e)](_0x4786d4(0x2e5))[_0x4786d4(0x333)](function(_0x2cddcc) {
            const _0x3345a9 = _0x4786d4;
            $(this)[_0x3345a9(0x367)]() !== null && $(this)[_0x3345a9(0x367)]() !== '' ? empReqSelect = empReqSelect[_0x3345a9(0x338)](_0x408d87 => _0x408d87[_0x3345a9(0x2af)] !== _0x2cddcc) : (!empReqSelect[_0x3345a9(0x29e)](_0x563593 => _0x563593[_0x3345a9(0x2af)] === _0x2cddcc) && empReqSelect['push']({ 'input': _0x2cddcc }), unfilledArr[_0x3345a9(0x2b6)]({ 'input': $(this)[_0x3345a9(0x28c)](_0x3345a9(0x24e)) })), empReqSelect['length'] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)]('.active-answer-card')[_0x4786d4(0x29e)]('select')[_0x4786d4(0x333)](function(_0x33b1d5) {
            const _0x5014fd = _0x4786d4;
            skipTo = undefined, $(this)[_0x5014fd(0x220)](_0x5014fd(0x1e1))['data']('skip-to') !== '' && (skipTo = $(this)[_0x5014fd(0x220)](_0x5014fd(0x1e1))['data'](_0x5014fd(0x2f3))), $(this)[_0x5014fd(0x220)](_0x5014fd(0x2e6))[_0x5014fd(0x28c)](_0x5014fd(0x280)) && (answer = $(this)['parents'](_0x5014fd(0x2e6))[_0x5014fd(0x28c)](_0x5014fd(0x280)), selections = selections[_0x5014fd(0x338)](_0x4e24b9 => _0x4e24b9['step'] !== x), selections[_0x5014fd(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5014fd(0x338)](_0xd47e85 => _0xd47e85[_0x5014fd(0x205)] !== skipTo - 0x2), selections[_0x5014fd(0x2b6)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5014fd(0x293)](_0x1af2c1 => _0x1af2c1[_0x5014fd(0x205)] === x), selections[objIndex][_0x5014fd(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])['find']('.active-answer-card')[_0x4786d4(0x29e)](_0x4786d4(0x20f))[_0x4786d4(0x333)](function(_0x3a7bf2) {
            const _0x5f1927 = _0x4786d4;
            let _0x5003cf = $(this)[_0x5f1927(0x367)]()[_0x5f1927(0x22c)],
                _0x3836f9 = $(this)['data'](_0x5f1927(0x286)) ? $(this)[_0x5f1927(0x285)](_0x5f1927(0x286)) : 0x0;
            $(this)['val']() !== '' && _0x5003cf >= _0x3836f9 ? empReqTextarea = empReqTextarea[_0x5f1927(0x338)](_0x472fbe => _0x472fbe[_0x5f1927(0x2af)] !== _0x3a7bf2) : (!empReqTextarea['find'](_0x16b907 => _0x16b907[_0x5f1927(0x2af)] === _0x3a7bf2) && empReqTextarea['push']({ 'input': _0x3a7bf2 }), unfilledArr[_0x5f1927(0x2b6)]({ 'input': $(this)[_0x5f1927(0x28c)](_0x5f1927(0x24e)) })), empReqTextarea[_0x5f1927(0x22c)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x4786d4(0x29e)]('.active-answer-card')[_0x4786d4(0x29e)](_0x4786d4(0x1d3))['each'](function(_0x1e9bf8) {
            const _0x4408e3 = _0x4786d4;
            skipTo = undefined, $(this)[_0x4408e3(0x220)]('[data-skip-to]')['data'](_0x4408e3(0x2f3)) !== '' && (skipTo = $(this)['parents'](_0x4408e3(0x1e1))[_0x4408e3(0x285)](_0x4408e3(0x2f3))), $(this)[_0x4408e3(0x220)](_0x4408e3(0x2e6))[_0x4408e3(0x28c)](_0x4408e3(0x280)) && (answer = $(this)[_0x4408e3(0x220)](_0x4408e3(0x2e6))['attr'](_0x4408e3(0x280)), selections = selections[_0x4408e3(0x338)](_0x250a65 => _0x250a65['step'] !== x), selections[_0x4408e3(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x27441b => _0x27441b['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4408e3(0x293)](_0x297fcb => _0x297fcb[_0x4408e3(0x205)] === x), selections[objIndex][_0x4408e3(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4408e3(0x20c)] = x));
        }), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))['find'](_0x4786d4(0x2bd))[_0x4786d4(0x333)](function(_0x5a9f1a) {
            const _0x3b9669 = _0x4786d4;
            $(this)[_0x3b9669(0x367)]() !== '' ? validateEmail($(this)[_0x3b9669(0x367)](), $(this)[_0x3b9669(0x285)](_0x3b9669(0x2ab)), $(this)[_0x3b9669(0x28c)]('name')) : (emailFilled = ![], unfilledArr[_0x3b9669(0x2b6)]({ 'input': $(this)['attr']('name') }));
        }), $(steps[x])['find']('.active-answer-card')[_0x4786d4(0x29e)](_0x4786d4(0x282))[_0x4786d4(0x333)](function(_0x30a1ae) {
            const _0x34f351 = _0x4786d4;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')[_0x34f351(0x285)]('skip-to') !== '' && (skipTo = $(this)[_0x34f351(0x220)](_0x34f351(0x1e1))[_0x34f351(0x285)](_0x34f351(0x2f3))), $(this)[_0x34f351(0x220)](_0x34f351(0x2e6))['attr'](_0x34f351(0x280)) && (answer = $(this)[_0x34f351(0x220)](_0x34f351(0x2e6))[_0x34f351(0x28c)](_0x34f351(0x280)), selections = selections[_0x34f351(0x338)](_0x7a244e => _0x7a244e[_0x34f351(0x205)] !== x), console[_0x34f351(0x2e0)]('selections\x20email', selections, x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x34f351(0x338)](_0x376945 => _0x376945[_0x34f351(0x205)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x34f351(0x293)](_0x33018b => _0x33018b[_0x34f351(0x205)] === x), selections[objIndex][_0x34f351(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x34f351(0x20c)] = x));
        });
    }
    $(steps[x])['find'](_0x4786d4(0x301))['is'](':checked') && (selArr = [], $(steps)[_0x4786d4(0x29e)](_0x4786d4(0x314))['each'](function(_0x1412a8, _0x156f89) {
        const _0x2f80be = _0x4786d4;
        selArr[_0x2f80be(0x2b6)]({ 'selected': $(this)['data'](_0x2f80be(0x1de)) });
    }), selString = [], selArr[_0x4786d4(0x1c5)](_0x42a1c9 => selString[_0x4786d4(0x2b6)](_0x42a1c9[_0x4786d4(0x1de)])), $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)](_0x4786d4(0x221))[_0x4786d4(0x333)](function() {
        const _0x57156a = _0x4786d4;
        skipTo = undefined;
        if ($(this)['parents'](_0x57156a(0x1e1))[_0x57156a(0x285)](_0x57156a(0x2f3))) skipTo = $(this)[_0x57156a(0x220)]('[data-skip-to]')[_0x57156a(0x285)](_0x57156a(0x2f3));
        else $(this)[_0x57156a(0x285)](_0x57156a(0x2f3)) && (skipTo = $(this)[_0x57156a(0x285)](_0x57156a(0x2f3)));
        selections = selections['filter'](_0x2ee001 => _0x2ee001[_0x57156a(0x205)] !== x);
        if ($(this)['data'](_0x57156a(0x34b))) answer = $(this)[_0x57156a(0x28c)](_0x57156a(0x280)), selections[_0x57156a(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x32f3d4 => _0x32f3d4['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x57156a(0x293)](_0x3a4c3c => _0x3a4c3c[_0x57156a(0x205)] === x), selections[objIndex][_0x57156a(0x339)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x);
        else $(this)[_0x57156a(0x220)]('[data-go-to]')[_0x57156a(0x285)]('go-to') && (answer = $(this)[_0x57156a(0x220)]('[data-go-to]')[_0x57156a(0x285)](_0x57156a(0x34b)), selections[_0x57156a(0x2b6)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x57156a(0x338)](_0x37a63d => _0x37a63d[_0x57156a(0x205)] !== skipTo - 0x2), selections[_0x57156a(0x2b6)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x57156a(0x293)](_0x5ce0a4 => _0x5ce0a4[_0x57156a(0x205)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x57156a(0x20c)] = x));
    }), logicExtra ? ($(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x345))[_0x4786d4(0x29e)]('[data-radio-skip]:visible')[_0x4786d4(0x285)](_0x4786d4(0x318)) === !![] || $(steps[x])[_0x4786d4(0x29e)](_0x4786d4(0x324))['data'](_0x4786d4(0x318)) === !![]) && (skip && selections[_0x4786d4(0x338)](_0x4924b2 => _0x4924b2[_0x4786d4(0x205)] === x)[_0x4786d4(0x22c)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x4786d4(0x29e)]('[data-radio-delay]')[_0x4786d4(0x285)](_0x4786d4(0x300))))) : $(steps[x])['find'](_0x4786d4(0x334))['data'](_0x4786d4(0x318)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x4786d4(0x29e)]('[data-radio-delay]')[_0x4786d4(0x285)](_0x4786d4(0x300)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x275197 = _0x1864d6;
    $('[data-text=\x22error-message\x22]')[_0x275197(0x24c)](), unfilledArr[_0x275197(0x22c)] > 0x0 && unfilledArr['forEach'](function(_0x31c7bb) {
        const _0x2c6e3e = _0x275197;
        $(_0x2c6e3e(0x30c) + _0x31c7bb[_0x2c6e3e(0x2af)] + '\x22]')['siblings'](_0x2c6e3e(0x27c))[_0x2c6e3e(0x304)](), $(_0x2c6e3e(0x30c) + _0x31c7bb[_0x2c6e3e(0x2af)] + '\x22]')[_0x2c6e3e(0x220)]()[_0x2c6e3e(0x223)]('[data-text=\x22error-message\x22]')[_0x2c6e3e(0x304)](), $(_0x2c6e3e(0x283) + _0x31c7bb[_0x2c6e3e(0x2af)] + '\x22]')[_0x2c6e3e(0x212)](_0x2c6e3e(0x27c))[_0x2c6e3e(0x304)](), $(_0x2c6e3e(0x351) + _0x31c7bb[_0x2c6e3e(0x2af)] + '\x22]')[_0x2c6e3e(0x212)](_0x2c6e3e(0x27c))[_0x2c6e3e(0x304)]();
    });
}

function resetInputErrorMessage(_0x462874) {
    const _0x31c7cc = _0x1864d6;
    $(_0x31c7cc(0x30c) + _0x462874 + '\x22]')[_0x31c7cc(0x212)]('[data-text=\x22error-message\x22]')['hide'](), $(_0x31c7cc(0x30c) + _0x462874 + '\x22]')[_0x31c7cc(0x220)]()['children'](_0x31c7cc(0x27c))[_0x31c7cc(0x24c)](), $(_0x31c7cc(0x283) + _0x462874 + '\x22]')[_0x31c7cc(0x212)]('[data-text=\x22error-message\x22]')[_0x31c7cc(0x24c)](), $('select[name=\x22' + _0x462874 + '\x22]')[_0x31c7cc(0x212)]('[data-text=\x22error-message\x22]')[_0x31c7cc(0x24c)]();
}

function increaseCurstep() {
    const _0x48ac8b = _0x1864d6;
    countCard ? (curStep = x + 0x1, $(_0x48ac8b(0x22d))['text'](steps[_0x48ac8b(0x22c)])) : $(steps[x])[_0x48ac8b(0x285)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x48ac8b(0x311))['text'](curStep);
}

function decreaseCurstep() {
    const _0x481d79 = _0x1864d6;
    countCard ? (curStep = x - 0x1, $(_0x481d79(0x22d))[_0x481d79(0x35f)](steps[_0x481d79(0x22c)])) : $(steps[x])[_0x481d79(0x285)]('card') ? curStep = x - 0x0 : curStep = x - 0x1, $(_0x481d79(0x311))[_0x481d79(0x35f)](curStep);
}
$('[data-form=\x22submit-btn\x22]')['on'](_0x1864d6(0x306), function(_0x1341ea) {
    const _0xab3ef6 = _0x1864d6;
    _0x1341ea[_0xab3ef6(0x2f8)](), _0x1341ea['stopPropagation']();
    $(this)['data'](_0xab3ef6(0x267)) && (redirectTo = $(this)[_0xab3ef6(0x285)](_0xab3ef6(0x267)));
    !$(this)[_0xab3ef6(0x285)]('new-tab') && (newTab = $(this)[_0xab3ef6(0x285)](_0xab3ef6(0x2d7)));
    successCard = $(this)[_0xab3ef6(0x285)](_0xab3ef6(0x224));
    const _0x48ee54 = new URLSearchParams(window['location'][_0xab3ef6(0x297)]),
        _0x3bd39c = (_0x147692, _0x10ccdc) => {
            const _0x22766d = _0xab3ef6,
                _0x4f461e = document[_0x22766d(0x239)](_0x22766d(0x2d5) + _0x147692 + '\x22]');
            _0x4f461e && (_0x4f461e[_0x22766d(0x2ef)] = _0x10ccdc);
        };
    _0x3bd39c(_0xab3ef6(0x325), _0x48ee54['get'](_0xab3ef6(0x325)) || document['referrer'] || _0xab3ef6(0x2a4)), _0x3bd39c(_0xab3ef6(0x2b8), navigator['userAgent']), _0x3bd39c(_0xab3ef6(0x2c2), new Date()[_0xab3ef6(0x23f)]()), _0x3bd39c(_0xab3ef6(0x229), Intl['DateTimeFormat']()[_0xab3ef6(0x295)]()['timeZone']), _0x3bd39c(_0xab3ef6(0x29d), window[_0xab3ef6(0x1f0)][_0xab3ef6(0x369)] + 'x' + window[_0xab3ef6(0x1f0)]['height']), _0x3bd39c(_0xab3ef6(0x32b), _0xab3ef6(0x274));
    const _0x1c2527 = () => {
        const _0x1a9045 = _0xab3ef6,
            _0x8a6c16 = document[_0x1a9045(0x239)](_0x1a9045(0x341));
        if (_0x8a6c16) {
            const _0x2a9b84 = localStorage[_0x1a9045(0x1db)]('pageLoadTime');
            console[_0x1a9045(0x2e0)](_0x2a9b84);
            if (_0x2a9b84) {
                const _0x3eaaf9 = Math['round']((Date[_0x1a9045(0x256)]() - parseInt(_0x2a9b84)) / 0x3e8);
                _0x8a6c16['value'] = _0x3eaaf9 + _0x1a9045(0x2e7);
            } else _0x8a6c16[_0x1a9045(0x2ef)] = _0x1a9045(0x274);
        }
    };
    _0x1c2527(), logicExtra && fill && ($(this)['prop']('novalidate', !![]), $(steps)[_0xab3ef6(0x29e)](_0xab3ef6(0x25e))[_0xab3ef6(0x368)](_0xab3ef6(0x36a), ![]), console[_0xab3ef6(0x2e0)](_0xab3ef6(0x2ca))), localStorage[_0xab3ef6(0x340)](_0xab3ef6(0x2da)), localStorage[_0xab3ef6(0x340)](_0xab3ef6(0x22a)), formlyCustomFunction(), fill ? ($(this)['data'](_0xab3ef6(0x227)) ? (console[_0xab3ef6(0x2e0)]($(this)[_0xab3ef6(0x285)](_0xab3ef6(0x227))), $(this)[_0xab3ef6(0x35f)]($(this)[_0xab3ef6(0x285)](_0xab3ef6(0x227)))) : $(this)[_0xab3ef6(0x367)]('Please\x20wait...')[_0xab3ef6(0x35f)]('Please\x20wait...'), $(_0xab3ef6(0x33d))['submit'](), $(_0xab3ef6(0x23d))['length'] > 0x0 && (grecaptcha['getResponse']()[_0xab3ef6(0x22c)] === 0x0 && (form['find'](_0xab3ef6(0x206))[_0xab3ef6(0x35f)](oldSubmitText), form['find'](_0xab3ef6(0x206))[_0xab3ef6(0x367)](oldSubmitText))), customError && $(_0xab3ef6(0x27c))[_0xab3ef6(0x24c)]()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x24464c = _0x1864d6;
    customError ? ($('[data-text=\x22error-message\x22]')[_0x24464c(0x24c)](), fill ? (x++, progress = x, x <= steps[_0x24464c(0x22c)] - 0x1 && (updateStep(), memory && saveFilledInput()), increaseCurstep()) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput()), increaseCurstep()), andLogic();
}

function backStep() {
    const _0x164342 = _0x1864d6;
    customError && $(_0x164342(0x27c))['hide'](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x164342(0x26f)]('current'), selections[_0x164342(0x338)](_0x266234 => _0x266234[_0x164342(0x339)] === x)[_0x164342(0x22c)] > 0x0 ? x = parseInt(getSafe(() => selections[_0x164342(0x338)](_0x2e7ef2 => _0x2e7ef2[_0x164342(0x339)] === x)[0x0][_0x164342(0x20c)])) : x--, updateStep()), ($(steps[x])[_0x164342(0x29e)](_0x164342(0x334))[_0x164342(0x285)](_0x164342(0x318)) === !![] || $(steps[x])[_0x164342(0x29e)](_0x164342(0x345))['find'](_0x164342(0x334))[_0x164342(0x285)](_0x164342(0x318)) === !![] || $(steps[x])['find'](_0x164342(0x324))[_0x164342(0x285)]('radio-skip') === !![]) && (all_data = all_data[_0x164342(0x338)](_0x37d648 => _0x37d648[_0x164342(0x231)] !== $(steps[x])[_0x164342(0x29e)](_0x164342(0x1f5))[_0x164342(0x28c)](_0x164342(0x24e))), $('[data-input-field=\x22' + $(steps[x])['find']('input[type=\x22radio\x22]:checked')['attr'](_0x164342(0x24e)) + '\x22]')[_0x164342(0x24c)](), $(steps[x])[_0x164342(0x29e)](_0x164342(0x299))['prop'](_0x164342(0x1ff), ![]), $(steps[x])[_0x164342(0x29e)](_0x164342(0x30b))[_0x164342(0x26f)](_0x164342(0x245)), validation());
}
weightedSelectionRange && $(_0x1864d6(0x2dc))[_0x1864d6(0x333)](function() {
    const _0x317bf6 = _0x1864d6;
    $(this)[_0x317bf6(0x1cd)]('<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(this)['data'](_0x317bf6(0x260)) + _0x317bf6(0x234));
});

function selectionQuiz() {
    const _0x1745b9 = _0x1864d6;
    if ($(this)['find']('[data-btn=\x22check\x22]')) {
        $(_0x1745b9(0x2dc))[_0x1745b9(0x24c)](), $(_0x1745b9(0x2b2))[_0x1745b9(0x24c)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr['forEach'](function(_0x283955) { selTotal = selTotal + _0x283955['selected']; }), $(_0x1745b9(0x361))[_0x1745b9(0x35f)](selTotal);
            if ($(_0x1745b9(0x247) + selTotal + '\x22]')[_0x1745b9(0x22c)] > 0x0) $(_0x1745b9(0x247) + selTotal + '\x22]')['fadeIn']();
            else $(_0x1745b9(0x2f0) + selTotal + ')') ? $(_0x1745b9(0x2f0) + selTotal + ')')['parent']('[data-selection]')['eq'](0x0)['show']() : $('[data-selection=\x22other\x22]')[_0x1745b9(0x304)]();
        } else {
            let _0x4634e0 = -0x1,
                _0x5bbf58 = [];
            $(_0x1745b9(0x2dc))[_0x1745b9(0x333)](function(_0x51145b) {
                const _0x5803a5 = _0x1745b9;
                $($('[data-selection]')[_0x51145b])['data']('selection')[_0x5803a5(0x2cb)](selString[_0x5803a5(0x2c6)]()) && (_0x4634e0 = _0x51145b, _0x5bbf58[_0x5803a5(0x2b6)](_0x51145b));
            }), multiSelections ? _0x5bbf58['length'] > 0x0 ? _0x5bbf58[_0x1745b9(0x1c5)](_0x39a6b4 => {
                const _0x1e0504 = _0x1745b9;
                $($('[data-selection]')[_0x39a6b4])[_0x1e0504(0x304)]();
            }) : $(_0x1745b9(0x1c3))[_0x1745b9(0x304)]() : _0x4634e0 > -0x1 ? $($(_0x1745b9(0x2dc))[_0x4634e0])[_0x1745b9(0x304)]() : $('[data-selection=\x22other\x22]')[_0x1745b9(0x304)]();
        }
    }
}

function triggerInputAllData() {
    const _0x102a89 = _0x1864d6;
    if (savedFilledInput && memory) savedFilledInput[_0x102a89(0x1c5)](_0x5c213b => {
        const _0x4d919e = _0x102a89;
        var _0x29acce = $(_0x4d919e(0x30c) + _0x5c213b[_0x4d919e(0x1fc)] + _0x4d919e(0x1d6) + _0x5c213b[_0x4d919e(0x2ef)] + _0x4d919e(0x2bf)),
            _0x4585c4 = $(_0x4d919e(0x30c) + _0x5c213b[_0x4d919e(0x1fc)] + '\x22]:not([data-prefill=\x22false\x22])'),
            _0x15265f = $(_0x4d919e(0x283) + _0x5c213b['inputName'] + _0x4d919e(0x2bf)),
            _0x52bbed = $(_0x4d919e(0x33e) + _0x5c213b['inputName'] + '\x22]'),
            _0x462099 = $(_0x4d919e(0x211) + _0x5c213b[_0x4d919e(0x1fc)] + _0x4d919e(0x1d6) + _0x5c213b[_0x4d919e(0x2ef)] + _0x4d919e(0x2bf));
        if (_0x29acce[_0x4d919e(0x28c)]('type') !== _0x4d919e(0x2b3)) {
            if (_0x29acce[_0x4d919e(0x28c)](_0x4d919e(0x302)) === _0x4d919e(0x29f) && !_0x29acce[_0x4d919e(0x220)](_0x4d919e(0x35c))['data']('radio-skip')) _0x29acce[_0x4d919e(0x306)](), _0x29acce[_0x4d919e(0x212)](_0x4d919e(0x291))[_0x4d919e(0x2e3)](_0x4d919e(0x245)), _0x29acce[_0x4d919e(0x2ea)](_0x4d919e(0x2af));
            else _0x5c213b['value'] === 'on' ? (_0x4585c4[_0x4d919e(0x306)](), _0x4585c4['siblings']('.w-checkbox-input')[_0x4d919e(0x2e3)](_0x4d919e(0x245)), _0x4585c4[_0x4d919e(0x2ea)]('input')) : (_0x4585c4[_0x4d919e(0x367)](_0x5c213b['value']), _0x15265f['val'](_0x5c213b[_0x4d919e(0x2ef)]), $('select:not([data-prefill=\x22false\x22])')[_0x4d919e(0x29e)](_0x4d919e(0x1f1) + _0x5c213b[_0x4d919e(0x2ef)] + '\x22]')['prop'](_0x4d919e(0x1de), !![]), _0x4585c4[_0x4d919e(0x2ea)](_0x4d919e(0x2af)), _0x4585c4['trigger']('change'));
            const _0x1b5128 = _0x462099['data'](_0x4d919e(0x2c5)),
                _0x588196 = _0x52bbed['data'](_0x4d919e(0x2c5));
            _0x462099['parent']()[_0x4d919e(0x2e3)](_0x1b5128), _0x52bbed[_0x4d919e(0x307)]()[_0x4d919e(0x2e3)](_0x588196);
        }
    });
    else _params && (getParams(), searchQ[_0x102a89(0x1c5)](_0x290b58 => {
        const _0x18ea34 = _0x102a89;
        if ($(_0x18ea34(0x30c) + _0x290b58[_0x18ea34(0x1fc)] + _0x18ea34(0x1d6) + _0x290b58[_0x18ea34(0x2ef)] + '\x22]:not([data-prefill=\x22false\x22])')['attr'](_0x18ea34(0x302)) !== 'file') {
            if ($('input[name=\x22' + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x1d6) + _0x290b58[_0x18ea34(0x367)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x18ea34(0x28c)](_0x18ea34(0x302)) === 'radio') $(_0x18ea34(0x30c) + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x1d6) + _0x290b58[_0x18ea34(0x367)] + _0x18ea34(0x2bf))[_0x18ea34(0x306)](), $(_0x18ea34(0x30c) + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x1d6) + _0x290b58[_0x18ea34(0x367)] + _0x18ea34(0x2bf))[_0x18ea34(0x212)]('.w-radio-input')[_0x18ea34(0x2e3)]('w--redirected-checked'), $('input[name=\x22' + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x1d6) + _0x290b58[_0x18ea34(0x367)] + '\x22]:not([data-prefill=\x22false\x22])')['trigger'](_0x18ea34(0x2af));
            else _0x290b58[_0x18ea34(0x367)] === 'on' ? ($('input[name=\x22' + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x2bf))['click'](), $('input[name=\x22' + _0x290b58[_0x18ea34(0x34d)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x18ea34(0x212)]('.w-checkbox-input')['addClass'](_0x18ea34(0x245)), $(_0x18ea34(0x30c) + _0x290b58[_0x18ea34(0x34d)] + '\x22]')[_0x18ea34(0x2ea)](_0x18ea34(0x2af))) : ($(_0x18ea34(0x30c) + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x2bf))[_0x18ea34(0x367)](_0x290b58['val']), $(_0x18ea34(0x283) + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x2bf))['val'](_0x290b58[_0x18ea34(0x367)]), $(_0x18ea34(0x351) + _0x290b58[_0x18ea34(0x34d)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x18ea34(0x29e)](_0x18ea34(0x1f1) + _0x290b58[_0x18ea34(0x367)] + '\x22]')[_0x18ea34(0x368)](_0x18ea34(0x1de), !![]), $(_0x18ea34(0x30c) + _0x290b58[_0x18ea34(0x34d)] + _0x18ea34(0x2bf))[_0x18ea34(0x2ea)](_0x18ea34(0x2af)), $(_0x18ea34(0x30c) + _0x290b58[_0x18ea34(0x34d)] + '\x22]:not([data-prefill=\x22false\x22])')['trigger'](_0x18ea34(0x2d9)));
        }
    }));
}
$('[data-form=\x22next-btn\x22]')['on'](_0x1864d6(0x306), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $('[data-form=\x22back-btn\x22]')['on'](_0x1864d6(0x306), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x1864d6(0x29e)](':input')['not']('[type=\x22radio\x22]')['on'](_0x1864d6(0x2af), function(_0x10730c) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x1864d6(0x29e)](_0x1864d6(0x299))['on'](_0x1864d6(0x306), function() { skip = !![], validation(), addClickClass(); });
$('[data-clickable-all]')[_0x1864d6(0x285)]('clickable-all') ? $(_0x1864d6(0x2c1))['removeClass']('disabled') : $(_0x1864d6(0x2c1))[_0x1864d6(0x2e3)](_0x1864d6(0x2d1));

function clickableIndicator() {
    const _0x3804bc = _0x1864d6;
    $(_0x3804bc(0x1e8))[_0x3804bc(0x285)](_0x3804bc(0x24f)) && ($(_0x3804bc(0x1ca))[_0x3804bc(0x26f)](_0x3804bc(0x214)), $(_0x3804bc(0x1e8))[_0x3804bc(0x285)](_0x3804bc(0x362)) ? (x = $(this)['index'](), updateStep()) : $(this)['index']() <= progress && (x = $(this)[_0x3804bc(0x1e5)](), updateStep())), $(_0x3804bc(0x311))['text'](x + 0x1);
}
$('[data-form=\x22custom-progress-indicator\x22]')['on'](_0x1864d6(0x306), clickableIndicator), excludeCount = !$(_0x1864d6(0x33d))[_0x1864d6(0x285)](_0x1864d6(0x26a)), steps[_0x1864d6(0x333)](function(_0x58d927) {
    const _0x1685f9 = _0x1864d6,
        _0xa1d82c = $(this)[_0x1685f9(0x285)](_0x1685f9(0x225));
    console['log'](excludeCount), _0xa1d82c && excludeCount && $(_0x1685f9(0x2c1))['eq'](_0x58d927)[_0x1685f9(0x24c)]();
});
$('[data-form=\x22multistep\x22]')[_0x1864d6(0x285)](_0x1864d6(0x1d0)) && ($(_0x1864d6(0x2e6))['each'](function() {
    const _0x26d7cb = _0x1864d6;
    $(this)[_0x26d7cb(0x1cd)]('<br>Data\x20Go\x20To\x20=\x20', $(this)[_0x26d7cb(0x285)]('go-to'));
}), $(_0x1864d6(0x344))[_0x1864d6(0x333)](function() {
    const _0x1af2f8 = _0x1864d6;
    $(this)[_0x1af2f8(0x1cd)](_0x1af2f8(0x292), $(this)[_0x1af2f8(0x285)](_0x1af2f8(0x1f8)));
}));

function resetFormly() {
    const _0x5bfb80 = _0x1864d6;
    $(_0x5bfb80(0x33d))[_0x5bfb80(0x2ea)](_0x5bfb80(0x2db)), $(_0x5bfb80(0x33d))[_0x5bfb80(0x220)]()[_0x5bfb80(0x29e)](_0x5bfb80(0x2f2))[_0x5bfb80(0x24c)](), x = 0x0, updateStep(), $('[data-form=\x22multistep\x22]')[_0x5bfb80(0x326)](), $('[data-form=\x22submit-btn\x22]')[_0x5bfb80(0x35f)](oldSubmitText), $(_0x5bfb80(0x206))[_0x5bfb80(0x367)](oldSubmitText), $(_0x5bfb80(0x311))[_0x5bfb80(0x35f)](0x1), $(_0x5bfb80(0x33d))[_0x5bfb80(0x29e)](_0x5bfb80(0x1d8))['siblings'](_0x5bfb80(0x2c7))[_0x5bfb80(0x26f)]('w--redirected-checked');
}
$(document)[_0x1864d6(0x1e9)](function(_0xe70d03, _0x30ca8d, _0x4037e4) {
    const _0x2192f7 = _0x1864d6;
    if (_0x4037e4[_0x2192f7(0x268)]['includes'](_0x2192f7(0x31a))) {
        const _0x52da58 = _0x30ca8d['status'] === 0xc8,
            _0x402c10 = _0x2192f7(0x1e0);
        redirectTo && _0x52da58 && (newTab ? window[_0x2192f7(0x32d)](redirectTo, '_blank') : setTimeout(() => {
            const _0x5a449f = _0x2192f7;
            location[_0x5a449f(0x24d)] = redirectTo;
        }, redirectDelay)), _0x52da58 && successCard !== '' && $('[data-success-card=\x22' + successCard + '\x22]')['fadeIn'](), _0x52da58 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x52da58 && ($(_0x2192f7(0x206))[_0x2192f7(0x367)](_0x2192f7(0x1fb)), $(_0x2192f7(0x206))['text'](_0x2192f7(0x1fb)));
    }
}), $('[data-btn=\x22edit\x22]')['on']('click', function() {
    const _0x4c6465 = _0x1864d6;
    var _0x1455d5 = $(this)['parent']()[_0x4c6465(0x29e)]('[data-input-field]')[_0x4c6465(0x285)]('input-field');
    setTimeout(function() {
        const _0x503811 = _0x4c6465;
        $('input[name=\x22' + _0x1455d5 + '\x22]')[_0x503811(0x2dd)]();
    }, 0x64), back = !![], x = $(this)[_0x4c6465(0x285)](_0x4c6465(0x2c9)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(_0x4c6465(0x22d))[_0x4c6465(0x35f)](steps[_0x4c6465(0x22c)])) : $(steps[x])[_0x4c6465(0x285)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x4c6465(0x311))[_0x4c6465(0x35f)](curStep), back = ![];
}), $(_0x1864d6(0x266))['on'](_0x1864d6(0x306), function() {
    const _0xd63510 = _0x1864d6;
    $(_0xd63510(0x33d))[_0xd63510(0x2ea)](_0xd63510(0x2db));
    let _0x566bde = $(this);
    $(this)[_0xd63510(0x35f)](_0xd63510(0x1fb)), setTimeout(function() {
        const _0x3fa2a9 = _0xd63510;
        $(_0x566bde)['text'](oldResetText), $(_0x566bde)[_0x3fa2a9(0x220)](_0x3fa2a9(0x2f2))[_0x3fa2a9(0x24c)](), x = 0x0, updateStep(), $(_0x3fa2a9(0x33d))['show'](), $(_0x3fa2a9(0x206))[_0x3fa2a9(0x35f)](oldSubmitText), $('[data-form=\x22submit-btn\x22]')[_0x3fa2a9(0x367)](oldSubmitText), $(_0x566bde)[_0x3fa2a9(0x367)](oldSubmitText), $(_0x3fa2a9(0x311))[_0x3fa2a9(0x35f)](0x1), $(_0x3fa2a9(0x33d))[_0x3fa2a9(0x29e)](_0x3fa2a9(0x1d8))[_0x3fa2a9(0x212)]('.w-checkbox-input')['removeClass'](_0x3fa2a9(0x245));
    }, resetDelay);
}), $(_0x1864d6(0x319))['on']('keypress', function(_0xb81de3) {
    const _0x245f3d = _0x1864d6;
    if (_0xb81de3[_0x245f3d(0x347)] === 0xd) {
        _0xb81de3['preventDefault'](), _0xb81de3[_0x245f3d(0x279)]();
        if ($(steps[x])[_0x245f3d(0x29e)]('textarea')['is'](_0x245f3d(0x2d6))) $(steps[x])['find']('textarea:focus')[_0x245f3d(0x367)]($(steps[x])['find']('textarea:focus')[_0x245f3d(0x367)]() + '\x0a');
        else $('[data-enter]')[_0x245f3d(0x285)](_0x245f3d(0x356)) && fill && (totalSteps > curStep && $(_0x245f3d(0x1e7))[0x0]['click']());
    }
}), $(_0x1864d6(0x319))[_0x1864d6(0x296)](function(_0x4be5b3) {
    const _0x4845fb = _0x1864d6;
    (_0x4be5b3[_0x4845fb(0x2c4)] || _0x4be5b3[_0x4845fb(0x359)]) && _0x4be5b3[_0x4845fb(0x347)] == 0xd && (x >= steps['length'] - 0x1 && fill ? $(steps[x])[_0x4845fb(0x29e)](_0x4845fb(0x2a8))['click']() : (_0x4be5b3[_0x4845fb(0x2f8)](), _0x4be5b3[_0x4845fb(0x279)]()));
}), $('[data-form=\x22multistep\x22]')[_0x1864d6(0x29e)](':input')['on'](_0x1864d6(0x2d9), function() {
    const _0x51109e = _0x1864d6;
    all_data = all_data[_0x51109e(0x338)](_0x1d06b3 => _0x1d06b3[_0x51109e(0x231)] !== $(this)[_0x51109e(0x28c)](_0x51109e(0x24e))), $(this)[_0x51109e(0x28c)]('type') === _0x51109e(0x244) ? $(this)['is'](_0x51109e(0x255)) ? all_data[_0x51109e(0x2b6)]({ 'field': $(this)[_0x51109e(0x28c)](_0x51109e(0x24e)), 'value': $(this)['siblings'](_0x51109e(0x1ef))[_0x51109e(0x35f)]() }) : $(_0x51109e(0x262) + $(this)['attr'](_0x51109e(0x24e)) + '\x22]')[_0x51109e(0x24c)]() : (all_data[_0x51109e(0x2b6)]({ 'field': $(this)[_0x51109e(0x28c)](_0x51109e(0x24e)), 'value': $(this)[_0x51109e(0x367)]() }), $(this)[_0x51109e(0x367)]() !== '' && resetInputErrorMessage($(this)[_0x51109e(0x28c)](_0x51109e(0x24e)))), all_data[_0x51109e(0x1c5)](function(_0x543860) {
        const _0x2b8f70 = _0x51109e;
        $(_0x2b8f70(0x262) + _0x543860[_0x2b8f70(0x231)] + '\x22]')[_0x2b8f70(0x326)](), $(_0x2b8f70(0x262) + _0x543860[_0x2b8f70(0x231)] + '\x22]')[_0x2b8f70(0x35f)](_0x543860['value']);
    });
}), $(_0x1864d6(0x33d))['find'](_0x1864d6(0x1d3))['on'](_0x1864d6(0x2d9), function() {
    const _0x5e265f = _0x1864d6;
    $(this)[_0x5e265f(0x367)]() !== '' && resetInputErrorMessage($(this)['attr'](_0x5e265f(0x24e))), all_data = all_data[_0x5e265f(0x338)](_0x5eaec8 => _0x5eaec8[_0x5e265f(0x231)] !== $(this)[_0x5e265f(0x28c)](_0x5e265f(0x24e))), all_data[_0x5e265f(0x2b6)]({ 'field': $(this)['attr'](_0x5e265f(0x24e)), 'value': $(this)[_0x5e265f(0x367)]() }), all_data[_0x5e265f(0x1c5)](function(_0x2b91d0) {
        const _0xfbda37 = _0x5e265f;
        $('[data-input-field=\x22' + _0x2b91d0[_0xfbda37(0x231)] + '\x22]')['show'](), $(_0xfbda37(0x262) + _0x2b91d0[_0xfbda37(0x231)] + '\x22]')['text'](_0x2b91d0['value']);
    });
}), $(_0x1864d6(0x33d))[_0x1864d6(0x29e)]('select')['on']('change', function() {
    const _0x456d05 = _0x1864d6;
    $(this)[_0x456d05(0x367)]() !== '' && resetInputErrorMessage($(this)[_0x456d05(0x28c)](_0x456d05(0x24e)));
    var _0x30a451 = $(this)[_0x456d05(0x285)]('ms-field');
    all_data = all_data[_0x456d05(0x338)](_0x2d052a => _0x2d052a[_0x456d05(0x231)] !== $(this)[_0x456d05(0x28c)](_0x456d05(0x24e))), all_data[_0x456d05(0x2b6)]({ 'field': $(this)[_0x456d05(0x28c)](_0x456d05(0x24e)), 'value': _0x30a451 ? $(this)[_0x456d05(0x29e)](_0x456d05(0x355))[_0x456d05(0x35f)]() : $(this)['val']() }), all_data['forEach'](function(_0x3a9e66) {
        const _0x9cbc63 = _0x456d05;
        $(_0x9cbc63(0x262) + _0x3a9e66[_0x9cbc63(0x231)] + '\x22]')[_0x9cbc63(0x326)](), $(_0x9cbc63(0x262) + _0x3a9e66[_0x9cbc63(0x231)] + '\x22]')[_0x9cbc63(0x35f)](_0x3a9e66[_0x9cbc63(0x2ef)]);
    });
}), updateStep(), triggerInputAllData(), $(_0x1864d6(0x2c3))[_0x1864d6(0x333)](function() {
    const _0x1ddfc3 = _0x1864d6,
        _0x2239ae = $(this)[_0x1ddfc3(0x29e)](_0x1ddfc3(0x240)),
        _0x2b529a = [];
    _0x2239ae[_0x1ddfc3(0x333)](function() {
        const _0x33e4b8 = _0x1ddfc3;
        _0x2b529a[_0x33e4b8(0x2b6)]($(this)[_0x33e4b8(0x35f)]()[_0x33e4b8(0x203)]());
    });
    const _0x49e6fc = $(this)['siblings'](_0x1ddfc3(0x25f));
    $[_0x1ddfc3(0x333)](_0x2b529a, function(_0x47269e, _0x1f2c43) {
        const _0x2893a7 = _0x1ddfc3,
            _0x11e3ad = $(_0x2893a7(0x26d))[_0x2893a7(0x367)](_0x1f2c43)[_0x2893a7(0x35f)](_0x1f2c43);
        _0x49e6fc[_0x2893a7(0x1cd)](_0x11e3ad);
    });
});

function cloneRemove() {
    const _0x42fcb5 = _0x1864d6;
    $(_0x42fcb5(0x2fe))[_0x42fcb5(0x333)](function() {
        const _0x19089b = _0x42fcb5;
        $(this)[_0x19089b(0x29e)]('[data-clone]')[_0x19089b(0x22c)] < 0x2 ? $(this)['find'](_0x19089b(0x20d))[_0x19089b(0x24c)]() : $(this)[_0x19089b(0x29e)](_0x19089b(0x20d))['show']();
    });
}

function cloneRemoveInput() {
    const _0x31b4ea = _0x1864d6;
    $(_0x31b4ea(0x209))[_0x31b4ea(0x333)](function() {
        const _0x55bca7 = _0x31b4ea;
        console[_0x55bca7(0x2e0)]($(this)['find'](_0x55bca7(0x1c8))[_0x55bca7(0x22c)]), $(this)[_0x55bca7(0x29e)](_0x55bca7(0x1c8))[_0x55bca7(0x22c)] < 0x2 ? $(this)[_0x55bca7(0x29e)](_0x55bca7(0x1df))['hide']() : $(this)[_0x55bca7(0x29e)](_0x55bca7(0x1df))[_0x55bca7(0x326)]();
    });
}
$(_0x1864d6(0x20d))['on'](_0x1864d6(0x306), function() {
    const _0x349ac8 = _0x1864d6,
        _0x43163d = $(this)[_0x349ac8(0x220)]('[data-clone]')[_0x349ac8(0x22c)] > 0x0 ? $(this)[_0x349ac8(0x220)](_0x349ac8(0x2a9))['index']() : $(this)[_0x349ac8(0x220)](_0x349ac8(0x2e4))[_0x349ac8(0x1e5)](),
        _0x40998d = $(this)['parents']('[data-clone]')[_0x349ac8(0x22c)] > 0x0 ? $(this)[_0x349ac8(0x220)]('[data-clone]')[_0x349ac8(0x285)](_0x349ac8(0x303)) : $(this)['parents'](_0x349ac8(0x2e4))[_0x349ac8(0x285)](_0x349ac8(0x335));
    $(_0x349ac8(0x2cd) + _0x40998d + '\x22]')['eq'](_0x43163d)[_0x349ac8(0x35e)](), $(_0x349ac8(0x287) + _0x40998d + '\x22]')['eq'](_0x43163d)[_0x349ac8(0x35e)](), cloneRemove();
    let _0x2b532c = $(_0x349ac8(0x30a) + _0x40998d + '\x22]')[_0x349ac8(0x285)](_0x349ac8(0x219)),
        _0x26af51 = $(_0x349ac8(0x2cd) + _0x40998d + '\x22]')['length'];
    console['log'](_0x26af51, _0x2b532c), _0x26af51 < _0x2b532c && (console[_0x349ac8(0x2e0)](_0x349ac8(0x326)), $('[data-add-new=\x22' + _0x40998d + '\x22]')['show']()), validation();
}), $(_0x1864d6(0x1df))['on'](_0x1864d6(0x306), function() {
    const _0x13aa00 = _0x1864d6;
    let _0x5e2abb = $(this)[_0x13aa00(0x212)]()[_0x13aa00(0x28c)](_0x13aa00(0x24e)),
        _0x398b9e = $(this)[_0x13aa00(0x220)](_0x13aa00(0x1c8))[_0x13aa00(0x285)]('clone-input');
    $(this)['parent'](_0x13aa00(0x1c8))[_0x13aa00(0x35e)](), $(_0x13aa00(0x262) + _0x5e2abb + '\x22]')['parent'](_0x13aa00(0x272))[_0x13aa00(0x35e)]();
    let _0x3e9082 = $(_0x13aa00(0x284) + _0x398b9e + '\x22]')['data']('add-new-input-limit'),
        _0x1e8d4d = $(_0x13aa00(0x29c) + _0x398b9e + '\x22]')['length'];
    _0x1e8d4d < _0x3e9082 && $(_0x13aa00(0x284) + _0x398b9e + '\x22]')[_0x13aa00(0x326)](), validation();
}), $(_0x1864d6(0x1d9))['on'](_0x1864d6(0x306), function() {
    const _0x1520a2 = _0x1864d6;
    let _0x5b1d7a = $(this)[_0x1520a2(0x285)]('add-new'),
        _0x18b259 = $(this)[_0x1520a2(0x285)](_0x1520a2(0x219));
    var _0x394910 = $('[data-clone=\x22' + _0x5b1d7a + '\x22]')['eq'](0x0)[_0x1520a2(0x303)](!![]),
        _0x22c1e2 = $(_0x1520a2(0x287) + _0x5b1d7a + '\x22]')['eq'](0x0)[_0x1520a2(0x303)](!![]);
    let _0x57f76e = '';
    $(this)['find'](_0x1520a2(0x20d))[_0x1520a2(0x326)](), cloneRemove(), _0x394910[_0x1520a2(0x29e)](_0x1520a2(0x1c8))[_0x1520a2(0x29e)](_0x1520a2(0x2af))[_0x1520a2(0x367)](''), _0x394910[_0x1520a2(0x29e)](_0x1520a2(0x1c8))[_0x1520a2(0x29e)](_0x1520a2(0x27b))[_0x1520a2(0x367)](''), _0x394910[_0x1520a2(0x29e)](_0x1520a2(0x1c8))[_0x1520a2(0x29e)](_0x1520a2(0x1d3))[_0x1520a2(0x367)](''), _0x394910['find'](_0x1520a2(0x1c8))[_0x1520a2(0x2e9)](':first')[_0x1520a2(0x35e)](), _0x394910[_0x1520a2(0x29e)](_0x1520a2(0x1c8))['find'](_0x1520a2(0x35d))[_0x1520a2(0x306)](), _0x22c1e2['find'](_0x1520a2(0x272))[_0x1520a2(0x2e9)](_0x1520a2(0x218))[_0x1520a2(0x35e)](), _0x394910[_0x1520a2(0x29e)](_0x1520a2(0x2af))[_0x1520a2(0x333)](function() {
        const _0x5cc8ef = _0x1520a2;
        if ($(this)['closest'](_0x5cc8ef(0x1c8))['length'] > 0x0) {
            let _0x21a8cd = 0x0;
            const _0x11d23b = $(this)[_0x5cc8ef(0x25d)](_0x5cc8ef(0x1c8))[_0x5cc8ef(0x285)](_0x5cc8ef(0x222));
            $(_0x5cc8ef(0x29c) + _0x11d23b + _0x5cc8ef(0x23a))[_0x5cc8ef(0x333)](function() {
                const _0x4713d3 = _0x5cc8ef,
                    _0x9c5d05 = $(this)[_0x4713d3(0x28c)](_0x4713d3(0x24e));
                if (_0x9c5d05 && _0x9c5d05[_0x4713d3(0x298)](_0x4713d3(0x29a))) { const _0x4e2236 = parseInt(_0x9c5d05[_0x4713d3(0x31e)]('-')[0x1]);!isNaN(_0x4e2236) && _0x4e2236 > _0x21a8cd && (_0x21a8cd = _0x4e2236); }
            }), _0x21a8cd++, _0x57f76e = this[_0x5cc8ef(0x24e)] + '-' + _0x21a8cd;
        } else _0x57f76e = this['name'] + '-' + (parseInt($('[data-clone=\x22' + _0x5b1d7a + '\x22]')[_0x5cc8ef(0x210)]()[_0x5cc8ef(0x1e5)]()) + 0x1);
        $(this)[_0x5cc8ef(0x367)](''), $(this)[_0x5cc8ef(0x28c)](_0x5cc8ef(0x24e), _0x57f76e), $(this)[_0x5cc8ef(0x28c)](_0x5cc8ef(0x2c0), _0x57f76e);
    }), _0x394910[_0x1520a2(0x29e)](_0x1520a2(0x1d3))[_0x1520a2(0x333)](function() {
        const _0x3b7d44 = _0x1520a2;
        if ($(this)[_0x3b7d44(0x25d)](_0x3b7d44(0x1c8))[_0x3b7d44(0x22c)] > 0x0) {
            let _0x2ce6bb = 0x0;
            const _0x4279a3 = $(this)[_0x3b7d44(0x25d)]('[data-clone-input]')[_0x3b7d44(0x285)](_0x3b7d44(0x222));
            $(_0x3b7d44(0x29c) + _0x4279a3 + _0x3b7d44(0x2df))['each'](function() {
                const _0x3ad785 = _0x3b7d44,
                    _0x3066cf = $(this)[_0x3ad785(0x28c)](_0x3ad785(0x24e));
                if (_0x3066cf && _0x3066cf['startsWith'](_0x3ad785(0x29a))) { const _0x3c1a05 = parseInt(_0x3066cf['split']('-')[0x1]);!isNaN(_0x3c1a05) && _0x3c1a05 > _0x2ce6bb && (_0x2ce6bb = _0x3c1a05); }
            }), _0x2ce6bb++, _0x57f76e = this[_0x3b7d44(0x24e)] + '-' + _0x2ce6bb;
        } else _0x57f76e = this[_0x3b7d44(0x24e)] + '-' + (parseInt($(_0x3b7d44(0x2cd) + _0x5b1d7a + '\x22]')[_0x3b7d44(0x210)]()[_0x3b7d44(0x1e5)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x3b7d44(0x28c)]('name', _0x57f76e), $(this)[_0x3b7d44(0x28c)](_0x3b7d44(0x2c0), _0x57f76e);
    }), _0x394910[_0x1520a2(0x29e)](_0x1520a2(0x27b))['each'](function() {
        const _0x5ca572 = _0x1520a2;
        if ($(this)[_0x5ca572(0x25d)]('[data-clone-input]')[_0x5ca572(0x22c)] > 0x0) {
            let _0x3171f8 = 0x0;
            const _0x514b6b = $(this)[_0x5ca572(0x25d)](_0x5ca572(0x1c8))[_0x5ca572(0x285)](_0x5ca572(0x222));
            $('[data-clone-input=\x22' + _0x514b6b + _0x5ca572(0x1ea))[_0x5ca572(0x333)](function() {
                const _0x36a035 = _0x5ca572,
                    _0x26d52a = $(this)[_0x36a035(0x28c)](_0x36a035(0x24e));
                if (_0x26d52a && _0x26d52a['startsWith'](_0x36a035(0x29a))) { const _0x18d2d5 = parseInt(_0x26d52a[_0x36a035(0x31e)]('-')[0x1]);!isNaN(_0x18d2d5) && _0x18d2d5 > _0x3171f8 && (_0x3171f8 = _0x18d2d5); }
            }), _0x3171f8++, _0x57f76e = this['name'] + '-' + _0x3171f8;
        } else _0x57f76e = this[_0x5ca572(0x24e)] + '-' + (parseInt($(_0x5ca572(0x2cd) + _0x5b1d7a + '\x22]')[_0x5ca572(0x210)]()[_0x5ca572(0x1e5)]()) + 0x1);
        $(this)[_0x5ca572(0x367)](''), $(this)['attr'](_0x5ca572(0x24e), _0x57f76e), $(this)[_0x5ca572(0x28c)]('data-name', _0x57f76e);
    }), _0x22c1e2[_0x1520a2(0x29e)](_0x1520a2(0x323))['each'](function() {
        const _0x1f245f = _0x1520a2;
        if ($(this)[_0x1f245f(0x285)](_0x1f245f(0x232))) {
            let _0x53075c = 0x0;
            const _0x112f5a = $(this)[_0x1f245f(0x285)](_0x1f245f(0x232))['split']('-')[0x0];
            $(_0x1f245f(0x287) + _0x5b1d7a + _0x1f245f(0x358) + _0x112f5a + '\x22]')[_0x1f245f(0x333)](function() {
                const _0x44e550 = _0x1f245f,
                    _0x2ba189 = $(this)[_0x44e550(0x28c)]('data-input-field'),
                    _0x153544 = parseInt(_0x2ba189['split']('-')[0x1]);
                !isNaN(_0x153544) && _0x153544 > _0x53075c && (_0x53075c = _0x153544);
            }), _0x53075c++;
            const _0x5e5f6d = _0x112f5a + '-' + _0x53075c;
            $(this)[_0x1f245f(0x28c)](_0x1f245f(0x2eb), _0x5e5f6d);
        }
    }), $(_0x1520a2(0x2cf) + _0x5b1d7a + '\x22]')['append'](_0x394910), $(_0x1520a2(0x1ed) + _0x5b1d7a + '\x22]')['append'](_0x22c1e2), $(_0x1520a2(0x20a) + _0x5b1d7a + '\x22]')[_0x1520a2(0x333)](function() {
        const _0x340b57 = _0x1520a2;
        $(this)[_0x340b57(0x35f)]($(this)[_0x340b57(0x220)](_0x340b57(0x2cd) + _0x5b1d7a + '\x22]')[_0x340b57(0x1e5)]() + 0x1);
    }), $('[data-display-index=\x22' + _0x5b1d7a + '\x22]')[_0x1520a2(0x333)](function() {
        const _0x34a774 = _0x1520a2;
        $(this)[_0x34a774(0x35f)]($(this)[_0x34a774(0x220)]('[data-display=\x22' + _0x5b1d7a + '\x22]')[_0x34a774(0x1e5)]() + 0x1);
    });
    let _0x1e28c2 = $(_0x1520a2(0x2cf) + _0x5b1d7a + _0x1520a2(0x337) + _0x5b1d7a + '\x22]')['length'];
    if (_0x1e28c2 >= _0x18b259) { $(this)[_0x1520a2(0x24c)](); return; }
    $(this)[_0x1520a2(0x326)](), validation();
}), $(_0x1864d6(0x1f2))['on'](_0x1864d6(0x306), function() {
    const _0x3c2a67 = _0x1864d6,
        _0x1b0bc4 = $(this)[_0x3c2a67(0x220)](_0x3c2a67(0x2a9))[_0x3c2a67(0x1e5)]();
    let _0x14698e = $(this)[_0x3c2a67(0x285)](_0x3c2a67(0x25a));
    var _0xf53e28 = $(_0x3c2a67(0x29c) + _0x14698e + '\x22]')['eq'](0x0)[_0x3c2a67(0x303)](!![]),
        _0x28d04b = $(_0x3c2a67(0x2f7) + _0x14698e + '\x22]')['eq'](0x0)[_0x3c2a67(0x303)](!![]);
    let _0x26eda3 = $(this)['data'](_0x3c2a67(0x31d)),
        _0x4bfa7b = 0x0;
    $(_0x3c2a67(0x29c) + _0x14698e + '\x22]\x20input')[_0x3c2a67(0x333)](function() {
        const _0x5c6c79 = _0x3c2a67,
            _0x8fe3b9 = $(this)[_0x5c6c79(0x28c)](_0x5c6c79(0x24e));
        if (_0x8fe3b9) { const _0x46d6f7 = parseInt(_0x8fe3b9[_0x5c6c79(0x31e)]('-')[0x1]);!isNaN(_0x46d6f7) && _0x46d6f7 > _0x4bfa7b && (_0x4bfa7b = _0x46d6f7); }
    }), $(_0x3c2a67(0x29c) + _0x14698e + _0x3c2a67(0x1ea))[_0x3c2a67(0x333)](function() {
        const _0x114e21 = _0x3c2a67,
            _0x1585b8 = $(this)[_0x114e21(0x28c)](_0x114e21(0x24e));
        if (_0x1585b8) { const _0xada994 = parseInt(_0x1585b8[_0x114e21(0x31e)]('-')[0x1]);!isNaN(_0xada994) && _0xada994 > _0x4bfa7b && (_0x4bfa7b = _0xada994); }
    }), $(_0x3c2a67(0x29c) + _0x14698e + _0x3c2a67(0x2df))[_0x3c2a67(0x333)](function() {
        const _0x434f8b = _0x3c2a67,
            _0x409fa2 = $(this)['attr'](_0x434f8b(0x24e));
        if (_0x409fa2) { const _0x4168d9 = parseInt(_0x409fa2[_0x434f8b(0x31e)]('-')[0x1]);!isNaN(_0x4168d9) && _0x4168d9 > _0x4bfa7b && (_0x4bfa7b = _0x4168d9); }
    }), _0x4bfa7b++, _0xf53e28['find'](_0x3c2a67(0x2af))['each'](function() {
        const _0x3cc677 = _0x3c2a67,
            _0x2cab79 = $(this)[_0x3cc677(0x28c)]('name');
        let _0x3747d6 = _0x2cab79 + '-' + _0x4bfa7b;
        $(this)[_0x3cc677(0x367)](''), $(this)[_0x3cc677(0x28c)]('name', _0x3747d6), $(this)[_0x3cc677(0x28c)]('data-name', _0x3747d6);
    }), _0xf53e28[_0x3c2a67(0x29e)](_0x3c2a67(0x27b))['each'](function() {
        const _0x5a3d6e = _0x3c2a67,
            _0x3acfc5 = $(this)[_0x5a3d6e(0x28c)](_0x5a3d6e(0x24e));
        let _0xfc251a = _0x3acfc5 + '-' + _0x4bfa7b;
        $(this)[_0x5a3d6e(0x367)](''), $(this)[_0x5a3d6e(0x28c)](_0x5a3d6e(0x24e), _0xfc251a), $(this)[_0x5a3d6e(0x28c)](_0x5a3d6e(0x2c0), _0xfc251a);
    }), _0xf53e28['find'](_0x3c2a67(0x1d3))[_0x3c2a67(0x333)](function() {
        const _0x29b644 = _0x3c2a67,
            _0x776be2 = $(this)[_0x29b644(0x28c)](_0x29b644(0x24e));
        let _0x8f1998 = _0x776be2 + '-' + _0x4bfa7b;
        $(this)[_0x29b644(0x367)](''), $(this)[_0x29b644(0x28c)](_0x29b644(0x24e), _0x8f1998), $(this)[_0x29b644(0x28c)](_0x29b644(0x2c0), _0x8f1998);
    }), _0x28d04b[_0x3c2a67(0x29e)]('[data-input-field]')['each'](function() {
        const _0x2100b0 = _0x3c2a67;
        $(this)[_0x2100b0(0x28c)](_0x2100b0(0x2eb), _0x2100b0(0x29a) + _0x4bfa7b);
    }), $(this)[_0x3c2a67(0x212)](_0x3c2a67(0x2c8) + _0x14698e + '\x22]')['append'](_0xf53e28), $('[data-display]')['eq'](_0x1b0bc4)[_0x3c2a67(0x29e)](_0x3c2a67(0x243) + _0x14698e + '\x22]')[_0x3c2a67(0x1cd)](_0x28d04b), $(_0x3c2a67(0x236) + _0x14698e + '\x22]')['each'](function() {
        const _0x41f561 = _0x3c2a67;
        $(this)[_0x41f561(0x35f)]($(this)[_0x41f561(0x220)](_0x41f561(0x29c) + _0x14698e + '\x22]')['index']() + 0x1);
    }), $('[data-display-input-index=\x22' + _0x14698e + '\x22]')['each'](function() {
        const _0x172c2c = _0x3c2a67;
        $(this)['text']($(this)[_0x172c2c(0x220)](_0x172c2c(0x2f7) + _0x14698e + '\x22]')[_0x172c2c(0x1e5)]() + 0x1);
    });
    let _0x2f65da = $(_0x3c2a67(0x2c8) + _0x14698e + _0x3c2a67(0x2ee) + _0x14698e + '\x22]')[_0x3c2a67(0x22c)];
    if (_0x2f65da >= _0x26eda3) { $(this)[_0x3c2a67(0x24c)](); return; }
    $(this)[_0x3c2a67(0x326)](), cloneRemoveInput(), validation();
}), $(_0x1864d6(0x33c))['on']('click', function() {
    const _0x193cbb = _0x1864d6,
        _0x23000a = $(this)[_0x193cbb(0x285)](_0x193cbb(0x2ec));
    $('input[name=\x22' + _0x23000a + '\x22]')['val'](''), validation();
});

function andLogic() {
    const _0xaf40a = _0x1864d6;
    conditionalResult && (steps['eq'](x)[_0xaf40a(0x29e)](_0xaf40a(0x33a))[_0xaf40a(0x24c)](), steps['eq'](x)[_0xaf40a(0x29e)](_0xaf40a(0x33a))[_0xaf40a(0x333)](function() {
        const _0x2037e7 = _0xaf40a;

        function _0x265b87(_0x5b17c2) {
            const _0xe95513 = _0x33ab,
                _0x234411 = _0x5b17c2[_0xe95513(0x31e)]('&'),
                _0x505d48 = [];
            return _0x234411[_0xe95513(0x1c5)](_0x236b07 => {
                const _0x358b64 = _0xe95513,
                    [_0x4f7024, _0x6263a1] = _0x236b07[_0x358b64(0x31e)]('=');
                _0x505d48['push']({ 'field': _0x4f7024, 'value': _0x6263a1 });
            }), _0x505d48;
        }
        const _0x4134dd = $(this)[_0x2037e7(0x28c)]('data-show-if'),
            _0x27e6f4 = _0x265b87(_0x4134dd);

        function _0x499b97(_0x322a98, _0x168f43) { return _0x168f43['some']((_0xc3782d, _0x356671) => { const _0x1d37c6 = _0x33ab; if (_0x322a98[0x0] && _0xc3782d[_0x1d37c6(0x231)] === _0x322a98[0x0][_0x1d37c6(0x231)]) return _0x322a98[_0x1d37c6(0x35b)]((_0x5f50cc, _0x2394d8) => _0x168f43[_0x356671 + _0x2394d8] && _0x168f43[_0x356671 + _0x2394d8]['field'] === _0x5f50cc[_0x1d37c6(0x231)] && _0x168f43[_0x356671 + _0x2394d8][_0x1d37c6(0x2ef)] === _0x5f50cc[_0x1d37c6(0x2ef)]); return ![]; }); }
        const _0x38b5cd = _0x499b97(_0x27e6f4, all_data);
        _0x38b5cd ? $(this)[_0x2037e7(0x326)]() : $(this)[_0x2037e7(0x24c)]();
    }));
}
progressiveTarget['addClass'](_0x1864d6(0x24c)), progressiveInput['on']('input', function() {
    const _0x1759a2 = _0x1864d6,
        _0x2f07ce = $(this)[_0x1759a2(0x285)](_0x1759a2(0x36b)),
        _0x24ffa8 = $(this)[_0x1759a2(0x367)](),
        _0x502d32 = form['find']('[data-input-target=\x22' + _0x2f07ce + '\x22]')[_0x1759a2(0x285)](_0x1759a2(0x2b0));
    let _0x3bd8b6 = form['find']('[data-input-target=\x22' + _0x2f07ce + _0x1759a2(0x321))['filter'](function() { const _0x2f0df2 = _0x1759a2; return $(this)['data']('input-reveal-value')[_0x2f0df2(0x273)]() === _0x24ffa8[_0x2f0df2(0x273)](); }),
        _0x477206 = form[_0x1759a2(0x29e)](_0x1759a2(0x329) + _0x2f07ce + _0x1759a2(0x352));
    form[_0x1759a2(0x29e)](_0x1759a2(0x329) + _0x2f07ce + '\x22]')[_0x1759a2(0x2e3)]('f-hide'), form[_0x1759a2(0x29e)](_0x1759a2(0x329) + _0x2f07ce + '\x22]')['removeClass'](_0x1759a2(0x31b));
    _0x24ffa8 !== '' && (_0x502d32[_0x1759a2(0x273)]() === '*' && _0x24ffa8 !== '' ? (_0x477206[_0x1759a2(0x26f)](_0x1759a2(0x30e)), _0x477206['addClass'](_0x1759a2(0x31b))) : (_0x3bd8b6[_0x1759a2(0x26f)](_0x1759a2(0x30e)), _0x3bd8b6[_0x1759a2(0x2e3)](_0x1759a2(0x31b))));

    function _0x380938(_0x3a1ddf) {
        const _0x2807dd = _0x1759a2;
        _0x3a1ddf && (form[_0x2807dd(0x29e)](_0x2807dd(0x32c) + _0x3a1ddf + '\x22]')['val']() !== '' && form[_0x2807dd(0x29e)](_0x2807dd(0x32c) + _0x3a1ddf + '\x22]')[_0x2807dd(0x2ea)](_0x2807dd(0x2af)));
    }
    let _0x23ebf0 = form[_0x1759a2(0x29e)](_0x1759a2(0x329) + _0x2f07ce + '\x22]')['find'](_0x1759a2(0x235))[_0x1759a2(0x285)]('input-reveal');
    _0x380938(_0x23ebf0), form[_0x1759a2(0x29e)]('[data-input-reveal]:not(:visible)')[_0x1759a2(0x333)](function() {
        const _0x3699d5 = _0x1759a2,
            _0x25ad38 = $(this)[_0x3699d5(0x285)](_0x3699d5(0x36b));
        form['find']('[data-input-target=\x22' + _0x25ad38 + '\x22]')[_0x3699d5(0x26f)](_0x3699d5(0x31b)), form[_0x3699d5(0x29e)]('[data-input-target=\x22' + _0x25ad38 + '\x22]')[_0x3699d5(0x2e3)](_0x3699d5(0x30e));
    });
});

function addClickClass() {
    const _0x583d76 = _0x1864d6,
        _0x449cde = $(this)[_0x583d76(0x285)]('click-addclass'),
        _0x163a8b = $(this)[_0x583d76(0x28c)](_0x583d76(0x24e));
    $(_0x583d76(0x30c) + _0x163a8b + '\x22]')['parent']()[_0x583d76(0x26f)](_0x449cde), $(this)['is'](':checked') && $(this)[_0x583d76(0x307)]()[_0x583d76(0x2e3)](_0x449cde);
}
$('[data-click-addclass]')['on'](_0x1864d6(0x2d9), addClickClass);

function updateCounter(_0x7c51e9) {
    const _0x1ef177 = _0x1864d6;
    var _0x6fae7a = new Date(),
        _0x5acd57 = _0x6fae7a[_0x1ef177(0x316)](),
        _0x8a9b05 = btoa(_0x1ef177(0x27e)),
        _0x24ce15 = btoa(_0x5acd57[_0x1ef177(0x23b)]()),
        _0x3b54f1 = getCookie(_0x8a9b05);
    !_0x3b54f1 || _0x3b54f1 !== _0x24ce15 ? $['post'](_0x1ef177(0x2f9), function() {
        const _0xdf35d = _0x1ef177;
        console[_0xdf35d(0x2e0)]('Counter\x20updated\x20successfully.'), document[_0xdf35d(0x233)] = _0x8a9b05 + '=' + _0x24ce15;
    })[_0x1ef177(0x2be)](function(_0x261483, _0x5125b6, _0x5a2721) {
        const _0x2e34a5 = _0x1ef177;
        console[_0x2e34a5(0x30f)](_0x2e34a5(0x1f7), _0x5a2721);
    }) : console[_0x1ef177(0x2e0)](_0x1ef177(0x21b));
}

function getCookie(_0x27a96c) { const _0x49a9fd = _0x1864d6; var _0x1bcb30 = null; if (document[_0x49a9fd(0x233)] && document[_0x49a9fd(0x233)] !== '') { var _0x4d3820 = document[_0x49a9fd(0x233)][_0x49a9fd(0x31e)](';'); for (var _0x2ce31f = 0x0; _0x2ce31f < _0x4d3820['length']; _0x2ce31f++) { var _0x510feb = _0x4d3820[_0x2ce31f][_0x49a9fd(0x203)](); if (_0x510feb['substring'](0x0, _0x27a96c[_0x49a9fd(0x22c)] + 0x1) === _0x27a96c + '=') { _0x1bcb30 = decodeURIComponent(_0x510feb[_0x49a9fd(0x27d)](_0x27a96c[_0x49a9fd(0x22c)] + 0x1)); break; } } } return _0x1bcb30; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x1864d6(0x2f4)]['search']),
    formlySupportParam = formlyUrlParams[_0x1864d6(0x350)]('formly-support'),
    showButton = formlySupportParam === 'true',
    passIcon = _0x1864d6(0x2a1),
    failIcon = _0x1864d6(0x24a);
let isScriptLoaded = !![],
    scriptLocation = _0x1864d6(0x32a),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x1864d6(0x24b) : 'Basic\x20(No\x20Formly\x20Logic)',
    resultStatus = _0x1864d6(0x1da),
    scriptSrcAdded = '';

function isElementPresent(_0x1211b1, _0x478674) { return document['querySelector']('[' + _0x478674 + '=\x22' + _0x1211b1 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x1864d6(0x349), _0x1864d6(0x353));
const multistepForm = document[_0x1864d6(0x239)](_0x1864d6(0x31f)),
    formStepLength = multistepForm['querySelectorAll']('[data-form=\x22step\x22]')['length'];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x1864d6(0x239)](_0x1864d6(0x33d)),
    nextBtnExist = multistepContainer['querySelector'](_0x1864d6(0x1e7)),
    backBtnExist = multistepContainer['querySelector']('[data-form=\x22back-btn\x22]'),
    submitBtnExist = multistepContainer[_0x1864d6(0x239)](_0x1864d6(0x206));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x1864d6(0x342)]['toLowerCase']() === _0x1864d6(0x2af), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x1864d6(0x342)]['toLowerCase']() === 'input' && submitBtnExist['type'][_0x1864d6(0x273)]() === _0x1864d6(0x366), isBackBtnOnSubmit = backBtnExist && backBtnExist['tagName'][_0x1864d6(0x273)]() === 'input';
const checkPowerup = _0x2f7607 => document[_0x1864d6(0x239)](_0x2f7607) !== null,
    progressBarAttr = checkPowerup(_0x1864d6(0x312)),
    progressIndicatorAttr = checkPowerup(_0x1864d6(0x1ca)),
    customProgressAttr = checkPowerup(_0x1864d6(0x1ca)),
    cardDivAttr = checkPowerup('[data-card=\x22true\x22]'),
    currentStepAttr = checkPowerup('[data-text=\x22current-step\x22]'),
    totalStepAttr = checkPowerup(_0x1864d6(0x22d)),
    enterAttr = checkPowerup(_0x1864d6(0x20e)),
    submitAttr = checkPowerup(_0x1864d6(0x35a)),
    radioSkipAttr = checkPowerup(_0x1864d6(0x270)),
    customCheckboxAttr = checkPowerup(_0x1864d6(0x1dc)),
    recapatchaAttr = checkPowerup('[data-callback=\x22recaptcha\x22]'),
    dataAnswerOnFirstStep = steps['eq'](0x0)['find'](_0x1864d6(0x344))[_0x1864d6(0x285)]('answer') === '' || !steps['eq'](0x0)[_0x1864d6(0x29e)](_0x1864d6(0x344))[_0x1864d6(0x285)](_0x1864d6(0x1f8));
let dataGoToDataAnswerOnFormStep = '',
    dataAnswerAndDataGoToPairs = '',
    dataAnswerIsOnDataCard = '';
steps['each'](_0x2f4b38 => {
    const _0x3738c3 = _0x1864d6,
        _0x44a9e1 = steps['eq'](_0x2f4b38);
    _0x44a9e1[_0x3738c3(0x285)](_0x3738c3(0x1f8)) && _0x44a9e1[_0x3738c3(0x285)](_0x3738c3(0x34b)) && (dataGoToDataAnswerOnFormStep += _0x3738c3(0x1eb) + (_0x2f4b38 + 0x1) + _0x3738c3(0x234));
    const _0x186561 = _0x44a9e1[_0x3738c3(0x29e)]('[data-answer]');
    _0x186561[_0x3738c3(0x22c)] && (dataAnswerAndDataGoToPairs += _0x3738c3(0x21a) + (_0x2f4b38 + 0x1) + _0x3738c3(0x234), _0x186561[_0x3738c3(0x333)]((_0xedadb5, _0x228f30) => {
        const _0x31bda2 = _0x3738c3,
            _0x235d89 = $(_0x228f30);
        dataAnswerAndDataGoToPairs += _0x31bda2(0x2b1) + _0x235d89[_0x31bda2(0x285)](_0x31bda2(0x1f8)) + '\x22', _0x235d89[_0x31bda2(0x285)]('go-to') && (dataAnswerAndDataGoToPairs += _0x31bda2(0x281) + _0x235d89[_0x31bda2(0x285)](_0x31bda2(0x34b)) + '\x22'), dataAnswerAndDataGoToPairs += _0x31bda2(0x234);
    })), steps['eq'](_0x2f4b38)[_0x3738c3(0x285)]('card') && (steps['eq'](_0x2f4b38)[_0x3738c3(0x285)](_0x3738c3(0x1f8)) || steps['eq'](_0x2f4b38)[_0x3738c3(0x29e)](_0x3738c3(0x344))[_0x3738c3(0x285)](_0x3738c3(0x1f8))) && (dataAnswerIsOnDataCard += '<div>Step\x20' + (_0x2f4b38 + 0x1) + '</div>');
});
(!isScriptLoaded || scriptLocation !== _0x1864d6(0x32a) || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x1864d6(0x1c7));

function isScriptUrlMatch(_0x40ebe6, _0x39bd81) { for (var _0x52fa88 = 0x0; _0x52fa88 < _0x39bd81['length']; _0x52fa88++) { if (_0x40ebe6['includes'](_0x39bd81[_0x52fa88])) return !![]; } return ![]; }
var keywordsToCheck = [_0x1864d6(0x1ee), _0x1864d6(0x22b), 'https://slater.app/4908/8862.js'],
    scripts = document['getElementsByTagName'](_0x1864d6(0x32e)),
    matchedScripts = [];

function _0x33ab(_0x51696e, _0x17537a) { const _0x1d403a = _0x1d40(); return _0x33ab = function(_0x33ab49, _0xb9fc5f) { _0x33ab49 = _0x33ab49 - 0x1c3; let _0x2e5494 = _0x1d403a[_0x33ab49]; return _0x2e5494; }, _0x33ab(_0x51696e, _0x17537a); }
for (var i = 0x0; i < scripts['length']; i++) {
    var scriptSrcs = scripts[i][_0x1864d6(0x327)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts['push'](scriptSrcs);
}
if (matchedScripts[_0x1864d6(0x22c)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x1864d6(0x239)](_0x1864d6(0x2ac) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script['parentNode']['tagName'] === 'BODY' ? _0x1864d6(0x28a) : _0x1864d6(0x204));
} else scriptSrcAdded = _0x1864d6(0x26b) + failIcon;
const newElement = document[_0x1864d6(0x28d)]('div'),
    newStyle = document[_0x1864d6(0x28d)](_0x1864d6(0x208));
newStyle[_0x1864d6(0x31c)] = _0x1864d6(0x2b5), document[_0x1864d6(0x32a)][_0x1864d6(0x238)](newStyle);
showButton && document[_0x1864d6(0x319)][_0x1864d6(0x238)](newElement);
newElement[_0x1864d6(0x31c)] = _0x1864d6(0x1e3) + (!logicExtra ? passIcon : failIcon) + _0x1864d6(0x226) + (quiz ? passIcon : failIcon) + _0x1864d6(0x322) + (weightedSelection ? passIcon : failIcon) + _0x1864d6(0x2a2) + scriptSrcAdded + _0x1864d6(0x1cb) + (scriptLocation === _0x1864d6(0x32a) ? _0x1864d6(0x237) : _0x1864d6(0x305)) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (formStepLength ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (formStepLength > 0x0 ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x20' + formStepLength + _0x1864d6(0x2ed) + (nextBtnExist ? passIcon : failIcon) + _0x1864d6(0x2f6) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x1864d6(0x33b) + (backBtnExist ? passIcon : failIcon) + _0x1864d6(0x2e8) + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x1864d6(0x328) + (submitBtnExist ? passIcon : failIcon) + _0x1864d6(0x331) + (isSubmitBtnOnSubmit ? failIcon : passIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (progressBarAttr && progressIndicatorAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Automatic\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (customProgressAttr ? _0x1864d6(0x308) + passIcon + _0x1864d6(0x1d2) : '') + _0x1864d6(0x2e1) + (cardDivAttr ? _0x1864d6(0x1cf) + passIcon + _0x1864d6(0x1d2) : '') + _0x1864d6(0x2e1) + (currentStepAttr ? _0x1864d6(0x201) + passIcon + _0x1864d6(0x1d2) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (totalStepAttr ? _0x1864d6(0x29b) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x1864d6(0x2e1) + (enterAttr ? _0x1864d6(0x251) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (submitAttr ? _0x1864d6(0x360) + passIcon + _0x1864d6(0x1d2) : '') + _0x1864d6(0x2e1) + (radioSkipAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Radio\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x1864d6(0x1d2) : '') + _0x1864d6(0x2e1) + (customCheckboxAttr ? _0x1864d6(0x263) + passIcon + _0x1864d6(0x1d2) : '') + _0x1864d6(0x2e1) + (recapatchaAttr ? _0x1864d6(0x2ae) + passIcon + _0x1864d6(0x1d2) : '') + _0x1864d6(0x348) + (logicExtra ? _0x1864d6(0x265) + (dataAnswerOnFirstStep ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (dataGoToDataAnswerOnFormStep !== '' ? _0x1864d6(0x1f6) + dataGoToDataAnswerOnFormStep + _0x1864d6(0x202) : '') + _0x1864d6(0x21e) + dataAnswerAndDataGoToPairs + _0x1864d6(0x2a7) + (dataAnswerIsOnDataCard !== '' ? _0x1864d6(0x332) + dataAnswerIsOnDataCard + _0x1864d6(0x202) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x1864d6(0x2cc);

function openNav() {
    const _0x44d27e = _0x1864d6;
    console[_0x44d27e(0x2e0)](_0x44d27e(0x2ba)), document[_0x44d27e(0x1f3)](_0x44d27e(0x365))['style'][_0x44d27e(0x2ff)] = _0x44d27e(0x34c);
}

function closeNav() {
    const _0x3d5508 = _0x1864d6;
    document[_0x3d5508(0x1f3)](_0x3d5508(0x365))[_0x3d5508(0x208)]['transform'] = _0x3d5508(0x2bb);
}