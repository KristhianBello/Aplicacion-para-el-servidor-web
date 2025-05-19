import express, {Request,Response} from "express"

const app = express()
app.use (express.json())
interface IUsuario {
    id:number;
    nombre:string ;
}
const usuarios: IUsuario[]=[]
const puerto=2050

app.get("/usuarios",(req:Request,res:Response) =>{
    res.json(usuarios)
})

app.get("/usuarios/:id",(req:Request,res:Response) =>{
    const {id} = req.params;
    const usuarioEncontrado = usuarios.find(( ele )=> ele.id=== parseInt(id) )
    if (!usuarioEncontrado)
    {
        res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
    }
    res.status(200).json(usuarioEncontrado)
})

app.post("/usuarios",(req:Request,res: Response) =>{
    const {body} = req
    usuarios.push
    res.status(201).json (body)
})

app.patch("/usuarios/:id",(req:Request,res:Response) =>{
    const {id} = req.params;
    const { nombre } = req.body;
    const usuarioEncontrado = usuarios.find(( ele )=> ele.id=== parseInt(id) )
    if (!usuarioEncontrado)
    {
        res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
        return
    }
    usuarioEncontrado.nombre = nombre; 
    res.status(200).json(usuarioEncontrado)
})


app.delete("/usuarios/:id",(req:Request,res:Response) =>{
    const {id} = req.params;
    const usuarioEncontrado = usuarios.find(( ele )=> ele.id=== parseInt(id) )
    if (!usuarioEncontrado)
    {
        res.status(404).json({
            mensaje:"Usuario no encontrado"
        })
        return
    }
    res.status(200).json(usuarioEncontrado)
})

app.listen(puerto,() =>{
    console.log("El servidor esta Funcionando correctamente")

})