# Sistema Financeiro Itaú - Front-end Responsivo

Interface web responsiva de um sistema financeiro inspirada na identidade visual do Itaú. O projeto foi desenvolvido para a atividade prática da Proz Educação sobre o ciclo de vida e a qualidade de software.

> Este projeto é uma simulação front-end. Não existe comunicação com banco, API, serviço de pagamentos ou autenticação real.

## Funcionalidades

- Login com validação de nome, e-mail e senha forte.
- Cadastro de usuário com confirmação de senha.
- Visualização e ocultação de senha com ícone de olho.
- Recuperação de senha com mensagem de instruções.
- Dashboard com saldo, cartão, Poupança e movimentações.
- Ocultação do saldo na tela inicial.
- Extrato com filtros de período e tipo de movimentação.
- Pagamento de contas com confirmação.
- Pix com validação e confirmação da operação.
- Central de configurações com edição de dados, segurança, notificações, privacidade e sessão.
- Menu geral com acesso rápido aos serviços da conta.
- Preferências e dados do usuário armazenados no `localStorage` do navegador.
- Layout responsivo para desktop, tablet e celular.

## Documentação de testes

A documentação dos testes da segunda página, considerando o dashboard `painel.html`, está disponível em [DOCUMENTACAO-TESTES-PAINEL.md](DOCUMENTACAO-TESTES-PAINEL.md). O documento registra testes de caixa preta, caixa branca, problemas encontrados, correções e retestes.

## Páginas

| Arquivo | Descrição |
| --- | --- |
| [index.html](index.html) | Login e acesso ao sistema |
| [Criar-Conta.html](Criar-Conta.html) | Criação de uma nova conta simulada |
| [recuperar-senha.html](recuperar-senha.html) | Recuperação de senha |
| [painel.html](painel.html) | Dashboard principal da conta |
| [configuração.html](configuração.html) | Perfil, segurança, preferências e sessão |
| [menu.html](menu.html) | Menu geral de serviços |
| [extrato.html](extrato.html) | Filtros e histórico de movimentações |
| [cartoes.html](cartoes.html) | Área exclusiva de cartões e faturas |
| [pix.html](pix.html) | Formulário de pagamento via Pix |
| [pagar.html](pagar.html) | Pagamento de contas e boletos |

## Organização dos arquivos

- `style.css`: estilos das telas de login, cadastro e recuperação.
- `operacoes.css`: estilos compartilhados pelas telas de operações.
- `operacoes.js`: validações e confirmação de Pix e pagamentos.
- `script.js`: validação do login e armazenamento dos dados do usuário.
- `itau1.png` e `itau2.png`: imagens usadas na animação da marca.
- `ITAU_LOGO.webp`: favicon exibido na aba do navegador.

## Tecnologias e recursos

- HTML5 semântico.
- CSS3, Grid, Flexbox, animações e media queries.
- JavaScript puro, sem framework de aplicação.
- Bootstrap 5 incluído no login.
- Font Awesome 6 para os ícones da interface.
- `localStorage` para persistência local durante a simulação.

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/EuErickDev/Atividade-Pr-tica---Desenvolvimento-e-Qualidade-de-Software6
   ```

2. Abra a pasta do projeto no VS Code.
3. Abra o arquivo [index.html](index.html) no navegador ou use uma extensão como Live Server.
4. Faça o cadastro ou informe os dados no login para acessar o [painel.html](painel.html).

Não é necessário instalar dependências ou iniciar um servidor back-end. Bootstrap e Font Awesome são carregados por CDN e precisam de conexão com a internet.

## Fluxo principal

```text
Login
  |-- Criar conta -> Cadastro -> Login
  |-- Esqueci a senha -> Recuperação -> Login
  `-- Acessar -> Painel
                    |-- Configurações
                    |-- Extrato
                    |-- Pix
                    `-- Pagamentos
```

## Qualidade e limitações

- Os formulários usam validações nativas do HTML e validações JavaScript específicas.
- Os controles principais possuem rótulos, estados de foco e suporte básico a teclado.
- As páginas foram estruturadas para diferentes larguras de tela.
- Os dados ficam apenas no navegador e podem ser apagados ao limpar o armazenamento local.
- Valores, transações e confirmações são demonstrativos e não representam operações financeiras reais.
