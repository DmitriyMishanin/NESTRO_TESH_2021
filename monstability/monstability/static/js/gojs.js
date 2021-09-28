function init() {

  // Abstract colors
  var Colors = {
    "red": "rgb(255,0,0)",
    "green": "rgb(0,204,0)",
    "orange": "rgb(255,115,0)",
    "yellow": "rgb(255,214,0)",
    "blue": "rgb(0,153,153)",
  }

  var ColorNames = [];
  for (var n in Colors) ColorNames.push(n);

  // a conversion function for translating general color names to specific colors
  function colorFunc(colorname) {
    var c = Colors[colorname]
    if (c) return c;
    return "gray";
  }

  // Icons derived from SVG paths designed by freepik: http://www.freepik.com/
  var Icons = {};

  Icons.it_metric = "M 186.96,87.72\
  C 183.11,86.18 178.75,88.05 177.21,91.89\
    177.21,91.89 155.53,145.99 155.53,145.99\
    154.52,145.88 153.51,145.81 152.50,145.81\
    141.94,145.81 132.41,151.66 127.62,161.07\
    122.60,170.91 123.89,182.66 131.05,192.51\
    131.78,193.52 132.70,194.44 133.71,195.18\
    139.53,199.41 146.03,201.64 152.50,201.64\
    163.06,201.64 172.59,195.80 177.39,186.38\
    182.40,176.54 181.11,164.79 173.96,154.95\
    173.23,153.94 172.31,153.01 171.29,152.27\
    170.74,151.87 170.18,151.51 169.62,151.15\
    169.62,151.15 191.13,97.47 191.13,97.47\
    192.67,93.62 190.80,89.26 186.96,87.72 Z\
  M 164.02,179.57\
  C 161.80,183.93 157.39,186.64 152.50,186.64\
    149.30,186.64 146.07,185.52 142.91,183.31\
    139.31,178.14 138.60,172.54 140.98,167.88\
    143.20,163.52 147.61,160.81 152.50,160.81\
    154.06,160.81 155.62,161.08 157.18,161.60\
    157.23,161.62 157.28,161.65 157.33,161.67\
    157.49,161.74 157.66,161.79 157.82,161.84\
    159.25,162.39 160.68,163.15 162.09,164.13\
    165.69,169.30 166.40,174.91 164.02,179.57 Z\
  M 305.00,173.73\
  C 305.00,132.06 288.20,94.26 261.03,66.71\
    260.82,66.42 260.59,66.15 260.33,65.89\
    260.08,65.63 259.80,65.41 259.52,65.20\
    231.97,38.02 194.16,21.23 152.50,21.23\
    110.84,21.23 73.03,38.02 45.48,65.20\
    45.20,65.41 44.92,65.64 44.67,65.89\
    44.41,66.15 44.18,66.42 43.97,66.71\
    16.80,94.26 0.00,132.06 0.00,173.73\
    0.00,214.46 15.86,252.74 44.66,281.55\
    44.66,281.55 44.66,281.56 44.67,281.56\
    44.67,281.56 44.67,281.56 44.68,281.57\
    44.68,281.57 44.68,281.57 44.69,281.58\
    46.15,283.04 48.07,283.77 49.99,283.77\
    51.91,283.77 53.83,283.04 55.29,281.58\
    55.42,281.45 55.53,281.32 55.65,281.19\
    55.65,281.19 78.76,258.07 78.76,258.07\
    81.69,255.14 81.69,250.40 78.76,247.47\
    75.83,244.54 71.08,244.54 68.15,247.47\
    68.15,247.47 50.12,265.50 50.12,265.50\
    29.08,242.10 16.88,212.65 15.21,181.23\
    15.21,181.23 40.71,181.23 40.71,181.23\
    44.85,181.23 48.21,177.87 48.21,173.73\
    48.21,169.58 44.85,166.23 40.71,166.23\
    40.71,166.23 15.21,166.23 15.21,166.23\
    16.95,133.95 29.88,104.61 50.16,82.00\
    50.16,82.00 68.15,99.98 68.15,99.98\
    69.61,101.45 71.53,102.18 73.45,102.18\
    75.37,102.18 77.29,101.45 78.76,99.98\
    81.69,97.05 81.69,92.31 78.76,89.38\
    78.76,89.38 60.77,71.39 60.77,71.39\
    83.38,51.10 112.73,38.18 145.00,36.43\
    145.00,36.43 145.00,61.94 145.00,61.94\
    145.00,66.08 148.36,69.44 152.50,69.44\
    156.64,69.44 160.00,66.08 160.00,61.94\
    160.00,61.94 160.00,36.43 160.00,36.43\
    192.27,38.18 221.62,51.10 244.23,71.39\
    244.23,71.39 226.24,89.38 226.24,89.38\
    223.31,92.31 223.31,97.05 226.24,99.98\
    227.71,101.45 229.63,102.18 231.54,102.18\
    233.46,102.18 235.38,101.45 236.85,99.98\
    236.85,99.98 254.83,82.00 254.83,82.00\
    275.12,104.61 288.05,133.95 289.79,166.23\
    289.79,166.23 264.29,166.23 264.29,166.23\
    260.14,166.23 256.79,169.58 256.79,173.73\
    256.79,177.87 260.14,181.23 264.29,181.23\
    264.29,181.23 289.79,181.23 289.79,181.23\
    288.11,212.65 275.91,242.10 254.88,265.50\
    254.88,265.50 236.85,247.47 236.85,247.47\
    233.92,244.54 229.17,244.54 226.24,247.47\
    223.31,250.40 223.31,255.15 226.24,258.07\
    226.24,258.07 249.73,281.56 249.73,281.56\
    251.19,283.02 253.11,283.76 255.03,283.76\
    255.99,283.76 256.95,283.57 257.85,283.21\
    258.75,282.84 259.60,282.29 260.33,281.56\
    289.14,252.75 305.00,214.46 305.00,173.73 Z";

  Icons.it_service =
    "M 37.50,27.50\
           C 37.50,27.50 2.50,27.50 2.50,27.50\
             1.12,27.50 0.00,28.62 0.00,30.00\
             0.00,30.00 0.00,37.50 0.00,37.50\
             0.00,38.88 1.12,40.00 2.50,40.00\
             2.50,40.00 37.50,40.00 37.50,40.00\
             38.88,40.00 40.00,38.88 40.00,37.50\
             40.00,37.50 40.00,30.00 40.00,30.00\
             40.00,28.62 38.88,27.50 37.50,27.50 Z\
           M 38.75,37.50\
           C 38.75,38.19 38.19,38.75 37.50,38.75\
             37.50,38.75 2.50,38.75 2.50,38.75\
             1.81,38.75 1.25,38.19 1.25,37.50\
             1.25,37.50 1.25,30.00 1.25,30.00\
             1.25,29.31 1.81,28.75 2.50,28.75\
             2.50,28.75 37.50,28.75 37.50,28.75\
             38.19,28.75 38.75,29.31 38.75,30.00\
             38.75,30.00 38.75,37.50 38.75,37.50 Z\
           M 35.00,33.75\
           C 35.00,34.78 34.16,35.62 33.12,35.62\
             32.09,35.62 31.25,34.78 31.25,33.75\
             31.25,32.71 32.09,31.87 33.12,31.87\
             34.16,31.87 35.00,32.71 35.00,33.75 Z\
           M 17.50,33.13\
           C 17.50,33.13 5.00,33.13 5.00,33.13\
             4.66,33.13 4.38,33.41 4.38,33.75\
             4.38,34.09 4.66,34.37 5.00,34.37\
             5.00,34.37 17.50,34.37 17.50,34.37\
             17.84,34.37 18.12,34.09 18.12,33.75\
             18.12,33.41 17.84,33.13 17.50,33.13 Z\
           M 37.50,13.75\
           C 37.50,13.75 2.50,13.75 2.50,13.75\
             1.12,13.75 0.00,14.87 0.00,16.25\
             0.00,16.25 0.00,23.75 0.00,23.75\
             0.00,25.13 1.12,26.25 2.50,26.25\
             2.50,26.25 37.50,26.25 37.50,26.25\
             38.88,26.25 40.00,25.13 40.00,23.75\
             40.00,23.75 40.00,16.25 40.00,16.25\
             40.00,14.87 38.88,13.75 37.50,13.75 Z\
           M 38.75,23.75\
           C 38.75,24.44 38.19,25.00 37.50,25.00\
             37.50,25.00 2.50,25.00 2.50,25.00\
             1.81,25.00 1.25,24.44 1.25,23.75\
             1.25,23.75 1.25,16.25 1.25,16.25\
             1.25,15.56 1.81,15.00 2.50,15.00\
             2.50,15.00 37.50,15.00 37.50,15.00\
             38.19,15.00 38.75,15.56 38.75,16.25\
             38.75,16.25 38.75,23.75 38.75,23.75 Z\
           M 35.00,20.00\
           C 35.00,21.03 34.16,21.87 33.12,21.87\
             32.09,21.87 31.25,21.03 31.25,20.00\
             31.25,18.96 32.09,18.12 33.12,18.12\
             34.16,18.12 35.00,18.96 35.00,20.00 Z\
           M 17.50,19.38\
           C 17.50,19.38 5.00,19.38 5.00,19.38\
             4.66,19.38 4.38,19.66 4.38,20.00\
             4.38,20.34 4.66,20.62 5.00,20.62\
             5.00,20.62 17.50,20.62 17.50,20.62\
             17.84,20.62 18.12,20.34 18.12,20.00\
             18.12,19.66 17.84,19.38 17.50,19.38 Z\
           M 37.50,0.00\
           C 37.50,0.00 2.50,0.00 2.50,0.00\
             1.12,0.00 0.00,1.12 0.00,2.50\
             0.00,2.50 0.00,10.00 0.00,10.00\
             0.00,11.38 1.12,12.50 2.50,12.50\
             2.50,12.50 37.50,12.50 37.50,12.50\
             38.88,12.50 40.00,11.38 40.00,10.00\
             40.00,10.00 40.00,2.50 40.00,2.50\
             40.00,1.12 38.88,0.00 37.50,0.00 Z\
           M 38.75,10.00\
           C 38.75,10.69 38.19,11.25 37.50,11.25\
             37.50,11.25 2.50,11.25 2.50,11.25\
             1.81,11.25 1.25,10.69 1.25,10.00\
             1.25,10.00 1.25,2.50 1.25,2.50\
             1.25,1.81 1.81,1.25 2.50,1.25\
             2.50,1.25 37.50,1.25 37.50,1.25\
             38.19,1.25 38.75,1.81 38.75,2.50\
             38.75,2.50 38.75,10.00 38.75,10.00 Z\
           M 35.00,6.25\
           C 35.00,7.28 34.16,8.12 33.12,8.12\
             32.09,8.12 31.25,7.28 31.25,6.25\
             31.25,5.21 32.09,4.37 33.12,4.37\
             34.16,4.37 35.00,5.21 35.00,6.25 Z\
           M 17.50,5.63\
           C 17.50,5.63 5.00,5.63 5.00,5.63\
             4.66,5.63 4.38,5.91 4.38,6.25\
             4.38,6.59 4.66,6.87 5.00,6.87\
             5.00,6.87 17.50,6.87 17.50,6.87\
             17.84,6.87 18.12,6.59 18.12,6.25\
             18.12,5.91 17.84,5.63 17.50,5.63 Z";

  Icons.bs_service =
    "M477.858,8.533H34.142C15.317,8.533,0,23.851,0,42.675v281.591c0,4.71,3.823,8.533,8.533,8.533h494.933    c4.71,0,8.533-3.823,8.533-8.533V42.675C512,23.851,496.683,8.533,477.858,8.533z M494.933,315.733H17.067V42.675    c0-9.421,7.663-17.075,17.075-17.075h443.716c9.412,0,17.075,7.654,17.075,17.075V315.733z M503.467,315.733H8.533c-4.71,0-8.533,3.823-8.533,8.533v42.658c0,18.825,15.317,34.142,34.142,34.142h443.716    c18.825,0,34.142-15.317,34.142-34.142v-42.658C512,319.556,508.177,315.733,503.467,315.733z M494.933,366.925    c0,9.421-7.663,17.075-17.075,17.075H34.142c-9.412,0-17.075-7.654-17.075-17.075V332.8h477.867V366.925z M281.6,349.867h-51.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h51.2c4.71,0,8.533-3.823,8.533-8.533    S286.31,349.867,281.6,349.867z M469.333,42.667H42.667c-4.71,0-8.533,3.823-8.533,8.533v273.067c0,4.71,3.823,8.533,8.533,8.533h426.667    c4.71,0,8.533-3.823,8.533-8.533V51.2C477.867,46.49,474.044,42.667,469.333,42.667z M460.8,315.733H51.2v-256h409.6V315.733z M366.933,452.267H145.067c-14.114,0-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6h221.867c14.114,0,25.6-11.486,25.6-25.6    S381.047,452.267,366.933,452.267z M366.933,486.4H145.067c-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533h221.867    c4.71,0,8.533,3.831,8.533,8.533S371.644,486.4,366.933,486.4z M349.867,452.267c-28.314,0-42.667-20.096-42.667-59.733c0-4.71-3.823-8.533-8.533-8.533h-85.333    c-4.71,0-8.533,3.823-8.533,8.533c0,39.637-14.353,59.733-42.667,59.733c-4.71,0-8.533,3.823-8.533,8.533    c0,4.71,3.823,8.533,8.533,8.533h187.733c4.71,0,8.533-3.823,8.533-8.533C358.4,456.09,354.577,452.267,349.867,452.267z     M203.699,452.267c10.505-11.639,16.691-28.971,17.937-51.2h68.736c1.237,22.229,7.424,39.561,17.937,51.2H203.699z M407.757,259.959l-20.599-20.599l11.46-11.46c2.125-2.125,2.978-5.214,2.244-8.124c-0.734-2.91-2.944-5.214-5.82-6.084    l-85.333-25.6c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.219-3.046,5.478-2.142,8.482l25.6,85.333    c0.862,2.884,3.174,5.094,6.084,5.828c2.901,0.717,5.999-0.12,8.124-2.244l12.066-12.075l20.599,20.608    c1.596,1.604,3.772,2.5,6.033,2.5s4.437-0.896,6.033-2.5l24.132-24.141C411.093,268.689,411.093,263.296,407.757,259.959z     M377.591,278.067l-18.756-18.765c-2.176-2.176-5.026-3.26-7.876-3.26c-2.859,0-5.709,1.092-7.876,3.251l-6.161,6.161    l-16.939-56.465l56.465,16.939l-6.605,6.605c-1.818,1.826-2.816,4.25-2.816,6.827c0,2.586,1.007,5.026,2.833,6.835l19.797,19.797    L377.591,278.067z M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533V128c0,4.71,3.823,8.533,8.533,8.533H358.4    c4.71,0,8.533-3.823,8.533-8.533V85.333C366.933,80.623,363.11,76.8,358.4,76.8z M349.867,119.467H128v-25.6h221.867V119.467z M221.867,170.667H153.6c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533h68.267    c4.71,0,8.533-3.823,8.533-8.533V179.2C230.4,174.49,226.577,170.667,221.867,170.667z M213.333,204.8h-51.2v-17.067h51.2V204.8z M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533v162.133c0,4.71,3.823,8.533,8.533,8.533h203.145    c2.705,0,5.239-1.271,6.844-3.439c1.613-2.167,2.108-4.966,1.331-7.552l-10.803-36.019l35.968,10.795    c2.586,0.777,5.385,0.282,7.543-1.331c2.167-1.604,3.439-4.147,3.439-6.844V85.333C366.933,80.623,363.11,76.8,358.4,76.8z     M349.867,200.141L309.7,188.092c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.227-3.046,5.478-2.142,8.491l12.066,40.209H128    V93.867h221.867V200.141z"

  Icons.bu_service =
    "M473.6,0H38.4C17.229,0,0,17.229,0,38.4v435.2C0,494.771,17.229,512,38.4,512h435.2c21.171,0,38.4-17.229,38.4-38.4V38.4 C512,17.229,494.771,0,473.6,0z M494.933,473.6c0,11.767-9.566,21.333-21.333,21.333H38.4c-11.759,0-21.333-9.566-21.333-21.333 V38.4c0-11.768,9.574-21.333,21.333-21.333h435.2c11.759,0,21.333,9.566,21.333,21.333V473.6z M76.8,34.133H42.667c-4.71,0-8.533,3.814-8.533,8.533V76.8c0,4.719,3.823,8.533,8.533,8.533H76.8 c4.71,0,8.533-3.814,8.533-8.533V42.667C85.333,37.948,81.51,34.133,76.8,34.133z M68.267,68.267H51.2V51.2h17.067V68.267z M145.067,34.133h-34.133c-4.71,0-8.533,3.814-8.533,8.533V76.8c0,4.719,3.823,8.533,8.533,8.533h34.133 c4.71,0,8.533-3.814,8.533-8.533V42.667C153.6,37.948,149.777,34.133,145.067,34.133z M136.533,68.267h-17.067V51.2h17.067V68.267 z M213.333,34.133H179.2c-4.71,0-8.533,3.814-8.533,8.533V76.8c0,4.719,3.823,8.533,8.533,8.533h34.133 c4.71,0,8.533-3.814,8.533-8.533V42.667C221.867,37.948,218.044,34.133,213.333,34.133z M204.8,68.267h-17.067V51.2H204.8V68.267z M473.6,0H38.4C17.229,0,0,17.229,0,38.4v72.533c0,4.719,3.823,8.533,8.533,8.533h494.933c4.71,0,8.533-3.814,8.533-8.533 V38.4C512,17.229,494.771,0,473.6,0z M494.933,102.4H17.067v-64c0-11.768,9.574-21.333,21.333-21.333h435.2 c11.759,0,21.333,9.566,21.333,21.333V102.4z M469.333,136.533H42.667c-4.71,0-8.533,3.814-8.533,8.533v324.267c0,4.719,3.823,8.533,8.533,8.533h426.667 c4.71,0,8.533-3.814,8.533-8.533V145.067C477.867,140.348,474.044,136.533,469.333,136.533z M460.8,460.8H51.2V153.6h409.6V460.8z M384,281.6h-15.445c-3.268,0-6.144-2.022-6.997-4.924c-2.406-8.175-5.478-15.804-8.883-22.05 c-1.468-2.688-0.879-6.17,1.425-8.482l10.931-10.931c1.604-1.596,2.5-3.763,2.5-6.033c0-2.27-0.896-4.429-2.5-6.033 l-24.969-24.969c-3.2-3.209-8.866-3.209-12.066,0l-10.931,10.931c-2.313,2.295-5.803,2.893-8.491,1.425 c-6.298-3.43-13.918-6.502-22.042-8.883c-2.901-0.853-4.932-3.729-4.932-6.997V179.2c0-4.719-3.823-8.533-8.533-8.533h-34.133 c-4.71,0-8.533,3.814-8.533,8.533v15.454c0,3.26-2.031,6.135-4.924,6.989c-8.132,2.389-15.753,5.461-22.059,8.892 c-2.688,1.476-6.178,0.887-8.482-1.425l-10.931-10.931c-1.596-1.604-3.772-2.5-6.033-2.5c-2.261,0-4.429,0.896-6.033,2.5 l-24.969,24.969c-1.604,1.596-2.5,3.763-2.5,6.033s0.896,4.429,2.5,6.033l10.931,10.931c2.304,2.304,2.893,5.794,1.425,8.482     c-3.405,6.246-6.477,13.875-8.883,22.05c-0.853,2.901-3.729,4.924-6.997,4.924H128c-4.71,0-8.533,3.814-8.533,8.533v34.133     c0,4.719,3.823,8.533,8.533,8.533h15.445c3.268,0,6.144,2.022,6.997,4.924c2.406,8.175,5.478,15.804,8.883,22.05     c1.468,2.688,0.879,6.17-1.425,8.482l-10.931,10.931c-1.604,1.596-2.5,3.763-2.5,6.033s0.896,4.429,2.5,6.033l24.969,24.969     c3.2,3.191,8.866,3.191,12.066,0l10.931-10.931c2.313-2.295,5.803-2.901,8.491-1.425c5.641,3.072,13.201,5.982,23.108,8.883     c2.901,0.853,4.932,3.729,4.932,6.997V435.2c0,4.719,3.823,8.533,8.533,8.533h32c4.71,0,8.533-3.814,8.533-8.533v-15.454     c0-3.26,2.031-6.135,4.924-6.989c9.916-2.91,17.485-5.82,23.125-8.892c2.688-1.468,6.178-0.879,8.482,1.425l10.931,10.931     c1.596,1.604,3.772,2.5,6.033,2.5c2.261,0,4.429-0.896,6.033-2.5l24.969-24.969c1.604-1.596,2.5-3.763,2.5-6.033     c0-2.27-0.896-4.429-2.5-6.033l-10.931-10.931c-2.304-2.304-2.893-5.794-1.425-8.482c3.405-6.246,6.477-13.875,8.883-22.05     c0.853-2.901,3.729-4.924,6.997-4.924H384c4.71,0,8.533-3.814,8.533-8.533v-34.133C392.533,285.414,388.71,281.6,384,281.6z      M375.467,315.733h-6.912c-10.786,0-20.395,7.057-23.373,17.178c-2.074,7.023-4.659,13.491-7.501,18.697     c-5.06,9.293-3.277,21.094,4.343,28.715l4.898,4.898l-12.902,12.902l-4.898-4.898c-7.629-7.629-19.43-9.395-28.715-4.343     c-4.489,2.441-11.145,4.966-19.772,7.501c-10.112,2.978-17.169,12.587-17.169,23.364v6.921h-14.925v-6.921     c0-10.769-7.066-20.378-17.186-23.373c-8.619-2.526-15.266-5.052-19.755-7.492c-9.293-5.069-21.094-3.294-28.723,4.343     l-4.898,4.898l-12.902-12.902l4.898-4.898c7.62-7.612,9.412-19.422,4.343-28.715c-2.842-5.205-5.436-11.674-7.501-18.697     c-2.978-10.121-12.587-17.178-23.373-17.178h-6.912v-17.067h6.912c10.786,0,20.395-7.057,23.373-17.178     c2.074-7.023,4.659-13.491,7.501-18.697c5.06-9.293,3.277-21.094-4.344-28.715l-4.898-4.898l12.902-12.902l4.898,4.898     c7.629,7.637,19.439,9.412,28.715,4.343c5.248-2.85,11.708-5.453,18.705-7.501c10.112-2.978,17.169-12.587,17.169-23.364v-6.921     h17.067v6.921c0,10.769,7.057,20.378,17.178,23.373c6.98,2.039,13.449,4.642,18.688,7.492c9.293,5.052,21.094,3.285,28.723-4.344     l4.898-4.898l12.902,12.902l-4.898,4.898c-7.62,7.612-9.412,19.422-4.343,28.715c2.842,5.205,5.436,11.674,7.501,18.697     c2.978,10.121,12.587,17.178,23.373,17.178h6.912V315.733z M256,247.467c-32.939,0-59.733,26.803-59.733,59.733c0,32.93,26.795,59.733,59.733,59.733s59.733-26.803,59.733-59.733     C315.733,274.27,288.939,247.467,256,247.467z M256,349.867c-23.526,0-42.667-19.14-42.667-42.667     c0-23.526,19.14-42.667,42.667-42.667c23.526,0,42.667,19.14,42.667,42.667C298.667,330.726,279.526,349.867,256,349.867z M110.933,170.667H76.8c-4.71,0-8.533,3.814-8.533,8.533v34.133c0,4.719,3.823,8.533,8.533,8.533s8.533-3.814,8.533-8.533     v-25.6h25.6c4.71,0,8.533-3.814,8.533-8.533S115.644,170.667,110.933,170.667z M435.2,392.533c-4.71,0-8.533,3.814-8.533,8.533v25.6h-25.6c-4.71,0-8.533,3.814-8.533,8.533s3.823,8.533,8.533,8.533     H435.2c4.71,0,8.533-3.814,8.533-8.533v-34.133C443.733,396.348,439.91,392.533,435.2,392.533z";

  Icons.br_service =
    "M70,110.167a1.749,1.749,0,0,0,1.75-1.75v-7.542a1.75,1.75,0,0,0-3.5,0v7.542A1.75,1.75,0,0,0,70,110.167Z M115.5,4.75H12.5A7.759,7.759,0,0,0,4.75,12.5V80.115a7.759,7.759,0,0,0,7.75,7.75H45.75v4.25a1.749,1.749,0,0,0,1.75,1.75h2.75V113.75H24.192a1.75,1.75,0,0,0-1.75,1.75v6a1.75,1.75,0,0,0,1.75,1.75h79.616a1.75,1.75,0,0,0,1.75-1.75v-6a1.75,1.75,0,0,0-1.75-1.75H77.75V93.865H80.5a1.749,1.749,0,0,0,1.75-1.75v-4.25H115.5a7.759,7.759,0,0,0,7.75-7.75V12.5A7.759,7.759,0,0,0,115.5,4.75Zm-13.442,115H25.942v-2.5h76.116Zm-27.808-6H53.75V93.865h20.5Zm4.5-23.385H49.25v-2.5h29.5Zm41-10.25a4.255,4.255,0,0,1-4.25,4.25H12.5a4.255,4.255,0,0,1-4.25-4.25V12.5A4.255,4.255,0,0,1,12.5,8.25h103a4.255,4.255,0,0,1,4.25,4.25Z M115.5,10.75H12.5a1.75,1.75,0,0,0-1.75,1.75V80.115a1.75,1.75,0,0,0,1.75,1.75h103a1.75,1.75,0,0,0,1.75-1.75V12.5A1.75,1.75,0,0,0,115.5,10.75Zm-1.75,3.5V44.556h-8.868l-11.823-23.2a1.75,1.75,0,0,0-3.195.174L78.07,52.632,69.778,33.286a1.769,1.769,0,0,0-1.689-1.058,1.747,1.747,0,0,0-1.584,1.21L56.389,64.745,45.528,21.077a1.75,1.75,0,0,0-3.408.051L33.24,61.956,25.783,45.58a1.75,1.75,0,0,0-1.593-1.024H14.25V14.25ZM14.25,78.365V48.056h8.814L32.237,68.2a1.75,1.75,0,0,0,3.3-.353l8.4-38.639L54.472,71.538a1.749,1.749,0,0,0,1.638,1.326h.06a1.749,1.749,0,0,0,1.665-1.212L68.4,38.955,76.562,58a1.81,1.81,0,0,0,1.645,1.061,1.751,1.751,0,0,0,1.6-1.13L91.735,26.462,102.251,47.1a1.749,1.749,0,0,0,1.559.955h9.94V78.365Z";

  Icons.bp_service =
    "M103.808,113.75H99.315L92.324,76.1h3.9a1.75,1.75,0,0,0,1.75-1.75v-6a1.751,1.751,0,0,0-1.75-1.75H90.565L85.144,37.4h2.782a1.75,1.75,0,0,0,1.75-1.75v-6a1.75,1.75,0,0,0-1.75-1.75H40.074a1.75,1.75,0,0,0-1.75,1.75v6a1.75,1.75,0,0,0,1.75,1.75h2.782L37.435,66.6H31.778a1.751,1.751,0,0,0-1.75,1.75v6a1.75,1.75,0,0,0,1.75,1.75h3.9L28.685,113.75H24.192a1.751,1.751,0,0,0-1.75,1.75v6a1.751,1.751,0,0,0,1.75,1.75h79.616a1.751,1.751,0,0,0,1.75-1.75v-6A1.751,1.751,0,0,0,103.808,113.75Zm-8.053,0h-2.54L89.344,92.9v0l-3.12-16.8h2.54ZM49.9,76.1l10.238,5.21L42.723,90.169,45.336,76.1Zm32.761,0,2.613,14.073L67.859,81.306,78.1,76.1Zm3.661,19.72,3.115,16.778-21.019-9.06ZM64,101.628l-19.534-8.42L64,83.269l19.534,9.939Zm0-22.286L57.621,76.1H70.379ZM41.675,95.816l17.9,7.718-21.019,9.06ZM64,105.44l19.279,8.31H44.721Zm23-38.844H84.464l-5.42-29.2h2.54Zm-7.466,0L67.176,58.435l10.88-7.184L80.9,66.6ZM47.1,66.6l2.848-15.345,10.88,7.184L48.461,66.6ZM68.269,41.467l7.357-3.307,1.34,7.217Zm7.4,7.166L64,56.338l-11.672-7.7L64,43.386ZM64,39.548,59.21,37.4h9.58Zm-4.269,1.919-8.7,3.91,1.34-7.217ZM64,60.531,73.187,66.6H54.813ZM41.824,31.4H86.176v2.5H41.824Zm4.592,6h2.54l-5.42,29.2H41ZM33.528,70.1H94.472v2.5H33.528Zm5.708,6h2.54l-3.12,16.8v0L34.785,113.75h-2.54Zm62.822,43.654H25.942v-2.5h76.116Z M64,25.02a7.759,7.759,0,0,0,7.75-7.75c0-5.162-5.831-11.306-6.5-11.99a1.8,1.8,0,0,0-2.51,0c-.664.684-6.495,6.828-6.495,11.99A7.759,7.759,0,0,0,64,25.02ZM64,9.129c1.77,2.13,4.253,5.663,4.253,8.141a4.25,4.25,0,0,1-8.5,0C59.75,14.772,62.2,11.278,64,9.129Z";

  Icons.ot_and = "M 225.00,19.42\
  C 238.37,17.80 260.49,20.32 274.00,22.59\
    344.89,34.51 405.13,82.38 434.14,148.00\
    442.60,167.14 451.75,199.12 452.00,220.00\
    452.00,220.00 452.96,235.00 452.96,235.00\
    452.96,235.00 452.00,252.00 452.00,252.00\
    451.82,266.67 446.03,290.91 441.33,305.00\
    415.16,383.59 346.98,439.67 265.00,450.72\
    238.83,454.24 210.71,452.97 185.00,446.63\
    148.49,437.61 114.56,419.59 87.00,393.91\
    10.21,322.38 -2.89,201.70 55.74,115.00\
    83.51,73.94 124.45,43.04 172.00,28.72\
    181.10,25.98 196.71,22.17 206.00,21.16\
    206.00,21.16 225.00,19.42 225.00,19.42 Z\
  M 202.00,173.00\
  C 202.00,173.00 178.00,173.00 178.00,173.00\
    176.01,173.00 172.19,172.77 170.60,174.02\
    168.62,175.59 169.00,179.70 169.00,182.00\
    169.00,182.00 169.00,278.00 169.00,278.00\
    169.00,278.00 169.00,300.00 169.00,300.00\
    169.01,301.82 168.85,304.92 170.02,306.40\
    171.59,308.38 175.70,308.00 178.00,308.00\
    178.00,308.00 207.00,308.00 207.00,308.00\
    215.91,307.98 214.68,308.09 222.15,295.00\
    222.15,295.00 238.72,266.00 238.72,266.00\
    238.72,266.00 268.00,215.00 268.00,215.00\
    268.00,215.00 267.00,237.00 267.00,237.00\
    267.00,237.00 267.00,308.00 267.00,308.00\
    267.00,308.00 291.00,308.00 291.00,308.00\
    292.99,308.00 296.81,308.23 298.40,306.98\
    300.38,305.41 300.00,301.30 300.00,299.00\
    300.00,299.00 300.00,203.00 300.00,203.00\
    300.00,203.00 300.00,181.00 300.00,181.00\
    299.99,179.18 300.15,176.08 298.98,174.60\
    297.41,172.62 293.30,173.00 291.00,173.00\
    291.00,173.00 261.00,173.00 261.00,173.00\
    253.01,173.05 253.66,173.78 247.28,185.00\
    247.28,185.00 233.15,210.00 233.15,210.00\
    233.15,210.00 201.00,266.00 201.00,266.00\
    201.00,266.00 202.00,248.00 202.00,248.00\
    202.00,248.00 202.00,173.00 202.00,173.00 Z";

  Icons.ot_or = "M 225.00,19.42\
  C 238.37,17.80 260.49,20.32 274.00,22.59\
    344.89,34.51 405.13,82.38 434.14,148.00\
    442.60,167.14 451.75,199.12 452.00,220.00\
    452.00,220.00 452.96,235.00 452.96,235.00\
    452.96,235.00 452.00,252.00 452.00,252.00\
    451.82,266.67 446.03,290.91 441.33,305.00\
    415.16,383.59 346.98,439.67 265.00,450.72\
    238.83,454.24 210.71,452.97 185.00,446.63\
    148.49,437.61 114.56,419.59 87.00,393.91\
    10.21,322.38 -2.89,201.70 55.74,115.00\
    83.51,73.94 124.45,43.04 172.00,28.72\
    181.10,25.98 196.71,22.17 206.00,21.16\
    206.00,21.16 225.00,19.42 225.00,19.42 Z\
  M 91.00,187.00\
  C 91.00,187.00 65.00,187.00 65.00,187.00\
    65.00,187.00 65.00,294.00 65.00,294.00\
    65.00,294.00 93.00,294.00 93.00,294.00\
    94.91,294.00 98.10,294.12 99.82,293.40\
    103.66,291.78 109.29,279.99 111.58,276.00\
    111.58,276.00 143.00,222.00 143.00,222.00\
    143.00,222.00 142.00,245.00 142.00,245.00\
    142.00,245.00 142.00,294.00 142.00,294.00\
    142.00,294.00 168.00,294.00 168.00,294.00\
    168.00,294.00 168.00,187.00 168.00,187.00\
    168.00,187.00 140.00,187.00 140.00,187.00\
    138.23,187.00 134.94,186.86 133.38,187.57\
    130.27,188.99 124.02,201.46 122.00,205.00\
    122.00,205.00 90.00,261.00 90.00,261.00\
    90.00,261.00 91.00,187.00 91.00,187.00 Z\
  M 252.00,294.00\
  C 252.00,294.00 274.00,294.00 274.00,294.00\
    275.82,293.99 278.92,294.15 280.40,292.98\
    282.26,291.51 281.98,288.13 282.00,286.00\
    282.00,286.00 282.00,229.00 282.00,229.00\
    282.00,229.00 282.00,200.00 282.00,200.00\
    282.00,197.46 282.44,190.45 280.98,188.60\
    279.41,186.62 275.30,187.00 273.00,187.00\
    273.00,187.00 216.00,187.00 216.00,187.00\
    214.01,187.00 210.19,186.77 208.60,188.02\
    206.97,189.31 206.98,192.10 206.72,194.00\
    206.72,194.00 204.95,208.00 204.95,208.00\
    204.95,208.00 198.58,252.00 198.58,252.00\
    197.71,256.81 196.07,266.32 192.61,269.69\
    189.22,272.98 185.11,271.74 181.00,271.00\
    181.00,271.00 181.00,288.00 181.00,288.00\
    181.11,294.23 182.05,294.46 188.00,295.32\
    190.36,295.42 191.57,295.65 194.00,295.32\
    204.58,294.80 212.81,292.49 218.87,283.00\
    223.76,275.34 225.94,262.01 227.27,253.00\
    229.04,240.98 231.99,223.79 232.00,212.00\
    232.00,212.00 252.00,212.00 252.00,212.00\
    252.00,212.00 252.00,294.00 252.00,294.00 Z\
  M 330.00,187.00\
  C 330.00,187.00 304.00,187.00 304.00,187.00\
    304.00,187.00 304.00,294.00 304.00,294.00\
    304.00,294.00 332.00,294.00 332.00,294.00\
    333.80,294.00 337.07,294.14 338.67,293.43\
    342.04,291.93 348.04,279.70 350.15,276.00\
    350.15,276.00 382.00,221.00 382.00,221.00\
    382.00,221.00 381.00,237.00 381.00,237.00\
    381.00,237.00 381.00,294.00 381.00,294.00\
    381.00,294.00 407.00,294.00 407.00,294.00\
    407.00,294.00 407.00,187.00 407.00,187.00\
    407.00,187.00 379.00,187.00 379.00,187.00\
    377.12,187.00 373.89,186.88 372.21,187.60\
    368.66,189.12 362.76,201.19 360.58,205.00\
    360.58,205.00 329.00,260.00 329.00,260.00\
    329.00,260.00 330.00,239.00 330.00,239.00\
    330.00,239.00 330.00,187.00 330.00,187.00 Z";

  var IconNames = [];
  for (var n in Icons) IconNames.push(n);

  // A data binding conversion function. Given an name, return the Geometry.
  // If there is only a string, replace it with a Geometry object, which can be shared by multiple Shapes.
  function geoFunc(geoname) {
    var geo = Icons[geoname];
    if (typeof geo === "string") {
      geo = Icons[geoname] = go.Geometry.parse(geo, true);
    }
    return geo;
  }


  var $ = go.GraphObject.make;  // for conciseness in defining templates
  myDiagram = $(go.Diagram, "myDiagramDiv",  // create a Diagram for the DIV HTML element
    {
      initialAutoScale: go.Diagram.Uniform,  // scale to show all of the contents
      "ChangedSelection": onSelectionChanged, // view additional information
      "draggingTool.gridSnapCellSize": new go.Size(10, 1),
      "draggingTool.isGridSnapEnabled": true,
      "undoManager.isEnabled": true,
      "ModelChanged": function(e) {     // just for demonstration purposes,
        if (e.isTransactionFinished) {  // show the model data in the page's TextArea
          document.getElementById("mySavedModel").textContent = e.model.toJson();
        }
      }
    });

  myDiagram.nodeTemplate =
    $(go.Node, "Spot",
      {
        locationObjectName: "PORT",
        locationSpot: go.Spot.Top,  // location point is the middle top of the PORT
        linkConnected: updatePortHeight,
        linkDisconnected: updatePortHeight,
        toolTip:
          $("ToolTip",
            $(go.TextBlock, { margin: 4, width: 240 },
              new go.Binding("text", "", function(data) { return /*data.text + ":\n\n" + */data.description; }))
          )
      },
      new go.Binding("location", "pos", go.Point.parse).makeTwoWay(go.Point.stringify),
      // The main element of the Spot panel is a vertical panel housing an optional icon,
      // plus a rectangle that acts as the port
      $(go.Panel, "Vertical",
        $(go.Shape,
          {
            width: 40, height: 0,
            stroke: null, strokeWidth: 0, fill: "gray"
          },
          new go.Binding("height", "icon", function() { return 40; }),
          new go.Binding("fill", "color", colorFunc),
          new go.Binding("geometry", "icon", geoFunc)),
        $(go.Shape,
          {
            name: "PORT",
            width: 40, height: 6, margin: new go.Margin(-1, 0, 0, 0),
            stroke: null, strokeWidth: 0, fill: "gray",
            portId: "", cursor: "pointer", fromLinkable: true, toLinkable: true
          },
          new go.Binding("fill", "color", colorFunc)),
        $(go.TextBlock,
          {
            font: "Semi-bold 14px Lato, sans-serif",
            textAlign: "center",
            margin: 3,
            maxSize: new go.Size(120, NaN),
            alignment: go.Spot.Top,
            alignmentFocus: go.Spot.Bottom,
            editable: true
          },
          new go.Binding("text").makeTwoWay())
      )
    );

  // myDiagram.addModelChangedListener(function(evt) {
  //   // ignore unimportant Transaction events
  //   if (!evt.isTransactionFinished) return;
  //   var txn = evt.object;  // a Transaction
  //   if (txn === null) return;
  //   // iterate over all of the actual ChangedEvents of the Transaction
  //   console.log(txn);
  //   console.log(evt);
  //   txn.changes.each(function(e) {
  //     // ignore any kind of change other than adding/removing a node
  //     if (e.modelChange !== "nodeDataArray") return;
  //     // record node insertions and removals
  //     if (e.change === go.ChangedEvent.Insert) {
  //       console.log(evt.propertyName + " added node with key: " + e.newValue.key);
  //     } else if (e.change === go.ChangedEvent.Remove) {
  //       console.log(evt.propertyName + " removed node with key: " + e.oldValue.key);
  //     }
  //   });
  // });

  myDiagram.addDiagramListener("SelectionMoved", function(event) {

    var selectedNode = event.diagram.selection.first();

    console.log("selectedNode",selectedNode);
    console.log("selectedNodeKey",selectedNode.key);
    console.log("selectedNode", selectedNode.location.toString());
    console.log("selectedNode", selectedNode.location.x);
    console.log("selectedNode", selectedNode.location.y);
    console.log("locationObject", selectedNode.locationObject);

    if (selectedNode instanceof go.Node){ //записываем изменения в нод при движении
      var nodeData = selectedNode.data;
//      console.log(nodeData);

      var nodeType, nodeLayer;

      if (nodeData.icon == "it_metric"){
        nodeType = "metric";
        nodeLayer = "it";
      }else if (nodeData.icon == "it_service"){
        nodeType = "service";
        nodeLayer = "it";
      }else if (nodeData.icon == "bs_service"){
        nodeType = "service";
        nodeLayer = "bs";
      }else if (nodeData.icon == "bu_service"){
        nodeType = "service";
        nodeLayer = "bu";
      }else if (nodeData.icon == "br_service"){
        nodeType = "service";
        nodeLayer = "bt";
      }else if (nodeData.icon == "bp_service"){
        nodeType = "service";
        nodeLayer = "bp";
      }else if (nodeData.icon == "ot_and"){
        nodeType = "and";
        nodeLayer = "ot";
      }else if (nodeData.icon == "ot_or"){
        nodeType = "or";
        nodeLayer = "ot";
      }else{
        nodeType = "";
        nodeLayer = "";
      }
    }

//      var data = '{\
//          "id": "'+nodeData.key+'",\
//          "label": "'+nodeData.caption+'",\
//          "type": "'+nodeType+'",\
//          "layer": "'+nodeLayer+'",\
//          "access": '+nodeData.access+',\
//          "stead": '+nodeData.stead+',\
//          "costdown": '+nodeData.costdown+',\
//          "coordX": '+selectedNode.location.x+',\
//          "coordY": '+selectedNode.location.y+',\
//          "RTO": '+nodeData.RTO+',\
//          "RPO": '+nodeData.RPO+'\
//      }';

//      jQuery.ajax({
//        url: "/proxy.php",
//        type: "POST",
//        //contentType: "application/json; charset=utf-8",
//        data: {"url": "http://dh.bitc.ru:8021/api/v1/nodes/"+nodeData.key+"/", "type": "PUT", "data": data},
//        //dataType: "json",
//        success: function(data){
//          //alert("success: "+data);
//        },
//        error: function(data){
//          alert("error: "+data);
//        }
//      });

    // Django. Cross Site Request Forgery protection¶
    // https://docs.djangoproject.com/en/3.2/ref/csrf/
    function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) == (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
    }

    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    jQuery.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    });

    var data_request = {
      "id": nodeData.key,
      "label": nodeData.caption,
      "type": nodeType,
      "layer": nodeLayer,
      "access": nodeData.access,
      "stead": nodeData.stead,
      "costdown": nodeData.costdown,
      "coordX": selectedNode.location.x,
      "coordY": selectedNode.location.y,
      "RTO": nodeData.RTO,
      "RPO": nodeData.RPO
    };

    jQuery.ajax({
        url: "http://dh.bitc.ru:8021/api/v1/nodes/"+nodeData.key+"/",
//        url: "http://127.0.0.1:8000/api/v1/nodes/"+nodeData.key+"/",
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data_request),
        processData: false,
        success: function(data){
//          alert("success: "+data);
        },
        error: function(data){
          alert("error: "+data);
        }
      });

    //Save new location
    // key: selectedNode.key
    // location-x: selectedNode.location.x
    // location-y: selectedNode.location.y

  });

  function updatePortHeight(node, link, port) {
    var sideinputs = 0;
    var sideoutputs = 0;
    node.findLinksConnected().each(function(l) {
      if (l.toNode === node && l.toSpot === go.Spot.LeftSide) sideinputs++;
      if (l.fromNode === node && l.fromSpot === go.Spot.RightSide) sideoutputs++;
    });
    var tot = Math.max(sideinputs, sideoutputs);
    tot = Math.max(1, Math.min(tot, 2));
    port.height = tot * (2+2) + 2;  // where 10 is the link path's strokeWidth
  }

  myDiagram.linkTemplate =
    $(go.Link,
      {
        layerName: "Background",
        routing: go.Link.Orthogonal,
        corner: 15,
        reshapable: true,
        resegmentable: true,
        fromSpot: go.Spot.RightSide,
        toSpot: go.Spot.LeftSide,
        toShortLength: 7
      },
      // make sure links come in from the proper direction and go out appropriately
      new go.Binding("fromSpot", "fromSpot", go.Spot.parse),
      new go.Binding("toSpot", "toSpot", go.Spot.parse),
      new go.Binding("points").makeTwoWay(),
      // mark each Shape to get the link geometry with isPanelMain: true
      $(go.Shape, { isPanelMain: true, stroke: "gray", strokeWidth: 5 },
        // get the default stroke color from the fromNode
        new go.Binding("stroke", "fromNode", function(n) { return go.Brush.lighten((n && Colors[n.data.color]) || "gray"); }).ofObject(),
        // but use the link's data.color if it is set
        new go.Binding("stroke", "color", colorFunc)),
      $(go.Shape, { isPanelMain: true, stroke: "white", strokeWidth: 2, name: "PIPE", strokeDashArray: [20, 40] }),
      $(go.Shape, { toArrow: "Triangle", scale: 1.3, fill: "gray", stroke: null },
        new go.Binding("fill", "color", colorFunc)),
    );

  var SpotNames = ["Top", "Left", "Right", "Bottom", "TopSide", "LeftSide", "RightSide", "BottomSide"];

  myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").textContent);

  // show a collection of node types that the designer may drag into the main diagram
  myPalette =
    $(go.Palette, "myPaletteDiv",
      {
        layout: $(go.GridLayout, { cellSize: new go.Size(1, 1) }),
        initialContentAlignment: go.Spot.TopLeft,
        initialScale: 0.8,
        nodeTemplate: myDiagram.nodeTemplate,  // shared with the main Diagram
        model: $(go.GraphLinksModel,
          {
            nodeDataArray: [
              { "icon":"it_metric", "text":"Метрики" },
              { "icon":"it_service", "text":"ИТ-ресурсы" },
              { "icon":"bs_service", "text":"Бизнес-системы" },
              { "icon":"bu_service", "text":"Бизнес-услуги" },
              { "icon":"br_service", "text":"Бизнес-решения" },
              { "icon":"bp_service", "text":"Бизнес-процессы" },
              { "icon":"ot_and", "text":"И" },
              { "icon":"ot_or", "text":"ИЛИ" },
              // { "icon":"polymerization", "text":"Basic Polymers" },
              // { "text":"Intermediates" },
              // { "icon":"finishedgas", "text":"LPG, Naphtha,\nMTBE" }
            ]  // end nodeDataArray
          })  // end model
      });  // end Palette

  // show and let the designer edit some data properties of the selected node or link
  myInspector = new Inspector("myInspector", myDiagram,
    {
      properties: {
        key: { show: true },
        pos: { show: false },
        icon: { show: Inspector.showIfNode, type: "select", choices: IconNames },
        color: { type: "select", choices: ColorNames },
        text: { show: Inspector.showIfNode },
        caption: { show: Inspector.showIfNode },
        //imgsrc: { show: Inspector.showIfNode },
        from: { show: false },
        to: { show: false },
        points: { show: false },
        fromSpot: { show: Inspector.showIfLink, type: "select", choices: SpotNames },
        toSpot: { show: Inspector.showIfLink, type: "select", choices: SpotNames }
      },
      propertyModified: onSelectionChanged
    });
}

