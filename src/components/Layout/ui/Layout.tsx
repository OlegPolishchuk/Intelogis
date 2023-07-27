import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useInitializeApp } from 'components/Layout/hooks/useInitializeApp';
import { Map } from 'components/Map';
import { Menu } from 'components/Menu';
import { useState } from 'react';

export const MainLayout = () => {
  useInitializeApp();

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(false);

  const handleCollapse = (collapsed: boolean) => {
    setIsMenuCollapsed(collapsed);
  };

  return (
    <Layout>
      <Sider collapsible theme={'light'} onCollapse={handleCollapse}>
        <Menu isMenuCollapsed={isMenuCollapsed} />
      </Sider>
      <Content>
        <Map />
      </Content>
    </Layout>
  );
};
