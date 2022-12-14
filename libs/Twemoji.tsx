import React from 'react';
import NextImage from 'next/image';
import twemoji from 'twemoji';

const U200D = String.fromCharCode(0x200d);
const UFE0Fg = /\uFE0F/g;

function Twemoji({
                   emoji,
                   ext = 'svg',
                   width = 72,
                   height = 72,
                 }: { emoji: string; ext?: 'svg' | 'png'; width?: number; height?: number; }) {
  const HEXCodePoint = twemoji.convert.toCodePoint(emoji.indexOf(U200D) < 0 ? emoji.replace(UFE0Fg, '') : emoji);

  return (
    <NextImage
      src={`https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/${ext === 'png' ? '72x72' : 'svg'}/${HEXCodePoint}.${ext}`}
      width={width}
      height={height}
      alt={emoji}
      draggable={false}
      style={{ userSelect: 'none', pointerEvents: 'none' }}
    />
  );
}

export default React.memo(Twemoji);
