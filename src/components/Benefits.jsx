import styles from '../styles/benefits.module.css';
import bag from '../logo/frame-17.svg';
import bag2 from '../logo/frame-171.svg';
import bag3 from '../logo/frame-172.svg';
import bag4 from '../logo/frame-173.svg';

const FrameComponent = () => {
  return (
    <div className={styles.jkyogGiftshopOffersSeveralParent}>
      <div className={styles.jkyogGiftshopOffers}>JKyog Giftshop Offers Several Benefits</div>
      <div className={styles.head}>
        <div className={styles.antDesigntrophyOutlined} />
        <div className={styles.frameChild} />
        <div className={styles.groupWrapper}>
          <div className={styles.frameParent}>
            <img className={styles.groupChild} alt="" src={bag2} />
            <div className={styles.convenientShopping}>Convenient Shopping</div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.frameParent}>
            <img className={styles.groupChild} alt="" src={bag3} />
            <div className={styles.secureTransactions}>Secure Transactions</div>
          </div>
        </div>
        <div className={styles.groupFrame}>
          <div className={styles.frameParent}>
            <img className={styles.groupChild} alt="" src={bag4} />
            <div className={styles.secureTransactions}>Authentic and High-Quality Items</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent}>
            <img className={styles.groupChild} alt="" src={bag} />
            <div className={styles.secureTransactions}>Customer Support</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
