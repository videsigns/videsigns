// 19th August 2023
// Added alert if user exceeds 5 html videos and using vimeo and youtube functionality

const _0x50680c = _0xf08d;
(function (_0x45761d, _0x413f38) {
  const _0x3b4ff6 = _0xf08d,
    _0x590839 = _0x45761d();
  while (!![]) {
    try {
      const _0x19e411 =
        (-parseInt(_0x3b4ff6(0x1ca)) / 0x1) *
          (parseInt(_0x3b4ff6(0x1d8)) / 0x2) +
        (parseInt(_0x3b4ff6(0x1e2)) / 0x3) *
          (parseInt(_0x3b4ff6(0x1e6)) / 0x4) +
        (parseInt(_0x3b4ff6(0x1ff)) / 0x5) *
          (parseInt(_0x3b4ff6(0x1f4)) / 0x6) +
        (parseInt(_0x3b4ff6(0x215)) / 0x7) *
          (-parseInt(_0x3b4ff6(0x20b)) / 0x8) +
        (parseInt(_0x3b4ff6(0x1da)) / 0x9) *
          (parseInt(_0x3b4ff6(0x1f3)) / 0xa) +
        (parseInt(_0x3b4ff6(0x1f2)) / 0xb) *
          (-parseInt(_0x3b4ff6(0x200)) / 0xc) +
        (parseInt(_0x3b4ff6(0x1fc)) / 0xd) * (parseInt(_0x3b4ff6(0x1fd)) / 0xe);
      if (_0x19e411 === _0x413f38) break;
      else _0x590839["push"](_0x590839["shift"]());
    } catch (_0x6c5e72) {
      _0x590839["push"](_0x590839["shift"]());
    }
  }
})(_0x1f76, 0x31ec5);
function _0xf08d(_0x1fe2a1, _0xc33a41) {
  const _0x1f760c = _0x1f76();
  return (
    (_0xf08d = function (_0xf08d9a, _0x4b611c) {
      _0xf08d9a = _0xf08d9a - 0x1c5;
      let _0x46a3c4 = _0x1f760c[_0xf08d9a];
      return _0x46a3c4;
    }),
    _0xf08d(_0x1fe2a1, _0xc33a41)
  );
}
function initializeVideoPlayer(_0x3cb7c8) {
  const _0x5799f4 = _0xf08d,
    _0x543d96 = _0x3cb7c8["closest"](_0x5799f4(0x1cf)),
    _0x4d66b5 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x1e4)),
    _0x9cc9c2 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x1e7)),
    _0x13b64f = _0x543d96["querySelector"](
      "[f-data-video=\x22play-button\x22]"
    ),
    _0x1b5f4d = _0x543d96[_0x5799f4(0x1eb)](
      "[f-data-video=\x22pause-button\x22]"
    ),
    _0x33fd63 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x207)),
    _0x16a031 = _0x543d96[_0x5799f4(0x1eb)](
      "[f-data-video=\x22backward-button\x22]"
    ),
    _0x7a1807 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x212)),
    _0x24a8f7 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x1c9)),
    _0x1dbb99 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x20e)),
    _0x26ece9 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x1f9)),
    _0x56ba42 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x1fb)),
    _0x33bd61 = _0x543d96[_0x5799f4(0x1eb)](
      "[f-data-video=\x22fullscreen\x22]"
    ),
    _0x30e989 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x1f7)),
    _0x24a1f2 = _0x543d96["querySelector"](_0x5799f4(0x20c)),
    _0x2cdbe6 = _0x543d96[_0x5799f4(0x1eb)]("[f-data-video=\x22duration\x22]"),
    _0x30e9ab = _0x543d96["querySelector"](_0x5799f4(0x1d7)),
    _0x264c78 = _0x543d96[_0x5799f4(0x1eb)](_0x5799f4(0x1ed)),
    _0xd6c858 = _0x543d96[_0x5799f4(0x1d9)](_0x5799f4(0x1c6)),
    _0x25c152 = _0x543d96[_0x5799f4(0x1d9)](_0x5799f4(0x1de)),
    _0x19fa4f = _0x543d96[_0x5799f4(0x1eb)](
      "[f-data-video=\x22quality-text\x22]"
    ),
    _0xf67511 = _0x543d96[_0x5799f4(0x1eb)](
      "[f-data-video=\x22speed-text\x22]"
    ),
    _0x5a2e20 = document[_0x5799f4(0x1d9)](
      "[f-data-video=\x22video-element\x22]"
    );
  let _0x457a13 = 0x0;
  const _0x419750 = 0xa,
    _0x1b7b52 = 0xa;
  var _0x1cd83c = 0x0;
  function _0x175304(_0x3e6fa5) {
    const _0x5693dd = _0x5799f4,
      _0x2cee2b = Math[_0x5693dd(0x1d6)](_0x3e6fa5 / 0x3c)
        [_0x5693dd(0x1e1)]()
        ["padStart"](0x2, "0"),
      _0x258f7e = Math[_0x5693dd(0x1d6)](_0x3e6fa5 % 0x3c)
        [_0x5693dd(0x1e1)]()
        [_0x5693dd(0x1db)](0x2, "0");
    return _0x2cee2b + ":" + _0x258f7e;
  }
  function _0x36a43c(_0x4eaf09) {
    const _0x43f56b = _0x5799f4;
    _0x5a2e20[_0x43f56b(0x1c8)]((_0x27a124) => {
      _0x27a124 !== _0x4eaf09 && (_0x27a124["pause"](), _0x3c13c9(_0x27a124));
    });
  }
  function _0x3c13c9(_0x13997a) {
    const _0x5e9d2a = _0x5799f4,
      _0x5d51af = _0x13997a[_0x5e9d2a(0x1ef)]("[f-data-video=\x22wrapper\x22]"),
      _0x48715f = _0x5d51af[_0x5e9d2a(0x1eb)](_0x5e9d2a(0x211)),
      _0x215661 = _0x5d51af["querySelector"](_0x5e9d2a(0x1ec)),
      _0x5986fd = _0x5d51af[_0x5e9d2a(0x1eb)](_0x5e9d2a(0x1c9)),
      _0x57f37f = _0x5d51af[_0x5e9d2a(0x1eb)](_0x5e9d2a(0x20e));
    _0x48715f && (_0x48715f["style"][_0x5e9d2a(0x214)] = _0x5e9d2a(0x1d4)),
      _0x57f37f && (_0x57f37f[_0x5e9d2a(0x1ce)][_0x5e9d2a(0x214)] = "block"),
      _0x5986fd && (_0x5986fd[_0x5e9d2a(0x1ce)]["display"] = _0x5e9d2a(0x1fa)),
      _0x215661 &&
        (_0x215661[_0x5e9d2a(0x1ce)][_0x5e9d2a(0x214)] = _0x5e9d2a(0x1fa));
  }
  function _0x18ba69() {
    const _0x2d35f2 = _0x5799f4;
    _0x24a8f7 &&
      (_0x24a8f7[_0x2d35f2(0x1ce)][_0x2d35f2(0x214)] = _0x2d35f2(0x1fa)),
      _0x1b5f4d && (_0x1b5f4d[_0x2d35f2(0x1ce)][_0x2d35f2(0x214)] = "none"),
      _0x30e989 &&
        (_0x30e989[_0x2d35f2(0x1ce)][_0x2d35f2(0x214)] = _0x2d35f2(0x1fa)),
      _0x7a1807 &&
        (_0x7a1807[_0x2d35f2(0x1ce)][_0x2d35f2(0x214)] = _0x2d35f2(0x1fa)),
      _0x2cdbe6 &&
        (_0x2cdbe6["textContent"] = _0x175304(_0x3cb7c8[_0x2d35f2(0x206)])),
      (_0x3cb7c8["volume"] = _0x30e9ab ? _0x30e9ab[_0x2d35f2(0x1d5)] : 0x1);
  }
  function _0x39de49() {
    const _0x40497e = _0x5799f4;
    _0x36a43c(_0x3cb7c8),
      _0x3cb7c8[_0x40497e(0x1d3)](),
      _0x13b64f &&
        (_0x13b64f[_0x40497e(0x1ce)][_0x40497e(0x214)] = _0x40497e(0x1fa)),
      _0x1dbb99 && (_0x1dbb99[_0x40497e(0x1ce)]["display"] = _0x40497e(0x1fa)),
      _0x24a8f7 &&
        (_0x24a8f7[_0x40497e(0x1ce)][_0x40497e(0x214)] = _0x40497e(0x1d4)),
      _0x1b5f4d && (_0x1b5f4d[_0x40497e(0x1ce)]["display"] = _0x40497e(0x1d4)),
      _0x7a1807 && (_0x7a1807["style"][_0x40497e(0x214)] = _0x40497e(0x1fa));
  }
  function _0xebb6f0() {
    const _0x5efb23 = _0x5799f4;
    _0x3cb7c8[_0x5efb23(0x202)](),
      _0x13b64f && (_0x13b64f[_0x5efb23(0x1ce)][_0x5efb23(0x214)] = "block"),
      _0x1dbb99 &&
        (_0x1dbb99[_0x5efb23(0x1ce)][_0x5efb23(0x214)] = _0x5efb23(0x1d4)),
      _0x24a8f7 &&
        (_0x24a8f7[_0x5efb23(0x1ce)][_0x5efb23(0x214)] = _0x5efb23(0x1fa)),
      _0x1b5f4d &&
        (_0x1b5f4d[_0x5efb23(0x1ce)][_0x5efb23(0x214)] = _0x5efb23(0x1fa));
  }
  function _0x59610e() {
    const _0x1f6539 = _0x5799f4;
    _0x3cb7c8[_0x1f6539(0x1dd)] += _0x419750;
  }
  function _0x463cdb() {
    const _0x34c941 = _0x5799f4;
    _0x3cb7c8[_0x34c941(0x1dd)] -= _0x1b7b52;
  }
  function _0xb18a0() {
    const _0x1ba84f = _0x5799f4;
    !document[_0x1ba84f(0x1cb)]
      ? _0x3cb7c8[_0x1ba84f(0x217)]()[_0x1ba84f(0x1cd)]((_0x351a3e) => {
          const _0x5f3315 = _0x1ba84f;
          console[_0x5f3315(0x1f5)](
            "Fullscreen\x20request\x20failed:",
            _0x351a3e
          );
        })
      : document[_0x1ba84f(0x1f1)]();
  }
  function _0x3486ed() {
    const _0x413cf8 = _0x5799f4;
    _0x3cb7c8[_0x413cf8(0x1cc)] ? _0x39de49() : _0xebb6f0();
  }
  function _0x2f0b0e() {
    const _0x53d046 = _0x5799f4;
    (_0x3cb7c8[_0x53d046(0x1dd)] = 0x0), _0x39de49();
  }
  function _0x5176fd(_0x4dcff9) {
    const _0xb11299 = _0x5799f4,
      _0xfeaf93 =
        _0x4dcff9[_0xb11299(0x1dc)] - _0x56ba42[_0xb11299(0x20f)]()["left"],
      _0x1aa16b =
        (_0xfeaf93 * _0x3cb7c8["duration"]) / _0x56ba42[_0xb11299(0x204)];
    _0x3cb7c8["currentTime"] = _0x1aa16b;
  }
  function _0x50496c(_0x153f71) {
    const _0x44ef7a = _0x5799f4;
    console["log"](Number(_0x153f71)),
      (_0x3cb7c8["playbackRate"] = _0x153f71),
      _0xf67511 &&
        (Number(_0x153f71) === 0x1
          ? (_0xf67511[_0x44ef7a(0x210)] = "Normal")
          : (_0xf67511[_0x44ef7a(0x210)] = _0x153f71 + "x"));
  }
  function _0x6b5237(_0x3f9a53) {
    const _0x29f667 = _0x5799f4;
    _0x1cd83c = _0x3cb7c8[_0x29f667(0x1dd)];
    _0x19fa4f && (_0x19fa4f[_0x29f667(0x210)] = _0x3f9a53);
    var _0x19a0f7 = _0x3cb7c8[_0x29f667(0x1eb)](
      _0x29f667(0x20a) + _0x3f9a53 + "\x22]"
    );
    (_0x3cb7c8[_0x29f667(0x209)] = _0x19a0f7[_0x29f667(0x209)]),
      _0x3cb7c8[_0x29f667(0x205)](),
      (_0x3cb7c8[_0x29f667(0x1dd)] = _0x1cd83c),
      _0x39de49();
  }
  function _0x593f89() {
    const _0x4aeac9 = _0x5799f4;
    _0x30e9ab && (_0x3cb7c8[_0x4aeac9(0x1e3)] = _0x30e9ab[_0x4aeac9(0x1d5)]);
  }
  function _0x530934() {
    const _0x155e12 = _0x5799f4;
    (_0x457a13 =
      (_0x3cb7c8[_0x155e12(0x1dd)] / _0x3cb7c8[_0x155e12(0x206)]) * 0x64),
      (_0x26ece9["style"][_0x155e12(0x1f0)] = _0x457a13 + "%"),
      (_0x24a1f2["textContent"] = _0x175304(_0x3cb7c8[_0x155e12(0x1dd)])),
      _0x3cb7c8[_0x155e12(0x1dd)] >= _0x3cb7c8[_0x155e12(0x206)] &&
        (_0x7a1807 && (_0x7a1807["style"]["display"] = _0x155e12(0x1d4)),
        _0xebb6f0());
  }
  _0x3cb7c8[_0x5799f4(0x213)](_0x5799f4(0x1d2), () => {
    const _0x17f5d8 = _0x5799f4;
    _0x2cdbe6 &&
      (_0x2cdbe6[_0x17f5d8(0x210)] = _0x175304(_0x3cb7c8[_0x17f5d8(0x206)]));
  });
  function _0x26ce72() {
    const _0x56daf8 = _0x5799f4;
    _0x30e9ab &&
      (_0x3cb7c8["volume"] > 0x0
        ? ((_0x30e9ab[_0x56daf8(0x1d5)] = 0x0),
          (_0x3cb7c8[_0x56daf8(0x1e3)] = 0x0),
          (_0x264c78[_0x56daf8(0x1ce)][_0x56daf8(0x1ee)] = 0.5))
        : ((_0x30e9ab["value"] = 0.5),
          (_0x3cb7c8["volume"] = 0.5),
          (_0x264c78[_0x56daf8(0x1ce)][_0x56daf8(0x1ee)] = 0x1)));
  }
  function _0x3cee8d(_0xe8bd36) {
    const _0x318162 = _0x5799f4,
      _0x4103b3 = _0xe8bd36[_0x318162(0x201)][_0x318162(0x1e0)]();
    (_0x4103b3 === "\x20" ||
      _0x4103b3 === _0x318162(0x20d) ||
      _0x4103b3 === _0x318162(0x1e8)) &&
      _0xe8bd36[_0x318162(0x1ea)]();
    if (!_0x3cb7c8["paused"])
      switch (_0x4103b3) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          const _0x355bad = parseInt(_0x4103b3) * 0xa,
            _0x441da3 = (_0x355bad / 0x64) * _0x3cb7c8[_0x318162(0x206)];
          _0x3cb7c8[_0x318162(0x1dd)] = _0x441da3;
          break;
        }
        case "\x20":
        case "k":
          _0x3cb7c8[_0x318162(0x1cc)] ? _0x39de49() : _0xebb6f0();
          break;
        case "arrowleft":
          _0x463cdb();
          break;
        case _0x318162(0x203):
          _0x59610e();
          break;
        case _0x318162(0x1e8):
          _0x3cb7c8[_0x318162(0x1e3)] += 0.1;
          _0x30e9ab &&
            (_0x30e9ab[_0x318162(0x1d5)] = _0x3cb7c8[_0x318162(0x1e3)]);
          break;
        case _0x318162(0x20d):
          _0x3cb7c8["volume"] -= 0.1;
          _0x30e9ab && (_0x30e9ab[_0x318162(0x1d5)] = _0x3cb7c8["volume"]);
          break;
        case "m":
          _0x3cb7c8[_0x318162(0x1f6)] = !_0x3cb7c8["muted"];
          break;
        case "f":
          _0xb18a0();
          break;
        case "l":
          _0x3cb7c8["loop"] = !_0x3cb7c8[_0x318162(0x1c5)];
          break;
      }
  }
  _0x9cc9c2 && _0x9cc9c2[_0x5799f4(0x213)](_0x5799f4(0x1df), _0x3486ed),
    _0x13b64f && _0x13b64f[_0x5799f4(0x213)](_0x5799f4(0x1df), _0x39de49),
    _0x1b5f4d && _0x1b5f4d[_0x5799f4(0x213)](_0x5799f4(0x1df), _0xebb6f0),
    _0x33fd63 && _0x33fd63["addEventListener"]("click", _0x59610e),
    _0x16a031 && _0x16a031[_0x5799f4(0x213)]("click", _0x463cdb),
    _0x7a1807 && _0x7a1807[_0x5799f4(0x213)](_0x5799f4(0x1df), _0x2f0b0e),
    _0x33bd61 && _0x33bd61[_0x5799f4(0x213)](_0x5799f4(0x1df), _0xb18a0),
    _0x56ba42 && _0x56ba42["addEventListener"](_0x5799f4(0x1df), _0x5176fd),
    _0x30e9ab && _0x30e9ab[_0x5799f4(0x213)](_0x5799f4(0x1fe), _0x593f89),
    _0x264c78 && _0x264c78[_0x5799f4(0x213)]("click", _0x26ce72),
    _0xd6c858 &&
      _0xd6c858["forEach"](function (_0xe2a276) {
        const _0xf1c634 = _0x5799f4;
        _0xe2a276[_0xf1c634(0x213)](_0xf1c634(0x1df), function () {
          const _0x43bada = _0xf1c634;
          var _0xf2e4dc = this[_0x43bada(0x216)]("f-data-video-speed");
          console[_0x43bada(0x208)](_0x43bada(0x1e5), _0xf2e4dc),
            _0x50496c(_0xf2e4dc);
        });
      }),
    _0x25c152 &&
      _0x25c152[_0x5799f4(0x1c8)](function (_0x1b3373) {
        const _0x4c2269 = _0x5799f4;
        _0x1b3373[_0x4c2269(0x213)](_0x4c2269(0x1df), function () {
          const _0x3fc9a2 = _0x4c2269;
          var _0x4d9e60 = this[_0x3fc9a2(0x216)](_0x3fc9a2(0x1d0));
          _0x6b5237(_0x4d9e60);
        });
      }),
    _0x3cb7c8 && _0x3cb7c8[_0x5799f4(0x213)]("timeupdate", _0x530934),
    document["addEventListener"](_0x5799f4(0x1f8), _0x3cee8d),
    _0x18ba69();
}
const htmlVids = document[_0x50680c(0x1d9)](_0x50680c(0x1c7)),
  maxIterations = 0x5,
  ytEl = document["querySelectorAll"]("[f-data-video=\x22youtube-element\x22]"),
  vimEl = document["querySelectorAll"]("[f-data-video=\x22vimeo-element\x22]");
