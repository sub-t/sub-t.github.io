import { useBreakPoint } from '@/hooks/useBreakPoint';
import { cn } from '@/lib/cn';
import { FloatHamburger } from './FloatHamburger';

type Props = {
  main: React.ReactElement;
  aside?: React.ReactNode;
  hamburgerMenu?: React.ReactNode;
  className?: string;
};

export const Contents: React.VFC<Props> = ({
  main,
  aside,
  hamburgerMenu,
  className,
}) => {
  const lg = useBreakPoint('lg');

  return (
    <div className={cn(className, 'grid grid-cols-1 lg:grid-cols-3 gap-10')}>
      <div className="lg:col-span-2">
        <main>{main}</main>
      </div>
      <aside>{aside}</aside>
      {lg || <FloatHamburger hamburgerMenu={hamburgerMenu} />}
    </div>
  );
};
