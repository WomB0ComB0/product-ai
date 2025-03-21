import type React from 'react';

declare module '*.png' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.webp' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.jpg' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.gif' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.avif' {
  export const ReactComponent: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  const content: string;
  export default content;
}

declare module '*.svg' {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module '*.mp4' {
  export const ReactComponent: React.FC<React.VideoHTMLAttributes<HTMLVideoElement>>;
  const src: string;
  export default src;
}

declare module '*.webm' {
  export const ReactComponent: React.FC<React.VideoHTMLAttributes<HTMLVideoElement>>;
  const src: string;
  export default src;
}

declare module '*.mp3' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.ogg' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.wav' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.aac' {
  export const ReactComponent: React.FC<React.AudioHTMLAttributes<HTMLAudioElement>>;
  const src: string;
  export default src;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.sass' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.json' {
  const content: unknown;
  export default content;
}

declare module '*.ts' {
  const content: unknown;
  export default content;
}

declare module '*.js' {
  const content: unknown;
  export default content;
}

declare module '*.txt' {
  const content: string;
  export default content;
}

declare class EdenFetchError<
    Status extends number = number,
    Value = unknown
> extends Error {
    constructor(public status: Status, public value: Value) {
        super(value + '')
  }
}

declare module '*.module.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.module.sass' {
  const content: { [className: string]: string };
  export default content;
}

/**
 * @n
*/
declare global {
  interface Document {
    startViewTransition: (callback: () => void) => void;
  }
  interface AppRouterInstance {
    push(href: Parameters<typeof import('next/link')['default']>[0]['href'], options?: { scroll?: boolean }): void;
  }
}
