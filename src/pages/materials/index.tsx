import { Personalized } from "@/components/pages/personalized/personalized";
import axios from "axios";
import { OptionType } from "@/atoms/atoms";

export async function getStaticProps() {
  const response = await axios.get(`${process.env.API_URL}/api/cities`);
  let allWinners = [];
  let cities = [];
  if (response) {
    const responseData = response.data;
    cities = responseData.map((item: any) => {
      return { label: item.project, value: item.project };
    });
    allWinners = responseData;
  }

  return { props: { allWinners, cities }, revalidate: 3600 };
}
export default function Page({
  allWinners,
  cities,
}: {
  allWinners: any[];
  cities: OptionType[];
}) {
  return <Personalized cities={cities} allWinners={allWinners} />;
}
