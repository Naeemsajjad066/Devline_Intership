export const validate=(schema)=>{
return (req,res,next)=>{
    const results=schema.safeParse(req.body);
    if(!results.success){
              console.log("ZOD ERROR 👉", results.error.issues); // 👈 ADD THIS

        return res.status(400).json({
            success:false,
            errors:results.error.issues,
        })
    }

    req.body=results.data;
    next();
}

}