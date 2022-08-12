import styles from "../styles/Services.module.css";
import Link from "next/link";
import Image from "next/image";

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What I Can Do?</h1>
      <div className={styles.services}>
        {services.map((service) => (
          <Link passHref key={service.id} href={`/${service.name}`}>
            <div className={styles.service}>
                <div className={styles.desc}>{service.desc}</div>
              <span className={styles.category}>{service.title}</span>
              <div className={styles.media}>
                {service.video ? (
                  <video
                    src={`/img/${service.video}`}
                    autoPlay
                    muted
                    loop
                    className={styles.video}
                  ></video>
                ) : (
                  <Image src={`/img/${service.photo}`} alt="" className={styles.photo} width="100%" height="100%" layout="responsive" objectFit="cover" />
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
