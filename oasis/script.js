// --- Modal Logic for Auth and Signup ---

function openAuthModal() {
  const authModal = document.getElementById('authModal');
  if (authModal) {
    authModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  const authModal = document.getElementById('authModal');
  if (authModal) {
    authModal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function openSignUpModal() {
  const signupModal = document.getElementById('signupModal');
  if (signupModal) {
    signupModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function closeSignUpModal() {
  const signupModal = document.getElementById('signupModal');
  if (signupModal) {
    signupModal.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function switchToLogin(e) {
  if (e) e.preventDefault();
  closeSignUpModal();
  openAuthModal();
}

function switchToSignUp(e) {
  if (e) e.preventDefault();
  closeAuthModal();
  openSignUpModal();
}

// Optional: close modal when clicking outside modal content
document.addEventListener('DOMContentLoaded', function () {
  ['signupModal', 'authModal'].forEach(function(id) {
    const modal = document.getElementById(id);
    if (modal) {
      modal.addEventListener('click', function (e) {
        if (e.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = '';
        }
      });
    }
  });
});

// --- Sign out modal logic ---
function showSignOutModal() {
  const signOutModal = document.getElementById('signOutModal');
  if (signOutModal) signOutModal.style.display = 'flex';
}

function closeSignOutModal() {
  const signOutModal = document.getElementById('signOutModal');
  if (signOutModal) signOutModal.style.display = 'none';
}

// --- Typing animation for hero title ---
function typeHeroTitle(text, element, speed = 80) {
  element.textContent = "";
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// --- Translations ---
const translations = {
  en: {
    downloadApp: "Download App",
    heroTitle: "Smart Health in Your Pocket",
    heroSubtitle: "Track your medications, monitor your vitals, and get real-time health tips. Everything you need, right at your fingertips.",
    getStarted: "Get Started",
    alreadyHaveAccount: "Already Have An Account",
    signUp: "Sign Up",
    login: "Login",
    forgotPassword: "Forgot Password?",
    dontHaveAccount: "Don't have an account?",
    haveAccount: "Already have an account?",
    features: "App Features",
    drugReminders: "Drug Reminders",
    drugRemindersDesc: "Custom medication schedules and smart notifications that keep users on track.",
    aiHealthTips: "AI Health Tips",
    aiHealthTipsDesc: "Real-time suggestions and alerts based on health habits and personal goals.",
    wellnessTracking: "Wellness Tracking",
    wellnessTrackingDesc: "Monitor your steps, hydration, heart rate, and more in one dashboard.",
    appPreview: "App Preview"
  },
  pidgin: {
    downloadApp: "Download di App",
    heroTitle: "Beta Health for Your Pocket",
    heroSubtitle: "Dey check your medicine, dey look your body, and get beta health tips sharp sharp. Everything wey you need dey your hand.",
    getStarted: "Start Now",
    alreadyHaveAccount: "You get account?",
    signUp: "Register",
    login: "Login",
    forgotPassword: "You forget your password?",
    dontHaveAccount: "You never get account?",
    haveAccount: "You get account?",
    features: "App Features",
    drugReminders: "Medicine Reminder",
    drugRemindersDesc: "Arrange your medicine time and get reminder so you no go forget.",
    aiHealthTips: "AI Health Tips",
    aiHealthTipsDesc: "Get beta advice and alert for your health wahala.",
    wellnessTracking: "Wellness Tracking",
    wellnessTrackingDesc: "Check your steps, water, heart, and more for one place.",
    appPreview: "App Preview"
  },
  igbo: {
    downloadApp: "Budata Ngwa",
    heroTitle: "Akwụkwọ Ọrụ Ahụ Ike n’Aka Gị",
    heroSubtitle: "Lelee ọgwụ gị, nyochaa ahụike gị, nweta ndụmọdụ ahụike ozugbo. Ihe niile ịchọrọ dị n’aka gị.",
    getStarted: "Bido Ugbu a",
    alreadyHaveAccount: "Ị nwere akaụntụ?",
    signUp: "Debanye",
    login: "Banye",
    forgotPassword: "Chefuru okwuntughe?",
    dontHaveAccount: "Ị nweghị akaụntụ?",
    haveAccount: "Ị nwere akaụntụ?",
    features: "Njirimara Ngwa",
    drugReminders: "Ncheta Ọgwụ",
    drugRemindersDesc: "Hazie oge ọgwụ gị, nweta ncheta ka ị ghara ichefu.",
    aiHealthTips: "Ndụmọdụ Ahụ Ike AI",
    aiHealthTipsDesc: "Nweta ndụmọdụ na ịdọ aka ná ntị dabere na omume gị.",
    wellnessTracking: "Nyocha Ahụ Ike",
    wellnessTrackingDesc: "Nyochaa ije, mmiri, obi, na ihe ndị ọzọ n'otu dashboard.",
    appPreview: "Nlele Ngwa"
  },
  yoruba: {
    downloadApp: "Gba App",
    heroTitle: "Ilera Smart ninu Apo Rẹ",
    heroSubtitle: "Tẹle oogun rẹ, ṣayẹwo ilera rẹ, ki o gba imọran ilera lẹsẹkẹsẹ. Gbogbo ohun ti o nilo wa ninu ọwọ rẹ.",
    getStarted: "Bẹrẹ Bayi",
    alreadyHaveAccount: "Ṣe o ni iroyin?",
    signUp: "Forukọsilẹ",
    login: "Wọle",
    forgotPassword: "Gbagbe ọrọ aṣínà?",
    dontHaveAccount: "Ṣe o ko ni iroyin?",
    haveAccount: "Ṣe o ni iroyin?",
    features: "Awọn ẹya App",
    drugReminders: "Iranti Oogun",
    drugRemindersDesc: "Ṣeto akoko oogun rẹ ki o gba iranti ki o má bà a gbagbe.",
    aiHealthTips: "Awọn Imọran Ilera AI",
    aiHealthTipsDesc: "Gba imọran ati ikilọ lẹsẹkẹsẹ lori ilera rẹ.",
    wellnessTracking: "Titele Ilera",
    wellnessTrackingDesc: "Tẹle igbesẹ, omi, okan, ati diẹ sii ni ibi kan.",
    appPreview: "Aworan App"
  },
  hausa: {
    downloadApp: "Zazzage App",
    heroTitle: "Lafiya Mai Kaifin Basira a Aljihunka",
    heroSubtitle: "Bibiye magunguna, duba lafiyar jikinka, da samun shawarwari na lafiya kai tsaye. Duk abin da kake bukata yana hannunka.",
    getStarted: "Fara Yanzu",
    alreadyHaveAccount: "Kana da asusu?",
    signUp: "Yi Rijista",
    login: "Shiga",
    forgotPassword: "Ka manta kalmar sirri?",
    dontHaveAccount: "Baka da asusu?",
    haveAccount: "Kana da asusu?",
    features: "Fasali na App",
    drugReminders: "Tuna Magani",
    drugRemindersDesc: "Saita jadawalin magani da samun tunatarwa don kada ka manta.",
    aiHealthTips: "Shawarwari na Lafiya AI",
    aiHealthTipsDesc: "Samun shawarwari da gargaɗi kai tsaye dangane da halayenka.",
    wellnessTracking: "Bibiye Lafiya",
    wellnessTrackingDesc: "Bibiye matakai, ruwa, bugun zuciya, da ƙari a dashboard ɗaya.",
    appPreview: "Duban App"
  }
  // Add more languages as needed
};

// --- Language switching logic ---
function setLanguage(lang) {
  const t = translations[lang] || translations.en;

  // Typing animation for hero title
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) typeHeroTitle(t.heroTitle, heroTitle);

  // Hero subtitle
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) heroSubtitle.textContent = t.heroSubtitle;

  // Download App button
  const downloadBtn = document.querySelector('.download_btn');
  if (downloadBtn) downloadBtn.textContent = t.downloadApp;

  // Get Started button
  const getStartedBtn = document.querySelector('.btn-rounded');
  if (getStartedBtn) getStartedBtn.textContent = t.getStarted;

  // Already Have An Account button
  const loginBtn = document.querySelector('.login_btn');
  if (loginBtn) loginBtn.textContent = t.alreadyHaveAccount;

  // Sign Up Modal
  const signupModalTitle = document.querySelector('#signupModal h2');
  if (signupModalTitle) signupModalTitle.textContent = t.signUp;
  const signupModalBtn = document.querySelector('#signupModal button[type="submit"]');
  if (signupModalBtn) signupModalBtn.textContent = t.signUp;
  const signupModalP = document.querySelector('#signupModal p');
  if (signupModalP) signupModalP.innerHTML = `${t.haveAccount} <a href="#" onclick="switchToLogin(event)">${t.login}</a>`;

  // Login Modal
  const loginModalTitle = document.querySelector('#authModal h2');
  if (loginModalTitle) loginModalTitle.textContent = t.login;
  const loginModalBtn = document.querySelector('#authModal button[type="submit"]');
  if (loginModalBtn) loginModalBtn.textContent = t.login;
  const forgotPasswordLink = document.querySelector('#authModal .forgot-password-link');
  if (forgotPasswordLink) forgotPasswordLink.textContent = t.forgotPassword;
  const signupLinkText = document.querySelector('#authModal .signup-link-text');
  if (signupLinkText) signupLinkText.innerHTML = `${t.dontHaveAccount} <a href="#" class="signup-link" onclick="switchToSignUp(event)">${t.signUp}</a>`;

  // Features section title
  const sectionTitle = document.querySelector('.features .section-title');
  if (sectionTitle) sectionTitle.textContent = t.features;

  // Feature cards
  const featureTitles = document.querySelectorAll('.feature-title');
  const featureDescs = document.querySelectorAll('.feature-card p');
  if (featureTitles.length >= 3 && featureDescs.length >= 3) {
    featureTitles[0].textContent = t.drugReminders;
    featureDescs[0].textContent = t.drugRemindersDesc;
    featureTitles[1].textContent = t.aiHealthTips;
    featureDescs[1].textContent = t.aiHealthTipsDesc;
    featureTitles[2].textContent = t.wellnessTracking;
    featureDescs[2].textContent = t.wellnessTrackingDesc;
  }

  // Screenshots section title
  const screenshotsTitle = document.querySelector('.screenshots .section-title');
  if (screenshotsTitle) screenshotsTitle.textContent = t.appPreview;
}

// --- Set default language based on browser ---
document.addEventListener('DOMContentLoaded', function() {
  const userLang = navigator.language.slice(0,2);
  let lang = 'en';
  if (userLang === 'ig') lang = 'igbo';
  else if (userLang === 'yo') lang = 'yoruba';
  else if (userLang === 'ha') lang = 'hausa';
  // pidgin is not auto-detected, default to English
  setLanguage(lang);
});