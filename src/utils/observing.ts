export const observeElement = (
  elemId: string,
  callback: (isIntersecting: boolean) => void,
  thresholdValue: number = 1
) => {
  const elem = document.querySelector(elemId);
  if (!elem) {
    console.error('Please give a valid elem id to observer');
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      const isIntersecting = entries[0].isIntersecting === true;
      callback(isIntersecting);
    },
    { threshold: [thresholdValue] }
  );

  observer.observe(elem);
};
