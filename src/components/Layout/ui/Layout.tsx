import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Map } from 'components/Map';

export const MainLayout = () => {
  return (
    <Layout>
      <Sider collapsible theme={'light'}>
        left sidebar
      </Sider>
      <Content>
        <Map />
      </Content>
    </Layout>
  );
};
