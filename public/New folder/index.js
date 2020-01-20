var name=''
let s=''
window.onload = function(){ 

getList()

}

function getList(){
    $.ajax({
        type: "GET",
        url: '/home',
        dataType: 'json',
        success: function(data){
            name = data.userid
            products=''
            products = data.products
            if(products == undefined){
                products = ''
                s=''
            }else{
            for (product of products) {
                s+=`
                <div class="col-xs-4 product-men" style="margin-top:10px;">
                <div class="men-pro-item simpleCart_shelfItem">
                    <div class="men-thumb-item">
                        <img src="uploads/${product.image}" alt="" height="100px;" width="95px;">
                        <div class="men-cart-pro">
                            <div class="inner-men-cart-pro">
                                <a href="" onclick="singleView(${product.id})"  class="link-product-add-cart">Quick View</a>
                            </div>
                        </div>
                        <span class="product-new-top">New</span>
                    </div>
                    <div class="item-info-product">
                        <h4>
                            <a href="" >${product.name}</a>
                            
                        </h4>
                        <div class="info-product-price">
                            <span class="item_price"> Rs. ${product.price}</span>
                            <del>Rs. ${(product.price)+20}</del>
                        </div>
                        <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                                <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Vim Dishwash Gel, 500 ml" />
                                    <input type="hidden" name="amount" value="99.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" class="button" />
                                </fieldset>
                            </form>
                        </div>

                    </div>
                </div>
            </div>`
            }
        }
            if(s==''){
                document.getElementById('rack').innerHTML='<b> Empty Product List...!!! <b>'
            }else{
                document.getElementById('rack').innerHTML= s
            }
            
            s=''
            
            if(name =='' || name == 'null'){
                document.getElementById('name').innerHTML = `<b> Welcome  User!!<b>`
                document.getElementById('navbar').innerHTML = `	
        <li>					
                <a href="#"  onclick="getList()">
                <span class="fa fa-unlock-alt" aria-hidden="true" ></span> Home </a>
        </li>
        <li>					
                <a href="login.html#login" >
                <span class="fa fa-unlock-alt" aria-hidden="true" ></span> Sign In </a>
        </li>
        <li>
            <a href="login.html#signup"  >
                <span class="fa fa-pencil-square-o" aria-hidden="true" ></span> Sign Up </a>
        </li>`

                
            }else{
                document.getElementById('name').innerHTML = `<b> Welcome  ${name}!!<b>`
                document.getElementById('navbar').innerHTML = `
                <li>					
                <a href="#"  onclick="getList()">
                <span class="fa fa-unlock-alt" aria-hidden="true" ></span> Home </a>
            </li>
            <li>					
                    <a href="/logout" >
                    <span class="fa fa-unlock-alt" aria-hidden="true"></span> Log Out </a>
            </li>`

            }   
            
        }            
      })
}
function singleView(n){
    console.log(n)
    s=`<div class="col-xs-4 product-men" style="margin-top:10px;">
    <div class="men-pro-item simpleCart_shelfItem">
        <div class="men-thumb-item">
            <img src="uploads/${product.image}" alt="" height="100px;" width="100px;">
            <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                    <a href="single.html" class="link-product-add-cart">Quick View</a>
                </div>
            </div>
            <span class="product-new-top">New</span>
        </div>
        <div class="item-info-product">
            <h4>
                <a href="" onclick="singleView(${product.id}">${product.name}</a>
            </h4>
            <div class="info-product-price">
                <span class="item_price">${product.price}</span>

            </div>
            <div class="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                <form action="#" method="post">
                    <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input type="hidden" name="item_name" value="Vim Dishwash Gel, 500 ml" />
                        <input type="hidden" name="amount" value="99.00" />
                        <input type="hidden" name="discount_amount" value="1.00" />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input type="submit" name="submit" value="Add to cart" class="button" />
                    </fieldset>
                </form>
            </div>

        </div>
    </div>
</div>`

    document.getElementById('rack').innerHTML=s
   }