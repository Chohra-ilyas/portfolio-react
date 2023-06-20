import "./style.css"
function Portfolio(){
    return(
        <>
        <nav>
            <a href="" id="logo">Ilyas Portfolio</a>
            <ul>
                <li><a href="">About Me</a></li>
                <li><a href="">Project</a></li>
                <li><a href="">languages</a></li>
                <li><a href="">Contact Me</a></li>
            </ul>
        </nav>
        <section id="About-Me">
            <div class="left">
                <p>Hello My Name is</p>
                <p><h1>Ilyas Chohra</h1><span>21 years old i will be a web devloper,designer,frontend devloper....</span></p>
            </div>
            <div className="right">
                <img src="./src/assets/Developer activity-pana.png" alt="" />
            </div>
        </section>
        <section id="project">
            <h2>My Project</h2>
            <div className="proj">
                <a href="https://chohra-ilyas.github.io/Newsletter_sign-up_form_with_success_message/"><img src="./src/assets/Screenshot 2023-06-20 165231.png" alt="" /></a>
                <a href=""><img src="./src/assets/Screenshot 2023-06-20 165323.png" alt="" /></a>
                <a href=""><img src="./src/assets/Screenshot 2023-06-20 165359.png" alt="" /></a>
                <a href="https://chohra-ilyas.github.io/Sunnyside-agency-landing-page/"><img src="./src/assets/Screenshot 2023-06-20 165437.png" alt="" /></a>
            </div>
            <h2>languages</h2>
            <div className="lang">
                <a href=""><img src="./src/assets/c-.png" alt="" /></a>
                <a href=""><img src="./src/assets/css-3.png" alt="" /></a>
                <a href=""><img src="./src/assets/html-5.png" alt="" /></a>
                <a href=""><img src="./src/assets/js.png" alt="" /></a>
                <a href=""><img src="./src/assets/letter-c.png" alt="" /></a>
                <a href=""><img src="./src/assets/structure.png" alt="" /></a>
            </div>
        </section>
        <footer>
            <h2>Contact Me</h2>
            <div className="contact">
                <div className="icon fb">
                    <i className="fa-brands fa-facebook-f"></i> 
                    <a href="https://www.facebook.com/ilyas.chohra.5">Facebook</a> 
                </div>
                <div className="icon inst">
                    <i class="fa-brands fa-instagram"></i> 
                    <a href="https://www.instagram.com/ilyasch02/">Instagram</a> 
                </div>
                <div className="icon git">
                    <i className="fa-brands fa-github"></i> 
                    <a href="https://github.com/Chohra-ilyas">github</a> 
                </div>  
            </div>
            
        </footer>
        </>
    );
    
}
export default Portfolio;