import { IMAGES_PATH } from "@/components/paths/paths";
import styles from "./offer.module.css";
import { useAtom } from "jotai/index";
import { mainModalAtom } from "@/atoms/atoms";
export const Offers = () => {
  const setMainModal = useAtom(mainModalAtom)[1];
  return (
    <section className={styles.container}>
      <h3 className={styles.header}>Куда добавить диджитал-шильдик?</h3>
      <div className={styles.inner_conteiner}>
        <div className={styles.item}>
          <div>
            <h4 className={styles.item1_header}>На аватарку в&nbsp;соцсетях</h4>
            <p className={styles.item1_text}>
              Обновите фото профиля добавив шильдик, чтобы увидели клиенты.
            </p>
          </div>
          <img src={`${IMAGES_PATH}/shields.png`} alt={""} />
        </div>
        <div className={styles.item}>
          <img
            src={`${IMAGES_PATH}/site_phone.png`}
            className={styles.image}
            alt={""}
          />
          <div>
            <h4 className={styles.item_header}>На сайт</h4>
            <p className={styles.item_text}>
              Добавьте шильдик в раздел «О&nbsp;нас», на главную страницу или в
              карточки товаров/услуг, чтобы подчеркнуть доверие клиентов.
            </p>
          </div>
        </div>
        <div className={styles.item}>
          <div>
            <h4 className={styles.item_header}>В посты и сторис</h4>
            <p className={styles.item_text}>
              Размещайте шильдик на картинках для соцсетей, когда рассказываете
              о премии или благодарите клиентов.
            </p>
          </div>
          <img src={`${IMAGES_PATH}/posts_stories_sale.png`} alt={""} />
        </div>
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
