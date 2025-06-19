import React from 'react';
import './skills.css';
import CSharp from '../../assets/c-sharp.png';
import Dotnet from '../../assets/dotnet.png';
import Asp from '../../assets/dotnet2.png';
import Reactjs from '../../assets/react1.png';
import Db from '../../assets/database1.png';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a full-stack developer skilled in .NET and React.js, focused on building scalable and intuitive web applications. I bring expertise in both backend architecture and responsive frontend development to deliver seamless user experiences.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={CSharp} alt="CSharp" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>C#</h2>
                        <p>I am proficient in C#, leveraging its object-oriented capabilities to build robust, maintainable, and high-performance backend solutions.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Dotnet} alt="Dotnet" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>.Net Core</h2>
                        <p>I specialize in .NET Core, developing scalable and high-performance web APIs and backend services for modern web applications.   </p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Asp} alt="Asp" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Asp .Net MVC</h2>
                        <p>I have strong expertise in ASP.NET MVC, creating structured, maintainable web applications using the Model-View-Controller design pattern.</p>
                    </div>
                </div>
                
                <div className="skillBar">
                    <img src={Reactjs} alt="ReactJs" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>React Js</h2>
                        <p>I develop dynamic and responsive user interfaces using React.js, with a focus on component-based architecture and seamless user experience.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={Db} alt="Database" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Oracle</h2>
                        <p>I work confidently with Oracle Database, writing efficient SQL queries, stored procedures, and managing data operations for enterprise applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;