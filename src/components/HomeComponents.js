import React from 'react'
import { Link } from "react-router-dom"
import { Layout, Flex } from 'antd';
import { Content } from 'antd/es/layout/layout';

const { Header, Footer } = Layout;

function HomeComponents() {
    return (
        <div>
            <Layout>
                <Header>
                    <div style={{ gap: "16px", display: "flex" }}>
                        <Link style={ {color : "WHITE" }} to="/">
                            Home
                        </Link>
                        <Link style={ {color: "WHITE" }} to="/about">
                            About
                        </Link>
                        <Link style={{ color: "WHITE" }} to="/company">
                            CompanyProfile
                        </Link>
                    </div>
                </Header>
                <Content>Content</Content>
                <Footer style={{ textAlign: "center" }}>
                    &#169;2024 PT Indodev Niaga Internet
                </Footer>
            </Layout>
        </div>
    )
}

export default HomeComponents
