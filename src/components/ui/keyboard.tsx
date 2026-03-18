"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconSearch,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";

// Map key codes to display labels
const KEY_DISPLAY_LABELS: Record<string, string> = {
  Escape: "esc",
  Backspace: "delete",
  Tab: "tab",
  Enter: "return",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  ControlLeft: "control",
  ControlRight: "control",
  AltLeft: "option",
  AltRight: "option",
  MetaLeft: "command",
  MetaRight: "command",
  Space: "space",
  CapsLock: "caps",
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
  Backquote: "`",
  Minus: "-",
  Equal: "=",
  BracketLeft: "[",
  BracketRight: "]",
  Backslash: "\\",
  Semicolon: ";",
  Quote: "'",
  Comma: ",",
  Period: ".",
  Slash: "/",
};

const getKeyDisplayLabel = (keyCode: string): string => {
  if (KEY_DISPLAY_LABELS[keyCode]) return KEY_DISPLAY_LABELS[keyCode];
  if (keyCode.startsWith("Key")) return keyCode.slice(3);
  if (keyCode.startsWith("Digit")) return keyCode.slice(5);
  if (keyCode.startsWith("F") && keyCode.length <= 3) return keyCode;
  return keyCode;
};

interface KeyboardContextType {
  playSoundDown: (keyCode: string) => void;
  playSoundUp: (keyCode: string) => void;
  pressedKeys: Set<string>;
  setPressed: (keyCode: string) => void;
  setReleased: (keyCode: string) => void;
  lastPressedKey: string | null;
}

const KeyboardContext = createContext<KeyboardContextType | null>(null);

const useKeyboardSound = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("useKeyboardSound must be used within KeyboardProvider");
  }
  return context;
};

function Row({ children }: { children: React.ReactNode }) {
  return <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{children}</div>;
}

function KeyboardKey({
  className,
  childrenClassName,
  containerClassName,
  children,
  keyCode,
  highlight = false,
}: {
  className?: string;
  childrenClassName?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  keyCode?: string;
  highlight?: boolean;
}) {
  const { playSoundDown, playSoundUp, pressedKeys, setPressed, setReleased } =
    useKeyboardSound();
  const isPressed = keyCode ? pressedKeys.has(keyCode) : false;

  const handleMouseDown = () => {
    if (keyCode) {
      playSoundDown(keyCode);
      setPressed(keyCode);
    }
  };

  const handleMouseUp = () => {
    if (keyCode && isPressed) {
      playSoundUp(keyCode);
      setReleased(keyCode);
    }
  };

  const handleMouseLeave = () => {
    if (keyCode && isPressed) {
      setReleased(keyCode);
    }
  };

  return (
    <div className={cn("rounded-[4px] p-[0.5px]", containerClassName)}>
      <button
        type="button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3.5px] bg-gray-100 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5),0px_1px_1px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,1)_inset] transition-transform duration-75 active:scale-[0.98]",
          isPressed &&
            "scale-[0.98] bg-gray-100/80 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5),0px_1px_1px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,0.5)]",
          highlight && !isPressed && "bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-[0_0_15px_rgba(168,85,247,0.6)]",
          highlight && isPressed && "bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white shadow-[0_0_10px_rgba(168,85,247,0.8)]",
          className,
        )}
      >
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-center text-[5px] text-neutral-700",
            highlight && "text-white",
            childrenClassName,
          )}
        >
          {children}
        </div>
      </button>
    </div>
  );
}

