import { IMAGES_PATH } from "@/components/paths/paths";
import styles from "./offer.module.css";
import { useAtom } from "jotai/index";
import { mainModalAtom } from "@/atoms/atoms";
export const Offers = () => {
  const setMainModal = useAtom(mainModalAtom)[1];
  const offers = [
    {
      header: "На аватарку в\xa0соцсетях",
      text: "Обновите фото профиля добавив шильдик, чтобы увидели клиенты.",
      src: `${IMAGES_PATH}/post-stories-with-shiels.png`,
      className: "normal"
    },
    {
      header: "На сайт",
      text: "Добавьте шильдик в раздел «О\xa0нас», на главную страницу или\xa0в карточки товаров/услуг, чтобы подчеркнуть доверие клиентов.",
      src: `${IMAGES_PATH}/site-phone.png`,
      className: "order"
    },
    {
      header: "В посты и сторис",
      text: "Размещайте шильдик на картинках для соцсетей, когда рассказываете о премии или благодарите клиентов.",
      src: `${IMAGES_PATH}/posts-stories-sale.png`
    }
  ]
  return (
    <section className={styles.container}>
      <h3 className={styles.header}>Куда добавить диджитал-шильдик?</h3>
      <div className={styles.offers_container}>
        { offers.map( (offer, index) =>
          (<div key={index} className={styles.item}>
          <div>
            <h4 className={styles.item_header}>{offer.header}</h4>
            <p className={styles.item_text}>
              {offer.text}
            </p>
          </div>
          <img 
          className={offer.className ? offer.className === "normal" ? styles.image1 : styles.image : ""}
          src={offer.src} 
          alt={""} 
          />
        </div>))
        }
      </div>
      <div
        className={`hover:bg-[#666D7D] active:bg-[#666D7D] bg-[#374463b2] ${styles.back_button} cursor-pointer`}
        onClick={() => setMainModal(null)}
      >
        <p>Назад</p>
      </div>
    </section>
  );
};