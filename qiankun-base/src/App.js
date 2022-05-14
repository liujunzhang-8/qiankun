
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { DesktopOutlined, PieChartOutlined } from '@ant-design/icons';
import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className='logo' />
                <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Vue应用
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        React应用
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className='site-layout'>
                <Header className='site-layout-background' style={{ padding: 0 }}  />
                <Content style={{ margin: '16px' }}>
                    <div id='container' className='site-layout-background' style={{ minHeight: 360 }}></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    This Project ©2022 Created by Gorgio）
                </Footer>
            </Layout>
        </Layout>
    )
}

export default App;
