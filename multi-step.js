// 21/May/2024
// Feature update:
// Refactored Checkbox validation (logic & non-logic)
// Custom on submit function

const _0x198795 = _0x5116;
(function(_0x199d9d, _0x232ff5) {
    const _0x3f2a1b = _0x5116,
        _0x377c4a = _0x199d9d();
    while (!![]) {
        try {
            const _0x4a0953 = -parseInt(_0x3f2a1b(0x1c4)) /
                0x1 + -parseInt(_0x3f2a1b(0x1ae)) / 0x2 * (parseInt(_0x3f2a1b(0x1d3)) / 0x3) + -parseInt(
                    _0x3f2a1b(0x23a)) / 0x4 * (-parseInt(_0x3f2a1b(0x22d)) / 0x5) + -parseInt(_0x3f2a1b(
                    0x2e8)) / 0x6 * (parseInt(_0x3f2a1b(0x256)) / 0x7) + -parseInt(_0x3f2a1b(0x1f6)) / 0x8 *
                (parseInt(_0x3f2a1b(0x1da)) / 0x9) + -parseInt(_0x3f2a1b(0x20f)) / 0xa * (-parseInt(
                    _0x3f2a1b(0x25f)) / 0xb) + -parseInt(_0x3f2a1b(0x2f6)) / 0xc * (-parseInt(_0x3f2a1b(
                    0x257)) / 0xd);
            if (_0x4a0953 === _0x232ff5) break;
            else _0x377c4a['push'](_0x377c4a['shift']());
        } catch (_0x596901) {
            _0x377c4a['push'](
                _0x377c4a['shift']());
        }
    }
}(_0x4e92, 0x473b3));
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
let form = $(_0x198795(0x2bb)),
    steps = $(_0x198795(0x305)),
    progressbarClone = $(_0x198795(0x1fb))['clone'](),
    progressbar, weightedSelection = $(_0x198795(0x2fc))[_0x198795(0x236)]('weighted-selection'),
    weightedSelectionRange = $(_0x198795(0x2d2))['data'](_0x198795(0x1f5)),
    selectMultiple = $('[data-select-multiple]')[_0x198795(0x236)]('select-multiple'),
    customError = $('[data-custom-error-message]')['data'](_0x198795(0x2bc)),
    reinitIX = $(_0x198795(0x225))['data']('reinit'),
    memory = $(_0x198795(0x27b))[_0x198795(0x236)]('memory'),
    quiz = $('[data-quiz]')['data']('quiz');
const urlFormly = new URL(window[_0x198795(0x1a2)]['href']);
let _params = $(_0x198795(0x171))[_0x198795(0x236)](_0x198795(0x249)),
    logicExtra = $(_0x198795(0x2bb))[_0x198795(0x236)](_0x198795(0x299)),
    oldSubmitText = $(_0x198795(0x2b8))[_0x198795(0x2e7)](),
    oldResetText = $('[data-btn=\x22reset\x22]')['text'](),
    formReset = $(_0x198795(0x2bb))[_0x198795(0x236)](_0x198795(0x226)),
    resetDelay = $('[data-reset-delay]')[_0x198795(0x236)](_0x198795(0x1d9)) ? $(_0x198795(0x258))[
        _0x198795(0x236)](_0x198795(0x1d9)) : 0x7d0,
    redirectDelay = $(_0x198795(0x189))[_0x198795(0x236)](_0x198795(0x16a)) ? $(
        '[data-redirect-delay]')[_0x198795(0x236)](_0x198795(0x16a)) : 0x64,
    phoneFormat = $('[data-form=\x22multistep\x22]')[_0x198795(0x236)](_0x198795(0x2af)),
    scrollToTop = $(_0x198795(0x2bb))[_0x198795(0x236)](_0x198795(0x269)),
    trackLastStep = $(_0x198795(0x1c2))[_0x198795(0x236)](_0x198795(0x1a0)),
    conditionalResult = $(_0x198795(0x1a5))['data'](_0x198795(0x2b3)) === 'AND',
    scrollTopOffset = parseInt($('[data-form=\x22multistep\x22]')[_0x198795(0x236)](_0x198795(
        0x2df)));
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;

