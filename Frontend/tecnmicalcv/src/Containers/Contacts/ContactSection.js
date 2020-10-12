import React, { Component } from 'react'
import axios from 'axios'

export class ContactSection extends Component {

    state = {
        name:"",
        email: "",
        subject: "",
        message: ""
    }
    changeHandler = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submitHandler =(e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post("127.0.0.1:8000/api/contacts/", this.state)
        .then(res =>{
            console.log(res)
        })
        .catch((err) =>{
            console.log(err)
        })

    }
    render() {
        const {name , email, subject, message} = this.state
        return (
            <div class="site-section" id="contact-section">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center mb-5" data-aos="fade-up" data-aos-delay="">
                  <div class="block-heading-1">
                    <span>Get In Touch</span>
                    <h2>Contact Me</h2>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6 mb-5" data-aos="fade-up" data-aos-delay="100">
                  <form action="#" method="post" onSubmit={this.submitHandler}>
                    <div class="form-group row">
                      <div class="col-md-6 mb-4 mb-lg-0">
                        <input type="text" class="form-control" placeholder="Name" name="name" value={name} onChange={this.changeHandler}/>
                      </div>
                      <div class="col-md-6">
                        <input type="text" class="form-control" placeholder="Subject" name="subject" value={subject} onChange={this.changeHandler}/>
                      </div>
                    </div>
      
                    <div class="form-group row">
                      <div class="col-md-12">
                        <input type="text" class="form-control" placeholder="Email address" name="email" value={email} onChange={this.changeHandler}/>
                      </div>
                    </div>
      
                    <div class="form-group row">
                      <div class="col-md-12">
                        <textarea name="" id="" class="form-control" placeholder="Write your message." cols="30" rows="10" name="message" value={message} onChange={this.changeHandler}></textarea>
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-md-6 ml-auto">
                        <button type="submit" class="btn btn-block btn-primary text-white py-3 px-5"> Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              
              </div>
            </div>
          </div>
        )
    }
}

export default ContactSection;
