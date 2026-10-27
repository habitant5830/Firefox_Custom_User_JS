// about:config warning
user_pref("browser.aboutConfig.showWarning", false);

// Telemetry
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref(
  "browser.newtabpage.activity-stream.telemetry.privatePing.enabled",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.telemetry.privatePing.inferredInterests.enabled",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.telemetry.privatePing.redactNewtabPing.enabled",
  false,
);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events	", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref(
  "browser.newtabpage.activity-stream.telemetry.privatePing.enabled",
  false,
);
user_pref(
  "browser.newtabpage.activity-stream.telemetry.redactNewtabPing.enabled",
  false,
);
user_pref("identity.fxaccounts.telemetry.clientAssociationPing.enabled", false);
user_pref("nimbus.telemetry.targetingContextEnabled", false);
user_pref("telemetry.fog.init_on_shutdown", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

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

// Top stories and suggestions
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref(
  "browser.newtabpage.activity-stream.discoverystream.newSponsoredLabel.enabled",
  false,
);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);

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
user_pref("browser.urlbar.sponsoredTopSites", false);
user_pref("browser.urlbar.suggest.addons", false);
user_pref("browser.urlbar.suggest.amp", false);
user_pref("browser.urlbar.suggest.mdn", false);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("browser.urlbar.suggest.quicksuggest.all", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.sports", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.suggest.yelp", false);
user_pref("browser.urlbar.suggest.yelpRealtime", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.remotetab", false);

// URL bar placeholder
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName.private", "DuckDuckGo");

// HTTPS-only-mode
user_pref("dom.security.https_only_mode", true);

// Save password
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.autofillForms", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.capture.inputChanges.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.generation.enabled", false);
user_pref("services.sync.prefs.sync.signon.autofillForms", false);
user_pref("services.sync.prefs.sync.signon.generation.enabled", false);
user_pref(
  "services.sync.prefs.sync.signon.management.page.breach-alerts.enabled",
  false,
);
user_pref("services.sync.prefs.sync.signon.rememberSignons", false);

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
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Firefox account sync
user_pref("identity.fxaccounts.enabled", true);

// Browser backup
user_pref("browser.backup.archive.enabled", false);
user_pref("browser.backup.enabled", false);
user_pref("browser.backup.scheduled.enabled", false);
user_pref("browser.backup.restore.enabled", false);

// Preferences in menu
user_pref("browser.preferences.experimental.hidden", true);
user_pref("browser.preferences.moreFromMozilla", false);

// Global privacy control
user_pref("privacy.globalprivacycontrol.enabled", false);
