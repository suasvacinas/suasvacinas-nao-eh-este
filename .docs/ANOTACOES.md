# Anotações em geral

### TSLINT

`Antonio`> Pessoas, fiz alguns ajustes no linter de TS. Ajustei algumas regras pra o meu gosto. Caso não gostem da configuração de alguma regra, fiquem aa vontade para mudar (ou conversar em caso de conflitos)!

### Como gerar o token para deploy do firebase no CI?

```shell
firebase login:ci
```

Nao precisam se preocupar com isso, coloquei aqui só pra lembrar como fazer. Estamos este token no circle-ci, para fazer o deploy a cada commit.
