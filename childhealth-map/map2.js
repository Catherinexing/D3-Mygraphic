(function () {


  var viewportWidth = $("#map2").width();
  var viewportHeight = $("#map2").height()/2;
  var width = viewportWidth * .97;
  var height = width/1.85;

  // D3 Projection
  var projection = d3.geoAlbersUsa()


  .scale([width/1])
// .translate([width/1,height*1.4]);
  .translate([width / 2, height / 2]);
  // .scale(1100);


  //Define path generator
  var path = d3.geoPath()
    .projection(projection);

  var div = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

   d3.json("https://gist.githubusercontent.com/anonymous/9f6a63841a74562a4a7173b9f7033e83/raw/aafb03b49f258cbfeec816a7bf5c92288a06193c/us-states.json", function(json) {

   	var svg = d3.select("#map2")
  		.append("svg")
  		.attr("width",width)
  		.attr("height",height);


  	//draw map
  	var map = svg.selectAll("path")
  		.data(json.features)
  		.enter()
      .append("path")
      .attr("d", path)
      .style("stroke", "grey")
      .style("stroke-width", "1")
      .style("fill", "white")
      .attr("opacity", "0.4");

// circles
// "https://cors-anywhere.herokuapp.com/https://visdev.sciencemag.org/data-test/programs2.json"

      d3.json("data/programs2.json", function(data) {
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
            return d.percentage/3 ;

          })

          // .attr("fill","#79C5B6")
          .attr("opacity", "0.4")
          .attr("fill", "#005E7F")
          // .style("stroke", "grey")
          // // .attr("opacity", "1")
          //
          // .style("stroke-width", "2")

          .attr("id", function(d) {
            return d.id;

          })


          // mouse hover function
          //
          // .on("mouseover", function(d) {
          //   div.transition()
          //     .duration(200)
          //     .style("opacity", .9);
          //
          //
          //   div.html("<div class='tooltiptitle'>"+d.name + "</div>" + "<div class='tooltiplocation'>" +"Location:"+" "+ d.location+"</div>"+ "<div class='tooltipmajor'>"+"Number of Labs:"+" "+d.numberLab + "</div>"+"Number of Women leaders:"+" " + d.numberWomen + "<div class='tooltiplocation'>" +"percentage:"+" "+ d.percentage+'%'+"</div>")
          //     .style("left", (d3.event.pageX+10) + "px")
          //     .style("top", (d3.event.pageY - 28) + "px");
          //           //
          //           d3.select(this)
          //             .style("fill", "#BE6A64");
          //
          // })

          .on("mouseover", function(d) {
            div.transition()
              .duration(200)
              .style("opacity", .9);

              var pageX = d3.event.pageX;
              console.log(pageX);
              console.log(width);

     if (d3.event.pageX > width/2) {

        div.html("<div class='tooltiptitle'>"+d.name + "</div>" + "<div class='tooltiplocation'>" +"Location:"+" "+ d.location+"</div>"+ "<div class='tooltiplab'>"+"Number of Labs:"+" "+d.numberLab + "</div>"+
        "<div class='tooltipwomen'>"+"Number of Women leaders:"+" "+ d.numberWomen + "</div>"



        + "<div class='tooltippercentage'>" +"percentage:"+" "+ d.percentage + '%'+"</div>")

         .style("left", (event.pageX-210) + "px")
         .style("top", (event.pageY - 10) + "px");
               //
               d3.select(this)
                 .style("fill", "#005E7F");

     }else{
       div.html("<div class='tooltiptitle'>"+d.name + "</div>" + "<div class='tooltiplocation'>" +"Location:"+" "+ d.location+"</div>"+ "<div class='tooltiplab'>"+"Number of Labs:"+" "+d.numberLab + "</div>"+
       "<div class='tooltipwomen'>"+"Number of Women leaders:"+" "+ d.numberWomen + "</div>"

       + "<div class='tooltippercentage'>" +"percentage:"+" "+ d.percentage + '%'+"</div>")
        .style("left", (event.pageX-10) + "px")
        .style("top", (event.pageY - 28) + "px");
              //
              d3.select(this)
                .style("fill", "#005E7F");

     }


          })






          .on("mouseout", function(d) {
            div.transition()
              .duration(500)
              .style("opacity", 0);

              d3.select(this)
                .style("fill", "");
          });




      }); //end of programs data


   	})



  d3.select(window).on('resize', resize);



  function resize() {

      width = parseInt(d3.select('#map2').style('width'));
      width = $("#map2").width() * .97;
      height = width/1.85;


     projection
     .translate([width / 2, height / 2])
     .scale([width/1]);


     d3.select("#map2").attr("width",width).attr("height",height);
     d3.select("svg").attr("width",width).attr("height",height);

     d3.selectAll("path").attr('d', path);


     d3.selectAll("circle")
     .attr("cx", function(d) {
       return projection([d.lon, d.lat])[0];
     })
     .attr("cy", function(d) {
       return projection([d.lon, d.lat])[1];
     })




  }



})();
