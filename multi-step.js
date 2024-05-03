// 3rd May 2024
// Bug fix
// 1. Fixed issue with form validation not working on submi button click

const _0x2813a2 = _0x34af;
(function(_0x396b57, _0x57e1a5) {
    const _0x1024ae = _0x34af,
        _0x246bb3 = _0x396b57();
    while (!![]) {
        try {
            const _0x2f9930 = -parseInt(_0x1024ae(0x370)) / 0x1 * (-parseInt(_0x1024ae(0x2bd)) / 0x2) + -parseInt(_0x1024ae(0x2a1)) / 0x3 + -parseInt(_0x1024ae(0x341)) / 0x4 + parseInt(_0x1024ae(0x303)) / 0x5 + parseInt(_0x1024ae(0x22a)) / 0x6 * (-parseInt(_0x1024ae(0x217)) / 0x7) + parseInt(_0x1024ae(0x2ce)) / 0x8 * (parseInt(_0x1024ae(0x368)) / 0x9) + -parseInt(_0x1024ae(0x34d)) / 0xa;
            if (_0x2f9930 === _0x57e1a5) break;
            else _0x246bb3['push'](_0x246bb3['shift']());
        } catch (_0x512534) { _0x246bb3['push'](_0x246bb3['shift']()); }
    }
}(_0x59c7, 0x4d6f2));
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
let form = $(_0x2813a2(0x2fa)),
    steps = $(_0x2813a2(0x315)),
    progressbarClone = $(_0x2813a2(0x24c))['clone'](),
    progressbar, weightedSelection = $(_0x2813a2(0x228))[_0x2813a2(0x29e)](_0x2813a2(0x27b)),
    weightedSelectionRange = $(_0x2813a2(0x2fe))[_0x2813a2(0x29e)]('weighted-selection-range'),
    selectMultiple = $(_0x2813a2(0x241))[_0x2813a2(0x29e)](_0x2813a2(0x20c)),
    customError = $(_0x2813a2(0x235))[_0x2813a2(0x29e)](_0x2813a2(0x238)),
    reinitIX = $('[data-reinit]')['data']('reinit'),
    memory = $(_0x2813a2(0x26a))[_0x2813a2(0x29e)]('memory'),
    quiz = $(_0x2813a2(0x281))[_0x2813a2(0x29e)](_0x2813a2(0x253));
const urlFormly = new URL(window[_0x2813a2(0x271)][_0x2813a2(0x260)]);
let _params = $(_0x2813a2(0x2e2))['data'](_0x2813a2(0x22f)),
    logicExtra = $(_0x2813a2(0x2fa))[_0x2813a2(0x29e)](_0x2813a2(0x329)),
    oldSubmitText = $(_0x2813a2(0x308))['val'](),
    oldResetText = $(_0x2813a2(0x2c9))['text'](),
    formReset = $(_0x2813a2(0x2fa))['data'](_0x2813a2(0x20e)),
    resetDelay = $(_0x2813a2(0x2c2))[_0x2813a2(0x29e)]('reset-delay') ? $(_0x2813a2(0x2c2))[_0x2813a2(0x29e)]('reset-delay') : 0x7d0,
    redirectDelay = $(_0x2813a2(0x2b1))[_0x2813a2(0x29e)](_0x2813a2(0x31b)) ? $(_0x2813a2(0x2b1))[_0x2813a2(0x29e)](_0x2813a2(0x31b)) : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')[_0x2813a2(0x29e)](_0x2813a2(0x25c)),
    scrollToTop = $(_0x2813a2(0x2fa))[_0x2813a2(0x29e)](_0x2813a2(0x23c)),
    trackLastStep = $(_0x2813a2(0x26f))[_0x2813a2(0x29e)](_0x2813a2(0x22c)),
    conditionalResult = $(_0x2813a2(0x29a))[_0x2813a2(0x29e)]('conditional-result') === _0x2813a2(0x216),
    scrollTopOffset = parseInt($(_0x2813a2(0x2fa))[_0x2813a2(0x29e)](_0x2813a2(0x361)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x2813a2(0x336)](localStorage['getItem']('filledInput')), formlyLastStep = JSON[_0x2813a2(0x336)](localStorage[_0x2813a2(0x2ee)]('formlyLastStep')), formlyLastStepAnswer = JSON['parse'](localStorage[_0x2813a2(0x2ee)](_0x2813a2(0x24b)));
let paramUrl = $(_0x2813a2(0x2fa))['data'](_0x2813a2(0x299));
const progressiveTarget = $(_0x2813a2(0x2fa))['find'](_0x2813a2(0x225)),
    progressiveInput = $('[data-form=\x22multistep\x22]')[_0x2813a2(0x2f0)](_0x2813a2(0x283)),
    multiSelections = $(_0x2813a2(0x2fa))[_0x2813a2(0x29e)]('multiple-results');
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$('[data-clone]')[_0x2813a2(0x233)](function() {
    const _0x554f91 = _0x2813a2;
    ogCloneArr[_0x554f91(0x2f4)]({ 'name': $(this)['data'](_0x554f91(0x296)), 'element': $(this)[_0x554f91(0x296)](!![]), 'display': $(_0x554f91(0x2a0) + $(this)['data'](_0x554f91(0x296)) + '\x22]')['eq'](0x0)[_0x554f91(0x296)](!![]) });
});
const setPageLoadTime = () => {
    const _0x42b945 = _0x2813a2;
    localStorage['setItem']('pageLoadTime', Date[_0x42b945(0x2c0)]()['toString']());
};
setPageLoadTime();
$(_0x2813a2(0x371))['length'] > 0x0 && (notRobot = ![]);

function recaptcha(_0x210ba1) { notRobot = !![]; }($(steps[x])[_0x2813a2(0x29e)](_0x2813a2(0x1fd)) || $(steps[x])[_0x2813a2(0x2f0)](_0x2813a2(0x2cb))['data'](_0x2813a2(0x1fd))) && (next = !![]);
$(_0x2813a2(0x369))[_0x2813a2(0x333)] > 0x0 && (countCard = $(_0x2813a2(0x369))[_0x2813a2(0x29e)](_0x2813a2(0x2d9)));
$(_0x2813a2(0x349))[_0x2813a2(0x2e4)](), $(progressbarClone)[_0x2813a2(0x25f)](_0x2813a2(0x236)), $(_0x2813a2(0x285))[_0x2813a2(0x36b)]()[_0x2813a2(0x343)](), $(_0x2813a2(0x308))[_0x2813a2(0x2e4)](), $(_0x2813a2(0x268))['hide'](), steps[_0x2813a2(0x233)](function() {
    const _0x335021 = _0x2813a2;
    $('[data-form=\x22progress\x22]')[_0x335021(0x290)](progressbarClone['clone'](!![], !![]));
}), $('[data-input-field]')[_0x2813a2(0x2e4)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x2813a2(0x333)], $('[data-text=\x22total-steps\x22]')[_0x2813a2(0x229)](totalSteps)) : ($(steps[x])[_0x2813a2(0x29e)](_0x2813a2(0x1fd)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x2813a2(0x1fc))[_0x2813a2(0x333)], $(_0x2813a2(0x304))[_0x2813a2(0x229)](totalSteps), $(_0x2813a2(0x2d6))['each'](function() {
    const _0x40e781 = _0x2813a2;
    $($(_0x40e781(0x24c))[$(this)[_0x40e781(0x221)]()])['hide']();
}));
progressbar = $(_0x2813a2(0x285))[_0x2813a2(0x36b)](), $(_0x2813a2(0x24c))['on'](_0x2813a2(0x249), clickableIndicator), $(_0x2813a2(0x220))[_0x2813a2(0x229)](curStep), steps['hide'](), $('[data-success-card]')[_0x2813a2(0x2e4)](), $(_0x2813a2(0x36a))['each'](function() {
    const _0x379c10 = _0x2813a2;
    $(this)[_0x379c10(0x255)]('type', _0x379c10(0x21d));
});

function getParams() {
    const _0x4c38bd = _0x2813a2;
    urlFormly[_0x4c38bd(0x319)][_0x4c38bd(0x309)](function(_0x6b6509, _0x156ccb) {
        const _0x197a7f = _0x4c38bd;
        searchQ[_0x197a7f(0x2f4)]({ 'val': _0x6b6509, 'key': _0x156ccb });
    });
}

function getSafe(_0x327b97, _0x16a35c) { try { return _0x327b97(); } catch (_0x113953) { return _0x16a35c; } }

function phoneAutoFormat(_0x3504e8) {
    var _0x49edc5 = '';
    return function(_0x5db8c0) {
        const _0x4d12a2 = _0x34af;
        var _0x32cff7 = '',
            _0x5c784c = _0x5db8c0[_0x4d12a2(0x280)](/\D/g, ''),
            _0x5b837b = 0x0,
            _0x5a166 = 0x0;
        while (_0x5b837b < _0x5c784c[_0x4d12a2(0x333)] && _0x5a166 < _0x3504e8['length']) { _0x3504e8[_0x5a166] === 'x' ? (_0x32cff7 += _0x5c784c[_0x5b837b], _0x5b837b++) : _0x32cff7 += _0x3504e8[_0x5a166], _0x5a166++; }
        if (_0x5db8c0[_0x4d12a2(0x333)] < _0x49edc5[_0x4d12a2(0x333)]) {
            var _0x404f22 = _0x3504e8[_0x4d12a2(0x212)](_0x5a166);
            _0x32cff7 += _0x404f22[_0x4d12a2(0x280)](/x/g, '');
        }
        return _0x49edc5 = _0x32cff7, _0x32cff7;
    };
}

function validateURL(_0x186244) { const _0x55c6ac = _0x2813a2; return urlPattern[_0x55c6ac(0x2d2)](_0x186244) ? !![] : ![]; }
quiz && steps['each'](function() {
    const _0x8da3d5 = _0x2813a2;
    $(this)[_0x8da3d5(0x36b)]()[_0x8da3d5(0x255)]('data-radio-skip', !![]), $(this)[_0x8da3d5(0x36b)]()[_0x8da3d5(0x255)](_0x8da3d5(0x312), 0xfa);
});

function disableBtn(_0x1df016) {
    const _0xfe1b9b = _0x2813a2;
    fill = ![], !customError && ($(_0xfe1b9b(0x2a8))[_0xfe1b9b(0x32f)]({ 'opacity': _0xfe1b9b(0x203), 'pointer-events': _0xfe1b9b(0x348) }), $(_0xfe1b9b(0x2a8))[_0xfe1b9b(0x2a4)]('disabled'), $(_0xfe1b9b(0x308))['css']({ 'opacity': _0xfe1b9b(0x203), 'pointer-events': _0xfe1b9b(0x348) }), $(_0xfe1b9b(0x308))[_0xfe1b9b(0x2a4)](_0xfe1b9b(0x211)), $(_0xfe1b9b(0x268))[_0xfe1b9b(0x32f)]({ 'opacity': _0xfe1b9b(0x203), 'pointer-events': _0xfe1b9b(0x348) }), $(_0xfe1b9b(0x268))[_0xfe1b9b(0x2a4)](_0xfe1b9b(0x211)));
}

function enableBtn() {
    const _0x49c9c2 = _0x2813a2;
    fill = !![], $(_0x49c9c2(0x2a8))[_0x49c9c2(0x32f)]({ 'pointer-events': _0x49c9c2(0x340), 'opacity': '1' }), $(_0x49c9c2(0x2a8))[_0x49c9c2(0x25f)](_0x49c9c2(0x211)), $(_0x49c9c2(0x308))[_0x49c9c2(0x32f)]({ 'pointer-events': _0x49c9c2(0x340), 'opacity': '1' }), $(_0x49c9c2(0x308))[_0x49c9c2(0x25f)](_0x49c9c2(0x211)), $(_0x49c9c2(0x268))['css']({ 'pointer-events': _0x49c9c2(0x340), 'opacity': '1' }), $(_0x49c9c2(0x268))[_0x49c9c2(0x25f)](_0x49c9c2(0x211));
}

function saveLastAnswer(_0x25c764) {
    const _0x3d2559 = _0x2813a2;
    localStorage[_0x3d2559(0x22e)](_0x3d2559(0x24b)), localStorage['setItem'](_0x3d2559(0x24b), JSON[_0x3d2559(0x2ed)](_0x25c764));
}

function saveFilledInput() {
    const _0x39b428 = _0x2813a2;
    $(_0x39b428(0x307))[_0x39b428(0x33d)](_0x39b428(0x24d))['each'](function() {
        const _0xba8ae9 = _0x39b428;
        $(this)['attr'](_0xba8ae9(0x34c)) === _0xba8ae9(0x1ef) || $(this)[_0xba8ae9(0x255)](_0xba8ae9(0x34c)) === _0xba8ae9(0x2d7) ? $(this)[_0xba8ae9(0x206)](_0xba8ae9(0x2bb)) && (filledInput[_0xba8ae9(0x342)](_0x34229d => _0x34229d[_0xba8ae9(0x318)] === $(this)['attr'](_0xba8ae9(0x33e))) ? (filledInput = filledInput[_0xba8ae9(0x27c)](_0x2b74b1 => _0x2b74b1[_0xba8ae9(0x318)] !== $(this)[_0xba8ae9(0x255)](_0xba8ae9(0x33e))), $(this)[_0xba8ae9(0x24a)]() !== '' && filledInput[_0xba8ae9(0x2f4)]({ 'inputName': $(this)['attr']('name'), 'value': $(this)[_0xba8ae9(0x24a)]() })) : $(this)[_0xba8ae9(0x24a)]() !== '' && filledInput[_0xba8ae9(0x2f4)]({ 'inputName': $(this)['attr'](_0xba8ae9(0x33e)), 'value': $(this)['val']() })) : filledInput['some'](_0x20db8d => _0x20db8d[_0xba8ae9(0x318)] === $(this)[_0xba8ae9(0x255)](_0xba8ae9(0x33e))) ? (filledInput = filledInput[_0xba8ae9(0x27c)](_0x2c2abe => _0x2c2abe[_0xba8ae9(0x318)] !== $(this)[_0xba8ae9(0x255)]('name')), $(this)[_0xba8ae9(0x24a)]() !== '' && filledInput['push']({ 'inputName': $(this)['attr']('name'), 'value': $(this)[_0xba8ae9(0x24a)]() })) : $(this)['val']() !== '' && filledInput[_0xba8ae9(0x2f4)]({ 'inputName': $(this)[_0xba8ae9(0x255)](_0xba8ae9(0x33e)), 'value': $(this)[_0xba8ae9(0x24a)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x39b428(0x22e)]('formlyLastStep'), localStorage[_0x39b428(0x28f)](_0x39b428(0x354), lastStep)), localStorage[_0x39b428(0x22e)](_0x39b428(0x213)), localStorage[_0x39b428(0x28f)](_0x39b428(0x213), JSON['stringify'](filledInput));
}

function scrollTop() {
    const _0x195305 = _0x2813a2;
    scrollToTop && $('html,\x20body')[_0x195305(0x287)]({ 'scrollTop': $(_0x195305(0x2fa))[_0x195305(0x2dc)]()['top'] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x256fa4) {
    const _0x53ccc2 = _0x2813a2;
    var _0x4bb2fb = window[_0x53ccc2(0x271)][_0x53ccc2(0x260)],
        _0x2aadcf = new URLSearchParams(window[_0x53ccc2(0x271)]['search']);
    _0x2aadcf['set'](_0x53ccc2(0x2f8), _0x256fa4);
    var _0x3ba036 = _0x4bb2fb[_0x53ccc2(0x27d)]('?')[0x0] + '?' + _0x2aadcf[_0x53ccc2(0x22d)]();
    window[_0x53ccc2(0x2d8)][_0x53ccc2(0x345)]({}, '', _0x3ba036);
}

function updateStep() {
    const _0x193819 = _0x2813a2;
    scrollTop(), skip = ![], $(_0x193819(0x2f9))[_0x193819(0x25f)](_0x193819(0x211));
    $(_0x193819(0x30f))[_0x193819(0x29e)]('clickable') && (steps[_0x193819(0x2f0)](_0x193819(0x246))[_0x193819(0x233)](function() {
        const _0xcd7f56 = _0x193819;
        $($(_0xcd7f56(0x2f9))[$(this)[_0xcd7f56(0x23f)]('[data-form=\x22step\x22]')['index']()]), $(this)['val']() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x193819(0x2db))[_0x193819(0x2a4)]('disabled') : $(_0x193819(0x2db))['removeClass'](_0x193819(0x211)));
    $(_0x193819(0x2f9))[_0x193819(0x25f)](_0x193819(0x236)), $(_0x193819(0x2f9))[_0x193819(0x2a4)](_0x193819(0x211)), $($('[data-form=\x22custom-progress-indicator\x22]')[x])[_0x193819(0x2a4)](_0x193819(0x236)), selection = selections[_0x193819(0x27c)](_0xb4e7c8 => _0xb4e7c8['step'] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x193819(0x34b)]) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x193819(0x20d))['hide'](), steps[_0x193819(0x2e4)]();
    reinitIX === !![] && window['Webflow'][_0x193819(0x332)]();
    $(progressbar)[_0x193819(0x25f)](_0x193819(0x236));
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])['addClass'](_0x193819(0x236)) : !$(steps[i])[_0x193819(0x29e)](_0x193819(0x1fd)) && $(progressbar[i])[_0x193819(0x2a4)]('current'); }
    reinitIX === !![] ? (window[_0x193819(0x289)] && window[_0x193819(0x289)]['require'](_0x193819(0x302))[_0x193819(0x32e)](), document[_0x193819(0x264)](new Event('readystatechange')), $(steps[x])[_0x193819(0x2ca)]()) : $(steps[x])[_0x193819(0x294)](_0x193819(0x279));
    $('.active-answer-card')[_0x193819(0x25f)]('active-answer-card');
    x === 0x0 && !$(steps[x])[_0x193819(0x29e)](_0x193819(0x1fd)) && ($(steps[x])[_0x193819(0x2f0)](_0x193819(0x20d))[_0x193819(0x2ca)](), $(steps[x])[_0x193819(0x2f0)](_0x193819(0x20d))[_0x193819(0x2a4)](_0x193819(0x362)));
    selection[_0x193819(0x333)] > 0x0 ? ($(steps[x])[_0x193819(0x2f0)]('[data-answer=\x22' + selection[0x0][_0x193819(0x265)] + '\x22]')[_0x193819(0x2ca)](), $(steps[x])[_0x193819(0x2f0)](_0x193819(0x30e) + selection[0x0]['selected'] + '\x22]')[_0x193819(0x2a4)](_0x193819(0x362))) : ($(steps[x])[_0x193819(0x2f0)](_0x193819(0x30e) + answer + '\x22]')[_0x193819(0x2ca)](), $(steps[x])[_0x193819(0x2f0)](_0x193819(0x30e) + answer + '\x22]')['addClass']('active-answer-card'));
    if (x === 0x0) $(_0x193819(0x242))['hide'](), $(_0x193819(0x2a8))[_0x193819(0x2ca)](), $(_0x193819(0x308))[_0x193819(0x2e4)]();
    else {
        if (x === steps['length'] - 0x1 || $(steps[x])[_0x193819(0x2f0)](_0x193819(0x288))['length'] > 0x0) {
            $('[data-form=\x22next-btn\x22]')[_0x193819(0x2e4)]();
            if ($(steps[x])[_0x193819(0x2f0)](_0x193819(0x291))[_0x193819(0x29e)](_0x193819(0x231))) $(steps[x])['find']('[data-form=\x22next-btn\x22][data-submit-show]')[_0x193819(0x2ca)]();
            else $(_0x193819(0x2a8))[_0x193819(0x29e)](_0x193819(0x231)) && $('[data-form=\x22next-btn\x22]')[_0x193819(0x2ca)]();
            $(_0x193819(0x308))[_0x193819(0x2ca)](), $(_0x193819(0x268))[_0x193819(0x2ca)](), $(_0x193819(0x242))[_0x193819(0x2ca)]();
        } else $(_0x193819(0x2a8))['show'](), $(_0x193819(0x242))[_0x193819(0x2ca)](), $(_0x193819(0x308))[_0x193819(0x2e4)](), $(_0x193819(0x268))[_0x193819(0x2e4)]();
    }
    $($(steps[x])[_0x193819(0x2f0)](_0x193819(0x355))[0x0])[_0x193819(0x2d4)](), $($(steps[x])[_0x193819(0x2f0)](_0x193819(0x21b))[0x0])[_0x193819(0x2d4)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x193819(0x2f9))[idx])[_0x193819(0x25f)]('disabled'); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x310cab, _0x126c9e, _0x215d22) {
    const _0x42e1d0 = _0x2813a2;
    let _0x1f8486 = _0x310cab[_0x42e1d0(0x276)]('@') ? _0x310cab[_0x42e1d0(0x27d)]('@')[0x1][_0x42e1d0(0x27d)]('.')[0x0] : [];
    dom = [];
    _0x126c9e !== undefined && _0x126c9e[_0x42e1d0(0x27d)](',')[_0x42e1d0(0x309)](function(_0x129006) {
        const _0x27b0e2 = _0x42e1d0;
        _0x129006[_0x27b0e2(0x276)](_0x1f8486) && dom['push'](_0x1f8486);
    });
    dom[_0x42e1d0(0x333)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x2fb4e4 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x2fb4e4[_0x42e1d0(0x2d2)](_0x310cab) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x42e1d0(0x2f4)]({ 'input': _0x215d22 })) : emailFilled = !![];
}

