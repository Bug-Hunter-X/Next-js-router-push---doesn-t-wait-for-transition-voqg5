```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    (async () => {
      const routeChangeComplete = new Promise((resolve) => {
        const listener = (e) => {
          if (e.url === '/another-page') {
            router.events.off('routeChangeComplete', listener);
            resolve();
          }
        };
        router.events.on('routeChangeComplete', listener);
      });

      await router.push('/another-page');
      await routeChangeComplete;
      console.log('Route change complete');
    })();
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
```