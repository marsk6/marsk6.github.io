import React, { useLayoutEffect } from 'react';

type Props = {};

const Toc: React.FC<Props> = (props) => {
  const { children } = props;

  useLayoutEffect(() => {
    const head = document
      .querySelector('.markdown')
      .querySelectorAll('h1,h2,h3,h4,h5');
    const observerHead: any = {};
    const active = {
      id: '.toc',
      top: 0,
    };
    const setActive = () => {
      const prev = { ...active };
      let nearest = Number.MAX_SAFE_INTEGER;
      Object.keys(observerHead).forEach((h) => {
        if (
          observerHead[h].isIntersecting &&
          observerHead[h].top > 0 &&
          observerHead[h].top < nearest
        ) {
          nearest = observerHead[h].top;
          active.top = nearest;
          active.id = h;
        }
      });
      if (active.id !== prev.id) {
        document
          .querySelector(`[data-id='${prev.id}']`)
          ?.classList.remove('active');
        document
          .querySelector(`[data-id='${active.id}']`)
          ?.classList.add('active');
      }
    };
    const observer = new IntersectionObserver(
      (enties: IntersectionObserverEntry[]) => {
        enties.forEach((entry) => {
          const id = `#${entry.target.id}`;
          if (!observerHead[id]) {
            observerHead[id] = {};
          }
          observerHead[id].top = entry.boundingClientRect.top;
          observerHead[id].isIntersecting = entry.isIntersecting;
        });
        setActive();
      },
      {
        threshold: [0, 1],
      }
    );
    head.forEach((h) => {
      observer.observe(h);
    });
    const tocContainer = document.querySelector('.toc');
    const handleClick = (e: Event) => {
      const li = e.target as HTMLLIElement;
      const headId = li.getAttribute('data-id');
      document.querySelector(headId).scrollIntoView({ block: 'start' });
      e.stopImmediatePropagation();
      return false;
    };
    tocContainer.addEventListener('click', handleClick, true);
    return () => {
      observer.disconnect();
      tocContainer.removeEventListener('click', handleClick);
    };
  }, []);
  return <>{children}</>;
};

export default Toc;
