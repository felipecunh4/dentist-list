/// <reference types="next" />
/// <reference types="next/types/global" />

type TImagePath = string;
type TSvgImage = React.FC<React.SVGProps<SVGSVGElement>>;

declare module '*.svg' {
  const content: TSvgImage;
  export = content;
}

declare module '*.png' {
  const content: TImagePath;
  export = content;
}

declare module '*.jpeg' {
  const content: TImagePath;
  export = content;
}

declare module '*.jpg' {
  const content: TImagePath;
  export = content;
}
