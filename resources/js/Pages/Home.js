import React from "react";
import Layout from "../Shared/Layout";

function Home() {
    return <div>Hi</div>;
}

Home.layout = (page) => <Layout children={page} title="Home" />;

export default Home;
