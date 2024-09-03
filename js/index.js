async function getData(){
    const result = await fetch('https://fakestoreapi.com/products/');
    const products = await result.json();
    const arrTitle = ["Fitness", "Swimming", "Spa", "Golf"];
    products.forEach(element => {
        if(element.id = 1 && element.id < 2){
            for(i = 0; i < arrTitle.length; i++){
                const card = document.createRange().createContextualFragment(`
                    
                        <div class="card card-1">
                            <h3>${arrTitle[i]}</h3>
                            <img src="${element.image}" alt="">
                        </div>
                    
                    `)
                    const card_row = document.querySelector('.card-row');
                    card_row.append(card)
            }

        }
    });

   const arrSections = ["fitness", "swimming", "spa", "golf"]
    products.forEach(element => {
        for(i = 0; i < arrSections.length; i++){
            if(element.id == 1 ){
                const fitness = document.createRange().createContextualFragment(`
                    
                      <!-- ${arrSections[i]} -->
         <section id=${arrSections[i]}>
            <div class="container">
                <h2>${arrSections[i]}</h2>
                <img class="activity-img" src="${element.image}" alt="">
                <p class="text-rigth">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam sit non nobis voluptatum ipsam qui quasi ab tempora, est quaerat obcaecati at eaque odit, consequatur aspernatur sint. Autem dignissimos tenetur eligendi inventore, corrupti veniam aliquid impedit doloremque quam quisquam! Similique repellendus obcaecati ab voluptas delectus optio facere totam deleniti.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste placeat non corporis, temporibus dolorum, error incidunt quas doloremque magnam sed maiores. Vero dolorem quis mollitia, exercitationem, quam illo veritatis labore sint quaerat aliquam nobis neque debitis! A reiciendis laborum, minus iste ullam modi, nam cum, cumque fugiat earum expedita quisquam.
                </p>
            </div>
        </section> 
                        
                    `)
                    const body = document.querySelector('body')
                    body.append(fitness)
            }
        }
    })

    const form = document.createRange().createContextualFragment(`
        
        <section id="contact">
        <div class="container">
            <h2>Contact us</h2>
            <form action="">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input id="nombre" type="text" class="form-control" name="name" placeholder="">
                </div>
                <div class="form-group">
                    <label for="name">Email</label>
                    <input id="email" type="text" class="form-control" name="name" placeholder="">
                </div>
                <div class="form-group">
                    <label for="name">Message</label>
                    <textarea name="" id="mensaje" cols="30" rows="10" class="form-control" placeholder=""></textarea>
                </div>
                <button id="btn-validar" class="btn btn-light">Submit</button>
            </form>
        </div>
    </section>
        
        `)

        const bodys = document.querySelector('body')
        bodys.append(form)


    const footer = document.createRange().createContextualFragment(`
        
        <footer id="footer">
            <a href="https://twitter.com/AndresRamirez?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @AndresRamirez</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </footer>
        
        `)
        const body = document.querySelector('body')
        body.append(footer)
}

getData()