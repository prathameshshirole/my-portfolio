// Analytics utilities for tracking user interactions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Only track in production
  if (process.env.NODE_ENV !== 'production') {
    console.log('Analytics Event:', eventName, parameters);
    return;
  }

  // Google Analytics 4 tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, parameters);
  }
};

// Common tracking events
export const analytics = {
  // Navigation tracking
  trackNavigation: (section: string) => {
    trackEvent('navigate', {
      section_name: section,
      timestamp: new Date().toISOString()
    });
  },

  // Contact form tracking
  trackFormSubmission: (formType: 'contact') => {
    trackEvent('form_submit', {
      form_type: formType,
      timestamp: new Date().toISOString()
    });
  },

  // Project interactions
  trackProjectView: (projectName: string) => {
    trackEvent('project_view', {
      project_name: projectName,
      timestamp: new Date().toISOString()
    });
  },

  // Download tracking
  trackDownload: (fileName: string) => {
    trackEvent('file_download', {
      file_name: fileName,
      timestamp: new Date().toISOString()
    });
  },

  // Social media clicks
  trackSocialClick: (platform: string) => {
    trackEvent('social_click', {
      platform: platform,
      timestamp: new Date().toISOString()
    });
  },

  // Performance tracking
  trackPageLoad: (loadTime: number) => {
    trackEvent('page_performance', {
      load_time: loadTime,
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString()
    });
  }
};

// Page load performance tracking
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    // Track page load time
    const loadTime = performance.now();
    analytics.trackPageLoad(loadTime);
  });
}