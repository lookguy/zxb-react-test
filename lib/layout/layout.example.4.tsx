import React from 'react';
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import Aside from "./aside";
import './layout.example.scss'

export default function () {
    return (
        <div>
            <div>
                <h1>第四个例子</h1>
                <Layout style={{height:400, width:400}} className={'lo'}>
                    <Aside className="aside">aside</Aside>
                    <Layout>
                        <Header className="peripheral">header</Header>
                        <Content className="content">content</Content>
                        <Footer className="peripheral">footer</Footer>
                    </Layout>
                </Layout>
            </div>
        </div>
    )
};