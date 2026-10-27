// about:config warning
user_pref("browser.aboutConfig.showWarning", false);

// Telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

// Media autoplay
user_pref("media.autoplay.default", 0);

// Startup page
user_pref("browser.startup.page", 3);

// Sponsored sites
user_pref(
  "services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsored",
  false,
);
user_pref(
  "services.sync.prefs.sync.browser.newtabpage.activity-stream.showSponsoredTopSites",
  false,
);

// Top stories
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Normal search suggestions
user_pref("browser.search.suggest.enabled", true);
user_pref("browser.urlbar.suggest.searches", true);

// Sponsored/ ads search suggestions
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// Privacy shiels
user_pref("browser.contentblocking.category", "strict");

// Fix major site breakage
user_pref("privacy.trackingprotection.allow_list.baseline.enabled", false);
user_pref("privacy.trackingprotection.allow_list.convenience.enabled", false);

// Site permissions (Global)
user_pref("geo.enabled", false); // Location
user_pref("dom.webnotifications.enabled", false); // Notifications
user_pref("permissions.default.xr", 2); // VR
user_pref("network.lna.enabled", false); // Device apps and services

// Enable DOH
user_pref("network.trr.mode", 3); //Strict

// Safebrowsing
user_pref("browser.safebrowsing.realTime.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);

// AI enhancements
user_pref("browser.ai.control.default", "blocked");

// URL bar suggestions
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.clipboard", false);
user_pref("browser.urlbar.suggest.topsites", false);

// HTTPS-only-mode
user_pref("dom.security.https_only_mode", true);

// Save password
user_pref("signon.rememberSignons", false);

// Auto-fill and save
user_pref("signon.autofillForms", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// Default browser
user_pref("browser.shell.checkDefaultBrowser", true);

// Download location
user_pref("browser.download.useDownloadDir", true);
user_pref("browser.download.always_ask_before_handling_new_types", true);

// Tab
user_pref("browser.search.context.loadInBackground", false);
user_pref("browser.tabs.insertRelatedAfterCurrent", true);
user_pref("privacy.userContext.enabled", false);

// Pip and link
user_pref("media.videocontrols.picture-in-picture.enabled", false);
user_pref("browser.ml.linkPreview.enabled", false);

// Suggested recommendations to off
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features",
  false,
);
user_pref("browser.discovery.enabled", false);
