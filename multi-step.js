// 1/4/24
// Feature update
// 1. Updated input reveal attribute names

const _0x51d5a3 = _0x52e6;
(function(_0x4158c4, _0x4cc8f0) {
    const _0x276fb0 = _0x52e6,
        _0x2eddd7 = _0x4158c4();
    while (!![]) {
        try {
            const _0x16bc99 = parseInt(_0x276fb0(0x1fa)) / 0x1 + -parseInt(_0x276fb0(0x22c)) / 0x2 * (-parseInt(_0x276fb0(0x2cc)) / 0x3) + parseInt(_0x276fb0(0x213)) / 0x4 * (parseInt(_0x276fb0(0x275)) / 0x5) + parseInt(_0x276fb0(0x321)) / 0x6 + parseInt(_0x276fb0(0x228)) / 0x7 + parseInt(_0x276fb0(0x20b)) / 0x8 * (-parseInt(_0x276fb0(0x249)) / 0x9) + -parseInt(_0x276fb0(0x23e)) / 0xa * (parseInt(_0x276fb0(0x2b4)) / 0xb);
            if (_0x16bc99 === _0x4cc8f0) break;
            else _0x2eddd7['push'](_0x2eddd7['shift']());
        } catch (_0x4bc65f) { _0x2eddd7['push'](_0x2eddd7['shift']()); }
    }
}(_0x136f, 0x45caa));
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
let steps = $(_0x51d5a3(0x1f4)),
    progressbarClone = $(_0x51d5a3(0x295))[_0x51d5a3(0x311)](),
    progressbar, weightedSelection = $(_0x51d5a3(0x202))[_0x51d5a3(0x31c)](_0x51d5a3(0x285)),
    weightedSelectionRange = $(_0x51d5a3(0x2be))[_0x51d5a3(0x31c)](_0x51d5a3(0x351)),
    selectMultiple = $(_0x51d5a3(0x332))['data'](_0x51d5a3(0x231)),
    customError = $('[data-custom-error-message]')[_0x51d5a3(0x31c)](_0x51d5a3(0x1df)),
    reinitIX = $(_0x51d5a3(0x30e))[_0x51d5a3(0x31c)](_0x51d5a3(0x23c)),
    memory = $('[data-memory]')['data'](_0x51d5a3(0x2f6)),
    quiz = $(_0x51d5a3(0x2cd))[_0x51d5a3(0x31c)](_0x51d5a3(0x279));
const urlFormly = new URL(window[_0x51d5a3(0x300)][_0x51d5a3(0x31e)]);
let _params = $(_0x51d5a3(0x204))['data']('query-param'),
    logicExtra = $(_0x51d5a3(0x26b))[_0x51d5a3(0x31c)](_0x51d5a3(0x230)),
    oldSubmitText = $('[data-form=\x22submit-btn\x22]')[_0x51d5a3(0x28e)](),
    oldResetText = $(_0x51d5a3(0x253))[_0x51d5a3(0x266)](),
    formReset = $(_0x51d5a3(0x26b))[_0x51d5a3(0x31c)](_0x51d5a3(0x1c6)),
    resetDelay = $(_0x51d5a3(0x334))[_0x51d5a3(0x31c)]('reset-delay') ? $(_0x51d5a3(0x334))['data'](_0x51d5a3(0x28f)) : 0x7d0,
    redirectDelay = $('[data-redirect-delay]')[_0x51d5a3(0x31c)](_0x51d5a3(0x2f8)) ? $(_0x51d5a3(0x293))[_0x51d5a3(0x31c)](_0x51d5a3(0x2f8)) : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')[_0x51d5a3(0x31c)]('phone-validation'),
    scrollToTop = $(_0x51d5a3(0x26b))[_0x51d5a3(0x31c)](_0x51d5a3(0x24d)),
    trackLastStep = $(_0x51d5a3(0x352))[_0x51d5a3(0x31c)]('last-step'),
    conditionalResult = $('[data-conditional-result]')[_0x51d5a3(0x31c)]('conditional-result') === _0x51d5a3(0x1d9),
    scrollTopOffset = parseInt($('[data-form=\x22multistep\x22]')[_0x51d5a3(0x31c)]('scroll-top-offset'));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON['parse'](localStorage[_0x51d5a3(0x227)]('filledInput')), formlyLastStep = JSON[_0x51d5a3(0x2f0)](localStorage[_0x51d5a3(0x227)]('formlyLastStep')), formlyLastStepAnswer = JSON[_0x51d5a3(0x2f0)](localStorage['getItem'](_0x51d5a3(0x1cd)));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x51d5a3(0x1c2))[_0x51d5a3(0x20a)](function() {
    const _0x1e741e = _0x51d5a3;
    ogCloneArr[_0x1e741e(0x255)]({ 'name': $(this)[_0x1e741e(0x31c)](_0x1e741e(0x311)), 'element': $(this)['clone'](!![]), 'display': $(_0x1e741e(0x20d) + $(this)[_0x1e741e(0x31c)]('clone') + '\x22]')['eq'](0x0)['clone'](!![]) });
});
const setPageLoadTime = () => {
    const _0x197f9f = _0x51d5a3;
    localStorage[_0x197f9f(0x297)](_0x197f9f(0x2c1), Date[_0x197f9f(0x27d)]()[_0x197f9f(0x307)]());
};
setPageLoadTime();
$('div.g-recaptcha')[_0x51d5a3(0x239)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x1595f7) { notRobot = !![]; }($(steps[x])[_0x51d5a3(0x31c)]('card') || $(steps[x])[_0x51d5a3(0x27a)](_0x51d5a3(0x2ee))['data'](_0x51d5a3(0x2d2))) && (next = !![]);
$(_0x51d5a3(0x2ab))['length'] > 0x0 && (countCard = $(_0x51d5a3(0x2ab))['data'](_0x51d5a3(0x1d6)));
$(_0x51d5a3(0x1d3))[_0x51d5a3(0x292)](), $(progressbarClone)[_0x51d5a3(0x329)]('current'), $('[data-form=\x22progress\x22]')[_0x51d5a3(0x244)]()[_0x51d5a3(0x23d)](), $(_0x51d5a3(0x28b))['hide'](), $(_0x51d5a3(0x21d))[_0x51d5a3(0x292)](), steps[_0x51d5a3(0x20a)](function() {
    const _0x537f81 = _0x51d5a3;
    $(_0x537f81(0x309))[_0x537f81(0x2fd)](progressbarClone['clone'](!![], !![]));
}), $(_0x51d5a3(0x33f))[_0x51d5a3(0x292)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x51d5a3(0x239)], $(_0x51d5a3(0x259))[_0x51d5a3(0x266)](totalSteps)) : ($(steps[x])['data']('card') ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x51d5a3(0x327))[_0x51d5a3(0x239)], $(_0x51d5a3(0x259))[_0x51d5a3(0x266)](totalSteps), $(_0x51d5a3(0x2f9))[_0x51d5a3(0x20a)](function() {
    const _0x36e701 = _0x51d5a3;
    $($(_0x36e701(0x295))[$(this)[_0x36e701(0x34f)]()])[_0x36e701(0x292)]();
}));
progressbar = $(_0x51d5a3(0x309))[_0x51d5a3(0x244)](), $('[data-form=\x22progress-indicator\x22]')['on']('click', clickableIndicator), $(_0x51d5a3(0x2ba))[_0x51d5a3(0x266)](curStep), steps['hide'](), $(_0x51d5a3(0x271))['hide'](), $(_0x51d5a3(0x324))[_0x51d5a3(0x20a)](function() {
    const _0x7604e5 = _0x51d5a3;
    $(this)[_0x7604e5(0x22d)]('type', _0x7604e5(0x2a9));
});

function getParams() {
    const _0x532f48 = _0x51d5a3;
    urlFormly[_0x532f48(0x205)][_0x532f48(0x256)](function(_0x5637d5, _0x4c90dd) { searchQ['push']({ 'val': _0x5637d5, 'key': _0x4c90dd }); });
}

function getSafe(_0x1ff6cb, _0x51b7f4) { try { return _0x1ff6cb(); } catch (_0x2db142) { return _0x51b7f4; } }

function phoneAutoFormat(_0x455a26) {
    var _0x222a2b = '';
    return function(_0x1f2c15) {
        const _0x13d76a = _0x52e6;
        var _0x3096c3 = '',
            _0x2a1d83 = _0x1f2c15[_0x13d76a(0x318)](/\D/g, ''),
            _0x3c53eb = 0x0,
            _0xcabc0c = 0x0;
        while (_0x3c53eb < _0x2a1d83['length'] && _0xcabc0c < _0x455a26['length']) { _0x455a26[_0xcabc0c] === 'x' ? (_0x3096c3 += _0x2a1d83[_0x3c53eb], _0x3c53eb++) : _0x3096c3 += _0x455a26[_0xcabc0c], _0xcabc0c++; }
        if (_0x1f2c15[_0x13d76a(0x239)] < _0x222a2b['length']) {
            var _0x98b7a5 = _0x455a26[_0x13d76a(0x2ac)](_0xcabc0c);
            _0x3096c3 += _0x98b7a5[_0x13d76a(0x318)](/x/g, '');
        }
        return _0x222a2b = _0x3096c3, _0x3096c3;
    };
}

function validateURL(_0x5505d6) { const _0x201f03 = _0x51d5a3; return urlPattern[_0x201f03(0x325)](_0x5505d6) ? !![] : ![]; }
quiz && steps[_0x51d5a3(0x20a)](function() {
    const _0x2f2f9e = _0x51d5a3;
    $(this)[_0x2f2f9e(0x244)]()[_0x2f2f9e(0x22d)](_0x2f2f9e(0x340), !![]), $(this)['children']()['attr'](_0x2f2f9e(0x2e3), 0xfa);
});

function disableBtn(_0xe9a75b) {
    const _0x42a3b9 = _0x51d5a3;
    fill = ![], !customError && ($('[data-form=\x22next-btn\x22]')['css']({ 'opacity': _0x42a3b9(0x29c), 'pointer-events': _0x42a3b9(0x22a) }), $('[data-form=\x22next-btn\x22]')[_0x42a3b9(0x1f3)](_0x42a3b9(0x2e1)), $(_0x42a3b9(0x28b))[_0x42a3b9(0x2cf)]({ 'opacity': _0x42a3b9(0x29c), 'pointer-events': _0x42a3b9(0x22a) }), $(_0x42a3b9(0x28b))[_0x42a3b9(0x1f3)](_0x42a3b9(0x2e1)), $(_0x42a3b9(0x21d))[_0x42a3b9(0x2cf)]({ 'opacity': _0x42a3b9(0x29c), 'pointer-events': 'none' }), $(_0x42a3b9(0x21d))[_0x42a3b9(0x1f3)](_0x42a3b9(0x2e1)));
}

function enableBtn() {
    const _0x249bd0 = _0x51d5a3;
    fill = !![], $(_0x249bd0(0x322))[_0x249bd0(0x2cf)]({ 'pointer-events': _0x249bd0(0x26c), 'opacity': '1' }), $(_0x249bd0(0x322))['removeClass']('disabled'), $('[data-form=\x22submit-btn\x22]')['css']({ 'pointer-events': _0x249bd0(0x26c), 'opacity': '1' }), $(_0x249bd0(0x28b))[_0x249bd0(0x329)](_0x249bd0(0x2e1)), $('[data-form-ms=\x22submit-btn\x22]')[_0x249bd0(0x2cf)]({ 'pointer-events': _0x249bd0(0x26c), 'opacity': '1' }), $(_0x249bd0(0x21d))[_0x249bd0(0x329)]('disabled');
}

function saveLastAnswer(_0xcfef60) {
    const _0x524bfd = _0x51d5a3;
    localStorage[_0x524bfd(0x1e3)]('formlyLastStepAnswer'), localStorage[_0x524bfd(0x297)](_0x524bfd(0x1cd), JSON['stringify'](_0xcfef60));
}

function saveFilledInput() {
    const _0x54c24d = _0x51d5a3;
    $(_0x54c24d(0x34a))[_0x54c24d(0x27e)](_0x54c24d(0x34d))['each'](function() {
        const _0x45d5c1 = _0x54c24d;
        $(this)[_0x45d5c1(0x22d)](_0x45d5c1(0x2df)) === _0x45d5c1(0x2d7) || $(this)['attr'](_0x45d5c1(0x2df)) === _0x45d5c1(0x2bf) ? $(this)[_0x45d5c1(0x283)](_0x45d5c1(0x210)) && (filledInput[_0x45d5c1(0x2db)](_0x3d10f7 => _0x3d10f7[_0x45d5c1(0x28c)] === $(this)[_0x45d5c1(0x22d)](_0x45d5c1(0x294))) ? (filledInput = filledInput[_0x45d5c1(0x20c)](_0x35b0f8 => _0x35b0f8[_0x45d5c1(0x28c)] !== $(this)[_0x45d5c1(0x22d)](_0x45d5c1(0x294))), $(this)['val']() !== '' && filledInput[_0x45d5c1(0x255)]({ 'inputName': $(this)[_0x45d5c1(0x22d)](_0x45d5c1(0x294)), 'value': $(this)[_0x45d5c1(0x28e)]() })) : $(this)[_0x45d5c1(0x28e)]() !== '' && filledInput[_0x45d5c1(0x255)]({ 'inputName': $(this)['attr']('name'), 'value': $(this)[_0x45d5c1(0x28e)]() })) : filledInput[_0x45d5c1(0x2db)](_0x5284fe => _0x5284fe['inputName'] === $(this)[_0x45d5c1(0x22d)](_0x45d5c1(0x294))) ? (filledInput = filledInput[_0x45d5c1(0x20c)](_0x2e93db => _0x2e93db[_0x45d5c1(0x28c)] !== $(this)[_0x45d5c1(0x22d)]('name')), $(this)['val']() !== '' && filledInput[_0x45d5c1(0x255)]({ 'inputName': $(this)[_0x45d5c1(0x22d)](_0x45d5c1(0x294)), 'value': $(this)[_0x45d5c1(0x28e)]() })) : $(this)[_0x45d5c1(0x28e)]() !== '' && filledInput['push']({ 'inputName': $(this)[_0x45d5c1(0x22d)](_0x45d5c1(0x294)), 'value': $(this)['val']() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x54c24d(0x1e3)](_0x54c24d(0x348)), localStorage['setItem']('formlyLastStep', lastStep)), localStorage[_0x54c24d(0x1e3)](_0x54c24d(0x1db)), localStorage[_0x54c24d(0x297)](_0x54c24d(0x1db), JSON[_0x54c24d(0x1d5)](filledInput));
}

function scrollTop() {
    const _0x5bedb4 = _0x51d5a3;
    scrollToTop && $(_0x5bedb4(0x2e0))[_0x5bedb4(0x28a)]({ 'scrollTop': $(_0x5bedb4(0x26b))['offset']()[_0x5bedb4(0x1f9)] - scrollTopOffset }, 0x3e8);
}

function updateStep() {
    const _0x2b4603 = _0x51d5a3;
    scrollTop(), skip = ![], $(_0x2b4603(0x1de))[_0x2b4603(0x329)](_0x2b4603(0x2e1));
    $('[data-clickable]')[_0x2b4603(0x31c)]('clickable') && (steps[_0x2b4603(0x27a)](':input[required]')['each'](function() {
        const _0x7681b7 = _0x2b4603;
        $($(_0x7681b7(0x1de))[$(this)[_0x7681b7(0x30c)](_0x7681b7(0x1f4))[_0x7681b7(0x34f)]()]), $(this)[_0x7681b7(0x28e)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $('input[type=\x22submit\x22]')[_0x2b4603(0x1f3)]('disabled') : $(_0x2b4603(0x344))['removeClass'](_0x2b4603(0x2e1)));
    $(_0x2b4603(0x1de))['removeClass'](_0x2b4603(0x306)), $('[data-form=\x22custom-progress-indicator\x22]')['addClass']('disabled'), $($('[data-form=\x22custom-progress-indicator\x22]')[x])[_0x2b4603(0x1f3)](_0x2b4603(0x306)), selection = selections[_0x2b4603(0x20c)](_0x3c9744 => _0x3c9744[_0x2b4603(0x2a7)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0x2b4603(0x254)]) ? parseInt(getSafe(() => selection[0x0][_0x2b4603(0x254)])) : x);
    $('[data-answer]')[_0x2b4603(0x292)](), steps['hide']();
    reinitIX === !![] && window['Webflow'][_0x2b4603(0x2cb)]();
    $(progressbar)[_0x2b4603(0x329)](_0x2b4603(0x306));
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])[_0x2b4603(0x1f3)](_0x2b4603(0x306)) : !$(steps[i])[_0x2b4603(0x31c)](_0x2b4603(0x2d2)) && $(progressbar[i])[_0x2b4603(0x1f3)](_0x2b4603(0x306)); }
    reinitIX === !![] ? (window[_0x2b4603(0x326)] && window[_0x2b4603(0x326)][_0x2b4603(0x355)](_0x2b4603(0x2c2))[_0x2b4603(0x206)](), document[_0x2b4603(0x25d)](new Event('readystatechange')), $(steps[x])['show']()) : $(steps[x])[_0x2b4603(0x284)](_0x2b4603(0x2d0));
    $('.active-answer-card')[_0x2b4603(0x329)](_0x2b4603(0x31a));
    x === 0x0 && !$(steps[x])[_0x2b4603(0x31c)](_0x2b4603(0x2d2)) && ($(steps[x])['find']('[data-answer]')[_0x2b4603(0x251)](), $(steps[x])[_0x2b4603(0x27a)]('[data-answer]')[_0x2b4603(0x1f3)](_0x2b4603(0x31a)));
    selection['length'] > 0x0 ? ($(steps[x])['find'](_0x2b4603(0x1fc) + selection[0x0]['selected'] + '\x22]')[_0x2b4603(0x251)](), $(steps[x])['find'](_0x2b4603(0x1fc) + selection[0x0][_0x2b4603(0x2dd)] + '\x22]')[_0x2b4603(0x1f3)](_0x2b4603(0x31a))) : ($(steps[x])[_0x2b4603(0x27a)]('[data-answer=\x22' + answer + '\x22]')['show'](), $(steps[x])[_0x2b4603(0x27a)](_0x2b4603(0x1fc) + answer + '\x22]')[_0x2b4603(0x1f3)]('active-answer-card'));
    if (x === 0x0) $(_0x2b4603(0x1e4))[_0x2b4603(0x292)](), $(_0x2b4603(0x322))[_0x2b4603(0x251)](), $(_0x2b4603(0x28b))['hide']();
    else {
        if (x === steps[_0x2b4603(0x239)] - 0x1 || $(steps[x])[_0x2b4603(0x27a)]('[data-form=\x22submit\x22]:visible')[_0x2b4603(0x239)] > 0x0) {
            $(_0x2b4603(0x322))[_0x2b4603(0x292)]();
            if ($(steps[x])[_0x2b4603(0x27a)]('[data-form=\x22next-btn\x22][data-submit-show]')[_0x2b4603(0x31c)](_0x2b4603(0x224))) $(steps[x])[_0x2b4603(0x27a)](_0x2b4603(0x2e7))[_0x2b4603(0x251)]();
            else $(_0x2b4603(0x322))[_0x2b4603(0x31c)](_0x2b4603(0x224)) && $(_0x2b4603(0x322))[_0x2b4603(0x251)]();
            $('[data-form=\x22submit-btn\x22]')[_0x2b4603(0x251)](), $('[data-form-ms=\x22submit-btn\x22]')['show'](), $(_0x2b4603(0x1e4))['show']();
        } else $(_0x2b4603(0x322))['show'](), $(_0x2b4603(0x1e4))[_0x2b4603(0x251)](), $(_0x2b4603(0x28b))[_0x2b4603(0x292)](), $('[data-form-ms=\x22submit-btn\x22]')[_0x2b4603(0x292)]();
    }
    $($(steps[x])[_0x2b4603(0x27a)]('input[autofocus]')[0x0])['focus'](), $($(steps[x])['find'](_0x2b4603(0x1d2))[0x0])[_0x2b4603(0x288)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x2b4603(0x1de))[idx])['removeClass'](_0x2b4603(0x2e1)); }
}

