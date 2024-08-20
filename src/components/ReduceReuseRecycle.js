import React from 'react';
import { ArrowRight } from 'lucide-react';

const ReuseReduceRecycle = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-green-400 to-green-200 h-[73vh] ">
      {/* Left side with recycling symbol */}
      <div className="w-2/3 flex justify-center items-center p-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          viewBox="0 -5 500 625"
          preserveAspectRatio="xMidYMid meet"
          className="w-full max-w-lg mx-auto floating"
        >
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#34D399', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#065F46', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <g
            transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
            fill="url(#greenGradient)"
            stroke="none"
            className="rotating"
          >
            <path d="M1978 4111 c-65 -21 -144 -75 -180 -123 -14 -18 -96 -161 -182 -318 -87 -157 -166 -299 -176 -317 l-19 -32 137 -74 c75 -41 240 -132 366 -201 125 -69 231 -126 235 -126 3 0 94 158 200 350 107 193 197 350 201 350 7 0 203 -330 214 -360 4 -11 -40 -41 -168 -113 -96 -55 -182 -104 -191 -111 -12 -8 15 -10 117 -4 73 4 288 14 478 23 190 10 346 18 346 19 2 2 408 735 423 764 15 28 26 34 -176 -85 -80 -46 -146 -83 -147 -81 -2 2 -49 81 -105 176 -112 189 -142 221 -235 246 -38 11 -160 16 -481 20 -236 3 -468 8 -515 11 -67 4 -97 1 -142 -14z" />
            <path d="M3400 2975 c-195 -113 -356 -209 -358 -214 -2 -6 3 -20 12 -33 8 -13 98 -168 199 -345 l185 -323 -221 0 -220 0 6 220 c4 121 5 220 3 220 -2 0 -30 -48 -61 -106 -31 -58 -64 -120 -74 -137 -10 -18 -86 -159 -170 -314 l-152 -282 74 -128 c41 -70 136 -236 212 -368 179 -313 165 -294 165 -215 0 36 3 121 6 190 l7 125 211 0 c209 0 211 0 261 27 28 14 62 39 77 55 14 15 132 195 261 398 128 204 248 391 266 418 68 99 89 224 56 334 -15 50 -370 683 -383 683 -4 0 -167 -92 -362 -205z" />
            <path d="M820 3046 c0 -2 70 -45 155 -95 85 -51 157 -95 159 -99 3 -5 -38 -80 -90 -167 -52 -88 -102 -184 -110 -214 -28 -93 -17 -121 217 -565 295 -559 299 -566 309 -566 4 0 31 -16 60 -35 93 -63 111 -65 532 -65 l378 0 0 420 0 420 -406 0 c-375 0 -406 1 -400 17 9 22 195 346 206 357 5 5 86 -38 187 -99 98 -59 182 -110 186 -113 13 -7 -5 26 -146 253 -71 116 -178 288 -236 382 l-106 173 -447 0 c-247 0 -448 -2 -448 -4z" />
          </g>
          <text
            x="250"
            y="530"
            fill="#065F46"
            fontSize="32px"
            fontWeight="bold"
            fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            textAnchor="middle"
          >
            Reduce, Reuse, Recycle
          </text>
        </svg>
      </div>

      {/* Right side with arrow and text */}
      <div className="w-1/2 flex flex-col justify-center items-center p-6 cursor-pointer">
        <p className="text-2xl font-bold text-green-800 mb-4 text-center">View Nearby Eco-Friendly Sellers</p>
        <ArrowRight size={120} className="text-green-800 animate-pulse hover:scale-105" />
      </div>
    </div>
  );
};

export default ReuseReduceRecycle;