const disabledKeys = ["u", "I"];

const showAlert = e => {
    e.preventDefault();
    return alert("Sorry, you can't view or copy source codes this way!");
}

document.addEventListener("contextmenu", e => {
    showAlert(e);
});

document.addEventListener("keydown", e => {
    if (e.ctrlKey && disabledKeys.includes(e.key) || e.key === "F12") {
        showAlert(e);
    }
});


const removePrevBtnStyles = () => {
    const styleTags = document.querySelectorAll("style");
    styleTags.forEach(styleTag => {
        if(styleTag.textContent.indexOf(".download-btn-cn")) styleTag.remove();
    });
}

// const createDownloadBtn = () => {
//     const downloadBtnExist = document.querySelector(".download-btn-cn");
//     if(downloadBtnExist) return;

//     const downloadBtn = document.createElement("div");
//     downloadBtn.classList.add("download-btn-cn");

//     let downloadPostLink = location.href.replace(/\/demos\//, '/');
//     downloadPostLink = downloadPostLink.replace(/^\//, '');

//     downloadBtn.innerHTML = `<a href="${downloadPostLink}" target="_blank">Download Code Files</a>`;
//     document.body.prepend(downloadBtn);
// }

// const showStickyAd = () => {
//     const stickyBtmAd = document.querySelector(".sticky-bottom-ad");
//     const closeBtn = stickyBtmAd.querySelector(".close-btn");
//     const googleAd = stickyBtmAd.querySelector(".adsbygoogle");
//     const isAdLoaded = googleAd?.getAttribute("data-ad-status");
//     const isStickyHidden = stickyBtmAd.classList.contains("hide");
//     if(window.innerWidth < 700 || isStickyHidden || !isAdLoaded || isAdLoaded === "unfilled") return;

//     stickyBtmAd.classList.add("show");

//     const hideStickyAd = () => {
//         stickyBtmAd.classList.remove("show");
//     }

//     closeBtn.addEventListener("click", hideStickyAd);
// }

// const insertStickyAd = () => {
//     const stickyBtmAd = document.createElement("div");
//     stickyBtmAd.classList.add("sticky-bottom-ad");
//     stickyBtmAd.innerHTML = `<div class="ad-body">
//                                 <div class="close-btn">
//                                     <svg viewBox="0 0 48 48" fill="#333"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>
//                                 </div>
//                                 <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2279718596603414"
//                                     crossorigin="anonymous"></script>
//                                 <!-- Demo Sticky Ad -->
//                                 <ins class="adsbygoogle"
//                                     style="display:inline-block;width:728px;height:90px"
//                                     data-ad-client="ca-pub-2279718596603414"
//                                     data-ad-slot="6378274075">
//                                 </ins>
//                                 <script>
//                                   (adsbygoogle = window.adsbygoogle || []).push({});
//                                 </script>
//                             </div>`;
//     document.body.appendChild(stickyBtmAd);
//     (adsbygoogle = window.adsbygoogle || []).push({});
//     setTimeout(() => showStickyAd(), 3000);
// }

// let isHideVignette = false;

// const showVignetteAd = () => {
//     const vignetteAd = document.querySelector(".cn-vignette-popup");
//     const closeBtn = vignetteAd.querySelector(".close-btn");
//     const googleAd = vignetteAd.querySelector(".adsbygoogle");
//     const isAdLoaded = googleAd?.getAttribute("data-ad-status");
//     const isVignetteAdHidden = vignetteAd.classList.contains("hide");
//     if(window.innerWidth < 700 || isVignetteAdHidden || !isAdLoaded || isAdLoaded === "unfilled") return;

//     vignetteAd.classList.add("show");

//     const hideVignetteAd = () => {
//         vignetteAd.classList.remove("show");
//     }

//     closeBtn.addEventListener("click", hideVignetteAd);
// }

// const insertVignetteAd = () => {
//     const vignetteAd = document.createElement("div");
//     vignetteAd.style.opacity = "0";
//     vignetteAd.classList.add("cn-vignette-popup");
//     vignetteAd.innerHTML = `<div class="popup-overlay"></div>
//                               <div class="popup-content">
//                                 <div class="popup-header">
//                                   <span class="popup-title">Ad</span>
//                                   <span class="close-btn">
//                                     <svg viewBox="0 0 48 48" fill="#6d6d6d"><path d="M38 12.83L35.17 10 24 21.17 12.83 10 10 12.83 21.17 24 10 35.17 12.83 38 24 26.83 35.17 38 38 35.17 26.83 24z"></path><path d="M0 0h48v48H0z" fill="none"></path></svg>
//                                   </span>
//                                 </div>
//                                 <div class="popup-body">
//                                   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2279718596603414"
//                                          crossorigin="anonymous"></script>
//                                     <!-- Demo Vignette Ad -->
//                                     <ins class="adsbygoogle"
//                                          style="display:block"
//                                          data-ad-client="ca-pub-2279718596603414"
//                                          data-ad-slot="5807977133"
//                                          data-ad-format="auto"
//                                          data-full-width-responsive="true"></ins>
//                                     <script>
//                                          (adsbygoogle = window.adsbygoogle || []).push({});
//                                     </script>
//                                 </div>
//                             </div>`;
//     document.body.appendChild(vignetteAd);
//     document.addEventListener("click", () => {
//         if(isHideVignette) return;
//         showVignetteAd();
//         isHideVignette = true;
//     });
// }

const insertLinkAndScript = () => {
    const isCustomLinkExist = document.querySelector('link[href="../custom-styles.css"]');
    if(!isCustomLinkExist) {
        const customLink = document.createElement("link");
        customLink.rel = "stylesheet";
        customLink.href = "../custom-styles.css";
    
        document.head.appendChild(customLink);
    }
    
    // const favIconLink = document.createElement("link");
    // favIconLink.rel = "icon";
    // favIconLink.type = "image/png";
    // favIconLink.href = "../favicon.png";
    // document.head.appendChild(favIconLink);

    const adScript = document.createElement("script");
    adScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2279718596603414';
    adScript.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(adScript);
    
    const gtagScript = document.createElement('script');
    gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-YGFQCTFP4H';
    gtagScript.async = true;
    document.head.appendChild(gtagScript);

    const gtagConfigScript = document.createElement('script');
    gtagConfigScript.textContent = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YGFQCTFP4H');`;
    document.head.appendChild(gtagConfigScript);

    removePrevBtnStyles();
    createDownloadBtn();
    
    adScript.onload = () => {
        // insertVignetteAd();
        insertStickyAd();
    }
}

insertLinkAndScript();