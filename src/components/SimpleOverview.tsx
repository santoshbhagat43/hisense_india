import React from 'react'
import Image from 'next/image'

const SimpleOverview = () => {
  return (
    <div className="overview-two-col">
          <div className="overview-two-col-wrapper">
            <div>
              <h2>Generation for gaming</h2>
              <div className="desc">Game Mode Pro</div>
              <div className="overview-two-col-container">
                <div className="banner">
                  <div className="img">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/hisense-tv-gamemode.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={600}
                      height={400}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/hisense-tv-gamemode-mobile.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2>Accurate bright and dark</h2>
              <div className="desc">Contrast control technologies</div>
              <div className="overview-two-col-container">
                <div className="banner">
                  <div className="img">
                    <Image 
                      className="desktop-only" 
                      src="/assets/images/hisense-tv-gamemode.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={600}
                      height={400}
                    />
                    <Image 
                      className="mobile-only" 
                      src="/assets/images/hisense-tv-gamemode-mobile.jpg"
                      alt="Hisense ULED 8K TV U80G"
                      width={400}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SimpleOverview