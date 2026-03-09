import "./footer.css"

const empresa = [
"Porsche Latin America, Inc.",
"Empleo",
"Global Partnership Council",
"Compliance",
"Sostenibilidad",
"Newsroom y Notas de Prensa"
]

const web = [
"Página de Porsche",
"Configurador Porsche",
"Vehículos Nuevos y de Re-estreno"
]

const contacto = [
"Ponte en contacto con",
"Suscribirse al boletín informativo"
]

function Footer(){

return(

<footer className="footer">

<div className="volver">
↑ Volver arriba
</div>

<div className="region">

<p>Región / Idioma Actual</p>

<div className="pais">
<img src="https://flagcdn.com/w40/co.png"/>
<span>Colombia / Español</span>
<a href="#">Cambiar</a>
</div>

</div>

<div className="grid">

<div>

<h4>Ubicación y contacto</h4>

{contacto.map((item,i)=>(
<p key={i}>{item}</p>
))}

</div>

<div>

<h4>Empresa</h4>

{empresa.map((item,i)=>(
<p key={i}>{item}</p>
))}

</div>

<div>

<h4>Porsche en la web</h4>

{web.map((item,i)=>(
<p key={i}>{item}</p>
))}

</div>

</div>

<div className="legal">

<p>© 2026 Porsche Latin America, Inc.</p>

<p>
Indicaciones Legales · Sistema de Denuncia de Irregularidades · Open Source Software Notice · Privacy Policy
</p>

</div>

<div className="logo">
PORSCHE
</div>

</footer>

)

}

export default Footer