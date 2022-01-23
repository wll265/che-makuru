import React from "react";
import MainNav from "./MainNav";
import Header from "./Header";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import ProductsCarouselSection from "./ProductsCarouselSection";
import ContactSection from "./ContactSection";
import ClientsSection from "./ClientsSection";
import EmailSection from "./EmailSection";
import MainFooter from "./MainFooter";
import ProductModal from "./ProductModal";

const MainBody = () => (
  <div>
    <MainNav></MainNav>
    <Header></Header>
    <AboutSection></AboutSection>
    <ServicesSection></ServicesSection>
    <PortfolioSection></PortfolioSection>
    <ProductsCarouselSection></ProductsCarouselSection>
    <ContactSection></ContactSection>
    {/* <ClientsSection></ClientsSection> */}
    <EmailSection></EmailSection>
    <MainFooter></MainFooter>
   
  
  </div>
);

export default MainBody;
