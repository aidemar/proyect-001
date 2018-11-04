var imagesData= [
{
	"id":1,
	"name": "example 1",
	"url": "assets/img/portfolio/port1.png"
},

{
	"id":2,
	"name": "example 2",
	"url": "assets/img/portfolio/port2.png"
},

{
	"id":3,
	"name": "example 3",
	"url": "assets/img/portfolio/port3.png"
},



];



  function paintImages(){
      
  html += " ";
  var html= '<div class="grid-item architecture  col-sm-12 col-md-6 col-lg-3">';
   for (var i = 0; i < imagesData.length; i++) {
        html += '<img src='+imagesData[i].url +'>';
        console.log(imagesData[i].url);

  }
        html += '</div>';
        document.getElementById("galeria").innerHTML = html;
 
  };

/*                <div class="grid-item architecture  col-sm-12 col-md-6 col-lg-3">
                    <a href="assets/img/portfolio/port9.png" title="project name 4">
                        <div class="project_box_one">
                            <img src="assets/img/portfolio/port9.png" alt="pro1" />
                            <div class="product_info">
                                <div class="product_info_text">
                                    <div class="product_info_text_inner">
                                        <i class="ion ion-plus"></i>
                                        <h4>project name</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>*/