function ModifierKey({
  className,
  containerClassName,
  children,
  keyCode,
}: {
  className?: string;
  containerClassName?: string;
  children?: React.ReactNode;
  keyCode?: string;
}) {
  const { playSoundDown, playSoundUp, pressedKeys, setPressed, setReleased } =
    useKeyboardSound();
  const isPressed = keyCode ? pressedKeys.has(keyCode) : false;

  const handleMouseDown = () => {
    if (keyCode) {
      playSoundDown(keyCode);
      setPressed(keyCode);
    }
  };

  const handleMouseUp = () => {
    if (keyCode && isPressed) {
      playSoundUp(keyCode);
      setReleased(keyCode);
    }
  };

  const handleMouseLeave = () => {
    if (keyCode && isPressed) {
      setReleased(keyCode);
    }
  };

  return (
    <div className={cn("rounded-[4px] p-[0.5px]", containerClassName)}>
      <button
        type="button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3.5px] bg-gray-100 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5),0px_1px_1px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,1)_inset] transition-transform duration-75 active:scale-[0.98]",
          isPressed &&
            "scale-[0.98] bg-gray-100/80 shadow-[0px_0px_1px_0px_rgba(0,0,0,0.5),0px_1px_1px_0px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(255,255,255,0.5)]",
          className,
        )}
      >
        <div className="flex h-full w-full flex-col items-start justify-between p-1 text-[5px] text-neutral-700">
          {children}
        </div>
      </button>
    </div>
  );
}

function OptionKey({ className }: { className?: string }) {
  return (
    <svg
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25"
      />
    </svg>
  );
}

