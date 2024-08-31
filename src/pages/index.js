import { Helmet } from 'react-helmet-async';
import {

  Box,
  Container,
  Stack,
  Card,
  Typography,
  TextareaAutosize,
  FormGroup,
  Unstable_Grid2 as Grid,
  Button,
  TextField,

} from '@mui/material';

import { Select } from 'src/components/Select';
import { CheckBox } from 'src/components/CheckBox';

import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';

const now = new Date();

const opciones=['Reclamo externo',' Reclamo interno','Autodetectada','Trabajos no conforme','Análisis de indicadores','auditoria interna/externa','otro'];





const Page = () => {

  const [file, setFile] = useState('');

  const handleFileUpload = ({target}) => {
    file = target.files[0];
    console.log('File selected:', file.name);
    setFile(file.name);
    // Aquí puedes manejar el archivo seleccionado como necesites
  };

  return (
  <>
    <Helmet>
      <title>
        Vistony
      </title>
    </Helmet>

    <Box
      sx={{
        flexGrow: 1,
        py: 4,
        marginLeft:4
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={3}>

          {/*Title*/}
          <div>
            <Typography variant="h5" textAlign='center'>
              INFORME DE NO CONFORMIDAD
            </Typography>
          </div>

          {/*Body */}
          <div>
            <Grid
              container
              spacing={3}
              direction={'column'}
            >
            
            {/*Combobox */}
            <Card sx={{
              display:'flex',
              justifyContent:'space-around',
              paddingLeft:2,
              marginLeft:2,
              marginBottom:1
              }}>

                <Box sx={{display:'flex',alignItems:'center'}}>
                    <p>Tipo de hallazgo :</p>
                    <Select/>
                </Box>
                
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <p>Acción a tomar  :</p>
                <Select/>
                </Box>
                
            </Card>

              {/*Checkbox*/}
              <Card sx={{
                display:'block',
                padding:4,
                marginLeft:2,
                marginBottom:1
              }}>
              <Typography variant="h6">
              Fuente de donde proviene:
            </Typography>
            <Grid2 container spacing={2}>
              
                <FormGroup>
                <Grid size={6}>
                  {
                    opciones.map((opciones,key)=>(
                    <CheckBox key={key} nombre={opciones}/>)
                  )
                  }
                </Grid>
                <Grid size={2} sx={{display:'flex',alignItems: 'center'}}>
                    <div>
                      <p>¿Cuál?</p>
                    </div>
                    <TextField/>
                </Grid>   
                </FormGroup>
            </Grid2>
          
            </Card>
              {/*aaa */}
              <Card sx={{
              display:'block',
              padding:2,
              marginLeft:2,
              border:'1px solid #f5f4f4',
              marginBottom:1
              }}>
              
              <Typography variant="h6" textAlign='left'>Referencia de no conformidad</Typography>
              <Grid2 container spacing={2}>

                <Grid size={6}>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <p>Norma/Requisito :</p>
                    <Select/>
                  </Box>
                </Grid>

                <Grid size={6}>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <p>Procedimiento/instructivo/documento </p>
                    <Select/>
                  </Box>
                </Grid>

                <Grid size={4}>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <p>Área que detecta la no conformidad: </p>
                    <Select/>
                  </Box>
                </Grid>

                <Grid size={8}>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <p>Fecha de respuesta: </p>
                   
                    </Box>
                </Grid>

                <Grid size={6}>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <p>Área que origina la no conformidad: </p>
                    <Select/>
                </Box>
                </Grid>

                </Grid2>
            
            </Card>
            <Card sx={{
              display:'block',
              padding:2,
              marginLeft:2,
              border:'1px solid #f5f4f4',
              marginBottom:1
              }}>
                  <Typography variant="h6" textAlign='left'>Descripción de la no conformidad</Typography>
                  <TextareaAutosize minRows={3} placeholder=" Comentario" />
                </Card>

                <Card sx={{
              display:'block',
              padding:2,
              marginLeft:2,
              border:'1px solid #f5f4f4',
              marginBottom:1
              }}>
              <Typography variant="h6" textAlign='left'>Evidencia objetiva de la no conformidad:</Typography>
              <TextareaAutosize minRows={3} placeholder=" Comentario">{file}</TextareaAutosize>
                </Card>
                  <Button variant="contained" component="label" sx={{width:200}}>
                  Adjuntar evidencia
                <input type="file" hidden onChange={handleFileUpload}/>
                </Button>
              
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);
};

export default Page;
