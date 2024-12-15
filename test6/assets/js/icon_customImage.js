	/*ymaps.ready(function () {
						var myMap = new ymaps.Map('map', {
								center: [55.763324, 37.564040],
								zoom: 9
							}, {
								searchControlProvider: 'yandex#search
							}),

							// Создаём макет содержимого.
							MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
								'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
							),

							myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
								hintContent: 'Собственный значок метки',
								balloonContent: 'Это красивая метка'
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#image',
								// Своё изображение иконки метки.
								iconImageHref: 'assets/img/map/point.png',
								// Размеры метки.
								iconImageSize: [36, 40],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-5, -38]
							}),

							myPlacemarkWithContent = new ymaps.Placemark([55.760661, 37.663836], {
								hintContent: 'Собственный значок метки с контентом',
								balloonContent: 'А эта — новогодняя',
								iconContent: ''
							}, {
								// Опции.
								// Необходимо указать данный тип макета.
								iconLayout: 'default#imageWithContent',
								// Своё изображение иконки метки.
								iconImageHref: 'assets/img/map/point.png',
								// Размеры метки.
								iconImageSize: [36, 40],
								// Смещение левого верхнего угла иконки относительно
								// её "ножки" (точки привязки).
								iconImageOffset: [-24, -24],
								// Смещение слоя с содержимым относительно слоя с картинкой.
								iconContentOffset: [15, 15],
								// Макет содержимого.
								iconContentLayout: MyIconContentLayout
							});

						myMap.geoObjects
							.add(myPlacemark)
							.add(myPlacemarkWithContent);
					});*/



            ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [55.95, 68.44],
            zoom: 3
        }),

        myPlacemark1 = new ymaps.Placemark([54.978318, 73.409567], {
            balloonContent: '<p>Омск.</p><h1>БУЗОО «Клиническая офтальмологическая больница им. В.П. Выходцева»</h1><p style="color:#69229A">+7 (3812) 790-300</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-15, -27],
        }),

        myPlacemark2 = new ymaps.Placemark([55.786315, 49.129988], {
            balloonContent: '<p>Казань.</p><h1>ГАУЗ «РКОБ МЗ РТ им. проф. Е.В. Адамюка»</h1><p style="color:#69229A">+7 (843) 528-01-01</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-26, -46]
        }),

        myPlacemark3 = new ymaps.Placemark([56.810138, 60.560743], {
            balloonContent: '<p>Екатеринбург.</p><h1>ГАУЗ СО «Свердловская областная клиническая больница № 1»</h1><p style="color:#69229A">+7 (343) 363-03-03</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark4 = new ymaps.Placemark([56.825738, 60.533831], {
            balloonContent: '<p>Екатеринбург.</p><h1>ГАУЗСО «Многопрофильный клинический медицинский центр "БОНУМ"»</h1><p style="color:#69229A">+7 (343) 287-77-70</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
          myPlacemark5 = new ymaps.Placemark([47.234421, 39.762594], {
            balloonContent: '<p>Ростов-на-Дону.</p><h1>ГБУ РО «Областная детская клиническая больница»</h1><p style="color:#69229A">+7 (863) 298-33-08</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
          myPlacemark6 = new ymaps.Placemark([43.170480, 131.928585], {
            balloonContent: '<p>Владивосток.</p><h1>ГБУЗ «Краевая клиническая больница № 2»</h1><p style="color:#69229A">+7 (423) 227-74-24</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
          myPlacemark7 = new ymaps.Placemark([55.724085, 37.618576], {
            balloonContent: '<p>Москва.</p><h1>ГБУЗ «Морозовская ДГКБ ДЗМ»</h1><p style="color:#69229A">+7 (495) 959-88-03</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark8 = new ymaps.Placemark([54.732486, 55.932429], {
            balloonContent: '<p>Уфа.</p><h1>ГБУЗ Республиканский медико-генетический центр</h1><p style="color:#69229A">+7 (347) 246-8322</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark9 = new ymaps.Placemark([45.039384, 41.936713], {
            balloonContent: '<p>Ставрополь.</p><h1>ГБУЗ СК «Краевая детская клиническая больница»</h1><p style="color:#69229A">+7 (8652) 25-72-33, +7 (8652) 71-62-07, +7 (8652) 71-62-10, +7 (8652) 71-62-18</p'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark10 = new ymaps.Placemark([42.956696, 47.494538], {
            balloonContent: '<p>Махачкала.</p><h1>Глазная клиника «Высокие технологии»</h1><p style="color:#69229A">+7 (988) 201-70-78</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark11 = new ymaps.Placemark([52.238808, 104.279886], {
            balloonContent: '<p>Иркутск.</p><h1>Иркутский филиал ФГАУ «НМИЦ «МНТК «Микрохирургия глаза» им. акад. С.Н. Федорова» Минздрава России</h1><p style="color:#69229A">+7 (3952) 564-119</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark12 = new ymaps.Placemark([45.060389, 38.920435], {
            balloonContent: '<p>Краснодар.</p><h1>Краснодарский филиал ФГАУ «НМИЦ «МНТК «Микрохирургия глаза» им. акад. С.Н. Федорова» Минздрава России</h1><p style="color:#69229A">+7 (800) 200-81-40</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark13 = new ymaps.Placemark([54.982405, 82.816243], {
            balloonContent: '<p>Новосибирск.</p><h1>Новосибирский филиал ФГАУ «НМИЦ «МНТК «Микрохирургия глаза» им. акад. С.Н. Федорова» Минздрава России</h1><p style="color:#69229A">+7 (383) 209-00-44</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
         myPlacemark14 = new ymaps.Placemark([59.836188, 30.407728], {
            balloonContent: '<p>Санкт-Петербург.</p><h1>Санкт-Петербургский филиал ФГАУ «НМИЦ «МНТК «Микрохирургия глаза» им. акад. С.Н. Федорова»</h1><p style="color:#69229A">+7 (812) 324-66-66</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark15 = new ymaps.Placemark([59.939850, 30.345386], {
            balloonContent: '<p>Санкт-Петербург.</p><h1>СПб ГБУЗ «Диагностический центр № 7», Санкт-Петербург</h1><p style="color:#69229A">Запись для взрослого населения: +7 (812) 458-70-51, запись для детского населения: +7 (812) 458-70-52</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark16 = new ymaps.Placemark([55.872208, 37.536468], {
            balloonContent: '<p>Москва.</p><h1>ФГАУ «НМИЦ «МНТК «Микрохирургия глаза» им. акад. С.Н. Федорова» Минздрава России</h1><p style="color:#69229A">+7 (499) 906-50-01</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark17 = new ymaps.Placemark([55.734206, 37.582446], {
            balloonContent: '<p>Москва.</p><h1>ФГБНУ «НИИ глазных болезней им. М.М. Краснова»</h1><p style="color:#69229A">+7 (499) 110-45-45</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
         myPlacemark18 = new ymaps.Placemark([59.965385, 30.321347], {
            balloonContent: '<p>Санкт-Петербург.</p><h1>ФГБОУ ВО «ПСПбГМУ им. И.П. Павлова» Минздрава России</h1><p style="color:#69229A">+7 (812) 338-78-92</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
    myPlacemark19 = new ymaps.Placemark([54.771722,56.008666], {
            balloonContent: '<p>Уфа.</p><h1>ФГБУ «Всероссийский центр глазной и пластической хирургии»</h1><p style="color:#69229A">+7 (347) 293-42-07, +7 (347) 293-42-12</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
    myPlacemark20 = new ymaps.Placemark([55.745981, 37.558720], {
            balloonContent: '<p>Москва.</p><h1>ФГБУ «ФНКЦСМ ФМБА России»</h1><p style="color:#69229A">+7 (499) 795 68 54</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
    myPlacemark21 = new ymaps.Placemark([59.975785,30.313272], {
            balloonContent: '<p>Санкт-Петербург.</p><h1>ФГБУН «Институт мозга человека им. Н.П. Бехтеревой» Российской академии наук</h1><p style="color:#69229A">+7 (812) 670-76-75</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
    myPlacemark22 = new ymaps.Placemark([56.138511, 47.171248], {
            balloonContent: '<p>Чебоксары.</p><h1>Чебоксарский филиал ФГАУ «НМИЦ «МНТК «Микрохирургия глаза» им. акад. С.Н. Федорова» Минздрава России</h1><p style="color:#69229A">+7 (800) 700-07-88</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),

        myPlacemark23 = new ymaps.Placemark([55.795212, 37.691533], {
            balloonContent: '<p>Москва.</p><h1>Медико-генетический центр «Геномед» — лаборатория молекулярной патологии</h1><p style="color:#69229A">+7 (800) 333-45-38</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point-pink.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark24 = new ymaps.Placemark([55.654717, 37.639208], {
            balloonContent: '<p>Москва.</p><h1>ФГБНУ «Медико-генетический научный центр им. акад. Н.П. Бочкова», Москва.</h1><p style="color:#69229A">+7 (495) 111-03-03</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point-pink.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark25 = new ymaps.Placemark([55.696769, 37.564216], {
            balloonContent: '<p>Москва.</p><h1>Центр генетики и репродуктивной медицины «ГЕНЕТИКО»</h1><p style="color:#69229A">+7 (495) 185-99-61</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point-pink.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark26 = new ymaps.Placemark([54.983040, 82.915206], {
            balloonContent: '<p>Новосибирск.</p><h1>ГБУЗ НСО «Государственная Новосибирская областная клиническая больница»</h1><p style="color:#69229A">+7 (383) 315-97-97</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark27 = new ymaps.Placemark([51.837724, 55.148021], {
            balloonContent: '<p>Оренбург.</p><h1>Оренбургский филиал ФГАУ «НМИЦ «МНТК «Микрохирургия глаза» им. акад. С.Н. Федорова»  Минздрава России</h1><p style="color:#69229A">+7 (3532) 38-80-30</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark28 = new ymaps.Placemark([56.864432, 53.179684], {
            balloonContent: '<p>Ижевск.</p><h1>БУЗ УР «Республиканская офтальмологическая клиническая больница МЗ УР»</h1><p style="color:#69229A">+7 (3412) 685-454</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark29 = new ymaps.Placemark([55.729598, 49.180668], {
            balloonContent: '<p>Казань.</p><h1>ГАУЗ «Детская республиканская клиническая больница Министерства здравоохранения Республики Татарстан»</h1><p style="color:#69229A">+7 (843) 269-89-00</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
       myPlacemark30 = new ymaps.Placemark([57.140637, 65.588019], {
            balloonContent: '<p>Тюмень.</p><h1>ГАУЗ ТО «Областной офтальмологический диспансер»</h1><p style="color:#69229A">+7 (3452) 50-37-44</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
         myPlacemark31 = new ymaps.Placemark([45.012930, 38.966869], {
            balloonContent: '<p>Краснодар.</p><h1>ГБУЗ «Детская краевая клиническая больница» министерства здравоохранения Краснодарского края</h1><p style="color:#69229A">+7 (861) 290-00-95</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
         myPlacemark32 = new ymaps.Placemark([55.851997, 37.404256], {
            balloonContent: '<p>Москва.</p><h1>ГБУЗ «Детская городская клиническая больница имени З.А. Башляевой Департамента здравоохранения города Москвы»</h1><p style="color:#69229A">+7 (495) 539-24-73</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
         myPlacemark33 = new ymaps.Placemark([53.225991, 50.170073], {
            balloonContent: '<p>Самара.</p><h1>ГБУЗ «Самарская областная клиническая офтальмологическая больница им. Т.И. Ерошевского»</h1><p style="color:#69229A">+7 (846) 323-00-00</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark34 = new ymaps.Placemark([46.352603, 48.091309], {
            balloonContent: '<p>Астрахань.</p><h1>ГБУЗ АО «Областная детская клиническая больница им. Н.Н. Силищевой»</h1><p style="color:#69229A">+7 (8512) 61-02-73</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark35 = new ymaps.Placemark([56.286139, 44.033587], {
            balloonContent: '<p>Нижний Новгород.</p><h1>ГБУЗ НО «Нижегородская областная детская клиническая больница»</h1><p style="color:#69229A">+7 (831) 467-12-60</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark36 = new ymaps.Placemark([52.036348, 113.509029], {
            balloonContent: '<p>Чита.</p><h1>Клиника ФГБОУ ВО «Читинская государственная медицинская академия» МЗ РФ</h1><p style="color:#69229A">+7 (3022) 73-70-73</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        }),
        myPlacemark37 = new ymaps.Placemark([59.954057, 30.368190], {
            balloonContent: '<p>Санкт-Петербург.</p><h1>ЛОГБУЗ «Детская клиническая больница»</h1><p style="color:#69229A">+7 (812) 542-69-42</p>'
        }, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [0, 0]],
            iconImageHref: 'assets/img/block13/point.svg',
            iconImageSize: [40, 52],
            iconImageOffset: [-35, -63]
        });
    myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4)
        .add(myPlacemark5)
        .add(myPlacemark6)
        .add(myPlacemark7)
        .add(myPlacemark8) 
        .add(myPlacemark9) 
        .add(myPlacemark10) 
        .add(myPlacemark11) 
        .add(myPlacemark12) 
        .add(myPlacemark13) 
        .add(myPlacemark14) 
        .add(myPlacemark15) 
        .add(myPlacemark16) 
        .add(myPlacemark17) 
        .add(myPlacemark18)
        .add(myPlacemark19)
        .add(myPlacemark20)
        .add(myPlacemark21)
        .add(myPlacemark22)
        .add(myPlacemark23)
        .add(myPlacemark24)
        .add(myPlacemark25) 
        .add(myPlacemark26) 
        .add(myPlacemark27) 
        .add(myPlacemark28) 
        .add(myPlacemark29) 
        .add(myPlacemark30)
        .add(myPlacemark31) 
        .add(myPlacemark32) 
        .add(myPlacemark33) 
        .add(myPlacemark34) 
        .add(myPlacemark35) 
        .add(myPlacemark36) 
        .add(myPlacemark37) 
}













