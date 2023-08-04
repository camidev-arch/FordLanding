import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="clients" style={{paddingTop:'30rem '}}  className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-cta rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our new Ford Raptor now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Booking a test drive and enjoy of this one of the best trucks in the world.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