function _0x4e92() {
    const _0x36d065 = ['focus',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Total\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'videsigns', '[data-go-to]', 'input:radio[required]', 'removeClass', '[data-enter]',
        'option[value=\x22$(this).val()\x22]', 'filledInput', 'split', 'prop', '[data-reinit]',
        'reset', 'f-show', '[data-cms-select=text]', 'src', 'select', 'ms-field', 'FAIL',
        '225735XlZCfZ', '[data-clone=\x22', 'trim', '[data-input-reveal=\x22', 'button',
        '[data-click-addclass]', ':input[type=\x22number\x22]', ':input[type=\x22file\x22]',
        'disabled', 'data', 'click', 'script', 'radio-delay', '24IirRcU',
        '<div\x20class=\x22f-text_script\x22>Inside\x20&lt;head&gt;\x20tag<br/></div>',
        ':input[type=\x22date\x22][required]', '[data-input-target=\x22', 'multistep', 'init', 'fail',
        'querySelectorAll', 'find', '[data-form-ms=\x22submit-btn\x22]', 'stringify', 'innerHTML',
        '\x22]:checked', '[data-input-reveal]', 'preventDefault', 'query-param',
        'input[type=\x22checkbox\x22][name=\x22', 'clickable-all', 'input:radio[name=\x22',
        'input[name=\x22', 'href', '[data-success-card]', '[type=\x22submit\x22]', 'keypress',
        ':input[type=\x22text\x22]', ':input[type=\x22url\x22]',
        '</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'test', '112fUQxvn', '5915LPXAKe', '[data-reset-delay]', '\x20seconds',
        ':input[type=\x22date\x22]', '[aria-label=\x22Remove\x20file\x22]', '[data-skip-to]',
        'backTo', 'post', '11asgOMi',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Checkboxes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'data-radio-delay', 'each', '[data-submit=\x22true\x22]', 'every', 'filter',
        '[data-cms-select=input]', 'clone', 'FormlyLogic\x20enabled', 'scroll-top', 'animate',
        'checkbox', '[data-btn=\x22edit\x22]', 'replace', '[data-clone]', 'history',
        '\x22]\x20[data-clone=\x22', 'formlyLastStepAnswer',
        '<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a</svg>\x0a</div>',
        '\x22]\x20select', 'selected', 'skipTo', 'closest', 'resolvedOptions',
        '[data-display-wrapper=\x22', '\x22]\x20[data-input-field^=\x22', 'startsWith',
        '[data-memory]', '[data-show-if]', 'name',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20', '[data-input-field=\x22',
        '.active-answer-card', 'input[autofocus]', '[data-clone-input=\x22',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'textarea[required]:visible', 'input[type=\x22radio\x22]', '[data-radio-delay]', 'function',
        '.w-checkbox-input', '[data-display-input-wrapper=\x22', 'head', '[data-card=\x22true\x22]',
        'debug-mode', 'translateX(0rem)', ':input[type=\x22url\x22][required]',
        'input[type=\x22text\x22][required]:visible', '\x22][value=\x22',
        '<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>', '_blank',
        'selection', '<br>Data\x20Answer\x20=\x20', 'clickable', 'body',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'logic-extra', 'block-domain', 'error', 'new-tab',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        ':focus', 'join', '[required]', 'last', 'submit', 'keyCode', 'w--redirected-checked',
        ':input', 'click-addclass', 'N/A', 'Failed\x20to\x20update\x20counter:', 'none',
        'createElement', 'Webflow', 'slow', 'step', '[data-radio-skip]:visible', 'phone-validation',
        'relationship-', 'referrer', '[data-max-checkbox]', 'conditional-result', 'current',
        ':checked', 'append', '[data-form=\x22submit\x22]:visible', '[data-form=\x22submit-btn\x22]',
        '[data-display-input=\x22', '[data-form=\x22custom-progress-indicator\x22]',
        '[data-form=\x22multistep\x22]', 'custom-error-message', '[data-text=\x22error-message\x22]',
        '[data-selected]:checked',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>ReCAPTCHA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '[data-form=\x22next-btn\x22][data-submit-show]', 'required',
        '[data-selection=\x22other\x22]', 'script[src=\x22', 'input[type=\x22submit\x22]',
        'DateTimeFormat', 'type', 'tagName', 'data-input-field', 'log',
        ':input[type=\x22time\x22][required]', '[data-clone-input-wrapper=\x22',
        '[data-enter=\x22true\x22]', 'f-mySidenav',
        '<div\x20class=\x22f-text_script\x22>Before\x20&lt;/body&gt;\x20tag<br/></div>',
        '.w-form-done', '[data-index=\x22', 'card', '[data-weighted-selection-range]',
        'option[value=\x22', '[data-clone-input-wrapper]', 'hide', '[data-clone-wrapper=\x22',
        'click-path', 'min-character', ':input[type=\x22number\x22][required]', 'add-new-input-limit',
        'findIndex',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '[data-add-new]', 'input[type=\x22checkbox\x22]', 'scroll-top-offset', 'status',
        ':input[type=\x22tel\x22][required]', 'https://slater.app/4908/8862.js',
        '[data-form=\x22progress\x22]', 'cookie', 'search', 'keydown', 'val', '54798rwJbUj',
        'getItem', '\x22][data-input-reveal-value=\x22*\x22]',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'Basic\x20(No\x20Formly\x20Logic)', 'appendChild', ':input[type=\x27radio\x27]:checked',
        'time-zone', 'active-answer-card', ':first', 'ajaxComplete', 'counter', 'span', '16980iyeOgb',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>', 'toLowerCase',
        '<div\x20class=\x22f-text_attribute-title\x22>Step\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '[data-text=\x22total-steps\x22]', '[data-weighted-selection]', 'show',
        '\x20|\x20<strong>data-go-to\x20</strong>\x20=\x22', 'length', 'formlyLastStep',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '[data-display-input]', 'css',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
        '[data-form=\x22step\x22]', '[data-remove-upload]', '[data-input-field]', 'f-hide',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x20',
        'field', '[data-answer][data-radio-skip]:visible', 'text', '[data-add-new=\x22',
        'getResponse', 'input[type=\x22radio\x22][name=\x22', '\x22][data-input-reveal-value]',
        'radio', '\x22]\x20input', 'add-new-limit', 'checked',
        '<div\x20class=\x22f-logic-text\x22><strong>data-answer</strong>=\x22',
        '[data-form=\x22next-btn\x22][type=\x22submit\x22]', 'formly-support', 'readystatechange',
        'redirect-delay', 'index',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'select:not([data-prefill=\x22false\x22])',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'nonvalidated', 'height', '[data-query-param]', 'searchParams', 'pageLoadTime', 'remove',
        'first',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'select[name=\x22', 'https://webflow.com/api/v1/form/', 'max-checkbox', 'clone-input',
        '[data-add-new-input=\x22', 'children', 'trigger', '<div>Step\x20', 'input-reveal-value',
        'translateX(-40rem)', 'transform', 'siblings', 'answer', 'param-analytics',
        'input[type=\x22email\x22]:visible', 'screen', 'BODY', '[data-success-card=\x22',
        '[data-redirect-delay]', 'destroy', 'forEach', 'wait', '0.4', ':input[type=\x22password\x22]',
        'form[data-form=\x22multistep\x22]\x20:input',
        '<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a</svg>\x0a</div>',
        'data-go-to',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        '[data-count-card]', 'timeZone', 'offset', 'change',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>',
        'removeItem', '[data-form=\x22next-btn\x22]', 'data-name', '[data-clone-wrapper]',
        '[data-range]:contains(', 'count-card', '.w-radio-input',
        'https://videsigns-staging.co.uk/formly-counter', 'last-step', 'ix2', 'location', 'addClass',
        'width', '[data-conditional-result]', 'dispatchEvent', 'textarea[autofocus]',
        '.w-form-formradioinput', '[data-form=\x22remove-input-clone\x22]',
        'input[type=\x22checkbox\x22]:not(:checked)', 'novalidate', '[data-display-index=\x22',
        'require', '111722rJBnxc', '[data-display-input-index=\x22', 'submit-show',
        '\x22]\x20textarea', '[data-cms-select=cms]', 'style', 'label', ':input[required]',
        '[data-clickable]', 'parent', 'data-form', '</div>', 'querySelector', 'attr', 'setItem',
        'add-new-input', '[data-clone-input]', '[data-display]', '[data-selection=\x22', 'radio-skip',
        '[data-last-step]', '[type=\x22radio\x22]', '212388WDkxLR', 'parentNode', 'fadeIn',
        ':input[type=\x22time\x22]', '.active-answer-card\x20:input[type=\x27checkbox\x27]',
        '[data-checkbox]', ':input[type=\x22checkbox\x22]', ':input[type=\x22file\x22][required]',
        'user-agent', 'getElementById', 'div.g-recaptcha', ':input[type=\x22text\x22][required]',
        'Counter\x20already\x20updated\x20for\x20this\x20month.',
        ':input[type=\x22password\x22][required]', 'textarea', '12oKkExz', 'textarea[name=\x22',
        'parse', ':input[type=\x22email\x22][required]', 'slice', '[data-selection]', 'reset-delay',
        '37287drGiKn', 'getMonth', '[data-form=\x22back-btn\x22]', 'data-radio-skip', 'push', 'input',
        'key', 'parents', 'get', '[data-display=\x22', 'input:checkbox', 'textarea:focus',
        'remove-upload', 'div', 'userAgent', 'phone-autoformat', '[data-text=\x22current-step\x22]',
        '[data-form=\x22submit-btn\x22]:visible', 'timestamp', 'select[required]', 'multiple-results',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'input-reveal', 'now', 'metaKey',
        '\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x2035%;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20max-height:\x20100vh;\x0a\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a\x20\x20\x20\x20line-height:1.4\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_attribute-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20margin-bottom:\x2014px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20color:\x20#1eee32;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_title\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-header\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.paragraph\x20{\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.hide\x20{\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type._1\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_script\x20{\x0a\x20\x20\x20\x20color:\x20#fffc57;\x0a\x20\x20\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-wrapper\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-link\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-support-title{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-closebtn{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200.3rem;\x0a\x20\x20\x20\x20right:\x200.7rem;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20}\x0a\x20\x20.f-hide{\x0a\x20\x20\x20\x20display\x20:none\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-logic-text{\x0a\x20\x20\x20\x20padding-left:1rem;\x0a\x20\x20}\x0a\x20\x20.f-logic-text\x20strong{\x0a\x20\x20\x20\x20color\x20:\x20white\x20!Important;\x0a\x20\x20}\x0a',
        'ctrlKey', 'weighted-selection-range', '664XPddFV', '[data-answer=\x22',
        'form[data-form=\x22multistep\x22]', 'Please\x20wait...', 'clicked',
        '[data-form=\x22progress-indicator\x22]', 'includes', 'input-field',
        '[data-form=\x22remove-clone\x22]', 'go-to', 'round', ':input[type=\x22radio\x22]', 'Direct',
        'input[type=\x22radio\x22]:checked', 'not', 'substring',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Radio\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'value', '[data-selection-weight]', 'inputName', 'auto',
        '\x22]:not([data-prefill=\x22false\x22])', '<option>', 'textarea[required]',
        'stopPropagation', '3028850IAJzlZ', '[data-answer]', 'file', 'skip-to',
        '[data-hidden-input=\x22page-visit-duration\x22]',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20is\x20on\x20data-card\x20=\x20true</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'toString', 'redirect', '[data-btn=\x22reset\x22]',
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Current\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '[data-radio-skip]'
    ];
    _0x4e92 = function() { return _0x36d065; };
    return _0x4e92();
}
savedFilledInput = JSON[
        _0x198795(0x1d5)](localStorage[_0x198795(0x2e9)](_0x198795(0x222))), formlyLastStep = JSON[
        'parse'](localStorage[_0x198795(0x2e9)](_0x198795(0x300))), formlyLastStepAnswer = JSON['parse']
    (localStorage[_0x198795(0x2e9)](_0x198795(0x271)));
let paramUrl = $(_0x198795(0x2bb))['data'](_0x198795(0x184));
const progressiveTarget = $('[data-form=\x22multistep\x22]')[_0x198795(0x242)](
        '[data-input-target]'),
    progressiveInput = $(_0x198795(0x2bb))[_0x198795(0x242)](_0x198795(0x247)),
    multiSelections = $(_0x198795(0x2bb))[_0x198795(0x236)](_0x198795(0x1ee));
trackLastStep && (formlyLastStep > x && (x = formlyLastStep), formlyLastStepAnswer && (selections =
    formlyLastStepAnswer));

function _0x5116(_0x22c3dc, _0x428327) {
    const _0x4e928f = _0x4e92();
    return _0x5116 = function(
        _0x511601, _0x442a8e) {
        _0x511601 = _0x511601 - 0x169;
        let _0x51c951 = _0x4e928f[
            _0x511601];
        return _0x51c951;
    }, _0x5116(_0x22c3dc, _0x428327);
}
$(_0x198795(0x26e))[_0x198795(
    0x262)](function() {
    const _0x532d66 = _0x198795;
    ogCloneArr['push']({
        'name': $(this)[_0x532d66(0x236)](_0x532d66(0x267)),
        'element': $(this)[
            _0x532d66(0x267)](!![]),
        'display': $('[data-display=\x22' + $(this)['data'](
            _0x532d66(0x267)) + '\x22]')['eq'](0x0)[_0x532d66(0x267)](!![])
    });
});
const setPageLoadTime = () => {
    const _0x34b758 = _0x198795;
    localStorage['setItem'](_0x34b758(0x173), Date[_0x34b758(0x1f1)]()[_0x34b758(0x215)]());
};
setPageLoadTime();
$(_0x198795(0x1ce))[_0x198795(0x2ff)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x1dcfa6) { notRobot = !![]; }($(steps[x])[_0x198795(0x236)](_0x198795(
    0x2d1)) || $(steps[x])[_0x198795(0x242)](_0x198795(0x280))[_0x198795(0x236)]('card')) && (next = !
    ![]);
$(_0x198795(0x193))['length'] > 0x0 && (countCard = $(_0x198795(0x193))[_0x198795(0x236)](
    'count-card'));
$(_0x198795(0x2bd))[_0x198795(0x2d5)](), $(progressbarClone)[_0x198795(0x21f)](_0x198795(0x2b4)), $(
        _0x198795(0x2e3))[_0x198795(0x17c)]()[_0x198795(0x174)](), $(_0x198795(0x2b8))[_0x198795(0x2d5)]
    (), $(_0x198795(0x243))[_0x198795(0x2d5)](), steps['each'](function() {
        const _0x195924 =
            _0x198795;
        $('[data-form=\x22progress\x22]')[_0x195924(0x2b6)](progressbarClone[_0x195924(0x267)](!![], !
            ![]));
    }), $('[data-input-field]')['hide']();
countCard ? (curStep = curStep + 0x1, totalSteps = steps[_0x198795(0x2ff)], $(_0x198795(0x2fb))[
    _0x198795(0x30c)](totalSteps)) : ($(steps[x])[_0x198795(0x236)]('card') ? curStep = curStep +
    0x0 : curStep = curStep + 0x1, totalSteps = $(
        '[data-form=\x22step\x22]:not([data-card=\x22true\x22])')[_0x198795(0x2ff)], $(
        '[data-text=\x22total-steps\x22]')[_0x198795(0x30c)](totalSteps), $(
        '[data-form=\x22step\x22][data-card]')[_0x198795(0x262)](function() {
        const _0x1b6936 =
            _0x198795;
        $($(_0x1b6936(0x1fb))[$(this)[_0x1b6936(0x16b)]()])['hide']();
    }));
progressbar = $(_0x198795(0x2e3))[_0x198795(0x17c)](), $(_0x198795(0x1fb))['on'](_0x198795(0x237),
        clickableIndicator), $(_0x198795(0x1ea))[_0x198795(0x30c)](curStep), steps[_0x198795(0x2d5)](),
    $(_0x198795(0x24f))[_0x198795(0x2d5)](), $(_0x198795(0x316))[_0x198795(0x262)](function() {
        const
            _0x4696c9 = _0x198795;
        $(this)['attr'](_0x4696c9(0x2c6), _0x4696c9(0x231));
    });

function getParams() {
    const _0xeeb086 = _0x198795;
    urlFormly[_0xeeb086(0x172)][_0xeeb086(0x18b)](function(_0x48fc6e, _0x370035) {
        searchQ['push']
            ({ 'val': _0x48fc6e, 'key': _0x370035 });
    });
}

function getSafe(_0x3874dc, _0x2e8044) {
    try { return _0x3874dc(); } catch (
        _0x4ed179) { return _0x2e8044; }
}

function phoneAutoFormat(_0x4569ef) {
    var _0x1b6ef1 = '';
    return function(_0x4b8be1) {
        const
            _0x4c1c51 = _0x5116;
        var _0x14790e = '',
            _0x5dd0f9 = _0x4b8be1[_0x4c1c51(0x26d)](/\D/g, ''),
            _0x25c31b = 0x0,
            _0x2320f4 = 0x0;
        while (_0x25c31b < _0x5dd0f9[_0x4c1c51(0x2ff)] && _0x2320f4 < _0x4569ef[
                _0x4c1c51(0x2ff)]) {
            _0x4569ef[_0x2320f4] === 'x' ? (_0x14790e += _0x5dd0f9[_0x25c31b],
                _0x25c31b++) : _0x14790e += _0x4569ef[_0x2320f4], _0x2320f4++;
        }
        if (_0x4b8be1[_0x4c1c51(
                0x2ff)] < _0x1b6ef1[_0x4c1c51(0x2ff)]) {
            var _0x2d4458 = _0x4569ef[_0x4c1c51(0x1d7)](
                _0x2320f4);
            _0x14790e += _0x2d4458[_0x4c1c51(0x26d)](/x/g, '');
        }
        return _0x1b6ef1 = _0x14790e,
            _0x14790e;
    };
}

function validateURL(_0x17cbed) {
    const _0x1fb9bc = _0x198795;
    return urlPattern[_0x1fb9bc(0x255)](
        _0x17cbed) ? !![] : ![];
}
quiz && steps[_0x198795(0x262)](function() {
    const _0x5d4e1d =
        _0x198795;
    $(this)['children']()[_0x5d4e1d(0x1bb)](_0x5d4e1d(0x1dd), !![]), $(this)[_0x5d4e1d(0x17c)]()[
        _0x5d4e1d(0x1bb)](_0x5d4e1d(0x261), 0xfa);
});

function disableBtn(_0x4f7afe) {
    const _0x5912b9 = _0x198795;
    fill = ![], !customError && ($('[data-form=\x22next-btn\x22]')[_0x5912b9(0x303)]
        ({ 'opacity': _0x5912b9(0x18d), 'pointer-events': _0x5912b9(0x2a9) }), $(
            '[data-form=\x22next-btn\x22]')['addClass']('disabled'), $(_0x5912b9(0x2b8))[_0x5912b9(
            0x303)]({ 'opacity': _0x5912b9(0x18d), 'pointer-events': _0x5912b9(0x2a9) }), $(
            '[data-form=\x22submit-btn\x22]')[_0x5912b9(0x1a3)]('disabled'), $(_0x5912b9(0x243))['css']
        ({ 'opacity': _0x5912b9(0x18d), 'pointer-events': 'none' }), $(_0x5912b9(0x243))[_0x5912b9(
            0x1a3)](_0x5912b9(0x235)));
}

function enableBtn() {
    const _0x9d8a9d = _0x198795;
    fill = !![], $(_0x9d8a9d(0x199))[_0x9d8a9d(0x303)]({
        'pointer-events': _0x9d8a9d(
            0x20a),
        'opacity': '1'
    }), $('[data-form=\x22next-btn\x22]')[_0x9d8a9d(0x21f)](_0x9d8a9d(
        0x235)), $(_0x9d8a9d(0x2b8))[_0x9d8a9d(0x303)]({
        'pointer-events': _0x9d8a9d(
            0x20a),
        'opacity': '1'
    }), $(_0x9d8a9d(0x2b8))['removeClass'](_0x9d8a9d(0x235)), $(_0x9d8a9d(
        0x243))[_0x9d8a9d(0x303)]({ 'pointer-events': _0x9d8a9d(0x20a), 'opacity': '1' }), $(
        _0x9d8a9d(0x243))['removeClass'](_0x9d8a9d(0x235));
}

function saveLastAnswer(_0x3fc76f) {
    const _0x28095c = _0x198795;
    localStorage[_0x28095c(0x198)](_0x28095c(0x271)), localStorage[_0x28095c(0x1bc)](
        'formlyLastStepAnswer', JSON[_0x28095c(0x244)](_0x3fc76f));
}

function saveFilledInput() {
    const _0xaaa8ae = _0x198795;
    $(_0xaaa8ae(0x18f))[_0xaaa8ae(0x204)](_0xaaa8ae(0x250))['each'](function() {
            const _0x29914c =
                _0xaaa8ae;
            $(this)[_0x29914c(0x1bb)](_0x29914c(0x2c6)) === _0x29914c(0x26b) || $(this)[_0x29914c(
                    0x1bb)]('type') === 'radio' ? $(this)[_0x29914c(0x224)]('checked') && (filledInput[
                    'some'](_0x4c7c16 => _0x4c7c16[_0x29914c(0x209)] === $(this)[_0x29914c(0x1bb)](
                    _0x29914c(0x27d))) ? (filledInput = filledInput[_0x29914c(0x265)](_0x6fe92a =>
                    _0x6fe92a[_0x29914c(0x209)] !== $(this)[_0x29914c(0x1bb)](_0x29914c(0x27d))), $(
                    this)[_0x29914c(0x2e7)]() !== '' && filledInput[_0x29914c(0x1de)]({
                    'inputName': $(
                        this)[_0x29914c(0x1bb)](_0x29914c(0x27d)),
                    'value': $(this)[_0x29914c(0x2e7)]
                        ()
                })) : $(this)[_0x29914c(0x2e7)]() !== '' && filledInput['push']({
                    'inputName': $(
                        this)['attr'](_0x29914c(0x27d)),
                    'value': $(this)[_0x29914c(0x2e7)]()
                })) :
                filledInput['some'](_0x4dd2c3 => _0x4dd2c3[_0x29914c(0x209)] === $(this)[_0x29914c(0x1bb)]
                    (_0x29914c(0x27d))) ? (filledInput = filledInput[_0x29914c(0x265)](_0x187853 =>
                    _0x187853[_0x29914c(0x209)] !== $(this)[_0x29914c(0x1bb)]('name')), $(this)[_0x29914c(
                    0x2e7)]() !== '' && filledInput[_0x29914c(0x1de)]({
                    'inputName': $(this)[_0x29914c(
                        0x1bb)]('name'),
                    'value': $(this)[_0x29914c(0x2e7)]()
                })) : $(this)[_0x29914c(0x2e7)]
                () !== '' && filledInput[_0x29914c(0x1de)]({
                    'inputName': $(this)[_0x29914c(0x1bb)](
                        _0x29914c(0x27d)),
                    'value': $(this)[_0x29914c(0x2e7)]()
                });
        }), trackLastStep && (
            formlyLastStep > x ? lastStep = formlyLastStep : lastStep = x, localStorage['removeItem'](
                _0xaaa8ae(0x300)), localStorage[_0xaaa8ae(0x1bc)](_0xaaa8ae(0x300), lastStep)),
        localStorage[_0xaaa8ae(0x198)](_0xaaa8ae(0x222)), localStorage[_0xaaa8ae(0x1bc)]('filledInput',
            JSON[_0xaaa8ae(0x244)](filledInput));
}

function scrollTop() {
    const _0x272d7b = _0x198795;
    scrollToTop && $('html,\x20body')[_0x272d7b(0x26a)]({
        'scrollTop': $(
            '[data-form=\x22multistep\x22]')[_0x272d7b(0x195)]()['top'] - scrollTopOffset
    }, 0x3e8);
}

function updateURL(_0x401bca) {
    const _0x1890c5 = _0x198795;
    var _0x1193cc = window['location'][
            _0x1890c5(0x24e)
        ],
        _0x5196ef = new URLSearchParams(window[_0x1890c5(0x1a2)][_0x1890c5(0x2e5)]);
    _0x5196ef['set'](_0x1890c5(0x2ad), _0x401bca);
    var _0x1e0032 = _0x1193cc[_0x1890c5(0x223)]('?')[
        0x0] + '?' + _0x5196ef[_0x1890c5(0x215)]();
    window[_0x1890c5(0x26f)]['pushState']({}, '', _0x1e0032);
}

function updateStep() {
    const _0xa15c7b = _0x198795;
    scrollTop(), skip = ![], $(_0xa15c7b(0x2ba))[_0xa15c7b(0x21f)](_0xa15c7b(0x235));
    $('[data-clickable]')['data'](_0xa15c7b(0x296)) && (steps[_0xa15c7b(0x242)](_0xa15c7b(0x1b5))[
        'each'](function() {
        const _0x51c2a7 = _0xa15c7b;
        $($(_0x51c2a7(0x2ba))[$(this)['parents'](_0x51c2a7(0x305))[_0x51c2a7(0x16b)]()]), $(this)[
            'val']() === '' && emptyInput++;
    }), emptyInput > 0x0 ? $('input[type=\x22submit\x22]')[
        'addClass'](_0xa15c7b(0x235)) : $(_0xa15c7b(0x2c4))['removeClass'](_0xa15c7b(0x235)));
    $(_0xa15c7b(0x2ba))[_0xa15c7b(0x21f)](_0xa15c7b(0x2b4)), $(
            '[data-form=\x22custom-progress-indicator\x22]')[_0xa15c7b(0x1a3)](_0xa15c7b(0x235)), $($(
            '[data-form=\x22custom-progress-indicator\x22]')[x])[_0xa15c7b(0x1a3)](_0xa15c7b(0x2b4)),
        selection = selections[_0xa15c7b(0x265)](_0x7660cb => _0x7660cb['step'] === x - 0x1);
    next && (x = getSafe(() => selection[0x0][_0xa15c7b(0x275)]) ? parseInt(getSafe(() => selection[
        0x0][_0xa15c7b(0x275)])) : x);
    $('[data-answer]')[_0xa15c7b(0x2d5)](), steps[_0xa15c7b(0x2d5)]();
    reinitIX === !![] && window[_0xa15c7b(0x2ab)][_0xa15c7b(0x18a)]();
    $(progressbar)[_0xa15c7b(0x21f)](_0xa15c7b(0x2b4));
    for (i = 0x0; i <= x; i++) {
        countCard ? $(
            progressbar[i])[_0xa15c7b(0x1a3)](_0xa15c7b(0x2b4)) : !$(steps[i])[_0xa15c7b(0x236)](
            'card') && $(progressbar[i])[_0xa15c7b(0x1a3)](_0xa15c7b(0x2b4));
    }
    reinitIX === !![] ? (
        window[_0xa15c7b(0x2ab)] && window[_0xa15c7b(0x2ab)][_0xa15c7b(0x1ad)](_0xa15c7b(0x1a1))[
            _0xa15c7b(0x23f)](), document[_0xa15c7b(0x1a6)](new Event(_0xa15c7b(0x169))), $(steps[x])[
            _0xa15c7b(0x2fd)]()) : $(steps[x])['fadeIn'](_0xa15c7b(0x2ac));
    $(_0xa15c7b(0x280))['removeClass']('active-answer-card');
    x === 0x0 && !$(steps[x])['data']('card') && ($(steps[x])[_0xa15c7b(0x242)](_0xa15c7b(0x210))[
        _0xa15c7b(0x2fd)](), $(steps[x])[_0xa15c7b(0x242)](_0xa15c7b(0x210))[_0xa15c7b(0x1a3)](
        'active-answer-card'));
    selection[_0xa15c7b(0x2ff)] > 0x0 ? ($(steps[x])[_0xa15c7b(0x242)](_0xa15c7b(0x1f7) + selection[
        0x0][_0xa15c7b(0x274)] + '\x22]')[_0xa15c7b(0x2fd)](), $(steps[x])[_0xa15c7b(0x242)](
        _0xa15c7b(0x1f7) + selection[0x0][_0xa15c7b(0x274)] + '\x22]')[_0xa15c7b(0x1a3)](_0xa15c7b(
        0x2f1))) : ($(steps[x])[_0xa15c7b(0x242)](_0xa15c7b(0x1f7) + answer + '\x22]')[_0xa15c7b(
        0x2fd)](), $(steps[x])[_0xa15c7b(0x242)](_0xa15c7b(0x1f7) + answer + '\x22]')['addClass'](
        'active-answer-card'));
    if (x === 0x0) $(_0xa15c7b(0x1dc))[_0xa15c7b(0x2d5)](), $(
        '[data-form=\x22next-btn\x22]')[_0xa15c7b(0x2fd)](), $(_0xa15c7b(0x2b8))[_0xa15c7b(0x2d5)]();
    else {
        if (x === steps[_0xa15c7b(0x2ff)] - 0x1 || $(steps[x])[_0xa15c7b(0x242)](_0xa15c7b(0x2b7))[
                _0xa15c7b(0x2ff)] > 0x0) {
            $(_0xa15c7b(0x199))[_0xa15c7b(0x2d5)]();
            if ($(steps[x])[
                    _0xa15c7b(0x242)](_0xa15c7b(0x2c0))['data'](_0xa15c7b(0x1b0))) $(steps[x])[_0xa15c7b(
                0x242)](_0xa15c7b(0x2c0))['show']();
            else $(_0xa15c7b(0x199))[_0xa15c7b(0x236)](_0xa15c7b(0x1b0)) && $(_0xa15c7b(0x199))[_0xa15c7b(
                0x2fd)]();
            $(_0xa15c7b(0x2b8))[_0xa15c7b(0x2fd)](), $(_0xa15c7b(0x243))[_0xa15c7b(0x2fd)](), $(_0xa15c7b(
                0x1dc))[_0xa15c7b(0x2fd)]();
        } else $(_0xa15c7b(0x199))[_0xa15c7b(0x2fd)](), $(_0xa15c7b(
            0x1dc))['show'](), $(_0xa15c7b(0x2b8))['hide'](), $(_0xa15c7b(0x243))[_0xa15c7b(0x2d5)]();
    }
    $
        ($(steps[x])[_0xa15c7b(0x242)](_0xa15c7b(0x281))[0x0])[_0xa15c7b(0x21a)](), $($(steps[x])[
            _0xa15c7b(0x242)](_0xa15c7b(0x1a7))[0x0])[_0xa15c7b(0x21a)](), validation();
    for (idx =
        0x0; idx <= x; idx++) { $($(_0xa15c7b(0x2ba))[idx])[_0xa15c7b(0x21f)]('disabled'); }
    paramUrl &&
        updateURL(curStep);
}

function validateEmail(_0x288f38, _0xe9cdf4, _0x49bf88) {
    const _0x253847 = _0x198795;
    let
        _0xb11eaa = _0x288f38['includes']('@') ? _0x288f38[_0x253847(0x223)]('@')[0x1][_0x253847(0x223)]
        ('.')[0x0] : [];
    dom = [];
    _0xe9cdf4 !== undefined && _0xe9cdf4[_0x253847(0x223)](',')['forEach'](function(
        _0x5701e1) {
        const _0x467d28 = _0x253847;
        _0x5701e1['includes'](_0xb11eaa) && dom[_0x467d28(0x1de)](_0xb11eaa);
    });
    dom[_0x253847(0x2ff)] > 0x0 ? domainAllowed = ![] : domainAllowed = !![];
    var _0x4fcefc =
        /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x4fcefc['test'](_0x288f38) || !domainAllowed ? (
        emailFilled = ![], unfilledArr['push']({ 'input': _0x49bf88 })) : emailFilled = !![];
}

function phoneValidation(_0xaac5f9, _0x409197, _0xd76b82) {
    if (phoneFormat) return _0x409197 >=
        _0xd76b82 ? !![] : ![];
    else { if (_0x409197 >= _0xd76b82) return !![]; }
}

function validation() {
    const _0xdb7c42 = _0x198795;
    $(steps[x])['data'](_0xdb7c42(0x2d1)) && enableBtn();
    unfilledArr = [], inputFilled = !![], radioFilled = !![], checkboxFilled = !![], numFilled = !![],
        fileFilled = !![], dateFilled = !![], timeFilled = !![], selectFilled = !![], textareaFilled = !
        ![], telFilled = !![], emailFilled = !![], passwordFilled = !![], emptyInput = 0x0,
        empReqInput = [], empReqDate = [], empReqTime = [], empReqSelect = [], empReqTel = [],
        empReqTextarea = [], empReqNum = [], empReqFile = [], empReqRadio = [], textareaLength = $(
            steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x285))[_0xdb7c42(0x2ff)], textInputLength = $(steps[
            x])['find'](_0xdb7c42(0x290))[_0xdb7c42(0x2ff)], selectInputLength = $(steps[x])['find'](
            'select[required]:visible')[_0xdb7c42(0x2ff)], emailInputLength = $(steps[x])[_0xdb7c42(
            0x242)](_0xdb7c42(0x185))[_0xdb7c42(0x2ff)], checkboxInputLength = $(steps[x])[_0xdb7c42(
            0x242)]('input[type=\x22checkbox\x22]:visible')[_0xdb7c42(0x2ff)];
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ? disableBtn() :
        enableBtn();
    checkCount = $(steps[x])['data'](_0xdb7c42(0x26b)) ? $(steps[x])[_0xdb7c42(0x236)](_0xdb7c42(
            0x26b)) : $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x1c9))[_0xdb7c42(0x2ff)] > 0x0 ? $(steps[
            x])[_0xdb7c42(0x242)](_0xdb7c42(0x1c9))[_0xdb7c42(0x236)](_0xdb7c42(0x26b)) : 0x0,
        maxCheckCount = $(steps[x])[_0xdb7c42(0x236)]('max-checkbox') ? $(steps[x])[_0xdb7c42(0x236)](
            'max-checkbox') : $(steps[x])['find'](_0xdb7c42(0x2b2))[_0xdb7c42(0x2ff)] > 0x0 ? $(steps[x])[
            _0xdb7c42(0x242)](_0xdb7c42(0x2b2))['data'](_0xdb7c42(0x179)) : 0x0;
    if (!logicExtra) {
        let
            _0xb361bd = $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x1ca)),
            _0x2989a8 = _0xb361bd[_0xdb7c42(0x265)](_0xdb7c42(0x2a0)),
            _0xcd57b1 = _0xb361bd[_0xdb7c42(0x265)](_0xdb7c42(0x2b5)),
            _0x3a9db4 = _0x2989a8[_0xdb7c42(0x265)](_0xdb7c42(0x2b5));
        if (_0xb361bd[_0xdb7c42(0x2ff)] >
            0x0) {
            if (checkCount === '*' || checkCount > _0xb361bd[_0xdb7c42(0x2ff)]) _0xb361bd[
                _0xdb7c42(0x262)](function() {
                const _0x2b3838 = _0xdb7c42;
                $(this)['is'](_0x2b3838(0x2b5)) ? (checkboxFilled = !![], resetInputErrorMessage($(
                    this)[_0x2b3838(0x1bb)]('name'))) : (checkboxFilled = ![], unfilledArr[_0x2b3838(
                    0x1de)]({ 'input': $(this)['attr'](_0x2b3838(0x27d)) }));
            });
            else {
                if (_0xcd57b1[_0xdb7c42(0x2ff)] >= checkCount) {
                    if (_0x2989a8[_0xdb7c42(0x2ff)] > 0x0)
                        _0x2989a8[_0xdb7c42(0x2ff)] === _0x3a9db4[_0xdb7c42(0x2ff)] ? (checkboxFilled = !![],
                            resetInputErrorMessage(_0x2989a8['first']()[_0xdb7c42(0x1bb)](_0xdb7c42(0x27d)))) : (
                            checkboxFilled = ![], _0x2989a8['not'](_0xdb7c42(0x2b5))['each'](function() {
                                const
                                    _0x2db195 = _0xdb7c42;
                                console['log']($(this)[_0x2db195(0x1bb)](_0x2db195(0x27d))), unfilledArr[
                                    _0x2db195(0x1de)]({ 'input': $(this)[_0x2db195(0x1bb)]('name') });
                            }));
                    else {
                        if (maxCheckCount > _0xcd57b1[_0xdb7c42(0x2ff)]) $(steps[x])[_0xdb7c42(0x242)](
                            _0xdb7c42(0x2de))[_0xdb7c42(0x224)](_0xdb7c42(0x235), ![]), $(steps[x])[_0xdb7c42(
                            0x242)](_0xdb7c42(0x2de))[_0xdb7c42(0x1b7)](_0xdb7c42(0x1b4))[_0xdb7c42(0x21f)](
                            'disabled');
                        else maxCheckCount > 0x0 && ($(steps[x])['find'](_0xdb7c42(0x1aa))[_0xdb7c42(0x1b7)](
                                _0xdb7c42(0x1b4))[_0xdb7c42(0x1a3)](_0xdb7c42(0x235)), $(steps[x])['find'](
                                _0xdb7c42(0x1aa))[_0xdb7c42(0x224)]('disabled', !![]), _0x2989a8[_0xdb7c42(0x204)]
                            (_0xdb7c42(0x2b5))[_0xdb7c42(0x262)](function() {
                                const _0x5df228 = _0xdb7c42;
                                unfilledArr[_0x5df228(0x1de)]({
                                    'input': $(this)[_0x5df228(0x1bb)](_0x5df228(
                                        0x27d))
                                });
                            }));
                    }
                } else checkCount > 0x0 && (checkboxFilled = ![], _0x2989a8[
                    _0xdb7c42(0x204)](_0xdb7c42(0x2b5))[_0xdb7c42(0x262)](function() {
                    const _0x234e01 =
                        _0xdb7c42;
                    unfilledArr['push']({ 'input': $(this)[_0x234e01(0x1bb)]('name') });
                }), unfilledArr[
                    _0xdb7c42(0x1de)]({
                    'input': _0xb361bd[_0xdb7c42(0x175)]()[_0xdb7c42(0x1bb)](
                        _0xdb7c42(0x27d))
                }));
            }
        }
        $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x21e))['each'](
            function(_0xc52818) {
                const _0x12470a = _0xdb7c42;
                var _0x5ecc8f = $(this)[_0x12470a(
                    0x1bb)](_0x12470a(0x27d));
                $(_0x12470a(0x24c) + _0x5ecc8f + _0x12470a(0x246))[_0x12470a(0x2ff)] == 0x0 ? (!
                    empReqRadio[_0x12470a(0x242)](_0x2df6c4 => _0x2df6c4['input'] === _0xc52818) &&
                    empReqRadio[_0x12470a(0x1de)]({ 'input': _0xc52818 }), unfilledArr[_0x12470a(0x1de)]
                    ({ 'input': $(this)[_0x12470a(0x1bb)]('name') })) : empReqRadio = empReqRadio[
                    'filter'](
                    _0x5e235e => _0x5e235e[_0x12470a(0x1df)] !== _0xc52818), empReqRadio[_0x12470a(
                    0x2ff)] === 0x0 ? radioFilled = !![] : radioFilled = ![];
            }), $(steps[x])[_0xdb7c42(
            0x242)](':input[type=\x22text\x22][required]')[_0xdb7c42(0x262)](function(
            _0x3d83f6) {
            const _0x591243 = _0xdb7c42;
            let _0xb82b86 = $(this)[_0x591243(0x2e7)]()[
                    _0x591243(0x2ff)],
                _0x3820ae = $(this)['data']('min-character') ? $(this)[_0x591243(0x236)](_0x591243(
                    0x2d8)) : 0x0;
            $(this)[_0x591243(0x2e7)]() !== '' && _0xb82b86 >= _0x3820ae ? empReqInput = empReqInput[
                    'filter'](_0x540e55 => _0x540e55['input'] !== _0x3d83f6) : (!empReqInput[_0x591243(
                    0x242)](_0x1bfcdb => _0x1bfcdb['input'] === _0x3d83f6) && empReqInput[_0x591243(
                    0x1de)]({ 'input': _0x3d83f6 }), unfilledArr[_0x591243(0x1de)]({
                    'input': $(this)[
                        'attr'](_0x591243(0x27d))
                })), empReqInput[_0x591243(0x2ff)] === 0x0 ?
                inputFilled = !![] : inputFilled = ![];
        }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(
            0x1d1))[_0xdb7c42(0x262)](function(_0x4d616a) {
            const _0xc3ecb3 = _0xdb7c42;
            let
                _0x2b8287 = $(this)[_0xc3ecb3(0x2e7)]()[_0xc3ecb3(0x2ff)],
                _0x594d08 = $(this)['data']('min-character') ? $(this)[_0xc3ecb3(0x236)](
                    'min-character') : 0x0;
            $(this)[_0xc3ecb3(0x2e7)]() !== '' && _0x2b8287 >= _0x594d08 ? empReqPassword =
                empReqPassword[_0xc3ecb3(0x265)](_0x43f519 => _0x43f519[_0xc3ecb3(0x1df)] !==
                    _0x4d616a) : (!empReqPassword[_0xc3ecb3(0x242)](_0x5a8636 => _0x5a8636['input'] ===
                        _0x4d616a) && empReqPassword['push']({ 'input': _0x4d616a }), unfilledArr['push']
                    ({ 'input': $(this)[_0xc3ecb3(0x1bb)](_0xc3ecb3(0x27d)) })), empReqPassword[_0xc3ecb3(
                    0x2ff)] === 0x0 ? passwordFilled = !![] : passwordFilled = ![];
        }), $(steps[x])[
            _0xdb7c42(0x242)](_0xdb7c42(0x28f))['each'](function(_0x4a2ca3) {
            const _0x4095fd =
                _0xdb7c42;
            let _0x1c5faf = $(this)[_0x4095fd(0x2e7)]()[_0x4095fd(0x2ff)],
                _0x207e05 = $(this)['data']('min-character') ? $(this)[_0x4095fd(0x236)](_0x4095fd(
                    0x2d8)) : 0x0;
            $(this)[_0x4095fd(0x2e7)]() !== '' && _0x1c5faf >= _0x207e05 ? empReqUrl = empReqUrl[
                    'filter'](_0x2049cc => _0x2049cc[_0x4095fd(0x1df)] !== _0x4a2ca3) : (!empReqTime[
                        _0x4095fd(0x242)](_0x53d41c => _0x53d41c[_0x4095fd(0x1df)] === _0x4a2ca3) &&
                    empReqUrl[_0x4095fd(0x1de)]({ 'input': _0x4a2ca3 }), unfilledArr['push']({
                        'input': $(
                            this)[_0x4095fd(0x1bb)]('name')
                    })), empReqUrl[_0x4095fd(0x2ff)] === 0x0 &&
                validateURL($(this)['val']()) ? urlFilled = !![] : urlFilled = ![];
        }), $(steps[x])[
            _0xdb7c42(0x242)](':input[type=\x22time\x22][required]')[_0xdb7c42(0x262)](function(
            _0x218d15) {
            const _0x31a8d0 = _0xdb7c42;
            let _0x4b99a8 = $(this)[_0x31a8d0(0x2e7)]()[
                    _0x31a8d0(0x2ff)],
                _0x3d5e04 = $(this)['data'](_0x31a8d0(0x2d8)) ? $(this)['data']('min-character') : 0x0;
            $(this)[_0x31a8d0(0x2e7)]() !== '' && _0x4b99a8 >= _0x3d5e04 ? empReqTime = empReqTime[
                    _0x31a8d0(0x265)](_0x25e86d => _0x25e86d[_0x31a8d0(0x1df)] !== _0x218d15) : (!
                    empReqTime[_0x31a8d0(0x242)](_0x5748a1 => _0x5748a1[_0x31a8d0(0x1df)] ===
                        _0x218d15) && empReqTime[_0x31a8d0(0x1de)]({ 'input': _0x218d15 }), unfilledArr[
                        'push']({ 'input': $(this)['attr'](_0x31a8d0(0x27d)) })), empReqTime['length'] ===
                0x0 ? timeFilled = !![] : timeFilled = ![];
        }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(
            0x23c))[_0xdb7c42(0x262)](function(_0x5704b0) {
            const _0x19abc9 = _0xdb7c42;
            $(this)[_0x19abc9(0x2e7)]() !== '' ? empReqDate = empReqDate['filter'](_0x280785 =>
                    _0x280785[_0x19abc9(0x1df)] !== _0x5704b0) : (!empReqDate['find'](_0x855f5d =>
                        _0x855f5d['input'] === _0x5704b0) && empReqDate['push']({ 'input': _0x5704b0 }),
                    unfilledArr[_0x19abc9(0x1de)]({
                        'input': $(this)[_0x19abc9(0x1bb)](_0x19abc9(
                            0x27d))
                    })), empReqDate[_0x19abc9(0x2ff)] === 0x0 ? dateFilled = !![] :
                dateFilled = ![];
        }), $(steps[x])[_0xdb7c42(0x242)](':input[type=\x22tel\x22][required]')[
            _0xdb7c42(0x262)](function(_0xa21807) {
            const _0x1a2ae7 = _0xdb7c42;
            if ($(this)[_0x1a2ae7(
                    0x2e7)]() !== '') {
                let _0x30c558 = $(this)[_0x1a2ae7(0x2e7)]()[_0x1a2ae7(0x2ff)],
                    _0x31272f = $(this)[_0x1a2ae7(0x236)](_0x1a2ae7(0x2d8)) ? $(this)[_0x1a2ae7(0x236)](
                        _0x1a2ae7(0x2d8)) : 0x0;
                if ($(this)[_0x1a2ae7(0x236)](_0x1a2ae7(0x1e9))) {
                    var
                        _0x453e37 = phoneAutoFormat($(this)['data'](_0x1a2ae7(0x1e9)));
                    $(this)[_0x1a2ae7(0x2e7)](_0x453e37($(this)[_0x1a2ae7(0x2e7)]()));
                }
                phoneValidation(
                    $(this)['val'](), _0x30c558, _0x31272f) ? empReqTel = empReqTel[_0x1a2ae7(0x265)](
                    _0x43851f => _0x43851f[_0x1a2ae7(0x1df)] !== _0xa21807) : empReqTel[_0x1a2ae7(
                    0x1de)]({ 'input': _0xa21807 });
            } else !empReqTel['find'](_0x42c5b2 => _0x42c5b2[
                    'input'] === _0xa21807) && empReqTel[_0x1a2ae7(0x1de)]({ 'input': _0xa21807 }),
                unfilledArr[_0x1a2ae7(0x1de)]({ 'input': $(this)[_0x1a2ae7(0x1bb)](_0x1a2ae7(0x27d)) });
            empReqTel[_0x1a2ae7(0x2ff)] === 0x0 ? telFilled = !![] : telFilled = ![];
        }), $(steps[x])[
            'find'](_0xdb7c42(0x1cb))['each'](function(_0x419f98) {
            const _0x2263a3 = _0xdb7c42;
            $(this)[_0x2263a3(0x2e7)]() !== '' ? empReqFile = empReqFile[_0x2263a3(0x265)](
                    _0x18d4dd => _0x18d4dd[_0x2263a3(0x1df)] !== _0x419f98) : (!empReqFile['find'](
                        _0x5bb0a5 => _0x5bb0a5[_0x2263a3(0x1df)] === _0x419f98) && empReqFile['push']
                    ({ 'input': _0x419f98 }), unfilledArr['push']({
                        'input': $(this)[_0x2263a3(0x1bb)](
                            _0x2263a3(0x27d))
                    })), empReqFile[_0x2263a3(0x2ff)] === 0x0 ? fileFilled = !![] :
                fileFilled = ![];
        }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x2d9))[_0xdb7c42(0x262)](
            function(_0x371fa4) {
                const _0xe8ea17 = _0xdb7c42;
                let _0x339da9 = $(this)['val']()[
                        _0xe8ea17(0x2ff)],
                    _0x2df6a3 = $(this)[_0xe8ea17(0x236)](_0xe8ea17(0x2d8)) ? $(this)[_0xe8ea17(0x236)](
                        'min-character') : 0x0;
                $(this)[_0xe8ea17(0x2e7)]() !== '' && _0x339da9 >= _0x2df6a3 ? empReqNum = empReqNum[
                    _0xe8ea17(0x265)](_0x26b122 => _0x26b122[_0xe8ea17(0x1df)] !== _0x371fa4) : (!
                    empReqNum[_0xe8ea17(0x242)](_0x27a501 => _0x27a501[_0xe8ea17(0x1df)] === _0x371fa4) &&
                    empReqNum[_0xe8ea17(0x1de)]({ 'input': _0x371fa4 }), unfilledArr[_0xe8ea17(0x1de)]
                    ({ 'input': $(this)[_0xe8ea17(0x1bb)](_0xe8ea17(0x27d)) })), empReqNum[_0xe8ea17(
                    0x2ff)] === 0x0 ? numFilled = !![] : numFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](
            _0xdb7c42(0x1ed))[_0xdb7c42(0x262)](function(_0x46769c) {
            const _0x1f8002 = _0xdb7c42;
            let
                _0x1c706b = $(this)[_0x1f8002(0x2e7)]();
            _0x1c706b === '' && (_0x1c706b = null), _0x1c706b != null ? empReqSelect = empReqSelect[
                'filter'](_0x1d66ae => _0x1d66ae[_0x1f8002(0x1df)] !== _0x46769c) : (!empReqSelect[
                    'find'](_0x343e94 => _0x343e94[_0x1f8002(0x1df)] === _0x46769c) && empReqSelect[
                    _0x1f8002(0x1de)]({ 'input': _0x46769c }), unfilledArr[_0x1f8002(0x1de)]
                ({ 'input': $(this)[_0x1f8002(0x1bb)](_0x1f8002(0x27d)) })), empReqSelect[_0x1f8002(
                0x2ff)] === 0x0 ? selectFilled = !![] : selectFilled = ![];
        }), $(steps[x])[_0xdb7c42(
            0x242)](_0xdb7c42(0x20d))[_0xdb7c42(0x262)](function(_0x1ebceb) {
            const _0x42e97c =
                _0xdb7c42;
            let _0x8c3839 = $(this)['val']()['length'],
                _0x3e33e3 = $(this)[_0x42e97c(0x236)](_0x42e97c(0x2d8)) ? $(this)[_0x42e97c(0x236)](
                    _0x42e97c(0x2d8)) : 0x0;
            $(this)['val']() !== '' && _0x8c3839 >= _0x3e33e3 ? empReqTextarea = empReqTextarea[
                _0x42e97c(0x265)](_0x3879ee => _0x3879ee[_0x42e97c(0x1df)] !== _0x1ebceb) : (!
                empReqTextarea[_0x42e97c(0x242)](_0x206a02 => _0x206a02[_0x42e97c(0x1df)] ===
                    _0x1ebceb) && empReqTextarea['push']({ 'input': _0x1ebceb }), unfilledArr['push']
                ({ 'input': $(this)[_0x42e97c(0x1bb)](_0x42e97c(0x27d)) })), empReqTextarea[_0x42e97c(
                0x2ff)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
        }), $(steps[x])[_0xdb7c42(
            0x242)](_0xdb7c42(0x1d6))['each'](function() {
            const _0x77779f = _0xdb7c42;
            $(this)[_0x77779f(0x2e7)]() !== '' ? validateEmail($(this)[_0x77779f(0x2e7)](), $(this)[
                _0x77779f(0x236)](_0x77779f(0x29a)), $(this)[_0x77779f(0x1bb)](_0x77779f(0x27d))) : (
                emailFilled = ![], unfilledArr[_0x77779f(0x1de)]({
                    'input': $(this)[_0x77779f(0x1bb)](
                        _0x77779f(0x27d))
                }));
        });
    } else {
        if ($(steps[x])[_0xdb7c42(0x236)]('card')) answer =
            $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x21d))[_0xdb7c42(0x236)](_0xdb7c42(0x1ff)),
            selections = selections[_0xdb7c42(0x265)](_0x3073cf => _0x3073cf['step'] !== x), selections[
                _0xdb7c42(0x1de)]({ 'step': x, 'selected': answer }), next = !![], back = ![];
        else $(steps[x])[_0xdb7c42(0x242)]('.active-answer-card')[_0xdb7c42(0x236)](_0xdb7c42(0x2d1)) &&
            (answer = $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))['data'](_0xdb7c42(0x1ff)),
                selections = selections[_0xdb7c42(0x265)](_0x2fd530 => _0x2fd530[_0xdb7c42(0x2ad)] !== x),
                selections['push']({ 'step': x, 'selected': answer }), next = !![], back = ![]);
        let
            _0x4aff62 = $(steps[x])['find'](_0xdb7c42(0x1c8)),
            _0x16c57e = _0x4aff62[_0xdb7c42(0x265)]('[required]'),
            _0x3fadf9 = _0x4aff62['filter'](_0xdb7c42(0x2b5)),
            _0x149051 = _0x16c57e[_0xdb7c42(0x265)](':checked'),
            _0x2844bd = _0x16c57e['length'] === 0x0,
            _0x3d46c1 = _0x3fadf9[_0xdb7c42(0x2ff)],
            _0x570e96 = _0x149051[_0xdb7c42(0x2ff)];
        if (_0x4aff62[_0xdb7c42(0x2ff)] > 0x0) {
            if (
                checkCount === '*' || checkCount > _0x4aff62[_0xdb7c42(0x2ff)]) _0x4aff62[_0xdb7c42(0x262)](
                function() {
                    const _0x46cc38 = _0xdb7c42;
                    let _0x4b26ca = $(this),
                        _0x1a1f5c = _0x4b26ca['is'](_0x46cc38(0x2b5));
                    if (_0x1a1f5c) {
                        checkboxFilled = !![],
                            resetInputErrorMessage(_0x4b26ca['attr'](_0x46cc38(0x27d)));
                        if (_0x2844bd) {
                            let
                                _0x504084 = _0x4b26ca[_0x46cc38(0x276)](_0x46cc38(0x25c))[_0x46cc38(0x236)](
                                    _0x46cc38(0x212)),
                                _0x300818 = _0x4b26ca[_0x46cc38(0x276)]('[data-go-to]')[_0x46cc38(0x1bb)](
                                    _0x46cc38(0x191));
                            if (_0x300818) {
                                selections = selections[_0x46cc38(0x265)](
                                        _0x1b6361 => _0x1b6361[_0x46cc38(0x2ad)] !== x), selections[_0x46cc38(0x1de)]
                                    ({ 'step': x, 'selected': _0x300818 });
                                if (_0x504084) {
                                    selections = selections[
                                        _0x46cc38(0x265)](_0x22bf8f => _0x22bf8f[_0x46cc38(0x2ad)] !== _0x504084 -
                                        0x2), selections['push']({
                                        'step': _0x504084 -
                                            0x2,
                                        'selected': _0x300818
                                    });
                                    let _0x522596 = selections['findIndex'](
                                        _0x129d90 => _0x129d90['step'] === x);
                                    selections[_0x522596][_0x46cc38(0x275)] = parseInt(_0x504084) - 0x1, selections[
                                        _0x522596][_0x46cc38(0x25d)] = x;
                                }
                            }
                        }
                    } else checkboxFilled = ![],
                        unfilledArr[_0x46cc38(0x1de)]({
                            'input': _0x4b26ca[_0x46cc38(0x1bb)](_0x46cc38(
                                0x27d))
                        });
                });
            else {
                if (_0x3d46c1 >= checkCount) {
                    if (_0x16c57e['length'] > 0x0) {
                        if (_0x16c57e[
                                'length'] === _0x570e96) {
                            let _0x2ea8b3 = _0x3fadf9[_0xdb7c42(0x175)](),
                                _0x368342 = _0x2ea8b3[_0xdb7c42(0x276)](_0xdb7c42(0x25c))[_0xdb7c42(0x236)](
                                    'skip-to'),
                                _0x261544 = _0x2ea8b3[_0xdb7c42(0x276)](_0xdb7c42(0x21d))['attr'](_0xdb7c42(
                                    0x191));
                            if (_0x261544) {
                                selections = selections[_0xdb7c42(0x265)](_0x5c0e24 =>
                                        _0x5c0e24['step'] !== x), selections['push']
                                    ({ 'step': x, 'selected': _0x261544 });
                                if (_0x368342) {
                                    selections = selections[
                                        'filter'](_0x17c499 => _0x17c499['step'] !== _0x368342 - 0x2), selections[
                                        _0xdb7c42(0x1de)]({ 'step': _0x368342 - 0x2, 'selected': _0x261544 });
                                    let
                                        _0x43a102 = selections['findIndex'](_0x49c906 => _0x49c906['step'] === x);
                                    selections[_0x43a102][_0xdb7c42(0x275)] = parseInt(_0x368342) - 0x1, selections[
                                        _0x43a102][_0xdb7c42(0x25d)] = x;
                                }
                            }
                            checkboxFilled = !![],
                                resetInputErrorMessage(_0x16c57e[_0xdb7c42(0x175)]()[_0xdb7c42(0x1bb)](_0xdb7c42(
                                    0x27d)));
                        } else checkboxFilled = ![], _0x16c57e['not'](_0xdb7c42(0x2b5))['each'](
                            function() {
                                const _0x18d3a3 = _0xdb7c42;
                                unfilledArr['push']({ 'input': $(this)[_0x18d3a3(0x1bb)](_0x18d3a3(0x27d)) });
                            }
                        );
                    } else {
                        if (maxCheckCount > _0x3d46c1) {
                            let _0x9a2867 = _0x3fadf9['first'](),
                                _0x45d0cd = _0x9a2867['closest'](_0xdb7c42(0x25c))[_0xdb7c42(0x236)](_0xdb7c42(
                                    0x212)),
                                _0x7564fc = _0x9a2867[_0xdb7c42(0x276)]('[data-go-to]')['attr'](_0xdb7c42(
                                    0x191));
                            if (_0x7564fc) {
                                selections = selections[_0xdb7c42(0x265)](_0x50f57d =>
                                        _0x50f57d['step'] !== x), selections['push']
                                    ({ 'step': x, 'selected': _0x7564fc });
                                if (_0x45d0cd) {
                                    selections = selections[
                                            _0xdb7c42(0x265)](_0x4b664a => _0x4b664a['step'] !== _0x45d0cd - 0x2),
                                        selections[_0xdb7c42(0x1de)]({
                                            'step': _0x45d0cd -
                                                0x2,
                                            'selected': _0x7564fc
                                        });
                                    let _0x4e4cf6 = selections[_0xdb7c42(0x2db)](
                                        _0x5242a6 => _0x5242a6['step'] === x);
                                    selections[_0x4e4cf6][_0xdb7c42(0x275)] = parseInt(_0x45d0cd) - 0x1, selections[
                                        _0x4e4cf6][_0xdb7c42(0x25d)] = x;
                                }
                            }
                            checkboxFilled = !![], $(steps[x])[
                                _0xdb7c42(0x242)]('input[type=\x22checkbox\x22]:not(:checked)')['parent'](
                                _0xdb7c42(0x1b4))[_0xdb7c42(0x21f)](_0xdb7c42(0x235)), $(steps[x])[_0xdb7c42(
                                0x242)](_0xdb7c42(0x1aa))['prop'](_0xdb7c42(0x235), ![]);
                        } else maxCheckCount >
                            0x0 && ($(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x1aa))['parent'](_0xdb7c42(0x1b4))[
                                _0xdb7c42(0x1a3)](_0xdb7c42(0x235)), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(
                                0x1aa))[_0xdb7c42(0x224)](_0xdb7c42(0x235), !![]));
                    }
                } else checkCount > 0x0 && (
                    checkboxFilled = ![], _0x16c57e[_0xdb7c42(0x204)](':checked')[_0xdb7c42(0x262)](
                        function() {
                            const _0x3bd7e0 = _0xdb7c42;
                            unfilledArr[_0x3bd7e0(0x1de)]({ 'input': $(this)[_0x3bd7e0(0x1bb)]('name') });
                        }),
                    unfilledArr['push']({
                        'input': _0x4aff62[_0xdb7c42(0x175)]()[_0xdb7c42(0x1bb)](
                            _0xdb7c42(0x27d))
                    }));
            }
        }
        $(steps[x])['find'](_0xdb7c42(0x280))[_0xdb7c42(0x242)](
                _0xdb7c42(0x21e))[_0xdb7c42(0x262)](function(_0x542dec) {
                const _0x5131a2 = _0xdb7c42;
                var
                    _0x368c11 = $(this)['attr'](_0x5131a2(0x27d));
                $(_0x5131a2(0x24c) + _0x368c11 + _0x5131a2(0x246))[_0x5131a2(0x2ff)] == 0x0 ? (!
                        empReqRadio[_0x5131a2(0x242)](_0x571b27 => _0x571b27[_0x5131a2(0x1df)] ===
                            _0x542dec) && empReqRadio[_0x5131a2(0x1de)]({ 'input': _0x542dec }), unfilledArr[
                            _0x5131a2(0x1de)]({ 'input': $(this)[_0x5131a2(0x1bb)](_0x5131a2(0x27d)) })) :
                    empReqRadio = empReqRadio[_0x5131a2(0x265)](_0x185dd7 => _0x185dd7['input'] !==
                        _0x542dec), empReqRadio[_0x5131a2(0x2ff)] === 0x0 ? radioFilled = !![] :
                    radioFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(0x242)](
                _0xdb7c42(0x1cf))[_0xdb7c42(0x262)](function(_0x473b6c) {
                const _0x54394d = _0xdb7c42;
                let
                    _0x479758 = $(this)[_0x54394d(0x2e7)]()[_0x54394d(0x2ff)],
                    _0x34cf46 = $(this)[_0x54394d(0x236)]('min-character') ? $(this)[_0x54394d(0x236)](
                        'min-character') : 0x0;
                $(this)['val']() !== '' && _0x479758 >= _0x34cf46 ? empReqInput = empReqInput[_0x54394d(
                        0x265)](_0x2c146d => _0x2c146d[_0x54394d(0x1df)] !== _0x473b6c) : (!empReqInput[
                            'find'](_0x55f9a3 => _0x55f9a3[_0x54394d(0x1df)] === _0x473b6c) && empReqInput[
                            _0x54394d(0x1de)]({ 'input': _0x473b6c }), unfilledArr[_0x54394d(0x1de)]
                        ({ 'input': $(this)[_0x54394d(0x1bb)](_0x54394d(0x27d)) })), empReqInput['length'] ===
                    0x0 ? inputFilled = !![] : inputFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(
                0x280))[_0xdb7c42(0x242)](_0xdb7c42(0x252))[_0xdb7c42(0x262)](function(_0xb8a1b9) {
                const
                    _0x3a6fa2 = _0xdb7c42;
                skipTo = undefined, $(this)['parents'](_0x3a6fa2(0x25c))[_0x3a6fa2(0x236)](_0x3a6fa2(
                    0x212)) !== '' && (skipTo = $(this)['parents']('[data-skip-to]')[_0x3a6fa2(0x236)](
                    _0x3a6fa2(0x212))), $(this)[_0x3a6fa2(0x1e1)](_0x3a6fa2(0x21d))[_0x3a6fa2(0x1bb)](
                    _0x3a6fa2(0x191)) && (answer = $(this)['parents']('[data-go-to]')[_0x3a6fa2(0x1bb)](
                        _0x3a6fa2(0x191)), selections = selections[_0x3a6fa2(0x265)](_0x592d00 => _0x592d00[
                        _0x3a6fa2(0x2ad)] !== x), selections['push']({ 'step': x, 'selected': answer }),
                    skipTo && (selections = selections[_0x3a6fa2(0x265)](_0x1aaa62 => _0x1aaa62[_0x3a6fa2(
                            0x2ad)] !== skipTo - 0x2), selections[_0x3a6fa2(0x1de)]({
                            'step': skipTo -
                                0x2,
                            'selected': answer
                        }), objIndex = selections[_0x3a6fa2(0x2db)](_0x559092 =>
                            _0x559092[_0x3a6fa2(0x2ad)] === x), selections[objIndex][_0x3a6fa2(0x275)] =
                        parseInt(skipTo) - 0x1, selections[objIndex][_0x3a6fa2(0x25d)] = x));
            }), $(steps[x])[
                'find'](_0xdb7c42(0x280))[_0xdb7c42(0x242)](':input[type=\x22password\x22][required]')[
                'each'](function(_0x4a4f72) {
                const _0x407935 = _0xdb7c42;
                let _0x3d4a3c = $(this)[
                        _0x407935(0x2e7)]()['length'],
                    _0x42fa27 = $(this)['data'](_0x407935(0x2d8)) ? $(this)[_0x407935(0x236)](_0x407935(
                        0x2d8)) : 0x0;
                $(this)[_0x407935(0x2e7)]() !== '' && _0x3d4a3c >= _0x42fa27 ? empReqPassword =
                    empReqPassword[_0x407935(0x265)](_0x37641e => _0x37641e['input'] !== _0x4a4f72) : (!
                        empReqPassword[_0x407935(0x242)](_0x4203b6 => _0x4203b6[_0x407935(0x1df)] ===
                            _0x4a4f72) && empReqPassword[_0x407935(0x1de)]({ 'input': _0x4a4f72 }), unfilledArr[
                            _0x407935(0x1de)]({ 'input': $(this)[_0x407935(0x1bb)](_0x407935(0x27d)) })),
                    empReqPassword[_0x407935(0x2ff)] === 0x0 ? passwordFilled = !![] :
                    passwordFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(
                0x242)](_0xdb7c42(0x18e))[_0xdb7c42(0x262)](function(_0x5acc81) {
                const _0x3b97c5 =
                    _0xdb7c42;
                skipTo = undefined, $(this)[_0x3b97c5(0x1e1)](_0x3b97c5(0x25c))[_0x3b97c5(0x236)](
                    _0x3b97c5(0x212)) !== '' && (skipTo = $(this)[_0x3b97c5(0x1e1)](_0x3b97c5(0x25c))[
                    _0x3b97c5(0x236)](_0x3b97c5(0x212))), $(this)[_0x3b97c5(0x1e1)]('[data-go-to]')[
                    _0x3b97c5(0x1bb)](_0x3b97c5(0x191)) && (answer = $(this)[_0x3b97c5(0x1e1)](
                    '[data-go-to]')[_0x3b97c5(0x1bb)](_0x3b97c5(0x191)), selections = selections[
                    _0x3b97c5(0x265)](_0x48f148 => _0x48f148['step'] !== x), selections[_0x3b97c5(
                    0x1de)]({ 'step': x, 'selected': answer }), skipTo && (selections = selections[
                    'filter'](_0x5941c6 => _0x5941c6[_0x3b97c5(0x2ad)] !== skipTo - 0x2), selections[
                    'push']({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                    _0x3b97c5(0x2db)](_0x3acc27 => _0x3acc27[_0x3b97c5(0x2ad)] === x), selections[
                    objIndex][_0x3b97c5(0x275)] = parseInt(skipTo) - 0x1, selections[objIndex][
                    _0x3b97c5(0x25d)
                ] = x));
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(0x242)](_0xdb7c42(
                0x28f))[_0xdb7c42(0x262)](function(_0x19177a) {
                const _0xe98351 = _0xdb7c42;
                let
                    _0x915a25 = $(this)[_0xe98351(0x2e7)]()[_0xe98351(0x2ff)],
                    _0x5687bb = $(this)[_0xe98351(0x236)](_0xe98351(0x2d8)) ? $(this)[_0xe98351(0x236)](
                        _0xe98351(0x2d8)) : 0x0;
                $(this)[_0xe98351(0x2e7)]() !== '' && _0x915a25 >= _0x5687bb ? empReqUrl = empReqUrl[
                        'filter'](_0x22bbf1 => _0x22bbf1[_0xe98351(0x1df)] !== _0x19177a) : (!empReqUrl[
                            _0xe98351(0x242)](_0x2838ae => _0x2838ae[_0xe98351(0x1df)] === _0x19177a) &&
                        empReqUrl[_0xe98351(0x1de)]({ 'input': _0x19177a }), unfilledArr[_0xe98351(0x1de)]
                        ({ 'input': $(this)[_0xe98351(0x1bb)]('name') })), empReqUrl[_0xe98351(0x2ff)] ===
                    0x0 && validateURL($(this)[_0xe98351(0x2e7)]()) ? urlFilled = !![] : urlFilled = ![];
            }),
            $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))['find'](_0xdb7c42(0x253))['each'](function(
                _0x185f83) {
                const _0x329e26 = _0xdb7c42;
                skipTo = undefined, $(this)[_0x329e26(0x1e1)]('[data-skip-to]')['data'](_0x329e26(
                    0x212)) !== '' && (skipTo = $(this)['parents']('[data-skip-to]')['data'](_0x329e26(
                    0x212))), $(this)[_0x329e26(0x1e1)](_0x329e26(0x21d))['attr']('data-go-to') && (
                    answer = $(this)[_0x329e26(0x1e1)](_0x329e26(0x21d))[_0x329e26(0x1bb)]('data-go-to'),
                    selections = selections[_0x329e26(0x265)](_0x19c83b => _0x19c83b[_0x329e26(0x2ad)] !==
                        x), selections[_0x329e26(0x1de)]({ 'step': x, 'selected': answer }), skipTo && (
                        selections = selections[_0x329e26(0x265)](_0x500015 => _0x500015[_0x329e26(
                            0x2ad)] !== skipTo - 0x2), selections['push']({
                            'step': skipTo -
                                0x2,
                            'selected': answer
                        }), objIndex = selections[_0x329e26(0x2db)](_0x209c64 =>
                            _0x209c64[_0x329e26(0x2ad)] === x), selections[objIndex]['skipTo'] = parseInt(
                            skipTo) - 0x1, selections[objIndex][_0x329e26(0x25d)] = x));
            }), $(steps[x])[
                _0xdb7c42(0x242)]('.active-answer-card')[_0xdb7c42(0x242)](
                ':input[type=\x22date\x22][required]')[_0xdb7c42(0x262)](function(_0x4ab463) {
                const
                    _0x175467 = _0xdb7c42;
                $(this)[_0x175467(0x2e7)]() !== '' ? empReqDate = empReqDate['filter'](_0x5b76eb =>
                        _0x5b76eb[_0x175467(0x1df)] !== _0x4ab463) : (!empReqDate['find'](_0x58111a =>
                            _0x58111a[_0x175467(0x1df)] === _0x4ab463) && empReqDate[_0x175467(0x1de)]
                        ({ 'input': _0x4ab463 }), unfilledArr[_0x175467(0x1de)]({
                            'input': $(this)[_0x175467(
                                0x1bb)]('name')
                        })), empReqDate[_0x175467(0x2ff)] === 0x0 ? dateFilled = !![] :
                    dateFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)]('.active-answer-card')[_0xdb7c42(
                0x242)](_0xdb7c42(0x25a))[_0xdb7c42(0x262)](function(_0x1ab105) {
                const _0x419d99 =
                    _0xdb7c42;
                skipTo = undefined, $(this)[_0x419d99(0x1e1)](_0x419d99(0x25c))['data']('skip-to') !==
                    '' && (skipTo = $(this)[_0x419d99(0x1e1)](_0x419d99(0x25c))[_0x419d99(0x236)](
                        'skip-to')), $(this)['parents'](_0x419d99(0x21d))[_0x419d99(0x1bb)](_0x419d99(
                        0x191)) && (answer = $(this)[_0x419d99(0x1e1)](_0x419d99(0x21d))[_0x419d99(0x1bb)](
                            _0x419d99(0x191)), selections = selections[_0x419d99(0x265)](_0x54cbcb => _0x54cbcb[
                            _0x419d99(0x2ad)] !== x), selections[_0x419d99(0x1de)]
                        ({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x419d99(
                                0x265)](
                                _0x27fa42 => _0x27fa42['step'] !== skipTo - 0x2), selections[_0x419d99(0x1de)]
                            ({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[_0x419d99(
                                0x2db)](_0x372d2d => _0x372d2d[_0x419d99(0x2ad)] === x), selections[objIndex][
                                _0x419d99(0x275)
                            ] = parseInt(skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])['find'](
                '.active-answer-card')['find'](_0xdb7c42(0x2ca))[_0xdb7c42(0x262)](function(
                _0x334dde) {
                const _0x3a3bcb = _0xdb7c42;
                $(this)['val']() !== '' ? empReqTime = empReqTime[_0x3a3bcb(0x265)](_0x5d452d =>
                        _0x5d452d[_0x3a3bcb(0x1df)] !== _0x334dde) : (!empReqTime[_0x3a3bcb(0x242)](
                        _0x4cd2a2 => _0x4cd2a2[_0x3a3bcb(0x1df)] === _0x334dde) && empReqTime[_0x3a3bcb(
                        0x1de)]({ 'input': _0x334dde }), unfilledArr[_0x3a3bcb(0x1de)]({
                        'input': $(this)[
                            'attr'](_0x3a3bcb(0x27d))
                    })), empReqTime['length'] === 0x0 ? timeFilled = !![] :
                    timeFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))['find'](_0xdb7c42(
                0x1c7))[_0xdb7c42(0x262)](function(_0x12f2a3) {
                const _0x158b9c = _0xdb7c42;
                skipTo = undefined, $(this)[_0x158b9c(0x1e1)](_0x158b9c(0x25c))[_0x158b9c(0x236)](
                    _0x158b9c(0x212)) !== '' && (skipTo = $(this)['parents'](_0x158b9c(0x25c))[_0x158b9c(
                    0x236)](_0x158b9c(0x212))), $(this)['parents']('[data-go-to]')[_0x158b9c(0x1bb)](
                    'data-go-to') && (answer = $(this)['parents'](_0x158b9c(0x21d))[_0x158b9c(0x1bb)](
                    'data-go-to'), selections = selections['filter'](_0x53e725 => _0x53e725['step'] !==
                    x), selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections =
                    selections['filter'](_0x32c00b => _0x32c00b[_0x158b9c(0x2ad)] !== skipTo - 0x2),
                    selections[_0x158b9c(0x1de)]({ 'step': skipTo - 0x2, 'selected': answer }),
                    objIndex = selections['findIndex'](_0x2baa49 => _0x2baa49[_0x158b9c(0x2ad)] === x),
                    selections[objIndex][_0x158b9c(0x275)] = parseInt(skipTo) - 0x1, selections[
                        objIndex][_0x158b9c(0x25d)] = x));
            }), $(steps[x])['find']('.active-answer-card')[
                _0xdb7c42(0x242)](_0xdb7c42(0x2d9))[_0xdb7c42(0x262)](function(_0x972ca6) {
                const
                    _0xd85d43 = _0xdb7c42;
                let _0x517122 = $(this)['val']()['length'],
                    _0x3e3d22 = $(this)[_0xd85d43(0x236)](_0xd85d43(0x2d8)) ? $(this)[_0xd85d43(0x236)](
                        'min-character') : 0x0;
                $(this)[_0xd85d43(0x2e7)]() !== '' && _0x517122 >= _0x3e3d22 ? empReqNum = empReqNum[
                    'filter'](_0x30a41d => _0x30a41d[_0xd85d43(0x1df)] !== _0x972ca6) : (!empReqNum[
                        _0xd85d43(0x242)](_0x1baab9 => _0x1baab9[_0xd85d43(0x1df)] === _0x972ca6) &&
                    empReqNum[_0xd85d43(0x1de)]({ 'input': _0x972ca6 }), unfilledArr[_0xd85d43(0x1de)]
                    ({ 'input': $(this)[_0xd85d43(0x1bb)](_0xd85d43(0x27d)) })), empReqNum[_0xd85d43(
                    0x2ff)] === 0x0 ? numFilled = !![] : numFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](
                _0xdb7c42(0x280))[_0xdb7c42(0x242)](_0xdb7c42(0x233))[_0xdb7c42(0x262)](function(
                _0x36b7a3) {
                const _0x933d5f = _0xdb7c42;
                skipTo = undefined, $(this)['parents'](_0x933d5f(0x25c))[_0x933d5f(0x236)]('skip-to') !==
                    '' && (skipTo = $(this)[_0x933d5f(0x1e1)](_0x933d5f(0x25c))[_0x933d5f(0x236)](_0x933d5f(
                        0x212))), $(this)[_0x933d5f(0x1e1)](_0x933d5f(0x21d))[_0x933d5f(0x1bb)](
                        'data-go-to') && (answer = $(this)['parents'](_0x933d5f(0x21d))['attr']('data-go-to'),
                        selections = selections['filter'](_0x51bc91 => _0x51bc91[_0x933d5f(0x2ad)] !== x),
                        selections[_0x933d5f(0x1de)]({ 'step': x, 'selected': answer }), skipTo && (
                            selections = selections[_0x933d5f(0x265)](_0x5bddf3 => _0x5bddf3[_0x933d5f(
                                0x2ad)] !== skipTo - 0x2), selections[_0x933d5f(0x1de)]({
                                'step': skipTo -
                                    0x2,
                                'selected': answer
                            }), objIndex = selections[_0x933d5f(0x2db)](_0x4a169e =>
                                _0x4a169e['step'] === x), selections[objIndex]['skipTo'] = parseInt(skipTo) - 0x1,
                            selections[objIndex]['backTo'] = x));
            }), $(steps[x])['find'](_0xdb7c42(0x280))[
                'find'](_0xdb7c42(0x2e1))['each'](function(_0x563ee1) {
                const _0x8583d2 = _0xdb7c42;
                if ($(
                        this)['val']() !== '') {
                    let _0x10ed5b = $(this)[_0x8583d2(0x2e7)]()['length'],
                        _0x5d4665 = $(this)[_0x8583d2(0x236)](_0x8583d2(0x2d8)) ? $(this)[_0x8583d2(0x236)](
                            _0x8583d2(0x2d8)) : 0x0;
                    if ($(this)['data'](_0x8583d2(0x1e9))) {
                        var _0x5af63e =
                            phoneAutoFormat($(this)[_0x8583d2(0x236)](_0x8583d2(0x1e9)));
                        $(this)[_0x8583d2(0x2e7)](_0x5af63e($(this)['val']()));
                    }
                    phoneValidation($(this)[
                            _0x8583d2(0x2e7)](), _0x10ed5b, _0x5d4665) ? empReqTel = empReqTel[_0x8583d2(0x265)]
                        (_0x4e15bd => _0x4e15bd[_0x8583d2(0x1df)] !== _0x563ee1) : empReqTel[_0x8583d2(0x1de)]
                        ({ 'input': _0x563ee1 });
                } else !empReqTel['find'](_0x1c0032 => _0x1c0032[_0x8583d2(
                    0x1df)] === _0x563ee1) && empReqTel['push']({ 'input': _0x563ee1 }), unfilledArr[
                    _0x8583d2(0x1de)]({ 'input': $(this)[_0x8583d2(0x1bb)]('name') });
                empReqTel['length'] === 0x0 ? telFilled = !![] : telFilled = ![];
            }), $(steps[x])['find'](
                _0xdb7c42(0x280))[_0xdb7c42(0x242)](':input[type=\x22tel\x22]')['each'](function(
                _0x4b43bc) {
                const _0x5bbd95 = _0xdb7c42;
                skipTo = undefined, $(this)[_0x5bbd95(0x1e1)]('[data-skip-to]')['data'](_0x5bbd95(
                    0x212)) !== '' && (skipTo = $(this)['parents'](_0x5bbd95(0x25c))[_0x5bbd95(0x236)](
                    _0x5bbd95(0x212))), $(this)[_0x5bbd95(0x1e1)](_0x5bbd95(0x21d))[_0x5bbd95(0x1bb)](
                    _0x5bbd95(0x191)) && (answer = $(this)['parents'](_0x5bbd95(0x21d))[_0x5bbd95(0x1bb)](
                        _0x5bbd95(0x191)), selections = selections[_0x5bbd95(0x265)](_0x17a225 => _0x17a225[
                        _0x5bbd95(0x2ad)] !== x), selections['push']({ 'step': x, 'selected': answer }),
                    skipTo && (selections = selections[_0x5bbd95(0x265)](_0x522a0e => _0x522a0e[_0x5bbd95(
                        0x2ad)] !== skipTo - 0x2), selections[_0x5bbd95(0x1de)]({
                        'step': skipTo -
                            0x2,
                        'selected': answer
                    }), objIndex = selections['findIndex'](_0x288c23 =>
                        _0x288c23[_0x5bbd95(0x2ad)] === x), selections[objIndex]['skipTo'] = parseInt(
                        skipTo) - 0x1, selections[objIndex]['backTo'] = x));
            }), $(steps[x])[_0xdb7c42(0x242)]
            (_0xdb7c42(0x280))['find'](_0xdb7c42(0x1cb))[_0xdb7c42(0x262)](function(_0x26a686) {
                const
                    _0x513da4 = _0xdb7c42;
                $(this)[_0x513da4(0x2e7)]() !== '' ? empReqFile = empReqFile[_0x513da4(0x265)](
                        _0x19930c => _0x19930c['input'] !== _0x26a686) : (!empReqFile[_0x513da4(0x242)](
                        _0xfe5487 => _0xfe5487[_0x513da4(0x1df)] === _0x26a686) && empReqFile[_0x513da4(
                        0x1de)]({ 'input': _0x26a686 }), unfilledArr[_0x513da4(0x1de)]({
                        'input': $(this)[
                            'attr'](_0x513da4(0x27d))
                    })), empReqFile['length'] === 0x0 ? fileFilled = !![] :
                    fileFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))['find'](_0xdb7c42(
                0x234))[_0xdb7c42(0x262)](function(_0x4a871b) {
                const _0x4eec58 = _0xdb7c42;
                skipTo = undefined, $(this)[_0x4eec58(0x1e1)](_0x4eec58(0x25c))[_0x4eec58(0x236)](
                    _0x4eec58(0x212)) !== '' && (skipTo = $(this)['parents'](_0x4eec58(0x25c))['data'](
                    'skip-to')), $(this)[_0x4eec58(0x1e1)](_0x4eec58(0x21d))[_0x4eec58(0x1bb)](_0x4eec58(
                    0x191)) && (answer = $(this)[_0x4eec58(0x1e1)](_0x4eec58(0x21d))['attr'](_0x4eec58(
                        0x191)), selections = selections[_0x4eec58(0x265)](_0x20cfca => _0x20cfca[
                        'step'] !== x), selections[_0x4eec58(0x1de)]({ 'step': x, 'selected': answer }),
                    skipTo && (selections = selections[_0x4eec58(0x265)](_0x4794cc => _0x4794cc[_0x4eec58(
                            0x2ad)] !== skipTo - 0x2), selections[_0x4eec58(0x1de)]({
                            'step': skipTo -
                                0x2,
                            'selected': answer
                        }), objIndex = selections['findIndex'](_0x23691b =>
                            _0x23691b[_0x4eec58(0x2ad)] === x), selections[objIndex][_0x4eec58(0x275)] =
                        parseInt(skipTo) - 0x1, selections[objIndex][_0x4eec58(0x25d)] = x));
            }), $(steps[x])[
                _0xdb7c42(0x242)](_0xdb7c42(0x280))['find'](_0xdb7c42(0x1ed))[_0xdb7c42(0x262)](function(
                _0x2fb17d) {
                const _0x20455b = _0xdb7c42;
                $(this)['val']() !== null && $(this)['val']() !== '' ? empReqSelect = empReqSelect[
                        _0x20455b(0x265)](_0x34de7f => _0x34de7f[_0x20455b(0x1df)] !== _0x2fb17d) : (!
                        empReqSelect[_0x20455b(0x242)](_0x43d343 => _0x43d343['input'] === _0x2fb17d) &&
                        empReqSelect['push']({ 'input': _0x2fb17d }), unfilledArr['push']({
                            'input': $(this)[
                                'attr']('name')
                        })), empReqSelect[_0x20455b(0x2ff)] === 0x0 ? selectFilled = !
                    ![] : selectFilled = ![];
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(
                0x242)](_0xdb7c42(0x22a))[_0xdb7c42(0x262)](function(_0x4f28b0) {
                const _0x557f93 =
                    _0xdb7c42;
                skipTo = undefined, $(this)[_0x557f93(0x1e1)](_0x557f93(0x25c))[_0x557f93(0x236)](
                    _0x557f93(0x212)) !== '' && (skipTo = $(this)[_0x557f93(0x1e1)]('[data-skip-to]')[
                    _0x557f93(0x236)](_0x557f93(0x212))), $(this)[_0x557f93(0x1e1)](_0x557f93(0x21d))[
                    'attr'](_0x557f93(0x191)) && (answer = $(this)['parents'](_0x557f93(0x21d))['attr'](
                        _0x557f93(0x191)), selections = selections[_0x557f93(0x265)](_0x6bc114 => _0x6bc114[
                        _0x557f93(0x2ad)] !== x), selections[_0x557f93(0x1de)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x557f93(
                        0x265)](
                        _0x3547f2 => _0x3547f2[_0x557f93(0x2ad)] !== skipTo - 0x2), selections[_0x557f93(
                        0x1de)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                        _0x557f93(0x2db)](_0x1b20c9 => _0x1b20c9[_0x557f93(0x2ad)] === x), selections[
                        objIndex]['skipTo'] = parseInt(skipTo) - 0x1, selections[objIndex][_0x557f93(
                        0x25d)] = x));
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(0x242)](
                _0xdb7c42(0x20d))['each'](function(_0x5ecb85) {
                const _0x5a081e = _0xdb7c42;
                let
                    _0xedb656 = $(this)['val']()['length'],
                    _0x52b47a = $(this)[_0x5a081e(0x236)](_0x5a081e(0x2d8)) ? $(this)['data'](_0x5a081e(
                        0x2d8)) : 0x0;
                $(this)[_0x5a081e(0x2e7)]() !== '' && _0xedb656 >= _0x52b47a ? empReqTextarea =
                    empReqTextarea['filter'](_0x36bf98 => _0x36bf98[_0x5a081e(0x1df)] !== _0x5ecb85) : (!
                        empReqTextarea['find'](_0x497d26 => _0x497d26['input'] === _0x5ecb85) &&
                        empReqTextarea[_0x5a081e(0x1de)]({ 'input': _0x5ecb85 }), unfilledArr['push']
                        ({ 'input': $(this)[_0x5a081e(0x1bb)](_0x5a081e(0x27d)) })), empReqTextarea[_0x5a081e(
                        0x2ff)] === 0x0 ? textareaFilled = !![] : textareaFilled = ![];
            }), $(steps[x])[
                _0xdb7c42(0x242)](_0xdb7c42(0x280))['find']('textarea')['each'](function(_0x1d24be) {
                const
                    _0x349a7f = _0xdb7c42;
                skipTo = undefined, $(this)[_0x349a7f(0x1e1)](_0x349a7f(0x25c))[_0x349a7f(0x236)](
                    _0x349a7f(0x212)) !== '' && (skipTo = $(this)[_0x349a7f(0x1e1)]('[data-skip-to]')[
                    'data'](_0x349a7f(0x212))), $(this)[_0x349a7f(0x1e1)](_0x349a7f(0x21d))[_0x349a7f(
                    0x1bb)](_0x349a7f(0x191)) && (answer = $(this)['parents'](_0x349a7f(0x21d))[_0x349a7f(
                        0x1bb)](_0x349a7f(0x191)), selections = selections[_0x349a7f(0x265)](_0x4ce8c8 =>
                        _0x4ce8c8[_0x349a7f(0x2ad)] !== x), selections[_0x349a7f(0x1de)]
                    ({ 'step': x, 'selected': answer }), skipTo && (selections = selections[_0x349a7f(
                            0x265)](
                            _0x1adf3a => _0x1adf3a[_0x349a7f(0x2ad)] !== skipTo - 0x2), selections[_0x349a7f(
                            0x1de)]({ 'step': skipTo - 0x2, 'selected': answer }), objIndex = selections[
                            'findIndex'](_0x8e27f8 => _0x8e27f8[_0x349a7f(0x2ad)] === x), selections[objIndex]
                        [_0x349a7f(0x275)] = parseInt(skipTo) - 0x1, selections[objIndex][_0x349a7f(
                            0x25d)] = x));
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(0x242)](
                _0xdb7c42(0x1d6))['each'](function(_0x558e79) {
                const _0xe3cfec = _0xdb7c42;
                $(this)[_0xe3cfec(0x2e7)]() !== '' ? validateEmail($(this)[_0xe3cfec(0x2e7)](), $(this)[
                    _0xe3cfec(0x236)](_0xe3cfec(0x29a)), $(this)[_0xe3cfec(0x1bb)](_0xe3cfec(0x27d))) : (
                    emailFilled = ![], unfilledArr[_0xe3cfec(0x1de)]({
                        'input': $(this)[_0xe3cfec(0x1bb)](
                            _0xe3cfec(0x27d))
                    }));
            }), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(
                0x242)](':input[type=\x22email\x22]')[_0xdb7c42(0x262)](function(_0x1ae674) {
                const
                    _0x3ccd5c = _0xdb7c42;
                skipTo = undefined, $(this)[_0x3ccd5c(0x1e1)](_0x3ccd5c(0x25c))['data'](_0x3ccd5c(
                    0x212)) !== '' && (skipTo = $(this)[_0x3ccd5c(0x1e1)](_0x3ccd5c(0x25c))[_0x3ccd5c(
                    0x236)](_0x3ccd5c(0x212))), $(this)[_0x3ccd5c(0x1e1)](_0x3ccd5c(0x21d))['attr'](
                    'data-go-to') && (answer = $(this)[_0x3ccd5c(0x1e1)]('[data-go-to]')[_0x3ccd5c(0x1bb)]
                    (_0x3ccd5c(0x191)), selections = selections[_0x3ccd5c(0x265)](_0x5e57c2 => _0x5e57c2[
                        'step'] !== x), console['log']('selections\x20email', selections, x), selections[
                        _0x3ccd5c(0x1de)]({ 'step': x, 'selected': answer }), skipTo && (selections =
                        selections[_0x3ccd5c(0x265)](_0x23f78c => _0x23f78c['step'] !== skipTo - 0x2),
                        selections[_0x3ccd5c(0x1de)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0x3ccd5c(0x2db)](_0x215484 => _0x215484[_0x3ccd5c(0x2ad)] ===
                            x), selections[objIndex][_0x3ccd5c(0x275)] = parseInt(skipTo) - 0x1, selections[
                            objIndex]['backTo'] = x));
            });
    }
    $(steps[x])['find'](_0xdb7c42(0x201))['is'](
            ':checked') && (selArr = [], $(steps)[_0xdb7c42(0x242)](_0xdb7c42(0x2be))['each'](function(
                _0x32c6e5, _0x327bdf) {
                const _0x4f32a8 = _0xdb7c42;
                selArr[_0x4f32a8(0x1de)]({ 'selected': $(this)[_0x4f32a8(0x236)](_0x4f32a8(0x274)) });
            }),
            selString = [], selArr[_0xdb7c42(0x18b)](_0x19d9b9 => selString[_0xdb7c42(0x1de)](_0x19d9b9[
                _0xdb7c42(0x274)])), $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x280))[_0xdb7c42(0x242)](
                _0xdb7c42(0x2ef))['each'](function() {
                const _0xd52b47 = _0xdb7c42;
                skipTo = undefined;
                if ($(this)[_0xd52b47(0x1e1)](_0xd52b47(0x25c))[_0xd52b47(0x236)](
                        _0xd52b47(0x212))) skipTo = $(this)[_0xd52b47(0x1e1)]('[data-skip-to]')['data'](
                    _0xd52b47(0x212));
                else $(this)[_0xd52b47(0x236)]('skip-to') && (skipTo = $(this)['data']('skip-to'));
                selections = selections[_0xd52b47(0x265)](_0x2109e4 => _0x2109e4['step'] !== x);
                if ($(
                        this)['data'](_0xd52b47(0x1ff))) answer = $(this)['attr'](_0xd52b47(0x191)),
                    selections['push']({ 'step': x, 'selected': answer }), skipTo && (selections =
                        selections[_0xd52b47(0x265)](_0x4db8a9 => _0x4db8a9[_0xd52b47(0x2ad)] !== skipTo -
                            0x2), selections[_0xd52b47(0x1de)]({ 'step': skipTo - 0x2, 'selected': answer }),
                        objIndex = selections[_0xd52b47(0x2db)](_0x2fc983 => _0x2fc983[_0xd52b47(0x2ad)] ===
                            x), selections[objIndex][_0xd52b47(0x275)] = parseInt(skipTo) - 0x1, selections[
                            objIndex][_0xd52b47(0x25d)] = x);
                else $(this)[_0xd52b47(0x1e1)]('[data-go-to]')['data'](_0xd52b47(0x1ff)) && (answer = $(
                        this)[_0xd52b47(0x1e1)](_0xd52b47(0x21d))[_0xd52b47(0x236)](_0xd52b47(0x1ff)),
                    selections[_0xd52b47(0x1de)]({ 'step': x, 'selected': answer }), skipTo && (
                        selections = selections[_0xd52b47(0x265)](_0x3193c0 => _0x3193c0[_0xd52b47(
                            0x2ad)] !== skipTo - 0x2), selections[_0xd52b47(0x1de)]({
                            'step': skipTo -
                                0x2,
                            'selected': answer
                        }), objIndex = selections['findIndex'](_0x1ec571 =>
                            _0x1ec571['step'] === x), selections[objIndex][_0xd52b47(0x275)] = parseInt(
                            skipTo) - 0x1, selections[objIndex][_0xd52b47(0x25d)] = x));
            }), logicExtra ? ($(
                steps[x])['find'](_0xdb7c42(0x280))[_0xdb7c42(0x242)](_0xdb7c42(0x2ae))[_0xdb7c42(0x236)](
                _0xdb7c42(0x1c1)) === !![] || $(steps[x])[_0xdb7c42(0x242)](_0xdb7c42(0x30b))[_0xdb7c42(
                0x236)]('radio-skip') === !![]) && (skip && selections[_0xdb7c42(0x265)](_0x594d86 =>
                _0x594d86[_0xdb7c42(0x2ad)] === x)['length'] > 0x0 && (textareaLength === 0x0 &&
                textInputLength === 0x0 && emailInputLength === 0x0 && checkboxInputLength === 0x0 &&
                setTimeout(function() { next = !![], back = ![], nextStep(), selectionQuiz(); }, $(steps[
                    x])[_0xdb7c42(0x242)](_0xdb7c42(0x287))[_0xdb7c42(0x236)](_0xdb7c42(0x239))))) : $(steps[
                x])['find'](_0xdb7c42(0x2ae))['data'](_0xdb7c42(0x1c1)) === !![] && (skip && (
                textareaLength === 0x0 && textInputLength === 0x0 && emailInputLength === 0x0 &&
                checkboxInputLength === 0x0 && setTimeout(function() {
                    next = !![], back = ![],
                        nextStep(), selectionQuiz();
                }, $(steps[x])[_0xdb7c42(0x242)]('[data-radio-delay]')[
                    'data'](_0xdb7c42(0x239)))))), inputFilled && fileFilled && numFilled && checkboxFilled &&
        telFilled && radioFilled && emailFilled && domainAllowed && selectFilled && textareaFilled &&
        passwordFilled && urlFilled && dateFilled ? enableBtn() : disableBtn(), andLogic(),
        cloneRemove(), cloneRemoveInput();
}

function displayErrorMessage() {
    const _0x3d161f = _0x198795;
    $(_0x3d161f(0x2bd))[_0x3d161f(0x2d5)](), unfilledArr['length'] > 0x0 && unfilledArr['forEach'](
        function(_0xcdf232) {
            const _0x55e4ab = _0x3d161f;
            $('input[name=\x22' + _0xcdf232[_0x55e4ab(0x1df)] + '\x22]')['siblings'](_0x55e4ab(0x2bd))[
                    'fadeIn'](), $(_0x55e4ab(0x24d) + _0xcdf232[_0x55e4ab(0x1df)] + '\x22]')[_0x55e4ab(
                    0x1e1)]()[_0x55e4ab(0x17c)](_0x55e4ab(0x2bd))['fadeIn'](), $(_0x55e4ab(0x1d4) +
                    _0xcdf232[_0x55e4ab(0x1df)] + '\x22]')[_0x55e4ab(0x182)](_0x55e4ab(0x2bd))[_0x55e4ab(
                    0x1c6)](), $(_0x55e4ab(0x177) + _0xcdf232[_0x55e4ab(0x1df)] + '\x22]')[_0x55e4ab(0x182)]
                (_0x55e4ab(0x2bd))[_0x55e4ab(0x1c6)]();
        });
}

function resetInputErrorMessage(_0x19455f) {
    const _0x2335d1 = _0x198795;
    $(_0x2335d1(0x24d) + _0x19455f + '\x22]')['siblings']('[data-text=\x22error-message\x22]')[
        _0x2335d1(0x2d5)](), $(_0x2335d1(0x24d) + _0x19455f + '\x22]')[_0x2335d1(0x1e1)]()[_0x2335d1(
        0x17c)](_0x2335d1(0x2bd))[_0x2335d1(0x2d5)](), $(_0x2335d1(0x1d4) + _0x19455f + '\x22]')[
        _0x2335d1(0x182)](_0x2335d1(0x2bd))[_0x2335d1(0x2d5)](), $(_0x2335d1(0x177) + _0x19455f +
        '\x22]')[_0x2335d1(0x182)]('[data-text=\x22error-message\x22]')[_0x2335d1(0x2d5)]();
}

function increaseCurstep() {
    const _0x4c5bfc = _0x198795;
    countCard ? (curStep = curStep + 0x1, $(_0x4c5bfc(0x2fb))['text'](steps['length'])) : $(steps[x])[
        _0x4c5bfc(0x236)](_0x4c5bfc(0x2d1)) ? curStep = curStep + 0x0 : curStep = curStep + 0x1, $(
        '[data-text=\x22current-step\x22]')[_0x4c5bfc(0x30c)](curStep);
}

function decreaseCurstep() {
    const _0x5848b7 = _0x198795;
    countCard ? (curStep = curStep - 0x1, $(_0x5848b7(0x2fb))[_0x5848b7(0x30c)](steps[_0x5848b7(
            0x2ff)])) : $(steps[x])[_0x5848b7(0x236)](_0x5848b7(0x2d1)) ? curStep = curStep - 0x0 :
        curStep = curStep - 0x1, $('[data-text=\x22current-step\x22]')[_0x5848b7(0x30c)](curStep);
}
$(
    '[data-form=\x22submit-btn\x22]')['on'](_0x198795(0x237), function(_0x39811b) {
    const
        _0x4c6f05 = _0x198795;
    _0x39811b[_0x4c6f05(0x248)](), _0x39811b[_0x4c6f05(0x20e)]();
    $(this)[_0x4c6f05(0x236)](_0x4c6f05(0x216)) && (redirectTo = $(this)[_0x4c6f05(0x236)](
        _0x4c6f05(0x216)));
    !$(this)['data'](_0x4c6f05(0x29c)) && (newTab = $(this)[_0x4c6f05(0x236)]
        (_0x4c6f05(0x29c)));
    successCard = $(this)[_0x4c6f05(0x236)]('success');
    const _0x1aaa03 = new URLSearchParams(
            window[_0x4c6f05(0x1a2)][_0x4c6f05(0x2e5)]),
        _0x21756a = (_0x3e7c8a, _0x3ca0fb) => {
            const _0x1b7ec4 = _0x4c6f05,
                _0x4d1bd6 = document[_0x1b7ec4(0x1ba)]('[data-hidden-input=\x22' + _0x3e7c8a + '\x22]');
            _0x4d1bd6 && (_0x4d1bd6[_0x1b7ec4(0x207)] = _0x3ca0fb);
        };
    _0x21756a(_0x4c6f05(0x2b1), _0x1aaa03[_0x4c6f05(0x1e2)](_0x4c6f05(0x2b1)) || document[
        _0x4c6f05(0x2b1)] || _0x4c6f05(0x202)), _0x21756a(_0x4c6f05(0x1cc), navigator[_0x4c6f05(
        0x1e8)]), _0x21756a(_0x4c6f05(0x1ec), new Date()['toISOString']()), _0x21756a(_0x4c6f05(
        0x2f0), Intl[_0x4c6f05(0x2c5)]()[_0x4c6f05(0x277)]()[_0x4c6f05(0x194)]), _0x21756a(
        'screen-resolution', window[_0x4c6f05(0x186)][_0x4c6f05(0x1a4)] + 'x' + window[_0x4c6f05(
            0x186)][_0x4c6f05(0x170)]), _0x21756a(_0x4c6f05(0x2d7), 'N/A');
    const _0x2d530f =
        () => {
            const _0x1fae15 = _0x4c6f05,
                _0x1926b8 = document[_0x1fae15(0x1ba)](_0x1fae15(0x213));
            if (_0x1926b8) {
                const
                    _0x1f2931 = localStorage[_0x1fae15(0x2e9)]('pageLoadTime');
                console[_0x1fae15(0x2c9)](_0x1f2931);
                if (_0x1f2931) {
                    const _0x17a6dd = Math[_0x1fae15(
                        0x200)]((Date[_0x1fae15(0x1f1)]() - parseInt(_0x1f2931)) / 0x3e8);
                    _0x1926b8['value'] = _0x17a6dd + _0x1fae15(0x259);
                } else _0x1926b8[_0x1fae15(
                    0x207)] = _0x1fae15(0x2a7);
            }
        };
    _0x2d530f(), logicExtra && fill && ($(this)[_0x4c6f05(0x224)](_0x4c6f05(0x1ab), !![]), $(
                steps)[_0x4c6f05(0x242)](_0x4c6f05(0x2a5))[_0x4c6f05(0x224)](_0x4c6f05(0x2c1), ![]),
            console[_0x4c6f05(0x2c9)](_0x4c6f05(0x16f))), localStorage[_0x4c6f05(0x198)](_0x4c6f05(
            0x222)), localStorage['removeItem']('pageLoadTime'), typeof formlyCustomFunction ===
        _0x4c6f05(0x288) && formlyCustomFunction(), fill ? ($(this)['data']('wait') ? (console[
            _0x4c6f05(0x2c9)]($(this)[_0x4c6f05(0x236)](_0x4c6f05(0x18c))), $(this)[_0x4c6f05(
            0x30c)]($(this)[_0x4c6f05(0x236)](_0x4c6f05(0x18c)))) : $(this)['val'](_0x4c6f05(
            0x1f9))[_0x4c6f05(0x30c)]('Please\x20wait...'), $('[data-form=\x22multistep\x22]')[
            _0x4c6f05(0x2a2)](), $(_0x4c6f05(0x1ce))['length'] > 0x0 && (grecaptcha[_0x4c6f05(
            0x30e)]()[_0x4c6f05(0x2ff)] === 0x0 && (form['find'](_0x4c6f05(0x2b8))[_0x4c6f05(
            0x30c)](oldSubmitText), form[_0x4c6f05(0x242)]('[data-form=\x22submit-btn\x22]')[
            _0x4c6f05(0x2e7)](oldSubmitText))), customError && $(
            '[data-text=\x22error-message\x22]')[_0x4c6f05(0x2d5)]()) : customError &&
        displayErrorMessage();
});

function nextStep() {
    const _0x4707e7 = _0x198795;
    customError ? ($('[data-text=\x22error-message\x22]')[_0x4707e7(0x2d5)](), fill ? (x++,
        increaseCurstep(), progress = x, x <= steps[_0x4707e7(0x2ff)] - 0x1 && (updateStep(),
            memory && saveFilledInput())) : displayErrorMessage()) : (x++, increaseCurstep(), x >
        progress && (progress = x), x <= steps['length'] - 0x1 && (updateStep(), memory &&
            saveFilledInput())), andLogic();
}

function backStep() {
    const _0x43ebe7 = _0x198795;
    customError && $('[data-text=\x22error-message\x22]')[_0x43ebe7(0x2d5)](), decreaseCurstep(), x >
        0x0 && ($(progressbar[x])[_0x43ebe7(0x21f)](_0x43ebe7(0x2b4)), selections[_0x43ebe7(0x265)](
            _0x447981 => _0x447981['skipTo'] === x)[_0x43ebe7(0x2ff)] > 0x0 ? x = parseInt(getSafe(() =>
            selections[_0x43ebe7(0x265)](_0x3808a3 => _0x3808a3[_0x43ebe7(0x275)] === x)[0x0][
                _0x43ebe7(0x25d)
            ])) : x--, updateStep()), ($(steps[x])[_0x43ebe7(0x242)]('[data-radio-skip]:visible')[
            _0x43ebe7(0x236)]('radio-skip') === !![] || $(steps[x])['find'](_0x43ebe7(0x280))['find'](
            _0x43ebe7(0x2ae))[_0x43ebe7(0x236)]('radio-skip') === !![] || $(steps[x])[_0x43ebe7(0x242)](
            _0x43ebe7(0x30b))[_0x43ebe7(0x236)](_0x43ebe7(0x1c1)) === !![]) && (all_data = all_data[
            _0x43ebe7(0x265)](_0x539846 => _0x539846['field'] !== $(steps[x])[_0x43ebe7(0x242)](
            'input[type=\x22radio\x22]:checked')[_0x43ebe7(0x1bb)](_0x43ebe7(0x27d))), $(_0x43ebe7(
            0x27f) + $(steps[x])['find'](_0x43ebe7(0x203))[_0x43ebe7(0x1bb)]('name') + '\x22]')[
            _0x43ebe7(0x2d5)](), $(steps[x])[_0x43ebe7(0x242)]('input[type=\x22radio\x22]')['prop'](
            _0x43ebe7(0x314), ![]), $(steps[x])[_0x43ebe7(0x242)](_0x43ebe7(0x1a8))['removeClass'](
            _0x43ebe7(0x2a4)), validation());
}
weightedSelectionRange && $(_0x198795(0x1d8))[_0x198795(
    0x262)](function() {
    const _0x12839e = _0x198795;
    $(this)['append'](_0x12839e(0x292) + $(this)[_0x12839e(0x236)]('selection') + _0x12839e(
        0x1b9));
});

function selectionQuiz() {
    const _0x2e52c5 = _0x198795;
    if ($(this)['find'](
            '[data-btn=\x22check\x22]')) {
        $(_0x2e52c5(0x1d8))[_0x2e52c5(0x2d5)](), $(_0x2e52c5(0x208))[
            _0x2e52c5(0x2d5)]();
        if (weightedSelection) {
            selTotal = 0x0, selArr['forEach'](function(
                _0x59c513) { selTotal = selTotal + _0x59c513['selected']; }), $(
                '[data-text=\x22total-weight\x22]')[_0x2e52c5(0x30c)](selTotal);
            if ($(_0x2e52c5(0x1c0) +
                    selTotal + '\x22]')[_0x2e52c5(0x2ff)] > 0x0) $(_0x2e52c5(0x1c0) + selTotal + '\x22]')[
                _0x2e52c5(0x1c6)]();
            else $(_0x2e52c5(0x19c) + selTotal + ')') ? $(_0x2e52c5(0x19c) + selTotal + ')')[_0x2e52c5(
                0x1b7)](_0x2e52c5(0x1d8))['eq'](0x0)[_0x2e52c5(0x2fd)]() : $(_0x2e52c5(0x2c2))[_0x2e52c5(
                0x1c6)]();
        } else {
            let _0x4f9697 = -0x1,
                _0x38e0b1 = [];
            $(_0x2e52c5(0x1d8))['each'](function(_0x1e2c94) {
                const _0x4cf317 = _0x2e52c5;
                $($(_0x4cf317(0x1d8))[_0x1e2c94])[_0x4cf317(0x236)](_0x4cf317(0x294))['includes'](
                    selString[_0x4cf317(0x29f)]()) && (_0x4f9697 = _0x1e2c94, _0x38e0b1['push'](
                    _0x1e2c94));
            }), multiSelections ? _0x38e0b1[_0x2e52c5(0x2ff)] > 0x0 ? _0x38e0b1[
                _0x2e52c5(0x18b)](_0x26ca21 => {
                const _0x57618f = _0x2e52c5;
                $($(_0x57618f(0x1d8))[_0x26ca21])[_0x57618f(0x1c6)]();
            }) : $(_0x2e52c5(0x2c2))[_0x2e52c5(
                0x1c6)]() : _0x4f9697 > -0x1 ? $($(_0x2e52c5(0x1d8))[_0x4f9697])[_0x2e52c5(0x1c6)]() : $(
                '[data-selection=\x22other\x22]')['fadeIn']();
        }
    }
}

function triggerInputAllData() {
    const _0x536e7e = _0x198795;
    if (savedFilledInput && memory)
        savedFilledInput['forEach'](_0x13e72e => {
            const _0x3b552b = _0x5116;
            var _0x1252d2 = $(
                    'input[name=\x22' + _0x13e72e[_0x3b552b(0x209)] + _0x3b552b(0x291) + _0x13e72e[
                        'value'] + _0x3b552b(0x20b)),
                _0x14a220 = $('input[name=\x22' + _0x13e72e[_0x3b552b(0x209)] + _0x3b552b(0x20b)),
                _0x5a9bbf = $(_0x3b552b(0x1d4) + _0x13e72e[_0x3b552b(0x209)] +
                    '\x22]:not([data-prefill=\x22false\x22])'),
                _0x4cfc88 = $(_0x3b552b(0x24a) + _0x13e72e[_0x3b552b(0x209)] + '\x22]'),
                _0xa1d9c3 = $(_0x3b552b(0x30f) + _0x13e72e[_0x3b552b(0x209)] + _0x3b552b(0x291) +
                    _0x13e72e['value'] + _0x3b552b(0x20b));
            if (_0x1252d2[_0x3b552b(0x1bb)](_0x3b552b(
                    0x2c6)) !== _0x3b552b(0x211)) {
                if (_0x1252d2[_0x3b552b(0x1bb)]('type') === _0x3b552b(
                        0x311) && !_0x1252d2['parents'](_0x3b552b(0x219))['data']('radio-skip')) _0x1252d2[
                    'click'](), _0x1252d2[_0x3b552b(0x182)](_0x3b552b(0x19e))[_0x3b552b(0x1a3)](_0x3b552b(
                    0x2a4)), _0x1252d2[_0x3b552b(0x17d)](_0x3b552b(0x1df));
                else _0x13e72e[_0x3b552b(0x207)] === 'on' ? (_0x14a220['click'](), _0x14a220[_0x3b552b(
                    0x182)](_0x3b552b(0x289))[_0x3b552b(0x1a3)](_0x3b552b(0x2a4)), _0x14a220[_0x3b552b(
                    0x17d)](_0x3b552b(0x1df))) : (_0x14a220[_0x3b552b(0x2e7)](_0x13e72e['value']),
                    _0x5a9bbf[_0x3b552b(0x2e7)](_0x13e72e['value']), $(_0x3b552b(0x16d))[_0x3b552b(0x242)]
                    (_0x3b552b(0x2d3) + _0x13e72e[_0x3b552b(0x207)] + '\x22]')[_0x3b552b(0x224)](
                        'selected', !![]), _0x14a220[_0x3b552b(0x17d)](_0x3b552b(0x1df)), _0x14a220[
                        _0x3b552b(0x17d)](_0x3b552b(0x196)));
                const _0xc70b7d = _0xa1d9c3[_0x3b552b(0x236)](
                        _0x3b552b(0x2a6)),
                    _0x2fc9ce = _0x4cfc88[_0x3b552b(0x236)]('click-addclass');
                _0xa1d9c3[_0x3b552b(0x1b7)]()[_0x3b552b(0x1a3)](_0xc70b7d), _0x4cfc88['parent']()[
                    _0x3b552b(0x1a3)](_0x2fc9ce);
            }
        });
    else _params && (getParams(), searchQ[_0x536e7e(0x18b)](_0x519132 => {
        const _0x54165e =
            _0x536e7e;
        if ($('input[name=\x22' + _0x519132[_0x54165e(0x209)] + '\x22][value=\x22' +
                _0x519132[_0x54165e(0x207)] + _0x54165e(0x20b))[_0x54165e(0x1bb)](_0x54165e(
                0x2c6)) !== _0x54165e(0x211)) {
            if ($(_0x54165e(0x24d) + _0x519132[_0x54165e(0x1e0)] +
                    '\x22][value=\x22' + _0x519132[_0x54165e(0x2e7)] +
                    '\x22]:not([data-prefill=\x22false\x22])')[_0x54165e(0x1bb)]('type') === _0x54165e(
                    0x311)) $(_0x54165e(0x24d) + _0x519132['key'] + '\x22][value=\x22' + _0x519132[
                    _0x54165e(0x2e7)] + '\x22]:not([data-prefill=\x22false\x22])')[_0x54165e(0x237)](),
                $('input[name=\x22' + _0x519132[_0x54165e(0x1e0)] + _0x54165e(0x291) + _0x519132[
                    'val'] + _0x54165e(0x20b))[_0x54165e(0x182)]('.w-radio-input')[_0x54165e(0x1a3)](
                    _0x54165e(0x2a4)), $(_0x54165e(0x24d) + _0x519132[_0x54165e(0x1e0)] + _0x54165e(
                    0x291) + _0x519132[_0x54165e(0x2e7)] + _0x54165e(0x20b))[_0x54165e(0x17d)](
                    _0x54165e(0x1df));
            else _0x519132[_0x54165e(0x2e7)] === 'on' ? ($('input[name=\x22' + _0x519132['key'] +
                _0x54165e(0x20b))[_0x54165e(0x237)](), $(_0x54165e(0x24d) + _0x519132[_0x54165e(
                0x1e0)] + _0x54165e(0x20b))['siblings'](_0x54165e(0x289))[_0x54165e(0x1a3)](
                'w--redirected-checked'), $(_0x54165e(0x24d) + _0x519132[_0x54165e(0x1e0)] +
                '\x22]')[_0x54165e(0x17d)](_0x54165e(0x1df))) : ($('input[name=\x22' + _0x519132[
                _0x54165e(0x1e0)] + _0x54165e(0x20b))[_0x54165e(0x2e7)](_0x519132[_0x54165e(
                0x2e7)]), $(_0x54165e(0x1d4) + _0x519132[_0x54165e(0x1e0)] +
                '\x22]:not([data-prefill=\x22false\x22])')['val'](_0x519132[_0x54165e(0x2e7)]), $(
                'select[name=\x22' + _0x519132[_0x54165e(0x1e0)] + _0x54165e(0x20b))['find'](
                _0x54165e(0x2d3) + _0x519132['val'] + '\x22]')['prop']('selected', !![]), $(
                _0x54165e(0x24d) + _0x519132[_0x54165e(0x1e0)] +
                '\x22]:not([data-prefill=\x22false\x22])')[_0x54165e(0x17d)](_0x54165e(0x1df)), $(
                _0x54165e(0x24d) + _0x519132[_0x54165e(0x1e0)] + _0x54165e(0x20b))[_0x54165e(
                0x17d)](_0x54165e(0x196)));
        }
    }));
}
$('[data-form=\x22next-btn\x22]')['on'](_0x198795(
        0x237), function() { next = !![], back = ![], nextStep(), selectionQuiz(); }), $(_0x198795(
        0x1dc))['on'](_0x198795(0x237), function() { next = ![], back = !![], backStep(); }), $(steps)[
        _0x198795(0x242)](_0x198795(0x2a5))[_0x198795(0x204)](_0x198795(0x1c3))['on']('input',
        function(_0x40fb94) { validation(), andLogic(), addClickClass(); }), $(steps)[_0x198795(0x242)]
    (_0x198795(0x286))['on']('click', function() { skip = !![], validation(), addClickClass(); });
$('[data-clickable-all]')[_0x198795(0x236)](_0x198795(0x24b)) ? $(
    '[data-form=\x22custom-progress-indicator\x22]')[_0x198795(0x21f)](_0x198795(0x235)) : $(
    _0x198795(0x2ba))[_0x198795(0x1a3)](_0x198795(0x235));

function clickableIndicator() {
    const _0x3419e2 = _0x198795;
    $(_0x3419e2(0x1b6))[_0x3419e2(0x236)](_0x3419e2(0x296)) && ($(_0x3419e2(0x1fb))['removeClass'](
        _0x3419e2(0x2b4)), $(_0x3419e2(0x1b6))[_0x3419e2(0x236)](_0x3419e2(0x24b)) ? (x = $(this)[
        'index'](), updateStep()) : $(this)[_0x3419e2(0x16b)]() <= progress && (x = $(this)[
        _0x3419e2(0x16b)](), updateStep())), $('[data-text=\x22current-step\x22]')[_0x3419e2(0x30c)](
        x + 0x1);
}
$(_0x198795(0x2ba))['on'](_0x198795(0x237), clickableIndicator), excludeCount = !$(
    _0x198795(0x2bb))[_0x198795(0x236)](_0x198795(0x19d)), steps[_0x198795(0x262)](function(
    _0x2169f1) {
    const _0x14e01f = _0x198795,
        _0x3dd8f8 = $(this)[_0x14e01f(0x236)](_0x14e01f(0x2d1));
    console[_0x14e01f(0x2c9)](excludeCount), _0x3dd8f8 && excludeCount && $(_0x14e01f(0x2ba))[
        'eq'](_0x2169f1)[_0x14e01f(0x2d5)]();
});
$(_0x198795(0x2bb))[_0x198795(0x236)](_0x198795(0x28d)) && ($(_0x198795(0x21d))[_0x198795(0x262)](
    function() {
        const _0x17ff84 = _0x198795;
        $(this)[_0x17ff84(0x2b6)]('<br>Data\x20Go\x20To\x20=\x20', $(this)[_0x17ff84(0x236)](
            _0x17ff84(0x1ff)));
    }), $('[data-answer]')[_0x198795(0x262)](function() {
    const
        _0x23da7c = _0x198795;
    $(this)[_0x23da7c(0x2b6)](_0x23da7c(0x295), $(this)[_0x23da7c(0x236)](_0x23da7c(0x183)));
}));

function resetFormly() {
    const _0x4f7e3e = _0x198795;
    $('[data-form=\x22multistep\x22]')[_0x4f7e3e(0x17d)](_0x4f7e3e(0x226)), $(
            '[data-form=\x22multistep\x22]')[_0x4f7e3e(0x1e1)]()['find']('.w-form-done')['hide'](), x =
        0x0, updateStep(), $(_0x4f7e3e(0x2bb))[_0x4f7e3e(0x2fd)](), $('[data-form=\x22submit-btn\x22]')[
            _0x4f7e3e(0x30c)](oldSubmitText), $(_0x4f7e3e(0x2b8))[_0x4f7e3e(0x2e7)](oldSubmitText), $(
            _0x4f7e3e(0x1ea))[_0x4f7e3e(0x30c)](0x1), $(_0x4f7e3e(0x2bb))[_0x4f7e3e(0x242)](_0x4f7e3e(
            0x1e4))['siblings']('.w-checkbox-input')[_0x4f7e3e(0x21f)](_0x4f7e3e(0x2a4));
}
$(document)[
    _0x198795(0x2f3)](function(_0x3402bd, _0x65b04e, _0x282158) {
    const _0x1f7c0b = _0x198795;
    if (
        _0x282158['url'][_0x1f7c0b(0x1fc)](_0x1f7c0b(0x178))) {
        const _0x5337e5 = _0x65b04e[
                _0x1f7c0b(0x2e0)] === 0xc8,
            _0x1866a8 = 'redirect-form-hehexd';
        redirectTo && _0x5337e5 && (newTab ? window['open'](redirectTo, _0x1f7c0b(0x293)) :
                setTimeout(() => { location['href'] = redirectTo; }, redirectDelay)), _0x5337e5 &&
            successCard !== '' && $(_0x1f7c0b(0x188) + successCard + '\x22]')[_0x1f7c0b(0x1c6)](),
            _0x5337e5 && formReset && setTimeout(() => { resetFormly(); }, resetDelay), !_0x5337e5 &&
            ($(_0x1f7c0b(0x2b8))[_0x1f7c0b(0x2e7)](_0x1f7c0b(0x1f9)), $(_0x1f7c0b(0x2b8))[_0x1f7c0b(
                0x30c)](_0x1f7c0b(0x1f9)));
    }
}), $(_0x198795(0x26c))['on'](_0x198795(0x237),
    function() {
        const _0x4f3ee6 = _0x198795;
        var _0x6f82e6 = $(this)['parent']()[_0x4f3ee6(0x242)](
            _0x4f3ee6(0x307))[_0x4f3ee6(0x236)](_0x4f3ee6(0x1fd));
        setTimeout(function() {
                const _0x5425cb = _0x4f3ee6;
                $(_0x5425cb(0x24d) + _0x6f82e6 + '\x22]')[_0x5425cb(0x21a)]();
            }, 0x64), back = !![], x =
            $(this)[_0x4f3ee6(0x236)]('edit-step') - 0x1, updateStep(), countCard ? (curStep = x + 0x1,
                $('[data-text=\x22total-steps\x22]')[_0x4f3ee6(0x30c)](steps['length'])) : $(steps[x])[
                _0x4f3ee6(0x236)](_0x4f3ee6(0x2d1)) ? curStep = x + 0x0 : curStep = x + 0x1, $(_0x4f3ee6(
                0x1ea))[_0x4f3ee6(0x30c)](curStep), back = ![];
    }), $(_0x198795(0x217))['on'](_0x198795(
    0x237), function() {
    const _0x2b6135 = _0x198795;
    $(_0x2b6135(0x2bb))['trigger'](_0x2b6135(0x226));
    let _0x5cd8d8 = $(this);
    $(this)[_0x2b6135(0x30c)](_0x2b6135(0x1f9)), setTimeout(function() {
        const _0x34923a =
            _0x2b6135;
        $(_0x5cd8d8)['text'](oldResetText), $(_0x5cd8d8)['parents'](_0x34923a(0x2cf))[_0x34923a(
                0x2d5)](), x = 0x0, updateStep(), $(_0x34923a(0x2bb))[_0x34923a(0x2fd)](), $(
                _0x34923a(0x2b8))['text'](oldSubmitText), $('[data-form=\x22submit-btn\x22]')[
                _0x34923a(0x2e7)](oldSubmitText), $(_0x5cd8d8)['val'](oldSubmitText), $(_0x34923a(
                0x1ea))[_0x34923a(0x30c)](0x1), $('[data-form=\x22multistep\x22]')[_0x34923a(0x242)]
            ('input:checkbox')[_0x34923a(0x182)](_0x34923a(0x289))[_0x34923a(0x21f)](
                'w--redirected-checked');
    }, resetDelay);
}), $(_0x198795(0x297))['on'](_0x198795(0x251),
    function(_0x4570f9) {
        const _0x3935de = _0x198795;
        if (_0x4570f9['keyCode'] ===
            0xd) {
            _0x4570f9['preventDefault'](), _0x4570f9[_0x3935de(0x20e)]();
            if ($(steps[x])[
                    _0x3935de(0x242)](_0x3935de(0x1d2))['is'](_0x3935de(0x29e))) $(steps[x])['find'](
                _0x3935de(0x1e5))['val']($(steps[x])[_0x3935de(0x242)](_0x3935de(0x1e5))['val']() +
                '\x0a');
            else $(_0x3935de(0x220))[_0x3935de(0x236)]('enter') && fill && (totalSteps > curStep && $(
                '[data-form=\x22next-btn\x22]')[0x0][_0x3935de(0x237)]());
        }
    }), $('body')[_0x198795(
    0x2e6)](function(_0x307d92) {
    const _0x25331a = _0x198795;
    (_0x307d92[_0x25331a(0x1f2)] || _0x307d92[_0x25331a(0x1f4)]) && _0x307d92[_0x25331a(0x2a3)] ==
        0xd && (x >= steps[_0x25331a(0x2ff)] - 0x1 && fill ? $(steps[x])[_0x25331a(0x242)](
            _0x25331a(0x1eb))['click']() : (_0x307d92[_0x25331a(0x248)](), _0x307d92[
            'stopPropagation']()));
}), $(_0x198795(0x2bb))[_0x198795(0x242)](_0x198795(0x2a5))['on'](
    _0x198795(0x196),
    function() {
        const _0x5d8d5b = _0x198795;
        all_data = all_data[_0x5d8d5b(0x265)](_0x38acb3 => _0x38acb3[_0x5d8d5b(0x30a)] !== $(this)[
            _0x5d8d5b(0x1bb)](_0x5d8d5b(0x27d))), $(this)[_0x5d8d5b(0x1bb)]('type') === _0x5d8d5b(
            0x26b) ? $(this)['is'](_0x5d8d5b(0x2b5)) ? all_data[_0x5d8d5b(0x1de)]({
            'field': $(this)[
                'attr']('name'),
            'value': $(this)[_0x5d8d5b(0x182)](_0x5d8d5b(0x2f5))['text']()
        }) : $(
            _0x5d8d5b(0x27f) + $(this)[_0x5d8d5b(0x1bb)](_0x5d8d5b(0x27d)) + '\x22]')[_0x5d8d5b(
            0x2d5)]() : (all_data[_0x5d8d5b(0x1de)]({
                'field': $(this)[_0x5d8d5b(0x1bb)](_0x5d8d5b(
                    0x27d)),
                'value': $(this)[_0x5d8d5b(0x2e7)]()
            }), $(this)[_0x5d8d5b(0x2e7)]() !==
            '' && resetInputErrorMessage($(this)[_0x5d8d5b(0x1bb)](_0x5d8d5b(0x27d)))), all_data[
            _0x5d8d5b(0x18b)](function(_0x50c04f) {
            const _0x36032a = _0x5d8d5b;
            $(_0x36032a(0x27f) + _0x50c04f['field'] + '\x22]')['show'](), $(_0x36032a(0x27f) +
                _0x50c04f[_0x36032a(0x30a)] + '\x22]')['text'](_0x50c04f[_0x36032a(0x207)]);
        });
    }), $(
    _0x198795(0x2bb))[_0x198795(0x242)](_0x198795(0x1d2))['on'](_0x198795(0x196),
    function() {
        const _0x1d65fe = _0x198795;
        $(this)['val']() !== '' && resetInputErrorMessage($(this)[_0x1d65fe(0x1bb)](_0x1d65fe(
            0x27d))), all_data = all_data['filter'](_0x2346dd => _0x2346dd[_0x1d65fe(0x30a)] !== $(
            this)['attr'](_0x1d65fe(0x27d))), all_data[_0x1d65fe(0x1de)]({
            'field': $(this)[_0x1d65fe(
                0x1bb)](_0x1d65fe(0x27d)),
            'value': $(this)[_0x1d65fe(0x2e7)]()
        }), all_data['forEach'](
            function(_0x4a0aa9) {
                const _0x2af515 = _0x1d65fe;
                $(_0x2af515(0x27f) + _0x4a0aa9[_0x2af515(0x30a)] + '\x22]')['show'](), $(_0x2af515(
                    0x27f) + _0x4a0aa9['field'] + '\x22]')[_0x2af515(0x30c)](_0x4a0aa9[_0x2af515(
                    0x207)]);
            });
    }), $(_0x198795(0x2bb))[_0x198795(0x242)](_0x198795(0x22a))['on'](
    _0x198795(0x196),
    function() {
        const _0x3f4819 = _0x198795;
        $(this)[_0x3f4819(0x2e7)]() !== '' && resetInputErrorMessage($(this)[_0x3f4819(0x1bb)](
            'name'));
        var _0x44e8ed = $(this)[_0x3f4819(0x236)](_0x3f4819(0x22b));
        all_data = all_data[_0x3f4819(0x265)](_0x461334 => _0x461334[_0x3f4819(0x30a)] !== $(this)[
            _0x3f4819(0x1bb)](_0x3f4819(0x27d))), all_data[_0x3f4819(0x1de)]({
            'field': $(this)[
                'attr'](_0x3f4819(0x27d)),
            'value': _0x44e8ed ? $(this)[_0x3f4819(0x242)](_0x3f4819(
                0x221))[_0x3f4819(0x30c)]() : $(this)['val']()
        }), all_data[_0x3f4819(0x18b)](function(
            _0x3a07a8) {
            const _0x5ce19c = _0x3f4819;
            $(_0x5ce19c(0x27f) + _0x3a07a8['field'] + '\x22]')[_0x5ce19c(0x2fd)](), $(
                '[data-input-field=\x22' + _0x3a07a8[_0x5ce19c(0x30a)] + '\x22]')[_0x5ce19c(0x30c)](
                _0x3a07a8[_0x5ce19c(0x207)]);
        });
    }), updateStep(), triggerInputAllData(), $(_0x198795(
    0x1b2))[_0x198795(0x262)](function() {
    const _0x5266f8 = _0x198795,
        _0x124dd9 = $(this)[_0x5266f8(0x242)](_0x5266f8(0x228)),
        _0x12b08f = [];
    _0x124dd9[_0x5266f8(0x262)](function() {
        const _0x15216c = _0x5266f8;
        _0x12b08f['push']($(this)[_0x15216c(0x30c)]()[_0x15216c(0x22f)]());
    });
    const _0x2f764d = $(
        this)[_0x5266f8(0x182)](_0x5266f8(0x266));
    $[_0x5266f8(0x262)](_0x12b08f, function(_0x347943, _0x2db08a) {
        const _0x189091 = _0x5266f8,
            _0x20c27b = $(_0x189091(0x20c))[_0x189091(0x2e7)](_0x2db08a)[_0x189091(0x30c)](
                _0x2db08a);
        _0x2f764d['append'](_0x20c27b);
    });
});

function cloneRemove() {
    const _0x33358f = _0x198795;
    $(_0x33358f(0x19b))['each'](function() {
        const _0x5c07c9 = _0x33358f;
        $(this)[_0x5c07c9(0x242)]('[data-clone]')[_0x5c07c9(0x2ff)] < 0x2 ? $(this)[_0x5c07c9(
            0x242)](_0x5c07c9(0x1fe))[_0x5c07c9(0x2d5)]() : $(this)[_0x5c07c9(0x242)](_0x5c07c9(
            0x1fe))[_0x5c07c9(0x2fd)]();
    });
}

function cloneRemoveInput() {
    const _0x4804ca = _0x198795;
    $(_0x4804ca(0x2d4))[_0x4804ca(0x262)](function() {
        const _0x215852 = _0x4804ca;
        console[_0x215852(0x2c9)]($(this)[_0x215852(0x242)](_0x215852(0x1be))['length']), $(this)[
            _0x215852(0x242)]('[data-clone-input]')['length'] < 0x2 ? $(this)['find'](_0x215852(
            0x1a9))[_0x215852(0x2d5)]() : $(this)[_0x215852(0x242)](_0x215852(0x1a9))[_0x215852(
            0x2fd)]();
    });
}
$(_0x198795(0x1fe))['on'](_0x198795(0x237), function() {
    const _0x3d1e43 =
        _0x198795,
        _0x28b78a = $(this)[_0x3d1e43(0x1e1)](_0x3d1e43(0x26e))['length'] > 0x0 ? $(this)[_0x3d1e43(
            0x1e1)]('[data-clone]')[_0x3d1e43(0x16b)]() : $(this)[_0x3d1e43(0x1e1)](_0x3d1e43(0x1bf))[
            'index'](),
        _0x4e01a9 = $(this)['parents']('[data-clone]')['length'] > 0x0 ? $(this)['parents'](
            _0x3d1e43(0x26e))['data'](_0x3d1e43(0x267)) : $(this)[_0x3d1e43(0x1e1)](_0x3d1e43(0x1bf))[
            _0x3d1e43(0x236)]('display');
    $('[data-clone=\x22' + _0x4e01a9 + '\x22]')['eq'](_0x28b78a)[_0x3d1e43(0x174)](), $(_0x3d1e43(
        0x1e3) + _0x4e01a9 + '\x22]')['eq'](_0x28b78a)[_0x3d1e43(0x174)](), cloneRemove();
    let
        _0x412f5b = $(_0x3d1e43(0x30d) + _0x4e01a9 + '\x22]')[_0x3d1e43(0x236)](_0x3d1e43(0x313)),
        _0x246c08 = $(_0x3d1e43(0x22e) + _0x4e01a9 + '\x22]')[_0x3d1e43(0x2ff)];
    console[_0x3d1e43(0x2c9)](_0x246c08, _0x412f5b), _0x246c08 < _0x412f5b && (console[_0x3d1e43(
            0x2c9)](_0x3d1e43(0x2fd)), $(_0x3d1e43(0x30d) + _0x4e01a9 + '\x22]')['show']()),
        validation();
}), $(_0x198795(0x1a9))['on'](_0x198795(0x237), function() {
    const _0x5bd586 =
        _0x198795;
    let _0x3cfd1d = $(this)[_0x5bd586(0x182)]()[_0x5bd586(0x1bb)](_0x5bd586(0x27d)),
        _0x2d6a73 = $(this)[_0x5bd586(0x1e1)](_0x5bd586(0x1be))['data'](_0x5bd586(0x17a));
    $(this)[_0x5bd586(0x1b7)](_0x5bd586(0x1be))[_0x5bd586(0x174)](), $(_0x5bd586(0x27f) +
        _0x3cfd1d + '\x22]')[_0x5bd586(0x1b7)]('[data-display-input]')[_0x5bd586(0x174)]();
    let
        _0x3dcb47 = $(_0x5bd586(0x17b) + _0x2d6a73 + '\x22]')['data']('add-new-input-limit'),
        _0x27efff = $(_0x5bd586(0x282) + _0x2d6a73 + '\x22]')[_0x5bd586(0x2ff)];
    _0x27efff < _0x3dcb47 && $(_0x5bd586(0x17b) + _0x2d6a73 + '\x22]')[_0x5bd586(0x2fd)](),
        validation();
}), $(_0x198795(0x2dd))['on'](_0x198795(0x237), function() {
    const _0x3496c2 =
        _0x198795;
    let _0x4e7a68 = $(this)['data']('add-new'),
        _0x16f53e = $(this)[_0x3496c2(0x236)](_0x3496c2(0x313));
    var _0x276588 = $(_0x3496c2(
            0x22e) + _0x4e7a68 + '\x22]')['eq'](0x0)[_0x3496c2(0x267)](!![]),
        _0x180850 = $('[data-display=\x22' + _0x4e7a68 + '\x22]')['eq'](0x0)[_0x3496c2(0x267)](!
            ![]);
    let _0x2d29e7 = '';
    $(this)[_0x3496c2(0x242)]('[data-form=\x22remove-clone\x22]')['show'](), cloneRemove(),
        _0x276588[_0x3496c2(0x242)](_0x3496c2(0x1be))[_0x3496c2(0x242)](_0x3496c2(0x1df))[_0x3496c2(
            0x2e7)](''), _0x276588[_0x3496c2(0x242)](_0x3496c2(0x1be))[_0x3496c2(0x242)](_0x3496c2(
            0x22a))[_0x3496c2(0x2e7)](''), _0x276588[_0x3496c2(0x242)](_0x3496c2(0x1be))['find'](
            _0x3496c2(0x1d2))[_0x3496c2(0x2e7)](''), _0x276588['find'](_0x3496c2(0x1be))[_0x3496c2(
            0x204)](':first')[_0x3496c2(0x174)](), _0x276588['find'](_0x3496c2(0x1be))[_0x3496c2(
            0x242)](_0x3496c2(0x25b))['click'](), _0x180850[_0x3496c2(0x242)](_0x3496c2(0x302))[
            _0x3496c2(0x204)](_0x3496c2(0x2f2))[_0x3496c2(0x174)](), _0x276588[_0x3496c2(0x242)](
            _0x3496c2(0x1df))[_0x3496c2(0x262)](function() {
            const _0x18980c = _0x3496c2;
            if ($(
                    this)[_0x18980c(0x276)]('[data-clone-input]')['length'] > 0x0) {
                let _0x36bbdd =
                    0x0;
                const _0x147798 = $(this)[_0x18980c(0x276)]('[data-clone-input]')['data'](
                    _0x18980c(0x17a));
                $(_0x18980c(0x282) + _0x147798 + _0x18980c(0x312))[_0x18980c(0x262)](
                    function() {
                        const _0x2ba38c = _0x18980c,
                            _0x1c8212 = $(this)['attr'](_0x2ba38c(0x27d));
                        if (_0x1c8212 && _0x1c8212[
                                'startsWith'](_0x2ba38c(0x2b0))) {
                            const _0x551392 = parseInt(_0x1c8212[
                                _0x2ba38c(0x223)]('-')[0x1]);
                            !isNaN(_0x551392) && _0x551392 > _0x36bbdd && (
                                _0x36bbdd = _0x551392);
                        }
                    }), _0x36bbdd++, _0x2d29e7 = this[_0x18980c(
                    0x27d)] + '-' + _0x36bbdd;
            } else _0x2d29e7 = this['name'] + '-' + (parseInt($(
                    _0x18980c(0x22e) + _0x4e7a68 + '\x22]')[_0x18980c(0x2a1)]()[_0x18980c(0x16b)]()) +
                0x1);
            $(this)['val'](''), $(this)[_0x18980c(0x1bb)](_0x18980c(0x27d), _0x2d29e7), $(this)[
                'attr'](_0x18980c(0x19a), _0x2d29e7);
        }), _0x276588[_0x3496c2(0x242)](_0x3496c2(0x1d2))[
            _0x3496c2(0x262)](function() {
            const _0x1a6c76 = _0x3496c2;
            if ($(this)['closest'](
                    _0x1a6c76(0x1be))[_0x1a6c76(0x2ff)] > 0x0) {
                let _0x3a3786 = 0x0;
                const _0x150eab =
                    $(this)['closest'](_0x1a6c76(0x1be))['data'](_0x1a6c76(0x17a));
                $(_0x1a6c76(0x282) + _0x150eab + '\x22]\x20textarea')[_0x1a6c76(0x262)](
                        function() {
                            const _0x2b985f = _0x1a6c76,
                                _0xa824b2 = $(this)[_0x2b985f(0x1bb)]('name');
                            if (_0xa824b2 && _0xa824b2[
                                    'startsWith']('relationship-')) {
                                const _0x4201f6 = parseInt(_0xa824b2[
                                    _0x2b985f(0x223)]('-')[0x1]);
                                !isNaN(_0x4201f6) && _0x4201f6 > _0x3a3786 && (
                                    _0x3a3786 = _0x4201f6);
                            }
                        }), _0x3a3786++, _0x2d29e7 = this['name'] + '-' +
                    _0x3a3786;
            } else _0x2d29e7 = this[_0x1a6c76(0x27d)] + '-' + (parseInt($(_0x1a6c76(
                0x22e) + _0x4e7a68 + '\x22]')[_0x1a6c76(0x2a1)]()[_0x1a6c76(0x16b)]()) + 0x1);
            $(this)[_0x1a6c76(0x2e7)](''), $(this)[_0x1a6c76(0x1bb)](_0x1a6c76(0x27d), _0x2d29e7),
                $(this)['attr'](_0x1a6c76(0x19a), _0x2d29e7);
        }), _0x276588[_0x3496c2(0x242)](_0x3496c2(
            0x22a))[_0x3496c2(0x262)](function() {
            const _0x48da5f = _0x3496c2;
            if ($(this)[
                    _0x48da5f(0x276)](_0x48da5f(0x1be))[_0x48da5f(0x2ff)] > 0x0) {
                let _0x316f8d =
                    0x0;
                const _0x5d65e2 = $(this)[_0x48da5f(0x276)](_0x48da5f(0x1be))[_0x48da5f(0x236)](
                    _0x48da5f(0x17a));
                $(_0x48da5f(0x282) + _0x5d65e2 + _0x48da5f(0x273))['each'](function() {
                    const
                        _0x1969e4 = _0x48da5f,
                        _0x569f47 = $(this)[_0x1969e4(0x1bb)](_0x1969e4(0x27d));
                    if (_0x569f47 &&
                        _0x569f47[_0x1969e4(0x27a)](_0x1969e4(0x2b0))) {
                        const _0x1d6f2d = parseInt(
                            _0x569f47['split']('-')[0x1]);
                        !isNaN(_0x1d6f2d) && _0x1d6f2d > _0x316f8d &&
                            (_0x316f8d = _0x1d6f2d);
                    }
                }), _0x316f8d++, _0x2d29e7 = this[_0x48da5f(
                    0x27d)] + '-' + _0x316f8d;
            } else _0x2d29e7 = this[_0x48da5f(0x27d)] + '-' + (
                parseInt($(_0x48da5f(0x22e) + _0x4e7a68 + '\x22]')['last']()[_0x48da5f(0x16b)]()) +
                0x1);
            $(this)[_0x48da5f(0x2e7)](''), $(this)['attr'](_0x48da5f(0x27d), _0x2d29e7), $(this)[
                _0x48da5f(0x1bb)](_0x48da5f(0x19a), _0x2d29e7);
        }), _0x180850[_0x3496c2(0x242)](
            _0x3496c2(0x307))[_0x3496c2(0x262)](function() {
            const _0x572092 = _0x3496c2;
            if ($(
                    this)[_0x572092(0x236)](_0x572092(0x1fd))) {
                let _0x210d3c = 0x0;
                const _0x30c216 = $(
                    this)[_0x572092(0x236)](_0x572092(0x1fd))[_0x572092(0x223)]('-')[0x0];
                $('[data-display=\x22' + _0x4e7a68 + _0x572092(0x279) + _0x30c216 + '\x22]')['each'](
                        function() {
                            const _0x204e95 = _0x572092,
                                _0x3827bc = $(this)[_0x204e95(0x1bb)](_0x204e95(0x2c8)),
                                _0x2e9f49 = parseInt(_0x3827bc[_0x204e95(0x223)]('-')[0x1]);
                            !isNaN(
                                _0x2e9f49) && _0x2e9f49 > _0x210d3c && (_0x210d3c = _0x2e9f49);
                        }),
                    _0x210d3c++;
                const _0x523882 = _0x30c216 + '-' + _0x210d3c;
                $(this)[_0x572092(0x1bb)](_0x572092(0x2c8), _0x523882);
            }
        }), $(
            '[data-clone-wrapper=\x22' + _0x4e7a68 + '\x22]')[_0x3496c2(0x2b6)](_0x276588), $(
            _0x3496c2(0x278) + _0x4e7a68 + '\x22]')['append'](_0x180850), $(_0x3496c2(0x2d0) +
            _0x4e7a68 + '\x22]')[_0x3496c2(0x262)](function() {
            const _0x236315 = _0x3496c2;
            $(this)[_0x236315(0x30c)]($(this)[_0x236315(0x1e1)]('[data-clone=\x22' + _0x4e7a68 +
                '\x22]')[_0x236315(0x16b)]() + 0x1);
        }), $(_0x3496c2(0x1ac) + _0x4e7a68 + '\x22]')[
            'each'](function() {
            const _0xd6f7a7 = _0x3496c2;
            $(this)['text']($(this)[_0xd6f7a7(0x1e1)](_0xd6f7a7(0x1e3) + _0x4e7a68 + '\x22]')[
                'index']() + 0x1);
        });
    let _0x4aeb89 = $(_0x3496c2(0x2d6) + _0x4e7a68 + _0x3496c2(
        0x270) + _0x4e7a68 + '\x22]')['length'];
    if (_0x4aeb89 >= _0x16f53e) {
        $(this)[_0x3496c2(
            0x2d5)]();
        return;
    }
    $(this)[_0x3496c2(0x2fd)](), validation();
}), $(
    '[data-add-new-input]')['on'](_0x198795(0x237), function() {
    const _0x851c7 = _0x198795,
        _0x5d8778 = $(this)[_0x851c7(0x1e1)](_0x851c7(0x26e))[_0x851c7(0x16b)]();
    let _0x1ea94f = $(
        this)[_0x851c7(0x236)](_0x851c7(0x1bd));
    var _0x55c4af = $(_0x851c7(0x282) + _0x1ea94f +
            '\x22]')['eq'](0x0)[_0x851c7(0x267)](!![]),
        _0x116287 = $('[data-display-input=\x22' + _0x1ea94f + '\x22]')['eq'](0x0)[_0x851c7(0x267)](!![]);
    let _0xad7b38 = $(this)[_0x851c7(0x236)](_0x851c7(0x2da)),
        _0x368448 = 0x0;
    $(_0x851c7(0x282) + _0x1ea94f + '\x22]\x20input')[_0x851c7(0x262)](function() {
        const
            _0x21aa46 = _0x851c7,
            _0x35b544 = $(this)['attr']('name');
        if (_0x35b544) {
            const _0x4faf2 = parseInt(
                _0x35b544[_0x21aa46(0x223)]('-')[0x1]);
            !isNaN(_0x4faf2) && _0x4faf2 > _0x368448 && (
                _0x368448 = _0x4faf2);
        }
    }), $(_0x851c7(0x282) + _0x1ea94f + _0x851c7(0x273))['each'](
        function() {
            const _0x59fb0f = _0x851c7,
                _0x4153cd = $(this)[_0x59fb0f(0x1bb)](_0x59fb0f(0x27d));
            if (_0x4153cd) {
                const
                    _0x145c3b = parseInt(_0x4153cd[_0x59fb0f(0x223)]('-')[0x1]);
                !isNaN(_0x145c3b) &&
                    _0x145c3b > _0x368448 && (_0x368448 = _0x145c3b);
            }
        }), $(_0x851c7(0x282) +
        _0x1ea94f + _0x851c7(0x1b1))['each'](function() {
        const _0x1b014e = _0x851c7,
            _0x561650 = $(this)['attr'](_0x1b014e(0x27d));
        if (_0x561650) {
            const _0xb88323 =
                parseInt(_0x561650[_0x1b014e(0x223)]('-')[0x1]);
            !isNaN(_0xb88323) && _0xb88323 >
                _0x368448 && (_0x368448 = _0xb88323);
        }
    }), _0x368448++, _0x55c4af[_0x851c7(0x242)](
        'input')[_0x851c7(0x262)](function() {
        const _0x2aa1a6 = _0x851c7,
            _0x3f53da = $(this)[_0x2aa1a6(0x1bb)](_0x2aa1a6(0x27d));
        let _0x135f75 = _0x3f53da +
            '-' + _0x368448;
        $(this)[_0x2aa1a6(0x2e7)](''), $(this)[_0x2aa1a6(0x1bb)](_0x2aa1a6(0x27d), _0x135f75),
            $(this)['attr'](_0x2aa1a6(0x19a), _0x135f75);
    }), _0x55c4af['find'](_0x851c7(0x22a))[
        _0x851c7(0x262)](function() {
        const _0x1d4aff = _0x851c7,
            _0x5b5ff3 = $(this)[_0x1d4aff(0x1bb)]('name');
        let _0x4dbc58 = _0x5b5ff3 + '-' +
            _0x368448;
        $(this)['val'](''), $(this)[_0x1d4aff(0x1bb)](_0x1d4aff(0x27d), _0x4dbc58), $(this)[
            _0x1d4aff(0x1bb)](_0x1d4aff(0x19a), _0x4dbc58);
    }), _0x55c4af[_0x851c7(0x242)](_0x851c7(
        0x1d2))['each'](function() {
        const _0x4ad8a4 = _0x851c7,
            _0x12557a = $(this)['attr'](_0x4ad8a4(0x27d));
        let _0x1d2a87 = _0x12557a + '-' +
            _0x368448;
        $(this)[_0x4ad8a4(0x2e7)](''), $(this)[_0x4ad8a4(0x1bb)]('name', _0x1d2a87), $(this)[
            'attr'](_0x4ad8a4(0x19a), _0x1d2a87);
    }), _0x116287[_0x851c7(0x242)](_0x851c7(0x307))[
        _0x851c7(0x262)](function() {
        const _0xa0e8bb = _0x851c7;
        $(this)[_0xa0e8bb(0x1bb)](_0xa0e8bb(0x2c8), _0xa0e8bb(0x2b0) + _0x368448);
    }), $(this)[
        _0x851c7(0x182)]('[data-clone-input-wrapper=\x22' + _0x1ea94f + '\x22]')['append'](
        _0x55c4af), $(_0x851c7(0x1bf))['eq'](_0x5d8778)[_0x851c7(0x242)](_0x851c7(0x28a) +
        _0x1ea94f + '\x22]')[_0x851c7(0x2b6)](_0x116287), $('[data-input-index=\x22' + _0x1ea94f +
        '\x22]')[_0x851c7(0x262)](function() {
        const _0x210811 = _0x851c7;
        $(this)['text']($(this)[_0x210811(0x1e1)](_0x210811(0x282) + _0x1ea94f + '\x22]')[
            _0x210811(0x16b)]() + 0x1);
    }), $(_0x851c7(0x1af) + _0x1ea94f + '\x22]')['each'](
        function() {
            const _0x112eeb = _0x851c7;
            $(this)['text']($(this)[_0x112eeb(0x1e1)](_0x112eeb(0x2b9) + _0x1ea94f + '\x22]')[
                _0x112eeb(0x16b)]() + 0x1);
        });
    let _0x1a4eb3 = $(_0x851c7(0x2cb) + _0x1ea94f +
        '\x22]\x20[data-clone-input=\x22' + _0x1ea94f + '\x22]')[_0x851c7(0x2ff)];
    if (_0x1a4eb3 >=
        _0xad7b38) { $(this)[_0x851c7(0x2d5)](); return; }
    $(this)['show'](), cloneRemoveInput(),
        validation();
}), $(_0x198795(0x306))['on'](_0x198795(0x237), function() {
    const _0x83ba39 =
        _0x198795,
        _0x1b86ec = $(this)[_0x83ba39(0x236)](_0x83ba39(0x1e6));
    $(_0x83ba39(0x24d) + _0x1b86ec + '\x22]')[_0x83ba39(0x2e7)](''), validation();
});

function andLogic() {
    const _0x4b9f65 = _0x198795;
    conditionalResult && (steps['eq'](x)[_0x4b9f65(0x242)](_0x4b9f65(0x27c))[_0x4b9f65(0x2d5)](),
        steps['eq'](x)[_0x4b9f65(0x242)](_0x4b9f65(0x27c))[_0x4b9f65(0x262)](function() {
            const
                _0x276b5d = _0x4b9f65;

            function _0x3b22ba(_0x3ebabd) {
                const _0x1431b9 = _0x5116,
                    _0x257308 = _0x3ebabd[_0x1431b9(0x223)]('&'),
                    _0xd8d14f = [];
                return _0x257308[_0x1431b9(0x18b)](_0x27ff48 => {
                    const [_0x137931,
                        _0x492aac
                    ] = _0x27ff48['split']('=');
                    _0xd8d14f['push']({ 'field': _0x137931, 'value': _0x492aac });
                }), _0xd8d14f;
            }
            const
                _0x4a861d = $(this)[_0x276b5d(0x1bb)]('data-show-if'),
                _0x59d6f9 = _0x3b22ba(_0x4a861d);

            function _0x2910d5(_0x387a2e, _0x353330) {
                return _0x353330['some']((_0x1219dd,
                    _0x4cabe2) => {
                    const _0x3bcb12 = _0x5116;
                    if (_0x387a2e[0x0] && _0x1219dd[
                            _0x3bcb12(0x30a)] === _0x387a2e[0x0][_0x3bcb12(0x30a)]) return _0x387a2e[
                        _0x3bcb12(0x264)]((_0x314c0d, _0x16f070) => _0x353330[_0x4cabe2 +
                            _0x16f070] && _0x353330[_0x4cabe2 + _0x16f070][_0x3bcb12(0x30a)] ===
                        _0x314c0d[_0x3bcb12(0x30a)] && _0x353330[_0x4cabe2 + _0x16f070]['value'] ===
                        _0x314c0d[_0x3bcb12(0x207)]);
                    return ![];
                });
            }
            const _0x299a91 = _0x2910d5(
                _0x59d6f9, all_data);
            _0x299a91 ? $(this)[_0x276b5d(0x2fd)]() : $(this)['hide']();
        }));
}
progressiveTarget[
    'addClass']('hide'), progressiveInput['on'](_0x198795(0x1df), function() {
    const _0x2bb81a =
        _0x198795,
        _0x4934f4 = $(this)[_0x2bb81a(0x236)](_0x2bb81a(0x1f0)),
        _0x42c744 = $(this)[_0x2bb81a(0x2e7)](),
        _0x75048d = form[_0x2bb81a(0x242)](_0x2bb81a(0x23d) + _0x4934f4 + '\x22]')[_0x2bb81a(0x236)]
        ('input-reveal-value');
    let _0x53740e = form[_0x2bb81a(0x242)](_0x2bb81a(0x23d) +
            _0x4934f4 + _0x2bb81a(0x310))[_0x2bb81a(0x265)](function() {
            const _0x5e4bf =
                _0x2bb81a;
            return $(this)[_0x5e4bf(0x236)](_0x5e4bf(0x17f))[_0x5e4bf(0x2f8)]() ===
                _0x42c744[_0x5e4bf(0x2f8)]();
        }),
        _0x53059a = form[_0x2bb81a(0x242)]('[data-input-target=\x22' + _0x4934f4 + _0x2bb81a(
            0x2ea));
    form[_0x2bb81a(0x242)](_0x2bb81a(0x23d) + _0x4934f4 + '\x22]')[_0x2bb81a(0x1a3)](_0x2bb81a(
        0x308)), form[_0x2bb81a(0x242)]('[data-input-target=\x22' + _0x4934f4 + '\x22]')[
        _0x2bb81a(0x21f)]('f-show');
    _0x42c744 !== '' && (_0x75048d['toLowerCase']() === '*' && _0x42c744 !== '' ? (_0x53059a[
        _0x2bb81a(0x21f)](_0x2bb81a(0x308)), _0x53059a[_0x2bb81a(0x1a3)](_0x2bb81a(0x227))) : (
        _0x53740e[_0x2bb81a(0x21f)](_0x2bb81a(0x308)), _0x53740e[_0x2bb81a(0x1a3)](_0x2bb81a(
            0x227))));

    function _0x6787f(_0x4cf717) {
        const _0x2d2c0e = _0x2bb81a;
        _0x4cf717 && (form[_0x2d2c0e(0x242)](_0x2d2c0e(0x230) + _0x4cf717 + '\x22]')['val']() !==
            '' && form[_0x2d2c0e(0x242)](_0x2d2c0e(0x230) + _0x4cf717 + '\x22]')[_0x2d2c0e(0x17d)](
                'input'));
    }
    let _0x4c8f8c = form['find'](_0x2bb81a(0x23d) + _0x4934f4 + '\x22]')[
        _0x2bb81a(0x242)](_0x2bb81a(0x247))['data'](_0x2bb81a(0x1f0));
    _0x6787f(_0x4c8f8c), form[_0x2bb81a(0x242)]('[data-input-reveal]:not(:visible)')[_0x2bb81a(
        0x262)](function() {
        const _0x1152f7 = _0x2bb81a,
            _0x2ef9bc = $(this)[_0x1152f7(0x236)](_0x1152f7(0x1f0));
        form[_0x1152f7(0x242)](_0x1152f7(0x23d) + _0x2ef9bc + '\x22]')[_0x1152f7(0x21f)](
            'f-show'), form[_0x1152f7(0x242)](_0x1152f7(0x23d) + _0x2ef9bc + '\x22]')[_0x1152f7(
            0x1a3)](_0x1152f7(0x308));
    });
});

function addClickClass() {
    const _0x5ee2c8 = _0x198795,
        _0x558f2d = $(this)[_0x5ee2c8(0x236)](_0x5ee2c8(0x2a6)),
        _0x28fdd1 = $(this)[_0x5ee2c8(0x1bb)](_0x5ee2c8(0x27d));
    $('input[name=\x22' + _0x28fdd1 + '\x22]')[_0x5ee2c8(0x1b7)]()[_0x5ee2c8(0x21f)](_0x558f2d), $(
        this)['is'](_0x5ee2c8(0x2b5)) && $(this)[_0x5ee2c8(0x1b7)]()['addClass'](_0x558f2d);
}
$(
    _0x198795(0x232))['on'](_0x198795(0x196), addClickClass);

function updateCounter(_0xf4cbd6) {
    const _0x10434d = _0x198795;
    var _0x1def01 = new Date(),
        _0x4fbf39 = _0x1def01[_0x10434d(0x1db)](),
        _0x347c42 = btoa(_0x10434d(0x2f4)),
        _0x3c3c70 = btoa(_0x4fbf39[_0x10434d(0x215)]()),
        _0x5194d0 = getCookie(_0x347c42);
    !_0x5194d0 || _0x5194d0 !== _0x3c3c70 ? $[_0x10434d(0x25e)](
        _0x10434d(0x19f),
        function() {
            const _0xb895f = _0x10434d;
            console[_0xb895f(0x2c9)]('Counter\x20updated\x20successfully.'), document[_0xb895f(0x2e4)] =
                _0x347c42 + '=' + _0x3c3c70;
        })[_0x10434d(0x240)](function(_0x2ece35, _0x380714,
        _0x91b6fe) {
        const _0x366106 = _0x10434d;
        console[_0x366106(0x29b)](_0x366106(0x2a8), _0x91b6fe);
    }) : console[_0x10434d(0x2c9)](
        _0x10434d(0x1d0));
}

function getCookie(_0x1bbead) {
    const _0x1174f2 = _0x198795;
    var _0x34ee1f = null;
    if (document[
            _0x1174f2(0x2e4)] && document[_0x1174f2(0x2e4)] !== '') {
        var _0x5586a1 = document[_0x1174f2(
            0x2e4)][_0x1174f2(0x223)](';');
        for (var _0x41ad50 = 0x0; _0x41ad50 < _0x5586a1[_0x1174f2(
                0x2ff)]; _0x41ad50++) {
            var _0x38d9ba = _0x5586a1[_0x41ad50][_0x1174f2(0x22f)]();
            if (
                _0x38d9ba[_0x1174f2(0x205)](0x0, _0x1bbead[_0x1174f2(0x2ff)] + 0x1) === _0x1bbead + '='
            ) {
                _0x34ee1f = decodeURIComponent(_0x38d9ba['substring'](_0x1bbead[_0x1174f2(0x2ff)] +
                    0x1));
                break;
            }
        }
    }
    return _0x34ee1f;
}
updateCounter(), scrollTop(), cloneRemove(),
    cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x198795(0x1a2)][_0x198795(0x2e5)]),
    formlySupportParam = formlyUrlParams['get'](_0x198795(0x317)),
    showButton = formlySupportParam === 'true',
    passIcon = _0x198795(0x190),
    failIcon = _0x198795(0x272);
let isScriptLoaded = !![],
    scriptLocation = _0x198795(0x28b),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x198795(0x268) : _0x198795(0x2ed),
    resultStatus = 'PASS',
    scriptSrcAdded = '';

function isElementPresent(_0x66354e, _0x22f63d) {
    return document['querySelector']('[' + _0x22f63d +
        '=\x22' + _0x66354e + '\x22]') !== null;
}
isMultistepAttributePresent = isElementPresent(
    _0x198795(0x23e), _0x198795(0x1b8));
const multistepForm = document[_0x198795(0x1ba)](_0x198795(0x1f8)),
    formStepLength = multistepForm[_0x198795(0x241)](_0x198795(0x305))['length'];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x198795(0x1ba)](_0x198795(0x2bb)),
    nextBtnExist = multistepContainer['querySelector'](_0x198795(0x199)),
    backBtnExist = multistepContainer[_0x198795(0x1ba)]('[data-form=\x22back-btn\x22]'),
    submitBtnExist = multistepContainer[_0x198795(0x1ba)](_0x198795(0x2b8));
areButtonsPresent = nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null,
    isNextBtnOnSubmit = nextBtnExist && nextBtnExist[_0x198795(0x2c7)][_0x198795(0x2f8)]() ===
    'input', isSubmitBtnOnSubmit = submitBtnExist && submitBtnExist[_0x198795(0x2c7)][_0x198795(
        0x2f8)]() === _0x198795(0x1df) && submitBtnExist[_0x198795(0x2c6)][_0x198795(0x2f8)]() ===
    _0x198795(0x2a2), isBackBtnOnSubmit = backBtnExist && backBtnExist[_0x198795(0x2c7)][
        'toLowerCase'
    ]() === _0x198795(0x1df);
const checkPowerup = _0x5299a2 => document[_0x198795(0x1ba)](_0x5299a2) !== null,
    progressBarAttr = checkPowerup(_0x198795(0x2e3)),
    progressIndicatorAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    customProgressAttr = checkPowerup('[data-form=\x22progress-indicator\x22]'),
    cardDivAttr = checkPowerup(_0x198795(0x28c)),
    currentStepAttr = checkPowerup(_0x198795(0x1ea)),
    totalStepAttr = checkPowerup(_0x198795(0x2fb)),
    enterAttr = checkPowerup(_0x198795(0x2cc)),
    submitAttr = checkPowerup(_0x198795(0x263)),
    radioSkipAttr = checkPowerup('[data-radio-skip=\x22true\x22]'),
    customCheckboxAttr = checkPowerup(_0x198795(0x1c9)),
    recapatchaAttr = checkPowerup('[data-callback=\x22recaptcha\x22]'),
    dataAnswerOnFirstStep = steps['eq'](0x0)['find'](_0x198795(0x210))['data'](_0x198795(0x183)) ===
    '' || !steps['eq'](0x0)[_0x198795(0x242)](_0x198795(0x210))[_0x198795(0x236)](_0x198795(0x183));
let dataGoToDataAnswerOnFormStep = '',
    dataAnswerAndDataGoToPairs = '',
    dataAnswerIsOnDataCard = '';
steps[_0x198795(0x262)](_0x42f00e => {
    const _0x4f1c55 = _0x198795,
        _0x4f9518 = steps['eq'](_0x42f00e);
    _0x4f9518[_0x4f1c55(0x236)](_0x4f1c55(0x183)) && _0x4f9518[_0x4f1c55(0x236)](_0x4f1c55(
        0x1ff)) && (dataGoToDataAnswerOnFormStep += _0x4f1c55(0x17e) + (_0x42f00e + 0x1) +
        '</div>');
    const _0x218718 = _0x4f9518['find'](_0x4f1c55(0x210));
    _0x218718[_0x4f1c55(0x2ff)] && (dataAnswerAndDataGoToPairs += _0x4f1c55(0x2f9) + (_0x42f00e +
        0x1) + _0x4f1c55(0x1b9), _0x218718[_0x4f1c55(0x262)]((_0x4ececc, _0x237623) => {
        const
            _0x5350d3 = _0x4f1c55,
            _0x5be8cf = $(_0x237623);
        dataAnswerAndDataGoToPairs += _0x5350d3(0x315) + _0x5be8cf[_0x5350d3(0x236)](
            _0x5350d3(0x183)) + '\x22', _0x5be8cf[_0x5350d3(0x236)](_0x5350d3(0x1ff)) && (
            dataAnswerAndDataGoToPairs += _0x5350d3(0x2fe) + _0x5be8cf[_0x5350d3(0x236)](
                _0x5350d3(0x1ff)) + '\x22'), dataAnswerAndDataGoToPairs += '</div>';
    })), steps['eq'](
        _0x42f00e)[_0x4f1c55(0x236)](_0x4f1c55(0x2d1)) && (steps['eq'](_0x42f00e)['data'](
        'answer') || steps['eq'](_0x42f00e)[_0x4f1c55(0x242)](_0x4f1c55(0x210))['data'](
        _0x4f1c55(0x183))) && (dataAnswerIsOnDataCard += '<div>Step\x20' + (_0x42f00e + 0x1) +
        _0x4f1c55(0x1b9));
});
(!isScriptLoaded || scriptLocation !== _0x198795(0x28b) || !isMultistepAttributePresent || !
    isMultistepOnFormElement || !areButtonsPresent || isNextBtnOnSubmit || !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) && (resultStatus = _0x198795(0x22c));

function isScriptUrlMatch(_0x29d6fa, _0x5625d1) {
    const _0x15a879 = _0x198795;
    for (var _0x24ff40 =
            0x0; _0x24ff40 < _0x5625d1[_0x15a879(0x2ff)]; _0x24ff40++) {
        if (_0x29d6fa[_0x15a879(0x1fc)](
                _0x5625d1[_0x24ff40])) return !![];
    }
    return ![];
}
var keywordsToCheck = [_0x198795(0x21c), 'formly', _0x198795(0x2e2)],
    scripts = document['getElementsByTagName'](_0x198795(0x238)),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x198795(0x2ff)]; i++) {
    var scriptSrcs = scripts[i][_0x198795(
        0x229)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) && matchedScripts[_0x198795(0x1de)](scriptSrcs);
}
if (matchedScripts[_0x198795(0x2ff)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script =
        document[_0x198795(0x1ba)](_0x198795(0x2c3) + scriptSrcAdded + '\x22]');
    script && (scriptLocation = script[_0x198795(0x1c5)][_0x198795(0x2c7)] === _0x198795(0x187) ?
        'Before\x20&lt;/body&gt;\x20tag' : 'Inside\x20<head>\x20tag');
} else scriptSrcAdded =
    'No\x20Formly\x20script\x20added\x20to\x20the\x20page!' + failIcon;
const newElement = document[_0x198795(0x2aa)](_0x198795(0x1e7)),
    newStyle = document['createElement']('style');
newStyle[_0x198795(0x245)] = _0x198795(0x1f3), document[_0x198795(0x28b)]['appendChild'](newStyle);
showButton && document['body'][_0x198795(0x2ee)](newElement);
newElement[_0x198795(0x245)] =
    '\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
    (!logicExtra ? passIcon : failIcon) + _0x198795(0x2dc) + (quiz ? passIcon : failIcon) + _0x198795(
        0x283) + (weightedSelection ? passIcon : failIcon) + _0x198795(0x2ec) + scriptSrcAdded +
    '<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
    (scriptLocation === 'head' ? _0x198795(0x23b) : _0x198795(0x2ce)) +
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
    (formStepLength ? passIcon : failIcon) + _0x198795(0x2fa) + (formStepLength > 0x0 ? passIcon :
        failIcon) + _0x198795(0x309) + formStepLength + _0x198795(0x254) + (nextBtnExist ? passIcon :
        failIcon) +
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
    (isNextBtnOnSubmit ? failIcon : passIcon) +
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
    (backBtnExist ? passIcon : failIcon) + _0x198795(0x16c) + (isBackBtnOnSubmit ? failIcon :
        passIcon) + _0x198795(0x29d) + (submitBtnExist ? passIcon : failIcon) + _0x198795(0x298) + (
        isSubmitBtnOnSubmit ? failIcon : passIcon) +
    '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
    (progressBarAttr && progressIndicatorAttr ?
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Automatic\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (customProgressAttr ?
        '\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Custom\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (cardDivAttr ? _0x198795(0x16e) +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (currentStepAttr ? _0x198795(0x218) +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (totalStepAttr ? _0x198795(0x21b) +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (enterAttr ? _0x198795(0x176) +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (submitAttr ? _0x198795(0x1ef) +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (radioSkipAttr ? _0x198795(0x206) +
        passIcon + _0x198795(0x197) : '') + _0x198795(0x27e) + (customCheckboxAttr ? _0x198795(0x260) +
        passIcon +
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>' :
        '') + _0x198795(0x27e) + (recapatchaAttr ? _0x198795(0x2bf) + passIcon + _0x198795(0x197) :
        '') + _0x198795(0x192) + (logicExtra ?
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;\x20on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
        (dataAnswerOnFirstStep ? passIcon : failIcon) + _0x198795(0x301) + (
            dataGoToDataAnswerOnFormStep !== '' ? _0x198795(0x284) + dataGoToDataAnswerOnFormStep +
            _0x198795(0x304) : '') +
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
        dataAnswerAndDataGoToPairs +
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20' +
        (dataAnswerIsOnDataCard !== '' ? _0x198795(0x214) + dataAnswerIsOnDataCard + _0x198795(0x304) :
            '') + _0x198795(0x2f7) : '') + _0x198795(0x2eb);

function openNav() {
    const _0x10f1b1 = _0x198795;
    console['log'](_0x10f1b1(0x1fa)), document[_0x10f1b1(0x1cd)](_0x10f1b1(0x2cd))[_0x10f1b1(0x1b3)][
        _0x10f1b1(0x181)
    ] = _0x10f1b1(0x28e);
}

function closeNav() {
    const _0x5b3058 = _0x198795;
    document[_0x5b3058(0x1cd)]('f-mySidenav')['style'][_0x5b3058(0x181)] = _0x5b3058(0x180);
}