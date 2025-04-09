import { SuccessTellCards } from "@/components/reused/successTellCards/successTellCards";

export const TellTheAudience = () => {
  return (
    <section className={"max-tablet:mt-[80] mt-[68]"}>
      <div className={"max-tablet:ml-[39px]"}>
        <div
          className={"px-[15] py-2 rounded-[12px] w-fit text-white]"}
          style={{ border: "1px solid white" }}
        >
          <span
            className={
              "max-tablet:tracking-[-0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] text-base leading-6 tracking-[-0.018em]"
            }
          >
            Шаг 2
          </span>
        </div>
        <div
          className={
            "max-tablet:block max-tablet:mt-[32] mt-[36] flex items-start"
          }
        >
          <h2
            className={
              "max-tablet:max-w-[279px] max-tablet:tracking-[0.01em] max-tablet:leading-[100%] max-tablet:leading-[100%] max-tablet:text-[30px] text-[54px] leading-[92%] tracking-[-0.02em] max-w-[654] font-display"
            }
          >
            Продолжайте рассказывать аудитории о своем успехе
          </h2>
          <p
            className={
              "max-tablet:ml-0 max-tablet:tracking-[-0.01em] max-tablet:leading-[150%] max-tablet:text-[14px] max-tablet:max-w-[279px] max-tablet:mt-6 text-base leading-6 tracking-[-0.018em] ml-[114px] max-w-[312px]"
            }
          >
            Продолжайте рассказывать аудитории о своем успехе самостоятельно.
          </p>
        </div>
      </div>

      <SuccessTellCards />
    </section>
  );
};
