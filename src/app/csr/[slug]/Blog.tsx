"use client";
import type { Metadata } from "next";
import Image from "next/image";
import "@/styles/about.css";
import "@/styles/about_all_pages.css";
import BlogSlider from "@/components/BlogSlider";
import { useAboutMenu } from "@/contexts/AboutMenuContext";
import { useEffect } from "react";

export default function Blog() {

  const { setShowAboutMenu, handleActiveSlug } = useAboutMenu();

  useEffect(() => {
    setShowAboutMenu(true);
    handleActiveSlug("csr");

    return () => {
      setShowAboutMenu(false);
    };
  }, [setShowAboutMenu, handleActiveSlug]);

  return (
    <div className="main-container">
      <div className="about-csr-details">
        <section className="mainText text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <h5>Hisense&apos;s social welfare activities in South Africa</h5>
              <h1 className="hisenseBold">
                Hisense&apos;s social welfare activities in South Africa
              </h1>
              <h6 className="hisenseLight">
                <p>
                  On Mandela Day, Hisense South Africa sent support to more than
                  700 lonely elderly people in local pension institutions, and
                  donated televisions and daily necessities to the non-profit
                  child care center in Johannesburg. Hisense South Africa also
                  sponsored the underfunded Ethiopian Youth Summer Football
                  Tournament to help 440 young people realize their dreams, and
                  donated the South African Red Cross Children&apos;s Hospital
                  and other projects to actively help solve education and
                  employment problems in South Africa, North Africa, Middle East
                  and other countries and regions. Moreover, this company has
                  become the only enterprise partner of the United Nations Green
                  Innovation SEED Awards and has provided support to more than
                  100 small and medium-sized enterprises in developing countries
                  over the past five years.
                </p>
              </h6>
            </div>
          </div>
        </section>
        <div className="main-banner big-banner">
          <div className="slider">
            <div className="slide-item">
              <div className="content">
                <Image
                  className="desktop-only"
                  src="/assets/images/africa.jpg"
                  alt="Hisense's contribution in South Africa"
                  width={800}
                  height={400}
                />
                <Image
                  className="mobile-only"
                  src="/assets/images/africa.jpg"
                  alt="Hisense's contribution in South Africa"
                  width={400}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <section className="mainText text-box">
          <div className="container">
            <div className="text-box-info text-center">
              <h1 className="hisenseBold">Discover more</h1>
              <h6 className="hisenseLight"></h6>
            </div>
          </div>
        </section>
        <BlogSlider />
        {/* <div className="container my-arrow csr-datils-page-custome">
          <a className="btn-prev" id="list1-about-csrPrev"></a>
          <a className="btn-next" id="list1-about-csrNext"></a>
        </div> */}
      </div>
    </div>
  );
}
