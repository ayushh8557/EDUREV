

const Tag=require('../models/Tag');


//reate tag

exports.createTag=async (req,res)=>{
    try {
        const {name,description}=req.body;

        //validation

        if(!name || !description){
            return res.status(400).json({
                success:false,
                message:"All fields are required",
            });
        }

        //create tag

        const tagDetails=await Tag.create({
            name,
            description,
        });
        console.log("Tag created successfully");

        res.status(200).json({
            success:true,
            message:"Tag created successfully",
            tag:tagDetails,
        });
    } catch (error) {
        console.log("Error in createTag:",error);
        res.status(500).json({
            success:false,
            message:"Internal server error in createTag",
        });
    }   
}


//get all tags

exports.showAllTags=async (req,res)=>{
    try {
        const tags=await Tag.find({},{name:true,description:true});
        res.status(200).json({
            success:true,
            message:"Tags fetched successfully",
            tags,
        });
    } catch (error) {
        console.log("Error in showAllTags:",error);
        res.status(500).json({
            success:false,
            message:"Internal server error in showAllTags",
        });
    }
}


