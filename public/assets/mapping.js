var fragmentShader = `
void main(void) {
	highp vec4 texelColour = texture2D(uTexture0, vec2(vTextureCoords.s, vTextureCoords.t));

	// Height is represented in TENTHS of a meter
	highp float height = (
		texelColour.r * 255.0 * 256.0 * 256.0 +
		texelColour.g * 255.0 * 256.0 +
		texelColour.b * 255.0 )
	-100000.0;
	
	if (height<elevation && height> 0.0) {
		
		gl_FragColor = vec4(0.9, 0.5, 0.5, 0.9);
	} 

	
}
`

		var tileSize = 256;
		
		var map = L.map('map').setView([0,0], 3);

		var mapboxAccessToken = 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg';

		var base = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg', {
			attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy;<a href="https://www.mapbox.com/map-feedback/">Mapbox</a>',
			id: 'mapbox.streets'
		}).addTo(map);
        
		var antitoner = L.tileLayer.gl({
			uniforms: {
				elevation: Number(document.getElementById('range').value),
				
			},
			fragmentShader: fragmentShader,
			tileUrls: ['https://{s}.tiles.mapbox.com/v4/mapbox.terrain-rgb/{z}/{x}/{y}.pngraw?access_token=' + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg']
		}).addTo(map);
		
        

        var start = document.getElementById("start");
        var pause = document.getElementById("pause");
        pause.disabled=true;
		var slider = document.getElementById("range");
        slider.value=0;
		var output = document.getElementById("demo");
        
		output.innerHTML = 2021
		function ant(){
            var cl = Number(document.getElementById('range').value);
            
            if(cl<143.7){
                cl = cl + (0.3);
            }
            else {
                
                clearInterval(interval_id);
            }

            document.getElementById('range').value =cl;
            
            output.innerHTML =2021+(cl/0.3)
            
            
            antitoner.setUniform('elevation', cl);
            antitoner.reRender();
            console.log(cl)
            
        };
        slider.oninput = function() {
        slider.value = this.value;
        output.innerHTML = 2021+(this.value/0.3);
        antitoner.redraw()
        antitoner.setUniform('elevation', this.value);
        antitoner.reRender();
        pause.disabled=true;
                start.disabled=false;
        clearInterval(interval_id);
        }
        
        start.onclick=function() {
            interval_id = setInterval(ant,200);
            this.disabled=true;
            pause.disabled=false;
          }
        pause.onclick=function(){
            clearInterval(interval_id)
            this.disabled=true;
            start.disabled=false;
            }

        