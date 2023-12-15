import { useEffect, useRef, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { FaShoppingBasket } from "react-icons/fa";
//if no user exist then use this lock for login
import { FaUnlock } from "react-icons/fa6";
import { motion } from "framer-motion";

interface LoginButtonProps{
    onClick: (e:any) => void;
    userName: string | undefined;
}

const LoginButton = ({onClick , userName}:LoginButtonProps) => {
  return (
    <div className="grid place-content-start md:place-content-center py-2 pl-1 md:pl-0 pr-4"
    onClick={onClick}>
      <EncryptButton userName={userName} />
    </div>
  );
};

// const TARGET_TEXT = "LOGIN";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({userName}:any) => {

  const [text, setText] = useState(userName);
  const intervalRef = useRef<any>(null);

  useEffect(() => {
    setText(userName)
  },[userName])

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled =  userName.split("")
        .map((char: any, index: number) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= userName.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(userName);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg border-[1px] border-slate-800 bg-slate-900 px-4 py-2 font-mono font-medium uppercase text-slate-300 transition-colors hover:text-indigo-300"
    >
      <div className="relative z-10 flex items-center gap-2">
        {userName !== "IRAN MTA SHOP" ? (<VscAccount />) : (<FaShoppingBasket />)}
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-indigo-400/0 from-40% via-indigo-400/100 to-indigo-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default LoginButton;