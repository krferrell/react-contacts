import React from "react";
import "../../index.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const ContactCard = ({
  firstName = "",
  lastName = "",
  phoneNumber = "",
  profilePic = "",
}) => {
  const NameTag = styled.p`
    display: flex;
    justify-content: right;
    text-align: center;
    color: dimgray;
    padding: 10px;
  `;

  const SpecialNameTag = styled(NameTag)`
    font-weight: bold;
  `;

  const Padder = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `;

  const VLine = styled.div`
    border-left: 2px solid dimgray !important;
    z-index: 10px !important;
    margin-top: -8px !important;
    margin-left: -10rem;
    height: 150px !important;
  `;

  return (
    <div className="Father">
      <Padder>
        <Card className="CardDiv">
          <div className="Image">
            <Image
              variant="top"
              src={profilePic}
              alt={`Profile of ${firstName} ${lastName}.`}
              roundedCircle
              width={"150rem"}
            />
          </div>
          <Card.Body className="Body">
            <VLine>
              <p></p>{" "}
            </VLine>
            <SpecialNameTag>
              {firstName} {lastName}
            </SpecialNameTag>
            <NameTag>{phoneNumber}</NameTag>
          </Card.Body>
          <div className="ButtonPosition">
            <Button className="Button"> X </Button>
          </div>
        </Card>
      </Padder>
    </div>
  );
};

export default ContactCard;
