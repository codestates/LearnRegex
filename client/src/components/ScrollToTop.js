import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  // pathname이 바뀔 때마다 브라우저의 top으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
