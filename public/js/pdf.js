/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2020 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */
!function webpackUniversalModuleDefinition(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], t) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = t() : e["pdfjs-dist/build/pdf"] = e.pdfjsLib = t()
}(this, (function () {
    return (() => {
        "use strict";
        var __webpack_modules__ = [(e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            Object.defineProperty(t, "addLinkAttributes", {
                enumerable: !0, get: function () {
                    return n.addLinkAttributes
                }
            });
            Object.defineProperty(t, "getFilenameFromUrl", {
                enumerable: !0, get: function () {
                    return n.getFilenameFromUrl
                }
            });
            Object.defineProperty(t, "LinkTarget", {
                enumerable: !0, get: function () {
                    return n.LinkTarget
                }
            });
            Object.defineProperty(t, "loadScript", {
                enumerable: !0, get: function () {
                    return n.loadScript
                }
            });
            Object.defineProperty(t, "PDFDateString", {
                enumerable: !0, get: function () {
                    return n.PDFDateString
                }
            });
            Object.defineProperty(t, "RenderingCancelledException", {
                enumerable: !0, get: function () {
                    return n.RenderingCancelledException
                }
            });
            Object.defineProperty(t, "build", {
                enumerable: !0, get: function () {
                    return s.build
                }
            });
            Object.defineProperty(t, "getDocument", {
                enumerable: !0, get: function () {
                    return s.getDocument
                }
            });
            Object.defineProperty(t, "LoopbackPort", {
                enumerable: !0, get: function () {
                    return s.LoopbackPort
                }
            });
            Object.defineProperty(t, "PDFDataRangeTransport", {
                enumerable: !0, get: function () {
                    return s.PDFDataRangeTransport
                }
            });
            Object.defineProperty(t, "PDFWorker", {
                enumerable: !0, get: function () {
                    return s.PDFWorker
                }
            });
            Object.defineProperty(t, "version", {
                enumerable: !0, get: function () {
                    return s.version
                }
            });
            Object.defineProperty(t, "CMapCompressionType", {
                enumerable: !0, get: function () {
                    return i.CMapCompressionType
                }
            });
            Object.defineProperty(t, "createObjectURL", {
                enumerable: !0, get: function () {
                    return i.createObjectURL
                }
            });
            Object.defineProperty(t, "createPromiseCapability", {
                enumerable: !0, get: function () {
                    return i.createPromiseCapability
                }
            });
            Object.defineProperty(t, "createValidAbsoluteUrl", {
                enumerable: !0, get: function () {
                    return i.createValidAbsoluteUrl
                }
            });
            Object.defineProperty(t, "InvalidPDFException", {
                enumerable: !0, get: function () {
                    return i.InvalidPDFException
                }
            });
            Object.defineProperty(t, "MissingPDFException", {
                enumerable: !0, get: function () {
                    return i.MissingPDFException
                }
            });
            Object.defineProperty(t, "OPS", {
                enumerable: !0, get: function () {
                    return i.OPS
                }
            });
            Object.defineProperty(t, "PasswordResponses", {
                enumerable: !0, get: function () {
                    return i.PasswordResponses
                }
            });
            Object.defineProperty(t, "PermissionFlag", {
                enumerable: !0, get: function () {
                    return i.PermissionFlag
                }
            });
            Object.defineProperty(t, "removeNullCharacters", {
                enumerable: !0, get: function () {
                    return i.removeNullCharacters
                }
            });
            Object.defineProperty(t, "shadow", {
                enumerable: !0, get: function () {
                    return i.shadow
                }
            });
            Object.defineProperty(t, "UnexpectedResponseException", {
                enumerable: !0, get: function () {
                    return i.UnexpectedResponseException
                }
            });
            Object.defineProperty(t, "UNSUPPORTED_FEATURES", {
                enumerable: !0, get: function () {
                    return i.UNSUPPORTED_FEATURES
                }
            });
            Object.defineProperty(t, "Util", {
                enumerable: !0, get: function () {
                    return i.Util
                }
            });
            Object.defineProperty(t, "VerbosityLevel", {
                enumerable: !0, get: function () {
                    return i.VerbosityLevel
                }
            });
            Object.defineProperty(t, "AnnotationLayer", {
                enumerable: !0, get: function () {
                    return a.AnnotationLayer
                }
            });
            Object.defineProperty(t, "apiCompatibilityParams", {
                enumerable: !0, get: function () {
                    return o.apiCompatibilityParams
                }
            });
            Object.defineProperty(t, "GlobalWorkerOptions", {
                enumerable: !0, get: function () {
                    return l.GlobalWorkerOptions
                }
            });
            Object.defineProperty(t, "renderTextLayer", {
                enumerable: !0, get: function () {
                    return c.renderTextLayer
                }
            });
            Object.defineProperty(t, "SVGGraphics", {
                enumerable: !0, get: function () {
                    return h.SVGGraphics
                }
            });
            var n = r(1), s = r(5), i = r(2), a = r(19), o = r(9), l = r(12), c = r(21), h = r(22);
            {
                const {isNodeJS: e} = r(4);
                if (e) {
                    const e = r(23).PDFNodeStream;
                    (0, s.setPDFNetworkStreamFactory)((t => new e(t)))
                } else {
                    const e = r(26).PDFNetworkStream;
                    let t;
                    (0, n.isFetchSupported)() && (t = r(27).PDFFetchStream);
                    (0, s.setPDFNetworkStreamFactory)((r => t && (0, n.isValidFetchUrl)(r.url) ? new t(r) : new e(r)))
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.addLinkAttributes = function addLinkAttributes(e, {url: t, target: r, rel: i, enabled: o = !0} = {}) {
                (0, n.assert)(t && "string" == typeof t, 'addLinkAttributes: A valid "url" parameter must provided.');
                const l = (0, n.removeNullCharacters)(t);
                if (o) e.href = e.title = l; else {
                    e.href = "";
                    e.title = `Disabled: ${l}`;
                    e.onclick = () => !1
                }
                let c = "";
                switch (r) {
                    case a.NONE:
                        break;
                    case a.SELF:
                        c = "_self";
                        break;
                    case a.BLANK:
                        c = "_blank";
                        break;
                    case a.PARENT:
                        c = "_parent";
                        break;
                    case a.TOP:
                        c = "_top"
                }
                e.target = c;
                e.rel = "string" == typeof i ? i : s
            };
            t.deprecated = function deprecated(e) {
                console.log("Deprecated API usage: " + e)
            };
            t.getFilenameFromUrl = function getFilenameFromUrl(e) {
                const t = e.indexOf("#"), r = e.indexOf("?"), n = Math.min(t > 0 ? t : e.length, r > 0 ? r : e.length);
                return e.substring(e.lastIndexOf("/", n) + 1, n)
            };
            t.isFetchSupported = isFetchSupported;
            t.isValidFetchUrl = isValidFetchUrl;
            t.loadScript = function loadScript(e, t = !1) {
                return new Promise(((r, n) => {
                    const s = document.createElement("script");
                    s.src = e;
                    s.onload = function (e) {
                        t && s.remove();
                        r(e)
                    };
                    s.onerror = function () {
                        n(new Error(`Cannot load script at: ${s.src}`))
                    };
                    (document.head || document.documentElement).appendChild(s)
                }))
            };
            t.StatTimer = t.RenderingCancelledException = t.PDFDateString = t.PageViewport = t.LinkTarget = t.DOMSVGFactory = t.DOMCMapReaderFactory = t.DOMCanvasFactory = t.DEFAULT_LINK_REL = t.BaseCMapReaderFactory = t.BaseCanvasFactory = void 0;
            var n = r(2);
            const s = "noopener noreferrer nofollow";
            t.DEFAULT_LINK_REL = s;
            const i = "http://www.w3.org/2000/svg";

            class BaseCanvasFactory {
                constructor() {
                    this.constructor === BaseCanvasFactory && (0, n.unreachable)("Cannot initialize BaseCanvasFactory.")
                }

                create(e, t) {
                    (0, n.unreachable)("Abstract method `create` called.")
                }

                reset(e, t, r) {
                    if (!e.canvas) throw new Error("Canvas is not specified");
                    if (t <= 0 || r <= 0) throw new Error("Invalid canvas size");
                    e.canvas.width = t;
                    e.canvas.height = r
                }

                destroy(e) {
                    if (!e.canvas) throw new Error("Canvas is not specified");
                    e.canvas.width = 0;
                    e.canvas.height = 0;
                    e.canvas = null;
                    e.context = null
                }
            }

            t.BaseCanvasFactory = BaseCanvasFactory;
            t.DOMCanvasFactory = class DOMCanvasFactory extends BaseCanvasFactory {
                constructor({ownerDocument: e = globalThis.document} = {}) {
                    super();
                    this._document = e
                }

                create(e, t) {
                    if (e <= 0 || t <= 0) throw new Error("Invalid canvas size");
                    const r = this._document.createElement("canvas"), n = r.getContext("2d");
                    r.width = e;
                    r.height = t;
                    return {canvas: r, context: n}
                }
            };

            class BaseCMapReaderFactory {
                constructor({baseUrl: e = null, isCompressed: t = !1}) {
                    this.constructor === BaseCMapReaderFactory && (0, n.unreachable)("Cannot initialize BaseCMapReaderFactory.");
                    this.baseUrl = e;
                    this.isCompressed = t
                }

                async fetch({name: e}) {
                    if (!this.baseUrl) throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
                    if (!e) throw new Error("CMap name must be specified.");
                    const t = this.baseUrl + e + (this.isCompressed ? ".bcmap" : ""),
                        r = this.isCompressed ? n.CMapCompressionType.BINARY : n.CMapCompressionType.NONE;
                    return this._fetchData(t, r).catch((e => {
                        throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${t}`)
                    }))
                }

                _fetchData(e, t) {
                    (0, n.unreachable)("Abstract method `_fetchData` called.")
                }
            }

            t.BaseCMapReaderFactory = BaseCMapReaderFactory;
            t.DOMCMapReaderFactory = class DOMCMapReaderFactory extends BaseCMapReaderFactory {
                _fetchData(e, t) {
                    return isFetchSupported() && isValidFetchUrl(e, document.baseURI) ? fetch(e).then((async e => {
                        if (!e.ok) throw new Error(e.statusText);
                        let r;
                        r = this.isCompressed ? new Uint8Array(await e.arrayBuffer()) : (0, n.stringToBytes)(await e.text());
                        return {cMapData: r, compressionType: t}
                    })) : new Promise(((r, s) => {
                        const i = new XMLHttpRequest;
                        i.open("GET", e, !0);
                        this.isCompressed && (i.responseType = "arraybuffer");
                        i.onreadystatechange = () => {
                            if (i.readyState === XMLHttpRequest.DONE) {
                                if (200 === i.status || 0 === i.status) {
                                    let e;
                                    this.isCompressed && i.response ? e = new Uint8Array(i.response) : !this.isCompressed && i.responseText && (e = (0, n.stringToBytes)(i.responseText));
                                    if (e) {
                                        r({cMapData: e, compressionType: t});
                                        return
                                    }
                                }
                                s(new Error(i.statusText))
                            }
                        };
                        i.send(null)
                    }))
                }
            };
            t.DOMSVGFactory = class DOMSVGFactory {
                create(e, t) {
                    (0, n.assert)(e > 0 && t > 0, "Invalid SVG dimensions");
                    const r = document.createElementNS(i, "svg:svg");
                    r.setAttribute("version", "1.1");
                    r.setAttribute("width", e + "px");
                    r.setAttribute("height", t + "px");
                    r.setAttribute("preserveAspectRatio", "none");
                    r.setAttribute("viewBox", "0 0 " + e + " " + t);
                    return r
                }

                createElement(e) {
                    (0, n.assert)("string" == typeof e, "Invalid SVG element type");
                    return document.createElementNS(i, e)
                }
            };

            class PageViewport {
                constructor({viewBox: e, scale: t, rotation: r, offsetX: n = 0, offsetY: s = 0, dontFlip: i = !1}) {
                    this.viewBox = e;
                    this.scale = t;
                    this.rotation = r;
                    this.offsetX = n;
                    this.offsetY = s;
                    const a = (e[2] + e[0]) / 2, o = (e[3] + e[1]) / 2;
                    let l, c, h, d, u, p, f, g;
                    switch (r = (r %= 360) < 0 ? r + 360 : r) {
                        case 180:
                            l = -1;
                            c = 0;
                            h = 0;
                            d = 1;
                            break;
                        case 90:
                            l = 0;
                            c = 1;
                            h = 1;
                            d = 0;
                            break;
                        case 270:
                            l = 0;
                            c = -1;
                            h = -1;
                            d = 0;
                            break;
                        case 0:
                            l = 1;
                            c = 0;
                            h = 0;
                            d = -1;
                            break;
                        default:
                            throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.")
                    }
                    if (i) {
                        h = -h;
                        d = -d
                    }
                    if (0 === l) {
                        u = Math.abs(o - e[1]) * t + n;
                        p = Math.abs(a - e[0]) * t + s;
                        f = Math.abs(e[3] - e[1]) * t;
                        g = Math.abs(e[2] - e[0]) * t
                    } else {
                        u = Math.abs(a - e[0]) * t + n;
                        p = Math.abs(o - e[1]) * t + s;
                        f = Math.abs(e[2] - e[0]) * t;
                        g = Math.abs(e[3] - e[1]) * t
                    }
                    this.transform = [l * t, c * t, h * t, d * t, u - l * t * a - h * t * o, p - c * t * a - d * t * o];
                    this.width = f;
                    this.height = g
                }

                clone({scale: e = this.scale, rotation: t = this.rotation, offsetX: r = this.offsetX, offsetY: n = this.offsetY, dontFlip: s = !1} = {}) {
                    return new PageViewport({
                        viewBox: this.viewBox.slice(),
                        scale: e,
                        rotation: t,
                        offsetX: r,
                        offsetY: n,
                        dontFlip: s
                    })
                }

                convertToViewportPoint(e, t) {
                    return n.Util.applyTransform([e, t], this.transform)
                }

                convertToViewportRectangle(e) {
                    const t = n.Util.applyTransform([e[0], e[1]], this.transform),
                        r = n.Util.applyTransform([e[2], e[3]], this.transform);
                    return [t[0], t[1], r[0], r[1]]
                }

                convertToPdfPoint(e, t) {
                    return n.Util.applyInverseTransform([e, t], this.transform)
                }
            }

            t.PageViewport = PageViewport;

            class RenderingCancelledException extends n.BaseException {
                constructor(e, t) {
                    super(e);
                    this.type = t
                }
            }

            t.RenderingCancelledException = RenderingCancelledException;
            const a = {NONE: 0, SELF: 1, BLANK: 2, PARENT: 3, TOP: 4};
            t.LinkTarget = a;
            t.StatTimer = class StatTimer {
                constructor() {
                    this.started = Object.create(null);
                    this.times = []
                }

                time(e) {
                    e in this.started && (0, n.warn)(`Timer is already running for ${e}`);
                    this.started[e] = Date.now()
                }

                timeEnd(e) {
                    e in this.started || (0, n.warn)(`Timer has not been started for ${e}`);
                    this.times.push({name: e, start: this.started[e], end: Date.now()});
                    delete this.started[e]
                }

                toString() {
                    const e = [];
                    let t = 0;
                    for (const e of this.times) {
                        const r = e.name;
                        r.length > t && (t = r.length)
                    }
                    for (const r of this.times) {
                        const n = r.end - r.start;
                        e.push(`${r.name.padEnd(t)} ${n}ms\n`)
                    }
                    return e.join("")
                }
            };

            function isFetchSupported() {
                return "undefined" != typeof fetch && "undefined" != typeof Response && "body" in Response.prototype && "undefined" != typeof ReadableStream
            }

            function isValidFetchUrl(e, t) {
                try {
                    const {protocol: r} = t ? new URL(e, t) : new URL(e);
                    return "http:" === r || "https:" === r
                } catch (e) {
                    return !1
                }
            }

            let o;
            t.PDFDateString = class PDFDateString {
                static toDateObject(e) {
                    if (!e || !(0, n.isString)(e)) return null;
                    o || (o = new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?"));
                    const t = o.exec(e);
                    if (!t) return null;
                    const r = parseInt(t[1], 10);
                    let s = parseInt(t[2], 10);
                    s = s >= 1 && s <= 12 ? s - 1 : 0;
                    let i = parseInt(t[3], 10);
                    i = i >= 1 && i <= 31 ? i : 1;
                    let a = parseInt(t[4], 10);
                    a = a >= 0 && a <= 23 ? a : 0;
                    let l = parseInt(t[5], 10);
                    l = l >= 0 && l <= 59 ? l : 0;
                    let c = parseInt(t[6], 10);
                    c = c >= 0 && c <= 59 ? c : 0;
                    const h = t[7] || "Z";
                    let d = parseInt(t[8], 10);
                    d = d >= 0 && d <= 23 ? d : 0;
                    let u = parseInt(t[9], 10) || 0;
                    u = u >= 0 && u <= 59 ? u : 0;
                    if ("-" === h) {
                        a += d;
                        l += u
                    } else if ("+" === h) {
                        a -= d;
                        l -= u
                    }
                    return new Date(Date.UTC(r, s, i, a, l, c))
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.arrayByteLength = arrayByteLength;
            t.arraysToBytes = function arraysToBytes(e) {
                const t = e.length;
                if (1 === t && e[0] instanceof Uint8Array) return e[0];
                let r = 0;
                for (let n = 0; n < t; n++) r += arrayByteLength(e[n]);
                let n = 0;
                const s = new Uint8Array(r);
                for (let r = 0; r < t; r++) {
                    let t = e[r];
                    t instanceof Uint8Array || (t = "string" == typeof t ? stringToBytes(t) : new Uint8Array(t));
                    const i = t.byteLength;
                    s.set(t, n);
                    n += i
                }
                return s
            };
            t.assert = assert;
            t.bytesToString = function bytesToString(e) {
                assert(null !== e && "object" == typeof e && void 0 !== e.length, "Invalid argument for bytesToString");
                const t = e.length, r = 8192;
                if (t < r) return String.fromCharCode.apply(null, e);
                const n = [];
                for (let s = 0; s < t; s += r) {
                    const i = Math.min(s + r, t), a = e.subarray(s, i);
                    n.push(String.fromCharCode.apply(null, a))
                }
                return n.join("")
            };
            t.createPromiseCapability = function createPromiseCapability() {
                const e = Object.create(null);
                let t = !1;
                Object.defineProperty(e, "settled", {get: () => t});
                e.promise = new Promise((function (r, n) {
                    e.resolve = function (e) {
                        t = !0;
                        r(e)
                    };
                    e.reject = function (e) {
                        t = !0;
                        n(e)
                    }
                }));
                return e
            };
            t.createValidAbsoluteUrl = function createValidAbsoluteUrl(e, t) {
                if (!e) return null;
                try {
                    const r = t ? new URL(e, t) : new URL(e);
                    if (function _isValidProtocol(e) {
                        if (!e) return !1;
                        switch (e.protocol) {
                            case"http:":
                            case"https:":
                            case"ftp:":
                            case"mailto:":
                            case"tel:":
                                return !0;
                            default:
                                return !1
                        }
                    }(r)) return r
                } catch (e) {
                }
                return null
            };
            t.encodeToXmlString = function encodeToXmlString(e) {
                const t = [];
                let r = 0;
                for (let n = 0, s = e.length; n < s; n++) {
                    const s = e.codePointAt(n);
                    if (32 <= s && s <= 126) {
                        const i = u[s];
                        if (i) {
                            r < n && t.push(e.substring(r, n));
                            t.push(i);
                            r = n + 1
                        }
                    } else {
                        r < n && t.push(e.substring(r, n));
                        t.push(`&#x${s.toString(16).toUpperCase()};`);
                        s > 55295 && (s < 57344 || s > 65533) && n++;
                        r = n + 1
                    }
                }
                if (0 === t.length) return e;
                r < e.length && t.push(e.substring(r, e.length));
                return t.join("")
            };
            t.escapeString = function escapeString(e) {
                return e.replace(/([()\\\n\r])/g, (e => "\n" === e ? "\\n" : "\r" === e ? "\\r" : `\\${e}`))
            };
            t.getModificationDate = function getModificationDate(e = new Date) {
                return [e.getUTCFullYear().toString(), (e.getUTCMonth() + 1).toString().padStart(2, "0"), e.getUTCDate().toString().padStart(2, "0"), e.getUTCHours().toString().padStart(2, "0"), e.getUTCMinutes().toString().padStart(2, "0"), e.getUTCSeconds().toString().padStart(2, "0")].join("")
            };
            t.getVerbosityLevel = function getVerbosityLevel() {
                return s
            };
            t.info = function info(e) {
                s >= n.INFOS && console.log(`Info: ${e}`)
            };
            t.isArrayBuffer = function isArrayBuffer(e) {
                return "object" == typeof e && null !== e && void 0 !== e.byteLength
            };
            t.isArrayEqual = function isArrayEqual(e, t) {
                if (e.length !== t.length) return !1;
                return e.every((function (e, r) {
                    return e === t[r]
                }))
            };
            t.isAscii = function isAscii(e) {
                return /^[\x00-\x7F]*$/.test(e)
            };
            t.isBool = function isBool(e) {
                return "boolean" == typeof e
            };
            t.isNum = function isNum(e) {
                return "number" == typeof e
            };
            t.isSameOrigin = function isSameOrigin(e, t) {
                let r;
                try {
                    r = new URL(e);
                    if (!r.origin || "null" === r.origin) return !1
                } catch (e) {
                    return !1
                }
                const n = new URL(t, r);
                return r.origin === n.origin
            };
            t.isString = function isString(e) {
                return "string" == typeof e
            };
            t.objectFromEntries = function objectFromEntries(e) {
                return Object.assign(Object.create(null), Object.fromEntries(e))
            };
            t.objectSize = function objectSize(e) {
                return Object.keys(e).length
            };
            t.removeNullCharacters = function removeNullCharacters(e) {
                if ("string" != typeof e) {
                    warn("The argument for removeNullCharacters must be a string.");
                    return e
                }
                return e.replace(a, "")
            };
            t.setVerbosityLevel = function setVerbosityLevel(e) {
                Number.isInteger(e) && (s = e)
            };
            t.shadow = shadow;
            t.string32 = function string32(e) {
                return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e)
            };
            t.stringToBytes = stringToBytes;
            t.stringToPDFString = function stringToPDFString(e) {
                const t = e.length, r = [];
                if ("þ" === e[0] && "ÿ" === e[1]) for (let n = 2; n < t; n += 2) r.push(String.fromCharCode(e.charCodeAt(n) << 8 | e.charCodeAt(n + 1))); else if ("ÿ" === e[0] && "þ" === e[1]) for (let n = 2; n < t; n += 2) r.push(String.fromCharCode(e.charCodeAt(n + 1) << 8 | e.charCodeAt(n))); else for (let n = 0; n < t; ++n) {
                    const t = h[e.charCodeAt(n)];
                    r.push(t ? String.fromCharCode(t) : e.charAt(n))
                }
                return r.join("")
            };
            t.stringToUTF16BEString = function stringToUTF16BEString(e) {
                const t = ["þÿ"];
                for (let r = 0, n = e.length; r < n; r++) {
                    const n = e.charCodeAt(r);
                    t.push(String.fromCharCode(n >> 8 & 255));
                    t.push(String.fromCharCode(255 & n))
                }
                return t.join("")
            };
            t.stringToUTF8String = function stringToUTF8String(e) {
                return decodeURIComponent(escape(e))
            };
            t.unreachable = unreachable;
            t.utf8StringToString = function utf8StringToString(e) {
                return unescape(encodeURIComponent(e))
            };
            t.warn = warn;
            t.VerbosityLevel = t.Util = t.UNSUPPORTED_FEATURES = t.UnknownErrorException = t.UnexpectedResponseException = t.TextRenderingMode = t.StreamType = t.PermissionFlag = t.PasswordResponses = t.PasswordException = t.PageActionEventType = t.OPS = t.MissingPDFException = t.IsLittleEndianCached = t.IsEvalSupportedCached = t.InvalidPDFException = t.ImageKind = t.IDENTITY_MATRIX = t.FormatError = t.FontType = t.FONT_IDENTITY_MATRIX = t.DocumentActionEventType = t.createObjectURL = t.CMapCompressionType = t.BaseException = t.AnnotationType = t.AnnotationStateModelType = t.AnnotationReviewState = t.AnnotationReplyType = t.AnnotationMarkedState = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationBorderStyleType = t.AnnotationActionEventType = t.AbortException = void 0;
            r(3);
            t.IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
            t.FONT_IDENTITY_MATRIX = [.001, 0, 0, .001, 0, 0];
            t.PermissionFlag = {
                PRINT: 4,
                MODIFY_CONTENTS: 8,
                COPY: 16,
                MODIFY_ANNOTATIONS: 32,
                FILL_INTERACTIVE_FORMS: 256,
                COPY_FOR_ACCESSIBILITY: 512,
                ASSEMBLE: 1024,
                PRINT_HIGH_QUALITY: 2048
            };
            t.TextRenderingMode = {
                FILL: 0,
                STROKE: 1,
                FILL_STROKE: 2,
                INVISIBLE: 3,
                FILL_ADD_TO_PATH: 4,
                STROKE_ADD_TO_PATH: 5,
                FILL_STROKE_ADD_TO_PATH: 6,
                ADD_TO_PATH: 7,
                FILL_STROKE_MASK: 3,
                ADD_TO_PATH_FLAG: 4
            };
            t.ImageKind = {GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3};
            t.AnnotationType = {
                TEXT: 1,
                LINK: 2,
                FREETEXT: 3,
                LINE: 4,
                SQUARE: 5,
                CIRCLE: 6,
                POLYGON: 7,
                POLYLINE: 8,
                HIGHLIGHT: 9,
                UNDERLINE: 10,
                SQUIGGLY: 11,
                STRIKEOUT: 12,
                STAMP: 13,
                CARET: 14,
                INK: 15,
                POPUP: 16,
                FILEATTACHMENT: 17,
                SOUND: 18,
                MOVIE: 19,
                WIDGET: 20,
                SCREEN: 21,
                PRINTERMARK: 22,
                TRAPNET: 23,
                WATERMARK: 24,
                THREED: 25,
                REDACT: 26
            };
            t.AnnotationStateModelType = {MARKED: "Marked", REVIEW: "Review"};
            t.AnnotationMarkedState = {MARKED: "Marked", UNMARKED: "Unmarked"};
            t.AnnotationReviewState = {
                ACCEPTED: "Accepted",
                REJECTED: "Rejected",
                CANCELLED: "Cancelled",
                COMPLETED: "Completed",
                NONE: "None"
            };
            t.AnnotationReplyType = {GROUP: "Group", REPLY: "R"};
            t.AnnotationFlag = {
                INVISIBLE: 1,
                HIDDEN: 2,
                PRINT: 4,
                NOZOOM: 8,
                NOROTATE: 16,
                NOVIEW: 32,
                READONLY: 64,
                LOCKED: 128,
                TOGGLENOVIEW: 256,
                LOCKEDCONTENTS: 512
            };
            t.AnnotationFieldFlag = {
                READONLY: 1,
                REQUIRED: 2,
                NOEXPORT: 4,
                MULTILINE: 4096,
                PASSWORD: 8192,
                NOTOGGLETOOFF: 16384,
                RADIO: 32768,
                PUSHBUTTON: 65536,
                COMBO: 131072,
                EDIT: 262144,
                SORT: 524288,
                FILESELECT: 1048576,
                MULTISELECT: 2097152,
                DONOTSPELLCHECK: 4194304,
                DONOTSCROLL: 8388608,
                COMB: 16777216,
                RICHTEXT: 33554432,
                RADIOSINUNISON: 33554432,
                COMMITONSELCHANGE: 67108864
            };
            t.AnnotationBorderStyleType = {SOLID: 1, DASHED: 2, BEVELED: 3, INSET: 4, UNDERLINE: 5};
            t.AnnotationActionEventType = {
                E: "Mouse Enter",
                X: "Mouse Exit",
                D: "Mouse Down",
                U: "Mouse Up",
                Fo: "Focus",
                Bl: "Blur",
                PO: "PageOpen",
                PC: "PageClose",
                PV: "PageVisible",
                PI: "PageInvisible",
                K: "Keystroke",
                F: "Format",
                V: "Validate",
                C: "Calculate"
            };
            t.DocumentActionEventType = {
                WC: "WillClose",
                WS: "WillSave",
                DS: "DidSave",
                WP: "WillPrint",
                DP: "DidPrint"
            };
            t.PageActionEventType = {O: "PageOpen", C: "PageClose"};
            t.StreamType = {
                UNKNOWN: "UNKNOWN",
                FLATE: "FLATE",
                LZW: "LZW",
                DCT: "DCT",
                JPX: "JPX",
                JBIG: "JBIG",
                A85: "A85",
                AHX: "AHX",
                CCF: "CCF",
                RLX: "RLX"
            };
            t.FontType = {
                UNKNOWN: "UNKNOWN",
                TYPE1: "TYPE1",
                TYPE1C: "TYPE1C",
                CIDFONTTYPE0: "CIDFONTTYPE0",
                CIDFONTTYPE0C: "CIDFONTTYPE0C",
                TRUETYPE: "TRUETYPE",
                CIDFONTTYPE2: "CIDFONTTYPE2",
                TYPE3: "TYPE3",
                OPENTYPE: "OPENTYPE",
                TYPE0: "TYPE0",
                MMTYPE1: "MMTYPE1"
            };
            const n = {ERRORS: 0, WARNINGS: 1, INFOS: 5};
            t.VerbosityLevel = n;
            t.CMapCompressionType = {NONE: 0, BINARY: 1, STREAM: 2};
            t.OPS = {
                dependency: 1,
                setLineWidth: 2,
                setLineCap: 3,
                setLineJoin: 4,
                setMiterLimit: 5,
                setDash: 6,
                setRenderingIntent: 7,
                setFlatness: 8,
                setGState: 9,
                save: 10,
                restore: 11,
                transform: 12,
                moveTo: 13,
                lineTo: 14,
                curveTo: 15,
                curveTo2: 16,
                curveTo3: 17,
                closePath: 18,
                rectangle: 19,
                stroke: 20,
                closeStroke: 21,
                fill: 22,
                eoFill: 23,
                fillStroke: 24,
                eoFillStroke: 25,
                closeFillStroke: 26,
                closeEOFillStroke: 27,
                endPath: 28,
                clip: 29,
                eoClip: 30,
                beginText: 31,
                endText: 32,
                setCharSpacing: 33,
                setWordSpacing: 34,
                setHScale: 35,
                setLeading: 36,
                setFont: 37,
                setTextRenderingMode: 38,
                setTextRise: 39,
                moveText: 40,
                setLeadingMoveText: 41,
                setTextMatrix: 42,
                nextLine: 43,
                showText: 44,
                showSpacedText: 45,
                nextLineShowText: 46,
                nextLineSetSpacingShowText: 47,
                setCharWidth: 48,
                setCharWidthAndBounds: 49,
                setStrokeColorSpace: 50,
                setFillColorSpace: 51,
                setStrokeColor: 52,
                setStrokeColorN: 53,
                setFillColor: 54,
                setFillColorN: 55,
                setStrokeGray: 56,
                setFillGray: 57,
                setStrokeRGBColor: 58,
                setFillRGBColor: 59,
                setStrokeCMYKColor: 60,
                setFillCMYKColor: 61,
                shadingFill: 62,
                beginInlineImage: 63,
                beginImageData: 64,
                endInlineImage: 65,
                paintXObject: 66,
                markPoint: 67,
                markPointProps: 68,
                beginMarkedContent: 69,
                beginMarkedContentProps: 70,
                endMarkedContent: 71,
                beginCompat: 72,
                endCompat: 73,
                paintFormXObjectBegin: 74,
                paintFormXObjectEnd: 75,
                beginGroup: 76,
                endGroup: 77,
                beginAnnotations: 78,
                endAnnotations: 79,
                beginAnnotation: 80,
                endAnnotation: 81,
                paintJpegXObject: 82,
                paintImageMaskXObject: 83,
                paintImageMaskXObjectGroup: 84,
                paintImageXObject: 85,
                paintInlineImageXObject: 86,
                paintInlineImageXObjectGroup: 87,
                paintImageXObjectRepeat: 88,
                paintImageMaskXObjectRepeat: 89,
                paintSolidColorImageMask: 90,
                constructPath: 91
            };
            t.UNSUPPORTED_FEATURES = {
                unknown: "unknown",
                forms: "forms",
                javaScript: "javaScript",
                smask: "smask",
                shadingPattern: "shadingPattern",
                font: "font",
                errorTilingPattern: "errorTilingPattern",
                errorExtGState: "errorExtGState",
                errorXObject: "errorXObject",
                errorFontLoadType3: "errorFontLoadType3",
                errorFontState: "errorFontState",
                errorFontMissing: "errorFontMissing",
                errorFontTranslate: "errorFontTranslate",
                errorColorSpace: "errorColorSpace",
                errorOperatorList: "errorOperatorList",
                errorFontToUnicode: "errorFontToUnicode",
                errorFontLoadNative: "errorFontLoadNative",
                errorFontGetPath: "errorFontGetPath",
                errorMarkedContent: "errorMarkedContent"
            };
            t.PasswordResponses = {NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2};
            let s = n.WARNINGS;

            function warn(e) {
                s >= n.WARNINGS && console.log(`Warning: ${e}`)
            }

            function unreachable(e) {
                throw new Error(e)
            }

            function assert(e, t) {
                e || unreachable(t)
            }

            function shadow(e, t, r) {
                Object.defineProperty(e, t, {value: r, enumerable: !0, configurable: !0, writable: !1});
                return r
            }

            const i = function BaseExceptionClosure() {
                function BaseException(e) {
                    this.constructor === BaseException && unreachable("Cannot initialize BaseException.");
                    this.message = e;
                    this.name = this.constructor.name
                }

                BaseException.prototype = new Error;
                BaseException.constructor = BaseException;
                return BaseException
            }();
            t.BaseException = i;
            t.PasswordException = class PasswordException extends i {
                constructor(e, t) {
                    super(e);
                    this.code = t
                }
            };
            t.UnknownErrorException = class UnknownErrorException extends i {
                constructor(e, t) {
                    super(e);
                    this.details = t
                }
            };
            t.InvalidPDFException = class InvalidPDFException extends i {
            };
            t.MissingPDFException = class MissingPDFException extends i {
            };
            t.UnexpectedResponseException = class UnexpectedResponseException extends i {
                constructor(e, t) {
                    super(e);
                    this.status = t
                }
            };
            t.FormatError = class FormatError extends i {
            };
            t.AbortException = class AbortException extends i {
            };
            const a = /\x00/g;

            function stringToBytes(e) {
                assert("string" == typeof e, "Invalid argument for stringToBytes");
                const t = e.length, r = new Uint8Array(t);
                for (let n = 0; n < t; ++n) r[n] = 255 & e.charCodeAt(n);
                return r
            }

            function arrayByteLength(e) {
                if (void 0 !== e.length) return e.length;
                assert(void 0 !== e.byteLength, "arrayByteLength - invalid argument.");
                return e.byteLength
            }

            const o = {
                get value() {
                    return shadow(this, "value", function isLittleEndian() {
                        const e = new Uint8Array(4);
                        e[0] = 1;
                        return 1 === new Uint32Array(e.buffer, 0, 1)[0]
                    }())
                }
            };
            t.IsLittleEndianCached = o;
            const l = {
                get value() {
                    return shadow(this, "value", function isEvalSupported() {
                        try {
                            new Function("");
                            return !0
                        } catch (e) {
                            return !1
                        }
                    }())
                }
            };
            t.IsEvalSupportedCached = l;
            const c = [...Array(256).keys()].map((e => e.toString(16).padStart(2, "0")));

            class Util {
                static makeHexColor(e, t, r) {
                    return `#${c[e]}${c[t]}${c[r]}`
                }

                static transform(e, t) {
                    return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
                }

                static applyTransform(e, t) {
                    return [e[0] * t[0] + e[1] * t[2] + t[4], e[0] * t[1] + e[1] * t[3] + t[5]]
                }

                static applyInverseTransform(e, t) {
                    const r = t[0] * t[3] - t[1] * t[2];
                    return [(e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / r, (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / r]
                }

                static getAxialAlignedBoundingBox(e, t) {
                    const r = Util.applyTransform(e, t), n = Util.applyTransform(e.slice(2, 4), t),
                        s = Util.applyTransform([e[0], e[3]], t), i = Util.applyTransform([e[2], e[1]], t);
                    return [Math.min(r[0], n[0], s[0], i[0]), Math.min(r[1], n[1], s[1], i[1]), Math.max(r[0], n[0], s[0], i[0]), Math.max(r[1], n[1], s[1], i[1])]
                }

                static inverseTransform(e) {
                    const t = e[0] * e[3] - e[1] * e[2];
                    return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t]
                }

                static apply3dTransform(e, t) {
                    return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]]
                }

                static singularValueDecompose2dScale(e) {
                    const t = [e[0], e[2], e[1], e[3]], r = e[0] * t[0] + e[1] * t[2], n = e[0] * t[1] + e[1] * t[3],
                        s = e[2] * t[0] + e[3] * t[2], i = e[2] * t[1] + e[3] * t[3], a = (r + i) / 2,
                        o = Math.sqrt((r + i) * (r + i) - 4 * (r * i - s * n)) / 2, l = a + o || 1, c = a - o || 1;
                    return [Math.sqrt(l), Math.sqrt(c)]
                }

                static normalizeRect(e) {
                    const t = e.slice(0);
                    if (e[0] > e[2]) {
                        t[0] = e[2];
                        t[2] = e[0]
                    }
                    if (e[1] > e[3]) {
                        t[1] = e[3];
                        t[3] = e[1]
                    }
                    return t
                }

                static intersect(e, t) {
                    function compare(e, t) {
                        return e - t
                    }

                    const r = [e[0], e[2], t[0], t[2]].sort(compare), n = [e[1], e[3], t[1], t[3]].sort(compare),
                        s = [];
                    e = Util.normalizeRect(e);
                    t = Util.normalizeRect(t);
                    if (!(r[0] === e[0] && r[1] === t[0] || r[0] === t[0] && r[1] === e[0])) return null;
                    s[0] = r[1];
                    s[2] = r[2];
                    if (!(n[0] === e[1] && n[1] === t[1] || n[0] === t[1] && n[1] === e[1])) return null;
                    s[1] = n[1];
                    s[3] = n[2];
                    return s
                }
            }

            t.Util = Util;
            const h = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364];
            const d = function createObjectURLClosure() {
                const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                return function createObjectURL(t, r, n = !1) {
                    if (!n && URL.createObjectURL) {
                        const e = new Blob([t], {type: r});
                        return URL.createObjectURL(e)
                    }
                    let s = `data:${r};base64,`;
                    for (let r = 0, n = t.length; r < n; r += 3) {
                        const i = 255 & t[r], a = 255 & t[r + 1], o = 255 & t[r + 2];
                        s += e[i >> 2] + e[(3 & i) << 4 | a >> 4] + e[r + 1 < n ? (15 & a) << 2 | o >> 6 : 64] + e[r + 2 < n ? 63 & o : 64]
                    }
                    return s
                }
            }();
            t.createObjectURL = d;
            const u = {60: "&lt;", 62: "&gt;", 38: "&amp;", 34: "&quot;", 39: "&apos;"}
        }, (e, t, r) => {
            r(4)
        }, (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.isNodeJS = void 0;
            const r = !("object" != typeof process || process + "" != "[object process]" || process.versions.nw || process.versions.electron && process.type && "browser" !== process.type);
            t.isNodeJS = r
        }, (__unused_webpack_module, exports, __w_pdfjs_require__) => {
            Object.defineProperty(exports, "__esModule", {value: !0});
            exports.getDocument = getDocument;
            exports.setPDFNetworkStreamFactory = setPDFNetworkStreamFactory;
            exports.version = exports.PDFWorker = exports.PDFPageProxy = exports.PDFDocumentProxy = exports.PDFDataRangeTransport = exports.LoopbackPort = exports.DefaultCMapReaderFactory = exports.DefaultCanvasFactory = exports.build = void 0;
            var _util = __w_pdfjs_require__(2), _display_utils = __w_pdfjs_require__(1),
                _font_loader = __w_pdfjs_require__(6), _node_utils = __w_pdfjs_require__(7),
                _annotation_storage = __w_pdfjs_require__(8), _api_compatibility = __w_pdfjs_require__(9),
                _canvas = __w_pdfjs_require__(10), _worker_options = __w_pdfjs_require__(12),
                _is_node = __w_pdfjs_require__(4), _message_handler = __w_pdfjs_require__(13),
                _metadata = __w_pdfjs_require__(14), _optional_content_config = __w_pdfjs_require__(16),
                _transport_stream = __w_pdfjs_require__(17), _webgl = __w_pdfjs_require__(18);
            const DEFAULT_RANGE_CHUNK_SIZE = 65536, RENDERING_CANCELLED_TIMEOUT = 100,
                DefaultCanvasFactory = _is_node.isNodeJS ? _node_utils.NodeCanvasFactory : _display_utils.DOMCanvasFactory;
            exports.DefaultCanvasFactory = DefaultCanvasFactory;
            const DefaultCMapReaderFactory = _is_node.isNodeJS ? _node_utils.NodeCMapReaderFactory : _display_utils.DOMCMapReaderFactory;
            exports.DefaultCMapReaderFactory = DefaultCMapReaderFactory;
            let createPDFNetworkStream;

            function setPDFNetworkStreamFactory(e) {
                createPDFNetworkStream = e
            }

            function getDocument(e) {
                const t = new PDFDocumentLoadingTask;
                let r;
                if ("string" == typeof e) r = {url: e}; else if ((0, _util.isArrayBuffer)(e)) r = {data: e}; else if (e instanceof PDFDataRangeTransport) r = {range: e}; else {
                    if ("object" != typeof e) throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object");
                    if (!e.url && !e.data && !e.range) throw new Error("Invalid parameter object: need either .data, .range or .url");
                    r = e
                }
                const n = Object.create(null);
                let s = null, i = null;
                for (const e in r) if ("url" !== e || "undefined" == typeof window) if ("range" !== e) if ("worker" !== e) if ("data" !== e || r[e] instanceof Uint8Array) n[e] = r[e]; else {
                    const t = r[e];
                    if ("string" == typeof t) n[e] = (0, _util.stringToBytes)(t); else if ("object" != typeof t || null === t || isNaN(t.length)) {
                        if (!(0, _util.isArrayBuffer)(t)) throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.");
                        n[e] = new Uint8Array(t)
                    } else n[e] = new Uint8Array(t)
                } else i = r[e]; else s = r[e]; else n[e] = new URL(r[e], window.location).href;
                n.rangeChunkSize = n.rangeChunkSize || DEFAULT_RANGE_CHUNK_SIZE;
                n.CMapReaderFactory = n.CMapReaderFactory || DefaultCMapReaderFactory;
                n.ignoreErrors = !0 !== n.stopAtErrors;
                n.fontExtraProperties = !0 === n.fontExtraProperties;
                n.pdfBug = !0 === n.pdfBug;
                Number.isInteger(n.maxImageSize) || (n.maxImageSize = -1);
                "boolean" != typeof n.isEvalSupported && (n.isEvalSupported = !0);
                "boolean" != typeof n.disableFontFace && (n.disableFontFace = _api_compatibility.apiCompatibilityParams.disableFontFace || !1);
                void 0 === n.ownerDocument && (n.ownerDocument = globalThis.document);
                "boolean" != typeof n.disableRange && (n.disableRange = !1);
                "boolean" != typeof n.disableStream && (n.disableStream = !1);
                "boolean" != typeof n.disableAutoFetch && (n.disableAutoFetch = !1);
                (0, _util.setVerbosityLevel)(n.verbosity);
                if (!i) {
                    const e = {verbosity: n.verbosity, port: _worker_options.GlobalWorkerOptions.workerPort};
                    i = e.port ? PDFWorker.fromPort(e) : new PDFWorker(e);
                    t._worker = i
                }
                const a = t.docId;
                i.promise.then((function () {
                    if (t.destroyed) throw new Error("Loading aborted");
                    const e = _fetchDocument(i, n, s, a), r = new Promise((function (e) {
                        let t;
                        s ? t = new _transport_stream.PDFDataTransportStream({
                            length: n.length,
                            initialData: n.initialData,
                            progressiveDone: n.progressiveDone,
                            disableRange: n.disableRange,
                            disableStream: n.disableStream
                        }, s) : n.data || (t = createPDFNetworkStream({
                            url: n.url,
                            length: n.length,
                            httpHeaders: n.httpHeaders,
                            withCredentials: n.withCredentials,
                            rangeChunkSize: n.rangeChunkSize,
                            disableRange: n.disableRange,
                            disableStream: n.disableStream
                        }));
                        e(t)
                    }));
                    return Promise.all([e, r]).then((function ([e, r]) {
                        if (t.destroyed) throw new Error("Loading aborted");
                        const s = new _message_handler.MessageHandler(a, e, i.port);
                        s.postMessageTransfers = i.postMessageTransfers;
                        const o = new WorkerTransport(s, t, r, n);
                        t._transport = o;
                        s.send("Ready", null)
                    }))
                })).catch(t._capability.reject);
                return t
            }

            function _fetchDocument(e, t, r, n) {
                if (e.destroyed) return Promise.reject(new Error("Worker was destroyed"));
                if (r) {
                    t.length = r.length;
                    t.initialData = r.initialData;
                    t.progressiveDone = r.progressiveDone
                }
                return e.messageHandler.sendWithPromise("GetDocRequest", {
                    docId: n,
                    apiVersion: "2.7.570",
                    source: {
                        data: t.data,
                        url: t.url,
                        password: t.password,
                        disableAutoFetch: t.disableAutoFetch,
                        rangeChunkSize: t.rangeChunkSize,
                        length: t.length
                    },
                    maxImageSize: t.maxImageSize,
                    disableFontFace: t.disableFontFace,
                    postMessageTransfers: e.postMessageTransfers,
                    docBaseUrl: t.docBaseUrl,
                    ignoreErrors: t.ignoreErrors,
                    isEvalSupported: t.isEvalSupported,
                    fontExtraProperties: t.fontExtraProperties
                }).then((function (t) {
                    if (e.destroyed) throw new Error("Worker was destroyed");
                    return t
                }))
            }

            const PDFDocumentLoadingTask = function PDFDocumentLoadingTaskClosure() {
                let e = 0;
                return class PDFDocumentLoadingTask {
                    constructor() {
                        this._capability = (0, _util.createPromiseCapability)();
                        this._transport = null;
                        this._worker = null;
                        this.docId = "d" + e++;
                        this.destroyed = !1;
                        this.onPassword = null;
                        this.onProgress = null;
                        this.onUnsupportedFeature = null
                    }

                    get promise() {
                        return this._capability.promise
                    }

                    destroy() {
                        this.destroyed = !0;
                        return (this._transport ? this._transport.destroy() : Promise.resolve()).then((() => {
                            this._transport = null;
                            if (this._worker) {
                                this._worker.destroy();
                                this._worker = null
                            }
                        }))
                    }
                }
            }();

            class PDFDataRangeTransport {
                constructor(e, t, r = !1) {
                    this.length = e;
                    this.initialData = t;
                    this.progressiveDone = r;
                    this._rangeListeners = [];
                    this._progressListeners = [];
                    this._progressiveReadListeners = [];
                    this._progressiveDoneListeners = [];
                    this._readyCapability = (0, _util.createPromiseCapability)()
                }

                addRangeListener(e) {
                    this._rangeListeners.push(e)
                }

                addProgressListener(e) {
                    this._progressListeners.push(e)
                }

                addProgressiveReadListener(e) {
                    this._progressiveReadListeners.push(e)
                }

                addProgressiveDoneListener(e) {
                    this._progressiveDoneListeners.push(e)
                }

                onDataRange(e, t) {
                    for (const r of this._rangeListeners) r(e, t)
                }

                onDataProgress(e, t) {
                    this._readyCapability.promise.then((() => {
                        for (const r of this._progressListeners) r(e, t)
                    }))
                }

                onDataProgressiveRead(e) {
                    this._readyCapability.promise.then((() => {
                        for (const t of this._progressiveReadListeners) t(e)
                    }))
                }

                onDataProgressiveDone() {
                    this._readyCapability.promise.then((() => {
                        for (const e of this._progressiveDoneListeners) e()
                    }))
                }

                transportReady() {
                    this._readyCapability.resolve()
                }

                requestDataRange(e, t) {
                    (0, _util.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange")
                }

                abort() {
                }
            }

            exports.PDFDataRangeTransport = PDFDataRangeTransport;

            class PDFDocumentProxy {
                constructor(e, t) {
                    this._pdfInfo = e;
                    this._transport = t
                }

                get annotationStorage() {
                    return (0, _util.shadow)(this, "annotationStorage", new _annotation_storage.AnnotationStorage)
                }

                get numPages() {
                    return this._pdfInfo.numPages
                }

                get fingerprint() {
                    return this._pdfInfo.fingerprint
                }

                getPage(e) {
                    return this._transport.getPage(e)
                }

                getPageIndex(e) {
                    return this._transport.getPageIndex(e)
                }

                getDestinations() {
                    return this._transport.getDestinations()
                }

                getDestination(e) {
                    return this._transport.getDestination(e)
                }

                getPageLabels() {
                    return this._transport.getPageLabels()
                }

                getPageLayout() {
                    return this._transport.getPageLayout()
                }

                getPageMode() {
                    return this._transport.getPageMode()
                }

                getViewerPreferences() {
                    return this._transport.getViewerPreferences()
                }

                getOpenAction() {
                    return this._transport.getOpenAction()
                }

                getAttachments() {
                    return this._transport.getAttachments()
                }

                getJavaScript() {
                    return this._transport.getJavaScript()
                }

                getJSActions() {
                    return this._transport.getDocJSActions()
                }

                getOutline() {
                    return this._transport.getOutline()
                }

                getOptionalContentConfig() {
                    return this._transport.getOptionalContentConfig()
                }

                getPermissions() {
                    return this._transport.getPermissions()
                }

                getMetadata() {
                    return this._transport.getMetadata()
                }

                getMarkInfo() {
                    return this._transport.getMarkInfo()
                }

                getData() {
                    return this._transport.getData()
                }

                getDownloadInfo() {
                    return this._transport.downloadInfoCapability.promise
                }

                getStats() {
                    return this._transport.getStats()
                }

                cleanup() {
                    return this._transport.startCleanup()
                }

                destroy() {
                    return this.loadingTask.destroy()
                }

                get loadingParams() {
                    return this._transport.loadingParams
                }

                get loadingTask() {
                    return this._transport.loadingTask
                }

                saveDocument(e) {
                    return this._transport.saveDocument(e)
                }

                getFieldObjects() {
                    return this._transport.getFieldObjects()
                }

                hasJSActions() {
                    return this._transport.hasJSActions()
                }

                getCalculationOrderIds() {
                    return this._transport.getCalculationOrderIds()
                }
            }

            exports.PDFDocumentProxy = PDFDocumentProxy;

            class PDFPageProxy {
                constructor(e, t, r, n, s = !1) {
                    this._pageIndex = e;
                    this._pageInfo = t;
                    this._ownerDocument = n;
                    this._transport = r;
                    this._stats = s ? new _display_utils.StatTimer : null;
                    this._pdfBug = s;
                    this.commonObjs = r.commonObjs;
                    this.objs = new PDFObjects;
                    this.cleanupAfterRender = !1;
                    this.pendingCleanup = !1;
                    this._intentStates = new Map;
                    this.destroyed = !1
                }

                get pageNumber() {
                    return this._pageIndex + 1
                }

                get rotate() {
                    return this._pageInfo.rotate
                }

                get ref() {
                    return this._pageInfo.ref
                }

                get userUnit() {
                    return this._pageInfo.userUnit
                }

                get view() {
                    return this._pageInfo.view
                }

                getViewport({scale: e, rotation: t = this.rotate, offsetX: r = 0, offsetY: n = 0, dontFlip: s = !1} = {}) {
                    return new _display_utils.PageViewport({
                        viewBox: this.view,
                        scale: e,
                        rotation: t,
                        offsetX: r,
                        offsetY: n,
                        dontFlip: s
                    })
                }

                getAnnotations({intent: e = null} = {}) {
                    if (!this.annotationsPromise || this.annotationsIntent !== e) {
                        this.annotationsPromise = this._transport.getAnnotations(this._pageIndex, e);
                        this.annotationsIntent = e
                    }
                    return this.annotationsPromise
                }

                getJSActions() {
                    return this._jsActionsPromise || (this._jsActionsPromise = this._transport.getPageJSActions(this._pageIndex))
                }

                render({canvasContext: e, viewport: t, intent: r = "display", enableWebGL: n = !1, renderInteractiveForms: s = !1, transform: i = null, imageLayer: a = null, canvasFactory: o = null, background: l = null, annotationStorage: c = null, optionalContentConfigPromise: h = null}) {
                    this._stats && this._stats.time("Overall");
                    const d = "print" === r ? "print" : "display";
                    this.pendingCleanup = !1;
                    h || (h = this._transport.getOptionalContentConfig());
                    let u = this._intentStates.get(d);
                    if (!u) {
                        u = Object.create(null);
                        this._intentStates.set(d, u)
                    }
                    if (u.streamReaderCancelTimeout) {
                        clearTimeout(u.streamReaderCancelTimeout);
                        u.streamReaderCancelTimeout = null
                    }
                    const p = o || new DefaultCanvasFactory({ownerDocument: this._ownerDocument}),
                        f = new _webgl.WebGLContext({enable: n});
                    if (!u.displayReadyCapability) {
                        u.displayReadyCapability = (0, _util.createPromiseCapability)();
                        u.operatorList = {fnArray: [], argsArray: [], lastChunk: !1};
                        this._stats && this._stats.time("Page Request");
                        this._pumpOperatorList({
                            pageIndex: this._pageIndex,
                            intent: d,
                            renderInteractiveForms: !0 === s,
                            annotationStorage: c?.getAll() || null
                        })
                    }
                    const complete = e => {
                        const t = u.renderTasks.indexOf(g);
                        t >= 0 && u.renderTasks.splice(t, 1);
                        (this.cleanupAfterRender || "print" === d) && (this.pendingCleanup = !0);
                        this._tryCleanup();
                        if (e) {
                            g.capability.reject(e);
                            this._abortOperatorList({intentState: u, reason: e})
                        } else g.capability.resolve();
                        if (this._stats) {
                            this._stats.timeEnd("Rendering");
                            this._stats.timeEnd("Overall")
                        }
                    }, g = new InternalRenderTask({
                        callback: complete,
                        params: {canvasContext: e, viewport: t, transform: i, imageLayer: a, background: l},
                        objs: this.objs,
                        commonObjs: this.commonObjs,
                        operatorList: u.operatorList,
                        pageIndex: this._pageIndex,
                        canvasFactory: p,
                        webGLContext: f,
                        useRequestAnimationFrame: "print" !== d,
                        pdfBug: this._pdfBug
                    });
                    u.renderTasks || (u.renderTasks = []);
                    u.renderTasks.push(g);
                    const m = g.task;
                    Promise.all([u.displayReadyCapability.promise, h]).then((([e, t]) => {
                        if (this.pendingCleanup) complete(); else {
                            this._stats && this._stats.time("Rendering");
                            g.initializeGraphics({transparency: e, optionalContentConfig: t});
                            g.operatorListChanged()
                        }
                    })).catch(complete);
                    return m
                }

                getOperatorList() {
                    const e = "oplist";
                    let t, r = this._intentStates.get(e);
                    if (!r) {
                        r = Object.create(null);
                        this._intentStates.set(e, r)
                    }
                    if (!r.opListReadCapability) {
                        t = Object.create(null);
                        t.operatorListChanged = function operatorListChanged() {
                            if (r.operatorList.lastChunk) {
                                r.opListReadCapability.resolve(r.operatorList);
                                const e = r.renderTasks.indexOf(t);
                                e >= 0 && r.renderTasks.splice(e, 1)
                            }
                        };
                        r.opListReadCapability = (0, _util.createPromiseCapability)();
                        r.renderTasks = [];
                        r.renderTasks.push(t);
                        r.operatorList = {fnArray: [], argsArray: [], lastChunk: !1};
                        this._stats && this._stats.time("Page Request");
                        this._pumpOperatorList({pageIndex: this._pageIndex, intent: e})
                    }
                    return r.opListReadCapability.promise
                }

                streamTextContent({normalizeWhitespace: e = !1, disableCombineTextItems: t = !1} = {}) {
                    return this._transport.messageHandler.sendWithStream("GetTextContent", {
                        pageIndex: this._pageIndex,
                        normalizeWhitespace: !0 === e,
                        combineTextItems: !0 !== t
                    }, {highWaterMark: 100, size: e => e.items.length})
                }

                getTextContent(e = {}) {
                    const t = this.streamTextContent(e);
                    return new Promise((function (e, r) {
                        const n = t.getReader(), s = {items: [], styles: Object.create(null)};
                        !function pump() {
                            n.read().then((function ({value: t, done: r}) {
                                if (r) e(s); else {
                                    Object.assign(s.styles, t.styles);
                                    s.items.push(...t.items);
                                    pump()
                                }
                            }), r)
                        }()
                    }))
                }

                _destroy() {
                    this.destroyed = !0;
                    this._transport.pageCache[this._pageIndex] = null;
                    const e = [];
                    for (const [t, r] of this._intentStates) {
                        this._abortOperatorList({intentState: r, reason: new Error("Page was destroyed."), force: !0});
                        if ("oplist" !== t) for (const t of r.renderTasks) {
                            e.push(t.completed);
                            t.cancel()
                        }
                    }
                    this.objs.clear();
                    this.annotationsPromise = null;
                    this._jsActionsPromise = null;
                    this.pendingCleanup = !1;
                    return Promise.all(e)
                }

                cleanup(e = !1) {
                    this.pendingCleanup = !0;
                    return this._tryCleanup(e)
                }

                _tryCleanup(e = !1) {
                    if (!this.pendingCleanup) return !1;
                    for (const {renderTasks: e, operatorList: t} of this._intentStates.values()) if (0 !== e.length || !t.lastChunk) return !1;
                    this._intentStates.clear();
                    this.objs.clear();
                    this.annotationsPromise = null;
                    this._jsActionsPromise = null;
                    e && this._stats && (this._stats = new _display_utils.StatTimer);
                    this.pendingCleanup = !1;
                    return !0
                }

                _startRenderPage(e, t) {
                    const r = this._intentStates.get(t);
                    if (r) {
                        this._stats && this._stats.timeEnd("Page Request");
                        r.displayReadyCapability && r.displayReadyCapability.resolve(e)
                    }
                }

                _renderPageChunk(e, t) {
                    for (let r = 0, n = e.length; r < n; r++) {
                        t.operatorList.fnArray.push(e.fnArray[r]);
                        t.operatorList.argsArray.push(e.argsArray[r])
                    }
                    t.operatorList.lastChunk = e.lastChunk;
                    for (let e = 0; e < t.renderTasks.length; e++) t.renderTasks[e].operatorListChanged();
                    e.lastChunk && this._tryCleanup()
                }

                _pumpOperatorList(e) {
                    (0, _util.assert)(e.intent, 'PDFPageProxy._pumpOperatorList: Expected "intent" argument.');
                    const t = this._transport.messageHandler.sendWithStream("GetOperatorList", e).getReader(),
                        r = this._intentStates.get(e.intent);
                    r.streamReader = t;
                    const pump = () => {
                        t.read().then((({value: e, done: t}) => {
                            if (t) r.streamReader = null; else if (!this._transport.destroyed) {
                                this._renderPageChunk(e, r);
                                pump()
                            }
                        }), (e => {
                            r.streamReader = null;
                            if (!this._transport.destroyed) {
                                if (r.operatorList) {
                                    r.operatorList.lastChunk = !0;
                                    for (let e = 0; e < r.renderTasks.length; e++) r.renderTasks[e].operatorListChanged();
                                    this._tryCleanup()
                                }
                                if (r.displayReadyCapability) r.displayReadyCapability.reject(e); else {
                                    if (!r.opListReadCapability) throw e;
                                    r.opListReadCapability.reject(e)
                                }
                            }
                        }))
                    };
                    pump()
                }

                _abortOperatorList({intentState: e, reason: t, force: r = !1}) {
                    (0, _util.assert)(t instanceof Error || "object" == typeof t && null !== t, 'PDFPageProxy._abortOperatorList: Expected "reason" argument.');
                    if (e.streamReader) {
                        if (!r) {
                            if (0 !== e.renderTasks.length) return;
                            if (t instanceof _display_utils.RenderingCancelledException) {
                                e.streamReaderCancelTimeout = setTimeout((() => {
                                    this._abortOperatorList({intentState: e, reason: t, force: !0});
                                    e.streamReaderCancelTimeout = null
                                }), RENDERING_CANCELLED_TIMEOUT);
                                return
                            }
                        }
                        e.streamReader.cancel(new _util.AbortException(t?.message));
                        e.streamReader = null;
                        if (!this._transport.destroyed) {
                            for (const [t, r] of this._intentStates) if (r === e) {
                                this._intentStates.delete(t);
                                break
                            }
                            this.cleanup()
                        }
                    }
                }

                get stats() {
                    return this._stats
                }
            }

            exports.PDFPageProxy = PDFPageProxy;

            class LoopbackPort {
                constructor(e = !0) {
                    this._listeners = [];
                    this._defer = e;
                    this._deferred = Promise.resolve(void 0)
                }

                postMessage(e, t) {
                    if (!this._defer) {
                        this._listeners.forEach((t => {
                            t.call(this, {data: e})
                        }));
                        return
                    }
                    const r = new WeakMap, n = {
                        data: function cloneValue(e) {
                            if ("object" != typeof e || null === e) return e;
                            if (r.has(e)) return r.get(e);
                            let n, s;
                            if ((n = e.buffer) && (0, _util.isArrayBuffer)(n)) {
                                s = t?.includes(n) ? new e.constructor(n, e.byteOffset, e.byteLength) : new e.constructor(e);
                                r.set(e, s);
                                return s
                            }
                            s = Array.isArray(e) ? [] : {};
                            r.set(e, s);
                            for (const t in e) {
                                let r, n = e;
                                for (; !(r = Object.getOwnPropertyDescriptor(n, t));) n = Object.getPrototypeOf(n);
                                if (void 0 !== r.value) if ("function" != typeof r.value) s[t] = cloneValue(r.value); else if (e.hasOwnProperty && e.hasOwnProperty(t)) throw new Error(`LoopbackPort.postMessage - cannot clone: ${e[t]}`)
                            }
                            return s
                        }(e)
                    };
                    this._deferred.then((() => {
                        this._listeners.forEach((e => {
                            e.call(this, n)
                        }))
                    }))
                }

                addEventListener(e, t) {
                    this._listeners.push(t)
                }

                removeEventListener(e, t) {
                    const r = this._listeners.indexOf(t);
                    this._listeners.splice(r, 1)
                }

                terminate() {
                    this._listeners.length = 0
                }
            }

            exports.LoopbackPort = LoopbackPort;
            const PDFWorker = function PDFWorkerClosure() {
                const pdfWorkerPorts = new WeakMap;
                let isWorkerDisabled = !1, fallbackWorkerSrc, nextFakeWorkerId = 0, fakeWorkerCapability;
                if (_is_node.isNodeJS && "function" == typeof require) {
                    isWorkerDisabled = !0;
                    fallbackWorkerSrc = "./pdf.worker.js"
                } else if ("object" == typeof document && "currentScript" in document) {
                    const e = document.currentScript?.src;
                    e && (fallbackWorkerSrc = e.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2"))
                }

                function getWorkerSrc() {
                    if (_worker_options.GlobalWorkerOptions.workerSrc) return _worker_options.GlobalWorkerOptions.workerSrc;
                    if (void 0 !== fallbackWorkerSrc) {
                        _is_node.isNodeJS || (0, _display_utils.deprecated)('No "GlobalWorkerOptions.workerSrc" specified.');
                        return fallbackWorkerSrc
                    }
                    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.')
                }

                function getMainThreadWorkerMessageHandler() {
                    let e;
                    try {
                        e = globalThis.pdfjsWorker?.WorkerMessageHandler
                    } catch (e) {
                    }
                    return e || null
                }

                function setupFakeWorkerGlobal() {
                    if (fakeWorkerCapability) return fakeWorkerCapability.promise;
                    fakeWorkerCapability = (0, _util.createPromiseCapability)();
                    const loader = async function () {
                        const mainWorkerMessageHandler = getMainThreadWorkerMessageHandler();
                        if (mainWorkerMessageHandler) return mainWorkerMessageHandler;
                        if (_is_node.isNodeJS && "function" == typeof require) {
                            const worker = eval("require")(getWorkerSrc());
                            return worker.WorkerMessageHandler
                        }
                        await (0, _display_utils.loadScript)(getWorkerSrc());
                        return window.pdfjsWorker.WorkerMessageHandler
                    };
                    loader().then(fakeWorkerCapability.resolve, fakeWorkerCapability.reject);
                    return fakeWorkerCapability.promise
                }

                function createCDNWrapper(e) {
                    const t = "importScripts('" + e + "');";
                    return URL.createObjectURL(new Blob([t]))
                }

                class PDFWorker {
                    constructor({name: e = null, port: t = null, verbosity: r = (0, _util.getVerbosityLevel)()} = {}) {
                        if (t && pdfWorkerPorts.has(t)) throw new Error("Cannot use more than one PDFWorker per port");
                        this.name = e;
                        this.destroyed = !1;
                        this.postMessageTransfers = !0;
                        this.verbosity = r;
                        this._readyCapability = (0, _util.createPromiseCapability)();
                        this._port = null;
                        this._webWorker = null;
                        this._messageHandler = null;
                        if (t) {
                            pdfWorkerPorts.set(t, this);
                            this._initializeFromPort(t)
                        } else this._initialize()
                    }

                    get promise() {
                        return this._readyCapability.promise
                    }

                    get port() {
                        return this._port
                    }

                    get messageHandler() {
                        return this._messageHandler
                    }

                    _initializeFromPort(e) {
                        this._port = e;
                        this._messageHandler = new _message_handler.MessageHandler("main", "worker", e);
                        this._messageHandler.on("ready", (function () {
                        }));
                        this._readyCapability.resolve()
                    }

                    _initialize() {
                        if ("undefined" != typeof Worker && !isWorkerDisabled && !getMainThreadWorkerMessageHandler()) {
                            let e = getWorkerSrc();
                            try {
                                (0, _util.isSameOrigin)(window.location.href, e) || (e = createCDNWrapper(new URL(e, window.location).href));
                                const t = new Worker(e), r = new _message_handler.MessageHandler("main", "worker", t),
                                    terminateEarly = () => {
                                        t.removeEventListener("error", onWorkerError);
                                        r.destroy();
                                        t.terminate();
                                        this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker()
                                    }, onWorkerError = () => {
                                        this._webWorker || terminateEarly()
                                    };
                                t.addEventListener("error", onWorkerError);
                                r.on("test", (e => {
                                    t.removeEventListener("error", onWorkerError);
                                    if (this.destroyed) terminateEarly(); else if (e) {
                                        this._messageHandler = r;
                                        this._port = t;
                                        this._webWorker = t;
                                        e.supportTransfers || (this.postMessageTransfers = !1);
                                        this._readyCapability.resolve();
                                        r.send("configure", {verbosity: this.verbosity})
                                    } else {
                                        this._setupFakeWorker();
                                        r.destroy();
                                        t.terminate()
                                    }
                                }));
                                r.on("ready", (e => {
                                    t.removeEventListener("error", onWorkerError);
                                    if (this.destroyed) terminateEarly(); else try {
                                        sendTest()
                                    } catch (e) {
                                        this._setupFakeWorker()
                                    }
                                }));
                                const sendTest = () => {
                                    const e = new Uint8Array([this.postMessageTransfers ? 255 : 0]);
                                    try {
                                        r.send("test", e, [e.buffer])
                                    } catch (t) {
                                        (0, _util.warn)("Cannot use postMessage transfers.");
                                        e[0] = 0;
                                        r.send("test", e)
                                    }
                                };
                                sendTest();
                                return
                            } catch (e) {
                                (0, _util.info)("The worker has been disabled.")
                            }
                        }
                        this._setupFakeWorker()
                    }

                    _setupFakeWorker() {
                        if (!isWorkerDisabled) {
                            (0, _util.warn)("Setting up fake worker.");
                            isWorkerDisabled = !0
                        }
                        setupFakeWorkerGlobal().then((e => {
                            if (this.destroyed) {
                                this._readyCapability.reject(new Error("Worker was destroyed"));
                                return
                            }
                            const t = new LoopbackPort;
                            this._port = t;
                            const r = "fake" + nextFakeWorkerId++,
                                n = new _message_handler.MessageHandler(r + "_worker", r, t);
                            e.setup(n, t);
                            const s = new _message_handler.MessageHandler(r, r + "_worker", t);
                            this._messageHandler = s;
                            this._readyCapability.resolve();
                            s.send("configure", {verbosity: this.verbosity})
                        })).catch((e => {
                            this._readyCapability.reject(new Error(`Setting up fake worker failed: "${e.message}".`))
                        }))
                    }

                    destroy() {
                        this.destroyed = !0;
                        if (this._webWorker) {
                            this._webWorker.terminate();
                            this._webWorker = null
                        }
                        pdfWorkerPorts.delete(this._port);
                        this._port = null;
                        if (this._messageHandler) {
                            this._messageHandler.destroy();
                            this._messageHandler = null
                        }
                    }

                    static fromPort(e) {
                        if (!e || !e.port) throw new Error("PDFWorker.fromPort - invalid method signature.");
                        return pdfWorkerPorts.has(e.port) ? pdfWorkerPorts.get(e.port) : new PDFWorker(e)
                    }

                    static getWorkerSrc() {
                        return getWorkerSrc()
                    }
                }

                return PDFWorker
            }();
            exports.PDFWorker = PDFWorker;

            class WorkerTransport {
                constructor(e, t, r, n) {
                    this.messageHandler = e;
                    this.loadingTask = t;
                    this.commonObjs = new PDFObjects;
                    this.fontLoader = new _font_loader.FontLoader({
                        docId: t.docId,
                        onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                        ownerDocument: n.ownerDocument
                    });
                    this._params = n;
                    this.CMapReaderFactory = new n.CMapReaderFactory({baseUrl: n.cMapUrl, isCompressed: n.cMapPacked});
                    this.destroyed = !1;
                    this.destroyCapability = null;
                    this._passwordCapability = null;
                    this._networkStream = r;
                    this._fullReader = null;
                    this._lastProgress = null;
                    this.pageCache = [];
                    this.pagePromises = [];
                    this.downloadInfoCapability = (0, _util.createPromiseCapability)();
                    this.setupMessageHandler()
                }

                get loadingTaskSettled() {
                    return this.loadingTask._capability.settled
                }

                destroy() {
                    if (this.destroyCapability) return this.destroyCapability.promise;
                    this.destroyed = !0;
                    this.destroyCapability = (0, _util.createPromiseCapability)();
                    this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
                    const e = [];
                    this.pageCache.forEach((function (t) {
                        t && e.push(t._destroy())
                    }));
                    this.pageCache.length = 0;
                    this.pagePromises.length = 0;
                    const t = this.messageHandler.sendWithPromise("Terminate", null);
                    e.push(t);
                    if (this.loadingTaskSettled) {
                        const t = this.loadingTask.promise.then((e => {
                            e.hasOwnProperty("annotationStorage") && e.annotationStorage.resetModified()
                        })).catch((() => {
                        }));
                        e.push(t)
                    }
                    Promise.all(e).then((() => {
                        this.commonObjs.clear();
                        this.fontLoader.clear();
                        this._hasJSActionsPromise = null;
                        this._networkStream && this._networkStream.cancelAllRequests(new _util.AbortException("Worker was terminated."));
                        if (this.messageHandler) {
                            this.messageHandler.destroy();
                            this.messageHandler = null
                        }
                        this.destroyCapability.resolve()
                    }), this.destroyCapability.reject);
                    return this.destroyCapability.promise
                }

                setupMessageHandler() {
                    const {messageHandler: e, loadingTask: t} = this;
                    e.on("GetReader", ((e, t) => {
                        (0, _util.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available.");
                        this._fullReader = this._networkStream.getFullReader();
                        this._fullReader.onProgress = e => {
                            this._lastProgress = {loaded: e.loaded, total: e.total}
                        };
                        t.onPull = () => {
                            this._fullReader.read().then((function ({value: e, done: r}) {
                                if (r) t.close(); else {
                                    (0, _util.assert)((0, _util.isArrayBuffer)(e), "GetReader - expected an ArrayBuffer.");
                                    t.enqueue(new Uint8Array(e), 1, [e])
                                }
                            })).catch((e => {
                                t.error(e)
                            }))
                        };
                        t.onCancel = e => {
                            this._fullReader.cancel(e);
                            t.ready.catch((e => {
                                if (!this.destroyed) throw e
                            }))
                        }
                    }));
                    e.on("ReaderHeadersReady", (e => {
                        const r = (0, _util.createPromiseCapability)(), n = this._fullReader;
                        n.headersReady.then((() => {
                            if (!n.isStreamingSupported || !n.isRangeSupported) {
                                this._lastProgress && t.onProgress && t.onProgress(this._lastProgress);
                                n.onProgress = e => {
                                    t.onProgress && t.onProgress({loaded: e.loaded, total: e.total})
                                }
                            }
                            r.resolve({
                                isStreamingSupported: n.isStreamingSupported,
                                isRangeSupported: n.isRangeSupported,
                                contentLength: n.contentLength
                            })
                        }), r.reject);
                        return r.promise
                    }));
                    e.on("GetRangeReader", ((e, t) => {
                        (0, _util.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                        const r = this._networkStream.getRangeReader(e.begin, e.end);
                        if (r) {
                            t.onPull = () => {
                                r.read().then((function ({value: e, done: r}) {
                                    if (r) t.close(); else {
                                        (0, _util.assert)((0, _util.isArrayBuffer)(e), "GetRangeReader - expected an ArrayBuffer.");
                                        t.enqueue(new Uint8Array(e), 1, [e])
                                    }
                                })).catch((e => {
                                    t.error(e)
                                }))
                            };
                            t.onCancel = e => {
                                r.cancel(e);
                                t.ready.catch((e => {
                                    if (!this.destroyed) throw e
                                }))
                            }
                        } else t.close()
                    }));
                    e.on("GetDoc", (({pdfInfo: e}) => {
                        this._numPages = e.numPages;
                        t._capability.resolve(new PDFDocumentProxy(e, this))
                    }));
                    e.on("DocException", (function (e) {
                        let r;
                        switch (e.name) {
                            case"PasswordException":
                                r = new _util.PasswordException(e.message, e.code);
                                break;
                            case"InvalidPDFException":
                                r = new _util.InvalidPDFException(e.message);
                                break;
                            case"MissingPDFException":
                                r = new _util.MissingPDFException(e.message);
                                break;
                            case"UnexpectedResponseException":
                                r = new _util.UnexpectedResponseException(e.message, e.status);
                                break;
                            case"UnknownErrorException":
                                r = new _util.UnknownErrorException(e.message, e.details)
                        }
                        if (!(r instanceof Error)) {
                            const e = "DocException - expected a valid Error.";
                            (0, _util.warn)(e)
                        }
                        t._capability.reject(r)
                    }));
                    e.on("PasswordRequest", (e => {
                        this._passwordCapability = (0, _util.createPromiseCapability)();
                        if (t.onPassword) {
                            const updatePassword = e => {
                                this._passwordCapability.resolve({password: e})
                            };
                            try {
                                t.onPassword(updatePassword, e.code)
                            } catch (e) {
                                this._passwordCapability.reject(e)
                            }
                        } else this._passwordCapability.reject(new _util.PasswordException(e.message, e.code));
                        return this._passwordCapability.promise
                    }));
                    e.on("DataLoaded", (e => {
                        t.onProgress && t.onProgress({loaded: e.length, total: e.length});
                        this.downloadInfoCapability.resolve(e)
                    }));
                    e.on("StartRenderPage", (e => {
                        if (this.destroyed) return;
                        this.pageCache[e.pageIndex]._startRenderPage(e.transparency, e.intent)
                    }));
                    e.on("commonobj", (t => {
                        if (this.destroyed) return;
                        const [r, n, s] = t;
                        if (!this.commonObjs.has(r)) switch (n) {
                            case"Font":
                                const t = this._params;
                                if ("error" in s) {
                                    const e = s.error;
                                    (0, _util.warn)(`Error during font loading: ${e}`);
                                    this.commonObjs.resolve(r, e);
                                    break
                                }
                                let i = null;
                                t.pdfBug && globalThis.FontInspector?.enabled && (i = {
                                    registerFont(e, t) {
                                        globalThis.FontInspector.fontAdded(e, t)
                                    }
                                });
                                const a = new _font_loader.FontFaceObject(s, {
                                    isEvalSupported: t.isEvalSupported,
                                    disableFontFace: t.disableFontFace,
                                    ignoreErrors: t.ignoreErrors,
                                    onUnsupportedFeature: this._onUnsupportedFeature.bind(this),
                                    fontRegistry: i
                                });
                                this.fontLoader.bind(a).catch((t => e.sendWithPromise("FontFallback", {id: r}))).finally((() => {
                                    !t.fontExtraProperties && a.data && (a.data = null);
                                    this.commonObjs.resolve(r, a)
                                }));
                                break;
                            case"FontPath":
                            case"Image":
                                this.commonObjs.resolve(r, s);
                                break;
                            default:
                                throw new Error(`Got unknown common object type ${n}`)
                        }
                    }));
                    e.on("obj", (e => {
                        if (this.destroyed) return;
                        const [t, r, n, s] = e, i = this.pageCache[r];
                        if (!i.objs.has(t)) switch (n) {
                            case"Image":
                                i.objs.resolve(t, s);
                                const e = 8e6;
                                s?.data?.length > e && (i.cleanupAfterRender = !0);
                                break;
                            default:
                                throw new Error(`Got unknown object type ${n}`)
                        }
                    }));
                    e.on("DocProgress", (e => {
                        this.destroyed || t.onProgress && t.onProgress({loaded: e.loaded, total: e.total})
                    }));
                    e.on("UnsupportedFeature", this._onUnsupportedFeature.bind(this));
                    e.on("FetchBuiltInCMap", ((e, t) => {
                        if (this.destroyed) {
                            t.error(new Error("Worker was destroyed"));
                            return
                        }
                        let r = !1;
                        t.onPull = () => {
                            if (r) t.close(); else {
                                r = !0;
                                this.CMapReaderFactory.fetch(e).then((function (e) {
                                    t.enqueue(e, 1, [e.cMapData.buffer])
                                })).catch((function (e) {
                                    t.error(e)
                                }))
                            }
                        }
                    }))
                }

                _onUnsupportedFeature({featureId: e}) {
                    this.destroyed || this.loadingTask.onUnsupportedFeature && this.loadingTask.onUnsupportedFeature(e)
                }

                getData() {
                    return this.messageHandler.sendWithPromise("GetData", null)
                }

                getPage(e) {
                    if (!Number.isInteger(e) || e <= 0 || e > this._numPages) return Promise.reject(new Error("Invalid page request"));
                    const t = e - 1;
                    if (t in this.pagePromises) return this.pagePromises[t];
                    const r = this.messageHandler.sendWithPromise("GetPage", {pageIndex: t}).then((e => {
                        if (this.destroyed) throw new Error("Transport destroyed");
                        const r = new PDFPageProxy(t, e, this, this._params.ownerDocument, this._params.pdfBug);
                        this.pageCache[t] = r;
                        return r
                    }));
                    this.pagePromises[t] = r;
                    return r
                }

                getPageIndex(e) {
                    return this.messageHandler.sendWithPromise("GetPageIndex", {ref: e}).catch((function (e) {
                        return Promise.reject(new Error(e))
                    }))
                }

                getAnnotations(e, t) {
                    return this.messageHandler.sendWithPromise("GetAnnotations", {pageIndex: e, intent: t})
                }

                saveDocument(e) {
                    return this.messageHandler.sendWithPromise("SaveDocument", {
                        numPages: this._numPages,
                        annotationStorage: e?.getAll() || null,
                        filename: this._fullReader?.filename ?? null
                    }).finally((() => {
                        e && e.resetModified()
                    }))
                }

                getFieldObjects() {
                    return this.messageHandler.sendWithPromise("GetFieldObjects", null)
                }

                hasJSActions() {
                    return this._hasJSActionsPromise || (this._hasJSActionsPromise = this.messageHandler.sendWithPromise("HasJSActions", null))
                }

                getCalculationOrderIds() {
                    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null)
                }

                getDestinations() {
                    return this.messageHandler.sendWithPromise("GetDestinations", null)
                }

                getDestination(e) {
                    return "string" != typeof e ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {id: e})
                }

                getPageLabels() {
                    return this.messageHandler.sendWithPromise("GetPageLabels", null)
                }

                getPageLayout() {
                    return this.messageHandler.sendWithPromise("GetPageLayout", null)
                }

                getPageMode() {
                    return this.messageHandler.sendWithPromise("GetPageMode", null)
                }

                getViewerPreferences() {
                    return this.messageHandler.sendWithPromise("GetViewerPreferences", null)
                }

                getOpenAction() {
                    return this.messageHandler.sendWithPromise("GetOpenAction", null)
                }

                getAttachments() {
                    return this.messageHandler.sendWithPromise("GetAttachments", null)
                }

                getJavaScript() {
                    return this.messageHandler.sendWithPromise("GetJavaScript", null)
                }

                getDocJSActions() {
                    return this.messageHandler.sendWithPromise("GetDocJSActions", null)
                }

                getPageJSActions(e) {
                    return this.messageHandler.sendWithPromise("GetPageJSActions", {pageIndex: e})
                }

                getOutline() {
                    return this.messageHandler.sendWithPromise("GetOutline", null)
                }

                getOptionalContentConfig() {
                    return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((e => new _optional_content_config.OptionalContentConfig(e)))
                }

                getPermissions() {
                    return this.messageHandler.sendWithPromise("GetPermissions", null)
                }

                getMetadata() {
                    return this.messageHandler.sendWithPromise("GetMetadata", null).then((e => ({
                        info: e[0],
                        metadata: e[1] ? new _metadata.Metadata(e[1]) : null,
                        contentDispositionFilename: this._fullReader?.filename ?? null,
                        contentLength: this._fullReader?.contentLength ?? null
                    })))
                }

                getMarkInfo() {
                    return this.messageHandler.sendWithPromise("GetMarkInfo", null)
                }

                getStats() {
                    return this.messageHandler.sendWithPromise("GetStats", null)
                }

                startCleanup() {
                    return this.messageHandler.sendWithPromise("Cleanup", null).then((() => {
                        for (let e = 0, t = this.pageCache.length; e < t; e++) {
                            const t = this.pageCache[e];
                            if (t) {
                                if (!t.cleanup()) throw new Error(`startCleanup: Page ${e + 1} is currently rendering.`)
                            }
                        }
                        this.commonObjs.clear();
                        this.fontLoader.clear();
                        this._hasJSActionsPromise = null
                    }))
                }

                get loadingParams() {
                    const e = this._params;
                    return (0, _util.shadow)(this, "loadingParams", {
                        disableAutoFetch: e.disableAutoFetch,
                        disableFontFace: e.disableFontFace
                    })
                }
            }

            class PDFObjects {
                constructor() {
                    this._objs = Object.create(null)
                }

                _ensureObj(e) {
                    return this._objs[e] ? this._objs[e] : this._objs[e] = {
                        capability: (0, _util.createPromiseCapability)(),
                        data: null,
                        resolved: !1
                    }
                }

                get(e, t = null) {
                    if (t) {
                        this._ensureObj(e).capability.promise.then(t);
                        return null
                    }
                    const r = this._objs[e];
                    if (!r || !r.resolved) throw new Error(`Requesting object that isn't resolved yet ${e}.`);
                    return r.data
                }

                has(e) {
                    return this._objs[e]?.resolved || !1
                }

                resolve(e, t) {
                    const r = this._ensureObj(e);
                    r.resolved = !0;
                    r.data = t;
                    r.capability.resolve(t)
                }

                clear() {
                    this._objs = Object.create(null)
                }
            }

            class RenderTask {
                constructor(e) {
                    this._internalRenderTask = e;
                    this.onContinue = null
                }

                get promise() {
                    return this._internalRenderTask.capability.promise
                }

                cancel() {
                    this._internalRenderTask.cancel()
                }
            }

            const InternalRenderTask = function InternalRenderTaskClosure() {
                const e = new WeakSet;
                return class InternalRenderTask {
                    constructor({callback: e, params: t, objs: r, commonObjs: n, operatorList: s, pageIndex: i, canvasFactory: a, webGLContext: o, useRequestAnimationFrame: l = !1, pdfBug: c = !1}) {
                        this.callback = e;
                        this.params = t;
                        this.objs = r;
                        this.commonObjs = n;
                        this.operatorListIdx = null;
                        this.operatorList = s;
                        this._pageIndex = i;
                        this.canvasFactory = a;
                        this.webGLContext = o;
                        this._pdfBug = c;
                        this.running = !1;
                        this.graphicsReadyCallback = null;
                        this.graphicsReady = !1;
                        this._useRequestAnimationFrame = !0 === l && "undefined" != typeof window;
                        this.cancelled = !1;
                        this.capability = (0, _util.createPromiseCapability)();
                        this.task = new RenderTask(this);
                        this._continueBound = this._continue.bind(this);
                        this._scheduleNextBound = this._scheduleNext.bind(this);
                        this._nextBound = this._next.bind(this);
                        this._canvas = t.canvasContext.canvas
                    }

                    get completed() {
                        return this.capability.promise.catch((function () {
                        }))
                    }

                    initializeGraphics({transparency: t = !1, optionalContentConfig: r}) {
                        if (this.cancelled) return;
                        if (this._canvas) {
                            if (e.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                            e.add(this._canvas)
                        }
                        if (this._pdfBug && globalThis.StepperManager?.enabled) {
                            this.stepper = globalThis.StepperManager.create(this._pageIndex);
                            this.stepper.init(this.operatorList);
                            this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()
                        }
                        const {canvasContext: n, viewport: s, transform: i, imageLayer: a, background: o} = this.params;
                        this.gfx = new _canvas.CanvasGraphics(n, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext, a, r);
                        this.gfx.beginDrawing({transform: i, viewport: s, transparency: t, background: o});
                        this.operatorListIdx = 0;
                        this.graphicsReady = !0;
                        this.graphicsReadyCallback && this.graphicsReadyCallback()
                    }

                    cancel(t = null) {
                        this.running = !1;
                        this.cancelled = !0;
                        this.gfx && this.gfx.endDrawing();
                        this._canvas && e.delete(this._canvas);
                        this.callback(t || new _display_utils.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, "canvas"))
                    }

                    operatorListChanged() {
                        if (this.graphicsReady) {
                            this.stepper && this.stepper.updateOperatorList(this.operatorList);
                            this.running || this._continue()
                        } else this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound)
                    }

                    _continue() {
                        this.running = !0;
                        this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
                    }

                    _scheduleNext() {
                        this._useRequestAnimationFrame ? window.requestAnimationFrame((() => {
                            this._nextBound().catch(this.cancel.bind(this))
                        })) : Promise.resolve().then(this._nextBound).catch(this.cancel.bind(this))
                    }

                    async _next() {
                        if (!this.cancelled) {
                            this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper);
                            if (this.operatorListIdx === this.operatorList.argsArray.length) {
                                this.running = !1;
                                if (this.operatorList.lastChunk) {
                                    this.gfx.endDrawing();
                                    this._canvas && e.delete(this._canvas);
                                    this.callback()
                                }
                            }
                        }
                    }
                }
            }(), version = "2.7.570";
            exports.version = version;
            const build = "f2c7338b0";
            exports.build = build
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.FontLoader = t.FontFaceObject = void 0;
            var n = r(2);

            class BaseFontLoader {
                constructor({docId: e, onUnsupportedFeature: t, ownerDocument: r = globalThis.document}) {
                    this.constructor === BaseFontLoader && (0, n.unreachable)("Cannot initialize BaseFontLoader.");
                    this.docId = e;
                    this._onUnsupportedFeature = t;
                    this._document = r;
                    this.nativeFontFaces = [];
                    this.styleElement = null
                }

                addNativeFontFace(e) {
                    this.nativeFontFaces.push(e);
                    this._document.fonts.add(e)
                }

                insertRule(e) {
                    let t = this.styleElement;
                    if (!t) {
                        t = this.styleElement = this._document.createElement("style");
                        t.id = `PDFJS_FONT_STYLE_TAG_${this.docId}`;
                        this._document.documentElement.getElementsByTagName("head")[0].appendChild(t)
                    }
                    const r = t.sheet;
                    r.insertRule(e, r.cssRules.length)
                }

                clear() {
                    this.nativeFontFaces.forEach((e => {
                        this._document.fonts.delete(e)
                    }));
                    this.nativeFontFaces.length = 0;
                    if (this.styleElement) {
                        this.styleElement.remove();
                        this.styleElement = null
                    }
                }

                async bind(e) {
                    if (e.attached || e.missingFile) return;
                    e.attached = !0;
                    if (this.isFontLoadingAPISupported) {
                        const t = e.createNativeFontFace();
                        if (t) {
                            this.addNativeFontFace(t);
                            try {
                                await t.loaded
                            } catch (r) {
                                this._onUnsupportedFeature({featureId: n.UNSUPPORTED_FEATURES.errorFontLoadNative});
                                (0, n.warn)(`Failed to load font '${t.family}': '${r}'.`);
                                e.disableFontFace = !0;
                                throw r
                            }
                        }
                        return
                    }
                    const t = e.createFontFaceRule();
                    if (t) {
                        this.insertRule(t);
                        if (this.isSyncFontLoadingSupported) return;
                        await new Promise((r => {
                            const n = this._queueLoadingCallback(r);
                            this._prepareFontLoadEvent([t], [e], n)
                        }))
                    }
                }

                _queueLoadingCallback(e) {
                    (0, n.unreachable)("Abstract method `_queueLoadingCallback`.")
                }

                get isFontLoadingAPISupported() {
                    return (0, n.shadow)(this, "isFontLoadingAPISupported", !!this._document?.fonts)
                }

                get isSyncFontLoadingSupported() {
                    (0, n.unreachable)("Abstract method `isSyncFontLoadingSupported`.")
                }

                get _loadTestFont() {
                    (0, n.unreachable)("Abstract method `_loadTestFont`.")
                }

                _prepareFontLoadEvent(e, t, r) {
                    (0, n.unreachable)("Abstract method `_prepareFontLoadEvent`.")
                }
            }

            let s;
            t.FontLoader = s;
            t.FontLoader = s = class GenericFontLoader extends BaseFontLoader {
                constructor(e) {
                    super(e);
                    this.loadingContext = {requests: [], nextRequestId: 0};
                    this.loadTestFontId = 0
                }

                get isSyncFontLoadingSupported() {
                    let e = !1;
                    if ("undefined" == typeof navigator) e = !0; else {
                        /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent)?.[1] >= 14 && (e = !0)
                    }
                    return (0, n.shadow)(this, "isSyncFontLoadingSupported", e)
                }

                _queueLoadingCallback(e) {
                    const t = this.loadingContext, r = {
                        id: "pdfjs-font-loading-" + t.nextRequestId++,
                        done: !1,
                        complete: function completeRequest() {
                            (0, n.assert)(!r.done, "completeRequest() cannot be called twice.");
                            r.done = !0;
                            for (; t.requests.length > 0 && t.requests[0].done;) {
                                const e = t.requests.shift();
                                setTimeout(e.callback, 0)
                            }
                        },
                        callback: e
                    };
                    t.requests.push(r);
                    return r
                }

                get _loadTestFont() {
                    return (0, n.shadow)(this, "_loadTestFont", atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA=="))
                }

                _prepareFontLoadEvent(e, t, r) {
                    function int32(e, t) {
                        return e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | 255 & e.charCodeAt(t + 3)
                    }

                    function spliceString(e, t, r, n) {
                        return e.substring(0, t) + n + e.substring(t + r)
                    }

                    let s, i;
                    const a = this._document.createElement("canvas");
                    a.width = 1;
                    a.height = 1;
                    const o = a.getContext("2d");
                    let l = 0;
                    const c = `lt${Date.now()}${this.loadTestFontId++}`;
                    let h = this._loadTestFont;
                    h = spliceString(h, 976, c.length, c);
                    const d = 1482184792;
                    let u = int32(h, 16);
                    for (s = 0, i = c.length - 3; s < i; s += 4) u = u - d + int32(c, s) | 0;
                    s < c.length && (u = u - d + int32(c + "XXX", s) | 0);
                    h = spliceString(h, 16, 4, (0, n.string32)(u));
                    const p = `@font-face {font-family:"${c}";src:${`url(data:font/opentype;base64,${btoa(h)});`}}`;
                    this.insertRule(p);
                    const f = [];
                    for (s = 0, i = t.length; s < i; s++) f.push(t[s].loadedName);
                    f.push(c);
                    const g = this._document.createElement("div");
                    g.style.visibility = "hidden";
                    g.style.width = g.style.height = "10px";
                    g.style.position = "absolute";
                    g.style.top = g.style.left = "0px";
                    for (s = 0, i = f.length; s < i; ++s) {
                        const e = this._document.createElement("span");
                        e.textContent = "Hi";
                        e.style.fontFamily = f[s];
                        g.appendChild(e)
                    }
                    this._document.body.appendChild(g);
                    !function isFontReady(e, t) {
                        l++;
                        if (l > 30) {
                            (0, n.warn)("Load test font never loaded.");
                            t();
                            return
                        }
                        o.font = "30px " + e;
                        o.fillText(".", 0, 20);
                        o.getImageData(0, 0, 1, 1).data[3] > 0 ? t() : setTimeout(isFontReady.bind(null, e, t))
                    }(c, (() => {
                        this._document.body.removeChild(g);
                        r.complete()
                    }))
                }
            };
            t.FontFaceObject = class FontFaceObject {
                constructor(e, {isEvalSupported: t = !0, disableFontFace: r = !1, ignoreErrors: n = !1, onUnsupportedFeature: s = null, fontRegistry: i = null}) {
                    this.compiledGlyphs = Object.create(null);
                    for (const t in e) this[t] = e[t];
                    this.isEvalSupported = !1 !== t;
                    this.disableFontFace = !0 === r;
                    this.ignoreErrors = !0 === n;
                    this._onUnsupportedFeature = s;
                    this.fontRegistry = i
                }

                createNativeFontFace() {
                    if (!this.data || this.disableFontFace) return null;
                    const e = new FontFace(this.loadedName, this.data, {});
                    this.fontRegistry && this.fontRegistry.registerFont(this);
                    return e
                }

                createFontFaceRule() {
                    if (!this.data || this.disableFontFace) return null;
                    const e = (0, n.bytesToString)(new Uint8Array(this.data)),
                        t = `url(data:${this.mimetype};base64,${btoa(e)});`,
                        r = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
                    this.fontRegistry && this.fontRegistry.registerFont(this, t);
                    return r
                }

                getPathGenerator(e, t) {
                    if (void 0 !== this.compiledGlyphs[t]) return this.compiledGlyphs[t];
                    let r, s;
                    try {
                        r = e.get(this.loadedName + "_path_" + t)
                    } catch (e) {
                        if (!this.ignoreErrors) throw e;
                        this._onUnsupportedFeature && this._onUnsupportedFeature({featureId: n.UNSUPPORTED_FEATURES.errorFontGetPath});
                        (0, n.warn)(`getPathGenerator - ignoring character: "${e}".`);
                        return this.compiledGlyphs[t] = function (e, t) {
                        }
                    }
                    if (this.isEvalSupported && n.IsEvalSupportedCached.value) {
                        let e, n = "";
                        for (let t = 0, i = r.length; t < i; t++) {
                            s = r[t];
                            e = void 0 !== s.args ? s.args.join(",") : "";
                            n += "c." + s.cmd + "(" + e + ");\n"
                        }
                        return this.compiledGlyphs[t] = new Function("c", "size", n)
                    }
                    return this.compiledGlyphs[t] = function (e, t) {
                        for (let n = 0, i = r.length; n < i; n++) {
                            s = r[n];
                            "scale" === s.cmd && (s.args = [t, -t]);
                            e[s.cmd].apply(e, s.args)
                        }
                    }
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.NodeCMapReaderFactory = t.NodeCanvasFactory = void 0;
            var n = r(1), s = r(4), i = r(2);
            let a = class {
                constructor() {
                    (0, i.unreachable)("Not implemented: NodeCanvasFactory")
                }
            };
            t.NodeCanvasFactory = a;
            let o = class {
                constructor() {
                    (0, i.unreachable)("Not implemented: NodeCMapReaderFactory")
                }
            };
            t.NodeCMapReaderFactory = o;
            if (s.isNodeJS) {
                t.NodeCanvasFactory = a = class extends n.BaseCanvasFactory {
                    create(e, t) {
                        if (e <= 0 || t <= 0) throw new Error("Invalid canvas size");
                        const r = require("canvas").createCanvas(e, t);
                        return {canvas: r, context: r.getContext("2d")}
                    }
                };
                t.NodeCMapReaderFactory = o = class extends n.BaseCMapReaderFactory {
                    _fetchData(e, t) {
                        return new Promise(((r, n) => {
                            require("fs").readFile(e, ((e, s) => {
                                !e && s ? r({cMapData: new Uint8Array(s), compressionType: t}) : n(new Error(e))
                            }))
                        }))
                    }
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.AnnotationStorage = void 0;
            var n = r(2);
            t.AnnotationStorage = class AnnotationStorage {
                constructor() {
                    this._storage = new Map;
                    this._modified = !1;
                    this.onSetModified = null;
                    this.onResetModified = null
                }

                getOrCreateValue(e, t) {
                    if (this._storage.has(e)) return this._storage.get(e);
                    this._storage.set(e, t);
                    return t
                }

                setValue(e, t) {
                    const r = this._storage.get(e);
                    let n = !1;
                    if (void 0 !== r) {
                        for (const [e, s] of Object.entries(t)) if (r[e] !== s) {
                            n = !0;
                            r[e] = s
                        }
                    } else {
                        this._storage.set(e, t);
                        n = !0
                    }
                    n && this._setModified()
                }

                getAll() {
                    return 0 === this._storage.size ? null : (0, n.objectFromEntries)(this._storage)
                }

                get size() {
                    return this._storage.size
                }

                _setModified() {
                    if (!this._modified) {
                        this._modified = !0;
                        "function" == typeof this.onSetModified && this.onSetModified()
                    }
                }

                resetModified() {
                    if (this._modified) {
                        this._modified = !1;
                        "function" == typeof this.onResetModified && this.onResetModified()
                    }
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.apiCompatibilityParams = void 0;
            var n = r(4);
            const s = Object.create(null);
            !function checkFontFace() {
                n.isNodeJS && (s.disableFontFace = !0)
            }();
            const i = Object.freeze(s);
            t.apiCompatibilityParams = i
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.CanvasGraphics = void 0;
            var n = r(2), s = r(11);
            const i = 4096, a = 16;

            function addContextCurrentTransform(e) {
                if (!e.mozCurrentTransform) {
                    e._originalSave = e.save;
                    e._originalRestore = e.restore;
                    e._originalRotate = e.rotate;
                    e._originalScale = e.scale;
                    e._originalTranslate = e.translate;
                    e._originalTransform = e.transform;
                    e._originalSetTransform = e.setTransform;
                    e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0];
                    e._transformStack = [];
                    Object.defineProperty(e, "mozCurrentTransform", {
                        get: function getCurrentTransform() {
                            return this._transformMatrix
                        }
                    });
                    Object.defineProperty(e, "mozCurrentTransformInverse", {
                        get: function getCurrentTransformInverse() {
                            const e = this._transformMatrix, t = e[0], r = e[1], n = e[2], s = e[3], i = e[4], a = e[5],
                                o = t * s - r * n, l = r * n - t * s;
                            return [s / o, r / l, n / l, t / o, (s * i - n * a) / l, (r * i - t * a) / o]
                        }
                    });
                    e.save = function ctxSave() {
                        const e = this._transformMatrix;
                        this._transformStack.push(e);
                        this._transformMatrix = e.slice(0, 6);
                        this._originalSave()
                    };
                    e.restore = function ctxRestore() {
                        const e = this._transformStack.pop();
                        if (e) {
                            this._transformMatrix = e;
                            this._originalRestore()
                        }
                    };
                    e.translate = function ctxTranslate(e, t) {
                        const r = this._transformMatrix;
                        r[4] = r[0] * e + r[2] * t + r[4];
                        r[5] = r[1] * e + r[3] * t + r[5];
                        this._originalTranslate(e, t)
                    };
                    e.scale = function ctxScale(e, t) {
                        const r = this._transformMatrix;
                        r[0] = r[0] * e;
                        r[1] = r[1] * e;
                        r[2] = r[2] * t;
                        r[3] = r[3] * t;
                        this._originalScale(e, t)
                    };
                    e.transform = function ctxTransform(t, r, n, s, i, a) {
                        const o = this._transformMatrix;
                        this._transformMatrix = [o[0] * t + o[2] * r, o[1] * t + o[3] * r, o[0] * n + o[2] * s, o[1] * n + o[3] * s, o[0] * i + o[2] * a + o[4], o[1] * i + o[3] * a + o[5]];
                        e._originalTransform(t, r, n, s, i, a)
                    };
                    e.setTransform = function ctxSetTransform(t, r, n, s, i, a) {
                        this._transformMatrix = [t, r, n, s, i, a];
                        e._originalSetTransform(t, r, n, s, i, a)
                    };
                    e.rotate = function ctxRotate(e) {
                        const t = Math.cos(e), r = Math.sin(e), n = this._transformMatrix;
                        this._transformMatrix = [n[0] * t + n[2] * r, n[1] * t + n[3] * r, n[0] * -r + n[2] * t, n[1] * -r + n[3] * t, n[4], n[5]];
                        this._originalRotate(e)
                    }
                }
            }

            const o = function CachedCanvasesClosure() {
                function CachedCanvases(e) {
                    this.canvasFactory = e;
                    this.cache = Object.create(null)
                }

                CachedCanvases.prototype = {
                    getCanvas: function CachedCanvases_getCanvas(e, t, r, n) {
                        let s;
                        if (void 0 !== this.cache[e]) {
                            s = this.cache[e];
                            this.canvasFactory.reset(s, t, r);
                            s.context.setTransform(1, 0, 0, 1, 0, 0)
                        } else {
                            s = this.canvasFactory.create(t, r);
                            this.cache[e] = s
                        }
                        n && addContextCurrentTransform(s.context);
                        return s
                    }, clear() {
                        for (const e in this.cache) {
                            const t = this.cache[e];
                            this.canvasFactory.destroy(t);
                            delete this.cache[e]
                        }
                    }
                };
                return CachedCanvases
            }();
            const l = function CanvasExtraStateClosure() {
                function CanvasExtraState() {
                    this.alphaIsShape = !1;
                    this.fontSize = 0;
                    this.fontSizeScale = 1;
                    this.textMatrix = n.IDENTITY_MATRIX;
                    this.textMatrixScale = 1;
                    this.fontMatrix = n.FONT_IDENTITY_MATRIX;
                    this.leading = 0;
                    this.x = 0;
                    this.y = 0;
                    this.lineX = 0;
                    this.lineY = 0;
                    this.charSpacing = 0;
                    this.wordSpacing = 0;
                    this.textHScale = 1;
                    this.textRenderingMode = n.TextRenderingMode.FILL;
                    this.textRise = 0;
                    this.fillColor = "#000000";
                    this.strokeColor = "#000000";
                    this.patternFill = !1;
                    this.fillAlpha = 1;
                    this.strokeAlpha = 1;
                    this.lineWidth = 1;
                    this.activeSMask = null;
                    this.resumeSMaskCtx = null;
                    this.transferMaps = null
                }

                CanvasExtraState.prototype = {
                    clone: function CanvasExtraState_clone() {
                        return Object.create(this)
                    }, setCurrentPoint: function CanvasExtraState_setCurrentPoint(e, t) {
                        this.x = e;
                        this.y = t
                    }
                };
                return CanvasExtraState
            }(), c = function CanvasGraphicsClosure() {
                function CanvasGraphics(e, t, r, n, s, i, a) {
                    this.ctx = e;
                    this.current = new l;
                    this.stateStack = [];
                    this.pendingClip = null;
                    this.pendingEOFill = !1;
                    this.res = null;
                    this.xobjs = null;
                    this.commonObjs = t;
                    this.objs = r;
                    this.canvasFactory = n;
                    this.webGLContext = s;
                    this.imageLayer = i;
                    this.groupStack = [];
                    this.processingType3 = null;
                    this.baseTransform = null;
                    this.baseTransformStack = [];
                    this.groupLevel = 0;
                    this.smaskStack = [];
                    this.smaskCounter = 0;
                    this.tempSMask = null;
                    this.contentVisible = !0;
                    this.markedContentStack = [];
                    this.optionalContentConfig = a;
                    this.cachedCanvases = new o(this.canvasFactory);
                    e && addContextCurrentTransform(e);
                    this._cachedGetSinglePixelWidth = null
                }

                function putBinaryImageData(e, t, r = null) {
                    if ("undefined" != typeof ImageData && t instanceof ImageData) {
                        e.putImageData(t, 0, 0);
                        return
                    }
                    const s = t.height, i = t.width, o = s % a, l = (s - o) / a, c = 0 === o ? l : l + 1,
                        h = e.createImageData(i, a);
                    let d, u = 0;
                    const p = t.data, f = h.data;
                    let g, m, A, _, b, y, S, C;
                    if (r) switch (r.length) {
                        case 1:
                            b = r[0];
                            y = r[0];
                            S = r[0];
                            C = r[0];
                            break;
                        case 4:
                            b = r[0];
                            y = r[1];
                            S = r[2];
                            C = r[3]
                    }
                    if (t.kind === n.ImageKind.GRAYSCALE_1BPP) {
                        const t = p.byteLength, r = new Uint32Array(f.buffer, 0, f.byteLength >> 2), s = r.length,
                            _ = i + 7 >> 3;
                        let b = 4294967295, y = n.IsLittleEndianCached.value ? 4278190080 : 255;
                        C && 255 === C[0] && 0 === C[255] && ([b, y] = [y, b]);
                        for (g = 0; g < c; g++) {
                            A = g < l ? a : o;
                            d = 0;
                            for (m = 0; m < A; m++) {
                                const e = t - u;
                                let n = 0;
                                const s = e > _ ? i : 8 * e - 7, a = -8 & s;
                                let o = 0, l = 0;
                                for (; n < a; n += 8) {
                                    l = p[u++];
                                    r[d++] = 128 & l ? b : y;
                                    r[d++] = 64 & l ? b : y;
                                    r[d++] = 32 & l ? b : y;
                                    r[d++] = 16 & l ? b : y;
                                    r[d++] = 8 & l ? b : y;
                                    r[d++] = 4 & l ? b : y;
                                    r[d++] = 2 & l ? b : y;
                                    r[d++] = 1 & l ? b : y
                                }
                                for (; n < s; n++) {
                                    if (0 === o) {
                                        l = p[u++];
                                        o = 128
                                    }
                                    r[d++] = l & o ? b : y;
                                    o >>= 1
                                }
                            }
                            for (; d < s;) r[d++] = 0;
                            e.putImageData(h, 0, g * a)
                        }
                    } else if (t.kind === n.ImageKind.RGBA_32BPP) {
                        const t = !!(b || y || S);
                        m = 0;
                        _ = i * a * 4;
                        for (g = 0; g < l; g++) {
                            f.set(p.subarray(u, u + _));
                            u += _;
                            if (t) for (let e = 0; e < _; e += 4) {
                                b && (f[e + 0] = b[f[e + 0]]);
                                y && (f[e + 1] = y[f[e + 1]]);
                                S && (f[e + 2] = S[f[e + 2]])
                            }
                            e.putImageData(h, 0, m);
                            m += a
                        }
                        if (g < c) {
                            _ = i * o * 4;
                            f.set(p.subarray(u, u + _));
                            if (t) for (let e = 0; e < _; e += 4) {
                                b && (f[e + 0] = b[f[e + 0]]);
                                y && (f[e + 1] = y[f[e + 1]]);
                                S && (f[e + 2] = S[f[e + 2]])
                            }
                            e.putImageData(h, 0, m)
                        }
                    } else {
                        if (t.kind !== n.ImageKind.RGB_24BPP) throw new Error(`bad image kind: ${t.kind}`);
                        {
                            const t = !!(b || y || S);
                            A = a;
                            _ = i * A;
                            for (g = 0; g < c; g++) {
                                if (g >= l) {
                                    A = o;
                                    _ = i * A
                                }
                                d = 0;
                                for (m = _; m--;) {
                                    f[d++] = p[u++];
                                    f[d++] = p[u++];
                                    f[d++] = p[u++];
                                    f[d++] = 255
                                }
                                if (t) for (let e = 0; e < d; e += 4) {
                                    b && (f[e + 0] = b[f[e + 0]]);
                                    y && (f[e + 1] = y[f[e + 1]]);
                                    S && (f[e + 2] = S[f[e + 2]])
                                }
                                e.putImageData(h, 0, g * a)
                            }
                        }
                    }
                }

                function putBinaryImageMask(e, t) {
                    const r = t.height, n = t.width, s = r % a, i = (r - s) / a, o = 0 === s ? i : i + 1,
                        l = e.createImageData(n, a);
                    let c = 0;
                    const h = t.data, d = l.data;
                    for (let t = 0; t < o; t++) {
                        const r = t < i ? a : s;
                        let o = 3;
                        for (let e = 0; e < r; e++) {
                            let e, t = 0;
                            for (let r = 0; r < n; r++) {
                                if (!t) {
                                    e = h[c++];
                                    t = 128
                                }
                                d[o] = e & t ? 0 : 255;
                                o += 4;
                                t >>= 1
                            }
                        }
                        e.putImageData(l, 0, t * a)
                    }
                }

                function copyCtxState(e, t) {
                    const r = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"];
                    for (let n = 0, s = r.length; n < s; n++) {
                        const s = r[n];
                        void 0 !== e[s] && (t[s] = e[s])
                    }
                    if (void 0 !== e.setLineDash) {
                        t.setLineDash(e.getLineDash());
                        t.lineDashOffset = e.lineDashOffset
                    }
                }

                function resetCtxToDefault(e) {
                    e.strokeStyle = "#000000";
                    e.fillStyle = "#000000";
                    e.fillRule = "nonzero";
                    e.globalAlpha = 1;
                    e.lineWidth = 1;
                    e.lineCap = "butt";
                    e.lineJoin = "miter";
                    e.miterLimit = 10;
                    e.globalCompositeOperation = "source-over";
                    e.font = "10px sans-serif";
                    if (void 0 !== e.setLineDash) {
                        e.setLineDash([]);
                        e.lineDashOffset = 0
                    }
                }

                function composeSMaskBackdrop(e, t, r, n) {
                    const s = e.length;
                    for (let i = 3; i < s; i += 4) {
                        const s = e[i];
                        if (0 === s) {
                            e[i - 3] = t;
                            e[i - 2] = r;
                            e[i - 1] = n
                        } else if (s < 255) {
                            const a = 255 - s;
                            e[i - 3] = e[i - 3] * s + t * a >> 8;
                            e[i - 2] = e[i - 2] * s + r * a >> 8;
                            e[i - 1] = e[i - 1] * s + n * a >> 8
                        }
                    }
                }

                function composeSMaskAlpha(e, t, r) {
                    const n = e.length;
                    for (let s = 3; s < n; s += 4) {
                        const n = r ? r[e[s]] : e[s];
                        t[s] = t[s] * n * .00392156862745098 | 0
                    }
                }

                function composeSMaskLuminosity(e, t, r) {
                    const n = e.length;
                    for (let s = 3; s < n; s += 4) {
                        const n = 77 * e[s - 3] + 152 * e[s - 2] + 28 * e[s - 1];
                        t[s] = r ? t[s] * r[n >> 8] >> 8 : t[s] * n >> 16
                    }
                }

                function composeSMask(e, t, r, n) {
                    const s = t.canvas, i = t.context;
                    e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
                    const a = t.backdrop || null;
                    if (t.transferMap || !n.isEnabled) {
                        !function genericComposeSMask(e, t, r, n, s, i, a) {
                            const o = !!i, l = o ? i[0] : 0, c = o ? i[1] : 0, h = o ? i[2] : 0;
                            let d;
                            d = "Luminosity" === s ? composeSMaskLuminosity : composeSMaskAlpha;
                            const u = Math.min(n, Math.ceil(1048576 / r));
                            for (let s = 0; s < n; s += u) {
                                const i = Math.min(u, n - s), p = e.getImageData(0, s, r, i),
                                    f = t.getImageData(0, s, r, i);
                                o && composeSMaskBackdrop(p.data, l, c, h);
                                d(p.data, f.data, a);
                                e.putImageData(f, 0, s)
                            }
                        }(i, r, s.width, s.height, t.subtype, a, t.transferMap);
                        e.drawImage(s, 0, 0)
                    } else {
                        const i = n.composeSMask({
                            layer: r.canvas,
                            mask: s,
                            properties: {subtype: t.subtype, backdrop: a}
                        });
                        e.setTransform(1, 0, 0, 1, 0, 0);
                        e.drawImage(i, t.offsetX, t.offsetY)
                    }
                }

                const e = ["butt", "round", "square"], t = ["miter", "round", "bevel"], r = {}, c = {};
                CanvasGraphics.prototype = {
                    beginDrawing({transform: e, viewport: t, transparency: r = !1, background: n = null}) {
                        const s = this.ctx.canvas.width, i = this.ctx.canvas.height;
                        this.ctx.save();
                        this.ctx.fillStyle = n || "rgb(255, 255, 255)";
                        this.ctx.fillRect(0, 0, s, i);
                        this.ctx.restore();
                        if (r) {
                            const e = this.cachedCanvases.getCanvas("transparent", s, i, !0);
                            this.compositeCtx = this.ctx;
                            this.transparentCanvas = e.canvas;
                            this.ctx = e.context;
                            this.ctx.save();
                            this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform)
                        }
                        this.ctx.save();
                        resetCtxToDefault(this.ctx);
                        e && this.ctx.transform.apply(this.ctx, e);
                        this.ctx.transform.apply(this.ctx, t.transform);
                        this.baseTransform = this.ctx.mozCurrentTransform.slice();
                        this._combinedScaleFactor = Math.hypot(this.baseTransform[0], this.baseTransform[2]);
                        this.imageLayer && this.imageLayer.beginLayout()
                    }, executeOperatorList: function CanvasGraphics_executeOperatorList(e, t, r, s) {
                        const i = e.argsArray, a = e.fnArray;
                        let o = t || 0;
                        const l = i.length;
                        if (l === o) return o;
                        const c = l - o > 10 && "function" == typeof r, h = c ? Date.now() + 15 : 0;
                        let d = 0;
                        const u = this.commonObjs, p = this.objs;
                        let f;
                        for (; ;) {
                            if (void 0 !== s && o === s.nextBreakPoint) {
                                s.breakIt(o, r);
                                return o
                            }
                            f = a[o];
                            if (f !== n.OPS.dependency) this[f].apply(this, i[o]); else for (const e of i[o]) {
                                const t = e.startsWith("g_") ? u : p;
                                if (!t.has(e)) {
                                    t.get(e, r);
                                    return o
                                }
                            }
                            o++;
                            if (o === l) return o;
                            if (c && ++d > 10) {
                                if (Date.now() > h) {
                                    r();
                                    return o
                                }
                                d = 0
                            }
                        }
                    }, endDrawing: function CanvasGraphics_endDrawing() {
                        for (; this.stateStack.length || null !== this.current.activeSMask;) this.restore();
                        this.ctx.restore();
                        if (this.transparentCanvas) {
                            this.ctx = this.compositeCtx;
                            this.ctx.save();
                            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                            this.ctx.drawImage(this.transparentCanvas, 0, 0);
                            this.ctx.restore();
                            this.transparentCanvas = null
                        }
                        this.cachedCanvases.clear();
                        this.webGLContext.clear();
                        this.imageLayer && this.imageLayer.endLayout()
                    }, setLineWidth: function CanvasGraphics_setLineWidth(e) {
                        this.current.lineWidth = e;
                        this.ctx.lineWidth = e
                    }, setLineCap: function CanvasGraphics_setLineCap(t) {
                        this.ctx.lineCap = e[t]
                    }, setLineJoin: function CanvasGraphics_setLineJoin(e) {
                        this.ctx.lineJoin = t[e]
                    }, setMiterLimit: function CanvasGraphics_setMiterLimit(e) {
                        this.ctx.miterLimit = e
                    }, setDash: function CanvasGraphics_setDash(e, t) {
                        const r = this.ctx;
                        if (void 0 !== r.setLineDash) {
                            r.setLineDash(e);
                            r.lineDashOffset = t
                        }
                    }, setRenderingIntent(e) {
                    }, setFlatness(e) {
                    }, setGState: function CanvasGraphics_setGState(e) {
                        for (let t = 0, r = e.length; t < r; t++) {
                            const r = e[t], n = r[0], s = r[1];
                            switch (n) {
                                case"LW":
                                    this.setLineWidth(s);
                                    break;
                                case"LC":
                                    this.setLineCap(s);
                                    break;
                                case"LJ":
                                    this.setLineJoin(s);
                                    break;
                                case"ML":
                                    this.setMiterLimit(s);
                                    break;
                                case"D":
                                    this.setDash(s[0], s[1]);
                                    break;
                                case"RI":
                                    this.setRenderingIntent(s);
                                    break;
                                case"FL":
                                    this.setFlatness(s);
                                    break;
                                case"Font":
                                    this.setFont(s[0], s[1]);
                                    break;
                                case"CA":
                                    this.current.strokeAlpha = r[1];
                                    break;
                                case"ca":
                                    this.current.fillAlpha = r[1];
                                    this.ctx.globalAlpha = r[1];
                                    break;
                                case"BM":
                                    this.ctx.globalCompositeOperation = s;
                                    break;
                                case"SMask":
                                    this.current.activeSMask && (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask ? this.suspendSMaskGroup() : this.endSMaskGroup());
                                    this.current.activeSMask = s ? this.tempSMask : null;
                                    this.current.activeSMask && this.beginSMaskGroup();
                                    this.tempSMask = null;
                                    break;
                                case"TR":
                                    this.current.transferMaps = s
                            }
                        }
                    }, beginSMaskGroup: function CanvasGraphics_beginSMaskGroup() {
                        const e = this.current.activeSMask, t = e.canvas.width, r = e.canvas.height,
                            n = "smaskGroupAt" + this.groupLevel, s = this.cachedCanvases.getCanvas(n, t, r, !0),
                            i = this.ctx, a = i.mozCurrentTransform;
                        this.ctx.save();
                        const o = s.context;
                        o.scale(1 / e.scaleX, 1 / e.scaleY);
                        o.translate(-e.offsetX, -e.offsetY);
                        o.transform.apply(o, a);
                        e.startTransformInverse = o.mozCurrentTransformInverse;
                        copyCtxState(i, o);
                        this.ctx = o;
                        this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                        this.groupStack.push(i);
                        this.groupLevel++
                    }, suspendSMaskGroup: function CanvasGraphics_endSMaskGroup() {
                        const e = this.ctx;
                        this.groupLevel--;
                        this.ctx = this.groupStack.pop();
                        composeSMask(this.ctx, this.current.activeSMask, e, this.webGLContext);
                        this.ctx.restore();
                        this.ctx.save();
                        copyCtxState(e, this.ctx);
                        this.current.resumeSMaskCtx = e;
                        const t = n.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                        this.ctx.transform.apply(this.ctx, t);
                        e.save();
                        e.setTransform(1, 0, 0, 1, 0, 0);
                        e.clearRect(0, 0, e.canvas.width, e.canvas.height);
                        e.restore()
                    }, resumeSMaskGroup: function CanvasGraphics_resumeSMaskGroup() {
                        const e = this.current.resumeSMaskCtx, t = this.ctx;
                        this.ctx = e;
                        this.groupStack.push(t);
                        this.groupLevel++
                    }, endSMaskGroup: function CanvasGraphics_endSMaskGroup() {
                        const e = this.ctx;
                        this.groupLevel--;
                        this.ctx = this.groupStack.pop();
                        composeSMask(this.ctx, this.current.activeSMask, e, this.webGLContext);
                        this.ctx.restore();
                        copyCtxState(e, this.ctx);
                        const t = n.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
                        this.ctx.transform.apply(this.ctx, t)
                    }, save: function CanvasGraphics_save() {
                        this.ctx.save();
                        const e = this.current;
                        this.stateStack.push(e);
                        this.current = e.clone();
                        this.current.resumeSMaskCtx = null
                    }, restore: function CanvasGraphics_restore() {
                        this.current.resumeSMaskCtx && this.resumeSMaskGroup();
                        null === this.current.activeSMask || 0 !== this.stateStack.length && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask || this.endSMaskGroup();
                        if (0 !== this.stateStack.length) {
                            this.current = this.stateStack.pop();
                            this.ctx.restore();
                            this.pendingClip = null;
                            this._cachedGetSinglePixelWidth = null
                        } else this.current.activeSMask = null
                    }, transform: function CanvasGraphics_transform(e, t, r, n, s, i) {
                        this.ctx.transform(e, t, r, n, s, i);
                        this._cachedGetSinglePixelWidth = null
                    }, constructPath: function CanvasGraphics_constructPath(e, t) {
                        const r = this.ctx, s = this.current;
                        let i = s.x, a = s.y;
                        for (let s = 0, o = 0, l = e.length; s < l; s++) switch (0 | e[s]) {
                            case n.OPS.rectangle:
                                i = t[o++];
                                a = t[o++];
                                const e = t[o++], s = t[o++], l = i + e, c = a + s;
                                r.moveTo(i, a);
                                if (0 === e || 0 === s) r.lineTo(l, c); else {
                                    r.lineTo(l, a);
                                    r.lineTo(l, c);
                                    r.lineTo(i, c)
                                }
                                r.closePath();
                                break;
                            case n.OPS.moveTo:
                                i = t[o++];
                                a = t[o++];
                                r.moveTo(i, a);
                                break;
                            case n.OPS.lineTo:
                                i = t[o++];
                                a = t[o++];
                                r.lineTo(i, a);
                                break;
                            case n.OPS.curveTo:
                                i = t[o + 4];
                                a = t[o + 5];
                                r.bezierCurveTo(t[o], t[o + 1], t[o + 2], t[o + 3], i, a);
                                o += 6;
                                break;
                            case n.OPS.curveTo2:
                                r.bezierCurveTo(i, a, t[o], t[o + 1], t[o + 2], t[o + 3]);
                                i = t[o + 2];
                                a = t[o + 3];
                                o += 4;
                                break;
                            case n.OPS.curveTo3:
                                i = t[o + 2];
                                a = t[o + 3];
                                r.bezierCurveTo(t[o], t[o + 1], i, a, i, a);
                                o += 4;
                                break;
                            case n.OPS.closePath:
                                r.closePath()
                        }
                        s.setCurrentPoint(i, a)
                    }, closePath: function CanvasGraphics_closePath() {
                        this.ctx.closePath()
                    }, stroke: function CanvasGraphics_stroke(e) {
                        e = void 0 === e || e;
                        const t = this.ctx, r = this.current.strokeColor;
                        t.globalAlpha = this.current.strokeAlpha;
                        if (this.contentVisible) if ("object" == typeof r && r?.getPattern) {
                            t.save();
                            const e = t.mozCurrentTransform, s = n.Util.singularValueDecompose2dScale(e)[0];
                            t.strokeStyle = r.getPattern(t, this);
                            const i = this.getSinglePixelWidth(), a = this.current.lineWidth * s;
                            if (i < 0 && -i >= a) {
                                t.resetTransform();
                                t.lineWidth = Math.round(this._combinedScaleFactor)
                            } else t.lineWidth = Math.max(i, a);
                            t.stroke();
                            t.restore()
                        } else {
                            const e = this.getSinglePixelWidth();
                            if (e < 0 && -e >= this.current.lineWidth) {
                                t.save();
                                t.resetTransform();
                                t.lineWidth = Math.round(this._combinedScaleFactor);
                                t.stroke();
                                t.restore()
                            } else {
                                t.lineWidth = Math.max(e, this.current.lineWidth);
                                t.stroke()
                            }
                        }
                        e && this.consumePath();
                        t.globalAlpha = this.current.fillAlpha
                    }, closeStroke: function CanvasGraphics_closeStroke() {
                        this.closePath();
                        this.stroke()
                    }, fill: function CanvasGraphics_fill(e) {
                        e = void 0 === e || e;
                        const t = this.ctx, r = this.current.fillColor;
                        let n = !1;
                        if (this.current.patternFill) {
                            t.save();
                            this.baseTransform && t.setTransform.apply(t, this.baseTransform);
                            t.fillStyle = r.getPattern(t, this);
                            n = !0
                        }
                        if (this.contentVisible) if (this.pendingEOFill) {
                            t.fill("evenodd");
                            this.pendingEOFill = !1
                        } else t.fill();
                        n && t.restore();
                        e && this.consumePath()
                    }, eoFill: function CanvasGraphics_eoFill() {
                        this.pendingEOFill = !0;
                        this.fill()
                    }, fillStroke: function CanvasGraphics_fillStroke() {
                        this.fill(!1);
                        this.stroke(!1);
                        this.consumePath()
                    }, eoFillStroke: function CanvasGraphics_eoFillStroke() {
                        this.pendingEOFill = !0;
                        this.fillStroke()
                    }, closeFillStroke: function CanvasGraphics_closeFillStroke() {
                        this.closePath();
                        this.fillStroke()
                    }, closeEOFillStroke: function CanvasGraphics_closeEOFillStroke() {
                        this.pendingEOFill = !0;
                        this.closePath();
                        this.fillStroke()
                    }, endPath: function CanvasGraphics_endPath() {
                        this.consumePath()
                    }, clip: function CanvasGraphics_clip() {
                        this.pendingClip = r
                    }, eoClip: function CanvasGraphics_eoClip() {
                        this.pendingClip = c
                    }, beginText: function CanvasGraphics_beginText() {
                        this.current.textMatrix = n.IDENTITY_MATRIX;
                        this.current.textMatrixScale = 1;
                        this.current.x = this.current.lineX = 0;
                        this.current.y = this.current.lineY = 0
                    }, endText: function CanvasGraphics_endText() {
                        const e = this.pendingTextPaths, t = this.ctx;
                        if (void 0 !== e) {
                            t.save();
                            t.beginPath();
                            for (let r = 0; r < e.length; r++) {
                                const n = e[r];
                                t.setTransform.apply(t, n.transform);
                                t.translate(n.x, n.y);
                                n.addToPath(t, n.fontSize)
                            }
                            t.restore();
                            t.clip();
                            t.beginPath();
                            delete this.pendingTextPaths
                        } else t.beginPath()
                    }, setCharSpacing: function CanvasGraphics_setCharSpacing(e) {
                        this.current.charSpacing = e
                    }, setWordSpacing: function CanvasGraphics_setWordSpacing(e) {
                        this.current.wordSpacing = e
                    }, setHScale: function CanvasGraphics_setHScale(e) {
                        this.current.textHScale = e / 100
                    }, setLeading: function CanvasGraphics_setLeading(e) {
                        this.current.leading = -e
                    }, setFont: function CanvasGraphics_setFont(e, t) {
                        const r = this.commonObjs.get(e), s = this.current;
                        if (!r) throw new Error(`Can't find font for ${e}`);
                        s.fontMatrix = r.fontMatrix || n.FONT_IDENTITY_MATRIX;
                        0 !== s.fontMatrix[0] && 0 !== s.fontMatrix[3] || (0, n.warn)("Invalid font matrix for font " + e);
                        if (t < 0) {
                            t = -t;
                            s.fontDirection = -1
                        } else s.fontDirection = 1;
                        this.current.font = r;
                        this.current.fontSize = t;
                        if (r.isType3Font) return;
                        const i = r.loadedName || "sans-serif";
                        let a = "normal";
                        r.black ? a = "900" : r.bold && (a = "bold");
                        const o = r.italic ? "italic" : "normal", l = `"${i}", ${r.fallbackName}`;
                        let c = t;
                        t < 16 ? c = 16 : t > 100 && (c = 100);
                        this.current.fontSizeScale = t / c;
                        this.ctx.font = `${o} ${a} ${c}px ${l}`
                    }, setTextRenderingMode: function CanvasGraphics_setTextRenderingMode(e) {
                        this.current.textRenderingMode = e
                    }, setTextRise: function CanvasGraphics_setTextRise(e) {
                        this.current.textRise = e
                    }, moveText: function CanvasGraphics_moveText(e, t) {
                        this.current.x = this.current.lineX += e;
                        this.current.y = this.current.lineY += t
                    }, setLeadingMoveText: function CanvasGraphics_setLeadingMoveText(e, t) {
                        this.setLeading(-t);
                        this.moveText(e, t)
                    }, setTextMatrix: function CanvasGraphics_setTextMatrix(e, t, r, n, s, i) {
                        this.current.textMatrix = [e, t, r, n, s, i];
                        this.current.textMatrixScale = Math.sqrt(e * e + t * t);
                        this.current.x = this.current.lineX = 0;
                        this.current.y = this.current.lineY = 0
                    }, nextLine: function CanvasGraphics_nextLine() {
                        this.moveText(0, this.current.leading)
                    }, paintChar(e, t, r, s, i) {
                        const a = this.ctx, o = this.current, l = o.font, c = o.textRenderingMode,
                            h = o.fontSize / o.fontSizeScale, d = c & n.TextRenderingMode.FILL_STROKE_MASK,
                            u = !!(c & n.TextRenderingMode.ADD_TO_PATH_FLAG), p = o.patternFill && !l.missingFile;
                        let f;
                        (l.disableFontFace || u || p) && (f = l.getPathGenerator(this.commonObjs, e));
                        if (l.disableFontFace || p) {
                            a.save();
                            a.translate(t, r);
                            a.beginPath();
                            f(a, h);
                            s && a.setTransform.apply(a, s);
                            d !== n.TextRenderingMode.FILL && d !== n.TextRenderingMode.FILL_STROKE || a.fill();
                            if (d === n.TextRenderingMode.STROKE || d === n.TextRenderingMode.FILL_STROKE) {
                                if (i) {
                                    a.resetTransform();
                                    a.lineWidth = Math.round(this._combinedScaleFactor)
                                }
                                a.stroke()
                            }
                            a.restore()
                        } else {
                            d !== n.TextRenderingMode.FILL && d !== n.TextRenderingMode.FILL_STROKE || a.fillText(e, t, r);
                            if (d === n.TextRenderingMode.STROKE || d === n.TextRenderingMode.FILL_STROKE) if (i) {
                                a.save();
                                a.moveTo(t, r);
                                a.resetTransform();
                                a.lineWidth = Math.round(this._combinedScaleFactor);
                                a.strokeText(e, 0, 0);
                                a.restore()
                            } else a.strokeText(e, t, r)
                        }
                        if (u) {
                            (this.pendingTextPaths || (this.pendingTextPaths = [])).push({
                                transform: a.mozCurrentTransform,
                                x: t,
                                y: r,
                                fontSize: h,
                                addToPath: f
                            })
                        }
                    }, get isFontSubpixelAAEnabled() {
                        const {context: e} = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
                        e.scale(1.5, 1);
                        e.fillText("I", 0, 10);
                        const t = e.getImageData(0, 0, 10, 10).data;
                        let r = !1;
                        for (let e = 3; e < t.length; e += 4) if (t[e] > 0 && t[e] < 255) {
                            r = !0;
                            break
                        }
                        return (0, n.shadow)(this, "isFontSubpixelAAEnabled", r)
                    }, showText: function CanvasGraphics_showText(e) {
                        const t = this.current, r = t.font;
                        if (r.isType3Font) return this.showType3Text(e);
                        const s = t.fontSize;
                        if (0 === s) return;
                        const i = this.ctx, a = t.fontSizeScale, o = t.charSpacing, l = t.wordSpacing,
                            c = t.fontDirection, h = t.textHScale * c, d = e.length, u = r.vertical, p = u ? 1 : -1,
                            f = r.defaultVMetrics, g = s * t.fontMatrix[0],
                            m = t.textRenderingMode === n.TextRenderingMode.FILL && !r.disableFontFace && !t.patternFill;
                        i.save();
                        let A;
                        if (t.patternFill) {
                            i.save();
                            const e = t.fillColor.getPattern(i, this);
                            A = i.mozCurrentTransform;
                            i.restore();
                            i.fillStyle = e
                        }
                        i.transform.apply(i, t.textMatrix);
                        i.translate(t.x, t.y + t.textRise);
                        c > 0 ? i.scale(h, -1) : i.scale(h, 1);
                        let _ = t.lineWidth, b = !1;
                        const y = t.textMatrixScale;
                        if (0 === y || 0 === _) {
                            const e = t.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                            if (e === n.TextRenderingMode.STROKE || e === n.TextRenderingMode.FILL_STROKE) {
                                this._cachedGetSinglePixelWidth = null;
                                _ = this.getSinglePixelWidth();
                                b = _ < 0
                            }
                        } else _ /= y;
                        if (1 !== a) {
                            i.scale(a, a);
                            _ /= a
                        }
                        i.lineWidth = _;
                        let S, C = 0;
                        for (S = 0; S < d; ++S) {
                            const t = e[S];
                            if ((0, n.isNum)(t)) {
                                C += p * t * s / 1e3;
                                continue
                            }
                            let h = !1;
                            const d = (t.isSpace ? l : 0) + o, _ = t.fontChar, y = t.accent;
                            let v, x, k, P = t.width;
                            if (u) {
                                const e = t.vmetric || f, r = -(t.vmetric ? e[1] : .5 * P) * g, n = e[2] * g;
                                P = e ? -e[0] : P;
                                v = r / a;
                                x = (C + n) / a
                            } else {
                                v = C / a;
                                x = 0
                            }
                            if (r.remeasure && P > 0) {
                                const e = 1e3 * i.measureText(_).width / s * a;
                                if (P < e && this.isFontSubpixelAAEnabled) {
                                    const t = P / e;
                                    h = !0;
                                    i.save();
                                    i.scale(t, 1);
                                    v /= t
                                } else P !== e && (v += (P - e) / 2e3 * s / a)
                            }
                            if (this.contentVisible && (t.isInFont || r.missingFile)) if (m && !y) i.fillText(_, v, x); else {
                                this.paintChar(_, v, x, A, b);
                                if (y) {
                                    const e = v + s * y.offset.x / a, t = x - s * y.offset.y / a;
                                    this.paintChar(y.fontChar, e, t, A, b)
                                }
                            }
                            k = u ? P * g - d * c : P * g + d * c;
                            C += k;
                            h && i.restore()
                        }
                        u ? t.y -= C : t.x += C * h;
                        i.restore()
                    }, showType3Text: function CanvasGraphics_showType3Text(e) {
                        const t = this.ctx, r = this.current, s = r.font, i = r.fontSize, a = r.fontDirection,
                            o = s.vertical ? 1 : -1, l = r.charSpacing, c = r.wordSpacing, h = r.textHScale * a,
                            d = r.fontMatrix || n.FONT_IDENTITY_MATRIX, u = e.length;
                        let p, f, g, m;
                        if (!(r.textRenderingMode === n.TextRenderingMode.INVISIBLE) && 0 !== i) {
                            this._cachedGetSinglePixelWidth = null;
                            t.save();
                            t.transform.apply(t, r.textMatrix);
                            t.translate(r.x, r.y);
                            t.scale(h, a);
                            for (p = 0; p < u; ++p) {
                                f = e[p];
                                if ((0, n.isNum)(f)) {
                                    m = o * f * i / 1e3;
                                    this.ctx.translate(m, 0);
                                    r.x += m * h;
                                    continue
                                }
                                const a = (f.isSpace ? c : 0) + l, u = s.charProcOperatorList[f.operatorListId];
                                if (!u) {
                                    (0, n.warn)(`Type3 character "${f.operatorListId}" is not available.`);
                                    continue
                                }
                                if (this.contentVisible) {
                                    this.processingType3 = f;
                                    this.save();
                                    t.scale(i, i);
                                    t.transform.apply(t, d);
                                    this.executeOperatorList(u);
                                    this.restore()
                                }
                                g = n.Util.applyTransform([f.width, 0], d)[0] * i + a;
                                t.translate(g, 0);
                                r.x += g * h
                            }
                            t.restore();
                            this.processingType3 = null
                        }
                    }, setCharWidth: function CanvasGraphics_setCharWidth(e, t) {
                    }, setCharWidthAndBounds: function CanvasGraphics_setCharWidthAndBounds(e, t, r, n, s, i) {
                        this.ctx.rect(r, n, s - r, i - n);
                        this.clip();
                        this.endPath()
                    }, getColorN_Pattern: function CanvasGraphics_getColorN_Pattern(e) {
                        let t;
                        if ("TilingPattern" === e[0]) {
                            const r = e[1], n = this.baseTransform || this.ctx.mozCurrentTransform.slice(),
                                i = {createCanvasGraphics: e => new CanvasGraphics(e, this.commonObjs, this.objs, this.canvasFactory, this.webGLContext)};
                            t = new s.TilingPattern(e, r, this.ctx, i, n)
                        } else t = (0, s.getShadingPatternFromIR)(e);
                        return t
                    }, setStrokeColorN: function CanvasGraphics_setStrokeColorN() {
                        this.current.strokeColor = this.getColorN_Pattern(arguments)
                    }, setFillColorN: function CanvasGraphics_setFillColorN() {
                        this.current.fillColor = this.getColorN_Pattern(arguments);
                        this.current.patternFill = !0
                    }, setStrokeRGBColor: function CanvasGraphics_setStrokeRGBColor(e, t, r) {
                        const s = n.Util.makeHexColor(e, t, r);
                        this.ctx.strokeStyle = s;
                        this.current.strokeColor = s
                    }, setFillRGBColor: function CanvasGraphics_setFillRGBColor(e, t, r) {
                        const s = n.Util.makeHexColor(e, t, r);
                        this.ctx.fillStyle = s;
                        this.current.fillColor = s;
                        this.current.patternFill = !1
                    }, shadingFill: function CanvasGraphics_shadingFill(e) {
                        if (!this.contentVisible) return;
                        const t = this.ctx;
                        this.save();
                        const r = (0, s.getShadingPatternFromIR)(e);
                        t.fillStyle = r.getPattern(t, this, !0);
                        const i = t.mozCurrentTransformInverse;
                        if (i) {
                            const e = t.canvas, r = e.width, s = e.height, a = n.Util.applyTransform([0, 0], i),
                                o = n.Util.applyTransform([0, s], i), l = n.Util.applyTransform([r, 0], i),
                                c = n.Util.applyTransform([r, s], i), h = Math.min(a[0], o[0], l[0], c[0]),
                                d = Math.min(a[1], o[1], l[1], c[1]), u = Math.max(a[0], o[0], l[0], c[0]),
                                p = Math.max(a[1], o[1], l[1], c[1]);
                            this.ctx.fillRect(h, d, u - h, p - d)
                        } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
                        this.restore()
                    }, beginInlineImage: function CanvasGraphics_beginInlineImage() {
                        (0, n.unreachable)("Should not call beginInlineImage")
                    }, beginImageData: function CanvasGraphics_beginImageData() {
                        (0, n.unreachable)("Should not call beginImageData")
                    }, paintFormXObjectBegin: function CanvasGraphics_paintFormXObjectBegin(e, t) {
                        if (this.contentVisible) {
                            this.save();
                            this.baseTransformStack.push(this.baseTransform);
                            Array.isArray(e) && 6 === e.length && this.transform.apply(this, e);
                            this.baseTransform = this.ctx.mozCurrentTransform;
                            if (t) {
                                const e = t[2] - t[0], r = t[3] - t[1];
                                this.ctx.rect(t[0], t[1], e, r);
                                this.clip();
                                this.endPath()
                            }
                        }
                    }, paintFormXObjectEnd: function CanvasGraphics_paintFormXObjectEnd() {
                        if (this.contentVisible) {
                            this.restore();
                            this.baseTransform = this.baseTransformStack.pop()
                        }
                    }, beginGroup: function CanvasGraphics_beginGroup(e) {
                        if (!this.contentVisible) return;
                        this.save();
                        const t = this.ctx;
                        e.isolated || (0, n.info)("TODO: Support non-isolated groups.");
                        e.knockout && (0, n.warn)("Knockout groups not supported.");
                        const r = t.mozCurrentTransform;
                        e.matrix && t.transform.apply(t, e.matrix);
                        if (!e.bbox) throw new Error("Bounding box is required.");
                        let s = n.Util.getAxialAlignedBoundingBox(e.bbox, t.mozCurrentTransform);
                        const a = [0, 0, t.canvas.width, t.canvas.height];
                        s = n.Util.intersect(s, a) || [0, 0, 0, 0];
                        const o = Math.floor(s[0]), l = Math.floor(s[1]);
                        let c = Math.max(Math.ceil(s[2]) - o, 1), h = Math.max(Math.ceil(s[3]) - l, 1), d = 1, u = 1;
                        if (c > i) {
                            d = c / i;
                            c = i
                        }
                        if (h > i) {
                            u = h / i;
                            h = i
                        }
                        let p = "groupAt" + this.groupLevel;
                        e.smask && (p += "_smask_" + this.smaskCounter++ % 2);
                        const f = this.cachedCanvases.getCanvas(p, c, h, !0), g = f.context;
                        g.scale(1 / d, 1 / u);
                        g.translate(-o, -l);
                        g.transform.apply(g, r);
                        if (e.smask) this.smaskStack.push({
                            canvas: f.canvas,
                            context: g,
                            offsetX: o,
                            offsetY: l,
                            scaleX: d,
                            scaleY: u,
                            subtype: e.smask.subtype,
                            backdrop: e.smask.backdrop,
                            transferMap: e.smask.transferMap || null,
                            startTransformInverse: null
                        }); else {
                            t.setTransform(1, 0, 0, 1, 0, 0);
                            t.translate(o, l);
                            t.scale(d, u)
                        }
                        copyCtxState(t, g);
                        this.ctx = g;
                        this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
                        this.groupStack.push(t);
                        this.groupLevel++;
                        this.current.activeSMask = null
                    }, endGroup: function CanvasGraphics_endGroup(e) {
                        if (!this.contentVisible) return;
                        this.groupLevel--;
                        const t = this.ctx;
                        this.ctx = this.groupStack.pop();
                        void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1;
                        e.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(t.canvas, 0, 0);
                        this.restore()
                    }, beginAnnotations: function CanvasGraphics_beginAnnotations() {
                        this.save();
                        this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform)
                    }, endAnnotations: function CanvasGraphics_endAnnotations() {
                        this.restore()
                    }, beginAnnotation: function CanvasGraphics_beginAnnotation(e, t, r) {
                        this.save();
                        resetCtxToDefault(this.ctx);
                        this.current = new l;
                        if (Array.isArray(e) && 4 === e.length) {
                            const t = e[2] - e[0], r = e[3] - e[1];
                            this.ctx.rect(e[0], e[1], t, r);
                            this.clip();
                            this.endPath()
                        }
                        this.transform.apply(this, t);
                        this.transform.apply(this, r)
                    }, endAnnotation: function CanvasGraphics_endAnnotation() {
                        this.restore()
                    }, paintImageMaskXObject: function CanvasGraphics_paintImageMaskXObject(e) {
                        if (!this.contentVisible) return;
                        const t = this.ctx, r = e.width, n = e.height, s = this.current.fillColor,
                            i = this.current.patternFill, a = this.processingType3;
                        a && void 0 === a.compiled && (a.compiled = r <= 1e3 && n <= 1e3 ? function compileType3Glyph(e) {
                            const t = e.width, r = e.height, n = t + 1;
                            let s, i, a, o;
                            const l = new Uint8Array(n * (r + 1)),
                                c = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), h = t + 7 & -8,
                                d = e.data, u = new Uint8Array(h * r);
                            let p = 0;
                            for (s = 0, i = d.length; s < i; s++) {
                                const e = d[s];
                                let t = 128;
                                for (; t > 0;) {
                                    u[p++] = e & t ? 0 : 255;
                                    t >>= 1
                                }
                            }
                            let f = 0;
                            p = 0;
                            if (0 !== u[p]) {
                                l[0] = 1;
                                ++f
                            }
                            for (a = 1; a < t; a++) {
                                if (u[p] !== u[p + 1]) {
                                    l[a] = u[p] ? 2 : 1;
                                    ++f
                                }
                                p++
                            }
                            if (0 !== u[p]) {
                                l[a] = 2;
                                ++f
                            }
                            for (s = 1; s < r; s++) {
                                p = s * h;
                                o = s * n;
                                if (u[p - h] !== u[p]) {
                                    l[o] = u[p] ? 1 : 8;
                                    ++f
                                }
                                let e = (u[p] ? 4 : 0) + (u[p - h] ? 8 : 0);
                                for (a = 1; a < t; a++) {
                                    e = (e >> 2) + (u[p + 1] ? 4 : 0) + (u[p - h + 1] ? 8 : 0);
                                    if (c[e]) {
                                        l[o + a] = c[e];
                                        ++f
                                    }
                                    p++
                                }
                                if (u[p - h] !== u[p]) {
                                    l[o + a] = u[p] ? 2 : 4;
                                    ++f
                                }
                                if (f > 1e3) return null
                            }
                            p = h * (r - 1);
                            o = s * n;
                            if (0 !== u[p]) {
                                l[o] = 8;
                                ++f
                            }
                            for (a = 1; a < t; a++) {
                                if (u[p] !== u[p + 1]) {
                                    l[o + a] = u[p] ? 4 : 8;
                                    ++f
                                }
                                p++
                            }
                            if (0 !== u[p]) {
                                l[o + a] = 4;
                                ++f
                            }
                            if (f > 1e3) return null;
                            const g = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]), m = [];
                            for (s = 0; f && s <= r; s++) {
                                let e = s * n;
                                const r = e + t;
                                for (; e < r && !l[e];) e++;
                                if (e === r) continue;
                                const i = [e % n, s], a = e;
                                let o = l[e];
                                do {
                                    const t = g[o];
                                    do {
                                        e += t
                                    } while (!l[e]);
                                    const r = l[e];
                                    if (5 !== r && 10 !== r) {
                                        o = r;
                                        l[e] = 0
                                    } else {
                                        o = r & 51 * o >> 4;
                                        l[e] &= o >> 2 | o << 2
                                    }
                                    i.push(e % n);
                                    i.push(e / n | 0);
                                    l[e] || --f
                                } while (a !== e);
                                m.push(i);
                                --s
                            }
                            return function (e) {
                                e.save();
                                e.scale(1 / t, -1 / r);
                                e.translate(0, -r);
                                e.beginPath();
                                for (let t = 0, r = m.length; t < r; t++) {
                                    const r = m[t];
                                    e.moveTo(r[0], r[1]);
                                    for (let t = 2, n = r.length; t < n; t += 2) e.lineTo(r[t], r[t + 1])
                                }
                                e.fill();
                                e.beginPath();
                                e.restore()
                            }
                        }({data: e.data, width: r, height: n}) : null);
                        if (a?.compiled) {
                            a.compiled(t);
                            return
                        }
                        const o = this.cachedCanvases.getCanvas("maskCanvas", r, n), l = o.context;
                        l.save();
                        putBinaryImageMask(l, e);
                        l.globalCompositeOperation = "source-in";
                        l.fillStyle = i ? s.getPattern(l, this) : s;
                        l.fillRect(0, 0, r, n);
                        l.restore();
                        this.paintInlineImageXObject(o.canvas)
                    }, paintImageMaskXObjectRepeat(e, t, r = 0, n = 0, s, i) {
                        if (!this.contentVisible) return;
                        const a = e.width, o = e.height, l = this.current.fillColor, c = this.current.patternFill,
                            h = this.cachedCanvases.getCanvas("maskCanvas", a, o), d = h.context;
                        d.save();
                        putBinaryImageMask(d, e);
                        d.globalCompositeOperation = "source-in";
                        d.fillStyle = c ? l.getPattern(d, this) : l;
                        d.fillRect(0, 0, a, o);
                        d.restore();
                        const u = this.ctx;
                        for (let e = 0, l = i.length; e < l; e += 2) {
                            u.save();
                            u.transform(t, r, n, s, i[e], i[e + 1]);
                            u.scale(1, -1);
                            u.drawImage(h.canvas, 0, 0, a, o, 0, -1, 1, 1);
                            u.restore()
                        }
                    }, paintImageMaskXObjectGroup: function CanvasGraphics_paintImageMaskXObjectGroup(e) {
                        if (!this.contentVisible) return;
                        const t = this.ctx, r = this.current.fillColor, n = this.current.patternFill;
                        for (let s = 0, i = e.length; s < i; s++) {
                            const i = e[s], a = i.width, o = i.height,
                                l = this.cachedCanvases.getCanvas("maskCanvas", a, o), c = l.context;
                            c.save();
                            putBinaryImageMask(c, i);
                            c.globalCompositeOperation = "source-in";
                            c.fillStyle = n ? r.getPattern(c, this) : r;
                            c.fillRect(0, 0, a, o);
                            c.restore();
                            t.save();
                            t.transform.apply(t, i.transform);
                            t.scale(1, -1);
                            t.drawImage(l.canvas, 0, 0, a, o, 0, -1, 1, 1);
                            t.restore()
                        }
                    }, paintImageXObject: function CanvasGraphics_paintImageXObject(e) {
                        if (!this.contentVisible) return;
                        const t = e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
                        t ? this.paintInlineImageXObject(t) : (0, n.warn)("Dependent image isn't ready yet")
                    }, paintImageXObjectRepeat: function CanvasGraphics_paintImageXObjectRepeat(e, t, r, s) {
                        if (!this.contentVisible) return;
                        const i = e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
                        if (!i) {
                            (0, n.warn)("Dependent image isn't ready yet");
                            return
                        }
                        const a = i.width, o = i.height, l = [];
                        for (let e = 0, n = s.length; e < n; e += 2) l.push({
                            transform: [t, 0, 0, r, s[e], s[e + 1]],
                            x: 0,
                            y: 0,
                            w: a,
                            h: o
                        });
                        this.paintInlineImageXObjectGroup(i, l)
                    }, paintInlineImageXObject: function CanvasGraphics_paintInlineImageXObject(e) {
                        if (!this.contentVisible) return;
                        const t = e.width, r = e.height, n = this.ctx;
                        this.save();
                        n.scale(1 / t, -1 / r);
                        const s = n.mozCurrentTransformInverse, i = s[0], a = s[1];
                        let o = Math.max(Math.sqrt(i * i + a * a), 1);
                        const l = s[2], c = s[3];
                        let h, d, u, p = Math.max(Math.sqrt(l * l + c * c), 1);
                        if ("function" == typeof HTMLElement && e instanceof HTMLElement || !e.data) h = e; else {
                            d = this.cachedCanvases.getCanvas("inlineImage", t, r);
                            u = d.context;
                            putBinaryImageData(u, e, this.current.transferMaps);
                            h = d.canvas
                        }
                        let f = t, g = r, m = "prescale1";
                        for (; o > 2 && f > 1 || p > 2 && g > 1;) {
                            let e = f, t = g;
                            if (o > 2 && f > 1) {
                                e = Math.ceil(f / 2);
                                o /= f / e
                            }
                            if (p > 2 && g > 1) {
                                t = Math.ceil(g / 2);
                                p /= g / t
                            }
                            d = this.cachedCanvases.getCanvas(m, e, t);
                            u = d.context;
                            u.clearRect(0, 0, e, t);
                            u.drawImage(h, 0, 0, f, g, 0, 0, e, t);
                            h = d.canvas;
                            f = e;
                            g = t;
                            m = "prescale1" === m ? "prescale2" : "prescale1"
                        }
                        n.drawImage(h, 0, 0, f, g, 0, -r, t, r);
                        if (this.imageLayer) {
                            const n = this.getCanvasPosition(0, -r);
                            this.imageLayer.appendImage({
                                imgData: e,
                                left: n[0],
                                top: n[1],
                                width: t / s[0],
                                height: r / s[3]
                            })
                        }
                        this.restore()
                    }, paintInlineImageXObjectGroup: function CanvasGraphics_paintInlineImageXObjectGroup(e, t) {
                        if (!this.contentVisible) return;
                        const r = this.ctx, n = e.width, s = e.height,
                            i = this.cachedCanvases.getCanvas("inlineImage", n, s);
                        putBinaryImageData(i.context, e, this.current.transferMaps);
                        for (let a = 0, o = t.length; a < o; a++) {
                            const o = t[a];
                            r.save();
                            r.transform.apply(r, o.transform);
                            r.scale(1, -1);
                            r.drawImage(i.canvas, o.x, o.y, o.w, o.h, 0, -1, 1, 1);
                            if (this.imageLayer) {
                                const t = this.getCanvasPosition(o.x, o.y);
                                this.imageLayer.appendImage({imgData: e, left: t[0], top: t[1], width: n, height: s})
                            }
                            r.restore()
                        }
                    }, paintSolidColorImageMask: function CanvasGraphics_paintSolidColorImageMask() {
                        this.contentVisible && this.ctx.fillRect(0, 0, 1, 1)
                    }, markPoint: function CanvasGraphics_markPoint(e) {
                    }, markPointProps: function CanvasGraphics_markPointProps(e, t) {
                    }, beginMarkedContent: function CanvasGraphics_beginMarkedContent(e) {
                        this.markedContentStack.push({visible: !0})
                    }, beginMarkedContentProps: function CanvasGraphics_beginMarkedContentProps(e, t) {
                        "OC" === e ? this.markedContentStack.push({visible: this.optionalContentConfig.isVisible(t)}) : this.markedContentStack.push({visible: !0});
                        this.contentVisible = this.isContentVisible()
                    }, endMarkedContent: function CanvasGraphics_endMarkedContent() {
                        this.markedContentStack.pop();
                        this.contentVisible = this.isContentVisible()
                    }, beginCompat: function CanvasGraphics_beginCompat() {
                    }, endCompat: function CanvasGraphics_endCompat() {
                    }, consumePath: function CanvasGraphics_consumePath() {
                        const e = this.ctx;
                        if (this.pendingClip) {
                            this.pendingClip === c ? e.clip("evenodd") : e.clip();
                            this.pendingClip = null
                        }
                        e.beginPath()
                    }, getSinglePixelWidth() {
                        if (null === this._cachedGetSinglePixelWidth) {
                            const e = this.ctx.mozCurrentTransform, t = Math.abs(e[0] * e[3] - e[2] * e[1]),
                                r = e[0] ** 2 + e[2] ** 2, n = e[1] ** 2 + e[3] ** 2, s = Math.sqrt(Math.max(r, n)) / t;
                            r !== n && this._combinedScaleFactor * s > 1 ? this._cachedGetSinglePixelWidth = -this._combinedScaleFactor * s : t > Number.EPSILON ? this._cachedGetSinglePixelWidth = 1.0000001 * s : this._cachedGetSinglePixelWidth = 1
                        }
                        return this._cachedGetSinglePixelWidth
                    }, getCanvasPosition: function CanvasGraphics_getCanvasPosition(e, t) {
                        const r = this.ctx.mozCurrentTransform;
                        return [r[0] * e + r[2] * t + r[4], r[1] * e + r[3] * t + r[5]]
                    }, isContentVisible: function CanvasGraphics_isContentVisible() {
                        for (let e = this.markedContentStack.length - 1; e >= 0; e--) if (!this.markedContentStack[e].visible) return !1;
                        return !0
                    }
                };
                for (const e in n.OPS) CanvasGraphics.prototype[n.OPS[e]] = CanvasGraphics.prototype[e];
                return CanvasGraphics
            }();
            t.CanvasGraphics = c
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.getShadingPatternFromIR = function getShadingPatternFromIR(e) {
                const t = s[e[0]];
                if (!t) throw new Error(`Unknown IR type: ${e[0]}`);
                return t.fromIR(e)
            };
            t.TilingPattern = void 0;
            var n = r(2);
            const s = {};

            function applyBoundingBox(e, t) {
                if (!t || "undefined" == typeof Path2D) return;
                const r = t[2] - t[0], n = t[3] - t[1], s = new Path2D;
                s.rect(t[0], t[1], r, n);
                e.clip(s)
            }

            s.RadialAxial = {
                fromIR: function RadialAxial_fromIR(e) {
                    const t = e[1], r = e[2], n = e[3], s = e[4], i = e[5], a = e[6], o = e[7];
                    return {
                        getPattern: function RadialAxial_getPattern(e) {
                            applyBoundingBox(e, r);
                            let l;
                            "axial" === t ? l = e.createLinearGradient(s[0], s[1], i[0], i[1]) : "radial" === t && (l = e.createRadialGradient(s[0], s[1], a, i[0], i[1], o));
                            for (let e = 0, t = n.length; e < t; ++e) {
                                const t = n[e];
                                l.addColorStop(t[0], t[1])
                            }
                            return l
                        }
                    }
                }
            };
            const i = function createMeshCanvasClosure() {
                function drawTriangle(e, t, r, n, s, i, a, o) {
                    const l = t.coords, c = t.colors, h = e.data, d = 4 * e.width;
                    let u;
                    if (l[r + 1] > l[n + 1]) {
                        u = r;
                        r = n;
                        n = u;
                        u = i;
                        i = a;
                        a = u
                    }
                    if (l[n + 1] > l[s + 1]) {
                        u = n;
                        n = s;
                        s = u;
                        u = a;
                        a = o;
                        o = u
                    }
                    if (l[r + 1] > l[n + 1]) {
                        u = r;
                        r = n;
                        n = u;
                        u = i;
                        i = a;
                        a = u
                    }
                    const p = (l[r] + t.offsetX) * t.scaleX, f = (l[r + 1] + t.offsetY) * t.scaleY,
                        g = (l[n] + t.offsetX) * t.scaleX, m = (l[n + 1] + t.offsetY) * t.scaleY,
                        A = (l[s] + t.offsetX) * t.scaleX, _ = (l[s + 1] + t.offsetY) * t.scaleY;
                    if (f >= _) return;
                    const b = c[i], y = c[i + 1], S = c[i + 2], C = c[a], v = c[a + 1], x = c[a + 2], k = c[o],
                        P = c[o + 1], R = c[o + 2], w = Math.round(f), T = Math.round(_);
                    let E, F, M, L, D, O, I, N;
                    for (let e = w; e <= T; e++) {
                        if (e < m) {
                            let t;
                            t = e < f ? 0 : f === m ? 1 : (f - e) / (f - m);
                            E = p - (p - g) * t;
                            F = b - (b - C) * t;
                            M = y - (y - v) * t;
                            L = S - (S - x) * t
                        } else {
                            let t;
                            t = e > _ ? 1 : m === _ ? 0 : (m - e) / (m - _);
                            E = g - (g - A) * t;
                            F = C - (C - k) * t;
                            M = v - (v - P) * t;
                            L = x - (x - R) * t
                        }
                        let t;
                        t = e < f ? 0 : e > _ ? 1 : (f - e) / (f - _);
                        D = p - (p - A) * t;
                        O = b - (b - k) * t;
                        I = y - (y - P) * t;
                        N = S - (S - R) * t;
                        const r = Math.round(Math.min(E, D)), n = Math.round(Math.max(E, D));
                        let s = d * e + 4 * r;
                        for (let e = r; e <= n; e++) {
                            t = (E - e) / (E - D);
                            t < 0 ? t = 0 : t > 1 && (t = 1);
                            h[s++] = F - (F - O) * t | 0;
                            h[s++] = M - (M - I) * t | 0;
                            h[s++] = L - (L - N) * t | 0;
                            h[s++] = 255
                        }
                    }
                }

                function drawFigure(e, t, r) {
                    const n = t.coords, s = t.colors;
                    let i, a;
                    switch (t.type) {
                        case"lattice":
                            const o = t.verticesPerRow, l = Math.floor(n.length / o) - 1, c = o - 1;
                            for (i = 0; i < l; i++) {
                                let t = i * o;
                                for (let i = 0; i < c; i++, t++) {
                                    drawTriangle(e, r, n[t], n[t + 1], n[t + o], s[t], s[t + 1], s[t + o]);
                                    drawTriangle(e, r, n[t + o + 1], n[t + 1], n[t + o], s[t + o + 1], s[t + 1], s[t + o])
                                }
                            }
                            break;
                        case"triangles":
                            for (i = 0, a = n.length; i < a; i += 3) drawTriangle(e, r, n[i], n[i + 1], n[i + 2], s[i], s[i + 1], s[i + 2]);
                            break;
                        default:
                            throw new Error("illegal figure")
                    }
                }

                return function createMeshCanvas(e, t, r, n, s, i, a, o) {
                    const l = Math.floor(e[0]), c = Math.floor(e[1]), h = Math.ceil(e[2]) - l, d = Math.ceil(e[3]) - c,
                        u = Math.min(Math.ceil(Math.abs(h * t[0] * 1.1)), 3e3),
                        p = Math.min(Math.ceil(Math.abs(d * t[1] * 1.1)), 3e3), f = h / u, g = d / p,
                        m = {coords: r, colors: n, offsetX: -l, offsetY: -c, scaleX: 1 / f, scaleY: 1 / g}, A = u + 4,
                        _ = p + 4;
                    let b, y, S, C;
                    if (o.isEnabled) {
                        b = o.drawFigures({width: u, height: p, backgroundColor: i, figures: s, context: m});
                        y = a.getCanvas("mesh", A, _, !1);
                        y.context.drawImage(b, 2, 2);
                        b = y.canvas
                    } else {
                        y = a.getCanvas("mesh", A, _, !1);
                        const e = y.context, t = e.createImageData(u, p);
                        if (i) {
                            const e = t.data;
                            for (S = 0, C = e.length; S < C; S += 4) {
                                e[S] = i[0];
                                e[S + 1] = i[1];
                                e[S + 2] = i[2];
                                e[S + 3] = 255
                            }
                        }
                        for (S = 0; S < s.length; S++) drawFigure(t, s[S], m);
                        e.putImageData(t, 2, 2);
                        b = y.canvas
                    }
                    return {canvas: b, offsetX: l - 2 * f, offsetY: c - 2 * g, scaleX: f, scaleY: g}
                }
            }();
            s.Mesh = {
                fromIR: function Mesh_fromIR(e) {
                    const t = e[2], r = e[3], s = e[4], a = e[5], o = e[6], l = e[7], c = e[8];
                    return {
                        getPattern: function Mesh_getPattern(e, h, d) {
                            applyBoundingBox(e, l);
                            let u;
                            if (d) u = n.Util.singularValueDecompose2dScale(e.mozCurrentTransform); else {
                                u = n.Util.singularValueDecompose2dScale(h.baseTransform);
                                if (o) {
                                    const e = n.Util.singularValueDecompose2dScale(o);
                                    u = [u[0] * e[0], u[1] * e[1]]
                                }
                            }
                            const p = i(a, u, t, r, s, d ? null : c, h.cachedCanvases, h.webGLContext);
                            if (!d) {
                                e.setTransform.apply(e, h.baseTransform);
                                o && e.transform.apply(e, o)
                            }
                            e.translate(p.offsetX, p.offsetY);
                            e.scale(p.scaleX, p.scaleY);
                            return e.createPattern(p.canvas, "no-repeat")
                        }
                    }
                }
            };
            s.Dummy = {
                fromIR: function Dummy_fromIR() {
                    return {
                        getPattern: function Dummy_fromIR_getPattern() {
                            return "hotpink"
                        }
                    }
                }
            };
            const a = function TilingPatternClosure() {
                const e = 1, t = 2;

                function TilingPattern(e, t, r, n, s) {
                    this.operatorList = e[2];
                    this.matrix = e[3] || [1, 0, 0, 1, 0, 0];
                    this.bbox = e[4];
                    this.xstep = e[5];
                    this.ystep = e[6];
                    this.paintType = e[7];
                    this.tilingType = e[8];
                    this.color = t;
                    this.canvasGraphicsFactory = n;
                    this.baseTransform = s;
                    this.ctx = r
                }

                TilingPattern.prototype = {
                    createPatternCanvas: function TilinPattern_createPatternCanvas(e) {
                        const t = this.operatorList, r = this.bbox, s = this.xstep, i = this.ystep, a = this.paintType,
                            o = this.tilingType, l = this.color, c = this.canvasGraphicsFactory;
                        (0, n.info)("TilingType: " + o);
                        const h = r[0], d = r[1], u = r[2], p = r[3],
                            f = n.Util.singularValueDecompose2dScale(this.matrix),
                            g = n.Util.singularValueDecompose2dScale(this.baseTransform),
                            m = [f[0] * g[0], f[1] * g[1]], A = this.getSizeAndScale(s, this.ctx.canvas.width, m[0]),
                            _ = this.getSizeAndScale(i, this.ctx.canvas.height, m[1]),
                            b = e.cachedCanvases.getCanvas("pattern", A.size, _.size, !0), y = b.context,
                            S = c.createCanvasGraphics(y);
                        S.groupLevel = e.groupLevel;
                        this.setFillAndStrokeStyleToContext(S, a, l);
                        S.transform(A.scale, 0, 0, _.scale, 0, 0);
                        S.transform(1, 0, 0, 1, -h, -d);
                        this.clipBbox(S, r, h, d, u, p);
                        S.executeOperatorList(t);
                        this.ctx.transform(1, 0, 0, 1, h, d);
                        this.ctx.scale(1 / A.scale, 1 / _.scale);
                        return b.canvas
                    }, getSizeAndScale: function TilingPattern_getSizeAndScale(e, t, r) {
                        e = Math.abs(e);
                        const n = Math.max(3e3, t);
                        let s = Math.ceil(e * r);
                        s >= n ? s = n : r = s / e;
                        return {scale: r, size: s}
                    }, clipBbox: function clipBbox(e, t, r, n, s, i) {
                        if (Array.isArray(t) && 4 === t.length) {
                            const t = s - r, a = i - n;
                            e.ctx.rect(r, n, t, a);
                            e.clip();
                            e.endPath()
                        }
                    }, setFillAndStrokeStyleToContext: function setFillAndStrokeStyleToContext(r, s, i) {
                        const a = r.ctx, o = r.current;
                        switch (s) {
                            case e:
                                const r = this.ctx;
                                a.fillStyle = r.fillStyle;
                                a.strokeStyle = r.strokeStyle;
                                o.fillColor = r.fillStyle;
                                o.strokeColor = r.strokeStyle;
                                break;
                            case t:
                                const l = n.Util.makeHexColor(i[0], i[1], i[2]);
                                a.fillStyle = l;
                                a.strokeStyle = l;
                                o.fillColor = l;
                                o.strokeColor = l;
                                break;
                            default:
                                throw new n.FormatError(`Unsupported paint type: ${s}`)
                        }
                    }, getPattern: function TilingPattern_getPattern(e, t) {
                        (e = this.ctx).setTransform.apply(e, this.baseTransform);
                        e.transform.apply(e, this.matrix);
                        const r = this.createPatternCanvas(t);
                        return e.createPattern(r, "repeat")
                    }
                };
                return TilingPattern
            }();
            t.TilingPattern = a
        }, (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.GlobalWorkerOptions = void 0;
            const r = Object.create(null);
            t.GlobalWorkerOptions = r;
            r.workerPort = void 0 === r.workerPort ? null : r.workerPort;
            r.workerSrc = void 0 === r.workerSrc ? "" : r.workerSrc
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.MessageHandler = void 0;
            var n = r(2);
            const s = 1, i = 2, a = 1, o = 2, l = 3, c = 4, h = 5, d = 6, u = 7, p = 8;

            function wrapReason(e) {
                if ("object" != typeof e || null === e) return e;
                switch (e.name) {
                    case"AbortException":
                        return new n.AbortException(e.message);
                    case"MissingPDFException":
                        return new n.MissingPDFException(e.message);
                    case"UnexpectedResponseException":
                        return new n.UnexpectedResponseException(e.message, e.status);
                    case"UnknownErrorException":
                        return new n.UnknownErrorException(e.message, e.details);
                    default:
                        return new n.UnknownErrorException(e.message, e.toString())
                }
            }

            t.MessageHandler = class MessageHandler {
                constructor(e, t, r) {
                    this.sourceName = e;
                    this.targetName = t;
                    this.comObj = r;
                    this.callbackId = 1;
                    this.streamId = 1;
                    this.postMessageTransfers = !0;
                    this.streamSinks = Object.create(null);
                    this.streamControllers = Object.create(null);
                    this.callbackCapabilities = Object.create(null);
                    this.actionHandler = Object.create(null);
                    this._onComObjOnMessage = e => {
                        const t = e.data;
                        if (t.targetName !== this.sourceName) return;
                        if (t.stream) {
                            this._processStreamMessage(t);
                            return
                        }
                        if (t.callback) {
                            const e = t.callbackId, r = this.callbackCapabilities[e];
                            if (!r) throw new Error(`Cannot resolve callback ${e}`);
                            delete this.callbackCapabilities[e];
                            if (t.callback === s) r.resolve(t.data); else {
                                if (t.callback !== i) throw new Error("Unexpected callback case");
                                r.reject(wrapReason(t.reason))
                            }
                            return
                        }
                        const n = this.actionHandler[t.action];
                        if (!n) throw new Error(`Unknown action from worker: ${t.action}`);
                        if (t.callbackId) {
                            const e = this.sourceName, a = t.sourceName;
                            new Promise((function (e) {
                                e(n(t.data))
                            })).then((function (n) {
                                r.postMessage({
                                    sourceName: e,
                                    targetName: a,
                                    callback: s,
                                    callbackId: t.callbackId,
                                    data: n
                                })
                            }), (function (n) {
                                r.postMessage({
                                    sourceName: e,
                                    targetName: a,
                                    callback: i,
                                    callbackId: t.callbackId,
                                    reason: wrapReason(n)
                                })
                            }))
                        } else t.streamId ? this._createStreamSink(t) : n(t.data)
                    };
                    r.addEventListener("message", this._onComObjOnMessage)
                }

                on(e, t) {
                    const r = this.actionHandler;
                    if (r[e]) throw new Error(`There is already an actionName called "${e}"`);
                    r[e] = t
                }

                send(e, t, r) {
                    this._postMessage({sourceName: this.sourceName, targetName: this.targetName, action: e, data: t}, r)
                }

                sendWithPromise(e, t, r) {
                    const s = this.callbackId++, i = (0, n.createPromiseCapability)();
                    this.callbackCapabilities[s] = i;
                    try {
                        this._postMessage({
                            sourceName: this.sourceName,
                            targetName: this.targetName,
                            action: e,
                            callbackId: s,
                            data: t
                        }, r)
                    } catch (e) {
                        i.reject(e)
                    }
                    return i.promise
                }

                sendWithStream(e, t, r, s) {
                    const i = this.streamId++, o = this.sourceName, l = this.targetName, c = this.comObj;
                    return new ReadableStream({
                        start: r => {
                            const a = (0, n.createPromiseCapability)();
                            this.streamControllers[i] = {
                                controller: r,
                                startCall: a,
                                pullCall: null,
                                cancelCall: null,
                                isClosed: !1
                            };
                            this._postMessage({
                                sourceName: o,
                                targetName: l,
                                action: e,
                                streamId: i,
                                data: t,
                                desiredSize: r.desiredSize
                            }, s);
                            return a.promise
                        }, pull: e => {
                            const t = (0, n.createPromiseCapability)();
                            this.streamControllers[i].pullCall = t;
                            c.postMessage({
                                sourceName: o,
                                targetName: l,
                                stream: d,
                                streamId: i,
                                desiredSize: e.desiredSize
                            });
                            return t.promise
                        }, cancel: e => {
                            (0, n.assert)(e instanceof Error, "cancel must have a valid reason");
                            const t = (0, n.createPromiseCapability)();
                            this.streamControllers[i].cancelCall = t;
                            this.streamControllers[i].isClosed = !0;
                            c.postMessage({
                                sourceName: o,
                                targetName: l,
                                stream: a,
                                streamId: i,
                                reason: wrapReason(e)
                            });
                            return t.promise
                        }
                    }, r)
                }

                _createStreamSink(e) {
                    const t = this, r = this.actionHandler[e.action], s = e.streamId, i = this.sourceName,
                        a = e.sourceName, o = this.comObj, d = {
                            enqueue(e, r = 1, o) {
                                if (this.isCancelled) return;
                                const l = this.desiredSize;
                                this.desiredSize -= r;
                                if (l > 0 && this.desiredSize <= 0) {
                                    this.sinkCapability = (0, n.createPromiseCapability)();
                                    this.ready = this.sinkCapability.promise
                                }
                                t._postMessage({sourceName: i, targetName: a, stream: c, streamId: s, chunk: e}, o)
                            },
                            close() {
                                if (!this.isCancelled) {
                                    this.isCancelled = !0;
                                    o.postMessage({sourceName: i, targetName: a, stream: l, streamId: s});
                                    delete t.streamSinks[s]
                                }
                            },
                            error(e) {
                                (0, n.assert)(e instanceof Error, "error must have a valid reason");
                                if (!this.isCancelled) {
                                    this.isCancelled = !0;
                                    o.postMessage({
                                        sourceName: i,
                                        targetName: a,
                                        stream: h,
                                        streamId: s,
                                        reason: wrapReason(e)
                                    })
                                }
                            },
                            sinkCapability: (0, n.createPromiseCapability)(),
                            onPull: null,
                            onCancel: null,
                            isCancelled: !1,
                            desiredSize: e.desiredSize,
                            ready: null
                        };
                    d.sinkCapability.resolve();
                    d.ready = d.sinkCapability.promise;
                    this.streamSinks[s] = d;
                    new Promise((function (t) {
                        t(r(e.data, d))
                    })).then((function () {
                        o.postMessage({sourceName: i, targetName: a, stream: p, streamId: s, success: !0})
                    }), (function (e) {
                        o.postMessage({sourceName: i, targetName: a, stream: p, streamId: s, reason: wrapReason(e)})
                    }))
                }

                _processStreamMessage(e) {
                    const t = e.streamId, r = this.sourceName, s = e.sourceName, i = this.comObj;
                    switch (e.stream) {
                        case p:
                            e.success ? this.streamControllers[t].startCall.resolve() : this.streamControllers[t].startCall.reject(wrapReason(e.reason));
                            break;
                        case u:
                            e.success ? this.streamControllers[t].pullCall.resolve() : this.streamControllers[t].pullCall.reject(wrapReason(e.reason));
                            break;
                        case d:
                            if (!this.streamSinks[t]) {
                                i.postMessage({sourceName: r, targetName: s, stream: u, streamId: t, success: !0});
                                break
                            }
                            this.streamSinks[t].desiredSize <= 0 && e.desiredSize > 0 && this.streamSinks[t].sinkCapability.resolve();
                            this.streamSinks[t].desiredSize = e.desiredSize;
                            const {onPull: f} = this.streamSinks[e.streamId];
                            new Promise((function (e) {
                                e(f && f())
                            })).then((function () {
                                i.postMessage({sourceName: r, targetName: s, stream: u, streamId: t, success: !0})
                            }), (function (e) {
                                i.postMessage({
                                    sourceName: r,
                                    targetName: s,
                                    stream: u,
                                    streamId: t,
                                    reason: wrapReason(e)
                                })
                            }));
                            break;
                        case c:
                            (0, n.assert)(this.streamControllers[t], "enqueue should have stream controller");
                            if (this.streamControllers[t].isClosed) break;
                            this.streamControllers[t].controller.enqueue(e.chunk);
                            break;
                        case l:
                            (0, n.assert)(this.streamControllers[t], "close should have stream controller");
                            if (this.streamControllers[t].isClosed) break;
                            this.streamControllers[t].isClosed = !0;
                            this.streamControllers[t].controller.close();
                            this._deleteStreamController(t);
                            break;
                        case h:
                            (0, n.assert)(this.streamControllers[t], "error should have stream controller");
                            this.streamControllers[t].controller.error(wrapReason(e.reason));
                            this._deleteStreamController(t);
                            break;
                        case o:
                            e.success ? this.streamControllers[t].cancelCall.resolve() : this.streamControllers[t].cancelCall.reject(wrapReason(e.reason));
                            this._deleteStreamController(t);
                            break;
                        case a:
                            if (!this.streamSinks[t]) break;
                            const {onCancel: g} = this.streamSinks[e.streamId];
                            new Promise((function (t) {
                                t(g && g(wrapReason(e.reason)))
                            })).then((function () {
                                i.postMessage({sourceName: r, targetName: s, stream: o, streamId: t, success: !0})
                            }), (function (e) {
                                i.postMessage({
                                    sourceName: r,
                                    targetName: s,
                                    stream: o,
                                    streamId: t,
                                    reason: wrapReason(e)
                                })
                            }));
                            this.streamSinks[t].sinkCapability.reject(wrapReason(e.reason));
                            this.streamSinks[t].isCancelled = !0;
                            delete this.streamSinks[t];
                            break;
                        default:
                            throw new Error("Unexpected stream case")
                    }
                }

                async _deleteStreamController(e) {
                    await Promise.allSettled([this.streamControllers[e].startCall, this.streamControllers[e].pullCall, this.streamControllers[e].cancelCall].map((function (e) {
                        return e && e.promise
                    })));
                    delete this.streamControllers[e]
                }

                _postMessage(e, t) {
                    t && this.postMessageTransfers ? this.comObj.postMessage(e, t) : this.comObj.postMessage(e)
                }

                destroy() {
                    this.comObj.removeEventListener("message", this._onComObjOnMessage)
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.Metadata = void 0;
            var n = r(2), s = r(15);
            t.Metadata = class Metadata {
                constructor(e) {
                    (0, n.assert)("string" == typeof e, "Metadata: input is not a string");
                    e = this._repair(e);
                    const t = new s.SimpleXMLParser({lowerCaseName: !0}).parseFromString(e);
                    this._metadataMap = new Map;
                    t && this._parse(t);
                    this._data = e
                }

                _repair(e) {
                    return e.replace(/^[^<]+/, "").replace(/>\\376\\377([^<]+)/g, (function (e, t) {
                        const r = t.replace(/\\([0-3])([0-7])([0-7])/g, (function (e, t, r, n) {
                            return String.fromCharCode(64 * t + 8 * r + 1 * n)
                        })).replace(/&(amp|apos|gt|lt|quot);/g, (function (e, t) {
                            switch (t) {
                                case"amp":
                                    return "&";
                                case"apos":
                                    return "'";
                                case"gt":
                                    return ">";
                                case"lt":
                                    return "<";
                                case"quot":
                                    return '"'
                            }
                            throw new Error(`_repair: ${t} isn't defined.`)
                        }));
                        let n = "";
                        for (let e = 0, t = r.length; e < t; e += 2) {
                            const t = 256 * r.charCodeAt(e) + r.charCodeAt(e + 1);
                            n += t >= 32 && t < 127 && 60 !== t && 62 !== t && 38 !== t ? String.fromCharCode(t) : "&#x" + (65536 + t).toString(16).substring(1) + ";"
                        }
                        return ">" + n
                    }))
                }

                _getSequence(e) {
                    const t = e.nodeName;
                    return "rdf:bag" !== t && "rdf:seq" !== t && "rdf:alt" !== t ? null : e.childNodes.filter((e => "rdf:li" === e.nodeName))
                }

                _getCreators(e) {
                    if ("dc:creator" !== e.nodeName) return !1;
                    if (!e.hasChildNodes()) return !0;
                    const t = e.childNodes[0], r = this._getSequence(t) || [];
                    this._metadataMap.set(e.nodeName, r.map((e => e.textContent.trim())));
                    return !0
                }

                _parse(e) {
                    let t = e.documentElement;
                    if ("rdf:rdf" !== t.nodeName) {
                        t = t.firstChild;
                        for (; t && "rdf:rdf" !== t.nodeName;) t = t.nextSibling
                    }
                    if (t && "rdf:rdf" === t.nodeName && t.hasChildNodes()) for (const e of t.childNodes) if ("rdf:description" === e.nodeName) for (const t of e.childNodes) {
                        const e = t.nodeName;
                        "#text" !== e && (this._getCreators(t) || this._metadataMap.set(e, t.textContent.trim()))
                    }
                }

                getRaw() {
                    return this._data
                }

                get(e) {
                    return this._metadataMap.get(e) ?? null
                }

                getAll() {
                    return (0, n.objectFromEntries)(this._metadataMap)
                }

                has(e) {
                    return this._metadataMap.has(e)
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.SimpleXMLParser = t.SimpleDOMNode = void 0;
            var n = r(2);
            const s = 0, i = -2, a = -3, o = -4, l = -5, c = -6, h = -9;

            function isWhitespace(e, t) {
                const r = e[t];
                return " " === r || "\n" === r || "\r" === r || "\t" === r
            }

            class SimpleDOMNode {
                constructor(e, t) {
                    this.nodeName = e;
                    this.nodeValue = t;
                    Object.defineProperty(this, "parentNode", {value: null, writable: !0})
                }

                get firstChild() {
                    return this.childNodes && this.childNodes[0]
                }

                get nextSibling() {
                    const e = this.parentNode.childNodes;
                    if (!e) return;
                    const t = e.indexOf(this);
                    return -1 !== t ? e[t + 1] : void 0
                }

                get textContent() {
                    return this.childNodes ? this.childNodes.map((function (e) {
                        return e.textContent
                    })).join("") : this.nodeValue || ""
                }

                hasChildNodes() {
                    return this.childNodes && this.childNodes.length > 0
                }

                searchNode(e, t) {
                    if (t >= e.length) return this;
                    const r = e[t], n = [];
                    let s = this;
                    for (; ;) {
                        if (r.name === s.nodeName) {
                            if (0 !== r.pos) {
                                if (0 === n.length) return null;
                                {
                                    const [i] = n.pop();
                                    let a = 0;
                                    for (const n of i.childNodes) if (r.name === n.nodeName) {
                                        if (a === r.pos) return n.searchNode(e, t + 1);
                                        a++
                                    }
                                    return s.searchNode(e, t + 1)
                                }
                            }
                            {
                                const r = s.searchNode(e, t + 1);
                                if (null !== r) return r
                            }
                        }
                        if (s.childNodes && 0 !== s.childNodes.length) {
                            n.push([s, 0]);
                            s = s.childNodes[0]
                        } else {
                            if (0 === n.length) return null;
                            for (; 0 !== n.length;) {
                                const [e, t] = n.pop(), r = t + 1;
                                if (r < e.childNodes.length) {
                                    n.push([e, r]);
                                    s = e.childNodes[r];
                                    break
                                }
                            }
                            if (0 === n.length) return null
                        }
                    }
                }

                dump(e) {
                    if ("#text" !== this.nodeName) {
                        e.push(`<${this.nodeName}`);
                        if (this.attributes) for (const t of this.attributes) e.push(` ${t.name}="${(0, n.encodeToXmlString)(t.value)}"`);
                        if (this.hasChildNodes()) {
                            e.push(">");
                            for (const t of this.childNodes) t.dump(e);
                            e.push(`</${this.nodeName}>`)
                        } else this.nodeValue ? e.push(`>${(0, n.encodeToXmlString)(this.nodeValue)}</${this.nodeName}>`) : e.push("/>")
                    } else e.push((0, n.encodeToXmlString)(this.nodeValue))
                }
            }

            t.SimpleDOMNode = SimpleDOMNode;
            t.SimpleXMLParser = class SimpleXMLParser extends class XMLParserBase {
                _resolveEntities(e) {
                    return e.replace(/&([^;]+);/g, ((e, t) => {
                        if ("#x" === t.substring(0, 2)) return String.fromCodePoint(parseInt(t.substring(2), 16));
                        if ("#" === t.substring(0, 1)) return String.fromCodePoint(parseInt(t.substring(1), 10));
                        switch (t) {
                            case"lt":
                                return "<";
                            case"gt":
                                return ">";
                            case"amp":
                                return "&";
                            case"quot":
                                return '"'
                        }
                        return this.onResolveEntity(t)
                    }))
                }

                _parseContent(e, t) {
                    const r = [];
                    let n = t;

                    function skipWs() {
                        for (; n < e.length && isWhitespace(e, n);) ++n
                    }

                    for (; n < e.length && !isWhitespace(e, n) && ">" !== e[n] && "/" !== e[n];) ++n;
                    const s = e.substring(t, n);
                    skipWs();
                    for (; n < e.length && ">" !== e[n] && "/" !== e[n] && "?" !== e[n];) {
                        skipWs();
                        let t = "", s = "";
                        for (; n < e.length && !isWhitespace(e, n) && "=" !== e[n];) {
                            t += e[n];
                            ++n
                        }
                        skipWs();
                        if ("=" !== e[n]) return null;
                        ++n;
                        skipWs();
                        const i = e[n];
                        if ('"' !== i && "'" !== i) return null;
                        const a = e.indexOf(i, ++n);
                        if (a < 0) return null;
                        s = e.substring(n, a);
                        r.push({name: t, value: this._resolveEntities(s)});
                        n = a + 1;
                        skipWs()
                    }
                    return {name: s, attributes: r, parsed: n - t}
                }

                _parseProcessingInstruction(e, t) {
                    let r = t;
                    for (; r < e.length && !isWhitespace(e, r) && ">" !== e[r] && "/" !== e[r];) ++r;
                    const n = e.substring(t, r);
                    !function skipWs() {
                        for (; r < e.length && isWhitespace(e, r);) ++r
                    }();
                    const s = r;
                    for (; r < e.length && ("?" !== e[r] || ">" !== e[r + 1]);) ++r;
                    return {name: n, value: e.substring(s, r), parsed: r - t}
                }

                parseXml(e) {
                    let t = 0;
                    for (; t < e.length;) {
                        let r = t;
                        if ("<" === e[t]) {
                            ++r;
                            let t;
                            switch (e[r]) {
                                case"/":
                                    ++r;
                                    t = e.indexOf(">", r);
                                    if (t < 0) {
                                        this.onError(h);
                                        return
                                    }
                                    this.onEndElement(e.substring(r, t));
                                    r = t + 1;
                                    break;
                                case"?":
                                    ++r;
                                    const n = this._parseProcessingInstruction(e, r);
                                    if ("?>" !== e.substring(r + n.parsed, r + n.parsed + 2)) {
                                        this.onError(a);
                                        return
                                    }
                                    this.onPi(n.name, n.value);
                                    r += n.parsed + 2;
                                    break;
                                case"!":
                                    if ("--" === e.substring(r + 1, r + 3)) {
                                        t = e.indexOf("--\x3e", r + 3);
                                        if (t < 0) {
                                            this.onError(l);
                                            return
                                        }
                                        this.onComment(e.substring(r + 3, t));
                                        r = t + 3
                                    } else if ("[CDATA[" === e.substring(r + 1, r + 8)) {
                                        t = e.indexOf("]]>", r + 8);
                                        if (t < 0) {
                                            this.onError(i);
                                            return
                                        }
                                        this.onCdata(e.substring(r + 8, t));
                                        r = t + 3
                                    } else {
                                        if ("DOCTYPE" !== e.substring(r + 1, r + 8)) {
                                            this.onError(c);
                                            return
                                        }
                                        {
                                            const n = e.indexOf("[", r + 8);
                                            let s = !1;
                                            t = e.indexOf(">", r + 8);
                                            if (t < 0) {
                                                this.onError(o);
                                                return
                                            }
                                            if (n > 0 && t > n) {
                                                t = e.indexOf("]>", r + 8);
                                                if (t < 0) {
                                                    this.onError(o);
                                                    return
                                                }
                                                s = !0
                                            }
                                            const i = e.substring(r + 8, t + (s ? 1 : 0));
                                            this.onDoctype(i);
                                            r = t + (s ? 2 : 1)
                                        }
                                    }
                                    break;
                                default:
                                    const s = this._parseContent(e, r);
                                    if (null === s) {
                                        this.onError(c);
                                        return
                                    }
                                    let d = !1;
                                    if ("/>" === e.substring(r + s.parsed, r + s.parsed + 2)) d = !0; else if (">" !== e.substring(r + s.parsed, r + s.parsed + 1)) {
                                        this.onError(h);
                                        return
                                    }
                                    this.onBeginElement(s.name, s.attributes, d);
                                    r += s.parsed + (d ? 2 : 1)
                            }
                        } else {
                            for (; r < e.length && "<" !== e[r];) r++;
                            const n = e.substring(t, r);
                            this.onText(this._resolveEntities(n))
                        }
                        t = r
                    }
                }

                onResolveEntity(e) {
                    return `&${e};`
                }

                onPi(e, t) {
                }

                onComment(e) {
                }

                onCdata(e) {
                }

                onDoctype(e) {
                }

                onText(e) {
                }

                onBeginElement(e, t, r) {
                }

                onEndElement(e) {
                }

                onError(e) {
                }
            } {
                constructor({hasAttributes: e = !1, lowerCaseName: t = !1}) {
                    super();
                    this._currentFragment = null;
                    this._stack = null;
                    this._errorCode = s;
                    this._hasAttributes = e;
                    this._lowerCaseName = t
                }

                parseFromString(e) {
                    this._currentFragment = [];
                    this._stack = [];
                    this._errorCode = s;
                    this.parseXml(e);
                    if (this._errorCode !== s) return;
                    const [t] = this._currentFragment;
                    return t ? {documentElement: t} : void 0
                }

                onResolveEntity(e) {
                    switch (e) {
                        case"apos":
                            return "'"
                    }
                    return super.onResolveEntity(e)
                }

                onText(e) {
                    if (function isWhitespaceString(e) {
                        for (let t = 0, r = e.length; t < r; t++) if (!isWhitespace(e, t)) return !1;
                        return !0
                    }(e)) return;
                    const t = new SimpleDOMNode("#text", e);
                    this._currentFragment.push(t)
                }

                onCdata(e) {
                    const t = new SimpleDOMNode("#text", e);
                    this._currentFragment.push(t)
                }

                onBeginElement(e, t, r) {
                    this._lowerCaseName && (e = e.toLowerCase());
                    const n = new SimpleDOMNode(e);
                    n.childNodes = [];
                    this._hasAttributes && (n.attributes = t);
                    this._currentFragment.push(n);
                    if (!r) {
                        this._stack.push(this._currentFragment);
                        this._currentFragment = n.childNodes
                    }
                }

                onEndElement(e) {
                    this._currentFragment = this._stack.pop() || [];
                    const t = this._currentFragment[this._currentFragment.length - 1];
                    if (t) for (let e = 0, r = t.childNodes.length; e < r; e++) t.childNodes[e].parentNode = t
                }

                onError(e) {
                    this._errorCode = e
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.OptionalContentConfig = void 0;
            var n = r(2);

            class OptionalContentGroup {
                constructor(e, t) {
                    this.visible = !0;
                    this.name = e;
                    this.intent = t
                }
            }

            t.OptionalContentConfig = class OptionalContentConfig {
                constructor(e) {
                    this.name = null;
                    this.creator = null;
                    this._order = null;
                    this._groups = new Map;
                    if (null !== e) {
                        this.name = e.name;
                        this.creator = e.creator;
                        this._order = e.order;
                        for (const t of e.groups) this._groups.set(t.id, new OptionalContentGroup(t.name, t.intent));
                        if ("OFF" === e.baseState) for (const e of this._groups) e.visible = !1;
                        for (const t of e.on) this._groups.get(t).visible = !0;
                        for (const t of e.off) this._groups.get(t).visible = !1
                    }
                }

                isVisible(e) {
                    if ("OCG" === e.type) {
                        if (!this._groups.has(e.id)) {
                            (0, n.warn)(`Optional content group not found: ${e.id}`);
                            return !0
                        }
                        return this._groups.get(e.id).visible
                    }
                    if ("OCMD" === e.type) {
                        e.expression && (0, n.warn)("Visibility expression not supported yet.");
                        if (!e.policy || "AnyOn" === e.policy) {
                            for (const t of e.ids) {
                                if (!this._groups.has(t)) {
                                    (0, n.warn)(`Optional content group not found: ${t}`);
                                    return !0
                                }
                                if (this._groups.get(t).visible) return !0
                            }
                            return !1
                        }
                        if ("AllOn" === e.policy) {
                            for (const t of e.ids) {
                                if (!this._groups.has(t)) {
                                    (0, n.warn)(`Optional content group not found: ${t}`);
                                    return !0
                                }
                                if (!this._groups.get(t).visible) return !1
                            }
                            return !0
                        }
                        if ("AnyOff" === e.policy) {
                            for (const t of e.ids) {
                                if (!this._groups.has(t)) {
                                    (0, n.warn)(`Optional content group not found: ${t}`);
                                    return !0
                                }
                                if (!this._groups.get(t).visible) return !0
                            }
                            return !1
                        }
                        if ("AllOff" === e.policy) {
                            for (const t of e.ids) {
                                if (!this._groups.has(t)) {
                                    (0, n.warn)(`Optional content group not found: ${t}`);
                                    return !0
                                }
                                if (this._groups.get(t).visible) return !1
                            }
                            return !0
                        }
                        (0, n.warn)(`Unknown optional content policy ${e.policy}.`);
                        return !0
                    }
                    (0, n.warn)(`Unknown group type ${e.type}.`);
                    return !0
                }

                setVisibility(e, t = !0) {
                    this._groups.has(e) ? this._groups.get(e).visible = !!t : (0, n.warn)(`Optional content group not found: ${e}`)
                }

                getOrder() {
                    return this._groups.size ? this._order ? this._order.slice() : Array.from(this._groups.keys()) : null
                }

                getGroups() {
                    return this._groups.size ? (0, n.objectFromEntries)(this._groups) : null
                }

                getGroup(e) {
                    return this._groups.get(e) || null
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.PDFDataTransportStream = void 0;
            var n = r(2);
            t.PDFDataTransportStream = class PDFDataTransportStream {
                constructor(e, t) {
                    (0, n.assert)(t, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.');
                    this._queuedChunks = [];
                    this._progressiveDone = e.progressiveDone || !1;
                    const r = e.initialData;
                    if (r?.length > 0) {
                        const e = new Uint8Array(r).buffer;
                        this._queuedChunks.push(e)
                    }
                    this._pdfDataRangeTransport = t;
                    this._isStreamingSupported = !e.disableStream;
                    this._isRangeSupported = !e.disableRange;
                    this._contentLength = e.length;
                    this._fullRequestReader = null;
                    this._rangeReaders = [];
                    this._pdfDataRangeTransport.addRangeListener(((e, t) => {
                        this._onReceiveData({begin: e, chunk: t})
                    }));
                    this._pdfDataRangeTransport.addProgressListener(((e, t) => {
                        this._onProgress({loaded: e, total: t})
                    }));
                    this._pdfDataRangeTransport.addProgressiveReadListener((e => {
                        this._onReceiveData({chunk: e})
                    }));
                    this._pdfDataRangeTransport.addProgressiveDoneListener((() => {
                        this._onProgressiveDone()
                    }));
                    this._pdfDataRangeTransport.transportReady()
                }

                _onReceiveData(e) {
                    const t = new Uint8Array(e.chunk).buffer;
                    if (void 0 === e.begin) this._fullRequestReader ? this._fullRequestReader._enqueue(t) : this._queuedChunks.push(t); else {
                        const r = this._rangeReaders.some((function (r) {
                            if (r._begin !== e.begin) return !1;
                            r._enqueue(t);
                            return !0
                        }));
                        (0, n.assert)(r, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.")
                    }
                }

                get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0
                }

                _onProgress(e) {
                    if (void 0 === e.total) {
                        const t = this._rangeReaders[0];
                        t?.onProgress && t.onProgress({loaded: e.loaded})
                    } else {
                        const t = this._fullRequestReader;
                        t?.onProgress && t.onProgress({loaded: e.loaded, total: e.total})
                    }
                }

                _onProgressiveDone() {
                    this._fullRequestReader && this._fullRequestReader.progressiveDone();
                    this._progressiveDone = !0
                }

                _removeRangeReader(e) {
                    const t = this._rangeReaders.indexOf(e);
                    t >= 0 && this._rangeReaders.splice(t, 1)
                }

                getFullReader() {
                    (0, n.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
                    const e = this._queuedChunks;
                    this._queuedChunks = null;
                    return new PDFDataTransportStreamReader(this, e, this._progressiveDone)
                }

                getRangeReader(e, t) {
                    if (t <= this._progressiveDataLength) return null;
                    const r = new PDFDataTransportStreamRangeReader(this, e, t);
                    this._pdfDataRangeTransport.requestDataRange(e, t);
                    this._rangeReaders.push(r);
                    return r
                }

                cancelAllRequests(e) {
                    this._fullRequestReader && this._fullRequestReader.cancel(e);
                    this._rangeReaders.slice(0).forEach((function (t) {
                        t.cancel(e)
                    }));
                    this._pdfDataRangeTransport.abort()
                }
            };

            class PDFDataTransportStreamReader {
                constructor(e, t, r = !1) {
                    this._stream = e;
                    this._done = r || !1;
                    this._filename = null;
                    this._queuedChunks = t || [];
                    this._loaded = 0;
                    for (const e of this._queuedChunks) this._loaded += e.byteLength;
                    this._requests = [];
                    this._headersReady = Promise.resolve();
                    e._fullRequestReader = this;
                    this.onProgress = null
                }

                _enqueue(e) {
                    if (!this._done) {
                        if (this._requests.length > 0) {
                            this._requests.shift().resolve({value: e, done: !1})
                        } else this._queuedChunks.push(e);
                        this._loaded += e.byteLength
                    }
                }

                get headersReady() {
                    return this._headersReady
                }

                get filename() {
                    return this._filename
                }

                get isRangeSupported() {
                    return this._stream._isRangeSupported
                }

                get isStreamingSupported() {
                    return this._stream._isStreamingSupported
                }

                get contentLength() {
                    return this._stream._contentLength
                }

                async read() {
                    if (this._queuedChunks.length > 0) {
                        return {value: this._queuedChunks.shift(), done: !1}
                    }
                    if (this._done) return {value: void 0, done: !0};
                    const e = (0, n.createPromiseCapability)();
                    this._requests.push(e);
                    return e.promise
                }

                cancel(e) {
                    this._done = !0;
                    this._requests.forEach((function (e) {
                        e.resolve({value: void 0, done: !0})
                    }));
                    this._requests = []
                }

                progressiveDone() {
                    this._done || (this._done = !0)
                }
            }

            class PDFDataTransportStreamRangeReader {
                constructor(e, t, r) {
                    this._stream = e;
                    this._begin = t;
                    this._end = r;
                    this._queuedChunk = null;
                    this._requests = [];
                    this._done = !1;
                    this.onProgress = null
                }

                _enqueue(e) {
                    if (!this._done) {
                        if (0 === this._requests.length) this._queuedChunk = e; else {
                            this._requests.shift().resolve({value: e, done: !1});
                            this._requests.forEach((function (e) {
                                e.resolve({value: void 0, done: !0})
                            }));
                            this._requests = []
                        }
                        this._done = !0;
                        this._stream._removeRangeReader(this)
                    }
                }

                get isStreamingSupported() {
                    return !1
                }

                async read() {
                    if (this._queuedChunk) {
                        const e = this._queuedChunk;
                        this._queuedChunk = null;
                        return {value: e, done: !1}
                    }
                    if (this._done) return {value: void 0, done: !0};
                    const e = (0, n.createPromiseCapability)();
                    this._requests.push(e);
                    return e.promise
                }

                cancel(e) {
                    this._done = !0;
                    this._requests.forEach((function (e) {
                        e.resolve({value: void 0, done: !0})
                    }));
                    this._requests = [];
                    this._stream._removeRangeReader(this)
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.WebGLContext = void 0;
            var n = r(2);
            t.WebGLContext = class WebGLContext {
                constructor({enable: e = !1}) {
                    this._enabled = !0 === e
                }

                get isEnabled() {
                    let e = this._enabled;
                    e && (e = s.tryInitGL());
                    return (0, n.shadow)(this, "isEnabled", e)
                }

                composeSMask({layer: e, mask: t, properties: r}) {
                    return s.composeSMask(e, t, r)
                }

                drawFigures({width: e, height: t, backgroundColor: r, figures: n, context: i}) {
                    return s.drawFigures(e, t, r, n, i)
                }

                clear() {
                    s.cleanup()
                }
            };
            const s = function WebGLUtilsClosure() {
                function loadShader(e, t, r) {
                    const n = e.createShader(r);
                    e.shaderSource(n, t);
                    e.compileShader(n);
                    if (!e.getShaderParameter(n, e.COMPILE_STATUS)) {
                        const t = e.getShaderInfoLog(n);
                        throw new Error("Error during shader compilation: " + t)
                    }
                    return n
                }

                function createVertexShader(e, t) {
                    return loadShader(e, t, e.VERTEX_SHADER)
                }

                function createFragmentShader(e, t) {
                    return loadShader(e, t, e.FRAGMENT_SHADER)
                }

                function createProgram(e, t) {
                    const r = e.createProgram();
                    for (let n = 0, s = t.length; n < s; ++n) e.attachShader(r, t[n]);
                    e.linkProgram(r);
                    if (!e.getProgramParameter(r, e.LINK_STATUS)) {
                        const t = e.getProgramInfoLog(r);
                        throw new Error("Error during program linking: " + t)
                    }
                    return r
                }

                function createTexture(e, t, r) {
                    e.activeTexture(r);
                    const n = e.createTexture();
                    e.bindTexture(e.TEXTURE_2D, n);
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
                    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
                    e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t);
                    return n
                }

                let e, t;

                function generateGL() {
                    if (!e) {
                        t = document.createElement("canvas");
                        e = t.getContext("webgl", {premultipliedalpha: !1})
                    }
                }

                let r = null;
                let n = null;
                return {
                    tryInitGL() {
                        try {
                            generateGL();
                            return !!e
                        } catch (e) {
                        }
                        return !1
                    }, composeSMask: function composeSMask(n, s, i) {
                        const a = n.width, o = n.height;
                        r || function initSmaskGL() {
                            generateGL();
                            const n = t;
                            t = null;
                            const s = e;
                            e = null;
                            const i = createProgram(s, [createVertexShader(s, "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             "), createFragmentShader(s, "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ")]);
                            s.useProgram(i);
                            const a = {};
                            a.gl = s;
                            a.canvas = n;
                            a.resolutionLocation = s.getUniformLocation(i, "u_resolution");
                            a.positionLocation = s.getAttribLocation(i, "a_position");
                            a.backdropLocation = s.getUniformLocation(i, "u_backdrop");
                            a.subtypeLocation = s.getUniformLocation(i, "u_subtype");
                            const o = s.getAttribLocation(i, "a_texCoord"), l = s.getUniformLocation(i, "u_image"),
                                c = s.getUniformLocation(i, "u_mask"), h = s.createBuffer();
                            s.bindBuffer(s.ARRAY_BUFFER, h);
                            s.bufferData(s.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), s.STATIC_DRAW);
                            s.enableVertexAttribArray(o);
                            s.vertexAttribPointer(o, 2, s.FLOAT, !1, 0, 0);
                            s.uniform1i(l, 0);
                            s.uniform1i(c, 1);
                            r = a
                        }();
                        const l = r, c = l.canvas, h = l.gl;
                        c.width = a;
                        c.height = o;
                        h.viewport(0, 0, h.drawingBufferWidth, h.drawingBufferHeight);
                        h.uniform2f(l.resolutionLocation, a, o);
                        i.backdrop ? h.uniform4f(l.resolutionLocation, i.backdrop[0], i.backdrop[1], i.backdrop[2], 1) : h.uniform4f(l.resolutionLocation, 0, 0, 0, 0);
                        h.uniform1i(l.subtypeLocation, "Luminosity" === i.subtype ? 1 : 0);
                        const d = createTexture(h, n, h.TEXTURE0), u = createTexture(h, s, h.TEXTURE1),
                            p = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, p);
                        h.bufferData(h.ARRAY_BUFFER, new Float32Array([0, 0, a, 0, 0, o, 0, o, a, 0, a, o]), h.STATIC_DRAW);
                        h.enableVertexAttribArray(l.positionLocation);
                        h.vertexAttribPointer(l.positionLocation, 2, h.FLOAT, !1, 0, 0);
                        h.clearColor(0, 0, 0, 0);
                        h.enable(h.BLEND);
                        h.blendFunc(h.ONE, h.ONE_MINUS_SRC_ALPHA);
                        h.clear(h.COLOR_BUFFER_BIT);
                        h.drawArrays(h.TRIANGLES, 0, 6);
                        h.flush();
                        h.deleteTexture(d);
                        h.deleteTexture(u);
                        h.deleteBuffer(p);
                        return c
                    }, drawFigures: function drawFigures(r, s, i, a, o) {
                        n || function initFiguresGL() {
                            generateGL();
                            const r = t;
                            t = null;
                            const s = e;
                            e = null;
                            const i = createProgram(s, [createVertexShader(s, "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             "), createFragmentShader(s, "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ")]);
                            s.useProgram(i);
                            const a = {};
                            a.gl = s;
                            a.canvas = r;
                            a.resolutionLocation = s.getUniformLocation(i, "u_resolution");
                            a.scaleLocation = s.getUniformLocation(i, "u_scale");
                            a.offsetLocation = s.getUniformLocation(i, "u_offset");
                            a.positionLocation = s.getAttribLocation(i, "a_position");
                            a.colorLocation = s.getAttribLocation(i, "a_color");
                            n = a
                        }();
                        const l = n, c = l.canvas, h = l.gl;
                        c.width = r;
                        c.height = s;
                        h.viewport(0, 0, h.drawingBufferWidth, h.drawingBufferHeight);
                        h.uniform2f(l.resolutionLocation, r, s);
                        let d = 0;
                        for (let e = 0, t = a.length; e < t; e++) switch (a[e].type) {
                            case"lattice":
                                d += ((a[e].coords.length / a[e].verticesPerRow | 0) - 1) * (a[e].verticesPerRow - 1) * 6;
                                break;
                            case"triangles":
                                d += a[e].coords.length
                        }
                        const u = new Float32Array(2 * d), p = new Uint8Array(3 * d), f = o.coords, g = o.colors;
                        let m = 0, A = 0;
                        for (let e = 0, t = a.length; e < t; e++) {
                            const t = a[e], r = t.coords, n = t.colors;
                            switch (t.type) {
                                case"lattice":
                                    const e = t.verticesPerRow, s = r.length / e | 0;
                                    for (let t = 1; t < s; t++) {
                                        let s = t * e + 1;
                                        for (let t = 1; t < e; t++, s++) {
                                            u[m] = f[r[s - e - 1]];
                                            u[m + 1] = f[r[s - e - 1] + 1];
                                            u[m + 2] = f[r[s - e]];
                                            u[m + 3] = f[r[s - e] + 1];
                                            u[m + 4] = f[r[s - 1]];
                                            u[m + 5] = f[r[s - 1] + 1];
                                            p[A] = g[n[s - e - 1]];
                                            p[A + 1] = g[n[s - e - 1] + 1];
                                            p[A + 2] = g[n[s - e - 1] + 2];
                                            p[A + 3] = g[n[s - e]];
                                            p[A + 4] = g[n[s - e] + 1];
                                            p[A + 5] = g[n[s - e] + 2];
                                            p[A + 6] = g[n[s - 1]];
                                            p[A + 7] = g[n[s - 1] + 1];
                                            p[A + 8] = g[n[s - 1] + 2];
                                            u[m + 6] = u[m + 2];
                                            u[m + 7] = u[m + 3];
                                            u[m + 8] = u[m + 4];
                                            u[m + 9] = u[m + 5];
                                            u[m + 10] = f[r[s]];
                                            u[m + 11] = f[r[s] + 1];
                                            p[A + 9] = p[A + 3];
                                            p[A + 10] = p[A + 4];
                                            p[A + 11] = p[A + 5];
                                            p[A + 12] = p[A + 6];
                                            p[A + 13] = p[A + 7];
                                            p[A + 14] = p[A + 8];
                                            p[A + 15] = g[n[s]];
                                            p[A + 16] = g[n[s] + 1];
                                            p[A + 17] = g[n[s] + 2];
                                            m += 12;
                                            A += 18
                                        }
                                    }
                                    break;
                                case"triangles":
                                    for (let e = 0, t = r.length; e < t; e++) {
                                        u[m] = f[r[e]];
                                        u[m + 1] = f[r[e] + 1];
                                        p[A] = g[n[e]];
                                        p[A + 1] = g[n[e] + 1];
                                        p[A + 2] = g[n[e] + 2];
                                        m += 2;
                                        A += 3
                                    }
                            }
                        }
                        i ? h.clearColor(i[0] / 255, i[1] / 255, i[2] / 255, 1) : h.clearColor(0, 0, 0, 0);
                        h.clear(h.COLOR_BUFFER_BIT);
                        const _ = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, _);
                        h.bufferData(h.ARRAY_BUFFER, u, h.STATIC_DRAW);
                        h.enableVertexAttribArray(l.positionLocation);
                        h.vertexAttribPointer(l.positionLocation, 2, h.FLOAT, !1, 0, 0);
                        const b = h.createBuffer();
                        h.bindBuffer(h.ARRAY_BUFFER, b);
                        h.bufferData(h.ARRAY_BUFFER, p, h.STATIC_DRAW);
                        h.enableVertexAttribArray(l.colorLocation);
                        h.vertexAttribPointer(l.colorLocation, 3, h.UNSIGNED_BYTE, !1, 0, 0);
                        h.uniform2f(l.scaleLocation, o.scaleX, o.scaleY);
                        h.uniform2f(l.offsetLocation, o.offsetX, o.offsetY);
                        h.drawArrays(h.TRIANGLES, 0, d);
                        h.flush();
                        h.deleteBuffer(_);
                        h.deleteBuffer(b);
                        return c
                    }, cleanup() {
                        if (r?.canvas) {
                            r.canvas.width = 0;
                            r.canvas.height = 0
                        }
                        if (n?.canvas) {
                            n.canvas.width = 0;
                            n.canvas.height = 0
                        }
                        r = null;
                        n = null
                    }
                }
            }()
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.AnnotationLayer = void 0;
            var n = r(1), s = r(2), i = r(8), a = r(20);

            class AnnotationElementFactory {
                static create(e) {
                    switch (e.data.annotationType) {
                        case s.AnnotationType.LINK:
                            return new LinkAnnotationElement(e);
                        case s.AnnotationType.TEXT:
                            return new TextAnnotationElement(e);
                        case s.AnnotationType.WIDGET:
                            switch (e.data.fieldType) {
                                case"Tx":
                                    return new TextWidgetAnnotationElement(e);
                                case"Btn":
                                    return e.data.radioButton ? new RadioButtonWidgetAnnotationElement(e) : e.data.checkBox ? new CheckboxWidgetAnnotationElement(e) : new PushButtonWidgetAnnotationElement(e);
                                case"Ch":
                                    return new ChoiceWidgetAnnotationElement(e)
                            }
                            return new WidgetAnnotationElement(e);
                        case s.AnnotationType.POPUP:
                            return new PopupAnnotationElement(e);
                        case s.AnnotationType.FREETEXT:
                            return new FreeTextAnnotationElement(e);
                        case s.AnnotationType.LINE:
                            return new LineAnnotationElement(e);
                        case s.AnnotationType.SQUARE:
                            return new SquareAnnotationElement(e);
                        case s.AnnotationType.CIRCLE:
                            return new CircleAnnotationElement(e);
                        case s.AnnotationType.POLYLINE:
                            return new PolylineAnnotationElement(e);
                        case s.AnnotationType.CARET:
                            return new CaretAnnotationElement(e);
                        case s.AnnotationType.INK:
                            return new InkAnnotationElement(e);
                        case s.AnnotationType.POLYGON:
                            return new PolygonAnnotationElement(e);
                        case s.AnnotationType.HIGHLIGHT:
                            return new HighlightAnnotationElement(e);
                        case s.AnnotationType.UNDERLINE:
                            return new UnderlineAnnotationElement(e);
                        case s.AnnotationType.SQUIGGLY:
                            return new SquigglyAnnotationElement(e);
                        case s.AnnotationType.STRIKEOUT:
                            return new StrikeOutAnnotationElement(e);
                        case s.AnnotationType.STAMP:
                            return new StampAnnotationElement(e);
                        case s.AnnotationType.FILEATTACHMENT:
                            return new FileAttachmentAnnotationElement(e);
                        default:
                            return new AnnotationElement(e)
                    }
                }
            }

            class AnnotationElement {
                constructor(e, {isRenderable: t = !1, ignoreBorder: r = !1, createQuadrilaterals: n = !1} = {}) {
                    this.isRenderable = t;
                    this.data = e.data;
                    this.layer = e.layer;
                    this.page = e.page;
                    this.viewport = e.viewport;
                    this.linkService = e.linkService;
                    this.downloadManager = e.downloadManager;
                    this.imageResourcesPath = e.imageResourcesPath;
                    this.renderInteractiveForms = e.renderInteractiveForms;
                    this.svgFactory = e.svgFactory;
                    this.annotationStorage = e.annotationStorage;
                    this.enableScripting = e.enableScripting;
                    this.hasJSActions = e.hasJSActions;
                    this._mouseState = e.mouseState;
                    t && (this.container = this._createContainer(r));
                    n && (this.quadrilaterals = this._createQuadrilaterals(r))
                }

                _createContainer(e = !1) {
                    const t = this.data, r = this.page, n = this.viewport, i = document.createElement("section");
                    let a = t.rect[2] - t.rect[0], o = t.rect[3] - t.rect[1];
                    i.setAttribute("data-annotation-id", t.id);
                    const l = s.Util.normalizeRect([t.rect[0], r.view[3] - t.rect[1] + r.view[1], t.rect[2], r.view[3] - t.rect[3] + r.view[1]]);
                    i.style.transform = `matrix(${n.transform.join(",")})`;
                    i.style.transformOrigin = `${-l[0]}px ${-l[1]}px`;
                    if (!e && t.borderStyle.width > 0) {
                        i.style.borderWidth = `${t.borderStyle.width}px`;
                        if (t.borderStyle.style !== s.AnnotationBorderStyleType.UNDERLINE) {
                            a -= 2 * t.borderStyle.width;
                            o -= 2 * t.borderStyle.width
                        }
                        const e = t.borderStyle.horizontalCornerRadius, r = t.borderStyle.verticalCornerRadius;
                        if (e > 0 || r > 0) {
                            const t = `${e}px / ${r}px`;
                            i.style.borderRadius = t
                        }
                        switch (t.borderStyle.style) {
                            case s.AnnotationBorderStyleType.SOLID:
                                i.style.borderStyle = "solid";
                                break;
                            case s.AnnotationBorderStyleType.DASHED:
                                i.style.borderStyle = "dashed";
                                break;
                            case s.AnnotationBorderStyleType.BEVELED:
                                (0, s.warn)("Unimplemented border style: beveled");
                                break;
                            case s.AnnotationBorderStyleType.INSET:
                                (0, s.warn)("Unimplemented border style: inset");
                                break;
                            case s.AnnotationBorderStyleType.UNDERLINE:
                                i.style.borderBottomStyle = "solid"
                        }
                        t.color ? i.style.borderColor = s.Util.makeHexColor(0 | t.color[0], 0 | t.color[1], 0 | t.color[2]) : i.style.borderWidth = 0
                    }
                    i.style.left = `${l[0]}px`;
                    i.style.top = `${l[1]}px`;
                    i.style.width = `${a}px`;
                    i.style.height = `${o}px`;
                    return i
                }

                _createQuadrilaterals(e = !1) {
                    if (!this.data.quadPoints) return null;
                    const t = [], r = this.data.rect;
                    for (const r of this.data.quadPoints) {
                        this.data.rect = [r[2].x, r[2].y, r[1].x, r[1].y];
                        t.push(this._createContainer(e))
                    }
                    this.data.rect = r;
                    return t
                }

                _createPopup(e, t) {
                    let r = this.container;
                    if (this.quadrilaterals) {
                        e = e || this.quadrilaterals;
                        r = this.quadrilaterals[0]
                    }
                    if (!e) {
                        (e = document.createElement("div")).style.height = r.style.height;
                        e.style.width = r.style.width;
                        r.appendChild(e)
                    }
                    const n = new PopupElement({
                        container: r,
                        trigger: e,
                        color: t.color,
                        title: t.title,
                        modificationDate: t.modificationDate,
                        contents: t.contents,
                        hideWrapper: !0
                    }).render();
                    n.style.left = r.style.width;
                    r.appendChild(n)
                }

                _renderQuadrilaterals(e) {
                    this.quadrilaterals.forEach((t => {
                        t.className = e
                    }));
                    return this.quadrilaterals
                }

                render() {
                    (0, s.unreachable)("Abstract method `AnnotationElement.render` called")
                }
            }

            class LinkAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {
                        isRenderable: !!(e.data.url || e.data.dest || e.data.action || e.data.isTooltipOnly || e.data.actions && (e.data.actions.Action || e.data.actions["Mouse Up"] || e.data.actions["Mouse Down"])),
                        createQuadrilaterals: !0
                    })
                }

                render() {
                    const {data: e, linkService: t} = this, r = document.createElement("a");
                    e.url ? (0, n.addLinkAttributes)(r, {
                        url: e.url,
                        target: e.newWindow ? n.LinkTarget.BLANK : t.externalLinkTarget,
                        rel: t.externalLinkRel,
                        enabled: t.externalLinkEnabled
                    }) : e.action ? this._bindNamedAction(r, e.action) : e.dest ? this._bindLink(r, e.dest) : e.actions && (e.actions.Action || e.actions["Mouse Up"] || e.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions ? this._bindJSAction(r, e) : this._bindLink(r, "");
                    if (this.quadrilaterals) return this._renderQuadrilaterals("linkAnnotation").map(((e, t) => {
                        const n = 0 === t ? r : r.cloneNode();
                        e.appendChild(n);
                        return e
                    }));
                    this.container.className = "linkAnnotation";
                    this.container.appendChild(r);
                    return this.container
                }

                _bindLink(e, t) {
                    e.href = this.linkService.getDestinationHash(t);
                    e.onclick = () => {
                        t && this.linkService.goToDestination(t);
                        return !1
                    };
                    (t || "" === t) && (e.className = "internalLink")
                }

                _bindNamedAction(e, t) {
                    e.href = this.linkService.getAnchorUrl("");
                    e.onclick = () => {
                        this.linkService.executeNamedAction(t);
                        return !1
                    };
                    e.className = "internalLink"
                }

                _bindJSAction(e, t) {
                    e.href = this.linkService.getAnchorUrl("");
                    const r = new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
                    for (const n of Object.keys(t.actions)) {
                        const s = r.get(n);
                        s && (e[s] = () => {
                            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                source: this,
                                detail: {id: t.id, name: n}
                            });
                            return !1
                        })
                    }
                    e.className = "internalLink"
                }
            }

            class TextAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents)})
                }

                render() {
                    this.container.className = "textAnnotation";
                    const e = document.createElement("img");
                    e.style.height = this.container.style.height;
                    e.style.width = this.container.style.width;
                    e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg";
                    e.alt = "[{{type}} Annotation]";
                    e.dataset.l10nId = "text_annotation_type";
                    e.dataset.l10nArgs = JSON.stringify({type: this.data.name});
                    this.data.hasPopup || this._createPopup(e, this.data);
                    this.container.appendChild(e);
                    return this.container
                }
            }

            class WidgetAnnotationElement extends AnnotationElement {
                render() {
                    this.data.alternativeText && (this.container.title = this.data.alternativeText);
                    return this.container
                }

                _getKeyModifier(e) {
                    return navigator.platform.includes("Win") && e.ctrlKey || navigator.platform.includes("Mac") && e.metaKey
                }

                _setEventListener(e, t, r, n) {
                    t.includes("mouse") ? e.addEventListener(t, (e => {
                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {
                                id: this.data.id,
                                name: r,
                                value: n(e),
                                shift: e.shiftKey,
                                modifier: this._getKeyModifier(e)
                            }
                        })
                    })) : e.addEventListener(t, (e => {
                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                            source: this,
                            detail: {id: this.data.id, name: r, value: e.target.checked}
                        })
                    }))
                }

                _setEventListeners(e, t, r) {
                    for (const [n, s] of t) ("Action" === s || this.data.actions?.[s]) && this._setEventListener(e, n, s, r)
                }
            }

            class TextWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: e.renderInteractiveForms || !e.data.hasAppearance && !!e.data.fieldValue})
                }

                render() {
                    const e = this.annotationStorage, t = this.data.id;
                    this.container.className = "textWidgetAnnotation";
                    let r = null;
                    if (this.renderInteractiveForms) {
                        const n = e.getOrCreateValue(t, {value: this.data.fieldValue}).value, s = {
                            userValue: null,
                            formattedValue: null,
                            beforeInputSelectionRange: null,
                            beforeInputValue: null
                        };
                        if (this.data.multiLine) {
                            r = document.createElement("textarea");
                            r.textContent = n
                        } else {
                            r = document.createElement("input");
                            r.type = "text";
                            r.setAttribute("value", n)
                        }
                        s.userValue = n;
                        r.setAttribute("id", t);
                        r.addEventListener("input", (function (r) {
                            e.setValue(t, {value: r.target.value})
                        }));
                        let blurListener = e => {
                            s.formattedValue && (e.target.value = s.formattedValue);
                            e.target.setSelectionRange(0, 0);
                            s.beforeInputSelectionRange = null
                        };
                        if (this.enableScripting && this.hasJSActions) {
                            r.addEventListener("focus", (e => {
                                s.userValue && (e.target.value = s.userValue)
                            }));
                            r.addEventListener("updatefromsandbox", (function (r) {
                                const {detail: n} = r, i = {
                                    value() {
                                        s.userValue = n.value || "";
                                        e.setValue(t, {value: s.userValue.toString()});
                                        s.formattedValue || (r.target.value = s.userValue)
                                    }, valueAsString() {
                                        s.formattedValue = n.valueAsString || "";
                                        r.target !== document.activeElement && (r.target.value = s.formattedValue);
                                        e.setValue(t, {formattedValue: s.formattedValue})
                                    }, focus() {
                                        setTimeout((() => r.target.focus({preventScroll: !1})), 0)
                                    }, userName() {
                                        r.target.title = n.userName
                                    }, hidden() {
                                        r.target.style.visibility = n.hidden ? "hidden" : "visible";
                                        e.setValue(t, {hidden: n.hidden})
                                    }, editable() {
                                        r.target.disabled = !n.editable
                                    }, selRange() {
                                        const [e, t] = n.selRange;
                                        e >= 0 && t < r.target.value.length && r.target.setSelectionRange(e, t)
                                    }, strokeColor() {
                                        const e = n.strokeColor;
                                        r.target.style.color = a.ColorConverters[`${e[0]}_HTML`](e.slice(1))
                                    }
                                };
                                Object.keys(n).filter((e => e in i)).forEach((e => i[e]()))
                            }));
                            if (this.data.actions) {
                                r.addEventListener("keydown", (e => {
                                    s.beforeInputValue = e.target.value;
                                    let r = -1;
                                    "Escape" === e.key ? r = 0 : "Enter" === e.key ? r = 2 : "Tab" === e.key && (r = 3);
                                    if (-1 !== r) {
                                        s.userValue = e.target.value;
                                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                            source: this,
                                            detail: {
                                                id: t,
                                                name: "Keystroke",
                                                value: e.target.value,
                                                willCommit: !0,
                                                commitKey: r,
                                                selStart: e.target.selectionStart,
                                                selEnd: e.target.selectionEnd
                                            }
                                        })
                                    }
                                }));
                                const e = blurListener;
                                blurListener = null;
                                r.addEventListener("blur", (r => {
                                    if (this._mouseState.isDown) {
                                        s.userValue = r.target.value;
                                        this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                            source: this,
                                            detail: {
                                                id: t,
                                                name: "Keystroke",
                                                value: r.target.value,
                                                willCommit: !0,
                                                commitKey: 1,
                                                selStart: r.target.selectionStart,
                                                selEnd: r.target.selectionEnd
                                            }
                                        })
                                    }
                                    e(r)
                                }));
                                r.addEventListener("mousedown", (e => {
                                    s.beforeInputValue = e.target.value;
                                    s.beforeInputSelectionRange = null
                                }));
                                r.addEventListener("keyup", (e => {
                                    e.target.selectionStart === e.target.selectionEnd && (s.beforeInputSelectionRange = null)
                                }));
                                r.addEventListener("select", (e => {
                                    s.beforeInputSelectionRange = [e.target.selectionStart, e.target.selectionEnd]
                                }));
                                "Keystroke" in this.data.actions && r.addEventListener("input", (e => {
                                    let r = -1, n = -1;
                                    s.beforeInputSelectionRange && ([r, n] = s.beforeInputSelectionRange);
                                    this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                        source: this,
                                        detail: {
                                            id: t,
                                            name: "Keystroke",
                                            value: s.beforeInputValue,
                                            change: e.data,
                                            willCommit: !1,
                                            selStart: r,
                                            selEnd: n
                                        }
                                    })
                                }));
                                this._setEventListeners(r, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (e => e.target.value))
                            }
                        }
                        blurListener && r.addEventListener("blur", blurListener);
                        r.disabled = this.data.readOnly;
                        r.name = this.data.fieldName;
                        null !== this.data.maxLen && (r.maxLength = this.data.maxLen);
                        if (this.data.comb) {
                            const e = (this.data.rect[2] - this.data.rect[0]) / this.data.maxLen;
                            r.classList.add("comb");
                            r.style.letterSpacing = `calc(${e}px - 1ch)`
                        }
                    } else {
                        r = document.createElement("div");
                        r.textContent = this.data.fieldValue;
                        r.style.verticalAlign = "middle";
                        r.style.display = "table-cell"
                    }
                    this._setTextStyle(r);
                    this.container.appendChild(r);
                    return this.container
                }

                _setTextStyle(e) {
                    const t = ["left", "center", "right"], {fontSize: r, fontColor: n} = this.data.defaultAppearanceData,
                        i = e.style;
                    r && (i.fontSize = `${r}px`);
                    i.color = s.Util.makeHexColor(n[0], n[1], n[2]);
                    null !== this.data.textAlignment && (i.textAlign = t[this.data.textAlignment])
                }
            }

            class CheckboxWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: e.renderInteractiveForms})
                }

                render() {
                    const e = this.annotationStorage, t = this.data, r = t.id,
                        n = e.getOrCreateValue(r, {value: t.fieldValue && "Off" !== t.fieldValue}).value;
                    this.container.className = "buttonWidgetAnnotation checkBox";
                    const s = document.createElement("input");
                    s.disabled = t.readOnly;
                    s.type = "checkbox";
                    s.name = this.data.fieldName;
                    n && s.setAttribute("checked", !0);
                    s.setAttribute("id", r);
                    s.addEventListener("change", (function (t) {
                        const n = t.target.name;
                        for (const r of document.getElementsByName(n)) if (r !== t.target) {
                            r.checked = !1;
                            e.setValue(r.parentNode.getAttribute("data-annotation-id"), {value: !1})
                        }
                        e.setValue(r, {value: t.target.checked})
                    }));
                    if (this.enableScripting && this.hasJSActions) {
                        s.addEventListener("updatefromsandbox", (t => {
                            const {detail: n} = t, s = {
                                value() {
                                    t.target.checked = "Off" !== n.value;
                                    e.setValue(r, {value: t.target.checked})
                                }, focus() {
                                    setTimeout((() => t.target.focus({preventScroll: !1})), 0)
                                }, hidden() {
                                    t.target.style.visibility = n.hidden ? "hidden" : "visible";
                                    e.setValue(r, {hidden: n.hidden})
                                }, editable() {
                                    t.target.disabled = !n.editable
                                }
                            };
                            Object.keys(n).filter((e => e in s)).forEach((e => s[e]()))
                        }));
                        this._setEventListeners(s, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (e => e.target.checked))
                    }
                    this.container.appendChild(s);
                    return this.container
                }
            }

            class RadioButtonWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: e.renderInteractiveForms})
                }

                render() {
                    this.container.className = "buttonWidgetAnnotation radioButton";
                    const e = this.annotationStorage, t = this.data, r = t.id,
                        n = e.getOrCreateValue(r, {value: t.fieldValue === t.buttonValue}).value,
                        s = document.createElement("input");
                    s.disabled = t.readOnly;
                    s.type = "radio";
                    s.name = t.fieldName;
                    n && s.setAttribute("checked", !0);
                    s.setAttribute("pdfButtonValue", t.buttonValue);
                    s.setAttribute("id", r);
                    s.addEventListener("change", (function (t) {
                        const {target: n} = t;
                        for (const t of document.getElementsByName(n.name)) t !== n && e.setValue(t.getAttribute("id"), {value: !1});
                        e.setValue(r, {value: n.checked})
                    }));
                    if (this.enableScripting && this.hasJSActions) {
                        s.addEventListener("updatefromsandbox", (t => {
                            const {detail: n} = t, s = {
                                value() {
                                    const r = n.value;
                                    for (const n of document.getElementsByName(t.target.name)) {
                                        const t = n.getAttribute("id");
                                        if (r === n.getAttribute("pdfButtonValue")) {
                                            n.setAttribute("checked", !0);
                                            e.setValue(t, {value: !0})
                                        } else e.setValue(t, {value: !1})
                                    }
                                }, focus() {
                                    setTimeout((() => t.target.focus({preventScroll: !1})), 0)
                                }, hidden() {
                                    t.target.style.visibility = n.hidden ? "hidden" : "visible";
                                    e.setValue(r, {hidden: n.hidden})
                                }, editable() {
                                    t.target.disabled = !n.editable
                                }
                            };
                            Object.keys(n).filter((e => e in s)).forEach((e => s[e]()))
                        }));
                        this._setEventListeners(s, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (e => e.target.checked))
                    }
                    this.container.appendChild(s);
                    return this.container
                }
            }

            class PushButtonWidgetAnnotationElement extends LinkAnnotationElement {
                render() {
                    const e = super.render();
                    e.className = "buttonWidgetAnnotation pushButton";
                    this.data.alternativeText && (e.title = this.data.alternativeText);
                    return e
                }
            }

            class ChoiceWidgetAnnotationElement extends WidgetAnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: e.renderInteractiveForms})
                }

                render() {
                    this.container.className = "choiceWidgetAnnotation";
                    const e = this.annotationStorage, t = this.data.id;
                    e.getOrCreateValue(t, {value: this.data.fieldValue.length > 0 ? this.data.fieldValue[0] : void 0});
                    const r = document.createElement("select");
                    r.disabled = this.data.readOnly;
                    r.name = this.data.fieldName;
                    r.setAttribute("id", t);
                    if (!this.data.combo) {
                        r.size = this.data.options.length;
                        this.data.multiSelect && (r.multiple = !0)
                    }
                    for (const e of this.data.options) {
                        const t = document.createElement("option");
                        t.textContent = e.displayValue;
                        t.value = e.exportValue;
                        this.data.fieldValue.includes(e.exportValue) && t.setAttribute("selected", !0);
                        r.appendChild(t)
                    }

                    function getValue(e) {
                        const t = e.target.options;
                        return t[t.selectedIndex].value
                    }

                    if (this.enableScripting && this.hasJSActions) {
                        r.addEventListener("updatefromsandbox", (r => {
                            const {detail: n} = r, s = {
                                value() {
                                    const s = r.target.options, i = n.value, a = s.indexOf(i);
                                    if (-1 !== a) {
                                        s.selectedIndex = a;
                                        e.setValue(t, {value: i})
                                    }
                                }, focus() {
                                    setTimeout((() => r.target.focus({preventScroll: !1})), 0)
                                }, hidden() {
                                    r.target.style.visibility = n.hidden ? "hidden" : "visible";
                                    e.setValue(t, {hidden: n.hidden})
                                }, editable() {
                                    r.target.disabled = !n.editable
                                }
                            };
                            Object.keys(n).filter((e => e in s)).forEach((e => s[e]()))
                        }));
                        r.addEventListener("input", (r => {
                            const n = getValue(r);
                            e.setValue(t, {value: n});
                            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                                source: this,
                                detail: {
                                    id: t,
                                    name: "Keystroke",
                                    changeEx: n,
                                    willCommit: !0,
                                    commitKey: 1,
                                    keyDown: !1
                                }
                            })
                        }));
                        this._setEventListeners(r, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (e => e.target.checked))
                    } else r.addEventListener("input", (function (r) {
                        e.setValue(t, {value: getValue(r)})
                    }));
                    this.container.appendChild(r);
                    return this.container
                }
            }

            class PopupAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !(!e.data.title && !e.data.contents)})
                }

                render() {
                    this.container.className = "popupAnnotation";
                    if (["Line", "Square", "Circle", "PolyLine", "Polygon", "Ink"].includes(this.data.parentType)) return this.container;
                    const e = `[data-annotation-id="${this.data.parentId}"]`, t = this.layer.querySelectorAll(e);
                    if (0 === t.length) return this.container;
                    const r = new PopupElement({
                            container: this.container,
                            trigger: Array.from(t),
                            color: this.data.color,
                            title: this.data.title,
                            modificationDate: this.data.modificationDate,
                            contents: this.data.contents
                        }), n = this.page,
                        i = s.Util.normalizeRect([this.data.parentRect[0], n.view[3] - this.data.parentRect[1] + n.view[1], this.data.parentRect[2], n.view[3] - this.data.parentRect[3] + n.view[1]]),
                        a = i[0] + this.data.parentRect[2] - this.data.parentRect[0], o = i[1];
                    this.container.style.transformOrigin = `${-a}px ${-o}px`;
                    this.container.style.left = `${a}px`;
                    this.container.style.top = `${o}px`;
                    this.container.appendChild(r.render());
                    return this.container
                }
            }

            class PopupElement {
                constructor(e) {
                    this.container = e.container;
                    this.trigger = e.trigger;
                    this.color = e.color;
                    this.title = e.title;
                    this.modificationDate = e.modificationDate;
                    this.contents = e.contents;
                    this.hideWrapper = e.hideWrapper || !1;
                    this.pinned = !1
                }

                render() {
                    const e = document.createElement("div");
                    e.className = "popupWrapper";
                    this.hideElement = this.hideWrapper ? e : this.container;
                    this.hideElement.setAttribute("hidden", !0);
                    const t = document.createElement("div");
                    t.className = "popup";
                    const r = this.color;
                    if (r) {
                        const e = .7 * (255 - r[0]) + r[0], n = .7 * (255 - r[1]) + r[1], i = .7 * (255 - r[2]) + r[2];
                        t.style.backgroundColor = s.Util.makeHexColor(0 | e, 0 | n, 0 | i)
                    }
                    const i = document.createElement("h1");
                    i.textContent = this.title;
                    t.appendChild(i);
                    const a = n.PDFDateString.toDateObject(this.modificationDate);
                    if (a) {
                        const e = document.createElement("span");
                        e.textContent = "{{date}}, {{time}}";
                        e.dataset.l10nId = "annotation_date_string";
                        e.dataset.l10nArgs = JSON.stringify({
                            date: a.toLocaleDateString(),
                            time: a.toLocaleTimeString()
                        });
                        t.appendChild(e)
                    }
                    const o = this._formatContents(this.contents);
                    t.appendChild(o);
                    Array.isArray(this.trigger) || (this.trigger = [this.trigger]);
                    this.trigger.forEach((e => {
                        e.addEventListener("click", this._toggle.bind(this));
                        e.addEventListener("mouseover", this._show.bind(this, !1));
                        e.addEventListener("mouseout", this._hide.bind(this, !1))
                    }));
                    t.addEventListener("click", this._hide.bind(this, !0));
                    e.appendChild(t);
                    return e
                }

                _formatContents(e) {
                    const t = document.createElement("p"), r = e.split(/(?:\r\n?|\n)/);
                    for (let e = 0, n = r.length; e < n; ++e) {
                        const s = r[e];
                        t.appendChild(document.createTextNode(s));
                        e < n - 1 && t.appendChild(document.createElement("br"))
                    }
                    return t
                }

                _toggle() {
                    this.pinned ? this._hide(!0) : this._show(!0)
                }

                _show(e = !1) {
                    e && (this.pinned = !0);
                    if (this.hideElement.hasAttribute("hidden")) {
                        this.hideElement.removeAttribute("hidden");
                        this.container.style.zIndex += 1
                    }
                }

                _hide(e = !0) {
                    e && (this.pinned = !1);
                    if (!this.hideElement.hasAttribute("hidden") && !this.pinned) {
                        this.hideElement.setAttribute("hidden", !0);
                        this.container.style.zIndex -= 1
                    }
                }
            }

            class FreeTextAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0})
                }

                render() {
                    this.container.className = "freeTextAnnotation";
                    this.data.hasPopup || this._createPopup(null, this.data);
                    return this.container
                }
            }

            class LineAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0})
                }

                render() {
                    this.container.className = "lineAnnotation";
                    const e = this.data, t = e.rect[2] - e.rect[0], r = e.rect[3] - e.rect[1],
                        n = this.svgFactory.create(t, r), s = this.svgFactory.createElement("svg:line");
                    s.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]);
                    s.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]);
                    s.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]);
                    s.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]);
                    s.setAttribute("stroke-width", e.borderStyle.width || 1);
                    s.setAttribute("stroke", "transparent");
                    n.appendChild(s);
                    this.container.append(n);
                    this._createPopup(s, e);
                    return this.container
                }
            }

            class SquareAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0})
                }

                render() {
                    this.container.className = "squareAnnotation";
                    const e = this.data, t = e.rect[2] - e.rect[0], r = e.rect[3] - e.rect[1],
                        n = this.svgFactory.create(t, r), s = e.borderStyle.width,
                        i = this.svgFactory.createElement("svg:rect");
                    i.setAttribute("x", s / 2);
                    i.setAttribute("y", s / 2);
                    i.setAttribute("width", t - s);
                    i.setAttribute("height", r - s);
                    i.setAttribute("stroke-width", s || 1);
                    i.setAttribute("stroke", "transparent");
                    i.setAttribute("fill", "none");
                    n.appendChild(i);
                    this.container.append(n);
                    this._createPopup(i, e);
                    return this.container
                }
            }

            class CircleAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0})
                }

                render() {
                    this.container.className = "circleAnnotation";
                    const e = this.data, t = e.rect[2] - e.rect[0], r = e.rect[3] - e.rect[1],
                        n = this.svgFactory.create(t, r), s = e.borderStyle.width,
                        i = this.svgFactory.createElement("svg:ellipse");
                    i.setAttribute("cx", t / 2);
                    i.setAttribute("cy", r / 2);
                    i.setAttribute("rx", t / 2 - s / 2);
                    i.setAttribute("ry", r / 2 - s / 2);
                    i.setAttribute("stroke-width", s || 1);
                    i.setAttribute("stroke", "transparent");
                    i.setAttribute("fill", "none");
                    n.appendChild(i);
                    this.container.append(n);
                    this._createPopup(i, e);
                    return this.container
                }
            }

            class PolylineAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0});
                    this.containerClassName = "polylineAnnotation";
                    this.svgElementName = "svg:polyline"
                }

                render() {
                    this.container.className = this.containerClassName;
                    const e = this.data, t = e.rect[2] - e.rect[0], r = e.rect[3] - e.rect[1],
                        n = this.svgFactory.create(t, r);
                    let s = [];
                    for (const t of e.vertices) {
                        const r = t.x - e.rect[0], n = e.rect[3] - t.y;
                        s.push(r + "," + n)
                    }
                    s = s.join(" ");
                    const i = this.svgFactory.createElement(this.svgElementName);
                    i.setAttribute("points", s);
                    i.setAttribute("stroke-width", e.borderStyle.width || 1);
                    i.setAttribute("stroke", "transparent");
                    i.setAttribute("fill", "none");
                    n.appendChild(i);
                    this.container.append(n);
                    this._createPopup(i, e);
                    return this.container
                }
            }

            class PolygonAnnotationElement extends PolylineAnnotationElement {
                constructor(e) {
                    super(e);
                    this.containerClassName = "polygonAnnotation";
                    this.svgElementName = "svg:polygon"
                }
            }

            class CaretAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0})
                }

                render() {
                    this.container.className = "caretAnnotation";
                    this.data.hasPopup || this._createPopup(null, this.data);
                    return this.container
                }
            }

            class InkAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0});
                    this.containerClassName = "inkAnnotation";
                    this.svgElementName = "svg:polyline"
                }

                render() {
                    this.container.className = this.containerClassName;
                    const e = this.data, t = e.rect[2] - e.rect[0], r = e.rect[3] - e.rect[1],
                        n = this.svgFactory.create(t, r);
                    for (const t of e.inkLists) {
                        let r = [];
                        for (const n of t) {
                            const t = n.x - e.rect[0], s = e.rect[3] - n.y;
                            r.push(`${t},${s}`)
                        }
                        r = r.join(" ");
                        const s = this.svgFactory.createElement(this.svgElementName);
                        s.setAttribute("points", r);
                        s.setAttribute("stroke-width", e.borderStyle.width || 1);
                        s.setAttribute("stroke", "transparent");
                        s.setAttribute("fill", "none");
                        this._createPopup(s, e);
                        n.appendChild(s)
                    }
                    this.container.append(n);
                    return this.container
                }
            }

            class HighlightAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {
                        isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents),
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                    })
                }

                render() {
                    this.data.hasPopup || this._createPopup(null, this.data);
                    if (this.quadrilaterals) return this._renderQuadrilaterals("highlightAnnotation");
                    this.container.className = "highlightAnnotation";
                    return this.container
                }
            }

            class UnderlineAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {
                        isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents),
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                    })
                }

                render() {
                    this.data.hasPopup || this._createPopup(null, this.data);
                    if (this.quadrilaterals) return this._renderQuadrilaterals("underlineAnnotation");
                    this.container.className = "underlineAnnotation";
                    return this.container
                }
            }

            class SquigglyAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {
                        isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents),
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                    })
                }

                render() {
                    this.data.hasPopup || this._createPopup(null, this.data);
                    if (this.quadrilaterals) return this._renderQuadrilaterals("squigglyAnnotation");
                    this.container.className = "squigglyAnnotation";
                    return this.container
                }
            }

            class StrikeOutAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {
                        isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents),
                        ignoreBorder: !0,
                        createQuadrilaterals: !0
                    })
                }

                render() {
                    this.data.hasPopup || this._createPopup(null, this.data);
                    if (this.quadrilaterals) return this._renderQuadrilaterals("strikeoutAnnotation");
                    this.container.className = "strikeoutAnnotation";
                    return this.container
                }
            }

            class StampAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !!(e.data.hasPopup || e.data.title || e.data.contents), ignoreBorder: !0})
                }

                render() {
                    this.container.className = "stampAnnotation";
                    this.data.hasPopup || this._createPopup(null, this.data);
                    return this.container
                }
            }

            class FileAttachmentAnnotationElement extends AnnotationElement {
                constructor(e) {
                    super(e, {isRenderable: !0});
                    const {filename: t, content: r} = this.data.file;
                    this.filename = (0, n.getFilenameFromUrl)(t);
                    this.content = r;
                    this.linkService.eventBus?.dispatch("fileattachmentannotation", {
                        source: this,
                        id: (0, s.stringToPDFString)(t),
                        filename: t,
                        content: r
                    })
                }

                render() {
                    this.container.className = "fileAttachmentAnnotation";
                    const e = document.createElement("div");
                    e.style.height = this.container.style.height;
                    e.style.width = this.container.style.width;
                    e.addEventListener("dblclick", this._download.bind(this));
                    this.data.hasPopup || !this.data.title && !this.data.contents || this._createPopup(e, this.data);
                    this.container.appendChild(e);
                    return this.container
                }

                _download() {
                    this.downloadManager ? this.downloadManager.downloadData(this.content, this.filename, "") : (0, s.warn)("Download cannot be started due to unavailable download manager")
                }
            }

            t.AnnotationLayer = class AnnotationLayer {
                static render(e) {
                    const t = [], r = [];
                    for (const n of e.annotations) n && (n.annotationType !== s.AnnotationType.POPUP ? t.push(n) : r.push(n));
                    r.length && t.push(...r);
                    for (const r of t) {
                        const t = AnnotationElementFactory.create({
                            data: r,
                            layer: e.div,
                            page: e.page,
                            viewport: e.viewport,
                            linkService: e.linkService,
                            downloadManager: e.downloadManager,
                            imageResourcesPath: e.imageResourcesPath || "",
                            renderInteractiveForms: "boolean" != typeof e.renderInteractiveForms || e.renderInteractiveForms,
                            svgFactory: new n.DOMSVGFactory,
                            annotationStorage: e.annotationStorage || new i.AnnotationStorage,
                            enableScripting: e.enableScripting,
                            hasJSActions: e.hasJSActions,
                            mouseState: e.mouseState || {isDown: !1}
                        });
                        if (t.isRenderable) {
                            const n = t.render();
                            r.hidden && (n.style.visibility = "hidden");
                            if (Array.isArray(n)) for (const t of n) e.div.appendChild(t); else t instanceof PopupAnnotationElement ? e.div.prepend(n) : e.div.appendChild(n)
                        }
                    }
                }

                static update(e) {
                    const t = `matrix(${e.viewport.transform.join(",")})`;
                    for (const r of e.annotations) {
                        const n = e.div.querySelectorAll(`[data-annotation-id="${r.id}"]`);
                        n && n.forEach((e => {
                            e.style.transform = t
                        }))
                    }
                    e.div.removeAttribute("hidden")
                }
            }
        }, (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.ColorConverters = void 0;

            function makeColorComp(e) {
                return Math.floor(255 * Math.max(0, Math.min(1, e))).toString(16).padStart(2, "0")
            }

            t.ColorConverters = class ColorConverters {
                static CMYK_G([e, t, r, n]) {
                    return ["G", 1 - Math.min(1, .3 * e + .59 * r + .11 * t + n)]
                }

                static G_CMYK([e]) {
                    return ["CMYK", 0, 0, 0, 1 - e]
                }

                static G_RGB([e]) {
                    return ["RGB", e, e, e]
                }

                static G_HTML([e]) {
                    const t = makeColorComp(e);
                    return `#${t}${t}${t}`
                }

                static RGB_G([e, t, r]) {
                    return ["G", .3 * e + .59 * t + .11 * r]
                }

                static RGB_HTML([e, t, r]) {
                    return `#${makeColorComp(e)}${makeColorComp(t)}${makeColorComp(r)}`
                }

                static T_HTML() {
                    return "#00000000"
                }

                static CMYK_RGB([e, t, r, n]) {
                    return ["RGB", 1 - Math.min(1, e + n), 1 - Math.min(1, r + n), 1 - Math.min(1, t + n)]
                }

                static CMYK_HTML(e) {
                    return this.RGB_HTML(this.CMYK_RGB(e))
                }

                static RGB_CMYK([e, t, r]) {
                    const n = 1 - e, s = 1 - t, i = 1 - r;
                    return ["CMYK", n, s, i, Math.min(n, s, i)]
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.renderTextLayer = void 0;
            var n = r(2);
            const s = function renderTextLayerClosure() {
                const e = /\S/;

                function appendText(t, r, s) {
                    const i = document.createElement("span"), a = {
                        angle: 0,
                        canvasWidth: 0,
                        isWhitespace: !1,
                        originalTransform: null,
                        paddingBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        scale: 1
                    };
                    t._textDivs.push(i);
                    if (function isAllWhitespace(t) {
                        return !e.test(t)
                    }(r.str)) {
                        a.isWhitespace = !0;
                        t._textDivProperties.set(i, a);
                        return
                    }
                    const o = n.Util.transform(t._viewport.transform, r.transform);
                    let l = Math.atan2(o[1], o[0]);
                    const c = s[r.fontName];
                    c.vertical && (l += Math.PI / 2);
                    const h = Math.sqrt(o[2] * o[2] + o[3] * o[3]);
                    let d, u, p = h;
                    c.ascent ? p = c.ascent * p : c.descent && (p = (1 + c.descent) * p);
                    if (0 === l) {
                        d = o[4];
                        u = o[5] - p
                    } else {
                        d = o[4] + p * Math.sin(l);
                        u = o[5] - p * Math.cos(l)
                    }
                    i.style.left = `${d}px`;
                    i.style.top = `${u}px`;
                    i.style.fontSize = `${h}px`;
                    i.style.fontFamily = c.fontFamily;
                    i.textContent = r.str;
                    t._fontInspectorEnabled && (i.dataset.fontName = r.fontName);
                    0 !== l && (a.angle = l * (180 / Math.PI));
                    let f = !1;
                    if (r.str.length > 1) f = !0; else if (r.transform[0] !== r.transform[3]) {
                        const e = Math.abs(r.transform[0]), t = Math.abs(r.transform[3]);
                        e !== t && Math.max(e, t) / Math.min(e, t) > 1.5 && (f = !0)
                    }
                    f && (c.vertical ? a.canvasWidth = r.height * t._viewport.scale : a.canvasWidth = r.width * t._viewport.scale);
                    t._textDivProperties.set(i, a);
                    t._textContentStream && t._layoutText(i);
                    if (t._enhanceTextSelection) {
                        let e = 1, s = 0;
                        if (0 !== l) {
                            e = Math.cos(l);
                            s = Math.sin(l)
                        }
                        const a = (c.vertical ? r.height : r.width) * t._viewport.scale, o = h;
                        let p, f;
                        if (0 !== l) {
                            p = [e, s, -s, e, d, u];
                            f = n.Util.getAxialAlignedBoundingBox([0, 0, a, o], p)
                        } else f = [d, u, d + a, u + o];
                        t._bounds.push({left: f[0], top: f[1], right: f[2], bottom: f[3], div: i, size: [a, o], m: p})
                    }
                }

                function render(e) {
                    if (e._canceled) return;
                    const t = e._textDivs, r = e._capability, n = t.length;
                    if (n > 1e5) {
                        e._renderingDone = !0;
                        r.resolve()
                    } else {
                        if (!e._textContentStream) for (let r = 0; r < n; r++) e._layoutText(t[r]);
                        e._renderingDone = !0;
                        r.resolve()
                    }
                }

                function findPositiveMin(e, t, r) {
                    let n = 0;
                    for (let s = 0; s < r; s++) {
                        const r = e[t++];
                        r > 0 && (n = n ? Math.min(r, n) : r)
                    }
                    return n
                }

                function expand(e) {
                    const t = e._bounds, r = e._viewport, s = function expandBounds(e, t, r) {
                        const n = r.map((function (e, t) {
                            return {
                                x1: e.left,
                                y1: e.top,
                                x2: e.right,
                                y2: e.bottom,
                                index: t,
                                x1New: void 0,
                                x2New: void 0
                            }
                        }));
                        expandBoundsLTR(e, n);
                        const s = new Array(r.length);
                        n.forEach((function (e) {
                            const t = e.index;
                            s[t] = {left: e.x1New, top: 0, right: e.x2New, bottom: 0}
                        }));
                        r.map((function (t, r) {
                            const i = s[r], a = n[r];
                            a.x1 = t.top;
                            a.y1 = e - i.right;
                            a.x2 = t.bottom;
                            a.y2 = e - i.left;
                            a.index = r;
                            a.x1New = void 0;
                            a.x2New = void 0
                        }));
                        expandBoundsLTR(t, n);
                        n.forEach((function (e) {
                            const t = e.index;
                            s[t].top = e.x1New;
                            s[t].bottom = e.x2New
                        }));
                        return s
                    }(r.width, r.height, t);
                    for (let r = 0; r < s.length; r++) {
                        const i = t[r].div, a = e._textDivProperties.get(i);
                        if (0 === a.angle) {
                            a.paddingLeft = t[r].left - s[r].left;
                            a.paddingTop = t[r].top - s[r].top;
                            a.paddingRight = s[r].right - t[r].right;
                            a.paddingBottom = s[r].bottom - t[r].bottom;
                            e._textDivProperties.set(i, a);
                            continue
                        }
                        const o = s[r], l = t[r], c = l.m, h = c[0], d = c[1],
                            u = [[0, 0], [0, l.size[1]], [l.size[0], 0], l.size], p = new Float64Array(64);
                        u.forEach((function (e, t) {
                            const r = n.Util.applyTransform(e, c);
                            p[t + 0] = h && (o.left - r[0]) / h;
                            p[t + 4] = d && (o.top - r[1]) / d;
                            p[t + 8] = h && (o.right - r[0]) / h;
                            p[t + 12] = d && (o.bottom - r[1]) / d;
                            p[t + 16] = d && (o.left - r[0]) / -d;
                            p[t + 20] = h && (o.top - r[1]) / h;
                            p[t + 24] = d && (o.right - r[0]) / -d;
                            p[t + 28] = h && (o.bottom - r[1]) / h;
                            p[t + 32] = h && (o.left - r[0]) / -h;
                            p[t + 36] = d && (o.top - r[1]) / -d;
                            p[t + 40] = h && (o.right - r[0]) / -h;
                            p[t + 44] = d && (o.bottom - r[1]) / -d;
                            p[t + 48] = d && (o.left - r[0]) / d;
                            p[t + 52] = h && (o.top - r[1]) / -h;
                            p[t + 56] = d && (o.right - r[0]) / d;
                            p[t + 60] = h && (o.bottom - r[1]) / -h
                        }));
                        const f = 1 + Math.min(Math.abs(h), Math.abs(d));
                        a.paddingLeft = findPositiveMin(p, 32, 16) / f;
                        a.paddingTop = findPositiveMin(p, 48, 16) / f;
                        a.paddingRight = findPositiveMin(p, 0, 16) / f;
                        a.paddingBottom = findPositiveMin(p, 16, 16) / f;
                        e._textDivProperties.set(i, a)
                    }
                }

                function expandBoundsLTR(e, t) {
                    t.sort((function (e, t) {
                        return e.x1 - t.x1 || e.index - t.index
                    }));
                    const r = [{
                        start: -1 / 0,
                        end: 1 / 0,
                        boundary: {x1: -1 / 0, y1: -1 / 0, x2: 0, y2: 1 / 0, index: -1, x1New: 0, x2New: 0}
                    }];
                    t.forEach((function (e) {
                        let t = 0;
                        for (; t < r.length && r[t].end <= e.y1;) t++;
                        let n, s, i = r.length - 1;
                        for (; i >= 0 && r[i].start >= e.y2;) i--;
                        let a, o, l = -1 / 0;
                        for (a = t; a <= i; a++) {
                            n = r[a];
                            s = n.boundary;
                            let t;
                            t = s.x2 > e.x1 ? s.index > e.index ? s.x1New : e.x1 : void 0 === s.x2New ? (s.x2 + e.x1) / 2 : s.x2New;
                            t > l && (l = t)
                        }
                        e.x1New = l;
                        for (a = t; a <= i; a++) {
                            n = r[a];
                            s = n.boundary;
                            void 0 === s.x2New ? s.x2 > e.x1 ? s.index > e.index && (s.x2New = s.x2) : s.x2New = l : s.x2New > l && (s.x2New = Math.max(l, s.x2))
                        }
                        const c = [];
                        let h = null;
                        for (a = t; a <= i; a++) {
                            n = r[a];
                            s = n.boundary;
                            const t = s.x2 > e.x2 ? s : e;
                            if (h === t) c[c.length - 1].end = n.end; else {
                                c.push({start: n.start, end: n.end, boundary: t});
                                h = t
                            }
                        }
                        if (r[t].start < e.y1) {
                            c[0].start = e.y1;
                            c.unshift({start: r[t].start, end: e.y1, boundary: r[t].boundary})
                        }
                        if (e.y2 < r[i].end) {
                            c[c.length - 1].end = e.y2;
                            c.push({start: e.y2, end: r[i].end, boundary: r[i].boundary})
                        }
                        for (a = t; a <= i; a++) {
                            n = r[a];
                            s = n.boundary;
                            if (void 0 !== s.x2New) continue;
                            let e = !1;
                            for (o = t - 1; !e && o >= 0 && r[o].start >= s.y1; o--) e = r[o].boundary === s;
                            for (o = i + 1; !e && o < r.length && r[o].end <= s.y2; o++) e = r[o].boundary === s;
                            for (o = 0; !e && o < c.length; o++) e = c[o].boundary === s;
                            e || (s.x2New = l)
                        }
                        Array.prototype.splice.apply(r, [t, i - t + 1].concat(c))
                    }));
                    r.forEach((function (t) {
                        const r = t.boundary;
                        void 0 === r.x2New && (r.x2New = Math.max(e, r.x2))
                    }))
                }

                function TextLayerRenderTask({textContent: e, textContentStream: t, container: r, viewport: s, textDivs: i, textContentItemsStr: a, enhanceTextSelection: o}) {
                    this._textContent = e;
                    this._textContentStream = t;
                    this._container = r;
                    this._document = r.ownerDocument;
                    this._viewport = s;
                    this._textDivs = i || [];
                    this._textContentItemsStr = a || [];
                    this._enhanceTextSelection = !!o;
                    this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled;
                    this._reader = null;
                    this._layoutTextLastFontSize = null;
                    this._layoutTextLastFontFamily = null;
                    this._layoutTextCtx = null;
                    this._textDivProperties = new WeakMap;
                    this._renderingDone = !1;
                    this._canceled = !1;
                    this._capability = (0, n.createPromiseCapability)();
                    this._renderTimer = null;
                    this._bounds = [];
                    this._capability.promise.finally((() => {
                        if (this._layoutTextCtx) {
                            this._layoutTextCtx.canvas.width = 0;
                            this._layoutTextCtx.canvas.height = 0;
                            this._layoutTextCtx = null
                        }
                    })).catch((() => {
                    }))
                }

                TextLayerRenderTask.prototype = {
                    get promise() {
                        return this._capability.promise
                    }, cancel: function TextLayer_cancel() {
                        this._canceled = !0;
                        if (this._reader) {
                            this._reader.cancel(new n.AbortException("TextLayer task cancelled."));
                            this._reader = null
                        }
                        if (null !== this._renderTimer) {
                            clearTimeout(this._renderTimer);
                            this._renderTimer = null
                        }
                        this._capability.reject(new Error("TextLayer task cancelled."))
                    }, _processItems(e, t) {
                        for (let r = 0, n = e.length; r < n; r++) {
                            this._textContentItemsStr.push(e[r].str);
                            appendText(this, e[r], t)
                        }
                    }, _layoutText(e) {
                        const t = this._textDivProperties.get(e);
                        if (t.isWhitespace) return;
                        let r = "";
                        if (0 !== t.canvasWidth) {
                            const {fontSize: n, fontFamily: s} = e.style;
                            if (n !== this._layoutTextLastFontSize || s !== this._layoutTextLastFontFamily) {
                                this._layoutTextCtx.font = `${n} ${s}`;
                                this._layoutTextLastFontSize = n;
                                this._layoutTextLastFontFamily = s
                            }
                            const {width: i} = this._layoutTextCtx.measureText(e.textContent);
                            if (i > 0) {
                                t.scale = t.canvasWidth / i;
                                r = `scaleX(${t.scale})`
                            }
                        }
                        0 !== t.angle && (r = `rotate(${t.angle}deg) ${r}`);
                        if (r.length > 0) {
                            this._enhanceTextSelection && (t.originalTransform = r);
                            e.style.transform = r
                        }
                        this._textDivProperties.set(e, t);
                        this._container.appendChild(e)
                    }, _render: function TextLayer_render(e) {
                        const t = (0, n.createPromiseCapability)();
                        let r = Object.create(null);
                        const s = this._document.createElement("canvas");
                        s.mozOpaque = !0;
                        this._layoutTextCtx = s.getContext("2d", {alpha: !1});
                        if (this._textContent) {
                            const e = this._textContent.items, r = this._textContent.styles;
                            this._processItems(e, r);
                            t.resolve()
                        } else {
                            if (!this._textContentStream) throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
                            {
                                const pump = () => {
                                    this._reader.read().then((({value: e, done: n}) => {
                                        if (n) t.resolve(); else {
                                            Object.assign(r, e.styles);
                                            this._processItems(e.items, r);
                                            pump()
                                        }
                                    }), t.reject)
                                };
                                this._reader = this._textContentStream.getReader();
                                pump()
                            }
                        }
                        t.promise.then((() => {
                            r = null;
                            e ? this._renderTimer = setTimeout((() => {
                                render(this);
                                this._renderTimer = null
                            }), e) : render(this)
                        }), this._capability.reject)
                    }, expandTextDivs: function TextLayer_expandTextDivs(e) {
                        if (!this._enhanceTextSelection || !this._renderingDone) return;
                        if (null !== this._bounds) {
                            expand(this);
                            this._bounds = null
                        }
                        const t = [], r = [];
                        for (let n = 0, s = this._textDivs.length; n < s; n++) {
                            const s = this._textDivs[n], i = this._textDivProperties.get(s);
                            if (!i.isWhitespace) if (e) {
                                t.length = 0;
                                r.length = 0;
                                i.originalTransform && t.push(i.originalTransform);
                                if (i.paddingTop > 0) {
                                    r.push(`${i.paddingTop}px`);
                                    t.push(`translateY(${-i.paddingTop}px)`)
                                } else r.push(0);
                                i.paddingRight > 0 ? r.push(i.paddingRight / i.scale + "px") : r.push(0);
                                i.paddingBottom > 0 ? r.push(`${i.paddingBottom}px`) : r.push(0);
                                if (i.paddingLeft > 0) {
                                    r.push(i.paddingLeft / i.scale + "px");
                                    t.push(`translateX(${-i.paddingLeft / i.scale}px)`)
                                } else r.push(0);
                                s.style.padding = r.join(" ");
                                t.length && (s.style.transform = t.join(" "))
                            } else {
                                s.style.padding = null;
                                s.style.transform = i.originalTransform
                            }
                        }
                    }
                };
                return function renderTextLayer(e) {
                    const t = new TextLayerRenderTask({
                        textContent: e.textContent,
                        textContentStream: e.textContentStream,
                        container: e.container,
                        viewport: e.viewport,
                        textDivs: e.textDivs,
                        textContentItemsStr: e.textContentItemsStr,
                        enhanceTextSelection: e.enhanceTextSelection
                    });
                    t._render(e.timeout);
                    return t
                }
            }();
            t.renderTextLayer = s
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.SVGGraphics = void 0;
            var n = r(2), s = r(1), i = r(4);
            let SVGGraphics = function () {
                throw new Error("Not implemented: SVGGraphics")
            };
            t.SVGGraphics = SVGGraphics;
            {
                const e = {fontStyle: "normal", fontWeight: "normal", fillColor: "#000000"},
                    r = "http://www.w3.org/XML/1998/namespace", a = "http://www.w3.org/1999/xlink",
                    o = ["butt", "round", "square"], l = ["miter", "round", "bevel"], c = function () {
                        const e = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), t = new Int32Array(256);
                        for (let e = 0; e < 256; e++) {
                            let r = e;
                            for (let e = 0; e < 8; e++) r = 1 & r ? 3988292384 ^ r >> 1 & 2147483647 : r >> 1 & 2147483647;
                            t[e] = r
                        }

                        function writePngChunk(e, r, n, s) {
                            let i = s;
                            const a = r.length;
                            n[i] = a >> 24 & 255;
                            n[i + 1] = a >> 16 & 255;
                            n[i + 2] = a >> 8 & 255;
                            n[i + 3] = 255 & a;
                            i += 4;
                            n[i] = 255 & e.charCodeAt(0);
                            n[i + 1] = 255 & e.charCodeAt(1);
                            n[i + 2] = 255 & e.charCodeAt(2);
                            n[i + 3] = 255 & e.charCodeAt(3);
                            i += 4;
                            n.set(r, i);
                            i += r.length;
                            const o = function crc32(e, r, n) {
                                let s = -1;
                                for (let i = r; i < n; i++) {
                                    const r = 255 & (s ^ e[i]);
                                    s = s >>> 8 ^ t[r]
                                }
                                return -1 ^ s
                            }(n, s + 4, i);
                            n[i] = o >> 24 & 255;
                            n[i + 1] = o >> 16 & 255;
                            n[i + 2] = o >> 8 & 255;
                            n[i + 3] = 255 & o
                        }

                        function deflateSyncUncompressed(e) {
                            let t = e.length;
                            const r = 65535, n = Math.ceil(t / r), s = new Uint8Array(2 + t + 5 * n + 4);
                            let i = 0;
                            s[i++] = 120;
                            s[i++] = 156;
                            let a = 0;
                            for (; t > r;) {
                                s[i++] = 0;
                                s[i++] = 255;
                                s[i++] = 255;
                                s[i++] = 0;
                                s[i++] = 0;
                                s.set(e.subarray(a, a + r), i);
                                i += r;
                                a += r;
                                t -= r
                            }
                            s[i++] = 1;
                            s[i++] = 255 & t;
                            s[i++] = t >> 8 & 255;
                            s[i++] = 255 & ~t;
                            s[i++] = (65535 & ~t) >> 8 & 255;
                            s.set(e.subarray(a), i);
                            i += e.length - a;
                            const o = function adler32(e, t, r) {
                                let n = 1, s = 0;
                                for (let i = t; i < r; ++i) {
                                    n = (n + (255 & e[i])) % 65521;
                                    s = (s + n) % 65521
                                }
                                return s << 16 | n
                            }(e, 0, e.length);
                            s[i++] = o >> 24 & 255;
                            s[i++] = o >> 16 & 255;
                            s[i++] = o >> 8 & 255;
                            s[i++] = 255 & o;
                            return s
                        }

                        function encode(t, r, s, a) {
                            const o = t.width, l = t.height;
                            let c, h, d;
                            const u = t.data;
                            switch (r) {
                                case n.ImageKind.GRAYSCALE_1BPP:
                                    h = 0;
                                    c = 1;
                                    d = o + 7 >> 3;
                                    break;
                                case n.ImageKind.RGB_24BPP:
                                    h = 2;
                                    c = 8;
                                    d = 3 * o;
                                    break;
                                case n.ImageKind.RGBA_32BPP:
                                    h = 6;
                                    c = 8;
                                    d = 4 * o;
                                    break;
                                default:
                                    throw new Error("invalid format")
                            }
                            const p = new Uint8Array((1 + d) * l);
                            let f = 0, g = 0;
                            for (let e = 0; e < l; ++e) {
                                p[f++] = 0;
                                p.set(u.subarray(g, g + d), f);
                                g += d;
                                f += d
                            }
                            if (r === n.ImageKind.GRAYSCALE_1BPP && a) {
                                f = 0;
                                for (let e = 0; e < l; e++) {
                                    f++;
                                    for (let e = 0; e < d; e++) p[f++] ^= 255
                                }
                            }
                            const m = new Uint8Array([o >> 24 & 255, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24 & 255, l >> 16 & 255, l >> 8 & 255, 255 & l, c, h, 0, 0, 0]),
                                A = function deflateSync(e) {
                                    if (!i.isNodeJS) return deflateSyncUncompressed(e);
                                    try {
                                        let t;
                                        t = parseInt(process.versions.node) >= 8 ? e : Buffer.from(e);
                                        const r = require("zlib").deflateSync(t, {level: 9});
                                        return r instanceof Uint8Array ? r : new Uint8Array(r)
                                    } catch (e) {
                                        (0, n.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + e)
                                    }
                                    return deflateSyncUncompressed(e)
                                }(p), _ = e.length + 36 + m.length + A.length, b = new Uint8Array(_);
                            let y = 0;
                            b.set(e, y);
                            y += e.length;
                            writePngChunk("IHDR", m, b, y);
                            y += 12 + m.length;
                            writePngChunk("IDATA", A, b, y);
                            y += 12 + A.length;
                            writePngChunk("IEND", new Uint8Array(0), b, y);
                            return (0, n.createObjectURL)(b, "image/png", s)
                        }

                        return function convertImgDataToPng(e, t, r) {
                            return encode(e, void 0 === e.kind ? n.ImageKind.GRAYSCALE_1BPP : e.kind, t, r)
                        }
                    }();

                class SVGExtraState {
                    constructor() {
                        this.fontSizeScale = 1;
                        this.fontWeight = e.fontWeight;
                        this.fontSize = 0;
                        this.textMatrix = n.IDENTITY_MATRIX;
                        this.fontMatrix = n.FONT_IDENTITY_MATRIX;
                        this.leading = 0;
                        this.textRenderingMode = n.TextRenderingMode.FILL;
                        this.textMatrixScale = 1;
                        this.x = 0;
                        this.y = 0;
                        this.lineX = 0;
                        this.lineY = 0;
                        this.charSpacing = 0;
                        this.wordSpacing = 0;
                        this.textHScale = 1;
                        this.textRise = 0;
                        this.fillColor = e.fillColor;
                        this.strokeColor = "#000000";
                        this.fillAlpha = 1;
                        this.strokeAlpha = 1;
                        this.lineWidth = 1;
                        this.lineJoin = "";
                        this.lineCap = "";
                        this.miterLimit = 0;
                        this.dashArray = [];
                        this.dashPhase = 0;
                        this.dependencies = [];
                        this.activeClipUrl = null;
                        this.clipGroup = null;
                        this.maskId = ""
                    }

                    clone() {
                        return Object.create(this)
                    }

                    setCurrentPoint(e, t) {
                        this.x = e;
                        this.y = t
                    }
                }

                function pf(e) {
                    if (Number.isInteger(e)) return e.toString();
                    const t = e.toFixed(10);
                    let r = t.length - 1;
                    if ("0" !== t[r]) return t;
                    do {
                        r--
                    } while ("0" === t[r]);
                    return t.substring(0, "." === t[r] ? r : r + 1)
                }

                function pm(e) {
                    if (0 === e[4] && 0 === e[5]) {
                        if (0 === e[1] && 0 === e[2]) return 1 === e[0] && 1 === e[3] ? "" : `scale(${pf(e[0])} ${pf(e[3])})`;
                        if (e[0] === e[3] && e[1] === -e[2]) {
                            return `rotate(${pf(180 * Math.acos(e[0]) / Math.PI)})`
                        }
                    } else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3]) return `translate(${pf(e[4])} ${pf(e[5])})`;
                    return `matrix(${pf(e[0])} ${pf(e[1])} ${pf(e[2])} ${pf(e[3])} ${pf(e[4])} ${pf(e[5])})`
                }

                let h = 0, d = 0, u = 0;
                t.SVGGraphics = SVGGraphics = class SVGGraphics {
                    constructor(e, t, r = !1) {
                        this.svgFactory = new s.DOMSVGFactory;
                        this.current = new SVGExtraState;
                        this.transformMatrix = n.IDENTITY_MATRIX;
                        this.transformStack = [];
                        this.extraStack = [];
                        this.commonObjs = e;
                        this.objs = t;
                        this.pendingClip = null;
                        this.pendingEOFill = !1;
                        this.embedFonts = !1;
                        this.embeddedFonts = Object.create(null);
                        this.cssStyle = null;
                        this.forceDataSchema = !!r;
                        this._operatorIdMapping = [];
                        for (const e in n.OPS) this._operatorIdMapping[n.OPS[e]] = e
                    }

                    save() {
                        this.transformStack.push(this.transformMatrix);
                        const e = this.current;
                        this.extraStack.push(e);
                        this.current = e.clone()
                    }

                    restore() {
                        this.transformMatrix = this.transformStack.pop();
                        this.current = this.extraStack.pop();
                        this.pendingClip = null;
                        this.tgrp = null
                    }

                    group(e) {
                        this.save();
                        this.executeOpTree(e);
                        this.restore()
                    }

                    loadDependencies(e) {
                        const t = e.fnArray, r = e.argsArray;
                        for (let e = 0, s = t.length; e < s; e++) if (t[e] === n.OPS.dependency) for (const t of r[e]) {
                            const e = t.startsWith("g_") ? this.commonObjs : this.objs, r = new Promise((r => {
                                e.get(t, r)
                            }));
                            this.current.dependencies.push(r)
                        }
                        return Promise.all(this.current.dependencies)
                    }

                    transform(e, t, r, s, i, a) {
                        const o = [e, t, r, s, i, a];
                        this.transformMatrix = n.Util.transform(this.transformMatrix, o);
                        this.tgrp = null
                    }

                    getSVG(e, t) {
                        this.viewport = t;
                        const r = this._initialize(t);
                        return this.loadDependencies(e).then((() => {
                            this.transformMatrix = n.IDENTITY_MATRIX;
                            this.executeOpTree(this.convertOpList(e));
                            return r
                        }))
                    }

                    convertOpList(e) {
                        const t = this._operatorIdMapping, r = e.argsArray, n = e.fnArray, s = [];
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            s.push({fnId: i, fn: t[i], args: r[e]})
                        }
                        return function opListToTree(e) {
                            let t = [];
                            const r = [];
                            for (const n of e) if ("save" !== n.fn) "restore" === n.fn ? t = r.pop() : t.push(n); else {
                                t.push({fnId: 92, fn: "group", items: []});
                                r.push(t);
                                t = t[t.length - 1].items
                            }
                            return t
                        }(s)
                    }

                    executeOpTree(e) {
                        for (const t of e) {
                            const e = t.fn, r = t.fnId, s = t.args;
                            switch (0 | r) {
                                case n.OPS.beginText:
                                    this.beginText();
                                    break;
                                case n.OPS.dependency:
                                    break;
                                case n.OPS.setLeading:
                                    this.setLeading(s);
                                    break;
                                case n.OPS.setLeadingMoveText:
                                    this.setLeadingMoveText(s[0], s[1]);
                                    break;
                                case n.OPS.setFont:
                                    this.setFont(s);
                                    break;
                                case n.OPS.showText:
                                case n.OPS.showSpacedText:
                                    this.showText(s[0]);
                                    break;
                                case n.OPS.endText:
                                    this.endText();
                                    break;
                                case n.OPS.moveText:
                                    this.moveText(s[0], s[1]);
                                    break;
                                case n.OPS.setCharSpacing:
                                    this.setCharSpacing(s[0]);
                                    break;
                                case n.OPS.setWordSpacing:
                                    this.setWordSpacing(s[0]);
                                    break;
                                case n.OPS.setHScale:
                                    this.setHScale(s[0]);
                                    break;
                                case n.OPS.setTextMatrix:
                                    this.setTextMatrix(s[0], s[1], s[2], s[3], s[4], s[5]);
                                    break;
                                case n.OPS.setTextRise:
                                    this.setTextRise(s[0]);
                                    break;
                                case n.OPS.setTextRenderingMode:
                                    this.setTextRenderingMode(s[0]);
                                    break;
                                case n.OPS.setLineWidth:
                                    this.setLineWidth(s[0]);
                                    break;
                                case n.OPS.setLineJoin:
                                    this.setLineJoin(s[0]);
                                    break;
                                case n.OPS.setLineCap:
                                    this.setLineCap(s[0]);
                                    break;
                                case n.OPS.setMiterLimit:
                                    this.setMiterLimit(s[0]);
                                    break;
                                case n.OPS.setFillRGBColor:
                                    this.setFillRGBColor(s[0], s[1], s[2]);
                                    break;
                                case n.OPS.setStrokeRGBColor:
                                    this.setStrokeRGBColor(s[0], s[1], s[2]);
                                    break;
                                case n.OPS.setStrokeColorN:
                                    this.setStrokeColorN(s);
                                    break;
                                case n.OPS.setFillColorN:
                                    this.setFillColorN(s);
                                    break;
                                case n.OPS.shadingFill:
                                    this.shadingFill(s[0]);
                                    break;
                                case n.OPS.setDash:
                                    this.setDash(s[0], s[1]);
                                    break;
                                case n.OPS.setRenderingIntent:
                                    this.setRenderingIntent(s[0]);
                                    break;
                                case n.OPS.setFlatness:
                                    this.setFlatness(s[0]);
                                    break;
                                case n.OPS.setGState:
                                    this.setGState(s[0]);
                                    break;
                                case n.OPS.fill:
                                    this.fill();
                                    break;
                                case n.OPS.eoFill:
                                    this.eoFill();
                                    break;
                                case n.OPS.stroke:
                                    this.stroke();
                                    break;
                                case n.OPS.fillStroke:
                                    this.fillStroke();
                                    break;
                                case n.OPS.eoFillStroke:
                                    this.eoFillStroke();
                                    break;
                                case n.OPS.clip:
                                    this.clip("nonzero");
                                    break;
                                case n.OPS.eoClip:
                                    this.clip("evenodd");
                                    break;
                                case n.OPS.paintSolidColorImageMask:
                                    this.paintSolidColorImageMask();
                                    break;
                                case n.OPS.paintImageXObject:
                                    this.paintImageXObject(s[0]);
                                    break;
                                case n.OPS.paintInlineImageXObject:
                                    this.paintInlineImageXObject(s[0]);
                                    break;
                                case n.OPS.paintImageMaskXObject:
                                    this.paintImageMaskXObject(s[0]);
                                    break;
                                case n.OPS.paintFormXObjectBegin:
                                    this.paintFormXObjectBegin(s[0], s[1]);
                                    break;
                                case n.OPS.paintFormXObjectEnd:
                                    this.paintFormXObjectEnd();
                                    break;
                                case n.OPS.closePath:
                                    this.closePath();
                                    break;
                                case n.OPS.closeStroke:
                                    this.closeStroke();
                                    break;
                                case n.OPS.closeFillStroke:
                                    this.closeFillStroke();
                                    break;
                                case n.OPS.closeEOFillStroke:
                                    this.closeEOFillStroke();
                                    break;
                                case n.OPS.nextLine:
                                    this.nextLine();
                                    break;
                                case n.OPS.transform:
                                    this.transform(s[0], s[1], s[2], s[3], s[4], s[5]);
                                    break;
                                case n.OPS.constructPath:
                                    this.constructPath(s[0], s[1]);
                                    break;
                                case n.OPS.endPath:
                                    this.endPath();
                                    break;
                                case 92:
                                    this.group(t.items);
                                    break;
                                default:
                                    (0, n.warn)(`Unimplemented operator ${e}`)
                            }
                        }
                    }

                    setWordSpacing(e) {
                        this.current.wordSpacing = e
                    }

                    setCharSpacing(e) {
                        this.current.charSpacing = e
                    }

                    nextLine() {
                        this.moveText(0, this.current.leading)
                    }

                    setTextMatrix(e, t, r, n, s, i) {
                        const a = this.current;
                        a.textMatrix = a.lineMatrix = [e, t, r, n, s, i];
                        a.textMatrixScale = Math.sqrt(e * e + t * t);
                        a.x = a.lineX = 0;
                        a.y = a.lineY = 0;
                        a.xcoords = [];
                        a.ycoords = [];
                        a.tspan = this.svgFactory.createElement("svg:tspan");
                        a.tspan.setAttributeNS(null, "font-family", a.fontFamily);
                        a.tspan.setAttributeNS(null, "font-size", `${pf(a.fontSize)}px`);
                        a.tspan.setAttributeNS(null, "y", pf(-a.y));
                        a.txtElement = this.svgFactory.createElement("svg:text");
                        a.txtElement.appendChild(a.tspan)
                    }

                    beginText() {
                        const e = this.current;
                        e.x = e.lineX = 0;
                        e.y = e.lineY = 0;
                        e.textMatrix = n.IDENTITY_MATRIX;
                        e.lineMatrix = n.IDENTITY_MATRIX;
                        e.textMatrixScale = 1;
                        e.tspan = this.svgFactory.createElement("svg:tspan");
                        e.txtElement = this.svgFactory.createElement("svg:text");
                        e.txtgrp = this.svgFactory.createElement("svg:g");
                        e.xcoords = [];
                        e.ycoords = []
                    }

                    moveText(e, t) {
                        const r = this.current;
                        r.x = r.lineX += e;
                        r.y = r.lineY += t;
                        r.xcoords = [];
                        r.ycoords = [];
                        r.tspan = this.svgFactory.createElement("svg:tspan");
                        r.tspan.setAttributeNS(null, "font-family", r.fontFamily);
                        r.tspan.setAttributeNS(null, "font-size", `${pf(r.fontSize)}px`);
                        r.tspan.setAttributeNS(null, "y", pf(-r.y))
                    }

                    showText(t) {
                        const s = this.current, i = s.font, a = s.fontSize;
                        if (0 === a) return;
                        const o = s.fontSizeScale, l = s.charSpacing, c = s.wordSpacing, h = s.fontDirection,
                            d = s.textHScale * h, u = i.vertical, p = u ? 1 : -1, f = i.defaultVMetrics,
                            g = a * s.fontMatrix[0];
                        let m = 0;
                        for (const e of t) {
                            if (null === e) {
                                m += h * c;
                                continue
                            }
                            if ((0, n.isNum)(e)) {
                                m += p * e * a / 1e3;
                                continue
                            }
                            const t = (e.isSpace ? c : 0) + l, r = e.fontChar;
                            let d, A, _, b = e.width;
                            if (u) {
                                let t;
                                const r = e.vmetric || f;
                                t = e.vmetric ? r[1] : .5 * b;
                                t = -t * g;
                                const n = r[2] * g;
                                b = r ? -r[0] : b;
                                d = t / o;
                                A = (m + n) / o
                            } else {
                                d = m / o;
                                A = 0
                            }
                            if (e.isInFont || i.missingFile) {
                                s.xcoords.push(s.x + d);
                                u && s.ycoords.push(-s.y + A);
                                s.tspan.textContent += r
                            }
                            _ = u ? b * g - t * h : b * g + t * h;
                            m += _
                        }
                        s.tspan.setAttributeNS(null, "x", s.xcoords.map(pf).join(" "));
                        u ? s.tspan.setAttributeNS(null, "y", s.ycoords.map(pf).join(" ")) : s.tspan.setAttributeNS(null, "y", pf(-s.y));
                        u ? s.y -= m : s.x += m * d;
                        s.tspan.setAttributeNS(null, "font-family", s.fontFamily);
                        s.tspan.setAttributeNS(null, "font-size", `${pf(s.fontSize)}px`);
                        s.fontStyle !== e.fontStyle && s.tspan.setAttributeNS(null, "font-style", s.fontStyle);
                        s.fontWeight !== e.fontWeight && s.tspan.setAttributeNS(null, "font-weight", s.fontWeight);
                        const A = s.textRenderingMode & n.TextRenderingMode.FILL_STROKE_MASK;
                        if (A === n.TextRenderingMode.FILL || A === n.TextRenderingMode.FILL_STROKE) {
                            s.fillColor !== e.fillColor && s.tspan.setAttributeNS(null, "fill", s.fillColor);
                            s.fillAlpha < 1 && s.tspan.setAttributeNS(null, "fill-opacity", s.fillAlpha)
                        } else s.textRenderingMode === n.TextRenderingMode.ADD_TO_PATH ? s.tspan.setAttributeNS(null, "fill", "transparent") : s.tspan.setAttributeNS(null, "fill", "none");
                        if (A === n.TextRenderingMode.STROKE || A === n.TextRenderingMode.FILL_STROKE) {
                            const e = 1 / (s.textMatrixScale || 1);
                            this._setStrokeAttributes(s.tspan, e)
                        }
                        let _ = s.textMatrix;
                        if (0 !== s.textRise) {
                            _ = _.slice();
                            _[5] += s.textRise
                        }
                        s.txtElement.setAttributeNS(null, "transform", `${pm(_)} scale(${pf(d)}, -1)`);
                        s.txtElement.setAttributeNS(r, "xml:space", "preserve");
                        s.txtElement.appendChild(s.tspan);
                        s.txtgrp.appendChild(s.txtElement);
                        this._ensureTransformGroup().appendChild(s.txtElement)
                    }

                    setLeadingMoveText(e, t) {
                        this.setLeading(-t);
                        this.moveText(e, t)
                    }

                    addFontStyle(e) {
                        if (!e.data) throw new Error('addFontStyle: No font data available, ensure that the "fontExtraProperties" API parameter is set.');
                        if (!this.cssStyle) {
                            this.cssStyle = this.svgFactory.createElement("svg:style");
                            this.cssStyle.setAttributeNS(null, "type", "text/css");
                            this.defs.appendChild(this.cssStyle)
                        }
                        const t = (0, n.createObjectURL)(e.data, e.mimetype, this.forceDataSchema);
                        this.cssStyle.textContent += `@font-face { font-family: "${e.loadedName}"; src: url(${t}); }\n`
                    }

                    setFont(e) {
                        const t = this.current, r = this.commonObjs.get(e[0]);
                        let s = e[1];
                        t.font = r;
                        if (this.embedFonts && !r.missingFile && !this.embeddedFonts[r.loadedName]) {
                            this.addFontStyle(r);
                            this.embeddedFonts[r.loadedName] = r
                        }
                        t.fontMatrix = r.fontMatrix || n.FONT_IDENTITY_MATRIX;
                        let i = "normal";
                        r.black ? i = "900" : r.bold && (i = "bold");
                        const a = r.italic ? "italic" : "normal";
                        if (s < 0) {
                            s = -s;
                            t.fontDirection = -1
                        } else t.fontDirection = 1;
                        t.fontSize = s;
                        t.fontFamily = r.loadedName;
                        t.fontWeight = i;
                        t.fontStyle = a;
                        t.tspan = this.svgFactory.createElement("svg:tspan");
                        t.tspan.setAttributeNS(null, "y", pf(-t.y));
                        t.xcoords = [];
                        t.ycoords = []
                    }

                    endText() {
                        const e = this.current;
                        if (e.textRenderingMode & n.TextRenderingMode.ADD_TO_PATH_FLAG && e.txtElement?.hasChildNodes()) {
                            e.element = e.txtElement;
                            this.clip("nonzero");
                            this.endPath()
                        }
                    }

                    setLineWidth(e) {
                        e > 0 && (this.current.lineWidth = e)
                    }

                    setLineCap(e) {
                        this.current.lineCap = o[e]
                    }

                    setLineJoin(e) {
                        this.current.lineJoin = l[e]
                    }

                    setMiterLimit(e) {
                        this.current.miterLimit = e
                    }

                    setStrokeAlpha(e) {
                        this.current.strokeAlpha = e
                    }

                    setStrokeRGBColor(e, t, r) {
                        this.current.strokeColor = n.Util.makeHexColor(e, t, r)
                    }

                    setFillAlpha(e) {
                        this.current.fillAlpha = e
                    }

                    setFillRGBColor(e, t, r) {
                        this.current.fillColor = n.Util.makeHexColor(e, t, r);
                        this.current.tspan = this.svgFactory.createElement("svg:tspan");
                        this.current.xcoords = [];
                        this.current.ycoords = []
                    }

                    setStrokeColorN(e) {
                        this.current.strokeColor = this._makeColorN_Pattern(e)
                    }

                    setFillColorN(e) {
                        this.current.fillColor = this._makeColorN_Pattern(e)
                    }

                    shadingFill(e) {
                        const t = this.viewport.width, r = this.viewport.height,
                            s = n.Util.inverseTransform(this.transformMatrix), i = n.Util.applyTransform([0, 0], s),
                            a = n.Util.applyTransform([0, r], s), o = n.Util.applyTransform([t, 0], s),
                            l = n.Util.applyTransform([t, r], s), c = Math.min(i[0], a[0], o[0], l[0]),
                            h = Math.min(i[1], a[1], o[1], l[1]), d = Math.max(i[0], a[0], o[0], l[0]),
                            u = Math.max(i[1], a[1], o[1], l[1]), p = this.svgFactory.createElement("svg:rect");
                        p.setAttributeNS(null, "x", c);
                        p.setAttributeNS(null, "y", h);
                        p.setAttributeNS(null, "width", d - c);
                        p.setAttributeNS(null, "height", u - h);
                        p.setAttributeNS(null, "fill", this._makeShadingPattern(e));
                        this.current.fillAlpha < 1 && p.setAttributeNS(null, "fill-opacity", this.current.fillAlpha);
                        this._ensureTransformGroup().appendChild(p)
                    }

                    _makeColorN_Pattern(e) {
                        return "TilingPattern" === e[0] ? this._makeTilingPattern(e) : this._makeShadingPattern(e)
                    }

                    _makeTilingPattern(e) {
                        const t = e[1], r = e[2], s = e[3] || n.IDENTITY_MATRIX, [i, a, o, l] = e[4], c = e[5],
                            h = e[6], d = e[7],
                            p = "shading" + u++, [f, g] = n.Util.applyTransform([i, a], s), [m, A] = n.Util.applyTransform([o, l], s), [_, b] = n.Util.singularValueDecompose2dScale(s),
                            y = c * _, S = h * b, C = this.svgFactory.createElement("svg:pattern");
                        C.setAttributeNS(null, "id", p);
                        C.setAttributeNS(null, "patternUnits", "userSpaceOnUse");
                        C.setAttributeNS(null, "width", y);
                        C.setAttributeNS(null, "height", S);
                        C.setAttributeNS(null, "x", `${f}`);
                        C.setAttributeNS(null, "y", `${g}`);
                        const v = this.svg, x = this.transformMatrix, k = this.current.fillColor,
                            P = this.current.strokeColor, R = this.svgFactory.create(m - f, A - g);
                        this.svg = R;
                        this.transformMatrix = s;
                        if (2 === d) {
                            const e = n.Util.makeHexColor(...t);
                            this.current.fillColor = e;
                            this.current.strokeColor = e
                        }
                        this.executeOpTree(this.convertOpList(r));
                        this.svg = v;
                        this.transformMatrix = x;
                        this.current.fillColor = k;
                        this.current.strokeColor = P;
                        C.appendChild(R.childNodes[0]);
                        this.defs.appendChild(C);
                        return `url(#${p})`
                    }

                    _makeShadingPattern(e) {
                        switch (e[0]) {
                            case"RadialAxial":
                                const t = "shading" + u++, r = e[3];
                                let s;
                                switch (e[1]) {
                                    case"axial":
                                        const r = e[4], n = e[5];
                                        s = this.svgFactory.createElement("svg:linearGradient");
                                        s.setAttributeNS(null, "id", t);
                                        s.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                                        s.setAttributeNS(null, "x1", r[0]);
                                        s.setAttributeNS(null, "y1", r[1]);
                                        s.setAttributeNS(null, "x2", n[0]);
                                        s.setAttributeNS(null, "y2", n[1]);
                                        break;
                                    case"radial":
                                        const i = e[4], a = e[5], o = e[6], l = e[7];
                                        s = this.svgFactory.createElement("svg:radialGradient");
                                        s.setAttributeNS(null, "id", t);
                                        s.setAttributeNS(null, "gradientUnits", "userSpaceOnUse");
                                        s.setAttributeNS(null, "cx", a[0]);
                                        s.setAttributeNS(null, "cy", a[1]);
                                        s.setAttributeNS(null, "r", l);
                                        s.setAttributeNS(null, "fx", i[0]);
                                        s.setAttributeNS(null, "fy", i[1]);
                                        s.setAttributeNS(null, "fr", o);
                                        break;
                                    default:
                                        throw new Error(`Unknown RadialAxial type: ${e[1]}`)
                                }
                                for (const e of r) {
                                    const t = this.svgFactory.createElement("svg:stop");
                                    t.setAttributeNS(null, "offset", e[0]);
                                    t.setAttributeNS(null, "stop-color", e[1]);
                                    s.appendChild(t)
                                }
                                this.defs.appendChild(s);
                                return `url(#${t})`;
                            case"Mesh":
                                (0, n.warn)("Unimplemented pattern Mesh");
                                return null;
                            case"Dummy":
                                return "hotpink";
                            default:
                                throw new Error(`Unknown IR type: ${e[0]}`)
                        }
                    }

                    setDash(e, t) {
                        this.current.dashArray = e;
                        this.current.dashPhase = t
                    }

                    constructPath(e, t) {
                        const r = this.current;
                        let s = r.x, i = r.y, a = [], o = 0;
                        for (const r of e) switch (0 | r) {
                            case n.OPS.rectangle:
                                s = t[o++];
                                i = t[o++];
                                const e = s + t[o++], r = i + t[o++];
                                a.push("M", pf(s), pf(i), "L", pf(e), pf(i), "L", pf(e), pf(r), "L", pf(s), pf(r), "Z");
                                break;
                            case n.OPS.moveTo:
                                s = t[o++];
                                i = t[o++];
                                a.push("M", pf(s), pf(i));
                                break;
                            case n.OPS.lineTo:
                                s = t[o++];
                                i = t[o++];
                                a.push("L", pf(s), pf(i));
                                break;
                            case n.OPS.curveTo:
                                s = t[o + 4];
                                i = t[o + 5];
                                a.push("C", pf(t[o]), pf(t[o + 1]), pf(t[o + 2]), pf(t[o + 3]), pf(s), pf(i));
                                o += 6;
                                break;
                            case n.OPS.curveTo2:
                                a.push("C", pf(s), pf(i), pf(t[o]), pf(t[o + 1]), pf(t[o + 2]), pf(t[o + 3]));
                                s = t[o + 2];
                                i = t[o + 3];
                                o += 4;
                                break;
                            case n.OPS.curveTo3:
                                s = t[o + 2];
                                i = t[o + 3];
                                a.push("C", pf(t[o]), pf(t[o + 1]), pf(s), pf(i), pf(s), pf(i));
                                o += 4;
                                break;
                            case n.OPS.closePath:
                                a.push("Z")
                        }
                        a = a.join(" ");
                        if (r.path && e.length > 0 && e[0] !== n.OPS.rectangle && e[0] !== n.OPS.moveTo) a = r.path.getAttributeNS(null, "d") + a; else {
                            r.path = this.svgFactory.createElement("svg:path");
                            this._ensureTransformGroup().appendChild(r.path)
                        }
                        r.path.setAttributeNS(null, "d", a);
                        r.path.setAttributeNS(null, "fill", "none");
                        r.element = r.path;
                        r.setCurrentPoint(s, i)
                    }

                    endPath() {
                        const e = this.current;
                        e.path = null;
                        if (!this.pendingClip) return;
                        if (!e.element) {
                            this.pendingClip = null;
                            return
                        }
                        const t = "clippath" + h++, r = this.svgFactory.createElement("svg:clipPath");
                        r.setAttributeNS(null, "id", t);
                        r.setAttributeNS(null, "transform", pm(this.transformMatrix));
                        const n = e.element.cloneNode(!0);
                        "evenodd" === this.pendingClip ? n.setAttributeNS(null, "clip-rule", "evenodd") : n.setAttributeNS(null, "clip-rule", "nonzero");
                        this.pendingClip = null;
                        r.appendChild(n);
                        this.defs.appendChild(r);
                        if (e.activeClipUrl) {
                            e.clipGroup = null;
                            this.extraStack.forEach((function (e) {
                                e.clipGroup = null
                            }));
                            r.setAttributeNS(null, "clip-path", e.activeClipUrl)
                        }
                        e.activeClipUrl = `url(#${t})`;
                        this.tgrp = null
                    }

                    clip(e) {
                        this.pendingClip = e
                    }

                    closePath() {
                        const e = this.current;
                        if (e.path) {
                            const t = `${e.path.getAttributeNS(null, "d")}Z`;
                            e.path.setAttributeNS(null, "d", t)
                        }
                    }

                    setLeading(e) {
                        this.current.leading = -e
                    }

                    setTextRise(e) {
                        this.current.textRise = e
                    }

                    setTextRenderingMode(e) {
                        this.current.textRenderingMode = e
                    }

                    setHScale(e) {
                        this.current.textHScale = e / 100
                    }

                    setRenderingIntent(e) {
                    }

                    setFlatness(e) {
                    }

                    setGState(e) {
                        for (const [t, r] of e) switch (t) {
                            case"LW":
                                this.setLineWidth(r);
                                break;
                            case"LC":
                                this.setLineCap(r);
                                break;
                            case"LJ":
                                this.setLineJoin(r);
                                break;
                            case"ML":
                                this.setMiterLimit(r);
                                break;
                            case"D":
                                this.setDash(r[0], r[1]);
                                break;
                            case"RI":
                                this.setRenderingIntent(r);
                                break;
                            case"FL":
                                this.setFlatness(r);
                                break;
                            case"Font":
                                this.setFont(r);
                                break;
                            case"CA":
                                this.setStrokeAlpha(r);
                                break;
                            case"ca":
                                this.setFillAlpha(r);
                                break;
                            default:
                                (0, n.warn)(`Unimplemented graphic state operator ${t}`)
                        }
                    }

                    fill() {
                        const e = this.current;
                        if (e.element) {
                            e.element.setAttributeNS(null, "fill", e.fillColor);
                            e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha);
                            this.endPath()
                        }
                    }

                    stroke() {
                        const e = this.current;
                        if (e.element) {
                            this._setStrokeAttributes(e.element);
                            e.element.setAttributeNS(null, "fill", "none");
                            this.endPath()
                        }
                    }

                    _setStrokeAttributes(e, t = 1) {
                        const r = this.current;
                        let n = r.dashArray;
                        1 !== t && n.length > 0 && (n = n.map((function (e) {
                            return t * e
                        })));
                        e.setAttributeNS(null, "stroke", r.strokeColor);
                        e.setAttributeNS(null, "stroke-opacity", r.strokeAlpha);
                        e.setAttributeNS(null, "stroke-miterlimit", pf(r.miterLimit));
                        e.setAttributeNS(null, "stroke-linecap", r.lineCap);
                        e.setAttributeNS(null, "stroke-linejoin", r.lineJoin);
                        e.setAttributeNS(null, "stroke-width", pf(t * r.lineWidth) + "px");
                        e.setAttributeNS(null, "stroke-dasharray", n.map(pf).join(" "));
                        e.setAttributeNS(null, "stroke-dashoffset", pf(t * r.dashPhase) + "px")
                    }

                    eoFill() {
                        this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                        this.fill()
                    }

                    fillStroke() {
                        this.stroke();
                        this.fill()
                    }

                    eoFillStroke() {
                        this.current.element && this.current.element.setAttributeNS(null, "fill-rule", "evenodd");
                        this.fillStroke()
                    }

                    closeStroke() {
                        this.closePath();
                        this.stroke()
                    }

                    closeFillStroke() {
                        this.closePath();
                        this.fillStroke()
                    }

                    closeEOFillStroke() {
                        this.closePath();
                        this.eoFillStroke()
                    }

                    paintSolidColorImageMask() {
                        const e = this.svgFactory.createElement("svg:rect");
                        e.setAttributeNS(null, "x", "0");
                        e.setAttributeNS(null, "y", "0");
                        e.setAttributeNS(null, "width", "1px");
                        e.setAttributeNS(null, "height", "1px");
                        e.setAttributeNS(null, "fill", this.current.fillColor);
                        this._ensureTransformGroup().appendChild(e)
                    }

                    paintImageXObject(e) {
                        const t = e.startsWith("g_") ? this.commonObjs.get(e) : this.objs.get(e);
                        t ? this.paintInlineImageXObject(t) : (0, n.warn)(`Dependent image with object ID ${e} is not ready yet`)
                    }

                    paintInlineImageXObject(e, t) {
                        const r = e.width, n = e.height, s = c(e, this.forceDataSchema, !!t),
                            i = this.svgFactory.createElement("svg:rect");
                        i.setAttributeNS(null, "x", "0");
                        i.setAttributeNS(null, "y", "0");
                        i.setAttributeNS(null, "width", pf(r));
                        i.setAttributeNS(null, "height", pf(n));
                        this.current.element = i;
                        this.clip("nonzero");
                        const o = this.svgFactory.createElement("svg:image");
                        o.setAttributeNS(a, "xlink:href", s);
                        o.setAttributeNS(null, "x", "0");
                        o.setAttributeNS(null, "y", pf(-n));
                        o.setAttributeNS(null, "width", pf(r) + "px");
                        o.setAttributeNS(null, "height", pf(n) + "px");
                        o.setAttributeNS(null, "transform", `scale(${pf(1 / r)} ${pf(-1 / n)})`);
                        t ? t.appendChild(o) : this._ensureTransformGroup().appendChild(o)
                    }

                    paintImageMaskXObject(e) {
                        const t = this.current, r = e.width, n = e.height, s = t.fillColor;
                        t.maskId = "mask" + d++;
                        const i = this.svgFactory.createElement("svg:mask");
                        i.setAttributeNS(null, "id", t.maskId);
                        const a = this.svgFactory.createElement("svg:rect");
                        a.setAttributeNS(null, "x", "0");
                        a.setAttributeNS(null, "y", "0");
                        a.setAttributeNS(null, "width", pf(r));
                        a.setAttributeNS(null, "height", pf(n));
                        a.setAttributeNS(null, "fill", s);
                        a.setAttributeNS(null, "mask", `url(#${t.maskId})`);
                        this.defs.appendChild(i);
                        this._ensureTransformGroup().appendChild(a);
                        this.paintInlineImageXObject(e, i)
                    }

                    paintFormXObjectBegin(e, t) {
                        Array.isArray(e) && 6 === e.length && this.transform(e[0], e[1], e[2], e[3], e[4], e[5]);
                        if (t) {
                            const e = t[2] - t[0], r = t[3] - t[1], n = this.svgFactory.createElement("svg:rect");
                            n.setAttributeNS(null, "x", t[0]);
                            n.setAttributeNS(null, "y", t[1]);
                            n.setAttributeNS(null, "width", pf(e));
                            n.setAttributeNS(null, "height", pf(r));
                            this.current.element = n;
                            this.clip("nonzero");
                            this.endPath()
                        }
                    }

                    paintFormXObjectEnd() {
                    }

                    _initialize(e) {
                        const t = this.svgFactory.create(e.width, e.height),
                            r = this.svgFactory.createElement("svg:defs");
                        t.appendChild(r);
                        this.defs = r;
                        const n = this.svgFactory.createElement("svg:g");
                        n.setAttributeNS(null, "transform", pm(e.transform));
                        t.appendChild(n);
                        this.svg = n;
                        return t
                    }

                    _ensureClipGroup() {
                        if (!this.current.clipGroup) {
                            const e = this.svgFactory.createElement("svg:g");
                            e.setAttributeNS(null, "clip-path", this.current.activeClipUrl);
                            this.svg.appendChild(e);
                            this.current.clipGroup = e
                        }
                        return this.current.clipGroup
                    }

                    _ensureTransformGroup() {
                        if (!this.tgrp) {
                            this.tgrp = this.svgFactory.createElement("svg:g");
                            this.tgrp.setAttributeNS(null, "transform", pm(this.transformMatrix));
                            this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)
                        }
                        return this.tgrp
                    }
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.PDFNodeStream = void 0;
            var n = r(2), s = r(24);
            const i = require("fs"), a = require("http"), o = require("https"), l = require("url"),
                c = /^file:\/\/\/[a-zA-Z]:\//;
            t.PDFNodeStream = class PDFNodeStream {
                constructor(e) {
                    this.source = e;
                    this.url = function parseUrl(e) {
                        const t = l.parse(e);
                        if ("file:" === t.protocol || t.host) return t;
                        if (/^[a-z]:[/\\]/i.test(e)) return l.parse(`file:///${e}`);
                        t.host || (t.protocol = "file:");
                        return t
                    }(e.url);
                    this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol;
                    this.isFsUrl = "file:" === this.url.protocol;
                    this.httpHeaders = this.isHttp && e.httpHeaders || {};
                    this._fullRequestReader = null;
                    this._rangeRequestReaders = []
                }

                get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0
                }

                getFullReader() {
                    (0, n.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once.");
                    this._fullRequestReader = this.isFsUrl ? new PDFNodeStreamFsFullReader(this) : new PDFNodeStreamFullReader(this);
                    return this._fullRequestReader
                }

                getRangeReader(e, t) {
                    if (t <= this._progressiveDataLength) return null;
                    const r = this.isFsUrl ? new PDFNodeStreamFsRangeReader(this, e, t) : new PDFNodeStreamRangeReader(this, e, t);
                    this._rangeRequestReaders.push(r);
                    return r
                }

                cancelAllRequests(e) {
                    this._fullRequestReader && this._fullRequestReader.cancel(e);
                    this._rangeRequestReaders.slice(0).forEach((function (t) {
                        t.cancel(e)
                    }))
                }
            };

            class BaseFullReader {
                constructor(e) {
                    this._url = e.url;
                    this._done = !1;
                    this._storedError = null;
                    this.onProgress = null;
                    const t = e.source;
                    this._contentLength = t.length;
                    this._loaded = 0;
                    this._filename = null;
                    this._disableRange = t.disableRange || !1;
                    this._rangeChunkSize = t.rangeChunkSize;
                    this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
                    this._isStreamingSupported = !t.disableStream;
                    this._isRangeSupported = !t.disableRange;
                    this._readableStream = null;
                    this._readCapability = (0, n.createPromiseCapability)();
                    this._headersCapability = (0, n.createPromiseCapability)()
                }

                get headersReady() {
                    return this._headersCapability.promise
                }

                get filename() {
                    return this._filename
                }

                get contentLength() {
                    return this._contentLength
                }

                get isRangeSupported() {
                    return this._isRangeSupported
                }

                get isStreamingSupported() {
                    return this._isStreamingSupported
                }

                async read() {
                    await this._readCapability.promise;
                    if (this._done) return {value: void 0, done: !0};
                    if (this._storedError) throw this._storedError;
                    const e = this._readableStream.read();
                    if (null === e) {
                        this._readCapability = (0, n.createPromiseCapability)();
                        return this.read()
                    }
                    this._loaded += e.length;
                    this.onProgress && this.onProgress({loaded: this._loaded, total: this._contentLength});
                    return {value: new Uint8Array(e).buffer, done: !1}
                }

                cancel(e) {
                    this._readableStream ? this._readableStream.destroy(e) : this._error(e)
                }

                _error(e) {
                    this._storedError = e;
                    this._readCapability.resolve()
                }

                _setReadableStream(e) {
                    this._readableStream = e;
                    e.on("readable", (() => {
                        this._readCapability.resolve()
                    }));
                    e.on("end", (() => {
                        e.destroy();
                        this._done = !0;
                        this._readCapability.resolve()
                    }));
                    e.on("error", (e => {
                        this._error(e)
                    }));
                    !this._isStreamingSupported && this._isRangeSupported && this._error(new n.AbortException("streaming is disabled"));
                    this._storedError && this._readableStream.destroy(this._storedError)
                }
            }

            class BaseRangeReader {
                constructor(e) {
                    this._url = e.url;
                    this._done = !1;
                    this._storedError = null;
                    this.onProgress = null;
                    this._loaded = 0;
                    this._readableStream = null;
                    this._readCapability = (0, n.createPromiseCapability)();
                    const t = e.source;
                    this._isStreamingSupported = !t.disableStream
                }

                get isStreamingSupported() {
                    return this._isStreamingSupported
                }

                async read() {
                    await this._readCapability.promise;
                    if (this._done) return {value: void 0, done: !0};
                    if (this._storedError) throw this._storedError;
                    const e = this._readableStream.read();
                    if (null === e) {
                        this._readCapability = (0, n.createPromiseCapability)();
                        return this.read()
                    }
                    this._loaded += e.length;
                    this.onProgress && this.onProgress({loaded: this._loaded});
                    return {value: new Uint8Array(e).buffer, done: !1}
                }

                cancel(e) {
                    this._readableStream ? this._readableStream.destroy(e) : this._error(e)
                }

                _error(e) {
                    this._storedError = e;
                    this._readCapability.resolve()
                }

                _setReadableStream(e) {
                    this._readableStream = e;
                    e.on("readable", (() => {
                        this._readCapability.resolve()
                    }));
                    e.on("end", (() => {
                        e.destroy();
                        this._done = !0;
                        this._readCapability.resolve()
                    }));
                    e.on("error", (e => {
                        this._error(e)
                    }));
                    this._storedError && this._readableStream.destroy(this._storedError)
                }
            }

            function createRequestOptions(e, t) {
                return {
                    protocol: e.protocol,
                    auth: e.auth,
                    host: e.hostname,
                    port: e.port,
                    path: e.path,
                    method: "GET",
                    headers: t
                }
            }

            class PDFNodeStreamFullReader extends BaseFullReader {
                constructor(e) {
                    super(e);
                    const handleResponse = t => {
                        if (404 === t.statusCode) {
                            const e = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                            this._storedError = e;
                            this._headersCapability.reject(e);
                            return
                        }
                        this._headersCapability.resolve();
                        this._setReadableStream(t);
                        const getResponseHeader = e => this._readableStream.headers[e.toLowerCase()], {allowRangeRequests: r, suggestedLength: i} = (0, s.validateRangeRequestCapabilities)({
                            getResponseHeader: getResponseHeader,
                            isHttp: e.isHttp,
                            rangeChunkSize: this._rangeChunkSize,
                            disableRange: this._disableRange
                        });
                        this._isRangeSupported = r;
                        this._contentLength = i || this._contentLength;
                        this._filename = (0, s.extractFilenameFromHeader)(getResponseHeader)
                    };
                    this._request = null;
                    "http:" === this._url.protocol ? this._request = a.request(createRequestOptions(this._url, e.httpHeaders), handleResponse) : this._request = o.request(createRequestOptions(this._url, e.httpHeaders), handleResponse);
                    this._request.on("error", (e => {
                        this._storedError = e;
                        this._headersCapability.reject(e)
                    }));
                    this._request.end()
                }
            }

            class PDFNodeStreamRangeReader extends BaseRangeReader {
                constructor(e, t, r) {
                    super(e);
                    this._httpHeaders = {};
                    for (const t in e.httpHeaders) {
                        const r = e.httpHeaders[t];
                        void 0 !== r && (this._httpHeaders[t] = r)
                    }
                    this._httpHeaders.Range = `bytes=${t}-${r - 1}`;
                    const handleResponse = e => {
                        if (404 !== e.statusCode) this._setReadableStream(e); else {
                            const e = new n.MissingPDFException(`Missing PDF "${this._url}".`);
                            this._storedError = e
                        }
                    };
                    this._request = null;
                    "http:" === this._url.protocol ? this._request = a.request(createRequestOptions(this._url, this._httpHeaders), handleResponse) : this._request = o.request(createRequestOptions(this._url, this._httpHeaders), handleResponse);
                    this._request.on("error", (e => {
                        this._storedError = e
                    }));
                    this._request.end()
                }
            }

            class PDFNodeStreamFsFullReader extends BaseFullReader {
                constructor(e) {
                    super(e);
                    let t = decodeURIComponent(this._url.path);
                    c.test(this._url.href) && (t = t.replace(/^\//, ""));
                    i.lstat(t, ((e, r) => {
                        if (e) {
                            "ENOENT" === e.code && (e = new n.MissingPDFException(`Missing PDF "${t}".`));
                            this._storedError = e;
                            this._headersCapability.reject(e)
                        } else {
                            this._contentLength = r.size;
                            this._setReadableStream(i.createReadStream(t));
                            this._headersCapability.resolve()
                        }
                    }))
                }
            }

            class PDFNodeStreamFsRangeReader extends BaseRangeReader {
                constructor(e, t, r) {
                    super(e);
                    let n = decodeURIComponent(this._url.path);
                    c.test(this._url.href) && (n = n.replace(/^\//, ""));
                    this._setReadableStream(i.createReadStream(n, {start: t, end: r - 1}))
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.createResponseStatusError = function createResponseStatusError(e, t) {
                if (404 === e || 0 === e && t.startsWith("file:")) return new n.MissingPDFException('Missing PDF "' + t + '".');
                return new n.UnexpectedResponseException("Unexpected server response (" + e + ') while retrieving PDF "' + t + '".', e)
            };
            t.extractFilenameFromHeader = function extractFilenameFromHeader(e) {
                const t = e("Content-Disposition");
                if (t) {
                    let e = (0, s.getFilenameFromContentDispositionHeader)(t);
                    if (e.includes("%")) try {
                        e = decodeURIComponent(e)
                    } catch (e) {
                    }
                    if (/\.pdf$/i.test(e)) return e
                }
                return null
            };
            t.validateRangeRequestCapabilities = function validateRangeRequestCapabilities({getResponseHeader: e, isHttp: t, rangeChunkSize: r, disableRange: s}) {
                (0, n.assert)(r > 0, "Range chunk size must be larger than zero");
                const i = {allowRangeRequests: !1, suggestedLength: void 0}, a = parseInt(e("Content-Length"), 10);
                if (!Number.isInteger(a)) return i;
                i.suggestedLength = a;
                if (a <= 2 * r) return i;
                if (s || !t) return i;
                if ("bytes" !== e("Accept-Ranges")) return i;
                if ("identity" !== (e("Content-Encoding") || "identity")) return i;
                i.allowRangeRequests = !0;
                return i
            };
            t.validateResponseStatus = function validateResponseStatus(e) {
                return 200 === e || 206 === e
            };
            var n = r(2), s = r(25)
        }, (e, t) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.getFilenameFromContentDispositionHeader = function getFilenameFromContentDispositionHeader(e) {
                let t = !0, r = toParamRegExp("filename\\*", "i").exec(e);
                if (r) {
                    r = r[1];
                    let e = rfc2616unquote(r);
                    e = unescape(e);
                    e = rfc5987decode(e);
                    e = rfc2047decode(e);
                    return fixupEncoding(e)
                }
                r = function rfc2231getparam(e) {
                    const t = [];
                    let r;
                    const n = toParamRegExp("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
                    for (; null !== (r = n.exec(e));) {
                        let [, e, n, s] = r;
                        e = parseInt(e, 10);
                        if (e in t) {
                            if (0 === e) break
                        } else t[e] = [n, s]
                    }
                    const s = [];
                    for (let e = 0; e < t.length && e in t; ++e) {
                        let [r, n] = t[e];
                        n = rfc2616unquote(n);
                        if (r) {
                            n = unescape(n);
                            0 === e && (n = rfc5987decode(n))
                        }
                        s.push(n)
                    }
                    return s.join("")
                }(e);
                if (r) {
                    return fixupEncoding(rfc2047decode(r))
                }
                r = toParamRegExp("filename", "i").exec(e);
                if (r) {
                    r = r[1];
                    let e = rfc2616unquote(r);
                    e = rfc2047decode(e);
                    return fixupEncoding(e)
                }

                function toParamRegExp(e, t) {
                    return new RegExp("(?:^|;)\\s*" + e + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', t)
                }

                function textdecode(e, r) {
                    if (e) {
                        if (!/^[\x00-\xFF]+$/.test(r)) return r;
                        try {
                            const n = new TextDecoder(e, {fatal: !0}), s = Array.from(r, (function (e) {
                                return 255 & e.charCodeAt(0)
                            }));
                            r = n.decode(new Uint8Array(s));
                            t = !1
                        } catch (n) {
                            if (/^utf-?8$/i.test(e)) try {
                                r = decodeURIComponent(escape(r));
                                t = !1
                            } catch (e) {
                            }
                        }
                    }
                    return r
                }

                function fixupEncoding(e) {
                    if (t && /[\x80-\xff]/.test(e)) {
                        e = textdecode("utf-8", e);
                        t && (e = textdecode("iso-8859-1", e))
                    }
                    return e
                }

                function rfc2616unquote(e) {
                    if (e.startsWith('"')) {
                        const t = e.slice(1).split('\\"');
                        for (let e = 0; e < t.length; ++e) {
                            const r = t[e].indexOf('"');
                            if (-1 !== r) {
                                t[e] = t[e].slice(0, r);
                                t.length = e + 1
                            }
                            t[e] = t[e].replace(/\\(.)/g, "$1")
                        }
                        e = t.join('"')
                    }
                    return e
                }

                function rfc5987decode(e) {
                    const t = e.indexOf("'");
                    if (-1 === t) return e;
                    return textdecode(e.slice(0, t), e.slice(t + 1).replace(/^[^']*'/, ""))
                }

                function rfc2047decode(e) {
                    return !e.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(e) ? e : e.replace(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, (function (e, t, r, n) {
                        if ("q" === r || "Q" === r) return textdecode(t, n = (n = n.replace(/_/g, " ")).replace(/=([0-9a-fA-F]{2})/g, (function (e, t) {
                            return String.fromCharCode(parseInt(t, 16))
                        })));
                        try {
                            n = atob(n)
                        } catch (e) {
                        }
                        return textdecode(t, n)
                    }))
                }

                return ""
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.PDFNetworkStream = void 0;
            var n = r(2), s = r(24);

            class NetworkManager {
                constructor(e, t) {
                    this.url = e;
                    t = t || {};
                    this.isHttp = /^https?:/i.test(e);
                    this.httpHeaders = this.isHttp && t.httpHeaders || {};
                    this.withCredentials = t.withCredentials || !1;
                    this.getXhr = t.getXhr || function NetworkManager_getXhr() {
                        return new XMLHttpRequest
                    };
                    this.currXhrId = 0;
                    this.pendingRequests = Object.create(null)
                }

                requestRange(e, t, r) {
                    const n = {begin: e, end: t};
                    for (const e in r) n[e] = r[e];
                    return this.request(n)
                }

                requestFull(e) {
                    return this.request(e)
                }

                request(e) {
                    const t = this.getXhr(), r = this.currXhrId++, n = this.pendingRequests[r] = {xhr: t};
                    t.open("GET", this.url);
                    t.withCredentials = this.withCredentials;
                    for (const e in this.httpHeaders) {
                        const r = this.httpHeaders[e];
                        void 0 !== r && t.setRequestHeader(e, r)
                    }
                    if (this.isHttp && "begin" in e && "end" in e) {
                        t.setRequestHeader("Range", `bytes=${e.begin}-${e.end - 1}`);
                        n.expectedStatus = 206
                    } else n.expectedStatus = 200;
                    t.responseType = "arraybuffer";
                    e.onError && (t.onerror = function (r) {
                        e.onError(t.status)
                    });
                    t.onreadystatechange = this.onStateChange.bind(this, r);
                    t.onprogress = this.onProgress.bind(this, r);
                    n.onHeadersReceived = e.onHeadersReceived;
                    n.onDone = e.onDone;
                    n.onError = e.onError;
                    n.onProgress = e.onProgress;
                    t.send(null);
                    return r
                }

                onProgress(e, t) {
                    const r = this.pendingRequests[e];
                    r && r.onProgress && r.onProgress(t)
                }

                onStateChange(e, t) {
                    const r = this.pendingRequests[e];
                    if (!r) return;
                    const s = r.xhr;
                    if (s.readyState >= 2 && r.onHeadersReceived) {
                        r.onHeadersReceived();
                        delete r.onHeadersReceived
                    }
                    if (4 !== s.readyState) return;
                    if (!(e in this.pendingRequests)) return;
                    delete this.pendingRequests[e];
                    if (0 === s.status && this.isHttp) {
                        r.onError && r.onError(s.status);
                        return
                    }
                    const i = s.status || 200;
                    if (!(200 === i && 206 === r.expectedStatus) && i !== r.expectedStatus) {
                        r.onError && r.onError(s.status);
                        return
                    }
                    const a = function getArrayBuffer(e) {
                        const t = e.response;
                        return "string" != typeof t ? t : (0, n.stringToBytes)(t).buffer
                    }(s);
                    if (206 === i) {
                        const e = s.getResponseHeader("Content-Range"), t = /bytes (\d+)-(\d+)\/(\d+)/.exec(e);
                        r.onDone({begin: parseInt(t[1], 10), chunk: a})
                    } else a ? r.onDone({begin: 0, chunk: a}) : r.onError && r.onError(s.status)
                }

                getRequestXhr(e) {
                    return this.pendingRequests[e].xhr
                }

                isPendingRequest(e) {
                    return e in this.pendingRequests
                }

                abortRequest(e) {
                    const t = this.pendingRequests[e].xhr;
                    delete this.pendingRequests[e];
                    t.abort()
                }
            }

            t.PDFNetworkStream = class PDFNetworkStream {
                constructor(e) {
                    this._source = e;
                    this._manager = new NetworkManager(e.url, {
                        httpHeaders: e.httpHeaders,
                        withCredentials: e.withCredentials
                    });
                    this._rangeChunkSize = e.rangeChunkSize;
                    this._fullRequestReader = null;
                    this._rangeRequestReaders = []
                }

                _onRangeRequestReaderClosed(e) {
                    const t = this._rangeRequestReaders.indexOf(e);
                    t >= 0 && this._rangeRequestReaders.splice(t, 1)
                }

                getFullReader() {
                    (0, n.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once.");
                    this._fullRequestReader = new PDFNetworkStreamFullRequestReader(this._manager, this._source);
                    return this._fullRequestReader
                }

                getRangeReader(e, t) {
                    const r = new PDFNetworkStreamRangeRequestReader(this._manager, e, t);
                    r.onClosed = this._onRangeRequestReaderClosed.bind(this);
                    this._rangeRequestReaders.push(r);
                    return r
                }

                cancelAllRequests(e) {
                    this._fullRequestReader && this._fullRequestReader.cancel(e);
                    this._rangeRequestReaders.slice(0).forEach((function (t) {
                        t.cancel(e)
                    }))
                }
            };

            class PDFNetworkStreamFullRequestReader {
                constructor(e, t) {
                    this._manager = e;
                    const r = {
                        onHeadersReceived: this._onHeadersReceived.bind(this),
                        onDone: this._onDone.bind(this),
                        onError: this._onError.bind(this),
                        onProgress: this._onProgress.bind(this)
                    };
                    this._url = t.url;
                    this._fullRequestId = e.requestFull(r);
                    this._headersReceivedCapability = (0, n.createPromiseCapability)();
                    this._disableRange = t.disableRange || !1;
                    this._contentLength = t.length;
                    this._rangeChunkSize = t.rangeChunkSize;
                    this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
                    this._isStreamingSupported = !1;
                    this._isRangeSupported = !1;
                    this._cachedChunks = [];
                    this._requests = [];
                    this._done = !1;
                    this._storedError = void 0;
                    this._filename = null;
                    this.onProgress = null
                }

                _onHeadersReceived() {
                    const e = this._fullRequestId, t = this._manager.getRequestXhr(e),
                        getResponseHeader = e => t.getResponseHeader(e), {allowRangeRequests: r, suggestedLength: n} = (0, s.validateRangeRequestCapabilities)({
                            getResponseHeader: getResponseHeader,
                            isHttp: this._manager.isHttp,
                            rangeChunkSize: this._rangeChunkSize,
                            disableRange: this._disableRange
                        });
                    r && (this._isRangeSupported = !0);
                    this._contentLength = n || this._contentLength;
                    this._filename = (0, s.extractFilenameFromHeader)(getResponseHeader);
                    this._isRangeSupported && this._manager.abortRequest(e);
                    this._headersReceivedCapability.resolve()
                }

                _onDone(e) {
                    if (e) if (this._requests.length > 0) {
                        this._requests.shift().resolve({value: e.chunk, done: !1})
                    } else this._cachedChunks.push(e.chunk);
                    this._done = !0;
                    if (!(this._cachedChunks.length > 0)) {
                        this._requests.forEach((function (e) {
                            e.resolve({value: void 0, done: !0})
                        }));
                        this._requests = []
                    }
                }

                _onError(e) {
                    const t = this._url, r = (0, s.createResponseStatusError)(e, t);
                    this._storedError = r;
                    this._headersReceivedCapability.reject(r);
                    this._requests.forEach((function (e) {
                        e.reject(r)
                    }));
                    this._requests = [];
                    this._cachedChunks = []
                }

                _onProgress(e) {
                    this.onProgress && this.onProgress({
                        loaded: e.loaded,
                        total: e.lengthComputable ? e.total : this._contentLength
                    })
                }

                get filename() {
                    return this._filename
                }

                get isRangeSupported() {
                    return this._isRangeSupported
                }

                get isStreamingSupported() {
                    return this._isStreamingSupported
                }

                get contentLength() {
                    return this._contentLength
                }

                get headersReady() {
                    return this._headersReceivedCapability.promise
                }

                async read() {
                    if (this._storedError) throw this._storedError;
                    if (this._cachedChunks.length > 0) {
                        return {value: this._cachedChunks.shift(), done: !1}
                    }
                    if (this._done) return {value: void 0, done: !0};
                    const e = (0, n.createPromiseCapability)();
                    this._requests.push(e);
                    return e.promise
                }

                cancel(e) {
                    this._done = !0;
                    this._headersReceivedCapability.reject(e);
                    this._requests.forEach((function (e) {
                        e.resolve({value: void 0, done: !0})
                    }));
                    this._requests = [];
                    this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId);
                    this._fullRequestReader = null
                }
            }

            class PDFNetworkStreamRangeRequestReader {
                constructor(e, t, r) {
                    this._manager = e;
                    const n = {onDone: this._onDone.bind(this), onProgress: this._onProgress.bind(this)};
                    this._requestId = e.requestRange(t, r, n);
                    this._requests = [];
                    this._queuedChunk = null;
                    this._done = !1;
                    this.onProgress = null;
                    this.onClosed = null
                }

                _close() {
                    this.onClosed && this.onClosed(this)
                }

                _onDone(e) {
                    const t = e.chunk;
                    if (this._requests.length > 0) {
                        this._requests.shift().resolve({value: t, done: !1})
                    } else this._queuedChunk = t;
                    this._done = !0;
                    this._requests.forEach((function (e) {
                        e.resolve({value: void 0, done: !0})
                    }));
                    this._requests = [];
                    this._close()
                }

                _onProgress(e) {
                    !this.isStreamingSupported && this.onProgress && this.onProgress({loaded: e.loaded})
                }

                get isStreamingSupported() {
                    return !1
                }

                async read() {
                    if (null !== this._queuedChunk) {
                        const e = this._queuedChunk;
                        this._queuedChunk = null;
                        return {value: e, done: !1}
                    }
                    if (this._done) return {value: void 0, done: !0};
                    const e = (0, n.createPromiseCapability)();
                    this._requests.push(e);
                    return e.promise
                }

                cancel(e) {
                    this._done = !0;
                    this._requests.forEach((function (e) {
                        e.resolve({value: void 0, done: !0})
                    }));
                    this._requests = [];
                    this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId);
                    this._close()
                }
            }
        }, (e, t, r) => {
            Object.defineProperty(t, "__esModule", {value: !0});
            t.PDFFetchStream = void 0;
            var n = r(2), s = r(24);

            function createFetchOptions(e, t, r) {
                return {
                    method: "GET",
                    headers: e,
                    signal: r?.signal,
                    mode: "cors",
                    credentials: t ? "include" : "same-origin",
                    redirect: "follow"
                }
            }

            function createHeaders(e) {
                const t = new Headers;
                for (const r in e) {
                    const n = e[r];
                    void 0 !== n && t.append(r, n)
                }
                return t
            }

            t.PDFFetchStream = class PDFFetchStream {
                constructor(e) {
                    this.source = e;
                    this.isHttp = /^https?:/i.test(e.url);
                    this.httpHeaders = this.isHttp && e.httpHeaders || {};
                    this._fullRequestReader = null;
                    this._rangeRequestReaders = []
                }

                get _progressiveDataLength() {
                    return this._fullRequestReader?._loaded ?? 0
                }

                getFullReader() {
                    (0, n.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once.");
                    this._fullRequestReader = new PDFFetchStreamReader(this);
                    return this._fullRequestReader
                }

                getRangeReader(e, t) {
                    if (t <= this._progressiveDataLength) return null;
                    const r = new PDFFetchStreamRangeReader(this, e, t);
                    this._rangeRequestReaders.push(r);
                    return r
                }

                cancelAllRequests(e) {
                    this._fullRequestReader && this._fullRequestReader.cancel(e);
                    this._rangeRequestReaders.slice(0).forEach((function (t) {
                        t.cancel(e)
                    }))
                }
            };

            class PDFFetchStreamReader {
                constructor(e) {
                    this._stream = e;
                    this._reader = null;
                    this._loaded = 0;
                    this._filename = null;
                    const t = e.source;
                    this._withCredentials = t.withCredentials || !1;
                    this._contentLength = t.length;
                    this._headersCapability = (0, n.createPromiseCapability)();
                    this._disableRange = t.disableRange || !1;
                    this._rangeChunkSize = t.rangeChunkSize;
                    this._rangeChunkSize || this._disableRange || (this._disableRange = !0);
                    "undefined" != typeof AbortController && (this._abortController = new AbortController);
                    this._isStreamingSupported = !t.disableStream;
                    this._isRangeSupported = !t.disableRange;
                    this._headers = createHeaders(this._stream.httpHeaders);
                    const r = t.url;
                    fetch(r, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((e => {
                        if (!(0, s.validateResponseStatus)(e.status)) throw(0, s.createResponseStatusError)(e.status, r);
                        this._reader = e.body.getReader();
                        this._headersCapability.resolve();
                        const getResponseHeader = t => e.headers.get(t), {allowRangeRequests: t, suggestedLength: i} = (0, s.validateRangeRequestCapabilities)({
                            getResponseHeader: getResponseHeader,
                            isHttp: this._stream.isHttp,
                            rangeChunkSize: this._rangeChunkSize,
                            disableRange: this._disableRange
                        });
                        this._isRangeSupported = t;
                        this._contentLength = i || this._contentLength;
                        this._filename = (0, s.extractFilenameFromHeader)(getResponseHeader);
                        !this._isStreamingSupported && this._isRangeSupported && this.cancel(new n.AbortException("Streaming is disabled."))
                    })).catch(this._headersCapability.reject);
                    this.onProgress = null
                }

                get headersReady() {
                    return this._headersCapability.promise
                }

                get filename() {
                    return this._filename
                }

                get contentLength() {
                    return this._contentLength
                }

                get isRangeSupported() {
                    return this._isRangeSupported
                }

                get isStreamingSupported() {
                    return this._isStreamingSupported
                }

                async read() {
                    await this._headersCapability.promise;
                    const {value: e, done: t} = await this._reader.read();
                    if (t) return {value: e, done: t};
                    this._loaded += e.byteLength;
                    this.onProgress && this.onProgress({loaded: this._loaded, total: this._contentLength});
                    return {value: new Uint8Array(e).buffer, done: !1}
                }

                cancel(e) {
                    this._reader && this._reader.cancel(e);
                    this._abortController && this._abortController.abort()
                }
            }

            class PDFFetchStreamRangeReader {
                constructor(e, t, r) {
                    this._stream = e;
                    this._reader = null;
                    this._loaded = 0;
                    const i = e.source;
                    this._withCredentials = i.withCredentials || !1;
                    this._readCapability = (0, n.createPromiseCapability)();
                    this._isStreamingSupported = !i.disableStream;
                    "undefined" != typeof AbortController && (this._abortController = new AbortController);
                    this._headers = createHeaders(this._stream.httpHeaders);
                    this._headers.append("Range", `bytes=${t}-${r - 1}`);
                    const a = i.url;
                    fetch(a, createFetchOptions(this._headers, this._withCredentials, this._abortController)).then((e => {
                        if (!(0, s.validateResponseStatus)(e.status)) throw(0, s.createResponseStatusError)(e.status, a);
                        this._readCapability.resolve();
                        this._reader = e.body.getReader()
                    })).catch((e => {
                        if ("AbortError" !== e?.name) throw e
                    }));
                    this.onProgress = null
                }

                get isStreamingSupported() {
                    return this._isStreamingSupported
                }

                async read() {
                    await this._readCapability.promise;
                    const {value: e, done: t} = await this._reader.read();
                    if (t) return {value: e, done: t};
                    this._loaded += e.byteLength;
                    this.onProgress && this.onProgress({loaded: this._loaded});
                    return {value: new Uint8Array(e).buffer, done: !1}
                }

                cancel(e) {
                    this._reader && this._reader.cancel(e);
                    this._abortController && this._abortController.abort()
                }
            }
        }], __webpack_module_cache__ = {};

        function __w_pdfjs_require__(e) {
            if (__webpack_module_cache__[e]) return __webpack_module_cache__[e].exports;
            var t = __webpack_module_cache__[e] = {exports: {}};
            __webpack_modules__[e](t, t.exports, __w_pdfjs_require__);
            return t.exports
        }

        return __w_pdfjs_require__(0)
    })()
}));
