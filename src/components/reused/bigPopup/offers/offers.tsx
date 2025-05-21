import { IMAGES_PATH } from "@/components/paths/paths";
import styles from "./offer.module.css";
import { useAtom } from "jotai/index";
import { languageRuAtom, mainModalAtom } from "@/atoms/atoms";
export const Offers = () => {
  const setMainModal = useAtom(mainModalAtom)[1];
  const language = useAtom(languageRuAtom)[0];
  const offers = [
    {
      header: `${language ? "На аватарку в\xa0соцсетях" : "Әлеуметтік желілердегі аватарға"}`,
      text: `${language ? "Обновите фото профиля добавив шильдик, чтобы увидели клиенты." : "Клиенттердің көруі үшін шильдті қосу арқылы профиль фотосуретін жаңартыңыз."}`,
      src: `${IMAGES_PATH}/post-stories-with-shiels.png`,
      className: "normal"
    },
    {
      header: `${language ? "В посты и сторис" : "Посттар мен стористерге"}`,
      text: `${language ? "Размещайте шильдик на\xa0картинках для соцсетей, когда рассказываете о премии или\xa0благодарите клиентов." : "Шильдті 2GIS Awards туралы ақпаратпен бөліскенде немесе клиенттерге алғыс айтқан кезде әлеуметтік желілерге арналған суреттерге орналастырыңыз."}`,
      src: `${IMAGES_PATH}/posts-stories-sale.png`,
      className: "order",
      itemHeight: "kz"
    },
    {
      header: `${language ? "На сайт" : "Сайтқа"}`,
      text: `${language ? "Добавьте шильдик в раздел «О\xa0нас», на главную страницу или\xa0в\xa0карточки товаров/услуг, чтобы подчеркнуть доверие клиентов." : "Клиенттердің сеніміне ерекше көңіл аудару үшін шильдті «Біз туралы» бөліміне, басты бетке немесе тауарлар/қызметтер карточкаларына қосыңыз."}`,
      src: `${IMAGES_PATH}/site-phone.png`
    } 
  ]
  return (
    <section className={styles.container}>
      <h3 className={language ? styles.header : styles.headerKZ + ' ' + styles.header}>{language ? "Куда добавить диджитал-шильдик?" : "Диджитал-шильдті қайда қосуға болады?"}</h3>
      <div className={styles.offers_container}>
        { offers.map( (offer, index) =>
          (<div key={index} className={!language && offer.itemHeight ? styles.item2 + ' ' + styles.item : styles.item}>
          <div>
            <h4 className={language ? styles.item_header : styles.item_headerKZ + ' ' + styles.item_header}>{offer.header}</h4>
            <p className={language ? index === 1 ? styles.item_text2 + " " + styles.item_text : styles.item_text : styles.item_textKZ + ' ' + styles.item_text}>
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