function phoneValidation(_0x50b8ec, _0x5c5234, _0x53b93e) {
    if (phoneFormat) return _0x5c5234 >= _0x53b93e ? !![] : ![];
    else { if (_0x5c5234 >= _0x53b93e) return !![]; }
}

function validation() {
    const _0x18a713 = _0x2813a2;
    $(steps[x])[_0x18a713(0x29e)]('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x18a713(0x2f0)]('textarea[required]:visible')[_0x18a713(0x333)], textInputLength = $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x351))[_0x18a713(0x333)], selectInputLength = $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x33c))['length'], emailInputLength = $(steps[x])[_0x18a713(0x2f0)]('input[type=\x22email\x22]:visible')[_0x18a713(0x333)], checkboxInputLength = $(steps[x])['find']('input[type=\x22checkbox\x22]:visible')[_0x18a713(0x333)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])['data'](_0x18a713(0x1ef)) ? $(steps[x])[_0x18a713(0x29e)](_0x18a713(0x1ef)) : $(steps[x])[_0x18a713(0x2f0)]('[data-checkbox]')[_0x18a713(0x333)] > 0x0 ? $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x21c))[_0x18a713(0x29e)](_0x18a713(0x1ef)) : 0x0, maxCheckCount = $(steps[x])[_0x18a713(0x29e)](_0x18a713(0x360)) ? $(steps[x])[_0x18a713(0x29e)](_0x18a713(0x360)) : $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x252))['length'] > 0x0 ? $(steps[x])[_0x18a713(0x2f0)]('[data-max-checkbox]')[_0x18a713(0x29e)](_0x18a713(0x360)) : 0x0;
    if (!logicExtra) {
        let _0x41e4d3 = $(steps[x])[_0x18a713(0x2f0)](':input[type=\x22checkbox\x22]'),
            _0x1deb26 = _0x41e4d3[_0x18a713(0x27c)](_0x18a713(0x327)),
            _0x9db75 = _0x41e4d3['filter'](_0x18a713(0x2eb));
        if (_0x41e4d3['length'] > 0x0) {
            if (checkCount === '*' || checkCount > _0x41e4d3[_0x18a713(0x333)]) _0x41e4d3[_0x18a713(0x233)](function() {
                const _0x13259e = _0x18a713;
                $(this)['is'](_0x13259e(0x2eb)) ? (checkboxFilled = !![], resetInputErrorMessage($(this)['attr'](_0x13259e(0x33e)))) : (checkboxFilled = ![], unfilledArr[_0x13259e(0x2f4)]({ 'input': $(this)['attr'](_0x13259e(0x33e)) }));
            });
            else {
                if (_0x9db75[_0x18a713(0x333)] >= checkCount) {
                    if (_0x1deb26[_0x18a713(0x333)] > 0x0) _0x1deb26['length'] === _0x9db75[_0x18a713(0x333)] ? (checkboxFilled = !![], resetInputErrorMessage(_0x1deb26['first']()[_0x18a713(0x255)]('name'))) : (checkboxFilled = ![], _0x1deb26['not'](':checked')[_0x18a713(0x233)](function() {
                        const _0x12333b = _0x18a713;
                        unfilledArr[_0x12333b(0x2f4)]({ 'input': $(this)[_0x12333b(0x255)](_0x12333b(0x33e)) });
                    }));
                    else {}
                } else checkboxFilled = ![], _0x1deb26[_0x18a713(0x33d)](_0x18a713(0x2eb))[_0x18a713(0x233)](function() {
                    const _0x592084 = _0x18a713;
                    unfilledArr[_0x592084(0x2f4)]({ 'input': $(this)[_0x592084(0x255)](_0x592084(0x33e)) });
                }), unfilledArr[_0x18a713(0x2f4)]({ 'input': _0x41e4d3[_0x18a713(0x328)]()[_0x18a713(0x255)](_0x18a713(0x33e)) });
            }
        }
        $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2e0))['each'](function(_0x246f67) {
            const _0xd13cf9 = _0x18a713;
            var _0x322324 = $(this)[_0xd13cf9(0x255)](_0xd13cf9(0x33e));
            $(_0xd13cf9(0x234) + _0x322324 + _0xd13cf9(0x2e5))[_0xd13cf9(0x333)] == 0x0 ? (!empReqRadio[_0xd13cf9(0x2f0)](_0x390607 => _0x390607[_0xd13cf9(0x314)] === _0x246f67) && empReqRadio[_0xd13cf9(0x2f4)]({ 'input': _0x246f67 }), unfilledArr[_0xd13cf9(0x2f4)]({ 'input': $(this)[_0xd13cf9(0x255)](_0xd13cf9(0x33e)) })) : empReqRadio = empReqRadio[_0xd13cf9(0x27c)](_0x1460c3 => _0x1460c3[_0xd13cf9(0x314)] !== _0x246f67), empReqRadio[_0xd13cf9(0x333)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])['find'](':input[type=\x22text\x22][required]')[_0x18a713(0x233)](function(_0x577cc8) {
            const _0x244111 = _0x18a713;
            let _0x3af3c7 = $(this)[_0x244111(0x24a)]()[_0x244111(0x333)],
                _0x3e1bbc = $(this)[_0x244111(0x29e)]('min-character') ? $(this)[_0x244111(0x29e)](_0x244111(0x1f0)) : 0x0;
            $(this)[_0x244111(0x24a)]() !== '' && _0x3af3c7 >= _0x3e1bbc ? empReqInput = empReqInput[_0x244111(0x27c)](_0x371b82 => _0x371b82[_0x244111(0x314)] !== _0x577cc8) : (!empReqInput[_0x244111(0x2f0)](_0x1057d4 => _0x1057d4['input'] === _0x577cc8) && empReqInput[_0x244111(0x2f4)]({ 'input': _0x577cc8 }), unfilledArr[_0x244111(0x2f4)]({ 'input': $(this)['attr']('name') })), empReqInput['length'] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](':input[type=\x22password\x22][required]')[_0x18a713(0x233)](function(_0x1c6fb8) {
            const _0x5f490e = _0x18a713;
            let _0x506dc8 = $(this)[_0x5f490e(0x24a)]()[_0x5f490e(0x333)],
                _0x45e0af = $(this)['data'](_0x5f490e(0x1f0)) ? $(this)['data'](_0x5f490e(0x1f0)) : 0x0;
            $(this)[_0x5f490e(0x24a)]() !== '' && _0x506dc8 >= _0x45e0af ? empReqPassword = empReqPassword['filter'](_0x368b23 => _0x368b23[_0x5f490e(0x314)] !== _0x1c6fb8) : (!empReqPassword[_0x5f490e(0x2f0)](_0x1d1b0c => _0x1d1b0c[_0x5f490e(0x314)] === _0x1c6fb8) && empReqPassword[_0x5f490e(0x2f4)]({ 'input': _0x1c6fb8 }), unfilledArr[_0x5f490e(0x2f4)]({ 'input': $(this)[_0x5f490e(0x255)]('name') })), empReqPassword['length'] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])['find'](_0x18a713(0x35d))[_0x18a713(0x233)](function(_0x4bc5fe) {
            const _0x4ea0ba = _0x18a713;
            let _0x2abbce = $(this)['val']()[_0x4ea0ba(0x333)],
                _0x32dc4d = $(this)[_0x4ea0ba(0x29e)](_0x4ea0ba(0x1f0)) ? $(this)['data']('min-character') : 0x0;
            $(this)[_0x4ea0ba(0x24a)]() !== '' && _0x2abbce >= _0x32dc4d ? empReqUrl = empReqUrl[_0x4ea0ba(0x27c)](_0x1d9901 => _0x1d9901['input'] !== _0x4bc5fe) : (!empReqTime[_0x4ea0ba(0x2f0)](_0x26392f => _0x26392f[_0x4ea0ba(0x314)] === _0x4bc5fe) && empReqUrl[_0x4ea0ba(0x2f4)]({ 'input': _0x4bc5fe }), unfilledArr['push']({ 'input': $(this)[_0x4ea0ba(0x255)](_0x4ea0ba(0x33e)) })), empReqUrl[_0x4ea0ba(0x333)] === 0x0 && validateURL($(this)[_0x4ea0ba(0x24a)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](':input[type=\x22time\x22][required]')['each'](function(_0x11c2e3) {
            const _0x87d3c0 = _0x18a713;
            let _0x981b76 = $(this)[_0x87d3c0(0x24a)]()['length'],
                _0x3c4a43 = $(this)[_0x87d3c0(0x29e)](_0x87d3c0(0x1f0)) ? $(this)[_0x87d3c0(0x29e)](_0x87d3c0(0x1f0)) : 0x0;
            $(this)[_0x87d3c0(0x24a)]() !== '' && _0x981b76 >= _0x3c4a43 ? empReqTime = empReqTime[_0x87d3c0(0x27c)](_0x17c4b5 => _0x17c4b5['input'] !== _0x11c2e3) : (!empReqTime[_0x87d3c0(0x2f0)](_0x1e1732 => _0x1e1732[_0x87d3c0(0x314)] === _0x11c2e3) && empReqTime[_0x87d3c0(0x2f4)]({ 'input': _0x11c2e3 }), unfilledArr['push']({ 'input': $(this)[_0x87d3c0(0x255)]('name') })), empReqTime[_0x87d3c0(0x333)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x32c))[_0x18a713(0x233)](function(_0x7c11c8) {
            const _0x37cc52 = _0x18a713;
            $(this)['val']() !== '' ? empReqDate = empReqDate[_0x37cc52(0x27c)](_0x13c389 => _0x13c389[_0x37cc52(0x314)] !== _0x7c11c8) : (!empReqDate['find'](_0x155b43 => _0x155b43[_0x37cc52(0x314)] === _0x7c11c8) && empReqDate[_0x37cc52(0x2f4)]({ 'input': _0x7c11c8 }), unfilledArr[_0x37cc52(0x2f4)]({ 'input': $(this)['attr']('name') })), empReqDate[_0x37cc52(0x333)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x292))['each'](function(_0x4205dc) {
            const _0x58e834 = _0x18a713;
            if ($(this)[_0x58e834(0x24a)]() !== '') {
                let _0x51f9f5 = $(this)['val']()[_0x58e834(0x333)],
                    _0x5c4530 = $(this)['data'](_0x58e834(0x1f0)) ? $(this)['data'](_0x58e834(0x1f0)) : 0x0;
                if ($(this)['data']('phone-autoformat')) {
                    var _0x4fbaff = phoneAutoFormat($(this)[_0x58e834(0x29e)](_0x58e834(0x240)));
                    $(this)[_0x58e834(0x24a)](_0x4fbaff($(this)[_0x58e834(0x24a)]()));
                }
                phoneValidation($(this)[_0x58e834(0x24a)](), _0x51f9f5, _0x5c4530) ? empReqTel = empReqTel[_0x58e834(0x27c)](_0x442324 => _0x442324[_0x58e834(0x314)] !== _0x4205dc) : empReqTel[_0x58e834(0x2f4)]({ 'input': _0x4205dc });
            } else !empReqTel[_0x58e834(0x2f0)](_0x478f7b => _0x478f7b[_0x58e834(0x314)] === _0x4205dc) && empReqTel[_0x58e834(0x2f4)]({ 'input': _0x4205dc }), unfilledArr['push']({ 'input': $(this)['attr'](_0x58e834(0x33e)) });
            empReqTel[_0x58e834(0x333)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2ff))[_0x18a713(0x233)](function(_0x483eb9) {
            const _0x5b755c = _0x18a713;
            $(this)['val']() !== '' ? empReqFile = empReqFile[_0x5b755c(0x27c)](_0x271a02 => _0x271a02[_0x5b755c(0x314)] !== _0x483eb9) : (!empReqFile[_0x5b755c(0x2f0)](_0x20cea7 => _0x20cea7[_0x5b755c(0x314)] === _0x483eb9) && empReqFile[_0x5b755c(0x2f4)]({ 'input': _0x483eb9 }), unfilledArr[_0x5b755c(0x2f4)]({ 'input': $(this)[_0x5b755c(0x255)](_0x5b755c(0x33e)) })), empReqFile['length'] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2f2))[_0x18a713(0x233)](function(_0xa4ede7) {
            const _0xb57cae = _0x18a713;
            let _0x314b0f = $(this)['val']()[_0xb57cae(0x333)],
                _0x529418 = $(this)[_0xb57cae(0x29e)](_0xb57cae(0x1f0)) ? $(this)[_0xb57cae(0x29e)]('min-character') : 0x0;
            $(this)['val']() !== '' && _0x314b0f >= _0x529418 ? empReqNum = empReqNum[_0xb57cae(0x27c)](_0x13023c => _0x13023c[_0xb57cae(0x314)] !== _0xa4ede7) : (!empReqNum['find'](_0x5f004c => _0x5f004c[_0xb57cae(0x314)] === _0xa4ede7) && empReqNum[_0xb57cae(0x2f4)]({ 'input': _0xa4ede7 }), unfilledArr[_0xb57cae(0x2f4)]({ 'input': $(this)[_0xb57cae(0x255)]('name') })), empReqNum['length'] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2e6))['each'](function(_0x11adbd) {
            const _0x1802c9 = _0x18a713;
            let _0xbfd0b9 = $(this)[_0x1802c9(0x24a)]();
            _0xbfd0b9 === '' && (_0xbfd0b9 = null), _0xbfd0b9 != null ? empReqSelect = empReqSelect[_0x1802c9(0x27c)](_0x48478e => _0x48478e[_0x1802c9(0x314)] !== _0x11adbd) : (!empReqSelect[_0x1802c9(0x2f0)](_0x58c771 => _0x58c771[_0x1802c9(0x314)] === _0x11adbd) && empReqSelect[_0x1802c9(0x2f4)]({ 'input': _0x11adbd }), unfilledArr[_0x1802c9(0x2f4)]({ 'input': $(this)[_0x1802c9(0x255)](_0x1802c9(0x33e)) })), empReqSelect[_0x1802c9(0x333)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)]('textarea[required]')['each'](function(_0x143aad) {
            const _0x389fa8 = _0x18a713;
            let _0x32c5b5 = $(this)[_0x389fa8(0x24a)]()[_0x389fa8(0x333)],
                _0x4c32af = $(this)[_0x389fa8(0x29e)]('min-character') ? $(this)['data'](_0x389fa8(0x1f0)) : 0x0;
            $(this)[_0x389fa8(0x24a)]() !== '' && _0x32c5b5 >= _0x4c32af ? empReqTextarea = empReqTextarea[_0x389fa8(0x27c)](_0x2173cd => _0x2173cd['input'] !== _0x143aad) : (!empReqTextarea[_0x389fa8(0x2f0)](_0x3f820f => _0x3f820f[_0x389fa8(0x314)] === _0x143aad) && empReqTextarea['push']({ 'input': _0x143aad }), unfilledArr[_0x389fa8(0x2f4)]({ 'input': $(this)['attr'](_0x389fa8(0x33e)) })), empReqTextarea[_0x389fa8(0x333)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x334))[_0x18a713(0x233)](function() {
            const _0x3d0b3d = _0x18a713;
            $(this)[_0x3d0b3d(0x24a)]() !== '' ? validateEmail($(this)[_0x3d0b3d(0x24a)](), $(this)[_0x3d0b3d(0x29e)](_0x3d0b3d(0x31d)), $(this)[_0x3d0b3d(0x255)](_0x3d0b3d(0x33e))) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x3d0b3d(0x255)](_0x3d0b3d(0x33e)) }));
        });
    } else {
        if ($(steps[x])['data'](_0x18a713(0x1fd))) answer = $(steps[x])['find'](_0x18a713(0x30b))[_0x18a713(0x29e)](_0x18a713(0x273)), selections = selections[_0x18a713(0x27c)](_0x40e53a => _0x40e53a['step'] !== x), selections[_0x18a713(0x2f4)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x29e)](_0x18a713(0x1fd)) && (answer = $(steps[x])['find'](_0x18a713(0x2cb))['data'](_0x18a713(0x273)), selections = selections[_0x18a713(0x27c)](_0x2ea93b => _0x2ea93b[_0x18a713(0x2f8)] !== x), selections[_0x18a713(0x2f4)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[x])['find'](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x36e))['is'](_0x18a713(0x30a))) {
            if (checkCount === '*' || checkCount > $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x330))['length']) $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x330))[_0x18a713(0x233)](function() {
                const _0x1b6e6b = _0x18a713;
                if ($(this)['is'](_0x1b6e6b(0x2eb))) {
                    if ($(steps[x])[_0x1b6e6b(0x2f0)](_0x1b6e6b(0x246))[_0x1b6e6b(0x333)] < 0x1) {
                        let _0x143879 = undefined;
                        $(this)[_0x1b6e6b(0x23f)](_0x1b6e6b(0x338))[_0x1b6e6b(0x29e)]('skip-to') && (_0x143879 = $(this)[_0x1b6e6b(0x23f)](_0x1b6e6b(0x338))['data']('skip-to'));
                        if ($(this)[_0x1b6e6b(0x23f)](_0x1b6e6b(0x30b))[_0x1b6e6b(0x255)](_0x1b6e6b(0x24f))) {
                            let _0x3d1f44 = $(this)['parents'](_0x1b6e6b(0x30b))[_0x1b6e6b(0x255)](_0x1b6e6b(0x24f));
                            selections = selections[_0x1b6e6b(0x27c)](_0x2037f6 => _0x2037f6[_0x1b6e6b(0x2f8)] !== x), selections[_0x1b6e6b(0x2f4)]({ 'step': x, 'selected': _0x3d1f44 });
                            if (_0x143879) {
                                selections = selections[_0x1b6e6b(0x27c)](_0x34efad => _0x34efad[_0x1b6e6b(0x2f8)] !== _0x143879 - 0x2), selections[_0x1b6e6b(0x2f4)]({ 'step': _0x143879 - 0x2, 'selected': _0x3d1f44 });
                                let _0x2173d0 = selections['findIndex'](_0x2781f4 => _0x2781f4[_0x1b6e6b(0x2f8)] === x);
                                selections[_0x2173d0][_0x1b6e6b(0x34b)] = parseInt(_0x143879) - 0x1, selections[_0x2173d0]['backTo'] = x;
                            }
                        }
                        checkboxFilled = !![], $(steps[x])[_0x1b6e6b(0x2f0)](_0x1b6e6b(0x357))['length'] >= $(steps[x])[_0x1b6e6b(0x2f0)](':input[type=\x22checkbox\x22][required]')[_0x1b6e6b(0x333)] && resetInputErrorMessage($(steps[x])['find'](_0x1b6e6b(0x330))[_0x1b6e6b(0x255)]('name'));
                    }
                } else checkboxFilled = ![], unfilledArr[_0x1b6e6b(0x2f4)]({ 'input': $(this)['attr']('name') });
            });
            else {
                if ($(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](':input[type=\x22checkbox\x22]:checked')['length'] >= checkCount) {
                    if ($(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](':input[type=\x22checkbox\x22]')[_0x18a713(0x23f)](_0x18a713(0x30b))['attr'](_0x18a713(0x24f))) {
                        let _0xa2a3fb = undefined;
                        $(steps[x])[_0x18a713(0x2f0)]('.active-answer-card')[_0x18a713(0x2f0)](_0x18a713(0x330))[_0x18a713(0x23f)](_0x18a713(0x338))['attr']('data-skip-to') && (_0xa2a3fb = $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](':input[type=\x22checkbox\x22]:checked')[_0x18a713(0x23f)](_0x18a713(0x338))[_0x18a713(0x255)](_0x18a713(0x263)));
                        let _0x11491d = $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](':input[type=\x22checkbox\x22]')[_0x18a713(0x23f)](_0x18a713(0x30b))[_0x18a713(0x255)](_0x18a713(0x24f));
                        selections = selections[_0x18a713(0x27c)](_0x5c8da7 => _0x5c8da7[_0x18a713(0x2f8)] !== x), selections[_0x18a713(0x2f4)]({ 'step': x, 'selected': _0x11491d });
                        if (_0xa2a3fb) {
                            selections = selections['filter'](_0x454b99 => _0x454b99[_0x18a713(0x2f8)] !== _0xa2a3fb - 0x2), selections['push']({ 'step': _0xa2a3fb - 0x2, 'selected': _0x11491d });
                            let _0x112840 = selections[_0x18a713(0x324)](_0x4e27ec => _0x4e27ec[_0x18a713(0x2f8)] === x);
                            selections[_0x112840]['skipTo'] = parseInt(_0xa2a3fb) - 0x1, selections[_0x112840][_0x18a713(0x237)] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x357))[_0x18a713(0x333)] >= $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2e7))[_0x18a713(0x333)] && resetInputErrorMessage($(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x330))['attr'](_0x18a713(0x33e)));
                } else checkboxFilled = ![], $(steps[x])[_0x18a713(0x2f0)](':input[type=\x22checkbox\x22][required]')[_0x18a713(0x233)](function() {
                    const _0x186033 = _0x18a713;
                    $(this)['not'](_0x186033(0x2eb)) && unfilledArr['push']({ 'input': $(this)[_0x186033(0x255)](_0x186033(0x33e)) });
                });
            }
        }
        $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x2e0))[_0x18a713(0x233)](function(_0x518cdc) {
            const _0x1c9fc6 = _0x18a713;
            var _0x581ecc = $(this)[_0x1c9fc6(0x255)](_0x1c9fc6(0x33e));
            $(_0x1c9fc6(0x234) + _0x581ecc + _0x1c9fc6(0x2e5))[_0x1c9fc6(0x333)] == 0x0 ? (!empReqRadio[_0x1c9fc6(0x2f0)](_0x252fc3 => _0x252fc3[_0x1c9fc6(0x314)] === _0x518cdc) && empReqRadio['push']({ 'input': _0x518cdc }), unfilledArr[_0x1c9fc6(0x2f4)]({ 'input': $(this)[_0x1c9fc6(0x255)](_0x1c9fc6(0x33e)) })) : empReqRadio = empReqRadio[_0x1c9fc6(0x27c)](_0x4c23f6 => _0x4c23f6['input'] !== _0x518cdc), empReqRadio[_0x1c9fc6(0x333)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x277))['each'](function(_0x4565ab) {
            const _0x425276 = _0x18a713;
            let _0x34ce8e = $(this)[_0x425276(0x24a)]()[_0x425276(0x333)],
                _0x8650b = $(this)[_0x425276(0x29e)](_0x425276(0x1f0)) ? $(this)[_0x425276(0x29e)]('min-character') : 0x0;
            $(this)['val']() !== '' && _0x34ce8e >= _0x8650b ? empReqInput = empReqInput[_0x425276(0x27c)](_0x1bfa8f => _0x1bfa8f[_0x425276(0x314)] !== _0x4565ab) : (!empReqInput[_0x425276(0x2f0)](_0x2ff908 => _0x2ff908['input'] === _0x4565ab) && empReqInput[_0x425276(0x2f4)]({ 'input': _0x4565ab }), unfilledArr[_0x425276(0x2f4)]({ 'input': $(this)[_0x425276(0x255)](_0x425276(0x33e)) })), empReqInput[_0x425276(0x333)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find'](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x245))[_0x18a713(0x233)](function(_0x933c7a) {
            const _0x17ed7e = _0x18a713;
            skipTo = undefined, $(this)[_0x17ed7e(0x23f)](_0x17ed7e(0x338))[_0x17ed7e(0x29e)](_0x17ed7e(0x34f)) !== '' && (skipTo = $(this)[_0x17ed7e(0x23f)]('[data-skip-to]')['data']('skip-to')), $(this)['parents'](_0x17ed7e(0x30b))[_0x17ed7e(0x255)](_0x17ed7e(0x24f)) && (answer = $(this)[_0x17ed7e(0x23f)](_0x17ed7e(0x30b))[_0x17ed7e(0x255)](_0x17ed7e(0x24f)), selections = selections['filter'](_0x367192 => _0x367192['step'] !== x), selections[_0x17ed7e(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x17ed7e(0x27c)](_0xd1d864 => _0xd1d864[_0x17ed7e(0x2f8)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x17ed7e(0x324)](_0x1549c0 => _0x1549c0[_0x17ed7e(0x2f8)] === x), selections[objIndex][_0x17ed7e(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))['find'](_0x18a713(0x26e))[_0x18a713(0x233)](function(_0x5e5c0e) {
            const _0x4e03bd = _0x18a713;
            let _0x51fed7 = $(this)['val']()[_0x4e03bd(0x333)],
                _0x450fc = $(this)['data']('min-character') ? $(this)[_0x4e03bd(0x29e)](_0x4e03bd(0x1f0)) : 0x0;
            $(this)[_0x4e03bd(0x24a)]() !== '' && _0x51fed7 >= _0x450fc ? empReqPassword = empReqPassword[_0x4e03bd(0x27c)](_0x375e36 => _0x375e36[_0x4e03bd(0x314)] !== _0x5e5c0e) : (!empReqPassword['find'](_0x2952d9 => _0x2952d9[_0x4e03bd(0x314)] === _0x5e5c0e) && empReqPassword[_0x4e03bd(0x2f4)]({ 'input': _0x5e5c0e }), unfilledArr['push']({ 'input': $(this)[_0x4e03bd(0x255)](_0x4e03bd(0x33e)) })), empReqPassword['length'] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](':input[type=\x22password\x22]')[_0x18a713(0x233)](function(_0x318395) {
            const _0x5e9fd2 = _0x18a713;
            skipTo = undefined, $(this)[_0x5e9fd2(0x23f)](_0x5e9fd2(0x338))[_0x5e9fd2(0x29e)]('skip-to') !== '' && (skipTo = $(this)[_0x5e9fd2(0x23f)](_0x5e9fd2(0x338))['data'](_0x5e9fd2(0x34f))), $(this)[_0x5e9fd2(0x23f)]('[data-go-to]')['attr']('data-go-to') && (answer = $(this)[_0x5e9fd2(0x23f)](_0x5e9fd2(0x30b))[_0x5e9fd2(0x255)](_0x5e9fd2(0x24f)), selections = selections[_0x5e9fd2(0x27c)](_0x4c1067 => _0x4c1067[_0x5e9fd2(0x2f8)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0xb2d952 => _0xb2d952[_0x5e9fd2(0x2f8)] !== skipTo - 0x2), selections[_0x5e9fd2(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5e9fd2(0x324)](_0x1321a1 => _0x1321a1[_0x5e9fd2(0x2f8)] === x), selections[objIndex][_0x5e9fd2(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x18a713(0x2f0)]('.active-answer-card')[_0x18a713(0x2f0)](_0x18a713(0x35d))[_0x18a713(0x233)](function(_0x200328) {
            const _0x59c1c1 = _0x18a713;
            let _0x4f712d = $(this)['val']()[_0x59c1c1(0x333)],
                _0x1b5b39 = $(this)[_0x59c1c1(0x29e)]('min-character') ? $(this)[_0x59c1c1(0x29e)](_0x59c1c1(0x1f0)) : 0x0;
            $(this)[_0x59c1c1(0x24a)]() !== '' && _0x4f712d >= _0x1b5b39 ? empReqUrl = empReqUrl['filter'](_0x1a5545 => _0x1a5545['input'] !== _0x200328) : (!empReqUrl[_0x59c1c1(0x2f0)](_0x36225f => _0x36225f[_0x59c1c1(0x314)] === _0x200328) && empReqUrl[_0x59c1c1(0x2f4)]({ 'input': _0x200328 }), unfilledArr['push']({ 'input': $(this)['attr']('name') })), empReqUrl[_0x59c1c1(0x333)] === 0x0 && validateURL($(this)[_0x59c1c1(0x24a)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))['find'](':input[type=\x22url\x22]')[_0x18a713(0x233)](function(_0x4f2ffa) {
            const _0x2cab05 = _0x18a713;
            skipTo = undefined, $(this)[_0x2cab05(0x23f)](_0x2cab05(0x338))['data'](_0x2cab05(0x34f)) !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x2cab05(0x29e)](_0x2cab05(0x34f))), $(this)['parents'](_0x2cab05(0x30b))[_0x2cab05(0x255)](_0x2cab05(0x24f)) && (answer = $(this)[_0x2cab05(0x23f)]('[data-go-to]')['attr'](_0x2cab05(0x24f)), selections = selections[_0x2cab05(0x27c)](_0x336ac9 => _0x336ac9[_0x2cab05(0x2f8)] !== x), selections[_0x2cab05(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x1ecad9 => _0x1ecad9[_0x2cab05(0x2f8)] !== skipTo - 0x2), selections[_0x2cab05(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x207c10 => _0x207c10[_0x2cab05(0x2f8)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2cab05(0x237)] = x));
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x32c))[_0x18a713(0x233)](function(_0x2c2048) {
            const _0x2988c6 = _0x18a713;
            $(this)[_0x2988c6(0x24a)]() !== '' ? empReqDate = empReqDate['filter'](_0x99110c => _0x99110c[_0x2988c6(0x314)] !== _0x2c2048) : (!empReqDate['find'](_0x346a89 => _0x346a89[_0x2988c6(0x314)] === _0x2c2048) && empReqDate[_0x2988c6(0x2f4)]({ 'input': _0x2c2048 }), unfilledArr[_0x2988c6(0x2f4)]({ 'input': $(this)[_0x2988c6(0x255)](_0x2988c6(0x33e)) })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x31f))[_0x18a713(0x233)](function(_0x401f69) {
            const _0x4e40d1 = _0x18a713;
            skipTo = undefined, $(this)[_0x4e40d1(0x23f)](_0x4e40d1(0x338))[_0x4e40d1(0x29e)](_0x4e40d1(0x34f)) !== '' && (skipTo = $(this)[_0x4e40d1(0x23f)]('[data-skip-to]')[_0x4e40d1(0x29e)](_0x4e40d1(0x34f))), $(this)['parents']('[data-go-to]')['attr'](_0x4e40d1(0x24f)) && (answer = $(this)[_0x4e40d1(0x23f)](_0x4e40d1(0x30b))[_0x4e40d1(0x255)](_0x4e40d1(0x24f)), selections = selections[_0x4e40d1(0x27c)](_0x1edef0 => _0x1edef0[_0x4e40d1(0x2f8)] !== x), selections[_0x4e40d1(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4e40d1(0x27c)](_0x500a66 => _0x500a66[_0x4e40d1(0x2f8)] !== skipTo - 0x2), selections[_0x4e40d1(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4e40d1(0x324)](_0xbc2758 => _0xbc2758[_0x4e40d1(0x2f8)] === x), selections[objIndex][_0x4e40d1(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x27f))[_0x18a713(0x233)](function(_0x5b98f5) {
            const _0x161fc4 = _0x18a713;
            $(this)[_0x161fc4(0x24a)]() !== '' ? empReqTime = empReqTime[_0x161fc4(0x27c)](_0x25056a => _0x25056a[_0x161fc4(0x314)] !== _0x5b98f5) : (!empReqTime[_0x161fc4(0x2f0)](_0x1d699a => _0x1d699a['input'] === _0x5b98f5) && empReqTime['push']({ 'input': _0x5b98f5 }), unfilledArr[_0x161fc4(0x2f4)]({ 'input': $(this)[_0x161fc4(0x255)](_0x161fc4(0x33e)) })), empReqTime[_0x161fc4(0x333)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x23d))['each'](function(_0x2fb1d6) {
            const _0x1cb77b = _0x18a713;
            skipTo = undefined, $(this)[_0x1cb77b(0x23f)](_0x1cb77b(0x338))['data'](_0x1cb77b(0x34f)) !== '' && (skipTo = $(this)[_0x1cb77b(0x23f)](_0x1cb77b(0x338))[_0x1cb77b(0x29e)](_0x1cb77b(0x34f))), $(this)[_0x1cb77b(0x23f)]('[data-go-to]')[_0x1cb77b(0x255)](_0x1cb77b(0x24f)) && (answer = $(this)[_0x1cb77b(0x23f)](_0x1cb77b(0x30b))[_0x1cb77b(0x255)](_0x1cb77b(0x24f)), selections = selections[_0x1cb77b(0x27c)](_0x5d8a38 => _0x5d8a38[_0x1cb77b(0x2f8)] !== x), selections[_0x1cb77b(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1cb77b(0x27c)](_0x1d9ef3 => _0x1d9ef3['step'] !== skipTo - 0x2), selections[_0x1cb77b(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1cb77b(0x324)](_0x46e5bd => _0x46e5bd[_0x1cb77b(0x2f8)] === x), selections[objIndex][_0x1cb77b(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1cb77b(0x237)] = x));
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x2f2))[_0x18a713(0x233)](function(_0x268923) {
            const _0x95de83 = _0x18a713;
            let _0x744848 = $(this)[_0x95de83(0x24a)]()[_0x95de83(0x333)],
                _0x1f34f7 = $(this)[_0x95de83(0x29e)]('min-character') ? $(this)[_0x95de83(0x29e)](_0x95de83(0x1f0)) : 0x0;
            $(this)[_0x95de83(0x24a)]() !== '' && _0x744848 >= _0x1f34f7 ? empReqNum = empReqNum[_0x95de83(0x27c)](_0x2071af => _0x2071af[_0x95de83(0x314)] !== _0x268923) : (!empReqNum[_0x95de83(0x2f0)](_0x373672 => _0x373672['input'] === _0x268923) && empReqNum[_0x95de83(0x2f4)]({ 'input': _0x268923 }), unfilledArr[_0x95de83(0x2f4)]({ 'input': $(this)['attr'](_0x95de83(0x33e)) })), empReqNum[_0x95de83(0x333)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x232))[_0x18a713(0x233)](function(_0x369dcb) {
            const _0x4dabba = _0x18a713;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')[_0x4dabba(0x29e)](_0x4dabba(0x34f)) !== '' && (skipTo = $(this)[_0x4dabba(0x23f)](_0x4dabba(0x338))[_0x4dabba(0x29e)]('skip-to')), $(this)[_0x4dabba(0x23f)](_0x4dabba(0x30b))[_0x4dabba(0x255)]('data-go-to') && (answer = $(this)[_0x4dabba(0x23f)](_0x4dabba(0x30b))[_0x4dabba(0x255)]('data-go-to'), selections = selections['filter'](_0x1bdfff => _0x1bdfff['step'] !== x), selections[_0x4dabba(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4dabba(0x27c)](_0x2bc0c6 => _0x2bc0c6['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x47890c => _0x47890c[_0x4dabba(0x2f8)] === x), selections[objIndex][_0x4dabba(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4dabba(0x237)] = x));
        }), $(steps[x])['find'](_0x18a713(0x2cb))[_0x18a713(0x2f0)](':input[type=\x22tel\x22][required]')[_0x18a713(0x233)](function(_0x2a8fc3) {
            const _0x1a087b = _0x18a713;
            if ($(this)[_0x1a087b(0x24a)]() !== '') {
                let _0x30ca88 = $(this)[_0x1a087b(0x24a)]()['length'],
                    _0x1fcf96 = $(this)[_0x1a087b(0x29e)](_0x1a087b(0x1f0)) ? $(this)['data']('min-character') : 0x0;
                if ($(this)[_0x1a087b(0x29e)]('phone-autoformat')) {
                    var _0x1234be = phoneAutoFormat($(this)[_0x1a087b(0x29e)](_0x1a087b(0x240)));
                    $(this)[_0x1a087b(0x24a)](_0x1234be($(this)[_0x1a087b(0x24a)]()));
                }
                phoneValidation($(this)[_0x1a087b(0x24a)](), _0x30ca88, _0x1fcf96) ? empReqTel = empReqTel[_0x1a087b(0x27c)](_0x435208 => _0x435208[_0x1a087b(0x314)] !== _0x2a8fc3) : empReqTel[_0x1a087b(0x2f4)]({ 'input': _0x2a8fc3 });
            } else !empReqTel[_0x1a087b(0x2f0)](_0x5430e1 => _0x5430e1[_0x1a087b(0x314)] === _0x2a8fc3) && empReqTel[_0x1a087b(0x2f4)]({ 'input': _0x2a8fc3 }), unfilledArr[_0x1a087b(0x2f4)]({ 'input': $(this)[_0x1a087b(0x255)]('name') });
            empReqTel['length'] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)]('.active-answer-card')[_0x18a713(0x2f0)](_0x18a713(0x1f4))[_0x18a713(0x233)](function(_0x46e4d9) {
            const _0x4e5b45 = _0x18a713;
            skipTo = undefined, $(this)[_0x4e5b45(0x23f)](_0x4e5b45(0x338))[_0x4e5b45(0x29e)](_0x4e5b45(0x34f)) !== '' && (skipTo = $(this)[_0x4e5b45(0x23f)]('[data-skip-to]')['data'](_0x4e5b45(0x34f))), $(this)['parents'](_0x4e5b45(0x30b))[_0x4e5b45(0x255)](_0x4e5b45(0x24f)) && (answer = $(this)[_0x4e5b45(0x23f)]('[data-go-to]')[_0x4e5b45(0x255)](_0x4e5b45(0x24f)), selections = selections[_0x4e5b45(0x27c)](_0x209ff3 => _0x209ff3['step'] !== x), selections[_0x4e5b45(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x580f0b => _0x580f0b[_0x4e5b45(0x2f8)] !== skipTo - 0x2), selections[_0x4e5b45(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4e5b45(0x324)](_0xd45867 => _0xd45867[_0x4e5b45(0x2f8)] === x), selections[objIndex][_0x4e5b45(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x18a713(0x2f0)]('.active-answer-card')[_0x18a713(0x2f0)](_0x18a713(0x2ff))[_0x18a713(0x233)](function(_0x2b7b8c) {
            const _0x307568 = _0x18a713;
            $(this)[_0x307568(0x24a)]() !== '' ? empReqFile = empReqFile[_0x307568(0x27c)](_0x239446 => _0x239446[_0x307568(0x314)] !== _0x2b7b8c) : (!empReqFile[_0x307568(0x2f0)](_0x69ca5f => _0x69ca5f[_0x307568(0x314)] === _0x2b7b8c) && empReqFile['push']({ 'input': _0x2b7b8c }), unfilledArr[_0x307568(0x2f4)]({ 'input': $(this)[_0x307568(0x255)](_0x307568(0x33e)) })), empReqFile[_0x307568(0x333)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])['find'](_0x18a713(0x2cb))['find'](_0x18a713(0x201))['each'](function(_0x59654f) {
            const _0x46745b = _0x18a713;
            skipTo = undefined, $(this)[_0x46745b(0x23f)](_0x46745b(0x338))[_0x46745b(0x29e)]('skip-to') !== '' && (skipTo = $(this)[_0x46745b(0x23f)](_0x46745b(0x338))[_0x46745b(0x29e)]('skip-to')), $(this)[_0x46745b(0x23f)]('[data-go-to]')[_0x46745b(0x255)]('data-go-to') && (answer = $(this)['parents'](_0x46745b(0x30b))['attr'](_0x46745b(0x24f)), selections = selections[_0x46745b(0x27c)](_0x2340d7 => _0x2340d7[_0x46745b(0x2f8)] !== x), selections[_0x46745b(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x46745b(0x27c)](_0x50679f => _0x50679f[_0x46745b(0x2f8)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x46745b(0x324)](_0x1660a2 => _0x1660a2[_0x46745b(0x2f8)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x46745b(0x237)] = x));
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))['find'](_0x18a713(0x2e6))[_0x18a713(0x233)](function(_0x4e7874) {
            const _0x419f82 = _0x18a713;
            $(this)[_0x419f82(0x24a)]() !== null && $(this)[_0x419f82(0x24a)]() !== '' ? empReqSelect = empReqSelect[_0x419f82(0x27c)](_0x343069 => _0x343069[_0x419f82(0x314)] !== _0x4e7874) : (!empReqSelect[_0x419f82(0x2f0)](_0x2394e2 => _0x2394e2[_0x419f82(0x314)] === _0x4e7874) && empReqSelect['push']({ 'input': _0x4e7874 }), unfilledArr[_0x419f82(0x2f4)]({ 'input': $(this)[_0x419f82(0x255)]('name') })), empReqSelect[_0x419f82(0x333)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)]('.active-answer-card')[_0x18a713(0x2f0)](_0x18a713(0x25e))[_0x18a713(0x233)](function(_0x171a98) {
            const _0x592d90 = _0x18a713;
            skipTo = undefined, $(this)[_0x592d90(0x23f)](_0x592d90(0x338))['data'](_0x592d90(0x34f)) !== '' && (skipTo = $(this)['parents'](_0x592d90(0x338))[_0x592d90(0x29e)](_0x592d90(0x34f))), $(this)[_0x592d90(0x23f)](_0x592d90(0x30b))[_0x592d90(0x255)](_0x592d90(0x24f)) && (answer = $(this)['parents']('[data-go-to]')[_0x592d90(0x255)](_0x592d90(0x24f)), selections = selections['filter'](_0x511acc => _0x511acc[_0x592d90(0x2f8)] !== x), selections[_0x592d90(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x592d90(0x27c)](_0x258377 => _0x258377[_0x592d90(0x2f8)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x592d90(0x324)](_0x333783 => _0x333783[_0x592d90(0x2f8)] === x), selections[objIndex][_0x592d90(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x592d90(0x237)] = x));
        }), $(steps[x])[_0x18a713(0x2f0)]('.active-answer-card')[_0x18a713(0x2f0)](_0x18a713(0x2f7))[_0x18a713(0x233)](function(_0x146f6a) {
            const _0x4784fb = _0x18a713;
            let _0x2986df = $(this)[_0x4784fb(0x24a)]()['length'],
                _0x51473b = $(this)[_0x4784fb(0x29e)](_0x4784fb(0x1f0)) ? $(this)[_0x4784fb(0x29e)]('min-character') : 0x0;
            $(this)['val']() !== '' && _0x2986df >= _0x51473b ? empReqTextarea = empReqTextarea[_0x4784fb(0x27c)](_0x2348e6 => _0x2348e6[_0x4784fb(0x314)] !== _0x146f6a) : (!empReqTextarea[_0x4784fb(0x2f0)](_0x2daf2e => _0x2daf2e[_0x4784fb(0x314)] === _0x146f6a) && empReqTextarea[_0x4784fb(0x2f4)]({ 'input': _0x146f6a }), unfilledArr['push']({ 'input': $(this)[_0x4784fb(0x255)](_0x4784fb(0x33e)) })), empReqTextarea[_0x4784fb(0x333)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))['find'](_0x18a713(0x214))[_0x18a713(0x233)](function(_0x262737) {
            const _0x5a73ca = _0x18a713;
            skipTo = undefined, $(this)[_0x5a73ca(0x23f)](_0x5a73ca(0x338))[_0x5a73ca(0x29e)](_0x5a73ca(0x34f)) !== '' && (skipTo = $(this)[_0x5a73ca(0x23f)](_0x5a73ca(0x338))[_0x5a73ca(0x29e)](_0x5a73ca(0x34f))), $(this)[_0x5a73ca(0x23f)](_0x5a73ca(0x30b))[_0x5a73ca(0x255)](_0x5a73ca(0x24f)) && (answer = $(this)['parents'](_0x5a73ca(0x30b))[_0x5a73ca(0x255)](_0x5a73ca(0x24f)), selections = selections[_0x5a73ca(0x27c)](_0xd8155f => _0xd8155f[_0x5a73ca(0x2f8)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5a73ca(0x27c)](_0x2438d8 => _0x2438d8['step'] !== skipTo - 0x2), selections[_0x5a73ca(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5a73ca(0x324)](_0x4f2528 => _0x4f2528[_0x5a73ca(0x2f8)] === x), selections[objIndex][_0x5a73ca(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5a73ca(0x237)] = x));
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))['find'](_0x18a713(0x334))[_0x18a713(0x233)](function(_0x6c9177) {
            const _0x2db5df = _0x18a713;
            $(this)[_0x2db5df(0x24a)]() !== '' ? validateEmail($(this)['val'](), $(this)[_0x2db5df(0x29e)]('block-domain'), $(this)[_0x2db5df(0x255)](_0x2db5df(0x33e))) : (emailFilled = ![], unfilledArr[_0x2db5df(0x2f4)]({ 'input': $(this)[_0x2db5df(0x255)](_0x2db5df(0x33e)) }));
        }), $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x27a))[_0x18a713(0x233)](function(_0x2d8d59) {
            const _0x127804 = _0x18a713;
            skipTo = undefined, $(this)[_0x127804(0x23f)](_0x127804(0x338))[_0x127804(0x29e)](_0x127804(0x34f)) !== '' && (skipTo = $(this)['parents'](_0x127804(0x338))[_0x127804(0x29e)](_0x127804(0x34f))), $(this)[_0x127804(0x23f)](_0x127804(0x30b))[_0x127804(0x255)]('data-go-to') && (answer = $(this)['parents'](_0x127804(0x30b))['attr']('data-go-to'), selections = selections['filter'](_0x133f98 => _0x133f98[_0x127804(0x2f8)] !== x), console[_0x127804(0x22b)](_0x127804(0x2b9), selections, x), selections[_0x127804(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x127804(0x27c)](_0x657fd3 => _0x657fd3[_0x127804(0x2f8)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x127804(0x324)](_0x3e0e29 => _0x3e0e29['step'] === x), selections[objIndex][_0x127804(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x127804(0x237)] = x));
        });
    }
    $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x204))['is'](_0x18a713(0x2eb)) && (selArr = [], $(steps)[_0x18a713(0x2f0)](_0x18a713(0x27e))[_0x18a713(0x233)](function(_0x3f11fd, _0x335258) {
        const _0x186b89 = _0x18a713;
        selArr['push']({ 'selected': $(this)[_0x186b89(0x29e)](_0x186b89(0x265)) });
    }), selString = [], selArr[_0x18a713(0x309)](_0x5cfe54 => selString[_0x18a713(0x2f4)](_0x5cfe54['selected'])), $(steps[x])['find']('.active-answer-card')[_0x18a713(0x2f0)](_0x18a713(0x335))['each'](function() {
        const _0x2d4f53 = _0x18a713;
        skipTo = undefined;
        if ($(this)[_0x2d4f53(0x23f)]('[data-skip-to]')[_0x2d4f53(0x29e)](_0x2d4f53(0x34f))) skipTo = $(this)[_0x2d4f53(0x23f)]('[data-skip-to]')[_0x2d4f53(0x29e)](_0x2d4f53(0x34f));
        else $(this)[_0x2d4f53(0x29e)](_0x2d4f53(0x34f)) && (skipTo = $(this)[_0x2d4f53(0x29e)]('skip-to'));
        selections = selections[_0x2d4f53(0x27c)](_0x2cf851 => _0x2cf851['step'] !== x);
        if ($(this)[_0x2d4f53(0x29e)](_0x2d4f53(0x273))) answer = $(this)[_0x2d4f53(0x255)](_0x2d4f53(0x24f)), selections[_0x2d4f53(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x3aa347 => _0x3aa347['step'] !== skipTo - 0x2), selections[_0x2d4f53(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2d4f53(0x324)](_0x58efdf => _0x58efdf[_0x2d4f53(0x2f8)] === x), selections[objIndex][_0x2d4f53(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x);
        else $(this)['parents'](_0x2d4f53(0x30b))['data'](_0x2d4f53(0x273)) && (answer = $(this)[_0x2d4f53(0x23f)](_0x2d4f53(0x30b))[_0x2d4f53(0x29e)](_0x2d4f53(0x273)), selections[_0x2d4f53(0x2f4)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x2d4f53(0x27c)](_0x3c92fa => _0x3c92fa[_0x2d4f53(0x2f8)] !== skipTo - 0x2), selections[_0x2d4f53(0x2f4)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x387435 => _0x387435[_0x2d4f53(0x2f8)] === x), selections[objIndex][_0x2d4f53(0x34b)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2d4f53(0x237)] = x));
    }), logicExtra ? ($(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x2cb))[_0x18a713(0x2f0)](_0x18a713(0x2f5))[_0x18a713(0x29e)]('radio-skip') === !![] || $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x222))[_0x18a713(0x29e)](_0x18a713(0x33f)) === !![]) && (skip && selections[_0x18a713(0x27c)](_0x29194a => _0x29194a[_0x18a713(0x2f8)] === x)['length'] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x320))[_0x18a713(0x29e)]('radio-delay')))) : $(steps[x])[_0x18a713(0x2f0)]('[data-radio-skip]:visible')[_0x18a713(0x29e)](_0x18a713(0x33f)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x18a713(0x2f0)](_0x18a713(0x320))[_0x18a713(0x29e)](_0x18a713(0x2fc)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function _0x59c7() {
    const _0x4aa676 = ['[data-conditional-result]', '[data-input-reveal]:not(:visible)', 'data-input-field', '[data-card=\x22true\x22]', 'data', 'data-name', '[data-display=\x22', '55236VxYkyG', 'referrer', 'input[type=\x22radio\x22]:checked', 'addClass', 'relationship-', '[data-radio-skip=\x22true\x22]', '[data-selection]', '[data-form=\x22next-btn\x22]', 'input-reveal-value', 'novalidate', 'redirect', 'textarea[name=\x22', 'Please\x20wait...', 'querySelectorAll', 'script', '[data-clone]', '[data-redirect-delay]', 'translateX(0rem)', 'select[name=\x22', '[data-clickable-all]', 'input:checkbox', 'key', '.w-radio-input', '\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20flex-direction:\x20column;\x0a\x20\x20height:\x20100vh;\x0a\x20\x20height:\x20100%\x20!important;\x0a\x20\x20width:\x2035%;\x0a\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20top:\x200;\x0a\x20\x20left:\x200;\x0a\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20max-height:\x20100vh;\x0a\x20\x20padding:\x2032px;\x0a\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20font-size:\x2015px;\x0a\x20\x20display:\x20flex;\x0a\x20\x20overflow:\x20auto;\x0a\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a}\x0a.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a.f-title\x20{\x0a\x20\x20color:\x20#fff;\x0a\x20\x20font-size:\x2018px;\x0a\x20\x20font-weight:\x20700;\x0a}\x0a\x0a.f-text_attribute-title\x20{\x0a\x20\x20color:\x20#fff;\x0a\x20\x20font-size:\x2015px;\x0a\x20\x20font-weight:\x20600;\x0a}\x0a\x0a.f-div_attribute\x20{\x0a\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20flex-direction:\x20column;\x0a\x20\x20margin-bottom:\x2014px;\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20justify-content:\x20flex-start;\x0a\x20\x20align-items:\x20flex-start;\x0a\x20\x20margin-bottom:\x200;\x0a}\x0a\x0a.icon-embed-xxsmall\x20{\x0a\x20\x20color:\x20#1eee32;\x0a\x20\x20flex-direction:\x20column;\x0a\x20\x20justify-content:\x20center;\x0a\x20\x20align-items:\x20center;\x0a\x20\x20width:\x201rem;\x0a\x20\x20height:\x201rem;\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.f-div_title\x20{\x0a\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20justify-content:\x20space-between;\x0a\x20\x20align-items:\x20center;\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.icon-embed-xxsmall-2\x20{\x0a\x20\x20color:\x20#ff3232;\x0a\x20\x20flex-direction:\x20column;\x0a\x20\x20justify-content:\x20center;\x0a\x20\x20align-items:\x20center;\x0a\x20\x20width:\x201rem;\x0a\x20\x20height:\x201rem;\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.f-section-header\x20{\x0a\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20flex-direction:\x20column;\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.paragraph\x20{\x0a\x20\x20margin-bottom:\x200;\x0a}\x0a\x0a.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20color:\x20#fff;\x0a}\x0a\x0a.hide\x20{\x0a\x20\x20display:\x20none;\x0a}\x0a\x0a.f-text_type\x20{\x0a\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20justify-content:\x20flex-start;\x0a\x20\x20align-items:\x20center;\x0a\x20\x20padding:\x2010px;\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.f-text_type._1\x20{\x0a\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20flex-flow:\x20column;\x0a\x20\x20justify-content:\x20flex-start;\x0a\x20\x20align-items:\x20flex-start;\x0a}\x0a\x0a.f-text_script\x20{\x0a\x20\x20color:\x20#fffc57;\x0a\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20font-size:\x2011px;\x0a}\x0a\x0a.f-section-wrapper\x20{\x0a\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20flex-flow:\x20column;\x0a\x20\x20display:\x20flex;\x0a}\x0a\x0a.f-link\x20{\x0a\x20\x20color:\x20#fff;\x0a}\x0a\x0a.f-support-title{\x0a\x20\x20color:\x20#fff;\x0a\x20\x20font-size:\x201.5rem;\x0a\x20\x20font-weight:\x20500;\x0a\x20\x20line-height:\x201.2;\x0a}\x0a\x0a.f-closebtn{\x0a\x20\x20position:\x20fixed;\x0a\x20\x20top:\x200.3rem;\x0a\x20\x20right:\x200.7rem;\x0a\x20\x20color:\x20white;\x0a\x20\x20text-decoration:\x20none;\x0a\x20\x20font-size:\x2022px;\x0a}\x0a', 'selections\x20email', 'getElementById', 'checked', 'getResponse', '10muaCYi', 'span', 'f-hide', 'now', 'success', '[data-reset-delay]', '[data-display-index=\x22', '\x22]\x20textarea', 'wait', 'trim', 'timestamp', '[data-add-new]', '[data-btn=\x22reset\x22]', 'show', '.active-answer-card', 'FormlyLogic\x20enabled', '[type=\x22radio\x22]', '496aFJRyC', 'cookie', 'DateTimeFormat', 'submit', 'test', 'required', 'focus', '[data-callback=\x22recaptcha\x22]', '[data-form=\x22step\x22][data-card]', 'radio', 'history', 'count-card', 'metaKey', 'input[type=\x22submit\x22]', 'offset', '[data-display-input]', 'input[name=\x22', 'ctrlKey', 'input:radio[required]', '\x22][data-input-reveal-value]', '[data-query-param]', '[data-input-target=\x22', 'hide', '\x22]:checked', 'select[required]', ':input[type=\x22checkbox\x22][required]', 'every', 'data-form', 'edit-step', ':checked', 'redirect-form-hehexd', 'stringify', 'getItem', '[data-display-input=\x22', 'find', 'change', ':input[type=\x22number\x22][required]', 'keyCode', 'push', '[data-radio-skip]:visible', 'input-field', 'textarea[required]', 'step', '[data-form=\x22custom-progress-indicator\x22]', '[data-form=\x22multistep\x22]', 'siblings', 'radio-delay', '[aria-label=\x22Remove\x20file\x22]', '[data-weighted-selection-range]', ':input[type=\x22file\x22][required]', '\x20seconds', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20https://cdn.jsdelivr.net/gh/videsigns/webflow-tools@latest/multi-step.js<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Before\x20&lt;/body\x20&gt;tag<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Inside\x20&lt;head\x20&gt;tag<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x205</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</svg>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>List\x20those\x20elements\x20here</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>List\x20those\x20elements\x20here</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>other\x20rules</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>List\x20those\x20elements\x20here</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a', 'ix2', '2759180SHWXzf', '[data-text=\x22total-steps\x22]', 'data-show-if', '[data-selection-weight]', 'form[data-form=\x22multistep\x22]\x20:input', '[data-form=\x22submit-btn\x22]', 'forEach', '[type=\x22checkbox\x22]', '[data-go-to]', 'closest', 'join', '[data-answer=\x22', '[data-clickable]', 'last', 'debug-mode', 'data-radio-delay', 'resolvedOptions', 'input', '[data-form=\x22step\x22]', '\x22]\x20[data-input-field^=\x22', 'preventDefault', 'inputName', 'searchParams', '[data-cms-select=text]', 'redirect-delay', 'click-addclass', 'block-domain', 'textarea:focus', ':input[type=\x22date\x22]', '[data-radio-delay]', '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>', '[data-click-addclass]', '\x22][data-input-reveal-value=\x22*\x22]', 'findIndex', 'parent', 'selection', '[required]', 'first', 'logic-extra', '[data-form=\x22submit-btn\x22]:visible', '[data-success-card=\x22', ':input[type=\x22date\x22][required]', 'f-show', 'init', 'css', ':input[type=\x22checkbox\x22]', 'nonvalidated', 'destroy', 'length', ':input[type=\x22email\x22][required]', ':input[type=\x27radio\x27]:checked', 'parse', 'new-tab', '[data-skip-to]', 'pageLoadTime', '[data-add-new-input=\x22', '[data-selection=\x22', 'select[required]:visible', 'not', 'name', 'radio-skip', 'auto', '591388InYqKo', 'some', 'remove', 'head', 'pushState', '[data-btn=\x22check\x22]', '[data-cms-select=input]', 'none', '[data-text=\x22error-message\x22]', 'option[value=\x22', 'skipTo', 'type', '4643670rWIcoY', 'select:not([data-prefill=\x22false\x22])', 'skip-to', '[data-input-field=\x22', 'input[type=\x22text\x22][required]:visible', '[data-clone=\x22', '[data-input-field]', 'formlyLastStep', 'input[autofocus]', 'formly-support', ':input[type=\x22checkbox\x22][required]:checked', '[data-add-new=\x22', '[data-range]:contains(', '<br>Data\x20Go\x20To\x20=\x20', 'clone-input', 'clickable-all', ':input[type=\x22url\x22][required]', '[data-input-reveal=\x22', '[data-clone-input-wrapper]', 'max-checkbox', 'scroll-top-offset', 'active-answer-card', 'open', '[data-enter]', 'true', 'click-path', 'stopPropagation', '72018tTXywL', '[data-count-card]', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'children', 'clicked', ':first', ':input', 'counter', '79469jSooXM', 'div.g-recaptcha', 'querySelector', 'translateX(-40rem)', 'checkbox', 'min-character', '[data-clone-input]', 'input-reveal', '[data-radio-skip]', ':input[type=\x22tel\x22]', 'createElement', 'transform', 'form[data-form=\x22multistep\x22]', 'PASS', 'Basic\x20(No\x20Formly\x20Logic)', 'search', 'input[type=\x22radio\x22][name=\x22', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'card', '[data-clone-wrapper=\x22', '\x22]\x20select', 'time-zone', ':input[type=\x22file\x22]', 'add-new-input', '0.4', ':input[type=\x22radio\x22]', '[data-clone-input=\x22', 'prop', '<br>Data\x20Answer\x20=\x20', 'div', 'style', 'post', 'parentNode', 'select-multiple', '[data-answer]', 'reset', 'videsigns', '[data-display-input-wrapper=\x22', 'disabled', 'slice', 'filledInput', 'textarea', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', 'AND', '3482563KbWDHC', 'timeZone', 'multistep', '[data-form=\x22remove-clone\x22]', 'textarea[autofocus]', '[data-checkbox]', 'button', '[data-hidden-input=\x22page-visit-duration\x22]', 'w--redirected-checked', '[data-text=\x22current-step\x22]', 'index', '[data-answer][data-radio-skip]:visible', '\x22][value=\x22', 'innerHTML', '[data-input-target]', 'value', 'round', '[data-weighted-selection]', 'text', '6rKysWT', 'log', 'last-step', 'toString', 'removeItem', 'query-param', 'keypress', 'submit-show', ':input[type=\x22number\x22]', 'each', 'input:radio[name=\x22', '[data-custom-error-message]', 'current', 'backTo', 'custom-error-message', '[data-add-new-input]', 'tagName', 'N/A', 'scroll-top', ':input[type=\x22time\x22]', 'get', 'parents', 'phone-autoformat', '[data-select-multiple]', '[data-form=\x22back-btn\x22]', 'getElementsByTagName', '.w-form-done', ':input[type=\x22text\x22]', ':input[required]', 'substring', 'input[type=\x22checkbox\x22][name=\x22', 'click', 'val', 'formlyLastStepAnswer', '[data-form=\x22progress-indicator\x22]', '[type=\x22submit\x22]', 'https://videsigns-staging.co.uk/formly-counter', 'data-go-to', 'trigger', 'field', '[data-max-checkbox]', 'quiz', 'toISOString', 'attr', '[data-display]', 'src', 'startsWith', '_blank', 'display', 'toLowerCase', 'phone-validation', '[data-form=\x22remove-input-clone\x22]', 'select', 'removeClass', 'href', 'screen', '.w-checkbox-input', 'data-skip-to', 'dispatchEvent', 'selected', 'error', '[data-input-index=\x22', '[data-form-ms=\x22submit-btn\x22]', 'add-new-limit', '[data-memory]', '[data-display-wrapper=\x22', '[data-enter=\x22true\x22]', 'appendChild', ':input[type=\x22password\x22][required]', '[data-last-step]', '[data-selection=\x22other\x22]', 'location', '\x22]\x20input', 'go-to', '\x22]:not([data-prefill=\x22false\x22])', '[data-show-if]', 'includes', ':input[type=\x22text\x22][required]', 'FAIL', 'slow', ':input[type=\x22email\x22]', 'weighted-selection', 'filter', 'split', '[data-selected]:checked', ':input[type=\x22time\x22][required]', 'replace', '[data-quiz]', 'f-mySidenav', '[data-input-reveal]', 'https://webflow.com/api/v1/form/', '[data-form=\x22progress\x22]', 'url', 'animate', '[data-form=\x22submit\x22]:visible', 'Webflow', 'add-new-input-limit', '[data-display-input-index=\x22', '[data-hidden-input=\x22', 'user-agent', '\x22]\x20[data-clone-input=\x22', 'setItem', 'append', '[data-form=\x22next-btn\x22][data-submit-show]', ':input[type=\x22tel\x22][required]', '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>', 'fadeIn', 'remove-upload', 'clone', '[data-clone-input-wrapper=\x22', '[data-submit=\x22true\x22]', 'param-analytics'];
    _0x59c7 = function() { return _0x4aa676; };
    return _0x59c7();
}

function displayErrorMessage() {
    const _0x5afc74 = _0x2813a2;
    $('[data-text=\x22error-message\x22]')[_0x5afc74(0x2e4)](), unfilledArr[_0x5afc74(0x333)] > 0x0 && unfilledArr[_0x5afc74(0x309)](function(_0x4004f3) {
        const _0x460ad9 = _0x5afc74;
        $(_0x460ad9(0x2de) + _0x4004f3['input'] + '\x22]')[_0x460ad9(0x2fb)]('[data-text=\x22error-message\x22]')[_0x460ad9(0x294)](), $(_0x460ad9(0x2de) + _0x4004f3[_0x460ad9(0x314)] + '\x22]')['parents']()[_0x460ad9(0x36b)]('[data-text=\x22error-message\x22]')['fadeIn'](), $(_0x460ad9(0x2ac) + _0x4004f3[_0x460ad9(0x314)] + '\x22]')[_0x460ad9(0x2fb)](_0x460ad9(0x349))['fadeIn'](), $(_0x460ad9(0x2b3) + _0x4004f3[_0x460ad9(0x314)] + '\x22]')[_0x460ad9(0x2fb)]('[data-text=\x22error-message\x22]')['fadeIn']();
    });
}

function resetInputErrorMessage(_0x45d5db) {
    const _0xc3ebf4 = _0x2813a2;
    $(_0xc3ebf4(0x2de) + _0x45d5db + '\x22]')[_0xc3ebf4(0x2fb)](_0xc3ebf4(0x349))[_0xc3ebf4(0x2e4)](), $('input[name=\x22' + _0x45d5db + '\x22]')[_0xc3ebf4(0x23f)]()[_0xc3ebf4(0x36b)](_0xc3ebf4(0x349))[_0xc3ebf4(0x2e4)](), $(_0xc3ebf4(0x2ac) + _0x45d5db + '\x22]')['siblings'](_0xc3ebf4(0x349))[_0xc3ebf4(0x2e4)](), $(_0xc3ebf4(0x2b3) + _0x45d5db + '\x22]')[_0xc3ebf4(0x2fb)](_0xc3ebf4(0x349))[_0xc3ebf4(0x2e4)]();
}

function increaseCurstep() {
    const _0x27747f = _0x2813a2;
    countCard ? (curStep = curStep + 0x1, $(_0x27747f(0x304))[_0x27747f(0x229)](steps[_0x27747f(0x333)])) : $(steps[x])['data'](_0x27747f(0x1fd)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0x27747f(0x220))[_0x27747f(0x229)](curStep);
}

function decreaseCurstep() {
    const _0x17cc1f = _0x2813a2;
    countCard ? (curStep = curStep - 0x1, $(_0x17cc1f(0x304))[_0x17cc1f(0x229)](steps[_0x17cc1f(0x333)])) : $(steps[x])[_0x17cc1f(0x29e)]('card') ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $('[data-text=\x22current-step\x22]')['text'](curStep);
}
$(_0x2813a2(0x308))['on'](_0x2813a2(0x249), function(_0x124afa) {
    const _0x56ffdc = _0x2813a2;
    _0x124afa[_0x56ffdc(0x317)](), _0x124afa['stopPropagation']();
    $(this)[_0x56ffdc(0x29e)](_0x56ffdc(0x2ab)) && (redirectTo = $(this)[_0x56ffdc(0x29e)](_0x56ffdc(0x2ab)));
    !$(this)[_0x56ffdc(0x29e)](_0x56ffdc(0x337)) && (newTab = $(this)[_0x56ffdc(0x29e)]('new-tab'));
    successCard = $(this)[_0x56ffdc(0x29e)](_0x56ffdc(0x2c1));
    const _0x2513f0 = new URLSearchParams(window[_0x56ffdc(0x271)][_0x56ffdc(0x1fa)]),
        _0x1f3a44 = (_0x597aa8, _0x541377) => {
            const _0x3645e5 = _0x56ffdc,
                _0x1bd8d1 = document[_0x3645e5(0x372)](_0x3645e5(0x28c) + _0x597aa8 + '\x22]');
            _0x1bd8d1 && (_0x1bd8d1[_0x3645e5(0x226)] = _0x541377);
        };
    _0x1f3a44(_0x56ffdc(0x2a2), _0x2513f0[_0x56ffdc(0x23e)](_0x56ffdc(0x2a2)) || document[_0x56ffdc(0x2a2)] || 'Direct'), _0x1f3a44(_0x56ffdc(0x28d), navigator['userAgent']), _0x1f3a44(_0x56ffdc(0x2c7), new Date()[_0x56ffdc(0x254)]()), _0x1f3a44(_0x56ffdc(0x200), Intl[_0x56ffdc(0x2d0)]()[_0x56ffdc(0x313)]()[_0x56ffdc(0x218)]), _0x1f3a44('screen-resolution', window[_0x56ffdc(0x261)]['width'] + 'x' + window[_0x56ffdc(0x261)]['height']), _0x1f3a44(_0x56ffdc(0x366), _0x56ffdc(0x23b));
    const _0x53084e = () => {
        const _0x1d649d = _0x56ffdc,
            _0x13f4a2 = document[_0x1d649d(0x372)](_0x1d649d(0x21e));
        if (_0x13f4a2) {
            const _0x265740 = localStorage['getItem'](_0x1d649d(0x339));
            console[_0x1d649d(0x22b)](_0x265740);
            if (_0x265740) {
                const _0x2e10c7 = Math[_0x1d649d(0x227)]((Date[_0x1d649d(0x2c0)]() - parseInt(_0x265740)) / 0x3e8);
                _0x13f4a2[_0x1d649d(0x226)] = _0x2e10c7 + _0x1d649d(0x300);
            } else _0x13f4a2['value'] = _0x1d649d(0x23b);
        }
    };
    _0x53084e(), logicExtra && fill && ($(this)['prop'](_0x56ffdc(0x2aa), !![]), $(steps)[_0x56ffdc(0x2f0)](_0x56ffdc(0x36e))[_0x56ffdc(0x206)](_0x56ffdc(0x2d3), ![]), console[_0x56ffdc(0x22b)](_0x56ffdc(0x331))), localStorage[_0x56ffdc(0x22e)]('filledInput'), localStorage[_0x56ffdc(0x22e)]('pageLoadTime'), fill ? ($(this)[_0x56ffdc(0x29e)](_0x56ffdc(0x2c5)) ? (console['log']($(this)['data'](_0x56ffdc(0x2c5))), $(this)['text']($(this)[_0x56ffdc(0x29e)]('wait'))) : $(this)[_0x56ffdc(0x24a)](_0x56ffdc(0x2ad))[_0x56ffdc(0x229)](_0x56ffdc(0x2ad)), $(_0x56ffdc(0x2fa))[_0x56ffdc(0x2d1)](), $('div.g-recaptcha')[_0x56ffdc(0x333)] > 0x0 && (grecaptcha[_0x56ffdc(0x2bc)]()['length'] === 0x0 && (form[_0x56ffdc(0x2f0)](_0x56ffdc(0x308))[_0x56ffdc(0x229)](oldSubmitText), form[_0x56ffdc(0x2f0)](_0x56ffdc(0x308))[_0x56ffdc(0x24a)](oldSubmitText))), customError && $(_0x56ffdc(0x349))[_0x56ffdc(0x2e4)]()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x2fdfbb = _0x2813a2;
    customError ? ($(_0x2fdfbb(0x349))[_0x2fdfbb(0x2e4)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0x2fdfbb(0x333)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x30e3cc = _0x2813a2;
    customError && $('[data-text=\x22error-message\x22]')[_0x30e3cc(0x2e4)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x30e3cc(0x25f)](_0x30e3cc(0x236)), selections['filter'](_0xdf2951 => _0xdf2951[_0x30e3cc(0x34b)] === x)[_0x30e3cc(0x333)] > 0x0 ? x = parseInt(getSafe(() => selections[_0x30e3cc(0x27c)](_0x37b7fb => _0x37b7fb[_0x30e3cc(0x34b)] === x)[0x0][_0x30e3cc(0x237)])) : x--, updateStep()), ($(steps[x])[_0x30e3cc(0x2f0)](_0x30e3cc(0x2f5))['data']('radio-skip') === !![] || $(steps[x])[_0x30e3cc(0x2f0)](_0x30e3cc(0x2cb))[_0x30e3cc(0x2f0)](_0x30e3cc(0x2f5))[_0x30e3cc(0x29e)]('radio-skip') === !![] || $(steps[x])[_0x30e3cc(0x2f0)](_0x30e3cc(0x222))[_0x30e3cc(0x29e)]('radio-skip') === !![]) && (all_data = all_data[_0x30e3cc(0x27c)](_0x3b6abc => _0x3b6abc[_0x30e3cc(0x251)] !== $(steps[x])[_0x30e3cc(0x2f0)](_0x30e3cc(0x2a3))[_0x30e3cc(0x255)](_0x30e3cc(0x33e))), $('[data-input-field=\x22' + $(steps[x])[_0x30e3cc(0x2f0)](_0x30e3cc(0x2a3))[_0x30e3cc(0x255)](_0x30e3cc(0x33e)) + '\x22]')[_0x30e3cc(0x2e4)](), $(steps[x])['find']('input[type=\x22radio\x22]')['prop']('checked', ![]), $(steps[x])[_0x30e3cc(0x2f0)]('.w-form-formradioinput')[_0x30e3cc(0x25f)](_0x30e3cc(0x21f)), validation());
}
weightedSelectionRange && $(_0x2813a2(0x2a7))['each'](function() {
    const _0x422390 = _0x2813a2;
    $(this)[_0x422390(0x290)](_0x422390(0x321) + $(this)[_0x422390(0x29e)](_0x422390(0x326)) + '</div>');
});

function selectionQuiz() {
    const _0x5a72d0 = _0x2813a2;
    if ($(this)[_0x5a72d0(0x2f0)](_0x5a72d0(0x346))) {
        $('[data-selection]')[_0x5a72d0(0x2e4)](), $(_0x5a72d0(0x306))['hide']();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x5a72d0(0x309)](function(_0x53234f) { selTotal = selTotal + _0x53234f['selected']; }), $('[data-text=\x22total-weight\x22]')['text'](selTotal);
            if ($('[data-selection=\x22' + selTotal + '\x22]')[_0x5a72d0(0x333)] > 0x0) $(_0x5a72d0(0x33b) + selTotal + '\x22]')[_0x5a72d0(0x294)]();
            else $('[data-range]:contains(' + selTotal + ')') ? $(_0x5a72d0(0x359) + selTotal + ')')[_0x5a72d0(0x325)](_0x5a72d0(0x2a7))['eq'](0x0)[_0x5a72d0(0x2ca)]() : $(_0x5a72d0(0x270))[_0x5a72d0(0x294)]();
        } else {
            let _0x17cebb = -0x1,
                _0x1c9068 = [];
            $(_0x5a72d0(0x2a7))[_0x5a72d0(0x233)](function(_0x1ead12) {
                const _0x539ead = _0x5a72d0;
                $($(_0x539ead(0x2a7))[_0x1ead12])[_0x539ead(0x29e)](_0x539ead(0x326))[_0x539ead(0x276)](selString[_0x539ead(0x30d)]()) && (_0x17cebb = _0x1ead12, _0x1c9068[_0x539ead(0x2f4)](_0x1ead12));
            }), multiSelections ? _0x1c9068['length'] > 0x0 ? _0x1c9068['forEach'](_0x225149 => {
                const _0x196a01 = _0x5a72d0;
                $($(_0x196a01(0x2a7))[_0x225149])[_0x196a01(0x294)]();
            }) : $(_0x5a72d0(0x270))[_0x5a72d0(0x294)]() : _0x17cebb > -0x1 ? $($(_0x5a72d0(0x2a7))[_0x17cebb])[_0x5a72d0(0x294)]() : $('[data-selection=\x22other\x22]')[_0x5a72d0(0x294)]();
        }
    }
}

function triggerInputAllData() {
    const _0x3ff5be = _0x2813a2;
    if (savedFilledInput && memory) savedFilledInput['forEach'](_0x5cdc22 => {
        const _0x6a6aad = _0x34af;
        var _0x7772ec = $(_0x6a6aad(0x2de) + _0x5cdc22[_0x6a6aad(0x318)] + _0x6a6aad(0x223) + _0x5cdc22[_0x6a6aad(0x226)] + _0x6a6aad(0x274)),
            _0xbd332c = $('input[name=\x22' + _0x5cdc22[_0x6a6aad(0x318)] + '\x22]:not([data-prefill=\x22false\x22])'),
            _0xea846c = $(_0x6a6aad(0x2ac) + _0x5cdc22[_0x6a6aad(0x318)] + _0x6a6aad(0x274)),
            _0x34c394 = $(_0x6a6aad(0x248) + _0x5cdc22['inputName'] + '\x22]'),
            _0x58bf3f = $(_0x6a6aad(0x1fb) + _0x5cdc22[_0x6a6aad(0x318)] + _0x6a6aad(0x223) + _0x5cdc22['value'] + _0x6a6aad(0x274));
        if (_0x7772ec[_0x6a6aad(0x255)](_0x6a6aad(0x34c)) !== 'file') {
            if (_0x7772ec[_0x6a6aad(0x255)]('type') === _0x6a6aad(0x2d7) && !_0x7772ec[_0x6a6aad(0x23f)](_0x6a6aad(0x1f3))[_0x6a6aad(0x29e)](_0x6a6aad(0x33f))) _0x7772ec['click'](), _0x7772ec[_0x6a6aad(0x2fb)](_0x6a6aad(0x2b7))['addClass']('w--redirected-checked'), _0x7772ec['trigger'](_0x6a6aad(0x314));
            else _0x5cdc22[_0x6a6aad(0x226)] === 'on' ? (_0xbd332c['click'](), _0xbd332c['siblings'](_0x6a6aad(0x262))['addClass']('w--redirected-checked'), _0xbd332c[_0x6a6aad(0x250)](_0x6a6aad(0x314))) : (_0xbd332c[_0x6a6aad(0x24a)](_0x5cdc22[_0x6a6aad(0x226)]), _0xea846c[_0x6a6aad(0x24a)](_0x5cdc22['value']), $(_0x6a6aad(0x34e))[_0x6a6aad(0x2f0)](_0x6a6aad(0x34a) + _0x5cdc22[_0x6a6aad(0x226)] + '\x22]')[_0x6a6aad(0x206)]('selected', !![]), _0xbd332c[_0x6a6aad(0x250)](_0x6a6aad(0x314)), _0xbd332c[_0x6a6aad(0x250)](_0x6a6aad(0x2f1)));
            const _0x51ecc9 = _0x58bf3f['data'](_0x6a6aad(0x31c)),
                _0x2d510a = _0x34c394['data'](_0x6a6aad(0x31c));
            _0x58bf3f['parent']()[_0x6a6aad(0x2a4)](_0x51ecc9), _0x34c394[_0x6a6aad(0x325)]()[_0x6a6aad(0x2a4)](_0x2d510a);
        }
    });
    else _params && (getParams(), searchQ[_0x3ff5be(0x309)](_0x10b21e => {
        const _0x68898f = _0x3ff5be;
        if ($(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x318)] + _0x68898f(0x223) + _0x10b21e[_0x68898f(0x226)] + _0x68898f(0x274))['attr']('type') !== 'file') {
            if ($(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x223) + _0x10b21e[_0x68898f(0x24a)] + _0x68898f(0x274))[_0x68898f(0x255)](_0x68898f(0x34c)) === _0x68898f(0x2d7)) $(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x2b6)] + '\x22][value=\x22' + _0x10b21e[_0x68898f(0x24a)] + _0x68898f(0x274))[_0x68898f(0x249)](), $(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x223) + _0x10b21e[_0x68898f(0x24a)] + _0x68898f(0x274))[_0x68898f(0x2fb)]('.w-radio-input')[_0x68898f(0x2a4)](_0x68898f(0x21f)), $(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x223) + _0x10b21e[_0x68898f(0x24a)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x68898f(0x250)](_0x68898f(0x314));
            else _0x10b21e[_0x68898f(0x24a)] === 'on' ? ($(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x274))['click'](), $('input[name=\x22' + _0x10b21e['key'] + _0x68898f(0x274))[_0x68898f(0x2fb)](_0x68898f(0x262))[_0x68898f(0x2a4)](_0x68898f(0x21f)), $(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x2b6)] + '\x22]')[_0x68898f(0x250)](_0x68898f(0x314))) : ($('input[name=\x22' + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x274))[_0x68898f(0x24a)](_0x10b21e[_0x68898f(0x24a)]), $(_0x68898f(0x2ac) + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x274))[_0x68898f(0x24a)](_0x10b21e['val']), $('select[name=\x22' + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x274))['find'](_0x68898f(0x34a) + _0x10b21e[_0x68898f(0x24a)] + '\x22]')[_0x68898f(0x206)](_0x68898f(0x265), !![]), $(_0x68898f(0x2de) + _0x10b21e['key'] + _0x68898f(0x274))[_0x68898f(0x250)](_0x68898f(0x314)), $(_0x68898f(0x2de) + _0x10b21e[_0x68898f(0x2b6)] + _0x68898f(0x274))[_0x68898f(0x250)](_0x68898f(0x2f1)));
        }
    }));
}
$(_0x2813a2(0x2a8))['on'](_0x2813a2(0x249), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x2813a2(0x242))['on']('click', function() { next = ![], back = !![], backStep(); }), $(steps)[_0x2813a2(0x2f0)](_0x2813a2(0x36e))[_0x2813a2(0x33d)](_0x2813a2(0x2cd))['on'](_0x2813a2(0x314), function(_0x29456f) { validation(), andLogic(), addClickClass(); }), $(steps)['find']('input[type=\x22radio\x22]')['on'](_0x2813a2(0x249), function() { skip = !![], validation(), addClickClass(); });
$(_0x2813a2(0x2b4))[_0x2813a2(0x29e)](_0x2813a2(0x35c)) ? $('[data-form=\x22custom-progress-indicator\x22]')[_0x2813a2(0x25f)]('disabled') : $(_0x2813a2(0x2f9))['addClass'](_0x2813a2(0x211));

function clickableIndicator() {
    const _0x4332f1 = _0x2813a2;
    $(_0x4332f1(0x30f))[_0x4332f1(0x29e)]('clickable') && ($('[data-form=\x22progress-indicator\x22]')[_0x4332f1(0x25f)]('current'), $(_0x4332f1(0x30f))['data']('clickable-all') ? (x = $(this)['index'](), updateStep()) : $(this)['index']() <= progress && (x = $(this)[_0x4332f1(0x221)](), updateStep())), $('[data-text=\x22current-step\x22]')[_0x4332f1(0x229)](x + 0x1);
}
$(_0x2813a2(0x2f9))['on'](_0x2813a2(0x249), clickableIndicator), excludeCount = !$(_0x2813a2(0x2fa))['data'](_0x2813a2(0x2d9)), steps['each'](function(_0xac29d0) {
    const _0x180366 = _0x2813a2,
        _0x4a0e9e = $(this)[_0x180366(0x29e)](_0x180366(0x1fd));
    console[_0x180366(0x22b)](excludeCount), _0x4a0e9e && excludeCount && $(_0x180366(0x2f9))['eq'](_0xac29d0)['hide']();
});
$('[data-form=\x22multistep\x22]')[_0x2813a2(0x29e)](_0x2813a2(0x311)) && ($(_0x2813a2(0x30b))['each'](function() {
    const _0x556d34 = _0x2813a2;
    $(this)[_0x556d34(0x290)](_0x556d34(0x35a), $(this)[_0x556d34(0x29e)](_0x556d34(0x273)));
}), $('[data-answer]')[_0x2813a2(0x233)](function() {
    const _0x4f530f = _0x2813a2;
    $(this)[_0x4f530f(0x290)](_0x4f530f(0x207), $(this)[_0x4f530f(0x29e)]('answer'));
}));

function resetFormly() {
    const _0x34de31 = _0x2813a2;
    $(_0x34de31(0x2fa))[_0x34de31(0x250)](_0x34de31(0x20e)), $(_0x34de31(0x2fa))[_0x34de31(0x23f)]()[_0x34de31(0x2f0)](_0x34de31(0x244))[_0x34de31(0x2e4)](), x = 0x0, updateStep(), $(_0x34de31(0x2fa))[_0x34de31(0x2ca)](), $(_0x34de31(0x308))[_0x34de31(0x229)](oldSubmitText), $(_0x34de31(0x308))[_0x34de31(0x24a)](oldSubmitText), $(_0x34de31(0x220))['text'](0x1), $(_0x34de31(0x2fa))[_0x34de31(0x2f0)](_0x34de31(0x2b5))['siblings'](_0x34de31(0x262))[_0x34de31(0x25f)]('w--redirected-checked');
}
$(document)['ajaxComplete'](function(_0x3cdec1, _0x1329a8, _0x19e3ef) {
    const _0x288a5d = _0x2813a2;
    if (_0x19e3ef[_0x288a5d(0x286)]['includes'](_0x288a5d(0x284))) {
        const _0x2abee8 = _0x1329a8['status'] === 0xc8,
            _0x12199f = _0x288a5d(0x2ec);
        redirectTo && _0x2abee8 && (newTab ? window[_0x288a5d(0x363)](redirectTo, _0x288a5d(0x259)) : setTimeout(() => {
            const _0x29a4b3 = _0x288a5d;
            location[_0x29a4b3(0x260)] = redirectTo;
        }, redirectDelay)), _0x2abee8 && successCard !== '' && $(_0x288a5d(0x32b) + successCard + '\x22]')['fadeIn'](), _0x2abee8 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x2abee8 && ($(_0x288a5d(0x308))[_0x288a5d(0x24a)](_0x288a5d(0x2ad)), $(_0x288a5d(0x308))['text'](_0x288a5d(0x2ad)));
    }
}), $('[data-btn=\x22edit\x22]')['on'](_0x2813a2(0x249), function() {
    const _0x36d5dc = _0x2813a2;
    var _0x29f03b = $(this)[_0x36d5dc(0x325)]()[_0x36d5dc(0x2f0)](_0x36d5dc(0x353))[_0x36d5dc(0x29e)](_0x36d5dc(0x2f6));
    setTimeout(function() {
        const _0x473642 = _0x36d5dc;
        $(_0x473642(0x2de) + _0x29f03b + '\x22]')[_0x473642(0x2d4)]();
    }, 0x64), back = !![], x = $(this)[_0x36d5dc(0x29e)](_0x36d5dc(0x2ea)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $('[data-text=\x22total-steps\x22]')[_0x36d5dc(0x229)](steps[_0x36d5dc(0x333)])) : $(steps[x])['data']('card') ? curStep = x + 0x0 : curStep = x + 0x1, $('[data-text=\x22current-step\x22]')[_0x36d5dc(0x229)](curStep), back = ![];
}), $(_0x2813a2(0x2c9))['on'](_0x2813a2(0x249), function() {
    const _0x5df9f0 = _0x2813a2;
    $(_0x5df9f0(0x2fa))[_0x5df9f0(0x250)](_0x5df9f0(0x20e));
    let _0x5109fc = $(this);
    $(this)[_0x5df9f0(0x229)](_0x5df9f0(0x2ad)), setTimeout(function() {
        const _0x21f292 = _0x5df9f0;
        $(_0x5109fc)['text'](oldResetText), $(_0x5109fc)[_0x21f292(0x23f)]('.w-form-done')[_0x21f292(0x2e4)](), x = 0x0, updateStep(), $('[data-form=\x22multistep\x22]')[_0x21f292(0x2ca)](), $(_0x21f292(0x308))['text'](oldSubmitText), $(_0x21f292(0x308))[_0x21f292(0x24a)](oldSubmitText), $(_0x5109fc)[_0x21f292(0x24a)](oldSubmitText), $(_0x21f292(0x220))[_0x21f292(0x229)](0x1), $('[data-form=\x22multistep\x22]')[_0x21f292(0x2f0)]('input:checkbox')['siblings']('.w-checkbox-input')[_0x21f292(0x25f)](_0x21f292(0x21f));
    }, resetDelay);
}), $('body')['on'](_0x2813a2(0x230), function(_0x4473ce) {
    const _0x4bbd3b = _0x2813a2;
    if (_0x4473ce[_0x4bbd3b(0x2f3)] === 0xd) {
        _0x4473ce[_0x4bbd3b(0x317)](), _0x4473ce[_0x4bbd3b(0x367)]();
        if ($(steps[x])['find'](_0x4bbd3b(0x214))['is'](':focus')) $(steps[x])['find']('textarea:focus')[_0x4bbd3b(0x24a)]($(steps[x])[_0x4bbd3b(0x2f0)](_0x4bbd3b(0x31e))['val']() + '\x0a');
        else $(_0x4bbd3b(0x364))[_0x4bbd3b(0x29e)]('enter') && fill && (totalSteps > curStep && $(_0x4bbd3b(0x2a8))[0x0]['click']());
    }
}), $('body')['keydown'](function(_0x4fdb47) {
    const _0x53b4e6 = _0x2813a2;
    (_0x4fdb47[_0x53b4e6(0x2da)] || _0x4fdb47[_0x53b4e6(0x2df)]) && _0x4fdb47[_0x53b4e6(0x2f3)] == 0xd && (x >= steps['length'] - 0x1 && fill ? $(steps[x])[_0x53b4e6(0x2f0)](_0x53b4e6(0x32a))[_0x53b4e6(0x249)]() : (_0x4fdb47['preventDefault'](), _0x4fdb47[_0x53b4e6(0x367)]()));
}), $(_0x2813a2(0x2fa))[_0x2813a2(0x2f0)](':input')['on'](_0x2813a2(0x2f1), function() {
    const _0x1c8908 = _0x2813a2;
    all_data = all_data[_0x1c8908(0x27c)](_0x482139 => _0x482139['field'] !== $(this)[_0x1c8908(0x255)](_0x1c8908(0x33e))), $(this)['attr'](_0x1c8908(0x34c)) === _0x1c8908(0x1ef) ? $(this)['is'](':checked') ? all_data[_0x1c8908(0x2f4)]({ 'field': $(this)[_0x1c8908(0x255)](_0x1c8908(0x33e)), 'value': $(this)[_0x1c8908(0x2fb)](_0x1c8908(0x2be))[_0x1c8908(0x229)]() }) : $(_0x1c8908(0x350) + $(this)['attr'](_0x1c8908(0x33e)) + '\x22]')[_0x1c8908(0x2e4)]() : (all_data['push']({ 'field': $(this)[_0x1c8908(0x255)](_0x1c8908(0x33e)), 'value': $(this)[_0x1c8908(0x24a)]() }), $(this)['val']() !== '' && resetInputErrorMessage($(this)['attr'](_0x1c8908(0x33e)))), all_data['forEach'](function(_0x260bb7) {
        const _0x479af9 = _0x1c8908;
        $(_0x479af9(0x350) + _0x260bb7['field'] + '\x22]')[_0x479af9(0x2ca)](), $(_0x479af9(0x350) + _0x260bb7[_0x479af9(0x251)] + '\x22]')[_0x479af9(0x229)](_0x260bb7[_0x479af9(0x226)]);
    });
}), $(_0x2813a2(0x2fa))[_0x2813a2(0x2f0)](_0x2813a2(0x214))['on'](_0x2813a2(0x2f1), function() {
    const _0x493efa = _0x2813a2;
    $(this)[_0x493efa(0x24a)]() !== '' && resetInputErrorMessage($(this)[_0x493efa(0x255)]('name')), all_data = all_data[_0x493efa(0x27c)](_0x24231b => _0x24231b[_0x493efa(0x251)] !== $(this)[_0x493efa(0x255)](_0x493efa(0x33e))), all_data[_0x493efa(0x2f4)]({ 'field': $(this)[_0x493efa(0x255)](_0x493efa(0x33e)), 'value': $(this)[_0x493efa(0x24a)]() }), all_data[_0x493efa(0x309)](function(_0x2bb837) {
        const _0x202dfd = _0x493efa;
        $(_0x202dfd(0x350) + _0x2bb837[_0x202dfd(0x251)] + '\x22]')[_0x202dfd(0x2ca)](), $(_0x202dfd(0x350) + _0x2bb837[_0x202dfd(0x251)] + '\x22]')[_0x202dfd(0x229)](_0x2bb837[_0x202dfd(0x226)]);
    });
}), $('[data-form=\x22multistep\x22]')[_0x2813a2(0x2f0)](_0x2813a2(0x25e))['on'](_0x2813a2(0x2f1), function() {
    const _0x312913 = _0x2813a2;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x312913(0x255)]('name'));
    var _0x2affae = $(this)[_0x312913(0x29e)]('ms-field');
    all_data = all_data[_0x312913(0x27c)](_0x49cc14 => _0x49cc14['field'] !== $(this)[_0x312913(0x255)]('name')), all_data['push']({ 'field': $(this)['attr'](_0x312913(0x33e)), 'value': _0x2affae ? $(this)['find']('option[value=\x22$(this).val()\x22]')[_0x312913(0x229)]() : $(this)[_0x312913(0x24a)]() }), all_data['forEach'](function(_0x65e627) {
        const _0x5c4503 = _0x312913;
        $(_0x5c4503(0x350) + _0x65e627['field'] + '\x22]')[_0x5c4503(0x2ca)](), $(_0x5c4503(0x350) + _0x65e627[_0x5c4503(0x251)] + '\x22]')[_0x5c4503(0x229)](_0x65e627[_0x5c4503(0x226)]);
    });
}), updateStep(), triggerInputAllData(), $('[data-cms-select=cms]')['each'](function() {
    const _0x15dc72 = _0x2813a2,
        _0x54be19 = $(this)[_0x15dc72(0x2f0)](_0x15dc72(0x31a)),
        _0x121f4f = [];
    _0x54be19['each'](function() {
        const _0x107274 = _0x15dc72;
        _0x121f4f[_0x107274(0x2f4)]($(this)['text']()[_0x107274(0x2c6)]());
    });
    const _0x42d532 = $(this)[_0x15dc72(0x2fb)](_0x15dc72(0x347));
    $[_0x15dc72(0x233)](_0x121f4f, function(_0x5ac396, _0x2419f3) {
        const _0x55fc73 = _0x15dc72,
            _0x5cd961 = $('<option>')[_0x55fc73(0x24a)](_0x2419f3)[_0x55fc73(0x229)](_0x2419f3);
        _0x42d532[_0x55fc73(0x290)](_0x5cd961);
    });
});

function _0x34af(_0x501c29, _0x58dfde) { const _0x59c738 = _0x59c7(); return _0x34af = function(_0x34afc5, _0x35afd8) { _0x34afc5 = _0x34afc5 - 0x1ef; let _0x1da657 = _0x59c738[_0x34afc5]; return _0x1da657; }, _0x34af(_0x501c29, _0x58dfde); }

function cloneRemove() {
    const _0x260cf0 = _0x2813a2;
    $('[data-clone-wrapper]')[_0x260cf0(0x233)](function() {
        const _0x384afa = _0x260cf0;
        $(this)[_0x384afa(0x2f0)](_0x384afa(0x2b0))[_0x384afa(0x333)] < 0x2 ? $(this)[_0x384afa(0x2f0)](_0x384afa(0x21a))[_0x384afa(0x2e4)]() : $(this)['find'](_0x384afa(0x21a))['show']();
    });
}

function cloneRemoveInput() {
    const _0x151c4a = _0x2813a2;
    $(_0x151c4a(0x35f))[_0x151c4a(0x233)](function() {
        const _0x102fa2 = _0x151c4a;
        console[_0x102fa2(0x22b)]($(this)[_0x102fa2(0x2f0)](_0x102fa2(0x1f1))[_0x102fa2(0x333)]), $(this)[_0x102fa2(0x2f0)](_0x102fa2(0x1f1))['length'] < 0x2 ? $(this)[_0x102fa2(0x2f0)](_0x102fa2(0x25d))[_0x102fa2(0x2e4)]() : $(this)['find'](_0x102fa2(0x25d))[_0x102fa2(0x2ca)]();
    });
}
$('[data-form=\x22remove-clone\x22]')['on'](_0x2813a2(0x249), function() {
    const _0x1a1282 = _0x2813a2,
        _0x5a7af4 = $(this)[_0x1a1282(0x23f)]('[data-clone]')[_0x1a1282(0x333)] > 0x0 ? $(this)[_0x1a1282(0x23f)](_0x1a1282(0x2b0))[_0x1a1282(0x221)]() : $(this)[_0x1a1282(0x23f)](_0x1a1282(0x256))[_0x1a1282(0x221)](),
        _0x212bc7 = $(this)[_0x1a1282(0x23f)](_0x1a1282(0x2b0))[_0x1a1282(0x333)] > 0x0 ? $(this)['parents'](_0x1a1282(0x2b0))[_0x1a1282(0x29e)](_0x1a1282(0x296)) : $(this)['parents'](_0x1a1282(0x256))[_0x1a1282(0x29e)](_0x1a1282(0x25a));
    $('[data-clone=\x22' + _0x212bc7 + '\x22]')['eq'](_0x5a7af4)[_0x1a1282(0x343)](), $(_0x1a1282(0x2a0) + _0x212bc7 + '\x22]')['eq'](_0x5a7af4)['remove'](), cloneRemove();
    let _0x48a5e2 = $(_0x1a1282(0x358) + _0x212bc7 + '\x22]')['data'](_0x1a1282(0x269)),
        _0x458482 = $(_0x1a1282(0x352) + _0x212bc7 + '\x22]')[_0x1a1282(0x333)];
    console[_0x1a1282(0x22b)](_0x458482, _0x48a5e2), _0x458482 < _0x48a5e2 && (console['log'](_0x1a1282(0x2ca)), $(_0x1a1282(0x358) + _0x212bc7 + '\x22]')[_0x1a1282(0x2ca)]()), validation();
}), $(_0x2813a2(0x25d))['on'](_0x2813a2(0x249), function() {
    const _0x4ee64e = _0x2813a2;
    let _0x21e745 = $(this)[_0x4ee64e(0x2fb)]()[_0x4ee64e(0x255)](_0x4ee64e(0x33e)),
        _0x2e7897 = $(this)['parents']('[data-clone-input]')['data'](_0x4ee64e(0x35b));
    $(this)[_0x4ee64e(0x325)]('[data-clone-input]')[_0x4ee64e(0x343)](), $(_0x4ee64e(0x350) + _0x21e745 + '\x22]')[_0x4ee64e(0x325)](_0x4ee64e(0x2dd))['remove']();
    let _0x48704d = $(_0x4ee64e(0x33a) + _0x2e7897 + '\x22]')[_0x4ee64e(0x29e)](_0x4ee64e(0x28a)),
        _0x55fb65 = $(_0x4ee64e(0x205) + _0x2e7897 + '\x22]')[_0x4ee64e(0x333)];
    _0x55fb65 < _0x48704d && $(_0x4ee64e(0x33a) + _0x2e7897 + '\x22]')['show'](), validation();
}), $(_0x2813a2(0x2c8))['on'](_0x2813a2(0x249), function() {
    const _0x54c59a = _0x2813a2;
    let _0x1ab9cc = $(this)[_0x54c59a(0x29e)]('add-new'),
        _0x507246 = $(this)[_0x54c59a(0x29e)](_0x54c59a(0x269));
    var _0x3f90d4 = $(_0x54c59a(0x352) + _0x1ab9cc + '\x22]')['eq'](0x0)[_0x54c59a(0x296)](!![]),
        _0x37dc17 = $('[data-display=\x22' + _0x1ab9cc + '\x22]')['eq'](0x0)['clone'](!![]);
    let _0x26d57d = '';
    $(this)[_0x54c59a(0x2f0)](_0x54c59a(0x21a))['show'](), cloneRemove(), _0x3f90d4[_0x54c59a(0x2f0)](_0x54c59a(0x1f1))[_0x54c59a(0x2f0)]('input')[_0x54c59a(0x24a)](''), _0x3f90d4['find'](_0x54c59a(0x1f1))[_0x54c59a(0x2f0)](_0x54c59a(0x25e))[_0x54c59a(0x24a)](''), _0x3f90d4['find'](_0x54c59a(0x1f1))['find'](_0x54c59a(0x214))[_0x54c59a(0x24a)](''), _0x3f90d4['find'](_0x54c59a(0x1f1))['not'](':first')[_0x54c59a(0x343)](), _0x3f90d4[_0x54c59a(0x2f0)](_0x54c59a(0x1f1))[_0x54c59a(0x2f0)](_0x54c59a(0x2fd))['click'](), _0x37dc17[_0x54c59a(0x2f0)]('[data-display-input]')[_0x54c59a(0x33d)](_0x54c59a(0x36d))[_0x54c59a(0x343)](), _0x3f90d4[_0x54c59a(0x2f0)](_0x54c59a(0x314))['each'](function() {
        const _0x14868d = _0x54c59a;
        if ($(this)['closest'](_0x14868d(0x1f1))[_0x14868d(0x333)] > 0x0) {
            let _0x45cbfc = 0x0;
            const _0x1047a0 = $(this)[_0x14868d(0x30c)]('[data-clone-input]')['data'](_0x14868d(0x35b));
            $(_0x14868d(0x205) + _0x1047a0 + '\x22]\x20input')[_0x14868d(0x233)](function() {
                const _0x10f741 = _0x14868d,
                    _0x4133dd = $(this)[_0x10f741(0x255)]('name');
                if (_0x4133dd && _0x4133dd[_0x10f741(0x258)]('relationship-')) { const _0x2225af = parseInt(_0x4133dd['split']('-')[0x1]);!isNaN(_0x2225af) && _0x2225af > _0x45cbfc && (_0x45cbfc = _0x2225af); }
            }), _0x45cbfc++, _0x26d57d = this[_0x14868d(0x33e)] + '-' + _0x45cbfc;
        } else _0x26d57d = this[_0x14868d(0x33e)] + '-' + (parseInt($(_0x14868d(0x352) + _0x1ab9cc + '\x22]')['last']()['index']()) + 0x1);
        $(this)[_0x14868d(0x24a)](''), $(this)['attr'](_0x14868d(0x33e), _0x26d57d), $(this)['attr'](_0x14868d(0x29f), _0x26d57d);
    }), _0x3f90d4[_0x54c59a(0x2f0)](_0x54c59a(0x214))['each'](function() {
        const _0x440576 = _0x54c59a;
        if ($(this)[_0x440576(0x30c)]('[data-clone-input]')[_0x440576(0x333)] > 0x0) {
            let _0x4f453c = 0x0;
            const _0x3e34f2 = $(this)['closest'](_0x440576(0x1f1))['data'](_0x440576(0x35b));
            $(_0x440576(0x205) + _0x3e34f2 + _0x440576(0x2c4))['each'](function() {
                const _0x408848 = _0x440576,
                    _0x186c0a = $(this)[_0x408848(0x255)](_0x408848(0x33e));
                if (_0x186c0a && _0x186c0a[_0x408848(0x258)](_0x408848(0x2a5))) { const _0xd7c8e6 = parseInt(_0x186c0a[_0x408848(0x27d)]('-')[0x1]);!isNaN(_0xd7c8e6) && _0xd7c8e6 > _0x4f453c && (_0x4f453c = _0xd7c8e6); }
            }), _0x4f453c++, _0x26d57d = this['name'] + '-' + _0x4f453c;
        } else _0x26d57d = this[_0x440576(0x33e)] + '-' + (parseInt($('[data-clone=\x22' + _0x1ab9cc + '\x22]')[_0x440576(0x310)]()['index']()) + 0x1);
        $(this)['val'](''), $(this)['attr']('name', _0x26d57d), $(this)[_0x440576(0x255)](_0x440576(0x29f), _0x26d57d);
    }), _0x3f90d4['find'](_0x54c59a(0x25e))[_0x54c59a(0x233)](function() {
        const _0xa2978d = _0x54c59a;
        if ($(this)['closest']('[data-clone-input]')[_0xa2978d(0x333)] > 0x0) {
            let _0xd9ae42 = 0x0;
            const _0x403e8a = $(this)[_0xa2978d(0x30c)](_0xa2978d(0x1f1))[_0xa2978d(0x29e)](_0xa2978d(0x35b));
            $(_0xa2978d(0x205) + _0x403e8a + _0xa2978d(0x1ff))[_0xa2978d(0x233)](function() {
                const _0x47666d = _0xa2978d,
                    _0x2fc83b = $(this)[_0x47666d(0x255)]('name');
                if (_0x2fc83b && _0x2fc83b[_0x47666d(0x258)](_0x47666d(0x2a5))) { const _0x5f4a4a = parseInt(_0x2fc83b['split']('-')[0x1]);!isNaN(_0x5f4a4a) && _0x5f4a4a > _0xd9ae42 && (_0xd9ae42 = _0x5f4a4a); }
            }), _0xd9ae42++, _0x26d57d = this['name'] + '-' + _0xd9ae42;
        } else _0x26d57d = this[_0xa2978d(0x33e)] + '-' + (parseInt($(_0xa2978d(0x352) + _0x1ab9cc + '\x22]')[_0xa2978d(0x310)]()[_0xa2978d(0x221)]()) + 0x1);
        $(this)[_0xa2978d(0x24a)](''), $(this)[_0xa2978d(0x255)]('name', _0x26d57d), $(this)['attr'](_0xa2978d(0x29f), _0x26d57d);
    }), _0x37dc17[_0x54c59a(0x2f0)](_0x54c59a(0x353))[_0x54c59a(0x233)](function() {
        const _0x3780e9 = _0x54c59a;
        if ($(this)[_0x3780e9(0x29e)](_0x3780e9(0x2f6))) {
            let _0x38e212 = 0x0;
            const _0x3de7a4 = $(this)[_0x3780e9(0x29e)](_0x3780e9(0x2f6))[_0x3780e9(0x27d)]('-')[0x0];
            $(_0x3780e9(0x2a0) + _0x1ab9cc + _0x3780e9(0x316) + _0x3de7a4 + '\x22]')['each'](function() {
                const _0x3bab90 = _0x3780e9,
                    _0x3a8161 = $(this)[_0x3bab90(0x255)]('data-input-field'),
                    _0x5d7595 = parseInt(_0x3a8161[_0x3bab90(0x27d)]('-')[0x1]);
                !isNaN(_0x5d7595) && _0x5d7595 > _0x38e212 && (_0x38e212 = _0x5d7595);
            }), _0x38e212++;
            const _0x528eed = _0x3de7a4 + '-' + _0x38e212;
            $(this)[_0x3780e9(0x255)](_0x3780e9(0x29c), _0x528eed);
        }
    }), $(_0x54c59a(0x1fe) + _0x1ab9cc + '\x22]')[_0x54c59a(0x290)](_0x3f90d4), $(_0x54c59a(0x26b) + _0x1ab9cc + '\x22]')[_0x54c59a(0x290)](_0x37dc17), $('[data-index=\x22' + _0x1ab9cc + '\x22]')[_0x54c59a(0x233)](function() {
        const _0x36c208 = _0x54c59a;
        $(this)[_0x36c208(0x229)]($(this)[_0x36c208(0x23f)]('[data-clone=\x22' + _0x1ab9cc + '\x22]')['index']() + 0x1);
    }), $(_0x54c59a(0x2c3) + _0x1ab9cc + '\x22]')['each'](function() {
        const _0x44e717 = _0x54c59a;
        $(this)[_0x44e717(0x229)]($(this)[_0x44e717(0x23f)]('[data-display=\x22' + _0x1ab9cc + '\x22]')['index']() + 0x1);
    });
    let _0x3f55e7 = $(_0x54c59a(0x1fe) + _0x1ab9cc + '\x22]\x20[data-clone=\x22' + _0x1ab9cc + '\x22]')['length'];
    if (_0x3f55e7 >= _0x507246) { $(this)[_0x54c59a(0x2e4)](); return; }
    $(this)[_0x54c59a(0x2ca)](), validation();
}), $(_0x2813a2(0x239))['on'](_0x2813a2(0x249), function() {
    const _0x3d6132 = _0x2813a2,
        _0x2bb8b1 = $(this)[_0x3d6132(0x23f)]('[data-clone]')[_0x3d6132(0x221)]();
    let _0x325652 = $(this)[_0x3d6132(0x29e)](_0x3d6132(0x202));
    var _0x440735 = $(_0x3d6132(0x205) + _0x325652 + '\x22]')['eq'](0x0)[_0x3d6132(0x296)](!![]),
        _0x42ce06 = $(_0x3d6132(0x2ef) + _0x325652 + '\x22]')['eq'](0x0)[_0x3d6132(0x296)](!![]);
    let _0x37b5e3 = $(this)[_0x3d6132(0x29e)](_0x3d6132(0x28a)),
        _0x51a85a = 0x0;
    $(_0x3d6132(0x205) + _0x325652 + _0x3d6132(0x272))[_0x3d6132(0x233)](function() {
        const _0x385a22 = _0x3d6132,
            _0x367707 = $(this)[_0x385a22(0x255)](_0x385a22(0x33e));
        if (_0x367707) { const _0x449a4b = parseInt(_0x367707[_0x385a22(0x27d)]('-')[0x1]);!isNaN(_0x449a4b) && _0x449a4b > _0x51a85a && (_0x51a85a = _0x449a4b); }
    }), $('[data-clone-input=\x22' + _0x325652 + '\x22]\x20select')[_0x3d6132(0x233)](function() {
        const _0x25539f = _0x3d6132,
            _0x59624c = $(this)[_0x25539f(0x255)](_0x25539f(0x33e));
        if (_0x59624c) { const _0x355105 = parseInt(_0x59624c['split']('-')[0x1]);!isNaN(_0x355105) && _0x355105 > _0x51a85a && (_0x51a85a = _0x355105); }
    }), $('[data-clone-input=\x22' + _0x325652 + _0x3d6132(0x2c4))[_0x3d6132(0x233)](function() {
        const _0x77f3d = _0x3d6132,
            _0x5e4db5 = $(this)[_0x77f3d(0x255)]('name');
        if (_0x5e4db5) { const _0x369108 = parseInt(_0x5e4db5[_0x77f3d(0x27d)]('-')[0x1]);!isNaN(_0x369108) && _0x369108 > _0x51a85a && (_0x51a85a = _0x369108); }
    }), _0x51a85a++, _0x440735[_0x3d6132(0x2f0)](_0x3d6132(0x314))[_0x3d6132(0x233)](function() {
        const _0x268b27 = _0x3d6132,
            _0x348d9c = $(this)[_0x268b27(0x255)]('name');
        let _0xd5d105 = _0x348d9c + '-' + _0x51a85a;
        $(this)['val'](''), $(this)['attr'](_0x268b27(0x33e), _0xd5d105), $(this)[_0x268b27(0x255)](_0x268b27(0x29f), _0xd5d105);
    }), _0x440735['find'](_0x3d6132(0x25e))[_0x3d6132(0x233)](function() {
        const _0x2223fb = _0x3d6132,
            _0x43a7cc = $(this)[_0x2223fb(0x255)](_0x2223fb(0x33e));
        let _0xff3c59 = _0x43a7cc + '-' + _0x51a85a;
        $(this)[_0x2223fb(0x24a)](''), $(this)[_0x2223fb(0x255)](_0x2223fb(0x33e), _0xff3c59), $(this)[_0x2223fb(0x255)](_0x2223fb(0x29f), _0xff3c59);
    }), _0x440735[_0x3d6132(0x2f0)](_0x3d6132(0x214))[_0x3d6132(0x233)](function() {
        const _0x5ab84c = _0x3d6132,
            _0x2f584e = $(this)[_0x5ab84c(0x255)](_0x5ab84c(0x33e));
        let _0x2cacaf = _0x2f584e + '-' + _0x51a85a;
        $(this)[_0x5ab84c(0x24a)](''), $(this)[_0x5ab84c(0x255)](_0x5ab84c(0x33e), _0x2cacaf), $(this)[_0x5ab84c(0x255)](_0x5ab84c(0x29f), _0x2cacaf);
    }), _0x42ce06[_0x3d6132(0x2f0)](_0x3d6132(0x353))[_0x3d6132(0x233)](function() {
        const _0x10fbab = _0x3d6132;
        $(this)[_0x10fbab(0x255)](_0x10fbab(0x29c), _0x10fbab(0x2a5) + _0x51a85a);
    }), $(this)[_0x3d6132(0x2fb)]('[data-clone-input-wrapper=\x22' + _0x325652 + '\x22]')['append'](_0x440735), $(_0x3d6132(0x256))['eq'](_0x2bb8b1)['find'](_0x3d6132(0x210) + _0x325652 + '\x22]')[_0x3d6132(0x290)](_0x42ce06), $(_0x3d6132(0x267) + _0x325652 + '\x22]')[_0x3d6132(0x233)](function() {
        const _0x2d4bcb = _0x3d6132;
        $(this)[_0x2d4bcb(0x229)]($(this)[_0x2d4bcb(0x23f)](_0x2d4bcb(0x205) + _0x325652 + '\x22]')['index']() + 0x1);
    }), $(_0x3d6132(0x28b) + _0x325652 + '\x22]')[_0x3d6132(0x233)](function() {
        const _0xf3edb5 = _0x3d6132;
        $(this)['text']($(this)[_0xf3edb5(0x23f)](_0xf3edb5(0x2ef) + _0x325652 + '\x22]')[_0xf3edb5(0x221)]() + 0x1);
    });
    let _0x59929e = $(_0x3d6132(0x297) + _0x325652 + _0x3d6132(0x28e) + _0x325652 + '\x22]')[_0x3d6132(0x333)];
    if (_0x59929e >= _0x37b5e3) { $(this)[_0x3d6132(0x2e4)](); return; }
    $(this)['show'](), cloneRemoveInput(), validation();
}), $('[data-remove-upload]')['on'](_0x2813a2(0x249), function() {
    const _0x363098 = _0x2813a2,
        _0x37ff7d = $(this)[_0x363098(0x29e)](_0x363098(0x295));
    $(_0x363098(0x2de) + _0x37ff7d + '\x22]')[_0x363098(0x24a)](''), validation();
});

function andLogic() {
    const _0x571f91 = _0x2813a2;
    conditionalResult && (steps['eq'](x)['find'](_0x571f91(0x275))['hide'](), steps['eq'](x)[_0x571f91(0x2f0)]('[data-show-if]')[_0x571f91(0x233)](function() {
        const _0x19f56c = _0x571f91;

        function _0x432706(_0x2e4c27) {
            const _0x106223 = _0x34af,
                _0x36c990 = _0x2e4c27[_0x106223(0x27d)]('&'),
                _0x8266c6 = [];
            return _0x36c990[_0x106223(0x309)](_0x46cde1 => {
                const _0x400b2a = _0x106223,
                    [_0x51c230, _0x2d4208] = _0x46cde1[_0x400b2a(0x27d)]('=');
                _0x8266c6['push']({ 'field': _0x51c230, 'value': _0x2d4208 });
            }), _0x8266c6;
        }
        const _0x52834d = $(this)['attr'](_0x19f56c(0x305)),
            _0x101c37 = _0x432706(_0x52834d);

        function _0x381c29(_0x1ad474, _0x5f7d75) { const _0x341406 = _0x19f56c; return _0x5f7d75[_0x341406(0x342)]((_0x392221, _0x57f6bb) => { const _0x4a334e = _0x341406; if (_0x1ad474[0x0] && _0x392221['field'] === _0x1ad474[0x0]['field']) return _0x1ad474[_0x4a334e(0x2e8)]((_0x419db2, _0x5c3e96) => _0x5f7d75[_0x57f6bb + _0x5c3e96] && _0x5f7d75[_0x57f6bb + _0x5c3e96][_0x4a334e(0x251)] === _0x419db2['field'] && _0x5f7d75[_0x57f6bb + _0x5c3e96][_0x4a334e(0x226)] === _0x419db2[_0x4a334e(0x226)]); return ![]; }); }
        const _0x1be6e2 = _0x381c29(_0x101c37, all_data);
        _0x1be6e2 ? $(this)[_0x19f56c(0x2ca)]() : $(this)['hide']();
    }));
}
progressiveTarget['addClass']('hide'), progressiveInput['on'](_0x2813a2(0x314), function() {
    const _0x480d96 = _0x2813a2,
        _0x1d1b4f = $(this)['data'](_0x480d96(0x1f2)),
        _0x48e5f3 = $(this)[_0x480d96(0x24a)](),
        _0x145b5e = form[_0x480d96(0x2f0)](_0x480d96(0x2e3) + _0x1d1b4f + '\x22]')[_0x480d96(0x29e)](_0x480d96(0x2a9));
    let _0x1396b1 = form['find'](_0x480d96(0x2e3) + _0x1d1b4f + _0x480d96(0x2e1))['filter'](function() { const _0x10c2ec = _0x480d96; return $(this)[_0x10c2ec(0x29e)](_0x10c2ec(0x2a9))[_0x10c2ec(0x25b)]() === _0x48e5f3[_0x10c2ec(0x25b)](); }),
        _0x5b964b = form[_0x480d96(0x2f0)](_0x480d96(0x2e3) + _0x1d1b4f + _0x480d96(0x323));
    form[_0x480d96(0x2f0)](_0x480d96(0x2e3) + _0x1d1b4f + '\x22]')['addClass'](_0x480d96(0x2bf)), form['find'](_0x480d96(0x2e3) + _0x1d1b4f + '\x22]')[_0x480d96(0x25f)](_0x480d96(0x32d));
    _0x48e5f3 !== '' && (_0x145b5e[_0x480d96(0x25b)]() === '*' && _0x48e5f3 !== '' ? (_0x5b964b['removeClass']('f-hide'), _0x5b964b[_0x480d96(0x2a4)](_0x480d96(0x32d))) : (_0x1396b1[_0x480d96(0x25f)](_0x480d96(0x2bf)), _0x1396b1[_0x480d96(0x2a4)](_0x480d96(0x32d))));

    function _0x39b6b5(_0x53e6bb) {
        const _0x365c21 = _0x480d96;
        _0x53e6bb && (form[_0x365c21(0x2f0)](_0x365c21(0x35e) + _0x53e6bb + '\x22]')[_0x365c21(0x24a)]() !== '' && form['find']('[data-input-reveal=\x22' + _0x53e6bb + '\x22]')[_0x365c21(0x250)]('input'));
    }
    let _0x367bfb = form[_0x480d96(0x2f0)]('[data-input-target=\x22' + _0x1d1b4f + '\x22]')[_0x480d96(0x2f0)](_0x480d96(0x283))[_0x480d96(0x29e)](_0x480d96(0x1f2));
    _0x39b6b5(_0x367bfb), form[_0x480d96(0x2f0)](_0x480d96(0x29b))[_0x480d96(0x233)](function() {
        const _0x4f0b35 = _0x480d96,
            _0x366004 = $(this)[_0x4f0b35(0x29e)]('input-reveal');
        form[_0x4f0b35(0x2f0)](_0x4f0b35(0x2e3) + _0x366004 + '\x22]')[_0x4f0b35(0x25f)]('f-show'), form[_0x4f0b35(0x2f0)]('[data-input-target=\x22' + _0x366004 + '\x22]')[_0x4f0b35(0x2a4)](_0x4f0b35(0x2bf));
    });
});

function addClickClass() {
    const _0x4dce1f = _0x2813a2,
        _0x4410df = $(this)[_0x4dce1f(0x29e)]('click-addclass'),
        _0x300b40 = $(this)[_0x4dce1f(0x255)](_0x4dce1f(0x33e));
    $('input[name=\x22' + _0x300b40 + '\x22]')[_0x4dce1f(0x325)]()[_0x4dce1f(0x25f)](_0x4410df), $(this)['is'](_0x4dce1f(0x2eb)) && $(this)['parent']()[_0x4dce1f(0x2a4)](_0x4410df);
}
$(_0x2813a2(0x322))['on']('change', addClickClass);

function updateCounter(_0xcd8990) {
    const _0x251e80 = _0x2813a2;
    var _0x313c0b = new Date(),
        _0x5b4c04 = _0x313c0b['getMonth'](),
        _0x5c7aba = btoa(_0x251e80(0x36f)),
        _0x382ee3 = btoa(_0x5b4c04[_0x251e80(0x22d)]()),
        _0x53bc04 = getCookie(_0x5c7aba);
    !_0x53bc04 || _0x53bc04 !== _0x382ee3 ? $[_0x251e80(0x20a)](_0x251e80(0x24e), function() {
        const _0x345100 = _0x251e80;
        console[_0x345100(0x22b)]('Counter\x20updated\x20successfully.'), document[_0x345100(0x2cf)] = _0x5c7aba + '=' + _0x382ee3;
    })['fail'](function(_0x2bf851, _0x26ac9f, _0x2d19ac) {
        const _0x1793b8 = _0x251e80;
        console[_0x1793b8(0x266)]('Failed\x20to\x20update\x20counter:', _0x2d19ac);
    }) : console['log']('Counter\x20already\x20updated\x20for\x20this\x20month.');
}

function getCookie(_0x1b3758) { const _0x51c417 = _0x2813a2; var _0x1b0ab1 = null; if (document[_0x51c417(0x2cf)] && document['cookie'] !== '') { var _0x5385b3 = document[_0x51c417(0x2cf)][_0x51c417(0x27d)](';'); for (var _0x3ce664 = 0x0; _0x3ce664 < _0x5385b3[_0x51c417(0x333)]; _0x3ce664++) { var _0x48a297 = _0x5385b3[_0x3ce664]['trim'](); if (_0x48a297[_0x51c417(0x247)](0x0, _0x1b3758[_0x51c417(0x333)] + 0x1) === _0x1b3758 + '=') { _0x1b0ab1 = decodeURIComponent(_0x48a297[_0x51c417(0x247)](_0x1b3758[_0x51c417(0x333)] + 0x1)); break; } } } return _0x1b0ab1; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window['location'][_0x2813a2(0x1fa)]),
    formlySupportParam = formlyUrlParams['get'](_0x2813a2(0x356)),
    showButton = formlySupportParam === _0x2813a2(0x365),
    passIcon = _0x2813a2(0x293),
    failIcon = '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>';
let isScriptLoaded = !![],
    scriptLocation = _0x2813a2(0x344),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x2813a2(0x2cc) : _0x2813a2(0x1f9),
    resultStatus = _0x2813a2(0x1f8),
    scriptSrcAdded = '';

function isElementPresent(_0x57a1f7, _0xc30d01) { return document['querySelector']('[' + _0xc30d01 + '=\x22' + _0x57a1f7 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x2813a2(0x219), _0x2813a2(0x2e9));
const multistepForm = document[_0x2813a2(0x372)](_0x2813a2(0x1f7)),
    formStepLength = multistepForm[_0x2813a2(0x2ae)](_0x2813a2(0x315))[_0x2813a2(0x333)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x2813a2(0x372)](_0x2813a2(0x2fa)),
    nextBtnExist = multistepContainer[_0x2813a2(0x372)]('[data-form=\x22next-btn\x22]'),
    backBtnExist = multistepContainer[_0x2813a2(0x372)](_0x2813a2(0x242)),
    submitBtnExist = multistepContainer[_0x2813a2(0x372)](_0x2813a2(0x308));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist['tagName'][_0x2813a2(0x25b)]() === 'input', isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist['tagName'][_0x2813a2(0x25b)]() === _0x2813a2(0x314) && submitBtnExist[_0x2813a2(0x34c)][_0x2813a2(0x25b)]() === 'submit', isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x2813a2(0x23a)][_0x2813a2(0x25b)]() === 'input';
const checkPowerup = _0x2f200e => document[_0x2813a2(0x372)](_0x2f200e) !== null,
    progressBarAttr = checkPowerup('[data-form=\x22progress\x22]'),
    progressIndicatorAttr = checkPowerup(_0x2813a2(0x24c)),
    customProgressAttr = checkPowerup(_0x2813a2(0x24c)),
    cardDivAttr = checkPowerup(_0x2813a2(0x29d)),
    currentStepAttr = checkPowerup(_0x2813a2(0x220)),
    totalStepAttr = checkPowerup(_0x2813a2(0x304)),
    enterAttr = checkPowerup(_0x2813a2(0x26c)),
    submitAttr = checkPowerup(_0x2813a2(0x298)),
    radioSkipAttr = checkPowerup(_0x2813a2(0x2a6)),
    customCheckboxAttr = checkPowerup(_0x2813a2(0x21c)),
    recapatchaAttr = checkPowerup(_0x2813a2(0x2d5));
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x2813a2(0x278));

function isScriptUrlMatch(_0xa52484, _0x538983) { const _0x49c35a = _0x2813a2; for (var _0x228ae8 = 0x0; _0x228ae8 < _0x538983['length']; _0x228ae8++) { if (_0xa52484[_0x49c35a(0x276)](_0x538983[_0x228ae8])) return !![]; } return ![]; }
var keywordsToCheck = [_0x2813a2(0x20f), 'formly'],
    scripts = document[_0x2813a2(0x243)](_0x2813a2(0x2af)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x2813a2(0x333)]; i++) {
    var scriptSrcs = scripts[i][_0x2813a2(0x257)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts['push'](scriptSrcs);
}
if (matchedScripts[_0x2813a2(0x333)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document['querySelector']('script[src=\x22' + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x2813a2(0x20b)][_0x2813a2(0x23a)] === 'BODY' ? 'Before\x20&lt;/body&gt;\x20tag' : 'Inside\x20<head>\x20tag');
} else scriptSrcAdded = _0x2813a2(0x215) + failIcon;
const newElement = document['createElement'](_0x2813a2(0x208)),
    newStyle = document[_0x2813a2(0x1f5)](_0x2813a2(0x209));
newStyle[_0x2813a2(0x224)] = _0x2813a2(0x2b8), document[_0x2813a2(0x344)]['appendChild'](newStyle);
showButton && document['body'][_0x2813a2(0x26d)](newElement);
newElement['innerHTML'] = _0x2813a2(0x301);

function openNav() {
    const _0x5f3f9e = _0x2813a2;
    console[_0x5f3f9e(0x22b)](_0x5f3f9e(0x36c)), document[_0x5f3f9e(0x2ba)](_0x5f3f9e(0x282))[_0x5f3f9e(0x209)][_0x5f3f9e(0x1f6)] = _0x5f3f9e(0x2b2);
}

function closeNav() {
    const _0x12705a = _0x2813a2;
    document[_0x12705a(0x2ba)]('f-mySidenav')[_0x12705a(0x209)][_0x12705a(0x1f6)] = _0x12705a(0x373);
}