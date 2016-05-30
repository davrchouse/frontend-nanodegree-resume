 //Modified from a quick demo by https://egghead.io/lessons/d3-get-started-with-d3 -->

var teaching = {
        "subjects": ["Biology       ", "Molecular Cell Biology", "Chemistry ", "Neurobiology", "Precalculus",
            "Geometry  ", "Algebra  ", "Trigonometry","Cognitive Psychology", "Elementary Math", "Elementary Science"],
        "icon": "images/icons/apple_icon.svg"
};


var widthOfBooks = 0;


var bookLengths = [];

function makeChart(dataset) {
    for (book in dataset) {
        var eachBooklength = teaching.subjects[book].length;
        bookLengths[book] = eachBooklength;
    };
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
        })
    }




makeChart(teaching.subjects);





 // var dataset = [5,10,15,20,25];

 //    d3.select('chart').selectAll('div')
 //        .data(dataset)
 //        .enter()
 //        .append('div')
 //        .attr('class','bar')
 //        .style('height',function(d) {
 //            return d * 5 + 'px';
 //        });


// function yoit() {
//     alert("yo yo yo what up?");
// }

// $('body').append("<div>Hellloooo</div>");

// yoit();