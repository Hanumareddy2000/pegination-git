const btns=[
    {
        id: 1,
        name: 'Mobiles'
    },
    {
        id: 2,
        name: 'Watches'
    },
    {
        id: 3,
        name: 'Cameras'
    },
    {
        id: 4,
        name: 'Laptops'
    },
    {
        id: 5,
        name: 'Air Pods'
    },
    ]
    
    
    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    
        document.getElementById('btns').innerHTML=filters.map((btn)=>{
            var {name, id} = btn;
            return(
                "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
                )
}).join('');
    
    
    const product = [
    {
        id: 1,
        image: 'flipmobiles.jpeg',
        title: 'Z Flip Foldable Mobile',
        price: 120,
        category: 'mobile'
    },
    {
        id: 2,
        image: 'smartwatch.jpg',
        title: 'Smart Watch',
        price: 120,
        category: 'watches'
    },
    {
        id: 5,
        image: 'AirPods.jpg',
        title: 'Air Pods Pro',
        price: 60,
        category: 'airpods'
    },
    {
        id: 3,
        image: 'dslr.jpeg',
        title: '250D DSLR Camera',
        price: 230,
        category: 'cameras'
    },
    {
        id: 1,
        image: 'foldable2.jpg',
        title: 'Foldable Mobile',
        price: 300,
    },
    {
        id: 5,
        image: 'buds.png',
        title: 'Air Pods',
        price: 65,
        category: 'airpods'
    },
    {
        id: 3,
        image: 'camera.jpg',
        title: 'DSLR Camera',
        price: 200,
        category: 'cameras'
    },
    {
        id: 4,
        image: 'laptops.png',
        title: 'Laptop',
        price: 100,
        category: 'Laptop'
    },
    {
        id: 1,
        image: 'mobile.jpg',
        title: 'Mobile',
        price: 350,
    }    
    ];
    
    
    const categories = [...new Set(product.map((item)=>
        {return item}))]
    
    
    const filterItems = (a)=>{
        const flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }
    
    
    
    
    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
                </div>`)
        }).join('');
    }
    displayItem(categories);
