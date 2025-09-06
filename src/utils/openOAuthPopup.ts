export function openOAuthPopup(url: string, onSuccess: (token: string) => void, onError?: () => void) {
  const width = 500;
  const height = 600;
  const left = window.screenX + (window.outerWidth - width) / 2;
  const top = window.screenY + (window.outerHeight - height) / 2.5;

  const popup = window.open(
    url,
    'oauthPopup',
    `width=${width},height=${height},left=${left},top=${top}`
  );

  if (!popup) {
    onError?.();
    return;
  }

  const messageListener = (event: MessageEvent) => {
    if (event.origin !== window.location.origin) return;

    const { type, token } = event.data;

    if (type === 'oauth-token') {
      onSuccess(token);
      window.removeEventListener('message', messageListener);
    }
  };

  window.addEventListener('message', messageListener);
}