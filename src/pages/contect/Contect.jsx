import { useRef, useState, React } from "react";
import emailjs from "@emailjs/browser";
import "./contect.css";
import { Box, Grid } from "@mui/material";
import { Container } from "react-bootstrap";
import ContectForm from "../../components/contectForm/ContectForm";

function Contect() {
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
    <Box mt={9}>
      <ContectForm />
      <div className="i">
        <Container>
          <div>
            <h2 className="h2">İletişim Bilgileri</h2>
            <Grid container spacing={2}>
              <Grid xs={6}>
                <iframe
                  className="iframe"
                  src="https://www.youtube.com/embed/93nY4__dRcs"
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  title="video"
                />
              </Grid>
              <Grid xs={6}>
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
          </div>
        </Container>
      </div>
    </Box>
  );
}

export default Contect;
