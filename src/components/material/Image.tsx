import React from 'react';

export const Image = React.forwardRef<
  React.ElementRef<'img'>,
  React.ComponentPropsWithoutRef<'img'>
>(({ children, src, alt, ...props }, forwardedRef) => {
  const imgPath = src;

  return (
    <img src={imgPath} alt={alt} {...props} ref={forwardedRef}>
      {children}
    </img>
  );
});

Image.displayName = 'Image';
