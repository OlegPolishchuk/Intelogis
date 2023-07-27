import { Button, Menu as AntdMenu } from 'antd';
import { useMenu } from 'components/Menu/hooks/useMenu';

import cls from './Menu.module.css';

export const Menu = () => {
  const { items, handleSelectRoute, resetMap, selectedKeys } = useMenu();

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

      <Button className={cls.button_reset} onClick={resetMap}>
        Сбросить
      </Button>
    </>
  );
};
