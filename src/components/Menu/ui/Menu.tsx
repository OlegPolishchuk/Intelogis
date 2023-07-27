import { Menu as AntdMenu } from 'antd';
import { useMenu } from 'components/Menu/hooks/useMenu';
import { ResetButton } from 'components/ResetButton';

import cls from './Menu.module.css';

interface Props {
  isMenuCollapsed: boolean;
}

export const Menu = ({ isMenuCollapsed }: Props) => {
  const { items, handleSelectRoute, selectedKeys, resetMap } = useMenu();

  return (
    <>
      <AntdMenu
        className={cls.menu}
        selectedKeys={selectedKeys}
        onClick={handleSelectRoute}
        style={{ minWidth: 0, flex: 'auto' }}
        items={items}
        theme={'light'}
      />

      <ResetButton isMenuCollapsed={isMenuCollapsed} onClick={resetMap} />
    </>
  );
};
