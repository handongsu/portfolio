import styled from "styled-components";

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
  /* align-items: center; */
  border: 1px solid white;
  gap: 20px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  margin: ${(props) => props.theme.marginL} 0;
  padding: ${(props) => props.theme.paddingL};

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
  return (
    <Wrapper>
      <Title>Contact</Title>
      <ContactWrapper>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" required />
        <label htmlFor="email">Mail</label>
        <input type="text" name="email" required />
        <label htmlFor="message">Message</label>
        <Textarea typeof="text" name="message" required />
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
