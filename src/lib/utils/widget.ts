const loadScript = ({ propertyId = '', widgetId = '' }) => {
  // Detect if window is defined to prevent SSR errors
  if (typeof window === 'undefined') {
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
  script.charset = 'utf8';
  script.setAttribute('crossorigin', '*');

  const firstScript = document.querySelectorAll('script')[0];
  firstScript.parentNode?.insertBefore(script, firstScript);
};

export { loadScript };
