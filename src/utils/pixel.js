/**
 * Tracking Helper with Meta Pixel integration
 */

export const captureAndPersistUTMs = () => {
  try {
    const params = new URLSearchParams(window.location.search);
    const utms = {};
    for (const [key, value] of params.entries()) {
      if (key.startsWith('utm_') || key === 'src' || key === 'sck') {
        utms[key] = value;
      }
    }
    return utms;
  } catch {
    return {};
  }
};

export const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : '';
};

export const generateEventID = () => `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

export const trackMetaEvent = (eventName, params = {}) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params);
  }
};

export const trackPageView = () => {
  trackMetaEvent('PageView');
};

export const trackQuizStart = () => {
  trackMetaEvent('QuizStart', { content_name: 'Protocolo Gluteos' });
};

export const trackQuizStep = (stepNumber, stepName) => {
  trackMetaEvent('QuizStep', { step_number: stepNumber, step_name: stepName });
};

export const trackSummaryView = () => {
  trackMetaEvent('SummaryView');
};

export const trackAnalyzingStep = () => {
  trackMetaEvent('AnalyzingStep');
};

export const trackCouponUnlocked = () => {
  trackMetaEvent('CouponUnlocked');
};

export const trackOfferPage = () => {
  trackMetaEvent('ViewContent', { content_name: 'Offer Page' });
};

export const getFinalCheckoutUrl = (baseUrl) => baseUrl || '#';
export const getFinalDownsellCheckoutUrl = (baseUrl) => baseUrl || '#';

export const trackCheckoutClick = (value = 9.90) => {
  trackMetaEvent('InitiateCheckout', {
    value: value,
    currency: 'USD',
    content_name: 'Protocolo Glúteos Brasileños $9.90',
  });
};

export const trackDownsellCheckoutClick = (value = 5.90) => {
  trackMetaEvent('InitiateCheckout', {
    value: value,
    currency: 'USD',
    content_name: 'Protocolo Glúteos Brasileños $5.90 Downsell',
  });
};

export const trackVSLView = () => {
  trackMetaEvent('VSLView');
};

export const trackVSLPlay = () => {
  trackMetaEvent('VSLPlay');
};

export const trackVSLProgress = (percent) => {
  trackMetaEvent('VSLProgress', { percent });
};

export const trackVSLComplete = () => {
  trackMetaEvent('VSLComplete');
};

export const trackBackredirectView = () => {
  trackMetaEvent('BackRedirectView');
};