function onSelectionChanged() {
  var node = myDiagram.selection.first();
  if (!(node instanceof go.Node)) return;
  var data = node.data;
  var image = document.getElementById("Image");
  var title = document.getElementById("Title");
  var description = document.getElementById("Description");

  // if (data.imgsrc) {
  //   image.src = data.imgsrc;
  //   image.alt = data.caption;
  // } else {
  //   image.src = "";
  //   image.alt = "";
  // }
  title.textContent = data.text;
  description.textContent = data.description;
}
function load(){
  $.ajax({
    url: "http://dh.bitc.ru:8021/api/v1/nodesview/?format=json",
//    url: "http://127.0.0.1:8000/api/v1/nodesview/?format=json",
    dataType: "html",
    success: function(data){
      //console.log(data);
      document.getElementById("mySavedModel").textContent = data;
      init();

      var d = new Date();
      $("#dataTime time").text(d);
    }
  });
}
function reload(){
  $.ajax({
    url: "http://dh.bitc.ru:8021/api/v1/nodesview/?format=json",
//    url: "http://127.0.0.1:8000/api/v1/nodesview/?format=json",
    dataType: "html",
    success: function(data){
      document.getElementById("mySavedModel").textContent = data;
      myDiagram.model = go.Model.fromJson(document.getElementById("mySavedModel").textContent);

      var d = new Date();
      $("#dataTime time").text(d);
    }
  });
}
function steptest(){
  $("#steptest").attr("disabled", "disabled");
  $("#steptest").html("Загрузка...");
  $.ajax({
    url: "http://dh.bitc.ru:8021/api/v1/steptest/?format=json",
//    url: "http://127.0.0.1:8000/api/v1/steptest/?format=json",
    dataType: "json",
    success: function(data){
      console.log(data);
      $("#steptest").removeAttr("disabled");
      $("#steptest").html("Шаг тестирования: <b>"+data.step+"</b>");
      reload();
    }
  });

}
window.addEventListener('DOMContentLoaded', function(){
  load();
});