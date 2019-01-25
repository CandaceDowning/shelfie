module.exports = {

    //function to get inventory from table for the dash to send to product
    getInventory: (req, res)=> {
        const dbInstance = req.app.get('db');
        // console.log(req)

        dbInstance 
        .get_inventory()
        .then(response => res.status(200).json(response))
        .catch(error =>{
            // console.log(error);
            res.status(500).send(error);
            // console.log(response)
        });
    },

    postProduct: (req, res) => {
        const dbInstance = req.app.get("db");
        console.log(req.body);
        const { name, price, img } = req.body;
    
        dbInstance
          .create_product([name, price, img])
          .then(response => res.status(200).json(response))
          .catch(error => {
            console.log(error);
            res.status(500).send(error);
          });
      },

      deleteProduct: (req, res)=> {
        const dbInstance = req.app.get('db');
        console.log(req.body)

        dbInstance 
            .delete_product(req.params.id)
            .then(response=> res.status(200).json(response))
            .catch(error=> {
                console.log(error);
                res.status(500).send(error);
            })
        },   

};