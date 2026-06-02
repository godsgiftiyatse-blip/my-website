html{
    scroll-behavior:smooth;
}

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:Arial, sans-serif;
}

body{
    background:#f4f6f9;
    color:#333;
    line-height:1.6;
}

/* Navigation */

nav{
    position:fixed;
    top:0;
    width:100%;
    background:#0f172a;
    padding:15px 8%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    z-index:1000;
    box-shadow:0 2px 10px rgba(0,0,0,.1);
}

.logo{
    color:#fff;
    font-size:1.5rem;
    font-weight:bold;
}

nav ul{
    display:flex;
    list-style:none;
}

nav ul li{
    margin-left:20px;
}

nav ul li a{
    color:#fff;
    text-decoration:none;
    transition:0.3s;
}

nav ul li a:hover{
    color:#38bdf8;
}

/* Hero Section */

.hero{
    min-height:100vh;
    background:linear-gradient(135deg,#0f172a,#1e293b);
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color:#fff;
    padding:20px;
}

.hero-content{
    max-width:800px;
}

.hero img{
    width:180px;
    height:180px;
    border-radius:50%;
    object-fit:cover;
    border:5px solid #fff;
    margin-bottom:20px;
}

.hero h1{
    font-size:3rem;
    margin-bottom:10px;
}

.hero h2{
    color:#38bdf8;
    margin-bottom:15px;
}

.hero p{
    font-size:1.1rem;
    margin-bottom:25px;
}

/* Buttons */

.btn{
    display:inline-block;
    padding:12px 25px;
    border-radius:8px;
    text-decoration:none;
    transition:.3s;
    margin:5px;
}

.btn-primary{
    background:#38bdf8;
    color:white;
}

.btn-secondary{
    border:2px solid white;
    color:white;
}

.btn:hover{
    transform:translateY(-3px);
}

/* Sections */

section{
    padding:100px 10%;
}

.section-title{
    text-align:center;
    font-size:2.2rem;
    margin-bottom:40px;
    color:#0f172a;
}

/* About */

.about{
    text-align:center;
    max-width:800px;
    margin:auto;
}

/* Skills */

.skills-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
    gap:20px;
}

.skill-card{
    background:#fff;
    padding:20px;
    text-align:center;
    border-radius:12px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.skill-card:hover{
    transform:translateY(-5px);
}

/* Projects */

.projects-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:20px;
}

.project-card{
    background:#fff;
    padding:25px;
    border-radius:12px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.project-card:hover{
    transform:translateY(-5px);
}

.project-card h3{
    margin-bottom:10px;
}

/* Services */

.services-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:20px;
}

.service-card{
    background:#fff;
    padding:25px;
    text-align:center;
    border-radius:12px;
    box-shadow:0 5px 15px rgba(0,0,0,.1);
    transition:.3s;
}

.service-card:hover{
    transform:translateY(-5px);
}

/* Contact */

.contact{
    text-align:center;
}

.contact p{
    margin:10px 0;
}

.contact a{
    color:#0ea5e9;
    text-decoration:none;
}

.contact a:hover{
    text-decoration:underline;
}

/* Footer */

footer{
    background:#0f172a;
    color:white;
    text-align:center;
    padding:20px;
}

/* Mobile */

@media(max-width:768px){

    nav{
        flex-direction:column;
        padding:15px;
    }

    nav ul{
        margin-top:10px;
        flex-wrap:wrap;
        justify-content:center;
    }

    nav ul li{
        margin:8px;
    }

    .hero h1{
        font-size:2rem;
    }

    .hero h2{
        font-size:1.1rem;
    }

    section{
        padding:80px 5%;
    }
      }
