import { useRef, useState, React } from "react";
import { Box, Container, Grid } from "@mui/material";
import emailjs from "@emailjs/browser";
import "./contectForm.css";

function ContectForm() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9o2enj4",
        "template_xur8epq",
        formRef.current,
        "_EaloFev53ZB-a6rn"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    e.target.reset();
  };

  return (
    <Box>
      <Container maxWidth="md">
        <Grid m={0} spacing={1}>
          <Grid xs={12} md={6}>
            <form className="form" ref={formRef} onSubmit={handleSubmit}>
              <input
                className="input"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                className="input"
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                className="input"
                type="text"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                className="textarea"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
              <button className="button" type="submit">
                Submit
              </button>
              {done}
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContectForm;
