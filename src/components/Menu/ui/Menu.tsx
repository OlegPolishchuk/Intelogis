import { Menu as AntdMenu } from 'antd';
import { useMenu } from 'components/Menu/hooks/useMenu';

export const Menu = () => {
  const { items, handleSelectRoute } = useMenu();

  return (
    <>
      <AntdMenu
        onClick={handleSelectRoute}
        style={{ minWidth: 0, flex: 'auto' }}
        items={items}
        theme={'light'}
      />
    </>
  );
};