const KeyboardProvider = ({
  children,
  enableSound = false,
  containerRef,
}: {
  children: React.ReactNode;
  enableSound?: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioBufferRef = useRef<AudioBuffer | null>(null);
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [lastPressedKey, setLastPressedKey] = useState<string | null>(null);
  const [soundLoaded, setSoundLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enableSound) return;

    // Initialize AudioContext
    const initAudio = () => {
      try {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
        }
        setSoundLoaded(true);
      } catch (error) {
        console.warn("Failed to initialize audio context:", error);
      }
    };

    initAudio();

    return () => {
      audioContextRef.current?.close();
    };
  }, [enableSound]);

  const playClickSound = useCallback(
    (frequency: number, type: OscillatorType = "sine", duration = 0.05) => {
      if (!enableSound || !audioContextRef.current) return;

      const ctx = audioContextRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const oscillator = ctx.createOscillator();
      const gainNode = ctx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
      oscillator.frequency.exponentialRampToValueAtTime(frequency / 2, ctx.currentTime + duration);

      gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

      oscillator.connect(gainNode);
      gainNode.connect(ctx.destination);

      oscillator.start();
      oscillator.stop(ctx.currentTime + duration);
    },
    [enableSound],
  );

  const playSoundDown = useCallback(
    (keyCode: string) => {
      // Different frequencies for different keys to make it more interesting
      const charCode = keyCode.charCodeAt(keyCode.length - 1);
      const frequency = 400 + (charCode % 10) * 20;
      playClickSound(frequency, "sine", 0.05);
    },
    [playClickSound],
  );

  const playSoundUp = useCallback(
    (keyCode: string) => {
      const charCode = keyCode.charCodeAt(keyCode.length - 1);
      const frequency = 600 + (charCode % 10) * 20;
      playClickSound(frequency, "sine", 0.03);
    },
    [playClickSound],
  );

  const setPressed = useCallback((keyCode: string) => {
    setPressedKeys((prev) => new Set(prev).add(keyCode));
    setLastPressedKey(keyCode);
  }, []);

  const setReleased = useCallback((keyCode: string) => {
    setPressedKeys((prev) => {
      const next = new Set(prev);
      next.delete(keyCode);
      return next;
    });
  }, []);

  // Track visibility with IntersectionObserver
  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  // Handle physical keyboard events (only when visible)
  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent repeat events
      if (e.repeat) return;

      const keyCode = e.code;
      playSoundDown(keyCode);
      setPressed(keyCode);
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const keyCode = e.code;
      playSoundUp(keyCode);
      setReleased(keyCode);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [isVisible, playSoundDown, playSoundUp, setPressed, setReleased]);

  return (
    <KeyboardContext.Provider
      value={{
        playSoundDown,
        playSoundUp,
        pressedKeys,
        setPressed,
        setReleased,
        lastPressedKey,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

const KeystrokePreview = () => {
  const { lastPressedKey, pressedKeys } = useKeyboardSound();
  const [displayKey, setDisplayKey] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (lastPressedKey) {
      // Clear display if space or shift is pressed
      if (
        lastPressedKey === "Space" ||
        lastPressedKey === "ShiftLeft" ||
        lastPressedKey === "ShiftRight"
      ) {
        setDisplayKey(null);
        return;
      }

      setDisplayKey(getKeyDisplayLabel(lastPressedKey));
      setAnimationKey((prev) => prev + 1);
    }
  }, [lastPressedKey]);

  const isPressed = pressedKeys.size > 0;

  return (
    <div className="relative flex h-12 w-full items-center justify-center">
      <AnimatePresence mode="popLayout">
        {displayKey && (
          <motion.div
            key={animationKey}
            layout
            initial={{ opacity: 0, scale: 0.5, y: 5 }}
            animate={{
              opacity: 1,
              scale: isPressed ? 0.95 : 1,
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0.8, y: -5 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.5,
            }}
            className="absolute flex items-center justify-center rounded-lg px-4 py-2 font-mono text-2xl font-black text-neutral-700"
          >
            <motion.span
              initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              animate={{ opacity: 0.6, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.05 }}
              className="text-2xl"
            >
              {displayKey}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Keyboard = ({
  className,
  enableSound = false,
  showPreview = false,
}: {
  className?: string;
  enableSound?: boolean;
  showPreview?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <KeyboardProvider enableSound={enableSound} containerRef={containerRef}>
      <div
        ref={containerRef}
        className={cn(
          "mx-auto w-fit [zoom:0.8] sm:[zoom:1.25] md:[zoom:1.5] lg:[zoom:1.75] xl:[zoom:2]",
          className,
        )}
      >
        {showPreview && <KeystrokePreview />}
        <Keypad />
      </div>
    </KeyboardProvider>
  );
};

export const Keypad = () => {
  return (
    <div className="h-full w-fit rounded-xl bg-neutral-200 p-1 shadow-sm ring-1 shadow-black/5 ring-black/5">
      {/* Function Row */}
      <Row>
        <KeyboardKey
          keyCode="Escape"
          containerClassName="rounded-tl-xl"
          className="w-10 rounded-tl-lg"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>esc</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F1">
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="mt-1">F1</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F2">
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="mt-1">F2</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F3">
          <IconTable className="h-[6px] w-[6px]" />
          <span className="mt-1">F3</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F4">
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="mt-1">F4</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F5">
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="mt-1">F5</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F6">
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="mt-1">F6</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F7">
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="mt-1">F7</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F8">
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="mt-1">F8</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F9">
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="mt-1">F9</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F10">
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="mt-1">F10</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F11">
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="mt-1">F11</span>
        </KeyboardKey>
        <KeyboardKey keyCode="F12">
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="mt-1">F12</span>
        </KeyboardKey>
        <KeyboardKey containerClassName="rounded-tr-xl" className="rounded-tr-lg">
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300 p-px">
            <div className="h-full w-full rounded-full bg-neutral-100" />
          </div>
        </KeyboardKey>
      </Row>

      {/* Number Row */}
      <Row>
        <KeyboardKey keyCode="Backquote">
          <span>~</span>
          <span>`</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit1">
          <span>!</span>
          <span>1</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit2">
          <span>@</span>
          <span>2</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit3">
          <span>#</span>
          <span>3</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit4">
          <span>$</span>
          <span>4</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit5">
          <span>%</span>
          <span>5</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit6">
          <span>^</span>
          <span>6</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit7">
          <span>&</span>
          <span>7</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit8">
          <span>*</span>
          <span>8</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit9">
          <span>(</span>
          <span>9</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Digit0">
          <span>)</span>
          <span>0</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Minus">
          <span>—</span>
          <span>_</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Equal">
          <span>+</span>
          <span>=</span>
        </KeyboardKey>
        <KeyboardKey
          keyCode="Backspace"
          className="w-10"
          childrenClassName="items-end justify-end pr-[4px] pb-[2px]"
        >
          <span>delete</span>
        </KeyboardKey>
      </Row>

      {/* QWERTY Row */}
      <Row>
        <KeyboardKey
          keyCode="Tab"
          className="w-10"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>tab</span>
        </KeyboardKey>
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
          <KeyboardKey key={letter} keyCode={`Key${letter}`} highlight={["W", "R"].includes(letter)}>
            {letter}
          </KeyboardKey>
        ))}
        <KeyboardKey keyCode="BracketLeft">
          <span>{`{`}</span>
          <span>{`[`}</span>
        </KeyboardKey>
        <KeyboardKey keyCode="BracketRight">
          <span>{`}`}</span>
          <span>{`]`}</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Backslash">
          <span>{`|`}</span>
          <span>{`\\`}</span>
        </KeyboardKey>
      </Row>

      {/* Home Row */}
      <Row>
        <KeyboardKey
          keyCode="CapsLock"
          className="w-[2.8rem]"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>caps lock</span>
        </KeyboardKey>
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
          <KeyboardKey key={letter} keyCode={`Key${letter}`} highlight={letter === "F"}>
            {letter}
          </KeyboardKey>
        ))}
        <KeyboardKey keyCode="Semicolon">
          <span>:</span>
          <span>;</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Quote">
          <span>{`"`}</span>
          <span>{`'`}</span>
        </KeyboardKey>
        <KeyboardKey
          keyCode="Enter"
          className="w-[2.85rem]"
          childrenClassName="items-end justify-end pr-[4px] pb-[2px]"
        >
          <span>return</span>
        </KeyboardKey>
      </Row>

      {/* Bottom Letter Row */}
      <Row>
        <KeyboardKey
          keyCode="ShiftLeft"
          className="w-[3.65rem]"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>shift</span>
        </KeyboardKey>
        {["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
          <KeyboardKey key={letter} keyCode={`Key${letter}`}>
            {letter}
          </KeyboardKey>
        ))}
        <KeyboardKey keyCode="Comma">
          <span>{`<`}</span>
          <span>,</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Period">
          <span>{`>`}</span>
          <span>.</span>
        </KeyboardKey>
        <KeyboardKey keyCode="Slash">
          <span>?</span>
          <span>/</span>
        </KeyboardKey>
        <KeyboardKey
          keyCode="ShiftRight"
          className="w-[3.65rem]"
          childrenClassName="items-end justify-end pr-[4px] pb-[2px]"
        >
          <span>shift</span>
        </KeyboardKey>
      </Row>

      {/* Modifier Row */}
      <Row>
        <ModifierKey
          keyCode="Fn"
          containerClassName="rounded-bl-xl"
          className="rounded-bl-lg"
        >
          <span>fn</span>
          <IconWorld className="h-[6px] w-[6px]" />
        </ModifierKey>
        <ModifierKey keyCode="ControlLeft">
          <IconChevronUp className="h-[6px] w-[6px]" />
          <span>control</span>
        </ModifierKey>
        <ModifierKey keyCode="AltLeft">
          <OptionKey className="h-[6px] w-[6px]" />
          <span>option</span>
        </ModifierKey>
        <ModifierKey keyCode="MetaLeft" className="w-8">
          <IconCommand className="h-[6px] w-[6px]" />
          <span>command</span>
        </ModifierKey>
        <KeyboardKey keyCode="Space" className="w-[8.2rem]" />
        <ModifierKey keyCode="MetaRight" className="w-8">
          <IconCommand className="h-[6px] w-[6px]" />
          <span>command</span>
        </ModifierKey>
        <ModifierKey keyCode="AltRight">
          <OptionKey className="h-[6px] w-[6px]" />
          <span>option</span>
        </ModifierKey>
        {/* Arrow Keys */}
        <div className="flex h-6 w-[4.9rem] items-center justify-end rounded-[4px] p-[0.5px]">
          <KeyboardKey keyCode="ArrowLeft" className="h-6 w-6">
            <IconCaretLeftFilled className="h-[6px] w-[6px]" />
          </KeyboardKey>
          <div className="flex flex-col">
            <KeyboardKey keyCode="ArrowUp" className="h-3 w-6">
              <IconCaretUpFilled className="h-[6px] w-[6px]" />
            </KeyboardKey>
            <KeyboardKey keyCode="ArrowDown" className="h-3 w-6">
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </KeyboardKey>
          </div>
          <KeyboardKey
            keyCode="ArrowRight"
            containerClassName="rounded-br-xl"
            className="h-6 w-6 rounded-br-lg"
          >
            <IconCaretRightFilled className="h-[6px] w-[6px]" />
          </KeyboardKey>
        </div>
      </Row>
    </div>
  );
};
