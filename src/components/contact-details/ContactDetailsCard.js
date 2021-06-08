import styled from 'styled-components';

const  ContactDetailsCard = ({ contact }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <Wrapper>
            <div>
                <img src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div>
                <p>{contact?.firstName} {contact?.lastName}</p>
                <dl>
                    <dt>Phone Number</dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd>{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
        </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    margin-top: 5rem;
    background-color: #fff;
    padding: 45px 150px;
    box-Shadow: 2px 2px 10px gray;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 40%;

    > div {
        padding: 10px;

        > img {
            border-radius: 50%;
            width: 8rem;
        }

        > p {
            font-size: 1.5rem;
        }

        > dl > dt {
            text-align: left;
            margin-left: 6rem;
        }
        > dl > dd {
            text-align: left;
            margin-left: 8rem;
        }
    }
`


export default ContactDetailsCard;