const Product = require('../models/product.model');

//All details
exports.records = function (req, res) {
  // Product.find({}, function (err, products) {
  //     if (err) return next(err);
  //     if(products.length > 0) {
  //         res.send(products);
  //   } else {
  //     res.send("no products available now.")
  //   }
  // });
  Product.find().then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Product."
        });
    });
};

// controllers/products.js
exports.product_create = function (req, res,next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Product Created successfully')
    })

    // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "Note content can not be empty"
    //     });
    // }
    //
    // // Create a Note
    // const note = new Note({
    //     title: req.body.title || "Untitled Note",
    //     content: req.body.content
    // });
    //
    // // Save Note in the database
    // note.save()
    // .then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating the Note."
    //     });
    // });
};

// get details
exports.product_details = function (req, res,next) {
    // Product.findById(req.params.id, function (err, product) {
    //     if (err) return next(err);
    //     res.send(product);
    // })
    Product.findById(req.params.id).then(product => {
      res.send(product);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Product."
        });
    });

    // Product.findById(req.params.noteId)
    // .then(note => {
    //     if(!note) {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });
    //     }
    //     res.send(note);
    // }).catch(err => {
    //     if(err.kind === 'ObjectId') {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });
    //     }
    //     return res.status(500).send({
    //         message: "Error retrieving note with id " + req.params.noteId
    //     });
    // });
};

// update details
exports.product_update = function (req, res,next) {
    Product.findOneAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Product udpated.');
    });
    // Validate Request
   // if(!req.body.content) {
   //     return res.status(400).send({
   //         message: "Note content can not be empty"
   //     });
   // }
   //
   // // Find note and update it with the request body
   // Product.findByIdAndUpdate(req.params.noteId, {
   //     title: req.body.title || "Untitled Note",
   //     content: req.body.content
   // }, {new: true})
   // .then(note => {
   //     if(!note) {
   //         return res.status(404).send({
   //             message: "Note not found with id " + req.params.noteId
   //         });
   //     }
   //     res.send(note);
   // }).catch(err => {
   //     if(err.kind === 'ObjectId') {
   //         return res.status(404).send({
   //             message: "Note not found with id " + req.params.noteId
   //         });
   //     }
   //     return res.status(500).send({
   //         message: "Error updating note with id " + req.params.noteId
   //     });
   // });
};

// delete details
exports.product_delete = function (req, res,next) {
    Product.findOneAndDelete(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
    // Product.findByIdAndRemove(req.params.noteId)
    // .then(note => {
    //     if(!note) {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });
    //     }
    //     res.send({message: "Note deleted successfully!"});
    // }).catch(err => {
    //     if(err.kind === 'ObjectId' || err.name === 'NotFound') {
    //         return res.status(404).send({
    //             message: "Note not found with id " + req.params.noteId
    //         });
    //     }
    //     return res.status(500).send({
    //         message: "Could not delete note with id " + req.params.noteId
    //     });
    // });
}
