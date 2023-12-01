const Product = require('../module/products');
const getAllProducts = async(req, res) =>{
    const { company, name, feature, sort, select } = req.query;
    const queryObject = {};

    if ( company ) {
        queryObject.company = company;
    }

    if ( name ) {
        queryObject.name = { $regex: name, $options: 'i' };
    }

    if ( feature ) {
        queryObject.feature = feature;
    }

    let mydata =  Product.find(queryObject);

    if ( sort ) {
        let sortfix = sort.split(',').join(' ');
        mydata =  mydata.sort(sortfix);
    }

    if ( select ) {
        let selectfix = select.split(',').join(' ');
        mydata =  mydata.select(selectfix);
    }

    let page = Number(req.query.page);
    let limit = Number(req.query.limit);
    let skip = (page-1)*limit;
    mydata.skip(skip).limit(limit);

    const myProduct = await mydata;
    res.status(200).json({myProduct, nbHits: myProduct.length});
}

const getAllProductsTesting = async(req, res) =>{
    
    res.status(200).json({message: "success full remove"});
}

module.exports = { getAllProducts, getAllProductsTesting };