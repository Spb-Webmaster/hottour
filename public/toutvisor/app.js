function _createForOfIteratorHelper(t, e) {
    var i;
    if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
        if (Array.isArray(t) || (i = _unsupportedIterableToArray(t)) || e && t && "number" == typeof t.length) {
            i && (t = i);

            function s() {
            }

            var a = 0;
            return {
                s: s, n: function () {
                    return a >= t.length ? {done: !0} : {done: !1, value: t[a++]}
                }, e: function (t) {
                    throw t
                }, f: s
            }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    var n, o = !0, r = !1;
    return {
        s: function () {
            i = t[Symbol.iterator]()
        }, n: function () {
            var t = i.next();
            return o = t.done, t
        }, e: function (t) {
            r = !0, n = t
        }, f: function () {
            try {
                o || null == i.return || i.return()
            } finally {
                if (r) throw n
            }
        }
    }
}

function _unsupportedIterableToArray(t, e) {
    if (t) {
        if ("string" == typeof t) return _arrayLikeToArray(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return "Object" === i && t.constructor && (i = t.constructor.name), "Map" === i || "Set" === i ? Array.from(t) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? _arrayLikeToArray(t, e) : void 0
    }
}

function _arrayLikeToArray(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, s = new Array(e); i < e; i++) s[i] = t[i];
    return s
}

function _typeof(t) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t
    } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
}

function modalAfterClose() {
    $("body").css({overflow: "auto"})
}

!function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (c) {
    "use strict";
    var a, o = window.Slick || {};
    a = 0, (o = function (t, e) {
        var i, s = this;
        s.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: c(t),
            appendDots: c(t),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (t, e) {
                return c('<button type="button" />').text(e + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, s.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, c.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = c(t), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, i = c(t).data("slick") || {}, s.options = c.extend({}, s.defaults, e, i), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = c.proxy(s.autoPlay, s), s.autoPlayClear = c.proxy(s.autoPlayClear, s), s.autoPlayIterator = c.proxy(s.autoPlayIterator, s), s.changeSlide = c.proxy(s.changeSlide, s), s.clickHandler = c.proxy(s.clickHandler, s), s.selectHandler = c.proxy(s.selectHandler, s), s.setPosition = c.proxy(s.setPosition, s), s.swipeHandler = c.proxy(s.swipeHandler, s), s.dragHandler = c.proxy(s.dragHandler, s), s.keyHandler = c.proxy(s.keyHandler, s), s.instanceUid = a++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, o.prototype.addSlide = o.prototype.slickAdd = function (t, e, i) {
        var s = this;
        if ("boolean" == typeof e) i = e, e = null; else if (e < 0 || e >= s.slideCount) return !1;
        s.unload(), "number" == typeof e ? 0 === e && 0 === s.$slides.length ? c(t).appendTo(s.$slideTrack) : i ? c(t).insertBefore(s.$slides.eq(e)) : c(t).insertAfter(s.$slides.eq(e)) : !0 === i ? c(t).prependTo(s.$slideTrack) : c(t).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function (t, e) {
            c(e).attr("data-slick-index", t)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, o.prototype.animateHeight = function () {
        var t, e = this;
        1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (t = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.animate({height: t}, e.options.speed))
    }, o.prototype.animateSlide = function (t, e) {
        var i = {}, s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (t = -t), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({left: t}, s.options.speed, s.options.easing, e) : s.$slideTrack.animate({top: t}, s.options.speed, s.options.easing, e) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), c({animStart: s.currentLeft}).animate({animStart: t}, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === s.options.vertical ? i[s.animType] = "translate(" + t + "px, 0px)" : i[s.animType] = "translate(0px," + t + "px)", s.$slideTrack.css(i)
            },
            complete: function () {
                e && e.call()
            }
        })) : (s.applyTransition(), t = Math.ceil(t), !1 === s.options.vertical ? i[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : i[s.animType] = "translate3d(0px," + t + "px, 0px)", s.$slideTrack.css(i), e && setTimeout(function () {
            s.disableTransition(), e.call()
        }, s.options.speed))
    }, o.prototype.getNavTarget = function () {
        var t = this.options.asNavFor;
        return t && null !== t && (t = c(t).not(this.$slider)), t
    }, o.prototype.asNavFor = function (e) {
        var t = this.getNavTarget();
        null !== t && "object" === _typeof(t) && t.each(function () {
            var t = c(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, o.prototype.applyTransition = function (t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, o.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, o.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, o.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, o.prototype.buildArrows = function () {
        var t = this;
        !0 === t.options.arrows && (t.$prevArrow = c(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = c(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, o.prototype.buildDots = function () {
        var t, e, i = this;
        if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
            for (i.$slider.addClass("slick-dotted"), e = c("<ul />").addClass(i.options.dotsClass), t = 0; t <= i.getDotCount(); t += 1) e.append(c("<li />").append(i.options.customPaging.call(this, i, t)));
            i.$dots = e.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active")
        }
    }, o.prototype.buildOut = function () {
        var t = this;
        t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function (t, e) {
            c(e).attr("data-slick-index", t).data("originalStyling", c(e).attr("style") || "")
        }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? c('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), !0 !== t.options.centerMode && !0 !== t.options.swipeToSlide || (t.options.slidesToScroll = 1), c("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
    }, o.prototype.buildRows = function () {
        var t, e, i, s = this, a = document.createDocumentFragment(), n = s.$slider.children();
        if (0 < s.options.rows) {
            for (i = s.options.slidesPerRow * s.options.rows, e = Math.ceil(n.length / i), t = 0; t < e; t++) {
                for (var o = document.createElement("div"), r = 0; r < s.options.rows; r++) {
                    for (var l = document.createElement("div"), c = 0; c < s.options.slidesPerRow; c++) {
                        var h = t * i + (r * s.options.slidesPerRow + c);
                        n.get(h) && l.appendChild(n.get(h))
                    }
                    o.appendChild(l)
                }
                a.appendChild(o)
            }
            s.$slider.empty().append(a)
        }
    }, o.prototype.checkResponsive = function (t, e) {
        var i, s, a, n = this, o = !1, r = n.$slider.width(), l = window.innerWidth || c(window).width();
        if ("window" === n.respondTo ? a = l : "slider" === n.respondTo ? a = r : "min" === n.respondTo && (a = Math.min(l, r)), n.options.responsive && n.options.responsive.length && null !== n.options.responsive) {
            for (i in s = null, n.breakpoints) n.breakpoints.hasOwnProperty(i) && (!1 === n.originalSettings.mobileFirst ? a < n.breakpoints[i] && (s = n.breakpoints[i]) : a > n.breakpoints[i] && (s = n.breakpoints[i]));
            null !== s ? null !== n.activeBreakpoint && s === n.activeBreakpoint && !e || (n.activeBreakpoint = s, "unslick" === n.breakpointSettings[s] ? n.unslick(s) : (n.options = c.extend({}, n.originalSettings, n.breakpointSettings[s]), !0 === t && (n.currentSlide = n.options.initialSlide), n.refresh(t)), o = s) : null !== n.activeBreakpoint && (n.activeBreakpoint = null, n.options = n.originalSettings, !0 === t && (n.currentSlide = n.options.initialSlide), n.refresh(t), o = s), t || !1 === o || n.$slider.trigger("breakpoint", [n, o])
        }
    }, o.prototype.changeSlide = function (t, e) {
        var i, s, a = this, n = c(t.currentTarget);
        switch (n.is("a") && t.preventDefault(), n.is("li") || (n = n.closest("li")), i = a.slideCount % a.options.slidesToScroll != 0 ? 0 : (a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
            case"previous":
                s = 0 == i ? a.options.slidesToScroll : a.options.slidesToShow - i, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - s, !1, e);
                break;
            case"next":
                s = 0 == i ? a.options.slidesToScroll : i, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + s, !1, e);
                break;
            case"index":
                var o = 0 === t.data.index ? 0 : t.data.index || n.index() * a.options.slidesToScroll;
                a.slideHandler(a.checkNavigable(o), !1, e), n.children().trigger("focus");
                break;
            default:
                return
        }
    }, o.prototype.checkNavigable = function (t) {
        var e = this.getNavigableIndexes(), i = 0;
        if (t > e[e.length - 1]) t = e[e.length - 1]; else for (var s in e) {
            if (t < e[s]) {
                t = i;
                break
            }
            i = e[s]
        }
        return t
    }, o.prototype.cleanUpEvents = function () {
        var t = this;
        t.options.dots && null !== t.$dots && (c("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", c.proxy(t.interrupt, t, !0)).off("mouseleave.slick", c.proxy(t.interrupt, t, !1)), !0 === t.options.accessibility && t.$dots.off("keydown.slick", t.keyHandler)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler), t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), c(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().off("click.slick", t.selectHandler), c(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), c(window).off("resize.slick.slick-" + t.instanceUid, t.resize), c("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), c(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
    }, o.prototype.cleanUpSlideEvents = function () {
        var t = this;
        t.$list.off("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }, o.prototype.cleanUpRows = function () {
        var t;
        0 < this.options.rows && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
    }, o.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, o.prototype.destroy = function (t) {
        var e = this;
        e.autoPlayClear(), e.touchObject = {}, e.cleanUpEvents(), c(".slick-cloned", e.$slider).detach(), e.$dots && e.$dots.remove(), e.$prevArrow && e.$prevArrow.length && (e.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove()), e.$nextArrow && e.$nextArrow.length && (e.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove()), e.$slides && (e.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            c(this).attr("style", c(this).data("originalStyling"))
        }), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.detach(), e.$list.detach(), e.$slider.append(e.$slides)), e.cleanUpRows(), e.$slider.removeClass("slick-slider"), e.$slider.removeClass("slick-initialized"), e.$slider.removeClass("slick-dotted"), e.unslicked = !0, t || e.$slider.trigger("destroy", [e])
    }, o.prototype.disableTransition = function (t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }, o.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, o.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, o.prototype.filterSlides = o.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, o.prototype.focusHandler = function () {
        var i = this;
        i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
            t.stopImmediatePropagation();
            var e = c(this);
            setTimeout(function () {
                i.options.pauseOnFocus && (i.focussed = e.is(":focus"), i.autoPlay())
            }, 0)
        })
    }, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, o.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, s = 0;
        if (!0 === t.options.infinite) if (t.slideCount <= t.options.slidesToShow) ++s; else for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) s = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return s - 1
    }, o.prototype.getLeft = function (t) {
        var e, i, s, a, n = this, o = 0;
        return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, a = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? a = -1.5 : 1 === n.options.slidesToShow && (a = -2)), o = i * n.options.slidesToShow * a), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (o = t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, o = (t + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (o = n.slideOffset = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + o, !0 === n.options.variableWidth && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === n.options.centerMode && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (n.$list.width() - s.outerWidth()) / 2)), e
    }, o.prototype.getOption = o.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, o.prototype.getNavigableIndexes = function () {
        for (var t = this, e = 0, i = 0, s = [], a = !1 === t.options.infinite ? t.slideCount : (e = -1 * t.options.slidesToScroll, i = -1 * t.options.slidesToScroll, 2 * t.slideCount); e < a;) s.push(e), e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return s
    }, o.prototype.getSlick = function () {
        return this
    }, o.prototype.getSlideCount = function () {
        var i, s = this, a = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0;
        return !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (t, e) {
            if (e.offsetLeft - a + c(e).outerWidth() / 2 > -1 * s.swipeLeft) return i = e, !1
        }), Math.abs(c(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, o.prototype.goTo = o.prototype.slickGoTo = function (t, e) {
        this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, o.prototype.init = function (t) {
        var e = this;
        c(e.$slider).hasClass("slick-initialized") || (c(e.$slider).addClass("slick-initialized"), e.buildRows(), e.buildOut(), e.setProps(), e.startLoad(), e.loadSlider(), e.initializeEvents(), e.updateArrows(), e.updateDots(), e.checkResponsive(!0), e.focusHandler()), t && e.$slider.trigger("init", [e]), !0 === e.options.accessibility && e.initADA(), e.options.autoplay && (e.paused = !1, e.autoPlay())
    }, o.prototype.initADA = function () {
        var s = this, i = Math.ceil(s.slideCount / s.options.slidesToShow),
            a = s.getNavigableIndexes().filter(function (t) {
                return 0 <= t && t < s.slideCount
            });
        s.$slides.add(s.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== s.$dots && (s.$slides.not(s.$slideTrack.find(".slick-cloned")).each(function (t) {
            var e, i = a.indexOf(t);
            c(this).attr({
                role: "tabpanel",
                id: "slick-slide" + s.instanceUid + t,
                tabindex: -1
            }), -1 !== i && (e = "slick-slide-control" + s.instanceUid + i, c("#" + e).length && c(this).attr({"aria-describedby": e}))
        }), s.$dots.attr("role", "tablist").find("li").each(function (t) {
            var e = a[t];
            c(this).attr({role: "presentation"}), c(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + s.instanceUid + t,
                "aria-controls": "slick-slide" + s.instanceUid + e,
                "aria-label": t + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(s.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var t = s.currentSlide, e = t + s.options.slidesToShow; t < e; t++) s.options.focusOnChange ? s.$slides.eq(t).attr({tabindex: "0"}) : s.$slides.eq(t).removeAttr("tabindex");
        s.activateADA()
    }, o.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, o.prototype.initDotEvents = function () {
        var t = this;
        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && (c("li", t.$dots).on("click.slick", {message: "index"}, t.changeSlide), !0 === t.options.accessibility && t.$dots.on("keydown.slick", t.keyHandler)), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && t.slideCount > t.options.slidesToShow && c("li", t.$dots).on("mouseenter.slick", c.proxy(t.interrupt, t, !0)).on("mouseleave.slick", c.proxy(t.interrupt, t, !1))
    }, o.prototype.initSlideEvents = function () {
        var t = this;
        t.options.pauseOnHover && (t.$list.on("mouseenter.slick", c.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", c.proxy(t.interrupt, t, !1)))
    }, o.prototype.initializeEvents = function () {
        var t = this;
        t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {action: "start"}, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {action: "move"}, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {action: "end"}, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), c(document).on(t.visibilityChange, c.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), c(window).on("orientationchange.slick.slick-" + t.instanceUid, c.proxy(t.orientationChange, t)), c(window).on("resize.slick.slick-" + t.instanceUid, c.proxy(t.resize, t)), c("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), c(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), c(t.setPosition)
    }, o.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, o.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, o.prototype.lazyLoad = function () {
        var t, e, i, n = this;

        function s(t) {
            c("img[data-lazy]", t).each(function () {
                var t = c(this), e = c(this).attr("data-lazy"), i = c(this).attr("data-srcset"),
                    s = c(this).attr("data-sizes") || n.$slider.attr("data-sizes"), a = document.createElement("img");
                a.onload = function () {
                    t.animate({opacity: 0}, 100, function () {
                        i && (t.attr("srcset", i), s && t.attr("sizes", s)), t.attr("src", e).animate({opacity: 1}, 200, function () {
                            t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, t, e])
                    })
                }, a.onerror = function () {
                    t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, t, e])
                }, a.src = e
            })
        }

        if (!0 === n.options.centerMode ? i = !0 === n.options.infinite ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, i = Math.ceil(e + n.options.slidesToShow), !0 === n.options.fade && (0 < e && e--, i <= n.slideCount && i++)), t = n.$slider.find(".slick-slide").slice(e, i), "anticipated" === n.options.lazyLoad) for (var a = e - 1, o = i, r = n.$slider.find(".slick-slide"), l = 0; l < n.options.slidesToScroll; l++) a < 0 && (a = n.slideCount - 1), t = (t = t.add(r.eq(a))).add(r.eq(o)), a--, o++;
        s(t), n.slideCount <= n.options.slidesToShow ? s(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? s(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && s(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, o.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, o.prototype.next = o.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, o.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, o.prototype.pause = o.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, o.prototype.play = o.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, o.prototype.postSlide = function (t) {
        var e = this;
        e.unslicked || (e.$slider.trigger("afterChange", [e, t]), e.animating = !1, e.slideCount > e.options.slidesToShow && e.setPosition(), e.swipeLeft = null, e.options.autoplay && e.autoPlay(), !0 === e.options.accessibility && (e.initADA(), e.options.focusOnChange && c(e.$slides.get(e.currentSlide)).attr("tabindex", 0).focus()))
    }, o.prototype.prev = o.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, o.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, o.prototype.progressiveLazyLoad = function (t) {
        t = t || 1;
        var e, i, s, a, n, o = this, r = c("img[data-lazy]", o.$slider);
        r.length ? (e = r.first(), i = e.attr("data-lazy"), s = e.attr("data-srcset"), a = e.attr("data-sizes") || o.$slider.attr("data-sizes"), (n = document.createElement("img")).onload = function () {
            s && (e.attr("srcset", s), a && e.attr("sizes", a)), e.attr("src", i).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === o.options.adaptiveHeight && o.setPosition(), o.$slider.trigger("lazyLoaded", [o, e, i]), o.progressiveLazyLoad()
        }, n.onerror = function () {
            t < 3 ? setTimeout(function () {
                o.progressiveLazyLoad(t + 1)
            }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i]), o.progressiveLazyLoad())
        }, n.src = i) : o.$slider.trigger("allImagesLoaded", [o])
    }, o.prototype.refresh = function (t) {
        var e, i = this, s = i.slideCount - i.options.slidesToShow;
        !i.options.infinite && i.currentSlide > s && (i.currentSlide = s), i.slideCount <= i.options.slidesToShow && (i.currentSlide = 0), e = i.currentSlide, i.destroy(!0), c.extend(i, i.initials, {currentSlide: e}), i.init(), t || i.changeSlide({
            data: {
                message: "index",
                index: e
            }
        }, !1)
    }, o.prototype.registerBreakpoints = function () {
        var t, e, i, s = this, a = s.options.responsive || null;
        if ("array" === c.type(a) && a.length) {
            for (t in s.respondTo = s.options.respondTo || "window", a) if (i = s.breakpoints.length - 1, a.hasOwnProperty(t)) {
                for (e = a[t].breakpoint; 0 <= i;) s.breakpoints[i] && s.breakpoints[i] === e && s.breakpoints.splice(i, 1), i--;
                s.breakpoints.push(e), s.breakpointSettings[e] = a[t].settings
            }
            s.breakpoints.sort(function (t, e) {
                return s.options.mobileFirst ? t - e : e - t
            })
        }
    }, o.prototype.reinit = function () {
        var t = this;
        t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && c(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
    }, o.prototype.resize = function () {
        var t = this;
        c(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function () {
            t.windowWidth = c(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
        }, 50))
    }, o.prototype.removeSlide = o.prototype.slickRemove = function (t, e, i) {
        var s = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t, s.slideCount < 1 || t < 0 || t > s.slideCount - 1) return !1;
        s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
    }, o.prototype.setCSS = function (t) {
        var e, i, s = this, a = {};
        !0 === s.options.rtl && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", a[s.positionProp] = t, !1 === s.transformsEnabled || (!(a = {}) === s.cssTransitions ? a[s.animType] = "translate(" + e + ", " + i + ")" : a[s.animType] = "translate3d(" + e + ", " + i + ", 0px)"), s.$slideTrack.css(a)
    }, o.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, o.prototype.setFade = function () {
        var i, s = this;
        s.$slides.each(function (t, e) {
            i = s.slideWidth * t * -1, !0 === s.options.rtl ? c(e).css({
                position: "relative",
                right: i,
                top: 0,
                zIndex: s.options.zIndex - 2,
                opacity: 0
            }) : c(e).css({position: "relative", left: i, top: 0, zIndex: s.options.zIndex - 2, opacity: 0})
        }), s.$slides.eq(s.currentSlide).css({zIndex: s.options.zIndex - 1, opacity: 1})
    }, o.prototype.setHeight = function () {
        var t, e = this;
        1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical && (t = e.$slides.eq(e.currentSlide).outerHeight(!0), e.$list.css("height", t))
    }, o.prototype.setOption = o.prototype.slickSetOption = function () {
        var t, e, i, s, a, n = this, o = !1;
        if ("object" === c.type(arguments[0]) ? (i = arguments[0], o = arguments[1], a = "multiple") : "string" === c.type(arguments[0]) && (s = arguments[1], o = arguments[2], "responsive" === (i = arguments[0]) && "array" === c.type(arguments[1]) ? a = "responsive" : void 0 !== arguments[1] && (a = "single")), "single" === a) n.options[i] = s; else if ("multiple" === a) c.each(i, function (t, e) {
            n.options[t] = e
        }); else if ("responsive" === a) for (e in s) if ("array" !== c.type(n.options.responsive)) n.options.responsive = [s[e]]; else {
            for (t = n.options.responsive.length - 1; 0 <= t;) n.options.responsive[t].breakpoint === s[e].breakpoint && n.options.responsive.splice(t, 1), t--;
            n.options.responsive.push(s[e])
        }
        o && (n.unload(), n.reinit())
    }, o.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, o.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, o.prototype.setSlideClasses = function (t) {
        var e, i, s, a, n = this,
            o = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true");
        n.$slides.eq(t).addClass("slick-current"), !0 === n.options.centerMode ? (s = n.options.slidesToShow % 2 == 0 ? 1 : 0, a = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (a <= t && t <= n.slideCount - 1 - a ? n.$slides.slice(t - a + s, t + a + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = n.options.slidesToShow + t, o.slice(e - a + 1 + s, e + a + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? o.eq(o.length - 1 - n.options.slidesToShow).addClass("slick-center") : t === n.slideCount - 1 && o.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(t).addClass("slick-center")) : 0 <= t && t <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(t, t + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : o.length <= n.options.slidesToShow ? o.addClass("slick-active").attr("aria-hidden", "false") : (i = n.slideCount % n.options.slidesToShow, e = !0 === n.options.infinite ? n.options.slidesToShow + t : t, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options.slidesToShow ? o.slice(e - (n.options.slidesToShow - i), e + i).addClass("slick-active").attr("aria-hidden", "false") : o.slice(e, e + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, o.prototype.setupInfinite = function () {
        var t, e, i, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (e = null, s.slideCount > s.options.slidesToShow)) {
            for (i = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, t = s.slideCount; t > s.slideCount - i; --t) e = t - 1, c(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (t = 0; t < i + s.slideCount; t += 1) e = t, c(s.$slides[e]).clone(!0).attr("id", "").attr("data-slick-index", e + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                c(this).attr("id", "")
            })
        }
    }, o.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, o.prototype.selectHandler = function (t) {
        var e = c(t.target).is(".slick-slide") ? c(t.target) : c(t.target).parents(".slick-slide"),
            i = (i = parseInt(e.attr("data-slick-index"))) || 0;
        this.slideCount <= this.options.slidesToShow ? this.slideHandler(i, !1, !0) : this.slideHandler(i)
    }, o.prototype.slideHandler = function (t, e, i) {
        var s, a, n, o, r, l, c = this;
        if (e = e || !1, !(!0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === t)) if (!1 === e && c.asNavFor(t), s = t, r = c.getLeft(s), o = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? o : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(o, function () {
            c.postSlide(s)
        }) : c.postSlide(s)); else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (s = c.currentSlide, !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(o, function () {
            c.postSlide(s)
        }) : c.postSlide(s)); else {
            if (c.options.autoplay && clearInterval(c.autoPlayTimer), a = s < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + s : s >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : s - c.slideCount : s, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, a]), n = c.currentSlide, c.currentSlide = a, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(n), c.fadeSlide(a, function () {
                c.postSlide(a)
            })) : c.postSlide(a), void c.animateHeight();
            !0 !== i && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function () {
                c.postSlide(a)
            }) : c.postSlide(a)
        }
    }, o.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, o.prototype.swipeDirection = function () {
        var t = this, e = t.touchObject.startX - t.touchObject.curX, i = t.touchObject.startY - t.touchObject.curY,
            s = Math.atan2(i, e), a = Math.round(180 * s / Math.PI);
        return a < 0 && (a = 360 - Math.abs(a)), a <= 45 && 0 <= a || a <= 360 && 315 <= a ? !1 === t.options.rtl ? "left" : "right" : 135 <= a && a <= 225 ? !1 === t.options.rtl ? "right" : "left" : !0 === t.options.verticalSwiping ? 35 <= a && a <= 135 ? "down" : "up" : "vertical"
    }, o.prototype.swipeEnd = function (t) {
        var e, i, s = this;
        if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1;
        if (s.interrupted = !1, s.shouldClick = !(10 < s.touchObject.swipeLength), void 0 === s.touchObject.curX) return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
                case"left":
                case"down":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                    break;
                case"right":
                case"up":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, o.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case"start":
                e.swipeStart(t);
                break;
            case"move":
                e.swipeMove(t);
                break;
            case"end":
                e.swipeEnd(t)
        }
    }, o.prototype.swipeMove = function (t) {
        var e, i, s, a, n, o = this, r = void 0 !== t.originalEvent ? t.originalEvent.touches : null;
        return !(!o.dragging || o.scrolling || r && 1 !== r.length) && (e = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== r ? r[0].pageX : t.clientX, o.touchObject.curY = void 0 !== r ? r[0].pageY : t.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), n = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2))), !o.options.verticalSwiping && !o.swiping && 4 < n ? !(o.scrolling = !0) : (!0 === o.options.verticalSwiping && (o.touchObject.swipeLength = n), i = o.swipeDirection(), void 0 !== t.originalEvent && 4 < o.touchObject.swipeLength && (o.swiping = !0, t.preventDefault()), a = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (a = o.touchObject.curY > o.touchObject.startY ? 1 : -1), s = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (s = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = e + s * a : o.swipeLeft = e + s * (o.$list.height() / o.listWidth) * a, !0 === o.options.verticalSwiping && (o.swipeLeft = e + s * a), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))))
    }, o.prototype.swipeStart = function (t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, o.prototype.unload = function () {
        var t = this;
        c(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, o.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy()
    }, o.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2);
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : (t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode || t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode) && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, o.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, o.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, c.fn.slick = function () {
        for (var t, e = this, i = arguments[0], s = Array.prototype.slice.call(arguments, 1), a = e.length, n = 0; n < a; n++) if ("object" == _typeof(i) || void 0 === i ? e[n].slick = new o(e[n], i) : t = e[n].slick[i].apply(e[n].slick, s), void 0 !== t) return t;
        return e
    }
}), function (g) {
    g.fn.customScroll = function (t) {
        return this.length ? "destroy" === t ? (this.each(function () {
            var t = g(this).data("custom-scroll");
            t && t.destroy()
        }), this) : 1 === this.length ? e(this, t) : void this.each(function () {
            e(g(this), t)
        }) : g.extend(v, t)
    };
    var v = {
        prefix: "custom-scroll_",
        barMinHeight: 10,
        barMinWidth: 10,
        offsetTop: 0,
        offsetBottom: 0,
        offsetLeft: 0,
        offsetRight: 0,
        trackWidth: 10,
        trackHeight: 10,
        barHtml: "<div />",
        vertical: !0,
        horizontal: !0,
        preventParentScroll: !0
    }, b = {
        dim: "height",
        Dim: "Height",
        dir: "top",
        Dir: "Top",
        dir2: "bottom",
        Dir2: "Bottom",
        clientAxis: "clientY",
        suffix: "-y"
    }, y = {
        dim: "width",
        Dim: "Width",
        dir: "left",
        Dir: "Left",
        dir2: "right",
        Dir2: "Right",
        clientAxis: "clientX",
        suffix: "-x"
    };

    function e(r, l) {
        var t = r.data("custom-scroll");
        l = t ? t.options : g.extend({}, v, l);
        var e = {}, o = {}, c = {x: +l.vertical, y: +l.horizontal};
        if (l.horizontal && (e.x = y, o.x = {}), l.vertical && (e.y = b, o.y = {}), r.hasClass(l.prefix + "container") && t) return t.updateBars(), t;
        var h = r.children("." + l.prefix + "inner");
        h.length || (h = r.wrapInner('<div class="' + l.prefix + 'inner"></div>').children()), r.addClass(l.prefix + "container");
        var i = g('<div class="' + l.prefix + 'inner" />').width(100).height(100).appendTo("body").css({overflow: "scroll"})[0],
            s = i.offsetWidth - i.clientWidth, a = i.offsetHeight - i.clientHeight;
        i.parentElement.removeChild(i), l.vertical ? (h.css({marginRight: -s + "px"}), r.css({
            paddingLeft: 0,
            paddingRight: 0
        })) : h.css({overflowY: "hidden"}), l.horizontal ? (h.css({
            marginBottom: -a + "px",
            paddingBottom: a + "px"
        }), r.css({paddingTop: 0, paddingBottom: 0})) : h.css({overflowX: "hidden"});
        var n = r.css("maxHeight");
        parseInt(n) && (r.css("maxHeight", "none"), h.css("maxHeight", n)), r.scrollTop(0);
        var d = g("body"), u = {};
        g.each(e, function (e, n) {
            r["scroll" + n.Dir](0);
            var t = l.prefix + "bar" + n.suffix, i = r.children("." + t);
            i.length || (i = g(l.barHtml).addClass(t).appendTo(r));
            i.on("mousedown touchstart", function (t) {
                t.preventDefault();
                var i = h["scroll" + n.Dir](),
                    s = t[n.clientAxis] || t.originalEvent.changedTouches && t.originalEvent.changedTouches[0][n.clientAxis],
                    a = f(e, n).ratio;
                d.on("mousemove.custom-scroll touchmove.custom-scroll", function (t) {
                    t.preventDefault();
                    var e = t[n.clientAxis] || t.originalEvent.changedTouches && t.originalEvent.changedTouches[0][n.clientAxis];
                    h["scroll" + n.Dir](i + (e - s) / a)
                }), d.on("mouseup.custom-scroll touchend.custom-scroll", function () {
                    d.off(".custom-scroll")
                })
            }), u[e] = i
        }), h.on("scroll", m), m(), l.preventParentScroll && h.on("DOMMouseScroll mousewheel", function (t) {
            var e = g(this), i = this.scrollTop, s = this.scrollHeight, a = e.height();
            (0 < ("DOMMouseScroll" == t.type ? -40 * t.originalEvent.detail : t.originalEvent.wheelDelta) ? 0 === i : i === s - a) && t.preventDefault()
        });
        var p = {
            $container: r, $bar: u.y, $barX: u.x, $inner: h, destroy: function () {
                g.each(e, function (t) {
                    u[t].remove()
                }), r.removeClass(l.prefix + "container").removeData("custom-scroll").css({
                    padding: "",
                    maxHeight: ""
                }), h.contents().appendTo(r), h.remove()
            }, updateBars: m, options: l
        };
        return r.data("custom-scroll", p), p;

        function f(t, e) {
            var i = 0 | h.prop("scroll" + e.Dim), s = r["inner" + e.Dim](), a = h["inner" + e.Dim](),
                n = s - l["offset" + e.Dir] - l["offset" + e.Dir2];
            c["x" == t ? "y" : "x"] || (n -= l["track" + e.Dim]);
            var o = Math.max(n * s / i | 0, l["barMin" + e.Dim]);
            return {ratio: (n - o) / (i - a), dim: s, scroll: n, total: i, bar: o}
        }

        function m() {
            g.each(e, _)
        }

        function _(t, e) {
            var i, s, a, n = f(t, e);
            n.total && (i = h["scroll" + e.Dir](), o[t].scrollPos === i && o[t].scroll === n.scroll && o[t].total === n.total || (o[t] = n, o[t].scrollPos = i, (s = n.bar >= n.scroll) !== c[t] && (r.toggleClass(l.prefix + "hidden" + e.suffix, s), c[t] = s), (a = i * n.ratio) < 0 && (a = 0), a > n.scroll - n.bar && (a = n.scroll - n.bar), u[t][e.dim](n.bar).css(e.dir, l["offset" + e.Dir] + a)))
        }
    }
}(jQuery), function (r) {
    var i = {
        type: "html",
        content: "",
        url: "",
        ajax: {},
        ajax_request: null,
        closeOnEsc: !0,
        closeOnOverlayClick: !0,
        clone: !1,
        scrollDistance: 0,
        overlay: {
            block: void 0,
            tpl: '<div class="arcticmodal-overlay"></div>',
            css: {backgroundColor: "#000", opacity: .6}
        },
        container: {
            block: void 0,
            tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
        },
        wrap: void 0,
        body: void 0,
        errors: {
            tpl: '<div class="arcticmodal-error arcticmodal-close"></div>',
            autoclose_delay: 2e3,
            ajax_unsuccessful_load: "Error"
        },
        openEffect: {type: "fade", speed: 400},
        closeEffect: {type: "fade", speed: 400},
        beforeOpen: r.noop,
        afterOpen: r.noop,
        beforeClose: r.noop,
        afterClose: r.noop,
        afterLoading: r.noop,
        afterLoadingOnShow: r.noop,
        errorLoading: r.noop
    }, l = 0, c = r([]), h = function (t, e) {
        var i = !0;
        return r(t).each(function () {
            r(e.target).get(0) == r(this).get(0) && (i = !1), 0 == r(e.target).closest("HTML", r(this).get(0)).length && (i = !1)
        }), i
    }, d = {
        getParentEl: function (t) {
            var e = r(t);
            return (e.data("arcticmodal") || !!(e = r(t).closest(".arcticmodal-container").data("arcticmodalParentEl"))) && e
        }, transition: function (t, e, i, s) {
            switch (s = null == s ? r.noop : s, i.type) {
                case"fade":
                    "show" == e ? t.fadeIn(i.speed, s) : t.fadeOut(i.speed, s);
                    break;
                case"none":
                    "show" == e ? t.show() : t.hide(), s()
            }
        }, prepare_body: function (t, e) {
            r(".arcticmodal-close", t.body).unbind("click.arcticmodal").bind("click.arcticmodal", function () {
                return e.arcticmodal("close"), modalAfterClose(), !1
            })
        }, init_el: function (e, t) {
            var i, s, a, n = e.data("arcticmodal");
            if (!n) {
                if (l++, (n = t).modalID = l, n.overlay.block = r(n.overlay.tpl), n.overlay.block.css(n.overlay.css), n.container.block = r(n.container.tpl), n.body = r(".arcticmodal-container_i2", n.container.block), t.clone ? n.body.html(e.clone(!0)) : (e.before('<div id="arcticmodalReserve' + n.modalID + '" style="display: none" />'), n.body.html(e)), d.prepare_body(n, e), n.closeOnOverlayClick && n.overlay.block.add(n.container.block).click(function (t) {
                    h(r(">*", n.body), t) && e.arcticmodal("close") && modalAfterClose()
                }), n.container.block.data("arcticmodalParentEl", e), e.data("arcticmodal", n), c = r.merge(c, e), r.proxy(u.show, e)(), "html" == n.type) return e;
                null != n.ajax.beforeSend && (i = n.ajax.beforeSend, delete n.ajax.beforeSend), null != n.ajax.success && (s = n.ajax.success, delete n.ajax.success), null != n.ajax.error && (a = n.ajax.error, delete n.ajax.error);
                var o = r.extend(!0, {
                    url: n.url, beforeSend: function () {
                        null == i ? n.body.html('<div class="arcticmodal-loading" />') : i(n, e)
                    }, success: function (t) {
                        e.trigger("afterLoading"), n.afterLoading(n, e, t), null == s ? n.body.html(t) : s(n, e, t), d.prepare_body(n, e), e.trigger("afterLoadingOnShow"), n.afterLoadingOnShow(n, e, t)
                    }, error: function () {
                        e.trigger("errorLoading"), n.errorLoading(n, e), null == a ? (n.body.html(n.errors.tpl), r(".arcticmodal-error", n.body).html(n.errors.ajax_unsuccessful_load), r(".arcticmodal-close", n.body).click(function () {
                            return e.arcticmodal("close"), modalAfterClose(), !1
                        }), n.errors.autoclose_delay && setTimeout(function () {
                            e.arcticmodal("close"), modalAfterClose()
                        }, n.errors.autoclose_delay)) : a(n, e)
                    }
                }, n.ajax);
                n.ajax_request = r.ajax(o), e.data("arcticmodal", n)
            }
        }, init: function (t) {
            if (t = r.extend(!0, {}, i, t), !r.isFunction(this)) return this.each(function () {
                d.init_el(r(this), r.extend(!0, {}, t))
            });
            if (null == t) r.error("jquery.arcticmodal: Uncorrect parameters"); else if ("" == t.type) r.error('jquery.arcticmodal: Don\'t set parameter "type"'); else switch (t.type) {
                case"html":
                    if ("" == t.content) {
                        r.error('jquery.arcticmodal: Don\'t set parameter "content"');
                        break
                    }
                    var e = t.content;
                    return t.content = "", d.init_el(r(e), t);
                case"ajax":
                    if ("" != t.url) return d.init_el(r("<div />"), t);
                    r.error('jquery.arcticmodal: Don\'t set parameter "url"')
            }
        }
    }, u = {
        show: function () {
            var t = d.getParentEl(this);
            if (!1 !== t) {
                var e, i, s = t.data("arcticmodal");
                return s.overlay.block.hide(), s.container.block.hide(), r("BODY").append(s.overlay.block), r("BODY").append(s.container.block), s.beforeOpen(s, t), t.trigger("beforeOpen"), "hidden" != s.wrap.css("overflow") && (s.scrollDistance = $(window).scrollTop(), s.wrap.css("top", -1 * s.scrollDistance).addClass("modal-open"), s.wrap.data("arcticmodalOverflow", s.wrap.css("overflow")), e = s.wrap.outerWidth(!0), s.wrap.css("overflow", "hidden"), (i = s.wrap.outerWidth(!0)) != e && s.wrap.css("marginRight", i - e + "px")), c.not(t).each(function () {
                    r(this).data("arcticmodal").overlay.block.hide()
                }), d.transition(s.overlay.block, "show", 1 < c.length ? {type: "none"} : s.openEffect), d.transition(s.container.block, "show", 1 < c.length ? {type: "none"} : s.openEffect, function () {
                    s.afterOpen(s, t), t.trigger("afterOpen")
                }), t
            }
            r.error("jquery.arcticmodal: Uncorrect call")
        }, close: function () {
            if (!r.isFunction(this)) return this.each(function () {
                var t, e = d.getParentEl(this);
                !1 === e ? r.error("jquery.arcticmodal: Uncorrect call") : !1 !== (t = e.data("arcticmodal")).beforeClose(t, e) && (e.trigger("beforeClose"), c.not(e).last().each(function () {
                    r(this).data("arcticmodal").overlay.block.show()
                }), d.transition(t.overlay.block, "hide", 1 < c.length ? {type: "none"} : t.closeEffect), d.transition(t.container.block, "hide", 1 < c.length ? {type: "none"} : t.closeEffect, function () {
                    t.afterClose(t, e), e.trigger("afterClose"), t.clone || r("#arcticmodalReserve" + t.modalID).replaceWith(t.body.find(">*")), t.overlay.block.remove(), t.container.block.remove(), e.data("arcticmodal", null), r(".arcticmodal-container").length || (t.wrap.data("arcticmodalOverflow") && t.wrap.css("overflow", t.wrap.data("arcticmodalOverflow")), t.wrap.css("marginRight", 0)), t.wrap.css("top", "").removeClass("modal-open"), $(window).scrollTop(t.scrollDistance)
                }), "ajax" == t.type && t.ajax_request.abort(), c = c.not(e))
            });
            c.each(function () {
                r(this).arcticmodal("close"), modalAfterClose()
            })
        }, setDefault: function (t) {
            r.extend(!0, i, t)
        }
    };
    r(function () {
        i.wrap = r(document.all && !document.querySelector ? "html" : "body")
    }), r(document).bind("keyup.arcticmodal", function (t) {
        var e = c.last();
        e.length && e.data("arcticmodal").closeOnEsc && 27 === t.keyCode && e.arcticmodal("close") && modalAfterClose()
    }), r.arcticmodal = r.fn.arcticmodal = function (t) {
        return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" !== _typeof(t) && t ? void r.error("jquery.arcticmodal: Method " + t + " does not exist") : d.init.apply(this, arguments)
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? t(require("jquery")) : t(jQuery)
}(function (C) {
    var s, t = navigator.userAgent, $ = /iphone/i.test(t), a = /chrome/i.test(t), D = /android/i.test(t);
    C.mask = {
        definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
        autoclear: !0,
        dataName: "rawMaskFn",
        placeholder: "_"
    }, C.fn.extend({
        caret: function (t, e) {
            var i;
            if (0 !== this.length && !this.is(":hidden")) return "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function () {
                this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && ((i = this.createTextRange()).collapse(!0), i.moveEnd("character", e), i.moveStart("character", t), i.select())
            })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (i = document.selection.createRange(), t = 0 - i.duplicate().moveStart("character", -1e5), e = t + i.text.length), {
                begin: t,
                end: e
            })
        }, unmask: function () {
            return this.trigger("unmask")
        }, mask: function (e, g) {
            var i, v, b, y, w, k, x;
            if (!e && 0 < this.length) {
                var t = C(this[0]).data(C.mask.dataName);
                return t ? t() : void 0
            }
            return g = C.extend({
                autoclear: C.mask.autoclear,
                placeholder: C.mask.placeholder,
                completed: null
            }, g), i = C.mask.definitions, v = [], b = k = e.length, y = null, C.each(e.split(""), function (t, e) {
                "?" == e ? (k--, b = t) : i[e] ? (v.push(new RegExp(i[e])), null === y && (y = v.length - 1), t < b && (w = v.length - 1)) : v.push(null)
            }), this.trigger("unmask").each(function () {
                var o = C(this), r = C.map(e.split(""), function (t, e) {
                    if ("?" != t) return i[t] ? h(e) : t
                }), l = r.join(""), n = o.val();

                function c() {
                    if (g.completed) {
                        for (var t = y; t <= w; t++) if (v[t] && r[t] === h(t)) return;
                        g.completed.call(o)
                    }
                }

                function h(t) {
                    return t < g.placeholder.length ? g.placeholder.charAt(t) : g.placeholder.charAt(0)
                }

                function d(t) {
                    for (; ++t < k && !v[t];) ;
                    return t
                }

                function u(t, e) {
                    var i, s;
                    if (!(t < 0)) {
                        for (i = t, s = d(e); i < k; i++) if (v[i]) {
                            if (!(s < k && v[i].test(r[s]))) break;
                            r[i] = r[s], r[s] = h(s), s = d(s)
                        }
                        m(), o.caret(Math.max(y, t))
                    }
                }

                function p(t) {
                    _(), o.val() != n && o.change()
                }

                function f(t, e) {
                    for (var i = t; i < e && i < k; i++) v[i] && (r[i] = h(i))
                }

                function m() {
                    o.val(r.join(""))
                }

                function _(t) {
                    for (var e, i = o.val(), s = -1, a = 0, n = 0; a < k; a++) if (v[a]) {
                        for (r[a] = h(a); n++ < i.length;) if (e = i.charAt(n - 1), v[a].test(e)) {
                            r[a] = e, s = a;
                            break
                        }
                        if (n > i.length) {
                            f(a + 1, k);
                            break
                        }
                    } else r[a] === i.charAt(n) && n++, a < b && (s = a);
                    return t ? m() : s + 1 < b ? g.autoclear || r.join("") === l ? (o.val() && o.val(""), f(0, k)) : m() : (m(), o.val(o.val().substring(0, s + 1))), b ? a : y
                }

                o.data(C.mask.dataName, function () {
                    return C.map(r, function (t, e) {
                        return v[e] && t != h(e) ? t : null
                    }).join("")
                }), o.one("unmask", function () {
                    o.off(".mask").removeData(C.mask.dataName)
                }).on("focus.mask", function () {
                    var t;
                    o.prop("readonly") || (clearTimeout(s), n = o.val(), t = _(), s = setTimeout(function () {
                        o.get(0) === document.activeElement && (m(), t == e.replace("?", "").length ? o.caret(0, t) : o.caret(t))
                    }, 10))
                }).on("blur.mask", p).on("keydown.mask", function (t) {
                    var e, i, s, a;
                    o.prop("readonly") || (e = t.which || t.keyCode, x = o.val(), 8 === e || 46 === e || $ && 127 === e ? (s = (i = o.caret()).begin, (a = i.end) - s == 0 && (s = 46 !== e ? function (t) {
                        for (; 0 <= --t && !v[t];) ;
                        return t
                    }(s) : a = d(s - 1), a = 46 === e ? d(a) : a), f(s, a), u(s, a - 1), t.preventDefault()) : 13 === e ? p.call(this, t) : 27 === e && (o.val(n), o.caret(0, _()), t.preventDefault()))
                }).on("keypress.mask", function (t) {
                    var e, i, s, a, n;
                    o.prop("readonly") || (e = t.which || t.keyCode, i = o.caret(), t.ctrlKey || t.altKey || t.metaKey || e < 32 || e && 13 !== e && (i.end - i.begin != 0 && (f(i.begin, i.end), u(i.begin, i.end - 1)), (s = d(i.begin - 1)) < k && (n = String.fromCharCode(e), v[s].test(n) && (function (t) {
                        for (var e, i, s = t, a = h(t); s < k; s++) if (v[s]) {
                            if (e = d(s), i = r[s], r[s] = a, !(e < k && v[e].test(i))) break;
                            a = i
                        }
                    }(s), r[s] = n, m(), a = d(s), D ? setTimeout(function () {
                        C.proxy(C.fn.caret, o, a)()
                    }, 0) : o.caret(a), i.begin <= w && c())), t.preventDefault()))
                }).on("input.mask paste.mask", function () {
                    o.prop("readonly") || setTimeout(function () {
                        var t = _(!0);
                        o.caret(t), c()
                    }, 0)
                }), a && D && o.off("input.mask").on("input.mask", function (t) {
                    var e = o.val(), i = o.caret();
                    if (x && x.length && x.length > e.length) {
                        for (_(!0); 0 < i.begin && !v[i.begin - 1];) i.begin--;
                        if (0 === i.begin) for (; i.begin < y && !v[i.begin];) i.begin++;
                        o.caret(i.begin, i.begin)
                    } else {
                        for (_(!0); i.begin < k && !v[i.begin];) i.begin++;
                        o.caret(i.begin, i.begin)
                    }
                    c()
                }), _()
            })
        }
    })
});
var Events = {}, App = {};
alarmFading = function () {
    $(".alarm").fadeIn(600)
};
var BrowserInfo = {
    getBrowserInfo: function () {
        var t = navigator.userAgent, e = BrowserInfo.getBrowserName(t),
            i = BrowserInfo.getBrowserVersion(t, e).split(".")[0];
        return "chrome" == e && i < 44 && alarmFading(), "firefox" == e && i < 40 && alarmFading(), "ie" == e && i < 10 && alarmFading(), "newie" == e && i < 10 && alarmFading(), "safari" == e && i < 11 && alarmFading(), e + " " + i
    }, getBrowserName: function (t) {
        return -1 < t.search(/MSIE/) ? "ie" : -1 < t.search(/Edge/) ? "edge" : -1 < t.search(/Firefox/) ? "firefox" : -1 < t.search(/Opera/) ? "opera" : -1 < t.search(/Chrome/) ? "chrome" : -1 < t.search(/Safari/) ? "safari" : -1 < t.search(/Konqueror/) ? "konqueror" : -1 < t.search(/Iceweasel/) ? "iceweasel" : -1 < t.search(/SeaMonkey/) ? "seamonkey" : -1 < t.search(/rv/) ? "newie" : "unknown"
    }, getBrowserVersion: function (t, e) {
        var i = "";
        switch (e) {
            case"ie":
                i = t.split("MSIE ")[1].split(";")[0];
                break;
            case"newie":
                i = t.split("rv:")[1];
                break;
            case"edge":
                i = t.split("Edge/")[1];
                break;
            case"firefox":
                i = t.split("Firefox/")[1];
                break;
            case"opera":
                i = t.split("Version/")[1];
                break;
            case"chrome":
                i = t.split("Chrome/")[1].split(" ")[0];
                break;
            case"safari":
                i = t.split("Version/")[1].split(" ")[0];
                break;
            case"konqueror":
                i = t.split("KHTML/")[1].split(" ")[0];
                break;
            case"iceweasel":
                i = t.split("Iceweasel/")[1].split(" ")[0];
                break;
            case"seamonkey":
                i = t.split("SeaMonkey/")[1];
                break;
            default:
                i = "unknown"
        }
        return i.split(".")[0]
    }
}, Events = {
    init: function () {
        $(".alarm__close").click(function () {
            $(".alarm").slideToggle()
        })
    }
}, App = {
    init: function () {
        BrowserInfo.getBrowserInfo(), Events.init()
    }
};
$(document).ready(function () {
    App.init()
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? module.exports = e(require("jquery")) : t.lightbox = e(t.jQuery)
}(this, function (u) {
    function t(t) {
        this.album = [], this.currentImageIndex = void 0, this.init(), this.options = u.extend({}, this.constructor.defaults), this.option(t)
    }

    return t.defaults = {
        albumLabel: "Image %1 of %2",
        alwaysShowNavOnTouchDevices: !1,
        fadeDuration: 600,
        fitImagesInViewport: !0,
        imageFadeDuration: 600,
        positionFromTop: 50,
        resizeDuration: 700,
        showImageNumberLabel: !0,
        wrapAround: !1,
        disableScrolling: !1,
        sanitizeTitle: !1
    }, t.prototype.option = function (t) {
        u.extend(this.options, t)
    }, t.prototype.imageCountLabel = function (t, e) {
        return this.options.albumLabel.replace(/%1/g, t).replace(/%2/g, e)
    }, t.prototype.init = function () {
        var t = this;
        u(document).ready(function () {
            t.enable(), t.build()
        })
    }, t.prototype.enable = function () {
        var e = this;
        u("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function (t) {
            return e.start(u(t.currentTarget)), !1
        })
    }, t.prototype.build = function () {
        var e;
        0 < u("#lightbox").length || (e = this, u('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="moihottur.ru"/><div class="lb-nav"><a class="lb-prev" aria-label="Previous image"></a><a class="lb-next" aria-label="Next image"></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(u("body")), this.$lightbox = u("#lightbox"), this.$overlay = u("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = {
            top: parseInt(this.$container.css("padding-top"), 10),
            right: parseInt(this.$container.css("padding-right"), 10),
            bottom: parseInt(this.$container.css("padding-bottom"), 10),
            left: parseInt(this.$container.css("padding-left"), 10)
        }, this.imageBorderWidth = {
            top: parseInt(this.$image.css("border-top-width"), 10),
            right: parseInt(this.$image.css("border-right-width"), 10),
            bottom: parseInt(this.$image.css("border-bottom-width"), 10),
            left: parseInt(this.$image.css("border-left-width"), 10)
        }, this.$overlay.hide().on("click", function () {
            return e.end(), !1
        }), this.$lightbox.hide().on("click", function (t) {
            "lightbox" === u(t.target).attr("id") && e.end()
        }), this.$outerContainer.on("click", function (t) {
            return "lightbox" === u(t.target).attr("id") && e.end(), !1
        }), this.$lightbox.find(".lb-prev").on("click", function () {
            return 0 === e.currentImageIndex ? e.changeImage(e.album.length - 1) : e.changeImage(e.currentImageIndex - 1), !1
        }), this.$lightbox.find(".lb-next").on("click", function () {
            return e.currentImageIndex === e.album.length - 1 ? e.changeImage(0) : e.changeImage(e.currentImageIndex + 1), !1
        }), this.$nav.on("mousedown", function (t) {
            3 === t.which && (e.$nav.css("pointer-events", "none"), e.$lightbox.one("contextmenu", function () {
                setTimeout(function () {
                    this.$nav.css("pointer-events", "auto")
                }.bind(e), 0)
            }))
        }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function () {
            return e.end(), !1
        }))
    }, t.prototype.start = function (t) {
        var e = this, i = u(window);
        i.on("resize", u.proxy(this.sizeOverlay, this)), this.sizeOverlay(), this.album = [];
        var s = 0;

        function a(t) {
            e.album.push({
                alt: t.attr("data-alt"),
                link: t.attr("href"),
                title: t.attr("data-title") || t.attr("title")
            })
        }

        var n, o = t.attr("data-lightbox");
        if (o) {
            n = u(t.prop("tagName") + '[data-lightbox="' + o + '"]');
            for (var r = 0; r < n.length; r = ++r) a(u(n[r])), n[r] === t[0] && (s = r)
        } else if ("lightbox" === t.attr("rel")) a(t); else {
            n = u(t.prop("tagName") + '[rel="' + t.attr("rel") + '"]');
            for (var l = 0; l < n.length; l = ++l) a(u(n[l])), n[l] === t[0] && (s = l)
        }
        var c = i.scrollTop() + this.options.positionFromTop, h = i.scrollLeft();
        this.$lightbox.css({
            top: c + "px",
            left: h + "px"
        }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && u("body").addClass("lb-disable-scrolling"), this.changeImage(s)
    }, t.prototype.changeImage = function (o) {
        var r = this, l = this.album[o].link, c = l.split(".").slice(-1)[0], h = this.$lightbox.find(".lb-image");
        this.disableKeyboardNav(), this.$overlay.fadeIn(this.options.fadeDuration), u(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating");
        var d = new Image;
        d.onload = function () {
            var t, e, i, s, a, n;
            h.attr({
                alt: r.album[o].alt,
                src: l
            }), u(d), h.width(d.width), h.height(d.height), n = u(window).width(), a = u(window).height(), s = n - r.containerPadding.left - r.containerPadding.right - r.imageBorderWidth.left - r.imageBorderWidth.right - 20, i = a - r.containerPadding.top - r.containerPadding.bottom - r.imageBorderWidth.top - r.imageBorderWidth.bottom - r.options.positionFromTop - 70, "svg" === c && (0 !== d.width && 0 !== d.height || (h.width(s), h.height(i))), r.options.fitImagesInViewport && (r.options.maxWidth && r.options.maxWidth < s && (s = r.options.maxWidth), r.options.maxHeight && r.options.maxHeight < i && (i = r.options.maxHeight), (d.width > s || d.height > i) && (d.width / s > d.height / i ? (e = s, t = parseInt(d.height / (d.width / e), 10)) : (t = i, e = parseInt(d.width / (d.height / t), 10)), h.width(e), h.height(t))), r.sizeContainer(h.width(), h.height())
        }, d.src = this.album[o].link, this.currentImageIndex = o
    }, t.prototype.sizeOverlay = function () {
        var t = this;
        setTimeout(function () {
            t.$overlay.width(u(document).width()).height(u(document).height())
        }, 0)
    }, t.prototype.sizeContainer = function (t, e) {
        var i = this, s = this.$outerContainer.outerWidth(), a = this.$outerContainer.outerHeight(),
            n = t + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
            o = e + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;

        function r() {
            i.$lightbox.find(".lb-dataContainer").width(n), i.$lightbox.find(".lb-prevLink").height(o), i.$lightbox.find(".lb-nextLink").height(o), i.showImage()
        }

        s !== n || a !== o ? this.$outerContainer.animate({
            width: n,
            height: o
        }, this.options.resizeDuration, "swing", function () {
            r()
        }) : r()
    }, t.prototype.showImage = function () {
        this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav()
    }, t.prototype.updateNav = function () {
        var t = !1;
        try {
            document.createEvent("TouchEvent"), t = !!this.options.alwaysShowNavOnTouchDevices
        } catch (t) {
        }
        this.$lightbox.find(".lb-nav").show(), 1 < this.album.length && (this.options.wrapAround ? (t && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (0 < this.currentImageIndex && (this.$lightbox.find(".lb-prev").show(), t && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), t && this.$lightbox.find(".lb-next").css("opacity", "1"))))
    }, t.prototype.updateDetails = function () {
        var t, e, i = this;
        void 0 !== this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title && (t = this.$lightbox.find(".lb-caption"), this.options.sanitizeTitle ? t.text(this.album[this.currentImageIndex].title) : t.html(this.album[this.currentImageIndex].title), t.fadeIn("fast")), 1 < this.album.length && this.options.showImageNumberLabel ? (e = this.imageCountLabel(this.currentImageIndex + 1, this.album.length), this.$lightbox.find(".lb-number").text(e).fadeIn("fast")) : this.$lightbox.find(".lb-number").hide(), this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function () {
            return i.sizeOverlay()
        })
    }, t.prototype.preloadNeighboringImages = function () {
        this.album.length > this.currentImageIndex + 1 && ((new Image).src = this.album[this.currentImageIndex + 1].link), 0 < this.currentImageIndex && ((new Image).src = this.album[this.currentImageIndex - 1].link)
    }, t.prototype.enableKeyboardNav = function () {
        u(document).on("keyup.keyboard", u.proxy(this.keyboardAction, this))
    }, t.prototype.disableKeyboardNav = function () {
        u(document).off(".keyboard")
    }, t.prototype.keyboardAction = function (t) {
        var e = t.keyCode;
        27 === e ? this.end() : 37 === e ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && 1 < this.album.length && this.changeImage(this.album.length - 1) : 39 === e && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && 1 < this.album.length && this.changeImage(0))
    }, t.prototype.end = function () {
        this.disableKeyboardNav(), u(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), this.options.disableScrolling && u("body").removeClass("lb-disable-scrolling")
    }, new t
}), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (x) {
    function t() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, x.extend(this._defaults, this.regional[""]), this.regional.en = x.extend(!0, {}, this.regional[""]), this.regional["en-US"] = x.extend(!0, {}, this.regional.en), this.dpDiv = i(x("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(t) {
        var e = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.on("mouseout", e, function () {
            x(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", e, n)
    }

    function n() {
        x.datepicker._isDisabledDatepicker(it.inline ? it.dpDiv.parent()[0] : it.input[0]) || (x(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), x(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && x(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && x(this).addClass("ui-datepicker-next-hover"))
    }

    function d(t, e) {
        for (var i in x.extend(t, e), e) null == e[i] && (t[i] = e[i]);
        return t
    }

    function e(e) {
        return function () {
            var t = this.element.val();
            e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
        }
    }

    x.ui = x.ui || {}, x.ui.version = "1.12.1";
    var s, a, k, C, o, r, l, c, h, $, u, p = 0, f = Array.prototype.slice;

    function D(t, e, i) {
        return [parseFloat(t[0]) * (h.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (h.test(t[1]) ? i / 100 : 1)]
    }

    function T(t, e) {
        return parseInt(x.css(t, e), 10) || 0
    }

    x.cleanData = (u = x.cleanData, function (t) {
        for (var e, i, s = 0; null != (i = t[s]); s++) try {
            (e = x._data(i, "events")) && e.remove && x(i).triggerHandler("remove")
        } catch (t) {
        }
        u(t)
    }), x.widget = function (t, i, e) {
        var s, a, n, o = {}, r = t.split(".")[0], l = r + "-" + (t = t.split(".")[1]);
        return e || (e = i, i = x.Widget), x.isArray(e) && (e = x.extend.apply(null, [{}].concat(e))), x.expr[":"][l.toLowerCase()] = function (t) {
            return !!x.data(t, l)
        }, x[r] = x[r] || {}, s = x[r][t], a = x[r][t] = function (t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new a(t, e)
        }, x.extend(a, s, {
            version: e.version,
            _proto: x.extend({}, e),
            _childConstructors: []
        }), (n = new i).options = x.widget.extend({}, n.options), x.each(e, function (e, s) {
            return x.isFunction(s) ? void (o[e] = function () {
                var t, e = this._super, i = this._superApply;
                return this._super = a, this._superApply = n, t = s.apply(this, arguments), this._super = e, this._superApply = i, t
            }) : void (o[e] = s);

            function a() {
                return i.prototype[e].apply(this, arguments)
            }

            function n(t) {
                return i.prototype[e].apply(this, t)
            }
        }), a.prototype = x.widget.extend(n, {widgetEventPrefix: s && n.widgetEventPrefix || t}, o, {
            constructor: a,
            namespace: r,
            widgetName: t,
            widgetFullName: l
        }), s ? (x.each(s._childConstructors, function (t, e) {
            var i = e.prototype;
            x.widget(i.namespace + "." + i.widgetName, a, e._proto)
        }), delete s._childConstructors) : i._childConstructors.push(a), x.widget.bridge(t, a), a
    }, x.widget.extend = function (t) {
        for (var e, i, s = f.call(arguments, 1), a = 0, n = s.length; a < n; a++) for (e in s[a]) i = s[a][e], s[a].hasOwnProperty(e) && void 0 !== i && (t[e] = x.isPlainObject(i) ? x.isPlainObject(t[e]) ? x.widget.extend({}, t[e], i) : x.widget.extend({}, i) : i);
        return t
    }, x.widget.bridge = function (n, e) {
        var o = e.prototype.widgetFullName || n;
        x.fn[n] = function (i) {
            var t = "string" == typeof i, s = f.call(arguments, 1), a = this;
            return t ? this.length || "instance" !== i ? this.each(function () {
                var t, e = x.data(this, o);
                return "instance" === i ? (a = e, !1) : e ? x.isFunction(e[i]) && "_" !== i.charAt(0) ? (t = e[i].apply(e, s)) !== e && void 0 !== t ? (a = t && t.jquery ? a.pushStack(t.get()) : t, !1) : void 0 : x.error("no such method '" + i + "' for " + n + " widget instance") : x.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + i + "'")
            }) : a = void 0 : (s.length && (i = x.widget.extend.apply(null, [i].concat(s))), this.each(function () {
                var t = x.data(this, o);
                t ? (t.option(i || {}), t._init && t._init()) : x.data(this, o, new e(i, this))
            })), a
        }
    }, x.Widget = function () {
    }, x.Widget._childConstructors = [], x.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (t, e) {
            e = x(e || this.defaultElement || this)[0], this.element = x(e), this.uuid = p++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = x(), this.hoverable = x(), this.focusable = x(), this.classesElementLookup = {}, e !== this && (x.data(e, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === e && this.destroy()
                }
            }), this.document = x(e.style ? e.ownerDocument : e.document || e), this.window = x(this.document[0].defaultView || this.document[0].parentWindow)), this.options = x.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: x.noop,
        _create: x.noop,
        _init: x.noop,
        destroy: function () {
            var i = this;
            this._destroy(), x.each(this.classesElementLookup, function (t, e) {
                i._removeClass(e, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: x.noop,
        widget: function () {
            return this.element
        },
        option: function (t, e) {
            var i, s, a, n = t;
            if (0 === arguments.length) return x.widget.extend({}, this.options);
            if ("string" == typeof t) if (n = {}, t = (i = t.split(".")).shift(), i.length) {
                for (s = n[t] = x.widget.extend({}, this.options[t]), a = 0; i.length - 1 > a; a++) s[i[a]] = s[i[a]] || {}, s = s[i[a]];
                if (t = i.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
                s[t] = e
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                n[t] = e
            }
            return this._setOptions(n), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (t) {
            var e, i, s;
            for (e in t) s = this.classesElementLookup[e], t[e] !== this.options.classes[e] && s && s.length && (i = x(s.get()), this._removeClass(s, e), i.addClass(this._classes({
                element: i,
                keys: e,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (a) {
            function t(t, e) {
                for (var i, s = 0; t.length > s; s++) i = o.classesElementLookup[t[s]] || x(), i = a.add ? x(x.unique(i.get().concat(a.element.get()))) : x(i.not(a.element).get()), o.classesElementLookup[t[s]] = i, n.push(t[s]), e && a.classes[t[s]] && n.push(a.classes[t[s]])
            }

            var n = [], o = this;
            return a = x.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, a), this._on(a.element, {remove: "_untrackClassesElement"}), a.keys && t(a.keys.match(/\S+/g) || [], !0), a.extra && t(a.extra.match(/\S+/g) || []), n.join(" ")
        },
        _untrackClassesElement: function (i) {
            var s = this;
            x.each(s.classesElementLookup, function (t, e) {
                -1 !== x.inArray(i.target, e) && (s.classesElementLookup[t] = x(e.not(i.target).get()))
            })
        },
        _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function (t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var a = "string" == typeof t || null === t,
                n = {extra: a ? e : i, keys: a ? t : e, element: a ? this.element : t, add: s};
            return n.element.toggleClass(this._classes(n), s), this
        },
        _on: function (o, r, t) {
            var l, c = this;
            "boolean" != typeof o && (t = r, r = o, o = !1), t ? (r = l = x(r), this.bindings = this.bindings.add(r)) : (t = r, r = this.element, l = this.widget()), x.each(t, function (t, e) {
                function i() {
                    return o || !0 !== c.options.disabled && !x(this).hasClass("ui-state-disabled") ? ("string" == typeof e ? c[e] : e).apply(c, arguments) : void 0
                }

                "string" != typeof e && (i.guid = e.guid = e.guid || i.guid || x.guid++);
                var s = t.match(/^([\w:-]*)\s*(.*)$/), a = s[1] + c.eventNamespace, n = s[2];
                n ? l.on(a, n, i) : r.on(a, i)
            })
        },
        _off: function (t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(e).off(e), this.bindings = x(this.bindings.not(t).get()), this.focusable = x(this.focusable.not(t).get()), this.hoverable = x(this.hoverable.not(t).get())
        },
        _delay: function (t, e) {
            var i = this;
            return setTimeout(function () {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    this._addClass(x(t.currentTarget), null, "ui-state-focus")
                }, focusout: function (t) {
                    this._removeClass(x(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (t, e, i) {
            var s, a, n = this.options[t];
            if (i = i || {}, (e = x.Event(e)).type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), e.target = this.element[0], a = e.originalEvent) for (s in a) s in e || (e[s] = a[s]);
            return this.element.trigger(e, i), !(x.isFunction(n) && !1 === n.apply(this.element[0], [e].concat(i)) || e.isDefaultPrevented())
        }
    }, x.each({show: "fadeIn", hide: "fadeOut"}, function (n, o) {
        x.Widget.prototype["_" + n] = function (e, t, i) {
            "string" == typeof t && (t = {effect: t});
            var s, a = t ? !0 !== t && "number" != typeof t && t.effect || o : n;
            "number" == typeof (t = t || {}) && (t = {duration: t}), s = !x.isEmptyObject(t), t.complete = i, t.delay && e.delay(t.delay), s && x.effects && x.effects.effect[a] ? e[n](t) : a !== n && e[a] ? e[a](t.duration, t.easing, i) : e.queue(function (t) {
                x(this)[n](), i && i.call(e[0]), t()
            })
        }
    }), x.widget, k = Math.max, C = Math.abs, o = /left|center|right/, r = /top|center|bottom/, l = /[\+\-]\d+(\.[\d]+)?%?/, c = /^\w+/, h = /%$/, $ = x.fn.position, x.position = {
        scrollbarWidth: function () {
            if (void 0 !== a) return a;
            var t, e,
                i = x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                s = i.children()[0];
            return x("body").append(i), t = s.offsetWidth, i.css("overflow", "scroll"), t === (e = s.offsetWidth) && (e = i[0].clientWidth), i.remove(), a = t - e
        }, getScrollInfo: function (t) {
            var e = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                s = "scroll" === e || "auto" === e && t.width < t.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                height: s ? x.position.scrollbarWidth() : 0
            }
        }, getWithinInfo: function (t) {
            var e = x(t || window), i = x.isWindow(e[0]), s = !!e[0] && 9 === e[0].nodeType;
            return {
                element: e,
                isWindow: i,
                isDocument: s,
                offset: !i && !s ? x(t).offset() : {left: 0, top: 0},
                scrollLeft: e.scrollLeft(),
                scrollTop: e.scrollTop(),
                width: e.outerWidth(),
                height: e.outerHeight()
            }
        }
    }, x.fn.position = function (d) {
        if (!d || !d.of) return $.apply(this, arguments);
        d = x.extend({}, d);
        var u, p, f, m, _, t, e, g = x(d.of), v = x.position.getWithinInfo(d.within), b = x.position.getScrollInfo(v),
            y = (d.collision || "flip").split(" "), w = {}, i = 9 === (e = (t = g)[0]).nodeType ? {
                width: t.width(),
                height: t.height(),
                offset: {top: 0, left: 0}
            } : x.isWindow(e) ? {
                width: t.width(),
                height: t.height(),
                offset: {top: t.scrollTop(), left: t.scrollLeft()}
            } : e.preventDefault ? {width: 0, height: 0, offset: {top: e.pageY, left: e.pageX}} : {
                width: t.outerWidth(),
                height: t.outerHeight(),
                offset: t.offset()
            };
        return g[0].preventDefault && (d.at = "left top"), p = i.width, f = i.height, m = i.offset, _ = x.extend({}, m), x.each(["my", "at"], function () {
            var t, e, i = (d[this] || "").split(" ");
            1 === i.length && (i = o.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = o.test(i[0]) ? i[0] : "center", i[1] = r.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], d[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
        }), 1 === y.length && (y[1] = y[0]), "right" === d.at[0] ? _.left += p : "center" === d.at[0] && (_.left += p / 2), "bottom" === d.at[1] ? _.top += f : "center" === d.at[1] && (_.top += f / 2), u = D(w.at, p, f), _.left += u[0], _.top += u[1], this.each(function () {
            var i, t, o = x(this), r = o.outerWidth(), l = o.outerHeight(), e = T(this, "marginLeft"),
                s = T(this, "marginTop"), a = r + e + T(this, "marginRight") + b.width,
                n = l + s + T(this, "marginBottom") + b.height, c = x.extend({}, _),
                h = D(w.my, o.outerWidth(), o.outerHeight());
            "right" === d.my[0] ? c.left -= r : "center" === d.my[0] && (c.left -= r / 2), "bottom" === d.my[1] ? c.top -= l : "center" === d.my[1] && (c.top -= l / 2), c.left += h[0], c.top += h[1], i = {
                marginLeft: e,
                marginTop: s
            }, x.each(["left", "top"], function (t, e) {
                x.ui.position[y[t]] && x.ui.position[y[t]][e](c, {
                    targetWidth: p,
                    targetHeight: f,
                    elemWidth: r,
                    elemHeight: l,
                    collisionPosition: i,
                    collisionWidth: a,
                    collisionHeight: n,
                    offset: [u[0] + h[0], u[1] + h[1]],
                    my: d.my,
                    at: d.at,
                    within: v,
                    elem: o
                })
            }), d.using && (t = function (t) {
                var e = m.left - c.left, i = e + p - r, s = m.top - c.top, a = s + f - l, n = {
                    target: {element: g, left: m.left, top: m.top, width: p, height: f},
                    element: {element: o, left: c.left, top: c.top, width: r, height: l},
                    horizontal: i < 0 ? "left" : 0 < e ? "right" : "center",
                    vertical: a < 0 ? "top" : 0 < s ? "bottom" : "middle"
                };
                p < r && p > C(e + i) && (n.horizontal = "center"), f < l && f > C(s + a) && (n.vertical = "middle"), n.important = k(C(e), C(i)) > k(C(s), C(a)) ? "horizontal" : "vertical", d.using.call(this, t, n)
            }), o.offset(x.extend(c, {using: t}))
        })
    }, x.ui.position = {
        fit: {
            left: function (t, e) {
                var i, s = e.within, a = s.isWindow ? s.scrollLeft : s.offset.left, n = s.width,
                    o = t.left - e.collisionPosition.marginLeft, r = a - o, l = o + e.collisionWidth - n - a;
                e.collisionWidth > n ? 0 < r && l <= 0 ? (i = t.left + r + e.collisionWidth - n - a, t.left += r - i) : t.left = !(0 < l && r <= 0) && l < r ? a + n - e.collisionWidth : a : 0 < r ? t.left += r : 0 < l ? t.left -= l : t.left = k(t.left - o, t.left)
            }, top: function (t, e) {
                var i, s = e.within, a = s.isWindow ? s.scrollTop : s.offset.top, n = e.within.height,
                    o = t.top - e.collisionPosition.marginTop, r = a - o, l = o + e.collisionHeight - n - a;
                e.collisionHeight > n ? 0 < r && l <= 0 ? (i = t.top + r + e.collisionHeight - n - a, t.top += r - i) : t.top = !(0 < l && r <= 0) && l < r ? a + n - e.collisionHeight : a : 0 < r ? t.top += r : 0 < l ? t.top -= l : t.top = k(t.top - o, t.top)
            }
        }, flip: {
            left: function (t, e) {
                var i, s, a = e.within, n = a.offset.left + a.scrollLeft, o = a.width,
                    r = a.isWindow ? a.scrollLeft : a.offset.left, l = t.left - e.collisionPosition.marginLeft,
                    c = l - r, h = l + e.collisionWidth - o - r,
                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                    u = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                    p = -2 * e.offset[0];
                c < 0 ? ((i = t.left + d + u + p + e.collisionWidth - o - n) < 0 || C(c) > i) && (t.left += d + u + p) : 0 < h && ((0 < (s = t.left - e.collisionPosition.marginLeft + d + u + p - r) || h > C(s)) && (t.left += d + u + p))
            }, top: function (t, e) {
                var i, s, a = e.within, n = a.offset.top + a.scrollTop, o = a.height,
                    r = a.isWindow ? a.scrollTop : a.offset.top, l = t.top - e.collisionPosition.marginTop, c = l - r,
                    h = l + e.collisionHeight - o - r,
                    d = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                    u = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                    p = -2 * e.offset[1];
                c < 0 ? ((s = t.top + d + u + p + e.collisionHeight - o - n) < 0 || C(c) > s) && (t.top += d + u + p) : 0 < h && ((0 < (i = t.top - e.collisionPosition.marginTop + d + u + p - r) || h > C(i)) && (t.top += d + u + p))
            }
        }, flipfit: {
            left: function () {
                x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
            }, top: function () {
                x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
            }
        }
    }, x.ui.position, x.extend(x.expr[":"], {
        data: x.expr.createPseudo ? x.expr.createPseudo(function (e) {
            return function (t) {
                return !!x.data(t, e)
            }
        }) : function (t, e, i) {
            return !!x.data(t, i[3])
        }
    }), x.fn.extend({
        disableSelection: (s = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
            return this.on(s + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        }), enableSelection: function () {
            return this.off(".ui-disableSelection")
        }
    });
    var m, _, g, v, b, y, w, S, M, I, P, O, A, H, N, Y, F, E, j, L, z, W = "ui-effects-", R = "ui-effects-style",
        B = "ui-effects-animated", q = x;

    function U(t, e, i, s) {
        return x.isPlainObject(t) && (t = (e = t).effect), t = {effect: t}, null == e && (e = {}), x.isFunction(e) && (s = e, i = null, e = {}), "number" != typeof e && !x.fx.speeds[e] || (s = i, i = e, e = {}), x.isFunction(i) && (s = i, i = null), e && x.extend(t, e), i = i || e.duration, t.duration = x.fx.off ? 0 : "number" == typeof i ? i : i in x.fx.speeds ? x.fx.speeds[i] : x.fx.speeds._default, t.complete = s || e.complete, t
    }

    function V(t) {
        return !t || "number" == typeof t || x.fx.speeds[t] || ("string" == typeof t && !x.effects.effect[t] || (x.isFunction(t) || "object" == _typeof(t) && !t.effect))
    }

    function G(t, e) {
        var i = e.outerWidth(), s = e.outerHeight(),
            a = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
        return {
            top: parseFloat(a[1]) || 0,
            right: "auto" === a[2] ? i : parseFloat(a[2]),
            bottom: "auto" === a[3] ? s : parseFloat(a[3]),
            left: parseFloat(a[4]) || 0
        }
    }

    function K(t) {
        var e, i,
            s = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
            a = {};
        if (s && s.length && s[0] && s[s[0]]) for (i = s.length; i--;) "string" == typeof s[e = s[i]] && (a[x.camelCase(e)] = s[e]); else for (e in s) "string" == typeof s[e] && (a[e] = s[e]);
        return a
    }

    function J(t, e, i) {
        var s = E[e.type] || {};
        return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : t < 0 ? 0 : s.max < t ? s.max : t)
    }

    function X(o) {
        var r = Y(), l = r._rgba = [];
        return o = o.toLowerCase(), z(N, function (t, e) {
            var i, s = e.re.exec(o), a = s && e.parse(s), n = e.space || "rgba";
            return a ? (i = r[n](a), r[F[n].cache] = i[F[n].cache], l = r._rgba = i._rgba, !1) : O
        }), l.length ? ("0,0,0,0" === l.join() && P.extend(l, A.transparent), r) : A[o]
    }

    function Z(t, e, i) {
        return 6 * (i = (i + 1) % 1) < 1 ? t + 6 * (e - t) * i : 2 * i < 1 ? e : 3 * i < 2 ? t + 6 * (e - t) * (2 / 3 - i) : t
    }

    x.effects = {effect: {}}, H = /^([\-+])=\s*(\d+\.?\d*)/, N = [{
        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
            return [t[1], t[2], t[3], t[4]]
        }
    }, {
        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        parse: function (t) {
            return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
        }
    }, {
        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
            return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
        }
    }, {
        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
            return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
        }
    }, {
        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
        space: "hsla",
        parse: function (t) {
            return [t[1], t[2] / 100, t[3] / 100, t[4]]
        }
    }], Y = (P = q).Color = function (t, e, i, s) {
        return new P.Color.fn.parse(t, e, i, s)
    }, F = {
        rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}},
        hsla: {
            props: {
                hue: {idx: 0, type: "degrees"},
                saturation: {idx: 1, type: "percent"},
                lightness: {idx: 2, type: "percent"}
            }
        }
    }, E = {
        byte: {floor: !0, max: 255},
        percent: {max: 1},
        degrees: {mod: 360, floor: !0}
    }, j = Y.support = {}, L = P("<p>")[0], z = P.each, L.style.cssText = "background-color:rgba(1,1,1,.5)", j.rgba = -1 < L.style.backgroundColor.indexOf("rgba"), z(F, function (t, e) {
        e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
    }), Y.fn = P.extend(Y.prototype, {
        parse: function (a, t, e, i) {
            if (a === O) return this._rgba = [null, null, null, null], this;
            (a.jquery || a.nodeType) && (a = P(a).css(t), t = O);
            var n = this, s = P.type(a), o = this._rgba = [];
            return t !== O && (a = [a, t, e, i], s = "array"), "string" === s ? this.parse(X(a) || A._default) : "array" === s ? (z(F.rgba.props, function (t, e) {
                o[e.idx] = J(a[e.idx], e)
            }), this) : "object" === s ? (z(F, a instanceof Y ? function (t, e) {
                a[e.cache] && (n[e.cache] = a[e.cache].slice())
            } : function (t, i) {
                var s = i.cache;
                z(i.props, function (t, e) {
                    if (!n[s] && i.to) {
                        if ("alpha" === t || null == a[t]) return;
                        n[s] = i.to(n._rgba)
                    }
                    n[s][e.idx] = J(a[t], e, !0)
                }), n[s] && P.inArray(null, n[s].slice(0, 3)) < 0 && (n[s][3] = 1, i.from && (n._rgba = i.from(n[s])))
            }), this) : O
        }, is: function (t) {
            var a = Y(t), n = !0, o = this;
            return z(F, function (t, e) {
                var i, s = a[e.cache];
                return s && (i = o[e.cache] || e.to && e.to(o._rgba) || [], z(e.props, function (t, e) {
                    return null != s[e.idx] ? n = s[e.idx] === i[e.idx] : O
                })), n
            }), n
        }, _space: function () {
            var i = [], s = this;
            return z(F, function (t, e) {
                s[e.cache] && i.push(t)
            }), i.pop()
        }, transition: function (t, o) {
            var e = (c = Y(t))._space(), i = F[e], s = 0 === this.alpha() ? Y("transparent") : this,
                r = s[i.cache] || i.to(s._rgba), l = r.slice(), c = c[i.cache];
            return z(i.props, function (t, e) {
                var i = e.idx, s = r[i], a = c[i], n = E[e.type] || {};
                null !== a && (null === s ? l[i] = a : (n.mod && (n.mod / 2 < a - s ? s += n.mod : n.mod / 2 < s - a && (s -= n.mod)), l[i] = J((a - s) * o + s, e)))
            }), this[e](l)
        }, blend: function (t) {
            if (1 === this._rgba[3]) return this;
            var e = this._rgba.slice(), i = e.pop(), s = Y(t)._rgba;
            return Y(P.map(e, function (t, e) {
                return (1 - i) * s[e] + i * t
            }))
        }, toRgbaString: function () {
            var t = "rgba(", e = P.map(this._rgba, function (t, e) {
                return null == t ? 2 < e ? 1 : 0 : t
            });
            return 1 === e[3] && (e.pop(), t = "rgb("), t + e.join() + ")"
        }, toHslaString: function () {
            var t = "hsla(", e = P.map(this.hsla(), function (t, e) {
                return null == t && (t = 2 < e ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
            });
            return 1 === e[3] && (e.pop(), t = "hsl("), t + e.join() + ")"
        }, toHexString: function (t) {
            var e = this._rgba.slice(), i = e.pop();
            return t && e.push(~~(255 * i)), "#" + P.map(e, function (t) {
                return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
            }).join("")
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }), Y.fn.parse.prototype = Y.fn, F.hsla.to = function (t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 255, i = t[1] / 255, s = t[2] / 255, a = t[3], n = Math.max(e, i, s), o = Math.min(e, i, s),
            r = n - o, l = n + o, c = .5 * l,
            h = o === n ? 0 : e === n ? 60 * (i - s) / r + 360 : i === n ? 60 * (s - e) / r + 120 : 60 * (e - i) / r + 240,
            d = 0 == r ? 0 : c <= .5 ? r / l : r / (2 - l);
        return [Math.round(h) % 360, d, c, null == a ? 1 : a]
    }, F.hsla.from = function (t) {
        if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
        var e = t[0] / 360, i = t[1], s = t[2], a = t[3], n = s <= .5 ? s * (1 + i) : s + i - s * i, o = 2 * s - n;
        return [Math.round(255 * Z(o, n, e + 1 / 3)), Math.round(255 * Z(o, n, e)), Math.round(255 * Z(o, n, e - 1 / 3)), a]
    }, z(F, function (l, t) {
        var i = t.props, o = t.cache, r = t.to, c = t.from;
        Y.fn[l] = function (t) {
            if (r && !this[o] && (this[o] = r(this._rgba)), t === O) return this[o].slice();
            var e, s = P.type(t), a = "array" === s || "object" === s ? t : arguments, n = this[o].slice();
            return z(i, function (t, e) {
                var i = a["object" === s ? t : e.idx];
                null == i && (i = n[e.idx]), n[e.idx] = J(i, e)
            }), c ? ((e = Y(c(n)))[o] = n, e) : Y(n)
        }, z(i, function (o, r) {
            Y.fn[o] || (Y.fn[o] = function (t) {
                var e, i = P.type(t), s = "alpha" === o ? this._hsla ? "hsla" : "rgba" : l, a = this[s](), n = a[r.idx];
                return "undefined" === i ? n : ("function" === i && (t = t.call(this, n), i = P.type(t)), null == t && r.empty ? this : ("string" === i && ((e = H.exec(t)) && (t = n + parseFloat(e[2]) * ("+" === e[1] ? 1 : -1))), a[r.idx] = t, this[s](a)))
            })
        })
    }), Y.hook = function (t) {
        var e = t.split(" ");
        z(e, function (t, n) {
            P.cssHooks[n] = {
                set: function (t, e) {
                    var i, s, a = "";
                    if ("transparent" !== e && ("string" !== P.type(e) || (i = X(e)))) {
                        if (e = Y(i || e), !j.rgba && 1 !== e._rgba[3]) {
                            for (s = "backgroundColor" === n ? t.parentNode : t; ("" === a || "transparent" === a) && s && s.style;) try {
                                a = P.css(s, "backgroundColor"), s = s.parentNode
                            } catch (t) {
                            }
                            e = e.blend(a && "transparent" !== a ? a : "_default")
                        }
                        e = e.toRgbaString()
                    }
                    try {
                        t.style[n] = e
                    } catch (t) {
                    }
                }
            }, P.fx.step[n] = function (t) {
                t.colorInit || (t.start = Y(t.elem, n), t.end = Y(t.end), t.colorInit = !0), P.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }, Y.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), P.cssHooks.borderColor = {
        expand: function (i) {
            var s = {};
            return z(["Top", "Right", "Bottom", "Left"], function (t, e) {
                s["border" + e + "Color"] = i
            }), s
        }
    }, A = P.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }, M = ["add", "remove", "toggle"], I = {
        border: 1,
        borderBottom: 1,
        borderColor: 1,
        borderLeft: 1,
        borderRight: 1,
        borderTop: 1,
        borderWidth: 1,
        margin: 1,
        padding: 1
    }, x.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, e) {
        x.fx.step[e] = function (t) {
            ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (q.style(t.elem, e, t.end), t.setAttr = !0)
        }
    }), x.fn.addBack || (x.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), x.effects.animateClass = function (a, t, e, i) {
        var n = x.speed(t, e, i);
        return this.queue(function () {
            var i = x(this), t = i.attr("class") || "",
                e = (e = n.children ? i.find("*").addBack() : i).map(function () {
                    return {el: x(this), start: K(this)}
                }), s = function () {
                    x.each(M, function (t, e) {
                        a[e] && i[e + "Class"](a[e])
                    })
                };
            s(), e = e.map(function () {
                return this.end = K(this.el[0]), this.diff = function (t, e) {
                    var i, s, a = {};
                    for (i in e) s = e[i], t[i] !== s && (I[i] || !x.fx.step[i] && isNaN(parseFloat(s)) || (a[i] = s));
                    return a
                }(this.start, this.end), this
            }), i.attr("class", t), e = e.map(function () {
                var t = this, e = x.Deferred(), i = x.extend({}, n, {
                    queue: !1, complete: function () {
                        e.resolve(t)
                    }
                });
                return this.el.animate(this.diff, i), e.promise()
            }), x.when.apply(x, e.get()).done(function () {
                s(), x.each(arguments, function () {
                    var e = this.el;
                    x.each(this.diff, function (t) {
                        e.css(t, "")
                    })
                }), n.complete.call(i[0])
            })
        })
    }, x.fn.extend({
        addClass: (S = x.fn.addClass, function (t, e, i, s) {
            return e ? x.effects.animateClass.call(this, {add: t}, e, i, s) : S.apply(this, arguments)
        }), removeClass: (w = x.fn.removeClass, function (t, e, i, s) {
            return 1 < arguments.length ? x.effects.animateClass.call(this, {remove: t}, e, i, s) : w.apply(this, arguments)
        }), toggleClass: (y = x.fn.toggleClass, function (t, e, i, s, a) {
            return "boolean" == typeof e || void 0 === e ? i ? x.effects.animateClass.call(this, e ? {add: t} : {remove: t}, i, s, a) : y.apply(this, arguments) : x.effects.animateClass.call(this, {toggle: t}, e, i, s)
        }), switchClass: function (t, e, i, s, a) {
            return x.effects.animateClass.call(this, {add: e, remove: t}, i, s, a)
        }
    }), x.expr && x.expr.filters && x.expr.filters.animated && (x.expr.filters.animated = (b = x.expr.filters.animated, function (t) {
        return !!x(t).data(B) || b(t)
    })), !1 !== x.uiBackCompat && x.extend(x.effects, {
        save: function (t, e) {
            for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data(W + e[i], t[0].style[e[i]])
        }, restore: function (t, e) {
            for (var i, s = 0, a = e.length; s < a; s++) null !== e[s] && (i = t.data(W + e[s]), t.css(e[s], i))
        }, setMode: function (t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
        }, createWrapper: function (i) {
            if (i.parent().is(".ui-effects-wrapper")) return i.parent();
            var s = {width: i.outerWidth(!0), height: i.outerHeight(!0), float: i.css("float")},
                t = x("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), e = {width: i.width(), height: i.height()}, a = document.activeElement;
            try {
                a.id
            } catch (t) {
                a = document.body
            }
            return i.wrap(t), i[0] !== a && !x.contains(i[0], a) || x(a).trigger("focus"), t = i.parent(), "static" === i.css("position") ? (t.css({position: "relative"}), i.css({position: "relative"})) : (x.extend(s, {
                position: i.css("position"),
                zIndex: i.css("z-index")
            }), x.each(["top", "left", "bottom", "right"], function (t, e) {
                s[e] = i.css(e), isNaN(parseInt(s[e], 10)) && (s[e] = "auto")
            }), i.css({
                position: "relative",
                top: 0,
                left: 0,
                right: "auto",
                bottom: "auto"
            })), i.css(e), t.css(s).show()
        }, removeWrapper: function (t) {
            var e = document.activeElement;
            return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), t[0] !== e && !x.contains(t[0], e) || x(e).trigger("focus")), t
        }
    }), x.extend(x.effects, {
        version: "1.12.1", define: function (t, e, i) {
            return i || (i = e, e = "effect"), x.effects.effect[t] = i, x.effects.effect[t].mode = e, i
        }, scaledDimensions: function (t, e, i) {
            if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
            var s = "horizontal" !== i ? (e || 100) / 100 : 1, a = "vertical" !== i ? (e || 100) / 100 : 1;
            return {
                height: t.height() * a,
                width: t.width() * s,
                outerHeight: t.outerHeight() * a,
                outerWidth: t.outerWidth() * s
            }
        }, clipToBox: function (t) {
            return {
                width: t.clip.right - t.clip.left,
                height: t.clip.bottom - t.clip.top,
                left: t.clip.left,
                top: t.clip.top
            }
        }, unshift: function (t, e, i) {
            var s = t.queue();
            1 < e && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
        }, saveStyle: function (t) {
            t.data(R, t[0].style.cssText)
        }, restoreStyle: function (t) {
            t[0].style.cssText = t.data(R) || "", t.removeData(R)
        }, mode: function (t, e) {
            var i = t.is(":hidden");
            return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
        }, getBaseline: function (t, e) {
            var i, s;
            switch (t[0]) {
                case"top":
                    i = 0;
                    break;
                case"middle":
                    i = .5;
                    break;
                case"bottom":
                    i = 1;
                    break;
                default:
                    i = t[0] / e.height
            }
            switch (t[1]) {
                case"left":
                    s = 0;
                    break;
                case"center":
                    s = .5;
                    break;
                case"right":
                    s = 1;
                    break;
                default:
                    s = t[1] / e.width
            }
            return {x: s, y: i}
        }, createPlaceholder: function (t) {
            var e, i = t.css("position"), s = t.position();
            return t.css({
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(i) && (i = "absolute", e = x("<" + t[0].nodeName + ">").insertAfter(t).css({
                display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                visibility: "hidden",
                marginTop: t.css("marginTop"),
                marginBottom: t.css("marginBottom"),
                marginLeft: t.css("marginLeft"),
                marginRight: t.css("marginRight"),
                float: t.css("float")
            }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(W + "placeholder", e)), t.css({
                position: i,
                left: s.left,
                top: s.top
            }), e
        }, removePlaceholder: function (t) {
            var e = W + "placeholder", i = t.data(e);
            i && (i.remove(), t.removeData(e))
        }, cleanUp: function (t) {
            x.effects.restoreStyle(t), x.effects.removePlaceholder(t)
        }, setTransition: function (s, t, a, n) {
            return n = n || {}, x.each(t, function (t, e) {
                var i = s.cssUnit(e);
                0 < i[0] && (n[e] = i[0] * a + i[1])
            }), n
        }
    }), x.fn.extend({
        effect: function () {
            function t(t) {
                function e() {
                    x.isFunction(r) && r.call(i[0]), x.isFunction(t) && t()
                }

                var i = x(this);
                s.mode = c.shift(), !1 === x.uiBackCompat || n ? "none" === s.mode ? (i[l](), e()) : a.call(i[0], s, function () {
                    i.removeData(B), x.effects.cleanUp(i), "hide" === s.mode && i.hide(), e()
                }) : (i.is(":hidden") ? "hide" === l : "show" === l) ? (i[l](), e()) : a.call(i[0], s, e)
            }

            function e(t) {
                var e = x(this), i = x.effects.mode(e, l) || n;
                e.data(B, !0), c.push(i), n && ("show" === i || i === n && "hide" === i) && e.show(), n && "none" === i || x.effects.saveStyle(e), x.isFunction(t) && t()
            }

            var s = U.apply(this, arguments), a = x.effects.effect[s.effect], n = a.mode, i = s.queue, o = i || "fx",
                r = s.complete, l = s.mode, c = [];
            return x.fx.off || !a ? l ? this[l](s.duration, r) : this.each(function () {
                r && r.call(this)
            }) : !1 === i ? this.each(e).each(t) : this.queue(o, e).queue(o, t)
        }, show: (v = x.fn.show, function (t) {
            if (V(t)) return v.apply(this, arguments);
            var e = U.apply(this, arguments);
            return e.mode = "show", this.effect.call(this, e)
        }), hide: (g = x.fn.hide, function (t) {
            if (V(t)) return g.apply(this, arguments);
            var e = U.apply(this, arguments);
            return e.mode = "hide", this.effect.call(this, e)
        }), toggle: (_ = x.fn.toggle, function (t) {
            if (V(t) || "boolean" == typeof t) return _.apply(this, arguments);
            var e = U.apply(this, arguments);
            return e.mode = "toggle", this.effect.call(this, e)
        }), cssUnit: function (t) {
            var i = this.css(t), s = [];
            return x.each(["em", "px", "%", "pt"], function (t, e) {
                0 < i.indexOf(e) && (s = [parseFloat(i), e])
            }), s
        }, cssClip: function (t) {
            return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : G(this.css("clip"), this)
        }, transfer: function (t, e) {
            var i = x(this), s = x(t.to), a = "fixed" === s.css("position"), n = x("body"), o = a ? n.scrollTop() : 0,
                r = a ? n.scrollLeft() : 0, l = s.offset(),
                c = {top: l.top - o, left: l.left - r, height: s.innerHeight(), width: s.innerWidth()}, h = i.offset(),
                d = x("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                    top: h.top - o,
                    left: h.left - r,
                    height: i.innerHeight(),
                    width: i.innerWidth(),
                    position: a ? "fixed" : "absolute"
                }).animate(c, t.duration, t.easing, function () {
                    d.remove(), x.isFunction(e) && e()
                })
        }
    }), x.fx.step.clip = function (t) {
        t.clipInit || (t.start = x(t.elem).cssClip(), "string" == typeof t.end && (t.end = G(t.end, t.elem)), t.clipInit = !0), x(t.elem).cssClip({
            top: t.pos * (t.end.top - t.start.top) + t.start.top,
            right: t.pos * (t.end.right - t.start.right) + t.start.right,
            bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
            left: t.pos * (t.end.left - t.start.left) + t.start.left
        })
    }, m = {}, x.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, t) {
        m[t] = function (t) {
            return Math.pow(t, e + 2)
        }
    }), x.extend(m, {
        Sine: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, Elastic: function (t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        }, Back: function (t) {
            return t * t * (3 * t - 2)
        }, Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }), x.each(m, function (t, e) {
        x.easing["easeIn" + t] = e, x.easing["easeOut" + t] = function (t) {
            return 1 - e(1 - t)
        }, x.easing["easeInOut" + t] = function (t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(-2 * t + 2) / 2
        }
    });
    var Q, tt;
    x.effects;
    x.effects.define("blind", "hide", function (t, e) {
        var i = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            }, s = x(this), a = t.direction || "up", n = s.cssClip(), o = {clip: x.extend({}, n)},
            r = x.effects.createPlaceholder(s);
        o.clip[i[a][0]] = o.clip[i[a][1]], "show" === t.mode && (s.cssClip(o.clip), r && r.css(x.effects.clipToBox(o)), o.clip = n), r && r.animate(x.effects.clipToBox(o), t.duration, t.easing), s.animate(o, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), x.effects.define("bounce", function (t, e) {
        var i, s, a, n = x(this), o = t.mode, r = "hide" === o, l = "show" === o, c = t.direction || "up",
            h = t.distance, d = t.times || 5, u = 2 * d + (l || r ? 1 : 0), p = t.duration / u, f = t.easing,
            m = "up" === c || "down" === c ? "top" : "left", _ = "up" === c || "left" === c, g = 0,
            v = n.queue().length;
        for (x.effects.createPlaceholder(n), a = n.css(m), h = h || n["top" == m ? "outerHeight" : "outerWidth"]() / 3, l && ((s = {opacity: 1})[m] = a, n.css("opacity", 0).css(m, _ ? 2 * -h : 2 * h).animate(s, p, f)), r && (h /= Math.pow(2, d - 1)), (s = {})[m] = a; g < d; g++) (i = {})[m] = (_ ? "-=" : "+=") + h, n.animate(i, p, f).animate(s, p, f), h = r ? 2 * h : h / 2;
        r && ((i = {opacity: 0})[m] = (_ ? "-=" : "+=") + h, n.animate(i, p, f)), n.queue(e), x.effects.unshift(n, v, 1 + u)
    }), x.effects.define("clip", "hide", function (t, e) {
        var i = {}, s = x(this), a = t.direction || "vertical", n = "both" === a, o = n || "horizontal" === a,
            r = n || "vertical" === a, l = s.cssClip();
        i.clip = {
            top: r ? (l.bottom - l.top) / 2 : l.top,
            right: o ? (l.right - l.left) / 2 : l.right,
            bottom: r ? (l.bottom - l.top) / 2 : l.bottom,
            left: o ? (l.right - l.left) / 2 : l.left
        }, x.effects.createPlaceholder(s), "show" === t.mode && (s.cssClip(i.clip), i.clip = l), s.animate(i, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), x.effects.define("drop", "hide", function (t, e) {
        var i, s = x(this), a = "show" === t.mode, n = t.direction || "left",
            o = "up" === n || "down" === n ? "top" : "left", r = "up" === n || "left" === n ? "-=" : "+=",
            l = "+=" == r ? "-=" : "+=", c = {opacity: 0};
        x.effects.createPlaceholder(s), i = t.distance || s["top" == o ? "outerHeight" : "outerWidth"](!0) / 2, c[o] = r + i, a && (s.css(c), c[o] = l + i, c.opacity = 1), s.animate(c, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), x.effects.define("explode", "hide", function (t, e) {
        function i() {
            m.push(this), m.length === l * c && (h.css({visibility: "visible"}), x(m).remove(), e())
        }

        for (var s, a, n, o, r, l = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = l, h = x(this), d = "show" === t.mode, u = h.show().css("visibility", "hidden").offset(), p = Math.ceil(h.outerWidth() / c), f = Math.ceil(h.outerHeight() / l), m = [], _ = 0; _ < l; _++) for (n = u.top + _ * f, r = _ - (l - 1) / 2, s = 0; s < c; s++) a = u.left + s * p, o = s - (c - 1) / 2, h.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -s * p,
            top: -_ * f
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: p,
            height: f,
            left: a + (d ? o * p : 0),
            top: n + (d ? r * f : 0),
            opacity: d ? 0 : 1
        }).animate({
            left: a + (d ? 0 : o * p),
            top: n + (d ? 0 : r * f),
            opacity: d ? 1 : 0
        }, t.duration || 500, t.easing, i)
    }), x.effects.define("fade", "toggle", function (t, e) {
        var i = "show" === t.mode;
        x(this).css("opacity", i ? 0 : 1).animate({opacity: i ? 1 : 0}, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), x.effects.define("fold", "hide", function (e, t) {
        var i = x(this), s = e.mode, a = "show" === s, n = "hide" === s, o = e.size || 15, r = /([0-9]+)%/.exec(o),
            l = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"], c = e.duration / 2,
            h = x.effects.createPlaceholder(i), d = i.cssClip(), u = {clip: x.extend({}, d)},
            p = {clip: x.extend({}, d)}, f = [d[l[0]], d[l[1]]], m = i.queue().length;
        r && (o = parseInt(r[1], 10) / 100 * f[n ? 0 : 1]), u.clip[l[0]] = o, p.clip[l[0]] = o, p.clip[l[1]] = 0, a && (i.cssClip(p.clip), h && h.css(x.effects.clipToBox(p)), p.clip = d), i.queue(function (t) {
            h && h.animate(x.effects.clipToBox(u), c, e.easing).animate(x.effects.clipToBox(p), c, e.easing), t()
        }).animate(u, c, e.easing).animate(p, c, e.easing).queue(t), x.effects.unshift(i, m, 4)
    }), x.effects.define("highlight", "show", function (t, e) {
        var i = x(this), s = {backgroundColor: i.css("backgroundColor")};
        "hide" === t.mode && (s.opacity = 0), x.effects.saveStyle(i), i.css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(s, {queue: !1, duration: t.duration, easing: t.easing, complete: e})
    }), x.effects.define("size", function (a, e) {
        var t, n, i, s = x(this), o = ["fontSize"],
            r = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            l = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], c = a.mode, h = "effect" !== c,
            d = a.scale || "both", u = a.origin || ["middle", "center"], p = s.css("position"), f = s.position(),
            m = x.effects.scaledDimensions(s), _ = a.from || m, g = a.to || x.effects.scaledDimensions(s, 0);
        x.effects.createPlaceholder(s), "show" === c && (i = _, _ = g, g = i), n = {
            from: {
                y: _.height / m.height,
                x: _.width / m.width
            }, to: {y: g.height / m.height, x: g.width / m.width}
        }, "box" !== d && "both" !== d || (n.from.y !== n.to.y && (_ = x.effects.setTransition(s, r, n.from.y, _), g = x.effects.setTransition(s, r, n.to.y, g)), n.from.x !== n.to.x && (_ = x.effects.setTransition(s, l, n.from.x, _), g = x.effects.setTransition(s, l, n.to.x, g))), "content" !== d && "both" !== d || n.from.y === n.to.y || (_ = x.effects.setTransition(s, o, n.from.y, _), g = x.effects.setTransition(s, o, n.to.y, g)), u && (t = x.effects.getBaseline(u, m), _.top = (m.outerHeight - _.outerHeight) * t.y + f.top, _.left = (m.outerWidth - _.outerWidth) * t.x + f.left, g.top = (m.outerHeight - g.outerHeight) * t.y + f.top, g.left = (m.outerWidth - g.outerWidth) * t.x + f.left), s.css(_), "content" !== d && "both" !== d || (r = r.concat(["marginTop", "marginBottom"]).concat(o), l = l.concat(["marginLeft", "marginRight"]), s.find("*[width]").each(function () {
            var t = x(this), e = x.effects.scaledDimensions(t), i = {
                height: e.height * n.from.y,
                width: e.width * n.from.x,
                outerHeight: e.outerHeight * n.from.y,
                outerWidth: e.outerWidth * n.from.x
            }, s = {
                height: e.height * n.to.y,
                width: e.width * n.to.x,
                outerHeight: e.height * n.to.y,
                outerWidth: e.width * n.to.x
            };
            n.from.y !== n.to.y && (i = x.effects.setTransition(t, r, n.from.y, i), s = x.effects.setTransition(t, r, n.to.y, s)), n.from.x !== n.to.x && (i = x.effects.setTransition(t, l, n.from.x, i), s = x.effects.setTransition(t, l, n.to.x, s)), h && x.effects.saveStyle(t), t.css(i), t.animate(s, a.duration, a.easing, function () {
                h && x.effects.restoreStyle(t)
            })
        })), s.animate(g, {
            queue: !1, duration: a.duration, easing: a.easing, complete: function () {
                var t = s.offset();
                0 === g.opacity && s.css("opacity", _.opacity), h || (s.css("position", "static" === p ? "relative" : p).offset(t), x.effects.saveStyle(s)), e()
            }
        })
    }), x.effects.define("scale", function (t, e) {
        var i = x(this), s = t.mode,
            a = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) || "effect" !== s ? 0 : 100),
            n = x.extend(!0, {
                from: x.effects.scaledDimensions(i),
                to: x.effects.scaledDimensions(i, a, t.direction || "both"),
                origin: t.origin || ["middle", "center"]
            }, t);
        t.fade && (n.from.opacity = 1, n.to.opacity = 0), x.effects.effect.size.call(this, n, e)
    }), x.effects.define("puff", "hide", function (t, e) {
        var i = x.extend(!0, {}, t, {fade: !0, percent: parseInt(t.percent, 10) || 150});
        x.effects.effect.scale.call(this, i, e)
    }), x.effects.define("pulsate", "show", function (t, e) {
        var i = x(this), s = t.mode, a = "show" === s, n = a || "hide" === s, o = 2 * (t.times || 5) + (n ? 1 : 0),
            r = t.duration / o, l = 0, c = 1, h = i.queue().length;
        for (!a && i.is(":visible") || (i.css("opacity", 0).show(), l = 1); c < o; c++) i.animate({opacity: l}, r, t.easing), l = 1 - l;
        i.animate({opacity: l}, r, t.easing), i.queue(e), x.effects.unshift(i, h, 1 + o)
    }), x.effects.define("shake", function (t, e) {
        var i = 1, s = x(this), a = t.direction || "left", n = t.distance || 20, o = t.times || 3, r = 2 * o + 1,
            l = Math.round(t.duration / r), c = "up" === a || "down" === a ? "top" : "left",
            h = "up" === a || "left" === a, d = {}, u = {}, p = {}, f = s.queue().length;
        for (x.effects.createPlaceholder(s), d[c] = (h ? "-=" : "+=") + n, u[c] = (h ? "+=" : "-=") + 2 * n, p[c] = (h ? "-=" : "+=") + 2 * n, s.animate(d, l, t.easing); i < o; i++) s.animate(u, l, t.easing).animate(p, l, t.easing);
        s.animate(u, l, t.easing).animate(d, l / 2, t.easing).queue(e), x.effects.unshift(s, f, 1 + r)
    }), x.effects.define("slide", "show", function (t, e) {
        var i, s, a = x(this),
            n = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
            o = t.mode, r = t.direction || "left", l = "up" === r || "down" === r ? "top" : "left",
            c = "up" === r || "left" === r, h = t.distance || a["top" == l ? "outerHeight" : "outerWidth"](!0), d = {};
        x.effects.createPlaceholder(a), i = a.cssClip(), s = a.position()[l], d[l] = (c ? -1 : 1) * h + s, d.clip = a.cssClip(), d.clip[n[r][1]] = d.clip[n[r][0]], "show" === o && (a.cssClip(d.clip), a.css(l, d[l]), d.clip = i, d[l] = s), a.animate(d, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: e
        })
    }), !1 !== x.uiBackCompat && x.effects.define("transfer", function (t, e) {
        x(this).transfer(t, e)
    }), x.ui.focusable = function (t, e) {
        var i, s, a, n, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = (i = t.parentNode).name, !(!t.href || !s || "map" !== i.nodeName.toLowerCase()) && (0 < (a = x("img[usemap='#" + s + "']")).length && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(r) ? (n = !t.disabled) && ((o = x(t).closest("fieldset")[0]) && (n = !o.disabled)) : n = "a" === r && t.href || e, n && x(t).is(":visible") && function (t) {
            for (var e = t.css("visibility"); "inherit" === e;) e = (t = t.parent()).css("visibility");
            return "hidden" !== e
        }(x(t)))
    }, x.extend(x.expr[":"], {
        focusable: function (t) {
            return x.ui.focusable(t, null != x.attr(t, "tabindex"))
        }
    }), x.ui.focusable, x.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : x(this[0].form)
    }, x.ui.formResetMixin = {
        _formResetHandler: function () {
            var e = x(this);
            setTimeout(function () {
                var t = e.data("ui-form-reset-instances");
                x.each(t, function () {
                    this.refresh()
                })
            })
        }, _bindFormResetHandler: function () {
            var t;
            this.form = this.element.form(), this.form.length && ((t = this.form.data("ui-form-reset-instances") || []).length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t))
        }, _unbindFormResetHandler: function () {
            var t;
            this.form.length && ((t = this.form.data("ui-form-reset-instances")).splice(x.inArray(this, t), 1), t.length ? this.form.data("ui-form-reset-instances", t) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))
        }
    }, "1.7" === x.fn.jquery.substring(0, 3) && (x.each(["Width", "Height"], function (t, i) {
        function s(t, e, i, s) {
            return x.each(a, function () {
                e -= parseFloat(x.css(t, "padding" + this)) || 0, i && (e -= parseFloat(x.css(t, "border" + this + "Width")) || 0), s && (e -= parseFloat(x.css(t, "margin" + this)) || 0)
            }), e
        }

        var a = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], n = i.toLowerCase(), o = {
            innerWidth: x.fn.innerWidth,
            innerHeight: x.fn.innerHeight,
            outerWidth: x.fn.outerWidth,
            outerHeight: x.fn.outerHeight
        };
        x.fn["inner" + i] = function (t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function () {
                x(this).css(n, s(this, t) + "px")
            })
        }, x.fn["outer" + i] = function (t, e) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function () {
                x(this).css(n, s(this, t, !0, e) + "px")
            })
        }
    }), x.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), x.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, x.ui.escapeSelector = (tt = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, function (t) {
        return t.replace(tt, "\\$1")
    }), x.fn.labels = function () {
        var t, e, i, s, a;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), (i = this.attr("id")) && (a = (t = this.eq(0).parents().last()).add(t.length ? t.siblings() : this.siblings()), e = "label[for='" + x.ui.escapeSelector(i) + "']", s = s.add(a.find(e).addBack(e))), this.pushStack(s))
    }, x.fn.scrollParent = function (t) {
        var e = this.css("position"), i = "absolute" === e, s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            a = this.parents().filter(function () {
                var t = x(this);
                return (!i || "static" !== t.css("position")) && s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
        return "fixed" !== e && a.length ? a : x(this[0].ownerDocument || document)
    }, x.extend(x.expr[":"], {
        tabbable: function (t) {
            var e = x.attr(t, "tabindex"), i = null != e;
            return (!i || 0 <= e) && x.ui.focusable(t, i)
        }
    }), x.fn.extend({
        uniqueId: (Q = 0, function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++Q)
            })
        }), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && x(this).removeAttr("id")
            })
        }
    }), x.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var t = this.options;
            this.prevShow = this.prevHide = x(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), t.collapsible || !1 !== t.active && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {header: this.active, panel: this.active.length ? this.active.next() : x()}
        },
        _createIcons: function () {
            var t, e, i = this.options.icons;
            i && (t = x("<span>"), this._addClass(t, "ui-accordion-header-icon", "ui-icon " + i.header), t.prependTo(this.headers), e = this.active.children(".ui-accordion-header-icon"), this._removeClass(e, i.header)._addClass(e, null, i.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void ("icons" === t && (this._destroyIcons(), e && this._createIcons())))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function (t) {
            if (!t.altKey && !t.ctrlKey) {
                var e = x.ui.keyCode, i = this.headers.length, s = this.headers.index(t.target), a = !1;
                switch (t.keyCode) {
                    case e.RIGHT:
                    case e.DOWN:
                        a = this.headers[(s + 1) % i];
                        break;
                    case e.LEFT:
                    case e.UP:
                        a = this.headers[(s - 1 + i) % i];
                        break;
                    case e.SPACE:
                    case e.ENTER:
                        this._eventHandler(t);
                        break;
                    case e.HOME:
                        a = this.headers[0];
                        break;
                    case e.END:
                        a = this.headers[i - 1]
                }
                a && (x(t.target).attr("tabIndex", -1), x(a).attr("tabIndex", 0), x(a).trigger("focus"), t.preventDefault())
            }
        },
        _panelKeyDown: function (t) {
            t.keyCode === x.ui.keyCode.UP && t.ctrlKey && x(t.currentTarget).prev().trigger("focus")
        },
        refresh: function () {
            var t = this.options;
            this._processPanels(), !1 === t.active && !0 === t.collapsible || !this.headers.length ? (t.active = !1, this.active = x()) : !1 === t.active ? this._activate(0) : this.active.length && !x.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = x()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function () {
            var i, t = this.options, e = t.heightStyle, s = this.element.parent();
            this.active = this._findActive(t.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                var t = x(this), e = t.uniqueId().attr("id"), i = t.next(), s = i.uniqueId().attr("id");
                t.attr("aria-controls", s), i.attr("aria-labelledby", e)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(t.event), "fill" === e ? (i = s.height(), this.element.siblings(":visible").each(function () {
                var t = x(this), e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.headers.each(function () {
                i -= x(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                x(this).height(Math.max(0, i - x(this).innerHeight() + x(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.headers.next().each(function () {
                var t = x(this).is(":visible");
                t || x(this).show(), i = Math.max(i, x(this).css("height", "").height()), t || x(this).hide()
            }).height(i))
        },
        _activate: function (t) {
            var e = this._findActive(t)[0];
            e !== this.active[0] && (e = e || this.active[0], this._eventHandler({
                target: e,
                currentTarget: e,
                preventDefault: x.noop
            }))
        },
        _findActive: function (t) {
            return "number" == typeof t ? this.headers.eq(t) : x()
        },
        _setupEvents: function (t) {
            var i = {keydown: "_keydown"};
            t && x.each(t.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (t) {
            var e, i, s = this.options, a = this.active, n = x(t.currentTarget), o = n[0] === a[0],
                r = o && s.collapsible, l = r ? x() : n.next(), c = a.next(),
                h = {oldHeader: a, oldPanel: c, newHeader: r ? x() : n, newPanel: l};
            t.preventDefault(), o && !s.collapsible || !1 === this._trigger("beforeActivate", t, h) || (s.active = !r && this.headers.index(n), this.active = o ? x() : n, this._toggle(h), this._removeClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (e = a.children(".ui-accordion-header-icon"), this._removeClass(e, null, s.icons.activeHeader)._addClass(e, null, s.icons.header)), o || (this._removeClass(n, "ui-accordion-header-collapsed")._addClass(n, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = n.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.header)._addClass(i, null, s.icons.activeHeader)), this._addClass(n.next(), "ui-accordion-content-active")))
        },
        _toggle: function (t) {
            var e = t.newPanel, i = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = e, this.prevHide = i, this.options.animate ? this._animate(e, i, t) : (i.hide(), e.show(), this._toggleComplete(t)), i.attr({"aria-hidden": "true"}), i.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), e.length && i.length ? i.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : e.length && this.headers.filter(function () {
                return 0 === parseInt(x(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), e.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function (t, i, e) {
            function s() {
                r._toggleComplete(e)
            }

            var a, n, o, r = this, l = 0, c = t.css("box-sizing"), h = t.length && (!i.length || t.index() < i.index()),
                d = this.options.animate || {}, u = h && d.down || d;
            return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || d.easing, o = o || u.duration || d.duration, i.length ? t.length ? (a = t.show().outerHeight(), i.animate(this.hideProps, {
                duration: o,
                easing: n,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(this.showProps, {
                duration: o, easing: n, complete: s, step: function (t, e) {
                    e.now = Math.round(t), "height" !== e.prop ? "content-box" === c && (l += e.now) : "content" !== r.options.heightStyle && (e.now = Math.round(a - i.outerHeight() - l), l = 0)
                }
            })) : i.animate(this.hideProps, o, n, s) : t.animate(this.showProps, o, n, s)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && e.parent()[0].className, this._trigger("activate", null, t)
        }
    }), x.ui.safeActiveElement = function (e) {
        var i;
        try {
            i = e.activeElement
        } catch (t) {
            i = e.body
        }
        return (i = i || e.body).nodeName || (i = e.body), i
    }, x.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-caret-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item": function (t) {
                    var e = x(t.target), i = x(x.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && e.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), e.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && i.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (t) {
                    var e, i;
                    this.previousFilter || (e = x(t.target).closest(".ui-menu-item"), i = x(t.currentTarget), e[0] === i[0] && (this._removeClass(i.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(t, i)))
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                }, blur: function (t) {
                    this._delay(function () {
                        x.contains(this.element[0], x.ui.safeActiveElement(this.document[0])) || this.collapseAll(t)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            var t = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), t.children().each(function () {
                var t = x(this);
                t.data("ui-menu-submenu-caret") && t.remove()
            })
        },
        _keydown: function (t) {
            var e, i, s, a, n = !0;
            switch (t.keyCode) {
                case x.ui.keyCode.PAGE_UP:
                    this.previousPage(t);
                    break;
                case x.ui.keyCode.PAGE_DOWN:
                    this.nextPage(t);
                    break;
                case x.ui.keyCode.HOME:
                    this._move("first", "first", t);
                    break;
                case x.ui.keyCode.END:
                    this._move("last", "last", t);
                    break;
                case x.ui.keyCode.UP:
                    this.previous(t);
                    break;
                case x.ui.keyCode.DOWN:
                    this.next(t);
                    break;
                case x.ui.keyCode.LEFT:
                    this.collapse(t);
                    break;
                case x.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                    break;
                case x.ui.keyCode.ENTER:
                case x.ui.keyCode.SPACE:
                    this._activate(t);
                    break;
                case x.ui.keyCode.ESCAPE:
                    this.collapse(t);
                    break;
                default:
                    n = !1, i = this.previousFilter || "", a = !1, s = 96 <= t.keyCode && t.keyCode <= 105 ? "" + (t.keyCode - 96) : String.fromCharCode(t.keyCode), clearTimeout(this.filterTimer), s === i ? a = !0 : s = i + s, e = this._filterMenuItems(s), (e = a && -1 !== e.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : e).length || (s = String.fromCharCode(t.keyCode), e = this._filterMenuItems(s)), e.length ? (this.focus(t, e), this.previousFilter = s, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            n && t.preventDefault()
        },
        _activate: function (t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var t, e, i, s, a = this, n = this.options.icons.submenu, o = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), e = o.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var t = x(this), e = t.prev(), i = x("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(i, "ui-menu-icon", "ui-icon " + n), e.attr("aria-haspopup", "true").prepend(i), t.attr("aria-labelledby", e.attr("id"))
            }), this._addClass(e, "ui-menu", "ui-widget ui-widget-content ui-front"), (t = o.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
                var t = x(this);
                a._isDivider(t) && a._addClass(t, "ui-menu-divider", "ui-widget-content")
            }), s = (i = t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(i, "ui-menu-item")._addClass(s, "ui-menu-item-wrapper"), t.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !x.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (t, e) {
            var i;
            "icons" === t && (i = this.element.find(".ui-menu-icon"), this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)), this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function (t, e) {
            var i, s, a;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), a = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(a, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (t) {
            var e, i, s, a, n, o;
            this._hasScroll() && (e = parseFloat(x.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(x.css(this.activeMenu[0], "paddingTop")) || 0, s = t.offset().top - this.activeMenu.offset().top - e - i, a = this.activeMenu.scrollTop(), n = this.activeMenu.height(), o = t.outerHeight(), s < 0 ? this.activeMenu.scrollTop(a + s) : n < s + o && this.activeMenu.scrollTop(a + s - n + o))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (t) {
            var e = x.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(e)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var t = i ? this.element : x(e && e.target).closest(this.element.find(".ui-menu"));
                t.length || (t = this.element), this._close(t), this.blur(e), this._removeClass(t.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = t
            }, this.delay)
        },
        _close: function (t) {
            (t = t || (this.active ? this.active.parent() : this.element)).find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function (t) {
            return !x(t.target).closest(".ui-menu").length
        },
        _isDivider: function (t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
        },
        nextPage: function (t) {
            var e, i, s;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return (e = x(this)).offset().top - i - s < 0
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(t)
        },
        previousPage: function (t) {
            var e, i, s;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return 0 < (e = x(this)).offset().top - i + s
            }), this.focus(t, e)) : this.focus(t, this.activeMenu.find(this.options.items).first()))) : void this.next(t)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (t) {
            this.active = this.active || x(t.target).closest(".ui-menu-item");
            var e = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, e)
        },
        _filterMenuItems: function (t) {
            var e = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), i = RegExp("^" + e, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return i.test(x.trim(x(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }), x.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var i, s, a, t = this.element[0].nodeName.toLowerCase(), e = "textarea" === t, n = "input" === t;
            this.isMultiLine = e || !n && this._isContentEditable(this.element), this.valueMethod = this.element[e || n ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (t) {
                    if (this.element.prop("readOnly")) s = a = i = !0; else {
                        s = a = i = !1;
                        var e = x.ui.keyCode;
                        switch (t.keyCode) {
                            case e.PAGE_UP:
                                i = !0, this._move("previousPage", t);
                                break;
                            case e.PAGE_DOWN:
                                i = !0, this._move("nextPage", t);
                                break;
                            case e.UP:
                                i = !0, this._keyEvent("previous", t);
                                break;
                            case e.DOWN:
                                i = !0, this._keyEvent("next", t);
                                break;
                            case e.ENTER:
                                this.menu.active && (i = !0, t.preventDefault(), this.menu.select(t));
                                break;
                            case e.TAB:
                                this.menu.active && this.menu.select(t);
                                break;
                            case e.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(t), t.preventDefault());
                                break;
                            default:
                                s = !0, this._searchTimeout(t)
                        }
                    }
                }, keypress: function (t) {
                    if (i) return i = !1, void (this.isMultiLine && !this.menu.element.is(":visible") || t.preventDefault());
                    if (!s) {
                        var e = x.ui.keyCode;
                        switch (t.keyCode) {
                            case e.PAGE_UP:
                                this._move("previousPage", t);
                                break;
                            case e.PAGE_DOWN:
                                this._move("nextPage", t);
                                break;
                            case e.UP:
                                this._keyEvent("previous", t);
                                break;
                            case e.DOWN:
                                this._keyEvent("next", t)
                        }
                    }
                }, input: function (t) {
                    return a ? (a = !1, void t.preventDefault()) : void this._searchTimeout(t)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = x("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function (t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, this.element[0] !== x.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                }, menufocus: function (t, e) {
                    var i, s;
                    return this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                        x(t.target).trigger(t.originalEvent)
                    })) : (s = e.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", t, {item: s}) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value), void ((i = e.item.attr("aria-label") || s.value) && x.trim(i).length && (this.liveRegion.children().hide(), x("<div>").text(i).appendTo(this.liveRegion))))
                }, menuselect: function (t, e) {
                    var i = e.item.data("ui-autocomplete-item"), s = this.previous;
                    this.element[0] !== x.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", t, {item: i}) && this._value(i.value), this.term = this._value(), this.close(t), this.selectedItem = i
                }
            }), this.liveRegion = x("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function (t) {
            var e = this.menu.element[0];
            return t.target === this.element[0] || t.target === e || x.contains(e, t.target)
        },
        _closeOnClickOutside: function (t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return (t = t && (t.jquery || t.nodeType ? x(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _initSource: function () {
            var i, s, a = this;
            x.isArray(this.options.source) ? (i = this.options.source, this.source = function (t, e) {
                e(x.ui.autocomplete.filter(i, t.term))
            }) : "string" == typeof this.options.source ? (s = this.options.source, this.source = function (t, e) {
                a.xhr && a.xhr.abort(), a.xhr = x.ajax({
                    url: s, data: t, dataType: "json", success: function (t) {
                        e(t)
                    }, error: function () {
                        e([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (s) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var t = this.term === this._value(), e = this.menu.element.is(":visible"),
                    i = s.altKey || s.ctrlKey || s.metaKey || s.shiftKey;
                t && (!t || e || i) || (this.selectedItem = null, this.search(null, s))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        },
        _response: function () {
            var e = ++this.requestIndex;
            return x.proxy(function (t) {
                e === this.requestIndex && this.__response(t), this.pending--, this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (t) {
            t = t && this._normalize(t), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        },
        _normalize: function (t) {
            return t.length && t[0].label && t[0].value ? t : x.map(t, function (t) {
                return "string" == typeof t ? {label: t, value: t} : x.extend({}, t, {
                    label: t.label || t.value,
                    value: t.value || t.label
                })
            })
        },
        _suggest: function (t) {
            var e = this.menu.element.empty();
            this._renderMenu(e, t), this.isNewMenu = !0, this.menu.refresh(), e.show(), this._resizeMenu(), e.position(x.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"})
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (i, t) {
            var s = this;
            x.each(t, function (t, e) {
                s._renderItemData(i, e)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (t, e) {
            return x("<li>").append(x("<div>").text(e.label)).appendTo(t)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function (t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), x.extend(x.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (t, e) {
            var i = RegExp(x.ui.autocomplete.escapeRegex(e), "i");
            return x.grep(t, function (t) {
                return i.test(t.label || t.value || t)
            })
        }
    }), x.widget("ui.autocomplete", x.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (1 < t ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (t) {
            var e;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (e = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), x("<div>").text(e).appendTo(this.liveRegion))
        }
    }), x.ui.autocomplete;
    var et, it, st = /ui-corner-([a-z]){2,6}/g;
    x.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function () {
            this._enhance()
        },
        _enhance: function () {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function () {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function () {
            var o = this, r = [];
            x.each(this.options.items, function (a, t) {
                var e, n = {};
                return t ? "controlgroupLabel" === a ? ((e = o.element.find(t)).each(function () {
                    var t = x(this);
                    t.children(".ui-controlgroup-label-contents").length || t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), o._addClass(e, null, "ui-widget ui-widget-content ui-state-default"), void (r = r.concat(e.get()))) : void (x.fn[a] && (n = o["_" + a + "Options"] ? o["_" + a + "Options"]("middle") : {classes: {}}, o.element.find(t).each(function () {
                    var t, e = x(this), i = e[a]("instance"), s = x.widget.extend({}, n);
                    "button" === a && e.parent(".ui-spinner").length || ((i = i || e[a]()[a]("instance")) && (s.classes = o._resolveClassesValues(s.classes, i)), e[a](s), t = e[a]("widget"), x.data(t[0], "ui-controlgroup-data", i || e[a]("instance")), r.push(t[0]))
                }))) : void 0
            }), this.childWidgets = x(x.unique(r)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function (e) {
            this.childWidgets.each(function () {
                var t = x(this).data("ui-controlgroup-data");
                t && t[e] && t[e]()
            })
        },
        _updateCornerClass: function (t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function (t, e) {
            var i = "vertical" === this.options.direction, s = {classes: {}};
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s
        },
        _spinnerOptions: function (t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function (t) {
            var e = "vertical" === this.options.direction;
            return {
                width: e && "auto",
                classes: {
                    middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}
                }[t]
            }
        },
        _resolveClassesValues: function (i, s) {
            var a = {};
            return x.each(i, function (t) {
                var e = s.options.classes[t] || "", e = x.trim(e.replace(st, ""));
                a[t] = (e + " " + i[t]).replace(/\s+/g, " ")
            }), a
        },
        _setOption: function (t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function () {
            var a, n = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), a = this.childWidgets, this.options.onlyVisible && (a = a.filter(":visible")), a.length && (x.each(["first", "last"], function (t, e) {
                var i, s = a[e]().data("ui-controlgroup-data");
                s && n["_" + s.widgetName + "Options"] ? ((i = n["_" + s.widgetName + "Options"](1 === a.length ? "only" : e)).classes = n._resolveClassesValues(i.classes, s), s.element[s.widgetName](i)) : n._updateCornerClass(a[e](), e)
            }), this._callChildMethod("refresh"))
        }
    }), x.widget("ui.checkboxradio", [x.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
        },
        _getCreateOptions: function () {
            var t, e, i = this, s = this._super() || {};
            return this._readType(), e = this.element.labels(), this.label = x(e[e.length - 1]), this.label.length || x.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                i.originalLabel += 3 === this.nodeType ? x(this).text() : this.outerHTML
            }), this.originalLabel && (s.label = this.originalLabel), null != (t = this.element[0].disabled) && (s.disabled = t), s
        },
        _create: function () {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function () {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function () {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function () {
            var t = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === t && /radio|checkbox/.test(this.type) || x.error("Can't create checkboxradio on element.nodeName=" + t + " and element.type=" + this.type)
        },
        _enhance: function () {
            this._updateIcon(this.element[0].checked)
        },
        widget: function () {
            return this.label
        },
        _getRadioGroup: function () {
            var t = this.element[0].name, e = "input[name='" + x.ui.escapeSelector(t) + "']";
            return t ? (this.form.length ? x(this.form[0].elements).filter(e) : x(e).filter(function () {
                return 0 === x(this).form().length
            })).not(this.element) : x([])
        },
        _toggleClasses: function () {
            var t = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", t)._toggleClass(this.icon, null, "ui-icon-blank", !t), "radio" === this.type && this._getRadioGroup().each(function () {
                var t = x(this).checkboxradio("instance");
                t && t._removeClass(t.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function (t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function (t) {
            var e = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = x("<span>"), this.iconSpace = x("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (e += t ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, t ? "ui-icon-blank" : "ui-icon-check")) : e += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", e), t || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function () {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function () {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
        }
    }]), x.ui.checkboxradio, x.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {"ui-button": "ui-corner-all"},
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function () {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function () {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function (t) {
                    t.keyCode === x.ui.keyCode.SPACE && (t.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function () {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function (t, e) {
            var i = "iconPosition" !== t, s = i ? this.options.iconPosition : e, a = "top" === s || "bottom" === s;
            this.icon ? i && this._removeClass(this.icon, null, this.options.icon) : (this.icon = x("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), i && this._addClass(this.icon, null, e), this._attachIcon(s), a ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = x("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function () {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function (t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function (t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function (t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function (t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), (this.element[0].disabled = e) && this.element.blur())
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
        }
    }), !1 !== x.uiBackCompat && (x.widget("ui.button", x.ui.button, {
        options: {
            text: !0,
            icons: {primary: null, secondary: null}
        }, _create: function () {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        }, _setOption: function (t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), x.fn.button = (et = x.fn.button, function () {
        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? et.apply(this, arguments) : (x.ui.checkboxradio || x.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
    }), x.fn.buttonset = function () {
        return x.ui.controlgroup || x.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == _typeof(arguments[0]) && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
    }), x.ui.button, x.extend(x.ui, {datepicker: {version: "1.12.1"}}), x.extend(t.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return d(this._defaults, t || {}), this
        },
        _attachDatepicker: function (t, e) {
            var i, s = t.nodeName.toLowerCase(), a = "div" === s || "span" === s;
            t.id || (this.uuid += 1, t.id = "dp" + this.uuid), (i = this._newInst(x(t), a)).settings = x.extend({}, e || {}), "input" === s ? this._connectDatepicker(t, i) : a && this._inlineDatepicker(t, i)
        },
        _newInst: function (t, e) {
            return {
                id: t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: e,
                dpDiv: e ? i(x("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (t, e) {
            var i = x(t);
            e.append = x([]), e.trigger = x([]), i.hasClass(this.markerClassName) || (this._attachments(i, e), i.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(e), x.data(t, "datepicker", e), e.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function (t, e) {
            var i, s, a, n = this._get(e, "appendText"), o = this._get(e, "isRTL");
            e.append && e.append.remove(), n && (e.append = x("<span class='" + this._appendClass + "'>" + n + "</span>"), t[o ? "before" : "after"](e.append)), t.off("focus", this._showDatepicker), e.trigger && e.trigger.remove(), "focus" !== (i = this._get(e, "showOn")) && "both" !== i || t.on("focus", this._showDatepicker), "button" !== i && "both" !== i || (s = this._get(e, "buttonText"), a = this._get(e, "buttonImage"), e.trigger = x(this._get(e, "buttonImageOnly") ? x("<img/>").addClass(this._triggerClass).attr({
                src: a,
                alt: s,
                title: s
            }) : x("<button type='button'></button>").addClass(this._triggerClass).html(a ? x("<img/>").attr({
                src: a,
                alt: s,
                title: s
            }) : s)), t[o ? "before" : "after"](e.trigger), e.trigger.on("click", function () {
                return x.datepicker._datepickerShowing && x.datepicker._lastInput === t[0] ? x.datepicker._hideDatepicker() : (x.datepicker._datepickerShowing && x.datepicker._lastInput !== t[0] && x.datepicker._hideDatepicker(), x.datepicker._showDatepicker(t[0])), !1
            }))
        },
        _autoSize: function (t) {
            var e, i, s, a, n, o;
            this._get(t, "autoSize") && !t.inline && (n = new Date(2009, 11, 20), (o = this._get(t, "dateFormat")).match(/[DM]/) && (e = function (t) {
                for (a = s = i = 0; t.length > a; a++) t[a].length > i && (i = t[a].length, s = a);
                return s
            }, n.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), t.input.attr("size", this._formatDate(t, n).length))
        },
        _inlineDatepicker: function (t, e) {
            var i = x(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(e.dpDiv), x.data(t, "datepicker", e), this._setDate(e, this._getDefaultDate(e), !0), this._updateDatepicker(e), this._updateAlternate(e), e.settings.disabled && this._disableDatepicker(t), e.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (t, e, i, s, a) {
            var n, o, r, l, c, h = this._dialogInst;
            return h || (this.uuid += 1, n = "dp" + this.uuid, this._dialogInput = x("<input type='text' id='" + n + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), x("body").append(this._dialogInput), (h = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, x.data(this._dialogInput[0], "datepicker", h)), d(h.settings, s || {}), e = e && e.constructor === Date ? this._formatDate(h, e) : e, this._dialogInput.val(e), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (o = document.documentElement.clientWidth, r = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [o / 2 - 100 + l, r / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), h.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), x.blockUI && x.blockUI(this.dpDiv), x.data(this._dialogInput[0], "datepicker", h), this
        },
        _destroyDatepicker: function (t) {
            var e, i = x(t), s = x.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (e = t.nodeName.toLowerCase(), x.removeData(t, "datepicker"), "input" === e ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== e && "span" !== e || i.removeClass(this.markerClassName).empty(), it === s && (it = null))
        },
        _enableDatepicker: function (e) {
            var t, i, s = x(e), a = x.data(e, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !1, a.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : "div" !== t && "span" !== t || ((i = s.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = x.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var t, i, s = x(e), a = x.data(e, "datepicker");
            s.hasClass(this.markerClassName) && ("input" === (t = e.nodeName.toLowerCase()) ? (e.disabled = !0, a.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : "div" !== t && "span" !== t || ((i = s.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = x.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (t) {
            try {
                return x.data(t, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (t, e, i) {
            var s, a, n, o, r = this._getInst(t);
            return 2 === arguments.length && "string" == typeof e ? "defaults" === e ? x.extend({}, x.datepicker._defaults) : r ? "all" === e ? x.extend({}, r.settings) : this._get(r, e) : null : (s = e || {}, "string" == typeof e && ((s = {})[e] = i), void (r && (this._curInst === r && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), n = this._getMinMaxDate(r, "min"), o = this._getMinMaxDate(r, "max"), d(r.settings, s), null !== n && void 0 !== s.dateFormat && void 0 === s.minDate && (r.settings.minDate = this._formatDate(r, n)), null !== o && void 0 !== s.dateFormat && void 0 === s.maxDate && (r.settings.maxDate = this._formatDate(r, o)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(x(t), r), this._autoSize(r), this._setDate(r, a), this._updateAlternate(r), this._updateDatepicker(r))))
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (t) {
            var e, i, s, a = x.datepicker._getInst(t.target), n = !0, o = a.dpDiv.is(".ui-datepicker-rtl");
            if (a._keyEvent = !0, x.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    x.datepicker._hideDatepicker(), n = !1;
                    break;
                case 13:
                    return (s = x("td." + x.datepicker._dayOverClass + ":not(." + x.datepicker._currentClass + ")", a.dpDiv))[0] && x.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, s[0]), (e = x.datepicker._get(a, "onSelect")) ? (i = x.datepicker._formatDate(a), e.apply(a.input ? a.input[0] : null, [i, a])) : x.datepicker._hideDatepicker(), !1;
                case 27:
                    x.datepicker._hideDatepicker();
                    break;
                case 33:
                    x.datepicker._adjustDate(t.target, t.ctrlKey ? -x.datepicker._get(a, "stepBigMonths") : -x.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 34:
                    x.datepicker._adjustDate(t.target, t.ctrlKey ? +x.datepicker._get(a, "stepBigMonths") : +x.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && x.datepicker._clearDate(t.target), n = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && x.datepicker._gotoToday(t.target), n = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && x.datepicker._adjustDate(t.target, t.ctrlKey ? -x.datepicker._get(a, "stepBigMonths") : -x.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, -7, "D"), n = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && x.datepicker._adjustDate(t.target, t.ctrlKey ? +x.datepicker._get(a, "stepBigMonths") : +x.datepicker._get(a, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && x.datepicker._adjustDate(t.target, 7, "D"), n = t.ctrlKey || t.metaKey;
                    break;
                default:
                    n = !1
            } else 36 === t.keyCode && t.ctrlKey ? x.datepicker._showDatepicker(this) : n = !1;
            n && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function (t) {
            var e, i, s = x.datepicker._getInst(t.target);
            return x.datepicker._get(s, "constrainInput") ? (e = x.datepicker._possibleChars(x.datepicker._get(s, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || i < " " || !e || -1 < e.indexOf(i)) : void 0
        },
        _doKeyUp: function (t) {
            var e = x.datepicker._getInst(t.target);
            if (e.input.val() !== e.lastVal) try {
                x.datepicker.parseDate(x.datepicker._get(e, "dateFormat"), e.input ? e.input.val() : null, x.datepicker._getFormatConfig(e)) && (x.datepicker._setDateFromField(e), x.datepicker._updateAlternate(e), x.datepicker._updateDatepicker(e))
            } catch (t) {
            }
            return !0
        },
        _showDatepicker: function (t) {
            var e, i, s, a, n, o, r;
            "input" !== (t = t.target || t).nodeName.toLowerCase() && (t = x("input", t.parentNode)[0]), x.datepicker._isDisabledDatepicker(t) || x.datepicker._lastInput === t || (r = x.datepicker._getInst(t), x.datepicker._curInst && x.datepicker._curInst !== r && (x.datepicker._curInst.dpDiv.stop(!0, !0), r && x.datepicker._datepickerShowing && x.datepicker._hideDatepicker(x.datepicker._curInst.input[0])), !1 !== (i = (e = x.datepicker._get(r, "beforeShow")) ? e.apply(t, [t, r]) : {}) && (d(r.settings, i), r.lastVal = null, x.datepicker._lastInput = t, x.datepicker._setDateFromField(r), x.datepicker._inDialog && (t.value = ""), x.datepicker._pos || (x.datepicker._pos = x.datepicker._findPos(t), x.datepicker._pos[1] += t.offsetHeight), s = !1, x(t).parents().each(function () {
                return !(s |= "fixed" === x(this).css("position"))
            }), a = {
                left: x.datepicker._pos[0],
                top: x.datepicker._pos[1]
            }, x.datepicker._pos = null, r.dpDiv.empty(), r.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), x.datepicker._updateDatepicker(r), a = x.datepicker._checkOffset(r, a, s), r.dpDiv.css({
                position: x.datepicker._inDialog && x.blockUI ? "static" : s ? "fixed" : "absolute",
                display: "none",
                left: a.left + "px",
                top: a.top + "px"
            }), r.inline || (n = x.datepicker._get(r, "showAnim"), o = x.datepicker._get(r, "duration"), r.dpDiv.css("z-index", function (t) {
                for (var e, i; t.length && t[0] !== document;) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent()
                }
                return 0
            }(x(t)) + 1), x.datepicker._datepickerShowing = !0, x.effects && x.effects.effect[n] ? r.dpDiv.show(n, x.datepicker._get(r, "showOptions"), o) : r.dpDiv[n || "show"](n ? o : null), x.datepicker._shouldFocusInput(r) && r.input.trigger("focus"), x.datepicker._curInst = r)))
        },
        _updateDatepicker: function (t) {
            this.maxRows = 4, (it = t).dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var e, i = this._getNumberOfMonths(t), s = i[1], a = t.dpDiv.find("." + this._dayOverClass + " a");
            0 < a.length && n.apply(a.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), 1 < s && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === x.datepicker._curInst && x.datepicker._datepickerShowing && x.datepicker._shouldFocusInput(t) && t.input.trigger("focus"), t.yearshtml && (e = t.yearshtml, setTimeout(function () {
                e === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), e = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (t, e, i) {
            var s = t.dpDiv.outerWidth(), a = t.dpDiv.outerHeight(), n = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                r = document.documentElement.clientWidth + (i ? 0 : x(document).scrollLeft()),
                l = document.documentElement.clientHeight + (i ? 0 : x(document).scrollTop());
            return e.left -= this._get(t, "isRTL") ? s - n : 0, e.left -= i && e.left === t.input.offset().left ? x(document).scrollLeft() : 0, e.top -= i && e.top === t.input.offset().top + o ? x(document).scrollTop() : 0, e.left -= Math.min(e.left, e.left + s > r && s < r ? Math.abs(e.left + s - r) : 0), e.top -= Math.min(e.top, e.top + a > l && a < l ? Math.abs(a + o) : 0), e
        },
        _findPos: function (t) {
            for (var e, i = this._getInst(t), s = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || x.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
            return [(e = x(t).offset()).left, e.top]
        },
        _hideDatepicker: function (t) {
            var e, i, s, a, n = this._curInst;
            !n || t && n !== x.data(t, "datepicker") || this._datepickerShowing && (e = this._get(n, "showAnim"), i = this._get(n, "duration"), s = function () {
                x.datepicker._tidyDialog(n)
            }, x.effects && (x.effects.effect[e] || x.effects[e]) ? n.dpDiv.hide(e, x.datepicker._get(n, "showOptions"), i, s) : n.dpDiv["slideDown" === e ? "slideUp" : "fadeIn" === e ? "fadeOut" : "hide"](e ? i : null, s), e || s(), this._datepickerShowing = !1, (a = this._get(n, "onClose")) && a.apply(n.input ? n.input[0] : null, [n.input ? n.input.val() : "", n]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), x.blockUI && (x.unblockUI(), x("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (t) {
            var e, i;
            x.datepicker._curInst && (e = x(t.target), i = x.datepicker._getInst(e[0]), (e[0].id === x.datepicker._mainDivId || 0 !== e.parents("#" + x.datepicker._mainDivId).length || e.hasClass(x.datepicker.markerClassName) || e.closest("." + x.datepicker._triggerClass).length || !x.datepicker._datepickerShowing || x.datepicker._inDialog && x.blockUI) && (!e.hasClass(x.datepicker.markerClassName) || x.datepicker._curInst === i) || x.datepicker._hideDatepicker())
        },
        _adjustDate: function (t, e, i) {
            var s = x(t), a = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(a, e + ("M" === i ? this._get(a, "showCurrentAtPos") : 0), i), this._updateDatepicker(a))
        },
        _gotoToday: function (t) {
            var e, i = x(t), s = this._getInst(i[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (e = new Date, s.selectedDay = e.getDate(), s.drawMonth = s.selectedMonth = e.getMonth(), s.drawYear = s.selectedYear = e.getFullYear()), this._notifyChange(s), this._adjustDate(i)
        },
        _selectMonthYear: function (t, e, i) {
            var s = x(t), a = this._getInst(s[0]);
            a["selected" + ("M" === i ? "Month" : "Year")] = a["draw" + ("M" === i ? "Month" : "Year")] = parseInt(e.options[e.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(s)
        },
        _selectDay: function (t, e, i, s) {
            var a, n = x(t);
            x(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]) || ((a = this._getInst(n[0])).selectedDay = a.currentDay = x("a", s).html(), a.selectedMonth = a.currentMonth = e, a.selectedYear = a.currentYear = i, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
        },
        _clearDate: function (t) {
            var e = x(t);
            this._selectDate(e, "")
        },
        _selectDate: function (t, e) {
            var i, s = x(t), a = this._getInst(s[0]);
            e = null != e ? e : this._formatDate(a), a.input && a.input.val(e), this._updateAlternate(a), (i = this._get(a, "onSelect")) ? i.apply(a.input ? a.input[0] : null, [e, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != _typeof(a.input[0]) && a.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function (t) {
            var e, i, s, a = this._get(t, "altField");
            a && (e = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), s = this.formatDate(e, i, this._getFormatConfig(t)), x(a).val(s))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [0 < e && e < 6, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (i, n, t) {
            if (null == i || null == n) throw "Invalid arguments";
            if ("" === (n = "object" == _typeof(n) ? "" + n : n + "")) return null;

            function o(t) {
                var e = i.length > k + 1 && i.charAt(k + 1) === t;
                return e && k++, e
            }

            function e(t) {
                var e = o(t), i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                    s = RegExp("^\\d{" + ("y" === t ? i : 1) + "," + i + "}"), a = n.substring(h).match(s);
                if (!a) throw "Missing number at position " + h;
                return h += a[0].length, parseInt(a[0], 10)
            }

            function s(t, e, i) {
                var s = -1, a = x.map(o(t) ? i : e, function (t, e) {
                    return [[e, t]]
                }).sort(function (t, e) {
                    return -(t[1].length - e[1].length)
                });
                if (x.each(a, function (t, e) {
                    var i = e[1];
                    return n.substr(h, i.length).toLowerCase() === i.toLowerCase() ? (s = e[0], h += i.length, !1) : void 0
                }), -1 !== s) return s + 1;
                throw "Unknown name at position " + h
            }

            function a() {
                if (n.charAt(h) !== i.charAt(k)) throw "Unexpected literal at position " + h;
                h++
            }

            for (var r, l, c, h = 0, d = (t ? t.shortYearCutoff : null) || this._defaults.shortYearCutoff, u = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10), p = (t ? t.dayNamesShort : null) || this._defaults.dayNamesShort, f = (t ? t.dayNames : null) || this._defaults.dayNames, m = (t ? t.monthNamesShort : null) || this._defaults.monthNamesShort, _ = (t ? t.monthNames : null) || this._defaults.monthNames, g = -1, v = -1, b = -1, y = -1, w = !1, k = 0; i.length > k; k++) if (w) "'" !== i.charAt(k) || o("'") ? a() : w = !1; else switch (i.charAt(k)) {
                case"d":
                    b = e("d");
                    break;
                case"D":
                    s("D", p, f);
                    break;
                case"o":
                    y = e("o");
                    break;
                case"m":
                    v = e("m");
                    break;
                case"M":
                    v = s("M", m, _);
                    break;
                case"y":
                    g = e("y");
                    break;
                case"@":
                    g = (c = new Date(e("@"))).getFullYear(), v = c.getMonth() + 1, b = c.getDate();
                    break;
                case"!":
                    g = (c = new Date((e("!") - this._ticksTo1970) / 1e4)).getFullYear(), v = c.getMonth() + 1, b = c.getDate();
                    break;
                case"'":
                    o("'") ? a() : w = !0;
                    break;
                default:
                    a()
            }
            if (n.length > h && (l = n.substr(h), !/^\s+/.test(l))) throw "Extra/unparsed characters found in date: " + l;
            if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= u ? 0 : -100)), -1 < y) for (v = 1, b = y; !(b <= (r = this._getDaysInMonth(g, v - 1)));) v++, b -= r;
            if ((c = this._daylightSavingAdjust(new Date(g, v - 1, b))).getFullYear() !== g || c.getMonth() + 1 !== v || c.getDate() !== b) throw "Invalid date";
            return c
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (i, t, e) {
            if (!t) return "";

            function a(t) {
                var e = i.length > o + 1 && i.charAt(o + 1) === t;
                return e && o++, e
            }

            function s(t, e, i) {
                var s = "" + e;
                if (a(t)) for (; i > s.length;) s = "0" + s;
                return s
            }

            function n(t, e, i, s) {
                return a(t) ? s[e] : i[e]
            }

            var o, r = (e ? e.dayNamesShort : null) || this._defaults.dayNamesShort,
                l = (e ? e.dayNames : null) || this._defaults.dayNames,
                c = (e ? e.monthNamesShort : null) || this._defaults.monthNamesShort,
                h = (e ? e.monthNames : null) || this._defaults.monthNames, d = "", u = !1;
            if (t) for (o = 0; i.length > o; o++) if (u) "'" !== i.charAt(o) || a("'") ? d += i.charAt(o) : u = !1; else switch (i.charAt(o)) {
                case"d":
                    d += s("d", t.getDate(), 2);
                    break;
                case"D":
                    d += n("D", t.getDay(), r, l);
                    break;
                case"o":
                    d += s("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case"m":
                    d += s("m", t.getMonth() + 1, 2);
                    break;
                case"M":
                    d += n("M", t.getMonth(), c, h);
                    break;
                case"y":
                    d += a("y") ? t.getFullYear() : (t.getFullYear() % 100 < 10 ? "0" : "") + t.getFullYear() % 100;
                    break;
                case"@":
                    d += t.getTime();
                    break;
                case"!":
                    d += 1e4 * t.getTime() + this._ticksTo1970;
                    break;
                case"'":
                    a("'") ? d += "'" : u = !0;
                    break;
                default:
                    d += i.charAt(o)
            }
            return d
        },
        _possibleChars: function (i) {
            function t(t) {
                var e = i.length > a + 1 && i.charAt(a + 1) === t;
                return e && a++, e
            }

            for (var e = "", s = !1, a = 0; i.length > a; a++) if (s) "'" !== i.charAt(a) || t("'") ? e += i.charAt(a) : s = !1; else switch (i.charAt(a)) {
                case"d":
                case"m":
                case"y":
                case"@":
                    e += "0123456789";
                    break;
                case"D":
                case"M":
                    return null;
                case"'":
                    t("'") ? e += "'" : s = !0;
                    break;
                default:
                    e += i.charAt(a)
            }
            return e
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null,
                    a = this._getDefaultDate(t), n = a, o = this._getFormatConfig(t);
                try {
                    n = this.parseDate(i, s, o) || a
                } catch (t) {
                    s = e ? "" : s
                }
                t.selectedDay = n.getDate(), t.drawMonth = t.selectedMonth = n.getMonth(), t.drawYear = t.selectedYear = n.getFullYear(), t.currentDay = s ? n.getDate() : 0, t.currentMonth = s ? n.getMonth() : 0, t.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (r, t, e) {
            var i, s, a = null == t || "" === t ? e : "string" == typeof t ? function (t) {
                try {
                    return x.datepicker.parseDate(x.datepicker._get(r, "dateFormat"), t, x.datepicker._getFormatConfig(r))
                } catch (t) {
                }
                for (var e = (t.toLowerCase().match(/^c/) ? x.datepicker._getDate(r) : null) || new Date, i = e.getFullYear(), s = e.getMonth(), a = e.getDate(), n = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = n.exec(t); o;) {
                    switch (o[2] || "d") {
                        case"d":
                        case"D":
                            a += parseInt(o[1], 10);
                            break;
                        case"w":
                        case"W":
                            a += 7 * parseInt(o[1], 10);
                            break;
                        case"m":
                        case"M":
                            s += parseInt(o[1], 10), a = Math.min(a, x.datepicker._getDaysInMonth(i, s));
                            break;
                        case"y":
                        case"Y":
                            i += parseInt(o[1], 10), a = Math.min(a, x.datepicker._getDaysInMonth(i, s))
                    }
                    o = n.exec(t)
                }
                return new Date(i, s, a)
            }(t) : "number" == typeof t ? isNaN(t) ? e : (i = t, (s = new Date).setDate(s.getDate() + i), s) : new Date(t.getTime());
            return (a = a && "Invalid Date" == "" + a ? e : a) && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(12 < t.getHours() ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var s = !e, a = t.selectedMonth, n = t.selectedYear,
                o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), a === t.selectedMonth && n === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function (t) {
            var e = this._get(t, "stepMonths"), i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function () {
                var t = {
                    prev: function () {
                        x.datepicker._adjustDate(i, -e, "M")
                    }, next: function () {
                        x.datepicker._adjustDate(i, +e, "M")
                    }, hide: function () {
                        x.datepicker._hideDatepicker()
                    }, today: function () {
                        x.datepicker._gotoToday(i)
                    }, selectDay: function () {
                        return x.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return x.datepicker._selectMonthYear(i, this, "M"), !1
                    }, selectYear: function () {
                        return x.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                x(this).on(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, i, s, a, n, o, r, l, c, h, d, u, p, f, m, _, g, v, b, y, w, k, x, C, $, D, T, S, M, I, P, O, A, H, N,
                Y, F, E, j, L = new Date,
                z = this._daylightSavingAdjust(new Date(L.getFullYear(), L.getMonth(), L.getDate())),
                W = this._get(t, "isRTL"), R = this._get(t, "showButtonPanel"), B = this._get(t, "hideIfNoPrevNext"),
                q = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t),
                V = this._get(t, "showCurrentAtPos"), G = this._get(t, "stepMonths"), K = 1 !== U[0] || 1 !== U[1],
                J = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                X = this._getMinMaxDate(t, "min"), Z = this._getMinMaxDate(t, "max"), Q = t.drawMonth - V,
                tt = t.drawYear;
            if (Q < 0 && (Q += 12, tt--), Z) for (e = this._daylightSavingAdjust(new Date(Z.getFullYear(), Z.getMonth() - U[0] * U[1] + 1, Z.getDate())), e = X && e < X ? X : e; this._daylightSavingAdjust(new Date(tt, Q, 1)) > e;) --Q < 0 && (Q = 11, tt--);
            for (t.drawMonth = Q, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Q - G, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Q) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "e" : "w") + "'>" + i + "</span></a>", a = this._get(t, "nextText"), a = q ? this.formatDate(a, this._daylightSavingAdjust(new Date(tt, Q + G, 1)), this._getFormatConfig(t)) : a, n = this._canAdjustMonth(t, 1, tt, Q) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + a + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (W ? "w" : "e") + "'>" + a + "</span></a>", o = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? J : z, o = q ? this.formatDate(o, r, this._getFormatConfig(t)) : o, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", c = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (W ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (W ? "" : l) + "</div>" : "", h = parseInt(this._get(t, "firstDay"), 10), h = isNaN(h) ? 0 : h, d = this._get(t, "showWeek"), u = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), _ = this._get(t, "beforeShowDay"), g = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
                for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if ($ = this._daylightSavingAdjust(new Date(tt, Q, t.selectedDay)), D = " ui-corner-all", T = "", K) {
                        if (T += "<div class='ui-datepicker-group", 1 < U[1]) switch (C) {
                            case 0:
                                T += " ui-datepicker-group-first", D = " ui-corner-" + (W ? "right" : "left");
                                break;
                            case U[1] - 1:
                                T += " ui-datepicker-group-last", D = " ui-corner-" + (W ? "left" : "right");
                                break;
                            default:
                                T += " ui-datepicker-group-middle", D = ""
                        }
                        T += "'>"
                    }
                    for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + D + "'>" + (/all|left/.test(D) && 0 === k ? W ? n : s : "") + (/all|right/.test(D) && 0 === k ? W ? s : n : "") + this._generateMonthYearHeader(t, Q, tt, X, Z, 0 < k || 0 < C, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; w < 7; w++) S += "<th scope='col'" + (5 <= (w + h + 6) % 7 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[M = (w + h) % 7] + "'>" + p[M] + "</span></th>";
                    for (T += S + "</tr></thead><tbody>", I = this._getDaysInMonth(tt, Q), tt === t.selectedYear && Q === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(tt, Q) - h + 7) % 7, O = Math.ceil((P + I) / 7), A = K && this.maxRows > O ? this.maxRows : O, this.maxRows = A, H = this._daylightSavingAdjust(new Date(tt, Q, 1 - P)), N = 0; N < A; N++) {
                        for (T += "<tr>", Y = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; w < 7; w++) F = _ ? _.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], j = (E = H.getMonth() !== Q) && !v || !F[0] || X && H < X || Z && Z < H, Y += "<td class='" + (5 <= (w + h + 6) % 7 ? " ui-datepicker-week-end" : "") + (E ? " ui-datepicker-other-month" : "") + (H.getTime() === $.getTime() && Q === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === $.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (E && !g ? "" : " " + F[1] + (H.getTime() === J.getTime() ? " " + this._currentClass : "") + (H.getTime() === z.getTime() ? " ui-datepicker-today" : "")) + "'" + (E && !g || !F[2] ? "" : " title='" + F[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (E && !g ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === z.getTime() ? " ui-state-highlight" : "") + (H.getTime() === J.getTime() ? " ui-state-active" : "") + (E ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        T += Y + "</tr>"
                    }
                    11 < ++Q && (Q = 0, tt++), x += T += "</tbody></table>" + (K ? "</div>" + (0 < U[0] && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                y += x
            }
            return y += c, t._keyEvent = !1, y
        },
        _generateMonthYearHeader: function (t, e, i, s, a, n, o, r) {
            var l, c, h, d, u, p, f, m, _ = this._get(t, "changeMonth"), g = this._get(t, "changeYear"),
                v = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", y = "";
            if (n || !_) y += "<span class='ui-datepicker-month'>" + o[e] + "</span>"; else {
                for (l = s && s.getFullYear() === i, c = a && a.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++) (!l || h >= s.getMonth()) && (!c || a.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === e ? " selected='selected'" : "") + ">" + r[h] + "</option>");
                y += "</select>"
            }
            if (v || (b += y + (!n && _ && g ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", n || !g) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (d = this._get(t, "yearRange").split(":"), u = (new Date).getFullYear(), f = (p = function (t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? u : e
                })(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = a ? Math.min(m, a.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= m; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
            }
            return b += this._get(t, "yearSuffix"), v && (b += (!n && _ && g ? "" : "&#xa0;") + y), b + "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0), a = t.selectedMonth + ("M" === i ? e : 0),
                n = Math.min(t.selectedDay, this._getDaysInMonth(s, a)) + ("D" === i ? e : 0),
                o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, a, n)));
            t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), a = i && e < i ? i : e;
            return s && s < a ? s : a
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, s) {
            var a = this._getNumberOfMonths(t),
                n = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : a[0] * a[1]), 1));
            return e < 0 && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(t, n)
        },
        _isInRange: function (t, e) {
            var i, s, a = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), o = null, r = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!a || e.getTime() >= a.getTime()) && (!n || e.getTime() <= n.getTime()) && (!o || e.getFullYear() >= o) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var a = e ? "object" == _typeof(e) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), a, this._getFormatConfig(t))
        }
    }), x.fn.datepicker = function (t) {
        if (!this.length) return this;
        x.datepicker.initialized || (x(document).on("mousedown", x.datepicker._checkExternalClick), x.datepicker.initialized = !0), 0 === x("#" + x.datepicker._mainDivId).length && x("body").append(x.datepicker.dpDiv);
        var e = Array.prototype.slice.call(arguments, 1);
        return "string" == typeof t && ("isDisabled" === t || "getDate" === t || "widget" === t) || "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? x.datepicker["_" + t + "Datepicker"].apply(x.datepicker, [this[0]].concat(e)) : this.each(function () {
            "string" == typeof t ? x.datepicker["_" + t + "Datepicker"].apply(x.datepicker, [this].concat(e)) : x.datepicker._attachDatepicker(this, t)
        })
    }, x.datepicker = new t, x.datepicker.initialized = !1, x.datepicker.uuid = (new Date).getTime(), x.datepicker.version = "1.12.1", x.datepicker, x.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var at = !1;
    x(document).on("mouseup", function () {
        at = !1
    }), x.widget("ui.mouse", {
        version: "1.12.1",
        options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
        _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function (t) {
                return !0 === x.data(t.target, e.widgetName + ".preventClickEvent") ? (x.removeData(t.target, e.widgetName + ".preventClickEvent"), t.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (t) {
            if (!at) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var e = this, i = 1 === t.which,
                    s = !("string" != typeof this.options.cancel || !t.target.nodeName) && x(t.target).closest(this.options.cancel).length;
                return i && !s && this._mouseCapture(t) && (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    e.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), !this._mouseStarted) ? t.preventDefault() : (!0 === x.data(t.target, this.widgetName + ".preventClickEvent") && x.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return e._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return e._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), at = !0)), !0
            }
        },
        _mouseMove: function (t) {
            if (this._mouseMoved) {
                if (x.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button) return this._mouseUp(t);
                if (!t.which) if (t.originalEvent.altKey || t.originalEvent.ctrlKey || t.originalEvent.metaKey || t.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(t)
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
        },
        _mouseUp: function (t) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && x.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, at = !1, t.preventDefault()
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), x.ui.plugin = {
        add: function (t, e, i) {
            var s, a = x.ui[t].prototype;
            for (s in i) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([e, i[s]])
        }, call: function (t, e, i, s) {
            var a, n = t.plugins[e];
            if (n && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (a = 0; n.length > a; a++) t.options[n[a][0]] && n[a][1].apply(t.element, i)
        }
    }, x.ui.safeBlur = function (t) {
        t && "body" !== t.nodeName.toLowerCase() && x(t).trigger("blur")
    }, x.widget("ui.draggable", x.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function (t) {
            var e = this.options;
            return !(this.helper || e.disabled || 0 < x(t.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(t), !!this.handle && (this._blurActiveElement(t), this._blockFrames(!0 === e.iframeFix ? "iframe" : e.iframeFix), !0))
        },
        _blockFrames: function (t) {
            this.iframeBlocks = this.document.find(t).map(function () {
                var t = x(this);
                return x("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (t) {
            var e = x.ui.safeActiveElement(this.document[0]);
            x(t.target).closest(e).length || x.ui.safeBlur(e)
        },
        _mouseStart: function (t) {
            var e = this.options;
            return this.helper = this._createHelper(t), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), x.ui.ddmanager && (x.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = 0 < this.helper.parents().filter(function () {
                return "fixed" === x(this).css("position")
            }).length, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, e.cursorAt && this._adjustOffsetFromHelper(e.cursorAt), this._setContainment(), !1 === this._trigger("start", t) ? (this._clear(), !1) : (this._cacheHelperProportions(), x.ui.ddmanager && !e.dropBehaviour && x.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), x.ui.ddmanager && x.ui.ddmanager.dragStart(this, t), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}
        },
        _mouseDrag: function (t, e) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !e) {
                var i = this._uiHash();
                if (!1 === this._trigger("drag", t, i)) return this._mouseUp(new x.Event("mouseup", t)), !1;
                this.position = i.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", x.ui.ddmanager && x.ui.ddmanager.drag(this, t), !1
        },
        _mouseStop: function (t) {
            var e = this, i = !1;
            return x.ui.ddmanager && !this.options.dropBehaviour && (i = x.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || x.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? x(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                !1 !== e._trigger("stop", t) && e._clear()
            }) : !1 !== this._trigger("stop", t) && this._clear(), !1
        },
        _mouseUp: function (t) {
            return this._unblockFrames(), x.ui.ddmanager && x.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.trigger("focus"), x.ui.mouse.prototype._mouseUp.call(this, t)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new x.Event("mouseup", {target: this.element[0]})) : this._clear(), this
        },
        _getHandle: function (t) {
            return !this.options.handle || !!x(t.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function (t) {
            var e = this.options, i = x.isFunction(e.helper),
                s = i ? x(e.helper.apply(this.element[0], [t])) : "clone" === e.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === e.appendTo ? this.element[0].parentNode : e.appendTo), i && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), x.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var t = this.offsetParent.offset(), e = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== e && x.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, e, i, s = this.options, a = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? void (this.containment = [x(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, x(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, x(window).scrollLeft() + x(window).width() - this.helperProportions.width - this.margins.left, x(window).scrollTop() + (x(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void (this.containment = [0, 0, x(a).width() - this.helperProportions.width - this.margins.left, (x(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void (this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), void ((i = (e = x(s.containment))[0]) && (t = /(scroll|auto)/.test(e.css("overflow")), this.containment = [(parseInt(e.css("borderLeftWidth"), 10) || 0) + (parseInt(e.css("paddingLeft"), 10) || 0), (parseInt(e.css("borderTopWidth"), 10) || 0) + (parseInt(e.css("paddingTop"), 10) || 0), (t ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e.css("borderRightWidth"), 10) || 0) - (parseInt(e.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e.css("borderBottomWidth"), 10) || 0) - (parseInt(e.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = e))) : void (this.containment = null)
        },
        _convertPositionTo: function (t, e) {
            e = e || this.position;
            var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (t, e) {
            var i, s, a, n, o = this.options, r = this._isRootNode(this.scrollParent[0]), l = t.pageX, c = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (i = this.relativeContainer ? (s = this.relativeContainer.offset(), [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (c = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (c = i[3] + this.offset.click.top)), o.grid && (a = o.grid[1] ? this.originalPageY + Math.round((c - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, c = !i || a - this.offset.click.top >= i[1] || a - this.offset.click.top > i[3] ? a : a - this.offset.click.top >= i[1] ? a - o.grid[1] : a + o.grid[1], n = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = !i || n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - o.grid[0] : n + o.grid[0]), "y" === o.axis && (l = this.originalPageX), "x" === o.axis && (c = this.originalPageY)), {
                top: c - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function (t, e, i) {
            return i = i || this._uiHash(), x.ui.plugin.call(this, t, [e, i, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), i.offset = this.positionAbs), x.Widget.prototype._trigger.call(this, t, e, i)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), x.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, t, i) {
            var s = x.extend({}, t, {item: i.element});
            i.sortables = [], x(i.options.connectToSortable).each(function () {
                var t = x(this).sortable("instance");
                t && !t.options.disabled && (i.sortables.push(t), t.refreshPositions(), t._trigger("activate", e, s))
            })
        }, stop: function (e, t, i) {
            var s = x.extend({}, t, {item: i.element});
            i.cancelHelperRemoval = !1, x.each(i.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, i.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
            })
        }, drag: function (i, s, a) {
            x.each(a.sortables, function () {
                var t = !1, e = this;
                e.positionAbs = a.positionAbs, e.helperProportions = a.helperProportions, e.offset.click = a.offset.click, e._intersectsWith(e.containerCache) && (t = !0, x.each(a.sortables, function () {
                    return this.positionAbs = a.positionAbs, this.helperProportions = a.helperProportions, this.offset.click = a.offset.click, this !== e && this._intersectsWith(this.containerCache) && x.contains(e.element[0], this.element[0]) && (t = !1), t
                })), t ? (e.isOver || (e.isOver = 1, a._parent = s.helper.parent(), e.currentItem = s.helper.appendTo(e.element).data("ui-sortable-item", !0), e.options._helper = e.options.helper, e.options.helper = function () {
                    return s.helper[0]
                }, i.target = e.currentItem[0], e._mouseCapture(i, !0), e._mouseStart(i, !0, !0), e.offset.click.top = a.offset.click.top, e.offset.click.left = a.offset.click.left, e.offset.parent.left -= a.offset.parent.left - e.offset.parent.left, e.offset.parent.top -= a.offset.parent.top - e.offset.parent.top, a._trigger("toSortable", i), a.dropped = e.element, x.each(a.sortables, function () {
                    this.refreshPositions()
                }), a.currentItem = a.element, e.fromOutside = a), e.currentItem && (e._mouseDrag(i), s.position = e.position)) : e.isOver && (e.isOver = 0, e.cancelHelperRemoval = !0, e.options._revert = e.options.revert, e.options.revert = !1, e._trigger("out", i, e._uiHash(e)), e._mouseStop(i, !0), e.options.revert = e.options._revert, e.options.helper = e.options._helper, e.placeholder && e.placeholder.remove(), s.helper.appendTo(a._parent), a._refreshOffsets(i), s.position = a._generatePosition(i, !0), a._trigger("fromSortable", i), a.dropped = !1, x.each(a.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), x.ui.plugin.add("draggable", "cursor", {
        start: function (t, e, i) {
            var s = x("body"), a = i.options;
            s.css("cursor") && (a._cursor = s.css("cursor")), s.css("cursor", a.cursor)
        }, stop: function (t, e, i) {
            var s = i.options;
            s._cursor && x("body").css("cursor", s._cursor)
        }
    }), x.ui.plugin.add("draggable", "opacity", {
        start: function (t, e, i) {
            var s = x(e.helper), a = i.options;
            s.css("opacity") && (a._opacity = s.css("opacity")), s.css("opacity", a.opacity)
        }, stop: function (t, e, i) {
            var s = i.options;
            s._opacity && x(e.helper).css("opacity", s._opacity)
        }
    }), x.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        }, drag: function (t, e, i) {
            var s = i.options, a = !1, n = i.scrollParentNotHidden[0], o = i.document[0];
            n !== o && "HTML" !== n.tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + n.offsetHeight - t.pageY < s.scrollSensitivity ? n.scrollTop = a = n.scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (n.scrollTop = a = n.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + n.offsetWidth - t.pageX < s.scrollSensitivity ? n.scrollLeft = a = n.scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (n.scrollLeft = a = n.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - x(o).scrollTop() < s.scrollSensitivity ? a = x(o).scrollTop(x(o).scrollTop() - s.scrollSpeed) : x(window).height() - (t.pageY - x(o).scrollTop()) < s.scrollSensitivity && (a = x(o).scrollTop(x(o).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - x(o).scrollLeft() < s.scrollSensitivity ? a = x(o).scrollLeft(x(o).scrollLeft() - s.scrollSpeed) : x(window).width() - (t.pageX - x(o).scrollLeft()) < s.scrollSensitivity && (a = x(o).scrollLeft(x(o).scrollLeft() + s.scrollSpeed)))), !1 !== a && x.ui.ddmanager && !s.dropBehaviour && x.ui.ddmanager.prepareOffsets(i, t)
        }
    }), x.ui.plugin.add("draggable", "snap", {
        start: function (t, e, i) {
            var s = i.options;
            i.snapElements = [], x(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function () {
                var t = x(this), e = t.offset();
                this !== i.element[0] && i.snapElements.push({
                    item: this,
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: e.top,
                    left: e.left
                })
            })
        }, drag: function (t, e, i) {
            for (var s, a, n, o, r, l, c, h, d, u = i.options, p = u.snapTolerance, f = e.offset.left, m = f + i.helperProportions.width, _ = e.offset.top, g = _ + i.helperProportions.height, v = i.snapElements.length - 1; 0 <= v; v--) l = (r = i.snapElements[v].left - i.margins.left) + i.snapElements[v].width, h = (c = i.snapElements[v].top - i.margins.top) + i.snapElements[v].height, m < r - p || l + p < f || g < c - p || h + p < _ || !x.contains(i.snapElements[v].item.ownerDocument, i.snapElements[v].item) ? (i.snapElements[v].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, x.extend(i._uiHash(), {snapItem: i.snapElements[v].item})), i.snapElements[v].snapping = !1) : ("inner" !== u.snapMode && (s = p >= Math.abs(c - g), a = p >= Math.abs(h - _), n = p >= Math.abs(r - m), o = p >= Math.abs(l - f), s && (e.position.top = i._convertPositionTo("relative", {
                top: c - i.helperProportions.height,
                left: 0
            }).top), a && (e.position.top = i._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top), n && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: r - i.helperProportions.width
            }).left), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left)), d = s || a || n || o, "outer" !== u.snapMode && (s = p >= Math.abs(c - _), a = p >= Math.abs(h - g), n = p >= Math.abs(r - f), o = p >= Math.abs(l - m), s && (e.position.top = i._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), a && (e.position.top = i._convertPositionTo("relative", {
                top: h - i.helperProportions.height,
                left: 0
            }).top), n && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left), o && (e.position.left = i._convertPositionTo("relative", {
                top: 0,
                left: l - i.helperProportions.width
            }).left)), !i.snapElements[v].snapping && (s || a || n || o || d) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, x.extend(i._uiHash(), {snapItem: i.snapElements[v].item})), i.snapElements[v].snapping = s || a || n || o || d)
        }
    }), x.ui.plugin.add("draggable", "stack", {
        start: function (t, e, i) {
            var s, a = i.options, n = x.makeArray(x(a.stack)).sort(function (t, e) {
                return (parseInt(x(t).css("zIndex"), 10) || 0) - (parseInt(x(e).css("zIndex"), 10) || 0)
            });
            n.length && (s = parseInt(x(n[0]).css("zIndex"), 10) || 0, x(n).each(function (t) {
                x(this).css("zIndex", s + t)
            }), this.css("zIndex", s + n.length))
        }
    }), x.ui.plugin.add("draggable", "zIndex", {
        start: function (t, e, i) {
            var s = x(e.helper), a = i.options;
            s.css("zIndex") && (a._zIndex = s.css("zIndex")), s.css("zIndex", a.zIndex)
        }, stop: function (t, e, i) {
            var s = i.options;
            s._zIndex && x(e.helper).css("zIndex", s._zIndex)
        }
    }), x.ui.draggable, x.widget("ui.resizable", x.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseFloat(t) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function (t, e) {
            if ("hidden" === x(t).css("overflow")) return !1;
            var i = e && "left" === e ? "scrollLeft" : "scrollTop", s = !1;
            return 0 < t[i] || (t[i] = 1, s = 0 < t[i], t[i] = 0, s)
        },
        _create: function () {
            var t, e = this.options, i = this;
            this._addClass("ui-resizable"), x.extend(this, {
                _aspectRatio: !!e.aspectRatio,
                aspectRatio: e.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: e.helper || e.ghost || e.animate ? e.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(x("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, t = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(t), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(t), this._proportionallyResize()), this._setupHandles(), e.autoHide && x(this.element).on("mouseenter", function () {
                e.disabled || (i._removeClass("ui-resizable-autohide"), i._handles.show())
            }).on("mouseleave", function () {
                e.disabled || i.resizing || (i._addClass("ui-resizable-autohide"), i._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();

            function t(t) {
                x(t).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            }

            var e;
            return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
        },
        _setOption: function (t, e) {
            switch (this._super(t, e), t) {
                case"handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function () {
            var t, e, i, s, a, n = this.options, o = this;
            if (this.handles = n.handles || (x(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = x(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), i = this.handles.split(","), this.handles = {}, e = 0; i.length > e; e++) s = "ui-resizable-" + (t = x.trim(i[e])), a = x("<div>"), this._addClass(a, "ui-resizable-handle " + s), a.css({zIndex: n.zIndex}), this.handles[t] = ".ui-resizable-" + t, this.element.append(a);
            this._renderAxis = function (t) {
                var e, i, s, a;
                for (e in t = t || this.element, this.handles) this.handles[e].constructor === String ? this.handles[e] = this.element.children(this.handles[e]).first().show() : (this.handles[e].jquery || this.handles[e].nodeType) && (this.handles[e] = x(this.handles[e]), this._on(this.handles[e], {mousedown: o._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (i = x(this.handles[e], this.element), a = /sw|ne|nw|se|n|s/.test(e) ? i.outerHeight() : i.outerWidth(), s = ["padding", /ne|nw|n/.test(e) ? "Top" : /se|sw|s/.test(e) ? "Bottom" : /^e$/.test(e) ? "Right" : "Left"].join(""), t.css(s, a), this._proportionallyResize()), this._handles = this._handles.add(this.handles[e])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                o.resizing || (this.className && (a = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = a && a[1] ? a[1] : "se")
            }), n.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function () {
            this._handles.remove()
        },
        _mouseCapture: function (t) {
            var e, i, s = !1;
            for (e in this.handles) (i = x(this.handles[e])[0]) !== t.target && !x.contains(i, t.target) || (s = !0);
            return !this.options.disabled && s
        },
        _mouseStart: function (t) {
            var e, i, s, a = this.options, n = this.element;
            return this.resizing = !0, this._renderProxy(), e = this._num(this.helper.css("left")), i = this._num(this.helper.css("top")), a.containment && (e += x(a.containment).scrollLeft() || 0, i += x(a.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: e,
                top: i
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: n.width(), height: n.height()}, this.originalSize = this._helper ? {
                width: n.outerWidth(),
                height: n.outerHeight()
            } : {width: n.width(), height: n.height()}, this.sizeDiff = {
                width: n.outerWidth() - n.width(),
                height: n.outerHeight() - n.height()
            }, this.originalPosition = {left: e, top: i}, this.originalMousePosition = {
                left: t.pageX,
                top: t.pageY
            }, this.aspectRatio = "number" == typeof a.aspectRatio ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = x(".ui-resizable-" + this.axis).css("cursor"), x("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", t), !0
        },
        _mouseDrag: function (t) {
            var e, i, s = this.originalMousePosition, a = this.axis, n = t.pageX - s.left || 0,
                o = t.pageY - s.top || 0, r = this._change[a];
            return this._updatePrevProperties(), r && (e = r.apply(this, [t, n, o]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (e = this._updateRatio(e, t)), e = this._respectSize(e, t), this._updateCache(e), this._propagate("resize", t), i = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), x.isEmptyObject(i) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges())), !1
        },
        _mouseStop: function (t) {
            this.resizing = !1;
            var e, i, s, a, n, o, r, l = this.options, c = this;
            return this._helper && (s = (i = (e = this._proportionallyResizeElements).length && /textarea/i.test(e[0].nodeName)) && this._hasScroll(e[0], "left") ? 0 : c.sizeDiff.height, a = i ? 0 : c.sizeDiff.width, n = {
                width: c.helper.width() - a,
                height: c.helper.height() - s
            }, o = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, r = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(x.extend(n, {
                top: r,
                left: o
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), x("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {width: this.size.width, height: this.size.height}
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, i, s, a, n = this.options, o = {
                minWidth: this._isNumber(n.minWidth) ? n.minWidth : 0,
                maxWidth: this._isNumber(n.maxWidth) ? n.maxWidth : 1 / 0,
                minHeight: this._isNumber(n.minHeight) ? n.minHeight : 0,
                maxHeight: this._isNumber(n.maxHeight) ? n.maxHeight : 1 / 0
            };
            (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position, i = this.size, s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                a = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                n = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                o = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height, c = /sw|nw|w/.test(i), h = /nw|ne|n/.test(i);
            return n && (t.width = e.minWidth), o && (t.height = e.minHeight), s && (t.width = e.maxWidth), a && (t.height = e.maxHeight), n && c && (t.left = r - e.minWidth), s && c && (t.left = r - e.maxWidth), o && h && (t.top = l - e.minHeight), a && h && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], a = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(a[e]) || 0;
            return {height: i[0] + i[2], width: i[1] + i[3]}
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function () {
            var t = this.element, e = this.options;
            this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || x("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++e.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {width: this.originalSize.width + e}
            }, w: function (t, e) {
                var i = this.originalSize;
                return {left: this.originalPosition.left + e, width: i.width - e}
            }, n: function (t, e, i) {
                var s = this.originalSize, a = this.originalPosition;
                return {top: a.top + i, height: s.height - i}
            }, s: function (t, e, i) {
                return {height: this.originalSize.height + i}
            }, se: function (t, e, i) {
                return x.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            }, sw: function (t, e, i) {
                return x.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }, ne: function (t, e, i) {
                return x.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, e, i]))
            }, nw: function (t, e, i) {
                return x.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, e, i]))
            }
        },
        _propagate: function (t, e) {
            x.ui.plugin.call(this, t, [e, this.ui()]), "resize" !== t && this._trigger(t, e, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), x.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = x(this).resizable("instance"), t = i.options, s = i._proportionallyResizeElements,
                a = s.length && /textarea/i.test(s[0].nodeName),
                n = a && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height, o = a ? 0 : i.sizeDiff.width,
                r = {width: i.size.width - o, height: i.size.height - n},
                l = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(x.extend(r, c && l ? {top: c, left: l} : {}), {
                duration: t.animateDuration,
                easing: t.animateEasing,
                step: function () {
                    var t = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    s && s.length && x(s[0]).css({
                        width: t.width,
                        height: t.height
                    }), i._updateCache(t), i._propagate("resize", e)
                }
            })
        }
    }), x.ui.plugin.add("resizable", "containment", {
        start: function () {
            var i, s, t, e, a, n, o, r = x(this).resizable("instance"), l = r.options, c = r.element, h = l.containment,
                d = h instanceof x ? h.get(0) : /parent/.test(h) ? c.parent().get(0) : h;
            d && (r.containerElement = x(d), /document/.test(h) || h === document ? (r.containerOffset = {
                left: 0,
                top: 0
            }, r.containerPosition = {left: 0, top: 0}, r.parentData = {
                element: x(document),
                left: 0,
                top: 0,
                width: x(document).width(),
                height: x(document).height() || document.body.parentNode.scrollHeight
            }) : (i = x(d), s = [], x(["Top", "Right", "Left", "Bottom"]).each(function (t, e) {
                s[t] = r._num(i.css("padding" + e))
            }), r.containerOffset = i.offset(), r.containerPosition = i.position(), r.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, t = r.containerOffset, e = r.containerSize.height, a = r.containerSize.width, n = r._hasScroll(d, "left") ? d.scrollWidth : a, o = r._hasScroll(d) ? d.scrollHeight : e, r.parentData = {
                element: d,
                left: t.left,
                top: t.top,
                width: n,
                height: o
            }))
        }, resize: function (t) {
            var e, i, s, a, n = x(this).resizable("instance"), o = n.options, r = n.containerOffset, l = n.position,
                c = n._aspectRatio || t.shiftKey, h = {top: 0, left: 0}, d = n.containerElement, u = !0;
            d[0] !== document && /static/.test(d.css("position")) && (h = r), l.left < (n._helper ? r.left : 0) && (n.size.width = n.size.width + (n._helper ? n.position.left - r.left : n.position.left - h.left), c && (n.size.height = n.size.width / n.aspectRatio, u = !1), n.position.left = o.helper ? r.left : 0), l.top < (n._helper ? r.top : 0) && (n.size.height = n.size.height + (n._helper ? n.position.top - r.top : n.position.top), c && (n.size.width = n.size.height * n.aspectRatio, u = !1), n.position.top = n._helper ? r.top : 0), s = n.containerElement.get(0) === n.element.parent().get(0), a = /relative|absolute/.test(n.containerElement.css("position")), s && a ? (n.offset.left = n.parentData.left + n.position.left, n.offset.top = n.parentData.top + n.position.top) : (n.offset.left = n.element.offset().left, n.offset.top = n.element.offset().top), e = Math.abs(n.sizeDiff.width + (n._helper ? n.offset.left - h.left : n.offset.left - r.left)), i = Math.abs(n.sizeDiff.height + (n._helper ? n.offset.top - h.top : n.offset.top - r.top)), e + n.size.width >= n.parentData.width && (n.size.width = n.parentData.width - e, c && (n.size.height = n.size.width / n.aspectRatio, u = !1)), i + n.size.height >= n.parentData.height && (n.size.height = n.parentData.height - i, c && (n.size.width = n.size.height * n.aspectRatio, u = !1)), u || (n.position.left = n.prevPosition.left, n.position.top = n.prevPosition.top, n.size.width = n.prevSize.width, n.size.height = n.prevSize.height)
        }, stop: function () {
            var t = x(this).resizable("instance"), e = t.options, i = t.containerOffset, s = t.containerPosition,
                a = t.containerElement, n = x(t.helper), o = n.offset(), r = n.outerWidth() - t.sizeDiff.width,
                l = n.outerHeight() - t.sizeDiff.height;
            t._helper && !e.animate && /relative/.test(a.css("position")) && x(this).css({
                left: o.left - s.left - i.left,
                width: r,
                height: l
            }), t._helper && !e.animate && /static/.test(a.css("position")) && x(this).css({
                left: o.left - s.left - i.left,
                width: r,
                height: l
            })
        }
    }), x.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var t = x(this).resizable("instance").options;
            x(t.alsoResize).each(function () {
                var t = x(this);
                t.data("ui-resizable-alsoresize", {
                    width: parseFloat(t.width()),
                    height: parseFloat(t.height()),
                    left: parseFloat(t.css("left")),
                    top: parseFloat(t.css("top"))
                })
            })
        }, resize: function (t, i) {
            var e = x(this).resizable("instance"), s = e.options, a = e.originalSize, n = e.originalPosition, o = {
                height: e.size.height - a.height || 0,
                width: e.size.width - a.width || 0,
                top: e.position.top - n.top || 0,
                left: e.position.left - n.left || 0
            };
            x(s.alsoResize).each(function () {
                var t = x(this), s = x(this).data("ui-resizable-alsoresize"), a = {},
                    e = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                x.each(e, function (t, e) {
                    var i = (s[e] || 0) + (o[e] || 0);
                    i && 0 <= i && (a[e] = i || null)
                }), t.css(a)
            })
        }, stop: function () {
            x(this).removeData("ui-resizable-alsoresize")
        }
    }), x.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var t = x(this).resizable("instance"), e = t.size;
            t.ghost = t.originalElement.clone(), t.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: e.height,
                width: e.width,
                margin: 0,
                left: 0,
                top: 0
            }), t._addClass(t.ghost, "ui-resizable-ghost"), !1 !== x.uiBackCompat && "string" == typeof t.options.ghost && t.ghost.addClass(this.options.ghost), t.ghost.appendTo(t.helper)
        }, resize: function () {
            var t = x(this).resizable("instance");
            t.ghost && t.ghost.css({position: "relative", height: t.size.height, width: t.size.width})
        }, stop: function () {
            var t = x(this).resizable("instance");
            t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
        }
    }), x.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var t, e = x(this).resizable("instance"), i = e.options, s = e.size, a = e.originalSize,
                n = e.originalPosition, o = e.axis, r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                l = r[0] || 1, c = r[1] || 1, h = Math.round((s.width - a.width) / l) * l,
                d = Math.round((s.height - a.height) / c) * c, u = a.width + h, p = a.height + d,
                f = i.maxWidth && u > i.maxWidth, m = i.maxHeight && p > i.maxHeight, _ = i.minWidth && i.minWidth > u,
                g = i.minHeight && i.minHeight > p;
            i.grid = r, _ && (u += l), g && (p += c), f && (u -= l), m && (p -= c), /^(se|s|e)$/.test(o) ? (e.size.width = u, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = u, e.size.height = p, e.position.top = n.top - d) : /^(sw)$/.test(o) ? (e.size.width = u, e.size.height = p, e.position.left = n.left - h) : ((p - c <= 0 || u - l <= 0) && (t = e._getPaddingPlusBorderDimensions(this)), 0 < p - c ? (e.size.height = p, e.position.top = n.top - d) : (p = c - t.height, e.size.height = p, e.position.top = n.top + a.height - p), 0 < u - l ? (e.size.width = u, e.position.left = n.left - h) : (u = l - t.width, e.size.width = u, e.position.left = n.left + a.width - u))
        }
    }), x.ui.resizable, x.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (t) {
                    var e = x(this).css(t).offset().top;
                    e < 0 && x(this).css("top", t.top - e)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && x.fn.draggable && this._makeDraggable(), this.options.resizable && x.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? x(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: x.noop,
        enable: x.noop,
        close: function (t) {
            var e = this;
            this._isOpen && !1 !== this._trigger("beforeClose", t) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || x.ui.safeBlur(x.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                e._trigger("close", t)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (t, e) {
            var i = !1, s = this.uiDialog.siblings(".ui-front:visible").map(function () {
                return +x(this).css("z-index")
            }).get(), a = Math.max.apply(null, s);
            return a >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", a + 1), i = !0), i && !e && this._trigger("focus", t), i
        },
        open: function () {
            var t = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = x(x.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                t._focusTabbable(), t._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            (t = t || this.element.find("[autofocus]")).length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function (t) {
            function e() {
                var t = x.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === t || x.contains(this.uiDialog[0], t) || this._focusTabbable()
            }

            t.preventDefault(), e.call(this), this._delay(e)
        },
        _createWrapper: function () {
            this.uiDialog = x("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function (t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === x.ui.keyCode.ESCAPE) return t.preventDefault(), void this.close(t);
                    var e, i, s;
                    t.keyCode !== x.ui.keyCode.TAB || t.isDefaultPrevented() || (e = this.uiDialog.find(":tabbable"), i = e.filter(":first"), s = e.filter(":last"), t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== i[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (this._delay(function () {
                        s.trigger("focus")
                    }), t.preventDefault()) : (this._delay(function () {
                        i.trigger("focus")
                    }), t.preventDefault()))
                }, mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var t;
            this.uiDialogTitlebar = x("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function (t) {
                    x(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = x("<button type='button'></button>").button({
                label: x("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), t = x("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(t, "ui-dialog-title"), this._title(t), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": t.attr("id")})
        },
        _title: function (t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = x("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = x("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function () {
            var a = this, t = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), x.isEmptyObject(t) || x.isArray(t) && !t.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (x.each(t, function (t, e) {
                var i, s;
                e = x.isFunction(e) ? {
                    click: e,
                    text: t
                } : e, e = x.extend({type: "button"}, e), i = e.click, s = {
                    icon: e.icon,
                    iconPosition: e.iconPosition,
                    showLabel: e.showLabel,
                    icons: e.icons,
                    text: e.text
                }, delete e.click, delete e.icon, delete e.iconPosition, delete e.showLabel, delete e.icons, "boolean" == typeof e.text && delete e.text, x("<button></button>", e).button(s).appendTo(a.uiButtonSet).on("click", function () {
                    i.apply(a.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function a(t) {
                return {position: t.position, offset: t.offset}
            }

            var n = this, o = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (t, e) {
                    n._addClass(x(this), "ui-dialog-dragging"), n._blockFrames(), n._trigger("dragStart", t, a(e))
                },
                drag: function (t, e) {
                    n._trigger("drag", t, a(e))
                },
                stop: function (t, e) {
                    var i = e.offset.left - n.document.scrollLeft(), s = e.offset.top - n.document.scrollTop();
                    o.position = {
                        my: "left top",
                        at: "left" + (0 <= i ? "+" : "") + i + " top" + (0 <= s ? "+" : "") + s,
                        of: n.window
                    }, n._removeClass(x(this), "ui-dialog-dragging"), n._unblockFrames(), n._trigger("dragStop", t, a(e))
                }
            })
        },
        _makeResizable: function () {
            function n(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }

            var o = this, r = this.options, t = r.resizable, e = this.uiDialog.css("position"),
                i = "string" == typeof t ? t : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: r.maxWidth,
                maxHeight: r.maxHeight,
                minWidth: r.minWidth,
                minHeight: this._minHeight(),
                handles: i,
                start: function (t, e) {
                    o._addClass(x(this), "ui-dialog-resizing"), o._blockFrames(), o._trigger("resizeStart", t, n(e))
                },
                resize: function (t, e) {
                    o._trigger("resize", t, n(e))
                },
                stop: function (t, e) {
                    var i = o.uiDialog.offset(), s = i.left - o.document.scrollLeft(),
                        a = i.top - o.document.scrollTop();
                    r.height = o.uiDialog.height(), r.width = o.uiDialog.width(), r.position = {
                        my: "left top",
                        at: "left" + (0 <= s ? "+" : "") + s + " top" + (0 <= a ? "+" : "") + a,
                        of: o.window
                    }, o._removeClass(x(this), "ui-dialog-resizing"), o._unblockFrames(), o._trigger("resizeStop", t, n(e))
                }
            }).css("position", e)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (t) {
                    this._makeFocusTarget(), this._focusedElement = x(t.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var t = this._trackingInstances(), e = x.inArray(this, t);
            -1 !== e && t.splice(e, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (t) {
            var i = this, s = !1, a = {};
            x.each(t, function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (a[t] = e)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", a)
        },
        _setOption: function (t, e) {
            var i, s, a = this.uiDialog;
            "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({label: x("<a>").text("" + this.options.closeText).html()}), "draggable" === t && ((i = a.is(":data(ui-draggable)")) && !e && a.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && ((s = a.is(":data(ui-resizable)")) && !e && a.resizable("destroy"), s && "string" == typeof e && a.resizable("option", "handles", e), s || !1 === e || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var t = x(this);
                return x("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (t) {
            return !!x(t.target).closest(".ui-dialog").length || !!x(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            var e;
            this.options.modal && (e = !0, this._delay(function () {
                e = !1
            }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                focusin: function (t) {
                    e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                }
            }), this.overlay = x("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1))
        },
        _destroyOverlay: function () {
            var t;
            this.options.modal && this.overlay && ((t = this.document.data("ui-dialog-overlays") - 1) ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null)
        }
    }), !1 !== x.uiBackCompat && x.widget("ui.dialog", x.ui.dialog, {
        options: {dialogClass: ""},
        _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function (t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    }), x.ui.dialog, x.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var t, e = this.options, i = e.accept;
            this.isover = !1, this.isout = !0, this.accept = x.isFunction(i) ? i : function (t) {
                return t.is(i)
            }, this.proportions = function () {
                return arguments.length ? void (t = arguments[0]) : t || (t = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                })
            }, this._addToManager(e.scope), e.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function (t) {
            x.ui.ddmanager.droppables[t] = x.ui.ddmanager.droppables[t] || [], x.ui.ddmanager.droppables[t].push(this)
        },
        _splice: function (t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function () {
            var t = x.ui.ddmanager.droppables[this.options.scope];
            this._splice(t)
        },
        _setOption: function (t, e) {
            var i;
            "accept" === t ? this.accept = x.isFunction(e) ? e : function (t) {
                return t.is(e)
            } : "scope" === t && (i = x.ui.ddmanager.droppables[this.options.scope], this._splice(i), this._addToManager(e)), this._super(t, e)
        },
        _activate: function (t) {
            var e = x.ui.ddmanager.current;
            this._addActiveClass(), e && this._trigger("activate", t, this.ui(e))
        },
        _deactivate: function (t) {
            var e = x.ui.ddmanager.current;
            this._removeActiveClass(), e && this._trigger("deactivate", t, this.ui(e))
        },
        _over: function (t) {
            var e = x.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._addHoverClass(), this._trigger("over", t, this.ui(e)))
        },
        _out: function (t) {
            var e = x.ui.ddmanager.current;
            e && (e.currentItem || e.element)[0] !== this.element[0] && this.accept.call(this.element[0], e.currentItem || e.element) && (this._removeHoverClass(), this._trigger("out", t, this.ui(e)))
        },
        _drop: function (e, t) {
            var i = t || x.ui.ddmanager.current, s = !1;
            return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var t = x(this).droppable("instance");
                return t.options.greedy && !t.options.disabled && t.options.scope === i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && ot(i, x.extend(t, {offset: t.element.offset()}), t.options.tolerance, e) ? !(s = !0) : void 0
            }), !s && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(i)), this.element)))
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function () {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function () {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function () {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function () {
            this._removeClass("ui-droppable-active")
        }
    });
    var nt, ot = x.ui.intersect = function (t, e, i, s) {
        if (!e.offset) return !1;
        var a = (t.positionAbs || t.position.absolute).left + t.margins.left,
            n = (t.positionAbs || t.position.absolute).top + t.margins.top, o = a + t.helperProportions.width,
            r = n + t.helperProportions.height, l = e.offset.left, c = e.offset.top, h = l + e.proportions().width,
            d = c + e.proportions().height;
        switch (i) {
            case"fit":
                return l <= a && o <= h && c <= n && r <= d;
            case"intersect":
                return a + t.helperProportions.width / 2 > l && h > o - t.helperProportions.width / 2 && n + t.helperProportions.height / 2 > c && d > r - t.helperProportions.height / 2;
            case"pointer":
                return rt(s.pageY, c, e.proportions().height) && rt(s.pageX, l, e.proportions().width);
            case"touch":
                return (c <= n && n <= d || c <= r && r <= d || n < c && d < r) && (l <= a && a <= h || l <= o && o <= h || a < l && h < o);
            default:
                return !1
        }
    };

    function rt(t, e, i) {
        return e <= t && t < e + i
    }

    !(x.ui.ddmanager = {
        current: null, droppables: {default: []}, prepareOffsets: function (t, e) {
            var i, s, a = x.ui.ddmanager.droppables[t.options.scope] || [], n = e ? e.type : null,
                o = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
            t:for (i = 0; a.length > i; i++) if (!(a[i].options.disabled || t && !a[i].accept.call(a[i].element[0], t.currentItem || t.element))) {
                for (s = 0; o.length > s; s++) if (o[s] === a[i].element[0]) {
                    a[i].proportions().height = 0;
                    continue t
                }
                a[i].visible = "none" !== a[i].element.css("display"), a[i].visible && ("mousedown" === n && a[i]._activate.call(a[i], e), a[i].offset = a[i].element.offset(), a[i].proportions({
                    width: a[i].element[0].offsetWidth,
                    height: a[i].element[0].offsetHeight
                }))
            }
        }, drop: function (t, e) {
            var i = !1;
            return x.each((x.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && ot(t, this, this.options.tolerance, e) && (i = this._drop.call(this, e) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, e)))
            }), i
        }, dragStart: function (t, e) {
            t.element.parentsUntil("body").on("scroll.droppable", function () {
                t.options.refreshPositions || x.ui.ddmanager.prepareOffsets(t, e)
            })
        }, drag: function (n, o) {
            n.options.refreshPositions && x.ui.ddmanager.prepareOffsets(n, o), x.each(x.ui.ddmanager.droppables[n.options.scope] || [], function () {
                var t, e, i, s, a;
                this.options.disabled || this.greedyChild || !this.visible || (a = !(s = ot(n, this, this.options.tolerance, o)) && this.isover ? "isout" : s && !this.isover ? "isover" : null) && (this.options.greedy && (e = this.options.scope, (i = this.element.parents(":data(ui-droppable)").filter(function () {
                    return x(this).droppable("instance").options.scope === e
                })).length && ((t = x(i[0]).droppable("instance")).greedyChild = "isover" === a)), t && "isover" === a && (t.isover = !1, t.isout = !0, t._out.call(t, o)), this[a] = !0, this["isout" === a ? "isover" : "isout"] = !1, this["isover" === a ? "_over" : "_out"].call(this, o), t && "isout" === a && (t.isout = !1, t.isover = !0, t._over.call(t, o)))
            })
        }, dragStop: function (t, e) {
            t.element.parentsUntil("body").off("scroll.droppable"), t.options.refreshPositions || x.ui.ddmanager.prepareOffsets(t, e)
        }
    }) !== x.uiBackCompat && x.widget("ui.droppable", x.ui.droppable, {
        options: {hoverClass: !1, activeClass: !1},
        _addActiveClass: function () {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function () {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), x.ui.droppable, x.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            }, max: 100, value: 0, change: null, complete: null
        },
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = x("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function (t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var t = this.options.value, e = this._percentage();
            this.valueDiv.toggle(this.indeterminate || t > this.min).width(e.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, t === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = x("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": t
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== t && (this.oldValue = t, this._trigger("change")), t === this.options.max && this._trigger("complete")
        }
    }), x.widget("ui.selectable", x.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var s = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                s.elementPos = x(s.element[0]).offset(), s.selectees = x(s.options.filter, s.element[0]), s._addClass(s.selectees, "ui-selectee"), s.selectees.each(function () {
                    var t = x(this), e = t.offset(),
                        i = {left: e.left - s.elementPos.left, top: e.top - s.elementPos.top};
                    x.data(this, "selectable-item", {
                        element: this,
                        $element: t,
                        left: i.left,
                        top: i.top,
                        right: i.left + t.outerWidth(),
                        bottom: i.top + t.outerHeight(),
                        startselected: !1,
                        selected: t.hasClass("ui-selected"),
                        selecting: t.hasClass("ui-selecting"),
                        unselecting: t.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = x("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function () {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function (i) {
            var s = this, t = this.options;
            this.opos = [i.pageX, i.pageY], this.elementPos = x(this.element[0]).offset(), this.options.disabled || (this.selectees = x(t.filter, this.element[0]), this._trigger("start", i), x(t.appendTo).append(this.helper), this.helper.css({
                left: i.pageX,
                top: i.pageY,
                width: 0,
                height: 0
            }), t.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var t = x.data(this, "selectable-item");
                t.startselected = !0, i.metaKey || i.ctrlKey || (s._removeClass(t.$element, "ui-selected"), t.selected = !1, s._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, s._trigger("unselecting", i, {unselecting: t.element}))
            }), x(i.target).parents().addBack().each(function () {
                var t, e = x.data(this, "selectable-item");
                return e ? (t = !i.metaKey && !i.ctrlKey || !e.$element.hasClass("ui-selected"), s._removeClass(e.$element, t ? "ui-unselecting" : "ui-selected")._addClass(e.$element, t ? "ui-selecting" : "ui-unselecting"), e.unselecting = !t, e.selecting = t, (e.selected = t) ? s._trigger("selecting", i, {selecting: e.element}) : s._trigger("unselecting", i, {unselecting: e.element}), !1) : void 0
            }))
        },
        _mouseDrag: function (s) {
            if (this.dragged = !0, !this.options.disabled) {
                var t, a = this, n = this.options, o = this.opos[0], r = this.opos[1], l = s.pageX, c = s.pageY;
                return l < o && (t = l, l = o, o = t), c < r && (t = c, c = r, r = t), this.helper.css({
                    left: o,
                    top: r,
                    width: l - o,
                    height: c - r
                }), this.selectees.each(function () {
                    var t = x.data(this, "selectable-item"), e = !1, i = {};
                    t && t.element !== a.element[0] && (i.left = t.left + a.elementPos.left, i.right = t.right + a.elementPos.left, i.top = t.top + a.elementPos.top, i.bottom = t.bottom + a.elementPos.top, "touch" === n.tolerance ? e = !(i.left > l || o > i.right || i.top > c || r > i.bottom) : "fit" === n.tolerance && (e = i.left > o && l > i.right && i.top > r && c > i.bottom), e ? (t.selected && (a._removeClass(t.$element, "ui-selected"), t.selected = !1), t.unselecting && (a._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1), t.selecting || (a._addClass(t.$element, "ui-selecting"), t.selecting = !0, a._trigger("selecting", s, {selecting: t.element}))) : (t.selecting && ((s.metaKey || s.ctrlKey) && t.startselected ? (a._removeClass(t.$element, "ui-selecting"), t.selecting = !1, a._addClass(t.$element, "ui-selected"), t.selected = !0) : (a._removeClass(t.$element, "ui-selecting"), t.selecting = !1, t.startselected && (a._addClass(t.$element, "ui-unselecting"), t.unselecting = !0), a._trigger("unselecting", s, {unselecting: t.element}))), t.selected && (s.metaKey || s.ctrlKey || t.startselected || (a._removeClass(t.$element, "ui-selected"), t.selected = !1, a._addClass(t.$element, "ui-unselecting"), t.unselecting = !0, a._trigger("unselecting", s, {unselecting: t.element})))))
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, x(".ui-unselecting", this.element[0]).each(function () {
                var t = x.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-unselecting"), t.unselecting = !1, t.startselected = !1, i._trigger("unselected", e, {unselected: t.element})
            }), x(".ui-selecting", this.element[0]).each(function () {
                var t = x.data(this, "selectable-item");
                i._removeClass(t.$element, "ui-selecting")._addClass(t.$element, "ui-selected"), t.selecting = !1, t.selected = !0, t.startselected = !0, i._trigger("selected", e, {selected: t.element})
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), x.widget("ui.selectmenu", [x.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function () {
            var t = this.element.uniqueId().attr("id");
            this.ids = {
                element: t,
                button: t + "-button",
                menu: t + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = x()
        },
        _drawButton: function () {
            var t, e = this, i = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function (t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = x("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), t = x("<span>").appendTo(this.button), this._addClass(t, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(i).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                e._rendered || e._refreshMenu()
            })
        },
        _drawMenu: function () {
            var s = this;
            this.menu = x("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = x("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {"ui-menu": "ui-corner-bottom"},
                role: "listbox",
                select: function (t, e) {
                    t.preventDefault(), s._setSelection(), s._select(e.item.data("ui-selectmenu-item"), t)
                },
                focus: function (t, e) {
                    var i = e.item.data("ui-selectmenu-item");
                    null != s.focusIndex && i.index !== s.focusIndex && (s._trigger("focus", t, {item: i}), s.isOpen || s._select(i, t)), s.focusIndex = i.index, s.button.attr("aria-activedescendant", s.menuItems.eq(i.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1
            }, this.menuInstance._isDivider = function () {
                return !1
            }
        },
        refresh: function () {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function () {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function () {
            this.menuWrap.position(x.extend({of: this.button}, this.options.position))
        },
        close: function (t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function () {
            return this.button
        },
        menuWidget: function () {
            return this.menu
        },
        _renderButtonItem: function (t) {
            var e = x("<span>");
            return this._setText(e, t.label), this._addClass(e, "ui-selectmenu-text"), e
        },
        _renderMenu: function (s, t) {
            var a = this, n = "";
            x.each(t, function (t, e) {
                var i;
                e.optgroup !== n && (i = x("<li>", {text: e.optgroup}), a._addClass(i, "ui-selectmenu-optgroup", "ui-menu-divider" + (e.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), i.appendTo(s), n = e.optgroup), a._renderItemData(s, e)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function (t, e) {
            var i = x("<li>"), s = x("<div>", {title: e.element.attr("title")});
            return e.disabled && this._addClass(i, null, "ui-state-disabled"), this._setText(s, e.label), i.append(s).appendTo(t)
        },
        _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function (t, e) {
            var i, s, a = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), a += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](a).eq(-1) : i[t + "All"](a).eq(0)).length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function () {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function (t) {
                this.isOpen && (x(t.target).closest(".ui-selectmenu-menu, #" + x.ui.escapeSelector(this.ids.button)).length || this.close(t))
            }
        },
        _buttonEvents: {
            mousedown: function () {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            }, click: function (t) {
                this._setSelection(), this._toggle(t)
            }, keydown: function (t) {
                var e = !0;
                switch (t.keyCode) {
                    case x.ui.keyCode.TAB:
                    case x.ui.keyCode.ESCAPE:
                        this.close(t), e = !1;
                        break;
                    case x.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(t);
                        break;
                    case x.ui.keyCode.UP:
                        t.altKey ? this._toggle(t) : this._move("prev", t);
                        break;
                    case x.ui.keyCode.DOWN:
                        t.altKey ? this._toggle(t) : this._move("next", t);
                        break;
                    case x.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                        break;
                    case x.ui.keyCode.LEFT:
                        this._move("prev", t);
                        break;
                    case x.ui.keyCode.RIGHT:
                        this._move("next", t);
                        break;
                    case x.ui.keyCode.HOME:
                    case x.ui.keyCode.PAGE_UP:
                        this._move("first", t);
                        break;
                    case x.ui.keyCode.END:
                    case x.ui.keyCode.PAGE_DOWN:
                        this._move("last", t);
                        break;
                    default:
                        this.menu.trigger(t), e = !1
                }
                e && t.preventDefault()
            }
        },
        _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
        },
        _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function (t, e) {
            var i;
            "icons" === t && (i = this.button.find("span.ui-icon"), this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)), this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function () {
            var t = this.options.appendTo;
            return (t = t && (t.jquery || t.nodeType ? x(t) : this.document.find(t).eq(0))) && t[0] || (t = this.element.closest(".ui-front, dialog")), t.length || (t = this.document[0].body), t
        },
        _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function () {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
        },
        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function () {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function (t) {
            var i = this, s = [];
            t.each(function (t, e) {
                s.push(i._parseOption(x(e), t))
            }), this.items = s
        },
        _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), x.widget("ui.slider", x.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var t, e = this.options, i = this.element.find(".ui-slider-handle"), s = [],
                a = e.values && e.values.length || 1;
            for (i.length > a && (i.slice(a).remove(), i = i.slice(0, a)), t = i.length; t < a; t++) s.push("<span tabindex='0'></span>");
            this.handles = i.add(x(s.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (t) {
                x(this).data("ui-slider-handle-index", t).attr("tabIndex", 0)
            })
        },
        _createRange: function () {
            var t = this.options;
            t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : x.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = x("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== t.range && "max" !== t.range || this._addClass(this.range, "ui-slider-range-" + t.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function (t) {
            var e, i, s, a, n, o, r, l = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), e = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(e), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function (t) {
                var e = Math.abs(i - l.values(t));
                (e < s || s === e && (t === l._lastChangedValue || l.values(t) === c.min)) && (s = e, a = x(this), n = t)
            }), !1 !== this._start(t, n) && (this._mouseSliding = !0, this._handleIndex = n, this._addClass(a, null, "ui-state-active"), a.trigger("focus"), o = a.offset(), r = !x(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = r ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - o.left - a.width() / 2,
                top: t.pageY - o.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, n, i), this._animateOff = !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s,
                a = "horizontal" === this.orientation ? (e = this.elementSize.width, t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)),
                n = a / e;
            return 1 < n && (n = 1), n < 0 && (n = 0), "vertical" === this.orientation && (n = 1 - n), i = this._valueMax() - this._valueMin(), s = this._valueMin() + n * i, this._trimAlignValue(s)
        },
        _uiHash: function (t, e, i) {
            var s = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length
        },
        _start: function (t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function (t, e, i) {
            var s, a = this.value(), n = this.values();
            this._hasMultipleValues() && (s = this.values(e ? 0 : 1), a = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), n[e] = i), i === a || !1 !== this._trigger("slide", t, this._uiHash(e, i, n)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function (t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function (t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (t, e) {
            var i, s, a;
            if (1 < arguments.length) return this.options.values[t] = this._trimAlignValue(e), this._refreshValue(), void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!x.isArray(t)) return this._hasMultipleValues() ? this._values(t) : this.value();
            for (i = this.options.values, s = t, a = 0; i.length > a; a += 1) i[a] = this._trimAlignValue(s[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function (t, e) {
            var i, s = 0;
            switch ("range" === t && !0 === this.options.range && ("min" === e ? (this.options.value = this._values(0), this.options.values = null) : "max" === e && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), x.isArray(this.options.values) && (s = this.options.values.length), this._super(t, e), t) {
                case"orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(e), this.handles.css("horizontal" === e ? "bottom" : "left", "");
                    break;
                case"value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case"values":
                    for (this._animateOff = !0, this._refreshValue(), i = s - 1; 0 <= i; i--) this._change(null, i);
                    this._animateOff = !1;
                    break;
                case"step":
                case"min":
                case"max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case"range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function () {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = 0 < this.options.step ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += 0 < i ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function () {
            var t = this.options.max, e = this._valueMin(), i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshRange: function (t) {
            "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function () {
            var e, i, t, s, a, n = this.options.range, o = this.options, r = this, l = !this._animateOff && o.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function (t) {
                i = (r.values(t) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100, c["horizontal" === r.orientation ? "left" : "bottom"] = i + "%", x(this).stop(1, 1)[l ? "animate" : "css"](c, o.animate), !0 === r.options.range && ("horizontal" === r.orientation ? (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({left: i + "%"}, o.animate), 1 === t && r.range[l ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: o.animate
                })) : (0 === t && r.range.stop(1, 1)[l ? "animate" : "css"]({bottom: i + "%"}, o.animate), 1 === t && r.range[l ? "animate" : "css"]({height: i - e + "%"}, {
                    queue: !1,
                    duration: o.animate
                }))), e = i
            }) : (t = this.value(), s = this._valueMin(), a = this._valueMax(), i = a !== s ? (t - s) / (a - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](c, o.animate), "min" === n && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: i + "%"}, o.animate), "max" === n && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({width: 100 - i + "%"}, o.animate), "min" === n && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: i + "%"}, o.animate), "max" === n && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({height: 100 - i + "%"}, o.animate))
        },
        _handleEvents: {
            keydown: function (t) {
                var e, i, s, a = x(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                    case x.ui.keyCode.HOME:
                    case x.ui.keyCode.END:
                    case x.ui.keyCode.PAGE_UP:
                    case x.ui.keyCode.PAGE_DOWN:
                    case x.ui.keyCode.UP:
                    case x.ui.keyCode.RIGHT:
                    case x.ui.keyCode.DOWN:
                    case x.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(x(t.target), null, "ui-state-active"), !1 === this._start(t, a))) return
                }
                switch (s = this.options.step, e = i = this._hasMultipleValues() ? this.values(a) : this.value(), t.keyCode) {
                    case x.ui.keyCode.HOME:
                        i = this._valueMin();
                        break;
                    case x.ui.keyCode.END:
                        i = this._valueMax();
                        break;
                    case x.ui.keyCode.PAGE_UP:
                        i = this._trimAlignValue(e + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case x.ui.keyCode.PAGE_DOWN:
                        i = this._trimAlignValue(e - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case x.ui.keyCode.UP:
                    case x.ui.keyCode.RIGHT:
                        if (e === this._valueMax()) return;
                        i = this._trimAlignValue(e + s);
                        break;
                    case x.ui.keyCode.DOWN:
                    case x.ui.keyCode.LEFT:
                        if (e === this._valueMin()) return;
                        i = this._trimAlignValue(e - s)
                }
                this._slide(t, a, i)
            }, keyup: function (t) {
                var e = x(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, e), this._change(t, e), this._removeClass(x(t.target), null, "ui-state-active"))
            }
        }
    }), x.widget("ui.sortable", x.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, i) {
            return e <= t && t < e + i
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            var t = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), x.each(this.items, function () {
                t._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function () {
            this._mouseDestroy();
            for (var t = this.items.length - 1; 0 <= t; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (t, e) {
            var i = null, s = !1, a = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), x(t.target).parents().each(function () {
                return x.data(this, a.widgetName + "-item") === a ? (i = x(this), !1) : void 0
            }), x.data(t.target, a.widgetName + "-item") === a && (i = x(t.target)), !!i && (!(this.options.handle && !e && (x(this.options.handle, i).find("*").addBack().each(function () {
                this === t.target && (s = !0)
            }), !s)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function (t, e, i) {
            var s, a, n = this.options;
            if ((this.currentContainer = this).refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, x.extend(this.offset, {
                click: {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), n.containment && this._setContainment(), n.cursor && "auto" !== n.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", n.cursor), this.storedStylesheet = x("<style>*{ cursor: " + n.cursor + " !important; }</style>").appendTo(a)), n.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", n.opacity)), n.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", n.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i) for (s = this.containers.length - 1; 0 <= s; s--) this.containers[s]._trigger("activate", t, this._uiHash(this));
            return x.ui.ddmanager && (x.ui.ddmanager.current = this), x.ui.ddmanager && !n.dropBehaviour && x.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(t), !0
        },
        _mouseDrag: function (t) {
            var e, i, s, a, n = this.options, o = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = o = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = o = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - this.document.scrollTop() < n.scrollSensitivity ? o = this.document.scrollTop(this.document.scrollTop() - n.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < n.scrollSensitivity && (o = this.document.scrollTop(this.document.scrollTop() + n.scrollSpeed)), t.pageX - this.document.scrollLeft() < n.scrollSensitivity ? o = this.document.scrollLeft(this.document.scrollLeft() - n.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < n.scrollSensitivity && (o = this.document.scrollLeft(this.document.scrollLeft() + n.scrollSpeed))), !1 !== o && x.ui.ddmanager && !n.dropBehaviour && x.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; 0 <= e; e--) if (s = (i = this.items[e]).item[0], (a = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== s && !x.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !x.contains(this.element[0], s))) {
                if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                break
            }
            return this._contactContainers(t), x.ui.ddmanager && x.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (t, e) {
            var i, s, a, n;
            if (t) return x.ui.ddmanager && !this.options.dropBehaviour && x.ui.ddmanager.drop(this, t), this.options.revert ? (s = (i = this).placeholder.offset(), n = {}, (a = this.options.axis) && "x" !== a || (n.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (n.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, x(this.helper).animate(n, parseInt(this.options.revert, 10) || 500, function () {
                i._clear(t)
            })) : this._clear(t, e), !1
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp(new x.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var t = this.containers.length - 1; 0 <= t; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), x.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? x(this.domPosition.prev).after(this.currentItem) : x(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var t = this._getItemsAsjQuery(e && e.connected), i = [];
            return e = e || {}, x(t).each(function () {
                var t = (x(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                t && i.push((e.key || t[1] + "[]") + "=" + (e.key && e.expression ? t[1] : t[2]))
            }), !i.length && e.key && i.push(e.key + "="), i.join("&")
        },
        toArray: function (t) {
            var e = this._getItemsAsjQuery(t && t.connected), i = [];
            return t = t || {}, e.each(function () {
                i.push(x(t.item || this).attr(t.attribute || "id") || "")
            }), i
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top,
                a = s + this.helperProportions.height, n = t.left, o = n + t.width, r = t.top, l = r + t.height,
                c = this.offset.click.top, h = this.offset.click.left,
                d = "x" === this.options.axis || r < s + c && s + c < l,
                u = "y" === this.options.axis || n < e + h && e + h < o, p = d && u;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > n && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > a - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var e, i,
                s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                a = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && a) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(), a = this._getDragHorizontalDirection();
            return this.floating && a ? "right" === a && i || "left" === a && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 != t && (0 < t ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 != t && (0 < t ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (t) {
            function e() {
                o.push(this)
            }

            var i, s, a, n, o = [], r = [], l = this._connectWith();
            if (l && t) for (i = l.length - 1; 0 <= i; i--) for (s = (a = x(l[i], this.document[0])).length - 1; 0 <= s; s--) (n = x.data(a[s], this.widgetFullName)) && n !== this && !n.options.disabled && r.push([x.isFunction(n.options.items) ? n.options.items.call(n.element) : x(n.options.items, n.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), n]);
            for (r.push([x.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : x(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; 0 <= i; i--) r[i][0].each(e);
            return x(o)
        },
        _removeCurrentsFromItems: function () {
            var i = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = x.grep(this.items, function (t) {
                for (var e = 0; i.length > e; e++) if (i[e] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (t) {
            this.items = [], this.containers = [this];
            var e, i, s, a, n, o, r, l, c = this.items,
                h = [[x.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {item: this.currentItem}) : x(this.options.items, this.element), this]],
                d = this._connectWith();
            if (d && this.ready) for (e = d.length - 1; 0 <= e; e--) for (i = (s = x(d[e], this.document[0])).length - 1; 0 <= i; i--) (a = x.data(s[i], this.widgetFullName)) && a !== this && !a.options.disabled && (h.push([x.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, {item: this.currentItem}) : x(a.options.items, a.element), a]), this.containers.push(a));
            for (e = h.length - 1; 0 <= e; e--) for (n = h[e][1], i = 0, l = (o = h[e][0]).length; i < l; i++) (r = x(o[i])).data(this.widgetName + "-item", n), c.push({
                item: r,
                instance: n,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (t) {
            var e, i, s, a;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), e = this.items.length - 1; 0 <= e; e--) (i = this.items[e]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? x(this.options.toleranceElement, i.item) : i.item, t || (i.width = s.outerWidth(), i.height = s.outerHeight()), a = s.offset(), i.left = a.left, i.top = a.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (e = this.containers.length - 1; 0 <= e; e--) a = this.containers[e].element.offset(), this.containers[e].containerCache.left = a.left, this.containers[e].containerCache.top = a.top, this.containers[e].containerCache.width = this.containers[e].element.outerWidth(), this.containers[e].containerCache.height = this.containers[e].element.outerHeight();
            return this
        },
        _createPlaceholder: function (i) {
            var s, a = (i = i || this).options;
            a.placeholder && a.placeholder.constructor !== String || (s = a.placeholder, a.placeholder = {
                element: function () {
                    var t = i.currentItem[0].nodeName.toLowerCase(), e = x("<" + t + ">", i.document[0]);
                    return i._addClass(e, "ui-sortable-placeholder", s || i.currentItem[0].className)._removeClass(e, "ui-sortable-helper"), "tbody" === t ? i._createTrPlaceholder(i.currentItem.find("tr").eq(0), x("<tr>", i.document[0]).appendTo(e)) : "tr" === t ? i._createTrPlaceholder(i.currentItem, e) : "img" === t && e.attr("src", i.currentItem.attr("src")), s || e.css("visibility", "hidden"), e
                }, update: function (t, e) {
                    s && !a.forcePlaceholderSize || (e.height() || e.height(i.currentItem.innerHeight() - parseInt(i.currentItem.css("paddingTop") || 0, 10) - parseInt(i.currentItem.css("paddingBottom") || 0, 10)), e.width() || e.width(i.currentItem.innerWidth() - parseInt(i.currentItem.css("paddingLeft") || 0, 10) - parseInt(i.currentItem.css("paddingRight") || 0, 10)))
                }
            }), i.placeholder = x(a.placeholder.element.call(i.element, i.currentItem)), i.currentItem.after(i.placeholder), a.placeholder.update(i, i.placeholder)
        },
        _createTrPlaceholder: function (t, e) {
            var i = this;
            t.children().each(function () {
                x("<td>&#160;</td>", i.document[0]).attr("colspan", x(this).attr("colspan") || 1).appendTo(e)
            })
        },
        _contactContainers: function (t) {
            for (var e, i, s, a, n, o, r, l, c, h = null, d = null, u = this.containers.length - 1; 0 <= u; u--) if (!x.contains(this.currentItem[0], this.containers[u].element[0])) if (this._intersectsWith(this.containers[u].containerCache)) {
                if (h && x.contains(this.containers[u].element[0], h.element[0])) continue;
                h = this.containers[u], d = u
            } else this.containers[u].containerCache.over && (this.containers[u]._trigger("out", t, this._uiHash(this)), this.containers[u].containerCache.over = 0);
            if (h) if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1); else {
                for (i = 1e4, s = null, a = (l = h.floating || this._isFloating(this.currentItem)) ? "left" : "top", n = l ? "width" : "height", c = l ? "pageX" : "pageY", e = this.items.length - 1; 0 <= e; e--) x.contains(this.containers[d].element[0], this.items[e].item[0]) && this.items[e].item[0] !== this.currentItem[0] && (o = this.items[e].item.offset()[a], r = !1, t[c] - o > this.items[e][n] / 2 && (r = !0), i > Math.abs(t[c] - o) && (i = Math.abs(t[c] - o), s = this.items[e], this.direction = r ? "up" : "down"));
                if (!s && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[d]) return void (this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1));
                s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), this.containers[d].containerCache.over = 1
            }
        },
        _createHelper: function (t) {
            var e = this.options,
                i = x.isFunction(e.helper) ? x(e.helper.apply(this.element[0], [t, this.currentItem])) : "clone" === e.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || x("parent" !== e.appendTo ? e.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), i[0].style.width && !e.forceHelperSize || i.width(this.currentItem.width()), i[0].style.height && !e.forceHelperSize || i.height(this.currentItem.height()), i
        },
        _adjustOffsetFromHelper: function (t) {
            "string" == typeof t && (t = t.split(" ")), x.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && x.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && x.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.currentItem.position();
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var t, e, i, s = this.options;
            "parent" === s.containment && (s.containment = this.helper[0].parentNode), "document" !== s.containment && "window" !== s.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (t = x(s.containment)[0], e = x(s.containment).offset(), i = "hidden" !== x(t).css("overflow"), this.containment = [e.left + (parseInt(x(t).css("borderLeftWidth"), 10) || 0) + (parseInt(x(t).css("paddingLeft"), 10) || 0) - this.margins.left, e.top + (parseInt(x(t).css("borderTopWidth"), 10) || 0) + (parseInt(x(t).css("paddingTop"), 10) || 0) - this.margins.top, e.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(x(t).css("borderLeftWidth"), 10) || 0) - (parseInt(x(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, e.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(x(t).css("borderTopWidth"), 10) || 0) - (parseInt(x(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (t, e) {
            e = e || this.position;
            var i = "absolute" === t ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && x.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                a = /(html|body)/i.test(s[0].tagName);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : s.scrollTop()) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : s.scrollLeft()) * i
            }
        },
        _generatePosition: function (t) {
            var e, i, s = this.options, a = t.pageX, n = t.pageY,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && x.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                r = /(html|body)/i.test(o[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (n = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (n = this.containment[3] + this.offset.click.top)), s.grid && (e = this.originalPageY + Math.round((n - this.originalPageY) / s.grid[1]) * s.grid[1], n = !this.containment || e - this.offset.click.top >= this.containment[1] && e - this.offset.click.top <= this.containment[3] ? e : e - this.offset.click.top >= this.containment[1] ? e - s.grid[1] : e + s.grid[1], i = this.originalPageX + Math.round((a - this.originalPageX) / s.grid[0]) * s.grid[0], a = !this.containment || i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - s.grid[0] : i + s.grid[0])), {
                top: n - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : o.scrollTop()),
                left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : o.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var a = this.counter;
            this._delay(function () {
                a === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (t, e) {
            function i(e, i, s) {
                return function (t) {
                    s._trigger(e, t, i._uiHash(i))
                }
            }

            this.reverting = !1;
            var s, a = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) "auto" !== this._storedCSS[s] && "static" !== this._storedCSS[s] || (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && a.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || a.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (a.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), a.push(function (e) {
                return function (t) {
                    e._trigger("receive", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), a.push(function (e) {
                return function (t) {
                    e._trigger("update", t, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; 0 <= s; s--) e || a.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (a.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; a.length > s; s++) a[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            !1 === x.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function (t) {
            var e = t || this;
            return {
                helper: e.helper,
                placeholder: e.placeholder || x([]),
                position: e.position,
                originalPosition: e.originalPosition,
                offset: e.positionAbs,
                item: e.currentItem,
                sender: t ? t.element : null
            }
        }
    }), x.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var s = this._super(), a = this.element;
            return x.each(["min", "max", "step"], function (t, e) {
                var i = a.attr(e);
                null != i && i.length && (s[e] = i)
            }), s
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)))
            }, mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((0 < e ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (t) {
                function e() {
                    this.element[0] === x.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = i, this._delay(function () {
                        this.previous = i
                    }))
                }

                var i = this.element[0] === x.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val();
                t.preventDefault(), e.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, e.call(this)
                }), !1 !== this._start(t) && this._repeat(null, x(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (t) {
                return x(t.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(t) && void this._repeat(null, x(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function () {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && 0 < this.uiSpinner.height() && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function (t) {
            var e = this.options, i = x.ui.keyCode;
            switch (t.keyCode) {
                case i.UP:
                    return this._repeat(null, 1, t), !0;
                case i.DOWN:
                    return this._repeat(null, -1, t), !0;
                case i.PAGE_UP:
                    return this._repeat(null, e.page, t), !0;
                case i.PAGE_DOWN:
                    return this._repeat(null, -e.page, t), !0
            }
            return !1
        },
        _start: function (t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0)
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++)
        },
        _increment: function (t) {
            var e = this.options.incremental;
            return e ? x.isFunction(e) ? e(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e = this.options, i = null !== e.min ? e.min : 0, s = t - i;
            return t = i + (s = Math.round(s / e.step) * e.step), t = parseFloat(t.toFixed(this._precision())), null !== e.max && t > e.max ? e.max : null !== e.min && e.min > t ? e.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            var i, s, a;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : ("max" !== t && "min" !== t && "step" !== t || "string" != typeof e || (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), a = this.buttons.last().find(".ui-icon"), this._removeClass(a, null, this.options.icons.down), this._addClass(a, null, e.down)), void this._super(t, e))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: e(function (t) {
            this._super(t)
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function (t, e) {
            var i;
            "" === t || null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? void e(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    }), !1 !== x.uiBackCompat && x.widget("ui.spinner", x.ui.spinner, {
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        }, _uiSpinnerHtml: function () {
            return "<span>"
        }, _buttonHtml: function () {
            return "<a></a><a></a>"
        }
    }), x.ui.spinner, x.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (nt = /#.*$/, function (t) {
            var e = t.href.replace(nt, ""), i = location.href.replace(nt, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {
            }
            try {
                i = decodeURIComponent(i)
            } catch (t) {
            }
            return 1 < t.hash.length && e === i
        }),
        _create: function () {
            var e = this, t = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, t.collapsible), this._processTabs(), t.active = this._initialActive(), x.isArray(t.disabled) && (t.disabled = x.unique(t.disabled.concat(x.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(t.active) : x(), this._refresh(), this.active.length && this.load(t.active)
        },
        _initialActive: function () {
            var i = this.options.active, t = this.options.collapsible, s = location.hash.substring(1);
            return null === i && (s && this.tabs.each(function (t, e) {
                return x(e).attr("aria-controls") === s ? (i = t, !1) : void 0
            }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== i && -1 !== i || (i = !!this.tabs.length && 0)), !1 !== i && (-1 === (i = this.tabs.index(this.tabs.eq(i))) && (i = !t && 0)), !t && !1 === i && this.anchors.length && (i = 0), i
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : x()}
        },
        _tabKeydown: function (t) {
            var e = x(x.ui.safeActiveElement(this.document[0])).closest("li"), i = this.tabs.index(e), s = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case x.ui.keyCode.RIGHT:
                    case x.ui.keyCode.DOWN:
                        i++;
                        break;
                    case x.ui.keyCode.UP:
                    case x.ui.keyCode.LEFT:
                        s = !1, i--;
                        break;
                    case x.ui.keyCode.END:
                        i = this.anchors.length - 1;
                        break;
                    case x.ui.keyCode.HOME:
                        i = 0;
                        break;
                    case x.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                    case x.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, s), t.ctrlKey || t.metaKey || (e.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", i)
                }, this.delay))
            }
        },
        _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === x.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (t) {
            return t.altKey && t.keyCode === x.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === x.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (t, e) {
            for (var i = this.tabs.length - 1; -1 !== x.inArray((i < t && (t = 0), t < 0 && (t = i), t), this.options.disabled);) t = e ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void ("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options, e = this.tablist.children(":has(a[href])");
            t.disabled = x.map(e.filter(".ui-state-disabled"), function (t) {
                return e.index(t)
            }), this._processTabs(), !1 !== t.active && this.anchors.length ? this.active.length && !x.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = x()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = x()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var l = this, t = this.tabs, e = this.anchors, i = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
                x(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                x(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return x("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = x(), this.anchors.each(function (t, e) {
                var i, s, a, n = x(e).uniqueId().attr("id"), o = x(e).closest("li"), r = o.attr("aria-controls");
                l._isLocal(e) ? (a = (i = e.hash).substring(1), s = l.element.find(l._sanitizeSelector(i))) : (i = "#" + (a = o.attr("aria-controls") || x({}).uniqueId()[0].id), (s = l.element.find(i)).length || (s = l._createPanel(a)).insertAfter(l.panels[t - 1] || l.tablist), s.attr("aria-live", "polite")), s.length && (l.panels = l.panels.add(s)), r && o.data("ui-tabs-aria-controls", r), o.attr({
                    "aria-controls": a,
                    "aria-labelledby": n
                }), s.attr("aria-labelledby", n)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), t && (this._off(t.not(this.tabs)), this._off(e.not(this.anchors)), this._off(i.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (t) {
            return x("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (t) {
            var e, i, s;
            for (x.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), s = 0; i = this.tabs[s]; s++) e = x(i), !0 === t || -1 !== x.inArray(s, t) ? (e.attr("aria-disabled", "true"), this._addClass(e, null, "ui-state-disabled")) : (e.removeAttr("aria-disabled"), this._removeClass(e, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === t)
        },
        _setupEvents: function (t) {
            var i = {};
            t && x.each(t.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var i, e = this.element.parent();
            "fill" === t ? (i = e.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = x(this), e = t.css("position");
                "absolute" !== e && "fixed" !== e && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= x(this).outerHeight(!0)
            }), this.panels.each(function () {
                x(this).height(Math.max(0, i - x(this).innerHeight() + x(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                i = Math.max(i, x(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (t) {
            var e = this.options, i = this.active, s = x(t.currentTarget).closest("li"), a = s[0] === i[0],
                n = a && e.collapsible, o = n ? x() : this._getPanelForTab(s),
                r = i.length ? this._getPanelForTab(i) : x(),
                l = {oldTab: i, oldPanel: r, newTab: n ? x() : s, newPanel: o};
            t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || a && !e.collapsible || !1 === this._trigger("beforeActivate", t, l) || (e.active = !n && this.tabs.index(s), this.active = a ? x() : s, this.xhr && this.xhr.abort(), r.length || o.length || x.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(s), t), this._toggle(t, l))
        },
        _toggle: function (t, e) {
            function i() {
                a.running = !1, a._trigger("activate", t, e)
            }

            function s() {
                a._addClass(e.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), n.length && a.options.show ? a._show(n, a.options.show, i) : (n.show(), i())
            }

            var a = this, n = e.newPanel, o = e.oldPanel;
            this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function () {
                a._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s()
            }) : (this._removeClass(e.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), s()), o.attr("aria-hidden", "true"), e.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), n.length && o.length ? e.oldTab.attr("tabIndex", -1) : n.length && this.tabs.filter(function () {
                return 0 === x(this).attr("tabIndex")
            }).attr("tabIndex", -1), n.attr("aria-hidden", "false"), e.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (t) {
            var e, i = this._findActive(t);
            i[0] !== this.active[0] && (i.length || (i = this.active), e = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: e,
                currentTarget: e,
                preventDefault: x.noop
            }))
        },
        _findActive: function (t) {
            return !1 === t ? x() : this.tabs.eq(t)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + x.ui.escapeSelector(t) + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                x.data(this, "ui-tabs-destroy") ? x(this).remove() : x(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function () {
                var t = x(this), e = t.data("ui-tabs-aria-controls");
                e ? t.attr("aria-controls", e).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (i) {
            var t = this.options.disabled;
            !1 !== t && (t = void 0 !== i && (i = this._getIndex(i), x.isArray(t) ? x.map(t, function (t) {
                return t !== i ? t : null
            }) : x.map(this.tabs, function (t, e) {
                return e !== i ? e : null
            })), this._setOptionDisabled(t))
        },
        disable: function (t) {
            var e = this.options.disabled;
            if (!0 !== e) {
                if (void 0 === t) e = !0; else {
                    if (t = this._getIndex(t), -1 !== x.inArray(t, e)) return;
                    e = x.isArray(e) ? x.merge([t], e).sort() : [t]
                }
                this._setOptionDisabled(e)
            }
        },
        load: function (t, s) {
            t = this._getIndex(t);

            function a(t, e) {
                "abort" === e && n.panels.stop(!1, !0), n._removeClass(i, "ui-tabs-loading"), o.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
            }

            var n = this, i = this.tabs.eq(t), e = i.find(".ui-tabs-anchor"), o = this._getPanelForTab(i),
                r = {tab: i, panel: o};
            this._isLocal(e[0]) || (this.xhr = x.ajax(this._ajaxSettings(e, s, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(i, "ui-tabs-loading"), o.attr("aria-busy", "true"), this.xhr.done(function (t, e, i) {
                setTimeout(function () {
                    o.html(t), n._trigger("load", s, r), a(i, e)
                }, 1)
            }).fail(function (t, e) {
                setTimeout(function () {
                    a(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function (t, i, s) {
            var a = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""), beforeSend: function (t, e) {
                    return a._trigger("beforeLoad", i, x.extend({jqXHR: t, ajaxSettings: e}, s))
                }
            }
        },
        _getPanelForTab: function (t) {
            var e = x(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + e))
        }
    }), !1 !== x.uiBackCompat && x.widget("ui.tabs", x.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), x.ui.tabs, x.widget("ui.tooltip", {
        version: "1.12.1", options: {
            classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"},
            content: function () {
                var t = x(this).attr("title") || "";
                return x("<a>").text(t).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            track: !1,
            close: null,
            open: null
        }, _addDescribedBy: function (t, e) {
            var i = (t.attr("aria-describedby") || "").split(/\s+/);
            i.push(e), t.data("ui-tooltip-id", e).attr("aria-describedby", x.trim(i.join(" ")))
        }, _removeDescribedBy: function (t) {
            var e = t.data("ui-tooltip-id"), i = (t.attr("aria-describedby") || "").split(/\s+/), s = x.inArray(e, i);
            -1 !== s && i.splice(s, 1), t.removeData("ui-tooltip-id"), (i = x.trim(i.join(" "))) ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = x("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = x([])
        }, _setOption: function (t, e) {
            var i = this;
            this._super(t, e), "content" === t && x.each(this.tooltips, function (t, e) {
                i._updateContent(e.element)
            })
        }, _setOptionDisabled: function (t) {
            this[t ? "_disable" : "_enable"]()
        }, _disable: function () {
            var s = this;
            x.each(this.tooltips, function (t, e) {
                var i = x.Event("blur");
                i.target = i.currentTarget = e.element[0], s.close(i, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                var t = x(this);
                return t.is("[title]") ? t.data("ui-tooltip-title", t.attr("title")).removeAttr("title") : void 0
            }))
        }, _enable: function () {
            this.disabledTitles.each(function () {
                var t = x(this);
                t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
            }), this.disabledTitles = x([])
        }, open: function (t) {
            var i = this, e = x(t ? t.target : this.element).closest(this.options.items);
            e.length && !e.data("ui-tooltip-id") && (e.attr("title") && e.data("ui-tooltip-title", e.attr("title")), e.data("ui-tooltip-open", !0), t && "mouseover" === t.type && e.parents().each(function () {
                var t, e = x(this);
                e.data("ui-tooltip-open") && ((t = x.Event("blur")).target = t.currentTarget = this, i.close(t, !0)), e.attr("title") && (e.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: e.attr("title")
                }, e.attr("title", ""))
            }), this._registerCloseHandlers(t, e), this._updateContent(e, t))
        }, _updateContent: function (e, i) {
            var t, s = this.options.content, a = this, n = i ? i.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(i, e, s) : void ((t = s.call(e[0], function (t) {
                a._delay(function () {
                    e.data("ui-tooltip-open") && (i && (i.type = n), this._open(i, e, t))
                })
            })) && this._open(i, e, t))
        }, _open: function (t, e, i) {
            function s(t) {
                l.of = t, n.is(":hidden") || n.position(l)
            }

            var a, n, o, r, l = x.extend({}, this.options.position);
            if (i) {
                if (a = this._find(e)) return void a.tooltip.find(".ui-tooltip-content").html(i);
                e.is("[title]") && (t && "mouseover" === t.type ? e.attr("title", "") : e.removeAttr("title")), a = this._tooltip(e), n = a.tooltip, this._addDescribedBy(e, n.attr("id")), n.find(".ui-tooltip-content").html(i), this.liveRegion.children().hide(), (r = x("<div>").html(n.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), r.removeAttr("id").find("[id]").removeAttr("id"), r.appendTo(this.liveRegion), this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {mousemove: s}), s(t)) : n.position(x.extend({of: e}, this.options.position)), n.hide(), this._show(n, this.options.show), this.options.track && this.options.show && this.options.show.delay && (o = this.delayedShow = setInterval(function () {
                    n.is(":visible") && (s(l.of), clearInterval(o))
                }, x.fx.interval)), this._trigger("open", t, {tooltip: n})
            }
        }, _registerCloseHandlers: function (t, i) {
            var e = {
                keyup: function (t) {
                    var e;
                    t.keyCode === x.ui.keyCode.ESCAPE && ((e = x.Event(t)).currentTarget = i[0], this.close(e, !0))
                }
            };
            i[0] !== this.element[0] && (e.remove = function () {
                this._removeTooltip(this._find(i).tooltip)
            }), t && "mouseover" !== t.type || (e.mouseleave = "close"), t && "focusin" !== t.type || (e.focusout = "close"), this._on(!0, i, e)
        }, close: function (t) {
            var e, i = this, s = x(t ? t.currentTarget : this.element), a = this._find(s);
            return a ? (e = a.tooltip, void (a.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), a.hiding = !0, e.stop(!0), this._hide(e, this.options.hide, function () {
                i._removeTooltip(x(this))
            }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && x.each(this.parents, function (t, e) {
                x(e.element).attr("title", e.title), delete i.parents[t]
            }), a.closing = !0, this._trigger("close", t, {tooltip: e}), a.hiding || (a.closing = !1)))) : void s.removeData("ui-tooltip-open")
        }, _tooltip: function (t) {
            var e = x("<div>").attr("role", "tooltip"), i = x("<div>").appendTo(e), s = e.uniqueId().attr("id");
            return this._addClass(i, "ui-tooltip-content"), this._addClass(e, "ui-tooltip", "ui-widget ui-widget-content"), e.appendTo(this._appendTo(t)), this.tooltips[s] = {
                element: t,
                tooltip: e
            }
        }, _find: function (t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _appendTo: function (t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        }, _destroy: function () {
            var a = this;
            x.each(this.tooltips, function (t, e) {
                var i = x.Event("blur"), s = e.element;
                i.target = i.currentTarget = s[0], a.close(i, !0), x("#" + t).remove(), s.data("ui-tooltip-title") && (s.attr("title") || s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== x.uiBackCompat && x.widget("ui.tooltip", x.ui.tooltip, {
        options: {tooltipClass: null},
        _tooltip: function () {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    }), x.ui.tooltip
}), function () {
    var r, t, a, o, i = function (t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }, n = {}.hasOwnProperty;

    function e() {
        this.options_index = 0, this.parsed = []
    }

    function s(t, e) {
        this.form_field = t, this.options = null != e ? e : {}, this.label_click_handler = i(this.label_click_handler, this), s.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
    }

    function l() {
        return l.__super__.constructor.apply(this, arguments)
    }

    e.prototype.add_node = function (t) {
        return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
    }, e.prototype.add_group = function (t) {
        var e, i, s, a, n, o = this.parsed.length;
        for (this.parsed.push({
            array_index: o,
            group: !0,
            label: t.label,
            title: t.title ? t.title : void 0,
            children: 0,
            disabled: t.disabled,
            classes: t.className
        }), n = [], e = 0, i = (a = t.childNodes).length; e < i; e++) s = a[e], n.push(this.add_option(s, o, t.disabled));
        return n
    }, e.prototype.add_option = function (t, e, i) {
        if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: t.value,
            text: t.text,
            html: t.innerHTML,
            title: t.title ? t.title : void 0,
            selected: t.selected,
            disabled: !0 === i ? i : t.disabled,
            group_array_index: e,
            group_label: null != e ? this.parsed[e].label : null,
            classes: t.className,
            style: t.style.cssText
        })) : this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: !0
        }), this.options_index += 1
    }, (o = e).select_to_array = function (t) {
        for (var e, i = new o, s = t.childNodes, a = 0, n = s.length; a < n; a++) e = s[a], i.add_node(e);
        return i.parsed
    }, s.prototype.set_default_values = function () {
        var e, i;
        return this.click_test_action = (e = this, function (t) {
            return e.test_active_click(t)
        }), this.activate_action = (i = this, function (t) {
            return i.activate_field(t)
        }), this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select
    }, s.prototype.set_default_text = function () {
        return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || s.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || s.default_single_text, this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || s.default_no_result_text
    }, s.prototype.choice_label = function (t) {
        return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + this.escape_html(t.group_label) + "</b>" + t.html : t.html
    }, s.prototype.mouse_enter = function () {
        return this.mouse_on_container = !0
    }, s.prototype.mouse_leave = function () {
        return this.mouse_on_container = !1
    }, s.prototype.input_focus = function (t) {
        if (this.is_multiple) {
            if (!this.active_field) return setTimeout((e = this, function () {
                return e.container_mousedown()
            }), 50)
        } else if (!this.active_field) return this.activate_field();
        var e
    }, s.prototype.input_blur = function (t) {
        if (!this.mouse_on_container) return this.active_field = !1, setTimeout((e = this, function () {
            return e.blur_test()
        }), 100);
        var e
    }, s.prototype.label_click_handler = function (t) {
        return this.is_multiple ? this.container_mousedown(t) : this.activate_field()
    }, s.prototype.results_option_build = function (t) {
        for (var e, i, s = "", a = 0, n = this.results_data, o = 0, r = n.length; o < r && ((i = "") !== (i = (e = n[o]).group ? this.result_add_group(e) : this.result_add_option(e)) && (a++, s += i), null != t && t.first && (e.selected && this.is_multiple ? this.choice_build(e) : e.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(e))), !(a >= this.max_shown_results)); o++) ;
        return s
    }, s.prototype.result_add_option = function (t) {
        var e, i;
        return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), (i = document.createElement("li")).className = e.join(" "), t.style && (i.style.cssText = t.style), i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.highlighted_html || t.html, t.title && (i.title = t.title), this.outerHTML(i)) : ""
    }, s.prototype.result_add_group = function (t) {
        var e, i;
        return (t.search_match || t.group_match) && 0 < t.active_options ? ((e = []).push("group-result"), t.classes && e.push(t.classes), (i = document.createElement("li")).className = e.join(" "), i.innerHTML = t.highlighted_html || this.escape_html(t.label), t.title && (i.title = t.title), this.outerHTML(i)) : ""
    }, s.prototype.results_update_field = function () {
        if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
    }, s.prototype.reset_single_select_options = function () {
        for (var t, e = this.results_data, i = [], s = 0, a = e.length; s < a; s++) (t = e[s]).selected ? i.push(t.selected = !1) : i.push(void 0);
        return i
    }, s.prototype.results_toggle = function () {
        return this.results_showing ? this.results_hide() : this.results_show()
    }, s.prototype.results_search = function (t) {
        return this.results_showing ? this.winnow_results() : this.results_show()
    }, s.prototype.winnow_results = function (t) {
        var e, i, s, a, n, o, r, l, c, h, d, u, p, f, m;
        for (this.no_results_clear(), h = 0, e = (r = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), c = this.get_search_regex(e), s = 0, a = (l = this.results_data).length; s < a; s++) (n = l[s]).search_match = !1, u = d = null, n.highlighted_html = "", this.include_option_in_results(n) && (n.group && (n.group_match = !1, n.active_options = 0), null != n.group_array_index && this.results_data[n.group_array_index] && (0 === (d = this.results_data[n.group_array_index]).active_options && d.search_match && (h += 1), d.active_options += 1), m = n.group ? n.label : n.text, n.group && !this.group_search || (u = this.search_string_match(m, c), n.search_match = null != u, n.search_match && !n.group && (h += 1), n.search_match ? (r.length && (p = u.index, o = m.slice(0, p), i = m.slice(p, p + r.length), f = m.slice(p + r.length), n.highlighted_html = this.escape_html(o) + "<em>" + this.escape_html(i) + "</em>" + this.escape_html(f)), null != d && (d.group_match = !0)) : null != n.group_array_index && this.results_data[n.group_array_index].search_match && (n.search_match = !0)));
        return this.result_clear_highlight(), h < 1 && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), null != t && t.skip_highlight ? void 0 : this.winnow_results_set_highlight())
    }, s.prototype.get_search_regex = function (t) {
        var e, i = this.search_contains ? t : "(^|\\s|\\b)" + t + "[^\\s]*";
        return this.enable_split_word_search || this.search_contains || (i = "^" + i), e = this.case_sensitive_search ? "" : "i", new RegExp(i, e)
    }, s.prototype.search_string_match = function (t, e) {
        var i = e.exec(t);
        return !this.search_contains && null != i && i[1] && (i.index += 1), i
    }, s.prototype.choices_count = function () {
        var t, e, i;
        if (null != this.selected_option_count) return this.selected_option_count;
        for (t = this.selected_option_count = 0, e = (i = this.form_field.options).length; t < e; t++) i[t].selected && (this.selected_option_count += 1);
        return this.selected_option_count
    }, s.prototype.choices_click = function (t) {
        if (t.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show()
    }, s.prototype.keydown_checker = function (t) {
        var e, i = null != (e = t.which) ? e : t.keyCode;
        switch (this.search_field_scale(), 8 !== i && this.pending_backstroke && this.clear_backstroke(), i) {
            case 8:
                this.backstroke_length = this.get_search_field_value().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                break;
            case 13:
            case 27:
                this.results_showing && t.preventDefault();
                break;
            case 32:
                this.disable_search && t.preventDefault();
                break;
            case 38:
                t.preventDefault(), this.keyup_arrow();
                break;
            case 40:
                t.preventDefault(), this.keydown_arrow()
        }
    }, s.prototype.keyup_checker = function (t) {
        var e, i = null != (e = t.which) ? e : t.keyCode;
        switch (this.search_field_scale(), i) {
            case 8:
                this.is_multiple && this.backstroke_length < 1 && 0 < this.choices_count() ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), this.results_search());
                break;
            case 13:
                t.preventDefault(), this.results_showing && this.result_select(t);
                break;
            case 27:
                this.results_showing && this.results_hide();
                break;
            case 9:
            case 16:
            case 17:
            case 18:
            case 38:
            case 40:
            case 91:
                break;
            default:
                this.results_search()
        }
    }, s.prototype.clipboard_event_checker = function (t) {
        var e;
        if (!this.is_disabled) return setTimeout((e = this, function () {
            return e.results_search()
        }), 50)
    }, s.prototype.container_width = function () {
        return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
    }, s.prototype.include_option_in_results = function (t) {
        return !(this.is_multiple && !this.display_selected_options && t.selected || !this.display_disabled_options && t.disabled || t.empty)
    }, s.prototype.search_results_touchstart = function (t) {
        return this.touch_started = !0, this.search_results_mouseover(t)
    }, s.prototype.search_results_touchmove = function (t) {
        return this.touch_started = !1, this.search_results_mouseout(t)
    }, s.prototype.search_results_touchend = function (t) {
        if (this.touch_started) return this.search_results_mouseup(t)
    }, s.prototype.outerHTML = function (t) {
        var e;
        return t.outerHTML ? t.outerHTML : ((e = document.createElement("div")).appendChild(t), e.innerHTML)
    }, s.prototype.get_single_html = function () {
        return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
    }, s.prototype.get_multi_html = function () {
        return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
    }, s.prototype.get_no_results_html = function (t) {
        return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + this.escape_html(t) + "</span>\n</li>"
    }, s.browser_is_supported = function () {
        return "Microsoft Internet Explorer" === window.navigator.appName ? 8 <= document.documentMode : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
    }, s.default_multiple_text = "Select Some Options", s.default_single_text = "Select an Option", s.default_no_result_text = "No results match", t = s, (r = jQuery).fn.extend({
        chosen: function (s) {
            return t.browser_is_supported() ? this.each(function (t) {
                var e = r(this), i = e.data("chosen");
                "destroy" !== s ? i instanceof a || e.data("chosen", new a(this, s)) : i instanceof a && i.destroy()
            }) : this
        }
    }), function (t, e) {
        for (var i in e) n.call(e, i) && (t[i] = e[i]);

        function s() {
            this.constructor = t
        }

        s.prototype = e.prototype, t.prototype = new s, t.__super__ = e.prototype
    }(l, t), l.prototype.setup = function () {
        return this.form_field_jq = r(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex
    }, l.prototype.set_up_html = function () {
        var t, e = ["chosen-container"];
        return e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), t = {
            class: e.join(" "),
            title: this.form_field.title
        }, this.form_field.id.length && (t.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = r("<div />", t), this.container.width(this.container_width()), this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
    }, l.prototype.on_ready = function () {
        return this.form_field_jq.trigger("chosen:ready", {chosen: this})
    }, l.prototype.register_observers = function () {
        var e, i, s, a, n, o, r, l, c, h, d, u, p, f, m, _, g, v, b, y, w, k, x, C;
        return this.container.on("touchstart.chosen", (e = this, function (t) {
            e.container_mousedown(t)
        })), this.container.on("touchend.chosen", (i = this, function (t) {
            i.container_mouseup(t)
        })), this.container.on("mousedown.chosen", (s = this, function (t) {
            s.container_mousedown(t)
        })), this.container.on("mouseup.chosen", (a = this, function (t) {
            a.container_mouseup(t)
        })), this.container.on("mouseenter.chosen", (n = this, function (t) {
            n.mouse_enter(t)
        })), this.container.on("mouseleave.chosen", (o = this, function (t) {
            o.mouse_leave(t)
        })), this.search_results.on("mouseup.chosen", (r = this, function (t) {
            r.search_results_mouseup(t)
        })), this.search_results.on("mouseover.chosen", (l = this, function (t) {
            l.search_results_mouseover(t)
        })), this.search_results.on("mouseout.chosen", (c = this, function (t) {
            c.search_results_mouseout(t)
        })), this.search_results.on("mousewheel.chosen DOMMouseScroll.chosen", (h = this, function (t) {
            h.search_results_mousewheel(t)
        })), this.search_results.on("touchstart.chosen", (d = this, function (t) {
            d.search_results_touchstart(t)
        })), this.search_results.on("touchmove.chosen", (u = this, function (t) {
            u.search_results_touchmove(t)
        })), this.search_results.on("touchend.chosen", (p = this, function (t) {
            p.search_results_touchend(t)
        })), this.form_field_jq.on("chosen:updated.chosen", (f = this, function (t) {
            f.results_update_field(t)
        })), this.form_field_jq.on("chosen:activate.chosen", (m = this, function (t) {
            m.activate_field(t)
        })), this.form_field_jq.on("chosen:open.chosen", (_ = this, function (t) {
            _.container_mousedown(t)
        })), this.form_field_jq.on("chosen:close.chosen", (g = this, function (t) {
            g.close_field(t)
        })), this.search_field.on("blur.chosen", (v = this, function (t) {
            v.input_blur(t)
        })), this.search_field.on("keyup.chosen", (b = this, function (t) {
            b.keyup_checker(t)
        })), this.search_field.on("keydown.chosen", (y = this, function (t) {
            y.keydown_checker(t)
        })), this.search_field.on("focus.chosen", (w = this, function (t) {
            w.input_focus(t)
        })), this.search_field.on("cut.chosen", (k = this, function (t) {
            k.clipboard_event_checker(t)
        })), this.search_field.on("paste.chosen", (x = this, function (t) {
            x.clipboard_event_checker(t)
        })), this.is_multiple ? this.search_choices.on("click.chosen", (C = this, function (t) {
            C.choices_click(t)
        })) : this.container.on("click.chosen", function (t) {
            t.preventDefault()
        })
    }, l.prototype.destroy = function () {
        return r(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), 0 < this.form_field_label.length && this.form_field_label.off("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
    }, l.prototype.search_field_disabled = function () {
        return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, this.is_multiple || this.selected_item.off("focus.chosen", this.activate_field), this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.on("focus.chosen", this.activate_field)
    }, l.prototype.container_mousedown = function (t) {
        var e;
        if (!this.is_disabled) return !t || "mousedown" !== (e = t.type) && "touchstart" !== e || this.results_showing || t.preventDefault(), null != t && r(t.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !t || r(t.target)[0] !== this.selected_item[0] && !r(t.target).parents("a.chosen-single").length || (t.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), r(this.container[0].ownerDocument).on("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
    }, l.prototype.container_mouseup = function (t) {
        if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
    }, l.prototype.search_results_mousewheel = function (t) {
        var e;
        if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
    }, l.prototype.blur_test = function (t) {
        if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
    }, l.prototype.close_field = function () {
        return r(this.container[0].ownerDocument).off("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), this.search_field.blur()
    }, l.prototype.activate_field = function () {
        if (!this.is_disabled) return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
    }, l.prototype.test_active_click = function (t) {
        var e = r(t.target).closest(".chosen-container");
        return e.length && this.container[0] === e[0] ? this.active_field = !0 : this.close_field()
    }, l.prototype.results_build = function () {
        return this.parsing = !0, this.selected_option_count = null, this.results_data = o.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({first: !0})), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
    }, l.prototype.result_do_highlight = function (t) {
        var e, i, s, a;
        if (t.length) {
            if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), (s = parseInt(this.search_results.css("maxHeight"), 10)) + (a = this.search_results.scrollTop()) <= (e = (i = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight())) return this.search_results.scrollTop(0 < e - s ? e - s : 0);
            if (i < a) return this.search_results.scrollTop(i)
        }
    }, l.prototype.result_clear_highlight = function () {
        return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
    }, l.prototype.results_show = function () {
        return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {chosen: this}))
    }, l.prototype.update_results_content = function (t) {
        return this.search_results.html(t)
    }, l.prototype.results_hide = function () {
        return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {chosen: this})), this.results_showing = !1
    }, l.prototype.set_tab_index = function (t) {
        var e;
        if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e
    }, l.prototype.set_label_behavior = function () {
        if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = r("label[for='" + this.form_field.id + "']")), 0 < this.form_field_label.length) return this.form_field_label.on("click.chosen", this.label_click_handler)
    }, l.prototype.show_search_field_default = function () {
        return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
    }, l.prototype.search_results_mouseup = function (t) {
        var e = r(t.target).hasClass("active-result") ? r(t.target) : r(t.target).parents(".active-result").first();
        if (e.length) return this.result_highlight = e, this.result_select(t), this.search_field.focus()
    }, l.prototype.search_results_mouseover = function (t) {
        var e = r(t.target).hasClass("active-result") ? r(t.target) : r(t.target).parents(".active-result").first();
        if (e) return this.result_do_highlight(e)
    }, l.prototype.search_results_mouseout = function (t) {
        if (r(t.target).hasClass("active-result") || r(t.target).parents(".active-result").first()) return this.result_clear_highlight()
    }, l.prototype.choice_build = function (t) {
        var e, i, s = r("<li />", {class: "search-choice"}).html("<span>" + this.choice_label(t) + "</span>");
        return t.disabled ? s.addClass("search-choice-disabled") : ((e = r("<a />", {
            class: "search-choice-close",
            "data-option-array-index": t.array_index
        })).on("click.chosen", (i = this, function (t) {
            return i.choice_destroy_link_click(t)
        })), s.append(e)), this.search_container.before(s)
    }, l.prototype.choice_destroy_link_click = function (t) {
        if (t.preventDefault(), t.stopPropagation(), !this.is_disabled) return this.choice_destroy(r(t.target))
    }, l.prototype.choice_destroy = function (t) {
        if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), this.is_multiple && 0 < this.choices_count() && this.get_search_field_value().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
    }, l.prototype.results_reset = function () {
        if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.trigger_form_field_change(), this.active_field) return this.results_hide()
    }, l.prototype.results_reset_cleanup = function () {
        return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
    }, l.prototype.result_select = function (t) {
        var e, i;
        if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {chosen: this}), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), (i = this.results_data[e[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), this.is_multiple && (!this.hide_results_on_select || t.metaKey || t.ctrlKey) ? t.metaKey || t.ctrlKey ? this.winnow_results({skip_highlight: !0}) : (this.search_field.val(""), this.winnow_results()) : (this.results_hide(), this.show_search_field_default()), !this.is_multiple && this.form_field.selectedIndex === this.current_selectedIndex || this.trigger_form_field_change({selected: this.form_field.options[i.options_index].value}), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())
    }, l.prototype.single_set_selected_text = function (t) {
        return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
    }, l.prototype.result_deselect = function (t) {
        var e = this.results_data[t];
        return !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({deselected: this.form_field.options[e.options_index].value}), this.search_field_scale(), !0)
    }, l.prototype.single_deselect_control_build = function () {
        if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
    }, l.prototype.get_search_field_value = function () {
        return this.search_field.val()
    }, l.prototype.get_search_text = function () {
        return r.trim(this.get_search_field_value())
    }, l.prototype.escape_html = function (t) {
        return r("<div/>").text(t).html()
    }, l.prototype.winnow_results_set_highlight = function () {
        var t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"),
            e = t.length ? t.first() : this.search_results.find(".active-result").first();
        if (null != e) return this.result_do_highlight(e)
    }, l.prototype.no_results = function (t) {
        var e = this.get_no_results_html(t);
        return this.search_results.append(e), this.form_field_jq.trigger("chosen:no_results", {chosen: this})
    }, l.prototype.no_results_clear = function () {
        return this.search_results.find(".no-results").remove()
    }, l.prototype.keydown_arrow = function () {
        var t;
        return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
    }, l.prototype.keyup_arrow = function () {
        var t;
        return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(t.first()) : (0 < this.choices_count() && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
    }, l.prototype.keydown_backstroke = function () {
        var t;
        return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last()).length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
    }, l.prototype.clear_backstroke = function () {
        return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
    }, l.prototype.search_field_scale = function () {
        var t, e, i, s, a, n, o;
        if (this.is_multiple) {
            for (a = {
                position: "absolute",
                left: "-1000px",
                top: "-1000px",
                display: "none",
                whiteSpace: "pre"
            }, e = 0, i = (n = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"]).length; e < i; e++) a[s = n[e]] = this.search_field.css(s);
            return (t = r("<div />").css(a)).text(this.get_search_field_value()), r("body").append(t), o = t.width() + 25, t.remove(), this.container.is(":visible") && (o = Math.min(this.container.outerWidth() - 10, o)), this.search_field.width(o)
        }
    }, l.prototype.trigger_form_field_change = function (t) {
        return this.form_field_jq.trigger("input", t), this.form_field_jq.trigger("change", t)
    }, a = l
}.call(this), function (t) {
    function e(t, e) {
        var i, s;
        1 < t.originalEvent.touches.length || (t.preventDefault(), i = t.originalEvent.changedTouches[0], (s = document.createEvent("MouseEvents")).initMouseEvent(e, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(s))
    }

    var i, s, a, n;
    t.support.touch = "ontouchend" in document, t.support.touch && (s = t.ui.mouse.prototype, a = s._mouseInit, n = s._mouseDestroy, s._touchStart = function (t) {
        !i && this._mouseCapture(t.originalEvent.changedTouches[0]) && (i = !0, this._touchMoved = !1, e(t, "mouseover"), e(t, "mousemove"), e(t, "mousedown"))
    }, s._touchMove = function (t) {
        i && (this._touchMoved = !0, e(t, "mousemove"))
    }, s._touchEnd = function (t) {
        i && (e(t, "mouseup"), e(t, "mouseout"), this._touchMoved || e(t, "click"), i = !1)
    }, s._mouseInit = function () {
        this.element.bind({
            touchstart: t.proxy(this, "_touchStart"),
            touchmove: t.proxy(this, "_touchMove"),
            touchend: t.proxy(this, "_touchEnd")
        }), a.call(this)
    }, s._mouseDestroy = function () {
        this.element.unbind({
            touchstart: t.proxy(this, "_touchStart"),
            touchmove: t.proxy(this, "_touchMove"),
            touchend: t.proxy(this, "_touchEnd")
        }), n.call(this)
    })
}(jQuery), function (t, e) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
}(this, function () {
    "use strict";
    var t, a;

    function p() {
        return t.apply(null, arguments)
    }

    function r(t) {
        return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
    }

    function l(t) {
        return null != t && "[object Object]" === Object.prototype.toString.call(t)
    }

    function f(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }

    function c(t) {
        if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(t).length;
        var e;
        for (e in t) if (f(t, e)) return;
        return 1
    }

    function n(t) {
        return void 0 === t
    }

    function h(t) {
        return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
    }

    function o(t) {
        return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
    }

    function d(t, e) {
        for (var i = [], s = 0; s < t.length; ++s) i.push(e(t[s], s));
        return i
    }

    function u(t, e) {
        for (var i in e) f(e, i) && (t[i] = e[i]);
        return f(e, "toString") && (t.toString = e.toString), f(e, "valueOf") && (t.valueOf = e.valueOf), t
    }

    function m(t, e, i, s) {
        return Se(t, e, i, s, !0).utc()
    }

    function _(t) {
        return null == t._pf && (t._pf = {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }), t._pf
    }

    function g(t) {
        if (null == t._isValid) {
            var e = _(t), i = a.call(e.parsedDateParts, function (t) {
                    return null != t
                }),
                s = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidEra && !e.invalidMonth && !e.invalidWeekday && !e.weekdayMismatch && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
            if (t._strict && (s = s && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return s;
            t._isValid = s
        }
        return t._isValid
    }

    function v(t) {
        var e = m(NaN);
        return null != t ? u(_(e), t) : _(e).userInvalidated = !0, e
    }

    a = Array.prototype.some ? Array.prototype.some : function (t) {
        for (var e = Object(this), i = e.length >>> 0, s = 0; s < i; s++) if (s in e && t.call(this, e[s], s, e)) return !0;
        return !1
    };
    var b = p.momentProperties = [], e = !1;

    function y(t, e) {
        var i, s, a;
        if (n(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), n(e._i) || (t._i = e._i), n(e._f) || (t._f = e._f), n(e._l) || (t._l = e._l), n(e._strict) || (t._strict = e._strict), n(e._tzm) || (t._tzm = e._tzm), n(e._isUTC) || (t._isUTC = e._isUTC), n(e._offset) || (t._offset = e._offset), n(e._pf) || (t._pf = _(e)), n(e._locale) || (t._locale = e._locale), 0 < b.length) for (i = 0; i < b.length; i++) n(a = e[s = b[i]]) || (t[s] = a);
        return t
    }

    function w(t) {
        y(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === e && (e = !0, p.updateOffset(this), e = !1)
    }

    function k(t) {
        return t instanceof w || null != t && null != t._isAMomentObject
    }

    function x(t) {
        !1 === p.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
    }

    function i(a, n) {
        var o = !0;
        return u(function () {
            if (null != p.deprecationHandler && p.deprecationHandler(null, a), o) {
                for (var t, e, i = [], s = 0; s < arguments.length; s++) {
                    if (t = "", "object" === _typeof(arguments[s])) {
                        for (e in t += "\n[" + s + "] ", arguments[0]) f(arguments[0], e) && (t += e + ": " + arguments[0][e] + ", ");
                        t = t.slice(0, -2)
                    } else t = arguments[s];
                    i.push(t)
                }
                x(a + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack), o = !1
            }
            return n.apply(this, arguments)
        }, n)
    }

    var s, C = {};

    function $(t, e) {
        null != p.deprecationHandler && p.deprecationHandler(t, e), C[t] || (x(e), C[t] = !0)
    }

    function D(t) {
        return "undefined" != typeof Function && t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
    }

    function T(t, e) {
        var i, s = u({}, t);
        for (i in e) f(e, i) && (l(t[i]) && l(e[i]) ? (s[i] = {}, u(s[i], t[i]), u(s[i], e[i])) : null != e[i] ? s[i] = e[i] : delete s[i]);
        for (i in t) f(t, i) && !f(e, i) && l(t[i]) && (s[i] = u({}, s[i]));
        return s
    }

    function S(t) {
        null != t && this.set(t)
    }

    p.suppressDeprecationWarnings = !1, p.deprecationHandler = null, s = Object.keys ? Object.keys : function (t) {
        var e, i = [];
        for (e in t) f(t, e) && i.push(e);
        return i
    };

    function M(t, e, i) {
        var s = "" + Math.abs(t), a = e - s.length;
        return (0 <= t ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + s
    }

    var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        P = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, O = {}, A = {};

    function H(t, e, i, s) {
        var a = "string" == typeof s ? function () {
            return this[s]()
        } : s;
        t && (A[t] = a), e && (A[e[0]] = function () {
            return M(a.apply(this, arguments), e[1], e[2])
        }), i && (A[i] = function () {
            return this.localeData().ordinal(a.apply(this, arguments), t)
        })
    }

    function N(t, e) {
        return t.isValid() ? (e = Y(e, t.localeData()), O[e] = O[e] || function (s) {
            for (var t, a = s.match(I), e = 0, n = a.length; e < n; e++) A[a[e]] ? a[e] = A[a[e]] : a[e] = (t = a[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
            return function (t) {
                for (var e = "", i = 0; i < n; i++) e += D(a[i]) ? a[i].call(t, s) : a[i];
                return e
            }
        }(e), O[e](t)) : t.localeData().invalidDate()
    }

    function Y(t, e) {
        var i = 5;

        function s(t) {
            return e.longDateFormat(t) || t
        }

        for (P.lastIndex = 0; 0 <= i && P.test(t);) t = t.replace(P, s), P.lastIndex = 0, --i;
        return t
    }

    var F = {};

    function E(t, e) {
        var i = t.toLowerCase();
        F[i] = F[i + "s"] = F[e] = t
    }

    function j(t) {
        return "string" == typeof t ? F[t] || F[t.toLowerCase()] : void 0
    }

    function L(t) {
        var e, i, s = {};
        for (i in t) f(t, i) && (e = j(i)) && (s[e] = t[i]);
        return s
    }

    var z = {};

    function W(t, e) {
        z[t] = e
    }

    function R(t) {
        return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
    }

    function B(t) {
        return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
    }

    function q(t) {
        var e = +t, i = 0;
        return 0 != e && isFinite(e) && (i = B(e)), i
    }

    function U(e, i) {
        return function (t) {
            return null != t ? (G(this, e, t), p.updateOffset(this, i), this) : V(this, e)
        }
    }

    function V(t, e) {
        return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
    }

    function G(t, e, i) {
        t.isValid() && !isNaN(i) && ("FullYear" === e && R(t.year()) && 1 === t.month() && 29 === t.date() ? (i = q(i), t._d["set" + (t._isUTC ? "UTC" : "") + e](i, t.month(), St(i, t.month()))) : t._d["set" + (t._isUTC ? "UTC" : "") + e](i))
    }

    var K, J = /\d/, X = /\d\d/, Z = /\d{3}/, Q = /\d{4}/, tt = /[+-]?\d{6}/, et = /\d\d?/, it = /\d\d\d\d?/,
        st = /\d\d\d\d\d\d?/, at = /\d{1,3}/, nt = /\d{1,4}/, ot = /[+-]?\d{1,6}/, rt = /\d+/, lt = /[+-]?\d+/,
        ct = /Z|[+-]\d\d:?\d\d/gi, ht = /Z|[+-]\d\d(?::?\d\d)?/gi,
        dt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;

    function ut(t, i, s) {
        K[t] = D(i) ? i : function (t, e) {
            return t && s ? s : i
        }
    }

    function pt(t, e) {
        return f(K, t) ? K[t](e._strict, e._locale) : new RegExp(ft(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, s, a) {
            return e || i || s || a
        })))
    }

    function ft(t) {
        return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    K = {};
    var mt = {};

    function _t(t, i) {
        var e, s = i;
        for ("string" == typeof t && (t = [t]), h(i) && (s = function (t, e) {
            e[i] = q(t)
        }), e = 0; e < t.length; e++) mt[t[e]] = s
    }

    function gt(t, a) {
        _t(t, function (t, e, i, s) {
            i._w = i._w || {}, a(t, i._w, i, s)
        })
    }

    var vt, bt = 0, yt = 1, wt = 2, kt = 3, xt = 4, Ct = 5, $t = 6, Dt = 7, Tt = 8;

    function St(t, e) {
        if (isNaN(t) || isNaN(e)) return NaN;
        var i, s = (e % (i = 12) + i) % i;
        return t += (e - s) / 12, 1 == s ? R(t) ? 29 : 28 : 31 - s % 7 % 2
    }

    vt = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
        for (var e = 0; e < this.length; ++e) if (this[e] === t) return e;
        return -1
    }, H("M", ["MM", 2], "Mo", function () {
        return this.month() + 1
    }), H("MMM", 0, 0, function (t) {
        return this.localeData().monthsShort(this, t)
    }), H("MMMM", 0, 0, function (t) {
        return this.localeData().months(this, t)
    }), E("month", "M"), W("month", 8), ut("M", et), ut("MM", et, X), ut("MMM", function (t, e) {
        return e.monthsShortRegex(t)
    }), ut("MMMM", function (t, e) {
        return e.monthsRegex(t)
    }), _t(["M", "MM"], function (t, e) {
        e[yt] = q(t) - 1
    }), _t(["MMM", "MMMM"], function (t, e, i, s) {
        var a = i._locale.monthsParse(t, s, i._strict);
        null != a ? e[yt] = a : _(i).invalidMonth = t
    });
    var Mt = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        It = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Pt = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
        Ot = dt, At = dt;

    function Ht(t, e) {
        var i;
        if (!t.isValid()) return t;
        if ("string" == typeof e) if (/^\d+$/.test(e)) e = q(e); else if (!h(e = t.localeData().monthsParse(e))) return t;
        return i = Math.min(t.date(), St(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i), t
    }

    function Nt(t) {
        return null != t ? (Ht(this, t), p.updateOffset(this, !0), this) : V(this, "Month")
    }

    function Yt() {
        function t(t, e) {
            return e.length - t.length
        }

        for (var e, i = [], s = [], a = [], n = 0; n < 12; n++) e = m([2e3, n]), i.push(this.monthsShort(e, "")), s.push(this.months(e, "")), a.push(this.months(e, "")), a.push(this.monthsShort(e, ""));
        for (i.sort(t), s.sort(t), a.sort(t), n = 0; n < 12; n++) i[n] = ft(i[n]), s[n] = ft(s[n]);
        for (n = 0; n < 24; n++) a[n] = ft(a[n]);
        this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function Ft(t) {
        return R(t) ? 366 : 365
    }

    H("Y", 0, 0, function () {
        var t = this.year();
        return t <= 9999 ? M(t, 4) : "+" + t
    }), H(0, ["YY", 2], 0, function () {
        return this.year() % 100
    }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), W("year", 1), ut("Y", lt), ut("YY", et, X), ut("YYYY", nt, Q), ut("YYYYY", ot, tt), ut("YYYYYY", ot, tt), _t(["YYYYY", "YYYYYY"], bt), _t("YYYY", function (t, e) {
        e[bt] = 2 === t.length ? p.parseTwoDigitYear(t) : q(t)
    }), _t("YY", function (t, e) {
        e[bt] = p.parseTwoDigitYear(t)
    }), _t("Y", function (t, e) {
        e[bt] = parseInt(t, 10)
    }), p.parseTwoDigitYear = function (t) {
        return q(t) + (68 < q(t) ? 1900 : 2e3)
    };
    var Et = U("FullYear", !0);

    function jt(t) {
        var e, i;
        return t < 100 && 0 <= t ? ((i = Array.prototype.slice.call(arguments))[0] = t + 400, e = new Date(Date.UTC.apply(null, i)), isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t)) : e = new Date(Date.UTC.apply(null, arguments)), e
    }

    function Lt(t, e, i) {
        var s = 7 + e - i;
        return s - (7 + jt(t, 0, s).getUTCDay() - e) % 7 - 1
    }

    function zt(t, e, i, s, a) {
        var n, o = 1 + 7 * (e - 1) + (7 + i - s) % 7 + Lt(t, s, a),
            r = o <= 0 ? Ft(n = t - 1) + o : o > Ft(t) ? (n = t + 1, o - Ft(t)) : (n = t, o);
        return {year: n, dayOfYear: r}
    }

    function Wt(t, e, i) {
        var s, a, n = Lt(t.year(), e, i), o = Math.floor((t.dayOfYear() - n - 1) / 7) + 1;
        return o < 1 ? s = o + Rt(a = t.year() - 1, e, i) : o > Rt(t.year(), e, i) ? (s = o - Rt(t.year(), e, i), a = t.year() + 1) : (a = t.year(), s = o), {
            week: s,
            year: a
        }
    }

    function Rt(t, e, i) {
        var s = Lt(t, e, i), a = Lt(t + 1, e, i);
        return (Ft(t) - s + a) / 7
    }

    H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), W("week", 5), W("isoWeek", 5), ut("w", et), ut("ww", et, X), ut("W", et), ut("WW", et, X), gt(["w", "ww", "W", "WW"], function (t, e, i, s) {
        e[s.substr(0, 1)] = q(t)
    });

    function Bt(t, e) {
        return t.slice(e, 7).concat(t.slice(0, e))
    }

    H("d", 0, "do", "day"), H("dd", 0, 0, function (t) {
        return this.localeData().weekdaysMin(this, t)
    }), H("ddd", 0, 0, function (t) {
        return this.localeData().weekdaysShort(this, t)
    }), H("dddd", 0, 0, function (t) {
        return this.localeData().weekdays(this, t)
    }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), W("day", 11), W("weekday", 11), W("isoWeekday", 11), ut("d", et), ut("e", et), ut("E", et), ut("dd", function (t, e) {
        return e.weekdaysMinRegex(t)
    }), ut("ddd", function (t, e) {
        return e.weekdaysShortRegex(t)
    }), ut("dddd", function (t, e) {
        return e.weekdaysRegex(t)
    }), gt(["dd", "ddd", "dddd"], function (t, e, i, s) {
        var a = i._locale.weekdaysParse(t, s, i._strict);
        null != a ? e.d = a : _(i).invalidWeekday = t
    }), gt(["d", "e", "E"], function (t, e, i, s) {
        e[s] = q(t)
    });
    var qt = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        Ut = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Vt = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Gt = dt, Kt = dt,
        Jt = dt;

    function Xt() {
        function t(t, e) {
            return e.length - t.length
        }

        for (var e, i, s, a, n = [], o = [], r = [], l = [], c = 0; c < 7; c++) e = m([2e3, 1]).day(c), i = ft(this.weekdaysMin(e, "")), s = ft(this.weekdaysShort(e, "")), a = ft(this.weekdays(e, "")), n.push(i), o.push(s), r.push(a), l.push(i), l.push(s), l.push(a);
        n.sort(t), o.sort(t), r.sort(t), l.sort(t), this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
    }

    function Zt() {
        return this.hours() % 12 || 12
    }

    function Qt(t, e) {
        H(t, 0, 0, function () {
            return this.localeData().meridiem(this.hours(), this.minutes(), e)
        })
    }

    function te(t, e) {
        return e._meridiemParse
    }

    H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, Zt), H("k", ["kk", 2], 0, function () {
        return this.hours() || 24
    }), H("hmm", 0, 0, function () {
        return "" + Zt.apply(this) + M(this.minutes(), 2)
    }), H("hmmss", 0, 0, function () {
        return "" + Zt.apply(this) + M(this.minutes(), 2) + M(this.seconds(), 2)
    }), H("Hmm", 0, 0, function () {
        return "" + this.hours() + M(this.minutes(), 2)
    }), H("Hmmss", 0, 0, function () {
        return "" + this.hours() + M(this.minutes(), 2) + M(this.seconds(), 2)
    }), Qt("a", !0), Qt("A", !1), E("hour", "h"), W("hour", 13), ut("a", te), ut("A", te), ut("H", et), ut("h", et), ut("k", et), ut("HH", et, X), ut("hh", et, X), ut("kk", et, X), ut("hmm", it), ut("hmmss", st), ut("Hmm", it), ut("Hmmss", st), _t(["H", "HH"], kt), _t(["k", "kk"], function (t, e, i) {
        var s = q(t);
        e[kt] = 24 === s ? 0 : s
    }), _t(["a", "A"], function (t, e, i) {
        i._isPm = i._locale.isPM(t), i._meridiem = t
    }), _t(["h", "hh"], function (t, e, i) {
        e[kt] = q(t), _(i).bigHour = !0
    }), _t("hmm", function (t, e, i) {
        var s = t.length - 2;
        e[kt] = q(t.substr(0, s)), e[xt] = q(t.substr(s)), _(i).bigHour = !0
    }), _t("hmmss", function (t, e, i) {
        var s = t.length - 4, a = t.length - 2;
        e[kt] = q(t.substr(0, s)), e[xt] = q(t.substr(s, 2)), e[Ct] = q(t.substr(a)), _(i).bigHour = !0
    }), _t("Hmm", function (t, e, i) {
        var s = t.length - 2;
        e[kt] = q(t.substr(0, s)), e[xt] = q(t.substr(s))
    }), _t("Hmmss", function (t, e, i) {
        var s = t.length - 4, a = t.length - 2;
        e[kt] = q(t.substr(0, s)), e[xt] = q(t.substr(s, 2)), e[Ct] = q(t.substr(a))
    });
    var ee = U("Hours", !0);
    var ie, se = {
        calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        longDateFormat: {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        invalidDate: "Invalid date",
        ordinal: "%d",
        dayOfMonthOrdinalParse: /\d{1,2}/,
        relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            w: "a week",
            ww: "%d weeks",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        months: Mt,
        monthsShort: It,
        week: {dow: 0, doy: 6},
        weekdays: qt,
        weekdaysMin: Vt,
        weekdaysShort: Ut,
        meridiemParse: /[ap]\.?m?\.?/i
    }, ae = {}, ne = {};

    function oe(t) {
        return t ? t.toLowerCase().replace("_", "-") : t
    }

    function re(t) {
        for (var e, i, s, a, n = 0; n < t.length;) {
            for (e = (a = oe(t[n]).split("-")).length, i = (i = oe(t[n + 1])) ? i.split("-") : null; 0 < e;) {
                if (s = le(a.slice(0, e).join("-"))) return s;
                if (i && i.length >= e && function (t, e) {
                    for (var i = Math.min(t.length, e.length), s = 0; s < i; s += 1) if (t[s] !== e[s]) return s;
                    return i
                }(a, i) >= e - 1) break;
                e--
            }
            n++
        }
        return ie
    }

    function le(e) {
        var t = null;
        if (void 0 === ae[e] && "undefined" != typeof module && module && module.exports) try {
            t = ie._abbr, require("./locale/" + e), ce(t)
        } catch (t) {
            ae[e] = null
        }
        return ae[e]
    }

    function ce(t, e) {
        var i;
        return t && ((i = n(e) ? de(t) : he(t, e)) ? ie = i : "undefined" != typeof console && console.warn && console.warn("Locale " + t + " not found. Did you forget to load it?")), ie._abbr
    }

    function he(t, e) {
        if (null === e) return delete ae[t], null;
        var i, s = se;
        if (e.abbr = t, null != ae[t]) $("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = ae[t]._config; else if (null != e.parentLocale) if (null != ae[e.parentLocale]) s = ae[e.parentLocale]._config; else {
            if (null == (i = le(e.parentLocale))) return ne[e.parentLocale] || (ne[e.parentLocale] = []), ne[e.parentLocale].push({
                name: t,
                config: e
            }), null;
            s = i._config
        }
        return ae[t] = new S(T(s, e)), ne[t] && ne[t].forEach(function (t) {
            he(t.name, t.config)
        }), ce(t), ae[t]
    }

    function de(t) {
        var e;
        if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return ie;
        if (!r(t)) {
            if (e = le(t)) return e;
            t = [t]
        }
        return re(t)
    }

    function ue(t) {
        var e, i = t._a;
        return i && -2 === _(t).overflow && (e = i[yt] < 0 || 11 < i[yt] ? yt : i[wt] < 1 || i[wt] > St(i[bt], i[yt]) ? wt : i[kt] < 0 || 24 < i[kt] || 24 === i[kt] && (0 !== i[xt] || 0 !== i[Ct] || 0 !== i[$t]) ? kt : i[xt] < 0 || 59 < i[xt] ? xt : i[Ct] < 0 || 59 < i[Ct] ? Ct : i[$t] < 0 || 999 < i[$t] ? $t : -1, _(t)._overflowDayOfYear && (e < bt || wt < e) && (e = wt), _(t)._overflowWeeks && -1 === e && (e = Dt), _(t)._overflowWeekday && -1 === e && (e = Tt), _(t).overflow = e), t
    }

    var pe = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        fe = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        me = /Z|[+-]\d\d(?::?\d\d)?/,
        _e = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]],
        ge = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
        ve = /^\/?Date\((-?\d+)/i,
        be = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
        ye = {UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480};

    function we(t) {
        var e, i, s, a, n, o, r = t._i, l = pe.exec(r) || fe.exec(r);
        if (l) {
            for (_(t).iso = !0, e = 0, i = _e.length; e < i; e++) if (_e[e][1].exec(l[1])) {
                a = _e[e][0], s = !1 !== _e[e][2];
                break
            }
            if (null == a) return void (t._isValid = !1);
            if (l[3]) {
                for (e = 0, i = ge.length; e < i; e++) if (ge[e][1].exec(l[3])) {
                    n = (l[2] || " ") + ge[e][0];
                    break
                }
                if (null == n) return void (t._isValid = !1)
            }
            if (!s && null != n) return void (t._isValid = !1);
            if (l[4]) {
                if (!me.exec(l[4])) return void (t._isValid = !1);
                o = "Z"
            }
            t._f = a + (n || "") + (o || ""), De(t)
        } else t._isValid = !1
    }

    function ke(t, e, i, s, a, n) {
        var o = [function (t) {
            var e = parseInt(t, 10);
            {
                if (e <= 49) return 2e3 + e;
                if (e <= 999) return 1900 + e
            }
            return e
        }(t), It.indexOf(e), parseInt(i, 10), parseInt(s, 10), parseInt(a, 10)];
        return n && o.push(parseInt(n, 10)), o
    }

    function xe(t) {
        var e, i, s, a,
            n = be.exec(t._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));
        if (n) {
            if (e = ke(n[4], n[3], n[2], n[5], n[6], n[7]), i = n[1], s = e, a = t, i && Ut.indexOf(i) !== new Date(s[0], s[1], s[2]).getDay() && (_(a).weekdayMismatch = !0, !void (a._isValid = !1))) return;
            t._a = e, t._tzm = function (t, e, i) {
                if (t) return ye[t];
                if (e) return 0;
                var s = parseInt(i, 10), a = s % 100;
                return 60 * ((s - a) / 100) + a
            }(n[8], n[9], n[10]), t._d = jt.apply(null, t._a), t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), _(t).rfc2822 = !0
        } else t._isValid = !1
    }

    function Ce(t, e, i) {
        return null != t ? t : null != e ? e : i
    }

    function $e(t) {
        var e, i, s, a, n, o, r, l = [];
        if (!t._d) {
            for (o = t, r = new Date(p.now()), s = o._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()], t._w && null == t._a[wt] && null == t._a[yt] && function (t) {
                var e, i, s, a, n, o, r, l, c;
                null != (e = t._w).GG || null != e.W || null != e.E ? (n = 1, o = 4, i = Ce(e.GG, t._a[bt], Wt(Me(), 1, 4).year), s = Ce(e.W, 1), ((a = Ce(e.E, 1)) < 1 || 7 < a) && (l = !0)) : (n = t._locale._week.dow, o = t._locale._week.doy, c = Wt(Me(), n, o), i = Ce(e.gg, t._a[bt], c.year), s = Ce(e.w, c.week), null != e.d ? ((a = e.d) < 0 || 6 < a) && (l = !0) : null != e.e ? (a = e.e + n, (e.e < 0 || 6 < e.e) && (l = !0)) : a = n);
                s < 1 || s > Rt(i, n, o) ? _(t)._overflowWeeks = !0 : null != l ? _(t)._overflowWeekday = !0 : (r = zt(i, s, a, n, o), t._a[bt] = r.year, t._dayOfYear = r.dayOfYear)
            }(t), null != t._dayOfYear && (n = Ce(t._a[bt], s[bt]), (t._dayOfYear > Ft(n) || 0 === t._dayOfYear) && (_(t)._overflowDayOfYear = !0), i = jt(n, 0, t._dayOfYear), t._a[yt] = i.getUTCMonth(), t._a[wt] = i.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = l[e] = s[e];
            for (; e < 7; e++) t._a[e] = l[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
            24 === t._a[kt] && 0 === t._a[xt] && 0 === t._a[Ct] && 0 === t._a[$t] && (t._nextDay = !0, t._a[kt] = 0), t._d = (t._useUTC ? jt : function (t, e, i, s, a, n, o) {
                var r;
                return t < 100 && 0 <= t ? (r = new Date(t + 400, e, i, s, a, n, o), isFinite(r.getFullYear()) && r.setFullYear(t)) : r = new Date(t, e, i, s, a, n, o), r
            }).apply(null, l), a = t._useUTC ? t._d.getUTCDay() : t._d.getDay(), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[kt] = 24), t._w && void 0 !== t._w.d && t._w.d !== a && (_(t).weekdayMismatch = !0)
        }
    }

    function De(t) {
        if (t._f !== p.ISO_8601) if (t._f !== p.RFC_2822) {
            t._a = [], _(t).empty = !0;
            for (var e, i, s, a, n, o, r, l = "" + t._i, c = l.length, h = 0, d = Y(t._f, t._locale).match(I) || [], u = 0; u < d.length; u++) i = d[u], (e = (l.match(pt(i, t)) || [])[0]) && (0 < (s = l.substr(0, l.indexOf(e))).length && _(t).unusedInput.push(s), l = l.slice(l.indexOf(e) + e.length), h += e.length), A[i] ? (e ? _(t).empty = !1 : _(t).unusedTokens.push(i), n = i, r = t, null != (o = e) && f(mt, n) && mt[n](o, r._a, r, n)) : t._strict && !e && _(t).unusedTokens.push(i);
            _(t).charsLeftOver = c - h, 0 < l.length && _(t).unusedInput.push(l), t._a[kt] <= 12 && !0 === _(t).bigHour && 0 < t._a[kt] && (_(t).bigHour = void 0), _(t).parsedDateParts = t._a.slice(0), _(t).meridiem = t._meridiem, t._a[kt] = function (t, e, i) {
                var s;
                if (null == i) return e;
                return null != t.meridiemHour ? t.meridiemHour(e, i) : (null != t.isPM && ((s = t.isPM(i)) && e < 12 && (e += 12), s || 12 !== e || (e = 0)), e)
            }(t._locale, t._a[kt], t._meridiem), null !== (a = _(t).era) && (t._a[bt] = t._locale.erasConvertYear(a, t._a[bt])), $e(t), ue(t)
        } else xe(t); else we(t)
    }

    function Te(t) {
        var e, i, s = t._i, a = t._f;
        return t._locale = t._locale || de(t._l), null === s || void 0 === a && "" === s ? v({nullInput: !0}) : ("string" == typeof s && (t._i = s = t._locale.preparse(s)), k(s) ? new w(ue(s)) : (o(s) ? t._d = s : r(a) ? function (t) {
            var e, i, s, a, n, o, r = !1;
            if (0 === t._f.length) return _(t).invalidFormat = !0, t._d = new Date(NaN);
            for (a = 0; a < t._f.length; a++) n = 0, o = !1, e = y({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[a], De(e), g(e) && (o = !0), n += _(e).charsLeftOver, n += 10 * _(e).unusedTokens.length, _(e).score = n, r ? n < s && (s = n, i = e) : (null == s || n < s || o) && (s = n, i = e, o && (r = !0));
            u(t, i || e)
        }(t) : a ? De(t) : n(i = (e = t)._i) ? e._d = new Date(p.now()) : o(i) ? e._d = new Date(i.valueOf()) : "string" == typeof i ? function (t) {
            var e = ve.exec(t._i);
            null === e ? (we(t), !1 === t._isValid && (delete t._isValid, xe(t), !1 === t._isValid && (delete t._isValid, t._strict ? t._isValid = !1 : p.createFromInputFallback(t)))) : t._d = new Date(+e[1])
        }(e) : r(i) ? (e._a = d(i.slice(0), function (t) {
            return parseInt(t, 10)
        }), $e(e)) : l(i) ? function (t) {
            var e, i;
            t._d || (i = void 0 === (e = L(t._i)).day ? e.date : e.day, t._a = d([e.year, e.month, i, e.hour, e.minute, e.second, e.millisecond], function (t) {
                return t && parseInt(t, 10)
            }), $e(t))
        }(e) : h(i) ? e._d = new Date(i) : p.createFromInputFallback(e), g(t) || (t._d = null), t))
    }

    function Se(t, e, i, s, a) {
        var n, o = {};
        return !0 !== e && !1 !== e || (s = e, e = void 0), !0 !== i && !1 !== i || (s = i, i = void 0), (l(t) && c(t) || r(t) && 0 === t.length) && (t = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = i, o._i = t, o._f = e, o._strict = s, (n = new w(ue(Te(o))))._nextDay && (n.add(1, "d"), n._nextDay = void 0), n
    }

    function Me(t, e, i, s) {
        return Se(t, e, i, s, !1)
    }

    p.createFromInputFallback = i("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
        t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
    }), p.ISO_8601 = function () {
    }, p.RFC_2822 = function () {
    };
    var Ie = i("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = Me.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : v()
        }),
        Pe = i("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = Me.apply(null, arguments);
            return this.isValid() && t.isValid() ? this < t ? this : t : v()
        });

    function Oe(t, e) {
        var i, s;
        if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return Me();
        for (i = e[0], s = 1; s < e.length; ++s) e[s].isValid() && !e[s][t](i) || (i = e[s]);
        return i
    }

    var Ae = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

    function He(t) {
        var e = L(t), i = e.year || 0, s = e.quarter || 0, a = e.month || 0, n = e.week || e.isoWeek || 0,
            o = e.day || 0, r = e.hour || 0, l = e.minute || 0, c = e.second || 0, h = e.millisecond || 0;
        this._isValid = function (t) {
            var e, i, s = !1;
            for (e in t) if (f(t, e) && (-1 === vt.call(Ae, e) || null != t[e] && isNaN(t[e]))) return !1;
            for (i = 0; i < Ae.length; ++i) if (t[Ae[i]]) {
                if (s) return !1;
                parseFloat(t[Ae[i]]) !== q(t[Ae[i]]) && (s = !0)
            }
            return !0
        }(e), this._milliseconds = +h + 1e3 * c + 6e4 * l + 1e3 * r * 60 * 60, this._days = +o + 7 * n, this._months = +a + 3 * s + 12 * i, this._data = {}, this._locale = de(), this._bubble()
    }

    function Ne(t) {
        return t instanceof He
    }

    function Ye(t) {
        return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
    }

    function Fe(t, i) {
        H(t, 0, 0, function () {
            var t = this.utcOffset(), e = "+";
            return t < 0 && (t = -t, e = "-"), e + M(~~(t / 60), 2) + i + M(~~t % 60, 2)
        })
    }

    Fe("Z", ":"), Fe("ZZ", ""), ut("Z", ht), ut("ZZ", ht), _t(["Z", "ZZ"], function (t, e, i) {
        i._useUTC = !0, i._tzm = je(ht, t)
    });
    var Ee = /([\+\-]|\d\d)/gi;

    function je(t, e) {
        var i, s, a = (e || "").match(t);
        return null === a ? null : 0 === (s = 60 * (i = ((a[a.length - 1] || []) + "").match(Ee) || ["-", 0, 0])[1] + q(i[2])) ? 0 : "+" === i[0] ? s : -s
    }

    function Le(t, e) {
        var i, s;
        return e._isUTC ? (i = e.clone(), s = (k(t) || o(t) ? t.valueOf() : Me(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + s), p.updateOffset(i, !1), i) : Me(t).local()
    }

    function ze(t) {
        return -Math.round(t._d.getTimezoneOffset())
    }

    function We() {
        return !!this.isValid() && (this._isUTC && 0 === this._offset)
    }

    p.updateOffset = function () {
    };
    var Re = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
        Be = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

    function qe(t, e) {
        var i, s, a, n = t, o = null;
        return Ne(t) ? n = {
            ms: t._milliseconds,
            d: t._days,
            M: t._months
        } : h(t) || !isNaN(+t) ? (n = {}, e ? n[e] = +t : n.milliseconds = +t) : (o = Re.exec(t)) ? (i = "-" === o[1] ? -1 : 1, n = {
            y: 0,
            d: q(o[wt]) * i,
            h: q(o[kt]) * i,
            m: q(o[xt]) * i,
            s: q(o[Ct]) * i,
            ms: q(Ye(1e3 * o[$t])) * i
        }) : (o = Be.exec(t)) ? (i = "-" === o[1] ? -1 : 1, n = {
            y: Ue(o[2], i),
            M: Ue(o[3], i),
            w: Ue(o[4], i),
            d: Ue(o[5], i),
            h: Ue(o[6], i),
            m: Ue(o[7], i),
            s: Ue(o[8], i)
        }) : null == n ? n = {} : "object" === _typeof(n) && ("from" in n || "to" in n) && (a = function (t, e) {
            var i;
            if (!t.isValid() || !e.isValid()) return {milliseconds: 0, months: 0};
            e = Le(e, t), t.isBefore(e) ? i = Ve(t, e) : ((i = Ve(e, t)).milliseconds = -i.milliseconds, i.months = -i.months);
            return i
        }(Me(n.from), Me(n.to)), (n = {}).ms = a.milliseconds, n.M = a.months), s = new He(n), Ne(t) && f(t, "_locale") && (s._locale = t._locale), Ne(t) && f(t, "_isValid") && (s._isValid = t._isValid), s
    }

    function Ue(t, e) {
        var i = t && parseFloat(t.replace(",", "."));
        return (isNaN(i) ? 0 : i) * e
    }

    function Ve(t, e) {
        var i = {};
        return i.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(i.months, "M").isAfter(e) && --i.months, i.milliseconds = e - t.clone().add(i.months, "M"), i
    }

    function Ge(s, a) {
        return function (t, e) {
            var i;
            return null === e || isNaN(+e) || ($(a, "moment()." + a + "(period, number) is deprecated. Please use moment()." + a + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), i = t, t = e, e = i), Ke(this, qe(t, e), s), this
        }
    }

    function Ke(t, e, i, s) {
        var a = e._milliseconds, n = Ye(e._days), o = Ye(e._months);
        t.isValid() && (s = null == s || s, o && Ht(t, V(t, "Month") + o * i), n && G(t, "Date", V(t, "Date") + n * i), a && t._d.setTime(t._d.valueOf() + a * i), s && p.updateOffset(t, n || o))
    }

    qe.fn = He.prototype, qe.invalid = function () {
        return qe(NaN)
    };
    var Je = Ge(1, "add"), Xe = Ge(-1, "subtract");

    function Ze(t) {
        return "string" == typeof t || t instanceof String
    }

    function Qe(t) {
        return k(t) || o(t) || Ze(t) || h(t) || function (e) {
            var t = r(e), i = !1;
            t && (i = 0 === e.filter(function (t) {
                return !h(t) && Ze(e)
            }).length);
            return t && i
        }(t) || function (t) {
            var e, i, s = l(t) && !c(t), a = !1,
                n = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"];
            for (e = 0; e < n.length; e += 1) i = n[e], a = a || f(t, i);
            return s && a
        }(t) || null == t
    }

    function ti(t, e) {
        if (t.date() < e.date()) return -ti(e, t);
        var i = 12 * (e.year() - t.year()) + (e.month() - t.month()), s = t.clone().add(i, "months"),
            a = e - s < 0 ? (e - s) / (s - t.clone().add(i - 1, "months")) : (e - s) / (t.clone().add(1 + i, "months") - s);
        return -(i + a) || 0
    }

    function ei(t) {
        var e;
        return void 0 === t ? this._locale._abbr : (null != (e = de(t)) && (this._locale = e), this)
    }

    p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", p.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var ii = i("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
        return void 0 === t ? this.localeData() : this.locale(t)
    });

    function si() {
        return this._locale
    }

    var ai = 126227808e5;

    function ni(t, e) {
        return (t % e + e) % e
    }

    function oi(t, e, i) {
        return t < 100 && 0 <= t ? new Date(t + 400, e, i) - ai : new Date(t, e, i).valueOf()
    }

    function ri(t, e, i) {
        return t < 100 && 0 <= t ? Date.UTC(t + 400, e, i) - ai : Date.UTC(t, e, i)
    }

    function li(t, e) {
        return e.erasAbbrRegex(t)
    }

    function ci() {
        for (var t = [], e = [], i = [], s = [], a = this.eras(), n = 0, o = a.length; n < o; ++n) e.push(ft(a[n].name)), t.push(ft(a[n].abbr)), i.push(ft(a[n].narrow)), s.push(ft(a[n].name)), s.push(ft(a[n].abbr)), s.push(ft(a[n].narrow));
        this._erasRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function hi(t, e) {
        H(0, [t, t.length], 0, e)
    }

    function di(t, e, i, s, a) {
        var n;
        return null == t ? Wt(this, s, a).year : ((n = Rt(t, s, a)) < e && (e = n), function (t, e, i, s, a) {
            var n = zt(t, e, i, s, a), o = jt(n.year, 0, n.dayOfYear);
            return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
        }.call(this, t, e, i, s, a))
    }

    H("N", 0, 0, "eraAbbr"), H("NN", 0, 0, "eraAbbr"), H("NNN", 0, 0, "eraAbbr"), H("NNNN", 0, 0, "eraName"), H("NNNNN", 0, 0, "eraNarrow"), H("y", ["y", 1], "yo", "eraYear"), H("y", ["yy", 2], 0, "eraYear"), H("y", ["yyy", 3], 0, "eraYear"), H("y", ["yyyy", 4], 0, "eraYear"), ut("N", li), ut("NN", li), ut("NNN", li), ut("NNNN", function (t, e) {
        return e.erasNameRegex(t)
    }), ut("NNNNN", function (t, e) {
        return e.erasNarrowRegex(t)
    }), _t(["N", "NN", "NNN", "NNNN", "NNNNN"], function (t, e, i, s) {
        var a = i._locale.erasParse(t, s, i._strict);
        a ? _(i).era = a : _(i).invalidEra = t
    }), ut("y", rt), ut("yy", rt), ut("yyy", rt), ut("yyyy", rt), ut("yo", function (t, e) {
        return e._eraYearOrdinalRegex || rt
    }), _t(["y", "yy", "yyy", "yyyy"], bt), _t(["yo"], function (t, e, i, s) {
        var a;
        i._locale._eraYearOrdinalRegex && (a = t.match(i._locale._eraYearOrdinalRegex)), i._locale.eraYearOrdinalParse ? e[bt] = i._locale.eraYearOrdinalParse(t, a) : e[bt] = parseInt(t, 10)
    }), H(0, ["gg", 2], 0, function () {
        return this.weekYear() % 100
    }), H(0, ["GG", 2], 0, function () {
        return this.isoWeekYear() % 100
    }), hi("gggg", "weekYear"), hi("ggggg", "weekYear"), hi("GGGG", "isoWeekYear"), hi("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), W("weekYear", 1), W("isoWeekYear", 1), ut("G", lt), ut("g", lt), ut("GG", et, X), ut("gg", et, X), ut("GGGG", nt, Q), ut("gggg", nt, Q), ut("GGGGG", ot, tt), ut("ggggg", ot, tt), gt(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, s) {
        e[s.substr(0, 2)] = q(t)
    }), gt(["gg", "GG"], function (t, e, i, s) {
        e[s] = p.parseTwoDigitYear(t)
    }), H("Q", 0, "Qo", "quarter"), E("quarter", "Q"), W("quarter", 7), ut("Q", J), _t("Q", function (t, e) {
        e[yt] = 3 * (q(t) - 1)
    }), H("D", ["DD", 2], "Do", "date"), E("date", "D"), W("date", 9), ut("D", et), ut("DD", et, X), ut("Do", function (t, e) {
        return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
    }), _t(["D", "DD"], wt), _t("Do", function (t, e) {
        e[wt] = q(t.match(et)[0])
    });
    var ui = U("Date", !0);
    H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), W("dayOfYear", 4), ut("DDD", at), ut("DDDD", Z), _t(["DDD", "DDDD"], function (t, e, i) {
        i._dayOfYear = q(t)
    }), H("m", ["mm", 2], 0, "minute"), E("minute", "m"), W("minute", 14), ut("m", et), ut("mm", et, X), _t(["m", "mm"], xt);
    var pi = U("Minutes", !1);
    H("s", ["ss", 2], 0, "second"), E("second", "s"), W("second", 15), ut("s", et), ut("ss", et, X), _t(["s", "ss"], Ct);
    var fi, mi, _i = U("Seconds", !1);
    for (H("S", 0, 0, function () {
        return ~~(this.millisecond() / 100)
    }), H(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10)
    }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond()
    }), H(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond()
    }), H(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond()
    }), H(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond()
    }), H(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond()
    }), H(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond()
    }), E("millisecond", "ms"), W("millisecond", 16), ut("S", at, J), ut("SS", at, X), ut("SSS", at, Z), fi = "SSSS"; fi.length <= 9; fi += "S") ut(fi, rt);

    function gi(t, e) {
        e[$t] = q(1e3 * ("0." + t))
    }

    for (fi = "S"; fi.length <= 9; fi += "S") _t(fi, gi);
    mi = U("Milliseconds", !1), H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
    var vi = w.prototype;

    function bi(t) {
        return t
    }

    vi.add = Je, vi.calendar = function (t, e) {
        1 === arguments.length && (arguments[0] ? Qe(arguments[0]) ? (t = arguments[0], e = void 0) : function (t) {
            for (var e = l(t) && !c(t), i = !1, s = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"], a = 0; a < s.length; a += 1) i = i || f(t, s[a]);
            return e && i
        }(arguments[0]) && (e = arguments[0], t = void 0) : e = t = void 0);
        var i = t || Me(), s = Le(i, this).startOf("day"), a = p.calendarFormat(this, s) || "sameElse",
            n = e && (D(e[a]) ? e[a].call(this, i) : e[a]);
        return this.format(n || this.localeData().calendar(a, this, Me(i)))
    }, vi.clone = function () {
        return new w(this)
    }, vi.diff = function (t, e, i) {
        var s, a, n;
        if (!this.isValid()) return NaN;
        if (!(s = Le(t, this)).isValid()) return NaN;
        switch (a = 6e4 * (s.utcOffset() - this.utcOffset()), e = j(e)) {
            case"year":
                n = ti(this, s) / 12;
                break;
            case"month":
                n = ti(this, s);
                break;
            case"quarter":
                n = ti(this, s) / 3;
                break;
            case"second":
                n = (this - s) / 1e3;
                break;
            case"minute":
                n = (this - s) / 6e4;
                break;
            case"hour":
                n = (this - s) / 36e5;
                break;
            case"day":
                n = (this - s - a) / 864e5;
                break;
            case"week":
                n = (this - s - a) / 6048e5;
                break;
            default:
                n = this - s
        }
        return i ? n : B(n)
    }, vi.endOf = function (t) {
        var e, i;
        if (void 0 === (t = j(t)) || "millisecond" === t || !this.isValid()) return this;
        switch (i = this._isUTC ? ri : oi, t) {
            case"year":
                e = i(this.year() + 1, 0, 1) - 1;
                break;
            case"quarter":
                e = i(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
                break;
            case"month":
                e = i(this.year(), this.month() + 1, 1) - 1;
                break;
            case"week":
                e = i(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
                break;
            case"isoWeek":
                e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
                break;
            case"day":
            case"date":
                e = i(this.year(), this.month(), this.date() + 1) - 1;
                break;
            case"hour":
                e = this._d.valueOf(), e += 36e5 - ni(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
                break;
            case"minute":
                e = this._d.valueOf(), e += 6e4 - ni(e, 6e4) - 1;
                break;
            case"second":
                e = this._d.valueOf(), e += 1e3 - ni(e, 1e3) - 1
        }
        return this._d.setTime(e), p.updateOffset(this, !0), this
    }, vi.format = function (t) {
        t = t || (this.isUtc() ? p.defaultFormatUtc : p.defaultFormat);
        var e = N(this, t);
        return this.localeData().postformat(e)
    }, vi.from = function (t, e) {
        return this.isValid() && (k(t) && t.isValid() || Me(t).isValid()) ? qe({
            to: this,
            from: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, vi.fromNow = function (t) {
        return this.from(Me(), t)
    }, vi.to = function (t, e) {
        return this.isValid() && (k(t) && t.isValid() || Me(t).isValid()) ? qe({
            from: this,
            to: t
        }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
    }, vi.toNow = function (t) {
        return this.to(Me(), t)
    }, vi.get = function (t) {
        return D(this[t = j(t)]) ? this[t]() : this
    }, vi.invalidAt = function () {
        return _(this).overflow
    }, vi.isAfter = function (t, e) {
        var i = k(t) ? t : Me(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = j(e) || "millisecond") ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
    }, vi.isBefore = function (t, e) {
        var i = k(t) ? t : Me(t);
        return !(!this.isValid() || !i.isValid()) && ("millisecond" === (e = j(e) || "millisecond") ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
    }, vi.isBetween = function (t, e, i, s) {
        var a = k(t) ? t : Me(t), n = k(e) ? e : Me(e);
        return !!(this.isValid() && a.isValid() && n.isValid()) && (("(" === (s = s || "()")[0] ? this.isAfter(a, i) : !this.isBefore(a, i)) && (")" === s[1] ? this.isBefore(n, i) : !this.isAfter(n, i)))
    }, vi.isSame = function (t, e) {
        var i, s = k(t) ? t : Me(t);
        return !(!this.isValid() || !s.isValid()) && ("millisecond" === (e = j(e) || "millisecond") ? this.valueOf() === s.valueOf() : (i = s.valueOf(), this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
    }, vi.isSameOrAfter = function (t, e) {
        return this.isSame(t, e) || this.isAfter(t, e)
    }, vi.isSameOrBefore = function (t, e) {
        return this.isSame(t, e) || this.isBefore(t, e)
    }, vi.isValid = function () {
        return g(this)
    }, vi.lang = ii, vi.locale = ei, vi.localeData = si, vi.max = Pe, vi.min = Ie, vi.parsingFlags = function () {
        return u({}, _(this))
    }, vi.set = function (t, e) {
        if ("object" === _typeof(t)) for (var i = function (t) {
            var e, i = [];
            for (e in t) f(t, e) && i.push({unit: e, priority: z[e]});
            return i.sort(function (t, e) {
                return t.priority - e.priority
            }), i
        }(t = L(t)), s = 0; s < i.length; s++) this[i[s].unit](t[i[s].unit]); else if (D(this[t = j(t)])) return this[t](e);
        return this
    }, vi.startOf = function (t) {
        var e, i;
        if (void 0 === (t = j(t)) || "millisecond" === t || !this.isValid()) return this;
        switch (i = this._isUTC ? ri : oi, t) {
            case"year":
                e = i(this.year(), 0, 1);
                break;
            case"quarter":
                e = i(this.year(), this.month() - this.month() % 3, 1);
                break;
            case"month":
                e = i(this.year(), this.month(), 1);
                break;
            case"week":
                e = i(this.year(), this.month(), this.date() - this.weekday());
                break;
            case"isoWeek":
                e = i(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
                break;
            case"day":
            case"date":
                e = i(this.year(), this.month(), this.date());
                break;
            case"hour":
                e = this._d.valueOf(), e -= ni(e + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
                break;
            case"minute":
                e = this._d.valueOf(), e -= ni(e, 6e4);
                break;
            case"second":
                e = this._d.valueOf(), e -= ni(e, 1e3)
        }
        return this._d.setTime(e), p.updateOffset(this, !0), this
    }, vi.subtract = Xe, vi.toArray = function () {
        return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
    }, vi.toObject = function () {
        return {
            years: this.year(),
            months: this.month(),
            date: this.date(),
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        }
    }, vi.toDate = function () {
        return new Date(this.valueOf())
    }, vi.toISOString = function (t) {
        if (!this.isValid()) return null;
        var e = !0 !== t, i = e ? this.clone().utc() : this;
        return i.year() < 0 || 9999 < i.year() ? N(i, e ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : D(Date.prototype.toISOString) ? e ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", N(i, "Z")) : N(i, e ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }, vi.inspect = function () {
        if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
        var t, e, i, s = "moment", a = "";
        return this.isLocal() || (s = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", a = "Z"), t = "[" + s + '("]', e = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", i = a + '[")]', this.format(t + e + "-MM-DD[T]HH:mm:ss.SSS" + i)
    }, "undefined" != typeof Symbol && null != Symbol.for && (vi[Symbol.for("nodejs.util.inspect.custom")] = function () {
        return "Moment<" + this.format() + ">"
    }), vi.toJSON = function () {
        return this.isValid() ? this.toISOString() : null
    }, vi.toString = function () {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }, vi.unix = function () {
        return Math.floor(this.valueOf() / 1e3)
    }, vi.valueOf = function () {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }, vi.creationData = function () {
        return {input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict}
    }, vi.eraName = function () {
        for (var t, e = this.localeData().eras(), i = 0, s = e.length; i < s; ++i) {
            if (t = this.clone().startOf("day").valueOf(), e[i].since <= t && t <= e[i].until) return e[i].name;
            if (e[i].until <= t && t <= e[i].since) return e[i].name
        }
        return ""
    }, vi.eraNarrow = function () {
        for (var t, e = this.localeData().eras(), i = 0, s = e.length; i < s; ++i) {
            if (t = this.clone().startOf("day").valueOf(), e[i].since <= t && t <= e[i].until) return e[i].narrow;
            if (e[i].until <= t && t <= e[i].since) return e[i].narrow
        }
        return ""
    }, vi.eraAbbr = function () {
        for (var t, e = this.localeData().eras(), i = 0, s = e.length; i < s; ++i) {
            if (t = this.clone().startOf("day").valueOf(), e[i].since <= t && t <= e[i].until) return e[i].abbr;
            if (e[i].until <= t && t <= e[i].since) return e[i].abbr
        }
        return ""
    }, vi.eraYear = function () {
        for (var t, e, i = this.localeData().eras(), s = 0, a = i.length; s < a; ++s) if (t = i[s].since <= i[s].until ? 1 : -1, e = this.clone().startOf("day").valueOf(), i[s].since <= e && e <= i[s].until || i[s].until <= e && e <= i[s].since) return (this.year() - p(i[s].since).year()) * t + i[s].offset;
        return this.year()
    }, vi.year = Et, vi.isLeapYear = function () {
        return R(this.year())
    }, vi.weekYear = function (t) {
        return di.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }, vi.isoWeekYear = function (t) {
        return di.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
    }, vi.quarter = vi.quarters = function (t) {
        return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
    }, vi.month = Nt, vi.daysInMonth = function () {
        return St(this.year(), this.month())
    }, vi.week = vi.weeks = function (t) {
        var e = this.localeData().week(this);
        return null == t ? e : this.add(7 * (t - e), "d")
    }, vi.isoWeek = vi.isoWeeks = function (t) {
        var e = Wt(this, 1, 4).week;
        return null == t ? e : this.add(7 * (t - e), "d")
    }, vi.weeksInYear = function () {
        var t = this.localeData()._week;
        return Rt(this.year(), t.dow, t.doy)
    }, vi.weeksInWeekYear = function () {
        var t = this.localeData()._week;
        return Rt(this.weekYear(), t.dow, t.doy)
    }, vi.isoWeeksInYear = function () {
        return Rt(this.year(), 1, 4)
    }, vi.isoWeeksInISOWeekYear = function () {
        return Rt(this.isoWeekYear(), 1, 4)
    }, vi.date = ui, vi.day = vi.days = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e, i, s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != t ? (e = t, i = this.localeData(), t = "string" != typeof e ? e : isNaN(e) ? "number" == typeof (e = i.weekdaysParse(e)) ? e : null : parseInt(e, 10), this.add(t - s, "d")) : s
    }, vi.weekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == t ? e : this.add(t - e, "d")
    }, vi.isoWeekday = function (t) {
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this.day() || 7;
        var e, i,
            s = (e = t, i = this.localeData(), "string" == typeof e ? i.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e);
        return this.day(this.day() % 7 ? s : s - 7)
    }, vi.dayOfYear = function (t) {
        var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == t ? e : this.add(t - e, "d")
    }, vi.hour = vi.hours = ee, vi.minute = vi.minutes = pi, vi.second = vi.seconds = _i, vi.millisecond = vi.milliseconds = mi, vi.utcOffset = function (t, e, i) {
        var s, a = this._offset || 0;
        if (!this.isValid()) return null != t ? this : NaN;
        if (null == t) return this._isUTC ? a : ze(this);
        if ("string" == typeof t) {
            if (null === (t = je(ht, t))) return this
        } else Math.abs(t) < 16 && !i && (t *= 60);
        return !this._isUTC && e && (s = ze(this)), this._offset = t, this._isUTC = !0, null != s && this.add(s, "m"), a !== t && (!e || this._changeInProgress ? Ke(this, qe(t - a, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this
    }, vi.utc = function (t) {
        return this.utcOffset(0, t)
    }, vi.local = function (t) {
        return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(ze(this), "m")), this
    }, vi.parseZone = function () {
        var t;
        return null != this._tzm ? this.utcOffset(this._tzm, !1, !0) : "string" == typeof this._i && (null != (t = je(ct, this._i)) ? this.utcOffset(t) : this.utcOffset(0, !0)), this
    }, vi.hasAlignedHourOffset = function (t) {
        return !!this.isValid() && (t = t ? Me(t).utcOffset() : 0, (this.utcOffset() - t) % 60 == 0)
    }, vi.isDST = function () {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }, vi.isLocal = function () {
        return !!this.isValid() && !this._isUTC
    }, vi.isUtcOffset = function () {
        return !!this.isValid() && this._isUTC
    }, vi.isUtc = We, vi.isUTC = We, vi.zoneAbbr = function () {
        return this._isUTC ? "UTC" : ""
    }, vi.zoneName = function () {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }, vi.dates = i("dates accessor is deprecated. Use date instead.", ui), vi.months = i("months accessor is deprecated. Use month instead", Nt), vi.years = i("years accessor is deprecated. Use year instead", Et), vi.zone = i("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (t, e) {
        return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
    }), vi.isDSTShifted = i("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
        if (!n(this._isDSTShifted)) return this._isDSTShifted;
        var t, e = {};
        return y(e, this), (e = Te(e))._a ? (t = (e._isUTC ? m : Me)(e._a), this._isDSTShifted = this.isValid() && 0 < function (t, e, i) {
            for (var s = Math.min(t.length, e.length), a = Math.abs(t.length - e.length), n = 0, o = 0; o < s; o++) (i && t[o] !== e[o] || !i && q(t[o]) !== q(e[o])) && n++;
            return n + a
        }(e._a, t.toArray())) : this._isDSTShifted = !1, this._isDSTShifted
    });
    var yi = S.prototype;

    function wi(t, e, i, s) {
        var a = de(), n = m().set(s, e);
        return a[i](n, t)
    }

    function ki(t, e, i) {
        if (h(t) && (e = t, t = void 0), t = t || "", null != e) return wi(t, e, i, "month");
        for (var s = [], a = 0; a < 12; a++) s[a] = wi(t, a, i, "month");
        return s
    }

    function xi(t, e, i, s) {
        e = ("boolean" == typeof t ? h(e) && (i = e, e = void 0) : (e = t, t = !1, h(i = e) && (i = e, e = void 0)), e || "");
        var a, n = de(), o = t ? n._week.dow : 0, r = [];
        if (null != i) return wi(e, (i + o) % 7, s, "day");
        for (a = 0; a < 7; a++) r[a] = wi(e, (a + o) % 7, s, "day");
        return r
    }

    yi.calendar = function (t, e, i) {
        var s = this._calendar[t] || this._calendar.sameElse;
        return D(s) ? s.call(e, i) : s
    }, yi.longDateFormat = function (t) {
        var e = this._longDateFormat[t], i = this._longDateFormat[t.toUpperCase()];
        return e || !i ? e : (this._longDateFormat[t] = i.match(I).map(function (t) {
            return "MMMM" === t || "MM" === t || "DD" === t || "dddd" === t ? t.slice(1) : t
        }).join(""), this._longDateFormat[t])
    }, yi.invalidDate = function () {
        return this._invalidDate
    }, yi.ordinal = function (t) {
        return this._ordinal.replace("%d", t)
    }, yi.preparse = bi, yi.postformat = bi, yi.relativeTime = function (t, e, i, s) {
        var a = this._relativeTime[i];
        return D(a) ? a(t, e, i, s) : a.replace(/%d/i, t)
    }, yi.pastFuture = function (t, e) {
        var i = this._relativeTime[0 < t ? "future" : "past"];
        return D(i) ? i(e) : i.replace(/%s/i, e)
    }, yi.set = function (t) {
        var e, i;
        for (i in t) f(t, i) && (D(e = t[i]) ? this[i] = e : this["_" + i] = e);
        this._config = t, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }, yi.eras = function (t, e) {
        for (var i, s = this._eras || de("en")._eras, a = 0, n = s.length; a < n; ++a) {
            switch (_typeof(s[a].since)) {
                case"string":
                    i = p(s[a].since).startOf("day"), s[a].since = i.valueOf()
            }
            switch (_typeof(s[a].until)) {
                case"undefined":
                    s[a].until = 1 / 0;
                    break;
                case"string":
                    i = p(s[a].until).startOf("day").valueOf(), s[a].until = i.valueOf()
            }
        }
        return s
    }, yi.erasParse = function (t, e, i) {
        var s, a, n, o, r, l = this.eras();
        for (t = t.toUpperCase(), s = 0, a = l.length; s < a; ++s) if (n = l[s].name.toUpperCase(), o = l[s].abbr.toUpperCase(), r = l[s].narrow.toUpperCase(), i) switch (e) {
            case"N":
            case"NN":
            case"NNN":
                if (o === t) return l[s];
                break;
            case"NNNN":
                if (n === t) return l[s];
                break;
            case"NNNNN":
                if (r === t) return l[s]
        } else if (0 <= [n, o, r].indexOf(t)) return l[s]
    }, yi.erasConvertYear = function (t, e) {
        var i = t.since <= t.until ? 1 : -1;
        return void 0 === e ? p(t.since).year() : p(t.since).year() + (e - t.offset) * i
    }, yi.erasAbbrRegex = function (t) {
        return f(this, "_erasAbbrRegex") || ci.call(this), t ? this._erasAbbrRegex : this._erasRegex
    }, yi.erasNameRegex = function (t) {
        return f(this, "_erasNameRegex") || ci.call(this), t ? this._erasNameRegex : this._erasRegex
    }, yi.erasNarrowRegex = function (t) {
        return f(this, "_erasNarrowRegex") || ci.call(this), t ? this._erasNarrowRegex : this._erasRegex
    }, yi.months = function (t, e) {
        return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || Pt).test(e) ? "format" : "standalone"][t.month()] : r(this._months) ? this._months : this._months.standalone
    }, yi.monthsShort = function (t, e) {
        return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[Pt.test(e) ? "format" : "standalone"][t.month()] : r(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }, yi.monthsParse = function (t, e, i) {
        var s, a, n;
        if (this._monthsParseExact) return function (t, e, i) {
            var s, a, n, o = t.toLocaleLowerCase();
            if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) n = m([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(n, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(n, "").toLocaleLowerCase();
            return i ? "MMM" === e ? -1 !== (a = vt.call(this._shortMonthsParse, o)) ? a : null : -1 !== (a = vt.call(this._longMonthsParse, o)) ? a : null : "MMM" === e ? -1 !== (a = vt.call(this._shortMonthsParse, o)) || -1 !== (a = vt.call(this._longMonthsParse, o)) ? a : null : -1 !== (a = vt.call(this._longMonthsParse, o)) || -1 !== (a = vt.call(this._shortMonthsParse, o)) ? a : null
        }.call(this, t, e, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
            if (a = m([2e3, s]), i && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), i || this._monthsParse[s] || (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[s] = new RegExp(n.replace(".", ""), "i")), i && "MMMM" === e && this._longMonthsParse[s].test(t)) return s;
            if (i && "MMM" === e && this._shortMonthsParse[s].test(t)) return s;
            if (!i && this._monthsParse[s].test(t)) return s
        }
    }, yi.monthsRegex = function (t) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || Yt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (f(this, "_monthsRegex") || (this._monthsRegex = At), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
    }, yi.monthsShortRegex = function (t) {
        return this._monthsParseExact ? (f(this, "_monthsRegex") || Yt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (f(this, "_monthsShortRegex") || (this._monthsShortRegex = Ot), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }, yi.week = function (t) {
        return Wt(t, this._week.dow, this._week.doy).week
    }, yi.firstDayOfYear = function () {
        return this._week.doy
    }, yi.firstDayOfWeek = function () {
        return this._week.dow
    }, yi.weekdays = function (t, e) {
        var i = r(this._weekdays) ? this._weekdays : this._weekdays[t && !0 !== t && this._weekdays.isFormat.test(e) ? "format" : "standalone"];
        return !0 === t ? Bt(i, this._week.dow) : t ? i[t.day()] : i
    }, yi.weekdaysMin = function (t) {
        return !0 === t ? Bt(this._weekdaysMin, this._week.dow) : t ? this._weekdaysMin[t.day()] : this._weekdaysMin
    }, yi.weekdaysShort = function (t) {
        return !0 === t ? Bt(this._weekdaysShort, this._week.dow) : t ? this._weekdaysShort[t.day()] : this._weekdaysShort
    }, yi.weekdaysParse = function (t, e, i) {
        var s, a, n;
        if (this._weekdaysParseExact) return function (t, e, i) {
            var s, a, n, o = t.toLocaleLowerCase();
            if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) n = m([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(n, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(n, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(n, "").toLocaleLowerCase();
            return i ? "dddd" === e ? -1 !== (a = vt.call(this._weekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = vt.call(this._shortWeekdaysParse, o)) ? a : null : -1 !== (a = vt.call(this._minWeekdaysParse, o)) ? a : null : "dddd" === e ? -1 !== (a = vt.call(this._weekdaysParse, o)) || -1 !== (a = vt.call(this._shortWeekdaysParse, o)) || -1 !== (a = vt.call(this._minWeekdaysParse, o)) ? a : null : "ddd" === e ? -1 !== (a = vt.call(this._shortWeekdaysParse, o)) || -1 !== (a = vt.call(this._weekdaysParse, o)) || -1 !== (a = vt.call(this._minWeekdaysParse, o)) ? a : null : -1 !== (a = vt.call(this._minWeekdaysParse, o)) || -1 !== (a = vt.call(this._weekdaysParse, o)) || -1 !== (a = vt.call(this._shortWeekdaysParse, o)) ? a : null
        }.call(this, t, e, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
            if (a = m([2e3, 1]).day(s), i && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[s] = new RegExp(n.replace(".", ""), "i")), i && "dddd" === e && this._fullWeekdaysParse[s].test(t)) return s;
            if (i && "ddd" === e && this._shortWeekdaysParse[s].test(t)) return s;
            if (i && "dd" === e && this._minWeekdaysParse[s].test(t)) return s;
            if (!i && this._weekdaysParse[s].test(t)) return s
        }
    }, yi.weekdaysRegex = function (t) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (f(this, "_weekdaysRegex") || (this._weekdaysRegex = Gt), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }, yi.weekdaysShortRegex = function (t) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (f(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Kt), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }, yi.weekdaysMinRegex = function (t) {
        return this._weekdaysParseExact ? (f(this, "_weekdaysRegex") || Xt.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (f(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Jt), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }, yi.isPM = function (t) {
        return "p" === (t + "").toLowerCase().charAt(0)
    }, yi.meridiem = function (t, e, i) {
        return 11 < t ? i ? "pm" : "PM" : i ? "am" : "AM"
    }, ce("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {since: "0000-12-31", until: -1 / 0, offset: 1, name: "Before Christ", narrow: "BC", abbr: "BC"}],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function (t) {
            var e = t % 10;
            return t + (1 === q(t % 100 / 10) ? "th" : 1 == e ? "st" : 2 == e ? "nd" : 3 == e ? "rd" : "th")
        }
    }), p.lang = i("moment.lang is deprecated. Use moment.locale instead.", ce), p.langData = i("moment.langData is deprecated. Use moment.localeData instead.", de);
    var Ci = Math.abs;

    function $i(t, e, i, s) {
        var a = qe(e, i);
        return t._milliseconds += s * a._milliseconds, t._days += s * a._days, t._months += s * a._months, t._bubble()
    }

    function Di(t) {
        return t < 0 ? Math.floor(t) : Math.ceil(t)
    }

    function Ti(t) {
        return 4800 * t / 146097
    }

    function Si(t) {
        return 146097 * t / 4800
    }

    function Mi(t) {
        return function () {
            return this.as(t)
        }
    }

    var Ii = Mi("ms"), Pi = Mi("s"), Oi = Mi("m"), Ai = Mi("h"), Hi = Mi("d"), Ni = Mi("w"), Yi = Mi("M"), Fi = Mi("Q"),
        Ei = Mi("y");

    function ji(t) {
        return function () {
            return this.isValid() ? this._data[t] : NaN
        }
    }

    var Li = ji("milliseconds"), zi = ji("seconds"), Wi = ji("minutes"), Ri = ji("hours"), Bi = ji("days"),
        qi = ji("months"), Ui = ji("years");
    var Vi = Math.round, Gi = {ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11};

    function Ki(t, e, i, s) {
        var a = qe(t).abs(), n = Vi(a.as("s")), o = Vi(a.as("m")), r = Vi(a.as("h")), l = Vi(a.as("d")),
            c = Vi(a.as("M")), h = Vi(a.as("w")), d = Vi(a.as("y")),
            u = (n <= i.ss ? ["s", n] : n < i.s && ["ss", n]) || o <= 1 && ["m"] || o < i.m && ["mm", o] || r <= 1 && ["h"] || r < i.h && ["hh", r] || l <= 1 && ["d"] || l < i.d && ["dd", l];
        return null != i.w && (u = u || h <= 1 && ["w"] || h < i.w && ["ww", h]), (u = u || c <= 1 && ["M"] || c < i.M && ["MM", c] || d <= 1 && ["y"] || ["yy", d])[2] = e, u[3] = 0 < +t, u[4] = s, function (t, e, i, s, a) {
            return a.relativeTime(e || 1, !!i, t, s)
        }.apply(null, u)
    }

    var Ji = Math.abs;

    function Xi(t) {
        return (0 < t) - (t < 0) || +t
    }

    function Zi() {
        if (!this.isValid()) return this.localeData().invalidDate();
        var t, e, i, s, a, n, o, r, l = Ji(this._milliseconds) / 1e3, c = Ji(this._days), h = Ji(this._months),
            d = this.asSeconds();
        return d ? (t = B(l / 60), e = B(t / 60), l %= 60, t %= 60, i = B(h / 12), h %= 12, s = l ? l.toFixed(3).replace(/\.?0+$/, "") : "", a = d < 0 ? "-" : "", n = Xi(this._months) !== Xi(d) ? "-" : "", o = Xi(this._days) !== Xi(d) ? "-" : "", r = Xi(this._milliseconds) !== Xi(d) ? "-" : "", a + "P" + (i ? n + i + "Y" : "") + (h ? n + h + "M" : "") + (c ? o + c + "D" : "") + (e || t || l ? "T" : "") + (e ? r + e + "H" : "") + (t ? r + t + "M" : "") + (l ? r + s + "S" : "")) : "P0D"
    }

    var Qi = He.prototype;
    return Qi.isValid = function () {
        return this._isValid
    }, Qi.abs = function () {
        var t = this._data;
        return this._milliseconds = Ci(this._milliseconds), this._days = Ci(this._days), this._months = Ci(this._months), t.milliseconds = Ci(t.milliseconds), t.seconds = Ci(t.seconds), t.minutes = Ci(t.minutes), t.hours = Ci(t.hours), t.months = Ci(t.months), t.years = Ci(t.years), this
    }, Qi.add = function (t, e) {
        return $i(this, t, e, 1)
    }, Qi.subtract = function (t, e) {
        return $i(this, t, e, -1)
    }, Qi.as = function (t) {
        if (!this.isValid()) return NaN;
        var e, i, s = this._milliseconds;
        if ("month" === (t = j(t)) || "quarter" === t || "year" === t) switch (e = this._days + s / 864e5, i = this._months + Ti(e), t) {
            case"month":
                return i;
            case"quarter":
                return i / 3;
            case"year":
                return i / 12
        } else switch (e = this._days + Math.round(Si(this._months)), t) {
            case"week":
                return e / 7 + s / 6048e5;
            case"day":
                return e + s / 864e5;
            case"hour":
                return 24 * e + s / 36e5;
            case"minute":
                return 1440 * e + s / 6e4;
            case"second":
                return 86400 * e + s / 1e3;
            case"millisecond":
                return Math.floor(864e5 * e) + s;
            default:
                throw new Error("Unknown unit " + t)
        }
    }, Qi.asMilliseconds = Ii, Qi.asSeconds = Pi, Qi.asMinutes = Oi, Qi.asHours = Ai, Qi.asDays = Hi, Qi.asWeeks = Ni, Qi.asMonths = Yi, Qi.asQuarters = Fi, Qi.asYears = Ei, Qi.valueOf = function () {
        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * q(this._months / 12) : NaN
    }, Qi._bubble = function () {
        var t, e, i, s, a, n = this._milliseconds, o = this._days, r = this._months, l = this._data;
        return 0 <= n && 0 <= o && 0 <= r || n <= 0 && o <= 0 && r <= 0 || (n += 864e5 * Di(Si(r) + o), r = o = 0), l.milliseconds = n % 1e3, t = B(n / 1e3), l.seconds = t % 60, e = B(t / 60), l.minutes = e % 60, i = B(e / 60), l.hours = i % 24, o += B(i / 24), r += a = B(Ti(o)), o -= Di(Si(a)), s = B(r / 12), r %= 12, l.days = o, l.months = r, l.years = s, this
    }, Qi.clone = function () {
        return qe(this)
    }, Qi.get = function (t) {
        return t = j(t), this.isValid() ? this[t + "s"]() : NaN
    }, Qi.milliseconds = Li, Qi.seconds = zi, Qi.minutes = Wi, Qi.hours = Ri, Qi.days = Bi, Qi.weeks = function () {
        return B(this.days() / 7)
    }, Qi.months = qi, Qi.years = Ui, Qi.humanize = function (t, e) {
        if (!this.isValid()) return this.localeData().invalidDate();
        var i, s, a = !1, n = Gi;
        return "object" === _typeof(t) && (e = t, t = !1), "boolean" == typeof t && (a = t), "object" === _typeof(e) && (n = Object.assign({}, Gi, e), null != e.s && null == e.ss && (n.ss = e.s - 1)), i = this.localeData(), s = Ki(this, !a, n, i), a && (s = i.pastFuture(+this, s)), i.postformat(s)
    }, Qi.toISOString = Zi, Qi.toString = Zi, Qi.toJSON = Zi, Qi.locale = ei, Qi.localeData = si, Qi.toIsoString = i("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Zi), Qi.lang = ii, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), ut("x", lt), ut("X", /[+-]?\d+(\.\d{1,3})?/), _t("X", function (t, e, i) {
        i._d = new Date(1e3 * parseFloat(t))
    }), _t("x", function (t, e, i) {
        i._d = new Date(q(t))
    }), p.version = "2.29.1", t = Me, p.fn = vi, p.min = function () {
        return Oe("isBefore", [].slice.call(arguments, 0))
    }, p.max = function () {
        return Oe("isAfter", [].slice.call(arguments, 0))
    }, p.now = function () {
        return Date.now ? Date.now() : +new Date
    }, p.utc = m, p.unix = function (t) {
        return Me(1e3 * t)
    }, p.months = function (t, e) {
        return ki(t, e, "months")
    }, p.isDate = o, p.locale = ce, p.invalid = v, p.duration = qe, p.isMoment = k, p.weekdays = function (t, e, i) {
        return xi(t, e, i, "weekdays")
    }, p.parseZone = function () {
        return Me.apply(null, arguments).parseZone()
    }, p.localeData = de, p.isDuration = Ne, p.monthsShort = function (t, e) {
        return ki(t, e, "monthsShort")
    }, p.weekdaysMin = function (t, e, i) {
        return xi(t, e, i, "weekdaysMin")
    }, p.defineLocale = he, p.updateLocale = function (t, e) {
        var i, s, a;
        return null != e ? (a = se, null != ae[t] && null != ae[t].parentLocale ? ae[t].set(T(ae[t]._config, e)) : (null != (s = le(t)) && (a = s._config), e = T(a, e), null == s && (e.abbr = t), (i = new S(e)).parentLocale = ae[t], ae[t] = i), ce(t)) : null != ae[t] && (null != ae[t].parentLocale ? (ae[t] = ae[t].parentLocale, t === ce() && ce(t)) : null != ae[t] && delete ae[t]), ae[t]
    }, p.locales = function () {
        return s(ae)
    }, p.weekdaysShort = function (t, e, i) {
        return xi(t, e, i, "weekdaysShort")
    }, p.normalizeUnits = j, p.relativeTimeRounding = function (t) {
        return void 0 === t ? Vi : "function" == typeof t && (Vi = t, !0)
    }, p.relativeTimeThreshold = function (t, e) {
        return void 0 !== Gi[t] && (void 0 === e ? Gi[t] : (Gi[t] = e, "s" === t && (Gi.ss = e - 1), !0))
    }, p.calendarFormat = function (t, e) {
        var i = t.diff(e, "days", !0);
        return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
    }, p.prototype = vi, p.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    }, p
}), function (t, i) {
    var e, s;
    "function" == typeof define && define.amd ? define(["moment", "jquery"], function (t, e) {
        return e.fn || (e.fn = {}), "function" != typeof t && t.hasOwnProperty("default") && (t = t.default), i(t, e)
    }) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? ((e = "undefined" != typeof window ? window.jQuery : void 0) || (e = require("jquery")).fn || (e.fn = {}), s = "undefined" != typeof window && void 0 !== window.moment ? window.moment : require("moment"), module.exports = i(s, e)) : t.daterangepicker = i(t.moment, t.jQuery)
}("undefined" != typeof window ? window : this, function (E, j) {
    function s(t, e, i) {
        var s, a, n, o, r;
        if (this.parentEl = "body", this.element = j(t), this.startDate = E().startOf("day"), this.endDate = E().endOf("day"), this.minDate = !1, this.maxDate = !1, this.maxSpan = !1, this.autoApply = !1, this.dateRange = !0, this.singleDatePicker = !1, this.showDropdowns = !1, this.minYear = E().subtract(100, "year").format("YYYY"), this.maxYear = E().add(100, "year").format("YYYY"), this.showWeekNumbers = !1, this.showISOWeekNumbers = !1, this.showCustomRangeLabel = !0, this.timePicker = !1, this.timePicker24Hour = !1, this.timePickerIncrement = 1, this.timePickerSeconds = !1, this.linkedCalendars = !0, this.autoUpdateInput = !0, this.alwaysShowCalendars = !1, this.ranges = {}, this.opens = "right", this.element.hasClass("pull-right") && (this.opens = "left"), this.drops = "down", this.element.hasClass("dropup") && (this.drops = "up"), this.buttonClasses = "btn btn-sm", this.applyButtonClasses = "btn-primary", this.cancelButtonClasses = "btn-default", this.locale = {
            direction: "ltr",
            format: E.localeData().longDateFormat("L"),
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            weekLabel: "W",
            customRangeLabel: "Custom Range",
            daysOfWeek: E.weekdaysMin(),
            monthNames: E.monthsShort(),
            firstDay: E.localeData().firstDayOfWeek()
        }, this.callback = function () {
        }, this.isShowing = !1, this.leftCalendar = {}, this.rightCalendar = {}, "object" === _typeof(e) && null !== e || (e = {}), "string" == typeof (e = j.extend(this.element.data(), e)).template || e.template instanceof j || (e.template = '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'), this.parentEl = e.parentEl && j(e.parentEl).length ? j(e.parentEl) : j(this.parentEl), this.container = j(e.template).appendTo(this.parentEl), "object" === _typeof(e.locale) && ("string" == typeof e.locale.direction && (this.locale.direction = e.locale.direction), "string" == typeof e.locale.format && (this.locale.format = e.locale.format), "string" == typeof e.locale.separator && (this.locale.separator = e.locale.separator), "object" === _typeof(e.locale.daysOfWeek) && (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()), "object" === _typeof(e.locale.monthNames) && (this.locale.monthNames = e.locale.monthNames.slice()), "number" == typeof e.locale.firstDay && (this.locale.firstDay = e.locale.firstDay), "string" == typeof e.locale.applyLabel && (this.locale.applyLabel = e.locale.applyLabel), "string" == typeof e.locale.cancelLabel && (this.locale.cancelLabel = e.locale.cancelLabel), "string" == typeof e.locale.weekLabel && (this.locale.weekLabel = e.locale.weekLabel), "string" == typeof e.locale.customRangeLabel && ((c = document.createElement("textarea")).innerHTML = e.locale.customRangeLabel, h = c.value, this.locale.customRangeLabel = h)), this.container.addClass(this.locale.direction), "string" == typeof e.startDate && (this.startDate = E(e.startDate, this.locale.format)), "string" == typeof e.endDate && (this.endDate = E(e.endDate, this.locale.format)), "string" == typeof e.minDate && (this.minDate = E(e.minDate, this.locale.format)), "string" == typeof e.maxDate && (this.maxDate = E(e.maxDate, this.locale.format)), "object" === _typeof(e.startDate) && (this.startDate = E(e.startDate)), "object" === _typeof(e.endDate) && (this.endDate = E(e.endDate)), "object" === _typeof(e.minDate) && (this.minDate = E(e.minDate)), "object" === _typeof(e.maxDate) && (this.maxDate = E(e.maxDate)), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), "string" == typeof e.applyButtonClasses && (this.applyButtonClasses = e.applyButtonClasses), "string" == typeof e.applyClass && (this.applyButtonClasses = e.applyClass), "string" == typeof e.cancelButtonClasses && (this.cancelButtonClasses = e.cancelButtonClasses), "string" == typeof e.cancelClass && (this.cancelButtonClasses = e.cancelClass), "object" === _typeof(e.maxSpan) && (this.maxSpan = e.maxSpan), "object" === _typeof(e.dateLimit) && (this.maxSpan = e.dateLimit), "string" == typeof e.opens && (this.opens = e.opens), "string" == typeof e.drops && (this.drops = e.drops), "boolean" == typeof e.showWeekNumbers && (this.showWeekNumbers = e.showWeekNumbers), "boolean" == typeof e.showISOWeekNumbers && (this.showISOWeekNumbers = e.showISOWeekNumbers), "string" == typeof e.buttonClasses && (this.buttonClasses = e.buttonClasses), "object" === _typeof(e.buttonClasses) && (this.buttonClasses = e.buttonClasses.join(" ")), "boolean" == typeof e.showDropdowns && (this.showDropdowns = e.showDropdowns), "number" == typeof e.minYear && (this.minYear = e.minYear), "number" == typeof e.maxYear && (this.maxYear = e.maxYear), "boolean" == typeof e.showCustomRangeLabel && (this.showCustomRangeLabel = e.showCustomRangeLabel), "boolean" == typeof e.singleDatePicker && (this.singleDatePicker = e.singleDatePicker), "boolean" == typeof e.dateRange && (this.dateRange = e.dateRange, this.dateRange || (this.endDate = this.startDate.clone())), "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker), "boolean" == typeof e.timePickerSeconds && (this.timePickerSeconds = e.timePickerSeconds), "number" == typeof e.timePickerIncrement && (this.timePickerIncrement = e.timePickerIncrement), "boolean" == typeof e.timePicker24Hour && (this.timePicker24Hour = e.timePicker24Hour), "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply), "boolean" == typeof e.autoUpdateInput && (this.autoUpdateInput = e.autoUpdateInput), "boolean" == typeof e.linkedCalendars && (this.linkedCalendars = e.linkedCalendars), "function" == typeof e.isInvalidDate && (this.isInvalidDate = e.isInvalidDate), "function" == typeof e.isCustomDate && (this.isCustomDate = e.isCustomDate), "boolean" == typeof e.alwaysShowCalendars && (this.alwaysShowCalendars = e.alwaysShowCalendars), 0 != this.locale.firstDay) for (var l = this.locale.firstDay; 0 < l;) this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), l--;
        if (void 0 === e.startDate && void 0 === e.endDate && j(this.element).is(":text") && (r = s = null, 2 == (o = (n = j(this.element).val()).split(this.locale.separator)).length ? (r = E(o[0], this.locale.format), s = E(o[1], this.locale.format)) : this.singleDatePicker && "" !== n && (r = E(n, this.locale.format), s = E(n, this.locale.format)), null !== r && null !== s && (this.setStartDate(r), this.setEndDate(s))), "object" === _typeof(e.ranges)) {
            for (a in e.ranges) {
                r = "string" == typeof e.ranges[a][0] ? E(e.ranges[a][0], this.locale.format) : E(e.ranges[a][0]), s = "string" == typeof e.ranges[a][1] ? E(e.ranges[a][1], this.locale.format) : E(e.ranges[a][1]), this.minDate && r.isBefore(this.minDate) && (r = this.minDate.clone());
                var c, h, d = this.maxDate;
                this.maxSpan && d && r.clone().add(this.maxSpan).isAfter(d) && (d = r.clone().add(this.maxSpan)), d && s.isAfter(d) && (s = d.clone()), this.minDate && s.isBefore(this.minDate, this.timepicker ? "minute" : "day") || d && r.isAfter(d, this.timepicker ? "minute" : "day") || ((c = document.createElement("textarea")).innerHTML = a, h = c.value, this.ranges[h] = [r, s])
            }
            var u = "<ul>";
            for (a in this.ranges) u += '<li data-range-key="' + a + '">' + a + "</li>";
            this.showCustomRangeLabel && (u += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + "</li>"), u += "</ul>", this.container.find(".ranges").prepend(u)
        }
        "function" == typeof i && (this.callback = i), this.timePicker || (this.startDate = this.startDate.startOf("day"), this.endDate = this.endDate.endOf("day"), this.container.find(".calendar-time").hide()), this.timePicker && this.autoApply && (this.autoApply = !1), this.autoApply && this.container.addClass("auto-apply"), "object" === _typeof(e.ranges) && this.container.addClass("show-ranges"), this.singleDatePicker && (this.container.addClass("single"), this.container.find(".drp-calendar.left").show(), this.container.find(".drp-calendar.right").show(), !this.timePicker && this.autoApply && this.container.addClass("auto-apply")), (void 0 === e.ranges && !this.singleDatePicker || this.alwaysShowCalendars) && this.container.addClass("show-calendar"), this.container.addClass("opens" + this.opens), this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses), this.applyButtonClasses.length && this.container.find(".applyBtn").addClass(this.applyButtonClasses), this.cancelButtonClasses.length && this.container.find(".cancelBtn").addClass(this.cancelButtonClasses), this.container.find(".applyBtn").html(this.locale.applyLabel), this.container.find(".cancelBtn").html(this.locale.cancelLabel), this.container.find(".drp-calendar").on("click.daterangepicker", ".prev", j.proxy(this.clickPrev, this)).on("click.daterangepicker", ".next", j.proxy(this.clickNext, this)).on("mousedown.daterangepicker", "td.available", j.proxy(this.clickDate, this)).on("mouseenter.daterangepicker", "td.available", j.proxy(this.hoverDate, this)).on("change.daterangepicker", "select.yearselect", j.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.monthselect", j.proxy(this.monthOrYearChanged, this)).on("change.daterangepicker", "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect", j.proxy(this.timeChanged, this)), this.container.find(".ranges").on("click.daterangepicker", "li", j.proxy(this.clickRange, this)), this.container.find(".drp-buttons").on("click.daterangepicker", "button.applyBtn", j.proxy(this.clickApply, this)).on("click.daterangepicker", "button.cancelBtn", j.proxy(this.clickCancel, this)), this.element.is("input") || this.element.is("button") ? this.element.on({
            "click.daterangepicker": j.proxy(this.show, this),
            "focus.daterangepicker": j.proxy(this.show, this),
            "keyup.daterangepicker": j.proxy(this.elementChanged, this),
            "keydown.daterangepicker": j.proxy(this.keydown, this)
        }) : (this.element.on("click.daterangepicker", j.proxy(this.toggle, this)), this.element.on("keydown.daterangepicker", j.proxy(this.toggle, this))), this.updateElement()
    }

    return s.prototype = {
        constructor: s, setStartDate: function (t) {
            "string" == typeof t && (this.startDate = E(t, this.locale.format)), "object" === _typeof(t) && (this.startDate = E(t)), this.timePicker || (this.startDate = this.startDate.startOf("day")), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.minDate && this.startDate.isBefore(this.minDate) && (this.startDate = this.minDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.maxDate && this.startDate.isAfter(this.maxDate) && (this.startDate = this.maxDate.clone(), this.timePicker && this.timePickerIncrement && this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, setEndDate: function (t) {
            "string" == typeof t && (this.endDate = E(t, this.locale.format)), "object" === _typeof(t) && (this.endDate = E(t)), this.timePicker || (this.endDate = this.endDate.endOf("day")), this.timePicker && this.timePickerIncrement && this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement), this.endDate.isBefore(this.startDate) && (this.endDate = this.startDate.clone()), this.maxDate && this.endDate.isAfter(this.maxDate) && (this.endDate = this.maxDate.clone()), this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) && (this.endDate = this.startDate.clone().add(this.maxSpan)), this.previousRightTime = this.endDate.clone(), this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.isShowing || this.updateElement(), this.updateMonthsInView()
        }, isInvalidDate: function () {
            return !1
        }, isCustomDate: function () {
            return !1
        }, updateView: function () {
            this.timePicker && (this.renderTimePicker("left"), this.renderTimePicker("right"), this.endDate ? this.container.find(".right .calendar-time select").prop("disabled", !1).removeClass("disabled") : this.container.find(".right .calendar-time select").prop("disabled", !0).addClass("disabled")), this.endDate && this.container.find(".drp-selected").html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format)), this.updateMonthsInView(), this.updateCalendars(), this.updateFormInputs()
        }, updateMonthsInView: function () {
            if (this.endDate) {
                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.startDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM")) && (this.endDate.format("YYYY-MM") == this.leftCalendar.month.format("YYYY-MM") || this.endDate.format("YYYY-MM") == this.rightCalendar.month.format("YYYY-MM"))) return;
                this.leftCalendar.month = this.startDate.clone().date(2), this.linkedCalendars || this.endDate.month() == this.startDate.month() && this.endDate.year() == this.startDate.year() ? this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month") : this.rightCalendar.month = this.endDate.clone().date(2)
            } else this.leftCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && this.rightCalendar.month.format("YYYY-MM") != this.startDate.format("YYYY-MM") && (this.leftCalendar.month = this.startDate.clone().date(2), this.rightCalendar.month = this.startDate.clone().date(2).add(1, "month"));
            this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate && (this.rightCalendar.month = this.maxDate.clone().date(2), this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, "month"))
        }, updateCalendars: function () {
            var t, e, i, s;
            this.timePicker && (this.endDate ? (e = parseInt(this.container.find(".left .hourselect").val(), 10), i = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(i) && (i = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), t = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (s = this.container.find(".left .ampmselect").val()) && e < 12 && (e += 12), "AM" === s && 12 === e && (e = 0))) : (e = parseInt(this.container.find(".right .hourselect").val(), 10), i = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(i) && (i = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), t = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, this.timePicker24Hour || ("PM" === (s = this.container.find(".right .ampmselect").val()) && e < 12 && (e += 12), "AM" === s && 12 === e && (e = 0))), this.leftCalendar.month.hour(e).minute(i).second(t), this.rightCalendar.month.hour(e).minute(i).second(t)), this.renderCalendar("left"), this.renderCalendar("right"), this.container.find(".ranges li").removeClass("active"), null != this.endDate && this.calculateChosenLabel()
        }, renderCalendar: function (t) {
            var e = "left" == t ? this.leftCalendar : this.rightCalendar, i = e.month.month(), s = e.month.year(),
                a = e.month.hour(), n = e.month.minute(), o = e.month.second(), r = E([s, i]).daysInMonth(),
                l = E([s, i, 1]), c = E([s, i, r]), h = E(l).subtract(1, "month").month(),
                d = E(l).subtract(1, "month").year(), u = E([d, h]).daysInMonth(), p = l.day();
            (e = []).firstDay = l, e.lastDay = c;
            for (var f = 0; f < 6; f++) e[f] = [];
            var m = u - p + this.locale.firstDay + 1;
            u < m && (m -= 7), p == this.locale.firstDay && (m = u - 6);
            for (var _ = E([d, h, m, 12, n, o]), f = 0, g = 0, v = 0; f < 42; f++, g++, _ = E(_).add(24, "hour")) 0 < f && g % 7 == 0 && (g = 0, v++), e[v][g] = _.clone().hour(a).minute(n).second(o), _.hour(12), this.minDate && e[v][g].format("YYYY-MM-DD") == this.minDate.format("YYYY-MM-DD") && e[v][g].isBefore(this.minDate) && "left" == t && (e[v][g] = this.minDate.clone()), this.maxDate && e[v][g].format("YYYY-MM-DD") == this.maxDate.format("YYYY-MM-DD") && e[v][g].isAfter(this.maxDate) && "right" == t && (e[v][g] = this.maxDate.clone());
            "left" == t ? this.leftCalendar.calendar = e : this.rightCalendar.calendar = e;
            var b = "left" == t ? this.minDate : this.startDate, y = this.maxDate,
                w = ("left" == t ? this.startDate : this.endDate, this.locale.direction, '<table class="table-condensed">');
            w += "<thead>", w += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (w += "<th></th>"), b && !b.isBefore(e.firstDay) || this.linkedCalendars && "left" != t ? w += "<th></th>" : w += '<th class="prev available"><span></span></th>';
            var k, x = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
            if (this.showDropdowns) {
                for (var C = e[1][1].month(), $ = e[1][1].year(), D = y && y.year() || this.maxYear, T = b && b.year() || this.minYear, S = $ == T, M = $ == D, I = '<select class="monthselect">', P = 0; P < 12; P++) (!S || b && P >= b.month()) && (!M || y && P <= y.month()) ? I += "<option value='" + P + "'" + (P === C ? " selected='selected'" : "") + ">" + this.locale.monthNames[P] + "</option>" : I += "<option value='" + P + "'" + (P === C ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[P] + "</option>";
                I += "</select>";
                for (var O = '<select class="yearselect">', A = T; A <= D; A++) O += '<option value="' + A + '"' + (A === $ ? ' selected="selected"' : "") + ">" + A + "</option>";
                x = I + (O += "</select>")
            }
            w += '<th colspan="5" class="month">' + x + "</th>", y && !y.isAfter(e.lastDay) || this.linkedCalendars && "right" != t && !this.singleDatePicker ? w += "<th></th>" : w += '<th class="next available"><span></span></th>', w += "</tr>", w += "<tr>", (this.showWeekNumbers || this.showISOWeekNumbers) && (w += '<th class="week">' + this.locale.weekLabel + "</th>"), j.each(this.locale.daysOfWeek, function (t, e) {
                w += "<th>" + e + "</th>"
            }), w += "</tr>", w += "</thead>", w += "<tbody>", null == this.endDate && this.maxSpan && (k = this.startDate.clone().add(this.maxSpan).endOf("day"), y && !k.isBefore(y) || (y = k));
            for (v = 0; v < 6; v++) {
                w += "<tr>", this.showWeekNumbers ? w += '<td class="week">' + e[v][0].week() + "</td>" : this.showISOWeekNumbers && (w += '<td class="week">' + e[v][0].isoWeek() + "</td>");
                for (g = 0; g < 7; g++) {
                    var H = [];
                    e[v][g].isSame(new Date, "day") && H.push("today"), 5 < e[v][g].isoWeekday() && H.push("weekend"), e[v][g].month() != e[1][1].month() && H.push("off", "ends"), this.minDate && e[v][g].isBefore(this.minDate, "day") && H.push("off", "disabled"), y && e[v][g].isAfter(y, "day") && H.push("off", "disabled", "available"), this.isInvalidDate(e[v][g]) && H.push("off", "disabled"), e[v][g].format("YYYY-MM-DD") == this.startDate.format("YYYY-MM-DD") && H.push("active", "start-date"), null != this.endDate && e[v][g].format("YYYY-MM-DD") == this.endDate.format("YYYY-MM-DD") && H.push("active", "end-date"), null != this.endDate && e[v][g] > this.startDate && e[v][g] < this.endDate && H.push("in-range");
                    var N = this.isCustomDate(e[v][g]);
                    !1 !== N && ("string" == typeof N ? H.push(N) : Array.prototype.push.apply(H, N));
                    for (var Y = "", F = !1, f = 0; f < H.length; f++) Y += H[f] + " ", "disabled" == H[f] && (F = !0);
                    F || (Y += "available"), w += '<td class="' + Y.replace(/^\s+|\s+$/g, "") + '" data-title="r' + v + "c" + g + '">' + e[v][g].date() + "</td>"
                }
                w += "</tr>"
            }
            w += "</tbody>", w += "</table>", this.container.find(".drp-calendar." + t + " .calendar-table").html(w)
        }, renderTimePicker: function (t) {
            if ("right" != t || this.endDate) {
                var e, i, s, a, n, o = this.maxDate;
                !this.maxSpan || this.maxDate && !this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate) || (o = this.startDate.clone().add(this.maxSpan)), "left" == t ? (i = this.startDate.clone(), s = this.minDate) : "right" == t && (i = this.endDate.clone(), s = this.startDate, "" != (a = this.container.find(".drp-calendar.right .calendar-time")).html() && (i.hour(isNaN(i.hour()) ? a.find(".hourselect option:selected").val() : i.hour()), i.minute(isNaN(i.minute()) ? a.find(".minuteselect option:selected").val() : i.minute()), i.second(isNaN(i.second()) ? a.find(".secondselect option:selected").val() : i.second()), this.timePicker24Hour || ("PM" === (n = a.find(".ampmselect option:selected").val()) && i.hour() < 12 && i.hour(i.hour() + 12), "AM" === n && 12 === i.hour() && i.hour(0))), i.isBefore(this.startDate) && (i = this.startDate.clone()), o && i.isAfter(o) && (i = o.clone())), e = '<select class="hourselect">';
                for (var r = this.timePicker24Hour ? 0 : 1, l = this.timePicker24Hour ? 23 : 12, c = r; c <= l; c++) {
                    var h = c;
                    this.timePicker24Hour || (h = 12 <= i.hour() ? 12 == c ? 12 : c + 12 : 12 == c ? 0 : c);
                    var d = i.clone().hour(h), u = !1;
                    s && d.minute(59).isBefore(s) && (u = !0), o && d.minute(0).isAfter(o) && (u = !0), h != i.hour() || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + c + "</option>" : '<option value="' + c + '">' + c + "</option>" : e += '<option value="' + c + '" selected="selected">' + c + "</option>"
                }
                e += "</select> ", e += ': <select class="minuteselect">';
                for (var p, f, c = 0; c < 60; c += this.timePickerIncrement) {
                    var m = c < 10 ? "0" + c : c, d = i.clone().minute(c), u = !1;
                    s && d.second(59).isBefore(s) && (u = !0), o && d.second(0).isAfter(o) && (u = !0), i.minute() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + m + "</option>" : '<option value="' + c + '">' + m + "</option>" : e += '<option value="' + c + '" selected="selected">' + m + "</option>"
                }
                if (e += "</select> ", this.timePickerSeconds) {
                    e += ': <select class="secondselect">';
                    for (c = 0; c < 60; c++) {
                        m = c < 10 ? "0" + c : c, d = i.clone().second(c), u = !1;
                        s && d.isBefore(s) && (u = !0), o && d.isAfter(o) && (u = !0), i.second() != c || u ? e += u ? '<option value="' + c + '" disabled="disabled" class="disabled">' + m + "</option>" : '<option value="' + c + '">' + m + "</option>" : e += '<option value="' + c + '" selected="selected">' + m + "</option>"
                    }
                    e += "</select> "
                }
                this.timePicker24Hour || (e += '<select class="ampmselect">', f = p = "", s && i.clone().hour(12).minute(0).second(0).isBefore(s) && (p = ' disabled="disabled" class="disabled"'), o && i.clone().hour(0).minute(0).second(0).isAfter(o) && (f = ' disabled="disabled" class="disabled"'), 12 <= i.hour() ? e += '<option value="AM"' + p + '>AM</option><option value="PM" selected="selected"' + f + ">PM</option>" : e += '<option value="AM" selected="selected"' + p + '>AM</option><option value="PM"' + f + ">PM</option>", e += "</select>"), this.container.find(".drp-calendar." + t + " .calendar-time").html(e)
            }
        }, updateFormInputs: function () {
            this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)) ? this.container.find("button.applyBtn").prop("disabled", !1) : this.container.find("button.applyBtn").prop("disabled", !0)
        }, move: function () {
            var t, e = {top: 0, left: 0}, i = this.drops, s = j(window).width();
            switch (this.parentEl.is("body") || (e = {
                top: this.parentEl.offset().top - this.parentEl.scrollTop(),
                left: this.parentEl.offset().left - this.parentEl.scrollLeft()
            }, s = this.parentEl[0].clientWidth + this.parentEl.offset().left), i) {
                case"auto":
                    (t = this.element.offset().top + this.element.outerHeight() - e.top) + this.container.outerHeight() >= this.parentEl[0].scrollHeight && (t = this.element.offset().top - this.container.outerHeight() - e.top, i = "up");
                    break;
                case"up":
                    t = this.element.offset().top - this.container.outerHeight() - e.top;
                    break;
                default:
                    t = this.element.offset().top + this.element.outerHeight() - e.top
            }
            this.container.css({top: 0, left: 0, right: "auto"});
            var a, n, o = this.container.outerWidth();
            this.container.toggleClass("drop-up", "up" == i), "left" == this.opens ? o + (a = s - this.element.offset().left - this.element.outerWidth()) > j(window).width() ? this.container.css({
                top: t,
                right: "auto",
                left: 9
            }) : this.container.css({
                top: t,
                right: a,
                left: "auto"
            }) : "center" == this.opens ? (n = this.element.offset().left - e.left + this.element.outerWidth() / 2 - o / 2) < 0 ? this.container.css({
                top: t,
                right: "auto",
                left: 9
            }) : n + o > j(window).width() ? this.container.css({
                top: t,
                left: "auto",
                right: 0
            }) : this.container.css({
                top: t,
                left: n,
                right: "auto"
            }) : (n = this.element.offset().left - e.left) + o > j(window).width() ? this.container.css({
                top: t,
                left: "auto",
                right: 0
            }) : this.container.css({top: t, left: n, right: "auto"})
        }, show: function () {
            this.isShowing || (this._outsideClickProxy = j.proxy(function (t) {
                this.outsideClick(t)
            }, this), j(document).on("mousedown.daterangepicker", this._outsideClickProxy).on("touchend.daterangepicker", this._outsideClickProxy).on("click.daterangepicker", "[data-toggle=dropdown]", this._outsideClickProxy).on("focusin.daterangepicker", this._outsideClickProxy), j(window).on("resize.daterangepicker", j.proxy(function (t) {
                this.move(t)
            }, this)), this.oldStartDate = this.startDate.clone(), this.oldEndDate = this.endDate.clone(), this.previousRightTime = this.endDate.clone(), this.updateView(), this.container.show(), this.move(), this.element.trigger("show.daterangepicker", this), this.isShowing = !0)
        }, hide: function () {
            this.isShowing && (this.endDate || (this.startDate = this.oldStartDate.clone(), this.endDate = this.oldEndDate.clone()), this.startDate.isSame(this.oldStartDate) && this.endDate.isSame(this.oldEndDate) || this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel), this.updateElement(), j(document).off(".daterangepicker"), j(window).off(".daterangepicker"), this.container.hide(), this.element.trigger("hide.daterangepicker", this), this.isShowing = !1)
        }, toggle: function () {
            this.isShowing ? this.hide() : this.show()
        }, outsideClick: function (t) {
            var e = j(t.target);
            "focusin" == t.type || e.closest(this.element).length || e.closest(this.container).length || e.closest(".calendar-table").length || (this.hide(), this.element.trigger("outsideClick.daterangepicker", this))
        }, showCalendars: function () {
            this.container.addClass("show-calendar"), this.move(), this.element.trigger("showCalendar.daterangepicker", this)
        }, hideCalendars: function () {
            this.container.removeClass("show-calendar"), this.element.trigger("hideCalendar.daterangepicker", this)
        }, clickRange: function (t) {
            var e, i = t.target.getAttribute("data-range-key");
            (this.chosenLabel = i) == this.locale.customRangeLabel ? this.showCalendars() : (e = this.ranges[i], this.startDate = e[0], this.endDate = e[1], this.timePicker || (this.startDate.startOf("day"), this.endDate.endOf("day")), this.alwaysShowCalendars || this.hideCalendars(), this.clickApply())
        }, clickPrev: function (t) {
            j(t.target).parents(".drp-calendar").hasClass("left") ? (this.leftCalendar.month.subtract(1, "month"), this.linkedCalendars && this.rightCalendar.month.subtract(1, "month")) : this.rightCalendar.month.subtract(1, "month"), this.updateCalendars()
        }, clickNext: function (t) {
            j(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.month.add(1, "month") : (this.rightCalendar.month.add(1, "month"), this.linkedCalendars && this.leftCalendar.month.add(1, "month")), this.updateCalendars()
        }, hoverDate: function (t) {
            var e, i, s, o, r, l, c;
            j(t.target).hasClass("available") && (i = (e = j(t.target).attr("data-title")).substr(1, 1), s = e.substr(3, 1), o = j(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s], r = this.leftCalendar, l = this.rightCalendar, c = this.startDate, this.endDate || this.container.find(".drp-calendar tbody td").each(function (t, e) {
                var i, s, a, n;
                j(e).hasClass("week") || (s = (i = j(e).attr("data-title")).substr(1, 1), a = i.substr(3, 1), (n = j(e).parents(".drp-calendar").hasClass("left") ? r.calendar[s][a] : l.calendar[s][a]).isAfter(c) && n.isBefore(o) || n.isSame(o, "day") ? j(e).addClass("in-range") : j(e).removeClass("in-range"))
            }))
        }, clickDate: function (t) {
            var e, i, s, a, n, o, r, l;
            j(t.target).hasClass("available") && (i = (e = j(t.target).attr("data-title")).substr(1, 1), s = e.substr(3, 1), a = j(t.target).parents(".drp-calendar").hasClass("left") ? this.leftCalendar.calendar[i][s] : this.rightCalendar.calendar[i][s], this.endDate || a.isBefore(this.startDate, "day") ? (this.timePicker && (n = parseInt(this.container.find(".left .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (o = this.container.find(".left .ampmselect").val()) && n < 12 && (n += 12), "AM" === o && 12 === n && (n = 0)), r = parseInt(this.container.find(".left .minuteselect").val(), 10), isNaN(r) && (r = parseInt(this.container.find(".left .minuteselect option:last").val(), 10)), l = this.timePickerSeconds ? parseInt(this.container.find(".left .secondselect").val(), 10) : 0, a = a.clone().hour(n).minute(r).second(l)), this.endDate = null, this.setStartDate(a.clone())) : !this.endDate && a.isBefore(this.startDate) ? this.setEndDate(this.startDate.clone()) : (this.timePicker && (n = parseInt(this.container.find(".right .hourselect").val(), 10), this.timePicker24Hour || ("PM" === (o = this.container.find(".right .ampmselect").val()) && n < 12 && (n += 12), "AM" === o && 12 === n && (n = 0)), r = parseInt(this.container.find(".right .minuteselect").val(), 10), isNaN(r) && (r = parseInt(this.container.find(".right .minuteselect option:last").val(), 10)), l = this.timePickerSeconds ? parseInt(this.container.find(".right .secondselect").val(), 10) : 0, a = a.clone().hour(n).minute(r).second(l)), this.setEndDate(a.clone()), this.autoApply && (this.calculateChosenLabel(), this.clickApply())), !1 === this.dateRange && (this.setEndDate(this.startDate), !this.timePicker && this.autoApply && this.clickApply()), this.updateView(), t.stopPropagation())
        }, calculateChosenLabel: function () {
            var t = !0, e = 0;
            for (var i in this.ranges) {
                if (this.timePicker) {
                    var s = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm";
                    if (this.startDate.format(s) == this.ranges[i][0].format(s) && this.endDate.format(s) == this.ranges[i][1].format(s)) {
                        t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                        break
                    }
                } else if (this.startDate.format("YYYY-MM-DD") == this.ranges[i][0].format("YYYY-MM-DD") && this.endDate.format("YYYY-MM-DD") == this.ranges[i][1].format("YYYY-MM-DD")) {
                    t = !1, this.chosenLabel = this.container.find(".ranges li:eq(" + e + ")").addClass("active").attr("data-range-key");
                    break
                }
                e++
            }
            t && (this.showCustomRangeLabel ? this.chosenLabel = this.container.find(".ranges li:last").addClass("active").attr("data-range-key") : this.chosenLabel = null, this.showCalendars())
        }, clickApply: function () {
            this.hide(), this.element.trigger("apply.daterangepicker", this)
        }, clickCancel: function () {
            this.startDate = this.oldStartDate, this.endDate = this.oldEndDate, this.hide(), this.element.trigger("cancel.daterangepicker", this)
        }, monthOrYearChanged: function (t) {
            var e = j(t.target).closest(".drp-calendar").hasClass("left"), i = e ? "left" : "right",
                s = this.container.find(".drp-calendar." + i), a = parseInt(s.find(".monthselect").val(), 10),
                n = s.find(".yearselect").val();
            e || (n < this.startDate.year() || n == this.startDate.year() && a < this.startDate.month()) && (a = this.startDate.month(), n = this.startDate.year()), this.minDate && (n < this.minDate.year() || n == this.minDate.year() && a < this.minDate.month()) && (a = this.minDate.month(), n = this.minDate.year()), this.maxDate && (n > this.maxDate.year() || n == this.maxDate.year() && a > this.maxDate.month()) && (a = this.maxDate.month(), n = this.maxDate.year()), e ? (this.leftCalendar.month.month(a).year(n), this.linkedCalendars && (this.rightCalendar.month = this.leftCalendar.month.clone().add(1, "month"))) : (this.rightCalendar.month.month(a).year(n), this.linkedCalendars && (this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, "month"))), this.updateCalendars()
        }, timeChanged: function (t) {
            var e = j(t.target).closest(".drp-calendar"), i = e.hasClass("left"),
                s = parseInt(e.find(".hourselect").val(), 10), a = parseInt(e.find(".minuteselect").val(), 10);
            isNaN(a) && (a = parseInt(e.find(".minuteselect option:last").val(), 10));
            var n, o, r, l = this.timePickerSeconds ? parseInt(e.find(".secondselect").val(), 10) : 0;
            this.timePicker24Hour || ("PM" === (n = e.find(".ampmselect").val()) && s < 12 && (s += 12), "AM" === n && 12 === s && (s = 0)), i ? ((o = this.startDate.clone()).hour(s), o.minute(a), o.second(l), this.setStartDate(o), !1 === this.dateRange ? this.endDate = this.startDate.clone() : this.endDate && this.endDate.format("YYYY-MM-DD") == o.format("YYYY-MM-DD") && this.endDate.isBefore(o) && this.setEndDate(o.clone())) : this.endDate && ((r = this.endDate.clone()).hour(s), r.minute(a), r.second(l), this.setEndDate(r)), this.updateCalendars(), this.updateFormInputs(), this.renderTimePicker("left"), this.renderTimePicker("right")
        }, elementChanged: function () {
            var t, e, i;
            this.element.is("input") && this.element.val().length && (i = e = null, 2 === (t = this.element.val().split(this.locale.separator)).length && (e = E(t[0], this.locale.format), i = E(t[1], this.locale.format)), !1 !== this.dateRange && null !== e && null !== i || (i = e = E(this.element.val(), this.locale.format)), e.isValid() && i.isValid() && (this.setStartDate(e), this.setEndDate(i), this.updateView()))
        }, keydown: function (t) {
            9 !== t.keyCode && 13 !== t.keyCode || this.hide(), 27 === t.keyCode && (t.preventDefault(), t.stopPropagation(), this.hide())
        }, updateElement: function () {
            var t;
            this.element.is("input") && this.autoUpdateInput && (t = this.startDate.format(this.locale.format), this.dateRange && (t += this.locale.separator + this.endDate.format(this.locale.format)), t !== this.element.val() && this.element.val(t).trigger("change"))
        }, remove: function () {
            this.container.remove(), this.element.off(".daterangepicker"), this.element.removeData()
        }
    }, j.fn.daterangepicker = function (t, e) {
        var i = j.extend(!0, {}, j.fn.daterangepicker.defaultOptions, t);
        return this.each(function () {
            var t = j(this);
            t.data("daterangepicker") && t.data("daterangepicker").remove(), t.data("daterangepicker", new s(t, i, e))
        }), this
    }, s
}), $.mask.definitions.h = "[0|1|2|3|4|5|6|9]";
var ymapStatus = 0, ymapStack = [], ymapQueue = {}, ymapObj = {};

function setYaMap() {
    if (0 == ymapStatus) ymapStatus = 1, $.ajax({
        url: "https://api-maps.yandex.ru/2.1/?apikey=0d1f8976-fd8a-4319-9089-5f80c9e9c0c1&lang=ru_RU&package.controls&onload=setYaMap",
        dataType: "script"
    }).done(function (t, e) {
        "success" == e && (ymapStatus = 2)
    }); else {
        if (1 == ymapStatus) return !1;
        if (0 < ymapStack.length) for (var t = 0; t < ymapStack.length; t++) {
            var e = ymapStack.shift();
            if (void 0 === e.id) throw new TypeError("Отсутствует ID");
            if (void 0 === e.mapSettings.zoom && (e.mapSettings.zoom = 14), void 0 === ymapObj[e.id] ? (ymapObj[e.id] = new ymaps.Map(e.id, e.mapSettings, {suppressMapOpenBlock: !0}), void 0 !== e.disable && ymapObj[e.id].behaviors.disable(e.disable)) : (ymapObj[e.id].geoObjects.removeAll(), ymapObj[e.id].setCenter(e.mapSettings.center, e.mapSettings.zoom)), void 0 !== e.LoadingObjectManager) {
                if (void 0 === e.LoadingObjectManager.url) throw new TypeError("Отсутствует url для loadingObjectManager");
                void 0 === e.LoadingObjectManager.settings && (e.LoadingObjectManager.settings = {});
                var i = new ymaps.LoadingObjectManager(e.LoadingObjectManager.url, e.LoadingObjectManager.settings);
                void 0 !== e.LoadingObjectManager.options && i.clusters.options.set(e.LoadingObjectManager.options), ymapObj[e.id].geoObjects.add(i)
            }
            if (void 0 !== e.baloon) for (var s in e.baloon) {
                var a = e.baloon[s],
                    n = new ymaps.Placemark(a.coords, void 0 !== a.settings ? a.settings : {}, void 0 !== a.options ? a.options : {preset: "islands#redIcon"});
                ymapObj[e.id].geoObjects.add(n)
            }
            delete ymapQueue[e.id]
        }
    }
}

$(document).ready(function () {
    "use strict";
    var h = $(window).width(), y = {
        init: function () {
            var s;
            this.submitForm.init(), moment.locale("ru", {
                months: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split("_"),
                monthsShort: "Янв_Фев_Мар_Апр_Май_Июн_Июл_Авг_Сен_Окт_Ноя_Дек".split("_"),
                monthsParseExact: !0,
                weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_")
            }), this.initSlider.init(), this.handlerExpand.init(), this.showMoreButton.init(), this.handler.init(), this.lightBox.init(), this.choiceRating.init(), this.datePicker.init(), this.dropdown_list.init(), this.numberRangePicker.init(), this.sliderRange.init(), this.calculateSwitch.init(), this.customScroll.init(), this.menuScroll.init(), this.header.init(), this.clickOutsideBlock.init(), this.inputDropDownForm.init(), this.childAge.init(), this.viewSwitch.init(), this.peopleSwitch.init(), this.titleDropdown.init(), this.tabsCity.init(), this.modal.init(), this.stages.init(), this.searchTour.init(), this.aside_interview.init(), this.liveStream.init(), this.share.init(), this.searchCompanion.init(), this.learningPage.init(), this.closeAlert.init(), this.lazyLoad.init(), $("#searchhHomeMoreGTM").on("click", function (t) {
                set_cookie("isAll", 1);
                var e, i = $("#searchformhome").serializeArray(), s = $("#child_list a.active").html();
                0 < s && (e = s + ":", $(".child_age").each(function () {
                    e = e + $(this).find("input.child_age__input").val() + ","
                }), i.forEach(function (t) {
                    "search_param[child]" === t.name && (t.value = e)
                })), window.location.href = "/search/?" + $.param(i)
            }), 0 < $("section.contacts .contacts__map_item#yandex-map").length && (s = [], $("section.contacts .contacts__contact .contacts__contact_item").each(function (t, e) {
                var i = $(e).data();
                if ("" == i.coords.trim()) return !0;
                i.coords = i.coords.split(","), s.push({
                    coords: i.coords,
                    settings: {
                        balloonContentHeader: i.header,
                        balloonContentBody: i.body,
                        balloonContentFooter: i.footer
                    }
                })
            }), ymapStack.push({
                id: "yandex-map",
                mapSettings: {center: s[0].coords, zoom: 12},
                baloon: s
            }), setYaMap()), h <= 767 && $(".breadcrumb").scrollLeft($(".breadcrumb").width())
        }, learningPage: {
            init: function () {
                $(".programs-course__mobile .h-title .dropdown__list-item .dropdown__list-link").on("click", y.learningPage.changeProgram), $(".jsChangeProgramTabs .slider_tabs .jsTeachTab").on("click", y.learningPage.changeProgram)
            }, changeProgram: function (t) {
                t.preventDefault();
                var a = $(t.target), e = a.data("id-program"), i = a.data("id-course");
                $.ajax({
                    url: "/ajax/getProgramByCourse/",
                    type: "POST",
                    data: {programId: e, courseId: i},
                    success: function (t) {
                        var e, i, s;
                        "false" != t && (t = JSON.parse(t), a.hasClass("jsTeachTab") ? $(".jsChangeProgramTabs").find(".description_program").html(t.program.tprogram_description) : ((e = a.closest(".programs-course__mobile")).find(".teachRequest").attr("data-id-program", t.program.tprogram_id), e.find(".teachRequest").attr("data-program-title", t.program.tprogram_title), e.find(".price_not_discount").text(new Intl.NumberFormat("ru").format(Math.trunc(t.program.tprogram_price)) + " руб"), e.find(".price_with_discount").text(new Intl.NumberFormat("ru").format(Math.trunc(t.program.tprogram_price_with_discount)) + " Р"), a.closest(".dropdown.dropdown--sp").find(".dropdown__title span").text(a.text()), (i = e.find(".button")).children().removeClass("btnWhiteGradient"), i.children().removeClass("btnPinkGradient"), s = i.data("id-main"), Number(t.program.tprogram_id) === s ? i.children().addClass("btnPinkGradient") : i.children().addClass("btnWhiteGradient"), $(".JsChangeProgram").empty(), $(".JsChangeProgram").html(t.html)))
                    }
                })
            }
        }, searchCompanion: {
            arrayCity: [], arrayCountry: [], init: function () {
                $("#select_order_companion > a").on("click", function (t) {
                    t.preventDefault();
                    document.getElementById("pagination");
                    var e = document.querySelectorAll('input[name="city"]:checked'), i = [];
                    e.forEach(function (t) {
                        i.push(t.value)
                    });
                    var s = document.querySelectorAll('input[name="country"]:checked'), a = [];
                    s.forEach(function (t) {
                        a.push(t.value)
                    });
                    var n = {
                            companion_user_city_id: i,
                            companion_country_id: a,
                            companion_user_gender: $("#select_order_companion").data("gender")
                        }, o = $(this).data("value"), r = window.location.href,
                        l = $(".input_item.list-checkbox.city").attr("data-city-checked"),
                        c = $(".input_item.list-checkbox.country").attr("data-country-checked");
                    history.replaceState(null, null, addGetParamInUrl(r, "mode", o));
                    var h = $("#select_order_companion").data("num-page");
                    $.ajax({
                        url: "/ajax/searchcompanion/",
                        type: "POST",
                        data: {
                            fields: n,
                            limit: $("#select_order_companion").data("limit-count"),
                            photo: $("#select_order_companion").data("photo"),
                            new_url: new_url,
                            city_title_checked: l,
                            country_title_checked: c,
                            mode: o
                        },
                        success: function (t) {
                            "false" != t && (t = JSON.parse(t), h <= 0 ? ($("#container_search_companion").html(t.html), $("#pagination").html(t.pagination)) : (r = -1 !== r.indexOf("&page") ? r.substring(0, r.indexOf("&page")) : r.substring(0, r.indexOf("?page")), window.location.href = addGetParamInUrl(r, "mode", o)))
                        }
                    })
                }), $("button.search_travelers__button").on("click", function (t) {
                    t.preventDefault();
                    var e = $("#form_search_companion"), i = e.serializeArray(),
                        s = e.find(".list-checkbox.city").find("#checkbox_element").find("input:checkbox:checked"),
                        a = e.find(".list-checkbox.country").find("#checkbox_element").find("input:checkbox:checked"),
                        n = "", o = "", r = "", l = "";
                    0 !== s.length && (n = s[0].value, r = s[0].getAttribute("data-alias")), 0 !== a.length && (o = a[0].value, l = a[0].getAttribute("data-alias"));
                    var c = [];
                    n ? i.forEach(function (t) {
                        ("city" === t.name && t.value !== n || "country" === t.name && t.value !== o || "country" !== t.name && "city" !== t.name) && c.push(t)
                    }) : c = i;
                    var h = "", d = 0, u = 0, h = ("" == n ? (h = "/companion/?", c.forEach(function (t) {
                        "" !== t.value && ("country" !== t.name ? h += t.name + "=" + t.value + "&" : (h += "country[" + d + "]=" + t.value + "&", d++))
                    })) : "" == o ? (h = "/" + r + "/companion/?", c.forEach(function (t) {
                        "" !== t.value && ("city" !== t.name ? h += t.name + "=" + t.value + "&" : (h += "city[" + d + "]=" + t.value + "&", d++))
                    })) : (h = "/" + r + "/" + l + "/companion/?", c.forEach(function (t) {
                        "" !== t.value && ("city" !== t.name && "country" !== t.name ? h += t.name + "=" + t.value + "&" : "city" === t.name ? (h += "city[" + d + "]=" + t.value + "&", d++) : (h += "country[" + u + "]=" + t.value + "&", u++))
                    })), h.substring(0, h.length - 1));
                    window.location.href = h
                }), $("body").on("click.checkboxClick", ".list-checkbox", y.searchCompanion.checkboxClick), $("body").on("click.inputClick", ".input-comp", y.searchCompanion.inputClick), $("body").on("keyup.inputKeyup", ".input-comp", y.searchCompanion.inputKeyup), $("body").on("click.tabClearClick", ".js-search-tabs-item_clear", y.searchCompanion.tabClearClick), $("body").on("click.tabNameClick", ".js-search-tabs-item_name", y.searchCompanion.tabNameClick), $("body").on("click.tabSelectionClick", ".js-search-tabs-item_selection", y.searchCompanion.tabSelectionClick), $("body").on("change.checkboxChangeCountry", ".country-m", y.searchCompanion.checkboxChangeCountry)
            }, checkboxChangeCountry: function (t) {
                var e = $(t.target), i = [];
                e.closest("#checkbox_element").find("input:checkbox:checked").each(function () {
                    i.push($(this).val())
                }), 0 < i.length ? $(".list-checkbox.resort.m").removeClass("disable") : $(".list-checkbox.resort.m").addClass("disable"), $(".resort-m").empty(), $(".list-checkbox.resort.m").find(".js-search-p").text("Не выбрано"), $(".list-checkbox.resort.m").find(".js-search-tabs").addClass("hidden"), $.ajax({
                    url: "/ajax/getResortWithCountry/",
                    type: "POST",
                    data: {countries: i},
                    success: function (t) {
                        "false" != t && (t = JSON.parse(t), $(".resort-m").empty(), i = [], t.forEach(function (t) {
                            $(".resort-m").append($("<label>", {class: "control control-checkbox"}).append(t.resort_title + '<input class="region_checkbox" type="checkbox" name="resort[]" value="' + t.resort_id + '" data-alias="' + t.resort_alias + '" data-title="' + t.resort_title + '">').append('<span class="control_indicator"></span>'))
                        }))
                    }
                })
            }, tabSelectionClick: function (t) {
                var e = $(t.target), i = e.closest(".input_item.dropdown"), s = e.closest(".list-checkbox"),
                    a = s.find(".input-comp"), n = s.find("#checkbox_element");
                i.toggleClass("open").children(".form_dropdown_comp").toggleClass("open"), s.find(".js-search-tabs-item_selection").addClass("active"), s.find(".js-search-tabs-item_name").removeClass("active"), s.find(".js-search-tabs-item_clear").removeClass("active"), a.val(""), n.find("input:checkbox").each(function () {
                    $(this).closest(".control-checkbox").removeClass("disable")
                }), n.find("input:checkbox:not(:checked)").each(function () {
                    $(this).closest(".control-checkbox").addClass("disable")
                })
            }, tabNameClick: function (t) {
                var e = $(t.target), i = e.closest(".input_item.dropdown"), s = e.closest(".list-checkbox"),
                    a = s.find(".input-comp"), n = s.find("#checkbox_element");
                i.toggleClass("open").children(".form_dropdown_comp").toggleClass("open"), s.find(".js-search-tabs-item_name").addClass("active"), s.find(".js-search-tabs-item_selection").removeClass("active"), s.find(".js-search-tabs-item_clear").removeClass("active");
                var o = a.val().length;
                n.find("input:checkbox").each(function () {
                    $(this).attr("data-title").substring(0, o).toLowerCase() == e.val().toLowerCase() && $(this).closest(".control-checkbox").removeClass("disable")
                })
            }, tabClearClick: function (t) {
                var e = $(t.target), i = e.closest(".input_item.dropdown"), s = e.closest(".list-checkbox"),
                    a = s.find("#checkbox_element");
                i.toggleClass("open").children(".form_dropdown_comp").toggleClass("open"), s.find(".js-search-tabs-item_clear").addClass("active"), s.find(".js-search-tabs-item_selection").removeClass("active"), s.find(".js-search-tabs-item_name").removeClass("active"), a.find("input:checkbox").each(function () {
                    $(this).closest(".control-checkbox").removeClass("disable"), $(this).prop("checked", !1), $(this).removeAttr("disabled"), $(this).closest(".control-checkbox").css("color", "#989898")
                }), s.hasClass("m") ? (s.find(".js-search-p").text("Не выбрано"), a.hasClass("country-m") && ($(".list-checkbox.resort.m").addClass("disable"), $(".list-checkbox.resort.m").find(".js-search-tabs").addClass("hidden"), $(".list-checkbox.resort.m").find(".js-search-p").text("Не выбрано"), $(".resort-m").empty(), y.searchCompanion.arrayCountry = []), a.hasClass("city-m") && (y.searchCompanion.arrayCity = [])) : s.find(".js-search-p").text("Любой"), s.find(".js-search-tabs").addClass("hidden"), s.find(".js-search-tabs-item_name").addClass("active"), s.find(".js-search-tabs-item_selection").removeClass("active"), s.find(".js-search-tabs-item_clear").removeClass("active"), s.find(".js-search-input").val("")
            }, inputKeyup: function (t) {
                var e = $(t.target), i = e.closest(".list-checkbox").find("#checkbox_element"), s = e.val().length;
                i.find("input:checkbox").each(function () {
                    $(this).attr("data-title").substring(0, s).toLowerCase() == e.val().toLowerCase() ? $(this).closest(".control-checkbox").removeClass("disable") : $(this).closest(".control-checkbox").addClass("disable")
                })
            }, inputClick: function (t) {
                var e = $(t.target), i = e.closest(".input_item.dropdown"), s = e.closest(".list-checkbox"),
                    a = s.find("#checkbox_element");
                i.toggleClass("open").children(".form_dropdown_comp").toggleClass("open"), s.find(".js-search-tabs-item_selection").hasClass("active") && (s.find(".js-search-tabs-item_name").addClass("active"), s.find(".js-search-tabs-item_selection").removeClass("active"), s.find(".js-search-tabs-item_clear").removeClass("active"), a.find("input:checkbox").each(function () {
                    $(this).closest(".control-checkbox").removeClass("disable")
                }))
            }, checkboxClick: function (t) {
                var e = $(t.target);
                if (e.hasClass("region_checkbox")) {
                    var i, s, a = e.closest(".list-checkbox"), n = a.find("#checkbox_element"), o = "Любой",
                        r = n.find("input:checkbox:checked").length;
                    if (a.hasClass("city") ? (s = "city", i = [" город", " города", " городов"]) : a.hasClass("country") ? (s = "country", o = "Любое", i = [" направление", " направления", " направлений"]) : a.hasClass("resort") && (s = "resort", i = [" курорт", " курорта", " курортов"]), a.hasClass("m")) {
                        o = "Не выбрано";
                        var l = y.searchCompanion.arrayCity, c = y.searchCompanion.arrayCountry;
                        if (e.is(":checked")) n.hasClass("city-m") ? l.push(e.val()) : n.hasClass("country-m") && c.push(e.val()); else if (n.hasClass("city-m")) for (var h = 0; h < l.length; h++) l[h] == e.val() && l.splice(h, 1); else if (n.hasClass("country-m")) for (h = 0; h < c.length; h++) c[h] == e.val() && c.splice(h, 1);
                        y.searchCompanion.arrayCity = l, y.searchCompanion.arrayCountry = c
                    }
                    0 < r ? (a.find(".js-search-tabs").removeClass("hidden"), a.find(".js-search-tabs-item_selection").children("span").text(r), o = 1 == r ? n.find("input:checkbox:checked").attr("data-title") : (a.hasClass("m") && (3 <= r && "city" == s || 5 <= r && "country" == s ? n.find("input:checkbox:not(:checked)").each(function () {
                        $(this).attr("disabled", "disabled"), $(this).closest(".control-checkbox").css("color", "#dddada")
                    }) : n.find("input:checkbox:not(:checked)").each(function () {
                        $(this).removeAttr("disabled"), $(this).closest(".control-checkbox").css("color", "#989898")
                    })), r + declensionByNumber(r, i[0], i[1], i[2]))) : (a.find(".js-search-tabs").addClass("hidden"), a.find(".js-search-tabs-item_name").addClass("active"), a.find(".js-search-tabs-item_selection").removeClass("active"), a.find(".js-search-tabs-item_clear").removeClass("active"), n.find("input:checkbox").each(function () {
                        $(this).closest(".control-checkbox").removeClass("disable")
                    })), a.find(".js-search-tabs-item_selection").hasClass("active") && (e.is(":checked") || e.closest(".control-checkbox").addClass("disable")), a.find(".js-search-p").text(o)
                }
            }
        }, handler: {
            init: function () {
                var s;
                $(".phone-mask").mask("+7 (h99) 999-99-99"), $(".phone-mask-form").mask("+7 (h99) 999-99-99", {autoclear: !1}), $(".required-num").on("input", function () {
                    this.value = this.value.replace(/[^0-9]/g, "")
                }), $("#countries li").on("click", function (t) {
                    t.preventDefault(), $(".countries_block").fadeToggle().toggleClass("open");
                    var e, i = $(this);
                    i.hasClass("active") || ($("#countries li").removeClass("active"), i.addClass("active"), $("#countries_check").text(i.children("span").text()), (e = {
                        request: "getPublication",
                        filter: i.data("value"),
                        type: $("#countries").data("type")
                    })[$("#csrf").data("name")] = $("#csrf").data("value"), $.ajax({
                        url: "/ajax/callback/",
                        type: "POST",
                        data: e
                    }).done(function (t) {
                        200 == (t = JSON.parse(t)).status.code && ($(".articles").html(t.html.articles), $("#pagination").html(t.html.pagination))
                    }).fail(function () {
                    }))
                }), $("body").on("click", ".js-tour-info", function (t) {
                    t.preventDefault(), t.stopPropagation();
                    var e, i = $(this).data(),
                        s = (e = null != i.parent ? $(this).closest(i.parent) : $(this).closest(".js-tour-info-parent")).find(".js-tour-info-dropdown"),
                        a = t.clientY, n = s.outerHeight(), o = $(window).height();
                    "top" != i.position && o < n + a || "top" == i.position && 0 < a - n ? s.addClass("top") : s.removeClass("top"), e.siblings(".js-tour-info-parent").find(".js-tour-info-dropdown").hide(), s.toggle()
                }), $(".js-tour-info-close").on("click", function () {
                    $(this).closest(".js-tour-info-dropdown").hide()
                }), $(".js-customSelect-search").each(function (t, e) {
                    $(e).chosen({
                        allow_single_deselect: !1,
                        search_contains: !0,
                        width: "100%",
                        no_results_text: "Не найден"
                    })
                }), $(".js-customSelect-select").each(function (t, e) {
                    $(e).chosen({disable_search: !0, width: "100%", allow_single_deselect: !0})
                }), $(".intro-contents__row .dropdown.dropdown--sp > .dropdown__list .dropdown__list-item > .dropdown__list-link").on("click", function (t) {
                    t.preventDefault();
                    var n = $(this), o = n.data(), r = $("#mainCardContainer"), l = $("#mainCardContainer__loader");
                    o.get_subscription_tours = !0, l.show(), r.hide();
                    var e = "", c = $(".menu-tabs__row");
                    c && (e = c.attr("data-current_tab"), o.current_tab = e), $.ajax({
                        url: "/ajax/" + ("" == e ? o.method : e) + "/",
                        headers: {csrf_token: $("#csrf").data("value")},
                        type: "POST",
                        data: o
                    }).done(function (t) {
                        if (1 != (t = JSON.parse(t)).status) return l.hide(), r.show(), void y.returnAlert({
                            icon: "close",
                            title: "Что-то пошло не так",
                            subtitle: "Попробуйте повторить позже, предварительно обновив страницу"
                        });
                        var e = null, i = null;
                        if (c && "" === o.tab_id && (c.children("a").detach(), 0 < t.tabs.length)) {
                            var s = $(c.children("template").clone().get(0).content.firstElementChild);
                            for (var a in s.attr("data-city_id", o.city_id), c.append(s.clone()), t.tabs) i = "isHoliday" in t.tabs[a] ? "getToursForTab/-1" : "getToursForTab/" + t.tabs[a].id, c.append(s.clone().attr({
                                "data-method": i,
                                "data-title": t.tabs[a].title_for_head,
                                "data-tab_id": t.tabs[a].id
                            }).html(t.tabs[a].title));
                            e = c.children('a[data-method="' + t.currentTab + '"]').addClass("active")
                        }
                        $("#titleUnderTabs") && "" === o.tab_id && $("#titleUnderTabs").text(correctedUnderTabs(null === e ? o : e.data())), r.html(t.html), $(".phone-mask").mask("+7 (h99) 999-99-99"), n.closest(".dropdown.dropdown--sp").find(".jsTitle_city").text(n.text()), l.hide(), r.show()
                    }).fail(function () {
                        l.hide(), r.show(), y.returnAlert({
                            icon: "close",
                            title: "Что-то пошло не так",
                            subtitle: "Попробуйте повторить позже, предварительно обновив страницу"
                        })
                    })
                }), $(".menu-tabs__row").on("click", ".menu-tabs__tour-item", function (t) {
                    var e, i, s, a, n;
                    t.preventDefault(), $(this).hasClass("active") || (i = (e = $(this)).data(), s = $("#mainCardContainer"), a = $("#mainCardContainer__loader"), (n = $("#titleUnderTabs")) && (n.text(correctedUnderTabs(i)), $(".menu-tabs").attr("data-current_tab", i.method)), i.city_id = e.attr("data-city_id"), $(".menu-tabs__tour-item").removeClass("active"), e.addClass("active"), 8 === i.tab_id ? (console.log(e.closest(".intro-contents").find(".dropdown.dropdown--sp")), e.closest(".intro-contents").find(".dropdown.dropdown--sp").css("display", "none")) : e.closest(".intro-contents").find(".dropdown.dropdown--sp").css("display", "inline-block"), i.get_subscription_tours = !0, a.show(), s.hide(), $.ajax({
                        url: "/ajax/" + i.method + "/",
                        headers: {csrf_token: $("#csrf").data("value")},
                        type: "POST",
                        data: i
                    }).done(function (t) {
                        1 == (t = JSON.parse(t)).status ? (e.closest(".dropdown.dropdown--sp").find(".jsTitle_city").text(e.text()), s.html(t.html), a.hide(), s.show()) : y.returnAlert({
                            icon: "close",
                            title: "Что-то пошло не так",
                            subtitle: "Попробуйте повторить позже, предварительно обновив страницу"
                        })
                    }).fail(function () {
                        a.hide(), s.show(), y.returnAlert({
                            icon: "close",
                            title: "Что-то пошло не так",
                            subtitle: "Попробуйте повторить позже, предварительно обновив страницу"
                        })
                    }))
                }), $(".office_open-card").on("click", function (t) {
                    t.preventDefault();
                    var e, i = $(this).data();
                    s != i.office_id && (e = i.coords.split(","), ymapStack.push({
                        id: "yandex-map__modal",
                        mapSettings: {center: e, zoom: 12},
                        baloon: [{coords: e}]
                    }), setYaMap(), s = i.office_id), $(".yMapForOffice").arcticmodal()
                }), $(".search_travelers").on("click", ".companion_phone:not(.open)", function (t) {
                    t.preventDefault();
                    var e = $(this).data("id"), i = this;
                    $.ajax({
                        url: "/ajax/getCompanionPhone/",
                        method: "post",
                        dataType: "json",
                        data: {id: e},
                        success: function (t) {
                            $(i).addClass("open").text(t.data.phone).attr("href", "tel:" + t.data.phone.replaceAll(/[^\d]/g, ""))
                        }
                    })
                })
            }
        }, lightBox: {
            init: function () {
                lightbox.option({albumLabel: "Изображение %1 из %2"})
            }
        }, choiceRating: {
            init: function () {
                $(".choice_rating__star").on("click", function () {
                    $(this).addClass("active").siblings().removeClass("active");
                    var t, e = $(this).closest("form");
                    e && e[0] && ((t = e[0].querySelector('input[name="extended[hotelstars]"]')) && (t.value = $(this).data("rate")))
                })
            }
        }, datePicker: {
            test: null, init: function () {
                $(".datepicker-hidden").each(function () {
                    y.datePicker.initDataPicker($(this))
                })
            }, initDataPicker: function (i) {
                var t, e = i.data(), s = {
                    autoApply: !0,
                    minDate: moment().format("DD.MM.YYYY"),
                    opens: "center",
                    locale: {
                        format: "DD.MM.YYYY",
                        separator: " - ",
                        applyLabel: "Выбрать",
                        cancelLabel: "Отменить",
                        daysOfWeek: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
                        monthNames: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
                        firstDay: 1
                    }
                };
                void 0 !== e.max_span && (s.maxSpan = {}, s.maxSpan.days = e.max_span), void 0 !== e.date_range && (s.dateRange = e.date_range), h < 768 ? s.singleDatePicker = !0 : void 0 !== e.single_datepicker && (s.singleDatePicker = e.single_datepicker), "" != i.val().trim() && (t = (t = i.val()).split("-"), s.startDate = t[0].trim(), s.endDate = t[1].trim()), i.daterangepicker(s, function (t, e) {
                    0 == s.dateRange ? i.siblings(".datepicker-range").val(t.format("DD MMM")) : i.siblings(".datepicker-range").val(t.format("DD MMM") + " - " + e.format("DD MMM"))
                })
            }
        }, dropdown_list: {
            init: function () {
                $(".dropdown_list__header").on("click", function () {
                    $(this).closest(".dropdown_list").toggleClass("open")
                }), $(".dropdown_list__search input").on("input", y.dropdown_list.search), $(".dropdown_list__item > a").on("click", y.dropdown_list.choise)
            }, search: function () {
                var a = $(this).val().toLowerCase();
                "" == a.trim() ? $(this).closest("ul").find(".dropdown_list__item").show() : $(this).closest("ul").children(".dropdown_list__item").each(function () {
                    var i, t, e, s;
                    $(this).hasClass("dropdown_list__item-subgroup") ? (i = 0, $(this).find(".dropdown_list__item a").each(function () {
                        var t = $(this).text().toLowerCase(), e = $(this).data("alternative");
                        -1 !== t.indexOf(a) || void 0 !== e && -1 !== e.toLowerCase().indexOf(a) ? ($(this).parent().show(), i++) : $(this).parent().hide()
                    }), 0 < i ? $(this).show() : $(this).hide()) : (e = (t = $(this).find("a")).text().toLowerCase(), s = t.data("alternative"), -1 !== e.indexOf(a) || void 0 !== s && -1 !== s.toLowerCase().indexOf(a) ? $(this).show() : $(this).hide())
                })
            }, choise: function (t) {
                t.preventDefault();
                var e = $(this), i = e.closest(".dropdown_list"), s = i.data();
                void 0 !== s.replace && $(s.replace).text(e.text()), void 0 !== s.val && void 0 !== e.data("val") && $(s.val).val(e.data("val")), i.removeClass("open").find(".dropdown_list__item.active").removeClass("active"), $(this).parent().addClass("active")
            }
        }, numberRangePicker: {
            init: function () {
                $("body").on("click.toggleNumberRange", ".number_range_picker input", function (t) {
                    t.preventDefault(), $(this).closest(".input_item").toggleClass("open")
                }), $("body").on("click.rangeInstallation", ".number_range_picker__item", y.numberRangePicker.rangeInstallation)
            }, rangeInstallation: function (t) {
                var o = $(t.target), e = o.closest(".number_range_picker__body"), i = e.closest(".number_range_picker"),
                    r = e.find(".number_range_picker__item"), s = r.filter(".start_range"), a = r.filter(".end_range");
                if (o.hasClass("number_range_picker__item") || (o = o.closest(".number_range_picker__item")), 0 === s.length) r.removeClass("range_hover"), o.addClass("start_range"), r.on("mouseover.range_hover", function (t) {
                    r.removeClass("range_hover");
                    var e = $(t.target);
                    e.hasClass("number_range_picker__item") || (e = e.closest(".number_range_picker__item"));
                    var i = o.index(), s = e.index();
                    if (s < i) {
                        14 < i - s && (s += i - s - 14);
                        for (var a = i; s <= a; a--) r.eq(a).addClass("range_hover")
                    } else if (i < s) {
                        14 < s - i && (s -= s - i - 14);
                        for (var n = i + 1; n <= s; n++) r.eq(n).addClass("range_hover")
                    }
                }); else if (0 === a.length) {
                    var n = s.index(), l = o.index(), c = 0, h = 0;
                    if (l < n) {
                        14 < n - l && (l += n - l - 14);
                        for (var d = n; l < d; d--) r.eq(d).addClass("range_hover");
                        c = r.eq(l).data("val"), h = r.eq(n).data("val")
                    } else if (n < l) {
                        14 < l - n && (l -= l - n - 14);
                        for (var u = n + 1; u < l; u++) r.eq(u).addClass("range_hover");
                        c = r.eq(n).data("val"), h = r.eq(l).data("val")
                    } else c = h = r.eq(n).data("val");
                    e.closest(".number_range_picker").find(".number_range_picker__input").val(c + " - " + h), r.eq(l).addClass("end_range"), i.removeClass("open");
                    var p = i.data();
                    i.find(p.target_from).val(c), i.find(p.target_to).val(h), r.off("mouseover.range_hover")
                } else r.removeClass("start_range end_range range_hover"), y.numberRangePicker.rangeInstallation(t)
            }
        }, sliderRange: {
            init: function () {
                var i, s, t, e, a, n, o, r, l, c, h, d, u, p, f, m, _, g;
                !function (t, a, n) {
                    $(t).slider({
                        range: !0,
                        min: $(t).data("min"),
                        max: $(t).data("max"),
                        values: [$(t).data("minvalue"), $(t).data("maxvalue")],
                        slide: function (t, e) {
                            var i = e.values[0].toLocaleString("ru"), s = e.values[1].toLocaleString("ru");
                            $(a).val(i), $(n).val(s), $(a).removeClass("unvalid"), $(n).removeClass("unvalid")
                        }
                    });
                    var e = $(t).slider("values", 0).toLocaleString("ru"),
                        i = $(t).slider("values", 1).toLocaleString("ru");
                    $(a).val(e), $(n).val(i), $(a).removeClass("unvalid"), $(n).removeClass("unvalid")
                }(".range_slider__slide", ".pricefrom", ".priceto"), 0 !== $(".credit_page__slider").length && (i = function () {
                    var t = ((t = (l - c) / d[u]) + t * (h / 100)).toFixed(2);
                    $("#resInstallment").html(parseFloat(t).toLocaleString("ru") + " <span>р.</span>")
                }, s = function () {
                    var t = m / 12 / 100,
                        e = (t * Math.pow(1 + t, _[g]) / (Math.pow(1 + t, _[g]) - 1) * (p - f)).toFixed(2);
                    $("#resCredit").html(parseFloat(e).toLocaleString("ru") + " <span>р.</span>")
                }, t = $("#installment_cost-slider"), e = $("#installment_first-slider"), a = $("#installment_time-slider"), n = $("#credit_cost-slider"), o = $("#credit_first-slider"), r = $("#credit_time-slider"), l = 0, t.slider({
                    value: t.data("value"),
                    min: t.data("min"),
                    max: t.data("max"),
                    step: t.data("step"),
                    slide: function (t, e) {
                        l = e.value, $("#installment_cost-amount").html(e.value.toLocaleString("ru") + " р."), i()
                    }
                }), $("#installment_cost-amount").html(t.slider("value").toLocaleString("ru") + " р."), c = 0, e.slider({
                    value: e.data("value"),
                    min: e.data("min"),
                    max: e.data("max"),
                    step: e.data("step"),
                    slide: function (t, e) {
                        c = e.value, $("#installment_first-amount").html(e.value.toLocaleString("ru") + " р."), i()
                    }
                }), $("#installment_first-amount").html(e.slider("value").toLocaleString("ru") + " р."), h = a.data("rate"), d = a.attr("data-array").split(","), u = 0, a.slider({
                    value: a.data("value"),
                    min: a.data("min"),
                    max: d.length - 1,
                    slide: function (t, e) {
                        u = e.value, $("#installment_time-amount").html(d[e.value] + " мес."), i()
                    }
                }), $("#installment_time-amount").html(d[a.slider("value")] + " мес."), p = 0, n.slider({
                    value: n.data("value"),
                    min: n.data("min"),
                    max: n.data("max"),
                    step: n.data("step"),
                    slide: function (t, e) {
                        p = e.value, $("#credit_cost-amount").html(e.value.toLocaleString("ru") + " р."), s()
                    }
                }), $("#credit_cost-amount").html(n.slider("value").toLocaleString("ru") + " р."), f = 0, o.slider({
                    value: o.data("value"),
                    min: o.data("min"),
                    max: o.data("max"),
                    step: o.data("step"),
                    slide: function (t, e) {
                        f = e.value, $("#credit_first-amount").html(e.value.toLocaleString("ru") + " р."), s()
                    }
                }), $("#credit_first-amount").html(o.slider("value").toLocaleString("ru") + " р."), m = r.data("rate"), _ = r.attr("data-array").split(","), g = 0, r.slider({
                    value: r.data("value"),
                    min: r.data("min"),
                    max: _.length - 1,
                    slide: function (t, e) {
                        g = e.value, $("#credit_time-amount").html(_[e.value] + " мес."), s()
                    }
                }), $("#credit_time-amount").html(_[r.slider("value")] + " мес."))
            }
        }, calculateSwitch: {
            init: function () {
                $(".credit_page__calculate_switch").on("click", "span:not(.active)", function () {
                    var t = $(this).index();
                    $(this).addClass("active").siblings().removeClass("active"), 0 === t ? $(".calculate_title_change").text("рассрочку") : $(".calculate_title_change").text("кредит"), $(".credit_page__calculate_item").hide().eq(t).show()
                })
            }
        }, customScroll: {
            init: function () {
                $(".js-search-dropdown").customScroll({
                    prefix: "checkbox_choice__",
                    barMinHeight: 20,
                    offsetTop: 0,
                    offsetBottom: 0,
                    trackWidth: 10,
                    barHtml: "<div />",
                    vertical: !0,
                    horizontal: !1
                })
            }, titleDropdown: function () {
                $(".title_dropdown").customScroll({
                    prefix: "title_dropdown__",
                    barMinHeight: 10,
                    offsetTop: 0,
                    offsetBottom: 15,
                    trackWidth: 10,
                    barHtml: "<div />",
                    vertical: !0,
                    horizontal: !1
                })
            }, formDropdown: function () {
                $('.form_dropdown:not([data-custom-scroll="false"])').customScroll({
                    prefix: "form_dropdown__",
                    barMinHeight: 10,
                    offsetTop: 0,
                    offsetBottom: 17,
                    trackWidth: 10,
                    barHtml: "<div />",
                    vertical: !0,
                    horizontal: !1
                })
            }
        }, menuScroll: {
            init: function () {
            }
        }, header: {
            init: function () {
                $('.dropdown.dropdown--slide[href="#city_menu"]').on("click", function (t) {
                    t.preventDefault();
                    var e = $(this);
                    e.hasClass("active") ? ($("#city_menu .city-menu__search").off("input", y.header.findCityesInHeader), $("#city_menu").removeClass("open"), e.removeClass("active"), $("body").css("overflow", "")) : (e.addClass("active"), $("body").css("overflow", "hidden"), $("#city_menu").addClass("open"), $("#city_menu .city-menu__search").on("input", y.header.findCityesInHeader))
                }), $("#close_city_list").on("click", function () {
                    $("#city_menu .city-menu__search").off("input", y.header.findCityesInHeader), $("#city_menu").removeClass("open"), $('.dropdown.dropdown--slide[href="#city_menu"]').removeClass("active"), $("body").css("overflow", "")
                }), $("#city_menu .city-menu__list a[data-href]").on("click", function (t) {
                    t.preventDefault(), window.location.href = $(this).data("href")
                }), $(".header_menu").on("click", function (t) {
                    t.preventDefault();
                    $("header nav"), $(".header-button"), $("header nav").innerHeight();
                    y.header.showFadeMenu($(this), "header nav", ".header_city__item", ".city-menu")
                }), $(".header_city__item").on("click", function (t) {
                    t.preventDefault(), y.header.showFadeMenu($(this), ".city-menu", ".header_menu", "header nav"), $(".city-menu__close").css("transform", "translateY(0px)")
                }), $(".city-menu__close").on("click", function () {
                    $(".header_city__item").trigger("click")
                }), $(window).scroll(function () {
                    var t, e = $(window).scrollTop(), i = $(".city-menu"), s = $(".city-menu__close");
                    i.hasClass("open") && (0 === e && s.css("transform", "translateY(0)"), i.offset().top < e && ((t = e - i.offset().top) < i.height() - 130 && s.css("transform", "translateY(".concat(t, "px)")))), y.lazyLoad.init()
                }), 768 <= h ? ($(".header_address__item, .header_number__phone.disabled").on("click", function () {
                    $(".address_office").fadeToggle().toggleClass("open"), $(".header_address").toggleClass("hover")
                }), $(".address_office").on("click", "li", function (t) {
                    t.preventDefault();
                    var e = $(this).data("address"), i = $(this).find(".address_office__item-phone").text(),
                        s = i.replace(/[-()\s]/g, "");
                    $(".header_address__name").text(e), $(".header_number__phone").unbind("click").removeClass("disabled").children(".tel").attr("href", "tel:" + s).children().text(i), $(".header_address__item").trigger("click")
                })) : ($(".js-address-close").on("click", function () {
                    $(".address_office").fadeOut().removeClass("open"), $(".header_address img").removeClass("hide"), $(this).addClass("hidden")
                }), $(".header_address").on("click", "img", function () {
                    $(".address_office").fadeIn().addClass("open"), $(this).addClass("hide"), $(".js-address-close").removeClass("hidden")
                }))
            }, showFadeMenu: function (t, e, i, s) {
                t.toggleClass("open"), $(e).fadeToggle().toggleClass("open"), $(i).removeClass("open"), $(s).fadeOut().removeClass("open")
            }, findCityesInHeader: function () {
                var t, e = $("#city_menu .city-menu__list > .wrap-column"), s = $(this).val().toLowerCase();
                "" == s.trim() ? (e.find("ul, li").removeClass("hide"), $("#city_menu .city-menu__form + .city-menu__list").css("display", ""), $("#city_menu .city-menu__not-found").css("display", "")) : ((t = e.find(".list:not(.list-allcity)")).each(function (t, e) {
                    var i = $(e).find("li");
                    i.addClass("hide"), 0 < i.find('a[data-name*="' + s + '"]').parent().removeClass("hide").length ? $(e).removeClass("hide") : $(e).addClass("hide")
                }), 0 < t.filter(":not(.hide)").length ? ($("#city_menu .city-menu__form + .city-menu__list").css("display", ""), $("#city_menu .city-menu__not-found").css("display", "")) : ($("#city_menu .city-menu__form + .city-menu__list").css("display", "none"), $("#city_menu .city-menu__not-found").css("display", "block")))
            }
        }, clickOutsideBlock: {
            init: function () {
                $(document).mouseup(function (t) {
                    var e = $("header nav.open"), i = $(".input_item"), s = $(".dropdown-title"), a = $(".title_city"),
                        n = $(".contacts__choice_city"), o = $(".contacts__city_layout"), r = $(".address_office"),
                        l = $(".js-tour-info-dropdown"), c = $(".dropdown_list");
                    0 === e.has(t.target).length && e.hasClass("open") && !$(".header_menu").is(t.target) && 0 === $(".header_menu").has(t.target).length && (e.fadeOut().removeClass("open"), $(".header_menu").removeClass("open"), $(".header-button").removeClass("transform", "translateY(0px)")), 0 !== i.has(t.target).length || i.is(t.target) || i.not(t.target).removeClass("open").children().removeClass("open"), a.is(t.target) || s.is(t.target) || (s.removeClass("open"), a.slideUp().removeClass("open")), o.is(t.target) || !o.hasClass("open") || n.is(t.target) || (n.removeClass("open"), o.slideUp().removeClass("open")), 0 === r.has(t.target).length && r.hasClass("open") && !$(".header_number__phone.disabled").is(t.target) && 0 === $(".header_address").has(t.target).length && (r.removeClass("open").fadeOut(), $(".header_address").removeClass("hover"), $(".header_address img").removeClass("hide"), $(".js-address-close").addClass("hidden")), l.is(t.target) || 0 !== l.has(t.target).length || $(".js-tour-info").is(t.target) || 0 !== $(".js-tour-info").has(t.target).length || l.hide(), 0 !== c.has(t.target).length || c.is(t.target) || c.not(t.target).removeClass("open"), h < 768 ? 0 !== $(".share-link_inner").has(t.target).length || $(".share-link_inner").is(t.target) || $(".share-link_wrap").removeClass("open") : 0 !== $(".share-link_wrap, .share-link_opening").has(t.target).length || $(".share-link_wrap").is(t.target) || $(".share-link_wrap").not(t.target).removeClass("open")
                })
            }
        }, inputDropDownForm: {
            init: function () {
                function e() {
                    var e, i, s;
                    $(".children").each(function () {
                        if (e = $(this).find(".child_age"), i = $(this).find("a.active").text(), e.length > i) if (0 == i) e.remove(); else if (3 === e.length && 2 == i) e.eq(i).remove(); else for (var t = s = e.length - i; 0 < t; t--) e.eq(t).remove(); else if (e.length < i) {
                            s = i - e.length;
                            for (t = 0; t < s; t++) $(this).append('<div class="child_age"><button type="button" class="child_age__button child_age__button-minus">-</button><input type="text" readonly value="2 года" class="child_age__input"><button type="button" class="child_age__button child_age__button-plus">+</button></div>')
                        }
                    })
                }

                $("body").on("click", ".input_item.dropdown", function () {
                    $(".number_people").removeClass("open").children(".number_people_drop").removeClass("open"), $(this).toggleClass("open").children(".form_dropdown").toggleClass("open"), y.customScroll.formDropdown(), $(".input_item.dropdown").not(this).removeClass("open").children(".form_dropdown").removeClass("open")
                }).on("click", ".input_item .form_dropdown a", function (t) {
                    t.preventDefault();
                    var e = $(this).html(), i = $(this).attr("data-value");
                    $(this).closest(".form_dropdown").siblings("p").html(e), i && $(this).closest(".form_dropdown").siblings("p").attr("data-value", i)
                }), $("body").on("click", ".input_item.dropdown", function () {
                    $(this).toggleClass("open").children(".form_dropdown_comp").toggleClass("open"), $(".input_item.dropdown").not(this).removeClass("open").children(".form_dropdown_comp").removeClass("open")
                }), $("body").on("click", ".number_people", function (t) {
                    t.target !== this && "P" !== t.target.nodeName || ($(this).toggleClass("open").children(".number_people_drop").toggleClass("open"), $(".number_people").not(this).removeClass("open").children(".number_people_drop").removeClass("open"), $(".input_item.dropdown").removeClass("open").children(".form_dropdown").removeClass("open"))
                }), $("body").on("click", ".full_people .quantity a:not(.active)", function (t) {
                    t.preventDefault();
                    var e = 0, i = $(this).closest(".full_people"), s = "";
                    $(this).addClass("active").siblings().removeClass("active");
                    var a = parseInt(i.find(".adult").children("a.active").text());
                    switch (i.find(".child").children("a.active").each(function () {
                        e += parseInt($(this).text())
                    }), !0) {
                        case 0 === e && 1 < a:
                            s = a + " взрослых";
                            break;
                        case 0 === e && 1 === a:
                            s = a + " взрослый";
                            break;
                        default:
                            s = a + " взр. " + e + " реб."
                    }
                    return i.siblings("p").text(s), e
                }), $(".only_child .quantity").on("click", "a", function (t) {
                    t.preventDefault();
                    var e = 0, i = $(this).closest(".only_child");
                    return $(this).addClass("active").siblings().removeClass("active"), i.find(".quantity").children("a.active").each(function () {
                        e += parseInt($(this).text())
                    }), i.siblings("p").text(0 === e ? "Не выбрано" : e + " реб."), e
                }), $("body").on("click", ".children .quantity a:not(.active)", function (t) {
                    e()
                }), $("body").on("click", ".quantity.child a:not(.active)", function (t) {
                    var e = $(t.target).closest(".how_people"), i = 0, s = 0;
                    e.hasClass("children") ? (i = Number($(t.target).text()), s = Number($("#infatn_list").find(".active").text())) : (s = Number($(t.target).text()), i = Number($("#child_list").find(".active").text())), $("#infatn_list").find("a").each(function () {
                        3 < Number($(this).text()) + i ? $(this).addClass("disable") : $(this).removeClass("disable")
                    }), $("#child_list").find("a").each(function () {
                        3 < Number($(this).text()) + s ? $(this).addClass("disable") : $(this).removeClass("disable")
                    })
                }), $("body").on("click", ".quantity a", function () {
                    var t = $(this).data("input"), e = $(this).html();
                    void 0 !== t && $("#" + t).val(e)
                }), e()
            }
        }, childAge: {
            init: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? t : {};

                function i(t, e) {
                    var i = e + " лет", s = t.siblings("input"), a = s.closest(".children");
                    2 <= e && e <= 4 && (i = e + " года"), s.val(i), i = a.find(".quantity.child a.active").text() + ":", a.find("input.child_age__input").each(function (t, e) {
                        i += $(e).val() + ","
                    }), a.children("input").val(i)
                }

                void 0 === e.obj && (e.obj = $(".children")), e.obj.on("click", ".child_age__button-minus", function () {
                    var t = $(this).siblings("input"), e = parseInt(t.val(), 10);
                    return 2 < e && (e--, i($(this), e)), !1
                }).on("click", ".child_age__button-plus", function () {
                    var t = $(this).siblings("input"), e = parseInt(t.val(), 10);
                    return e < 14 && (e++, i($(this), e)), !1
                })
            }
        }, viewSwitch: {
            init: function () {
                $(".cards_switch").on("click", function () {
                    $(this).hasClass("active") || ($(".list_switch,.table_switch").removeClass("active"), $("#swap-container").removeClass("container"), $(".cards_switch,.card_switch").addClass("active"), y.viewSwitch.checkSliderTabs("card"))
                }), $(".list_switch").on("click", function () {
                    $(this).hasClass("active") || ($(".cards_switch,.card_switch").removeClass("active"), $("#swap-container").addClass("container"), $(".list_switch,.table_switch").addClass("active"), y.viewSwitch.checkSliderTabs("tour"))
                }), $(".courses__switch").on("click", "span:not(.active)", function () {
                    var t = $(this).index(), e = $(this).closest(".courses__item").find(".courses__item_switch");
                    $(this).addClass("active").siblings().removeClass("active"), e.eq(t).addClass("active").siblings().removeClass("active")
                })
            }, checkSliderTabs: function (t) {
                var e = $(".slider_tabs li:not(.dropdown-menu).active").index(), i = $(".tour_tabs");
                switch (t) {
                    case"card":
                        i.find(".card_switch").children().hide().removeClass("visible").eq(e - 1).addClass("visible").fadeIn();
                        break;
                    case"tour":
                        i.find(".table_switch").children().hide().eq(e - 1).fadeIn()
                }
            }
        }, peopleSwitch: {
            init: function () {
                $(".people_switch").on("click", "a:not(.active)", function (t) {
                    t.preventDefault(), $(this).addClass("active").siblings().removeClass("active");
                    var e = $(".tour_tabs").find(".table_item");
                    switch (!0) {
                        case 1 === $(this).data("id"):
                            e.each(function () {
                                var t = $(this).find(".hottour_price"), e = $(this).find(".installment_price"),
                                    i = $(this).find(".full_price");
                                t.text((parseInt(t.text().replace(/\s+/g, ""), 10) / 2).toLocaleString("ru")), e.text((parseInt(e.text().replace(/\s+/g, ""), 10) / 2).toLocaleString("ru")), i.text((parseInt(i.text().replace(/\s+/g, ""), 10) / 2).toLocaleString("ru")), $(".people_count_for_table").text("1 человека")
                            });
                            break;
                        case 2 === $(this).data("id"):
                            e.each(function () {
                                var t = $(this).find(".hottour_price"), e = $(this).find(".installment_price"),
                                    i = $(this).find(".full_price");
                                t.text((2 * parseInt(t.text().replace(/\s+/g, ""), 10)).toLocaleString("ru")), e.text((2 * parseInt(e.text().replace(/\s+/g, ""), 10)).toLocaleString("ru")), i.text((2 * parseInt(i.text().replace(/\s+/g, ""), 10)).toLocaleString("ru")), $(".people_count_for_table").text("2 человек")
                            })
                    }
                })
            }
        }, titleDropdown: {
            init: function () {
                $(".dropdown-title").on("click", function () {
                    $(this).toggleClass("open").parent().siblings(".title_city").slideToggle().toggleClass("open"), y.customScroll.titleDropdown()
                }), $(".contacts__choice_city").on("click", function () {
                    $(this).toggleClass("open").siblings(".contacts__city_layout").slideToggle().toggleClass("open")
                }), $(".title_dropdown").on("click", "a", function (t) {
                    t.preventDefault();
                    var e = $(this).text();
                    $(this).closest(".title").find(".dropdown-title").children(".js-dropdown-text").text(e), $(".title_city,.dropdown-title").removeClass("open")
                })
            }
        }, tabsCity: {
            init: function () {
                $(".slider_tabs").on("click", "li:not(.dropdown-menu)", function () {
                    var t, e, i, s, a, n;
                    $(this).hasClass("active") ? $(".slider_tabs li").removeClass("show") : (t = $(this).closest(".tour_tabs").find(".card_switch"), e = $(this).closest(".tour_tabs").find(".table_switch"), i = $(this).closest(".questions").find(".questions__employee"), $(this).children("p").text(), s = $(this).html(), a = $(this).children(".date-long").text() + " " + $(this).children(".days-long").text(), n = $(this).closest(".slider_tabs").data("one_option"), $(".slider_tabs li").removeClass("show"), $(this).addClass("active").siblings("li:not(.dropdown-menu)").removeClass("active"), i.hide().removeClass("visible").eq($(this).index() - 1).addClass("visible").fadeIn(), (void 0 !== n && 1 == n || 768 <= h) && t.hasClass("active") ? t.children(".card").hide().removeClass("visible").eq($(this).index() - 1).addClass("visible").fadeIn() : e.children(".table").hide().eq($(this).index() - 1).fadeIn(), $(this).siblings(".dropdown-menu").html(s), $(".tour_tabs__date-date").text(a))
                }), $(".tour_tabs__button-more").on("click", function (t) {
                    t.preventDefault(), $(this).parent().hide().parent().addClass("show").find(".item_hidden_tour").removeClass("item_hidden_tour")
                }), $(".dropdown-menu").on("click", function (t) {
                    t.preventDefault(), $(this).siblings().toggleClass("show")
                })
            }
        }, handlerExpand: {
            init: function () {
                $(".navigation_title.mobile").on("click", function () {
                    $(this).hasClass("active") ? $(this).removeClass("active") : ($(".navigation_title.mobile").removeClass("active"), $(this).addClass("active")), $(".open-mobile").slideUp("fast"), $(this).next().is(":hidden") ? $(this).next().slideDown("fast") : $(this).next().slideUp("fast")
                }), $(".accordion_wrap .accordion .accordion_head").on("click", function () {
                    $(this).hasClass("active") ? $(this).removeClass("active") : ($(".accordion_wrap .accordion .accordion_head").removeClass("active"), $(this).addClass("active")), $(".accordion_wrap .accordion .accordion_content").slideUp("fast"), $(this).next().is(":hidden") ? $(this).next().slideDown("fast") : $(this).next().slideUp("fast")
                }), $(".yourcity_wrapper").on("click", ".button-more", function (t) {
                    t.preventDefault(), $(this).siblings().not("h2,hr").slideToggle()
                }), $("body").on("click", ".reviews__item .open-comment,.comment_mark_mobile", function (t) {
                    var e, i;
                    "reviews__gallery_img" != t.target.className && (i = (e = $(this).closest(".reviews__inner")).children(".reviews__header").innerHeight(), e.hasClass("open") ? (e.children(".reviews__body").css("transform", "translateY(0)"), e.children(".reviews__body").find(".body_other").css("overflow-y", "hidden"), $(".reviews_slider").slick("setOption", "autoplay", !0, !0)) : (e.children(".reviews__body").css("transform", "translateY(-" + i + "px)"), e.children(".reviews__body").find(".body_other").css("overflow-y", "auto"), $(".reviews_slider").slick("setOption", "autoplay", !1, !0)), e.toggleClass("open"))
                }).on("click", ".add_wishes", function (t) {
                    t.preventDefault();
                    var e = $(this).text();
                    $(this).text("+ добавить пожелания" === e ? "- убрать пожелания" : "+ добавить пожелания"), $(this).parent().siblings(".input-group-textarea").toggle()
                }), $(".recommendation_reviews__text").on("click", "a", function (t) {
                    t.preventDefault();
                    var e = $(this).text();
                    $(this).text("Развернуть" === e ? "Свернуть" : "Развернуть").toggleClass("open").siblings("span").toggle().closest(".recommendation_reviews__item").toggleClass("open")
                }), $(".recommendation_reviews__item").on("click", ".comment_mark_mobile", function () {
                    var t = $(this).children().text();
                    $(this).siblings(".recommendation_reviews__text").find("span").toggle(), $(this).children().text("Раскрыть отзыв" === t ? "Свернуть" : "Раскрыть отзыв"), $(".recommendation_reviews_slick").slick("setPosition")
                }), $(".table .table_list").on("click", function (t) {
                    $(this).children(".table_hover").length && (t.preventDefault(), $(this).children(".table_hover").toggleClass("hover_item"))
                }), $(".request_tour__show").on("click", function (t) {
                    t.preventDefault();
                    var e = $(this).text();
                    $(this).text("Дополнительная информация" === e ? "Убрать доп. информацию" : "Дополнительная информация").parent().siblings(".input-group__dropdown").toggle()
                }), $(".form_modal__show").on("click", function (t) {
                    t.preventDefault();
                    var e = $(this).text();
                    $(this).text("Дополнительная информация" === e ? "Вернуться" : "Дополнительная информация").toggleClass("show").parent().siblings(".request_tour_modal__step").toggle()
                }), $(".countries_check").on("click", function (t) {
                    t.preventDefault(), $(".countries_block").fadeToggle().toggleClass("open")
                }), $(".search_travelers__item").on("click", function () {
                    h < 768 && $(this).find(".search_travelers__b").toggleClass("open")
                }), $(".flags__link-see_more").on("click", function (t) {
                    t.preventDefault(), $(this).hide().siblings().addClass("show")
                })
            }
        }, showMoreButton: {
            init: function () {
                var t = $(".handlerShowMore"), e = t.siblings(), i = e.not(":visible").length;
                $(".button-more__quantity").text(i), t.on("click", ".button-more", function (t) {
                    t.preventDefault(), e.addClass("show"), $(this).parent().hide()
                })
            }
        }, initSlider: {
            init: function () {
                $(".reviews_slider").slick({
                    dots: !1,
                    arrows: !1,
                    slidesToScroll: 1,
                    slidesToShow: 3,
                    infinite: !1,
                    autoplay: !0,
                    autoplaySpeed: 3e3,
                    responsive: [{
                        breakpoint: 767,
                        settings: {
                            variableWidth: !0,
                            centerMode: !0,
                            slidesToShow: 1,
                            centerPadding: "80px",
                            initialSlide: 1
                        }
                    }, {
                        breakpoint: 380,
                        settings: {
                            centerPadding: "50px",
                            centerMode: !0,
                            variableWidth: !0,
                            slidesToShow: 1,
                            initialSlide: 1
                        }
                    }]
                }), $(".employees_slider").slick({
                    dots: !1,
                    arrows: !1,
                    slidesToScroll: 1,
                    slidesToShow: 3,
                    autoplay: !0,
                    infinite: !0,
                    autoplaySpeed: 3e3,
                    responsive: [{breakpoint: 1023, settings: {slidesToShow: 3}}, {
                        breakpoint: 768,
                        settings: {autoplay: !1}
                    }, {breakpoint: 480, settings: {autoplay: !1, slidesToShow: 1, dots: !0}}]
                }), $(".video_slider_slick").slick({
                    prevArrow: $(".video_slider_slick__arrow_prev"),
                    nextArrow: $(".video_slider_slick__arrow_next"),
                    slidesToShow: 1,
                    slidesToScroll: 1
                }), $(".recommendation_reviews_slick").slick({
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: !0,
                    adaptiveHeight: !0,
                    mobileFirst: !0,
                    responsive: [{breakpoint: 768, settings: "unslick"}]
                }), $(".country__articles").slick({
                    arrows: !1,
                    slidesToShow: 1,
                    sliderToScroll: 1,
                    dots: !0,
                    adaptiveHeight: !0,
                    mobileFirst: !0,
                    responsive: [{breakpoint: 768, settings: "unslick"}]
                }), $(".franchising_advantages__row").slick({
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: !0,
                    adaptiveHeight: !0,
                    mobileFirst: !0,
                    responsive: [{breakpoint: 768, settings: "unslick"}]
                }), $(".franchising_video").slick({
                    arrows: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: !0,
                    mobileFirst: !0,
                    responsive: [{breakpoint: 768, settings: "unslick"}]
                }), $(".about-company__advantages").each(function (t, e) {
                    var i = $(e).closest("section");
                    null != i && "off" != i.attr("data-slider") && $(e).slick({
                        dots: !0,
                        infinite: !0,
                        speed: 300,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        prevArrow: null,
                        nextArrow: null,
                        mobileFirst: !0,
                        responsive: [{breakpoint: 768, settings: "unslick"}]
                    })
                }), $(".bottom-item__awards").slick({
                    dots: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    prevArrow: null,
                    nextArrow: null,
                    mobileFirst: !0,
                    responsive: [{breakpoint: 768, settings: "unslick"}]
                }), $(".awards__slider").slick({
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    prevArrow: $(".awards__arrow_prev"),
                    nextArrow: $(".awards__arrow_next"),
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            dots: !0,
                            infinity: !1,
                            rows: 2,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            prevArrow: null,
                            nextArrow: null
                        }
                    }]
                }), $(".contacts__contact").slick({
                    prevArrow: $(".contacts__contact_arrow_prev"),
                    nextArrow: $(".contacts__contact_arrow_next"),
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: !0,
                    dots: !1,
                    infinite: !1,
                    responsive: [{breakpoint: 768, settings: {dots: !0, arrows: !1}}]
                }), $(".courses__reviews_layout").slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: $(".courses__reviews_arrow_prev"),
                    nextArrow: $(".courses__reviews_arrow_next"),
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            dots: !0,
                            infinity: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            prevArrow: null,
                            nextArrow: null
                        }
                    }]
                }), 768 < h && $(".contacts__employees").slick({
                    prevArrow: '<button type="button" class="slider__arrow slider__arrow_prev contacts__employees_arrow_prev">&#xe803;</button>',
                    nextArrow: '<button type="button" class="slider__arrow slider__arrow_next contacts__employees_arrow_next">&#xe803;</button>',
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    swipe: !1,
                    dots: !1,
                    infinite: !1,
                    responsive: [{breakpoint: 1280, settings: {slidesToShow: 3, slidesToScroll: 3}}, {
                        breakpoint: 1024,
                        settings: {slidesToShow: 4, slidesToScroll: 4}
                    }]
                }), $(".hotel_page__slider_main").slick({
                    dots: !1,
                    arrows: !1,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                    infinite: !0,
                    asNavFor: ".hotel_page__slider_nav"
                }), $(".hotel_page__slider_nav").slick({
                    asNavFor: ".hotel_page__slider_main",
                    infinite: !0,
                    dots: !1,
                    arrows: !1,
                    slidesPerRow: 3,
                    rows: 3,
                    focusOnSelect: !0
                })
            }
        }, modal: {
            init: function () {
                function i(t) {
                    this.$element = t.$element, this.item = t.item, this.modal = t.modal || null, this.info = t.info || null, this.modalInfo = t.modalInfo || null, this.$itemBlock = t.$element.closest(this.item), this.$modalBlock = this.modal ? $(t.modal) : null, this.indicator = t.indicator || null, this.indicatorItem = t.indicatorItem || null, this.stepBlock = t.stepBlock || null
                }

                function e(i, s, t) {
                    var e = $(i).closest(".input-group"), a = e.find(".form_modal__file_error"),
                        n = e.find(".form_modal__file_name"), o = e.find(".form_modal__file_img_layout"),
                        r = e.find(".form_modal__file_img");
                    if (i.files && i.files[0]) {
                        var l = new FileReader;
                        if (2097152 < i.files[0].size) return a.html("Размер файла не должен превышать <br/> 2 мб").show(), void o.empty();
                        if (-1 == $.inArray(s, t)) return a.text("Неверный формат").show(), void o.empty();
                        o.find("#img-form").attr("src", "/assets/images/icons/modal/loadingt.gif"), l.onload = function (t) {
                            i.parentElement.style.display = "none", a.hide();
                            var e = "image" === s ? t.target.result : "/assets/images/icons/document.png";
                            n.text("image" === s ? "" : i.files[0].name), o.children().attr("style", "background-image: url(" + e + ")").children().remove(), r.removeClass("del"), r.css("cursor", "pointer")
                        }, l.readAsDataURL(i.files[0])
                    }
                }

                $('*[data-modal="modal"]').on("click", function (t) {
                    t.preventDefault(), t.stopPropagation();
                    var e = $(this).data("target"), i = $(this).data("title");
                    void 0 !== i && $(e).find(".modal__title").text(i), $(e).arcticmodal()
                }), i.prototype.initModal = function () {
                    this.$modalBlock.arcticmodal()
                }, i.prototype.appendImageAndPosition = function () {
                    var t = this.$itemBlock.find("img").attr("src"), e = this.$itemBlock.find(this.info).html();
                    this.$modalBlock.find("img").attr("src", t), this.$modalBlock.find(this.modalInfo).html(e)
                }, i.prototype.appendTitle = function () {
                    var t = this.$itemBlock.find(this.info).text();
                    this.$modalBlock.find(this.modalInfo).text(t)
                }, i.prototype.progressBar = function (t, e) {
                    t.find(".form_modal_indicator__line").attr("data-progress", e)
                }, i.prototype.getStep = function () {
                    this.indicator = this.$itemBlock.find(this.indicator), this.stepBlock = this.$itemBlock.find(this.stepBlock)
                }, i.prototype.stepButton = function () {
                    this.getStep();
                    var t = this.$itemBlock.find(this.indicatorItem).filter(".active").last().next().addClass("active");
                    this.stepBlock.not(":last").filter(".active").removeClass("active").next().addClass("active"), this.progressBar(this.indicator, t.data("percent")), this.stepBlock.last().hasClass("active") && this.$element.parent().hide()
                }, i.prototype.stepCircle = function (t) {
                    this.getStep();
                    var e = this.$itemBlock.find(t).parent(), i = this.$element.closest(this.indicatorItem),
                        s = i.index();
                    e.is(":hidden") && e.show(), i.nextAll().removeClass("active"), this.stepBlock.removeClass("active").eq(s).addClass("active"), this.progressBar(this.indicator, i.data("percent"))
                }, $(".office-personal-wrap").on("click", ".stars-n__link", function (t) {
                    t.preventDefault();
                    var e = new i({
                        $element: $(this),
                        item: ".office-personal-wrap",
                        modal: ".rate_employee_modal",
                        info: ".personal-content-wrap",
                        modalInfo: ".rate_employee_modal__info"
                    });
                    e.appendImageAndPosition(), e.initModal()
                }), $(".office-personal-wrap").on("click", ".office-personal__btn", function (t) {
                    t.preventDefault();
                    var e = new i({
                        $element: $(this),
                        item: ".office-personal-wrap",
                        modal: ".faq_modal-expert",
                        info: ".personal-content-wrap",
                        modalInfo: ".faq_modal__info"
                    });
                    e.appendImageAndPosition(), e.initModal()
                }), $(".employees_slider").on("click", ".item_link", function (t) {
                    t.preventDefault();
                    var e = new i({
                        $element: $(this),
                        item: ".slider_item",
                        modal: ".rate_employee_modal",
                        info: ".item_info",
                        modalInfo: ".rate_employee_modal__info"
                    });
                    e.appendImageAndPosition(), e.initModal()
                }), $(".questions__employee").on("click", "button", function (t) {
                    t.preventDefault();
                    var e = new i({
                        $element: $(this),
                        item: ".questions__employee",
                        modal: ".faq_modal-expert",
                        info: ".questions__info",
                        modalInfo: ".faq_modal__info"
                    });
                    e.appendImageAndPosition(), e.initModal()
                }), $(".vacancy").on("click", ".vacancy__respond", function (t) {
                    t.preventDefault();
                    var e = new i({
                        $element: $(this),
                        item: ".vacancy__item",
                        modal: ".vacancy_modal",
                        info: ".vacancy__title",
                        modalInfo: ".form_modal__header"
                    });
                    e.appendTitle(), e.initModal()
                }), $(".teachRequest").on("click", function (t) {
                    t.preventDefault();
                    var e = new i({
                        $element: $(this),
                        item: ".courses-item",
                        modal: ".course_modal",
                        info: ".courses__title_head",
                        modalInfo: ".form_modal__header"
                    });
                    e.appendTitle(), e.initModal()
                }), $(".contact-label").on("click", function (t) {
                    t.preventDefault(), $("#contact-comp").removeClass("disable"), $(this).closest(".input-group").addClass("disable")
                }), $(".reviews_modal__button").on("click", function (t) {
                    t.preventDefault(), !0 === y.submitForm.validationCheck($(this).closest("form")) && new i({
                        $element: $(this),
                        item: ".form_modal",
                        indicator: ".form_modal_indicator",
                        indicatorItem: ".form_modal_indicator__item",
                        stepBlock: ".reviews_modal__step"
                    }).stepButton()
                }), $(".form_modal_indicator__circle").on("click", function (t) {
                    t.preventDefault(), new i({
                        $element: $(this),
                        item: ".form_modal",
                        indicator: ".form_modal_indicator",
                        indicatorItem: ".form_modal_indicator__item",
                        stepBlock: ".reviews_modal__step"
                    }).stepCircle(".reviews_modal__button")
                }), $(".button_copy_form").on("click", function () {
                    var t = "", e = $(".copy_form_mobile").clone();
                    t += '<h2 class="title_head text-center">' + $(this).data("title") + "</h2>" + e[0].outerHTML, y.modal.createModalResponsive(t)
                }), $(".mo-chosen-city").change(function () {
                    var t, e = $(this).find(":selected"), i = $(this).closest("form"), s = i.find(".select-city"),
                        a = i.find(".title-select-office");
                    a && s && (a = a[0], s = s[0]), a && s && ("Покупка тура онлайн" == (t = e.text()) ? ($(s).text(t), $(a).css("display", "none")) : ($(s).text("г. " + t), $(a).css("display", "inline")))
                }), $("#orderRequest .m-form-more").on("click", function (t) {
                    t.preventDefault();
                    var e = $(this).closest(".modal_body");
                    e.toggleClass("open"), e.find(".m-form-more:not(.m-form-more__mobile):not(.more-info-mobile)") && (e.hasClass("open") ? (e.find(".m-form-more:not(.m-form-more__mobile):not(.more-info-mobile)").text("Скрыть доп. информацию о туре"), e.find(".m-form-more:is(.more-info-mobile):is(.visible_mobile)").text("Скрыть дополнительную информацию")) : (e.find(".m-form-more:not(.m-form-more__mobile):not(.more-info-mobile)").text("Указать доп. информацию о туре"), e.find(".m-form-more:is(.more-info-mobile):is(.visible_mobile)").text("Дополнительная информация")))
                }), $("#order .m-form-more").on("click", function (t) {
                    t.preventDefault();
                    var e = $(this).closest(".modal_body");
                    e.toggleClass("open"), e.find(".more-info-mobile") && (e.hasClass("open") ? e.find(".more-info-mobile").text("Скрыть") : e.find(".more-info-mobile").text("Дополнительная информация"))
                }), $("body .form_modal__file_input-single").change(function () {
                    var t = this.files[0].type.split("/").shift();
                    e(this, t, ["image"])
                }), $("body .form_modal__file_input-file").change(function () {
                    e(this, $(this).val().split(".").pop().toLowerCase(), ["doc", "pdf", "docx"])
                }), $("body .form_modal__file_input-multiple").change(function () {
                    !function (t) {
                        var e = $(t).closest(".input-group"), i = e.find(".form_modal__file_error"),
                            r = e.find(".form_modal__file_img_layout");
                        if (t.files) for (var s = t.files.length, a = 0; a < s; a++) {
                            var n = t.files[a], l = new FileReader;
                            if (-1 == n.type.indexOf("image") && -1 == n.type.indexOf("video")) return i.text("Неверный формат").show();
                            if (524288e3 < n.size) return i.text("Размер файла не должен превышать 500 MB").show();
                            var o = +r.attr("data-count");
                            o++, r.attr("data-count", o), r.append('<div class="form_modal__file_img form_modal__file_img-multiple" data-numberImg="' + o + '" ><img src="/assets/images/icons/modal/loadingt.gif" alt="" /></div>'), (0 <= n.type.indexOf("image") ? function (t, e) {
                                l.onload = function (t) {
                                    i.hide(), r.find('[data-numberImg="' + e + '"]').attr("style", "background-image: url(" + t.target.result + ")").children().remove()
                                }, l.readAsDataURL(t)
                            } : function (n, o) {
                                l.onload = function () {
                                    function t() {
                                        i() && (a.removeEventListener("timeupdate", t), a.pause())
                                    }

                                    var e = new Blob([this.result], {type: n.type}), s = URL.createObjectURL(e),
                                        a = document.createElement("video");
                                    a.addEventListener("loadeddata", function () {
                                        i() && a.removeEventListener("timeupdate", t)
                                    });
                                    var i = function () {
                                        var t = document.createElement("canvas");
                                        t.width = a.videoWidth, t.height = a.videoHeight, t.getContext("2d").drawImage(a, 0, 0, t.width, t.height);
                                        var e = t.toDataURL(), i = 1e5 < e.length;
                                        return i && (r.find('img[data-img="' + o + '"]').attr("src", e), URL.revokeObjectURL(s)), i
                                    };
                                    a.addEventListener("timeupdate", t), a.preload = "metadata", a.src = s, a.muted = !0, a.playsInline = !0, a.play()
                                }, l.readAsArrayBuffer(n)
                            })(n, o)
                        }
                    }(this)
                }), $(".form_modal").on("click", ".form_modal__file_img", function () {
                    var t = $(this).parent();
                    t.siblings(".form_modal__file").show().children("input").val(""), t.siblings(".form_modal__file_name").text(""), $(this).find("#img-form").attr("src", ""), $(this).attr("style", 'background-image: ""'), $(this).addClass("del"), $(this).css("cursor", "auto")
                }), $("#feedbackGTM .feedback_office_select select.js-customSelect-select").on("change", function () {
                    var t = $("#employees_container .form_dropdown a").hide();
                    0 < (t = t.filter("a.office_" + $(this).val())).length ? t.show() : $("#employees_container .form_dropdown .no_item").show()
                }), y.modal.buyModal.init()
            }, createModalResponsive: function (t, e, i) {
                var s = 2 < arguments.length && void 0 !== i ? i : null;
                null === s && (s = '<div class="arcticmodal-container"><table class="arcticmodal-container_i" style="width: 100%;"><tr><td class="arcticmodal-container_i2 arcticmodal-container_i2_tour_modal"></td></tr></table></div>');
                var a = $('<div class="box-modal ' + (void 0 === e ? "callback_modal" : e) + '" />');
                a.append(t), a.prepend('<div class="box-modal_close arcticmodal-close"><div class="close_item"><span></span><span></span></div></div></div>'), $.arcticmodal({
                    content: a,
                    container: {tpl: s}
                })
            }, buyModal: {
                id: null, actualizeRequest: null, checkPaymentTimeout: null, init: function () {
                    var l, e, t = $("#newRequestBuyTourModal");

                    function c(t, e, i, s) {
                        $("#installmentType").val(i), $("#installmentTypeView").text(t), $("#installmentOverpayment").text(s + "%"), l.find(".payment_submit .pay_now .buy_modal__payment__price").html(getInstallmentPrice(e, i, s).toLocaleString("ru") + " <small>руб.</small>")
                    }

                    0 !== t.length && ($(".hottour_tabs, .hotels_list, #tours").on("click", ".btnTourLoad, .h-tours-list__item-col--buy > a", y.modal.buyModal.openModal), (l = $("#newRequestBuyTourModal .buy_modal__form_modal")).find(".buy_modal__payment_method .buy_modal__payment_method__list").on("click", "li:not(.active)", y.modal.buyModal.paymentMethod), l.find(".buy_modal__select_office__text__dropdown > .input_item__select").on("change", function (t) {
                        var e = l.find(".buy_modal__select_office__list");
                        e.find("li:not(.buy_modal__select_office__list-online)").remove();
                        var i = $(this).children(":selected").data("offices");
                        if (0 === i) return e.find(".buy_modal__select_office__list-online").find(".wrap").css("display", "none"), void e.find(".buy_modal__select_office__list-online").find('input[name="data[office_id]"]').prop("checked", !0);
                        e.find(".buy_modal__select_office__list-online").find(".wrap").css("display", "block"), e.find(".buy_modal__select_office__list-online").find('input[name="data[office_id]"]').prop("checked", !1);
                        for (var s = e.find(".buy_modal__select_office__list-online"), a = 0; a < i.length; a++) {
                            var n = $(l.find(".buy_modal__select_office__list > template").clone().get(0).content);
                            n.find("input").attr({
                                id: "buy_modal__office-" + i[a].id,
                                value: i[a].id
                            }), 1 === i.length && n.find("input").prop("checked", !0), n.find("label").attr("for", "buy_modal__office-" + i[a].id).children(".office_title").text(i[a].title);
                            var o = n.find("label > .office_address");
                            "metro" !== i[a].type_address && o.find(".office_address-metro").remove(), o.children(".office_address-info").text(i[a].address), s.before(n)
                        }
                    }), (e = l.find("#buyModalTourist")).on("click", ".buy_modal__tourist__customer:not(.checked)", function () {
                        var t;
                        "international" === $("#buyModalTourist").data("current-type") || ($("#buyModalTourist .buy_modal__tourist__no_passport").css("visibility", ""), (t = $(this).closest(".buy_modal__wrap").find(".buy_modal__tourist__no_passport").css("visibility", "hidden").children("input")).is(":checked") && t.trigger("click")), e.find(".buy_modal__tourist__customer.checked").removeClass("checked").find("input").prop("checked", !1), $(this).find("input").prop("checked", !0).parent().addClass("checked"), e.find(".buy_modal__tourist__customer.checked + .buy_modal__tourist__address > input").addClass("required"), e.find(".buy_modal__tourist__customer:not(.checked) + .buy_modal__tourist__address > input").removeClass("required")
                    }).on("change", ".buy_modal__tourist__no_passport input", function () {
                        var t = $(this), e = t.closest(".col");
                        t.prop("checked") ? (e.find(".buy_modal__tourist__pass_data").hide(), e.find('input:not([data-required="false"])').removeClass("required")) : (e.find(".buy_modal__tourist__pass_data").show(), e.find('input:not([data-required="false"])').addClass("required"))
                    }), l.find(".buy_modal__payment__to_pay").on("click", ".buy_modal__payment__to_pay__tab:not(.active)", function () {
                        $(this).addClass("active").siblings().removeClass("active");
                        var t = +$(this).data("percent");
                        l.find('input[name="extended[toPay]"]').val(t);
                        var e = +l.find('input[name="extended[price]"]').val();
                        $(".buy_modal__payment .buy_modal__payment__price").html((e * t).toLocaleString() + " <span>руб.</span>")
                    }), l.on("click", "#changeInstallmentType > a", function (t) {
                        t.preventDefault();
                        var e = +l.find('input[name="extended[price]"]').val(), i = +$(this).data("value"),
                            s = $(this).data("percent");
                        c($(this).text(), e, i, s)
                    }).on("click", ".installment .installment_gate .item:not(.active)", function () {
                        var t = $(this), e = t.data("val"), i = t.closest(".installment");
                        i.find('input[name="data[installmentGate]"]').val(e), i.find(".info.service > span[data-gate]").hide().filter('[data-gate="' + e + '"]').show(), t.closest(".installment_gate").find(".item.active").removeClass("active"), t.addClass("active");
                        var s = t.data("products"), a = t.data("default"), n = $("#changeInstallmentType");
                        for (var o in n.find("a").remove("a"), s) {
                            var r = s[o];
                            n.append('<a class="'.concat(o == a ? "active" : "", '" href="#" data-value="').concat(r.time, '" data-percent="').concat(r.percent, '">').concat(r.time + " " + declensionByNumber(r.time, "месяц", "месяца", "месяцев"), "</a>"))
                        }
                        c(s[a].time + " " + declensionByNumber(s[a].time, "месяц", "месяца", "месяцев"), +l.find('input[name="extended[price]"]').val(), +s[a].time, s[a].percent)
                    }).on("click", ".buy_modal__input-gender > p", function () {
                        var t = $(this).siblings("input").val();
                        $(this).text("female" === t ? "М" : "Ж").siblings("input").val("female" === t ? "male" : "female")
                    }).on("submit.submitBuyModal", y.modal.buyModal.submit), t.on("click.reservation", "#buyModalBookingSheet", y.submitForm.reservation))
                }, openModal: function (t) {
                    t.preventDefault(), t.stopPropagation();
                    var e, i, s = void 0 !== t.data && void 0 !== t.data.hotelData;
                    if (s ? e = t.data.hotelData : 0 < (i = $("#tours.hotel-section")).length ? ((e = $(this).closest(".h-tours-list__item").data()).name = i.data("name"), e.star = i.data("star"), e.countrycode = i.data("countrycode"), e.countryname = i.data("countryname"), e.regionname = i.data("regionname")) : e = $(this).closest("a.table__item_link, .h-tours-list__item").data(), this.id != e.tour_id) {
                        this.id = e.tour_id, $("#buyModalGuarantee, #buyModalBookingSheet").addClass("disabled"), y.modal.buyModal.buildTourists(s ? t.data.hotelData.numberPeople : 2);
                        var a = $("#newRequestBuyTourModal .buy_modal__form_modal"), n = void 0 !== e.extended,
                            o = void 0 !== t.data && void 0 !== t.data.dateData ? t.data.dateData : $(".hottour_tabs .tour_tabs .slider_tabs > li.dateTourSwitch.active").data(),
                            r = +(n ? e.nights : o.nightsto);
                        a.find(".buy_modal__tour_info__departure_information__time").css("visibility", "hidden"), a.find('input[name="extended[tourid]"]').val(e.tour_id), a.find('input[name="extended[price]"]').val(+e.price);
                        var l = new Date(1e3 * (n ? e.unixdate : o.unixdate));
                        a.find('input[name="extended[date]"]').val(l.toISOString().split("T")[0]), a.find(".buy_modal__tour_info__departure_information.departure_date .buy_modal__tour_info__departure_information__date > b").text(l.toLocaleDateString("ru-RU", {
                            day: "2-digit",
                            month: "long"
                        })), l.setDate(l.getDate() + r), a.find(".buy_modal__tour_info__departure_information.return_date .buy_modal__tour_info__departure_information__date > b").text(l.toLocaleDateString("ru-RU", {
                            day: "2-digit",
                            month: "long"
                        }));
                        for (var c = [], h = 0; h < 2; h++) r + h == 1 || r + h == 21 ? c.push(0 == h ? "ночь" : "день") : r + h < 5 ? c.push(0 == h ? "ночи" : "дня") : c.push(0 == h ? "ночей" : "дней");
                        a.find(".buy_modal__tour_info__number_nights > b").text(1 + r + " " + c[1] + " / " + r + " " + c[0]), a.find('input[name="extended[daynum]"]').val(1 + r), void 0 !== e.countryname && (a.find(".buy_modal__tour_info__name").text(e.countryname + ", " + (void 0 === e.regionname ? "" : e.regionname)), a.find('input[name="extended[country]"]').val(e.countryname), void 0 !== e.regionname && a.find('input[name="extended[region]"]').val(e.regionname)), void 0 !== e.countrycode && a.find('input[name="extended[country_id]"]').val(e.countrycode), void 0 !== e.flyaway && (a.find(".buy_modal__tour_info__departure").text(e.flyaway), a.find('input[name="extended[flyaway]"]').val(e.flyaway)), a.find(".buy_modal__tour_info__hotel_name").text(e.name), a.find('input[name="extended[hotel]"]').val(e.name), a.find('input[name="extended[hotel_stars]"]').val(e.star), a.find(".buy_modal__tour_info__middle").html("<li>Питание: <b>" + e.meal + "</b></li><li>Номер: <b>" + e.room + "</b></li><li>" + (void 0 === e.adultsdisplay ? "2 взрослых" : e.adultsdisplay) + "</li>"), a.find('input[name="extended[typeRoom]"]').val(e.room), a.find('input[name="extended[mealrussian]"]').val(e.meal), c = "";
                        for (var d = 0; d < e.star; d++) c += "<li></li>";
                        a.find(".buy_modal__tour_info__hotel_info__star").html(c), c = null, "" == e.url ? a.find(".buy_modal__tour_info__hotel_info__link").hide() : a.find(".buy_modal__tour_info__hotel_info__link").attr("href", e.url).show();
                        var u = +a.find(".buy_modal__payment__to_pay__tab.active").data("percent");
                        a.find(".buy_modal__tour_info__price").html(e.price.toLocaleString("ru-RU") + " <span>руб.</span>"), a.find(".buy_modal__payment__price").html((e.price * u).toLocaleString("ru-RU") + " <span>руб.</span>"), a.find("#buyModalBookingSheet").attr("href", "/output/reservation/".concat(e.tour_id, "/")), y.modal.buyModal.actualizeTour(e.tour_id, void 0 === e.operatorId ? null : e.operatorId), $("#newRequestBuyTourModal").arcticmodal()
                    } else $("#newRequestBuyTourModal").arcticmodal()
                }, buildTourists: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : 2, i = $("#buyModalTourist"), s = i.data("type");
                    if (s !== i.data("current-type")) {
                        i.children(".buy_modal__tourist").remove();
                        for (var a = 0; a < e; a++) !function (a) {
                            var t = $(i.children('template[data-international="' + ("international" === s ? 1 : 0) + '"]').clone().get(0).content);
                            t.find("input").each(function (t, e) {
                                var i = $(e),
                                    s = (s = i.attr("name")).replace(/(tourists)(\[(\d+)\])(\[\w+\])(\[\w+\])?/, "$1[".concat(a, "]$4$5"));
                                i.attr("name", s)
                            }), t.find(".buy_modal__wrap__title > span[data-index]").text(a + 1), 0 < a && (t.find(".buy_modal__tourist__customer").removeClass("checked").children("input").prop("checked", !1), t.find(".buy_modal__tourist__address > input").removeClass("required"), "international" !== s && t.find(".buy_modal__tourist__no_passport").css("visibility", "")), i.append(t)
                        }(a);
                        i.data("current-type", s)
                    }
                }, paymentMethod: function () {
                    var t = $(this), e = $("#buyModalMethodOther"),
                        i = $(".buy_modal__payment .buy_modal__payment__to_pay"),
                        s = $(".buy_modal__payment .buy_modal__payment__time"), a = t.data("method");
                    $('.buy_modal__payment_method input[name="data[payment_method]"]').val(a);
                    var n = t.siblings(".active").removeClass("active").data("method");
                    t.addClass("active");
                    var o, r, l, c = $("#newRequestBuyTourModal"), h = c.find(".payment_submit .pay_now > div"),
                        d = +c.find('input[name="extended[price]"]').val();
                    switch ("installment" === a ? (o = +$("#installmentType").val(), r = +c.find('#changeInstallmentType a[data-value="' + o + '"]').data("percent"), h.children("label").text("Ежемесячный платеж"), h.children(".buy_modal__payment__price").html(getInstallmentPrice(d, o, r).toLocaleString("ru") + " <small>руб.</small>"), $(".buy_modal__payment .installment").show()) : (l = +c.find(".buy_modal__payment__to_pay__tab.active").data("percent"), h.children("label").text("К оплате сейчас"), h.children(".buy_modal__payment__price").html((d * l).toLocaleString("ru-RU") + " <span>руб.</span>"), $(".buy_modal__payment .installment").hide()), "sbp" === n && (clearTimeout(y.modal.buyModal.checkPaymentTimeout), $("#buyModalMethodSBP").hide(), e.show()), "office" === a ? (i.hide(), s.hide(), c.find(".online-show").hide(), $("#newRequestBuyTourModal .buy_modal__form_modal").addClass("office")) : ($("#newRequestBuyTourModal .buy_modal__form_modal").removeClass("office"), "installment" === a ? (i.hide(), s.show()) : (s.hide(), i.show()), c.find(".online-show").show()), a) {
                        case"office":
                            e.text("Отправить");
                            break;
                        case"sbp":
                        case"bank":
                            e.text("Оплатить");
                            break;
                        case"installment":
                            e.text("Оформить")
                    }
                }, actualizeTour: function (t, e) {
                    function r() {
                        $("#buyModalMethodOther").prop("disabled", !1), $(".buy_modal__tour_info__price_wrap > .airplane_loader").hide()
                    }

                    null !== y.modal.buyModal.actualizeRequest && this.actualizeRequest.abort(), $("#buyModalMethodOther").prop("disabled", !0), $(".buy_modal__tour_info__price_wrap > .airplane_loader").show();
                    var i = {request: "actualizeTour", tourID: t, operatorId: e};
                    i[$("#csrf").data("name")] = $("#csrf").data("value"), this.actualizeRequest = $.ajax({
                        url: "/ajax/callback/",
                        type: "POST",
                        data: i
                    }).done(function (t) {
                        var e, i, s, a, n, o;
                        y.modal.buyModal.actualizeRequest = null, t = JSON.parse(t), r(), 200 === t.status.code && (e = $("#newRequestBuyTourModal .buy_modal__form_modal"), t.data.actualize.actualize && $("#buyModalBookingSheet").removeClass("disabled"), e.find('input[name="actual"]').val(JSON.stringify({
                            data: {
                                actualize: t.data.actualize.actualize,
                                detail: t.data.actualize.detail
                            }
                        })), null !== t.data.guarantee && $("#buyModalGuarantee").attr("href", t.data.guarantee).removeClass("disabled"), t.data.isRegular ? $("#buyModalRegular").show() : $("#buyModalRegular").hide(), e.find('input[name="data[price]"]').val(t.data.price), i = +e.find(".buy_modal__payment__to_pay__tab.active").data("percent"), e.find('input[name="extended[price]"]').val(t.data.price), e.find(".buy_modal__tour_info__price").html(t.data.price.toLocaleString("ru-RU") + " <span>руб.</span>"), e.find(".buy_modal__payment__price").html((t.data.price * i).toLocaleString("ru-RU") + " <span>руб.</span>"), e.find('input[name="extended[TO]"]').val(t.data.tourOperator), null == t.data.flights ? e.find(".buy_modal__tour_info__departure_information__time").css("visibility", "hidden") : (s = e.find(".buy_modal__tour_info__departure_information.departure_date > .buy_modal__tour_info__departure_information__time"), (a = t.data.flights.forward[0]).departure.dateTime = new Date(a.departure.dateTime).toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }), s.children(".departure").text(a.departure.dateTime), a.arrival.dateTime = new Date(a.arrival.dateTime).toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }), s.children(".arrival").text(a.arrival.dateTime + (0 === a.arrival.nightsOnRoad ? "" : " +" + a.arrival.nightsOnRoad)), n = e.find(".buy_modal__tour_info__departure_information.return_date > .buy_modal__tour_info__departure_information__time"), (o = t.data.flights.backward[t.data.flights.backward.length - 1]).departure.dateTime = new Date(o.departure.dateTime).toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }), n.children(".departure").text(o.departure.dateTime), o.arrival.dateTime = new Date(o.arrival.dateTime).toLocaleTimeString("ru-RU", {
                            hour: "2-digit",
                            minute: "2-digit"
                        }), n.children(".arrival").text(o.arrival.dateTime + (0 === o.arrival.nightsOnRoad ? "" : " +" + o.arrival.nightsOnRoad)), e.find(".buy_modal__tour_info__departure_information__time").css("visibility", "")))
                    }).fail(function () {
                        y.modal.buyModal.actualizeRequest = null, r()
                    })
                }, submit: function (t) {
                    t.preventDefault();
                    var e, i, s, a, n, o = $("#newRequestBuyTourModal .buy_modal__form_modal"),
                        r = o.find(".buy_modal__payment_method .buy_modal__payment_method__list li.active").data("method"),
                        l = "office" === r;
                    l ? (e = y.submitForm.validationCheck(o.find(".buy_modal__user_data")), 1 === (i = o.find("#buyModalOffice > .buy_modal__wrap")).find('input[name="data[office_id]"]:checked').length ? i.removeClass("unvalid") : (i.addClass("unvalid"), e = !1)) : (e = y.submitForm.validationCheck(o), onlineBuyValid() || (e = !1)), e && (o.hasClass("buy_modal__form_choice") ? (s = new FormData, a = o.find('input:not([name="customer"],[name="data[office_id]"]), select, textarea'), $.each(a, function (t, e) {
                        var i = $(e).closest("form, .buy_modal__choice_item");
                        (i.hasClass("active") || i.hasClass("buy_modal__form_choice")) && s.set($(e).attr("name"), $(e).val())
                    })) : s = new FormData(o.get(0)), l ? s.set("data[office_id]", o.find('input[name="data[office_id]"]:checked').val()) : s.set("customer", o.find('input[name="customer"]:checked').val()), s.set($("#csrf").data("name"), $("#csrf").data("value")), (n = $("#buyModalMethodOther")).addClass("disabled"), $.ajax({
                        url: o.attr("action"),
                        type: void 0 === o.attr("method") ? "POST" : o.attr("method"),
                        data: s,
                        processData: !1,
                        contentType: !1,
                        headers: {csrf_test_name: $("#csrf").data("value")}
                    }).done(function (t) {
                        var e;
                        200 == (t = JSON.parse(t)).status.code ? (e = !0, "office" === r || ("sbp" === r ? h < 768 ? document.location.href = t.sbp.link : (e = !1, $("#buyModalMethodOther").hide(), $("#buyModalMethodSBP").show().children(".qr-code").attr("src", t.sbp.renderedQR), y.modal.buyModal.checkPaymentTimeout = setTimeout(y.modal.buyModal.checkPaymentStatus, 5e3, t.sbp.qrId, t.sbp.mdOrder)) : document.location.href = t.link), e && y.returnAlert({
                            icon: "check",
                            title: t.returnMessage.title,
                            subtitle: t.returnMessage.message
                        })) : y.returnAlert({
                            icon: "close",
                            title: "Произошла ошибка",
                            subtitle: void 0 === t.status.text ? "Попробуйте повторить позже" : t.status.text
                        });
                        var i = o.attr("id");
                        void 0 !== i && "" != i || (i = o.data("gtm")), void 0 !== i && "" != i && dataLayer.push({event: i}), n.removeClass("disabled")
                    }).fail(function () {
                        y.returnAlert({
                            icon: "close",
                            title: "Произошла ошибка",
                            subtitle: "Попробуйте повторить позже"
                        }), n.removeClass("disabled")
                    }))
                }, checkPaymentStatus: function (e, i, t) {
                    var s = 2 < arguments.length && void 0 !== t ? t : 0,
                        a = {request: "paymentStatus", qrId: e, mdOrder: i};
                    a[$("#csrf").data("name")] = $("#csrf").data("value"), $.ajax({
                        url: "/ajax/callback/",
                        type: "POST",
                        data: a
                    }).done(function (t) {
                        (t = JSON.parse(t)).data.forwarding ? document.location.href = t.data.link : y.modal.buyModal.checkPaymentTimeout = setTimeout(y.modal.buyModal.checkPaymentStatus, 5e3, e, i)
                    }).fail(function () {
                        1 !== s && (y.modal.buyModal.checkPaymentTimeout = setTimeout(y.modal.buyModal.checkPaymentStatus, 5e3, e, i, s++))
                    })
                }
            }
        }, searchTour: {
            searchCountTimer: null,
            params: {departure: null},
            searchStatusInterval: null,
            hotels: {},
            hotelsKeys: [],
            hotelsCount: 0,
            cta: {},
            header: {},
            sortType: {sortBy: "cost", type: "asc"},
            init: function () {
                var t, e, i = get_cookie("isAll"), s = $("#searchButtonForm, #searchButtonForm__mobile");
                0 !== s.length && (1599 < h ? $(".search_tour__form_buttons .search_tour__checkbox_flight").find("input").prop("disabled", !0) : $(".search_tour__extra .search_tour__checkbox_flight").find("input").prop("disabled", !0),
                    s.on("click.initSearch", y.searchTour.initSearch).removeClass("disabled"),
                "1" === i && (history.replaceState(null, null, "/search"),
                h < 768 && (e = (t = $(".search_tour__form_wrap__more")).data("toggle_text"),
                    t.data("toggle_text", t.text()).text(e),
                    $(".search_tour__form_wrap__drop").addClass("open")),
                    set_cookie("isAll", 0)),
                    $("#buttonadd .search_result__button-more").on("click.addResultSearsh", function (t) {
                        t.preventDefault(), y.searchTour.render.page()
                    }), $(".cancel").on("click", function (t) {
                    t.preventDefault();
                    for (var e = $('.checkbox-services .control-checkbox input[type="checkbox"]:checked'), i = 0; i < e.length; i++) $(e[i]).prop("checked", !1);
                    $(".search_tour__hotel .open_other_filter .count").text("")
                }), $(".apply").on("click", function (t) {
                    t.preventDefault(), $("#other_filter").arcticmodal("close")
                }), $(".search_tour__range_slider .range_slider__input").on("input", function (t) {
                    t.preventDefault();
                    var e, i, s = $(t.target), a = $("#formsearch"), n = !0,
                        o = parseInt(a.find(".search_tour__range_slider .range_slider__slide").data("maxvalue"));
                    "" !== s.val() ? (s.hasClass("pricefrom") ? (e = s.val().replace(/\s+/g, ""), i = a.find(".search_tour__range_slider .priceto").val().replace(/\s+/g, ""), parseInt(e) > parseInt(i) && (n = !1), s.val(parseInt(e).toLocaleString("ru"))) : (i = s.val().replace(/\s+/g, ""), e = a.find(".search_tour__range_slider .pricefrom").val().replace(/\s+/g, ""), (parseInt(i) < parseInt(e) || parseInt(i) > o) && (n = !1), s.val(parseInt(i).toLocaleString("ru"))), n ? (a.find(".search_tour__range_slider .pricefrom").removeClass("unvalid"), a.find(".search_tour__range_slider .priceto").removeClass("unvalid"), a.find(".search_tour__extra .search_tour__range_slider .range_slider__slide").slider({values: [parseInt(e), parseInt(i)]})) : s.addClass("unvalid")) : s.addClass("unvalid")
                }), $("#save_parameters_search").on("click", function (t) {
                    t.preventDefault();
                    var e = $(".input_search"), i = $("#formsearch"), s = $(".list_search"),
                        a = s.find(".template").clone(!0), n = s.find(".item_history_search").length;
                    if ("" !== e.val() && n < 6) {
                        e.closest(".input_item").removeClass("unvalid"), $(".search_tour__search_history").find(".warning").removeClass("display");
                        var o, r = $("#child_list a.active").html();
                        0 < r && (o = r + ":", $(".child_age").each(function () {
                            o = o + $(this).find("input.child_age__input").val() + ","
                        }), $('input[name="child"]').val(o));
                        var l = {original: i.serializeArray(), final: []};
                        if (0 < y.searchTour.hotelsFunction.arrayHotelSelected.length) {
                            for (var c in l.original) "hotels[]" != l.original[c].name && l.final.push(l.original[c]);
                            for (var h in y.searchTour.hotelsFunction.arrayHotelSelected) l.final.push({
                                name: "hotels[]",
                                value: y.searchTour.hotelsFunction.arrayHotelSelected[h]
                            });
                            l = l.final
                        } else l = l.original;
                        i.push({
                            name: "nameSearch",
                            value: e.val()
                        }), a.find(".name_history").text(e.val()), y.searchTour.setSearchHistory(l, a), a.removeClass("template"), a.find(".name_history").on("click.clickToItemHistory", y.searchTour.clickToItemHistory), a.find(".delete_parameters_search").on("click.deleteSearchHistory", y.searchTour.deleteSearchHistory), s.append(a), e.val(""), s.find(".no_search_history").removeClass("display")
                    } else 5 < n ? $(".search_tour__search_history").find(".warning").addClass("display") : e.closest(".input_item").addClass("unvalid")
                }), $(".checkbox-services .control-checkbox").on("change", y.searchTour.getCountForFilter), $(".choice_rating_hotel__item").on("change.changeHotelRating", y.searchTour.changeHotelRating), $("body").on("click.btnSearchLoad", ".line_info .line_info__link, .table_price__link .line_info__link", y.searchTour.btnSearchLoad).on("click", ".search_result__tabs li:not(.active)", function () {
                    var t = $(this), e = t.closest(".search_tabs_switch").find(".search_result__button");
                    t.addClass("active").siblings().removeClass("active"), t.closest(".search_tabs_switch").find(".search_choose_switch").children().removeClass("active").eq($(this).index()).addClass("active"), t.hasClass("price_table") ? e.addClass("isClick") : e.removeClass("isClick")
                }).on("click", ".roll_up span", function () {
                    $(".search_result__tabs").children().removeClass("active"), $(this).closest(".active").removeClass("active"), $(this).closest(".search_tabs_switch").find(".search_result__button").removeClass("isClick")
                }).on("click", ".info_plane", function () {
                    $(this).toggleClass("active")
                }).on("click", ".link_info_btn-row", function (t) {
                    t.preventDefault(), $(this).toggleClass("active"), $(this).siblings(".line_info_row").slideToggle()
                }).on("change", ".cta_block__quiz_tour .chosen_country", function () {
                    var t = $(".cta_block__quiz_tour .chosen_resort");
                    t.children("option").hide().filter("option:selected").prop("selected", !1), t.children('option[value="all"], option[data-country="' + $(this).children("option:selected").val() + '"]').show(), t.trigger("chosen:updated")
                }), $("#resultsearchcontainer").on("click.firstClick", ".firstClickPrice", function () {
                    $(this).closest(".search_result__tour").find(".firstClickPrice").removeClass("firstClickPrice"), y.searchTour.render.tours({hotelCode: $(this).closest(".search_result__tour").data("id")})
                }).on("click", ".hotel_price__add_btn", function () {
                    y.searchTour.render.tours({hotelCode: $(this).closest(".search_result__tour").data("id")})
                }).on("click", ".js-search-sorting span", function () {
                    var t = $(this).attr("data-type");
                    $(this).hasClass("active") ? (t = "asc" === t ? "desc" : "asc", $(this).attr("data-type", t)) : $(this).addClass("active").siblings("span").removeClass("active"), y.searchTour.sortType.sortBy = $(this).data("sort"), y.searchTour.sortType.type = t, y.searchTour.sort.hotels(), y.searchTour.render.resultWrap.data("page", 1).html(""), y.searchTour.render.page()
                }), $("#header_search_result").on("click.copyLink", ".get_search_filter", function (t) {
                    t.preventDefault();
                    var e = $(this).find("input");
                    e.val(e.data("url") + $.param($("#formsearch").serializeArray())).select(), document.execCommand("copy")
                }), $(".search_tour__bottom_wrap").on("click.history", ".search_history__item", y.searchTour.searchSettingsFromHistory), $(".search_tour__bottom_wrap .search_history").on("click", ".search_history__item__help", function (t) {
                    t.preventDefault(), t.stopPropagation(), $(".faq_modal-questions").arcticmodal()
                }), 0 < $(".search_count span").length, $('#formsearch select[name="country"]').on("change", function () {
                    y.searchTour.getResortAndHotel({country_id: $(this).val()})
                }), h < 768 ? ($("#formsearch .search_tour__form_wrap__more").on("click", function (t) {
                    t.preventDefault();
                    var e = $(this).data("toggle_text");
                    $(this).data("toggle_text", $(this).text()).text(e), $("#formsearch .search_tour__form_wrap__drop").toggleClass("open")
                }), $("body").on("click", ".search_result__tour", function () {
                    var t = $(this), e = "", i = [], s = [], a = {
                        title: t.find(".hotel_name").text(),
                        city: t.find(".search_result__city-name").text(),
                        star: t.find(".search_result__hotel_star").html(),
                        description: t.find(".search_result__text").text(),
                        text: t.find(".hotel_about__text").html(),
                        tabs: t.find(".search_result__tabs").html(),
                        price: t.find(".search_result__coast").html(),
                        map: t.find(".hotel_map__item").attr("id"),
                        tablePrice: {}
                    }, n = "price";
                    for (var o in void 0 === a.price && (n = "about", a.price = ""), t.find(".search_result__tour_button").trigger("click.firstClick"), t.find(".line_info").each(function (t, e) {
                        i.push($(e).clone().get(0))
                    }), t.find(".photo_collage").children(".photo_collage__link").each(function (t, e) {
                        s.push($(e).attr("href"))
                    }), a.tablePrice = i, e += '<div class="tour_modal_layout search_tabs_switch"><div class="tour_modal__info"><div class="tour_modal__img"><div class="tour_modal_slider">', s.forEach(function (t) {
                        e += '<div class="tour_modal_slide" style="background-image:url('.concat(t, ')"></div>')
                    }), e += '</div><button type="button" class="slider__arrow slider__arrow_prev tour_modal__arrow_prev">&#xe803;</button><button type="button" class="slider__arrow slider__arrow_next tour_modal__arrow_next">&#xe803;</button></div><h3 class="hotel_name">' + a.title + '</h3><div class="search_result__city">' + a.city + '</div><div class="tour_modal__star"><ul class="hotel_star hotel_star_mobile">' + a.star + '</ul></div><div class="tour_modal__tabs"><ul class="search_result__tabs" data-mobile="true">' + a.tabs + '</ul></div></div><div class="tour_modal__switch search_choose_switch"><div class="tour_modal__about"><div class="tour_modal__description">' + a.description + '</div><div class="tour_modal__text"><div class="hotel_about__text"><div class="hotel_about__text">' + a.text + "</div></div></div></div>" + (a.map ? '<div class="tour_modal__map"><div style="height: 300px; width: 100%" id="' + a.map + '-mobile"></div></div>' : "") + '<div class="tour_modal__table_price active"><div class="table_price__title">Цены</div>', a.tablePrice) e += a.tablePrice[o].outerHTML;
                    e += '</div></div><div class="search_result__coast">' + a.price + '</div><div class="tour_modal__button"><button type="button" class="search_result__button btnPinkGradient">Купить</button></div></div></div></div></div>';
                    y.modal.createModalResponsive(e, "tour_modal", '<div class="arcticmodal-container"><table class="arcticmodal-container_i" style="width: 100%; display:block;"><tbody style="display:block;"><tr style="display:block;"><td class="arcticmodal-container_i2 arcticmodal-container_i2_tour_modal" style="display:block;"></td></tr></tbody></table></div>'), $(".tour_modal").find(".tour_modal_slider").slick({
                        prevArrow: $(".tour_modal__arrow_prev"),
                        nextArrow: $(".tour_modal__arrow_next"),
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: !0
                    }), "price" == n ? $(".tour_modal .search_result__tabs li.price_table").click() : $(".tour_modal .search_result__tabs li:first-child").click()
                }).on("click", ".search_result__button", function () {
                    $(".tour_modal .search_result__tabs li.price_table").click(), $(".tour_modal .search_result__button").addClass("isClick")
                })) : $("#resultsearchcontainer").on("click", ".search_result__tour_button", function () {
                    $(this).addClass("isClick").closest(".search_tabs_switch").find(".search_result__tabs li").removeClass("active"), $(this).closest(".search_tabs_switch").find(".search_result__tabs li.price_table").click()
                }), y.searchTour.hotelsFunction.init(), y.searchTour.initMap())
            },
            initSearch: function (t, e) {
                var i = 1 < arguments.length && void 0 !== e ? e : {};
                t.preventDefault();
                var s = $(".range_slider").find(".pricefrom"), a = $(".range_slider").find(".priceto");
                if (!s.hasClass("unvalid") && !a.hasClass("unvalid")) {
                    var r = $('select[name="departure"]').val();
                    $("#searchButtonForm, #searchButtonForm__mobile").addClass("disabled"), y.searchTour.output = !1, y.searchTour.page = 1;
                    var n, o = $("#child_list a.active").html();
                    0 < o && (n = o + ":", $(".child_age").each(function () {
                        n = n + $(this).find("input.child_age__input").val() + ","
                    }), $('input[name="child"]').val(n));
                    var l = $("#infatn_list a.active").html();
                    0 < l && $('input[name="infant"]').val(l);
                    var c = $(".choice_rating .choice_rating__star.active").data("rate");
                    0 < c && $('input[name="hotelstars"]').val(c), $("#searchLoader").show(), setProgressIndicator(0), $("#resultsearchcontainer").hide().data("full_page", !1), y.searchTour.render.resultWrap.data("page", 1).html(""), $("#header_search_result").hide(), $("#resultsearchcontainer > .search_result__top, #resultsearchcontainer > .request_tour__micro").show(), clearInterval(y.searchTour.searchStatusInterval), y.searchTour.hotelsCount = 0, y.searchTour.hotelsKeys = [], y.searchTour.hotels = {}, y.searchTour.cta = {};
                    var h = $("#formsearch"), d = {original: h.serializeArray(), final: []};
                    if (0 < y.searchTour.hotelsFunction.arrayHotelSelected.length) {
                        for (var u in d.original) "hotels[]" != d.original[u].name && d.final.push(d.original[u]);
                        for (var p in y.searchTour.hotelsFunction.arrayHotelSelected) d.final.push({
                            name: "hotels[]",
                            value: y.searchTour.hotelsFunction.arrayHotelSelected[p]
                        });
                        d = d.final
                    } else d = d.original;
                    $.ajax({type: "POST", url: "/toutvisor/ajax.php?action=searchTour", data: d}).done(function (t) {
                        if (t.success == true) {
                            var e, i, s;
                            if ( 0 < t.result.requestid && (y.searchTour.searchStatusInterval = setInterval(function () {
                                y.searchTour.statusSearch(t.result)
                            }, 2e3)), y.searchTour.scrollToResult(), $("#searchButtonForm, #searchButtonForm__mobile").removeClass("disabled")) {
                                var a = $(".search_tour__bottom_wrap .dynamic_links");

                            }

                        } else $("#searchButtonForm, #searchButtonForm__mobile").removeClass("disabled")
                    }).fail(function (t, e) {
                        $("#searchButtonForm, #searchButtonForm__mobile").removeClass("disabled"), console.log("Возникла ошибка: " + t.responseCode), y.returnAlert({
                            title: "Произошла ошибка",
                            subtitle: "Попробуйте позже"
                        })
                    })
                }
            },
            getCountForFilter: function () {
                var t = $('.checkbox-services .control-checkbox input[type="checkbox"]:checked').length;
                0 < t ? $(".open_other_filter .count").text("+" + t) : $(".open_other_filter .count").text("")
            },
            changeHotelRating: function (t, e) {
                var i = 1 < arguments.length && void 0 !== e ? e : null;
                t.preventDefault();
                var s, a = (null === i ? $(t.target) : i).closest(".choice_rating_hotel__item"),
                    n = $(".choice_rating_hotel").find(".choice_rating_hotel__item:not(.all)");
                if (a.hasClass("all")) {
                    a.addClass("active");
                    for (var o = 0; o < n.length; o++) $(n[o]).removeClass("active")
                } else {
                    $("#item-all").removeClass("active");
                    for (var r = 0; r < n.length; r++) $(n[r]).find("input").val() === a.find("input").val() && (s = r);
                    for (var l = 0; l < n.length; l++) l < s ? $(n[l]).removeClass("active") : $(n[l]).addClass("active")
                }
            },
            setSearchHistory: function (t, e) {
                var i = 1 < arguments.length && void 0 !== e ? e : null, s = $("#formsearch"), a = 0,
                    n = null === i ? localStorage.getItem("searchHistory") : localStorage.getItem("searchHistoryInForm");
                if (null === n) n = {}; else if (n = JSON.parse(n), 1 < Object.keys(n).length) if (null === i) {
                    for (a in n) 0 != a && (n[a - 1] = n[a]);
                    delete n[a]
                } else {
                    var o = parseInt(Object.keys(n)[0]);
                    Object.keys(n).map(function (t) {
                        var e = parseInt(t);
                        o < e && (o = e)
                    }), a = o + 1
                } else a++;
                for (var r in n[a] = {}, t) switch (void 0 === n[a][t[r].name] && (n[a][t[r].name] = {}), t[r].name) {
                    case"region[]":
                        void 0 === n[a].region && (n[a].region = {}), n[a].region[r] = {}, n[a].region[r].value = t[r].value, n[a].region[r].title = s.find('#search_regions_container input[value="' + t[r].value + '"]').data("title");
                        break;
                    case"hotels[]":
                        void 0 === n[a].hotels && (n[a].hotels = {}), n[a].hotels[r] = {}, n[a].hotels[r].value = t[r].value;
                        break;
                    case"departure":
                    case"country":
                        n[a][t[r].name].value = t[r].value, n[a][t[r].name].title = s.find('select[name="' + t[r].name + '"] option[value="' + t[r].value + '"]').text();
                        break;
                    case"services[]":
                        void 0 === n[a].services && (n[a].services = {}), n[a].services[r] = {}, n[a].services[r].value = t[r].value;
                        break;
                    default:
                        n[a][t[r].name].value = t[r].value
                }
                null !== i ? (i.find(".name_history").attr("data-id", a), n[a].nameSearch = i.find(".name_history").text(), localStorage.setItem("searchHistoryInForm", JSON.stringify(n))) : localStorage.setItem("searchHistory", JSON.stringify(n))
            },
            deleteSearchHistory: function (t) {
                var e = $(t.target).closest(".item_history_search"), i = e.find(".name_history").data("id"),
                    s = localStorage.getItem("searchHistoryInForm");
                delete (s = JSON.parse(s))[i], Object.keys(s).length <= 0 ? ($(".list_search").find(".no_search_history").addClass("display"), localStorage.removeItem("searchHistoryInForm")) : localStorage.setItem("searchHistoryInForm", JSON.stringify(s)), e.remove(), $(".search_tour__search_history").find(".warning").removeClass("display")
            },
            clickToItemHistory: function (t) {
                t.preventDefault(), $("#save_history").arcticmodal("close"), y.searchTour.searchSettingsFromHistory(t, !0)
            },
            scrollToResult: function () {
                $("html").animate({scrollTop: $("#searchLoader").offset().top - ($("header").innerHeight() + 15) + "px"}, "fast")
            },
            statusSearch: function (e) {
                $.ajax({
                    url: "/toutvisor/ajax.php?action=searchTourStatus",
                    type: "POST",
                    data: {type: "status", requestid: e.requestid}
                }).done(function (t) {
                    (y.searchTour.hotelsCount = t.data.status.hotelsfound, t.data.status.progress < 100 ? (setProgressIndicator(t.data.status.progress), 0 == $("#resultsearchcontainer").data("full_page") && 10 < t.data.status.hotelsfound && (y.searchTour.getResult({requestid: e.requestid}), t.data.status.hotelsfound > y.searchTour.render.onPage && $("#resultsearchcontainer").data("full_page", !0))) : (clearInterval(y.searchTour.searchStatusInterval), 0 == y.searchTour.hotelsCount ? y.searchTour.render.notFound() : y.searchTour.hotelsCount / 50 <= 1 ? y.searchTour.getResult({requestid: e.requestid}) : y.searchTour.getResult({
                        requestid: e.requestid,
                        onPage: y.searchTour.hotelsCount
                    }), $("#searchLoader").hide()))
                }).fail(function () {
                })
            },
            getResult: function (t) {
                void 0 === t.page && (t.page = 1), $.ajax({
                    url: "/toutvisor/ajax.php?action=searchTourResult",
                    type: "POST",
                    data: {
                        type: "result",
                        requestid: t.requestid,
                        page: t.page,
                        onPage: void 0 === t.onPage ? 50 : t.onPage,
                        departure: $('select[name="departure"]').val()
                    }
                }).done(function (t) {
                    console.log(t);
                    ($("#resultsearchcontainer").show(), y.searchTour.addHotelsInVar(t.data.result.hotel))
                }).fail(function () {
                })
            },
            addHotelsInVar: function (t) {
                var e = !1, i = !1;

                for (var s in t) {
                    var a = t[s];
                    if (void 0 === y.searchTour.hotels[a.hotelcode]) {
                        e = !0, y.searchTour.hotels[a.hotelcode] = a;
                        var n = {};
                        for (var o in a.tours.tour) n[a.tours.tour[o].tourid] = a.tours.tour[o];
                        y.searchTour.hotels[a.hotelcode].tours.tour = n
                    } else {
                        var r = !1;
                        for (var l in y.searchTour.hotels[a.hotelcode].price_for_site != a.price_for_site && (y.searchTour.hotels[a.hotelcode].price_for_site = a.price_for_site, i = !0), a.tours.tour) {
                            var c = a.tours.tour[l];
                            void 0 === y.searchTour.hotels[a.hotelcode].tours.tour[c.tourid] && (r = !0, y.searchTour.hotels[a.hotelcode].tours.tour[c.tourid] = c)
                        }
                        !0 === r && (y.searchTour.sort.tours(a.hotelcode, {update: !0}), 0 < $("#hotel-" + a.hotelcode + " .search_result__switch .hotel_price__table .line_info").length && y.searchTour.render.tours({
                            hotelCode: a.hotelcode,
                            update: !0
                        }))
                    }
                }

                !0 !== e && !0 !== i || (y.searchTour.sort.hotels(), y.searchTour.render.resultWrap.html("").data("page", 1), y.searchTour.render.header(), y.searchTour.render.page())
            },
            sort: {
                hotels: function () {
                    var t = [];
                    for (var e in y.searchTour.hotels) t.push({
                        hotelcode: y.searchTour.hotels[e].hotelcode,
                        price_for_site: y.searchTour.hotels[e].price_for_site,
                        hotelrating: y.searchTour.hotels[e].hotelrating,
                        tours: y.searchTour.sort.tours(y.searchTour.hotels[e].hotelcode)
                    });
                    t.sort(function (t, e) {
                        switch (y.searchTour.sortType.sortBy) {
                            case"cost":
                                t = t.price_for_site, e = e.price_for_site;
                                break;
                            case"rating":
                                t = t.hotelrating, e = e.hotelrating
                        }
                        return "desc" === y.searchTour.sortType.type ? e < t ? -1 : t < e ? 1 : 0 : t < e ? -1 : e < t ? 1 : 0
                    }), y.searchTour.hotelsKeys = t
                }, tours: function (t, e) {
                    var i = 1 < arguments.length && void 0 !== e ? e : {}, s = [];

                    for (var a in y.searchTour.hotels[t].tours.tour) s.push({
                        tourid: y.searchTour.hotels[t].tours.tour[a].tourid,
                        price_for_site: y.searchTour.hotels[t].tours.tour[a].price
                    });
                    if (s.sort(function (t, e) {
                        return t.price_for_site > e.price_for_site ? 1 : t.price_for_site < e.price_for_site ? -1 : 0
                    }), void 0 === i.update || !0 !== i.update) return s;
                    for (var n in y.searchTour.hotelsKeys) if (y.searchTour.hotelsKeys[n].hotelcode == t) {
                        y.searchTour.hotelsKeys[n].tours.tour = s;
                        break
                    }
                }
            },
            render: {
                onPage: 50, resultWrap: $("#resultsearchcontainer .search_result__wrapper"), page: function () {
                    var t = y.searchTour.render.resultWrap.data("page"), e = -1;
                    for (var i in y.searchTour.hotelsKeys) if (e++, !((t - 1) * y.searchTour.render.onPage > e)) {
                        if (e == t * y.searchTour.render.onPage) {
                            y.searchTour.render.resultWrap.data("page", t + 1);
                            break
                        }
                        y.searchTour.render.resultWrap.append(y.searchTour.render.hotel({
                            hotelCode: y.searchTour.hotelsKeys[e].hotelcode,
                            hotelKey: e
                        }))
                        void 0 !== y.searchTour.cta.interval && 0 != e && e % y.searchTour.cta.interval == 0 && y.searchTour.render.cta({position: e})
                    }
                    y.searchTour.hotelsKeys.length > t * y.searchTour.render.onPage ? $("#buttonadd").show() : $("#buttonadd").hide()
                }, hotel: function (t) {
                    for (var e = y.searchTour.hotels[t.hotelCode], i = "", s = 1; s <= 5; s++)
                        i += '<li><i class="' + (s <= e.hotelstars ? "star" : "") + '">&#xe801;</i></li>';
                    var a = '<div id="hotel-' + e.hotelcode + '" class="search_result__tour search_tabs_switch" data-id="' + e.hotelcode + '" data-key="' + t.hotelKey + '" data-rating="' + e.hotelrating + '" data-cost="' + e.price_for_site + '"><div class="search_result__photo" style="background:url(' + e.picturelink + ');"><ul class="hotel_star search_result__hotel_star">' + i + '</ul><div class="search_result__rating ' + (4 < e.hotelrating ? "good" : 3 < e.hotelrating ? "normal" : "bad") + '">' + (+e.hotelrating).toFixed(1) + '</div></div><div class="search_result__info-wrap"><div class="search_result__info"><div class="search_result__hotel"><h3 class="hotel_name">' + e.hotelname + '</h3></div><div class="search_result__city"><span class="search_result__city-name">' + e.countryname + ("" == e.regionname.trim() ? "" : ", " + e.regionname) + '</span></div><ul class="search_result__tabs"><li>Об отеле</li>';

                    if (typeof e.hotels_info != 'undefined' && (a += '<li class="yandexmapsbutton"  data-id="' + e.hotelcode + '" data-coord_x="' + e.hotels_info.addinfo.coord1 + '" data-coord_y="' + e.hotels_info.addinfo.coord2 + '">На карте</li>'), a += '<li class="price_table firstClickPrice">Цены</li></ul><div class="search_result__text">' + e.hoteldescription + '</div></div><div class="search_result__price"><div class="search_result__coast">от <span>' + e.price_for_site.toLocaleString() + '</span> руб.</div><button type="button" class="search_result__button search_result__tour_button btnPinkGradient firstClickPrice DetailedTourGTM">Подробнее</button></div></div><div class="search_result__switch search_choose_switch"><div class="hotel_about"><div class="hotel_about__photo"><div class="photo_collage">', "null" != e.hotels_info) {
                        if(typeof e.hotels_info.images !== 'undefined') {
                            for (var n = 0; n < e.hotels_info.images.image.length && (a += '<a href="' + e.hotels_info.images.image[n] + '" class="photo_collage__link" data-lightbox="hotel-photi-' + e.hotelcode + '"><div class="photo_collage__img" style="background-image: url(' + e.hotels_info.images.image[n] + ')"></div></a>', 7 != n); n++) ;
                            8 < e.hotels_info.images.image.length && void 0 !== e.hotels_info.url && (a += '<a href="/search/hotels.php?id=' + e.hotelcode + '" target="_blank" class="hotel_about__link btn-tour">Все фотографии</a>')
                        }
                    }
                    if(typeof e.hotels_info.placement == 'undefined') e.hotels_info.placement = '';
                    if(typeof e.hotels_info.territory == 'undefined') e.hotels_info.territory = '';
                    if(typeof e.hotels_info.inroom == 'undefined') e.hotels_info.inroom = '';
                    return a += '</div></div><div class="hotel_about__text">'+ "<p><span>Расположение:</span>" + e.hotels_info.placement + "</p>" + "<p><span>Территория отеля:</span>" + e.hotels_info.territory + "</p>" + "<p><span>В номерах:</span>" + e.hotels_info.inroom + "</p>" + '<div class="hotel_about__bottom">' + '<a href="/search/hotels.php?id=' + e.hotelcode + '" target="_blank"  class="hotel_about__link">Подробнее об отеле</a>' + '<div class="roll_up"><span>Свернуть</span></div></div></div><div class="roll_up hotel_about__roll_up"><div class="roll_up hotel_about__roll_up"><span>Свернуть</span></div></div></div>' + '<div class="hotel_map"><div class="roll_up"><span>Свернуть</span></div><div class="hotel_map__item" id="yandexmap-' + e.hotelcode + '" style="height: 400px;width: 100%;"></div></div>' + '<div class="hotel_price"><div class="hotel_price__top"><div class="hotel_price__title">Цены</div><div class="roll_up"><span>Свернуть</span></div></div><div class="hotel_price__table" data-page="0"></div><button class="hotel_price__add_btn btn-n btn__orange MoreToursSearchGTM" style="display:none;">показать еще</button></div></div></div>'
                }, tours: function (t) {
                    var e = $("#hotel-" + t.hotelCode), i = e.find(".hotel_price .hotel_price__table"),
                        s = i.data("page"), a = y.searchTour.hotels[t.hotelCode], n = get_cookie("auth"),
                        o = e.data("key");
                    if (void 0 !== t.update && !0 === t.update) {
                        e.find(".hotel_price .hotel_price__table").html("");
                        for (var r = 0; r < s; r++) y.searchTour.render.tours({hotelCode: t.hotelCode});
                        return !0
                    }
                    var l = 0;
                    for (var c in y.searchTour.hotelsKeys[o].tours) if (!(++l <= 10 * s)) {
                        if (10 * (s + 1) < l) break;
                        console.log(a.tours.tour);
                        console.log(y.searchTour)
                        var h = y.searchTour.hotelsKeys[o].tours[c].tourid, d = a.tours.tour[h], u = "";
                        1 == d.regular && (u = "Регулярные рейсы — это рейсы, которые выполняются крупной авиакомпанией круглый год, а обсулживание в салоне разделено на классы."), "" != u && (u = '<p class="line_info_flight__type ' + (1 == d.regular ? "info-red" : "") + '"><span>Регулярный рейс</span><span class="info_plane"><svg class="info_plane__icon"><use xlink:href="/assets/img/sprite.svg#info"></use></svg><span class="info_plane__hint">' + u + "</span></span></p>");
                        var p = "";
                        console.log(d)
                        if (void 0 !== d.hotelstatus) {
                            switch (d.hotelstatus) {
                                case 1:
                                    p = '<span class="info-orange">под запрос</span>';
                                    break;
                                case 2:
                                    p = "<span>мгновенное подтверждение</span>"
                            }
                            p = "<p>Места в отеле - " + p + "</p>"
                        }
                        var f = "";
                        if (void 0 !== d.flightstatus) {
                            switch (d.flightstatus) {
                                case 1:
                                    f = '<span class="info-orange">под запрос</span>';
                                    break;
                                case 2:
                                    f = '<span class="info-orange">мало</span>'
                            }
                            f = "<p>Мест на самолёт - " + f + "</p>"
                        }
                        i.append('<div class="line_info"><div class="line_info_plane"><div class="line_info_plane__item"><svg class="line_info_plane__item-icon"><use xlink:href="/assets/img/sprite.svg#plane-out"></use></svg><p><span class="line_info_plane__day">' + d.flydate + '</span> </p></div><div class="line_info_plane__sep">-</div><div class="line_info_plane__nights">' + d.nights + 'ночей </div><a href="#" class="link_info_btn-row"><span class="open">ПОДРОБНЕЕ</span><span class="close">Свернуть</span></a><div class="line_info_row"><div class="line_info_ticket"><p class="tourname">' + d.tourname + '</p><p class="line_info_ticket__class">' + d.room + "</p><p>" + d.mealrussian + "</p><p>" + d.adults + '</p></div><div class="line_info_flight">' + "<p><span>" + d.operatorname + "</span></p>" + u + p + f + '</div></div><div class="line_info_btn-wrap"><a href="#" class="line_info__link line_info__link--big btnPinkGradientTour" data-hotelcode="' + t.hotelCode + '" data-tourid="' + d.tourid + '"><span>' + d.price.toLocaleString() + '</span> руб.</a><span class="line_info_btn__hint">Включая топл. сбор</span></div></div>')
                    }

                    y.searchTour.hotelsKeys[o].tours.length > 10 * (s + 1) ? e.find(".hotel_price .hotel_price__add_btn").show() : e.find(".hotel_price .hotel_price__add_btn").hide(), i.data("page", s + 1)
                }, cta: function (t) {
                    for (var e in y.searchTour.cta.cta_list) {
                        var i, s, a, n, o = y.searchTour.cta.cta_list[e];
                        o.position * y.searchTour.cta.interval == t.position * y.searchTour.page && (s = (i = $(o.html).appendTo(y.searchTour.render.resultWrap)).find(".js-customSelect-search"), a = i.find(".datepicker-hidden"), 0 < (n = i.find(".number_people .children")).length && y.childAge.init({obj: n}), 0 < a.length && a.each(function (t, e) {
                            y.datePicker.initDataPicker($(e))
                        }), i.find(".phone-mask").mask("+7 (h99) 999-99-99"), 0 < s.length && s.each(function (t, e) {
                            $(e).chosen({
                                allow_single_deselect: !1,
                                search_contains: !0,
                                width: "100%",
                                no_results_text: "Не найден"
                            })
                        }))
                    }
                }, header: function () {
                    var t;
                    0 < y.searchTour.hotelsKeys.length && ((t = $("#header_search_result").show().find(".search_result__title")).find(".sorting__title_head").detach())
                }, notFound: function () {
                    $("#resultsearchcontainer").show(), $("#resultsearchcontainer > .search_result__top, #resultsearchcontainer > .request_tour__micro").hide(), $('<div class="search_result__not-found"><p class="not-found__title">К сожалению, по Вашему запросу подходящих вариантов не найдено.<br>Попробуйте изменить критерии поиска.</p><p class="not-found__request_title">Или просто оставьте заявку на подбор тура:</p><a class="cta-white__btn btn-n btn__red" href="#" data-modal="modal" data-target="#order" data-title="Заявка на тур">Оставить заявку</a></div>').appendTo("#resultsearchcontainer .search_result__wrapper").find('*[data-modal="modal"]').on("click", function (t) {
                        t.preventDefault(), t.stopPropagation();
                        var e = $(this).data("target"), i = $(this).data("title");
                        void 0 !== i && $(e).find(".modal__title").text(i), $(e).arcticmodal()
                    })
                }
            },
            btnSearchLoad: function (t) {
                var e = y.searchTour.hotels[$(this).data("hotelcode")], i = $(this).data("tourid"), s = e.tours.tour[i];
                t.data = {
                    hotelData: {
                        tour_id: i,
                        operatorId: s.operatorcode,
                        countrycode: e.countrycode,
                        countryname: e.countryname,
                        regionname: e.regionname,
                        adultsdisplay: s.adultsdisplay,
                        numberPeople: s.adults + s.child,
                        price: s.price_for_site,
                        name: e.hotelname,
                        star: e.hotelstars,
                        meal: s.mealrussian,
                        room: s.room,
                        url: void 0 === e.hotels_info || "null" === e.hotels_info || "null" === e.hotels_info.url ? "" : e.hotels_info.url
                    }, dateData: {nightsto: s.nights, unixdate: s.flydateUnixTime}
                }, y.modal.buyModal.openModal(t)
            },
            initMap: function () {
                $("body").on("click.map", "li.yandexmapsbutton", function () {
                    var t = $(this).data("id"), e = [$(this).data("coord_x"), $(this).data("coord_y")],
                        t = $(this).parent().attr("data-mobile") ? "yandexmap-" + t + "-mobile" : "yandexmap-" + t;
                    void 0 === ymapObj[t] && (ymapStack.push({
                        id: t,
                        mapSettings: {center: e, zoom: 14, type: "yandex#hybrid"},
                        baloon: [{coords: e}],
                        disable: "scrollZoom"
                    }), setYaMap())
                })
            },

            getResortAndHotel: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? t : {};
                $("#searchButtonForm").hasClass("disabled") || $("#searchButtonForm, #searchButtonForm__mobile").addClass("disabled");
                var i = $(".search_tour__resort .checkbox_choice-b"), s = $(".search_tour__hotel .checkbox_choice-b");
                i.hasClass("loading") || i.addClass("loading"), s.hasClass("loading") || s.addClass("loading"), $(".js-search-hotels").html(""), $(".search_hotel__tabs").addClass("hidden"), $.ajax({
                    type: "POST",
                    url: "/toutvisor/ajax.php?action=getregion",
                    data: e
                }).done(function (t) {
                    void 0 === e.region ? $('#formsearch .search_tour__resort input[name="all"]').prop("checked", !0) : $('#formsearch .search_tour__resort input[name="all"]').prop("checked", !1), $("#search_regions_container .checkbox_choice__inner").html(t.regions), y.searchTour.hotelsFunction.searchHotels({
                        hotels: t.lists.hotels,
                        loadHotelMore: void 0 === e.loadHotelMore || e.loadHotelMore
                    }), i.removeClass("loading"), $("#searchButtonForm, #searchButtonForm__mobile").removeClass("disabled")
                }).fail(function (t, e) {
                    console.log("Возникла ошибка: " + t.responseCode), y.returnAlert({
                        title: "Произошла ошибка",
                        subtitle: "Попробуйте позже"
                    })
                })
            },

            hotelsFunction: {
                endHotelsSearch: new CustomEvent("endHotelsSearch"),
                arrayHotelScroll: [],
                arrayHotelAll: [],
                arrayHotelSelected: [],
                $regionAnyCheckbox: $(".js-resort-region-any"),
                $resortRegion: $(".region_checkbox"),
                $resortContainer: $("#search_regions_container"),
                $hotels: $(".js-search-hotels"),
                $hotelsSearchInput: $(".js-search-hotel-input"),
                $hotelsSearchTabs: $(".search_hotel__tabs"),
                $hotelSearchTabsAll: $(".search_hotel__tabs-item_name"),
                $hotelSearchTabsSelection: $(".search_hotel__tabs-item_selection"),
                init: function () {
                    y.searchTour.hotelsFunction.searchHotels(), y.searchTour.hotelsFunction.$hotels.on("scroll", function () {
                        y.searchTour.hotelsFunction.$hotels.scrollTop() + 250 >= y.searchTour.hotelsFunction.$hotels.get(0).scrollHeight && y.searchTour.hotelsFunction.loadHotelMore()
                    }), y.searchTour.hotelsFunction.$hotelsSearchInput.on("keyup", y.searchTour.hotelsFunction.prebuildArray).on("focus", function () {
                        y.searchTour.hotelsFunction.$hotelSearchTabsSelection.hasClass("active") && y.searchTour.hotelsFunction.$hotelSearchTabsAll.click()
                    }), $(".search_tour__choice_rating").on("click", ".choice_rating__star", function () {
                        y.searchTour.hotelsFunction.$hotelSearchTabsSelection.hasClass("active") || y.searchTour.hotelsFunction.prebuildArray()
                    }), y.searchTour.hotelsFunction.$hotels.on("change", "input", function () {
                        var t, e = $(this).val();
                        $(this).prop("checked") ? y.searchTour.hotelsFunction.arrayHotelSelected.push(e) : (t = y.searchTour.hotelsFunction.arrayHotelSelected.indexOf(e), y.searchTour.hotelsFunction.arrayHotelSelected.splice(t, 1)), y.searchTour.hotelsFunction.$hotelSearchTabsSelection.hasClass("active") && y.searchTour.hotelsFunction.$hotelSearchTabsSelection.click(), y.searchTour.hotelsFunction.renderHotelTabs()
                    }), y.searchTour.hotelsFunction.$hotelSearchTabsAll.on("click", function () {
                        $(this).hasClass("active") || y.searchTour.hotelsFunction.prebuildArray()
                    }), y.searchTour.hotelsFunction.$hotelSearchTabsSelection.on("click", function () {
                        y.searchTour.hotelsFunction.arrayHotelScroll.length = 0, $(this).addClass("active").siblings().removeClass("active"), y.searchTour.hotelsFunction.$hotelsSearchInput.val(""), y.searchTour.hotelsFunction.$hotels.empty().animate({scrollTop: 0}, 0), y.searchTour.hotelsFunction.arrayHotelAll.filter(function (t) {
                            -1 !== $.inArray(t.id, y.searchTour.hotelsFunction.arrayHotelSelected) && y.searchTour.hotelsFunction.$hotels.append('<label class="control control-checkbox classstar-'.concat(t.stars, " region-").concat(t.region, '" rel="').concat(t.id, '">') + t.name + "&nbsp;" + t.stars + "*" + '<input class="hotel_checkbox" checked data-value="'.concat(t.name, '" type="checkbox" name="hotels[]" value="').concat(t.id, '">') + '<span class="control_indicator"></span></label>')
                        }), 0 === y.searchTour.hotelsFunction.arrayHotelSelected.length && y.searchTour.hotelsFunction.prebuildArray()
                    }), $(".search_hotel__tabs-item_clear").on("click", function () {
                        y.searchTour.hotelsFunction.$hotelsSearchInput.val(""), y.searchTour.hotelsFunction.$hotelsSearchInput.removeClass("focus"), y.searchTour.hotelsFunction.$hotelsSearchTabs.addClass("hidden"), y.searchTour.hotelsFunction.arrayHotelSelected.length = 0, y.searchTour.hotelsFunction.prebuildArray()
                    }), y.searchTour.hotelsFunction.$resortContainer.on("change", ".region_checkbox", y.searchTour.hotelsFunction.prebuildArray), y.searchTour.hotelsFunction.$regionAnyCheckbox.on("change", function () {
                        var t = y.searchTour.hotelsFunction.$resortContainer.find(".region_checkbox");
                        $(this).prop("checked") ? t.prop("checked", !1) : t.prop("checked", !0), y.searchTour.hotelsFunction.prebuildArray()
                    })
                },
                searchHotels: function (t) {
                    var e = 0 < arguments.length && void 0 !== t ? t : {},
                        i = $(".search_tour__hotel .checkbox_choice-b");

                    function s() {
                        y.searchTour.hotelsFunction.arrayHotelAll = y.searchTour.hotelsFunction._toConsumableArray(y.searchTour.hotelsFunction.arrayHotelScroll), void 0 !== e.loadHotelMore && !0 !== e.loadHotelMore || y.searchTour.hotelsFunction.loadHotelMore(), y.searchTour.hotelsFunction.$hotels.get(0).dispatchEvent(y.searchTour.hotelsFunction.endHotelsSearch), i.removeClass("loading")
                    }

                    i.hasClass("loading") || i.addClass("loading"), y.searchTour.hotelsFunction.arrayHotelScroll.length = 0, y.searchTour.hotelsFunction.arrayHotelAll.length = 0, void (y.searchTour.hotelsFunction.arrayHotelSelected.length = 0) === e.hotels ? $.ajax({
                        type: "POST",
                        url: "/toutvisor/ajax.php?action=getRegion",
                        data: {country_id: $('select[name="country"]').val(), onlyHotels: !0}
                    }).done(function (t) {
                        y.searchTour.hotelsFunction.arrayHotelScroll = t.lists.hotels.hotel, s()
                    }).fail(function (t, e) {
                        console.log(t)
                    }) : (y.searchTour.hotelsFunction.arrayHotelScroll = e.hotels.hotel, s())
                },
                loadHotelMore: function () {
                    for (var t = 0; t < y.searchTour.hotelsFunction.arrayHotelScroll.length && 50 !== t; t++) {
                        var e = "";
                        -1 !== $.inArray(y.searchTour.hotelsFunction.arrayHotelScroll[t].id, y.searchTour.hotelsFunction.arrayHotelSelected) && (e = "checked"), y.searchTour.hotelsFunction.$hotels.append('<label class="control control-checkbox">' + y.searchTour.hotelsFunction.arrayHotelScroll[t].name + "&nbsp;" + y.searchTour.hotelsFunction.arrayHotelScroll[t].stars + '*<input class="hotel_checkbox" name="hotels[]" type="checkbox"data-value="' + y.searchTour.hotelsFunction.arrayHotelScroll[t].name + '" ' + e + ' value="' + y.searchTour.hotelsFunction.arrayHotelScroll[t].id + '"><span class="control_indicator"></span></label>')
                    }
                    y.searchTour.hotelsFunction.arrayHotelScroll.splice(0, t)
                },
                prebuildArray: function () {
                    for (var t = parseInt($(".choice_rating__star.active").attr("data-rate")), i = [], s = [], e = t; e <= 5; e++) i.push(e);
                    y.searchTour.hotelsFunction.$resortContainer.find(".region_checkbox").each(function (t, e) {
                        e.checked && s.push(e.value)
                    }), y.searchTour.hotelsFunction.$hotelSearchTabsSelection.removeClass("active"), y.searchTour.hotelsFunction.$hotelSearchTabsAll.addClass("active"), y.searchTour.hotelsFunction.arrayHotelScroll.length = 0, y.searchTour.hotelsFunction.$hotels.empty().animate({scrollTop: 0}, 0), $.each(y.searchTour.hotelsFunction.arrayHotelAll, function (t, e) {
                        -1 !== $.inArray(parseInt(e.stars), i) && y.searchTour.hotelsFunction.arrayHotelScroll.push(e)
                    }), 0 !== s.length ? (y.searchTour.hotelsFunction.$regionAnyCheckbox.prop("checked", !1), y.searchTour.hotelsFunction.arrayHotelScroll = y.searchTour.hotelsFunction.arrayHotelScroll.filter(function (t) {
                        return -1 !== $.inArray(t.region, s)
                    })) : y.searchTour.hotelsFunction.$regionAnyCheckbox.prop("checked", !0);
                    var a, n = y.searchTour.hotelsFunction.$hotelsSearchInput.val().toLowerCase();
                    0 === y.searchTour.hotelsFunction.$hotelsSearchInput.val().length ? y.searchTour.hotelsFunction.arrayHotelScroll = y.searchTour.hotelsFunction._toConsumableArray(y.searchTour.hotelsFunction.arrayHotelScroll) : (a = y.searchTour.hotelsFunction.arrayHotelScroll.filter(function (t) {
                        return -1 !== t.name.toLowerCase().indexOf(n)
                    }), y.searchTour.hotelsFunction.arrayHotelScroll = y.searchTour.hotelsFunction._toConsumableArray(a)), y.searchTour.hotelsFunction.loadHotelMore()
                },
                renderHotelTabs: function () {
                    0 !== y.searchTour.hotelsFunction.arrayHotelSelected.length ? (y.searchTour.hotelsFunction.$hotelsSearchInput.addClass("focus"), y.searchTour.hotelsFunction.$hotelsSearchTabs.removeClass("hidden"), y.searchTour.hotelsFunction.$hotelSearchTabsSelection.children("span").text(y.searchTour.hotelsFunction.arrayHotelSelected.length)) : (y.searchTour.hotelsFunction.$hotelsSearchInput.removeClass("focus"), y.searchTour.hotelsFunction.$hotelsSearchTabs.addClass("hidden"))
                },
                _toConsumableArray: function (t) {
                    return y.searchTour.hotelsFunction._arrayWithoutHoles(t) || y.searchTour.hotelsFunction._iterableToArray(t) || y.searchTour.hotelsFunction._nonIterableSpread()
                },
                _nonIterableSpread: function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                },
                _iterableToArray: function (t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                },
                _arrayWithoutHoles: function (t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                        return i
                    }
                }
            }
        }, liveStream: {
            $obj: $(".announceStream"), updateInterval: null, time: null, init: function () {
                0 < y.liveStream.$obj.length && (y.liveStream.updateInterval = setInterval(y.liveStream.announceStream.updateTimer, 6e4))
            }, announceStream: {
                updateTimer: function () {
                    var t = parseInt((new Date).getTime() / 1e3);
                    if (null === y.liveStream.time) return y.liveStream.time = t, !1;
                    var e = (t - y.liveStream.time) / 60, i = y.liveStream.$obj.find("time"),
                        s = i.siblings(".timeText");
                    y.liveStream.time = t, t = Math.round(parseInt(i.text()) - e), i.text(t), t <= 0 ? y.liveStream.$obj.addClass("active") : 9 < t && t < 20 ? s.text("минут") : 1 == (t %= 10) ? s.text("минуту") : 1 < t && t < 5 ? s.text("минуты") : s.text("минут")
                }
            }
        }, scrollTop: {
            init: function () {
                $(".scroll_top").on("click", function (t) {
                    t.preventDefault(), $("html, body").animate({scrollTop: 0}, "fast")
                })
            }
        }, aside_interview: {
            init: function () {
                $('#aside_interview input[type="radio"]').on("change", y.aside_interview.nextStep), $("#aside_interview .interview_answer__btn-next").on("click", function (t) {
                    t.preventDefault(), y.aside_interview.nextStep()
                }), $("#aside_interview .interview_answer__btn").on("click", function (t) {
                    t.preventDefault(), y.aside_interview.nextStep($(this).data("val"))
                }), $("#aside_interview .modal__close").on("click", y.aside_interview.closeInterview)
            }, nextStep: function (t) {
                var e = 0 < arguments.length && void 0 !== t ? t : null,
                    i = $("#aside_interview .interview_item.active").data(), s = {answer: {question_id: i.question_id}};
                null !== e && (s.answer.answers = e), s = y.aside_interview.getData(s, i.type), y.aside_interview.pushData(1, s)
            }, closeInterview: function () {
                var t = $("#aside_interview .interview_item.active").data(),
                    e = {answer: {question_id: t.question_id, closed: 1}}, e = y.aside_interview.getData(e, t.type);
                y.aside_interview.pushData(0, e), $("#aside_interview").detach()
            }, getData: function (t, e) {
                switch (t.request = "interviewAnswer", t[$("#csrf").data("name")] = $("#csrf").data("value"), t.answer.city_id = $("#aside_interview").data("city"), t.answer.interview_id = $("#aside_interview").data("interview_id"), e) {
                    case"radio":
                        t.answer.answers = $("#aside_interview .interview_item.active input:checked").val();
                        break;
                    case"checkbox":
                        t.answer.answers = [];
                        var i = $("#aside_interview .interview_item.active input:checked").serializeArray();
                        for (var s in i) t.answer.answers.push(i[s].value);
                        break;
                    case"text":
                        t.answer.answers = $("#aside_interview .interview_item.active textarea").val()
                }
                return t
            }, pushData: function (s, t) {

            }
        }, stages: {
            init: function () {
                $("body").on("click", ".list_item", y.stages.clickIndicatorStage), $("body").on("click", ".stage_item__btn_next", y.stages.btnNext)
            }, indicatorStageTimer: null, clickIndicatorStage: function () {
                var t, e, i, s, a, n = $(this);
                !n.hasClass("active") && n.hasClass("unlock") && (t = n.closest(".stages_wrapper"), null !== y.stages.indicatorStageTimer && (clearTimeout(y.stages.indicatorStageTimer), t.find(".list_item").remove("checked active")), e = t.find(".stages_inner .stage_item").removeClass("active"), s = (i = t.find(".list_item")).filter(".active"), a = n.index(), 0 < s.length ? (s = s.index(), i.removeClass("active")) : s = 0, n.addClass("active"), y.stages.toggleIndicatorList({
                    lists: i,
                    maxIndex: a,
                    indexActive: s,
                    data: t.find(".stages_list").data()
                }), e.eq(a).addClass("active"))
            }, toggleIndicatorList: function (t) {
                if (void 0 === t.index && (t.maxIndex < t.indexActive ? t.index = t.indexActive - 1 : t.index = t.indexActive), t.maxIndex < t.indexActive && t.index >= t.maxIndex) $(t.lists).eq(t.index).removeClass("checked"); else {
                    if (!(t.maxIndex > t.indexActive && t.index < t.maxIndex)) return null !== y.stages.indicatorStageTimer && clearTimeout(y.stages.indicatorStageTimer), !(y.stages.indicatorStageTimer = null);
                    $(t.lists).eq(t.index).hasClass("checked") || $(t.lists).eq(t.index).addClass("checked")
                }
                t.index = t.maxIndex < t.indexActive ? t.index - 1 : t.index + 1, void 0 === t.data.animation || "true" == t.data.animation ? y.stages.indicatorStageTimer = setTimeout(y.stages.toggleIndicatorList, 500, t) : y.stages.toggleIndicatorList(t)
            }, btnNext: function (t) {
                t.preventDefault();
                var e, i = $(this), s = i.closest(".stages_wrapper"), a = i.closest(".stage_item").index(),
                    n = s.find(".stage_item:eq(".concat(a + 1, ")"));
                0 < n.length && y.submitForm.validationCheck(i.closest("form")) && (i.closest(".stage_item").removeClass("active"), n.addClass("active"), e = s.find(".stages_list .list_item"), null !== y.stages.indicatorStageTimer ? (e.removeClass("checked active"), clearTimeout(y.stages.indicatorStageTimer), s.find(".list_item").remove("checked active"), y.stages.toggleIndicatorList({
                    lists: e,
                    maxIndex: a + 1,
                    indexActive: 0,
                    data: s.find(".stages_list").data()
                })) : e.eq(a).addClass("checked").removeClass("active"), e.eq(a + 1).addClass("unlock active"))
            }
        }, submitForm: {
            init: function () {
                $("body").on("click.submitAjax", 'input[type="submit"]:not(.insertForm,[data-noajax="true"]),button[type="submit"]:not(.insertForm,[data-noajax="true"])', y.submitForm.submitAjax)
            }, submitAjax: function (t) {
                t.preventDefault();
                var s, e, i = $(this), a = i.closest("form"), n = !0;
                return y.submitForm.validationCheck(a) || (n = !1), onlineBuyValid() || (n = !1), !!n && (a.hasClass("buy_modal__form_choice") ? (s = new FormData, e = a.find("input, select, textarea"), $.each(e, function (t, e) {
                    var i = $(e).closest("form, .buy_modal__choice_item");
                    (i.hasClass("active") || i.hasClass("buy_modal__form_choice")) && s.set($(e).attr("name"), $(e).val())
                })) : s = new FormData(a.get(0)), s.set($("#csrf").data("name"), $("#csrf").data("value")), i.addClass("disabled"), s.append("cities", JSON.stringify(y.searchCompanion.arrayCity)), s.append("countries", JSON.stringify(y.searchCompanion.arrayCountry)), $.ajax({
                    url: a.attr("action"),
                    type: void 0 === a.attr("method") ? "POST" : a.attr("method"),
                    data: s,
                    processData: !1,
                    contentType: !1,
                    headers: {csrf_test_name: $("#csrf").data("value")}
                }).done(function (t) {
                    t.success == true  ? y.submitForm.runAction(t.actList, t.returnMessage, i) : y.returnAlert({
                        icon: "close",
                        title: "Произошла ошибка",
                        subtitle: void 0 === t.status.text ? "Попробуйте повторить позже" : t.status.text
                    });
                    var e = a.attr("id");
                    void 0 !== e && "" != e || (e = a.data("gtm")), void 0 !== e && "" != e && dataLayer.push({event: e}), i.removeClass("disabled")
                }).fail(function () {
                    y.returnAlert({icon: "close", title: "Произошла ошибка", subtitle: "Попробуйте повторить позже"})
                }), !0)
            }, validationCheck: function (t, e) {
                var a = t.find('input[type="radio"]'), o = new Map;
                0 < a.length && $.each(a, function (t) {
                    var e, i, s = $(a[t]);
                    s.hasClass("required") && (e = s.attr("name"), i = s.prop("checked"), o.has(e) && 1 != i || o.set(e, i))
                });
                var r = t.find(".required"), l = !0;
                return 0 < r.length && $.each(r, function (t) {
                    var e = $(r[t]), i = e.parent(),
                        s = e.closest("form, .buy_modal__choice_item, .reviews_modal__step, .stage_item");
                    if ((s.hasClass("buy_modal__choice_item") || s.hasClass("reviews_modal__step") || s.hasClass("stage_item")) && s.is(":hidden")) return !0;
                    switch (e.attr("type") || e.type) {
                        case"radio":
                            0 == o.get(e.attr("name")) ? (i.parent().addClass("unvalid"), l = !1) : i.parent().removeClass("unvalid");
                            break;
                        case"checkbox":
                            0 == (e.checked || e.prop("checked")) ? (i.addClass("unvalid"), l = !1) : i.removeClass("unvalid");
                            break;
                        default:
                            var a = e.data();
                            if ($.isEmptyObject(a) || $.each(a, function (t) {
                                /^valid_[\S]+/i.test(t) ? a[t] = t.replace("valid_", "") : delete a[t]
                            }), $.isEmptyObject(a)) e.hasClass("js-search-p") ? "Не выбрано" !== e.text() ? i.removeClass("unvalid") : (i.addClass("unvalid"), l = !1) : e.hasClass("phone-mask-form") ? (e.hasClass("whatsapp") ? -1 != e.val().indexOf("_") : -1 != e.val().indexOf("_") || "" === e.val()) ? (i.addClass("unvalid"), l = !1) : i.removeClass("unvalid") : /[\S]+/i.test(e.val()) ? e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.removeClass("unvalid") : i.removeClass("unvalid") : (e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.addClass("unvalid") : i.addClass("unvalid"), l = !1); else for (var n in a) switch (a[n]) {
                                case"сyrillic":
                                    /^[а-я]+$/i.test(e.val()) ? e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.removeClass("unvalid") : i.removeClass("unvalid") : (e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.addClass("unvalid") : i.addClass("unvalid"), l = !1);
                                    break;
                                case"latin":
                                    /^[a-z]+$/i.test(e.val()) ? e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.removeClass("unvalid") : i.removeClass("unvalid") : (e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.addClass("unvalid") : i.addClass("unvalid"), l = !1);
                                    break;
                                case"number":
                                    /^[0-9]+$/i.test(e.val()) ? e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.removeClass("unvalid") : i.removeClass("unvalid") : (e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.addClass("unvalid") : i.addClass("unvalid"), l = !1);
                                    break;
                                case"mix":
                                    /^[a-z0-9]+$/i.test(e.val()) ? e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.removeClass("unvalid") : i.removeClass("unvalid") : (e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.addClass("unvalid") : i.addClass("unvalid"), l = !1);
                                    break;
                                case"email":
                                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]+)$/i.test(e.val()) ? e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.removeClass("unvalid") : i.removeClass("unvalid") : (e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.addClass("unvalid") : i.addClass("unvalid"), l = !1);
                                    break;
                                case"any":
                                    /[\D]+/.test(e.val()) ? e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.removeClass("unvalid") : i.removeClass("unvalid") : (e.hasClass("m-form__input") || e.hasClass("inputValidJS") ? e.addClass("unvalid") : i.addClass("unvalid"), l = !1)
                            }
                    }
                }), l
            }, getActObj: function (t, e) {
                switch (e.type) {
                    case"closest":
                        return t.closest(e.selector);
                    case"find":
                        return t.find(e.selector);
                    case"selector":
                        return $(e.selector);
                    case"link":
                        return document.location;
                    default:
                        return t
                }
            }, runAction: function (t, e, i) {
                var s = 0 < arguments.length && void 0 !== t ? t : void 0,
                    a = 1 < arguments.length && void 0 !== e ? e : void 0,
                    n = 2 < arguments.length && void 0 !== i ? i : void 0;
                if (void 0 !== s) for (var o in s) if ("object" == _typeof(s[o].obj.type) && null !== s[o].obj.type) {
                    var r = n;
                    for (var l in s[o].obj.type) for (var c in r = y.submitForm.getActObj(r, {
                        type: s[o].obj.type[l],
                        selector: s[o].obj.selector[l]
                    }), s[o].actItems[l]) y.submitForm.takingAction(r, s[o].actItems[l][c])
                } else {
                    var h = y.submitForm.getActObj(n, s[o].obj);
                    for (var d in s[o].actItems) y.submitForm.takingAction(h, s[o].actItems[d])
                }
                if (void 0 !== a) switch (a.type) {
                    case"default":
                        var u = "" == a.title || void 0 === a.title || null === a.title ? "Заявка отправлена" : a.title,
                            p = void 0 === a.message || null === a.message ? "" : a.message;
                        y.returnAlert({icon: !0 === a.status ? "check" : "close", title: u, subtitle: p})
                } else y.returnAlert({icon: "check", title: "Заявка отправлена"})
            }, takingAction: function (t, e) {
                switch (e.act.type) {
                    case"class":
                        switch (e.act.subType) {
                            case"add":
                                t.addClass(e.val);
                                break;
                            case"remove":
                                t.removeClass(e.val);
                                break;
                            case"toggle":
                                t.toggleClass(e.val)
                        }
                        break;
                    case"html":
                    case"text":
                        var i = "";
                        switch (e.act.subType) {
                            case"add_before":
                                i = e.val + t.html();
                                break;
                            case"add_after":
                                i = t.html() + e.val;
                                break;
                            case"replace":
                                i = e.val
                        }
                        "html" == e.act.type ? t.html(i) : t.text(i);
                        break;
                    case"attr":
                        t.attr(e.val);
                        break;
                    case"link":
                        switch (e.act.subType) {
                            case"reload":
                                t.reload();
                                break;
                            case"update":
                                t.href = e.val
                        }
                }
                return !0
            }, reservation: function (t) {
                var e, i, s, a;
                t.preventDefault(), $(this).hasClass("disabled") || (e = $(this).closest("form"), i = y.submitForm.validationCheck(e), onlineBuyValid() || (i = !1), i && ((s = $("<form>", {
                    action: $(this).attr("href"),
                    method: "POST",
                    id: "formReservation",
                    target: "_blank",
                    style: "display:none;"
                })).appendTo($(document.body)), a = e.find("input, select, textarea"), $.each(a, function (t, e) {
                    var i = $(e).closest("form, .buy_modal__choice_item");
                    (i.hasClass("active") || i.hasClass("buy_modal__form_choice")) && s.append($(e).clone())
                }), s.submit().remove()))
            }
        }, share: {
            init: function () {
                $(".share-link_opening, .share-link_head .modal__close").on("click", function (t) {
                    t.preventDefault(), $("body").toggleClass("over-hide"), $(this).hasClass("modal__close") ? $(this).closest(".share-link_wrap").toggleClass("open") : $(this).siblings(".share-link_wrap").toggleClass("open")
                }), $("a.share-link_item").on("click", function (t) {
                    var e = $(this), i = e.closest(".share-link_wrap"), s = i.data(), a = "";
                    switch (e.data("share_in")) {
                        case"wa":
                            a = "https://wa.me/?text=" + encodeURIComponent(s.url), void 0 !== s.title && "" != s.title.trim() && (a += " - " + encodeURIComponent(s.title));
                            break;
                        case"tg":
                            a = "https://t.me/share/url?url=" + encodeURIComponent(s.url), void 0 !== s.title && (a += "&text=" + encodeURIComponent(s.title));
                            break;
                        case"tw":
                            a = "https://twitter.com/share?url=" + encodeURIComponent(s.url), void 0 !== s.title && (a += "&text=" + encodeURIComponent(s.title));
                            break;
                        case"fb":
                            a = "https://www.facebook.com/sharer/sharer.php?u=" + s.url;
                            break;
                        case"ok":
                            a = "https://connect.ok.ru/offer?url=" + encodeURIComponent(s.url), void 0 !== s.title && (a += "&title=" + encodeURIComponent(s.title)), void 0 !== s.description && (a += "&description=" + encodeURIComponent(s.description)), void 0 !== s.image && (a += "&imageUrl=" + encodeURIComponent(s.image));
                            break;
                        case"copy":
                            return e.find("input").select(), document.execCommand("copy"), i.removeClass("open"), !0;
                        default:
                            a = "https://vk.com/share.php?url=" + encodeURIComponent(s.url), void 0 !== s.title && (a += "&title=" + encodeURIComponent(s.title)), void 0 !== s.description && (a += "&description=" + encodeURIComponent(s.description)), void 0 !== s.image && (a += "&image=" + encodeURIComponent(s.image)), a += "&noparse=true"
                    }
                    var n = "toolbar=0,status=0,scrollbars=1,width=600,height=400";
                    n += ",top=" + .5 * (screen.height - 400), n += ",left=" + .5 * (screen.width - 600), window.open(a, "", n) ? t.preventDefault() : $(this).attr({
                        target: "_blank",
                        href: a
                    });
                    var o = {request: "addSharedPage", url: s.url};
                    o[$("#csrf").data("name")] = $("#csrf").data("value"), $.ajax({
                        url: "/ajax/callback/",
                        type: "POST",
                        data: o
                    }), i.removeClass("open")
                })
            }
        }, lazyLoad: {
            objList: $('[data-lazyload="true"]').splice(0), init: function () {
                if (0 < this.objList.length) {
                    var t = $(window).scrollTop() + 1.5 * $(window).height();
                    for (var e in this.objList) {
                        var i = $(this.objList[e]);
                        if (!(i.offset().top - t <= 0)) return !1;
                        switch (i.data("lazyload_type")) {
                            case"trigger":
                                y.lazyLoad.objList.splice(e, 1), i.trigger("lazyload");
                                break;
                            case"template":
                                y.lazyLoad.objList.splice(e, 1), i.append($(i.data("template")).get(0).content)
                        }
                    }
                }
            }
        }, closeAlert: {
            init: function () {
                $(".header-announce__close").on("click", function () {
                    set_cookie("closedAnnouncement", $(this).closest(".header-announce__wrap").data("announcement_id")), $(this).closest(".header-top").detach()
                })
            }
        }, returnAlert: function (t) {
            var e = 0 < arguments.length && void 0 !== t ? t : {};
            return $.arcticmodal("close"), void 0 !== e.icon && "" != e.icon.trim() || (e.icon = "close"), void 0 === e.title && (e.title = ""), void 0 === e.subtitle && (e.subtitle = ""), $("#responseToRequest .modal_body__top-title").text(e.title), $("#responseToRequest .modal_body__top-message").text(e.subtitle), $("#responseToRequest").arcticmodal(), !0
        }
    };
    y.init()
});
var monthsByNumbers = {
    "01": "Янв",
    "02": "Фев",
    "03": "Мар",
    "04": "Апр",
    "05": "Май",
    "06": "Июн",
    "07": "Июл",
    "08": "Авг",
    "09": "Сен",
    10: "Окт",
    11: "Ноя",
    12: "Дек"
};

function correctedUnderTabs(t) {
    return void 0 !== t.title ? t.title : "getHolidayToursForCity" == t.method ? $obj.text() : "Горящие туры и путевки"
}

function getInstallmentPrice(t, e, i) {
    return Math.round((t * i * .01 + t) / e)
}

function declensionByNumber(t, e, i, s) {
    var a = 20 < t ? t % 10 : t;
    return 1 == a ? e : 2 <= a && a <= 4 ? i : s
}

function addGetParamInUrl(t, e, s) {
    if (new_url = "", -1 === t.indexOf(e)) new_url = -1 !== t.indexOf("?") ? t + "&" + e + "=" + s : t + "?" + e + "=" + s; else {
        for (get = t.split("?"), get_param = get[1].split("&"), new_get_param = "?", i = 0; i < get_param.length; i++) -1 !== get_param[i].indexOf(e) && (get_param[i] = get_param[i].substring(0, get_param[i].indexOf("=") + 1), get_param[i] = get_param[i] + s), new_get_param = new_get_param + get_param[i] + "&";
        new_url = get[0] + new_get_param, new_url = new_url.substring(0, new_url.length - 1)
    }
    return new_url
}

var departure, page, $tMenu, tMenuTop, month = {
    "Январь": "01",
    "Февраль": "02",
    "Март": "03",
    "Апрель": "04",
    "Май": "05",
    "Июнь": "06",
    "Июль": "07",
    "Август": "08",
    "Сентябрь": "09",
    "Октябрь": "10",
    "Ноябрь": "11",
    "Декабрь": "12"
}, __month = {
    "Январь": 0,
    "Февраль": 1,
    "Март": 2,
    "Апрель": 3,
    "Май": 4,
    "Июнь": 5,
    "Июль": 6,
    "Август": 7,
    "Сентябрь": 8,
    "Октябрь": 9,
    "Ноябрь": 10,
    "Декабрь": 11
}, likeFeedBack = [];

function mf_height_function() {
    var t = $("footer").innerHeight();
    $("body").css("padding-bottom", t + "px")
}

function addRemoveActive(t) {
    t.hasClass("active") ? t.removeClass("active") : t.addClass("active")
}

function toggleActiveCard(t) {
    var e = $(this).closest(".card-n");
    e.find(".card-n__back").length && (t.preventDefault(), addRemoveActive(e), e.find(".card-n__list, .card-n__all-dates").removeClass("active"))
}

function toggleAllDates() {
    $(this).addClass("active").closest(".card-n__back").children(".card-n__list").addClass("active")
}

function onlineBuyValid() {
    var t = $('#newRequestBuyTourModal input[name="data[payment_method]"]').val();
    if (void 0 === t || "office" === t) return !0;
    for (var e = !0, i = new Date, s = i.getFullYear() + "-" + ("0" + (i.getMonth() + 1)).slice(-2) + "-" + ("0" + i.getDate()).slice(-2), a = [".dateOfBirth", ".validUntil"], n = 0; n < a.length; n++) for (var o = $(t).find(a[n]), r = 0; r < o.length; r++) {
        var l = $(o[r]).find(".input_item .required");
        if (0 < l.length) {
            var c = $(l[2]).val() + "-" + $(l[1]).val() + "-" + $(l[0]).val();
            switch (a[n]) {
                case".dateOfBirth":
                    0 != c.search(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) || c < "1900-01-01" || s < c || l[0] < 1 || 31 < l[0] || l[1] < 1 || 12 < l[1] ? ($(o[r]).find(".input_item-trio").addClass("unvalid"), e = !1) : $(o[r]).find(".input_item-trio").removeClass("unvalid");
                    break;
                case".validUntil":
                    0 != c.search(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/) || c <= s || l[0] < 1 || 31 < l[0] || l[1] < 1 || 12 < l[1] ? ($(o[r]).find(".input_item-trio").addClass("unvalid"), e = !1) : $(o[r]).find(".input_item-trio").removeClass("unvalid")
            }
        }
    }
    return e
}

function set_cookie(t, e) {
    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, s = t + "=" + escape(e), a = new Date;
    void 0 === i.expires && (i.expires = 2592e3), void 0 === i.path && (i.path = "/"), a.setTime(a.getTime() + parseInt(i.expires)), s += "; path=" + i.path + "; expires=" + a.toUTCString(), document.cookie = s
}

function get_cookie(t) {
    var e = document.cookie.match("(^|;) ?" + t + "=([^;]*)(;|$)");
    return e ? unescape(e[2]) : null
}

function setLikeForFeedback(e) {
    var t = "string" == typeof (t = get_cookie("likes")) || t instanceof String ? t.split(",") : [];
    if (!($.inArray(String(e), t) < 0)) return !1;
    t.push(e), set_cookie("likes", t), $.ajax({
        type: "POST",
        url: "/ajax/likefeedback/",
        data: {id: e},
        success: function (t) {
            "true" == t.success && $("#like-" + e).html(Number($("#like-" + e).text()) + 1)
        },
        error: function (t) {
            alert("Возникла ошибка: " + t.responseCode)
        }
    })
}

function feedBackStar(t, e) {
    $("input#" + e).val(t)
}

function selectStaff(t, e) {
    $("input#staff_name").val(t), $("input#staff_id").val(e)
}

function getToursForCity(i) {
    event.preventDefault();
    var s = $(i.target), a = s.data();
    $.ajax({
        url: null == a.method ? "/ajax/" : "/ajax/" + a.method + "/",
        headers: {csrf_token: $("#csrf").data("value")},
        type: "POST",
        data: a
    }).done(function (t) {
        if (t.success == true) {
            var e = s.closest(".card-n-list");
            switch (s = null != a.target ? $(a.target) : null != a.parent ? s.closest(a.parent) : e.find(".card-n-row"), t.workType) {
                case"append":
                    s.append(t.html).find(".card-n-wrap > .card-n");
                    e.find(".moreTourBtn__wrap").detach();
                    break;
                default:
                    s.html(t.html).find(".card-n-wrap > .card-n")
            }
            1 == a.update_title && $(i.target).closest(".dropdown.dropdown--sp").find(".jsTitle_city").text($(i.target).text())
        } else getErrorAlert("Что-то пошло не так", "Попробуйте повторить позже, предварительно обновив страницу")
    }).fail(function () {
        getErrorAlert("Что-то пошло не так", "Попробуйте повторить позже, предварительно обновив страницу")
    })
}

function modalValid(t) {
    for (var e = 0, i = 0; i < t.length; i++) {
        var s, a,
            n = (n = $(t[i])).hasClass("m-form__input") || n.hasClass("inputValidJS") ? $(t[i]) : $(t[i]).parent();
        switch (t[i].type) {
            case"text":
            case"hidden":
            case"number":
                if (1 != $(t[i]).data("reg")) {
                    if ("star validJS" == t[i].className) {
                        "" == t[i].value.trim() ? (s = $(t[i]).attr("id"), n.find("." + s + "Star").attr("style", "border: 1px solid red; border-radius: 5px;"), e++) : (a = $(t[i]).attr("id"), n.find("." + a + "Star").attr("style", "border: 1px solid #59ca1c; border-radius: 5px;"));
                        continue
                    }
                    if ($(t[i]).hasClass("emailJS")) {
                        if (reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]+)$/i, reg.test($(t[i]).val())) {
                            n.attr("style", "border: 1px solid #59ca1c; border-radius: 5px;");
                            continue
                        }
                        n.attr("style", "border: 1px solid red; border-radius: 5px;"), e++;
                        continue
                    }
                    if ("" == t[i].value.trim()) {
                        n.attr("style", "border: 1px solid red; border-radius: 5px;"), e++;
                        continue
                    }
                    n.attr("style", "border: 1px solid #59ca1c; border-radius: 5px;");
                    continue
                }
                if (1 == $(t[i]).data("сyrillic") && 0 == $(t[i]).val().search(/^[а-я]+$/i)) {
                    n.attr("style", "border: 1px solid #59ca1c; border-radius: 5px;");
                    continue
                }
                if (1 == $(t[i]).data("latin") && 0 == $(t[i]).val().search(/^[a-z]+$/i)) {
                    n.attr("style", "border: 1px solid #59ca1c; border-radius: 5px;");
                    continue
                }
                if (1 == $(t[i]).data("number") && 0 == $(t[i]).val().search(/^[0-9]+$/)) {
                    n.attr("style", "border: 1px solid #59ca1c; border-radius: 5px;");
                    continue
                }
                if (1 == $(t[i]).data("mix") && 0 == $(t[i]).val().search(/^[a-z0-9]+$/i)) {
                    n.attr("style", "border: 1px solid #59ca1c; border-radius: 5px;");
                    continue
                }
                $(t[i]).parent().attr("style", "border: 1px solid red; border-radius: 5px;"), e++;
                break;
            case"textarea":
                "" == t[i].value.trim() ? (n.attr("style", "border: 1px solid red; border-radius: 5px;"), e++) : n.attr("style", "border: 1px solid #59ca1c; border-radius: 5px;");
                break;
            case"checkbox":
                0 == t[i].checked ? ($(t[i]).siblings("span").attr("style", "border: 1px solid red; border-radius: 5px;"), e++) : $(t[i]).siblings("span").removeAttr("style")
        }
    }
    return e
}

function openHotelManual(t) {
    $("#tvHotel").attr("src", t), $(".tvHotel").arcticmodal(), dataLayer.push({event: "openHotelGTM"})
}

function getErrorAlert(t, e) {
    $(".returnServer").find("svg use").attr("xlink:href", "/assets/img/sprite.svg#close"), $(".returnServer").children(".title_head").text(t), $(".returnServer").children(".subText").text(e), $(".returnServerModal").arcticmodal()
}

function confirm_city_button__yes() {
    $(".card_confirm_city").detach();
    var t = new Date;
    t.setFullYear(t.getFullYear() + 10), document.cookie = "city_confirmed=1; expires=" + t + "; path=/;"
}

function confirm_city_button__no() {
    $(".card_confirm_city").detach(), $(window).width() < 767 ? $(".header-mobile__item > .dropdown > .dropdown__title").trigger("click") : $(".dropdown.dropdown--slide").trigger("click")
}

function toptourCard(t) {
    t.preventDefault(), $(this).children(".table_hover").toggleClass("hover_item")
}

function hidemaxday(t) {
    var e = 23, i = t - 1;
    for ($("a.maxdays").hide(); i < e; e--) $("a.maxdays-" + e).show();
    $("a.maxdays").closest("div.input_item.dropdown.before").find("p").html(t + 4), $("input#search_night_min").val(t)
}

function changeMaxDays(t) {
    $("input#search_night_max").val(t)
}

function checkPageModal(t) {
    return !(0 < modalValid($(t).closest("form").find(".reviews_modal__step.active .validJS")))
}

function buyModalСheckbox() {
    var t = $(this).closest(".buy_modal__passport").find(".js-buyModal-wrapper-passport .passport_data");
    this.checked ? (t.slideUp("fast").removeClass("active"), t.find("input,textarea").removeClass("required").each(function () {
        $(this).hasClass("genderForModalBuyTour") || $(this).val("")
    })) : (t.slideDown("fast").addClass("active"), t.find("input,textarea").addClass("required"))
}

function sendPostToUrl(t) {
    var e = $("<form>", {action: t, method: "POST", id: "formReservation", target: "_blank", style: "display:none;"});
    e.appendTo($(document.body)), e.append($("#buyTourGTM").find("input").clone()), e.submit(), e.detach()
}

function setProgressIndicator(t) {
    return $(".box_loader_procent").html(t + "%"), !0
}

function sleep(e) {
    return new Promise(function (t) {
        return setTimeout(t, e)
    })
}

function getTextNight(t) {
    return 1 == t || 21 == t ? "ночь" : t < 5 ? "ночи" : "ночей"
}

function addMoTabsItem(t, e) {
    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
        s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "";
    null === i && (i = {
        office_id: 157,
        title: "Офис онлайн",
        address: "",
        type_address: ""
    }), t.append('<div class="mo-tabs__item" data-office-id="' + i.office_id + '"><input ' + (e ? "checked" : "") + ' type="radio" class="mo-tabs__radio required" name="data[office_id]" value="' + i.office_id + '" id="mo_office_' + s + i.office_id + '"><label for="mo_office_' + s + i.office_id + '" class="mo-tabs__label"><span class="mo-tabs__label-title">' + i.title + "</span>" + ("" == i.address ? "" : '<span class="mo-tabs__label-metro">' + ("metro" == i.type_address ? "<i>м</i> " : "") + i.address + "</span>") + "</label></div>")
}


$(document).ready(function () {
    var t, n;
    0 < $(".js-anchor").length && (t = function () {
        var a = $(window).scrollTop();
        $(".js-anchor").each(function (t, e) {
            var i = $(e).offset().top - (n + 15), s = i + $(e).height();
            i < a && a < s && ($(".visa_side_menu ul li.active a").closest("li").removeClass("active"), $('.visa_side_menu ul li a[href="#' + $(e).attr("id") + '"]').closest("li").addClass("active"))
        })
    }, n = $("header").innerHeight(), $(window).on("scroll", t), t(), $("a[href^='#']").on("click", function () {
        return $obj = $(this), $("html, body").animate({scrollTop: $($obj.attr("href")).offset().top - (n + 15) + "px"}, "fast", function () {
            $(".visa_side_menu ul li.active a").closest("li").removeClass("active"), $obj.closest("li").addClass("active")
        }), !1
    }));
    var i, s, e = $(".intro-contents__row .tour-hint");
    void 0 !== e && 0 < e.length && setInterval(function () {
        $.ajax({url: "/ajax/getLastOrderTour/", type: "GET"}).done(function (t) {
            t.success == true ? e.data("id") != t.id ? (e.data("id", t.id), e.slideUp("slow", function () {
                e.html(t.html), e.slideDown("slow")
            })) : (e.html(t.html), e.slideDown("slow")) : e.slideUp("slow")
        })
    }, 6e4), $(".dropdown--sp > .dropdown__title").click(function () {
        addRemoveActive($(this).parent()), $(this).siblings(".dropdown__list").slideToggle()
    }), $(".dropdown__search").on("input", function () {
        var t = $(this).parent().siblings(".dropdown__list-item"), e = $(this).val().toLowerCase();
        t.each(function () {
            -1 === $(this).text().toLowerCase().indexOf(e) ? $(this).hide() : $(this).show()
        })
    }), $(".menu-btn").click(function () {
        $(".mobile-menu").slideToggle()
    }), $(".dropdown--office li").click(function (t) {
        var e = $(this).data("phone"), i = e.replace(/\D/g, ""), s = $(this).data("address");
        $(".dropdown--office .dropdown__title span").text(s), $(".header-phone").text(e), $(".header-phone").attr("href", "tel:" + i), $(".dropdown").removeClass("active"), $(".dropdown__list").slideUp()
    }), $(".chose-o__link").click(function (t) {
        t.preventDefault(), $(this).hasClass("header-bottom__item--city_link") && $("#chose_office .chose-o-close__link").trigger("click"), $(this).siblings().removeClass("active"), $(this).addClass("active");
        var e = $(this).attr("href");
        $(".chose-o-city").not(e).removeClass("active"), $(e).addClass("active"), 768 < $(window).width() && $(".office-personal-slider").slick("setPosition")
    }), $(".office-tabs__item").click(function () {
        $(this).siblings().removeClass("active");
        var t = $(this).attr("href");
        $(this).parent().siblings(".office-content").find(".office-content__item").not(t).removeClass("active"), $(t).addClass("active"), 768 < $(window).width() ? ($(this).addClass("active"), $(".office-personal-slider").slick("setPosition")) : ($(this).hasClass("active") || ($(".office-tabs__item").removeClass("active"), $(this).addClass("active")), $(this).find(".office-tabs__item-info").hasClass("active") || ($(".office-content__item").removeClass("active"), $(".office-tabs__item-info").removeClass("active")));
        var e = $(this).find(".address").text(), i = $(this).find(".phone").text(), s = i.replace(/\D/g, "");
        $(".dropdown-link__title span").text(e), $(".header-phone").text(i).attr("href", "tel:" + s);
        var a = new Date;
        a.setFullYear(a.getFullYear() + 1), document.cookie = "activeOfficeId=" + $(this).data("office_id") + "; expires=" + a + "; path=/;"
    }), $(".office-tabs__item-info:not(.info-whatsapp)").click(function () {
        var t = $(this).parent().attr("href");
        $(t).insertAfter($(this).parent()), $(this).hasClass("active") ? ($(this).removeClass("active"), $(t).removeClass("active")) : ($(".office-tabs__item-info").removeClass("active"), $(".office-tabs__item").removeClass("active"), $(this).addClass("active"), $(".office-content__item").removeClass("active"), $(t).addClass("active"))
    }), $(".dropdown-link").click(function (t) {
        t.preventDefault(), addRemoveActive($(this));
        var e = $(this).attr("href");
        $(e).slideToggle(), 768 < $(window).width() && $(".office-personal-slider").slick("setPosition")
    }), $(".chose-o-close__link").click(function (t) {
        t.preventDefault(), $("#chose_office").slideUp(), 768 < $(window).width() && $(".office-personal-slider").slick("setPosition"), $(".dropdown-link").removeClass("active"), $(".office-tabs-g__item").removeClass("active")
    }), $(".to-personal").click(function (t) {
        t.preventDefault();
        var e = $(this).parents(".chose-o").first(),
            i = $(this).parents(".office-info").first().siblings(".office-personal");
        e.addClass("active"), i.show()
    }), $(".office-personal__close").click(function (t) {
        t.preventDefault();
        var e = $(this).parents(".chose-o").first();
        $(this).parent().hide(), e.removeClass("active")
    }), $(".office-tabs-g__item").click(function (t) {
        var e;
        t.preventDefault(), $(this).siblings(".office-tabs-g__item").removeClass("active"), $(this).hasClass("active") ? ($(this).removeClass("active"), $(".chose-o-block").slideUp()) : ($(this).addClass("active"), $(".chose-o-block").slideDown(), (e = new Date).setFullYear(e.getFullYear() + 1), document.cookie = "activeOfficeId=" + $(this).data("office_id") + "; expires=" + e + "; path=/;");
        var i = $(this).attr("href");
        $(".office-content__item").not(i).removeClass("active"), $(i).addClass("active"), 768 < $(window).width() && $(".office-personal-slider").slick("setPosition")
    }), $(window).width() < 768 && ($(".card-n").click(function (t) {
        $(this).children(".card-n__back").length && t.preventDefault()
    }), $("body").on("click", ".card-n__front, .card-n__hide-dates", toggleActiveCard).on("click", ".card-n__all-dates", toggleAllDates)), $(".n-city-tabs__link").click(function (t) {
        var e;
        t.preventDefault(), 768 < $(window).width() ? ($(".n-city-tabs__link").removeClass("active"), $(this).addClass("active")) : ((e = $(this).parents(".n-city-tabs__list")).toggleClass("active"), $(this).hasClass("active") || (e.prepend($(this).parent()), $(".n-city-tabs__link").removeClass("active"), $(this).addClass("active")));
        var i = $(this).attr("href");
        $(".n-city-contents__item").not(i).removeClass("active"), $(i).addClass("active")
    }), $(".card-n__text-show").click(function (t) {
        t.preventDefault(), $(this).toggleClass("active"), $(this).parent().toggleClass("active")
    }), $(".partners").slick({
        slidesToShow: 6,
        responsive: [{breakpoint: 1280, settings: {slidesToShow: 4}}, {
            breakpoint: 768,
            settings: {slidesToShow: 1, centerMode: !0}
        }]
    }), $(".open-office").click(function (t) {
        t.preventDefault(), $(this).toggleClass("active"), $(".f-offices").slideToggle("active")
    }), $(".m-form-more").click(function (t) {
        t.preventDefault(), $(this).parents(".m-form").addClass("active")
    }), $(".m-form-less").click(function (t) {
        t.preventDefault(), $(this).parents(".m-form").removeClass("active")
    }), $(".mobile-menu__item--dropdown").click(function () {
        $(this).find(".mobile-menu__sublist").slideToggle(), $(this).toggleClass("active")
    }), $(".timeInput").mask("99:99"), $("#changeCity a").on("click", function (t) {
        t.preventDefault();
        var e, i, s, a = $(t.target).data("cityid");
        "allcity" == a ? window.location.href = "/allcity/" : (e = $(t.target).data("citytitle"), i = $(t.target).data("cityalias"), (s = new Date).setHours(s.getHours() + 1), s = s.toUTCString(), document.cookie = "city_id=" + a + "," + -1 + "," + e + "," + i + ";path=/; expires=" + s, window.location.href = "/" + i + "/")
    }), $("#button-search-home").on("click", function (t) {
        t.preventDefault();
        var e, i = $("#child_list a.active").html();
        0 < i && (e = i + ":", jQuery(".child_age").each(function () {
            e = e + jQuery(this).find("input.child_age__input").val() + ","
        }), $("input#input_child").val(e));
        var s = $("#infatn_list a.active").html();
        0 < s && $("input#input_infant").val(s), document.getElementsByName("searchformhome")[0].submit()
    }), $("#request_tour_button").on("click", function (t) {
        t.preventDefault();
        var e = $("#request_tour_form").serialize();
        $.ajax({
            type: "POST", url: "/ajax/requesttour/", data: e, success: function (t) {
                var e = JSON.parse(t);
                "true" == e.status && ($("#request_tour_form").hide(), $(".request_tour__form_wrap").append('<h3 id="ajaxmessage">' + e.message + "</h3>"))
            }, error: function (t) {
                alert("Возникла ошибка: " + t.responseCode)
            }
        })
    }), $(".form_dropdown a").on("click", function () {
        var t, e = $(this).data("input");
        void 0 === e || (void 0 === (t = $(this).data("value")) && (t = $(this).html()), $("#" + e).val(t))
    }), $("a.staf_rate_click").on("click", function () {
        $("#rating_staf_id_click").val($(this).data("id")), $("#rating_click").val(0), $(".choice_rating__star").removeClass("active")
    }), $("#handlerShowMore").on("click", function (t) {
        t.preventDefault();
        var i = $("#handlerShowMore").attr("rel");
        $.ajax({
            type: "POST", url: "/ajax/feedback/", data: {start: i}, success: function (t) {
                var e = JSON.parse(t);
                "true" == e.status ? ($("#handlerShowMore").parent("div").before(e.message), $("#handlerShowMore").attr("rel", parseInt(i) + 6)) : $("#feedbackcontainer").append(e.message)
            }, error: function (t) {
                alert("Возникла ошибка: " + t.responseCode)
            }
        })
    }), $("#handlerShowMoreInsta").on("click", function (t) {
        t.preventDefault();
        var e = Number($(this).data("start"));
        $.ajax({
            type: "POST", url: "/ajax/instagramm/", data: {start: e}, success: function (t) {
                "true" == (t = JSON.parse(t)).status ? ($("#handlerShowMoreInsta").before(t.message), 0 == t.count ? $("#handlerShowMoreInsta").hide() : $("#handlerShowMoreInsta").data("start", e + 4)) : $("#feedbackcontainer").append(t.message)
            }, error: function (t) {
                alert("Возникла ошибка: " + t.responseCode)
            }
        })
    }), $("div.choice_rating__star").on("click", function () {
        $("#rating_click").val($(this).data("rate"))
    }), $(".email_btn").on("click", function () {
        var t, e = $(".email_input"), i = $(".subscription_email");
        e.focus(), "" !== e.val().trim() && i.hasClass("mail_mail") && (reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]+)$/i, reg.test(e.val()) ? (e.css({color: "#000"}), $(this).addClass("complete").siblings(".email_input").addClass("complete"), $("#sp_email_value").val(e.val()), $("#sp_timestamp").val((new Date).getTime()), t = i.serialize(), $.ajax({
            type: "POST",
            url: "/ajax/emailSubscribe/",
            data: t
        }), e.val("").attr("placeholder", "Вам выслано письмо").prop("disabled", !0), dataLayer.push({event: "subEmailGTM"})) : e.css({color: "red"}))
    }), $(".email_input").focus(function () {
        $(".subscription_email").hasClass("mail_name") || ($(this).attr("placeholder", "Введите  e-mail"), $(".subscription_email").addClass("mail_mail"))
    }), $(".email_icon").on("click", function () {
        windowWidth < 768 && $(this).closest(".scroll_wrapper").addClass("open")
    }), $(".menu_scroll_mobile_arrow").on("click", function () {
        $(this).closest(".scroll_wrapper").removeClass("open")
    }), $("button.btn_email").on("click", function () {
        {
            var t;
            event.preventDefault(), 0 == modalValid($("#subEmailGTM_2").find(".validJS")) && ($(this).addClass("disabled"), t = $("#subEmailGTM_2").append('<input name="' + $("#csrf").data("name") + '" value="' + $("#csrf").data("value") + '">').serialize(), $.ajax({
                type: "POST",
                url: "/ajax/emailSubscribe/",
                data: t,
                success: function (t) {
                    "true" == (t = JSON.parse(t)).status ? $(".one_screen_email__inner form .btn_email").parents(".one_screen_email").siblings(".two_screen_email").animate({top: "0px"}, 500) : getErrorAlert(), $(this).removeClass("disabled"), dataLayer.push({event: "subEmailGTM__2"})
                }
            }))
        }
    }), $(".js-customSelect-search").on("change", function () {
        var t = $(this).children("option:selected").data("value"), e = $(this).data("input");
        $("#" + e).val(t)
    }), 0 < $(".js-visa.country_info").length && $("body").on("click", ".js-visa.country_info .country_info__wrap div button", function () {
        $("#visa_registration_id").val($(this).data("visa")), $(".visa_modal").arcticmodal()
    }), 0 < $(".installment_status").length && ((i = new Audio).src = "https://moihottur.ru/assets/audio/Yamaha-TG100-Ocarina-C5.wav", s = $(".installment_status"), setInterval(function () {
        $.ajax({type: "post", url: "/ajax/getInstallmentStatus", data: {id: s.data("id")}}).done(function (t) {
            var e;
            t = JSON.parse(t), s.data("status") != t.status.code && 2 != t.status.code && ($(".status_item.active").removeClass("active"), (e = $('.status_item[data-status="' + (-1 == t.status.code ? 1 : t.status.code) + '"]').addClass("active")).find(".status_note").html(t.status.note), s.data("status", t.status.code), null != t.status.title && e.find(".status_title .status_text").html(t.status.title), i.play()), s.text(t.status.text)
        })
    }, 1e4)), $("body").on("click", ".tour_subscription-card", function (t) {
        t.preventDefault();
        var e = $(".tour_subscription-modal"), i = $(this).data();
        null != i.header && "" != i.header ? e.find(".box-modal__title_head").html('Узнать первым о появлении туров <br> <span class="title_head__gradient">' + i.header + "</span>") : e.find(".box-modal__title_head").html('Узнать первым о появлении туров <br> <span class="title_head__gradient">' + $(this).find(".tour_subscription-title").text() + "</span>"), e.find("#tour_subscription-country").val(i.country), e.find("#tour_subscription-resort").val(i.resort), e.arcticmodal()
    }), $(".card.see_more_tour .countries .country.js-visa_card").on("click", function (t) {
        var e = $(this);
        e.hasClass("active") || (e.siblings(".active").removeClass("active"), e.addClass("active"), $.ajax({
            type: "post",
            data: e.data(),
            url: "/ajax/getVisaInfo/"
        }).done(function (t) {
            t = JSON.parse(t), e.closest(".card.see_more_tour").find(".country_info").html(t.html)
        }).fail(function () {
            getErrorAlert("Произошла ошибка", "Попробуйте позже")
        }))
    }), 0 < $(".js-visa.country_info").length && $("body").on("click", ".js-visa.country_info .country_info__wrap div button", function () {
        $("#visa_registration_id").val($(this).data("visa")), $(".visa_modal").arcticmodal()
    });

    $(".sorting--h-tours").on("click", "span", function () {
        var a = $(this).attr("data-type");
        $(this).hasClass("active") ? (a = "asc" === a ? "desc" : "asc", $(this).attr("data-type", a)) : $(this).addClass("active").siblings("span").removeClass("active");
        var n = $(this).attr("data-sort"), t = [];
        $(".h-tours-list__item").each(function () {
            t.push($(this))
        }), t.sort(function (t, e) {
            if ("cost" === n) return "desc" === a ? parseInt(t.data(n)) - parseInt(e.data(n)) : parseInt(e.data(n)) - parseInt(t.data(n));
            if ("date" === n) {
                var i = t.data(n).split("."), s = e.data(n).split("."), i = new Date(i[2], i[1] - 1, i[0]),
                    s = new Date(s[2], s[1] - 1, s[0]);
                return "desc" === a ? i - s : s - i
            }
        }), $(".h-tours-list").html(""), t.map(function (t) {
            $(".h-tours-list").append(t)
        })
    }), $(".h-about-list__item-title").click(function () {
        $(window).width() <= 767 && ($(this).parent().hasClass("active") ? ($(this).parent().removeClass("active"), $(".h-about-list__item-content").slideUp()) : ($(".h-about-list__item").removeClass("active"), $(".h-about-list__item-content").slideUp(), $(this).parent().addClass("active"), $(this).siblings(".h-about-list__item-content").slideDown()))
    }), $(window).width() <= 767 && $(".hotel-cards").slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: !1,
        dots: !0,
        responsive: [{breakpoint: 576, settings: {slidesToShow: 1, slidesToScroll: 1}}]
    }), $(".goto").click(function (t) {
        t.preventDefault();
        var e = $(".header-bottom").height(), i = $(this).attr("href");
        0 != $(i).length && $("html, body").animate({scrollTop: $(i).offset().top - e / 2}, 500)
    })
}), $(document).mouseup(function (t) {
    var e, i, s, a, n = $(".dropdown");
    (!n.is(t.target) && 0 === n.has(t.target).length || $(t.target).hasClass("dropdown__list-link")) && (n.removeClass("active"), $(".dropdown__list").slideUp(), $(".dropdown__list-item").show(), $(".dropdown__search").val("")), $(window).width() <= 767 && (e = $(".mobile-menu"), i = $(".menu-btn"), e.is(t.target) || 0 !== e.has(t.target).length || i.is(t.target) || 0 !== i.has(t.target).length || (e.removeClass("active"), e.slideUp()), (s = $(".card-n")).is(t.target) || 0 !== s.has(t.target).length || s.find(".card-n__back").length && (s.removeClass("active"), s.find(".card-n__list").removeClass("active"), s.find(".card-n__all-dates ").removeClass("active")), (a = $(".n-city-tabs__list")).is(t.target) || 0 !== a.has(t.target).length || a.removeClass("active"));
    var o = $(".f-offices"), r = $(".open-office");
    o.is(t.target) || 0 !== o.has(t.target).length || r.is(t.target) || 0 !== r.has(t.target).length || (o.slideUp(), $(".open-office").removeClass("active"));
    var l = $(".chose-o"), c = $('a[href="#chose_office"]');
    l.is(t.target) || 0 !== l.has(t.target).length || c.is(t.target) || 0 !== c.has(t.target).length || (l.slideUp(), c.removeClass("active"));
    var h = $(".panel_sort__title"), d = $(".panel_sort__dropdown");
    h.is(t.target) || 0 !== h.has(t.target).length || d.is(t.target) || 0 !== d.has(t.target).length || (d.slideUp(), h.removeClass("active"));
    var u = $(".mo-dropdown"), p = $(".link-choose-city");
    u.is(t.target) || 0 !== u.has(t.target).length || p.is(t.target) || 0 !== p.has(t.target).length || (u.hide(), p.removeClass("active"))
}), $(".searchStar").on("click", function (t) {
    t.preventDefault(), $(".hotel").hide(), $(".hotel_" + $(this).data("star")).show()
}), $(".teachRequest").on("click", function (t) {
    var e = $(".course_modal");
    e.find("form").attr("id", "requestTeachGTM__" + $(this).data("id-teach")), e.find("#teach_title").text($(this).data("teach-title")), e.find("#teach_id").val($(this).data("id-teach")), $(this).hasClass("program") ? (e.find("#teach_request_program").val($(this).data("id-program")), e.find("#program_title").html('Программа: <span class="red">' + $(this).data("program-title") + "</span>")) : e.find("#program_title").text("")
}), $(".courses__button-sign_up").on("click", function () {
    event.preventDefault(), $("#teach_id").val($(this).data("id-teach"))
}), $("#tourAdd").on("click", function (t) {
    t.preventDefault();
    var e = Number($(this).data("start"));
    $.ajax({
        url: "/ajax/tourCardAdd/",
        type: "POST",
        data: {start: e, city: $(this).data("city")},
        success: function (t) {
            0 == (t = JSON.parse(t)).error ? ($("#tourAdd").data("start", e), $("#tableEC").append(t.card), $("#tableMobileEC").append(t.tabs), $("a.table_list").off("click"), $("a.table_list").on("click", toptourCard), 6 < t.count ? $("#tourAddText").text("Показать еще 6 туров") : 0 < t.count ? $("#tourAddText").text("Показать еще " + t.count + " туров") : $("#tourAdd").hide()) : getErrorAlert("Произошла ошибка", "" == t.message.trim() ? "попробуйте повторить позже" : t.message)
        }
    })
}), $(".cityJS").on("click", function (t) {
    t.preventDefault();
    var e = Number($(this).data("city"));
    $.ajax({
        url: "/ajax/tourCardAdd/", type: "POST", data: {start: 0, city: e, limit: 6}, success: function (t) {
            "false" != t && (t = JSON.parse(t), $("#tourAdd").data("start", 6), $("#tourAdd").data("city", e), $("#tableEC").html(t.card), $("#tableMobileEC").html(t.tabs), $("a.table_list").off("click"), $("a.table_list").on("click", toptourCard), $("#tourAdd").show(), 6 < t.count ? $("#tourAddText").text("Показать еще 6 туров") : 0 < t.count ? $("#tourAddText").text("Показать еще " + t.count + " туров") : $("#tourAdd").hide())
        }
    })
}), $("a.search_travelers__button-more").on("click", function (t) {
    t.preventDefault();
    var s = $("a.search_travelers__button-more"), a = Number($(this).data("start")) + 1;
    $.ajax({
        url: "/ajax/searchcompanion/",
        type: "POST",
        data: {start: a, form: $(document.forms.searchCompanion).serializeArray()},
        success: function (t) {
            var e, i;
            "false" != t && (t = JSON.parse(t), $(s).data("start", a), $("#container_search_companion").append(t.html), $(".search_travelers__item").off("click"), $(window).width() < 768 && $(".search_travelers__item").on("click", function () {
                $(this).find(".search_travelers__b").toggleClass("open")
            }), e = "", 0 < t.moreCount ? (10 < t.moreCount && t.moreCount < 15 ? e = "Показать еще " + t.moreCount + " попутчиков" : 1 == (i = t.moreCount % 10) ? e = "Показать еще " + t.moreCount + " попутчик" : 1 < i && i <= 4 ? e = "Показать еще " + t.moreCount + " попутчика" : (5 <= i && i < 10 || 0 == i) && (e = "Показать еще " + t.moreCount + " попутчиков"), $(".moreJS").text(e)) : $(s).hide())
        }
    })
}), $("#getNeighbors").on("click", function (t) {
    t.preventDefault(), $(this).hide();
    var e = Number($(this).data("start"));
    $.ajax({
        url: "/ajax/getNeighbors/",
        type: "POST",
        data: {
            start: e,
            limit: $(this).data("limit"),
            priorityOutput: $(this).data("priority"),
            city: $(this).data("city"),
            country: $(this).data("country"),
            resort: $(this).data("resort")
        },
        success: function (t) {
            "false" != t ? (t = JSON.parse(t), $("#getNeighbors").data("start", e + 6), $("#tourCard").append(t[0]), $("#tourTable").append(t[1]), 6 < t[2] ? $("#getNeighborsText").text("Показать еще 6 туров") : 5 == t[2] ? $("#getNeighborsText").text("Показать еще " + t[2] + " туров") : 1 < t[2] ? $("#getNeighborsText").text("Показать еще " + t[2] + " тура") : 0 < t[2] ? $("#getNeighborsText").text("Показать еще " + t[2] + " тур") : $("#getNeighbors").hide(), $(".table_list").off("click"), $(".table_list").on("click", toptourCard)) : $(this).show()
        }
    })
}), $(".offices_list__item").on("click", function (t) {
    t.preventDefault(), $('.office-tabs__item[href="' + $(this).attr("href") + '"]').trigger("click"), confirm_city_button__yes()
}), $(".questions-answer__button-more").on("click", function (t) {
    t.preventDefault();
    var e = $(this).data("number"), i = {request: "getFAQ", theme: $(this).data("theme"), number: e + 1};
    i[$("#csrf").data("name")] = $("#csrf").data("value"), $.ajax({
        url: "/ajax/callback/",
        type: "POST",
        data: i,
        success: function (t) {
            "true" == (t = JSON.parse(t)).status ? ($("#faq_button").before(t.html), $("#faq_button a").data("number", e + 1), 10 < t.count ? $("#faq_button__text").text("Показать еще 10 вопросов") : 4 < t.count ? $("#faq_button__text").text("Показать еще " + t.count + " вопросов") : 1 < t.count ? $("#faq_button__text").text("Показать еще " + t.count + " вопроса") : 1 == t.count ? $("#faq_button__text").text("Показать еще 1 вопрос") : $("#faq_button").hide()) : getErrorAlert("Произошла ошибка", message)
        }
    })
}), $(".askSpecialist").on("click", function (t) {
    $("#staffNameModal").val($(this).data("staff")), $("#staffIdModal").val($(this).data("staff_id")), $("#officeIdModal").val($(this).data("office"))
}), $(".t-video-link").on("click", function (t) {
    t.preventDefault(), $("#show_video").find("iframe").attr("src", $(this).data("url")), $("#show_video").arcticmodal()
}), $(".panel_sort__title").on("click", function () {
    $(this).toggleClass("active"), $(this).siblings(".panel_sort__dropdown").slideToggle("fast")
}), $(".t-menu").length && ($tMenu = $(".t-menu"), tMenuTop = $tMenu.offset().top, $(window).scroll(function () {
    var i = $(window).scrollTop(), t = $("header .header-bottom").outerHeight(), e = t + i,
        s = t + $tMenu.outerHeight();
    !$tMenu.hasClass("fixed") && tMenuTop <= e ? $tMenu.addClass("fixed").css("top", t + "px") : $tMenu.hasClass("fixed") && e < tMenuTop && $tMenu.removeClass("fixed"), $(".hotel_goto").each(function () {
        var t, e = $(this).attr("href");
        "#" === e || !$(e).length || (t = $(e).offset().top) <= i + s && i + s <= t + $(e).outerHeight() && !$(this).hasClass("active") && ($(".hotel_goto").removeClass("active"), $(this).addClass("active"))
    })
})), $(".main_video_cover").click(function (t) {
    t.preventDefault();
    var e = $(this).attr("href");
    $(this).fadeOut(300), $(this).siblings(".video-wrap").html('<iframe src="' + e + '?autoplay=1" frameborder="0"  name="videoframe"></iframe>')
}), $(".hotel_goto").on("click", function (t) {
    t.preventDefault(), $(".hotel_goto").removeClass("active"), $(this).addClass("active");
    var e = $(this).attr("href"),
        i = $(e).offset().top - $(".header-bottom").outerHeight() - $(".t-menu").outerHeight();
    0 != $(e).length && $("html, body").animate({scrollTop: i}, 500)
}), $(document).ready(function () {
    var t, e, i, s, a, n, o, r, l, c;
    $("#prices").length && (e = (t = $(".change_prices_btns__btn.active")).data("labels"), i = t.data("points"), s = e.split(",").map(function (t) {
        return t.trim()
    }), a = i.split(",").map(function (t) {
        return +t.trim()
    }), n = t.data("min"), o = t.data("max"), r = $("#prices"), (l = document.getElementById("prices").getContext("2d").createLinearGradient(0, 0, 0, 250)).addColorStop(0, "rgba(221, 64, 64, 0.5)"), (c = new Chart(r, {
        type: "line",
        data: {
            labels: s,
            datasets: [{
                type: "line",
                label: "Цена",
                data: a,
                pointBorderColor: "rgb(221, 64, 64)",
                pointBackgroundColor: "rgba(221, 64, 64,1)",
                borderColor: "rgba(221, 64, 64,1)",
                backgroundColor: l,
                fill: !0
            }]
        },
        options: {
            scales: {y: {beginAtZero: !1, min: n, max: o, ticks: {stepSize: 5e3}}},
            responsive: !0,
            responsiveAnimationDuration: 1500,
            plugins: {legend: {display: !1}},
            interaction: {mode: "index", intersect: !1},
            elements: {line: {tension: .3}, points: {borderWidth: 5, borderColor: "rgb(221, 64, 64)"}}
        }
    })).options.plugins.legend = !1, $(".change_prices_btns__btn").on("click", function () {
        $(".change_prices_btns__btn").removeClass("active"), $(this).addClass("active");
        var t = $(this).data("labels"), e = $(this).data("points"), i = t.split(",").map(function (t) {
            return t.trim()
        }), s = e.split(",").map(function (t) {
            return +t.trim()
        }), a = $(this).data("min"), n = $(this).data("max");
        c.options = {
            scales: {y: {min: a, max: n, ticks: {stepSize: 5e3}}},
            responsive: !0,
            responsiveAnimationDuration: 1500,
            plugins: {legend: {display: !1}},
            interaction: {mode: "index", intersect: !1},
            elements: {line: {tension: .3}, points: {borderWidth: 5, borderColor: "rgb(221, 64, 64)"}}
        }, c.data = {
            labels: i,
            datasets: [{
                type: "line",
                label: "Цена",
                data: s,
                pointBorderColor: "rgb(221, 64, 64)",
                pointBackgroundColor: "rgba(221, 64, 64,1)",
                borderColor: "rgba(221, 64, 64,1)",
                backgroundColor: l,
                fill: !0
            }]
        }, c.update()
    }))
}), $(".link-choose-city").click(function (t) {
    t.preventDefault();
    var e = $(this).closest("form"), i = e.find(".mo-dropdown"), s = e.find(".mo-chosen-city");
    i && s && (i = i[0], s = s[0]), i && s && ($(this).hasClass("active") ? ($(this).removeClass("active"), $(i).hide(), $(s).trigger("chosen:close")) : ($(this).addClass("active"), $(i).show(), $(s).trigger("chosen:open"))), t.stopPropagation()
}), $(".mo-chosen-city").change(function () {
    var e = $(this).closest(".m-form-wrap-city").siblings(".mo-tabs-wrap").children(".mo-tabs"),
        t = $(this).children(":selected").data("offices"),
        i = $(this).closest(".m-form-wrap-city").siblings(".mo-tabs-wrap").find(".mo-tabs"), s = "";
    i && i[0] && (s = $(i[0]).data("prefix-id-mo-office")), $(this).closest(".m-form-wrap-city").find(".m-form__label > .select-city").text("г. " + $(this).children("option[value=" + $(this).val() + "]").text().trim()), e.html(""), 1 == t.length ? addMoTabsItem(e, !0, t[0], s) : 1 < t.length && t.forEach(function (t) {
        addMoTabsItem(e, !1, t, s)
    }), addMoTabsItem(e, 0 == t.length, null, s), 767 < $(window).width() && ($(".link-choose-city").removeClass("active"), $(this).trigger("chosen:close"), $(".mo-dropdown").hide())
});
