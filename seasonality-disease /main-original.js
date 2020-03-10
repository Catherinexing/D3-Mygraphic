(function($) {
  var width, height, hwidth, hheight, margin, columns, svg, hsvg, x, y, size, tip, tipX, commaFormat;

  setVis();

  d3.csv("data_copy.csv", function(error, data) {

    draw(error, data);
  })

  window.addEventListener('resize', resize, false);
  // window.addEventListener('resize', resize);



  function setVis() {
    $("#interactive").height($("#interactive").width() * 1);
    width = $("#interactive").width();
    height = $("#interactive").height();
    hwidth = $("#header").width();
    hheight = $("#header").height();
    if (width < 500) {
      margin = {
        top: 15,
        left: 40
      }
    } else {
      margin = {
        top: 50,
        left: 50
      };
    }

    columns = ['Timeline', 'Flu', 'Measles', 'Chickenpox', 'Polio'];
    // rows = ['Jan', 'Feb', 'Mar','Apr','May', 'June', 'July','Aug','Sep', 'Oct','Nov','Dec'];

    svg = d3.select("#interactive")
      .append("svg")
      .attr("class", "svg")
      .attr("width", width + "px")
      .attr("height", height + "px");

    hsvg = d3.select("#header")
      .append("svg")
      .attr("class", "svg")
      .attr("width", hwidth + "px")
      .attr("height", hheight + "px");


  }


  function draw(error, data) {
    setScales(data);
    drawViz(data);

  }



  function resize() {
    $("#interactive").height($("#interactive").width() * 1);
    width = $("#interactive").width();
    height = $("#interactive").height();
    hwidth = $("#header").width();
    hheight = $("#header").height();

    // update  x-domain and 图标

    if (width < 415) {
      x.domain(['Timeline', 'Flu', 'Measles', 'Chickenpox', 'Polio']);
    } else if (width < 500) {
      margin = {
        top: 15,
        left: 40
      }

      // hsvg.select('.g-hkey text')
      //     .text('Other qqqqevents')


      x.domain(['Timeline', 'Flu', 'Measles', 'Chickenpox', 'Polio']);

    } else {
      margin = {
        top: 30,
        left: 50
      }
      // hsvg.select('.g-hkey text')
      //     .text('Other wwwhistorical events')

      x.domain(columns);

      // y.domain(rows);

    }

    svg
      .attr("width", width + "px")
      .attr("height", height + "px");

    hsvg
      .attr("width", hwidth + "px")
      .attr("height", hheight + "px");

    y.range([margin.top * 3, (height - margin.top)]);
    x.rangeRoundBands([margin.left, width]);
    size.range([0, (width - margin.left) / 9]);


    //update loaction of X轴的labels
    svg.selectAll('.col-txt')
      .attr('transform', function(d) {

        return "translate(" + x(d.disease) + "," + (y(d.year) - size(d.cases) - 5) + ")";

        // if (d.year == 1945) {
        //     return (width < 415)? "translate(" + x(d.disease) + "," + (margin.top + 5) + ")" : "translate(" + x(d.disease) + "," + (margin.top) + ")";
        // } else if (d.year == 1966) {
        //     return (width < 415)?  "translate(" + x(d.disease) + "," + (y(d.year) - 15) + ")" : "translate(" + x(d.disease) + "," + (y(d.year) - 25) + ")";
        // }
        //
        // else {
        // return "translate(" + x(d.disease) + "," + (y(d.year) - size(d.cases) - 5) + ")";
        //
        // }
      });


    //update loaction of 图标
    hsvg.select(".key-hed")
      .attr('y', function() {
        return (width < 500) ? 50 : -50
      });

    hsvg.selectAll('.scale')
      .attr('transform', function(d, i) {

        return (width < 500) ? "translate(" + (size(50000) + 5) + ',' + (40 + size(50000) * 2 - size(d) + 20) + ")" : "translate(" + (size(50000) + 5) + ',' + (75 + size(50000) * 2 - size(d) + 20) + ")"
      });

    hsvg.selectAll('.scale circle')
      .attr("r", function(d) {
        return size(d);
      });

    hsvg.selectAll('.scale text')
      .attr('y', function(d) {
        return (d == 1000) ? -size(d) + 10 : -size(d) + 5;
      })
      .attr('x', (size(50000) + 10))
      .text(function(d) {
        return commaFormat(d);
      });

    hsvg.selectAll('.scale line')
      .attr('y1', function(d) {
        return -size(d);
      })
      .attr('y2', function(d) {
        return -size(d);
      })
      .attr('x1', 0)
      .attr('x2', (size(50000) + 10));

    hsvg.select(".g-vkey")
      .attr('transform', ("translate(15," + 15 + ")"));

    // hsvg.select('.g-vkey .v-circle')
    //     .attr('r', 12);

    hsvg.select(".g-hkey")
      .attr('transform', ("translate(15," + 40 + ")"));



    //update the location of year label
    //update the location of year label
    //update the location of year label
    svg.selectAll('.yr-txt')
      .attr('transform', function(d) {
        return (width < 500) ? "translate(" + 30 + "," + y(d) + ")" : "translate(" + (x('Timeline') - 10) + "," + y(d) + ")";
      })

    svg.selectAll('.guide')
      .attr('x1', function() {
        return (width < 500) ? 50 : x('Timeline')
      })
      .attr('x2', width)
      .attr('y1', function(d) {
        return y(d);
      })
      .attr('y2', function(d) {
        return y(d);
      });


    //update the location of year label
    svg.select('.timeline')
      .attr('x1', x('Timeline'))
      .attr('x2', x('Timeline'))
      .attr('y1', y(1))
      .attr('y2', y(12));

    svg.selectAll(".timedot")
      .attr("cx", x("Timeline"))
      .attr("cy", function(d) {
        return y(d.year)
      });


    // update 蓝色circle 的 group
    svg.selectAll(".g-circle")
      .attr("transform", function(d) {
        return "translate(" + x(d.disease) + "," + y(d.year) + ")"
      });



    // update 蓝色circle
    svg.selectAll(".circle")
      .attr("r", function(d) {
        return size(d.cases);
      });

    // update 橙色circle
    svg.selectAll(".v-circle")

      .attr("r", function(d) {
        return size(d.cases);
      });



    // update 黑点
    // svg.selectAll(".cover")
    //    .attr('cx', function(d) {
    //        return x(d.disease)
    //    })
    //     .attr('cy', function(d) {
    //        return y(d.year)
    //    })
    //    .attr("r", function(d) {
    //        if (d.cases < 2000) {
    //            return 20
    //        } else {
    //            return size(d.cases);
    //        }
    //    })
  }







  function setScales(data) {
    y = d3.scale.linear()
      .domain([1, 13])
      .range([margin.top * 3, (height - margin.top)]);

    x = d3.scale.ordinal()
      .rangeRoundBands([margin.left, width])
      .domain(columns);

    if (width < 415) {
      x.domain(['Timeline', 'Flu', 'Measles', 'Chickenpox', 'Polio']);
      // y.domain(['Jan', 'Feb', 'Mar','Apr','May', 'June', 'July','Aug','Sep', 'Oct','Nov','Dec']);
    } else if (width < 500) {
      x.domain(['Timeline', 'Flu', 'Measles', 'Chickenpox', 'Polio']);


    } else {
      x.domain(columns);
    }

    size = d3.scale.sqrt()
      .domain([0, 400000])
      .range([0, (width - margin.left) / 9]);

    tip = d3.tip()
      .attr('class', 'd3-tip')
      .offset([-10, 0])

      .html(function(d) {
        return "<p>Month: <strong>" + d.year + "</strong></p> <p>Disease: <strong>" + d.disease + "</strong></p> <p>" + "<p>Number: <strong>" + d.cases + "</p>";

      })

    commaFormat = d3.format(',');


  }

  function drawViz(data) {

    svg.call(tip);

    var years = [];

    for (var i = 1; i <= 12; i++) {
      years.push(i);
    }

    console.log(years);
    console.log(x('Timeline'));

    // draw dot horizontal years lines
    var guides = svg.selectAll('.guide')
      .data(years)
      .enter()
      .append('line')
      .attr('class', 'guide')
      .attr('x1', function() {
        return (width < 500) ? 50 : x('Timeline')
      })
      .attr('x2', width)
      .attr('y1', function(d) {
        return y(d);
      })
      .attr('y2', function(d) {
        return y(d);
      });


    // draw key section
    hsvg.append('g')
      .attr('transform', ("translate(20," + 15 + ")"))
      .attr('class', 'g-vkey');

    // hsvg.select('.g-vkey')
    //     .append('circle')
    //     .attr('class', 'v-circle')
    //     .attr('r', 12);

    // hsvg.select('.g-vkey')
    //     .append('circle')
    //     .attr('class', 'vaccine_dot')
    //     .attr('r', 3);

    // hsvg.select('.g-vkey')
    //     .append('text')
    //     .attr('class', 'scale-hed')
    //     .text('Vaccine licensed')
    //     .attr('dy', ".5em")
    //     .attr('x', 17);

    // hsvg.append('g')
    //     .attr('transform', ("translate(20," + 15 + ")"))
    //     .attr('class', 'g-hkey');
    //
    // hsvg.select('.g-hkey')
    //     .append('circle')
    //     .attr('class', 'timedot')
    //     .attr('r', 5);
    //
    // hsvg.select('.g-hkey')
    //     .append('text')
    //     .attr('class', 'scale-hed')
    //     .text(function() {
    //         return (width < 500) ? 'Other events' : 'Other historical events'
    //     })
    //     .attr('dy', ".4em")
    //     .attr('x', 17);

    // var scalehed = hsvg.append("text")
    //     .attr('x', 9)
    //     .attr('y', function(){
    //         return (width < 500) ? 50 : 90
    //     })
    //     .attr('dy', "-.5em")
    //     .text("Number of reported cases")
    //     .attr('class', 'scale-hed key-hed');

    // circles in 图标
    var scale = hsvg.selectAll('.scale')
      .data([50000, 10000, 1000])
      .enter()
      .append('g')
      .attr('class', 'scale')
      .attr('transform', function(d, i) {
        return (width < 500) ? "translate(" + (size(50000) + 5) + ',' + (40 + size(50000) * 2 - size(d) + 20) + ")" : "translate(" + (size(50000) + 2) + ',' + (75 + size(50000) * 2 - size(d) + 20) + ")"
      });

    scale.append("circle")
      .attr("r", function(d) {
        return size(d);
      });

    scale.append("text")
      .attr('y', function(d) {
        return (d == 1000) ? -size(d) + 10 : -size(d) + 5;
      })
      .attr('x', (size(50000) + 10))
      .text(function(d) {
        return commaFormat(d);
      });

    scale.append("line")
      .attr('y1', function(d) {
        return -size(d);
      })
      .attr('y2', function(d) {
        return -size(d);
      })
      .attr('x1', 0)
      .attr('x2', (size(50000) + 10));

    // 时间轴上的数字
    var yrtxt = svg.selectAll('.yr-txt')
      .data(years)
      .enter()
      .append('g')
      .attr('class', 'yr-txt')
      .attr('transform', function(d) {
        return (width < 500) ? "translate(" + 30 + "," + y(d) + ")" : "translate(" + (x('Timeline') - 10) + "," + y(d) + ")";
      })
      .append('text')
      .text(function(d) {
        return d + "M"
      })
      .attr('dy', '.2em');
    // 时间轴上的轴线
    var line = svg.append('line')
      .attr('x1', x('Timeline'))
      .attr('x2', x('Timeline'))
      .attr('y1', y(1))
      .attr('y2', y(12))
      .attr('class', 'timeline');
    // 时间轴上的圆圈
    var gdot = svg.selectAll(".timedot")
      .data(data.filter(function(d) {
        return d.event !== ""
      }))
      .enter()
      .append('circle')
      .attr("cx", x("Timeline"))
      .attr("cy", function(d) {
        return y(d.year)
      })
      .attr("r", 5)
      .attr("class", "timedot")
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    //主图上的圆圈
    var gcircle = svg.selectAll(".g-circle")
      .data(data)
      .enter()
      .append('g')
      .attr("transform", function(d) {
        return "translate(" + x(d.disease) + "," + y(d.year) + ")"
      })
      .attr("class", function(d){
        return "g-circle"
        // return (d.disease == "Diphtheria")? "g-circle diph" : "g-circle"
      })
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    gcircle.append("circle")
      .attr("class", function(d) {
        return "circle"
        // return (d.vaccine == 'FALSE') ? "circle" : "v-circle"
      })
      .attr("r", function(d) {
        return size(d.cases);
      })
      .style("fill", function(d) {
        // if (d.id == 1 || d.id == 9) {
        //     return 'transparent';
        // }
        return '#005E7F';
      })

    gcircle.append("circle")
      .attr("class", "hover")
      .attr("r", function(d) {
        if (d.cases < 2000) {
          return 20
        } else {
          return null
        }
      })
      .attr("cy", function(d) {
        if (d.cases < 2000) {
          return 20
        } else {
          return null
        }
      });

    // gcircle
    //     .filter(function(d) {
    //         return d.vaccine !== "FALSE"
    //     })
    //     .append("circle")
    //     .attr("class", "vaccine_dot")
    //     .attr("r", 0);
    //

    //black dots in some circle
    // svg.selectAll(".cover")
    //     .data(data.filter(function(d) {
    //         return d.id == 1 || d.id == 9 || d.id == 94.5
    //     }))
    //     .enter()
    //     .append("circle")
    //     .attr("class", "cover circle")
    //     .attr('cx', function(d) {
    //         return x(d.disease)
    //     })
    //      .attr('cy', function(d) {
    //         return y(d.year)
    //     })
    //     .attr("r", function(d) {
    //         if (d.cases < 2000) {
    //             return 20
    //         } else {
    //             return size(d.cases);
    //         }
    //     })
    //      .style("fill", function(d) {
    //         if (d.id == 94.5) {
    //             return 'transparent';
    //         }
    //     })
    //     .on('mouseover', tip.show)
    //     .on('mouseout', tip.hide);


    // X轴 的 标签
    var coltxt = svg.selectAll('.col-txt')
      .data(data.filter(function(d) {
        return d.head == "TRUE"
      }))
      .enter()
      .append('g')
      .attr('class', function(d) {
        return "translate(" + x(d.disease) + "," + (y(d.year) - size(d.cases) - 5) + ")";
      //   return (d.disease == "Diphtheria") ? "col-txt diph" : "col-txt"
      // })
      // .attr('transform', function(d) {
      //   if (d.year == 1945) {
      //     return (width < 415) ? "translate(" + x(d.disease) + "," + (margin.top + 5) + ")" : "translate(" + x(d.disease) + "," + (margin.top) + ")";
      //   } else if (d.year == 1966) {
      //     return (width < 415) ? "translate(" + x(d.disease) + "," + (y(d.year) - 15) + ")" : "translate(" + x(d.disease) + "," + (y(d.year) - 25) + ")";
      //   } else {
      //     return "translate(" + x(d.disease) + "," + (y(d.year) - size(d.cases) - 5) + ")";
      //
      //   }
      })
      .append('text')
      .text(function(d) {
        return d.disease
      });
  }

})(jQuery);
