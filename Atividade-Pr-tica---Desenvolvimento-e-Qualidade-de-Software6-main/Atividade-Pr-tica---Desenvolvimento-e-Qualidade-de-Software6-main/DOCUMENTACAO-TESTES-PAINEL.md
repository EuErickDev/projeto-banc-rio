# Documentação de Testes - Segunda Página

## 1. Identificação

**Nome do sistema:** Sistema Financeiro Itaú - Front-end Responsivo
**Página testada:** `painel.html` - Dashboard principal
**Desenvolvedor(es):** Erick Felipe, Talita Cristina, Polyana Bernades
**Data:** 25/08/2026

## 2. Objetivo

Registrar os testes realizados no dashboard principal para verificar se a página apresenta o comportamento esperado, se os links funcionam, se os componentes respondem às interações do usuário e se o layout permanece adequado em diferentes tamanhos de tela.

Foram realizados testes de caixa preta, observando a página como usuário, e testes de caixa branca, analisando a estrutura HTML, os estilos CSS e a lógica JavaScript.

## 3. Funcionalidades a serem testadas

| ID | Funcionalidade | Resultado esperado |
| --- | --- | --- |
| F01 | Exibição do saldo da conta corrente | O saldo deve aparecer no bloco de conta corrente. |
| F02 | Ocultar e mostrar saldo | O botão de olho deve alternar entre saldo visível e oculto. |
| F03 | Atalhos bancários | Pix, Poupança, Pagar, Extrato, Cartões, Central Pix, iToken e Ajuda devem responder ao clique. |
| F04 | Navegação inferior | Casa, Extrato, Pagamentos, Pra você e Menu devem levar aos destinos corretos. |
| F05 | Área de cartão de crédito | A seção de cartões deve aparecer separada da conta corrente. |
| F06 | Atualização do usuário | Nome e e-mail salvos devem aparecer no cabeçalho e no cartão. |
| F07 | Responsividade | A página deve se adaptar a celulares, tablets e computadores sem rolagem horizontal. |
| F08 | Configurações e logout | O ícone de configurações deve abrir a área correta e o logout deve retornar ao login. |

## 4. Teste de Caixa Preta

| ID | Ação/Entrada | Resultado esperado | Resultado obtido | Status |
| --- | --- | --- | --- | --- |
| T01 | Abrir `painel.html` com usuário salvo | Dashboard carregado com nome, e-mail e saldo | Dashboard carregado corretamente | APROVADO |
| T02 | Clicar no ícone de olho do saldo | Saldo ocultado com `••••••` | Saldo alternou corretamente | APROVADO |
| T03 | Clicar novamente no olho | Saldo real exibido novamente | Saldo voltou a aparecer | APROVADO |
| T04 | Clicar em Extrato na barra inferior | Abrir `extrato.html` | Página do extrato abriu | APROVADO |
| T05 | Clicar em Pagamentos na barra inferior | Abrir `pagar.html` | Página de pagamentos abriu com CSS | APROVADO |
| T06 | Clicar em Cartões nos atalhos | Abrir `cartoes.html` | Página exclusiva de cartões abriu | APROVADO |
| T07 | Clicar em Menu na barra inferior | Abrir `menu.html` | Menu abriu com os serviços | APROVADO |
| T08 | Testar a largura de 390px | Layout mobile sem rolagem horizontal | `scrollWidth` igual à largura da tela | APROVADO |
| T09 | Testar as larguras de 375px, 768px, 1024px e 1440px | Layout adaptado em cada largura | Não foi detectado overflow horizontal | APROVADO |
| T10 | Clicar no ícone de configurações | Abrir configurações da conta | Redirecionamento para `configuração.html` | APROVADO |

## 5. Teste de Caixa Branca

### Trechos analisados

#### A. Controle do saldo

```javascript
function toggleBalance() {
  const balanceAmount = document.getElementById('balanceAmount');
  const eye = document.getElementById('balanceEye');

  if (balanceVisible) {
    balanceAmount.textContent = '••••••';
    eye.classList.remove('fa-eye');
    eye.classList.add('fa-eye-slash');
  } else {
    balanceAmount.textContent = '2.847,50';
    eye.classList.remove('fa-eye-slash');
    eye.classList.add('fa-eye');
  }

  balanceVisible = !balanceVisible;
}
```

