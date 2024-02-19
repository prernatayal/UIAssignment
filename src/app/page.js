'use client'

import useWindowDimensions from "@/Hooks/useWindowDimensions";
import Banner from "@/components/Banner";
import CreditCard from "@/components/CreditCard";
import EligibilityForm from "@/components/EligibilityForm";
import MobileFormSection from "@/components/EligibilityForm/MobileForm";
import Faqs from "@/components/Faqs/faq";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";
import Rewards from "@/components/Rewards/rewards";
import dynamic from "next/dynamic";
const SelectStyle = dynamic(() => import("@/components/SelectStyle"), { ssr: false });

export default function Home() {

  const { width } = useWindowDimensions();

  console.log(width, "line1888");

  return (
    <main>
      <Header />
      <Banner />
      <CreditCard />
      {width < 768 ?
        <MobileFormSection />
        :
        <EligibilityForm />
      }
      <Rewards />
      <SelectStyle />
      <Faqs />
      <Footer />
    </main>
  );
}
