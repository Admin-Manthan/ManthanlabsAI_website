import React from "react";
import { videoProducts, languageProducts } from "../data/productsData";
import { ProductCard } from "../components/products/ProductCard";
import { DemoForm } from "../components/products/DemoForm";

export function ProductsView({ isVisible = true }) {
  return (
    <div className="view" data-view="products" hidden={!isVisible}>
      <section className="page-head">
        <div className="wrap">
          <p className="kicker">Products</p>
          <h1>Tools that came out of the lab.</h1>
          <p className="lede">
            Each one started as an experiment. The marker beside it shows how
            far along it is.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="group-title">Video and vision</h2>
          <p className="group-note">
            Models that watch recorded video and understand who is on screen and
            what matters.
          </p>
          <div className="products">
            {videoProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="group-title">Language and voice</h2>
          <p className="group-note">
            LLM-based products built on the work we used to do for clients.
          </p>
          <div className="products">
            {languageProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="demo">
        <div className="wrap demo">
          <div>
            <h2 style={{ fontSize: "var(--step-3)", marginBottom: "16px" }}>
              Request a demo
            </h2>
            <p className="prose">
              Tell us which product you want to see and what you would use it
              for. We will reply with a time for a short walkthrough.
            </p>
          </div>
          <DemoForm />
        </div>
      </section>
    </div>
  );
}
