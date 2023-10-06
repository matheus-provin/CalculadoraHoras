import React, { useState, useReducer } from "react";
import {
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import "./app.css";

function App() {
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [pessimista, setPessimista] = useState("");
  const [otimista, setOtimista] = useState("");
  const [realista, setRealista] = useState("");
  const [resultado, setResultado] = useState("");
  const [clicou, setClicou] = useState(false);

  const calcular = () => {
    if (otimista !== "" && realista !== "" && pessimista !== "") {
      const otimistaValue = parseFloat(otimista);
      const realistaValue = parseFloat(realista);
      const pessimistaValue = parseFloat(pessimista);
      const calculoBruto =
        (otimistaValue + 4 * realistaValue + pessimistaValue) / 6;
      const calculo = Math.ceil(calculoBruto);

      setResultado(calculo);
      setMostrarResultado(true);
    } else {
    }
  };

  return (
    <Container fullWidth>
      <Container
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "1000px",
          textAlign: "center",
        }}
      >
        <Grid container justifyContent={"center"} marginTop={"20%"}>
          <Grid item xs={3}>
            <TextField
              color="success"
              label="Otimista"
              size="normal"
              onChange={(e) => setOtimista(e.target.value)}
            />
            <TextField
              color="primary"
              label="Realista"
              size="normal"
              onChange={(e) => setRealista(e.target.value)}
            />
            <TextField
              color="error"
              label="Pessimista"
              size="normal"
              onChange={(e) => setPessimista(e.target.value)}
            />
            <Button
              size="normal"
              variant="outlined"
              onClick={() => {
                setClicou(true);
                calcular();
              }}
            >
              Calcular
            </Button>
          </Grid>
          <Grid spacing={5} >
            {mostrarResultado ? (
              <Typography variant="h2" style={{ }}>
                {resultado}
              </Typography>
            ) : (
              <></>
            )}
          </Grid>
        </Grid>
        <Grid marginTop={"20px"}>
          {clicou && !mostrarResultado ? (
            <Alert
              variant="outlined"
              severity="error"
              style={{ color: "black" }}
            >
              Preencha todos os campos!
            </Alert>
          ) : (
            <></>
          )}
        </Grid>
      </Container>
    </Container>
  );
}

export default App;
