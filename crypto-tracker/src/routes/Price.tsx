import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexCharts from "react-apexcharts";

interface ChartProps {
  coinId: string;
}

interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

const Price = ({ coinId }: ChartProps) => {
  const { isLoading, data } = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId)
    // {
    //   refetchInterval: 1000,
    // }
  );

  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <ApexCharts
          type="candlestick"
          series={[
            {
              name: "Price",
              data:
                data?.map((price) => ({
                  x: new Date(price.time_close * 1000).toISOString(),
                  y: [price.open, price.high, price.low, price.close],
                })) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            yaxis: {
              show: false,
              tooltip: {
                enabled: true,
              },
            },
            xaxis: {
              labels: {
                show: false,
                style: {
                  colors: "#9c88ff",
                },
              },
              axisTicks: {
                show: false,
              },
              type: "datetime",
              categories: data?.map((price) =>
                new Date(price.time_close * 1000).toISOString()
              ),
            },
            chart: {
              type: "candlestick",
              height: 300,
              width: 500,
              background: "transparent",
              toolbar: {
                show: false,
              },
            },
            stroke: {
              curve: "smooth",
              width: 2,
            },
            plotOptions: {
              candlestick: {
                colors: {
                  upward: "#0be881",
                  downward: "#0fbcf9",
                },
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default Price;
