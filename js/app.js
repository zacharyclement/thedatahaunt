function draw_firearms(data) {
      
      /*
        D3.js setup code
      */

          "use strict";
          var margin = 75,
              width = 1000 - margin,
              height = 500 - margin;

          d3.select("#chartContainer")
            .append("h5")
            .text("Gun Permits Issued Since 1999");

          var svg = d3.select("#chartContainer")
            .append('svg')
            .attr("width", width + margin)
            .attr("height", height + margin)
            .append('g')
            .attr('class','chart');

      /*
        Dimple.js Chart construction code
      */

          var myChart = new dimple.chart(svg, data);
          var x = myChart.addTimeAxis("x", "month", "%Y-%m", "%m/%Y"); 
          x.title ='Date'
          x.floatingBarWidth = 1
          var y = myChart.addMeasureAxis("y", "totals");
          y.title = 'total permits'
          myChart.addSeries(null, dimple.plot.bar);
          myChart.draw();
        };