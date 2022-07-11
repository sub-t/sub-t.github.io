import { DefaultSeo } from 'next-seo';
import { useRootPath } from '@/hooks/useRootPath';

export const Seo = () => {
  const rootPath = useRootPath();
  const imageURL = rootPath + '/assets/author.png';

  return (
    <>
      <DefaultSeo
        defaultTitle="blog"
        description="blog"
        openGraph={{
          type: 'website',
          title: 'blog',
          description: 'blog',
          site_name: 'blog',
          url: process.env.NEXT_PUBLIC_ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          { rel: 'manifest', href: '/manifest.json' },
          { rel: 'icon', href: '/favicon.ico' },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: '/favicons/favicon-16x16.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: '/favicons/favicon-32x32.png',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: '/favicons/apple-touch-icon.png',
          },
          {
            rel: 'mask-icon',
            href: '/favicons/safari-pinned-tab.svg',
            color: '#5bbad5',
          },
        ]}
      />
    </>
  );
};
