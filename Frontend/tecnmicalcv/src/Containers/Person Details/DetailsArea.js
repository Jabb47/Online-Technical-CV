import React, { Component } from 'react'
import PernalDetails from '../../Components/PersonalDetails/ProfileCard'
import './DetailsArea.css'


class DetailsArea extends Component {

    state ={
        details:{},
        isloaded: false,
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/personal-details/1/')
        .then(res => res.json())
        .then(data=>{
            this.setState({
                details: data,
                isloaded: true,
            })
        })
    }
    formatDateOfBirth = () => {
        let date =  new Date(this.state.details.date_of_birth);
        console.log(date);
        return date;
       
    }
    render() {
        return (
            <section class="personal_details_container"  id="Personal-section">
                <div class="container box_1620">
                    <PernalDetails 
                    photo = {this.state.details.photo}
                    name = {this.state.details.first_names}
                    lastName = {this.state.details.last_name}
                    professions = {this.state.details.professions}
                    dateOfBirth = {this.formatDateOfBirth}
                    cellNo = {this.state.details.phone_number}
                    email = {this.state.details.email}
                   address = "1614 Morkolo Street Boikhutso Location"
                    linkedIn = {this.state.details.linkedIn}
                    fb = {this.state.details.facebook}
                    gitHub = {this.state.details.gitHub}
                    insta = {this.state.details.instagram}
                    twitter = {this.state.details.twitter}
                    />
                </div>
            </section>
        )
    }
}

export default DetailsArea
