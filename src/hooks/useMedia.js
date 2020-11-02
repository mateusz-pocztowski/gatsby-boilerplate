import { useEffect, useState } from 'react';
import { breakpoints } from 'theme/mainTheme';

const useMedia = breakpoint => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(
      `(min-width: ${breakpoints[breakpoint.toLowerCase()]}px)`
    );
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [breakpoint, matches]);

  return matches;
};

export const useCustomMedia = query => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
};

export default useMedia;
