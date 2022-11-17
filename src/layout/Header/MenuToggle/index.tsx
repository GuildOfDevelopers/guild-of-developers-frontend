import { motion, SVGMotionProps } from 'framer-motion';
import { MouseEventHandler } from 'react';
import { Button } from './style';

type MenuToggleTypes = {
  isOpen: boolean;
  toggle: MouseEventHandler<HTMLButtonElement>;
};

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path fill="transparent" strokeLinecap="round" strokeWidth="3" {...props} />
);

const transition = { duration: 0.33 };

const MenuToggle: React.FC<MenuToggleTypes> = ({ isOpen, toggle }) => {
  return (
    <Button onClick={toggle}>
      <svg width="30" height="20" viewBox="0 0 30 20">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 1 2.5 L 30 2.5', stroke: '#26C0F1' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: '#26C0F1' }
          }}
          transition={transition}
        />
        <Path
          d="M 1 9.423 L 30 9.423"
          stroke="#26C0F1"
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 1 16.346 L 30 16.346', stroke: '#26C0F1' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: '#26C0F1' }
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;
