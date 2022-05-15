
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
     } from '@ant-design/icons';
import './App.css';
import { Link } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem((
        <Link to="/app-vue">
            Vue应用
        </Link>
    ), '1', <PieChartOutlined />),
    getItem((
        <Link to='/app-react'>
            React应用
        </Link>
    ), '2', <DesktopOutlined />),
    getItem((
        <Link to='/app-angular'>
            Angular应用
        </Link>
    ), '3', <ContainerOutlined />),
];

const App = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    // const toggleCollapsed = () => {
    //     setCollapsed(!collapsed);
    // };

    return (
        // <div
        //     style={{
        //         width: 256,
        //     }}
        // >
        //     {/* <Button
        //         type="primary"
        //         onClick={toggleCollapsed}
        //         style={{
        //             marginBottom: 16,
        //         }}
        //     >
        //         {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        //     </Button> */}
        //     <Menu
        //         defaultSelectedKeys={['1']}
        //         defaultOpenKeys={['sub1']}
        //         mode="inline"
        //         theme="dark"
        //         inlineCollapsed={collapsed}
        //         items={items}
        //     />
        // </div>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className='logo' />
                <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
                theme="dark"
                collapsed="true"
                items={items}
                />
                {/* <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        <Link to="/app-vue">Vue应用</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        <Link to='/app-react'>React应用</Link>
                    </Menu.Item>
                </Menu> */}
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
