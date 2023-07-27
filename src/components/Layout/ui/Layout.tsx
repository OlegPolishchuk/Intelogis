import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import { Map } from 'components/Map';

import cls from './Layout.module.css';

export const MainLayout = () => {
  return (
    <Layout className={cls.layout}>
      <Sider collapsible theme={'light'}>
        left sidebar
      </Sider>
      <Content className={cls.content}>
        <Map />
      </Content>
    </Layout>
  );
};
