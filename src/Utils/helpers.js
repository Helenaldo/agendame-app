const messages = {
  ServerErrorException: 'Algo saiu errado!',
  InvalidAuthenticationException: 'Seu e-mail ou senha estão incorretos!',
  InvalidPasswordResetTokenException: 'Parece que este token está inválido!',
  InvalidTokenException: 'Parece que este token está inválido!',
  UserAlreadyVerifiedException: 'Este usuário já está verificado!',
  UserHasBeenTakenException: 'Este usuário já existe!',
  UserNotFoundException: 'Usuário não encontrado!'


}



export const errorMessage = (code = 'ServerErrorException') => messages[code];
