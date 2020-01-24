const AD_SELECTOR = `[aria-label='Ads']`;

function hideAds() {
    const ads = Array.from(document.querySelectorAll(AD_SELECTOR));
    const adData = ads.map(ad => ({ element: ad, height: ad.clientHeight }));
    adData.forEach(({ element, height }) => {
        requestAnimationFrame(() => {
            element.style.maxHeight = `${height}px`;
            element.style.overflow = `hidden`;
            element.style.transition = `max-height 0.3s ease-out, opacity 0.3s ease-out`;
            // Wait for the maxHeight styles to take effect, then animate to 0 with a fade
            requestAnimationFrame(() => {
                element.style.opacity = `0`;
                element.style.maxHeight = `0`;
            });
        });
    });
}

hideAds();
