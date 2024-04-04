// 4/4/24
// Feature update
// 1. Counter update new endpoint url

const _0x5652de = _0x35f4;
(function(_0x2d1f0d, _0x3253fa) {
    const _0x4f28c6 = _0x35f4,
        _0x4f336f = _0x2d1f0d();
    while (!![]) {
        try {
            const _0x5b49fb = -parseInt(_0x4f28c6(0x2b8)) / 0x1 * (parseInt(_0x4f28c6(0x18e)) / 0x2) + -parseInt(_0x4f28c6(0x290)) / 0x3 + -parseInt(_0x4f28c6(0x204)) / 0x4 + -parseInt(_0x4f28c6(0x18c)) / 0x5 * (parseInt(_0x4f28c6(0x2bc)) / 0x6) + -parseInt(_0x4f28c6(0x201)) / 0x7 * (parseInt(_0x4f28c6(0x1ef)) / 0x8) + parseInt(_0x4f28c6(0x1b8)) / 0x9 * (parseInt(_0x4f28c6(0x186)) / 0xa) + parseInt(_0x4f28c6(0x248)) / 0xb * (parseInt(_0x4f28c6(0x2b6)) / 0xc);
            if (_0x5b49fb === _0x3253fa) break;
            else _0x4f336f['push'](_0x4f336f['shift']());
        } catch (_0x5bbb20) { _0x4f336f['push'](_0x4f336f['shift']()); }
    }
}(_0x2499, 0xa5a56));
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
let steps = $(_0x5652de(0x2c5)),
    progressbarClone = $(_0x5652de(0x1ca))[_0x5652de(0x2ba)](),
    progressbar, weightedSelection = $(_0x5652de(0x281))['data'](_0x5652de(0x276)),
    weightedSelectionRange = $(_0x5652de(0x2a6))[_0x5652de(0x2cf)](_0x5652de(0x267)),
    selectMultiple = $(_0x5652de(0x1a0))[_0x5652de(0x2cf)](_0x5652de(0x1c9)),
    customError = $(_0x5652de(0x217))[_0x5652de(0x2cf)](_0x5652de(0x2d4)),
    reinitIX = $(_0x5652de(0x19b))['data'](_0x5652de(0x179)),
    memory = $(_0x5652de(0x1ab))[_0x5652de(0x2cf)]('memory'),
    quiz = $('[data-quiz]')['data'](_0x5652de(0x233));
const urlFormly = new URL(window[_0x5652de(0x1fe)][_0x5652de(0x158)]);
let _params = $(_0x5652de(0x28a))[_0x5652de(0x2cf)]('query-param'),
    logicExtra = $(_0x5652de(0x2c7))[_0x5652de(0x2cf)](_0x5652de(0x1aa)),
    oldSubmitText = $('[data-form=\x22submit-btn\x22]')[_0x5652de(0x230)](),
    oldResetText = $('[data-btn=\x22reset\x22]')[_0x5652de(0x20b)](),
    formReset = $(_0x5652de(0x2c7))[_0x5652de(0x2cf)]('reset'),
    resetDelay = $(_0x5652de(0x294))[_0x5652de(0x2cf)](_0x5652de(0x2a9)) ? $(_0x5652de(0x294))[_0x5652de(0x2cf)](_0x5652de(0x2a9)) : 0x7d0,
    redirectDelay = $('[data-redirect-delay]')[_0x5652de(0x2cf)](_0x5652de(0x227)) ? $(_0x5652de(0x1b5))[_0x5652de(0x2cf)](_0x5652de(0x227)) : 0x64,
    phoneFormat = $(_0x5652de(0x2c7))['data'](_0x5652de(0x1fd)),
    scrollToTop = $('[data-form=\x22multistep\x22]')[_0x5652de(0x2cf)](_0x5652de(0x280)),
    trackLastStep = $(_0x5652de(0x1af))['data'](_0x5652de(0x252)),
    conditionalResult = $(_0x5652de(0x2b2))[_0x5652de(0x2cf)](_0x5652de(0x1fb)) === _0x5652de(0x170),
    scrollTopOffset = parseInt($(_0x5652de(0x2c7))[_0x5652de(0x2cf)](_0x5652de(0x269)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON[_0x5652de(0x214)](localStorage[_0x5652de(0x21c)]('filledInput')), formlyLastStep = JSON[_0x5652de(0x214)](localStorage[_0x5652de(0x21c)](_0x5652de(0x298))), formlyLastStepAnswer = JSON[_0x5652de(0x214)](localStorage[_0x5652de(0x21c)]('formlyLastStepAnswer'));
let paramUrl = $('[data-form=\x22multistep\x22]')[_0x5652de(0x2cf)](_0x5652de(0x23a));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections = formlyLastStepAnswer));

function _0x35f4(_0x166be9, _0x1dfdad) { const _0x249955 = _0x2499(); return _0x35f4 = function(_0x35f4a8, _0x3235c6) { _0x35f4a8 = _0x35f4a8 - 0x142; let _0x369f73 = _0x249955[_0x35f4a8]; return _0x369f73; }, _0x35f4(_0x166be9, _0x1dfdad); }
$('[data-clone]')[_0x5652de(0x1a4)](function() {
    const _0x528f3d = _0x5652de;
    ogCloneArr['push']({ 'name': $(this)['data']('clone'), 'element': $(this)['clone'](!![]), 'display': $('[data-display=\x22' + $(this)[_0x528f3d(0x2cf)]('clone') + '\x22]')['eq'](0x0)[_0x528f3d(0x2ba)](!![]) });
});
const setPageLoadTime = () => {
    const _0x568635 = _0x5652de;
    localStorage[_0x568635(0x1e0)](_0x568635(0x2c4), Date[_0x568635(0x21a)]()['toString']());
};
setPageLoadTime();
$(_0x5652de(0x1ae))['length'] > 0x0 && (notRobot = ![]);

