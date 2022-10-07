import { useQuery } from "react-query";
import { fetchCoinHistory, fetchCoinTickers } from "../api";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

interface PriceProps {
  coinId: string;
}

const Container = styled.div`
  padding: 0px 20px;
  display: flex;
  flex-direction: row;
  margin: 10px auto;
`;

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<PriceData>(["price_d", coinId], () =>
    fetchCoinTickers(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : (
        <>
          <Container>Name: {data?.name}</Container>
          <Container>Ath_date: {data?.quotes.USD.ath_date}</Container>
          <Container>Ath_price: {data?.quotes.USD.ath_price}</Container>
          <Container>Market_cap: {data?.quotes.USD.market_cap}</Container>
          <Container>Price {data?.quotes.USD.price}</Container>
        </>
      )}
    </div>
  );
}

export default Price;
