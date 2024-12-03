// -- reverted on 10/5/24 -- force updated
//reason - checkbox issue
//reverted bug: required checkbox validation wasn't working on the last step

const _0x191e96 = _0x5e13;
(function (_0x5506e9, _0x44f972) {
  const _0x259151 = _0x5e13,
    _0x5a63f9 = _0x5506e9();
  while (!![]) {
    try {
      const _0x191515 =
        -parseInt(_0x259151(0x18b)) / 0x1 +
        (-parseInt(_0x259151(0x209)) / 0x2) *
          (parseInt(_0x259151(0x1d7)) / 0x3) +
        (-parseInt(_0x259151(0x221)) / 0x4) *
          (parseInt(_0x259151(0x234)) / 0x5) +
        parseInt(_0x259151(0x219)) / 0x6 +
        (-parseInt(_0x259151(0x12f)) / 0x7) *
          (-parseInt(_0x259151(0x1a1)) / 0x8) +
        -parseInt(_0x259151(0x251)) / 0x9 +
        (-parseInt(_0x259151(0x237)) / 0xa) *
          (-parseInt(_0x259151(0x1d8)) / 0xb);
      if (_0x191515 === _0x44f972) break;
      else _0x5a63f9["push"](_0x5a63f9["shift"]());
    } catch (_0x262f04) {
      _0x5a63f9["push"](_0x5a63f9["shift"]());
    }
  }
})(_0xce23, 0x2653c);
let x = 0x0,
  lastStep = 0x0,
  curStep = 0x0,
  countCard = !![],
  fill = ![],
  inputFilled = !![],
  skip,
  urlFilled = !![],
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
  answer = "",
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
  successCard = "",
  redirectTo = "",
  totalSteps = 0x0,
  checkCount = 0x0,
  newTab = !![],
  unfilledArr = [],
  notRobot = !![],
  all_data = [];
var ogCloneArr = [];
let steps = $(_0x191e96(0x232)),
  progressbarClone = $(_0x191e96(0x127))[_0x191e96(0x1f4)](),
  progressbar,
  weightedSelection = $("[data-weighted-selection]")[_0x191e96(0x231)](
    _0x191e96(0x17d),
  ),
  weightedSelectionRange = $(_0x191e96(0x21c))[_0x191e96(0x231)](
    "weighted-selection-range",
  ),
  selectMultiple = $(_0x191e96(0x274))[_0x191e96(0x231)](_0x191e96(0x122)),
  customError = $(_0x191e96(0x190))[_0x191e96(0x231)](_0x191e96(0x15f)),
  reinitIX = $(_0x191e96(0x1ba))[_0x191e96(0x231)]("reinit"),
  memory = $(_0x191e96(0x1c6))[_0x191e96(0x231)](_0x191e96(0x12a)),
  quiz = $(_0x191e96(0x120))["data"](_0x191e96(0x171));
const urlFormly = new URL(window[_0x191e96(0x224)][_0x191e96(0x1db)]);
let _params = $(_0x191e96(0x1e8))[_0x191e96(0x231)]("query-param"),
  logicExtra = $(_0x191e96(0x178))[_0x191e96(0x231)](_0x191e96(0x141)),
  oldSubmitText = $(_0x191e96(0x233))[_0x191e96(0x1c1)](),
  oldResetText = $(_0x191e96(0x183))[_0x191e96(0x264)](),
  formReset = $("[data-form=\x22multistep\x22]")[_0x191e96(0x231)](
    _0x191e96(0x267),
  ),
  resetDelay = $(_0x191e96(0x1be))[_0x191e96(0x231)](_0x191e96(0x185))
    ? $(_0x191e96(0x1be))[_0x191e96(0x231)]("reset-delay")
    : 0x7d0,
  redirectDelay = $(_0x191e96(0x132))["data"](_0x191e96(0x19d))
    ? $(_0x191e96(0x132))[_0x191e96(0x231)](_0x191e96(0x19d))
    : 0x64,
  phoneFormat = $("[data-form=\x22multistep\x22]")[_0x191e96(0x231)](
    _0x191e96(0x1c4),
  ),
  scrollToTop = $("[data-form=\x22multistep\x22]")[_0x191e96(0x231)](
    _0x191e96(0x1e5),
  ),
  trackLastStep = $(_0x191e96(0x26e))[_0x191e96(0x231)]("last-step"),
  conditionalResult = $(_0x191e96(0xfe))["data"](_0x191e96(0x180)) === "AND",
  scrollTopOffset = parseInt(
    $(_0x191e96(0x178))[_0x191e96(0x231)](_0x191e96(0x253)),
  );
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON[_0x191e96(0x1d3)](
  localStorage[_0x191e96(0x13d)](_0x191e96(0x16b)),
)),
  (formlyLastStep = JSON[_0x191e96(0x1d3)](
    localStorage[_0x191e96(0x13d)]("formlyLastStep"),
  )),
  (formlyLastStepAnswer = JSON["parse"](
    localStorage[_0x191e96(0x13d)](_0x191e96(0x228)),
  ));
trackLastStep &&
  (formlyLastStep > x && (x = formlyLastStep),
  formlyLastStepAnswer && (selections = formlyLastStepAnswer));
$(_0x191e96(0x1e4))[_0x191e96(0x1f5)](function () {
  const _0x10d86a = _0x191e96;
  ogCloneArr["push"]({
    name: $(this)[_0x10d86a(0x231)]("clone"),
    element: $(this)[_0x10d86a(0x1f4)](!![]),
    display: $(
      _0x10d86a(0x1f0) + $(this)[_0x10d86a(0x231)](_0x10d86a(0x1f4)) + "\x22]",
    )
      ["eq"](0x0)
      [_0x10d86a(0x1f4)](!![]),
  });
});
$(_0x191e96(0x266))["length"] > 0x0 && (notRobot = ![]);

function recaptcha(_0x45142b) {
  notRobot = !![];
}
($(steps[x])["data"](_0x191e96(0x204)) ||
  $(steps[x])
    [_0x191e96(0xfd)](".active-answer-card")
    ["data"](_0x191e96(0x204))) &&
  (next = !![]);
$(_0x191e96(0x252))[_0x191e96(0x113)] > 0x0 &&
  (countCard = $(_0x191e96(0x252))[_0x191e96(0x231)](_0x191e96(0x23f)));
$(_0x191e96(0x164))[_0x191e96(0x1a6)](),
  $(progressbarClone)[_0x191e96(0x129)](_0x191e96(0x257)),
  $(_0x191e96(0x19a))["children"]()[_0x191e96(0x239)](),
  $(_0x191e96(0x233))[_0x191e96(0x1a6)](),
  $(_0x191e96(0x11a))[_0x191e96(0x1a6)](),
  steps[_0x191e96(0x1f5)](function () {
    const _0x2565b9 = _0x191e96;
    $(_0x2565b9(0x19a))["append"](progressbarClone["clone"](!![], !![]));
  }),
  $("[data-input-field]")[_0x191e96(0x1a6)]();
countCard
  ? ((curStep = curStep + 0x1),
    (totalSteps = steps[_0x191e96(0x113)]),
    $("[data-text=\x22total-steps\x22]")[_0x191e96(0x264)](totalSteps))
  : ($(steps[x])["data"](_0x191e96(0x204))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    (totalSteps = $(_0x191e96(0x103))[_0x191e96(0x113)]),
    $(_0x191e96(0x1ad))[_0x191e96(0x264)](totalSteps),
    $(_0x191e96(0x18d))[_0x191e96(0x1f5)](function () {
      const _0x12058f = _0x191e96;
      $($(_0x12058f(0x127))[$(this)[_0x12058f(0x1aa)]()])[_0x12058f(0x1a6)]();
    }));
(progressbar = $(_0x191e96(0x19a))[_0x191e96(0x1a7)]()),
  $(_0x191e96(0x127))["on"](_0x191e96(0x223), clickableIndicator),
  $(_0x191e96(0x154))[_0x191e96(0x264)](curStep),
  steps[_0x191e96(0x1a6)](),
  $(_0x191e96(0x218))[_0x191e96(0x1a6)](),
  $(_0x191e96(0x1d0))[_0x191e96(0x1f5)](function () {
    const _0x5dbb7c = _0x191e96;
    $(this)[_0x5dbb7c(0x265)](_0x5dbb7c(0x1f3), _0x5dbb7c(0x1a4));
  });

function getParams() {
  const _0x4b1424 = _0x191e96;
  urlFormly[_0x4b1424(0x259)][_0x4b1424(0x14b)](
    function (_0x4eaf83, _0x12c55f) {
      const _0x56906e = _0x4b1424;
      searchQ[_0x56906e(0x272)]({ val: _0x4eaf83, key: _0x12c55f });
    },
  );
}

function getSafe(_0x551384, _0x3af2e8) {
  try {
    return _0x551384();
  } catch (_0x8d781a) {
    return _0x3af2e8;
  }
}

function phoneAutoFormat(_0x60ebf3) {
  var _0x5b5470 = "";
  return function (_0x8d7259) {
    const _0x3e7486 = _0x5e13;
    var _0x41ccce = "",
      _0x31085e = _0x8d7259["replace"](/\D/g, ""),
      _0x416bf9 = 0x0,
      _0x55e741 = 0x0;
    while (
      _0x416bf9 < _0x31085e[_0x3e7486(0x113)] &&
      _0x55e741 < _0x60ebf3[_0x3e7486(0x113)]
    ) {
      _0x60ebf3[_0x55e741] === "x"
        ? ((_0x41ccce += _0x31085e[_0x416bf9]), _0x416bf9++)
        : (_0x41ccce += _0x60ebf3[_0x55e741]),
        _0x55e741++;
    }
    if (_0x8d7259[_0x3e7486(0x113)] < _0x5b5470[_0x3e7486(0x113)]) {
      var _0x13ddf6 = _0x60ebf3[_0x3e7486(0x268)](_0x55e741);
      _0x41ccce += _0x13ddf6[_0x3e7486(0x111)](/x/g, "");
    }
    return (_0x5b5470 = _0x41ccce), _0x41ccce;
  };
}

function validateURL(_0xf4105a) {
  return urlPattern["test"](_0xf4105a) ? !![] : ![];
}
quiz &&
  steps[_0x191e96(0x1f5)](function () {
    const _0x457fda = _0x191e96;
    $(this)[_0x457fda(0x1a7)]()[_0x457fda(0x265)](_0x457fda(0x1bd), !![]),
      $(this)[_0x457fda(0x1a7)]()[_0x457fda(0x265)](_0x457fda(0x159), 0xfa);
  });

function disableBtn(_0x59e8ba) {
  const _0x46cf1e = _0x191e96;
  (fill = ![]),
    !customError &&
      ($(_0x46cf1e(0x117))[_0x46cf1e(0x203)]({
        opacity: "0.4",
        "pointer-events": "none",
      }),
      $(_0x46cf1e(0x117))[_0x46cf1e(0x1e2)](_0x46cf1e(0x169)),
      $(_0x46cf1e(0x233))["css"]({ opacity: "0.4", "pointer-events": "none" }),
      $(_0x46cf1e(0x233))[_0x46cf1e(0x1e2)]("disabled"),
      $(_0x46cf1e(0x11a))["css"]({
        opacity: _0x46cf1e(0x1b8),
        "pointer-events": _0x46cf1e(0x112),
      }),
      $(_0x46cf1e(0x11a))[_0x46cf1e(0x1e2)](_0x46cf1e(0x169)));
}

function enableBtn() {
  const _0x1544a0 = _0x191e96;
  (fill = !![]),
    $(_0x1544a0(0x117))["css"]({ "pointer-events": "auto", opacity: "1" }),
    $(_0x1544a0(0x117))["removeClass"]("disabled"),
    $("[data-form=\x22submit-btn\x22]")[_0x1544a0(0x203)]({
      "pointer-events": _0x1544a0(0x157),
      opacity: "1",
    }),
    $(_0x1544a0(0x233))[_0x1544a0(0x129)](_0x1544a0(0x169)),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x1544a0(0x203)]({
      "pointer-events": _0x1544a0(0x157),
      opacity: "1",
    }),
    $(_0x1544a0(0x11a))[_0x1544a0(0x129)](_0x1544a0(0x169));
}

function saveLastAnswer(_0x26beee) {
  const _0x4942f2 = _0x191e96;
  localStorage["removeItem"]("formlyLastStepAnswer"),
    localStorage["setItem"](
      _0x4942f2(0x228),
      JSON[_0x4942f2(0x261)](_0x26beee),
    );
}

function saveFilledInput() {
  const _0x26c5f2 = _0x191e96;
  $(_0x26c5f2(0x101))
    [_0x26c5f2(0x25d)]("[type=\x22submit\x22]")
    [_0x26c5f2(0x1f5)](function () {
      const _0x1048bd = _0x26c5f2;
      $(this)[_0x1048bd(0x265)](_0x1048bd(0x1f3)) === "checkbox" ||
      $(this)[_0x1048bd(0x265)](_0x1048bd(0x1f3)) === "radio"
        ? $(this)[_0x1048bd(0x182)]("checked") &&
          (filledInput[_0x1048bd(0x1f6)](
            (_0x3d979f) =>
              _0x3d979f[_0x1048bd(0x175)] ===
              $(this)[_0x1048bd(0x265)](_0x1048bd(0x263)),
          )
            ? ((filledInput = filledInput[_0x1048bd(0x1b0)](
                (_0x42f311) =>
                  _0x42f311[_0x1048bd(0x175)] !==
                  $(this)[_0x1048bd(0x265)](_0x1048bd(0x263)),
              )),
              $(this)[_0x1048bd(0x1c1)]() !== "" &&
                filledInput[_0x1048bd(0x272)]({
                  inputName: $(this)[_0x1048bd(0x265)](_0x1048bd(0x263)),
                  value: $(this)[_0x1048bd(0x1c1)](),
                }))
            : $(this)[_0x1048bd(0x1c1)]() !== "" &&
              filledInput[_0x1048bd(0x272)]({
                inputName: $(this)[_0x1048bd(0x265)](_0x1048bd(0x263)),
                value: $(this)[_0x1048bd(0x1c1)](),
              }))
        : filledInput[_0x1048bd(0x1f6)](
              (_0x544928) =>
                _0x544928[_0x1048bd(0x175)] ===
                $(this)[_0x1048bd(0x265)]("name"),
            )
          ? ((filledInput = filledInput[_0x1048bd(0x1b0)](
              (_0x56ca55) =>
                _0x56ca55[_0x1048bd(0x175)] !==
                $(this)["attr"](_0x1048bd(0x263)),
            )),
            $(this)["val"]() !== "" &&
              filledInput[_0x1048bd(0x272)]({
                inputName: $(this)["attr"](_0x1048bd(0x263)),
                value: $(this)[_0x1048bd(0x1c1)](),
              }))
          : $(this)[_0x1048bd(0x1c1)]() !== "" &&
            filledInput["push"]({
              inputName: $(this)[_0x1048bd(0x265)](_0x1048bd(0x263)),
              value: $(this)[_0x1048bd(0x1c1)](),
            });
    }),
    trackLastStep &&
      (formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
      localStorage[_0x26c5f2(0x23b)]("formlyLastStep"),
      localStorage[_0x26c5f2(0x18e)]("formlyLastStep", lastStep)),
    localStorage[_0x26c5f2(0x23b)](_0x26c5f2(0x16b)),
    localStorage[_0x26c5f2(0x18e)](
      _0x26c5f2(0x16b),
      JSON[_0x26c5f2(0x261)](filledInput),
    );
}

function scrollTop() {
  const _0x186b04 = _0x191e96;
  scrollToTop &&
    $(_0x186b04(0x213))[_0x186b04(0x15c)](
      {
        scrollTop:
          $(_0x186b04(0x178))["offset"]()[_0x186b04(0x273)] - scrollTopOffset,
      },
      0x3e8,
    );
}

function updateStep() {
  const _0xf046f = _0x191e96;
  scrollTop(),
    (skip = ![]),
    $(_0xf046f(0x196))[_0xf046f(0x129)](_0xf046f(0x169));
  $(_0xf046f(0x105))[_0xf046f(0x231)](_0xf046f(0x20b)) &&
    (steps[_0xf046f(0xfd)](":input[required]")["each"](function () {
      const _0x25cdde = _0xf046f;
      $(
        $(_0x25cdde(0x196))[
          $(this)[_0x25cdde(0x20a)]("[data-form=\x22step\x22]")["index"]()
        ],
      ),
        $(this)["val"]() === "" && emptyInput++;
    }),
    emptyInput > 0x0
      ? $("input[type=\x22submit\x22]")[_0xf046f(0x1e2)](_0xf046f(0x169))
      : $("input[type=\x22submit\x22]")["removeClass"]("disabled"));
  $(_0xf046f(0x196))["removeClass"]("current"),
    $(_0xf046f(0x196))["addClass"]("disabled"),
    $($(_0xf046f(0x196))[x])[_0xf046f(0x1e2)](_0xf046f(0x257)),
    (selection = selections[_0xf046f(0x1b0)](
      (_0x4ca74f) => _0x4ca74f[_0xf046f(0x194)] === x - 0x1,
    ));
  next &&
    (x = getSafe(() => selection[0x0][_0xf046f(0x21f)])
      ? parseInt(getSafe(() => selection[0x0][_0xf046f(0x21f)]))
      : x);
  $("[data-answer]")[_0xf046f(0x1a6)](), steps[_0xf046f(0x1a6)]();
  //reinitIX === !![] && window[_0xf046f(0x1eb)][_0xf046f(0x12e)]();
  $(progressbar)["removeClass"](_0xf046f(0x257));
  for (i = 0x0; i <= x; i++) {
    countCard
      ? $(progressbar[i])[_0xf046f(0x1e2)]("current")
      : !$(steps[i])[_0xf046f(0x231)]("card") &&
        $(progressbar[i])[_0xf046f(0x1e2)](_0xf046f(0x257));
  }
  reinitIX === !![]
    ? (window[_0xf046f(0x1eb)] &&
        window["Webflow"][_0xf046f(0x215)](_0xf046f(0x22b))[_0xf046f(0x1ae)](),
      document[_0xf046f(0x16f)](new Event(_0xf046f(0x108))),
      $(steps[x])[_0xf046f(0x25c)]())
    : $(steps[x])[_0xf046f(0x1e0)](_0xf046f(0x1c5));
  $(".active-answer-card")[_0xf046f(0x129)](_0xf046f(0x1f2));
  x === 0x0 &&
    !$(steps[x])["data"]("card") &&
    ($(steps[x])[_0xf046f(0xfd)](_0xf046f(0x106))["show"](),
    $(steps[x])
      [_0xf046f(0xfd)](_0xf046f(0x106))
      [_0xf046f(0x1e2)](_0xf046f(0x1f2)));
  selection["length"] > 0x0
    ? ($(steps[x])
        ["find"](_0xf046f(0x217) + selection[0x0][_0xf046f(0x155)] + "\x22]")
        [_0xf046f(0x25c)](),
      $(steps[x])
        ["find"](
          "[data-answer=\x22" + selection[0x0][_0xf046f(0x155)] + "\x22]",
        )
        ["addClass"](_0xf046f(0x1f2)))
    : ($(steps[x])
        [_0xf046f(0xfd)](_0xf046f(0x217) + answer + "\x22]")
        ["show"](),
      $(steps[x])
        ["find"](_0xf046f(0x217) + answer + "\x22]")
        [_0xf046f(0x1e2)](_0xf046f(0x1f2)));
  if (x === 0x0)
    $("[data-form=\x22back-btn\x22]")["hide"](),
      $(_0xf046f(0x117))[_0xf046f(0x25c)](),
      $(_0xf046f(0x233))["hide"]();
  else {
    if (
      x === steps[_0xf046f(0x113)] - 0x1 ||
      $(steps[x])[_0xf046f(0xfd)](_0xf046f(0x191))[_0xf046f(0x113)] > 0x0
    ) {
      $("[data-form=\x22next-btn\x22]")[_0xf046f(0x1a6)]();
      if (
        $(steps[x])
          [_0xf046f(0xfd)](_0xf046f(0x173))
          [_0xf046f(0x231)]("submit-show")
      )
        $(steps[x])
          [_0xf046f(0xfd)]("[data-form=\x22next-btn\x22][data-submit-show]")
          [_0xf046f(0x25c)]();
      else
        $(_0xf046f(0x117))[_0xf046f(0x231)]("submit-show") &&
          $("[data-form=\x22next-btn\x22]")[_0xf046f(0x25c)]();
      $(_0xf046f(0x233))[_0xf046f(0x25c)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0xf046f(0x25c)](),
        $("[data-form=\x22back-btn\x22]")[_0xf046f(0x25c)]();
    } else
      $(_0xf046f(0x117))[_0xf046f(0x25c)](),
        $(_0xf046f(0x247))["show"](),
        $("[data-form=\x22submit-btn\x22]")[_0xf046f(0x1a6)](),
        $("[data-form-ms=\x22submit-btn\x22]")[_0xf046f(0x1a6)]();
  }
  $($(steps[x])["find"](_0xf046f(0x150))[0x0])[_0xf046f(0x130)](),
    $($(steps[x])[_0xf046f(0xfd)](_0xf046f(0x10c))[0x0])[_0xf046f(0x130)](),
    validation();
  for (idx = 0x0; idx <= x; idx++) {
    $($(_0xf046f(0x196))[idx])[_0xf046f(0x129)](_0xf046f(0x169));
  }
}