function recaptcha(_0x1d3fea) { notRobot = !![]; }($(steps[x])[_0x5652de(0x2cf)](_0x5652de(0x1f8)) || $(steps[x])[_0x5652de(0x1e9)](_0x5652de(0x195))[_0x5652de(0x2cf)](_0x5652de(0x1f8))) && (next = !![]);
$(_0x5652de(0x17d))[_0x5652de(0x1e6)] > 0x0 && (countCard = $(_0x5652de(0x17d))[_0x5652de(0x2cf)](_0x5652de(0x15f)));
$('[data-text=\x22error-message\x22]')[_0x5652de(0x211)](), $(progressbarClone)['removeClass'](_0x5652de(0x1a3)), $(_0x5652de(0x1b0))[_0x5652de(0x2ce)]()['remove'](), $('[data-form=\x22submit-btn\x22]')[_0x5652de(0x211)](), $(_0x5652de(0x2a4))[_0x5652de(0x211)](), steps[_0x5652de(0x1a4)](function() {
    const _0x2307fe = _0x5652de;
    $(_0x2307fe(0x1b0))['append'](progressbarClone[_0x2307fe(0x2ba)](!![], !![]));
}), $('[data-input-field]')[_0x5652de(0x211)]();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x5652de(0x1e6)], $(_0x5652de(0x29e))[_0x5652de(0x20b)](totalSteps)) : ($(steps[x])[_0x5652de(0x2cf)](_0x5652de(0x1f8)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, totalSteps = $(_0x5652de(0x2c1))[_0x5652de(0x1e6)], $(_0x5652de(0x29e))['text'](totalSteps), $('[data-form=\x22step\x22][data-card]')[_0x5652de(0x1a4)](function() {
    const _0x2a5c26 = _0x5652de;
    $($('[data-form=\x22progress-indicator\x22]')[$(this)[_0x2a5c26(0x183)]()])[_0x2a5c26(0x211)]();
}));
progressbar = $('[data-form=\x22progress\x22]')[_0x5652de(0x2ce)](), $(_0x5652de(0x1ca))['on'](_0x5652de(0x243), clickableIndicator), $(_0x5652de(0x1c3))[_0x5652de(0x20b)](curStep), steps[_0x5652de(0x211)](), $('[data-success-card]')[_0x5652de(0x211)](), $('[data-form=\x22next-btn\x22][type=\x22submit\x22]')[_0x5652de(0x1a4)](function() {
    const _0x3d3657 = _0x5652de;
    $(this)[_0x3d3657(0x1b3)](_0x3d3657(0x273), 'button');
});

function getParams() {
    const _0x540aac = _0x5652de;
    urlFormly['searchParams'][_0x540aac(0x2d5)](function(_0x2e4a48, _0x5687bd) { searchQ['push']({ 'val': _0x2e4a48, 'key': _0x5687bd }); });
}

function getSafe(_0x549ef4, _0x91a620) { try { return _0x549ef4(); } catch (_0x47f697) { return _0x91a620; } }

function phoneAutoFormat(_0x5cea76) {
    var _0x482e94 = '';
    return function(_0x56b44b) {
        const _0x25b5af = _0x35f4;
        var _0x5038e9 = '',
            _0x122a63 = _0x56b44b[_0x25b5af(0x1e4)](/\D/g, ''),
            _0x2a09a4 = 0x0,
            _0x172b37 = 0x0;
        while (_0x2a09a4 < _0x122a63[_0x25b5af(0x1e6)] && _0x172b37 < _0x5cea76['length']) { _0x5cea76[_0x172b37] === 'x' ? (_0x5038e9 += _0x122a63[_0x2a09a4], _0x2a09a4++) : _0x5038e9 += _0x5cea76[_0x172b37], _0x172b37++; }
        if (_0x56b44b[_0x25b5af(0x1e6)] < _0x482e94[_0x25b5af(0x1e6)]) {
            var _0x52311f = _0x5cea76[_0x25b5af(0x166)](_0x172b37);
            _0x5038e9 += _0x52311f[_0x25b5af(0x1e4)](/x/g, '');
        }
        return _0x482e94 = _0x5038e9, _0x5038e9;
    };
}

function validateURL(_0x2c4f4d) { return urlPattern['test'](_0x2c4f4d) ? !![] : ![]; }
quiz && steps[_0x5652de(0x1a4)](function() {
    const _0x2ba062 = _0x5652de;
    $(this)['children']()['attr'](_0x2ba062(0x29f), !![]), $(this)['children']()[_0x2ba062(0x1b3)](_0x2ba062(0x265), 0xfa);
});

function disableBtn(_0x4c005d) {
    const _0x49fabc = _0x5652de;
    fill = ![], !customError && ($(_0x49fabc(0x1bd))[_0x49fabc(0x173)]({ 'opacity': _0x49fabc(0x168), 'pointer-events': _0x49fabc(0x235) }), $('[data-form=\x22next-btn\x22]')[_0x49fabc(0x1db)](_0x49fabc(0x2e1)), $(_0x49fabc(0x1a7))[_0x49fabc(0x173)]({ 'opacity': _0x49fabc(0x168), 'pointer-events': _0x49fabc(0x235) }), $(_0x49fabc(0x1a7))[_0x49fabc(0x1db)](_0x49fabc(0x2e1)), $(_0x49fabc(0x2a4))[_0x49fabc(0x173)]({ 'opacity': _0x49fabc(0x168), 'pointer-events': _0x49fabc(0x235) }), $(_0x49fabc(0x2a4))[_0x49fabc(0x1db)](_0x49fabc(0x2e1)));
}

function enableBtn() {
    const _0x4ccec7 = _0x5652de;
    fill = !![], $(_0x4ccec7(0x1bd))['css']({ 'pointer-events': _0x4ccec7(0x157), 'opacity': '1' }), $('[data-form=\x22next-btn\x22]')['removeClass'](_0x4ccec7(0x2e1)), $(_0x4ccec7(0x1a7))[_0x4ccec7(0x173)]({ 'pointer-events': _0x4ccec7(0x157), 'opacity': '1' }), $(_0x4ccec7(0x1a7))[_0x4ccec7(0x24a)]('disabled'), $(_0x4ccec7(0x2a4))[_0x4ccec7(0x173)]({ 'pointer-events': 'auto', 'opacity': '1' }), $(_0x4ccec7(0x2a4))[_0x4ccec7(0x24a)](_0x4ccec7(0x2e1));
}

function saveLastAnswer(_0x5eb4ce) {
    const _0x1e469d = _0x5652de;
    localStorage[_0x1e469d(0x200)](_0x1e469d(0x20a)), localStorage[_0x1e469d(0x1e0)](_0x1e469d(0x20a), JSON[_0x1e469d(0x163)](_0x5eb4ce));
}

function saveFilledInput() {
    const _0x53e898 = _0x5652de;
    $(_0x53e898(0x1f5))[_0x53e898(0x182)]('[type=\x22submit\x22]')[_0x53e898(0x1a4)](function() {
        const _0x4a7fbd = _0x53e898;
        $(this)[_0x4a7fbd(0x1b3)](_0x4a7fbd(0x273)) === _0x4a7fbd(0x171) || $(this)[_0x4a7fbd(0x1b3)](_0x4a7fbd(0x273)) === _0x4a7fbd(0x1ec) ? $(this)[_0x4a7fbd(0x1be)](_0x4a7fbd(0x19e)) && (filledInput[_0x4a7fbd(0x17b)](_0x186ae6 => _0x186ae6[_0x4a7fbd(0x28e)] === $(this)['attr'](_0x4a7fbd(0x29a))) ? (filledInput = filledInput[_0x4a7fbd(0x1b4)](_0x31fa34 => _0x31fa34[_0x4a7fbd(0x28e)] !== $(this)[_0x4a7fbd(0x1b3)](_0x4a7fbd(0x29a))), $(this)[_0x4a7fbd(0x230)]() !== '' && filledInput[_0x4a7fbd(0x278)]({ 'inputName': $(this)[_0x4a7fbd(0x1b3)](_0x4a7fbd(0x29a)), 'value': $(this)[_0x4a7fbd(0x230)]() })) : $(this)[_0x4a7fbd(0x230)]() !== '' && filledInput[_0x4a7fbd(0x278)]({ 'inputName': $(this)[_0x4a7fbd(0x1b3)]('name'), 'value': $(this)[_0x4a7fbd(0x230)]() })) : filledInput[_0x4a7fbd(0x17b)](_0x4897b4 => _0x4897b4[_0x4a7fbd(0x28e)] === $(this)[_0x4a7fbd(0x1b3)](_0x4a7fbd(0x29a))) ? (filledInput = filledInput[_0x4a7fbd(0x1b4)](_0x4f46c9 => _0x4f46c9[_0x4a7fbd(0x28e)] !== $(this)[_0x4a7fbd(0x1b3)](_0x4a7fbd(0x29a))), $(this)[_0x4a7fbd(0x230)]() !== '' && filledInput[_0x4a7fbd(0x278)]({ 'inputName': $(this)[_0x4a7fbd(0x1b3)](_0x4a7fbd(0x29a)), 'value': $(this)[_0x4a7fbd(0x230)]() })) : $(this)['val']() !== '' && filledInput[_0x4a7fbd(0x278)]({ 'inputName': $(this)['attr'](_0x4a7fbd(0x29a)), 'value': $(this)[_0x4a7fbd(0x230)]() });
    }), trackLastStep && (formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage[_0x53e898(0x200)]('formlyLastStep'), localStorage[_0x53e898(0x1e0)](_0x53e898(0x298), lastStep)), localStorage['removeItem']('filledInput'), localStorage['setItem'](_0x53e898(0x225), JSON[_0x53e898(0x163)](filledInput));
}

function scrollTop() {
    const _0xbd1af9 = _0x5652de;
    scrollToTop && $('html,\x20body')['animate']({ 'scrollTop': $(_0xbd1af9(0x2c7))[_0xbd1af9(0x26a)]()[_0xbd1af9(0x1d4)] - scrollTopOffset }, 0x3e8);
}

function updateURL(_0x285b45) {
    const _0x4e3bd6 = _0x5652de;
    var _0x16313d = window[_0x4e3bd6(0x1fe)][_0x4e3bd6(0x158)],
        _0x3fca7c = new URLSearchParams(window['location'][_0x4e3bd6(0x187)]);
    _0x3fca7c[_0x4e3bd6(0x23b)](_0x4e3bd6(0x23c), _0x285b45);
    var _0x1351f = _0x16313d[_0x4e3bd6(0x2cc)]('?')[0x0] + '?' + _0x3fca7c['toString']();
    window[_0x4e3bd6(0x14c)][_0x4e3bd6(0x26d)]({}, '', _0x1351f);
}

function _0x2499() {
    const _0xf3cdc7 = ['\x22]:not([data-prefill=\x22false\x22])', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20', 'init', 'fadeIn', ':input[type=\x22text\x22][required]', '[data-clone-input-wrapper]', 'input[type=\x22submit\x22]', 'top', '\x20seconds', 'redirect', '[data-clone-wrapper]', 'Counter\x20updated\x20successfully.', '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', 'DateTimeFormat', 'addClass', 'f-show', 'getMonth', 'BODY', ':input[type=\x22password\x22]', 'setItem', 'skipTo', '<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20', 'clone-input', 'replace', 'screen', 'length', 'userAgent', 'textarea[required]', 'find', '\x22]:checked', '<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>', 'radio', 'closest', '[data-checkbox]', '128OlEwIl', ':input', 'body', 'selections\x20email', 'input[autofocus]', 'log', 'form[data-form=\x22multistep\x22]\x20:input', 'input[type=\x22text\x22][required]:visible', ':input[type=\x22password\x22][required]', 'card', 'round', 'data-go-to', 'conditional-result', 'input:checkbox', 'phone-validation', 'location', 'getElementById', 'removeItem', '170310sLMFdc', 'textarea[autofocus]', 'div', '678464qorTIM', ':input[type=\x22checkbox\x22][required]:checked', 'select[name=\x22', ':input[type=\x22number\x22]', 'clickable', ':input[type=\x22file\x22][required]', 'formlyLastStepAnswer', 'text', 'script', 'select', '[type=\x22radio\x22]', 'first', '<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20', 'hide', 'submit', '[data-display-input]', 'parse', 'getElementsByTagName', '[data-show-if]', '[data-custom-error-message]', ':input[type=\x22time\x22][required]', 'Direct', 'now', '[data-go-to]', 'getItem', '[data-selection-weight]', 'head', '[data-progressive-target]', '\x22][data-progressive-input-value=\x22', '[data-submit=\x22true\x22]', '[data-answer][data-radio-skip]:visible', '[data-display-input-index=\x22', '[data-display=\x22', 'filledInput', '.w-checkbox-input', 'redirect-delay', 'trim', 'span', '[data-radio-skip]', 'preventDefault', ':input[type=\x27radio\x27]:checked', 'open', ':focus', '[data-progressive-target=\x22', 'val', ':checked', '[data-radio-skip=\x22true\x22]', 'quiz', 'parentNode', 'none', '[data-cms-select=text]', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', 'toISOString', '[data-clone-input]', 'param-analytics', 'set', 'step', 'input[type=\x22checkbox\x22]', '[data-selection=\x22other\x22]', 'true', 'Before\x20&lt;/body&gt;\x20tag', '[data-add-new-input=\x22', '</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20', 'click', '[data-clone-input-wrapper=\x22', '\x22]\x20input', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'findIndex', '506OOnPkx', 'debug-mode', 'removeClass', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20', 'skip-to', '[data-clone-input=\x22', 'https://webflow.com/api/v1/form/', 'createElement', 'wait', '<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20', 'last-step', '[data-btn=\x22reset\x22]', 'FAIL', 'input[type=\x22email\x22]:visible', 'url', '[data-display-index=\x22', '[data-form=\x22next-btn\x22][data-submit-show]', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20', '<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20', 'key', '[data-display]', '[data-add-new]', '<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20', 'textarea', ':input[type=\x22email\x22]', '[data-clone]', 'option[value=\x22$(this).val()\x22]', '[data-form=\x22custom-progress-indicator\x22]', 'data-show-if', 'data-radio-delay', 'select[required]:visible', 'weighted-selection-range', 'append', 'scroll-top-offset', 'offset', '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20', 'cookie', 'pushState', 'ms-field', ':input[type=\x22file\x22]', 'change', 'N/A', '35%', 'type', 'No\x20Formly\x20script\x20added\x20to\x20the\x20page!', ':input[type=\x22number\x22][required]', 'weighted-selection', 'min-character', 'push', 'Please\x20wait...', 'radio-skip', '</strong>', '[data-skip-to]', 'input[type=\x22radio\x22]', ':input[type=\x22date\x22][required]', 'select:not([data-prefill=\x22false\x22])', 'scroll-top', '[data-weighted-selection]', 'ctrlKey', '<br>Data\x20Answer\x20=\x20', 'add-new-input', 'focus', 'getResponse', 'block-domain', 'w--redirected-checked', 'data-name', '[data-query-param]', 'textarea:focus', 'progressive-input', 'videsigns', 'inputName', 'add-new-limit', '269718QvLBSH', '<br>Data\x20Go\x20To\x20=\x20', 'progressive-input-value', '.w-form-formradioinput', '[data-reset-delay]', 'f-mySidenav', 'Counter\x20already\x20updated\x20for\x20this\x20month.', 'resolvedOptions', 'formlyLastStep', '[data-input-field]', 'name', 'src', 'FormlyLogic\x20enabled', ':input[type=\x22tel\x22]', '[data-text=\x22total-steps\x22]', 'data-radio-skip', 'value', '\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a', ':input[type=\x22checkbox\x22]', 'includes', '[data-form-ms=\x22submit-btn\x22]', 'option[value=\x22', '[data-weighted-selection-range]', 'data-form', '<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20', 'reset-delay', 'f-hide', 'dispatchEvent', 'Failed\x20to\x20update\x20counter:', 'keyCode', 'show', 'file', 'success', '[data-add-new=\x22', '[data-conditional-result]', 'input:radio[name=\x22', ':input[type=\x22url\x22][required]', '\x22]\x20[data-clone-input=\x22', '510108jfJKPq', '[data-form=\x22back-btn\x22]', '495633hhqiYe', 'script[src=\x22', 'clone', '[data-card=\x22true\x22]', '1249884dGnuZf', 'Basic\x20(No\x20Formly\x20Logic)', 'remove', 'answer', 'metaKey', '[data-form=\x22step\x22]:not([data-card=\x22true\x22])', 'enter', '<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20', 'pageLoadTime', '[data-form=\x22step\x22]', 'padding', '[data-form=\x22multistep\x22]', 'get', '[data-progressive-input=\x22', '[data-progressive-input]', '[data-text=\x22error-message\x22]', 'split', 'stopPropagation', 'children', 'data', '[data-selection=\x22', 'tagName', 'click-addclass', '[data-radio-skip]:visible', 'custom-error-message', 'forEach', 'formly', '[data-clickable]', '\x22][value=\x22', ':input[type=\x22url\x22]', '<option>', '[data-success-card=\x22', '\x22][data-progressive-input-value=\x22*\x22]', '[required]', '[data-answer]', 'edit-step', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20', 'disabled', '[data-remove-upload]', 'go-to', 'new-tab', 'data-input-field', 'clickable-all', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20', 'destroy', 'novalidate', 'https://videsigns-staging.co.uk/formly-counter', 'referrer', '[data-max-checkbox]', 'add-new-input-limit', '[data-clone=\x22', '[data-display-wrapper=\x22', 'toLowerCase', 'history', '[data-answer=\x22', '[data-input-field=\x22', 'input[name=\x22', 'input', ':input[type=\x22checkbox\x22]:checked', '[data-form=\x22submit-btn\x22]:visible', '\x22]\x20textarea', '[data-input-index=\x22', '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>', 'select[required]', 'auto', 'href', '</div>', '[data-clone-wrapper=\x22', 'click-path', 'formly-support', 'relationship-', 'siblings', 'count-card', '[data-display-input-wrapper=\x22', 'textarea[name=\x22', 'querySelector', 'stringify', '\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'data-skip-to', 'slice', '\x22]\x20select', '0.4', 'timestamp', '<strong\x20class=\x22f-text-white\x22>Checkboxes\x20', 'input-field', '[data-selected]:checked', ':input[type=\x22email\x22][required]', 'appendChild', '[data-display-input=\x22', 'AND', 'checkbox', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20', 'css', '[data-click-addclass]', 'backTo', 'ajaxComplete', 'slow', ':input[type=\x22date\x22]', 'reinit', '<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>', 'some', '.w-form-done', '[data-count-card]', '[data-range]:contains(', '[data-selection]', 'selection', 'height', 'not', 'index', 'join', 'parent', '2841350UTHJuH', 'search', 'substring', 'keypress', 'selected', '[data-btn=\x22edit\x22]', '10WWBIfB', 'field', '2wFbpPA', 'time-zone', 'label', 'fail', 'input:radio[required]', 'startsWith', '[data-enter=\x22true\x22]', '.active-answer-card', 'last', '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>', '[data-cms-select=input]', 'Webflow', ':input[type=\x22checkbox\x22][required]', '[data-reinit]', 'timeZone', 'active-answer-card', 'checked', '[data-form=\x22submit\x22]:visible', '[data-select-multiple]', 'trigger', 'screen-resolution', 'current', 'each', 'input[type=\x22radio\x22]:checked', '12px', '[data-form=\x22submit-btn\x22]', 'max-checkbox', 'every', 'logic-extra', '[data-memory]', 'innerHTML', 'error', 'div.g-recaptcha', '[data-last-step]', '[data-form=\x22progress\x22]', 'width', 'Inside\x20<head>\x20tag', 'attr', 'filter', '[data-redirect-delay]', '[data-form=\x22remove-input-clone\x22]', 'parents', '9zPbZOP', 'style', ':input[type=\x22radio\x22]', 'PASS', 'form[data-form=\x22multistep\x22]', '[data-form=\x22next-btn\x22]', 'prop', ':input[required]', 'phone-autoformat', 'ix2', 'test', '[data-text=\x22current-step\x22]', 'status', '[data-form=\x22remove-clone\x22]', ':first', 'add-new', '.w-radio-input', 'select-multiple', '[data-form=\x22progress-indicator\x22]', '[data-radio-delay]', ':input[type=\x22tel\x22][required]'];
    _0x2499 = function() { return _0xf3cdc7; };
    return _0x2499();
}

function updateStep() {
    const _0x305e7f = _0x5652de;
    scrollTop(), skip = ![], $('[data-form=\x22custom-progress-indicator\x22]')[_0x305e7f(0x24a)](_0x305e7f(0x2e1));
    $(_0x305e7f(0x2d7))[_0x305e7f(0x2cf)](_0x305e7f(0x208)) && (steps['find'](':input[required]')[_0x305e7f(0x1a4)](function() {
        const _0x326871 = _0x305e7f;
        $($(_0x326871(0x263))[$(this)['parents'](_0x326871(0x2c5))[_0x326871(0x183)]()]), $(this)[_0x326871(0x230)]() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $(_0x305e7f(0x1d3))['addClass'](_0x305e7f(0x2e1)) : $(_0x305e7f(0x1d3))[_0x305e7f(0x24a)](_0x305e7f(0x2e1)));
    $(_0x305e7f(0x263))['removeClass'](_0x305e7f(0x1a3)), $(_0x305e7f(0x263))[_0x305e7f(0x1db)](_0x305e7f(0x2e1)), $($(_0x305e7f(0x263))[x])[_0x305e7f(0x1db)]('current'), selection = selections[_0x305e7f(0x1b4)](_0x4446a7 => _0x4446a7[_0x305e7f(0x23c)] === x - 0x1);
    next && (x = getSafe(() => selection[0x0]['skipTo']) ? parseInt(getSafe(() => selection[0x0]['skipTo'])) : x);
    $(_0x305e7f(0x2de))[_0x305e7f(0x211)](), steps['hide']();
    reinitIX === !![] && window[_0x305e7f(0x199)][_0x305e7f(0x143)]();
    $(progressbar)['removeClass'](_0x305e7f(0x1a3));
    for (i = 0x0; i <= x; i++) { countCard ? $(progressbar[i])['addClass']('current') : !$(steps[i])[_0x305e7f(0x2cf)]('card') && $(progressbar[i])['addClass'](_0x305e7f(0x1a3)); }
    reinitIX === !![] ? (window['Webflow'] && window['Webflow']['require'](_0x305e7f(0x1c1))[_0x305e7f(0x1cf)](), document[_0x305e7f(0x2ab)](new Event('readystatechange')), $(steps[x])['show']()) : $(steps[x])[_0x305e7f(0x1d0)](_0x305e7f(0x177));
    $(_0x305e7f(0x195))['removeClass']('active-answer-card');
    x === 0x0 && !$(steps[x])[_0x305e7f(0x2cf)](_0x305e7f(0x1f8)) && ($(steps[x])[_0x305e7f(0x1e9)]('[data-answer]')['show'](), $(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x2de))[_0x305e7f(0x1db)](_0x305e7f(0x19d)));
    selection[_0x305e7f(0x1e6)] > 0x0 ? ($(steps[x])['find'](_0x305e7f(0x14d) + selection[0x0]['selected'] + '\x22]')['show'](), $(steps[x])['find'](_0x305e7f(0x14d) + selection[0x0][_0x305e7f(0x18a)] + '\x22]')['addClass'](_0x305e7f(0x19d))) : ($(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x14d) + answer + '\x22]')['show'](), $(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x14d) + answer + '\x22]')['addClass'](_0x305e7f(0x19d)));
    if (x === 0x0) $('[data-form=\x22back-btn\x22]')['hide'](), $('[data-form=\x22next-btn\x22]')['show'](), $(_0x305e7f(0x1a7))[_0x305e7f(0x211)]();
    else {
        if (x === steps[_0x305e7f(0x1e6)] - 0x1 || $(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x19f))[_0x305e7f(0x1e6)] > 0x0) {
            $(_0x305e7f(0x1bd))[_0x305e7f(0x211)]();
            if ($(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x258))[_0x305e7f(0x2cf)]('submit-show')) $(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x258))[_0x305e7f(0x2ae)]();
            else $(_0x305e7f(0x1bd))[_0x305e7f(0x2cf)]('submit-show') && $(_0x305e7f(0x1bd))[_0x305e7f(0x2ae)]();
            $('[data-form=\x22submit-btn\x22]')[_0x305e7f(0x2ae)](), $(_0x305e7f(0x2a4))[_0x305e7f(0x2ae)](), $(_0x305e7f(0x2b7))[_0x305e7f(0x2ae)]();
        } else $(_0x305e7f(0x1bd))[_0x305e7f(0x2ae)](), $(_0x305e7f(0x2b7))[_0x305e7f(0x2ae)](), $(_0x305e7f(0x1a7))['hide'](), $(_0x305e7f(0x2a4))[_0x305e7f(0x211)]();
    }
    $($(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x1f3))[0x0])[_0x305e7f(0x285)](), $($(steps[x])[_0x305e7f(0x1e9)](_0x305e7f(0x202))[0x0])[_0x305e7f(0x285)](), validation();
    for (idx = 0x0; idx <= x; idx++) { $($(_0x305e7f(0x263))[idx])[_0x305e7f(0x24a)](_0x305e7f(0x2e1)); }
    paramUrl && updateURL(curStep);
}

function validateEmail(_0x4d1869, _0x18d364, _0x26dc5c) {
    const _0x10334d = _0x5652de;
    let _0x400310 = _0x4d1869[_0x10334d(0x2a3)]('@') ? _0x4d1869[_0x10334d(0x2cc)]('@')[0x1][_0x10334d(0x2cc)]('.')[0x0] : [];
    dom = [];
    _0x18d364 !== undefined && _0x18d364[_0x10334d(0x2cc)](',')['forEach'](function(_0x35e7cd) { _0x35e7cd['includes'](_0x400310) && dom['push'](_0x400310); });
    dom[_0x10334d(0x1e6)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x5bb709 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x5bb709[_0x10334d(0x1c2)](_0x4d1869) || !domainAllowed ? (emailFilled = ![], unfilledArr[_0x10334d(0x278)]({ 'input': _0x26dc5c })) : emailFilled = !![];
}

function phoneValidation(_0x4600de, _0x2e7331, _0x39055a) {
    if (phoneFormat) return _0x2e7331 >= _0x39055a ? !![] : ![];
    else { if (_0x2e7331 >= _0x39055a) return !![]; }
}

function validation() {
    const _0x1c9882 = _0x5652de;
    $(steps[x])[_0x1c9882(0x2cf)]('card') && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![], fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0, empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [], empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(steps[x])[_0x1c9882(0x1e9)]('textarea[required]:visible')[_0x1c9882(0x1e6)], textInputLength = $(steps[x])['find'](_0x1c9882(0x1f6))[_0x1c9882(0x1e6)], selectInputLength = $(steps[x])['find'](_0x1c9882(0x266))[_0x1c9882(0x1e6)], emailInputLength = $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x255))[_0x1c9882(0x1e6)], checkboxInputLength = $(steps[x])['find']('input[type=\x22checkbox\x22]:visible')[_0x1c9882(0x1e6)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() : enableBtn();
    checkCount = $(steps[x])[_0x1c9882(0x2cf)]('checkbox') ? $(steps[x])['data'](_0x1c9882(0x171)) : $(steps[x])['find']('[data-checkbox]')[_0x1c9882(0x1e6)] > 0x0 ? $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x1ee))['data'](_0x1c9882(0x171)) : 0x0, maxCheckCount = $(steps[x])[_0x1c9882(0x2cf)](_0x1c9882(0x1a8)) ? $(steps[x])[_0x1c9882(0x2cf)]('max-checkbox') : $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x147))[_0x1c9882(0x1e6)] > 0x0 ? $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x147))[_0x1c9882(0x2cf)](_0x1c9882(0x1a8)) : 0x0;
    if (!logicExtra) {
        let _0x503b71 = $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x2a2)),
            _0x23b3a8 = _0x503b71['filter'](_0x1c9882(0x2dd)),
            _0x14e85e = _0x503b71[_0x1c9882(0x1b4)](':checked');
        _0x503b71[_0x1c9882(0x1e6)] > 0x0 && (checkCount === '*' || checkCount > _0x503b71[_0x1c9882(0x1e6)] ? _0x503b71[_0x1c9882(0x1a4)](function() {
            const _0x3f98f5 = _0x1c9882;
            $(this)['is'](_0x3f98f5(0x231)) ? (checkboxFilled = !![], resetInputErrorMessage($(this)['attr'](_0x3f98f5(0x29a)))) : (checkboxFilled = ![], unfilledArr[_0x3f98f5(0x278)]({ 'input': $(this)[_0x3f98f5(0x1b3)](_0x3f98f5(0x29a)) }));
        }) : _0x14e85e[_0x1c9882(0x1e6)] >= checkCount ? _0x23b3a8['length'] > 0x0 ? _0x23b3a8[_0x1c9882(0x1e6)] === _0x14e85e[_0x1c9882(0x1e6)] ? (checkboxFilled = !![], resetInputErrorMessage(_0x23b3a8[_0x1c9882(0x20f)]()['attr']('name'))) : (checkboxFilled = ![], _0x23b3a8[_0x1c9882(0x182)](':checked')[_0x1c9882(0x1a4)](function() {
            const _0x1f07b0 = _0x1c9882;
            unfilledArr[_0x1f07b0(0x278)]({ 'input': $(this)[_0x1f07b0(0x1b3)]('name') });
        })) : _0x14e85e[_0x1c9882(0x1e6)] < maxCheckCount ? ($(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x23d))[_0x1c9882(0x1be)](_0x1c9882(0x2e1), ![]), $(steps[x])['find']('input[type=\x22checkbox\x22]')[_0x1c9882(0x185)](_0x1c9882(0x190))['removeClass']('disabled')) : ($(steps[x])['find']('input[type=\x22checkbox\x22]:not(:checked)')[_0x1c9882(0x185)](_0x1c9882(0x190))[_0x1c9882(0x1db)](_0x1c9882(0x2e1)), $(steps[x])[_0x1c9882(0x1e9)]('input[type=\x22checkbox\x22]:not(:checked)')[_0x1c9882(0x1be)](_0x1c9882(0x2e1), !![])) : (checkboxFilled = ![], _0x23b3a8['not'](_0x1c9882(0x231))[_0x1c9882(0x1a4)](function() {
            const _0x17155f = _0x1c9882;
            unfilledArr['push']({ 'input': $(this)['attr'](_0x17155f(0x29a)) });
        }), unfilledArr[_0x1c9882(0x278)]({ 'input': _0x503b71[_0x1c9882(0x20f)]()[_0x1c9882(0x1b3)](_0x1c9882(0x29a)) }))), $(steps[x])['find'](_0x1c9882(0x192))['each'](function(_0x239b69) {
            const _0x57f034 = _0x1c9882;
            var _0x13bab3 = $(this)[_0x57f034(0x1b3)]('name');
            $(_0x57f034(0x2b3) + _0x13bab3 + _0x57f034(0x1ea))[_0x57f034(0x1e6)] == 0x0 ? (!empReqRadio['find'](_0x41bb22 => _0x41bb22[_0x57f034(0x150)] === _0x239b69) && empReqRadio['push']({ 'input': _0x239b69 }), unfilledArr[_0x57f034(0x278)]({ 'input': $(this)[_0x57f034(0x1b3)]('name') })) : empReqRadio = empReqRadio[_0x57f034(0x1b4)](_0x1539d5 => _0x1539d5[_0x57f034(0x150)] !== _0x239b69), empReqRadio['length'] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])['find'](_0x1c9882(0x1d1))[_0x1c9882(0x1a4)](function(_0x18643d) {
            const _0x5868d7 = _0x1c9882;
            let _0x9be996 = $(this)[_0x5868d7(0x230)]()[_0x5868d7(0x1e6)],
                _0x3f0f36 = $(this)[_0x5868d7(0x2cf)](_0x5868d7(0x277)) ? $(this)[_0x5868d7(0x2cf)]('min-character') : 0x0;
            $(this)[_0x5868d7(0x230)]() !== '' && _0x9be996 >= _0x3f0f36 ? empReqInput = empReqInput[_0x5868d7(0x1b4)](_0x5c4cf3 => _0x5c4cf3[_0x5868d7(0x150)] !== _0x18643d) : (!empReqInput[_0x5868d7(0x1e9)](_0x21c5fd => _0x21c5fd[_0x5868d7(0x150)] === _0x18643d) && empReqInput[_0x5868d7(0x278)]({ 'input': _0x18643d }), unfilledArr['push']({ 'input': $(this)['attr'](_0x5868d7(0x29a)) })), empReqInput[_0x5868d7(0x1e6)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](':input[type=\x22password\x22][required]')[_0x1c9882(0x1a4)](function(_0x2935de) {
            const _0x114d23 = _0x1c9882;
            let _0x560c23 = $(this)[_0x114d23(0x230)]()['length'],
                _0x2af304 = $(this)['data'](_0x114d23(0x277)) ? $(this)[_0x114d23(0x2cf)](_0x114d23(0x277)) : 0x0;
            $(this)['val']() !== '' && _0x560c23 >= _0x2af304 ? empReqPassword = empReqPassword[_0x114d23(0x1b4)](_0x219863 => _0x219863[_0x114d23(0x150)] !== _0x2935de) : (!empReqPassword[_0x114d23(0x1e9)](_0x3595c2 => _0x3595c2[_0x114d23(0x150)] === _0x2935de) && empReqPassword[_0x114d23(0x278)]({ 'input': _0x2935de }), unfilledArr[_0x114d23(0x278)]({ 'input': $(this)[_0x114d23(0x1b3)](_0x114d23(0x29a)) })), empReqPassword[_0x114d23(0x1e6)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x2b4))[_0x1c9882(0x1a4)](function(_0x17f895) {
            const _0xb55c8d = _0x1c9882;
            let _0x112b9b = $(this)[_0xb55c8d(0x230)]()[_0xb55c8d(0x1e6)],
                _0x45dd53 = $(this)[_0xb55c8d(0x2cf)](_0xb55c8d(0x277)) ? $(this)['data'](_0xb55c8d(0x277)) : 0x0;
            $(this)[_0xb55c8d(0x230)]() !== '' && _0x112b9b >= _0x45dd53 ? empReqUrl = empReqUrl[_0xb55c8d(0x1b4)](_0x46bb76 => _0x46bb76[_0xb55c8d(0x150)] !== _0x17f895) : (!empReqTime[_0xb55c8d(0x1e9)](_0x3c4975 => _0x3c4975[_0xb55c8d(0x150)] === _0x17f895) && empReqUrl[_0xb55c8d(0x278)]({ 'input': _0x17f895 }), unfilledArr[_0xb55c8d(0x278)]({ 'input': $(this)[_0xb55c8d(0x1b3)](_0xb55c8d(0x29a)) })), empReqUrl[_0xb55c8d(0x1e6)] === 0x0 && validateURL($(this)[_0xb55c8d(0x230)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x218))[_0x1c9882(0x1a4)](function(_0x936d7f) {
            const _0x38977d = _0x1c9882;
            let _0x34fd32 = $(this)[_0x38977d(0x230)]()['length'],
                _0x5ed477 = $(this)[_0x38977d(0x2cf)](_0x38977d(0x277)) ? $(this)[_0x38977d(0x2cf)](_0x38977d(0x277)) : 0x0;
            $(this)['val']() !== '' && _0x34fd32 >= _0x5ed477 ? empReqTime = empReqTime[_0x38977d(0x1b4)](_0x1bcd97 => _0x1bcd97['input'] !== _0x936d7f) : (!empReqTime['find'](_0x3b1c5 => _0x3b1c5[_0x38977d(0x150)] === _0x936d7f) && empReqTime[_0x38977d(0x278)]({ 'input': _0x936d7f }), unfilledArr[_0x38977d(0x278)]({ 'input': $(this)[_0x38977d(0x1b3)](_0x38977d(0x29a)) })), empReqTime[_0x38977d(0x1e6)] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x27e))[_0x1c9882(0x1a4)](function(_0x570b4a) {
            const _0x24794b = _0x1c9882;
            $(this)[_0x24794b(0x230)]() !== '' ? empReqDate = empReqDate['filter'](_0xf6a42e => _0xf6a42e['input'] !== _0x570b4a) : (!empReqDate['find'](_0x2a596a => _0x2a596a[_0x24794b(0x150)] === _0x570b4a) && empReqDate['push']({ 'input': _0x570b4a }), unfilledArr['push']({ 'input': $(this)[_0x24794b(0x1b3)](_0x24794b(0x29a)) })), empReqDate[_0x24794b(0x1e6)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x1cc))['each'](function(_0x31030e) {
            const _0x229cc6 = _0x1c9882;
            if ($(this)[_0x229cc6(0x230)]() !== '') {
                let _0x534cb1 = $(this)[_0x229cc6(0x230)]()['length'],
                    _0x173e7c = $(this)[_0x229cc6(0x2cf)]('min-character') ? $(this)[_0x229cc6(0x2cf)](_0x229cc6(0x277)) : 0x0;
                if ($(this)[_0x229cc6(0x2cf)]('phone-autoformat')) {
                    var _0x3152c2 = phoneAutoFormat($(this)[_0x229cc6(0x2cf)](_0x229cc6(0x1c0)));
                    $(this)['val'](_0x3152c2($(this)[_0x229cc6(0x230)]()));
                }
                phoneValidation($(this)[_0x229cc6(0x230)](), _0x534cb1, _0x173e7c) ? empReqTel = empReqTel[_0x229cc6(0x1b4)](_0x3bb003 => _0x3bb003[_0x229cc6(0x150)] !== _0x31030e) : empReqTel[_0x229cc6(0x278)]({ 'input': _0x31030e });
            } else !empReqTel['find'](_0x1c9135 => _0x1c9135[_0x229cc6(0x150)] === _0x31030e) && empReqTel[_0x229cc6(0x278)]({ 'input': _0x31030e }), unfilledArr[_0x229cc6(0x278)]({ 'input': $(this)[_0x229cc6(0x1b3)](_0x229cc6(0x29a)) });
            empReqTel[_0x229cc6(0x1e6)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](':input[type=\x22file\x22][required]')['each'](function(_0x25e73a) {
            const _0x5ebf37 = _0x1c9882;
            $(this)[_0x5ebf37(0x230)]() !== '' ? empReqFile = empReqFile[_0x5ebf37(0x1b4)](_0x5b51c4 => _0x5b51c4[_0x5ebf37(0x150)] !== _0x25e73a) : (!empReqFile[_0x5ebf37(0x1e9)](_0x358fb5 => _0x358fb5[_0x5ebf37(0x150)] === _0x25e73a) && empReqFile[_0x5ebf37(0x278)]({ 'input': _0x25e73a }), unfilledArr[_0x5ebf37(0x278)]({ 'input': $(this)[_0x5ebf37(0x1b3)](_0x5ebf37(0x29a)) })), empReqFile['length'] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x275))[_0x1c9882(0x1a4)](function(_0x280897) {
            const _0x5ca3db = _0x1c9882;
            let _0x3b276f = $(this)['val']()[_0x5ca3db(0x1e6)],
                _0x531d85 = $(this)['data'](_0x5ca3db(0x277)) ? $(this)['data']('min-character') : 0x0;
            $(this)[_0x5ca3db(0x230)]() !== '' && _0x3b276f >= _0x531d85 ? empReqNum = empReqNum['filter'](_0x1eace5 => _0x1eace5['input'] !== _0x280897) : (!empReqNum[_0x5ca3db(0x1e9)](_0x2fee68 => _0x2fee68[_0x5ca3db(0x150)] === _0x280897) && empReqNum[_0x5ca3db(0x278)]({ 'input': _0x280897 }), unfilledArr[_0x5ca3db(0x278)]({ 'input': $(this)[_0x5ca3db(0x1b3)]('name') })), empReqNum[_0x5ca3db(0x1e6)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x156))['each'](function(_0x266ed2) {
            const _0x43138a = _0x1c9882;
            let _0x5036b5 = $(this)['val']();
            _0x5036b5 === '' && (_0x5036b5 = null), _0x5036b5 != null ? empReqSelect = empReqSelect[_0x43138a(0x1b4)](_0xb4437a => _0xb4437a['input'] !== _0x266ed2) : (!empReqSelect['find'](_0xfb8876 => _0xfb8876[_0x43138a(0x150)] === _0x266ed2) && empReqSelect['push']({ 'input': _0x266ed2 }), unfilledArr[_0x43138a(0x278)]({ 'input': $(this)[_0x43138a(0x1b3)](_0x43138a(0x29a)) })), empReqSelect['length'] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])['find'](_0x1c9882(0x1e8))['each'](function(_0x478fae) {
            const _0x25202b = _0x1c9882;
            let _0x2a10f7 = $(this)[_0x25202b(0x230)]()[_0x25202b(0x1e6)],
                _0x48edf1 = $(this)[_0x25202b(0x2cf)](_0x25202b(0x277)) ? $(this)[_0x25202b(0x2cf)](_0x25202b(0x277)) : 0x0;
            $(this)[_0x25202b(0x230)]() !== '' && _0x2a10f7 >= _0x48edf1 ? empReqTextarea = empReqTextarea['filter'](_0x119f34 => _0x119f34[_0x25202b(0x150)] !== _0x478fae) : (!empReqTextarea['find'](_0x4af6a6 => _0x4af6a6[_0x25202b(0x150)] === _0x478fae) && empReqTextarea[_0x25202b(0x278)]({ 'input': _0x478fae }), unfilledArr[_0x25202b(0x278)]({ 'input': $(this)[_0x25202b(0x1b3)](_0x25202b(0x29a)) })), empReqTextarea[_0x25202b(0x1e6)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x16d))[_0x1c9882(0x1a4)](function() {
            const _0x25ad0e = _0x1c9882;
            $(this)[_0x25ad0e(0x230)]() !== '' ? validateEmail($(this)[_0x25ad0e(0x230)](), $(this)[_0x25ad0e(0x2cf)]('block-domain'), $(this)['attr']('name')) : (emailFilled = ![], unfilledArr[_0x25ad0e(0x278)]({ 'input': $(this)[_0x25ad0e(0x1b3)](_0x25ad0e(0x29a)) }));
        });
    } else {
        if ($(steps[x])[_0x1c9882(0x2cf)](_0x1c9882(0x1f8))) answer = $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x21b))[_0x1c9882(0x2cf)](_0x1c9882(0x2e3)), selections = selections['filter'](_0x230ace => _0x230ace[_0x1c9882(0x23c)] !== x), selections[_0x1c9882(0x278)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])['find'](_0x1c9882(0x195))[_0x1c9882(0x2cf)]('card') && (answer = $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))['data'](_0x1c9882(0x2e3)), selections = selections[_0x1c9882(0x1b4)](_0x161054 => _0x161054[_0x1c9882(0x23c)] !== x), selections['push']({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        if ($(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](':input')['is']('[type=\x22checkbox\x22]')) {
            if (checkCount === '*' || checkCount > $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x2a2))['length']) $(steps[x])['find'](_0x1c9882(0x2a2))[_0x1c9882(0x1a4)](function() {
                const _0x49ef2e = _0x1c9882;
                if ($(this)['is'](_0x49ef2e(0x231))) {
                    if ($(steps[x])[_0x49ef2e(0x1e9)](_0x49ef2e(0x1bf))[_0x49ef2e(0x1e6)] < 0x1) {
                        let _0x2058ce = undefined;
                        $(this)[_0x49ef2e(0x1b7)](_0x49ef2e(0x27c))[_0x49ef2e(0x2cf)](_0x49ef2e(0x24c)) && (_0x2058ce = $(this)['parents'](_0x49ef2e(0x27c))[_0x49ef2e(0x2cf)]('skip-to'));
                        if ($(this)[_0x49ef2e(0x1b7)]('[data-go-to]')[_0x49ef2e(0x1b3)](_0x49ef2e(0x1fa))) {
                            let _0x2923d3 = $(this)[_0x49ef2e(0x1b7)](_0x49ef2e(0x21b))[_0x49ef2e(0x1b3)](_0x49ef2e(0x1fa));
                            selections = selections[_0x49ef2e(0x1b4)](_0x459ec7 => _0x459ec7['step'] !== x), selections[_0x49ef2e(0x278)]({ 'step': x, 'selected': _0x2923d3 });
                            if (_0x2058ce) {
                                selections = selections['filter'](_0x2cdb11 => _0x2cdb11['step'] !== _0x2058ce - 0x2), selections[_0x49ef2e(0x278)]({ 'step': _0x2058ce - 0x2, 'selected': _0x2923d3 });
                                let _0x3359a3 = selections[_0x49ef2e(0x247)](_0x17d1d5 => _0x17d1d5[_0x49ef2e(0x23c)] === x);
                                selections[_0x3359a3][_0x49ef2e(0x1e1)] = parseInt(_0x2058ce) - 0x1, selections[_0x3359a3][_0x49ef2e(0x175)] = x;
                            }
                        }
                        checkboxFilled = !![], $(steps[x])[_0x49ef2e(0x1e9)](_0x49ef2e(0x205))[_0x49ef2e(0x1e6)] >= $(steps[x])[_0x49ef2e(0x1e9)](':input[type=\x22checkbox\x22][required]')[_0x49ef2e(0x1e6)] && resetInputErrorMessage($(steps[x])[_0x49ef2e(0x1e9)](_0x49ef2e(0x2a2))[_0x49ef2e(0x1b3)]('name'));
                    }
                } else checkboxFilled = ![], unfilledArr[_0x49ef2e(0x278)]({ 'input': $(this)[_0x49ef2e(0x1b3)](_0x49ef2e(0x29a)) });
            });
            else {
                if ($(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](':input[type=\x22checkbox\x22]:checked')[_0x1c9882(0x1e6)] >= checkCount) {
                    if ($(steps[x])['find']('.active-answer-card')[_0x1c9882(0x1e9)](':input[type=\x22checkbox\x22]')['parents'](_0x1c9882(0x21b))[_0x1c9882(0x1b3)](_0x1c9882(0x1fa))) {
                        let _0x47ca73 = undefined;
                        $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x2a2))[_0x1c9882(0x1b7)](_0x1c9882(0x27c))[_0x1c9882(0x1b3)]('data-skip-to') && (_0x47ca73 = $(steps[x])[_0x1c9882(0x1e9)]('.active-answer-card')[_0x1c9882(0x1e9)](_0x1c9882(0x151))['parents'](_0x1c9882(0x27c))[_0x1c9882(0x1b3)](_0x1c9882(0x165)));
                        let _0x594156 = $(steps[x])['find'](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x2a2))[_0x1c9882(0x1b7)](_0x1c9882(0x21b))['attr'](_0x1c9882(0x1fa));
                        selections = selections[_0x1c9882(0x1b4)](_0x7cb8b4 => _0x7cb8b4['step'] !== x), selections['push']({ 'step': x, 'selected': _0x594156 });
                        if (_0x47ca73) {
                            selections = selections['filter'](_0xea94b0 => _0xea94b0[_0x1c9882(0x23c)] !== _0x47ca73 - 0x2), selections[_0x1c9882(0x278)]({ 'step': _0x47ca73 - 0x2, 'selected': _0x594156 });
                            let _0x442b22 = selections[_0x1c9882(0x247)](_0x182550 => _0x182550[_0x1c9882(0x23c)] === x);
                            selections[_0x442b22]['skipTo'] = parseInt(_0x47ca73) - 0x1, selections[_0x442b22][_0x1c9882(0x175)] = x;
                        }
                    }
                    checkboxFilled = !![], $(steps[x])[_0x1c9882(0x1e9)](':input[type=\x22checkbox\x22][required]:checked')[_0x1c9882(0x1e6)] >= $(steps[x])['find'](_0x1c9882(0x19a))[_0x1c9882(0x1e6)] && resetInputErrorMessage($(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x2a2))[_0x1c9882(0x1b3)](_0x1c9882(0x29a))), $(steps[x])['find'](_0x1c9882(0x195))[_0x1c9882(0x1e9)](':input[type=\x22checkbox\x22]:checked')[_0x1c9882(0x1e6)] < maxCheckCount ? ($(steps[x])['find'](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x23d))['prop']('disabled', ![]), $(steps[x])['find'](_0x1c9882(0x195))['find']('input[type=\x22checkbox\x22]')[_0x1c9882(0x185)]('label')[_0x1c9882(0x24a)]('disabled')) : ($(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)]('input[type=\x22checkbox\x22]:not(:checked)')[_0x1c9882(0x185)](_0x1c9882(0x190))['addClass'](_0x1c9882(0x2e1)), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))['find']('input[type=\x22checkbox\x22]:not(:checked)')['prop']('disabled', !![]));
                } else checkboxFilled = ![], $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x19a))[_0x1c9882(0x1a4)](function() {
                    const _0x35b8b0 = _0x1c9882;
                    $(this)[_0x35b8b0(0x182)](_0x35b8b0(0x231)) && unfilledArr['push']({ 'input': $(this)[_0x35b8b0(0x1b3)](_0x35b8b0(0x29a)) });
                });
            }
        }
        $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x192))[_0x1c9882(0x1a4)](function(_0xbc6e0) {
            const _0x3b32da = _0x1c9882;
            var _0x28dfc2 = $(this)['attr'](_0x3b32da(0x29a));
            $(_0x3b32da(0x2b3) + _0x28dfc2 + _0x3b32da(0x1ea))['length'] == 0x0 ? (!empReqRadio[_0x3b32da(0x1e9)](_0x54c0fd => _0x54c0fd['input'] === _0xbc6e0) && empReqRadio[_0x3b32da(0x278)]({ 'input': _0xbc6e0 }), unfilledArr[_0x3b32da(0x278)]({ 'input': $(this)[_0x3b32da(0x1b3)](_0x3b32da(0x29a)) })) : empReqRadio = empReqRadio[_0x3b32da(0x1b4)](_0xa5df5b => _0xa5df5b[_0x3b32da(0x150)] !== _0xbc6e0), empReqRadio[_0x3b32da(0x1e6)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x1d1))[_0x1c9882(0x1a4)](function(_0x5a7907) {
            const _0x5d0f52 = _0x1c9882;
            let _0x481c3d = $(this)['val']()[_0x5d0f52(0x1e6)],
                _0xf3d719 = $(this)[_0x5d0f52(0x2cf)](_0x5d0f52(0x277)) ? $(this)[_0x5d0f52(0x2cf)](_0x5d0f52(0x277)) : 0x0;
            $(this)[_0x5d0f52(0x230)]() !== '' && _0x481c3d >= _0xf3d719 ? empReqInput = empReqInput[_0x5d0f52(0x1b4)](_0x3479e0 => _0x3479e0['input'] !== _0x5a7907) : (!empReqInput[_0x5d0f52(0x1e9)](_0x2d99db => _0x2d99db[_0x5d0f52(0x150)] === _0x5a7907) && empReqInput[_0x5d0f52(0x278)]({ 'input': _0x5a7907 }), unfilledArr['push']({ 'input': $(this)[_0x5d0f52(0x1b3)](_0x5d0f52(0x29a)) })), empReqInput[_0x5d0f52(0x1e6)] === 0x0 ? inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')['find'](':input[type=\x22text\x22]')['each'](function(_0x2dcee7) {
            const _0x10429b = _0x1c9882;
            skipTo = undefined, $(this)[_0x10429b(0x1b7)](_0x10429b(0x27c))[_0x10429b(0x2cf)](_0x10429b(0x24c)) !== '' && (skipTo = $(this)[_0x10429b(0x1b7)](_0x10429b(0x27c))[_0x10429b(0x2cf)](_0x10429b(0x24c))), $(this)[_0x10429b(0x1b7)]('[data-go-to]')[_0x10429b(0x1b3)](_0x10429b(0x1fa)) && (answer = $(this)['parents'](_0x10429b(0x21b))[_0x10429b(0x1b3)](_0x10429b(0x1fa)), selections = selections[_0x10429b(0x1b4)](_0x15afcf => _0x15afcf[_0x10429b(0x23c)] !== x), selections[_0x10429b(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x10429b(0x1b4)](_0x5b35e9 => _0x5b35e9[_0x10429b(0x23c)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x238a9a => _0x238a9a[_0x10429b(0x23c)] === x), selections[objIndex][_0x10429b(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x10429b(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x1f7))[_0x1c9882(0x1a4)](function(_0x2bbf84) {
            const _0x15c25f = _0x1c9882;
            let _0xe8033f = $(this)['val']()[_0x15c25f(0x1e6)],
                _0x54266f = $(this)[_0x15c25f(0x2cf)]('min-character') ? $(this)[_0x15c25f(0x2cf)](_0x15c25f(0x277)) : 0x0;
            $(this)['val']() !== '' && _0xe8033f >= _0x54266f ? empReqPassword = empReqPassword[_0x15c25f(0x1b4)](_0x301b70 => _0x301b70[_0x15c25f(0x150)] !== _0x2bbf84) : (!empReqPassword[_0x15c25f(0x1e9)](_0x454d74 => _0x454d74[_0x15c25f(0x150)] === _0x2bbf84) && empReqPassword[_0x15c25f(0x278)]({ 'input': _0x2bbf84 }), unfilledArr[_0x15c25f(0x278)]({ 'input': $(this)[_0x15c25f(0x1b3)](_0x15c25f(0x29a)) })), empReqPassword[_0x15c25f(0x1e6)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)]('.active-answer-card')[_0x1c9882(0x1e9)](_0x1c9882(0x1df))['each'](function(_0x41c27b) {
            const _0x10f7e3 = _0x1c9882;
            skipTo = undefined, $(this)[_0x10f7e3(0x1b7)](_0x10f7e3(0x27c))['data'](_0x10f7e3(0x24c)) !== '' && (skipTo = $(this)[_0x10f7e3(0x1b7)](_0x10f7e3(0x27c))[_0x10f7e3(0x2cf)]('skip-to')), $(this)[_0x10f7e3(0x1b7)](_0x10f7e3(0x21b))[_0x10f7e3(0x1b3)](_0x10f7e3(0x1fa)) && (answer = $(this)[_0x10f7e3(0x1b7)](_0x10f7e3(0x21b))[_0x10f7e3(0x1b3)](_0x10f7e3(0x1fa)), selections = selections['filter'](_0x14a655 => _0x14a655[_0x10f7e3(0x23c)] !== x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x10f7e3(0x1b4)](_0x451d59 => _0x451d59[_0x10f7e3(0x23c)] !== skipTo - 0x2), selections['push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x10f7e3(0x247)](_0x182839 => _0x182839[_0x10f7e3(0x23c)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x10f7e3(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x2b4))[_0x1c9882(0x1a4)](function(_0x3ef814) {
            const _0x3c4a6c = _0x1c9882;
            let _0x751fda = $(this)[_0x3c4a6c(0x230)]()[_0x3c4a6c(0x1e6)],
                _0xa60517 = $(this)[_0x3c4a6c(0x2cf)](_0x3c4a6c(0x277)) ? $(this)[_0x3c4a6c(0x2cf)](_0x3c4a6c(0x277)) : 0x0;
            $(this)[_0x3c4a6c(0x230)]() !== '' && _0x751fda >= _0xa60517 ? empReqUrl = empReqUrl[_0x3c4a6c(0x1b4)](_0x5bd8b9 => _0x5bd8b9[_0x3c4a6c(0x150)] !== _0x3ef814) : (!empReqUrl[_0x3c4a6c(0x1e9)](_0x4fc918 => _0x4fc918[_0x3c4a6c(0x150)] === _0x3ef814) && empReqUrl['push']({ 'input': _0x3ef814 }), unfilledArr[_0x3c4a6c(0x278)]({ 'input': $(this)['attr']('name') })), empReqUrl['length'] === 0x0 && validateURL($(this)[_0x3c4a6c(0x230)]()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')[_0x1c9882(0x1e9)](_0x1c9882(0x2d9))[_0x1c9882(0x1a4)](function(_0x40de59) {
            const _0x26eb01 = _0x1c9882;
            skipTo = undefined, $(this)[_0x26eb01(0x1b7)]('[data-skip-to]')[_0x26eb01(0x2cf)](_0x26eb01(0x24c)) !== '' && (skipTo = $(this)[_0x26eb01(0x1b7)](_0x26eb01(0x27c))[_0x26eb01(0x2cf)]('skip-to')), $(this)[_0x26eb01(0x1b7)](_0x26eb01(0x21b))[_0x26eb01(0x1b3)](_0x26eb01(0x1fa)) && (answer = $(this)[_0x26eb01(0x1b7)](_0x26eb01(0x21b))[_0x26eb01(0x1b3)](_0x26eb01(0x1fa)), selections = selections[_0x26eb01(0x1b4)](_0x1bb9e1 => _0x1bb9e1[_0x26eb01(0x23c)] !== x), selections[_0x26eb01(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x26eb01(0x1b4)](_0x31eea4 => _0x31eea4[_0x26eb01(0x23c)] !== skipTo - 0x2), selections[_0x26eb01(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x26eb01(0x247)](_0x1fbbc0 => _0x1fbbc0[_0x26eb01(0x23c)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x26eb01(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x27e))[_0x1c9882(0x1a4)](function(_0x5aeb93) {
            const _0x22ccb0 = _0x1c9882;
            $(this)[_0x22ccb0(0x230)]() !== '' ? empReqDate = empReqDate['filter'](_0x1e47d6 => _0x1e47d6[_0x22ccb0(0x150)] !== _0x5aeb93) : (!empReqDate[_0x22ccb0(0x1e9)](_0x40f520 => _0x40f520[_0x22ccb0(0x150)] === _0x5aeb93) && empReqDate[_0x22ccb0(0x278)]({ 'input': _0x5aeb93 }), unfilledArr[_0x22ccb0(0x278)]({ 'input': $(this)[_0x22ccb0(0x1b3)]('name') })), empReqDate[_0x22ccb0(0x1e6)] === 0x0 ? dateFilled = !![] : dateFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)]('.active-answer-card')['find'](_0x1c9882(0x178))[_0x1c9882(0x1a4)](function(_0x300fcc) {
            const _0x553da7 = _0x1c9882;
            skipTo = undefined, $(this)['parents']('[data-skip-to]')['data'](_0x553da7(0x24c)) !== '' && (skipTo = $(this)[_0x553da7(0x1b7)](_0x553da7(0x27c))[_0x553da7(0x2cf)](_0x553da7(0x24c))), $(this)[_0x553da7(0x1b7)](_0x553da7(0x21b))['attr'](_0x553da7(0x1fa)) && (answer = $(this)[_0x553da7(0x1b7)](_0x553da7(0x21b))[_0x553da7(0x1b3)](_0x553da7(0x1fa)), selections = selections['filter'](_0x4352f5 => _0x4352f5[_0x553da7(0x23c)] !== x), selections[_0x553da7(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x553da7(0x1b4)](_0x4e06da => _0x4e06da[_0x553da7(0x23c)] !== skipTo - 0x2), selections[_0x553da7(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x480a69 => _0x480a69[_0x553da7(0x23c)] === x), selections[objIndex][_0x553da7(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)]('.active-answer-card')[_0x1c9882(0x1e9)](':input[type=\x22time\x22][required]')[_0x1c9882(0x1a4)](function(_0x3601d8) {
            const _0x351f6b = _0x1c9882;
            $(this)['val']() !== '' ? empReqTime = empReqTime[_0x351f6b(0x1b4)](_0x409c84 => _0x409c84[_0x351f6b(0x150)] !== _0x3601d8) : (!empReqTime['find'](_0x99f59a => _0x99f59a[_0x351f6b(0x150)] === _0x3601d8) && empReqTime[_0x351f6b(0x278)]({ 'input': _0x3601d8 }), unfilledArr[_0x351f6b(0x278)]({ 'input': $(this)[_0x351f6b(0x1b3)](_0x351f6b(0x29a)) })), empReqTime['length'] === 0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')['find'](':input[type=\x22time\x22]')['each'](function(_0xc6652f) {
            const _0xa0140d = _0x1c9882;
            skipTo = undefined, $(this)[_0xa0140d(0x1b7)]('[data-skip-to]')[_0xa0140d(0x2cf)]('skip-to') !== '' && (skipTo = $(this)['parents']('[data-skip-to]')['data'](_0xa0140d(0x24c))), $(this)[_0xa0140d(0x1b7)](_0xa0140d(0x21b))[_0xa0140d(0x1b3)](_0xa0140d(0x1fa)) && (answer = $(this)[_0xa0140d(0x1b7)](_0xa0140d(0x21b))[_0xa0140d(0x1b3)](_0xa0140d(0x1fa)), selections = selections[_0xa0140d(0x1b4)](_0x951933 => _0x951933[_0xa0140d(0x23c)] !== x), selections[_0xa0140d(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0xa0140d(0x1b4)](_0x524195 => _0x524195[_0xa0140d(0x23c)] !== skipTo - 0x2), selections[_0xa0140d(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x465c64 => _0x465c64[_0xa0140d(0x23c)] === x), selections[objIndex][_0xa0140d(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex][_0xa0140d(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x275))[_0x1c9882(0x1a4)](function(_0x31cd1b) {
            const _0x5146a1 = _0x1c9882;
            let _0xb221c5 = $(this)[_0x5146a1(0x230)]()[_0x5146a1(0x1e6)],
                _0x2c0460 = $(this)[_0x5146a1(0x2cf)]('min-character') ? $(this)[_0x5146a1(0x2cf)]('min-character') : 0x0;
            $(this)['val']() !== '' && _0xb221c5 >= _0x2c0460 ? empReqNum = empReqNum[_0x5146a1(0x1b4)](_0x271a2e => _0x271a2e['input'] !== _0x31cd1b) : (!empReqNum[_0x5146a1(0x1e9)](_0x21093f => _0x21093f['input'] === _0x31cd1b) && empReqNum[_0x5146a1(0x278)]({ 'input': _0x31cd1b }), unfilledArr[_0x5146a1(0x278)]({ 'input': $(this)['attr'](_0x5146a1(0x29a)) })), empReqNum[_0x5146a1(0x1e6)] === 0x0 ? numFilled = !![] : numFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))['find'](_0x1c9882(0x207))[_0x1c9882(0x1a4)](function(_0x505744) {
            const _0x4aca7b = _0x1c9882;
            skipTo = undefined, $(this)[_0x4aca7b(0x1b7)](_0x4aca7b(0x27c))[_0x4aca7b(0x2cf)](_0x4aca7b(0x24c)) !== '' && (skipTo = $(this)[_0x4aca7b(0x1b7)]('[data-skip-to]')['data']('skip-to')), $(this)[_0x4aca7b(0x1b7)]('[data-go-to]')[_0x4aca7b(0x1b3)](_0x4aca7b(0x1fa)) && (answer = $(this)['parents']('[data-go-to]')[_0x4aca7b(0x1b3)]('data-go-to'), selections = selections['filter'](_0x4d6d86 => _0x4d6d86[_0x4aca7b(0x23c)] !== x), selections[_0x4aca7b(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x4aca7b(0x1b4)](_0x41e1e8 => _0x41e1e8[_0x4aca7b(0x23c)] !== skipTo - 0x2), selections[_0x4aca7b(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x4aca7b(0x247)](_0x40d2b0 => _0x40d2b0[_0x4aca7b(0x23c)] === x), selections[objIndex][_0x4aca7b(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x4aca7b(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x1cc))['each'](function(_0x1140af) {
            const _0x4357ce = _0x1c9882;
            if ($(this)[_0x4357ce(0x230)]() !== '') {
                let _0x265fe8 = $(this)[_0x4357ce(0x230)]()[_0x4357ce(0x1e6)],
                    _0x3009b0 = $(this)[_0x4357ce(0x2cf)](_0x4357ce(0x277)) ? $(this)['data'](_0x4357ce(0x277)) : 0x0;
                if ($(this)['data'](_0x4357ce(0x1c0))) {
                    var _0x586d2f = phoneAutoFormat($(this)[_0x4357ce(0x2cf)](_0x4357ce(0x1c0)));
                    $(this)[_0x4357ce(0x230)](_0x586d2f($(this)[_0x4357ce(0x230)]()));
                }
                phoneValidation($(this)[_0x4357ce(0x230)](), _0x265fe8, _0x3009b0) ? empReqTel = empReqTel[_0x4357ce(0x1b4)](_0x3af0d0 => _0x3af0d0['input'] !== _0x1140af) : empReqTel['push']({ 'input': _0x1140af });
            } else !empReqTel[_0x4357ce(0x1e9)](_0x7c47a9 => _0x7c47a9[_0x4357ce(0x150)] === _0x1140af) && empReqTel['push']({ 'input': _0x1140af }), unfilledArr[_0x4357ce(0x278)]({ 'input': $(this)[_0x4357ce(0x1b3)](_0x4357ce(0x29a)) });
            empReqTel[_0x4357ce(0x1e6)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))['find'](_0x1c9882(0x29d))[_0x1c9882(0x1a4)](function(_0x101dfa) {
            const _0x1dcdfa = _0x1c9882;
            skipTo = undefined, $(this)[_0x1dcdfa(0x1b7)](_0x1dcdfa(0x27c))[_0x1dcdfa(0x2cf)](_0x1dcdfa(0x24c)) !== '' && (skipTo = $(this)[_0x1dcdfa(0x1b7)]('[data-skip-to]')[_0x1dcdfa(0x2cf)]('skip-to')), $(this)[_0x1dcdfa(0x1b7)](_0x1dcdfa(0x21b))['attr'](_0x1dcdfa(0x1fa)) && (answer = $(this)[_0x1dcdfa(0x1b7)](_0x1dcdfa(0x21b))['attr'](_0x1dcdfa(0x1fa)), selections = selections[_0x1dcdfa(0x1b4)](_0x33f945 => _0x33f945['step'] !== x), selections[_0x1dcdfa(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections['filter'](_0x9d6d04 => _0x9d6d04[_0x1dcdfa(0x23c)] !== skipTo - 0x2), selections[_0x1dcdfa(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1dcdfa(0x247)](_0x37223c => _0x37223c[_0x1dcdfa(0x23c)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1dcdfa(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x209))[_0x1c9882(0x1a4)](function(_0x37c245) {
            const _0x315dad = _0x1c9882;
            $(this)[_0x315dad(0x230)]() !== '' ? empReqFile = empReqFile['filter'](_0x43ac42 => _0x43ac42[_0x315dad(0x150)] !== _0x37c245) : (!empReqFile[_0x315dad(0x1e9)](_0x564323 => _0x564323[_0x315dad(0x150)] === _0x37c245) && empReqFile['push']({ 'input': _0x37c245 }), unfilledArr['push']({ 'input': $(this)[_0x315dad(0x1b3)]('name') })), empReqFile[_0x315dad(0x1e6)] === 0x0 ? fileFilled = !![] : fileFilled = ![];
        }), $(steps[x])['find'](_0x1c9882(0x195))['find'](_0x1c9882(0x26f))[_0x1c9882(0x1a4)](function(_0xa00a10) {
            const _0x65732b = _0x1c9882;
            skipTo = undefined, $(this)[_0x65732b(0x1b7)](_0x65732b(0x27c))[_0x65732b(0x2cf)](_0x65732b(0x24c)) !== '' && (skipTo = $(this)[_0x65732b(0x1b7)](_0x65732b(0x27c))[_0x65732b(0x2cf)](_0x65732b(0x24c))), $(this)[_0x65732b(0x1b7)](_0x65732b(0x21b))['attr']('data-go-to') && (answer = $(this)[_0x65732b(0x1b7)]('[data-go-to]')[_0x65732b(0x1b3)]('data-go-to'), selections = selections[_0x65732b(0x1b4)](_0x86b0b1 => _0x86b0b1[_0x65732b(0x23c)] !== x), selections[_0x65732b(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x65732b(0x1b4)](_0x111b59 => _0x111b59['step'] !== skipTo - 0x2), selections[_0x65732b(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0xde5ef5 => _0xde5ef5[_0x65732b(0x23c)] === x), selections[objIndex][_0x65732b(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x65732b(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)]('select[required]')[_0x1c9882(0x1a4)](function(_0x3300eb) {
            const _0x1325ba = _0x1c9882;
            $(this)['val']() !== null && $(this)[_0x1325ba(0x230)]() !== '' ? empReqSelect = empReqSelect['filter'](_0x2fa5b0 => _0x2fa5b0[_0x1325ba(0x150)] !== _0x3300eb) : (!empReqSelect[_0x1325ba(0x1e9)](_0x41b89b => _0x41b89b[_0x1325ba(0x150)] === _0x3300eb) && empReqSelect[_0x1325ba(0x278)]({ 'input': _0x3300eb }), unfilledArr[_0x1325ba(0x278)]({ 'input': $(this)[_0x1325ba(0x1b3)]('name') })), empReqSelect[_0x1325ba(0x1e6)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])['find'](_0x1c9882(0x195))['find'](_0x1c9882(0x20d))[_0x1c9882(0x1a4)](function(_0x20cb7b) {
            const _0x506cd1 = _0x1c9882;
            skipTo = undefined, $(this)[_0x506cd1(0x1b7)](_0x506cd1(0x27c))[_0x506cd1(0x2cf)]('skip-to') !== '' && (skipTo = $(this)[_0x506cd1(0x1b7)](_0x506cd1(0x27c))['data'](_0x506cd1(0x24c))), $(this)[_0x506cd1(0x1b7)](_0x506cd1(0x21b))[_0x506cd1(0x1b3)](_0x506cd1(0x1fa)) && (answer = $(this)[_0x506cd1(0x1b7)]('[data-go-to]')[_0x506cd1(0x1b3)](_0x506cd1(0x1fa)), selections = selections[_0x506cd1(0x1b4)](_0x5c149c => _0x5c149c['step'] !== x), selections[_0x506cd1(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x506cd1(0x1b4)](_0x4a2de8 => _0x4a2de8[_0x506cd1(0x23c)] !== skipTo - 0x2), selections[_0x506cd1(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x506cd1(0x247)](_0x4e509e => _0x4e509e[_0x506cd1(0x23c)] === x), selections[objIndex][_0x506cd1(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x506cd1(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))['find'](_0x1c9882(0x1e8))[_0x1c9882(0x1a4)](function(_0x964f90) {
            const _0x98625e = _0x1c9882;
            let _0xe5f5e0 = $(this)[_0x98625e(0x230)]()[_0x98625e(0x1e6)],
                _0x585a5c = $(this)[_0x98625e(0x2cf)](_0x98625e(0x277)) ? $(this)[_0x98625e(0x2cf)]('min-character') : 0x0;
            $(this)[_0x98625e(0x230)]() !== '' && _0xe5f5e0 >= _0x585a5c ? empReqTextarea = empReqTextarea[_0x98625e(0x1b4)](_0x582bbc => _0x582bbc[_0x98625e(0x150)] !== _0x964f90) : (!empReqTextarea['find'](_0x45d674 => _0x45d674[_0x98625e(0x150)] === _0x964f90) && empReqTextarea[_0x98625e(0x278)]({ 'input': _0x964f90 }), unfilledArr['push']({ 'input': $(this)[_0x98625e(0x1b3)](_0x98625e(0x29a)) })), empReqTextarea[_0x98625e(0x1e6)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])['find']('.active-answer-card')['find']('textarea')['each'](function(_0x1d9c97) {
            const _0x1e647a = _0x1c9882;
            skipTo = undefined, $(this)[_0x1e647a(0x1b7)](_0x1e647a(0x27c))[_0x1e647a(0x2cf)]('skip-to') !== '' && (skipTo = $(this)['parents'](_0x1e647a(0x27c))[_0x1e647a(0x2cf)](_0x1e647a(0x24c))), $(this)[_0x1e647a(0x1b7)](_0x1e647a(0x21b))[_0x1e647a(0x1b3)](_0x1e647a(0x1fa)) && (answer = $(this)[_0x1e647a(0x1b7)](_0x1e647a(0x21b))[_0x1e647a(0x1b3)](_0x1e647a(0x1fa)), selections = selections[_0x1e647a(0x1b4)](_0x272e48 => _0x272e48[_0x1e647a(0x23c)] !== x), selections[_0x1e647a(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1e647a(0x1b4)](_0x273a0d => _0x273a0d[_0x1e647a(0x23c)] !== skipTo - 0x2), selections[_0x1e647a(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1e647a(0x247)](_0x2d86de => _0x2d86de[_0x1e647a(0x23c)] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1e647a(0x175)] = x));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))['find'](_0x1c9882(0x16d))[_0x1c9882(0x1a4)](function(_0xab260f) {
            const _0x31157a = _0x1c9882;
            $(this)[_0x31157a(0x230)]() !== '' ? validateEmail($(this)[_0x31157a(0x230)](), $(this)[_0x31157a(0x2cf)](_0x31157a(0x287)), $(this)[_0x31157a(0x1b3)](_0x31157a(0x29a))) : (emailFilled = ![], unfilledArr[_0x31157a(0x278)]({ 'input': $(this)[_0x31157a(0x1b3)](_0x31157a(0x29a)) }));
        }), $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x260))['each'](function(_0x3b77a3) {
            const _0x1f5013 = _0x1c9882;
            skipTo = undefined, $(this)[_0x1f5013(0x1b7)](_0x1f5013(0x27c))[_0x1f5013(0x2cf)](_0x1f5013(0x24c)) !== '' && (skipTo = $(this)[_0x1f5013(0x1b7)]('[data-skip-to]')[_0x1f5013(0x2cf)](_0x1f5013(0x24c))), $(this)[_0x1f5013(0x1b7)](_0x1f5013(0x21b))['attr'](_0x1f5013(0x1fa)) && (answer = $(this)[_0x1f5013(0x1b7)](_0x1f5013(0x21b))[_0x1f5013(0x1b3)](_0x1f5013(0x1fa)), selections = selections['filter'](_0x6577aa => _0x6577aa[_0x1f5013(0x23c)] !== x), console[_0x1f5013(0x1f4)](_0x1f5013(0x1f2), selections, x), selections[_0x1f5013(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x1f5013(0x1b4)](_0x213b3b => _0x213b3b['step'] !== skipTo - 0x2), selections[_0x1f5013(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x1f5013(0x247)](_0x291f0e => _0x291f0e['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x1f5013(0x175)] = x));
        });
    }
    $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x1ba))['is'](':checked') && (selArr = [], $(steps)[_0x1c9882(0x1e9)](_0x1c9882(0x16c))[_0x1c9882(0x1a4)](function(_0x1f8ed3, _0x25913a) {
        const _0x1178d6 = _0x1c9882;
        selArr[_0x1178d6(0x278)]({ 'selected': $(this)['data'](_0x1178d6(0x18a)) });
    }), selString = [], selArr[_0x1c9882(0x2d5)](_0x32cba4 => selString['push'](_0x32cba4[_0x1c9882(0x18a)])), $(steps[x])['find'](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x22c))[_0x1c9882(0x1a4)](function() {
        const _0x3a2039 = _0x1c9882;
        skipTo = undefined;
        if ($(this)['parents'](_0x3a2039(0x27c))[_0x3a2039(0x2cf)](_0x3a2039(0x24c))) skipTo = $(this)[_0x3a2039(0x1b7)](_0x3a2039(0x27c))[_0x3a2039(0x2cf)](_0x3a2039(0x24c));
        else $(this)[_0x3a2039(0x2cf)](_0x3a2039(0x24c)) && (skipTo = $(this)['data'](_0x3a2039(0x24c)));
        selections = selections[_0x3a2039(0x1b4)](_0x1d4413 => _0x1d4413['step'] !== x);
        if ($(this)[_0x3a2039(0x2cf)](_0x3a2039(0x2e3))) answer = $(this)[_0x3a2039(0x1b3)](_0x3a2039(0x1fa)), selections[_0x3a2039(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3a2039(0x1b4)](_0x2f7484 => _0x2f7484[_0x3a2039(0x23c)] !== skipTo - 0x2), selections[_0x3a2039(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections['findIndex'](_0x34047a => _0x34047a[_0x3a2039(0x23c)] === x), selections[objIndex][_0x3a2039(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3a2039(0x175)] = x);
        else $(this)['parents']('[data-go-to]')[_0x3a2039(0x2cf)](_0x3a2039(0x2e3)) && (answer = $(this)['parents'](_0x3a2039(0x21b))[_0x3a2039(0x2cf)]('go-to'), selections[_0x3a2039(0x278)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x3a2039(0x1b4)](_0x1f1d49 => _0x1f1d49[_0x3a2039(0x23c)] !== skipTo - 0x2), selections[_0x3a2039(0x278)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x3a2039(0x247)](_0x2c0471 => _0x2c0471['step'] === x), selections[objIndex][_0x3a2039(0x1e1)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x3a2039(0x175)] = x));
    }), logicExtra ? ($(steps[x])['find'](_0x1c9882(0x195))[_0x1c9882(0x1e9)](_0x1c9882(0x2d3))[_0x1c9882(0x2cf)](_0x1c9882(0x27a)) === !![] || $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x222))[_0x1c9882(0x2cf)](_0x1c9882(0x27a)) === !![]) && (skip && selections[_0x1c9882(0x1b4)](_0x6397a0 => _0x6397a0[_0x1c9882(0x23c)] === x)['length'] > 0x0 && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x1cb))[_0x1c9882(0x2cf)]('radio-delay')))) : $(steps[x])['find'](_0x1c9882(0x2d3))[_0x1c9882(0x2cf)](_0x1c9882(0x27a)) === !![] && (skip && (textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 && setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[x])[_0x1c9882(0x1e9)](_0x1c9882(0x1cb))[_0x1c9882(0x2cf)]('radio-delay'))))), inputFilled && fileFilled && numFilled && checkboxFilled && telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled && passwordFilled && urlFilled ? enableBtn() : disableBtn(), andLogic(), cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0xbdf2cc = _0x5652de;
    $('[data-text=\x22error-message\x22]')[_0xbdf2cc(0x211)](), unfilledArr[_0xbdf2cc(0x1e6)] > 0x0 && unfilledArr[_0xbdf2cc(0x2d5)](function(_0x2a5b6e) {
        const _0x541c29 = _0xbdf2cc;
        $(_0x541c29(0x14f) + _0x2a5b6e[_0x541c29(0x150)] + '\x22]')['siblings'](_0x541c29(0x2cb))[_0x541c29(0x1d0)](), $(_0x541c29(0x14f) + _0x2a5b6e['input'] + '\x22]')[_0x541c29(0x1b7)]()[_0x541c29(0x2ce)](_0x541c29(0x2cb))[_0x541c29(0x1d0)](), $(_0x541c29(0x161) + _0x2a5b6e[_0x541c29(0x150)] + '\x22]')[_0x541c29(0x15e)](_0x541c29(0x2cb))[_0x541c29(0x1d0)](), $('select[name=\x22' + _0x2a5b6e[_0x541c29(0x150)] + '\x22]')[_0x541c29(0x15e)](_0x541c29(0x2cb))[_0x541c29(0x1d0)]();
    });
}

function resetInputErrorMessage(_0x117b63) {
    const _0x54e7cf = _0x5652de;
    $(_0x54e7cf(0x14f) + _0x117b63 + '\x22]')[_0x54e7cf(0x15e)](_0x54e7cf(0x2cb))[_0x54e7cf(0x211)](), $(_0x54e7cf(0x14f) + _0x117b63 + '\x22]')[_0x54e7cf(0x1b7)]()['children'](_0x54e7cf(0x2cb))[_0x54e7cf(0x211)](), $(_0x54e7cf(0x161) + _0x117b63 + '\x22]')[_0x54e7cf(0x15e)]('[data-text=\x22error-message\x22]')[_0x54e7cf(0x211)](), $(_0x54e7cf(0x206) + _0x117b63 + '\x22]')[_0x54e7cf(0x15e)](_0x54e7cf(0x2cb))[_0x54e7cf(0x211)]();
}

function increaseCurstep() {
    const _0xddae38 = _0x5652de;
    countCard ? (curStep = curStep + 0x1, $(_0xddae38(0x29e))[_0xddae38(0x20b)](steps[_0xddae38(0x1e6)])) : $(steps[x])[_0xddae38(0x2cf)](_0xddae38(0x1f8)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(_0xddae38(0x1c3))[_0xddae38(0x20b)](curStep);
}

function decreaseCurstep() {
    const _0x30dfd7 = _0x5652de;
    countCard ? (curStep = curStep - 0x1, $(_0x30dfd7(0x29e))[_0x30dfd7(0x20b)](steps[_0x30dfd7(0x1e6)])) : $(steps[x])[_0x30dfd7(0x2cf)](_0x30dfd7(0x1f8)) ? curStep = curStep - 0x0 : curStep = curStep - 0x1, $(_0x30dfd7(0x1c3))[_0x30dfd7(0x20b)](curStep);
}
$(_0x5652de(0x1a7))['on']('click', function(_0xa632cd) {
    const _0x1c5f90 = _0x5652de;
    $(this)['data'](_0x1c5f90(0x1d6)) && (redirectTo = $(this)[_0x1c5f90(0x2cf)](_0x1c5f90(0x1d6)));
    !$(this)[_0x1c5f90(0x2cf)]('new-tab') && (newTab = $(this)[_0x1c5f90(0x2cf)](_0x1c5f90(0x2e4)));
    successCard = $(this)['data'](_0x1c5f90(0x2b0)), _0xa632cd['preventDefault'](), _0xa632cd[_0x1c5f90(0x2cd)]();
    const _0x1e92c2 = new URLSearchParams(window['location'][_0x1c5f90(0x187)]),
        _0x46d38c = (_0x16c1e7, _0x353d32) => {
            const _0x2185f4 = _0x1c5f90,
                _0x2acfb3 = document[_0x2185f4(0x162)]('[data-hidden-input=\x22' + _0x16c1e7 + '\x22]');
            _0x2acfb3 && (_0x2acfb3[_0x2185f4(0x2a0)] = _0x353d32);
        };
    _0x46d38c(_0x1c5f90(0x146), _0x1e92c2[_0x1c5f90(0x2c8)](_0x1c5f90(0x146)) || document[_0x1c5f90(0x146)] || _0x1c5f90(0x219)), _0x46d38c('user-agent', navigator[_0x1c5f90(0x1e7)]), _0x46d38c(_0x1c5f90(0x169), new Date()[_0x1c5f90(0x238)]()), _0x46d38c(_0x1c5f90(0x18f), Intl[_0x1c5f90(0x1da)]()[_0x1c5f90(0x297)]()[_0x1c5f90(0x19c)]), _0x46d38c(_0x1c5f90(0x1a2), window[_0x1c5f90(0x1e5)][_0x1c5f90(0x1b1)] + 'x' + window[_0x1c5f90(0x1e5)][_0x1c5f90(0x181)]), _0x46d38c(_0x1c5f90(0x15b), _0x1c5f90(0x271));
    const _0xef50fd = () => {
        const _0x86fda9 = _0x1c5f90,
            _0x39f4e6 = document['querySelector']('[data-hidden-input=\x22page-visit-duration\x22]');
        if (_0x39f4e6) {
            const _0x151292 = localStorage[_0x86fda9(0x21c)](_0x86fda9(0x2c4));
            console[_0x86fda9(0x1f4)](_0x151292);
            if (_0x151292) {
                const _0x469f8c = Math[_0x86fda9(0x1f9)]((Date['now']() - parseInt(_0x151292)) / 0x3e8);
                _0x39f4e6[_0x86fda9(0x2a0)] = _0x469f8c + _0x86fda9(0x1d5);
            } else _0x39f4e6[_0x86fda9(0x2a0)] = _0x86fda9(0x271);
        }
    };
    _0xef50fd(), logicExtra && ($(this)['prop'](_0x1c5f90(0x144), !![]), $(steps)[_0x1c5f90(0x1e9)](_0x1c5f90(0x1f0))[_0x1c5f90(0x1be)]('required', ![])), localStorage[_0x1c5f90(0x200)](_0x1c5f90(0x225)), localStorage[_0x1c5f90(0x200)](_0x1c5f90(0x2c4)), fill ? ($(this)[_0x1c5f90(0x2cf)](_0x1c5f90(0x250)) ? (console[_0x1c5f90(0x1f4)]($(this)['data']('wait')), $(this)['text']($(this)[_0x1c5f90(0x2cf)](_0x1c5f90(0x250)))) : $(this)[_0x1c5f90(0x230)](_0x1c5f90(0x279))[_0x1c5f90(0x20b)](_0x1c5f90(0x279)), $(_0x1c5f90(0x2c7))[_0x1c5f90(0x212)](), $(_0x1c5f90(0x1ae))[_0x1c5f90(0x1e6)] > 0x0 && (grecaptcha[_0x1c5f90(0x286)]()['length'] === 0x0 && (form[_0x1c5f90(0x1e9)](_0x1c5f90(0x1a7))['text'](oldSubmitText), form[_0x1c5f90(0x1e9)](_0x1c5f90(0x1a7))[_0x1c5f90(0x230)](oldSubmitText))), customError && $(_0x1c5f90(0x2cb))[_0x1c5f90(0x211)]()) : customError && displayErrorMessage();
});

function nextStep() {
    const _0x754c3a = _0x5652de;
    customError ? ($(_0x754c3a(0x2cb))[_0x754c3a(0x211)](), fill ? (x++, increaseCurstep(), progress = x, x <= steps[_0x754c3a(0x1e6)] - 0x1 && (updateStep(), memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x > progress && (progress = x), x <= steps[_0x754c3a(0x1e6)] - 0x1 && (updateStep(), memory && saveFilledInput())), andLogic();
}

function backStep() {
    const _0x26d4af = _0x5652de;
    customError && $(_0x26d4af(0x2cb))[_0x26d4af(0x211)](), decreaseCurstep(), x > 0x0 && ($(progressbar[x])[_0x26d4af(0x24a)](_0x26d4af(0x1a3)), selections[_0x26d4af(0x1b4)](_0x375eff => _0x375eff['skipTo'] === x)['length'] > 0x0 ? x = parseInt(getSafe(() => selections[_0x26d4af(0x1b4)](_0x4ddd6e => _0x4ddd6e[_0x26d4af(0x1e1)] === x)[0x0][_0x26d4af(0x175)])) : x--, updateStep()), ($(steps[x])['find']('[data-radio-skip]:visible')['data']('radio-skip') === !![] || $(steps[x])[_0x26d4af(0x1e9)](_0x26d4af(0x195))[_0x26d4af(0x1e9)](_0x26d4af(0x2d3))[_0x26d4af(0x2cf)](_0x26d4af(0x27a)) === !![] || $(steps[x])[_0x26d4af(0x1e9)](_0x26d4af(0x222))[_0x26d4af(0x2cf)]('radio-skip') === !![]) && (all_data = all_data[_0x26d4af(0x1b4)](_0x22fa4b => _0x22fa4b['field'] !== $(steps[x])[_0x26d4af(0x1e9)](_0x26d4af(0x1a5))[_0x26d4af(0x1b3)]('name')), $('[data-input-field=\x22' + $(steps[x])[_0x26d4af(0x1e9)](_0x26d4af(0x1a5))[_0x26d4af(0x1b3)](_0x26d4af(0x29a)) + '\x22]')[_0x26d4af(0x211)](), $(steps[x])[_0x26d4af(0x1e9)](_0x26d4af(0x27d))[_0x26d4af(0x1be)](_0x26d4af(0x19e), ![]), $(steps[x])[_0x26d4af(0x1e9)](_0x26d4af(0x293))[_0x26d4af(0x24a)](_0x26d4af(0x288)), validation());
}
weightedSelectionRange && $('[data-selection]')[_0x5652de(0x1a4)](function() {
    const _0x2abcd4 = _0x5652de;
    $(this)['append'](_0x2abcd4(0x155) + $(this)[_0x2abcd4(0x2cf)](_0x2abcd4(0x180)) + _0x2abcd4(0x159));
});

function selectionQuiz() {
    const _0x4ffa36 = _0x5652de;
    if ($(this)[_0x4ffa36(0x1e9)]('[data-btn=\x22check\x22]')) {
        $(_0x4ffa36(0x17f))['hide'](), $(_0x4ffa36(0x21d))[_0x4ffa36(0x211)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr[_0x4ffa36(0x2d5)](function(_0x537f99) {
                const _0x1b6c1a = _0x4ffa36;
                selTotal = selTotal + _0x537f99[_0x1b6c1a(0x18a)];
            }), $('[data-text=\x22total-weight\x22]')['text'](selTotal);
            if ($(_0x4ffa36(0x2d0) + selTotal + '\x22]')['length'] > 0x0) $(_0x4ffa36(0x2d0) + selTotal + '\x22]')[_0x4ffa36(0x1d0)]();
            else $(_0x4ffa36(0x17e) + selTotal + ')') ? $('[data-range]:contains(' + selTotal + ')')[_0x4ffa36(0x185)]('[data-selection]')['eq'](0x0)[_0x4ffa36(0x2ae)]() : $('[data-selection=\x22other\x22]')['fadeIn']();
        } else {
            let _0xc3c61f = -0x1;
            $('[data-selection]')[_0x4ffa36(0x1a4)](function(_0x3f8b0d) {
                const _0x3b6c06 = _0x4ffa36;
                $($(_0x3b6c06(0x17f))[_0x3f8b0d])[_0x3b6c06(0x2cf)](_0x3b6c06(0x180))[_0x3b6c06(0x2a3)](selString[_0x3b6c06(0x184)]()) && (_0xc3c61f = _0x3f8b0d);
            }), _0xc3c61f > -0x1 ? $($('[data-selection]')[_0xc3c61f])[_0x4ffa36(0x1d0)]() : $(_0x4ffa36(0x23e))['fadeIn']();
        }
    }
}

function triggerInputAllData() {
    const _0x3fccc1 = _0x5652de;
    if (savedFilledInput && memory) savedFilledInput[_0x3fccc1(0x2d5)](_0x277527 => {
        const _0x24c1bb = _0x3fccc1;
        var _0x33e0d5 = $(_0x24c1bb(0x14f) + _0x277527[_0x24c1bb(0x28e)] + _0x24c1bb(0x2d8) + _0x277527['value'] + _0x24c1bb(0x1cd)),
            _0x59359e = $(_0x24c1bb(0x14f) + _0x277527[_0x24c1bb(0x28e)] + _0x24c1bb(0x1cd)),
            _0x3c6ba1 = $(_0x24c1bb(0x161) + _0x277527[_0x24c1bb(0x28e)] + _0x24c1bb(0x1cd)),
            _0x35dc9f = $('input[type=\x22checkbox\x22][name=\x22' + _0x277527['inputName'] + '\x22]'),
            _0x4a2ce4 = $('input[type=\x22radio\x22][name=\x22' + _0x277527[_0x24c1bb(0x28e)] + _0x24c1bb(0x2d8) + _0x277527[_0x24c1bb(0x2a0)] + _0x24c1bb(0x1cd));
        if (_0x33e0d5[_0x24c1bb(0x1b3)]('type') !== _0x24c1bb(0x2af)) {
            if (_0x33e0d5[_0x24c1bb(0x1b3)](_0x24c1bb(0x273)) === _0x24c1bb(0x1ec) && !_0x33e0d5[_0x24c1bb(0x1b7)](_0x24c1bb(0x22a))[_0x24c1bb(0x2cf)](_0x24c1bb(0x27a))) _0x33e0d5[_0x24c1bb(0x243)](), _0x33e0d5[_0x24c1bb(0x15e)](_0x24c1bb(0x1c8))['addClass'](_0x24c1bb(0x288)), _0x33e0d5[_0x24c1bb(0x1a1)](_0x24c1bb(0x150));
            else _0x277527[_0x24c1bb(0x2a0)] === 'on' ? (_0x59359e[_0x24c1bb(0x243)](), _0x59359e[_0x24c1bb(0x15e)](_0x24c1bb(0x226))[_0x24c1bb(0x1db)]('w--redirected-checked'), _0x59359e[_0x24c1bb(0x1a1)](_0x24c1bb(0x150))) : (_0x59359e[_0x24c1bb(0x230)](_0x277527[_0x24c1bb(0x2a0)]), _0x3c6ba1[_0x24c1bb(0x230)](_0x277527['value']), $(_0x24c1bb(0x27f))[_0x24c1bb(0x1e9)](_0x24c1bb(0x2a5) + _0x277527[_0x24c1bb(0x2a0)] + '\x22]')[_0x24c1bb(0x1be)]('selected', !![]), _0x59359e[_0x24c1bb(0x1a1)](_0x24c1bb(0x150)), _0x59359e[_0x24c1bb(0x1a1)](_0x24c1bb(0x270)));
            const _0x5bad29 = _0x4a2ce4[_0x24c1bb(0x2cf)](_0x24c1bb(0x2d2)),
                _0x5069c6 = _0x35dc9f['data'](_0x24c1bb(0x2d2));
            _0x4a2ce4[_0x24c1bb(0x185)]()[_0x24c1bb(0x1db)](_0x5bad29), _0x35dc9f[_0x24c1bb(0x185)]()[_0x24c1bb(0x1db)](_0x5069c6);
        }
    });
    else _params && (getParams(), searchQ['forEach'](_0x9b72bf => {
        const _0x1ae595 = _0x3fccc1;
        if ($('input[name=\x22' + _0x9b72bf['inputName'] + _0x1ae595(0x2d8) + _0x9b72bf['value'] + _0x1ae595(0x1cd))[_0x1ae595(0x1b3)](_0x1ae595(0x273)) !== _0x1ae595(0x2af)) {
            if ($(_0x1ae595(0x14f) + _0x9b72bf[_0x1ae595(0x25b)] + '\x22][value=\x22' + _0x9b72bf['val'] + _0x1ae595(0x1cd))[_0x1ae595(0x1b3)]('type') === _0x1ae595(0x1ec)) $(_0x1ae595(0x14f) + _0x9b72bf[_0x1ae595(0x25b)] + _0x1ae595(0x2d8) + _0x9b72bf[_0x1ae595(0x230)] + _0x1ae595(0x1cd))[_0x1ae595(0x243)](), $(_0x1ae595(0x14f) + _0x9b72bf[_0x1ae595(0x25b)] + '\x22][value=\x22' + _0x9b72bf[_0x1ae595(0x230)] + _0x1ae595(0x1cd))[_0x1ae595(0x15e)](_0x1ae595(0x1c8))['addClass'](_0x1ae595(0x288)), $(_0x1ae595(0x14f) + _0x9b72bf[_0x1ae595(0x25b)] + _0x1ae595(0x2d8) + _0x9b72bf[_0x1ae595(0x230)] + _0x1ae595(0x1cd))[_0x1ae595(0x1a1)](_0x1ae595(0x150));
            else _0x9b72bf['val'] === 'on' ? ($(_0x1ae595(0x14f) + _0x9b72bf['key'] + _0x1ae595(0x1cd))[_0x1ae595(0x243)](), $(_0x1ae595(0x14f) + _0x9b72bf['key'] + _0x1ae595(0x1cd))[_0x1ae595(0x15e)](_0x1ae595(0x226))[_0x1ae595(0x1db)](_0x1ae595(0x288)), $(_0x1ae595(0x14f) + _0x9b72bf['key'] + '\x22]')[_0x1ae595(0x1a1)](_0x1ae595(0x150))) : ($(_0x1ae595(0x14f) + _0x9b72bf[_0x1ae595(0x25b)] + _0x1ae595(0x1cd))[_0x1ae595(0x230)](_0x9b72bf[_0x1ae595(0x230)]), $(_0x1ae595(0x161) + _0x9b72bf[_0x1ae595(0x25b)] + _0x1ae595(0x1cd))[_0x1ae595(0x230)](_0x9b72bf['val']), $(_0x1ae595(0x206) + _0x9b72bf['key'] + _0x1ae595(0x1cd))[_0x1ae595(0x1e9)](_0x1ae595(0x2a5) + _0x9b72bf['val'] + '\x22]')[_0x1ae595(0x1be)](_0x1ae595(0x18a), !![]), $(_0x1ae595(0x14f) + _0x9b72bf[_0x1ae595(0x25b)] + _0x1ae595(0x1cd))['trigger']('input'), $(_0x1ae595(0x14f) + _0x9b72bf['key'] + _0x1ae595(0x1cd))[_0x1ae595(0x1a1)](_0x1ae595(0x270)));
        }
    }));
}
$(_0x5652de(0x1bd))['on']('click', function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $('[data-form=\x22back-btn\x22]')['on'](_0x5652de(0x243), function() { next = ![], back = !![], backStep(); }), $(steps)['find'](':input')['not'](_0x5652de(0x20e))['on']('input', function(_0x5e3823) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x5652de(0x1e9)](_0x5652de(0x27d))['on']('click', function() { skip = !![], validation(), addClickClass(); });
$('[data-clickable-all]')[_0x5652de(0x2cf)](_0x5652de(0x2e6)) ? $(_0x5652de(0x263))[_0x5652de(0x24a)](_0x5652de(0x2e1)) : $(_0x5652de(0x263))[_0x5652de(0x1db)](_0x5652de(0x2e1));

function clickableIndicator() {
    const _0x1c350c = _0x5652de;
    $('[data-clickable]')['data'](_0x1c350c(0x208)) && ($(_0x1c350c(0x1ca))['removeClass']('current'), $(_0x1c350c(0x2d7))[_0x1c350c(0x2cf)](_0x1c350c(0x2e6)) ? (x = $(this)[_0x1c350c(0x183)](), updateStep()) : $(this)['index']() <= progress && (x = $(this)[_0x1c350c(0x183)](), updateStep())), $(_0x1c350c(0x1c3))[_0x1c350c(0x20b)](x + 0x1);
}
$(_0x5652de(0x263))['on'](_0x5652de(0x243), clickableIndicator), excludeCount = !$('[data-form=\x22multistep\x22]')['data'](_0x5652de(0x15f)), steps[_0x5652de(0x1a4)](function(_0x3222a0) {
    const _0xe07a8f = _0x5652de,
        _0x3b6e32 = $(this)[_0xe07a8f(0x2cf)](_0xe07a8f(0x1f8));
    console[_0xe07a8f(0x1f4)](excludeCount), _0x3b6e32 && excludeCount && $(_0xe07a8f(0x263))['eq'](_0x3222a0)[_0xe07a8f(0x211)]();
});
$(_0x5652de(0x2c7))[_0x5652de(0x2cf)](_0x5652de(0x249)) && ($(_0x5652de(0x21b))[_0x5652de(0x1a4)](function() {
    const _0x849f60 = _0x5652de;
    $(this)['append'](_0x849f60(0x291), $(this)[_0x849f60(0x2cf)](_0x849f60(0x2e3)));
}), $('[data-answer]')[_0x5652de(0x1a4)](function() {
    const _0x1f67f8 = _0x5652de;
    $(this)['append'](_0x1f67f8(0x283), $(this)[_0x1f67f8(0x2cf)](_0x1f67f8(0x2bf)));
}));

function resetFormly() {
    const _0x2469b8 = _0x5652de;
    $(_0x2469b8(0x2c7))['trigger']('reset'), $(_0x2469b8(0x2c7))[_0x2469b8(0x1b7)]()[_0x2469b8(0x1e9)]('.w-form-done')[_0x2469b8(0x211)](), x = 0x0, updateStep(), $(_0x2469b8(0x2c7))[_0x2469b8(0x2ae)](), $(_0x2469b8(0x1a7))[_0x2469b8(0x20b)](oldSubmitText), $(_0x2469b8(0x1a7))[_0x2469b8(0x230)](oldSubmitText), $(_0x2469b8(0x1c3))['text'](0x1), $('[data-form=\x22multistep\x22]')[_0x2469b8(0x1e9)](_0x2469b8(0x1fc))[_0x2469b8(0x15e)](_0x2469b8(0x226))[_0x2469b8(0x24a)](_0x2469b8(0x288));
}
$(document)[_0x5652de(0x176)](function(_0x45d1db, _0x56f318, _0x3359c5) {
    const _0x190ceb = _0x5652de;
    if (_0x3359c5[_0x190ceb(0x256)][_0x190ceb(0x2a3)](_0x190ceb(0x24e))) {
        const _0x308608 = _0x56f318[_0x190ceb(0x1c4)] === 0xc8,
            _0x2c1da3 = 'redirect-form-hehexd';
        redirectTo && _0x308608 && (newTab ? window[_0x190ceb(0x22d)](redirectTo, '_blank') : setTimeout(() => {
            const _0x42d9c9 = _0x190ceb;
            location[_0x42d9c9(0x158)] = redirectTo;
        }, redirectDelay)), _0x308608 && successCard !== '' && $(_0x190ceb(0x2db) + successCard + '\x22]')[_0x190ceb(0x1d0)](), _0x308608 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x308608 && ($(_0x190ceb(0x1a7))[_0x190ceb(0x230)](_0x190ceb(0x279)), $(_0x190ceb(0x1a7))[_0x190ceb(0x20b)]('Please\x20wait...'));
    }
}), $(_0x5652de(0x18b))['on'](_0x5652de(0x243), function() {
    const _0x446bdc = _0x5652de;
    var _0x1e1709 = $(this)[_0x446bdc(0x185)]()[_0x446bdc(0x1e9)](_0x446bdc(0x299))[_0x446bdc(0x2cf)]('input-field');
    setTimeout(function() {
        const _0x12f7ed = _0x446bdc;
        $(_0x12f7ed(0x14f) + _0x1e1709 + '\x22]')[_0x12f7ed(0x285)]();
    }, 0x64), back = !![], x = $(this)[_0x446bdc(0x2cf)](_0x446bdc(0x2df)) - 0x1, updateStep(), countCard ? (curStep = x + 0x1, $(_0x446bdc(0x29e))[_0x446bdc(0x20b)](steps[_0x446bdc(0x1e6)])) : $(steps[x])[_0x446bdc(0x2cf)](_0x446bdc(0x1f8)) ? curStep = x + 0x0 : curStep = x + 0x1, $('[data-text=\x22current-step\x22]')[_0x446bdc(0x20b)](curStep), back = ![];
}), $(_0x5652de(0x253))['on']('click', function() {
    const _0x57cddb = _0x5652de;
    $(_0x57cddb(0x2c7))[_0x57cddb(0x1a1)]('reset');
    let _0x4154e7 = $(this);
    $(this)[_0x57cddb(0x20b)](_0x57cddb(0x279)), setTimeout(function() {
        const _0x38337a = _0x57cddb;
        $(_0x4154e7)[_0x38337a(0x20b)](oldResetText), $(_0x4154e7)[_0x38337a(0x1b7)](_0x38337a(0x17c))[_0x38337a(0x211)](), x = 0x0, updateStep(), $(_0x38337a(0x2c7))['show'](), $(_0x38337a(0x1a7))[_0x38337a(0x20b)](oldSubmitText), $(_0x38337a(0x1a7))['val'](oldSubmitText), $(_0x4154e7)['val'](oldSubmitText), $('[data-text=\x22current-step\x22]')[_0x38337a(0x20b)](0x1), $(_0x38337a(0x2c7))[_0x38337a(0x1e9)]('input:checkbox')['siblings'](_0x38337a(0x226))[_0x38337a(0x24a)](_0x38337a(0x288));
    }, resetDelay);
}), $(_0x5652de(0x1f1))['on'](_0x5652de(0x189), function(_0x3d5ef4) {
    const _0x54ff39 = _0x5652de;
    if (_0x3d5ef4[_0x54ff39(0x2ad)] === 0xd) {
        _0x3d5ef4[_0x54ff39(0x22b)](), _0x3d5ef4[_0x54ff39(0x2cd)]();
        if ($(steps[x])[_0x54ff39(0x1e9)](_0x54ff39(0x25f))['is'](_0x54ff39(0x22e))) $(steps[x])[_0x54ff39(0x1e9)](_0x54ff39(0x28b))['val']($(steps[x])['find']('textarea:focus')['val']() + '\x0a');
        else $('[data-enter]')[_0x54ff39(0x2cf)](_0x54ff39(0x2c2)) && fill && (totalSteps > curStep && $(_0x54ff39(0x1bd))[0x0]['click']());
    }
}), $(_0x5652de(0x1f1))['keydown'](function(_0x36dd91) {
    const _0x3a88dd = _0x5652de;
    (_0x36dd91[_0x3a88dd(0x2c0)] || _0x36dd91[_0x3a88dd(0x282)]) && _0x36dd91[_0x3a88dd(0x2ad)] == 0xd && (x >= steps[_0x3a88dd(0x1e6)] - 0x1 && fill ? $(steps[x])[_0x3a88dd(0x1e9)](_0x3a88dd(0x152))['click']() : (_0x36dd91[_0x3a88dd(0x22b)](), _0x36dd91['stopPropagation']()));
}), $(_0x5652de(0x2c7))[_0x5652de(0x1e9)](':input')['on']('change', function() {
    const _0x540491 = _0x5652de;
    all_data = all_data['filter'](_0x2847a0 => _0x2847a0['field'] !== $(this)[_0x540491(0x1b3)](_0x540491(0x29a))), $(this)['attr'](_0x540491(0x273)) === _0x540491(0x171) ? $(this)['is'](_0x540491(0x231)) ? all_data[_0x540491(0x278)]({ 'field': $(this)['attr'](_0x540491(0x29a)), 'value': $(this)[_0x540491(0x15e)](_0x540491(0x229))[_0x540491(0x20b)]() }) : $(_0x540491(0x14e) + $(this)[_0x540491(0x1b3)]('name') + '\x22]')[_0x540491(0x211)]() : (all_data[_0x540491(0x278)]({ 'field': $(this)[_0x540491(0x1b3)](_0x540491(0x29a)), 'value': $(this)[_0x540491(0x230)]() }), $(this)[_0x540491(0x230)]() !== '' && resetInputErrorMessage($(this)[_0x540491(0x1b3)](_0x540491(0x29a)))), all_data[_0x540491(0x2d5)](function(_0x600c3) {
        const _0x4c6951 = _0x540491;
        $(_0x4c6951(0x14e) + _0x600c3[_0x4c6951(0x18d)] + '\x22]')['show'](), $(_0x4c6951(0x14e) + _0x600c3[_0x4c6951(0x18d)] + '\x22]')[_0x4c6951(0x20b)](_0x600c3[_0x4c6951(0x2a0)]);
    });
}), $(_0x5652de(0x2c7))[_0x5652de(0x1e9)](_0x5652de(0x25f))['on']('change', function() {
    const _0x1a2765 = _0x5652de;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x1a2765(0x1b3)](_0x1a2765(0x29a))), all_data = all_data[_0x1a2765(0x1b4)](_0x4ffbc7 => _0x4ffbc7[_0x1a2765(0x18d)] !== $(this)[_0x1a2765(0x1b3)](_0x1a2765(0x29a))), all_data['push']({ 'field': $(this)['attr'](_0x1a2765(0x29a)), 'value': $(this)['val']() }), all_data['forEach'](function(_0x355620) {
        const _0x47cc4a = _0x1a2765;
        $(_0x47cc4a(0x14e) + _0x355620['field'] + '\x22]')[_0x47cc4a(0x2ae)](), $(_0x47cc4a(0x14e) + _0x355620[_0x47cc4a(0x18d)] + '\x22]')['text'](_0x355620['value']);
    });
}), $(_0x5652de(0x2c7))[_0x5652de(0x1e9)](_0x5652de(0x20d))['on'](_0x5652de(0x270), function() {
    const _0x235835 = _0x5652de;
    $(this)['val']() !== '' && resetInputErrorMessage($(this)['attr']('name'));
    var _0x3543f3 = $(this)[_0x235835(0x2cf)](_0x235835(0x26e));
    all_data = all_data['filter'](_0x436465 => _0x436465[_0x235835(0x18d)] !== $(this)['attr'](_0x235835(0x29a))), all_data[_0x235835(0x278)]({ 'field': $(this)[_0x235835(0x1b3)](_0x235835(0x29a)), 'value': _0x3543f3 ? $(this)[_0x235835(0x1e9)](_0x235835(0x262))[_0x235835(0x20b)]() : $(this)[_0x235835(0x230)]() }), all_data[_0x235835(0x2d5)](function(_0x1c21b6) {
        const _0x5b8558 = _0x235835;
        $(_0x5b8558(0x14e) + _0x1c21b6[_0x5b8558(0x18d)] + '\x22]')['show'](), $(_0x5b8558(0x14e) + _0x1c21b6[_0x5b8558(0x18d)] + '\x22]')[_0x5b8558(0x20b)](_0x1c21b6[_0x5b8558(0x2a0)]);
    });
}), updateStep(), triggerInputAllData(), $('[data-cms-select=cms]')[_0x5652de(0x1a4)](function() {
    const _0x1b3764 = _0x5652de,
        _0x44e8e9 = $(this)[_0x1b3764(0x1e9)](_0x1b3764(0x236)),
        _0x555fed = [];
    _0x44e8e9[_0x1b3764(0x1a4)](function() {
        const _0x51e07c = _0x1b3764;
        _0x555fed[_0x51e07c(0x278)]($(this)['text']()[_0x51e07c(0x228)]());
    });
    const _0x476f70 = $(this)['siblings'](_0x1b3764(0x198));
    $['each'](_0x555fed, function(_0x26c164, _0xc57ba7) {
        const _0x452732 = _0x1b3764,
            _0x4de274 = $(_0x452732(0x2da))['val'](_0xc57ba7)[_0x452732(0x20b)](_0xc57ba7);
        _0x476f70[_0x452732(0x268)](_0x4de274);
    });
});

function cloneRemove() {
    const _0x4c21d6 = _0x5652de;
    $(_0x4c21d6(0x1d7))[_0x4c21d6(0x1a4)](function() {
        const _0x5ef4a8 = _0x4c21d6;
        $(this)[_0x5ef4a8(0x1e9)](_0x5ef4a8(0x261))[_0x5ef4a8(0x1e6)] < 0x2 ? $(this)[_0x5ef4a8(0x1e9)](_0x5ef4a8(0x1c5))[_0x5ef4a8(0x211)]() : $(this)[_0x5ef4a8(0x1e9)](_0x5ef4a8(0x1c5))[_0x5ef4a8(0x2ae)]();
    });
}

function cloneRemoveInput() {
    const _0x21e549 = _0x5652de;
    $(_0x21e549(0x1d2))[_0x21e549(0x1a4)](function() {
        const _0x43ba62 = _0x21e549;
        console['log']($(this)[_0x43ba62(0x1e9)](_0x43ba62(0x239))[_0x43ba62(0x1e6)]), $(this)[_0x43ba62(0x1e9)](_0x43ba62(0x239))[_0x43ba62(0x1e6)] < 0x2 ? $(this)['find'](_0x43ba62(0x1b6))['hide']() : $(this)[_0x43ba62(0x1e9)](_0x43ba62(0x1b6))[_0x43ba62(0x2ae)]();
    });
}
$('[data-form=\x22remove-clone\x22]')['on']('click', function() {
    const _0x4cc198 = _0x5652de,
        _0x45548a = $(this)['parents'](_0x4cc198(0x261))['length'] > 0x0 ? $(this)[_0x4cc198(0x1b7)](_0x4cc198(0x261))[_0x4cc198(0x183)]() : $(this)[_0x4cc198(0x1b7)](_0x4cc198(0x25c))['index'](),
        _0x2a86d4 = $(this)[_0x4cc198(0x1b7)](_0x4cc198(0x261))['length'] > 0x0 ? $(this)[_0x4cc198(0x1b7)]('[data-clone]')[_0x4cc198(0x2cf)](_0x4cc198(0x2ba)) : $(this)['parents'](_0x4cc198(0x25c))['data']('display');
    $(_0x4cc198(0x149) + _0x2a86d4 + '\x22]')['eq'](_0x45548a)[_0x4cc198(0x2be)](), $(_0x4cc198(0x224) + _0x2a86d4 + '\x22]')['eq'](_0x45548a)['remove'](), cloneRemove();
    let _0x1e1031 = $(_0x4cc198(0x2b1) + _0x2a86d4 + '\x22]')['data'](_0x4cc198(0x28f)),
        _0x592f67 = $(_0x4cc198(0x149) + _0x2a86d4 + '\x22]')['length'];
    console['log'](_0x592f67, _0x1e1031), _0x592f67 < _0x1e1031 && (console['log'](_0x4cc198(0x2ae)), $('[data-add-new=\x22' + _0x2a86d4 + '\x22]')[_0x4cc198(0x2ae)]()), validation();
}), $(_0x5652de(0x1b6))['on'](_0x5652de(0x243), function() {
    const _0x30f332 = _0x5652de;
    let _0x39f02b = $(this)[_0x30f332(0x15e)]()['attr'](_0x30f332(0x29a)),
        _0x5c4fc1 = $(this)[_0x30f332(0x1b7)](_0x30f332(0x239))['data']('clone-input');
    $(this)[_0x30f332(0x185)](_0x30f332(0x239))[_0x30f332(0x2be)](), $('[data-input-field=\x22' + _0x39f02b + '\x22]')[_0x30f332(0x185)](_0x30f332(0x213))[_0x30f332(0x2be)]();
    let _0x122def = $(_0x30f332(0x241) + _0x5c4fc1 + '\x22]')['data'](_0x30f332(0x148)),
        _0x3250e6 = $(_0x30f332(0x24d) + _0x5c4fc1 + '\x22]')[_0x30f332(0x1e6)];
    _0x3250e6 < _0x122def && $(_0x30f332(0x241) + _0x5c4fc1 + '\x22]')['show'](), validation();
}), $(_0x5652de(0x25d))['on'](_0x5652de(0x243), function() {
    const _0xbd3050 = _0x5652de;
    let _0x294264 = $(this)[_0xbd3050(0x2cf)](_0xbd3050(0x1c7)),
        _0x2b68d2 = $(this)[_0xbd3050(0x2cf)](_0xbd3050(0x28f));
    var _0x3e1dda = $(_0xbd3050(0x149) + _0x294264 + '\x22]')['eq'](0x0)[_0xbd3050(0x2ba)](!![]),
        _0x4a9f69 = $(_0xbd3050(0x224) + _0x294264 + '\x22]')['eq'](0x0)[_0xbd3050(0x2ba)](!![]);
    let _0x210001 = '';
    $(this)[_0xbd3050(0x1e9)](_0xbd3050(0x1c5))['show'](), cloneRemove(), _0x3e1dda['find'](_0xbd3050(0x239))[_0xbd3050(0x1e9)]('input')[_0xbd3050(0x230)](''), _0x3e1dda['find']('[data-clone-input]')['find']('select')[_0xbd3050(0x230)](''), _0x3e1dda[_0xbd3050(0x1e9)](_0xbd3050(0x239))[_0xbd3050(0x1e9)](_0xbd3050(0x25f))['val'](''), _0x3e1dda['find'](_0xbd3050(0x239))[_0xbd3050(0x182)](_0xbd3050(0x1c6))[_0xbd3050(0x2be)](), _0x3e1dda[_0xbd3050(0x1e9)](_0xbd3050(0x239))[_0xbd3050(0x1e9)]('[aria-label=\x22Remove\x20file\x22]')[_0xbd3050(0x243)](), _0x4a9f69[_0xbd3050(0x1e9)](_0xbd3050(0x213))['not'](_0xbd3050(0x1c6))[_0xbd3050(0x2be)](), _0x3e1dda[_0xbd3050(0x1e9)]('input')['each'](function() {
        const _0x381519 = _0xbd3050;
        if ($(this)[_0x381519(0x1ed)]('[data-clone-input]')[_0x381519(0x1e6)] > 0x0) {
            let _0x5f46f0 = 0x0;
            const _0x14419e = $(this)[_0x381519(0x1ed)](_0x381519(0x239))[_0x381519(0x2cf)](_0x381519(0x1e3));
            $(_0x381519(0x24d) + _0x14419e + '\x22]\x20input')[_0x381519(0x1a4)](function() {
                const _0x2ec010 = _0x381519,
                    _0x39e14f = $(this)[_0x2ec010(0x1b3)](_0x2ec010(0x29a));
                if (_0x39e14f && _0x39e14f[_0x2ec010(0x193)](_0x2ec010(0x15d))) { const _0x24fbfe = parseInt(_0x39e14f['split']('-')[0x1]);!isNaN(_0x24fbfe) && _0x24fbfe > _0x5f46f0 && (_0x5f46f0 = _0x24fbfe); }
            }), _0x5f46f0++, _0x210001 = this[_0x381519(0x29a)] + '-' + _0x5f46f0;
        } else _0x210001 = this['name'] + '-' + (parseInt($('[data-clone=\x22' + _0x294264 + '\x22]')[_0x381519(0x196)]()['index']()) + 0x1);
        $(this)[_0x381519(0x230)](''), $(this)[_0x381519(0x1b3)](_0x381519(0x29a), _0x210001), $(this)[_0x381519(0x1b3)](_0x381519(0x289), _0x210001);
    }), _0x3e1dda[_0xbd3050(0x1e9)](_0xbd3050(0x25f))[_0xbd3050(0x1a4)](function() {
        const _0x27e783 = _0xbd3050;
        if ($(this)[_0x27e783(0x1ed)](_0x27e783(0x239))[_0x27e783(0x1e6)] > 0x0) {
            let _0x22f5ec = 0x0;
            const _0x5eb8bb = $(this)[_0x27e783(0x1ed)]('[data-clone-input]')['data'](_0x27e783(0x1e3));
            $(_0x27e783(0x24d) + _0x5eb8bb + _0x27e783(0x153))[_0x27e783(0x1a4)](function() {
                const _0x1aa3e5 = _0x27e783,
                    _0x2b9f3a = $(this)[_0x1aa3e5(0x1b3)](_0x1aa3e5(0x29a));
                if (_0x2b9f3a && _0x2b9f3a[_0x1aa3e5(0x193)](_0x1aa3e5(0x15d))) { const _0x3f631e = parseInt(_0x2b9f3a[_0x1aa3e5(0x2cc)]('-')[0x1]);!isNaN(_0x3f631e) && _0x3f631e > _0x22f5ec && (_0x22f5ec = _0x3f631e); }
            }), _0x22f5ec++, _0x210001 = this[_0x27e783(0x29a)] + '-' + _0x22f5ec;
        } else _0x210001 = this[_0x27e783(0x29a)] + '-' + (parseInt($(_0x27e783(0x149) + _0x294264 + '\x22]')[_0x27e783(0x196)]()[_0x27e783(0x183)]()) + 0x1);
        $(this)['val'](''), $(this)['attr']('name', _0x210001), $(this)[_0x27e783(0x1b3)](_0x27e783(0x289), _0x210001);
    }), _0x3e1dda[_0xbd3050(0x1e9)](_0xbd3050(0x20d))[_0xbd3050(0x1a4)](function() {
        const _0x57fb5d = _0xbd3050;
        if ($(this)[_0x57fb5d(0x1ed)]('[data-clone-input]')['length'] > 0x0) {
            let _0x1b8107 = 0x0;
            const _0x377612 = $(this)[_0x57fb5d(0x1ed)](_0x57fb5d(0x239))[_0x57fb5d(0x2cf)](_0x57fb5d(0x1e3));
            $(_0x57fb5d(0x24d) + _0x377612 + _0x57fb5d(0x167))[_0x57fb5d(0x1a4)](function() {
                const _0x3a56b5 = _0x57fb5d,
                    _0x3239a8 = $(this)[_0x3a56b5(0x1b3)](_0x3a56b5(0x29a));
                if (_0x3239a8 && _0x3239a8[_0x3a56b5(0x193)](_0x3a56b5(0x15d))) { const _0x5e73e2 = parseInt(_0x3239a8['split']('-')[0x1]);!isNaN(_0x5e73e2) && _0x5e73e2 > _0x1b8107 && (_0x1b8107 = _0x5e73e2); }
            }), _0x1b8107++, _0x210001 = this[_0x57fb5d(0x29a)] + '-' + _0x1b8107;
        } else _0x210001 = this['name'] + '-' + (parseInt($(_0x57fb5d(0x149) + _0x294264 + '\x22]')[_0x57fb5d(0x196)]()[_0x57fb5d(0x183)]()) + 0x1);
        $(this)[_0x57fb5d(0x230)](''), $(this)['attr'](_0x57fb5d(0x29a), _0x210001), $(this)[_0x57fb5d(0x1b3)](_0x57fb5d(0x289), _0x210001);
    }), _0x4a9f69[_0xbd3050(0x1e9)](_0xbd3050(0x299))[_0xbd3050(0x1a4)](function() {
        const _0x5d0afb = _0xbd3050;
        if ($(this)[_0x5d0afb(0x2cf)](_0x5d0afb(0x16b))) {
            let _0x3440b3 = 0x0;
            const _0x6670b0 = $(this)['data']('input-field')[_0x5d0afb(0x2cc)]('-')[0x0];
            $(_0x5d0afb(0x224) + _0x294264 + '\x22]\x20[data-input-field^=\x22' + _0x6670b0 + '\x22]')[_0x5d0afb(0x1a4)](function() {
                const _0x61b32d = _0x5d0afb,
                    _0x46d1fb = $(this)[_0x61b32d(0x1b3)](_0x61b32d(0x2e5)),
                    _0x23a6f4 = parseInt(_0x46d1fb[_0x61b32d(0x2cc)]('-')[0x1]);
                !isNaN(_0x23a6f4) && _0x23a6f4 > _0x3440b3 && (_0x3440b3 = _0x23a6f4);
            }), _0x3440b3++;
            const _0x14b7aa = _0x6670b0 + '-' + _0x3440b3;
            $(this)[_0x5d0afb(0x1b3)](_0x5d0afb(0x2e5), _0x14b7aa);
        }
    }), $(_0xbd3050(0x15a) + _0x294264 + '\x22]')[_0xbd3050(0x268)](_0x3e1dda), $(_0xbd3050(0x14a) + _0x294264 + '\x22]')[_0xbd3050(0x268)](_0x4a9f69), $('[data-index=\x22' + _0x294264 + '\x22]')['each'](function() {
        const _0x103124 = _0xbd3050;
        $(this)[_0x103124(0x20b)]($(this)[_0x103124(0x1b7)](_0x103124(0x149) + _0x294264 + '\x22]')[_0x103124(0x183)]() + 0x1);
    }), $(_0xbd3050(0x257) + _0x294264 + '\x22]')[_0xbd3050(0x1a4)](function() {
        const _0x3bfb8d = _0xbd3050;
        $(this)[_0x3bfb8d(0x20b)]($(this)[_0x3bfb8d(0x1b7)](_0x3bfb8d(0x224) + _0x294264 + '\x22]')['index']() + 0x1);
    });
    let _0x3848ad = $(_0xbd3050(0x15a) + _0x294264 + '\x22]\x20[data-clone=\x22' + _0x294264 + '\x22]')[_0xbd3050(0x1e6)];
    if (_0x3848ad >= _0x2b68d2) { $(this)[_0xbd3050(0x211)](); return; }
    $(this)[_0xbd3050(0x2ae)](), validation();
}), $('[data-add-new-input]')['on'](_0x5652de(0x243), function() {
    const _0x49c693 = _0x5652de,
        _0x1a6891 = $(this)['parents']('[data-clone]')[_0x49c693(0x183)]();
    let _0x48ecd1 = $(this)[_0x49c693(0x2cf)](_0x49c693(0x284));
    var _0x5eb952 = $(_0x49c693(0x24d) + _0x48ecd1 + '\x22]')['eq'](0x0)[_0x49c693(0x2ba)](!![]),
        _0x177b1c = $(_0x49c693(0x16f) + _0x48ecd1 + '\x22]')['eq'](0x0)[_0x49c693(0x2ba)](!![]);
    let _0x6ef588 = $(this)['data'](_0x49c693(0x148)),
        _0x42f355 = 0x0;
    $('[data-clone-input=\x22' + _0x48ecd1 + _0x49c693(0x245))[_0x49c693(0x1a4)](function() {
        const _0x22d8d2 = _0x49c693,
            _0x76b720 = $(this)[_0x22d8d2(0x1b3)](_0x22d8d2(0x29a));
        if (_0x76b720) { const _0xe7755a = parseInt(_0x76b720[_0x22d8d2(0x2cc)]('-')[0x1]);!isNaN(_0xe7755a) && _0xe7755a > _0x42f355 && (_0x42f355 = _0xe7755a); }
    }), $(_0x49c693(0x24d) + _0x48ecd1 + '\x22]\x20select')['each'](function() {
        const _0x5c5769 = _0x49c693,
            _0x470cbb = $(this)[_0x5c5769(0x1b3)]('name');
        if (_0x470cbb) { const _0x17921e = parseInt(_0x470cbb[_0x5c5769(0x2cc)]('-')[0x1]);!isNaN(_0x17921e) && _0x17921e > _0x42f355 && (_0x42f355 = _0x17921e); }
    }), $('[data-clone-input=\x22' + _0x48ecd1 + _0x49c693(0x153))['each'](function() {
        const _0x4740cb = _0x49c693,
            _0x479981 = $(this)[_0x4740cb(0x1b3)](_0x4740cb(0x29a));
        if (_0x479981) { const _0x2fe906 = parseInt(_0x479981[_0x4740cb(0x2cc)]('-')[0x1]);!isNaN(_0x2fe906) && _0x2fe906 > _0x42f355 && (_0x42f355 = _0x2fe906); }
    }), _0x42f355++, _0x5eb952['find']('input')[_0x49c693(0x1a4)](function() {
        const _0x2a6321 = _0x49c693,
            _0x28f47a = $(this)[_0x2a6321(0x1b3)](_0x2a6321(0x29a));
        let _0x25379f = _0x28f47a + '-' + _0x42f355;
        $(this)[_0x2a6321(0x230)](''), $(this)[_0x2a6321(0x1b3)](_0x2a6321(0x29a), _0x25379f), $(this)[_0x2a6321(0x1b3)](_0x2a6321(0x289), _0x25379f);
    }), _0x5eb952['find'](_0x49c693(0x20d))['each'](function() {
        const _0x4111d8 = _0x49c693,
            _0x15d502 = $(this)[_0x4111d8(0x1b3)]('name');
        let _0x474165 = _0x15d502 + '-' + _0x42f355;
        $(this)[_0x4111d8(0x230)](''), $(this)['attr'](_0x4111d8(0x29a), _0x474165), $(this)[_0x4111d8(0x1b3)](_0x4111d8(0x289), _0x474165);
    }), _0x5eb952[_0x49c693(0x1e9)](_0x49c693(0x25f))[_0x49c693(0x1a4)](function() {
        const _0x16bda5 = _0x49c693,
            _0x448d4d = $(this)[_0x16bda5(0x1b3)](_0x16bda5(0x29a));
        let _0x337067 = _0x448d4d + '-' + _0x42f355;
        $(this)[_0x16bda5(0x230)](''), $(this)[_0x16bda5(0x1b3)](_0x16bda5(0x29a), _0x337067), $(this)['attr']('data-name', _0x337067);
    }), _0x177b1c[_0x49c693(0x1e9)](_0x49c693(0x299))['each'](function() {
        const _0x246a47 = _0x49c693;
        $(this)[_0x246a47(0x1b3)](_0x246a47(0x2e5), 'relationship-' + _0x42f355);
    }), $(this)[_0x49c693(0x15e)](_0x49c693(0x244) + _0x48ecd1 + '\x22]')['append'](_0x5eb952), $(_0x49c693(0x25c))['eq'](_0x1a6891)['find'](_0x49c693(0x160) + _0x48ecd1 + '\x22]')[_0x49c693(0x268)](_0x177b1c), $(_0x49c693(0x154) + _0x48ecd1 + '\x22]')['each'](function() {
        const _0x2d36ed = _0x49c693;
        $(this)[_0x2d36ed(0x20b)]($(this)[_0x2d36ed(0x1b7)](_0x2d36ed(0x24d) + _0x48ecd1 + '\x22]')[_0x2d36ed(0x183)]() + 0x1);
    }), $(_0x49c693(0x223) + _0x48ecd1 + '\x22]')[_0x49c693(0x1a4)](function() {
        const _0x539d86 = _0x49c693;
        $(this)[_0x539d86(0x20b)]($(this)[_0x539d86(0x1b7)](_0x539d86(0x16f) + _0x48ecd1 + '\x22]')[_0x539d86(0x183)]() + 0x1);
    });
    let _0xc58da4 = $(_0x49c693(0x244) + _0x48ecd1 + _0x49c693(0x2b5) + _0x48ecd1 + '\x22]')['length'];
    if (_0xc58da4 >= _0x6ef588) { $(this)[_0x49c693(0x211)](); return; }
    $(this)[_0x49c693(0x2ae)](), cloneRemoveInput(), validation();
}), $(_0x5652de(0x2e2))['on'](_0x5652de(0x243), function() {
    const _0x31c0bc = _0x5652de,
        _0x3005a6 = $(this)[_0x31c0bc(0x2cf)]('remove-upload');
    $(_0x31c0bc(0x14f) + _0x3005a6 + '\x22]')['val'](''), validation();
});

function andLogic() {
    const _0x4acba8 = _0x5652de;
    conditionalResult && (steps['eq'](x)[_0x4acba8(0x1e9)](_0x4acba8(0x216))[_0x4acba8(0x211)](), steps['eq'](x)[_0x4acba8(0x1e9)](_0x4acba8(0x216))[_0x4acba8(0x1a4)](function() {
        const _0x7a5341 = _0x4acba8;

        function _0x45e3ab(_0x7b17ce) {
            const _0x5182dd = _0x35f4,
                _0x104684 = _0x7b17ce[_0x5182dd(0x2cc)]('&'),
                _0x38dd63 = [];
            return _0x104684['forEach'](_0x288d51 => {
                const _0x5c37cf = _0x5182dd,
                    [_0x13ba99, _0x28d1df] = _0x288d51[_0x5c37cf(0x2cc)]('=');
                _0x38dd63[_0x5c37cf(0x278)]({ 'field': _0x13ba99, 'value': _0x28d1df });
            }), _0x38dd63;
        }
        const _0x246fb5 = $(this)['attr'](_0x7a5341(0x264)),
            _0x46ca27 = _0x45e3ab(_0x246fb5);

        function _0x503403(_0x116fb2, _0x47a897) { const _0x135511 = _0x7a5341; return _0x47a897[_0x135511(0x17b)]((_0x2f18ce, _0x524824) => { const _0x46d91c = _0x135511; if (_0x116fb2[0x0] && _0x2f18ce[_0x46d91c(0x18d)] === _0x116fb2[0x0][_0x46d91c(0x18d)]) return _0x116fb2[_0x46d91c(0x1a9)]((_0x10561a, _0x2be176) => _0x47a897[_0x524824 + _0x2be176] && _0x47a897[_0x524824 + _0x2be176]['field'] === _0x10561a['field'] && _0x47a897[_0x524824 + _0x2be176][_0x46d91c(0x2a0)] === _0x10561a[_0x46d91c(0x2a0)]); return ![]; }); }
        const _0x37ea29 = _0x503403(_0x46ca27, all_data);
        _0x37ea29 ? $(this)['show']() : $(this)['hide']();
    }));
}
$(_0x5652de(0x21f))['addClass'](_0x5652de(0x211)), $(_0x5652de(0x2ca))['on'](_0x5652de(0x150), function() {
    const _0x3f0342 = _0x5652de,
        _0x11146b = $(this)[_0x3f0342(0x2cf)](_0x3f0342(0x28c)),
        _0x52075e = $(this)[_0x3f0342(0x230)](),
        _0x5cd04b = $(_0x3f0342(0x22f) + _0x11146b + '\x22]')[_0x3f0342(0x2cf)](_0x3f0342(0x292));
    let _0x24d7e0 = $('[data-progressive-target=\x22' + _0x11146b + _0x3f0342(0x220) + _0x52075e + '\x22]'),
        _0x4c4d15 = $('[data-progressive-target=\x22' + _0x11146b + _0x3f0342(0x2dc));
    $(_0x3f0342(0x22f) + _0x11146b + '\x22]')[_0x3f0342(0x1db)](_0x3f0342(0x2aa)), $(_0x3f0342(0x22f) + _0x11146b + '\x22]')[_0x3f0342(0x24a)](_0x3f0342(0x1dc));
    _0x52075e !== '' && (_0x5cd04b === '*' && _0x52075e !== '' ? (_0x4c4d15['removeClass'](_0x3f0342(0x2aa)), _0x4c4d15[_0x3f0342(0x1db)](_0x3f0342(0x1dc))) : (_0x24d7e0[_0x3f0342(0x24a)](_0x3f0342(0x2aa)), _0x24d7e0['addClass'](_0x3f0342(0x1dc))));

    function _0x215dc5(_0x30d6f4) {
        const _0x5ec1aa = _0x3f0342;
        _0x30d6f4 && ($(_0x5ec1aa(0x2c9) + _0x30d6f4 + '\x22]')[_0x5ec1aa(0x230)]() !== '' && $(_0x5ec1aa(0x2c9) + _0x30d6f4 + '\x22]')['trigger'](_0x5ec1aa(0x150)));
    }
    let _0x26f289 = $('[data-progressive-target=\x22' + _0x11146b + '\x22]')['find'](_0x3f0342(0x2ca))[_0x3f0342(0x2cf)](_0x3f0342(0x28c));
    _0x215dc5(_0x26f289), $('[data-progressive-input]:not(:visible)')['each'](function() {
        const _0x1c7dc2 = _0x3f0342,
            _0x244260 = $(this)[_0x1c7dc2(0x2cf)]('progressive-input');
        $(_0x1c7dc2(0x22f) + _0x244260 + '\x22]')[_0x1c7dc2(0x24a)](_0x1c7dc2(0x1dc)), $(_0x1c7dc2(0x22f) + _0x244260 + '\x22]')[_0x1c7dc2(0x1db)](_0x1c7dc2(0x2aa));
    });
});

function addClickClass() {
    const _0x1d328c = _0x5652de,
        _0x1ab57a = $(this)['data']('click-addclass'),
        _0x905cde = $(this)['attr'](_0x1d328c(0x29a));
    $(_0x1d328c(0x14f) + _0x905cde + '\x22]')[_0x1d328c(0x185)]()[_0x1d328c(0x24a)](_0x1ab57a), $(this)['is'](_0x1d328c(0x231)) && $(this)[_0x1d328c(0x185)]()[_0x1d328c(0x1db)](_0x1ab57a);
}
$(_0x5652de(0x174))['on'](_0x5652de(0x270), addClickClass);

function updateCounter(_0x1cd69f) {
    const _0x3a055b = _0x5652de;
    var _0x15df35 = new Date(),
        _0x1c3d1e = _0x15df35[_0x3a055b(0x1dd)](),
        _0x4dd419 = btoa('counter'),
        _0x628838 = btoa(_0x1c3d1e['toString']()),
        _0x4e648f = getCookie(_0x4dd419);
    !_0x4e648f || _0x4e648f !== _0x628838 ? $['post'](_0x3a055b(0x145), function() {
        const _0x4e156b = _0x3a055b;
        console['log'](_0x4e156b(0x1d8)), document[_0x4e156b(0x26c)] = _0x4dd419 + '=' + _0x628838;
    })[_0x3a055b(0x191)](function(_0x4e130f, _0x535687, _0x12f779) {
        const _0x4ae5dc = _0x3a055b;
        console[_0x4ae5dc(0x1ad)](_0x4ae5dc(0x2ac), _0x12f779);
    }) : console[_0x3a055b(0x1f4)](_0x3a055b(0x296));
}

function getCookie(_0x40ca7f) { const _0x23246f = _0x5652de; var _0x2c259e = null; if (document[_0x23246f(0x26c)] && document['cookie'] !== '') { var _0x3ce16f = document[_0x23246f(0x26c)][_0x23246f(0x2cc)](';'); for (var _0x15a935 = 0x0; _0x15a935 < _0x3ce16f[_0x23246f(0x1e6)]; _0x15a935++) { var _0xa74964 = _0x3ce16f[_0x15a935][_0x23246f(0x228)](); if (_0xa74964['substring'](0x0, _0x40ca7f[_0x23246f(0x1e6)] + 0x1) === _0x40ca7f + '=') { _0x2c259e = decodeURIComponent(_0xa74964[_0x23246f(0x188)](_0x40ca7f['length'] + 0x1)); break; } } } return _0x2c259e; }
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x5652de(0x1fe)][_0x5652de(0x187)]),
    formlySupportParam = formlyUrlParams[_0x5652de(0x2c8)](_0x5652de(0x15c)),
    showButton = formlySupportParam === _0x5652de(0x23f),
    passIcon = _0x5652de(0x17a),
    failIcon = _0x5652de(0x1eb);
let isScriptLoaded = !![],
    scriptLocation = 'head',
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x5652de(0x29c) : _0x5652de(0x2bd),
    resultStatus = _0x5652de(0x1bb),
    scriptSrcAdded = '';

function isElementPresent(_0x4a3036, _0x2695f8) { return document['querySelector']('[' + _0x2695f8 + '=\x22' + _0x4a3036 + '\x22]') !== null; }
isMultistepAttributePresent = isElementPresent('multistep', _0x5652de(0x2a7));
const multistepForm = document[_0x5652de(0x162)](_0x5652de(0x1bc)),
    formStepLength = multistepForm['querySelectorAll']('[data-form=\x22step\x22]')[_0x5652de(0x1e6)];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x5652de(0x162)](_0x5652de(0x2c7)),
    nextBtnExist = multistepContainer[_0x5652de(0x162)]('[data-form=\x22next-btn\x22]'),
    backBtnExist = multistepContainer['querySelector'](_0x5652de(0x2b7)),
    submitBtnExist = multistepContainer['querySelector'](_0x5652de(0x1a7));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null, isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x5652de(0x2d1)][_0x5652de(0x14b)]() === _0x5652de(0x150), isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x5652de(0x2d1)][_0x5652de(0x14b)]() === 'input' && submitBtnExist[_0x5652de(0x273)]['toLowerCase']() === _0x5652de(0x212), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x5652de(0x2d1)][_0x5652de(0x14b)]() === _0x5652de(0x150);
const checkPowerup = _0x337b4d => document[_0x5652de(0x162)](_0x337b4d) !== null,
    progressBarAttr = checkPowerup(_0x5652de(0x1b0)),
    progressIndicatorAttr = checkPowerup(_0x5652de(0x1ca)),
    customProgressAttr = checkPowerup(_0x5652de(0x1ca)),
    cardDivAttr = checkPowerup(_0x5652de(0x2bb)),
    currentStepAttr = checkPowerup('[data-text=\x22current-step\x22]'),
    totalStepAttr = checkPowerup(_0x5652de(0x29e)),
    enterAttr = checkPowerup(_0x5652de(0x194)),
    submitAttr = checkPowerup(_0x5652de(0x221)),
    radioSkipAttr = checkPowerup(_0x5652de(0x232)),
    customCheckboxAttr = checkPowerup(_0x5652de(0x1ee)),
    recapatchaAttr = checkPowerup('[data-callback=\x22recaptcha\x22]');
(!isScriptLoaded || scriptLocation !== 'head' || !isMultistepAttributePresent || !isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit || isBackBtnOnSubmit) && (resultStatus = _0x5652de(0x254));

function isScriptUrlMatch(_0x260c1d, _0x3d8a6b) { const _0x3ca99b = _0x5652de; for (var _0x30717f = 0x0; _0x30717f < _0x3d8a6b[_0x3ca99b(0x1e6)]; _0x30717f++) { if (_0x260c1d[_0x3ca99b(0x2a3)](_0x3d8a6b[_0x30717f])) return !![]; } return ![]; }
var keywordsToCheck = [_0x5652de(0x28d), _0x5652de(0x2d6)],
    scripts = document[_0x5652de(0x215)](_0x5652de(0x20c)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x5652de(0x1e6)]; i++) {
    var scriptSrcs = scripts[i][_0x5652de(0x29b)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x5652de(0x278)](scriptSrcs);
}
if (matchedScripts[_0x5652de(0x1e6)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x5652de(0x162)](_0x5652de(0x2b9) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x5652de(0x234)][_0x5652de(0x2d1)] === _0x5652de(0x1de) ? _0x5652de(0x240) : _0x5652de(0x1b2));
} else scriptSrcAdded = _0x5652de(0x274) + failIcon;
const newElement = document[_0x5652de(0x24f)](_0x5652de(0x203)),
    newStyle = document[_0x5652de(0x24f)](_0x5652de(0x1b9));
newStyle['innerHTML'] = '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a', document[_0x5652de(0x21e)][_0x5652de(0x16e)](newStyle);
showButton && document[_0x5652de(0x1f1)][_0x5652de(0x16e)](newElement);
newElement[_0x5652de(0x1ac)] = _0x5652de(0x1d9) + formType + _0x5652de(0x237) + scriptSrcAdded + _0x5652de(0x197) + scriptLocation + _0x5652de(0x242) + (isMultistepOnFormElement ? passIcon : failIcon) + '</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (formStepLength > 0x0 ? passIcon : failIcon) + _0x5652de(0x26b) + formStepLength + _0x5652de(0x172) + (nextBtnExist ? passIcon : failIcon) + _0x5652de(0x2e0) + (isNextBtnOnSubmit ? failIcon : passIcon) + _0x5652de(0x142) + (backBtnExist ? passIcon : failIcon) + '</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button' + (isBackBtnOnSubmit ? failIcon : passIcon) + _0x5652de(0x1ce) + (backBtnExist ? passIcon : failIcon) + _0x5652de(0x246) + (isSubmitBtnOnSubmit ? passIcon : failIcon) + _0x5652de(0x259) + (progressBarAttr && progressIndicatorAttr ? _0x5652de(0x2a8) + passIcon + _0x5652de(0x27b) : '') + _0x5652de(0x164) + (customProgressAttr ? _0x5652de(0x25a) + passIcon + _0x5652de(0x27b) : '') + _0x5652de(0x164) + (cardDivAttr ? _0x5652de(0x210) + passIcon + _0x5652de(0x27b) : '') + _0x5652de(0x164) + (currentStepAttr ? _0x5652de(0x251) + passIcon + _0x5652de(0x27b) : '') + _0x5652de(0x164) + (totalStepAttr ? _0x5652de(0x1e2) + passIcon + '</strong>' : '') + _0x5652de(0x164) + (enterAttr ? _0x5652de(0x25e) + passIcon + _0x5652de(0x27b) : '') + '\x0a\x20\x20\x20\x20\x20\x20\x20\x20' + (submitAttr ? _0x5652de(0x24b) + passIcon + '</strong>' : '') + _0x5652de(0x164) + (radioSkipAttr ? '<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20' + passIcon + _0x5652de(0x27b) : '') + _0x5652de(0x164) + (customCheckboxAttr ? _0x5652de(0x16a) + passIcon + '</strong>' : '') + _0x5652de(0x164) + (recapatchaAttr ? _0x5652de(0x2c3) + passIcon + _0x5652de(0x27b) : '') + _0x5652de(0x2a1);

function openNav() {
    const _0x452916 = _0x5652de;
    document[_0x452916(0x1ff)](_0x452916(0x295))[_0x452916(0x1b9)]['width'] = _0x452916(0x272), document[_0x452916(0x1ff)]('f-mySidenav')[_0x452916(0x1b9)][_0x452916(0x2c6)] = _0x452916(0x1a6);
}

function closeNav() {
    const _0x100d85 = _0x5652de;
    document[_0x100d85(0x1ff)](_0x100d85(0x295))['style'][_0x100d85(0x1b1)] = '0', document[_0x100d85(0x1ff)]('f-mySidenav')[_0x100d85(0x1b9)][_0x100d85(0x2c6)] = '0px';
}