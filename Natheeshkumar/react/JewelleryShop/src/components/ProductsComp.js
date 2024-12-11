import React from 'react'

const ProductsComp = () => {
    return (
        <div className="container mt-2">

            <div class="row">

                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 myborder">

                    <div className="card border-primary card h-100 w-100 ">
                        <img src="../assets/images/iphone1.jpg" alt="" class="img-fluid" style="object-fit: cover;height: 100%;" />
                        <div class="card-body border-primary">
                            <h2 class="card-title">iphone</h2>
                            <p class="card-text">limited time offer</p>
                            <a href="" class="card-link stretched-link">buy now</a>
                        </div>
                    </div>

                    <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 myborder">

                        <div class="card border-primary card h-100 w-100 ">
                            <img src="../assets/images/sony1.jpg" alt="" style="object-fit: cover;height: 100%;"/>
                                <div class="card-body border-primary">
                                    <h2 class="card-title">sony</h2>
                                    <p class="card-text">best seller</p>
                                    <a href="" class="card-link stretched-link">buy now</a>
                                </div>
                        </div>
                    </div>

                </div>


            </div>
            )
}

            export default ProductsComp