**O que esse trecho faz?**
Verifica o estado atual do saldo, altera o texto para ocultar ou exibir o valor e troca o ícone de olho para indicar o estado atual.

#### B. Navegação dos atalhos

```html
<a href="extrato.html">Extrato</a>
<a href="cartoes.html">Cartões</a>
<a href="menu.html">Menu</a>
```

**O que esse trecho faz?**
Cada link direciona o usuário para uma página específica do sistema.

#### C. Responsividade

```css
@media (max-width: 800px) {
  .mobile-bottom-nav {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
}
```

**O que esse trecho faz?**
Ativa a barra inferior e organiza seus cinco itens em colunas quando a tela possui largura menor ou igual a 800 pixels.

### Situações testadas

- Saldo visível.
- Saldo oculto.
- Cliques nos atalhos.
- Navegação para páginas internas.
- Exibição da barra inferior no mobile.
- Ausência de rolagem horizontal.
- Abertura da página em desktop.

**Você testou todas essas situações?**
[x] Sim, testei todas as situações descritas.

**Você encontrou algum erro na lógica do código?**
[x] Não encontrei erro bloqueante na lógica do painel após as correções.

## 6. Registro de Problemas

| ID | Problema encontrado | Causa identificada | Correção realizada |
| --- | --- | --- | --- |
| BUG01 | Barra inferior não aparecia nas páginas internas | O componente existia apenas no painel | A barra foi adicionada às páginas do sistema. |
| BUG02 | Extrato e Pagamentos não eram acessados corretamente pela barra | Links apontavam para âncoras ou estavam sem destino adequado | Os links foram alterados para abrir os arquivos correspondentes. |
| BUG03 | Página de Pagamentos aparecia sem estilo | O `operacoes.css` possuía regras duplicadas e declarações fora dos seletores | O CSS foi reorganizado e corrigido. |
| BUG04 | Não existia uma aba exclusiva para cartões | Cartões estavam apenas dentro do painel | Foi criado o arquivo `cartoes.html` e adicionada a navegação. |
| BUG05 | O layout mobile ficava comprimido | O breakpoint mobile não abrangia algumas larguras | O layout mobile passou a ser aplicado até 800px. |

**Evidência do problema:**  
Inserir aqui as capturas de tela do layout antes e depois das correções.

## 7. Reteste

| Teste | Correção realizada | Resultado do reteste | Status |
| --- | --- | --- | --- |
| T04 | Link do Extrato corrigido | `extrato.html` abriu corretamente | APROVADO |
| T05 | `operacoes.css` corrigido | Pagamentos carregou com formulário e estilos | APROVADO |
| T08 | Breakpoint mobile ajustado | Tela de 390px não apresentou overflow | APROVADO |
| T10 | Navegação de configurações ajustada | Configurações abriu corretamente | APROVADO |

## 8. Resultado Final

**Testes aprovados:** 10  
**Testes reprovados:** 0  
**Problemas encontrados:** 5  
**Problemas corrigidos:** 5

### Situação final

[x] Página aprovada após correções  
[ ] Página aprovada sem correções  
[ ] Página necessita de novos testes  
[ ] Página necessita de novas correções

## 9. Conclusão

Os testes permitiram verificar o funcionamento do dashboard, da barra de navegação, dos atalhos bancários, do controle de saldo e da adaptação para diferentes telas. Durante a análise foram identificados problemas de navegação, ausência da barra inferior em algumas páginas, inconsistências de CSS e falta de uma área própria para cartões.

Após as correções, os fluxos principais foram testados novamente e apresentaram o comportamento esperado. A realização dos testes foi importante para encontrar problemas que não seriam percebidos apenas observando o código, principalmente aqueles relacionados à navegação e à visualização em dispositivos móveis.

O sistema foi considerado aprovado como uma simulação front-end. Ele não possui autenticação real, backend ou operações financeiras reais.
