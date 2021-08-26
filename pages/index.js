import { useState } from "react";
import Router from "next/router";

import Layout from "../components/Layout";
import Container from "../components/prebuilt/Container";
import Laptop from "../components/prebuilt/Laptop";
import CheckoutForm from "../components/CheckoutForm";
import getPrice from "../utils/get-price";

const MainPage = props => {
  const [total, setTotal] = useState(1);

  const add = () => setTotal(num => Math.min(12, num + 1));
  const remove = () => setTotal(num => Math.max(1, num - 1));

  return (
    <Layout title="">
      <Container>
        <Laptop
          onAdd={add}
          onRemove={remove}
          quantity={total}
        />
      </Container>
      <CheckoutForm
        price={getPrice(total)}
        onSuccessfulCheckout={() => Router.push("/success")}
      />
    </Layout>
  );
};

export default MainPage;
