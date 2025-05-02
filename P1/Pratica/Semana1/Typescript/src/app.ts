import { createTypeReferenceDirectiveResolutionCache, escapeLeadingUnderscores } from "typescript";

let saludo:string = "hello world"
console.log(saludo)

const student: Istudent={
    id:1102,
    nombre:'Fab',
    correo:'fabianaa@gmail.com',
    direccion:'su casa',
}

interface Istudent {
    id:number;
    nombre:string;
    correo:string;
    direccion:string;
    calificacion?:number; //el ? significa que calificaciones esta en el sistema pero no es "obligatorio"
}

const students:Istudent[]=[
    {
        id:1102,
        nombre:'fab',
        correo: 'fabianaa@gmail.com',
        direccion:'su casa',
    }
]
students.push({id:1102, nombre:"fab", correo:"fabianaa@gmail.com", direccion:"en mi casa"});

students.push(student)

function agregar(student: Istudent):void{
    students.push(student);
}

const estudiante1:Istudent={id:2, nombre:'', correo:'', direccion:''}
agregar(student)

function agregar2(parm:Istudent, callback:(student:Istudent)=>void)
{
    students.push(parm)
    callback(parm)
}

const estudianteA2: Istudent = {id:2, nombre:'', correo:'', direccion:''}

agregar2(estudianteA2, (parm:Istudent)=>console.log);

function agregar3(parm:Istudent):Promise<Istudent>
{
    return new Promise((resolve)=>{
        students.push(parm);
        setTimeout(()=>{
            resolve(parm)

        },
        1000
        )
    },
    )
    
}

agregar3(estudiante1).then((Istudent)=>
{
    console.log(student);
})


/*async function main() {
    try
    {
        await agregar3(estudiante1)
    }
    catch(ex){

    }
    finally
    {

    }
}
main()*/