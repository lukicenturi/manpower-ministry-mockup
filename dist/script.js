window.onload = function(){
    function checkNavigation(){
        let navbar = $("#navbar");
        let top = navbar[0].offsetTop + navbar[0].offsetHeight;
        let scrollY = $(window)[0].scrollY;
        if(scrollY > top){
            navbar.addClass('active');
        }else{
            navbar.removeClass('active');
        }
    }

    checkNavigation();

    $(window).on('scroll', ()=>{
        checkNavigation();
    });

    $(".navbar-toggler").on('click', (e)=> {
        let isExpanded = e.currentTarget.attributes['aria-expanded'].value === 'false';

        if(isExpanded){
            $("#navbar").addClass('expanded');
        }else{
            $("#navbar").removeClass('expanded');
        }
    });

    (function initMap(){
        if($('body').hasClass('index')){
            let map = AmCharts.makeChart( "info-chart", {
                "type": "map",
                "theme": "light",
                "dataProvider": {
                    "map": "indonesiaLow",
                    "areas": [ {
                        "id": "ID-AC",
                        "title": "Aceh",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 4447100,
                    }, {
                        "id": "ID-SU",
                        "title": "Sumatera Utara",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 626932
                    }, {
                        "id": "ID-SB",
                        "title": "Sumatera Barat",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 5130632
                    }, {
                        "id": "ID-RI",
                        "title": "Riau",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 2673400
                    }, {
                        "id": "ID-BE",
                        "title": "Bengkulu",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 3771648
                    }, {
                        "id": "ID-JA",
                        "title": "Jambi",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 4301261
                    }, {
                        "id": "ID-SS",
                        "title": "Sumatera Selatan",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 3405565
                    }, {
                        "id": "ID-LA",
                        "title": "Lampung",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 783600
                    }, {
                        "id": "ID-BB",
                        "title": "Bangka Belitung",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 15982378
                    }, {
                        "id": "ID-KR",
                        "title": "Kepulauan Riau",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 8186453
                    }, {
                        "id": "ID-KB",
                        "title": "Kalimantan Barat",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 1211537
                    }, {
                        "id": "ID-KT",
                        "title": "Kalimantan Tengah",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 1293953
                    }, {
                        "id": "ID-KI",
                        "title": "Kalimantan Timur",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 12419293
                    }, {
                        "id": "ID-KU",
                        "title": "Kalimantan Utara",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 6080485
                    }, {
                        "id": "ID-KS",
                        "title": "Kalimantan Selatan",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 2926324
                    }, {
                        "id": "ID-BT",
                        "title": "Banten",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 2688418
                    }, {
                        "id": "ID-JK",
                        "title": "Jakarta",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 4041769
                    }, {
                        "id": "ID-JB",
                        "title": "Jawa Barat",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 4468976
                    }, {
                        "id": "ID-JT",
                        "title": "Jawa Tengah",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 1274923
                    }, {
                        "id": "ID-YO",
                        "title": "Yogyakarta",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 5296486
                    }, {
                        "id": "ID-JI",
                        "title": "Jawa Timur",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 6349097
                    }, {
                        "id": "ID-BA",
                        "title": "Bali",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 9938444
                    }, {
                        "id": "ID-NB",
                        "title": "Nusa Tenggara Barat",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 4919479
                    }, {
                        "id": "ID-NT",
                        "title": "Nusa Tenggara Timur",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 2844658
                    }, {
                        "id": "ID-GO",
                        "title": "Gorontalo",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 5595211
                    }, {
                        "id": "ID-SA",
                        "title": "Sulawesi Utara",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 902195
                    }, {
                        "id": "ID-SR",
                        "title": "Sulawesi Barat",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 1711263
                    }, {
                        "id": "ID-ST",
                        "title": "Sulawesi Tengah",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 1998257
                    }, {
                        "id": "ID-SN",
                        "title": "Sulawesi Selatan",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 1235786
                    }, {
                        "id": "ID-SG",
                        "title": "Sulawesi Tenggara",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 8414350
                    }, {
                        "id": "ID-MA",
                        "title": "Maluku",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 1819046
                    }, {
                        "id": "ID-MU",
                        "title": "Maluku Utara",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 18976457
                    }, {
                        "id": "ID-PB",
                        "title": "Papua Barat",
                        "description": "502,651 perusahaan",
                        "color": "#21578C",
                        "value": 8049313
                    }, {
                        "id": "ID-PA",
                        "title": "Papua",
                        "description": "502,651 perusahaan",
                        "color": "#154069",
                        "value": 642200
                    } ]
                },
                "dragMap": false,
                // disables map dragging/panning
                "zoomOnDoubleClick": false,      // disables zoom on double click
                "zoomControl": {
                    "zoomControlEnabled": false, // disables +/- zoom control
                    "homeButtonEnabled": false, // disables +/- zoom control
                    "panControlEnabled": false   // disables pan controls (default)
                },
                "areasSettings": {
                    "outline": false,
                    "autoZoom": false,
                    "unlistedAreasColor": "#ffffff",
                    "balloonText": "<div class='title'>[[title]]</div><div class='description'>[[description]]</div>",
                },
                "valueLegend": {
                    "enabled": false,
                },
                "balloon": {
                    "fillAlpha": 1,
                    "cornerRadius": 5,
                    "borderThickness": 0,
                    "showBullet": false,
                }
            } );
        }
    })();
}