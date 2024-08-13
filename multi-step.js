/**
 * @updateType Bug fix
 * @description Current step issue
 * @description formlyReset and reset button update
 * @date 2024-07-17
 */

const _0x557e5c = _0x5c1c;
(function(_0x15c8dd, _0x34a77f) {
    const _0x62fb78 = _0x5c1c,
        _0x2453c9 = _0x15c8dd();
    while (!![]) {
        try {
            const _0x3fac31 = parseInt(_0x62fb78(0x1ff)) / 0x1 * (parseInt(_0x62fb78(0x2d7)) / 0x2) + parseInt(_0x62fb78(0x36e)) / 0x3 * (-parseInt(_0x62fb78(0x395)) / 0x4) + -parseInt(_0x62fb78(0x251)) / 0x5 + parseInt(_0x62fb78(0x291)) / 0x6 * (parseInt(_0x62fb78(0x341)) / 0x7) + parseInt(_0x62fb78(0x2f9)) / 0x8 * (parseInt(_0x62fb78(0x280)) / 0x9) + parseInt(_0x62fb78(0x27b)) / 0xa + parseInt(_0x62fb78(0x20e)) / 0xb;
            if (_0x3fac31 === _0x34a77f) break;
            else _0x2453c9['push'](_0x2453c9['shift']());
        } catch (_0x53e809) { _0x2453c9['push'](_0x2453c9['shift']()); }
    }
}(_0x384f, 0x9bd1f));
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
let form = $(_0x557e5c(0x2da)),
    steps = $(_0x557e5c(0x321)),
    progressbarClone = $(_0x557e5c(0x367))[_0x557e5c(0x318)](),
    progressbar, weightedSelection = $(_0x557e5c(0x333))[_0x557e5c(0x25e)](_0x557e5c(0x345)),
    weightedSelectionRange = $(_0x557e5c(0x36c))[_0x557e5c(0x25e)](_0x557e5c(0x38d)),
    selectMultiple = $('[data-select-multiple]')[_0x557e5c(0x25e)](_0x557e5c(0x2a2)),
    customError = $(_0x557e5c(0x2d4))[_0x557e5c(0x25e)](_0x557e5c(0x2b7)),
    reinitIX = $('[data-reinit]')[_0x557e5c(0x25e)](_0x557e5c(0x325)),
    memory = $('[data-memory]')['data']('memory'),
    quiz = $(_0x557e5c(0x2f3))[_0x557e5c(0x25e)](_0x557e5c(0x357));
const urlFormly = new URL(window[_0x557e5c(0x37d)][_0x557e5c(0x285)]);
let _params = $(_0x557e5c(0x27e))[_0x557e5c(0x25e)](_0x557e5c(0x2a9)),
    logicExtra = $(_0x557e5c(0x2da))[_0x557e5c(0x25e)](_0x557e5c(0x358)),
    oldSubmitText = $(_0x557e5c(0x32a))['val'](),
    oldResetText = $('[data-btn=\x22reset\x22]')[_0x557e5c(0x355)](),
    formReset = $(_0x557e5c(0x2da))['data']('reset'),
    resetDelay = $(_0x557e5c(0x2cf))[_0x557e5c(0x25e)]('reset-delay') ? $(_0x557e5c(0x2cf))['data'](_0x557e5c(0x38e)) : 0x7d0,
    redirectDelay = $(_0x557e5c(0x1fa))['data'](_0x557e5c(0x305)) ? $(_0x557e5c(0x1fa))['data']('redirect-delay') : 0x64,
    phoneFormat = $(_0x557e5c(0x2da))[_0x557e5c(0x25e)](_0x557e5c(0x36a)),
    scrollToTop = $(_0x557e5c(0x2da))[_0x557e5c(0x25e)](_0x557e5c(0x37f)),
    trackLastStep = $(_0x557e5c(0x295))[_0x557e5c(0x25e)]('last-step'),
    conditionalResult = $(_0x557e5c(0x2ee))[_0x557e5c(0x25e)](_0x557e5c(0x21b)) === _0x557e5c(0x37c),
    scrollTopOffset = parseInt($(_0x557e5c(0x2da))['data'](_0x557e5c(0x2b0)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x557e5c(0x38b)](localStorage[_0x557e5c(0x29a)](_0x557e5c(0x35d))), formlyLastStep = JSON[_0x557e5c(0x38b)](localStorage[_0x557e5c(0x29a)](_0x557e5c(0x1f4))), formlyLastStepAnswer = JSON[_0x557e5c(0x38b)](localStorage['getItem'](_0x557e5c(0x31c)));
let paramUrl = $(_0x557e5c(0x2da))[_0x557e5c(0x25e)](_0x557e5c(0x277));
const progressiveTarget = $(_0x557e5c(0x2da))[_0x557e5c(0x271)](_0x557e5c(0x2c2)),
    progressiveInput = $(_0x557e5c(0x2da))[_0x557e5c(0x271)]('[data-input-reveal]'),
    multiSelections = $(_0x557e5c(0x2da))[_0x557e5c(0x25e)](_0x557e5c(0x220));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x557e5c(0x351))['each'](function() {
    const _0x2b77e5 = _0x557e5c;
    ogCloneArr[_0x2b77e5(0x26e)]({ 'name': $(this)[_0x2b77e5(0x25e)](_0x2b77e5(0x318)), 'element': $(this)['clone'](!![]), 'display': $('[data-display=\x22' + $(this)[_0x2b77e5(0x25e)](_0x2b77e5(0x318)) + '\x22]')['eq'](0x0)['clone'](!![]) });
});
const setPageLoadTime = () => {
    const _0x9ba20a = _0x557e5c;
    localStorage[_0x9ba20a(0x279)](_0x9ba20a(0x26f), Date['now']()[_0x9ba20a(0x386)]());
};
setPageLoadTime();
$(_0x557e5c(0x2b6))[_0x557e5c(0x2dc)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x483090) { notRobot = !![]; }($(steps[x])[_0x557e5c(0x25e)](_0x557e5c(0x2e5)) || $(steps[x])[_0x557e5c(0x271)](_0x557e5c(0x223))[_0x557e5c(0x25e)](_0x557e5c(0x2e5))) && (next = !![]);
$(_0x557e5c(0x252))[_0x557e5c(0x2dc)] > 0x0 && (countCard = $(_0x557e5c(0x252))[_0x557e5c(0x25e)](_0x557e5c(0x34a)));
$(_0x557e5c(0x2c9))[_0x557e5c(0x244)](), $(progressbarClone)['removeClass'](_0x557e5c(0x314)), $(_0x557e5c(0x361))[_0x557e5c(0x241)]()[_0x557e5c(0x261)](), $(_0x557e5c(0x32a))[_0x557e5c(0x244)](), $(_0x557e5c(0x26d))['hide'](), steps[_0x557e5c(0x301)](function() {
    const _0x1b394c = _0x557e5c;
    $('[data-form=\x22progress\x22]')[_0x1b394c(0x30f)](progressbarClone[_0x1b394c(0x318)](!![], !![]));
}), $(_0x557e5c(0x23e))[_0x557e5c(0x244)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps['length'], $(_0x557e5c(0x33b))[_0x557e5c(0x355)](totalSteps)) : ($(steps[x])[_0x557e5c(0x25e)]('card') ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x557e5c(0x317))[_0x557e5c(0x2dc)], $(_0x557e5c(0x33b))[_0x557e5c(0x355)](totalSteps), $(_0x557e5c(0x2e2))[_0x557e5c(0x301)](function() {
    const _0x3ed80f = _0x557e5c;
    $($('[data-form=\x22progress-indicator\x22]')[$(this)['index']()])[_0x3ed80f(0x244)]();
}));
progressbar = $(_0x557e5c(0x361))[_0x557e5c(0x241)](), $(_0x557e5c(0x367))['on'](_0x557e5c(0x298), clickableIndicator), $(_0x557e5c(0x2c1))[_0x557e5c(0x355)](curStep), steps[_0x557e5c(0x244)](), $(_0x557e5c(0x28f))['hide'](), $('[data-form=\x22next-btn\x22][type=\x22submit\x22]')[_0x557e5c(0x301)](function() {
    const _0x444530 = _0x557e5c;
    $(this)[_0x444530(0x22e)](_0x444530(0x1fb), 'button');
});

function getParams() {
    const _0x41b67f = _0x557e5c;
    urlFormly[_0x41b67f(0x262)]['forEach'](function(_0xecd3bf, _0x5a5638) { searchQ['push']({ 'val': _0xecd3bf, 'key': _0x5a5638 }); });
}

function getSafe(_0x5325ff, _0x124961) { try { return _0x5325ff(); } catch (_0x32a829) { return _0x124961; } }

function phoneAutoFormat(_0x4a50df) {
    var _0x592316 = '';
    return function(_0x10c1f2) {
        const _0x115458 = _0x5c1c;
        var _0x407801 = '',
            _0x423178 = _0x10c1f2['replace'](/\D/g, ''),
            _0x10f6fc = 0x0,
            _0x5ee0ac = 0x0;
        while (_0x10f6fc < _0x423178[_0x115458(0x2dc)] && _0x5ee0ac < _0x4a50df[_0x115458(0x2dc)]) { _0x4a50df[_0x5ee0ac] === 'x' ? (_0x407801 += _0x423178[_0x10f6fc], _0x10f6fc++) : _0x407801 += _0x4a50df[_0x5ee0ac], _0x5ee0ac++; }
        if (_0x10c1f2[_0x115458(0x2dc)] < _0x592316['length']) {
            var _0x3f0aac = _0x4a50df[_0x115458(0x20a)](_0x5ee0ac);
            _0x407801 += _0x3f0aac['replace'](/x/g, '');
        }
        return _0x592316 = _0x407801, _0x407801;
    };
}

function validateURL(_0x59f588) { const _0x19cee3 = _0x557e5c; return urlPattern[_0x19cee3(0x234)](_0x59f588) ? !![] : ![]; }
quiz && steps[_0x557e5c(0x301)](function() {
    const _0x53c408 = _0x557e5c;
    $(this)['children']()['attr'](_0x53c408(0x266), !![]), $(this)[_0x53c408(0x241)]()[_0x53c408(0x22e)](_0x53c408(0x204), 0xfa);
});

function disableBtn(_0x410f10) {
    const _0x181427 = _0x557e5c;
    fill = ![], !customError && ($('[data-form=\x22next-btn\x22]')['css']({ 'opacity': _0x181427(0x302), 'pointer-events': _0x181427(0x2ad) }), $(_0x181427(0x381))[_0x181427(0x2bf)]('disabled'), $('[data-form=\x22submit-btn\x22]')[_0x181427(0x2ab)]({ 'opacity': '0.4', 'pointer-events': _0x181427(0x2ad) }), $('[data-form=\x22submit-btn\x22]')[_0x181427(0x2bf)](_0x181427(0x237)), $(_0x181427(0x26d))[_0x181427(0x2ab)]({ 'opacity': _0x181427(0x302), 'pointer-events': _0x181427(0x2ad) }), $(_0x181427(0x26d))[_0x181427(0x2bf)](_0x181427(0x237)));
}

function enableBtn() {
    const _0x151e6f = _0x557e5c;
    fill = !![], $(_0x151e6f(0x381))['css']({ 'pointer-events': _0x151e6f(0x362), 'opacity': '1' }), $(_0x151e6f(0x381))['removeClass']('disabled'), $(_0x151e6f(0x32a))[_0x151e6f(0x2ab)]({ 'pointer-events': _0x151e6f(0x362), 'opacity': '1' }), $(_0x151e6f(0x32a))[_0x151e6f(0x30a)](_0x151e6f(0x237)), $('[data-form-ms=\x22submit-btn\x22]')[_0x151e6f(0x2ab)]({ 'pointer-events': _0x151e6f(0x362), 'opacity': '1' }), $(_0x151e6f(0x26d))[_0x151e6f(0x30a)](_0x151e6f(0x237));
}

function saveLastAnswer(_0x3d44d2) {
    const _0x90f0bd = _0x557e5c;
    localStorage[_0x90f0bd(0x327)](_0x90f0bd(0x31c)), localStorage['setItem']('formlyLastStepAnswer', JSON[_0x90f0bd(0x38a)](_0x3d44d2));
}

