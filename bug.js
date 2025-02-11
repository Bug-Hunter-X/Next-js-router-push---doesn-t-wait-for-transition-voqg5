```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/another-page');
    // Some other logic that depends on the route transition being complete
    console.log('Route change complete');
  };

  return (
    <button onClick={handleClick}>Go to Another Page</button>
  );
}
```