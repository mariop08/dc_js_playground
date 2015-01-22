var myData = [
{
  "TotalDischarges": 63,
  "company": "KIDGREASE",
  "ProviderState": "Arkansas",
  "AverageCoveredCharges": 1793.9,
  "AverageTotalPayments": 3077.1,
  "AverageMedicarePayments": 2118.29,
  "date": "2014-06-28T23:39:21 +07:00"
},
{
  "TotalDischarges": 83,
  "company": "EARTHPURE",
  "ProviderState": "Alabama",
  "AverageCoveredCharges": 1228.4,
  "AverageTotalPayments": 3655.01,
  "AverageMedicarePayments": 2856.38,
  "date": "2014-08-25T17:04:00 +07:00"
},
{
  "TotalDischarges": 40,
  "company": "ETERNIS",
  "ProviderState": "Kentucky",
  "AverageCoveredCharges": 1173,
  "AverageTotalPayments": 3097.21,
  "AverageMedicarePayments": 2156.17,
  "date": "2014-11-01T09:43:07 +07:00"
},
{
  "TotalDischarges": 72,
  "company": "TRI@TRIBALOG",
  "ProviderState": "American Samoa",
  "AverageCoveredCharges": 1424.4,
  "AverageTotalPayments": 3108.95,
  "AverageMedicarePayments": 2920.65,
  "date": "2014-12-01T13:11:17 +08:00"
},
{
  "TotalDischarges": 38,
  "company": "BALUBA",
  "ProviderState": "Federated States Of Micronesia",
  "AverageCoveredCharges": 1897.34,
  "AverageTotalPayments": 3858.2,
  "AverageMedicarePayments": 2861.31,
  "date": "2014-10-09T17:37:52 +07:00"
},
{
  "TotalDischarges": 86,
  "company": "SKINSERVE",
  "ProviderState": "Marshall Islands",
  "AverageCoveredCharges": 1365.66,
  "AverageTotalPayments": 3962.55,
  "AverageMedicarePayments": 2589.4,
  "date": "2014-02-15T16:45:26 +08:00"
},
{
  "TotalDischarges": 61,
  "company": "ENTROFLEX",
  "ProviderState": "Alaska",
  "AverageCoveredCharges": 1133.25,
  "AverageTotalPayments": 3111.01,
  "AverageMedicarePayments": 2480.69,
  "date": "2014-07-28T06:30:21 +07:00"
},
{
  "TotalDischarges": 68,
  "company": "SEQUITUR",
  "ProviderState": "Indiana",
  "AverageCoveredCharges": 1098.44,
  "AverageTotalPayments": 3858.55,
  "AverageMedicarePayments": 2051.51,
  "date": "2014-04-15T02:59:19 +07:00"
},
{
  "TotalDischarges": 66,
  "company": "CORECOM",
  "ProviderState": "Michigan",
  "AverageCoveredCharges": 1277.94,
  "AverageTotalPayments": 3935.92,
  "AverageMedicarePayments": 2017.3,
  "date": "2014-06-22T12:09:32 +07:00"
},
{
  "TotalDischarges": 82,
  "company": "CYCLONICA",
  "ProviderState": "California",
  "AverageCoveredCharges": 1762.27,
  "AverageTotalPayments": 3861.45,
  "AverageMedicarePayments": 2213.12,
  "date": "2014-08-09T23:49:36 +07:00"
},
{
  "TotalDischarges": 47,
  "company": "AUTOGRATE",
  "ProviderState": "Iowa",
  "AverageCoveredCharges": 1070.42,
  "AverageTotalPayments": 3866.17,
  "AverageMedicarePayments": 2455.63,
  "date": "2014-09-05T23:24:38 +07:00"
},
{
  "TotalDischarges": 27,
  "company": "PARAGONIA",
  "ProviderState": "Idaho",
  "AverageCoveredCharges": 1267.08,
  "AverageTotalPayments": 3279.33,
  "AverageMedicarePayments": 2223.91,
  "date": "2014-07-27T22:33:47 +07:00"
},
{
  "TotalDischarges": 93,
  "company": "AQUASSEUR",
  "ProviderState": "Nebraska",
  "AverageCoveredCharges": 1754.27,
  "AverageTotalPayments": 3795.35,
  "AverageMedicarePayments": 2345.97,
  "date": "2015-01-19T16:51:17 +08:00"
},
{
  "TotalDischarges": 26,
  "company": "SOLGAN",
  "ProviderState": "West Virginia",
  "AverageCoveredCharges": 1798.05,
  "AverageTotalPayments": 3511.07,
  "AverageMedicarePayments": 2869.81,
  "date": "2014-12-28T22:37:36 +08:00"
},
{
  "TotalDischarges": 53,
  "company": "NUTRALAB",
  "ProviderState": "Maryland",
  "AverageCoveredCharges": 1976.46,
  "AverageTotalPayments": 3612.75,
  "AverageMedicarePayments": 2001.7,
  "date": "2014-02-16T09:26:09 +08:00"
}
];

  var timeFormat = d3.time.format("%Y-%m-%d")
  myData.forEach(function(d) {
    d.date = timeFormat.parse(d.date);
  });

  pieChart1 = dc.pieChart("#chart1");
  barGraph1 = dc.barChart("#chart2");

  var ndx = crossfilter(myData);

  //Dimensions for State
  var stateDimension1 = ndx.dimension(function(d){
    //console.log(d);
    return d.ProviderState;
  });

  var stateGroup = stateDimension1.group().reduceCount(function(d){
    return d.ProviderState;
  });

  //Provider State
  pieChart1.width(400)
           .height(350)
           .transitionDuration(1000)
           .dimension(stateDimension1)
           .group(stateGroup)
           .radius(150)
           .minAngleForLabel(0)
           .renderLabel(true)
           .title(function(d){
             //console.log(d);
             return d.data.key;
             });

  //Dimensions
  var company = ndx.dimension(function(d){
      return d.company;
  });

  //Group for Total Discharges
  var dischargesGroup1 = company.group().reduceSum(function(d){
    //console.log(d.TotalDischarges);
    return d.TotalDischarges;
  });

  //Groups for Average Charges
  var avgGroup1 = company.group().reduceSum(function(d){
    //console.log(d.AverageCoveredCharges);
    return d.AverageCoveredCharges;
  });
  var avgGroup2 = company.group().reduceSum(function(d){
    console.log(d.AverageMedicarePayments);
    return d.AverageMedicarePayments;
  });
  var avgGroup3 = company.group().reduceSum(function(d){
    return d.AverageTotalPayments;
  });


  barGraph1.width(800)
           .height(400)
           .margins({top:10,right:20,bottom:20,left:40})
           .dimension(company)
           .group(avgGroup2)
           .transitionDuration(1000)
           .centerBar(true)
           .gap(15)
           .stack(avgGroup3)
           .stack(avgGroup1)
           .x(d3.scale.ordinal())
           .xUnits(dc.units.ordinal)
           .y(d3.scale.linear().domain([1000,10000]))
           .yAxis().ticks(5);


dc.renderAll();
