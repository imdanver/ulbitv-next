import MyLink from "./MyLink";
import Head from "next/head";
import React from "react";

const MainContainer = ({children, keywords}) => {

    return (
        <>
            <Head>
                <meta keywords={keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className='navbar'>
                <MyLink href={'/'} text="Главная"/>
                <MyLink href={'/users'} text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style>
                {`
                .navbar {
                    background: orange;
                    padding: 15px;
                }    
            `}
            </style>
        </>
    );
};

export default MainContainer;