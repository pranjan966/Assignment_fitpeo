import React, { useRef, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5percent from "@amcharts/amcharts5/percent";

const ChartsComponent = (props) => {
  const chartRef = useRef(null);
  useLayoutEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
      })
    );

    // Define data
    let data = [
      {
        category: "Research",
        value1: 1000,
        value2: 588,
      },
      {
        category: "Marketing",
        value1: 1200,
        value2: 1800,
      },
      {
        category: "Sales",
        value1: 850,
        value2: 1230,
      },
    ];

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "category",
      })
    );
    xAxis.data.setAll(data);

    // Create series
    let series1 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
      })
    );
    series1.data.setAll(data);

    let series2 = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value2",
        categoryXField: "category",
      })
    );
    series2.data.setAll(data);

    // Add legend
    let legend = chart.children.push(am5.Legend.new(root, {}));
    legend.data.setAll(chart.series.values);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    chartRef.current = chart;

    return () => {
      root.dispose();
    };
  }, []);

  useLayoutEffect(() => {
    chartRef.current.set("paddingRight", props.paddingRight);
  }, [props.paddingRight]);

  useLayoutEffect(() => {
    let pieroot = am5.Root.new("chartdiv1");
    pieroot.setThemes([am5themes_Animated.new(pieroot)]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    // start and end angle must be set both for chart and series
    let chart = pieroot.container.children.push(
      am5percent.PieChart.new(pieroot, {
        layout: pieroot.verticalLayout,
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    let series0 = chart.series.push(
      am5percent.PieSeries.new(pieroot, {
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
        radius: am5.percent(100),
        innerRadius: am5.percent(80),
      })
    );

    series0.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series0.slices.template.setAll({
      fillOpacity: 0.5,
      strokeOpacity: 0,
      templateField: "settings",
    });

    series0.slices.template.states.create("hover", { scale: 1 });
    series0.slices.template.states.create("active", { shiftRadius: 0 });

    series0.labels.template.setAll({
      templateField: "settings",
    });

    series0.ticks.template.setAll({
      templateField: "settings",
    });

    series0.labels.template.setAll({
      textType: "circular",
      radius: 30,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series0.data.setAll([
      {
        category: "First + Second",
        value: 60,
      },
      {
        category: "Unused",
        value: 30,
        settings: { forceHidden: true },
      },
    ]);

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    // start and end angle must be set both for chart and series
    let series1 = chart.series.push(
      am5percent.PieSeries.new(pieroot, {
        radius: am5.percent(95),
        innerRadius: am5.percent(85),
        valueField: "value",
        categoryField: "category",
        alignLabels: false,
      })
    );

    series1.states.create("hidden", {
      startAngle: 180,
      endAngle: 180,
    });

    series1.slices.template.setAll({
      templateField: "sliceSettings",
      strokeOpacity: 0,
    });

    series1.labels.template.setAll({
      textType: "circular",
    });

    series1.labels.template.adapters.add("radius", function (radius, target) {
      let dataItem = target.dataItem;
      let slice = dataItem.get("slice");
      return -(slice.get("radius") - slice.get("innerRadius")) / 2 - 10;
    });

    series1.slices.template.states.create("hover", { scale: 1 });
    series1.slices.template.states.create("active", { shiftRadius: 0 });

    series1.ticks.template.setAll({
      forceHidden: true,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series1.data.setAll([
      {
        category: "First",
        value: 30,
      },
      {
        category: "Second",
        value: 30,
      },
      {
        category: "Remaining",
        value: 30,
        sliceSettings: { fill: am5.color(0xdedede) },
      },
    ]);
    chartRef.current = chart;
    return () => {
      pieroot.dispose();
    };
  }, []);
  return (
    <div className="row mb-2">
      <div className="col-md-8 bg-tertiary ">
        <div class="card " style={{ minHeight: "400px", marginTop: "10px" }}>
          <div className="chartoverview">
            <div className="text">
              <h5>Overview</h5>
              <span>monthly earning</span>
            </div>
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quantity
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something
                  </a>
                </li>
                {/* <li><hr class="dropdown-divider"></li> */}
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="card-body">
            <div id="chartdiv" style={{ width: "100%", height: "280px" }}></div>
          </div>
        </div>
      </div>
      <div className="col-md-4 ">
        <div
          class="card h-200"
          style={{ minHeight: "400px", marginTop: "10px" }}
        >
          <div class="card-body chart">
            <div className="text">
              <h5>Customer</h5>
              <span>customer that buys products</span>
            </div>
            <div
              id="chartdiv1"
              style={{ width: "100%", height: "300px" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsComponent;