function validateEmail(_0x420e04, _0x577795, _0x2aa854) {
    const _0x45c769 = _0x51d5a3;
    let _0x2a72a1 = _0x420e04[_0x45c769(0x258)]('@') ? _0x420e04['split']('@')[0x1][_0x45c769(0x298)]('.')[0x0] : [];
    dom = [];
    _0x577795 !== undefined && _0x577795[_0x45c769(0x298)](',')[_0x45c769(0x256)](function(_0x3774d2) {
        const _0x51aa4e = _0x45c769;
        _0x3774d2[_0x51aa4e(0x258)](_0x2a72a1) && dom['push'](_0x2a72a1);
    });
    dom[_0x45c769(0x239)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0xe3c154 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0xe3c154[_0x45c769(0x325)](_0x420e04) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x45c769(0x255)]({ 'input': _0x2aa854 })) : emailFilled = !![];
}

function phoneValidation(_0x232463, _0x37b9df, _0x547c6f) {
    if (phoneFormat) return _0x37b9df >= _0x547c6f ? !![] : ![];
    else { if (_0x37b9df >= _0x547c6f) return !![]; }
}

function validation() {
    const _0x52e4cb = _0x51d5a3;
    $(steps[x])[_0x52e4cb(0x31c)]('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqTime = [], empReqTel = [], empReqUrl = [], empReqDate = [], empReqSelect = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])['find'](_0x52e4cb(0x32d))[_0x52e4cb(0x239)], textInputLength = $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x21f))[_0x52e4cb(0x239)], selectInputLength = $(steps[x])['find'](_0x52e4cb(0x1ce))[_0x52e4cb(0x239)], emailInputLength = $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x225))['length'], checkboxInputLength = $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x333))['length'];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x52e4cb(0x31c)](_0x52e4cb(0x2d7)) ? $(steps[x])[_0x52e4cb(0x31c)](_0x52e4cb(0x2d7)) : $(steps[x])['find']('[data-checkbox]')[_0x52e4cb(0x239)] > 0x0 ? $(steps[x])[_0x52e4cb(0x27a)]('[data-checkbox]')[_0x52e4cb(0x31c)](_0x52e4cb(0x2d7)) : 0x0, maxCheckCount = $(steps[x])[_0x52e4cb(0x31c)](_0x52e4cb(0x21e)) ? $(steps[x])['data'](_0x52e4cb(0x21e)) : $(steps[x])['find']('[data-max-checkbox]')['length'] > 0x0 ? $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x241))[_0x52e4cb(0x31c)](_0x52e4cb(0x21e)) : 0x0;
    if (!logicExtra) {
        let _0x258eef = $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x1fb)),
            _0x36184c = _0x258eef['filter'](_0x52e4cb(0x2f5)),
            _0x373f39 = _0x258eef[_0x52e4cb(0x20c)](_0x52e4cb(0x1ff));
        _0x258eef['length'] > 0x0 && (checkCount === '*' || checkCount > _0x258eef[_0x52e4cb(0x239)] ? _0x258eef[_0x52e4cb(0x20a)](function() {
            const _0x29a560 = _0x52e4cb;
            $(this)['is'](':checked') ? (checkboxFilled = !![], resetInputErrorMessage($(this)[_0x29a560(0x22d)]('name'))) : (checkboxFilled = ![], unfilledArr[_0x29a560(0x255)]({ 'input': $(this)[_0x29a560(0x22d)]('name') }));
        }) : _0x373f39[_0x52e4cb(0x239)] >= checkCount ? _0x36184c['length'] > 0x0 ? _0x36184c[_0x52e4cb(0x239)] === _0x373f39[_0x52e4cb(0x239)] ? (checkboxFilled = !![], resetInputErrorMessage(_0x36184c[_0x52e4cb(0x2b9)]()[_0x52e4cb(0x22d)](_0x52e4cb(0x294)))) : (checkboxFilled = ![], _0x36184c[_0x52e4cb(0x27e)](_0x52e4cb(0x1ff))[_0x52e4cb(0x20a)](function() {
            const _0x2166d9 = _0x52e4cb;
            unfilledArr[_0x2166d9(0x255)]({ 'input': $(this)[_0x2166d9(0x22d)](_0x2166d9(0x294)) });
        })) : _0x373f39[_0x52e4cb(0x239)] < maxCheckCount ? ($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2d1))[_0x52e4cb(0x283)](_0x52e4cb(0x2e1), ![]), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2d1))[_0x52e4cb(0x1b6)](_0x52e4cb(0x2ec))[_0x52e4cb(0x329)](_0x52e4cb(0x2e1))) : ($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x25b))[_0x52e4cb(0x1b6)](_0x52e4cb(0x2ec))[_0x52e4cb(0x1f3)](_0x52e4cb(0x2e1)), $(steps[x])['find'](_0x52e4cb(0x25b))[_0x52e4cb(0x283)](_0x52e4cb(0x2e1), !![])) : (checkboxFilled = ![], _0x36184c[_0x52e4cb(0x27e)](_0x52e4cb(0x1ff))['each'](function() {
            const _0x194514 = _0x52e4cb;
            unfilledArr[_0x194514(0x255)]({ 'input': $(this)[_0x194514(0x22d)](_0x194514(0x294)) });
        }), unfilledArr[_0x52e4cb(0x255)]({ 'input': _0x258eef[_0x52e4cb(0x2b9)]()['attr']('name') }))), $(steps[x])['find'](_0x52e4cb(0x235))[_0x52e4cb(0x20a)](function(_0x49c6f9) {
            const _0x32f54f = _0x52e4cb;
            var _0x1a5a08 = $(this)['attr'](_0x32f54f(0x294));
            $('input:radio[name=\x22' + _0x1a5a08 + _0x32f54f(0x328))['length'] == 0x0 ? (!empReqRadio[_0x32f54f(0x27a)](_0x502bdd => _0x502bdd['input'] === _0x49c6f9) && empReqRadio[_0x32f54f(0x255)]({ 'input': _0x49c6f9 }), unfilledArr[_0x32f54f(0x255)]({ 'input': $(this)[_0x32f54f(0x22d)](_0x32f54f(0x294)) })) : empReqRadio = empReqRadio[_0x32f54f(0x20c)](_0xe5dc6e => _0xe5dc6e[_0x32f54f(0x2a6)] !== _0x49c6f9), empReqRadio['length'] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x1f7))[_0x52e4cb(0x20a)](function(_0x499ff2) {
            const _0x3da01e = _0x52e4cb;
            let _0x38f608 = $(this)['val']()['length'],
                _0x498c0f = $(this)[_0x3da01e(0x31c)](_0x3da01e(0x2e4)) ? $(this)['data'](_0x3da01e(0x2e4)) : 0x0;
            $(this)['val']() !== '' && _0x38f608 >= _0x498c0f ? empReqInput = empReqInput[_0x3da01e(0x20c)](_0x51374c => _0x51374c[_0x3da01e(0x2a6)] !== _0x499ff2) : (!empReqInput[_0x3da01e(0x27a)](_0x4f6f27 => _0x4f6f27[_0x3da01e(0x2a6)] === _0x499ff2) && empReqInput[_0x3da01e(0x255)]({ 'input': _0x499ff2 }), unfilledArr['push']({ 'input': $(this)[_0x3da01e(0x22d)](_0x3da01e(0x294)) })), empReqInput[_0x3da01e(0x239)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find'](_0x52e4cb(0x217))[_0x52e4cb(0x20a)](function(_0x1037ff) {
            const _0x27e3b1 = _0x52e4cb;
            let _0x546c9b = $(this)[_0x27e3b1(0x28e)]()[_0x27e3b1(0x239)],
                _0x2952a7 = $(this)[_0x27e3b1(0x31c)](_0x27e3b1(0x2e4)) ? $(this)[_0x27e3b1(0x31c)](_0x27e3b1(0x2e4)) : 0x0;
            $(this)['val']() !== '' && _0x546c9b >= _0x2952a7 ? empReqPassword = empReqPassword['filter'](_0xc19812 => _0xc19812[_0x27e3b1(0x2a6)] !== _0x1037ff) : (!empReqPassword[_0x27e3b1(0x27a)](_0x217730 => _0x217730[_0x27e3b1(0x2a6)] === _0x1037ff) && empReqPassword[_0x27e3b1(0x255)]({ 'input': _0x1037ff }), unfilledArr[_0x27e3b1(0x255)]({ 'input': $(this)[_0x27e3b1(0x22d)](_0x27e3b1(0x294)) })), empReqPassword[_0x27e3b1(0x239)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2e6))[_0x52e4cb(0x20a)](function(_0x3d1799) {
            const _0x499c37 = _0x52e4cb;
            let _0x32fb34 = $(this)[_0x499c37(0x28e)]()['length'],
                _0x38814a = $(this)[_0x499c37(0x31c)](_0x499c37(0x2e4)) ? $(this)['data']('min-character') : 0x0;
            $(this)[_0x499c37(0x28e)]() !== '' && _0x32fb34 >= _0x38814a ? empReqUrl = empReqUrl['filter'](_0x47f19e => _0x47f19e[_0x499c37(0x2a6)] !== _0x3d1799) : (!empReqTime[_0x499c37(0x27a)](_0x2185ec => _0x2185ec[_0x499c37(0x2a6)] === _0x3d1799) && empReqUrl['push']({ 'input': _0x3d1799 }), unfilledArr[_0x499c37(0x255)]({ 'input': $(this)[_0x499c37(0x22d)](_0x499c37(0x294)) })), empReqUrl['length'] === 0x0 && validateURL($(this)[_0x499c37(0x28e)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](':input[type=\x22time\x22][required]')[_0x52e4cb(0x20a)](function(_0x6b4ae8) {
            const _0x312aad = _0x52e4cb;
            let _0x15782d = $(this)[_0x312aad(0x28e)]()[_0x312aad(0x239)],
                _0x27ec5b = $(this)[_0x312aad(0x31c)](_0x312aad(0x2e4)) ? $(this)['data'](_0x312aad(0x2e4)) : 0x0;
            $(this)[_0x312aad(0x28e)]() !== '' && _0x15782d >= _0x27ec5b ? empReqTime = empReqTime['filter'](_0x1dffd1 => _0x1dffd1[_0x312aad(0x2a6)] !== _0x6b4ae8) : (!empReqTime[_0x312aad(0x27a)](_0x1acb27 => _0x1acb27[_0x312aad(0x2a6)] === _0x6b4ae8) && empReqTime[_0x312aad(0x255)]({ 'input': _0x6b4ae8 }), unfilledArr[_0x312aad(0x255)]({ 'input': $(this)['attr'](_0x312aad(0x294)) })), empReqTime[_0x312aad(0x239)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x319))[_0x52e4cb(0x20a)](function(_0x59685c) {
            const _0x13cbc2 = _0x52e4cb;
            $(this)[_0x13cbc2(0x28e)]() !== '' ? empReqDate = empReqDate['filter'](_0x339f7e => _0x339f7e[_0x13cbc2(0x2a6)] !== _0x59685c) : (!empReqDate[_0x13cbc2(0x27a)](_0xd12eb0 => _0xd12eb0['input'] === _0x59685c) && empReqDate['push']({ 'input': _0x59685c }), unfilledArr[_0x13cbc2(0x255)]({ 'input': $(this)['attr'](_0x13cbc2(0x294)) })), empReqDate[_0x13cbc2(0x239)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](':input[type=\x22tel\x22][required]')['each'](function(_0x462048) {
            const _0x2cf202 = _0x52e4cb;
            if ($(this)[_0x2cf202(0x28e)]() !== '') {
                let _0x570c8c = $(this)[_0x2cf202(0x28e)]()[_0x2cf202(0x239)],
                    _0x485079 = $(this)['data']('min-character') ? $(this)[_0x2cf202(0x31c)]('min-character') : 0x0;
                if ($(this)[_0x2cf202(0x31c)](_0x2cf202(0x1e1))) {
                    var _0x4ffa28 = phoneAutoFormat($(this)['data'](_0x2cf202(0x1e1)));
                    $(this)[_0x2cf202(0x28e)](_0x4ffa28($(this)[_0x2cf202(0x28e)]()));
                }
                phoneValidation($(this)[_0x2cf202(0x28e)](), _0x570c8c, _0x485079) ? empReqTel = empReqTel[_0x2cf202(0x20c)](_0x29d48c => _0x29d48c[_0x2cf202(0x2a6)] !== _0x462048) : empReqTel[_0x2cf202(0x255)]({ 'input': _0x462048 });
            } else !empReqTel[_0x2cf202(0x27a)](_0x346341 => _0x346341[_0x2cf202(0x2a6)] === _0x462048) && empReqTel[_0x2cf202(0x255)]({ 'input': _0x462048 }), unfilledArr[_0x2cf202(0x255)]({ 'input': $(this)[_0x2cf202(0x22d)]('name') });
            empReqTel[_0x2cf202(0x239)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x245))[_0x52e4cb(0x20a)](function(_0x2b7864) {
            const _0x1f8503 = _0x52e4cb;
            $(this)[_0x1f8503(0x28e)]() !== '' ? empReqFile = empReqFile['filter'](_0x233223 => _0x233223[_0x1f8503(0x2a6)] !== _0x2b7864) : (!empReqFile[_0x1f8503(0x27a)](_0x2c0a82 => _0x2c0a82['input'] === _0x2b7864) && empReqFile[_0x1f8503(0x255)]({ 'input': _0x2b7864 }), unfilledArr['push']({ 'input': $(this)[_0x1f8503(0x22d)](_0x1f8503(0x294)) })), empReqFile[_0x1f8503(0x239)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x323))[_0x52e4cb(0x20a)](function(_0x2848dc) {
            const _0x220907 = _0x52e4cb;
            let _0x504304 = $(this)['val']()[_0x220907(0x239)],
                _0x36f844 = $(this)[_0x220907(0x31c)](_0x220907(0x2e4)) ? $(this)[_0x220907(0x31c)](_0x220907(0x2e4)) : 0x0;
            $(this)[_0x220907(0x28e)]() !== '' && _0x504304 >= _0x36f844 ? empReqNum = empReqNum['filter'](_0x33a724 => _0x33a724[_0x220907(0x2a6)] !== _0x2848dc) : (!empReqNum[_0x220907(0x27a)](_0x4d9ed2 => _0x4d9ed2[_0x220907(0x2a6)] === _0x2848dc) && empReqNum[_0x220907(0x255)]({ 'input': _0x2848dc }), unfilledArr[_0x220907(0x255)]({ 'input': $(this)[_0x220907(0x22d)](_0x220907(0x294)) })), empReqNum[_0x220907(0x239)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x246))[_0x52e4cb(0x20a)](function(_0x29790a) {
            const _0x53b851 = _0x52e4cb;
            let _0x263984 = $(this)['val']();
            _0x263984 === '' && (_0x263984 = null), _0x263984 != null ? empReqSelect = empReqSelect[_0x53b851(0x20c)](_0x1e3b8f => _0x1e3b8f[_0x53b851(0x2a6)] !== _0x29790a) : (!empReqSelect['find'](_0x1090d8 => _0x1090d8[_0x53b851(0x2a6)] === _0x29790a) && empReqSelect[_0x53b851(0x255)]({ 'input': _0x29790a }), unfilledArr[_0x53b851(0x255)]({ 'input': $(this)[_0x53b851(0x22d)](_0x53b851(0x294)) })), empReqSelect[_0x53b851(0x239)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])['find'](_0x52e4cb(0x290))[_0x52e4cb(0x20a)](function(_0x16c886) {
            const _0x24280a = _0x52e4cb;
            let _0x43b666 = $(this)[_0x24280a(0x28e)]()[_0x24280a(0x239)],
                _0x1729bf = $(this)[_0x24280a(0x31c)](_0x24280a(0x2e4)) ? $(this)['data'](_0x24280a(0x2e4)) : 0x0;
            $(this)[_0x24280a(0x28e)]() !== '' && _0x43b666 >= _0x1729bf ? empReqTextarea = empReqTextarea[_0x24280a(0x20c)](_0x2a87d5 => _0x2a87d5['input'] !== _0x16c886) : (!empReqTextarea[_0x24280a(0x27a)](_0x304f41 => _0x304f41['input'] === _0x16c886) && empReqTextarea[_0x24280a(0x255)]({ 'input': _0x16c886 }), unfilledArr[_0x24280a(0x255)]({ 'input': $(this)[_0x24280a(0x22d)](_0x24280a(0x294)) })), empReqTextarea['length'] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](':input[type=\x22email\x22][required]')[_0x52e4cb(0x20a)](function() {
            const _0x5d28d6 = _0x52e4cb;
            $(this)[_0x5d28d6(0x28e)]() !== '' ? validateEmail($(this)[_0x5d28d6(0x28e)](), $(this)['data'](_0x5d28d6(0x273)), $(this)[_0x5d28d6(0x22d)](_0x5d28d6(0x294))) : (emailFilled = ![], unfilledArr[_0x5d28d6(0x255)]({ 'input': $(this)['attr'](_0x5d28d6(0x294)) }));
        });
    } else {
        if ($(steps[x])[_0x52e4cb(0x31c)]('card')) answer = $(steps[x])[_0x52e4cb(0x27a)]('[data-go-to]')['data'](_0x52e4cb(0x1f2)), selections = selections[_0x52e4cb(0x20c)](_0x46089a => _0x46089a[_0x52e4cb(0x2a7)] !== x), selections[_0x52e4cb(0x255)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['data']('card') && (answer = $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x31c)](_0x52e4cb(0x1f2)), selections = selections[_0x52e4cb(0x20c)](_0x3036fd => _0x3036fd[_0x52e4cb(0x2a7)] !== x), selections[_0x52e4cb(0x255)]({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](':input')['is']('[type=\x22checkbox\x22]')) {
            if (checkCount === '*' || checkCount > $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x1fb))[_0x52e4cb(0x239)]) $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x1fb))[_0x52e4cb(0x20a)](function() {
                const _0x5df5f2 = _0x52e4cb;
                if ($(this)['is'](':checked')) {
                    if ($(steps[x])[_0x5df5f2(0x27a)](_0x5df5f2(0x2f1))['length'] < 0x1) {
                        let _0x4221bc = undefined;
                        $(this)[_0x5df5f2(0x30c)](_0x5df5f2(0x33d))['data'](_0x5df5f2(0x1eb)) && (_0x4221bc = $(this)[_0x5df5f2(0x30c)](_0x5df5f2(0x33d))[_0x5df5f2(0x31c)](_0x5df5f2(0x1eb)));
                        if ($(this)[_0x5df5f2(0x30c)](_0x5df5f2(0x2ef))[_0x5df5f2(0x22d)](_0x5df5f2(0x2a5))) {
                            let _0x497e53 = $(this)['parents']('[data-go-to]')[_0x5df5f2(0x22d)](_0x5df5f2(0x2a5));
                            selections = selections[_0x5df5f2(0x20c)](_0x22d712 => _0x22d712['step'] !== x), selections[_0x5df5f2(0x255)]({ 'step': x, 'selected': _0x497e53 });
                            if (_0x4221bc) {
                                selections = selections[_0x5df5f2(0x20c)](_0x1d46d1 => _0x1d46d1[_0x5df5f2(0x2a7)] !== _0x4221bc - 0x2), selections[_0x5df5f2(0x255)]({ 'step': _0x4221bc - 0x2, 'selected': _0x497e53 });
                                let _0x5e9b3e = selections[_0x5df5f2(0x2d4)](_0x36d105 => _0x36d105[_0x5df5f2(0x2a7)] === x);
                                selections[_0x5e9b3e]['skipTo'] = parseInt(_0x4221bc) - 0x1, selections[_0x5e9b3e][_0x5df5f2(0x2b2)] = x;
                            }
                        }
                        checkboxFilled = !![], $(steps[x])[_0x5df5f2(0x27a)](':input[type=\x22checkbox\x22][required]:checked')[_0x5df5f2(0x239)] >= $(steps[x])[_0x5df5f2(0x27a)](_0x5df5f2(0x219))[_0x5df5f2(0x239)] && resetInputErrorMessage($(steps[x])[_0x5df5f2(0x27a)](':input[type=\x22checkbox\x22]')[_0x5df5f2(0x22d)](_0x5df5f2(0x294)));
                    }
                } else checkboxFilled = ![], unfilledArr['push']({ 'input': $(this)[_0x5df5f2(0x22d)](_0x5df5f2(0x294)) });
            });
            else {
                if ($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x2a4))['length'] >= checkCount) {
                    if ($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x1fb))[_0x52e4cb(0x30c)](_0x52e4cb(0x2ef))['attr'](_0x52e4cb(0x2a5))) {
                        let _0x11511a = undefined;
                        $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x1fb))[_0x52e4cb(0x30c)]('[data-skip-to]')[_0x52e4cb(0x22d)]('data-skip-to') && (_0x11511a = $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](':input[type=\x22checkbox\x22]:checked')[_0x52e4cb(0x30c)](_0x52e4cb(0x33d))[_0x52e4cb(0x22d)]('data-skip-to'));
                        let _0x1940a1 = $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x1fb))[_0x52e4cb(0x30c)](_0x52e4cb(0x2ef))['attr'](_0x52e4cb(0x2a5));
                        selections = selections[_0x52e4cb(0x20c)](_0x40985c => _0x40985c[_0x52e4cb(0x2a7)] !== x), selections[_0x52e4cb(0x255)]({ 'step': x, 'selected': _0x1940a1 });
                        if (_0x11511a) {
                            selections = selections[_0x52e4cb(0x20c)](_0x56da7b => _0x56da7b['step'] !== _0x11511a - 0x2), selections[_0x52e4cb(0x255)]({ 'step': _0x11511a - 0x2, 'selected': _0x1940a1 });
                            let _0x41791c = selections['findIndex'](_0x4e986f => _0x4e986f[_0x52e4cb(0x2a7)] === x);
                            selections[_0x41791c][_0x52e4cb(0x254)] = parseInt(_0x11511a) - 0x1, selections[_0x41791c][_0x52e4cb(0x2b2)] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])['find'](':input[type=\x22checkbox\x22][required]:checked')[_0x52e4cb(0x239)] >= $(steps[x])['find'](_0x52e4cb(0x219))[_0x52e4cb(0x239)] && resetInputErrorMessage($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x1fb))['attr'](_0x52e4cb(0x294))), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x2a4))[_0x52e4cb(0x239)] < maxCheckCount ? ($(steps[x])['find']('.active-answer-card')[_0x52e4cb(0x27a)](_0x52e4cb(0x2d1))[_0x52e4cb(0x283)](_0x52e4cb(0x2e1), ![]), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x2d1))[_0x52e4cb(0x1b6)](_0x52e4cb(0x2ec))[_0x52e4cb(0x329)](_0x52e4cb(0x2e1))) : ($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)]('input[type=\x22checkbox\x22]:not(:checked)')['parent'](_0x52e4cb(0x2ec))[_0x52e4cb(0x1f3)]('disabled'), $(steps[x])[_0x52e4cb(0x27a)]('.active-answer-card')[_0x52e4cb(0x27a)](_0x52e4cb(0x25b))[_0x52e4cb(0x283)](_0x52e4cb(0x2e1), !![]));
                } else checkboxFilled = ![], $(steps[x])['find'](_0x52e4cb(0x219))[_0x52e4cb(0x20a)](function() {
                    const _0x4ba26d = _0x52e4cb;
                    $(this)[_0x4ba26d(0x27e)](_0x4ba26d(0x1ff)) && unfilledArr[_0x4ba26d(0x255)]({ 'input': $(this)[_0x4ba26d(0x22d)]('name') });
                });
            }
        }
        $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x235))['each'](function(_0x12cc26) {
            const _0x45f389 = _0x52e4cb;
            var _0x1470d6 = $(this)[_0x45f389(0x22d)]('name');
            $(_0x45f389(0x2d6) + _0x1470d6 + _0x45f389(0x328))[_0x45f389(0x239)] == 0x0 ? (!empReqRadio[_0x45f389(0x27a)](_0x1fb3b2 => _0x1fb3b2[_0x45f389(0x2a6)] === _0x12cc26) && empReqRadio[_0x45f389(0x255)]({ 'input': _0x12cc26 }), unfilledArr[_0x45f389(0x255)]({ 'input': $(this)[_0x45f389(0x22d)](_0x45f389(0x294)) })) : empReqRadio = empReqRadio[_0x45f389(0x20c)](_0xbda227 => _0xbda227[_0x45f389(0x2a6)] !== _0x12cc26), empReqRadio[_0x45f389(0x239)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x1f7))[_0x52e4cb(0x20a)](function(_0x4c1d98) {
            const _0x1567de = _0x52e4cb;
            let _0x27ff0e = $(this)[_0x1567de(0x28e)]()[_0x1567de(0x239)],
                _0x45234c = $(this)[_0x1567de(0x31c)]('min-character') ? $(this)[_0x1567de(0x31c)](_0x1567de(0x2e4)) : 0x0;
            $(this)['val']() !== '' && _0x27ff0e >= _0x45234c ? empReqInput = empReqInput[_0x1567de(0x20c)](_0x3d95b0 => _0x3d95b0[_0x1567de(0x2a6)] !== _0x4c1d98) : (!empReqInput[_0x1567de(0x27a)](_0x52d14b => _0x52d14b[_0x1567de(0x2a6)] === _0x4c1d98) && empReqInput[_0x1567de(0x255)]({ 'input': _0x4c1d98 }), unfilledArr['push']({ 'input': $(this)[_0x1567de(0x22d)](_0x1567de(0x294)) })), empReqInput[_0x1567de(0x239)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x2ae))[_0x52e4cb(0x20a)](function(_0x419161) {
            const _0x3d14db = _0x52e4cb;
            skipTo = undefined, $(this)[_0x3d14db(0x30c)](_0x3d14db(0x33d))[_0x3d14db(0x31c)]('skip-to') !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x3d14db(0x31c)](_0x3d14db(0x1eb))), $(this)['parents'](_0x3d14db(0x2ef))[_0x3d14db(0x22d)](_0x3d14db(0x2a5)) && (answer = $(this)['parents']('[data-go-to]')[_0x3d14db(0x22d)](_0x3d14db(0x2a5)), selections = selections[_0x3d14db(0x20c)](_0x24753f => _0x24753f[_0x3d14db(0x2a7)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x1158b4 => _0x1158b4[_0x3d14db(0x2a7)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x134096 => _0x134096[_0x3d14db(0x2a7)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3d14db(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x217))[_0x52e4cb(0x20a)](function(_0x28b55a) {
            const _0xd80c8c = _0x52e4cb;
            let _0x24740c = $(this)['val']()[_0xd80c8c(0x239)],
                _0x4e096d = $(this)['data'](_0xd80c8c(0x2e4)) ? $(this)[_0xd80c8c(0x31c)](_0xd80c8c(0x2e4)) : 0x0;
            $(this)[_0xd80c8c(0x28e)]() !== '' && _0x24740c >= _0x4e096d ? empReqPassword = empReqPassword['filter'](_0x513ef3 => _0x513ef3[_0xd80c8c(0x2a6)] !== _0x28b55a) : (!empReqPassword['find'](_0x506077 => _0x506077[_0xd80c8c(0x2a6)] === _0x28b55a) && empReqPassword[_0xd80c8c(0x255)]({ 'input': _0x28b55a }), unfilledArr[_0xd80c8c(0x255)]({ 'input': $(this)[_0xd80c8c(0x22d)](_0xd80c8c(0x294)) })), empReqPassword[_0xd80c8c(0x239)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](':input[type=\x22password\x22]')['each'](function(_0x5b3868) {
            const _0x7ceff6 = _0x52e4cb;
            skipTo = undefined, $(this)[_0x7ceff6(0x30c)](_0x7ceff6(0x33d))['data']('skip-to') !== '' && (skipTo = $(this)[_0x7ceff6(0x30c)](_0x7ceff6(0x33d))[_0x7ceff6(0x31c)]('skip-to')), $(this)[_0x7ceff6(0x30c)](_0x7ceff6(0x2ef))[_0x7ceff6(0x22d)](_0x7ceff6(0x2a5)) && (answer = $(this)[_0x7ceff6(0x30c)](_0x7ceff6(0x2ef))['attr'](_0x7ceff6(0x2a5)), selections = selections[_0x7ceff6(0x20c)](_0x41d2e6 => _0x41d2e6['step'] !== x), selections[_0x7ceff6(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x7ceff6(0x20c)](_0x36e73b => _0x36e73b[_0x7ceff6(0x2a7)] !== skipTo - 0x2), selections[_0x7ceff6(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x7ceff6(0x2d4)](_0x82521e => _0x82521e[_0x7ceff6(0x2a7)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x7ceff6(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x2e6))[_0x52e4cb(0x20a)](function(_0x21e6b7) {
            const _0x10b514 = _0x52e4cb;
            let _0x23b42e = $(this)[_0x10b514(0x28e)]()[_0x10b514(0x239)],
                _0x3bffdd = $(this)[_0x10b514(0x31c)]('min-character') ? $(this)['data'](_0x10b514(0x2e4)) : 0x0;
            $(this)[_0x10b514(0x28e)]() !== '' && _0x23b42e >= _0x3bffdd ? empReqUrl = empReqUrl[_0x10b514(0x20c)](_0x2d3a56 => _0x2d3a56[_0x10b514(0x2a6)] !== _0x21e6b7) : (!empReqUrl[_0x10b514(0x27a)](_0x318dba => _0x318dba['input'] === _0x21e6b7) && empReqUrl[_0x10b514(0x255)]({ 'input': _0x21e6b7 }), unfilledArr[_0x10b514(0x255)]({ 'input': $(this)[_0x10b514(0x22d)](_0x10b514(0x294)) })), empReqUrl['length'] === 0x0 && validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x1e9))[_0x52e4cb(0x20a)](function(_0x3d7eee) {
            const _0x5cd2de = _0x52e4cb;
            skipTo = undefined, $(this)[_0x5cd2de(0x30c)](_0x5cd2de(0x33d))['data'](_0x5cd2de(0x1eb)) !== '' && (skipTo = $(this)[_0x5cd2de(0x30c)](_0x5cd2de(0x33d))['data'](_0x5cd2de(0x1eb))), $(this)[_0x5cd2de(0x30c)](_0x5cd2de(0x2ef))[_0x5cd2de(0x22d)](_0x5cd2de(0x2a5)) && (answer = $(this)[_0x5cd2de(0x30c)](_0x5cd2de(0x2ef))[_0x5cd2de(0x22d)](_0x5cd2de(0x2a5)), selections = selections[_0x5cd2de(0x20c)](_0x23559d => _0x23559d['step'] !== x), selections[_0x5cd2de(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5cd2de(0x20c)](_0x25e027 => _0x25e027[_0x5cd2de(0x2a7)] !== skipTo - 0x2), selections[_0x5cd2de(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5cd2de(0x2d4)](_0x4b3691 => _0x4b3691[_0x5cd2de(0x2a7)] === x), selections[objIndex][_0x5cd2de(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5cd2de(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x319))[_0x52e4cb(0x20a)](function(_0x544670) {
            const _0x2f3ed7 = _0x52e4cb;
            $(this)[_0x2f3ed7(0x28e)]() !== '' ? empReqDate = empReqDate[_0x2f3ed7(0x20c)](_0x4616ff => _0x4616ff['input'] !== _0x544670) : (!empReqDate[_0x2f3ed7(0x27a)](_0x5ac016 => _0x5ac016[_0x2f3ed7(0x2a6)] === _0x544670) && empReqDate[_0x2f3ed7(0x255)]({ 'input': _0x544670 }), unfilledArr['push']({ 'input': $(this)[_0x2f3ed7(0x22d)]('name') })), empReqDate[_0x2f3ed7(0x239)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x2de))['each'](function(_0x4d284d) {
            const _0x12d813 = _0x52e4cb;
            skipTo = undefined, $(this)[_0x12d813(0x30c)](_0x12d813(0x33d))[_0x12d813(0x31c)](_0x12d813(0x1eb)) !== '' && (skipTo = $(this)[_0x12d813(0x30c)]('[data-skip-to]')['data'](_0x12d813(0x1eb))), $(this)[_0x12d813(0x30c)](_0x12d813(0x2ef))[_0x12d813(0x22d)]('data-go-to') && (answer = $(this)['parents'](_0x12d813(0x2ef))[_0x12d813(0x22d)](_0x12d813(0x2a5)), selections = selections[_0x12d813(0x20c)](_0x12861e => _0x12861e[_0x12d813(0x2a7)] !== x), selections[_0x12d813(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x2755a8 => _0x2755a8[_0x12d813(0x2a7)] !== skipTo - 0x2), selections[_0x12d813(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x6f63a3 => _0x6f63a3[_0x12d813(0x2a7)] === x), selections[objIndex][_0x12d813(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x12d813(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)]('.active-answer-card')[_0x52e4cb(0x27a)](_0x52e4cb(0x34c))[_0x52e4cb(0x20a)](function(_0xfe55f8) {
            const _0x4fe995 = _0x52e4cb;
            $(this)[_0x4fe995(0x28e)]() !== '' ? empReqTime = empReqTime[_0x4fe995(0x20c)](_0x4f97ac => _0x4f97ac['input'] !== _0xfe55f8) : (!empReqTime[_0x4fe995(0x27a)](_0x167d5e => _0x167d5e[_0x4fe995(0x2a6)] === _0xfe55f8) && empReqTime[_0x4fe995(0x255)]({ 'input': _0xfe55f8 }), unfilledArr[_0x4fe995(0x255)]({ 'input': $(this)[_0x4fe995(0x22d)](_0x4fe995(0x294)) })), empReqTime[_0x4fe995(0x239)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find'](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x1c3))[_0x52e4cb(0x20a)](function(_0x368a4e) {
            const _0xe334e3 = _0x52e4cb;
            skipTo = undefined, $(this)['parents'](_0xe334e3(0x33d))[_0xe334e3(0x31c)]('skip-to') !== '' && (skipTo = $(this)[_0xe334e3(0x30c)](_0xe334e3(0x33d))[_0xe334e3(0x31c)](_0xe334e3(0x1eb))), $(this)[_0xe334e3(0x30c)](_0xe334e3(0x2ef))[_0xe334e3(0x22d)]('data-go-to') && (answer = $(this)[_0xe334e3(0x30c)]('[data-go-to]')[_0xe334e3(0x22d)](_0xe334e3(0x2a5)), selections = selections[_0xe334e3(0x20c)](_0xf4de24 => _0xf4de24['step'] !== x), selections[_0xe334e3(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x5e6ea7 => _0x5e6ea7[_0xe334e3(0x2a7)] !== skipTo - 0x2), selections[_0xe334e3(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0xe334e3(0x2d4)](_0x935f67 => _0x935f67[_0xe334e3(0x2a7)] === x), selections[objIndex][_0xe334e3(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0xe334e3(0x2b2)] = x));
        }), $(steps[x])['find'](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x323))[_0x52e4cb(0x20a)](function(_0x5c6baf) {
            const _0x5d470d = _0x52e4cb;
            let _0x8e9948 = $(this)[_0x5d470d(0x28e)]()[_0x5d470d(0x239)],
                _0xb4b8ae = $(this)[_0x5d470d(0x31c)](_0x5d470d(0x2e4)) ? $(this)[_0x5d470d(0x31c)]('min-character') : 0x0;
            $(this)[_0x5d470d(0x28e)]() !== '' && _0x8e9948 >= _0xb4b8ae ? empReqNum = empReqNum['filter'](_0xe32fc0 => _0xe32fc0[_0x5d470d(0x2a6)] !== _0x5c6baf) : (!empReqNum[_0x5d470d(0x27a)](_0x4a5fe0 => _0x4a5fe0[_0x5d470d(0x2a6)] === _0x5c6baf) && empReqNum[_0x5d470d(0x255)]({ 'input': _0x5c6baf }), unfilledArr[_0x5d470d(0x255)]({ 'input': $(this)[_0x5d470d(0x22d)](_0x5d470d(0x294)) })), empReqNum['length'] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])['find'](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x30d))['each'](function(_0x3abfc5) {
            const _0x568a04 = _0x52e4cb;
            skipTo = undefined, $(this)[_0x568a04(0x30c)](_0x568a04(0x33d))[_0x568a04(0x31c)](_0x568a04(0x1eb)) !== '' && (skipTo = $(this)[_0x568a04(0x30c)](_0x568a04(0x33d))[_0x568a04(0x31c)](_0x568a04(0x1eb))), $(this)[_0x568a04(0x30c)]('[data-go-to]')[_0x568a04(0x22d)](_0x568a04(0x2a5)) && (answer = $(this)['parents']('[data-go-to]')['attr'](_0x568a04(0x2a5)), selections = selections[_0x568a04(0x20c)](_0x17798c => _0x17798c['step'] !== x), selections[_0x568a04(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x568a04(0x20c)](_0x3e769f => _0x3e769f[_0x568a04(0x2a7)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x568a04(0x2d4)](_0x457af4 => _0x457af4['step'] === x), selections[objIndex][_0x568a04(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x568a04(0x2b2)] = x));
        }), $(steps[x])['find'](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x354))[_0x52e4cb(0x20a)](function(_0x220ae6) {
            const _0x4035a5 = _0x52e4cb;
            if ($(this)['val']() !== '') {
                let _0x2e1922 = $(this)[_0x4035a5(0x28e)]()['length'],
                    _0x5d144f = $(this)[_0x4035a5(0x31c)](_0x4035a5(0x2e4)) ? $(this)['data']('min-character') : 0x0;
                if ($(this)[_0x4035a5(0x31c)](_0x4035a5(0x1e1))) {
                    var _0x16b178 = phoneAutoFormat($(this)[_0x4035a5(0x31c)](_0x4035a5(0x1e1)));
                    $(this)[_0x4035a5(0x28e)](_0x16b178($(this)[_0x4035a5(0x28e)]()));
                }
                phoneValidation($(this)[_0x4035a5(0x28e)](), _0x2e1922, _0x5d144f) ? empReqTel = empReqTel[_0x4035a5(0x20c)](_0x413110 => _0x413110[_0x4035a5(0x2a6)] !== _0x220ae6) : empReqTel[_0x4035a5(0x255)]({ 'input': _0x220ae6 });
            } else !empReqTel[_0x4035a5(0x27a)](_0x1abacf => _0x1abacf[_0x4035a5(0x2a6)] === _0x220ae6) && empReqTel[_0x4035a5(0x255)]({ 'input': _0x220ae6 }), unfilledArr[_0x4035a5(0x255)]({ 'input': $(this)['attr'](_0x4035a5(0x294)) });
            empReqTel[_0x4035a5(0x239)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)]('.active-answer-card')[_0x52e4cb(0x27a)](_0x52e4cb(0x209))['each'](function(_0x1d38ab) {
            const _0x5b3011 = _0x52e4cb;
            skipTo = undefined, $(this)[_0x5b3011(0x30c)](_0x5b3011(0x33d))[_0x5b3011(0x31c)](_0x5b3011(0x1eb)) !== '' && (skipTo = $(this)[_0x5b3011(0x30c)](_0x5b3011(0x33d))[_0x5b3011(0x31c)](_0x5b3011(0x1eb))), $(this)[_0x5b3011(0x30c)](_0x5b3011(0x2ef))[_0x5b3011(0x22d)]('data-go-to') && (answer = $(this)[_0x5b3011(0x30c)](_0x5b3011(0x2ef))[_0x5b3011(0x22d)](_0x5b3011(0x2a5)), selections = selections['filter'](_0x49cd37 => _0x49cd37['step'] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x5b3011(0x20c)](_0x4de5c2 => _0x4de5c2[_0x5b3011(0x2a7)] !== skipTo - 0x2), selections[_0x5b3011(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5b3011(0x2d4)](_0x5722dd => _0x5722dd[_0x5b3011(0x2a7)] === x), selections[objIndex][_0x5b3011(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5b3011(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)]('.active-answer-card')[_0x52e4cb(0x27a)](_0x52e4cb(0x245))[_0x52e4cb(0x20a)](function(_0x358226) {
            const _0x5ea9f8 = _0x52e4cb;
            $(this)[_0x5ea9f8(0x28e)]() !== '' ? empReqFile = empReqFile[_0x5ea9f8(0x20c)](_0x317edd => _0x317edd[_0x5ea9f8(0x2a6)] !== _0x358226) : (!empReqFile[_0x5ea9f8(0x27a)](_0x45ec16 => _0x45ec16[_0x5ea9f8(0x2a6)] === _0x358226) && empReqFile[_0x5ea9f8(0x255)]({ 'input': _0x358226 }), unfilledArr[_0x5ea9f8(0x255)]({ 'input': $(this)[_0x5ea9f8(0x22d)](_0x5ea9f8(0x294)) })), empReqFile[_0x5ea9f8(0x239)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](':input[type=\x22file\x22]')[_0x52e4cb(0x20a)](function(_0x3d9135) {
            const _0x2da8d4 = _0x52e4cb;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')['data'](_0x2da8d4(0x1eb)) !== '' && (skipTo = $(this)[_0x2da8d4(0x30c)](_0x2da8d4(0x33d))['data'](_0x2da8d4(0x1eb))), $(this)[_0x2da8d4(0x30c)](_0x2da8d4(0x2ef))[_0x2da8d4(0x22d)]('data-go-to') && (answer = $(this)['parents'](_0x2da8d4(0x2ef))[_0x2da8d4(0x22d)](_0x2da8d4(0x2a5)), selections = selections['filter'](_0x9fac82 => _0x9fac82[_0x2da8d4(0x2a7)] !== x), selections[_0x2da8d4(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x2da8d4(0x20c)](_0x20bae1 => _0x20bae1['step'] !== skipTo - 0x2), selections[_0x2da8d4(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x2da8d4(0x2d4)](_0x2bba76 => _0x2bba76[_0x2da8d4(0x2a7)] === x), selections[objIndex][_0x2da8d4(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x2da8d4(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)]('select[required]')['each'](function(_0x22a760) {
            const _0x47029d = _0x52e4cb;
            $(this)[_0x47029d(0x28e)]() !== null && $(this)[_0x47029d(0x28e)]() !== '' ? empReqSelect = empReqSelect[_0x47029d(0x20c)](_0x4f9a5e => _0x4f9a5e[_0x47029d(0x2a6)] !== _0x22a760) : (!empReqSelect[_0x47029d(0x27a)](_0x38db3e => _0x38db3e[_0x47029d(0x2a6)] === _0x22a760) && empReqSelect['push']({ 'input': _0x22a760 }), unfilledArr['push']({ 'input': $(this)[_0x47029d(0x22d)](_0x47029d(0x294)) })), empReqSelect[_0x47029d(0x239)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x2d8))['each'](function(_0x5f1688) {
            const _0x5fef41 = _0x52e4cb;
            skipTo = undefined, $(this)[_0x5fef41(0x30c)]('[data-skip-to]')[_0x5fef41(0x31c)](_0x5fef41(0x1eb)) !== '' && (skipTo = $(this)[_0x5fef41(0x30c)](_0x5fef41(0x33d))[_0x5fef41(0x31c)](_0x5fef41(0x1eb))), $(this)[_0x5fef41(0x30c)](_0x5fef41(0x2ef))['attr'](_0x5fef41(0x2a5)) && (answer = $(this)[_0x5fef41(0x30c)](_0x5fef41(0x2ef))['attr'](_0x5fef41(0x2a5)), selections = selections[_0x5fef41(0x20c)](_0x4fe24d => _0x4fe24d[_0x5fef41(0x2a7)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x1884f2 => _0x1884f2[_0x5fef41(0x2a7)] !== skipTo - 0x2), selections[_0x5fef41(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x5fef41(0x2d4)](_0x4bf966 => _0x4bf966[_0x5fef41(0x2a7)] === x), selections[objIndex][_0x5fef41(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x5fef41(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)]('.active-answer-card')[_0x52e4cb(0x27a)](_0x52e4cb(0x290))['each'](function(_0x2c7d30) {
            const _0x4c814f = _0x52e4cb;
            let _0x2ee62b = $(this)[_0x4c814f(0x28e)]()[_0x4c814f(0x239)],
                _0x5a1fc1 = $(this)[_0x4c814f(0x31c)](_0x4c814f(0x2e4)) ? $(this)[_0x4c814f(0x31c)](_0x4c814f(0x2e4)) : 0x0;
            $(this)[_0x4c814f(0x28e)]() !== '' && _0x2ee62b >= _0x5a1fc1 ? empReqTextarea = empReqTextarea[_0x4c814f(0x20c)](_0x521107 => _0x521107['input'] !== _0x2c7d30) : (!empReqTextarea['find'](_0x3ef482 => _0x3ef482[_0x4c814f(0x2a6)] === _0x2c7d30) && empReqTextarea[_0x4c814f(0x255)]({ 'input': _0x2c7d30 }), unfilledArr[_0x4c814f(0x255)]({ 'input': $(this)[_0x4c814f(0x22d)]('name') })), empReqTextarea[_0x4c814f(0x239)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x2e5))[_0x52e4cb(0x20a)](function(_0x256717) {
            const _0x19d7fc = _0x52e4cb;
            skipTo = undefined, $(this)[_0x19d7fc(0x30c)](_0x19d7fc(0x33d))['data']('skip-to') !== '' && (skipTo = $(this)[_0x19d7fc(0x30c)](_0x19d7fc(0x33d))[_0x19d7fc(0x31c)]('skip-to')), $(this)[_0x19d7fc(0x30c)]('[data-go-to]')[_0x19d7fc(0x22d)](_0x19d7fc(0x2a5)) && (answer = $(this)[_0x19d7fc(0x30c)](_0x19d7fc(0x2ef))[_0x19d7fc(0x22d)](_0x19d7fc(0x2a5)), selections = selections[_0x19d7fc(0x20c)](_0x2c470f => _0x2c470f[_0x19d7fc(0x2a7)] !== x), selections[_0x19d7fc(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x19d7fc(0x20c)](_0x3e7863 => _0x3e7863['step'] !== skipTo - 0x2), selections[_0x19d7fc(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x19d7fc(0x2d4)](_0x121434 => _0x121434['step'] === x), selections[objIndex][_0x19d7fc(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x19d7fc(0x2b2)] = x));
        }), $(steps[x])[_0x52e4cb(0x27a)]('.active-answer-card')[_0x52e4cb(0x27a)](_0x52e4cb(0x26f))[_0x52e4cb(0x20a)](function(_0x588fb7) {
            const _0x38c325 = _0x52e4cb;
            $(this)['val']() !== '' ? validateEmail($(this)[_0x38c325(0x28e)](), $(this)[_0x38c325(0x31c)](_0x38c325(0x273)), $(this)['attr'](_0x38c325(0x294))) : (emailFilled = ![], unfilledArr[_0x38c325(0x255)]({ 'input': $(this)['attr']('name') }));
        }), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))['find'](_0x52e4cb(0x26d))[_0x52e4cb(0x20a)](function(_0x1b3c96) {
            const _0x4f2fbb = _0x52e4cb;
            skipTo = undefined, $(this)[_0x4f2fbb(0x30c)]('[data-skip-to]')[_0x4f2fbb(0x31c)](_0x4f2fbb(0x1eb)) !== '' && (skipTo = $(this)[_0x4f2fbb(0x30c)](_0x4f2fbb(0x33d))[_0x4f2fbb(0x31c)](_0x4f2fbb(0x1eb))), $(this)[_0x4f2fbb(0x30c)](_0x4f2fbb(0x2ef))['attr'](_0x4f2fbb(0x2a5)) && (answer = $(this)[_0x4f2fbb(0x30c)]('[data-go-to]')[_0x4f2fbb(0x22d)]('data-go-to'), selections = selections[_0x4f2fbb(0x20c)](_0x2c50bf => _0x2c50bf[_0x4f2fbb(0x2a7)] !== x), console[_0x4f2fbb(0x2fc)](_0x4f2fbb(0x208), selections, x), selections[_0x4f2fbb(0x255)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4f2fbb(0x20c)](_0x1360b6 => _0x1360b6['step'] !== skipTo - 0x2), selections[_0x4f2fbb(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4f2fbb(0x2d4)](_0x558e84 => _0x558e84[_0x4f2fbb(0x2a7)] === x), selections[objIndex][_0x4f2fbb(0x254)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4f2fbb(0x2b2)] = x));
        });
    }
    $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x21b))['is'](_0x52e4cb(0x1ff)) && (selArr = [], $(steps)[_0x52e4cb(0x27a)](_0x52e4cb(0x1c7))[_0x52e4cb(0x20a)](function(_0xd13c48, _0x1e82bb) {
        const _0x5cec7d = _0x52e4cb;
        selArr[_0x5cec7d(0x255)]({ 'selected': $(this)[_0x5cec7d(0x31c)]('selected') });
    }), selString = [], selArr['forEach'](_0x5d4c1d => selString[_0x52e4cb(0x255)](_0x5d4c1d['selected'])), $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x265))[_0x52e4cb(0x20a)](function() {
        const _0x295d0f = _0x52e4cb;
        skipTo = undefined;
        if ($(this)[_0x295d0f(0x30c)](_0x295d0f(0x33d))[_0x295d0f(0x31c)](_0x295d0f(0x1eb))) skipTo = $(this)[_0x295d0f(0x30c)]('[data-skip-to]')[_0x295d0f(0x31c)](_0x295d0f(0x1eb));
        else $(this)['data'](_0x295d0f(0x1eb)) && (skipTo = $(this)['data'](_0x295d0f(0x1eb)));
        selections = selections[_0x295d0f(0x20c)](_0x37f2c3 => _0x37f2c3[_0x295d0f(0x2a7)] !== x);
        if ($(this)[_0x295d0f(0x31c)](_0x295d0f(0x1f2))) answer = $(this)[_0x295d0f(0x22d)](_0x295d0f(0x2a5)), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x295d0f(0x20c)](_0x35737e => _0x35737e[_0x295d0f(0x2a7)] !== skipTo - 0x2), selections[_0x295d0f(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x295d0f(0x2d4)](_0x56228c => _0x56228c[_0x295d0f(0x2a7)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x295d0f(0x2b2)] = x);
        else $(this)['parents'](_0x295d0f(0x2ef))[_0x295d0f(0x31c)]('go-to') && (answer = $(this)[_0x295d0f(0x30c)](_0x295d0f(0x2ef))[_0x295d0f(0x31c)]('go-to'), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x295d0f(0x20c)](_0xcc256d => _0xcc256d[_0x295d0f(0x2a7)] !== skipTo - 0x2), selections[_0x295d0f(0x255)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x295d0f(0x2d4)](_0x53f359 => _0x53f359['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
    }), logicExtra ? ($(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2ee))[_0x52e4cb(0x27a)](_0x52e4cb(0x1f8))[_0x52e4cb(0x31c)](_0x52e4cb(0x272)) === !![] || $(steps[x])[_0x52e4cb(0x27a)]('[data-answer][data-radio-skip]:visible')[_0x52e4cb(0x31c)](_0x52e4cb(0x272)) === !![]) && (skip && selections[_0x52e4cb(0x20c)](_0x2c92d1 => _0x2c92d1[_0x52e4cb(0x2a7)] === x)['length'] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2f7))[_0x52e4cb(0x31c)](_0x52e4cb(0x32e))))) : $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x1f8))[_0x52e4cb(0x31c)](_0x52e4cb(0x272)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x52e4cb(0x27a)](_0x52e4cb(0x2f7))['data'](_0x52e4cb(0x32e)))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x4b5842 = _0x51d5a3;
    $(_0x4b5842(0x1d3))[_0x4b5842(0x292)](), unfilledArr[_0x4b5842(0x239)] > 0x0 && unfilledArr['forEach'](function(_0x1bf37a) {
        const _0xd78661 = _0x4b5842;
        $(_0xd78661(0x281) + _0x1bf37a[_0xd78661(0x2a6)] + '\x22]')[_0xd78661(0x30a)]('[data-text=\x22error-message\x22]')['fadeIn'](), $(_0xd78661(0x281) + _0x1bf37a[_0xd78661(0x2a6)] + '\x22]')['parents']()[_0xd78661(0x244)](_0xd78661(0x1d3))[_0xd78661(0x284)](), $('textarea[name=\x22' + _0x1bf37a[_0xd78661(0x2a6)] + '\x22]')[_0xd78661(0x30a)](_0xd78661(0x1d3))[_0xd78661(0x284)](), $(_0xd78661(0x2f4) + _0x1bf37a['input'] + '\x22]')[_0xd78661(0x30a)](_0xd78661(0x1d3))[_0xd78661(0x284)]();
    });
}

function resetInputErrorMessage(_0x3466bd) {
    const _0x16569a = _0x51d5a3;
    $(_0x16569a(0x281) + _0x3466bd + '\x22]')[_0x16569a(0x30a)](_0x16569a(0x1d3))[_0x16569a(0x292)](), $(_0x16569a(0x281) + _0x3466bd + '\x22]')[_0x16569a(0x30c)]()['children'](_0x16569a(0x1d3))[_0x16569a(0x292)](), $(_0x16569a(0x214) + _0x3466bd + '\x22]')[_0x16569a(0x30a)](_0x16569a(0x1d3))[_0x16569a(0x292)](), $('select[name=\x22' + _0x3466bd + '\x22]')['siblings'](_0x16569a(0x1d3))['hide']();
}

function increaseCurstep() {
    const _0x50a1e3 = _0x51d5a3;
    countCard ? (curStep = curStep + 0x1, $(_0x50a1e3(0x259))[_0x50a1e3(0x266)](steps['length'])) : $(steps[x])[_0x50a1e3(0x31c)](_0x50a1e3(0x2d2)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $('[data-text=\x22current-step\x22]')['text'](curStep);
}

function decreaseCurstep() {
    const _0x180efb = _0x51d5a3;
    countCard ? (curStep = curStep - 0x1, $('[data-text=\x22total-steps\x22]')[_0x180efb(0x266)](steps[_0x180efb(0x239)])) : $(steps[x])[_0x180efb(0x31c)]('card') ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $(_0x180efb(0x2ba))[_0x180efb(0x266)](curStep);
}
$(_0x51d5a3(0x28b))['on'](_0x51d5a3(0x29d), function(_0x5b28cf) {
    const _0xc1313d = _0x51d5a3;
    $(this)[_0xc1313d(0x31c)]('redirect') && (redirectTo = $(this)['data'](_0xc1313d(0x23f)));
    !$(this)[_0xc1313d(0x31c)](_0xc1313d(0x243)) && (newTab = $(this)[_0xc1313d(0x31c)](_0xc1313d(0x243)));
    successCard = $(this)[_0xc1313d(0x31c)](_0xc1313d(0x207)), _0x5b28cf[_0xc1313d(0x347)](), _0x5b28cf[_0xc1313d(0x2e2)]();
    const _0x251db8 = new URLSearchParams(window[_0xc1313d(0x300)]['search']),
        _0x29b98e = (_0x428c49, _0x35647d) => {
            const _0x3a20a0 = _0xc1313d,
                _0x550c3d = document[_0x3a20a0(0x29b)](_0x3a20a0(0x33a) + _0x428c49 + '\x22]');
            _0x550c3d && (_0x550c3d[_0x3a20a0(0x2a3)] = _0x35647d);
        };
    _0x29b98e('referrer', _0x251db8[_0xc1313d(0x289)](_0xc1313d(0x1ee)) || document[_0xc1313d(0x1ee)] || _0xc1313d(0x25e)), _0x29b98e(_0xc1313d(0x1c8), navigator[_0xc1313d(0x1f0)]), _0x29b98e(_0xc1313d(0x2ca), new Date()[_0xc1313d(0x301)]()), _0x29b98e('time-zone', Intl[_0xc1313d(0x26a)]()[_0xc1313d(0x331)]()[_0xc1313d(0x2e8)]), _0x29b98e('screen-resolution', window['screen'][_0xc1313d(0x1c4)] + 'x' + window[_0xc1313d(0x23a)]['height']), _0x29b98e(_0xc1313d(0x215), _0xc1313d(0x1fe));
    const _0x4ecebe = () => {
        const _0x4fd867 = _0xc1313d,
            _0xa3fbd4 = document[_0x4fd867(0x29b)](_0x4fd867(0x276));
        if (_0xa3fbd4) {
            const _0xc4c7c0 = localStorage[_0x4fd867(0x227)](_0x4fd867(0x2c1));
            console['log'](_0xc4c7c0);
            if (_0xc4c7c0) {
                const _0x137d24 = Math['round']((Date[_0x4fd867(0x27d)]() - parseInt(_0xc4c7c0)) / 0x3e8);
                _0xa3fbd4[_0x4fd867(0x2a3)] = _0x137d24 + _0x4fd867(0x2c7);
            } else _0xa3fbd4[_0x4fd867(0x2a3)] = _0x4fd867(0x1fe);
        }
    };
    _0x4ecebe(), logicExtra && ($(this)[_0xc1313d(0x283)](_0xc1313d(0x1da), !![]), $(steps)['find'](_0xc1313d(0x1ca))[_0xc1313d(0x283)](_0xc1313d(0x1bf), ![])), localStorage[_0xc1313d(0x1e3)](_0xc1313d(0x1db)), localStorage[_0xc1313d(0x1e3)](_0xc1313d(0x2c1)), fill ? ($(this)[_0xc1313d(0x31c)]('wait') ? (console[_0xc1313d(0x2fc)]($(this)[_0xc1313d(0x31c)]('wait')), $(this)[_0xc1313d(0x266)]($(this)[_0xc1313d(0x31c)](_0xc1313d(0x33e)))) : $(this)[_0xc1313d(0x28e)](_0xc1313d(0x339))[_0xc1313d(0x266)](_0xc1313d(0x339)), $('[data-form=\x22multistep\x22]')[_0xc1313d(0x20e)](), $(_0xc1313d(0x2bc))[_0xc1313d(0x239)] > 0x0 && (grecaptcha[_0xc1313d(0x203)]()[_0xc1313d(0x239)] === 0x0 && (form[_0xc1313d(0x27a)](_0xc1313d(0x28b))[_0xc1313d(0x266)](oldSubmitText), form[_0xc1313d(0x27a)]('[data-form=\x22submit-btn\x22]')[_0xc1313d(0x28e)](oldSubmitText))), customError && $(_0xc1313d(0x1d3))['hide']()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x434de4 = _0x51d5a3;
    customError ? ($(_0x434de4(0x1d3))[_0x434de4(0x292)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps[_0x434de4(0x239)] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps['length'] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x17316e = _0x51d5a3;
    customError && $('[data-text=\x22error-message\x22]')[_0x17316e(0x292)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x17316e(0x329)](_0x17316e(0x306)), selections[_0x17316e(0x20c)](_0x43f940 => _0x43f940[_0x17316e(0x254)] === x)[_0x17316e(0x239)] > 0x0 ? x = parseInt(getSafe(() => selections[_0x17316e(0x20c)](_0x46cbb5 => _0x46cbb5[_0x17316e(0x254)] === x)[0x0]['backTo'])) : x--, updateStep()), ($(steps[x])[_0x17316e(0x27a)]('[data-radio-skip]:visible')[_0x17316e(0x31c)](_0x17316e(0x272)) === !![] || $(steps[x])[_0x17316e(0x27a)](_0x17316e(0x2ee))[_0x17316e(0x27a)](_0x17316e(0x1f8))[_0x17316e(0x31c)](_0x17316e(0x272)) === !![] || $(steps[x])['find'](_0x17316e(0x305))[_0x17316e(0x31c)](_0x17316e(0x272)) === !![]) && (all_data = all_data[_0x17316e(0x20c)](_0x30ad26 => _0x30ad26[_0x17316e(0x2b8)] !== $(steps[x])[_0x17316e(0x27a)]('input[type=\x22radio\x22]:checked')[_0x17316e(0x22d)]('name')), $(_0x17316e(0x1dd) + $(steps[x])[_0x17316e(0x27a)](_0x17316e(0x314))[_0x17316e(0x22d)](_0x17316e(0x294)) + '\x22]')[_0x17316e(0x292)](), $(steps[x])[_0x17316e(0x27a)](_0x17316e(0x2fe))[_0x17316e(0x283)](_0x17316e(0x210), ![]), $(steps[x])[_0x17316e(0x27a)](_0x17316e(0x2ed))[_0x17316e(0x329)](_0x17316e(0x238)), validation());
}
weightedSelectionRange && $(_0x51d5a3(0x29a))[_0x51d5a3(0x20a)](function() {
    const _0x388ab9 = _0x51d5a3;
    $(this)[_0x388ab9(0x2fd)]('<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>' + $(this)['data'](_0x388ab9(0x2aa)) + _0x388ab9(0x313));
});

function selectionQuiz() {
    const _0x7e4955 = _0x51d5a3;
    if ($(this)[_0x7e4955(0x27a)](_0x7e4955(0x277))) {
        $(_0x7e4955(0x29a))[_0x7e4955(0x292)](), $(_0x7e4955(0x1be))[_0x7e4955(0x292)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x7e4955(0x256)](function(_0x26f0d8) {
                const _0x4fb1b3 = _0x7e4955;
                selTotal = selTotal + _0x26f0d8[_0x4fb1b3(0x2dd)];
            }), $(_0x7e4955(0x237))[_0x7e4955(0x266)](selTotal);
            if ($(_0x7e4955(0x24b) + selTotal + '\x22]')[_0x7e4955(0x239)] > 0x0) $(_0x7e4955(0x24b) + selTotal + '\x22]')[_0x7e4955(0x284)]();
            else $(_0x7e4955(0x304) + selTotal + ')') ? $(_0x7e4955(0x304) + selTotal + ')')[_0x7e4955(0x1b6)](_0x7e4955(0x29a))['eq'](0x0)[_0x7e4955(0x251)]() : $(_0x7e4955(0x30f))[_0x7e4955(0x284)]();
        } else {
            let _0x268b6d = -0x1;
            $('[data-selection]')[_0x7e4955(0x20a)](function(_0x46cd96) {
                const _0x509a44 = _0x7e4955;
                $($(_0x509a44(0x29a))[_0x46cd96])[_0x509a44(0x31c)](_0x509a44(0x2aa))[_0x509a44(0x258)](selString[_0x509a44(0x274)]()) && (_0x268b6d = _0x46cd96);
            }), _0x268b6d > -0x1 ? $($(_0x7e4955(0x29a))[_0x268b6d])['fadeIn']() : $('[data-selection=\x22other\x22]')[_0x7e4955(0x284)]();
        }
    }
}

function triggerInputAllData() {
    const _0x52767e = _0x51d5a3;
    if (savedFilledInput && memory) savedFilledInput[_0x52767e(0x256)](_0x4f6cb4 => {
        const _0x2d7ee7 = _0x52767e;
        var _0x3c6351 = $(_0x2d7ee7(0x281) + _0x4f6cb4['inputName'] + _0x2d7ee7(0x220) + _0x4f6cb4[_0x2d7ee7(0x2a3)] + _0x2d7ee7(0x25c)),
            _0x3e11a4 = $('input[name=\x22' + _0x4f6cb4['inputName'] + _0x2d7ee7(0x25c)),
            _0x5b8458 = $(_0x2d7ee7(0x214) + _0x4f6cb4[_0x2d7ee7(0x28c)] + _0x2d7ee7(0x25c)),
            _0x2a0193 = $(_0x2d7ee7(0x21a) + _0x4f6cb4[_0x2d7ee7(0x28c)] + '\x22]'),
            _0x1abe21 = $(_0x2d7ee7(0x2b6) + _0x4f6cb4[_0x2d7ee7(0x28c)] + _0x2d7ee7(0x220) + _0x4f6cb4[_0x2d7ee7(0x2a3)] + _0x2d7ee7(0x25c));
        if (_0x3c6351[_0x2d7ee7(0x22d)](_0x2d7ee7(0x2df)) !== _0x2d7ee7(0x252)) {
            if (_0x3c6351[_0x2d7ee7(0x22d)](_0x2d7ee7(0x2df)) === _0x2d7ee7(0x2bf) && !_0x3c6351[_0x2d7ee7(0x30c)](_0x2d7ee7(0x2b1))['data'](_0x2d7ee7(0x272))) _0x3c6351['click'](), _0x3c6351[_0x2d7ee7(0x30a)](_0x2d7ee7(0x2a2))[_0x2d7ee7(0x1f3)]('w--redirected-checked'), _0x3c6351[_0x2d7ee7(0x1cb)](_0x2d7ee7(0x2a6));
            else _0x4f6cb4[_0x2d7ee7(0x2a3)] === 'on' ? (_0x3e11a4[_0x2d7ee7(0x29d)](), _0x3e11a4['siblings']('.w-checkbox-input')[_0x2d7ee7(0x1f3)]('w--redirected-checked'), _0x3e11a4[_0x2d7ee7(0x1cb)](_0x2d7ee7(0x2a6))) : (_0x3e11a4['val'](_0x4f6cb4['value']), _0x5b8458[_0x2d7ee7(0x28e)](_0x4f6cb4[_0x2d7ee7(0x2a3)]), $('select:not([data-prefill=\x22false\x22])')['find'](_0x2d7ee7(0x201) + _0x4f6cb4[_0x2d7ee7(0x2a3)] + '\x22]')['prop'](_0x2d7ee7(0x2dd), !![]), _0x3e11a4[_0x2d7ee7(0x1cb)](_0x2d7ee7(0x2a6)), _0x3e11a4['trigger']('change'));
            const _0x58a887 = _0x1abe21['data'](_0x2d7ee7(0x216)),
                _0x2c4e1c = _0x2a0193[_0x2d7ee7(0x31c)](_0x2d7ee7(0x216));
            _0x1abe21['parent']()[_0x2d7ee7(0x1f3)](_0x58a887), _0x2a0193[_0x2d7ee7(0x1b6)]()[_0x2d7ee7(0x1f3)](_0x2c4e1c);
        }
    });
    else _params && (getParams(), searchQ[_0x52767e(0x256)](_0x52b0d5 => {
        const _0x670939 = _0x52767e;
        if ($(_0x670939(0x281) + _0x52b0d5['inputName'] + _0x670939(0x220) + _0x52b0d5['value'] + _0x670939(0x25c))[_0x670939(0x22d)](_0x670939(0x2df)) !== _0x670939(0x252)) {
            if ($(_0x670939(0x281) + _0x52b0d5[_0x670939(0x2dc)] + _0x670939(0x220) + _0x52b0d5[_0x670939(0x28e)] + _0x670939(0x25c))[_0x670939(0x22d)](_0x670939(0x2df)) === _0x670939(0x2bf)) $(_0x670939(0x281) + _0x52b0d5['key'] + _0x670939(0x220) + _0x52b0d5[_0x670939(0x28e)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x670939(0x29d)](), $('input[name=\x22' + _0x52b0d5['key'] + _0x670939(0x220) + _0x52b0d5[_0x670939(0x28e)] + _0x670939(0x25c))[_0x670939(0x30a)](_0x670939(0x2a2))['addClass'](_0x670939(0x238)), $(_0x670939(0x281) + _0x52b0d5[_0x670939(0x2dc)] + _0x670939(0x220) + _0x52b0d5[_0x670939(0x28e)] + _0x670939(0x25c))[_0x670939(0x1cb)](_0x670939(0x2a6));
            else _0x52b0d5[_0x670939(0x28e)] === 'on' ? ($(_0x670939(0x281) + _0x52b0d5[_0x670939(0x2dc)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x670939(0x29d)](), $(_0x670939(0x281) + _0x52b0d5[_0x670939(0x2dc)] + _0x670939(0x25c))['siblings']('.w-checkbox-input')[_0x670939(0x1f3)]('w--redirected-checked'), $(_0x670939(0x281) + _0x52b0d5[_0x670939(0x2dc)] + '\x22]')[_0x670939(0x1cb)]('input')) : ($(_0x670939(0x281) + _0x52b0d5[_0x670939(0x2dc)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x670939(0x28e)](_0x52b0d5[_0x670939(0x28e)]), $(_0x670939(0x214) + _0x52b0d5[_0x670939(0x2dc)] + _0x670939(0x25c))[_0x670939(0x28e)](_0x52b0d5[_0x670939(0x28e)]), $('select[name=\x22' + _0x52b0d5[_0x670939(0x2dc)] + _0x670939(0x25c))[_0x670939(0x27a)](_0x670939(0x201) + _0x52b0d5[_0x670939(0x28e)] + '\x22]')[_0x670939(0x283)]('selected', !![]), $(_0x670939(0x281) + _0x52b0d5[_0x670939(0x2dc)] + _0x670939(0x25c))[_0x670939(0x1cb)](_0x670939(0x2a6)), $('input[name=\x22' + _0x52b0d5[_0x670939(0x2dc)] + _0x670939(0x25c))[_0x670939(0x1cb)](_0x670939(0x268)));
        }
    }));
}
$(_0x51d5a3(0x322))['on'](_0x51d5a3(0x29d), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x51d5a3(0x1e4))['on'](_0x51d5a3(0x29d), function() { next = ![], back = !![], backStep(); }), $(steps)[_0x51d5a3(0x27a)](':input')['not'](_0x51d5a3(0x336))['on'](_0x51d5a3(0x2a6), function(_0x12984e) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x51d5a3(0x27a)](_0x51d5a3(0x2fe))['on'](_0x51d5a3(0x29d), function() { skip = !![], validation(), addClickClass(); });
$(_0x51d5a3(0x1dc))[_0x51d5a3(0x31c)](_0x51d5a3(0x2bd)) ? $(_0x51d5a3(0x1de))[_0x51d5a3(0x329)](_0x51d5a3(0x2e1)) : $(_0x51d5a3(0x1de))['addClass']('disabled');

function clickableIndicator() {
    const _0x42c3ad = _0x51d5a3;
    $(_0x42c3ad(0x1e6))[_0x42c3ad(0x31c)](_0x42c3ad(0x1fd)) && ($(_0x42c3ad(0x295))[_0x42c3ad(0x329)](_0x42c3ad(0x306)), $(_0x42c3ad(0x1e6))[_0x42c3ad(0x31c)](_0x42c3ad(0x2bd)) ? (x = $(this)[_0x42c3ad(0x34f)](), updateStep()) : $(this)[_0x42c3ad(0x34f)]() <= progress && (x = $(this)[_0x42c3ad(0x34f)](), updateStep())), $('[data-text=\x22current-step\x22]')['text'](x + 0x1);
}
$(_0x51d5a3(0x1de))['on'](_0x51d5a3(0x29d), clickableIndicator);
$(_0x51d5a3(0x26b))['data'](_0x51d5a3(0x24e)) && ($(_0x51d5a3(0x2ef))[_0x51d5a3(0x20a)](function() {
    const _0x1c5211 = _0x51d5a3;
    $(this)['append'](_0x1c5211(0x27b), $(this)[_0x1c5211(0x31c)](_0x1c5211(0x1f2)));
}), $('[data-answer]')[_0x51d5a3(0x20a)](function() {
    const _0x2a19cb = _0x51d5a3;
    $(this)[_0x2a19cb(0x2fd)]('<br>Data\x20Answer\x20=\x20', $(this)['data'](_0x2a19cb(0x1d0)));
}));

function resetFormly() {
    const _0x26bea5 = _0x51d5a3;
    $(_0x26bea5(0x26b))[_0x26bea5(0x1cb)](_0x26bea5(0x1c6)), $('[data-form=\x22multistep\x22]')['parents']()[_0x26bea5(0x27a)](_0x26bea5(0x2d5))[_0x26bea5(0x292)](), x = 0x0, updateStep(), $(_0x26bea5(0x26b))[_0x26bea5(0x251)](), $(_0x26bea5(0x28b))[_0x26bea5(0x266)](oldSubmitText), $(_0x26bea5(0x28b))[_0x26bea5(0x28e)](oldSubmitText), $(_0x26bea5(0x2ba))[_0x26bea5(0x266)](0x1), $(_0x26bea5(0x26b))[_0x26bea5(0x27a)](_0x26bea5(0x226))[_0x26bea5(0x30a)](_0x26bea5(0x32c))[_0x26bea5(0x329)](_0x26bea5(0x238));
}
$(document)[_0x51d5a3(0x34b)](function(_0x2ca36d, _0x350185, _0x2addca) {
    const _0x360f30 = _0x51d5a3;
    if (_0x2addca['url'][_0x360f30(0x258)](_0x360f30(0x1ba))) {
        const _0x3ad24d = _0x350185[_0x360f30(0x1d1)] === 0xc8,
            _0x1d3437 = _0x360f30(0x2b5);
        redirectTo && _0x3ad24d && (newTab ? window['open'](redirectTo, _0x360f30(0x315)) : setTimeout(() => {
            const _0x15ebb8 = _0x360f30;
            location[_0x15ebb8(0x31e)] = redirectTo;
        }, redirectDelay)), _0x3ad24d && successCard !== '' && $(_0x360f30(0x296) + successCard + '\x22]')['fadeIn'](), _0x3ad24d && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x3ad24d && ($(_0x360f30(0x28b))[_0x360f30(0x28e)](_0x360f30(0x339)), $(_0x360f30(0x28b))[_0x360f30(0x266)]('Please\x20wait...'));
    }
}), $('[data-btn=\x22edit\x22]')['on'](_0x51d5a3(0x29d), function() {
    const _0x183cf0 = _0x51d5a3;
    var _0xf24364 = $(this)[_0x183cf0(0x1b6)]()[_0x183cf0(0x27a)](_0x183cf0(0x33f))[_0x183cf0(0x31c)](_0x183cf0(0x320));
    setTimeout(function() {
        const _0x26ccd5 = _0x183cf0;
        $(_0x26ccd5(0x281) + _0xf24364 + '\x22]')[_0x26ccd5(0x288)]();
    }, 0x64), back = !![], x = $(this)[_0x183cf0(0x31c)](_0x183cf0(0x222)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(_0x183cf0(0x259))[_0x183cf0(0x266)](steps[_0x183cf0(0x239)])) : $(steps[x])[_0x183cf0(0x31c)]('card') ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x183cf0(0x2ba))[_0x183cf0(0x266)](curStep), back = ![];
}), $(_0x51d5a3(0x253))['on'](_0x51d5a3(0x29d), function() {
    const _0x46a056 = _0x51d5a3;
    $(_0x46a056(0x26b))[_0x46a056(0x1cb)](_0x46a056(0x1c6));
    let _0x30c5bb = $(this);
    $(this)['text'](_0x46a056(0x339)), setTimeout(function() {
        const _0x28bbd3 = _0x46a056;
        $(_0x30c5bb)['text'](oldResetText), $(_0x30c5bb)[_0x28bbd3(0x30c)]('.w-form-done')[_0x28bbd3(0x292)](), x = 0x0, updateStep(), $(_0x28bbd3(0x26b))[_0x28bbd3(0x251)](), $('[data-form=\x22submit-btn\x22]')[_0x28bbd3(0x266)](oldSubmitText), $(_0x28bbd3(0x28b))['val'](oldSubmitText), $(_0x30c5bb)['val'](oldSubmitText), $(_0x28bbd3(0x2ba))[_0x28bbd3(0x266)](0x1), $('[data-form=\x22multistep\x22]')[_0x28bbd3(0x27a)](_0x28bbd3(0x226))['siblings'](_0x28bbd3(0x32c))[_0x28bbd3(0x329)](_0x28bbd3(0x238));
    }, resetDelay);
}), $(_0x51d5a3(0x23b))['on'](_0x51d5a3(0x299), function(_0xafde29) {
    const _0x287c97 = _0x51d5a3;
    if (_0xafde29[_0x287c97(0x1c9)] === 0xd) {
        _0xafde29[_0x287c97(0x347)](), _0xafde29[_0x287c97(0x2e2)]();
        if ($(steps[x])[_0x287c97(0x27a)](_0x287c97(0x2e5))['is'](_0x287c97(0x247))) $(steps[x])[_0x287c97(0x27a)]('textarea:focus')[_0x287c97(0x28e)]($(steps[x])[_0x287c97(0x27a)](_0x287c97(0x2ff))['val']() + '\x0a');
        else $(_0x287c97(0x32b))[_0x287c97(0x31c)](_0x287c97(0x234)) && fill && (totalSteps > curStep && $(_0x287c97(0x322))[0x0][_0x287c97(0x29d)]());
    }
}), $(_0x51d5a3(0x23b))['keydown'](function(_0x3da95f) {
    const _0x5e6ffc = _0x51d5a3;
    (_0x3da95f[_0x5e6ffc(0x2b0)] || _0x3da95f[_0x5e6ffc(0x24a)]) && _0x3da95f[_0x5e6ffc(0x1c9)] == 0xd && (x >= steps[_0x5e6ffc(0x239)] - 0x1 && fill ? $(steps[x])[_0x5e6ffc(0x27a)](_0x5e6ffc(0x263))['click']() : (_0x3da95f[_0x5e6ffc(0x347)](), _0x3da95f[_0x5e6ffc(0x2e2)]()));
}), $(_0x51d5a3(0x26b))[_0x51d5a3(0x27a)](_0x51d5a3(0x1ca))['on'](_0x51d5a3(0x268), function() {
    const _0x17cea1 = _0x51d5a3;
    all_data = all_data[_0x17cea1(0x20c)](_0x5cde01 => _0x5cde01[_0x17cea1(0x2b8)] !== $(this)[_0x17cea1(0x22d)]('name')), $(this)[_0x17cea1(0x22d)](_0x17cea1(0x2df)) === _0x17cea1(0x2d7) ? $(this)['is'](_0x17cea1(0x1ff)) ? all_data['push']({ 'field': $(this)[_0x17cea1(0x22d)](_0x17cea1(0x294)), 'value': $(this)[_0x17cea1(0x30a)](_0x17cea1(0x345))['text']() }) : $(_0x17cea1(0x1dd) + $(this)[_0x17cea1(0x22d)]('name') + '\x22]')['hide']() : (all_data[_0x17cea1(0x255)]({ 'field': $(this)[_0x17cea1(0x22d)](_0x17cea1(0x294)), 'value': $(this)[_0x17cea1(0x28e)]() }), $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x17cea1(0x22d)]('name'))), all_data[_0x17cea1(0x256)](function(_0x222a3d) {
        const _0x53b155 = _0x17cea1;
        $(_0x53b155(0x1dd) + _0x222a3d[_0x53b155(0x2b8)] + '\x22]')[_0x53b155(0x251)](), $(_0x53b155(0x1dd) + _0x222a3d[_0x53b155(0x2b8)] + '\x22]')['text'](_0x222a3d['value']);
    });
}), $(_0x51d5a3(0x26b))[_0x51d5a3(0x27a)](_0x51d5a3(0x2e5))['on']('change', function() {
    const _0x598ee0 = _0x51d5a3;
    $(this)[_0x598ee0(0x28e)]() !== '' && resetInputErrorMessage($(this)[_0x598ee0(0x22d)]('name')), all_data = all_data[_0x598ee0(0x20c)](_0x5a6736 => _0x5a6736['field'] !== $(this)[_0x598ee0(0x22d)](_0x598ee0(0x294))), all_data[_0x598ee0(0x255)]({ 'field': $(this)['attr'](_0x598ee0(0x294)), 'value': $(this)[_0x598ee0(0x28e)]() }), all_data['forEach'](function(_0x2c509c) {
        const _0x3b4109 = _0x598ee0;
        $(_0x3b4109(0x1dd) + _0x2c509c[_0x3b4109(0x2b8)] + '\x22]')[_0x3b4109(0x251)](), $(_0x3b4109(0x1dd) + _0x2c509c['field'] + '\x22]')[_0x3b4109(0x266)](_0x2c509c[_0x3b4109(0x2a3)]);
    });
}), $(_0x51d5a3(0x26b))[_0x51d5a3(0x27a)](_0x51d5a3(0x2d8))['on']('change', function() {
    const _0x20e556 = _0x51d5a3;
    $(this)[_0x20e556(0x28e)]() !== '' && resetInputErrorMessage($(this)[_0x20e556(0x22d)](_0x20e556(0x294)));
    var _0x239f41 = $(this)[_0x20e556(0x31c)](_0x20e556(0x346));
    all_data = all_data[_0x20e556(0x20c)](_0x25ab07 => _0x25ab07['field'] !== $(this)['attr']('name')), all_data[_0x20e556(0x255)]({ 'field': $(this)['attr']('name'), 'value': _0x239f41 ? $(this)[_0x20e556(0x27a)](_0x20e556(0x317))['text']() : $(this)['val']() }), all_data[_0x20e556(0x256)](function(_0x2adc82) {
        const _0xcf9ccd = _0x20e556;
        $(_0xcf9ccd(0x1dd) + _0x2adc82[_0xcf9ccd(0x2b8)] + '\x22]')[_0xcf9ccd(0x251)](), $(_0xcf9ccd(0x1dd) + _0x2adc82[_0xcf9ccd(0x2b8)] + '\x22]')['text'](_0x2adc82['value']);
    });
}), updateStep(), triggerInputAllData(), $(_0x51d5a3(0x2b3))[_0x51d5a3(0x20a)](function() {
    const _0x596248 = _0x51d5a3,
        _0x32d05d = $(this)[_0x596248(0x27a)](_0x596248(0x303)),
        _0xda4bf3 = [];
    _0x32d05d[_0x596248(0x20a)](function() {
        const _0x36290b = _0x596248;
        _0xda4bf3[_0x36290b(0x255)]($(this)['text']()['trim']());
    });
    const _0x150e28 = $(this)[_0x596248(0x30a)](_0x596248(0x2c0));
    $[_0x596248(0x20a)](_0xda4bf3, function(_0x558e95, _0x307965) {
        const _0x85b1 = _0x596248,
            _0x1990ab = $(_0x85b1(0x330))[_0x85b1(0x28e)](_0x307965)['text'](_0x307965);
        _0x150e28[_0x85b1(0x2fd)](_0x1990ab);
    });
});

function cloneRemove() {
    $('[data-clone-wrapper]')['each'](function() {
        const _0x4359af = _0x52e6;
        $(this)['find']('[data-clone]')[_0x4359af(0x239)] < 0x2 ? $(this)[_0x4359af(0x27a)]('[data-form=\x22remove-clone\x22]')['hide']() : $(this)[_0x4359af(0x27a)]('[data-form=\x22remove-clone\x22]')[_0x4359af(0x251)]();
    });
}

function cloneRemoveInput() {
    const _0x1b0287 = _0x51d5a3;
    $('[data-clone-input-wrapper]')[_0x1b0287(0x20a)](function() {
        const _0x259868 = _0x1b0287;
        console[_0x259868(0x2fc)]($(this)['find'](_0x259868(0x1b8))[_0x259868(0x239)]), $(this)[_0x259868(0x27a)](_0x259868(0x1b8))[_0x259868(0x239)] < 0x2 ? $(this)[_0x259868(0x27a)](_0x259868(0x2a0))['hide']() : $(this)[_0x259868(0x27a)](_0x259868(0x2a0))[_0x259868(0x251)]();
    });
}

function _0x52e6(_0x4aa947, _0x55c53f) { const _0x136f03 = _0x136f(); return _0x52e6 = function(_0x52e64c, _0x104f26) { _0x52e64c = _0x52e64c - 0x1b6; let _0x27e0ed = _0x136f03[_0x52e64c]; return _0x27e0ed; }, _0x52e6(_0x4aa947, _0x55c53f); }
$(_0x51d5a3(0x282))['on'](_0x51d5a3(0x29d), function() {
    const _0xbbfb1b = _0x51d5a3,
        _0x55b453 = $(this)[_0xbbfb1b(0x30c)]('[data-clone]')[_0xbbfb1b(0x239)] > 0x0 ? $(this)[_0xbbfb1b(0x30c)](_0xbbfb1b(0x1c2))[_0xbbfb1b(0x34f)]() : $(this)[_0xbbfb1b(0x30c)](_0xbbfb1b(0x264))['index'](),
        _0x50aa13 = $(this)[_0xbbfb1b(0x30c)](_0xbbfb1b(0x1c2))['length'] > 0x0 ? $(this)['parents']('[data-clone]')[_0xbbfb1b(0x31c)](_0xbbfb1b(0x311)) : $(this)[_0xbbfb1b(0x30c)]('[data-display]')[_0xbbfb1b(0x31c)](_0xbbfb1b(0x27c));
    $(_0xbbfb1b(0x218) + _0x50aa13 + '\x22]')['eq'](_0x55b453)[_0xbbfb1b(0x23d)](), $(_0xbbfb1b(0x20d) + _0x50aa13 + '\x22]')['eq'](_0x55b453)[_0xbbfb1b(0x23d)](), cloneRemove();
    let _0x42b227 = $(_0xbbfb1b(0x337) + _0x50aa13 + '\x22]')[_0xbbfb1b(0x31c)](_0xbbfb1b(0x1bd)),
        _0x4ab461 = $('[data-clone=\x22' + _0x50aa13 + '\x22]')[_0xbbfb1b(0x239)];
    console[_0xbbfb1b(0x2fc)](_0x4ab461, _0x42b227), _0x4ab461 < _0x42b227 && (console[_0xbbfb1b(0x2fc)](_0xbbfb1b(0x251)), $('[data-add-new=\x22' + _0x50aa13 + '\x22]')[_0xbbfb1b(0x251)]()), validation();
}), $(_0x51d5a3(0x2a0))['on'](_0x51d5a3(0x29d), function() {
    const _0x32c39d = _0x51d5a3;
    let _0x5a5e33 = $(this)[_0x32c39d(0x30a)]()[_0x32c39d(0x22d)]('name'),
        _0x195455 = $(this)[_0x32c39d(0x30c)](_0x32c39d(0x1b8))[_0x32c39d(0x31c)](_0x32c39d(0x1d7));
    $(this)[_0x32c39d(0x1b6)]('[data-clone-input]')[_0x32c39d(0x23d)](), $(_0x32c39d(0x1dd) + _0x5a5e33 + '\x22]')['parent']('[data-display-input]')[_0x32c39d(0x23d)]();
    let _0x94f86c = $(_0x32c39d(0x34e) + _0x195455 + '\x22]')['data'](_0x32c39d(0x1ed)),
        _0x215d4f = $(_0x32c39d(0x200) + _0x195455 + '\x22]')[_0x32c39d(0x239)];
    _0x215d4f < _0x94f86c && $(_0x32c39d(0x34e) + _0x195455 + '\x22]')['show'](), validation();
}), $(_0x51d5a3(0x240))['on']('click', function() {
    const _0x521aca = _0x51d5a3;
    let _0x408a69 = $(this)[_0x521aca(0x31c)]('add-new'),
        _0x1c683e = $(this)[_0x521aca(0x31c)]('add-new-limit');
    var _0x5bb213 = $('[data-clone=\x22' + _0x408a69 + '\x22]')['eq'](0x0)[_0x521aca(0x311)](!![]),
        _0x2fd1a3 = $(_0x521aca(0x20d) + _0x408a69 + '\x22]')['eq'](0x0)[_0x521aca(0x311)](!![]);
    let _0x2c8d61 = '';
    $(this)[_0x521aca(0x27a)](_0x521aca(0x282))[_0x521aca(0x251)](), cloneRemove(), _0x5bb213['find']('[data-clone-input]')[_0x521aca(0x27a)](_0x521aca(0x2a6))[_0x521aca(0x28e)](''), _0x5bb213[_0x521aca(0x27a)](_0x521aca(0x1b8))[_0x521aca(0x27a)](_0x521aca(0x2d8))[_0x521aca(0x28e)](''), _0x5bb213[_0x521aca(0x27a)](_0x521aca(0x1b8))[_0x521aca(0x27a)](_0x521aca(0x2e5))[_0x521aca(0x28e)](''), _0x5bb213['find'](_0x521aca(0x1b8))[_0x521aca(0x27e)](':first')[_0x521aca(0x23d)](), _0x5bb213[_0x521aca(0x27a)](_0x521aca(0x1b8))[_0x521aca(0x27a)](_0x521aca(0x269))['click'](), _0x2fd1a3[_0x521aca(0x27a)](_0x521aca(0x302))[_0x521aca(0x27e)](_0x521aca(0x1e2))[_0x521aca(0x23d)](), _0x5bb213[_0x521aca(0x27a)](_0x521aca(0x2a6))[_0x521aca(0x20a)](function() {
        const _0x4502cf = _0x521aca;
        if ($(this)[_0x4502cf(0x342)](_0x4502cf(0x1b8))[_0x4502cf(0x239)] > 0x0) {
            let _0x5060fe = 0x0;
            const _0x48230c = $(this)[_0x4502cf(0x342)](_0x4502cf(0x1b8))[_0x4502cf(0x31c)](_0x4502cf(0x1d7));
            $(_0x4502cf(0x200) + _0x48230c + _0x4502cf(0x26e))[_0x4502cf(0x20a)](function() {
                const _0x25932b = _0x4502cf,
                    _0x45c7f5 = $(this)[_0x25932b(0x22d)](_0x25932b(0x294));
                if (_0x45c7f5 && _0x45c7f5[_0x25932b(0x1f1)](_0x25932b(0x27f))) { const _0x268319 = parseInt(_0x45c7f5[_0x25932b(0x298)]('-')[0x1]);!isNaN(_0x268319) && _0x268319 > _0x5060fe && (_0x5060fe = _0x268319); }
            }), _0x5060fe++, _0x2c8d61 = this[_0x4502cf(0x294)] + '-' + _0x5060fe;
        } else _0x2c8d61 = this['name'] + '-' + (parseInt($(_0x4502cf(0x218) + _0x408a69 + '\x22]')[_0x4502cf(0x312)]()[_0x4502cf(0x34f)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x4502cf(0x22d)](_0x4502cf(0x294), _0x2c8d61), $(this)[_0x4502cf(0x22d)](_0x4502cf(0x2da), _0x2c8d61);
    }), _0x5bb213[_0x521aca(0x27a)](_0x521aca(0x2e5))[_0x521aca(0x20a)](function() {
        const _0x5a0f43 = _0x521aca;
        if ($(this)[_0x5a0f43(0x342)](_0x5a0f43(0x1b8))[_0x5a0f43(0x239)] > 0x0) {
            let _0x39e8ff = 0x0;
            const _0x698922 = $(this)[_0x5a0f43(0x342)](_0x5a0f43(0x1b8))[_0x5a0f43(0x31c)](_0x5a0f43(0x1d7));
            $(_0x5a0f43(0x200) + _0x698922 + _0x5a0f43(0x286))[_0x5a0f43(0x20a)](function() {
                const _0x37fd17 = _0x5a0f43,
                    _0x1fb400 = $(this)[_0x37fd17(0x22d)](_0x37fd17(0x294));
                if (_0x1fb400 && _0x1fb400['startsWith'](_0x37fd17(0x27f))) { const _0x5db718 = parseInt(_0x1fb400[_0x37fd17(0x298)]('-')[0x1]);!isNaN(_0x5db718) && _0x5db718 > _0x39e8ff && (_0x39e8ff = _0x5db718); }
            }), _0x39e8ff++, _0x2c8d61 = this[_0x5a0f43(0x294)] + '-' + _0x39e8ff;
        } else _0x2c8d61 = this[_0x5a0f43(0x294)] + '-' + (parseInt($('[data-clone=\x22' + _0x408a69 + '\x22]')['last']()['index']()) + 0x1);
        $(this)[_0x5a0f43(0x28e)](''), $(this)[_0x5a0f43(0x22d)]('name', _0x2c8d61), $(this)[_0x5a0f43(0x22d)](_0x5a0f43(0x2da), _0x2c8d61);
    }), _0x5bb213[_0x521aca(0x27a)](_0x521aca(0x2d8))[_0x521aca(0x20a)](function() {
        const _0x15d252 = _0x521aca;
        if ($(this)[_0x15d252(0x342)](_0x15d252(0x1b8))[_0x15d252(0x239)] > 0x0) {
            let _0x26eced = 0x0;
            const _0x4a3508 = $(this)[_0x15d252(0x342)](_0x15d252(0x1b8))[_0x15d252(0x31c)](_0x15d252(0x1d7));
            $(_0x15d252(0x200) + _0x4a3508 + _0x15d252(0x1f5))[_0x15d252(0x20a)](function() {
                const _0x3cfb0f = _0x15d252,
                    _0x1a00c4 = $(this)[_0x3cfb0f(0x22d)]('name');
                if (_0x1a00c4 && _0x1a00c4[_0x3cfb0f(0x1f1)]('relationship-')) { const _0x1e5f55 = parseInt(_0x1a00c4[_0x3cfb0f(0x298)]('-')[0x1]);!isNaN(_0x1e5f55) && _0x1e5f55 > _0x26eced && (_0x26eced = _0x1e5f55); }
            }), _0x26eced++, _0x2c8d61 = this[_0x15d252(0x294)] + '-' + _0x26eced;
        } else _0x2c8d61 = this[_0x15d252(0x294)] + '-' + (parseInt($(_0x15d252(0x218) + _0x408a69 + '\x22]')[_0x15d252(0x312)]()[_0x15d252(0x34f)]()) + 0x1);
        $(this)['val'](''), $(this)[_0x15d252(0x22d)](_0x15d252(0x294), _0x2c8d61), $(this)[_0x15d252(0x22d)]('data-name', _0x2c8d61);
    }), _0x2fd1a3[_0x521aca(0x27a)](_0x521aca(0x33f))[_0x521aca(0x20a)](function() {
        const _0x5619bb = _0x521aca;
        if ($(this)[_0x5619bb(0x31c)]('input-field')) {
            let _0x5302d6 = 0x0;
            const _0x1490ca = $(this)[_0x5619bb(0x31c)]('input-field')[_0x5619bb(0x298)]('-')[0x0];
            $(_0x5619bb(0x20d) + _0x408a69 + _0x5619bb(0x223) + _0x1490ca + '\x22]')[_0x5619bb(0x20a)](function() {
                const _0x16bb90 = _0x5619bb,
                    _0x3dc0e5 = $(this)['attr'](_0x16bb90(0x2c8)),
                    _0x376a4a = parseInt(_0x3dc0e5[_0x16bb90(0x298)]('-')[0x1]);
                !isNaN(_0x376a4a) && _0x376a4a > _0x5302d6 && (_0x5302d6 = _0x376a4a);
            }), _0x5302d6++;
            const _0x4f55e1 = _0x1490ca + '-' + _0x5302d6;
            $(this)[_0x5619bb(0x22d)](_0x5619bb(0x2c8), _0x4f55e1);
        }
    }), $(_0x521aca(0x316) + _0x408a69 + '\x22]')['append'](_0x5bb213), $(_0x521aca(0x2b7) + _0x408a69 + '\x22]')[_0x521aca(0x2fd)](_0x2fd1a3), $(_0x521aca(0x1b9) + _0x408a69 + '\x22]')['each'](function() {
        const _0x2adaa6 = _0x521aca;
        $(this)[_0x2adaa6(0x266)]($(this)[_0x2adaa6(0x30c)](_0x2adaa6(0x218) + _0x408a69 + '\x22]')[_0x2adaa6(0x34f)]() + 0x1);
    }), $(_0x521aca(0x1cf) + _0x408a69 + '\x22]')[_0x521aca(0x20a)](function() {
        const _0x10455a = _0x521aca;
        $(this)['text']($(this)[_0x10455a(0x30c)](_0x10455a(0x20d) + _0x408a69 + '\x22]')[_0x10455a(0x34f)]() + 0x1);
    });
    let _0x3b24b5 = $('[data-clone-wrapper=\x22' + _0x408a69 + '\x22]\x20[data-clone=\x22' + _0x408a69 + '\x22]')['length'];
    if (_0x3b24b5 >= _0x1c683e) { $(this)[_0x521aca(0x292)](); return; }
    $(this)[_0x521aca(0x251)](), validation();
}), $(_0x51d5a3(0x250))['on'](_0x51d5a3(0x29d), function() {
    const _0x139d8b = _0x51d5a3,
        _0xc424a3 = $(this)[_0x139d8b(0x30c)](_0x139d8b(0x1c2))[_0x139d8b(0x34f)]();
    let _0x5d3535 = $(this)[_0x139d8b(0x31c)](_0x139d8b(0x1e8));
    var _0x412781 = $(_0x139d8b(0x200) + _0x5d3535 + '\x22]')['eq'](0x0)[_0x139d8b(0x311)](!![]),
        _0x11d37a = $(_0x139d8b(0x32a) + _0x5d3535 + '\x22]')['eq'](0x0)[_0x139d8b(0x311)](!![]);
    let _0x159d62 = $(this)[_0x139d8b(0x31c)]('add-new-input-limit'),
        _0x20fc7d = 0x0;
    $(_0x139d8b(0x200) + _0x5d3535 + _0x139d8b(0x26e))[_0x139d8b(0x20a)](function() {
        const _0x12bf5a = _0x139d8b,
            _0x29ce29 = $(this)[_0x12bf5a(0x22d)](_0x12bf5a(0x294));
        if (_0x29ce29) { const _0x1a80de = parseInt(_0x29ce29[_0x12bf5a(0x298)]('-')[0x1]);!isNaN(_0x1a80de) && _0x1a80de > _0x20fc7d && (_0x20fc7d = _0x1a80de); }
    }), $('[data-clone-input=\x22' + _0x5d3535 + '\x22]\x20select')[_0x139d8b(0x20a)](function() {
        const _0x466d13 = _0x139d8b,
            _0x3e9096 = $(this)[_0x466d13(0x22d)]('name');
        if (_0x3e9096) { const _0x353553 = parseInt(_0x3e9096[_0x466d13(0x298)]('-')[0x1]);!isNaN(_0x353553) && _0x353553 > _0x20fc7d && (_0x20fc7d = _0x353553); }
    }), $(_0x139d8b(0x200) + _0x5d3535 + _0x139d8b(0x286))['each'](function() {
        const _0x50367c = _0x139d8b,
            _0xf74b = $(this)[_0x50367c(0x22d)](_0x50367c(0x294));
        if (_0xf74b) { const _0x5a0526 = parseInt(_0xf74b['split']('-')[0x1]);!isNaN(_0x5a0526) && _0x5a0526 > _0x20fc7d && (_0x20fc7d = _0x5a0526); }
    }), _0x20fc7d++, _0x412781[_0x139d8b(0x27a)](_0x139d8b(0x2a6))[_0x139d8b(0x20a)](function() {
        const _0x522301 = _0x139d8b,
            _0x5477d0 = $(this)[_0x522301(0x22d)](_0x522301(0x294));
        let _0x82b6f = _0x5477d0 + '-' + _0x20fc7d;
        $(this)['val'](''), $(this)[_0x522301(0x22d)](_0x522301(0x294), _0x82b6f), $(this)[_0x522301(0x22d)](_0x522301(0x2da), _0x82b6f);
    }), _0x412781[_0x139d8b(0x27a)](_0x139d8b(0x2d8))[_0x139d8b(0x20a)](function() {
        const _0xb26992 = _0x139d8b,
            _0x4ea819 = $(this)[_0xb26992(0x22d)]('name');
        let _0x464246 = _0x4ea819 + '-' + _0x20fc7d;
        $(this)['val'](''), $(this)[_0xb26992(0x22d)](_0xb26992(0x294), _0x464246), $(this)['attr'](_0xb26992(0x2da), _0x464246);
    }), _0x412781['find']('textarea')[_0x139d8b(0x20a)](function() {
        const _0x119aae = _0x139d8b,
            _0x3d634d = $(this)[_0x119aae(0x22d)](_0x119aae(0x294));
        let _0x5bc12b = _0x3d634d + '-' + _0x20fc7d;
        $(this)[_0x119aae(0x28e)](''), $(this)[_0x119aae(0x22d)]('name', _0x5bc12b), $(this)[_0x119aae(0x22d)](_0x119aae(0x2da), _0x5bc12b);
    }), _0x11d37a[_0x139d8b(0x27a)](_0x139d8b(0x33f))[_0x139d8b(0x20a)](function() {
        const _0x30b5c6 = _0x139d8b;
        $(this)[_0x30b5c6(0x22d)](_0x30b5c6(0x2c8), _0x30b5c6(0x27f) + _0x20fc7d);
    }), $(this)[_0x139d8b(0x30a)](_0x139d8b(0x257) + _0x5d3535 + '\x22]')[_0x139d8b(0x2fd)](_0x412781), $(_0x139d8b(0x264))['eq'](_0xc424a3)[_0x139d8b(0x27a)](_0x139d8b(0x270) + _0x5d3535 + '\x22]')[_0x139d8b(0x2fd)](_0x11d37a), $(_0x139d8b(0x1c1) + _0x5d3535 + '\x22]')['each'](function() {
        const _0x4f907b = _0x139d8b;
        $(this)[_0x4f907b(0x266)]($(this)[_0x4f907b(0x30c)](_0x4f907b(0x200) + _0x5d3535 + '\x22]')[_0x4f907b(0x34f)]() + 0x1);
    }), $('[data-display-input-index=\x22' + _0x5d3535 + '\x22]')[_0x139d8b(0x20a)](function() {
        const _0x2f53cf = _0x139d8b;
        $(this)[_0x2f53cf(0x266)]($(this)[_0x2f53cf(0x30c)](_0x2f53cf(0x32a) + _0x5d3535 + '\x22]')[_0x2f53cf(0x34f)]() + 0x1);
    });
    let _0x2dccee = $(_0x139d8b(0x257) + _0x5d3535 + _0x139d8b(0x2c5) + _0x5d3535 + '\x22]')[_0x139d8b(0x239)];
    if (_0x2dccee >= _0x159d62) { $(this)[_0x139d8b(0x292)](); return; }
    $(this)[_0x139d8b(0x251)](), cloneRemoveInput(), validation();
}), $(_0x51d5a3(0x229))['on'](_0x51d5a3(0x29d), function() {
    const _0x374979 = _0x51d5a3,
        _0x1235ad = $(this)[_0x374979(0x31c)]('remove-upload');
    $(_0x374979(0x281) + _0x1235ad + '\x22]')[_0x374979(0x28e)](''), validation();
});

function andLogic() {
    const _0x32555a = _0x51d5a3;
    conditionalResult && (steps['eq'](x)['find'](_0x32555a(0x31b))[_0x32555a(0x292)](), steps['eq'](x)['find'](_0x32555a(0x31b))[_0x32555a(0x20a)](function() {
        const _0x34b52b = _0x32555a;

        function _0x5d8add(_0x464132) {
            const _0x30fbbe = _0x52e6,
                _0x2dcc9a = _0x464132[_0x30fbbe(0x298)]('&'),
                _0xd7ea7b = [];
            return _0x2dcc9a[_0x30fbbe(0x256)](_0x581c3c => {
                const _0x34f956 = _0x30fbbe,
                    [_0x4277ea, _0x34ce79] = _0x581c3c[_0x34f956(0x298)]('=');
                _0xd7ea7b[_0x34f956(0x255)]({ 'field': _0x4277ea, 'value': _0x34ce79 });
            }), _0xd7ea7b;
        }
        const _0x3b1174 = $(this)[_0x34b52b(0x22d)](_0x34b52b(0x32f)),
            _0x27cce1 = _0x5d8add(_0x3b1174);

        function _0x255f05(_0x45be6b, _0x314386) { const _0x18608f = _0x34b52b; return _0x314386[_0x18608f(0x2db)]((_0x3145c6, _0x133408) => { const _0x8a2e2e = _0x18608f; if (_0x45be6b[0x0] && _0x3145c6[_0x8a2e2e(0x2b8)] === _0x45be6b[0x0][_0x8a2e2e(0x2b8)]) return _0x45be6b[_0x8a2e2e(0x267)]((_0x2563e9, _0x3750de) => _0x314386[_0x133408 + _0x3750de] && _0x314386[_0x133408 + _0x3750de][_0x8a2e2e(0x2b8)] === _0x2563e9[_0x8a2e2e(0x2b8)] && _0x314386[_0x133408 + _0x3750de]['value'] === _0x2563e9[_0x8a2e2e(0x2a3)]); return ![]; }); }
        const _0x4d50a3 = _0x255f05(_0x27cce1, all_data);
        _0x4d50a3 ? $(this)['show']() : $(this)[_0x34b52b(0x292)]();
    }));
}
$(_0x51d5a3(0x291))[_0x51d5a3(0x1f3)](_0x51d5a3(0x292)), $('[data-input-reveal]')['on'](_0x51d5a3(0x2a6), function() {
    const _0x56f86a = _0x51d5a3,
        _0x977d43 = $(this)[_0x56f86a(0x31c)]('input-reveal'),
        _0x13b472 = $(this)[_0x56f86a(0x28e)](),
        _0xd8dee0 = $(_0x56f86a(0x308) + _0x977d43 + '\x22]')['data'](_0x56f86a(0x29e));
    let _0x19e1c0 = $('[data-input-target=\x22' + _0x977d43 + _0x56f86a(0x31d))[_0x56f86a(0x20c)](function() {
            const _0x410a6e = _0x56f86a,
                _0x5722ba = $(this)[_0x410a6e(0x31c)](_0x410a6e(0x29e));
            return typeof _0x5722ba === _0x410a6e(0x1e5) && _0x5722ba['toLowerCase']() === _0x13b472['toLowerCase']();
        }),
        _0x3ca254 = $(_0x56f86a(0x308) + _0x977d43 + _0x56f86a(0x2a1));
    $(_0x56f86a(0x308) + _0x977d43 + '\x22]')[_0x56f86a(0x1f3)](_0x56f86a(0x22f)), $(_0x56f86a(0x308) + _0x977d43 + '\x22]')[_0x56f86a(0x329)](_0x56f86a(0x2fa));
    _0x13b472 !== '' && (typeof _0xd8dee0 === _0x56f86a(0x1e5) && _0xd8dee0[_0x56f86a(0x248)]() === '*' && _0x13b472 !== '' ? (_0x3ca254[_0x56f86a(0x329)](_0x56f86a(0x22f)), _0x3ca254[_0x56f86a(0x1f3)](_0x56f86a(0x2fa))) : (_0x19e1c0[_0x56f86a(0x329)]('f-hide'), _0x19e1c0['addClass']('f-show')));

    function _0x3d9cbb(_0x2cbe1f) {
        const _0x340651 = _0x56f86a;
        _0x2cbe1f && ($(_0x340651(0x287) + _0x2cbe1f + '\x22]')['val']() !== '' && $(_0x340651(0x287) + _0x2cbe1f + '\x22]')['trigger'](_0x340651(0x2a6)));
    }
    let _0x3f4d92 = $(_0x56f86a(0x308) + _0x977d43 + '\x22]')['find'](_0x56f86a(0x30b))[_0x56f86a(0x31c)](_0x56f86a(0x1ef));
    _0x3d9cbb(_0x3f4d92), $(_0x56f86a(0x2eb))['each'](function() {
        const _0x3c3691 = _0x56f86a,
            _0x172d2c = $(this)['data']('input-reveal');
        $(_0x3c3691(0x308) + _0x172d2c + '\x22]')[_0x3c3691(0x329)](_0x3c3691(0x2fa)), $(_0x3c3691(0x308) + _0x172d2c + '\x22]')['addClass']('f-hide');
    });
});

function addClickClass() {
    const _0x21845b = _0x51d5a3,
        _0x1d5b59 = $(this)[_0x21845b(0x31c)](_0x21845b(0x216)),
        _0x525d54 = $(this)[_0x21845b(0x22d)](_0x21845b(0x294));
    $(_0x21845b(0x281) + _0x525d54 + '\x22]')['parent']()['removeClass'](_0x1d5b59), $(this)['is'](':checked') && $(this)[_0x21845b(0x1b6)]()[_0x21845b(0x1f3)](_0x1d5b59);
}
$(_0x51d5a3(0x1d4))['on'](_0x51d5a3(0x268), addClickClass);

function updateCounter(_0xbfd874) {
    const _0x243513 = _0x51d5a3;
    var _0x1c285f = new Date(),
        _0x5eb917 = _0x1c285f['getMonth'](),
        _0x5c7806 = btoa('counter'),
        _0x5dc786 = btoa(_0x5eb917['toString']()),
        _0x4871c0 = getCookie(_0x5c7806);
    !_0x4871c0 || _0x4871c0 !== _0x5dc786 ? $['post'](_0x243513(0x28d), function() {
        const _0x3136e2 = _0x243513;
        console[_0x3136e2(0x2fc)](_0x3136e2(0x2ea)), document[_0x3136e2(0x2c6)] = _0x5c7806 + '=' + _0x5dc786;
    })[_0x243513(0x25a)](function(_0x25f425, _0x525e93, _0x397819) {
        const _0x3faaaa = _0x243513;
        console[_0x3faaaa(0x1e7)](_0x3faaaa(0x335), _0x397819);
    }) : console[_0x243513(0x2fc)]('Counter\x20already\x20updated\x20for\x20this\x20month.');
}

function getCookie(_0x4eee09) { const _0x88ef83 = _0x51d5a3; var _0x44b6a0 = null; if (document[_0x88ef83(0x2c6)] && document[_0x88ef83(0x2c6)] !== '') { var _0x1b7451 = document['cookie'][_0x88ef83(0x298)](';'); for (var _0x166706 = 0x0; _0x166706 < _0x1b7451[_0x88ef83(0x239)]; _0x166706++) { var _0x4d0865 = _0x1b7451[_0x166706][_0x88ef83(0x343)](); if (_0x4d0865[_0x88ef83(0x1c0)](0x0, _0x4eee09['length'] + 0x1) === _0x4eee09 + '=') { _0x44b6a0 = decodeURIComponent(_0x4d0865[_0x88ef83(0x1c0)](_0x4eee09[_0x88ef83(0x239)] + 0x1)); break; } } } return _0x44b6a0; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x51d5a3(0x300)][_0x51d5a3(0x2a8)]),
    formlySupportParam = formlyUrlParams[_0x51d5a3(0x289)](_0x51d5a3(0x2d3)),
    showButton = formlySupportParam === _0x51d5a3(0x261),
    passIcon = _0x51d5a3(0x236),
    failIcon = _0x51d5a3(0x1b7);
let isScriptLoaded = !![],
    scriptLocation = _0x51d5a3(0x33b),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x51d5a3(0x21c) : _0x51d5a3(0x278),
    resultStatus = _0x51d5a3(0x22e),
    scriptSrcAdded = '';

function isElementPresent(_0x4cdd13, _0x560a07) { const _0x4f568c = _0x51d5a3; return document[_0x4f568c(0x29b)]('[' + _0x560a07 + '=\x22' + _0x4cdd13 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent('multistep', 'data-form');
const multistepForm = document[_0x51d5a3(0x29b)](_0x51d5a3(0x262)),
    formStepLength = multistepForm[_0x51d5a3(0x280)](_0x51d5a3(0x1f4))[_0x51d5a3(0x239)];
isMultistepOnFormElement = multistepForm !== null;

function _0x136f() {
    const _0x2be380 = ['<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20', 'formlyLastStepAnswer', 'select[required]:visible', '[data-display-index=\x22', 'answer', 'status', 'textarea[autofocus]', '[data-text=\x22error-message\x22]', '[data-click-addclass]', 'stringify', 'count-card', 'clone-input', '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a', 'AND', 'novalidate', 'filledInput', '[data-clickable-all]', '[data-input-field=\x22', '[data-form=\x22custom-progress-indicator\x22]', 'custom-error-message', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20', 'phone-autoformat', ':first', 'removeItem', '[data-form=\x22back-btn\x22]', 'string', '[data-clickable]', 'error', 'add-new-input', ':input[type=\x22url\x22]', 'Inside\x20<head>\x20tag', 'skip-to', 'createElement', 'add-new-input-limit', 'referrer', 'input-reveal', 'userAgent', 'startsWith', 'go-to', 'addClass', '[data-form=\x22step\x22]', '\x22]\x20select', '[data-enter=\x22true\x22]', ':input[type=\x22text\x22][required]', '[data-radio-skip]:visible', 'top', '437886sPjFbu', ':input[type=\x22checkbox\x22]', '[data-answer=\x22', 'clickable', 'N/A', ':checked', '[data-clone-input=\x22', 'option[value=\x22', '[data-weighted-selection]', 'getResponse', '[data-query-param]', 'searchParams', 'init', 'success', 'selections\x20email', ':input[type=\x22tel\x22]', 'each', '151888ewvLbg', 'filter', '[data-display=\x22', 'submit', '[data-submit=\x22true\x22]', 'checked', '[data-callback=\x22recaptcha\x22]', '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', '476dHZFLr', 'textarea[name=\x22', 'click-path', 'click-addclass', ':input[type=\x22password\x22][required]', '[data-clone=\x22', ':input[type=\x22checkbox\x22][required]', 'input[type=\x22checkbox\x22][name=\x22', ':input[type=\x22radio\x22]', 'FormlyLogic\x20enabled', '[data-form-ms=\x22submit-btn\x22]', 'max-checkbox', 'input[type=\x22text\x22][required]:visible', '\x22][value=\x22', '12px', 'edit-step', '\x22]\x20[data-input-field^=\x22', 'submit-show', 'input[type=\x22email\x22]:visible', 'input:checkbox', 'getItem', '654668ReJMKr', '[data-remove-upload]', 'none', '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', '90uVEabG', 'attr', 'PASS', 'f-hide', 'logic-extra', 'select-multiple', '[data-radio-skip=\x22true\x22]', 'formly', 'enter', 'input:radio[required]', '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>', '[data-text=\x22total-weight\x22]', 'w--redirected-checked', 'length', 'screen', 'body', 'reinit', 'remove', '240WzsSzL', 'redirect', '[data-add-new]', '[data-max-checkbox]', 'innerHTML', 'new-tab', 'children', ':input[type=\x22file\x22][required]', 'select[required]', ':focus', 'toLowerCase', '162rwbsxd', 'ctrlKey', '[data-selection=\x22', 'getElementById', 'scroll-top', 'debug-mode', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[data-add-new-input]', 'show', 'file', '[data-btn=\x22reset\x22]', 'skipTo', 'push', 'forEach', '[data-clone-input-wrapper=\x22', 'includes', '[data-text=\x22total-steps\x22]', 'fail', 'input[type=\x22checkbox\x22]:not(:checked)', '\x22]:not([data-prefill=\x22false\x22])', 'dispatchEvent', 'Direct', 'padding', 'tagName', 'true', 'form[data-form=\x22multistep\x22]', '[data-form=\x22submit-btn\x22]:visible', '[data-display]', ':input[type=\x27radio\x27]:checked', 'text', 'every', 'change', '[aria-label=\x22Remove\x20file\x22]', 'DateTimeFormat', '[data-form=\x22multistep\x22]', 'auto', ':input[type=\x22email\x22]', '\x22]\x20input', ':input[type=\x22email\x22][required]', '[data-display-input-wrapper=\x22', '[data-success-card]', 'radio-skip', 'block-domain', 'join', '1160JjejeG', '[data-hidden-input=\x22page-visit-duration\x22]', '[data-btn=\x22check\x22]', 'Basic\x20(No\x20Formly\x20Logic)', 'quiz', 'find', '<br>Data\x20Go\x20To\x20=\x20', 'display', 'now', 'not', 'relationship-', 'querySelectorAll', 'input[name=\x22', '[data-form=\x22remove-clone\x22]', 'prop', 'fadeIn', 'weighted-selection', '\x22]\x20textarea', '[data-input-reveal=\x22', 'focus', 'get', 'animate', '[data-form=\x22submit-btn\x22]', 'inputName', 'https://videsigns-staging.co.uk/counter', 'val', 'reset-delay', 'textarea[required]', '[data-input-target]', 'hide', '[data-redirect-delay]', 'name', '[data-form=\x22progress-indicator\x22]', '[data-success-card=\x22', 'setItem', 'split', 'keypress', '[data-selection]', 'querySelector', '0.4', 'click', 'input-reveal-value', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '[data-form=\x22remove-input-clone\x22]', '\x22][data-input-reveal-value=\x22*\x22]', '.w-radio-input', 'value', ':input[type=\x22checkbox\x22]:checked', 'data-go-to', 'input', 'step', 'search', 'button', 'selection', '[data-count-card]', 'slice', 'style', ':input[type=\x22text\x22]', 'script[src=\x22', 'metaKey', '[data-radio-skip]', 'backTo', '[data-cms-select=cms]', '241615BUTqzA', 'redirect-form-hehexd', 'input[type=\x22radio\x22][name=\x22', '[data-display-wrapper=\x22', 'field', 'first', '[data-text=\x22current-step\x22]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20', 'div.g-recaptcha', 'clickable-all', '[data-weighted-selection-range]', 'radio', '[data-cms-select=input]', 'pageLoadTime', 'ix2', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button', 'f-mySidenav', '\x22]\x20[data-clone-input=\x22', 'cookie', '\x20seconds', 'data-input-field', 'BODY', 'timestamp', 'destroy', '20784GSUQkZ', '[data-quiz]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'css', 'slow', 'input[type=\x22checkbox\x22]', 'card', 'formly-support', 'findIndex', '.w-form-done', 'input:radio[name=\x22', 'checkbox', 'select', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', 'data-name', 'some', 'key', 'selected', ':input[type=\x22date\x22]', 'type', 'html,\x20body', 'disabled', 'stopPropagation', 'data-radio-delay', 'min-character', 'textarea', ':input[type=\x22url\x22][required]', '[data-form=\x22next-btn\x22][data-submit-show]', 'timeZone', '0px', 'Counter\x20updated\x20successfully.', '[data-input-reveal]:not(:visible)', 'label', '.w-form-formradioinput', '.active-answer-card', '[data-go-to]', 'parse', ':input[required]', '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20', '</strong>', 'select[name=\x22', '[required]', 'memory', '[data-radio-delay]', 'redirect-delay', '[data-form=\x22step\x22][data-card]', 'f-show', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20', 'log', 'append', 'input[type=\x22radio\x22]', 'textarea:focus', 'location', 'toISOString', '[data-display-input]', '[data-cms-select=text]', '[data-range]:contains(', '[data-answer][data-radio-skip]:visible', 'current', 'toString', '[data-input-target=\x22', '[data-form=\x22progress\x22]', 'siblings', '[data-input-reveal]', 'parents', ':input[type=\x22number\x22]', '[data-reinit]', '[data-selection=\x22other\x22]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20', 'clone', 'last', '</div>', 'input[type=\x22radio\x22]:checked', '_blank', '[data-clone-wrapper=\x22', 'option[value=\x22$(this).val()\x22]', 'replace', ':input[type=\x22date\x22][required]', 'active-answer-card', '[data-show-if]', 'data', '\x22][data-input-reveal-value]', 'href', 'videsigns', 'input-field', '1703976GFfjci', '[data-form=\x22next-btn\x22]', ':input[type=\x22number\x22][required]', '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'test', 'Webflow', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', '\x22]:checked', 'removeClass', '[data-display-input=\x22', '[data-enter]', '.w-checkbox-input', 'textarea[required]:visible', 'radio-delay', 'data-show-if', '<option>', 'resolvedOptions', '[data-select-multiple]', 'input[type=\x22checkbox\x22]:visible', '[data-reset-delay]', 'Failed\x20to\x20update\x20counter:', '[type=\x22radio\x22]', '[data-add-new=\x22', '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', 'Please\x20wait...', '[data-hidden-input=\x22', 'head', '[data-checkbox]', '[data-skip-to]', 'wait', '[data-input-field]', 'data-radio-skip', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', 'closest', 'trim', 'input[type=\x22submit\x22]', 'span', 'ms-field', 'preventDefault', 'formlyLastStep', 'appendChild', 'form[data-form=\x22multistep\x22]\x20:input', 'ajaxComplete', ':input[type=\x22time\x22][required]', '[type=\x22submit\x22]', '[data-add-new-input=\x22', 'index', 'getElementsByTagName', 'weighted-selection-range', '[data-last-step]', 'script', ':input[type=\x22tel\x22][required]', 'require', 'parent', '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>', '[data-clone-input]', '[data-index=\x22', 'https://webflow.com/api/v1/form/', '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20', 'add-new-limit', '[data-selection-weight]', 'required', 'substring', '[data-input-index=\x22', '[data-clone]', ':input[type=\x22time\x22]', 'width', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', 'reset', '[data-selected]:checked', 'user-agent', 'keyCode', ':input', 'trigger'];
    _0x136f = function() { return _0x2be380; };
    return _0x136f();
}
const multistepContainer = document['querySelector'](_0x51d5a3(0x26b)),
    nextBtnExist = multistepContainer['querySelector'](_0x51d5a3(0x322)),
    backBtnExist = multistepContainer[_0x51d5a3(0x29b)](_0x51d5a3(0x1e4)),
    submitBtnExist = multistepContainer[_0x51d5a3(0x29b)](_0x51d5a3(0x28b));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist['tagName'][_0x51d5a3(0x248)]() === _0x51d5a3(0x2a6), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist['tagName'][_0x51d5a3(0x248)]() === _0x51d5a3(0x2a6) && submitBtnExist[_0x51d5a3(0x2df)]['toLowerCase']() === _0x51d5a3(0x20e), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x51d5a3(0x260)][_0x51d5a3(0x248)]() === 'input';
const checkPowerup = _0x5918d3 => document[_0x51d5a3(0x29b)](_0x5918d3) !== null,
    progressBarAttr = checkPowerup(_0x51d5a3(0x309)),
    progressIndicatorAttr = checkPowerup(_0x51d5a3(0x295)),
    customProgressAttr = checkPowerup(_0x51d5a3(0x295)),
    cardDivAttr = checkPowerup('[data-card=\x22true\x22]'),
    currentStepAttr = checkPowerup(_0x51d5a3(0x2ba)),
    totalStepAttr = checkPowerup(_0x51d5a3(0x259)),
    enterAttr = checkPowerup(_0x51d5a3(0x1f6)),
    submitAttr = checkPowerup(_0x51d5a3(0x20f)),
    radioSkipAttr = checkPowerup(_0x51d5a3(0x232)),
    customCheckboxAttr = checkPowerup(_0x51d5a3(0x33c)),
    recapatchaAttr = checkPowerup(_0x51d5a3(0x211));
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = 'FAIL');

function isScriptUrlMatch(_0x1ec96f, _0x5b72fd) { const _0x3ca3cf = _0x51d5a3; for (var _0x3cbe76 = 0x0; _0x3cbe76 < _0x5b72fd[_0x3ca3cf(0x239)]; _0x3cbe76++) { if (_0x1ec96f[_0x3ca3cf(0x258)](_0x5b72fd[_0x3cbe76])) return !![]; } return ![]; }
var keywordsToCheck = [_0x51d5a3(0x31f), _0x51d5a3(0x233)],
    scripts = document[_0x51d5a3(0x350)](_0x51d5a3(0x353)),
    matchedScripts = [];
for (var i = 0x0; i < scripts['length']; i++) {
    var scriptSrcs = scripts[i]['src'];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x51d5a3(0x255)](scriptSrcs);
}
if (matchedScripts[_0x51d5a3(0x239)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x51d5a3(0x29b)](_0x51d5a3(0x2af) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script['parentNode']['tagName'] === _0x51d5a3(0x2c9) ? 'Before\x20&lt;/body&gt;\x20tag' : _0x51d5a3(0x1ea));
} else scriptSrcAdded = _0x51d5a3(0x2d9) + failIcon;
const newElement = document[_0x51d5a3(0x1ec)]('div'),
    newStyle = document[_0x51d5a3(0x1ec)]('style');
newStyle[_0x51d5a3(0x242)] = _0x51d5a3(0x1bb), document[_0x51d5a3(0x33b)][_0x51d5a3(0x349)](newStyle);
showButton && document[_0x51d5a3(0x23b)][_0x51d5a3(0x349)](newElement);
newElement[_0x51d5a3(0x242)] = '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' + formType + _0x51d5a3(0x1c5) + scriptSrcAdded + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>' + scriptLocation + _0x51d5a3(0x2fb) + (isMultistepOnFormElement ? passIcon : failIcon) + _0x51d5a3(0x24f) + (formStepLength > 0x0 ? passIcon : failIcon) + '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20' + formStepLength + _0x51d5a3(0x310) + (nextBtnExist ? passIcon : failIcon) + _0x51d5a3(0x1e0) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x51d5a3(0x2bb) + (backBtnExist ? passIcon : failIcon) + _0x51d5a3(0x2c3) + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x51d5a3(0x1bc) + (backBtnExist ? passIcon : failIcon) + _0x51d5a3(0x2ce) + (isSubmitBtnOnSubmit ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (progressBarAttr && progressIndicatorAttr ? _0x51d5a3(0x1cc) + passIcon + '</strong>' : '') + _0x51d5a3(0x29f) + (customProgressAttr ? _0x51d5a3(0x338) + passIcon + _0x51d5a3(0x2f3) : '') + _0x51d5a3(0x29f) + (cardDivAttr ? _0x51d5a3(0x2f2) + passIcon + _0x51d5a3(0x2f3) : '') + _0x51d5a3(0x29f) + (currentStepAttr ? _0x51d5a3(0x22b) + passIcon + _0x51d5a3(0x2f3) : '') + _0x51d5a3(0x29f) + (totalStepAttr ? _0x51d5a3(0x212) + passIcon + '</strong>' : '') + _0x51d5a3(0x29f) + (enterAttr ? '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20' + passIcon + _0x51d5a3(0x2f3) : '') + _0x51d5a3(0x29f) + (submitAttr ? '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20' + passIcon + _0x51d5a3(0x2f3) : '') + _0x51d5a3(0x29f) + (radioSkipAttr ? '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20' + passIcon + '</strong>' : '') + _0x51d5a3(0x29f) + (customCheckboxAttr ? '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20' + passIcon + _0x51d5a3(0x2f3) : '') + _0x51d5a3(0x29f) + (recapatchaAttr ? _0x51d5a3(0x341) + passIcon + _0x51d5a3(0x2f3) : '') + _0x51d5a3(0x1d8);

function openNav() {
    const _0x3e5cc9 = _0x51d5a3;
    document[_0x3e5cc9(0x24c)](_0x3e5cc9(0x2c4))[_0x3e5cc9(0x2ad)][_0x3e5cc9(0x1c4)] = '35%', document[_0x3e5cc9(0x24c)](_0x3e5cc9(0x2c4))[_0x3e5cc9(0x2ad)][_0x3e5cc9(0x25f)] = _0x3e5cc9(0x221);
}

function closeNav() {
    const _0x466dd2 = _0x51d5a3;
    document[_0x466dd2(0x24c)]('f-mySidenav')[_0x466dd2(0x2ad)]['width'] = '0', document['getElementById'](_0x466dd2(0x2c4))[_0x466dd2(0x2ad)][_0x466dd2(0x25f)] = _0x466dd2(0x2e9);
}