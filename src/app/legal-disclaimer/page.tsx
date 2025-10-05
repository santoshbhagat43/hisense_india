import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Disclaimer - Hisense Global",
  description: "Hisense India - Legal disclaimer and terms of use for website and products",
  keywords: "Hisense India, Legal Disclaimer, Terms of Use, Legal Information, Disclaimer",
};

export default function LegalDisclaimerPage() {
  return (
    <div className="page-wrapper">
      <div className="main-container">
        <div className="main-banner-container legal">
          <h1>Legal Disclaimer</h1>
          <img 
            className="desktop-only" 
            src="/assets/images/Banners/generic-banner.jpg"
            alt="Hisense Air Conditioner 1" 
          />
          <img 
            className="mobile-only" 
            src="/assets/images/Banners/generic-banner-mobile.jpg"
            alt="Hisense Air Conditioner 1" 
          />
        </div>
        <div className="generic-container">
          <div className="inner-content">
            <h2></h2>
            <div className="content">
              <p>
                Neither Hisense International Co., Ltd. nor any parent, subsidiary or affiliate of Hisense
                (collectively, "Hisense"), warrants the accuracy, integrity or completeness of
                the content provided on
                this website('Website"), or the products, content, merchandize, and services
                displayed herein ("Information"). Hisense makes no representation as to
                thelegality, applicability and/or
                appropriateness of the use of the Website or Information by you. Hisense hereby expressly
                disclaims all warranties,whether expressed or implied, including but not limited to
                warranties of title,
                merchantability or fitness for a particular purpose. No oral advice orwritten information
                given by Hisense or their respective agents or employees shall create a warranty. Under no
                circumstances shall Hisense
                be liable for any direct, indirect, incidental,special or consequential damages that result
                from your use of, or inability to use, the Website, including but not limited to reliance by
                you on any Information
                obtained from the Website that results in mistakes, omissions, interruptions,deletion or
                corruption of files, viruses, delays in operation or transmission,failure of performance, or
                disclosure or loss of
                private or personal information which may be read or intercepted by others, even if a
                particulartransmission is encrypted ("Limitation of Liability"). The foregoing
                Limitation of Liability shall
                apply in any action, whether in contract, tort or any other claim, even if an authorized
                representative of Hisense has been advised of, or should have knowledge of, the possibility
                of such loss or damages.
                You hereby acknowledge that this paragraph shall apply to all Information and/or data
                transmitted through the Website. Some provinces, states, countries or territories do not
                allow the exclusion or limitation
                of incidental orconsequential damages, so the above limitation or exclusion may not apply to
                you.
              </p>

              <p>
                Hisense produces a multitude of product categories and each product category contains
                numerous series and models. Due to continuous technological innovations, changes in external
                conditions, changes in
                design, in product updates and upgrades, in parts and services and the availability of the
                same, the Information displayed on the Website are subject to change at any time and for any
                reason, at
                Hisense's sole discretion, and are solely a representation of the products and
                services manufactured and/or sold by Hisense. The products, content, merchandize and
                services offered by Hisense depend on
                many factors and can also vary by retailer and location, including the country in which they
                are sold, the region within a specificgeographic area, from retailer to retailer, model to
                model, and over time.
                <br />
                <br />
                All renderings, photos, and descriptions are meant to be representative of the products,
                content, merchandize, and services. In keeping with Hisense's policy of constant
                innovation and improvement, the
                Information displayed on the Website may vary from the actual product and are not meant to
                be exact representations of the same. All product descriptions, pricing and dimensions are
                approximate. PRODUCT
                AVAILABILITY, SPECIFICATIONS AND FEATURES ARE SUBJECT TO CHANGE AT ANY TIME, AND FROM TIME
                TO TIME, AND WITHOUT NOTICE.
              </p>

              <p>
                All products, content, merchandize, and services available on this Website are for consumer
                use only. Since Hisense sells products in more than 130 countries around the world, the
                products,
                content,merchandize and services actually available or sold in each country may differ.
              </p>

              <p>Disclaimer: Independent distributors and retailers areseparately owned and operated and are
                not agents or representatives of Hisense.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
