/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9388888888888889, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "home_page Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "home_page Request-0"], "isController": false}, {"data": [0.0, 500, 1500, "school_website Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_galary Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_galary Request-1"], "isController": false}, {"data": [0.8, 500, 1500, "school_website Request-0"], "isController": false}, {"data": [0.0, 500, 1500, "school_website Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_galary Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_manditary_closure Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_academic Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_activity Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_contact Request"], "isController": false}, {"data": [1.0, 500, 1500, "student_login_current_academicyear Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_manditary_closure Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "home_page Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_manditary_closure Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_admission Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_infrastructure Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_admission Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_infrastructure Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_admission Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_history Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_contact Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_history Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_history Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_management Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_management Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_management Request"], "isController": false}, {"data": [1.0, 500, 1500, "school_academic Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_academic Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_contact Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_activity Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "school_activity Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "student_login_current_academicyear Request-1"], "isController": false}, {"data": [1.0, 500, 1500, "student_login_current_academicyear Request-0"], "isController": false}, {"data": [1.0, 500, 1500, "school_infrastructure Request"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 360, 0, 0.0, 218.21111111111097, 12, 3627, 64.5, 151.90000000000003, 2297.3999999999987, 3054.5299999999997, 75.5984880302394, 1722.7575565676188, 12.977084208315835], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["home_page Request-1", 10, 0, 0.0, 94.4, 58, 159, 80.5, 156.20000000000002, 159.0, 159.0, 10.718113612004288, 301.8834153938907, 1.3711649249732047], "isController": false}, {"data": ["home_page Request-0", 10, 0, 0.0, 31.3, 18, 82, 25.0, 77.40000000000002, 82.0, 82.0, 11.013215859030838, 11.157334113436123, 1.408917263215859], "isController": false}, {"data": ["school_website Request", 10, 0, 0.0, 2831.4, 2383, 3627, 2902.5, 3574.0, 3627.0, 3627.0, 2.7570995312930795, 80.39395290529363, 0.6515801626688724], "isController": false}, {"data": ["school_galary Request", 10, 0, 0.0, 89.89999999999999, 61, 110, 94.0, 109.8, 110.0, 110.0, 13.850415512465373, 306.9030254501385, 3.5978618421052633], "isController": false}, {"data": ["school_galary Request-1", 10, 0, 0.0, 55.0, 45, 70, 54.0, 69.7, 70.0, 70.0, 14.347202295552368, 303.30602134146346, 1.8634549856527978], "isController": false}, {"data": ["school_website Request-0", 10, 0, 0.0, 408.9, 44, 996, 324.0, 994.1, 996.0, 996.0, 10.040160642570282, 9.993097389558233, 1.1863861696787148], "isController": false}, {"data": ["school_website Request-1", 10, 0, 0.0, 2411.6, 2098, 2668, 2419.0, 2665.7, 2668.0, 2668.0, 3.240440699935191, 91.26239215408296, 0.3829036373946857], "isController": false}, {"data": ["school_galary Request-0", 10, 0, 0.0, 34.0, 14, 51, 36.0, 50.9, 51.0, 51.0, 14.814814814814815, 15.081018518518517, 1.9241898148148147], "isController": false}, {"data": ["school_manditary_closure Request", 10, 0, 0.0, 81.0, 43, 108, 82.0, 107.7, 108.0, 108.0, 12.87001287001287, 1546.2516087516087, 3.4940074002574], "isController": false}, {"data": ["school_academic Request", 10, 0, 0.0, 90.2, 61, 133, 88.0, 130.8, 133.0, 133.0, 12.077294685990339, 491.2946765549517, 3.0900890700483092], "isController": false}, {"data": ["school_activity Request", 10, 0, 0.0, 88.80000000000001, 64, 118, 93.0, 117.10000000000001, 118.0, 118.0, 14.22475106685633, 751.9947990753913, 3.61175320056899], "isController": false}, {"data": ["school_contact Request", 10, 0, 0.0, 80.4, 56, 103, 82.0, 101.80000000000001, 103.0, 103.0, 15.503875968992247, 314.32745881782944, 4.027374031007752], "isController": false}, {"data": ["student_login_current_academicyear Request", 10, 0, 0.0, 121.3, 81, 158, 117.5, 157.8, 158.0, 158.0, 15.24390243902439, 107.5930711699695, 4.2278010670731705], "isController": false}, {"data": ["school_manditary_closure Request-1", 10, 0, 0.0, 48.1, 29, 70, 45.5, 69.2, 70.0, 70.0, 13.422818791946309, 1598.9303691275168, 1.8220427852348993], "isController": false}, {"data": ["home_page Request", 10, 0, 0.0, 126.00000000000001, 81, 193, 131.5, 188.9, 193.0, 193.0, 10.341261633919338, 301.74569383402275, 2.6459087383660806], "isController": false}, {"data": ["school_manditary_closure Request-0", 10, 0, 0.0, 32.3, 13, 53, 34.0, 52.300000000000004, 53.0, 53.0, 13.386880856760374, 13.700635876840696, 1.8171644912985274], "isController": false}, {"data": ["school_admission Request", 10, 0, 0.0, 91.0, 64, 142, 88.5, 138.10000000000002, 142.0, 142.0, 13.071895424836601, 346.48054534313724, 3.2935049019607843], "isController": false}, {"data": ["school_infrastructure Request-0", 10, 0, 0.0, 39.00000000000001, 14, 93, 36.5, 87.80000000000001, 93.0, 93.0, 11.778563015312132, 11.923494552414606, 1.4838228798586572], "isController": false}, {"data": ["school_admission Request-0", 10, 0, 0.0, 28.2, 13, 51, 22.0, 50.400000000000006, 51.0, 51.0, 14.005602240896359, 14.202556022408965, 1.7643776260504203], "isController": false}, {"data": ["school_infrastructure Request-1", 10, 0, 0.0, 66.70000000000002, 48, 102, 61.5, 99.4, 102.0, 102.0, 11.454753722794958, 284.9694390750286, 1.443030498281787], "isController": false}, {"data": ["school_admission Request-1", 10, 0, 0.0, 61.8, 46, 122, 53.5, 117.10000000000002, 122.0, 122.0, 14.025245441795231, 357.52733827138854, 1.7668522089761571], "isController": false}, {"data": ["school_history Request-1", 10, 0, 0.0, 67.1, 48, 109, 60.5, 106.80000000000001, 109.0, 109.0, 11.248593925759279, 204.05103170697413, 1.40607424071991], "isController": false}, {"data": ["school_contact Request-0", 10, 0, 0.0, 22.8, 12, 34, 23.5, 33.9, 34.0, 34.0, 16.638935108153078, 16.95416493344426, 2.1611116888519137], "isController": false}, {"data": ["school_history Request-0", 10, 0, 0.0, 38.7, 13, 52, 42.5, 51.9, 52.0, 52.0, 11.79245283018868, 11.92603920990566, 1.474056603773585], "isController": false}, {"data": ["school_history Request", 10, 0, 0.0, 106.5, 74, 155, 102.0, 151.70000000000002, 155.0, 155.0, 11.001100110011002, 210.68718199944993, 2.75027502750275], "isController": false}, {"data": ["school_management Request-1", 10, 0, 0.0, 87.7, 49, 152, 70.5, 150.5, 152.0, 152.0, 11.481056257175661, 184.9335802956372, 1.5248277841561424], "isController": false}, {"data": ["school_management Request-0", 10, 0, 0.0, 35.5, 14, 57, 33.5, 55.900000000000006, 57.0, 57.0, 11.7096018735363, 11.90857362412178, 1.5551814988290398], "isController": false}, {"data": ["school_management Request", 10, 0, 0.0, 124.3, 81, 185, 112.5, 183.4, 185.0, 185.0, 11.07419712070875, 189.6423812984496, 2.9415836101882613], "isController": false}, {"data": ["school_academic Request-1", 10, 0, 0.0, 59.5, 47, 82, 57.0, 80.9, 82.0, 82.0, 12.738853503184714, 505.3008061305732, 1.6296775477707006], "isController": false}, {"data": ["school_academic Request-0", 10, 0, 0.0, 30.200000000000003, 13, 63, 22.5, 62.9, 63.0, 63.0, 12.82051282051282, 12.98828125, 1.6401241987179487], "isController": false}, {"data": ["school_contact Request-1", 10, 0, 0.0, 57.1, 43, 69, 57.0, 68.9, 69.0, 69.0, 15.822784810126583, 304.67050286787975, 2.055107792721519], "isController": false}, {"data": ["school_activity Request-1", 10, 0, 0.0, 62.699999999999996, 47, 85, 62.5, 84.9, 85.0, 85.0, 14.534883720930232, 753.6393986191861, 1.845248909883721], "isController": false}, {"data": ["school_activity Request-0", 10, 0, 0.0, 25.0, 12, 46, 20.5, 45.7, 46.0, 46.0, 15.625, 15.85693359375, 1.983642578125], "isController": false}, {"data": ["student_login_current_academicyear Request-1", 10, 0, 0.0, 92.7, 67, 118, 95.0, 117.4, 118.0, 118.0, 15.847860538827259, 95.55300366481775, 2.1976525356576864], "isController": false}, {"data": ["student_login_current_academicyear Request-0", 10, 0, 0.0, 28.1, 13, 44, 29.0, 43.6, 44.0, 44.0, 17.33102253032929, 17.828612435008665, 2.403325389948007], "isController": false}, {"data": ["school_infrastructure Request", 10, 0, 0.0, 106.39999999999999, 75, 151, 100.5, 149.3, 151.0, 151.0, 11.049723756906078, 286.0788587707182, 2.7840124309392262], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 360, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
