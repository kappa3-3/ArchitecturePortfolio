import React, {Component} from "react";
import './style.scss';


import IconBamboo from "../../assets/icons/IconBamboo";
import IconDubai from "../../assets/icons/IconDubai";
import IconHouse from "../../assets/icons/IconHouse";

const Skills = () => (
    <>
        <div className='skills graphic-software'>
            <table>
                <thead>
                <tr>
                </tr>
                <tr>
                    <th className="table-title">GRAPHIC SOFTWARE</th>
                    <th className="table-subtitle">BEGINNER</th>
                    <th className="table-subtitle">ELEMENTARY</th>
                    <th className="table-subtitle">INTERMEDIATE</th>
                    <th className="table-subtitle">ADVANCED</th>
                    <th className="table-subtitle">EXPERT</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <th className='certain-skill'> PHOTOSHOP</th>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                </tr>
                <tr>
                    <th className='certain-skill'> ILLUSTRATOR</th>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                </tr>
                <tr>
                    <th className='certain-skill'> IN-DESIGN</th>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td><IconBamboo className='skills-indicator-bamboo'/></td>
                    <td></td>
                </tr>

                </tbody>
            </table>
        </div>
        <div className='skills soft-skills'>
            <table>
                <thead>
                <tr>

                </tr>
                <tr>
                    <th className="table-title">SOFT SKILLS</th>
                    <th className="table-subtitle">BEGINNER</th>
                    <th className="table-subtitle">ELEMENTARY</th>
                    <th className="table-subtitle">INTERMEDIATE</th>
                    <th className="table-subtitle">ADVANCED</th>
                    <th className="table-subtitle">EXPERT</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                <th className='certain-skill'> COMMUNICATION</th>
                <td><IconDubai className='skills-indicator-dubai'/></td>
                <td><IconDubai className='skills-indicator-dubai'/></td>
                <td><IconDubai className='skills-indicator-dubai'/></td>
                <td><IconDubai className='skills-indicator-dubai'/></td>
                <td></td>
                </tr>
                {/*<tr>*/}
                {/*    <th className='certain-skill'> COMMUNICATION</th>*/}
                {/*    <td className='skill-advanced'/>*/}
                {/*    <td className='skill-advanced'/>*/}
                {/*    <td className='skill-advanced'/>*/}
                {/*    <td className='skill-advanced'/>*/}
                {/*</tr>*/}
                <tr>
                    <th className='certain-skill'> COOPERATION</th>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td></td>
                </tr>
                <tr>
                    <th className='certain-skill'> INDIVIDUALITY</th>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th className='certain-skill'> INITIATIVE</th>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>

                </tr>
                <tr>
                    <th className='certain-skill'> FOCUS</th>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td><IconDubai className='skills-indicator-dubai'/></td>
                    <td></td>
                </tr>

                </tbody>
            </table>
        </div>
        <div className='skills scripting'>
            <table>
                <thead>
                <tr>

                </tr>
                <tr>
                    <th className="table-title">SCRIPTING & PROGRAMING</th>
                    <th className="table-subtitle">BEGINNER</th>
                    <th className="table-subtitle">ELEMENTARY</th>
                    <th className="table-subtitle">INTERMEDIATE</th>
                    <th className="table-subtitle">ADVANCED</th>
                    <th className="table-subtitle">EXPERT</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <th className='certain-skill'> HTML</th>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td/>
                </tr>
                <tr>
                    <th className='certain-skill'> CSS</th>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td/>
                </tr>
                <tr>
                    <th className='certain-skill'> JS</th>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td/>
                    <td/>
                </tr>
                <tr>
                    <th className='certain-skill'> REACT</th>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td/>
                    <td/>
                </tr>
                <tr>
                    <th className='certain-skill'> JQUERY</th>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td><IconHouse className='skills-indicator-house'/></td>
                    <td/>
                    <td/>
                    <td/>

                </tr>

                </tbody>
            </table>
        </div>
    </>
);


export default Skills;