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
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: '#333333' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: '#333333' }
          }}
          transition={transition}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          stroke="#333333"
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
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: '#333333' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: '#333333' }
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
};

export default MenuToggle;
