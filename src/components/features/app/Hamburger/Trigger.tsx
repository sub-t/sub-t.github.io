import { MdDragIndicator } from 'react-icons/md';
import { RiMenu4Line } from 'react-icons/ri';
import { DropdownMenuTrigger } from '@/components/common/DropdownMenu';

export const Trigger = () => (
  <>
    <DropdownMenuTrigger asChild>
      <button
        aria-label="hamburger menu"
        className="icon-btn rounded-full bg-white dark:bg-black shadow-xl"
      >
        <RiMenu4Line size={28} />
      </button>
    </DropdownMenuTrigger>
    <div className="p-1 icon-btn absolute -bottom-2 -right-2 rounded-full bg-white dark:bg-black shadow-xl cursor-grab">
      <MdDragIndicator size={16} />
    </div>
  </>
);
