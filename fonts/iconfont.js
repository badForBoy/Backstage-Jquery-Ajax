;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-delete" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M851.33047 140.884704 639.073742 140.884704 639.073742 100.040461c0-18.968004-15.483257-34.347273-34.591213-34.347273l-181.910363 0c-19.113073 0-34.589167 15.379269-34.589167 34.347273l0 40.844244-211.078855 0c-19.113073 0-39.474631 13.58746-39.474631 38.047548 0 26.297946 20.360534 37.164435 39.474631 37.164435l9.41992 0 0 626.565269c0 30.199813 17.123684 51.490721 51.884773 51.490721l549.46017 0c35.492783 0 51.884773-13.884218 51.884773-51.490721L839.55378 216.096686l11.775667 0c19.11205 0 38.859598-9.515724 38.859598-36.427654C890.190069 151.578254 870.441497 140.884704 851.33047 140.884704L851.33047 140.884704zM764.85039 819.47793l-502.698277 0 0-603.402733 502.698277 0L764.85039 819.47793 764.85039 819.47793zM387.197067 717.842135c13.787569 0 24.971741-11.183713 24.971741-24.969695L412.168808 340.695472c0-13.81361-11.183148-24.996301-24.971741-24.996301-13.814176 0-24.997325 11.183713-24.997325 24.996301L362.199743 692.873464C362.198719 706.659445 373.382891 717.842135 387.197067 717.842135L387.197067 717.842135zM512.801793 717.842135c13.787569 0 24.976858-11.183713 24.976858-24.969695L537.778651 340.695472c0-13.81361-11.189288-24.996301-24.976858-24.996301-13.80906 0-24.997325 11.183713-24.997325 24.996301L487.804469 692.873464C487.803445 706.659445 498.992734 717.842135 512.801793 717.842135L512.801793 717.842135zM638.410612 717.842135c13.787569 0 24.971741-11.183713 24.971741-24.969695L663.382353 340.695472c0-13.81361-11.184172-24.996301-24.971741-24.996301-13.814176 0-24.997325 11.183713-24.997325 24.996301L613.413288 692.873464C613.413288 706.659445 624.597459 717.842135 638.410612 717.842135L638.410612 717.842135zM638.410612 717.842135"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-set" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 608.094l0-192.188-146.774-24.462c-5.958-18.132-13.222-35.668-21.694-52.5l86.454-121.034-135.896-135.898-120.826 86.304c-16.91-8.554-34.538-15.888-52.768-21.902L608.094 0l-192.188 0-24.402 146.416c-18.23 6.014-35.858 13.348-52.766 21.902l-120.828-86.304-135.898 135.898 86.454 121.036c-8.47 16.83-15.734 34.366-21.692 52.498L0 415.906l0 192.188 147.118 24.52c5.96 17.968 13.21 35.348 21.642 52.03l-86.748 121.448 135.898 135.896 121.654-86.894c16.602 8.35 33.89 15.528 51.764 21.434L415.906 1024l192.188 0 24.578-147.474c17.874-5.906 35.162-13.084 51.766-21.432l121.652 86.892 135.896-135.896-86.744-121.446c8.432-16.682 15.678-34.062 21.64-52.032L1024 608.094zM512 640c-70.692 0-128-57.306-128-128 0-70.692 57.308-128 128-128 70.694 0 128 57.308 128 128C640 582.694 582.694 640 512 640z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-back" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M768.167311 192.026478 446.857351 511.998977l321.30996 319.974545-64.263629 63.9945L318.335209 511.998977l385.568473-383.966998L768.167311 192.026478z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-home" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M787.284205 385.206222 787.284205 142.389988 676.285159 142.389988 676.285159 288.078091 509.783007 142.389988 65.778634 530.895349 176.779727 530.895349 176.779727 919.39764 454.282972 919.39764 454.282972 697.396477 565.282019 697.396477 565.282019 919.39764 842.786287 919.39764 842.786287 530.895349 953.786357 530.895349Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-data" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M896.036072 901.889895 161.229566 901.889895c-16.954137 0-30.699186-13.745049-30.699186-30.699186L130.53038 171.518399c0-16.954137 13.745049-30.699186 30.699186-30.699186s30.699186 13.745049 30.699186 30.699186l0 668.973124 704.107319 0c16.954137 0 30.699186 13.745049 30.699186 30.699186S912.990209 901.889895 896.036072 901.889895z"  ></path>' +
    '' +
    '<path d="M359.685477 181.972495 244.117368 181.972495l0 135.083581L359.685477 317.056076c16.018835 0 29.006637-12.985756 29.006637-29.006637l0-77.069283C388.692115 194.959274 375.704312 181.972495 359.685477 181.972495z"  ></path>' +
    '' +
    '<path d="M690.193937 506.089383 244.117368 506.089383l0 135.083581 446.076568 0c16.018835 0 29.006637-12.986779 29.006637-29.006637l0-77.069283C719.199551 519.075139 706.212772 506.089383 690.193937 506.089383z"  ></path>' +
    '' +
    '<path d="M835.809385 668.147316 244.117368 668.147316l0 135.084605L835.809385 803.231921c16.018835 0 29.006637-12.986779 29.006637-29.006637l0-77.069283C864.816023 681.134095 851.829244 668.147316 835.809385 668.147316z"  ></path>' +
    '' +
    '<path d="M551.719118 344.031451 244.117368 344.031451l0 135.083581L551.719118 479.115032c16.018835 0 29.006637-12.985756 29.006637-29.006637l0-77.069283C580.725756 357.017206 567.738977 344.031451 551.719118 344.031451z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-add" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M462.268854 561.782823c-117.489878 0-232.744855 0-348.913645 0 0-33.165354 0-65.398476 0-99.0499 115.610064 0 231.119845 0 348.428597 0 0-117.219725 0-233.048777 0-349.579817 34.057677 0 66.312288 0 99.946316 0 0 116.196419 0 231.730759 0 348.633259 116.910687 0 232.458329 0 348.912621 0 0 33.598212 0 65.830311 0 99.481735-115.606994 0-231.118821 0-348.427574 0 0 117.218702 0 233.048777 0 349.579817-34.057677 0-66.313312 0-99.946316 0C462.268854 794.653545 462.268854 679.116135 462.268854 561.782823z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-data1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M76.030116 67.714218l58.099233 0 0 870.261547-58.099233 0 0-870.261547Z"  ></path>' +
    '' +
    '<path d="M134.129348 879.268688l812.163337 0 0 58.235332-812.163337 0 0-58.235332Z"  ></path>' +
    '' +
    '<path d="M230.178915 242.954381l113.26567 0 0 578.078974-113.26567 0 0-578.078974Z"  ></path>' +
    '' +
    '<path d="M404.233066 67.714218l113.264647 0 0 753.319138-113.264647 0 0-753.319138Z"  ></path>' +
    '' +
    '<path d="M578.286194 472.690716l113.26567 0 0 348.343663-113.26567 0 0-348.343663Z"  ></path>' +
    '' +
    '<path d="M752.338299 646.861524l113.26567 0 0 174.171831-113.26567 0 0-174.171831Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-delete1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M782.50997 782.50997 241.49003 241.49003 782.50997 782.50997Z"  ></path>' +
    '' +
    '<path d="M210.371779 272.606512l62.227864-62.227864 541.014837 541.014837-62.227864 62.227864-541.014837-541.014837Z"  ></path>' +
    '' +
    '<path d="M241.49003 782.50997 782.50997 241.49003 241.49003 782.50997Z"  ></path>' +
    '' +
    '<path d="M210.37126 751.394107l541.015561-541.015561 62.227864 62.227864-541.015561 541.015561-62.227864-62.227864Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-data2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M817.427736 787.422863c-12.730952 17.688871-26.841322 34.344203-42.159192 49.758264-74.143651 74.704422-176.602184 120.904651-289.780873 120.904651-113.173572 0-215.635175-46.200228-289.777803-120.904651-74.175373-74.703399-120.064516-177.906899-120.064516-291.891953 0-113.962541 45.889143-217.167065 120.043027-291.869441 72.192206-72.687486 171.150008-118.393457 280.691867-120.797203l4.291746 272.811386c-31.671327 1.994424-60.195987 15.9646-81.246419 37.59934-22.75526 23.348778-36.84414 55.644321-36.84414 91.304496 0 35.669384 14.089903 67.954695 36.84414 91.314729 22.766516 23.370267 54.220902 37.82549 88.964194 37.82549 34.742269 0 66.197678-14.455223 88.974427-37.82549 1.347694-1.370207 2.628874-2.78237 3.913123-4.193509L817.427736 787.422863 817.427736 787.422863 817.427736 787.422863zM515.759115 63.955614l-2.016937 0-8.989745 296.290123c1.023306-0.032746 2.079358-0.042979 3.125177-0.042979 27.047006 0 52.131311 8.763594 72.633251 23.693632l169.143305-246.164492C683.316296 91.227748 602.707396 63.955614 515.759115 63.955614L515.759115 63.955614 515.759115 63.955614zM761.244132 207.110011 587.809081 429.612595c3.14769 2.65241 6.155187 5.475711 9.033747 8.408507 22.75526 23.381523 36.845163 55.655578 36.845163 91.324962 0 30.119995-10.04682 57.83522-26.8843 79.802534l249.074775 158.870334c44.023656-65.798589 69.722968-145.073096 69.722968-230.328829 0-113.995287-45.889143-217.188554-120.043027-291.902186C791.726378 231.881185 776.906857 218.944548 761.244132 207.110011L761.244132 207.110011z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon05-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.665 696.587l-355.606-443.853h-96.985l452.592 560.941 451.264-561.264-1.33 0.323h-94.327z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon05-copy-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.335 327.413l355.606 443.853h96.985l-452.592-560.941-451.264 561.264 1.33-0.323h94.327z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-back1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M342.656 310.208c-22.912 0-41.28-17.536-41.28-38.848s18.304-38.656 41.28-38.656l457.664 0c61.376 0 117.184 23.808 157.952 61.632C999.104 332.672 1024 385.536 1024 443.264l0 137.472c0 57.984-24.896 110.656-65.664 148.928-40.768 37.76-96.576 61.568-157.952 61.568L342.656 791.232c-61.696 0-117.504-23.808-158.272-61.568l0 0c-36.032-34.496-60.48-80.512-64.576-130.88L24.448 598.784C11.072 598.784 0 588.096 0 575.552 0 569.216 2.944 563.2 7.552 559.424l67.2-63.872L142.656 432c9.28-9.024 24.704-9.024 34.24 0l0.576 0 67.52 63.488 67.264 63.872c9.536 8.704 9.536 23.552 0 32.832C306.944 596.608 299.968 599.36 292.928 598.784L201.92 598.784c3.968 29.248 18.88 56.128 40.128 76.096l0.256 0c25.856 24.064 61.44 39.104 100.352 39.104l457.664 0c38.656 0 74.176-15.04 99.776-39.104 25.856-24.128 41.856-57.472 41.856-94.208L941.952 443.264c0-36.672-16-70.08-41.856-94.144-25.536-24.384-61.12-38.912-99.776-38.912L342.656 310.208 342.656 310.208zM131.52 552.832 131.52 552.832c7.552-6.592 17.408-10.688 28.224-10.688 10.752 0 20.608 4.096 27.904 10.688l47.744 0-25.344-24.32L210.048 528.192l0 0L159.744 481.088 109.376 528.192l0 0.256L83.84 552.832 131.52 552.832 131.52 552.832z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-data3" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M805.813211 734.357274c24.399713-35.314297 38.808888-78.034261 38.808888-124.20993 0-121.099079-98.211812-219.255633-219.309868-219.255633-121.117498 0-219.274052 98.156554-219.274052 219.255633 0 121.134895 98.156554 219.292472 219.274052 219.292472 46.175669 0 88.895633-14.374382 124.228349-38.808888l140.529617 140.54906 56.255235-56.237839L805.813211 734.357274zM625.311207 761.976308c-83.838454 0-151.810544-68.009953-151.810544-151.828964s67.972091-151.793148 151.810544-151.793148c83.819011 0 151.810544 67.974138 151.827941 151.793148C777.139148 693.966355 709.130218 761.976308 625.311207 761.976308zM536.45139 565.608965c0 0-34.93158 116.38573 74.523297 142.004201 100.138698 10.479679 112.128777-96.846722 112.128777-96.846722-45.339628-28.637224-98.737792-45.157479-155.867954-45.157479C567.23551 565.608965 554.882158 565.608965 536.45139 565.608965zM348.399433 566.827723c-151.71947 13.917988-270.725888 144.622842-270.725888 303.693744l0 19.648502c0 68.809155 133.197628 68.90023 297.579489 68.90023l191.982476 0c104.614639 0 196.658985-1.037632 249.730715-18.920932l-75.578326-64.863287C294.254256 940.495144 348.399433 566.827723 348.399433 566.827723zM306.825572 461.71985c18.557658 18.558681 40.281425 33.914414 63.935148 45.248553C461.584262 267.100314 699.597097 341.077166 699.597097 341.077166c2.7486-14.409175 4.16588-29.05678 4.16588-43.720757 0-30.420847-6.057973-60.84067-17.702174-88.949868-11.645225-28.110221-28.891004-53.890374-50.41625-75.414597-21.50478-21.50478-47.304376-38.73521-75.43097-50.378387-28.111245-11.644201-58.530045-17.683754-88.969311-17.683754-30.438243 0-60.858066 6.039553-88.986707 17.683754-28.108175 11.644201-53.907771 28.874631-75.431993 50.378387-21.523199 21.524223-38.753629 47.305399-50.39783 75.414597-11.643178 28.109198-17.703197 58.529021-17.703197 88.949868 0 30.438243 6.058996 60.84067 17.703197 88.949868C268.072967 414.417521 285.302373 440.216093 306.825572 461.71985z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-personal-data" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.19968 55.04C259.01056 55.04 53.76 260.27008 53.76 513.47968s205.25056 458.43968 458.43968 458.43968c253.2096 0 458.43968-205.23008 458.43968-458.43968S765.41056 55.04 512.19968 55.04zM512 930.75968c-127.64544 0-241.88288-57.33248-318.42432-147.63008 39.32288-16.91136 137.21216-52.19456 199.20384-70.49984 4.90496-1.5296 5.70496-1.78944 5.70496-23.54048 0-23.38944-2.66496-39.92064-8.39424-52.08064-7.81568-16.64-17.07008-44.58496-20.36992-69.65504-9.31072-10.78528-21.95584-32.04992-30.06976-72.56576-7.14496-35.74016-3.80544-48.72448 0.91392-60.92416 0.5056-1.3056 1.02528-2.57536 1.41568-3.98976 1.75488-8.2112-0.68992-51.74528-6.82496-85.51552-4.21504-23.16544 1.08032-72.4096 32.9792-113.1904 20.14592-25.73952 58.70592-57.37984 127.9104-61.74464l38.61504-0.03968c70.4 4.40448 108.95488 36.0448 129.10464 61.78432 31.89504 40.7808 37.19552 90.02496 32.96 113.1904-6.11456 33.77024-8.56064 77.30432-6.76992 85.66528 0.35456 1.26464 0.87552 2.5344 1.37984 3.84 4.72064 12.19968 8.05504 25.184 0.9152 60.92416-8.1152 40.51584-20.76544 61.78048-30.06976 72.56576-3.30496 25.07008-12.55552 53.01504-20.36992 69.65504-7.2 15.29472-14.57024 33.3504-14.57024 51.29472 0 21.74976 0.8 22.01472 6.04544 23.6544 59.88224 17.66528 155.85792 50.90176 199.21536 68.71552C755.95648 872.3904 640.80128 930.75968 512 930.75968z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-informationvs" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M999.619048 1.73251 533.130142 1.73251 329.955572 458.469181 566.45081 458.469181 377.092047 785.986804 304.761905 527.548709 164.977762 527.548709 290.946048 974.53251 289.320619 976.970606 290.946048 976.970606 429.104762 976.970606 429.917477 976.970606 429.917477 974.53251 811.073 327.624899 527.441286 327.624899 613.587285 133.389653 755.809524 133.389653 699.733333 230.10109 867.961905 230.10109 999.619048 3.358232 998.806333 3.358232 999.619048 1.73251ZM286.882523 458.469181 489.244428 1.73251 350.273 1.73251 234.057143 264.234423 163.352381 1.73251 24.380952 1.73251 147.098429 458.469181 286.069858 458.469181 286.882523 458.469181Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-map-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M399.763265 329.699024c0-13.646811 2.916423-27.288506 8.526187-39.897685 5.617951-12.608156 13.920034-24.173562 24.294312-33.82641 10.368138-9.647731 22.798239-17.378809 36.348859-22.597671 13.555737-5.227048 28.217668-7.937786 42.88267-7.937786 14.671141 0 29.332049 2.710738 42.881646 7.937786 13.550621 5.219885 25.980721 12.950963 36.349883 22.597671 10.374278 9.652847 18.676361 21.218254 24.292266 33.82641 5.610788 12.608156 8.531304 26.249851 8.531304 39.897685 0 13.649881-2.920516 27.2926-8.531304 39.900755-5.615904 12.608156-13.919011 24.172539-24.292266 33.82641-10.370185 9.646708-22.799262 17.377786-36.349883 22.598694-13.549597 5.221932-28.210505 7.936763-42.881646 7.936763-14.665001 0-29.326932-2.715855-42.88267-7.936763-13.550621-5.220908-25.980721-12.951987-36.348859-22.598694-10.375302-9.653871-18.676361-21.218254-24.294312-33.82641C402.679687 356.991624 399.763265 343.348905 399.763265 329.699024L399.763265 329.699024zM50.162981 537.13547l0 0.947582L50.162981 537.13547zM511.765151 60.551074c-172.436304 0-312.236304 130.077567-312.236304 290.527886 0 160.446225 312.236304 484.210074 312.236304 484.210074s312.237327-323.763848 312.237327-484.210074C824.002478 190.628642 684.201455 60.551074 511.765151 60.551074L511.765151 60.551074 511.765151 60.551074zM511.765151 472.130967c-86.218664 0-156.116617-65.036225-156.116617-145.262408 0-80.248695 69.89693-145.266501 156.116617-145.266501 86.240153 0 156.141176 65.017806 156.141176 145.266501C667.906328 407.094742 598.006328 472.130967 511.765151 472.130967L511.765151 472.130967 511.765151 472.130967zM603.369475 782.833335 576.073806 817.22461c158.095691 4.865821 277.664927 27.428699 277.664927 54.526871 0 30.65416-152.936181 55.505152-341.593935 55.505152-261.470083 0-341.599052-24.850991-341.599052-55.505152 0-25.947975 109.595071-47.730071 257.671571-53.809533l-27.125801-34.17331c-192.58111 9.968026-334.923002 45.24753-334.923002 87.236853 0 49.734728 104.624872 90.055039 446.047916 90.055039 246.347664 0 446.050985-40.320311 446.050985-90.055039C958.266391 827.577399 806.001499 791.33087 603.369475 782.833335L603.369475 782.833335zM603.369475 782.833335"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-nodata" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M957.323926 517.765307l1.479701-0.029676c0-5.629207-1.558495-11.150968-4.541433-15.957437L811.723827 268.379447c-5.629207-9.142218-15.616676-14.750959-26.423813-14.750959L598.397231 253.628488l0 61.46591 169.540348 0L891.697253 517.765307 681.287079 517.765307c-16.255219 0-27.308973 16.211217-31.399127 32.042787l-14.649652 56.562227c-4.089132 15.791661-20.733207 28.708855-36.96489 28.708855L424.827103 635.079176c-16.211217 0-32.855292-12.917194-36.903491-28.708855l-14.629185-56.562227c-4.048199-15.83157-15.124466-32.042787-31.399127-32.042787L131.610992 517.765307l124.890428-202.670909 53.607942 0 86.75283 0 27.965935 0 0-61.46591L396.862191 253.628488l-86.75283 0-70.950935 0c-10.745738 0-20.693298 5.54939-26.341948 14.70184L69.001025 501.670747c-3.001357 4.824889-4.561899 10.397814-4.561899 16.065907l1.479701 0.029676-1.644453 0 0.164752 410.629241c0 17.183358 13.850449 31.072693 30.883381 31.072693l832.517921 0c17.076934 0 30.964222-13.889335 30.964222-31.072693l0.12382-410.629241L957.323926 517.76633z"  ></path>' +
    '' +
    '<path d="M722.464921 344.371188c-19.663852-18.859533-69.286016-15.093766-89.220021 3.687996l-83.054601 79.257112L550.190299 104.360859c0-26.205848-13.539364-39.643905-41.506323-39.643905-27.964912 0-41.547255 13.398148-41.547255 39.643905l0 322.95646-79.891562-83.250052c-19.868513-18.741853-51.903114-18.587334-71.546499 0.303922-19.705807 18.930141-19.602454 49.403177 0.26606 68.137867l160.376641 151.199631c9.041934 13.277398 24.658609 22.152533 42.514279 22.152533 17.548678 0 33.021068-8.523117 42.122353-21.49864l161.136957-151.854547C741.98551 393.813251 742.128773 363.30133 722.464921 344.371188z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)