(maxIterations > 0x5 ||
  vimEl[_0x50680c(0x1e9)] > 0x0 ||
  ytEl[_0x50680c(0x1e9)] > 0x0) &&
  alert(_0x50680c(0x1d1));
function _0x1f76() {
  const _0x3c05da = [
    "86150UdTbNG",
    "281958gwMTDY",
    "error",
    "muted",
    "[f-data-video=\x22minimize\x22]",
    "keydown",
    "[f-data-video=\x22progress\x22]",
    "none",
    "[f-data-video=\x22progress-bar\x22]",
    "682604IfeUVM",
    "126GSveDX",
    "input",
    "40zeEgwt",
    "132fKptYq",
    "key",
    "pause",
    "arrowright",
    "offsetWidth",
    "load",
    "duration",
    "[f-data-video=\x22forward-button\x22]",
    "log",
    "src",
    "source[f-data-video-src-quality=\x22",
    "777488CUjoBJ",
    "[f-data-video=\x22current-time\x22]",
    "arrowdown",
    "[f-data-video=\x22play-icon\x22]",
    "getBoundingClientRect",
    "textContent",
    "[f-data-video=\x22play-button\x22]",
    "[f-data-video=\x22replay-button\x22]",
    "addEventListener",
    "display",
    "14zcpWbH",
    "getAttribute",
    "requestFullscreen",
    "loop",
    "[f-data-video-speed]",
    "[f-data-video=\x22video-element\x22]",
    "forEach",
    "[f-data-video=\x22pause-icon\x22]",
    "8952rJgylP",
    "fullscreenElement",
    "paused",
    "catch",
    "style",
    "[f-data-video=\x22wrapper\x22]",
    "f-data-video-quality",
    "You\x20have\x20exceeded\x20the\x20free\x20plan.\x20Kindly\x20consider\x20upgrading\x20your\x20subscription\x20to\x20enable\x20the\x20inclusion\x20of\x20more\x20than\x20five\x20HTML\x20videos\x20and\x20to\x20utilize\x20the\x20functionality\x20of\x20both\x20Vimeo\x20and\x20YouTube\x20platforms.",
    "loadedmetadata",
    "play",
    "block",
    "value",
    "floor",
    "[f-data-video=\x22volume-slider\x22]",
    "68aaKaJO",
    "querySelectorAll",
    "63YvvLNl",
    "padStart",
    "pageX",
    "currentTime",
    "[f-data-video-quality]",
    "click",
    "toLowerCase",
    "toString",
    "63Bkmddv",
    "volume",
    "[f-data-video=\x22poster-button\x22]",
    "Clicked\x20on\x20button\x20with\x20speed:",
    "34652zljBSX",
    "[f-data-video=\x22overlay\x22]",
    "arrowup",
    "length",
    "preventDefault",
    "querySelector",
    "[f-data-video=\x22pause-button\x22]",
    "[f-data-video=\x22volume-button\x22]",
    "opacity",
    "closest",
    "width",
    "exitFullscreen",
    "387519nxpiMz"
  ];
  _0x1f76 = function () {
    return _0x3c05da;
  };
  return _0x1f76();
}
for (
  let i = 0x0;
  i < Math["min"](maxIterations, htmlVids[_0x50680c(0x1e9)]);
  i++
) {
  const htmlVid = htmlVids[i];
  initializeVideoPlayer(htmlVid);
}
