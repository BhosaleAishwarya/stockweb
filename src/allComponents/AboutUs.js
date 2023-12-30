import React from 'react';
import { Typography, Row, Col, Card, Button, Space } from 'antd';


const { Title, Text } = Typography;

const AboutUs = () => {
  return (
    <div>
      
      <div style={{ backgroundColor: '#fffocb', padding: '20px 0' }}>
        <Title style={{ color: 'white', textAlign: 'center' }}>****About Us Page****</Title>
        <Text style={{ color: 'white', textAlign: 'center', display: 'block' }}>
          Some text about who we are and what we do. Resize the browser window to see that this page is responsive by the way.
        </Text>
      </div>

      <Title level={2} style={{ textAlign: 'center', marginTop: '22px' }}>Our Team Member</Title>

      <Row gutter={[16, 16]} justify="center">
        <Col span={6}>
          <Card>
            <img
              src="/images/jyon.jpg" // Update with your image path
              alt="Jyon"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Jyon moye</Title>
              <Text strong>CTO &  Founder</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>jyon@example.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
          <img
              src="/images/bose.jpg" 
              alt="bose"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Bose Ero</Title>
              <Text strong>Artist</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>bose@example.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>

        <Col span={6}>
          <Card>
          <img
              src="/images/jay.jpg" // Update with your image path
              alt="Jay"
              style={{ width: '100%' }}
            />
            <div style={{ textAlign: 'center' }}>
              <Title level={4}>Jay Deo</Title>
              <Text strong>Art Designer</Text><br/>
              <Text>Some text that describes me lorem ipsum ipsum lorem.</Text><br/>
              <Text>jay@example.com</Text><br/>
              <Space>
                <Button type="primary">Contact</Button>
              </Space>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AboutUs;

