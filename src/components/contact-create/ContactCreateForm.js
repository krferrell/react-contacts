import React from "react";
import { useState } from "react"
import styled from "styled-components";

const ContactCreateForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNunber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [profilePic, setProfilePic] = useState("");

        return (
            
            <form onSubmit={()=>{console.log("The form has been submitted")}}>
                <Wrapper>
                <div >
                    <Image src={"https://i.pravatar.cc/300?u=4"} alt="Profile preview." />
                </div>
                <Padder>
                   
                    <div>
                        <input
                            type="text"
                            placeholder="First Name"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Last Name"
                            name="lastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={e => setPhoneNunber(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Address"
                            name="address"
                            value={address}
                            onChange={e => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Profile Picture Url"
                            name="profilePic"
                            value={profilePic}
                            onChange={e => setProfilePic(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Add Contact</button>
                    </div>
                </Padder>
            </Wrapper>
            </form>
            
        );
    
}


const Wrapper = styled.div`
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    border-style: solid;
    border-width: 1px;
    border-color: dimgray;

    > div {
        padding: 10px;
        
    }
`

const Image = styled.img`
        border-radius: 50%;
        width: 6rem; c
`


const Padder = styled.div`
    > div {
        padding: 10px;

        > input{
            border-width: 0 0 1px;
        }

        
    }
`


export default ContactCreateForm;