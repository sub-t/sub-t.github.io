import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => (
  <>
    <DefaultSeo
      defaultTitle="subt blog"
      description="blog"
      openGraph={{
        type: 'website',
        title: 'subt blog',
        description: 'blog',
        site_name: 'sub-t.github.io',
        url: ROOT_URL,
        images: [
          {
            url: joinPath(ROOT_URL, '/assets/author.png'),
            width: 512,
            height: 512,
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
      additionalMetaTags={[
        {
          name: 'msapplication-TileImage',
          content: '/favicons/mstile-150x150.png',
        },
      ]}
    />
  </>
);
