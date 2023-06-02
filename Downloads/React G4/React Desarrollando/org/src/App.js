/*import './App.css';*/
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/header';
import Formulario from './components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
      id: uuid(),
      equipo:	"Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo:	"Programación",
      foto: "https://github.com/genesysaluralatam.png",
      nombre: "Genesys Rondón",
      puesto: "Desarrolladora de software e instructora",
      fav: false
    },
    {
      id: uuid(),
      equipo:	"UX y Diseño",
      foto: "https://github.com/jeanmariealuralatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "",
      fav: false
    },
    {
      id: uuid(),
      equipo:	"Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo:	"Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev. FullStack",
      fav: false
    }
    ])
  //Lista de equipos
  const [equipos, actualizarEquipos] = useState([
    {id: uuid(), titulo: "Programación", colorPrimario: "#57C278", colorSecundario: "#D9F7E9" },
    {id: uuid(), titulo: "Front End", colorPrimario: "#82CFFA", colorSecundario: "#E8F8FF"},
    {id: uuid(), titulo: "Data Science", colorPrimario: "#A6D157", colorSecundario: "#F0F8E2"},
    {id: uuid(), titulo: "Devops", colorPrimario: "#E06B69", colorSecundario: "#FDE7E8"},
    {id: uuid(), titulo: "UX y Diseño", colorPrimario: "#DB6EBF", colorSecundario: "#FAE9F5"},
    {id: uuid(), titulo: "Móvil", colorPrimario: "#FFBA05", colorSecundario: "#FFF5D9"},
    {id: uuid(), titulo: "Innovación y Gestión", colorPrimario: "#FF8A29", colorSecundario: "#FFEEDF"}
  ])
    const cambiarMostrar = () => {
        actualizarMostrar(!mostrarFormulario)
    }
  // ternario --> condicion ? seMuestra : noSeMuestra
  // cortoCircuito --> condicion && seMuestra

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador: ", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador
  const eliminarColaborador = (id) => {
    console.log("Eliminar Colaborador ", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    console.log("Actualizar color: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log("datos a agregar", nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like ", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
        <Header />
        {/* { mostrarFormulario ? <Formulario /> : <></> } */}
        {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} registrarColaborador={registrarColaborador} crearEquipo={crearEquipo}/>}
        <MiOrg cambiarMostrar={cambiarMostrar}/>
{/*         <Equipo equipo="Programación"/>
        <Equipo equipo="Front End"/>
        <Equipo equipo="Data Science"/>
        <Equipo equipo="Devops"/>
        <Equipo equipo="UX y Diseño"/>
        <Equipo equipo="Móvil"/>
        <Equipo equipo="Innovación y Gestión"/> */}
        {/* { equipos.map( (equipo, index) => <Equipo equipo={equipo}/> )} */}
        { equipos.map( (equipo) => <Equipo datos={equipo} key={equipo.titulo} colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} eliminarColaborador={eliminarColaborador} actualizarColor={actualizarColor} like={like}/> )}
        <Footer/>
    </div>
  );
}

export default App;
