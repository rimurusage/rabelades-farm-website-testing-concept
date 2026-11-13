(function () {
  /* ============================================================
     1. YOUR CONTACT DETAILS AND SOCIAL LINKS
     Change the values between the quotes. Paste each full link
     into "url", for example "https://www.instagram.com/yourname".
     Leave url empty ("") until you have the link: the icon then
     does nothing when clicked.
     ============================================================ */
  var CONTACT = {
    email: "info@rabelades-farm.de",
    phone: "+49 000 000 0000",
    address: "Your street 1, 00000 Your city",
    instagram: { url: "", handle: "@rabelades_farm" },
    facebook:  { url: "", handle: "@rabelades_farm" },
    youtube:   { url: "", handle: "@rabelades_farm" }
  };

  /* ============================================================
     2. TEXT IN BOTH LANGUAGES
     English: the words in the HTML above are read automatically,
     so edit English there. "en" below only holds text that the
     script creates (error messages, calendar labels).
     German: every line below is the German for the HTML element
     with the same data-i18n name.
     ============================================================ */
  var text = {
    en: {
      err_name: "Please enter your name.",
      err_email: "Please enter a valid email address.",
      err_msg: "Write a message or tick something you would like to do.",
      status_ok: "Thank you, {name}. Your message is ready, but this draft site does not send messages yet.",
      lang_aria: "Switch language to German",
      in_season: "ready to pick",
      now_tag: "now",
      none_ticked: "nothing yet"
    },
    de: {
      lang_label: "English",
      lang_aria: "Sprache auf Englisch umstellen",
      in_season: "erntereif",
      now_tag: "jetzt",
      none_ticked: "noch nichts",
      nav_home: "Start",
      nav_about: "Über uns",
      nav_grows: "Was wächst",
      nav_join: "Mitmachen",
      nav_contact: "Kontakt",
      menu: "Menü",
      brand_label: "Rabelades Farm, Startseite",
      art_label: "Illustration einer untergehenden Sonne hinter Hügeln, einer Schirmakazie und Feldreihen",
      hero_h1a: "Eine Farm",
      hero_h1b: "für alle,",
      hero_h1c: "die essen.",
      hero_lead: "Die Rabelades Farm wird von Schwarzen Menschen geleitet und für die Gemeinschaft betrieben, nicht für den Profit. Komm vorbei und sieh, was wächst.",
      hero_btn: "Sieh, was wächst",
      hero_or: "oder sag Hallo",
      hero_aside: "ja, du darfst mitgraben",
      about_label: "wer wir sind",
      about_statement: "Wir sind eine kleine Farm. Wir bauen Gemüse an, teilen die Ernte und lassen das Tor offen.",
      b1_h: "Das Land ist für die Menschen da.",
      b1_p: "Wir kümmern uns gemeinsam darum und versuchen, es besser zu hinterlassen, als wir es vorgefunden haben.",
      b2_h: "Hier geht niemand hungrig weg.",
      b2_p: "Bei Ernteanteilen gibst du, was du kannst. Wer nichts geben kann, isst trotzdem mit.",
      b3_h: "Wissen reist.",
      b3_p: "Saatgut, Rezepte und Know-how kommen von vielen Orten. Wir teilen sie frei.",
      quote: "Essen ist keine Ware.",
      grows_h2: "Was gerade im Boden ist",
      grows_sub: "Die Monate, in denen jede Kultur erntereif ist.",
      join_h2: "Komm und hilf mit",
      join_intro: "Hak ab, was du gern machen würdest. Deine Haken erscheinen neben dem Kontaktformular.",
      join_aside: "Mitmachen ist kostenlos",
      contact_h2: "Sag Hallo",
      contact_sub: "Schreib uns, ruf an oder frag nach einem Besuch. Wir sind oft draußen auf dem Feld, also hab etwas Geduld.",
      c_email: "E-Mail",
      c_phone: "Telefon",
      c_address: "Adresse",
      follow: "Online findest du uns",
      mine_title: "Du hast angehakt:",
      f_name: "Dein Name",
      f_email: "E-Mail",
      f_msg: "Nachricht",
      f_send: "Nachricht senden",
      foot_note: "Entwurf der Website, v0.5",
      err_name: "Bitte gib deinen Namen ein.",
      err_email: "Bitte gib eine gültige E-Mail-Adresse ein.",
      err_msg: "Schreibe eine Nachricht oder hake etwas an, das du gern machen würdest.",
      status_ok: "Danke, {name}. Deine Nachricht ist bereit, aber diese Entwurfsseite verschickt noch keine Nachrichten."
    }
  };
  var MONTHS = {
    en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    de: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]
  };

  /* ============================================================
     3. CROPS AND ACTIVITIES (each has English and German text)
     "months" are the harvest months as [from, to] pairs (1 = January).
     ============================================================ */
  var crops = [
    { name: { en: "Salad and greens", de: "Salat und Blattgemüse" }, note: { en: "Quick crops for the first meals of the year.", de: "Schnelle Kulturen für die ersten Mahlzeiten des Jahres." }, months: [[4, 6], [9, 10]] },
    { name: { en: "Herbs", de: "Kräuter" }, note: { en: "Grown in beds near the gate.", de: "Wachsen in Beeten nahe am Tor." }, months: [[5, 9]] },
    { name: { en: "Beans", de: "Bohnen" }, note: { en: "Climbing beans on tall poles.", de: "Stangenbohnen an hohen Rankstäben." }, months: [[7, 9]] },
    { name: { en: "Tomatoes", de: "Tomaten" }, note: { en: "Warm-weather favourites.", de: "Favoriten für warme Tage." }, months: [[7, 10]] },
    { name: { en: "Pumpkins", de: "Kürbisse" }, note: { en: "Big, slow and made for sharing.", de: "Groß, langsam und zum Teilen gemacht." }, months: [[9, 11]] },
    { name: { en: "Kale", de: "Grünkohl" }, note: { en: "Tough enough for the first frost.", de: "Hart genug für den ersten Frost." }, months: [[10, 12], [1, 2]] },
    { name: { en: "Root vegetables", de: "Wurzelgemüse" }, note: { en: "Stored to feed us through the cold.", de: "Eingelagert, damit wir gut durch die Kälte kommen." }, months: [[10, 12], [1, 3]] }
  ];
  var activities = [
    { id: "harvest", name: { en: "Harvest days", de: "Erntetage" }, text: { en: "Work the fields with others and take food home.", de: "Arbeite gemeinsam mit anderen auf den Feldern und nimm Essen mit nach Hause." } },
    { id: "meals", name: { en: "Shared meals", de: "Gemeinsame Mahlzeiten" }, text: { en: "Cook and eat together. Bring a dish or just yourself.", de: "Kocht und esst zusammen. Bring ein Gericht mit oder einfach dich selbst." } },
    { id: "seeds", name: { en: "Seed swaps and workshops", de: "Saatguttausch und Workshops" }, text: { en: "Trade seeds and stories, and learn skills from each other.", de: "Tauscht Saatgut und Geschichten und lernt voneinander." } },
    { id: "share", name: { en: "Food share", de: "Ernteanteil" }, text: { en: "Take a share of the harvest. Give what you can. Nobody is turned away.", de: "Nimm einen Anteil der Ernte. Gib, was du kannst. Niemand wird abgewiesen." } }
  ];

  /* ============================================================
     4. THE SCRIPT (you do not need to change anything below)
     ============================================================ */
  var lang = "en";
  var chosen = {};

  function qsa(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function t(key) {
    var d = text[lang] || {};
    return d[key] !== undefined ? d[key] : (text.en[key] !== undefined ? text.en[key] : key);
  }
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) { e.className = cls; }
    if (txt) { e.textContent = txt; }
    return e;
  }

  // read the English words from the HTML
  qsa("[data-i18n]").forEach(function (e) { text.en[e.getAttribute("data-i18n")] = e.textContent; });
  qsa("[data-i18n-label]").forEach(function (e) { text.en[e.getAttribute("data-i18n-label")] = e.getAttribute("aria-label"); });

  var cal = document.getElementById("cal");
  var checks = document.getElementById("checks");
  var mine = document.getElementById("mine");
  var langBtn = document.getElementById("langBtn");
  var form = document.getElementById("form");
  var status = document.getElementById("status");

  function inSeason(c, m) {
    return c.months.some(function (r) { return m >= r[0] && m <= r[1]; });
  }

  // planting calendar
  function renderCal() {
    var now = new Date().getMonth() + 1;
    cal.innerHTML = "";
    var head = document.createElement("thead");
    var hr = document.createElement("tr");
    hr.appendChild(el("th", "crop-name"));
    MONTHS[lang].forEach(function (name, i) {
      var th = el("th", i + 1 === now ? "now" : "", name.charAt(0));
      th.setAttribute("scope", "col");
      th.setAttribute("title", name);
      th.setAttribute("aria-label", name);
      if (i + 1 === now) { th.appendChild(el("span", "nowtag", t("now_tag"))); }
      hr.appendChild(th);
    });
    head.appendChild(hr);
    cal.appendChild(head);
    var body = document.createElement("tbody");
    crops.forEach(function (c, ci) {
      var tr = document.createElement("tr");
      var th = el("th", "crop-name");
      th.setAttribute("scope", "row");
      th.appendChild(el("b", "", c.name[lang]));
      th.appendChild(el("small", "", c.note[lang]));
      tr.appendChild(th);
      for (var m = 1; m <= 12; m++) {
        var on = inSeason(c, m);
        var td = el("td", (on ? "on c" + (ci % 4) : "") + (m === now ? " now" : ""));
        if (on) { td.appendChild(el("span", "sr", t("in_season"))); }
        tr.appendChild(td);
      }
      body.appendChild(tr);
    });
    cal.appendChild(body);
  }

  // sign-up sheet
  function renderChecks() {
    checks.innerHTML = "";
    activities.forEach(function (a) {
      var li = document.createElement("li");
      var label = document.createElement("label");
      var box = document.createElement("input");
      box.type = "checkbox";
      box.checked = !!chosen[a.id];
      box.addEventListener("change", function () {
        if (box.checked) { chosen[a.id] = a; } else { delete chosen[a.id]; }
        renderMine();
      });
      var wrap = document.createElement("span");
      wrap.appendChild(el("b", "", a.name[lang]));
      wrap.appendChild(el("small", "", a.text[lang]));
      label.appendChild(box);
      label.appendChild(wrap);
      li.appendChild(label);
      checks.appendChild(li);
    });
  }

  function renderMine() {
    var names = Object.keys(chosen).map(function (k) { return chosen[k].name[lang]; });
    mine.textContent = names.length ? names.join(", ") : t("none_ticked");
  }

  function applyLang(l) {
    lang = l;
    document.documentElement.lang = l;
    qsa("[data-i18n]").forEach(function (e) { e.textContent = t(e.getAttribute("data-i18n")); });
    qsa("[data-i18n-label]").forEach(function (e) { e.setAttribute("aria-label", t(e.getAttribute("data-i18n-label"))); });
    langBtn.setAttribute("aria-label", t("lang_aria"));
    renderCal(); renderChecks(); renderMine();
    ["nameErr", "emailErr", "msgErr"].forEach(function (id) { document.getElementById(id).textContent = ""; });
    status.hidden = true;
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  langBtn.addEventListener("click", function () { applyLang(lang === "en" ? "de" : "en"); });

  // mobile menu
  var menuBtn = document.getElementById("menuBtn");
  var nav = document.getElementById("mainNav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  // underline the nav link of the section you are reading
  var links = nav.querySelectorAll("a");
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) {
        links.forEach(function (l) { l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id); });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ["home", "about", "grows", "join", "contact"].forEach(function (id) { io.observe(document.getElementById(id)); });

  // fill in contact details and social links from CONTACT
  qsa("[data-contact]").forEach(function (e) {
    var k = e.getAttribute("data-contact");
    var v = CONTACT[k];
    e.textContent = v;
    if (k === "email") { e.setAttribute("href", "mailto:" + v); }
    if (k === "phone") { e.setAttribute("href", "tel:" + v.replace(/[^\d+]/g, "")); }
  });
  ["instagram", "facebook", "youtube"].forEach(function (name) {
    var s = CONTACT[name];
    qsa("[data-social='" + name + "']").forEach(function (a) {
      if (s.url) {
        a.setAttribute("href", s.url);
        a.setAttribute("target", "_blank");
        a.setAttribute("rel", "noopener");
      } else {
        a.setAttribute("href", "#");
        a.addEventListener("click", function (e) { e.preventDefault(); });
      }
    });
    qsa("[data-handle='" + name + "']").forEach(function (e) { e.textContent = s.handle; });
  });

  // contact form (checks the fields, does not send anything yet)
  function setErr(id, msg) { document.getElementById(id).textContent = msg; return !msg; }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var msg = document.getElementById("msg").value.trim();
    var ok = true;
    ok = setErr("nameErr", name ? "" : t("err_name")) && ok;
    ok = setErr("emailErr", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : t("err_email")) && ok;
    ok = setErr("msgErr", (msg || Object.keys(chosen).length) ? "" : t("err_msg")) && ok;
    if (!ok) { status.hidden = true; return; }
    status.hidden = false;
    status.textContent = t("status_ok").replace("{name}", name);
    form.reset();
    chosen = {};
    renderChecks(); renderMine();
  });

  // start in English, or in the language the visitor chose last time
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  applyLang(saved === "de" ? "de" : "en");
})();