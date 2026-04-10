// import { success } from "zod";

import { success } from "zod";

// export const validate=(schema)=>{
//     return (req,res,next)=>{
//         const result=schema.safeParse(req.body);
//         if(!result.success){
//             return res.status(400).json({
//                 success:false,
//                 erorrs:result.error.issues
//             })
//         }
//         req.body=result.data;
//         next()
//     }
// }
export const validate=(schema)=>{
    return (req,res,next)=>{
        const result=schema.safeParse(req.body);
        if(!result.success){
            return res.status(400).json({
                success:false,
                errors:result.error.issues
            })
        }

        req.body=result.data
        next()
    }
}