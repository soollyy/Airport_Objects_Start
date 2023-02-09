class Bag {
    // Include constructor Method with the following property:
    constructor(weight){
    this.weight = weight 
        if (!weight){
            throw new Error("Bag should have a weight")
        }
        
    }
        // 1. Weight
            //1a. Should handle an exception in case user adds no weight and throw an error.

}

//Export the module
module.exports = Bag
