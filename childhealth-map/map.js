

(function() {

  //Width and height of map
  var width = 900;
  var height = 600;
  var selected;
  var college=[];
  var searchobject = {};


  // D3 Projection
  var projection = d3.geoAlbersUsa()
    .translate([width / 2, height / 2])
    .scale(1100);

  // Define path generator
  var path = d3.geoPath()
    .projection(projection);

  var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);


  //Create SVG element and append map to the SVG
  var svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .attr("viewBox", "0 0 " + width + " " + height)
    .attr("preserveAspectRatio", "xMidYMid meet");

  // Load GeoJSON data and merge with states data
  d3.json("https://gist.githubusercontent.com/anonymous/9f6a63841a74562a4a7173b9f7033e83/raw/aafb03b49f258cbfeec816a7bf5c92288a06193c/us-states.json", function(json) {

    var repeat = {};
    // Bind the data to the SVG and create one path per GeoJSON feature
    svg.selectAll("path")
      .data(json.features)
      .enter()
      .append("path")
      .attr("d", path)
      .style("stroke", "grey")
      .style("stroke-width", "1")
      .style("fill", "white")
      .attr("opacity", "0.4");


    //project circles
    d3.json("data/programs.json", function(data) {

      svg.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("class", "circle")
        .attr("cx", function(d) {
          return projection([d.lon, d.lat])[0];
        })
        .attr("cy", function(d) {
          return projection([d.lon, d.lat])[1];
        })
        // .attr("r", "10")
        .attr("r", function(d) {
          return d.tuitionin/5000;

        })

        // .attr("fill","#79C5B6")
        .attr("opacity", "0.4")
        // .attr("fill", "purple")
        // .style("stroke", "grey")
        // // .attr("opacity", "1")
        //
        // .style("stroke-width", "2")

        .attr("id", function(d) {
          return d.id;

        })


        // mouse hover function

        .on("mouseover", function(d) {
          div.transition()
            .duration(200)
            .style("opacity", .9);


          div.html("<div class='tooltiptitle'>"+d.university + "</div>" + "<div class='tooltipmajor'>"+"Major:"+" "+d.major + "</div>"+"Degree:"+" " + d.degree + "<div class='tooltiplocation'>" +"Location:"+" "+ d.location+"</div>")
            .style("left", (d3.event.pageX+10) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
                  //
                  d3.select(this)
                    .style("fill", "#BE6A64");

        })




        .on("mouseout", function(d) {
          div.transition()
            .duration(500)
            .style("opacity", 0);

            d3.select(this)
              .style("fill", "");
        });














    }); //end of programs data



  }); //end of projection

})(); //end of initial function
