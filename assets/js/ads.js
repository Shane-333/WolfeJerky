(adsbygoogle = window.adsbygoogle || []).push({});

document.addEventListener('DOMContentLoaded', function() {
    const adClient = process.env.ADSENSE_PUBLISHER_ID;
    const adSlot = process.env.ADSENSE_AD_SLOT_ID;

    (adsbygoogle = window.adsbygoogle || []).push({});

    document.querySelector('.adsbygoogle').setAttribute('data-ad-client', adClient);
    document.querySelector('.adsbygoogle').setAttribute('data-ad-slot', adSlot);
});
