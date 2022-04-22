import React from "react";
import PropTypes from "prop-types";
import "./Chart.scss";

import { scaleTime } from "d3-scale";
import { utcMinute } from "d3-time";

import { ChartCanvas, Chart } from "react-stockcharts";
import { CandlestickSeries } from "react-stockcharts/lib/series";
import { XAxis, YAxis } from "react-stockcharts/lib/axes";
import { fitWidth } from "react-stockcharts/lib/helper";
import { last, timeIntervalBarWidth } from "react-stockcharts/lib/utils";

class CandleStickChart extends React.Component {
  render() {
    const { data } = this.props;
    const height = 650;
    const width = 1350;
    const ratio = 3;
    const margin = { left: 75, right: 75, top: 10, bottom: 45 };
    const xAccessor = (d) => d.date;
    const xExtents = [
      xAccessor(data[data.length - 100]),
      xAccessor(last(data)),
    ];
    return (
      <ChartCanvas
        height={height}
        ratio={ratio}
        width={width}
        margin={margin}
        seriesName="ETCUSD"
        data={data}
        xAccessor={xAccessor}
        xScale={scaleTime()}
        xExtents={xExtents}
      >
        <Chart id={2} yExtents={(d) => [d.high, d.low]}>
          <XAxis axisAt="bottom" orient="bottom" ticks={16} />
          <YAxis axisAt="left" orient="left" ticks={5} />
          <CandlestickSeries width={timeIntervalBarWidth(utcMinute)} />
        </Chart>
      </ChartCanvas>
    );
  }
}

CandleStickChart.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  ratio: PropTypes.number.isRequired,
};

CandleStickChart = fitWidth(CandleStickChart);

export default CandleStickChart;
