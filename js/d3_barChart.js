 //Modified from a quick demo by https://egghead.io/lessons/d3-get-started-with-d3 -->

var bookLengths = [];

function makeChart(dataset) {
    for (var book =0; book < dataset.length; book++) {
        var eachBooklength = teaching.subjects[book].length;
        bookLengths[book] = eachBooklength;
    }
    // console.log(bookLengths);
    var numBooks = (dataset).length;
    var widthOfBooks = ((100 - (numBooks*0.5))/numBooks);
    d3.select('.chartBox').selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class','bar')
        .style('width', function(d) {
            return widthOfBooks + '%';
        })
        .style('height',function(d) {
            var len = d.length;
            return len * 10 + 'px';
        })
        // .style('background-color', 'blue')
        .attr('class', function() {
            var rand = Math.floor(Math.random() * 4);
            var color = ['bar blue','bar brown','bar green', 'bar red'];
                return color[rand];
        })
        .style('padding-top', function(d) {
            var len = d.length;
            // console.log(len);
            if (len < 5) {
                return 0;
            }})
        .text(function(dataset) {
            return dataset;
        });
    }



  makeChart(teaching.subjects);

