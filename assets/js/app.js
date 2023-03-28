

const movie = document.getElementById("movie");


let result=``;
movieArray.forEach(function(m){
	
	result += `
	
				<div class="col-md-3">
					<div class="card mb-4">
						<figure class="movieContainer">	
								<img  class="img-fluid" src="https://image.tmdb.org/t/p/w1280/${m.poster_path}" alt="">
						
							<fig-caption>
								<div class="heading">
									<div class="row">
										<div class="col-sm-10">
											<h3> ${m.original_title} </h3>
										</div>
										<div class="col-sm-2 d-flex align-items-center">
											<span class="badge badge-warning"> ${m.vote_average} </span>
										</div>
									</div>
								</div>
								<div class="overview">
									<p>
									    <h4> Overview </h4>
										 
										 ${m.overview}
										
									</p>
								</div>
							</fig-caption>
						</figure>
					</div>
				</div>
	`
	
})

movie.innerHTML = result;