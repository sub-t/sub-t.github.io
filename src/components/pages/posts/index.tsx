import { NextSeo } from 'next-seo';
import { Contents } from '@/components/features/app/Contents';
import { Profile } from '@/components/features/app/Profile';
import { Post } from '@/components/features/post/Post';
import { Share } from '@/components/features/post/Share';
import { Toc } from '@/components/features/post/Toc';
import { ROOT_URL } from '@/config/app';
import { useBreakPoint } from '@/hooks/useBreakPoint';
import { PostType } from '@/types/post';

type Props = {
  post: PostType;
};

export const Posts: React.VFC<Props> = ({ post }) => {
  const lg = useBreakPoint('lg');

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.excerpt}
        openGraph={{
          url: ROOT_URL,
          title: post.title,
          description: post.excerpt,
          images: [
            {
              url: ROOT_URL + post.ogImage.url,
            },
          ],
        }}
      />
      <Contents
        main={
          <article>
            <Post post={post} />
          </article>
        }
        aside={
          <div className="vstack gap-10 h-full">
            <Profile />
            <div className="sticky top-20 vstack gap-8">
              <div className="overflow-y-auto max-h-80">{lg && <Toc />}</div>
              <Share post={post} />
            </div>
          </div>
        }
        hamburgerMenu={
          <div
            role="button"
            tabIndex={0}
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' }),
              )
            }
            onKeyDown={() => {}}
            className="overflow-y-auto cursor-default"
          >
            <Toc />
          </div>
        }
      />
    </>
  );
};
