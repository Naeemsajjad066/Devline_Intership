import fs from 'fs'
const File='./data/data.json'


export const readData=()=>{
    const data =fs.readFileSync(File,"utf-8");
    return JSON.parse(data)
}

export const writeData=(data)=>{
    fs.writeFileSync(File,JSON.stringify(data,null,2))
}