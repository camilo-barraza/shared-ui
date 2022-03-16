import { ThemeContext } from "styled-components";
import React, { useState, useEffect, useRef, useContext } from "react";

export const useOverlay = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
};

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

export const useIsMobile = () => {
  const {
    mediaQueryBreakpoints: { mobile },
  } = useContext(ThemeContext);
  return useMediaQuery(mobile);
};

export const useInput = <T, R = unknown>(
  value: T,
  onChange: (value: T) => R,
  onChangeTimeout = 400
) => {
  const [text, setText] = useState(value);
  const tid = useRef<ReturnType<typeof setTimeout> | null>(null);

  // improves performance in forms
  useEffect(() => {
    if (text !== value) {
      tid.current && clearTimeout(tid.current);
      tid.current = setTimeout(() => onChange(text), onChangeTimeout);
    }
  }, [text]);

  useEffect(() => {
    setText(value);
  }, [value]);

  return { text, setText };
};

export const usePrevious = <T>(value: T) => {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

export const useDivTop = () => {
  const ref = useRef<HTMLElement>();
  const [divTop, setDivTop] = useState<number>();
  useEffect(() => {
    const setTop = () => setDivTop(ref?.current?.getBoundingClientRect().top);
    setTop();
    window.addEventListener("resize", setTop);
    return () => {
      window.removeEventListener("resize", setTop);
    };
  }, []);
  return { ref, divTop };
};

export const useWindowInnerHeight = () => {
  const [windowInnerHeight, setInnerHeight] = useState(window.innerHeight);
  useEffect(() => {
    const _setInnerHeight = () => setInnerHeight(window.innerHeight);
    _setInnerHeight();
    window.addEventListener("resize", _setInnerHeight);
    return () => {
      window.removeEventListener("resize", _setInnerHeight);
    };
  }, []);
  return windowInnerHeight;
};

interface WindowSize {
  width: number;
  height: number;
}

export const useWindowInnerSize = () => {
  const [innerSize, setInnerSize] = useState<WindowSize>({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const _setInnerSize = () => {
      setInnerSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    _setInnerSize();
    window.addEventListener("resize", _setInnerSize);
    return () => {
      window.removeEventListener("resize", _setInnerSize);
    };
  }, []);
  return innerSize;
};

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useClickOutside = (
  ref: HTMLDivElement | null,
  onClickOutside: Function
) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref && !ref.contains(event.target as Node)) {
        onClickOutside(event);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};
