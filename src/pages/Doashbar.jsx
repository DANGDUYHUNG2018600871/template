import React, { useState } from 'react';
import { FileOutlined, PieChartOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Col, Layout, Menu, Row, theme } from 'antd';
import AvatarLog from '../services/AvatarLog';
import LogoWeb from '../services/LogoWeb';
import UpLoad from '../services/UpLoad';
import Chart from '../components/Chart';
import Paging from '../services/Paging';
import SelectChart from '../services/SelectChart';
import SelectChartProduct from '../services/SelectChartProduct';
import EChartsComponent from '../components/EChartsComponent';


const { Header, Content, Footer, Sider } = Layout;

function Doashbar() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = (item) => {
    setSelectedItem(item.key);
  };

  const renderComponent = () => {
    if (selectedItem === 'Profile') {
      return <ProfileComponent/>;
    } else if (selectedItem === 'Product') {
      return <ProductComponent/>;
    } else if (selectedItem === 'Chart') {
      return <ChartComponent/>;
    }

    return null;
  };

  const items = [
    { label: 'Home', key: 'Home', icon: <PieChartOutlined /> },
    { label: 'Option', key: 'Option' },
    {
      label: 'User',
      key: 'User',
      icon: <UserOutlined />,
      children: [
        { label: 'Profile', key: 'Profile' },
        { label: 'Product', key: 'Product' },
        { label: 'Chart', key: 'Chart' },
      ],
    },
    {
      label: 'Team',
      key: 'sub2',
      children: [
        { label: 'Team 1', key: 'Team 1' },
        { label: 'Team 2', key: 'Team 2' },
      ],
    },
    { label: 'Files', key: 'Files', icon: <FileOutlined /> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical">
          <LogoWeb/>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={handleMenuClick}>
          {items.map((item) => {
            if (item.children) {
              return (
                <Menu.SubMenu key={item.key} title={item.label} icon={item.icon}>
                  {item.children.map((child) => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              );
            }

            return (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Row>
            <Col md={16}>
            </Col>
            <Col md={4}>             
            </Col>
            <Col md={4}>
              <AvatarLog className="avatarlog"></AvatarLog>
            </Col>
          </Row>
            
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>LTS</Breadcrumb.Item>
            {selectedItem && <Breadcrumb.Item>{selectedItem}</Breadcrumb.Item>}
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            {renderComponent()}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Chiến Thần Front-end</Footer>
      </Layout>
    </Layout>
  );
}

function ProfileComponent() {
  return <UpLoad/>
}

function ProductComponent() {
  return <Paging/>
}

function ChartComponent() {
  return (
    <div className='chartuser'>
      <EChartsComponent/>
      <SelectChart />
      <SelectChartProduct/>
    </div>
  );
}

export default Doashbar;