function saveFilledInput() {
    const _0x361561 = _0x557e5c;
    $(_0x361561(0x31d))[_0x361561(0x219)]('[type=\x22submit\x22]')[_0x361561(0x301)](function() {
        const _0x102175 = _0x361561;
        $(this)[_0x102175(0x22e)](_0x102175(0x1fb)) === _0x102175(0x33a) || $(this)[_0x102175(0x22e)](_0x102175(0x1fb)) === 'radio' ? $(this)[_0x102175(0x245)](_0x102175(0x29f)) && (filledInput[_0x102175(0x269)](_0x1edd4a => _0x1edd4a['inputName'] === $(this)['attr']('name')) ? (filledInput = filledInput[_0x102175(0x2c5)](_0x107d79 => _0x107d79[_0x102175(0x326)] !== $(this)[_0x102175(0x22e)](_0x102175(0x232))), $(this)[_0x102175(0x391)]() !== '' && filledInput[_0x102175(0x26e)]({ 'inputName': $(this)[_0x102175(0x22e)](_0x102175(0x232)), 'value': $(this)[_0x102175(0x391)]() })) : $(this)[_0x102175(0x391)]() !== '' && filledInput[_0x102175(0x26e)]({ 'inputName': $(this)[_0x102175(0x22e)](_0x102175(0x232)), 'value': $(this)[_0x102175(0x391)]() })) : filledInput[_0x102175(0x269)](_0x5306cb => _0x5306cb[_0x102175(0x326)] === $(this)[_0x102175(0x22e)]('name')) ? (filledInput = filledInput['filter'](_0x41fb62 => _0x41fb62[_0x102175(0x326)] !== $(this)['attr']('name')), $(this)['val']() !== '' && filledInput[_0x102175(0x26e)]({ 'inputName': $(this)[_0x102175(0x22e)](_0x102175(0x232)), 'value': $(this)[_0x102175(0x391)]() })) : $(this)[_0x102175(0x391)]() !== '' && filledInput['push']({ 'inputName': $(this)['attr'](_0x102175(0x232)), 'value': $(this)[_0x102175(0x391)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x361561(0x327)](_0x361561(0x1f4)), localStorage[_0x361561(0x279)](_0x361561(0x1f4), lastStep)), localStorage[_0x361561(0x327)](_0x361561(0x35d)), localStorage[_0x361561(0x279)](_0x361561(0x35d), JSON[_0x361561(0x38a)](filledInput));
}

function scrollTop() {
    const _0x4e83fc = _0x557e5c;
    scrollToTop && $(_0x4e83fc(0x27a))['animate']({ 'scrollTop': $(_0x4e83fc(0x2da))[_0x4e83fc(0x2cc)]()[_0x4e83fc(0x218)] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x2a8a93) {
    const _0x17e65b = _0x557e5c;
    var _0x10cdd5 = window[_0x17e65b(0x37d)][_0x17e65b(0x285)],
        _0x3ab252 = new URLSearchParams(window[_0x17e65b(0x37d)][_0x17e65b(0x27c)]);
    _0x3ab252['set'](_0x17e65b(0x236), _0x2a8a93);
    var _0x5387e8 = _0x10cdd5[_0x17e65b(0x1ed)]('?')[0x0] + '?' + _0x3ab252[_0x17e65b(0x386)]();
    window[_0x17e65b(0x2a5)][_0x17e65b(0x200)]({}, '', _0x5387e8);
}

function updateStep() {
    const _0x2c1eb2 = _0x557e5c;
    scrollTop(), skip = ![], $(_0x2c1eb2(0x28b))[_0x2c1eb2(0x30a)]('disabled');
    $(_0x2c1eb2(0x1f9))[_0x2c1eb2(0x25e)](_0x2c1eb2(0x287)) && (steps[_0x2c1eb2(0x271)](_0x2c1eb2(0x270))[_0x2c1eb2(0x301)](function() {
        const _0x125fc1 = _0x2c1eb2;
        $($(_0x125fc1(0x28b))[$(this)[_0x125fc1(0x25c)](_0x125fc1(0x321))[_0x125fc1(0x2a8)]()]), $(this)[_0x125fc1(0x391)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x2c1eb2(0x249))[_0x2c1eb2(0x2bf)]('disabled') : $(_0x2c1eb2(0x249))[_0x2c1eb2(0x30a)](_0x2c1eb2(0x237)));
    $(_0x2c1eb2(0x28b))[_0x2c1eb2(0x30a)](_0x2c1eb2(0x314)), $('[data-form=\x22custom-progress-indicator\x22]')[_0x2c1eb2(0x2bf)](_0x2c1eb2(0x237)), $($(_0x2c1eb2(0x28b))[x])['addClass'](_0x2c1eb2(0x314)), selection = selections[_0x2c1eb2(0x2c5)](_0x426da3 => _0x426da3[_0x2c1eb2(0x236)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x2c1eb2(0x2ea)]) ? parseInt(getSafe(() => selection[0x0][_0x2c1eb2(0x2ea)])) : x);
    $(_0x2c1eb2(0x2c7))[_0x2c1eb2(0x244)](), steps[_0x2c1eb2(0x244)]();
    reinitIX === !![] && window['Webflow'][_0x2c1eb2(0x24a)]();
    $(progressbar)[_0x2c1eb2(0x30a)](_0x2c1eb2(0x314));
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])[_0x2c1eb2(0x2bf)]('current') : !$(steps[i])['data'](_0x2c1eb2(0x2e5)) && $(progressbar[i])['addClass'](_0x2c1eb2(0x314)); }
    reinitIX === !![] ? (window[_0x2c1eb2(0x396)] && window[_0x2c1eb2(0x396)]['require'](_0x2c1eb2(0x21e))[_0x2c1eb2(0x334)](), document['dispatchEvent'](new Event('readystatechange')), $(steps[x])[_0x2c1eb2(0x2ca)]()) : $(steps[x])[_0x2c1eb2(0x328)]('slow');
    $('.active-answer-card')[_0x2c1eb2(0x30a)](_0x2c1eb2(0x30b));
    x === 0x0 && !$(steps[x])[_0x2c1eb2(0x25e)](_0x2c1eb2(0x2e5)) && ($(steps[x])[_0x2c1eb2(0x271)](_0x2c1eb2(0x2c7))[_0x2c1eb2(0x2ca)](), $(steps[x])['find'](_0x2c1eb2(0x2c7))[_0x2c1eb2(0x2bf)](_0x2c1eb2(0x30b)));
    selection[_0x2c1eb2(0x2dc)] > 0x0 ? ($(steps[x])[_0x2c1eb2(0x271)]('[data-answer=\x22' + selection[0x0]['selected'] + '\x22]')[_0x2c1eb2(0x2ca)](), $(steps[x])[_0x2c1eb2(0x271)](_0x2c1eb2(0x289) + selection[0x0][_0x2c1eb2(0x296)] + '\x22]')['addClass'](_0x2c1eb2(0x30b))) : ($(steps[x])[_0x2c1eb2(0x271)](_0x2c1eb2(0x289) + answer + '\x22]')[_0x2c1eb2(0x2ca)](), $(steps[x])[_0x2c1eb2(0x271)]('[data-answer=\x22' + answer + '\x22]')[_0x2c1eb2(0x2bf)](_0x2c1eb2(0x30b)));
    if (x === 0x0) $(_0x2c1eb2(0x35a))[_0x2c1eb2(0x244)](), $(_0x2c1eb2(0x381))[_0x2c1eb2(0x2ca)](), $(_0x2c1eb2(0x32a))[_0x2c1eb2(0x244)]();
    else {
        if (x === steps[_0x2c1eb2(0x2dc)] - 0x1 || $(steps[x])['find'](_0x2c1eb2(0x283))[_0x2c1eb2(0x2dc)] > 0x0) {
            $('[data-form=\x22next-btn\x22]')[_0x2c1eb2(0x244)]();
            if ($(steps[x])[_0x2c1eb2(0x271)](_0x2c1eb2(0x26a))[_0x2c1eb2(0x25e)]('submit-show')) $(steps[x])['find'](_0x2c1eb2(0x26a))[_0x2c1eb2(0x2ca)]();
            else $(_0x2c1eb2(0x381))['data'](_0x2c1eb2(0x2f5)) && $('[data-form=\x22next-btn\x22]')['show']();
            $(_0x2c1eb2(0x32a))['show'](), $('[data-form-ms=\x22submit-btn\x22]')[_0x2c1eb2(0x2ca)](), $(_0x2c1eb2(0x35a))[_0x2c1eb2(0x2ca)]();
        } else $(_0x2c1eb2(0x381))['show'](), $(_0x2c1eb2(0x35a))[_0x2c1eb2(0x2ca)](), $(_0x2c1eb2(0x32a))[_0x2c1eb2(0x244)](), $(_0x2c1eb2(0x26d))[_0x2c1eb2(0x244)]();
    }
    $($(steps[x])[_0x2c1eb2(0x271)](_0x2c1eb2(0x385))[0x0])[_0x2c1eb2(0x222)](), $($(steps[x])[_0x2c1eb2(0x271)](_0x2c1eb2(0x342))[0x0])[_0x2c1eb2(0x222)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x2c1eb2(0x28b))[idx])['removeClass']('disabled'); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x469406, _0x2e85af, _0x7402f1) {
    const _0x318caa = _0x557e5c;
    let _0x4a3cef = _0x469406[_0x318caa(0x212)]('@') ? _0x469406[_0x318caa(0x1ed)]('@')[0x1][_0x318caa(0x1ed)]('.')[0x0] : [];
    dom = [];
    _0x2e85af !== undefined && _0x2e85af[_0x318caa(0x1ed)](',')[_0x318caa(0x1f0)](function(_0x2c9e27) { _0x2c9e27['includes'](_0x4a3cef) && dom['push'](_0x4a3cef); });
    dom[_0x318caa(0x2dc)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x1fc7bb = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x1fc7bb[_0x318caa(0x234)](_0x469406) || !domainAllowed ? (emailFilled = ![], unfilledArr['push']({ 'input': _0x7402f1 })) : emailFilled = !![];
}

function phoneValidation(_0x273454, _0x10315f, _0x3a32fe) {
    if (phoneFormat) return _0x10315f >= _0x3a32fe ? !![] : ![];
    else { if (_0x10315f >= _0x3a32fe) return !![]; }
}

function validation() {
    const _0x123977 = _0x557e5c;
    $(steps[x])[_0x123977(0x25e)](_0x123977(0x2e5)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], urlFilled = !![], timeFilled = !![], emailFilled = !![], emptyInput = 0x0, empReqInput = [], empReqTime = [], empReqTel = [], empReqUrl = [], empReqDate = [], empReqSelect = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x123977(0x271)]('textarea[required]:visible')[_0x123977(0x2dc)], textInputLength = $(steps[x])[_0x123977(0x271)](_0x123977(0x202))['length'], selectInputLength = $(steps[x])[_0x123977(0x271)](_0x123977(0x22a))[_0x123977(0x2dc)], emailInputLength = $(steps[x])[_0x123977(0x271)](_0x123977(0x31f))[_0x123977(0x2dc)], checkboxInputLength = $(steps[x])[_0x123977(0x271)](_0x123977(0x394))[_0x123977(0x2dc)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x123977(0x25e)](_0x123977(0x33a)) ? $(steps[x])[_0x123977(0x25e)](_0x123977(0x33a)) : $(steps[x])[_0x123977(0x271)](_0x123977(0x2d2))[_0x123977(0x2dc)] > 0x0 ? $(steps[x])[_0x123977(0x271)]('[data-checkbox]')[_0x123977(0x25e)](_0x123977(0x33a)) : 0x0, maxCheckCount = $(steps[x])['data']('max-checkbox') ? $(steps[x])[_0x123977(0x25e)]('max-checkbox') : $(steps[x])[_0x123977(0x271)](_0x123977(0x23c))[_0x123977(0x2dc)] > 0x0 ? $(steps[x])['find'](_0x123977(0x23c))['data'](_0x123977(0x1ef)) : 0x0;
    if (!logicExtra) {
        let _0x7948c1 = $(steps[x])[_0x123977(0x271)](_0x123977(0x37e)),
            _0xbaa977 = _0x7948c1[_0x123977(0x2c5)](_0x123977(0x25a)),
            _0x27f19d = _0x7948c1['filter'](_0x123977(0x389)),
            _0x2fa0cc = _0xbaa977[_0x123977(0x2c5)](_0x123977(0x389));
        if (_0x7948c1[_0x123977(0x2dc)] > 0x0) {
            if (checkCount === '*' || checkCount > _0x7948c1['length']) _0x7948c1['each'](function() {
                const _0xa492c2 = _0x123977;
                $(this)['is'](_0xa492c2(0x389)) ? (checkboxFilled = !![], resetInputErrorMessage($(this)[_0xa492c2(0x22e)](_0xa492c2(0x232)))) : (checkboxFilled = ![], unfilledArr[_0xa492c2(0x26e)]({ 'input': $(this)[_0xa492c2(0x22e)](_0xa492c2(0x232)) }));
            });
            else {
                if (_0x27f19d[_0x123977(0x2dc)] >= checkCount) {
                    if (_0xbaa977[_0x123977(0x2dc)] > 0x0) _0xbaa977[_0x123977(0x2dc)] === _0x2fa0cc[_0x123977(0x2dc)] ? (checkboxFilled = !![], resetInputErrorMessage(_0xbaa977[_0x123977(0x371)]()[_0x123977(0x22e)](_0x123977(0x232)))) : (checkboxFilled = ![], _0xbaa977[_0x123977(0x219)](_0x123977(0x389))['each'](function() {
                        const _0x5280fa = _0x123977;
                        console[_0x5280fa(0x1f7)]($(this)[_0x5280fa(0x22e)](_0x5280fa(0x232))), unfilledArr[_0x5280fa(0x26e)]({ 'input': $(this)[_0x5280fa(0x22e)](_0x5280fa(0x232)) });
                    }));
                    else {
                        if (maxCheckCount > _0x27f19d[_0x123977(0x2dc)]) $(steps[x])[_0x123977(0x271)](_0x123977(0x38c))[_0x123977(0x245)]('disabled', ![]), $(steps[x])[_0x123977(0x271)](_0x123977(0x38c))['parent'](_0x123977(0x1f1))[_0x123977(0x30a)](_0x123977(0x237));
                        else maxCheckCount > 0x0 && ($(steps[x])[_0x123977(0x271)]('input[type=\x22checkbox\x22]:not(:checked)')[_0x123977(0x390)](_0x123977(0x1f1))[_0x123977(0x2bf)](_0x123977(0x237)), $(steps[x])[_0x123977(0x271)](_0x123977(0x256))[_0x123977(0x245)](_0x123977(0x237), !![]), _0xbaa977[_0x123977(0x219)](':checked')[_0x123977(0x301)](function() {
                            const _0x4f9edb = _0x123977;
                            unfilledArr['push']({ 'input': $(this)[_0x4f9edb(0x22e)](_0x4f9edb(0x232)) });
                        }));
                    }
                } else checkCount > 0x0 && (checkboxFilled = ![], _0xbaa977[_0x123977(0x219)](_0x123977(0x389))[_0x123977(0x301)](function() {
                    const _0x2698a4 = _0x123977;
                    unfilledArr[_0x2698a4(0x26e)]({ 'input': $(this)[_0x2698a4(0x22e)](_0x2698a4(0x232)) });
                }), unfilledArr[_0x123977(0x26e)]({ 'input': _0x7948c1[_0x123977(0x371)]()[_0x123977(0x22e)]('name') }));
            }
        }
        $(steps[x])[_0x123977(0x271)]('input:radio[required]')[_0x123977(0x301)](function(_0x4ec937) {
            const _0x582d79 = _0x123977;
            var _0x2d90a8 = $(this)[_0x582d79(0x22e)](_0x582d79(0x232));
            $(_0x582d79(0x28c) + _0x2d90a8 + _0x582d79(0x210))[_0x582d79(0x2dc)] == 0x0 ? (!empReqRadio[_0x582d79(0x271)](_0x4d194f => _0x4d194f[_0x582d79(0x254)] === _0x4ec937) && empReqRadio[_0x582d79(0x26e)]({ 'input': _0x4ec937 }), unfilledArr['push']({ 'input': $(this)[_0x582d79(0x22e)](_0x582d79(0x232)) })) : empReqRadio = empReqRadio[_0x582d79(0x2c5)](_0x2bb0e0 => _0x2bb0e0[_0x582d79(0x254)] !== _0x4ec937), empReqRadio[_0x582d79(0x2dc)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x24b))[_0x123977(0x301)](function(_0x5be61b) {
            const _0x2deebc = _0x123977;
            let _0x397c55 = $(this)['val']()[_0x2deebc(0x2dc)],
                _0x108fe8 = $(this)[_0x2deebc(0x25e)](_0x2deebc(0x21c)) ? $(this)[_0x2deebc(0x25e)](_0x2deebc(0x21c)) : 0x0;
            $(this)['val']() !== '' && _0x397c55 >= _0x108fe8 ? empReqInput = empReqInput[_0x2deebc(0x2c5)](_0x314a62 => _0x314a62[_0x2deebc(0x254)] !== _0x5be61b) : (!empReqInput[_0x2deebc(0x271)](_0x1ee9ac => _0x1ee9ac[_0x2deebc(0x254)] === _0x5be61b) && empReqInput[_0x2deebc(0x26e)]({ 'input': _0x5be61b }), unfilledArr[_0x2deebc(0x26e)]({ 'input': $(this)['attr'](_0x2deebc(0x232)) })), empReqInput[_0x2deebc(0x2dc)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](':input[type=\x22password\x22][required]')['each'](function(_0x15fe2e) {
            const _0x322991 = _0x123977;
            let _0x786323 = $(this)[_0x322991(0x391)]()[_0x322991(0x2dc)],
                _0x3a3a80 = $(this)[_0x322991(0x25e)](_0x322991(0x21c)) ? $(this)[_0x322991(0x25e)](_0x322991(0x21c)) : 0x0;
            $(this)[_0x322991(0x391)]() !== '' && _0x786323 >= _0x3a3a80 ? empReqPassword = empReqPassword[_0x322991(0x2c5)](_0x5ac495 => _0x5ac495[_0x322991(0x254)] !== _0x15fe2e) : (!empReqPassword['find'](_0xd124ef => _0xd124ef['input'] === _0x15fe2e) && empReqPassword[_0x322991(0x26e)]({ 'input': _0x15fe2e }), unfilledArr[_0x322991(0x26e)]({ 'input': $(this)[_0x322991(0x22e)]('name') })), empReqPassword[_0x322991(0x2dc)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x335))[_0x123977(0x301)](function(_0x2b3c76) {
            const _0x21e665 = _0x123977;
            let _0x4a425c = $(this)[_0x21e665(0x391)]()[_0x21e665(0x2dc)],
                _0x503abb = $(this)[_0x21e665(0x25e)]('min-character') ? $(this)[_0x21e665(0x25e)](_0x21e665(0x21c)) : 0x0;
            $(this)[_0x21e665(0x391)]() !== '' && _0x4a425c >= _0x503abb ? empReqUrl = empReqUrl['filter'](_0x252cec => _0x252cec[_0x21e665(0x254)] !== _0x2b3c76) : (!empReqTime[_0x21e665(0x271)](_0x21e661 => _0x21e661[_0x21e665(0x254)] === _0x2b3c76) && empReqUrl['push']({ 'input': _0x2b3c76 }), unfilledArr['push']({ 'input': $(this)['attr'](_0x21e665(0x232)) })), empReqUrl[_0x21e665(0x2dc)] === 0x0 && validateURL($(this)[_0x21e665(0x391)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x224))[_0x123977(0x301)](function(_0x4f60c7) {
            const _0x382a62 = _0x123977;
            let _0x2ff40b = $(this)['val']()[_0x382a62(0x2dc)],
                _0x5deca1 = $(this)[_0x382a62(0x25e)]('min-character') ? $(this)['data'](_0x382a62(0x21c)) : 0x0;
            $(this)[_0x382a62(0x391)]() !== '' && _0x2ff40b >= _0x5deca1 ? empReqTime = empReqTime[_0x382a62(0x2c5)](_0x2e9504 => _0x2e9504[_0x382a62(0x254)] !== _0x4f60c7) : (!empReqTime[_0x382a62(0x271)](_0x1a3982 => _0x1a3982['input'] === _0x4f60c7) && empReqTime[_0x382a62(0x26e)]({ 'input': _0x4f60c7 }), unfilledArr[_0x382a62(0x26e)]({ 'input': $(this)[_0x382a62(0x22e)](_0x382a62(0x232)) })), empReqTime[_0x382a62(0x2dc)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find'](_0x123977(0x238))[_0x123977(0x301)](function(_0x4cc272) {
            const _0x5f57ce = _0x123977;
            $(this)[_0x5f57ce(0x391)]() !== '' ? empReqDate = empReqDate[_0x5f57ce(0x2c5)](_0x5900a5 => _0x5900a5[_0x5f57ce(0x254)] !== _0x4cc272) : (!empReqDate['find'](_0x5dde75 => _0x5dde75[_0x5f57ce(0x254)] === _0x4cc272) && empReqDate['push']({ 'input': _0x4cc272 }), unfilledArr[_0x5f57ce(0x26e)]({ 'input': $(this)[_0x5f57ce(0x22e)](_0x5f57ce(0x232)) })), empReqDate[_0x5f57ce(0x2dc)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])['find'](_0x123977(0x230))[_0x123977(0x301)](function(_0x15dc2d) {
            const _0x17e5fe = _0x123977;
            if ($(this)[_0x17e5fe(0x391)]() !== '') {
                let _0x483ff1 = $(this)[_0x17e5fe(0x391)]()['length'],
                    _0x1ed995 = $(this)[_0x17e5fe(0x25e)](_0x17e5fe(0x21c)) ? $(this)['data'](_0x17e5fe(0x21c)) : 0x0;
                if ($(this)[_0x17e5fe(0x25e)](_0x17e5fe(0x258))) {
                    var _0xf0a13a = phoneAutoFormat($(this)[_0x17e5fe(0x25e)](_0x17e5fe(0x258)));
                    $(this)[_0x17e5fe(0x391)](_0xf0a13a($(this)['val']()));
                }
                phoneValidation($(this)[_0x17e5fe(0x391)](), _0x483ff1, _0x1ed995) ? empReqTel = empReqTel['filter'](_0x31cf0f => _0x31cf0f[_0x17e5fe(0x254)] !== _0x15dc2d) : empReqTel[_0x17e5fe(0x26e)]({ 'input': _0x15dc2d });
            } else !empReqTel[_0x17e5fe(0x271)](_0x5b89c6 => _0x5b89c6['input'] === _0x15dc2d) && empReqTel[_0x17e5fe(0x26e)]({ 'input': _0x15dc2d }), unfilledArr['push']({ 'input': $(this)[_0x17e5fe(0x22e)](_0x17e5fe(0x232)) });
            empReqTel[_0x17e5fe(0x2dc)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x2ec))[_0x123977(0x301)](function(_0x27a8c7) {
            const _0xd936d2 = _0x123977;
            $(this)[_0xd936d2(0x391)]() !== '' ? empReqFile = empReqFile[_0xd936d2(0x2c5)](_0x43f561 => _0x43f561[_0xd936d2(0x254)] !== _0x27a8c7) : (!empReqFile[_0xd936d2(0x271)](_0x48b042 => _0x48b042[_0xd936d2(0x254)] === _0x27a8c7) && empReqFile[_0xd936d2(0x26e)]({ 'input': _0x27a8c7 }), unfilledArr['push']({ 'input': $(this)[_0xd936d2(0x22e)]('name') })), empReqFile[_0xd936d2(0x2dc)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x24c))[_0x123977(0x301)](function(_0x153614) {
            const _0x59ae31 = _0x123977;
            let _0x214341 = $(this)[_0x59ae31(0x391)]()['length'],
                _0x19e6f0 = $(this)[_0x59ae31(0x25e)](_0x59ae31(0x21c)) ? $(this)['data'](_0x59ae31(0x21c)) : 0x0;
            $(this)['val']() !== '' && _0x214341 >= _0x19e6f0 ? empReqNum = empReqNum[_0x59ae31(0x2c5)](_0x48c724 => _0x48c724['input'] !== _0x153614) : (!empReqNum[_0x59ae31(0x271)](_0x116f77 => _0x116f77[_0x59ae31(0x254)] === _0x153614) && empReqNum[_0x59ae31(0x26e)]({ 'input': _0x153614 }), unfilledArr['push']({ 'input': $(this)[_0x59ae31(0x22e)](_0x59ae31(0x232)) })), empReqNum[_0x59ae31(0x2dc)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x22c))[_0x123977(0x301)](function(_0x55fcfb) {
            const _0x2b073b = _0x123977;
            let _0xa4580b = $(this)[_0x2b073b(0x391)]();
            _0xa4580b === '' && (_0xa4580b = null), _0xa4580b != null ? empReqSelect = empReqSelect['filter'](_0x2026ad => _0x2026ad['input'] !== _0x55fcfb) : (!empReqSelect['find'](_0x55fda2 => _0x55fda2[_0x2b073b(0x254)] === _0x55fcfb) && empReqSelect['push']({ 'input': _0x55fcfb }), unfilledArr[_0x2b073b(0x26e)]({ 'input': $(this)[_0x2b073b(0x22e)](_0x2b073b(0x232)) })), empReqSelect['length'] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x273))[_0x123977(0x301)](function(_0x6d3e1) {
            const _0x411bf4 = _0x123977;
            let _0x3233c5 = $(this)[_0x411bf4(0x391)]()[_0x411bf4(0x2dc)],
                _0x2bb1ac = $(this)[_0x411bf4(0x25e)]('min-character') ? $(this)[_0x411bf4(0x25e)](_0x411bf4(0x21c)) : 0x0;
            $(this)[_0x411bf4(0x391)]() !== '' && _0x3233c5 >= _0x2bb1ac ? empReqTextarea = empReqTextarea[_0x411bf4(0x2c5)](_0x3538d2 => _0x3538d2[_0x411bf4(0x254)] !== _0x6d3e1) : (!empReqTextarea[_0x411bf4(0x271)](_0x2c79a4 => _0x2c79a4['input'] === _0x6d3e1) && empReqTextarea[_0x411bf4(0x26e)]({ 'input': _0x6d3e1 }), unfilledArr[_0x411bf4(0x26e)]({ 'input': $(this)[_0x411bf4(0x22e)](_0x411bf4(0x232)) })), empReqTextarea[_0x411bf4(0x2dc)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x2d9))['each'](function() {
            const _0x10afaa = _0x123977;
            $(this)['val']() !== '' ? validateEmail($(this)[_0x10afaa(0x391)](), $(this)[_0x10afaa(0x25e)](_0x10afaa(0x22d)), $(this)[_0x10afaa(0x22e)]('name')) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x10afaa(0x22e)](_0x10afaa(0x232)) }));
        });
    } else {
        if ($(steps[x])[_0x123977(0x25e)]('card')) answer = $(steps[x])['find'](_0x123977(0x2c6))[_0x123977(0x25e)](_0x123977(0x373)), selections = selections[_0x123977(0x2c5)](_0x2c93d7 => _0x2c93d7[_0x123977(0x236)] !== x), selections['push']({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x123977(0x271)]('.active-answer-card')[_0x123977(0x25e)](_0x123977(0x2e5)) && (answer = $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x25e)](_0x123977(0x373)), selections = selections['filter'](_0x1827dc => _0x1827dc[_0x123977(0x236)] !== x), selections[_0x123977(0x26e)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        let _0x366605 = $(steps[x])[_0x123977(0x271)](_0x123977(0x247)),
            _0x4149a5 = _0x366605[_0x123977(0x2c5)]('[required]'),
            _0xad459f = _0x366605[_0x123977(0x2c5)](':checked'),
            _0x56c353 = _0x4149a5['filter'](_0x123977(0x389)),
            _0x1942bb = _0x4149a5[_0x123977(0x2dc)] === 0x0,
            _0x2d60ab = _0xad459f[_0x123977(0x2dc)],
            _0x46b365 = _0x56c353[_0x123977(0x2dc)];
        if (_0x366605[_0x123977(0x2dc)] > 0x0) {
            if (checkCount === '*' || checkCount > _0x366605[_0x123977(0x2dc)]) _0x366605[_0x123977(0x301)](function() {
                const _0x2abbd0 = _0x123977;
                let _0x5e9304 = $(this),
                    _0x1815f1 = _0x5e9304['is'](':checked');
                if (_0x1815f1) {
                    checkboxFilled = !![], resetInputErrorMessage(_0x5e9304[_0x2abbd0(0x22e)]('name'));
                    if (_0x1942bb) {
                        let _0x2e3db5 = _0x5e9304[_0x2abbd0(0x268)](_0x2abbd0(0x36f))['data'](_0x2abbd0(0x36b)),
                            _0x83f386 = _0x5e9304['closest']('[data-go-to]')[_0x2abbd0(0x22e)]('data-go-to');
                        if (_0x83f386) {
                            selections = selections[_0x2abbd0(0x2c5)](_0x133392 => _0x133392[_0x2abbd0(0x236)] !== x), selections['push']({ 'step': x, 'selected': _0x83f386 });
                            if (_0x2e3db5) {
                                selections = selections[_0x2abbd0(0x2c5)](_0x43377d => _0x43377d[_0x2abbd0(0x236)] !== _0x2e3db5 - 0x2), selections[_0x2abbd0(0x26e)]({ 'step': _0x2e3db5 - 0x2, 'selected': _0x83f386 });
                                let _0x3a1833 = selections['findIndex'](_0x55ae71 => _0x55ae71[_0x2abbd0(0x236)] === x);
                                selections[_0x3a1833][_0x2abbd0(0x2ea)] = parseInt(_0x2e3db5) - 0x1, selections[_0x3a1833]['backTo'] = x;
                            }
                        }
                    }
                } else checkboxFilled = ![], unfilledArr[_0x2abbd0(0x26e)]({ 'input': _0x5e9304[_0x2abbd0(0x22e)](_0x2abbd0(0x232)) });
            });
            else {
                if (_0x2d60ab >= checkCount) {
                    if (_0x4149a5[_0x123977(0x2dc)] > 0x0) {
                        if (_0x4149a5[_0x123977(0x2dc)] === _0x46b365) {
                            let _0x5c1f4a = _0xad459f[_0x123977(0x371)](),
                                _0x564ae2 = _0x5c1f4a[_0x123977(0x268)](_0x123977(0x36f))[_0x123977(0x25e)](_0x123977(0x36b)),
                                _0x3fa195 = _0x5c1f4a[_0x123977(0x268)](_0x123977(0x2c6))[_0x123977(0x22e)](_0x123977(0x272));
                            if (_0x3fa195) {
                                selections = selections['filter'](_0xb7e993 => _0xb7e993[_0x123977(0x236)] !== x), selections[_0x123977(0x26e)]({ 'step': x, 'selected': _0x3fa195 });
                                if (_0x564ae2) {
                                    selections = selections['filter'](_0x53fb0d => _0x53fb0d[_0x123977(0x236)] !== _0x564ae2 - 0x2), selections[_0x123977(0x26e)]({ 'step': _0x564ae2 - 0x2, 'selected': _0x3fa195 });
                                    let _0x465857 = selections[_0x123977(0x242)](_0x441d4b => _0x441d4b[_0x123977(0x236)] === x);
                                    selections[_0x465857]['skipTo'] = parseInt(_0x564ae2) - 0x1, selections[_0x465857]['backTo'] = x;
                                }
                            }
                            checkboxFilled = !![], resetInputErrorMessage(_0x4149a5[_0x123977(0x371)]()['attr']('name'));
                        } else checkboxFilled = ![], _0x4149a5[_0x123977(0x219)](_0x123977(0x389))[_0x123977(0x301)](function() {
                            const _0x2d887a = _0x123977;
                            unfilledArr[_0x2d887a(0x26e)]({ 'input': $(this)['attr'](_0x2d887a(0x232)) });
                        });
                    } else {
                        if (maxCheckCount > _0x2d60ab) {
                            let _0x50c10d = _0xad459f[_0x123977(0x371)](),
                                _0xdae4b5 = _0x50c10d[_0x123977(0x268)]('[data-skip-to]')['data'](_0x123977(0x36b)),
                                _0x85f417 = _0x50c10d[_0x123977(0x268)](_0x123977(0x2c6))[_0x123977(0x22e)](_0x123977(0x272));
                            if (_0x85f417) {
                                selections = selections[_0x123977(0x2c5)](_0x4c8f6a => _0x4c8f6a[_0x123977(0x236)] !== x), selections[_0x123977(0x26e)]({ 'step': x, 'selected': _0x85f417 });
                                if (_0xdae4b5) {
                                    selections = selections[_0x123977(0x2c5)](_0x5aab1f => _0x5aab1f[_0x123977(0x236)] !== _0xdae4b5 - 0x2), selections[_0x123977(0x26e)]({ 'step': _0xdae4b5 - 0x2, 'selected': _0x85f417 });
                                    let _0x641866 = selections[_0x123977(0x242)](_0x3197ce => _0x3197ce[_0x123977(0x236)] === x);
                                    selections[_0x641866][_0x123977(0x2ea)] = parseInt(_0xdae4b5) - 0x1, selections[_0x641866]['backTo'] = x;
                                }
                            }
                            checkboxFilled = !![], $(steps[x])[_0x123977(0x271)](_0x123977(0x256))[_0x123977(0x390)](_0x123977(0x1f1))[_0x123977(0x30a)](_0x123977(0x237)), $(steps[x])['find'](_0x123977(0x256))[_0x123977(0x245)](_0x123977(0x237), ![]);
                        } else maxCheckCount > 0x0 && ($(steps[x])[_0x123977(0x271)](_0x123977(0x256))[_0x123977(0x390)](_0x123977(0x1f1))['addClass']('disabled'), $(steps[x])[_0x123977(0x271)](_0x123977(0x256))[_0x123977(0x245)](_0x123977(0x237), !![]));
                    }
                } else checkCount > 0x0 && (checkboxFilled = ![], _0x4149a5[_0x123977(0x219)](_0x123977(0x389))[_0x123977(0x301)](function() {
                    const _0x53800a = _0x123977;
                    unfilledArr[_0x53800a(0x26e)]({ 'input': $(this)[_0x53800a(0x22e)](_0x53800a(0x232)) });
                }), unfilledArr[_0x123977(0x26e)]({ 'input': _0x366605[_0x123977(0x371)]()[_0x123977(0x22e)](_0x123977(0x232)) }));
            }
        }
        $(steps[x])[_0x123977(0x271)](_0x123977(0x223))['find'](_0x123977(0x282))['each'](function(_0xd91cfc) {
            const _0x2609e0 = _0x123977;
            var _0x57ee04 = $(this)[_0x2609e0(0x22e)](_0x2609e0(0x232));
            $('input:radio[name=\x22' + _0x57ee04 + _0x2609e0(0x210))['length'] == 0x0 ? (!empReqRadio[_0x2609e0(0x271)](_0x27023d => _0x27023d[_0x2609e0(0x254)] === _0xd91cfc) && empReqRadio['push']({ 'input': _0xd91cfc }), unfilledArr[_0x2609e0(0x26e)]({ 'input': $(this)['attr']('name') })) : empReqRadio = empReqRadio[_0x2609e0(0x2c5)](_0x4aa36f => _0x4aa36f[_0x2609e0(0x254)] !== _0xd91cfc), empReqRadio[_0x2609e0(0x2dc)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](_0x123977(0x24b))[_0x123977(0x301)](function(_0x4e32ac) {
            const _0x425087 = _0x123977;
            let _0xf6f86b = $(this)[_0x425087(0x391)]()[_0x425087(0x2dc)],
                _0x1ccda3 = $(this)[_0x425087(0x25e)]('min-character') ? $(this)['data'](_0x425087(0x21c)) : 0x0;
            $(this)[_0x425087(0x391)]() !== '' && _0xf6f86b >= _0x1ccda3 ? empReqInput = empReqInput[_0x425087(0x2c5)](_0x3494c5 => _0x3494c5[_0x425087(0x254)] !== _0x4e32ac) : (!empReqInput[_0x425087(0x271)](_0x3c18bc => _0x3c18bc[_0x425087(0x254)] === _0x4e32ac) && empReqInput[_0x425087(0x26e)]({ 'input': _0x4e32ac }), unfilledArr[_0x425087(0x26e)]({ 'input': $(this)['attr']('name') })), empReqInput['length'] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))['find'](_0x123977(0x397))['each'](function(_0x33e0b8) {
            const _0x555ae3 = _0x123977;
            skipTo = undefined, $(this)['parents'](_0x555ae3(0x36f))[_0x555ae3(0x25e)]('skip-to') !== '' && (skipTo = $(this)[_0x555ae3(0x25c)](_0x555ae3(0x36f))[_0x555ae3(0x25e)](_0x555ae3(0x36b))), $(this)[_0x555ae3(0x25c)](_0x555ae3(0x2c6))[_0x555ae3(0x22e)](_0x555ae3(0x272)) && (answer = $(this)['parents'](_0x555ae3(0x2c6))[_0x555ae3(0x22e)](_0x555ae3(0x272)), selections = selections[_0x555ae3(0x2c5)](_0x83e5f8 => _0x83e5f8[_0x555ae3(0x236)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x555ae3(0x2c5)](_0x4ea2d1 => _0x4ea2d1['step'] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x5b6783 => _0x5b6783['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])['find']('.active-answer-card')[_0x123977(0x271)](_0x123977(0x235))[_0x123977(0x301)](function(_0x1e53a0) {
            const _0x2dacbf = _0x123977;
            let _0x5c56f3 = $(this)[_0x2dacbf(0x391)]()[_0x2dacbf(0x2dc)],
                _0x3aeb5f = $(this)[_0x2dacbf(0x25e)]('min-character') ? $(this)['data'](_0x2dacbf(0x21c)) : 0x0;
            $(this)[_0x2dacbf(0x391)]() !== '' && _0x5c56f3 >= _0x3aeb5f ? empReqPassword = empReqPassword[_0x2dacbf(0x2c5)](_0x16a315 => _0x16a315['input'] !== _0x1e53a0) : (!empReqPassword[_0x2dacbf(0x271)](_0x5123c3 => _0x5123c3[_0x2dacbf(0x254)] === _0x1e53a0) && empReqPassword['push']({ 'input': _0x1e53a0 }), unfilledArr[_0x2dacbf(0x26e)]({ 'input': $(this)[_0x2dacbf(0x22e)](_0x2dacbf(0x232)) })), empReqPassword[_0x2dacbf(0x2dc)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))['find'](_0x123977(0x2f2))['each'](function(_0x1e7db5) {
            const _0x551103 = _0x123977;
            skipTo = undefined, $(this)[_0x551103(0x25c)](_0x551103(0x36f))[_0x551103(0x25e)](_0x551103(0x36b)) !== '' && (skipTo = $(this)[_0x551103(0x25c)]('[data-skip-to]')[_0x551103(0x25e)](_0x551103(0x36b))), $(this)['parents'](_0x551103(0x2c6))[_0x551103(0x22e)](_0x551103(0x272)) && (answer = $(this)[_0x551103(0x25c)]('[data-go-to]')[_0x551103(0x22e)](_0x551103(0x272)), selections = selections[_0x551103(0x2c5)](_0x239759 => _0x239759[_0x551103(0x236)] !== x), selections[_0x551103(0x26e)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x551103(0x2c5)](_0x5cf08f => _0x5cf08f[_0x551103(0x236)] !== skipTo - 0x2), selections[_0x551103(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x551103(0x242)](_0x5c94d7 => _0x5c94d7['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](_0x123977(0x335))[_0x123977(0x301)](function(_0x188fc4) {
            const _0x3132ff = _0x123977;
            let _0xfc882b = $(this)[_0x3132ff(0x391)]()[_0x3132ff(0x2dc)],
                _0x16a4cb = $(this)[_0x3132ff(0x25e)](_0x3132ff(0x21c)) ? $(this)[_0x3132ff(0x25e)]('min-character') : 0x0;
            $(this)[_0x3132ff(0x391)]() !== '' && _0xfc882b >= _0x16a4cb ? empReqUrl = empReqUrl[_0x3132ff(0x2c5)](_0x574d3a => _0x574d3a['input'] !== _0x188fc4) : (!empReqUrl[_0x3132ff(0x271)](_0x1bb9d2 => _0x1bb9d2[_0x3132ff(0x254)] === _0x188fc4) && empReqUrl['push']({ 'input': _0x188fc4 }), unfilledArr[_0x3132ff(0x26e)]({ 'input': $(this)['attr'](_0x3132ff(0x232)) })), empReqUrl['length'] === 0x0 && validateURL($(this)[_0x3132ff(0x391)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](':input[type=\x22url\x22]')[_0x123977(0x301)](function(_0x2d1118) {
            const _0x2fb7c4 = _0x123977;
            skipTo = undefined, $(this)['parents'](_0x2fb7c4(0x36f))['data'](_0x2fb7c4(0x36b)) !== '' && (skipTo = $(this)[_0x2fb7c4(0x25c)](_0x2fb7c4(0x36f))[_0x2fb7c4(0x25e)](_0x2fb7c4(0x36b))), $(this)[_0x2fb7c4(0x25c)](_0x2fb7c4(0x2c6))['attr']('data-go-to') && (answer = $(this)[_0x2fb7c4(0x25c)](_0x2fb7c4(0x2c6))[_0x2fb7c4(0x22e)](_0x2fb7c4(0x272)), selections = selections[_0x2fb7c4(0x2c5)](_0x4d83a9 => _0x4d83a9[_0x2fb7c4(0x236)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x5c38cc => _0x5c38cc[_0x2fb7c4(0x236)] !== skipTo - 0x2), selections[_0x2fb7c4(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2fb7c4(0x242)](_0x56e200 => _0x56e200[_0x2fb7c4(0x236)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2fb7c4(0x366)] = x));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](':input[type=\x22date\x22][required]')['each'](function(_0x295c63) {
            const _0x45a197 = _0x123977;
            $(this)[_0x45a197(0x391)]() !== '' ? empReqDate = empReqDate[_0x45a197(0x2c5)](_0xb45aa8 => _0xb45aa8[_0x45a197(0x254)] !== _0x295c63) : (!empReqDate[_0x45a197(0x271)](_0x573920 => _0x573920[_0x45a197(0x254)] === _0x295c63) && empReqDate[_0x45a197(0x26e)]({ 'input': _0x295c63 }), unfilledArr[_0x45a197(0x26e)]({ 'input': $(this)[_0x45a197(0x22e)](_0x45a197(0x232)) })), empReqDate['length'] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])['find'](_0x123977(0x223))['find'](_0x123977(0x29c))['each'](function(_0x480022) {
            const _0x5b73fd = _0x123977;
            skipTo = undefined, $(this)['parents'](_0x5b73fd(0x36f))[_0x5b73fd(0x25e)](_0x5b73fd(0x36b)) !== '' && (skipTo = $(this)[_0x5b73fd(0x25c)](_0x5b73fd(0x36f))[_0x5b73fd(0x25e)](_0x5b73fd(0x36b))), $(this)['parents'](_0x5b73fd(0x2c6))['attr'](_0x5b73fd(0x272)) && (answer = $(this)[_0x5b73fd(0x25c)](_0x5b73fd(0x2c6))[_0x5b73fd(0x22e)](_0x5b73fd(0x272)), selections = selections['filter'](_0x3df69d => _0x3df69d['step'] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x244416 => _0x244416[_0x5b73fd(0x236)] !== skipTo - 0x2), selections[_0x5b73fd(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5b73fd(0x242)](_0x24c3a8 => _0x24c3a8[_0x5b73fd(0x236)] === x), selections[objIndex][_0x5b73fd(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5b73fd(0x366)] = x));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))['find'](_0x123977(0x224))[_0x123977(0x301)](function(_0x331e33) {
            const _0xebe928 = _0x123977;
            $(this)[_0xebe928(0x391)]() !== '' ? empReqTime = empReqTime[_0xebe928(0x2c5)](_0x1c6bf0 => _0x1c6bf0[_0xebe928(0x254)] !== _0x331e33) : (!empReqTime['find'](_0x4fd48f => _0x4fd48f[_0xebe928(0x254)] === _0x331e33) && empReqTime[_0xebe928(0x26e)]({ 'input': _0x331e33 }), unfilledArr['push']({ 'input': $(this)[_0xebe928(0x22e)](_0xebe928(0x232)) })), empReqTime['length'] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))['find'](_0x123977(0x353))[_0x123977(0x301)](function(_0x490d32) {
            const _0x2e23dd = _0x123977;
            skipTo = undefined, $(this)[_0x2e23dd(0x25c)](_0x2e23dd(0x36f))[_0x2e23dd(0x25e)](_0x2e23dd(0x36b)) !== '' && (skipTo = $(this)[_0x2e23dd(0x25c)](_0x2e23dd(0x36f))[_0x2e23dd(0x25e)]('skip-to')), $(this)[_0x2e23dd(0x25c)](_0x2e23dd(0x2c6))[_0x2e23dd(0x22e)](_0x2e23dd(0x272)) && (answer = $(this)[_0x2e23dd(0x25c)](_0x2e23dd(0x2c6))[_0x2e23dd(0x22e)]('data-go-to'), selections = selections['filter'](_0x35a677 => _0x35a677['step'] !== x), selections[_0x2e23dd(0x26e)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x9014a3 => _0x9014a3[_0x2e23dd(0x236)] !== skipTo - 0x2), selections[_0x2e23dd(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2e23dd(0x242)](_0x43b0fc => _0x43b0fc[_0x2e23dd(0x236)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2e23dd(0x366)] = x));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))['find'](_0x123977(0x24c))['each'](function(_0x28dcbd) {
            const _0xe7659e = _0x123977;
            let _0x503c98 = $(this)['val']()[_0xe7659e(0x2dc)],
                _0xe3c0aa = $(this)[_0xe7659e(0x25e)]('min-character') ? $(this)[_0xe7659e(0x25e)](_0xe7659e(0x21c)) : 0x0;
            $(this)[_0xe7659e(0x391)]() !== '' && _0x503c98 >= _0xe3c0aa ? empReqNum = empReqNum[_0xe7659e(0x2c5)](_0x56d21d => _0x56d21d[_0xe7659e(0x254)] !== _0x28dcbd) : (!empReqNum[_0xe7659e(0x271)](_0x49c66c => _0x49c66c['input'] === _0x28dcbd) && empReqNum[_0xe7659e(0x26e)]({ 'input': _0x28dcbd }), unfilledArr[_0xe7659e(0x26e)]({ 'input': $(this)[_0xe7659e(0x22e)]('name') })), empReqNum[_0xe7659e(0x2dc)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x123977(0x271)]('.active-answer-card')[_0x123977(0x271)](_0x123977(0x30c))[_0x123977(0x301)](function(_0x1c7a10) {
            const _0x215cb6 = _0x123977;
            skipTo = undefined, $(this)[_0x215cb6(0x25c)](_0x215cb6(0x36f))[_0x215cb6(0x25e)]('skip-to') !== '' && (skipTo = $(this)[_0x215cb6(0x25c)](_0x215cb6(0x36f))[_0x215cb6(0x25e)](_0x215cb6(0x36b))), $(this)[_0x215cb6(0x25c)](_0x215cb6(0x2c6))[_0x215cb6(0x22e)](_0x215cb6(0x272)) && (answer = $(this)[_0x215cb6(0x25c)]('[data-go-to]')[_0x215cb6(0x22e)]('data-go-to'), selections = selections[_0x215cb6(0x2c5)](_0xc75dd2 => _0xc75dd2[_0x215cb6(0x236)] !== x), selections[_0x215cb6(0x26e)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x215cb6(0x2c5)](_0x3ebfc3 => _0x3ebfc3['step'] !== skipTo - 0x2), selections[_0x215cb6(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x215cb6(0x242)](_0x50b3d7 => _0x50b3d7[_0x215cb6(0x236)] === x), selections[objIndex][_0x215cb6(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x215cb6(0x366)] = x));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](_0x123977(0x230))[_0x123977(0x301)](function(_0x1a1756) {
            const _0x4ef8e4 = _0x123977;
            if ($(this)[_0x4ef8e4(0x391)]() !== '') {
                let _0x5f32cc = $(this)['val']()[_0x4ef8e4(0x2dc)],
                    _0x1e4976 = $(this)[_0x4ef8e4(0x25e)](_0x4ef8e4(0x21c)) ? $(this)[_0x4ef8e4(0x25e)](_0x4ef8e4(0x21c)) : 0x0;
                if ($(this)['data'](_0x4ef8e4(0x258))) {
                    var _0x9a37be = phoneAutoFormat($(this)[_0x4ef8e4(0x25e)](_0x4ef8e4(0x258)));
                    $(this)['val'](_0x9a37be($(this)[_0x4ef8e4(0x391)]()));
                }
                phoneValidation($(this)['val'](), _0x5f32cc, _0x1e4976) ? empReqTel = empReqTel[_0x4ef8e4(0x2c5)](_0x53ca74 => _0x53ca74[_0x4ef8e4(0x254)] !== _0x1a1756) : empReqTel[_0x4ef8e4(0x26e)]({ 'input': _0x1a1756 });
            } else !empReqTel[_0x4ef8e4(0x271)](_0x18d3b1 => _0x18d3b1['input'] === _0x1a1756) && empReqTel['push']({ 'input': _0x1a1756 }), unfilledArr[_0x4ef8e4(0x26e)]({ 'input': $(this)[_0x4ef8e4(0x22e)](_0x4ef8e4(0x232)) });
            empReqTel[_0x4ef8e4(0x2dc)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x123977(0x271)]('.active-answer-card')[_0x123977(0x271)](_0x123977(0x324))[_0x123977(0x301)](function(_0x300ee9) {
            const _0x6ca7a6 = _0x123977;
            skipTo = undefined, $(this)[_0x6ca7a6(0x25c)](_0x6ca7a6(0x36f))[_0x6ca7a6(0x25e)](_0x6ca7a6(0x36b)) !== '' && (skipTo = $(this)[_0x6ca7a6(0x25c)](_0x6ca7a6(0x36f))[_0x6ca7a6(0x25e)]('skip-to')), $(this)[_0x6ca7a6(0x25c)](_0x6ca7a6(0x2c6))[_0x6ca7a6(0x22e)](_0x6ca7a6(0x272)) && (answer = $(this)[_0x6ca7a6(0x25c)](_0x6ca7a6(0x2c6))['attr']('data-go-to'), selections = selections[_0x6ca7a6(0x2c5)](_0x248ccf => _0x248ccf[_0x6ca7a6(0x236)] !== x), selections[_0x6ca7a6(0x26e)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x6ca7a6(0x2c5)](_0x544b67 => _0x544b67['step'] !== skipTo - 0x2), selections[_0x6ca7a6(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x8829a8 => _0x8829a8[_0x6ca7a6(0x236)] === x), selections[objIndex][_0x6ca7a6(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x6ca7a6(0x366)] = x));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))['find'](_0x123977(0x2ec))[_0x123977(0x301)](function(_0x5903b9) {
            const _0x13a6a1 = _0x123977;
            $(this)[_0x13a6a1(0x391)]() !== '' ? empReqFile = empReqFile[_0x13a6a1(0x2c5)](_0x49024d => _0x49024d[_0x13a6a1(0x254)] !== _0x5903b9) : (!empReqFile['find'](_0x1eca0a => _0x1eca0a[_0x13a6a1(0x254)] === _0x5903b9) && empReqFile[_0x13a6a1(0x26e)]({ 'input': _0x5903b9 }), unfilledArr[_0x13a6a1(0x26e)]({ 'input': $(this)[_0x13a6a1(0x22e)](_0x13a6a1(0x232)) })), empReqFile[_0x13a6a1(0x2dc)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])['find'](_0x123977(0x223))['find'](':input[type=\x22file\x22]')['each'](function(_0x4c0441) {
            const _0x1bdd37 = _0x123977;
            skipTo = undefined, $(this)[_0x1bdd37(0x25c)](_0x1bdd37(0x36f))[_0x1bdd37(0x25e)](_0x1bdd37(0x36b)) !== '' && (skipTo = $(this)[_0x1bdd37(0x25c)](_0x1bdd37(0x36f))[_0x1bdd37(0x25e)](_0x1bdd37(0x36b))), $(this)[_0x1bdd37(0x25c)]('[data-go-to]')[_0x1bdd37(0x22e)](_0x1bdd37(0x272)) && (answer = $(this)[_0x1bdd37(0x25c)](_0x1bdd37(0x2c6))[_0x1bdd37(0x22e)](_0x1bdd37(0x272)), selections = selections[_0x1bdd37(0x2c5)](_0x34e9fe => _0x34e9fe[_0x1bdd37(0x236)] !== x), selections[_0x1bdd37(0x26e)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1bdd37(0x2c5)](_0xf34c48 => _0xf34c48[_0x1bdd37(0x236)] !== skipTo - 0x2), selections[_0x1bdd37(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1bdd37(0x242)](_0x1a45b9 => _0x1a45b9[_0x1bdd37(0x236)] === x), selections[objIndex][_0x1bdd37(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1bdd37(0x366)] = x));
        }), $(steps[x])['find'](_0x123977(0x223))[_0x123977(0x271)](_0x123977(0x22c))[_0x123977(0x301)](function(_0x157e3b) {
            const _0x3cb2d0 = _0x123977;
            $(this)[_0x3cb2d0(0x391)]() !== null && $(this)[_0x3cb2d0(0x391)]() !== '' ? empReqSelect = empReqSelect[_0x3cb2d0(0x2c5)](_0x3ef195 => _0x3ef195['input'] !== _0x157e3b) : (!empReqSelect[_0x3cb2d0(0x271)](_0xb663dd => _0xb663dd['input'] === _0x157e3b) && empReqSelect[_0x3cb2d0(0x26e)]({ 'input': _0x157e3b }), unfilledArr['push']({ 'input': $(this)[_0x3cb2d0(0x22e)](_0x3cb2d0(0x232)) })), empReqSelect[_0x3cb2d0(0x2dc)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](_0x123977(0x293))[_0x123977(0x301)](function(_0x38856b) {
            const _0x4c8d15 = _0x123977;
            skipTo = undefined, $(this)[_0x4c8d15(0x25c)](_0x4c8d15(0x36f))['data'](_0x4c8d15(0x36b)) !== '' && (skipTo = $(this)['parents'](_0x4c8d15(0x36f))['data'](_0x4c8d15(0x36b))), $(this)[_0x4c8d15(0x25c)]('[data-go-to]')['attr'](_0x4c8d15(0x272)) && (answer = $(this)[_0x4c8d15(0x25c)](_0x4c8d15(0x2c6))[_0x4c8d15(0x22e)](_0x4c8d15(0x272)), selections = selections[_0x4c8d15(0x2c5)](_0x18e4bd => _0x18e4bd[_0x4c8d15(0x236)] !== x), selections[_0x4c8d15(0x26e)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x18e12b => _0x18e12b[_0x4c8d15(0x236)] !== skipTo - 0x2), selections[_0x4c8d15(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x211f09 => _0x211f09[_0x4c8d15(0x236)] === x), selections[objIndex][_0x4c8d15(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4c8d15(0x366)] = x));
        }), $(steps[x])[_0x123977(0x271)]('.active-answer-card')['find'](_0x123977(0x273))[_0x123977(0x301)](function(_0x5d4b09) {
            const _0x3d3170 = _0x123977;
            let _0x29b23e = $(this)[_0x3d3170(0x391)]()[_0x3d3170(0x2dc)],
                _0x4ae5d7 = $(this)['data'](_0x3d3170(0x21c)) ? $(this)['data'](_0x3d3170(0x21c)) : 0x0;
            $(this)[_0x3d3170(0x391)]() !== '' && _0x29b23e >= _0x4ae5d7 ? empReqTextarea = empReqTextarea[_0x3d3170(0x2c5)](_0x1b11de => _0x1b11de[_0x3d3170(0x254)] !== _0x5d4b09) : (!empReqTextarea[_0x3d3170(0x271)](_0x3ebeac => _0x3ebeac[_0x3d3170(0x254)] === _0x5d4b09) && empReqTextarea[_0x3d3170(0x26e)]({ 'input': _0x5d4b09 }), unfilledArr['push']({ 'input': $(this)[_0x3d3170(0x22e)]('name') })), empReqTextarea[_0x3d3170(0x2dc)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)]('textarea')[_0x123977(0x301)](function(_0x4612c5) {
            const _0x4e7f1b = _0x123977;
            skipTo = undefined, $(this)[_0x4e7f1b(0x25c)](_0x4e7f1b(0x36f))[_0x4e7f1b(0x25e)](_0x4e7f1b(0x36b)) !== '' && (skipTo = $(this)[_0x4e7f1b(0x25c)](_0x4e7f1b(0x36f))[_0x4e7f1b(0x25e)]('skip-to')), $(this)[_0x4e7f1b(0x25c)](_0x4e7f1b(0x2c6))[_0x4e7f1b(0x22e)](_0x4e7f1b(0x272)) && (answer = $(this)[_0x4e7f1b(0x25c)](_0x4e7f1b(0x2c6))['attr']('data-go-to'), selections = selections['filter'](_0x4bfe65 => _0x4bfe65[_0x4e7f1b(0x236)] !== x), selections[_0x4e7f1b(0x26e)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4e7f1b(0x2c5)](_0x1d3391 => _0x1d3391[_0x4e7f1b(0x236)] !== skipTo - 0x2), selections[_0x4e7f1b(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4e7f1b(0x242)](_0x3ed9dd => _0x3ed9dd[_0x4e7f1b(0x236)] === x), selections[objIndex][_0x4e7f1b(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](':input[type=\x22email\x22][required]')[_0x123977(0x301)](function(_0x160cdc) {
            const _0x58a266 = _0x123977;
            $(this)[_0x58a266(0x391)]() !== '' ? validateEmail($(this)['val'](), $(this)[_0x58a266(0x25e)](_0x58a266(0x22d)), $(this)[_0x58a266(0x22e)]('name')) : (emailFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x58a266(0x22e)]('name') }));
        }), $(steps[x])[_0x123977(0x271)](_0x123977(0x223))[_0x123977(0x271)](_0x123977(0x243))[_0x123977(0x301)](function(_0x455e71) {
            const _0x210afd = _0x123977;
            skipTo = undefined, $(this)['parents'](_0x210afd(0x36f))['data']('skip-to') !== '' && (skipTo = $(this)[_0x210afd(0x25c)]('[data-skip-to]')[_0x210afd(0x25e)](_0x210afd(0x36b))), $(this)[_0x210afd(0x25c)](_0x210afd(0x2c6))[_0x210afd(0x22e)]('data-go-to') && (answer = $(this)['parents'](_0x210afd(0x2c6))[_0x210afd(0x22e)]('data-go-to'), selections = selections[_0x210afd(0x2c5)](_0x38b38e => _0x38b38e[_0x210afd(0x236)] !== x), console[_0x210afd(0x1f7)]('selections\x20email', selections, x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x438b7f => _0x438b7f[_0x210afd(0x236)] !== skipTo - 0x2), selections[_0x210afd(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x210afd(0x242)](_0x5cf649 => _0x5cf649[_0x210afd(0x236)] === x), selections[objIndex][_0x210afd(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        });
    }
    $(steps[x])[_0x123977(0x271)](_0x123977(0x307))['is'](_0x123977(0x389)) && (selArr = [], $(steps)['find']('[data-selected]:checked')[_0x123977(0x301)](function(_0x5b921f, _0x5ddce7) {
        const _0x337dc4 = _0x123977;
        selArr[_0x337dc4(0x26e)]({ 'selected': $(this)[_0x337dc4(0x25e)]('selected') });
    }), selString = [], selArr['forEach'](_0x4c0095 => selString[_0x123977(0x26e)](_0x4c0095[_0x123977(0x296)])), $(steps[x])['find'](_0x123977(0x223))[_0x123977(0x271)](_0x123977(0x206))[_0x123977(0x301)](function() {
        const _0xd9a5a8 = _0x123977;
        skipTo = undefined;
        if ($(this)[_0xd9a5a8(0x25c)](_0xd9a5a8(0x36f))[_0xd9a5a8(0x25e)](_0xd9a5a8(0x36b))) skipTo = $(this)[_0xd9a5a8(0x25c)]('[data-skip-to]')[_0xd9a5a8(0x25e)](_0xd9a5a8(0x36b));
        else $(this)[_0xd9a5a8(0x25e)]('skip-to') && (skipTo = $(this)[_0xd9a5a8(0x25e)](_0xd9a5a8(0x36b)));
        selections = selections[_0xd9a5a8(0x2c5)](_0x5f5104 => _0x5f5104[_0xd9a5a8(0x236)] !== x);
        if ($(this)[_0xd9a5a8(0x25e)](_0xd9a5a8(0x373))) answer = $(this)[_0xd9a5a8(0x22e)]('data-go-to'), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0xd9a5a8(0x2c5)](_0x4b6742 => _0x4b6742[_0xd9a5a8(0x236)] !== skipTo - 0x2), selections[_0xd9a5a8(0x26e)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x396764 => _0x396764[_0xd9a5a8(0x236)] === x), selections[objIndex][_0xd9a5a8(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex][_0xd9a5a8(0x366)] = x);
        else $(this)[_0xd9a5a8(0x25c)](_0xd9a5a8(0x2c6))[_0xd9a5a8(0x25e)](_0xd9a5a8(0x373)) && (answer = $(this)[_0xd9a5a8(0x25c)](_0xd9a5a8(0x2c6))[_0xd9a5a8(0x25e)](_0xd9a5a8(0x373)), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x230a8b => _0x230a8b[_0xd9a5a8(0x236)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0xd9a5a8(0x242)](_0x595eeb => _0x595eeb[_0xd9a5a8(0x236)] === x), selections[objIndex][_0xd9a5a8(0x2ea)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
    }), logicExtra ? ($(steps[x])['find']('.active-answer-card')[_0x123977(0x271)](_0x123977(0x382))['data'](_0x123977(0x369)) === !![] || $(steps[x])[_0x123977(0x271)]('[data-answer][data-radio-skip]:visible')['data'](_0x123977(0x369)) === !![]) && (skip && selections[_0x123977(0x2c5)](_0x57a253 => _0x57a253[_0x123977(0x236)] === x)[_0x123977(0x2dc)] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x123977(0x271)](_0x123977(0x388))[_0x123977(0x25e)](_0x123977(0x35b))))) : $(steps[x])['find'](_0x123977(0x382))['data'](_0x123977(0x369)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x123977(0x271)]('[data-radio-delay]')['data'](_0x123977(0x35b)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function disableRadioQuickTap() {
    const _0x562bed = _0x557e5c,
        _0x410d10 = 0x1f4;
    $(_0x562bed(0x2b9))['on']('click', function(_0x2e9a70) {
        const _0x18e7fa = _0x562bed,
            _0x1730dc = $(this);
        if (_0x1730dc['prop'](_0x18e7fa(0x237))) { _0x2e9a70['preventDefault'](); return; }
        _0x1730dc[_0x18e7fa(0x245)]('disabled', !![]), setTimeout(() => {
            const _0x163244 = _0x18e7fa;
            _0x1730dc[_0x163244(0x245)]('disabled', ![]);
        }, _0x410d10);
    });
}

function displayErrorMessage() {
    const _0x2ea512 = _0x557e5c;
    $(_0x2ea512(0x2c9))[_0x2ea512(0x244)](), unfilledArr[_0x2ea512(0x2dc)] > 0x0 && unfilledArr[_0x2ea512(0x1f0)](function(_0x5d9699) {
        const _0x335b03 = _0x2ea512;
        $('input[name=\x22' + _0x5d9699[_0x335b03(0x254)] + '\x22]')[_0x335b03(0x2c0)](_0x335b03(0x2c9))[_0x335b03(0x328)](), $(_0x335b03(0x337) + _0x5d9699[_0x335b03(0x254)] + '\x22]')[_0x335b03(0x25c)]()[_0x335b03(0x241)](_0x335b03(0x2c9))[_0x335b03(0x328)](), $(_0x335b03(0x364) + _0x5d9699[_0x335b03(0x254)] + '\x22]')[_0x335b03(0x2c0)](_0x335b03(0x2c9))[_0x335b03(0x328)](), $(_0x335b03(0x1f2) + _0x5d9699['input'] + '\x22]')['siblings'](_0x335b03(0x2c9))[_0x335b03(0x328)]();
    });
}

function resetInputErrorMessage(_0x32c1c1) {
    const _0x4c7125 = _0x557e5c;
    $(_0x4c7125(0x337) + _0x32c1c1 + '\x22]')['siblings'](_0x4c7125(0x2c9))[_0x4c7125(0x244)](), $(_0x4c7125(0x337) + _0x32c1c1 + '\x22]')[_0x4c7125(0x25c)]()['children'](_0x4c7125(0x2c9))[_0x4c7125(0x244)](), $('textarea[name=\x22' + _0x32c1c1 + '\x22]')[_0x4c7125(0x2c0)](_0x4c7125(0x2c9))[_0x4c7125(0x244)](), $('select[name=\x22' + _0x32c1c1 + '\x22]')[_0x4c7125(0x2c0)](_0x4c7125(0x2c9))['hide']();
}

function increaseCurstep() {
    const _0x1d81d6 = _0x557e5c;
    countCard ? (curStep = x + 0x1, $(_0x1d81d6(0x33b))[_0x1d81d6(0x355)](steps['length'])) : $(steps[x])[_0x1d81d6(0x25e)](_0x1d81d6(0x2e5)) ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x1d81d6(0x2c1))[_0x1d81d6(0x355)](curStep);
}

function decreaseCurstep() {
    const _0x356b2c = _0x557e5c;
    countCard ? (curStep = x - 0x1, $(_0x356b2c(0x33b))[_0x356b2c(0x355)](steps[_0x356b2c(0x2dc)])) : $(steps[x])[_0x356b2c(0x25e)](_0x356b2c(0x2e5)) ? curStep = x - 0x0 : curStep = x - 0x1, $('[data-text=\x22current-step\x22]')['text'](curStep);
}
$('[data-form=\x22submit-btn\x22]')['on']('click', function(_0x2e5de7) {
    const _0x507b28 = _0x557e5c;
    _0x2e5de7[_0x507b28(0x286)](), _0x2e5de7[_0x507b28(0x211)]();
    $(this)['data'](_0x507b28(0x2d6)) && (redirectTo = $(this)['data'](_0x507b28(0x2d6)));
    !$(this)[_0x507b28(0x25e)](_0x507b28(0x201)) && (newTab = $(this)['data']('new-tab'));
    successCard = $(this)[_0x507b28(0x25e)](_0x507b28(0x379));
    const _0x1ab795 = new URLSearchParams(window[_0x507b28(0x37d)][_0x507b28(0x27c)]),
        _0x58a96a = (_0x1c9ad3, _0x61ac2b) => {
            const _0x5c59f4 = _0x507b28,
                _0x4188cf = document[_0x5c59f4(0x34d)](_0x5c59f4(0x370) + _0x1c9ad3 + '\x22]');
            _0x4188cf && (_0x4188cf[_0x5c59f4(0x294)] = _0x61ac2b);
        };
    _0x58a96a('referrer', _0x1ab795['get'](_0x507b28(0x2de)) || document[_0x507b28(0x2de)] || 'Direct'), _0x58a96a(_0x507b28(0x378), navigator[_0x507b28(0x1fc)]), _0x58a96a(_0x507b28(0x2cb), new Date()[_0x507b28(0x2f7)]()), _0x58a96a(_0x507b28(0x2fb), Intl[_0x507b28(0x329)]()['resolvedOptions']()[_0x507b28(0x2f0)]), _0x58a96a(_0x507b28(0x303), window[_0x507b28(0x338)][_0x507b28(0x2be)] + 'x' + window[_0x507b28(0x338)][_0x507b28(0x1fd)]), _0x58a96a(_0x507b28(0x26c), 'N/A');
    const _0x32b14d = () => {
        const _0xf580bd = _0x507b28,
            _0x51bf87 = document[_0xf580bd(0x34d)](_0xf580bd(0x1f5));
        if (_0x51bf87) {
            const _0x94e502 = localStorage[_0xf580bd(0x29a)](_0xf580bd(0x26f));
            console[_0xf580bd(0x1f7)](_0x94e502);
            if (_0x94e502) {
                const _0x30511c = Math[_0xf580bd(0x380)]((Date['now']() - parseInt(_0x94e502)) / 0x3e8);
                _0x51bf87[_0xf580bd(0x294)] = _0x30511c + '\x20seconds';
            } else _0x51bf87[_0xf580bd(0x294)] = _0xf580bd(0x372);
        }
    };
    _0x32b14d(), logicExtra && fill && ($(this)[_0x507b28(0x245)](_0x507b28(0x2b4), !![]), $(steps)['find'](_0x507b28(0x264))[_0x507b28(0x245)](_0x507b28(0x360), ![]), console[_0x507b28(0x1f7)](_0x507b28(0x297))), localStorage[_0x507b28(0x327)]('filledInput'), localStorage[_0x507b28(0x327)](_0x507b28(0x26f)), localStorage[_0x507b28(0x327)](_0x507b28(0x1f4)), typeof formlyCustomFunction === _0x507b28(0x205) && formlyCustomFunction(), fill ? ($(this)['data'](_0x507b28(0x21f)) ? (console[_0x507b28(0x1f7)]($(this)[_0x507b28(0x25e)]('wait')), $(this)[_0x507b28(0x355)]($(this)[_0x507b28(0x25e)]('wait'))) : $(this)[_0x507b28(0x391)](_0x507b28(0x23a))[_0x507b28(0x355)]('Please\x20wait...'), $('[data-form=\x22multistep\x22]')[_0x507b28(0x2a6)](), $(_0x507b28(0x2b6))['length'] > 0x0 && (grecaptcha[_0x507b28(0x233)]()[_0x507b28(0x2dc)] === 0x0 && (form[_0x507b28(0x271)](_0x507b28(0x32a))[_0x507b28(0x355)](oldSubmitText), form[_0x507b28(0x271)](_0x507b28(0x32a))['val'](oldSubmitText))), customError && $(_0x507b28(0x2c9))['hide']()) : customError && displayErrorMessage();
});

function _0x384f() {
    const _0x2478b4 = ['debug-mode', '[data-input-index=\x22', 'script[src=\x22', '[data-form=\x22step\x22][data-card]', 'ms-field', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'card', '[data-form=\x22submit-btn\x22]:visible', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'skipTo', '\x22][data-input-reveal-value]', ':input[type=\x22file\x22][required]', '[data-clone-wrapper]', '[data-conditional-result]', 'div', 'timeZone', '\x20|\x20<strong>data-go-to\x20</strong>\x20=\x22', ':input[type=\x22password\x22]', '[data-quiz]', ':first', 'submit-show', 'translateX(-40rem)', 'toISOString', '[data-clone-input]', '808HWDzSX', '[data-cms-select=text]', 'time-zone', 'option[value=\x22', 'clickable-all', '[data-display]', '[data-show-if]', 'last', 'each', '0.4', 'screen-resolution', 'textarea:focus', 'redirect-delay', 'error', ':input[type=\x22radio\x22]', 'Counter\x20already\x20updated\x20for\x20this\x20month.', 'BODY', 'removeClass', 'active-answer-card', ':input[type=\x22number\x22]', '\x22]\x20[data-clone=\x22', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'append', '[data-add-new-input=\x22', '[data-callback=\x22recaptcha\x22]', 'tagName', '[data-add-new]', 'current', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '[data-clickable-all]', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'clone', 'open', 'enter', 'Failed\x20to\x20update\x20counter:', 'formlyLastStepAnswer', 'form[data-form=\x22multistep\x22]\x20:input', '[data-clone=\x22', 'input[type=\x22email\x22]:visible', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', '[data-form=\x22step\x22]', 'Counter\x20updated\x20successfully.', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', ':input[type=\x22tel\x22]', 'reinit', 'inputName', 'removeItem', 'fadeIn', 'DateTimeFormat', '[data-form=\x22submit-btn\x22]', 'substring', 'textarea', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', '[data-form=\x22remove-clone\x22]', 'reset', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;\x20on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-clone-input-wrapper=\x22', 'script', '[data-weighted-selection]', 'init', ':input[type=\x22url\x22][required]', '[data-display-wrapper=\x22', 'input[name=\x22', 'screen', 'selection', 'checkbox', '[data-text=\x22total-steps\x22]', 'metaKey', '<div\x20class=\x22f-text_script\x22>Before\x20&lt;/body&gt;\x20tag<br/></div>', 'url', '\x22]\x20input', 'data-name', '5803aygjVN', 'textarea[autofocus]', 'f-show', '[data-enter]', 'weighted-selection', 'add-new-input', 'redirect-form-hehexd', 'videsigns', '<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'count-card', '[data-radio-skip]', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'querySelector', 'getMonth', 'PASS', 'keydown', '[data-clone]', '[data-text=\x22total-weight\x22]', ':input[type=\x22time\x22]', '[data-click-addclass]', 'text', '[data-clone-wrapper=\x22', 'quiz', 'logic-extra', 'style', '[data-form=\x22back-btn\x22]', 'radio-delay', '\x22]\x20[data-clone-input=\x22', 'filledInput', '[data-clone-input=\x22', '[data-input-reveal=\x22', 'required', '[data-form=\x22progress\x22]', 'auto', 'get', 'textarea[name=\x22', '[data-add-new=\x22', 'backTo', '[data-form=\x22progress-indicator\x22]', '.w-checkbox-input', 'radio-skip', 'phone-validation', 'skip-to', '[data-weighted-selection-range]', 'input-field', '228168sxxeow', '[data-skip-to]', '[data-hidden-input=\x22', 'first', 'N/A', 'go-to', 'getElementById', 'file', 'clicked', 'Inside\x20<head>\x20tag', 'user-agent', 'success', 'f-hide', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'AND', 'location', ':input[type=\x22checkbox\x22]', 'scroll-top', 'round', '[data-form=\x22next-btn\x22]', '[data-radio-skip]:visible', '[data-radio-skip=\x22true\x22]', '[data-selection-weight]', 'input[autofocus]', 'toString', 'input[type=\x22radio\x22]:checked', '[data-radio-delay]', ':checked', 'stringify', 'parse', 'input[type=\x22checkbox\x22]', 'weighted-selection-range', 'reset-delay', 'keyCode', 'parent', 'val', '[data-selection=\x22', '.w-form-done', 'input[type=\x22checkbox\x22]:visible', '32iPEFRB', 'Webflow', ':input[type=\x22text\x22]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'radio', '<div>Step\x20', 'split', '[data-input-field=\x22', 'max-checkbox', 'forEach', 'label', 'select[name=\x22', '<div\x20class=\x22f-text_attribute-title\x22>Step\x20', 'formlyLastStep', '[data-hidden-input=\x22page-visit-duration\x22]', '[data-selection]', 'log', '.w-radio-input', '[data-clickable]', '[data-redirect-delay]', 'type', 'userAgent', 'height', 'every', '12uKuokE', 'pushState', 'new-tab', 'input[type=\x22text\x22][required]:visible', 'option[value=\x22$(this).val()\x22]', 'data-radio-delay', 'function', ':input[type=\x27radio\x27]:checked', 'data-show-if', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '<div\x20class=\x22f-text_script\x22>Inside\x20&lt;head&gt;\x20tag<br/></div>', 'slice', '[data-clone-input-wrapper]', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'display', '1297417PhkguC', 'getElementsByTagName', '\x22]:checked', 'stopPropagation', 'includes', '\x22]:not([data-prefill=\x22false\x22])', '\x22]\x20textarea', 'toLowerCase', 'https://slater.app/4908/8862.js', '[data-range]:contains(', 'top', 'not', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'conditional-result', 'min-character', 'remove-upload', 'ix2', 'wait', 'multiple-results', '<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a</svg>\x0a</div>', 'focus', '.active-answer-card', ':input[type=\x22time\x22][required]', 'fail', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Radio\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-cms-select=cms]', '[data-display-input]', 'select[required]:visible', 'translateX(0rem)', 'select[required]', 'block-domain', 'attr', '<br>Data\x20Answer\x20=\x20', ':input[type=\x22tel\x22][required]', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Checkboxes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'name', 'getResponse', 'test', ':input[type=\x22password\x22][required]', 'step', 'disabled', ':input[type=\x22date\x22][required]', 'innerHTML', 'Please\x20wait...', 'input-reveal-value', '[data-max-checkbox]', 'change', '[data-input-field]', 'clone-input', 'head', 'children', 'findIndex', ':input[type=\x22email\x22]', 'hide', 'prop', 'trigger', '.active-answer-card\x20:input[type=\x27checkbox\x27]', 'field', 'input[type=\x22submit\x22]', 'destroy', ':input[type=\x22text\x22][required]', ':input[type=\x22number\x22][required]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-display=\x22', 'status', 'trim', '5266370olWoVz', '[data-count-card]', '[data-index=\x22', 'input', 'edit-step', 'input[type=\x22checkbox\x22]:not(:checked)', 'join', 'phone-autoformat', '[data-display-input=\x22', '[required]', 'add-new-input-limit', 'parents', 'https://videsigns-staging.co.uk/formly-counter', 'data', '[data-btn=\x22check\x22]', 'select:not([data-prefill=\x22false\x22])', 'remove', 'searchParams', 'f-mySidenav', ':input', 'createElement', 'data-radio-skip', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'closest', 'some', '[data-form=\x22next-btn\x22][data-submit-show]', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x20', 'click-path', '[data-form-ms=\x22submit-btn\x22]', 'push', 'pageLoadTime', ':input[required]', 'find', 'data-go-to', 'textarea[required]', 'click-addclass', '[data-input-target=\x22', '\x22]\x20[data-input-field^=\x22', 'param-analytics', '[data-display-input-index=\x22', 'setItem', 'html,\x20body', '6816680tXaVaI', 'search', '[data-input-reveal]', '[data-query-param]', '\x22][data-input-reveal-value=\x22*\x22]', '29619BISCGk', '\x22][value=\x22', 'input:radio[required]', '[data-form=\x22submit\x22]:visible', '[data-display-input-wrapper=\x22', 'href', 'preventDefault', 'clickable', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-answer=\x22', '</div>', '[data-form=\x22custom-progress-indicator\x22]', 'input:radio[name=\x22', '[data-selection=\x22other\x22]', 'data-input-field', '[data-success-card]', 'form[data-form=\x22multistep\x22]', '3426UXWAnK', '[data-display-index=\x22', 'select', 'value', '[data-last-step]', 'selected', 'nonvalidated', 'click', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'getItem', '[data-add-new-input]', ':input[type=\x22date\x22]', 'multistep', '[data-card=\x22true\x22]', 'checked', 'cookie', '[data-input-reveal]:not(:visible)', 'select-multiple', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Custom\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20is\x20on\x20data-card\x20=\x20true</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'history', 'submit', 'key', 'index', 'query-param', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'css', 'true', 'none', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>ReCAPTCHA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'add-new', 'scroll-top-offset', 'FAIL', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-cms-select=input]', 'novalidate', '[data-form=\x22remove-input-clone\x22]', 'div.g-recaptcha', 'custom-error-message', '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Total\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', 'input[type=\x22radio\x22]', 'body', '[data-btn=\x22edit\x22]', 'keypress', '<div\x20class=\x22f-logic-text\x22><strong>data-answer</strong>=\x22', 'width', 'addClass', 'siblings', '[data-text=\x22current-step\x22]', '[data-input-target]', 'input:checkbox', 'w--redirected-checked', 'filter', '[data-go-to]', '[data-answer]', 'src', '[data-text=\x22error-message\x22]', 'show', 'timestamp', 'offset', 'querySelectorAll', 'input-reveal', '[data-reset-delay]', 'relationship-', 'Before\x20&lt;/body&gt;\x20tag', '[data-checkbox]', 'answer', '[data-custom-error-message]', 'transform', 'redirect', '115766AORQnb', 'appendChild', ':input[type=\x22email\x22][required]', '[data-form=\x22multistep\x22]', 'startsWith', 'length', 'data-form', 'referrer'];
    _0x384f = function() { return _0x2478b4; };
    return _0x384f();
}

function nextStep() {
    const _0x509609 = _0x557e5c;
    customError ? ($(_0x509609(0x2c9))['hide'](), fill ? (x++, progress = x, x <= steps[_0x509609(0x2dc)] - 0x1 && (updateStep(), memory && saveFilledInput()), increaseCurstep()) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0x509609(0x2dc)] - 0x1 && (updateStep(), memory && saveFilledInput()), increaseCurstep()), andLogic();
}

function backStep() {
    const _0x365226 = _0x557e5c;
    customError && $(_0x365226(0x2c9))[_0x365226(0x244)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x365226(0x30a)](_0x365226(0x314)), selections[_0x365226(0x2c5)](_0x2bb7ed => _0x2bb7ed['skipTo'] === x)['length'] > 0x0 ? x = parseInt(getSafe(() => selections[_0x365226(0x2c5)](_0x345306 => _0x345306['skipTo'] === x)[0x0][_0x365226(0x366)])) : x--, updateStep()), ($(steps[x])[_0x365226(0x271)](_0x365226(0x382))[_0x365226(0x25e)]('radio-skip') === !![] || $(steps[x])[_0x365226(0x271)](_0x365226(0x223))[_0x365226(0x271)]('[data-radio-skip]:visible')['data'](_0x365226(0x369)) === !![] || $(steps[x])[_0x365226(0x271)]('[data-answer][data-radio-skip]:visible')[_0x365226(0x25e)](_0x365226(0x369)) === !![]) && (all_data = all_data[_0x365226(0x2c5)](_0x52c7c8 => _0x52c7c8[_0x365226(0x248)] !== $(steps[x])[_0x365226(0x271)]('input[type=\x22radio\x22]:checked')[_0x365226(0x22e)]('name')), $(_0x365226(0x1ee) + $(steps[x])[_0x365226(0x271)](_0x365226(0x387))['attr'](_0x365226(0x232)) + '\x22]')[_0x365226(0x244)](), $(steps[x])['find'](_0x365226(0x2b9))[_0x365226(0x245)]('checked', ![]), $(steps[x])[_0x365226(0x271)]('.w-form-formradioinput')[_0x365226(0x30a)]('w--redirected-checked'), validation());
}
weightedSelectionRange && $(_0x557e5c(0x1f6))[_0x557e5c(0x301)](function() {
    const _0x29d751 = _0x557e5c;
    $(this)[_0x29d751(0x30f)]('<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(this)[_0x29d751(0x25e)](_0x29d751(0x339)) + _0x29d751(0x28a));
});

function selectionQuiz() {
    const _0x43bd1d = _0x557e5c;
    if ($(this)[_0x43bd1d(0x271)](_0x43bd1d(0x25f))) {
        $(_0x43bd1d(0x1f6))[_0x43bd1d(0x244)](), $(_0x43bd1d(0x384))[_0x43bd1d(0x244)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x43bd1d(0x1f0)](function(_0xee48e) {
                const _0x3808fe = _0x43bd1d;
                selTotal = selTotal + _0xee48e[_0x3808fe(0x296)];
            }), $(_0x43bd1d(0x352))[_0x43bd1d(0x355)](selTotal);
            if ($('[data-selection=\x22' + selTotal + '\x22]')[_0x43bd1d(0x2dc)] > 0x0) $(_0x43bd1d(0x392) + selTotal + '\x22]')[_0x43bd1d(0x328)]();
            else $('[data-range]:contains(' + selTotal + ')') ? $(_0x43bd1d(0x217) + selTotal + ')')[_0x43bd1d(0x390)](_0x43bd1d(0x1f6))['eq'](0x0)[_0x43bd1d(0x2ca)]() : $(_0x43bd1d(0x28d))[_0x43bd1d(0x328)]();
        } else {
            let _0x512e75 = -0x1,
                _0x3943d4 = [];
            $(_0x43bd1d(0x1f6))[_0x43bd1d(0x301)](function(_0x1f6b53) {
                const _0x2be8ce = _0x43bd1d;
                $($('[data-selection]')[_0x1f6b53])['data'](_0x2be8ce(0x339))[_0x2be8ce(0x212)](selString[_0x2be8ce(0x257)]()) && (_0x512e75 = _0x1f6b53, _0x3943d4[_0x2be8ce(0x26e)](_0x1f6b53));
            }), multiSelections ? _0x3943d4[_0x43bd1d(0x2dc)] > 0x0 ? _0x3943d4['forEach'](_0x565314 => {
                const _0x4aaba8 = _0x43bd1d;
                $($(_0x4aaba8(0x1f6))[_0x565314])[_0x4aaba8(0x328)]();
            }) : $(_0x43bd1d(0x28d))['fadeIn']() : _0x512e75 > -0x1 ? $($(_0x43bd1d(0x1f6))[_0x512e75])[_0x43bd1d(0x328)]() : $('[data-selection=\x22other\x22]')[_0x43bd1d(0x328)]();
        }
    }
}

function triggerInputAllData() {
    const _0x28909c = _0x557e5c;
    if (savedFilledInput && memory) savedFilledInput[_0x28909c(0x1f0)](_0x3c534c => {
        const _0xc1ff03 = _0x28909c;
        var _0x387e3f = $(_0xc1ff03(0x337) + _0x3c534c[_0xc1ff03(0x326)] + _0xc1ff03(0x281) + _0x3c534c[_0xc1ff03(0x294)] + _0xc1ff03(0x213)),
            _0x5d4294 = $(_0xc1ff03(0x337) + _0x3c534c[_0xc1ff03(0x326)] + '\x22]:not([data-prefill=\x22false\x22])'),
            _0x44f116 = $(_0xc1ff03(0x364) + _0x3c534c[_0xc1ff03(0x326)] + '\x22]:not([data-prefill=\x22false\x22])'),
            _0x10ec5d = $('input[type=\x22checkbox\x22][name=\x22' + _0x3c534c[_0xc1ff03(0x326)] + '\x22]'),
            _0x575f01 = $('input[type=\x22radio\x22][name=\x22' + _0x3c534c[_0xc1ff03(0x326)] + _0xc1ff03(0x281) + _0x3c534c[_0xc1ff03(0x294)] + _0xc1ff03(0x213));
        if (_0x387e3f[_0xc1ff03(0x22e)](_0xc1ff03(0x1fb)) !== _0xc1ff03(0x375)) {
            if (_0x387e3f[_0xc1ff03(0x22e)](_0xc1ff03(0x1fb)) === _0xc1ff03(0x1eb) && !_0x387e3f[_0xc1ff03(0x25c)](_0xc1ff03(0x34b))[_0xc1ff03(0x25e)]('radio-skip')) _0x387e3f[_0xc1ff03(0x298)](), _0x387e3f[_0xc1ff03(0x2c0)](_0xc1ff03(0x1f8))[_0xc1ff03(0x2bf)](_0xc1ff03(0x2c4)), _0x387e3f[_0xc1ff03(0x246)]('input');
            else _0x3c534c['value'] === 'on' ? (_0x5d4294['click'](), _0x5d4294['siblings'](_0xc1ff03(0x368))[_0xc1ff03(0x2bf)](_0xc1ff03(0x2c4)), _0x5d4294[_0xc1ff03(0x246)]('input')) : (_0x5d4294[_0xc1ff03(0x391)](_0x3c534c[_0xc1ff03(0x294)]), _0x44f116[_0xc1ff03(0x391)](_0x3c534c[_0xc1ff03(0x294)]), $(_0xc1ff03(0x260))[_0xc1ff03(0x271)](_0xc1ff03(0x2fc) + _0x3c534c[_0xc1ff03(0x294)] + '\x22]')[_0xc1ff03(0x245)](_0xc1ff03(0x296), !![]), _0x5d4294[_0xc1ff03(0x246)]('input'), _0x5d4294[_0xc1ff03(0x246)]('change'));
            const _0x375ace = _0x575f01['data']('click-addclass'),
                _0x5b3cbd = _0x10ec5d[_0xc1ff03(0x25e)](_0xc1ff03(0x274));
            _0x575f01[_0xc1ff03(0x390)]()[_0xc1ff03(0x2bf)](_0x375ace), _0x10ec5d[_0xc1ff03(0x390)]()[_0xc1ff03(0x2bf)](_0x5b3cbd);
        }
    });
    else _params && (getParams(), searchQ[_0x28909c(0x1f0)](_0x28b087 => {
        const _0x22c4df = _0x28909c;
        if ($('input[name=\x22' + _0x28b087[_0x22c4df(0x326)] + '\x22][value=\x22' + _0x28b087['value'] + _0x22c4df(0x213))[_0x22c4df(0x22e)](_0x22c4df(0x1fb)) !== _0x22c4df(0x375)) {
            if ($('input[name=\x22' + _0x28b087[_0x22c4df(0x2a7)] + '\x22][value=\x22' + _0x28b087[_0x22c4df(0x391)] + _0x22c4df(0x213))[_0x22c4df(0x22e)](_0x22c4df(0x1fb)) === _0x22c4df(0x1eb)) $(_0x22c4df(0x337) + _0x28b087[_0x22c4df(0x2a7)] + _0x22c4df(0x281) + _0x28b087['val'] + '\x22]:not([data-prefill=\x22false\x22])')[_0x22c4df(0x298)](), $(_0x22c4df(0x337) + _0x28b087[_0x22c4df(0x2a7)] + _0x22c4df(0x281) + _0x28b087[_0x22c4df(0x391)] + _0x22c4df(0x213))[_0x22c4df(0x2c0)](_0x22c4df(0x1f8))[_0x22c4df(0x2bf)](_0x22c4df(0x2c4)), $(_0x22c4df(0x337) + _0x28b087['key'] + _0x22c4df(0x281) + _0x28b087['val'] + _0x22c4df(0x213))[_0x22c4df(0x246)]('input');
            else _0x28b087['val'] === 'on' ? ($(_0x22c4df(0x337) + _0x28b087[_0x22c4df(0x2a7)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x22c4df(0x298)](), $(_0x22c4df(0x337) + _0x28b087[_0x22c4df(0x2a7)] + '\x22]:not([data-prefill=\x22false\x22])')['siblings'](_0x22c4df(0x368))[_0x22c4df(0x2bf)](_0x22c4df(0x2c4)), $(_0x22c4df(0x337) + _0x28b087['key'] + '\x22]')[_0x22c4df(0x246)](_0x22c4df(0x254))) : ($(_0x22c4df(0x337) + _0x28b087['key'] + _0x22c4df(0x213))[_0x22c4df(0x391)](_0x28b087[_0x22c4df(0x391)]), $(_0x22c4df(0x364) + _0x28b087['key'] + _0x22c4df(0x213))[_0x22c4df(0x391)](_0x28b087[_0x22c4df(0x391)]), $(_0x22c4df(0x1f2) + _0x28b087['key'] + _0x22c4df(0x213))[_0x22c4df(0x271)](_0x22c4df(0x2fc) + _0x28b087[_0x22c4df(0x391)] + '\x22]')['prop'](_0x22c4df(0x296), !![]), $('input[name=\x22' + _0x28b087['key'] + _0x22c4df(0x213))['trigger'](_0x22c4df(0x254)), $('input[name=\x22' + _0x28b087['key'] + _0x22c4df(0x213))[_0x22c4df(0x246)](_0x22c4df(0x23d)));
        }
    }));
}
$(_0x557e5c(0x381))['on'](_0x557e5c(0x298), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x557e5c(0x35a))['on'](_0x557e5c(0x298), function() { next = ![], back = !![], backStep(); }), $(steps)['find'](':input')[_0x557e5c(0x219)]('[type=\x22radio\x22]')['on']('input', function(_0x57f66f) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x557e5c(0x271)](_0x557e5c(0x2b9))['on'](_0x557e5c(0x298), function() { skip = !![], validation(), addClickClass(); });
$(_0x557e5c(0x316))[_0x557e5c(0x25e)]('clickable-all') ? $(_0x557e5c(0x28b))[_0x557e5c(0x30a)](_0x557e5c(0x237)) : $('[data-form=\x22custom-progress-indicator\x22]')['addClass']('disabled');

function clickableIndicator() {
    const _0x2aba97 = _0x557e5c;
    $(_0x2aba97(0x1f9))[_0x2aba97(0x25e)]('clickable') && ($(_0x2aba97(0x367))[_0x2aba97(0x30a)](_0x2aba97(0x314)), $(_0x2aba97(0x1f9))['data'](_0x2aba97(0x2fd)) ? (x = $(this)[_0x2aba97(0x2a8)](), updateStep()) : $(this)[_0x2aba97(0x2a8)]() <= progress && (x = $(this)[_0x2aba97(0x2a8)](), updateStep())), $(_0x2aba97(0x2c1))[_0x2aba97(0x355)](x + 0x1);
}
$('[data-form=\x22custom-progress-indicator\x22]')['on'](_0x557e5c(0x298), clickableIndicator), excludeCount = !$(_0x557e5c(0x2da))['data']('count-card'), steps['each'](function(_0x138235) {
    const _0x29d299 = _0x557e5c,
        _0x3a1e5a = $(this)['data'](_0x29d299(0x2e5));
    console['log'](excludeCount), _0x3a1e5a && excludeCount && $(_0x29d299(0x28b))['eq'](_0x138235)['hide']();
});
$(_0x557e5c(0x2da))[_0x557e5c(0x25e)](_0x557e5c(0x2df)) && ($('[data-go-to]')[_0x557e5c(0x301)](function() {
    const _0x2fdfc6 = _0x557e5c;
    $(this)['append']('<br>Data\x20Go\x20To\x20=\x20', $(this)[_0x2fdfc6(0x25e)](_0x2fdfc6(0x373)));
}), $(_0x557e5c(0x2c7))['each'](function() {
    const _0x3da295 = _0x557e5c;
    $(this)[_0x3da295(0x30f)](_0x3da295(0x22f), $(this)[_0x3da295(0x25e)]('answer'));
}));

function resetFormly() {
    const _0x309659 = _0x557e5c;
    $(_0x309659(0x2da))['trigger'](_0x309659(0x32f)), $(_0x309659(0x2da))[_0x309659(0x25c)]()[_0x309659(0x271)]('.w-form-done')[_0x309659(0x244)](), x = 0x0, updateStep(), $(_0x309659(0x2da))[_0x309659(0x2ca)](), $('[data-form=\x22submit-btn\x22]')[_0x309659(0x355)](oldSubmitText), $(_0x309659(0x32a))[_0x309659(0x391)](oldSubmitText), $(_0x309659(0x2c1))[_0x309659(0x355)](0x1), $('[data-form=\x22multistep\x22]')[_0x309659(0x271)](_0x309659(0x2c3))[_0x309659(0x2c0)](_0x309659(0x368))[_0x309659(0x30a)](_0x309659(0x2c4));
}
$(document)['ajaxComplete'](function(_0x55e4dc, _0x186742, _0x124c4c) {
    const _0x236dc9 = _0x557e5c;
    if (_0x124c4c[_0x236dc9(0x33e)][_0x236dc9(0x212)]('https://webflow.com/api/v1/form/')) {
        const _0x7a1902 = _0x186742[_0x236dc9(0x24f)] === 0xc8,
            _0x9044bd = _0x236dc9(0x347);
        redirectTo && _0x7a1902 && (newTab ? window[_0x236dc9(0x319)](redirectTo, '_blank') : setTimeout(() => {
            const _0x4c6a2b = _0x236dc9;
            location[_0x4c6a2b(0x285)] = redirectTo;
        }, redirectDelay)), _0x7a1902 && successCard !== '' && $('[data-success-card=\x22' + successCard + '\x22]')[_0x236dc9(0x328)](), _0x7a1902 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x7a1902 && ($(_0x236dc9(0x32a))[_0x236dc9(0x391)]('Please\x20wait...'), $(_0x236dc9(0x32a))[_0x236dc9(0x355)](_0x236dc9(0x23a)));
    }
}), $(_0x557e5c(0x2bb))['on'](_0x557e5c(0x298), function() {
    const _0x26fc1b = _0x557e5c;
    var _0x507c91 = $(this)[_0x26fc1b(0x390)]()['find'](_0x26fc1b(0x23e))[_0x26fc1b(0x25e)]('input-field');
    setTimeout(function() {
        const _0x464840 = _0x26fc1b;
        $('input[name=\x22' + _0x507c91 + '\x22]')[_0x464840(0x222)]();
    }, 0x64), back = !![], x = $(this)[_0x26fc1b(0x25e)](_0x26fc1b(0x255)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(_0x26fc1b(0x33b))[_0x26fc1b(0x355)](steps[_0x26fc1b(0x2dc)])) : $(steps[x])['data'](_0x26fc1b(0x2e5)) ? curStep = x + 0x0 : curStep = x + 0x1, $('[data-text=\x22current-step\x22]')[_0x26fc1b(0x355)](curStep), back = ![];
}), $('[data-btn=\x22reset\x22]')['on'](_0x557e5c(0x298), function() {
    const _0x391b5c = _0x557e5c;
    $(_0x391b5c(0x2da))[_0x391b5c(0x246)](_0x391b5c(0x32f));
    let _0x2b37b3 = $(this);
    $(this)[_0x391b5c(0x355)]('Please\x20wait...'), setTimeout(function() {
        const _0x563c1a = _0x391b5c;
        $(_0x2b37b3)['text'](oldResetText), $(_0x2b37b3)[_0x563c1a(0x25c)](_0x563c1a(0x393))[_0x563c1a(0x244)](), x = 0x0, updateStep(), $(_0x563c1a(0x2da))[_0x563c1a(0x2ca)](), $(_0x563c1a(0x32a))[_0x563c1a(0x355)](oldSubmitText), $(_0x563c1a(0x32a))[_0x563c1a(0x391)](oldSubmitText), $(_0x2b37b3)[_0x563c1a(0x391)](oldSubmitText), $('[data-text=\x22current-step\x22]')[_0x563c1a(0x355)](0x1), $(_0x563c1a(0x2da))[_0x563c1a(0x271)](_0x563c1a(0x2c3))['siblings'](_0x563c1a(0x368))[_0x563c1a(0x30a)]('w--redirected-checked');
    }, resetDelay);
}), $(_0x557e5c(0x2ba))['on'](_0x557e5c(0x2bc), function(_0x1c39d7) {
    const _0x42178f = _0x557e5c;
    if (_0x1c39d7[_0x42178f(0x38f)] === 0xd) {
        _0x1c39d7[_0x42178f(0x286)](), _0x1c39d7[_0x42178f(0x211)]();
        if ($(steps[x])[_0x42178f(0x271)](_0x42178f(0x32c))['is'](':focus')) $(steps[x])[_0x42178f(0x271)](_0x42178f(0x304))['val']($(steps[x])[_0x42178f(0x271)](_0x42178f(0x304))['val']() + '\x0a');
        else $(_0x42178f(0x344))['data'](_0x42178f(0x31a)) && fill && (totalSteps > curStep && $(_0x42178f(0x381))[0x0][_0x42178f(0x298)]());
    }
}), $('body')[_0x557e5c(0x350)](function(_0x32ea01) {
    const _0x14f4fd = _0x557e5c;
    (_0x32ea01[_0x14f4fd(0x33c)] || _0x32ea01['ctrlKey']) && _0x32ea01['keyCode'] == 0xd && (x >= steps[_0x14f4fd(0x2dc)] - 0x1 && fill ? $(steps[x])[_0x14f4fd(0x271)](_0x14f4fd(0x2e6))[_0x14f4fd(0x298)]() : (_0x32ea01[_0x14f4fd(0x286)](), _0x32ea01['stopPropagation']()));
}), $(_0x557e5c(0x2da))[_0x557e5c(0x271)](':input')['on'](_0x557e5c(0x23d), function() {
    const _0x2af9a6 = _0x557e5c;
    all_data = all_data['filter'](_0x28a210 => _0x28a210['field'] !== $(this)[_0x2af9a6(0x22e)](_0x2af9a6(0x232))), $(this)[_0x2af9a6(0x22e)](_0x2af9a6(0x1fb)) === 'checkbox' ? $(this)['is'](_0x2af9a6(0x389)) ? all_data[_0x2af9a6(0x26e)]({ 'field': $(this)[_0x2af9a6(0x22e)](_0x2af9a6(0x232)), 'value': $(this)[_0x2af9a6(0x2c0)]('span')[_0x2af9a6(0x355)]() }) : $(_0x2af9a6(0x1ee) + $(this)[_0x2af9a6(0x22e)]('name') + '\x22]')['hide']() : (all_data[_0x2af9a6(0x26e)]({ 'field': $(this)[_0x2af9a6(0x22e)](_0x2af9a6(0x232)), 'value': $(this)[_0x2af9a6(0x391)]() }), $(this)[_0x2af9a6(0x391)]() !== '' && resetInputErrorMessage($(this)[_0x2af9a6(0x22e)](_0x2af9a6(0x232)))), all_data[_0x2af9a6(0x1f0)](function(_0x2baaf4) {
        const _0x17c2c2 = _0x2af9a6;
        $(_0x17c2c2(0x1ee) + _0x2baaf4[_0x17c2c2(0x248)] + '\x22]')['show'](), $(_0x17c2c2(0x1ee) + _0x2baaf4['field'] + '\x22]')[_0x17c2c2(0x355)](_0x2baaf4[_0x17c2c2(0x294)]);
    });
}), $(_0x557e5c(0x2da))[_0x557e5c(0x271)]('textarea')['on'](_0x557e5c(0x23d), function() {
    const _0x19d3a3 = _0x557e5c;
    $(this)[_0x19d3a3(0x391)]() !== '' && resetInputErrorMessage($(this)[_0x19d3a3(0x22e)](_0x19d3a3(0x232))), all_data = all_data[_0x19d3a3(0x2c5)](_0x342099 => _0x342099[_0x19d3a3(0x248)] !== $(this)[_0x19d3a3(0x22e)](_0x19d3a3(0x232))), all_data[_0x19d3a3(0x26e)]({ 'field': $(this)[_0x19d3a3(0x22e)](_0x19d3a3(0x232)), 'value': $(this)[_0x19d3a3(0x391)]() }), all_data['forEach'](function(_0x450ce8) {
        const _0x13e949 = _0x19d3a3;
        $(_0x13e949(0x1ee) + _0x450ce8[_0x13e949(0x248)] + '\x22]')[_0x13e949(0x2ca)](), $(_0x13e949(0x1ee) + _0x450ce8[_0x13e949(0x248)] + '\x22]')[_0x13e949(0x355)](_0x450ce8[_0x13e949(0x294)]);
    });
}), $(_0x557e5c(0x2da))['find']('select')['on'](_0x557e5c(0x23d), function() {
    const _0xdffd98 = _0x557e5c;
    $(this)[_0xdffd98(0x391)]() !== '' && resetInputErrorMessage($(this)[_0xdffd98(0x22e)]('name'));
    var _0x191194 = $(this)[_0xdffd98(0x25e)](_0xdffd98(0x2e3));
    all_data = all_data[_0xdffd98(0x2c5)](_0x57ed8b => _0x57ed8b[_0xdffd98(0x248)] !== $(this)[_0xdffd98(0x22e)](_0xdffd98(0x232))), all_data[_0xdffd98(0x26e)]({ 'field': $(this)[_0xdffd98(0x22e)](_0xdffd98(0x232)), 'value': _0x191194 ? $(this)[_0xdffd98(0x271)](_0xdffd98(0x203))[_0xdffd98(0x355)]() : $(this)[_0xdffd98(0x391)]() }), all_data['forEach'](function(_0x194a56) {
        const _0x7f7e6d = _0xdffd98;
        $('[data-input-field=\x22' + _0x194a56[_0x7f7e6d(0x248)] + '\x22]')[_0x7f7e6d(0x2ca)](), $('[data-input-field=\x22' + _0x194a56['field'] + '\x22]')['text'](_0x194a56[_0x7f7e6d(0x294)]);
    });
}), updateStep(), triggerInputAllData(), $(_0x557e5c(0x228))[_0x557e5c(0x301)](function() {
    const _0x47636f = _0x557e5c,
        _0x43d619 = $(this)['find'](_0x47636f(0x2fa)),
        _0x127c5a = [];
    _0x43d619[_0x47636f(0x301)](function() {
        const _0x256013 = _0x47636f;
        _0x127c5a['push']($(this)[_0x256013(0x355)]()[_0x256013(0x250)]());
    });
    const _0x16a331 = $(this)[_0x47636f(0x2c0)](_0x47636f(0x2b3));
    $[_0x47636f(0x301)](_0x127c5a, function(_0x1244b7, _0x410368) {
        const _0x681b0c = _0x47636f,
            _0x460ceb = $('<option>')['val'](_0x410368)['text'](_0x410368);
        _0x16a331[_0x681b0c(0x30f)](_0x460ceb);
    });
});

function cloneRemove() {
    const _0x2d8ae7 = _0x557e5c;
    $(_0x2d8ae7(0x2ed))[_0x2d8ae7(0x301)](function() {
        const _0x424faa = _0x2d8ae7;
        $(this)[_0x424faa(0x271)]('[data-clone]')[_0x424faa(0x2dc)] < 0x2 ? $(this)[_0x424faa(0x271)]('[data-form=\x22remove-clone\x22]')[_0x424faa(0x244)]() : $(this)[_0x424faa(0x271)](_0x424faa(0x32e))[_0x424faa(0x2ca)]();
    });
}

function cloneRemoveInput() {
    const _0x5ae307 = _0x557e5c;
    $(_0x5ae307(0x20b))[_0x5ae307(0x301)](function() {
        const _0x46b122 = _0x5ae307;
        console[_0x46b122(0x1f7)]($(this)['find'](_0x46b122(0x2f8))[_0x46b122(0x2dc)]), $(this)['find'](_0x46b122(0x2f8))[_0x46b122(0x2dc)] < 0x2 ? $(this)[_0x46b122(0x271)](_0x46b122(0x2b5))[_0x46b122(0x244)]() : $(this)[_0x46b122(0x271)](_0x46b122(0x2b5))['show']();
    });
}
$(_0x557e5c(0x32e))['on'](_0x557e5c(0x298), function() {
    const _0x19b596 = _0x557e5c,
        _0x56d7c5 = $(this)[_0x19b596(0x25c)](_0x19b596(0x351))[_0x19b596(0x2dc)] > 0x0 ? $(this)[_0x19b596(0x25c)](_0x19b596(0x351))[_0x19b596(0x2a8)]() : $(this)[_0x19b596(0x25c)]('[data-display]')[_0x19b596(0x2a8)](),
        _0x818dfc = $(this)[_0x19b596(0x25c)](_0x19b596(0x351))[_0x19b596(0x2dc)] > 0x0 ? $(this)[_0x19b596(0x25c)]('[data-clone]')['data'](_0x19b596(0x318)) : $(this)[_0x19b596(0x25c)](_0x19b596(0x2fe))[_0x19b596(0x25e)](_0x19b596(0x20d));
    $(_0x19b596(0x31e) + _0x818dfc + '\x22]')['eq'](_0x56d7c5)[_0x19b596(0x261)](), $(_0x19b596(0x24e) + _0x818dfc + '\x22]')['eq'](_0x56d7c5)[_0x19b596(0x261)](), cloneRemove();
    let _0x3a8821 = $('[data-add-new=\x22' + _0x818dfc + '\x22]')[_0x19b596(0x25e)]('add-new-limit'),
        _0x3887e8 = $(_0x19b596(0x31e) + _0x818dfc + '\x22]')[_0x19b596(0x2dc)];
    console[_0x19b596(0x1f7)](_0x3887e8, _0x3a8821), _0x3887e8 < _0x3a8821 && (console['log'](_0x19b596(0x2ca)), $(_0x19b596(0x365) + _0x818dfc + '\x22]')[_0x19b596(0x2ca)]()), validation();
}), $('[data-form=\x22remove-input-clone\x22]')['on'](_0x557e5c(0x298), function() {
    const _0x38334f = _0x557e5c;
    let _0x4d9d62 = $(this)[_0x38334f(0x2c0)]()['attr'](_0x38334f(0x232)),
        _0x12da2c = $(this)[_0x38334f(0x25c)](_0x38334f(0x2f8))[_0x38334f(0x25e)](_0x38334f(0x23f));
    $(this)[_0x38334f(0x390)](_0x38334f(0x2f8))['remove'](), $('[data-input-field=\x22' + _0x4d9d62 + '\x22]')[_0x38334f(0x390)](_0x38334f(0x229))[_0x38334f(0x261)]();
    let _0x3abd3b = $('[data-add-new-input=\x22' + _0x12da2c + '\x22]')[_0x38334f(0x25e)](_0x38334f(0x25b)),
        _0x17d5f1 = $(_0x38334f(0x35e) + _0x12da2c + '\x22]')[_0x38334f(0x2dc)];
    _0x17d5f1 < _0x3abd3b && $(_0x38334f(0x310) + _0x12da2c + '\x22]')[_0x38334f(0x2ca)](), validation();
}), $(_0x557e5c(0x313))['on'](_0x557e5c(0x298), function() {
    const _0x23cc4f = _0x557e5c;
    let _0x57845d = $(this)[_0x23cc4f(0x25e)](_0x23cc4f(0x2af)),
        _0x4bcc0a = $(this)[_0x23cc4f(0x25e)]('add-new-limit');
    var _0x5a2222 = $(_0x23cc4f(0x31e) + _0x57845d + '\x22]')['eq'](0x0)[_0x23cc4f(0x318)](!![]),
        _0x4c1d9d = $(_0x23cc4f(0x24e) + _0x57845d + '\x22]')['eq'](0x0)[_0x23cc4f(0x318)](!![]);
    let _0x5b47ba = '';
    $(this)[_0x23cc4f(0x271)]('[data-form=\x22remove-clone\x22]')[_0x23cc4f(0x2ca)](), cloneRemove(), _0x5a2222['find']('[data-clone-input]')[_0x23cc4f(0x271)](_0x23cc4f(0x254))[_0x23cc4f(0x391)](''), _0x5a2222['find'](_0x23cc4f(0x2f8))[_0x23cc4f(0x271)]('select')['val'](''), _0x5a2222[_0x23cc4f(0x271)](_0x23cc4f(0x2f8))[_0x23cc4f(0x271)](_0x23cc4f(0x32c))['val'](''), _0x5a2222['find']('[data-clone-input]')['not'](_0x23cc4f(0x2f4))[_0x23cc4f(0x261)](), _0x5a2222[_0x23cc4f(0x271)](_0x23cc4f(0x2f8))['find']('[aria-label=\x22Remove\x20file\x22]')[_0x23cc4f(0x298)](), _0x4c1d9d[_0x23cc4f(0x271)](_0x23cc4f(0x229))['not'](_0x23cc4f(0x2f4))[_0x23cc4f(0x261)](), _0x5a2222[_0x23cc4f(0x271)]('input')[_0x23cc4f(0x301)](function() {
        const _0x21bacb = _0x23cc4f;
        if ($(this)[_0x21bacb(0x268)](_0x21bacb(0x2f8))['length'] > 0x0) {
            let _0x1beafb = 0x0;
            const _0x19bb00 = $(this)[_0x21bacb(0x268)](_0x21bacb(0x2f8))[_0x21bacb(0x25e)](_0x21bacb(0x23f));
            $(_0x21bacb(0x35e) + _0x19bb00 + _0x21bacb(0x33f))[_0x21bacb(0x301)](function() {
                const _0x281691 = _0x21bacb,
                    _0x186788 = $(this)[_0x281691(0x22e)](_0x281691(0x232));
                if (_0x186788 && _0x186788[_0x281691(0x2db)]('relationship-')) { const _0x1a9ccf = parseInt(_0x186788[_0x281691(0x1ed)]('-')[0x1]);!isNaN(_0x1a9ccf) && _0x1a9ccf > _0x1beafb && (_0x1beafb = _0x1a9ccf); }
            }), _0x1beafb++, _0x5b47ba = this[_0x21bacb(0x232)] + '-' + _0x1beafb;
        } else _0x5b47ba = this[_0x21bacb(0x232)] + '-' + (parseInt($(_0x21bacb(0x31e) + _0x57845d + '\x22]')[_0x21bacb(0x300)]()[_0x21bacb(0x2a8)]()) + 0x1);
        $(this)['val'](''), $(this)['attr'](_0x21bacb(0x232), _0x5b47ba), $(this)['attr'](_0x21bacb(0x340), _0x5b47ba);
    }), _0x5a2222['find'](_0x23cc4f(0x32c))[_0x23cc4f(0x301)](function() {
        const _0x32ccc7 = _0x23cc4f;
        if ($(this)[_0x32ccc7(0x268)](_0x32ccc7(0x2f8))[_0x32ccc7(0x2dc)] > 0x0) {
            let _0x5f1aae = 0x0;
            const _0x33369c = $(this)['closest'](_0x32ccc7(0x2f8))[_0x32ccc7(0x25e)](_0x32ccc7(0x23f));
            $(_0x32ccc7(0x35e) + _0x33369c + _0x32ccc7(0x214))[_0x32ccc7(0x301)](function() {
                const _0x5cfb8b = _0x32ccc7,
                    _0x286bdd = $(this)['attr'](_0x5cfb8b(0x232));
                if (_0x286bdd && _0x286bdd['startsWith'](_0x5cfb8b(0x2d0))) { const _0x350e6f = parseInt(_0x286bdd[_0x5cfb8b(0x1ed)]('-')[0x1]);!isNaN(_0x350e6f) && _0x350e6f > _0x5f1aae && (_0x5f1aae = _0x350e6f); }
            }), _0x5f1aae++, _0x5b47ba = this[_0x32ccc7(0x232)] + '-' + _0x5f1aae;
        } else _0x5b47ba = this[_0x32ccc7(0x232)] + '-' + (parseInt($(_0x32ccc7(0x31e) + _0x57845d + '\x22]')[_0x32ccc7(0x300)]()[_0x32ccc7(0x2a8)]()) + 0x1);
        $(this)[_0x32ccc7(0x391)](''), $(this)['attr'](_0x32ccc7(0x232), _0x5b47ba), $(this)[_0x32ccc7(0x22e)](_0x32ccc7(0x340), _0x5b47ba);
    }), _0x5a2222[_0x23cc4f(0x271)]('select')[_0x23cc4f(0x301)](function() {
        const _0x1e1c01 = _0x23cc4f;
        if ($(this)[_0x1e1c01(0x268)](_0x1e1c01(0x2f8))['length'] > 0x0) {
            let _0x3fd64e = 0x0;
            const _0x48da87 = $(this)[_0x1e1c01(0x268)](_0x1e1c01(0x2f8))[_0x1e1c01(0x25e)](_0x1e1c01(0x23f));
            $(_0x1e1c01(0x35e) + _0x48da87 + '\x22]\x20select')[_0x1e1c01(0x301)](function() {
                const _0x3e7d03 = _0x1e1c01,
                    _0x300e65 = $(this)['attr']('name');
                if (_0x300e65 && _0x300e65[_0x3e7d03(0x2db)](_0x3e7d03(0x2d0))) { const _0x27694d = parseInt(_0x300e65['split']('-')[0x1]);!isNaN(_0x27694d) && _0x27694d > _0x3fd64e && (_0x3fd64e = _0x27694d); }
            }), _0x3fd64e++, _0x5b47ba = this[_0x1e1c01(0x232)] + '-' + _0x3fd64e;
        } else _0x5b47ba = this[_0x1e1c01(0x232)] + '-' + (parseInt($(_0x1e1c01(0x31e) + _0x57845d + '\x22]')[_0x1e1c01(0x300)]()[_0x1e1c01(0x2a8)]()) + 0x1);
        $(this)[_0x1e1c01(0x391)](''), $(this)['attr'](_0x1e1c01(0x232), _0x5b47ba), $(this)[_0x1e1c01(0x22e)]('data-name', _0x5b47ba);
    }), _0x4c1d9d[_0x23cc4f(0x271)](_0x23cc4f(0x23e))[_0x23cc4f(0x301)](function() {
        const _0x121ba2 = _0x23cc4f;
        if ($(this)['data']('input-field')) {
            let _0x4037a7 = 0x0;
            const _0x15eb41 = $(this)[_0x121ba2(0x25e)](_0x121ba2(0x36d))[_0x121ba2(0x1ed)]('-')[0x0];
            $('[data-display=\x22' + _0x57845d + _0x121ba2(0x276) + _0x15eb41 + '\x22]')[_0x121ba2(0x301)](function() {
                const _0xbe25f3 = _0x121ba2,
                    _0xb7ff23 = $(this)['attr'](_0xbe25f3(0x28e)),
                    _0xb80362 = parseInt(_0xb7ff23['split']('-')[0x1]);
                !isNaN(_0xb80362) && _0xb80362 > _0x4037a7 && (_0x4037a7 = _0xb80362);
            }), _0x4037a7++;
            const _0x3039be = _0x15eb41 + '-' + _0x4037a7;
            $(this)[_0x121ba2(0x22e)](_0x121ba2(0x28e), _0x3039be);
        }
    }), $(_0x23cc4f(0x356) + _0x57845d + '\x22]')[_0x23cc4f(0x30f)](_0x5a2222), $(_0x23cc4f(0x336) + _0x57845d + '\x22]')[_0x23cc4f(0x30f)](_0x4c1d9d), $(_0x23cc4f(0x253) + _0x57845d + '\x22]')[_0x23cc4f(0x301)](function() {
        const _0x23fc6a = _0x23cc4f;
        $(this)[_0x23fc6a(0x355)]($(this)[_0x23fc6a(0x25c)](_0x23fc6a(0x31e) + _0x57845d + '\x22]')[_0x23fc6a(0x2a8)]() + 0x1);
    }), $(_0x23cc4f(0x292) + _0x57845d + '\x22]')[_0x23cc4f(0x301)](function() {
        const _0x21bb11 = _0x23cc4f;
        $(this)[_0x21bb11(0x355)]($(this)[_0x21bb11(0x25c)](_0x21bb11(0x24e) + _0x57845d + '\x22]')['index']() + 0x1);
    });
    let _0x4e16e1 = $(_0x23cc4f(0x356) + _0x57845d + _0x23cc4f(0x30d) + _0x57845d + '\x22]')[_0x23cc4f(0x2dc)];
    if (_0x4e16e1 >= _0x4bcc0a) { $(this)[_0x23cc4f(0x244)](); return; }
    $(this)[_0x23cc4f(0x2ca)](), validation();
}), $(_0x557e5c(0x29b))['on'](_0x557e5c(0x298), function() {
    const _0x1540ac = _0x557e5c,
        _0x3cc7dd = $(this)['parents']('[data-clone]')['index']();
    let _0x4c9f24 = $(this)['data'](_0x1540ac(0x346));
    var _0x1e47e7 = $(_0x1540ac(0x35e) + _0x4c9f24 + '\x22]')['eq'](0x0)[_0x1540ac(0x318)](!![]),
        _0x1f912 = $(_0x1540ac(0x259) + _0x4c9f24 + '\x22]')['eq'](0x0)['clone'](!![]);
    let _0x207d56 = $(this)[_0x1540ac(0x25e)](_0x1540ac(0x25b)),
        _0x53c4c7 = 0x0;
    $(_0x1540ac(0x35e) + _0x4c9f24 + _0x1540ac(0x33f))[_0x1540ac(0x301)](function() {
        const _0x159cf5 = _0x1540ac,
            _0x1db659 = $(this)[_0x159cf5(0x22e)](_0x159cf5(0x232));
        if (_0x1db659) { const _0x73f7b9 = parseInt(_0x1db659[_0x159cf5(0x1ed)]('-')[0x1]);!isNaN(_0x73f7b9) && _0x73f7b9 > _0x53c4c7 && (_0x53c4c7 = _0x73f7b9); }
    }), $('[data-clone-input=\x22' + _0x4c9f24 + '\x22]\x20select')[_0x1540ac(0x301)](function() {
        const _0x51efc0 = _0x1540ac,
            _0x5584b8 = $(this)['attr']('name');
        if (_0x5584b8) { const _0x23938b = parseInt(_0x5584b8[_0x51efc0(0x1ed)]('-')[0x1]);!isNaN(_0x23938b) && _0x23938b > _0x53c4c7 && (_0x53c4c7 = _0x23938b); }
    }), $('[data-clone-input=\x22' + _0x4c9f24 + _0x1540ac(0x214))[_0x1540ac(0x301)](function() {
        const _0x49b5ee = _0x1540ac,
            _0x1140fa = $(this)[_0x49b5ee(0x22e)]('name');
        if (_0x1140fa) { const _0x3e3913 = parseInt(_0x1140fa[_0x49b5ee(0x1ed)]('-')[0x1]);!isNaN(_0x3e3913) && _0x3e3913 > _0x53c4c7 && (_0x53c4c7 = _0x3e3913); }
    }), _0x53c4c7++, _0x1e47e7[_0x1540ac(0x271)](_0x1540ac(0x254))[_0x1540ac(0x301)](function() {
        const _0x5ecf6c = _0x1540ac,
            _0x2e1d6d = $(this)['attr']('name');
        let _0x345e4c = _0x2e1d6d + '-' + _0x53c4c7;
        $(this)[_0x5ecf6c(0x391)](''), $(this)['attr'](_0x5ecf6c(0x232), _0x345e4c), $(this)[_0x5ecf6c(0x22e)](_0x5ecf6c(0x340), _0x345e4c);
    }), _0x1e47e7[_0x1540ac(0x271)](_0x1540ac(0x293))[_0x1540ac(0x301)](function() {
        const _0x1c8828 = _0x1540ac,
            _0x118f00 = $(this)[_0x1c8828(0x22e)](_0x1c8828(0x232));
        let _0x5e764b = _0x118f00 + '-' + _0x53c4c7;
        $(this)['val'](''), $(this)[_0x1c8828(0x22e)](_0x1c8828(0x232), _0x5e764b), $(this)['attr'](_0x1c8828(0x340), _0x5e764b);
    }), _0x1e47e7[_0x1540ac(0x271)]('textarea')[_0x1540ac(0x301)](function() {
        const _0x3f2511 = _0x1540ac,
            _0x5041b9 = $(this)['attr'](_0x3f2511(0x232));
        let _0x3467a8 = _0x5041b9 + '-' + _0x53c4c7;
        $(this)[_0x3f2511(0x391)](''), $(this)[_0x3f2511(0x22e)](_0x3f2511(0x232), _0x3467a8), $(this)[_0x3f2511(0x22e)]('data-name', _0x3467a8);
    }), _0x1f912[_0x1540ac(0x271)](_0x1540ac(0x23e))[_0x1540ac(0x301)](function() {
        const _0x274309 = _0x1540ac;
        $(this)['attr'](_0x274309(0x28e), 'relationship-' + _0x53c4c7);
    }), $(this)['siblings'](_0x1540ac(0x331) + _0x4c9f24 + '\x22]')['append'](_0x1e47e7), $(_0x1540ac(0x2fe))['eq'](_0x3cc7dd)['find'](_0x1540ac(0x284) + _0x4c9f24 + '\x22]')['append'](_0x1f912), $(_0x1540ac(0x2e0) + _0x4c9f24 + '\x22]')[_0x1540ac(0x301)](function() {
        const _0x1df9e3 = _0x1540ac;
        $(this)['text']($(this)[_0x1df9e3(0x25c)](_0x1df9e3(0x35e) + _0x4c9f24 + '\x22]')[_0x1df9e3(0x2a8)]() + 0x1);
    }), $(_0x1540ac(0x278) + _0x4c9f24 + '\x22]')[_0x1540ac(0x301)](function() {
        const _0x3368d6 = _0x1540ac;
        $(this)[_0x3368d6(0x355)]($(this)[_0x3368d6(0x25c)]('[data-display-input=\x22' + _0x4c9f24 + '\x22]')[_0x3368d6(0x2a8)]() + 0x1);
    });
    let _0x5a87bc = $(_0x1540ac(0x331) + _0x4c9f24 + _0x1540ac(0x35c) + _0x4c9f24 + '\x22]')[_0x1540ac(0x2dc)];
    if (_0x5a87bc >= _0x207d56) { $(this)[_0x1540ac(0x244)](); return; }
    $(this)[_0x1540ac(0x2ca)](), cloneRemoveInput(), validation();
}), $('[data-remove-upload]')['on']('click', function() {
    const _0x1a27ca = _0x557e5c,
        _0x53e691 = $(this)[_0x1a27ca(0x25e)](_0x1a27ca(0x21d));
    $(_0x1a27ca(0x337) + _0x53e691 + '\x22]')[_0x1a27ca(0x391)](''), validation();
});

function andLogic() {
    const _0x47abf1 = _0x557e5c;
    conditionalResult && (steps['eq'](x)[_0x47abf1(0x271)](_0x47abf1(0x2ff))[_0x47abf1(0x244)](), steps['eq'](x)[_0x47abf1(0x271)](_0x47abf1(0x2ff))[_0x47abf1(0x301)](function() {
        const _0x50561a = _0x47abf1;

        function _0x120200(_0xc299eb) {
            const _0x1a0c95 = _0x5c1c,
                _0x3e0610 = _0xc299eb[_0x1a0c95(0x1ed)]('&'),
                _0x3466d5 = [];
            return _0x3e0610[_0x1a0c95(0x1f0)](_0x3c481a => {
                const _0x59297e = _0x1a0c95,
                    [_0x2a0e32, _0x5c5e35] = _0x3c481a['split']('=');
                _0x3466d5[_0x59297e(0x26e)]({ 'field': _0x2a0e32, 'value': _0x5c5e35 });
            }), _0x3466d5;
        }
        const _0x518968 = $(this)[_0x50561a(0x22e)](_0x50561a(0x207)),
            _0x3a0808 = _0x120200(_0x518968);

        function _0x84b144(_0x34eea8, _0x55dfec) { const _0x3dbbb1 = _0x50561a; return _0x55dfec[_0x3dbbb1(0x269)]((_0x4e1ed8, _0x227dd3) => { const _0x35dead = _0x3dbbb1; if (_0x34eea8[0x0] && _0x4e1ed8['field'] === _0x34eea8[0x0]['field']) return _0x34eea8[_0x35dead(0x1fe)]((_0x15aedd, _0x3a1cca) => _0x55dfec[_0x227dd3 + _0x3a1cca] && _0x55dfec[_0x227dd3 + _0x3a1cca][_0x35dead(0x248)] === _0x15aedd['field'] && _0x55dfec[_0x227dd3 + _0x3a1cca]['value'] === _0x15aedd[_0x35dead(0x294)]); return ![]; }); }
        const _0x2f448e = _0x84b144(_0x3a0808, all_data);
        _0x2f448e ? $(this)['show']() : $(this)[_0x50561a(0x244)]();
    }));
}
progressiveTarget[_0x557e5c(0x2bf)](_0x557e5c(0x244)), progressiveInput['on'](_0x557e5c(0x254), function() {
    const _0x73c17d = _0x557e5c,
        _0x1487ae = $(this)[_0x73c17d(0x25e)](_0x73c17d(0x2ce)),
        _0x229bfd = $(this)[_0x73c17d(0x391)](),
        _0x38195d = form[_0x73c17d(0x271)]('[data-input-target=\x22' + _0x1487ae + '\x22]')[_0x73c17d(0x25e)](_0x73c17d(0x23b));
    let _0x36c575 = form['find'](_0x73c17d(0x275) + _0x1487ae + _0x73c17d(0x2eb))[_0x73c17d(0x2c5)](function() { const _0x50f60a = _0x73c17d; return $(this)[_0x50f60a(0x25e)](_0x50f60a(0x23b))[_0x50f60a(0x215)]() === _0x229bfd[_0x50f60a(0x215)](); }),
        _0x2f4f11 = form[_0x73c17d(0x271)](_0x73c17d(0x275) + _0x1487ae + _0x73c17d(0x27f));
    form[_0x73c17d(0x271)](_0x73c17d(0x275) + _0x1487ae + '\x22]')['addClass'](_0x73c17d(0x37a)), form['find']('[data-input-target=\x22' + _0x1487ae + '\x22]')[_0x73c17d(0x30a)](_0x73c17d(0x343));
    _0x229bfd !== '' && (_0x38195d[_0x73c17d(0x215)]() === '*' && _0x229bfd !== '' ? (_0x2f4f11[_0x73c17d(0x30a)](_0x73c17d(0x37a)), _0x2f4f11[_0x73c17d(0x2bf)]('f-show')) : (_0x36c575[_0x73c17d(0x30a)](_0x73c17d(0x37a)), _0x36c575[_0x73c17d(0x2bf)](_0x73c17d(0x343))));

    function _0x50915a(_0x367493) {
        const _0x27f702 = _0x73c17d;
        _0x367493 && (form[_0x27f702(0x271)]('[data-input-reveal=\x22' + _0x367493 + '\x22]')[_0x27f702(0x391)]() !== '' && form[_0x27f702(0x271)](_0x27f702(0x35f) + _0x367493 + '\x22]')[_0x27f702(0x246)](_0x27f702(0x254)));
    }
    let _0x168a57 = form['find'](_0x73c17d(0x275) + _0x1487ae + '\x22]')[_0x73c17d(0x271)](_0x73c17d(0x27d))[_0x73c17d(0x25e)]('input-reveal');
    _0x50915a(_0x168a57), form[_0x73c17d(0x271)](_0x73c17d(0x2a1))['each'](function() {
        const _0x292600 = _0x73c17d,
            _0x487248 = $(this)[_0x292600(0x25e)](_0x292600(0x2ce));
        form[_0x292600(0x271)]('[data-input-target=\x22' + _0x487248 + '\x22]')[_0x292600(0x30a)](_0x292600(0x343)), form['find']('[data-input-target=\x22' + _0x487248 + '\x22]')['addClass'](_0x292600(0x37a));
    });
});

function addClickClass() {
    const _0x3d59d5 = _0x557e5c,
        _0x3daeed = $(this)[_0x3d59d5(0x25e)](_0x3d59d5(0x274)),
        _0x1261fd = $(this)['attr']('name');
    $(_0x3d59d5(0x337) + _0x1261fd + '\x22]')[_0x3d59d5(0x390)]()['removeClass'](_0x3daeed), $(this)['is'](_0x3d59d5(0x389)) && $(this)[_0x3d59d5(0x390)]()[_0x3d59d5(0x2bf)](_0x3daeed);
}
$(_0x557e5c(0x354))['on'](_0x557e5c(0x23d), addClickClass);

function updateCounter(_0x1ad1ea) {
    const _0x4a6d3c = _0x557e5c;
    var _0x65bbfa = new Date(),
        _0x2ab9f2 = _0x65bbfa[_0x4a6d3c(0x34e)](),
        _0x332018 = btoa('counter'),
        _0x587a1b = btoa(_0x2ab9f2[_0x4a6d3c(0x386)]()),
        _0x3f840d = getCookie(_0x332018);
    !_0x3f840d || _0x3f840d !== _0x587a1b ? $['post'](_0x4a6d3c(0x25d), function() {
        const _0x3c8c25 = _0x4a6d3c;
        console[_0x3c8c25(0x1f7)](_0x3c8c25(0x322)), document[_0x3c8c25(0x2a0)] = _0x332018 + '=' + _0x587a1b;
    })[_0x4a6d3c(0x225)](function(_0x48b07e, _0x2c7a63, _0x10caf8) {
        const _0x50e10c = _0x4a6d3c;
        console[_0x50e10c(0x306)](_0x50e10c(0x31b), _0x10caf8);
    }) : console[_0x4a6d3c(0x1f7)](_0x4a6d3c(0x308));
}

function getCookie(_0x4ba905) { const _0x58a853 = _0x557e5c; var _0xae626d = null; if (document[_0x58a853(0x2a0)] && document['cookie'] !== '') { var _0x340364 = document[_0x58a853(0x2a0)][_0x58a853(0x1ed)](';'); for (var _0x1395f3 = 0x0; _0x1395f3 < _0x340364['length']; _0x1395f3++) { var _0x920572 = _0x340364[_0x1395f3]['trim'](); if (_0x920572['substring'](0x0, _0x4ba905[_0x58a853(0x2dc)] + 0x1) === _0x4ba905 + '=') { _0xae626d = decodeURIComponent(_0x920572[_0x58a853(0x32b)](_0x4ba905[_0x58a853(0x2dc)] + 0x1)); break; } } } return _0xae626d; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput(), disableRadioQuickTap();
const formlyUrlParams = new URLSearchParams(window['location'][_0x557e5c(0x27c)]),
    formlySupportParam = formlyUrlParams[_0x557e5c(0x363)]('formly-support'),
    showButton = formlySupportParam === _0x557e5c(0x2ac),
    passIcon = _0x557e5c(0x221),
    failIcon = '<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a</svg>\x0a</div>';
let isScriptLoaded = !![],
    scriptLocation = _0x557e5c(0x240),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? 'FormlyLogic\x20enabled' : 'Basic\x20(No\x20Formly\x20Logic)',
    resultStatus = _0x557e5c(0x34f),
    scriptSrcAdded = '';

function isElementPresent(_0x4d7d00, _0x14ff22) { const _0x3f65cd = _0x557e5c; return document[_0x3f65cd(0x34d)]('[' + _0x14ff22 + '=\x22' + _0x4d7d00 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent(_0x557e5c(0x29d), _0x557e5c(0x2dd));
const multistepForm = document[_0x557e5c(0x34d)](_0x557e5c(0x290)),
    formStepLength = multistepForm[_0x557e5c(0x2cd)](_0x557e5c(0x321))[_0x557e5c(0x2dc)];
isMultistepOnFormElement = multistepForm !== null;

function _0x5c1c(_0x54af06, _0x1ab8c9) { const _0x384fea = _0x384f(); return _0x5c1c = function(_0x5c1c98, _0x25323d) { _0x5c1c98 = _0x5c1c98 - 0x1eb; let _0xf2d6d3 = _0x384fea[_0x5c1c98]; return _0xf2d6d3; }, _0x5c1c(_0x54af06, _0x1ab8c9); }
const multistepContainer = document[_0x557e5c(0x34d)](_0x557e5c(0x2da)),
    nextBtnExist = multistepContainer[_0x557e5c(0x34d)](_0x557e5c(0x381)),
    backBtnExist = multistepContainer['querySelector'](_0x557e5c(0x35a)),
    submitBtnExist = multistepContainer['querySelector'](_0x557e5c(0x32a));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist['tagName'][_0x557e5c(0x215)]() === 'input', isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x557e5c(0x312)]['toLowerCase']() === _0x557e5c(0x254) && submitBtnExist[_0x557e5c(0x1fb)][_0x557e5c(0x215)]() === _0x557e5c(0x2a6), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x557e5c(0x312)][_0x557e5c(0x215)]() === _0x557e5c(0x254);
const checkPowerup = _0x58f382 => document[_0x557e5c(0x34d)](_0x58f382) !== null,
    progressBarAttr = checkPowerup(_0x557e5c(0x361)),
    progressIndicatorAttr = checkPowerup(_0x557e5c(0x367)),
    customProgressAttr = checkPowerup(_0x557e5c(0x367)),
    cardDivAttr = checkPowerup(_0x557e5c(0x29e)),
    currentStepAttr = checkPowerup(_0x557e5c(0x2c1)),
    totalStepAttr = checkPowerup(_0x557e5c(0x33b)),
    enterAttr = checkPowerup('[data-enter=\x22true\x22]'),
    submitAttr = checkPowerup('[data-submit=\x22true\x22]'),
    radioSkipAttr = checkPowerup(_0x557e5c(0x383)),
    customCheckboxAttr = checkPowerup('[data-checkbox]'),
    recapatchaAttr = checkPowerup(_0x557e5c(0x311)),
    dataAnswerOnFirstStep = steps['eq'](0x0)[_0x557e5c(0x271)](_0x557e5c(0x2c7))['data']('answer') === '' || !steps['eq'](0x0)['find'](_0x557e5c(0x2c7))[_0x557e5c(0x25e)](_0x557e5c(0x2d3));
let dataGoToDataAnswerOnFormStep = '',
    dataAnswerAndDataGoToPairs = '',
    dataAnswerIsOnDataCard = '';
steps[_0x557e5c(0x301)](_0x2a065a => {
    const _0x257ae1 = _0x557e5c,
        _0x480c1b = steps['eq'](_0x2a065a);
    _0x480c1b[_0x257ae1(0x25e)]('answer') && _0x480c1b['data'](_0x257ae1(0x373)) && (dataGoToDataAnswerOnFormStep += _0x257ae1(0x1ec) + (_0x2a065a + 0x1) + _0x257ae1(0x28a));
    const _0x41407a = _0x480c1b[_0x257ae1(0x271)](_0x257ae1(0x2c7));
    _0x41407a['length'] && (dataAnswerAndDataGoToPairs += _0x257ae1(0x1f3) + (_0x2a065a + 0x1) + _0x257ae1(0x28a), _0x41407a[_0x257ae1(0x301)]((_0x369e97, _0x147efb) => {
        const _0x169bf9 = _0x257ae1,
            _0x5bf2b0 = $(_0x147efb);
        dataAnswerAndDataGoToPairs += _0x169bf9(0x2bd) + _0x5bf2b0[_0x169bf9(0x25e)](_0x169bf9(0x2d3)) + '\x22', _0x5bf2b0[_0x169bf9(0x25e)](_0x169bf9(0x373)) && (dataAnswerAndDataGoToPairs += _0x169bf9(0x2f1) + _0x5bf2b0[_0x169bf9(0x25e)](_0x169bf9(0x373)) + '\x22'), dataAnswerAndDataGoToPairs += _0x169bf9(0x28a);
    })), steps['eq'](_0x2a065a)[_0x257ae1(0x25e)]('card') && (steps['eq'](_0x2a065a)[_0x257ae1(0x25e)](_0x257ae1(0x2d3)) || steps['eq'](_0x2a065a)[_0x257ae1(0x271)](_0x257ae1(0x2c7))['data'](_0x257ae1(0x2d3))) && (dataAnswerIsOnDataCard += _0x257ae1(0x1ec) + (_0x2a065a + 0x1) + _0x257ae1(0x28a));
});
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x557e5c(0x2b1));

function isScriptUrlMatch(_0x37608a, _0x26dd15) { const _0x5738c4 = _0x557e5c; for (var _0x3232b = 0x0; _0x3232b < _0x26dd15[_0x5738c4(0x2dc)]; _0x3232b++) { if (_0x37608a['includes'](_0x26dd15[_0x3232b])) return !![]; } return ![]; }
var keywordsToCheck = [_0x557e5c(0x348), 'formly', _0x557e5c(0x216)],
    scripts = document[_0x557e5c(0x20f)](_0x557e5c(0x332)),
    matchedScripts = [];
for (var i = 0x0; i < scripts['length']; i++) {
    var scriptSrcs = scripts[i][_0x557e5c(0x2c8)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x557e5c(0x26e)](scriptSrcs);
}
if (matchedScripts[_0x557e5c(0x2dc)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document['querySelector'](_0x557e5c(0x2e1) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script['parentNode'][_0x557e5c(0x312)] === _0x557e5c(0x309) ? _0x557e5c(0x2d1) : _0x557e5c(0x377));
} else scriptSrcAdded = _0x557e5c(0x32d) + failIcon;
const newElement = document[_0x557e5c(0x265)](_0x557e5c(0x2ef)),
    newStyle = document['createElement']('style');
newStyle[_0x557e5c(0x239)] = '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x2035%;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20max-height:\x20100vh;\x0a\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a\x20\x20\x20\x20line-height:1.4\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_attribute-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20margin-bottom:\x2014px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20color:\x20#1eee32;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_title\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-header\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.paragraph\x20{\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.hide\x20{\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type._1\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_script\x20{\x0a\x20\x20\x20\x20color:\x20#fffc57;\x0a\x20\x20\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-wrapper\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-link\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-support-title{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-closebtn{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200.3rem;\x0a\x20\x20\x20\x20right:\x200.7rem;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20}\x0a\x20\x20.f-hide{\x0a\x20\x20\x20\x20display\x20:none\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-logic-text{\x0a\x20\x20\x20\x20padding-left:1rem;\x0a\x20\x20}\x0a\x20\x20.f-logic-text\x20strong{\x0a\x20\x20\x20\x20color\x20:\x20white\x20!Important;\x0a\x20\x20}\x0a', document[_0x557e5c(0x240)][_0x557e5c(0x2d8)](newStyle);
showButton && document['body'][_0x557e5c(0x2d8)](newElement);
newElement[_0x557e5c(0x239)] = _0x557e5c(0x20c) + (!logicExtra ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (quiz ? passIcon : failIcon) + _0x557e5c(0x2e8) + (weightedSelection ? passIcon : failIcon) + _0x557e5c(0x208) + scriptSrcAdded + _0x557e5c(0x349) + (scriptLocation === _0x557e5c(0x240) ? _0x557e5c(0x209) : _0x557e5c(0x33d)) + _0x557e5c(0x398) + (formStepLength ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (formStepLength > 0x0 ? passIcon : failIcon) + _0x557e5c(0x26b) + formStepLength + _0x557e5c(0x2e9) + (nextBtnExist ? passIcon : failIcon) + _0x557e5c(0x21a) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x557e5c(0x323) + (backBtnExist ? passIcon : failIcon) + _0x557e5c(0x299) + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x557e5c(0x24d) + (submitBtnExist ? passIcon : failIcon) + _0x557e5c(0x2e4) + (isSubmitBtnOnSubmit ? failIcon : passIcon) + _0x557e5c(0x30e) + (progressBarAttr && progressIndicatorAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Automatic\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (customProgressAttr ? _0x557e5c(0x2a3) + passIcon + _0x557e5c(0x320) : '') + _0x557e5c(0x2b2) + (cardDivAttr ? _0x557e5c(0x288) + passIcon + _0x557e5c(0x320) : '') + _0x557e5c(0x2b2) + (currentStepAttr ? '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Current\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + passIcon + _0x557e5c(0x320) : '') + _0x557e5c(0x2b2) + (totalStepAttr ? _0x557e5c(0x2b8) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x557e5c(0x2b2) + (enterAttr ? _0x557e5c(0x34c) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (submitAttr ? _0x557e5c(0x2aa) + passIcon + _0x557e5c(0x320) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (radioSkipAttr ? _0x557e5c(0x227) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x557e5c(0x2b2) + (customCheckboxAttr ? _0x557e5c(0x231) + passIcon + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' : '') + _0x557e5c(0x2b2) + (recapatchaAttr ? _0x557e5c(0x2ae) + passIcon + _0x557e5c(0x320) : '') + _0x557e5c(0x2e7) + (logicExtra ? _0x557e5c(0x330) + (dataAnswerOnFirstStep ? passIcon : failIcon) + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + (dataGoToDataAnswerOnFormStep !== '' ? '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' + dataGoToDataAnswerOnFormStep + _0x557e5c(0x315) : '') + _0x557e5c(0x267) + dataAnswerAndDataGoToPairs + _0x557e5c(0x226) + (dataAnswerIsOnDataCard !== '' ? _0x557e5c(0x2a4) + dataAnswerIsOnDataCard + _0x557e5c(0x315) : '') + _0x557e5c(0x37b) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a';

function openNav() {
    const _0x5a9da1 = _0x557e5c;
    console[_0x5a9da1(0x1f7)](_0x5a9da1(0x376)), document[_0x5a9da1(0x374)](_0x5a9da1(0x263))[_0x5a9da1(0x359)][_0x5a9da1(0x2d5)] = _0x5a9da1(0x22b);
}

function closeNav() {
    const _0x298cb6 = _0x557e5c;
    document[_0x298cb6(0x374)]('f-mySidenav')[_0x298cb6(0x359)][_0x298cb6(0x2d5)] = _0x298cb6(0x2f6);
}