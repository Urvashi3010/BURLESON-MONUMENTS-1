import { useEffect, useState } from 'react';

/**
 * Types `text` character by character. Set `loop` to retype after a pause.
 * Respects prefers-reduced-motion (shows full text immediately).
 */
export default function Typewriter({
  text,
  speed = 55,
  startDelay = 600,
  loop = false,
  pause = 3500,
  as: Tag = 'span',
  className = '',
}) {
  const [count, setCount] = useState(0);

  const reduced =
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (reduced) {
      setCount(text.length);
      return;
    }
    let timer;
    const type = (i) => {
      setCount(i);
      if (i < text.length) {
        timer = setTimeout(() => type(i + 1), speed + Math.random() * 35);
      } else if (loop) {
        timer = setTimeout(() => type(0), pause);
      }
    };
    timer = setTimeout(() => type(0), startDelay);
    return () => clearTimeout(timer);
  }, [text, speed, startDelay, loop, pause, reduced]);

  const done = count >= text.length;

  return (
    <Tag className={className} aria-label={text}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className={`tw-cursor ${done ? 'tw-cursor--idle' : ''}`} />
      </span>
    </Tag>
  );
}
