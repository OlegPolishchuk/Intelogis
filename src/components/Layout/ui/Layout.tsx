import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { useInitializeApp } from 'components/Layout/hooks/useInitializeApp';
import { Map } from 'components/Map';
import { Menu } from 'components/Menu';

export const MainLayout = () => {
  useInitializeApp();

  return (
    <Layout>
      <Sider collapsible theme={'light'}>
        <Menu />
      </Sider>
      <Content>
        <Map />
      </Content>
    </Layout>
  );
};
