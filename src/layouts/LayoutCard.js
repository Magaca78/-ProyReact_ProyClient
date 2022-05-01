import React from "react";
import { Layout } from "antd";

export default function LayoutCard(props){
    const {children} = props
    /*Especificas los componentes que quieres obtener de este layout */
    const {Header, Content, Footer} = Layout
    return(
        <Layout>
        <h2>Bienvenido</h2>
            <Layout>
                <Header></Header>
                <Content>{children}</Content>
                <Footer>React Project 2022</Footer>
            </Layout>
        </Layout>
        
    );
}