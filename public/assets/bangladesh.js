var fragmentShader0 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height > 0.0)
    {
        gl_FragColor = vec4(0.5, 0.5, 0.5, 0.0);
    }
}
`

var fragmentShader1 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 10.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader2 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 20.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader3 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 30.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader4 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 40.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader5 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 50.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader6 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 60.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader7 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 70.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader8 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 80.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.9);
    }
}
`

var fragmentShader9 = `
void main(void) {
    highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

    // Height is represented in TENTHS of a meter
    highp float height = (
        texelColour.r * 255.0 * 256.0 * 256.0 +
        texelColour.g * 255.0 * 256.0 +
        texelColour.b * 255.0 )
    -100000.0;       
    if(height < 90.0 && height > 0.0)
    {
        gl_FragColor = vec4(2, 0.5, 0.5, 0.4);
    }
}
`

        var tileSize = 256;

        var map = L.map('bangladesh_map').setView([23.6850, 90.3563], 9);

        var mapboxAccessToken = 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg';

        var base = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg', {
            attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy;<a href="https://www.mapbox.com/map-feedback/">Mapbox</a>'
        }).addTo(map);

        var cl = 0;
        function ant(){
            if(cl==0)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader0,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==1)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader1,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==2)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader2,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==3)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader3,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==4)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader4,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==5)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader5,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==6)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader6,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==7)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader7,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==8)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader8,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }
            else if(cl==9)
            {
                var antitoner = L.tileLayer.gl({
                fragmentShader: fragmentShader9,
                tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
                }).addTo(map);
            }

            if(cl==9)
            {
                clearInterval(interval_id);
            }
            else
            {
                cl = cl+1;
            }
            console.log(cl);
        }
        
        interval_id = setInterval(ant,2000);