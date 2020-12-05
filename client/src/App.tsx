import React, { Fragment, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import Loading from "./components/shared/Loading";

const NotFound = React.lazy(() => import('@/components/shared/NotFound/NotFound'));
const Home = React.lazy(() => import("@/pages/Home/"));
const Products = React.lazy(() => import('@/pages/Products/'));
const SpecifyProduct = React.lazy(() => import('@/pages/SpecifyProduct'));
const Cart = React.lazy(() => import('@/pages/Cart'));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<Loading/>}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/product/:_id" exact component={SpecifyProduct}/>
                    <Route path="/products" exact component={Products} />
                    <Route path="/cart" exact component={Cart} />
                    <Route exact component={NotFound} />
                </Switch>
                <Footer />
            </Suspense>
        </Fragment>
    );
}

export default App;
