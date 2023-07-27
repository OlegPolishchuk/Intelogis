import { Button } from 'antd';
import { ResetIcon } from 'components/Icons/ResetIcon';
import cls from 'components/Menu/ui/Menu.module.css';
import { ComponentPropsWithRef } from 'react';

interface Props extends ComponentPropsWithRef<'button'> {
  isMenuCollapsed?: boolean;
}

export const ResetButton = ({ onClick, className, isMenuCollapsed }: Props) => {
  const title = isMenuCollapsed ? <ResetIcon /> : 'Сбросить';
  const shape = isMenuCollapsed ? 'circle' : 'default';

  return (
    <Button shape={shape} className={`${cls.button_reset} ${className}`} onClick={onClick}>
      {title}
    </Button>
  );
};
