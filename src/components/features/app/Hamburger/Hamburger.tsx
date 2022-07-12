import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/common/DropdownMenu';
import { Link } from '@/components/common/Link';
import { links } from '@/config/links';
import { Trigger } from './Trigger';

type Props = {
  children?: React.ReactNode;
};

export const Hamburger: React.VFC<Props> = ({ children }) => {
  return (
    <DropdownMenu>
      <Trigger />
      <DropdownMenuContent
        sideOffset={8}
        collisionTolerance={16}
        className="vstack gap-2 max-h-80 bg-primary-1 rounded-lg shadow-lg"
      >
        <div className="center">
          {links.map(({ name, href, icon }) => (
            <DropdownMenuItem
              key={name}
              onClick={() =>
                document.dispatchEvent(
                  new KeyboardEvent('keydown', { key: 'Escape' }),
                )
              }
              className="text-md text-primary-1 hover:text-teal-800 hover:dark:text-teal-400 focus:text-teal-800 focus:dark:text-teal-400 capitalize select-none cursor-pointer"
            >
              <Link href={href} passHref>
                <a className="hstack gap-3 py-3 px-6">
                  {icon} {name}
                </a>
              </Link>
            </DropdownMenuItem>
          ))}
        </div>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
