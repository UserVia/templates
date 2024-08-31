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

const now = new Date();

const opciones=['Reclamo externo',' Reclamo interno','Autodetectada','Trabajos no conforme','Análisis de indicadores','auditoria interna/externa','otro'];



  const handleFileUpload = ({target}) => {
    const file = target.files[0];
    console.log('File selected:', file);
    // Aquí puedes manejar el archivo seleccionado como necesites
  };

const Page = () => (
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
                </Card>
                  <Button variant="contained" component="label" sx={{width:200}}>
                  Adjuntar evidencia
                <input type="file" hidden onChange={handleFileUpload}/>
                </Button>
                {/*  <Grid xs={12}>
                <OverviewKpi
                  chartSeries={[
                    {
                      data: [0, 20, 40, 30, 30, 44, 90],
                      name: 'Revenue'
                    }
                  ]}
                  stats={[
                    {
                      label: 'Revenue',
                      value: '$4,800.00'
                    },
                    {
                      label: 'NET',
                      value: '$4,900,24'
                    },
                    {
                      label: 'Pending orders',
                      value: '$1,600.50'
                    },
                    {
                      label: 'Due',
                      value: '$6,900.10'
                    },
                    {
                      label: 'Overdue',
                      value: '$6,500.80'
                    }
                  ]}
                />
              </Grid>


              <Grid xs={12}>
                <OverviewLatestCustomers
                  customers={[
                    {
                      id: 'a105ac46530704806ca58ede',
                      amountSpent: 684.45,
                      avatar: '/assets/avatars/avatar-fabiano-jorioz.jpg',
                      createdAt: subDays(subHours(subMinutes(now, 7), 3), 2).getTime(),
                      isOnboarded: true,
                      name: 'Fabiano Jorioz',
                      orders: 2
                    },
                    {
                      id: '126ed71fc9cbfabc601c56c5',
                      amountSpent: 0,
                      avatar: '/assets/avatars/avatar-meggie-heinonen.jpg',
                      createdAt: subDays(subHours(subMinutes(now, 7), 3), 2).getTime(),
                      isOnboarded: false,
                      name: 'Meggie Heinonen',
                      orders: 0
                    },
                    {
                      id: 'aafaeb0545357922aff32a7b',
                      amountSpent: 32.25,
                      avatar: '/assets/avatars/avatar-sean-picott.jpg',
                      createdAt: subDays(subHours(subMinutes(now, 11), 2), 3).getTime(),
                      isOnboarded: true,
                      name: 'Sean Picott',
                      orders: 1
                    },
                    {
                      id: '16b526d9e0fefe53f7eba66b',
                      amountSpent: 0,
                      avatar: '/assets/avatars/avatar-bell-covely.jpg',
                      createdAt: subDays(subHours(subMinutes(now, 18), 9), 5).getTime(),
                      isOnboarded: true,
                      name: 'Bell Covely',
                      orders: 0
                    },
                    {
                      id: 'fe035356923629912236d9a2',
                      amountSpent: 125.70,
                      avatar: '/assets/avatars/avatar-giraud-lamlin.jpg',
                      createdAt: subDays(subHours(subMinutes(now, 19), 18), 7).getTime(),
                      isOnboarded: false,
                      name: 'Giraud Lamlin',
                      orders: 1
                    }
                  ]}
                />
              </Grid> */}
            </Grid>
          </div>
        </Stack>
      </Container>
    </Box>
  </>
);

export default Page;
