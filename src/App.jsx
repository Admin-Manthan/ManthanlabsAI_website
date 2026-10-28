import React from "react";
import { useHashRoute } from "./hooks/useHashRoute";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { HomeView } from "./views/HomeView";
import { ProductsView } from "./views/ProductsView";
import { ReelcutView } from "./views/ReelcutView";
import { ConsultancyView } from "./views/ConsultancyView";

export default function App() {
  const { currentView } = useHashRoute();

  return (
    <>
      <Header currentView={currentView} />
      <main>
        <HomeView isVisible={currentView === "home"} />
        <ProductsView isVisible={currentView === "products"} />
        <ReelcutView isVisible={currentView === "reelcut"} />
        <ConsultancyView isVisible={currentView === "consultancy"} />
      </main>
      <Footer />
    </>
  );
}
