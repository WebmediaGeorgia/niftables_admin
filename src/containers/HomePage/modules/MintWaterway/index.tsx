import React, { FC, Ref, useEffect, useRef } from 'react';
import mainStyles from './../../styles.module.scss';
import styles from './styles.module.scss';
import mintBg from 'public/assets/img/home-page/mint/mint-bg.png';
import circleAnime from 'public/assets/img/home-page/mint/circle-anime.gif';
import circleBlur from 'public/assets/img/home-page/mint/circle-blur.png';
import crocodile from 'public/assets/img/home-page/mint/crocodile.png';
import waterwayBg from 'public/assets/img/home-page/waterway/waterway-bg.jpg';
import waterwayBlur from 'public/assets/img/home-page/waterway/waterway-blur.jpg';
import bubble from 'public/assets/img/home-page/waterway/bubble.png';
import axolots from 'public/assets/img/home-page/waterway/axolots.gif';
import cn from 'classnames';

type Props = {
  mintWaterwaySection: Ref<HTMLDivElement>
  mintTranslate: number
  activeWaterwayTab: number
  setActiveWaterwayTab: React.Dispatch<React.SetStateAction<number>>
}

const MintWaterway: FC<Props> = (
  { mintWaterwaySection, mintTranslate, activeWaterwayTab, setActiveWaterwayTab }
) => {
  const currWaterwayText = useRef<HTMLDivElement>(null);
  const waterwayText = useRef<HTMLDivElement>(null);


  useEffect(() => {
    if (!waterwayText.current || !currWaterwayText.current) return;
    const range = currWaterwayText.current.offsetTop - waterwayText.current.offsetTop - 1;
    waterwayText.current.scrollTo({
      top: range,
      behavior: 'smooth'
    });
  }, [activeWaterwayTab]);

  return (
    <section className={styles.mintWaterway} ref={mintWaterwaySection}>
      <div className={styles.mintWaterwayWrap}>
        <div className={styles.mintTest} style={{ transform: `translate(${mintTranslate}vw,0)` }}>
          <section className={styles.mint}>
            <div className={cn(mainStyles.container, styles.container)}>
                  <span className={styles.mainTitle}>
                    Mint<br/>Section</span>
              <p className={styles.mainText}>
                Praesent sapien massa, convallis a pellentesque necro,
                egestas non nisi. Proin eget tortor risus. Lorem ipsum dolor
                sit amet, nec egestas non nisi. Proin eget tortor risus
                eget.
              </p>
              <button className={styles.btn}>Mint</button>
              <img src={mintBg.src} alt="" className={styles.bg}/>
              <div className={styles.animeCircle}>
                <div className={styles.wrapperCircle}>
                  <img
                    src={circleAnime.src}
                    alt=""
                    className={styles.circleAnime}
                  />
                  <img src={circleBlur.src} alt="" className={styles.circleBlur}/>
                  <img src={crocodile.src} alt="" className={styles.character}/>
                </div>
              </div>
            </div>
          </section>

          <section
            className={cn(styles.waterway, {
              [styles.first]: activeWaterwayTab === 1,
              [styles.second]: activeWaterwayTab === 2,
              [styles.third]: activeWaterwayTab === 3,
              [styles.four]: activeWaterwayTab === 4,
            })}>
            <img className={styles.waterwayBg} src={waterwayBg.src} alt=""/>
            <img className={styles.waterwayBlur} src={waterwayBlur.src} alt=""/>
            <div className={cn(mainStyles.container, styles.container)}>
              <div className={styles.waterwayTabs}>
                <div className={styles.waterwayBubble}>
                  <div className={styles.bubbleContainer}>
                    <img src={bubble.src} alt="" className={styles.bubble}/>
                    <img src={axolots.src} alt="" className={styles.axolots}/>
                  </div>
                </div>
                <span className={styles.waterwayMaintitle}>Waterway</span>
                <a onClick={() => setActiveWaterwayTab(1)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 1 })}>
                  Season 1
                </a>
                <a onClick={() => setActiveWaterwayTab(2)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 2 })}>
                  Season 2
                </a>
                <a onClick={() => setActiveWaterwayTab(3)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 3 })}>
                  Season 3
                </a>
                <a onClick={() => setActiveWaterwayTab(4)}
                   className={cn(styles.waterwayTab, { [styles.active]: activeWaterwayTab === 4 })}>
                  Season 4
                </a>
              </div>
              <div ref={waterwayText} className={styles.waterwayTexts}>
                <span className={cn(styles.hiddenTitle)}>
                  <span className={cn(styles.waterwayMaintitle)}>Waterway</span>
                  Season 1</span>
                <div ref={activeWaterwayTab === 1 ? currWaterwayText : null} className={styles.waterwayText1}>
                  <h4 className={styles.waterwayTitle}>
                    <span className={styles.textAccent}>2,500</span> Superlotls<br/>
                    hatched
                  </h4>
                  <ul>
                    <li>Each will have one unique tattoo</li>
                  </ul>
                  <p>
                    All tattoos will be available for sale on
                    <a rel="noreferrer" href="https://inkbox.com/" target="_blank"><span> inkbox.com </span></a>
                  </p>
                  <p>
                    Commissions will be earned per sale and sent to crypto
                    wallet each month
                  </p>
                  <p>
                    Claim the tattoo (activate) and earn passive income!
                  </p>
                  <ul>
                    <li>
                      Discount for holders, (for physical products)
                      <br/>(5% or 1 free tattoo, to be defined)
                    </li>
                    <li>Big bang, large beginning</li>
                  </ul>
                </div>
                <div ref={activeWaterwayTab === 2 ? currWaterwayText : null} className={styles.waterwayText2}>
                <span className={cn(styles.hiddenTitle)}>
                  <span className={cn(styles.waterwayMaintitle)}>Waterway</span>
                  Season 2</span>
                  <h4 className={styles.waterwayTitle}>
                    <span className={styles.textAccent}>2,500 more</span><br/>
                    Superlotls hatched
                  </h4>
                  <ul>
                    <li>Each will have one unique tattoo</li>
                  </ul>
                  <p>
                    Tattoo drops allow hodlers to add to their Superlotl and
                    collect up to 4 tattoos
                  </p>
                  <ul>
                    <li>Discount for holders for inkbox.com</li>
                    <li>
                      Current Superlotl parents get x% off season 2 mint,
                      and access to whitelist spots (family first discount)
                    </li>
                  </ul>
                  <p>Other aspects</p>
                  <ul>
                    <li>
                      Tattoo sketch contest (winner will be sold on
                      inkbox.com and appear in season 3 Superlotl collection
                      as a tattoo)
                    </li>
                  </ul>
                </div>
                <div ref={activeWaterwayTab === 3 ? currWaterwayText : null} className={styles.waterwayText3}>
                  <span className={cn(styles.hiddenTitle)}>
                  <span className={cn(styles.waterwayMaintitle)}>Waterway</span>
                  Season 3</span>
                  <h4 className={styles.waterwayTitle}>
                  <span className={styles.textAccent}>Another 2,500</span
                  ><br/>Superlotls hatching<br/>
                    to you soon!
                  </h4>
                  <p>Treasury fund activated</p>
                  <ul>
                    <li>
                      Hodlers will be able to vote for where the treasury
                      will be spent, and what kind of impact will be made
                      from the community
                    </li>
                  </ul>
                  <p>
                    Extra tattoo drops allows you to add to your character
                  </p>
                  <p>Other aspects</p>
                  <ul>
                    <li>
                      x% discount on free hand marker on inkbox.com, online
                      community events (special guests based on season’s
                      collaborators, announcement for the collabs to be live
                      during this event)
                    </li>
                  </ul>
                </div>
                <div ref={activeWaterwayTab === 4 ? currWaterwayText : null} className={styles.waterwayText4}>
                 <span className={cn(styles.hiddenTitle)}>
                  <span className={cn(styles.waterwayMaintitle)}>Waterway</span>
                  Season 4</span>
                  <h4 className={styles.waterwayTitle}>
                  <span className={styles.textAccent}>final 2,500</span
                  ><br/>Superlotls available<br/>
                    for mint
                  </h4>
                  <p>
                    Superlotl owners can now trade tattoos within the
                    collection
                  </p>
                  <ul>
                    <li>
                      Have tattoos appear / change on their actual Superlotl
                    </li>
                  </ul>
                  <p>Other aspects</p>
                  <ul>
                    <li>
                      Community events, giveaways, toronto pop up shop
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
    ;
};

export default MintWaterway;
