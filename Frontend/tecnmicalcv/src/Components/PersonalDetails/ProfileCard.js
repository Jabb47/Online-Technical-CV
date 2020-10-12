import React from 'react';
import './ProfileCard.css';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import HomeIcon from '@material-ui/icons/Home';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Photo from '../../assets/me.jpg'

function ProfileCard(props) {
    return (
        <div className="banner_inner d-flex align-items-center">
                        <div className="banner_content">
                            <div className="media">
                                <div className="col-lg-5 col-sm-12 d-flex">
                                    <img src={{Photo}} alt="Picture of Me!"/>
                                </div>
                                <div className="media-body">
                                    <div className="col-lg-7 col-sm-12 personal_text">
                                        <h6>Hello Everybody, I am</h6>
                                        <h3>{props.name} {props.lastName}</h3>
                                        <h4>{props.professions}</h4>
                                        <p></p>
                                        <ul className="list basic_info">
                                            <li><a href="#"><CalendarTodayIcon/> {props.dateOfBirth}</a></li>
                                            <li><a href="#"><CallIcon/> {props.cellNo}</a></li>
                                            <li><a href="#"><EmailIcon/> {props.email}</a></li>
                                            <li><a href="#"><HomeIcon/> {props.address}</a></li>
                                        </ul>
                                        <ul className="list personal_social">
                                            <li><a href={props.linkedIn}><LinkedInIcon/></a></li>
                                            <li><a href={props.gitHub}><GitHubIcon/></a></li>
                                            <li><a href={props.fb}><FacebookIcon/></a></li>
                                            <li><a href={props.insta}><InstagramIcon/></a></li>
                                            <li><a href={props.twitter}><TwitterIcon/></a></li>
                                            
                                         
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
        </div>
    )
}
export default ProfileCard;