function validateEmail(_0x19cc6b, _0x74b92e, _0x1981de) {
  const _0x824ab3 = _0x191e96;
  let _0x46d750 = _0x19cc6b[_0x824ab3(0x26f)]("@")
    ? _0x19cc6b["split"]("@")[0x1][_0x824ab3(0x137)](".")[0x0]
    : [];
  dom = [];
  _0x74b92e !== undefined &&
    _0x74b92e[_0x824ab3(0x137)](",")[_0x824ab3(0x14b)](function (_0x4c724d) {
      const _0xf90239 = _0x824ab3;
      _0x4c724d[_0xf90239(0x26f)](_0x46d750) &&
        dom[_0xf90239(0x272)](_0x46d750);
    });
  dom[_0x824ab3(0x113)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
  var _0x1ba3a2 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
  !_0x1ba3a2[_0x824ab3(0x1d5)](_0x19cc6b) || !domainAllowed
    ? ((emailFilled = ![]), unfilledArr[_0x824ab3(0x272)]({ input: _0x1981de }))
    : (emailFilled = !![]);
}

function phoneValidation(_0x129567, _0x598dc5, _0x35bea5) {
  if (phoneFormat) return _0x598dc5 >= _0x35bea5 ? !![] : ![];
  else {
    if (_0x598dc5 >= _0x35bea5) return !![];
  }
}

function validation() {
  const _0x2b208f = _0x191e96;
  $(steps[x])[_0x2b208f(0x231)](_0x2b208f(0x204)) && enableBtn();
  (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (dateFilled = !![]),
    (timeFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (emailFilled = !![]),
    (passwordFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqDate = []),
    (empReqTime = []),
    (empReqSelect = []),
    (empReqTel = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x2b208f(0xfd)](
      "textarea[required]:visible",
    )["length"]),
    (textInputLength = $(steps[x])["find"](_0x2b208f(0x1fd))["length"]),
    (selectInputLength = $(steps[x])["find"]("select[required]:visible")[
      _0x2b208f(0x113)
    ]),
    (emailInputLength = $(steps[x])["find"](
      "input[type=\x22email\x22]:visible",
    )[_0x2b208f(0x113)]),
    (checkboxInputLength = $(steps[x])["find"](
      "input[type=\x22checkbox\x22]:visible",
    )["length"]);
  textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0
    ? disableBtn()
    : enableBtn();
  checkCount = $(steps[x])[_0x2b208f(0x231)](_0x2b208f(0x121))
    ? $(steps[x])["data"](_0x2b208f(0x121))
    : $(steps[x])[_0x2b208f(0xfd)](_0x2b208f(0x156))[_0x2b208f(0x113)] > 0x0
      ? $(steps[x])["find"]("[data-checkbox]")["data"]("checkbox")
      : 0x0;
  if (!logicExtra)
    $(steps[x])[_0x2b208f(0xfd)](_0x2b208f(0x188))["is"](_0x2b208f(0x238)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2b208f(0xfd)](_0x2b208f(0x146))[_0x2b208f(0x113)]
        ? $(steps[x])
            ["find"](_0x2b208f(0x146))
            ["each"](function () {
              const _0x37d987 = _0x2b208f;
              $(this)["is"](_0x37d987(0x193))
                ? $(steps[x])[_0x37d987(0xfd)](_0x37d987(0x250))[
                    _0x37d987(0x113)
                  ] < 0x1 &&
                  ((checkboxFilled = !![]),
                  resetInputErrorMessage($(this)["attr"]("name")))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x37d987(0x272)]({
                    input: $(this)[_0x37d987(0x265)](_0x37d987(0x263)),
                  }));
            })
        : $(steps[x])[_0x2b208f(0xfd)](_0x2b208f(0x186))[_0x2b208f(0x113)] >=
            checkCount
          ? $(steps[x])["find"](_0x2b208f(0x250))[_0x2b208f(0x113)] > 0x0
            ? $(steps[x])
                [_0x2b208f(0xfd)](":input[type=\x22checkbox\x22][required]")
                [_0x2b208f(0x1f5)](function () {
                  const _0x200c15 = _0x2b208f;
                  checkboxFilled = ![];
                  let _0x147644 = $(steps[x])[_0x200c15(0xfd)](
                      _0x200c15(0x250),
                    )[_0x200c15(0x113)],
                    _0x54cda2 = $(steps[x])[_0x200c15(0xfd)](_0x200c15(0x25e))[
                      _0x200c15(0x113)
                    ];
                  _0x147644 - _0x54cda2 === 0x0
                    ? ((checkboxFilled = !![]),
                      resetInputErrorMessage(
                        $(steps[x])
                          [_0x200c15(0xfd)](_0x200c15(0x146))
                          ["attr"](_0x200c15(0x263)),
                      ))
                    : ((checkboxFilled = ![]),
                      $(steps[x])
                        [_0x200c15(0xfd)](_0x200c15(0x19b))
                        [_0x200c15(0x1f5)](function () {
                          const _0xf03626 = _0x200c15;
                          unfilledArr[_0xf03626(0x272)]({
                            input: $(this)["attr"](_0xf03626(0x263)),
                          });
                        }));
                })
            : ((checkboxFilled = !![]),
              resetInputErrorMessage(
                $(steps[x])
                  ["find"](":input[type=\x22checkbox\x22]")
                  [_0x2b208f(0x265)](_0x2b208f(0x263)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2b208f(0xfd)](":input[type=\x22checkbox\x22][required]")
              [_0x2b208f(0x1f5)](function () {
                const _0x13cc0b = _0x2b208f;
                $(this)[_0x13cc0b(0x25d)](_0x13cc0b(0x193)) &&
                  unfilledArr[_0x13cc0b(0x272)]({
                    input: $(this)[_0x13cc0b(0x265)](_0x13cc0b(0x263)),
                  });
              }),
            unfilledArr[_0x2b208f(0x272)]({
              input: $(steps[x])
                [_0x2b208f(0xfd)](_0x2b208f(0x146))
                [_0x2b208f(0x265)](_0x2b208f(0x263)),
            }))),
      $(steps[x])
        [_0x2b208f(0xfd)]("input:radio[required]")
        [_0x2b208f(0x1f5)](function (_0x32ec71) {
          const _0x45ffff = _0x2b208f;
          var _0xf5905b = $(this)[_0x45ffff(0x265)]("name");
          $(_0x45ffff(0x151) + _0xf5905b + _0x45ffff(0x205))[
            _0x45ffff(0x113)
          ] == 0x0
            ? (!empReqRadio[_0x45ffff(0xfd)](
                (_0x3072f9) => _0x3072f9[_0x45ffff(0x17e)] === _0x32ec71,
              ) && empReqRadio[_0x45ffff(0x272)]({ input: _0x32ec71 }),
              unfilledArr[_0x45ffff(0x272)]({
                input: $(this)[_0x45ffff(0x265)](_0x45ffff(0x263)),
              }))
            : (empReqRadio = empReqRadio[_0x45ffff(0x1b0)](
                (_0x489365) => _0x489365[_0x45ffff(0x17e)] !== _0x32ec71,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x123))
        ["each"](function (_0x4cddbe) {
          const _0x14c2bb = _0x2b208f;
          let _0x1e883d = $(this)[_0x14c2bb(0x1c1)]()[_0x14c2bb(0x113)],
            _0x1fa08b = $(this)[_0x14c2bb(0x231)](_0x14c2bb(0x220))
              ? $(this)[_0x14c2bb(0x231)](_0x14c2bb(0x220))
              : 0x0;
          $(this)[_0x14c2bb(0x1c1)]() !== "" && _0x1e883d >= _0x1fa08b
            ? (empReqInput = empReqInput[_0x14c2bb(0x1b0)](
                (_0x43d0e3) => _0x43d0e3[_0x14c2bb(0x17e)] !== _0x4cddbe,
              ))
            : (!empReqInput[_0x14c2bb(0xfd)](
                (_0x256799) => _0x256799[_0x14c2bb(0x17e)] === _0x4cddbe,
              ) && empReqInput[_0x14c2bb(0x272)]({ input: _0x4cddbe }),
              unfilledArr[_0x14c2bb(0x272)]({
                input: $(this)[_0x14c2bb(0x265)](_0x14c2bb(0x263)),
              })),
            empReqInput[_0x14c2bb(0x113)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2b208f(0x125))
        [_0x2b208f(0x1f5)](function (_0x3578d0) {
          const _0x28a139 = _0x2b208f;
          let _0x34a226 = $(this)["val"]()[_0x28a139(0x113)],
            _0x3506ce = $(this)[_0x28a139(0x231)](_0x28a139(0x220))
              ? $(this)["data"](_0x28a139(0x220))
              : 0x0;
          $(this)["val"]() !== "" && _0x34a226 >= _0x3506ce
            ? (empReqPassword = empReqPassword[_0x28a139(0x1b0)](
                (_0x5af046) => _0x5af046[_0x28a139(0x17e)] !== _0x3578d0,
              ))
            : (!empReqPassword["find"](
                (_0x30e8c6) => _0x30e8c6[_0x28a139(0x17e)] === _0x3578d0,
              ) && empReqPassword[_0x28a139(0x272)]({ input: _0x3578d0 }),
              unfilledArr[_0x28a139(0x272)]({
                input: $(this)[_0x28a139(0x265)](_0x28a139(0x263)),
              })),
            empReqPassword["length"] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2b208f(0x16d))
        [_0x2b208f(0x1f5)](function (_0x17cbec) {
          const _0x455bd7 = _0x2b208f;
          let _0x1684aa = $(this)["val"]()[_0x455bd7(0x113)],
            _0x4f1600 = $(this)[_0x455bd7(0x231)](_0x455bd7(0x220))
              ? $(this)["data"](_0x455bd7(0x220))
              : 0x0;
          $(this)[_0x455bd7(0x1c1)]() !== "" && _0x1684aa >= _0x4f1600
            ? (empReqUrl = empReqUrl[_0x455bd7(0x1b0)](
                (_0x585510) => _0x585510[_0x455bd7(0x17e)] !== _0x17cbec,
              ))
            : (!empReqTime[_0x455bd7(0xfd)](
                (_0x43d3f8) => _0x43d3f8[_0x455bd7(0x17e)] === _0x17cbec,
              ) && empReqUrl[_0x455bd7(0x272)]({ input: _0x17cbec }),
              unfilledArr["push"]({
                input: $(this)[_0x455bd7(0x265)]("name"),
              })),
            empReqUrl[_0x455bd7(0x113)] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x1c7))
        [_0x2b208f(0x1f5)](function (_0x3eb2f4) {
          const _0x2ca7f7 = _0x2b208f;
          let _0x7e9976 = $(this)["val"]()[_0x2ca7f7(0x113)],
            _0x536ff0 = $(this)[_0x2ca7f7(0x231)](_0x2ca7f7(0x220))
              ? $(this)["data"](_0x2ca7f7(0x220))
              : 0x0;
          $(this)[_0x2ca7f7(0x1c1)]() !== "" && _0x7e9976 >= _0x536ff0
            ? (empReqTime = empReqTime[_0x2ca7f7(0x1b0)](
                (_0x193457) => _0x193457[_0x2ca7f7(0x17e)] !== _0x3eb2f4,
              ))
            : (!empReqTime[_0x2ca7f7(0xfd)](
                (_0x44b24a) => _0x44b24a["input"] === _0x3eb2f4,
              ) && empReqTime[_0x2ca7f7(0x272)]({ input: _0x3eb2f4 }),
              unfilledArr[_0x2ca7f7(0x272)]({
                input: $(this)["attr"]("name"),
              })),
            empReqTime[_0x2ca7f7(0x113)] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x15e))
        [_0x2b208f(0x1f5)](function (_0x38510) {
          const _0x192885 = _0x2b208f;
          $(this)["val"]() !== ""
            ? (empReqDate = empReqDate[_0x192885(0x1b0)](
                (_0x5b1e6c) => _0x5b1e6c[_0x192885(0x17e)] !== _0x38510,
              ))
            : (!empReqDate[_0x192885(0xfd)](
                (_0x1ad287) => _0x1ad287[_0x192885(0x17e)] === _0x38510,
              ) && empReqDate[_0x192885(0x272)]({ input: _0x38510 }),
              unfilledArr[_0x192885(0x272)]({
                input: $(this)["attr"](_0x192885(0x263)),
              })),
            empReqDate[_0x192885(0x113)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x13b))
        [_0x2b208f(0x1f5)](function (_0x2a5016) {
          const _0x4e4724 = _0x2b208f;
          if ($(this)[_0x4e4724(0x1c1)]() !== "") {
            let _0x2ed8bb = $(this)[_0x4e4724(0x1c1)]()["length"],
              _0x3f82e9 = $(this)[_0x4e4724(0x231)]("min-character")
                ? $(this)["data"]("min-character")
                : 0x0;
            if ($(this)[_0x4e4724(0x231)](_0x4e4724(0x249))) {
              var _0x1aff43 = phoneAutoFormat(
                $(this)[_0x4e4724(0x231)](_0x4e4724(0x249)),
              );
              $(this)[_0x4e4724(0x1c1)](_0x1aff43($(this)[_0x4e4724(0x1c1)]()));
            }
            phoneValidation($(this)["val"](), _0x2ed8bb, _0x3f82e9)
              ? (empReqTel = empReqTel[_0x4e4724(0x1b0)](
                  (_0xf55dde) => _0xf55dde[_0x4e4724(0x17e)] !== _0x2a5016,
                ))
              : empReqTel["push"]({ input: _0x2a5016 });
          } else
            !empReqTel[_0x4e4724(0xfd)](
              (_0x3789b0) => _0x3789b0["input"] === _0x2a5016,
            ) && empReqTel[_0x4e4724(0x272)]({ input: _0x2a5016 }),
              unfilledArr["push"]({ input: $(this)["attr"](_0x4e4724(0x263)) });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        ["find"](":input[type=\x22file\x22][required]")
        ["each"](function (_0x18507f) {
          const _0x211b14 = _0x2b208f;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0x6e4ebb) => _0x6e4ebb[_0x211b14(0x17e)] !== _0x18507f,
              ))
            : (!empReqFile[_0x211b14(0xfd)](
                (_0x412ce6) => _0x412ce6[_0x211b14(0x17e)] === _0x18507f,
              ) && empReqFile[_0x211b14(0x272)]({ input: _0x18507f }),
              unfilledArr[_0x211b14(0x272)]({
                input: $(this)[_0x211b14(0x265)](_0x211b14(0x263)),
              })),
            empReqFile["length"] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x116))
        [_0x2b208f(0x1f5)](function (_0x51132c) {
          const _0x46160b = _0x2b208f;
          let _0xea0b23 = $(this)["val"]()["length"],
            _0x1436bf = $(this)["data"](_0x46160b(0x220))
              ? $(this)[_0x46160b(0x231)]("min-character")
              : 0x0;
          $(this)["val"]() !== "" && _0xea0b23 >= _0x1436bf
            ? (empReqNum = empReqNum["filter"](
                (_0x243198) => _0x243198[_0x46160b(0x17e)] !== _0x51132c,
              ))
            : (!empReqNum[_0x46160b(0xfd)](
                (_0x5e64dd) => _0x5e64dd[_0x46160b(0x17e)] === _0x51132c,
              ) && empReqNum[_0x46160b(0x272)]({ input: _0x51132c }),
              unfilledArr["push"]({
                input: $(this)[_0x46160b(0x265)]("name"),
              })),
            empReqNum["length"] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x248))
        ["each"](function (_0x2cf6bf) {
          const _0x580423 = _0x2b208f;
          let _0xa9b081 = $(this)["val"]();
          _0xa9b081 === "" && (_0xa9b081 = null),
            _0xa9b081 != null
              ? (empReqSelect = empReqSelect[_0x580423(0x1b0)](
                  (_0x53b86f) => _0x53b86f[_0x580423(0x17e)] !== _0x2cf6bf,
                ))
              : (!empReqSelect[_0x580423(0xfd)](
                  (_0x2e427e) => _0x2e427e[_0x580423(0x17e)] === _0x2cf6bf,
                ) && empReqSelect[_0x580423(0x272)]({ input: _0x2cf6bf }),
                unfilledArr[_0x580423(0x272)]({
                  input: $(this)[_0x580423(0x265)]("name"),
                })),
            empReqSelect[_0x580423(0x113)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        ["find"]("textarea[required]")
        ["each"](function (_0x984675) {
          const _0x11e71b = _0x2b208f;
          let _0xc6f56d = $(this)[_0x11e71b(0x1c1)]()[_0x11e71b(0x113)],
            _0x165ccb = $(this)["data"](_0x11e71b(0x220))
              ? $(this)["data"](_0x11e71b(0x220))
              : 0x0;
          $(this)[_0x11e71b(0x1c1)]() !== "" && _0xc6f56d >= _0x165ccb
            ? (empReqTextarea = empReqTextarea[_0x11e71b(0x1b0)](
                (_0x41096c) => _0x41096c["input"] !== _0x984675,
              ))
            : (!empReqTextarea[_0x11e71b(0xfd)](
                (_0x261735) => _0x261735[_0x11e71b(0x17e)] === _0x984675,
              ) && empReqTextarea["push"]({ input: _0x984675 }),
              unfilledArr[_0x11e71b(0x272)]({
                input: $(this)["attr"](_0x11e71b(0x263)),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x23c))
        [_0x2b208f(0x1f5)](function () {
          const _0xf3c015 = _0x2b208f;
          $(this)[_0xf3c015(0x1c1)]() !== ""
            ? validateEmail(
                $(this)[_0xf3c015(0x1c1)](),
                $(this)[_0xf3c015(0x231)](_0xf3c015(0x1fc)),
                $(this)["attr"](_0xf3c015(0x263)),
              )
            : ((emailFilled = ![]),
              unfilledArr["push"]({
                input: $(this)[_0xf3c015(0x265)](_0xf3c015(0x263)),
              }));
        });
  else {
    if ($(steps[x])[_0x2b208f(0x231)](_0x2b208f(0x204)))
      (answer = $(steps[x])
        [_0x2b208f(0xfd)]("[data-go-to]")
        [_0x2b208f(0x231)]("go-to")),
        (selections = selections["filter"](
          (_0x3869ae) => _0x3869ae[_0x2b208f(0x194)] !== x,
        )),
        selections[_0x2b208f(0x272)]({ step: x, selected: answer }),
        (next = !![]),
        (back = ![]);
    else
      $(steps[x])
        [_0x2b208f(0xfd)](".active-answer-card")
        [_0x2b208f(0x231)]("card") &&
        ((answer = $(steps[x])
          [_0x2b208f(0xfd)](".active-answer-card")
          ["data"](_0x2b208f(0x1ca))),
        (selections = selections[_0x2b208f(0x1b0)](
          (_0x56d178) => _0x56d178[_0x2b208f(0x194)] !== x,
        )),
        selections[_0x2b208f(0x272)]({ step: x, selected: answer }),
        (next = !![]),
        (back = ![]));
    $(steps[x])
      ["find"](".active-answer-card")
      ["find"](_0x2b208f(0x188))
      ["is"](_0x2b208f(0x238)) &&
      (checkCount === "*" ||
      checkCount >
        $(steps[x])[_0x2b208f(0xfd)](":input[type=\x22checkbox\x22]")[
          _0x2b208f(0x113)
        ]
        ? $(steps[x])
            [_0x2b208f(0xfd)](_0x2b208f(0x146))
            [_0x2b208f(0x1f5)](function () {
              const _0x1c3d9b = _0x2b208f;
              $(this)["is"](":checked")
                ? $(steps[x])[_0x1c3d9b(0xfd)](":input[required]")["length"] <
                    0x1 &&
                  ((skipTo = undefined),
                  $(this)
                    ["parents"](_0x1c3d9b(0x1f8))
                    [_0x1c3d9b(0x231)](_0x1c3d9b(0xf2)) &&
                    (skipTo = $(this)
                      ["parents"](_0x1c3d9b(0x1f8))
                      [_0x1c3d9b(0x231)](_0x1c3d9b(0xf2))),
                  $(this)
                    [_0x1c3d9b(0x20a)](_0x1c3d9b(0x1ce))
                    ["attr"](_0x1c3d9b(0x198)) &&
                    ((answer = $(this)
                      [_0x1c3d9b(0x20a)](_0x1c3d9b(0x1ce))
                      [_0x1c3d9b(0x265)](_0x1c3d9b(0x198))),
                    (selections = selections[_0x1c3d9b(0x1b0)](
                      (_0x495d46) => _0x495d46[_0x1c3d9b(0x194)] !== x,
                    )),
                    selections[_0x1c3d9b(0x272)]({ step: x, selected: answer }),
                    skipTo &&
                      ((selections = selections["filter"](
                        (_0x40490d) =>
                          _0x40490d[_0x1c3d9b(0x194)] !== skipTo - 0x2,
                      )),
                      selections[_0x1c3d9b(0x272)]({
                        step: skipTo - 0x2,
                        selected: answer,
                      }),
                      (objIndex = selections["findIndex"](
                        (_0x510a90) => _0x510a90["step"] === x,
                      )),
                      (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                      (selections[objIndex][_0x1c3d9b(0x1c8)] = x))),
                  (checkboxFilled = !![]),
                  $(steps[x])["find"](_0x1c3d9b(0x25e))[_0x1c3d9b(0x113)] >=
                    $(steps[x])[_0x1c3d9b(0xfd)](_0x1c3d9b(0x250))[
                      _0x1c3d9b(0x113)
                    ] &&
                    resetInputErrorMessage(
                      $(steps[x])
                        ["find"](_0x1c3d9b(0x146))
                        ["attr"](_0x1c3d9b(0x263)),
                    ))
                : ((checkboxFilled = ![]),
                  unfilledArr[_0x1c3d9b(0x272)]({
                    input: $(this)[_0x1c3d9b(0x265)](_0x1c3d9b(0x263)),
                  }));
            })
        : $(steps[x])
              ["find"](_0x2b208f(0x201))
              [_0x2b208f(0xfd)](":input[type=\x22checkbox\x22]:checked")[
              "length"
            ] >= checkCount
          ? ($(steps[x])
              [_0x2b208f(0xfd)](_0x2b208f(0x201))
              [_0x2b208f(0xfd)](_0x2b208f(0x146))
              [_0x2b208f(0x20a)]("[data-go-to]")
              ["attr"](_0x2b208f(0x198)) &&
              ((skipTo = undefined),
              $(steps[x])
                ["find"](_0x2b208f(0x201))
                [_0x2b208f(0xfd)](_0x2b208f(0x146))
                ["parents"](_0x2b208f(0x1f8))
                [_0x2b208f(0x265)](_0x2b208f(0x26d)) &&
                (skipTo = $(steps[x])
                  [_0x2b208f(0xfd)](_0x2b208f(0x201))
                  [_0x2b208f(0xfd)](_0x2b208f(0x186))
                  [_0x2b208f(0x20a)](_0x2b208f(0x1f8))
                  ["attr"](_0x2b208f(0x26d))),
              (answer = $(steps[x])
                [_0x2b208f(0xfd)](_0x2b208f(0x201))
                ["find"](_0x2b208f(0x146))
                ["parents"](_0x2b208f(0x1ce))
                [_0x2b208f(0x265)](_0x2b208f(0x198))),
              (selections = selections["filter"](
                (_0x150012) => _0x150012[_0x2b208f(0x194)] !== x,
              )),
              selections[_0x2b208f(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x2b208f(0x1b0)](
                  (_0x38ec2e) => _0x38ec2e[_0x2b208f(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x2b208f(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x21f9c5) => _0x21f9c5[_0x2b208f(0x194)] === x,
                )),
                (selections[objIndex][_0x2b208f(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2b208f(0x1c8)] = x))),
            (checkboxFilled = !![]),
            $(steps[x])["find"](_0x2b208f(0x25e))[_0x2b208f(0x113)] >=
              $(steps[x])[_0x2b208f(0xfd)](
                ":input[type=\x22checkbox\x22][required]",
              )[_0x2b208f(0x113)] &&
              resetInputErrorMessage(
                $(steps[x])
                  [_0x2b208f(0xfd)](_0x2b208f(0x146))
                  [_0x2b208f(0x265)](_0x2b208f(0x263)),
              ))
          : ((checkboxFilled = ![]),
            $(steps[x])
              [_0x2b208f(0xfd)](_0x2b208f(0x250))
              [_0x2b208f(0x1f5)](function () {
                const _0x37d51c = _0x2b208f;
                $(this)[_0x37d51c(0x25d)](_0x37d51c(0x193)) &&
                  unfilledArr[_0x37d51c(0x272)]({
                    input: $(this)[_0x37d51c(0x265)](_0x37d51c(0x263)),
                  });
              }))),
      $(steps[x])
        ["find"](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x14f))
        [_0x2b208f(0x1f5)](function (_0x24467a) {
          const _0x35eab2 = _0x2b208f;
          var _0x5af790 = $(this)[_0x35eab2(0x265)](_0x35eab2(0x263));
          $(_0x35eab2(0x151) + _0x5af790 + _0x35eab2(0x205))[
            _0x35eab2(0x113)
          ] == 0x0
            ? (!empReqRadio["find"](
                (_0x538d62) => _0x538d62[_0x35eab2(0x17e)] === _0x24467a,
              ) && empReqRadio["push"]({ input: _0x24467a }),
              unfilledArr["push"]({
                input: $(this)[_0x35eab2(0x265)](_0x35eab2(0x263)),
              }))
            : (empReqRadio = empReqRadio[_0x35eab2(0x1b0)](
                (_0x542596) => _0x542596[_0x35eab2(0x17e)] !== _0x24467a,
              )),
            empReqRadio["length"] === 0x0
              ? (radioFilled = !![])
              : (radioFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](".active-answer-card")
        [_0x2b208f(0xfd)](":input[type=\x22text\x22][required]")
        [_0x2b208f(0x1f5)](function (_0x9c21ad) {
          const _0x40bb5a = _0x2b208f;
          let _0x2dbe90 = $(this)["val"]()[_0x40bb5a(0x113)],
            _0x18813a = $(this)[_0x40bb5a(0x231)](_0x40bb5a(0x220))
              ? $(this)[_0x40bb5a(0x231)](_0x40bb5a(0x220))
              : 0x0;
          $(this)[_0x40bb5a(0x1c1)]() !== "" && _0x2dbe90 >= _0x18813a
            ? (empReqInput = empReqInput[_0x40bb5a(0x1b0)](
                (_0x1df2c2) => _0x1df2c2["input"] !== _0x9c21ad,
              ))
            : (!empReqInput[_0x40bb5a(0xfd)](
                (_0x431edd) => _0x431edd[_0x40bb5a(0x17e)] === _0x9c21ad,
              ) && empReqInput["push"]({ input: _0x9c21ad }),
              unfilledArr["push"]({
                input: $(this)[_0x40bb5a(0x265)](_0x40bb5a(0x263)),
              })),
            empReqInput[_0x40bb5a(0x113)] === 0x0
              ? (inputFilled = !![])
              : (inputFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](".active-answer-card")
        [_0x2b208f(0xfd)](_0x2b208f(0x1fb))
        [_0x2b208f(0x1f5)](function (_0x3918ee) {
          const _0x21cf01 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x21cf01(0x20a)](_0x21cf01(0x1f8))
              ["data"](_0x21cf01(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x21cf01(0x20a)]("[data-skip-to]")
                [_0x21cf01(0x231)](_0x21cf01(0xf2))),
            $(this)
              [_0x21cf01(0x20a)](_0x21cf01(0x1ce))
              [_0x21cf01(0x265)]("data-go-to") &&
              ((answer = $(this)
                [_0x21cf01(0x20a)](_0x21cf01(0x1ce))
                [_0x21cf01(0x265)](_0x21cf01(0x198))),
              (selections = selections["filter"](
                (_0x519266) => _0x519266[_0x21cf01(0x194)] !== x,
              )),
              selections[_0x21cf01(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections["filter"](
                  (_0x558c90) => _0x558c90["step"] !== skipTo - 0x2,
                )),
                selections[_0x21cf01(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x21cf01(0x1cb)](
                  (_0x27474a) => _0x27474a[_0x21cf01(0x194)] === x,
                )),
                (selections[objIndex][_0x21cf01(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x21cf01(0x1c8)] = x)));
        }),
      $(steps[x])
        ["find"](".active-answer-card")
        ["find"](_0x2b208f(0x125))
        [_0x2b208f(0x1f5)](function (_0x1058b4) {
          const _0x55604e = _0x2b208f;
          let _0x1cb27e = $(this)[_0x55604e(0x1c1)]()[_0x55604e(0x113)],
            _0xa769cb = $(this)["data"](_0x55604e(0x220))
              ? $(this)[_0x55604e(0x231)](_0x55604e(0x220))
              : 0x0;
          $(this)["val"]() !== "" && _0x1cb27e >= _0xa769cb
            ? (empReqPassword = empReqPassword["filter"](
                (_0x3bb4ec) => _0x3bb4ec["input"] !== _0x1058b4,
              ))
            : (!empReqPassword["find"](
                (_0x49a728) => _0x49a728[_0x55604e(0x17e)] === _0x1058b4,
              ) && empReqPassword["push"]({ input: _0x1058b4 }),
              unfilledArr[_0x55604e(0x272)]({
                input: $(this)[_0x55604e(0x265)](_0x55604e(0x263)),
              })),
            empReqPassword[_0x55604e(0x113)] === 0x0
              ? (passwordFilled = !![])
              : (passwordFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x148))
        ["each"](function (_0xc47cdf) {
          const _0x2359fc = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x2359fc(0x20a)](_0x2359fc(0x1f8))
              [_0x2359fc(0x231)](_0x2359fc(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x2359fc(0x20a)]("[data-skip-to]")
                ["data"](_0x2359fc(0xf2))),
            $(this)
              [_0x2359fc(0x20a)]("[data-go-to]")
              [_0x2359fc(0x265)](_0x2359fc(0x198)) &&
              ((answer = $(this)
                [_0x2359fc(0x20a)](_0x2359fc(0x1ce))
                [_0x2359fc(0x265)](_0x2359fc(0x198))),
              (selections = selections[_0x2359fc(0x1b0)](
                (_0x1bdfde) => _0x1bdfde["step"] !== x,
              )),
              selections[_0x2359fc(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x2359fc(0x1b0)](
                  (_0x261ef8) => _0x261ef8[_0x2359fc(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x2359fc(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2359fc(0x1cb)](
                  (_0x1d9c3c) => _0x1d9c3c[_0x2359fc(0x194)] === x,
                )),
                (selections[objIndex][_0x2359fc(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](".active-answer-card")
        [_0x2b208f(0xfd)](_0x2b208f(0x16d))
        [_0x2b208f(0x1f5)](function (_0x492871) {
          const _0x55fb94 = _0x2b208f;
          let _0xedb8e8 = $(this)[_0x55fb94(0x1c1)]()["length"],
            _0x6ac956 = $(this)[_0x55fb94(0x231)](_0x55fb94(0x220))
              ? $(this)[_0x55fb94(0x231)](_0x55fb94(0x220))
              : 0x0;
          $(this)["val"]() !== "" && _0xedb8e8 >= _0x6ac956
            ? (empReqUrl = empReqUrl["filter"](
                (_0x3f9500) => _0x3f9500[_0x55fb94(0x17e)] !== _0x492871,
              ))
            : (!empReqUrl[_0x55fb94(0xfd)](
                (_0x2b1bab) => _0x2b1bab[_0x55fb94(0x17e)] === _0x492871,
              ) && empReqUrl[_0x55fb94(0x272)]({ input: _0x492871 }),
              unfilledArr[_0x55fb94(0x272)]({
                input: $(this)[_0x55fb94(0x265)](_0x55fb94(0x263)),
              })),
            empReqUrl[_0x55fb94(0x113)] === 0x0 && validateURL($(this)["val"]())
              ? (urlFilled = !![])
              : (urlFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        ["find"](_0x2b208f(0x1d2))
        [_0x2b208f(0x1f5)](function (_0x2b8dfe) {
          const _0x1b9da7 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              ["parents"](_0x1b9da7(0x1f8))
              [_0x1b9da7(0x231)](_0x1b9da7(0xf2)) !== "" &&
              (skipTo = $(this)
                ["parents"]("[data-skip-to]")
                [_0x1b9da7(0x231)](_0x1b9da7(0xf2))),
            $(this)
              [_0x1b9da7(0x20a)]("[data-go-to]")
              [_0x1b9da7(0x265)](_0x1b9da7(0x198)) &&
              ((answer = $(this)
                [_0x1b9da7(0x20a)]("[data-go-to]")
                [_0x1b9da7(0x265)](_0x1b9da7(0x198))),
              (selections = selections[_0x1b9da7(0x1b0)](
                (_0x53f7c9) => _0x53f7c9["step"] !== x,
              )),
              selections[_0x1b9da7(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections["filter"](
                  (_0x5c646e) => _0x5c646e[_0x1b9da7(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x1b9da7(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x1b9da7(0x1cb)](
                  (_0x5ed859) => _0x5ed859[_0x1b9da7(0x194)] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x1b9da7(0x1c8)] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x15e))
        [_0x2b208f(0x1f5)](function (_0x4c9451) {
          const _0x44702b = _0x2b208f;
          $(this)[_0x44702b(0x1c1)]() !== ""
            ? (empReqDate = empReqDate[_0x44702b(0x1b0)](
                (_0x1a4e07) => _0x1a4e07[_0x44702b(0x17e)] !== _0x4c9451,
              ))
            : (!empReqDate[_0x44702b(0xfd)](
                (_0x595098) => _0x595098[_0x44702b(0x17e)] === _0x4c9451,
              ) && empReqDate[_0x44702b(0x272)]({ input: _0x4c9451 }),
              unfilledArr[_0x44702b(0x272)]({
                input: $(this)["attr"]("name"),
              })),
            empReqDate[_0x44702b(0x113)] === 0x0
              ? (dateFilled = !![])
              : (dateFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](":input[type=\x22date\x22]")
        [_0x2b208f(0x1f5)](function (_0x548599) {
          const _0x371078 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x371078(0x20a)](_0x371078(0x1f8))
              ["data"](_0x371078(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x371078(0x20a)](_0x371078(0x1f8))
                [_0x371078(0x231)](_0x371078(0xf2))),
            $(this)
              [_0x371078(0x20a)]("[data-go-to]")
              [_0x371078(0x265)](_0x371078(0x198)) &&
              ((answer = $(this)
                [_0x371078(0x20a)](_0x371078(0x1ce))
                [_0x371078(0x265)](_0x371078(0x198))),
              (selections = selections[_0x371078(0x1b0)](
                (_0x1bc723) => _0x1bc723[_0x371078(0x194)] !== x,
              )),
              selections[_0x371078(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x371078(0x1b0)](
                  (_0x52696a) => _0x52696a[_0x371078(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x371078(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x371078(0x1cb)](
                  (_0x2dba76) => _0x2dba76["step"] === x,
                )),
                (selections[objIndex][_0x371078(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x371078(0x1c8)] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](".active-answer-card")
        [_0x2b208f(0xfd)](_0x2b208f(0x1c7))
        [_0x2b208f(0x1f5)](function (_0x4b615d) {
          const _0x3f0e11 = _0x2b208f;
          $(this)[_0x3f0e11(0x1c1)]() !== ""
            ? (empReqTime = empReqTime[_0x3f0e11(0x1b0)](
                (_0x4a3d5b) => _0x4a3d5b[_0x3f0e11(0x17e)] !== _0x4b615d,
              ))
            : (!empReqTime[_0x3f0e11(0xfd)](
                (_0x251562) => _0x251562[_0x3f0e11(0x17e)] === _0x4b615d,
              ) && empReqTime[_0x3f0e11(0x272)]({ input: _0x4b615d }),
              unfilledArr[_0x3f0e11(0x272)]({
                input: $(this)[_0x3f0e11(0x265)](_0x3f0e11(0x263)),
              })),
            empReqTime["length"] === 0x0
              ? (timeFilled = !![])
              : (timeFilled = ![]);
        }),
      $(steps[x])
        ["find"](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x1e9))
        [_0x2b208f(0x1f5)](function (_0x2abfed) {
          const _0x197708 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x197708(0x20a)](_0x197708(0x1f8))
              [_0x197708(0x231)](_0x197708(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x197708(0x20a)]("[data-skip-to]")
                [_0x197708(0x231)](_0x197708(0xf2))),
            $(this)
              [_0x197708(0x20a)]("[data-go-to]")
              [_0x197708(0x265)](_0x197708(0x198)) &&
              ((answer = $(this)
                [_0x197708(0x20a)]("[data-go-to]")
                [_0x197708(0x265)](_0x197708(0x198))),
              (selections = selections[_0x197708(0x1b0)](
                (_0x12fbf5) => _0x12fbf5[_0x197708(0x194)] !== x,
              )),
              selections[_0x197708(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x197708(0x1b0)](
                  (_0x378167) => _0x378167[_0x197708(0x194)] !== skipTo - 0x2,
                )),
                selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x30ab84) => _0x30ab84["step"] === x,
                )),
                (selections[objIndex][_0x197708(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x197708(0x1c8)] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x116))
        ["each"](function (_0x7fefb4) {
          const _0x42f762 = _0x2b208f;
          let _0x20b48e = $(this)[_0x42f762(0x1c1)]()[_0x42f762(0x113)],
            _0x39ae48 = $(this)[_0x42f762(0x231)](_0x42f762(0x220))
              ? $(this)[_0x42f762(0x231)](_0x42f762(0x220))
              : 0x0;
          $(this)[_0x42f762(0x1c1)]() !== "" && _0x20b48e >= _0x39ae48
            ? (empReqNum = empReqNum["filter"](
                (_0x317057) => _0x317057["input"] !== _0x7fefb4,
              ))
            : (!empReqNum[_0x42f762(0xfd)](
                (_0x3875a5) => _0x3875a5[_0x42f762(0x17e)] === _0x7fefb4,
              ) && empReqNum[_0x42f762(0x272)]({ input: _0x7fefb4 }),
              unfilledArr[_0x42f762(0x272)]({
                input: $(this)[_0x42f762(0x265)](_0x42f762(0x263)),
              })),
            empReqNum[_0x42f762(0x113)] === 0x0
              ? (numFilled = !![])
              : (numFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0xf0))
        [_0x2b208f(0x1f5)](function (_0xb6f0dc) {
          const _0x544b99 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x544b99(0x20a)](_0x544b99(0x1f8))
              [_0x544b99(0x231)](_0x544b99(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x544b99(0x20a)](_0x544b99(0x1f8))
                [_0x544b99(0x231)](_0x544b99(0xf2))),
            $(this)["parents"]("[data-go-to]")["attr"](_0x544b99(0x198)) &&
              ((answer = $(this)
                ["parents"](_0x544b99(0x1ce))
                [_0x544b99(0x265)](_0x544b99(0x198))),
              (selections = selections[_0x544b99(0x1b0)](
                (_0x582f52) => _0x582f52[_0x544b99(0x194)] !== x,
              )),
              selections[_0x544b99(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x544b99(0x1b0)](
                  (_0x3c7539) => _0x3c7539[_0x544b99(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x544b99(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x544b99(0x1cb)](
                  (_0x4baba0) => _0x4baba0[_0x544b99(0x194)] === x,
                )),
                (selections[objIndex][_0x544b99(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x13b))
        ["each"](function (_0x142e00) {
          const _0x5e00cd = _0x2b208f;
          if ($(this)[_0x5e00cd(0x1c1)]() !== "") {
            let _0x2cceef = $(this)[_0x5e00cd(0x1c1)]()[_0x5e00cd(0x113)],
              _0x41fb65 = $(this)[_0x5e00cd(0x231)]("min-character")
                ? $(this)["data"]("min-character")
                : 0x0;
            if ($(this)["data"]("phone-autoformat")) {
              var _0xe6e50f = phoneAutoFormat(
                $(this)["data"]("phone-autoformat"),
              );
              $(this)[_0x5e00cd(0x1c1)](_0xe6e50f($(this)[_0x5e00cd(0x1c1)]()));
            }
            phoneValidation($(this)["val"](), _0x2cceef, _0x41fb65)
              ? (empReqTel = empReqTel[_0x5e00cd(0x1b0)](
                  (_0x5f562b) => _0x5f562b[_0x5e00cd(0x17e)] !== _0x142e00,
                ))
              : empReqTel["push"]({ input: _0x142e00 });
          } else
            !empReqTel[_0x5e00cd(0xfd)](
              (_0x57b807) => _0x57b807[_0x5e00cd(0x17e)] === _0x142e00,
            ) && empReqTel[_0x5e00cd(0x272)]({ input: _0x142e00 }),
              unfilledArr[_0x5e00cd(0x272)]({
                input: $(this)["attr"](_0x5e00cd(0x263)),
              });
          empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x10d))
        [_0x2b208f(0x1f5)](function (_0x823b3a) {
          const _0x2cfa3a = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x2cfa3a(0x20a)](_0x2cfa3a(0x1f8))
              [_0x2cfa3a(0x231)](_0x2cfa3a(0xf2)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x2cfa3a(0x1f8))
                [_0x2cfa3a(0x231)](_0x2cfa3a(0xf2))),
            $(this)
              [_0x2cfa3a(0x20a)]("[data-go-to]")
              [_0x2cfa3a(0x265)]("data-go-to") &&
              ((answer = $(this)
                [_0x2cfa3a(0x20a)](_0x2cfa3a(0x1ce))
                ["attr"]("data-go-to")),
              (selections = selections["filter"](
                (_0x34495e) => _0x34495e[_0x2cfa3a(0x194)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x2cfa3a(0x1b0)](
                  (_0x314110) => _0x314110[_0x2cfa3a(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x2cfa3a(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x2cfa3a(0x1cb)](
                  (_0x39d1ff) => _0x39d1ff[_0x2cfa3a(0x194)] === x,
                )),
                (selections[objIndex][_0x2cfa3a(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x2cfa3a(0x1c8)] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x23a))
        [_0x2b208f(0x1f5)](function (_0x17421a) {
          const _0x8022cd = _0x2b208f;
          $(this)["val"]() !== ""
            ? (empReqFile = empReqFile["filter"](
                (_0xbf29bd) => _0xbf29bd[_0x8022cd(0x17e)] !== _0x17421a,
              ))
            : (!empReqFile["find"](
                (_0x33d137) => _0x33d137[_0x8022cd(0x17e)] === _0x17421a,
              ) && empReqFile[_0x8022cd(0x272)]({ input: _0x17421a }),
              unfilledArr["push"]({
                input: $(this)["attr"](_0x8022cd(0x263)),
              })),
            empReqFile[_0x8022cd(0x113)] === 0x0
              ? (fileFilled = !![])
              : (fileFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        ["find"](":input[type=\x22file\x22]")
        [_0x2b208f(0x1f5)](function (_0x57ec32) {
          const _0x12e369 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x12e369(0x20a)](_0x12e369(0x1f8))
              [_0x12e369(0x231)](_0x12e369(0xf2)) !== "" &&
              (skipTo = $(this)
                ["parents"](_0x12e369(0x1f8))
                [_0x12e369(0x231)](_0x12e369(0xf2))),
            $(this)
              [_0x12e369(0x20a)]("[data-go-to]")
              [_0x12e369(0x265)](_0x12e369(0x198)) &&
              ((answer = $(this)
                ["parents"](_0x12e369(0x1ce))
                [_0x12e369(0x265)]("data-go-to")),
              (selections = selections[_0x12e369(0x1b0)](
                (_0x3151e3) => _0x3151e3[_0x12e369(0x194)] !== x,
              )),
              selections["push"]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x12e369(0x1b0)](
                  (_0x532be1) => _0x532be1[_0x12e369(0x194)] !== skipTo - 0x2,
                )),
                selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections[_0x12e369(0x1cb)](
                  (_0x18d66b) => _0x18d66b[_0x12e369(0x194)] === x,
                )),
                (selections[objIndex][_0x12e369(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex]["backTo"] = x)));
        }),
      $(steps[x])
        ["find"](_0x2b208f(0x201))
        ["find"](_0x2b208f(0x248))
        ["each"](function (_0x1a0560) {
          const _0x36dd01 = _0x2b208f;
          $(this)[_0x36dd01(0x1c1)]() !== null &&
          $(this)[_0x36dd01(0x1c1)]() !== ""
            ? (empReqSelect = empReqSelect[_0x36dd01(0x1b0)](
                (_0x52f3f6) => _0x52f3f6["input"] !== _0x1a0560,
              ))
            : (!empReqSelect[_0x36dd01(0xfd)](
                (_0x50a16f) => _0x50a16f["input"] === _0x1a0560,
              ) && empReqSelect[_0x36dd01(0x272)]({ input: _0x1a0560 }),
              unfilledArr[_0x36dd01(0x272)]({
                input: $(this)[_0x36dd01(0x265)](_0x36dd01(0x263)),
              })),
            empReqSelect[_0x36dd01(0x113)] === 0x0
              ? (selectFilled = !![])
              : (selectFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x1d9))
        [_0x2b208f(0x1f5)](function (_0x527437) {
          const _0xe65b3f = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0xe65b3f(0x20a)](_0xe65b3f(0x1f8))
              [_0xe65b3f(0x231)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0xe65b3f(0x20a)]("[data-skip-to]")
                [_0xe65b3f(0x231)](_0xe65b3f(0xf2))),
            $(this)
              [_0xe65b3f(0x20a)](_0xe65b3f(0x1ce))
              [_0xe65b3f(0x265)](_0xe65b3f(0x198)) &&
              ((answer = $(this)
                [_0xe65b3f(0x20a)](_0xe65b3f(0x1ce))
                [_0xe65b3f(0x265)](_0xe65b3f(0x198))),
              (selections = selections[_0xe65b3f(0x1b0)](
                (_0x465803) => _0x465803["step"] !== x,
              )),
              selections[_0xe65b3f(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0xe65b3f(0x1b0)](
                  (_0x10613d) => _0x10613d[_0xe65b3f(0x194)] !== skipTo - 0x2,
                )),
                selections["push"]({ step: skipTo - 0x2, selected: answer }),
                (objIndex = selections["findIndex"](
                  (_0x47063e) => _0x47063e["step"] === x,
                )),
                (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                (selections[objIndex][_0xe65b3f(0x1c8)] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x138))
        ["each"](function (_0x3f60e9) {
          const _0x2cfbc7 = _0x2b208f;
          let _0x4848d1 = $(this)[_0x2cfbc7(0x1c1)]()[_0x2cfbc7(0x113)],
            _0x1fbb2e = $(this)["data"](_0x2cfbc7(0x220))
              ? $(this)[_0x2cfbc7(0x231)](_0x2cfbc7(0x220))
              : 0x0;
          $(this)[_0x2cfbc7(0x1c1)]() !== "" && _0x4848d1 >= _0x1fbb2e
            ? (empReqTextarea = empReqTextarea[_0x2cfbc7(0x1b0)](
                (_0x3e5ffe) => _0x3e5ffe[_0x2cfbc7(0x17e)] !== _0x3f60e9,
              ))
            : (!empReqTextarea[_0x2cfbc7(0xfd)](
                (_0x5d536c) => _0x5d536c["input"] === _0x3f60e9,
              ) && empReqTextarea[_0x2cfbc7(0x272)]({ input: _0x3f60e9 }),
              unfilledArr[_0x2cfbc7(0x272)]({
                input: $(this)[_0x2cfbc7(0x265)]("name"),
              })),
            empReqTextarea["length"] === 0x0
              ? (textareaFilled = !![])
              : (textareaFilled = ![]);
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x23d))
        [_0x2b208f(0x1f5)](function (_0x3c8c29) {
          const _0x12f7f2 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x12f7f2(0x20a)](_0x12f7f2(0x1f8))
              [_0x12f7f2(0x231)](_0x12f7f2(0xf2)) !== "" &&
              (skipTo = $(this)
                [_0x12f7f2(0x20a)](_0x12f7f2(0x1f8))
                ["data"](_0x12f7f2(0xf2))),
            $(this)
              [_0x12f7f2(0x20a)](_0x12f7f2(0x1ce))
              [_0x12f7f2(0x265)]("data-go-to") &&
              ((answer = $(this)
                [_0x12f7f2(0x20a)]("[data-go-to]")
                [_0x12f7f2(0x265)](_0x12f7f2(0x198))),
              (selections = selections[_0x12f7f2(0x1b0)](
                (_0x4f8ce0) => _0x4f8ce0[_0x12f7f2(0x194)] !== x,
              )),
              selections[_0x12f7f2(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x12f7f2(0x1b0)](
                  (_0x1d8629) => _0x1d8629[_0x12f7f2(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x12f7f2(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections[_0x12f7f2(0x1cb)](
                  (_0x56fe7b) => _0x56fe7b[_0x12f7f2(0x194)] === x,
                )),
                (selections[objIndex][_0x12f7f2(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x12f7f2(0x1c8)] = x)));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](":input[type=\x22email\x22][required]")
        [_0x2b208f(0x1f5)](function (_0x11d0ec) {
          const _0x4f3913 = _0x2b208f;
          $(this)[_0x4f3913(0x1c1)]() !== ""
            ? validateEmail(
                $(this)[_0x4f3913(0x1c1)](),
                $(this)[_0x4f3913(0x231)](_0x4f3913(0x1fc)),
                $(this)[_0x4f3913(0x265)](_0x4f3913(0x263)),
              )
            : ((emailFilled = ![]),
              unfilledArr[_0x4f3913(0x272)]({
                input: $(this)[_0x4f3913(0x265)]("name"),
              }));
        }),
      $(steps[x])
        [_0x2b208f(0xfd)](_0x2b208f(0x201))
        [_0x2b208f(0xfd)](_0x2b208f(0x24f))
        [_0x2b208f(0x1f5)](function (_0x59d02f) {
          const _0x5f52d3 = _0x2b208f;
          (skipTo = undefined),
            $(this)
              [_0x5f52d3(0x20a)](_0x5f52d3(0x1f8))
              [_0x5f52d3(0x231)]("skip-to") !== "" &&
              (skipTo = $(this)
                [_0x5f52d3(0x20a)]("[data-skip-to]")
                [_0x5f52d3(0x231)](_0x5f52d3(0xf2))),
            $(this)
              [_0x5f52d3(0x20a)](_0x5f52d3(0x1ce))
              [_0x5f52d3(0x265)](_0x5f52d3(0x198)) &&
              ((answer = $(this)
                [_0x5f52d3(0x20a)](_0x5f52d3(0x1ce))
                [_0x5f52d3(0x265)](_0x5f52d3(0x198))),
              (selections = selections[_0x5f52d3(0x1b0)](
                (_0x2d966b) => _0x2d966b["step"] !== x,
              )),
              console["log"]("selections\x20email", selections, x),
              selections[_0x5f52d3(0x272)]({ step: x, selected: answer }),
              skipTo &&
                ((selections = selections[_0x5f52d3(0x1b0)](
                  (_0x5cfd03) => _0x5cfd03[_0x5f52d3(0x194)] !== skipTo - 0x2,
                )),
                selections[_0x5f52d3(0x272)]({
                  step: skipTo - 0x2,
                  selected: answer,
                }),
                (objIndex = selections["findIndex"](
                  (_0x58dfdb) => _0x58dfdb[_0x5f52d3(0x194)] === x,
                )),
                (selections[objIndex][_0x5f52d3(0x21f)] =
                  parseInt(skipTo) - 0x1),
                (selections[objIndex][_0x5f52d3(0x1c8)] = x)));
        });
  }
  $(steps[x])[_0x2b208f(0xfd)](_0x2b208f(0x256))["is"](":checked") &&
    ((selArr = []),
    $(steps)
      ["find"]("[data-selected]:checked")
      [_0x2b208f(0x1f5)](function (_0x46d8e4, _0xf93ac) {
        const _0x3fc3da = _0x2b208f;
        selArr["push"]({ selected: $(this)[_0x3fc3da(0x231)]("selected") });
      }),
    (selString = []),
    selArr[_0x2b208f(0x14b)]((_0x49e1de) =>
      selString["push"](_0x49e1de[_0x2b208f(0x155)]),
    ),
    $(steps[x])
      [_0x2b208f(0xfd)](".active-answer-card")
      [_0x2b208f(0xfd)](":input[type=\x27radio\x27]:checked")
      [_0x2b208f(0x1f5)](function () {
        const _0x243017 = _0x2b208f;
        skipTo = undefined;
        if (
          $(this)
            [_0x243017(0x20a)](_0x243017(0x1f8))
            [_0x243017(0x231)]("skip-to")
        )
          skipTo = $(this)
            ["parents"](_0x243017(0x1f8))
            [_0x243017(0x231)](_0x243017(0xf2));
        else
          $(this)[_0x243017(0x231)](_0x243017(0xf2)) &&
            (skipTo = $(this)["data"]("skip-to"));
        selections = selections[_0x243017(0x1b0)](
          (_0x1951e0) => _0x1951e0[_0x243017(0x194)] !== x,
        );
        if ($(this)[_0x243017(0x231)](_0x243017(0x1ca)))
          (answer = $(this)[_0x243017(0x265)](_0x243017(0x198))),
            selections[_0x243017(0x272)]({ step: x, selected: answer }),
            skipTo &&
              ((selections = selections[_0x243017(0x1b0)](
                (_0x4b33ac) => _0x4b33ac["step"] !== skipTo - 0x2,
              )),
              selections[_0x243017(0x272)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x243017(0x1cb)](
                (_0x1cbc06) => _0x1cbc06[_0x243017(0x194)] === x,
              )),
              (selections[objIndex][_0x243017(0x21f)] = parseInt(skipTo) - 0x1),
              (selections[objIndex][_0x243017(0x1c8)] = x));
        else
          $(this)
            [_0x243017(0x20a)](_0x243017(0x1ce))
            [_0x243017(0x231)](_0x243017(0x1ca)) &&
            ((answer = $(this)
              [_0x243017(0x20a)]("[data-go-to]")
              ["data"](_0x243017(0x1ca))),
            selections[_0x243017(0x272)]({ step: x, selected: answer }),
            skipTo &&
              ((selections = selections["filter"](
                (_0x584a47) => _0x584a47["step"] !== skipTo - 0x2,
              )),
              selections[_0x243017(0x272)]({
                step: skipTo - 0x2,
                selected: answer,
              }),
              (objIndex = selections[_0x243017(0x1cb)](
                (_0x202f22) => _0x202f22["step"] === x,
              )),
              (selections[objIndex][_0x243017(0x21f)] = parseInt(skipTo) - 0x1),
              (selections[objIndex]["backTo"] = x)));
      }),
    logicExtra
      ? ($(steps[x])
          [_0x2b208f(0xfd)](_0x2b208f(0x201))
          [_0x2b208f(0xfd)](_0x2b208f(0x270))
          ["data"](_0x2b208f(0x242)) === !![] ||
          $(steps[x])
            [_0x2b208f(0xfd)]("[data-answer][data-radio-skip]:visible")
            ["data"](_0x2b208f(0x242)) === !![]) &&
        skip &&
        selections["filter"]((_0x18ad13) => _0x18ad13[_0x2b208f(0x194)] === x)[
          _0x2b208f(0x113)
        ] > 0x0 &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(
          function () {
            (next = !![]), (back = ![]), nextStep(), selectionQuiz();
          },
          $(steps[x])
            [_0x2b208f(0xfd)](_0x2b208f(0x153))
            [_0x2b208f(0x231)](_0x2b208f(0xf1)),
        )
      : $(steps[x])
          [_0x2b208f(0xfd)]("[data-radio-skip]:visible")
          ["data"](_0x2b208f(0x242)) === !![] &&
        skip &&
        textareaLength === 0x0 &&
        textInputLength === 0x0 &&
        emailInputLength === 0x0 &&
        checkboxInputLength === 0x0 &&
        setTimeout(function () {
          (next = !![]), (back = ![]), nextStep(), selectionQuiz();
        }, $(steps[x])[_0x2b208f(0xfd)]("[data-radio-delay]")[_0x2b208f(0x231)]("radio-delay"))),
    inputFilled &&
    fileFilled &&
    numFilled &&
    checkboxFilled &&
    telFilled &&
    radioFilled &&
    emailFilled &&
    domainAllowed &&
    selectFilled &&
    textareaFilled &&
    passwordFilled &&
    urlFilled
      ? enableBtn()
      : disableBtn(),
    andLogic(),
    cloneRemove(),
    cloneRemoveInput();
}

function displayErrorMessage() {
  const _0x20659b = _0x191e96;
  $(_0x20659b(0x164))[_0x20659b(0x1a6)](),
    unfilledArr[_0x20659b(0x113)] > 0x0 &&
      unfilledArr["forEach"](function (_0x5b3da0) {
        const _0x2d8ec7 = _0x20659b;
        $(_0x2d8ec7(0x1c3) + _0x5b3da0["input"] + "\x22]")
          ["siblings"](_0x2d8ec7(0x164))
          [_0x2d8ec7(0x1e0)](),
          $(_0x2d8ec7(0x1c3) + _0x5b3da0[_0x2d8ec7(0x17e)] + "\x22]")
            ["parents"]()
            [_0x2d8ec7(0x1a7)](_0x2d8ec7(0x164))
            [_0x2d8ec7(0x1e0)](),
          $(_0x2d8ec7(0x1b2) + _0x5b3da0[_0x2d8ec7(0x17e)] + "\x22]")
            [_0x2d8ec7(0x260)](_0x2d8ec7(0x164))
            ["fadeIn"](),
          $(_0x2d8ec7(0x22f) + _0x5b3da0[_0x2d8ec7(0x17e)] + "\x22]")
            [_0x2d8ec7(0x260)]("[data-text=\x22error-message\x22]")
            [_0x2d8ec7(0x1e0)]();
      });
}

function resetInputErrorMessage(_0x1365cd) {
  const _0x136ada = _0x191e96;
  $("input[name=\x22" + _0x1365cd + "\x22]")
    [_0x136ada(0x260)](_0x136ada(0x164))
    ["hide"](),
    $("input[name=\x22" + _0x1365cd + "\x22]")
      [_0x136ada(0x20a)]()
      ["children"](_0x136ada(0x164))
      ["hide"](),
    $(_0x136ada(0x1b2) + _0x1365cd + "\x22]")
      [_0x136ada(0x260)](_0x136ada(0x164))
      [_0x136ada(0x1a6)](),
    $("select[name=\x22" + _0x1365cd + "\x22]")
      [_0x136ada(0x260)]("[data-text=\x22error-message\x22]")
      [_0x136ada(0x1a6)]();
}

function increaseCurstep() {
  const _0x368a33 = _0x191e96;
  countCard
    ? ((curStep = curStep + 0x1),
      $(_0x368a33(0x1ad))["text"](steps[_0x368a33(0x113)]))
    : $(steps[x])[_0x368a33(0x231)](_0x368a33(0x204))
      ? (curStep = curStep + 0x0)
      : (curStep = curStep + 0x1),
    $(_0x368a33(0x154))[_0x368a33(0x264)](curStep);
}

function decreaseCurstep() {
  const _0x1d7971 = _0x191e96;
  countCard
    ? ((curStep = curStep - 0x1),
      $(_0x1d7971(0x1ad))[_0x1d7971(0x264)](steps[_0x1d7971(0x113)]))
    : $(steps[x])[_0x1d7971(0x231)](_0x1d7971(0x204))
      ? (curStep = curStep - 0x0)
      : (curStep = curStep - 0x1),
    $(_0x1d7971(0x154))[_0x1d7971(0x264)](curStep);
}
$(_0x191e96(0x233))["on"](_0x191e96(0x223), function (_0x57a771) {
  const _0x469c52 = _0x191e96;
  $(this)["data"](_0x469c52(0x254)) &&
    (redirectTo = $(this)[_0x469c52(0x231)](_0x469c52(0x254))),
    !$(this)["data"](_0x469c52(0x1f9)) &&
      (newTab = $(this)[_0x469c52(0x231)](_0x469c52(0x1f9))),
    (successCard = $(this)[_0x469c52(0x231)](_0x469c52(0x142))),
    _0x57a771[_0x469c52(0x243)](),
    _0x57a771[_0x469c52(0x147)](),
    logicExtra &&
      ($(this)["prop"](_0x469c52(0x21e), !![]),
      $(steps)["find"](_0x469c52(0x188))[_0x469c52(0x182)]("required", ![])),
    localStorage["removeItem"](_0x469c52(0x16b)),
    fill
      ? ($(this)["data"](_0x469c52(0x258))
          ? (console[_0x469c52(0x1ed)](
              $(this)[_0x469c52(0x231)](_0x469c52(0x258)),
            ),
            $(this)[_0x469c52(0x264)]($(this)["data"](_0x469c52(0x258))))
          : $(this)
              [_0x469c52(0x1c1)]("Please\x20wait...")
              ["text"](_0x469c52(0x181)),
        $("[data-form=\x22multistep\x22]")[_0x469c52(0x269)](),
        $(_0x469c52(0x266))[_0x469c52(0x113)] > 0x0 &&
          grecaptcha[_0x469c52(0x107)]()["length"] === 0x0 &&
          (form[_0x469c52(0xfd)](_0x469c52(0x233))[_0x469c52(0x264)](
            oldSubmitText,
          ),
          form["find"](_0x469c52(0x233))[_0x469c52(0x1c1)](oldSubmitText)),
        customError && $(_0x469c52(0x164))["hide"]())
      : customError && displayErrorMessage();
});

function nextStep() {
  const _0x1a9bdb = _0x191e96;
  customError
    ? ($("[data-text=\x22error-message\x22]")[_0x1a9bdb(0x1a6)](),
      fill
        ? (x++,
          increaseCurstep(),
          (progress = x),
          x <= steps[_0x1a9bdb(0x113)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()))
        : displayErrorMessage())
    : (x++,
      increaseCurstep(),
      x > progress && (progress = x),
      x <= steps[_0x1a9bdb(0x113)] - 0x1 &&
        (updateStep(), memory && saveFilledInput())),
    andLogic();
}

function backStep() {
  const _0x58f425 = _0x191e96;
  customError && $(_0x58f425(0x164))[_0x58f425(0x1a6)](),
    decreaseCurstep(),
    x > 0x0 &&
      ($(progressbar[x])[_0x58f425(0x129)](_0x58f425(0x257)),
      selections[_0x58f425(0x1b0)]((_0x513930) => _0x513930["skipTo"] === x)[
        _0x58f425(0x113)
      ] > 0x0
        ? (x = parseInt(
            getSafe(
              () =>
                selections[_0x58f425(0x1b0)](
                  (_0x3b0e17) => _0x3b0e17[_0x58f425(0x21f)] === x,
                )[0x0]["backTo"],
            ),
          ))
        : x--,
      updateStep()),
    ($(steps[x])
      ["find"](_0x58f425(0x270))
      [_0x58f425(0x231)](_0x58f425(0x242)) === !![] ||
      $(steps[x])
        [_0x58f425(0xfd)](_0x58f425(0x201))
        [_0x58f425(0xfd)](_0x58f425(0x270))
        [_0x58f425(0x231)](_0x58f425(0x242)) === !![] ||
      $(steps[x])
        [_0x58f425(0xfd)](_0x58f425(0x1b3))
        [_0x58f425(0x231)](_0x58f425(0x242)) === !![]) &&
      ((all_data = all_data["filter"](
        (_0x2dbc6f) =>
          _0x2dbc6f[_0x58f425(0x24c)] !==
          $(steps[x])
            ["find"]("input[type=\x22radio\x22]:checked")
            [_0x58f425(0x265)](_0x58f425(0x263)),
      )),
      $(
        _0x58f425(0x25f) +
          $(steps[x])
            [_0x58f425(0xfd)](_0x58f425(0x11b))
            ["attr"](_0x58f425(0x263)) +
          "\x22]",
      )[_0x58f425(0x1a6)](),
      $(steps[x])
        [_0x58f425(0xfd)](_0x58f425(0x14c))
        [_0x58f425(0x182)]("checked", ![]),
      $(steps[x])
        [_0x58f425(0xfd)](_0x58f425(0x23e))
        ["removeClass"](_0x58f425(0xfc)),
      validation());
}
weightedSelectionRange &&
  $(_0x191e96(0x195))["each"](function () {
    const _0x23caa9 = _0x191e96;
    $(this)[_0x23caa9(0x14a)](
      _0x23caa9(0x24e) + $(this)["data"](_0x23caa9(0x1dd)) + _0x23caa9(0x26b),
    );
  });

function selectionQuiz() {
  const _0x3b4027 = _0x191e96;
  if ($(this)[_0x3b4027(0xfd)](_0x3b4027(0x1e6))) {
    $(_0x3b4027(0x195))[_0x3b4027(0x1a6)](),
      $(_0x3b4027(0x200))[_0x3b4027(0x1a6)]();
    if (weightedSelection) {
      (selTotal = 0x0),
        selArr[_0x3b4027(0x14b)](function (_0x158798) {
          const _0x218983 = _0x3b4027;
          selTotal = selTotal + _0x158798[_0x218983(0x155)];
        }),
        $(_0x3b4027(0x16c))[_0x3b4027(0x264)](selTotal);
      if ($(_0x3b4027(0x152) + selTotal + "\x22]")[_0x3b4027(0x113)] > 0x0)
        $(_0x3b4027(0x152) + selTotal + "\x22]")[_0x3b4027(0x1e0)]();
      else
        $(_0x3b4027(0x149) + selTotal + ")")
          ? $(_0x3b4027(0x149) + selTotal + ")")
              [_0x3b4027(0x12b)](_0x3b4027(0x195))
              ["eq"](0x0)
              [_0x3b4027(0x25c)]()
          : $(_0x3b4027(0x11f))[_0x3b4027(0x1e0)]();
    } else {
      let _0x54a051 = -0x1;
      $(_0x3b4027(0x195))[_0x3b4027(0x1f5)](function (_0x1cb0e8) {
        const _0x52f198 = _0x3b4027;
        $($(_0x52f198(0x195))[_0x1cb0e8])
          [_0x52f198(0x231)](_0x52f198(0x1dd))
          ["includes"](selString[_0x52f198(0x1a3)]()) &&
          (_0x54a051 = _0x1cb0e8);
      }),
        _0x54a051 > -0x1
          ? $($(_0x3b4027(0x195))[_0x54a051])[_0x3b4027(0x1e0)]()
          : $(_0x3b4027(0x11f))[_0x3b4027(0x1e0)]();
    }
  }
}

function triggerInputAllData() {
  const _0x10855c = _0x191e96;
  if (savedFilledInput && memory)
    savedFilledInput[_0x10855c(0x14b)]((_0x35b0f4) => {
      const _0x473856 = _0x10855c;
      var _0x32b2b2 = $(
          _0x473856(0x1c3) +
            _0x35b0f4[_0x473856(0x175)] +
            _0x473856(0x166) +
            _0x35b0f4[_0x473856(0x118)] +
            _0x473856(0x22e),
        ),
        _0x3a9def = $(
          "input[name=\x22" + _0x35b0f4[_0x473856(0x175)] + _0x473856(0x22e),
        ),
        _0x220977 = $(
          "textarea[name=\x22" + _0x35b0f4[_0x473856(0x175)] + _0x473856(0x22e),
        ),
        _0x158f11 = $(_0x473856(0x110) + _0x35b0f4["inputName"] + "\x22]"),
        _0x1a7303 = $(
          _0x473856(0x19c) +
            _0x35b0f4[_0x473856(0x175)] +
            _0x473856(0x166) +
            _0x35b0f4[_0x473856(0x118)] +
            _0x473856(0x22e),
        );
      if (_0x32b2b2[_0x473856(0x265)]("type") !== _0x473856(0x161)) {
        if (
          _0x32b2b2["attr"]("type") === _0x473856(0x136) &&
          !_0x32b2b2["parents"](_0x473856(0xf3))[_0x473856(0x231)]("radio-skip")
        )
          _0x32b2b2[_0x473856(0x223)](),
            _0x32b2b2[_0x473856(0x260)](".w-radio-input")["addClass"](
              "w--redirected-checked",
            ),
            _0x32b2b2[_0x473856(0x10f)]("input");
        else
          _0x35b0f4[_0x473856(0x118)] === "on"
            ? (_0x3a9def["click"](),
              _0x3a9def[_0x473856(0x260)](_0x473856(0x229))[_0x473856(0x1e2)](
                "w--redirected-checked",
              ),
              _0x3a9def[_0x473856(0x10f)]("input"))
            : (_0x3a9def[_0x473856(0x1c1)](_0x35b0f4[_0x473856(0x118)]),
              _0x220977[_0x473856(0x1c1)](_0x35b0f4[_0x473856(0x118)]),
              $(_0x473856(0xf8))
                [_0x473856(0xfd)](
                  _0x473856(0x1cf) + _0x35b0f4[_0x473856(0x118)] + "\x22]",
                )
                ["prop"](_0x473856(0x155), !![]),
              _0x3a9def[_0x473856(0x10f)](_0x473856(0x17e)),
              _0x3a9def["trigger"](_0x473856(0x246)));
        const _0x3c2fa1 = _0x1a7303["data"]("click-addclass"),
          _0x26cad5 = _0x158f11[_0x473856(0x231)](_0x473856(0x236));
        _0x1a7303[_0x473856(0x12b)]()[_0x473856(0x1e2)](_0x3c2fa1),
          _0x158f11[_0x473856(0x12b)]()[_0x473856(0x1e2)](_0x26cad5);
      }
    });
  else
    _params &&
      (getParams(),
      searchQ[_0x10855c(0x14b)]((_0x2f278f) => {
        const _0x3dfd46 = _0x10855c;
        if (
          $(
            _0x3dfd46(0x1c3) +
              _0x2f278f[_0x3dfd46(0x175)] +
              _0x3dfd46(0x166) +
              _0x2f278f[_0x3dfd46(0x118)] +
              _0x3dfd46(0x22e),
          )[_0x3dfd46(0x265)](_0x3dfd46(0x1f3)) !== _0x3dfd46(0x161)
        ) {
          if (
            $(
              _0x3dfd46(0x1c3) +
                _0x2f278f["key"] +
                _0x3dfd46(0x166) +
                _0x2f278f[_0x3dfd46(0x1c1)] +
                _0x3dfd46(0x22e),
            )[_0x3dfd46(0x265)]("type") === _0x3dfd46(0x136)
          )
            $(
              "input[name=\x22" +
                _0x2f278f[_0x3dfd46(0xff)] +
                _0x3dfd46(0x166) +
                _0x2f278f[_0x3dfd46(0x1c1)] +
                _0x3dfd46(0x22e),
            )["click"](),
              $(
                _0x3dfd46(0x1c3) +
                  _0x2f278f[_0x3dfd46(0xff)] +
                  _0x3dfd46(0x166) +
                  _0x2f278f[_0x3dfd46(0x1c1)] +
                  _0x3dfd46(0x22e),
              )
                [_0x3dfd46(0x260)](_0x3dfd46(0x1a0))
                [_0x3dfd46(0x1e2)](_0x3dfd46(0xfc)),
              $(
                _0x3dfd46(0x1c3) +
                  _0x2f278f[_0x3dfd46(0xff)] +
                  "\x22][value=\x22" +
                  _0x2f278f[_0x3dfd46(0x1c1)] +
                  _0x3dfd46(0x22e),
              )["trigger"]("input");
          else
            _0x2f278f[_0x3dfd46(0x1c1)] === "on"
              ? ($(
                  "input[name=\x22" +
                    _0x2f278f[_0x3dfd46(0xff)] +
                    _0x3dfd46(0x22e),
                )[_0x3dfd46(0x223)](),
                $(
                  _0x3dfd46(0x1c3) +
                    _0x2f278f[_0x3dfd46(0xff)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )
                  [_0x3dfd46(0x260)](".w-checkbox-input")
                  [_0x3dfd46(0x1e2)](_0x3dfd46(0xfc)),
                $(_0x3dfd46(0x1c3) + _0x2f278f[_0x3dfd46(0xff)] + "\x22]")[
                  _0x3dfd46(0x10f)
                ](_0x3dfd46(0x17e)))
              : ($(_0x3dfd46(0x1c3) + _0x2f278f["key"] + _0x3dfd46(0x22e))[
                  _0x3dfd46(0x1c1)
                ](_0x2f278f[_0x3dfd46(0x1c1)]),
                $(
                  _0x3dfd46(0x1b2) +
                    _0x2f278f[_0x3dfd46(0xff)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x3dfd46(0x1c1)](_0x2f278f["val"]),
                $(
                  _0x3dfd46(0x22f) +
                    _0x2f278f[_0x3dfd46(0xff)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )
                  [_0x3dfd46(0xfd)](
                    "option[value=\x22" + _0x2f278f[_0x3dfd46(0x1c1)] + "\x22]",
                  )
                  [_0x3dfd46(0x182)](_0x3dfd46(0x155), !![]),
                $(
                  _0x3dfd46(0x1c3) +
                    _0x2f278f[_0x3dfd46(0xff)] +
                    _0x3dfd46(0x22e),
                )["trigger"]("input"),
                $(
                  "input[name=\x22" +
                    _0x2f278f[_0x3dfd46(0xff)] +
                    "\x22]:not([data-prefill=\x22false\x22])",
                )[_0x3dfd46(0x10f)]("change"));
        }
      }));
}
$(_0x191e96(0x117))["on"]("click", function () {
  (next = !![]), (back = ![]), nextStep(), selectionQuiz();
}),
  $(_0x191e96(0x247))["on"](_0x191e96(0x223), function () {
    (next = ![]), (back = !![]), backStep();
  }),
  $(steps)
    [_0x191e96(0xfd)](_0x191e96(0x188))
    [_0x191e96(0x25d)](_0x191e96(0x17b))
    ["on"](_0x191e96(0x17e), function (_0x3e3532) {
      validation(), andLogic(), addClickClass();
    }),
  $(steps)
    [_0x191e96(0xfd)]("input[type=\x22radio\x22]")
    ["on"]("click", function () {
      (skip = !![]), validation(), addClickClass();
    });
$(_0x191e96(0x207))["data"](_0x191e96(0x1d6))
  ? $("[data-form=\x22custom-progress-indicator\x22]")[_0x191e96(0x129)](
      "disabled",
    )
  : $("[data-form=\x22custom-progress-indicator\x22]")["addClass"](
      _0x191e96(0x169),
    );

function clickableIndicator() {
  const _0x410f15 = _0x191e96;
  $(_0x410f15(0x105))["data"]("clickable") &&
    ($(_0x410f15(0x127))["removeClass"](_0x410f15(0x257)),
    $("[data-clickable]")[_0x410f15(0x231)](_0x410f15(0x1d6))
      ? ((x = $(this)[_0x410f15(0x1aa)]()), updateStep())
      : $(this)[_0x410f15(0x1aa)]() <= progress &&
        ((x = $(this)[_0x410f15(0x1aa)]()), updateStep())),
    $(_0x410f15(0x154))[_0x410f15(0x264)](x + 0x1);
}
$(_0x191e96(0x196))["on"]("click", clickableIndicator);
$(_0x191e96(0x178))["data"](_0x191e96(0x1ab)) &&
  ($(_0x191e96(0x1ce))[_0x191e96(0x1f5)](function () {
    const _0x4f07f7 = _0x191e96;
    $(this)[_0x4f07f7(0x14a)](
      _0x4f07f7(0x19e),
      $(this)[_0x4f07f7(0x231)](_0x4f07f7(0x1ca)),
    );
  }),
  $(_0x191e96(0x106))[_0x191e96(0x1f5)](function () {
    const _0x19f5bb = _0x191e96;
    $(this)["append"](
      _0x19f5bb(0x18c),
      $(this)[_0x19f5bb(0x231)](_0x19f5bb(0x226)),
    );
  }));

function resetFormly() {
  const _0xa58d26 = _0x191e96;
  $(_0xa58d26(0x178))[_0xa58d26(0x10f)](_0xa58d26(0x267)),
    $(_0xa58d26(0x178))
      [_0xa58d26(0x20a)]()
      [_0xa58d26(0xfd)](".w-form-done")
      [_0xa58d26(0x1a6)](),
    (x = 0x0),
    updateStep(),
    $(_0xa58d26(0x178))["show"](),
    $(_0xa58d26(0x233))[_0xa58d26(0x264)](oldSubmitText),
    $(_0xa58d26(0x233))[_0xa58d26(0x1c1)](oldSubmitText),
    $(_0xa58d26(0x154))["text"](0x1),
    $(_0xa58d26(0x178))
      ["find"]("input:checkbox")
      [_0xa58d26(0x260)](_0xa58d26(0x229))
      [_0xa58d26(0x129)](_0xa58d26(0xfc));
}
$(document)["ajaxComplete"](function (_0x5cfce5, _0x2f986, _0x3bc18f) {
  const _0x199620 = _0x191e96;
  if (_0x3bc18f["url"][_0x199620(0x26f)]("https://webflow.com/api/v1/form/")) {
    const _0x4e615b = _0x2f986["status"] === 0xc8,
      _0x56e1ad = _0x199620(0x1d1);
    redirectTo &&
      _0x4e615b &&
      (newTab
        ? window[_0x199620(0xf4)](redirectTo, _0x199620(0x22d))
        : setTimeout(() => {
            location["href"] = redirectTo;
          }, redirectDelay)),
      _0x4e615b &&
        successCard !== "" &&
        $(_0x199620(0x13f) + successCard + "\x22]")[_0x199620(0x1e0)](),
      _0x4e615b &&
        formReset &&
        setTimeout(() => {
          resetFormly();
        }, resetDelay),
      !_0x4e615b &&
        ($(_0x199620(0x233))["val"](_0x199620(0x181)),
        $("[data-form=\x22submit-btn\x22]")[_0x199620(0x264)](
          _0x199620(0x181),
        ));
  }
}),
  $(_0x191e96(0x187))["on"]("click", function () {
    const _0x4d515c = _0x191e96;
    var _0x33cbb3 = $(this)
      [_0x4d515c(0x12b)]()
      ["find"](_0x4d515c(0x25a))
      [_0x4d515c(0x231)](_0x4d515c(0x1b6));
    setTimeout(function () {
      const _0x36563e = _0x4d515c;
      $("input[name=\x22" + _0x33cbb3 + "\x22]")[_0x36563e(0x130)]();
    }, 0x64),
      (back = !![]),
      (x = $(this)["data"](_0x4d515c(0x163)) - 0x1),
      updateStep(),
      countCard
        ? ((curStep = x + 0x1),
          $(_0x4d515c(0x1ad))[_0x4d515c(0x264)](steps[_0x4d515c(0x113)]))
        : $(steps[x])[_0x4d515c(0x231)]("card")
          ? (curStep = x + 0x0)
          : (curStep = x + 0x1),
      $(_0x4d515c(0x154))[_0x4d515c(0x264)](curStep),
      (back = ![]);
  }),
  $("[data-btn=\x22reset\x22]")["on"]("click", function () {
    const _0x3480ed = _0x191e96;
    $("[data-form=\x22multistep\x22]")[_0x3480ed(0x10f)](_0x3480ed(0x267));
    let _0x20f800 = $(this);
    $(this)[_0x3480ed(0x264)](_0x3480ed(0x181)),
      setTimeout(function () {
        const _0x468eb7 = _0x3480ed;
        $(_0x20f800)["text"](oldResetText),
          $(_0x20f800)[_0x468eb7(0x20a)](_0x468eb7(0x216))[_0x468eb7(0x1a6)](),
          (x = 0x0),
          updateStep(),
          $("[data-form=\x22multistep\x22]")["show"](),
          $(_0x468eb7(0x233))[_0x468eb7(0x264)](oldSubmitText),
          $(_0x468eb7(0x233))[_0x468eb7(0x1c1)](oldSubmitText),
          $(_0x20f800)["val"](oldSubmitText),
          $("[data-text=\x22current-step\x22]")[_0x468eb7(0x264)](0x1),
          $(_0x468eb7(0x178))
            ["find"](_0x468eb7(0x1a9))
            [_0x468eb7(0x260)](_0x468eb7(0x229))
            ["removeClass"](_0x468eb7(0xfc));
      }, resetDelay);
  }),
  $(_0x191e96(0x1e1))["on"]("keypress", function (_0x1f9e8f) {
    const _0x568ee7 = _0x191e96;
    if (_0x1f9e8f[_0x568ee7(0x199)] === 0xd) {
      _0x1f9e8f["preventDefault"](), _0x1f9e8f[_0x568ee7(0x147)]();
      if ($(steps[x])[_0x568ee7(0xfd)]("textarea")["is"](_0x568ee7(0x1b4)))
        $(steps[x])
          [_0x568ee7(0xfd)](_0x568ee7(0x124))
          [_0x568ee7(0x1c1)](
            $(steps[x])[_0x568ee7(0xfd)](_0x568ee7(0x124))[_0x568ee7(0x1c1)]() +
              "\x0a",
          );
      else
        $("[data-enter]")[_0x568ee7(0x231)](_0x568ee7(0x202)) &&
          fill &&
          totalSteps > curStep &&
          $("[data-form=\x22next-btn\x22]")[0x0][_0x568ee7(0x223)]();
    }
  }),
  $("body")[_0x191e96(0x20d)](function (_0x3e4393) {
    const _0x11e4f1 = _0x191e96;
    (_0x3e4393["metaKey"] || _0x3e4393[_0x11e4f1(0x1ac)]) &&
      _0x3e4393[_0x11e4f1(0x199)] == 0xd &&
      (x >= steps[_0x11e4f1(0x113)] - 0x1 && fill
        ? $(steps[x])[_0x11e4f1(0xfd)](_0x11e4f1(0x131))["click"]()
        : (_0x3e4393[_0x11e4f1(0x243)](), _0x3e4393["stopPropagation"]()));
  }),
  $(_0x191e96(0x178))
    [_0x191e96(0xfd)](_0x191e96(0x188))
    ["on"](_0x191e96(0x246), function () {
      const _0x1b7c30 = _0x191e96;
      (all_data = all_data[_0x1b7c30(0x1b0)](
        (_0x9f27c8) => _0x9f27c8["field"] !== $(this)["attr"](_0x1b7c30(0x263)),
      )),
        $(this)["attr"](_0x1b7c30(0x1f3)) === _0x1b7c30(0x121)
          ? $(this)["is"](_0x1b7c30(0x193))
            ? all_data[_0x1b7c30(0x272)]({
                field: $(this)[_0x1b7c30(0x265)](_0x1b7c30(0x263)),
                value: $(this)[_0x1b7c30(0x260)](_0x1b7c30(0x24d))["text"](),
              })
            : $(
                _0x1b7c30(0x25f) +
                  $(this)[_0x1b7c30(0x265)](_0x1b7c30(0x263)) +
                  "\x22]",
              )[_0x1b7c30(0x1a6)]()
          : (all_data[_0x1b7c30(0x272)]({
              field: $(this)[_0x1b7c30(0x265)](_0x1b7c30(0x263)),
              value: $(this)[_0x1b7c30(0x1c1)](),
            }),
            $(this)[_0x1b7c30(0x1c1)]() !== "" &&
              resetInputErrorMessage(
                $(this)[_0x1b7c30(0x265)](_0x1b7c30(0x263)),
              )),
        all_data["forEach"](function (_0x2d5c77) {
          const _0x2daf04 = _0x1b7c30;
          $(_0x2daf04(0x25f) + _0x2d5c77[_0x2daf04(0x24c)] + "\x22]")[
            _0x2daf04(0x25c)
          ](),
            $(_0x2daf04(0x25f) + _0x2d5c77["field"] + "\x22]")[
              _0x2daf04(0x264)
            ](_0x2d5c77["value"]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    ["find"](_0x191e96(0x23d))
    ["on"](_0x191e96(0x246), function () {
      const _0xbb3619 = _0x191e96;
      $(this)["val"]() !== "" &&
        resetInputErrorMessage($(this)["attr"]("name")),
        (all_data = all_data["filter"](
          (_0xd28222) =>
            _0xd28222["field"] !== $(this)[_0xbb3619(0x265)]("name"),
        )),
        all_data[_0xbb3619(0x272)]({
          field: $(this)[_0xbb3619(0x265)](_0xbb3619(0x263)),
          value: $(this)[_0xbb3619(0x1c1)](),
        }),
        all_data[_0xbb3619(0x14b)](function (_0x4ddc57) {
          const _0x3fa460 = _0xbb3619;
          $(_0x3fa460(0x25f) + _0x4ddc57[_0x3fa460(0x24c)] + "\x22]")[
            _0x3fa460(0x25c)
          ](),
            $(_0x3fa460(0x25f) + _0x4ddc57[_0x3fa460(0x24c)] + "\x22]")[
              _0x3fa460(0x264)
            ](_0x4ddc57[_0x3fa460(0x118)]);
        });
    }),
  $("[data-form=\x22multistep\x22]")
    [_0x191e96(0xfd)]("select")
    ["on"]("change", function () {
      const _0x58157a = _0x191e96;
      $(this)[_0x58157a(0x1c1)]() !== "" &&
        resetInputErrorMessage($(this)["attr"](_0x58157a(0x263)));
      var _0x39cf4e = $(this)["data"](_0x58157a(0x158));
      (all_data = all_data["filter"](
        (_0x4236be) => _0x4236be["field"] !== $(this)[_0x58157a(0x265)]("name"),
      )),
        all_data[_0x58157a(0x272)]({
          field: $(this)[_0x58157a(0x265)]("name"),
          value: _0x39cf4e
            ? $(this)[_0x58157a(0xfd)](_0x58157a(0x16a))["text"]()
            : $(this)[_0x58157a(0x1c1)](),
        }),
        all_data[_0x58157a(0x14b)](function (_0x14f1ef) {
          const _0x5c6ac1 = _0x58157a;
          $(_0x5c6ac1(0x25f) + _0x14f1ef[_0x5c6ac1(0x24c)] + "\x22]")[
            _0x5c6ac1(0x25c)
          ](),
            $(_0x5c6ac1(0x25f) + _0x14f1ef[_0x5c6ac1(0x24c)] + "\x22]")[
              _0x5c6ac1(0x264)
            ](_0x14f1ef["value"]);
        });
    }),
  updateStep(),
  triggerInputAllData(),
  $(_0x191e96(0x143))[_0x191e96(0x1f5)](function () {
    const _0x592f1e = _0x191e96,
      _0x2c0ad7 = $(this)[_0x592f1e(0xfd)](_0x592f1e(0x1f1)),
      _0x1ea96d = [];
    _0x2c0ad7[_0x592f1e(0x1f5)](function () {
      const _0x374585 = _0x592f1e;
      _0x1ea96d[_0x374585(0x272)]($(this)[_0x374585(0x264)]()["trim"]());
    });
    const _0x25b0ba = $(this)["siblings"](_0x592f1e(0x1ec));
    $[_0x592f1e(0x1f5)](_0x1ea96d, function (_0x6643f5, _0x158a9b) {
      const _0x477851 = _0x592f1e,
        _0x397470 = $("<option>")
          [_0x477851(0x1c1)](_0x158a9b)
          [_0x477851(0x264)](_0x158a9b);
      _0x25b0ba[_0x477851(0x14a)](_0x397470);
    });
  });

function _0xce23() {
  const _0x32cabd = [
    "[data-progressive-target=\x22",
    "[data-enter=\x22true\x22]",
    "[data-input-index=\x22",
    "[data-selection=\x22other\x22]",
    "[data-quiz]",
    "checkbox",
    "select-multiple",
    ":input[type=\x22text\x22][required]",
    "textarea:focus",
    ":input[type=\x22password\x22][required]",
    "[data-clone=\x22",
    "[data-form=\x22progress-indicator\x22]",
    "Counter\x20already\x20updated\x20for\x20this\x20month.",
    "removeClass",
    "memory",
    "parent",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22][data-progressive-input-value=\x22*\x22]",
    "destroy",
    "656138GUJHgs",
    "focus",
    "[data-form=\x22submit-btn\x22]:visible",
    "[data-redirect-delay]",
    "remove-upload",
    "<strong\x20class=\x22f-text-white\x22>Current\x20Step\x20Text\x20",
    "last",
    "radio",
    "split",
    "textarea[required]",
    "<strong\x20class=\x22f-text-white\x22>Automatic\x20Progress\x20Indicators\x20",
    "add-new-input-limit",
    ":input[type=\x22tel\x22][required]",
    "\x22]\x20[data-clone-input=\x22",
    "getItem",
    "Before\x20&lt;/body&gt;\x20tag",
    "[data-success-card=\x22",
    "\x22]\x20[data-input-field^=\x22",
    "logic-extra",
    "success",
    "[data-cms-select=cms]",
    "appendChild",
    "progressive-input",
    ":input[type=\x22checkbox\x22]",
    "stopPropagation",
    ":input[type=\x22password\x22]",
    "[data-range]:contains(",
    "append",
    "forEach",
    "input[type=\x22radio\x22]",
    "f-mySidenav",
    "<span\x20class=\x22f-icon-embed-xxsmall\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path></svg></span>",
    "input:radio[required]",
    "input[autofocus]",
    "input:radio[name=\x22",
    "[data-selection=\x22",
    "[data-radio-delay]",
    "[data-text=\x22current-step\x22]",
    "selected",
    "[data-checkbox]",
    "auto",
    "ms-field",
    "data-radio-delay",
    "add-new",
    "<span\x20class=\x22f-icon-embed-xxsmall-2\x20w-embed\x22><svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22><path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path></svg></span>",
    "animate",
    "[data-card=\x22true\x22]",
    ":input[type=\x22date\x22][required]",
    "custom-error-message",
    "https://videsigns-staging.co.uk/counter",
    "file",
    "<strong\x20class=\x22f-text-white\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs\x20",
    "edit-step",
    "[data-text=\x22error-message\x22]",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>2.\x20Form\x20Steps:\x20data-form=step\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x22][value=\x22",
    "\x22]\x20textarea",
    "</strong>",
    "disabled",
    "option[value=\x22$(this).val()\x22]",
    "filledInput",
    "[data-text=\x22total-weight\x22]",
    ":input[type=\x22url\x22][required]",
    "[data-callback=\x22recaptcha\x22]",
    "dispatchEvent",
    "0px",
    "quiz",
    "[data-add-new=\x22",
    "[data-form=\x22next-btn\x22][data-submit-show]",
    "createElement",
    "inputName",
    "data-input-field",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button",
    "[data-form=\x22multistep\x22]",
    "progressive-input-value",
    "\x22]\x20input",
    "[type=\x22radio\x22]",
    "\x22]\x20select",
    "weighted-selection",
    "input",
    "\x22]\x20[data-clone=\x22",
    "conditional-result",
    "Please\x20wait...",
    "prop",
    "[data-btn=\x22reset\x22]",
    "style",
    "reset-delay",
    ":input[type=\x22checkbox\x22]:checked",
    "[data-btn=\x22edit\x22]",
    ":input",
    "toString",
    "true",
    "84875ynJuRj",
    "<br>Data\x20Answer\x20=\x20",
    "[data-form=\x22step\x22][data-card]",
    "setItem",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>3.\x20Next\x20Buttons:\x20data-form=back-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20present?\x20",
    "[data-custom-error-message]",
    "[data-form=\x22submit\x22]:visible",
    "[data-display-input]",
    ":checked",
    "step",
    "[data-selection]",
    "[data-form=\x22custom-progress-indicator\x22]",
    "BODY",
    "data-go-to",
    "keyCode",
    "[data-form=\x22progress\x22]",
    ":input[type=\x22checkbox\x22][required]:not(:checked)",
    "input[type=\x22radio\x22][name=\x22",
    "redirect-delay",
    "<br>Data\x20Go\x20To\x20=\x20",
    "head",
    ".w-radio-input",
    "16JKTgus",
    "<strong\x20class=\x22f-text-white\x22>Press\x20\x22Enter\x22\x20To\x20Progress\x20",
    "join",
    "button",
    "padding",
    "hide",
    "children",
    "post",
    "input:checkbox",
    "index",
    "debug-mode",
    "ctrlKey",
    "[data-text=\x22total-steps\x22]",
    "init",
    "src",
    "filter",
    "videsigns",
    "textarea[name=\x22",
    "[data-answer][data-radio-skip]:visible",
    ":focus",
    "[data-display-input-wrapper=\x22",
    "input-field",
    "[data-click-addclass]",
    "0.4",
    "12px",
    "[data-reinit]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Powerups</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "display",
    "data-radio-skip",
    "[data-reset-delay]",
    "Basic\x20(No\x20Formly\x20Logic)",
    "35%",
    "val",
    "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x200;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#081019\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20padding-top:\x2060px\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73)\x20!important;\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text,\x20.f-support-text,\x20.f-openbtn{\x0a\x20\x20\x20\x20font-size:\x2015px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20font-family:system-ui\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20p,\x20.f-sidenav\x20strong\x20{\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20space-between\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x204px\x20!important;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20}\x0a\x0a\x20\x20.f-sidenav\x20.f-closebtn\x20{\x0a\x20\x20\x20\x20position:\x20absolute\x20!important;\x0a\x20\x20\x20\x20top:\x2025px\x20!important;\x0a\x20\x20\x20\x20right:\x2025px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2036px\x20!important;\x0a\x20\x20\x20\x20margin-left:\x2050px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-core-setup\x20{\x0a\x20\x20\x20\x20padding:\x2012px\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2011px\x20!important;\x0a\x20\x20\x20\x20border-radius:\x206px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20#f-main\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-main-content\x20{\x0a\x20\x20\x20\x20transition:\x20margin-left\x20.5s\x20!important;\x0a\x20\x20\x20\x20padding:\x2020px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-fc-form-step\x20{\x0a\x20\x20\x20\x20padding-left:\x2010px\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-header{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20font-size:\x201.8rem\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20600\x20!important;\x0a\x20\x20\x20\x20line-height:\x201.2\x20!important;\x0a\x20\x20\x20\x20margin-bottom:4px\x0a\x20\x20}\x0a\x0a\x20\x20@media\x20screen\x20and\x20(max-height:\x20450px)\x20{\x0a\x20\x20\x20\x20.sidenav\x20{\x20padding-top:\x2015px\x20!important;\x20}\x0a\x20\x20\x20\x20.sidenav\x20a\x20{\x20font-size:\x2018px\x20!important;\x20}\x0a\x20\x20}\x0a\x0a\x20\x20.f-section-title-text{\x0a\x20\x20\x20\x20color:\x20#fff\x20!important;\x0a\x20\x20\x20\x20margin-bottom:\x2010px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2018px\x20!important;\x0a\x20\x20\x20\x20font-weight:\x20700\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-div-support-section{\x0a\x20\x20\x20\x20padding-top:1rem\x20!important;\x0a\x20\x20\x20\x20padding-bottom:1rem\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-text-white{\x0a\x20\x20\x20\x20color:\x20white\x20!important;\x0a\x20\x20}\x0a\x0a\x20\x20.f-spacer{\x0a\x20\x20\x20\x20padding-top:8px\x20!important;\x0a\x20\x20}\x0a",
    "input[name=\x22",
    "phone-validation",
    "slow",
    "[data-memory]",
    ":input[type=\x22time\x22][required]",
    "backTo",
    "getElementById",
    "go-to",
    "findIndex",
    "add-new-limit",
    "tagName",
    "[data-go-to]",
    "option[value=\x22",
    "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
    "redirect-form-hehexd",
    ":input[type=\x22url\x22]",
    "parse",
    "[data-display-input-index=\x22",
    "test",
    "clickable-all",
    "3QvIyCn",
    "11DWzbmq",
    "select",
    "[data-radio-skip=\x22true\x22]",
    "href",
    "[data-progressive-input=\x22",
    "selection",
    "cookie",
    "querySelectorAll",
    "fadeIn",
    "body",
    "addClass",
    "clone-input",
    "[data-clone]",
    "scroll-top",
    "[data-btn=\x22check\x22]",
    "[data-clone-input-wrapper]",
    "[data-query-param]",
    ":input[type=\x22time\x22]",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    "Webflow",
    "[data-cms-select=input]",
    "log",
    "[data-clone-input-wrapper=\x22",
    "[data-remove-upload]",
    "[data-display=\x22",
    "[data-cms-select=text]",
    "active-answer-card",
    "type",
    "clone",
    "each",
    "some",
    "[data-progressive-target]",
    "[data-skip-to]",
    "new-tab",
    "[data-add-new-input=\x22",
    ":input[type=\x22text\x22]",
    "block-domain",
    "input[type=\x22text\x22][required]:visible",
    "[data-display-index=\x22",
    "Failed\x20to\x20update\x20counter:",
    "[data-selection-weight]",
    ".active-answer-card",
    "enter",
    "css",
    "card",
    "\x22]:checked",
    "formly-support",
    "[data-clickable-all]",
    "Inside\x20<head>\x20tag",
    "235630hFRBiH",
    "parents",
    "clickable",
    "data-show-if",
    "keydown",
    "every",
    "startsWith",
    "getElementsByTagName",
    "[data-progressive-input]",
    "FAIL",
    "html,\x20body",
    "</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Number\x20of\x20steps:\x20",
    "require",
    ".w-form-done",
    "[data-answer=\x22",
    "[data-success-card]",
    "117534lgrKQK",
    "[data-clone-input]",
    "[aria-label=\x22Remove\x20file\x22]",
    "[data-weighted-selection-range]",
    "f-hide",
    "novalidate",
    "skipTo",
    "min-character",
    "4ZwERSx",
    "closest",
    "click",
    "location",
    "[data-display-input=\x22",
    "answer",
    "[data-display]",
    "formlyLastStepAnswer",
    ".w-checkbox-input",
    "[data-submit=\x22true\x22]",
    "ix2",
    "Counter\x20updated\x20successfully.",
    "_blank",
    "\x22]:not([data-prefill=\x22false\x22])",
    "select[name=\x22",
    "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
    "data",
    "[data-form=\x22step\x22]",
    "[data-form=\x22submit-btn\x22]",
    "740265DXVwSH",
    "[data-clone-input=\x22",
    "click-addclass",
    "6136180oQITLL",
    "[type=\x22checkbox\x22]",
    "remove",
    ":input[type=\x22file\x22][required]",
    "removeItem",
    ":input[type=\x22email\x22][required]",
    "textarea",
    ".w-form-formradioinput",
    "count-card",
    "error",
    "relationship-",
    "radio-skip",
    "preventDefault",
    "<strong\x20class=\x22f-text-white\x22>Checkboxes\x20",
    "[data-form=\x22remove-input-clone\x22]",
    "change",
    "[data-form=\x22back-btn\x22]",
    "select[required]",
    "phone-autoformat",
    "f-show",
    "[data-add-new-input]",
    "field",
    "span",
    "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
    ":input[type=\x22email\x22]",
    ":input[type=\x22checkbox\x22][required]",
    "2816496OQWofm",
    "[data-count-card]",
    "scroll-top-offset",
    "redirect",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>5.\x20Submit\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Submit\x20button\x20present?\x20",
    ":input[type=\x22radio\x22]",
    "current",
    "wait",
    "searchParams",
    "[data-input-field]",
    "toLowerCase",
    "show",
    "not",
    ":input[type=\x22checkbox\x22][required]:checked",
    "[data-input-field=\x22",
    "siblings",
    "stringify",
    "[data-display-wrapper=\x22",
    "name",
    "text",
    "attr",
    "div.g-recaptcha",
    "reset",
    "slice",
    "submit",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>4.\x20Back\x20Buttons:\x20data-form=next-btn</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Back\x20button\x20present?\x20",
    "</div>",
    "width",
    "data-skip-to",
    "[data-last-step]",
    "includes",
    "[data-radio-skip]:visible",
    "<strong\x20class=\x22f-text-white\x22>Radio\x20Inputs\x20",
    "push",
    "top",
    "[data-select-multiple]",
    "querySelector",
    "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20<div\x20class=\x22f-fc-main-content\x22>\x0a\x20\x20\x20\x20\x20\x20<h4\x20class=\x22f-text-header\x22>Formly\x20Support</h4>\x0a\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20developer@videsigns.uk.\x0a\x20\x20\x20\x20\x20\x20</p>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Form\x20Type</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>",
    ":input[type=\x22number\x22]",
    "radio-delay",
    "skip-to",
    "[data-radio-skip]",
    "open",
    "div",
    "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button\x20",
    "substring",
    "select:not([data-prefill=\x22false\x22])",
    "[data-form=\x22remove-clone\x22]",
    "[data-clone-wrapper=\x22",
    "\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a\x20\x20</div>\x0a",
    "w--redirected-checked",
    "find",
    "[data-conditional-result]",
    "key",
    "innerHTML",
    "form[data-form=\x22multistep\x22]\x20:input",
    "formly",
    "[data-form=\x22step\x22]:not([data-card=\x22true\x22])",
    "\x22][data-progressive-input-value=\x22",
    "[data-clickable]",
    "[data-answer]",
    "getResponse",
    "readystatechange",
    "multistep",
    ":first",
    "counter",
    "textarea[autofocus]",
    ":input[type=\x22tel\x22]",
    "<strong\x20class=\x22f-text-white\x22>ReCAPTCHA\x20",
    "trigger",
    "input[type=\x22checkbox\x22][name=\x22",
    "replace",
    "none",
    "length",
    "data-name",
    "script",
    ":input[type=\x22number\x22][required]",
    "[data-form=\x22next-btn\x22]",
    "value",
    "data-form",
    "[data-form-ms=\x22submit-btn\x22]",
    "input[type=\x22radio\x22]:checked",
  ];
  _0xce23 = function () {
    return _0x32cabd;
  };
  return _0xce23();
}

function cloneRemove() {
  const _0xfc09b8 = _0x191e96;
  $("[data-clone-wrapper]")[_0xfc09b8(0x1f5)](function () {
    const _0x2b6af7 = _0xfc09b8;
    $(this)["find"]("[data-clone]")[_0x2b6af7(0x113)] < 0x2
      ? $(this)[_0x2b6af7(0xfd)](_0x2b6af7(0xf9))["hide"]()
      : $(this)["find"](_0x2b6af7(0xf9))[_0x2b6af7(0x25c)]();
  });
}

function cloneRemoveInput() {
  const _0x27d165 = _0x191e96;
  $(_0x27d165(0x1e7))[_0x27d165(0x1f5)](function () {
    const _0x207f0e = _0x27d165;
    console[_0x207f0e(0x1ed)](
      $(this)[_0x207f0e(0xfd)]("[data-clone-input]")[_0x207f0e(0x113)],
    ),
      $(this)[_0x207f0e(0xfd)](_0x207f0e(0x21a))["length"] < 0x2
        ? $(this)
            ["find"]("[data-form=\x22remove-input-clone\x22]")
            [_0x207f0e(0x1a6)]()
        : $(this)["find"](_0x207f0e(0x245))[_0x207f0e(0x25c)]();
  });
}
$(_0x191e96(0xf9))["on"](_0x191e96(0x223), function () {
  const _0x418943 = _0x191e96,
    _0x279727 =
      $(this)[_0x418943(0x20a)](_0x418943(0x1e4))[_0x418943(0x113)] > 0x0
        ? $(this)[_0x418943(0x20a)](_0x418943(0x1e4))[_0x418943(0x1aa)]()
        : $(this)[_0x418943(0x20a)](_0x418943(0x227))[_0x418943(0x1aa)](),
    _0x37c1ce =
      $(this)[_0x418943(0x20a)](_0x418943(0x1e4))[_0x418943(0x113)] > 0x0
        ? $(this)
            [_0x418943(0x20a)](_0x418943(0x1e4))
            [_0x418943(0x231)](_0x418943(0x1f4))
        : $(this)[_0x418943(0x20a)](_0x418943(0x227))["data"](_0x418943(0x1bc));
  $(_0x418943(0x126) + _0x37c1ce + "\x22]")
    ["eq"](_0x279727)
    ["remove"](),
    $("[data-display=\x22" + _0x37c1ce + "\x22]")
      ["eq"](_0x279727)
      ["remove"](),
    cloneRemove();
  let _0xe4cd11 = $(_0x418943(0x172) + _0x37c1ce + "\x22]")[_0x418943(0x231)](
      "add-new-limit",
    ),
    _0x133935 = $(_0x418943(0x126) + _0x37c1ce + "\x22]")[_0x418943(0x113)];
  console["log"](_0x133935, _0xe4cd11),
    _0x133935 < _0xe4cd11 &&
      (console[_0x418943(0x1ed)](_0x418943(0x25c)),
      $(_0x418943(0x172) + _0x37c1ce + "\x22]")[_0x418943(0x25c)]()),
    validation();
}),
  $("[data-form=\x22remove-input-clone\x22]")["on"](
    _0x191e96(0x223),
    function () {
      const _0x21ea36 = _0x191e96;
      let _0x3dc2c3 = $(this)[_0x21ea36(0x260)]()["attr"]("name"),
        _0x1029a6 = $(this)
          [_0x21ea36(0x20a)](_0x21ea36(0x21a))
          ["data"]("clone-input");
      $(this)[_0x21ea36(0x12b)]("[data-clone-input]")[_0x21ea36(0x239)](),
        $(_0x21ea36(0x25f) + _0x3dc2c3 + "\x22]")
          [_0x21ea36(0x12b)](_0x21ea36(0x192))
          [_0x21ea36(0x239)]();
      let _0x4df942 = $(_0x21ea36(0x1fa) + _0x1029a6 + "\x22]")[
          _0x21ea36(0x231)
        ]("add-new-input-limit"),
        _0x28a2cd = $(_0x21ea36(0x235) + _0x1029a6 + "\x22]")[_0x21ea36(0x113)];
      _0x28a2cd < _0x4df942 &&
        $(_0x21ea36(0x1fa) + _0x1029a6 + "\x22]")[_0x21ea36(0x25c)](),
        validation();
    },
  ),
  $("[data-add-new]")["on"](_0x191e96(0x223), function () {
    const _0x24c5ff = _0x191e96;
    let _0xc0e435 = $(this)[_0x24c5ff(0x231)](_0x24c5ff(0x15a)),
      _0x400891 = $(this)[_0x24c5ff(0x231)](_0x24c5ff(0x1cc));
    var _0x370119 = $("[data-clone=\x22" + _0xc0e435 + "\x22]")
        ["eq"](0x0)
        [_0x24c5ff(0x1f4)](!![]),
      _0x5af4a7 = $(_0x24c5ff(0x1f0) + _0xc0e435 + "\x22]")
        ["eq"](0x0)
        [_0x24c5ff(0x1f4)](!![]);
    let _0x456144 = "";
    $(this)[_0x24c5ff(0xfd)](_0x24c5ff(0xf9))[_0x24c5ff(0x25c)](),
      cloneRemove(),
      _0x370119[_0x24c5ff(0xfd)](_0x24c5ff(0x21a))
        [_0x24c5ff(0xfd)](_0x24c5ff(0x17e))
        ["val"](""),
      _0x370119[_0x24c5ff(0xfd)](_0x24c5ff(0x21a))
        [_0x24c5ff(0xfd)](_0x24c5ff(0x1d9))
        ["val"](""),
      _0x370119[_0x24c5ff(0xfd)](_0x24c5ff(0x21a))
        [_0x24c5ff(0xfd)](_0x24c5ff(0x23d))
        [_0x24c5ff(0x1c1)](""),
      _0x370119[_0x24c5ff(0xfd)]("[data-clone-input]")
        [_0x24c5ff(0x25d)](":first")
        [_0x24c5ff(0x239)](),
      _0x370119[_0x24c5ff(0xfd)]("[data-clone-input]")
        ["find"](_0x24c5ff(0x21b))
        [_0x24c5ff(0x223)](),
      _0x5af4a7[_0x24c5ff(0xfd)](_0x24c5ff(0x192))
        [_0x24c5ff(0x25d)](_0x24c5ff(0x10a))
        [_0x24c5ff(0x239)](),
      _0x370119[_0x24c5ff(0xfd)](_0x24c5ff(0x17e))[_0x24c5ff(0x1f5)](
        function () {
          const _0x7d3f38 = _0x24c5ff;
          if ($(this)["closest"](_0x7d3f38(0x21a))[_0x7d3f38(0x113)] > 0x0) {
            let _0x546124 = 0x0;
            const _0x28a766 = $(this)
              ["closest"]("[data-clone-input]")
              [_0x7d3f38(0x231)](_0x7d3f38(0x1e3));
            $(_0x7d3f38(0x235) + _0x28a766 + _0x7d3f38(0x17a))[
              _0x7d3f38(0x1f5)
            ](function () {
              const _0x3fbe16 = _0x7d3f38,
                _0x85373f = $(this)[_0x3fbe16(0x265)](_0x3fbe16(0x263));
              if (_0x85373f && _0x85373f[_0x3fbe16(0x20f)](_0x3fbe16(0x241))) {
                const _0x3e4e61 = parseInt(
                  _0x85373f[_0x3fbe16(0x137)]("-")[0x1],
                );
                !isNaN(_0x3e4e61) &&
                  _0x3e4e61 > _0x546124 &&
                  (_0x546124 = _0x3e4e61);
              }
            }),
              _0x546124++,
              (_0x456144 = this[_0x7d3f38(0x263)] + "-" + _0x546124);
          } else
            _0x456144 =
              this[_0x7d3f38(0x263)] +
              "-" +
              (parseInt(
                $("[data-clone=\x22" + _0xc0e435 + "\x22]")
                  ["last"]()
                  [_0x7d3f38(0x1aa)](),
              ) +
                0x1);
          $(this)["val"](""),
            $(this)["attr"](_0x7d3f38(0x263), _0x456144),
            $(this)["attr"](_0x7d3f38(0x114), _0x456144);
        },
      ),
      _0x370119[_0x24c5ff(0xfd)](_0x24c5ff(0x23d))[_0x24c5ff(0x1f5)](
        function () {
          const _0x7eba68 = _0x24c5ff;
          if ($(this)[_0x7eba68(0x222)](_0x7eba68(0x21a))["length"] > 0x0) {
            let _0x14c012 = 0x0;
            const _0x384048 = $(this)
              [_0x7eba68(0x222)]("[data-clone-input]")
              [_0x7eba68(0x231)](_0x7eba68(0x1e3));
            $(_0x7eba68(0x235) + _0x384048 + _0x7eba68(0x167))[
              _0x7eba68(0x1f5)
            ](function () {
              const _0x2252fe = _0x7eba68,
                _0x2d3c64 = $(this)[_0x2252fe(0x265)](_0x2252fe(0x263));
              if (_0x2d3c64 && _0x2d3c64[_0x2252fe(0x20f)](_0x2252fe(0x241))) {
                const _0x1ee99c = parseInt(
                  _0x2d3c64[_0x2252fe(0x137)]("-")[0x1],
                );
                !isNaN(_0x1ee99c) &&
                  _0x1ee99c > _0x14c012 &&
                  (_0x14c012 = _0x1ee99c);
              }
            }),
              _0x14c012++,
              (_0x456144 = this[_0x7eba68(0x263)] + "-" + _0x14c012);
          } else
            _0x456144 =
              this[_0x7eba68(0x263)] +
              "-" +
              (parseInt(
                $(_0x7eba68(0x126) + _0xc0e435 + "\x22]")
                  [_0x7eba68(0x135)]()
                  [_0x7eba68(0x1aa)](),
              ) +
                0x1);
          $(this)[_0x7eba68(0x1c1)](""),
            $(this)[_0x7eba68(0x265)](_0x7eba68(0x263), _0x456144),
            $(this)[_0x7eba68(0x265)](_0x7eba68(0x114), _0x456144);
        },
      ),
      _0x370119["find"](_0x24c5ff(0x1d9))["each"](function () {
        const _0x7cf709 = _0x24c5ff;
        if (
          $(this)[_0x7cf709(0x222)](_0x7cf709(0x21a))[_0x7cf709(0x113)] > 0x0
        ) {
          let _0x37d0e6 = 0x0;
          const _0x4ab55a = $(this)
            [_0x7cf709(0x222)](_0x7cf709(0x21a))
            [_0x7cf709(0x231)](_0x7cf709(0x1e3));
          $("[data-clone-input=\x22" + _0x4ab55a + "\x22]\x20select")[
            _0x7cf709(0x1f5)
          ](function () {
            const _0x411698 = _0x7cf709,
              _0x5a3cf5 = $(this)[_0x411698(0x265)]("name");
            if (_0x5a3cf5 && _0x5a3cf5[_0x411698(0x20f)](_0x411698(0x241))) {
              const _0x392761 = parseInt(_0x5a3cf5[_0x411698(0x137)]("-")[0x1]);
              !isNaN(_0x392761) &&
                _0x392761 > _0x37d0e6 &&
                (_0x37d0e6 = _0x392761);
            }
          }),
            _0x37d0e6++,
            (_0x456144 = this["name"] + "-" + _0x37d0e6);
        } else
          _0x456144 =
            this["name"] +
            "-" +
            (parseInt(
              $(_0x7cf709(0x126) + _0xc0e435 + "\x22]")
                ["last"]()
                [_0x7cf709(0x1aa)](),
            ) +
              0x1);
        $(this)[_0x7cf709(0x1c1)](""),
          $(this)[_0x7cf709(0x265)](_0x7cf709(0x263), _0x456144),
          $(this)[_0x7cf709(0x265)](_0x7cf709(0x114), _0x456144);
      }),
      _0x5af4a7["find"]("[data-input-field]")[_0x24c5ff(0x1f5)](function () {
        const _0x4950d2 = _0x24c5ff;
        if ($(this)["data"](_0x4950d2(0x1b6))) {
          let _0x3d6370 = 0x0;
          const _0x51d13f = $(this)
            [_0x4950d2(0x231)](_0x4950d2(0x1b6))
            [_0x4950d2(0x137)]("-")[0x0];
          $(
            _0x4950d2(0x1f0) +
              _0xc0e435 +
              _0x4950d2(0x140) +
              _0x51d13f +
              "\x22]",
          )[_0x4950d2(0x1f5)](function () {
            const _0x21dca7 = _0x4950d2,
              _0xb8f2b6 = $(this)["attr"](_0x21dca7(0x176)),
              _0x302282 = parseInt(_0xb8f2b6[_0x21dca7(0x137)]("-")[0x1]);
            !isNaN(_0x302282) &&
              _0x302282 > _0x3d6370 &&
              (_0x3d6370 = _0x302282);
          }),
            _0x3d6370++;
          const _0x1c6e69 = _0x51d13f + "-" + _0x3d6370;
          $(this)[_0x4950d2(0x265)]("data-input-field", _0x1c6e69);
        }
      }),
      $(_0x24c5ff(0xfa) + _0xc0e435 + "\x22]")["append"](_0x370119),
      $(_0x24c5ff(0x262) + _0xc0e435 + "\x22]")["append"](_0x5af4a7),
      $("[data-index=\x22" + _0xc0e435 + "\x22]")[_0x24c5ff(0x1f5)](
        function () {
          const _0x16d5c6 = _0x24c5ff;
          $(this)[_0x16d5c6(0x264)](
            $(this)
              [_0x16d5c6(0x20a)](_0x16d5c6(0x126) + _0xc0e435 + "\x22]")
              [_0x16d5c6(0x1aa)]() + 0x1,
          );
        },
      ),
      $(_0x24c5ff(0x1fe) + _0xc0e435 + "\x22]")[_0x24c5ff(0x1f5)](function () {
        const _0x1de372 = _0x24c5ff;
        $(this)["text"](
          $(this)
            ["parents"](_0x1de372(0x1f0) + _0xc0e435 + "\x22]")
            [_0x1de372(0x1aa)]() + 0x1,
        );
      });
    let _0xc43965 = $(
      "[data-clone-wrapper=\x22" +
        _0xc0e435 +
        _0x24c5ff(0x17f) +
        _0xc0e435 +
        "\x22]",
    )[_0x24c5ff(0x113)];
    if (_0xc43965 >= _0x400891) {
      $(this)["hide"]();
      return;
    }
    $(this)[_0x24c5ff(0x25c)](), validation();
  }),
  $(_0x191e96(0x24b))["on"](_0x191e96(0x223), function () {
    const _0x3ce3d5 = _0x191e96,
      _0xff6f05 = $(this)
        [_0x3ce3d5(0x20a)](_0x3ce3d5(0x1e4))
        [_0x3ce3d5(0x1aa)]();
    let _0x454d24 = $(this)[_0x3ce3d5(0x231)]("add-new-input");
    var _0x3b3805 = $("[data-clone-input=\x22" + _0x454d24 + "\x22]")
        ["eq"](0x0)
        [_0x3ce3d5(0x1f4)](!![]),
      _0x2f70bb = $(_0x3ce3d5(0x225) + _0x454d24 + "\x22]")
        ["eq"](0x0)
        [_0x3ce3d5(0x1f4)](!![]);
    let _0x3e8396 = $(this)[_0x3ce3d5(0x231)](_0x3ce3d5(0x13a)),
      _0x53f6fb = 0x0;
    $(_0x3ce3d5(0x235) + _0x454d24 + _0x3ce3d5(0x17a))[_0x3ce3d5(0x1f5)](
      function () {
        const _0xb1bbf9 = _0x3ce3d5,
          _0x147e5d = $(this)[_0xb1bbf9(0x265)](_0xb1bbf9(0x263));
        if (_0x147e5d) {
          const _0x72d6ab = parseInt(_0x147e5d["split"]("-")[0x1]);
          !isNaN(_0x72d6ab) && _0x72d6ab > _0x53f6fb && (_0x53f6fb = _0x72d6ab);
        }
      },
    ),
      $(_0x3ce3d5(0x235) + _0x454d24 + _0x3ce3d5(0x17c))[_0x3ce3d5(0x1f5)](
        function () {
          const _0x38dc54 = _0x3ce3d5,
            _0x28c47a = $(this)[_0x38dc54(0x265)](_0x38dc54(0x263));
          if (_0x28c47a) {
            const _0x2ed30d = parseInt(_0x28c47a["split"]("-")[0x1]);
            !isNaN(_0x2ed30d) &&
              _0x2ed30d > _0x53f6fb &&
              (_0x53f6fb = _0x2ed30d);
          }
        },
      ),
      $(_0x3ce3d5(0x235) + _0x454d24 + _0x3ce3d5(0x167))[_0x3ce3d5(0x1f5)](
        function () {
          const _0x7bb71e = _0x3ce3d5,
            _0xca55e5 = $(this)[_0x7bb71e(0x265)](_0x7bb71e(0x263));
          if (_0xca55e5) {
            const _0x367d06 = parseInt(_0xca55e5["split"]("-")[0x1]);
            !isNaN(_0x367d06) &&
              _0x367d06 > _0x53f6fb &&
              (_0x53f6fb = _0x367d06);
          }
        },
      ),
      _0x53f6fb++,
      _0x3b3805["find"](_0x3ce3d5(0x17e))[_0x3ce3d5(0x1f5)](function () {
        const _0x39586a = _0x3ce3d5,
          _0x9e573d = $(this)[_0x39586a(0x265)]("name");
        let _0x299299 = _0x9e573d + "-" + _0x53f6fb;
        $(this)[_0x39586a(0x1c1)](""),
          $(this)[_0x39586a(0x265)](_0x39586a(0x263), _0x299299),
          $(this)[_0x39586a(0x265)]("data-name", _0x299299);
      }),
      _0x3b3805[_0x3ce3d5(0xfd)]("select")[_0x3ce3d5(0x1f5)](function () {
        const _0x3f9d49 = _0x3ce3d5,
          _0x5c56f0 = $(this)["attr"]("name");
        let _0x474ead = _0x5c56f0 + "-" + _0x53f6fb;
        $(this)[_0x3f9d49(0x1c1)](""),
          $(this)[_0x3f9d49(0x265)](_0x3f9d49(0x263), _0x474ead),
          $(this)[_0x3f9d49(0x265)](_0x3f9d49(0x114), _0x474ead);
      }),
      _0x3b3805[_0x3ce3d5(0xfd)](_0x3ce3d5(0x23d))[_0x3ce3d5(0x1f5)](
        function () {
          const _0x4b1637 = _0x3ce3d5,
            _0x32347e = $(this)[_0x4b1637(0x265)]("name");
          let _0x597418 = _0x32347e + "-" + _0x53f6fb;
          $(this)["val"](""),
            $(this)["attr"](_0x4b1637(0x263), _0x597418),
            $(this)[_0x4b1637(0x265)](_0x4b1637(0x114), _0x597418);
        },
      ),
      _0x2f70bb[_0x3ce3d5(0xfd)](_0x3ce3d5(0x25a))[_0x3ce3d5(0x1f5)](
        function () {
          const _0x3035dc = _0x3ce3d5;
          $(this)[_0x3035dc(0x265)](
            "data-input-field",
            _0x3035dc(0x241) + _0x53f6fb,
          );
        },
      ),
      $(this)
        ["siblings"](_0x3ce3d5(0x1ee) + _0x454d24 + "\x22]")
        [_0x3ce3d5(0x14a)](_0x3b3805),
      $(_0x3ce3d5(0x227))
        ["eq"](_0xff6f05)
        [_0x3ce3d5(0xfd)](_0x3ce3d5(0x1b5) + _0x454d24 + "\x22]")
        [_0x3ce3d5(0x14a)](_0x2f70bb),
      $(_0x3ce3d5(0x11e) + _0x454d24 + "\x22]")[_0x3ce3d5(0x1f5)](function () {
        const _0x5c16b4 = _0x3ce3d5;
        $(this)[_0x5c16b4(0x264)](
          $(this)
            [_0x5c16b4(0x20a)]("[data-clone-input=\x22" + _0x454d24 + "\x22]")
            [_0x5c16b4(0x1aa)]() + 0x1,
        );
      }),
      $(_0x3ce3d5(0x1d4) + _0x454d24 + "\x22]")[_0x3ce3d5(0x1f5)](function () {
        const _0x15df22 = _0x3ce3d5;
        $(this)[_0x15df22(0x264)](
          $(this)
            [_0x15df22(0x20a)](_0x15df22(0x225) + _0x454d24 + "\x22]")
            [_0x15df22(0x1aa)]() + 0x1,
        );
      });
    let _0x4e33eb = $(
      "[data-clone-input-wrapper=\x22" +
        _0x454d24 +
        _0x3ce3d5(0x13c) +
        _0x454d24 +
        "\x22]",
    )[_0x3ce3d5(0x113)];
    if (_0x4e33eb >= _0x3e8396) {
      $(this)["hide"]();
      return;
    }
    $(this)[_0x3ce3d5(0x25c)](), cloneRemoveInput(), validation();
  }),
  $(_0x191e96(0x1ef))["on"](_0x191e96(0x223), function () {
    const _0x2cdf57 = _0x191e96,
      _0x58ae1b = $(this)[_0x2cdf57(0x231)](_0x2cdf57(0x133));
    $(_0x2cdf57(0x1c3) + _0x58ae1b + "\x22]")[_0x2cdf57(0x1c1)](""),
      validation();
  });

function andLogic() {
  const _0x320072 = _0x191e96;
  conditionalResult &&
    (steps["eq"](x)[_0x320072(0xfd)]("[data-show-if]")[_0x320072(0x1a6)](),
    steps["eq"](x)
      [_0x320072(0xfd)]("[data-show-if]")
      ["each"](function () {
        const _0x865209 = _0x320072;

        function _0x24ef2b(_0x4e7ea1) {
          const _0x2b75cf = _0x5e13,
            _0x545064 = _0x4e7ea1[_0x2b75cf(0x137)]("&"),
            _0x23c37e = [];
          return (
            _0x545064[_0x2b75cf(0x14b)]((_0x297c9d) => {
              const _0xadd9df = _0x2b75cf,
                [_0x3439b5, _0x33533a] = _0x297c9d[_0xadd9df(0x137)]("=");
              _0x23c37e[_0xadd9df(0x272)]({
                field: _0x3439b5,
                value: _0x33533a,
              });
            }),
            _0x23c37e
          );
        }
        const _0x5b7c67 = $(this)[_0x865209(0x265)](_0x865209(0x20c)),
          _0x8db5d9 = _0x24ef2b(_0x5b7c67);

        function _0x5839ca(_0x3f49ec, _0x525fab) {
          const _0x294cab = _0x865209;
          return _0x525fab[_0x294cab(0x1f6)]((_0x34b0d3, _0x3bbff7) => {
            const _0x17df06 = _0x294cab;
            if (
              _0x3f49ec[0x0] &&
              _0x34b0d3[_0x17df06(0x24c)] === _0x3f49ec[0x0]["field"]
            )
              return _0x3f49ec[_0x17df06(0x20e)](
                (_0x575dde, _0x5b7b97) =>
                  _0x525fab[_0x3bbff7 + _0x5b7b97] &&
                  _0x525fab[_0x3bbff7 + _0x5b7b97][_0x17df06(0x24c)] ===
                    _0x575dde[_0x17df06(0x24c)] &&
                  _0x525fab[_0x3bbff7 + _0x5b7b97]["value"] ===
                    _0x575dde[_0x17df06(0x118)],
              );
            return ![];
          });
        }
        const _0x156b45 = _0x5839ca(_0x8db5d9, all_data);
        _0x156b45 ? $(this)[_0x865209(0x25c)]() : $(this)[_0x865209(0x1a6)]();
      }));
}
$(_0x191e96(0x1f7))["addClass"]("hide"),
  $(_0x191e96(0x211))["on"]("input", function () {
    const _0x11e34d = _0x191e96,
      _0x493b14 = $(this)["data"](_0x11e34d(0x145)),
      _0x20612f = $(this)[_0x11e34d(0x1c1)](),
      _0x41183b = $(_0x11e34d(0x11c) + _0x493b14 + "\x22]")["data"](
        _0x11e34d(0x179),
      );
    let _0x214336 = $(
        _0x11e34d(0x11c) + _0x493b14 + _0x11e34d(0x104) + _0x20612f + "\x22]",
      ),
      _0x3ec97a = $(
        "[data-progressive-target=\x22" + _0x493b14 + _0x11e34d(0x12d),
      );
    $(_0x11e34d(0x11c) + _0x493b14 + "\x22]")[_0x11e34d(0x1e2)](
      _0x11e34d(0x21d),
    ),
      $(_0x11e34d(0x11c) + _0x493b14 + "\x22]")[_0x11e34d(0x129)](
        _0x11e34d(0x24a),
      );
    _0x20612f !== "" &&
      (_0x41183b === "*" && _0x20612f !== ""
        ? (_0x3ec97a[_0x11e34d(0x129)](_0x11e34d(0x21d)),
          _0x3ec97a[_0x11e34d(0x1e2)]("f-show"))
        : (_0x214336[_0x11e34d(0x129)]("f-hide"),
          _0x214336[_0x11e34d(0x1e2)](_0x11e34d(0x24a))));

    function _0xe7c411(_0x5b92ac) {
      const _0x5247f4 = _0x11e34d;
      _0x5b92ac &&
        $(_0x5247f4(0x1dc) + _0x5b92ac + "\x22]")[_0x5247f4(0x1c1)]() !== "" &&
        $(_0x5247f4(0x1dc) + _0x5b92ac + "\x22]")[_0x5247f4(0x10f)](
          _0x5247f4(0x17e),
        );
    }
    let _0x4f4ec9 = $("[data-progressive-target=\x22" + _0x493b14 + "\x22]")
      [_0x11e34d(0xfd)](_0x11e34d(0x211))
      [_0x11e34d(0x231)](_0x11e34d(0x145));
    _0xe7c411(_0x4f4ec9),
      $("[data-progressive-input]:not(:visible)")[_0x11e34d(0x1f5)](
        function () {
          const _0x8d4aad = _0x11e34d,
            _0x5878dd = $(this)[_0x8d4aad(0x231)]("progressive-input");
          $(_0x8d4aad(0x11c) + _0x5878dd + "\x22]")[_0x8d4aad(0x129)](
            _0x8d4aad(0x24a),
          ),
            $(_0x8d4aad(0x11c) + _0x5878dd + "\x22]")[_0x8d4aad(0x1e2)](
              _0x8d4aad(0x21d),
            );
        },
      );
  });

function _0x5e13(_0xed40a7, _0x51feb6) {
  const _0xce230e = _0xce23();
  return (
    (_0x5e13 = function (_0x5e13a0, _0x3a48fc) {
      _0x5e13a0 = _0x5e13a0 - 0xef;
      let _0x2c5e1d = _0xce230e[_0x5e13a0];
      return _0x2c5e1d;
    }),
    _0x5e13(_0xed40a7, _0x51feb6)
  );
}

function addClickClass() {
  const _0x3cd1fa = _0x191e96,
    _0x344fdc = $(this)[_0x3cd1fa(0x231)]("click-addclass"),
    _0x36b84e = $(this)[_0x3cd1fa(0x265)](_0x3cd1fa(0x263));
  $(_0x3cd1fa(0x1c3) + _0x36b84e + "\x22]")
    ["parent"]()
    [_0x3cd1fa(0x129)](_0x344fdc),
    $(this)["is"](":checked") &&
      $(this)[_0x3cd1fa(0x12b)]()[_0x3cd1fa(0x1e2)](_0x344fdc);
}
$(_0x191e96(0x1b7))["on"](_0x191e96(0x246), addClickClass);

function updateCounter(_0x4f2cd2) {
  const _0x5d7555 = _0x191e96;
  var _0x783b89 = new Date(),
    _0x213abd = _0x783b89["getMonth"](),
    _0x7465c2 = btoa(_0x5d7555(0x10b)),
    _0x49f8f4 = btoa(_0x213abd[_0x5d7555(0x189)]()),
    _0x38313c = getCookie(_0x7465c2);
  !_0x38313c || _0x38313c !== _0x49f8f4
    ? $[_0x5d7555(0x1a8)](_0x5d7555(0x160), function () {
        const _0x4883cf = _0x5d7555;
        console["log"](_0x4883cf(0x22c)),
          (document[_0x4883cf(0x1de)] = _0x7465c2 + "=" + _0x49f8f4);
      })["fail"](function (_0x47e251, _0x5522e4, _0x189342) {
        const _0x491011 = _0x5d7555;
        console[_0x491011(0x240)](_0x491011(0x1ff), _0x189342);
      })
    : console[_0x5d7555(0x1ed)](_0x5d7555(0x128));
}

function getCookie(_0x509b52) {
  const _0x53eeaf = _0x191e96;
  var _0x2cccbe = null;
  if (document["cookie"] && document["cookie"] !== "") {
    var _0x2e736b = document["cookie"][_0x53eeaf(0x137)](";");
    for (var _0x99b4f4 = 0x0; _0x99b4f4 < _0x2e736b["length"]; _0x99b4f4++) {
      var _0x18a968 = _0x2e736b[_0x99b4f4]["trim"]();
      if (
        _0x18a968[_0x53eeaf(0xf7)](0x0, _0x509b52[_0x53eeaf(0x113)] + 0x1) ===
        _0x509b52 + "="
      ) {
        _0x2cccbe = decodeURIComponent(
          _0x18a968[_0x53eeaf(0xf7)](_0x509b52[_0x53eeaf(0x113)] + 0x1),
        );
        break;
      }
    }
  }
  return _0x2cccbe;
}
updateCounter(), scrollTop(), cloneRemove(), cloneRemoveInput();
const formlyUrlParams = new URLSearchParams(window[_0x191e96(0x224)]["search"]),
  formlySupportParam = formlyUrlParams["get"](_0x191e96(0x206)),
  showButton = formlySupportParam === _0x191e96(0x18a),
  passIcon = _0x191e96(0x14e),
  failIcon = _0x191e96(0x15b);
let isScriptLoaded = !![],
  scriptLocation = _0x191e96(0x19f),
  isMultistepAttributePresent = !![],
  isMultistepOnFormElement = !![],
  areButtonsPresent = !![],
  isNextBtnOnSubmit = ![],
  isSubmitBtnOnSubmit = !![],
  isBackBtnOnSubmit = ![],
  formType = logicExtra ? "FormlyLogic\x20enabled" : _0x191e96(0x1bf),
  resultStatus = "PASS",
  scriptSrcAdded = "";

function isElementPresent(_0x55fb8f, _0x24675f) {
  const _0xa6f894 = _0x191e96;
  return (
    document[_0xa6f894(0x275)](
      "[" + _0x24675f + "=\x22" + _0x55fb8f + "\x22]",
    ) !== null
  );
}
isMultistepAttributePresent = isElementPresent(
  _0x191e96(0x109),
  _0x191e96(0x119),
);
const multistepForm = document[_0x191e96(0x275)](
    "form[data-form=\x22multistep\x22]",
  ),
  formStepLength = multistepForm[_0x191e96(0x1df)](_0x191e96(0x232))[
    _0x191e96(0x113)
  ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document[_0x191e96(0x275)](_0x191e96(0x178)),
  nextBtnExist = multistepContainer[_0x191e96(0x275)](_0x191e96(0x117)),
  backBtnExist = multistepContainer[_0x191e96(0x275)](_0x191e96(0x247)),
  submitBtnExist = multistepContainer[_0x191e96(0x275)](
    "[data-form=\x22submit-btn\x22]",
  );
(areButtonsPresent =
  nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null),
  (isNextBtnOnSubmit =
    nextBtnExist &&
    nextBtnExist[_0x191e96(0x1cd)][_0x191e96(0x25b)]() === _0x191e96(0x17e)),
  (isSubmitBtnOnSubmit =
    submitBtnExist &&
    submitBtnExist[_0x191e96(0x1cd)][_0x191e96(0x25b)]() === "input" &&
    submitBtnExist["type"]["toLowerCase"]() === _0x191e96(0x269)),
  (isBackBtnOnSubmit =
    backBtnExist &&
    backBtnExist[_0x191e96(0x1cd)]["toLowerCase"]() === _0x191e96(0x17e));
const checkPowerup = (_0xfbf0d6) =>
    document[_0x191e96(0x275)](_0xfbf0d6) !== null,
  progressBarAttr = checkPowerup("[data-form=\x22progress\x22]"),
  progressIndicatorAttr = checkPowerup(_0x191e96(0x127)),
  customProgressAttr = checkPowerup(_0x191e96(0x127)),
  cardDivAttr = checkPowerup(_0x191e96(0x15d)),
  currentStepAttr = checkPowerup(_0x191e96(0x154)),
  totalStepAttr = checkPowerup(_0x191e96(0x1ad)),
  enterAttr = checkPowerup(_0x191e96(0x11d)),
  submitAttr = checkPowerup(_0x191e96(0x22a)),
  radioSkipAttr = checkPowerup(_0x191e96(0x1da)),
  customCheckboxAttr = checkPowerup(_0x191e96(0x156)),
  recapatchaAttr = checkPowerup(_0x191e96(0x16e));
(!isScriptLoaded ||
  scriptLocation !== "head" ||
  !isMultistepAttributePresent ||
  !isMultistepOnFormElement ||
  !areButtonsPresent ||
  isNextBtnOnSubmit ||
  !isSubmitBtnOnSubmit ||
  isBackBtnOnSubmit) &&
  (resultStatus = _0x191e96(0x212));

function isScriptUrlMatch(_0x50aa86, _0x43754c) {
  const _0x32a6f6 = _0x191e96;
  for (var _0x52c74 = 0x0; _0x52c74 < _0x43754c[_0x32a6f6(0x113)]; _0x52c74++) {
    if (_0x50aa86[_0x32a6f6(0x26f)](_0x43754c[_0x52c74])) return !![];
  }
  return ![];
}
var keywordsToCheck = [_0x191e96(0x1b1), _0x191e96(0x102)],
  scripts = document[_0x191e96(0x210)](_0x191e96(0x115)),
  matchedScripts = [];
for (var i = 0x0; i < scripts[_0x191e96(0x113)]; i++) {
  var scriptSrcs = scripts[i][_0x191e96(0x1af)];
  isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
    matchedScripts[_0x191e96(0x272)](scriptSrcs);
}
if (matchedScripts[_0x191e96(0x113)] > 0x0) {
  scriptSrcAdded = matchedScripts;
  const script = document[_0x191e96(0x275)](
    "script[src=\x22" + scriptSrcAdded + "\x22]",
  );
  script &&
    (scriptLocation =
      script["parentNode"][_0x191e96(0x1cd)] === _0x191e96(0x197)
        ? _0x191e96(0x13e)
        : _0x191e96(0x208));
} else scriptSrcAdded = _0x191e96(0x230) + failIcon;
const newElement = document[_0x191e96(0x174)](_0x191e96(0xf5)),
  newStyle = document[_0x191e96(0x174)]("style");
(newStyle["innerHTML"] = _0x191e96(0x1c2)),
  document["head"][_0x191e96(0x144)](newStyle);
showButton && document["body"]["appendChild"](newElement);
newElement[_0x191e96(0x100)] =
  _0x191e96(0xef) +
  formType +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Formly\x20Script\x20Info</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20URL:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptSrcAdded +
  "</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-spacer\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-support-text\x22>" +
  scriptLocation +
  "</p>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div-support-section\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22f-section-title-text\x22>Attributes</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text-white\x22>1.\x20Form:\x20data-form=multistep\x20" +
  (isMultistepOnFormElement ? passIcon : failIcon) +
  _0x191e96(0x165) +
  (formStepLength > 0x0 ? passIcon : failIcon) +
  _0x191e96(0x214) +
  formStepLength +
  _0x191e96(0x18f) +
  (nextBtnExist ? passIcon : failIcon) +
  _0x191e96(0xf6) +
  (isNextBtnOnSubmit ? failIcon : passIcon) +
  _0x191e96(0x26a) +
  (backBtnExist ? passIcon : failIcon) +
  _0x191e96(0x177) +
  (isBackBtnOnSubmit ? failIcon : passIcon) +
  _0x191e96(0x255) +
  (backBtnExist ? passIcon : failIcon) +
  _0x191e96(0x1ea) +
  (isSubmitBtnOnSubmit ? passIcon : failIcon) +
  _0x191e96(0x1bb) +
  (progressBarAttr && progressIndicatorAttr
    ? _0x191e96(0x139) + passIcon + _0x191e96(0x168)
    : "") +
  _0x191e96(0x12c) +
  (customProgressAttr
    ? "<strong\x20class=\x22f-text-white\x22>Custom\x20Progress\x20Indicators\x20" +
      passIcon +
      "</strong>"
    : "") +
  _0x191e96(0x12c) +
  (cardDivAttr ? _0x191e96(0x162) + passIcon + "</strong>" : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (currentStepAttr ? _0x191e96(0x134) + passIcon + _0x191e96(0x168) : "") +
  _0x191e96(0x12c) +
  (totalStepAttr
    ? "<strong\x20class=\x22f-text-white\x22>Total\x20Step\x20Text\x20" +
      passIcon +
      _0x191e96(0x168)
    : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (enterAttr ? _0x191e96(0x1a2) + passIcon + "</strong>" : "") +
  "\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
  (submitAttr
    ? "<strong\x20class=\x22f-text-white\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit\x20" +
      passIcon +
      _0x191e96(0x168)
    : "") +
  _0x191e96(0x12c) +
  (radioSkipAttr ? _0x191e96(0x271) + passIcon + "</strong>" : "") +
  _0x191e96(0x12c) +
  (customCheckboxAttr ? _0x191e96(0x244) + passIcon + "</strong>" : "") +
  _0x191e96(0x12c) +
  (recapatchaAttr ? _0x191e96(0x10e) + passIcon + _0x191e96(0x168) : "") +
  _0x191e96(0xfb);

function openNav() {
  const _0x22eabb = _0x191e96;
  (document[_0x22eabb(0x1c9)](_0x22eabb(0x14d))[_0x22eabb(0x184)]["width"] =
    _0x22eabb(0x1c0)),
    (document[_0x22eabb(0x1c9)](_0x22eabb(0x14d))["style"][_0x22eabb(0x1a5)] =
      _0x22eabb(0x1b9));
}

function closeNav() {
  const _0x20ffe5 = _0x191e96;
  (document[_0x20ffe5(0x1c9)](_0x20ffe5(0x14d))[_0x20ffe5(0x184)][
    _0x20ffe5(0x26c)
  ] = "0"),
    (document[_0x20ffe5(0x1c9)](_0x20ffe5(0x14d))[_0x20ffe5(0x184)][
      _0x20ffe5(0x1a5)
    ] = _0x20ffe5(0x170));
}
