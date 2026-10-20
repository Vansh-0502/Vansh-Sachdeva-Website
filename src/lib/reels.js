/**
 * Behaviour for the "Selected edits" videos (plain JavaScript so the same
 * code can run anywhere). Cards play silently on a loop while on screen;
 * clicking one opens it large, with sound and controls.
 */
export function initReels(root) {
  var section = root.querySelector("[data-reels]");
  if (!section || section.dataset.ready) return;
  section.dataset.ready = "1";

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var cards = Array.prototype.slice.call(section.querySelectorAll("[data-reel]"));
  var modal = section.querySelector("[data-reel-modal]");
  var mVideo = modal && modal.querySelector("video");
  var mTitle = modal && modal.querySelector("[data-reel-modal-title]");
  var mKind = modal && modal.querySelector("[data-reel-modal-kind]");
  var lastFocus = null;

  function tc(t) {
    var s = Math.floor(t), f = Math.floor((t - s) * 30);
    var p = function (n) { return (n < 10 ? "0" : "") + n; };
    return p(Math.floor(s / 60)) + ":" + p(s % 60) + ":" + p(f);
  }

  cards.forEach(function (card) {
    var v = card.querySelector("video");
    var time = card.querySelector("[data-reel-time]");
    if (!v) return;
    v.muted = true;
    v.addEventListener("timeupdate", function () { if (time) time.textContent = tc(v.currentTime); });
    v.addEventListener("playing", function () { card.classList.add("is-playing"); });
    v.addEventListener("pause", function () { card.classList.remove("is-playing"); });
    card.querySelector("[data-reel-open]").addEventListener("click", function () { open(card, v); });
  });

  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.target.querySelector("video");
        if (!v) return;
        if (e.isIntersecting) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.35 });
    cards.forEach(function (c) { io.observe(c); });
  }

  function open(card, v) {
    if (!modal || !mVideo) return;
    lastFocus = document.activeElement;
    mVideo.src = v.currentSrc || v.getAttribute("src");
    mVideo.poster = v.getAttribute("poster") || "";
    if (mTitle) mTitle.textContent = card.dataset.title || "";
    if (mKind) mKind.textContent = card.dataset.kind || "";
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () { modal.classList.add("is-open"); });
    cards.forEach(function (c) { var x = c.querySelector("video"); if (x) x.pause(); });
    mVideo.muted = false;
    mVideo.currentTime = 0;
    var p = mVideo.play(); if (p && p.catch) p.catch(function () {});
    var close = modal.querySelector("[data-reel-close]");
    if (close) close.focus();
  }

  function close() {
    if (!modal || modal.hidden) return;
    modal.classList.remove("is-open");
    mVideo.pause();
    document.body.style.overflow = "";
    setTimeout(function () {
      modal.hidden = true;
      mVideo.removeAttribute("src");
      mVideo.load();
    }, 300);
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    if (!reduce) cards.forEach(function (c) {
      var r = c.getBoundingClientRect();
      if (r.bottom > 0 && r.top < innerHeight) { var x = c.querySelector("video"); if (x) { var p = x.play(); if (p && p.catch) p.catch(function () {}); } }
    });
  }

  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal || (e.target.closest && e.target.closest("[data-reel-close]"))) close();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }
}
