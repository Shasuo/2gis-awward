import { ModalWindow } from "@/layout/modalWindow/modalWindow";
import styles from "./anyQuestionsModal.module.css";
import Link from "next/link";
import Image from "next/image";
import { ICONS_PATH } from "@/components/paths/paths";
import { useAtom } from "jotai/index";
import { mainModalAtom } from "@/atoms/atoms";
import { useState } from "react";
import axios from "axios";

export const AnyQuestionsModal = () => {
  const setMainModalState = useAtom(mainModalAtom)[1];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    question: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/save-mail", formData);

      setFormData({
        name: "",
        email: "",
        city: "",
        question: "",
      });
    } catch (error) {
      console.error("Ошибка при отправке:", error);
      alert("Произошла ошибка при отправке вопроса.");
    }
  };

  return (
    <ModalWindow modalName={"AnyQuestions"}>
      <form
        className={
          "max-tablet:p-6 max-tablet:max-w-[344] max-tablet:mx-[15px] py-[60px] px-12 rounded-[24px] bg-white box-border mt-[120px] text-[#0C132D] max-w-[860px] relative"
        }
        onSubmit={handleSubmit}
      >
        <div
          className={
            "w-9 h-9 flex items-center justify-center absolute right-0 top-[-38px] cursor-pointer"
          }
          onClick={() => setMainModalState(null)}
        >
          <Image
            src={`${ICONS_PATH}/close_cross.svg`}
            alt={"Закрыть"}
            width={18}
            height={18}
          />
        </div>
        <h2
          className={
            "max-tablet:max-w-[280] max-tablet:text-[26px] max-tablet:leading-[110%] font-semibold text-[40px] leading-[100%] tracking-[-0.016%] max-w-[764px]"
          }
        >
          Если остались вопросы или хотите что-то обсудить
        </h2>
        <p
          className={
            "max-tablet:mt-8 max-tablet:text-[18px] max-tablet:leading-[24px] max-tablet:tracking-[-0.018em] mt-10 font-semibold text-[24px] leading-[130%] tracking-[0.015em]"
          }
        >
          Информация о вашей фирме
        </p>
        <div className={"mt-6"}>
          <input
            className={styles.input}
            placeholder={"Имя и фамилия"}
            type={"text"}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <div
            className={
              "max-tablet:mt-3 max-tablet:mb-3 max-tablet:block mt-6 flex gap-6 mb-6"
            }
          >
            <input
              className={styles.input}
              placeholder={"Эл. почта"}
              type={"email"}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              className={`${styles.input} max-tablet:mt-3`}
              placeholder={"Город"}
              type={"text"}
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            className={`${styles.input} h-[118px]`}
            placeholder={"Ваш вопрос"}
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className={"flex max-tablet:block items-center mt-6 gap-3"}>
          <button
            type={"submit"}
            className={
              "max-tablet:max-w-[unset] hover:bg-[#C5A87E] active:bg-[#C5A87E] cursor-pointer text-base leading-6 tracking-[-0.018em] w-full max-w-[256] h-[56] bg-[#AB844C] rounded-[12px] text-white"
            }
          >
            Отправить вопрос
          </button>
          <p
            className={
              "max-tablet:mt-3 text-[12px] leading-[14px] tracking-[-0.01em] max-w-[496] w-full opacity-60"
            }
          >
            Нажимая на кнопку «Отправить вопрос», вы принимаете условия{" "}
            <Link
              href={"https://law.2gis.ru/licensing-agreement/"}
              className={"underline"}
              target={"_blank"}
            >
              Лицензионного соглашения
            </Link>{" "}
            и даёте 2ГИС согласие на обработку персональных данных на условиях и
            в целях, определенных{" "}
            <Link
              href={"https://law.2gis.ru/privacy/"}
              className={"underline"}
              target={"_blank"}
            >
              Политикой конфиденциальности
            </Link>
          </p>
        </div>
      </form>
    </ModalWindow>
  );
};
