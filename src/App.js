import logo from './logo.svg';
// import './App.css';
import './style.css';
import home1 from './home1.jpg';
function App() {
  return (
    <div>
      <header className="header">
    <a  href="#" className="logo">SB</a>

    <nav className="navbar">
        <a href="#Home" className="active">Home <spam></spam></a>
        <a href="#about">About<spam></spam></a>
        <a href="#Education">Education <spam></spam></a>
        <a href="#skills">skills<spam></spam></a>
        <a href="#contact">Contact <spam></spam></a>
        </nav>
</header>
<section className ="home" id="home">
    <div className ="home-content">
        <h1> Hi , I'm <spam>suraj bhandwalkar</spam></h1>
        <div className="text-animate">
        <br/>
        <h3> frontend & backend devloper</h3>
        </div>
        <p> hello i am a serchin a job in frontend as well as backend devloper 
            in pune city i complited my graduation in savitri bai phule university
            so i hope you invite me in interviwe.
        </p>
        
        <div className="btn-box">
        <a href="#"className="btn">hired me</a>
         <a href="#" className="btn">let's talk</a>
        </div>    
    </div>
    <div className="home-sci">
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <a href="#"><i className='bx bxl-instagram' ></i></a>
        <a href="#"><i className='bx bxl-github' ></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
    </div>
    {/* <!-- <span className="home-imgHover"></span> --> */}
</section>




<section className="about" id="about">
    <h2 className="heading">about<span>me</span></h2>

    <div className="about-img">
        <img src={home1}alt=""/>
        <span className="circle-spin"></span>
    </div>

        <div className="about-content">
            <h3>frontend & backend devloper</h3>
            <p> hi everyone my name is suraj i am from pune i searching the job in 
                full stack web devlopment in front end as well as backend devloper.1  </p>
                <div className="btn-box btns">
                <a href="#" className="btn">Read more</a>
            </div>
        </div>
</section>

    <section className="Education" id="Education">
            <h4 className="heading">my<span>journey</span></h4>

            <div className="Education-row">
                <div className="Education-column">
                    <h3 className="title">Education</h3>

                    <div className="Education-box">
                        <div className="Education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i>2022-2023</div>
                                <h3>master degree - university</h3>
                                    <p>hello i am a serchin a job in frontend as well as backend devloper 
                                        in pune city i complited my graduation in savitri bai phule university
                                        so i hope you invite me in interviwe.</p>
                            </div>
                    </div>                   
                    <div className="Education-content">
                        <div className="content">
                            <div className="year"><i className='bx bxs-calendar'></i>2017-2020</div>
                            <h3>bactchler degree - university</h3>
                                <p>hello i am a serchin a job in frontend as well as backend devloper 
                                    in pune city i complited my graduation in savitri bai phule university
                                    so i hope you invite me in interviwe.</p>
                        </div>
                </div>                   
                <div className="Education-content">
                    <div  className="content">
                        <div className="year"><i className='bx bxs-calendar'></i>2015-2017</div>
                         <h3>HSC - university</h3>
                             <p>hello i am a serchin a job in frontend as well as backend devloper 
                                in pune city i complited my graduation in savitri bai phule university
                                so i hope you invite me in interviwe.</p>
            </div>
    </div>                   
</div>
</div>
</div>
</section>

{/* <!-- skill section design --> */}

<section className="skills" id="skills">
    <h2 className="heading">my <span>skill</span></h2>

    <div className="skills-row"/>
        <div className="skills-column"/>
            <h3 className="title">coding skill</h3>

            <div className="skills-box"/>
                <div className="skills-content"/>
                    <div className="progrss">
                        <h3>HTML<span>90%</span></h3>
                        <div className="bart"><span></span></div>
                    </div>
                

                            <div className="skills-box"/>
                                <div className="skills-content"/>
                                    <div className="progrss">
                                        <h3>CSS<span>80%</span></h3>
                                        <div className="bart"><span></span></div>
                                    </div>
                                    <div className="skills-box">
                                        <div className="skills-content">
                                            <div className="progrss">
                                                <h3>JAVASCRIPT<span>65%</span></h3>
                                                <div className="bart"><span></span></div>
                                            </div>

                                            <div className="skills-box">
                                                <div className="skills-content">
                                                    <div className="progrss">
                                                        <h3>REACT<span>60%</span></h3>
                                                        <div className="bart"><span></span></div>
                                                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        {/* <!-- contact section design --> */}
        <section className="contact" id="contact">
            <h2 className="heading">contact<span>me!</span></h2>

            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="full name" required/>
                        <span className="focus"></span>
                    </div>
                </div>
                    <div className="input-field">
                        <input type="text" placeholder="email address" required/>
                        <span className="focus"></span>
                    </div>
                
               


                
                    <div className="input-field">
                        <input type="number" placeholder="mobile number" required/>
                        <span className="focus"></span>
                    </div>
               
                    <div className="input-field">
                        <input type="text" placeholder="email subject" required/>
                        <span className="focus"></span>
                    </div>
               
               
                <div className="textarea-field">
                    <textarea name="" id="" cols="30" rows="10"placeholder="your message" required></textarea>
                    <span className="focus"></span>
                </div>

                <div className="btn-box btns">
                    <button type="submit"className="btn">submit</button>
                </div>
               
            </form>

        </section>

</div>
  );
}

export default App;
