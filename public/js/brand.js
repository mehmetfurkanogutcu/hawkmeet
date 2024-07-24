'use strict';

// HTML sayfaları

const landingTitle = document.getElementById('landingTitle');
const newCallTitle = document.getElementById('newCallTitle');
const loginTitle = document.getElementById('loginTitle');
const privacyPolicyTitle = document.getElementById('privacyPolicyTitle');
const stunTurnTitle = document.getElementById('stunTurnTitle');
const clientTitle = document.getElementById('clientTitle');
const notFoundTitle = document.getElementById('stunTurnTitle');

const shortcutIcon = document.getElementById('shortcutIcon');
const appleTouchIcon = document.getElementById('appleTouchIcon');

const appTitle = document.getElementById('appTitle');
const appDescription = document.getElementById('appDescription');

const features = document.getElementById('features');
const browsers = document.getElementById('browsers');
const teams = document.getElementById('teams');
const tryEasier = document.getElementById('tryEasier');
const poweredBy = document.getElementById('poweredBy');
const sponsors = document.getElementById('sponsors');
const advertisers = document.getElementById('advertisers');
const footer = document.getElementById('footer');
//...

// Marka özelleştirmeleri...

const brand = {
    app: {
        name: 'HawkMeet',
        title: 'HawkMeet<br />Ücretsiz tarayıcı tabanlı Gerçek Zamanlı video görüşmeleri.<br />Basit, Güvenli, Hızlı.',
        description:
            'Bir sonraki video görüşmenize tek bir tıklama ile başlayın. İndirmeniz, eklenti kurmanız veya giriş yapmanız gerekmez. Sadece konuşmaya, mesajlaşmaya ve ekranınızı paylaşmaya başlayın.',
    },
    site: {
        landingTitle: 'HawkMeet Ücretsiz Güvenli Video Görüşmeleri, Sohbet ve Ekran Paylaşımı.',
        newCallTitle: 'HawkMeet Ücretsiz Güvenli Video Görüşmeleri, Sohbet ve Ekran Paylaşımı.',
        loginTitle: 'HawkMeet - Korunan giriş gereklidir.',
        clientTitle: 'HawkMeet WebRTC Video görüşmesi, Sohbet Odası & Ekran Paylaşımı.',
        privacyPolicyTitle: 'HawkMeet - Gizlilik ve politika.',
        stunTurnTitle: 'Stun/Turn Sunucularını Test Et.',
        notFoundTitle: 'HawkMeet - 404 Sayfa bulunamadı.',
        shortcutIcon: '../images/logo.svg',
        appleTouchIcon: '../images/logo.svg',
    },
    html: {
        features: true,
        browsers: true,
        teams: true, // lütfen her zaman beni true tutun ;)
        tryEasier: true,
        poweredBy: true,
        sponsors: true,
        advertisers: true,
        footer: true,
    },
    //...
};

// Marka ayarlarını uygula...

if (landingTitle) landingTitle.textContent = brand.site.landingTitle;
if (newCallTitle) newCallTitle.textContent = brand.site.newCallTitle;
if (loginTitle) loginTitle.textContent = brand.site.loginTitle;
if (privacyPolicyTitle) privacyPolicyTitle.textContent = brand.site.privacyPolicyTitle;
if (stunTurnTitle) stunTurnTitle.textContent = brand.site.stunTurnTitle;
if (clientTitle) clientTitle.textContent = brand.site.clientTitle;
if (notFoundTitle) notFoundTitle.textContent = brand.site.notFoundTitle;

if (shortcutIcon) shortcutIcon.href = brand.site.shortcutIcon;
if (appleTouchIcon) appleTouchIcon.href = brand.site.appleTouchIcon;

if (appTitle) appTitle.innerHTML = brand.app.title;
if (appDescription) appDescription.textContent = brand.app.description;

!brand.html.features && elementDisplay(features, false);
!brand.html.browsers && elementDisplay(browsers, false);
!brand.html.teams && elementDisplay(teams, false);
!brand.html.tryEasier && elementDisplay(tryEasier, false);
!brand.html.poweredBy && elementDisplay(poweredBy, false);
!brand.html.sponsors && elementDisplay(sponsors, false);
!brand.html.advertisers && elementDisplay(advertisers, false);
!brand.html.footer && elementDisplay(footer, false);
//...

/**
 * Element görüntüsünü yönet
 * @param {object} element
 * @param {boolean} display
 * @param {string} mode
 */
function elementDisplay(element, display, mode = 'block') {
    if (!element) return;
    element.style.display = display ? mode : 'none';
}
