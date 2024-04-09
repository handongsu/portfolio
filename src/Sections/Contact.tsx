import { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

export const userID = import.meta.env.VITE_EMAILJS_USER_ID;
export const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
export const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactWrapper = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ece6cc;
  border: 1px solid white;
  gap: 20px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  margin: ${(props) => props.theme.marginL} 0;
  padding: ${(props) => props.theme.paddingL};

  label {
    color: black;
  }

  input {
    height: 25px;
    border-radius: 5px;
    border: none;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.marginL};
  font-size: ${({ theme }) => theme.fontXXL};
  font-family: "DNFBitBitv2";

  @media ${({ theme }) => theme.tablet} {
    margin-bottom: ${({ theme }) => theme.marginXXL};
  }
`;

const Input = styled.input`
  padding: ${(props) => props.theme.paddingS};
`;

const Textarea = styled.textarea`
  border: none;
  resize: vertical;
  padding: ${(props) => props.theme.paddingS};
  margin-bottom: ${(props) => props.theme.marginL};
  border-radius: 5px;
`;

const FormButton = styled.button`
  width: 120px;
  line-height: 50px;
  color: #fff;
  border-radius: 5px;
  transition: all 0.2s;
  cursor: pointer;
  background: #275efe;
  box-shadow: 0px 5px 0px 0px #000d54;
  margin: 10px 20px 10px 0;
  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #000d54;
  }
`;

function Contact() {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormInput({ ...formInput, [target.name]: target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs.send(serviceID, templateID, formInput, userID).then(
      (result) => {
        console.log(result.text);
        alert("발송되었습니다.");
        setFormInput({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.log(error.text);
        alert("오류가 발생하였습니다.");
      }
    );
  };

  return (
    <Wrapper>
      <ContactWrapper onSubmit={sendEmail}>
        <Title style={{ color: "black" }}>Contact</Title>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Mail</label>
        <Input
          type="text"
          name="email"
          value={formInput.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message</label>
        <Textarea
          typeof="text"
          name="message"
          value={formInput.message}
          onChange={handleChange}
          required
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormButton>Send</FormButton>
        </div>
      </ContactWrapper>
    </Wrapper>
  );
}

export default Contact;
