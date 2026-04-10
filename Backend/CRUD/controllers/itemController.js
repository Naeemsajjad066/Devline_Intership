import { readData, writeData } from "../models/itemModel.js";

export const getItems=(req,res)=>{
    const items=readData();
    res.json(items)
}

export const getItem=(req,res)=>{
    const items=readData();
    const id=parseInt(req.params.id)
    const item=items.find(u=>u.id===id);

    if(!item){
        return res.status(404).json({
            message:"Item not found"
        
        })
        
    }

    res.status(200).json(item)


}

export const addItem=(req,res)=>{
    const items=readData();
    const newItem={
        id:Date.now(),
        ...req.body,
    }
    items.push(newItem),
  writeData(items)
    res.status(201).json({
        message:"Item added successfully",
        newItem,
    })
}

export const updateItem=(req,res)=>{
    const items=readData();
    const id=parseInt(req.params.id)
    const index=items.findIndex(u=>u.id===id);
    if(index==-1){
       return res.status(404).json({
            message:"Item not found you wanna update"
        })
    }
    items[index]={
        ...items[index],
        ...req.body
    }

    writeData(items)
    res.status(200).json({
        message:"Item is updated",
        item:items[index]
    })
}

export const deleteItem=(req,res)=>{
    const items=readData();
        const id=parseInt(req.params.id)

    const filteredItems=items.filter(u=>u.id!==id);

    if(items.length==filteredItems.length){
       return res.status(404).json({
            message:"Item not found"
        })
    }
    writeData(filteredItems)
    res.status(200).json({
        message:"Item deleted Successfully"
    })
}

