import { useState } from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';

const PaginaPrincipal = () => {
  // Estado do nível do usuário
  const [userLevel, setUserLevel] = useState(1);

  // Estado dos pontos do usuário
  const [userPoints, setUserPoints] = useState(0);

  // Função chamada quando o botão 'Participar do Desafio' é clicado
  const handleChallengeClick = () => {
    // Atualiza os pontos do usuário ao participar do desafio
    const updatedPoints = userPoints + 10;
    setUserPoints(updatedPoints);

    // Verifica e atualiza o nível do usuário com base nos pontos
    checkUserLevel(updatedPoints);
  };

  // Função para verificar e atualizar o nível do usuário
  const checkUserLevel = (points) => {
    if (points < 100) {
      setUserLevel(1);
    } else if (points >= 100 && points < 200) {
      setUserLevel(2);
    } else if (points >= 200 && points < 300) {
      setUserLevel(3);
    } else if (points === 300) {
      setUserLevel('Fim do Jogo');
    }
    // Pode adicionar mais condições conforme necessário
  };

  return (
    <Container>
      {/* Título principal */}
      <Typography variant="h1" align="center" gutterBottom>
        Bem-vindo à Plataforma Gamificada!
      </Typography>

      {/* Layout de grade para os elementos da página */}
      <Grid container spacing={3}>
        {/* Seção para exibir o nível e pontos do usuário */}
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h2" align="center">
              Seu Nível: {userLevel}
            </Typography>
            <Typography variant="h4" align="center">
              Pontos: {userPoints}
            </Typography>
          </Paper>
        </Grid>

        {/* Seção para exibir os desafios do dia e botão para participar */}
        <Grid item xs={12} sm={6}>
          <Paper>
            <Typography variant="h2" align="center">
              Desafios do Dia
            </Typography>
            <Button variant="contained" color="primary" onClick={handleChallengeClick}>
              Participar do Desafio
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaginaPrincipal;
